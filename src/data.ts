export const profile = {
  firstName: "Shaira",
  fullName: "Maria Shaira Leigh A. Rabasto",
  role: "UI Designer",
  mobile: "09474159613",
  email: "shairarabasto002@gmail.com",
  address: "6020, Bahay, Sibonga, Cebu",
  school: "Cebu Technological University – Argao Campus",
  about:
    "Passionate UI Designer and 4th year Information Technology student at Cebu Technological University – Argao Campus. I specialize in translating complex systems into clean, intuitive, and user-centered digital experiences across both web and mobile platforms. I'm always eager to collaborate on innovative products that combine thoughtful design with seamless functionality.",
};

export type Project = {
  title: string;
  role: string;
  summary: string;
  bullets: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: "CITEFLOW",
    role: "UI Designer & QA Engineer (Capstone Project)",
    summary: "Web-based Administrative and Faculty Management System for the College of Technology and Engineering.",
    bullets: [
      "Designed user-friendly, responsive web interfaces tailored for administrative and faculty operations using Figma.",
      "Implemented core UI components to ensure seamless interaction and functional alignment with system requirements.",
      "Served as QA Engineer, drafting User Acceptance Testing (UAT) documents and conducting system test executions to identify bugs and edge cases.",
      "Collaborated with the team leader and members to review the system for functional errors and UI inconsistencies.",
      "Reported bugs and usability issues to members for immediate fix and re-testing prior to project turnover.",
    ],
    links: [],
  },
  {
    title: "StudySphere",
    role: "Lead UI/UX Designer",
    summary: "Study companion designed for web and mobile.",
    bullets: [
      "Concepted and mapped end-to-end user flows, information architecture, and page layouts for both web and mobile platforms.",
      "Designed high-fidelity, interactive prototypes in Figma to showcase full user journeys and key feature interactions without code.",
      "Established consistent design systems, visual hierarchy, and component libraries across web and mobile viewports.",
    ],
    links: [
      { label: "Web prototype", href: "https://www.figma.com/proto/oJNYZ3U6kq5PMrmLhygozk/Mobile-App-Ui?node-id=664-81&starting-point-node-id=664%3A81" },
      { label: "Mobile prototype", href: "https://www.figma.com/proto/oJNYZ3U6kq5PMrmLhygozk/Mobile-App-Ui?node-id=204-54&starting-point-node-id=204%3A54&device-frame=0" },
    ],
  },
  {
    title: "Spendy",
    role: "UI/UX Designer & Front-End Developer",
    summary: "Budget tracker web app.",
    bullets: [
      "Refined and optimized existing user interface elements for enhanced visual consistency and usability across web and mobile layouts.",
      "Developed and integrated the full Settings module on the front-end, handling both user interface controls and database data binding.",
    ],
    links: [
      { label: "Prototype", href: "https://www.figma.com/proto/iHrAtjRh0KsDwQBUDmCFzG/Spendy--Budget-Tracker--Web-App-?node-id=203-113&p=f&t=3Dit36H23C5KWUs0-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=203%3A113&show-proto-sidebar=1" },
    ],
  },
  {
    title: "PetCare",
    role: "UI Designer",
    summary: "Pet health reminder app concept.",
    bullets: [
      "Created end-to-end user interfaces and visual assets for a pet management concept app.",
      "Applied UI design principles, layout structures, and typography to deliver an intuitive and visually engaging experience.",
    ],
    links: [
      { label: "Figma file", href: "https://www.figma.com/design/O7G0MJJTKTkLDxEzl6vydR/PetCare-Pet-Health-Reminder-App?node-id=0-1&p=f&t=taYYBhgHkYUE0plK-0" },
    ],
  },
  {
    title: "BSIT Enroll",
    role: "UI Designer",
    summary: "Academic enrollment platform.",
    bullets: [
      "Contributed to the UI design process by defining color palettes, visual guidelines, and component styling.",
      "Ensured high visual appeal and consistent accessibility across primary user screens.",
    ],
    links: [
      { label: "Prototype", href: "https://www.figma.com/proto/X4V18Fsc4VhvIx9aK6wdsF/Proj-ni-Ms-JR?node-id=670-2&p=f&t=jU70s5dEOhjWnMjd-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=670%3A2" },
    ],
  },
];

export const experience = {
  role: "Logistics Committee Member",
  org: "SI++",
  bullets: [
    "Managed event setup, physical layout organization, and stage design for departmental meetings, seminars, and school events.",
    "Handled procurement, resource allocation, and hospitality coordination for faculty, guests, and student participants.",
    "Coordinated with cross-committee leaders to ensure smooth execution and prompt resolution of venue and supply requirements.",
  ],
};

export const hardSkills = [
  "UI/UX Design",
  "Wireframing & Low/High-Fidelity Prototyping",
  "Responsive Web Design",
  "Mobile App Design (iOS/Android)",
  "Design Systems",
  "HTML/CSS",
  "Figma",
];

export const softSkills = [
  "Problem-Solving",
  "Team Collaboration",
  "Communication",
  "Attention to Detail",
  "Time Management",
  "Adaptability",
];

export type Cert = { title: string; issuer: string; image: string; href?: string };

export const certificates: Cert[] = [
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy · Oct 2026",
    image: "/images/cert-cybersecurity.png",
    href: "https://www.credly.com/earner/earned/badge/e8e6a8b5-433a-4849-aa01-8646eb0152b7",
  },
  {
    title: "Build Your Resume with AI",
    issuer: "Cisco Networking Academy · Sep 2026",
    image: "/images/cert-resume-ai.png",
    href: "https://www.credly.com/earner/earned/badge/f88fed97-938e-43b7-af18-14c2d5f2b7df",
  },
  {
    title: "Data Analytics Level III",
    issuer: "Call Center Academy · 120 hours",
    image: "/images/cert-data-analytics.png",
  },
  {
    title: "Certificate of Recognition",
    issuer: "Parsers Organization, Logistics Committee · AY 2025-2026",
    image: "/images/cert-parsers.png",
  },
];
