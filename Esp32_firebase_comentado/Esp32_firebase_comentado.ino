#include <IOXhop_FirebaseESP32.h>
#include <IOXhop_FirebaseStream.h>
#include <WiFi.h>                          //importa biblioteca para conectar esp32 com wifi

//fazendo definições para não repetir muito texto durante o código 
#define WIFI_SSID "Nilha 2G"                  //substitua "Nome_do_seu_wifi" pelo nome da sua rede wifi 
#define WIFI_PASSWORD "nilha123"             //substitua "Senha_do_seu_wifi" pela senha da sua rede wifi 
#define FIREBASE_HOST "https://esp32-d2fc6-default-rtdb.firebaseio.com/"    //substitua "Link_do_seu_banco_de_dados" pelo link do seu banco de dados 
#define FIREBASE_AUTH "Lg1CtfoB9nsl3cSXkh3o1KtiRp0yWyRlxRmf8qUr"   //substitua "Senha_do_seu_banco_de_dados" pela senha do seu banco de dados
#define USER_EMAIL "antoniovictor200@gmail.com"
#define USER_PASSWORD "Frankbob123456!"

//pinos
#define LED 13


void setup() {
  Serial.begin(9600);

  // connect to wifi.
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
  
  pinMode(LED,OUTPUT);
  digitalWrite(LED,LOW);
  int LED1 = 0;
}


void loop() {
  int LED1_value = (Firebase.getInt("LED1/value"));
  digitalWrite(LED,LED1_value);
  Serial.println(LED1_value);
  delay(100);

}
