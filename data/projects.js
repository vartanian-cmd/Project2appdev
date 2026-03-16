import tutorcenter from '../assets/tutorcenter.png';
import Pacman from '../assets/Pacman.png';
import passwordmanger from '../assets/passwordmanger.png';

const projects = [
  {
    id: 1,
    slug: "tutoring-database-system",
    title: "Tutoring Center Database System",
    description: "Together with 3 other students, we developed the front and back end of a working Database. In the database we included various tools for both Tutors and Students to assist in handling sessions between the two groups. Our database handles displaying data, data entry and deletion, updating data, login pages for both groups, and more. Above is a screenshot of the GUI with a table displaying that can be updated through the GUI.",
    excerpt: "Fully functional database system with a user-friendly GUI for displaying data, querying, data removal and entry",
    image: tutorcenter,
    tech: ["MySQL", "PHP", "CSS Modules","VS Code Studio"],
    github: "https://github.com/npaul-2/TutoringCenter/tree/main",
    year: "2025",
    role: "Developer",
  },
  {
    id: 2,
    slug: "A*-Search-Pacman",
    title: "Pacman using A* Search Algorithm",
    description: "This was a solo project made to display a usage for the popular A* Search algorithm. In this project, I recreated the popular game Pac-Man with the enemies (Ghosts) using an A* search algorithm to locate and track down the player (Pac-Man). ",
    excerpt: "A recreation of the popular game Pacman using the A* Search algorithm for enemy pathfinding",
    image: Pacman,
    tech: ["Unity", "C#","VS Code Studio"],
    github: "https://github.com/vartanian-cmd/A-Pacman",
    year: "2025",
    role: "Developer",
  },
    {
    id: 3,
    slug: "password-manager",
    title: "Password Manager (In Progress)",
    description: "This project is currently in progress. The purpose of this software would be to finally never forget a password again. This password manager would be installed both on PC and Mobile devices and would be connected between the two sharing passwords from both devices so you never have login issues again.",
    excerpt: "A personalized password manager that works across all devices and all applications",
    image: passwordmanger,
    tech: ["VS Code Studio", "Java"],
    github: "https://github.com",
    year: "2025",
    role: "Developer",
  },
];

export default projects;
