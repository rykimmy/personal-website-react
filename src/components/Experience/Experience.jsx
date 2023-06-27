import ExperienceItems from './ExperienceItems';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Experience = () => {
    return (
        <section id="experience" className="sections">
            {/* TITLE */}
            <h1 className="subheaders">Experience</h1>

            {/* Mapping through experience item components */}
            {ExperienceItems.map((item, index) => {
                return (
                    <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeftBig">
                        <div className="experienceItem" key={item.experience}>
                            
                            {/* IMAGE */}
                            <div>
                                <img src={item.logo} className="experienceImg" />
                            </div>

                            {/* EXPERIENCE INFO */}
                            <div className="experienceInfo">
                                <h2 className="itemTitle">{item.experience}</h2>
                                <h4 className="itemDescription">{item.role}</h4>

                                <div className="itemDetails">
                                    <h5 className="detail">{item.location}</h5>
                                    <h5 className="detail">{item.time}</h5>
                                </div>
                            </div>
                        </div>
                    </AnimationOnScroll>
                );
            })}
        </section>
    );
};

//////////// OLD CODE WITHOUT USING COMPONENTS ////////////

// function Experience() {
//     return (
//         <div id="experience" className="sections">
//             <h1 className="subheaders">Experience</h1>

//             <div className="experienceitem">
//                 <img className="experienceimg" src="unikeylogo.jpeg" />

//                 <div className="experienceinfo">
//                     <h2 className="itemtitle">UNIKEY Academy</h2>
//                     <h4 className="itemdescription">College Consultant, Standardized Testing Tutor</h4>
//                     <div className="itemdetails">
//                         <h5 className="detail">Remote</h5>
//                         <h5 className="detail">May 2022 – Present</h5>
//                     </div>
//                 </div>
//             </div>

//             <div className="experienceitem">
//                 <img className="experienceimg" src="algoed.jpeg" />

//                 <div className="experienceinfo">
//                     <h2 className="itemtitle">AlgoEd</h2>
//                     <h4 classname="itemdescription">Founding Intern, Data Analyst</h4>
//                     <div className="itemdetails">
//                         <h5 className="detail">Hong Kong / Remote</h5>
//                         <h5 className="detail">Jul 2021 – Mar 2022</h5>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

export default Experience;