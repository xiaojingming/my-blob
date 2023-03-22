(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{574:function(t,e,s){"use strict";s.r(e);var a=s(13),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"endswith"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#endswith"}},[t._v("#")]),t._v(" EndsWith")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/type-challenges/type-challenges/blob/main/questions/02693-medium-endswith/README.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("type-challenge-endsWith github地址"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("难度：中等")]),t._v(" "),s("h3",{attrs:{id:"题目描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[t._v("#")]),t._v(" 题目描述")]),t._v(" "),s("p",[t._v("Implement EndsWith<T, U> which takes two exact string types and returns whether T ends with U")]),t._v(" "),s("blockquote",[s("p",[t._v("(实现"),s("code",[t._v("EndsWith<T, U>")]),t._v("，接收两个类型都是string的参数，判断"),s("code",[t._v("T")]),t._v("是否以"),s("code",[t._v("U")]),t._v("结尾)")])]),t._v(" "),s("p",[t._v("For example:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("type a = EndsWith<'abc', 'bc'> // expected to be true\ntype b = EndsWith<'abc', 'abc'> // expected to be true\ntype c = EndsWith<'abc', 'd'> // expected to be false\n")])])]),s("p",[t._v("这道题的思路和"),s("RouterLink",{attrs:{to:"/TypeScript/StartsWith.html"}},[t._v("startsWith")]),t._v("的思路是一致的，不过在这用一种简单的实现方式。")],1),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("type EndsWith<T extends string, U extends string> = T extends `${string}${U} ? true : false;\n")])])]),s("p",[t._v("🤔确实比用递归好多了")])])}),[],!1,null,null,null);e.default=n.exports}}]);