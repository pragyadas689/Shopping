import React, { useState } from "react";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const onClickHandler = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  };
  return (
    <div>
      <div className="text-center">All Posts</div>
      <button onClick={onClickHandler} className="btn btn-primary">
        Get Data
      </button>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr key = {index}>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostList;
