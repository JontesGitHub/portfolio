(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{48:function(n,e,t){},70:function(n,e,t){"use strict";t.r(e);var r=t(0),i=t(1),o=t.n(i),a=t(16),c=t.n(a),s=(t(48),t(3)),d=t(4);function l(){var n=Object(s.a)(["\n  display: inline-block;\n  position: relative;\n  padding: ",";\n  font-weight: 700;\n  font-size: ",";\n  line-height: 1rem;\n  z-index: 1;\n  transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.6s;\n  /* color: #fff; */\n  /* text-transform: uppercase; */\n\n  &:after {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 0px;\n    height: 100%;\n    left: 0;\n    bottom: 0;\n    z-index: -1;\n    transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.3s;\n  }\n\n  background-image: ",";\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  border-width: 2px;\n  border-style: solid;\n  border-image: linear-gradient(135deg, "," 0%, "," 100%);\n  border-image-slice: 1;\n  cursor: pointer;\n  // Responsive Button hero style\n  @include respond(phone) {\n    background-image: none;\n    border: 2px solid ",";\n    -webkit-text-fill-color: ",";\n  }\n\n  &::after {\n    background-image: linear-gradient(135deg, "," 0%, "," 100%);\n    // Responsive Button hero style\n    @include respond(phone) {\n      background-image: none;\n    }\n  }\n\n  &:hover {\n    -webkit-text-fill-color: #fff;\n    text-decoration: none;\n    // Responsive Button hover hero style\n    @include respond(phone) {\n      -webkit-text-fill-color: ",";\n    }\n\n    &::after {\n      width: 100%;\n    }\n  }\n\n  @media (max-width: 768px) {\n    padding: ",";\n    font-size: ",";\n  }\n"]);return l=function(){return n},n}function u(){var n=Object(s.a)(["\n  /* font-size: 20px;\n\n  @media (max-width: 960px) {\n    font-size: 16px;\n  } */\n"]);return u=function(){return n},n}var m="#FF4B5C",x="#FD3649",h="#999",p="#202020",f=d.a.div(u()),b=d.a.a(l(),(function(n){return n.big?"0.9rem 1.5rem 1rem 1.5rem":"0.5rem 0.8rem 0.6rem 0.8rem"}),(function(n){return n.big?"1rem":"0.8rem"}),(function(n){return n.color?"linear-gradient(135deg, ".concat(n.color," 0%, ").concat(n.color," 100%)"):"linear-gradient(135deg, ".concat(m," 0%, ").concat(x," 100%)")}),m,x,m,m,m,x,m,(function(n){return n.big?"1.1rem 1.7rem 1.2rem 1.7rem":"0.7rem 1rem 0.8rem 1rem"}),(function(n){return n.big?"1.2rem":"1rem"})),g=t(5),j=t(8),O=t(6),v=t.p+"static/media/Resume Johannes Svensson.d19d4ef7.pdf",w=t.p+"static/media/profile-picture-color.0e3c7740.png",k=[{title:"Internship at Redmind",text:"During the time I worked on three different projects; Happy X, Brick Technology and Svergies Olympiska Kommitt\xe9. I mainly used Java (Spring and Quarkus) but also a lot of Javascript and Typescript for both frontend (React) and backend (Node) use. Other technologies I worked with was; reactive programming, Message Queue, MongoDB and DynamoDB, Serverless Framework, Firebase and AWS.",picture:t.p+"static/media/project1image.aeba1771.svg",linkToRepo:"https://www.google.com/"},{title:"Web app, Spring + React",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat. Duis aute irure Duis aute irure Duis aute irure Duis aute irure dolor inreprehenderit",picture:t.p+"static/media/project2image.982eaec6.svg",linkToRepo:"https://www.google.com/"},{title:"Java EE + JSF Webshop",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit",picture:t.p+"static/media/project3image.e2d700e1.svg",linkToRepo:"https://www.google.com/"}],y={github:"https://github.com/JontesGitHub",linkedIn:"https://www.linkedin.com/in/johannes-svensson-a56585145",mail:"mailto:johannes.svensson97@gmail.com",resume:v},z={textSpan:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",text:"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",image:w};function S(){var n=Object(s.a)(["\n    color: ",";\n    margin: 2rem;\n    font-size: 2.2rem;\n\n    &:hover {\n        color: #e6e6e6;\n    }\n\n    @media (max-width: 700px) {\n        font-size: 1.5rem;\n    }\n"]);return S=function(){return n},n}function R(){var n=Object(s.a)(["\n    background-color: ",";\n    height: 16vh;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n"]);return R=function(){return n},n}var B=Object(d.a)(f)(R(),"#121212"),C=d.a.a(S(),h);function F(){return Object(r.jsxs)(B,{children:[Object(r.jsx)("p",{style:{color:h,fontSize:"1.1rem",marginTop:"0"},children:"Find me on:"}),Object(r.jsxs)("div",{children:[Object(r.jsx)(C,{href:y.linkedIn,target:"_blank",rel:"noreferrer",children:Object(r.jsx)(g.a,{icon:O.b})}),Object(r.jsx)(C,{href:y.github,target:"_blank",rel:"noreferrer",children:Object(r.jsx)(g.a,{icon:O.a})}),Object(r.jsx)(C,{href:y.mail,target:"_blank",rel:"noreferrer",children:Object(r.jsx)(g.a,{icon:j.a})})]})]})}var D=t(9),q=t(41);function T(){var n=Object(s.a)(["\n  position: absolute;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  text-align: center;\n  bottom: 7%;\n\n  a {\n    color: ",";\n    margin: 1.1rem;\n    font-size: 1.7rem;\n    text-decoration: none;\n    font-weight: 700;\n  }\n"]);return T=function(){return n},n}function _(){var n=Object(s.a)(["\n  font-size: 2.3rem;\n  text-transform: uppercase;\n  padding: 1rem 0;\n  margin: 1rem auto;\n  font-weight: 700;\n  letter-spacing: 0.5rem;\n  color: #000;\n  transition: color 0.3s linear;\n\n  @media (max-width: 768px) {\n    /* font-size: 1.5rem; */\n    text-align: center;\n  }\n\n  @media (max-height: 380px) {\n    /* font-size: 1.3rem; */\n  }\n\n  &:hover {\n    color: ",";\n  }\n\n  &.active {\n    /* box-shadow: inset 0px -3px 0 0 ","; */\n    color: ",";\n  }\n"]);return _=function(){return n},n}function I(){var n=Object(s.a)(["\n  box-sizing: border-box;\n  display: ",";\n  flex-direction: column;\n  background: #fff;\n  height: 100vh;\n  width: 55%;\n  text-align: left;\n  position: absolute;\n  padding-top: 4.5rem;\n  top: 0;\n  right: 0;\n  transition: transform 1s ease-in-out;\n  transform: ",";\n\n  @media (max-width: 500px) {\n    width: 100%;\n  }\n\n  @media (max-height: 380px) {\n    padding-top: 2.5rem;\n  }\n\n  @media (min-width: 769px) {\n    display: none;\n  }\n"]);return I=function(){return n},n}function H(){var n=Object(s.a)(["\n  position: absolute;\n  top: 14px;\n  right: 2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 2rem;\n  height: 2rem;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  z-index: 10;\n\n  &:focus {\n    outline: none;\n  }\n\n  div {\n    width: 2rem;\n    height: 0.25rem;\n    background: ",";\n    border-radius: 10px;\n    transition: all 0.3s linear;\n    position: relative;\n    transform-origin: 1px;\n\n    :first-child {\n      transform: ",";\n    }\n\n    :nth-child(2) {\n      opacity: ",";\n      transform: ",";\n    }\n\n    :nth-child(3) {\n      transform: ",";\n    }\n  }\n\n  @media (min-width: 769px) {\n    display: none;\n  }\n"]);return H=function(){return n},n}var J=d.a.button(H(),(function(n){return n.open?"#000":"#fff"}),(function(n){return n.open?"rotate(45deg)":"rotate(0)"}),(function(n){return n.open?"0":"1"}),(function(n){return n.open?"translateX(20px)":"translateX(0)"}),(function(n){return n.open?"rotate(-45deg)":"rotate(0)"})),N=d.a.nav(I(),(function(n){return n.open?"flex":"none"}),(function(n){return n.open?"translateX(0)":"translateX(100%)"})),W=Object(d.a)(D.Link)(_(),m,m,m),L=d.a.div(T(),h);function A(){var n=Object(i.useState)(!1),e=Object(q.a)(n,2),t=e[0],o=e[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(J,{open:t,onClick:function(){return o(!t)},children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]}),Object(r.jsxs)(N,{open:t,children:[Object(r.jsx)(W,{activeClass:"active",to:"home",spy:!0,smooth:!0,offset:-50,duration:700,delay:50,onClick:function(){return o(!t)},children:"Home"}),Object(r.jsx)(W,{activeClass:"active",to:"work",spy:!0,smooth:!0,offset:-50,duration:700,delay:50,onClick:function(){return o(!t)},children:"Work"}),Object(r.jsx)(W,{activeClass:"active",to:"about",spy:!0,smooth:!0,offset:-50,duration:700,delay:50,onClick:function(){return o(!t)},children:"About"}),Object(r.jsxs)(L,{children:[Object(r.jsx)("a",{href:y.resume,target:"_blank",rel:"noreferrer",children:"See Resume"}),Object(r.jsx)("a",{href:y.linkedIn,target:"_blank",rel:"noreferrer",children:Object(r.jsx)(g.a,{icon:O.b})}),Object(r.jsx)("a",{href:y.github,target:"_blank",rel:"noreferrer",children:Object(r.jsx)(g.a,{icon:O.a})}),Object(r.jsx)("a",{href:y.mail,target:"_blank",rel:"noreferrer",children:Object(r.jsx)(g.a,{icon:j.a})})]})]})]})}function E(){var n=Object(s.a)(["\n  color: ",";\n  margin: 0.7rem;\n  font-size: 1rem;\n  text-decoration: none;\n  font-weight: 600;\n\n  &:hover {\n    color: #e6e6e6;\n  }\n"]);return E=function(){return n},n}function X(){var n=Object(s.a)(["\n  position: fixed;\n  right: 0;\n  display: flex;\n  align-items: center;\n  margin-right: 2%;\n  margin-top: 6px;\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]);return X=function(){return n},n}function U(){var n=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  margin: 0 auto;\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]);return U=function(){return n},n}function M(){var n=Object(s.a)(["\n  position: fixed;\n  background: ",";\n  height: 55px;\n  display: flex;\n  justify-content: space-between;\n  z-index: 10;\n  width: 100%;\n"]);return M=function(){return n},n}function G(){var n=Object(s.a)(['\n  color: #fff;\n  flex: 1 1 auto;\n  margin: 20px;\n  /* height: 100%; */\n  font-weight: 600;\n  padding: 17px 10px;\n  display: flex;\n  position: relative;\n  overflow: hidden;\n  transition: 0.3s;\n\n  &:after {\n    position: absolute;\n    transition: 0.4s;\n    content: "";\n    width: 0%;\n    left: 50%;\n    bottom: 0;\n    height: 3px;\n    background: transparent;\n  }\n\n  &.active {\n    box-shadow: inset 0px -3px 0 0 ',";\n    color: ",";\n  }\n\n  &:hover {\n    cursor: pointer;\n    /* background: rgba(73, 52, 202, 0.5); */\n    &:after {\n      width: 100%;\n      left: 0;\n      background: #fff;\n    }\n  }\n"]);return G=function(){return n},n}var Q=Object(d.a)(D.Link)(G(),m,m),K=d.a.nav(M(),p),P=d.a.div(U()),V=d.a.div(X()),Y=d.a.a(E(),h);function Z(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(K,{children:[Object(r.jsx)(A,{}),Object(r.jsxs)(P,{children:[Object(r.jsx)(Q,{activeClass:"active",to:"home",spy:!0,smooth:!0,offset:-50,duration:700,delay:50,children:"Home"}),Object(r.jsx)(Q,{activeClass:"active",to:"work",spy:!0,smooth:!0,offset:-50,duration:700,delay:50,children:"Work"}),Object(r.jsx)(Q,{activeClass:"active",to:"about",spy:!0,smooth:!0,offset:-50,duration:700,delay:50,children:"About"})]}),Object(r.jsxs)(V,{children:[Object(r.jsx)(Y,{href:y.resume,target:"_blank",rel:"noreferrer",children:"See Resume"}),Object(r.jsx)(Y,{href:y.linkedIn,target:"_blank",rel:"noreferrer",children:Object(r.jsx)(g.a,{icon:O.b})}),Object(r.jsx)(Y,{href:y.github,target:"_blank",rel:"noreferrer",children:Object(r.jsx)(g.a,{icon:O.a})}),Object(r.jsx)(Y,{href:y.mail,target:"_blank",rel:"noreferrer",children:Object(r.jsx)(g.a,{icon:j.a})})]})]})})}var $=t(7),nn=t.n($);function en(){var n=Object(s.a)(["\n  color: #fff;\n  line-height: 1.4rem;\n  margin-bottom: 1rem;\n  font-weight: ",";\n  font-size: ",";\n"]);return en=function(){return n},n}function tn(){var n=Object(s.a)(["\n  width: 100%;\n\n  /* @media (max-width: 1100px) {\n    height: 80%;\n    margin: auto 0;\n  }\n  @media (max-width: 700px) {\n    margin: 0 auto;\n  } */\n"]);return tn=function(){return n},n}function rn(){var n=Object(s.a)(["\n  font-size: 4rem;\n  font-weight: 800;\n  text-shadow: 2px 3px 3px rgba(0, 0, 0, 0.25);\n  line-height: 4rem;\n  color: #fff;\n\n  .me {\n    font-size: 1em;\n    color: ",";\n  }\n\n  .dot {\n    font-size: 1em;\n    color: ",";\n  }\n\n  @media (max-width: 700px) {\n    font-size: 3rem;\n  }\n"]);return rn=function(){return n},n}function on(){var n=Object(s.a)(["\n  max-width: 80%;\n  /* margin-top: 3%; */\n  /* margin: 0 auto; */\n  display: grid;\n  grid-template-columns: 50% 1fr;\n  grid-gap: 5.5rem;\n  /* padding-top: 2%; */\n  /* min-height: 55%; */\n  overflow: hidden;\n\n  @media (max-width: 1500px) {\n    max-width: 1200px;\n    padding-left: 5%;\n    padding-right: 5%;\n    grid-template-columns: 55% 45%;\n    grid-gap: 2rem;\n  }\n\n  @media (max-width: 960px) {\n    grid-gap: 0;\n  }\n\n  @media (max-width: 700px) {\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n\n    .text-box {\n      padding: 0 3rem;\n      text-align: center;\n    }\n  } \n  @media (max-width: 500px) {\n    .text-box {\n      padding: 0;\n    }\n  }\n"]);return on=function(){return n},n}function an(){var n=Object(s.a)(["\n  background-color: ",";\n  min-height: calc(85vh - 50px);\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  /* @media (max-width: 700px) {\n    min-height: calc(100vh - 50px);\n  } */\n"]);return an=function(){return n},n}var cn=Object(d.a)(f)(an(),p),sn=d.a.div(on()),dn=d.a.h2(rn(),h,m),ln=d.a.img(tn()),un=d.a.p(en(),(function(n){return n.big?"700":"normal"}),(function(n){return n.big?"1.3rem":"1rem"}));function mn(){return Object(r.jsx)(cn,{id:"about",children:Object(r.jsxs)(sn,{children:[Object(r.jsx)(nn.a,{left:!0,delay:400,distance:"90px",children:Object(r.jsxs)("div",{className:"text-box",children:[Object(r.jsxs)(dn,{children:["About ",Object(r.jsx)("br",{}),Object(r.jsxs)("span",{className:"me",children:["me",Object(r.jsx)("span",{className:"dot",children:"."}),Object(r.jsx)("br",{})]})]}),Object(r.jsx)(un,{big:!0,children:z.textSpan}),Object(r.jsx)(un,{children:z.text})]})}),Object(r.jsx)(ln,{src:z.image})]})})}var xn=t(42);function hn(){var n=Object(s.a)(["\n  height: 100%;\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n"]);return hn=function(){return n},n}function pn(){var n=Object(s.a)(["\n  line-height: 3.5rem;\n  font-size: 3.4rem;\n  color: ",";\n"]);return pn=function(){return n},n}function fn(){var n=Object(s.a)(["\n  color: #fff;\n  font-size: 4.4rem;\n  font-style: normal;\n  font-weight: 600;\n  margin: 0;\n  line-height: 5.5rem;\n\n  span {\n    font-size: 1em;\n    font-style: normal;\n    font-weight: 600;\n    margin: 0;\n    line-height: 4.5rem;\n\n    @media (max-width: 650px) {\n      display: block;\n    }\n\n    b {\n      color: ",";\n      font-weight: 700;\n      font-size: 1em;\n    }\n  }\n\n  @media (max-width: 500px) {\n    font-size: 4rem;\n  }\n"]);return fn=function(){return n},n}function bn(){var n=Object(s.a)(["\n  background-color: ",";\n  min-height: 100vh;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return bn=function(){return n},n}var gn=Object(d.a)(f)(bn(),p),jn=d.a.h1(fn(),m),On=Object(d.a)(jn)(pn(),h),vn=d.a.div(hn());function wn(){return Object(r.jsx)(gn,{id:"home",children:Object(r.jsxs)(vn,{children:[Object(r.jsxs)(nn.a,{left:!0,duration:800,delay:400,distance:"100px",children:[Object(r.jsxs)("div",{children:[Object(r.jsxs)(On,{children:["Hi, ",Object(r.jsx)("br",{}),"I'm Johannes,",Object(r.jsx)("br",{})]}),Object(r.jsxs)(xn.a,{springConfig:{swiftness:50},children:[Object(r.jsxs)(jn,{children:["Problem",Object(r.jsxs)("span",{children:["-solver",Object(r.jsx)("b",{children:"."})]})]}),Object(r.jsxs)(jn,{children:["Backend",Object(r.jsxs)("span",{children:[" ","Developer",Object(r.jsx)("b",{children:"."})]})]}),Object(r.jsxs)(jn,{children:["Software",Object(r.jsxs)("span",{children:[" ","Engineer",Object(r.jsx)("b",{children:"."})]})]})]})]}),Object(r.jsx)("p",{style:{fontSize:"0.9rem",color:h,padding:"0.8rem 0 5rem 0.1rem",letterSpacing:"4px"},children:"WITH A TOUCH OF FRONTEND."})]}),Object(r.jsx)(nn.a,{bottom:!0,delay:900,distance:"90px",children:Object(r.jsx)(D.Link,{activeClass:"active",to:"work",spy:!0,smooth:!0,offset:-50,duration:700,delay:50,children:Object(r.jsx)(b,{color:"#fff",big:!0,children:"Recent work"})})})]})})}function kn(){var n=Object(s.a)(["\n  font-size: 1.9rem;\n  font-weight: 700;\n  margin: 0 0 1rem 0;\n  text-shadow: 2px 3px 3px rgba(0, 0, 0, 0.25);\n  color: ",";\n\n  @media (max-width: 900px) {\n    margin-top: 0;\n    font-size: 1.5rem;\n  }\n"]);return kn=function(){return n},n}function yn(){var n=Object(s.a)(["\n  max-height: 400px;\n  width: 100%;\n  border-radius: 20px;\n  box-shadow: 3px 4px 3px rgba(0, 0, 0, 0.25);\n  margin: 0 auto;\n  @media (max-width: 768px) {\n    max-width: 80%;\n  }\n  @media (max-width: 500px) {\n    max-width: 100%;\n  }\n"]);return yn=function(){return n},n}function zn(){var n=Object(s.a)(["\n  /* text-align: ",'; */\n  width: 100%;\n  margin-top: 4rem;\n  padding-bottom: 2.5rem;\n  /* overflow: hidden; */\n  .image {\n    grid-area: image;\n  }\n  .textBox {\n    grid-area: textBox;\n  }\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 500px));\n  grid-template-areas: \'image textBox\';\n  grid-column-gap: 5rem;\n\n  @media (max-width: 768px) {\n    column-gap: 2rem;\n    padding-bottom: 0;\n  }\n\n  @media (max-width: 650px) {\n    grid-template-areas:\n      "image"\n      "textBox";\n    row-gap: 2rem;\n    column-gap: 0;\n    height: auto;\n    width: auto;\n    text-align: center;\n  }\n']);return zn=function(){return n},n}var Sn=d.a.div(zn(),(function(n){return n.pictureSide})),Rn=d.a.img(yn()),Bn=d.a.h2(kn(),p);function Cn(n){var e=n.title,t=n.picture,i=n.text,o=n.linkToRepo,a=n.index%2===0?"right":"left";return Object(r.jsxs)(Sn,{pictureSide:a,children:[Object(r.jsx)(Rn,{src:t,className:"image"}),Object(r.jsx)(nn.a,{bottom:!0,delay:600,distance:"30px",className:"textBox",children:Object(r.jsxs)("div",{style:{margin:"auto 0"},children:[Object(r.jsxs)(Bn,{children:[e,Object(r.jsx)("span",{style:{color:m,fontSize:"1em"},children:"."})]}),Object(r.jsx)("p",{style:{lineHeight:"1.5rem"},children:i})," ",Object(r.jsx)("br",{}),Object(r.jsx)(b,{href:o,target:"_blank",rel:"noreferrer",children:"See on GitHub"})]})})]})}function Fn(){var n=Object(s.a)(["\n  margin: 0 auto;\n  padding-top: 2%;\n  max-width: 1100px;\n\n  @media (max-width: 1200px) {\n    max-width: 960px;\n    padding-right: 5%;\n    padding-left: 5%;\n  }\n  @media (max-width: 960px) {\n    padding-right: 5%;\n    padding-left: 5%;\n  }\n\n  @media (max-width: 650px) {\n    padding-right: 8%;\n    padding-left: 8%;\n  }\n\n"]);return Fn=function(){return n},n}function Dn(){var n=Object(s.a)(["\n  background-color: ",";\n  min-height: 100vh;\n  padding-bottom: 5rem;\n"]);return Dn=function(){return n},n}function qn(){var n=Object(s.a)(["\n  font-size: ",";\n  font-weight: 800;\n  text-shadow: 2px 3px 3px rgba(0, 0, 0, 0.25);\n  color: ",";\n  margin: 0;\n\n  .my {\n    font-size: 0.8em;\n    display: block;\n    font-weight: 800;\n    text-shadow: 2px 3px 3px rgba(0, 0, 0, 0.25);\n    color: ",";\n    margin: 0;\n  }\n\n  @media (max-width: 600px) {\n    margin: 0 auto;\n  }\n\n  @media (max-width: 700px) {\n    font-size: 3rem;\n    line-height: 3rem;\n  }\n"]);return qn=function(){return n},n}var Tn=d.a.h2(qn(),(function(n){return n.size||"4rem"}),(function(n){return n.color||m}),(function(n){return n.color||m})),_n=Object(d.a)(f)(Dn(),"#F5F5F5"),In=d.a.div(Fn());function Hn(){return Object(r.jsx)(_n,{id:"work",children:Object(r.jsxs)(In,{children:[Object(r.jsxs)(Tn,{children:["Work",Object(r.jsx)("span",{style:{color:p,fontSize:"4rem"},children:"."})]}),function(){var n=1;return k.map((function(e){return Object(r.jsx)(Cn,{title:e.title,text:e.text,picture:e.picture,linkToRepo:e.linkToRepo,pictureSide:e.pictureSide,index:n++},n)}))}()]})})}function Jn(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(Z,{}),Object(r.jsx)(wn,{}),Object(r.jsx)(Hn,{}),Object(r.jsx)(mn,{}),Object(r.jsx)(F,{})]})}c.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(Jn,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.fa510ca1.chunk.js.map