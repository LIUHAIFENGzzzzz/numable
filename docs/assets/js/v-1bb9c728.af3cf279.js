/*! For license information please see v-1bb9c728.af3cf279.js.LICENSE.txt */
"use strict";(self.webpackChunknumable=self.webpackChunknumable||[]).push([[50],{590:e=>{function r(e,r,t){if(t||2===arguments.length)for(var n,o=0,a=r.length;o<a;o++)!n&&o in r||(n||(n=Array.prototype.slice.call(r,0,o)),n[o]=r[o]);return e.concat(n||Array.prototype.slice.call(r))}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n="object"==typeof t&&t&&t.Object===Object&&t,o="object"==typeof self&&self&&self.Object===Object&&self,a=(n||o||Function("return this")()).Symbol,l=Object.prototype,i=l.hasOwnProperty,u=l.toString,c=a?a.toStringTag:void 0,f=Object.prototype.toString,s=a?a.toStringTag:void 0,m=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":s&&s in Object(e)?function(e){var r=i.call(e,c),t=e[c];try{e[c]=void 0;var n=!0}catch(e){}var o=u.call(e);return n&&(r?e[c]=t:delete e[c]),o}(e):function(e){return f.call(e)}(e)},p=function(e){return null!=e&&"object"==typeof e},d={},h={},b={currentLocal:"zh-CN",zeroFormat:null,nullFormat:null,defaultFormat:"#,###"},v={currentLocal:b.currentLocal,zeroFormat:b.zeroFormat,nullFormat:b.nullFormat,defaultFormat:b.defaultFormat},g=Math.ceil,y=Math.max,w=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},_=/^(?:0|[1-9]\d*)$/,x=function(e,r,t){if(!w(t))return!1;var n=typeof r;return!!("number"==n?function(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}(e.length)&&!function(e){if(!w(e))return!1;var r=m(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r}(e)}(t)&&function(e,r){var t=typeof e;return!!(r=null==r?9007199254740991:r)&&("number"==t||"symbol"!=t&&_.test(e))&&e>-1&&e%1==0&&e<r}(r,t.length):"string"==n&&r in t)&&function(e,r){return e===r||e!=e&&r!=r}(t[r],e)},F=/\s/,U=/^\s+/,j=function(e){return"symbol"==typeof e||p(e)&&"[object Symbol]"==m(e)},k=/^[-+]0x[0-9a-f]+$/i,z=/^0b[01]+$/i,S=/^0o[0-7]+$/i,O=parseInt,A=function(e){return e?1/0===(e=function(e){if("number"==typeof e)return e;if(j(e))return NaN;if(w(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=w(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=function(e){return e?e.slice(0,function(e){for(var r=e.length;r--&&F.test(e.charAt(r)););return r}(e)+1).replace(U,""):e}(e);var t=z.test(e);return t||S.test(e)?O(e.slice(2),t?2:8):k.test(e)?NaN:+e}(e))||-1/0===e?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0},C=function(e,r){return e>r},D=function(e){return e},L=["0","#"];function N(e,r,t){var n=function(e){return e&&e.length?function(e,r,t){for(var n=-1,o=e.length;++n<o;){var a=e[n],l=r(a);if(null!=l&&(void 0===i?l==l&&!j(l):t(l,i)))var i=l,u=a}return u}(e,D,C):void 0}([e.length,r.length]),o=e.split(""),a=r.split(""),l=!0,i="";return function(e,r,t){return t&&"number"!=typeof t&&x(e,r,t)&&(r=t=void 0),e=A(e),void 0===r?(r=e,e=0):r=A(r),function(e,r,t,n){for(var o=-1,a=y(g((r-e)/(t||1)),0),l=Array(a);a--;)l[++o]=e,e+=t;return l}(e,r,t=void 0===t?e<r?1:-1:A(t))}(n).forEach((function(e){var r=a[a.length-n+e],u=o[o.length-n+e];0==t?l?(r&&u&&("0"!=r||"0"==u)||r&&"0"!=r&&!u||u&&"0"==u&&!r)&&(i+=r||"0",l=!1):i+=r||"0":u&&("0"==u||"#"==u&&r)&&(i+=r||"0")})),i}function V(e,t){void 0===t&&(t="");var n=h[v.currentLocal],o=r(r([],L,!0),[",","."],!1).join(""),a=new RegExp("[".concat(o,"]{1,}"),"gi"),l=t.match(a);if(function(e){return null===e}(l))throw new TypeError("format 存在非法字符");var i=l[0],u=function(e,r){var t=r.split("."),n=e.split("."),o=t[0],a=t[1],l=n[0],i=n[1],u=-1==o.indexOf(",")?-1:o.length-o.indexOf(","),c=N(o.replace(",",""),l,0),f=N(a?a.split("").reverse().join(""):"",i?i.split("").reverse().join(""):"",1);c=c.split("").reverse().join("");var s=new RegExp("[0-9]{"+(u-1)+","+(u-1)+"}","gi"),m=u>-1?c.match(s):void 0;if(m&&m.length>0){var p=c.replace(m.join(""),"");c=m.join(",")+(""==p?"":",")+p}return(""==(c=c.split("").reverse().join(""))?"0":c)+(""!=f?"."+f.split("").reverse().join(""):"")}(String(e),i);return t.replace(i,u).replace(",",n.delimiter).replace(".",n.decimal)}var B=function(e,r){this._input=e,this._value=r};function T(e){var r;return r=e instanceof T?e.value():0===e||void 0===e?0:null===e||function(e){return function(e){return"number"==typeof e||p(e)&&"[object Number]"==m(e)}(e)&&e!=+e}(e)?null:Number(e)||null,new B(e,r)}T.version="1.0.4",T.options=v,T.formats=d,T.locals=h,T.local=function(e){return e&&(v.currentLocal=e.toLowerCase()),v.currentLocal},T.localData=function(e){if(!e)return h[v.currentLocale];if(e=e.toLowerCase(),!h[e])throw new Error("Unknown locale : "+e);return h[e]},T.reset=function(){Object.keys(b).forEach((function(e){v[e]=b[e]}))},T.defaultOptions=function(e){return Object.assign(v,e),v},T.register=function(e,r,t){if(this[e+"s"][r])throw new TypeError(r+" "+e+" already registered.");return this[e+"s"][r]=t,t},T._={numberToFormat:V},T.fn=B.prototype={clone:function(){return T(this)},format:function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var o,a,l,i=this._value,u=e||v.defaultFormat;if(0===i&&null!==v.zeroFormat)a=v.zeroFormat;else if(null===i&&null!==v.nullFormat)a=v.nullFormat;else{for(o in d)if(u.match(d[o].regexps.format)){l=d[o].format;break}a=(l=l||V).apply(void 0,r([i,u],t,!1))}return a},value:function(){return this._value},input:function(){return this._input},set:function(e){return this._value=Number(e),this}},function(e){e.register("local",b.currentLocal,{decimal:".",delimiter:","}),e.register("format","percent",{regexps:{format:/(%)/},format:function(r,t){return void 0===t&&(t=""),e._.numberToFormat(100*r,t)}}),e.register("format","time",{regexps:{format:/([hms]{1,}:*)/},format:function(e,r){void 0===r&&(r="");var t=Math.floor(e/60/60),n=Math.floor((e-60*t*60)/60),o=Math.round(e-60*t*60-60*n),a=String(t<10?"0"+t:t),l=String(n<10?"0"+n:n),i=String(o<10?"0"+o:o);return r.replace(/h+/,a).replace(/m+/i,l).replace(/s+/i,i)}})}(T),e.exports=T},829:(e,r,t)=>{t.r(r),t.d(r,{default:()=>B});var n=t(314),o=t(535),a=t(375),l=t(751),i=t(590),u=t.n(i);const c=e=>((0,n.dD)("data-v-376478ba"),e=e(),(0,n.Cn)(),e),f=c((()=>(0,n._)("h2",{id:"base",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#base","aria-hidden":"true"},"#"),(0,n.Uk)(" base")],-1))),s={class:"example-format"},m=(0,n.Uk)("format: "),p=["onUpdate:modelValue"],d={class:"example-console"},h=c((()=>(0,n._)("h2",{id:"fillzero",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#fillzero","aria-hidden":"true"},"#"),(0,n.Uk)(" FillZero")],-1))),b={class:"example-format"},v=(0,n.Uk)("format: "),g=["onUpdate:modelValue"],y={class:"example-console"},w=c((()=>(0,n._)("h2",{id:"currency",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#currency","aria-hidden":"true"},"#"),(0,n.Uk)(" Currency")],-1))),_={class:"example-format"},x=(0,n.Uk)("format: "),F=["onUpdate:modelValue"],U={class:"example-console"},j=c((()=>(0,n._)("h2",{id:"percentage",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#percentage","aria-hidden":"true"},"#"),(0,n.Uk)(" Percentage")],-1))),k={class:"example-format"},z=(0,n.Uk)("format: "),S=["onUpdate:modelValue"],O={class:"example-console"},A=c((()=>(0,n._)("h2",{id:"fillanycharacter",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#fillanycharacter","aria-hidden":"true"},"#"),(0,n.Uk)(" FillAnyCharacter")],-1))),C={class:"example-format"},D=(0,n.Uk)("format: "),L=["onUpdate:modelValue"],N={class:"example-console"},V=(0,n.aZ)({setup(e){const r=123456789.123,t=.123,i=(0,o.qj)({Base:[{number:r,format:"#,###"}],FillZero:[{number:r,format:"000000000#,####.00000000"}],Currency:[{number:r,format:"￥#,###"},{number:r,format:"#,###$"}],Percentage:[{number:t,format:"#%"},{number:t,format:"#.##%"},{number:t,format:"#.00%"}],FillAnyCharacter:[{number:r,format:"AAA-#,###-BBB"},{number:t,format:"AAA-#.0%-BBB"}]}),{Base:c,FillZero:V,Currency:B,Percentage:T,FillAnyCharacter:E}=(0,o.BK)(i),P=(0,o.Fl)((()=>M(c))),Z=(0,o.Fl)((()=>M(V))),H=(0,o.Fl)((()=>M(B))),K=(0,o.Fl)((()=>M(T))),Y=(0,o.Fl)((()=>M(E)));function M(e){return e.value.map((e=>u()(e.number).format(e.format)))}return(e,r)=>((0,n.wg)(),(0,n.iD)(n.HY,null,[f,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,o.SU)(c),((e,r)=>((0,n.wg)(),(0,n.iD)("div",{class:"example-group",key:r},[(0,n._)("p",s,[m,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":r=>e.format=r},null,8,p),[[a.nr,e.format]])]),(0,n._)("p",d,"console: "+(0,l.zw)(e.number)+" => "+(0,l.zw)((0,o.SU)(P)[r]),1)])))),128)),h,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,o.SU)(V),((e,r)=>((0,n.wg)(),(0,n.iD)("div",{class:"example-group",key:r},[(0,n._)("p",b,[v,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":r=>e.format=r},null,8,g),[[a.nr,e.format]])]),(0,n._)("p",y,"console: "+(0,l.zw)(e.number)+" => "+(0,l.zw)((0,o.SU)(Z)[r]),1)])))),128)),w,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,o.SU)(B),((e,r)=>((0,n.wg)(),(0,n.iD)("div",{class:"example-group",key:r},[(0,n._)("p",_,[x,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":r=>e.format=r},null,8,F),[[a.nr,e.format]])]),(0,n._)("p",U,"console: "+(0,l.zw)(e.number)+" => "+(0,l.zw)((0,o.SU)(H)[r]),1)])))),128)),j,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,o.SU)(T),((e,r)=>((0,n.wg)(),(0,n.iD)("div",{class:"example-group",key:r},[(0,n._)("p",k,[z,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":r=>e.format=r},null,8,S),[[a.nr,e.format]])]),(0,n._)("p",O,"console: "+(0,l.zw)(e.number)+" => "+(0,l.zw)((0,o.SU)(K)[r]),1)])))),128)),A,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,o.SU)(E),((e,r)=>((0,n.wg)(),(0,n.iD)("div",{class:"example-group",key:r},[(0,n._)("p",C,[D,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":r=>e.format=r},null,8,L),[[a.nr,e.format]])]),(0,n._)("p",N,"console: "+(0,l.zw)(e.number)+" => "+(0,l.zw)((0,o.SU)(Y)[r]),1)])))),128))],64))}}),B=(0,t(637).Z)(V,[["__scopeId","data-v-376478ba"]])},637:(e,r)=>{r.Z=(e,r)=>{const t=e.__vccOpts||e;for(const[e,n]of r)t[e]=n;return t}},789:(e,r,t)=>{t.r(r),t.d(r,{data:()=>n});const n={key:"v-1bb9c728",path:"/example.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"base",slug:"base",children:[]},{level:2,title:"FillZero",slug:"fillzero",children:[]},{level:2,title:"Currency",slug:"currency",children:[]},{level:2,title:"Percentage",slug:"percentage",children:[]},{level:2,title:"FillAnyCharacter",slug:"fillanycharacter",children:[]}],git:{updatedTime:null,contributors:[]},filePathRelative:"example.md"}}}]);