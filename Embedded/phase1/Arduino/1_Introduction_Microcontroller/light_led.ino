// Blink example for Arduino

void setup() {
  // Configure the built-in LED pin as an OUTPUT
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  // Turn the LED on (HIGH voltage)
  digitalWrite(LED_BUILTIN, HIGH);
  // Wait for 1000 milliseconds (1 second)
  delay(1);

  // Turn the LED off (LOW voltage)
  digitalWrite(LED_BUILTIN, LOW);
  // Wait for another second
  delay(1);
}
