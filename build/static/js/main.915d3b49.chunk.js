(this.webpackJsonpisle2=this.webpackJsonpisle2||[]).push([[1],{20:function(e,n,t){},41:function(e,n,t){e.exports=t(69)},68:function(e,n,t){},69:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(30),o=t.n(i),c=(t(20),t(31)),l=t(11),s=t.n(l),u=t(13),m=t(32),h=t(33),p=t(14),d=t.n(p),f=function(){function e(){Object(m.a)(this,e)}return Object(h.a)(e,null,[{key:"getListData",value:function(){var e=Object(u.a)(s.a.mark((function e(n,t){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t?"".concat(n,"/").concat(t):"".concat(n),e.next=3,d.a.get("".concat(this.serverUrl,"/").concat(a));case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e,this)})));return function(n,t){return e.apply(this,arguments)}}()},{key:"sendHeartbeat",value:function(){var e=Object(u.a)(s.a.mark((function e(n,t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post("".concat(this.serverUrl,"/").concat(n),t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e,this)})));return function(n,t){return e.apply(this,arguments)}}()}]),e}();function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(t,!0).forEach((function(n){Object(c.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}f.serverUrl="https://caperal.cn:3141";var v=function(){return Object(a.useEffect)((function(){var e={route:window.location.href,message:""},n=b({},e,{message:"step in"}),t=b({},e,{message:"step out"});f.sendHeartbeat("server/heartbeat/beep",n),window.onbeforeunload=function(){f.sendHeartbeat("server/heartbeat/beep",t)}}),[]),r.a.createElement(r.a.Fragment,null)},E=t(9),w=t(3),x=t(1),y=t(2);function j(){var e=Object(x.a)(["\n    font-size: 1.5rem;\n    color: rgb(78, 78, 78, 0.6);\n    padding: 2rem;\n    .content:hover {\n        color: rgb(178, 178, 178, 0.6);\n    }\n    .contact-list {\n        padding: 2rem 0;\n        display: flex;\n        flex-flow: column;\n        color: rgb(178, 178, 178, 0.6);\n        a > span {\n            line-height: 3em;\n            font-weight: 700;\n            padding: 0 0.25em 0 0;\n        }\n        a:hover {\n            color: white;\n        }\n        [class*='contact-'] {\n            padding: 0.5rem 0;\n        }\n    }\n"]);return j=function(){return e},e}var O=function(){return r.a.createElement(k,null,r.a.createElement("div",{className:"content"},"-- Details not available --"),r.a.createElement("div",{className:"contact-list"},r.a.createElement("div",{className:"contact-title"},"You may contact me with"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/caperso",className:"contact-github "},r.a.createElement("span",{className:"iconfont icon-github"})," https://github.com/caperso"),r.a.createElement("a",{href:"mail:273964183@qq.com",className:"contact-mail "},r.a.createElement("span",{className:"iconfont icon-mail"})," 273964183@qq.com"),r.a.createElement("a",{href:"tencent://message/?uin=273964183",className:"contact-chat"},r.a.createElement("span",{className:"iconfont icon-chat"})," 273964183")))},k=y.a.div(j()),N=t(10);function P(){var e=Object(x.a)(["\n    padding: 0.5rem 0;\n    font-size: 45px;\n    cursor: pointer;\n    font-weight: bold;\n    text-decoration: none;\n    color:#444;\n    ","\n\n    &:hover {\n        color: white;\n    }\n\n    &:hover::after {\n        content: attr(data-hover);\n        color: #ccc;\n        font-weight: 300;\n        font-size: 26px;\n        opacity: 0;\n        padding-left:0.5em;\n        animation: fade-in 0.45s forwards;\n    }\n"]);return P=function(){return e},e}var U=y.a.div(P(),(function(e){return e.theme.active?"color: white;":""})),C=function(e){var n=Object(a.useState)(!1),t=Object(N.a)(n,2),i=t[0],o=t[1],c=Object(w.f)();return r.a.createElement(U,{onClick:e.static?function(){window.location.replace(e.to)}:function(){i?c.push("/"):c.push(e.to),o((function(e){return!e}))},theme:{active:i},"data-hover":e.description},e.children)},z=t(71),I=r.a.lazy((function(){return Promise.all([t.e(3),t.e(0)]).then(t.bind(null,320))})),D=function(e){var n=e.api,t=e.children,i=e.extractMethod,o=Object(a.useState)([]),c=Object(N.a)(o,2),l=c[0],s=c[1],u=Object(a.useState)([]),m=Object(N.a)(u,2),h=m[0],p=m[1];return Object(a.useEffect)((function(){var e=function(){return f.getListData(n).then((function(e){var n=e.data.map((function(e){return e.record}));s(n)}))};e();var t=setInterval(e,36e5);return function(){return clearInterval(t)}}),[n]),Object(a.useEffect)((function(){if(l.length){var e=H(l,i);e&&p(e)}}),[l,i]),r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},t,h.map((function(e,n){return r.a.createElement(I,{data:e,key:n})})))},H=function(e,n){var t=Object.keys(e[0]).map((function(e){return{name:e,xValue:[],yValue:[]}}));return t.forEach((function(t){e.forEach((function(e){if(Object.keys(e).length){var a=e[t.name],r=a.value,i=a.timestamp;t.xValue.push(Object(z.a)(parseInt(i,10),"HH@dd/MM/yyyy")),t.yValue.push(n?n(r):function(e){return parseInt(e.match(/(\d)+/g)[0],10)}(r))}}))})),t},M=function(){return r.a.createElement(D,{api:"list/estate"})},S=function(){return r.a.createElement(D,{api:"list/price/youlinghu",extractMethod:function(e){return parseInt(e.match(/(\d+)/g)[0],10)}})};function _(){var e=Object(x.a)(["\n    display: flex;\n    flex-direction: column;\n    padding: 0 2rem;\n"]);return _=function(){return e},e}var F=function(){return r.a.createElement("div",null,r.a.createElement(L,null,r.a.createElement(C,{to:"/graphs/estate"},"Real Estate"),r.a.createElement(C,{to:"/graphs/price"},"Price"),r.a.createElement(C,{to:"/graphs/marketing"},"Marketing")),r.a.createElement(w.c,null,r.a.createElement(w.a,{path:"/graphs/estate"},r.a.createElement(M,null)),r.a.createElement(w.a,{path:"/graphs/price"},r.a.createElement(S,null)),r.a.createElement(w.a,{path:"/graphs/marketing"},"Market data not available still digging")))},L=y.a.div(_());function R(){var e=Object(x.a)(["\n    .thought-list-item {\n        position: relative;\n        overflow: hidden;\n    }\n\n    .thought-list-image,\n    .thought-list-text {\n        padding: 4rem 0 0 2rem;\n        box-sizing: border-box;\n        width: 32rem;\n\n        @media screen and (max-width: 768px) {\n            width: 80%;\n        }\n    }\n\n    .thought-list-text {\n        top: 0;\n        margin: 4rem 0 0 2rem;\n        opacity: 0;\n        height: 100%;\n        position: absolute;\n        white-space: pre-wrap;\n    }\n\n    .thought-list-text:hover,\n    .thought-list-image:hover ~ .thought-list-text {\n        opacity: 1;\n        background-color: #17171760;\n    }\n"]);return R=function(){return e},e}var q=[{title:"coon",imageUrl:"https://cdn.pixabay.com/photo/2017/01/15/19/04/red-panda-1982445__340.jpg",text:"the coon:\n\nOne of the coons just ran out of your mind"},{title:"the woods",imageUrl:"https://cdn.pixabay.com/photo/2018/08/21/23/29/fog-3622519__340.jpg",text:"the woods:\n\nQuite miss about it's peaceful sound"},{title:"the fall",imageUrl:"https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg",text:"the fall:\n\nEverything falls in the end, right?"}],A=function(){return r.a.createElement(B,null,q.map((function(e,n){return r.a.createElement("div",{className:"thought-list-item",key:n},r.a.createElement("img",{src:e.imageUrl,className:"thought-list-image",alt:""}),r.a.createElement("div",{className:"thought-list-text"},e.text))})))},B=y.a.div(R());function V(){var e=Object(x.a)(['\n.header-links > * {\n        margin-left: 1rem;\n        letter-spacing: 0.1rem;\n      }\n\n      .header-links > *:hover {\n        color: white;\n      }\n\n      .header-ham-button {\n        opacity: 0;\n        visibility: hidden;\n        position: absolute;\n        top: 50%;\n        right: 0;\n        transform: translateY(-50%);\n        display: block;\n        width: 1.5625rem;\n        height: 1.5625rem;\n        border: 0.08rem solid rgb(102, 102, 102);\n        border-radius: 0.175rem;\n        background-color: transparent;\n        cursor: pointer;\n\n        &:after {\n          content: "";\n          position: absolute;\n          left: 50%;\n          transform: translateX(-50%);\n          width: 60%;\n          height: 100%;\n          background: repeating-linear-gradient(\n            transparent 0,\n            transparent 20%,\n            rgb(142, 142, 142) 22%,\n            rgb(142, 142, 142) 28%,\n            transparent 30%,\n            transparent 45%,\n            rgb(142, 142, 142) 47%,\n            rgb(142, 142, 142) 53%,\n            transparent 55%,\n            transparent 70%,\n            rgb(142, 142, 142) 72%,\n            rgb(142, 142, 142) 78%,\n            transparent 80%,\n            transparent 100%\n          );\n        }\n      }\n\n      @media screen and (max-width: 768px) {\n        .header-links {\n          display: flex;\n          position: absolute;\n          top: calc(2rem + 1.5625rem / 2);\n          right: 0%;\n          line-height: 3.15;\n          text-align: right;\n          flex-flow: column;\n          justify-content: flex-start;\n        }\n\n        .header-links {\n          opacity: 0;\n          visibility: hidden;\n        }\n\n        .header-ham-button {\n          opacity: 1;\n          visibility: visible;\n        }\n\n        .header-ham-button:hover ~ .header-links,\n        .header-links:hover {\n          opacity: 1;\n          visibility: visible;\n          border-top: none;\n          border-right: none;\n          border-radius: 2px;\n        }\n      }\n    }\n']);return V=function(){return e},e}var G=function(){return r.a.createElement(T,null,r.a.createElement("i",{className:"header-ham-button",onClick:function(){},"aria-label":"menu"}),r.a.createElement("div",{className:"header-links"},r.a.createElement(E.b,{to:"/thoughts",className:"header-link"},"THOUGHTS"),r.a.createElement(E.b,{to:"/about",className:"header-link"},"ABOUT")))},T=y.a.div(V());function W(){var e=Object(x.a)(["\n    width: 100%;\n    height: 2em;\n    line-height: 2em;\n"]);return W=function(){return e},e}var J=y.a.div(W());function Y(){var e=Object(x.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 655px;\n    padding: 0 2rem;\n    position: relative;\n"]);return Y=function(){return e},e}var K=[{staticUrl:"https://gears.caperal.cn",name:"Gearware",description:"React UI library"},{staticUrl:"",name:"Kaleidoscope",description:"\u4e00\u952e\u751f\u6210Creo\u5173\u7cfb\u7a0b\u5e8f"}],Q=[{urlParam:"graphs",name:"Charts",description:"From my data collector"},{staticUrl:"https://caperso.github.io/handnote/",name:"Notes",description:"My FE handnote"},{urlParam:"about",name:"About",description:"Contact and more"}],X=function(){var e=function(e){return r.a.createElement(C,{key:e.name,static:!!e.staticUrl,description:e.description?e.description:"",to:e.staticUrl?e.staticUrl:"/".concat(e.urlParam)},e.name)};return r.a.createElement($,null,K.map((function(n){return e(n)})),r.a.createElement(J,null),Q.map((function(n){return e(n)})),r.a.createElement(J,null))},$=y.a.div(Y());function Z(){var e=Object(x.a)(["\n    position: relative;\n    color: white;\n    min-height: 120vh;\n\n    .title {\n        padding: 4rem 2rem 4rem;\n\n        .spot-light {\n            position: relative;\n            font-size: 50px;\n            font-weight: 600;\n            line-height: 1.25;\n            color: #444;\n            text-transform: uppercase;\n            letter-spacing: 0.5rem;\n            &::after {\n                content: attr(data-spotlight);\n                position: absolute;\n                left: 0;\n                top: 0;\n                color: transparent;\n                -webkit-background-clip: text;\n                background-clip: text;\n                background-image: linear-gradient(to right, #12c2e9, #c471ed, #f64f59);\n                clip-path: ellipse(50px 50px at -20% 50%);\n                animation: spotlight 3s infinite ease-in-out;\n            }\n        }\n\n        & > h1,\n        h2 {\n        }\n\n        & > h2 {\n            font-weight: 600;\n            line-height: 1.25;\n            font-size: 30px;\n        }\n\n        & > p {\n            padding-top: 0.5rem;\n            font-size: 15px;\n            line-height: 15px;\n            margin-top: 10px;\n        }\n    }\n    .main-view {\n        padding: 0 2rem;\n        min-height: calc(100vh - 400px);\n    }\n    .header {\n        display: flex;\n        flex-flow: row nowrap;\n        justify-content: space-between;\n        height: 4rem;\n        line-height: 4rem;\n        padding: 0 2rem;\n        text-transform: uppercase;\n        box-sizing: border-box;\n        color: rgb(102, 102, 102);\n\n        .header-left {\n            letter-spacing: 0.2rem;\n\n            &:hover {\n                color: white;\n            }\n        }\n\n        .header-right {\n            display: flex;\n            flex-flow: row;\n            position: relative;\n            justify-content: center;\n        }\n    }\n"]);return Z=function(){return e},e}var ee=y.a.div(Z()),ne=function(){return r.a.createElement(ee,null,r.a.createElement(E.a,null,r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header-left"},"CAPERAL"),r.a.createElement("div",{className:"header-right"},r.a.createElement(G,null))),r.a.createElement("div",{className:"title"},r.a.createElement("h1",{className:"spot-light","data-spotlight":"Caperal"},"Caperal"),r.a.createElement("br",null),r.a.createElement("h2",null,"Caper's spacetown for "),r.a.createElement("h2",null,"Data Charts, React Library, Docs, Notes "),r.a.createElement("p",null,"For now, I'm developing \u2003",r.a.createElement("span",{role:"img","aria-label":"gear"},"\u2699\ufe0f Gearware \u2699\ufe0f"))),r.a.createElement(X,null),r.a.createElement("div",{className:"main-view"},r.a.createElement(w.c,null,r.a.createElement(w.a,{path:"/graphs",component:F}),r.a.createElement(w.a,{path:"/thoughts",component:A}),r.a.createElement(w.a,{path:"/about",component:O})))))};function te(){var e=Object(x.a)(["\n    color: white;\n    &:hover {\n        color: goldenrod;\n    }\n"]);return te=function(){return e},e}function ae(){var e=Object(x.a)(["\n    font-weight: 400;\n    display: flex;\n    flex-flow: column;\n    padding-top: 2rem;\n    font-size: 12px;\n    color: white;\n    position: relative;\n    z-index: 100;\n    &:hover > .site-text {\n        background-color: rgba(0, 0, 0, 0.9);\n    }\n    .site-text {\n        margin: 1em;\n        padding: 1.5em;\n        border-radius: 5px;\n        box-sizing: border-box;\n        display: flex;\n        flex-flow: row nowrap;\n        justify-content: space-between;\n        align-items: flex-end;\n\n        & > div {\n            text-align: right;\n            & > span {\n                &:hover {\n                    color: goldenrod;\n                }\n            }\n        }\n    }\n"]);return ae=function(){return e},e}var re=function(){return r.a.createElement(ie,null,r.a.createElement("div",{className:"site-text"},r.a.createElement(oe,{href:"http://www.beian.miit.gov.cn/","aria-label":"link and check for this site"},r.a.createElement("span",{role:"img","aria-label":"emoji"},"\ud83d\udcc4 IPC\u8bc1: \u6d59ICP\u590719047176\u53f7")),r.a.createElement("div",null,r.a.createElement("span",{role:"img","aria-label":"emoji"},"Written by Caper with passion and\xa0 \u2764\ufe0f"),r.a.createElement("br",null),r.a.createElement("span",{role:"img","aria-label":"emoji"},"Built with React & supported by Node on Nginx. \xa0\ud83d\udce6"))))},ie=y.a.div(ae()),oe=y.a.a(te()),ce=function(){return r.a.createElement("div",{className:"solar-syst"},r.a.createElement("div",{className:"sun"}),r.a.createElement("div",{className:"mercury"}),r.a.createElement("div",{className:"venus"}),r.a.createElement("div",{className:"earth"}),r.a.createElement("div",{className:"mars"}),r.a.createElement("div",{className:"jupiter"}),r.a.createElement("div",{className:"saturn"}),r.a.createElement("div",{className:"uranus"}),r.a.createElement("div",{className:"neptune"}),r.a.createElement("div",{className:"pluto"}),r.a.createElement("div",{className:"asteroids-belt"}))},le=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ne,null),r.a.createElement(re,null),r.a.createElement(ce,null),r.a.createElement(v,null))};t(68),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(le,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[41,2,4]]]);
//# sourceMappingURL=main.915d3b49.chunk.js.map