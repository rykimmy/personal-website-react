function ActivitiesInterests() {
    return (
        <div id="activitiesandinterests" className="sections">
            <h1 className="subheaders">Activities and Interests</h1>
            <ul>
                <div className="activities">
                    <div className="activityitem">
                        <h2>Korean Student Association</h2>
                        <h4>President</h4>

                        <img className="activityimg" src="ksa.jpg" />

                        <p>When entering Dartmouth, the Korean Student Association (KSA) was a bright and comforting community that allowed me to stay in touch with my Korean heritage while at Dartmouth. Through club activities and events, I was able to meet other Koreans and find a community that welcomed me. In order to give back to KSA and continue providing the same sense of community as well as fun events to celebrate Korean culture, I ran and was elected as the president.</p>
                    </div>

                    <div className="activityitem">
                        <h2>Dartmouth Men's Volleyball</h2>
                        <h4>Libero</h4>

                        <img className="activityimg" src="volleyball.jpg" />

                        <p>Volleyball has always been a sport I've been passionate about since middle school. Upon entering Dartmouth, I tried out for the club volleyball team, which has both allowed me to continue playing the sport I love while also offering another community of friends that I have grown to cherish through practices, tournaments, and other fun club activities.</p>
                    </div>

                    <div className="activityitem">
                        <h2>Fern Cafe</h2>
                        <h4>Student Supervisor</h4>

                        <img className="activityimg" src="fern.jpeg" />

                        <p>Skills: communication, customer serivce, team environment, professionalism, </p>
                    </div>

                </div>


                {/* <li>Interests</li>
                <ul>
                    <li>Physical Exercise</li>
                    <li>K-dramas</li>
                    <li>Conspiracy and Supernatural Theories</li>
                    <li>Healthy Cooking</li>
                </ul> */}
            </ul>
        </div>
    )
}

export default ActivitiesInterests;