import React from 'react';
import NavBar from './components/NavBar';
import ProfilePic from './components/ProfilePic';
import BodyContent from './components/BodyContent';
import Contacts from './components/Contacts/Contacts';
import { Link } from "react-scroll";
// import './App.css';
import './styles.css';

// Upon refresh, goes to top of page
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

function App() {

  const sections = document.querySelectorAll('section');
  const navList = document.querySelectorAll('NavBar .navContainer nav Link p .navbar a');

  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    })

    navList.forEach(a => {
      a.classList.remove('active');
      if (a.classList.contains(current)) {
        a.classList.add('active');
      }
    })
  })
  // ABOVE CODE IS FOR HIGHLIGHTING NAV BAR ON SCROLL – NOT FINISHED

  return (
    <>
      <div>
        <body>
          <NavBar />
          <div className="openingScreen">
            <h2 className="openingText">Hello! My name is Ryan Kim.</h2>
          </div>
          <ProfilePic />
          <BodyContent />
          <Contacts />
        </body>
      </div>
    </>
  )
}

export default App
