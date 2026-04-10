import React, { useEffect, useState } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const About = () => {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/about?populate=*`)
      .then((res) => res.json())
      .then((data) => setAbout(data.data))
      .catch((err) => console.error(err));
  }, []);

  if (!about) return null;

  const {
    Title,
    Description,
    button_text,
    button_link,
    Image,    
  } = about;

  const imageUrl = Image?.url;  

  return (
      <div id="about" className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 col-12">
            <h1>{Title}</h1>
            <BlocksRenderer content={Description} />
            <a className="btn btn-primary rounded-pill" href={button_link}>
              {button_text}
            </a>
          </div>
          <div className="col-md-6 col-12">{imageUrl && <img src={`${import.meta.env.VITE_BACKEND_URL}${imageUrl}`} className="img-fluid rounded-4" alt="About Image" />}</div>
        </div>
      </div>
    
  );
};

export default About;