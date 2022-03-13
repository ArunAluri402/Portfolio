import React from "react";
import styled from "styled-components";

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <h3>A.</h3>
        <a herf="#">About</a>
        <a herf="#">Services</a>
        <a herf="#">Projects</a>
        <button type="button">Hire Me</button>
      </Wrapper>
    </Container>
  );
};

export default NavBar;

const Container = styled.div`
  width: 100%;
  height: 7rem;
  box-sizing: border-box;
  background-image: linear-gradient(360deg, white, lightblue);
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 40px;
  margin: 0 auto;
  width: 85%;
  max-width: 1215px;
  overflow: visible;
  postion: static;
  font-size: 14px;
  height: 20px;
  color: #333;

  h3 {
    border: 2px solid black;
    padding: 10px;
    align-items: center;
    justify-content: center;
    margin-right: 30rem;
  }

  a {
    color: #000;
    padding: 0 10px 10px 10px;
    margin-right: 20px;
    object-fit: fill;
    cursor: pointer;

    &:hover {
      color: slateBlue;
      transform: scale(1.1);
      transition: all 450ms ease;
    }
  }

  button {
    padding: 10px;
    font-weight: 700;
    font-size: 16px;
    color: #fff;
    border: none;
    border-radius: 4px;
    background-color: black;
    cursor: pointer;

    &:hover {
      background-color: slateBlue;
      transform: scale(1.1);
      transition: all 450ms ease;
    }
  }
`;
