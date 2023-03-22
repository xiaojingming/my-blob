(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{604:function(e,n,t){"use strict";t.r(n);var a=t(13),s=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h3",{attrs:{id:"replacekeys"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#replacekeys"}},[e._v("#")]),e._v(" ReplaceKeys")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/type-challenges/type-challenges/blob/main/questions/01130-medium-replacekeys/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("type-challenge-replaceKeys github地址"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("难度：中等")]),e._v(" "),t("h4",{attrs:{id:"题目描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[e._v("#")]),e._v(" 题目描述")]),e._v(" "),t("p",[e._v("Implement a type ReplaceKeys, that replace keys in union types, if some type has not this key, just skip replacing, A type takes three arguments.")]),e._v(" "),t("blockquote",[t("p",[e._v("(实现一个ReplaceKeys类型，该类型接收三个泛型，第一个泛型是待替换的目标联合类型，第二个泛型是替换的key，第三个泛型是替换的内容)")])]),e._v(" "),t("p",[e._v("For example:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("type NodeA = {\n  type: 'A'\n  name: string\n  flag: number\n}\n\ntype NodeB = {\n  type: 'B'\n  id: number\n  flag: number\n}\n\ntype NodeC = {\n  type: 'C'\n  name: string\n  flag: number\n}\n\ntype Nodes = NodeA | NodeB | NodeC\ntype ReplacedNodes = ReplaceKeys<Nodes, 'name' | 'flag', {name: number, flag: string}>\n// type ReplacedNode = { type: 'A', name: number, flag: string }\n// | { type: 'B', id: number, flag: string }\n// | { type: 'C', name: number, flag: string }\n\ntype ReplacedNotExistKeys = ReplaceKeys<Nodes, 'name', {aa: number}>\n// { type: 'A', flag: number, name: never }\n// | { type: 'B', id: number flag: string }\n// | { type: 'C', flag: number, name: never }\n")])])]),t("p",[e._v("🤔可能这道题目的难点在于题目的意思不太好理解，整体还是比较简单的：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("type ReplaceKeys<U, K, V> = {\n  [Key in keyof U]: Key extends K ? Key extends keyof V ? V[Key] : never : U[Key];\n};\n")])])]),t("p",[e._v("如果"),t("code",[e._v("key")]),e._v("在"),t("code",[e._v("K")]),e._v("中存在，当"),t("code",[e._v("key")]),e._v("在"),t("code",[e._v("V")]),e._v("中存在时，返回类型"),t("code",[e._v("V[Key]")]),e._v("，否则返回"),t("code",[e._v("never")]),e._v("，如果"),t("code",[e._v("key")]),e._v("不存在于K中，则直接返回原本的类型。")])])}),[],!1,null,null,null);n.default=s.exports}}]);