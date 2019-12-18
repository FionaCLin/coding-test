import React, { Component } from "react";
import logo from "../logo.png";
import { admin_only } from "../api";
import AddressInput from "../components/AddressInput";
import { auth } from "../service";

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
    auth.onAuthStateChanged(user => {
      console.log(user);
      // admin_only(user)
      //   .then(res => {
      //     if (this._isMounted) {
      //       this.setState({ user: user });
      //     }
      //   })
      //   .catch(err => {
      //     this.props.history.push("/");
      //   });
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  logout = e => {
    this.props.history.push("/");
    auth.signOut();
  };

  render() {
    return (
      <body>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          Coding Test
          <button className="btn-flat dark-4" onClick={this.logout}>
            Logout
          </button>
        </header>
        <main className="container">
          <h3>Check Out</h3>
          <AddressInput />
        </main>
      </body>
    );
  }
}
