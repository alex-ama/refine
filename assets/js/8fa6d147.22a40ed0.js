"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[63283],{58943:(e,t,n)=>{n.d(t,{x:()=>m});var r=n(86010),o=n(67294),a=n(73808),i=n(96319),s=n(79526);const l=({horizontalSize:e,onMouseDown:t})=>o.createElement("div",{className:(0,r.Z)("resize-handler","hidden","md:block","absolute","z-[3]","top-0","bottom-0","w-2.5","cursor-ew-resize"),"data-direction":"horizontal",onMouseDown:t,style:{left:`calc(${e}% - 5px)`}});function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){d(e,t,n[t])}))}return e}function u(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const m=e=>{var t;return"nextjs"===(null===(t=e)||void 0===t?void 0:t.template)?o.createElement(f,e):o.createElement(h,e)},h=e=>{var t,n,d,m,h,f,v,y,g,b,w,x,k,P,O,{startRoute:R,showNavigator:I,showLineNumbers:E,showOpenInCodeSandbox:S,initialPercentage:L=50,dependencies:N,showReadOnly:C,options:j={showTabs:!0,initMode:"lazy",classes:{"sp-layout":"!rounded-lg !border-gray-300 dark:!border-gray-700","sp-editor":"!gap-0 border-r !border-r-gray-300 dark:!border-r-gray-700","sp-tabs":"!border-b-gray-300 dark:!border-b-gray-700 !bg-gray-0 dark:!bg-gray-800","sp-tabs-scrollable-container":"!min-h-[32px]","sp-input":"!text-gray-800 dark:!text-gray-100","sp-cm":(0,r.Z)("p-0 bg-transparent","[&>.cm-editor]:!bg-refine-react-light-code","[&>.cm-editor]:dark:!bg-refine-react-dark-code","[&_.cm-activeLine]:!bg-gray-100 [&_.cm-activeLine]:dark:!bg-gray-800"),"sp-icon-standalone":"!bg-gray-300 dark:!bg-gray-700 !text-gray-400 dark:!text-gray-500","sp-tab-button":(0,r.Z)("!h-8","!px-2 !pb-2 !pt-1.5","!text-gray-800 dark:!text-gray-100","!border !border-solid !border-b-0 !border-x-gray-300 dark:!border-x-gray-700","-ml-px first:ml-0","!border-t-2 !border-t-transparent [&[data-active='true']]:!border-t-refine-react-light-link dark:[&[data-active='true']]:!border-t-refine-react-dark-link")}},template:T="react-ts",customSetup:M,files:F,previewOnly:D,layout:A,height:z=420,wrapperClassName:U,className:W,showFiles:$=!1,showConsole:H=!1,hidePreview:_=!1}=e,q=p(e,["startRoute","showNavigator","showLineNumbers","showOpenInCodeSandbox","initialPercentage","dependencies","showReadOnly","options","template","customSetup","files","previewOnly","layout","height","wrapperClassName","className","showFiles","showConsole","hidePreview"]);const[B,G]=o.useState(!1);o.useEffect((()=>{G(!0)}),[]);const{colorMode:Z}=(0,s.I)();var Y,V;null!=j||(j={}),null!==(Y=(P=j).resizablePanels)&&void 0!==Y||(P.resizablePanels=!0),null!==(V=(O=j).editorWidthPercentage)&&void 0!==V||(O.editorWidthPercentage=null!=L?L:50);const X={showTabs:j.showTabs,showLineNumbers:j.showLineNumbers,showInlineErrors:j.showInlineErrors,wrapContent:j.wrapContent,closableTabs:j.closableTabs,initMode:j.initMode,extensions:null===(t=j.codeEditor)||void 0===t?void 0:t.extensions,extensionsKeymap:null===(n=j.codeEditor)||void 0===n?void 0:n.extensionsKeymap,readOnly:j.readOnly,showReadOnly:null!=C?C:j.showReadOnly,additionalLanguages:null===(d=j.codeEditor)||void 0===d?void 0:d.additionalLanguages},K={activeFile:j.activeFile,visibleFiles:j.visibleFiles,recompileMode:j.recompileMode,recompileDelay:j.recompileDelay,autorun:j.autorun,autoReload:j.autoReload,bundlerURL:j.bundlerURL,startRoute:j.startRoute,skipEval:j.skipEval,fileResolver:j.fileResolver,initMode:j.initMode,initModeObserverOptions:j.initModeObserverOptions,externalResources:j.externalResources,logLevel:j.logLevel,classes:j.classes},[J,Q]=o.useState(!1),{onHandleMouseDown:ee,horizontalSize:te}=(({initialSize:e=50})=>{const[t,n]=o.useState(e),r=o.useRef(null),a=e=>{if(!r.current)return;const t=r.current.parentElement;if(!t)return;const{left:o,width:a}=t.getBoundingClientRect(),i=(e.clientX-o)/a*100,s=Math.min(Math.max(i,25),75);n(s),t.querySelectorAll(".sp-stack").forEach((e=>{e.style.pointerEvents="none"}))},i=()=>{var e;const t=null===(e=r.current)||void 0===e?void 0:e.parentElement;t&&(t.querySelectorAll(".sp-stack").forEach((e=>{e.style.pointerEvents=""})),r.current=null)};return o.useEffect((()=>(document.body.addEventListener("mousemove",a),document.body.addEventListener("mouseup",i),()=>{document.body.removeEventListener("mousemove",a),document.body.removeEventListener("mouseup",i)})),[]),{horizontalSize:t,onHandleMouseDown:o.useCallback((e=>{r.current=e.target}),[])}})({initialSize:j.editorWidthPercentage}),ne=!D&&!(null===(h=A)||void 0===h||null===(m=h.includes)||void 0===m?void 0:m.call(h,"col"));var re,oe,ae,ie,se,le;return o.createElement(o.Fragment,null,o.createElement("div",{className:(0,r.Z)("pb-6",U)},o.createElement("div",{className:(0,r.Z)("absolute","left-0","right-0","w-full","px-2","md:px-4","xl:px-6","max-w-screen-xl","mx-auto",W)},o.createElement(i.oT,c({key:`${T}-${Z}-${B}`,customSetup:c({dependencies:N},M),files:F,options:K,template:T,theme:"light"===Z?u(c({},a.FM),{colors:u(c({},a.FM.colors),{accent:"#1D1E30",surface1:"transparent",surface2:"transparent",surface3:"transparent"})}):u(c({},a.I2),{colors:u(c({},a.I2.colors),{surface1:"transparent",surface2:"transparent",surface3:"transparent"})}),className:(0,r.Z)("not-prose sandpack-container","max-w-screen-xl","animate-reveal")},q),o.createElement(i.sp,{className:(0,r.Z)("col"===A&&"!flex-col","col-reverse"===A&&"!flex-col-reverse")},$&&o.createElement(i.Lj,{autoHiddenFiles:!0,style:{height:null!==(re=j.editorHeight)&&void 0!==re?re:z}}),!D&&o.createElement(i._V,u(c({},X),{showLineNumbers:E,closableTabs:$,initMode:"lazy",style:u(c({height:null!==(oe=j.editorHeight)&&void 0!==oe?oe:z},(null===(v=A)||void 0===v||null===(f=v.includes)||void 0===f?void 0:f.call(v,"col"))?{flex:"initial"}:{flexGrow:te,flexShrink:te,flexBasis:0}),{overflow:"hidden"})})),H?o.createElement(i.Tq,{style:u(c({height:null!==(ae=j.editorHeight)&&void 0!==ae?ae:z},(null===(g=A)||void 0===g||null===(y=g.includes)||void 0===y?void 0:y.call(g,"col"))?{flex:"initial"}:{flexGrow:te,flexShrink:te,flexBasis:0}),{overflow:"hidden"})}):null,ne?o.createElement(l,{onMouseDown:ee,horizontalSize:te}):null,_?null:o.createElement(o.Fragment,null,o.createElement(i.Gj,{showOpenInCodeSandbox:S,startRoute:R,showNavigator:null!=I?I:j.showNavigator,showRefreshButton:j.showRefreshButton,style:u(c({display:_?"none":"flex"},(null===(w=A)||void 0===w||null===(b=w.includes)||void 0===b?void 0:b.call(w,"col"))?{flex:"initial",width:"100%"}:{flexGrow:100-te,flexShrink:100-te,flexBasis:0,width:D?"100%":100-te+"%"}),{gap:0,height:null!==(ie=j.editorHeight)&&void 0!==ie?ie:z})},o.createElement("div",{className:"sp-custom-loading"},o.createElement("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/spinner.gif",className:(0,r.Z)("w-12","h-12","rounded-full")}))))))),o.createElement("div",{className:(0,r.Z)(""),style:{height:Number(null!==(se=j.editorHeight)&&void 0!==se?se:z)+2}}),o.createElement("div",{className:(0,r.Z)((null===(k=A)||void 0===k||null===(x=k.includes)||void 0===x?void 0:x.call(k,"col"))?"block":"block md:hidden"),style:{height:Number(null!==(le=j.editorHeight)&&void 0!==le?le:z)+2}})),o.createElement("section",{className:"hidden max-w-0 max-h-0"},o.createElement("p",null,`Dependencies: ${Object.keys(null!=N?N:{}).map((e=>`${e}@${N[e]}`))}`),o.createElement("h3",null,"Code Files"),Object.keys(null!=F?F:{}).map((e=>o.createElement("div",{key:e},o.createElement("div",null,`File: ${e}`),o.createElement("div",null,`Content: ${"code"in F[e]?F[e].code:F[e]}`))))))},f=e=>{const t={hidePreview:!0,showConsole:!1};return o.createElement(h,u(c({},e,t),{template:"react-ts"}))};'\nimport { NavigateToResource } from "@refinedev/nextjs-router";\n\nconst Home = () => {\n    return <NavigateToResource resource="products" />;\n};\n\nexport default Home;\n'.trim()},52714:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>S,contentTitle:()=>I,default:()=>F,frontMatter:()=>R,metadata:()=>E,toc:()=>L});var r=n(67294),o=n(3905),a=n(58943);function i(){return r.createElement(a.x,{hidePreview:!0,showFiles:!1,showOpenInCodeSandbox:!1,showReadOnly:!1,template:"react-ts",dependencies:{"@refinedev/core":"latest"},files:{"App.tsx":{code:s,readOnly:!0}}})}const s='\nimport { Refine } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\nimport routerProvider from "@refinedev/react-router-v6";\n\nimport { BrowserRouter, Outlet, Routes, Route } from "react-router-dom";\n\nimport { ProductsList, ProductsCreate, ProductsShow, ProductsEdit } from "./products";\n\nexport const App: React.FC = () => {\n  return (\n    <BrowserRouter>\n      <Refine\n        dataProvider={dataProvider("<API_URL>")}\n        routerProvider={routerProvider}\n        resources={[\n          {\n            name: "products",\n            // We\'re prefixing the routes with `/:tenantId` to make them tenant-aware.\n            list: "/:tenantId/products",\n            show: "/:tenantId/products/:id",\n            edit: "/:tenantId/products/:id/edit",\n            create: "/:tenantId/products/create",\n          },\n        ]}\n      >\n        <Routes>\n          {/* We\'re defining the `tenantId` as a route parameter. */}\n          <Route path="/:tenantId" element={<Outlet />}>\n            <Route path="products" element={<ProductsList />} />\n            <Route path="products/create" element={<ProductsCreate />} />\n            <Route path="products/:id" element={<ProductsShow />} />\n            <Route path="products/:id/edit" element={<ProductsEdit />} />\n          </Route>\n        </Routes>\n      </Refine>\n    </BrowserRouter>\n  );\n};\n'.trim();function l(){return r.createElement(a.x,{hidePreview:!0,showFiles:!0,showOpenInCodeSandbox:!1,showReadOnly:!1,template:"react-ts",dependencies:{"@refinedev/core":"latest"},files:{"/pages/_app.tsx":{code:d,active:!0,readOnly:!0},"/pages/[tenantId]/products/index.tsx":{code:c,readOnly:!0},"/pages/[tenantId]/products/create.tsx":{code:u,readOnly:!0},"/pages/[tenantId]/products/[id]/index.tsx":{code:p,readOnly:!0},"/pages/[tenantId]/products/[id]/edit.tsx":{code:m,readOnly:!0}}})}const d='\nimport React from "react";\n\nimport { Refine } from "@refinedev/core";\nimport routerProvider from "@refinedev/nextjs-router";\nimport dataProvider from "@refinedev/simple-rest";\nimport type { AppProps } from "next/app";\n\nfunction App({ Component, pageProps }: AppProps) {\n    return (\n      <Refine\n          dataProvider={dataProvider("<API_URL>")}\n          routerProvider={routerProvider}\n          resources={[\n            {\n              name: "products",\n              // We\'re prefixing the routes with `/:tenantId` to make them tenant-aware.\n              list: "/:tenantId/products",\n              show: "/:tenantId/products/:id",\n              edit: "/:tenantId/products/:id/edit",\n              create: "/:tenantId/products/create",\n            },\n          ]}\n      >\n          <Component {...pageProps} />\n      </Refine>\n    );\n}\n\nexport default App;\n'.trim(),c='\nimport React from "react";\n\nimport { useList } from "@refinedev/core";\n\nexport default function ProductsList() {\n  const { data, isLoading } = useList();\n\n  if (isLoading) {\n    return <div>Loading...</div>;\n  }\n\n  return (\n    <div>\n      <h1>Products</h1>\n      <ul>\n        {data?.data.map((record) => (\n          <li key={record.id}>{record.name}</li>\n        ))}\n      </ul>\n    </div>\n  );\n}\n'.trim(),u='\nimport React from "react";\n\nimport { useCreate } from "@refinedev/core";\n\nexport default function ProductsCreate() {\n  const { onFinish } = useForm();\n\n  return (\n    <div>\n      <h1>Create Product</h1>\n      <form onSubmit={(event) => { /* ... */ }}>\n        <label htmlFor="name">Name</label>\n        <input id="name" type="text" name="name" />\n        <button type="submit">Create</button>\n      </form>\n    </div>\n  );\n}\n'.trim(),p='\nimport React from "react";\n\nimport { useShow } from "@refinedev/core";\n\nexport default function ProductsShow() {\n  const { data, isLoading } = useShow();\n  const record = data?.data;\n\n  if (isLoading) {\n    return <div>Loading...</div>;\n  }\n\n  return (\n    <div>\n      <h1>{record?.name}</h1>\n      <p>{record?.description}</p>\n    </div>\n  );\n}\n'.trim(),m='\nimport React from "react";\n\nimport { useForm } from "@refinedev/core";\n\nexport default function ProductsEdit() {\n  const { onFinish, queryResult, formLoading } = useForm();\n  const record = queryResult?.data?.data;\n\n  if (isLoading) {\n    return <div>Loading...</div>;\n  }\n\n  return (\n    <div>\n      <h1>Edit Product</h1>\n      <form onSubmit={(event) => { /* ... */ }}>\n        <label htmlFor="name">Name</label>\n        <input id="name" type="text" name="name" defaultValue={record?.name} />\n        <button type="submit">Save</button>\n      </form>\n    </div>\n  );\n}\n'.trim();function h(){return r.createElement(a.x,{hidePreview:!0,showFiles:!0,showOpenInCodeSandbox:!1,showReadOnly:!1,template:"react-ts",dependencies:{"@refinedev/core":"latest"},files:{"/app/root.tsx":{code:f,active:!0,readOnly:!0},"/app/routes/$tenantId.products._index.tsx":{code:v,readOnly:!0},"/app/routes/$tenantId.products.create.tsx":{code:y,readOnly:!0},"/app/routes/$tenantId.products.$id._index.tsx":{code:g,readOnly:!0},"/app/routes/$tenantId.products.$id.edit.tsx":{code:b,readOnly:!0}}})}const f='\nimport React from "react";\n\nimport {\n  Links,\n  LiveReload,\n  Meta,\n  Outlet,\n  Scripts,\n  ScrollRestoration,\n} from "@remix-run/react";\n\nimport { Refine } from "@refinedev/core";\nimport routerProvider from "@refinedev/remix-router";\nimport dataProvider from "@refinedev/simple-rest";\n\nexport default function App() {\n  return (\n    <html lang="en">\n      <head>\n        <Meta />\n        <Links />\n      </head>\n      <body>\n        <Refine\n        dataProvider={dataProvider("<API_URL>")}\n          routerProvider={routerProvider}\n          resources={[\n            {\n              name: "products",\n              // We\'re prefixing the routes with `/:tenantId` to make them tenant-aware.\n              list: "/:tenantId/products",\n              show: "/:tenantId/products/:id",\n              edit: "/:tenantId/products/:id/edit",\n              create: "/:tenantId/products/create",\n            },\n          ]}\n        >\n          <Outlet />\n        </Refine>\n        <ScrollRestoration />\n        <Scripts />\n        <LiveReload />\n      </body>\n    </html>\n  );\n}\n'.trim(),v='\nimport React from "react";\n\nimport { useList } from "@refinedev/core";\n\nexport default function ProductsList() {\n  const { data, isLoading } = useList();\n\n  if (isLoading) {\n    return <div>Loading...</div>;\n  }\n\n  return (\n    <div>\n      <h1>Products</h1>\n      <ul>\n        {data?.data.map((record) => (\n          <li key={record.id}>{record.name}</li>\n        ))}\n      </ul>\n    </div>\n  );\n}\n'.trim(),y='\nimport React from "react";\n\nimport { useCreate } from "@refinedev/core";\n\nexport default function ProductsCreate() {\n  const { onFinish } = useForm();\n\n  return (\n    <div>\n      <h1>Create Product</h1>\n      <form onSubmit={(event) => { /* ... */ }}>\n        <label htmlFor="name">Name</label>\n        <input id="name" type="text" name="name" />\n        <button type="submit">Create</button>\n      </form>\n    </div>\n  );\n}\n'.trim(),g='\nimport React from "react";\n\nimport { useShow } from "@refinedev/core";\n\nexport default function ProductsShow() {\n  const { data, isLoading } = useShow();\n  const record = data?.data;\n\n  if (isLoading) {\n    return <div>Loading...</div>;\n  }\n\n  return (\n    <div>\n      <h1>{record?.name}</h1>\n      <p>{record?.description}</p>\n    </div>\n  );\n}\n'.trim(),b='\nimport React from "react";\n\nimport { useForm } from "@refinedev/core";\n\nexport default function ProductsEdit() {\n  const { onFinish, queryResult, formLoading } = useForm();\n  const record = queryResult?.data?.data;\n\n  if (isLoading) {\n    return <div>Loading...</div>;\n  }\n\n  return (\n    <div>\n      <h1>Edit Product</h1>\n      <form onSubmit={(event) => { /* ... */ }}>\n        <label htmlFor="name">Name</label>\n        <input id="name" type="text" name="name" defaultValue={record?.name} />\n        <button type="submit">Save</button>\n      </form>\n    </div>\n  );\n}\n'.trim();function w(){return r.createElement(a.x,{hidePreview:!0,showFiles:!1,showOpenInCodeSandbox:!1,showReadOnly:!1,template:"react-ts",dependencies:{"@refinedev/core":"latest"},files:{"/components/tenant-selector.tsx":{code:x,active:!0,readOnly:!0},"App.tsx":{code:"",hidden:!0}}})}const x='\nimport React from "react";\nimport { useSelect, useParsed, useGo, useGetToPath } from "@refinedev/core";\n\nexport const TenantSelector = () => {\n  const {\n    options,\n    queryResult: { isLoading },\n  } = useSelect({\n    // We\'re using the `tenants` resource to get the list of tenants\n    // Your API may have a different way to access the list of tenants\n    // or you may have a specific set of tenants that you want to show\n    resource: "tenants",\n    optionLabel: "name",\n    optionValue: "id",\n  });\n\n  // We\'ll use the useGo and useGetToPath hooks to navigate to the selected tenant\n  const go = useGo();\n  const getToPath = useGetToPath();\n  // We\'re using the useParsed hook to get the current route information and params (tenantId)\n  const {\n    resource,\n    action,\n    id,\n    params: { tenantId },\n  } = useParsed();\n\n  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {\n    const selectedTenantId = event.target.value;\n\n    go({\n      to: getToPath({\n        resource,\n        action: action ?? "list",\n        id,\n        meta: {\n          // We\'re passing the selected tenantId to the meta object\n          // Refine will use `meta` to decorate the additional parameters when constructing the route to navigate to\n          tenantId: selectedTenantId,\n        },\n      }),\n      type: "replace",\n    });\n  };\n\n  if (isLoading) {\n    return <div>Loading...</div>;\n  }\n\n  return (\n    <select onChange={onChange}>\n      {options.map(({ label, value }) => (\n        <option key={value} value={value} selected={value === tenantId}>\n          {label}\n        </option>\n      ))}\n    </select>\n  );\n};\n'.trim();function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function O(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const R={title:"Multitenancy"},I=void 0,E={unversionedId:"guides-concepts/multi-tenancy/index",id:"guides-concepts/multi-tenancy/index",title:"Multitenancy",description:"Refine's architecture allows you to customize your app's data providers, access control and routing to support multi tenant features easily. This guide will provide you with a high level overview of the concepts and how to implement them. To see multi tenant app examples, check out the Examples section.",source:"@site/docs/guides-concepts/multi-tenancy/index.md",sourceDirName:"guides-concepts/multi-tenancy",slug:"/guides-concepts/multi-tenancy/",permalink:"/docs/guides-concepts/multi-tenancy/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/guides-concepts/multi-tenancy/index.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1706013724,formattedLastUpdatedAt:"Jan 23, 2024",frontMatter:{title:"Multitenancy"},sidebar:"mainSidebar",previous:{title:"Audit Logs",permalink:"/docs/guides-concepts/audit-logs/"},next:{title:"Import - Export",permalink:"/docs/guides-concepts/import-export/"}},S={},L=[{value:"What is Multitenancy?",id:"what-is-multitenancy",level:2},{value:"Implementing Multitenancy in Refine",id:"implementing-multitenancy-in-refine",level:2},{value:"Configuring Multi-tenant Routes",id:"configuring-multi-tenant-routes",level:3},{value:"Handling Multi-tenant Requests in Data Providers",id:"handling-multi-tenant-requests-in-data-providers",level:3},{value:"Adding a Tenant Selector to the UI",id:"adding-a-tenant-selector-to-the-ui",level:3},{value:"Examples",id:"examples",level:2},{value:"Strapi",id:"strapi",level:3},{value:"Appwrite",id:"appwrite",level:3}],N=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},C=N("Tabs"),j=N("TabItem"),T=N("CodeSandboxExample"),M={toc:L};function F(e){var{components:t}=e,n=O(e,["components"]);return(0,o.kt)("wrapper",P(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){k(e,t,n[t])}))}return e}({},M,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Refine's architecture allows you to customize your app's data providers, access control and routing to support multi tenant features easily. This guide will provide you with a high level overview of the concepts and how to implement them. To see multi tenant app examples, check out the ",(0,o.kt)("a",{parentName:"p",href:"#examples"},"Examples")," section."),(0,o.kt)("h2",{id:"what-is-multitenancy"},"What is Multitenancy?"),(0,o.kt)("p",null,"Multitenancy refers to a kind of architecture where a single instance of software runs on a server and serves multiple customers. In a multi-tenant environment, separate customers tap into the same hardware and data storage, creating a dedicated instance for each customer. Each tenant\u2019s data is isolated and remains invisible to others, but is running on the same server."),(0,o.kt)("h2",{id:"implementing-multitenancy-in-refine"},"Implementing Multitenancy in Refine"),(0,o.kt)("p",null,"While there are many ways to implement multi tenant features, we'll implement a route based approach in the following sections. While your m implementation may differ, the concepts will be similar and the approach will be tweakable to your needs."),(0,o.kt)("h3",{id:"configuring-multi-tenant-routes"},"Configuring Multi-tenant Routes"),(0,o.kt)("p",null,"We'll be using routes to determine which tenant is being accessed. To do this, we'll need to configure our routes to include the tenant information. For example, a ",(0,o.kt)("inlineCode",{parentName:"p"},"products")," resource will have the route definition for ",(0,o.kt)("inlineCode",{parentName:"p"},"list")," as ",(0,o.kt)("inlineCode",{parentName:"p"},"/:tenantId/products"),"."),(0,o.kt)("p",null,"In the examples below, we are only showing the route definitions. You may need additional code to implement styling and layout depending on your choice of UI library. Regardless of the UI library you choose, the routing implementation will be similar to the examples above."),(0,o.kt)(C,{wrapContent:!1,mdxType:"Tabs"},(0,o.kt)(j,{value:"React Router Dom",mdxType:"TabItem"},(0,o.kt)(i,{mdxType:"ReactRouterRouteDefinitions"})),(0,o.kt)(j,{value:"Next.js",mdxType:"TabItem"},(0,o.kt)(l,{mdxType:"NextjsRouteDefinitions"})),(0,o.kt)(j,{value:"Remix",mdxType:"TabItem"},(0,o.kt)(h,{mdxType:"RemixRouteDefinitions"}))),(0,o.kt)("h3",{id:"handling-multi-tenant-requests-in-data-providers"},"Handling Multi-tenant Requests in Data Providers"),(0,o.kt)("p",null,"We'll be using the ",(0,o.kt)("inlineCode",{parentName:"p"},"tenantId")," from the route to determine which tenant is being accessed. Refine will infer the ",(0,o.kt)("inlineCode",{parentName:"p"},"tenantId")," from the current route and pass it to the data provider in ",(0,o.kt)("inlineCode",{parentName:"p"},"meta"),". You can access the ",(0,o.kt)("inlineCode",{parentName:"p"},"tenantId")," from the ",(0,o.kt)("inlineCode",{parentName:"p"},"meta")," object in your data provider and use it in your API calls."),(0,o.kt)("p",null,"To customize the data providers, you can override each method in the data provider instance or use the ",(0,o.kt)("inlineCode",{parentName:"p"},"swizzle")," command to be fully able to customize the data provider for your needs."),(0,o.kt)("p",null,"An example implementation of a custom ",(0,o.kt)("inlineCode",{parentName:"p"},"getList")," method is shown below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import dataProvider from "@refinedev/simple-rest";\n\nconst API_URL = "<API_URL>";\nconst baseDataProvider = dataProvider(API_URL);\n\nconst customDataProvider = {\n  ...baseDataProvider,\n  getList: async ({ resource, pagination, filters, sorters, meta }) => {\n    const { tenantId } = meta;\n\n    // We\'re prefixing the tenantId to the resource name\n    // Your API may have a different way of handling this\n    const response = await fetch(\n      `${API_URL}/${tenantId}/${resource}?${stringify({\n        /* ... */\n      })}`,\n    );\n\n    const data = await response.json();\n\n    const total = parseInt(response.headers.get("x-total-count") || "0");\n\n    return { data, total };\n  },\n};\n')),(0,o.kt)("admonition",{title:"Implementation Tips",type:"simple"},(0,o.kt)("p",{parentName:"admonition"},"Check out the ",(0,o.kt)("a",{parentName:"p",href:"#examples"},"Examples")," below to see a full implementation of a data provider for a multi tenant app.")),(0,o.kt)("h3",{id:"adding-a-tenant-selector-to-the-ui"},"Adding a Tenant Selector to the UI"),(0,o.kt)("p",null,"Now we've defined our routes and data providers to use ",(0,o.kt)("inlineCode",{parentName:"p"},"tenantId")," to determine which tenant is being accessed. We'll need to add a tenant selector to the UI to allow users to switch between tenants."),(0,o.kt)("admonition",{title:"Implementation Tips",type:"simple"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The implementation of the component may differ depending on your choice of UI library. Regardless of the UI library you choose, the implementation will be similar to the example below.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"It's best to place the tenant selector in a layout component that wraps the routes. This way, the tenant selector will be available in all pages. If you're using Refine's layout components, it's recommended to place the tenant selector in the header or sider components.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Check out the ",(0,o.kt)("a",{parentName:"p",href:"#examples"},"Examples")," below to see an example implementation of a tenant selector.")))),(0,o.kt)(w,{mdxType:"Selector"}),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Here are two examples of multi tenant apps built with Refine. You can view the source code and run the apps in your local to understand how multi tenant features are implemented."),(0,o.kt)("h3",{id:"strapi"},"Strapi"),(0,o.kt)(T,{hideSandbox:!0,path:"multi-tenancy-strapi",mdxType:"CodeSandboxExample"}),(0,o.kt)("h3",{id:"appwrite"},"Appwrite"),(0,o.kt)(T,{hideSandbox:!0,path:"multi-tenancy-appwrite",mdxType:"CodeSandboxExample"}))}F.isMDXComponent=!0}}]);