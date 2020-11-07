import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Comments from './Comments';

function App() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Sobre mim</Link>
            </li>
            <li>
              <Link to="/projects">Projetos</Link>
            </li>
            <li>
              <Link to="/comments">Deixe um comentário</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/">
          <section>
            <h1>Página sobre mim</h1>
          </section>
        </Route>
        <Route exact path="/projects">
          <section>
            <h1>Página de Projetos</h1>
          </section>
        </Route>
        <Route path="/comments">
          <Comments />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
