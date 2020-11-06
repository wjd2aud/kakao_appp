import React from 'react'
import {HashRouter, Route} from 'react-router-dom'
import './App.css';

import Friends from './routes/Friends';
import Chats from './routes/Chats';
import Find from './routes/Find';
import More from './routes/More';
import Navigation from './components/Navigation';
import Chatitem from './components/Chatitem';
import Profile from './routes/Profile';
import Chat from './components/Chat';


function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/Friends" exact={true} component={Friends} />
      <Route path="/Chats" exact={true} component={Chats} />
      <Route path="/Find" exact={true} component={Find} />
      <Route path="/More" exact={true} component={More} />
      <Route path="/Chatitem" exact={true} component={Chatitem} />
      <Route path="/Profile" exact={true} component={Profile} />
      <Route path="/Chat" exact={true} component={Chat} />
    </HashRouter>
  );
}

export default App;
