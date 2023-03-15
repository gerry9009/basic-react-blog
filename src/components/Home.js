import { useState, useEffect } from "react";
import useFetch from "../assets/useFetch";
import BlogList from "./BlogList";
/*
{
      "title": "Zip",
      "body": "lorem ipsum...",
      "author": "Gergő",
      "id": 12
    }
*/
const Home = () => {
  const { data, isPending, error } = useFetch("http://localhost:8000/blogs");

  const handleDelete = (id) => {
    //fetch(`http://localhost:8000/blogs/${id}`, { method: "DELETE" });
  };

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data &&
        data.map((blog) => (
          <BlogList blog={blog} handleDelete={handleDelete} key={blog.id} />
        ))}
    </div>
  );
};

export default Home;
