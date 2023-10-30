/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export default function StepMessage({step, children}) {
  return (
    <div className="message">
            <h3> step {step} </h3> 
            {children}
          </div>
  )
}
