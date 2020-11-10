import styled from 'styled-components';

export const color1 = '#FF4B5C'
export const color1LG = '#FD3649'
export const color2 = '#999'
export const bgColor1 = '#202020'
export const bgColor2 = '#F5F5F5'
export const footerBgColor = '#121212'

// export const GlobalStyle = createGlobalStyle`
//   * {
//   box-sizing: border-box;
//   /* margin: 0;
//   padding: 0; */
//  } 
// `

export const BaseSection = styled.div`
  /* font-size: 20px;

  @media (max-width: 960px) {
    font-size: 16px;
  } */
`

// export const Container = styled.div`
//   width: 100%;
//   height: 100%;
//   max-width: 1300px;
//   margin-right: auto;
//   margin-left: auto;
//   padding-right: 50px;
//   padding-left: 50px;

//   @media screen and (max-width: 991px) {
//     padding-right: 30px;
//     padding-left: 30px;
//   }
// `

export const Btn = styled.a`
  display: inline-block;
  position: relative;
  padding: ${props => props.big ? '0.9rem 1.5rem 1rem 1.5rem' : '0.5rem 0.8rem 0.6rem 0.8rem'};
  font-weight: 700;
  font-size: ${props => props.big ? '1rem' : '0.8rem'};
  line-height: 1rem;
  z-index: 1;
  transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.6s;
  /* color: #fff; */
  /* text-transform: uppercase; */

  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 0px;
    height: 100%;
    left: 0;
    bottom: 0;
    z-index: -1;
    transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.3s;
  }

  background-image: ${props => props.color ? `linear-gradient(135deg, ${props.color} 0%, ${props.color} 100%)` : `linear-gradient(135deg, ${color1} 0%, ${color1LG} 100%)`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border-width: 2px;
  border-style: solid;
  border-image: linear-gradient(135deg, ${color1} 0%, ${color1LG} 100%);
  border-image-slice: 1;
  cursor: pointer;
  // Responsive Button hero style
  @include respond(phone) {
    background-image: none;
    border: 2px solid ${color1};
    -webkit-text-fill-color: ${color1};
  }

  &::after {
    background-image: linear-gradient(135deg, ${color1} 0%, ${color1LG} 100%);
    // Responsive Button hero style
    @include respond(phone) {
      background-image: none;
    }
  }

  &:hover {
    -webkit-text-fill-color: #fff;
    text-decoration: none;
    // Responsive Button hover hero style
    @include respond(phone) {
      -webkit-text-fill-color: ${color1};
    }

    &::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: ${props => props.big ? '1.1rem 1.7rem 1.2rem 1.7rem' : '0.7rem 1rem 0.8rem 1rem'};
    font-size: ${props => props.big ? '1.2rem' : '1rem'};
  }
`
