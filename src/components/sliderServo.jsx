import React, { useEffect, useState } from 'react'
import { ref, set, onValue } from 'firebase/database'
import { database } from '../services/firebase'
const SliderServo = () => {
  const ref1 = ref(database, 'Angulo')
  const [angulo, setAngulo] = useState()
  useEffect(() => {
    const ref1 = ref(database, 'Angulo/value')
    onValue(ref1, (snapshot) => {
      const data = snapshot.val()
      setAngulo(data)
    })
  })

  const getData = (val) => {
    setAngulo(val.target.value)
    set(ref1, {
      value: Number(val.target.value),
    })
  }
  if (angulo === undefined) {
    return <div>loading...</div>
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
          value={angulo}
          steps="1"
          onChange={getData}
        />
        {}
      </div>
    </div>
  )
}

export default SliderServo
