---
title: Volumes and Storage
---

## Setting Longhorn as default k3s storage class

By default, k3s includes Rancher's Local Path Provisioner, which allows the creation of persistent volume claims using local storage on the respective node.

To set Longhorn as the default storageClass when installing a new Helm chart, you need to remove Local Path Provisioner from the default storage class.

After installing Longhorn, you can check the default storage classes by running the following command:

```
kubectl get storageclass
```

The output will show the available storage classes:

```
NAME                   PROVISIONER             RECLAIMPOLICY   VOLUMEBINDINGMODE      ALLOWVOLUMEEXPANSION   AGE
local-path (default)   rancher.io/local-path   Delete          WaitForFirstConsumer   false                  10m
longhorn (default)     driver.longhorn.io      Delete          Immediate              true                   3m27s
```

Both Local Path and Longhorn are defined as default storage classes.

To remove Local Path from the default storage classes, use the following command:

```
kubectl patch storageclass local-path -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"false"}}}'
```

For detailed instructions, you can refer to the Kubernetes documentation on how to "Change the Default Storage Class".

## Backup and restore

### Postgres

#### Schedule Backup with Barman

To schedule regular backups of your PostgreSQL database using Barman, you can create a Kubernetes resource definition for a ScheduledBackup object. Here's an example YAML code block to get you started:

```yaml
---
apiVersion: postgresql.cnpg.io/v1
kind: ScheduledBackup
metadata:
  name: postgres
  namespace: default
spec:
  schedule: "@weekly"
  immediate: true
  backupOwnerReference: self
  cluster:
    name: postgres
```

In the example above, the schedule field is set to run weekly using the `@weekly` syntax. The `immediate` field is set to `true` to trigger an immediate backup when the `ScheduledBackup` object is created. The `backupOwnerReference` field is set to `self` to indicate that the `ScheduledBackup` object owns the backups it creates. Finally, the cluster field specifies the name of the PostgreSQL cluster to backup.

Note that the initial deployment of the ScheduledBackup will trigger an automatic backup. The ScheduledBackup object can be checked using the following command:

```
➜  ~ kubectl get scheduledbackups -A
NAMESPACE   NAME       AGE   CLUSTER    LAST BACKUP
default     postgres   21s   postgres   21s
```

This will list all ScheduledBackup objects in all namespaces, including the name of the cluster they're associated with and the timestamp of the last backup.

The contents of the backup can also be checked in the associated S3 bucket. For example, to list the contents of the base directory of a PostgreSQL cluster named postgres in an S3 bucket named `postgres-6484dcf2e155f357dc726df0183f43489564`, the following command can be run:

```
aws s3 ls s3://postgres-6484dcf2e155f357dc726df0183f43489564/postgres/base/
```

This will list all backup directories in the base directory, each of which is named after the timestamp of the backup.

### Velero

#### Schedule a periodic full backup

```yaml
apiVersion: velero.io/v1
kind: Schedule
metadata:
  name: full
  namespace: velero
spec:
  schedule: 0 4 * * *
  template:
    hooks: {}
    includedNamespaces:
    - 'default'
    #included_resources:
    #- '*'
    labelSelector:
      matchLabels:
        app: velero
        component: server
    includeClusterResources: true
    metadata:
      labels:
        type: 'full'
        schedule: 'daily'
    ttl: 720h0m0s
```

## Resources

+ [https://velero.io/docs/v1.3.0/api-types/schedule/](https://velero.io/docs/v1.3.0/api-types/schedule/)
+ [CloudNativePG API reference](https://cloudnative-pg.io/documentation/1.20/api_reference/)
