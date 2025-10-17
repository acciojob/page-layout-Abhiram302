
import React from "react";
import './../styles/App.css';
import PageLayout from "./PageLayout.js"

const App = () => {
  let head = "Welcome to my website"
  let foot = "© 2023 My Website. All rights reserved"
  let child = "This is the content of my website"
  return (
    <div>
        {/* Do not remove the main div */}
      <PageLayout header = {head} footer = {foot} children = {child}/>
    </div>
  )
}

export default App
