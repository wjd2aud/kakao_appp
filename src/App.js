import React,{useState} from 'react'
import {HashRouter, Route} from 'react-router-dom'
import './App.css';

import Friends from './routes/Friends';
import Chats from './routes/Chats';
import Find from './routes/Find';
import More from './routes/More';

import Chatitem from './components/Chatitem';
import Profile from './routes/Profile';
import Chat from './components/Chat';


function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Friends}/>
      <Route path="/Chats" component={Chats} />
      <Route path="/Find" component={Find} />
      <Route path="/More" component={More}/>
      <Route path="/Chatitem" component={Chatitem}/>
      <Route path="/Profile" component={Profile} />
      <Route path="/Chat" component={Chat}/>
    </HashRouter>
  );
}

export default App;
