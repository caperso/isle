(this.webpackJsonpisle2=this.webpackJsonpisle2||[]).push([[8],{332:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(2),c=t(9),o=t(10);function l(){var e=Object(c.a)(["\n    font-size: 1.5rem;\n    color: rgb(78, 78, 78, 0.6);\n    padding: 2rem;\n    .content:hover {\n        color: rgb(178, 178, 178, 0.6);\n    }\n    .contact-list {\n        padding: 2rem 0;\n        display: flex;\n        flex-flow: column;\n        color: rgb(178, 178, 178, 0.6);\n        a > span {\n            line-height: 3em;\n            font-weight: 700;\n            padding: 0 0.25em 0 0;\n        }\n        a:hover {\n            color: white;\n        }\n        [class*='contact-'] {\n            padding: 0.5rem 0;\n        }\n    }\n"]);return l=function(){return e},e}var s=function(){return r.a.createElement(m,null,r.a.createElement("div",{className:"content"},"-- Details not available --"),r.a.createElement("div",{className:"contact-list"},r.a.createElement("div",{className:"contact-title"},"You may contact me with"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/caperso",className:"contact-github "},r.a.createElement("span",{className:"iconfont icon-github"})," https://github.com/caperso"),r.a.createElement("a",{href:"mail:273964183@qq.com",className:"contact-mail "},r.a.createElement("span",{className:"iconfont icon-mail"})," 273964183@qq.com"),r.a.createElement("a",{href:"tencent://message/?uin=273964183",className:"contact-chat"},r.a.createElement("span",{className:"iconfont icon-chat"})," 273964183")))},m=o.a.div(l()),u=t(191),p=t(331),h=t(12);function d(){var e=Object(c.a)(["\n    .chart-item {\n        padding: 30px;\n    }\n"]);return d=function(){return e},e}var g=r.a.lazy((function(){return Promise.all([t.e(4),t.e(1)]).then(t.bind(null,330))})),f=function(e){var n=e.api,t=e.children,i=e.extractMethod,c=Object(a.useState)([]),o=Object(u.a)(c,2),l=o[0],s=o[1],m=Object(a.useState)([]),p=Object(u.a)(m,2),d=p[0],f=p[1];return Object(a.useEffect)((function(){var e=function(){return h.a.getListData(n).then((function(e){var n=e.data.map((function(e){return e.record}));s(n)}))};e();var t=setInterval(e,36e5);return function(){return clearInterval(t)}}),[n]),Object(a.useEffect)((function(){if(l.length){var e=b(l,i);e&&f(e)}}),[l,i]),r.a.createElement(v,null,r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},t,d.map((function(e,n){return r.a.createElement(g,{data:e,key:n})}))))},v=o.a.div(d()),b=function(e,n){var t=Object.keys(e[0]).map((function(e){return{name:e,xValue:[],yValue:[]}}));return t.forEach((function(t){e.forEach((function(e){if(Object.keys(e).length){var a=e[t.name],r=a.value,i=a.timestamp;t.xValue.push(Object(p.a)(parseInt(i,10),"HH@dd/MM/yyyy")),t.yValue.push(n?n(r):function(e){return parseInt(e.match(/(\d)+/g)[0],10)}(r))}}))})),t},E=function(){return r.a.createElement(f,{api:"list/estate"})},x=function(){return r.a.createElement(f,{api:"list/price/youlinghu",extractMethod:function(e){return parseInt(e.match(/(\d+)/g)[0],10)}})},w=function(){return r.a.createElement("div",null,r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/home/graphs/estate"},r.a.createElement(E,null)),r.a.createElement(i.b,{path:"/home/graphs/price"},r.a.createElement(x,null)),r.a.createElement(i.b,{path:"/home/graphs/marketing"},"Market data not available still digging")))},y=t(190);t(193);function j(){var e=Object(c.a)(["\n    width: 100%;\n    height: 2em;\n    line-height: 2em;\n"]);return j=function(){return e},e}var k=o.a.div(j());function N(){var e=Object(c.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 655px;\n    position: relative;\n\n    /* css hack */\n    .g-levels-wrapper {\n        div {\n            .g-levels-one {\n                padding: 0.5rem 0;\n                color: #444;\n                animation: none;\n\n                &:hover {\n                    color: white;\n                }\n\n                &:hover::after {\n                    color: #eee;\n                    font-weight: 300;\n                    font-size: 26px;\n                }\n            }\n        }\n    }\n"]);return N=function(){return e},e}var O=[{name:"Gearware",route:"gears",staticUrl:"https://gears.caperal.cn",description:"React UI library"},{name:"Kaleidoscope",route:"kai",description:"\u4e00\u952e\u751f\u6210Creo\u5173\u7cfb\u7a0b\u5e8f"}],C=[{name:"Charts",route:"graphs",description:"From my data collector",deep:[{name:"Real Estate",route:"estate",description:"House Stock"},{name:"Price",route:"price",description:"Some Item Price"}]},{name:"Notes",description:"My notes",deep:[{name:"FE Technics",staticUrl:"https://caperso.github.io/handnote/",description:"My FE handnote"},{name:"Node & Service",description:"Preparing"},{name:"C++ & Algorithm",description:"Preparing"}]},{route:"about",name:"About",description:"Contact and more"}],I=function(){var e=Object(i.g)();return r.a.createElement(z,null,r.a.createElement(y.b,{data:O}),r.a.createElement(k,null),r.a.createElement(y.b,{data:C,singleActiveStyle:{color:"white",animation:"none"},defaultExpanded:!1,onChangeRoute:function(n){var t="/home/".concat(n);e.replace(t),console.log(t)}}))},z=o.a.div(N());function M(){var e=Object(c.a)(["\n    position: relative;\n    color: white;\n    min-height: 120vh;\n    z-index: 1;\n\n    .title {\n        padding: 10rem 2rem 4rem;\n        @media screen and (max-height: 920px) {\n            padding: 4rem 2rem 4rem;\n        }\n\n        .spot-light {\n            position: relative;\n            font-size: 50px;\n            font-weight: 600;\n            line-height: 1.25;\n            color: #444;\n            text-transform: uppercase;\n            letter-spacing: 0.5rem;\n            &::after {\n                content: attr(data-spotlight);\n                position: absolute;\n                left: 0;\n                top: 0;\n                color: transparent;\n                -webkit-background-clip: text;\n                background-clip: text;\n                background-image: linear-gradient(to right, #12c2e9, #c471ed, #f64f59);\n                clip-path: ellipse(50px 50px at -20% 50%);\n                animation: spotlight 3s infinite ease-in-out;\n            }\n        }\n\n        & > h1,\n        h2 {\n        }\n\n        & > h2 {\n            font-weight: 600;\n            line-height: 1.25;\n            font-size: 30px;\n        }\n\n        & > p {\n            padding-top: 0.5rem;\n            font-size: 15px;\n            line-height: 15px;\n            margin-top: 10px;\n        }\n    }\n    .main-view {\n        padding: 0 2rem;\n        min-height: calc(100vh - 400px);\n    }\n"]);return M=function(){return e},e}var S=o.a.div(M());n.default=function(){return r.a.createElement(S,null,r.a.createElement("div",{className:"title"},r.a.createElement("h1",{className:"spot-light","data-spotlight":"Caperal"},"Caperal"),r.a.createElement("br",null),r.a.createElement("h2",null,"Caper's spacetown for "),r.a.createElement("h2",null,"Data Charts, Notes, React Library, Docs"),r.a.createElement("p",null,"For now, I'm developing \u2003",r.a.createElement("span",{role:"img","aria-label":"gear"},"\u2699\ufe0f Gearware \u2699\ufe0f"))),r.a.createElement(I,null),r.a.createElement("div",{className:"main-view"},r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/home/graphs",component:w}),r.a.createElement(i.b,{path:"/home/about",component:s}))))}}}]);
//# sourceMappingURL=8.243ce84c.chunk.js.map