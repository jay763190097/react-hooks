import React, { useRef, useEffect, useState } from 'react';

// 1.useRef返回一个可变的ref对象，ref.current指向初始化的值。
// 2.可以给ref.current赋值
// 3.useRef可以替代函数组件中没有实例变量的问题

function Edit() {
  const [count, setCount] = useState(0);
  const inputRef = useRef('');
  const timerRef = useRef(null);
  const fetchRef = useRef(false);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      inputRef.current.value = 'hello';
    }, 1000);
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  const handleClick = () => {
    if (fetchRef.current === true) {
      return;
    }
    console.log('正在拉取数据');
    fetchRef.current = true;
    // some fetch event
    setTimeout(() => {
      fetchRef.current = false;
    }, 3000);
  };

  return (
    <>
      <input type="text" value={count} ref={inputRef} />
      <div onClick={handleClick}>拉取网络数据</div>
    </>
  );
}

export default Edit;
