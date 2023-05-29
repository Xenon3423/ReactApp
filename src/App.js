import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import MessengerContainer from './components/Messenger/MessengerContainer';
import Nav from './components/Nav/Nav';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/login';


const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Nav />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/messenger/*" element={<MessengerContainer store={props.store} />} />
            <Route path="/profile/:userId?" element={<ProfileContainer store={props.store} />} />
            <Route path="/profile/*" element={<ProfileContainer store={props.store} />}/>
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;