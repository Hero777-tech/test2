import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./styles/Button";
import { useGlobalContext } from "./context";
import Teams from "./Teams";

const HeroSection = () => {
  const { name, image } = useGlobalContext();

  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">Pure Intent, Unaltered Will, Discovering Digital.</p>
          <h1 className="hero-heading">DIGITAL MARK</h1>
          <p className="hero-para">
          Driving the constant digital innovation in India, we are the 
          trailblazers of experiments that translate into case studies for not 
          just our followers but also our competitors.
          </p>
          <Button className="btn hireme-btn">
            <NavLink to="/test2/contact"> CONTACT US </NavLink>
          </Button>
        </div>

        {/* for image  */}
        <div className="section-hero-image">
          <picture>
            <img src="https://raw.githubusercontent.com/Hero777-tech/dep-tst/a71d069b96085ff7b429f8a6a01f31cac0150776/public/images/about_section.svg" alt="hero image" className="hero-img " />
          </picture>
        </div>
      </div>
      {/* solve issue from here for reloading and n 404 error 404.html and logic file in index.html been created using https://github.com/ErickKS/vite-react-router/blob/main/index.html */}
    </Wrapper>
    
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 16.5rem;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default HeroSection;
