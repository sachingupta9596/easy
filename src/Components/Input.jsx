import { useState, useRef } from "react";
import { Data } from "../Asset/DatabaseSchema";

export default function Input({ newAddition }) {
  const currentData = useRef(Data);
  console.log(currentData.current);

  const handleChange = (key) => (e) => {
    currentData.current = {
      ...currentData.current,
      [key]: e.target.value
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    newAddition(currentData.current);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          name="fname"
          id="fname"
          onChange={handleChange("fname")}
        />
        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          name="lname"
          onChange={handleChange("lname")}
          id="lname"
        />
        <label htmlFor="contact">Contact</label>
        <input
          id="contact"
          type="tel"
          name="number"
          onChange={handleChange("number")}
        />
        <button type="submit">Save</button>
      </form>
    </>
  );
}
