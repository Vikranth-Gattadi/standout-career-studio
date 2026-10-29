import resumeAsset from "@/assets/vikranth-resume.pdf.asset.json";
import photoAsset from "@/assets/vikranth-photo.png.asset.json";

export const resumeUrl = resumeAsset.url;
export const photoUrl = photoAsset.url;

export const profile = {
  name: "Gattadi Vikranth",
  firstName: "Vikranth",
  role: "Full-Stack Developer & Data Scientist",
  tagline:
    "I build full-stack web platforms and ship data-driven solutions — from Django portals and Node.js APIs to machine-learning systems that run in the real world.",
  objective:
    "Motivated and detail-oriented engineering graduate with a strong foundation in software development, algorithm optimization, and full-stack implementation. Eager to leverage hands-on programming experience across multiple languages and modern frameworks to drive impactful technical solutions.",
  email: "gvikranth2002@gmail.com",
  phone: "+91 91548 11502",
  phoneHref: "+919154811502",
  location: "Metpally, Telangana, India",
  linkedin: "https://www.linkedin.com/in/gattadi-vikranth-130228214/",
  github: "https://github.com/Vikranth-Gattadi",
  languages: ["English", "Hindi", "Telugu"],
  resumeUrl,
  photoUrl,
};

export const highlights = [
  {
    value: "2+",
    label: "Years teaching & building",
  },
  {
    value: "6",
    label: "Projects shipped",
  },
  {
    value: "8.72",
    label: "M.Tech CGPA",
  },
  {
    value: "8",
    label: "Tech domains",
  },
];

export type SkillGroup = {
  title: string;
  icon: "code" | "globe" | "brain" | "database" | "wrench";
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages & Core CS",
    icon: "code",
    skills: ["C++", "Python", "OOPs", "Data Structures", "Machine Learning"],
  },
  {
    title: "Web Development",
    icon: "globe",
    skills: ["HTML5", "CSS3", "JavaScript", "Node.js", "Bootstrap"],
  },
  {
    title: "Data & AI",
    icon: "brain",
    skills: ["GenAI", "LangChain", "n8n", "RAG", "Data Science", "Data Analytics"],
  },
  {
    title: "Databases",
    icon: "database",
    skills: ["MySQL", "SQLite", "MongoDB", "DBMS"],
  },
  {
    title: "Tools & BI",
    icon: "wrench",
    skills: ["Git", "GitHub", "Power BI", "Excel"],
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  summary: string;
  points: string[];
  current?: boolean;
};

export const experience: Experience[] = [
  {
    role: "Software Developer & Instructor",
    company: "NxtWave Disruptive Technologies",
    period: "Apr 2025 — Aug 2026",
    summary:
      "Teaching full-stack web development and mentoring the next generation of developers.",
    points: [
      "Deliver in-depth instruction across front-end (HTML, CSS, Bootstrap, JavaScript) and back-end (Python, SQL, Data Structures & Algorithms).",
      "Design industry-relevant curriculum that bridges theory with real-world application.",
      "Mentor students in building robust, scalable and efficient web applications aligned with current industry standards.",
    ],
    current: true,
  },
  {
    role: "Data Analyst Intern",
    company: "360DigiTMG",
    period: "Jun 2023 — Jun 2024",
    summary:
      "Trained as a data analyst and delivered a first end-to-end analytics project.",
    points: [
      "Earned certifications in Python, SQL, CRISP-ML(Q) and Power BI during the training period.",
      "Completed a first project as a data analyst, applying the full analytics lifecycle.",
    ],
  },
];

export type Project = {
  title: string;
  kind: "Featured" | "Academic";
  description: string;
  tech: string[];
  domain?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "E-Commerce Platform — Backend",
    kind: "Featured",
    domain: "Like Amazon",
    description:
      "A complete backend API for an e-commerce platform handling user accounts, product catalog, shopping cart, orders, payments and product reviews.",
    tech: ["Node.js", "SQLite"],
    featured: true,
  },
  {
    title: "Food Delivery Platform — Backend",
    kind: "Featured",
    domain: "Like Swiggy",
    description:
      "A complete backend API for a food delivery platform with restaurant listings, menu management, order placement, delivery tracking and payments.",
    tech: ["Node.js", "SQLite"],
    featured: true,
  },
  {
    title: "Sign Language to Text",
    kind: "Academic",
    domain: "Deep Learning",
    description:
      "Real-time system converting sign-language hand gestures into readable text using CNN/LSTM models over live video — built to improve communication for hearing- and speech-impaired people. Covered gesture detection, image preprocessing, model training and real-time prediction.",
    tech: ["Python", "OpenCV", "TensorFlow", "Keras"],
  },
  {
    title: "Malware Detection in Applications",
    kind: "Academic",
    domain: "Machine Learning",
    description:
      "Identifies malware in applications from features and permission data — the dataset is filtered, trained and used to classify potentially harmful applications.",
    tech: ["Machine Learning", "Python"],
  },
  {
    title: "Ph.D Thesis Portal",
    kind: "Academic",
    domain: "Full-Stack Web",
    description:
      "A fully functional website for the online submission and evaluation of Ph.D theses, streamlining the academic review workflow.",
    tech: ["HTML", "CSS", "JavaScript", "Python", "Django"],
  },
  {
    title: "Supply Chain Optimization",
    kind: "Featured",
    domain: "Client: Pallet Manufacturing",
    description:
      "Optimization study for a pallet-manufacturing supply chain — data cleaned and modelled in Python and MySQL, with dashboards for decision-makers in Power BI.",
    tech: ["Python", "MySQL", "Power BI", "Excel"],
  },
];

export type Education = {
  degree: string;
  institution: string;
  period: string;
  location: string;
  score: string;
};

export const education: Education[] = [
  {
    degree: "M.Tech in Data Science",
    institution: "Jawaharlal Nehru Technological University Hyderabad",
    period: "Sep 2023 — Sep 2025",
    location: "Hyderabad, IN",
    score: "CGPA 8.72",
  },
  {
    degree: "B.Tech in Information Technology",
    institution: "Kakatiya University College of Engineering and Technology",
    period: "Jul 2019 — Jul 2023",
    location: "Hanamkonda, IN",
    score: "CGPA 8.63",
  },
  {
    degree: "Intermediate (M.P.C)",
    institution: "Narayana Junior College",
    period: "Jun 2017 — Apr 2019",
    location: "Hyderabad, IN",
    score: "94.3%",
  },
  {
    degree: "Class X",
    institution: "Wisdom Spaces School",
    period: "Mar 2017",
    location: "Metpally, IN",
    score: "CGPA 9.5",
  },
];

export const achievements = [
  {
    title: "Python for Data Science, AI & Development",
    issuer: "Coursera",
    detail: "Professional certification on the Coursera platform.",
  },
  {
    title: "Basic Java Programming",
    issuer: "HackerRank",
    detail: "Certification earned on HackerRank (username: vikranthgattadi).",
  },
  {
    title: "Python, DBMS, ML & Power BI",
    issuer: "360DigiTMG",
    detail:
      "Program certifications in Python programming, DBMS, Machine Learning and Power BI.",
  },
];

export const qualities = [
  "Self-motivated",
  "Leadership",
  "Hard-working",
  "Adaptable",
  "Calm under pressure",
  "Always learning",
];
