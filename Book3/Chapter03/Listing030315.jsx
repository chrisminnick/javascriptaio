import { useEffect, useState } from 'react';

function RecordClicks(props) {
  const [count, setCount] = useState(getSavedState());

  function getSavedState() {
    const savedString = localStorage.getItem('currentCount');
    const initialCount = JSON.parse(savedString);
    console.log(`currentCount: ${initialCount}`);
    return initialCount || 0;
  }

  useEffect(() => {
    localStorage.setItem('currentCount', JSON.stringify(count));
  }, [count]);

  function incrementCount() {
    const incremented = count + 1;
    setCount(incremented);
  }
  return <button onClick={incrementCount}>Increment and Store: {count}</button>;
}

export default RecordClicks;
