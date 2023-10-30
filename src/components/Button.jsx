/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export default function Button({textColor, bgColor, onClick, children}) {
  return (
    <button style={{ backgroundColor: bgColor, color: textColor }}
    onClick={onClick}> {children} </button>
  )
}
