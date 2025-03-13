"use strict";(self.webpackChunkimmer_website=self.webpackChunkimmer_website||[]).push([[247],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(r),d=o,b=p["".concat(l,".").concat(d)]||p[d]||u[d]||a;return r?n.createElement(b,i(i({ref:t},m),{},{components:r})):n.createElement(b,i({ref:t},m))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5896:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=r(3117),o=r(102),a=(r(7294),r(3905)),i=["components"],s={id:"complex-objects",title:"Classes"},l=void 0,c={unversionedId:"complex-objects",id:"complex-objects",title:"Classes",description:"Plain objects (objects without a prototype), arrays, Maps and Sets are always drafted by Immer. Every other object must use the immerable symbol to mark itself as compatible with Immer. When one of these objects is mutated within a producer, its prototype is preserved between copies.",source:"@site/docs/complex-objects.md",sourceDirName:".",slug:"/complex-objects",permalink:"/immer/complex-objects",draft:!1,editUrl:"https://github.com/immerjs/immer/edit/main/website/docs/complex-objects.md",tags:[],version:"current",frontMatter:{id:"complex-objects",title:"Classes"},sidebar:"Immer",previous:{title:"Map and Set",permalink:"/immer/map-set"},next:{title:"Current",permalink:"/immer/current"}},m={},p=[{value:"Example",id:"example",level:3},{value:"Semantics in detail",id:"semantics-in-detail",level:3}],u={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("center",null,(0,a.kt)("div",{"data-ea-publisher":"immerjs","data-ea-type":"image",className:"horizontal bordered"})),(0,a.kt)("p",null,"Plain objects (objects without a prototype), arrays, ",(0,a.kt)("inlineCode",{parentName:"p"},"Map"),"s and ",(0,a.kt)("inlineCode",{parentName:"p"},"Set"),"s are always drafted by Immer. Every other object must use the ",(0,a.kt)("inlineCode",{parentName:"p"},"immerable")," symbol to mark itself as compatible with Immer. When one of these objects is mutated within a producer, its prototype is preserved between copies."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import {immerable} from "immer"\n\nclass Foo {\n    [immerable] = true // Option 1\n\n    constructor() {\n        this[immerable] = true // Option 2\n    }\n}\n\nFoo[immerable] = true // Option 3\n')),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import {immerable, produce} from "immer"\n\nclass Clock {\n    [immerable] = true\n\n    constructor(hour, minute) {\n        this.hour = hour\n        this.minute = minute\n    }\n\n    get time() {\n        return `${this.hour}:${this.minute}`\n    }\n\n    tick() {\n        return produce(this, draft => {\n            draft.minute++\n        })\n    }\n}\n\nconst clock1 = new Clock(12, 10)\nconst clock2 = clock1.tick()\nconsole.log(clock1.time) // 12:10\nconsole.log(clock2.time) // 12:11\nconsole.log(clock2 instanceof Clock) // true\n')),(0,a.kt)("h3",{id:"semantics-in-detail"},"Semantics in detail"),(0,a.kt)("p",null,"The semantics on how classes are drafted are as follows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A draft of a class is a fresh object but with the same prototype as the original object."),(0,a.kt)("li",{parentName:"ol"},"When creating a draft, Immer will copy all ",(0,a.kt)("em",{parentName:"li"},"own")," properties from the base to the draft.This includes (in strict mode) non-enumerable and symbolic properties."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"Own")," getters will be invoked during the copy process, just like ",(0,a.kt)("inlineCode",{parentName:"li"},"Object.assign")," would."),(0,a.kt)("li",{parentName:"ol"},"Inherited getters and methods will remain as is and be inherited by the draft, as they are stored on the prototype which is untouched."),(0,a.kt)("li",{parentName:"ol"},"Immer will not invoke constructor functions."),(0,a.kt)("li",{parentName:"ol"},"The final instance will be constructed with the same mechanism as the draft was created."),(0,a.kt)("li",{parentName:"ol"},"Only getters that have a setter as well will be writable in the draft, as otherwise the value can't be copied back.")),(0,a.kt)("p",null,"Because Immer will dereference own getters of objects into normal properties, it is possible to use objects that use getter/setter traps on their fields, like MobX and Vue do."),(0,a.kt)("p",null,"Note that, by default, Immer does not strictly handle object's non-enumerable properties such as getters/setters for performance reason. If you want this behavior to be strict, you can opt-in with ",(0,a.kt)("inlineCode",{parentName:"p"},"useStrictShallowCopy(config)"),". Use ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," to always copy strict, or ",(0,a.kt)("inlineCode",{parentName:"p"},'"class_only"')," to only copy class instances strictly but use the faster loose copying for plain objects. The default is ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),". (Remember, regardless of strict mode, own getters / setters are always copied ",(0,a.kt)("em",{parentName:"p"},"by value"),". There is currently no config to copy descriptors as-is. Feature request / PR welcome)."),(0,a.kt)("p",null,"Immer does not support exotic / engine native objects such as DOM Nodes or Buffers, nor is subclassing Map, Set or arrays supported and the ",(0,a.kt)("inlineCode",{parentName:"p"},"immerable")," symbol can't be used on them."),(0,a.kt)("p",null,"So when working for example with ",(0,a.kt)("inlineCode",{parentName:"p"},"Date")," objects, you should always create a new ",(0,a.kt)("inlineCode",{parentName:"p"},"Date")," instance instead of mutating an existing ",(0,a.kt)("inlineCode",{parentName:"p"},"Date")," object."))}d.isMDXComponent=!0}}]);