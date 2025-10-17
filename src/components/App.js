
import React from "react";
import "./../styles/App.css";
import PageLayout from "./PageLayout.js";

const App = () => {
  let head = <h1>Welcome to my website</h1>;
  let foot = <footer>© 2023 My Website. All rights reserved</footer>;
  let child = <p>This is the content of my website</p>;

  return (
    <div>
      {/* Do not remove the main div */}
      <PageLayout header={head} footer={foot}>
        {child}
      </PageLayout>
    </div>
  );
};

export default App;
