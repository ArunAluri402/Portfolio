import React from "react";
import styled from "styled-components";

const AboutMe = () => {
  return (
    <Section>
      <ContentWrapper>
        <GridContainer>
          <ImgContainer>
            <img src="./images/Image_three.jpg" />
            <div className="gradient_bottom"></div>
          </ImgContainer>
          <ContentContainer>
            <h6>About Me</h6>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

            <ul>
              <li>Software Developer</li>
              <li>Graphic Designer</li>
            </ul>
          </ContentContainer>
        </GridContainer>
      </ContentWrapper>
    </Section>
  );
};

export default AboutMe;

const Section = styled.div`
  width: auto;
  height: auto;
  box-sizing: border-box;
`;
const ContentWrapper = styled.div`
  width: 85%;
  height: auto;
  margin: 25px auto;
  align-items: center;
  justify-content: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-column-gap: 62px;
  grid-row-gap: 16px;
  grid-template-columns: 0.8fr 1fr;
  grid-template-rows: auto;
  align-items: center;
  align-content: stretch;
  justify-items: stretch;
  justify-content: stretch;
  grid-auto-columns: 1fr;
`;

const ImgContainer = styled.div`
  position: relative;
  display: block;

  img {
    border: 10px solid white;
    max-width: 75%;
    border-radius: 60px;
    box-shadow: 0 44px 84px 0 rgb(106 90 205 / 45%);
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(5deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    opacity: 1;
  }

  .gradient_bottom {
    opacity: 1;
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(-5deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    position: absolute;
    left: auto;
    top: 0px;
    right: 25%;
    bottom: 0px;
    z-index: -2;
    width: 75%;
    height: 100%;
    border-radius: 60px;
    background-image: linear-gradient(90deg, lightblue, lightcoral);
  }
`;

const ContentContainer = styled.div`
  
  h6 {
    font-size: 28px;
  }

  p {
    padding-left: 0;
    font-size: 24px;
    line-height: 38px;
    margin-bottom: 0px;
    margin-top: 15px;
    font-weight: 400;
  }

  ul {
    margin-top: 32px;
    padding-left: 0px;
    margin-bottom: 10px;
    list-style-type: disc;
    list-style-image:linear-gradient(90deg, lightblue, lightcoral); ;
  }

  ul li {
    font-size: 24px;
    color: #333;
    line-height: 30px;
    font-weight: 700;
  }
`;
