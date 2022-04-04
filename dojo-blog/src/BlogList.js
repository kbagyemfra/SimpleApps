import { Link } from "react-router-dom";

// Second way to use props is destructuring
const BlogList = ({ blogs, header1 }) => {
  //   //   One way to use props
  //   const blogs = props.blogs;
  //   const titles = props.title;

  //   console.log(props, blogs);
  return (
    <div className="blog-list">
      <h1>{header1}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
