import About from './About/About';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';
import ActivitiesInterests from './ActivitiesInterests/ActivitiesInterests';

function BodyContent() {
    return (
        <div>
            <About />
            <Education />
            <Experience />
            <Projects />
            <ActivitiesInterests />
        </div>
    )
}

export default BodyContent;