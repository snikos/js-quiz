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
          <Link to="/">Quiz</Link>
          <Link to="/history">History</Link>
          <Link to="/todo">Todo</Link>
          <Link to="/QuizHook">Quiz Hook</Link>
        </nav>
        <div>
          <SelectFile />
        </div>
      </header>
      <div className="App-content">
        <Route exact path="/" render={ (props) => <Quiz {...props} /> } />
        <Route exact path="/history" render={ (props) => <History {...props} /> } />
        <Route exact path="/todo" render={ (props) => <TodoList {...props} /> } />
        <Route exact path="/QuizHook" render={ (props) => <QuizHook {...props} /> } />
      </div>
    </div>
  );
}

export default App;