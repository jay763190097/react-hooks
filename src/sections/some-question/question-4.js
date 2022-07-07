import React from 'react';

function Question4() {
  return (
    <ol>
      <li>
        不，在现代浏览器中，与类相比，闭包的原始性能没有显著差异，除了在极端情况下。
      </li>
      <li>此外，考虑到Hooks的设计在以下几个方面更有效：</li>
      <br />
      <li className="bold">
        1.钩子避免了类所需的大量开销，例如在构造函数中创建类实例和绑定事件处理程序的成本。
      </li>
      <li className="bold">
        2.使用Hooks的惯用代码不需要深层组件树嵌套，这在使用高阶组件，渲染道具和上下文的代码库中很常见。
        使用较小的组件树，React的工作量较少。
      </li>
    </ol>
  );
}

export default Question4;
