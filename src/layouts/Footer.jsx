import { Link } from "react-router-dom";

import { ArrowUpRight, Phone, GraduationCap, Globe } from "lucide-react";

// ==========================================
// SOCIAL MEDIA LINKS
// ==========================================

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/cyboardschool/",
    icon: "instagram",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/cyboardschool",
    icon: "linkedin",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/cyboardschool",
    icon: "facebook",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UC_Q02dWlawDUD2AJndAqIqg",
    icon: "youtube",
  },
  {
    name: "X",
    href: "https://twitter.com/CyboardSchool",
    icon: "x",
  },
];

// ==========================================
// FOOTER NAVIGATION LINKS
// ==========================================

const footerGroups = [
  {
    title: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "About Cyboard", href: "/about" },
      { label: "Why Cyboard", href: "/#why-cyboard" },
      { label: "School Structure", href: "/#school-structure" },
      { label: "Learning Platform", href: "/#learning-platform" },
      { label: "Testimonials", href: "/#testimonials" },
    ],
  },
  {
    title: "Admissions",
    links: [
      { label: "Apply for Admission", href: "/admission" },
      { label: "Admission Process", href: "/admission" },
      { label: "Contact Our Team", href: "/#contact" },
      { label: "Frequently Asked Questions", href: "/faq" },
    ],
  },
  {
    title: "News & Media",
    links: [
      { label: "Latest Blogs", href: "/blogs" },
      { label: "Awards", href: "/awards" },
      { label: "In the News", href: "/news" },
      { label: "Student Gallery", href: "/#student-gallery" },
      { label: "Teaching Team", href: "/#teaching-team" },
    ],
  },
];

// ==========================================
// SOCIAL MEDIA ICONS
// ==========================================

function SocialIcon({ type }) {
  const commonProps = {
    width: 19,
    height: 19,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": true,
  };

  switch (type) {
    case "instagram":
      return (
        <svg {...commonProps}>
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
          />
          <circle
            cx="12"
            cy="12"
            r="4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
          />
          <circle cx="17.5" cy="6.5" r="1.4" />
        </svg>
      );

    case "linkedin":
      return (
        <svg {...commonProps}>
          <path d="M5.2 8.5H2V21h3.2V8.5ZM3.6 2a1.85 1.85 0 1 0 0 3.7 1.85 1.85 0 0 0 0-3.7ZM22 13.8c0-3.75-2-5.5-4.7-5.5-2.15 0-3.1 1.18-3.65 2.02V8.5h-3.2V21h3.2v-6.2c0-1.64.31-3.22 2.34-3.22 2 0 2.03 1.87 2.03 3.33V21H21.2l.8-7.2Z" />
        </svg>
      );

    case "facebook":
      return (
        <svg {...commonProps}>
          <path d="M13.5 21v-8.2h2.8l.42-3.2H13.5V7.55c0-.93.26-1.56 1.6-1.56h1.72V3.13A23 23 0 0 0 14.3 3c-2.5 0-4.2 1.52-4.2 4.3v2.3H7.3v3.2h2.8V21h3.4Z" />
        </svg>
      );

    case "youtube":
      return (
        <svg {...commonProps}>
          <path d="M23 7.1a3 3 0 0 0-2.1-2.12C19.05 4.5 12 4.5 12 4.5s-7.05 0-8.9.48A3 3 0 0 0 1 7.1 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.9 3 3 0 0 0 2.1 2.12c1.85.48 8.9.48 8.9.48s7.05 0 8.9-.48A3 3 0 0 0 23 16.9a31 31 0 0 0 .5-4.9 31 31 0 0 0-.5-4.9ZM9.7 15.3V8.7l5.7 3.3-5.7 3.3Z" />
        </svg>
      );

    case "x":
      return (
        <svg {...commonProps}>
          <path d="M18.9 2H22l-6.78 7.75L23.2 22h-6.25l-4.9-7.38L5.6 22H2.45l7.25-8.28L1.8 2h6.4l4.43 6.74L18.9 2Zm-1.1 18h1.73L7.26 3.9H5.4L17.8 20Z" />
        </svg>
      );

    default:
      return null;
  }
}

// ==========================================
// FOOTER LINK
// ==========================================

function FooterLink({ label, href }) {
  const isAnchor = href.startsWith("/#");

  const className =
    "group flex items-center justify-between gap-2 text-sm text-white/65 transition-all duration-300 hover:translate-x-1 hover:text-[#F58232]";

  const content = (
    <>
      <span>{label}</span>
      <ArrowUpRight
        size={15}
        strokeWidth={2.5}
        className="shrink-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </>
  );

  if (isAnchor) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    );
  }

  return (
    <Link to={href} className={className}>
      {content}
    </Link>
  );
}

// ==========================================
// MAIN FOOTER
// ==========================================

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#382044] text-white"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#683879]/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#F58232]/10 blur-3xl" />

      <div className="container-site relative z-10 mx-auto px-5">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr_1.3fr] lg:gap-9">
          {/* BRAND - ORIGINAL LOGO */}
          <div>
            <Link to="/" aria-label="Cyboard School Home">
              <img
                src="/images/logo-cropped.jpg"
                alt="Cyboard School"
                className="mb-6 h-auto w-40 object-contain object-left"
              />
            </Link>

            <p className="max-w-xs text-sm leading-7 text-white/65">
              Empowering students with quality online education, innovative
              learning experiences, and a brighter future.
            </p>

            {/* SOCIAL MEDIA - ONE ROW */}
            <div className="mt-7">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-white/85">
                Follow Us
              </p>

              <div className="flex flex-nowrap items-center gap-2.5">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/[0.07] text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#F58232] hover:bg-[#F58232] hover:text-white"
                  >
                    <SocialIcon type={social.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* NAVIGATION GROUPS */}
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-7 text-base font-bold text-white">
                {group.title}
              </h3>

              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink label={link.label} href={link.href} />
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CONTACT SECTION */}
          <div>
            <h3 className="mb-6 text-base font-bold text-white">
              Get In Touch
            </h3>

            <p className="mb-4 text-sm leading-7 text-white/65">
              Have questions about admissions or our learning programs? We would
              love to hear from you.
            </p>

            {/* COMPACT PHONE CARD */}
            <a
              href="tel:+93748662990"
              className="group mb-4 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.07] px-3 py-3 transition-all duration-300 hover:border-[#F58232]/60 hover:bg-white/10"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F58232] text-white">
                <Phone size={17} strokeWidth={2.7} />
              </div>

              <div className="min-w-0">
                <p className="mb-0.5 text-[9px] font-bold uppercase tracking-[0.15em] text-white/50">
                  Call Our Team
                </p>

                <p className="whitespace-nowrap text-sm font-extrabold tracking-wide text-white transition-colors group-hover:text-[#F58232]">
                  +93 74 866 2990
                </p>
              </div>
            </a>

            {/* WEBSITE */}
            <a
              href="https://cyboardschool.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-5 flex items-center gap-3 text-sm font-medium text-white/65 transition-colors hover:text-[#F58232]"
            >
              <Globe
                size={17}
                strokeWidth={2.5}
                className="shrink-0 text-[#F58232]"
              />
              <span>www.cyboardschool.com</span>
            </a>

            {/* CONTACT BUTTON */}
            <a
              href="tel:+93748662990"
              className="inline-flex items-center gap-2 rounded-full bg-[#F58232] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#382044]"
            >
              Contact Our Team
              <ArrowUpRight size={16} strokeWidth={2.7} />
            </a>
          </div>
        </div>

        {/* BOTTOM FOOTER */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-xs leading-6 text-white/50">
              © {new Date().getFullYear()} Cyboard School. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-white/50">
              <span className="flex items-center gap-2">
                <GraduationCap
                  size={16}
                  strokeWidth={2.5}
                  className="text-[#F58232]"
                />
                Learn Today, Lead Tomorrow
              </span>

              <Link
                to="/"
                className="font-semibold transition-colors hover:text-[#F58232]"
              >
                Back to Home ↑
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
