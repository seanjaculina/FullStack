/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Home = () => {
  return (
    <div className="section_container" id="home">
      <div className="hero-content">
        <div className="headline">
          <span>Hi, my name is Tanner Barcelos</span>
          <span>Developer. Researcher. Designer. Creator</span>
        </div>
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
              href="https://docs.google.com/document/d/1udfuKpQHWUVW4ei1VdNfrYsyeItoJrYnW5jYygvc5oA/edit?usp=sharing"
              target="_blank"
            >
              <i className="far fa-file"></i>
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@tanner.manuel.barcelos"
              target="_blank"
            >
              <i class="fab fa-medium"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
