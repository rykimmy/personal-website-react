import ContactItems from './ContactItems';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Contacts = () => {
    return (
        <footer>
            {ContactItems.map((item, index) => {
                return (
                    <AnimationOnScroll animateIn="animate__tada">
                        <div key={item.name}>
                            <a className="contacts" target="_blank" href={item.target}><img src={item.logo} className="contactimg" /></a>
                        </div>
                    </AnimationOnScroll>
                );
            })}
        </footer>
    )
}

// function Contacts() {
//     return (
//         <footer>
//             <a className="contacts" href="mailto:ryan.s.kim.25@dartmouth.edu"><img class="contactimg" src="emailicon.png" /></a>
//             <a className="contacts" target="_blank" href="https://github.com/rykimmy"><img class="contactimg" src="githubicon.png" /></a>
//             <a className="contacts" target="_blank" href="https://www.linkedin.com/in/ryan-kim-b013b81bb/"><img class="contactimg" src="linkedinicon.png" /></a>
//         </footer>
//     )
// }

export default Contacts;