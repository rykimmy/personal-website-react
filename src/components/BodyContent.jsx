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
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeftBig">
                <About />
            </AnimationOnScroll>
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeftBig">
                <Education />
            </AnimationOnScroll>
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeftBig">
                <Experience />
            </AnimationOnScroll>
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeftBig">
                <Projects />
            </AnimationOnScroll>
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeftBig">
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