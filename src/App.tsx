import React from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
//import Quiz from './components/Quiz(class)';
import Footer from './components/Footer';
import Dani from './components/Dani';
import QuizHook from './components/QuizHook';
import { History } from './components/History';
import { TodoList } from './components/TodoList';
import { SelectFile } from './components/SelectFile';
import { PageNotFound } from './components/PageNotFound';
import logo from './cross.png';
import './App.css';

function App(){
  const menuTop: any[] = [
    {
      link: '/QuizHook',
      text: 'Quiz javascript',
    },
    {
      link: '/history',
      text: 'History',
    },
    {
      link: '/Dani',
      text: 'Full stack dev',
    },
    {
      link: '/Listofquiz',
      text: 'List of quiz',
    }
  ];

  const [activeClass, setActiveClass] = React.useState(menuTop[0].text);
  const onToggleActiveLink = (event: any) => {
    let target = event.target.textContent;
    //console.log('target: ', target);
    setActiveClass(target);
  }
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <a href="https://github.com/snikos/js-quiz" title="Start page">
            <img src={logo} className="App-logo" alt="logo" />
          </a>
        </div>
        <nav className="App-header__navy">
        {menuTop.map( ({ link, text }) => (
          <Link 
            key={text}
            to={link}
            className={`${text===activeClass ? 'active' : ''}`}
            onClick={(e) => onToggleActiveLink(e)}>{text}</Link>
        ))}
        </nav>
        <div className="App-select">
          <SelectFile />
        </div>
      </header>
      <div className="App-content">
        <Switch>
          <Redirect exact from="/" to="/QuizHook" key="root" />
          <Route exact path="/history" render={ (props) => <History {...props} /> } />
          <Route exact path="/Dani" render={ (props) => <Dani {...props} /> } />
          <Route exact path="/Listofquiz" render={ (props) => <TodoList {...props} /> } />
          <Route exact path="/QuizHook" render={ (props) => <QuizHook {...props} /> } />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;