import ActivitiesInterestsItems from './ActivitiesInterestsItems';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const ActivitiesInterests = () => {
    return (
        <section id="activitiesAndInterests" className="sections">

            {/* TITLE */}
            <h1 className="subheaders">Activities and Interests</h1>

            {/* Mapping through activity/interest item components */}
            {ActivitiesInterestsItems.map((item, index) => {
                return (
                    <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeftBig">
                        <div className="activityItem">
                            {/* TITLE */}
                            <h2>{item.name}</h2>

                            {/* ROLE */}
                            <h4>{item.role}</h4>

                            {/* IMAGE */}
                            <img className="activityImg" src={item.logo} />

                            {/* DESCRIPTION */}
                            <p className="activityDescription">{item.description}</p>
                        </div>
                    </AnimationOnScroll>
                );
            })}
        </section>
    );
};

//////////// OLD CODE WITHOUT USING COMPONENTS ////////////

// function ActivitiesInterests() {
//     return (
//         <div id="activitiesandinterests" className="sections">
//             <h1 className="subheaders">Activities and Interests</h1>
//             <div className="activityitem">
//                 <h2>Fern Cafe</h2>
//                 <h4>Student Supervisor</h4>

//                 <img className="activityimg" src="fern.jpeg" />

//                 <p>I am one of two student supervisors at Dartmouth’s Fern Cafe, an on-campus dining service for students and faculty. My time working at the Fern has taught me to act in a professional manner within a student-dominated environment; exhibit professional behavior with regards to customer service, handling food, and managing work hours; and communicate effectively with my staff manager as well as other student workers.</p>
//             </div>

//             <div className="activityitem">
//                 <h2>Korean Student Association</h2>
//                 <h4>President</h4>

//                 <img className="activityimg" src="ksa.jpg" />

//                 <p>As a Korean-American who cherishes their heritage, I joined the Korean Student Association (KSA) to find a community of like-minded peers at Dartmouth, and I am now the president of the organization. My duties include overseeing all of the club’s activities and events; regulating club funds; maintaining relations with peer organizations; and managing the rest of the executive board.</p>
//             </div>

//             <div className="activityitem">
//                 <h2>Dartmouth Men's Volleyball</h2>
//                 <h4>Libero</h4>

//                 <img className="activityimg" src="volleyball.jpg" />

//                 <p>Having played volleyball since middle school and throughout high school, I joined the club team at Dartmouth to continue playing the sport I love, and I am now the team libero. Our team attends weekly practices, participates in numerous tournaments throughout the year, and competes at the national tournament hosted by the National Collegiate Volleyball Federation every spring.</p>
//             </div>
//         </div>
//     )
// }

export default ActivitiesInterests;