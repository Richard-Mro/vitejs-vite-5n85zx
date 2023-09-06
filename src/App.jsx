import { useState } from 'react';
import './App.css';
import './index.css';
import HelloWorld from './components/HelloWorld';

function App() {
  const [count, setCount] = useState(0);
  function handleIncrementBy1() {
    setCount(count + 1);
  }

  function handleIncrementBy10() {
    setCount(count + 10);
  }

  function handleResetCount() {
    setCount(0);
  }
  function handleRandomCount() {
    setCount(Math.floor(Math.random() * 100 + 1));
  }

  function handleDecrementBy10() {
    setCount(count - 10);
  }

  function handleDecrementBy1() {
    setCount(count - 1);
  }
  return (
    <>
      <HelloWorld
        count={count}
        IncrementBy1={handleIncrementBy1}
        IncrementBy10={handleIncrementBy10}
        ResetCount={handleResetCount}
        RandomCount={handleRandomCount}
        DecrementBy10={handleDecrementBy10}
        DecrementBy1={handleDecrementBy1}
      />
    </>
  );
}

export default App;
