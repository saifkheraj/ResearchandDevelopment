# 💡 Smart Room Light System - IoT Project (Beginner Friendly)

This project is part of an IoT learning journey. It uses basic components like an Arduino UNO, an LDR sensor, and a relay to build a **Smart Light System** that automatically turns on when it's dark. This guide also covers foundational knowledge in microcontrollers, signals, sensors, actuators, datasheets, and prototyping equipment.

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

🔌 What’s on the Arduino UNO Board?
✅ Microcontroller – Runs your code

✅ USB Port – Connects to your PC

✅ DC Power Jack – External power if needed

✅ Reset Button – Restart your program

✅ Digital Pins (14) – For buttons, sensors, LEDs

✅ Analog Pins (6) – For sensors with variable input (e.g. temperature, light)

✅ Power Pins – To give 5V or GND to components

---

## 🛒 Selecting and Buying Components

### ✅ What You Must Know:
- **Voltage**: Does the part work with 3.3V or 5V?
- **Current**: Will the part overheat or burn out? (e.g., LED max = 20mA)
- **Size**: Will it fit in your casing or breadboard?
- **Compatibility**: Is it compatible with your microcontroller?
- **Pin Spacing**: Does it match 0.1 inch breadboard holes?

You mostly buy online, so **you must understand the parts yourself**. Online stores rarely help you compare compatibility.

---

## 📄 Datasheets: The Engineer’s Instruction Manual

Every component, especially **integrated circuits (ICs)**, has a **datasheet** — a document with technical specifications.

### 📐 Physical Dimensions:
- Check if the **pin spacing fits the breadboard** (0.1" is standard)
- Check if the component fits in your enclosure or setup

### 🔋 Electrical Parameters:
- **Voltage range** (min and max)
- **Current limits**
- Whether it’s 3.3V or 5V compatible
- Mismatched voltages can damage parts (e.g., sending 5V to a 3.3V-only IC)

### 🌡️ Thermal Parameters:
- Maximum and minimum operating temperatures
- Usually only relevant for extreme environments

### 💻 Software Libraries vs Datasheet Access:
- Arduinos and Raspberry Pis use **library functions** to simplify programming
- These hide many hardware-level features
- If you need advanced control (e.g., low-level timing or interrupts), the **datasheet** is your guide
- Some datasheets for microcontrollers can be **100–1000+ pages** long
- Beginners can skip most of it, but should learn to extract **key specs**

### 🔍 How to Read One:
1. Google the part number + "datasheet" (e.g., `LM393 datasheet`)
2. Look for key tables and diagrams:
   - Electrical characteristics
   - Pin configuration
   - Package dimensions
3. Ignore what you don’t need — focus on voltage, current, and pin layout

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
- Develop basic skills to read datasheets and select components

---

## 📦 What’s Next?
- Add a mobile app to control it manually (ESP8266 or ESP32)
- Add a temperature sensor for Smart Fan control
- Control multiple lights based on room zones

---

> ⚠️ **Safety Tip:** If you're using a 220V light bulb, be extremely careful and consult a professional if unsure. Relays isolate control voltage from AC, but wiring AC current should be handled with proper insulation.

---

Happy Building! 🚀
