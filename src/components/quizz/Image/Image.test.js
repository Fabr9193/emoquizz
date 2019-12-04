import React from 'react';
import ReactDOM from 'react-dom';
import Quizz from './Quizz';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Quizz />, div);
  ReactDOM.unmountComponentAtNode(div);
});
