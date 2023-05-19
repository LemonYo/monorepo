!(function(){"use strict";var jt=Object.defineProperty,wt=Object.defineProperties;var Et=Object.getOwnPropertyDescriptors;var ne=Object.getOwnPropertySymbols;var Oe=Object.prototype.hasOwnProperty,ze=Object.prototype.propertyIsEnumerable;var Ae=(x,f,i)=>f in x?jt(x,f,{enumerable:!0,configurable:!0,writable:!0,value:i}):x[f]=i,u=(x,f)=>{for(var i in f||(f={}))Oe.call(f,i)&&Ae(x,i,f[i]);if(ne)for(var i of ne(f))ze.call(f,i)&&Ae(x,i,f[i]);return x},C=(x,f)=>wt(x,Et(f));var he=(x,f)=>{var i={};for(var d in x)Oe.call(x,d)&&f.indexOf(d)<0&&(i[d]=x[d]);if(x!=null&&ne)for(var d of ne(x))f.indexOf(d)<0&&ze.call(x,d)&&(i[d]=x[d]);return i};(self.webpackChunkdipeak_design=self.webpackChunkdipeak_design||[]).push([[32],{92311:function(x,f,i){i.r(f),i.d(f,{default:function(){return kt}});var d=i(50959),M=i(68880),m=i(185),S=i(63163),h=i(79828),b=i(56873),p=i(24843),A=["borders","breakpoints","colors","components","config","direction","fonts","fontSizes","fontWeights","letterSpacings","lineHeights","radii","shadows","sizes","space","styles","transition","zIndices"];function j(e){return(0,p.Kn)(e)?A.every(n=>Object.prototype.hasOwnProperty.call(e,n)):!1}var U=i(81138);function O(e){return typeof e=="function"}function X(...e){return n=>e.reduce((r,t)=>t(r),n)}var G=e=>function(...r){let t=[...r],o=r[r.length-1];return j(o)&&t.length>1?t=t.slice(0,t.length-1):o=e,X(...t.map(s=>a=>O(s)?s(a):E(a,s)))(o)},N=G(h.rS),B=G(h.wE);function E(...e){return U({},...e,$)}function $(e,n,r,t){if((O(e)||O(n))&&Object.prototype.hasOwnProperty.call(t,r))return(...o)=>{const s=O(e)?e(...o):e,a=O(n)?n(...o):n;return U({},s,a,$)}}var z=i(31686),c=i(11527),D=String.raw,H=D`
  :root,
  :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-vh: 100dvh;
    }
  }
`,q=()=>(0,c.jsx)(z.xB,{styles:H}),_=({scope:e=""})=>(0,c.jsx)(z.xB,{styles:D`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-feature-settings: "kern";
      }

      ${e} :where(*, *::before, *::after) {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      main {
        display: block;
      }

      ${e} hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      ${e} :where(pre, code, kbd,samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      ${e} a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      ${e} abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      ${e} :where(b, strong) {
        font-weight: bold;
      }

      ${e} small {
        font-size: 80%;
      }

      ${e} :where(sub,sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      ${e} sub {
        bottom: -0.25em;
      }

      ${e} sup {
        top: -0.5em;
      }

      ${e} img {
        border-style: none;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      ${e} :where(button, input) {
        overflow: visible;
      }

      ${e} :where(button, select) {
        text-transform: none;
      }

      ${e} :where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      ${e} fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      ${e} legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      ${e} progress {
        vertical-align: baseline;
      }

      ${e} textarea {
        overflow: auto;
      }

      ${e} :where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      ${e} input[type="number"]::-webkit-inner-spin-button,
      ${e} input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      ${e} input[type="number"] {
        -moz-appearance: textfield;
      }

      ${e} input[type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ${e} input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ${e} ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      ${e} details {
        display: block;
      }

      ${e} summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      ${e} :where(
          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          figure,
          p,
          pre
        ) {
        margin: 0;
      }

      ${e} button {
        background: transparent;
        padding: 0;
      }

      ${e} fieldset {
        margin: 0;
        padding: 0;
      }

      ${e} :where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      ${e} textarea {
        resize: vertical;
      }

      ${e} :where(button, [role="button"]) {
        cursor: pointer;
      }

      ${e} button::-moz-focus-inner {
        border: 0 !important;
      }

      ${e} table {
        border-collapse: collapse;
      }

      ${e} :where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      ${e} :where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      ${e} :where(img, video) {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      ${e} select::-ms-expand {
        display: none;
      }

      ${H}
    `}),ee=null,Ze=i(25629),fe=i(75819),te={light:"chakra-ui-light",dark:"chakra-ui-dark"};function De(e={}){const{preventTransition:n=!0}=e,r={setDataset:t=>{const o=n?r.preventTransition():void 0;document.documentElement.dataset.theme=t,document.documentElement.style.colorScheme=t,o==null||o()},setClassName(t){document.body.classList.add(t?te.dark:te.light),document.body.classList.remove(t?te.light:te.dark)},query(){return window.matchMedia("(prefers-color-scheme: dark)")},getSystemTheme(t){var o;return((o=r.query().matches)!=null?o:t==="dark")?"dark":"light"},addListener(t){const o=r.query(),s=a=>{t(a.matches?"dark":"light")};return typeof o.addListener=="function"?o.addListener(s):o.addEventListener("change",s),()=>{typeof o.removeListener=="function"?o.removeListener(s):o.removeEventListener("change",s)}},preventTransition(){const t=document.createElement("style");return t.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),requestAnimationFrame(()=>{requestAnimationFrame(()=>{document.head.removeChild(t)})})}}};return r}var oe="chakra-ui-color-mode";function Le(e){return{ssr:!1,type:"localStorage",get(n){if(!(globalThis!=null&&globalThis.document))return n;let r;try{r=localStorage.getItem(e)||n}catch(t){}return r||n},set(n){try{localStorage.setItem(e,n)}catch(r){}}}}var Ne=Le(oe);function ve(e,n){const r=e.match(new RegExp(`(^| )${n}=([^;]+)`));return r==null?void 0:r[2]}function ge(e,n){return{ssr:!!n,type:"cookie",get(r){return n?ve(n,e):globalThis!=null&&globalThis.document&&ve(document.cookie,e)||r},set(r){document.cookie=`${e}=${r}; max-age=31536000; path=/`}}}var $t=ge(oe),Pt=e=>ge(oe,e),Re=i(72158),K=()=>{};function ye(e,n){return e.type==="cookie"&&e.ssr?e.get(n):n}function pe(e){const{value:n,children:r,options:{useSystemColorMode:t,initialColorMode:o,disableTransitionOnChange:s}={},colorModeManager:a=Ne}=e,l=o==="dark"?"dark":"light",[y,v]=(0,d.useState)(()=>ye(a,l)),[g,R]=(0,d.useState)(()=>ye(a)),{getSystemTheme:w,setClassName:P,setDataset:T,addListener:W}=(0,d.useMemo)(()=>De({preventTransition:s}),[s]),Z=o==="system"&&!y?g:y,k=(0,d.useCallback)(I=>{const Q=I==="system"?w():I;v(Q),P(Q==="dark"),T(Q),a.set(Q)},[a,w,P,T]);(0,Re.G)(()=>{o==="system"&&R(w())},[]),(0,d.useEffect)(()=>{const I=a.get();if(I){k(I);return}if(o==="system"){k("system");return}k(l)},[a,l,o,k]);const V=(0,d.useCallback)(()=>{k(Z==="dark"?"light":"dark")},[Z,k]);(0,d.useEffect)(()=>{if(t)return W(k)},[t,W,k]);const Y=(0,d.useMemo)(()=>({colorMode:n!=null?n:Z,toggleColorMode:n?K:V,setColorMode:n?K:k,forced:n!==void 0}),[Z,V,k,n]);return(0,c.jsx)(b.kc.Provider,{value:Y,children:r})}pe.displayName="ColorModeProvider";function Ie(e){const n=(0,d.useMemo)(()=>({colorMode:"dark",toggleColorMode:K,setColorMode:K,forced:!0}),[]);return(0,c.jsx)(b.kc.Provider,u({value:n},e))}Ie.displayName="DarkMode";function Be(e){const n=(0,d.useMemo)(()=>({colorMode:"light",toggleColorMode:K,setColorMode:K,forced:!0}),[]);return(0,c.jsx)(b.kc.Provider,u({value:n},e))}Be.displayName="LightMode";var We=i(35579),Ve=e=>{const{children:n,colorModeManager:r,portalZIndex:t,resetScope:o,resetCSS:s=!0,theme:a={},environment:l,cssVarsRoot:y,disableEnvironment:v}=e,g=(0,c.jsx)(We.u,{environment:l,disabled:v,children:n});return(0,c.jsx)(fe.f6,{theme:a,cssVarsRoot:y,children:(0,c.jsxs)(pe,{colorModeManager:r,options:a.config,children:[s?(0,c.jsx)(_,{scope:o}):(0,c.jsx)(q,{}),(0,c.jsx)(fe.ZL,{}),t?(0,c.jsx)(Ze.h,{zIndex:t,children:g}):g]})})},Ue=(e,n)=>e.find(r=>r.id===n);function xe(e,n){const r=re(e,n),t=r?e[r].findIndex(o=>o.id===n):-1;return{position:r,index:t}}function re(e,n){for(const[r,t]of Object.entries(e))if(Ue(t,n))return r}var At=(e,n)=>!!re(e,n);function Ke(e){const n=e.includes("right"),r=e.includes("left");let t="center";return n&&(t="flex-end"),r&&(t="flex-start"),{display:"flex",flexDirection:"column",alignItems:t}}function Fe(e){const r=e==="top"||e==="bottom"?"0 auto":void 0,t=e.includes("top")?"env(safe-area-inset-top, 0px)":void 0,o=e.includes("bottom")?"env(safe-area-inset-bottom, 0px)":void 0,s=e.includes("left")?void 0:"env(safe-area-inset-right, 0px)",a=e.includes("right")?void 0:"env(safe-area-inset-left, 0px)";return{position:"fixed",zIndex:"var(--toast-z-index, 5500)",pointerEvents:"none",display:"flex",flexDirection:"column",margin:r,top:t,bottom:o,right:s,left:a}}var Ge=i(17347);function He(e,n){const r=(0,Ge.W)(e);(0,d.useEffect)(()=>{if(n==null)return;let t=null;return t=window.setTimeout(()=>{r()},n),()=>{t&&window.clearTimeout(t)}},[n,r])}var be=i(65601),Je=i(21851),Ye=i(56784),F=i(80769),Qe={initial:e=>{const{position:n}=e,r=["top","bottom"].includes(n)?"y":"x";let t=["top-right","bottom-right"].includes(n)?1:-1;return n==="bottom"&&(t=1),{opacity:0,[r]:t*24}},animate:{opacity:1,y:0,x:0,scale:1,transition:{duration:.4,ease:[.4,0,.2,1]}},exit:{opacity:0,scale:.85,transition:{duration:.2,ease:[.4,0,1,1]}}},Se=(0,d.memo)(e=>{const{id:n,message:r,onCloseComplete:t,onRequestRemove:o,requestClose:s=!1,position:a="bottom",duration:l=5e3,containerStyle:y,motionVariants:v=Qe,toastSpacing:g="0.5rem"}=e,[R,w]=(0,d.useState)(l),P=(0,Je.hO)();(0,be.r)(()=>{P||t==null||t()},[P]),(0,be.r)(()=>{w(l)},[l]);const T=()=>w(null),W=()=>w(l),Z=()=>{P&&o()};(0,d.useEffect)(()=>{P&&s&&o()},[P,s,o]),He(Z,R);const k=(0,d.useMemo)(()=>u({pointerEvents:"auto",maxWidth:560,minWidth:300,margin:g},y),[y,g]),V=(0,d.useMemo)(()=>Ke(a),[a]);return(0,c.jsx)(Ye.E.div,{layout:!0,className:"chakra-toast",variants:v,initial:"initial",animate:"animate",exit:"exit",onHoverStart:T,onHoverEnd:W,custom:{position:a},style:V,children:(0,c.jsx)(F.m.div,{role:"status","aria-atomic":"true",className:"chakra-toast__inner",__css:k,children:(0,p.Pu)(r,{id:n,onClose:Z})})})});Se.displayName="ToastComponent";var ie=i(1557);function Xe(e){return(0,c.jsx)(ie.J,C(u({viewBox:"0 0 24 24"},e),{children:(0,c.jsx)("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"})}))}function qe(e){return(0,c.jsx)(ie.J,C(u({viewBox:"0 0 24 24"},e),{children:(0,c.jsx)("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"})}))}function Ce(e){return(0,c.jsx)(ie.J,C(u({viewBox:"0 0 24 24"},e),{children:(0,c.jsx)("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})}))}var se=i(15981),_e=i(25179),[et,ae]=(0,se.k)({name:"AlertContext",hookName:"useAlertContext",providerName:"<Alert />"}),[tt,le]=(0,se.k)({name:"AlertStylesContext",hookName:"useAlertStyles",providerName:"<Alert />"}),Me={info:{icon:qe,colorScheme:"blue"},warning:{icon:Ce,colorScheme:"orange"},success:{icon:Xe,colorScheme:"green"},error:{icon:Ce,colorScheme:"red"},loading:{icon:_e.$,colorScheme:"blue"}};function nt(e){return Me[e].colorScheme}function ot(e){return Me[e].icon}var ce=i(18293),rt=i(53668),it=i(31463),ke=(0,ce.G)(function(n,r){var t;const g=(0,rt.Lr)(n),{status:o="info",addRole:s=!0}=g,a=he(g,["status","addRole"]),l=(t=n.colorScheme)!=null?t:nt(o),y=(0,it.jC)("Alert",C(u({},n),{colorScheme:l})),v=u({width:"100%",display:"flex",alignItems:"center",position:"relative",overflow:"hidden"},y.container);return(0,c.jsx)(et,{value:{status:o},children:(0,c.jsx)(tt,{value:y,children:(0,c.jsx)(F.m.div,C(u({"data-status":o,role:s?"alert":void 0,ref:r},a),{className:(0,p.cx)("chakra-alert",n.className),__css:v}))})})});ke.displayName="Alert";function Te(e){const{status:n}=ae(),r=ot(n),t=le(),o=n==="loading"?t.spinner:t.icon;return(0,c.jsx)(F.m.span,C(u({display:"inherit","data-status":n},e),{className:(0,p.cx)("chakra-alert__icon",e.className),__css:o,children:e.children||(0,c.jsx)(r,{h:"100%",w:"100%"})}))}Te.displayName="AlertIcon";var je=(0,ce.G)(function(n,r){const t=le(),{status:o}=ae();return(0,c.jsx)(F.m.div,C(u({ref:r,"data-status":o},n),{className:(0,p.cx)("chakra-alert__title",n.className),__css:t.title}))});je.displayName="AlertTitle";var we=(0,ce.G)(function(n,r){const t=le(),{status:o}=ae(),s=u({display:"inline"},t.description);return(0,c.jsx)(F.m.div,C(u({ref:r,"data-status":o},n),{className:(0,p.cx)("chakra-alert__desc",n.className),__css:s}))});we.displayName="AlertDescription";var st=i(98226),at={top:[],"top-left":[],"top-right":[],"bottom-left":[],bottom:[],"bottom-right":[]},L=lt(at);function lt(e){let n=e;const r=new Set,t=o=>{n=o(n),r.forEach(s=>s())};return{getState:()=>n,subscribe:o=>(r.add(o),()=>{t(()=>e),r.delete(o)}),removeToast:(o,s)=>{t(a=>C(u({},a),{[s]:a[s].filter(l=>l.id!=o)}))},notify:(o,s)=>{const a=ct(o,s),{position:l,id:y}=a;return t(v=>{var g,R;const P=l.includes("top")?[a,...(g=v[l])!=null?g:[]]:[...(R=v[l])!=null?R:[],a];return C(u({},v),{[l]:P})}),y},update:(o,s)=>{o&&t(a=>{const l=u({},a),{position:y,index:v}=xe(l,o);return y&&v!==-1&&(l[y][v]=C(u(u({},l[y][v]),s),{message:$e(s)})),l})},closeAll:({positions:o}={})=>{t(s=>{const a=["bottom","bottom-right","bottom-left","top","top-left","top-right"];return(o!=null?o:a).reduce((y,v)=>(y[v]=s[v].map(g=>C(u({},g),{requestClose:!0})),y),u({},s))})},close:o=>{t(s=>{const a=re(s,o);return a?C(u({},s),{[a]:s[a].map(l=>l.id==o?C(u({},l),{requestClose:!0}):l)}):s})},isActive:o=>Boolean(xe(L.getState(),o).position)}}var Ee=0;function ct(e,n={}){var r,t;Ee+=1;const o=(r=n.id)!=null?r:Ee,s=(t=n.position)!=null?t:"bottom";return{id:o,message:e,position:s,duration:n.duration,onCloseComplete:n.onCloseComplete,onRequestRemove:()=>L.removeToast(String(o),s),status:n.status,requestClose:!1,containerStyle:n.containerStyle}}var dt=e=>{const{status:n,variant:r="solid",id:t,title:o,isClosable:s,onClose:a,description:l,colorScheme:y,icon:v}=e,g=t?{root:`toast-${t}`,title:`toast-${t}-title`,description:`toast-${t}-description`}:void 0;return(0,c.jsxs)(ke,{addRole:!1,status:n,variant:r,id:g==null?void 0:g.root,alignItems:"start",borderRadius:"md",boxShadow:"lg",paddingEnd:8,textAlign:"start",width:"auto",colorScheme:y,children:[(0,c.jsx)(Te,{children:v}),(0,c.jsxs)(F.m.div,{flex:"1",maxWidth:"100%",children:[o&&(0,c.jsx)(je,{id:g==null?void 0:g.title,children:o}),l&&(0,c.jsx)(we,{id:g==null?void 0:g.description,display:"block",children:l})]}),s&&(0,c.jsx)(st.P,{size:"sm",onClick:a,position:"absolute",insetEnd:1,top:1})]})};function $e(e={}){const{render:n,toastComponent:r=dt}=e;return o=>typeof n=="function"?n(u(u({},o),e)):(0,c.jsx)(r,u(u({},o),e))}function Ot(e,n){const r=o=>{var s;return C(u(u({},n),o),{position:getToastPlacement((s=o==null?void 0:o.position)!=null?s:n==null?void 0:n.position,e)})},t=o=>{const s=r(o),a=$e(s);return L.notify(a,s)};return t.update=(o,s)=>{L.update(o,r(s))},t.promise=(o,s)=>{const a=t(C(u({},s.loading),{status:"loading",duration:null}));o.then(l=>t.update(a,u({status:"success",duration:5e3},runIfFn(s.success,l)))).catch(l=>t.update(a,u({status:"error",duration:5e3},runIfFn(s.error,l))))},t.closeAll=L.closeAll,t.close=L.close,t.isActive=L.isActive,t}var ut=i(37448),mt=i(17682),[ht,zt]=(0,se.k)({name:"ToastOptionsContext",strict:!1}),ft=e=>{const n=(0,d.useSyncExternalStore)(L.subscribe,L.getState,L.getState),{motionVariants:r,component:t=Se,portalProps:o}=e,a=Object.keys(n).map(l=>{const y=n[l];return(0,c.jsx)("div",{role:"region","aria-live":"polite",id:`chakra-toast-manager-${l}`,style:Fe(l),children:(0,c.jsx)(ut.M,{initial:!1,children:y.map(v=>(0,c.jsx)(t,u({motionVariants:r},v),v.id))})},l)});return(0,c.jsx)(mt.h,C(u({},o),{children:a}))},Pe=e=>function(a){var l=a,{children:r,theme:t=e,toastOptions:o}=l,s=he(l,["children","theme","toastOptions"]);return(0,c.jsxs)(Ve,C(u({theme:t},s),{children:[(0,c.jsx)(ht,{value:o==null?void 0:o.defaultOptions,children:r}),(0,c.jsx)(ft,u({},o))]}))},vt=Pe(h.rS),Zt=Pe(h.wE),gt=i(30326),yt=i(69674);function J(e,n){return r=>r.colorMode==="dark"?n:e}function Dt(e){const{orientation:n,vertical:r,horizontal:t}=e;return n?n==="vertical"?r:t:{}}var pt=function(n){return{".markdown":{a:{color:J("brand.500","brand.300")(n)},img:{maxWidth:"full"},"*:not(pre) code":{px:.5,py:1.5,bgColor:J("gray.50","gray.800")(n),color:J("brand.500","brand.300")(n),fontSize:"md"},pre:{fontSize:"sm",px:6,bgColor:"gray.50"},table:{th:{color:J("gray.600","gray.400")(n)},"th, td":{borderColor:J("gray.100","gray.700")(n)}},ul:{li:{lineHeight:"tall"}},"h1, h2, h3, h4, h5, h6":{cursor:"pointer","> a[aria-hidden]:first-of-type":{float:"left",width:5,paddingInlineEnd:1,marginInlineStart:-6,fontSize:0,textAlign:"left",lineHeight:"inhert","&:hover":{border:0},"> .icon-link":{transitionProperty:"visibility",transitionDuration:".3s","&::before":{content:'"#"',fontSize:"xl"}}},"&:not(:hover) > a[aria-hidden]:first-of-type > .icon-link":{visibility:"hidden"}}}}},xt=pt,bt=function(n){var r=n.children,t=n.config,o=n.brand,s=o===void 0?h.rS.colors.purple:o,a=(0,b.If)(),l=a.colorMode,y=(0,d.useState)(s),v=(0,S.Z)(y,2),g=v[0],R=v[1],w=(0,d.useMemo)(function(){var T,W,Z,k,V,Y,I;return N((0,m.Z)((0,m.Z)({initialColorMode:l!=null?l:"system",useSystemColorMode:!1,styles:(0,m.Z)((0,m.Z)((0,m.Z)({},h.rS.styles),(T=t==null?void 0:t.styles)!==null&&T!==void 0?T:{}),{},{global:function(Tt){var de,ue,me;return(0,m.Z)((0,m.Z)((0,m.Z)({},(de=h.rS.styles.global)!==null&&de!==void 0?de:{}),(ue=t==null||(me=t.styles)===null||me===void 0?void 0:me.global)!==null&&ue!==void 0?ue:{}),{},{body:{p:0}},xt(Tt))}})},t!=null?t:{}),{},{colors:(0,m.Z)({brand:g},(W=t==null?void 0:t.colors)!==null&&W!==void 0?W:{}),space:(0,m.Z)((0,m.Z)((0,m.Z)({},h.rS.space),(Z=t==null?void 0:t.space)!==null&&Z!==void 0?Z:{}),{},{18:"4.5rem"}),sizes:(0,m.Z)((0,m.Z)((0,m.Z)({},h.rS.sizes),(k=t==null?void 0:t.sizes)!==null&&k!==void 0?k:{}),{},{18:"4.5rem",screenW:"100vw",screenH:"100vh",container:(0,m.Z)((0,m.Z)((0,m.Z)({},h.rS.sizes.container),(V=t==null||(Y=t.sizes)===null||Y===void 0?void 0:Y.container)!==null&&V!==void 0?V:{}),{},{xxl:"1392px"})}),breakpoints:(0,m.Z)((0,m.Z)((0,m.Z)({},h.rS.breakpoints),(I=t==null?void 0:t.breakpoints)!==null&&I!==void 0?I:{}),{},{xxl:"1392px"})}))},[t,l,g]),P=(0,d.useCallback)(function(T){(0,yt.Kn)(T)&&R(T),typeof T=="string"&&T in w.colors&&R(w.colors[T])},[t]);return d.createElement(vt,{theme:w},d.createElement(gt.f,{value:{brand:g,changeBrand:P,config:w}},r))},St=bt,Ct=i(43700),Mt=function(){var n,r=(0,M.pC)(),t=(n=(0,Ct.Z)())!==null&&n!==void 0?n:{},o=t.brand,s=t.config;return r&&d.createElement(St,{brand:o,config:s},r)},kt=Mt},185:function(x,f,i){i.d(f,{Z:function(){return m}});var d=i(26163);function M(S,h){var b=Object.keys(S);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(S);h&&(p=p.filter(function(A){return Object.getOwnPropertyDescriptor(S,A).enumerable})),b.push.apply(b,p)}return b}function m(S){for(var h=1;h<arguments.length;h++){var b=arguments[h]!=null?arguments[h]:{};h%2?M(Object(b),!0).forEach(function(p){(0,d.Z)(S,p,b[p])}):Object.getOwnPropertyDescriptors?Object.defineProperties(S,Object.getOwnPropertyDescriptors(b)):M(Object(b)).forEach(function(p){Object.defineProperty(S,p,Object.getOwnPropertyDescriptor(b,p))})}return S}},35579:function(x,f,i){i.d(f,{O:function(){return h},u:function(){return b}});var d=i(72158),M=i(50959),m=i(11527),S=(0,M.createContext)({getDocument(){return document},getWindow(){return window}});S.displayName="EnvironmentContext";function h({defer:p}={}){const[,A]=(0,M.useReducer)(j=>j+1,0);return(0,d.G)(()=>{p&&A()},[p]),(0,M.useContext)(S)}function b(p){const{children:A,environment:j,disabled:U}=p,O=(0,M.useRef)(null),X=(0,M.useMemo)(()=>j||{getDocument:()=>{var N,B;return(B=(N=O.current)==null?void 0:N.ownerDocument)!=null?B:document},getWindow:()=>{var N,B;return(B=(N=O.current)==null?void 0:N.ownerDocument.defaultView)!=null?B:window}},[j]),G=!U||!j;return(0,m.jsxs)(S.Provider,{value:X,children:[A,G&&(0,m.jsx)("span",{id:"__chakra_env",hidden:!0,ref:O})]})}b.displayName="EnvironmentProvider"},65601:function(x,f,i){i.d(f,{r:function(){return M}});var d=i(50959);function M(m,S){const h=(0,d.useRef)(!1),b=(0,d.useRef)(!1);(0,d.useEffect)(()=>{if(h.current&&b.current)return m();b.current=!0},S),(0,d.useEffect)(()=>(h.current=!0,()=>{h.current=!1}),[])}},75819:function(x,f,i){i.d(f,{ZL:function(){return B},f6:function(){return U},eC:function(){return N}});var d=i(56873),M=i(50959);function m(E={}){const{strict:$=!0,errorMessage:z="useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",name:c}=E,D=(0,M.createContext)(void 0);D.displayName=c;function H(){var q;const _=(0,M.useContext)(D);if(!_&&$){const ee=new Error(z);throw ee.name="ContextError",(q=Error.captureStackTrace)==null||q.call(Error,ee,H),ee}return _}return[D.Provider,H,D]}var S=i(53668),h=i(65405),b=i(26788),p=i(13766),A=i(31686),j=i(11527);function U(E){const{cssVarsRoot:$,theme:z,children:c}=E,D=(0,M.useMemo)(()=>(0,S.c0)(z),[z]);return(0,j.jsxs)(p.a,{theme:D,children:[(0,j.jsx)(O,{root:$}),c]})}function O({root:E=":host, :root"}){const $=[E,"[data-theme]"].join(",");return(0,j.jsx)(A.xB,{styles:z=>({[$]:z.__cssVars})})}var[X,G]=m({name:"StylesContext",errorMessage:"useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "});function N(E){return m({name:`${E}StylesContext`,errorMessage:`useStyles: "styles" is undefined. Seems you forgot to wrap the components in "<${E} />" `})}function B(){const{colorMode:E}=(0,d.If)();return(0,j.jsx)(A.xB,{styles:$=>{const z=(0,h.Wf)($,"styles.global"),c=(0,b.Pu)(z,{theme:$,colorMode:E});return c?(0,S.iv)(c)($):void 0}})}}}]);
}());