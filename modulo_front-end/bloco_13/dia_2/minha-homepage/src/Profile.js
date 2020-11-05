import React, { Component } from 'react';

class Profile extends Component {
  render() {
    const  { ship } = this.props.match.params
    console.log(ship);
    return (<h1>Meu perfil: {this.props.name}, das montanhas de {ship}</h1>)
  }
}

export default Profile;