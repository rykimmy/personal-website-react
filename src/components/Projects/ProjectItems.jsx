const EducationItems = [
    {
        project: 'Tiny Search Engine',
        description: 'A tiny search engine that encompasses three components: a crawler, indexer, and querier. The crawler takes a seed URL, explores the page for more links, and continuously crawls pages. The indexer scrolls through all crawled pages and creates an index that maps unique words to their frequencies. Finally, the querier takes search queries and ranks all of the crawled pages based on the search query and the index of words.',
        link: 'https://github.com/rykimmy/tse-rykimmy',
        languages: [
            {
                name: 'C',
            },
        ],
    },
    {
        project: 'Sudoku',
        description: 'A program that solves sudoku puzzles given through standard input as well as creates original, single-solution sudoku puzzles for users to solve. This program utilizes a back-tracking algorithm to both solve and create puzzles.',
        link: 'https://github.com/rykimmy/sudoku',
        languages: [
            {
                name: 'C',
            },
            {
                name: 'Python'
            },
        ],
    },
    {
        project: 'Collaborative Graphical Editor',
        description: 'This program utilizes a client-server to set up a collaborative graphical editor. Multiple users can draw, edit, and remove sketches with one another in real-time.',
        link: 'https://github.com/rykimmy/collaborative-graphical-editor',
        languages: [
            {
                name: 'Java',
            },
        ],
    },
    {
        project: 'Part of Speech Tagger',
        description: 'This project aims to build a learning algorithm that allows for the program to correctly tag parts of speech in text. The program utilizes Hidden Markov Models and Viterbi decoding to tag parts of speech of sentences. It is trained using a training dataset of sentences with words correctly labeled with their part of speech. It is then assessed on unforeseen text to gauge accuracy.',
        link: 'https://github.com/rykimmy/POS-tagger',
        languages: [
            {
                name: 'Java',
            },
        ],
    },
];

export default EducationItems;