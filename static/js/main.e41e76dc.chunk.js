(this.webpackJsonpconnectionmysql=this.webpackJsonpconnectionmysql||[]).push([[0],{126:function(e,t,n){},142:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(29),i=n.n(a),l=(n(82),n(43)),r=n(11),j=n(1),o=function(){return Object(j.jsxs)(l.b,{to:"/",style:{textDecoration:"none"},children:[Object(j.jsx)("div",{className:"d-none d-lg-block",children:Object(j.jsx)("div",{className:"header",children:Object(j.jsx)("h1",{children:"Baby Name Stats"})})}),Object(j.jsx)("div",{className:"d-lg-none",children:Object(j.jsx)("div",{className:"headerMobile",children:Object(j.jsx)("h1",{children:"Baby Name Stats"})})})]})},d=n(20),h=n.n(d),b=n(25),x=n(26),u=n(10),O=n(60),y=n(159),m=n(163),f=n(166),p=n(171),v=n(161),N=n(164),g=n(165),C=n(162),S=function(e){var t=e.arrayOfSearches,n=Object(y.a)({table:{maxWidth:650}})();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{children:Object(j.jsx)(v.a,{component:C.a,style:{justifyContent:"center",display:"flex"},children:Object(j.jsxs)(m.a,{className:n.table,"aria-label":"simple table",children:[Object(j.jsx)(N.a,{children:Object(j.jsxs)(g.a,{children:[Object(j.jsx)(p.a,{children:"Name"}),Object(j.jsx)(p.a,{align:"right",children:"Total"})]})}),Object(j.jsx)(f.a,{children:t.map((function(e,t){return Object(j.jsxs)(g.a,{children:[Object(j.jsx)(p.a,{component:"th",scope:"row",children:e[0]}),Object(j.jsx)(p.a,{align:"right",children:e[1].toLocaleString("en-US")})]},t)}))})]})})}),Object(j.jsx)("div",{className:"d-lg-none",children:"adsf"})]})},w=n(57),k=function(e){var t=e.username;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"m-3",style:{justifyContent:"center",display:"flex"},children:["Counting up all the ",t,"'s"]}),Object(j.jsx)("div",{className:"centerDiv",children:Object(j.jsx)(w.WaveLoading,{color:"#147ffa",size:"large",speed:".9"})})]})},_=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(!1),i=Object(u.a)(a,2),l=i[0],r=i[1],o=Object(c.useState)(""),d=Object(u.a)(o,2),y=d[0],m=d[1],f=Object(c.useState)([]),p=Object(u.a)(f,2),v=p[0],N=p[1],g=Object(c.useState)(!1),C=Object(u.a)(g,2),w=C[0],_=C[1],A=Object(c.useState)(!1),F=Object(u.a)(A,2),T=F[0],I=F[1],D=function(){var e=Object(x.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("username",y),e.next=4,fetch("https://baby-name-mysql.herokuapp.com/get_total_count_by_name",{method:"POST",body:t}).then((function(e){return e.json()})).then((function(e){0===e.length?(I(!0),N([].concat(Object(b.a)(v),[[y,0]]))):(N([].concat(Object(b.a)(v),[[y,e[0].total]])),s(e)),_(!0)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(!l)return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{style:{justifyContent:"center",display:"flex"},children:Object(j.jsx)("p",{children:"Type in a name to search for."})}),Object(j.jsx)("div",{style:{justifyContent:"center",display:"flex"},children:Object(j.jsx)("p",{children:"The result returned will be the number of children born from 1880 to 2018 with that name"})}),Object(j.jsx)("div",{style:{justifyContent:"center",display:"flex"},children:Object(j.jsx)("input",{className:"m-2",type:"text",value:y,onChange:function(e){return m(e.target.value)}})}),Object(j.jsx)("div",{style:{justifyContent:"center",display:"flex"},children:Object(j.jsx)(O.a,{className:"m-2",onClick:function(){r(!0),D()},children:"Start counting!"})})]});var M=function(){r(!l),_(!1),I(!1)};return w?T?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"m-3 ",style:{justifyContent:"center",display:"flex"},children:"Uh Oh..."}),Object(j.jsxs)("div",{className:"m-3",style:{justifyContent:"center",display:"flex"},children:["We didn't find any \xa0 ",Object(j.jsxs)("strong",{children:[y,"'s"]})]}),Object(j.jsx)("div",{className:"m-3",style:{justifyContent:"center",display:"flex"},children:"in our database"}),Object(j.jsx)("div",{className:"m-3",style:{justifyContent:"center",display:"flex"},children:Object(j.jsx)(O.a,{onClick:M,children:"Search A New Name"})})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"m-3 ",style:{justifyContent:"center",display:"flex"},children:"There were a total of"}),Object(j.jsx)("div",{className:"m-3",style:{justifyContent:"center",display:"flex"},children:Object(j.jsxs)("strong",{children:[" ",n[0].total.toLocaleString("en-US")," "]})}),Object(j.jsxs)("div",{className:"m-3",style:{justifyContent:"center",display:"flex"},children:['children born with the name "',y,'" in the USA since 1880.']}),Object(j.jsx)("div",{className:"m-3",style:{justifyContent:"center",display:"flex"},children:Object(j.jsx)(O.a,{onClick:M,children:"Search A New Name"})}),Object(j.jsx)(S,{arrayOfSearches:v})]}):Object(j.jsxs)("div",{children:[Object(j.jsx)(k,{username:y}),Object(j.jsx)("div",{className:"m-3",style:{justifyContent:"center",display:"flex"},children:Object(j.jsx)(O.a,{onClick:M,children:"Search A New Name"})})]})},A=(n(126),n(169)),F=n(167),T=n(170),I=n(168),D=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(A.a,{bg:"dark",variant:"dark",children:Object(j.jsxs)(F.a,{children:[Object(j.jsx)(A.a.Brand,{href:"/BabyFrontEnd/#/",children:"Home"}),Object(j.jsxs)(T.a,{className:"me-auto",children:[Object(j.jsx)(T.a.Link,{href:"/BabyFrontEnd/#/sources",children:"Sources"}),Object(j.jsxs)(I.a,{title:"Search",id:"collasible-nav-dropdown",children:[Object(j.jsx)(I.a.Item,{href:"/BabyFrontEnd/#/show_total_count_by_name",children:"By Name"}),Object(j.jsx)(I.a.Item,{href:"/BabyFrontEnd/#/search_by_name_and_year",children:"By Name and Year"}),Object(j.jsx)(I.a.Item,{href:"/BabyFrontEnd/#/search_by_name_and_state",children:"By State "}),Object(j.jsx)(I.a.Item,{href:"/BabyFrontEnd/#/trends",children:"Yearly Trends"})]})]})]})})})},M=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(!1),i=Object(u.a)(a,2),l=i[0],r=i[1],o=Object(c.useState)(""),d=Object(u.a)(o,2),y=d[0],m=d[1],f=Object(c.useState)(1880),p=Object(u.a)(f,2),v=p[0],N=p[1],g=Object(c.useState)([]),C=Object(u.a)(g,2),w=C[0],_=C[1],A=Object(c.useState)(!1),F=Object(u.a)(A,2),T=F[0],I=F[1],D=Object(c.useState)(!1),M=Object(u.a)(D,2),L=M[0],W=M[1],B=function(){var e=Object(x.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("username",y),t.append("useryear",v),e.next=5,fetch("https://baby-name-mysql.herokuapp.com/get_total_count_by_name_and_year",{method:"POST",body:t}).then((function(e){return e.json()})).then((function(e){0===e.length?(W(!0),_([].concat(Object(b.a)(w),[[y,0]]))):(_([].concat(Object(b.a)(w),[[y,e[0].total]])),s(e)),I(!0)}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){r(!l),I(!1),W(!1)};return l?T?L?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"m-3 ",style:{justifyContent:"center",display:"flex"},children:"Uh Oh..."}),Object(j.jsxs)("div",{className:"m-3",style:{justifyContent:"center",display:"flex"},children:["We didn't find any \xa0 ",Object(j.jsxs)("strong",{children:[y,"'s"]})]}),Object(j.jsx)("div",{className:"m-3",style:{justifyContent:"center",display:"flex"},children:"in our database"}),Object(j.jsx)("div",{className:"m-3",style:{justifyContent:"center",display:"flex"},children:Object(j.jsx)(O.a,{onClick:U,children:"Search A New Name"})})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"m-3 ",style:{justifyContent:"center",display:"flex"},children:"There were a total of"}),Object(j.jsx)("div",{className:"m-3",style:{justifyContent:"center",display:"flex"},children:Object(j.jsxs)("strong",{children:[" ",n[0].total.toLocaleString("en-US")," "]})}),Object(j.jsxs)("div",{className:"m-3",style:{justifyContent:"center",display:"flex"},children:['children born with the name "',y,'" in the USA in 1880.']}),Object(j.jsx)("div",{className:"m-3",style:{justifyContent:"center",display:"flex"},children:Object(j.jsx)(O.a,{onClick:U,children:"Search A New Name"})}),Object(j.jsx)(S,{arrayOfSearches:w})]}):Object(j.jsxs)("div",{children:[Object(j.jsx)(k,{username:y}),Object(j.jsx)("div",{className:"m-3",style:{justifyContent:"center",display:"flex"},children:Object(j.jsx)(O.a,{onClick:U,children:"Search A New Name"})})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{style:{justifyContent:"center",display:"flex"},children:Object(j.jsx)("p",{children:"Type in a name and year to search for."})}),Object(j.jsx)("div",{style:{justifyContent:"center",display:"flex"},children:Object(j.jsx)("p",{children:"The result returned will be the number of children born within a specific year with that name"})}),Object(j.jsx)("div",{style:{justifyContent:"center",display:"flex"},children:Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{children:" Name:"}),Object(j.jsx)("input",{className:"m-2",type:"text",value:y,onChange:function(e){return m(e.target.value)}})]})}),Object(j.jsx)("div",{style:{justifyContent:"center",display:"flex"},children:Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{children:"Year:"}),Object(j.jsx)("input",{className:"m-2",type:"int",max:2018,min:1880,value:v,onChange:function(e){return N(e.target.value)}})]})}),Object(j.jsx)("div",{style:{justifyContent:"center",display:"flex"},children:Object(j.jsx)(O.a,{className:"m-2",onClick:function(){r(!0),B()},children:"Start counting!"})})]})},L=function(e){var t=e.arrayOfSearches,n=Object(y.a)({table:{maxWidth:650}})();return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{children:Object(j.jsx)(v.a,{component:C.a,style:{justifyContent:"center",display:"flex"},children:Object(j.jsxs)(m.a,{className:n.table,"aria-label":"simple table",children:[Object(j.jsx)(N.a,{children:Object(j.jsxs)(g.a,{children:[Object(j.jsx)(p.a,{children:"Name"}),Object(j.jsx)(p.a,{align:"right",children:"State"}),Object(j.jsx)(p.a,{align:"right",children:"Total"})]})}),Object(j.jsx)(f.a,{children:t.map((function(e,t){return Object(j.jsxs)(g.a,{children:[Object(j.jsx)(p.a,{component:"th",scope:"row",children:e[0]}),Object(j.jsx)(p.a,{align:"right",children:e[1]}),Object(j.jsx)(p.a,{align:"right",children:e[2].toLocaleString("en-US")})]},t)}))})]})})})})},W=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(!1),i=Object(u.a)(a,2),l=i[0],r=i[1],o=Object(c.useState)(""),d=Object(u.a)(o,2),y=d[0],m=d[1],f=Object(c.useState)("AL"),p=Object(u.a)(f,2),v=p[0],N=p[1],g=Object(c.useState)([]),C=Object(u.a)(g,2),S=C[0],w=C[1],_=Object(c.useState)(!1),A=Object(u.a)(_,2),F=A[0],T=A[1],I=Object(c.useState)(!1),D=Object(u.a)(I,2),M=D[0],W=D[1],B=function(){var e=Object(x.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("username",y),t.append("userstate",v),e.next=5,fetch("https://baby-name-mysql.herokuapp.com/get_total_count_by_name_and_state",{method:"POST",body:t}).then((function(e){return e.json()})).then((function(e){0===e.length?(W(!0),w([].concat(Object(b.a)(S),[[y,v,0]]))):(w([].concat(Object(b.a)(S),[[y,v,e[0].total]])),s(e)),T(!0)}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){r(!l),T(!1),W(!1),N("")};return l?F?M?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"m-3 ",style:{justifyContent:"center",display:"flex"},children:"Uh Oh..."}),Object(j.jsxs)("div",{className:"m-3",style:{justifyContent:"center",display:"flex"},children:["We didn't find any \xa0 ",Object(j.jsxs)("strong",{children:[y,"'s"]})]}),Object(j.jsx)("div",{className:"m-3",style:{justifyContent:"center",display:"flex"},children:"in our database"}),Object(j.jsx)("div",{className:"m-3",style:{justifyContent:"center",display:"flex"},children:Object(j.jsx)(O.a,{onClick:U,children:"Search A New Name"})})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"m-3 ",style:{justifyContent:"center",display:"flex"},children:"There were a total of"}),Object(j.jsx)("div",{className:"m-3",style:{justifyContent:"center",display:"flex"},children:Object(j.jsxs)("strong",{children:[" ",n[0].total.toLocaleString("en-US")," "]})}),Object(j.jsxs)("div",{className:"m-3",style:{justifyContent:"center",display:"flex"},children:['children born with the name "',y,'" in the state "',v,'" since 1880.']}),Object(j.jsx)("div",{className:"m-3",style:{justifyContent:"center",display:"flex"},children:Object(j.jsx)(O.a,{onClick:U,children:"Search A New Name"})}),Object(j.jsx)(L,{addState:!0,arrayOfSearches:S})]}):Object(j.jsxs)("div",{children:[Object(j.jsx)(k,{username:y}),Object(j.jsx)("div",{className:"m-3",style:{justifyContent:"center",display:"flex"},children:Object(j.jsx)(O.a,{onClick:U,children:"Search A New Name"})})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{style:{justifyContent:"center",display:"flex"},children:Object(j.jsx)("p",{children:"Type in a name and state to search for."})}),Object(j.jsx)("div",{style:{justifyContent:"center",display:"flex"},children:Object(j.jsx)("p",{children:"The result returned will be the number of children born within that state with that name from 1880 to 2018"})}),Object(j.jsx)("div",{style:{justifyContent:"center",display:"flex"},children:Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{children:" Name:"}),Object(j.jsx)("input",{className:"m-2",type:"text",value:y,onChange:function(e){return m(e.target.value)}})]})}),Object(j.jsx)("div",{style:{justifyContent:"center",display:"flex"},children:Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{children:"State:"}),Object(j.jsxs)("select",{onChange:function(e){return N(e.target.value)},children:[Object(j.jsx)("option",{value:"AL",children:"Alabama"}),Object(j.jsx)("option",{value:"AK",children:"Alaska"}),Object(j.jsx)("option",{value:"AZ",children:"Arizona"}),Object(j.jsx)("option",{value:"AR",children:"Arkansas"}),Object(j.jsx)("option",{value:"CA",children:"California"}),Object(j.jsx)("option",{value:"CO",children:"Colorado"}),Object(j.jsx)("option",{value:"CT",children:"Connecticut"}),Object(j.jsx)("option",{value:"DE",children:"Delaware"}),Object(j.jsx)("option",{value:"DC",children:"District Of Columbia"}),Object(j.jsx)("option",{value:"FL",children:"Florida"}),Object(j.jsx)("option",{value:"GA",children:"Georgia"}),Object(j.jsx)("option",{value:"HI",children:"Hawaii"}),Object(j.jsx)("option",{value:"ID",children:"Idaho"}),Object(j.jsx)("option",{value:"IL",children:"Illinois"}),Object(j.jsx)("option",{value:"IN",children:"Indiana"}),Object(j.jsx)("option",{value:"IA",children:"Iowa"}),Object(j.jsx)("option",{value:"KS",children:"Kansas"}),Object(j.jsx)("option",{value:"KY",children:"Kentucky"}),Object(j.jsx)("option",{value:"LA",children:"Louisiana"}),Object(j.jsx)("option",{value:"ME",children:"Maine"}),Object(j.jsx)("option",{value:"MD",children:"Maryland"}),Object(j.jsx)("option",{value:"MA",children:"Massachusetts"}),Object(j.jsx)("option",{value:"MI",children:"Michigan"}),Object(j.jsx)("option",{value:"MN",children:"Minnesota"}),Object(j.jsx)("option",{value:"MS",children:"Mississippi"}),Object(j.jsx)("option",{value:"MO",children:"Missouri"}),Object(j.jsx)("option",{value:"MT",children:"Montana"}),Object(j.jsx)("option",{value:"NE",children:"Nebraska"}),Object(j.jsx)("option",{value:"NV",children:"Nevada"}),Object(j.jsx)("option",{value:"NH",children:"New Hampshire"}),Object(j.jsx)("option",{value:"NJ",children:"New Jersey"}),Object(j.jsx)("option",{value:"NM",children:"New Mexico"}),Object(j.jsx)("option",{value:"NY",children:"New York"}),Object(j.jsx)("option",{value:"NC",children:"North Carolina"}),Object(j.jsx)("option",{value:"ND",children:"North Dakota"}),Object(j.jsx)("option",{value:"OH",children:"Ohio"}),Object(j.jsx)("option",{value:"OK",children:"Oklahoma"}),Object(j.jsx)("option",{value:"OR",children:"Oregon"}),Object(j.jsx)("option",{value:"PA",children:"Pennsylvania"}),Object(j.jsx)("option",{value:"RI",children:"Rhode Island"}),Object(j.jsx)("option",{value:"SC",children:"South Carolina"}),Object(j.jsx)("option",{value:"SD",children:"South Dakota"}),Object(j.jsx)("option",{value:"TN",children:"Tennessee"}),Object(j.jsx)("option",{value:"TX",children:"Texas"}),Object(j.jsx)("option",{value:"UT",children:"Utah"}),Object(j.jsx)("option",{value:"VT",children:"Vermont"}),Object(j.jsx)("option",{value:"VA",children:"Virginia"}),Object(j.jsx)("option",{value:"WA",children:"Washington"}),Object(j.jsx)("option",{value:"WV",children:"West Virginia"}),Object(j.jsx)("option",{value:"WI",children:"Wisconsin"}),Object(j.jsx)("option",{value:"WY",children:"Wyoming"})]})]})}),Object(j.jsx)("div",{style:{justifyContent:"center",display:"flex"},children:Object(j.jsx)(O.a,{className:"m-2",onClick:function(){r(!0),B()},children:"Start counting!"})})]})},B=n(65),U=n.n(B),E=function(e){var t=e.trendData;console.log(t);var n=1880,c=t[t.length-1].key-1880;if(function(){console.log("trendlength",c);for(var e=0;e<c;e++){if(t[e].key!==n){var s={key:n,value:0};t.splice(e,0,s)}n++}}(),t.length<139){for(var s=c;s<139;s++){var a={key:1880+s,value:0};t.splice(s,0,a)}t.splice(t.length-1,1)}return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"m-3",style:{justifyContent:"center",display:"flex"},children:Object(j.jsx)(U.a,{data:[{type:"line",title:"data1",color:"blue",points:t}],keys:function(){for(var e=[],t=1880;t<2019;t++)e.push(t);return e}()})})})})},P=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(!1),i=Object(u.a)(a,2),l=i[0],r=i[1],o=Object(c.useState)(""),d=Object(u.a)(o,2),b=d[0],y=d[1],m=Object(c.useState)(!1),f=Object(u.a)(m,2),p=f[0],v=f[1],N=Object(c.useState)(!1),g=Object(u.a)(N,2),C=g[0],S=g[1],w=function(){var e=Object(x.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("username",b),e.next=4,fetch("https://baby-name-mysql.herokuapp.com/get_many_counts_by_year",{method:"POST",body:t}).then((function(e){return e.json()})).then((function(e){0===e.length?S(!0):s(e),v(!0)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(!l)return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{style:{justifyContent:"center",display:"flex"},children:Object(j.jsx)("p",{children:"Type in a name to search for."})}),Object(j.jsx)("div",{style:{justifyContent:"center",display:"flex"},children:Object(j.jsx)("p",{children:"The result will be a chart containing the number of children born with that name each year starting at 1880"})}),Object(j.jsx)("div",{style:{justifyContent:"center",display:"flex"},children:Object(j.jsx)("input",{className:"m-2",type:"text",value:b,onChange:function(e){return y(e.target.value)}})}),Object(j.jsx)("div",{style:{justifyContent:"center",display:"flex"},children:Object(j.jsx)(O.a,{className:"m-2",onClick:function(){r(!0),w()},children:"Start counting!"})})]});var _=function(){r(!l),v(!1),S(!1)};return p?C?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"m-3 ",style:{justifyContent:"center",display:"flex"},children:"Uh Oh..."}),Object(j.jsxs)("div",{className:"m-3",style:{justifyContent:"center",display:"flex"},children:["We didn't find any \xa0 ",Object(j.jsxs)("strong",{children:[b,"'s"]})]}),Object(j.jsx)("div",{className:"m-3",style:{justifyContent:"center",display:"flex"},children:"in our database"}),Object(j.jsx)("div",{className:"m-3",style:{justifyContent:"center",display:"flex"},children:Object(j.jsx)(O.a,{onClick:_,children:"Search A New Name"})})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"m-3 ",style:{justifyContent:"center",display:"flex"},children:["Take a look at the yearly trends for ",b]}),Object(j.jsx)("div",{className:"m-3",style:{justifyContent:"center",display:"flex"},children:Object(j.jsx)(O.a,{onClick:_,children:"Search A New Name"})}),Object(j.jsx)(E,{trendData:n})]}):Object(j.jsxs)("div",{children:[Object(j.jsx)(k,{username:b}),Object(j.jsx)("div",{className:"m-3",style:{justifyContent:"center",display:"flex"},children:Object(j.jsx)(O.a,{onClick:_,children:"Search A New Name"})})]})},V=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"m-3",style:{textAlign:"center",justifyContent:"center",display:"flex"},children:"I personally do not own nor have I created any data tables for this website."}),Object(j.jsx)("div",{className:"m-3",style:{textAlign:"center",justifyContent:"center",display:"flex"},children:"All data belongs to, and can be found, on Dolthub's data repositories"}),Object(j.jsx)("div",{className:"m-3",style:{textAlign:"center",justifyContent:"center",display:"flex"},children:"To find more information about the data go to"}),Object(j.jsx)("div",{className:"m-3",style:{textAlign:"center",justifyContent:"center",display:"flex"},children:Object(j.jsx)("a",{href:"https://www.dolthub.com/repositories/dolthub/us-baby-names",children:"dolthub.com"})}),Object(j.jsx)("div",{className:"m-3",style:{textAlign:"center",justifyContent:"center",display:"flex"},children:"or"}),Object(j.jsx)("div",{className:"m-3",style:{textAlign:"center",justifyContent:"center",display:"flex"},children:Object(j.jsx)("a",{href:"https://www.ssa.gov/oact/babynames/",children:"Social Security Administration USA"})}),Object(j.jsx)("div",{className:"m-3",style:{textAlign:"center",justifyContent:"center",display:"flex"},children:"The data is as accurate as Dolthub and it's developers have provided. If you find any inaccuracies, then submit your concerns there."}),Object(j.jsx)("div",{className:"m-3",style:{justifyContent:"center",display:"flex"},children:Object(j.jsx)("strong",{children:"Erick Saenz"})})]})},Y=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"m-3",style:{textAlign:"center",justifyContent:"center",display:"flex"},children:"This site is limited to First Name searches only."}),Object(j.jsx)("div",{className:"m-3",style:{textAlign:"center",justifyContent:"center",display:"flex"},children:"To search by name and year, state, or to see yearly trends click the search menu above!"}),Object(j.jsx)("div",{className:"m-3",style:{},children:Object(j.jsx)(_,{})})]})},q=function(){return Object(j.jsxs)(l.a,{basename:"/",children:[Object(j.jsx)(o,{}),Object(j.jsx)(D,{}),Object(j.jsx)(r.a,{path:"/show_total_count_by_name",children:Object(j.jsx)(_,{})}),Object(j.jsx)(r.a,{path:"/search_by_name_and_state",children:Object(j.jsx)(W,{})}),Object(j.jsx)(r.a,{path:"/search_by_name_and_year",children:Object(j.jsx)(M,{})}),Object(j.jsx)(r.a,{path:"/trends",children:Object(j.jsx)(P,{})}),Object(j.jsx)(r.a,{path:"/sources",children:Object(j.jsx)(V,{})}),Object(j.jsx)(r.a,{exact:!0,path:"/",children:Object(j.jsx)(Y,{})})]})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,173)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};n(141);i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(q,{})}),document.getElementById("root")),H()},82:function(e,t,n){}},[[142,1,2]]]);