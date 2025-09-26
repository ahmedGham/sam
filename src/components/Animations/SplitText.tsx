import { motion } from "framer-motion";

const text = "Split Text Anim Split Text Animation";

const letterVariants = {
  hidden: { opacity: 0, y: 10,blur:1 },
  visible: { opacity: 1, y: 0,blur:1 },
};

export default function SplitText({text}:{text:String}) {
  console.log(text)
  return (
    
      <motion.div
        className="text-4xl font-bold flex flex-wrap"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.05 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {text.split(" ").map((char, i) => (
          <motion.span
            key={i}
            variants={letterVariants}
            transition={{ duration: 0.6, ease: "easeIn"}}
            className="inline-block"
          >
            {/* {char === " " ? "\u00A0" : char} */}
            {char +"\u00A0"}
          </motion.span>
        ))}
      </motion.div>
    
  );
}
