import React, { FormEvent, useRef } from "react";

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef(null);
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current !== null) {
      console.log("name", nameRef.current.value, "age", ageRef);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Inter your name</label>
        <input
          ref={nameRef}
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          ref={ageRef}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">submit here </button>
    </form>
  );
};

export default Form;
