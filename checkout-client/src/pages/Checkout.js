import React, { Component } from "react";
import { getApi } from "../api";
import { placeAutocomplete } from "../service";
import AddressInput from "../components/AddressInput";
import TextField from "@material-ui/core/TextField";

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
    getApi().then(api => {
      if (this._isMounted) {
        this.setState({ api: api }, () => {});
      }
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

  autoCompleteFunc = event => {
    let parameters = {
      input: this.state.address
    };
    console.log(parameters);
    placeAutocomplete(parameters, function(error, response) {
      if (error) throw error;
      console.log(response, error);
    });

    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <main className="container">
        <h3>Check Out</h3>
        <TextField
          id="icon_fullname"
          style={{ "margin-bottom": "16px" }}
          name="fullname"
          label="Full Name"
          fullWidth
          type="text"
          variant="outlined"
          className="validate"
          value={this.state.fullname}
          onChange={this.handleChange}
        >
          {/* <i className="material-icons prefix">account_circle</i> */}
        </TextField>
        {/* <i className="material-icons prefix">phone</i> */}
        <TextField
          id="icon_telephone"
          name="phone"
          type="tel"
          style={{ "margin-bottom": "16px" }}
          label="Telephone"
          variant="outlined"
          className="validate"
          fullWidth
          value={this.state.phone}
          onChange={this.handleChange}
        ></TextField>
        <AddressInput />
      </main>
    );
  }
}
