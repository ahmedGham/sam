"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation,useInView } from "framer-motion";
// import { useInView } from "react-intersection-observer";

type CounterProps = {
  target: number;
  duration?: number; // seconds
  inView: boolean;
};

export default function Counter({ target, duration = 1 ,inView}: CounterProps) {
  const controls = useAnimation();
//   const { ref, inView } = useInView({ triggerOnce: true }); // fires once
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start({ count: target, transition: { duration } });
    }
  }, [inView, controls, target, duration]);

  useEffect(() => {
    controls.stop();
    // controls.start({
    //   count: target,
    //   transition: { duration, ease: "easeOut" },
    // });
  }, [controls, target, duration]);

  return (
    <motion.span
      animate={controls}
      initial={{ count: 0 }}
      onUpdate={(latest) => setValue(Math.floor(latest.count))}
    >
      {value}
    </motion.span>
  );
}
