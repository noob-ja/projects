(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9361:function(e,t){"use strict";t.Z=function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}},8312:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(5075)}])},8461:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(9361).Z,r=i(4941).Z,o=i(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,i,l,s=e.src,v=e.sizes,S=e.unoptimized,j=void 0!==S&&S,x=e.priority,z=void 0!==x&&x,_=e.loading,C=e.className,E=e.quality,N=e.width,I=e.height,k=e.fill,L=e.style,O=e.onLoadingComplete,R=e.placeholder,A=void 0===R?"empty":R,q=e.blurDataURL,P=c(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoadingComplete","placeholder","blurDataURL"]),M=u.useContext(g.ImageConfigContext),B=u.useMemo(function(){var e=m||M||h.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort(function(e,t){return e-t}),i=e.deviceSizes.sort(function(e,t){return e-t});return a({},e,{allSizes:t,deviceSizes:i})},[M]),T=y;if("loader"in P){if(P.loader){var Z=P.loader;T=function(e){e.config;var t=c(e,["config"]);return Z(t)}}delete P.loader}var D="",W=b(N),U=b(I);if(function(e){var t;return"object"==typeof e&&(p(e)||void 0!==e.src)}(s)){var G=p(s)?s.default:s;if(!G.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(G)));if(!G.height||!G.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(G)));if(t=G.blurWidth,i=G.blurHeight,q=q||G.blurDataURL,D=G.src,!k){if(W||U){if(W&&!U){var F=W/G.width;U=Math.round(G.height*F)}else if(!W&&U){var H=U/G.height;W=Math.round(G.width*H)}}else W=G.width,U=G.height}}s="string"==typeof s?s:D;var J=!z&&("lazy"===_||void 0===_);(s.startsWith("data:")||s.startsWith("blob:"))&&(j=!0,J=!1),B.unoptimized&&(j=!0);var V=r(u.useState(!1),2),X=V[0],$=V[1],K=r(u.useState(!1),2),Q=K[0],Y=K[1],ee=b(E),et=Object.assign(k?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0}:{},Q?{}:{color:"transparent"},L),ei="blur"===A&&q&&!X?{backgroundSize:et.objectFit||"cover",backgroundPosition:et.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(f.getImageBlurSvg({widthInt:W,heightInt:U,blurWidth:t,blurHeight:i,blurDataURL:q}),'")')}:{},en=function(e){var t=e.config,i=e.src,n=e.unoptimized,r=e.width,a=e.quality,l=e.sizes,s=e.loader;if(n)return{src:i,srcSet:void 0,sizes:void 0};var c=function(e,t,i){var n=e.deviceSizes,r=e.allSizes;if(i){for(var a=/(^|\s)(1?\d?\d)vw/g,l=[];s=a.exec(i);s)l.push(parseInt(s[2]));if(l.length){var s,c,u=.01*(c=Math).min.apply(c,o(l));return{widths:r.filter(function(e){return e>=n[0]*u}),kind:"w"}}return{widths:r,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:o(new Set([t,2*t].map(function(e){return r.find(function(t){return t>=e})||r[r.length-1]}))),kind:"x"}}(t,r,l),u=c.widths,d=c.kind,f=u.length-1;return{sizes:l||"w"!==d?l:"100vw",srcSet:u.map(function(e,n){return"".concat(s({config:t,src:i,quality:a,width:e})," ").concat("w"===d?e:n+1).concat(d)}).join(", "),src:s({config:t,src:i,quality:a,width:u[f]})}}({config:B,src:s,unoptimized:j,width:W,quality:ee,sizes:v,loader:T}),er=s,eo="imagesizes";eo="imageSizes";var ea=(n(l={},"imageSrcSet",en.srcSet),n(l,eo,en.sizes),n(l,"crossOrigin",P.crossOrigin),l),el=u.useRef(O);u.useEffect(function(){el.current=O},[O]);var es=a({isLazy:J,imgAttributes:en,heightInt:U,widthInt:W,qualityInt:ee,className:C,imgStyle:et,blurStyle:ei,loading:_,config:B,fill:k,unoptimized:j,placeholder:A,loader:T,srcString:er,onLoadingCompleteRef:el,setBlurComplete:$,setShowAltText:Y},P);return u.default.createElement(u.default.Fragment,null,u.default.createElement(w,Object.assign({},es)),z?u.default.createElement(d.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+en.src+en.srcSet+en.sizes,rel:"preload",as:"image",href:en.srcSet?void 0:en.src},ea))):null)};var a=i(6495).Z,l=i(2648).Z,s=i(1598).Z,c=i(7273).Z,u=s(i(7294)),d=l(i(5443)),f=i(2730),h=i(9309),g=i(9977);i(3794);var m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/projects/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function p(e){return void 0!==e.default}function b(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function v(e,t,i,n,r){e&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch(function(){}).then(function(){e.parentNode&&("blur"===i&&r(!0),(null==n?void 0:n.current)&&n.current(e))}))}var w=function(e){var t=e.imgAttributes,i=e.heightInt,n=e.widthInt,r=(e.qualityInt,e.className),o=e.imgStyle,l=e.blurStyle,s=e.isLazy,d=e.fill,f=e.placeholder,h=e.loading,g=e.srcString,m=(e.config,e.unoptimized,e.loader,e.onLoadingCompleteRef),p=e.setBlurComplete,b=e.setShowAltText,w=e.onLoad,y=e.onError,S=c(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return h=s?"lazy":h,u.default.createElement(u.default.Fragment,null,u.default.createElement("img",Object.assign({},S,t,{width:n,height:i,decoding:"async","data-nimg":"future".concat(d?"-fill":""),className:r,loading:h,style:a({},o,l),ref:u.useCallback(function(e){e&&(y&&(e.src=e.src),e.complete&&v(e,g,f,m,p))},[g,f,m,p,y,]),onLoad:function(e){v(e.currentTarget,g,f,m,p),w&&w(e)},onError:function(e){b(!0),"blur"===f&&p(!0),y&&y(e)}})))};function y(e){var t=e.config,i=e.src,n=e.width,r=e.quality;return i.endsWith(".svg")&&!t.dangerouslyAllowSVG?i:"".concat(t.path,"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(r||75)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2730:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){var t=e.widthInt,i=e.heightInt,n=e.blurWidth,r=e.blurHeight,o=e.blurDataURL,a=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(n||t," ").concat(r||i,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&r?"1":"20","'/%3E").concat(a,"%3C/filter%3E%3Cimage filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E")}},5075:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return a}});var n=i(5893),r=i(1608),o=i.n(r),a=!0;t.default=function(e){var t=e.projectList;return(0,n.jsxs)("div",{className:"container mx-auto p-20 items-center text-center",children:[(0,n.jsxs)("a",{href:"https://github.com/noob-ja",target:"_blank",rel:"noopener noreferrer",className:"text-3xl font-bold hover:underline",children:[(0,n.jsx)(o(),{className:"rounded-full inline-block mb-2",src:"https://github.com/noob-ja.png",height:240,width:240,alt:"noob-ja"}),(0,n.jsx)("br",{}),"JA (noob-ja)"]}),(0,n.jsx)("hr",{className:"border-dashed my-4"}),(0,n.jsx)("ul",{children:null==t?void 0:t.map(function(e){return(0,n.jsxs)("li",{className:"py-4 grid grid-cols-2 items-center border-b last:border-none",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"text-xl font-bold",children:e.name}),(0,n.jsx)("span",{children:e.description})]}),(0,n.jsxs)("div",{className:"flex justify-center gap-4",children:[e.has_pages&&(0,n.jsx)("a",{className:"hover:underline",href:"https://noob-ja.github.io/"+e.name,target:"_blank",rel:"noopener noreferrer",children:"Pages"}),(0,n.jsx)("a",{className:"hover:underline",href:e.html_url,target:"_blank",rel:"noopener noreferrer",children:"Repo"})]})]},e.id)})})]})}},1608:function(e,t,i){e.exports=i(8461)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);