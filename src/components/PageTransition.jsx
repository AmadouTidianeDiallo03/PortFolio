import React from "react";
import { motion } from "framer-motion";

const variants = {
    initial: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
};

const PageTransition = ({ children }) => {
    return (
        <motion.div
            initial="initial"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.4, ease: "easeInOut" }}
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
