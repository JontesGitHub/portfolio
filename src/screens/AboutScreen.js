import React from "react";
import styled from "styled-components";
import { bgColor1, BaseSection, color2, color1 } from "../globalStyles";
import Fade from "react-reveal/Fade";
import { aboutMe } from "../data";

const Section = styled(BaseSection)`
  background-color: ${bgColor1};
  min-height: calc(85vh - 50px);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  /* @media (max-width: 700px) {
    min-height: calc(100vh - 50px);
  } */
`;
const GridContainer = styled.div`
  max-width: 80%;
  /* margin-top: 3%; */
  /* margin: 0 auto; */
  display: grid;
  grid-template-columns: 50% 1fr;
  grid-gap: 5.5rem;
  /* padding-top: 2%; */
  /* min-height: 55%; */
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

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;

    .text-box {
      padding: 0 3rem;
      text-align: center;
    }
  } 
  @media (max-width: 500px) {
    .text-box {
      padding: 0;
    }
  }
`;
const Title = styled.h2`
  font-size: 4rem;
  font-weight: 800;
  text-shadow: 2px 3px 3px rgba(0, 0, 0, 0.25);
  line-height: 4rem;
  color: #fff;

  .me {
    font-size: 1em;
    color: ${color2};
  }

  .dot {
    font-size: 1em;
    color: ${color1};
  }

  @media (max-width: 700px) {
    font-size: 3rem;
  }
`;

const Image = styled.img`
  width: 100%;

  /* @media (max-width: 1100px) {
    height: 80%;
    margin: auto 0;
  }
  @media (max-width: 700px) {
    margin: 0 auto;
  } */
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
          <div className='text-box'>
            <Title>
              About <br />
              <span className='me'>
                me
                <span className='dot'>.</span>
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
      {/* <Footer /> */}
    </Section>
  );
}
