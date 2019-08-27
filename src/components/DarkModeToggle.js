import React from "react"
import sun from "../images/sun.svg"
import moon from "../images/moon.svg"

import useDarkMode from "./utils/use-dark-mode"

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useDarkMode()

  if (darkMode) {
    return (
      <div className="dark-mode-toggle lg:ml-6">
        <button type="button" onClick={() => setDarkMode(false)}>
          <img className="sun" src={sun} alt="click for light mode" />
        </button>
      </div>
    )
  } else {
    return (
      <div className="dark-mode-toggle lg:ml-4">
        <button type="button" onClick={() => setDarkMode(true)}>
          <img className="moon" src={moon} alt="dark mode button" />
        </button>
      </div>
    )
  }
}

export default DarkModeToggle
