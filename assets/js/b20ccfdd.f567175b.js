"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[99060],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),s=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=n,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return r?o.createElement(m,i(i({ref:t},p),{},{components:r})):o.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},66342:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>y,frontMatter:()=>l,metadata:()=>s,toc:()=>u});r(67294);var o=r(3905);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const l={id:"useModal",title:"useModal",description:"useModal example of @pankod/refine-core","example-title":"Refine's useModal hook","example-tags":["headless","refine-hooks"]},c=void 0,s={unversionedId:"examples/core/useModal",id:"version-3.xx.xx/examples/core/useModal",title:"useModal",description:"useModal example of @pankod/refine-core",source:"@site/versioned_docs/version-3.xx.xx/examples/core/useModal.md",sourceDirName:"examples/core",slug:"/examples/core/useModal",permalink:"/docs/3.xx.xx/examples/core/useModal",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/examples/core/useModal.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1707128530,formattedLastUpdatedAt:"Feb 5, 2024",frontMatter:{id:"useModal",title:"useModal",description:"useModal example of @pankod/refine-core","example-title":"Refine's useModal hook","example-tags":["headless","refine-hooks"]},sidebar:"someSidebar",previous:{title:"useImport",permalink:"/docs/3.xx.xx/examples/core/useImport"},next:{title:"useSelect",permalink:"/docs/3.xx.xx/examples/core/useSelect"}},p={},u=[],d=(f="CodeSandboxExample",function(e){return console.warn("Component "+f+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var f;const m={toc:u};function y(e){var{components:t}=e,r=i(e,["components"]);return(0,o.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){n(e,t,r[t])}))}return e}({},m,r),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"useModal")," hook that comes with the ",(0,o.kt)("strong",{parentName:"p"},"headless")," version of ",(0,o.kt)("strong",{parentName:"p"},"refine"),", you may manage a modal. This hook is UI-independent and only includes show and close operations. You can create your UI as you like, and control it with the ",(0,o.kt)("inlineCode",{parentName:"p"},"useModal")," hook."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/ui/useModal/"},"Refer to the ",(0,o.kt)("strong",{parentName:"a"},"refine")," useModal hook documentation for more information. \u2192")),(0,o.kt)(d,{path:"core-use-modal",mdxType:"CodeSandboxExample"}))}y.isMDXComponent=!0}}]);