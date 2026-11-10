const files = import.meta.glob("../assets/**/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

const slug = (s) => s.toLowerCase().replace(/\s+/g, "-");

// عکس معلم را با نام فایل پیدا می‌کند: "Anjali Singh" ← Anjali-Singh.png
const photo = (name) => {
  const key = Object.keys(files).find((p) =>
    p.split("/").pop().toLowerCase().startsWith(slug(name))
  );
  return key ? files[key] : undefined;
};

const list = [
  { name: "Ushvinder Kaur", subject: "Pre Primary", prev: "Narayana Group of Schools, Gurugram", exp: "10+ years" },
  { name: "Ritu Shokeen", subject: "Mathematics, Primary", prev: "Ryan International School, Gurugram", exp: "6+ years" },
  { name: "Jasmeet Kaur", subject: "EVS, Primary", prev: "Mother Mary Academy, Uttar Pradesh", exp: "7+ years" },
  { name: "Ritu Bhatnagar", subject: "Hindi, Primary", prev: "Mount Litera Zee School, Delhi", exp: "6+ years" },
  { name: "Pratishtha Jaglan", subject: "English, Primary", prev: "Suncity World School, Gurugram", exp: "5+ years" },
  { name: "Manoshree Paul", subject: "Master Teacher, Social Studies", prev: "Delhi Public School, Gurugram", exp: "10+ years" },
  { name: "Reema Saini", subject: "Computer, Middle School", prev: "Ryan International School, Gurugram", exp: "8+ years" },
  { name: "Vaishali Garg", subject: "EVS, Primary", prev: "Cambridge Montessori Junior Pre School", exp: "5+ years" },
  { name: "Poonam Grover", subject: "Maths, Middle School", prev: "Delhi Public School, Gurugram", exp: "15+ years" },
  { name: "Anjali Singh", subject: "Master Teacher, Arts & Craft", prev: "The Little Artist, Gurugram", exp: "5+ years" },
  { name: "Surbhi Agarwal", subject: "English, Primary", prev: "Lotus Veda International School, Delhi", exp: "4.5+ years" },
  { name: "Divya Khowal", subject: "Hindi, Primary", prev: "Cyboard School, Gurugram", exp: "1+ year" },
];

export const teachers = list.map((t) => ({ ...t, img: photo(t.name) }));