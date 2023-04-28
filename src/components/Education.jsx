function Education() {
    return (
        <div id="education" class="sections">
            <h1 class="subheaders">Education</h1>

            <div class="edu">
                <div class="school">
                    <img class="schoolimg" src="dartmouthlogo_original.jpeg" />

                    <div class="schoolinfo">
                        <h2 className="schoolname">Dartmouth College</h2>
                        <h4 className="schooldegree">B.A. in Computer Science modified with<br></br>Human Centered Design</h4>
                        <div className="schooldetails">
                            <h5 className="detail">Hanover, NH</h5>
                            <h5 className="detail">Sep 2021 – Jun 2025</h5>
                        </div>
                    </div>
                </div>

                <div class="school">
                    <img class="schoolimg" src="choatelogo.jpg" />

                    <div class="schoolinfo">
                        <h2 className="schoolname">Choate Rosemary Hall</h2>
                        <h4 className="schooldegree">Prepatory Boarding School, Cum Laude Society</h4>
                        <div className="schooldetails">
                            <h5 className="detail">Wallingford, CT</h5>
                            <h5 className="detail">Sep 2016 – May 2020</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;