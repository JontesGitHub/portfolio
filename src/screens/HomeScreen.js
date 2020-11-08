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
  padding-bottom: 1%;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 4.4rem;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: normal;
  margin: 0;
  line-height: 5.5rem;

  span {
    font-size: 4.4rem;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: normal;
    margin: 0;
    line-height: 4.5rem;

    @media (max-width: 650px) {
      display: block;
    }
  }
`;

const TitleSpan = styled(Title)`
  line-height: 3.5rem;
  font-size: 3.4rem;
  color: ${color2};
`;

const Container = styled.div`
  margin: 0 auto;
  padding-top: 15%;
  max-width: 1200px;

  @media (max-width: 1400px) {
    max-width: 1100px;
    margin: 0 11%;
    padding-top: 16%;
  }

  @media (max-width: 960px) {
    padding-top: 20%;
  }

  @media (max-width: 500px) {
    padding-top: 40%;
  }
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
                Backend
                <span> Developer<b
                  style={{
                    color: color1,
                    fontWeight: "700",
                    fontSize: "4.4rem",
                  }}
                >
                  .
                </b></span>

              </Title>
              <Title>
                Software
                <span> Engineer<b
                  style={{
                    color: color1,
                    fontWeight: "700",
                    fontSize: "4.4rem"
                  }}
                >
                  .
                </b></span>
              </Title>
            </TextLoop>

            {/* <b style={{ color: color1, fontWeight: "700", fontSize: "4.4rem", display: 'inline-block' }}>
              .
            </b> */}
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
