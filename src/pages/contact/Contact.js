import React from "react";
import { StyledContainer } from "../../layouts/Layouts";
import {
  ContactSectionWrapper,
  ContactHeader,
  ContentWrapper,
  ImageWrapper,
  ContactImage,
  DetailsWrapper,
  DetailsParagraph,
} from "./Contact.style";
import { ContactAsideLogo } from "../../component/asideLogo/AsideLogo";
import Michael from "../../assets/images/Michael.png";
import Aside_Logo from "../../assets/images/Personal_Details.svg";
const Contact = () => {
  return (
    <ContactSectionWrapper>
      <StyledContainer>
        <ContactAsideLogo primary src={Aside_Logo}></ContactAsideLogo>
        <ContactHeader>Contact</ContactHeader>
        <ContentWrapper>
          <ImageWrapper>
            <ContactImage src={Michael}></ContactImage>
          </ImageWrapper>
          <DetailsWrapper>
            <DetailsParagraph>
              Michał Rozantsew <br></br>
              Junior Web Developer <br></br>
              rozancew@interia.pl
            </DetailsParagraph>
            <DetailsParagraph>
              Get in touch. Feel free to contact me I will answer you as soon as
              possible. <b>Together, we can create something awesome.</b>
            </DetailsParagraph>
          </DetailsWrapper>
        </ContentWrapper>
      </StyledContainer>
    </ContactSectionWrapper>
  );
};

export default Contact;
