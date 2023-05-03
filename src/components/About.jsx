function About() {
    return (
        <div id="about" className="sections">
            <h1 className="subheaders">About</h1>
            <p id="about">Hi there! My name is Ryan Kim, and I am a Sophomore (’25) at Dartmouth College studying Computer Science and Human Centered Design! I am an aspiring software developer and have displayed some of my content and information below. I hope you enjoy!</p>

            <h2 id="languagetitle">Languages and Technologies</h2>
            <div className="languages">
                <div className="languageitem">
                    <img className="languageimg" src="python.png" />
                    <h5 className="language">Python</h5>
                </div>
                
                <div className="languageitem">
                    <img className="languageimg" src="java.png" />
                    <h5 className="language">Java</h5>
                </div>

                <div className="languageitem">
                    <img className="languageimg" src="c.png" />
                    <h5 className="language">C</h5>
                </div>

                <div className="languageitem">
                    <img className="languageimg" src="html.png" />
                    <h5 className="language">HTML</h5>
                </div>

                <div className="languageitem">
                    <img className="languageimg" src="css.png" />
                    <h5 className="language">CSS</h5>
                </div>
                
                <div className="languageitem">
                    <img className="languageimg" src="javascript.png" />
                    <h5 className="language">JavaScript</h5>
                </div>
                
                <div className="languageitem">
                    <img className="languageimg" src="react.png" />
                    <h5 className="language">React</h5>
                </div>
                
                <div className="languageitem">
                    <img className="languageimg" src="firebase.png" />
                    <h5 className="language">Firebase</h5>
                </div>
            </div>
        </div>
    )
}

export default About;