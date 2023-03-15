const BlogList = ({ blog, handleDelete }) => {
  return (
    <div className="blog-list">
      <div className="blog-preview">
        <h2>{blog.title}</h2>
        <p>Written by {blog.author}</p>
        <button onClick={() => handleDelete(blog.id)}>delete blog</button>
      </div>
    </div>
  );
};

export default BlogList;
