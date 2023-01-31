import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Messenger from './components/Messenger/Messenger';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Routes, Route} from "react-router-dom";

const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/messenger/*" element={<Messenger state={props.state.messengerPage}  />} />
            <Route path="/profile" element={<Profile state={props.state.profilePage} addPost={props.addPost}/>} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

{/* <Route path="/messenger/*" element={<Messenger MessengerData={props.state.messengerPage.MessengerData} MessageData={props.state.messengerPage.MessageData} />} />
<Route path="/profile" element={<Profile postData={props.state.profilePage.postData} />} /> */}