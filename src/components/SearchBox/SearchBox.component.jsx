import { Component } from "react";
import './SearchBox.styles.css';
const SearchBox = (props) => {

    return (
      <input
        className={`${props.className} search-box`}
        type="search"
        placeholder={props.placeholder}
        onChange={props.onChangeHandler}
      />
    );
  
}

export default SearchBox;
