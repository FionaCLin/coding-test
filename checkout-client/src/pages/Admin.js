import React, { Component } from "react";
import { Button, Input, Grid } from "@material-ui/core";
import Email from "@material-ui/icons/Email";
import { admin_only } from "../api";

export default class Admin extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      error: "",
      success: ""
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

  addAdminRole = async evt => {
    try {
      let message = await admin_only(this.state.email);
      this.setState({ success: message.data.message });
    } catch (e) {
      this.setState({ error: e.response.data, success: "" });
    }
    setTimeout(() => {
      this.setState({ success: "", error: "" });
    }, 3000);
  };

  render() {
    return (
      <main className="container">
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <p className="error">{this.state.error}</p>
          <p>{this.state.success}</p>
        </Grid>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <Email />
          </Grid>
          <Grid item>
            <Input
              label="Email"
              type="email"
              name="email"
              disableUnderline
              inputProps={{ "aria-label": "description" }}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item>
            <Button variant="contained" onClick={this.addAdminRole}>
              Make as Admin
            </Button>
          </Grid>
        </Grid>
      </main>
    );
  }
}
