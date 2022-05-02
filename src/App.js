import { ref, set } from 'firebase/database'
import { useState } from 'react'
import { database } from './services/firebase'
function App() {
  const [estado, setEstado] = useState('')
  const [info, setInfo] = useState(false)
  const ref1 = ref(database, 'LED1')

  const changeToHigh = () => {
    set(ref1, {
      value: 1,
    })
  }
  const changeToLow = () => {
    set(ref1, {
      value: 0,
    })
  }

  return (
    <div className="App">
      <div className="container">
        <div className="hero-intro">
          <h1>IOT usando esp32</h1>
        </div>
        <div className="box">
          <div className="info">
            <button
              onClick={() => {
                setInfo(true)
              }}
            >
              informações e pinagem
            </button>
          </div>
          {info && (
            <div className="info-n-pin">
              <div className="info-container">
                <div className="close-button">
                  <button
                    onClick={() => {
                      setInfo(false)
                    }}
                  >
                    X
                  </button>
                </div>
                <div className="descricao">
                  <p>descrição</p>
                  <p>
                    Sistema que possibilida a mudança de estado de um LED
                    remotamente.
                  </p>
                </div>
                <div className="pinagem">
                  <p>elementos utilizados</p>
                  <p>º LED qualquer</p>
                  <p>º Resistor de 100 ohm</p>
                  <p>º Jumpers</p>
                </div>
                <div className="procedimento-montagem">
                  <p>procedimento e montagem</p>
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
              </div>
            </div>
          )}
          <div id="estado-led">
            {estado && (
              <div>
                <h2>estado do led:</h2>
                <h2>ligado</h2>
              </div>
            )}
          </div>
          <div id="Nestado-led">
            {!estado && (
              <div>
                <h2>estado do led:</h2>
                <h2>desligado</h2>
              </div>
            )}
          </div>
          <div className="btns">
            <button
              className="btn"
              onClick={() => {
                changeToHigh()
                setEstado(true)
              }}
            >
              Ligar o LED
            </button>
            <button
              className="btn"
              onClick={() => {
                changeToLow()
                setEstado(false)
              }}
            >
              Desligar o LED
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
