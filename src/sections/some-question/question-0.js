import React, { useState, useEffect, useRef } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  // const prevCount = usePrevious(count);
  const ref = useRef();
  useEffect(() => {
    ref.current = count;
  })

  return (
    <>
      <h1>
        Now: {count}, before: {ref.current}
      </h1>
      <input value={count} onChange={e => setCount(e.target.value)} />
    </>
  );
}

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export default Counter;
