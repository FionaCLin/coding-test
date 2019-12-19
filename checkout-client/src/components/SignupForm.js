import React, { Component } from "react";
import { Link } from "react-router-dom";
import { auth } from "../service";

export default class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: ""
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    if (this.state.email === "" || this.state.password === "") return;
    event.preventDefault();
    console.log("onSubmit");
    this.setState({ email: "", password: "", error: "" });
    // sign up the user
    auth
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(cred => {
        console.log(cred.user);

        this.props.history.push("/");
      })
      .catch(err => {
        console.log("1111", err.message);
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
              <div className="input-field col  s12 m10 l8 xl8">
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
              <div className="input-field col  s12 m10 l8 xl8">
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
                <label htmlFor="icon_password">New Password</label>
              </div>
            </div>
            <div className="form-button-group">
              <Link to="/" className="btn-small">
                Login
              </Link>
              <button className="btn-small" to="/signup">
                Signup
              </button>
            </div>
          </form>
        </div>
      </main>
    );
  }
}
