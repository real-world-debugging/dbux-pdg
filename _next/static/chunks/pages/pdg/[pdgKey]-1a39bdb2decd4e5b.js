(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[324],{5294:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pdg/[pdgKey]",function(){return r(2694)}])},5484:function(e,n,r){"use strict";r.d(n,{Z:function(){return o}});var t=r(5893),s=r(5675),i=r.n(s),c=r(1664),a=r.n(c),l=r(7294);function o(){var e=(0,l.useCallback)((function(){alert('Welcome to the Dbux-PDG Gallery! Explanations:\n\n1. This page ONLY hosts the gallery with visual results of running Dbux-PDG on a diverse set of algorithms from the javascript-algorithms repository.\n2. If you want to try out Dbux-PDG, click the "Try it!" button.\n3. In case of any questions, concerns or feedback, feel free to reach out to us directly (e.g. on Discord).')}),[]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("button",{className:"btn btn-primary font-08 py-0",onClick:e,children:"?"}),(0,t.jsx)(a(),{href:"https://discord.gg/QKgq9ZE",children:(0,t.jsx)("a",{title:"Join us on Discord",target:"_blank",children:(0,t.jsx)(i(),{layout:"fixed",width:"79",height:"20",src:"https://img.shields.io/discord/743765518116454432.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2",alt:"discord"})})}),(0,t.jsx)(a(),{href:"https://domiii.github.io/dbux/pdg",children:(0,t.jsx)("a",{title:"Try out Dbux-PDG",className:"nowrap",target:"_blank",children:"Try it!"})})]})}},9214:function(e,n,r){"use strict";function t(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return n.join("/").replace(/[/]+/g,"/")}r.d(n,{ex:function(){return c},dA:function(){return i}});var s=t("/dbux-pdg/");function i(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t(s,n)}function c(e,n){return{pathname:t(e),query:n}}},2694:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return C}});var t=r(7568),s=r(6042),i=r(4051),c=r.n(i),a=r(5893),l=r(7294),o=r(1163),d=r(5152),u=r.n(d),h=r(4184),f=r.n(h),x=r(5675),p=r.n(x),g={tweenShapes:!1,tweenPaths:!1};function m(e){var n=e.dot,r=e.exerciseId,t=e.index,i=(0,l.useRef)(null);return(0,l.useEffect)((function(){window.d3.select(i.current).graphviz((0,s.Z)({},g)).renderDot(n).on("end",(function(){var e=i.current.querySelector("svg");null===e||void 0===e||e.classList.add("h-100"),null===e||void 0===e||e.classList.add("w-100")}))}),[n]),(0,a.jsx)("div",{className:"h-100",ref:i},"".concat(r,"_").concat(t))}var v=r(9396),j=r(9534);function b(e){var n,r,t=e.loc,i=e.children,c=e.title,l=(0,j.Z)(e,["loc","children","title"]);if(!t)throw new Error('Invalid <JSALink /> missing "loc". - props: '.concat(JSON.stringify(e,null,2)));if(!t.filePath)throw new Error('Invalid <JSALink /> missing "loc.filePath" of type string. - props: '.concat(JSON.stringify(e,null,2)));if(!(null===(n=t.loc)||void 0===n||null===(r=n.start)||void 0===r?void 0:r.line))throw new Error('Invalid <JSALink /> missing "loc.start.line" of type string. - props: '.concat(JSON.stringify(e,null,2)));var o,d,u=(o=t.filePath,d=t.loc.start.line,"".concat("https://github.com/trekhleb/javascript-algorithms/blob/master","/").concat(o,"#L").concat(d));return(0,a.jsx)("a",(0,v.Z)((0,s.Z)({title:c,href:u},l),{children:i}))}var N={src:"/dbux-pdg/_next/static/media/back.b9449c89.svg",height:20,width:20},w=r(9214),y=r(1664),k=r.n(y),D=r(5484),G={lineHeight:0,textAlign:"center",width:"2rem",height:"2rem"},_=["\u26d2","ExpandSelf","1\ufe0f\u20e3","2\ufe0f\u20e3","3\ufe0f\u20e3","4\ufe0f\u20e3","ExpandSubgraph"];function T(e,n){var r=e[n];return"sameAs"in r?T(e,r.sameAs):n}function E(){return(0,a.jsx)("div",{className:"flex-align-center lh-1",children:(0,a.jsx)(D.Z,{})})}function P(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(k(),{href:(0,w.ex)("/"),children:(0,a.jsx)("a",{title:"Go back to Gallery Overview",style:G,className:"btn btn-outline-info p-0",children:(0,a.jsx)(p(),{src:N,width:30,height:30,alt:"Back to Gallery"})})})})}function S(e){var n=e.chapterGroup,r=e.chapter,t=e.exerciseId,s=e.renderData,i=((0,o.useRouter)(),(0,l.useState)(0)),c=i[0],d=i[1];if(void 0===t)return(0,a.jsxs)("h1",{children:[(0,a.jsx)(P,{}),(0,a.jsx)("div",{className:"space-1"}),(0,a.jsx)("pre",{children:"404 - PDG not found"})]});var u,h,x=!1!==s.success,p=s.testLoc,g=s.algoLoc,v=s.screenshots;if(u=x?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(b,{loc:p,target:"_blank",children:(0,a.jsx)("u",{children:"Source code: Test"})}),(0,a.jsx)("div",{className:"space-1"}),(0,a.jsx)(b,{loc:g,target:"_blank",children:(0,a.jsx)("u",{children:"Source code: Algorithm"})})]}):null,x)if(null===v||void 0===v?void 0:v[c].crash)h=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{className:"mt-4 text-center",children:"crash: true"}),(0,a.jsx)("pre",{className:"",children:v[c].error})]});else{var j=v[c],N=j.dot,w=j.sameAs;if(N)h=(0,a.jsx)(m,{dot:N,exerciseId:t,index:c});else{if(void 0===w)throw new Error('Invalid screenshot missing "dot" or "sameAs", '.concat(JSON.stringify(v[c])));var y=T(v,c);h=(0,a.jsxs)("h1",{className:"mt-4 text-center",children:["Graph same as ",y,(0,a.jsx)("button",{className:"mx-4 p-2",onClick:function(){return d(y)},children:"Go"})]})}}else h=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{className:"mt-4 text-center",children:s.failedReason}),(0,a.jsx)("pre",{className:"",children:s.error})]});var k,D=v.map((function(e,n){return(0,a.jsx)("button",{className:f()("mx-1 p-2 btn btn-info",{active:n===c,"bg-gray":!e.dot}),onClick:function(){return d(n)},children:_[n]},n)}));return k=x?(0,a.jsxs)("div",{className:"d-flex flex-row",children:[(0,a.jsx)("button",{className:"border-gray",onClick:function(){return d(c-1)},disabled:0===c,children:"<"}),(0,a.jsx)("button",{className:"border-gray",onClick:function(){return d(c+1)},disabled:c===v.length-1,children:">"}),D]}):null,(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"flex flex-col h-full",children:[(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("h3",{className:"my-2",children:[(0,a.jsx)(P,{}),(0,a.jsx)("div",{className:"space-1"}),n,"/",r," > ",s.pdgTitle]}),(0,a.jsxs)("div",{className:"d-flex flex-row",children:[k,(0,a.jsx)("div",{className:"space-1"}),u,(0,a.jsx)("div",{className:"space-1"}),(0,a.jsx)("div",{style:{flexGrow:2}}),(0,a.jsx)(E,{})]})]}),(0,a.jsx)("div",{className:"mt-3 vh-100 border of-hidden border-white",children:h},c)]})})}var A=r(5482),C=u()((function(){return Promise.resolve(I)}),{ssr:!1});function I(){var e=(0,o.useRouter)(),n=e.query.pdgKey,r=(0,l.useState)(null),i=r[0],d=r[1],u=(0,l.useMemo)((function(){return n&&(0,A.v)(n)}),[n]);return(0,l.useEffect)((function(){(0,t.Z)(c().mark((function e(){var n,r,t,s,i,a,l;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u){e.next=2;break}return e.abrupt("return");case 2:return n=u.chapterGroup,r=u.chapter,t=u.exercise,s=(0,w.dA)("data/pdgs/".concat(n,"/").concat(r,"/").concat(encodeURIComponent(t),"/pdgData.json")),e.next=6,fetch(s);case 6:return i=e.sent,e.next=9,i.json();case 9:a=e.sent,l=u.pdgTitle?a.find((function(e){return e.pdgTitle===u.pdgTitle})):a[0],document.title="Dbux-PDG: "+l.pdgTitle,d({chapterGroup:n,chapter:r,exerciseId:t,pdgTitle:l.pdgTitle,renderData:l});case 13:case"end":return e.stop()}}),e)})))()}),[u]),e.isReady?u?i?i.renderData?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(S,(0,s.Z)({},i))}):(0,a.jsxs)("span",{className:"danger",children:['404 - invalid link - could not find PDG of title "',u.pdgTitle,'"']}):"loading...":(0,a.jsxs)("span",{className:"danger",children:["404 - invalid PDG id: $",n]}):"loading..."}},5482:function(e,n,r){"use strict";r.d(n,{a:function(){return s},v:function(){return i}});var t=r(603);function s(e){var n=e.chapterGroup,r=e.chapter,t=e.exercise,s=e.pdgTitle;return"".concat(n,"/").concat(r,"/").concat(t,"/").concat(s)}function i(e){var n=e.split("/");if(n.length<3)return null;var r=(0,t.Z)(n,4);return{chapterGroup:r[0],chapter:r[1],exercise:r[2],pdgTitle:r[3]}}}},function(e){e.O(0,[675,985,774,888,179],(function(){return n=5294,e(e.s=n);var n}));var n=e.O();_N_E=n}]);