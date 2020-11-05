import React from 'react'
import styled from 'styled-components'
import { bgColor1, Btn, color1, color2 } from '../globalStyles'
import Fade from 'react-reveal/Fade'

const Div = styled.div`
    width: 100%;
    margin: 0 auto;
    height: 380px;
    display: flex;
    margin-top: 5rem;
    text-align: ${props => props.pictureSide};
    /* text-align:  */
`

const Image = styled.img`
        width: 50%;
        margin: ${props => props.pictureSide ? '0 100px 0 0' : '0 0 0 100px'};
        border-radius: 5px;
`

const Title = styled.h2`
    font-size: 2.2rem;
    font-weight: 700;
    margin: 2rem 0 1rem 0;
    text-shadow: 2px 3px 3px rgba(0, 0, 0, 0.25);
    color: ${color2};
`

export default function ProjectItem({ title, picture, text, linkToRepo, index }) {

    const pictureSide = index % 2 === 0 ? 'right' : 'left'
    console.log(pictureSide)
    
    return (
        // <Fade 
        //     bottom
        //     delay={400}
        // >
            <Div pictureSide={pictureSide}>
                {pictureSide === 'left' ? 
                    <Image pictureSide src={picture}/> : null 
                }
                
                <Fade 
                    left={ pictureSide !== 'left' }
                    right={ pictureSide !== 'right' }
                    delay={1000}
                    distance='90px'
                >
                    <div style={{ width: '50%' }}>
                        <Title>
                            {title}
                            <span style={{ color: color1 }}>.</span>
                        </Title>

                        <p style={{ paddingBottom: '2rem', lineHeight: '1.4rem' }}>
                            {text} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        </p>
                        <Btn href={linkToRepo} target='_blank' rel='noreferrer'>
                            See on GitHub
                        </Btn>
                    </div>
                </Fade>

                {pictureSide === 'right' ? 
                    <Image src={picture}/> : null 
                }
            </Div>
        // </Fade>
    )
}
