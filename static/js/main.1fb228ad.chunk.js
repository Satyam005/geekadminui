(this.webpackJsonpadminneode=this.webpackJsonpadminneode||[]).push([[0],{369:function(e,s,t){},448:function(e,s,t){},450:function(e,s,t){},451:function(e,s,t){},453:function(e,s,t){},454:function(e,s,t){"use strict";t.r(s);var c=t(0),a=t.n(c),n=t(15),i=t.n(n),r=(t(369),t(237)),l=t(238),o=t(232),j=t.n(o),d=t(350),b=t.n(d),m=(t(448),t(12));var O=function(){var e=Object(c.useState)([]),s=Object(l.a)(e,2),t=s[0],a=s[1],n=Object(c.useState)([]),i=Object(l.a)(n,2),o=i[0],d=i[1];Object(c.useEffect)((function(){O()}),[]);var O=function(){b.a.get("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json").then((function(e){var s=e.data;a(s)})).catch((function(e){return console.log("Error : ".concat(e))}))};return Object(m.jsx)("div",{className:"container",children:Object(m.jsx)(j.a,{data:t,style:{width:"100%"},columns:[{title:"ID",field:"id"},{title:"Name",field:"name"},{title:"Email",field:"email"},{title:"Role",field:"role"}],onSelectionChange:function(e){return d(e)},editable:{onRowDelete:function(e){return new Promise((function(s,c){var n=e.tableData.id,i=Object(r.a)(t);i.splice(n,1),setTimeout((function(){a(i),s()}),2e3)}))},onRowUpdate:function(e,s){return new Promise((function(c,n){var i=s.tableData.id,l=Object(r.a)(t);l[i]=e,setTimeout((function(){a(l),c()}),2e3)}))}},options:{actionsColumnIndex:-1,selection:!0,showTitle:!1,paging:!0,pageSize:10,pageSizeOptions:[10]},actions:[{icon:"delete",tooltip:"Delete all selected rows",onClick:function(){return function(){var e=t.filter((function(e){return!o.includes(e)}));a(e)}()}}]})})};t(450);var u=function(){return Object(m.jsxs)("div",{className:"home",children:[Object(m.jsx)("div",{className:"row"}),Object(m.jsxs)("div",{className:"headings",children:[Object(m.jsx)("h1",{children:"geektrust Admin"}),Object(m.jsx)("h2",{children:"DASHBOARD"})]})]})},h=(t(451),t(485)),x=t(486),f=t(487),N=t(488),p=t(489),v=t(143);function g(){return Object(m.jsx)("div",{className:"sidebar",children:Object(m.jsxs)("div",{className:"sidebarWrapper",children:[Object(m.jsxs)("div",{className:"sidebarMenu",children:[Object(m.jsx)("h3",{className:"sidebarTitle",children:"Dashboard"}),Object(m.jsxs)("ul",{className:"sidebarList",children:[Object(m.jsx)(v.b,{to:"/",className:"link",style:{textDecoration:"none"},children:Object(m.jsxs)("li",{className:"sidebarListItem",children:[Object(m.jsx)(h.a,{className:"sidebarIcon"}),"Home"]})}),Object(m.jsx)(v.b,{to:"/users",className:"link",style:{textDecoration:"none"},children:Object(m.jsxs)("li",{className:"sidebarListItem",children:[Object(m.jsx)(x.a,{className:"sidebarIcon"}),"Users"]})})]})]}),Object(m.jsxs)("div",{className:"sidebarMenu",children:[Object(m.jsx)("h3",{className:"sidebarTitle",children:"Notifications"}),Object(m.jsxs)("ul",{className:"sidebarList",children:[Object(m.jsxs)("li",{className:"sidebarListItem",children:[Object(m.jsx)(f.a,{className:"sidebarIcon"}),"Mail"]}),Object(m.jsxs)("li",{className:"sidebarListItem",children:[Object(m.jsx)(N.a,{className:"sidebarIcon"}),"Feedback"]}),Object(m.jsxs)("li",{className:"sidebarListItem",children:[Object(m.jsx)(p.a,{className:"sidebarIcon"}),"Messages"]})]})]})]})})}t(453);var I=t(490),w=t(491),D=t(492);var k=function(){return Object(m.jsx)("div",{className:"topbar",children:Object(m.jsxs)("div",{className:"topbarWrapper",children:[Object(m.jsx)("div",{className:"topLeft",children:Object(m.jsx)("span",{className:"logo",children:"geektrust.in"})}),Object(m.jsxs)("div",{className:"topRight",children:[Object(m.jsxs)("div",{className:"topbarIconContainer",children:[Object(m.jsx)(I.a,{}),Object(m.jsx)("span",{className:"topIconBadge",children:"2"})]}),Object(m.jsx)("div",{className:"topbarIconContainer",children:Object(m.jsx)(w.a,{})}),Object(m.jsx)("div",{className:"topbarIconContainer",children:Object(m.jsx)(D.a,{})}),Object(m.jsx)("img",{src:"https://icons-for-free.com/iconfiles/png/512/boss+icon-1320184414387489483.png",alt:"avatar",className:"topAvatar"})]})]})})},L=t(28);var S=function(){return Object(m.jsxs)(v.a,{children:[Object(m.jsx)(k,{}),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(g,{}),Object(m.jsxs)(L.c,{children:[Object(m.jsx)(L.a,{exact:!0,path:"/",children:Object(m.jsx)(u,{})}),Object(m.jsx)(L.a,{exact:!0,path:"/users",children:Object(m.jsx)(O,{})})]})]})]})};i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(S,{})}),document.getElementById("root"))}},[[454,1,2]]]);
//# sourceMappingURL=main.1fb228ad.chunk.js.map