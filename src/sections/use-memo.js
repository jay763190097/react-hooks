import React, { useState, useMemo, memo, useCallback, useEffect } from 'react';

const fib = count => {
  if (count <= 1) {
    return count;
  } else if (count === 2) {
    return 2;
  } else {
    return fib(count - 1) + fib(count - 2);
  }
};
const computeExpensiveValue = count => {
  const v = fib(count);
  return v;
};

/**
 * 1.memo是一个高阶函数，用于防止组件重复渲染。
 * 2.useMemo是一个hooks，用于缓存某个需要复杂计算的值。
 * 3.useMemo监听某个值，当该值发生变化时才重新计算。
 * 4.useMemo lets you memoize an expensive calculation if the inputs are the same.
 *  However, it only serves as a hint, and doesn’t guarantee the computation won’t re-run.
 */
function Parent() {
  const [count, setCount] = useState(40);
  const [count2, setCount2] = useState(10);

  console.time('calc');
  const result = useMemo(() => computeExpensiveValue(count), [count]);
  // const result = fib(count);
  console.timeEnd('calc');

  return (
    <>
      <p>rsult: {result}</p>
      <div>
        <input type="number" disabled value={count} />
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <br />
        <input type="number" disabled value={count2} />
        <button onClick={() => setCount2(count2 + 1)}>+</button>
        <button onClick={() => setCount2(count2 - 1)}>-</button>
      </div>
    </>
  );
}

export default Parent;
