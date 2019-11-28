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

<div className="">
        
        <div  className="menu flex-column md:flex-row">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/quizz">Quizz</Link>
          </li>
          <li>
            <Link to="/emotions">Emotions</Link>
          </li>
          <li>
            <Link to="/facts">Facts</Link>
          </li>
          <li>
            <Link to="/scoreboard">Scoreboard</Link>
          </li>
          {/* to remove GITUI */}
          <li>
            <Link to="/gitui">Gitui</Link>
          </li>
        </ul>
        </div>
        <div className="">
          <Route exact path="/" component={App} />
          <Route path="/quizz" component={Quizz} />
          <Route path="/gitui" component={Gitui} />
        </div>
      </div>
    </Router>
  )
ReactDOM.render(routing, document.getElementById('root'))