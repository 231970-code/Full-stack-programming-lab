import React, { useState } from "react";

function Actions() {
  const [message, setMessage] = useState("");
  const [bgColor, setBgColor] = useState("#f0f2f5");
  const [hoverColor, setHoverColor] = useState("black");

  return (
    <div style={{ ...styles.container, background: bgColor }}>
      <div style={styles.card}>
        <h2 style={{ color: hoverColor }}>{message || "Event App"}</h2>

        <button
          style={styles.btn}
          onClick={() => setMessage("Hello User 👋")}
          onMouseOver={() => setHoverColor("#6c63ff")}
          onMouseOut={() => setHoverColor("black")}
        >
          Show Message
        </button>

        <button
          style={styles.btn}
          onClick={() => setBgColor("#d4fc79")}
          onMouseOver={() => setHoverColor("green")}
          onMouseOut={() => setHoverColor("black")}
        >
          Change Background
        </button>

        <button
          style={styles.btn}
          onClick={() => alert("This is an alert!")}
          onMouseOver={() => setHoverColor("red")}
          onMouseOut={() => setHoverColor("black")}
        >
          Show Alert
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    background: "white",
    padding: "30px",
    borderRadius: "15px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
  },
  btn: {
    display: "block",
    width: "200px",
    margin: "10px auto",
    padding: "10px",
    border: "none",
    borderRadius: "8px",
    background: "#6c63ff",
    color: "white",
    cursor: "pointer",
    fontSize: "15px"
  }
};

export default Actions;