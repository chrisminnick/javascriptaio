import { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCount: 0,
    };
    this.incrementCount = this.incrementCount.bind(this);
  }

  incrementCount() {
    const newCount = this.state.currentCount + 1;
    this.setState({ currentCount: newCount });
  }
  render() {
    return (
      <button onClick={this.incrementCount}>{this.state.currentCount}</button>
    );
  }
}

export default Counter;
