import React from "react";
import "./search.css";
import { Form, FormGroup, Label, Input, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";


const SearchDropdown = props => (
    <div>
    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
            Dropdown
        </DropdownToggle>
        <DropdownMenu right>
            <DropdownItem>Coach</DropdownItem>
            <DropdownItem>Program</DropdownItem>
            <DropdownItem>State</DropdownItem>
            <DropdownItem>Zip Code</DropdownItem>
        </DropdownMenu>
    </Dropdown>


     <Form>
        <FormGroup>
            <Label for="select">Select a filter for your search
                <Input type="select" name="selectFilter" id="selectFilter">
                    <option>Coach</option>
                    <option>Program</option>
                    <option>State</option>
                    <option>Zip Code</option>
                    {/* <option>Georgia</option>
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
                    <option>Virginia</option> */}
                </Input>
            </Label>
        </FormGroup>
    </Form>
    </div>
);


export default SearchDropdown;