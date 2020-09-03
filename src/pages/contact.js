import React from "react"

import Layout from "../components/Layout"
import ContactForm from "../components/contactForm.component"

const NotFoundPage = () => (
  <Layout>
    <img
      src="https://source.unsplash.com/featured/1250?space,background"
      alt="unsplash by "
      className="w-full h-64 mb-16 rounded-t-full"
    />
    <h1>Get In Touch</h1>
    <ContactForm />
    <img
      src="https://source.unsplash.com/featured/1250?space,background"
      alt="unsplash by "
      className="w-full h-64 mt-16 rounded-b-full"
    />
  </Layout>
)

export default NotFoundPage
