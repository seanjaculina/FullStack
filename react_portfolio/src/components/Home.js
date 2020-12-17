/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Home = () => {
  return (
    <div className="section_container" id="home">
      <div className="hero-content">
        <h1>Hi, my name is Tanner Barcelos</h1>
        <ul className="socials">
          <li>
            <a href="https://github.com/TannerBarcelos" target="_blank">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/tanner-barcelos-695619a1/"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1n_hYReJUPRcfap2mgh3krZoDPLAJSQYF/view"
              target="_blank"
            >
              <i className="far fa-file"></i>
            </a>
          </li>
        </ul>
      </div>
      <i className="fas fa-arrow-down arrow"></i>
    </div>
  );
};

export default Home;
