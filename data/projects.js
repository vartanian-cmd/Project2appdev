import tutorcenter from '../assets/tutorcenter.png';
import Pacman from '../assets/Pacman.png';

const projects = [
  {
    id: 1,
    slug: "tutoring-database-system",
    title: "Tutoring Center Database System",
    description: "",
    excerpt: "Fully functional database system with a user-friendly GUI for displaying data, querying, data removal and entry",
    image: tutorcenter,
    tech: ["MySQL", "PHP", "CSS Modules"],
    github: "https://github.com/npaul-2/TutoringCenter/tree/main",
    year: "2025",
    role: "Developer",
  },
  {
    id: 2,
    slug: "A*-Search-Pacman",
    title: "Pacman using A* Search Algorithm",
    description: "",
    excerpt: "A recreation of the popular game Pacman using the A* Search algorithm for enemy pathfinding",
    image: Pacman,
    tech: ["Unity", "C#",],
    github: "https://github.com/vartanian-cmd/A-Pacman",
    year: "2025",
    role: "Developer",
  },
];

export default projects;
