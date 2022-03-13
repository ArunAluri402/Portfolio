import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <FooterTop>
        <FooterNav>
          <div>Home</div>
          <div>Services</div>
          <div>Projects</div>
        </FooterNav>
        <FooterContact>
          <h3>Let's Work Together</h3>
          <p>
            Have a project in mind? Don't hesitate to contact me and get free
            consultation
          </p>
          <div className="footer_contact">
            <img src="./images/mail_icon.png" />
            <div className="mailid">arun.prakash421@gmail.com</div>
          </div>
          <div className="footer_contact">
            <img src="./images/phone_icon.png" />
            <div className="mailid"> +91 9441464180</div>
          </div>
        </FooterContact>
        <FooterSocial>
          <div className="footer_links">
            <a href="#">Twitter</a>
          </div>
          <div className="footer_links">
            <a href="#">Facebook</a>
          </div>
          <div className="footer_links">
            <a href="#">Instagram</a>
          </div>
          <div className="footer_links">
            <a href="#">Behance</a>
          </div>
        </FooterSocial>
      </FooterTop>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  display: bock;
  width: auto;
  height: auto;
  object-fit: fill;
  overflow: visible;
  color: white;
  box-sizing: border-box;
  background-image: linear-gradient(180deg, white, lightblue);
  background-clip: none;
`;
const FooterTop = styled.div`
  display: grid;
  align-items: stretch;
  justify-items: stretch;
  align-content: stretch;
  justify-content: stretch;
  width: auto;
  height: auto;
  padding: 3vw;
  grid-auto-columns: 1fr;
  grid-column-gap: 8vw;
  grid-row-gap: 16px;
  -ms-grid-columns: 1fr auto auto;
  grid-template-columns: 1fr auto auto;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
`;
const FooterNav = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  align-self: start;

  div {
    font-size: 17px;
    line-height: 24px;
    font-weight: 500;
    position: relative;
    overflow: hidden;
    margin-top: 8px;
    margin-right: 36px;
    margin-bottom: 8px;
    padding-top: 3px;
    padding-bottom: 3px;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
      transition: all 450ms ease;
    }
  }
`;

const FooterContact = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;

  h3 {
    margin-top: 0px;
    margin-bottom: 12px;
    font-size: 24px;
    line-height: 32px;
    font-weight: 700;
  }

  p {
    margin-bottom: 12px;
    font-size: 15px;
    line-height: 24px;
  }

  .footer_contact {
    display: flex;
    padding-top: 6px;
    padding-bottom: 6px;
    align-items: center;
    font-size: 13px;
    line-height: 20px;
    font-weight: 500;

    img {
      display: inline-block;
      max-width: 100%;
      width: 42px;
      margin-right: 12px;
      vertical-align: middle;
    }

    .mailid {
      font-size: 14px;
      line-height: 20px;
      font-weight: 500;
      letter-spacing: 1.2px;
    }
  }
`;
const FooterSocial = styled.div`
  display: flex;
  padding-right: 6vw;
  flex-direction: column;

  .footer_links {
    position: relative;
    overflow: hidden;
    margin-top: 6px;
    margin-bottom: 6px;
    padding-top: 6px;
    padding-bottom: 6px;
    flex-direction : column;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-box-align: start;
    align-items: flex-start;
    cursor: pointer;


    &:hover {
        transform: scale(1.1);
        transition: all 450ms ease;
      }
}
    a {
         color: #000;
    }
  }
`;
