import React, { Component } from 'react';
import SearchButton from "./button.js";
import SearchDropdown from "./dropdown.js";
import SearchInput from "./input.js";
import SearchMap from "./map.js";
import SearchResults from "./results.js";
import "./search.css";

class SearchComponent extends Component{
    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state={
            items:[],
            dropdownOpen: false
        };
    }

    toggle(){
        this.setState({
          dropdownOpen: !this.state.dropdownOpen  
        });
    }

    // onStateClick = event => {
    //     this.setState({
    //         items: this.state.items.filter((item => item.id == stateName)
    //     )
    //     })
    // }

    render(){
        return(
            <div className="container-fluid"> 
                    <h1 className="display-5 text-center mt-5">Find training in your area...</h1>      
                    <SearchMap onStateClick={this.onStateClick} />
                <div>
                    <SearchDropdown className="float-left" />
                </div>
                <div>
                    <SearchInput className="float-right" />
                </div>
                <SearchResults>
                    <SearchButton />
                </SearchResults> 
            </div>   
        );
    }
};

export default SearchComponent;