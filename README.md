# 🏡 🧪 Home Lab

## 📖 Overview

This mono repository houses the infrastructure for my homelab. I try to adhere to Infrastructure as Code (IaC) and GitOps practices using tools like [Ansible](https://www.ansible.com/), [Terraform](https://www.terraform.io/), [Kubernetes](https://kubernetes.io/), [Flux](https://github.com/fluxcd/flux2), [Renovate](https://github.com/renovatebot/renovate) and [GitHub Actions](https://github.com/features/actions).

## ⛵ How to get started

There is a template over at [onedr0p/flux-cluster-template](https://github.com/onedr0p/flux-cluster-template) if you want to try and follow along with some of the practices I use here.

## 🎨 Cluster components

+ [actions-runner-controller](https://github.com/actions/actions-runner-controller): Self-hosted Github runners
+ [cert-manager](https://cert-manager.io/docs/): Creates SSL certificates for services in my k3s cluster.
+ [cilium](https://cilium.io/get-started/): Internal Kubernetes networking plugin.
+ [external-dns](https://github.com/kubernetes-sigs/external-dns): Automatically manages DNS records from my cluster in a cloud DNS provider.
+ [external-secrets](https://github.com/external-secrets/external-secrets/): Managed Kubernetes secrets using [Doppler](https://www.doppler.com).
+ [ingress-nginx](https://github.com/kubernetes/ingress-nginx/): Ingress controller to expose HTTP traffic to pods over DNS.
+ [Rook](https://rook.io): Distributed block storage for persistent storage.
+ [sops](https://github.com/mozilla/sops): Managed secrets for Kubernetes, Ansible and Terraform which are commited to Git.
+ [volsync](https://volsync.readthedocs.io/en/stable/) and [snapscheduler](https://backube.github.io/snapscheduler/): Backup and recovery of persistent volume claims.

... and more!

## 🗄️ Hardware
<details>
  <summary>Click to see the summary!</summary>

## Production Nodes

| Device             | Count | Specs                                                                                                                                                                                                                                                                                                          | OS                                                  |
|--------------------|-------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| MinisForum um350   | 1     | **CPU** `Intel i5-8279U (8) @ 4.100GHz` <br/> **GPU** `Intel CoffeeLake-U GT3e` <br/> **RAM** `32GB` <br/> **M.2 SSD** `500GB` <br/> **HDD SSD** `500GB`                                                                                                                                                       | Ubuntu 22.04.4 LTS (Jammy Jellyfish)                    |
| MinisForum um350   | 1     | **CPU** `AMD Ryzen 5 3550H @ 2.100GHz` <br/> **GPU** `AMD ATI Radeon Vega Series` <br/> **RAM** `32GB` <br/> **M.2 SSD** `500GB` <br/> **HDD SSD** `500GB`                                                                                                                                                     | Ubuntu 22.04.4 LTS (Jammy Jellyfish)                      |
| Minisforum um560   | 1     | **CPU** `AMD Ryzen 5 5600H @ 12x 3.3GHz` <br/> **GPU** `AMD ATI Radeon Vega Series` <br/> **RAM** `32GB`  <br/> **M.2 SSD** `1TB` <br/> **HDD SSD** `500GB`                                                                                                                                                    | Ubuntu 22.04.4 LTS (Jammy Jellyfish)                      |

## Staging Nodes

| Device             | Count | Specs                                                                                                                                                                                                                                                                                                          | OS                                                  |
|--------------------|-------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| Turing Pi RK1      | 4     | **CPU** <br/> `4x&middot;(Cortex-A76 + Cortex-A55)` <br/> **GPU** `ARM Mali-G610MP4 4-core GPU` <br/> **NPU** `AI accelerator NPU 6TOPS` <br/> **RAM** `16GB` <br/> **M.2 SSD** `500GB` <br/> [RK1 Specs](https://docs.turingpi.com/docs/turing-rk1-specs-and-io-ports) | Ubuntu 22.04 LTS Server based on the BSP Linux 5.10 |

## Networking

| Device             | Count | Specs                                                                                                                                                                                                                                                                                                         | OS       |
|--------------------|-------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| Turing Pi Board V2 | 1     | **Switch** <br/>   - `1Gbps Switch (RTL8370MB-CG +)` <br/>   - VLAN Support <br/> **Storage Interfaces** <br/>   - `2x SATA 3 up to 6Gbps per port*` <br/>   - 4x M.2 Slots (2260 or 2280 NVMe drives) <br/> https://docs.turingpi.com/docs/turing-pi2-specs-and-io-ports                                     |          |
| Unifi UDM Pro      | 1     | **CPU** `4-core ARM Cortex®-A57 @1.7GHz`  <br/> **System Memory** `4GB DDR4` <br/> **On-board storage**  `16 GB eMMC` <br/> **Networking interface** <br/>  - (8) LAN: `GbE RJ45 ports` <br/>  - (1) WAN: `GbE RJ45 port` <br/> **SFP+ interface** <br/>  - (1) LAN: `10G SFP+`  <br/>  - (1) WAN: `10G SFP+` | Unify OS |

</details>

## 📜 Changelog

See my _awful_ commit [main history](https://github.com/oscaromeu/home-ops/commits/main) and [legacy history](https://github.com/oscaromeu/home-ops/tree/d75a6360586de8b5b5c4ff6b553b7512cfea5007)

## :handshake:&nbsp; Gratitude and thanks

Thanks all the people of [Home Operations](https://discord.gg/home-operations) Discord community who put a lot of effort and donate their time to the community.

## 🔏 License

See [LICENSE](./LICENSE) v.g WTF License
