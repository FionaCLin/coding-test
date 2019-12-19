import React, { Component } from "react";
import { auth } from "../service";
import logo from "../logo.png";

export default class Header extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      admin: false
    };
  }

  componentDidMount() {
    this._isMounted = true;
    auth.onAuthStateChanged(user => {
      if (this._isMounted && user) {
        this.setState({ logged: true });
        user.getIdTokenResult().then(idTokenResult => {
          this.setState({ admin: idTokenResult.claims.admin });
        });
      } else if (this._isMounted) {
        this.setState({ logged: false });
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  logout = e => {
    this.props.history.push("/");
    auth.signOut();
  };

  goToAdmin = e => {
    this.props.history.push("/admin");
  };
  goToCheckout = e => {
    this.props.history.push("/checkout");
  };

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Coding Test</h3>
        <div className="App-header-button">
         
          {this.state.logged && this.state.admin ? (
            <button className="btn-flat dark-4" onClick={this.goToAdmin}>
              Admin
            </button>
          ) : (
            <div></div>
          )}

          {this.state.logged ? (
            <button className="btn-flat dark-4" onClick={this.goToCheckout}>
              Checkout
            </button>
          ) : (
            <div></div>
          )}
          {this.state.logged ? (
            <button className="btn-flat dark-4" onClick={this.logout}>
              Logout
            </button>
          ) : (
            <div></div>
          )}
        </div>
      </header>
    );
  }
}
