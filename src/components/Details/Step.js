import React from 'react'

export default function Step({step,index}) {
  return (
    <div class="step">
    <h3>Step {index + 1}</h3>
    <p>{step}</p>
  </div>
  )
}
