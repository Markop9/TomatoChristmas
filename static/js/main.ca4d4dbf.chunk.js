(this.webpackJsonphashlips_nft_minting_dapp=this.webpackJsonphashlips_nft_minting_dapp||[]).push([[0],{246:function(n,t){},255:function(n,t){},273:function(n,t){},275:function(n,t){},294:function(n,t){},295:function(n,t){},358:function(n,t){},360:function(n,t){},393:function(n,t){},395:function(n,t){},396:function(n,t){},401:function(n,t){},403:function(n,t){},409:function(n,t){},411:function(n,t){},424:function(n,t){},436:function(n,t){},439:function(n,t){},444:function(n,t){},452:function(n,t){},461:function(n,t){},463:function(n,t){},533:function(n,t,e){},534:function(n,t,e){"use strict";e.r(t);var c,a,r,o,i,s,l,d,x,p,u,b,j,h,g,f,O,m,y=e(1),w=e(85),v=e.n(w),C=e(16),A=e.n(C),S=e(43),E=e(69),T=e(13),N=e(58),_=e(68),k=e.n(_),M=e(220),D=e.n(M),I=e(70),L=e(221),R=e(19),K={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},U=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(R.a)(Object(R.a)({},K),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(R.a)(Object(R.a)({},n),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(R.a)(Object(R.a)({},K),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(R.a)(Object(R.a)({},n),{},{account:t.payload.account});default:return n}},F={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},P=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(R.a)(Object(R.a)({},n),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(R.a)(Object(R.a)({},n),{},{loading:!1,totalSupply:t.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(R.a)(Object(R.a)({},F),{},{loading:!1,error:!0,errorMsg:t.payload});default:return n}},W=Object(I.b)({blockchain:U,data:P}),Y=[L.a],z=Object(I.c)(I.a.apply(void 0,Y)),B=Object(I.d)(W,z),H=function(n){return{type:"CHECK_DATA_FAILED",payload:n}},G=function(){return function(){var n=Object(S.a)(A.a.mark((function n(t){var e;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),n.prev=1,n.next=4,B.getState().blockchain.smartContract.methods.totalSupply().call();case 4:e=n.sent,t({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:e}}),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0),t(H("Could not load data from contract."));case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(t){return n.apply(this,arguments)}}()},Q=function(n){return{type:"CONNECTION_FAILED",payload:n}},X=function(n){return function(){var t=Object(S.a)(A.a.mark((function t(e){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e({type:"UPDATE_ACCOUNT",payload:{account:n}}),e(G());case 2:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},q=e(14),J=q.a.div(c||(c=Object(T.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(n){var t=n.image;return t?"url(".concat(t,")"):"none"})),V=q.a.div(a||(a=Object(T.a)(["\n  height: 8px;\n  width: 8px;\n"]))),Z=q.a.div(r||(r=Object(T.a)(["\n  height: 16px;\n  width: 16px;\n"]))),$=q.a.div(o||(o=Object(T.a)(["\n  height: 24px;\n  width: 24px;\n"]))),nn=q.a.div(i||(i=Object(T.a)(["\n  height: 32px;\n  width: 32px;\n"]))),tn=q.a.div(s||(s=Object(T.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(n){var t=n.flex;return t||0}),(function(n){var t=n.fd;return t||"column"}),(function(n){var t=n.jc;return t||"flex-start"}),(function(n){var t=n.ai;return t||"flex-start"}),(function(n){return n.test?"pink":"none"}),(function(n){var t=n.image;return t?"url(".concat(t,")"):"none"})),en=q.a.p(l||(l=Object(T.a)(["\n  color: var(--primary-text);\n  font-size: 24px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),cn=(q.a.p(d||(d=Object(T.a)(["\n  color: var(--primary-text);\n  font-size: 20px;\n  line-height: 1.6;\n"]))),q.a.p(x||(x=Object(T.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"])))),an=(q.a.div(p||(p=Object(T.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),e(2)),rn=q.a.button(u||(u=Object(T.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),on=q.a.button(b||(b=Object(T.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),sn=q.a.div(j||(j=Object(T.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 50%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),ln=(q.a.img(h||(h=Object(T.a)(["\n  padding: 10px;\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 400px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),q.a.img(g||(g=Object(T.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 0px dashed var(--secondary);\n\n  border-radius: 0%;\n  width: 250px;\n  @media (min-width: 900px) {\n    width: 300px;\n  }\n  @media (min-width: 1000px) {\n    width: 350px;\n  }\n  transition: width 0.5s;\n"])))),dn=q.a.img(f||(f=Object(T.a)(["\nborder: 0px dashed var(--secondary);\n  border-radius: 10%;\n  width: 250px;\n  @media (min-width: 900px) {\n    width: 300px;\n  }\n  @media (min-width: 1000px) {\n    width: 350px;\n  }\n  transition: width 0.5s;\n  \n"]))),xn=q.a.img(O||(O=Object(T.a)(["\nbox-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\nborder: 0px dashed var(--secondary);\nwidth: 500px;\n@media (min-width: 900px) {\n  width: 500px;\n}\n@media (min-width: 1000px) {\n  width: 500px;\n}\ntransition: width 0.5s;\ntransition: height 0.5s;\n"]))),pn=q.a.a(m||(m=Object(T.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])));var un=function(){var n,t,e=Object(N.b)(),c=Object(N.c)((function(n){return n.blockchain})),a=Object(N.c)((function(n){return n.data})),r=Object(y.useState)(!1),o=Object(E.a)(r,2),i=o[0],s=o[1],l=Object(y.useState)("Click buy to mint your NFT."),d=Object(E.a)(l,2),x=d[0],p=d[1],u=Object(y.useState)(1),b=Object(E.a)(u,2),j=b[0],h=b[1],g=Object(y.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),f=Object(E.a)(g,2),O=f[0],m=f[1],w=function(){""!==c.account&&null!==c.smartContract&&e(G(c.account))},v=function(){var n=Object(S.a)(A.a.mark((function n(){var t,e;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=n.sent,n.next=5,t.json();case 5:e=n.sent,m(e);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(y.useEffect)((function(){v()}),[]),Object(y.useEffect)((function(){w()}),[c.account]),Object(an.jsx)(J,{children:Object(an.jsxs)(tn,{flex:1,ai:"center",style:{padding:24,backgroundColor:"var(--primary)"},image:O.SHOW_BACKGROUND?"/config/images/bg.png":null,children:[Object(an.jsx)(xn,{alt:"logo",src:"/config/images/logo.gif",style:{width:"50%"}}),Object(an.jsxs)(sn,{flex:1,style:{padding:24},test:!0,children:[Object(an.jsx)(nn,{}),Object(an.jsxs)(tn,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:24,borderRadius:24,border:"6px dashed var(--secondary)",boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)"},children:[Object(an.jsxs)(en,{style:{textAlign:"center",fontSize:40,fontWeight:"bold",color:"var(--accent-text)"},children:[a.totalSupply," / ",O.MAX_SUPPLY]}),Object(an.jsx)(cn,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(an.jsx)(pn,{target:"_blank",href:O.SCAN_LINK,children:(n=O.CONTRACT_ADDRESS,t=15,n.length>t?"".concat(n.substring(0,t),"..."):n)})}),Object(an.jsx)(Z,{}),Number(a.totalSupply)>=O.MAX_SUPPLY?Object(an.jsxs)(an.Fragment,{children:[Object(an.jsx)(en,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(an.jsxs)(cn,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",O.NFT_NAME," on"]}),Object(an.jsx)(Z,{}),Object(an.jsx)(pn,{target:"_blank",href:O.MARKETPLACE_LINK,children:O.MARKETPLACE})]}):Object(an.jsxs)(an.Fragment,{children:[Object(an.jsxs)(en,{style:{textAlign:"center",color:"var(--accent-text)"},children:["1 ",O.SYMBOL," costs ",O.DISPLAY_COST," ",O.NETWORK.SYMBOL,"."]}),Object(an.jsx)(V,{}),Object(an.jsx)(cn,{style:{textAlign:"center",color:"var(--accent-text)"},children:"Excluding gas fees."}),Object(an.jsx)(Z,{}),""===c.account||null===c.smartContract?Object(an.jsxs)(tn,{ai:"center",jc:"center",children:[Object(an.jsxs)(cn,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Connect to the ",O.NETWORK.NAME," network"]}),Object(an.jsx)(Z,{}),Object(an.jsx)(rn,{onClick:function(n){n.preventDefault(),e(function(){var n=Object(S.a)(A.a.mark((function n(t){var e,c,a,r,o,i,s,l,d;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"CONNECTION_REQUEST"}),n.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return e=n.sent,n.next=6,e.json();case 6:return c=n.sent,n.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return a=n.sent,n.next=12,a.json();case 12:if(r=n.sent,o=window,!(i=o.ethereum)||!i.isMetaMask){n.next=33;break}return k.a.setProvider(i),s=new D.a(i),n.prev=18,n.next=21,i.request({method:"eth_requestAccounts"});case 21:return l=n.sent,n.next=24,i.request({method:"net_version"});case 24:n.sent==r.NETWORK.ID?(d=new k.a(c,r.CONTRACT_ADDRESS),t({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:d,web3:s}}),i.on("accountsChanged",(function(n){t(X(n[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):t(Q("Change network to ".concat(r.NETWORK.NAME,"."))),n.next=31;break;case 28:n.prev=28,n.t0=n.catch(18),t(Q("Something went wrong."));case 31:n.next=34;break;case 33:t(Q("Install Metamask."));case 34:case"end":return n.stop()}}),n,null,[[18,28]])})));return function(t){return n.apply(this,arguments)}}()),w()},children:"CONNECT"}),""!==c.errorMsg?Object(an.jsxs)(an.Fragment,{children:[Object(an.jsx)(Z,{}),Object(an.jsx)(cn,{style:{textAlign:"center",color:"var(--accent-text)"},children:c.errorMsg})]}):null]}):Object(an.jsxs)(an.Fragment,{children:[Object(an.jsx)(cn,{style:{textAlign:"center",color:"var(--accent-text)"},children:x}),Object(an.jsx)($,{}),Object(an.jsxs)(tn,{ai:"center",jc:"center",fd:"row",children:[Object(an.jsx)(on,{style:{lineHeight:.4},disabled:i?1:0,onClick:function(n){n.preventDefault(),function(){var n=j-1;n<1&&(n=1),h(n)}()},children:"-"}),Object(an.jsx)($,{}),Object(an.jsx)(cn,{style:{textAlign:"center",color:"var(--accent-text)"},children:j}),Object(an.jsx)($,{}),Object(an.jsx)(on,{disabled:i?1:0,onClick:function(n){n.preventDefault(),function(){var n=j+1;n>20&&(n=20),h(n)}()},children:"+"})]}),Object(an.jsx)(Z,{}),Object(an.jsx)(tn,{ai:"center",jc:"center",fd:"row",children:Object(an.jsx)(rn,{disabled:i?1:0,onClick:function(n){n.preventDefault(),function(){var n=O.WEI_COST,t=O.GAS_LIMIT,a=String(n*j),r=String(t*j);console.log("Cost: ",a),console.log("Gas limit: ",r),p("Minting your ".concat(O.NFT_NAME,"...")),s(!0),c.smartContract.methods.mint(j).send({gasLimit:String(r),to:O.CONTRACT_ADDRESS,from:c.account,value:a}).once("error",(function(n){console.log(n),p("Sorry, something went wrong please try again later."),s(!1)})).then((function(n){console.log(n),p("WOW, the ".concat(O.NFT_NAME," is yours! go visit Opensea.io to view it.")),s(!1),e(G(c.account))}))}(),w()},children:i?"BUSY":"BUY"})})]})]}),Object(an.jsx)($,{})]}),Object(an.jsx)(nn,{})]}),Object(an.jsxs)(sn,{flex:1,style:{padding:24},test:!0,children:[Object(an.jsx)(tn,{flex:1,jc:"center",ai:"center",children:Object(an.jsx)(ln,{alt:"example",src:"/config/images/example.gif"})}),Object(an.jsx)(tn,{flex:1,jc:"center",ai:"center",children:Object(an.jsx)(ln,{alt:"example2",src:"/config/images/example2.gif",style:{transform:"scaleX(-1)"}})})]}),Object(an.jsx)($,{}),Object(an.jsxs)(tn,{jc:"center",ai:"center",style:{width:"45%"},children:[Object(an.jsxs)(cn,{style:{textAlign:"center",color:"var(--primary-text)"},children:["About the NFT",Object(an.jsx)(Z,{}),"Tomato Ace has been roaming the world and trying out different sports to find the one he could compete in. But during the Christmas season he likes to take a break and play sports only for fun. And just like every other high-spirited being, he loves to spread joy by adding colorful decorations to every surface he can reach. So, there will be no surprises when they announce the names on the Naughty and Nice list."]}),Object(an.jsx)(Z,{}),Object(an.jsxs)(cn,{style:{textAlign:"center",color:"var(--primary-text)"},children:[Object(an.jsx)($,{}),Object(an.jsx)(dn,{alt:"example",src:"/config/images/bottom.gif",style:{width:"60%"}}),Object(an.jsx)($,{}),Object(an.jsx)(dn,{alt:"example",src:"/config/images/bottom2.gif",style:{width:"60%"}}),Object(an.jsx)($,{}),Object(an.jsx)("a",{href:"https://www.tomatoace.com",children:Object(an.jsx)(dn,{alt:"example",src:"/config/images/bottom4.gif",style:{width:"100%"}})})]})]})]})})},bn=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,538)).then((function(t){var e=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;e(n),c(n),a(n),r(n),o(n)}))};e(533);v.a.render(Object(an.jsx)(N.a,{store:B,children:Object(an.jsx)(un,{})}),document.getElementById("root")),bn()}},[[534,1,2]]]);
//# sourceMappingURL=main.ca4d4dbf.chunk.js.map