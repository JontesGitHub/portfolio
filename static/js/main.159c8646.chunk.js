(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{48:function(n,e,t){},70:function(n,e,t){"use strict";t.r(e);var r=t(0),i=t(1),o=t.n(i),a=t(16),c=t.n(a),d=(t(48),t(3)),s=t(8),l=t(4);function m(){var n=Object(d.a)(["\n  display: inline-block;\n  position: relative;\n  padding: ",";\n  font-weight: bold;\n  font-size: ",";\n  line-height: 1rem;\n  z-index: 1;\n  transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.6s;\n  /* color: #fff; */\n  /* text-transform: uppercase; */\n\n  &:after {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 0px;\n    height: 100%;\n    left: 0;\n    bottom: 0;\n    z-index: -1;\n    transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.3s;\n  }\n\n  background-image: ",";\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  border-width: 2px;\n  border-style: solid;\n  border-image: linear-gradient(135deg, "," 0%, "," 100%);\n  border-image-slice: 1;\n  cursor: pointer;\n  // Responsive Button hero style\n  @include respond(phone) {\n    background-image: none;\n    border: 2px solid ",";\n    -webkit-text-fill-color: ",";\n  }\n\n  &::after {\n    background-image: linear-gradient(135deg, "," 0%, "," 100%);\n    // Responsive Button hero style\n    @include respond(phone) {\n      background-image: none;\n    }\n  }\n\n  &:hover {\n    -webkit-text-fill-color: #fff;\n    text-decoration: none;\n    // Responsive Button hover hero style\n    @include respond(phone) {\n      -webkit-text-fill-color: ",";\n    }\n\n    &::after {\n      width: 100%;\n    }\n  }\n\n  @media (max-width: 768px) {\n    padding: ",";\n    font-size: ",";\n  }\n"]);return m=function(){return n},n}function u(){var n=Object(d.a)(["\n  font-size: 20px;\n\n  @media (max-width: 960px) {\n    font-size: 16px;\n  }\n"]);return u=function(){return n},n}var f="#FF4B5C",p="#FD3649",x="#999",b="#202020",h=l.a.div(u()),g=l.a.a(m(),(function(n){return n.big?"0.9rem 1.5rem 1rem 1.5rem":"0.5rem 0.8rem 0.6rem 0.8rem"}),(function(n){return n.big?"1rem":"0.8rem"}),(function(n){return n.color?"linear-gradient(135deg, ".concat(n.color," 0%, ").concat(n.color," 100%)"):"linear-gradient(135deg, ".concat(f," 0%, ").concat(p," 100%)")}),f,p,f,f,f,p,f,(function(n){return n.big?"1.1rem 1.7rem 1.2rem 1.7rem":"0.7rem 1rem 0.8rem 1rem"}),(function(n){return n.big?"1.2rem":"1rem"})),j="data:image/png;base64,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",A=t.p+"static/media/Resume Johannes Svensson.d19d4ef7.pdf",O=t.p+"static/media/profile-picture-color.0e3c7740.png",w=[{title:"Internship at Redmind",text:"Lorem ipsum dolor sit do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit",picture:j,linkToRepo:"https://www.google.com/"},{title:"Web app, Spring + React",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat. Duis aute irure Duis aute irure Duis aute irure Duis aute irure dolor inreprehenderit",picture:j,linkToRepo:"https://www.google.com/"},{title:"Java EE + JSF Webshop",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit",picture:j,linkToRepo:"https://www.google.com/"}],v={github:"https://github.com/JontesGitHub",linkedIn:"https://www.linkedin.com/in/johannes-svensson-a56585145",mail:"mailto:johannes.svensson97@gmail.com",resume:A},z={textSpan:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",text:"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",image:O},k=t(5),y=t(9),D=t(6),B=t(41);function M(){var n=Object(d.a)(["\n  position: absolute;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  text-align: center;\n  bottom: 6%;\n\n  a {\n    color: ",";\n    margin: 1.1rem;\n    font-size: 1rem;\n    text-decoration: none;\n    font-weight: 600;\n  }\n"]);return M=function(){return n},n}function S(){var n=Object(d.a)(["\n  font-size: 3rem;\n  text-transform: uppercase;\n  padding: 1rem 0;\n  margin: 1rem auto;\n  font-weight: bold;\n  letter-spacing: 0.5rem;\n  color: #000;\n  transition: color 0.3s linear;\n\n  @media (max-width: 768px) {\n    font-size: 1.5rem;\n    text-align: center;\n  }\n\n  @media (max-height: 380px) {\n    font-size: 1.3rem;\n  }\n\n  &:hover {\n    color: ",";\n  }\n\n  &.active {\n    /* box-shadow: inset 0px -3px 0 0 ","; */\n    color: ",";\n  }\n"]);return S=function(){return n},n}function N(){var n=Object(d.a)(["\n  box-sizing: border-box;\n  display: ",";\n  flex-direction: column;\n  background: #fff;\n  height: 100vh;\n  width: 55%;\n  text-align: left;\n  position: absolute;\n  padding-top: 4.5rem;\n  top: 0;\n  right: 0;\n  transition: transform 1s ease-in-out;\n  transform: ",";\n\n  @media (max-width: 500px) {\n    width: 100%;\n  }\n\n  @media (max-height: 380px) {\n    padding-top: 2.5rem;\n  }\n\n  @media (min-width: 769px) {\n    display: none;\n  }\n"]);return N=function(){return n},n}function P(){var n=Object(d.a)(["\n  position: absolute;\n  top: 14px;\n  right: 2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 2rem;\n  height: 2rem;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  z-index: 10;\n\n  &:focus {\n    outline: none;\n  }\n\n  div {\n    width: 2rem;\n    height: 0.25rem;\n    background: ",";\n    border-radius: 10px;\n    transition: all 0.3s linear;\n    position: relative;\n    transform-origin: 1px;\n\n    :first-child {\n      transform: ",";\n    }\n\n    :nth-child(2) {\n      opacity: ",";\n      transform: ",";\n    }\n\n    :nth-child(3) {\n      transform: ",";\n    }\n  }\n\n  @media (min-width: 769px) {\n    display: none;\n  }\n"]);return P=function(){return n},n}var G=l.a.button(P(),(function(n){return n.open?"#000":"#fff"}),(function(n){return n.open?"rotate(45deg)":"rotate(0)"}),(function(n){return n.open?"0":"1"}),(function(n){return n.open?"translateX(20px)":"translateX(0)"}),(function(n){return n.open?"rotate(-45deg)":"rotate(0)"})),X=l.a.nav(N(),(function(n){return n.open?"flex":"none"}),(function(n){return n.open?"translateX(0)":"translateX(100%)"})),W=Object(l.a)(s.Link)(S(),f,f,f),J=l.a.div(M(),x);function H(){var n=Object(i.useState)(!1),e=Object(B.a)(n,2),t=e[0],o=e[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(G,{open:t,onClick:function(){return o(!t)},children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]}),Object(r.jsxs)(X,{open:t,children:[Object(r.jsx)(W,{activeClass:"active",to:"home",spy:!0,smooth:!0,offset:-50,duration:700,delay:50,onClick:function(){return o(!t)},children:"Home"}),Object(r.jsx)(W,{activeClass:"active",to:"work",spy:!0,smooth:!0,offset:-50,duration:700,delay:50,onClick:function(){return o(!t)},children:"Work"}),Object(r.jsx)(W,{activeClass:"active",to:"about",spy:!0,smooth:!0,offset:-50,duration:700,delay:50,onClick:function(){return o(!t)},children:"About"}),Object(r.jsxs)(J,{children:[Object(r.jsx)("a",{href:v.resume,target:"_blank",rel:"noreferrer",children:"See Resume"}),Object(r.jsx)("a",{href:v.linkedIn,target:"_blank",rel:"noreferrer",children:Object(r.jsx)(k.a,{icon:D.b})}),Object(r.jsx)("a",{href:v.github,target:"_blank",rel:"noreferrer",children:Object(r.jsx)(k.a,{icon:D.a})}),Object(r.jsx)("a",{href:v.mail,target:"_blank",rel:"noreferrer",children:Object(r.jsx)(k.a,{icon:y.a})})]})]})]})}function I(){var n=Object(d.a)(["\n  color: ",";\n  margin: 0.7rem;\n  font-size: 1rem;\n  text-decoration: none;\n  font-weight: 600;\n\n  &:hover {\n    color: #e6e6e6;\n  }\n"]);return I=function(){return n},n}function Q(){var n=Object(d.a)(["\n  position: fixed;\n  right: 0;\n  display: flex;\n  align-items: center;\n  margin-right: 2%;\n  margin-top: 6px;\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]);return Q=function(){return n},n}function R(){var n=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  margin: 0 auto;\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]);return R=function(){return n},n}function T(){var n=Object(d.a)(["\n  position: fixed;\n  background: ",";\n  height: 55px;\n  display: flex;\n  justify-content: space-between;\n  z-index: 10;\n  width: 100%;\n"]);return T=function(){return n},n}function q(){var n=Object(d.a)(['\n  color: #fff;\n  flex: 1 1 auto;\n  margin: 20px;\n  /* height: 100%; */\n  font-weight: 500;\n  padding: 17px 10px;\n  display: flex;\n  position: relative;\n  overflow: hidden;\n  transition: 0.3s;\n\n  &:after {\n    position: absolute;\n    transition: 0.4s;\n    content: "";\n    width: 0%;\n    left: 50%;\n    bottom: 0;\n    height: 3px;\n    background: transparent;\n  }\n\n  &.active {\n    box-shadow: inset 0px -3px 0 0 ',";\n    color: ",";\n  }\n\n  &:hover {\n    cursor: pointer;\n    /* background: rgba(73, 52, 202, 0.5); */\n    &:after {\n      width: 100%;\n      left: 0;\n      background: #fff;\n    }\n  }\n"]);return q=function(){return n},n}var C=Object(l.a)(s.Link)(q(),f,f),K=l.a.nav(T(),b),Z=l.a.div(R()),E=l.a.div(Q()),F=l.a.a(I(),x);function Y(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(K,{children:[Object(r.jsx)(H,{}),Object(r.jsxs)(Z,{children:[Object(r.jsx)(C,{activeClass:"active",to:"home",spy:!0,smooth:!0,offset:-50,duration:700,delay:50,children:"Home"}),Object(r.jsx)(C,{activeClass:"active",to:"work",spy:!0,smooth:!0,offset:-50,duration:700,delay:50,children:"Work"}),Object(r.jsx)(C,{activeClass:"active",to:"about",spy:!0,smooth:!0,offset:-50,duration:700,delay:50,children:"About"})]}),Object(r.jsxs)(E,{children:[Object(r.jsx)(F,{href:v.resume,target:"_blank",rel:"noreferrer",children:"See Resume"}),Object(r.jsx)(F,{href:v.linkedIn,target:"_blank",rel:"noreferrer",children:Object(r.jsx)(k.a,{icon:D.b})}),Object(r.jsx)(F,{href:v.github,target:"_blank",rel:"noreferrer",children:Object(r.jsx)(k.a,{icon:D.a})}),Object(r.jsx)(F,{href:v.mail,target:"_blank",rel:"noreferrer",children:Object(r.jsx)(k.a,{icon:y.a})})]})]})})}var L=t(7),U=t.n(L);function V(){var n=Object(d.a)(["\n    position: relative;\n    color: ",";\n    margin: 2rem;\n    font-size: 2.5rem;\n\n    &:hover {\n        color: #e6e6e6;\n    }\n\n    @media (max-width: 700px) {\n        font-size: 1.5rem;\n    }\n"]);return V=function(){return n},n}function _(){var n=Object(d.a)(["\n    background-color: ",";\n    height: 16vh;\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    text-align: center;\n"]);return _=function(){return n},n}var $=Object(l.a)(h)(_(),"#121212"),nn=l.a.a(V(),x);function en(){return Object(r.jsxs)($,{children:[Object(r.jsx)("p",{style:{color:x,fontSize:"1.1rem"},children:"Find me on..."}),Object(r.jsxs)("div",{children:[Object(r.jsx)(nn,{href:v.linkedIn,target:"_blank",rel:"noreferrer",children:Object(r.jsx)(k.a,{icon:D.b})}),Object(r.jsx)(nn,{href:v.github,target:"_blank",rel:"noreferrer",children:Object(r.jsx)(k.a,{icon:D.a})}),Object(r.jsx)(nn,{href:v.mail,target:"_blank",rel:"noreferrer",children:Object(r.jsx)(k.a,{icon:y.a})})]})]})}function tn(){var n=Object(d.a)(["\n  color: #fff;\n  line-height: 1.4rem;\n  margin-bottom: 1rem;\n  font-weight: ",";\n  font-size: ",";\n"]);return tn=function(){return n},n}function rn(){var n=Object(d.a)(["\n  height: 100%;\n  border-radius: 5px;\n\n  @media (max-width: 1100px) {\n    height: 80%;\n    margin: auto 0;\n  }\n  @media (max-width: 700px) {\n    margin: 0 auto;\n  }\n"]);return rn=function(){return n},n}function on(){var n=Object(d.a)(['\n  font-size: 4rem;\n  font-family: "Open Sans";\n  font-weight: 800;\n  text-shadow: 2px 3px 3px rgba(0, 0, 0, 0.25);\n  line-height: 4rem;\n  color: #fff;\n\n  .me {\n    font-size: 1em;\n    color: ',";\n  }\n\n  .dot {\n    font-size: 1em;\n    color: ",";\n  }\n\n  @media (max-width: 700px) {\n    font-size: 3rem;\n  }\n"]);return on=function(){return n},n}function an(){var n=Object(d.a)(["\n  max-width: 1400px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 5.5rem;\n  padding-top: 2%;\n  min-height: 55%;\n  overflow: hidden;\n\n  .text-box {\n    padding-top: 15%;\n  }\n\n  @media (max-width: 1500px) {\n    max-width: 1200px;\n    padding-left: 5%;\n    padding-right: 5%;\n    grid-template-columns: 55% 45%;\n    grid-gap: 2rem;\n  }\n\n  @media (max-width: 960px) {\n    grid-gap: 0;\n  }\n\n  @media (max-width: 700px) {\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n\n    .text-box {\n      padding: 0 3rem;\n      text-align: center;\n    }\n  }\n  @media (max-width: 500px) {\n    .text-box {\n      padding: 0;\n    }\n  }\n"]);return an=function(){return n},n}function cn(){var n=Object(d.a)(["\n  background-color: ",";\n  min-height: calc(100vh - 50px);\n  position: relative;\n\n  @media (max-width: 700px) {\n    min-height: calc(100vh - 50px);\n  }\n"]);return cn=function(){return n},n}var dn=Object(l.a)(h)(cn(),b),sn=l.a.div(an()),ln=l.a.h2(on(),x,f),mn=l.a.img(rn()),un=l.a.p(tn(),(function(n){return n.big?"700":"normal"}),(function(n){return n.big?"1.3rem":"1rem"}));function fn(){return Object(r.jsxs)(dn,{id:"about",children:[Object(r.jsxs)(sn,{children:[Object(r.jsx)(U.a,{left:!0,delay:400,distance:"90px",children:Object(r.jsxs)("div",{className:"text-box",children:[Object(r.jsxs)(ln,{children:["About ",Object(r.jsx)("br",{}),Object(r.jsxs)("span",{className:"me",children:["me",Object(r.jsx)("span",{className:"dot",children:"."}),Object(r.jsx)("br",{})]})]}),Object(r.jsx)(un,{big:!0,children:z.textSpan}),Object(r.jsx)(un,{children:z.text})]})}),Object(r.jsx)(mn,{src:z.image})]}),Object(r.jsx)(en,{})]})}var pn=t(42);function xn(){var n=Object(d.a)(["\n  margin: 0 auto;\n  padding-top: 15%;\n  max-width: 1200px;\n\n  @media (max-width: 1400px) {\n    max-width: 1100px;\n    margin: 0 11%;\n    padding-top: 16%;\n  }\n\n  @media (max-width: 960px) {\n    padding-top: 20%;\n  }\n\n  @media (max-width: 500px) {\n    padding-top: 40%;\n    /* text-align: center; */\n  }\n"]);return xn=function(){return n},n}function bn(){var n=Object(d.a)(["\n  line-height: 3.5rem;\n  font-size: 3.4rem;\n  color: ",";\n"]);return bn=function(){return n},n}function hn(){var n=Object(d.a)(['\n  color: #fff;\n  font-size: 4.4rem;\n  font-family: "Open Sans";\n  font-style: normal;\n  font-weight: normal;\n  margin: 0;\n  line-height: 5.5rem;\n\n  span {\n    font-size: 4.4rem;\n    font-family: "Open Sans";\n    font-style: normal;\n    font-weight: normal;\n    margin: 0;\n    line-height: 4.5rem;\n\n    @media (max-width: 650px) {\n      display: block;\n    }\n  }\n']);return hn=function(){return n},n}function gn(){var n=Object(d.a)(["\n  background-color: ",";\n  min-height: 100vh;\n  overflow: hidden;\n  padding-bottom: 1%;\n"]);return gn=function(){return n},n}var jn=Object(l.a)(h)(gn(),b),An=l.a.h1(hn()),On=Object(l.a)(An)(bn(),x),wn=l.a.div(xn());function vn(){return Object(r.jsx)(jn,{id:"home",children:Object(r.jsxs)(wn,{children:[Object(r.jsxs)(U.a,{left:!0,duration:800,delay:400,distance:"100px",children:[Object(r.jsxs)("div",{children:[Object(r.jsxs)(On,{children:["Hi, ",Object(r.jsx)("br",{}),"I'm Johannes,",Object(r.jsx)("br",{})]}),Object(r.jsxs)(pn.a,{springConfig:{swiftness:50},children:[Object(r.jsxs)(An,{children:["Backend",Object(r.jsxs)("span",{children:[" Developer",Object(r.jsx)("b",{style:{color:f,fontWeight:"700",fontSize:"4.4rem"},children:"."})]})]}),Object(r.jsxs)(An,{children:["Software",Object(r.jsxs)("span",{children:[" Engineer",Object(r.jsx)("b",{style:{color:f,fontWeight:"700",fontSize:"4.4rem"},children:"."})]})]})]})]}),Object(r.jsx)("p",{style:{fontSize:"0.9rem",color:x,padding:"0.8rem 0 5rem 0.1rem",letterSpacing:"4px"},children:"WITH A TOUCH OF FRONTEND."})]}),Object(r.jsx)(U.a,{bottom:!0,delay:900,distance:"90px",children:Object(r.jsx)(s.Link,{activeClass:"active",to:"work",spy:!0,smooth:!0,offset:-50,duration:700,delay:50,children:Object(r.jsx)(g,{color:"#fff",big:!0,children:"Recent work"})})})]})})}function zn(){var n=Object(d.a)(["\n  font-size: 1.9rem;\n  font-weight: 700;\n  margin: 2rem 0 1rem 0;\n  text-shadow: 2px 3px 3px rgba(0, 0, 0, 0.25);\n  color: ",";\n\n  @media (max-width: 900px) {\n    margin-top: 0;\n    font-size: 1.5rem;\n  }\n"]);return zn=function(){return n},n}function kn(){var n=Object(d.a)(["\n  max-height: 400px;\n  width: 100%;\n  border-radius: 5px;\n  @media (max-width: 768px) {\n    max-width: 80%;\n    margin: 0 auto;\n  }\n  @media (max-width: 500px) {\n    max-width: 100%;\n  }\n"]);return kn=function(){return n},n}function yn(){var n=Object(d.a)(["\n  /* text-align: ",'; */\n  width: 100%;\n  margin-top: 4rem;\n  padding-bottom: 2.5rem;\n  overflow: hidden;\n  .image {\n    grid-area: image;\n  }\n  .textBox {\n    grid-area: textBox;\n  }\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 2500px));\n  /* grid-template-columns: 1fr 1fr; */\n  grid-template-areas: \'image textBox\';\n  grid-column-gap: 5rem;\n\n  @media (max-width: 768px) {\n    column-gap: 2rem;\n    padding-bottom: 0;\n  }\n\n  @media (max-width: 650px) {\n    grid-template-areas:\n      "image"\n      "textBox";\n    row-gap: 2rem;\n    column-gap: 0;\n    height: auto;\n    width: auto;\n    text-align: center;\n  }\n']);return yn=function(){return n},n}var Dn=l.a.div(yn(),(function(n){return n.pictureSide})),Bn=l.a.img(kn()),Mn=l.a.h2(zn(),b);function Sn(n){var e=n.title,t=n.picture,i=n.text,o=n.linkToRepo,a=n.index%2===0?"right":"left";return Object(r.jsxs)(Dn,{pictureSide:a,children:[Object(r.jsx)(Bn,{src:t,className:"image"}),Object(r.jsx)(U.a,{bottom:!0,delay:600,distance:"30px",className:"textBox",children:Object(r.jsxs)("div",{children:[Object(r.jsxs)(Mn,{children:[e,Object(r.jsx)("span",{style:{color:f,fontSize:"1em"},children:"."})]}),Object(r.jsx)("p",{style:{lineHeight:"1.5rem"},children:i})," ",Object(r.jsx)("br",{}),Object(r.jsx)(g,{href:o,target:"_blank",rel:"noreferrer",children:"See on GitHub"})]})})]})}function Nn(){var n=Object(d.a)(["\n  margin: 0 auto;\n  padding-top: 1%;\n  max-width: 1100px;\n\n  @media (max-width: 1200px) {\n    max-width: 960px;\n    padding-right: 5%;\n    padding-left: 5%;\n  }\n  @media (max-width: 960px) {\n    padding-right: 5%;\n    padding-left: 5%;\n  }\n\n  @media (max-width: 650px) {\n    padding-right: 8%;\n    padding-left: 8%;\n  }\n\n"]);return Nn=function(){return n},n}function Pn(){var n=Object(d.a)(["\n  background-color: ",";\n  min-height: 100vh;\n  padding-bottom: 5rem;\n"]);return Pn=function(){return n},n}function Gn(){var n=Object(d.a)(["\n  font-size: ",';\n  font-family: "Open Sans";\n  font-weight: 800;\n  text-shadow: 2px 3px 3px rgba(0, 0, 0, 0.25);\n  line-height: 4rem;\n  color: ',';\n  margin: 0;\n\n  .my {\n    font-size: 0.9em;\n    font-family: "Open Sans";\n    display: block;\n    font-weight: 800;\n    text-shadow: 2px 3px 3px rgba(0, 0, 0, 0.25);\n    color: ',";\n    margin: 0;\n  }\n\n  @media (max-width: 600px) {\n    margin: 0 auto;\n  }\n\n  @media (max-width: 700px) {\n    font-size: 3rem;\n    line-height: 3rem;\n  }\n"]);return Gn=function(){return n},n}var Xn=l.a.h2(Gn(),(function(n){return n.size||"4rem"}),(function(n){return n.color||f}),(function(n){return n.color||f})),Wn=Object(l.a)(h)(Pn(),"#F5F5F5"),Jn=l.a.div(Nn());function Hn(){return Object(r.jsx)(Wn,{id:"work",children:Object(r.jsxs)(Jn,{children:[Object(r.jsxs)(Xn,{children:[Object(r.jsx)("span",{className:"my",children:"my"}),"Work",Object(r.jsx)("span",{style:{color:b,fontSize:"4rem"},children:"."})]}),function(){var n=1;return w.map((function(e){return Object(r.jsx)(Sn,{title:e.title,text:e.text,picture:e.picture,linkToRepo:e.linkToRepo,pictureSide:e.pictureSide,index:n++},n)}))}()]})})}function In(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(Y,{}),Object(r.jsx)(vn,{}),Object(r.jsx)(Hn,{}),Object(r.jsx)(fn,{})]})}c.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(In,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.159c8646.chunk.js.map