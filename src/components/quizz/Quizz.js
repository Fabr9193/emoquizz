import React from 'react';
import logo from '../../logo.svg';
import './Quizz.css';

function Quizz() {
  return (
    <div className="Quizz">
      <header className="Quizz-header">
        <img src={logo} className="Quizz-logo" alt="logo" />
        <p>
         This is the Quizz componennt
        </p>
        <a
          href="/"
          className="Quizz-link"
          rel="noopener noreferrer"
        >
          Back to the home APP
        </a>
      </header>
    </div>
  );
}

export default Quizz;
