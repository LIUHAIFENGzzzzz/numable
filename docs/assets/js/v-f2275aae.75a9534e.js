/*! For license information please see v-f2275aae.75a9534e.js.LICENSE.txt */
"use strict";(self.webpackChunknumable=self.webpackChunknumable||[]).push([[468],{5590:e=>{function r(e,r,t){if(t||2===arguments.length)for(var n,a=0,o=r.length;a<o;a++)!n&&a in r||(n||(n=Array.prototype.slice.call(r,0,a)),n[a]=r[a]);return e.concat(n||Array.prototype.slice.call(r))}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n="object"==typeof t&&t&&t.Object===Object&&t,a="object"==typeof self&&self&&self.Object===Object&&self,o=(n||a||Function("return this")()).Symbol,l=Object.prototype,i=l.hasOwnProperty,u=l.toString,c=o?o.toStringTag:void 0,f=Object.prototype.toString,s=o?o.toStringTag:void 0,m=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":s&&s in Object(e)?function(e){var r=i.call(e,c),t=e[c];try{e[c]=void 0;var n=!0}catch(e){}var a=u.call(e);return n&&(r?e[c]=t:delete e[c]),a}(e):function(e){return f.call(e)}(e)},p=function(e){return null!=e&&"object"==typeof e},d={},h={},g={currentLocal:"zh-CN",zeroFormat:null,nullFormat:null,defaultFormat:"#,###"},v={currentLocal:g.currentLocal,zeroFormat:g.zeroFormat,nullFormat:g.nullFormat,defaultFormat:g.defaultFormat},b=Math.ceil,y=Math.max,w=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},_=/^(?:0|[1-9]\d*)$/,U=function(e,r,t){if(!w(t))return!1;var n=typeof r;return!!("number"==n?function(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}(e.length)&&!function(e){if(!w(e))return!1;var r=m(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r}(e)}(t)&&function(e,r){var t=typeof e;return!!(r=null==r?9007199254740991:r)&&("number"==t||"symbol"!=t&&_.test(e))&&e>-1&&e%1==0&&e<r}(r,t.length):"string"==n&&r in t)&&function(e,r){return e===r||e!=e&&r!=r}(t[r],e)},x=/\s/,F=/^\s+/,j=function(e){return"symbol"==typeof e||p(e)&&"[object Symbol]"==m(e)},k=/^[-+]0x[0-9a-f]+$/i,z=/^0b[01]+$/i,S=/^0o[0-7]+$/i,O=parseInt,A=function(e){return e?1/0===(e=function(e){if("number"==typeof e)return e;if(j(e))return NaN;if(w(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=w(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=function(e){return e?e.slice(0,function(e){for(var r=e.length;r--&&x.test(e.charAt(r)););return r}(e)+1).replace(F,""):e}(e);var t=z.test(e);return t||S.test(e)?O(e.slice(2),t?2:8):k.test(e)?NaN:+e}(e))||-1/0===e?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0},D=function(e,r){return e>r},C=function(e){return e},T=["0","#"];function V(e,r,t){var n=function(e){return e&&e.length?function(e,r,t){for(var n=-1,a=e.length;++n<a;){var o=e[n],l=r(o);if(null!=l&&(void 0===i?l==l&&!j(l):t(l,i)))var i=l,u=o}return u}(e,C,D):void 0}([e.length,r.length]),a=e.split(""),o=r.split(""),l=!0,i="";return function(e,r,t){return t&&"number"!=typeof t&&U(e,r,t)&&(r=t=void 0),e=A(e),void 0===r?(r=e,e=0):r=A(r),function(e,r,t,n){for(var a=-1,o=y(b((r-e)/(t||1)),0),l=Array(o);o--;)l[++a]=e,e+=t;return l}(e,r,t=void 0===t?e<r?1:-1:A(t))}(n).forEach((function(e){var r=o[o.length-n+e],u=a[a.length-n+e];0==t?l?(r&&u&&("0"!=r||"0"==u)||r&&"0"!=r&&!u||u&&"0"==u&&!r)&&(i+=r||"0",l=!1):i+=r||"0":u&&("0"==u||"#"==u&&r)&&(i+=r||"0")})),i}function B(e,t){void 0===t&&(t="");var n=h[v.currentLocal],a=r(r([],T,!0),[",","."],!1).join(""),o=new RegExp("[".concat(a,"]{1,}"),"gi"),l=t.match(o);if(function(e){return null===e}(l))throw new TypeError("format 存在非法字符");var i=l[0],u=function(e,r){var t=r.split("."),n=e.split("."),a=t[0],o=t[1],l=n[0],i=n[1],u=-1==a.indexOf(",")?-1:a.length-a.indexOf(","),c=V(a.replace(",",""),l,0),f=V(o?o.split("").reverse().join(""):"",i?i.split("").reverse().join(""):"",1);c=c.split("").reverse().join("");var s=new RegExp("[0-9]{"+(u-1)+","+(u-1)+"}","gi"),m=u>-1?c.match(s):void 0;if(m&&m.length>0){var p=c.replace(m.join(""),"");c=m.join(",")+(""==p?"":",")+p}return(""==(c=c.split("").reverse().join(""))?"0":c)+(""!=f?"."+f.split("").reverse().join(""):"")}(String(e),i);return t.replace(i,u).replace(",",n.delimiter).replace(".",n.decimal)}var L=function(e,r){this._input=e,this._value=r};function N(e){var r;return r=e instanceof N?e.value():0===e||void 0===e?0:null===e||function(e){return function(e){return"number"==typeof e||p(e)&&"[object Number]"==m(e)}(e)&&e!=+e}(e)?null:Number(e)||null,new L(e,r)}N.version="1.0.4",N.options=v,N.formats=d,N.locals=h,N.local=function(e){return e&&(v.currentLocal=e.toLowerCase()),v.currentLocal},N.localData=function(e){if(!e)return h[v.currentLocale];if(e=e.toLowerCase(),!h[e])throw new Error("Unknown locale : "+e);return h[e]},N.reset=function(){Object.keys(g).forEach((function(e){v[e]=g[e]}))},N.defaultOptions=function(e){return Object.assign(v,e),v},N.register=function(e,r,t){if(this[e+"s"][r])throw new TypeError(r+" "+e+" already registered.");return this[e+"s"][r]=t,t},N._={numberToFormat:B},N.fn=L.prototype={clone:function(){return N(this)},format:function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var a,o,l,i=this._value,u=e||v.defaultFormat;if(0===i&&null!==v.zeroFormat)o=v.zeroFormat;else if(null===i&&null!==v.nullFormat)o=v.nullFormat;else{for(a in d)if(u.match(d[a].regexps.format)){l=d[a].format;break}o=(l=l||B).apply(void 0,r([i,u],t,!1))}return o},value:function(){return this._value},input:function(){return this._input},set:function(e){return this._value=Number(e),this}},function(e){e.register("local",g.currentLocal,{decimal:".",delimiter:","}),e.register("format","percent",{regexps:{format:/(%)/},format:function(r,t){return void 0===t&&(t=""),e._.numberToFormat(100*r,t)}}),e.register("format","time",{regexps:{format:/([hms]{1,}:*)/},format:function(e,r){void 0===r&&(r="");var t=Math.floor(e/60/60),n=Math.floor((e-60*t*60)/60),a=Math.round(e-60*t*60-60*n),o=String(t<10?"0"+t:t),l=String(n<10?"0"+n:n),i=String(a<10?"0"+a:a);return r.replace(/h+/,o).replace(/m+/i,l).replace(/s+/i,i)}})}(N),e.exports=N},8209:(e,r,t)=>{t.r(r),t.d(r,{default:()=>K});var n=t(5314),a=t(5535),o=t(375),l=t(4751),i=t(5590),u=t.n(i);const c=e=>((0,n.dD)("data-v-4358482a"),e=e(),(0,n.Cn)(),e),f=c((()=>(0,n._)("h2",{id:"base",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#base","aria-hidden":"true"},"#"),(0,n.Uk)(" Base")],-1))),s={class:"example-format"},m=(0,n.Uk)("format: "),p=["onUpdate:modelValue"],d={class:"example-console"},h=c((()=>(0,n._)("h2",{id:"fill-zero",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#fill-zero","aria-hidden":"true"},"#"),(0,n.Uk)(" Fill Zero")],-1))),g={class:"example-format"},v=(0,n.Uk)("format: "),b=["onUpdate:modelValue"],y={class:"example-console"},w=c((()=>(0,n._)("h2",{id:"currency",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#currency","aria-hidden":"true"},"#"),(0,n.Uk)(" Currency")],-1))),_={class:"example-format"},U=(0,n.Uk)("format: "),x=["onUpdate:modelValue"],F={class:"example-console"},j=c((()=>(0,n._)("h2",{id:"percentage",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#percentage","aria-hidden":"true"},"#"),(0,n.Uk)(" Percentage")],-1))),k={class:"example-format"},z=(0,n.Uk)("format: "),S=["onUpdate:modelValue"],O={class:"example-console"},A=c((()=>(0,n._)("h2",{id:"fill-any-character",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#fill-any-character","aria-hidden":"true"},"#"),(0,n.Uk)(" Fill Any Character")],-1))),D={class:"example-format"},C=(0,n.Uk)("format: "),T=["onUpdate:modelValue"],V={class:"example-console"},B=c((()=>(0,n._)("h2",{id:"time",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#time","aria-hidden":"true"},"#"),(0,n.Uk)(" Time")],-1))),L={class:"example-format"},N=(0,n.Uk)("format: "),Y=["onUpdate:modelValue"],E={class:"example-console"},H=(0,n.aZ)({setup(e){const r=123456789.123,t=.123,i=(0,a.qj)({Base:[{number:r,format:"#,###"}],FillZero:[{number:r,format:"000000000#,####.00000000"}],Currency:[{number:r,format:"￥#,###"},{number:r,format:"#,###$"}],Percentage:[{number:t,format:"#%"},{number:t,format:"#.##%"},{number:t,format:"#.00%"}],FillAnyCharacter:[{number:r,format:"AAA-#,###-BBB"},{number:t,format:"AAA-#.0%-BBB"}],Time:[{number:123,format:"hh:mm:ss"},{number:123,format:"mm:ss"}]}),{Base:c,FillZero:H,Currency:K,Percentage:P,FillAnyCharacter:Z,Time:M}=(0,a.BK)(i),$=(0,a.Fl)((()=>Q(c))),R=(0,a.Fl)((()=>Q(H))),I=(0,a.Fl)((()=>Q(K))),q=(0,a.Fl)((()=>Q(P))),G=(0,a.Fl)((()=>Q(Z))),J=(0,a.Fl)((()=>Q(M)));function Q(e){return e.value.map((e=>u()(e.number).format(e.format)))}return(e,r)=>((0,n.wg)(),(0,n.iD)(n.HY,null,[f,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,a.SU)(c),((e,r)=>((0,n.wg)(),(0,n.iD)("div",{class:"example-group",key:r},[(0,n._)("p",s,[m,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":r=>e.format=r},null,8,p),[[o.nr,e.format]])]),(0,n._)("p",d,"console: "+(0,l.zw)(e.number)+" => "+(0,l.zw)((0,a.SU)($)[r]),1)])))),128)),h,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,a.SU)(H),((e,r)=>((0,n.wg)(),(0,n.iD)("div",{class:"example-group",key:r},[(0,n._)("p",g,[v,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":r=>e.format=r},null,8,b),[[o.nr,e.format]])]),(0,n._)("p",y,"console: "+(0,l.zw)(e.number)+" => "+(0,l.zw)((0,a.SU)(R)[r]),1)])))),128)),w,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,a.SU)(K),((e,r)=>((0,n.wg)(),(0,n.iD)("div",{class:"example-group",key:r},[(0,n._)("p",_,[U,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":r=>e.format=r},null,8,x),[[o.nr,e.format]])]),(0,n._)("p",F,"console: "+(0,l.zw)(e.number)+" => "+(0,l.zw)((0,a.SU)(I)[r]),1)])))),128)),j,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,a.SU)(P),((e,r)=>((0,n.wg)(),(0,n.iD)("div",{class:"example-group",key:r},[(0,n._)("p",k,[z,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":r=>e.format=r},null,8,S),[[o.nr,e.format]])]),(0,n._)("p",O,"console: "+(0,l.zw)(e.number)+" => "+(0,l.zw)((0,a.SU)(q)[r]),1)])))),128)),A,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,a.SU)(Z),((e,r)=>((0,n.wg)(),(0,n.iD)("div",{class:"example-group",key:r},[(0,n._)("p",D,[C,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":r=>e.format=r},null,8,T),[[o.nr,e.format]])]),(0,n._)("p",V,"console: "+(0,l.zw)(e.number)+" => "+(0,l.zw)((0,a.SU)(G)[r]),1)])))),128)),B,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,a.SU)(M),((e,r)=>((0,n.wg)(),(0,n.iD)("div",{class:"example-group",key:r},[(0,n._)("p",L,[N,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":r=>e.format=r},null,8,Y),[[o.nr,e.format]])]),(0,n._)("p",E,"console: "+(0,l.zw)(e.number)+" => "+(0,l.zw)((0,a.SU)(J)[r]),1)])))),128))],64))}}),K=(0,t(2637).Z)(H,[["__scopeId","data-v-4358482a"]])},2637:(e,r)=>{r.Z=(e,r)=>{const t=e.__vccOpts||e;for(const[e,n]of r)t[e]=n;return t}},4152:(e,r,t)=>{t.r(r),t.d(r,{data:()=>n});const n={key:"v-f2275aae",path:"/format.html",title:"",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Base",slug:"base",children:[]},{level:2,title:"Fill Zero",slug:"fill-zero",children:[]},{level:2,title:"Currency",slug:"currency",children:[]},{level:2,title:"Percentage",slug:"percentage",children:[]},{level:2,title:"Fill Any Character",slug:"fill-any-character",children:[]},{level:2,title:"Time",slug:"time",children:[]}],git:{updatedTime:1642173726e3,contributors:[{name:"YAODAOzzzz",email:"haifeng.liu@ebistrategy.com",commits:1}]},filePathRelative:"format.md"}}}]);