import { ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Props {
  children: ReactNode;
  bgImage: string;
  className?: string;
  overlay?: string;
}

const ParallaxSection = ({ children, bgImage, className = "", overlay = "bg-secondary/70" }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute inset-[-20%] z-0">
        <img src={bgImage} alt="" className="w-full h-full object-cover" aria-hidden="true" />
      </motion.div>
      <div className={`absolute inset-0 ${overlay} z-[1]`} />
      <div className="relative z-10">{children}</div>
    </section>
  );
};

export default ParallaxSection;
