import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

// component file
import TodoContainer from './functionBased/components/TodoContainer';
// stylesheet
import './functionBased/App.css';

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <TodoContainer />
  </Router>,
  document.getElementById('root'),
);
