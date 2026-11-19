---
title: Enterprise Proxmox Homelab & Network Infrastructure
summary: Architected a highly available, self-hosted Proxmox VE cluster with a TrueNAS ZFS pool, WireGuard VPN, and a unified observability stack.
role: Systems Administrator & Network Architect
date: 2026-07-01
tags: [Proxmox, Docker, Linux, TrueNAS/ZFS, Grafana]
featured: true
---

## Objective
The goal of this ongoing infrastructure project is to build and maintain a scalable, fault-tolerant home server ecosystem capable of hosting containerized services, high-bandwidth media streaming, and secure remote access. The primary engineering constraint is ensuring strict service isolation, data integrity, and high availability on bare-metal hardware.

## My Role & Contribution
As the sole architect and administrator, I designed the system from the bare metal up to the application layer:
* Provisioning a bare-metal hypervisor cluster (Dell R710 and HP ProDesk).
* Designing network isolation and remote tunnel access via **WireGuard**.
* Deploying a comprehensive **Docker/Portainer** container stack across isolated **Debian VMs**.
* Implementing enterprise-grade telemetry and log aggregation using **Prometheus, Loki, and Grafana**.

## Engineering Process

### 1. Bare-Metal Virtualization & Storage Architecture
I deployed a **Proxmox VE** cluster across my bare-metal hardware to act as the foundational hypervisor. To ensure robust data integrity and snapshot capabilities, I virtualized **TrueNAS** and configured a ZFS storage pool ("Angry-Storage") with direct disk pass-through, creating a resilient backbone for all hosted services and continuous file synchronization via Syncthing from my Arch Linux daily-driver workstations.

### 2. Container Orchestration & Secure Networking
Instead of running services directly on the host, I spun up isolated Debian VMs to serve as Docker hosts managed via Portainer. I deployed a complex media and automation stack (Jellyfin, Navidrome, the *arr suite) and engineered secure network routing—specifically tunneling sensitive container traffic (like qBittorrent) exclusively through a Gluetun VPN container to prevent IP leaks. I also configured a WireGuard VPN to provide seamless, secure remote access to the internal network.

### 3. Telemetry & Fail-Safe Management
To maintain observability over the infrastructure, I built a production-tier monitoring stack. I deployed Node Exporter and cAdvisor to scrape hardware and container metrics, aggregating them into Prometheus and visualizing them on custom Grafana dashboards alongside Loki for centralized logging. Furthermore, to ensure I could recover the server from anywhere, I configured out-of-band management via the Dell R710's iDRAC 6 controller to handle power losses and dynamic IP shifts.

## Results & Impact
* **Production-Grade Reliability:** Successfully architected an environment that mirrors enterprise cloud infrastructure, achieving high uptime and automated recovery capabilities.
* **Full-Stack Competency:** The homelab serves as a continuous, practical sandbox that bridges my knowledge of physical hardware constraints (power, thermals, iDRAC) with scalable software deployment and network administration.

---
