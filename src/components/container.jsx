import React from 'react'

const Container = ({ children }) => {
  return (
    <div className="container">
      <div className="hero-intro">
        <h1>IOT usando esp32</h1>
      </div>
      <div className="container2">{children}</div>
    </div>
  )
}

export default Container
