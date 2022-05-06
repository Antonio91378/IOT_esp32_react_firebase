import Box from './components/box'
import BtnsLed from './components/btnsLed'
import Container from './components/container'
import Content2 from './components/content2'
import Info from './components/info'
import SliderServo from './components/sliderServo'
function App() {
  return (
    <div className="App">
      <Container>
        <Box id="1">
          <Content2>
            <Info
              descricao={
                <p>
                  Sistema que possibilida a mudança de estado de um LED
                  remotamente.
                </p>
              }
              elementos={
                <div>
                  <p>º esp32;</p>
                  <p>º LED qualquer;</p>
                  <p>º Resistor de 100 ohm;</p>
                  <p>º Jumpers;</p>
                  <p>º protoboard.</p>
                </div>
              }
              procedimento={
                <div>
                  <p>
                    1-Ligue um jumper à porta 13 do esp32 e o conecte ao anodo
                    do led;
                  </p>
                  <p>2-Lige o catodo do led ao resistor indicado;</p>
                  <p>3-ligue a outra ponta do resistor ao GND do esp;</p>
                  <p>
                    4-Carregue o sketch.ino para o esp32 indicado no{' '}
                    <a href="https://github.com/Antonio91378/IOT_esp32_react_firebase/blob/main/Esp32_firebase/Esp32_firebase.ino">
                      link
                    </a>{' '}
                    e certifique-se de alterar os parâmetros de rede para o seu
                    wifi;
                  </p>
                </div>
              }
            ></Info>
            <BtnsLed />
          </Content2>
        </Box>
        <Box id="2">
          <Info
            descricao={
              <p>
                Sistema que possibilida mudar a posição angular de servo
                motores.
              </p>
            }
            elementos={
              <div>
                <p>º esp32;</p>
                <p>º Micro Servo 9g (sg90);</p>
                <p>
                  º uma Bateria 4.2V, (usei a NK 18650) para cada servo que for
                  usar;
                </p>
                <p>º protoboard.</p>
              </div>
            }
            procedimento={
              <div>
                <p>1-Ligue os terminais da bateria e o esp à protoboard;</p>
                <p>
                  2-alimente os servos com as baterias, garanta o GND entre o
                  esp e as baterias
                </p>
                <p>
                  3-Ligue os sinais PWM de até 3 servos nos canais D18,D19 e D21
                  do esp
                </p>
                <p>
                  4-Carregue o sketch.ino para o esp32 indicado no{' '}
                  <a href="https://github.com/Antonio91378/IOT_esp32_react_firebase/blob/main/Esp32_firebase/Esp32_firebase.ino">
                    link
                  </a>{' '}
                  e certifique-se de alterar os parâmetros de rede para o seu
                  wifi;
                </p>
              </div>
            }
          ></Info>
          <SliderServo />
        </Box>
      </Container>
    </div>
  )
}

export default App
