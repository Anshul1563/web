_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{"1T6e":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"};t.default=a},"30+C":function(e,t,n){"use strict";var a=n("wx14"),r=n("Ff2n"),i=n("q1tI"),o=(n("17x9"),n("iuhU")),s=n("kKAo"),c=n("H2TA"),l=i.forwardRef((function(e,t){var n=e.classes,c=e.className,l=e.raised,d=void 0!==l&&l,u=Object(r.a)(e,["classes","className","raised"]);return i.createElement(s.a,Object(a.a)({className:Object(o.a)(n.root,c),elevation:d?8:1,ref:t},u))}));t.a=Object(c.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(l)},"5UwM":function(e,t,n){"use strict";function a(e,t){return function(){return null}}n.r(t),n.d(t,"chainPropTypes",(function(){return a})),n.d(t,"deepmerge",(function(){return r.a})),n.d(t,"elementAcceptingRef",(function(){return c})),n.d(t,"elementTypeAcceptingRef",(function(){return l})),n.d(t,"exactProp",(function(){return d})),n.d(t,"formatMuiErrorMessage",(function(){return u.a})),n.d(t,"getDisplayName",(function(){return v})),n.d(t,"HTMLElementType",(function(){return y})),n.d(t,"ponyfillGlobal",(function(){return j})),n.d(t,"refType",(function(){return x}));var r=n("2+6g"),i=n("17x9"),o=n.n(i);var s=(o.a.element,function(){return null});s.isRequired=(o.a.element.isRequired,function(){return null});var c=s;var l=(i.elementType,function(){return null});n("rePB"),n("wx14");function d(e){return e}var u=n("TrhM"),f=n("U8pU"),p=n("TOwV"),h=/^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;function b(e){var t="".concat(e).match(h);return t&&t[1]||""}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.displayName||e.name||b(e)||t}function g(e,t,n){var a=m(t);return e.displayName||(""!==a?"".concat(n,"(").concat(a,")"):n)}function v(e){if(null!=e){if("string"===typeof e)return e;if("function"===typeof e)return m(e,"Component");if("object"===Object(f.a)(e))switch(e.$$typeof){case p.ForwardRef:return g(e,e.render,"ForwardRef");case p.Memo:return g(e,e.type,"memo");default:return}}}function y(e,t,n,a,r){return null}var j="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),x=o.a.oneOfType([o.a.func,o.a.object])},"8OQS":function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r},e.exports.default=e.exports,e.exports.__esModule=!0},"8rdq":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",A100:"#ff80ab",A200:"#ff4081",A400:"#f50057",A700:"#c51162"};t.default=a},Lozw:function(e,t,n){"use strict";var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.primary,n=void 0===t?{light:l.default[300],main:l.default[500],dark:l.default[700]}:t,a=e.secondary,y=void 0===a?{light:d.default.A200,main:d.default.A400,dark:d.default.A700}:a,j=e.error,x=void 0===j?{light:u.default[300],main:u.default[500],dark:u.default[700]}:j,O=e.warning,w=void 0===O?{light:f.default[300],main:f.default[500],dark:f.default[700]}:O,k=e.info,P=void 0===k?{light:p.default[300],main:p.default[500],dark:p.default[700]}:k,S=e.success,A=void 0===S?{light:h.default[300],main:h.default[500],dark:h.default[700]}:S,E=e.type,M=void 0===E?"light":E,C=e.contrastThreshold,T=void 0===C?3:C,_=e.tonalOffset,N=void 0===_?.2:_,I=(0,i.default)(e,["primary","secondary","error","warning","info","success","type","contrastThreshold","tonalOffset"]);function R(e){return(0,b.getContrastRatio)(e,g.text.primary)>=T?g.text.primary:m.text.primary}var D=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:300,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:700;if(!(e=(0,r.default)({},e)).main&&e[t]&&(e.main=e[t]),!e.main)throw new Error((0,o.formatMuiErrorMessage)(4,t));if("string"!==typeof e.main)throw new Error(_formatMuiErrorMessage(5,JSON.stringify(e.main)));return v(e,"light",n,N),v(e,"dark",a,N),e.contrastText||(e.contrastText=R(e.main)),e},W={dark:g,light:m};0;return(0,o.deepmerge)((0,r.default)({common:s.default,type:M,primary:D(n),secondary:D(y,"A400","A200","A700"),error:D(x),warning:D(w),info:D(P),success:D(A),grey:c.default,contrastThreshold:T,getContrastText:R,augmentColor:D,tonalOffset:N},W[M]),I)},t.dark=t.light=void 0;var r=a(n("pVnL")),i=a(n("QILm")),o=n("5UwM"),s=a(n("sAgZ")),c=a(n("sFvP")),l=a(n("xJ30")),d=a(n("8rdq")),u=a(n("fWIC")),f=a(n("1T6e")),p=a(n("vqLa")),h=a(n("VvZr")),b=n("wClv"),m={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",hint:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:s.default.white,default:c.default[50]},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}};t.light=m;var g={text:{primary:s.default.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",hint:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:c.default[800],default:"#303030"},action:{active:s.default.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function v(e,t,n,a){var r=a.light||a,i=a.dark||1.5*a;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:"light"===t?e.light=(0,b.lighten)(e.main,r):"dark"===t&&(e.dark=(0,b.darken)(e.main,i)))}t.dark=g},QILm:function(e,t,n){var a=n("8OQS");e.exports=function(e,t){if(null==e)return{};var n,r,i=a(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i},e.exports.default=e.exports,e.exports.__esModule=!0},RNiq:function(e,t,n){"use strict";n.r(t);var a=n("nKUr"),r=n("vJKn"),i=n.n(r),o=n("rg98"),s=n("cpVT"),c=n("q1tI"),l=n.n(c),d=n("5Yp1"),u=n("Ji2X"),f=n("Lozw"),p=n("ZPUd"),h=n.n(p),b=n("6u8J"),m=n("tRbT"),g=n("oa/T"),v=n("ofer"),y=n("30+C"),j=n("Ie8z"),x=n("kfFl"),O=n("bXiM"),w=n("lO0E"),k=n("PsDL");n("jvO9");function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var S={fontFamily:"Poppins, sans-serif",textAlign:"center",fontSize:"3.5rem",color:"#8bc34a"},A={fontFamily:"Red Hat Display, sans-serif",fontSize:"1.8rem",marginBottom:"150px",textAlign:"center",color:"white"},E={fontSize:"1.25rem",textAlign:"left",color:"#8bc34a"},M={fontSize:"3rem",textAlign:"center",color:"#8bc34a"},C={display:"flex",flexDirection:"column"},T=[{name:"Prof. Rajasekar M",designation:"Associate Professor",org:"PES University",description:"Prof. M Rajasekar is an Associate Professor in the department of Electronics and Communication Engineering at PES University. He is an alumnus of IIT Madras (Computer Science and Engineering). He brings with him over two decades of rich and varied experience ranging from combatant in Indian Air Force to Systems Engineer and Project Manager in the IT Industry. He manages the PES Innovation Lab at the PES University. He has been actively involved in various projects undertaken at PES Innovation Lab. His research interests include wireless communications, embedded systems and healthcare systems. He handholds student projects in several domains viz. Robotics, IoT, Machine Learning, Sensor Networks and Virtual Reality. Recently, he presented his project works in the International Conferences (TENCON) held in Singapore, Malaysia and Jeju,South Korea. He is an astute listener and motivator.",image:"".concat("/web","/images/mlab/Rajasekar_profile.jpg")},{name:"Dr. Venkatarangan MJ",designation:"Professor",org:"PES University",description:"After leaving Philips in 2015 to follow his passion towards teaching and research, Dr. Venkatarangan joined PES University as the Associate Professor in EEE to focus on Embedded Systems stream. Prior to joining PES University, he spent 20 years in Tektronix, Siemens, HCL Technologies and Philips working in India and abroad serving in roles right from Software Engineer to System Architect. As System Architect he was on technical lead for projects across sites and also supported cross functions like program or purchase management, quality and product strategy for platform evaluation, supplier evaluation and product road-mapping. A significant achievement has been to lead as Architect for first Digital TV for US market and also to develop MP3 Audio products adhering to Microsoft PlaysForSure specifications. Rangan is an alumnus of Chinese University of Hong Kong where he completed is PhD and holds M.Tech and B.E from Mysore University. He current teaches Microcontroller and Applications, Signals and Systems, 'C' Programming and Intoduction to Robotics. His research interests include embedded systems, IoT, Robotics, Automation and Sensor networks.He supports the PES Innovation Lab activities and summer internship projects in domains of embedded systems, IoT Robotics and Automation.",image:"".concat("/web","/images/mlab/Venkatarangan_profile.jpg")},{name:"Dr. A Srinivas",designation:"Founder",org:"PES Innovation Lab",description:"Dr. A Srinivas is the faculty founder of PES Innovation Lab (formerly known as Microsoft Innovation Lab). He is presently the Dean, School of Engineering in Dayananda Sagar University. He has worked for 10 years in Companies/Research Organizations Such as Tata Consulting Engineers, Centre for AI & amp; Robotics (DRDO), Philips Software Centre and Nortel Networks (Sydney,Australia). Academic experience of 19 yrs with KREC, Surathkal, Amrita University, PES University and Monash University (Melbourne, Australia). His Areas of Research Interest: Wireless Networks, Healthcare Informatics. He is extremely passionate about promoting Undergraduate Research.",image:"".concat("/web","/images/mlab/Srinivas_profile.jpg")}],_=l.a.forwardRef((function(e,t){return Object(a.jsx)(b.a,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({direction:"up",ref:t},e))}));t.default=function(){var e=Object(c.useState)({stats:[]}),t=e[0],n=e[1];Object(c.useEffect)((function(){(function(){var e=Object(o.a)(i.a.mark((function e(){var t,a,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api-vercel-mlabwebdev.vercel.app/stats");case 2:return t=e.sent,e.next=5,t.status;case 5:if(e.t0=e.sent,200===e.t0){e.next=10;break}alert("API Error. Try again later"),e.next=16;break;case 10:return e.next=12,t.json();case 12:for(o in a=e.sent,r=[],a)r.push({key:o,data:a[o]});n({stats:r});case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var r=Object(c.useState)(!1),s=r[0],l=r[1],p=Object(c.useState)(T[0]),b=p[0],P=p[1];return Object(a.jsxs)(d.a,{title:"PES Innovation Lab",active:"Home",children:[Object(a.jsx)("div",{className:"introSection",children:Object(a.jsxs)(u.a,{children:[Object(a.jsx)("p",{style:S,children:"PES Innovation Lab"}),Object(a.jsx)("blockquote",{style:A,children:"We are a student community dedicated to cultivating the spirit of research and innovation in budding engineers."})]})}),Object(a.jsxs)(u.a,{children:[Object(a.jsx)("p",{id:"about_title",style:M,children:"ABOUT US"}),Object(a.jsxs)("p",{id:"about_content",style:E,className:f.light,children:["PIL is a unique community which inculcates the spirit of student research. Students work with like-minded peers to try and solve carefully chosen real-world problems. The Lab\u2019s activities include the flagship summer internship, HashCode (a hackathon), RoadShow (A project presentation event) and other enriching opportunities such as workshops and tutorials.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"Students here, routinely push the boundaries of research by developing products to benefit the masses and publishing their work in conferences and journals of repute. Interns continue working with the lab while in college, sharing insights, starting new projects and mentoring subsequent batches of student interns.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"Over the years, the members of PIL have grown into a close-knit family who contribute to the lab long after their graduation."]})]}),Object(a.jsx)("div",{className:"statSection",children:Object(a.jsx)(u.a,{children:Object(a.jsx)(m.a,{container:!0,justify:"center",children:t.stats.map((function(e){return Object(a.jsx)(m.a,{item:!0,sm:3,xs:12,justify:"center",children:Object(a.jsxs)(g.a,{style:{textAlign:"center"},children:[Object(a.jsx)(v.a,{className:"statValue",component:"p",children:e.data}),Object(a.jsx)(v.a,{className:"statTitle",children:e.key})]})},e.key)}))})})}),Object(a.jsx)("p",{id:"about_title",style:M,children:"PROFESSORS"}),Object(a.jsx)(u.a,{children:Object(a.jsx)(m.a,{container:!0,justify:"center",className:"profContainer",children:T.map((function(e){return Object(a.jsx)(m.a,{item:!0,md:4,sm:12,xs:12,justify:"center",style:{textAlign:"center",alignItems:"center"},children:Object(a.jsxs)(y.a,{className:"profCard",onClick:function(){!function(e){P(e),l(!0)}(e)},children:[Object(a.jsx)(j.a,{className:"profImage",image:e.image,title:e.designation}),Object(a.jsx)("div",{style:C,children:Object(a.jsxs)(g.a,{children:[Object(a.jsx)(v.a,{component:"h5",variant:"h5",className:"profCardDescription",children:e.name}),Object(a.jsx)(v.a,{className:"profCardDescription",children:e.designation})]})})]})},e.name)}))})}),Object(a.jsxs)(x.a,{fullScreen:!0,open:s,onClose:function(){l(!1)},TransitionComponent:_,PaperProps:{className:"dialogContainer"},children:[Object(a.jsx)(O.a,{className:"dialogAppBar",children:Object(a.jsxs)(w.a,{children:[Object(a.jsx)(v.a,{variant:"h6",className:"dialogTitle",children:b.name}),Object(a.jsx)(k.a,{edge:"start",color:"inherit",onClick:function(){l(!1)},children:Object(a.jsx)(h.a,{style:{float:"right",color:"#8bc34a"}})})]})}),Object(a.jsxs)(u.a,{style:{marginTop:"5em"},children:[Object(a.jsx)(j.a,{style:{maxWidth:"250px",margin:"auto",height:"300px",marginTop:30,marginBottom:30},image:b.image,className:"profImage"}),Object(a.jsx)(v.a,{className:"profDialogContentHeading",children:b.name}),Object(a.jsxs)(v.a,{className:"profDialogContentSubHeading",children:[b.designation," | ",b.org]}),Object(a.jsx)("br",{}),Object(a.jsx)(v.a,{className:"profDialogContentDescription",children:b.description})]})]})]})}},VvZr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"};t.default=a},ZPUd:function(e,t,n){"use strict";var a=n("TqRt"),r=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("q1tI")),o=(0,a(n("8/g6")).default)(i.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.default=o},fWIC:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"};t.default=a},kfFl:function(e,t,n){"use strict";var a=n("wx14"),r=n("Ff2n"),i=n("rePB"),o=n("q1tI"),s=(n("17x9"),n("iuhU")),c=n("H2TA"),l=n("NqtD"),d=n("Xt1q"),u=n("+Isj"),f=n("kKU3"),p=n("wpWl"),h=n("kKAo"),b={enter:p.b.enteringScreen,exit:p.b.leavingScreen},m=o.forwardRef((function(e,t){var n=e.BackdropProps,i=e.children,c=e.classes,p=e.className,m=e.disableBackdropClick,g=void 0!==m&&m,v=e.disableEscapeKeyDown,y=void 0!==v&&v,j=e.fullScreen,x=void 0!==j&&j,O=e.fullWidth,w=void 0!==O&&O,k=e.maxWidth,P=void 0===k?"sm":k,S=e.onBackdropClick,A=e.onClose,E=e.onEnter,M=e.onEntered,C=e.onEntering,T=e.onEscapeKeyDown,_=e.onExit,N=e.onExited,I=e.onExiting,R=e.open,D=e.PaperComponent,W=void 0===D?h.a:D,H=e.PaperProps,U=void 0===H?{}:H,B=e.scroll,L=void 0===B?"paper":B,F=e.TransitionComponent,q=void 0===F?f.a:F,K=e.transitionDuration,V=void 0===K?b:K,z=e.TransitionProps,J=e["aria-describedby"],X=e["aria-labelledby"],$=Object(r.a)(e,["BackdropProps","children","classes","className","disableBackdropClick","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","onEnter","onEntered","onEntering","onEscapeKeyDown","onExit","onExited","onExiting","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps","aria-describedby","aria-labelledby"]),Z=o.useRef();return o.createElement(d.a,Object(a.a)({className:Object(s.a)(c.root,p),BackdropComponent:u.a,BackdropProps:Object(a.a)({transitionDuration:V},n),closeAfterTransition:!0},g?{disableBackdropClick:g}:{},{disableEscapeKeyDown:y,onEscapeKeyDown:T,onClose:A,open:R,ref:t},$),o.createElement(q,Object(a.a)({appear:!0,in:R,timeout:V,onEnter:E,onEntering:C,onEntered:M,onExit:_,onExiting:I,onExited:N,role:"none presentation"},z),o.createElement("div",{className:Object(s.a)(c.container,c["scroll".concat(Object(l.a)(L))]),onMouseUp:function(e){e.target===e.currentTarget&&e.target===Z.current&&(Z.current=null,S&&S(e),!g&&A&&A(e,"backdropClick"))},onMouseDown:function(e){Z.current=e.target}},o.createElement(W,Object(a.a)({elevation:24,role:"dialog","aria-describedby":J,"aria-labelledby":X},U,{className:Object(s.a)(c.paper,c["paperScroll".concat(Object(l.a)(L))],c["paperWidth".concat(Object(l.a)(String(P)))],U.className,x&&c.paperFullScreen,w&&c.paperFullWidth)}),i))))}));t.a=Object(c.a)((function(e){return{root:{"@media print":{position:"absolute !important"}},scrollPaper:{display:"flex",justifyContent:"center",alignItems:"center"},scrollBody:{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}},container:{height:"100%","@media print":{height:"auto"},outline:0},paper:{margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},paperScrollPaper:{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},paperScrollBody:{display:"inline-block",verticalAlign:"middle",textAlign:"left"},paperWidthFalse:{maxWidth:"calc(100% - 64px)"},paperWidthXs:{maxWidth:Math.max(e.breakpoints.values.xs,444),"&$paperScrollBody":Object(i.a)({},e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+64),{maxWidth:"calc(100% - 64px)"})},paperWidthSm:{maxWidth:e.breakpoints.values.sm,"&$paperScrollBody":Object(i.a)({},e.breakpoints.down(e.breakpoints.values.sm+64),{maxWidth:"calc(100% - 64px)"})},paperWidthMd:{maxWidth:e.breakpoints.values.md,"&$paperScrollBody":Object(i.a)({},e.breakpoints.down(e.breakpoints.values.md+64),{maxWidth:"calc(100% - 64px)"})},paperWidthLg:{maxWidth:e.breakpoints.values.lg,"&$paperScrollBody":Object(i.a)({},e.breakpoints.down(e.breakpoints.values.lg+64),{maxWidth:"calc(100% - 64px)"})},paperWidthXl:{maxWidth:e.breakpoints.values.xl,"&$paperScrollBody":Object(i.a)({},e.breakpoints.down(e.breakpoints.values.xl+64),{maxWidth:"calc(100% - 64px)"})},paperFullWidth:{width:"calc(100% - 64px)"},paperFullScreen:{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,"&$paperScrollBody":{margin:0,maxWidth:"100%"}}}}),{name:"MuiDialog"})(m)},"oa/T":function(e,t,n){"use strict";var a=n("wx14"),r=n("Ff2n"),i=n("q1tI"),o=(n("17x9"),n("iuhU")),s=n("H2TA"),c=i.forwardRef((function(e,t){var n=e.classes,s=e.className,c=e.component,l=void 0===c?"div":c,d=Object(r.a)(e,["classes","className","component"]);return i.createElement(l,Object(a.a)({className:Object(o.a)(n.root,s),ref:t},d))}));t.a=Object(s.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(c)},pVnL:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,n.apply(this,arguments)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},sAgZ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={black:"#000",white:"#fff"};t.default=a},sFvP:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#d5d5d5",A200:"#aaaaaa",A400:"#303030",A700:"#616161"};t.default=a},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},vqLa:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"};t.default=a},wClv:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.hexToRgb=i,t.rgbToHex=function(e){if(0===e.indexOf("#"))return e;var t=s(e).values;return"#".concat(t.map((function(e){return function(e){var t=e.toString(16);return 1===t.length?"0".concat(t):t}(e)})).join(""))},t.hslToRgb=o,t.decomposeColor=s,t.recomposeColor=c,t.getContrastRatio=function(e,t){var n=l(e),a=l(t);return(Math.max(n,a)+.05)/(Math.min(n,a)+.05)},t.getLuminance=l,t.emphasize=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.15;return l(e)>.5?u(e,t):f(e,t)},t.fade=function(e,t){0;return d(e,t)},t.alpha=d,t.darken=u,t.lighten=f;var a=n("5UwM");function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Math.min(Math.max(t,e),n)}function i(e){e=e.substr(1);var t=new RegExp(".{1,".concat(e.length>=6?2:1,"}"),"g"),n=e.match(t);return n&&1===n[0].length&&(n=n.map((function(e){return e+e}))),n?"rgb".concat(4===n.length?"a":"","(").concat(n.map((function(e,t){return t<3?parseInt(e,16):Math.round(parseInt(e,16)/255*1e3)/1e3})).join(", "),")"):""}function o(e){var t=(e=s(e)).values,n=t[0],a=t[1]/100,r=t[2]/100,i=a*Math.min(r,1-r),o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(e+n/30)%12;return r-i*Math.max(Math.min(t-3,9-t,1),-1)},l="rgb",d=[Math.round(255*o(0)),Math.round(255*o(8)),Math.round(255*o(4))];return"hsla"===e.type&&(l+="a",d.push(t[3])),c({type:l,values:d})}function s(e){if(e.type)return e;if("#"===e.charAt(0))return s(i(e));var t=e.indexOf("("),n=e.substring(0,t);if(-1===["rgb","rgba","hsl","hsla"].indexOf(n))throw new Error((0,a.formatMuiErrorMessage)(3,e));var r=e.substring(t+1,e.length-1).split(",");return{type:n,values:r=r.map((function(e){return parseFloat(e)}))}}function c(e){var t=e.type,n=e.values;return-1!==t.indexOf("rgb")?n=n.map((function(e,t){return t<3?parseInt(e,10):e})):-1!==t.indexOf("hsl")&&(n[1]="".concat(n[1],"%"),n[2]="".concat(n[2],"%")),"".concat(t,"(").concat(n.join(", "),")")}function l(e){var t="hsl"===(e=s(e)).type?s(o(e)).values:e.values;return t=t.map((function(e){return(e/=255)<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)})),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function d(e,t){return e=s(e),t=r(t),"rgb"!==e.type&&"hsl"!==e.type||(e.type+="a"),e.values[3]=t,c(e)}function u(e,t){if(e=s(e),t=r(t),-1!==e.type.indexOf("hsl"))e.values[2]*=1-t;else if(-1!==e.type.indexOf("rgb"))for(var n=0;n<3;n+=1)e.values[n]*=1-t;return c(e)}function f(e,t){if(e=s(e),t=r(t),-1!==e.type.indexOf("hsl"))e.values[2]+=(100-e.values[2])*t;else if(-1!==e.type.indexOf("rgb"))for(var n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;return c(e)}},xJ30:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",A100:"#8c9eff",A200:"#536dfe",A400:"#3d5afe",A700:"#304ffe"};t.default=a}},[["vlRD",0,2,1,3,5,6,4]]]);