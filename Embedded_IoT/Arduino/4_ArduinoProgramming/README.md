# Arduino Serial Communication, Program Structure, Data Types, Functions, Scope, Conditions, Loops & Arrays

## 📌 What is `Serial.begin()`?

`Serial.begin()` starts **serial communication** between your Arduino and your computer. This lets the Arduino send or receive data through the USB cable.

Example:

```cpp
void setup() {
  Serial.begin(9600);   // Start communication at 9600 bps
  Serial.println("Hello World!");
}
```

---

## ⚡ Why `9600`?

* `9600` is the **baud rate**, meaning 9600 bits per second.
* It’s the Arduino IDE’s **default** speed, reliable for most projects.
* You can use faster ones like `115200`, but both Arduino and Serial Monitor must match.

---

## ⚙️ Basic Structure of an Arduino Program

Every Arduino program has two main functions:

```cpp
void setup() {
  // Runs once at start
}

void loop() {
  // Runs repeatedly
}
```

Example – Blink LED:

```cpp
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000);
}
```

---

## 🔢 Data Types

Some common Arduino data types:

```cpp
int age = 25;             // Integer
long bigNumber = 400000;  // Large integer
double pi = 3.14;         // Decimal
bool isAlive = true;      // True/false
char letter = 'A';        // Single character
String name = "Arduino";  // Text string
```

⚠️ Declaring without initializing leaves the value undefined:

```cpp
int x;   // No value yet
```

---

## 🛠️ Functions

Functions make code reusable.

```cpp
int doubleNumber(int number) {
  return number * 2;
}

void printDoubleNumber(int number) {
  Serial.println(doubleNumber(number));
}

void setup() {
  Serial.begin(9600);
  printDoubleNumber(5); // Prints 10
}

void loop() {}
```

---

## 🌍 Scope (Local vs Global)

```cpp
int globalVar = 10;  // Global: accessible everywhere

void setup() {
  int localVar = 5;  // Local: only inside setup()
  Serial.begin(9600);
  Serial.println(localVar);
}

void loop() {
  Serial.println(globalVar); // Works
  // Serial.println(localVar); // ❌ Error
}
```

If you need a variable in multiple functions, make it global.

---

## 🔀 Conditions

Conditions allow decisions.

```cpp
int temperature = 35;

if (temperature == 40) {
  Serial.println("OK");
} else if (temperature == 35) {
  Serial.println("else if");
} else {
  Serial.println("not OK");
}
```

---

## 🔁 Loops

Repeat code multiple times.

```cpp
// for loop
for (int i = 0; i < 5; i++) {
  Serial.println("Hello for");
}

// while loop
int j = 0;
while (j < 5) {
  Serial.println("Hello while");
  j++;
}

// do...while loop
int k = 0;
do {
  Serial.println("Hello do while");
  k++;
} while (k < 5);
```

---

## 📦 Arrays

Arrays hold multiple values of the same type.

```cpp
int temperatureArray[5] = {23, 24, 56, 12, 40};

void setup() {
  Serial.begin(9600);

  // Access single element
  Serial.println(temperatureArray[0]); // 23

  // Modify value
  temperatureArray[1] = 30;

  // Loop through array
  for (int i = 0; i < 5; i++) {
    Serial.println(temperatureArray[i]);
  }
}

void loop() {}
```

**Output:**

```
23
30
56
12
40
```

---

## 📝 Summary

* `Serial.begin(9600)` starts communication.
* Programs have `setup()` (once) and `loop()` (repeats).
* Data types define variable storage.
* Functions make code reusable.
* Scope controls where variables can be used.
* Conditions allow decisions.
* Loops repeat code.
* Arrays store multiple values under one name.
