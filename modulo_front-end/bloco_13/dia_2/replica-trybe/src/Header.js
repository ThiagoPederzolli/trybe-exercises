import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import trybeLogo from './trybepreto.png'
class Header extends Component {
  render() {
    return (
      <header className="trybe-header">
        <nav className="trybe-nav">
          <span><Link to="/"><img src={trybeLogo} alt="logo da Trybe"/></Link> </span>
          <span><Link to="/solutions"> Gabarito </Link> </span>
          <span><Link to="/schedule"> Agenda </Link> </span>
          <span><Link to="/trybe-content"> Conteúdo </Link> </span>
          <span><Link to="/setup"> Configurações </Link> </span>
        </nav>
      </header>
    )
  }
}

export default Header;