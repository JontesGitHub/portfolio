import React, { useEffect } from "react";
import styled from "styled-components";
import { bgColor1, Btn, color1, color2 } from "../globalStyles";
import Fade from "react-reveal/Fade";

const Div = styled.div`
  text-align: ${(props) => props.pictureSide};
  width: 100%;
  margin-top: 4rem;
  padding-bottom: 2.5rem;
  height: 380px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 5.8rem;

  overflow: hidden;

  @media (max-width: 1200px) {
    padding-bottom: 0;
    height: 350px;
  }

  @media (max-width: 960px) {
    height: 300px;
    grid-column-gap: 4rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    row-gap: 2rem;
    height: auto;
    padding-left: 5%;
    padding-right: 5%;
  }

`;

const Image = styled.img`
  width: 100%;
  border-radius: 5px;
`;

const Title = styled.h2`
  font-size: 1.9rem;
  font-weight: 700;
  margin: 2rem 0 1rem 0;
  text-shadow: 2px 3px 3px rgba(0, 0, 0, 0.25);
  color: ${bgColor1};

  @media (max-width: 900px) {
    margin-top: 0;
  }
`;

export default function ProjectItem({
  title,
  picture,
  text,
  linkToRepo,
  index,
}) {
  const pictureSide = index % 2 === 0 ? "right" : "left";
  let screenWidth = 1200

  useEffect(() => {
    screenWidth = window.innerWidth
  }, [window.innerWidth])
  

  return (
    <Div pictureSide={pictureSide}>
      {pictureSide === "left" || screenWidth < 768 ? <Image pictureSide src={picture} /> : null}

      <Fade
        left={pictureSide !== "left"}
        right={pictureSide !== "right"}
        delay={600}
        distance="90px"
      >
        <div>
          <Title>
            {title}
            <span style={{ color: color1, fontSize: '1em' }}>.</span>
          </Title>

          <p style={{ lineHeight: "1.5rem" }}>{text}</p> <br/>
            <Btn href={linkToRepo} target="_blank" rel="noreferrer">
              See on GitHub
            </Btn>
        </div>
      </Fade>

      {pictureSide === "right" && screenWidth > 768 ? <Image src={picture} /> : null}
    </Div>
  );
}
