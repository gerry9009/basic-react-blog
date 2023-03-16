import useFetch from "../assets/useFetch";
import BlogList from "./BlogList";

const Home = () => {
  const { data, isPending, error } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      <h2>All blogs!!!</h2>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && data.map((blog) => <BlogList blog={blog} key={blog.id} />)}
    </div>
  );
};

export default Home;
