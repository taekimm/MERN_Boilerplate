import React, { Component } from "react";
import axios from "axios";

class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      test: ""
    };
  }

  componentDidMount() {
    axios.get(`/api/test`).then(resp => {
      this.setState({ test: resp.data.test })
    });
  }

  render() {

    return (
      <div>
        {this.state.test}
        <h1>Test</h1>
      </div>
    )
  }
}

export default Test
