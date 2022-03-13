import React from "react";
import styled from "styled-components";

const Services = () => {
  return (
    <SectionWrapper>
      <Wrapper>
        <ServicesWrapper>
          <div className="headingWrapper">
            <h6>SERVICES</h6>
          </div>

          <h2>Design that solve problems, One product at a time.</h2>
        </ServicesWrapper>

        <ServiveDetailGrid>
          <div className="serviceWrapper">
            <img src="./images/send.png" />
            <h5>What I can do for you</h5>
            <p>
              Fast, better websites that your users love. Here's all the
              services i provide:
            </p>
            <ul>
              <li>Web Design</li>
              <li>Front-end Development</li>
            </ul>
          </div>

          <div className="serviceWrapper">
            <img src="./images/categories.png" />
            <h5>Applications I'm fluent in</h5>
            <p>
              Every designer needs the right tools to do the perfect job.
              Thankfully, I'm multilingual.
            </p>
            <ul>
              <li>Web Flow</li>
              <li>VS Code</li>
              <li>Photoshop</li>
              <li>Illustrator</li>
            </ul>
          </div>

          <div className="serviceWrapper">
            <img src="./images/layers.png" />
            <h5>Languages I Know</h5>
            <p>
              Better knowledge is necessary to make the work flow to be smooth,
              here are the coding languages I know
            </p>
            <ul>
              <li>HTML 5</li>
              <li>CSS 3</li>
              <li>JavaScript</li>
              <li>React Js</li>
            </ul>
          </div>

          <div className="serviceWrapper">
            <img src="./images/flag.png" />
            <h5>What you can expect</h5>
            <p>
              I design websites that are more functional and pretty. I make them
              shippable and usable.
            </p>
            <ul>
              <li>Clean Ui</li>
              <li>Functional</li>
              <li>Dynamic</li>
              <li>Refined source code</li>
            </ul>
          </div>
        </ServiveDetailGrid>
      </Wrapper>
    </SectionWrapper>
  );
};

export default Services;
const SectionWrapper = styled.div`
  height: auto;
  width: auto;
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding-top: 80px;
  padding-bottom: 200px;
  width: 85%;
  height: auto;
  max-width: 1098px;
  box-sizing: border-box;

  @media screen and (max-width: 767px) {
    width: 90%;
  }
`;

const ServicesWrapper = styled.div`
  .headingWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;
  }
  .headingWrapper h6 {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 28px;
    height: 100%;
    letter-spacing: 4px;
  }

  h2 {
    margin: 0px;
    padding: 0px;
    margin-bottom: 25px;
    width: auto;
    height: auto;
    font-size: 52px;
    font-weight: 700;
    color: black;
    letter-spacing: 1px;
  }
`;
const ServiveDetailGrid = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  width: 100%;
  grid-row-gap: 16px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  box-sizing: border-box;
  grid-column-gap: 90px;

  .serviceWrapper {
    position: auto;
    display: block;

    img {
      width: 40%;
      height: 50%;
      max-width: 100%;
      object-fit: contain;
    }

    p {
      font-size: 16px;
    }
    ul {
      margin-top: 25px;
    }
    ul li {
      font-weight: 700;
      font-size: 16px;
      color: black;
      height: 28px;
    }
  }

  @media screen and (max-width: 479px) {
    display: block;
    width: 100%;
    box-sizing: border-box;


   .serviceWrapper {
     
    img{
     display: inline-block;
     vertical-align: middle;
     border: 0;
   }

   h5{
    font-size: 19px;
    margin-top: 0px;
    margin-bottom: 0px;
    color: #000;
  }
   }
  }


  }
  @media screen and (max-width: 991px) {
    width: 70%;
  }
`;
