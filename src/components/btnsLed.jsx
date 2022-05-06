import React, { useEffect } from 'react'
import { useState } from 'react'
import { onValue, ref, set } from 'firebase/database'
import { database } from '../services/firebase'
const BtnsLed = () => {
  const [estado, setEstado] = useState()
  const ref1 = ref(database, 'LED1')
  useEffect(() => {
    const ref1 = ref(database, 'LED1/value')
    onValue(ref1, (snapshot) => {
      const data = snapshot.val()
      if (data == 1) {
        setEstado(true)
      } else if (data == 0) {
        setEstado(false)
      }
    })
  })

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
  if (estado === undefined) {
    return <> loading...</>
  }
  return (
    <div>
      {console.log(estado)}
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
