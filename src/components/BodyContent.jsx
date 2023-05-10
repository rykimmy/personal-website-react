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
            <About />
            
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
                <Education />
            </AnimationOnScroll>
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
                <Experience />
            </AnimationOnScroll>
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
                <Projects />
            </AnimationOnScroll>
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
                <ActivitiesInterests />
            </AnimationOnScroll>

            {/* <About />
            <Education />
            <Experience />
            <Projects />
            <ActivitiesInterests /> */}
        </div>
    )
}

export default BodyContent;