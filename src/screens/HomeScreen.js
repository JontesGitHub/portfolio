import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import { color1, bgColor1, Btn, color2, BaseSection } from "../globalStyles";
import Fade from "react-reveal/Fade";
import TextLoop from "react-text-loop";

const Section = styled(BaseSection)`
  background-color: ${bgColor1};
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 4.4rem;
  font-style: normal;
  font-weight: 600;
  margin: 0;
  line-height: 5.5rem;

  span {
    font-size: 1em;
    font-style: normal;
    font-weight: 600;
    margin: 0;
    line-height: 4.5rem;

    @media (max-width: 650px) {
      display: block;
    }

    b {
      color: ${color1};
      font-weight: 700;
      font-size: 1em;
    }
  }

  @media (max-width: 500px) {
    font-size: 4rem;
  }
`;

const TitleSpan = styled(Title)`
  line-height: 3.5rem;
  font-size: 3.4rem;
  color: ${color2};
`;

const Container = styled.div`
  height: 100%;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export default function HomeScreen() {
  return (
    <Section id="home">
      <Container>
        <Fade left duration={800} delay={400} distance="100px">
          <div>
            <TitleSpan>
              Hi, <br />
              I'm Johannes,
              <br />
            </TitleSpan>
            <TextLoop springConfig={{ swiftness: 50 }}>
              <Title>
                Problem
                <span>
                  -solver<b>.</b>
                </span>
              </Title>
              <Title>
                Backend
                <span>
                  {" "}
                  Developer<b>.</b>
                </span>
              </Title>
              <Title>
                Software
                <span>
                  {" "}
                  Engineer<b>.</b>
                </span>
              </Title>
            </TextLoop>
          </div>
          <p
            style={{
              fontSize: "0.9rem",
              color: color2,
              padding: "0.8rem 0 5rem 0.1rem",
              letterSpacing: "4px",
            }}
          >
            WITH A TOUCH OF FRONTEND.
          </p>
        </Fade>
        <Fade bottom delay={900} distance="90px">
          <Link
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            offset={-50}
            duration={700}
            delay={50}
          >
            <Btn color="#fff" big>
              Recent work
            </Btn>
          </Link>
        </Fade>
      </Container>
    </Section>
  );
}
