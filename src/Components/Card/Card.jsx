import React from 'react'
import './Card.css'

const Card = ({ children, color, section, type }) => {
  return (
    <div className={`card ${color} ${(section !== type && section !== 'all') && 'inactive'}`}>{children}</div>
  )
}

export default Card
