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
          {info && <div className="info-n-pin">informações</div>}
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
