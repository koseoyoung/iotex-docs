(window.webpackJsonp = window.webpackJsonp || []).push([
  [13],
  {
    560: function(t, s, a) {
      "use strict";
      a.r(s);
      var n = a(69),
        e = Object(n.a)(
          {},
          function() {
            var t = this,
              s = t.$createElement,
              a = t._self._c || s;
            return a(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": t.$parent.slotKey } },
              [
                a("h2", { attrs: { id: "overview" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#overview" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Overview")
                ]),
                t._v(" "),
                a("p", [
                  a("code", [t._v("iotex-antenna")]),
                  t._v(
                    " is our SDK allowing you to interact with a local or remote IoTeX blockchain node, using a gRPC connection."
                  )
                ]),
                t._v(" "),
                a("table", [
                  a("thead", [
                    a("tr", [
                      a("th", [t._v("Features")]),
                      t._v(" "),
                      a("th", [
                        a(
                          "a",
                          {
                            attrs: {
                              href:
                                "https://github.com/iotexproject/iotex-antenna",
                              target: "_blank",
                              rel: "noopener noreferrer"
                            }
                          },
                          [t._v("antenna"), a("OutboundLink")],
                          1
                        )
                      ]),
                      t._v(" "),
                      a("th", [
                        a(
                          "a",
                          {
                            attrs: {
                              href:
                                "https://github.com/iotexproject/iotex-antenna-java",
                              target: "_blank",
                              rel: "noopener noreferrer"
                            }
                          },
                          [t._v("antenna-java"), a("OutboundLink")],
                          1
                        )
                      ]),
                      t._v(" "),
                      a("th", [
                        a(
                          "a",
                          {
                            attrs: {
                              href:
                                "https://github.com/iotexproject/iotex-antenna-go",
                              target: "_blank",
                              rel: "noopener noreferrer"
                            }
                          },
                          [t._v("antenna-go"), a("OutboundLink")],
                          1
                        )
                      ]),
                      t._v(" "),
                      a("th", [
                        a(
                          "a",
                          {
                            attrs: {
                              href:
                                "https://github.com/iotexproject/iotex-antenna-swift",
                              target: "_blank",
                              rel: "noopener noreferrer"
                            }
                          },
                          [t._v("antenna-swift"), a("OutboundLink")],
                          1
                        )
                      ])
                    ])
                  ]),
                  t._v(" "),
                  a("tbody", [
                    a("tr", [
                      a("td", [t._v("crypto")]),
                      t._v(" "),
                      a("td", [t._v("Yes")]),
                      t._v(" "),
                      a("td", [t._v("Yes")]),
                      t._v(" "),
                      a("td", [t._v("Yes")]),
                      t._v(" "),
                      a("td", [t._v("Yes")])
                    ]),
                    t._v(" "),
                    a("tr", [
                      a("td", [t._v("rpc-method")]),
                      t._v(" "),
                      a("td", [t._v("Yes")]),
                      t._v(" "),
                      a("td", [t._v("Yes")]),
                      t._v(" "),
                      a("td", [t._v("Yes")]),
                      t._v(" "),
                      a("td", [t._v("Yes")])
                    ]),
                    t._v(" "),
                    a("tr", [
                      a("td", [t._v("account")]),
                      t._v(" "),
                      a("td", [t._v("Yes")]),
                      t._v(" "),
                      a("td", [t._v("Yes")]),
                      t._v(" "),
                      a("td", [t._v("Yes")]),
                      t._v(" "),
                      a("td", [t._v("Yes")])
                    ]),
                    t._v(" "),
                    a("tr", [
                      a("td", [t._v("action")]),
                      t._v(" "),
                      a("td", [t._v("Yes")]),
                      t._v(" "),
                      a("td", [t._v("Yes")]),
                      t._v(" "),
                      a("td", [t._v("Yes")]),
                      t._v(" "),
                      a("td", [t._v("Yes")])
                    ]),
                    t._v(" "),
                    a("tr", [
                      a("td", [t._v("contract")]),
                      t._v(" "),
                      a("td", [t._v("Yes")]),
                      t._v(" "),
                      a("td", [t._v("Yes")]),
                      t._v(" "),
                      a("td", [t._v("Yes")]),
                      t._v(" "),
                      a("td", [t._v("Yes")])
                    ]),
                    t._v(" "),
                    a("tr", [
                      a("td", [t._v("token support")]),
                      t._v(" "),
                      a("td", [t._v("Yes")]),
                      t._v(" "),
                      a("td", [t._v("Yes")]),
                      t._v(" "),
                      a("td", [t._v("Yes")]),
                      t._v(" "),
                      a("td", [t._v("Yes")])
                    ])
                  ])
                ]),
                t._v(" "),
                a("h3", { attrs: { id: "installation" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#installation" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Installation")
                ]),
                t._v(" "),
                a("h4", { attrs: { id: "js-project" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#js-project" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" JS Project")
                ]),
                t._v(" "),
                a("p", [
                  t._v("In your JS project root, use "),
                  a("code", [t._v("npm install")]),
                  t._v(" or "),
                  a("code", [t._v("yarn add")]),
                  t._v(".")
                ]),
                t._v(" "),
                a("div", { staticClass: "language-js extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                    a("code", [
                      t._v("npm install iotex"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("-")]
                      ),
                      t._v("antenna\n")
                    ])
                  ])
                ]),
                a("p", [t._v("or add the following line to your html.")]),
                t._v(" "),
                a("div", { staticClass: "language-html extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-html" } }, [
                    a("code", [
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("script")
                        ]),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("src")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            ),
                            t._v(
                              "https://cdn.jsdelivr.net/npm/iotex-antenna@0.29.1/lib/iotex-antenna.browser.min.js"
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            )
                          ]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      a("span", { pre: !0, attrs: { class: "token script" } }),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("script")
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n")
                    ])
                  ])
                ]),
                a("h4", { attrs: { id: "golang-project" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#golang-project" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Golang Project")
                ]),
                t._v(" "),
                a("p", [
                  t._v("In your Golang project root, use "),
                  a("code", [t._v("go dep")]),
                  t._v(" or "),
                  a("code", [t._v("go mod")]),
                  t._v(".")
                ]),
                t._v(" "),
                a("div", { staticClass: "language-golang extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    a("code", [
                      t._v(
                        "go get -u github.com/iotexproject/iotex-antenna-go\n"
                      )
                    ])
                  ])
                ]),
                a("h3", { attrs: { id: "quick-start" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#quick-start" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Quick Start")
                ]),
                t._v(" "),
                a("p", [t._v("Using JS/Golang SDK")]),
                t._v(" "),
                a("ol", [
                  a(
                    "li",
                    [
                      a(
                        "RouterLink",
                        {
                          attrs: {
                            to: "/docs/libraries-and-tools.html#account"
                          }
                        },
                        [
                          t._v(
                            "generate an account / recover an account from the private key"
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  t._v(" "),
                  a(
                    "li",
                    [
                      a(
                        "RouterLink",
                        {
                          attrs: {
                            to: "/docs/libraries-and-tools.html#decentralized"
                          }
                        },
                        [t._v("generate a decentralized identity (DID)")]
                      )
                    ],
                    1
                  ),
                  t._v(" "),
                  a(
                    "li",
                    [
                      a(
                        "RouterLink",
                        {
                          attrs: {
                            to: "/docs/libraries-and-tools.html#transfer"
                          }
                        },
                        [t._v("transfer tokens")]
                      )
                    ],
                    1
                  ),
                  t._v(" "),
                  a(
                    "li",
                    [
                      a(
                        "RouterLink",
                        {
                          attrs: {
                            to: "/docs/libraries-and-tools.html#smart-contract"
                          }
                        },
                        [t._v("run smart contracts")]
                      )
                    ],
                    1
                  ),
                  t._v(" "),
                  a(
                    "li",
                    [
                      a(
                        "RouterLink",
                        {
                          attrs: {
                            to: "/docs/libraries-and-tools.html#rpc-methods"
                          }
                        },
                        [t._v("make RPC calls")]
                      )
                    ],
                    1
                  ),
                  t._v(" "),
                  a(
                    "li",
                    [
                      a("RouterLink", { attrs: { to: "/#api-2-0" } }, [
                        t._v("check the complete API references")
                      ])
                    ],
                    1
                  )
                ]),
                t._v(" "),
                a("p", [t._v("Using GraphQL")]),
                t._v(" "),
                a("ol", [
                  a("li", [
                    a(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://iotexscan.io/doc/api-gateway/query.doc.html",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [t._v("Documentation"), a("OutboundLink")],
                      1
                    )
                  ]),
                  t._v(" "),
                  a("li", [
                    a(
                      "a",
                      {
                        attrs: {
                          href: "https://iotexscan.io/api-gateway/",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [t._v("GraphQL Playground"), a("OutboundLink")],
                      1
                    )
                  ])
                ]),
                t._v(" "),
                a("p", [t._v("Reference Doc")]),
                t._v(" "),
                a("p", [
                  a(
                    "a",
                    {
                      attrs: {
                        href: "https://iotexproject.github.io/iotex-antenna/",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [t._v("iotex-antenna"), a("OutboundLink")],
                    1
                  )
                ]),
                t._v(" "),
                a("p", [
                  t._v("Having questions? Ask in "),
                  a(
                    "a",
                    {
                      attrs: {
                        href:
                          "https://discord.com/channels/534888542648664074/549879942775701505",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [t._v("our Discord channel"), a("OutboundLink")],
                    1
                  ),
                  t._v(".")
                ]),
                t._v(" "),
                a("h2", { attrs: { id: "account" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#account" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Account")
                ]),
                t._v(" "),
                a("p", [
                  t._v("The "),
                  a("code", [t._v("antenna.iotx.accounts")]),
                  t._v(
                    " contains functions to generate Iotex accounts and sign transactions and data."
                  )
                ]),
                t._v(" "),
                a(
                  "tabs",
                  [
                    a("tab", { attrs: { name: "JS" } }, [
                      a("div", { staticClass: "language-js extra-class" }, [
                        a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                          a("code", [
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("import")]
                            ),
                            t._v(" Antenna "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("from")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"iotex-antenna"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n\n"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("async")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=>")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n  "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("const")]
                            ),
                            t._v(" antenna "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("new")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token class-name" } },
                              [t._v("Antenna")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"http://api.testnet.iotex.one:80"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n\n  "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token comment" } },
                              [
                                t._v(
                                  "// create a new wallet which contains a public key, a private key, and an address."
                                )
                              ]
                            ),
                            t._v("\n  "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("const")]
                            ),
                            t._v(" wallet "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" antenna"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("iotx"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("accounts"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("create")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n\n  "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token comment" } },
                              [
                                t._v(
                                  "// recover the whole wallet from a single private key"
                                )
                              ]
                            ),
                            t._v("\n  "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("const")]
                            ),
                            t._v(" unlockedWallet "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" antenna"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("iotx"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("accounts"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("privateKeyToAccount")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            t._v("\n    "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  '"69805ee813eadffa8fae53d0e6063e5fbf6a6e0fb9e90f6eaad7bc67f3d6c4bd"'
                                )
                              ]
                            ),
                            t._v("\n  "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n\n  "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token comment" } },
                              [
                                t._v(
                                  "// get the balance, nonce, number of actions, pendingNonce of the account"
                                )
                              ]
                            ),
                            t._v("\n  "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("const")]
                            ),
                            t._v(" accountDetails "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("await")]
                            ),
                            t._v(" antenna"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("iotx"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("getAccount")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n    address"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" wallet"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("address\n  "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n")
                          ])
                        ])
                      ])
                    ]),
                    t._v(" "),
                    a("tab", { attrs: { name: "Golang" } }, [
                      a("div", { staticClass: "language-go extra-class" }, [
                        a("pre", { pre: !0, attrs: { class: "language-go" } }, [
                          a("code", [
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("package")]
                            ),
                            t._v(" main\n\n"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("import")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"fmt"')]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"log"')]
                            ),
                            t._v("\n\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  '"github.com/iotexproject/iotex-antenna-go/v2/account"'
                                )
                              ]
                            ),
                            t._v("\n\n"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\n"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("func")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("main")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token comment" } },
                              [
                                t._v(
                                  "// create a new wallet which contains a public key, a private key, and an address."
                                )
                              ]
                            ),
                            t._v("\n\twallet"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" err "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":=")]
                            ),
                            t._v(" account"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("NewAccount")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("if")]
                            ),
                            t._v(" err "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("!=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token boolean" } },
                              [t._v("nil")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n\t\tlog"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("Fatal")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            t._v("err"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            t._v("\n\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token comment" } },
                              [
                                t._v(
                                  "// recover the whole wallet from a single private key"
                                )
                              ]
                            ),
                            t._v("\n\tacc"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" err "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":=")]
                            ),
                            t._v(" account"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("HexStringToAccount")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  '"69805ee813eadffa8fae53d0e6063e5fbf6a6e0fb9e90f6eaad7bc67f3d6c4bd"'
                                )
                              ]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("if")]
                            ),
                            t._v(" err "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("!=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token boolean" } },
                              [t._v("nil")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n\t\tlog"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("Fatalf")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"create account error: %v"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" err"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            t._v("\n\tfmt"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("Println")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            t._v("acc"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("Address"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            t._v("\n")
                          ])
                        ])
                      ])
                    ])
                  ],
                  1
                ),
                t._v(" "),
                a("p", [
                  t._v("For more APIs, please visit "),
                  a(
                    "a",
                    {
                      attrs: {
                        href:
                          "https://iotexproject.github.io/iotex-antenna/classes/_iotx_.iotx.html#getaccount",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [t._v("iotex-antenna js reference"), a("OutboundLink")],
                    1
                  ),
                  t._v(".")
                ]),
                t._v(" "),
                a("h2", { attrs: { id: "decentralized-identity-did" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#decentralized-identity-did" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Decentralized Identity (DID)")
                ]),
                t._v(" "),
                a("p", [
                  t._v(
                    "Decentralized Identity (DID) is essentially an ID that is"
                  )
                ]),
                t._v(" "),
                a("ol", [
                  a("li", [t._v("globally unique")]),
                  t._v(" "),
                  a("li", [t._v("resolve-able with high availability, and")]),
                  t._v(" "),
                  a("li", [t._v("cryptographically verifiable.")])
                ]),
                t._v(" "),
                a("p", [
                  t._v("Given an IoTeX address "),
                  a("code", [
                    t._v("io1tpphshf0npzawfug7g4dhrzwkzepfkwgq5prm6")
                  ]),
                  t._v(", we can derive its DID as "),
                  a("code", [
                    t._v("did:io:io1tpphshf0npzawfug7g4dhrzwkzepfkwgq5prm6")
                  ]),
                  t._v(
                    ". And then you can create a DID JWT as the following example:"
                  )
                ]),
                t._v(" "),
                a("div", { staticClass: "language-js extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                    a("code", [
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("import")]
                      ),
                      t._v(" Antenna "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("from")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"iotex-antenna"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("import")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v(" sign"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" verify "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("from")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"iotex-antenna/lib/jwt/jwt"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("async")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=>")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("const")]
                      ),
                      t._v(" antenna "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("new")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token class-name" } },
                        [t._v("Antenna")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"http://api.testnet.iotex.one:80"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [
                          t._v(
                            "// recover the whole wallet from a single private key"
                          )
                        ]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("const")]
                      ),
                      t._v(" unlockedWallet "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=")]
                      ),
                      t._v(" antenna"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      t._v("iotx"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      t._v("accounts"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("privateKeyToAccount")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      t._v("\n    "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v(
                          '"69805ee813eadffa8fae53d0e6063e5fbf6a6e0fb9e90f6eaad7bc67f3d6c4bd"'
                        )
                      ]),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("const")]
                      ),
                      t._v(" payload "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n    yourOwnPayload"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"yourOwnPayload"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n    iss"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" unlockedWallet"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      t._v("publicKey"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n    sub"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token template-string" } },
                        [
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token template-punctuation string"
                              }
                            },
                            [t._v("`")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v("did:io:")]
                          ),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: { class: "token interpolation" }
                            },
                            [
                              a(
                                "span",
                                {
                                  pre: !0,
                                  attrs: {
                                    class:
                                      "token interpolation-punctuation punctuation"
                                  }
                                },
                                [t._v("${")]
                              ),
                              t._v("unlockedWallet"),
                              a(
                                "span",
                                {
                                  pre: !0,
                                  attrs: { class: "token punctuation" }
                                },
                                [t._v(".")]
                              ),
                              t._v("address"),
                              a(
                                "span",
                                {
                                  pre: !0,
                                  attrs: {
                                    class:
                                      "token interpolation-punctuation punctuation"
                                  }
                                },
                                [t._v("}")]
                              )
                            ]
                          ),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token template-punctuation string"
                              }
                            },
                            [t._v("`")]
                          )
                        ]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("const")]
                      ),
                      t._v(" signed "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("await")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("sign")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      t._v("payload"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" unlockedWallet"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      t._v("privateKey"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [
                          t._v(
                            "// eyJhbGciOiJFSzI1NksiLCJ0eXAiOiJKV1QifQ.eyJ5b3VyT3duUGF5bG9hZCI6InlvdXJPd25QYXlsb2FkIiwiaXNzIjoiMDQ0MjI0MDkwYjhhYWU0NWI2MzdjOTA1NjI5ZTRjMzUyNjBhMTgwNDZkODc3MDlmNDIzMzBhNzlhYzBiYWFmMzc4NWU2NjkxNWQyZjRmZjdiMzgwYTVkNDA5NGYyZWFhM2YyYjc4MDE2YjI3OTIwOWRhYmZhY2Q3NGYxMDI2Y2QwMiIsInN1YiI6ImRpZDppbzppbzF0cHBoc2hmMG5wemF3ZnVnN2c0ZGhyendremVwZmt3Z3E1cHJtNiJ9.FK3R09_C99kvTPb-f56cvXGjkl8wd8auHBJJ2iqljAopuZhk8cg2_Wji8Gi30Q19jonMoQTYpMVREFmxw3d_DQA"
                          )
                        ]
                      ),
                      t._v("\n\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("const")]
                      ),
                      t._v(" actualPayload "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("await")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("verify")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      t._v("signed"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [
                          t._v(
                            '// {yourOwnPayload: "yourOwnPayload", iss: "044224090b8aae45b637c905629e4c35260a18046d87709f42…380a5d4094f2eaa3f2b78016b279209dabfacd74f1026cd02", sub: "did:io:io1tpphshf0npzawfug7g4dhrzwkzepfkwgq5prm6"}'
                          )
                        ]
                      ),
                      t._v("\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n")
                    ])
                  ])
                ]),
                a("p", [t._v("The self-sovereign JWT can be decoded as")]),
                t._v(" "),
                a("div", { staticClass: "language-json extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-json" } }, [
                    a("code", [
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"alg"')]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"EK256K"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"typ"')]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"JWT"')
                      ]),
                      t._v("\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v("\n.\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"yourOwnPayload"')]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"yourOwnPayload"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"iss"')]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v(
                          '"044224090b8aae45b637c905629e4c35260a18046d87709f42330a79ac0baaf3785e66915d2f4ff7b380a5d4094f2eaa3f2b78016b279209dabfacd74f1026cd02"'
                        )
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"sub"')]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v(
                          '"did:io:io1tpphshf0npzawfug7g4dhrzwkzepfkwgq5prm6"'
                        )
                      ]),
                      t._v("\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v("\n.signature\n")
                    ])
                  ])
                ]),
                a("p", [
                  t._v("Please see more detailed specs in "),
                  a(
                    "a",
                    {
                      attrs: {
                        href:
                          "https://github.com/iotexproject/iips/blob/master/iip-7.md",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [t._v("IIP-7"), a("OutboundLink")],
                    1
                  ),
                  t._v(".")
                ]),
                t._v(" "),
                a("h2", { attrs: { id: "transfer" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#transfer" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Transfer")
                ]),
                t._v(" "),
                a("p", [
                  a("code", [t._v("antenna.iotx.accounts")]),
                  t._v(
                    " create, sign, and send a transaction of transfer to IoTeX blockchain network."
                  )
                ]),
                t._v(" "),
                a(
                  "tabs",
                  [
                    a("tab", { attrs: { name: "JS" } }, [
                      a("div", { staticClass: "language-js extra-class" }, [
                        a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                          a("code", [
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("import")]
                            ),
                            t._v(" Antenna "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("from")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"iotex-antenna"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("import")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v(" toRau "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("from")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"iotex-antenna/lib/account/utils"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n\n"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("async")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=>")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n  "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("const")]
                            ),
                            t._v(" antenna "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("new")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token class-name" } },
                              [t._v("Antenna")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"http://api.testnet.iotex.one:80"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n  "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("const")]
                            ),
                            t._v(" unlockedWallet "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("await")]
                            ),
                            t._v(" antenna"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("iotx"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("accounts"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("privateKeyToAccount")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            t._v("\n    "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  '"73c7b4a62bf165dccf8ebdea8278db811efd5b8638e2ed9683d2d94889450426"'
                                )
                              ]
                            ),
                            t._v("\n  "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n  "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("const")]
                            ),
                            t._v(" newWallet "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" antenna"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("iotx"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("accounts"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("create")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"any entropy"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n\n  "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("const")]
                            ),
                            t._v(" actionHash "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("await")]
                            ),
                            t._v(" antenna"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("iotx"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("sendTransfer")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n    "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("from")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" unlockedWallet"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("address"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n    to"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" newWallet"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("address"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n    value"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("toRau")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"1"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"iotx"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n    gasLimit"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"100000"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n    gasPrice"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("toRau")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"1"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"Qev"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n  "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n")
                          ])
                        ])
                      ])
                    ]),
                    t._v(" "),
                    a("tab", { attrs: { name: "Golang" } }, [
                      a("div", { staticClass: "language-go extra-class" }, [
                        a("pre", { pre: !0, attrs: { class: "language-go" } }, [
                          a("code", [
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("package")]
                            ),
                            t._v(" main\n\n"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("import")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"context"')]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"fmt"')]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"log"')]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"math/big"')]
                            ),
                            t._v("\n\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  '"github.com/iotexproject/iotex-antenna-go/v2/account"'
                                )
                              ]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  '"github.com/iotexproject/iotex-antenna-go/v2/iotex"'
                                )
                              ]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  '"github.com/iotexproject/iotex-proto/golang/iotexapi"'
                                )
                              ]
                            ),
                            t._v("\n"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\n"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("func")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("main")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n\tconn"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" err "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":=")]
                            ),
                            t._v(" iotex"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("NewDefaultGRPCConn")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"api.testnet.iotex.one:80"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("if")]
                            ),
                            t._v(" err "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("!=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token boolean" } },
                              [t._v("nil")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n\t\tlog"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("Fatalf")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"connection error : %v"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" err"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("defer")]
                            ),
                            t._v(" conn"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("Close")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\n\n\tacc"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" err "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":=")]
                            ),
                            t._v(" account"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("HexStringToAccount")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  '"9cdf22c5caa8a4d99eb674da27756b438c05c6b1e8995f4a0586745e2071b115"'
                                )
                              ]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("if")]
                            ),
                            t._v(" err "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("!=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token boolean" } },
                              [t._v("nil")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n\t\tlog"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("Fatalf")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  '"create account from private key error : %v"'
                                )
                              ]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" err"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            t._v("\n\tc "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":=")]
                            ),
                            t._v(" iotex"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("NewAuthedClient")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            t._v("iotexapi"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("NewAPIServiceClient")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            t._v("conn"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" acc"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\n\tto"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" err "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":=")]
                            ),
                            t._v(" account"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("NewAccount")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("if")]
                            ),
                            t._v(" err "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("!=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token boolean" } },
                              [t._v("nil")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n\t\tlog"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("Fatalf")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"create new account error : %v"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" err"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            t._v("\n\n\tv "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":=")]
                            ),
                            t._v(" big"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("NewInt")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("1000000000000000000")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\thash"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" err "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":=")]
                            ),
                            t._v(" c"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("Transfer")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            t._v("to"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("Address")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" v"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("SetGasPrice")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            t._v("big"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("NewInt")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("1")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("SetGasLimit")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("1000000")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("Call")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            t._v("context"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("Background")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("if")]
                            ),
                            t._v(" err "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("!=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token boolean" } },
                              [t._v("nil")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n\t\tlog"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("Fatalf")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"transfer error %v"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" err"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            t._v("\n\tfmt"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("Println")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            t._v("hash"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            t._v("\n\n\n")
                          ])
                        ])
                      ])
                    ])
                  ],
                  1
                ),
                t._v(" "),
                a("p", [
                  t._v(
                    "To see the result of the transfer action, you can either go to "
                  ),
                  a("code", [t._v("https://iotexscan.io/action/actionHash")]),
                  t._v(" or query like")
                ]),
                t._v(" "),
                a(
                  "tabs",
                  [
                    a("tab", { attrs: { name: "JS" } }, [
                      a("div", { staticClass: "language-js extra-class" }, [
                        a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                          a("code", [
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("const")]
                            ),
                            t._v(" action "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("await")]
                            ),
                            t._v(" antenna"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("iotx"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("getActions")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n  byHash"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n    actionHash"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v("\n      "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  '"91524e81da32c2ad75af76c673b2e01920e69a95737a4a5438e6d0da6b910616"'
                                )
                              ]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n    checkingPending"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token boolean" } },
                              [t._v("true")]
                            ),
                            t._v("\n  "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            t._v("\n"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n")
                          ])
                        ])
                      ])
                    ]),
                    t._v(" "),
                    a("tab", { attrs: { name: "Golang" } }, [
                      a("div", { staticClass: "language-go extra-class" }, [
                        a("pre", { pre: !0, attrs: { class: "language-go" } }, [
                          a("code", [
                            t._v("action"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" err "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":=")]
                            ),
                            t._v(" wallet"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("Iotx"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("GetActions")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("&")]
                            ),
                            t._v("iotexapi"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("GetActionsRequest"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n  Lookup"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("&")]
                            ),
                            t._v("iotexapi"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("GetActionsRequest_ByHash"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n    ByHash"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("&")]
                            ),
                            t._v("iotexapi"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("GetActionByHashRequest"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n      ActionHash"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(":")]
                            ),
                            t._v("   "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  '"91524e81da32c2ad75af76c673b2e01920e69a95737a4a5438e6d0da6b910616"'
                                )
                              ]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n      CheckPending"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token boolean" } },
                              [t._v("true")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n    "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n  "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n")
                          ])
                        ])
                      ])
                    ])
                  ],
                  1
                ),
                t._v(" "),
                a("h2", { attrs: { id: "smart-contract" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#smart-contract" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Smart Contract")
                ]),
                t._v(" "),
                a("p", [
                  t._v("The "),
                  a("code", [t._v("iotx.Contract")]),
                  t._v(
                    " class makes it easy to interact with smart contracts on the IoTeX blockchain. When you create a new contract object, you give it the JSON interface of the respective smart contract, and it will auto converts all calls into low-level ABI calls over RPC for you."
                  )
                ]),
                t._v(" "),
                a("p", [
                  t._v(
                    "This allows you to interact with smart contracts as if they were JavaScript objects."
                  )
                ]),
                t._v(" "),
                a("h3", { attrs: { id: "compiling-solidity" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#compiling-solidity" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Compiling Solidity")
                ]),
                t._v(" "),
                a("p", [
                  a("code", [t._v("iotex-antenna")]),
                  t._v(
                    " does not compile solidity. However, you can use the following ways to get ABI and bytecode."
                  )
                ]),
                t._v(" "),
                a("p", [
                  t._v(
                    "option 1: use https://iotexscan.io/wallet/smart-contract/deploy"
                  )
                ]),
                t._v(" "),
                a("p", [
                  t._v("option 2: in Node.js, use "),
                  a(
                    "a",
                    {
                      attrs: {
                        href: "https://www.npmjs.com/package/solc",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [a("code", [t._v("solc@0.4.25")]), a("OutboundLink")],
                    1
                  )
                ]),
                t._v(" "),
                a("div", { staticClass: "language-js extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                    a("code", [
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("import")]
                      ),
                      t._v(" solc "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("from")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"solc"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("const")]
                      ),
                      t._v(" solidityFileString "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token template-string" } },
                        [
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token template-punctuation string"
                              }
                            },
                            [t._v("`")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [
                              t._v(
                                "\npragma solidity ^0.4.16;\n\ncontract SimpleStorage {\n   uint storedData;\n\n   function set(uint x) public {\n       storedData = x;\n   }\n\n   function get() public view returns (uint) {\n       return storedData;\n   }\n}\n"
                              )
                            ]
                          ),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token template-punctuation string"
                              }
                            },
                            [t._v("`")]
                          )
                        ]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("const")]
                      ),
                      t._v(" contractName "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('":SimpleStorage"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("const")]
                      ),
                      t._v(" output "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=")]
                      ),
                      t._v(" solc"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("compile")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      t._v("solidityFileString"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("1")
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("const")]
                      ),
                      t._v(" abi "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token constant" } },
                        [t._v("JSON")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("parse")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      t._v("output"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      t._v("contracts"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("[")]
                      ),
                      t._v("contractName"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("]")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      t._v("interface"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("const")]
                      ),
                      t._v(" bytecode "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=")]
                      ),
                      t._v(" output"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      t._v("contracts"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("[")]
                      ),
                      t._v("contractName"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("]")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      t._v("bytecode"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n")
                    ])
                  ])
                ]),
                a("ol", { attrs: { start: "3" } }, [
                  a("li", [
                    t._v("option 3: in browser, use "),
                    a(
                      "a",
                      {
                        attrs: {
                          href: "https://www.npmjs.com/package/browser-solc",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [t._v("browser-solc"), a("OutboundLink")],
                      1
                    ),
                    t._v(". "),
                    a(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://github.com/iotexproject/iotex-explorer/blob/master/src/shared/wallet/contract/deploy.tsx#L114",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [
                        t._v("Here is an example from iotex-explorer"),
                        a("OutboundLink")
                      ],
                      1
                    ),
                    t._v(".")
                  ])
                ]),
                t._v(" "),
                a("h3", { attrs: { id: "deploying-contract" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#deploying-contract" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Deploying Contract")
                ]),
                t._v(" "),
                a("p", [
                  t._v(
                    "Once you get the ABI and bytecode from the step above, then you can deploy it by sending the execution to the IoTeX blockchain network."
                  )
                ]),
                t._v(" "),
                a(
                  "tabs",
                  [
                    a("tab", { attrs: { name: "JS" } }, [
                      a("div", { staticClass: "language-js extra-class" }, [
                        a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                          a("code", [
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("import")]
                            ),
                            t._v(" Antenna "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("from")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"iotex-antenna"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("import")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v(" toRau "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("from")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"iotex-antenna/lib/account/utils"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n\n"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("async")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=>")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n  "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("const")]
                            ),
                            t._v(" antenna "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("new")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token class-name" } },
                              [t._v("Antenna")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"http://api.testnet.iotex.one:80"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n\n  "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("const")]
                            ),
                            t._v(" bytecode "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v("\n    "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  '"608060405234801561001057600080fd5b5060df8061001f6000396000f3006080604052600436106049576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806360fe47b114604e5780636d4ce63c146078575b600080fd5b348015605957600080fd5b5060766004803603810190808035906020019092919050505060a0565b005b348015608357600080fd5b50608a60aa565b6040518082815260200191505060405180910390f35b8060008190555050565b600080549050905600a165627a7a7230582043be766a6a271867521090c3e12130ea8891a8f59d4833bc205a3e2e2c70b4730029"'
                                )
                              ]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n\n  "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("const")]
                            ),
                            t._v(" abi "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token template-string" }
                              },
                              [
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token template-punctuation string"
                                    }
                                  },
                                  [t._v("`")]
                                ),
                                a(
                                  "span",
                                  { pre: !0, attrs: { class: "token string" } },
                                  [
                                    t._v(
                                      '[\n    {\n      constant: false,\n      inputs: [{ name: "x", type: "uint256" }],\n      name: "set",\n      outputs: [],\n      payable: false,\n      stateMutability: "nonpayable",\n      type: "function"\n    },\n    {\n      constant: true,\n      inputs: [],\n      name: "get",\n      outputs: [{ name: "", type: "uint256" }],\n      payable: false,\n      stateMutability: "view",\n      type: "function"\n    },\n    {\n      inputs: [{ name: "_x", type: "uint256" }],\n      payable: false,\n      stateMutability: "nonpayable",\n      type: "constructor"\n    }\n  ]'
                                    )
                                  ]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token template-punctuation string"
                                    }
                                  },
                                  [t._v("`")]
                                )
                              ]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n\n  "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("const")]
                            ),
                            t._v(" creator "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" antenna"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("iotx"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("accounts"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("privateKeyToAccount")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            t._v("\n    "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  '"73c7b4a62bf165dccf8ebdea8278db811efd5b8638e2ed9683d2d94889450426"'
                                )
                              ]
                            ),
                            t._v("\n  "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n\n  "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("const")]
                            ),
                            t._v(" actionHash "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("await")]
                            ),
                            t._v(" antenna"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("iotx"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("deployContract")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n    "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("from")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" creator"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("address"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n    amount"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"0"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n    abi"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" abi"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n    data"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" Buffer"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("from")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            t._v("bytecode"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"hex"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n    gasPrice"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("toRau")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"1"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"Qev"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n    gasLimit"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"100000"')]
                            ),
                            t._v("\n  "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n")
                          ])
                        ])
                      ])
                    ]),
                    t._v(" "),
                    a("tab", { attrs: { name: "Golang" } }, [
                      a("div", { staticClass: "language-go extra-class" }, [
                        a("pre", { pre: !0, attrs: { class: "language-go" } }, [
                          a("code", [
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("package")]
                            ),
                            t._v(" main\n\n"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("import")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"context"')]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"encoding/hex"')]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"fmt"')]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"log"')]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"math/big"')]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"strings"')]
                            ),
                            t._v("\n\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  '"github.com/ethereum/go-ethereum/accounts/abi"'
                                )
                              ]
                            ),
                            t._v("\n\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  '"github.com/iotexproject/iotex-antenna-go/account"'
                                )
                              ]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  '"github.com/iotexproject/iotex-antenna-go/iotex"'
                                )
                              ]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  '"github.com/iotexproject/iotex-proto/golang/iotexapi"'
                                )
                              ]
                            ),
                            t._v("\n\n"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\n"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("func")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("main")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n\tconn"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" err "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":=")]
                            ),
                            t._v(" iotex"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("NewDefaultGRPCConn")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"api.testnet.iotex.one:80"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("if")]
                            ),
                            t._v(" err "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("!=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token boolean" } },
                              [t._v("nil")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n\t\tlog"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("Fatalf")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"connection error : %v"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" err"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("defer")]
                            ),
                            t._v(" conn"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("Close")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\n\tcreator"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token boolean" } },
                              [t._v("_")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":=")]
                            ),
                            t._v(" account"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("HexStringToAccount")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  '"73c7b4a62bf165dccf8ebdea8278db811efd5b8638e2ed9683d2d94889450426"'
                                )
                              ]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\tc "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":=")]
                            ),
                            t._v(" iotex"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("NewAuthedClient")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            t._v("iotexapi"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("NewAPIServiceClient")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            t._v("conn"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" creator"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\n\tabi"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" err "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":=")]
                            ),
                            t._v(" abi"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("JSON")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            t._v("strings"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("NewReader")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  '`[{"constant":false,"inputs":[{"name":"x","type":"uint256"}],"name":"set","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"get","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_x","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]`'
                                )
                              ]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("if")]
                            ),
                            t._v(" err "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("!=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token boolean" } },
                              [t._v("nil")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n\t\tlog"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("Fatalf")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"JSON error : %v"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" err"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            t._v("\n\tbytecode "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  '"608060405234801561001057600080fd5b5060df8061001f6000396000f3006080604052600436106049576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806360fe47b114604e5780636d4ce63c146078575b600080fd5b348015605957600080fd5b5060766004803603810190808035906020019092919050505060a0565b005b348015608357600080fd5b50608a60aa565b6040518082815260200191505060405180910390f35b8060008190555050565b600080549050905600a165627a7a7230582043be766a6a271867521090c3e12130ea8891a8f59d4833bc205a3e2e2c70b4730029"'
                                )
                              ]
                            ),
                            t._v("\n\tdata"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" err "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":=")]
                            ),
                            t._v(" hex"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("DecodeString")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            t._v("bytecode"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("if")]
                            ),
                            t._v(" err "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("!=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token boolean" } },
                              [t._v("nil")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n\t\tlog"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("Fatalf")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"Hex Decoding error : %v"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" err"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            t._v("\n\n\tactionHash"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" err "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":=")]
                            ),
                            t._v(" c"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("DeployContract")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            t._v("data"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("SetGasPrice")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            t._v("big"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("NewInt")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("1")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("SetGasLimit")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("1000000")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("SetArgs")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            t._v("abi"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" big"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("NewInt")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("10")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("Call")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            t._v("context"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("Background")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("if")]
                            ),
                            t._v(" err "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("!=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token boolean" } },
                              [t._v("nil")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n\t\tlog"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("Fatalf")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"deploy error: %v"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" err"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            t._v("\n\tfmt"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("Println")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            t._v("actionHash"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            t._v("\n")
                          ])
                        ])
                      ])
                    ])
                  ],
                  1
                ),
                t._v(" "),
                a("p", [
                  t._v("Need a full example? "),
                  a(
                    "a",
                    {
                      attrs: {
                        href:
                          "https://github.com/iotexproject/iotex-antenna/blob/master/src/__test__/iotx.integration.test.ts#L98",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [t._v("Check our integration test."), a("OutboundLink")],
                    1
                  )
                ]),
                t._v(" "),
                a("p", [
                  t._v(
                    "Once the action is broadcast, you can query the action."
                  )
                ]),
                t._v(" "),
                a(
                  "tabs",
                  [
                    a("tab", { attrs: { name: "JS" } }, [
                      a("div", { staticClass: "language-js extra-class" }, [
                        a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                          a("code", [
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("const")]
                            ),
                            t._v(" action "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("await")]
                            ),
                            t._v(" antenna"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("iotx"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("getActions")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n  byHash"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" actionHash"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n  checkingPending"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token boolean" } },
                              [t._v("true")]
                            ),
                            t._v("\n"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n")
                          ])
                        ])
                      ])
                    ]),
                    t._v(" "),
                    a("tab", { attrs: { name: "Golang" } }, [
                      a("div", { staticClass: "language-go extra-class" }, [
                        a("pre", { pre: !0, attrs: { class: "language-go" } }, [
                          a("code", [
                            t._v("action"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" err "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":=")]
                            ),
                            t._v(" wallet"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("Iotx"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("GetActions")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("&")]
                            ),
                            t._v("iotexapi"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("GetActionsRequest"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n  Lookup"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("&")]
                            ),
                            t._v("iotexapi"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("GetActionsRequest_ByHash"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n    ByHash"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("&")]
                            ),
                            t._v("iotexapi"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("GetActionByHashRequest"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n      ActionHash"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(":")]
                            ),
                            t._v("   actionHash"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n      CheckPending"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token boolean" } },
                              [t._v("true")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n    "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n  "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n")
                          ])
                        ])
                      ])
                    ])
                  ],
                  1
                ),
                t._v(" "),
                a("p", [
                  t._v("Once the action is minted, you can query the receipt.")
                ]),
                t._v(" "),
                a(
                  "tabs",
                  [
                    a("tab", { attrs: { name: "JS" } }, [
                      a("div", { staticClass: "language-js extra-class" }, [
                        a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                          a("code", [
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("const")]
                            ),
                            t._v(" receipt "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("await")]
                            ),
                            t._v(" antenna"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("iotx"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("getReceiptByAction")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n  actionHash"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" actionHash\n"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n")
                          ])
                        ])
                      ])
                    ]),
                    t._v(" "),
                    a("tab", { attrs: { name: "Golang" } }, [
                      a("div", { staticClass: "language-go extra-class" }, [
                        a("pre", { pre: !0, attrs: { class: "language-go" } }, [
                          a("code", [
                            t._v("receipt"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" err "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":=")]
                            ),
                            t._v(" wallet"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("Iotx"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("GetReceiptByAction")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("&")]
                            ),
                            t._v("iotexapi"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("GetReceiptByActionRequest"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n  ActionHash"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(":")]
                            ),
                            t._v(" actionHash"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n")
                          ])
                        ])
                      ])
                    ])
                  ],
                  1
                ),
                t._v(" "),
                a("h3", { attrs: { id: "interacting-with-smart-contract" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#interacting-with-smart-contract" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Interacting with Smart Contract")
                ]),
                t._v(" "),
                a("p", [
                  t._v(
                    "After you get the contract address from the receipt, you can interact with the contract by constructing the contract first, and then calling contract functions."
                  )
                ]),
                t._v(" "),
                a("p", [
                  t._v("There are methods "),
                  a("code", [t._v("set")]),
                  t._v(" and "),
                  a("code", [t._v("get")]),
                  t._v(" in the example contract "),
                  a("code", [t._v("SimpleStorage")]),
                  t._v(" defined in the "),
                  a("a", { attrs: { href: "#compiling-solidity" } }, [
                    t._v("solidity string above")
                  ]),
                  t._v(", so you can call them as the following.")
                ]),
                t._v(" "),
                a(
                  "tabs",
                  [
                    a("tab", { attrs: { name: "JS" } }, [
                      a("div", { staticClass: "language-js extra-class" }, [
                        a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                          a("code", [
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("import")]
                            ),
                            t._v(" Antenna "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("from")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"iotex-antenna"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("import")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v(" Contract "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("from")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"iotex-antenna/lib/contract/contract"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n\n"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("async")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=>")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n  "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("const")]
                            ),
                            t._v(" antenna "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("new")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token class-name" } },
                              [t._v("Antenna")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"http://api.testnet.iotex.one:80"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n\n  "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("const")]
                            ),
                            t._v(" sender "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" antenna"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("iotx"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("accounts"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("privateKeyToAccount")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            t._v("\n    "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  '"73c7b4a62bf165dccf8ebdea8278db811efd5b8638e2ed9683d2d94889450426"'
                                )
                              ]
                            ),
                            t._v("\n  "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n\n  "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("const")]
                            ),
                            t._v(" contract "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("new")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token class-name" } },
                              [t._v("Contract")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            t._v("\n    "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("[")]
                            ),
                            t._v("\n      "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n        constant"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token boolean" } },
                              [t._v("false")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n        inputs"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("[")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v(" name"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"x"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" type"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"uint256"')]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("]")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n        name"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"set"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n        outputs"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("[")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("]")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n        payable"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token boolean" } },
                              [t._v("false")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n        stateMutability"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"nonpayable"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n        type"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"function"')]
                            ),
                            t._v("\n      "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n      "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n        constant"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token boolean" } },
                              [t._v("true")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n        inputs"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("[")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("]")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n        name"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"get"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n        outputs"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("[")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v(" name"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('""')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" type"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"uint256"')]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("]")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n        payable"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token boolean" } },
                              [t._v("false")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n        stateMutability"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"view"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n        type"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"function"')]
                            ),
                            t._v("\n      "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            t._v("\n    "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("]")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n    "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  '"io186s45j3rgvhxh25ec6xk9wap0drtthk3jq4du7"'
                                )
                              ]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n    "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n      provider"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" antenna"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("iotx\n    "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            t._v("\n  "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n\n  "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("const")]
                            ),
                            t._v(" actionHash "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("await")]
                            ),
                            t._v(" contract"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("methods"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("set")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("101")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n    account"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" sender"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n    gasLimit"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"1000000"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n    gasPrice"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"1000000000000"')]
                            ),
                            t._v("\n  "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n\n  "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("const")]
                            ),
                            t._v(" getResult "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("await")]
                            ),
                            t._v(" antenna"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("iotx"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("readContractByMethod")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n    "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("from")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" sender"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("address"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n    contractAddress"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  '"io186s45j3rgvhxh25ec6xk9wap0drtthk3jq4du7"'
                                )
                              ]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n    abi"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("[")]
                            ),
                            t._v("\n      "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n        constant"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token boolean" } },
                              [t._v("false")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n        inputs"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("[")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v(" name"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"x"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" type"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"uint256"')]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("]")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n        name"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"set"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n        outputs"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("[")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("]")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n        payable"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token boolean" } },
                              [t._v("false")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n        stateMutability"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"nonpayable"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n        type"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"function"')]
                            ),
                            t._v("\n      "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n      "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n        constant"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token boolean" } },
                              [t._v("true")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n        inputs"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("[")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("]")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n        name"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"get"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n        outputs"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("[")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v(" name"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('""')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" type"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"uint256"')]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("]")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n        payable"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token boolean" } },
                              [t._v("false")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n        stateMutability"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"view"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n        type"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"function"')]
                            ),
                            t._v("\n      "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            t._v("\n    "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("]")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n    method"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"get"')]
                            ),
                            t._v("\n  "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n")
                          ])
                        ])
                      ])
                    ]),
                    t._v(" "),
                    a("tab", { attrs: { name: "Golang" } }, [
                      a("div", { staticClass: "language-go extra-class" }, [
                        a("pre", { pre: !0, attrs: { class: "language-go" } }, [
                          a("code", [
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("package")]
                            ),
                            t._v(" main\n\n"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("import")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"context"')]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"fmt"')]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"log"')]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"math/big"')]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"strings"')]
                            ),
                            t._v("\n\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  '"github.com/ethereum/go-ethereum/accounts/abi"'
                                )
                              ]
                            ),
                            t._v("\n\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  '"github.com/iotexproject/iotex-address/address"'
                                )
                              ]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  '"github.com/iotexproject/iotex-antenna-go/account"'
                                )
                              ]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  '"github.com/iotexproject/iotex-antenna-go/iotex"'
                                )
                              ]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  '"github.com/iotexproject/iotex-proto/golang/iotexapi"'
                                )
                              ]
                            ),
                            t._v("\n\n"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\n"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("func")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("main")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n\tconn"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" err "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":=")]
                            ),
                            t._v(" iotex"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("NewDefaultGRPCConn")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"api.testnet.iotex.one:80"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("if")]
                            ),
                            t._v(" err "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("!=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token boolean" } },
                              [t._v("nil")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n\t\tlog"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("Fatalf")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"connection error : %v"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" err"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("defer")]
                            ),
                            t._v(" conn"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("Close")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\n\tcreator"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token boolean" } },
                              [t._v("_")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":=")]
                            ),
                            t._v(" account"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("HexStringToAccount")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  '"73c7b4a62bf165dccf8ebdea8278db811efd5b8638e2ed9683d2d94889450426"'
                                )
                              ]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\tc "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":=")]
                            ),
                            t._v(" iotex"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("NewAuthedClient")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            t._v("iotexapi"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("NewAPIServiceClient")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            t._v("conn"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" creator"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\n\tabi"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" err "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":=")]
                            ),
                            t._v(" abi"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("JSON")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            t._v("strings"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("NewReader")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  '`[{"constant":false,"inputs":[{"name":"x","type":"uint256"}],"name":"set","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"get","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_x","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]`'
                                )
                              ]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("if")]
                            ),
                            t._v(" err "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("!=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token boolean" } },
                              [t._v("nil")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n\t\tlog"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("Fatalf")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"JSON error : %v"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" err"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            t._v("\n\tcontract"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" err "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":=")]
                            ),
                            t._v(" address"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("FromString")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  '"io17sn486alutrnzlrdz9vv44g7qyc38hygf7s6h0"'
                                )
                              ]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("if")]
                            ),
                            t._v(" err "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("!=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token boolean" } },
                              [t._v("nil")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n\t\tlog"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("Fatalf")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"JSON error : %v"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" err"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token comment" } },
                              [t._v("//contract execution test")]
                            ),
                            t._v("\n\tactionHash"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" err "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":=")]
                            ),
                            t._v(" c"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("Contract")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            t._v("contract"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" abi"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("Execute")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"set"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" big"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("NewInt")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("8")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("SetGasPrice")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            t._v("big"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("NewInt")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("1")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("SetGasLimit")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("1000000")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("Call")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            t._v("context"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("Background")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("if")]
                            ),
                            t._v(" err "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("!=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token boolean" } },
                              [t._v("nil")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n\t\tlog"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("Fatalf")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"Execute error : %v"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" err"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            t._v("\n\tfmt"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("Println")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            t._v("actionHash"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token comment" } },
                              [t._v("//contract read test")]
                            ),
                            t._v("\n\tresult"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" err "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":=")]
                            ),
                            t._v(" c"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("ReadOnlyContract")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            t._v("contract"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" abi"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("Read")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"get"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("Call")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            t._v("context"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("Background")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("if")]
                            ),
                            t._v(" err "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("!=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token boolean" } },
                              [t._v("nil")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n\t\tlog"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("Fatalf")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"Read error : %v"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" err"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            t._v("\n\tfmt"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("Println")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            t._v("result"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            t._v("\n")
                          ])
                        ])
                      ])
                    ])
                  ],
                  1
                ),
                t._v(" "),
                a("h2", { attrs: { id: "rpc-methods" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#rpc-methods" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" RPC Methods")
                ]),
                t._v(" "),
                a("p", [
                  t._v("The "),
                  a("code", [t._v("rpc-method")]),
                  t._v(
                    "(provider) package allows you to make gRPC calls to Iotex blockchain."
                  )
                ]),
                t._v(" "),
                a("p", [t._v("Use the umbrella antenna.iotex package:")]),
                t._v(" "),
                a(
                  "tabs",
                  [
                    a("tab", { attrs: { name: "JS" } }, [
                      a("div", { staticClass: "language-js extra-class" }, [
                        a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                          a("code", [
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("import")]
                            ),
                            t._v(" Antenna "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("from")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"iotex-antenna"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n\n"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("async")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=>")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n  "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("const")]
                            ),
                            t._v(" antenna "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("new")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token class-name" } },
                              [t._v("Antenna")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"http://api.testnet.iotex.one:80"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n\n  "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("const")]
                            ),
                            t._v(" account "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("await")]
                            ),
                            t._v(" antenna"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("iotx"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("getAccount")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n    address"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  '"io1cl6rl2ev5dfa988qmgzg2x4hfazmp9vn2g66ng"'
                                )
                              ]
                            ),
                            t._v("\n  "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n  "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("const")]
                            ),
                            t._v(" chainMeta "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("await")]
                            ),
                            t._v(" antenna"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("iotx"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("getChainMeta")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n  "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("const")]
                            ),
                            t._v(" actions "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("await")]
                            ),
                            t._v(" antenna"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("iotx"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("getActions")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n    byIndex"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v(" start"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("1")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" count"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("5")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            t._v("\n  "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n  "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("const")]
                            ),
                            t._v(" blocks "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("await")]
                            ),
                            t._v(" antenna"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("iotx"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("getBlockMetas")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n    byIndex"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v(" start"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("1")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" count"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("5")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            t._v("\n  "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n")
                          ])
                        ])
                      ])
                    ]),
                    t._v(" "),
                    a("tab", { attrs: { name: "Golang" } }, [
                      a("div", { staticClass: "language-go extra-class" }, [
                        a("pre", { pre: !0, attrs: { class: "language-go" } }, [
                          a("code", [
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("package")]
                            ),
                            t._v(" main\n\n"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("import")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"log"')]
                            ),
                            t._v("\n\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  '"github.com/iotexproject/iotex-core/protogen/iotexapi"'
                                )
                              ]
                            ),
                            t._v("\n\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  '"github.com/iotexproject/iotex-antenna-go/antenna"'
                                )
                              ]
                            ),
                            t._v("\n"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\n"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("func")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("main")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n\twallet"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" err "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":=")]
                            ),
                            t._v(" antenna"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("NewAntenna")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"api.testnet.iotex.one:80"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("if")]
                            ),
                            t._v(" err "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("!=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token boolean" } },
                              [t._v("nil")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n\t\tlog"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("Fatalf")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"create antenna error: %v"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" err"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            t._v("\n\n\taccount"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" err "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":=")]
                            ),
                            t._v(" wallet"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("Iotx"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("GetAccount")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("&")]
                            ),
                            t._v("iotexapi"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("GetAccountRequest"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("Address"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  '"io1cl6rl2ev5dfa988qmgzg2x4hfazmp9vn2g66ng"'
                                )
                              ]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\tchainMeta"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" err "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":=")]
                            ),
                            t._v(" wallet"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("Iotx"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("GetChainMeta")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("&")]
                            ),
                            t._v("iotexapi"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("GetChainMetaRequest"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\tactions"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" err "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":=")]
                            ),
                            t._v(" wallet"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("Iotx"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("GetActions")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("&")]
                            ),
                            t._v("iotexapi"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("GetActionsRequest"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n\t\tLookup"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("&")]
                            ),
                            t._v("iotexapi"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("GetActionsRequest_ByIndex"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n\t\t\tByIndex"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("&")]
                            ),
                            t._v("iotexapi"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("GetActionsByIndexRequest"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n\t\t\t\tStart"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("1")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n\t\t\t\tCount"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("5")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n\t\t\t"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n\t\t"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\tblocks"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" err "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":=")]
                            ),
                            t._v(" wallet"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("Iotx"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("GetBlockMetas")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("&")]
                            ),
                            t._v("iotexapi"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("GetBlockMetasRequest"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n\t\tLookup"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("&")]
                            ),
                            t._v("iotexapi"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("GetBlockMetasRequest_ByIndex"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n\t\t\tByIndex"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("&")]
                            ),
                            t._v("iotexapi"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("GetBlockMetasByIndexRequest"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n\t\t\t\tStart"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("1")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n\t\t\t\tCount"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("5")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n\t\t\t"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n\t\t"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            t._v("\n")
                          ])
                        ])
                      ])
                    ])
                  ],
                  1
                ),
                t._v(" "),
                a("p", [t._v("Use this standalone package:")]),
                t._v(" "),
                a(
                  "tabs",
                  [
                    a("tab", { attrs: { name: "JS" } }, [
                      a("div", { staticClass: "language-js extra-class" }, [
                        a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                          a("code", [
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("import")]
                            ),
                            t._v(" RpcMethod "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("from")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"iotex-antenna/lib/rpc-method"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n\n"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("async")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=>")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n  "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("const")]
                            ),
                            t._v(" provider "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("new")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token class-name" } },
                              [t._v("RpcMethod")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"http://api.testnet.iotex.one:80"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n\n  "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("const")]
                            ),
                            t._v(" account "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("await")]
                            ),
                            t._v(" provider"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("getAccount")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n    address"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  '"io1cl6rl2ev5dfa988qmgzg2x4hfazmp9vn2g66ng"'
                                )
                              ]
                            ),
                            t._v("\n  "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n  "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("const")]
                            ),
                            t._v(" chainMeta "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("await")]
                            ),
                            t._v(" provider"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("getChainMeta")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n  "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("const")]
                            ),
                            t._v(" actions "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("await")]
                            ),
                            t._v(" provider"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("getActions")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n    byIndex"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v(" start"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("1")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" count"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("5")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            t._v("\n  "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n  "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("const")]
                            ),
                            t._v(" blocks "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("await")]
                            ),
                            t._v(" provider"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("getBlockMetas")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n    byIndex"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v(" start"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("1")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" count"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("5")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            t._v("\n  "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n")
                          ])
                        ])
                      ])
                    ]),
                    t._v(" "),
                    a("tab", { attrs: { name: "Golang" } }, [
                      a("div", { staticClass: "language-go extra-class" }, [
                        a("pre", { pre: !0, attrs: { class: "language-go" } }, [
                          a("code", [
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("package")]
                            ),
                            t._v(" main\n\n"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("import")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"log"')]
                            ),
                            t._v("\n\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  '"github.com/iotexproject/iotex-antenna-go/rpcmethod"'
                                )
                              ]
                            ),
                            t._v("\n\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  '"github.com/iotexproject/iotex-core/protogen/iotexapi"'
                                )
                              ]
                            ),
                            t._v("\n"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\n"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("func")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("main")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n\tprovider"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" err "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":=")]
                            ),
                            t._v(" rpcmethod"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("NewRPCMethod")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"api.testnet.iotex.one:80"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("if")]
                            ),
                            t._v(" err "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("!=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token boolean" } },
                              [t._v("nil")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n\t\tlog"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("Fatalf")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"create antenna error: %v"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" err"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            t._v("\n\n\taccount"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" err "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":=")]
                            ),
                            t._v(" provider"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("GetAccount")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("&")]
                            ),
                            t._v("iotexapi"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("GetAccountRequest"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("Address"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  '"io1cl6rl2ev5dfa988qmgzg2x4hfazmp9vn2g66ng"'
                                )
                              ]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\tchainMeta"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" err "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":=")]
                            ),
                            t._v(" provider"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("GetChainMeta")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("&")]
                            ),
                            t._v("iotexapi"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("GetChainMetaRequest"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\tactions"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" err "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":=")]
                            ),
                            t._v(" provider"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("GetActions")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("&")]
                            ),
                            t._v("iotexapi"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("GetActionsRequest"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n\t\tLookup"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("&")]
                            ),
                            t._v("iotexapi"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("GetActionsRequest_ByIndex"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n\t\t\tByIndex"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("&")]
                            ),
                            t._v("iotexapi"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("GetActionsByIndexRequest"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n\t\t\t\tStart"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("1")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n\t\t\t\tCount"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("5")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n\t\t\t"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n\t\t"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n\tblocks"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" err "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":=")]
                            ),
                            t._v(" provider"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("GetBlockMetas")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("&")]
                            ),
                            t._v("iotexapi"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("GetBlockMetasRequest"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n\t\tLookup"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("&")]
                            ),
                            t._v("iotexapi"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("GetBlockMetasRequest_ByIndex"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n\t\t\tByIndex"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("&")]
                            ),
                            t._v("iotexapi"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("GetBlockMetasByIndexRequest"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n\t\t\t\tStart"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("1")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n\t\t\t\tCount"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("5")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n\t\t\t"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n\t\t"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n\t"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            t._v("\n")
                          ])
                        ])
                      ])
                    ])
                  ],
                  1
                ),
                t._v(" "),
                a("h2", { attrs: { id: "xrc20-tokens" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#xrc20-tokens" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" XRC20 Tokens")
                ]),
                t._v(" "),
                a("p", [
                  t._v(
                    "The XRC20 package provides facility api for XRC20 contracts to IoTeX blockchain."
                  )
                ]),
                t._v(" "),
                a(
                  "tabs",
                  [
                    a("tab", { attrs: { name: "JS" } }, [
                      a("div", { staticClass: "language-js extra-class" }, [
                        a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                          a("code", [
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("import")]
                            ),
                            t._v(" Antenna "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("from")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"iotex-antenna"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("import")]
                            ),
                            t._v(" BigNumber "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("from")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"bignumber.js"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("import")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token constant" } },
                              [t._v("XRC20")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("from")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"iotex-antenna/lib/token/xrc20"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n\n"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("async")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=>")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n  "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("const")]
                            ),
                            t._v(" antenna "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("new")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token class-name" } },
                              [t._v("Antenna")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"http://api.testnet.iotex.one:80"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n\n  "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token comment" } },
                              [t._v("// init accounts")]
                            ),
                            t._v("\n  "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("const")]
                            ),
                            t._v(" account1 "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" antenna"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("iotx"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("accounts"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("privateKeyToAccount")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"privateKey1"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n  "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("const")]
                            ),
                            t._v(" account2 "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" antenna"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("iotx"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("accounts"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("privateKeyToAccount")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"privateKey2"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n  "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("const")]
                            ),
                            t._v(" account3 "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" antenna"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("iotx"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("accounts"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("privateKeyToAccount")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"privateKey3"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n\n  "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token comment" } },
                              [t._v("// create VITA XRC20 contract instance")]
                            ),
                            t._v("\n  "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token comment" } },
                              [
                                t._v(
                                  "// io1hy9w96v7gz7mqquyyacfhtqn6r0yasnsqrjk9h is contract address"
                                )
                              ]
                            ),
                            t._v("\n  "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("const")]
                            ),
                            t._v(" vita "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("new")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token class-name" } },
                              [t._v("XRC20")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  '"io1hy9w96v7gz7mqquyyacfhtqn6r0yasnsqrjk9h"'
                                )
                              ]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n    provider"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" antenna"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("iotx\n  "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n\n  "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token comment" } },
                              [t._v("// token name: IoTeX Vitality")]
                            ),
                            t._v("\n  "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("const")]
                            ),
                            t._v(" name "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("await")]
                            ),
                            t._v(" vita"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("name")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n\n  "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token comment" } },
                              [t._v("// token symbol: VITA")]
                            ),
                            t._v("\n  "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("const")]
                            ),
                            t._v(" symbol "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("await")]
                            ),
                            t._v(" vita"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("symbol")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n\n  "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token comment" } },
                              [t._v("// token decimals: 18")]
                            ),
                            t._v("\n  "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("const")]
                            ),
                            t._v(" decimals "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("await")]
                            ),
                            t._v(" vita"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("decimals")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n\n  "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token comment" } },
                              [
                                t._v(
                                  "// token balanceOf io16acqxqlmaep6z96khs3ey2607sygnx3surn3ga"
                                )
                              ]
                            ),
                            t._v("\n  "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("const")]
                            ),
                            t._v(" balance "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("await")]
                            ),
                            t._v(" vita"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("balanceOf")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            t._v("\n    "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  '"io16acqxqlmaep6z96khs3ey2607sygnx3surn3ga"'
                                )
                              ]
                            ),
                            t._v("\n  "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n\n  "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token comment" } },
                              [
                                t._v(
                                  "// transfer token to io16acqxqlmaep6z96khs3ey2607sygnx3surn3ga"
                                )
                              ]
                            ),
                            t._v("\n  "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("const")]
                            ),
                            t._v(" hash "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("await")]
                            ),
                            t._v(" vita"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("transfer")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            t._v("\n    "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  '"io16acqxqlmaep6z96khs3ey2607sygnx3surn3ga"'
                                )
                              ]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n    "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("new")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token class-name" } },
                              [t._v("BigNumber")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"1000000000000000000"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n    "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            t._v("\n      account"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" antenna"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("iotx"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("accounts"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("[")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("0")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("]")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n      gasPrice"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"1000000000000"')]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n      gasLimit"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"50000"')]
                            ),
                            t._v("\n    "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            t._v("\n  "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n\n  "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token comment" } },
                              [t._v("// decode method invoke inputs")]
                            ),
                            t._v("\n  "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("const")]
                            ),
                            t._v(" inputs "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" vita"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("decode")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            t._v("\n    Buffer"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("from")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            t._v("\n      "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  '"a9059cbb0000000000000000000000008896780a7912829781f70344ab93e589dddb29300000000000000000000000000000000000000000000000001bc16d674ec80000"'
                                )
                              ]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(",")]
                            ),
                            t._v("\n      "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v('"hex"')]
                            ),
                            t._v("\n    "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            t._v("\n  "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(";")]
                            ),
                            t._v("\n")
                          ])
                        ])
                      ])
                    ])
                  ],
                  1
                ),
                t._v(" "),
                a("h2", { attrs: { id: "connect-with-iopay-desktop" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#connect-with-iopay-desktop" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Connect with ioPay Desktop")
                ]),
                t._v(" "),
                a("p", [
                  t._v(
                    "In the client-side, use iotex-antenna@0.29.1. Here is an example of setting up WsSignerPlugin to connect to the wallet. It is nothing more than applying the plugin when initializing Antenna instance, and NOT adding your private key to the SDK as specified in the earlier documentation."
                  )
                ]),
                t._v(" "),
                a("p", [
                  t._v(
                    'Before receiving the transfer or the contract call above, please open and unlock your wallet. Once the wallet is ready, you can run the script below in both the browser and the node environment, and then you can see the message to sign. Please click "Yes, sign transaction" to continue.'
                  )
                ]),
                t._v(" "),
                a("h3", { attrs: { id: "client-side" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#client-side" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Client-side")
                ]),
                t._v(" "),
                a("div", { staticClass: "language-js extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                    a("code", [
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("import")]
                      ),
                      t._v(" sleepPromise "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("from")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"sleep-promise"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("import")]
                      ),
                      t._v(" Antenna "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("from")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"iotex-antenna"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("import")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v(" WsSignerPlugin "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("from")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"iotex-antenna/lib/plugin/ws"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("import")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v(" toRau "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("from")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"iotex-antenna/lib/account/utils"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("import")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v(" Contract "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("from")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"iotex-antenna/lib/contract/contract"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("async")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=>")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("const")]
                      ),
                      t._v(" antenna "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("new")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token class-name" } },
                        [t._v("Antenna")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"http://api.iotex.one:80"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n    signer"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("new")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token class-name" } },
                        [t._v("WsSignerPlugin")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("await")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("sleepPromise")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("3000")
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("// example for transfer")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("let")]
                      ),
                      t._v(" resp "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("await")]
                      ),
                      t._v(" antenna"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      t._v("iotx"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("sendTransfer")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n    to"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"io1mwekae7qqwlr23220k5n9z3fmjxz72tuchra3m"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n    "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("from")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" antenna"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      t._v("iotx"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      t._v("accounts"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("[")]
                      ),
                      a("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("0")
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("]")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      t._v("address"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n    value"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("toRau")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"1"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"Iotx"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n    gasLimit"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"100000"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n    gasPrice"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("toRau")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"1"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"Qev"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n\n  console"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("log")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      t._v("resp"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("// example for contract call")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [
                          t._v(
                            "// option 1: using simple executeContract shortcut"
                          )
                        ]
                      ),
                      t._v("\n  resp "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("await")]
                      ),
                      t._v(" antenna"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      t._v("iotx"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("executeContract")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      t._v("\n    "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n      contractAddress"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"io1jmq0epcswzu7vyquxlr9j9jvplwpvtc4d50ze9"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n      amount"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"0"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n      abi"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v("\n        "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v(
                          '\'[{"constant":false,"inputs":[{"name":"x","type":"uint256"}],"name":"set","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"get","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]\''
                        )
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n      method"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"set"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n      gasLimit"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"100000"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n      gasPrice"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("toRau")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"1"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"Qev"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n      "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("from")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" antenna"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      t._v("iotx"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      t._v("accounts"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("[")]
                      ),
                      a("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("0")
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("]")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      t._v("address\n    "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n    "),
                      a("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("666")
                      ]),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n  console"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("log")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      t._v("resp"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("// example for contract call")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [
                          t._v(
                            "// option 2: using full-featured contract class"
                          )
                        ]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("const")]
                      ),
                      t._v(" contract "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("new")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token class-name" } },
                        [t._v("Contract")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      t._v("\n    "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("[")]
                      ),
                      t._v("\n      "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n        constant"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token boolean" } },
                        [t._v("false")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n        inputs"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("[")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v(" name"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"x"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" type"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"uint256"')
                      ]),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("]")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n        name"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"set"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n        outputs"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("[")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("]")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n        payable"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token boolean" } },
                        [t._v("false")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n        stateMutability"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"nonpayable"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n        type"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"function"')
                      ]),
                      t._v("\n      "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n      "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n        constant"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token boolean" } },
                        [t._v("true")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n        inputs"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("[")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("]")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n        name"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"get"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n        outputs"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("[")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v(" name"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('""')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" type"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"uint256"')
                      ]),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("]")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n        payable"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token boolean" } },
                        [t._v("false")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n        stateMutability"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"view"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n        type"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"function"')
                      ]),
                      t._v("\n      "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v("\n    "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("]")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n    "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"io1jmq0epcswzu7vyquxlr9j9jvplwpvtc4d50ze9"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n    "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v(" provider"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" antenna"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      t._v("iotx"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" signer"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" antenna"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      t._v("iotx"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      t._v("signer "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n  resp "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("await")]
                      ),
                      t._v(" contract"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      t._v("methods"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("set")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("999")
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n    account"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" antenna"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      t._v("iotx"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      t._v("accounts"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("[")]
                      ),
                      a("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("0")
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("]")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n    gasLimit"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"300000"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n    gasPrice"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"1000000000000"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n    amount"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("toRau")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("0")
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"IOTX"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n  console"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("log")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token template-string" } },
                        [
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token template-punctuation string"
                              }
                            },
                            [t._v("`")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v("contract.set() => ")]
                          ),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: { class: "token interpolation" }
                            },
                            [
                              a(
                                "span",
                                {
                                  pre: !0,
                                  attrs: {
                                    class:
                                      "token interpolation-punctuation punctuation"
                                  }
                                },
                                [t._v("${")]
                              ),
                              t._v("resp"),
                              a(
                                "span",
                                {
                                  pre: !0,
                                  attrs: {
                                    class:
                                      "token interpolation-punctuation punctuation"
                                  }
                                },
                                [t._v("}")]
                              )
                            ]
                          ),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token template-punctuation string"
                              }
                            },
                            [t._v("`")]
                          )
                        ]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("await")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("sleepPromise")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("20000")
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n\n  resp "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("await")]
                      ),
                      t._v(" contract"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      t._v("methods"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("get")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("from")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" antenna"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      t._v("iotx"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      t._v("accounts"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("[")]
                      ),
                      a("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("0")
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("]")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      t._v("address "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n  console"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("log")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token template-string" } },
                        [
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token template-punctuation string"
                              }
                            },
                            [t._v("`")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v("contract.get() => ")]
                          ),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: { class: "token interpolation" }
                            },
                            [
                              a(
                                "span",
                                {
                                  pre: !0,
                                  attrs: {
                                    class:
                                      "token interpolation-punctuation punctuation"
                                  }
                                },
                                [t._v("${")]
                              ),
                              t._v("resp"),
                              a(
                                "span",
                                {
                                  pre: !0,
                                  attrs: {
                                    class:
                                      "token interpolation-punctuation punctuation"
                                  }
                                },
                                [t._v("}")]
                              )
                            ]
                          ),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token template-punctuation string"
                              }
                            },
                            [t._v("`")]
                          )
                        ]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n")
                    ])
                  ])
                ]),
                a("h2", { attrs: { id: "login-with-iopay-desktop" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#login-with-iopay-desktop" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Login with ioPay Desktop")
                ]),
                t._v(" "),
                a("p", [
                  t._v("Prerequisite: "),
                  a(
                    "a",
                    {
                      attrs: {
                        href:
                          "https://docs.iotex.io/docs/libraries-and-tools.html#integrate-with-iopay-desktop",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [t._v("Integrate with ioPay Desktop"), a("OutboundLink")],
                    1
                  ),
                  t._v(".")
                ]),
                t._v(" "),
                a("p", [
                  t._v(
                    "Login is essentially identifying who’s who with some proof. With crypto wallet, you can easily provide the proof by signing a message with your private key, in the following three steps:"
                  )
                ]),
                t._v(" "),
                a("h3", { attrs: { id: "_1-preparing-a-message-to-sign" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#_1-preparing-a-message-to-sign" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" 1. Preparing a message to sign")
                ]),
                t._v(" "),
                a("p", [t._v("The message contains these concepts:")]),
                t._v(" "),
                a("ol", [
                  a("li", [t._v("This message’s intention is login.")]),
                  t._v(" "),
                  a("li", [
                    t._v(
                      "We need the user’s consent to sign with a specific address"
                    )
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v(
                      "To prevent the replay attack, we should randomly generate a nonce every time with the message to sign. The server memorize it first, then send to the wallet and finally verify it."
                    )
                  ])
                ]),
                t._v(" "),
                a("p", [
                  t._v(
                    "With these items above, we can then compose a message like"
                  )
                ]),
                t._v(" "),
                a("div", { staticClass: "language-ts extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-ts" } }, [
                    a("code", [
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("const")]
                      ),
                      t._v(" msg "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token template-string" } },
                        [
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token template-punctuation string"
                              }
                            },
                            [t._v("`")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v("Login with ")]
                          ),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: { class: "token interpolation" }
                            },
                            [
                              a(
                                "span",
                                {
                                  pre: !0,
                                  attrs: {
                                    class:
                                      "token interpolation-punctuation punctuation"
                                  }
                                },
                                [t._v("${")]
                              ),
                              t._v("account"),
                              a(
                                "span",
                                {
                                  pre: !0,
                                  attrs: { class: "token punctuation" }
                                },
                                [t._v(".")]
                              ),
                              t._v("address"),
                              a(
                                "span",
                                {
                                  pre: !0,
                                  attrs: {
                                    class:
                                      "token interpolation-punctuation punctuation"
                                  }
                                },
                                [t._v("}")]
                              )
                            ]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v(" and the nonce of ")]
                          ),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: { class: "token interpolation" }
                            },
                            [
                              a(
                                "span",
                                {
                                  pre: !0,
                                  attrs: {
                                    class:
                                      "token interpolation-punctuation punctuation"
                                  }
                                },
                                [t._v("${")]
                              ),
                              t._v("nonce"),
                              a(
                                "span",
                                {
                                  pre: !0,
                                  attrs: {
                                    class:
                                      "token interpolation-punctuation punctuation"
                                  }
                                },
                                [t._v("}")]
                              )
                            ]
                          ),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token template-punctuation string"
                              }
                            },
                            [t._v("`")]
                          )
                        ]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n")
                    ])
                  ])
                ]),
                a("p", [
                  t._v("The "),
                  a("code", [t._v("account.address")]),
                  t._v(" is from "),
                  a(
                    "a",
                    {
                      attrs: {
                        href:
                          "https://docs.iotex.io/docs/libraries-and-tools.html#integrate-with-iopay-desktop",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [t._v("Integrate with ioPay Desktop"), a("OutboundLink")],
                    1
                  ),
                  t._v(". And the "),
                  a("code", [t._v("nonce")]),
                  t._v(
                    " is from the server. We use cookie session to store the nonce temporarily but you can choose whatever storage you like."
                  )
                ]),
                t._v(" "),
                a("div", { staticClass: "language-ts extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-ts" } }, [
                    a("code", [
                      t._v("server"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("post")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"/api/sign-in/create-nonce"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("async")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token parameter" } },
                        [t._v("ctx")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=>")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("const")]
                      ),
                      t._v(" nonce "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("uuidv4")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n  ctx"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      t._v("session"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      t._v("nonce "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=")]
                      ),
                      t._v(" nonce"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n  ctx"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      t._v("response"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      t._v("body "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n    nonce\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n")
                    ])
                  ])
                ]),
                a("h3", { attrs: { id: "_2-sign-the-message" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#_2-sign-the-message" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" 2. Sign the message")
                ]),
                t._v(" "),
                a("p", [
                  t._v(
                    "Once we got the composed message, send it to the wallet to sign. Then we send the signature to the server "
                  ),
                  a("code", [t._v("POST")]),
                  t._v(" endpoint "),
                  a("code", [t._v("/api/sign-in/")]),
                  t._v(" for verification.")
                ]),
                t._v(" "),
                a("div", { staticClass: "language-ts extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-ts" } }, [
                    a("code", [
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("const")]
                      ),
                      t._v(" sig "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("await")]
                      ),
                      t._v(" account"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("sign")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      t._v("msg"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("const")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v(" data "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("await")]
                      ),
                      t._v(" axiosInstance"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("post")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"/api/sign-in/"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n  sig"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" sig"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("toString")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"hex"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n  address"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" account"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      t._v("address\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n")
                    ])
                  ])
                ]),
                a(
                  "h3",
                  {
                    attrs: { id: "_3-verify-the-message-and-issue-credentials" }
                  },
                  [
                    a(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#_3-verify-the-message-and-issue-credentials"
                        }
                      },
                      [t._v("#")]
                    ),
                    t._v(" 3. Verify the message and issue credentials")
                  ]
                ),
                t._v(" "),
                a("p", [
                  t._v(
                    "The server parses the JSON request and verify the signature against the message and the address. If everything goes well, then the server can proceed with getting or creating the user from the database, and issue credentials accordingly."
                  )
                ]),
                t._v(" "),
                a("div", { staticClass: "language-ts extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-ts" } }, [
                    a("code", [
                      t._v("server"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("post")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"/api/sign-in/"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("async")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token parameter" } },
                        [
                          t._v("ctx"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" Context"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" next"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" koa"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          t._v("Next")
                        ]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=>")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("const")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v(" sig"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" address "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=")]
                      ),
                      t._v(" ctx"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      t._v("request"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      t._v("body"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("const")]
                      ),
                      t._v(" msg "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token template-string" } },
                        [
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token template-punctuation string"
                              }
                            },
                            [t._v("`")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v("Login with ")]
                          ),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: { class: "token interpolation" }
                            },
                            [
                              a(
                                "span",
                                {
                                  pre: !0,
                                  attrs: {
                                    class:
                                      "token interpolation-punctuation punctuation"
                                  }
                                },
                                [t._v("${")]
                              ),
                              t._v("address"),
                              a(
                                "span",
                                {
                                  pre: !0,
                                  attrs: {
                                    class:
                                      "token interpolation-punctuation punctuation"
                                  }
                                },
                                [t._v("}")]
                              )
                            ]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v(" and the nonce of ")]
                          ),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: { class: "token interpolation" }
                            },
                            [
                              a(
                                "span",
                                {
                                  pre: !0,
                                  attrs: {
                                    class:
                                      "token interpolation-punctuation punctuation"
                                  }
                                },
                                [t._v("${")]
                              ),
                              t._v("ctx"),
                              a(
                                "span",
                                {
                                  pre: !0,
                                  attrs: { class: "token punctuation" }
                                },
                                [t._v(".")]
                              ),
                              t._v("session"),
                              a(
                                "span",
                                {
                                  pre: !0,
                                  attrs: { class: "token punctuation" }
                                },
                                [t._v(".")]
                              ),
                              t._v("nonce"),
                              a(
                                "span",
                                {
                                  pre: !0,
                                  attrs: {
                                    class:
                                      "token interpolation-punctuation punctuation"
                                  }
                                },
                                [t._v("}")]
                              )
                            ]
                          ),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token template-punctuation string"
                              }
                            },
                            [t._v("`")]
                          )
                        ]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n  ctx"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      t._v("session"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      t._v("nonce "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("null")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("// clear previous nonce")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("const")]
                      ),
                      t._v(" recovered "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("new")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token class-name" } },
                        [t._v("Account")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("recover")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      t._v("msg"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" Buffer"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("from")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      t._v("sig"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"hex"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token boolean" } },
                        [t._v("false")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("if")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      t._v("recovered "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("!==")]
                      ),
                      t._v(" address"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n    ctx"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      t._v("response"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      t._v("body "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n      ok"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token boolean" } },
                        [t._v("false")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n      error"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n        code"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"auth/failed_to_login"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n        message"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" ctx"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("t")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"auth/failed_to_login"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      t._v("\n      "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v("\n    "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n    "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("return")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v("\n\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [
                          t._v(
                            "// Now the user is authenticated. Get or create the user from the database and issue credentials accordingly"
                          )
                        ]
                      ),
                      t._v("\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n")
                    ])
                  ])
                ])
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      s.default = e.exports;
    }
  }
]);
