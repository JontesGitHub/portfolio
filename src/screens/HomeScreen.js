import React from 'react'
import { Link } from 'react-scroll'
import styled from 'styled-components'
import { color1, color1LG, bgColor1, Btn, bgColor2, color2, BaseSection } from '../globalStyles'
import Fade from 'react-reveal/Fade'
import TextLoop from "react-text-loop"

const Section = styled(BaseSection)`
    background-color: ${bgColor1};
    height: 100vh;
`

const Title = styled.h1`
    color: #fff;
    font-size: 4.4rem;
    line-height: 5rem;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: normal;
    margin-bottom: 0;
`

const TitleSpan = styled(Title)`
    line-height: 3.5rem;
    font-size: 3.4rem;
    color: ${color2};
`

const Container = styled.div`
        max-width: 1200px;
        margin: 0 auto;
        padding-top: 12%;
`

export default function HomeScreen() {
    return (
        <Section id='home'>
            <Container>
                <Fade 
                    left
                    duration={800}
                    delay={400}
                    distance='300px'
                >
                    <Title>
                        <TitleSpan>
                            Hi, <br/>
                            I'm Johannes,<br/>
                        </TitleSpan>
                        <TextLoop springConfig={{ swiftness: 60 }}>
                            <span>Backend Developer</span>
                            <span>Software Engineer</span>
                        </TextLoop>
                        
                        <span style={{ color: color1, fontWeight: '700' }}>.</span>
                    </Title>
                    <p style={{ fontSize: '0.9rem' , color: color2, padding: '0.8rem 0 5rem 0.1rem' }}>WITH A TOUCH OF FRONTEND.</p>
                </Fade>
                <Fade 
                    bottom
                    delay={1100}
                    distance='90px'
                >
                    <Link activeClass="active" to="work" spy={true} smooth={true} offset={-50} duration={700} delay={50}>
                        <Btn color='#fff' big>
                            Recent work
                        </Btn>
                    </Link>
                </Fade>
            </Container>
        </Section>
    )
}
