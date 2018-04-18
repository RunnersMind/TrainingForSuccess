import React, { Component } from 'react';
import './search.css';
import USAMap from "react-usa-map";

class SearchMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected : ''
    };
    this.mapHandler = this.mapHandler.bind(this);
    this.statesCustomConfig = this.statesCustomConfig.bind(this);

  }
  /* mandatory */

  mapHandler = (event) => {
    this.props.onStateClick(event.target.dataset.name)
    console.log(event.target.dataset.name);
  };

  /* optional customization of filling per state and calling custom callbacks per state */
  statesCustomConfig = () => {
    return {
      "NJ": {
        fill: "navy",
        clickHandler: (event) => console.log('Custom handler for NJ', event.target.dataset)
      },
      "NY": {
        fill: "#CC0000"
      }
    };
  };

  render() {
    return (
      <div className="SearchMap m-5">
        {/*<USAMap customize={this.statesCustomConfig} onClick={this.mapHandler} />*/}
      </div>
    );
  }
}

export default SearchMap;
