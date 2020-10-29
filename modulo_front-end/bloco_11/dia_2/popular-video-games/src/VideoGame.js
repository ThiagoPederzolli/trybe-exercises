import React, { Component } from 'react';
import PropTypes from 'prop-types';

class VideoGame extends Component {
  render() {
    // console.log(Component)
    const { title, developer } = this.props;
    return (<span>{title} desenvolvido por {developer}</span>)
  }
}

VideoGame.propTypes = {
  title: PropTypes.string,
  developer: PropTypes.string,
}

export default VideoGame;