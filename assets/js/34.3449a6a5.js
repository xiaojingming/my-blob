(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{590:function(e,t,a){"use strict";a.r(t);var s=a(13),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h3",{attrs:{id:"lastindexof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lastindexof"}},[e._v("#")]),e._v(" LastIndexOf")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/type-challenges/type-challenges/blob/main/questions/05317-medium-lastindexof/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("type-challenge github地址"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("难度：中等")]),e._v(" "),a("h4",{attrs:{id:"题目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[e._v("#")]),e._v(" 题目描述")]),e._v(" "),a("p",[e._v("Implement the type version of Array.lastIndexOf, "),a("code",[e._v("LastIndexOf<T, U>")]),e._v(" takes an Array T, any U and returns the index of the last U in Array")]),e._v(" "),a("blockquote",[a("p",[e._v("(实现类型的Array.lastIndexOf函数)")])]),e._v(" "),a("p",[e._v("For example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("type Res1 = LastIndexOf<[1, 2, 3, 2, 1], 2> // 3\ntype Res2 = LastIndexOf<[0, 0, 0], 2> // -1\n")])])]),a("p",[e._v("这道题与之前的"),a("RouterLink",{attrs:{to:"/TypeScript/IndexOf.html"}},[e._v("indexOf")]),e._v("在逻辑上并没有太大的区别，主要的区别在于获取索引")],1),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("type LastIndexOf<T extends any[], K extends any> = T extends [...infer Rest, infer Last]\n  ? IsEqual<Last, K> extends true\n    ? Rest['length']\n    : LastIndexOf<Rest, K>\n  : -1；\n")])])]),a("p",[e._v("我们发现，其实"),a("code",[e._v("Rest[length]")]),e._v("就是当前倒叙索引，而"),a("code",[e._v("IsEqual")]),e._v("则是之前在"),a("code",[e._v("IndexOf")]),e._v("中定义过的泛型")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("type IsEqual<T, K> =\n  (<U>() => U extends T ? true : false) extends (<U>() => U extends K ? true : false)\n    ? true\n    : false;\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);