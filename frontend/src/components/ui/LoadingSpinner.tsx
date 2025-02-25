import { motion } from 'framer-motion'

const circleVariants = {
  start: {
    y: '0%',
  },
  bounce: {
    y: ['0%', '-50%'],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut',
    },
  },
}

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center space-x-2">
      <motion.div
        variants={circleVariants}
        initial="start"
        animate="bounce"
        className="h-3 w-3 rounded-full bg-primary"
        style={{ animationDelay: '0s' }}
      />
      <motion.div
        variants={circleVariants}
        initial="start"
        animate="bounce"
        className="h-3 w-3 rounded-full bg-primary"
        style={{ animationDelay: '0.1s' }}
      />
      <motion.div
        variants={circleVariants}
        initial="start"
        animate="bounce"
        className="h-3 w-3 rounded-full bg-primary"
        style={{ animationDelay: '0.2s' }}
      />
    </div>
  )
}
