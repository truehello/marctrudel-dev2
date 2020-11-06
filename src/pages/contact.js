import React from "react"
import {motion, AnimatePresence} from "framer-motion"

import ContactForm from "../components/contactForm.component"


const h1Variant = {
  initial:{ opacity: 0, y: -200 },
  animate:{ 
      opacity: 1, 
      y:0 ,
      transition: {
          delay: 0.75,
      },
  },
   exit:{ opacity: 0 , y: -200}
};

const Contact = () => (
  <AnimatePresence exitBeforeEnter>
    <img
      src="https://source.unsplash.com/featured/1250?space,background"
      alt="unsplash by "
      className="w-full h-64 mb-16 rounded-t-full"
    />
    <motion.h1
    variants={h1Variant}
    initial="initial"
    animate="animate"
    exit="exit">Get In Touch
    </motion.h1>
    <ContactForm />
    <img
      src="https://source.unsplash.com/featured/1250?space,background"
      alt="unsplash by "
      className="w-full h-64 mt-16 rounded-b-full"
    />
  </AnimatePresence>
)

export default Contact
