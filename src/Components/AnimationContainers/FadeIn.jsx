import { motion, useInView } from "framer-motion"
import "./styles.css"
import { useRef, } from 'react';


const variants = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut",
        },
    },
    hidden: {
        opacity: 0,
        y: 50,
    },
};

export default function FadeInAnimationContainer({ children }) {

    const ref = useRef(null)
    const isInView = useInView(ref)


    return (
        <motion.div
            ref={ref}
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
        >
            {children}
        </motion.div>
    )
}