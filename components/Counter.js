import { useState } from 'react';

export default function Counter({ name, mult, backgroundColor }) {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + mult > 10 ? 0 : count + mult);

  return (
    <div style={{ backgroundColor: "black", margin: "2em", padding: "10px", textAlign: "center", borderRadius: "8px" }}>
      <p style={{ color: "white" }}>{name}'s counter: {count}</p>
      <button
        onClick={increment}
        style={{
          backgroundColor: "black",
          color: "white",
          border: "1px solid white",
          padding: "10px 20px",
          marginTop: "10px",
          cursor: "pointer",
          borderRadius: "4px",
        }}
      >
        Increment by {mult}
      </button>
    </div>
  );
}