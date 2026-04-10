import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const getText = (rt) => rt?.map(b => b.children.map(c => c.text).join("")).join(" ") ?? "";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/posts?populate=*`)
      .then(r => r.json())
      .then(d => setPosts(d.data))
      .catch(console.error);
  }, []);

  return (
    <div className="container py-5">
      <h1>Explore Our Latest Insights</h1>
      <p>Stay updated with expert articles, industry trends, and practical knowledge curated for you.</p>
      <div className="row mt-4">
        {posts.map(({ id, Title, Description, Image, slug }) => (
          <div className="col-md-4 mb-4" key={id}>
            <div className="card h-100 shadow-sm">
              {Image?.url && (
                <img src={`${import.meta.env.VITE_BACKEND_URL}${Image.url}`} className="card-img-top img-fluid" alt={Title} style={{ height: "300px", objectFit: "contain" }} />
              )}
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{Title}</h5>
                <p className="card-text flex-grow-1">{getText(Description).slice(0, 150)}...</p>
                <Link to={`/posts/${slug}`} className="align-self-end fw-bold text-decoration-none">Read More →</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
