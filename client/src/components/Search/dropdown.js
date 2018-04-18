

import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class SearchDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      value:'Select a Filter'
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  handleItemOnClick = event => {
    let value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
      value: value
    });
  }

  render() {
    return (
      <div>
        <ButtonDropdown 
          isOpen={this.state.dropdownOpen}
          toggle={this.toggle}
          >{this.value}
          <DropdownToggle caret
              onClick={this.toggle}
              data-toggle="dropdown">{this.state.value}
          </DropdownToggle>
          <DropdownMenu right={false}>
              <DropdownItem value='Coach' onClick={this.handleItemOnClick}>Coach</DropdownItem>
              <DropdownItem value='Program' onClick={this.handleItemOnClick}>Program</DropdownItem>
              <DropdownItem value='Zip Code' onClick={this.handleItemOnClick}>Zip Code</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </div>
    );
  }
}























// import React from 'react';
// import Select from 'react-select';

// class SearchDropdown extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             selectedOption: '',
//         }
//     }

//   handleChange = (selectedOption) => {
//     this.setState({ selectedOption });
//     // console.log(`Selected: ${selectedOption.label}`);
//   }

//   render() {
//   	const { selectedOption } = this.state;

//     return (
//       <Select
//         name="form-field-name"
//         value={selectedOption}
//         onChange={this.handleChange}
//         options={[
//           { value: 'Coach', label: 'Coach' },
//           { value: 'Program', label: 'Program' },
//           { value: 'Zip Code', label: 'Zip Code'}
//         ]}
//       />
//     );
//   }
// }

// export default SearchDropdown;
