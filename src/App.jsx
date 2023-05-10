import React from 'react';
import { useState } from 'react'
import NavBar from './components/NavBar';
import ProfilePic from './components/ProfilePic';
import BodyContent from './components/BodyContent';
import Contacts from './components/Contacts/Contacts';
// import './App.css'
import './styles.css'

// Upon refresh, goes to top of page
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

function App() {
  return (
    <>
      <div>
        <body>
          <NavBar />
          <ProfilePic />
          <BodyContent />
          <Contacts />
        </body>
      </div>
    </>
  )
}

export default App
