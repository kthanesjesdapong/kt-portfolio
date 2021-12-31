import { v4 as uuidv4 } from 'uuid';
import ssPickMe from '../images/ssPickMe.png'
import ssGraceRocker from '../images/ssGraceRocker.png'
import ssPocketInstructor from '../images/ssPocketInstructor.png'
import ComingSoon from '../images/ComingSoon.jpeg'

const projects = [
  {
    id: uuidv4(),
    name: 'Grace-Rocker',
    desc: 'An E-Commerce store that sells musical instruments, hosted on heroku; my first agile group project completed at Fullstack Academy. Completed using the PERN stack',
    img: ssGraceRocker,
    gh: `https://github.com/2103-team-css/grace-shopper`,
    link: `https://grace-rocker-2103-test.herokuapp.com/`,
  },
  {
    id: uuidv4(),
    name: 'Pocket-Instructor',
    desc: `Fullstack mobile application akin to Pokemon GO! In this game, students are able to see instructors spawn in real-time on a map, and capture them in order to pit them against one another.
    `,
    img: ssPocketInstructor,
    link: `https://github.com/team-jupiter/pocket-instructors`,
  },
  {
    id: uuidv4(),
    name: 'Pick-Me',
    desc: `Front-End Application that randomly selects restaurants for users per user's specification using Yelp's GraphQL API. 
    `,
    img: ssPickMe,
    link: `https://github.com/kthanesjesdapong/pick-me`,
  },
  {
    id: uuidv4(),
    name: 'In Progress',
    desc: `Currently working on a mobile application that tracks prices of Cryptocurrencies. 
    `,
    img: ComingSoon,
    link: `https://github.com/kthanesjesdapong/pick-me`,
  },
];

export default projects;
