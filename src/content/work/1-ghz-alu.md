---
title: 1 GHz Arithmetic Logic Unit (ALU)
summary: Designed and simulated a Verilog ALU with a strict 1ns timing constraint, achieving 578 ps slack in Cadence Genus.
role: Hardware Designer
date: 2026-11-01
tags: [Verilog, Cadence EDA, Digital Logic]
featured: true
---

## Objective
The goal of this CE 303 course project was to design, verify, and synthesize a digital Arithmetic Logic Unit (ALU) capable of performing standard arithmetic and bitwise operations under a strict **1ns timing constraint**, targeting **1 GHz clock performance**.

## My Role & Contribution
As the sole hardware designer for this project, I was responsible for the entire digital logic lifecycle:
* Authoring the RTL design (`simple_alu.v`) and comprehensive testbenches (`simple_alu_tb.v`).
* Writing SDC constraint files to enforce the 1ns clock cycle.
* Running logic synthesis via **Cadence Genus** and verifying timing paths.
* Performing gate-level simulation using **Cadence Xcellium** and **SimVision**.

## Engineering Process

### 1. RTL Design & Verification
I developed the ALU module in Verilog, ensuring accurate execution of addition, bitwise logic, and precise handling of edge cases like subtraction carry-out behavior. I built a robust testbench to validate the logic against expected truth tables before moving to synthesis.

### 2. Synthesis & Timing Constraints
To hit the 1 GHz performance target, I authored specific SDC constraint files. During the Cadence Genus synthesis phase, I systematically addressed I/O timing issues, specifically analyzing and resolving constraint warnings for 19 unclocked inputs and 9 unclocked outputs to ensure absolute timing closure across the entire module.

### 3. Gate-Level Simulation & Debugging
Transitioning from behavioral to gate-level simulation presented unexpected library mapping challenges. I encountered `CUVMUR` errors in Cadence Xcellium during the initial gate-level runs. I troubleshot this by diagnosing the library discrepancy and replacing the `.lib` files with the correct Verilog library models, resulting in a clean, error-free simulation in SimVision.

## Results & Impact
* **Timing Closure Achieved:** The final Genus synthesis timing report confirmed **Path 1 MET with 578 ps of slack**, comfortably beating the 1ns (1000 ps) constraint. 
* **Design Verification:** The ALU successfully passed all testbench assertions at the gate level, proving that the digital logic was both functionally correct and physically viable for 1 GHz clock speeds. 

---
