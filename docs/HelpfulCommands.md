# Helpful Commands

## Delete all evicted pods

```cli
kubectl get pods --all-namespaces --field-selector 'status.phase==Failed' -o json | kubectl delete -f -
```

- [Source](https://stackoverflow.com/a/54648944/1322471)

## Scale all deployments in a Namespace

```cli
kubectl scale deployment -n <namespace> --replicas 0 --all
```

---

## SOPS

### To encrypt the file

```cli
sops --encrypt --age $(cat $SOPS_AGE_KEY_FILE |grep -oP "public key: \K(.*)") --encrypted-regex '^(data|stringData)$' --in-place ./secret.sops.yaml
```

### To decrypt the file

```cli
sops --decrypt --age $(cat $SOPS_AGE_KEY_FILE |grep -oP "public key: \K(.*)") --encrypted-regex '^(data|stringData)$' --in-place ./secret.sops.yaml
```

---

## Hardware

### How to get device UUID path

Example for getting the UUID Path for a device with nvme in the name:

```cli
ls -la /dev/disk/by-id/* | grep nvme
```

---
