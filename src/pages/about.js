import React from "react"
import Link from "gatsby-link"
import Layout from "../components/Layout"
//import SEO from "../components/seo"

const About = () => (
  <Layout>
    {/* <SEO title="About | Marc Trudel Full Stack Developer Victoria BC" /> */}

    <img
      src="https://source.unsplash.com/featured/1260?space,mars"
      alt="unsplash by "
      className="w-full h-64 mb-16 rounded-t-full"
    />

    <h1>About</h1>
    <p>
      I am a Full Stack Developer currently working for photography SaaS
      Redframe.com. My role is varied and always interesting, there is no
      typical day. I could be working on anything from design systems for client
      themes, migrating legacy infrastucture to cloud based and serverless
      models, mocking user experience prototyping and testing, or creating
      animated interface demos with code or prototyping tools.
    </p>

    <p>
      In 2002 I jumped head first into the digital industry learning all I could
      about the world of user centred design and research from a variety of
      freelance and permanent positions. That lead me in the direction as a
      Flash Developer, which transitions into a Front End developer and finally
      towards becoming a Fullstack Developer in a Coldfusion and .Net
      environment. As time marched on Node.js entered the scene as well as
      serverless architectures.
    </p>

    <p>
      Outside of work I like to work on full stack web applications with a
      combination of React and backend services like AWS and Netlify. This
      allows me play around with new technology and gives me a better
      understanding of the digital industry as a whole. It's also incredibly
      fun!
    </p>

    <p>
      If I'm not desiging or coding something I'll hiking, gardening or spending
      time with my kids.
    </p>

    <p>
      If that sounds like someone you’d like to collaborate with then{" "}
      <Link to="/contact">get in touch.</Link>
    </p>

    <img
      src="https://source.unsplash.com/featured/1260?space,mars"
      alt="unsplash by "
      className="w-full h-64 mt-16 rounded-b-full"
    />
  </Layout>
)

export default About
