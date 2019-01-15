import React from "react";
import { connect } from "react-redux";
import { store } from "./index";

class Counter extends React.Component {
  render() {
    return (
      <div>
        <span>{this.props.n}</span>
        <button onClick={this.props.add1}>+1</button>
        <button onClick={this.props.add2}>+2</button>
        <button onClick={this.props.addIfOdd}>单数时+1</button>
        <button onClick={this.props.addAsync}>2秒后+1</button>
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
    addIfOdd: () => {
      if (store.getState().n % 2 !== 0) {
        dispatch({ type: "add", payload: 1 });
      }
    },
    addAsync: () => {
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
