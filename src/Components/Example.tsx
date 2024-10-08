import { motion } from "framer-motion";

const Example = () => {
  return (
    <div className="grid place-content-center bg-black rounded-3xl px-4 py-24">
      <BarLoader />
    </div>
  );
};

const variants = {
  initial: {
    scaleY: 0.5,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "reverse" as const, // Use "reverse" as a valid repeatType
      duration: 1,
      ease: "circIn" as const, // Ensure ease is a valid string from Framer Motion types
    },
  },
};

const BarLoader = () => {
  return (
    <motion.div
      transition={{
        staggerChildren: 0.25,
      }}
      initial="initial"
      animate="animate"
      className="flex items-center gap-1 min-h-screen"
    >
      <motion.div variants={variants} className="h-12 w-2 bg-white" />
      <motion.div variants={variants} className="h-12 w-2 bg-white" />
      <motion.div variants={variants} className="h-12 w-2 bg-white" />
      <motion.div variants={variants} className="h-12 w-2 bg-white" />
      <motion.div variants={variants} className="h-12 w-2 bg-white" />
    </motion.div>
  );
};

export default Example;
