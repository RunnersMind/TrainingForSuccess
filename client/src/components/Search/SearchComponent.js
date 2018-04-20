import React, { Component } from 'react';
import SearchButton from "./button.js";
import SearchInput from "./input.js";
import SearchMap from "./map.js";
import SearchResults from "./results.js";
import "./search.css";
import API from "../../utils/API";



class SearchComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            child: null
        }
    }

    setchildValue = (data) => {
        this.setState({child:data})
    }
      
    render() {
        return (            
            <div className="container-fluid"> 
                <h1 className="display-5 text-center mt-5">Find training in your area...</h1>      
                <SearchMap onStateClick={this.onStateClick} />
                <SearchInput />
                <SearchResults action={this.setchildValue} />
            </div>   
        );
    }
};

export default SearchComponent;