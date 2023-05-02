function Experience() {
    return (
        <div id="experience" className="sections">
            <h1 className="subheaders">Experience</h1>

            <div className="experienceitem">
                <img className="experienceimg" src="unikeylogo.jpeg" />
                
                <div className="experienceinfo">
                    <h2 className="itemtitle">UNIKEY Academy</h2>
                    <h4 className="itemdescription">College Consultant, Standardized Testing Tutor</h4>
                    <div className="itemdetails">
                        <h5 className="detail">Remote</h5>
                        <h5 className="detail">May 2022 – Present</h5>
                    </div>
                </div>
            </div>

            <div className="experienceitem">
                <img className="experienceimg" src="algoed.jpeg" />

                <div className="experiencinfo">
                    <h2 className="itemtitle">AlgoEd</h2>
                    <h4 classname="itemdescription">Data Analyst</h4>
                    <div className="itemdetails">
                        <h5 className="detail">Hong Kong / Remote</h5>
                        <h5 className="detail">Jul 2021 –  Mar 2022</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;