import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const getText = (rt) => rt?.map(b => b.children.map(c => c.text).join("")).join(" ") ?? "";

const PostDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:1337/api/posts?filters[slug][$eq]=${slug}&populate=*`)
      .then(r => r.json())
      .then(d => { setPost(d.data?.[0] ?? null); setLoading(false); })
      .catch(() => setLoading(false));
  }, [slug]);

  if (!post) return <p className="text-center mt-5">Post not found.</p>;

  const { Title, Description, Image } = post;

  return (
    <>
      <Header />
      <main className="container py-5">
        <Link to="/" className="text-dark fw-bold text-decoration-none">← Back to all posts</Link>
        <h1 className="mb-3 mt-2">{Title}</h1>
        {Image?.url && <img src={`http://localhost:1337${Image.url}`} alt={Title} className="img-fluid mb-4" />}
        <article className="lh-lg fs-5">{getText(Description)}</article>
      </main>
      <Footer />
    </>
  );
};

export default PostDetail;
