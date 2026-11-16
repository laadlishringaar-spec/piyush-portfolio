// Edit this single file when you want to update your portfolio.
// Only publish real, confirmed achievements and links you own.
export const identity = {
  name: "Piyush Giri",
  label: "Developer, Builder & Explorer",
  email: null as string | null, // Add a dedicated public professional email later.
  github: null as string | null, // Add your final personal GitHub later.
  reddit: null as string | null,
  firstProjectUrl: "https://piyush-friends.netlify.app/" as string | null, // User-provided public Friends Webpage URL.
  laadliUrl: "https://laadli-shringaar-eight.vercel.app/" as string | null, // Confirmed live project URL.
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  status: "Completed" | "In development" | "Early project";
  year: string;
  short: string;
  intro: string;
  focus: string[];
  highlights: string[];
  lessons: string;
  href: string | null;
  featured: boolean;
  accent: "yellow" | "blue" | "pink";
};

export const projects: Project[] = [
  {
    slug: "laadli-shringaar", name: "Laadli Shringaar", category: "WEB DEVELOPMENT",
    status: "Completed", year: "2026", accent: "yellow", featured: true,
    short: "Family jewellery business ke liye storefront, product browsing aur WhatsApp enquiry flow.",
    intro: "Meri mother ke jewellery brand ke liye maine ek full-stack website develop ki — jisme product pages, cart, search, WhatsApp-based enquiries aur backend APIs hain. Business ownership meri nahi hai; mera role web development aur technical support ka tha.",
    focus: ["Next.js", "TypeScript", "React", "CSS", "Node.js", "Express", "PostgreSQL", "Railway", "Vercel"],
    highlights: ["Responsive storefront and product detail pages", "Search, cart and WhatsApp order enquiry", "Backend API, admin authentication and product management", "Git-based deployment workflow"],
    lessons: "Frontend aur backend ko ek maintainable project mein connect karna, deployment aur real-world requirements handle karna.",
    href: identity.laadliUrl,
  },
  {
    slug: "buddy-ai", name: "Buddy AI", category: "LOCAL AI / PYTHON",
    status: "In development", year: "ONGOING", accent: "blue", featured: true,
    short: "Privacy-first local desktop assistant with conversational logic, voice experiments and persistent memory.",
    intro: "Buddy AI ek ongoing project hai. Goal: ek privacy-focused desktop assistant jo local models aur on-device data ke saath kaam kare. Main iska architecture step-by-step build aur test kar raha hoon. Advanced computer automation abhi long-term vision hai, completed feature nahi.",
    focus: ["Python", "Ollama", "Local LLMs", "SQLite", "Whisper", "pyttsx3"],
    highlights: ["Local model integration and conversation orchestration", "SQLite-based persistent memory", "Speech-to-text and text-to-speech modules", "Ongoing work on reliability and input modes"],
    lessons: "Low-resource hardware par model quality, speed aur accuracy ke beech practical trade-offs samajhna.",
    href: null,
  },
  {
    slug: "friends-webpage", name: "Friends Webpage", category: "FIRST WEB PROJECT",
    status: "Early project", year: "CLASS 7 ERA", accent: "pink", featured: true,
    short: "Doston ke baare mein banaya gaya ek personal webpage — early web development journey ka part.",
    intro: "HTML aur CSS ke saath early experiments ke baad banaya gaya ek personal friends webpage. School-time friendships aur memories se inspired tha. Ye koi full-featured meetup platform nahi tha; ye web fundamentals aur personal creativity explore karne ka step tha.",
    focus: ["HTML", "CSS", "Web Fundamentals", "Netlify"],
    highlights: ["Early hands-on learning with web layouts", "Personal content and front-end experimentation", "Public Netlify website linked from the portfolio"],
    lessons: "Chhoti experiments se real pages tak jaana aur khud build karke seekhna.",
    href: identity.firstProjectUrl,
  },
];

export const skills = [
  { title: "HARDWARE / ELECTRONICS", no: "01", summary: "Mera sabse purana aur strongest interest — physical systems ko samajhna, assemble karna aur experiment karna.", items: ["Arduino & ESP-family boards", "Sensors & basic robotics", "Circuit prototyping", "Electronic safety models"] },
  { title: "SOFTWARE / WEB", no: "02", summary: "Frontend se backend tak practical builds; complex parts par research aur AI-assisted development.", items: ["Python, JavaScript, TypeScript", "HTML, CSS, React, Next.js", "Node.js & Express", "PostgreSQL, SQLite, Git"] },
  { title: "AI / AUTOMATION", no: "03", summary: "Local language models, voice interfaces aur desktop-assistant architecture explore karta hoon.", items: ["Ollama & local LLMs", "Prompting and tool workflows", "Speech / TTS integration", "Memory and orchestration"] },
  { title: "SPACE / SCIENCE", no: "04", summary: "Planetary exploration se inspired — satellites, astronomy aur simulation tools mein growing interest.", items: ["Astronomy & astrophysics learning", "Satellites and orbital concepts", "Skywatching / astrophotography", "Propulsion and simulations — learning"] },
];

export const interests = [
  { code: "01", name: "SPACE EXPLORATION", detail: "Mission Mangal se shuru hua interest; planets, black holes, satellites, skywatching aur future exploration." },
  { code: "02", name: "AUTOMOTIVE / F1", detail: "BMW M5 F10 favourite. Motorsport, high-performance cars aur Lewis Hamilton ke racing career ko follow karta hoon." },
  { code: "03", name: "MUSIC", detail: "AJR, Imagine Dragons, Ed Sheeran; guitar bajata hoon aur kabhi-kabhi recordings karta hoon." },
  { code: "04", name: "MARVEL / STORIES", detail: "Iron Man aur Tony Stark se inspiration; Avengers: Endgame favourite film. Science fiction aur comics bhi." },
  { code: "05", name: "GAMES / SPORTS", detail: "Minecraft, Call of Duty; football mein goalkeeper, badminton aur cricket bhi." },
  { code: "06", name: "BUSINESS VISION", detail: "Freelancing aur transport/logistics se start karne ke options; future mein technology, space aur industry projects." },
];

export const achievements = [
  { tag: "SPACE SCIENCE", title: "Indian Space Olympiad", detail: "Grade AIR 48 · Advance AIR 95", note: "User-reported result; certificate image to be added." },
  { tag: "SCHOOL PROJECTS", title: "Science exhibitions", detail: "6–7 participations", note: "Multiple reported first-place results; trophy / result details pending." },
  { tag: "LEADERSHIP", title: "Science project teams", detail: "School-level team leadership", note: "Collaborated on models, exhibits and presentations." },
  { tag: "KNOWLEDGE SHARING", title: "School presentations", detail: "AI · Cybersecurity · Game development", note: "Presented topics during school years." },
];
