<<<<<<< Updated upstream
import React, { Component } from 'react';
import { button, dropdown, map, results, input } from '../Search';
=======
import React, { Component} from 'react';
import './search.css';
import { FormGroup, Form, Label, Input, Container } from 'reactstrap';
>>>>>>> Stashed changes

class SearchComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            items:[]
        }
    };

    render(){
        return(
<<<<<<< Updated upstream
            <div fluid>
                <map />
                <dropdown float-left />
                <input float-right />
                <results>
                    <button />
                </results>
            </div>   
        );
=======
            <Container>
            <div className="row d-flex justify-content-center">
                            <div className="col-md-10">
            <Form className="form-wrap mt-4">
            <div className="btn-group" role="group" aria-label="Basic example">
                <FormGroup>
                <Input type="text" placeholder="What are your looking for?"></Input>
                    <Label for="Select">Select a State to find a Program or Coach</Label>
                    <Input type="select" name="selectState" id="selectState">
                        <option>Hawaii</option>
                        <option>Alaska</option>
                        <option>Florida</option>
                        <option>South Carolina</option>
                        <option>Georgia</option>
                        <option>Alabama</option>
                        <option>North Carolina</option>
                        <option>Tennessee</option>
                        <option>Rhode Island</option>
                        <option>Connecticut</option>
                        <option>Massachusetts</option>
                        <option>Maine</option>
                        <option>New Hampshire</option>
                        <option>Vermont</option>
                        <option>New York</option>
                        <option>New Jersey</option>
                        <option>Pennsylvania</option>
                        <option>Delaware</option>
                        <option>Maryland</option>
                        <option>West Virginia</option>
                        <option>Kentucky</option>
                        <option>Ohio</option>
                        <option>Michigan</option>
                        <option>Wyoming</option>
                        <option>Montana</option>
                        <option>Idaho</option>
                        <option>Washington</option>
                        <option>Texas</option>
                        <option>California</option>
                        <option>Arizona</option>
                        <option>Nevada</option>
                        <option>Colorado</option>
                        <option>New Mexico</option>
                        <option>Oregon</option>
                        <option>North Dakota</option>
                        <option>South Dakota</option>
                        <option>Nebraska</option>
                        <option>Iowa</option>
                        <option>Mississippi</option>
                        <option>Indiana</option>
                        <option>Illinoise</option>
                        <option>Minnesota</option>
                        <option>Wisconsin</option>
                        <option>Missouri</option>
                        <option>Arkansas</option>
                        <option>Oklahoma</option>
                        <option>Kansas</option>
                        <option>Louisiana</option>
                        <option>Virginia</option>
                    </Input>
                    <button type="submit" class="btn-form"><span class="icon-magnifier search-icon"></span>SEARCH<i class="pe-7s-angle-right"></i></button>
                </FormGroup>
                </div>
            </Form>
            </div>
            </div>
            </Container>
        )
>>>>>>> Stashed changes
    }
}

export default SearchComponent;