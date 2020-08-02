(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    561: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n(69),
        s = Object(a.a)(
          {},
          function() {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t;
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
                    "Analytics is an application built upon IoTeX core API which extracts data from IoTeX blockchain and reindexes them for applications to use via a GraphQL web interface. You can use the playground "
                  ),
                  n(
                    "a",
                    {
                      attrs: {
                        href: "https://analytics.iotexscan.io",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [e._v("here"), n("OutboundLink")],
                    1
                  ),
                  e._v(".")
                ]),
                e._v(" "),
                n("h2", { attrs: { id: "delegate" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#delegate" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" Delegate")
                ]),
                e._v(" "),
                n("h3", { attrs: { id: "bookkeeping" } }, [
                  n(
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
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  Bookkeeping gives delegates an overview of the reward distributions to their voters within a range of epochs\n\nRequest:\n  startEpoch: starting epoch number\n  epochCount: epoch count\n  delegateName: delegate name\n  percentage: percentage of reward distribution\n  includeFoundationBonus: whether include foundation bonus as part of the reward distribution\n  pagination:\n    skip: starting index of displaying reward distribution list\n    first: number of reward distributions to display\n\nResponse:\n  exist: whether the delegate has bookkeeping information within the specified epoch range\n  rewardDistribution:\n    voterEthAddress: voter’s ERC20 address\n    voterIotexAddress: voter’s IoTeX address\n    amount: amount of reward distribution\n  count:  total number of reward distributions\n"
                      )
                    ])
                  ])
                ]),
                n("h3", { attrs: { id: "productivity" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#productivity" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" Productivity")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  Productivity gives block productivity of producers within a range of epochs\n\nRequest:\n  startEpoch: starting epoch number\n  epochCount: epoch count\n  delegateName: producer name\n\nResponse:\n  exist: whether the delegate has productivity information within the specified epoch range\n  production: number of block productions\n  expectedProduction: number of expected block productions\n"
                      )
                    ])
                  ])
                ]),
                n("h3", { attrs: { id: "reward" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#reward" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" Reward")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  Rewards provides reward detail information for candidates within a range of epochs\n\nRequest:\n  startEpoch: starting epoch number\n  epochCount: epoch count\n  delegateName: candidate name\n\nResponse:\n  exist: whether the delegate has reward information within the specified epoch range\n  blockReward: amount of block rewards\n  epochReward: amount of epoch rewards\n  foundationBonus: amount of foundation bonus\n"
                      )
                    ])
                  ])
                ]),
                n("h3", { attrs: { id: "bucketinfo" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#bucketinfo" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" BucketInfo")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  BucketInfo provides voting bucket detail information for candidates within a range of epochs\n\nRequest:\n  startEpoch: starting epoch number\n  epochCount: epoch count\n  delegateName: candidate name\n\nResponse:\n  exist: whether the delegate has voting bucket information within the specified epoch range\n  bucketInfoList:\n    epochNumber: epoch number\n    bucketInfo:\n      voterIotexAddress: voter's IoTeX address\n      voterEthAddress: voter’s ERC20 address\n      isNative: whether the bucket is native\n      votes: voter's votes\n      weightedVotes: voter’s weighted votes\n      startTime: bucket start time\n      remainingDuration: bucket remaining duration\n      decay: whether the vote weight decays\n      pagination:\n        skip: starting index of displaying bucket list\n        first: number of buckets to display\n    count: total number of buckets in the given epoch for the given delegate\n"
                      )
                    ])
                  ])
                ]),
                n("h3", { attrs: { id: "staking" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#staking" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" Staking")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  Staking provides staking information for candidates within a range of epochs\n\nRequest:\n  startEpoch: starting epoch number\n  epochCount: epoch count\n  delegateName: candidate name\n\nResponse:\n  exist: whether the delegate has staking information within the specified epoch range\n  stakingInfo:\n    epochNumber: epoch number\n    selfStaking: candidate’s self-staking amount\n    totalStaking: total staking amount\n"
                      )
                    ])
                  ])
                ]),
                n("h3", { attrs: { id: "probationhistoricalrate" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#probationhistoricalrate" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" ProbationHistoricalRate")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  ProbationHistoricalRate provides the rate of probation for a given delegate\n\nRequest:\n  startEpoch: starting epoch number\n  epochCount: epoch count\n  delegateName: candidate name\n\nResponse:\n  probationHistoricalRate: probation historical rate\n"
                      )
                    ])
                  ])
                ]),
                n("p", [e._v("Demo:")]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        'Sample Request:\n\nquery{\n  delegate(startEpoch: 1500, epochCount: 2, delegateName: "blackpool"){\n    bookkeeping(percentage: 90, includeFoundationBonus: true){\n      exist\n      rewardDistribution(pagination: {skip: 0, first: 2}){\n        voterEthAddress\n        amount\n      }\n      count\n    }\n    reward{\n      exist\n      blockReward\n      epochReward\n      foundationBonus\n    }\n    productivity{\n      exist\n      production\n      expectedProduction\n    }\n    bucketInfo{\n      exist\n      bucketInfoList{\n        epochNumber\n        bucketInfo{\n          voterEthAddress\n          weightedVotes\n        }\n        count\n      }\n    }\n    staking{\n      exist\n      stakingInfo{\n        epochNumber\n        selfStaking\n        totalStaking\n      }\n    }\n    probationHistoricalRate\n  }\n}\n\nSample Response:\n\n{\n  "data": {\n    "delegate": {\n      "bookkeeping": {\n        "exist": true,\n        "rewardDistribution": [\n          {\n            "voterEthAddress": "0x2ed3767cfcbceb42ff5f3642d4df6f851b947073",\n            "amount": "249296733398649281"\n          },\n          {\n            "voterEthAddress": "0x6729cdc9172b00ac69f4ce3f98de2eb4d0686925",\n            "amount": "5264917870144216244"\n          }\n        ],\n        "count": 4\n      },\n      "reward": {\n        "exist": true,\n        "blockReward": "0",\n        "epochReward": "329819772195117893866",\n        "foundationBonus": "160000000000000000000"\n      },\n      "productivity": {\n        "exist": false,\n        "production": "",\n        "expectedProduction": ""\n      },\n      "bucketInfo": {\n        "exist": true,\n        "bucketInfoList": [\n          {\n            "epochNumber": 1500,\n            "bucketInfo": [\n              {\n                "voterEthAddress": "2ed3767cfcbceb42ff5f3642d4df6f851b947073",\n                "weightedVotes": "12050042619210072913916"\n              },\n              {\n                "voterEthAddress": "6729cdc9172b00ac69f4ce3f98de2eb4d0686925",\n                "weightedVotes": "254485824410815439561517"\n              },\n              {\n                "voterEthAddress": "d8e70e5029e5353e8d360365d5273ed329cc4918",\n                "weightedVotes": "3203226341724952466266885"\n              },\n              {\n                "voterEthAddress": "d8e70e5029e5353e8d360365d5273ed329cc4918",\n                "weightedVotes": "2838636602552620757933254"\n              },\n              {\n                "voterEthAddress": "fe7bcb3676aabe9a6b39cb23f3a5fa41eed7ad1b",\n                "weightedVotes": "15000000000000000000000000"\n              }\n            ],\n            "count": 5\n          },\n          {\n            "epochNumber": 1501,\n            "bucketInfo": [\n              {\n                "voterEthAddress": "2ed3767cfcbceb42ff5f3642d4df6f851b947073",\n                "weightedVotes": "12050042619210072913916"\n              },\n              {\n                "voterEthAddress": "6729cdc9172b00ac69f4ce3f98de2eb4d0686925",\n                "weightedVotes": "254485824410815439561517"\n              },\n              {\n                "voterEthAddress": "d8e70e5029e5353e8d360365d5273ed329cc4918",\n                "weightedVotes": "3203226341724952466266885"\n              },\n              {\n                "voterEthAddress": "d8e70e5029e5353e8d360365d5273ed329cc4918",\n                "weightedVotes": "2838636602552620757933254"\n              },\n              {\n                "voterEthAddress": "fe7bcb3676aabe9a6b39cb23f3a5fa41eed7ad1b",\n                "weightedVotes": "15000000000000000000000000"\n              }\n            ],\n            "count": 5\n          }\n        ]\n      },\n      "staking": {\n        "exist": true,\n        "stakingInfo": [\n          {\n            "epochNumber": 1500,\n            "selfStaking": "5039748000000000000000000",\n            "totalStaking": "21308398811307598736675572"\n          },\n          {\n            "epochNumber": 1501,\n            "selfStaking": "5039748000000000000000000",\n            "totalStaking": "21308398811307598736675572"\n          }\n        ]\n      }\n      "probationHistoricalRate": "0.00"\n    }\n  }\n}\n'
                      )
                    ])
                  ])
                ]),
                n("h2", { attrs: { id: "chain" } }, [
                  n(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#chain" } },
                    [e._v("#")]
                  ),
                  e._v(" Chain")
                ]),
                e._v(" "),
                n("h3", { attrs: { id: "mostrecentepoch" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#mostrecentepoch" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" MostRecentEpoch")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  MostRecentEpoch gives the latest epoch number\n\nRequest:\n  N/A\n\nResponse:\n  mostRecentEpoch: latest epoch number\n"
                      )
                    ])
                  ])
                ]),
                n("h3", { attrs: { id: "mostrecentblockheight" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#mostrecentblockheight" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" MostRecentBlockHeight")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  MostRecentBlockHeight gives the latest block height\n\nRequest:\n  N/A\n\nResponse:\n  mostRecentBlockHeight: latest block height\n"
                      )
                    ])
                  ])
                ]),
                n("h3", { attrs: { id: "mostrecenttps" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#mostrecenttps" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" MostRecentTPS")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  MostRecentTPS gives the latest transactions per second\n\nRequest:\n  blockWindow: number of last blocks that are backtracked to compute TPS\n\nResponse:\n  mostRecentTPS: latest transactions per second\n"
                      )
                    ])
                  ])
                ]),
                n("h3", { attrs: { id: "numberofactions" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#numberofactions" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" NumberOfActions")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  NumberOfActions gives the number of actions\n\nRequest:\n  pagination:\n    startEpoch: starting epoch number\n    epochCount: epoch count\n\nResponse:\n  exist: whether the starting epoch number is less than the most recent epoch number\n  count: number of actions\n"
                      )
                    ])
                  ])
                ]),
                n("h3", { attrs: { id: "votingresultmeta" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#votingresultmeta" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" VotingResultMeta")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  VotingResultMeta gives the latest metadata of voting result\n\nRequest:\n  N/A\n\nResponse:\n  totalCandidates: total number of candidates\n  totalWeightedVotes: total weighted votes\n  votedTokens: total voted tokens\n"
                      )
                    ])
                  ])
                ]),
                n("h3", { attrs: { id: "totaltransferredtokens" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#totaltransferredtokens" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" TotalTransferredTokens")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  TotalTransferredTokens gives the amount of tokens transferred within a time frame\n\nRequest:\n  pagination:\n    startEpoch: starting epoch number\n    epochCount: epoch count\n\nResponse:\n  totalTransferredTokens: total tranferred tokens\n"
                      )
                    ])
                  ])
                ]),
                n("p", [e._v("Demo:")]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        'Sample Request:\n\nquery{\n  chain{\n    mostRecentEpoch\n    mostRecentBlockHeight\n    mostRecentTPS(blockWindow: 10)\n    numberOfActions(pagination: {startEpoch: 1, epochCount: 10}){\n      exist\n      count\n    }\n    totalTransferredTokens(pagination:{startEpoch: 1, epochCount: 10})\n  }\n}\n\nSample Response:\n\n{\n  "data": {\n    "chain": {\n      "mostRecentEpoch": 1383,\n      "mostRecentBlockHeight": 497772,\n      "mostRecentTPS": 0,\n      "numberOfActions": {\n        "exist": true,\n        "count": 3622\n      }\n      "totalTransferredTokens": "10000010000000000000000"\n    }\n  }\n}\n'
                      )
                    ])
                  ])
                ]),
                n("h2", { attrs: { id: "voting" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#voting" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" Voting")
                ]),
                e._v(" "),
                n("h3", { attrs: { id: "votingmeta" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#votingmeta" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" VotingMeta")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  VotingMeta provides metadata of voting results\n\nRequest:\n  startEpoch: starting epoch number\n  epochCount: epoch count\n\nReponse:\n  exist: whether the starting epoch number is less than the most recent epoch number\n  candidateMeta:\n    epochNumber:  epoch number\n    consensusDelegates: number of consensus delegates in the epoch\n    totalCandidates: number of total delegates in the epoch\n    totalWeightedVotes: candidate total weighted votes in the epoch\n    votedTokens: total voted tokens in the epoch\n"
                      )
                    ])
                  ])
                ]),
                n("h3", { attrs: { id: "candidateinfo" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#candidateinfo" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" CandidateInfo")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  CandidateInfo provides candidate information\n\nRequest:\n  startEpoch: starting epoch number\n  epochCount: epoch count\n\nReponse:\n  candidateMeta:\n    epochNumber:  epoch number\n    candidates:\n      name: candidate name\n      address: canddiate address\n      totalWeightedVotes: total weighted votes\n      selfStakingTokens: candidate self-staking tokens\n      operatorAddress: candidate operator address\n      rewardAddress: candidate reward address\n"
                      )
                    ])
                  ])
                ]),
                n("h3", { attrs: { id: "rewardsources" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#rewardsources" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" RewardSources")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  RewardSources provides reward sources for voters\n\nRequest:\n  startEpoch: starting epoch number\n  epochCount: epoch count\n  voterIotxAddress: voter IoTeX address\n\nReponse:\n  exist: whether the voter has reward information within the specified epoch range\n  delegateDistributions:\n    delegateName: delegate name\n    amount: amount of reward distribution\n"
                      )
                    ])
                  ])
                ]),
                n("p", [e._v("Demo:")]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        'Sample Request:\n\nquery{\n  voting(startEpoch: 1, epochCount: 3){\n    exist\n    candidateMeta{\n      epochNumber\n      consensusDelegates\n      totalCandidates\n      totalWeightedVotes\n      votedTokens\n    }\n  }\n}\n\nSample Response:\n\n{\n  "data": {\n    "voting": {\n      "exist": true,\n      "candidateMeta": [\n        {\n          "epochNumber": 1,\n          "consensusDelegates": 36,\n          "totalCandidates": 87,\n          "totalWeightedVotes": "907521920724956720472322956",\n          "votedTokens": "776946421831717811810000000"\n        },\n        {\n          "epochNumber": 2,\n          "consensusDelegates": 36,\n          "totalCandidates": 87,\n          "totalWeightedVotes": "907524412616270399722024013",\n          "votedTokens": "776948876231717811810000000"\n        },\n        {\n          "epochNumber": 3,\n          "consensusDelegates": 36,\n          "totalCandidates": 87,\n          "totalWeightedVotes": "907486769208330536874270055",\n          "votedTokens": "776953490231717811810000000"\n        }\n      ]\n    }\n  }\n}\n'
                      )
                    ])
                  ])
                ]),
                n("p", [e._v("Demo:")]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        'Sample Request:\n\nquery{\n\tvoting(startEpoch: 9760, epochCount: 1){\n    votingMeta{\n      candidateMeta{\n        votedTokens\n        totalWeightedVotes\n      }\n    }\n  }\n}\n\nSample Response:\n\n{\n  "data": {\n    "voting": {\n      "votingMeta": {\n        "candidateMeta": [\n          {\n            "votedTokens": "2238183641136247164314750007",\n            "totalWeightedVotes": "2540055496482100272999904251"\n          }\n        ]\n      }\n    }\n  }\n}\n'
                      )
                    ])
                  ])
                ]),
                n("h2", { attrs: { id: "account" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#account" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" Account")
                ]),
                e._v(" "),
                n("h3", { attrs: { id: "activeaccounts" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#activeaccounts" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" ActiveAccounts")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  ActiveAccounts lists most recently active accounts\n\nRequest:\n  count: number of account addresses to be queried for active accounts\n\nResponse:\n  activeAccounts: list of account addresses\n"
                      )
                    ])
                  ])
                ]),
                n("h3", { attrs: { id: "operatoraddress" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#operatoraddress" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" OperatorAddress")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  OperatorAddress finds the delegate's operator address given the delegate's alias name\n\nRequest:\n  aliasName: delegate's alias name\n\nResponse:\n  exist: whether the alias name exists\n  operatorAddress:  operator address associated with the given alias name\n"
                      )
                    ])
                  ])
                ]),
                n("h3", { attrs: { id: "alias" } }, [
                  n(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#alias" } },
                    [e._v("#")]
                  ),
                  e._v(" Alias")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  Alias finds the delegate's alias name given the delegate's operator address\n\nRequest:\n  operatorAddress: delegate's operator address\n\nResponse:\n  exist: whether the operator address exists\n  aliasName: alias name associated with the given operator address\n"
                      )
                    ])
                  ])
                ]),
                n("h3", { attrs: { id: "totalnumberofholders" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#totalnumberofholders" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" TotalNumberOfHolders")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  TotalNumberOfHolders returns total number of IOTX holders so far\nRequest:\n  N/A\nResponse:\n  totalNumberOfHolders: total number of IOTX holders so far\n"
                      )
                    ])
                  ])
                ]),
                n("h3", { attrs: { id: "totalaccountsupply" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#totalaccountsupply" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" TotalAccountSupply")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  TotalAccountSupply returns total amount of tokens held by IoTeX accounts\nRequest:\n  N/A\nResponse:\n  totalAccountSupply: total amount of tokens held by IoTeX accounts\n"
                      )
                    ])
                  ])
                ]),
                n("p", [e._v("Demo:")]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        'Sample Request:\n\nquery{\n  account{\n    activeAccounts(count: 5)\n    operatorAddress(aliasName: "gamefantasy#"){\n      exist\n      operatorAddress\n    }\n    alias(operatorAddress: "io1456knehzn9qup8unxlf4q06empz8lqxtp6v5vh"){\n      exist\n      aliasName\n    }\n    totalNumberOfHolders\n    totalAccountSupply\n  }\n}\n\nSample Response:\n\n{\n  "data": {\n    "account": {\n      "activeAccounts": [\n        "io17cmrextyfeu4gddwd89g5qncedsnc553dhz7xa",\n        "io10reczcaelglh5xmkay65h9vw3e5dp82e8vw0rz",\n        "io13xdhg9du56khumz3sg6a3ma5q5kjx7vdlx48x8",\n        "io1tf7tu2xt6mpk8s70ahugsx20jqgu9eg6v48qlk",\n        "io1xj0u5n20tsqwxh5a3xdtmzuz9wasft0pqjrq8t"\n      ],\n      "operatorAddress": {\n        "exist": true,\n        "operatorAddress": "io1qnec80ark9shjc6uzk45dhm8s50dpc27sjuver"\n      },\n      "alias": {\n        "exist": true,\n        "aliasName": "pubxpayments"\n      },\n      "totalNumberOfHolders": 9006,\n      "totalAccountSupply": "782833468919740605141266758"\n    }\n  }\n}\n'
                      )
                    ])
                  ])
                ]),
                n("h2", { attrs: { id: "action" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#action" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" Action")
                ]),
                e._v(" "),
                n("h3", { attrs: { id: "bydates" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#bydates" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" ByDates")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  ByDates finds actions by dates\n\nRequest:\n  startDate: start date in unix epoch time\n  endDate: end date in unix epoch time\n  pagination:\n    skip: starting index of displaying action list\n    first: number of actions to display\n\nResponse:\n  exist: whether actions exist within the time frame\n  actions:\n    actHash: action hash\n    blkHash: block hash\n    timeStamp: timestamp\n    actType: action type\n    sender: sender address\n    recipient: recipient address\n    amount: amount transferred\n    gasFee: gas fee\n  count: total number of actions within the time frame\n"
                      )
                    ])
                  ])
                ]),
                n("h3", { attrs: { id: "byhash" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#byhash" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" ByHash")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  ByHash finds the action by hash\n\nRequest:\n  actHash: action hash\n\nResponse:\n  actionInfo:\n    actHash: action hash\n    blkHash: block hash\n    timeStamp: timestamp\n    actType: action type\n    sender: sender address\n    recipient: recipient address\n    amount: amount transferred\n    gasFee: gas fee\n  evmTransfers:\n    from: sender address\n    to: recipient address\n    quantity: amount transferred\n"
                      )
                    ])
                  ])
                ]),
                n("h3", { attrs: { id: "byaddress" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#byaddress" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" ByAddress")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  ByAddress finds actions by address\n\nRequest:\n  address: sender address or recipient address\n  pagination:\n    skip: starting index of displaying action list\n    first: number of actions to display\n\nResponse:\n  exist: whether actions exist for the given address\n  actions:\n    actHash: action hash\n    blkHash: block hash\n    timeStamp: timestamp\n    actType: action type\n    sender: sender address\n    recipient: recipient address\n    amount: amount transferred\n    gasFee: gas fee\n  count: total number of actions for the given address\n"
                      )
                    ])
                  ])
                ]),
                n("h3", { attrs: { id: "evmtransfersbyaddress" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#evmtransfersbyaddress" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" EvmTransfersByAddress")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  EvmTransfersByAddress finds EVM transfers by address\n\nRequest:\n  address: sender address or recipient address\n  pagination:\n    skip: starting index of displaying action list\n    first: number of actions to display\n\nResponse:\n  exist: whether EVM transfers exist for the given address\n  evmTransfers:\n    from: sender address\n    to: recipient address\n    quantity: amount transferred\n    actHash: action hash\n    blkHash: block hash\n    timeStamp: timestamp\n  count: total number of EVM transfers for the given address\n"
                      )
                    ])
                  ])
                ]),
                n("h3", { attrs: { id: "bytype" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#bytype" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" ByType")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  ByType finds actions by action type\n\nRequest:\n  type: action type\n  pagination:\n    skip: starting index of displaying action list\n    first: number of actions to display\n\nResponse:\n  exist: whether actions exist for the given type\n  actions:\n    actHash: action hash\n    blkHash: block hash\n    timeStamp: timestamp\n    actType: action type\n    sender: sender address\n    recipient: recipient address\n    amount: amount transferred\n    gasFee: gas fee\n  count: total number of actions for the given type\n"
                      )
                    ])
                  ])
                ]),
                n("p", [e._v("Demo:")]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        'Sample Request:\n\nquery{\n  action{\n    byDates(startDate: 1589485984, endDate: 1589486028) {\n      exist\n      actions(pagination: {skip: 0, first: 1}){\n        actHash\n        blkHash\n        timeStamp\n        actType\n        sender\n        recipient\n        amount\n        gasFee\n      }\n      count\n    }\n    byHash(actHash: "000086e6e3034c104025896f8af9d3e313b95957c076b3a5ebe1f42f8af3a8ad"){\n      actionInfo{\n        actHash\n    \t\tblkHash\n    \t\ttimeStamp\n    \t\tactType\n    \t\tsender\n    \t\trecipient\n    \t\tamount\n    \t\tgasFee\n      }\n      evmTransfers{\n        from\n        to\n        quantity\n      }\n    }\n    byAddress(address:"io17jz7vtvllrgctkrvzmmue55feuk8cy6mtcynkk"){\n      exist\n      actions(pagination: {skip: 0, first: 1}){\n        actHash\n        blkHash\n        timeStamp\n        actType\n        sender\n        recipient\n        amount\n        gasFee\n      }\n      count\n    }\n    evmTransfersByAddress(address: "io1nkuv5ns3pevh7r7cwv6lwa2744utyhq7txay3a"){\n      exist\n  \t\tevmTransfers{\n        from\n        to\n        quantity\n        actHash\n        blkHash\n        timeStamp\n      }\n    \tcount\n    }\n    byType(type:"transfer"){\n      exist\n      actions(pagination: {skip: 0, first: 1}){\n        actHash\n        blkHash\n        timeStamp\n        actType\n        sender\n        recipient\n        amount\n        gasFee\n      }\n      count\n    }\n  }\n}\n\nSample Response:\n\n{\n  "data": {\n    "action": {\n      "byDates": {\n        "exist": true,\n        "actions": [\n          {\n            "actHash": "8c917d11bff3856d60d274c666188afc3aac0fbcddb60bd19cf9a352cb7b00a3",\n            "blkHash": "293845611de09b944c5def5a6b29e83cd4b8d2a00a29575e4720fc64e8adf7b4",\n            "timeStamp": 1589486025,\n            "actType": "grantReward",\n            "sender": "io195mh6ftwz5vnagw984fj4hj8awty3ue2gh457f",\n            "recipient": "",\n            "amount": "0",\n            "gasFee": "0"\n          }\n        ],\n        "count": 9\n      },\n      "byHash": {\n        "actionInfo": {\n          "actHash": "000086e6e3034c104025896f8af9d3e313b95957c076b3a5ebe1f42f8af3a8ad",\n          "blkHash": "2f31b5b15c50dc9431cd1f655fdace2c2c7bf92111a4a01a9947ce3969352d00",\n          "timeStamp": 1582409835,\n          "actType": "transfer",\n          "sender": "io1ey8s7p7kzu9lh68we7mstmyllaxc6tgwuj2whh",\n          "recipient": "io1nkuv5ns3pevh7r7cwv6lwa2744utyhq7txay3a",\n          "amount": "1528012374156719350",\n          "gasFee": "10000000000000000"\n        },\n        "evmTransfers": []\n      },\n      "byAddress": {\n        "exist": true,\n        "actions": [\n          {\n            "actHash": "e1e3d46844046710d4843b2b044f8ff5da785931e808ac071ff4b4280a05aa9e",\n            "blkHash": "3b1dcebd95f35a682ea8f443ae817b240b447e50a23c3a60918c3318bb249ccc",\n            "timeStamp": 1589442290,\n            "actType": "execution",\n            "sender": "io17jz7vtvllrgctkrvzmmue55feuk8cy6mtcynkk",\n            "recipient": "io1hp6y4eqr90j7tmul4w2wa8pm7wx462hq0mg4tw",\n            "amount": "0",\n            "gasFee": "60357000000000000"\n          }\n        ],\n        "count": 290\n      },\n      "evmTransfersByAddress": {\n        "exist": true,\n        "evmTransfers": [\n          {\n            "from": "io1zn9mn4v63jg3047ylqx9nqaqz0ev659777q3xc",\n            "to": "io1nkuv5ns3pevh7r7cwv6lwa2744utyhq7txay3a",\n            "quantity": "5006000000000000000000",\n            "actHash": "8f4c40742081668eaab315701f5603dc83ecc455cacffb3b13710c37915cb4dc",\n            "blkHash": "3625674",\n            "timeStamp": 1583322240\n          },\n          {\n            "from": "io1nkuv5ns3pevh7r7cwv6lwa2744utyhq7txay3a",\n            "to": "io1zn9mn4v63jg3047ylqx9nqaqz0ev659777q3xc",\n            "quantity": "0",\n            "actHash": "8f4c40742081668eaab315701f5603dc83ecc455cacffb3b13710c37915cb4dc",\n            "blkHash": "3625674",\n            "timeStamp": 1583322240\n          },\n          {\n            "from": "io1nkuv5ns3pevh7r7cwv6lwa2744utyhq7txay3a",\n            "to": "io1hp6y4eqr90j7tmul4w2wa8pm7wx462hq0mg4tw",\n            "quantity": "0",\n            "actHash": "c4bd25240b0d8832b0dca2916d30e3c6882a5dbfa803573950ad8ae894ef8f5c",\n            "blkHash": "3572472",\n            "timeStamp": 1583055260\n          },\n          {\n            "from": "io1nkuv5ns3pevh7r7cwv6lwa2744utyhq7txay3a",\n            "to": "io1zn9mn4v63jg3047ylqx9nqaqz0ev659777q3xc",\n            "quantity": "0",\n            "actHash": "078c9d6c2f18681d9d3747d967919a7fafb44598a39117b9a1a1abc8e18e6013",\n            "blkHash": "3572471",\n            "timeStamp": 1583055255\n          },\n          {\n            "from": "io1nkuv5ns3pevh7r7cwv6lwa2744utyhq7txay3a",\n            "to": "io1zn9mn4v63jg3047ylqx9nqaqz0ev659777q3xc",\n            "quantity": "5006000000000000000000",\n            "actHash": "fee1360940bb6724636c0731edde984a62941df2e1785361749a50bee6f22559",\n            "blkHash": "3316376",\n            "timeStamp": 1581770210\n          }\n        ],\n        "count": 5\n      },\n      "byType": {\n        "exist": true,\n        "actions": [\n          {\n            "actHash": "000086e6e3034c104025896f8af9d3e313b95957c076b3a5ebe1f42f8af3a8ad",\n            "blkHash": "2f31b5b15c50dc9431cd1f655fdace2c2c7bf92111a4a01a9947ce3969352d00",\n            "timeStamp": 1582409835,\n            "actType": "transfer",\n            "sender": "io1ey8s7p7kzu9lh68we7mstmyllaxc6tgwuj2whh",\n            "recipient": "io1nkuv5ns3pevh7r7cwv6lwa2744utyhq7txay3a",\n            "amount": "1528012374156719350",\n            "gasFee": "10000000000000000"\n          }\n        ],\n        "count": 132221\n      }\n    }\n  }\n}\n'
                      )
                    ])
                  ])
                ]),
                n("h2", { attrs: { id: "xrc20-tokens" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#xrc20-tokens" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" XRC20 Tokens")
                ]),
                e._v(" "),
                n("h3", { attrs: { id: "bycontractaddress" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#bycontractaddress" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" ByContractAddress")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  ByContractAddress returns Xrc20 actions given the Xrc20 contract address\n\nRequest:\n  address: contract address\n  numberPerPage: number per page\n  page: page number\n\nResponse:\n  exist: whether Xrc20 actions exist for the given contract address\n  xrc20:\n    contract: contract address\n    hash: action hash\n    timestamp: timestamp\n    from: sender address\n    to: recipient address\n    quantity: amount transferred\n  count: total number of Xrc20 actions\n"
                      )
                    ])
                  ])
                ]),
                n("h3", { attrs: { id: "byaddress-2" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#byaddress-2" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" ByAddress")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  ByAddress returns Xrc20 actions given the sender address or recipient address\n\nRequest:\n  address: sender address or recipient address\n  numberPerPage: number per page\n  page: page number\n\nResponse:\n  exist: whether Xrc20 actions exist for the given sender address or recipient address\n  xrc20:\n    contract: contract address\n    hash: action hash\n    timestamp: timestamp\n    from: sender address\n    to: recipient address\n    quantity: amount transferred\n  count: total number of Xrc20 actions\n"
                      )
                    ])
                  ])
                ]),
                n("h3", { attrs: { id: "bypage" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#bypage" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" ByPage")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  ByPage returns Xrc20 actions by pagination\n\nRequest:\n  pagination:\n    skip: starting index of displaying action list\n    first: number of actions to display\n\nResponse:\n  exist: whether Xrc20 actions exist\n  xrc20:\n    contract: contract address\n    hash: action hash\n    timestamp: timestamp\n    from: sender address\n    to: recipient address\n    quantity: amount transferred\n  count: total number of Xrc20 actions\n"
                      )
                    ])
                  ])
                ]),
                n("h3", { attrs: { id: "xrc20addresses" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#xrc20addresses" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" Xrc20Addresses")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  Xrc20Addresses returns Xrc20 contract addresses\n\nRequest:\n  pagination:\n    skip: starting index of displaying contract address list\n    first: number of contract addresses to display\n\nResponse:\n  exist: whether Xrc20 contract addresses exist\n  addresses: contract address list\n  count: total number of Xrc20 contract addresses\n"
                      )
                    ])
                  ])
                ]),
                n("h3", { attrs: { id: "tokenholderaddresses" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#tokenholderaddresses" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" TokenHolderAddresses")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  TokenHolderAddresses returns Xrc20 token holder addresses given a Xrc20 contract address\n\nRequest:\n  tokenAddress: token contract address\n  pagination:\n    skip: starting index of displaying token holder address list\n    first: number of token holder addresses to display\n\nResponse:\n  addresses: token holder address list\n  count: total number of token holder addresses\n"
                      )
                    ])
                  ])
                ]),
                n("p", [e._v("Demo:")]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        'Sample Request:\nquery{\n  xrc20{\n    byContractAddress(address: "io1hp6y4eqr90j7tmul4w2wa8pm7wx462hq0mg4tw", page: 1, numPerPage: 1){\n      exist\n      xrc20 {\n        contract\n        hash\n        timestamp\n        from\n        to\n        quantity\n      }\n      count\n    }\n    byAddress(address: "io1l6a6gu9ks4pwu2tmrzhl6z2el73ydv6e768p5x", page: 1, numPerPage: 1){\n      exist\n      xrc20 {\n        contract\n        hash\n        timestamp\n        from\n        to\n        quantity\n      }\n      count\n    }\n    byPage(pagination: {skip: 0, first: 2}){\n      exist\n      xrc20 {\n        contract\n        hash\n        timestamp\n        from\n        to\n        quantity\n      }\n      count\n    }\n    xrc20Addresses(pagination:{skip: 0, first: 2}){\n      exist\n      addresses\n      count\n    }\n    tokenHolderAddresses(tokenAddress: "io1hp6y4eqr90j7tmul4w2wa8pm7wx462hq0mg4tw"){\n      addresses(pagination: {skip: 1, first: 2})\n      count\n    }\n  }\n}\n\nSample Response:\n\n{\n  "data": {\n    "xrc20": {\n      "byContractAddress": {\n        "exist": true,\n        "xrc20": [\n          {\n            "contract": "io1hp6y4eqr90j7tmul4w2wa8pm7wx462hq0mg4tw",\n            "hash": "052eebdc0bc75715ffedeb34c9322446230448747cef48762be9478fd8a7064e",\n            "timestamp": "1589496125",\n            "from": "io1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqd39ym7",\n            "to": "io1xrwjjy26e5dmcxd2dq6hu0zsfrd5qdgqpg57m8",\n            "quantity": "71735598998424445289"\n          }\n        ],\n        "count": 80440\n      },\n      "byAddress": {\n        "exist": true,\n        "xrc20": [\n          {\n            "contract": "io1hp6y4eqr90j7tmul4w2wa8pm7wx462hq0mg4tw",\n            "hash": "df8c34d9bcee1ed204ba82ebcf5b29722956379ef734c1e1e32fcb6a98968b5d",\n            "timestamp": "1589480485",\n            "from": "io1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqd39ym7",\n            "to": "io1l6a6gu9ks4pwu2tmrzhl6z2el73ydv6e768p5x",\n            "quantity": "1031249148674903495207"\n          }\n        ],\n        "count": 235\n      },\n      "byPage": {\n        "exist": true,\n        "xrc20": [\n          {\n            "contract": "io1hp6y4eqr90j7tmul4w2wa8pm7wx462hq0mg4tw",\n            "hash": "052eebdc0bc75715ffedeb34c9322446230448747cef48762be9478fd8a7064e",\n            "timestamp": "1589496125",\n            "from": "io1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqd39ym7",\n            "to": "io1xrwjjy26e5dmcxd2dq6hu0zsfrd5qdgqpg57m8",\n            "quantity": "71735598998424445289"\n          },\n          {\n            "contract": "io1hp6y4eqr90j7tmul4w2wa8pm7wx462hq0mg4tw",\n            "hash": "f8a326ddb67c0140be0244a052976d73ca6f8fcb5278c51549df80c347c7a3b6",\n            "timestamp": "1589496065",\n            "from": "io1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqd39ym7",\n            "to": "io1qnwl44fpln3uvxrrhjxkp56y6n3j6cqctp76rq",\n            "quantity": "132716426277978885524"\n          }\n        ],\n        "count": 86196\n      },\n      "xrc20Addresses": {\n        "exist": true,\n        "addresses": [\n          "io1hp6y4eqr90j7tmul4w2wa8pm7wx462hq0mg4tw",\n          "io1lvemm43lz6np0hzcqlpk0kpxxww623z5hs4mwu"\n        ],\n        "count": 3\n      },\n      "tokenHolderAddresses": {\n        "addresses": [\n          "io1quwq28fk0z6ztyesw8r8aalpww62uf7m6xjf8x",\n          "io1hn57s343wgqrvqkt0mp4fas0wfvgtwecny5lq5"\n        ],\n        "count": 1871\n      }\n    }\n  }\n}\n'
                      )
                    ])
                  ])
                ]),
                n("h2", { attrs: { id: "xrc721-tokens" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#xrc721-tokens" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" XRC721 Tokens")
                ]),
                e._v(" "),
                n("h3", { attrs: { id: "bycontractaddress-2" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#bycontractaddress-2" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" ByContractAddress")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  ByContractAddress returns Xrc721 actions given the Xrc721 contract address\n\nRequest:\n  address: contract address\n  numberPerPage: number per page\n  page: page number\n\nResponse:\n  exist: whether Xrc721 actions exist for the given contract address\n  xrc721:\n    contract: contract address\n    hash: action hash\n    timestamp: timestamp\n    from: sender address\n    to: recipient address\n    quantity: amount transferred\n  count: total number of Xrc721 actions\n"
                      )
                    ])
                  ])
                ]),
                n("h3", { attrs: { id: "byaddress-3" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#byaddress-3" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" ByAddress")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  ByAddress returns Xrc721 actions given the sender address or recipient address\n\nRequest:\n  address: sender address or recipient address\n  numberPerPage: number per page\n  page: page number\n\nResponse:\n  exist: whether Xrc721 actions exist for the given sender address or recipient address\n  xrc721:\n    contract: contract address\n    hash: action hash\n    timestamp: timestamp\n    from: sender address\n    to: recipient address\n    quantity: amount transferred\n  count: total number of Xrc721 actions\n"
                      )
                    ])
                  ])
                ]),
                n("h3", { attrs: { id: "bypage-2" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#bypage-2" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" ByPage")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  ByPage returns Xrc721 actions by pagination\n\nRequest:\n  pagination:\n    skip: starting index of displaying action list\n    first: number of actions to display\n\nResponse:\n  exist: whether Xrc721 actions exist\n  xrc721:\n    contract: contract address\n    hash: action hash\n    timestamp: timestamp\n    from: sender address\n    to: recipient address\n    quantity: amount transferred\n  count: total number of Xrc721 actions\n"
                      )
                    ])
                  ])
                ]),
                n("h3", { attrs: { id: "xrc721addresses" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#xrc721addresses" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" Xrc721Addresses")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  Xrc721Addresses returns Xrc721 contract addresses\n\nRequest:\n  pagination:\n    skip: starting index of displaying contract address list\n    first: number of contract addresses to display\n\nResponse:\n  exist: whether Xrc721 contract addresses exist\n  addresses: contract address list\n  count: total number of Xrc721 contract addresses\n"
                      )
                    ])
                  ])
                ]),
                n("h3", { attrs: { id: "tokenholderaddresses-2" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#tokenholderaddresses-2" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" TokenHolderAddresses")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  TokenHolderAddresses returns Xrc721 token holder addresses given a Xrc721 contract address\n\nRequest:\n  tokenAddress: token contract address\n  pagination:\n    skip: starting index of displaying token holder address list\n    first: number of token holder addresses to display\n\nResponse:\n  addresses: token holder address list\n  count: total number of token holder addresses\n"
                      )
                    ])
                  ])
                ]),
                n("p", [
                  e._v(
                    "TODO: When there are Xrc721 actions on the chain, add a demo here."
                  )
                ]),
                e._v(" "),
                n("h2", { attrs: { id: "topholders" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#topholders" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" TopHolders")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  TopHolders returns the top IOTX holders\n\nRequest:\n  endEpochNumber: end epoch number\n  pagination:\n    skip: starting index of displaying top holder list\n    first: number of top holders to display\n\nResponse:\n  address: holder address\n  balance: account balance\n"
                      )
                    ])
                  ])
                ]),
                n("p", [e._v("Demo:")]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        'Sample Request:\n\nquery{\n  topHolders(endEpochNumber: 1000, pagination: {skip: 0, first: 5}){\n    address\n    balance\n  }\n}\n\nSample Response:\n\n{\n  "data": {\n    "topHolders": [\n      {\n        "address": "io1uqhmnttmv0pg8prugxxn7d8ex9angrvfjfthxa",\n        "balance": "9782327287860000000000000000"\n      },\n      {\n        "address": "io1v8aj79xc7zdn46rptrqe63g79tgq57s8em2yk5",\n        "balance": "5595872065018750000000000"\n      },\n      {\n        "address": "io1w2zkwsda29cryeg8rtln6wl0nm2mrlfl2xj02c",\n        "balance": "5000000000000000000000000"\n      },\n      {\n        "address": "io17zjv5f97j0d9fp6svqnvf2nf3k4a5pjay9kzp9",\n        "balance": "3457911717681240000000000"\n      },\n      {\n        "address": "io183v7vftj3e4h76z5f5qpswhnn5737rrwjkhyds",\n        "balance": "1222486212327000000000000"\n      }\n    ]\n  }\n}\n'
                      )
                    ])
                  ])
                ]),
                n("h2", { attrs: { id: "hermes" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#hermes" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" Hermes")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  Hermes gives delegates who register the service of automatic reward distribution an overview of the reward distributions to their voters within a range of epochs\n\nRequest:\n  startEpoch: starting epoch number\n  epochCount: epoch count\n  rewardAddress: Hermes reward address\n  waiverThreshold: threshold for waiving service fee\n\nResponse:\n  exist: whether Hermes has bookkeeping information within the specified epoch range\n  hermesDistribution:\n    delegateName: delegate name\n    rewardDistribution:\n      voterEthAddress: voter’s ERC20 address\n      voterIotexAddress: voter’s IoTeX address\n      amount: amount of reward distribution\n    stakingIotexAddress: delegate IoTeX staking address\n    voterCount: number of voters\n    waiveServiceFee: whether the delegate is qualified for waiving the service fee\n    refund: amount of refund\n"
                      )
                    ])
                  ])
                ]),
                n("p", [e._v("Demo:")]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        'Sample Request:\n\nquery{\n  hermes(startEpoch: 2600, epochCount: 2, rewardAddress: "io12mgttmfa2ffn9uqvn0yn37f4nz43d248l2ga85", waiverThreshold: 100) {\n    exist\n    hermesDistribution{\n      delegateName\n      rewardDistribution{\n        voterEthAddress\n        voterIotexAddress\n        amount\n      }\n      stakingIotexAddress\n      waiveServiceFee\n      refund\n    }\n  }\n}\n\nSample Reponse:\n\n{\n  "data": {\n    "hermes": {\n      "exist": true,\n      "hermesDistribution": [\n        {\n          "delegateName": "coredev",\n          "rewardDistribution": [\n            {\n              "voterEthAddress": "0x2ed3767cfcbceb42ff5f3642d4df6f851b947073",\n              "voterIotexAddress": "io19mfhvl8uhn459l6lxepdfhm0s5degurn9p9ws7",\n              "amount": "196604399213276651"\n            },\n            {\n              "voterEthAddress": "0xd24687dc4512cd705a74cd5495745398f24278ad",\n              "voterIotexAddress": "io16frg0hz9ztxhqkn5e42f2aznnreyy79dmqlsn2",\n              "amount": "32631320141532384677"\n            },\n            {\n              "voterEthAddress": "0xfe7bcb3676aabe9a6b39cb23f3a5fa41eed7ad1b",\n              "voterIotexAddress": "io1leaukdnk42lf56eeev3l8f06g8hd0tgmep8z96",\n              "amount": "359747231878966643458"\n            }\n          ],\n          "stakingIotexAddress": "io16frg0hz9ztxhqkn5e42f2aznnreyy79dmqlsn2",\n          "waiveServiceFee": false,\n          "refund": "20661850337879594993"\n        }\n      ]\n    }\n  }\n}\n'
                      )
                    ])
                  ])
                ]),
                n("h3", { attrs: { id: "hermesaveragestats" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#hermesaveragestats" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" HermesAverageStats")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  HermesAverageStats returns the Hermes average statistics\n\nRequest:\n  startEpoch: starting epoch number\n  epochCount: epoch count\n  rewardAddress: Hermes reward address\n\nResponse:\n  exist: whether Hermes has bookkeeping information within the specified epoch range\n  averagePerEpoch:\n    delegateName: delegate name\n    rewardDistribution: reward distribution amount on average\n    totalWeightedVotes: total weighted votes on average\n"
                      )
                    ])
                  ])
                ]),
                n("p", [e._v("Demo:")]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        'Sample Request:\n\nquery{\n  hermesAverageStats(startEpoch: 5000, epochCount: 10, rewardAddress: "io12mgttmfa2ffn9uqvn0yn37f4nz43d248l2ga85"){\n    exist\n    averagePerEpoch{\n      delegateName\n      rewardDistribution\n      totalWeightedVotes\n    }\n  }\n}\n\nSample Response:\n{\n  "data": {\n    "hermesAverageStats": {\n      "exist": true,\n      "averagePerEpoch": [\n        {\n          "delegateName": "coredev",\n          "rewardDistribution": "401032105356051868726",\n          "totalWeightedVotes": "38808174674986270729016008"\n        },\n        {\n          "delegateName": "droute",\n          "rewardDistribution": "822447995100870198028",\n          "totalWeightedVotes": "118158036851736955093703620"\n        },\n        {\n          "delegateName": "enlightiv",\n          "rewardDistribution": "307702229045005783993",\n          "totalWeightedVotes": "44203263243950087278116762"\n        },\n        {\n          "delegateName": "gamefantasy#",\n          "rewardDistribution": "615239097651479380485",\n          "totalWeightedVotes": "57767718207147312170110160"\n        },\n        {\n          "delegateName": "hashquark",\n          "rewardDistribution": "541329441223848778034",\n          "totalWeightedVotes": "37303750004462544031788788"\n        },\n        {\n          "delegateName": "hotbit",\n          "rewardDistribution": "490966398085098750279",\n          "totalWeightedVotes": "41618068480725476480096115"\n        },\n        {\n          "delegateName": "huobiwallet",\n          "rewardDistribution": "256863403704895657860",\n          "totalWeightedVotes": "36902607956443015195845625"\n        },\n        {\n          "delegateName": "thebottoken#",\n          "rewardDistribution": "76273140665872145706",\n          "totalWeightedVotes": "10349106879165645178941803"\n        }\n      ]\n    }\n  }\n}\n'
                      )
                    ])
                  ])
                ]),
                n("h2", { attrs: { id: "hermes2" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#hermes2" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" Hermes2")
                ]),
                e._v(" "),
                n("h3", { attrs: { id: "bydelegate" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#bydelegate" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" ByDelegate")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  ByDelegate returns Hermes delegates' distribution history\n\nRequest:\n  startEpoch: starting epoch number\n  epochCount: epoch count\n  delegateName: delegate name\n  pagination:\n    skip: starting index of displaying reward distribution list\n    first: number of reward distributions to display\n\nResponse:\n  exist: whether the delegate uses Hermes within the specified epoch range\n  voterInfoList:\n    voterAddress: voter address\n    fromEpoch: starting epoch of bookkeeping\n    toEpoch: ending epoch of bookkeeping\n    amount: distributino amount\n    actionHash: action hash\n    timestamp: timestamp\n  count: total number of reward distributions\n  totalRewardDistributed: total reward amount distributed\n  distributionRatio:\n    epochNumber: epoch number\n    blockRewardRatio: ratio of block reward being distributed\n    epochRewardRatio: ratio of epoch reward being distributed\n    foundationBonusRatio: ratio of foundation bonus being distributed\n"
                      )
                    ])
                  ])
                ]),
                n("h3", { attrs: { id: "byvoter" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#byvoter" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" ByVoter")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  ByVoter returns Hermes voters' receiving history\n\nRequest:\n  startEpoch: starting epoch number\n  epochCount: epoch count\n  voterAddress: voter address\n  pagination:\n    skip: starting index of displaying reward receiving list\n    first: number of reward receivings to display\n\nResponse:\n  exist: whether the voter uses Hermes within the specified epoch range\n  delegateInfoList:\n    delegateName: delegate name\n    fromEpoch: starting epoch of bookkeeping\n    toEpoch: ending epoch of bookkeeping\n    amount: receiving amount\n    actionHash: action hash\n    timestamp: timestamp\n  count: total number of reward receivings\n  totalRewardReceived: total reward amount received\n"
                      )
                    ])
                  ])
                ]),
                n("h3", { attrs: { id: "hermesmeta" } }, [
                  n(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#hermesmeta" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" HermesMeta")
                ]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        "Usage:\n  HermesMeta provides Hermes platform metadata\n\nRequest:\n  startEpoch: starting epoch number\n  epochCount: epoch count\n\nResponse:\n  exist: whether Hermes has bookkeeping information within the specified epoch range\n  numberOfDelegates: number of Hermes delegates within the epoch range\n  numberOfRecipients: number of voters who vote for Hermes delegates within the epoch range\n  totalRewardDistributed: total reward amount distributed within the epoch range\n"
                      )
                    ])
                  ])
                ]),
                n("p", [e._v("Demo:")]),
                e._v(" "),
                n("div", { staticClass: "language- extra-class" }, [
                  n("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    n("code", [
                      e._v(
                        'Sample Request:\n\nquery{\n  hermes2(startEpoch: 9100, epochCount: 1){\n    byDelegate(delegateName:"gamefantasy#"){\n      exist\n      voterInfoList(pagination: {skip: 0, first: 2}){\n        voterAddress\n        fromEpoch\n        toEpoch\n        amount\n        actionHash\n        timestamp\n      }\n      count\n      totalRewardsDistributed\n      distributionRatio{\n        epochNumber\n        blockRewardRatio\n        epochRewardRatio\n        foundationBonusRatio\n      }\n    }\n    byVoter(voterAddress: "io19jgwy6gua2mxtthdgqe7r6v2z8jyvv0820nshw"){\n      exist\n      delegateInfoList(pagination: {skip: 0, first: 2}){\n        delegateName\n        fromEpoch\n        toEpoch\n        amount\n        actionHash\n        timestamp\n      }\n      count\n      totalRewardsReceived\n    }\n    hermesMeta{\n      exist\n      numberOfDelegates\n      numberOfRecipients\n      totalRewardsDistributed\n    }\n  }\n}\n\nSample Response:\n\n{\n  "data": {\n    "hermes2": {\n      "byDelegate": {\n        "exist": true,\n        "voterInfoList": [\n          {\n            "voterAddress": "io1qhks2tct2386xgntkgg8f748ymuqnzwy4qr3ms",\n            "fromEpoch": 9016,\n            "toEpoch": 9037,\n            "amount": "898496142232422125",\n            "actionHash": "bff5c21cec38a994507cc133220d853710516b931a44d0ee74816fe835d68b62",\n            "timestamp": "2020-05-08 00:10:45 +0000 UTC"\n          },\n          {\n            "voterAddress": "io1qk59a7q45spm8c2tnuf2j3yrkshfupaeq6fa8g",\n            "fromEpoch": 9016,\n            "toEpoch": 9037,\n            "amount": "4597907624862488628",\n            "actionHash": "bff5c21cec38a994507cc133220d853710516b931a44d0ee74816fe835d68b62",\n            "timestamp": "2020-05-08 00:10:45 +0000 UTC"\n          }\n        ],\n        "count": 79,\n        "totalRewardsDistributed": "15856874829304723790254",\n        "distributionRatio": [\n          {\n            "epochNumber": 9100,\n            "blockRewardRatio": 80,\n            "epochRewardRatio": 80,\n            "foundationBonusRatio": 80\n          }\n        ]\n      },\n      "byVoter": {\n        "exist": true,\n        "delegateInfoList": [\n          {\n            "delegateName": "thebottoken#",\n            "fromEpoch": 9016,\n            "toEpoch": 9037,\n            "amount": "758460957121496239828",\n            "actionHash": "e6a8a1a3daa35bfec01537aecc45fd5d9f58d4fd686e152e6a44c6c5e6c7cc25",\n            "timestamp": "2020-05-08 00:23:45 +0000 UTC"\n          },\n          {\n            "delegateName": "consensusnet",\n            "fromEpoch": 9016,\n            "toEpoch": 9037,\n            "amount": "2281108960667527338399",\n            "actionHash": "ada939af05ba7bf96d4e87a2c5f7d048f48ab9b6fafc3ee1ca35dfc67664a22a",\n            "timestamp": "2020-05-08 00:02:40 +0000 UTC"\n          }\n        ],\n        "count": 3,\n        "totalRewardsReceived": "5315407956761306754362"\n      },\n      "hermesMeta": {\n        "exist": true,\n        "numberOfDelegates": 22,\n        "numberOfRecipients": 964,\n        "totalRewardsDistributed": "241471851581857403438503"\n      }\n    }\n  }\n}\n'
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
      t.default = s.exports;
    }
  }
]);
