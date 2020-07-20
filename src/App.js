import React, { useState, useRef } from 'react';
import { useToggle, useMount, useUnmount, useRequest, useInterval, useScroll } from "./hooks";
import './App.css';

const MyComponent = () => {
  useMount(() => {
    console.info('mount');
  });

  useUnmount(() => {
    console.info('unmount');
  });

  return <div>Hello World</div>;
};

const params = {}

function App() {
  const [ state, { toggle } ] = useToggle();

  const { isLoading, isError, data } = useRequest('http://localhost:3001/notes', params);

  let [count, setCount] = useState(0)
  useInterval(() => {
    setCount(count + 1)
  }, 1000)

  const ref = useRef()
  const [ x, y ] = useScroll(ref)

  return (
    <div className="App"> 
      <h2>{ count }</h2>
      <div className="list" ref={ref}>
        {
          new Array(100).fill(4).map((item, index) => {
            return (<h4 key={index}>{item}</h4>)
          })            
        }
      </div>
      { 'scrollX ' + x },{ 'scrollY ' + y }
      <p>Current Boolean: {String(state)}</p>
      <p>
        <button onClick={() => toggle()}>Toggle</button>
      </p>
      {
        state && <MyComponent/>
      }

      {
        isError && <div> 什么出错了。。</div>
      }

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ul>
          {data?.map(item => (
            <li key={item.id}>
              <a href={item.url}>{item.content}</a>
            </li>
          ))}
        </ul>
      )}      
    </div>
  );
}

export default App;
