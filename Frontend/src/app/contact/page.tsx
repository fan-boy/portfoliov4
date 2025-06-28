// app/contact/page.jsx
"use client";
import { Mail, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const links = [
//   {
//     href: "https://read.cv/aadityashete",
//     label: "read.cv",
//     icon: FileText,
//   },
  {
    href: "https://www.linkedin.com/in/aadityashete",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "mailto:aadityashete@outlook.com",
    label: "Email",
    icon: Mail,
  },
];

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-background px-6">
      <ul className="flex flex-col md:flex-row gap-6 w-full max-w-2xl justify-center items-center">
        {links.map(({ href, label, icon: Icon }) => (
          <motion.li
            key={label}
            whileHover={{
              scale: 1.04,
              y: -4,
              boxShadow: "0 8px 32px rgba(99, 102, 241, 0.10)", // indigo-500 shadow
            }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="w-full md:w-1/3"
          >
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-3 px-8 py-8 rounded-xl border border-zinc-200 bg-white text-fontprimary hover:border-indigo-500 hover:bg-indigo-50 transition-colors shadow-sm"
              style={{ textDecoration: "none", minHeight: 160 }}
            >
              <Icon size={32} strokeWidth={1.5} className="text-indigo-500 " />
              <span>{label}</span>
            </a>
          </motion.li>
        ))}
      </ul>
    </main>
  );
}
