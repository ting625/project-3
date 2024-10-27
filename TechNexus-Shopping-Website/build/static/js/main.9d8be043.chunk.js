(this["webpackJsonpreact-webapp"]=this["webpackJsonpreact-webapp"]||[]).push([[0],{40:function(e,t,r){"use strict";r.r(t),t.default=r.p+"static/media/company-logo.43a62d2c.png"},49:function(e,t,r){},59:function(e,t,r){},61:function(e,t,r){},62:function(e,t,r){},69:function(e,t,r){},70:function(e,t,r){},71:function(e,t,r){},72:function(e,t,r){},74:function(e,t,r){"use strict";r.r(t);var n=r(2),c=r(18),i=r.n(c),s=(r(49),r(8)),a=r(7),o=r(14),l=r(12),d=(r(59),r(1));const j=o.e,h=e=>{let{isOpen:t,children:r}=e;return Object(d.jsx)("aside",{className:"sidebar-container "+(t?"open":""),children:r})},b=e=>{let{onClick:t}=e;return Object(d.jsx)("div",{className:"icon",onClick:t,children:Object(d.jsx)(j,{className:"close-icon"})})},x=e=>{let{children:t}=e;return Object(d.jsx)("div",{className:"sidebar-wrapper",children:t})},m=e=>{let{children:t}=e;return Object(d.jsx)("ul",{className:"sidebar-menu",children:t})},p=e=>{let{to:t,onClick:r,children:n}=e;return Object(d.jsx)(l.Link,{to:t,className:"sidebar-link",onClick:r,children:n})},u=e=>{let{children:t}=e;return Object(d.jsx)("div",{className:"side-btn-wrap",children:t})},O=e=>{let{href:t,children:r}=e;return Object(d.jsx)("a",{href:t,className:"sidebar-route",children:r})};var f=e=>{let{isOpen:t,toggle:r}=e;return Object(d.jsxs)(h,{isOpen:t,onClick:r,children:[Object(d.jsx)(b,{onClick:r,children:Object(d.jsx)(j,{})}),Object(d.jsxs)(x,{children:[Object(d.jsxs)(m,{children:[Object(d.jsx)(p,{to:"discover",onClick:r,children:"About"}),Object(d.jsx)(p,{to:"services",onClick:r,children:"Product"}),Object(d.jsx)(p,{to:"contact",onClick:r,children:"Contact"})]}),Object(d.jsx)(u,{children:Object(d.jsx)(O,{href:"tel:+19490000000",children:"Call 949-000-0000"})})]})]})},g=r(0);r(61);const v=e=>{let{onClick:t}=e;return Object(d.jsx)("div",{className:"mobile-icon",onClick:t,children:Object(d.jsx)("i",{className:"fas fa-bars"})})},y=e=>{let{children:t}=e;return Object(d.jsx)("nav",{className:"nav",children:t})},w=e=>{let{children:t}=e;return Object(d.jsx)("div",{className:"navbar-container",children:t})},k=e=>{let{children:t}=e;return Object(d.jsx)("ul",{className:"nav-menu",children:t})},N=e=>{let{children:t}=e;return Object(d.jsx)("li",{className:"nav-item",children:t})},C=e=>{let{to:t,children:r}=e;return Object(d.jsx)(l.Link,{to:t,className:"nav-links",children:r})};var T=r.p+"static/media/header-logo.43a62d2c.png";var S=e=>{let{toggle:t}=e;const[r,c]=Object(n.useState)(!1),i=()=>{window.scrollY>=80?c(!0):c(!1)};Object(n.useEffect)((()=>{window.addEventListener("scroll",i)}),[]);return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(g.b.Provider,{value:{color:"#fff"},children:Object(d.jsx)(y,{scrollNav:r,children:Object(d.jsxs)(w,{children:[Object(d.jsx)("img",{src:T,alt:"TechNexus",onClick:()=>{l.animateScroll.scrollToTop()}}),Object(d.jsx)(v,{onClick:t,children:Object(d.jsx)(o.a,{})}),Object(d.jsxs)(k,{children:[Object(d.jsx)(N,{children:Object(d.jsx)(C,{to:"#",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,children:"Home"})}),Object(d.jsx)(N,{children:Object(d.jsx)(C,{to:"services",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,children:"Product"})}),Object(d.jsx)(N,{children:Object(d.jsx)(C,{to:"discover",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,children:"About"})}),Object(d.jsx)(N,{children:Object(d.jsx)(C,{to:"contact",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,children:"Contact"})})]})]})})})})},F=r.p+"static/media/smart-phone.fd72b172.mp4",P=(r(62),r(29));const A=e=>{let{children:t}=e;return Object(d.jsx)("div",{className:"HeroContainer",children:t})},E=e=>{let{children:t}=e;return Object(d.jsx)("div",{className:"HeroBg",children:t})},L=e=>Object(d.jsx)("video",{className:"VideoBg",...e}),W=e=>{let{children:t}=e;return Object(d.jsx)("div",{className:"HeroContent",children:t})},z=e=>{let{children:t}=e;return Object(d.jsx)("h1",{className:"HeroH1",children:t})},B=e=>{let{children:t}=e;return Object(d.jsx)("p",{className:"HeroP",children:t})},I=e=>{let{children:t}=e;return Object(d.jsx)("div",{className:"HeroBtnWrapper",children:t})},H=()=>Object(d.jsx)(P.a,{className:"ArrowForward"}),R=()=>Object(d.jsx)(P.b,{className:"ArrowRight"});var q=r(3);const M=Object(q.a)(l.Link)`
    border-radius: 50px;
    background: ${e=>{let{primary:t}=e;return t?"#ff8368":"#010606"}};
    white-space: nowrap;
    padding: ${e=>{let{big:t}=e;return t?"14px 48px":"12px 30px"}};
    color: ${e=>{let{dark:t}=e;return"#ffffff"}};
    font-size: ${e=>{let{fontBig:t}=e;return t?"20px":"16px"}};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${e=>{let{primary:t}=e;return t?"#ffffff":"#01bf71"}}; 
        color: #000000;
    }
`;var $=()=>{const[e,t]=Object(n.useState)(!1),[r,c]=Object(n.useState)(F),i=Object(a.f)();Object(n.useEffect)((()=>{const e=[F],t=document.getElementById("heroVideo"),n=()=>{const t=(e.indexOf(r)+1)%e.length;c(e[t])};return t&&t.addEventListener("ended",n),()=>{t&&t.removeEventListener("ended",n)}}),[r]);const s=()=>{t(!e)};return Object(d.jsxs)(A,{id:"home",children:[Object(d.jsx)(E,{children:Object(d.jsx)(L,{autoPlay:!0,loop:!1,muted:!0,id:"heroVideo",src:r,type:"video/mp4"})}),Object(d.jsxs)(W,{children:[Object(d.jsx)(z,{children:"Where Innovation Meets Everyday Life"}),Object(d.jsx)(B,{children:"Shop the best in 3C electronics tailored to your life\u2014computers, smartphones, camera, and beyond."}),Object(d.jsx)(I,{children:Object(d.jsxs)(M,{onMouseEnter:s,onMouseLeave:s,primary:"true",dark:"true",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,onClick:()=>{i.push("/shop")},children:["SHOP NOW ",e?Object(d.jsx)(R,{}):Object(d.jsx)(H,{})]})})]})]})};const D=q.a.div`
    color:#fff;
    background: ${e=>{let{lightBg:t}=e;return t?"#f9f9f9":"#010606"}};

    @media screen and (max-width:768px) {
        padding: 100px 0;
    }
`,Y=q.a.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`,_=q.a.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${e=>{let{imgStart:t}=e;return t?"'col2 col1'":"'col1 col2'"}};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${e=>{let{imgStart:t}=e;return t?"'col1' 'col2'":"'col1 col1' 'col2 col2'"}};
    }
`,U=q.a.div`
    margin-bottom: 15px;
    padding: 0px 15px;
    grid-area: col1;
`,V=q.a.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`,J=q.a.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`,K=q.a.p`
    color: #ff8368;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`,G=q.a.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${e=>{let{lightText:t}=e;return t?"#f7f8fa":"#010606"}};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`,Q=q.a.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${e=>{let{darkText:t}=e;return t?"#010606":"#fff"}};
`,X=q.a.div`
    display: flex;
    justify-content: flex-start;
`,Z=q.a.div`
    max-width: 555px;
    height: 100%;
`,ee=q.a.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;var te=e=>{let{lightBg:t,imgStart:r,id:n,topLine:c,lightText:i,headline:s,darkText:a,description:o,description2:l,buttonLabel:j,img:h,alt:b,primary:x,dark:m,dark2:p}=e;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(D,{lightBg:t,id:n,children:Object(d.jsx)(Y,{children:Object(d.jsxs)(_,{imgStart:r,children:[Object(d.jsx)(U,{children:Object(d.jsxs)(J,{children:[Object(d.jsx)(K,{children:c}),Object(d.jsx)(G,{lightText:i,children:s}),Object(d.jsx)(Q,{darkText:a,children:o}),Object(d.jsx)(Q,{darkText:a,children:l}),Object(d.jsx)(X,{children:Object(d.jsx)(M,{to:"home",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,primary:1,dark:m?1:0,dark2:p?1:0,children:j})})]})}),Object(d.jsx)(V,{children:Object(d.jsx)(Z,{children:Object(d.jsx)(ee,{src:h,alt:b})})})]})})})})};const re={id:"discover",lightBg:!0,lightText:!1,lightTextDesc:!1,topLine:"Company",headline:"TechNexus",description:"Technexus was born out of a passion for technology and a desire to enhance the shopping experience for tech enthusiasts around the world.To make buying technology as exciting and efficient as using it. We strive to stay ahead of the curve, constantly innovating our platform to deliver a smooth, hassle-free shopping experience. Whether you're a gamer, a professional, or someone who simply loves staying connected, we're here to support your journey with the best in tech.",buttonLabel:"LEARN MORE",imgStart:!0,img:r(40).default,alt:"Planet",dark:!1,primary:!1,darkText:!0};var ne=r.p+"static/media/laptop.7e49a606.png",ce=r.p+"static/media/camera.221a98fe.png",ie=r.p+"static/media/pro-video.4be5eded.png",se=r.p+"static/media/smartwatch.e61c2309.png",ae=r.p+"static/media/smart-phone.3dbffa24.png",oe=r.p+"static/media/tablet.ce0f9508.png";r(69);const le=e=>{let{children:t}=e;return Object(d.jsx)("div",{className:"ServicesContainer",children:t})},de=e=>{let{children:t}=e;return Object(d.jsx)("div",{className:"ServicesWrapper",children:t})},je=e=>{let{children:t,...r}=e;return Object(d.jsx)("div",{className:"ServicesCard",...r,children:t})},he=e=>Object(d.jsx)("img",{className:"ServicesIcon",...e}),be=e=>{let{children:t}=e;return Object(d.jsx)("h1",{className:"ServicesH1",children:t})},xe=e=>{let{children:t}=e;return Object(d.jsx)("h2",{className:"ServicesH2",children:t})},me=e=>{let{children:t}=e;return Object(d.jsx)("p",{className:"ServicesP",children:t})};var pe=()=>{const e=Object(a.f)(),t=()=>{e.push("/shop")};return Object(d.jsxs)(le,{id:"services",children:[Object(d.jsx)(be,{children:"Our Products"}),Object(d.jsxs)(de,{children:[Object(d.jsxs)(je,{onClick:t,children:[Object(d.jsx)(he,{src:ne}),Object(d.jsx)(xe,{children:"LAPTOP"}),Object(d.jsx)(me,{children:"Combine cutting-edge performance with portability, empowering you to work, create, and play from anywhere."})]}),Object(d.jsxs)(je,{onClick:t,children:[Object(d.jsx)(he,{src:ce}),Object(d.jsx)(xe,{children:"CAMERA"}),Object(d.jsx)(me,{children:"Capture every moment in stunning detail with our cameras, designed for precision, clarity, and ease of use, whether you're a professional or a hobbyist."})]}),Object(d.jsxs)(je,{onClick:t,children:[Object(d.jsx)(he,{src:ie}),Object(d.jsx)(xe,{children:"PRO VIDEO"}),Object(d.jsx)(me,{children:"Elevate your storytelling with our professional video equipment, delivering unmatched quality, versatility, and control for cinematic results every time."})]}),Object(d.jsxs)(je,{onClick:t,children:[Object(d.jsx)(he,{src:se}),Object(d.jsx)(xe,{children:"SMART WATCH"}),Object(d.jsx)(me,{children:"Offer seamless integration of fitness tracking, notifications, and health monitoring in a sleek, wearable design."})]}),Object(d.jsxs)(je,{onClick:t,children:[Object(d.jsx)(he,{src:ae}),Object(d.jsx)(xe,{children:"SMART PHONE"}),Object(d.jsx)(me,{children:"Design for seamless connectivity, stunning visuals, and superior performance in the palm of your hand."})]}),Object(d.jsxs)(je,{onClick:t,children:[Object(d.jsx)(he,{src:oe}),Object(d.jsx)(xe,{children:"TABLETS"}),Object(d.jsx)(me,{children:"Combine the power of a computer with the portability of a smartphone, offering a versatile solution for work, creativity, and entertainment on the go."})]})]})]})};r(70);const ue=e=>{let{children:t}=e;return Object(d.jsx)("footer",{className:"FooterContainer",children:t})},Oe=e=>{let{children:t}=e;return Object(d.jsx)("div",{className:"FooterWrap",children:t})},fe=e=>{let{children:t}=e;return Object(d.jsx)("section",{className:"SocialMedia",children:t})},ge=e=>{let{children:t}=e;return Object(d.jsx)("div",{className:"SocialMediaWrap",children:t})},ve=e=>Object(d.jsx)(s.b,{className:"SocialLogo",...e}),ye=e=>{let{children:t}=e;return Object(d.jsx)("small",{className:"WebsiteRights",children:t})},we=e=>{let{children:t}=e;return Object(d.jsx)("div",{className:"SocialIcons",children:t})},ke=e=>Object(d.jsx)("a",{className:"SocialIconLink",...e});var Ne=()=>Object(d.jsx)(ue,{id:"footer",children:Object(d.jsx)(Oe,{children:Object(d.jsx)(fe,{children:Object(d.jsxs)(ge,{children:[Object(d.jsx)(ve,{to:"/",onClick:()=>{l.animateScroll.scrollToTop()},children:"TechNexus Shop"}),Object(d.jsxs)(ye,{children:["TechNexus \xa9 ",(new Date).getFullYear()," All rights reserved"]}),Object(d.jsxs)(we,{children:[Object(d.jsx)(ke,{href:"//www.twitter.com/",target:"_blank","aria-label":"Facebook",children:Object(d.jsx)(o.b,{})}),Object(d.jsx)(ke,{href:"/",target:"_blank","aria-label":"Instagram",children:Object(d.jsx)(o.c,{})}),Object(d.jsx)(ke,{href:"/",target:"_blank","aria-label":"YouTube",children:Object(d.jsx)(o.g,{})}),Object(d.jsx)(ke,{href:"/",target:"_blank","aria-label":"Twitter",children:Object(d.jsx)(o.f,{})}),Object(d.jsx)(ke,{href:"/",target:"_blank","aria-label":"LinkedIn",children:Object(d.jsx)(o.d,{})})]})]})})})});r(71);const Ce=e=>{let{children:t}=e;return Object(d.jsx)("div",{className:"FormWrap",children:t})},Te=e=>{let{children:t}=e;return Object(d.jsx)("div",{className:"FormContent",children:t})},Se=e=>{let{children:t,...r}=e;return Object(d.jsx)("form",{className:"Form",...r,children:t})},Fe=e=>{let{children:t,...r}=e;return Object(d.jsx)("label",{className:"FormLabel",...r,children:t})},Pe=e=>Object(d.jsx)("input",{className:"HalfWidthInput",...e}),Ae=e=>Object(d.jsx)("textarea",{className:"FormTextArea",...e}),Ee=e=>Object(d.jsx)("button",{className:"FormButton",...e}),Le=e=>{let{children:t}=e;return Object(d.jsx)("span",{className:"Text",children:t})},We=e=>{let{children:t}=e;return Object(d.jsx)("div",{className:"FormRow",children:t})},ze=e=>{let{children:t,lightBg:r,...n}=e;return Object(d.jsx)("div",{className:"InfoContainer "+(r?"lightBg":""),...n,children:t})},Be=e=>{let{children:t}=e;return Object(d.jsx)("div",{className:"InfoWrapper",children:t})},Ie=e=>{let{children:t}=e;return Object(d.jsx)("div",{className:"InfoRow",children:t})},He=e=>{let{children:t}=e;return Object(d.jsx)("div",{className:"Column1",children:t})},Re=e=>{let{children:t}=e;return Object(d.jsx)("div",{className:"Column2",children:t})},qe=e=>{let{children:t}=e;return Object(d.jsx)("div",{className:"TextWrapper",children:t})},Me=e=>{let{children:t,lightText:r}=e;return Object(d.jsx)("h1",{className:"Heading "+(r?"lightText":""),children:t})},$e=e=>{let{children:t}=e;return Object(d.jsx)("p",{className:"Subtitle",children:t})};var De=()=>{const[e,t]=Object(n.useState)({name:"",email:"",message:""}),[r,c]=Object(n.useState)(""),{name:i,email:s,message:a}=e,o=r=>{t({...e,[r.target.name]:r.target.value})};return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(ze,{lightBg:!0,id:"contact",children:Object(d.jsx)(Be,{children:Object(d.jsxs)(Ie,{imgStart:!1,children:[Object(d.jsx)(He,{children:Object(d.jsxs)(qe,{children:[Object(d.jsx)(Me,{children:"Contact Us"}),Object(d.jsx)($e,{children:"At Technexus, we're dedicated to making your tech shopping experience smooth, efficient, and personalized. Whether you have questions about our products, need support with your order, or want to share feedback, we're here to help."})]})}),Object(d.jsx)(Re,{children:Object(d.jsx)(Ce,{children:Object(d.jsx)(Te,{children:Object(d.jsxs)(Se,{name:"contact",method:"POST","data-netlify":"true","data-netlify-honeypot":"bot-field",onSubmit:r=>{r.preventDefault(),console.log("Transmitting data:",{"form-name":"contact",...e}),fetch("/api/contact",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((()=>{c("Form submitted successfully!"),t({name:"",email:"",message:""})})).catch((e=>{console.error(e),c("Form submission failed. Please try again later.")}))},children:[Object(d.jsx)("input",{type:"hidden",name:"form-name",value:"contact"}),Object(d.jsx)("p",{hidden:!0,children:Object(d.jsxs)("label",{children:["Don't fill this out: ",Object(d.jsx)(Pe,{name:"bot-field",onChange:o})]})}),Object(d.jsxs)(We,{children:[Object(d.jsxs)(Fe,{htmlFor:"name",children:["Name",Object(d.jsx)(Pe,{type:"text",id:"name",name:"name",value:i,onChange:o,required:!0})]}),Object(d.jsxs)(Fe,{htmlFor:"email",children:["Email",Object(d.jsx)(Pe,{type:"email",id:"email",name:"email",value:s,onChange:o,required:!0})]})]}),Object(d.jsxs)(Fe,{htmlFor:"message",children:["Message",Object(d.jsx)(Ae,{id:"message",name:"message",value:a,onChange:o,required:!0})]}),Object(d.jsx)(Ee,{type:"submit",children:"SUBMIT"}),r&&Object(d.jsx)(Le,{children:r})]})})})})]})})})})};const Ye={id:"discover",lightBg:!0,lightText:!1,lightTextDesc:!1,topLine:"Contact Us",headline:"Technexus",description:"At Technexus, we're dedicated to making your tech shopping experience smooth, efficient, and personalized. Whether you have questions about our products, need support with your order, or want to share feedback, we're here to help.",imgStart:!1,img:r(40).default,alt:"Planet",dark:!1,primary:!1,darkText:!0};var _e=()=>{const[e,t]=Object(n.useState)(!1),r=()=>{t(!e)};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(f,{isOpen:e,toggle:r}),Object(d.jsx)(S,{toggle:r}),Object(d.jsx)($,{}),Object(d.jsx)(pe,{}),Object(d.jsx)(te,{...re}),Object(d.jsx)(De,{...Ye}),Object(d.jsx)(Ne,{})]})},Ue=r(19),Ve=r.n(Ue);function Je(){const{pathname:e}=Object(a.g)();return Object(n.useEffect)((()=>{window.scrollTo(0,0)}),[e]),null}r(72);const Ke=e=>{let{children:t}=e;return Object(d.jsx)("div",{className:"Container",children:t})},Ge=e=>{let{children:t}=e;return Object(d.jsx)("div",{className:"FormWrap",children:t})},Qe=e=>Object(d.jsx)(s.b,{className:"Icon",...e}),Xe=e=>{let{children:t}=e;return Object(d.jsx)("div",{className:"FormContent",children:t})},Ze=e=>{let{children:t,...r}=e;return Object(d.jsx)("form",{className:"Form",...r,children:t})},et=e=>{let{children:t,...r}=e;return Object(d.jsx)("label",{className:"FormLabel",...r,children:t})},tt=e=>Object(d.jsx)("input",{className:"FormInput",...e}),rt=e=>Object(d.jsx)("button",{className:"FormButton",...e}),nt=e=>{let{children:t}=e;return Object(d.jsx)("span",{className:"Text",children:t})},ct=e=>{let{children:t}=e;return Object(d.jsx)("h1",{className:"FormH1",children:t})};var it=()=>{const e=Object(a.f)(),[t,r]=Object(n.useState)(""),[c,i]=Object(n.useState)(""),[s,o]=Object(n.useState)("");return Object(d.jsx)(Ke,{children:Object(d.jsxs)(Ge,{children:[Object(d.jsx)(Qe,{to:"/",children:"Login for Confirm Order"}),Object(d.jsx)(Xe,{children:Object(d.jsxs)(Ze,{onSubmit:r=>{r.preventDefault(),console.log("Email:",t),console.log("Password:",c),fetch("/api/signin",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:t,password:c})}).then((()=>{o("Form submitted successfully!")})).catch((e=>{console.error(e),o("Form submission failed. Please try again later.")})),e.push("/order-confirmation")},children:[Object(d.jsx)(ct,{children:"Sign in to your account"}),Object(d.jsx)(et,{htmlFor:"email",children:"Email"}),Object(d.jsx)(tt,{type:"email",value:t,onChange:e=>r(e.target.value),required:!0}),Object(d.jsx)(et,{htmlFor:"password",children:"Password"}),Object(d.jsx)(tt,{type:"password",value:c,onChange:e=>i(e.target.value),required:!0}),Object(d.jsx)(rt,{type:"submit",children:"Continue"}),Object(d.jsx)(nt,{children:"Forgot Password"})]})})]})})};var st=()=>{const e=Object(a.f)();Object(n.useEffect)((()=>{window.fbAsyncInit=function(){window.FB.init({appId:"YOUR_FACEBOOK_APP_ID",cookie:!0,xfbml:!0,version:"v12.0"})}}),[]);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(Je,{}),Object(d.jsx)(it,{}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Sign In"}),Object(d.jsx)("button",{onClick:()=>{window.FB.login((t=>{if(t.authResponse){const{accessToken:r}=t.authResponse;Ve.a.set("fbToken",r,{expires:1}),e.push("/order-confirmation")}else console.error("User cancelled login or did not fully authorize.")}),{scope:"public_profile,email"})},children:"Continue with Facebook"})]})]})},at=r(20),ot=r(23);const lt=Object(ot.b)({name:"cart",initialState:{cart:[]},reducers:{addToCart:(e,t)=>{const r=e.cart.find((e=>e.id===t.payload.id));r?r.quantity+=1:e.cart.push({...t.payload,quantity:1})},removeFromCart:(e,t)=>{const r=e.cart.find((e=>e.id===t.payload.id));1===r.quantity?e.cart=e.cart.filter((e=>e.id!==t.payload.id)):r.quantity-=1},clearCart:e=>{e.cart=[]}}}),{addToCart:dt,removeFromCart:jt,clearCart:ht}=lt.actions;var bt=lt.reducer;const xt=q.a.div`
  min-height: 100vh;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f9f9f9;
`,mt=q.a.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 64px;
`,pt=q.a.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
`,ut=q.a.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`,Ot=q.a.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`,ft=q.a.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`,gt=q.a.p`
  font-size: 1rem;
  text-align: center;
`,vt=q.a.button`
  border-radius: 20px;
  background: #01bf71;
  white-space: nowrap;
  padding: 8px 16px; /* Make the button thinner */
  color: #fff;
  font-size: 14px;
  outline: none;
  border: none;
  cursor: pointer;
  margin: 5px 0; /* Add margin for spacing */
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #01bf71;
  }
`,yt=(q.a.button`
  border-radius: 20px;
  background: #ff4040;
  white-space: nowrap;
  padding: 8px 16px; /* Make the button thinner */
  color: #fff;
  font-size: 14px;
  outline: none;
  border: none;
  cursor: pointer;
  margin: 5px 0; /* Add margin for spacing */
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #ff4040;
  }
`,q.a.div`
  width: 100%;
  max-width: 800px;
  margin-top: 40px;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  text-align: center;
`),wt=q.a.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
`,kt=q.a.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 20px;
  text-align: left;
`,Nt=q.a.li`
  font-size: 1rem;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f1f1f1;
`,Ct=q.a.button`
  border-radius: 5px;
  background: #ff4040;
  white-space: nowrap;
  padding: 5px 10px;
  color: #fff;
  font-size: 12px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #ff4040;
  }
`,Tt=q.a.h3`
  font-size: 1.5rem;
  color: #333;
`,St=[{id:1,name:"LAPTOP",image:ne,price:1200},{id:2,name:"CAMERA",image:ce,price:800},{id:3,name:"PRO VIDEO",image:ie,price:1500},{id:4,name:"SMART WATCH",image:se,price:300},{id:5,name:"SMART PHONE",image:ae,price:1e3},{id:6,name:"TABLETS",image:oe,price:700}];var Ft=()=>{const e=Object(at.b)(),t=Object(a.f)(),r=Object(at.c)((e=>e.cart.cart)),n=r.reduce(((e,t)=>e+t.price*t.quantity),0);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(f,{}),Object(d.jsx)(S,{}),Object(d.jsxs)(xt,{children:[Object(d.jsx)(mt,{children:"Shop Our Products"}),Object(d.jsx)(pt,{children:St.map((t=>Object(d.jsxs)(ut,{children:[Object(d.jsx)(Ot,{src:t.image}),Object(d.jsx)(ft,{children:t.name}),Object(d.jsxs)(gt,{children:["Price: $",t.price]}),Object(d.jsx)(vt,{onClick:()=>e(dt(t)),children:"Add to Cart"})]},t.id)))}),Object(d.jsxs)(yt,{children:[Object(d.jsx)(wt,{children:"Cart Summary"}),0===r.length?Object(d.jsx)("p",{children:"Your cart is empty"}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(kt,{children:r.map(((t,r)=>Object(d.jsxs)(Nt,{children:[t.name," - $",t.price," x ",t.quantity,Object(d.jsx)(Ct,{onClick:()=>e(jt(t)),children:"Remove"})]},r)))}),Object(d.jsxs)(Tt,{children:["Total: $",n]}),Object(d.jsx)(vt,{onClick:()=>{t.push("/checkout",{cart:r,total:n})},children:"Proceed to Checkout"})]})]})]}),Object(d.jsx)(Ne,{})]})};const Pt=q.a.div`
  min-height: 100vh;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f9f9f9;
`,At=q.a.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 800px;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`,Et=q.a.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
`,Lt=q.a.div`
  font-size: 1rem;
  padding: 10px 0;
  border-bottom: 1px solid #f1f1f1;
  width: 100%;
  text-align: left;
`,Wt=q.a.h3`
  font-size: 1.5rem;
  margin-top: 20px;
  color: #333;
`,zt=q.a.button`
  margin-top: 20px;
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #01bf71;
  }
`;var Bt=()=>{const e=Object(a.g)(),t=Object(a.f)(),{cart:r,total:c}=e.state||{cart:[],total:0};return Object(n.useEffect)((()=>{Ve.a.get("fbToken")||t.push("/signin")}),[t]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(f,{}),Object(d.jsx)(S,{}),Object(d.jsxs)(Pt,{children:[Object(d.jsx)(Et,{children:"Order Summary"}),Object(d.jsx)(At,{children:0===r.length?Object(d.jsx)("p",{children:"Your cart is empty."}):Object(d.jsxs)(d.Fragment,{children:[r.map(((e,t)=>Object(d.jsxs)(Lt,{children:[e.name," - $",e.price," x ",e.quantity]},t))),Object(d.jsxs)(Wt,{children:["Total: $",c]}),Object(d.jsx)(zt,{onClick:()=>t.push("/order-confirmation"),children:"Proceed to Order Confirmation"})]})})]}),Object(d.jsx)(Ne,{})]})};var It=()=>{const e=Object(a.f)();return Object(n.useEffect)((()=>{alert("Order Confirmed!");const t=setTimeout((()=>{alert("Session expired. You will be logged out."),Ve.a.remove("fbToken"),e.push("/signin")}),6e4);return()=>clearTimeout(t)}),[e]),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Order Confirmed!"}),Object(d.jsx)("p",{children:"Your order is being processed. You will be logged out in 1 minute."})]})};var Ht=function(){return Object(d.jsx)(s.a,{children:Object(d.jsxs)(a.c,{children:[Object(d.jsx)(a.a,{path:"/",component:_e,exact:!0}),Object(d.jsx)(a.a,{path:"/shop",component:Ft,exact:!0}),Object(d.jsx)(a.a,{path:"/checkout",component:Bt,exact:!0}),Object(d.jsx)(a.a,{path:"/signin",component:st,exact:!0}),Object(d.jsx)(a.a,{path:"/order-confirmation",component:It,exact:!0})," "]})})};const Rt=Object(ot.a)({reducer:{cart:bt}});i.a.render(Object(d.jsx)(at.a,{store:Rt,children:Object(d.jsx)(Ht,{})}),document.getElementById("root")),"serviceWorker"in navigator&&window.addEventListener("load",(()=>{navigator.serviceWorker.register("/serviceWorker.js").then((e=>{console.log("ServiceWorker registration successful with scope: ",e.scope)})).catch((e=>{console.error("ServiceWorker registration failed: ",e)}))}))}},[[74,1,2]]]);
//# sourceMappingURL=main.9d8be043.chunk.js.map