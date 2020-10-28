import React, { Component } from 'react';
import bestSellingVideoGames from './data';
import VideoGame from './VideoGame';

class VideoGameList extends Component {
  render() {
    // console.log(Component)
    // console.log(bestSellingVideoGames[0])
    return (<div>
      {bestSellingVideoGames.map((game, index) => {
        return <VideoGame key={index} title={game.title} developer={game.developer} />
      })
      }
    <span>Eu sou o componente VideoGameList</span>
    </div>)
  }
}

export default VideoGameList;