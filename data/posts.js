import stress from '../assets/stress.png';
import reactimage from '../assets/reactimage.png';
import ai from '../assets/ai.png';

const posts = [
  {
    id: 1,
    slug: "react-native",
    title: "React Native, Apps done easy",
    date: "March 14, 2026",
    dateISO: "2026-03-14",
    excerpt: "My personal experience with React Native and how it has made app development easier and more efficient.",
    coverImage: reactimage,
    tags: ["React-Native","Expo","App Development"],
    content: "help",
  },
  {
    id: 2,
    slug: "college-stress",
    title: "College Stress, Is Rosales behind it all?",
    date: "March 15, 2026",
    dateISO: "2026-03-15",
    excerpt: "A deep dive into the causes of college stress and the surprising role of Professor Rosales.",
    coverImage: stress,
    tags: ["Stress", "Mental Health", "College"],
    content: "College itself can be a stress time for active students, with many moving parts from multiple classes such as exams, projects, assignments, discussion most students struggle to keep up with all of it. During these times students look towards their most challenging classes with the majority vote leading to Professor Rosales. The CSUB Computer Science students are actively researching the gain he receives from student misery.",
  },
  {
    id: 3,
    slug: "ai-assistance",
    title: "How AI impacts my work",
    date: "March 16, 2026",
    dateISO: "2026-03-16",
    excerpt: "My thoughts on AI and how I use it to complete work (like this assignment).",
    coverImage: ai,
    tags: ["AI", "Career",],
    content: "For this course we are allowed AI to assist us with projects, a question that keeps occurring is if I can't do it but AI can do it within seconds how is this going to affect my future? How do I proceed with improving to the point where I am better than AI to companies? I've made it a goal to use AI conversatively I don't want it to do something and I have zero understanding and ship it off for the future and present students doing this how will it effect job opprunities, technical interviews, ect. This job market is hard enough are we coming to the point where its almost impossible?",
  },
];

export default posts;
