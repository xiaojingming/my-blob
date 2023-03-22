(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{597:function(e,s,o){"use strict";o.r(s);var r=o(13),t=Object(r.a)({},(function(){var e=this,s=e.$createElement,o=e._self._c||s;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h3",{attrs:{id:"promiseall"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#promiseall"}},[e._v("#")]),e._v(" PromiseAll")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/type-challenges/type-challenges/blob/main/questions/00020-medium-promise-all/README.zh-CN.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("type-challenge-PromiseAll github地址"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("难度：中等")]),e._v(" "),o("h4",{attrs:{id:"题目描述"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[e._v("#")]),e._v(" 题目描述")]),e._v(" "),o("p",[e._v("Type the function PromiseAll that accepts an array of PromiseLike objects, the returning value should be Promise"),o("code",[e._v("<T>")]),e._v(" where T is the resolved result array.")]),e._v(" "),o("blockquote",[o("p",[e._v("(声明"),o("code",[e._v("PromiseAll")]),e._v("函数，它接受"),o("code",[e._v("PromiseLike")]),e._v("数组，返回值应为"),o("code",[e._v("Promise<T>")]),e._v("其中"),o("code",[e._v("T")]),e._v("为解析的结果)")])]),e._v(" "),o("p",[e._v("For example:")]),e._v(" "),o("p",[e._v("const promise1 = Promise.resolve(3);\nconst promise2 = 42;\nconst promise3 = new Promise"),o("code",[e._v("<string>")]),e._v("((resolve, reject) => {\nsetTimeout(resolve, 100, 'foo');\n});")]),e._v(" "),o("p",[e._v("// expected to be "),o("code",[e._v("Promise<[number, 42, string]>")]),e._v("\nconst p = PromiseAll([promise1, promise2, promise3] as const)")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("declare function PromiseAll<T>(values: T): {\n  [K in keyof T]: Awaited<T[K]>\n}\n")])])]),o("p",[e._v("数组也是可以像数组一样通过"),o("code",[e._v("{ [K in keyof T]: T[K] }")]),e._v("进行处理的，其中"),o("code",[e._v("Awaited<T>")]),e._v("是内置的用于获取"),o("code",[e._v("promise")]),e._v("的返回值的类型。上面的"),o("code",[e._v("PromiseAll<T>")]),e._v("类型只能推断出"),o("code",[e._v("T")]),e._v("为元组类型的情况，但是测试用例中存在"),o("code",[e._v("T")]),e._v("类型为数组的情况并且需要推断出具体的结果类型。")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("PromiseAll([1, 2, Promise.resolve(3)]) // [number, number, number]\n")])])]),o("p",[e._v("使用上面的"),o("code",[e._v("PromiseAll")]),e._v("只能推断出"),o("code",[e._v("number[]")]),e._v("类型，这是因为参数"),o("code",[e._v("T")]),e._v("被推断为"),o("code",[e._v("number[]")]),e._v("，所以我们需要将参数转化为元组且参数可以传入数组。")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("declare function PromiseAll<T extends unknown[]>(values: readonly[...T]): Promise<{\n  [K in keyof T]: Awaited<T[K]>\n}>\n")])])]),o("p",[e._v("这样就可以实现啦。")])])}),[],!1,null,null,null);s.default=t.exports}}]);