import React, { Component } from 'react';
import { button, dropdown, map, results, input } from '../Search';

class SearchComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            items:[]
        }
    };

    render(){
        return(
            <div>
                {/* <map /> */}
                <dropdown float-left />
                <input float-right />
                {/* <results>
                    <button />
                </results> */} 
            </div>   
        );
    }
}

export default SearchComponent;