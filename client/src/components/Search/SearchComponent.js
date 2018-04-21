import React, { Component } from 'react';
import SearchInput from "./input.js";
import SearchMap from "./map.js";
import SearchResults from "./results.js";
import "./search.css";



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
            <div className="search-component container-fluid"> 
                <h1 className="display-5 text-center">Find training in your area...</h1>      
                <SearchMap onStateClick={this.handleSearchResults} />
                <div className="row justify-content-center">
                <div className="col-sm-10"></div>
                <div className="col-md-6">
                <SearchInput action={this.handleSearchResults} />
                </div>
                </div>
                <div className="row justify-content-center mt-5">
                <div className="col-sm-12">
                <SearchResults coachList={this.state.coachList} />
                </div>
                </div>
            </div>   
        );
    }
};

export default SearchComponent;