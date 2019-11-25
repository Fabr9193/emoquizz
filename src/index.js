import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Quizz from './components/quizz/Quizz';
import Gitui from './components/gitui/Gitui';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//router
const routing = (
    <Router>
      <div className="menu-h">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/quizz">quizz</Link>
          </li>
          {/* to remove GITUI */}
          <li>
            <Link to="/gitui">gitui</Link>
          </li>
          {/* GITUI */}
        </ul>
        <Route exact path="/" component={App} />
        <Route path="/quizz" component={Quizz} />
        <Route path="/gitui" component={Gitui} />
      </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))