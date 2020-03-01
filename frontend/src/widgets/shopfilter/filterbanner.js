import React, { Component } from "react";
import { type } from "os";



class Comparefilter extends Component {
  state = {
    brands: ["khadi", "engine", "outfitter", "levi", 'gulahmed', 'Breakout'],
    selectedBrands: ['', '', '']
  };

  handleDropdownChange1 = (e) => {
    e.preventDefault();
    const hasValue = this.state.selectedBrands.includes(e.target.value);
    if (hasValue) {
      console.log('has value');

    } else {
      console.log("dont have value");
      this.state.selectedBrands[0] = e.target.value;
      const _sbrands = this.state.selectedBrands;
      console.log('sBrands', _sbrands);
      this.setState({ selectedBrands: _sbrands });
    }
    const brands = this.state.brands.filter(b => this.state.selectedBrands.indexOf(b) == -1);
    console.log('updated brands ', brands);
    // this.setState({ selectedBrands: _sbrands });
  }
  handleDropdownChange2 = (e) => {
    const hasValue = this.state.selectedBrands.includes(e.target.value);
    if (hasValue) {
      e.preventDefault();
    } else {
      console.log("dont have value");
      this.state.selectedBrands[1] = e.target.value;
      const _sbrands = this.state.selectedBrands;
      console.log('sBrands', _sbrands);
      this.setState({ selectedBrands: _sbrands });
    }
    const brands = this.state.brands.filter(b => this.state.selectedBrands.indexOf(b) == -1);
    console.log('updated brands ', brands);
    // this.setState({ brands });
  }
  handleDropdownChange3 = (e) => {
    const hasValue = this.state.selectedBrands.includes(e.target.value);
    if (hasValue) {
      e.preventDefault();
    } else {
      console.log("dont have value");
      this.state.selectedBrands[2] = e.target.value;
      const _sbrands = this.state.selectedBrands;
      console.log('sBrands', _sbrands);
      this.setState({ selectedBrands: _sbrands });
    }
    //onBrandSelection >> remove selected brand from state
    const brands = this.state.brands.filter(b => this.state.selectedBrands.indexOf(b) == -1);
    console.log('updated brands ', brands);
    // this.setState({ brands });
  }

  render() {
    return (
      <div className="d-flex justify-content-between">
        <div>
          <select className="text-capitalize text-white bg-secondary m-2" id="dropdown1"
            onChange={this.handleDropdownChange1}
          >
            <option selected value="">Select Brand 1</option>
            {
              this.state.brands.map(brand => <option value={brand}>{brand}</option>)
            }
          </select>
          <select className="text-capitalize text-white bg-secondary m-2" id="dropdown2"
            onChange={this.handleDropdownChange2}>
            <option value="">Select Brand 2</option>
            {
              this.state.brands.map(brand => <option value={brand}>{brand}</option>)
            }
          </select>
          <select className="text-capitalize text-white bg-secondary m-2" id="dropdown3"
            onChange={this.handleDropdownChange3}>
            <option value="">Select Brand 3</option>
            {
              this.state.brands.map(brand => <option value={brand}>{brand}</option>)
            }
          </select>
        </div>
        <div className="m-2">
          <button className="btn btn-secondary" type="button">
            Compare
          </button>
        </div>
      </div>
    );
  }
}

export default Comparefilter;
