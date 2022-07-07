import React, { useState, useReducer } from 'react';

/**
 * 1.相当于reducer
 * 2.与redux中的reducer不同的是，它的状态不是组件共享的，就相当于一个复杂版本的useState
 */
const initialState = {
  count: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD': {
      return {
        count: state.count + 1
      };
    }
    case 'MINUS': {
      return {
        count: state.count - 1
      };
    }
    case 'MULTIPLY': {
      return {
        count: state.count * action.payload.number
      };
    }

    case 'DIVIDE': {
      return {
        count: state.count / action.payload.number
      };
    }
  }
};

function Counter1() {
  const [state, dispatch] = useReducer(reducer, initialState);

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

function Counter2() {
  const [state, dispatch] = useReducer(reducer, initialState);

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

export default () => (
  <>
    <Counter1 />
    <Counter2 />
  </>
);
