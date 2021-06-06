//import React from 'react';
import { Route, Link } from 'react-router-dom';
import Quiz from './Quiz';
import QuizHook from './components/QuizHook';
import { History } from './components/History';
import { TodoList } from './components/TodoList';
import { SelectFile } from './components/SelectFile';
import logo from './cross.png';
import './App.css';

function App(){
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <nav className="App-header__navy">
          <Link to="/js-quiz/Quiz">Quiz</Link>
          <Link to="/js-quiz/history">History</Link>
          <Link to="/js-quiz/todo">Todo</Link>
          <Link to="/js-quiz/QuizHook">Quiz Hook</Link>
        </nav>
        <div>
          <SelectFile />
        </div>
      </header>
      <div className="App-content">
        <Route exact path="/js-quiz/Quiz" render={ (props) => <Quiz {...props} /> } />
        <Route exact path="/js-quiz/history" render={ (props) => <History {...props} /> } />
        <Route exact path="/js-quiz/todo" render={ (props) => <TodoList {...props} /> } />
        <Route exact path="/js-quiz/QuizHook" render={ (props) => <QuizHook {...props} /> } />
      </div>
    </div>
  );
}

export default App;