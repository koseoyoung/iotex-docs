(window.webpackJsonp = window.webpackJsonp || []).push([
  [14],
  {
    566: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a(69),
        s = Object(n.a)(
          {},
          function() {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": e.$parent.slotKey } },
              [
                a("h2", { attrs: { id: "action-injector" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#action-injector" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" Action Injector")
                ]),
                e._v(" "),
                a("p", [
                  e._v(
                    "Action injector is a simulation tool to simulate action traffic by injecting random actions to the gateway node."
                  )
                ]),
                e._v(" "),
                a("div", { staticClass: "language- extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    a("code", [
                      e._v(
                        'inject actions [options : -m] (default:random).\n\nUsage:\n  injector inject [flags]\n\nFlags:\n      --action-type string            action type to inject (default "transfer")\n      --addr string                   target ip:port for grpc connection (default "127.0.0.1:14014")\n      --aps int                       actions to be injected per second (default 30)\n      --check-recipt                  check recept\n      --contract string               smart contract address (default "io1pmjhyksxmz2xpxn2qmz4gx9qq2kn2gdr8un4xq")\n      --duration duration             duration when the injection will run (default 60h0m0s)\n      --execution-amount int          execution amount\n      --execution-gas-limit uint      execution gas limit (default 100000)\n      --execution-gas-price int       execution gas price\n  -h, --help                          help for inject\n      --injector-config-path string   path of config file of genesis transfer addresses (default "./tools/actioninjector.v2/gentsfaddrs.yaml")\n      --insecure                      insecure network\n      --load-token-amount int         init load how much token to inject accounts\n      --rand-accounts int             number of accounst to use (default 3000)\n      --reset-interval duration       time interval to reset nonce counter (default 10s)\n      --retry-interval duration       sleep interval between two consecutive rpc retries (default 1s)\n      --retry-num uint                maximum number of rpc retries (default 5)\n      --transfer-amount int           execution amount\n      --transfer-gas-limit uint       transfer gas limit (default 20000)\n      --transfer-gas-price int        transfer gas price\n      --workers uint                  number of workers (default 10)\n'
                      )
                    ])
                  ])
                ]),
                a("h3", { attrs: { id: "install-release-build" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#install-release-build" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" Install Release Build")
                ]),
                e._v(" "),
                a("div", { staticClass: "language- extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    a("code", [
                      e._v(
                        "curl --silent https://raw.githubusercontent.com/iotexproject/iotex-core/master/install-injector.sh | sh\n"
                      )
                    ])
                  ])
                ]),
                a("h3", { attrs: { id: "install-latest-unstable-build" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#install-latest-unstable-build" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" Install Latest/Unstable Build")
                ]),
                e._v(" "),
                a("div", { staticClass: "language- extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    a("code", [
                      e._v(
                        'curl https://raw.githubusercontent.com/iotexproject/iotex-core/master/install-injector.sh | sh -s "unstable"\n'
                      )
                    ])
                  ])
                ]),
                a("p", [
                  e._v(
                    'Note that is you encounter issues such as "action is not found", check for following reasons:'
                  )
                ]),
                e._v(" "),
                a("ol", [
                  a("li", [e._v("incorrect nonce (too small or too large)")]),
                  e._v(" "),
                  a("li", [e._v("too low gas price")]),
                  e._v(" "),
                  a("li", [e._v("too small gas limit")]),
                  e._v(" "),
                  a("li", [
                    e._v(
                      "account balance insufficient (amount + gas price * gas limit)"
                    )
                  ])
                ]),
                e._v(" "),
                a("h2", { attrs: { id: "bookkeeping" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#bookkeeping" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" Bookkeeping")
                ]),
                e._v(" "),
                a("p", [
                  e._v(
                    "Bookkeeping is a GraphQL web interface for reward distributions, which collects voting status and calculates corresponding voters' reward for a given delegate within a certain epoch range."
                  )
                ]),
                e._v(" "),
                a("p", [
                  e._v("*"),
                  a("strong", [
                    e._v(
                      "While we keep bookkeeping for analytics, we recommend delegates use "
                    ),
                    a(
                      "a",
                      {
                        attrs: {
                          href: "http://hermes.to",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Hermes"), a("OutboundLink")],
                      1
                    ),
                    e._v(" for auto-distribute voters' rewards.")
                  ])
                ]),
                e._v(" "),
                a(
                  "h3",
                  { attrs: { id: "get-voters-rewards-given-a-delegate-name" } },
                  [
                    a(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#get-voters-rewards-given-a-delegate-name"
                        }
                      },
                      [e._v("#")]
                    ),
                    e._v(" Get Voters' Rewards Given A Delegate Name")
                  ]
                ),
                e._v(" "),
                a("p", [
                  e._v("Usage: Please refer to "),
                  a(
                    "a",
                    {
                      attrs: {
                        href:
                          "https://github.com/iotexproject/iotex-docs#bookkeeping",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [e._v("Analytics Documentations"), a("OutboundLink")],
                    1
                  ),
                  e._v(".")
                ]),
                e._v(" "),
                a("h3", { attrs: { id: "send-out-voters-rewards" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#send-out-voters-rewards" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" Send Out Voters' Rewards")
                ]),
                e._v(" "),
                a("p", [
                  e._v("The generated bytecode can be used by "),
                  a("code", [e._v("ioctl")]),
                  e._v(" to actually send out the voters' rewards, i.e.,")
                ]),
                e._v(" "),
                a("div", { staticClass: "language- extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    a("code", [
                      e._v(
                        "ioctl action invoke io1sesxdghz93f4sadhu6a7242m22gphmc2aucz4g <total-amount> -l <gas-limit> -p <gas-price> -s <signer> -b <bytecode>`\n"
                      )
                    ])
                  ])
                ]),
                a("p", [
                  e._v("Note that "),
                  a("code", [
                    e._v("io1sesxdghz93f4sadhu6a7242m22gphmc2aucz4g")
                  ]),
                  e._v(
                    " is the pre-deployed contract for sending IOTX coins to multiple addresses."
                  )
                ])
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.default = s.exports;
    }
  }
]);
