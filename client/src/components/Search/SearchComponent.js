import React, { Component } from 'react';
import SearchButton from "./button.js";
import SearchDropdown from "./dropdown.js";
import SearchInput from "./input.js";
import SearchMap from "./map.js";
import SearchResults from "./results.js";
import "./search.css";
import API from "../../utils/API";
import { Form, FormGroup, Col } from "reactstrap";


class SearchComponent extends Component{
    constructor(props){
        super(props);
    }
      
    render() {
        return (            
            <div className="container-fluid"> 
                    <h1 className="display-5 text-center mt-5">Find training in your area...</h1>      
                    <SearchMap onStateClick={this.onStateClick} />
                <div className = "searchPosition">Search by Coach, Program, or Zip Code
                    <Form>
                        <FormGroup row>
                            <Col sm={3}></Col>
                            <Col sm={3}>
                                <SearchDropdown />
                            </Col>
                            <Col sm={3}>
                                <SearchInput />
                            </Col>
                            <Col sm={3}></Col>
                        </FormGroup>
                    </Form>
                </div>
                <SearchResults>
                    <SearchButton />
                </SearchResults> 
            </div>   
        );
    }
};

export default SearchComponent;