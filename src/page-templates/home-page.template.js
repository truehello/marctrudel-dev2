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
      <div class="flex mb-4 -mx-4">
        <div className="card w-full w-1/2:lg max-w-sm rounded overflow-hidden shadow-lg px-4 mx-4">
          {/* <img className="w-full" src="images/gatsby-astronaut.png" alt="Sunset in the mountains" /> */}
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              Extra Extra News Reader
            </div>
            <p>
              Responsive news reader with index data from newsapi.org API.
            </p>
          </div>
          <div className="px-6 py-4">
            <a
              href="https://extraextra.netlify.com"
              target="_blank"
              rel="noopener noreferrer"
              title="link to ExtraExtra.netlify.com"
            >
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                visit
              </span>
            </a>
            <a
              href="https://github.com/truehello/react-news"
              target="_blank"
              rel="noopener noreferrer"
              title="link to GitHub Repo"
            >
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                github
              </span>
            </a>
          </div>
        </div>

        <div className="card w-full w-1/2:lg max-w-sm rounded overflow-hidden shadow-lg px-4 mx-4">
          {/* <img className="w-full" src="images/gatsby-astronaut.png" alt="Sunset in the mountains" /> */}
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Image Search Engine</div>
            <p>
              Image Search engine using unsplash images API
            </p>
          </div>
          <div className="px-6 py-4">
            <a
              href="https://react-image-search.netlify.com"
              target="_blank"
              rel="noopener noreferrer"
              title="link to react-image-search.netlify.com"
            >
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                visit
              </span>
            </a>
            <a
              href="https://github.com/truehello/react-news"
              target="_blank"
              rel="noopener noreferrer"
              title="link to GitHub Repo"
            >
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
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
