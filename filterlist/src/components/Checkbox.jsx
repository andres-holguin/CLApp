import React from "react";
function Checkbox(props) {
  function handleChange(event) {
    props.filterUpdate(event.target.name, event.target.checked);
  }
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        id={props.name}
        name={props.name}
        type="checkbox"
        defaultChecked={props.checked}
        onChange={handleChange}
      />
      <label className="form-check-label" htmlFor={props.name}>
        {props.name}
      </label>
    </div>
  );
}

export default Checkbox;
