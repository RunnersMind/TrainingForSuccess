import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Search from 'react-search';
import PropTypes from 'prop-types';

class SearchComp extends Component {

    MyItems(items) {
        console.log(items)
    }

    constructor (props) {
        super(props)
        this.state= { items: [{id:'HI',value:'Hawaii'},
                                {id:'AK',value:'Alaska'},
                                {id:'FL',value:'Florida'},
                                {id:'SC',value:'South Carolina'},
                                {id:'GA',value:'Georgia'},
                                {id:'AL',value:'Alabama'},
                                {id:'NC',value:'North Carolina'},
                                {id:'TN',value:'Tennessee'},
                                {id:'RI',value:'Rhode Island'},
                                {id:'CT',value:'Connecticut'},
                                {id:'MA',value:'Massachusetts'},
                                {id:'ME',value:'Maine'},
                                {id:'NH',value:'NewHampshire'},
                                {id:'VT',value:'Vermont'},
                                {id:'NY',value:'New York'},
                                {id:'NJ',value:'New Jersey'},
                                {id:'PA',value:'Pennsylvania'},
                                {id:'DE',value:'Delaware'},
                                {id:'MD',value:'Maryland'},
                                {id:'WV',value:'West Virginia'},
                                {id:'KY',value:'Kentucky'},
                                {id:'OH',value:'Ohio'},
                                {id:'MI',value:'Michigan'},
                                {id:'WY',value:'Wyoming'},
                                {id:'MT',value:'Montana'},
                                {id:'ID',value:'Idaho'},
                                {id:'WA',value:'Washington'},
                                {id:'TX',value:'Texas'},
                                {id:'CA',value:'California'},
                                {id:'AZ',value:'Arizona'},
                                {id:'NV',value:'Nevada'},
                                {id:'UT',value:'Utah'},
                                {id:'CO',value:'Colorado'},
                                {id:'NM',value:'New Mexico'},
                                {id:'OR',value:'Oregon'},
                                {id:'ND',value:'North Dakota'},
                                {id:'SD',value:'South Dakota'},
                                {id:'NE',value:'Nebraska'},
                                {id:'IA',value:'Iowa'},
                                {id:'MS',value:'Mississippi'},
                                {id:'IN',value:'Indiana'},
                                {id:'IL',value:'Illinois'},
                                {id:'MN',value:'Minnesota'},
                                {id:'WI',value:'Wisconsin'},
                                {id:'MO',value:'Missouri'},
                                {id:'AR',value:'Arkansas'},
                                {id:'OK',value:'Oklahoma'},
                                {id:'KS',value:'Kansas'},
                                {id:'LA',value:'Louisiana'},
                                {id:'VA',value:'Virginia'}
                            ]
                    };
    }

    render(){
        return(
            <div>
                <Search items={this.state.items}
                    placeholder='Choose a state.'
                    multiple={false}
                    onItemsChanged={this.MyItems.bind(this)} />
            </div>
        );
    }
}


export default SearchComponent;

            

