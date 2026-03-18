import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Counter App</h1>

        <h2 style={styles.count}>{count}</h2>

        <div>
          <button style={styles.btn} onClick={() => setCount(count + 1)}>
            ➕ Increment
          </button>

          <button
            style={styles.btn}
            onClick={() => count > 0 && setCount(count - 1)}
          >
            ➖ Decrement
          </button>

          <button style={styles.reset} onClick={() => setCount(0)}>
            🔄 Reset
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #74ebd5, #9face6)"
  },
  card: {
    background: "white",
    padding: "40px",
    borderRadius: "15px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
  },
  title: {
    marginBottom: "20px"
  },
  count: {
    fontSize: "50px",
    margin: "20px 0",
    color: "#333"
  },
  btn: {
    margin: "10px",
    padding: "10px 15px",
    border: "none",
    borderRadius: "8px",
    background: "#6c63ff",
    color: "white",
    cursor: "pointer",
    fontSize: "16px"
  },
  reset: {
    margin: "10px",
    padding: "10px 15px",
    border: "none",
    borderRadius: "8px",
    background: "#ff6b6b",
    color: "white",
    cursor: "pointer",
    fontSize: "16px"
  }
};

export default Counter;