/*
function Example({ someProp }) {
  function doSomething() {
    console.log(someProp);
  }

  useEffect(() => {
    doSomething();
  }, []); // 🔴 This is not safe (it calls `doSomething` which uses `someProp`)
}

function Example({ someProp }) {
  useEffect(() => {
    function doSomething() {
      console.log(someProp);
    }

    doSomething();
  }, [someProp]); // ✅ OK (our effect only uses `someProp`)
}

useEffect(() => {
  function doSomething() {
    console.log('hello');
  }

  doSomething();
}, []); // ✅ OK in this example because we don't use *any* values from component scope


*/
import React from 'react';
function Question2() {
  return (
    <>
      <div>视情况而定</div>
      <div>see: useEffect</div>
    </>
  );
}

export default Question2;
