import React, { useEffect, useState } from "react";

const Cta = () => {
  const [cta, setCta] = useState(null);

  useEffect(() => {
    fetch("http://localhost:1337/api/cta?populate=*")
      .then((res) => res.json())
      .then((data) => setCta(data.data))
      .catch((err) => console.error(err));
  }, []);

  if (!cta) return null;

  const {
    Title,
    button_text,
    button_link,  
  } = cta;

  return (
    <div className="container text-center py-5">   
      <h2 className="mb-3">{Title}</h2>            
      <a className="btn btn-primary rounded-pill" href={button_link}>
        {button_text}
      </a>      
    </div>  
  );
};

export default Cta;