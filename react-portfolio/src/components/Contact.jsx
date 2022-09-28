import React from "react";
import { useState } from "react";

const Contact = (props) => {
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
  
  const handleSubmit = (e) => {
    e.preventDfault();
    console.log("Submitted!")
  };

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
      comp: 0,
    },
    email: {
      type: "minLength",
      comp: 0,
    },
    message: {
      type: "minLength",
      comp: 0,
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

  return (
    <div className="parentDiv">
      <h1>Contact:</h1>
      <form className="parentForm" onSubmit={handleSubmit}>
        <div>
          <input
            className="input1"
            placeholder="Name"
            type="text"
            name="name"
            onChange={handleChange}
            value={inputs.name}
            required
          />
          {inputs.name && errors.name}
        </div>
        <div>
          <input
            placeholder="Email"
            className="input1"
            type="email"
            name="email"
            onChange={handleChange}
            value={inputs.email}
            required
          />
          {inputs.email && errors.email}
        </div>
        <div>
          <input
            className="input2"
            placeholder="Feel free to leave a message here!"
            type="text"
            name="message"
            onChange={handleChange}
            value={inputs.message}
            required
          />
          {inputs.message && errors.message}
        </div>
        <button type="button">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
