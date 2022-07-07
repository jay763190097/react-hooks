import React, { useState, useEffect, useLayoutEffect } from 'react';

/**
 * 调用时机的不同
 * 1.useEffect的调用时机
 * 在组件layout 和 paint之后，也就是说组件出现在页面后再进行改变。
 *
 * 2.useLayoutEffect的调用时机
 * 在组件出现在页面之前进行改变，这个过程是同步的。
 */
function Input() {
  const [value, setValue] = useState('');
  const [lengths, setLengths] = useState(value.length);

  useEffect(
    () => {
      if (value.length > 10) {
        setValue(value.substring(0, 10));
      }
      setLengths(value.length);
    },
    [value]
  );

  const handleChage = e => {
    const { value } = e.target;

    setValue(value);
  };
  console.log('render');
  return (
    <>
      <input
        value={value}
        type="text"
        placeholder="最大长度为10"
        onChange={handleChage}
      />
      <p>length: {lengths}</p>
    </>
  );
}

export default Input;
