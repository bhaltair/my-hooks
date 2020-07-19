import React, { useEffect } from 'react';
import { useToggle, useMount, useUnmount, useRequest } from "./hooks";
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

function App() {
  const [ state, { toggle } ] = useToggle();

  const { isLoading, isError, result, doFetch } = useRequest('http://jsonplaceholder.typicode.com/posts', {});

  useEffect(doFetch, [])

  return (
    <div className="App">
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
          {result && result.hits.map(item => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}      
    </div>
  );
}

export default App;
