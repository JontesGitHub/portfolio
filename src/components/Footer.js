import React from 'react'
import styled from 'styled-components'
import { BaseSection, footerBgColor, color2 } from '../globalStyles'

const Section = styled(BaseSection)`
    background-color: ${footerBgColor};
    height: 20%;
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
`

export default function Footer() {
    return (
        <Section>
            <p style={{ color: color2, fontSize: '1.1rem' }}>
                Find me at...
            </p>
            <div style={{ display: 'inline-block', color: '#fff' }}>
                <div style={{ display: 'inline-block', padding: '2rem' }}>LinkedIn</div>
                <div style={{ display: 'inline-block', padding: '2rem' }}>GitHub</div>
                <div style={{ display: 'inline-block', padding: '2rem' }}>Mail</div>
            </div>
        </Section>
    )
}
