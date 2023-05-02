function NavBar() {
    return (
        <div>
            <header>
                <h1 id="title">Ryan Kim</h1>
                <nav>
                    <p><a className="navbar" href="#about">About</a></p>
                    <p><a className="navbar" href="#education">Education</a></p>
                    <p><a className="navbar" href="#experience">Experience</a></p>
                    <p><a className="navbar" href="#projects">Projects</a></p>
                    <p><a className="navbar" href="#activitiesandinterests">Activities and Interests</a></p>{'  '}
                </nav>
            </header>
        </div>
    )
}

export default NavBar;