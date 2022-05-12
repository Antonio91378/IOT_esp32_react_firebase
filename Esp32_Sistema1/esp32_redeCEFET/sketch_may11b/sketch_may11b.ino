#define LED_1 13

void setup() {
  Serial.begin(9600);
  pinMode(LED_1, OUTPUT);
  
  Serial.print(  digitalRead(LED_1));
}

void loop() {
   digitalWrite(LED_1, 1);
   delay(2000);
   digitalWrite(LED_1,LOW);
   delay(1000);

}
