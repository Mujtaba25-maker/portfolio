import {
  BarChart3,
  Code2,
  Database,
  Globe2,
  KeyRound,
  Layers3,
  LockKeyhole,
  Server,
  UsersRound
} from "lucide-react";

export const personalInfo = {
  name: "Mujtaba",
  title: "MERN Stack Developer",
  headline: "Turning ideas into fast, secure, and professional web applications.",
  email: "mujtabasekandari470@gmail.com",
  location: "Kabul, Afghanistan",
  github: "https://github.com/Mujtaba25-maker",
  linkedin: "https://www.linkedin.com/in/mujtaba-sekandari-b76371410",
  resume: "/resume/Mujtaba-Resume.pdf"
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" }
];

export const stats = [
  { label: "Projects Completed", value: 18, suffix: "+" },
  { label: "Technologies Used", value: 28, suffix: "+" },
  { label: "Years Learning / Experience", value: 3, suffix: "+" },
  { label: "Client / Team Projects", value: 6, suffix: "+" }
];

export const skills = [
  {
    title: "Frontend",
    icon: Code2,
    items: ["HTML", "CSS", "Bootstrap", "React", "JavaScript", "TypeScript", "Tailwind CSS", "Redux"]
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "Express.js", "Next.js", "REST APIs", "JWT Auth"]
  },
  {
    title: "Database",
    icon: Database,
    items: ["MongoDB", "Mongoose", "PostgreSQL", "Indexes", "Schema Design"]
  },
  {
    title: "Tools",
    icon: Layers3,
    items: ["Git", "GitHub", "Postman", "Vercel", "Render", "Docker"]
  }
];

export const projects = [
  {
    title: "Hanzalah Supermarket",
    category: "Dashboard",
    icon: BarChart3,
    description:
      "A deployed supermarket dashboard for managing daily retail operations with a clean JavaScript-based interface.",
    stack: ["JavaScript", "Vercel", "Dashboard", "Retail System"],
    features: ["Live deployment", "Supermarket workflow", "Admin-style screens", "Responsive layout"],
    liveUrl: "https://hanzalah-supermarket.vercel.app",
    githubUrl: "https://github.com/Mujtaba25-maker/Hanzalah-Supermarket",
    accent: "from-cyan-400 to-blue-600"
  },
  {
    title: "Educore",
    category: "Frontend",
    icon: Globe2,
    description:
      "A responsive educational platform built with React and Tailwind CSS, including routing, slider interactions, and modern landing pages.",
    stack: ["React", "Tailwind CSS", "Router DOM", "Swiper", "JavaScript"],
    features: ["Responsive education UI", "React routing", "Swiper slider", "Live Vercel deployment"],
    liveUrl: "https://educoremujtaba.vercel.app/",
    githubUrl: "https://github.com/Mujtaba25-maker/Educore",
    accent: "from-emerald-300 to-teal-600"
  },
  {
    title: "MonksHub",
    category: "Frontend",
    icon: UsersRound,
    description:
      "A deployed JavaScript web project with a modern frontend interface, clean content sections, and responsive presentation.",
    stack: ["JavaScript", "React", "Vercel", "Responsive UI"],
    features: ["Live website", "Modern sections", "Responsive frontend", "GitHub source"],
    liveUrl: "https://monks-hub-lemon.vercel.app",
    githubUrl: "https://github.com/Mujtaba25-maker/MonksHub",
    accent: "from-sky-300 to-indigo-600"
  },
  {
    title: "Main Project",
    category: "Frontend",
    icon: Code2,
    description:
      "An HTML-based frontend project showing layout fundamentals, page structure, and practical styling work.",
    stack: ["HTML", "CSS", "Frontend", "Responsive Layout"],
    features: ["HTML structure", "CSS styling", "Static page layout", "Repository source"],
    liveUrl: "#",
    githubUrl: "https://github.com/Mujtaba25-maker/main-project",
    accent: "from-violet-300 to-cyan-500"
  }
];

export const experiences = [
  {
    role: "MERN Stack Developer",
    period: "2025 - Present",
    description:
      "Building full-stack applications with React, Next.js, Node.js, Express, MongoDB, and PostgreSQL, with focus on clean UI, API structure, authentication, and deployment."
  },
  {
    role: "Freelance Web Developer",
    period: "2024 - Present",
    description:
      "Creating responsive landing pages, dashboards, and business applications for real users with maintainable code and fast delivery."
  },
  {
    role: "Full-Stack Project Builder",
    period: "2023 - Present",
    description:
      "Designing practical portfolio projects that include user flows, reusable components, database models, and production-style interfaces."
  }
];

export const services = [
  {
    title: "Full-Stack Web Development",
    icon: Globe2,
    description: "Complete web applications from frontend screens to backend APIs using MERN, Next.js, MongoDB, and PostgreSQL."
  },
  {
    title: "Frontend Development",
    icon: Code2,
    description: "Responsive interfaces using HTML, CSS, Bootstrap, React, Tailwind CSS, dashboards, forms, and animations."
  },
  {
    title: "Backend API Development",
    icon: Server,
    description: "Express.js and Next.js APIs with validation, clean routing, secure config, and scalable structure."
  },
  {
    title: "Database Design",
    icon: Database,
    description: "MongoDB, Mongoose, and PostgreSQL database structures with indexes, relationships, and reliable modeling."
  },
  {
    title: "Authentication Systems",
    icon: KeyRound,
    description: "JWT-based login flows, protected routes, role logic, and secure user session patterns."
  },
  {
    title: "Dashboard Development",
    icon: LockKeyhole,
    description: "Admin dashboards with analytics cards, tables, filters, charts, and role-based workflows."
  }
];

export const testimonials = [
  {
    name: "Ahmad Rahimi",
    role: "Startup Founder",
    text: "Mujtaba understands business workflows and turns them into clean dashboards that are easy to use."
  },
  {
    name: "Sara Noori",
    role: "Project Collaborator",
    text: "His React interfaces are polished, responsive, and organized. The code was easy for our team to continue."
  },
  {
    name: "Omid Hashemi",
    role: "Small Business Owner",
    text: "The system felt professional from the first demo. Fast pages, clear forms, and exactly the features we needed."
  }
];
