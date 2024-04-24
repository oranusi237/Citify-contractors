import { motion } from "framer-motion"


export default function HoverAnimationContainer({ children }) {
    return (
        <motion.div
            whileHover={{ scale: 1.1, opacity: 1.5 }}
            initial={{ scale: 1, opacity: 1 }}>
            {children}
        </motion.div>
    )
}