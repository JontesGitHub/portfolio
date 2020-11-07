import React from "react";
import styled from "styled-components";
import { bgColor1, BaseSection } from "../globalStyles";
import Fade from "react-reveal/Fade";
import Footer from "../components/Footer";
import { aboutMe } from "../data";

const Section = styled(BaseSection)`
  background-color: ${bgColor1};
  height: calc(100vh - 50px);
  position: relative;
`;
const GridContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5.5rem;
  padding-top: 2%;
  min-height: 55%;

  overflow: hidden;

  @media (max-width: 1500px) {
    max-width: 1200px;
    padding-left: 5%;
    padding-right: 5%;
    grid-template-columns: 55% 45%;
    grid-gap: 2rem;
  }

  @media (max-width: 960px) {
    grid-gap: 0;
  }
`;
const Title = styled.h2`
  font-size: 4rem;
  font-family: "Open Sans";
  font-weight: 800;
  text-shadow: 2px 3px 3px rgba(0, 0, 0, 0.25);
  line-height: 4rem;
  color: #fff;
`;

const Image = styled.img`
  height: 100%;
  border-radius: 5px;

  @media (max-width: 1100px) {
    height: 80%;
    margin: auto 0;
  }
`;

const Text = styled.p`
  color: #fff;
  line-height: 1.4rem;
  margin-bottom: 1rem;
  font-weight: ${props => props.big ? '700' : 'normal'};
  font-size: ${props => props.big ? '1.3rem' : '1rem'};
`;

export default function AboutScreen() {
  return (
    <Section id="about">
      <GridContainer>
        <Fade left delay={400} distance="90px">
          <div style={{ paddingTop: "15%" }}>
            <Title>
              About <br />
              <span style={{ fontSize: "4rem", color: "#999" }}>
                me
                <span style={{ fontSize: "4rem", color: "#FF4B5C" }}>.</span>
                <br />
              </span>
            </Title>
            <Text big>
              {aboutMe.textSpan}
            </Text>
            <Text>{aboutMe.text}</Text>
          </div>
        </Fade>
        <Image src={aboutMe.image} />
      </GridContainer>
      <Footer />
    </Section>
  );
}
