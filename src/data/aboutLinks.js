import { leaders } from "./leaders";

export const aboutLinks = [
{ label: "What We Do", to: "/what-we-do" },
{ label: "Accreditation", to: "/accreditation" },
{ label: "Cyboard Story", to: "/cyboard-story-learning-from-chalk-to-click" },
{
label: "Our Leadership Team",
to: "/cyboard-leadership",
// رهبران خودکار از leaders.js ساخته می‌شوند
children: leaders.map((l) => ({ label: l.name, to: `/cyboard-leadership/${l.slug}` })),
},
{
label: "Who Can Benefit",
children: [
{ label: "Homeschooling", to: "/homeschooling" },
{ label: "Transferable Jobs", to: "/transferable-jobs" },
{ label: "Physically Disabled", to: "/inspiring-abilities" },
],
},
{ label: "Beyond Academics", to: "/beyond-academics" },
];