---
title: Solar-Powered IoT Telemetry Sensor
summary: Engineered a deep-sleep ESP-32 microcontroller system for remote water temperature monitoring and server data transmission.
role: Embedded Systems Engineer
date: 2026-09-01
tags: [ESP-32, IoT, C++, Power Management]
featured: true
---

## Objective
The goal of this project was to design and deploy a remote, off-grid water temperature monitoring system. The primary engineering constraint was absolute power autonomy: the device needed to run indefinitely on a solar-charged battery loop without manual intervention or grid power access.

## My Role & Contribution
I architected this project from the component level up to the data ingestion pipeline, including:
* Wiring and integrating the hardware (ESP-32, DS18B20 probe, solar charge controllers, and AA battery banks).
* Writing the C++ firmware to manage the sensor data and network transmission.
* Engineering the power budget using the ESP-32's extreme deep-sleep states.
* Routing the transmitted payload to my self-hosted enterprise homelab for visualization.

## Engineering Process

### 1. Hardware Integration
At the core of the system is an ESP-32 microcontroller paired with a waterproof DS18B20 temperature sensor. Because the system is deployed remotely, I engineered a self-sustaining power array using AA batteries integrated with a solar charge controller, ensuring the battery bank recharges continuously during daylight hours.

### 2. Firmware & Power Budgeting
An ESP-32 running continuously would drain the battery bank in a matter of days. To solve this, I wrote custom firmware that heavily utilizes the microcontroller's deep-sleep mode. The system rests in a micro-watt power state, waking up exactly every 15 minutes. Upon waking, it powers the sensor, reads the water temperature, establishes a brief WiFi connection, transmits the payload, and immediately returns to deep sleep. 

### 3. IoT Data Pipeline
A sensor is only as good as the data it logs. I configured the ESP-32 to transmit its 15-minute telemetry payloads securely over the network back to my Proxmox VE homelab. The data is ingested into a time-series database and visualized on a live Grafana dashboard, allowing me to monitor remote environmental conditions in real-time.

## Results & Impact
* **Autonomous Operation:** Successfully achieved a sustainable power budget where solar generation outpaces the deep-sleep and transmission draw, allowing the sensor to run off-grid indefinitely.
* **Reliable Data Pipeline:** Bridged the gap between remote embedded hardware and enterprise-grade server infrastructure, maintaining a highly reliable, 15-minute resolution dataset of environmental telemetry.

---

