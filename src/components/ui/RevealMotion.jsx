import React from "react";
import { motion } from "framer-motion";

export function RevealMotion({
  children,
  delay = 0,
  duration = 0.7,
  y = 35,
  x = 0,
  scale = 1,
  className = "",
  threshold = 0.15,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y, x, scale: scale !== 1 ? scale : 1 }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, amount: threshold }}
      transition={{
        duration,
        delay,
        ease: [0.23, 1, 0.32, 1], // FTLOM signature cubic-bezier
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  delayChildren = 0.1,
  staggerChildren = 0.15,
  className = "",
  threshold = 0.15,
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren,
            staggerChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  y = 30,
  duration = 0.7,
  className = "",
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration,
            ease: [0.23, 1, 0.32, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
