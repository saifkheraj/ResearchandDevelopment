void setup() {
  //one time setup
  Serial.begin(9600); // Start serial communication at 9600 baud
  Serial.println("Hello Arduino"); // Print welcome message
}

void loop() {
  Serial.println("In the loop"); // Print message repeatedly
  delay(500); // Wait half a second
}