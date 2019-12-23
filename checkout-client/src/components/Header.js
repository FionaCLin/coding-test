import React, { Component } from "react";

import { Link } from "react-router-dom";
import { auth } from "../service";
import logo from "../logo.png";

export default class Header extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      admin: false,
      user: null
    };
  }

  componentDidMount() {
    this._isMounted = true;
    auth.onAuthStateChanged(user => {
      if (this._isMounted && user) {
        this.setState({ logged: true, user: user });
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

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>Coding Test</div>
        <div className="App-header-button">
          {this.state.logged && this.state.admin ? (
            <button className="btn-flat dark-4">
              <Link to="/admin">Admin</Link>
            </button>
          ) : (
            <div></div>
          )}

          {this.state.logged ? (
            <button className="btn-flat dark-4">
              <Link to="/checkout">Checkout</Link>
            </button>
          ) : (
            <button className="btn-flat dark-4">
              <Link to="/signup">Sign Up</Link>
            </button>
          )}
          {this.state.logged ? (
            <button className="btn-flat dark-4" onClick={this.logout}>
              Logout
            </button>
          ) : (
            <button className="btn-flat dark-4">
              <Link to="/login">Log In</Link>
            </button>
          )}
        </div>
      </header>
    );
  }
}
