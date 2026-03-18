import React, { useState } from "react";

function UserForm() {
  const [user, setUser] = useState({ name: "", email: "" });
  const [data, setData] = useState(null);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(user);
    setUser({ name: "", email: "" });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>User Form</h2>

        <form onSubmit={handleSubmit}>
          <input
            style={styles.input}
            type="text"
            name="name"
            placeholder="Enter Name"
            value={user.name}
            onChange={handleChange}
          />

          <input
            style={styles.input}
            type="email"
            name="email"
            placeholder="Enter Email"
            value={user.email}
            onChange={handleChange}
          />

          <button style={styles.button}>Submit</button>
        </form>

        {data && (
          <div style={styles.result}>
            <h3>Submitted Data</h3>
            <p>Name: {data.name}</p>
            <p>Email: {data.email}</p>
          </div>
        )}
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
    background: "linear-gradient(to right, #a18cd1, #fbc2eb)"
  },
  card: {
    background: "white",
    padding: "30px",
    borderRadius: "12px",
    width: "300px",
    textAlign: "center",
    boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "6px",
    border: "1px solid #ccc"
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#6c63ff",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },
  result: {
    marginTop: "15px",
    background: "#f1f1f1",
    padding: "10px",
    borderRadius: "8px"
  }
};

export default UserForm;