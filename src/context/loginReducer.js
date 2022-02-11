import React, { useReducer } from "react";

const initialState = {
  count: 0,
  countinterval: 1,
  increment: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, increment: action.increment };
    case "SET_INTERVAL":
      return {
        ...state,
        countInterval: action.countInterval,
      };
    case "INCREASE_ACCOUNT":
      return {
        ...state,
        count: state.count + state.countInterval,
      };
    case "DECREASE_ACCOUNT":
      return {
        ...state,
        count: state.count - state.countInterval,
      };
    case "RESTART":
      return { initialState };
    default:
      return state;
  }
};

function LoginReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleIncrement = e => {
    const { checked } = e.target;
    dispatch({ type: "INCREMENT", increment: checked });
  };

  const handleCountInterval = e => {};
  const handleCount = e => {};
  const handleRestart = e => {};
  return (
    <div>
      <h1>hola reducer</h1>
      <p>{"Cuenta" + state.count}</p>
      <input
        type="checkbox"
        id="chk"
        defaultChecked={state.increment}
        onChange={handleIncrement}
      />
      <label htmlFor="chk">Incrementar</label>
      <div>
        <label htmlFor="interval">{"Intervalo"}</label>
        <input
          type="text"
          id="interval"
          value={state.countinterval}
          onChange={handleCountInterval}
        />
        <button onClick={handleCount}>
          {state.increment ? "Incrementar" : "Decrementar"}
        </button>
        <button onClick={handleRestart} className="btn ">
          {"reiniciar"}
        </button>
      </div>
    </div>
  );
}

export default LoginReducer;
