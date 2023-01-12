import React from 'react';

class ToggleVisibility extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
    this.setVisibility = this.setVisibility.bind(this);
  }
  setVisibility() {
    this.setState({ visible: !this.state.visible });
  }
  render() {
    return (
      <div>
        {this.state.visible ? this.props.children : ''}
        <button onClick={this.setVisibility}>Show/Hide</button>
      </div>
    );
  }
}

export default ToggleVisibility;
