import React from "react";

const SearchResults = props => (
  <div className="form-group">
    <textarea className="form-control" rows="20" {...props} />
  </div>
);

export default SearchResults;