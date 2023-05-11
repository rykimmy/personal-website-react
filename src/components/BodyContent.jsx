import About from './About/About';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';
import ActivitiesInterests from './ActivitiesInterests/ActivitiesInterests';
import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

function BodyContent() {
    return (
        <div>
            {/* No animation for about section since it is shows on page opening */}
            <About />
            
            {/* EDUCATION SECTION */}
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
                <Education />
            </AnimationOnScroll>

            {/* EXPERIENCE SECTION */}
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
                <Experience />
            </AnimationOnScroll>

            {/* PROJECTS SECTIONS */}
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
                <Projects />
            </AnimationOnScroll>

            {/* ACTIVITIES AND INTERESTS SECTION */}
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
                <ActivitiesInterests />
            </AnimationOnScroll>

            {/* <About />
            <Education />
            <Experience />
            <Projects />
            <ActivitiesInterests /> */}
        </div>
    );
};

export default BodyContent;