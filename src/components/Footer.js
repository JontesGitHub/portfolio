import React from 'react'
import styled from 'styled-components'
import { BaseSection, footerBgColor, color2 } from '../globalStyles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { links } from '../data'

const Section = styled(BaseSection)`
    background-color: ${footerBgColor};
    height: 16vh;
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
`
const IconLink = styled.a`
    position: relative;
    color: ${color2};
    margin: 2rem;
    font-size: 2.5rem;

    &:hover {
        color: #e6e6e6;
    }
`

export default function Footer() {
    return (
        <Section>
            <p style={{ color: color2, fontSize: '1.1rem' }}>
                Find me on...
            </p>
            <div>
                <IconLink href={links.linkedIn} target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </IconLink>
                <IconLink href={links.github} target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={faGithub} />
                </IconLink>
                <IconLink href={links.mail} target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={faAt} />
                </IconLink>
            </div>
        </Section>
    )
}
