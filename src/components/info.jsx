import React from 'react'
import { useState } from 'react'
const Info = ({ descricao, elementos, procedimento }) => {
  const [info, setInfo] = useState(false)
  return (
    <div>
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
              {descricao}
            </div>
            <div className="pinagem">
              <p>elementos utilizados</p>
              {elementos}
            </div>
            <div className="procedimento-montagem">
              <p>procedimento e montagem</p>
              {procedimento}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Info
