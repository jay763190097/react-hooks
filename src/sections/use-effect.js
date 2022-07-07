import React, { useState, useEffect } from 'react';

/**
 *
 * The reason is because the callback passed into setInterval's closure only accesses the time variable in the first render,
 * it doesn't have access to the new time value in the subsequent render because the useEffect() is not invoked the second time.
 * time always has the value of 0 within the setInterval callback.
 *
 * https://stackoverflow.com/questions/53024496/state-not-updating-when-using-react-state-hook-within-setinterval
 */

/**
 * 1.useEffect 用来处理 side effect。
 * DOM Mutations, subscriptions, timers, logging,
 * and other side effects are not allowed inside the main body of a function component
 *
 * 2.useEffect/useLayoutEffect可以取代componentDidMount、componentDidUpdate、componentWillUnmount三个声明周期。
 *
 * 3.第二个参数是一个数组，用来表示监听的值。每当数组中的元素的值发生过年变化，useEffect都会执行一次。
 *
 * 4.return的值可以是undefined（即没有return）或者是一个函数（clean up function)。在组件的下一次更新前和组件卸载之前执行。
 *
 * 5.使用setState的函数式更新： It lets us specify how the state needs to change without referencing the current state
 */
function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      // setCount(count + 1);
      setCount(prevState => prevState + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <p>count: {count}</p>
    </>
  );
}

export default Counter;
