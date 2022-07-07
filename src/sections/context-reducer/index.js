import React, { useContext } from 'react';
import Provider, { AppContext } from './provider';
import App from './container';

/**
 * 1.实现组件状态共享
 */

export default () => (
  <Provider>
    <App />
  </Provider>
);
