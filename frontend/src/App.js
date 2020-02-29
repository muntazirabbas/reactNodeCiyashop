import React, { Component, Fragment } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Headers from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";

//Component
import HomePage from "./component/home/index";
import "./App.css";
import "./Vendor.js";
import { IntlProvider } from "react-intl";
import ShopPage from "./component/shop";
import ProductDetail from "./component/shop/product-detail";
import ShopingCart from "./component/shop/ShopingCart";
import PageNotFound from "./component/Pages/PageNotFound";
import ComingSoon from "./component/Pages/ComingSoon";
import CompareShop from "./component/shop/compare";
import WishList from "./component/WishList/WishList";
import Aboutus from "./component/AboutUs/Aboutus";
import Contactus from "./component/ContactUs/Contactus";
import Maintenance from "./component/Pages/Maintenance";
import { receiveProducts } from "./actions";
import { connect } from "react-redux";
import New from "./component/New/New";
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.receiveProducts();
  }
  getUrl(pathname) {
    let pathArray = pathname.split("/");
    return `/${pathArray[1]}` === "/ComingSoon"
      ? true
      : `/${pathArray[1]}` === "/Maintenance"
        ? true
        : false;
  }

  render() {
    const { location } = this.props;
    return (
      <IntlProvider locale="a" messages="s">
        <Fragment>
          {this.getUrl(location.pathname) ? (
            <Switch>
              <Route path="/ComingSoon" component={ComingSoon} />
              <Route path="/Maintenance" component={Maintenance} />
            </Switch>
          ) : (
              <div>
                <Headers />
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/compare" component={CompareShop} />
                  <Route exact path="/new" component={New} />
                  <Route exact path="/shop" component={ShopPage} />
                  <Route exact path="/ShopingCart" component={ShopingCart} />
                  {/* <Route exact path="/MyAccount" component={MyAccount} /> */}
                  <Route exact path="/wishlist" component={WishList} />
                  <Route exact path="/Aboutus" component={Aboutus} />
                  <Route exact path="/contactus" component={Contactus} />
                  <Route path={`/shop/:category/:id`} component={ProductDetail} />
                  <Route exact component={PageNotFound} />
                </Switch>
                <Footer />
              </div>
            )}
        </Fragment>
      </IntlProvider>
    );
  }
}

const AppMapStateToProps = state => {
  return {
    products: state.data.products
  };
};

const AppMapDispatchToProps = dispatch => {
  return {
    receiveProducts: () => {
      dispatch(receiveProducts());
    }
  };
};

export default connect(
  AppMapStateToProps,
  AppMapDispatchToProps
)(withRouter(App));
