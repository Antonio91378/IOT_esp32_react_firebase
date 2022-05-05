import React from 'react'
import { useState } from 'react'
import { ref, set } from 'firebase/database'
import { database } from '../services/firebase'
const BtnsLed = () => {
  const [estado, setEstado] = useState('')
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
    <div>
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
  )
}

export default BtnsLed
