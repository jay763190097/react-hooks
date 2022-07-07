import React from 'react';
import Counter1 from './counter1';
import Counter2 from './counter2';

function App() {
  return (
    <>
      <div>
        <h3>component 1</h3>
        <Counter1 />
      </div>
      <br />
      <div>
        <h3>component 2</h3>
        <Counter2 />
      </div>
    </>
  );
}

export default App;
