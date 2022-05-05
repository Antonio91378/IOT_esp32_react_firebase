import React, { useState } from 'react'
import { ref, set } from 'firebase/database'
import { database } from '../services/firebase'
const SliderServo = () => {
  const ref1 = ref(database, 'Angulo')
  const [angulo, setAngulo] = useState('0')
  const getData = (val) => {
    setAngulo(val.target.value)
    set(ref1, {
      value: Number(val.target.value),
    })
  }
  return (
    <div>
      <div className="slider-slot">
        <p>
          Ângulo = <span>{angulo}</span>º
        </p>
        <input
          type="range"
          min="0"
          max="180"
          id="slider"
          steps="1"
          onChange={getData}
        />
        {}
      </div>
    </div>
  )
}

export default SliderServo
