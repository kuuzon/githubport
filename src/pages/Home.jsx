// Import React modules
import React from 'react';
import Hero from '../components/common/Hero';
import Container from 'react-bootstrap/Container';
import { BsPersonCircle } from "react-icons/bs";
import githubLogo from '../assets/github.svg'

const Home = () => {
  const values = {
    title: "Welcome to GithubPort",
    content: "My name is Alex ~ I teach how to build things, break things and mend things!",
    path: "/about"
  }

  return (
    <Container>
      {/* TEMPLATE */}
      <Hero values={values}>
        <BsPersonCircle />        
      </Hero>

      {/* HOSTING OPTION */}
      <div className="text-center">
        <a href="https://pages.github.com/" target="_blank">
          <img src={githubLogo} className="logo" alt="GitHub pages logo" />
        </a>
      </div>
    </Container>
  )
}

export default Home