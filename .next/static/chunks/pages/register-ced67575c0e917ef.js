(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{4722:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return a(4075)}])},4075:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return h}});var i=a(5893),l=a(6276),n=a(1664),r=a.n(n),c={src:"/_next/static/media/regimg.0beb39f2.png",height:644,width:830,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAxklEQVR42mPoy4pmF1i2Y07ctr3bFuzfsGHGns0bZx7YuH7F2T075p465MjAUFTG13Hu3rt9t8//f/tgw//H99b//3Bn2/8Le+b9P39yRjoDg+tEDoYDt+9suHHu/+MXR348uX/257uj+7+fm+X//9jevgSG/69XWhQeOft/weXT//9cnvv/1eGd/789WP3/w/qs/48vL0xn+H99gljPjsPrZ5wBaltstvvp9pI9X55t2Hl/ZfXDm+cWeDDgAnXeDt4MDAyMAK77cf9n3s8dAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:6},t=a(5675),d=a.n(t),m=a(7294),o=a(5121);function h(){let[e,s]=(0,m.useState)({email:"",password:"",name:"",phone:""}),a=a=>{let{name:i,value:l}=a.target;s({...e,[i]:l})},n=async s=>{if(s.preventDefault(),e.email&&e.password)try{let s=await o.Z.post("/api/register",e);console.log("Registration successful. Response status:",null==s?void 0:s.status)}catch(e){console.error("Registration failed:",e.message)}};return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"m-application theme--dark transition-page",id:"app",children:[(0,i.jsx)("div",{className:"loading"}),(0,i.jsx)("div",{className:"m-content smart smart-var",id:"main-wrap",children:(0,i.jsx)("div",{id:"register-page",children:(0,i.jsxs)("div",{className:"main-wrap",children:[(0,i.jsx)("header",{className:"app-bar header",id:"header",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"header-content",children:(0,i.jsxs)("nav",{className:"nav-menu flex-grow-1",children:[(0,i.jsx)("div",{className:"logo flex-grow-1 start-mobile",children:(0,i.jsx)(r(),{href:"/",children:(0,i.jsx)("span",{className:"logo-main landscape medium",children:(0,i.jsx)("img",{src:"https://cdn.global.noobsverse.com/cc.flowbus/assets/images/updated/flow-logo.svg",alt:"logo"})})})}),(0,i.jsxs)("nav",{className:"user-menu",children:[(0,i.jsx)(r(),{className:"btn primary waves-effect",href:"/login",children:"login"}),(0,i.jsx)("span",{className:"spacer vertical-divider show-md-up"}),(0,i.jsx)("div",{className:"menu-setting"})]})]})})})}),(0,i.jsx)("div",{className:"container-general container-front",children:(0,i.jsx)("div",{className:"form-style",children:(0,i.jsx)("div",{className:"page-wrap",children:(0,i.jsx)("div",{className:"container inner-wrap",children:(0,i.jsx)("div",{className:"auth-frame",children:(0,i.jsxs)("div",{className:"row mb-0",children:[(0,i.jsx)("div",{className:"col-md-6 px-lg-6 px-2",children:(0,i.jsx)("div",{className:"card form-box fragment-fadeUp",children:(0,i.jsx)("div",{className:"form-wrap",children:(0,i.jsxs)("div",{className:"form-style",children:[(0,i.jsx)("div",{className:"head",children:(0,i.jsx)("h4",{className:"use-text-title mq-md-up use-text-primary","data-class":"use-text-subtitle",children:"Create new account"})}),(0,i.jsxs)("div",{className:"socmed-side-login",children:[(0,i.jsxs)("button",{className:"btn navi-btn waves-effect",children:[(0,i.jsx)("i",{className:"ion-social-facebook left"}),"Facebook"]}),(0,i.jsxs)("button",{className:"btn blue-btn waves-effect",children:[(0,i.jsx)("i",{className:"ion-social-twitter left"}),"Twitter"]}),(0,i.jsxs)("button",{className:"btn red-btn waves-effect",children:[(0,i.jsx)("i",{className:"ion-social-google left"}),"Google"]})]}),(0,i.jsx)("div",{className:"separator",children:(0,i.jsx)("p",{children:"Or register with email"})}),(0,i.jsxs)("form",{onSubmit:n,id:"register_form",method:"post",children:[(0,i.jsxs)("div",{className:"row spacing3 mb-0",children:[(0,i.jsx)("div",{className:"col-sm-12",children:(0,i.jsxs)("div",{className:"input-field dark",children:[(0,i.jsx)("input",{className:"validate",id:"name",type:"text",name:"name",value:e.name,onChange:a,required:!0}),(0,i.jsx)("label",{htmlFor:"name",children:"Name *"})]})}),(0,i.jsx)("div",{className:"col-sm-12",children:(0,i.jsxs)("div",{className:"input-field dark",children:[(0,i.jsx)("input",{className:"validate",id:"email",type:"email",name:"email",value:e.email,onChange:a,required:!0}),(0,i.jsx)("label",{htmlFor:"email",children:"Email *"})]})}),(0,i.jsx)("div",{className:"col-md-6",children:(0,i.jsxs)("div",{className:"input-field dark mq-md-up","data-class":"me-2",children:[(0,i.jsx)("input",{className:"validate",id:"phone",type:"text",name:"phone",value:e.phone,onChange:a,required:!0}),(0,i.jsx)("label",{htmlFor:"phone",children:"Phone Number"})]})}),(0,i.jsx)("div",{className:"col-md-6",children:(0,i.jsxs)("div",{className:"input-field dark mq-md-up","data-class":"me-2",children:[(0,i.jsx)("input",{className:"validate",id:"password",type:"password",name:"password",value:e.password,onChange:a,required:!0}),(0,i.jsx)("label",{htmlFor:"password",children:"Password"})]})}),(0,i.jsx)("div",{className:"col-md-6",children:(0,i.jsxs)("div",{className:"input-field dark mq-md-up","data-class":"ms-2",children:[(0,i.jsx)("input",{className:"validate",id:"confirm",type:"password",name:"confirm","data-validation":"confirmation","data-validation-confirm":"password",required:!0}),(0,i.jsx)("label",{htmlFor:"confirm",children:"Confirm Password"})]})})]}),(0,i.jsxs)("div",{className:"btn-area",children:[(0,i.jsx)("div",{className:"form-helper",children:(0,i.jsx)("div",{className:"form-control-label",children:(0,i.jsxs)("label",{children:[(0,i.jsx)("input",{className:"filled-in secondary",type:"checkbox",required:!0}),(0,i.jsxs)("span",{children:["I have read and accept the Terms of"," ",(0,i.jsx)("a",{className:"link",href:"#",children:"Service & Privacy Policy *"})]})]})})}),(0,i.jsx)("div",{className:"mt-4",children:(0,i.jsx)("button",{className:"btn primary btn-large waves-effect",type:"submit",children:"Continue"})})]})]})]})})})}),(0,i.jsx)("div",{className:"col-md-6",children:(0,i.jsx)("div",{className:"hidden-sm-down",children:(0,i.jsxs)("div",{className:"greeting",children:[(0,i.jsx)("h4",{className:"use-text-title2 use-text-primary pb-2",children:"Just register to join with us"}),(0,i.jsx)("h6",{className:"use-text-subtitle2",children:"A platform with efficient integration of many features and so much more"}),(0,i.jsx)("div",{className:"img",children:(0,i.jsx)(d(),{className:"img-2d3d",src:c,alt:"register"})})]})})})]})})})})})}),(0,i.jsx)(l.Z,{})]})})})]})})}}},function(e){e.O(0,[1664,5121,5675,6276,2888,9774,179],function(){return e(e.s=4722)}),_N_E=e.O()}]);