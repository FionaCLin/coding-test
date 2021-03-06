import React, { Component } from "react";
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
 
    auth
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(cred => {
        this.props.history.push("/checkout");
      })
      .catch(err => {
        this.setState({ error: `*${err.message}` });
      });
  };

  render() {
    return (
      <main className="container">
        <div className="card">
          <form className="card-content" onSubmit={this.handleSubmit}>
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
            </div>
          </form>
        </div>
      </main>
    );
  }
}
