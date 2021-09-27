import { v4 as uuidv4 } from 'uuid';
import GraceRocker from '../images/GraceRocker.png';
import pocket from '../images/pocketInstructors.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Grace-Rocker',
    desc: 'An E-Commerce store that sells musical instruments, hosted on heroku; my first agile group project completed at Fullstack Academy.',
    img: GraceRocker,
    gh: `https://github.com/2103-team-css/grace-shopper`,
    link: `https://grace-rocker-2103-test.herokuapp.com/`,
  },
  {
    id: uuidv4(),
    name: 'Pocket-Instructor',
    desc: `Fullstack mobile application akin to Pokemon GO! In this game, students are able to see instructors spawn in real-time on a map, and capture them in order to pit them against one another.
    `,
    img: pocket,
    link: `https://github.com/team-jupiter/pocket-instructors`,
  },
];

export default projects;
