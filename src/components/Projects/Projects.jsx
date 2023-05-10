import ProjectItems from './ProjectItems';

const Projects = () => {
    return (
        <div id="projects" className="sections">
            <h1 className="subheaders">Projects</h1>

            {ProjectItems.map((item, index) => {
                return (
                    <div className="projectitem" key={item.project}>
                        <h2 className="projecttitle">{item.project}</h2>

                        <div className="languagedetails">
                            {item.languages.map((lan, index) => {
                                return (
                                    <h5 className="languageitem">{lan.name}</h5>
                                );
                            })}
                        </div>

                        <p className="projectdescription">{item.description}</p>

                        <p className="projectlink"><a className="github" target="_blank" href={item.link}>Github Repository</a></p>
                    </div>
                );
            })}
        </div>
    )
}

// function Projects() {
//     return (
//         <div id="projects" class="sections">
//             <h1 class="subheaders">Projects</h1>

//             <div className="projectitem">
//                 <h2 className="projecttitle">Tiny Search Engine</h2>

//                 <div className="languagedetails">
//                     <h5 className="languageitem">C</h5>
//                 </div>

//                 <p className="projectdescription">A tiny search engine that encompasses three components: a crawler, indexer, and querier. The crawler takes a seed URL, explores the page for more links, and continuously crawls pages. The indexer scrolls through all crawled pages and creates an index that maps unique words to their frequencies. Finally, the querier takes search queries and ranks all of the crawled pages based on the search query and the index of words.</p>

//                 <p className="projectlink"><a className="github" href="https://github.com/rykimmy/tse-rykimmy">GitHub Repository</a></p>
//             </div>

//             <div className="projectitem">
//                 <h2 className="projecttitle">Sudoku</h2>

//                 <div className="languagedetails">
//                     <h5 className="languageitem">C</h5>
//                     <h5 className="languageitem">Python</h5>
//                 </div>

//                 <p className="projectdescription">A program that solves sudoku puzzles given through standard input as well as creates original, single-solution sudoku puzzles for users to solve. This program utilizes a back-tracking algorithm to both solve and create puzzles.</p>

//                 <p className="projectlink"><a className="github" href="https://github.com/rykimmy/sudoku">GitHub Repository</a></p>
//             </div>

//             <div className="projectitem">
//                 <h2 className="projecttitle">Collaborative Graphical Editor</h2>

//                 <div className="languagedetails">
//                     <h5 className="languageitem">Java</h5>
//                 </div>

//                 <p className="projectdescription">This program utilizes a client-server to set up a collaborative graphical editor. Multiple users can draw, edit, and remove sketches with one another in real-time.</p>

//                 <p className="projectlink"><a className="github" target="_blank" href="https://github.com/rykimmy/collaborative-graphical-editor">GitHub Repository</a></p>
//             </div>

//             <div className="projectitem">
//                 <h2 className="projecttitle">Part of Speech Tagger</h2>

//                 <div className="languagedetails">
//                     <h5 className="languageitem">Java</h5>
//                 </div>

//                 <p className="projectdescription">This project aims to build a learning algorithm that allows for the program to correctly tag parts of speech in text. The program utilizes Hidden Markov Models and Viterbi decoding to tag parts of speech of sentences. It is trained using a training dataset of sentences with words correctly labeled with their part of speech. It is then assessed on unforeseen text to gauge accuracy.</p>

//                 <p className="projectlink"><a className="github" target="_blank" href="https://github.com/rykimmy/POS-tagger">GitHub Repository</a></p>
//             </div>
//         </div>
//     )
// }

export default Projects;