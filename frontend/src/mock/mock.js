// Centralized mock data for Prince Baranwal's portfolio
// Replace '#' placeholders with real links/paths later.

export const personalInfo = {
  name: "Prince Baranwal",
  firstName: "Prince",
  lastName: "Baranwal",
  role: "Full Stack Developer",
  tagline: "Full Stack Developer | MERN | Java",
  location: "Ghaziabad, Uttar Pradesh, India",
  email: "prince3baranwal@gmail.com", // replace with real email
  phone: "+91-8690757675", // optional
  resumeUrl: "https://drive.google.com/file/d/1xlJQLMZ1YA3yH_PN3147m1gv5rrsDiWI/view?usp=drive_link", // replace with real resume PDF link
  avatarPlaceholder: "PB", // initials used in avatar placeholder
  summary:
    "Aspiring Software Developer with a strong foundation in the MERN stack, Java, and Python. I craft clean, accessible, production-ready web experiences and love turning complex problems into elegant, performant interfaces. Always learning, always shipping.",
  typingRoles: [
    "Full Stack Developer",
    "MERN Stack Engineer",
    "Java Developer",
    "Problem Solver",
  ],
  socials: {
    github: "https://github.com/princebaranwal07",
    linkedin: "https://www.linkedin.com/in/princeb01",
    email: "mailto:prince3baranwal@gmail.com",
  },
};

export const aboutHighlights = [
  { label: "Years Learning", value: "3+" },
  { label: "Projects Built", value: "5+" },
  { label: "Technologies", value: "15+" },
  { label: "Certifications", value: "5+" },
];

export const skills = {
  Frontend: [
    { name: "React.js", level: 90 },
    { name: "JavaScript", level: 88 },
    { name: "Tailwind CSS", level: 92 },
    { name: "HTML / CSS", level: 95 },
  ],
  Backend: [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 84 },
    { name: "Java", level: 82 },
    { name: "Python", level: 80 },
  ],
  Database: [
    { name: "MongoDB", level: 85 },
    { name: "MySQL", level: 80 },
  ],
  Tools: [
    { name: "Git & GitHub", level: 90 },
    { name: "Docker", level: 72 },
    { name: "AWS", level: 70 },
    { name: "VS Code", level: 95 },
  ],
};

export const projects = [
  {
    id: 1,
    title: "Student Management System",
    description:
      "A full-featured platform to manage students, courses, attendance, and performance with role-based dashboards for admins, teachers, and students.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    github: "https://github.com/princebaranwal07/Student.M.S.",
    live: "#",
    highlight: "Role-based access · Analytics · CRUD",
  },
  {
    id: 2,
    title: "AlumniConnect Platform",
    description:
      "A networking platform connecting alumni with current students, featuring mentorship requests, events, and a real-time chat module.",
    tech: ["MERN", "Socket.io", "JWT", "Tailwind"],
    github: "https://github.com/princebaranwal07/AlumniConnect",
    live: "#",
    highlight: "Real-time chat · Mentorship · Events",
  },
  {
    id: 3,
    title: "Urban Clothing (E-Commerce)",
    description:
      "A modern e-commerce storefront with product catalog, cart, wishlist, secure checkout, and an admin dashboard for inventory management.",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind"],
    github: "https://github.com/princebaranwal07/UrbanClothing",
    live: "#",
    highlight: "Cart · Wishlist · Admin panel",
  },
];

export const experiences = [
  {
    id: 1,
    company: "Pantech Solutions",
    role: "Software Development Intern",
    period: "2024",
    description:
      "Built and shipped internal web modules, collaborated on API design, and contributed to UI improvements across the admin console.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    id: 2,
    company: "Strivora Consulting",
    role: "Full Stack Developer Intern",
    period: "2024",
    description:
      "Developed responsive client-facing pages, integrated REST APIs, and optimized performance for high-traffic marketing campaigns.",
    tech: ["React", "Tailwind", "Node.js", "MySQL"],
  },
];

export const education = [
  {
    id: 1,
    school: "B.Tech — Computer Science and Engineering | IMS Engineering College",
    period: "2022 — 2026",
    details:
      "Completed recently Bachelor's degree with coursework in Data Structures, Algorithms, DBMS, Operating Systems, and Web Technologies.",
  },
];

export const certifications = [
  { id: 1, title: "AWS Cloud Practitioner Essentials", issuer: "AWS" },
  { id: 2, title: "NASSCOM FutureSkills — Full Stack", issuer: "NASSCOM" },
  { id: 3, title: "MongoDB Basics", issuer: "MongoDB University" },
  { id: 4, title: "Java Programming", issuer: "Coursera" },
  { id: 5, title: "Responsive Web Design", issuer: "freeCodeCamp" },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
