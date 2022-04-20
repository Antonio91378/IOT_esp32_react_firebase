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
      <button
        onClick={() => {
          changeToHigh()
        }}
      >
        Ligar o LED
      </button>
      <button
        onClick={() => {
          changeToLow()
        }}
      >
        Desligar o LED
      </button>
    </div>
  )
}

export default App
