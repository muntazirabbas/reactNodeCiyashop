import React, { Component } from "react";
import { getProducts } from "../../actions/index";
import { connect } from "react-redux";

class New extends Component {
  componentDidMount = async () => {
    const data = await this.props.getProducts();
    console.log(this.props.products);
  };

  render() {
    if (this.props.products.products.length === 0) {
      return <h1>Loading</h1>;
    }
    return <h1>{this.products.products[0].name}</h1>;
  }
}

const mapStateToProps = state => ({
  products: state.data
});

export default connect(mapStateToProps, { getProducts })(New);
