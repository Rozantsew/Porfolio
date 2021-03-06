import styled from "styled-components";
import { mediaQueries } from "../../assets/styles/mediaQueries";

export const ContactSectionWrapper = styled.div`
  background-color: #8bc9e5;
  padding: 100px 0px;
  background-image: linear-gradient(to right bottom, rgb(35, 150, 220), rgb(80, 207, 255), rgb(80, 207, 255), rgb(35, 150, 220));
`;

export const ContactHeader = styled.h1`
  font-weight: 300;
  margin-bottom: 70px;
  text-align: center;
  ${mediaQueries("md")`
    text-align: left;
  `};
`;

export const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mediaQueries("md")`
    width: 250px;
    align-items: flex-start;
    justify-content: flex-start;
    
  `};
`;

export const ContactImage = styled.img`
  width: 250px;
  height: auto;
  margin: 30px 0px 0px;
  ${mediaQueries("md")`
  // width: 100%;
  justifi-self: center;
    margin-bottom: 5px;
    margin: 30px auto 0px;
    `}
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  ${mediaQueries("md")`
    // width: 100%;
    flex-direction: row;
    justify-content: space-between;
    
    `};
`;

export const DetailsWrapper = styled.div`
  width: auto;
  align-self: flex-start;
  justify-self: flex-start;
  width: 100%;
  ${mediaQueries("md")`
  width: 70%;
     align-items: flex-start;
    justify-content: flex-start;
    align-self: center;
  `};
`;

export const DetailsParagraph = styled.div`
  line-height: 1.4em;
  margin: 20px auto;
  text-align: center;
  max-width: 400px;
  ${mediaQueries("md")`
    text-align: left;
    margin: 20px 0px;
  `};
`;
