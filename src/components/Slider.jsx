import React, { useEffect, useState } from 'react'
import { ref, set, onValue } from 'firebase/database'
import { database } from '../services/firebase'
const Slider = ({
  valorMinimo,
  valorMaximo,
  reference,
  originReference,
  name,
  type,
}) => {
  const ref1 = ref(database, `${originReference}`)
  const [angulo, setAngulo] = useState()
  useEffect(() => {
    const ref1 = ref(database, `${reference}`)
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
          {name} = <span>{angulo}</span>
          {type}
        </p>
        <input
          type="range"
          min={valorMinimo}
          max={valorMaximo}
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

export default Slider
