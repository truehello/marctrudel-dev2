import React from "react"
import { Router } from "@reach/router"
import { login, logout, isAuthenticated, getProfile } from "../utils/auth"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import ArticleListPrivate from "../components/articleListPrivate"

const Home = ({ user }) => {
  return (
   <>   
  <p>Hi, {user.name ? user.name : "friend"}!</p>
    <ArticleListPrivate />
  </>
  )
}

const Settings = () => <p>Coming Soon...</p>
const Secrets = () => <p>Shh, don't ask. Don't tell.</p>

const Account = () => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  const user = getProfile()

  return (
    <Layout>
      <img
        src="https://source.unsplash.com/featured/1260?space,background"
        alt="unsplash by "
        className="w-full h-64 mb-16 rounded-t-full"
      />
      <h1>Area 51</h1>
      <p>My not so secret Chamber of Secrets. And things that are just not ready for prime time</p>
      <nav className="w-full flex justify-evenly items-center">
        <Link to="/account">Private Articles</Link>{" "}
        <Link to="/account/settings">Settings</Link>{" "}
        <Link to="/account/secrets">Secrets</Link>{" "}
        <a
          href="#logout"
          className="btn btn-primary items-center"
          onClick={e => {
            logout()
            e.preventDefault()
          }}
        >
          Log Out
        </a>
      </nav>
      <Router>
      <Home path="/account/" user={user} />
        <Settings path="/account/settings" />
        <Secrets path="/account/secrets" />
      </Router>
      <img
        src="https://source.unsplash.com/featured/1260?space,background"
        alt="unsplash by "
        className="w-full h-64 mt-16 rounded-b-full"
      />
    </Layout>
  )
}

export default Account
