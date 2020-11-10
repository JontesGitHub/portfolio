import React from "react";
import ProjectItem from "../components/ProjectItem";
import {
  color1,
  bgColor2,
  bgColor1,
  BaseSection,
} from "../globalStyles";
import styled from "styled-components";
import { projectList } from "../data";

const Title = styled.h2`
  font-size: ${props => props.size || '4rem'};
  font-weight: 800;
  text-shadow: 2px 3px 3px rgba(0, 0, 0, 0.25);
  color: ${props => props.color || color1};
  margin: 0;

  .my {
    font-size: 0.8em;
    display: block;
    font-weight: 800;
    text-shadow: 2px 3px 3px rgba(0, 0, 0, 0.25);
    color: ${props => props.color || color1};
    margin: 0;
  }

  @media (max-width: 600px) {
    margin: 0 auto;
  }

  @media (max-width: 700px) {
    font-size: 3rem;
    line-height: 3rem;
  }
`;

const Section = styled(BaseSection)`
  background-color: ${bgColor2};
  min-height: 100vh;
  padding-bottom: 5rem;
`;

const Container = styled.div`
  margin: 0 auto;
  padding-top: 2%;
  max-width: 1100px;

  @media (max-width: 1200px) {
    max-width: 960px;
    padding-right: 5%;
    padding-left: 5%;
  }
  @media (max-width: 960px) {
    padding-right: 5%;
    padding-left: 5%;
  }

  @media (max-width: 650px) {
    padding-right: 8%;
    padding-left: 8%;
  }

`;

export default function WorkScreen() {
  const renderProjects = () => {
    let index = 1;
    return projectList.map((project) => (
      <ProjectItem
        key={index}
        title={project.title}
        text={project.text}
        picture={project.picture}
        linkToRepo={project.linkToRepo}
        pictureSide={project.pictureSide}
        index={index++}
      />
    ));
  };

  return (
    <Section id="work">
      <Container>
        <Title>
          <span className='my'>
            my
          </span>
          Work
          <span style={{ color: bgColor1, fontSize: '4rem' }}>.</span>
        </Title>
        {renderProjects()}
      </Container>
    </Section>
  );
}
