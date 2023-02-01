import React from 'react';

function App() {
  return (
    <Map>
      <Ball />
    </Map>
  );
}

function Map({ children }) {
  return children;
}

function Ball() {
  return <div id="ball"></div>;
}

export default App;
