import { useState, useEffect } from 'react';

export function SolidBorderBox(props) {
  return (
    <div style={{ border: '1px solid black', padding: '8px' }}>
      {props.children}
    </div>
  );
}

export function Blink(props) {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const blinker = setInterval(() => setVisible(!visible), props.delay);
    return () => clearInterval(blinker);
  });
  return <div>{visible && props.children}</div>;
}
