import EducationItems from './EducationItems';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Education = () => {
    return (
        <section id="education" className="sections">
            
            {/* TITLE */}
            <h1 className="subheaders">Education</h1>

            {/* Mapping through education item components */}
            {EducationItems.map((item, index) => {
                return (
                    <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeftBig">
                        <div className="educationItem" key={item.school}>

                            {/* IMAGE */}
                            <div>
                                <img src={item.logo} className="educationImg" />
                            </div>

                            {/* SCHOOL INFO */}
                            <div className="schoolInfo">
                                <h2 className="itemTitle">{item.school}</h2>
                                <h4 className="itemDescription">{item.degree}</h4>

                                <div classname="itemDetails">
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

// function Education() {
//     return (
//         <div id="education" className="sections">
//             <h1 className="subheaders">Education</h1>

//             <div className="educationitem">
//                 <img className="educationimg" src="dartmouthlogo_original.jpeg" />

//                 <div className="schoolinfo">
//                     <h2 className="itemtitle">Dartmouth College</h2>
//                     <h4 className="itemdescription">B.A. in Computer Science modified with Human Centered Design</h4>
//                     <div className="itemdetails">
//                         <h5 className="detail">Hanover, NH</h5>
//                         <h5 className="detail">Sep 2021 – Jun 2025</h5>
//                     </div>
//                 </div>
//             </div>

//             <div className="educationitem">
//                 <img className="educationimg" src="choatelogo.jpg" />

//                 <div className="schoolinfo">
//                     <h2 className="itemtitle">Choate Rosemary Hall</h2>
//                     <h4 className="itemdescription">Prepatory Boarding School, Cum Laude Society</h4>
//                     <div className="itemdetails">
//                         <h5 className="detail">Wallingford, CT</h5>
//                         <h5 className="detail">Sep 2016 – May 2020</h5>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

export default Education;