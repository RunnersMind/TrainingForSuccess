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
            coachList: [],
        }
    this.handleSearchResults = this.handleSearchResults.bind(this);  
    }

    handleSearchResults = (data) => {
        this.setState({coachList:data})
    }
    
    render() {
        return (            
            <div className="container-fluid"> 
                <h1 className="display-5 text-center mt-5">Find training in your area...</h1>      
                <SearchMap onStateClick={this.handleSearchResults} />
                <SearchInput action={this.handleSearchResults} />
                <SearchResults coachList={this.state.coachList} />
            </div>   
        );
    }
};

export default SearchComponent;