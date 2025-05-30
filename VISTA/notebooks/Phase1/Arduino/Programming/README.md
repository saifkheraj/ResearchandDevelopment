# Goal

Arduino project by making an LED blink. You'll learn about the key functions that control Arduino programs and how to debug issues using the Serial Monitor. Additionally, you will explore different methods to restart your program, both in hardware and software. 

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

<img width="654" alt="Screenshot 2025-05-23 at 3 16 30 AM" src="https://github.com/user-attachments/assets/0c13498b-b9a6-46ea-94cc-f041df9c1384" />



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


# 🖨️ Arduino Serial Monitor: Debugging Your First Program

This README explains how to **use the Serial Monitor** in Arduino to display logs, debug your code, and understand what’s happening inside your board in real time.

---

## 🎯 Objective

You’ll learn how to:

* Initialize serial communication
* Print messages to your computer
* View program output using the Serial Monitor in the Arduino IDE

---

## 📡 Why Use the Serial Monitor?

Your Arduino code runs **on the Arduino board**, not your computer. So, if you want to know what the board is doing (for example, whether a loop is working or a sensor is triggered), you need a way to **send messages from the board to your screen**.

This is where **Serial Communication** comes in — and it uses the **USB cable**, so no extra setup is needed.

---

## ✅ Full Code Example

```cpp
void setup() {
  Serial.begin(9600); // Start serial communication at 9600 baud
  Serial.println("Hello Arduino"); // Print welcome message
}

void loop() {
  Serial.println("In the loop"); // Print message repeatedly
  delay(500); // Wait half a second
}
```

---

## 🔍 Code Breakdown

### 1. `Serial.begin(9600);`

* Starts serial communication between Arduino and your computer.
* `9600` is the **baud rate**.
* This line should always go inside `setup()`.

### 2. What is Baud Rate?

* **Baud rate** is the number of signal or symbol changes that occur per second.
* `9600` baud means **9600 bits per second**.
* It defines the speed of communication between the Arduino and your computer.
* Both the Arduino code and the Serial Monitor must use the **same baud rate** for communication to work properly.
* Common baud rates include: `9600`, `19200`, `38400`, `57600`, `115200`.
* Higher rates are faster but may be less reliable on long or noisy connections.

### 3. `Serial.println("Hello Arduino");`

* Sends the text to the computer via USB.
* `println()` adds a **newline** after the message.
* Use `print()` if you want to keep printing on the same line.

### 4. `delay(500);`

* Waits 500 milliseconds (0.5 seconds) before printing again.

---

## 🔧 Using the Serial Monitor

1. **Upload your code** to the Arduino.
2. In the Arduino IDE, click the **Serial Monitor** icon (🔍 top right corner).
3. Set the **baud rate to 9600** at the bottom of the monitor window to match the code.
4. You should see:

```
Hello Arduino
In the loop
In the loop
In the loop
...
```

---

![image](https://github.com/user-attachments/assets/3e3186b0-aacd-4e67-bbed-5a42500199c1)


## 🛠 Troubleshooting

| Problem                         | Solution                                           |
| ------------------------------- | -------------------------------------------------- |
| No output in Serial Monitor     | Check baud rate matches `Serial.begin(9600)`       |
| Output is garbled or unreadable | Fix baud rate mismatch                             |
| Serial Monitor shows nothing    | Make sure Arduino is connected and code is running |

---

## 🧪 Tips for Debugging

* Place `Serial.println()` **before and after important code blocks** to see what executes and when.
* Use it to print **variable values**, like:

```cpp
int counter = 0;
Serial.println(counter);
```

---

## 🎉 Recap

* The Serial Monitor helps you **see what’s happening inside your Arduino**.
* Use `Serial.begin()` once in `setup()`.
* Use `Serial.print()` or `Serial.println()` to send logs.
* Match the **baud rate** in both the code and Serial Monitor window.

Now you can start debugging like a pro! 🛠️📟


Happy building! 🚦✨


# 🔁 Restarting an Arduino Program

In this guide, you’ll learn about the **different ways to restart your Arduino program** — whether for debugging, updating, or simply starting fresh. This is an essential skill for working efficiently with your board.

---

## 🔄 Why Restart?

* You may want to **re-run the program** from the beginning
* You may notice the board **restarts unexpectedly** and want to understand why
* You’re testing code changes and need to reset the behavior

---

## 🚪 Method 1: Power Off and On

### ✅ Steps:

* Unplug the **USB cable** from your Arduino
* Plug it back into your computer

### 🧠 What Happens:

* Arduino loses power and turns off
* When reconnected, it powers on and **automatically runs the program** from the beginning (`setup()` → `loop()`)

### ⚠️ Downside:

* It’s not convenient if you're doing frequent testing or debugging

---

## 🔘 Method 2: Press the Reset Button

### ✅ Steps:

* Find the small **red (or black) button** on the Arduino board labeled **RESET**
* Press it briefly

### 🧠 What Happens:

* The program stops instantly
* It **starts again from the beginning** (`setup()` → `loop()`)
* It does not erase your code; it simply re-runs it

### 📍Note:

* The button location may vary by board model

---

## 💻 Method 3: Reopen the Serial Monitor

### ✅ Steps:

* In the Arduino IDE, **open the Serial Monitor**
* Close it
* Open it again

### 🧠 What Happens:

* Some Arduino boards like **Uno, Nano, Mega** are designed to **restart when Serial Monitor is reopened**

### ⚠️ Limitation:

* This restart method **does not work** on all boards (e.g., **Leonardo**)

---

## 📤 Method 4: Re-upload the Code

### ✅ Steps:

* Click the **Upload button** (right arrow) in the Arduino IDE

### 🧠 What Happens:

* The board receives new code
* The current program is stopped
* The **new or same program is uploaded and immediately starts from the beginning**

### 💡Tip:

* This is the **most reliable way to restart** your program on any board

---

## 👀 Visual Confirmation

* Open the **Serial Monitor** before testing any restart method
* Add `Serial.println("Hello Arduino")` in `setup()` to see when the program restarts

### Example Output:

```
Hello Arduino
Hello Arduino
...
```

---

## 🎯 Summary Table

| Method                | Works on Most Boards | Requires USB Unplug? | Reliable?          |
| --------------------- | -------------------- | -------------------- | ------------------ |
| Power Off & On        | ✅ Yes                | ✅ Yes                | ✅ Very Reliable    |
| Press Reset Button    | ✅ Yes                | ❌ No                 | ✅ Very Reliable    |
| Reopen Serial Monitor | ⚠️ Not All Boards    | ❌ No                 | ⚠️ Board Dependent |
| Re-upload Code        | ✅ Yes                | ❌ No                 | ✅ Universal        |

---

## 🧪 Pro Tip

When working on real-time debugging, use `Serial.println()` in `setup()` to confirm the restart visually in the Serial Monitor.

Example:

```cpp
void setup() {
  Serial.begin(9600);
  Serial.println("Program started");
}
```

This lets you instantly confirm a successful restart. 🔄

Happy coding! ⚡🖥️




