import React, { Component } from 'react';
import { Button } from "reactstrap";
import USAMap from "react-usa-map";
import API from "../../utils/API";

import dictionary from '../../utils/states_dictionary';

import './search.css';

class SearchMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected : 'CA',
      selected_name : 'California',

    };
    this.mapHandler = this.mapHandler.bind(this);
    this.statesCustomConfig = this.statesCustomConfig.bind(this);
  }

  mapHandler = (event) => {
    console.log(event.target.dataset.name);
    let state = event.target.dataset.name;
    let state_name = dictionary.getFullName(state);
    this.setState({
      selected      : state,
      selected_name : state_name,
    });
  };

  /* optional customization of filling per state and calling custom callbacks per state */
  statesCustomConfig = () => {
    return {
      [this.state.selected]: {
        fill: "#f06e64"        
      }
    };
  };

  handleSubmitClick = () => {
    if (this.state.selected ){
      console.log('Search for' + this.state.selected);
      API.getSearchResults('State', this.state.selected)
      .then(res=>{
        console.log(res.data);
      }, err=>{
        console.log(err);
      });
    }
  }

  render() {
    return (
      <div className="SearchMap m-5">
       {/*<USAMap onClick={this.mapHandler} />*/}
       <USAMap customize={this.statesCustomConfig()} onClick={this.mapHandler} />
       {this.state.selected ? (
         <div className='searchByState-msg'>Selected State:<span>{ this.state.selected_name }</span><Button onClick={this.handleSubmitClick}>Search</Button></div>
        ) : ''}
      </div>
    );
  }
}

export default SearchMap;
