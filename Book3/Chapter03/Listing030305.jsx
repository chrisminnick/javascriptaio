import { useState } from 'react';

function Counter() {
  const [currentCount, setCurrentCount] = useState(0);

  function incrementCount() {
    const newCount = currentCount + 1;
    setCurrentCount(newCount);
  }

  return <button onClick={incrementCount}>{currentCount}</button>;
}

export default Counter;
