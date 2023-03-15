import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "React", body: "lorem ipsum...", author: "Gergő", id: 1 },
    { title: "CSS", body: "lorem ipsum...", author: "Brigi", id: 2 },
    { title: "JavaScript", body: "lorem ipsum...", author: "Vince", id: 3 },
  ]);

  const handleDelete = (id) => {
    setBlogs((blogs) => blogs.filter((blog) => blog.id !== id));
  };

  return (
    <div className="home">
      <h2>All blogs</h2>
      {blogs.map((blog) => (
        <BlogList blog={blog} handleDelete={handleDelete} key={blog.id} />
      ))}
    </div>
  );
};

export default Home;
