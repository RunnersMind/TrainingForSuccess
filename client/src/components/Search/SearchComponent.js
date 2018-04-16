import React, { Component } from 'react';
import SearchButton from "./button.js";
import SearchDropdown from "./dropdown.js";
import SearchInput from "./input.js";
import SearchMap from "./map.js";
import SearchResults from "./results.js";

class SearchComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            items:[]
        }
    };

    render(){
        return(
            <div className="container-fluid"> 
                    <h1 className="display-5 text-center mt-5">Find training in your area...</h1>      
                <SearchMap />
                <SearchDropdown />
                <SearchInput  />
                <SearchResults>
                    <SearchButton />
                </SearchResults> 
            </div>   
        );
    }
}

export default SearchComponent;