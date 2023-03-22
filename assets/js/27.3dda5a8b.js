(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{579:function(e,t,a){"use strict";a.r(t);var r=a(13),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h3",{attrs:{id:"greaterthan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#greaterthan"}},[e._v("#")]),e._v(" GreaterThan")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/type-challenges/type-challenges/blob/main/questions/04425-medium-greater-than/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("type-challenge-GreaterThan github地址"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("难度：中等")]),e._v(" "),a("h4",{attrs:{id:"题目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[e._v("#")]),e._v(" 题目描述")]),e._v(" "),a("p",[e._v("In This Challenge, You should implement a type GreaterThan"),a("code",[e._v("<T, U>")]),e._v(" like "),a("code",[e._v("T > U")])]),e._v(" "),a("blockquote",[a("p",[e._v("(实现"),a("code",[e._v("GreaterThan类型")]),e._v("，该类型接收"),a("code",[e._v("T")]),e._v("，"),a("code",[e._v("U")]),e._v("两个参数，最后返回"),a("code",[e._v("T > U")]),e._v("的结果)")])]),e._v(" "),a("p",[e._v("For example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("GreaterThan<2, 1> //should be true\nGreaterThan<1, 1> //should be false\nGreaterThan<10, 100> //should be false\nGreaterThan<111, 11> //should be true\n")])])]),a("p",[e._v("在这道题目中，由于涉及到了计算，我们很容易想到通过数组"),a("code",[e._v("length")]),e._v("来实现。我们定义第三个参数Sum，用于进行累加，在与"),a("code",[e._v("T")]),e._v("，"),a("code",[e._v("U")]),e._v("进行比较，当与"),a("code",[e._v("T")]),e._v("相等时表示"),a("code",[e._v("T")]),e._v("的值小于或等于"),a("code",[e._v("U")]),e._v("，输出"),a("code",[e._v("false")]),e._v("，反之输出"),a("code",[e._v("true")]),e._v("。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("type GreaterThan<T extends number, U extends number, Sum extends 1[] = []> = Sum['length'] extends T\n  ? false\n  : Sum['length'] extends U\n    ? true\n    : GreaterThan<T, U, [1, ...Sum]>;\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);