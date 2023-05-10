import About from './About/About';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';
import ActivitiesInterests from './ActivitiesInterests/ActivitiesInterests';
import { AnimationOnScroll } from 'react-animation-on-scroll';

function BodyContent() {
    return (
        <div>
            <AnimationOnScroll animateIn="animate__bounceIn">
                <About />
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__bounceIn">
                <Education />
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__bounceIn">
                <Experience />
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__bounceIn">
                <Projects />
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__bounceIn">
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