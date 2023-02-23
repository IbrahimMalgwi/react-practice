import React from "react"
import './App.css';
import BlogCard from "./BlogCard";

function App() {
  const blogArr = [
    {
      id: 1,
      title: "Blog Title 1",
      description: "Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor"
    },
    {
      id: 2,
      title: "Blog Title 2",
      description: "Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor"
    },
    {
      id: 3,
      title: "Blog Title 3",
      description: "Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor"
    }
  ]

  const blogCards = blogArr.map((item, pos) => {
  
    return (
    <BlogCard key={pos} title={item.title} description={item.description} id={item.id}/>
      // <div className ="BlogCard" key={item.id}>
      //   <h3>{item.title}</h3>
      //   <p>{item.description}</p>
      // </div>
    )
    
  })
 
  // const styles = {
  //         margin: "16px",
  //         padding: "16px",
  //         boxSizing: "border-box",
  //         borderRadius: "5px",  
  //         boxShadow: "0 2px 5px #ccc"
  // }

  return (
    <div className="App">
      {
        blogCards
      }

      </div>
  );
}

export default App;
