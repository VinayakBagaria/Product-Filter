import React from 'react';

type Props = {
  onChange: Function,
  onSubmit: Function,
};

const Form = ({ onChange, onSubmit }: Props) => (
  <div className="form-group">
    <button className="btn search" onClick={onSubmit}>
      Apply Filters
    </button>
    <input
      className="form-control"
      type="text"
      name="search"
      placeholder="Search by Brand"
      onChange={onChange}
    />
  </div>
);

export default Form;
