import React, { useState, useEffect } from 'react';
import useUserInfo from '../components/custom-hooks/use-user-info';

function UserInfo() {
  const [value, setValue] = useState('dan');
  const userInfo = useUserInfo(value);
  console.log(userInfo);
  const str = JSON.stringify(
    userInfo,
    ['name', 'company', 'location', 'blog', 'email'],
    '\t'
  );
  return (
    <>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <br />
      <pre style={{ fontSize: 20 }}>{str}</pre>
    </>
  );
}

export default UserInfo;
