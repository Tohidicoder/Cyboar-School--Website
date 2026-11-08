const files = import.meta.glob("../assets/about/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

const img = (name) => {
  const key = Object.keys(files).find(
    (p) => p.split("/").pop().split(".")[0].toLowerCase() === name.toLowerCase()
  );
  return key ? files[key] : undefined;
};

export const leaders = [
  {
    slug: "kunal-singhal",
    name: "Kunal Singhal",
    role: "Co-Founder & CTO",
    img: img("Kunal"),
    linkedin: "https://www.linkedin.com/in/cakunalsinghal/",
    short: "Managing Director of EAZY ERP Technologies, building products that help tech start-ups grow.",
    bio: [
      "Kunal Singhal is the Co-Founder and CTO of Cyboard School and Managing Director of EAZY ERP Technologies, a company focused on innovative products for tech start-ups.",
      "A techie with a global outlook who likes setting benchmarks, he has steered rapid business growth over a 14-year career. He is also a sportsperson who loves exploring cultures and heritage through travel.",
    ],
    contributions: [
      "Integrating the best technology into school",
      "Bringing global education to smaller Indian cities",
    ],
    awards: [
      "Emerging Entrepreneur in Make in India, SME Channel (2016)",
      "Sarthi SME Excellence Award (2016)",
      "Outstanding Excellence Award in Global Business, ICEIL (2018)",
      "Skoch Excellence Award (2018)",
      "DQ Award for Innovation in Supply Chain Visibility (2018)",
    ],
    message: "As CTO, he is responsible for bringing the best technology into the school so that children from smaller cities can receive a global education.",
  },
  {
    slug: "rajat-singhal",
    name: "Rajat Singhal",
    role: "Co-Founder & CEO",
    img: img("RajatS"),
    linkedin: "https://www.linkedin.com/in/rajat-singhal-bb23622b/",
    short: "Serial entrepreneur and Chartered Accountant with experience from real estate to edtech.",
    bio: [
      "Rajat Singhal is a dynamic serial entrepreneur whose experience spans Real Estate, Finance, Hospitality, Education and now Edtech. He became a Chartered Accountant at a young age.",
      "He promotes a K-8 school that reached about 500 students within three years of opening. He believes challenging times bring out the best in people, and he envisioned Cyboard to make quality education available to every child and keep them future-ready.",
    ],
    contributions: [
      "World-class holistic education at home",
      "Individual attention from teachers",
      "Hands-on teaching methods",
      "AI-integrated learning platform",
      "Safety and security for children",
      "CBSE-mapped curriculum",
      "Same school even when you move cities",
      "English and Hindi, with French, Spanish and Sanskrit options",
      "Regular parent-teacher interaction",
    ],
    talks: [
      "Shaping responsible citizens",
      "Transforming education with quality schooling",
      "Making premium schooling accessible to all",
      "Nurturing curiosity with holistic development",
      "A cutting-edge LMS",
      "Schooling 4.0",
    ],
    message: "Cyboard is a promise of transformation: wider access to quality schooling, top subject experts reaching students anywhere, freedom from the fear of asking questions, and room for every child to follow their passion. Students already learn together from 29 states and union territories, and Cyboard is a major advocate of Schooling 4.0.",
  },
  {
    slug: "madhuri-parti",
    name: "Dr. Madhuri Parti",
    role: "Strategic Advisor",
    img: img("Mudhuri"),
    linkedin: "https://www.linkedin.com/in/madhuriparti/",
    short: "Educational visionary and futurist with over two decades of experience leading schools.",
    bio: [
      "Dr. N. Madhuri Parti is a distinguished educational visionary and futurist with more than twenty years of experience establishing and leading schools and shaping how learning evolves.",
    ],
  },
  {
    slug: "sachin-sahni",
    name: "Sachin Sahni",
    role: "Head of Sales & Marketing",
    img: img("Sachin"),
    linkedin: "https://www.linkedin.com/in/sachin-sahni-b19107b",
    short: "Business leader with 20+ years across EdTech, Education, Telecom and Insurance.",
    bio: [
      "Sachin Sahni is a seasoned business leader with over 20 years in EdTech, Education, Telecom and Insurance, including time at Airtel and PhysicsWallah.",
      "His expertise covers revenue growth, sales transformation, P&L management and scaling businesses.",
    ],
  },
  {
    slug: "aastha-bhardwaj",
    name: "Aastha Bhardwaj",
    role: "Principal",
    img: img("Aastha"),
    linkedin: "https://www.linkedin.com/in/aastha-bhardwaj-educationist003577a4/",
    short: "Trailblazing educationist with 20 years of leadership driving academic excellence.",
    bio: [
      "Aastha Bhardwaj is an educationist with 20 years of leadership who has transformed learning through ground-breaking initiatives. Her vision is taking Cyboard School to new heights of academic excellence.",
    ],
  },
];