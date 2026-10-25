import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const MotionDiv = motion.div

const PageTransition = ({ children }) => {
  const reduceMotion = useReducedMotion()

  const variants = {
    initial: {
      opacity: 0,
      y: 0,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: reduceMotion ? 0 : -20,
      transition: {
        duration: reduceMotion ? 0 : 0.3,
        ease: "easeIn"
      }
    }
  }

  return (
    <MotionDiv
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </MotionDiv>
  )
}

export default PageTransition
