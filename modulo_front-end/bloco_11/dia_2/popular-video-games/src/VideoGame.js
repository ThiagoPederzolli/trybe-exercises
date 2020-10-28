import React, { Component } from 'react';

class VideoGame extends Component {
  render() {
    // console.log(Component)
    const { title, developer } = this.props;
    return (<span>{title} desenvolvido por {developer}</span>)
  }
}

export default VideoGame;