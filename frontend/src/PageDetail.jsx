import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const PageDetail = () => {
  const { slug } = useParams();
  const [page, setPage] = useState(null);
  const [setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:1337/api/pages?filters[slug][$eq]=${slug}&populate=*`)
      .then(r => r.json())
      .then(d => { setPage(d.data?.[0] ?? null); setLoading(false); })
      .catch(() => setLoading(false));
  }, [slug]);

  if (!page) return <p className="text-center mt-5">Page not found.</p>;

  const { title, description, test } = page;   // ← update field names to match your Strapi fields

  return (
    <>
      <Header />
      <main className="container py-5">
        <h1 className="mb-4">{title}</h1>        
        <article className="lh-lg fs-5"><BlocksRenderer content={description} /></article>
        {test}
      </main>
      <Footer />
    </>
  );
};

export default PageDetail;
