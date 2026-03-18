import React, { useState } from "react";

function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent");
    setData({ name: "", email: "", message: "" });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={data.name} onChange={handleChange} />
        <br />
        <input name="email" placeholder="Email" value={data.email} onChange={handleChange} />
        <br />
        <textarea name="message" placeholder="Message" value={data.message} onChange={handleChange} />
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;