"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "neutral";
  delay?: number;
}

export default function FeatureCard({
  title,
  description,
  icon,
  href,
  variant = "primary",
  delay = 0,
}: FeatureCardProps) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        duration: 0.5, 
        delay: delay * 0.1 
      } 
    },
  };

  const colorVariants = {
    primary: "border-l-sawit-yellow hover:border-sawit-yellow",
    secondary: "border-l-leaf-green hover:border-leaf-green",
    neutral: "border-l-earth-brown hover:border-earth-brown",
  };

  const iconColorVariants = {
    primary: "text-sawit-yellow",
    secondary: "text-leaf-green",
    neutral: "text-earth-brown",
  };

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`relative overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg transition-all border-l-4 ${colorVariants[variant]}`}
    >
      <Link href={href} className="block p-6">
        <div className={`text-3xl mb-4 ${iconColorVariants[variant]}`}>
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-text-dark mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
        <div className="mt-4 text-sm font-medium flex items-center">
          <span className={iconColorVariants[variant]}>Pelajari lebih lanjut</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 ml-1 ${iconColorVariants[variant]}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </Link>
    </motion.div>
  );
} 