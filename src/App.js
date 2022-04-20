import { ref, set } from 'firebase/database'
import { database } from './services/firebase'
function App() {
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
            <button>informações e pinagem</button>
          </div>
          <div id="estado-led">
            <h2>estado do led:</h2>
            <h2>ligado</h2>
          </div>
          <div className="btns">
            <button
              className="btn"
              onClick={() => {
                changeToHigh()
              }}
            >
              Ligar o LED
            </button>
            <button
              className="btn"
              onClick={() => {
                changeToLow()
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
