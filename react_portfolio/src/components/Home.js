/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Home = () => {
  return (
    <div className="container">
      <div className="hero-content">
        <h1>Hi, my name is Tanner Barcelos</h1>
        <span className="msg">
          <p>Student.</p><p>Creator.</p><p>Aspiring software engineer</p>
        </span>
        <ul className="socials">
          <li>
            <a href="https://github.com/TannerBarcelos" target="_blank"><i class="fab fa-github"></i></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/tanner-barcelos-695619a1/" target="_blank"><i class="fab fa-linkedin"></i></a>
          </li>
        </ul>
      </div>
    </div>
  ) 
}

export default Home;
