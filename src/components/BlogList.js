import { Link } from "react-router-dom";

const BlogList = ({ blog }) => {
  return (
    <div className="blog-list">
      <div className="blog-preview">
        <Link to={`blogs/${blog.id}`}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </Link>
      </div>
    </div>
  );
};

export default BlogList;
