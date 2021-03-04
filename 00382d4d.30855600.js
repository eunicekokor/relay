(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1069:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),b=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=b(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(t),u=a,d=p["".concat(l,".").concat(u)]||p[u]||m[u]||i;return t?r.a.createElement(d,o(o({ref:n},s),{},{components:t})):r.a.createElement(d,o({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},75:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return b}));var a=t(3),r=t(7),i=(t(0),t(1069)),l={id:"classic-api-reference-relay-ql",title:"Relay.QL",original_id:"classic-api-reference-relay-ql"},o={unversionedId:"classic-api-reference-relay-ql",id:"version-classic/classic-api-reference-relay-ql",isDocsHomePage:!1,title:"Relay.QL",description:"Relay fragments, mutations, and queries must be specified using ES6 template literals tagged with Relay.QL. For example:",source:"@site/versioned_docs/version-classic/Classic-APIReference-QL.md",slug:"/classic-api-reference-relay-ql",permalink:"/docs/classic/classic-api-reference-relay-ql",editUrl:"https://github.com/facebook/relay/edit/master/website-v2/docs/versioned_docs/version-classic/Classic-APIReference-QL.md",version:"classic",lastUpdatedBy:"Steven Chaitoff",lastUpdatedAt:1614889553,sidebar:"version-classic/docs",previous:{title:"Relay.RootContainer",permalink:"/docs/classic/classic-api-reference-relay-root-container"},next:{title:"Relay.Mutation",permalink:"/docs/classic/classic-api-reference-relay-mutation"}},c=[{value:"Related APIs",id:"related-apis",children:[]},{value:"Fragment Composition",id:"fragment-composition",children:[{value:"Container.getFragment()",id:"containergetfragment",children:[]},{value:"Inline Fragments",id:"inline-fragments",children:[]},{value:"Conditional fields",id:"conditional-fields",children:[]},{value:"Array fields",id:"array-fields",children:[]}]}],s={toc:c};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Relay fragments, mutations, and queries must be specified using ES6 template literals tagged with ",Object(i.b)("inlineCode",{parentName:"p"},"Relay.QL"),". For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\nvar fragment = Relay.QL`\n  fragment on User {\n    name\n  }\n`;\n\n")),Object(i.b)("p",null,"To execute this code, Relay needs access to the schema - which can be too large to bundle inside the application. Instead, these ",Object(i.b)("inlineCode",{parentName:"p"},"Relay.QL")," template expressions are transpiled into JavaScript descriptions via the ",Object(i.b)("inlineCode",{parentName:"p"},"babel-plugin-relay"),". This schema information allows Relay to understand things like the types of field arguments, which fields are connections or lists, and how to efficiently refetch records from the server."),Object(i.b)("h2",{id:"related-apis"},"Related APIs"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Relay.QL")," objects are used by the following APIs:"),Object(i.b)("ul",{className:"apiIndex"},Object(i.b)("li",null,Object(i.b)("pre",null,"() => Relay.QL`fragment on ...`"),"Specify the data dependencies of a `Relay.Container` as GraphQL fragments."),Object(i.b)("li",null,Object(i.b)("pre",null,"(Component) => Relay.QL`query ...`"),"Specify the queries of a `Relay.Route`."),Object(i.b)("li",null,Object(i.b)("pre",null,"Relay.QL`mutation ","{"," fieldName ","}","`"),"Specify the mutation field in a `Relay.Mutation`."),Object(i.b)("li",null,Object(i.b)("pre",null,"var fragment = Relay.QL`fragment on ...`;"),"Reusable fragments to compose within the above use cases.")),Object(i.b)("h2",{id:"fragment-composition"},"Fragment Composition"),Object(i.b)("p",null,"Fragments can be composed in one of two ways:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Composing child component fragments in a parent fragment."),Object(i.b)("li",{parentName:"ul"},"Composing fragments defined as local variables.")),Object(i.b)("h3",{id:"containergetfragment"},"Container.getFragment()"),Object(i.b)("p",null,"Composing the fragments of child components is discussed in detail in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./classic-guides-containers"}),"Containers Guide"),", but here's a quick example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:'language-{"{"}5{"}"}'}),"\nRelay.createContainer(Foo, {\n  fragments: {\n    bar: () => Relay.QL`\n      fragment on Bar {\n        ${ChildComponent.getFragment('childFragmentName')},\n      }\n    `,\n  }\n});\n\n")),Object(i.b)("h3",{id:"inline-fragments"},"Inline Fragments"),Object(i.b)("p",null,"Fragments may also compose other fragments that are assigned to local variables:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:'language-{"{"}3-7,14,21{"}"}'}),"\n// An inline fragment - useful in small quantities, but best not to share\n// between modules.\nvar userFragment = Relay.QL`\n  fragment on User {\n    name,\n  }\n`;\nRelay.createContainer(Story, {\n  fragments: {\n    bar: () => Relay.QL`\n      fragment on Story {\n        author {\n          # Fetch the same information about the story's author ...\n          ${userFragment},\n        },\n        comments {\n          edges {\n            node {\n              author {\n                # ... and the authors of the comments.\n                ${userFragment},\n              },\n            },\n          },\n        },\n      }\n    `,\n  }\n});\n\n")),Object(i.b)("p",null,"Note that it is ",Object(i.b)("em",{parentName:"p"},"highly")," recommended that ",Object(i.b)("inlineCode",{parentName:"p"},"Relay.Container"),"s define their own fragments and avoid sharing inline ",Object(i.b)("inlineCode",{parentName:"p"},"var fragment = Relay.QL...")," values between containers or files. If you find yourself wanting to share inline fragments, it's likely a sign that it's time to refactor and introduce a new container."),Object(i.b)("h3",{id:"conditional-fields"},"Conditional fields"),Object(i.b)("p",null,"You can conditionally include or skip a field based on the value of a boolean variable."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:'language-{"{"}4,9{"}"}'}),"\nRelay.createContainer(Story, {\n  initialVariables: {\n    numCommentsToShow: 10,\n    showComments: false,\n  },\n  fragments: {\n    story: (variables) => Relay.QL`\n      fragment on Story {\n        comments(first: $numCommentsToShow) @include(if: $showComments) {\n          edges {\n            node {\n              author { name },\n              id,\n              text,\n            },\n          },\n        },\n      }\n    `,\n  }\n});\n\n")),Object(i.b)("p",null,"Wherever the inverse grammar serves you better, you can use ",Object(i.b)("inlineCode",{parentName:"p"},"@skip(if: ...)")," instead of ",Object(i.b)("inlineCode",{parentName:"p"},"@include(if: ...)"),"."),Object(i.b)("h3",{id:"array-fields"},"Array fields"),Object(i.b)("p",null,"In order to resolve a fragment into an array of objects you have to use the ",Object(i.b)("inlineCode",{parentName:"p"},"@relay(plural: true)")," directive."),Object(i.b)("p",null,"This will inform ",Object(i.b)("inlineCode",{parentName:"p"},"Relay.QL")," that this particular field is an array. This will also allow you to use a plural name for the fragment (i.e. ",Object(i.b)("inlineCode",{parentName:"p"},"bars")," instead of ",Object(i.b)("inlineCode",{parentName:"p"},"bar"),")."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:'language-{"{"}4,9{"}"}'}),"\nRelay.createContainer(Story, {\n  fragments: {\n    bars: () => Relay.QL`\n      fragment on Bar @relay(plural: true) {\n        id\n        name\n      }\n    `,\n  }\n});\n\n")),Object(i.b)("p",null,"On the Relay Container the prop ",Object(i.b)("inlineCode",{parentName:"p"},"bars")," will be an array instead of an object."))}b.isMDXComponent=!0}}]);