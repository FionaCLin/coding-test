import React, { Component } from "react";
import {getApi} from '../api'

export default class Checkout extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      api: ''
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

  render() {
    return (
      <main className="container">
        <div className="col s10">
          <input placeholder="integrate with google place api" />
          {this.state.api}
        </div>
      </main>
    );
  }
}
