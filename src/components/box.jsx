import React, { useState } from 'react'

const Box = ({ children, id }) => {
  const [ocultar, setOcultar] = useState(true)
  const [hideSystem, setHideSystem] = useState(true)
  return (
    <div className="box">
      {hideSystem && (
        <div className="hide-content">
          <h2>Sistema {id}</h2>
          <button
            onClick={() => {
              setOcultar(false)
              setHideSystem(false)
            }}
            className="btn-show"
          >
            Mostrar Sistema
          </button>
        </div>
      )}
      {!ocultar && (
        <div>
          {children}
          <button
            onClick={() => {
              setOcultar(true)
              setHideSystem(true)
            }}
            className="btn-show"
          >
            Ocultar Sistema
          </button>
        </div>
      )}
    </div>
  )
}

export default Box
