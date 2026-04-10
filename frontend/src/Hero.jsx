import React, { useEffect, useState } from "react";
import './App.css'
import './hero.css'

const Hero = () => {
  const [hero, setHero] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/hero?populate=*`)
      .then((res) => res.json())
      .then((data) => setHero(data.data))
      .catch((err) => console.error(err));
  }, []);

  if (!hero) return null;

  const {
    Title,
    subtitle,
    button_text,
    button_link,
    background_image,
    side_image,
  } = hero;

  const imageUrl = background_image?.url;
  const sideImageUrl = side_image?.url;

  return (
    <div className="hero-section"
      style={{
        backgroundImage: imageUrl
          ? `url(${import.meta.env.VITE_BACKEND_URL}${imageUrl})`
          : "none",
        backgroundSize: "cover",
        padding: "100px 0",
      }}
    >
      <div className="container p-5 rounded-5">
        <div className="row align-items-center">
          <div className="content--left col-md-6 col-12">
            <h1>{Title}</h1>
            <p className="py-3">{subtitle}</p>
            <a className="btn btn-primary rounded-pill" href={button_link}>
              {button_text}
            </a>
          </div>
          <div className="side--image col-md-6 col-12">{sideImageUrl && <img src={`${import.meta.env.VITE_BACKEND_URL}${sideImageUrl}`} className="img-fluid" alt="Side Image" />}</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;