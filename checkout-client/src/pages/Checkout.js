import React, { Component } from "react";
import { admin_only } from "../api";
import AddressInput from "../components/AddressInput";

export default class Checkout extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      fullname: "",
      phone: "",
      api: ""
    };
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  
  render() {
    return (
      <main className="container">
        <h4>Check Out</h4>
        <AddressInput />
      </main>
    );
  }
}
