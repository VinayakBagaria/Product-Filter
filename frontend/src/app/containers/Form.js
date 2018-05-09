import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ value, onChange, onSubmit }) => (
  <div className="form-group">
    <button className="btn search" onClick={onSubmit}>
      Apply Filters
    </button>
    <input
      className="form-control"
      type="text"
      name="search"
      placeholder="Search by Brand"
      value={value}
      onChange={onChange}
    />
  </div>
);

Form.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
