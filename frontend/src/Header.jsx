import React, { useEffect, useState } from "react";

const Header = () => {
  const [header, setHeader] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/header?populate=*`)
      .then((res) => res.json())
      .then((data) => setHeader(data.data))
      .catch((err) => console.error(err));
  }, []);

  if (!header) return null;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
  <div className="container d-flex justify-content-between align-items-center">

    {/* Logo */}
    {header.logo && (
      <a className="navbar-brand m-0" href="/">
        <img
          src={`${header.logo.url}`}
          alt="logo"
          width="305"
        />
      </a>
    )}

    {/* Toggle Button */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Menu */}
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        {header.menu?.map((item, index) => (
          <li className="nav-item fw-bold p-3" key={index}>
            <a className="nav-link" href={item.url}>
              {item.Label}
            </a>
          </li>
        ))}
      </ul>
    </div>

  </div>
</nav>
  );
};

export default Header;