import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <Section>
      <HeroContent>
        <span>Hey there!</span>
        <span>Welcome to my website</span>
        <h1>I am Arun Prakash</h1>
        <p>
          Hi! I'm Arun, a software developer from India. I create dynamic
          webpages using React Js.
        </p>

        <ButtonWrapper>
          <button type="button" className="top">
            Hire Me
          </button>
          <button type="button" className="bottom" />
          <div className="cv">Download CV</div>
        </ButtonWrapper>
      </HeroContent>
      <Image src="./images/character.png" />
    </Section>
  );
};

export default Hero;
const Section = styled.main`
  display: flex;
  justify-content-space-between;
  align-items: center;
  width: 85%;
  height: auto;
  padding-top: 70px;
  padding-bottom: 20px;
  margin: 0 auto;
  max-width: 1215px;
  overflow : visible;
`;
const HeroContent = styled.div`
  
  margin-top: -50px;
  height: auto;
  padding: 100px 0px;
  overflow: visible;

  span {
    display: block;
    font-size: 24px;
    font-weight: 700px;
    margin: 10px 1px;
  }

  h1 {
    padding-right: 5px;
  }

  p {
    font-size: 18px;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  max-width: 372px;
  object-fit: fill;
  width: auto;
  height: auto;
  margin-top: 25px;

  button.top {
    z-index: 199;
    padding: 10px 25px;
    border: none;
    color: white;
    background-color: black;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    height: 100%;
    &:hover {
      transform: translate(6px, 5px);
      transition: all 450ms ease;
    }
  }

  button.bottom {
    padding: 20px 53px;
    border: none;
    margin-left: -102px;
    font-size: 16px;
    height: 100%;
    transform: translate(2px, 5px);
    background-image: linear-gradient(
      108deg,
      mediumPurple,
      lightCoral,
      coral,
      sandyBrown
    );
    background-clip: text;
    -webkit-text-fill-color: transparent;
    cursor: pointer;
    margin-right: 25px;
  }
  .cv {
    font-size: 18px;
    height: 100%;
    color: black;
    letter-spacing: 0.6px;
    font-weight: 700;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
      color: SlateBlue;
      transition: all 450ms ease;
    }
  }
`;
const Image = styled.img`
  display: inline-block;
  width: 35%;
  height: 100%;
  max-width: 100%;
  object-fit: contain;
  border-radius: 50%;
`;
