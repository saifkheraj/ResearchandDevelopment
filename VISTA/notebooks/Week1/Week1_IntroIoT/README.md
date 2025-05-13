# 💡 Smart Room Light System - IoT Project (Beginner Friendly)

This project is part of an IoT learning journey. It uses basic components like an Arduino UNO, an LDR sensor, and a relay to build a **Smart Light System** that automatically turns on when it's dark. This guide also covers foundational knowledge in microcontrollers, signals, sensors, actuators, and prototyping equipment.

---

## 🧭 Design Philosophy: Hardware + Software in IoT

IoT systems are built using a **combination of hardware and software**, and the two must be designed together.

### 🔧 Hardware (What You Can Touch):
- Includes microcontrollers, sensors, actuators, capacitors, resistors, etc.
- Built on a **breadboard** during prototyping
- Wired together with **jumper wires** to allow data and power flow

### 💻 Software (What You Write):
- Written in Arduino IDE or similar environments
- Defines how the microcontroller behaves based on inputs from sensors
- Controls the hardware (e.g., turning an LED on when it's dark)

### 🔁 Hardware + Software Must Match:
- When writing code, you must understand which pin controls which component
- Software behavior is meaningless without hardware, and vice versa

---

## 🧱 The Design Process: Iteration and Adaptation

1. You start by **choosing components** (microcontroller, sensors, etc.)
2. As you build and test, you often **realize a part doesn’t work** or doesn’t fit your needs
3. You go back, change, or reorder parts

This is **normal** and part of every IoT project.

---

## 🛒 Selecting and Buying Components

### ✅ What You Must Know:
- **Voltage**: Does the part work with 3.3V or 5V?
- **Current**: Will the part overheat or burn out? (e.g., LED max = 20mA)
- **Size**: Will it fit in your casing or breadboard?
- **Compatibility**: Is it compatible with your microcontroller?

Today, you mostly buy online:
- You won’t have in-store experts like RadioShack
- YOU are responsible for understanding what each component does

---

## 📄 Datasheets: Your Best Friend

Every component has a **datasheet** — a document that contains all technical info:
- Voltage and current limits
- Pinout diagrams
- Dimensions
- Behavior under different conditions

### 🔍 How to Use:
- Google the part number (e.g., “L293D datasheet”)
- Download the PDF
- Read at least the key specs before ordering

This helps you **order the right component the first time**.

---

## 📘 Project Goal
Automatically switch ON a light when it gets dark and OFF when it’s bright, using an **LDR (light sensor)** and a **Relay module**.

---

## 🧠 Components Used (with Detailed Descriptions)

### 🧠 Arduino UNO (Microcontroller)
- Acts as the **brain** of the system
- Interprets signals from the sensor
- Sends signal to relay to turn light ON/OFF

### 👁️ LDR - Light Dependent Resistor (Sensor)
- Analog sensor
- Resistance changes based on light
- Connected using voltage divider with a resistor

### ⚡ Relay Module (Actuator)
- Switches an AC light ON/OFF using a low-voltage control signal from Arduino
- Digital output: HIGH = ON, LOW = OFF

### 🧪 10kΩ Resistor
- Used to create a voltage divider with the LDR so that Arduino can read light levels

### 🔌 Breadboard
- A no-solder prototyping board
- Allows easy testing and rearranging of components

### 🧵 Jumper Wires
- Connect different components to the Arduino and breadboard

### 🔌 USB Cable
- Used to power the Arduino and upload code from a computer

### 💡 Light Bulb (Output Device)
- Switched ON/OFF via the relay
- Controlled by the microcontroller

---

## 🧱 Circuit Diagram Overview

### 🔌 LDR Wiring:
```
[5V] --- [LDR] --- (A0 on Arduino)
                     |
                  [10kΩ Resistor]
                     |
                   [GND]
```

### ⚡ Relay Wiring:
- Relay VCC → 5V on Arduino
- Relay GND → GND
- Relay IN → D7
- Light bulb connected to relay's Normally Open (NO) and Common (COM) pins

---

## 🔣 Signals Overview

| Signal Type | Component      | Description                       |
|-------------|----------------|-----------------------------------|
| Analog      | LDR            | Gives values from 0–1023          |
| Digital     | Relay          | Receives HIGH or LOW signal       |

---

## 💻 Arduino Code
```cpp
int ldrPin = A0;
int relayPin = 7;
int threshold = 500;

void setup() {
  pinMode(relayPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int ldrValue = analogRead(ldrPin);
  Serial.println(ldrValue);

  if (ldrValue < threshold) {
    digitalWrite(relayPin, HIGH); // Light ON
  } else {
    digitalWrite(relayPin, LOW);  // Light OFF
  }
  delay(500);
}
```

---

## 🔍 How It Works
1. LDR senses brightness.
2. Arduino reads LDR value.
3. If it’s dark (value < 500), Arduino sends HIGH to relay → light turns ON.
4. If it’s bright (value ≥ 500), Arduino sends LOW → light turns OFF.

---

## 🛒 Starter Kit Recommendation
Instead of buying parts separately, get an **Arduino Starter Kit**:
- Comes with sensors, breadboard, wires, LEDs, relay, and more.
- Good brands: Elegoo, Official Arduino, Keyestudio

---

## ✅ Learning Goals
- Understand analog and digital signals
- Learn wiring and voltage divider concept
- Practice coding in Arduino IDE
- Control real-world devices (AC light) using a relay
- Learn what embedded systems and ICs are
- Build understanding of hardware/software co-design

---

## 📦 What’s Next?
- Add a mobile app to control it manually (ESP8266 or ESP32)
- Add a temperature sensor for Smart Fan control
- Control multiple lights based on room zones

---

> ⚠️ **Safety Tip:** If you're using a 220V light bulb, be extremely careful and consult a professional if unsure. Relays isolate control voltage from AC, but wiring AC current should be handled with proper insulation.

---

Happy Building! 🚀
