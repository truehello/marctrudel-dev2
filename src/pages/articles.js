import React from "react"

//import AppLayout from "../app-layout.component"
import Layout from "../components/Layout"
import ArticleList from "../components/articleList"

const NotFoundPage = () => (
  //<AppLayout>
  <Layout>
    <h1>Articles</h1>
    <p>This is a collection or articles that are originally meant to be helpful for me to reference back to. If they are helpful to anyone else, all the better. </p>
    <ArticleList />
  </Layout>
  //</AppLayout>
)

export default NotFoundPage
