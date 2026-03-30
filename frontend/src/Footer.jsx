import React, { useEffect, useState } from "react";
import './footer.css'

const Footer = () => {
  const [footer, setFooter] = useState(null);

  useEffect(() => {
    fetch("http://localhost:1337/api/footer?populate=*")
      .then((res) => res.json())
      .then((data) => setFooter(data.data))
      .catch((err) => console.error(err));
  }, []);

  if (!footer) return null;

  const { copyright, button_text, button_link } = footer;

  return (
    <footer className="container-fluid py-4">
      <div className="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <p>{copyright}</p>
          </div>
          <div class="col-12 col-md-6 text-md-end">
            <a href={button_link}>{button_text}</a>
          </div>
        </div>
      </div>
    </footer>   
  );
};

export default Footer;