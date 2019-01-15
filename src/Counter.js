import React from "react";
import { connect } from "react-redux";

class Counter extends React.Component {
  render() {
    return (
      <div>
        <span>{this.props.n}</span>
        <button onClick={this.props.add1}>+1</button>
        <button onClick={this.props.add2}>+2</button>
        <button onClick={this.props.add3}>2秒后+1</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    n: state.n
  };
}

function mapDispatchToProps(dispatch) {
  return {
    add1: () => dispatch({ type: "add", payload: 1 }),
    add2: () => dispatch({ type: "add", payload: 2 }),
    add3: () => {
      setTimeout(() => {
        dispatch({
          type: "add",
          payload: 1
        });
      }, 2000);
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
