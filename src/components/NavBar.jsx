import { Link } from "react-scroll";

function NavBar() {

    const navigation = [
        {
            name: 'about',
            title: 'About',
            class: 'navbar about',
        },
        {
            name: 'education',
            title: 'Education',
            class: 'navbar education',
        },
        {
            name: 'experience',
            title: 'Experience',
            class: 'navbar experience',
        },
        {
            name: 'projects',
            title: 'Projects',
            class: 'navbar projects',
        },
        {
            name: 'activitiesAndInterests',
            title: 'Activities and Interests',
            class: 'navbar activitiesandinterests',
        },
    ]

    return (
        <div>
            <div id="navContainer">
                <h1 id="title">Ryan Kim</h1>
                <nav>

                    {/* <p><a className="navbar" href="#about">About</a></p>
                    <p><a className="navbar" href="#education">Education</a></p>
                    <p><a className="navbar" href="#experience">Experience</a></p>
                    <p><a className="navbar" href="#projects">Projects</a></p>
                    <p><a className="navbar" href="#activitiesandinterests">Activities and Interests</a></p>{'  '} */}

                    {navigation.map((item, index) => {
                        return (
                            <Link activeClass="active" smooth={true} spy="navbar" to={item.name}>
                                <p><a className={item.class} href={`#${item.name}`}>{item.title}</a></p>
                            </Link>
                        );
                    })}
                    
                    {/* ABOUT */}
                    {/* <Link activeClass="active" smooth={true} spy="navbar" to="about">
                        <p><a className="navbar" href="#about">About</a></p>
                    </Link> */}

                    {/* EDUCATION */}
                    {/* <Link activeClass="active" smooth={true} spy="navbar" to="education">
                        <p><a className="navbar" href="#education">Education</a></p>
                    </Link> */}

                    {/* EXPERIENCE */}
                    {/* <Link activeClass="active" smooth={true} spy="navbar" to="experience">
                        <p><a className="navbar" href="#experience">Experience</a></p>
                    </Link> */}

                    {/* PROJECTS */}
                    {/* <Link activeClass="active" smooth={true} spy="navbar" to="projects">
                        <p><a className="navbar" href="#projects">Projects</a></p>
                    </Link> */}

                    {/* ACTIVITIES AND INTERESTS */}
                    {/* <Link activeClass="active" smooth={true} spy="navbar" to="activitiesAndInterests">
                        <p><a className="navbar" href="#activitiesAndInterests">Activities and Interests</a></p>
                    </Link> */}
                </nav>
            </div>
        </div>
    );
};

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        document.getElementById("navContainer").style.top = "0";
    } else {
        document.getElementById("navContainer").style.top = "-200px";
    };
};

export default NavBar;