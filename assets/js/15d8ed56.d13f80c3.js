"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[71909],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,f=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return t?r.createElement(f,a(a({ref:n},d),{},{components:t})):r.createElement(f,a({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},20682:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>c});t(67294);var r=t(3905);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={id:"delete-button",title:"Delete",swizzle:!0},l=void 0,p={unversionedId:"api-reference/mantine/components/buttons/delete-button",id:"version-3.xx.xx/api-reference/mantine/components/buttons/delete-button",title:"Delete",description:"` uses Mantine  and ` components.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/mantine/components/buttons/delete.md",sourceDirName:"api-reference/mantine/components/buttons",slug:"/api-reference/mantine/components/buttons/delete-button",permalink:"/docs/3.xx.xx/api-reference/mantine/components/buttons/delete-button",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/mantine/components/buttons/delete.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1704461576,formattedLastUpdatedAt:"Jan 5, 2024",frontMatter:{id:"delete-button",title:"Delete",swizzle:!0},sidebar:"someSidebar",previous:{title:"Create",permalink:"/docs/3.xx.xx/api-reference/mantine/components/buttons/create-button"},next:{title:"Edit",permalink:"/docs/3.xx.xx/api-reference/mantine/components/buttons/edit-button"}},d={},c=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>recordItemId</code>",id:"recorditemid",level:3},{value:"<code>resourceNameOrRouteName</code>",id:"resourcenameorroutename",level:3},{value:"<code>onSuccess</code>",id:"onsuccess",level:3},{value:"<code>mutationMode</code>",id:"mutationmode",level:3},{value:"<code>hideText</code>",id:"hidetext",level:3},{value:"<code>accessControl</code>",id:"accesscontrol",level:3},{value:"How to override confirm texts?",id:"how-to-override-confirm-texts",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],u=(m="PropsTable",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var m;const f={toc:c};function h(e){var{components:n}=e,t=a(e,["components"]);return(0,r.kt)("wrapper",i(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},f,t),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'const { default: routerProvider } = RefineReactRouterV6;\nsetRefineProps({\n  routerProvider,\n  notificationProvider: RefineMantine.notificationProvider,\n  Layout: RefineMantine.Layout,\n  Sider: () => null,\n  catchAll: <RefineMantine.ErrorComponent />,\n});\n\nconst Wrapper = ({ children }) => {\n  return (\n    <RefineMantine.MantineProvider\n      theme={RefineMantine.LightTheme}\n      withNormalizeCSS\n      withGlobalStyles\n    >\n      <RefineMantine.Global\n        styles={{ body: { WebkitFontSmoothing: "auto" } }}\n      />\n      <RefineMantine.NotificationsProvider position="top-right">\n        {children}\n      </RefineMantine.NotificationsProvider>\n    </RefineMantine.MantineProvider>\n  );\n};\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<DeleteButton>")," uses Mantine ",(0,r.kt)("a",{parentName:"p",href:"https://mantine.dev/core/button"},(0,r.kt)("inlineCode",{parentName:"a"},"<Button>"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://mantine.dev/core/popover/"},(0,r.kt)("inlineCode",{parentName:"a"},"<Popconfirm>"))," components.\nWhen you try to delete something, a pop-up shows up and asks for confirmation. When confirmed it executes the ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useDelete/"},(0,r.kt)("inlineCode",{parentName:"a"},"useDelete"))," method provided by your ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/data-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"dataProvider")),"."),(0,r.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,r.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/packages/documentation/cli"},(0,r.kt)("strong",{parentName:"a"},"refine CLI")))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=420px hideCode",live:!0,url:"http://localhost:3000",previewHeight:"420px",hideCode:!0},'setInitialRoutes(["/posts"]);\nimport { Refine } from "@pankod/refine-core";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// visible-block-start\nimport { List, Table, Pagination, DeleteButton } from "@pankod/refine-mantine";\nimport { useTable, ColumnDef, flexRender } from "@pankod/refine-react-table";\n\nconst PostList: React.FC = () => {\n  const columns = React.useMemo<ColumnDef<IPost>[]>(\n    () => [\n      {\n        id: "id",\n        header: "ID",\n        accessorKey: "id",\n      },\n      {\n        id: "title",\n        header: "Title",\n        accessorKey: "title",\n      },\n      {\n        id: "actions",\n        header: "Actions",\n        accessorKey: "id",\n        cell: function render({ getValue }) {\n          return (\n            // highlight-start\n            <DeleteButton size="xs" recordItemId={getValue() as number} />\n            // highlight-end\n          );\n        },\n      },\n    ],\n    [],\n  );\n\n  const {\n    getHeaderGroups,\n    getRowModel,\n    refineCore: { setCurrent, pageCount, current },\n  } = useTable({\n    columns,\n  });\n\n  return (\n    <List>\n      <Table>\n        <thead>\n          {getHeaderGroups().map((headerGroup) => (\n            <tr key={headerGroup.id}>\n              {headerGroup.headers.map((header) => (\n                <th key={header.id}>\n                  {header.isPlaceholder\n                    ? null\n                    : flexRender(\n                        header.column.columnDef.header,\n                        header.getContext(),\n                      )}\n                </th>\n              ))}\n            </tr>\n          ))}\n        </thead>\n        <tbody>\n          {getRowModel().rows.map((row) => (\n            <tr key={row.id}>\n              {row.getVisibleCells().map((cell) => (\n                <td key={cell.id}>\n                  {flexRender(cell.column.columnDef.cell, cell.getContext())}\n                </td>\n              ))}\n            </tr>\n          ))}\n        </tbody>\n      </Table>\n      <br />\n      <Pagination\n        position="right"\n        total={pageCount}\n        page={current}\n        onChange={setCurrent}\n      />\n    </List>\n  );\n};\n\ninterface IPost {\n  id: number;\n  title: string;\n}\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n      resources={[\n        {\n          name: "posts",\n          list: PostList,\n        },\n      ]}\n    />\n  );\n};\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n')),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"recorditemid"},(0,r.kt)("inlineCode",{parentName:"h3"},"recordItemId")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"recordItemId")," allows us to manage which record will be deleted."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=200px",live:!0,url:"http://localhost:3000",previewHeight:"200px"},'setInitialRoutes(["/"]);\nimport { Refine } from "@pankod/refine-core";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// visible-block-start\nimport { DeleteButton } from "@pankod/refine-mantine";\n\nconst MyDeleteComponent = () => {\n  return <DeleteButton recordItemId="123" />;\n};\n// visible-block-end\n\nconst App = () => {\n  const simpleRestDataProvider = dataProvider(\n    "https://api.fake-rest.refine.dev",\n  );\n\n  const customDataProvider = {\n    ...simpleRestDataProvider,\n    deleteOne: async ({ resource, id, variables }) => {\n      await new Promise((resolve) => setTimeout(resolve, 500));\n\n      return {\n        data: {},\n      };\n    },\n  };\n\n  return (\n    <Refine\n      dataProvider={customDataProvider}\n      resources={[\n        {\n          name: "posts",\n          list: MyDeleteComponent,\n        },\n      ]}\n    />\n  );\n};\n\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n')),(0,r.kt)("p",null,"Clicking the button will trigger the ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useDelete/"},(0,r.kt)("inlineCode",{parentName:"a"},"useDelete")),' method and then the record whose resource is "post" and whose id is "123" gets deleted.'),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"<DeleteButton>"))," component reads the id information from the route by default.")),(0,r.kt)("h3",{id:"resourcenameorroutename"},(0,r.kt)("inlineCode",{parentName:"h3"},"resourceNameOrRouteName")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"resourceNameOrRouteName")," allows us to manage which resource's record is going to be deleted."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=200px",live:!0,url:"http://localhost:3000",previewHeight:"200px"},'setInitialRoutes(["/"]);\n\nimport { Refine } from "@pankod/refine-core";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// visible-block-start\nimport { DeleteButton } from "@pankod/refine-mantine";\n\nconst MyDeleteComponent = () => {\n  return <DeleteButton resourceNameOrRouteName="categories" recordItemId="2" />;\n};\n// visible-block-end\n\nconst App = () => {\n  const simpleRestDataProvider = dataProvider(\n    "https://api.fake-rest.refine.dev",\n  );\n\n  const customDataProvider = {\n    ...simpleRestDataProvider,\n    deleteOne: async ({ resource, id, variables }) => {\n      await new Promise((resolve) => setTimeout(resolve, 500));\n\n      return {\n        data: {},\n      };\n    },\n  };\n\n  return (\n    <Refine\n      dataProvider={customDataProvider}\n      resources={[\n        {\n          name: "posts",\n          list: MyDeleteComponent,\n        },\n        {\n          name: "categories",\n        },\n      ]}\n    />\n  );\n};\n\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n')),(0,r.kt)("p",null,"Clicking the button will trigger the ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useDelete/"},(0,r.kt)("inlineCode",{parentName:"a"},"useDelete")),' method and then the record whose resource is "categories" and whose id is "2" gets deleted.'),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"<DeleteButton>"))," component reads the resource name from the route by default.")),(0,r.kt)("h3",{id:"onsuccess"},(0,r.kt)("inlineCode",{parentName:"h3"},"onSuccess")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"onSuccess")," can be used if you want to do anything on the result returned after the delete request."),(0,r.kt)("p",null,"For example, let's ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log")," after deletion:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=200px",live:!0,url:"http://localhost:3000",previewHeight:"200px"},'setInitialRoutes(["/"]);\nimport { Refine } from "@pankod/refine-core";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// visible-block-start\nimport { DeleteButton } from "@pankod/refine-mantine";\n\nconst MyDeleteComponent = () => {\n  return (\n    <DeleteButton\n      resourceNameOrRouteName="posts"\n      recordItemId="1"\n      onSuccess={(value) => {\n        console.log(value);\n      }}\n    />\n  );\n};\n// visible-block-end\n\nconst App = () => {\n  const simpleRestDataProvider = dataProvider(\n    "https://api.fake-rest.refine.dev",\n  );\n\n  const customDataProvider = {\n    ...simpleRestDataProvider,\n    deleteOne: async ({ resource, id, variables }) => {\n      await new Promise((resolve) => setTimeout(resolve, 500));\n\n      return {\n        message: "You have successfully deleted the record",\n      };\n    },\n  };\n\n  return (\n    <Refine\n      dataProvider={customDataProvider}\n      resources={[\n        {\n          name: "posts",\n          list: MyDeleteComponent,\n        },\n      ]}\n    />\n  );\n};\n\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n')),(0,r.kt)("h3",{id:"mutationmode"},(0,r.kt)("inlineCode",{parentName:"h3"},"mutationMode")),(0,r.kt)("p",null,"Determines which mode mutation will have while executing ",(0,r.kt)("inlineCode",{parentName:"p"},"<DeleteButton>"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/advanced-tutorials/mutation-mode"},"Refer to the mutation mode docs for further information. ","\u2192")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=200px",live:!0,url:"http://localhost:3000",previewHeight:"200px"},'setInitialRoutes(["/"]);\nimport { Refine } from "@pankod/refine-core";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// visible-block-start\nimport { DeleteButton } from "@pankod/refine-mantine";\n\nconst MyDeleteComponent = () => {\n  return <DeleteButton recordItemId="1" mutationMode="undoable" />;\n};\n// visible-block-end\n\nconst App = () => {\n  const simpleRestDataProvider = dataProvider(\n    "https://api.fake-rest.refine.dev",\n  );\n\n  const customDataProvider = {\n    ...simpleRestDataProvider,\n    deleteOne: async ({ resource, id, variables }) => {\n      await new Promise((resolve) => setTimeout(resolve, 500));\n\n      return {\n        data: {},\n      };\n    },\n  };\n\n  return (\n    <Refine\n      dataProvider={customDataProvider}\n      resources={[\n        {\n          name: "posts",\n          list: MyDeleteComponent,\n        },\n      ]}\n    />\n  );\n};\n\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n')),(0,r.kt)("h3",{id:"hidetext"},(0,r.kt)("inlineCode",{parentName:"h3"},"hideText")),(0,r.kt)("p",null,"It is used to show and not show the text of the button. When ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", only the button icon is visible."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=200px",live:!0,url:"http://localhost:3000",previewHeight:"200px"},'setInitialRoutes(["/"]);\nimport { Refine } from "@pankod/refine-core";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// visible-block-start\nimport { DeleteButton } from "@pankod/refine-mantine";\n\nconst MyDeleteComponent = () => {\n  return <DeleteButton recordItemId="1" hideText />;\n};\n// visible-block-end\n\nconst App = () => {\n  const simpleRestDataProvider = dataProvider(\n    "https://api.fake-rest.refine.dev",\n  );\n\n  const customDataProvider = {\n    ...simpleRestDataProvider,\n    deleteOne: async ({ resource, id, variables }) => {\n      await new Promise((resolve) => setTimeout(resolve, 500));\n\n      return {\n        data: {},\n      };\n    },\n  };\n\n  return (\n    <Refine\n      dataProvider={customDataProvider}\n      resources={[\n        {\n          name: "posts",\n          list: MyDeleteComponent,\n        },\n      ]}\n    />\n  );\n};\n\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n')),(0,r.kt)("h3",{id:"accesscontrol"},(0,r.kt)("inlineCode",{parentName:"h3"},"accessControl")),(0,r.kt)("p",null,"This prop can be used to skip access control check with its ",(0,r.kt)("inlineCode",{parentName:"p"},"enabled")," property or to hide the button when the user does not have the permission to access the resource with ",(0,r.kt)("inlineCode",{parentName:"p"},"hideIfUnauthorized")," property. This is relevant only when an ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/accessControl-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"accessControlProvider"))," is provided to ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config"},(0,r.kt)("inlineCode",{parentName:"a"},"<Refine/>"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { DeleteButton } from "@pankod/refine-mantine";\n\nexport const MyListComponent = () => {\n  return (\n    <DeleteButton accessControl={{ enabled: true, hideIfUnauthorized: true }} />\n  );\n};\n')),(0,r.kt)("h2",{id:"how-to-override-confirm-texts"},"How to override confirm texts?"),(0,r.kt)("p",null,"You can change the text that appears when you confirm a transaction with ",(0,r.kt)("inlineCode",{parentName:"p"},"confirmTitle")," prop, as well as what ok and cancel buttons text look like with ",(0,r.kt)("inlineCode",{parentName:"p"},"confirmOkText")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"confirmCancelText")," props."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=200px",live:!0,url:"http://localhost:3000",previewHeight:"200px"},'setInitialRoutes(["/"]);\nimport { Refine } from "@pankod/refine-core";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// visible-block-start\nimport { DeleteButton } from "@pankod/refine-mantine";\n\nconst MyDeleteComponent = () => {\n  return (\n    <DeleteButton\n      //hide-start\n      recordItemId="1"\n      //hide-end\n      confirmTitle="Custom Title"\n      confirmOkText="Ok Text"\n      confirmCancelText="Delete Text"\n    />\n  );\n};\n// visible-block-end\n\nconst App = () => {\n  const simpleRestDataProvider = dataProvider(\n    "https://api.fake-rest.refine.dev",\n  );\n\n  const customDataProvider = {\n    ...simpleRestDataProvider,\n    deleteOne: async ({ resource, id, variables }) => {\n      await new Promise((resolve) => setTimeout(resolve, 500));\n\n      return {\n        data: {},\n      };\n    },\n  };\n\n  return (\n    <Refine\n      dataProvider={customDataProvider}\n      resources={[\n        {\n          name: "posts",\n          list: MyDeleteComponent,\n        },\n      ]}\n    />\n  );\n};\n\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n')),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties-1"},"Properties"),(0,r.kt)(u,{module:"@pankod/refine-mantine/DeleteButton",mdxType:"PropsTable"}))}h.isMDXComponent=!0}}]);