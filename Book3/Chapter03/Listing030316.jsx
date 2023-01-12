import { useState, useEffect } from 'react';

function ClockContainer(props) {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        Toggle Clock Visibility
      </button>
      {visible && <Clock />}
    </div>
  );
}
function Clock(props) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => getNewTime(), 1000);
    return () => {
      console.log('stopping the timer...');
      clearInterval(timer);
    };
  }, []);

  function getNewTime() {
    setDate(new Date());
    console.log('tick...');
  }

  return (
    <div>
      <h1>The current date and time are {date.toLocaleString()}</h1>
    </div>
  );
}

export default ClockContainer;
