import React from "react";

export default ({ id, label, placeholder, value, onChange }) => {
  return (
    <div key={id} className="form-group">
      <label htmlFor={id}>{label}</label>
      {id === "dietaryRestrictions" ? (
        <textarea
          type={id === "email" ? "email" : "text"}
          className="form-control"
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          type={id === "email" ? "email" : "text"}
          className="form-control"
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
      {id === "email" ? (
        <small id={`${id}-help`} className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      ) : (
        ""
      )}
    </div>
  );
};
