import React, { useEffect } from "react";
import styled from "styled-components";
import { bgColor1, Btn, color1, color2 } from "../globalStyles";
import Fade from "react-reveal/Fade";

const Div = styled.div`
  /* text-align: ${(props) => props.pictureSide}; */
  width: 100%;
  margin-top: 4rem;
  padding-bottom: 2.5rem;
  overflow: hidden;
  .image {
    grid-area: image;
  }
  .textBox {
    grid-area: textBox;
  }
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 2500px));
  /* grid-template-columns: 1fr 1fr; */
  grid-template-areas: 'image textBox';
  grid-column-gap: 5rem;

  @media (max-width: 768px) {
    column-gap: 2rem;
    padding-bottom: 0;
  }

  @media (max-width: 650px) {
    grid-template-areas:
      "image"
      "textBox";
    row-gap: 2rem;
    column-gap: 0;
    height: auto;
    width: auto;
    padding-left: 10%;
    padding-right: 10%;
    text-align: center;
  }
`;

const Image = styled.img`
  max-height: 400px;
  width: 100%;
  border-radius: 5px;
  @media (max-width: 768px) {
    max-width: 80%;
    margin: 0 auto;
  }
  @media (max-width: 500px) {
    max-width: 100%;
  }
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

  return (
    <Div pictureSide={pictureSide}>
      {/* {pictureSide === "left" || screenWidth < 768 ? <Image pictureSide src={picture} /> : null} */}
      <Image src={picture} className="image" />

      <Fade
        // left={pictureSide !== "left"}
        // right={pictureSide !== "right"}
        bottom
        delay={600}
        distance="30px"
        className="textBox"
      >
        <div>
          <Title>
            {title}
            <span style={{ color: color1, fontSize: "1em" }}>.</span>
          </Title>
          <p style={{ lineHeight: "1.5rem" }}>{text}</p> <br />
          <Btn href={linkToRepo} target="_blank" rel="noreferrer">
            See on GitHub
          </Btn>
        </div>
      </Fade>

      {/* {pictureSide === "right" && screenWidth > 768 ? <Image src={picture} /> : null} */}
    </Div>
  );
}
