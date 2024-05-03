import React from "react";

export default function Step({ step, index }) {
  return (
    <div className="step">
      <h3>Step {index + 1}</h3>
      <p>{step}</p>
    </div>
  );
}
