function About() {
    return (
        <div id="about" className="sections">
            <h1 className="subheaders">About</h1>
            <p id="about">Hi there! My name is Ryan Kim, and I am a Sophomore (’25) at Dartmouth College studying Computer Science and Human Centered Design! I am an aspiring software developer and have displayed some of my content and information below. I hope you enjoy!</p>

            <h2 id="languagetitle">Languages and Technologies</h2>
            <div className="languages">
                <div className="languageitem">
                    <img className="languageimg" src="python.png" />
                    <h5>Python</h5>
                </div>
                
                <h5>Java</h5>
                <h5>C</h5>
                <h5>HTML</h5>
                <h5>CSS</h5>
                <h5>JavaScript</h5>
                <h5>React</h5>
                <h5>Firebase</h5>
            </div>
        </div>
    )
}

export default About;