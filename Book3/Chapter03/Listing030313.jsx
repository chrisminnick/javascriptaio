import React from 'react';

class ShowClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timer = setInterval(() => this.getNewTime(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  getNewTime() {
    this.setState({
      date: new Date(),
    });
  }
  render() {
    return <h1>The current time is {this.state.date.toLocaleTimeString()}</h1>;
  }
}

export default ShowClock;
