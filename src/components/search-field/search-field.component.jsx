import React from 'react';
import PropTypes from 'prop-types';
import './search-field.styles.scss';

const SearchField = ({ placeholder, handleChange }) => (
  <input type="search" className="search" placeholder={placeholder} onChange={handleChange} />
);

SearchField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SearchField;
