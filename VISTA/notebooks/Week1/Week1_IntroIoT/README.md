# 💡 Smart Room Light System - IoT Project (Beginner Friendly)

This project is part of an IoT learning journey. It uses basic components like an Arduino UNO, an LDR sensor, and a relay to build a **Smart Light System** that automatically turns on when it's dark. This guide also covers core foundational knowledge in microcontrollers, signals, sensors, actuators, and prototyping equipment.

---

## 🧠 IoT Fundamentals – Start from Scratch

### 🔧 What is a Microcontroller?
A **microcontroller** is a tiny computer on a single chip. It controls IoT devices by:
- Reading inputs from sensors
- Processing data using code
- Sending outputs to actuators

### 🧩 Microcontroller Contains:
- **CPU** (processes instructions)
- **Flash Memory** (stores program/code)
- **RAM** (temporary memory)
- **GPIO Pins** (General Purpose Input/Output)
- **ADC** (Analog to Digital Converter)
- **Timers and Interrupts**

📘 **Example**: Arduino UNO
- 14 digital pins, 6 analog pins
- USB programmable
- Beginner-friendly and open-source

---

## 🔌 Analog vs Digital Signals

| Type     | Range       | Description                          | Examples               |
|----------|-------------|--------------------------------------|------------------------|
| Analog   | 0–1023      | Continuous signal                    | LDR, potentiometer     |
| Digital  | 0 or 1      | ON/OFF, HIGH/LOW                     | Button, relay signal   |

### 🧠 Why This Matters:
Microcontrollers need to interpret signals to decide what action to take. Analog signals require an **ADC** to convert to digital format.

---

## 🧰 Equipment Overview

| Equipment        | Role                                         |
|------------------|----------------------------------------------|
| **Breadboard**   | Test circuits without soldering              |
| **Jumper Wires** | Connect microcontroller, sensors, actuators  |
| **USB Cable**    | Power and program the Arduino                |
| **Resistors**    | Control current and divide voltage           |
| **Relay Module** | Switch high-voltage devices safely           |
| **Potentiometer**| Adjustable voltage source (analog input)     |
| **Push Button**  | Digital input trigger (ON/OFF)               |
| **Keypad**       | Input multiple numbers/commands              |

---

## ⚙️ Embedded Systems and Integrated Circuits

### 🔧 Embedded Systems:
An embedded system is a combination of **hardware + software** designed to perform a specific function. IoT devices are examples of embedded systems.

### 🔩 Integrated Circuits (ICs):
ICs are small chips that contain electronic components (transistors, resistors, diodes) integrated together to perform a specific function — like a timer, amplifier, or microcontroller.

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

---

## 📦 What’s Next?
- Add a mobile app to control it manually (ESP8266 or ESP32)
- Add a temperature sensor for Smart Fan control
- Control multiple lights based on room zones

---

> ⚠️ **Safety Tip:** If you're using a 220V light bulb, be extremely careful and consult a professional if unsure. Relays isolate control voltage from AC, but wiring AC current should be handled with proper insulation.

---

Happy Building! 🚀
