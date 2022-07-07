import { useState, useEffect, useDebugValue, useRef } from 'react';
import { debounce } from 'lodash';
const prefix = 'https://api.github.com/users/';

var controller = new AbortController();
var signal = controller.signal;
console.log('controller', controller);

const useUserInfo = (username = 'yuwanlin') => {
  // const debounceFetch = debounce()
  const fetchRef = useRef(null);
  const [userInfo, setUserInfo] = useState({});
  const handleData = data => {
    setUserInfo(data);
  };
  useEffect(() => {
    const fetchData = username =>
      fetch(`${prefix}${username}`)
        .then(res => res.json())
        .then(data => {
          console.log('fetch success');
          handleData(data);
        });
    fetchRef.current = debounce(fetchData, 1000);
  }, []);

  useEffect(
    () => {
      fetchRef.current(username);
    },
    [username]
  );
  // useDebugValue('use-user-info');
  return userInfo;
};

export default useUserInfo;
