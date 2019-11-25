import React from 'react';
import ReactDOM from 'react-dom';
import Gitui from './Gitui';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Gitui />, div);
  ReactDOM.unmountComponentAtNode(div);
});
