#include <IOXhop_FirebaseESP32.h>
#include <IOXhop_FirebaseStream.h>
#include <WiFi.h>

#define WIFI_SSID "Nilha 2G"                  //substitua "Nome_do_seu_wifi" pelo nome da sua rede wifi 
#define WIFI_PASSWORD "nilha123"             //substitua "Senha_do_seu_wifi" pela senha da sua rede wifi 
#define FIREBASE_HOST "https://esp32-d2fc6-default-rtdb.firebaseio.com/"    //substitua "Link_do_seu_banco_de_dados" pelo link do seu banco de dados 
#define FIREBASE_AUTH "Lg1CtfoB9nsl3cSXkh3o1KtiRp0yWyRlxRmf8qUr"   //substitua "Senha_do_seu_banco_de_dados" pela senha do seu banco de dados

#define SERVO_PIN 18
#define SERVO_PIN2 19
#define SERVO_PIN3 21
#define POT_PIN 34
#define SERVO_CHANNEL 8
#define SERVO_PWM_MIN 1638
#define SERVO_PWM_MAX 7864

int width = 4915;
void setup() {
  Serial.begin(115200);

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("connecting");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  Serial.println();
  Serial.print("connected: ");
  Serial.println(WiFi.localIP());

  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);

  ledcSetup(SERVO_CHANNEL, 50, 16);
  ledcAttachPin(SERVO_PIN, SERVO_CHANNEL);
  ledcAttachPin(SERVO_PIN2, SERVO_CHANNEL);
  ledcAttachPin(SERVO_PIN3, SERVO_CHANNEL);

}

void loop() {
  auto pot = map(Firebase.getInt("Angulo/value"), 0, 180, 1638, 7864);
  width = constrain(pot, SERVO_PWM_MIN, SERVO_PWM_MAX);
  ledcWrite(SERVO_CHANNEL, width);
  Serial.print(pot);
  Serial.print(" ");
  Serial.println(width);
  delay(20);
}
