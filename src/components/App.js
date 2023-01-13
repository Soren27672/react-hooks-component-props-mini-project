import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import ArticleList from "./ArticleList"
import About from "./About"

const { name, image, about, posts } = blogData;

function App() {
  return (
    <div className="App">
      <Header name={name}/>
      <About image={image} about={about}></About>
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;
