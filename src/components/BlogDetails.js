import { useParams } from "react-router-dom";
import useFetch from "../assets/useFetch";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, error, isPending } = useFetch(
    `http://localhost:8000/blogs/${id}`
  );

  const handleOnClick = () => {
    console.log("delete");
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && (
        <article>
          <h2>{data.title}</h2>
          <p>Written by {data.author}</p>
          <div>{data.body}</div>
        </article>
      )}
      <button onClick={handleOnClick}>Delete blog</button>
    </div>
  );
};

export default BlogDetails;
