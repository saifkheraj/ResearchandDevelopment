# Week 1: Introduction to IoT, Circuits, and Voltage

## 🎯 Learning Objectives
- Understand the basics of IoT architecture.
- Learn fundamental concepts of electricity: **voltage**, **current**, and **resistance**.
- Get familiar with **passive circuit components**: resistor, capacitor, and inductor.
- Prepare for hands-on Arduino work by understanding how circuits work behind the scenes.

---

## 📘 Study Materials
- **Course:** [Introduction to the Internet of Things and Embedded Systems – UC Irvine](https://www.coursera.org/learn/iot)
- **Supplementary:** [Khan Academy – Intro to Circuits](https://www.khanacademy.org/science/electrical-engineering)

---

## 🧱 Core Concepts

### ⚡ Electric Current
- **Definition:** Flow of electric charge (usually electrons).
- **Analogy:** Like water flowing in a pipe—driven by pressure (voltage).
- In copper wires (used in Arduino), free electrons move when voltage is applied.

### 🔋 Voltage
- Voltage is the **potential difference** that pushes current through a circuit.
- Created by a power source like a battery or Arduino’s 5V pin.

### 🔌 Circuit Elements
These are the basic building blocks for all Arduino circuits.

#### 1. Resistor (🟫)
- **Purpose:** Limits current to protect components.
- **Symbol:** Zigzag `—\/\/—`
- **Arduino Use:** Always used with LEDs to prevent burning them out. Also used in voltage dividers and sensors.

#### 2. Capacitor (⚡)
- **Purpose:** Stores and releases electrical energy.
- **Symbol:** `—||—`
- **Arduino Use:** Used in timing circuits, analog signal smoothing, or debounce buttons.

#### 3. Inductor (🧲)
- **Purpose:** Stores energy in a magnetic field.
- **Symbol:** Coil `—oooo—`
- **Arduino Use:** Used in motor driver circuits, power supplies (less common for beginners).

---

## 🔧 Connecting to Arduino Projects

Even though no hardware is used this week, understanding these basics is **crucial** before you:
- Blink an LED
- Read from a sensor
- Control a motor or buzzer

For example:
```text
Arduino Pin (5V) —> Resistor —> LED —> GND
