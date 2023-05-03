function Education() {
    return (
        <div id="education" className="sections">
            <h1 className="subheaders">Education</h1>

            {/* 
            edu = sectionitem
            school = item
            schoolimg = sectionimg
            schoolinfo = info
            schoolname = title
            schooldegree = subtitle
            schooldetails = itemdetails
            detail = detail
            */}


            <div className="educationitem">
                <img className="educationimg" src="dartmouthlogo_original.jpeg" />

                <div className="schoolinfo">
                    <h2 className="itemtitle">Dartmouth College</h2>
                    <h4 className="itemdescription">B.A. in Computer Science modified with Human Centered Design</h4>
                    <div className="itemdetails">
                        <h5 className="detail">Hanover, NH</h5>
                        <h5 className="detail">Sep 2021 – Jun 2025</h5>
                    </div>
                </div>
            </div>

            <div className="educationitem">
                <img className="educationimg" src="choatelogo.jpg" />

                <div className="schoolinfo">
                    <h2 className="itemtitle">Choate Rosemary Hall</h2>
                    <h4 className="itemdescription">Prepatory Boarding School, Cum Laude Society</h4>
                    <div className="itemdetails">
                        <h5 className="detail">Wallingford, CT</h5>
                        <h5 className="detail">Sep 2016 – May 2020</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;