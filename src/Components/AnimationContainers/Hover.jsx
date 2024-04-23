import { motion } from "framer-motion"


export default function HoverAnimationContainer({ children }) {
    return (
        <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 1 }}>
            {children}
        </motion.div>
    )
}