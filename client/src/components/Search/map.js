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
      stateClick : props.onStateClick

    };
    this.mapHandler = this.mapHandler.bind(this);
    this.statesCustomConfig = this.statesCustomConfig.bind(this);
  }

  mapHandler = (event) => {
    // console.log(event.target.dataset.name);
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
        fill: "#686e74"        
      }
    };
  };

  handleSubmitClick = () => {
    if (this.state.selected ){
      console.log('Search for' + this.state.selected);
      API.getSearchResults('State', this.state.selected)
      .then(res=>{
        console.log(res.data);
        this.props.onStateClick(res.data);
      }, err=>{
        console.log(err);
      });
    }
  }

  render() {
    return (
      <div className="SearchMap m-5">
       <USAMap customize={this.statesCustomConfig()} onClick={this.mapHandler} />
       {this.state.selected ? (
         <div className='searchByState-msg mt-2'>Selected State:<span>{ this.state.selected_name }</span><Button className="btn-sm" onClick={this.handleSubmitClick}><i className="fas fa-search"></i></Button></div>
        ) : ''}
      </div>
    );
  }
}

export default SearchMap;
