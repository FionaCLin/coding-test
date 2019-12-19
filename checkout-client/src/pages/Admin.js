import React, { Component } from "react";

export default class Admin extends Component {
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

  addAdminRole = evt => {
    console.log(evt);
  };

  render() {
    return (
      <main className="container">
        <div className="input-field col s8">
          <input id="email" type="email" className="validate" />
          <label htmlFor="email">Email</label>
        </div>
        <button className="col s3" onClick={this.addAdminRole()}>
          Make as Admin
        </button>
      </main>
    );
  }
}
