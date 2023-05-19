!(function(){"use strict";var K=Object.defineProperty,F=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var U=(a,r,t)=>r in a?K(a,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[r]=t,P=(a,r)=>{for(var t in r||(r={}))S.call(r,t)&&U(a,t,r[t]);if(I)for(var t of I(r))W.call(r,t)&&U(a,t,r[t]);return a},O=(a,r)=>F(a,N(r));var B=(a,r)=>{var t={};for(var v in a)S.call(a,v)&&r.indexOf(v)<0&&(t[v]=a[v]);if(a!=null&&I)for(var v of I(a))r.indexOf(v)<0&&W.call(a,v)&&(t[v]=a[v]);return t};(self.webpackChunkdipeak_design=self.webpackChunkdipeak_design||[]).push([[825],{67897:function(a,r,t){t.r(r);var v=t(7170),h=t(26820),x=t(33893),A=t(83599),o=t(42822),s=t(46972),f=t(64252),E=t(43145),b=t(70538),g=t(68880),c=t(50959),e=t(11527);function i(){var _=(0,g.eL)(),p=_.texts;return(0,e.jsx)(g.dY,{children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"\u662F\u4EC0\u4E48",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u662F\u4EC0\u4E48",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u662F\u4EC0\u4E48"]}),(0,e.jsx)("p",{children:p[0].value}),(0,e.jsxs)("h1",{id:"\u5B89\u88C5",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5B89\u88C5",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u5B89\u88C5"]}),(0,e.jsx)(o.ZP,{lang:"js",children:p[1].value}),(0,e.jsxs)("h1",{id:"\u4F7F\u7528",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F7F\u7528",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4F7F\u7528"]}),(0,e.jsx)(o.ZP,{lang:"jsx",children:p[2].value})]})})})}r.default=i},7170:function(a,r,t){var v=t(63163),h=t(50959),x=t(68880),A=t(46972),o=t(69674),s=function(e){var i=e.children,_=useColorModeValue("gray.50","gray.800"),p=useColorModeValue("brand.500","brand.300");return React.createElement(chakra.code,{bgColor:_,textColor:p},i)},f={toString:function(e){return typeof e.type=="string"&&e.type in this?"enum"in e?this.enum(e):this[e.type](e):e.type?this.getValidClassName(e)||e.type:"const"in e?e.const:"oneOf"in e?this.oneOf(e):"unknown"},string:function(e){return e.type},number:function(e){return e.type},boolean:function(e){return e.type},any:function(e){return e.type},object:function(e){var i=this,_=[];return Object.entries(e.properties||{}).forEach(function(p){var j,y=(0,v.Z)(p,2),D=y[0],k=y[1];_.push("".concat(D).concat((j=e.required)!==null&&j!==void 0&&j.includes(D)?"":"?",": ").concat(k.type==="object"?"object":i.toString(k)))}),_.length?"{ ".concat(_.join("; ")," }"):"{}"},array:function(e){if(e.items){var i=this.getValidClassName(e.items);return i?"".concat(i,"[]"):"".concat(this.toString(e.items),"[]")}return"any[]"},element:function(e){return"<".concat(e.componentName," />")},function:function(e){var i=this,_=e.signature;return"".concat(_.isAsync?"async ":"","(").concat(_.arguments.map(function(p){return"".concat(p.key,": ").concat(i.toString(p))}).join(", "),") => ").concat(this.toString(_.returnType))},dom:function(e){return e.className||"DOM"},enum:function(e){return e.enum.map(function(i){return JSON.stringify(i)}).join(" | ")},oneOf:function(e){var i=this;return e.oneOf.map(function(_){return i.getValidClassName(_)||i.toString(_)}).join(" | ")},getValidClassName:function(e){return"className"in e&&typeof e.className=="string"&&e.className!=="__type"?e.className:null}},E=function(e){var i=useState(function(){return f.toString(e)}),_=_slicedToArray(i,2),p=_[0],j=_[1];return useEffect(function(){j(f.toString(e))},[e]),React.createElement(s,null,p)},b=function(e){var i,_=useRouteMeta(),p=_.frontmatter,j=useAtomAssets(),y=j.components,D=useLocale(),k=(i=e.id)!==null&&i!==void 0?i:p.atomId;if(!k)throw new Error("`id` properties if required for API component!");var T=y==null?void 0:y[k],M=useMemo(function(){return!y},[y]),l=useMemo(function(){var d;return M?{loading:{}}:T==null||(d=T.propsConfig)===null||d===void 0?void 0:d.properties},[T,M]),u=useMemo(function(){var d;return y&&!(T!=null&&(d=T.propsConfig)!==null&&d!==void 0&&d.properties)},[T,y]),n=useCallback(function(d,m){var R,C;return T!=null&&(R=T.propsConfig)!==null&&R!==void 0&&(C=R.required)!==null&&C!==void 0&&C.includes(d)?React.createElement(FormattedMessage,{id:"api.component.required"}):m||"--"},[T]);return React.createElement(Table,{parseChildren:!1},React.createElement(Thead,null,React.createElement(Tr,null,React.createElement(Th,null,React.createElement(FormattedMessage,{id:"api.component.name"})),React.createElement(Th,null,React.createElement(FormattedMessage,{id:"api.component.description"})),React.createElement(Th,null,React.createElement(FormattedMessage,{id:"api.component.type"})),React.createElement(Th,null,React.createElement(FormattedMessage,{id:"api.component.default"})))),React.createElement(Tbody,null,u?React.createElement(Tr,null,React.createElement(Td,{colSpan:4},React.createElement(Center,null,React.createElement(Text,{as:"p"},React.createElement(FormattedMessage,{id:"api.component.not.found"}))))):Object.entries(l).map(function(d){var m,R=_slicedToArray(d,2),C=R[0],L=R[1];return React.createElement(Tr,{key:C},React.createElement(Td,null,React.createElement(Skeleton,{isLoaded:!M,fadeDuration:4},C)),React.createElement(Td,null,React.createElement(Skeleton,{isLoaded:!M,fadeDuration:4},getLocalValue(D,(m=L==null?void 0:L.tags)!==null&&m!==void 0?m:{},"description")||"--")),React.createElement(Td,null,React.createElement(Skeleton,{isLoaded:!M,fadeDuration:4},React.createElement(E,L))),React.createElement(Td,null,React.createElement(Skeleton,{isLoaded:!M,fadeDuration:4},React.createElement(s,null,n(C,L.default)))))})))},g=null},64252:function(a,r,t){var v=t(50959),h=function(o){var s=o.image,f=o.children,E=o.description,b=o.submit,g=o.title,c=o.link;return React.createElement(Card,{direction:{base:"column",sm:"row"},overflow:"hidden",variant:"outline",shadow:"md"},!!(s!=null&&s.length)&&React.createElement(Image,{objectFit:"cover",maxW:{base:"100%",sm:"200px"},src:s,alt:"ad image"}),React.createElement(Stack,null,React.createElement(CardBody,null,!!g&&React.createElement(Heading,{size:"md"},g),React.createElement(Text,{py:"2"},f!=null?f:E)),(!!b||!!c)&&React.createElement(CardFooter,null,React.createElement(Button,{as:"a",href:c,target:"_blank",referrerPolicy:"no-referrer",variant:"solid",colorScheme:"brand",rightIcon:React.createElement(ExternalLinkIcon,null)},b))))},x=null},43145:function(a,r,t){var v=t(50959),h=null,x=function(s){var f=s.title,E=s.content,b=s.children,g=_objectWithoutProperties(s,h);return React.createElement(ChakraAlert,_extends({mb:4},g),React.createElement(AlertIcon,null),React.createElement(AlertTitle,null,f),React.createElement(AlertDescription,null,b!=null?b:E))},A=null},46972:function(a,r,t){var v=t(50959),h=t(18293),x=t(31463),A=t(53668),o=t(80769),s=t(24843),f=t(15981),E=t(11527),[b,g]=(0,f.k)({name:"TableStylesContext",errorMessage:`useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Table />" `}),c=(0,h.G)((l,u)=>{const n=(0,x.jC)("Table",l),C=(0,A.Lr)(l),{className:d,layout:m}=C,R=B(C,["className","layout"]);return(0,E.jsx)(b,{value:n,children:(0,E.jsx)(o.m.table,P({ref:u,__css:P({tableLayout:m},n.table),className:(0,s.cx)("chakra-table",d)},R))})});c.displayName="Table";var e=(0,h.G)((l,u)=>{const n=g();return(0,E.jsx)(o.m.thead,O(P({},l),{ref:u,__css:n.thead}))}),i=(0,h.G)((l,u)=>{const n=g();return(0,E.jsx)(o.m.tbody,O(P({},l),{ref:u,__css:n.tbody}))}),_=(0,h.G)((d,n)=>{var m=d,{isNumeric:l}=m,u=B(m,["isNumeric"]);const R=g();return(0,E.jsx)(o.m.th,O(P({},u),{ref:n,__css:R.th,"data-is-numeric":l}))}),p=(0,h.G)((d,n)=>{var m=d,{isNumeric:l}=m,u=B(m,["isNumeric"]);const R=g();return(0,E.jsx)(o.m.td,O(P({},u),{ref:n,__css:R.td,"data-is-numeric":l}))}),j=(0,h.G)((l,u)=>{const n=g();return(0,E.jsx)(o.m.tr,O(P({},l),{ref:u,__css:n.tr}))}),y={thead:e,tbody:i,th:_,td:p,tr:j};function D(l){var u=l.type,n=l.props,d=n!=null&&n.children?k(n.children):[],m=y[u];return m?cloneElement(React.createElement(m,null),_objectSpread(_objectSpread({},n),{},{children:d})):l}function k(l){var u=Children.count(l);return u?Children.map(l,D):D(l)}var T=function(u){var n=u.children,d=u.parseChildren,m=d===void 0?!0:d,R=useMemo(function(){return m?k(n):n},[m,n]);return React.createElement(TableContainer,{mt:6,mb:8},React.createElement(ChakraTable,null,R))},M=null},26820:function(a,r,t){var v=t(50959);function h(){return h=Object.assign?Object.assign.bind():function(o){for(var s=1;s<arguments.length;s++){var f=arguments[s];for(var E in f)Object.prototype.hasOwnProperty.call(f,E)&&(o[E]=f[E])}return o},h.apply(this,arguments)}var x=function(s){return React.createElement("span",h({className:"dumi-default-badge"},s))},A=null}}]);
}());