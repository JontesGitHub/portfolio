import React from 'react'
import styled from 'styled-components'
import { bgColor1, BaseSection } from '../globalStyles'
import Fade from 'react-reveal/Fade'
import Footer from '../components/Footer'

const Section = styled(BaseSection)`
    background-color: ${bgColor1};
    height: 100vh;
    position: relative;
`
const GridContainer = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* grid-template-rows: 100vh; */
    grid-gap: 100px;
    padding-top: 10%;
    /* align-items: center; */
`
const Title = styled.h2`
    font-size: 4rem;
    font-family: 'Open Sans';
    font-weight: 800;
    text-shadow: 2px 3px 3px rgba(0, 0, 0, 0.25);
    line-height: 4rem;
    /* padding-top: 3%; */
    color: #fff;
`

export default function AboutScreen() {
    return (
        <Section id='about'>
            <GridContainer>
                <Fade 
                    left
                    delay={400}
                    distance='90px'
                >
                    <div>
                        <Title>About <br/>
                            <span style={{ fontSize: '4rem', color:'#999' }}>
                                me
                                <span style={{ fontSize: '4rem', color:'#FF4B5C' }}>.</span>
                                <br/>
                            </span>
                        </Title>
                        <p style={{ color:'#fff', lineHeight: '1.4rem' }}>
                            <span style={{ fontWeight: '700', fontSize: '1.1rem' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/><br/>
                            </span>
                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        </p>
                    </div>
                </Fade>
                <div style={{backgroundColor: 'grey', height: '500px'}}>
                        hello
                </div>
            </GridContainer>
            <Footer />
        </Section>
    )
}
