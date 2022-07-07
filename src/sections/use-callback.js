import React, { useState, useMemo, memo, useCallback, useEffect } from 'react';

function Counter({ count }) {
  return (
    <div>
      <p>count: {count}</p>
    </div>
  );
}

function Child({ onChange }) {
  console.log('child render');
  const [value, setValue] = useState(0);
  const handleChange = e => {
    const { value } = e.target;
    setValue(value);
    onChange && onChange(value);
  };
  return (
    <div>
      <input value={value} onChange={handleChange} />
    </div>
  );
}
Child = memo(Child);

/**
 * 1.useCallback用于缓存一个函数
 * 2.// useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).
 */
function Parent() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [result, setResult] = useState(count);
  useEffect(() => {
    setInterval(() => {
      setCount(prevCount => prevCount + 1);
      setCount2(prevCount => prevCount + 1);
    }, 1000);
  }, []);

  const handleChange = useCallback(() => {
    setResult(count => count + 1);
  }, []);
  // const handleChange = () => { setResult(count + 1) };

  return (
    <>
      <Counter count={count} />
      <Counter count={count2} />
      <Child onChange={handleChange} />
      <p>result: {result}</p>
    </>
  );
}

export default Parent;
