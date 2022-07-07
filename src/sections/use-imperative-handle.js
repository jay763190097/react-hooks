import React, {
  useRef,
  useEffect,
  useImperativeHandle,
  forwardRef,
  useState
} from 'react';

/**
 * 1.以前是父组件可以直接拿到子组件的dom
 *2.父组件通过子组件暴露出来的接口来操作子组件，组件解耦。迪米特法则。
 */
function Child(props) {
  const inputRef = useRef(null);
  useImperativeHandle(props.myref, () => ({
    focus() {
      inputRef.current.focus();
    },
    setValue(value) {
      inputRef.current.value = value;
    }
  }));
  return (
    <>
      <input type="text" ref={inputRef} />
    </>
  );
}

// Child = forwardRef(Child);

function Parent() {
  const childRef = useRef(null);
  const [value, setValue] = useState('');
  useEffect(() => {
    // childRef.current.focus();
  }, []);

  const handleChange = e => {
    const value = e.target.value;
    setValue(value);
    childRef.current.setValue(value);
  };
  console.log(childRef)
  return (
    <>
      <div>
        parent:
        <input value={value} onChange={handleChange} />
      </div>
      <div>
        children: <Child ref={childRef} />
      </div>
    </>
  );
}

export default Parent;
