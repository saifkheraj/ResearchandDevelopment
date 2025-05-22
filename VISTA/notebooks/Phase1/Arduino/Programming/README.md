# 🚀 Arduino Project: Blink the Onboard LED

This README will walk you through creating your **first real Arduino program** that makes the onboard LED blink! It’s a simple and fun project, perfect for beginners.

---

## 🛠 What You Need

* An Arduino board (e.g., Uno, Nano)
* USB cable to connect to your computer
* Arduino IDE installed
* Alternatively: Use [Tinkercad Circuits](https://www.tinkercad.com/) for simulation

---

## 📄 What This Program Does

You’ll write a program that:

* Sets the **built-in LED (pin 13)** as an output
* Turns it **on and off with a 1-second delay** between each state
* Repeats this blinking **forever** using the `loop()` function

No external hardware is needed because we are using the onboard LED!

---

## 🧠 Understanding the Code Structure

### 1. `setup()`

* Runs **once** when the board is powered on or reset
* Used for **initial setup**
* Here we configure **pin 13** as an OUTPUT pin

### 2. `loop()`

* Runs **continuously in a loop**
* We’ll turn the LED **on**, **wait**, turn it **off**, and **wait again**

---

## 💻 The Full Code

```cpp
void setup() {
  // Set LED pin to output
  pinMode(13, OUTPUT);
}

void loop() {
  digitalWrite(13, HIGH); // Turn LED on
  delay(1000);            // Wait 1 second

  digitalWrite(13, LOW);  // Turn LED off
  delay(1000);            // Wait 1 second
}
```

---

## 📝 How the Code Works

1. `pinMode(13, OUTPUT);`

   * Tells Arduino that pin 13 (where the LED is) will **send** signals (output)

2. `digitalWrite(13, HIGH);`

   * Sends **HIGH voltage** to pin 13 → LED turns **on**

3. `delay(1000);`

   * Pauses the program for **1000 milliseconds** = **1 second**

4. `digitalWrite(13, LOW);`

   * Sends **LOW voltage** → LED turns **off**

5. Another `delay(1000);` makes sure LED stays off for 1 second

This pattern **repeats forever** inside `loop()`.

---

## ✅ Running the Program

1. Open Arduino IDE.

2. Paste the code above into a new sketch.

3. Save your sketch (e.g., `first_led_blink`).

4. Click ✅ **Verify** to compile the code.

   * If successful, you’ll see a "compiling done" message.
   * If there’s an error like missing `;`, the IDE will tell you.

5. Plug in your Arduino.

6. Go to **Tools → Board** and select your board type (e.g., Arduino Uno).

7. Go to **Tools → Port** and select the correct port.

8. Click the **Upload** button (right arrow icon).

9. The LED should now **blink every second**!

---

## 🔧 Common Troubleshooting

* ❗ **Missing semicolon (`;`)** will stop the code from compiling
* ⚠️ **Wrong board or port** selected → upload won’t work
* 🔌 Check your USB cable if board is not detected

---

## 🧪 Bonus Tips

* You can change the delay value to make the LED blink faster or slower
* Use `//` comments to make your code easier to understand

```cpp
// This line turns the LED on
```

---

## 🎉 Congratulations!

You’ve just built and uploaded your first real Arduino program. This is the foundation of almost everything you'll do with Arduino, so mastering this pattern is key.

Happy building! 🚦✨
