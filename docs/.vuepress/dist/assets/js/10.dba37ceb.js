(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    565: function(e, a, n) {
      "use strict";
      n.r(a);
      var t = n(69),
        s = Object(t.a)(
          {},
          function() {
            var e = this,
              a = e.$createElement,
              n = e._self._c || a;
            return n(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": e.$parent.slotKey } },
              [
                n("h2", { attrs: { id: "overview" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#overview" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" Overview")
                ]),
                e._v(" "),
                n("p", [
                  e._v(
                    "If you are accessing a non-TLS endpoint, make sure add "
                  ),
                  n("code", [e._v("-plaintext")]),
                  e._v(" in your "),
                  n("code", [e._v("grpcurl")]),
                  e._v(" commnad.")
                ]),
                e._v(" "),
                n("h2", { attrs: { id: "getaccount" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#getaccount" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" GetAccount")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  Get Account Details\nRequest:\n  Address: Account Encoded Address\nResponse:\n  AccountMeta: Account Metadata\n"
                      )
                    ])
                  ])
                ]),
                n("p", [e._v("Example:")]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        '➜  ~ grpcurl -d \'{"address": "io1juvx5g063eu4ts832nukp4vgcwk2gnc5cu9ayd"}\' api.mainnet.iotex.one:443 iotexapi.APIService.GetAccount\n\n{\n  "accountMeta": {\n    "address": "io1juvx5g063eu4ts832nukp4vgcwk2gnc5cu9ayd",\n    "balance": "0",\n    "nonce": "2",\n    "pendingNonce": "3",\n    "numActions": "2"\n  }\n}\n'
                      )
                    ])
                  ])
                ]),
                n("h2", { attrs: { id: "getactionsbyindex" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#getactionsbyindex" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" GetActionsByIndex")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  Get Actions By Index\nRequest:\n  ByIndex: GetActionsByIndexRequest\n    -Start: Start Index of Actions\n    -Count: Number of Actions\nResponse:\n  ActionInfo: List of Action Info\n"
                      )
                    ])
                  ])
                ]),
                n("p", [e._v("Example:")]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        '➜  ~ grpcurl -d \'{"byIndex": {"start": 0, "count": 2}}\' api.mainnet.iotex.one:443 iotexapi.APIService.GetActions\n\n{\n  "actionInfo": [\n    {\n      "action": {\n        "core": {\n          "version": 1,\n          "gasPrice": "0",\n          "grantReward": {\n            "height": "1"\n          }\n        },\n        "senderPubKey": "BGR5G9TOfUUQEoCJ+x262Gp+8wv/0/K73OZKl/P6tJEO+CVthBN9yiFyLZFejCeWoyy5WKy14B+iUAdGjPglhQg=",\n        "signature": "fsCLFdClaIYAbwcyeUduhYOzvdncK412GqfEYQqxEwlZXMVfbrrOXVsRAmrtnz69J/t/Z+vlpeTfmqN4LkGt0gA="\n      },\n      "actHash": "dd2e83336f1ff219b1e54558f0627e1f556ed2caeedb44b758b0e107aa246531",\n      "blkHash": "230ba8095d5a505e355652f9dcc2b13605419a8fa3d3fd5ddc6d24fd6a902641",\n      "timestamp": "2019-04-22T02:06:30Z",\n      "blkHeight": "1",\n      "sender": "io1vtm2zgn830pn6auc2cvnchgwdaefa9gr4z0s86",\n      "gasFee": "0"\n    },\n    {\n      "action": {\n        "core": {\n          "version": 1,\n          "gasLimit": "5000000",\n          "gasPrice": "0",\n          "transfer": {\n            "amount": "0",\n            "recipient": "io1vtm2zgn830pn6auc2cvnchgwdaefa9gr4z0s86",\n            "payload": "cmNxZ2pzeGZkeHpzenp0cHlkemx6Y2xwbHo6Ly9VMkZzZEdWa1gxOUU0dzJRZ2dQSi82TjM4ZUNVNFlUdk9OeUs4QTVqWjFYSW9RREMybFpCSEdlOWRERmtONlRvSnFhQXhjUHg2SkV6T3YveWlWQWw2YStQeW0rSTAyQnZsZVcybWNLdU1WNnRXSFJIVG5KdXU5ODF4MlhQMm9XOQ=="\n          }\n        },\n        "senderPubKey": "BGR5G9TOfUUQEoCJ+x262Gp+8wv/0/K73OZKl/P6tJEO+CVthBN9yiFyLZFejCeWoyy5WKy14B+iUAdGjPglhQg=",\n        "signature": "aHHaBSzCb2pkAa6V/oqHruAkvjXHg6LH51LRJob8Cf1hAh6SxjVZlbCtVhVq0BCIJW9vf2Gd/gPLxa56kpZmhQE="\n      },\n      "actHash": "b7024bc52f315fafb9cc7677e730aec79767b28fbaa6bdd1f37c1861dd699aba",\n      "blkHash": "230ba8095d5a505e355652f9dcc2b13605419a8fa3d3fd5ddc6d24fd6a902641",\n      "timestamp": "2019-04-22T02:06:30Z",\n      "blkHeight": "1",\n      "sender": "io1vtm2zgn830pn6auc2cvnchgwdaefa9gr4z0s86",\n      "gasFee": "0"\n    }\n  ],\n  "total": "5407021"\n}\n'
                      )
                    ])
                  ])
                ]),
                n("h2", { attrs: { id: "getactionbyhash" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#getactionbyhash" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" GetActionByHash")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  Get Action By Action Hash\nRequest:\n  ByHash: GetActionByHashRequest\n    -ActionHash: Hash of Action\n    -CheckPending: Wether To Check Pending Actions in Action Pool\nResponse:\n  ActionInfo: Action Info\n"
                      )
                    ])
                  ])
                ]),
                n("p", [e._v("Example:")]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        '➜  ~ grpcurl -d \'{"byHash": {"actionHash": "b7024bc52f315fafb9cc7677e730aec79767b28fbaa6bdd1f37c1861dd699aba", "checkPending": false}}\' api.mainnet.iotex.one:443 iotexapi.APIService.GetActions\n\n{\n  "actionInfo": [\n    {\n      "action": {\n        "core": {\n          "version": 1,\n          "gasLimit": "5000000",\n          "gasPrice": "0",\n          "transfer": {\n            "amount": "0",\n            "recipient": "io1vtm2zgn830pn6auc2cvnchgwdaefa9gr4z0s86",\n            "payload": "cmNxZ2pzeGZkeHpzenp0cHlkemx6Y2xwbHo6Ly9VMkZzZEdWa1gxOUU0dzJRZ2dQSi82TjM4ZUNVNFlUdk9OeUs4QTVqWjFYSW9RREMybFpCSEdlOWRERmtONlRvSnFhQXhjUHg2SkV6T3YveWlWQWw2YStQeW0rSTAyQnZsZVcybWNLdU1WNnRXSFJIVG5KdXU5ODF4MlhQMm9XOQ=="\n          }\n        },\n        "senderPubKey": "BGR5G9TOfUUQEoCJ+x262Gp+8wv/0/K73OZKl/P6tJEO+CVthBN9yiFyLZFejCeWoyy5WKy14B+iUAdGjPglhQg=",\n        "signature": "aHHaBSzCb2pkAa6V/oqHruAkvjXHg6LH51LRJob8Cf1hAh6SxjVZlbCtVhVq0BCIJW9vf2Gd/gPLxa56kpZmhQE="\n      },\n      "actHash": "b7024bc52f315fafb9cc7677e730aec79767b28fbaa6bdd1f37c1861dd699aba",\n      "blkHash": "230ba8095d5a505e355652f9dcc2b13605419a8fa3d3fd5ddc6d24fd6a902641",\n      "timestamp": "2019-04-22T02:06:30Z",\n      "blkHeight": "1",\n      "sender": "io1vtm2zgn830pn6auc2cvnchgwdaefa9gr4z0s86",\n      "gasFee": "0"\n    }\n  ],\n  "total": "1"\n}\n'
                      )
                    ])
                  ])
                ]),
                n("h2", { attrs: { id: "getactionsbyaddress" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#getactionsbyaddress" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" GetActionsByAddress")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  Get Actions By Address\nRequest:\n  ByAddr: GetActionsByAddressRequest\n    -Address: Encoded Address\n    -Start: Start Index of Actions\n    -Count: Number of Actions\nResposne:\n  ActionInfo: List of Action Info\n"
                      )
                    ])
                  ])
                ]),
                n("p", [e._v("Example:")]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        '➜  ~ grpcurl -d \'{"byAddr": {"address": "io1juvx5g063eu4ts832nukp4vgcwk2gnc5cu9ayd", "start": 0, "count": 1}}\' api.mainnet.iotex.one:443 iotexapi.APIService.GetActions\n\nResolved method descriptor:\nrpc GetActions ( .iotexapi.GetActionsRequest ) returns ( .iotexapi.GetActionsResponse );\n\nRequest metadata to send:\n(empty)\n\nResponse headers received:\ncontent-type: application/grpc\n\nResponse contents:\n{\n  "actionInfo": [\n    {\n      "action": {\n        "core": {\n          "version": 1,\n          "nonce": 1,\n          "gasLimit": 10000,\n          "gasPrice": "10000000000000",\n          "transfer": {\n            "amount": "1000000000000000000",\n            "recipient": "io1sxm6zl56um2c3ntq5fwqjar4za5ka560x53muy"\n          }\n        },\n        "senderPubKey": "BOk7WxyPumkmNlKkg61VMY5O7VtRIjFMt/2wd9jHKVCXzsku5QsRCNx0lalyDlkh5W0wSON6vmpnFtfJuRPp8uY=",\n        "signature": "9mrqFBggiRocZhkRVUswxs83NaEFNdEYYczI8049vlovHEP4YMQz+3Isznc3CrYaJxAbc2PTIz7y2meerJ8bHAA="\n      },\n      "actHash": "060a93a4784469f9e587da0c90ed20df58b0effb50d6b8ddcd9a4c65ad55fcbd",\n      "blkHash": "6344115bcd43b7315ffdf5338d0f97b26caed7734efea034a27208f64670f5e9",\n      "timestamp": "2019-04-17T00:10:30.468419Z"\n    }\n  ]\n}\n'
                      )
                    ])
                  ])
                ]),
                n("h2", { attrs: { id: "getunconfirmedactionsbyaddress" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#getunconfirmedactionsbyaddress" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" GetUnconfirmedActionsByAddress")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  Get Unconfirmed Actions By Address\nRequest:\n  UnconfirmedByAddr: GetUnconfirmedActionsByAddressRequest\n    -Address: Encoded Address\n    -Start: Start Index of Unconfirmed Actions\n    -Count: Number of Unconfirmed Actions\nResposne:\n  ActionInfo: List of Action Info\n"
                      )
                    ])
                  ])
                ]),
                n("p", [e._v("Example:")]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        '➜  ~ grpcurl -d \'{"unconfirmedByAddr": {"address": "io1juvx5g063eu4ts832nukp4vgcwk2gnc5cu9ayd", "start": 0, "count": 1}}\' api.mainnet.iotex.one:443 iotexapi.APIService.GetActions\n\n{\n\n}\n'
                      )
                    ])
                  ])
                ]),
                n("h2", { attrs: { id: "getactionsbyblock" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#getactionsbyblock" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" GetActionsByBlock")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  Get Actions By Block\nRequest:\n  ByBlk: GetActionsByBlockRequest\n    -BlkHash: Block Hash\n    -Start: Start Index of Actions\n    -Count: Number of Actions\nResposne:\n  ActionInfo: List of ActionInfo\n"
                      )
                    ])
                  ])
                ]),
                n("p", [e._v("Example:")]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        '➜  ~ grpcurl -d \'{"byBlk": {"blkHash": "6344115bcd43b7315ffdf5338d0f97b26caed7734efea034a27208f64670f5e9", "start": 0, "count": 1}}\' api.mainnet.iotex.one:443 iotexapi.APIService.GetActions\n\n{\n  "actionInfo": [\n    {\n      "action": {\n        "core": {\n          "version": 1,\n          "gasPrice": "0",\n          "grantReward": {\n            "height": "1"\n          }\n        },\n        "senderPubKey": "BGR5G9TOfUUQEoCJ+x262Gp+8wv/0/K73OZKl/P6tJEO+CVthBN9yiFyLZFejCeWoyy5WKy14B+iUAdGjPglhQg=",\n        "signature": "fsCLFdClaIYAbwcyeUduhYOzvdncK412GqfEYQqxEwlZXMVfbrrOXVsRAmrtnz69J/t/Z+vlpeTfmqN4LkGt0gA="\n      },\n      "actHash": "dd2e83336f1ff219b1e54558f0627e1f556ed2caeedb44b758b0e107aa246531",\n      "blkHash": "230ba8095d5a505e355652f9dcc2b13605419a8fa3d3fd5ddc6d24fd6a902641",\n      "timestamp": "2019-04-22T02:06:30Z",\n      "blkHeight": "1",\n      "sender": "io1vtm2zgn830pn6auc2cvnchgwdaefa9gr4z0s86"\n    }\n  ],\n  "total": "2"\n}\n'
                      )
                    ])
                  ])
                ]),
                n("h2", { attrs: { id: "getblockmetasbyindex" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#getblockmetasbyindex" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" GetBlockMetasByIndex")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  Get Block Metadata By Index\nRequest:\n  ByIndex: GetBlockMetasByIndexRequest\n    -Start: Start Block Height\n    -Count: Number of Blocks\nResponse:\n  BlkMetas: List of Block Metadata\n"
                      )
                    ])
                  ])
                ]),
                n("p", [e._v("Example:")]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        '➜  ~ grpcurl -d \'{"byIndex": {"start": 1, "count": 2}}\' api.mainnet.iotex.one:443 iotexapi.APIService.GetBlockMetas\n\n{\n  "blkMetas": [\n    {\n      "hash": "b7754977cae0f2a45a4ae2b7f0dfc20487e5acfa93594e5eaa1e93f5ec88800f",\n      "height": 1,\n      "timestamp": "2019-04-17T00:08:50.466089Z",\n      "numActions": 1,\n      "producerAddress": "io1sxm6zl56um2c3ntq5fwqjar4za5ka560x53muy",\n      "transferAmount": "0",\n      "txRoot": "285ff4de28a16dafc49d8c46d24fa99433ac08f24be8962c7a01ade65068a34a",\n      "receiptRoot": "60d78681f8e531307e9ef1916f8ff8d387d922e47d0459e14d575f40ac042195",\n      "deltaStateDigest": "206c92297a78c59ff6fe3a6351e755fda8ae9bb40b25084e0588b0af43445ca7"\n    },\n    {\n      "hash": "47406baaee6af2775ef61c46373b6d0202b228f11e1a7a2f986f7d617f64f593",\n      "height": 2,\n      "timestamp": "2019-04-17T00:09:00.465902Z",\n      "numActions": 1,\n      "producerAddress": "io1sxm6zl56um2c3ntq5fwqjar4za5ka560x53muy",\n      "transferAmount": "0",\n      "txRoot": "d63be4dc98821a28410f694a4fd71179e79db638496a9510c67e5b1a0fc0dac4",\n      "receiptRoot": "89cd1950dc9b51f8cf7078ffb38046d31e421c3add9c06abdd3cbcc99e5bf265",\n      "deltaStateDigest": "8a7d0cee0eb6b6010088e0b4a2996668a29eb595ea83533b9e33fdecc15bf758"\n    }\n  ]\n}\n'
                      )
                    ])
                  ])
                ]),
                n("h2", { attrs: { id: "getblockmetasbyhash" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#getblockmetasbyhash" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" GetBlockMetasByHash")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  Get Block Metadata By Block Hash\nRequest:\n  ByHash: GetBlockMetaByHashRequest\n    -BlkHash: Block Hash\nResponse:\n  BlkMetas: Block Metadata\n"
                      )
                    ])
                  ])
                ]),
                n("p", [e._v("Example:")]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        '➜  ~ grpcurl -d \'{"byHash": {"blkHash": "230ba8095d5a505e355652f9dcc2b13605419a8fa3d3fd5ddc6d24fd6a902641"}}\' api.mainnet.iotex.one:443 iotexapi.APIService.GetBlockMetas\n\n{\n  "blkMetas": [\n    {\n      "hash": "230ba8095d5a505e355652f9dcc2b13605419a8fa3d3fd5ddc6d24fd6a902641",\n      "height": "1",\n      "timestamp": "2019-04-22T02:06:30Z",\n      "numActions": "2",\n      "producerAddress": "io1vtm2zgn830pn6auc2cvnchgwdaefa9gr4z0s86",\n      "transferAmount": "0",\n      "txRoot": "1d2a8f412b80a23af5dfd795139a9567e21bbd674c42c48baa0722c8fed828a0",\n      "receiptRoot": "b325892694c3ab543e6c44da18a25542d140c892391f061fadac47cf1f42d803",\n      "deltaStateDigest": "7a59812644c0c5188e52ed028ed335c5226f27ea7343647cd1cd19fd2a3e334f"\n    }\n  ],\n  "total": "1"\n}\n'
                      )
                    ])
                  ])
                ]),
                n("h2", { attrs: { id: "getchainmeta" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#getchainmeta" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" GetChainMeta")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  Get Blockchain Metadata\nRequest:\n  N/A\nResponse:\n  ChainMeta: Blockchain Metadata\n"
                      )
                    ])
                  ])
                ]),
                n("p", [e._v("Example:")]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        '➜  ~ grpcurl api.iotex.one:443 iotexapi.APIService.GetChainMeta\n\n{\n  "chainMeta": {\n    "height": 88,\n    "numActions": 90,\n    "epoch": {\n      "num": 2,\n      "height": 49,\n      "gravityChainStartHeight": 49\n    }\n  }\n}\n'
                      )
                    ])
                  ])
                ]),
                n("h2", { attrs: { id: "getservermeta" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#getservermeta" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" GetServerMeta")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  Get Server Metadata\nRequest:\n  N/A\nReponse:\n  ServerMeta: Server Metadata\n"
                      )
                    ])
                  ])
                ]),
                n("p", [e._v("Example:")]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        '➜  ~ grpcurl api.iotex.one:443 iotexapi.APIService.GetServerMeta\n\n{\n  "serverMeta": {\n    "packageVersion": "v0.7.0-35-g3baac429",\n    "packageCommitID": "3baac429420ae74a2d1e97a866f745ca796fc192",\n    "gitStatus": "clean",\n    "goVersion": "go version go1.12.5 darwin/amd64",\n    "buildTime": "2019-06-17-PDT/16:32:37"\n  }\n}\n'
                      )
                    ])
                  ])
                ]),
                n("h2", { attrs: { id: "sendaction" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#sendaction" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" SendAction")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  Send Action\nRequest:\n  Action: Action\nResponse:\n  ActionHash: Hash of Action\n"
                      )
                    ])
                  ])
                ]),
                n("p", [e._v("Example:")]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        '➜  ~ grpcurl -plaintext -d \'{"action": {"core": {"version": 1, "nonce": 2, "gasLimit": 10000, "gasPrice": "10", "transfer": {"amount": "100", "recipient": "io1sxm6zl56um2c3ntq5fwqjar4za5ka560x53muy"}}, "senderPubKey": "BOk7WxyPumkmNlKkg61VMY5O7VtRIjFMt/2wd9jHKVCXzsku5QsRCNx0lalyDlkh5W0wSON6vmpnFtfJuRPp8uY=", "signature": "9mrqFBggiRocZhkRVUswxs83NaEFNdEYYczI8049vlovHEP4YMQz+3Isznc3CrYaJxAbc2PTIz7y2meerJ8bHAA="}}\' 127.0.0.1:14014 iotexapi.APIService.SendAction\n\n{\n  "actionHash": "8890dca441898a3d942de05f7514f32c96afbcde1493ddd76aed1aaecb60af06"\n}\n'
                      )
                    ])
                  ])
                ]),
                n("h2", { attrs: { id: "getreceiptbyaction" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#getreceiptbyaction" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" GetReceiptByAction")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  Get Action Receipt By Action Hash\nRequest:\n  ActionHash: Action Hash\nResponse:\n  Receipt: Action Receipt\n"
                      )
                    ])
                  ])
                ]),
                n("p", [e._v("Example:")]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        '➜  ~ grpcurl -d \'{"actionHash": "dd2e83336f1ff219b1e54558f0627e1f556ed2caeedb44b758b0e107aa246531"}\' api.mainnet.iotex.one:443 iotexapi.APIService.GetReceiptByAction\n{\n  "receiptInfo": {\n    "receipt": {\n      "status": "1",\n      "blkHeight": "1",\n      "actHash": "3S6DM28f8hmx5UVY8GJ+H1Vu0sru20S3WLDhB6okZTE=",\n      "contractAddress": "io154mvzs09vkgn0hw6gg3ayzw5w39jzp47f8py9v",\n      "logs": [\n        {\n          "contractAddress": "io154mvzs09vkgn0hw6gg3ayzw5w39jzp47f8py9v",\n          "data": "EilpbzFjNXp3aDI0cGM0ejg3dHF3NG02ejZjNHk1NDRwd3N2OG5ycm02NhoUMTYwMDAwMDAwMDAwMDAwMDAwMDA=",\n          "blkHeight": "1",\n          "actHash": "3S6DM28f8hmx5UVY8GJ+H1Vu0sru20S3WLDhB6okZTE="\n        }\n      ]\n    },\n    "blkHash": "230ba8095d5a505e355652f9dcc2b13605419a8fa3d3fd5ddc6d24fd6a902641"\n  }\n}\n'
                      )
                    ])
                  ])
                ]),
                n("h2", { attrs: { id: "readcontract" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#readcontract" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" ReadContract")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  Read Contract State\nRequest:\n  Action: Action (Must Be An Execution)\nResponse:\n  Data: Return Value in Execution Receipt\n"
                      )
                    ])
                  ])
                ]),
                n("p", [e._v("Example:")]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        '➜  ~ grpcurl -plaintext -d \'{"action": {"core": {"version": 1, "nonce": 2, "gasLimit": 10000, "gasPrice": "10", "execution": {"amount": "0", "contract": ""}}, "senderPubKey": "BOk7WxyPumkmNlKkg61VMY5O7VtRIjFMt/2wd9jHKVCXzsku5QsRCNx0lalyDlkh5W0wSON6vmpnFtfJuRPp8uY=", "signature": "9mrqFBggiRocZhkRVUswxs83NaEFNdEYYczI8049vlovHEP4YMQz+3Isznc3CrYaJxAbc2PTIz7y2meerJ8bHAA="}}\' 127.0.0.1:14014 iotexapi.APIService.ReadContract\n\n{\n  "receipt": {\n    "status": 1,\n    "blkHeight": 26,\n    "actHash": "2bAgDlDdF84K+XNCW95wdjMpmQqVP2b04ghyMXoN6J4=",\n    "gasConsumed": 10000,\n    "contractAddress": "io18vlvlj0v02yye70kpqtzhu4uek3qqz27zm7g42"\n  }\n}\n'
                      )
                    ])
                  ])
                ]),
                n("h2", { attrs: { id: "readstate" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#readstate" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" ReadState")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  Read State on Blockchain\nRequest:\n  ProtocolID: Protocol ID\n  MethodName: Method To Be Invoked To Read State\n  Arguments: List of Method Arguments\n  Height: BlockHeight of Request // optional, if empty, read from tip\nResponse:\n  Data: State Result\n"
                      )
                    ])
                  ])
                ]),
                n("p", [e._v("Example:")]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        '➜  ~ grpcurl -d \'{"protocolID": "cmV3YXJkaW5n", "methodName": "VW5jbGFpbWVkQmFsYW5jZQ==", "arguments": "aW8xanV2eDVnMDYzZXU0dHM4MzJudWtwNHZnY3drMmduYzVjdTlheWQ="}\' api.iotex.one:443 iotexapi.APIService.ReadState\n\n{\n  "data": "MA=="\n}\n'
                      )
                    ])
                  ])
                ]),
                n("h2", { attrs: { id: "suggestgasprice" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#suggestgasprice" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" SuggestGasPrice")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  Get Suggested Gas Price\nRequest:\n  N/A\nResponse:\n  GasPrice: Gas Price\n"
                      )
                    ])
                  ])
                ]),
                n("p", [e._v("Example:")]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        '➜  ~ grpcurl api.iotex.one:443 iotexapi.APIService.SuggestGasPrice\n\n{\n  "gasPrice": 1\n}\n'
                      )
                    ])
                  ])
                ]),
                n("h2", { attrs: { id: "estimategasforaction" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#estimategasforaction" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" EstimateGasForAction")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  Get Estimated Gas For Action\nRequest:\n  Action: Action\nResponse:\n  Gas: Gas\n"
                      )
                    ])
                  ])
                ]),
                n("p", [e._v("Example:")]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        '➜  ~ grpcurl -d \'{"action": {"core": {"version": 1, "nonce": 2, "gasLimit": 10000, "gasPrice": "10", "execution": {"amount": "0", "contract": ""}}, "senderPubKey": "BOk7WxyPumkmNlKkg61VMY5O7VtRIjFMt/2wd9jHKVCXzsku5QsRCNx0lalyDlkh5W0wSON6vmpnFtfJuRPp8uY=", "signature": "9mrqFBggiRocZhkRVUswxs83NaEFNdEYYczI8049vlovHEP4YMQz+3Isznc3CrYaJxAbc2PTIz7y2meerJ8bHAA="}}\' api.iotex.one:443 iotexapi.APIService.EstimateGasForAction\n\n{\n  "gas": 10000\n}\n'
                      )
                    ])
                  ])
                ]),
                n("h2", { attrs: { id: "getepochmeta" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#getepochmeta" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" GetEpochMeta")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  Get Epoch Metadata Given an Epoch Number\nRequest:\n  EpochNumber: Epoch Number\nResponse:\n  EpochData: Basic Epoch Information\n  TotalBlocks: Number of Blocks in the Epoch\n  BlockProducersInfo: List of Block Producer Information\n"
                      )
                    ])
                  ])
                ]),
                n("p", [e._v("Example:")]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        '➜  ~ grpcurl -d \'{"epochNumber": 1}\' api.iotex.one:443 iotexapi.APIService.GetEpochMeta\n\n{\n  "epochData": {\n    "num": 1,\n    "height": 1,\n    "gravityChainStartHeight": 7502300\n  },\n  "totalBlocks": 360,\n  "blockProducersInfo": [\n    {\n      "address": "io1gh7xfrsnj6p5uqgjpk9xq6jg9na28aewgp7a9v",\n      "votes": "10000000000000000000000000",\n      "active": true,\n      "production": 15\n    },\n    {\n      "address": "io1scs89jur7qklzh5vfrmha3c40u8yajjx6kvzg9",\n      "votes": "10000000000000000000000000",\n      "active": true,\n      "production": 15\n    },\n    {\n      "address": "io159fv8mu9d5djk8u2t0flgw4yqmt6fg98uqjka8",\n      "votes": "10000000000000000000000000",\n      "active": true,\n      "production": 15\n    },\n    {\n      "address": "io1cup9k8hl8fp40vrj29ex8djc346780dk223end",\n      "votes": "10000000000000000000000000",\n      "active": true,\n      "production": 15\n    },\n    {\n      "address": "io1wv5m0xyermvr2n0wjx2cjsqwyk863drdl5qfyn",\n      "votes": "10000000000000000000000000",\n      "active": true,\n      "production": 15\n    },\n    {\n      "address": "io1gf08snppu2a2wfd50pjas2j6q2kcxjzqph3pep",\n      "votes": "10000000000000000000000000",\n      "active": true,\n      "production": 15\n    },\n    {\n      "address": "io1u5ff879gg2dw9vfpxr2tsmuaz07e2rea6gvl7s",\n      "votes": "10000000000000000000000000",\n      "active": true,\n      "production": 15\n    },\n    {\n      "address": "io1ar5l5s268rtgzshltnqv88mua06ucm58dx678y",\n      "votes": "10000000000000000000000000",\n      "active": true,\n      "production": 15\n    },\n    {\n      "address": "io1xsx5n94kg2zv64r7tm8vyz9mh86amfak9ka9xx",\n      "votes": "10000000000000000000000000",\n      "active": true,\n      "production": 15\n    },\n    {\n      "address": "io1x9kjkr0qv2fa7j4t2as8lrj223xxsqt4tl7xp7",\n      "votes": "10000000000000000000000000",\n      "active": true,\n      "production": 15\n    },\n    {\n      "address": "io1fks575kklxafq4fwjccmz5d3pmq5ynxk5h6h0v",\n      "votes": "10000000000000000000000000",\n      "active": true,\n      "production": 15\n    },\n    {\n      "address": "io1vtm2zgn830pn6auc2cvnchgwdaefa9gr4z0s86",\n      "votes": "10000000000000000000000000",\n      "active": true,\n      "production": 15\n    },\n    {\n      "address": "io12yxdwewry70gr9fs6fphyfaky9c7gurmzk8f4f",\n      "votes": "10000000000000000000000000",\n      "active": true,\n      "production": 15\n    },\n    {\n      "address": "io1c3r4th3zrk4uhv83a9gr4gvn3y6pzaj6mc84ea",\n      "votes": "10000000000000000000000000",\n      "active": true,\n      "production": 15\n    },\n    {\n      "address": "io15fqav3tugm96ge7anckx0k4gukz5m4mqf0jpv3",\n      "votes": "10000000000000000000000000",\n      "active": true,\n      "production": 15\n    },\n    {\n      "address": "io14vmhs9c75r2ptxdaqrtk0dz7skct30pxmt69d9",\n      "votes": "10000000000000000000000000",\n      "active": true,\n      "production": 15\n    },\n    {\n      "address": "io1v0q5g2f8z6l3v25krl677chdx7g5pwt9kvqfpc",\n      "votes": "10000000000000000000000000",\n      "active": true,\n      "production": 15\n    },\n    {\n      "address": "io1z7mjef7w528nasnsafan0rp6yuvkvq405l6r8j",\n      "votes": "10000000000000000000000000",\n      "active": true,\n      "production": 15\n    },\n    {\n      "address": "io1xsdegzr2hdj5sv5ad4nr0yfgpsd98e40u6svem",\n      "votes": "10000000000000000000000000",\n      "active": true,\n      "production": 15\n    },\n    {\n      "address": "io1nyjs526mnqcsx4twa7nptkg08eclsw5c2dywp4",\n      "votes": "10000000000000000000000000",\n      "active": true,\n      "production": 15\n    },\n    {\n      "address": "io1du4eq4f88n4wyc026l3gamjwetlgsg4jz7j884",\n      "votes": "10000000000000000000000000",\n      "active": true,\n      "production": 15\n    },\n    {\n      "address": "io127ftn4ry6wgxdrw4hcd6gdwqlq70ujk98dvtw5",\n      "votes": "10000000000000000000000000",\n      "active": true,\n      "production": 15\n    },\n    {\n      "address": "io1jafqlvntcxgyp6e0uxctt3tljzc3vyv5hg4ukh",\n      "votes": "10000000000000000000000000",\n      "active": true,\n      "production": 16\n    },\n    {\n      "address": "io15npzu93ug8r3zdeysppnyrcdu2xssz0lcam9l9",\n      "votes": "10000000000000000000000000",\n      "active": true,\n      "production": 14\n    }\n  ]\n}\n'
                      )
                    ])
                  ])
                ]),
                n("h2", { attrs: { id: "getrawblocks" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#getrawblocks" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" GetRawBlocks")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  Get A List of Raw Block Data\nRequest:\n  StartHeight: Start Block Height\n  Count: Block Count\n  WithReceipts: Whether to Include Action Receipts in Each Returned Block\nResponse:\n  Blocks: A List of Raw Block Data\n"
                      )
                    ])
                  ])
                ]),
                n("p", [e._v("Example:")]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        '➜  ~ grpcurl -d \'{"startHeight": 1, "count": 2, "withReceipts": true}\' api.mainnet.iotex.one:443 iotexapi.APIService.GetRawBlocks\n\n{\n  "blocks": [\n    {\n      "block": {\n        "header": {\n          "core": {\n            "version": 1,\n            "height": 1,\n            "timestamp": "2019-06-17T23:33:04.755448Z",\n            "prevBlockHash": "N9XWktUXQo60gwwqV17n5trTKkbUp/Ob6UY841g+AtA=",\n            "txRoot": "5Pn9BOMAgzj0LX9o6AD8O/FbDueiA5eS+9MUMzQ6QwY=",\n            "deltaStateDigest": "tE9Ywa/2MvNDO7F8scFh9/4ijrGXTClVunKbp5eeU8M=",\n            "receiptRoot": "EbGK2TCBJbVMEn04tBRy0PdceJ1O2N3IxnU7Fggjl2o="\n          },\n          "producerPubkey": "BB5cvAz6DM+BTzw9RADTmMqz0WPDofHDEGQ2kNl20p49+i0O2b5yH6Xc7EeqethWkyI8nw1BrrRleRkqfsHU9m8=",\n          "signature": "oZxrQvUteVeq+SMCxg6I+MwJ4IkKWFzDhFi3hIQ9j9IYL69RRWsRc+pxXAjdfRCiLuCXGnkaP+nUXnR3Atm8EwA="\n        },\n        "body": {\n          "actions": [\n            {\n              "core": {\n                "version": 1,\n                "gasPrice": "0",\n                "grantReward": {\n                  "height": 1\n                }\n              },\n              "senderPubKey": "BB5cvAz6DM+BTzw9RADTmMqz0WPDofHDEGQ2kNl20p49+i0O2b5yH6Xc7EeqethWkyI8nw1BrrRleRkqfsHU9m8=",\n              "signature": "gE9H+i0EZNTVHhoX7fq4xn6H8FqBrFKK0YyfcH16mrFT0rSvgVDb/ov2hAwgMh5kJVHaD8TG6UX7fayK5lpCXQA="\n            }\n          ]\n        },\n        "footer": {\n          "timestamp": "0001-01-01T00:00:00Z"\n        }\n      },\n      "receipts": [\n        {\n          "blkHeight": 1,\n          "actHash": "5Pn9BOMAgzj0LX9o6AD8O/FbDueiA5eS+9MUMzQ6QwY=",\n          "contractAddress": "io154mvzs09vkgn0hw6gg3ayzw5w39jzp47f8py9v"\n        }\n      ]\n    },\n    {\n      "block": {\n        "header": {\n          "core": {\n            "version": 1,\n            "height": 2,\n            "timestamp": "2019-06-17T23:33:14.756354Z",\n            "prevBlockHash": "7bI37oyjBvl+TTx5Fw089xCe8AJb7YneCsmqOLiJ88k=",\n            "txRoot": "qQZkW9iZ+xsl0SjVJmsIDDpQ9RcWyge/sBcvHOZFgKQ=",\n            "deltaStateDigest": "S7dJ9+p/BUNaiRFQLl6+Lc/u5B5s4jlJ5LldIFwof9c=",\n            "receiptRoot": "S2ZBa1FtEUSDmBqTbnS4w4RfhHfyyDJofaxL1U36+9I="\n          },\n          "producerPubkey": "BB5cvAz6DM+BTzw9RADTmMqz0WPDofHDEGQ2kNl20p49+i0O2b5yH6Xc7EeqethWkyI8nw1BrrRleRkqfsHU9m8=",\n          "signature": "s/JZHbuZaMKOqWACHsGbezciRBSS7XYU9QuY2w3BgM8pEYWtYXZYWVJiHU3r0Z1Z7PXFMKc1glpONXkLiXwReQA="\n        },\n        "body": {\n          "actions": [\n            {\n              "core": {\n                "version": 1,\n                "gasPrice": "0",\n                "grantReward": {\n                  "height": 2\n                }\n              },\n              "senderPubKey": "BB5cvAz6DM+BTzw9RADTmMqz0WPDofHDEGQ2kNl20p49+i0O2b5yH6Xc7EeqethWkyI8nw1BrrRleRkqfsHU9m8=",\n              "signature": "gMlB2v2RwSHnNuilZX89K+EOtCKDfmfouI97GO+DcU82VHm9LE4NG1TVgUQe6z94aOSHrEwyUKtINuv5QOmNIgA="\n            }\n          ]\n        },\n        "footer": {\n          "timestamp": "0001-01-01T00:00:00Z"\n        }\n      },\n      "receipts": [\n        {\n          "blkHeight": 2,\n          "actHash": "qQZkW9iZ+xsl0SjVJmsIDDpQ9RcWyge/sBcvHOZFgKQ=",\n          "contractAddress": "io154mvzs09vkgn0hw6gg3ayzw5w39jzp47f8py9v"\n        }\n      ]\n    }\n  ]\n}\n'
                      )
                    ])
                  ])
                ]),
                n("h2", { attrs: { id: "streamblocks" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#streamblocks" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" StreamBlocks")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  Subscribe to Block Creations\nRequest:\n  N/A\nResponse:\n  Block: Newly Created Block Data\n"
                      )
                    ])
                  ])
                ]),
                n("p", [e._v("Example:")]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        '➜  ~ grpcurl api.mainnet.iotex.one:443 iotexapi.APIService.StreamBlocks\n\n{\n  "block": {\n    "block": {\n      "header": {\n        "core": {\n          "version": 1,\n          "height": 365,\n          "timestamp": "2019-06-18T00:36:41.655617Z",\n          "prevBlockHash": "p3qrdtYuIfan08r8ZB4JFdpjaYAWUMGLrsxxn/nGO6g=",\n          "txRoot": "F484nSOb8CVSNZiOETu1eEfgbwW9kGjX+zFv/OXaAvI=",\n          "deltaStateDigest": "z9zsiQmR7MZh6uEBPMgPGO5snxq1YJW9ESCoZun/fD4=",\n          "receiptRoot": "8Xb+12FYKrbN2mM4UiFd3htkyagI8U5xX8mtUJegmgY="\n        },\n        "producerPubkey": "BB5cvAz6DM+BTzw9RADTmMqz0WPDofHDEGQ2kNl20p49+i0O2b5yH6Xc7EeqethWkyI8nw1BrrRleRkqfsHU9m8=",\n        "signature": "7qJKGnbCDJsfSWxuE9NYsFiqwxr6Urgz6NNu6KUZuWhygPDrEpD6uC4qgqplwFXXF7Zhlclwh7UQlaEcL0i5ZAE="\n      },\n      "body": {\n        "actions": [\n          {\n            "core": {\n              "version": 1,\n              "gasPrice": "0",\n              "grantReward": {\n                "height": 365\n              }\n            },\n            "senderPubKey": "BB5cvAz6DM+BTzw9RADTmMqz0WPDofHDEGQ2kNl20p49+i0O2b5yH6Xc7EeqethWkyI8nw1BrrRleRkqfsHU9m8=",\n            "signature": "WWDGUs/EbG1mvTc2MAD06YSZ71bnXK9BBCzTezn2aQBKZCB2PiKbuzQM43dB7AZVmmY0Q7A/JOHqgq/TyZyi1wA="\n          }\n        ]\n      },\n      "footer": {\n        "timestamp": "0001-01-01T00:00:00Z"\n      }\n    },\n    "receipts": [\n      {\n        "blkHeight": 365,\n        "actHash": "F484nSOb8CVSNZiOETu1eEfgbwW9kGjX+zFv/OXaAvI=",\n        "contractAddress": "io154mvzs09vkgn0hw6gg3ayzw5w39jzp47f8py9v"\n      }\n    ]\n  }\n}\n'
                      )
                    ])
                  ])
                ]),
                n("h2", { attrs: { id: "streamlogs" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#streamlogs" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" StreamLogs")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  Get Logs filtered by contract address and Topics in stream\nRequest:\n  Filter: LogsFilter\n    -Address: List of Addresses\n    -Topics: List of Topics\n\nResponse:\n  Logs: List of Logs\n"
                      )
                    ])
                  ])
                ]),
                n("p", [e._v("Example:")]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        '➜  ~ grpcurl -d \'{"filter": {}}\'  api.mainnet.iotex.one:443 iotexapi.APIService.StreamLogs\n\n{\n  "log": {\n    "contractAddress": "io154mvzs09vkgn0hw6gg3ayzw5w39jzp47f8py9v",\n    "data": "EilpbzEybWd0dG1mYTJmZm45dXF2bjB5bjM3ZjRuejQzZDI0OGwyZ2E4NRoTODAwMDAwMDAwMDAwMDAwMDAwMA==",\n    "blkHeight": "4861831",\n    "actHash": "f4P6zde4DcxSG+zLP8LsBXR/gwsXA8ZzMsrDI38swkw="\n  }\n}\n\n'
                      )
                    ])
                  ])
                ]),
                n(
                  "h2",
                  { attrs: { id: "estimateactiongasconsumptionbytransfer" } },
                  [
                    n(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#estimateactiongasconsumptionbytransfer"
                        }
                      },
                      [e._v("#")]
                    ),
                    e._v(" EstimateActionGasConsumptionByTransfer")
                  ]
                ),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  Get Estimated Action Gas Consumption By Transfer\nRequest:\n  Transfer: iotextypes.Transfer\n    -Amount: Transfer Amount\n    -Recipient: Recipient Address\n    -Payload: Payload\n  CallerAddress: Address of Caller\n\nResponse:\n  Gas: Estimated Gas Amount\n"
                      )
                    ])
                  ])
                ]),
                n("p", [e._v("Example:")]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        '➜  ~ grpcurl -d \'{"transfer": {"amount":"100000", "recipient":"io1juvx5g063eu4ts832nukp4vgcwk2gnc5cu9ayd"}, "callerAddress": "io1juvx5g063eu4ts832nukp4vgcwk2gnc5cu9ayd"}\'  api.mainnet.iotex.one:443 iotexapi.APIService.EstimateActionGasConsumption\n\n{\n  "gas": "10000"\n}\n'
                      )
                    ])
                  ])
                ]),
                n(
                  "h2",
                  { attrs: { id: "estimateactiongasconsumptionbyexecution" } },
                  [
                    n(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#estimateactiongasconsumptionbyexecution"
                        }
                      },
                      [e._v("#")]
                    ),
                    e._v(" EstimateActionGasConsumptionByExecution")
                  ]
                ),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  Get Estimated Action Gas Consumption By Execution\nRequest:\n  Execution: iotextypes.Execution\n    -Amount: Execution Amount\n    -Contract: Contract Address\n    -Data: Data\n  CallerAddress: Address of Caller\n\nResponse:\n  Gas: Estimated Gas Amount\n"
                      )
                    ])
                  ])
                ]),
                n("p", [e._v("Example:")]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        '➜  ~ grpcurl -d \'{"execution": {"amount":"0", "contract":"io154mvzs09vkgn0hw6gg3ayzw5w39jzp47f8py9v"}, "callerAddress": "io1juvx5g063eu4ts832nukp4vgcwk2gnc5cu9ayd"}\' api.mainnet.iotex.one:443 iotexapi.APIService.EstimateActionGasConsumption\n\n{\n  "gas": "10000"\n}\n'
                      )
                    ])
                  ])
                ]),
                n("h2", { attrs: { id: "getlogsbyblock" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#getlogsbyblock" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" GetLogsByBlock")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  Get Logs filtered by contract address and Topics with given Block hash\nRequest:\n  Filter: LogsFilter\n    -Address: List of Addresses\n    -Topics: List of Topics\n  ByBlock: GetLogsByBlock\n    -BlockHash: blockhash\n\nResponse:\n  Logs: List of Logs\n"
                      )
                    ])
                  ])
                ]),
                n("p", [e._v("Example:")]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        '➜  ~ grpcurl -v -plaintext -d \'{"filter": {}, "byBlock": {"blockHash": "221e7f14dddd57a739975b943bfffb1cbfcffa1ee043cf693b92af987e42ed93"}}\' api.mainnet.iotex.one:443 iotexapi.APIService.GetLogs\n\n\n'
                      )
                    ])
                  ])
                ]),
                n("h2", { attrs: { id: "getlogsbyrange" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#getlogsbyrange" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" GetLogsByRange")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  Get Logs filtered by contract address and Topics with given Range\nRequest:\n  Filter: LogsFilter\n    -Address: List of Addresses\n    -Topics: List of Topics\n  ByRange: GetLogsByRange\n    -FromBlock: Start Block Height\n    -Count: Count of Blocks\n\nResponse:\n  Logs: List of Logs\n"
                      )
                    ])
                  ])
                ]),
                n("p", [e._v("Example:")]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        '➜  ~ grpcurl -d \'{"filter": {}, "byRange": {"fromBlock": "12000", "count": "2"}}\' api.mainnet.iotex.one:443 iotexapi.APIService.GetLogs\n\n{\n  "logs": [\n    {\n      "contractAddress": "io154mvzs09vkgn0hw6gg3ayzw5w39jzp47f8py9v",\n      "data": "EilpbzFjNXp3aDI0cGM0ejg3dHF3NG02ejZjNHk1NDRwd3N2OG5ycm02NhoUMTYwMDAwMDAwMDAwMDAwMDAwMDA=",\n      "blkHeight": "12000",\n      "actHash": "NDSsKbgjqU5jP4LWr2xoq/kpu9s8g0C4tpF/PiDTFkI="\n    },\n    {\n      "contractAddress": "io154mvzs09vkgn0hw6gg3ayzw5w39jzp47f8py9v",\n      "data": "EilpbzFjNXp3aDI0cGM0ejg3dHF3NG02ejZjNHk1NDRwd3N2OG5ycm02NhoUMTYwMDAwMDAwMDAwMDAwMDAwMDA=",\n      "blkHeight": "12001",\n      "actHash": "6+RK0qv5kZ3nJ014NqLlEadmnMaMS1KPWkE5mZLmSGA="\n    }\n  ]\n}\n\n'
                      )
                    ])
                  ])
                ]),
                n("h2", { attrs: { id: "getevmtransfersbyactionhash" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#getevmtransfersbyactionhash" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" GetEvmTransfersByActionHash")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  Get EVM Transfer By Action Hash\nRequest:\n  ActionHash: Action Hash\n\nResponse:\n  ActionEvmTransfers: Action EVM transfer\n"
                      )
                    ])
                  ])
                ]),
                n("p", [e._v("Example:")]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        '➜  ~ grpcurl -d \'{"actionHash":"b0a0af2b5b33dcf58a41e6c3edfee9c0352ada249f242c1024d920895c446e69"}\' api.mainnet.iotex.one:443 iotexapi.APIService.GetEvmTransfersByActionHash\n\n{\n  "actionEvmTransfers": [\n    {\n      "actionHash": "2bAgDlDdF84K+XNCW95wdjMpmQqVP2b04ghyMXoN6J4=",\n      "numEvmTransfers": 1,\n      "evmTransfers": [\n        {\n          "amount": "cmNxZ2pzeGZkeHpzenp0cHlkemx6YSFJIVG5KdXU5OD=",\n          "from": "io1cl6rl2ev5dfa988qmgzg2x4hfazmp9vn2g66ng",\n          "to": "ioaa77fbf8596e0de5ce362dbd5ab29599a6c38ac"\n        }\n      ]\n    }\n  ]\n}\n\n'
                      )
                    ])
                  ])
                ]),
                n("h2", { attrs: { id: "getevmtransfersbyblockheight" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#getevmtransfersbyblockheight" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" GetEvmTransfersByBlockHeight")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  Get EVM Transfer By Block Height\nRequest:\n  BlockHeight: Block Height\n\nResponse:\n  BlockEvmTransfers: Block EVM transfer\n"
                      )
                    ])
                  ])
                ]),
                n("p", [e._v("Example:")]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        '➜  ~ grpcurl -d \'{"blockHeight":"12371"}\' api.mainnet.iotex.one:443 iotexapi.APIService.GetEvmTransfersByBlockHeight\n\n{\n  "blockEvmTransfers": [\n    {\n      "blockHeight": 12371,\n      "numEvmTransfers": 1,\n      "actionEvmTransfers": [\n        {\n          "actionHash": "2bAgDlDdF84K+XNCW95wdjMpmQqVP2b04ghyMXoN6J4=",\n          "numEvmTransfers": 1,\n          "evmTransfers": [\n            {\n              "amount": "cmNxZ2pzeGZkeHpzenp0cHlkemx6YSFJIVG5KdXU5OD=",\n              "from": "io1cl6rl2ev5dfa988qmgzg2x4hfazmp9vn2g66ng",\n              "to": "ioaa77fbf8596e0de5ce362dbd5ab29599a6c38ac"\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n\n'
                      )
                    ])
                  ])
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
      a.default = s.exports;
    }
  }
]);
