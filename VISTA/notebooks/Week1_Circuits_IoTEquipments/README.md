# 📦 Week 1 – Foundations of IoT and Circuits

Welcome to Week 1 of the NeoRover R&D journey! This week focuses on understanding the **core electrical concepts** that power every IoT device—from smart watches to autonomous delivery bots. While we won’t build physical circuits just yet, this foundational theory will empower you to safely and effectively use microcontrollers like Arduino in the coming weeks.

---

## 🎯 Learning Objectives

By the end of Week 1, you will:
- Understand what **electric current, voltage, and resistance** are.
- Identify and describe the 3 key **passive circuit elements**: **Resistor (R)**, **Capacitor (C)**, and **Inductor (L)**.
- Learn the **IV (Current-Voltage) equations** for each element and their physical significance.
- Use the **passive sign convention** when analyzing or sketching circuits.
- Connect these principles to practical Arduino use cases (e.g., blinking LEDs, using resistors with sensors).

---

## 🧱 Passive Circuit Elements

These are the **three passive components** you’ll use throughout Arduino and IoT circuit design:

### 1. 🟫 **Resistor (R)**
- **Symbol:** `—\/\/—` or `—⎯⎯⎯`
- **Function:** Limits current to prevent damage to components.
- **IV Equation (Ohm’s Law):**  
  \[
  V = i \cdot R
  \]
- **Use Case:** Protecting LEDs, adjusting sensor input ranges.

---

### 2. ⚡ **Capacitor (C)**
- **Symbol:** `—| |—`
- **Function:** Stores and releases electrical energy; responds to voltage changes.
- **IV Equation:**  
  \[
  i = C \cdot \frac{dV}{dt}
  \]
- **Use Case:** Debouncing buttons, signal smoothing, analog filters.

---

### 3. 🧲 **Inductor (L)**
- **Symbol:** `—coils—`
- **Function:** Stores energy in a magnetic field; opposes changes in current.
- **IV Equation:**  
  \[
  V = L \cdot \frac{di}{dt}
  \]
- **Use Case:** Motor control, switching power supplies (future use).

---

## 🔁 Passive Sign Convention

For **consistent circuit analysis**, current (i) is always drawn as **entering the positive terminal (V+)** of a component.  
This helps avoid sign errors in calculations and simulations.

