import React, { createContext, useReducer } from 'react';
import { reducer, initialState } from './reducer/counter';

export const AppContext = createContext();

function Provider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
}
export default Provider;
