import React, { Component } from "react";
import initStore from '../redux'
class dashboard extends Component {
  static getInitialProps(ctx) {
    initialize(ctx);
  }

  render() {
    return <div>welcome {ctx.store.get}</div>;
  }
}
export default withRedux(dashboard, null)(Signin);

//export default dashboard;
