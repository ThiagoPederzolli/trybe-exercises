import React, { Component } from 'react';
import bestSellingVideoGames from './data';
import VideoGame from './VideoGame';

class VideoGameList extends Component {
  render() {
    // console.log(Component)
    // console.log(bestSellingVideoGames[0])
    return (<div>
      <VideoGame title={bestSellingVideoGames[0].title} developer={bestSellingVideoGames[0].developer} />
    <span>Eu sou o componente VideoGameList</span>
    </div>)
  }
}

export default VideoGameList;