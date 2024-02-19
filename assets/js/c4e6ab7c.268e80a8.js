"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[64266],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>c});n(67294);var a=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={title:"Contributing"},l=void 0,p={unversionedId:"guides-concepts/contributing/index",id:"guides-concepts/contributing/index",title:"Contributing",description:"We follow a code of conduct when participating in the community. Please read it before you make any contributions.",source:"@site/docs/guides-concepts/contributing/index.md",sourceDirName:"guides-concepts/contributing",slug:"/guides-concepts/contributing/",permalink:"/docs/guides-concepts/contributing/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/guides-concepts/contributing/index.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1708353817,formattedLastUpdatedAt:"Feb 19, 2024",frontMatter:{title:"Contributing"},sidebar:"mainSidebar",previous:{title:"Development",permalink:"/docs/guides-concepts/development/"},next:{title:"FAQ",permalink:"/docs/guides-concepts/faq/"}},u={},c=[{value:"Ways to contribute",id:"ways-to-contribute",level:2},{value:"Setting Up Your Environment for Development",id:"setting-up-your-environment-for-development",level:2},{value:"Cloning the Repository",id:"cloning-the-repository",level:3},{value:"Installing dependencies",id:"installing-dependencies",level:3},{value:"Bootstrapping the Packages",id:"bootstrapping-the-packages",level:3},{value:"Building the Packages",id:"building-the-packages",level:3},{value:"Starting the Packages and Examples in Watch Mode",id:"starting-the-packages-and-examples-in-watch-mode",level:3},{value:"Running Tests",id:"running-tests",level:3},{value:"Working on Documentation",id:"working-on-documentation",level:2},{value:"Creating Previews and Code Samples",id:"creating-previews-and-code-samples",level:3},{value:"Committing Your Work and Preparing a Pull Request",id:"committing-your-work-and-preparing-a-pull-request",level:2},{value:"Commit Convention",id:"commit-convention",level:3},{value:"Creating a Changeset",id:"creating-a-changeset",level:3},{value:"Creating a Pull Request",id:"creating-a-pull-request",level:3},{value:"Release Cycle",id:"release-cycle",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},m=d("Tabs"),h=d("TabItem"),g={toc:c};function k(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)("wrapper",r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We follow a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/blob/master/CODE_OF_CONDUCT.md"},"code of conduct")," when participating in the community. Please read it before you make any contributions."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you plan to work on an issue, mention so in the issue page before you start working on it."),(0,a.kt)("li",{parentName:"ul"},"If you plan to work on a new feature, create an issue and discuss it with other community members/maintainers."),(0,a.kt)("li",{parentName:"ul"},"Ask for help in our ",(0,a.kt)("a",{parentName:"li",href:"https://discord.gg/refine"},"community room"),".")),(0,a.kt)("h2",{id:"ways-to-contribute"},"Ways to contribute"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Stars on GitHub"),": If you're a Refine user and enjoy using our platform, don't forget to star it on ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine"},"GitHub"),"! \ud83c\udf1f"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Improve documentation"),": Good documentation is imperative to the success of any project. You can make our documents the best they need to be by improving their quality or adding new ones."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Give feedback"),": We're always looking for ways to make Refine better, please share how you use Refine, what features are missing and what is done good via ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/discussions"},"GitHub Discussions")," or ",(0,a.kt)("a",{parentName:"li",href:"http://discord.gg/refine"},"Discord"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Share Refine"),": Help us reach people. Share ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine"},"Refine repository")," with everyone who can be interested."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Contribute to codebase"),": your help is needed to make this project the best it can be! You could develop new features or fix ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/issues"},"existing issues")," - every contribution will be welcomed with great pleasure!"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Share your own integrations"),": If you've created an integration for Refine, this can be a data provider, an auth provider, a UI integration or a routing integration, please share it with us! Refine's community has been growing rapidly and we're sure that your integration will be useful for many people. We'll be happy to add your integration to our ",(0,a.kt)("a",{parentName:"li",href:"https://refine.dev/integrations"},"integrations page")," along with the other community made integrations and share it with our community.")),(0,a.kt)("h2",{id:"setting-up-your-environment-for-development"},"Setting Up Your Environment for Development"),(0,a.kt)("admonition",{title:"Requirements",type:"simple"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node.js")," version 18 or higher"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"Git")," and ",(0,a.kt)("a",{parentName:"li",href:"https://github.com"},"GitHub")," account"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npm")," version 7 or higher"))),(0,a.kt)("p",null,"If your environment is ready, you can ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/fork"},"fork the Refine repository")," and clone it to your local machine."),(0,a.kt)("h3",{id:"cloning-the-repository"},"Cloning the Repository"),(0,a.kt)("p",null,"After you fork the Refine repository, you need to clone it to your local machine. Instead of using the ",(0,a.kt)("inlineCode",{parentName:"p"},"refinedev/refine")," repository, it's recommended to use your fork. This way, you can push your changes to your fork and create a pull request from there."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/refinedev/refine.git\n")),(0,a.kt)("h3",{id:"installing-dependencies"},"Installing dependencies"),(0,a.kt)("p",null,"After you clone the repository, you need to install the dependencies. You can use your favorite package manager to do that."),(0,a.kt)(m,{mdxType:"Tabs"},(0,a.kt)(h,{value:"npm",label:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install\n"))),(0,a.kt)(h,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn\n"))),(0,a.kt)(h,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm install\n")))),(0,a.kt)("h3",{id:"bootstrapping-the-packages"},"Bootstrapping the Packages"),(0,a.kt)("p",null,"Refine uses ",(0,a.kt)("a",{parentName:"p",href:"https://lerna.js.org"},"Lerna")," to manage and run packages and examples. If you're unfamiliar with Lerna, you may get confused about how to run the packages in development mode but don't worry, we got you covered. By following the steps below, you will be able to prepare the packages and examples you're going to work on."),(0,a.kt)("admonition",{title:"Development Tip",type:"simple"},(0,a.kt)("p",{parentName:"admonition"},"It's recommended to always keep at least one example ready to run while you are working on Refine. This way, you can test your changes in the example and make sure everything works as expected.")),(0,a.kt)("p",null,"Let's start with bootstrapping a package and an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Terminal"',title:'"Terminal"'},"npm run bootstrap -- --scope @refinedev/antd --scope base-antd --includeDependencies\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We're using ",(0,a.kt)("inlineCode",{parentName:"li"},"--scope")," flag to filter the packages and examples we want to bootstrap. In this example, we're bootstrapping ",(0,a.kt)("inlineCode",{parentName:"li"},"@refinedev/antd")," package and ",(0,a.kt)("inlineCode",{parentName:"li"},"base-antd")," example."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--includeDependencies")," flag is used to tell Lerna to also include the dependencies of the packages and examples we've filtered to the bootstrapping process.")),(0,a.kt)("h3",{id:"building-the-packages"},"Building the Packages"),(0,a.kt)("p",null,"After bootstrapping the packages we want to work on, we need to build them in order to run properly. You can use the command below to build the packages:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Terminal"',title:'"Terminal"'},"npm run build -- --scope @refinedev/antd --scope base-antd --includeDependencies\n")),(0,a.kt)("p",null,"Just like the ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap")," command we're using ",(0,a.kt)("inlineCode",{parentName:"p"},"--scope")," flag to filter the packages we want and use ",(0,a.kt)("inlineCode",{parentName:"p"},"--includeDependencies")," flag to include the dependencies of the packages we've filtered. This way, we're including the dependencies of the packages we're working on to the build process."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"How to add a dependency to a package?"),(0,a.kt)("p",null,"If you need to add a dependency to a package you're working on, it's best to update the ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file of the package manually and run the ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap")," command again in the root. This way, Lerna will install the dependency to the package and link it to the other packages."),(0,a.kt)("p",null,"Since Refine's repository uses the hoist option of Lerna, you need to use the same version of the dependency if it exists in another package or an example.")),(0,a.kt)("h3",{id:"starting-the-packages-and-examples-in-watch-mode"},"Starting the Packages and Examples in Watch Mode"),(0,a.kt)("p",null,"Now that we've bootstrapped and built the packages and examples we want to work on, we can start them in watch mode. This way, the packages and examples we've started will re-compile when we make a change in any of them."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Terminal"',title:'"Terminal"'},"npm run dev -- --scope @refinedev/antd --scope base-antd\n")),(0,a.kt)("p",null,"After running this command, you should see the packages and examples you've started in watch mode. You can now make changes in any of them and see the results in the browser."),(0,a.kt)("p",null,"If you make a change in the ",(0,a.kt)("inlineCode",{parentName:"p"},"@refinedev/antd")," package, you will see that right after the compilation, the ",(0,a.kt)("inlineCode",{parentName:"p"},"base-antd")," example will re-compile and you will see the changes in the browser."),(0,a.kt)("admonition",{title:"Development Tip",type:"simple"},(0,a.kt)("p",{parentName:"admonition"},"Notice that we're not using ",(0,a.kt)("inlineCode",{parentName:"p"},"--includeDependencies")," flag in this command. This is because we don't want to start the dependencies in watch mode. If we do, it will cause unnecessary re-compilations and slow down the development process.")),(0,a.kt)("h3",{id:"running-tests"},"Running Tests"),(0,a.kt)("p",null,"Just like the ",(0,a.kt)("inlineCode",{parentName:"p"},"dev")," command, we can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," command to run tests for the packages and examples we're working on."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Terminal"',title:'"Terminal"'},"npm run test -- --scope @refinedev/antd\n")),(0,a.kt)("admonition",{title:"Good to know",type:"simple"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Refine uses ",(0,a.kt)("a",{parentName:"li",href:"https://jestjs.io/"},"Jest")," as the test runner and ",(0,a.kt)("a",{parentName:"li",href:"https://testing-library.com/docs/react-testing-library/intro/"},"@testing-library/react")," for testing React components. For E2E tests, we're using ",(0,a.kt)("a",{parentName:"li",href:"https://www.cypress.io"},"Cypress"),"."),(0,a.kt)("li",{parentName:"ul"},"We're expecting to see proper tests for each feature/bugfix you make. If you're not sure how to write tests for your feature/bugfix, please ask for help in our ",(0,a.kt)("a",{parentName:"li",href:"https://discord.gg/refine"},"community room"),"."))),(0,a.kt)("h2",{id:"working-on-documentation"},"Working on Documentation"),(0,a.kt)("p",null,"Refine documentation is built with ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus"),". Documentation is handled separately from Lerna, so you need to install the dependencies and start the documentation separately."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Terminal"',title:'"Terminal"'},"cd documentation\nnpm install\nnpm run dev:docs\n")),(0,a.kt)("admonition",{title:"Documentation Scripts",type:"simple"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You can also use ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run dev:blog")," to start the blog section of the documentation.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"dev:docs")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"dev:blog")," scripts start a portion of the documentation and skips the unnecessary parts to speed up the development process such as type and props table generation, checklist generation, etc. If you want to start the documentation with all the features, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run dev")," command.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"To create a production build of the documentation, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run build")," command. Then, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run serve")," command to serve the production build in your local machine.")))),(0,a.kt)("h3",{id:"creating-previews-and-code-samples"},"Creating Previews and Code Samples"),(0,a.kt)("p",null,"We're using ",(0,a.kt)("a",{parentName:"p",href:"https://sandpack.codesandbox.io"},"Codesandbox's Sandpack")," to provide live previews and code editors in our documentation. We've created a custom ",(0,a.kt)("inlineCode",{parentName:"p"},"<Sandpack />")," component to make it easier to use with Refine and provided some predefined configurations for the most common use cases."),(0,a.kt)("p",null,"Check out the example usage of ",(0,a.kt)("inlineCode",{parentName:"p"},"<Sandpack />")," in Core API's ",(0,a.kt)("inlineCode",{parentName:"p"},"useForm")," hook documentation:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/data/hooks/use-form/#usage"},"useForm Documentation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/blob/master/documentation/docs/core/hooks/use-form/basic-usage.tsx"},"Source Code for Sandpack")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/blob/master/documentation/docs/core/hooks/use-form/index.md"},"Source Code for Markdown"))),(0,a.kt)("h2",{id:"committing-your-work-and-preparing-a-pull-request"},"Committing Your Work and Preparing a Pull Request"),(0,a.kt)("p",null,"Refine is a monorepo with multiple packages and examples. To make sure we're keeping things clean and in order, we're using couple of tools to enforce a good development experience."),(0,a.kt)("h3",{id:"commit-convention"},"Commit Convention"),(0,a.kt)("p",null,"Commit messages are essential to keep everything clear in our development process. We use ",(0,a.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"conventional commits")," to keep our commit messages consistent and easy to understand."),(0,a.kt)("p",null,"We're expecting to see proper commit messages with the following format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<type>(optional scope): <description>\n")),(0,a.kt)("p",null,"An example commit message:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"feat(core): add useAwesome hook\n")),(0,a.kt)("admonition",{title:"Good to know",type:"simple"},(0,a.kt)("p",{parentName:"admonition"},"We're using ",(0,a.kt)("a",{parentName:"p",href:"https://commitlint.js.org/"},"commitlint")," to enforce conventional commits. If you don't follow the conventional commit format, you will see an error message when you try to commit your changes or a Github action will fail when you create a pull request.")),(0,a.kt)("h3",{id:"creating-a-changeset"},"Creating a Changeset"),(0,a.kt)("p",null,"To manage our releases, changelogs and versioning, we're using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/changesets/changesets"},"Changesets")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/changesets/action"},"Changesets GitHub Action")," to automate the process. Changesets are designed to make your workflows easier, by allowing the person making contributions to make key decisions when they are making their contribution. Changesets hold two key bits of information: a version type (following semver), and change information to be added to a changelog."),(0,a.kt)("p",null,"Follow the steps below to create a changeset:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm run changeset\n")),(0,a.kt)("p",null,"After you run this command, you will be asked couple of questions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Select the package(s) you are modifying"),(0,a.kt)("li",{parentName:"ul"},"Choose one of ",(0,a.kt)("inlineCode",{parentName:"li"},"major/patch/minor")," according to your change"),(0,a.kt)("li",{parentName:"ul"},"Add explanation about the changes")),(0,a.kt)("p",null,"After you answer these questions, a changeset file will be created under ",(0,a.kt)("inlineCode",{parentName:"p"},".changeset")," directory. You can commit this file with your changes."),(0,a.kt)("admonition",{title:"Good to know",type:"simple"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"We're expecting a changeset to include a description about the changes you've made and how it affects the users. Please make sure you provide a good description for your changeset."),(0,a.kt)("li",{parentName:"ul"},"It's required for a changeset to provide a link to the issue that is related with. If you don't have an issue for your changes, please create one and link it to your changeset."),(0,a.kt)("li",{parentName:"ul"},"You'll be able to edit your changeset after you create it. If you need to make changes to your changeset, you can edit it under ",(0,a.kt)("inlineCode",{parentName:"li"},".changeset")," directory."))),(0,a.kt)("p",null,"Check out the following examples to see how changesets should be formatted:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md",metastring:'title=".changeset/some-changeset.md"',title:'".changeset/some-changeset.md"'},'---\n"@refinedev/core": minor\n---\n\nfeat: added x feature #ISSUE_ID\n\nNow with x feature, you can do y.\n\nResolves #1234\n')),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md",metastring:'title=".changeset/some-other-changeset.md"',title:'".changeset/some-other-changeset.md"'},'---\n"@refinedev/mantine": patch\n---\n\nfix: issue with x. #ISSUE_ID\n\nWe had an edge where it causes x issue to happen, now it\'s fixed.\n\nFixes #5678\n')),(0,a.kt)("h3",{id:"creating-a-pull-request"},"Creating a Pull Request"),(0,a.kt)("p",null,"After you commit your changes and create a changeset, you can push your changes to your fork and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/compare"},"create a pull request"),". When you create a pull request, you will see a Github action that will run the tests and check if your changeset is valid. Our maintainers will review your changes in short time and merge your pull request if everything is good."),(0,a.kt)("p",null,"Our Pull Request template is designed to make sure you provide all the necessary information about your changes. Please make sure you fill the template with the required information."),(0,a.kt)("p",null,"We're looking forward to see your contributions! \ud83c\udf89"),(0,a.kt)("h2",{id:"release-cycle"},"Release Cycle"),(0,a.kt)("p",null,"Refine follows a monthly release cycle. We're releasing a new version every month with the changes we've made in that month. Unless there's a critical bugfix, we're not releasing a new version in the middle of the month. If your PR is approved and ready to be merged, it will be labeled as ",(0,a.kt)("inlineCode",{parentName:"p"},"pr-ready")," and will be merged to the ",(0,a.kt)("inlineCode",{parentName:"p"},"master")," branch with the next release."),(0,a.kt)("p",null,"Each approved PR will be included to a milestone, these milestones are used to track the progress of the monthly release."))}k.isMDXComponent=!0}}]);