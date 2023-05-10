import { Link } from "react-scroll";

function NavBar() {
    return (
        <div>
            <header>
                <h1 id="title">Ryan Kim</h1>
                <nav>
                    {/* <p><a className="navbar" href="#about">About</a></p>
                    <p><a className="navbar" href="#education">Education</a></p>
                    <p><a className="navbar" href="#experience">Experience</a></p>
                    <p><a className="navbar" href="#projects">Projects</a></p>
                    <p><a className="navbar" href="#activitiesandinterests">Activities and Interests</a></p>{'  '} */}

                    <Link activeClass="active" smooth={true} spy="navbar" to="about">
                        <p><a className="navbar" href="#about">About</a></p>
                    </Link>
                    <Link activeClass="active" smooth={true} spy="navbar" to="education">
                        <p><a className="navbar" href="#education">Education</a></p>
                    </Link>
                    <Link activeClass="active" smooth={true} spy="navbar" to="experience">
                        <p><a className="navbar" href="#experience">Experience</a></p>
                    </Link>
                    <Link activeClass="active" smooth={true} spy="navbar" to="projects">
                        <p><a className="navbar" href="#projects">Projects</a></p>
                    </Link>
                    <Link activeClass="active" smooth={true} spy="navbar" to="activitiesandinterests">
                        <p><a className="navbar" href="#activitiesandinterests">Activities and Interests</a></p>{'  '}
                    </Link>
                </nav>
            </header>
        </div>
    )
}

export default NavBar;