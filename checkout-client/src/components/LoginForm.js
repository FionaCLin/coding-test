import React, { Component } from "react";
import logo from "../logo.png";
import { Link } from "react-router-dom";
import { auth } from "../service";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    if (this.state.email === "" || this.state.name === "") return;
    event.preventDefault();
    console.log("onSubmit");

    auth
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(cred => {
        console.log(cred.user);

        this.props.history.push("/checkout");
      })
      .catch(err => {
        console.log("1111", err.message);
        this.setState({ error: `*${err.message}` });
      });
  };

  render() {
    return (
      <body>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Coding Test</h2>
          <div></div>
        </header>
        <main>
          <form className="container" onSubmit={this.handleSubmit}>
            <p className="error">{this.state.error}</p>
            <div className="">
              <div className="input-field col s12 m8 l6 xl4">
                <i className="material-icons prefix">account_circle</i>
                <input
                  id="icon_prefix"
                  type="text"
                  className="validate"
                  name="email"
                  placeholder="Enter your full name"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />
                <label htmlFor="icon_prefix">Full Name</label>
              </div>
              <div className="input-field col s12 m8 l6 xl4">
                <i className="material-icons prefix">vpn_key</i>
                <input
                  id="icon_password"
                  type="password"
                  name="password"
                  className="validate"
                  placeholder="Enter your password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  required
                />
                <label htmlFor="icon_password">Password</label>
              </div>
            </div>
            <div className="form-button-group">
              <button type="submit" className="btn-small">
                Login
              </button>
              <Link to="/signup" className="btn-small">
                Signup
              </Link>
            </div>
          </form>
        </main>
      </body>
    );
  }
}
