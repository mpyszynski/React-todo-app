import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

test('Renders without fail', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});