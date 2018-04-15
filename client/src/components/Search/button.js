import React from "react";

const SearchButton = props => (
  <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-contact">
    {props.children}
  </button>
);

export default SearchButton;