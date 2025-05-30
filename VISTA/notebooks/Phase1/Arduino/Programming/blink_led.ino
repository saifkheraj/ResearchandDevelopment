void setup() {
  Serial.begin(9600);
  pinMode(13, OUTPUT); // Set pin 13 as output
}

void loop() {
  Serial.println("Turning on LED");
  digitalWrite(13, HIGH); // Turn LED on
  delay(1000);            // Wait 1 second
  Serial.println("Turning off LED");
  digitalWrite(13, LOW);  // Turn LED off
  delay(1000);            // Wait 1 second
}