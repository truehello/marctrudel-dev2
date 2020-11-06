import React from "react"
import { motion, AnimatePresence } from "framer-motion"

import ContactForm from "../components/contactForm.component"

const container = {
  initial: { y: 20, opacity: 0 },
  animate: {
  y: 0,
  opacity: 1,
  transition: {
  delay:0.75,
    when: "beforeChildren",
    staggerChildren: 0.3,
    staggerDelay:0.2
  },
},
exit:{opacity:0}
};

const item = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
  },
  exit:{opacity:0, y:20}
};

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


const Home = () => (
  <AnimatePresence  exitBeforeEnter>
    <motion.h1
    variants={h1Variant}
    initial="initial"
    animate="animate"
    exit="exit"
     className="text-2xl md:text-4xl">
      I am a full-stack developer and designer in Victoria, British Columbia,
      Canada.
    </motion.h1>
    <p>
      I spend my time on software architecture, user experience, and product
      development. Currently working at{" "}
      <a
        href="https://redframe.com"
        target="_blank"
        rel="noopener noreferrer"
        title="link to Redframe.com"
      >
        Redframe
      </a>{" "}
    </p>

    <h2 className="py-10 text-center md:text-left">Projects</h2>

    <motion.div 
      variants={container}
      initial="initial"
      animate="animate"
      exit="exit"
       className="grid grid-cols-1 md:grid-cols-2 gap-2">
    <motion.div variants={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} key="project1"
      className="flex flex-col justify-between p-6 rounded-md h-64 max-w-md relative overflow-hidden m-4 shadow-md no-underline">
        <img
          src="https://source.unsplash.com/featured/500?space,background"
          alt="React News"
          className="absolute object-cover top-0 left-0 w-full h-full"
        />

        <h3 className="relative text-white text-lg font-black leading-tight">
          Extra Extra News Reader
        </h3>
        <p className="relative text-white text-sm leading-tight">
          Responsive news reader with index data from newsapi.org API.
        </p>

        <div className="card_bottom relative flex justify-end text-white">
          <a
            href="https://extraextra.netlify.com"
            target="_blank"
            rel="noopener noreferrer"
            title="link to ExtraExtra.netlify.com"
            className="flex items-center justify-center ml-2 border border-transparent rounded-full bg-indigo-100 focus:outline-none focus:shadow-outline focus:border-indigo-300"
          >
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs no-underline text-gray-700">
              visit
            </span>
          </a>
          <a
            href="https://github.com/truehello/react-news"
            target="_blank"
            rel="noopener noreferrer"
            title="link to GitHub Repo"
            className="flex items-center justify-center ml-2 border border-transparent rounded-full bg-indigo-100 focus:outline-none focus:shadow-outline focus:border-indigo-300"
          >
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs no-underline text-gray-700">
              github
            </span>
          </a>
        </div>
      </motion.div>

      <motion.div variants={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} key="project2"
      className="flex flex-col justify-between p-6 rounded-md h-64 max-w-md relative overflow-hidden m-4 shadow-md no-underline">
        <img
          src="https://source.unsplash.com/featured/502?space,background"
          alt="Unsplash App"
          className="absolute object-cover top-0 left-0 w-full h-full"
        />

        <h3 className="relative text-white text-lg font-black leading-tight">
          Image Search Engine
        </h3>
        <p className="relative text-white text-sm leading-tight">
          Image Search engine using unsplash images API
        </p>

        <div className="card_bottom relative flex justify-end text-white">
          <a
            href="https://react-image-search.netlify.com"
            target="_blank"
            rel="noopener noreferrer"
            title="link to react-image-search.netlify.com"
            className="flex items-center justify-center ml-2 border border-transparent rounded-full bg-indigo-100 focus:outline-none focus:shadow-outline focus:border-indigo-300"
          >
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs no-underline text-gray-700">
              visit
            </span>
          </a>
          <a
            href="https://github.com/truehello/react-image-search"
            target="_blank"
            rel="noopener noreferrer"
            title="link to GitHub Repo"
            className="flex items-center justify-center ml-2 border border-transparent rounded-full bg-indigo-100 focus:outline-none focus:shadow-outline focus:border-indigo-300"
          >
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs no-underline text-gray-700">
              github
            </span>
          </a>
        </div>
      </motion.div>
    </motion.div>

    <h2 className="py-10 text-center md:text-left">Get In Touch</h2>
      <ContactForm />
 </AnimatePresence>
)

export default Home
