import React from 'react';
import { useState } from 'react'
import NavBar from './components/NavBar';
import ProfilePic from './components/ProfilePic';
import BodyContent from './components/BodyContent';
import Contacts from './components/Contacts';
// import './App.css'
import './styles.css'

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
