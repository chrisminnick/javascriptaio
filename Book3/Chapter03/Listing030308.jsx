import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        coords: { lat: 0, long: 0 },
      },
      temperature: 0,
      windSpeed: 0,
      precipitation: 0,
    };
  }
  render() {
    return <div>Widget Goes Here</div>;
  }
}

export default App;
