import React from 'react';

class VolumeSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { volume: 0 };
  }
  changeVolume = (e) => {
    this.setState({ volume: e.target.value });
  };
  render() {
    return (
      <>
        <p>Turn the volume up! Current Volume: {this.state.volume}</p>
        <input
          type="range"
          value={this.state.volume}
          min="0"
          max="11"
          onChange={this.changeVolume}
        />
      </>
    );
  }
}

export default VolumeSlider;
