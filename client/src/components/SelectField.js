import React from "react";

export default ({ id, label, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <select
        className='form-control'
        id={id}
        value={value}
        onChange={onChange}
      >
        <option value="">Select a School</option>
        <option value="wit">Wentworth Institute of Technology</option>
        <option value="northeastern">Northeastern University</option>
        <option value="massart">MassArt</option>
        <option value="mcphs">MCPHS</option>
        <option value="simmons">Simmons University</option>
        <option value="emmanuel">Emmanuel University</option>
        <option value="tufts">Tufts University</option>
        <option value="umass-boston">UMass Boston</option>
        <option value="harvard">Harvard University</option>
        <option value="other">Other</option>
      </select>
    </div>
  );
};
