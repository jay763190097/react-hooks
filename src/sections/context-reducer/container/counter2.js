import React, { useContext } from 'react';
import { AppContext } from '../provider';

function Counter2() {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const { state, dispatch } = useContext(AppContext);
  return (
    <>
      <div>count: {state.count}</div>
      <button
        onClick={() => {
          dispatch({
            type: 'ADD'
          });
        }}>
        +
      </button>
      <button
        onClick={() => {
          dispatch({
            type: 'MINUS'
          });
        }}>
        -
      </button>
      <button
        onClick={() => {
          dispatch({
            type: 'MULTIPLY',
            payload: {
              number: 2
            }
          });
        }}>
        *
      </button>
      <button
        onClick={() => {
          dispatch({
            type: 'DIVIDE',
            payload: {
              number: 2
            }
          });
        }}>
        /
      </button>
    </>
  );
}

export default Counter2;
