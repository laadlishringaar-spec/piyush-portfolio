/**
 * Long-form portfolio content, based on the author's interview answers.
 * Keep self-reported achievements labelled until certificates are reviewed.
 * Do not add private contacts, precise addresses, other people's full names,
 * or claim future ambitions are already running businesses.
 */
export const milestones = [
  { when: "EARLY YEARS", title: "A curiosity for machines", description: "Devices kaise kaam karte hain? Electronics aur hardware ko samajhne ki curiosity se journey shuru hui." },
  { when: "CLASS 7", title: "My first lines of code", description: "Mama Jaswant Goswami ne coding introduce karayi. W3Schools aur Apna College se HTML, CSS aur programming basics explore kiye." },
  { when: "SCHOOL YEARS", title: "Science exhibitions & teams", description: "PM SHRI GSS mein science models, group projects aur AI, cybersecurity aur game development par presentations." },
  { when: "EARLY WEB", title: "A webpage about friends", description: "School-time doston aur shared memories par banaya personal webpage, Netlify par hosted. Live link abhi add karna hai." },
  { when: "2026", title: "Laadli Shringaar goes live", description: "Meri mother ke jewellery brand ke liye product storefront, backend APIs, cart aur WhatsApp enquiry journey build ki." },
  { when: "ONGOING", title: "Building Buddy AI", description: "Python aur Ollama par local-first desktop assistant: voice modules, conversation orchestration aur persistent memory." },
  { when: "WHAT'S NEXT", title: "A wider engineering journey", description: "AI, electronics, space technology, independent research aur real-world products mein skills deepen karna." },
];

export const toolsets = [
  { title: "Languages & Web Basics", items: ["Python", "JavaScript", "HTML", "CSS", "TypeScript (project work)", "C++ (basic debugging)"] },
  { title: "Web Development", items: ["React", "Next.js", "Node.js", "Express", "Responsive UI", "REST APIs"] },
  { title: "Data, Dev Tools & Deployment", items: ["PostgreSQL", "SQLite", "Git & GitHub", "VS Code", "Postman", "Vercel", "Railway"] },
  { title: "Local AI", items: ["Ollama", "Phi-3 experiments", "Whisper STT", "pyttsx3 TTS", "Conversation context", "Local memory"] },
  { title: "Electronics & Prototyping", items: ["Arduino", "ESP8266 / ESP32", "Ultrasonic sensors", "Motors / controllers", "Circuit prototypes", "Robotics experiments"] },
];

export const hardwareExperiments = [
  { number: "01", title: "Arduino fundamentals", status: "Early hands-on project", description: "LED blinking aur simple input/output experiments se microcontrollers, circuits aur debugging samajhna shuru kiya." },
  { number: "02", title: "Ultrasonic distance sensing", status: "Reported prototype", description: "Ultrasonic sensor ke saath distance-reading model; sensor data ko usable feedback mein convert karne ka experiment." },
  { number: "03", title: "Electronic protection concept", status: "Reported school prototype", description: "Power cut-off / delay concept par educational electronics model. Hardware safety aur basic control logic explore ki." },
  { number: "04", title: "Robotic vehicle experiments", status: "Reported prototypes", description: "Obstacle sensing aur Bluetooth/Wi-Fi based robot-car control jaise small robotics experiments." },
  { number: "05", title: "Arduino & ESP learning", status: "Ongoing exploration", description: "ESP8266, ESP32, Arduino boards aur sensors ke use-cases par self-directed learning aur practical experiments." },
  { number: "06", title: "Gesture-based computing", status: "Software/hardware experiment", description: "Gestures se computer interactions control karne ke idea par experiment; public technical demo abhi available nahi hai." },
];

export const workPrinciples = [
  { n: "01", title: "Research the problem", detail: "Pehle use-case, constraints aur requirements samajhna; impossible lagne wale problem ko chhote parts mein divide karna." },
  { n: "02", title: "Plan the architecture", detail: "Files, modules, data-flow, UI structure aur core features ka plan bana kar development start karna." },
  { n: "03", title: "Build step by step", detail: "Documentation, independent experiments aur AI assistance ke saath code likhna; ek prompt se blind generation nahi." },
  { n: "04", title: "Test, debug, improve", detail: "Features ko validate karna, issues solve karna aur project ko usable stage tak le jaane par focus." },
];

export const spaceTopics = [
  { title: "Planetary exploration", kind: "TOP INTEREST", detail: "Planets, spacecraft aur future scientific missions ko samajhna — personal favourite area." },
  { title: "Satellites & missions", kind: "TECHNOLOGY INTEREST", detail: "Satellites, remote observation aur launch services ki engineering aur scientific possibilities." },
  { title: "Astrophysics", kind: "INDEPENDENT LEARNING", detail: "Black holes, quantum mechanics, stellar evolution aur cosmology ke introductory se advanced concepts study karna." },
  { title: "Propulsion & simulation", kind: "EXPLORING", detail: "Rocket propulsion ideas aur simulation software seekhna; certified aerospace engineering expertise ka claim nahi." },
  { title: "Skywatching & astrophotography", kind: "PERSONAL PRACTICE", detail: "Sky observe karna aur astrophotography explore karna. Telescope se direct observation abhi nahi kiya." },
  { title: "Space learning communities", kind: "PARTICIPATION", detail: "Indian Space Club aur Indian Space School ki educational talks mein interest aur participation." },
];

export const achievementsDetailed = [
  { n: "01", type: "OLYMPIAD", title: "Indian Space Olympiad", highlight: "GRADE AIR 48 / ADVANCE AIR 95", description: "Indian Space Olympiad mein reported All India Grade Rank 48 aur Advance Rank 95. Certificate mila hai; public image abhi upload nahi hui.", evidence: "Certificate photo pending" },
  { n: "02", type: "SCHOOL SCIENCE", title: "Science exhibitions", highlight: "AROUND 6–7 EXHIBITIONS", description: "School science exhibitions mein multiple models present kiye. User ke anusar do exhibitions mein placement nahi aayi, baaki mein first position mili.", evidence: "Trophy / result images pending" },
  { n: "03", type: "LEADERSHIP", title: "Science project teams", highlight: "TEAM-LEAD EXPERIENCE", description: "PM SHRI GSS ke school science activities mein group-project teams ko lead kiya aur exhibitions ke liye models organize kiye.", evidence: "School experience (self-reported)" },
  { n: "04", type: "PRESENTATIONS", title: "Technology talks in school", highlight: "AI / CYBERSECURITY / GAME DEV", description: "Classes 9–10 ke aas-paas technology topics par presentations; Class 7 ke aas-paas Republic Day speech bhi di.", evidence: "Presentation records pending" },
  { n: "05", type: "ACADEMICS", title: "Class 10 result", highlight: "87%", description: "Class 10 studies ke saath electronics, experiments, science models aur self-directed coding explore ki.", evidence: "Academic document not uploaded" },
  { n: "06", type: "NCC", title: "Republic Day selection", highlight: "SELECTED FOR TROOP-LEAD ROLE", description: "NCC Republic Day activity ke troop-leader role ke liye selection hua tha, lekin final role perform nahi kiya.", evidence: "Selection claim (self-reported)" },
];

export const personalInterests = [
  { number: "01", title: "MUSIC & GUITAR", marker: "SOUND", description: "Classic, Bollywood aur English music sunta hoon. AJR, Imagine Dragons aur Ed Sheeran favourites mein hain. Guitar bajata hoon aur kabhi-kabhi voice recordings karta hoon.", keywords: ["AJR", "Imagine Dragons", "Ed Sheeran", "Guitar"] },
  { number: "02", title: "FORMULA 1", marker: "RACE", description: "F1 mera favourite sport hai. Lewis Hamilton first favourite driver; Max Verstappen, Charles Leclerc, Daniel Ricciardo aur Carlos Sainz bhi pasand hain. Ferrari abhi favourite team hai.", keywords: ["Lewis Hamilton", "Max Verstappen", "Charles Leclerc", "Ferrari"] },
  { number: "03", title: "CARS & ENGINES", marker: "VROOM", description: "High-performance combustion cars aur engineering ka fan. BMW M5 F10 top favourite, plus Mercedes-AMG, Dodge Challenger SRT, Ford Mustang, Maserati aur Toyota Supra.", keywords: ["BMW M5 F10", "AMG", "Challenger SRT", "Supra"] },
  { number: "04", title: "MARVEL & CINEMA", marker: "STORY", description: "Iron Man / Tony Stark favourite character aur RDJ ek creative inspiration. Favourite film Avengers: Endgame; Iron Man (2008) bhi pasand. Favourite villains Thanos, Doctor Doom aur Ultron.", keywords: ["Iron Man", "Avengers: Endgame", "Thanos", "Ultron"] },
  { number: "05", title: "GAMES & SPORTS", marker: "PLAY", description: "Minecraft aur Call of Duty jaise games pasand hain. Football mein goalkeeper, saath hi badminton aur cricket khelta hoon. Multiplayer gaming bhi enjoy karta hoon.", keywords: ["Minecraft", "Call of Duty", "Football", "Badminton"] },
  { number: "06", title: "BOOKS & IDEAS", marker: "READ", description: "Science fiction, science books aur Marvel comics padhna pasand hai. Nai technologies aur problems ko independently research karna bhi hobby ka hissa hai.", keywords: ["Science fiction", "Science", "Marvel comics", "Research"] },
];

export const futureDirections = [
  { number: "01", field: "WEB / DIGITAL SERVICES", stage: "POSSIBLE FIRST STEP", description: "Full-stack web development ke freelance projects se independent work build karna. Abhi paid client experience claim nahi karta; family aur unpaid projects par work kiya hai." },
  { number: "02", field: "TRANSPORT → LOGISTICS", stage: "ALTERNATIVE START", description: "Practical transport business se shuru karke dheere-dheere logistics services tak expand karne ka idea. Execution aur feasibility abhi planned stage par hain." },
  { number: "03", field: "AI, COMPUTING & COMPONENTS", stage: "LONG-TERM VISION", description: "Privacy-first AI products, computing systems, electronics aur future chip/component engineering mein research-driven ventures." },
  { number: "04", field: "SPACE TECHNOLOGY", stage: "LONG-TERM VISION", description: "Future mein satellite services, scientific observation aur exploration-focused engineering company banana chahta hoon. Abhi koi launch business operate nahi karta." },
  { number: "05", field: "AUTOMOTIVE & MOTORSPORT", stage: "PERSONAL AMBITION", description: "Performance engineering, motorsport aur ek din apni Formula 1 team ka dream. Ye future aspiration hai, existing company nahi." },
];

export const projectStories: Record<string, { role: string; challenge: string; approach: string; architecture: string[]; outcome: string; next: string }> = {
  "laadli-shringaar": {
    role: "Website developer & technical support for a family business — not the business owner.",
    challenge: "Small jewellery brand ko online product showcase aur straightforward WhatsApp ordering deni thi, bina unnecessary complicated checkout system banaye.",
    approach: "First storefront pages and product data, then search, product-detail gallery, cart and WhatsApp enquiries. Backend par Express APIs, PostgreSQL products aur admin authentication ka system develop kiya.",
    architecture: ["Frontend: Next.js, React, TypeScript and CSS", "UX: product detail pages, search, cart and WhatsApp enquiry", "Backend: Express APIs, PostgreSQL and session-based admin tools", "Deployment: Vercel frontend, Railway backend"],
    outcome: "Website live hai. Is project ne end-to-end delivery, business requirements aur deployment ko real context mein experience karaya.",
    next: "Images, product catalog, availability aur business content ko owner ke inputs ke saath maintain/update kiya ja sakta hai.",
  },
  "buddy-ai": {
    role: "Independent local AI project; architecture, implementation and testing in progress.",
    challenge: "Cloud-based personal APIs se bachkar modest laptop hardware par ek usable privacy-first assistant banana, jisme memory, context aur voice support ho.",
    approach: "Python modules ko separate kiya: input/output, intent/brain logic, local model provider, conversation context, SQLite memory aur STT/TTS. Local Ollama models ki quality aur performance compare ki.",
    architecture: ["Python application with separate Brain and I/O modules", "Ollama on localhost with local models (currently Phi-3)", "SQLite for persistent memory and conversation storage", "Whisper speech-to-text experiments and pyttsx3 voice output"],
    outcome: "Local model provider, modular orchestration aur memory functionality test ki gayi hai; reliable voice flow and advanced automation abhi ongoing hain.",
    next: "Speech-end detection, interruption handling, better answer reliability and permission-based desktop actions — future roadmap, not completed functionality.",
  },
  "friends-webpage": {
    role: "Personal learning project from early web-development years.",
    challenge: "HTML/CSS seekhte waqt ek real page banana tha jo school-time friendship memories ko express kar sake.",
    approach: "Basic web elements, layouts aur personal content ke saath experiment kiya. Ye friends ke baare mein webpage tha, meetup application nahi.",
    architecture: ["HTML and CSS fundamentals", "Simple personal webpage structure", "Originally hosted using Netlify"],
    outcome: "Early self-made web page aur practical learning milestone. Current live URL abhi available nahi hai.",
    next: "Public Netlify URL milne par Visit Website button add hoga; friend details permission ke bina expand nahi ki jayengi.",
  },
};
