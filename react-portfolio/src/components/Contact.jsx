import React from "react";
import { useState } from "react";

function Contact() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: validate(e.target.name, e.target.value),
    });
  };

  const validations = {
    name: {
      type: "minLength",
      comp: 1,
    },
    email: {
      type: "minLength",
      comp: 1,
    },
    message: {
      type: "minLength",
      comp: 1,
    },
  };

  const validate = (inputName, inputValue) => {
    const validation = validations[inputName];
    if (validation.type === "minLength") {
      return inputValue.length < validation.comp ? (
        <p style={{ color: "red" }}> {`${inputName} must be provided.`}</p>
      ) : (
        ""
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDfault();
    console.log("Submitted!")
  };

  return (
    <div>
      <h1>Contact:</h1>
      <form>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={inputs.name}
          />
          {inputs.name && errors.name}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={inputs.email}
          />
          {inputs.email && errors.email}
        </div>
        <div>
          <label>Message:</label>
          <input
            type="text"
            name="message"
            onChange={handleChange}
            value={inputs.message}
          />
          {inputs.message && errors.message}
        </div>
        <button type="button">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
