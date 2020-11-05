import React from 'react'
import ProjectItem from '../components/ProjectItem'
import { color1, color1LG, color2, bgColor2, bgColor1, BaseSection } from '../globalStyles'
import styled from 'styled-components'
import { projectList } from '../Data.js/projectList'


const Title = styled.h2`
    font-size: 4rem;
    font-family: 'Open Sans';
    font-weight: 800;
    text-shadow: 2px 3px 3px rgba(0, 0, 0, 0.25);
    line-height: 4rem;
    padding-top: 3%;
    color: ${color1};
    margin-top: 0;
`

const Section = styled(BaseSection)`
    background-color: ${bgColor2};
    min-height: 100vh;
    padding-bottom: 5rem;
`

export default function WorkScreen() {

    const renderProjects = () => {
        let index = 1
        return projectList.map(project => (
            <ProjectItem
                title={project.title}
                text={project.text}
                picture={project.picture}
                linkToRepo={project.linkToRepo}
                pictureSide={project.pictureSide}
                index={index++}
            />
        ))
    }

    return (
        <Section id='work'>
            <div style={{ margin: '0 auto', maxWidth: '1100px' }}>
                <Title>
                    <span >
                        my<br/>
                    </span>
                    Work<span style={{ color: bgColor1 }}>.</span>
                </Title>
                {renderProjects()}
            </div>
        </Section>
    )
}
