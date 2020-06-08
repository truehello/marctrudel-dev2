import React from "react"

import { Heading, SEO } from "../components"
import { RenderMarkdown } from "../core"
import {
  safelyGetFrontMatter,
  withFallback,
  CMS_SCOPE,
  CMS_COMPONENTS,
} from "../cms"

import ContactForm from "../components/contactForm.component"
import ArticleList from "../components/articleList"

export const HomePageTemplate = ({ title, sections }) => (
  <article>
    <SEO title={title} />
    <Heading tag={1}>{title}</Heading>
    {withFallback(sections, []).map((section, i) => {
      return (
        <section key={i}>
          <h2>{section.title}</h2>
          <RenderMarkdown
            md={section.body}
            scope={CMS_SCOPE}
            components={CMS_COMPONENTS}
          />
        </section>
      )
    })}
  </article>
)

const HomePage = ({ pageContext }) => {
  return (
    <>
      <HomePageTemplate
        {...safelyGetFrontMatter(pageContext)}
        isPreview={false}
      />

      <h2 className="pt-20">Projects</h2>

      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col justify-between p-6 rounded-md h-64 max-w-md relative overflow-hidden m-4 shadow-md hover:shadow-xl no-underline bg-gray-500 transition-shadow duration-300">
          <img
            src="https://unsplash.it/1352?space"
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
        </div>

        <div className="flex flex-col justify-between p-6 rounded-md h-64 max-w-md relative overflow-hidden m-4 shadow-md hover:shadow-xl no-underline bg-gray-500 transition-shadow duration-300">
          <img
            src="https://unsplash.it/1350?space"
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
        </div>
      </div>
      
      <h2 className="pt-20">Articles</h2>
      <p>
        This is a collection or articles that are originally meant to be helpful
        for me to reference back to. If they are helpful to anyone else, all the
        better.{" "}
      </p>
      <ArticleList />

      <h2 className="pt-20">Get In Touch</h2>
      <ContactForm />
    </>
  )
}

export default HomePage
