import React from 'react';
import './search-field.styles.scss';

const SearchField = ({placeholder, handleChange}) => (
	<input type="search" className="search" placeholder={ placeholder } onChange={ handleChange } />
);
export default SearchField;