import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ value, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <div className="form-group">
      <input
        className="form-control"
        type="text"
        name="search"
        placeholder="Search by Brand"
        value={value}
        onChange={onChange}
      />
    </div>
    <button className="btn search" type="submit">
      Apply Filters
    </button>
  </form>
);

Form.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
