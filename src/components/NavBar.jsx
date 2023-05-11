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

                    {/* ABOUT */}
                    <Link activeClass="active" smooth={true} spy="navbar" to="about">
                        <p><a className="navbar" href="#about">About</a></p>
                    </Link>

                    {/* EDUCATION */}
                    <Link activeClass="active" smooth={true} spy="navbar" to="education">
                        <p><a className="navbar" href="#education">Education</a></p>
                    </Link>

                    {/* EXPERIENCE */}
                    <Link activeClass="active" smooth={true} spy="navbar" to="experience">
                        <p><a className="navbar" href="#experience">Experience</a></p>
                    </Link>

                    {/* PROJECTS */}
                    <Link activeClass="active" smooth={true} spy="navbar" to="projects">
                        <p><a className="navbar" href="#projects">Projects</a></p>
                    </Link>

                    {/* ACTIVITIES AND INTERESTS */}
                    <Link activeClass="active" smooth={true} spy="navbar" to="activitiesAndInterests">
                        <p><a className="navbar" href="#activitiesAndInterests">Activities and Interests</a></p>
                    </Link>
                </nav>
            </header>
        </div>
    );
};

export default NavBar;