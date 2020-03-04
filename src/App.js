import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const counter = useSelector(state => state.counterReducer);
  const isLogged = useSelector(state => state.isLoggedReducer);
  const dispatch = useDispatch();

  return (
    <div>
      {console.log("rerender")}
      <h1>Counter : {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+5</button>
      <button onClick={() => dispatch(decrement(5))}>-5</button>
      {isLogged && <h3>Is logged ? </h3>}
    </div>
  );
}

export default App;
