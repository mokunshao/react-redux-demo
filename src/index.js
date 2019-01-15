import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";
import { createStore } from "redux";
import { Provider } from "react-redux";

function reducer(state, action) {
  if (state === undefined) {
    return { n: 0 };
  } else {
    if (action.type === "add") {
      return { n: state.n + action.payload };
    } else {
      return state;
    }
  }
}

const store = createStore(reducer);
export default store;

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
