"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[51552],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?o.createElement(f,r(r({ref:t},u),{},{components:n})):o.createElement(f,r({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},55429:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>v,frontMatter:()=>l,metadata:()=>p,toc:()=>d});n(67294);var o=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={title:"Development"},s=void 0,p={unversionedId:"guides-concepts/development/index",id:"guides-concepts/development/index",title:"Development",description:"Refine offers improved developer experience by providing a set of tools to help you develop your application. These tools will help you from creating a new project to developing, customizing and debugging your application. This guide will introduce you to these tools and how to use them.",source:"@site/docs/guides-concepts/development/index.md",sourceDirName:"guides-concepts/development",slug:"/guides-concepts/development/",permalink:"/docs/guides-concepts/development/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/guides-concepts/development/index.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1706190719,formattedLastUpdatedAt:"Jan 25, 2024",frontMatter:{title:"Development"},sidebar:"mainSidebar",previous:{title:"Sign in with Ethereum Web3 Wallet",permalink:"/docs/advanced-tutorials/web3/ethereum-signin"},next:{title:"Contributing",permalink:"/docs/guides-concepts/contributing/"}},u={},d=[{value:"Creating a New Project",id:"creating-a-new-project",level:2},{value:"Using CLI",id:"using-cli",level:2},{value:"Installation",id:"installation",level:3},{value:"Usage",id:"usage",level:3},{value:"Using <code>swizzle</code>",id:"using-swizzle",level:3},{value:"Do I need to use swizzle?",id:"do-i-need-to-use-swizzle",level:4},{value:"Using <code>add</code>",id:"using-add",level:3},{value:"Using Devtools",id:"using-devtools",level:2},{value:"Installation",id:"installation-1",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Using Inferencer",id:"using-inferencer",level:2},{value:"Installation",id:"installation-2",level:3},{value:"Usage",id:"usage-2",level:3},{value:"Documentation and Community",id:"documentation-and-community",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},m=c("CreateRefineAppCommand"),f=c("Image"),h=c("Tabs"),y=c("TabItem"),g={toc:d};function v(e){var{components:t}=e,n=r(e,["components"]);return(0,o.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){a(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Refine offers improved developer experience by providing a set of tools to help you develop your application. These tools will help you from creating a new project to developing, customizing and debugging your application. This guide will introduce you to these tools and how to use them."),(0,o.kt)("h2",{id:"creating-a-new-project"},"Creating a New Project"),(0,o.kt)("p",null,"Refine provides an app scaffolding tool which is available both as ",(0,o.kt)("a",{parentName:"p",href:"https://refine.dev/?playground=true"},"browser-based")," and as command-line interface. Both of the tools will provide you set of options to choose from to create your project."),(0,o.kt)("admonition",{title:"Options",type:"simple"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"The platform you want to use (Vite, Next.js or Remix)"),(0,o.kt)("li",{parentName:"ul"},"The UI library of your choice (Ant Design, Material UI, Chakra UI, Mantine or none)"),(0,o.kt)("li",{parentName:"ul"},"The data provider you want to use (REST, Supabase, Strapi, NestJS, Appwrite, Airtable and Hasura)"),(0,o.kt)("li",{parentName:"ul"},"The authentication provider you want to use (Google Auth, Keycloak, Auth0, Supabase, Appwrite, Strapi, Custom or none)"))),(0,o.kt)("p",null,"To use the browser-based scaffolding tool, you can visit ",(0,o.kt)("a",{parentName:"p",href:"https://refine.dev/?playground=true"},"refine.dev")," and select the options you want to use for your project. After you are done with the options, you can click on the ",(0,o.kt)("strong",{parentName:"p"},"Create Project")," button to download your project."),(0,o.kt)("p",null,"To use the command-line interface, you can simply run the following command in your terminal:"),(0,o.kt)(m,{args:"my-refine-app",mdxType:"CreateRefineAppCommand"}),(0,o.kt)("p",null,"After running the command, you will be prompted to select the options you want to use for your project. After you are done with the options, the CLI will create your project in the ",(0,o.kt)("inlineCode",{parentName:"p"},"my-refine-app")," directory."),(0,o.kt)(f,{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-07-25-refine-primereact/create-refine-project.gif",mdxType:"Image"}),(0,o.kt)("h2",{id:"using-cli"},"Using CLI"),(0,o.kt)("p",null,"Refine offers a command-line interface to help you with your app's development. The CLI provides a set of commands to help you with running your app, creating new resources and taking care of the boilerplate code for you, creating providers with templates to get you started to implement your own providers with ease, updating your app's dependencies easily, exporting components and providers from Refine packages to your app to let you customize them just like you would do with your own components and providers, and and get you notified about the announcements from the Refine team."),(0,o.kt)("p",null,"To learn more about the ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/cli")," package, check out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/packages/cli/"},"CLI documentation"),"."),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("p",null,"CLI will be included in the apps created with the scaffolders by default. If you want to use the CLI in your existing project, you can install it by running the following command in your terminal:"),(0,o.kt)(h,{mdxType:"Tabs"},(0,o.kt)(y,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @refinedev/cli\n"))),(0,o.kt)(y,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @refinedev/cli\n"))),(0,o.kt)(y,{value:"pnpm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @refinedev/cli\n")))),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("p",null,"After installing the CLI, its recommended to update your scripts and add ",(0,o.kt)("inlineCode",{parentName:"p"},"refine")," command to your ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "refine": "refine"\n  }\n}\n')),(0,o.kt)("p",null,"This command will help you use CLI command easily. You can run the following command to see the available commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run refine -- --help\n")),(0,o.kt)("p",null,"It's recommended to use Refine's runners to run your development server. They will use the appropriate commands for your app's platform and also provide you with some additional features such as running the devtools (if installed) along with your app, checking for updates and notifying you about them, and notifying you about the announcements from the Refine team."),(0,o.kt)(h,{mdxType:"Tabs"},(0,o.kt)(y,{value:"Vite",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'{\n    "scripts": {\n-        "dev": "vite",\n-        "build": "vite build",\n-        "start": "vite preview"\n    }\n+        "dev": "refine dev",\n+        "build": "refine build",\n+        "start": "refine start"\n    }\n}\n'))),(0,o.kt)(y,{value:"Next.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'{\n    "scripts": {\n-        "dev": "next dev",\n-        "build": "next build",\n-        "start": "next start"\n    }\n+        "dev": "refine dev",\n+        "build": "refine build",\n+        "start": "refine start"\n    }\n}\n'))),(0,o.kt)(y,{value:"Remix",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'{\n    "scripts": {\n-        "dev": "remix dev",\n-        "build": "remix build",\n-        "start": "remix-serve build"\n    }\n+        "dev": "refine dev",\n+        "build": "refine build",\n+        "start": "refine start"\n    }\n}\n')))),(0,o.kt)("h3",{id:"using-swizzle"},"Using ",(0,o.kt)("inlineCode",{parentName:"h3"},"swizzle")),(0,o.kt)("p",null,"This command allows you to export components and providers from Refine packages to your app to let you customize them just like you would do with your own components and providers."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Why is it called swizzling?"),(0,o.kt)("p",null,"The term comes from Objective-C and Swift-UI: ",(0,o.kt)("a",{parentName:"p",href:"https://pspdfkit.com/blog/2019/swizzling-in-swift/"},"method swizzling")," is the process of changing the implementation of an existing selector (method)."),(0,o.kt)("p",null,"For Refine, component swizzling means providing an alternative component that will be used instead of the default one."),(0,o.kt)("p",null,"You can think of it as ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Monkey_patch"},"Monkey Patching")," for React components, which allows you to change the default implementation. Gatsby has a similar feature called ",(0,o.kt)("a",{parentName:"p",href:"https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/"},"theme shadowing"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Thanks to the ",(0,o.kt)("a",{parentName:"strong",href:"https://docusaurus.io"},"Docusaurus")," team for inspiring us for this feature."))),(0,o.kt)("h4",{id:"do-i-need-to-use-swizzle"},"Do I need to use swizzle?"),(0,o.kt)("p",null,"Refine packages provide data providers, UI frameworks, and components that make it easy to build a project. Most these are customizable and can be used as is. However, sometimes you may want to customize it as if you created it yourself. This is where swizzling comes in. Most of Refine packages provide a swizzle command that ejects the files to your project. You can then customize them as you wish."),(0,o.kt)("admonition",{title:"Caution",type:"simple"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"swizzle")," is a one-way operation. Once you swizzle a component or provider, you'll be responsible for keeping it up to date and fixing any issues that arise from the changes you've made.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Exports of the packages will not be updated automatically. You will need to replace the default elements with the elements you have swizzled manually.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can always switch back to the default implementations by updating your imports.")))),(0,o.kt)("h3",{id:"using-add"},"Using ",(0,o.kt)("inlineCode",{parentName:"h3"},"add")),(0,o.kt)("p",null,"This command will help you add new resources and providers to your app. It will take care of the boilerplate code for you and provide a good starting point for you to implement your own pages and providers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run refine add <auth, live, data, access-control, notification, i18n, audit-log, resource>\n")),(0,o.kt)("admonition",{title:"Options",type:"simple"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"resource"),": To create a new resource and its CRUD pages."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"auth"),": To create a new authentication provider."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"live"),": To create a new live provider."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"data"),": To create a new data provider."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"access-control"),": To create a new access control provider."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"notification"),": To create a new notification provider."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"i18n"),": To create a new i18n provider."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"audit-log"),": To create a new audit log provider."))),(0,o.kt)("h2",{id:"using-devtools"},"Using Devtools"),(0,o.kt)("p",null,"Refine provides a devtools package to help you with your app's development. Devtools will help you monitor your app's queries and mutations, inspect queries made by your components and update your dependencies with a single click."),(0,o.kt)("admonition",{title:"Good to know",type:"simple"},(0,o.kt)("p",{parentName:"admonition"},"Devtools will only work in development mode. In production it will not be included in your app's bundle and will not have any effect on your app's performance.")),(0,o.kt)("h3",{id:"installation-1"},"Installation"),(0,o.kt)("p",null,"To install devtools, you can use the following commands:"),(0,o.kt)(h,{mdxType:"Tabs"},(0,o.kt)(y,{value:"auto",label:"Using CLI",mdxType:"TabItem"},(0,o.kt)("p",null,"CLI has a command to install devtools and set it up for you:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run refine devtools init\n"))),(0,o.kt)(y,{value:"manual",label:"Manual",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @refinedev/devtools\n")))),(0,o.kt)("h3",{id:"usage-1"},"Usage"),(0,o.kt)("p",null,"The following steps is handled by the CLI command automatically. If you've used the CLI command to install devtools, you can skip this section."),(0,o.kt)("p",null,"To use devtools, you'll need to wrap your component with the ",(0,o.kt)("inlineCode",{parentName:"p"},"DevtoolsProvider")," component and if you're going to show it in the UI, you can add ",(0,o.kt)("inlineCode",{parentName:"p"},"DevtoolsPanel")," component inside your app."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@refinedev/core";\nimport { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";\n\nconst App = () => {\n  return (\n    // highlight-next-line\n    <DevtoolsProvider>\n      <Refine\n      // ...\n      >\n        {/* ... */}\n        {/* highlight-next-line */}\n        <DevtoolsPanel />\n      </Refine>\n      {/* highlight-next-line */}\n    </DevtoolsProvider>\n  );\n};\n')),(0,o.kt)(f,{src:"https://refine.ams3.cdn.digitaloceanspaces.com/assets/devtools-demo.gif",mdxType:"Image"}),(0,o.kt)("h2",{id:"using-inferencer"},"Using Inferencer"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/inferencer")," is a package that provides a way to automatically generate views for resources based on the data structure. The aim is to reduce the amount of time spent on creating views for resources by generating the code automatically that can be customized easily."),(0,o.kt)("admonition",{title:"Available UI Options",type:"simple"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Ant Design"),(0,o.kt)("li",{parentName:"ul"},"Material UI"),(0,o.kt)("li",{parentName:"ul"},"Chakra UI"),(0,o.kt)("li",{parentName:"ul"},"Mantine"),(0,o.kt)("li",{parentName:"ul"},"Headless"))),(0,o.kt)("h3",{id:"installation-2"},"Installation"),(0,o.kt)("p",null,"To install inferencer, you can use the following commands:"),(0,o.kt)(h,{mdxType:"Tabs"},(0,o.kt)(y,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @refinedev/inferencer\n"))),(0,o.kt)(y,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @refinedev/inferencer\n"))),(0,o.kt)(y,{value:"pnpm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @refinedev/inferencer\n")))),(0,o.kt)("h3",{id:"usage-2"},"Usage"),(0,o.kt)("p",null,"Inferencer package provides components for each UI implementation with subpaths (eg: ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/inferencer/antd"),") that is used to generate views dynamically by using the response of your data provider. You can use these components to generate views for your resources."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { AntdInferencer } from "@refinedev/inferencer/antd";\n\nconst PostList = () => {\n  return <AntdInferencer resource="posts" action="list" />;\n};\n')),(0,o.kt)("p",null,"The generated views will be previewed in your app and a modal will be shown to you to copy the code."),(0,o.kt)("admonition",{title:"Good to know",type:"simple"},(0,o.kt)("p",{parentName:"admonition"},"The code generated by the Inferencer may not cover all the cases for your app but it will provide you with a good starting point and reduce the amount of time you spend on development.")),(0,o.kt)("h2",{id:"documentation-and-community"},"Documentation and Community"),(0,o.kt)("p",null,"All the features of Refine and its packages are well documented and you can find the appropriate documentation for your needs. If you have any questions or need help with your app's development, you can join our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/refine"},"Discord")," server and ask your questions there. You can also join our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/discussions"},"Discussions")," page to discuss your ideas and questions with the community."))}v.isMDXComponent=!0}}]);