_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{CNBd:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hashcode",function(){return a("HliT")}])},HliT:function(e,t,a){"use strict";a.r(t);var n=a("nKUr"),s=a("vJKn"),i=a.n(s),c=a("rg98"),r=a("5Yp1"),o=a("R/WZ"),l=a("Ie8z"),h=a("Ji2X"),d=a("ofer"),j=a("tRbT"),m=a("J3NM"),b=a.n(m),u=a("q1tI"),p=a("iae6"),x=(a("vTTe"),a("FKgC"),Object(o.a)({subtitleStyle:{fontSize:"1.5rem",color:"white",textAlign:"center"},eventBodyStyle:{fontSize:"1.5rem",color:"white",textAlign:"left",marginTop:"1em",marginBottom:"1em"},spinnerTextStyle:{textAlign:"center",color:"#7cb342"}})),g=function(e){var t=e.img;return Object(n.jsx)(l.a,{className:"sliderImage",image:t})};t.default=function(){var e=x(),t=Object(u.useState)({events:[]}),a=t[0],s=t[1],o=Object(u.useState)(!1),l=o[0],m=o[1];return Object(u.useEffect)((function(){(function(){var e=Object(c.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api-vercel-mlabwebdev.vercel.app//events/hashcode");case 2:return t=e.sent,e.next=5,t.status;case 5:if(e.t0=e.sent,200===e.t0){e.next=10;break}alert("API Error. Try again later"),e.next=14;break;case 10:return e.next=12,t.json();case 12:a=e.sent,s({events:a});case 14:m(!0);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.jsxs)(r.a,{title:"PIL | Hashcode",active:"Hashcode",children:[Object(n.jsx)("div",{className:"hashCodeHeadSection",children:Object(n.jsxs)(h.a,{children:[Object(n.jsx)(d.a,{className:"pageHeader",children:"HashCode"}),Object(n.jsx)(d.a,{className:e.subtitleStyle,children:"Hungry to Innovate? Grab a Byte."}),Object(n.jsx)(d.a,{className:e.subtitleStyle,style:{marginTop:40},children:"HashCode is the annual 24-hour hackathon organised by the Lab, with students proposing interesting ideas and presenting projects from several domains. The hackathon also provides a learning platform to participating teams, with mentors and members of academia assisting them. Esteemed personalities from different industrial backgrounds come to judge the show, evaluating projects from all possible angles. HashCode 2019 would be the 8th edition of the annual hackathon. The winners bag cash prizes totalling up to Rs. one lakh."})]})}),Object(n.jsx)("div",{className:"hashCodeContainer",children:l?a.events.map((function(e){return Object(n.jsx)("div",{className:"hashCodeSection",children:Object(n.jsxs)(h.a,{children:[Object(n.jsx)(d.a,{className:"hashCodeTitle",children:e.event_name}),Object(n.jsx)(d.a,{className:"hashCodeDate",children:e.event_date+" "+e.year}),Object(n.jsx)(d.a,{className:"hashCodeSponsors",children:e.sponsor_text}),Object(n.jsx)(d.a,{className:"hashCodeDescription",children:e.description}),Object(n.jsxs)(j.a,{container:!0,spacing:3,style:{marginTop:20},justify:"center",children:[Object(n.jsx)(j.a,{item:!0,xs:12,sm:4,children:Object(n.jsx)("img",{style:{width:"95%"},src:"".concat(e.poster_link)})}),Object(n.jsx)(j.a,{item:!0,xs:12,sm:8,children:Object(n.jsx)(b.a,{autoPlay:!0,autoPlayInterval:"3000",buttonsDisabled:!0,children:e.image_links.map((function(e){return Object(n.jsx)(g,{img:"".concat(e)},e)}))})})]})]})},e.event_name)})):Object(n.jsxs)("div",{className:e.spinnerTextStyle,children:[Object(n.jsx)(d.a,{style:{fontSize:"1.5rem"},children:"Loading Data"})," ",Object(n.jsx)(p.a,{style:{color:"#7cb342",marginTop:"1em"}})]})})]})}}},[["CNBd",0,2,1,3,5,6,7,4]]]);