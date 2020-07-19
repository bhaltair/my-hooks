# API 规范
- DOM 类 Hooks 不返回 ref

# API 
- 状态
  - [ ✅] useToggle
- 异步
  - useRequest
    - 使用 fetch
- 副作用
  - useDebonce
  - useThrottle
  - useInterval
- 生命周期
  - [ ✅] useMount
    - 在组件首次渲染时，执行方法。
  - [ ✅ ] useUnmount
- Dom
  - useScroll

# 使用
```js
import React from "react";
import { useToggle } from "../hooks";

export default () => {
  const [ state, { toggle } ] = useToggle();

  return (
    <div>
      <p>Current Boolean: {String(state)}</p>
      <p>
        <button onClick={() => toggle()}>Toggle</button>
      </p>
    </div>
  );
};

```