(this.webpackJsonpconnectionmysql=this.webpackJsonpconnectionmysql||[]).push([[0],{123:function(e,t,n){},128:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(28),i=n.n(s),l=(n(79),n(41)),r=n(11),j=n(1),o=function(){return Object(j.jsxs)(l.b,{to:"/",style:{textDecoration:"none"},children:[Object(j.jsx)("div",{className:"d-none d-lg-block",children:Object(j.jsx)("div",{className:"header",children:Object(j.jsx)("h1",{children:"Baby Name Stats"})})}),Object(j.jsx)("div",{className:"d-lg-none",children:Object(j.jsx)("div",{className:"headerMobile",children:Object(j.jsx)("h1",{children:"Baby Name Stats"})})})]})},d=n(24),h=n.n(d),b=n(25),O=n(30),x=n(10),u=n(58),y=n(144),m=n(148),f=n(151),p=n(156),v=n(146),N=n(149),g=n(150),C=n(147),S=function(e){var t=e.arrayOfSearches,n=Object(y.a)({table:{maxWidth:650}})();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{children:Object(j.jsx)(v.a,{component:C.a,style:{justifyContent:"center",display:"flex"},children:Object(j.jsxs)(m.a,{className:n.table,"aria-label":"simple table",children:[Object(j.jsx)(N.a,{children:Object(j.jsxs)(g.a,{children:[Object(j.jsx)(p.a,{children:"Name"}),Object(j.jsx)(p.a,{align:"right",children:"Total"})]})}),Object(j.jsx)(f.a,{children:t.map((function(e,t){return Object(j.jsxs)(g.a,{children:[Object(j.jsx)(p.a,{component:"th",scope:"row",children:e[0]}),Object(j.jsx)(p.a,{align:"right",children:e[1].toLocaleString("en-US")})]},t)}))})]})})}),Object(j.jsx)("div",{className:"d-lg-none",children:"adsf"})]})},w=n(55),_=function(e){var t=e.username;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"m-3",style:{justifyContent:"center",display:"flex"},children:["Counting up all the ",t,"'s"]}),Object(j.jsx)("div",{className:"centerDiv",children:Object(j.jsx)(w.WaveLoading,{color:"#147ffa",size:"large",speed:".9"})})]})},k=function(){var e=Object(c.useState)([]),t=Object(x.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),i=Object(x.a)(s,2),l=i[0],r=i[1],o=Object(c.useState)(""),d=Object(x.a)(o,2),y=d[0],m=d[1],f=Object(c.useState)([]),p=Object(x.a)(f,2),v=p[0],N=p[1],g=Object(c.useState)(!1),C=Object(x.a)(g,2),w=C[0],k=C[1],A=Object(c.useState)(!1),F=Object(x.a)(A,2),T=F[0],M=F[1],I=function(){var e=Object(O.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("username",y),e.next=4,fetch("https://baby-name-mysql.herokuapp.com/get_total_count_by_name",{method:"POST",body:t}).then((function(e){return e.json()})).then((function(e){0===e.length?(M(!0),N([].concat(Object(b.a)(v),[[y,0]]))):(N([].concat(Object(b.a)(v),[[y,e[0].total]])),a(e)),k(!0)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(!l)return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{style:{justifyContent:"center",display:"flex"},children:Object(j.jsx)("p",{children:"Type in a name to search for."})}),Object(j.jsx)("div",{style:{justifyContent:"center",display:"flex"},children:Object(j.jsx)("p",{children:"The result returned will be the number of children born from 1880 to 2018 with that name"})}),Object(j.jsx)("div",{style:{justifyContent:"center",display:"flex"},children:Object(j.jsx)("input",{className:"m-2",type:"text",value:y,onChange:function(e){return m(e.target.value)}})}),Object(j.jsx)("div",{style:{justifyContent:"center",display:"flex"},children:Object(j.jsx)(u.a,{className:"m-2",onClick:function(){r(!0),I()},children:"Start counting!"})})]});var D=function(){r(!l),k(!1),M(!1)};return w?T?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"m-3 ",style:{justifyContent:"center",display:"flex"},children:"Uh Oh..."}),Object(j.jsxs)("div",{className:"m-3",style:{justifyContent:"center",display:"flex"},children:["We didn't find any \xa0 ",Object(j.jsxs)("strong",{children:[y,"'s"]})]}),Object(j.jsx)("div",{className:"m-3",style:{justifyContent:"center",display:"flex"},children:"in our database"}),Object(j.jsx)("div",{className:"m-3",style:{justifyContent:"center",display:"flex"},children:Object(j.jsx)(u.a,{onClick:D,children:"Search A New Name"})})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"m-3 ",style:{justifyContent:"center",display:"flex"},children:"There were a total of"}),Object(j.jsx)("div",{className:"m-3",style:{justifyContent:"center",display:"flex"},children:Object(j.jsxs)("strong",{children:[" ",n[0].total.toLocaleString("en-US")," "]})}),Object(j.jsxs)("div",{className:"m-3",style:{justifyContent:"center",display:"flex"},children:['children born with the name "',y,'" in the USA since 1880.']}),Object(j.jsx)("div",{className:"m-3",style:{justifyContent:"center",display:"flex"},children:Object(j.jsx)(u.a,{onClick:D,children:"Search A New Name"})}),Object(j.jsx)(S,{arrayOfSearches:v})]}):Object(j.jsxs)("div",{children:[Object(j.jsx)(_,{username:y}),Object(j.jsx)("div",{className:"m-3",style:{justifyContent:"center",display:"flex"},children:Object(j.jsx)(u.a,{onClick:D,children:"Search A New Name"})})]})},A=(n(123),n(154)),F=n(152),T=n(155),M=n(153),I=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(A.a,{bg:"dark",variant:"dark",children:Object(j.jsxs)(F.a,{children:[Object(j.jsx)(A.a.Brand,{href:"#home",children:"Docs"}),Object(j.jsxs)(T.a,{className:"me-auto",children:[Object(j.jsx)(T.a.Link,{href:"/BabyFrontEnd/#/",children:"Home"}),Object(j.jsx)(T.a.Link,{href:"/BabyFrontEnd/#/Trends",children:"Trends"}),Object(j.jsxs)(M.a,{title:"Search",id:"collasible-nav-dropdown",children:[Object(j.jsx)(M.a.Item,{href:"/BabyFrontEnd/#/show_total_count_by_name",children:"By Name"}),Object(j.jsx)(M.a.Item,{href:"/BabyFrontEnd/#/search_by_name_and_year",children:"By Name and Year"}),Object(j.jsx)(M.a.Item,{href:"/BabyFrontEnd/#/search_by_name_and_state",children:"By State "})]})]})]})})})},D=function(){var e=Object(c.useState)([]),t=Object(x.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),i=Object(x.a)(s,2),l=i[0],r=i[1],o=Object(c.useState)(""),d=Object(x.a)(o,2),y=d[0],m=d[1],f=Object(c.useState)(1880),p=Object(x.a)(f,2),v=p[0],N=p[1],g=Object(c.useState)([]),C=Object(x.a)(g,2),w=C[0],k=C[1],A=Object(c.useState)(!1),F=Object(x.a)(A,2),T=F[0],M=F[1],I=Object(c.useState)(!1),D=Object(x.a)(I,2),L=D[0],W=D[1],B=function(){var e=Object(O.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("username",y),t.append("useryear",v),e.next=5,fetch("https://baby-name-mysql.herokuapp.com/get_total_count_by_name_and_year",{method:"POST",body:t}).then((function(e){return e.json()})).then((function(e){0===e.length?(W(!0),k([].concat(Object(b.a)(w),[[y,0]]))):(k([].concat(Object(b.a)(w),[[y,e[0].total]])),a(e)),M(!0)}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){r(!l),M(!1),W(!1)};return l?T?L?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"m-3 ",style:{justifyContent:"center",display:"flex"},children:"Uh Oh..."}),Object(j.jsxs)("div",{className:"m-3",style:{justifyContent:"center",display:"flex"},children:["We didn't find any \xa0 ",Object(j.jsxs)("strong",{children:[y,"'s"]})]}),Object(j.jsx)("div",{className:"m-3",style:{justifyContent:"center",display:"flex"},children:"in our database"}),Object(j.jsx)("div",{className:"m-3",style:{justifyContent:"center",display:"flex"},children:Object(j.jsx)(u.a,{onClick:U,children:"Search A New Name"})})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"m-3 ",style:{justifyContent:"center",display:"flex"},children:"There were a total of"}),Object(j.jsx)("div",{className:"m-3",style:{justifyContent:"center",display:"flex"},children:Object(j.jsxs)("strong",{children:[" ",n[0].total.toLocaleString("en-US")," "]})}),Object(j.jsxs)("div",{className:"m-3",style:{justifyContent:"center",display:"flex"},children:['children born with the name "',y,'" in the USA in 1880.']}),Object(j.jsx)("div",{className:"m-3",style:{justifyContent:"center",display:"flex"},children:Object(j.jsx)(u.a,{onClick:U,children:"Search A New Name"})}),Object(j.jsx)(S,{arrayOfSearches:w})]}):Object(j.jsxs)("div",{children:[Object(j.jsx)(_,{username:y}),Object(j.jsx)("div",{className:"m-3",style:{justifyContent:"center",display:"flex"},children:Object(j.jsx)(u.a,{onClick:U,children:"Search A New Name"})})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{style:{justifyContent:"center",display:"flex"},children:Object(j.jsx)("p",{children:"Type in a name and year to search for."})}),Object(j.jsx)("div",{style:{justifyContent:"center",display:"flex"},children:Object(j.jsx)("p",{children:"The result returned will be the number of children born within a specific year with that name"})}),Object(j.jsx)("div",{style:{justifyContent:"center",display:"flex"},children:Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{children:" Name:"}),Object(j.jsx)("input",{className:"m-2",type:"text",value:y,onChange:function(e){return m(e.target.value)}})]})}),Object(j.jsx)("div",{style:{justifyContent:"center",display:"flex"},children:Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{children:"Year:"}),Object(j.jsx)("input",{className:"m-2",type:"int",max:2018,min:1880,value:v,onChange:function(e){return N(e.target.value)}})]})}),Object(j.jsx)("div",{style:{justifyContent:"center",display:"flex"},children:Object(j.jsx)(u.a,{className:"m-2",onClick:function(){r(!0),B()},children:"Start counting!"})})]})},L=function(e){var t=e.arrayOfSearches,n=Object(y.a)({table:{maxWidth:650}})();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{children:Object(j.jsx)(v.a,{component:C.a,style:{justifyContent:"center",display:"flex"},children:Object(j.jsxs)(m.a,{className:n.table,"aria-label":"simple table",children:[Object(j.jsx)(N.a,{children:Object(j.jsxs)(g.a,{children:[Object(j.jsx)(p.a,{children:"Name"}),Object(j.jsx)(p.a,{align:"right",children:"State"}),Object(j.jsx)(p.a,{align:"right",children:"Total"})]})}),Object(j.jsx)(f.a,{children:t.map((function(e,t){return Object(j.jsxs)(g.a,{children:[Object(j.jsx)(p.a,{component:"th",scope:"row",children:e[0]}),Object(j.jsx)(p.a,{align:"right",children:e[1]}),Object(j.jsx)(p.a,{align:"right",children:e[2].toLocaleString("en-US")})]},t)}))})]})})}),Object(j.jsx)("div",{className:"d-lg-none",children:"adsf"})]})},W=function(){var e=Object(c.useState)([]),t=Object(x.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),i=Object(x.a)(s,2),l=i[0],r=i[1],o=Object(c.useState)(""),d=Object(x.a)(o,2),y=d[0],m=d[1],f=Object(c.useState)("AL"),p=Object(x.a)(f,2),v=p[0],N=p[1],g=Object(c.useState)([]),C=Object(x.a)(g,2),S=C[0],w=C[1],k=Object(c.useState)(!1),A=Object(x.a)(k,2),F=A[0],T=A[1],M=Object(c.useState)(!1),I=Object(x.a)(M,2),D=I[0],W=I[1],B=function(){var e=Object(O.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("username",y),t.append("userstate",v),e.next=5,fetch("https://baby-name-mysql.herokuapp.com/get_total_count_by_name_and_state",{method:"POST",body:t}).then((function(e){return e.json()})).then((function(e){0===e.length?(W(!0),w([].concat(Object(b.a)(S),[[y,0]]))):(w([].concat(Object(b.a)(S),[[y,v,e[0].total]])),a(e)),T(!0)}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){r(!l),T(!1),W(!1),N("")};return console.log(v),l?F?D?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"m-3 ",style:{justifyContent:"center",display:"flex"},children:"Uh Oh..."}),Object(j.jsxs)("div",{className:"m-3",style:{justifyContent:"center",display:"flex"},children:["We didn't find any \xa0 ",Object(j.jsxs)("strong",{children:[y,"'s"]})]}),Object(j.jsx)("div",{className:"m-3",style:{justifyContent:"center",display:"flex"},children:"in our database"}),Object(j.jsx)("div",{className:"m-3",style:{justifyContent:"center",display:"flex"},children:Object(j.jsx)(u.a,{onClick:U,children:"Search A New Name"})})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"m-3 ",style:{justifyContent:"center",display:"flex"},children:"There were a total of"}),Object(j.jsx)("div",{className:"m-3",style:{justifyContent:"center",display:"flex"},children:Object(j.jsxs)("strong",{children:[" ",n[0].total.toLocaleString("en-US")," "]})}),Object(j.jsxs)("div",{className:"m-3",style:{justifyContent:"center",display:"flex"},children:['children born with the name "',y,'" in the USA in 1880.']}),Object(j.jsx)("div",{className:"m-3",style:{justifyContent:"center",display:"flex"},children:Object(j.jsx)(u.a,{onClick:U,children:"Search A New Name"})}),Object(j.jsx)(L,{addState:!0,arrayOfSearches:S})]}):Object(j.jsxs)("div",{children:[Object(j.jsx)(_,{username:y}),Object(j.jsx)("div",{className:"m-3",style:{justifyContent:"center",display:"flex"},children:Object(j.jsx)(u.a,{onClick:U,children:"Search A New Name"})})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{style:{justifyContent:"center",display:"flex"},children:Object(j.jsx)("p",{children:"Type in a name and state to search for."})}),Object(j.jsx)("div",{style:{justifyContent:"center",display:"flex"},children:Object(j.jsx)("p",{children:"The result returned will be the number of children born within that state with that name from 1880 to 2018"})}),Object(j.jsx)("div",{style:{justifyContent:"center",display:"flex"},children:Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{children:" Name:"}),Object(j.jsx)("input",{className:"m-2",type:"text",value:y,onChange:function(e){return m(e.target.value)}})]})}),Object(j.jsx)("div",{style:{justifyContent:"center",display:"flex"},children:Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{children:"State:"}),Object(j.jsxs)("select",{onChange:function(e){return N(e.target.value)},children:[Object(j.jsx)("option",{value:"AL",children:"Alabama"}),Object(j.jsx)("option",{value:"AK",children:"Alaska"}),Object(j.jsx)("option",{value:"AZ",children:"Arizona"}),Object(j.jsx)("option",{value:"AR",children:"Arkansas"}),Object(j.jsx)("option",{value:"CA",children:"California"}),Object(j.jsx)("option",{value:"CO",children:"Colorado"}),Object(j.jsx)("option",{value:"CT",children:"Connecticut"}),Object(j.jsx)("option",{value:"DE",children:"Delaware"}),Object(j.jsx)("option",{value:"DC",children:"District Of Columbia"}),Object(j.jsx)("option",{value:"FL",children:"Florida"}),Object(j.jsx)("option",{value:"GA",children:"Georgia"}),Object(j.jsx)("option",{value:"HI",children:"Hawaii"}),Object(j.jsx)("option",{value:"ID",children:"Idaho"}),Object(j.jsx)("option",{value:"IL",children:"Illinois"}),Object(j.jsx)("option",{value:"IN",children:"Indiana"}),Object(j.jsx)("option",{value:"IA",children:"Iowa"}),Object(j.jsx)("option",{value:"KS",children:"Kansas"}),Object(j.jsx)("option",{value:"KY",children:"Kentucky"}),Object(j.jsx)("option",{value:"LA",children:"Louisiana"}),Object(j.jsx)("option",{value:"ME",children:"Maine"}),Object(j.jsx)("option",{value:"MD",children:"Maryland"}),Object(j.jsx)("option",{value:"MA",children:"Massachusetts"}),Object(j.jsx)("option",{value:"MI",children:"Michigan"}),Object(j.jsx)("option",{value:"MN",children:"Minnesota"}),Object(j.jsx)("option",{value:"MS",children:"Mississippi"}),Object(j.jsx)("option",{value:"MO",children:"Missouri"}),Object(j.jsx)("option",{value:"MT",children:"Montana"}),Object(j.jsx)("option",{value:"NE",children:"Nebraska"}),Object(j.jsx)("option",{value:"NV",children:"Nevada"}),Object(j.jsx)("option",{value:"NH",children:"New Hampshire"}),Object(j.jsx)("option",{value:"NJ",children:"New Jersey"}),Object(j.jsx)("option",{value:"NM",children:"New Mexico"}),Object(j.jsx)("option",{value:"NY",children:"New York"}),Object(j.jsx)("option",{value:"NC",children:"North Carolina"}),Object(j.jsx)("option",{value:"ND",children:"North Dakota"}),Object(j.jsx)("option",{value:"OH",children:"Ohio"}),Object(j.jsx)("option",{value:"OK",children:"Oklahoma"}),Object(j.jsx)("option",{value:"OR",children:"Oregon"}),Object(j.jsx)("option",{value:"PA",children:"Pennsylvania"}),Object(j.jsx)("option",{value:"RI",children:"Rhode Island"}),Object(j.jsx)("option",{value:"SC",children:"South Carolina"}),Object(j.jsx)("option",{value:"SD",children:"South Dakota"}),Object(j.jsx)("option",{value:"TN",children:"Tennessee"}),Object(j.jsx)("option",{value:"TX",children:"Texas"}),Object(j.jsx)("option",{value:"UT",children:"Utah"}),Object(j.jsx)("option",{value:"VT",children:"Vermont"}),Object(j.jsx)("option",{value:"VA",children:"Virginia"}),Object(j.jsx)("option",{value:"WA",children:"Washington"}),Object(j.jsx)("option",{value:"WV",children:"West Virginia"}),Object(j.jsx)("option",{value:"WI",children:"Wisconsin"}),Object(j.jsx)("option",{value:"WY",children:"Wyoming"})]})]})}),Object(j.jsx)("div",{style:{justifyContent:"center",display:"flex"},children:Object(j.jsx)(u.a,{className:"m-2",onClick:function(){r(!0),B()},children:"Start counting!"})})]})},B=function(){return Object(j.jsxs)(l.a,{basename:"/",children:[Object(j.jsx)(o,{}),Object(j.jsx)(I,{}),Object(j.jsx)(r.a,{path:"/show_total_count_by_name",children:Object(j.jsx)(k,{})}),Object(j.jsx)(r.a,{path:"/search_by_name_and_state",children:Object(j.jsx)(W,{})}),Object(j.jsx)(r.a,{path:"/search_by_name_and_year",children:Object(j.jsx)(D,{})}),Object(j.jsx)(r.a,{path:"/trends",children:"trends"}),Object(j.jsx)(r.a,{exact:!0,path:"/",children:Object(j.jsx)("div",{children:"home"})})]})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,158)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};n(127);i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(B,{})}),document.getElementById("root")),U()},79:function(e,t,n){}},[[128,1,2]]]);
//# sourceMappingURL=main.571f3454.chunk.js.map