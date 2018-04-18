import React from "react";
import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";

const SearchInput = props => (
  <InputGroup>
    <Input type="search" placeholder="search text..." />
    <InputGroupAddon addonType="append"><Button>Search</Button></InputGroupAddon>
  </InputGroup>
);

export default SearchInput;
