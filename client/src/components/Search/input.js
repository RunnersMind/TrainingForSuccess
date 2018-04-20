import React from "react";
import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import API from "../../utils/API";

export default class SearchDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      searchType:'Please choose a filter',
      searchText:''
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  handleItemOnClick = event => {
    let value = event.target.value;
    this.setState({
      searchType: value
    });
  }

  handleOnChange = event => {
    let value = event.target.value;
    this.setState({
      searchText: value
    });
  }

  handleSubmitClick = event => {
    if (this.state.searchType && this.state.searchText){
      console.log(this.state.searchType, this.state.searchText);
      API.getSearchResults(this.state.searchType, this.state.searchText)
      .then(res=>{
        console.log(res.data);
        this.props.action(event.target.value)
      }, err=>{
        console.log(err);
      });
    }
 
  }

  render() {
    return (
      <div>
        <InputGroup name="searchText" >
        <ButtonDropdown name="searchType"
          isOpen={this.state.dropdownOpen}
          toggle={this.toggle}
          >{this.value}
          <DropdownToggle caret
              onClick={this.toggle}
              data-toggle="dropdown">{this.state.searchType}
          </DropdownToggle>
          <DropdownMenu right={false}>
              <DropdownItem value='Coach' onClick={this.handleItemOnClick}>Coach</DropdownItem>
              <DropdownItem value='Program' onClick={this.handleItemOnClick}>Program</DropdownItem>
              <DropdownItem value='Zip Code' onClick={this.handleItemOnClick}>Zip Code</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
          <Input type="search" placeholder="search text..." onChange={this.handleOnChange}/>
          <InputGroupAddon addonType="append"><Button onClick={this.handleSubmitClick}>Data</Button></InputGroupAddon>
        </InputGroup>
      </div>
    );
  }
}

