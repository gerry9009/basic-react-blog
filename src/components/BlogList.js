import { Link } from "react-router-dom";

const BlogList = ({ blog, handleDelete }) => {
  return (
    <div className="blog-list">
      <div className="blog-preview">
        <Link to={`blogs/${blog.id}`}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </Link>
        <button onClick={() => handleDelete(blog.id)}>delete blog</button>
      </div>
    </div>
  );
};

export default BlogList;
