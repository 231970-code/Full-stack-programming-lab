import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>404 - Page Not Found</h2>
      <p>Oops! This page does not exist.</p>

      <Link to="/">
        <button style={styles.btn}>Go Back Home</button>
      </Link>
    </div>
  );
}

const styles = {
  btn: {
    padding: "10px 15px",
    border: "none",
    borderRadius: "6px",
    background: "#ff6b6b",
    color: "white",
    cursor: "pointer"
  }
};

export default NotFound;