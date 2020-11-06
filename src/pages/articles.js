import React from "react"
import { motion, AnimatePresence } from "framer-motion"

import ArticleList from "../components/articleList"


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

//const duration = 0.5

// const H1variants = {
//   initial: {
//     opacity: 0,
//     x: -200,
//     transition:{
//       staggerChildren: 1
//     }

//   },
//   animate: {
//     opacity: 1,
//     x: 0,  
//   },
//   exit: {
//     x: -200,
//     opacity: 0
//   },
// }

const Articles = () => (
  
  <AnimatePresence>
    <motion.h1
    variants={h1Variant}
    initial="initial"
    animate="animate"
    exit="exit">Articles</motion.h1>
    <p>This is a collection or articles that are originally meant to be helpful for me to reference back to. If they are helpful to anyone else, all the better. </p>
    <ArticleList  /> 
  </AnimatePresence>
  
)

export default Articles
