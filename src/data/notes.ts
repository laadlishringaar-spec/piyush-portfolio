// Original editorial drafts based on stated learning interests. Review before publishing.
export type Note = { slug: string; title: string; category: string; date: string; description: string; paragraphs: string[] };
export const notes: Note[] = [
  {
    slug: "build-step-by-step", title: "Why I Prefer Building Step by Step", category: "WORKFLOW", date: "DRAFT 01",
    description: "Project ko samajhna mere liye code generate karne se zyada important hai.",
    paragraphs: [
      "Mera development approach ek simple idea par based hai: pehle problem aur architecture ko samjho, phir implement karo. Sirf ek prompt mein pura project generate ho jaana hamesha useful nahi hota.",
      "Main AI assistance use karta hoon — especially jab coding errors, unfamiliar tools ya architectural decisions samajhne hon. Lekin codebase ke files, modules aur flow ko step-by-step dekhna meri priority rehti hai.",
      "Is approach se project ke decisions traceable rehte hain. Jab koi feature kaam nahi karta, mujhe pata hota hai ki usse investigate kahan se karna hai. Yeh ek ongoing learning process hai."
    ]
  },
  {
    slug: "from-hardware-to-ai", title: "From Hardware Curiosity to Local AI", category: "LEARNING", date: "DRAFT 02",
    description: "Machines ke andar kya hota hai? Isi question ne meri learning journey shuru ki.",
    paragraphs: [
      "Bachpan se electronics aur physical machines mein interest raha hai. Class 7 mein coding seekhna start kiya, web experiments banaye aur dheere-dheere Python, backend development aur AI systems tak pahucha.",
      "Hardware aur software dono ko samajhne ka ek advantage hai: ek idea sirf screen par nahi, real devices ke saath interact karne wale system ke roop mein bhi socha ja sakta hai.",
      "Buddy AI iss journey ka ongoing part hai. Goal ek local, privacy-focused assistant build karna hai — jiska development aur reliability testing abhi chal raha hai."
    ]
  }
];
