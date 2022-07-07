import React, { useState, useContext, createContext } from 'react';

/**
 *  1.取代了复杂的Context.Consumer
 *  2.相对于static context = Context
 *  3.配合useReducer相当于redux
 */

//parent.js
const parentContext = createContext();
function Parent(props) {
  const countArr = useState({
    count1: 0,
    count2: 1
  });
  return (
    <parentContext.Provider value={countArr}>
      {props.children}
    </parentContext.Provider>
  );
}

// child.js
function Child() {
  const countArr = useContext(parentContext);
  const [countObj, setCountObj] = countArr;

  const changeCount1 = () => {
    setCountObj({
      ...countObj,
      count1: countObj.count1 + 1
    });
  };

  const changeCount2 = () => {
    setCountObj({
      ...countObj,
      count2: countObj.count2 + 2
    });
  };

  return (
    <>
      <div>
        count1: {countObj.count1} <button onClick={changeCount1}>+1</button>
      </div>
      <div>
        count2: {countObj.count2} <button onClick={changeCount2}>+2</button>
      </div>
    </>
  );
}

export default () => (
  <Parent>
    <Child />
  </Parent>
);
