(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{32:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(33),s=c.n(r),i=c(2),o=c(15),l=(c(41),c(3)),j=(c(42),c(0)),d=function(){var e=Object(a.useState)(1),t=Object(l.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(Math.random),s=Object(l.a)(r,2),d=s[0],b=s[1],u=Object(a.useState)(""),h=Object(l.a)(u,2),m=h[0],p=h[1],O=Object(i.g)();Object(a.useEffect)((function(){window.location.href.indexOf("/insurance")>-1?n(1):window.location.href.indexOf("/graph")>-1?n(2):n(3)}),[d]);return Object(j.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(j.jsx)(o.b,{className:"navbar-brand",to:"/insurance-list?page=1",children:"Insurace"}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(j.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(j.jsx)("li",{className:"nav-item ".concat(1===c?"active":""),children:Object(j.jsx)(o.b,{className:"nav-link",to:"/insurance-list?page=1",onClick:function(){return b(Math.random())},children:"Insurance List"})}),Object(j.jsx)("li",{className:"nav-item ".concat(2===c?"active":""),children:Object(j.jsx)(o.b,{className:"nav-link",to:"/graph",onClick:function(){return b(Math.random())},children:"Charts"})}),Object(j.jsx)("li",{className:"nav-item ".concat(3===c?"active":""),children:Object(j.jsx)(o.b,{className:"nav-link",to:"/search",onClick:function(){return b(Math.random())},children:"Search Results"})})]}),Object(j.jsxs)("form",{className:"form-inline my-2 my-lg-0",children:[Object(j.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search with ID",value:m,onChange:function(e){return p(e.target.value)},"aria-label":"Search"}),Object(j.jsx)("button",{className:"btn btn-outline-success my-2 my-sm-0 search-btn",type:"button",onClick:function(){O.push("/search?id=".concat(m)),p(""),b(Math.random()),window.location.reload()},children:"Search"})]})]})]})},b=c(4),u=c.n(b),h=c(9),m=c(10),p=c.n(m),O=c.p+"static/media/spinner.b75b820d.gif",x=(c(71),function(){return Object(j.jsx)("div",{className:"spinner",children:Object(j.jsx)("img",{src:O,alt:"spinner"})})}),f=(c(32),function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(!1),s=Object(l.a)(r,2),o=s[0],d=s[1],b=Object(a.useState)(!1),m=Object(l.a)(b,2),O=m[0],f=m[1],g=Object(a.useState)([]),v=Object(l.a)(g,2),y=v[0],N=v[1],_=new URLSearchParams(window.location.search).get("page"),C="http://localhost:2300/api/v1",S=Object(i.g)();Object(a.useEffect)((function(){d(!0),_?isNaN(parseInt(_))||parseInt(_)<1||parseInt(_)>25?n(!1):n(!0):n(!1);var e=function(){var e=Object(h.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("".concat(C,"/page/").concat(_));case 2:t=e.sent,f(t.data.count),N(t.data.data),d(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var P=function(){var e=Object(h.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S.push("/insurance-list?page=1"),d(!0),e.next=4,p.a.get("".concat(C,"/page/1"));case 4:t=e.sent,f(t.data.count),N(t.data.data),t.data.data?n(!0):n(!1),d(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(h.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S.push("/insurance-list?page=".concat(_-1)),d(!0),e.next=4,p.a.get("".concat(C,"/page/").concat(_-1));case 4:t=e.sent,f(t.data.count),N(t.data.data),t.data.data?n(!0):n(!1),d(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(h.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S.push("/insurance-list?page=".concat(_+1)),d(!0),e.next=4,p.a.get("".concat(C,"/page/").concat(_+1));case 4:t=e.sent,f(t.data.count),N(t.data.data),t.data.data?n(!0):n(!1),d(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(h.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S.push("/insurance-list?page=".concat(O)),d(!0),e.next=4,p.a.get("".concat(C,"/page/").concat(O));case 4:t=e.sent,f(t.data.count),N(t.data.data),t.data.data?n(!0):n(!1),d(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)(j.Fragment,{children:[o&&Object(j.jsx)(x,{}),!o&&c&&y&&y.length>0&&Object(j.jsxs)("table",{className:"table table-striped",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Policy Id"}),Object(j.jsx)("th",{children:"Customer Id"}),Object(j.jsx)("th",{children:"Date of Purchase"}),Object(j.jsx)("th",{children:"Fuel"}),Object(j.jsx)("th",{children:"Vehicle Segment"}),Object(j.jsx)("th",{children:"Premium"}),Object(j.jsx)("th",{children:"Bodily Injury Liability"}),Object(j.jsx)("th",{children:"Personal Injury Protection"}),Object(j.jsx)("th",{children:"Property Damage Liability"}),Object(j.jsx)("th",{children:"Collision"}),Object(j.jsx)("th",{children:"Comprehensive"}),Object(j.jsx)("th",{children:"Customer Gender"}),Object(j.jsx)("th",{children:"Customer Income Group"}),Object(j.jsx)("th",{children:"Customer_Region"}),Object(j.jsx)("th",{children:"Customer Marital Status"}),Object(j.jsx)("th",{children:"Edit"})]})}),Object(j.jsx)("tbody",{children:y.map((function(e,t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e.Policy_id}),Object(j.jsx)("td",{children:e.Customer_id}),Object(j.jsx)("td",{children:e.Date_of_Purchase}),Object(j.jsx)("td",{children:e.Fuel}),Object(j.jsx)("td",{children:e.VEHICLE_SEGMENT}),Object(j.jsxs)("td",{children:["$",e.Premium]}),Object(j.jsx)("td",{children:1===e.bodily_injury_liability?"Yes":"No"}),Object(j.jsx)("td",{children:1===e.personal_injury_protection?"Yes":"No"}),Object(j.jsx)("td",{children:1===e.property_damage_liability?"Yes":"No"}),Object(j.jsx)("td",{children:1===e.collision?"Yes":"No"}),Object(j.jsx)("td",{children:1===e.comprehensive?"Yes":"No"}),Object(j.jsx)("td",{children:e.Customer_Gender}),Object(j.jsx)("td",{children:e.Customer_Income_Group}),Object(j.jsx)("td",{children:e.Customer_Region}),Object(j.jsx)("td",{children:1===e.Customer_Marital_status?"Yes":"No"}),Object(j.jsx)("td",{children:Object(j.jsx)("button",{type:"button",className:"btn btn-info btn-sm",onClick:function(){S.push("insurance-edit/".concat(e.Policy_id))},children:"Edit"})})]},t)}))})]}),!o&&c&&Object(j.jsxs)("div",{className:"col-12 pagination",children:[Object(j.jsxs)("button",{type:"button",className:"btn btn-success btn-large prev-btn ".concat(_<2?"disable":""),disabled:_<2,onClick:P,children:["<< ","First"]}),Object(j.jsxs)("button",{type:"button",className:"btn btn-success btn-large prev-btn ".concat(_<2?"disable":""),disabled:_<2,onClick:I,children:["< ","Previous"]}),Object(j.jsxs)("button",{type:"button",className:"btn btn-success btn-large next-btn ".concat(_<1||_>=O?"disable":""),disabled:_<1||_>=O,onClick:w,children:["Next","> "]}),Object(j.jsxs)("button",{type:"button",className:"btn btn-success btn-large next-btn ".concat(_<1||_>=O?"disable":""),disabled:_<1||_>=O,onClick:E,children:["Last",">> "]})]})]})}),g=c(36),v=(c(72),c.p+"static/media/loader2.9a81c289.gif"),y=(c(73),function(){return Object(j.jsx)("div",{className:"loader",children:Object(j.jsx)("img",{src:v,alt:"loader"})})}),N=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(!1),s=Object(l.a)(r,2),i=s[0],o=s[1],d=Object(a.useState)([]),b=Object(l.a)(d,2),m=b[0],O=b[1];return Object(a.useEffect)((function(){n(!0);var e=function(){var e=Object(h.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("".concat("http://localhost:2300/api/v1","/chart"));case 2:t=e.sent,O(t.data.data),t.data.data?o(!0):o(!1),n(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(j.jsxs)(j.Fragment,{children:[c&&Object(j.jsx)(y,{}),!c&&i&&m&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h3",{className:"sales-heading",children:"No of Insurance Sales Region Wise"}),Object(j.jsx)("div",{className:"col-12 chart-wrapper",children:Object(j.jsx)(g.a,{height:450,width:"100%",options:{maintainAspectRatio:!1,scales:{y:{ticks:{beginAtZero:!0}}},legend:{labels:{fontSize:25}}},data:{labels:["January","February","March","April","May","June","July","August","September","October","November","December"],datasets:[{label:"North Region",data:m.North,backgroundColor:"rgba(255, 99, 132, 0.2)",borderColor:"rgba(255, 99, 132, 1)",borderWidth:1},{label:"South Region",data:m.South,backgroundColor:"rgba(54, 162, 235, 0.2)",borderColor:"rgba(54, 162, 235, 1)",borderWidth:1},{label:"East Region",data:m.East,backgroundColor:"rgba(255, 206, 86, 0.2)",borderColor:"rgba(255, 206, 86, 1)",borderWidth:1},{label:"West Region",data:m.West,backgroundColor:"rgb(204, 255, 204)",borderColor:"rgba(75, 192, 192, 1)",borderWidth:1}]}})})]})]})},_=(c(74),function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(!1),s=Object(l.a)(r,2),o=s[0],d=s[1],b=Object(a.useState)([]),m=Object(l.a)(b,2),O=m[0],f=m[1],g=new URLSearchParams(window.location.search).get("id"),v=Object(i.g)();return Object(a.useEffect)((function(){d(!0);var e=function(){var e=Object(h.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("".concat("http://localhost:2300/api/v1","/search/").concat(g));case 2:t=e.sent,f(t.data.data),d(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();g?isNaN(parseInt(g))||parseInt(g)<1?(n(!1),d(!1)):(n(!0),e()):(n(!1),d(!1))}),[g]),Object(j.jsxs)(j.Fragment,{children:[o&&Object(j.jsx)(x,{}),!o&&c&&O&&O.length>0&&Object(j.jsxs)("table",{className:"table table-striped search-table",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Policy Id"}),Object(j.jsx)("th",{children:"Customer Id"}),Object(j.jsx)("th",{children:"Date of Purchase"}),Object(j.jsx)("th",{children:"Fuel"}),Object(j.jsx)("th",{children:"Vehicle Segment"}),Object(j.jsx)("th",{children:"Premium"}),Object(j.jsx)("th",{children:"Bodily Injury Liability"}),Object(j.jsx)("th",{children:"Personal Injury Protection"}),Object(j.jsx)("th",{children:"Property Damage Liability"}),Object(j.jsx)("th",{children:"Collision"}),Object(j.jsx)("th",{children:"Comprehensive"}),Object(j.jsx)("th",{children:"Customer Gender"}),Object(j.jsx)("th",{children:"Customer Income Group"}),Object(j.jsx)("th",{children:"Customer_Region"}),Object(j.jsx)("th",{children:"Customer Marital Status"}),Object(j.jsx)("th",{children:"Edit"})]})}),Object(j.jsx)("tbody",{children:O.map((function(e,t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e.Policy_id}),Object(j.jsx)("td",{children:e.Customer_id}),Object(j.jsx)("td",{children:e.Date_of_Purchase}),Object(j.jsx)("td",{children:e.Fuel}),Object(j.jsx)("td",{children:e.VEHICLE_SEGMENT}),Object(j.jsxs)("td",{children:["$",e.Premium]}),Object(j.jsx)("td",{children:1===e.bodily_injury_liability?"Yes":"No"}),Object(j.jsx)("td",{children:1===e.personal_injury_protection?"Yes":"No"}),Object(j.jsx)("td",{children:1===e.property_damage_liability?"Yes":"No"}),Object(j.jsx)("td",{children:1===e.collision?"Yes":"No"}),Object(j.jsx)("td",{children:1===e.comprehensive?"Yes":"No"}),Object(j.jsx)("td",{children:e.Customer_Gender}),Object(j.jsx)("td",{children:e.Customer_Income_Group}),Object(j.jsx)("td",{children:e.Customer_Region}),Object(j.jsx)("td",{children:1===e.Customer_Marital_status?"Yes":"No"}),Object(j.jsx)("td",{children:Object(j.jsx)("button",{type:"button",className:"btn btn-info btn-sm",onClick:function(){v.push("insurance-edit/".concat(e.Policy_id))},children:"Edit"})})]},t)}))})]}),!o&&!O.length>0&&Object(j.jsx)("h5",{children:"No Result Found with your given ID. Plese Search with valid ID to get result."})]})}),C=c(5),S=c(13),P=(c(75),function(e){var t=Object(a.useState)(!1),c=Object(l.a)(t,2),n=c[0],r=c[1],s=Object(a.useState)(),o=Object(l.a)(s,2),d=o[0],b=o[1],m=Object(a.useState)(!1),O=Object(l.a)(m,2),f=O[0],g=O[1],v=Object(a.useState)(!1),y=Object(l.a)(v,2),N=y[0],_=y[1],P=e.match.params.id,I="http://localhost:2300/api/v1",w=Object(i.g)(),E=Object(a.useReducer)((function(e,t){return"text-change"===t.type?Object(S.a)(Object(S.a)({},e),{},Object(C.a)({},t.name,t.payload)):e}),{Policy_id:"",Date_of_Purchase:"",Customer_id:"",Fuel:"",VEHICLE_SEGMENT:"",Premium:"",bodily_injury_liability:"",personal_injury_protection:"",property_damage_liability:"",collision:"",comprehensive:"",Customer_Gender:"",Customer_Income_Group:"",Customer_Region:"",Customer_Marital_status:""}),k=Object(l.a)(E,2),F=k[0],G=k[1],M=function(e){var t=e.target.value;"No"!==t&&"no"!==t||(t=0),"Yes"!==t&&"yes"!==t||(t=1),G({type:"text-change",name:e.target.name,payload:t})};Object(a.useEffect)((function(){g(!0);var e=function(){var e=Object(h.a)(u.a.mark((function e(){var t,c,a,n,r,s,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("".concat(I,"/").concat(P));case 2:if((t=e.sent).data.data)for(b(t.data.data),c=t.data.data,a=0,n=Object.entries(c);a<n.length;a++)r=Object(l.a)(n[a],2),s=r[0],i=r[1],G({type:"text-change",name:s,payload:i});g(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();!P||P.length<1||isNaN(P)?(r(!1),g(!1)):(r(!0),e())}),[]);var Y=function(){var e=Object(h.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(F&&F.Premium&&F.Premium>0&&F.Premium<=1e6)){e.next=9;break}return _(!1),g(!0),e.next=5,p.a.put("".concat(I,"/").concat(P),Object(S.a)({},F));case 5:e.sent.data&&w.push("/insurance-list?page=1"),e.next=10;break;case 9:_(!0);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)(j.Fragment,{children:[f&&Object(j.jsx)(x,{}),!f&&n&&d&&Object(j.jsx)("div",{className:"col-md-4 offset-md-4 form-wrapper",children:Object(j.jsxs)("form",{className:"form",method:"POST",children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"policyId",children:"Policy Id"}),Object(j.jsx)("input",{type:"text",className:"form-control",id:"policyId",name:"Policy_id",placeholder:F.Policy_id,disabled:!0})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"customerId",children:"Customer Id"}),Object(j.jsx)("input",{type:"text",className:"form-control",id:"customerId",name:"Customer_id",placeholder:F.Customer_id.toString(),disabled:!0})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"date",children:"Date of Purchase"}),Object(j.jsx)("input",{type:"text",className:"form-control",id:"date",name:"Date_of_Purchase",placeholder:F.Date_of_Purchase,disabled:!0})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"fuel",children:"Fuel"}),Object(j.jsxs)("select",{type:"text",className:"form-control",id:"fuel",name:"Fuel",onChange:function(e){return M(e)},value:F.Fuel,children:[Object(j.jsx)("option",{val:"CNG",children:"CNG"}),Object(j.jsx)("option",{val:"Petrol",children:"Petrol"}),Object(j.jsx)("option",{val:"Diesel",children:"Diesel"})]})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"segment",children:"Vehicle Segment"}),Object(j.jsxs)("select",{type:"text",className:"form-control",id:"segment",name:"VEHICLE_SEGMENT",onChange:function(e){return M(e)},value:F.VEHICLE_SEGMENT,children:[Object(j.jsx)("option",{val:"A",children:"A"}),Object(j.jsx)("option",{val:"B",children:"B"}),Object(j.jsx)("option",{val:"C",children:"C"})]})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"premium",children:"Premium"}),Object(j.jsx)("input",{type:"number",className:"form-control ".concat(N?"red-border":""),id:"premium",name:"Premium",onChange:function(e){return M(e)},value:F.Premium})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"body",children:"Body Injury Liablity"}),Object(j.jsx)("input",{type:"text",className:"form-control",id:"body",name:"bodily_injury_liability",placeholder:0===F.personal_injury_protection?"No":"Yes",disabled:!0})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"perosnal",children:"Personal Injury Protection"}),Object(j.jsx)("input",{type:"text",className:"form-control",id:"perosnal",name:"personal_injury_protection",placeholder:0===F.personal_injury_protection?"No":"Yes",disabled:!0})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"property",children:"Property Damage Liablity"}),Object(j.jsx)("input",{type:"text",className:"form-control",id:"property",name:"property_damage_liability",placeholder:0===F.property_damage_liability?"No":"Yes",disabled:!0})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"collision",children:"Collision"}),Object(j.jsx)("input",{type:"text",className:"form-control",id:"collision",name:"collision",placeholder:0===F.collision?"No":"Yes",disabled:!0})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"comprehensive",children:"Comprehensive"}),Object(j.jsx)("input",{type:"text",className:"form-control",id:"comprehensive",name:"comprehensive",placeholder:0===F.comprehensive?"No":"Yes",disabled:!0})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"gender",children:"Gender"}),Object(j.jsx)("input",{type:"text",className:"form-control",id:"Customer_Gender",name:"Policy_id",placeholder:F.Customer_Gender.toString(),disabled:!0})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"income",children:"Income Group"}),Object(j.jsxs)("select",{type:"text",className:"form-control",id:"income",name:"Customer_Income_Group",onChange:function(e){return M(e)},value:F.Customer_Income_Group,children:[Object(j.jsx)("option",{val:"0- $25K",children:"0- $25K"}),Object(j.jsx)("option",{val:"$25-$70K",children:"$25-$70K"}),Object(j.jsxs)("option",{val:">$70K",children:[">","$70K"]})]})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"region",children:"Region"}),Object(j.jsxs)("select",{type:"text",className:"form-control",id:"region",name:"Customer_Region",onChange:function(e){return M(e)},value:F.Customer_Region,children:[Object(j.jsx)("option",{val:"East",children:"East"}),Object(j.jsx)("option",{val:"West",children:"West"}),Object(j.jsx)("option",{val:"North",children:"North"}),Object(j.jsx)("option",{val:"South",children:"South"})]})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"maritial",children:"Maritial Status"}),Object(j.jsxs)("select",{type:"text",className:"form-control",id:"maritial",name:"Customer_Marital_status",onChange:function(e){return M(e)},defaultValue:0===F.Customer_Marital_status?"No":"Yes",children:[Object(j.jsx)("option",{val:"Yes",children:"Yes"}),Object(j.jsx)("option",{val:"No",children:"No"})]})]}),N&&Object(j.jsx)("h6",{className:"error",children:"Please enter correct value of Premium, must be between 1 to 10,00,000"}),Object(j.jsx)("button",{type:"button",className:"btn btn-primary btn-lg",onClick:Y,children:"Update"})]})})]})});var I=function(){var e=Object(j.jsxs)(i.d,{children:[Object(j.jsx)(i.b,{path:"/insurance-list",children:Object(j.jsx)(f,{})}),Object(j.jsx)(i.b,{path:"/graph",children:Object(j.jsx)(N,{})}),Object(j.jsx)(i.b,{path:"/search",children:Object(j.jsx)(_,{})}),Object(j.jsx)(i.b,{path:"/insurance-edit/:id",component:P}),Object(j.jsx)(i.a,{to:"/insurance-list?page=1"})]});return Object(j.jsx)(o.a,{children:Object(j.jsxs)("div",{className:"",children:[Object(j.jsx)(d,{}),Object(j.jsx)("div",{className:"col-12 body",children:e}),Object(j.jsx)("footer",{className:"page-footer font-small",children:Object(j.jsxs)("div",{className:"footer-copyright text-center py-2",children:["\xa9 2021 Copyright:",Object(j.jsx)("a",{href:"https://insurancechart.com/",children:" InsuranceChart.com"})]})})]})})};s.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(I,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.c8c032f4.chunk.js.map