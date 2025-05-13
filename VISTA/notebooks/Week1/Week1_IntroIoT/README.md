# 💡 Smart Room Light System - IoT Project (Beginner Friendly)

This project is part of an IoT learning journey. It uses basic components like an Arduino UNO, an LDR sensor, and a relay to build a **Smart Light System** that automatically turns on when it's dark.

---

## 📘 Project Goal
Automatically switch ON a light when it gets dark and OFF when it’s bright, using an **LDR (light sensor)** and a **Relay module**.

---

## 🧠 Components Used

| Component         | Type             | Description                                 |
|------------------|------------------|---------------------------------------------|
| Arduino UNO       | Microcontroller  | The brain of the system                     |
| LDR Sensor        | Sensor           | Detects light intensity (analog input)      |
| Relay Module      | Actuator         | Switches light bulb ON/OFF (digital output) |
| Breadboard        | Prototyping tool | Connect components without soldering        |
| Jumper Wires      | Connectors       | Wires to connect all components             |
| USB Cable         | Connector        | Upload code and power Arduino               |
| Resistor (10k ohm)| Component        | Used with LDR in a voltage divider          |
| Bulb + AC Cable   | Output Device    | The light you want to control               |

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

---

## 📦 What’s Next?
- Add a mobile app to control it manually (ESP8266 or ESP32)
- Add a temperature sensor for Smart Fan control
- Control multiple lights based on room zones

---

> ⚠️ **Safety Tip:** If you're using a 220V light bulb, be extremely careful and consult a professional if unsure. Relays isolate control voltage from AC, but wiring AC current should be handled with proper insulation.

---

Happy Building! 🚀
