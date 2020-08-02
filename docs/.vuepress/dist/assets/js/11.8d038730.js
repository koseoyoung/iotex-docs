(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    568: function(e, t, o) {
      "use strict";
      o.r(t);
      var r = o(69),
        a = Object(r.a)(
          {},
          function() {
            var e = this,
              t = e.$createElement,
              o = e._self._c || t;
            return o(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": e.$parent.slotKey } },
              [
                o("h2", { attrs: { id: "introduction" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#introduction" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" 🎇 Introduction")
                ]),
                e._v(" "),
                o("p", [
                  e._v(
                    "Founded as an open-source project in 2017, IoTeX envisions bringing together people, process, data and things with trust and free will to create new capabilities, richer experiences, and unprecedented economic opportunity. Our platform aims to be the global trust backbone for intelligently and efficiently connecting distinct parties, where IoTeX blockchain is the root of trust for this open platform."
                  )
                ]),
                e._v(" "),
                o("p", [
                  e._v(
                    "Over the past 2+ years, the IoTeX blockchain was built from scratch with our mission in mind. What started as a few lines of code has now blossomed into one of the most secure, performant, and decentralized blockchains in the world. IoTeX blockchain is the leading scalable and extensible blockchain with several innovative technologies in-house, including the blockchains-in-blockchain architecture for heterogeneous computing, fast and robust Roll-DPoS consensus scheme, and plug-in-play sub-protocols. More details can be found "
                  ),
                  o(
                    "a",
                    {
                      attrs: {
                        href: "https://www.iotex.io/research-paper",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [e._v("here"), o("OutboundLink")],
                    1
                  ),
                  e._v(".")
                ]),
                e._v(" "),
                o("p", [
                  e._v(
                    "IoTeX core-dev is continuously working hard to bring the community more useful features."
                  )
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "the-architecture" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#the-architecture" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" The Architecture")
                ]),
                e._v(" "),
                o("p", [
                  e._v(
                    "IoTeX blockchain consists of the four-layered components:"
                  )
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Networking Layer")]),
                    e._v(
                      " enables the peer-to-peer communication between IoTeX nodes, and provide blockchain services (through "
                    ),
                    o(
                      "a",
                      {
                        attrs: {
                          href: "https://grpc.io/",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("grpc"), o("OutboundLink")],
                      1
                    ),
                    e._v(") to applications")
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Consensus Layer")]),
                    e._v(" runs "),
                    o("a", { attrs: { href: "iotex.io/research" } }, [
                      e._v("Roll-DPoS")
                    ]),
                    e._v(
                      " to select the active block producers among a pool of block producer candidates (who are elected via staking and voting), using a decentralized randomized algorithm (DKG + BLS)."
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("State Transition Layer")]),
                    e._v(
                      " is composed of five sub-protocols and is responsible for transiting the states of the blockchain based on actions."
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Programing Layer")]),
                    e._v(
                      " provides programmability to implement customized business logic for state transition. Currently, it supports Ethereum Virtual Machine (EVM) with smart contracts written in Solidity. Developers could seamlessly port existing DApps onto it. "
                    ),
                    o(
                      "a",
                      {
                        attrs: {
                          href: "http://codelabs.iotex.io/",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Codelabs"), o("OutboundLink")],
                      1
                    ),
                    e._v(" is a great place for developers to get started!")
                  ])
                ]),
                e._v(" "),
                o("p", [
                  o("img", {
                    attrs: {
                      src:
                        "https://cdn-images-1.medium.com/max/2000/0*cPrsvVa1wIE0cqnS",
                      alt: "IoTeX Blockchain Architecture"
                    }
                  })
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "sub-protocols-and-actions" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#sub-protocols-and-actions" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" Sub-Protocols and Actions")
                ]),
                e._v(" "),
                o("p", [
                  e._v(
                    "The state transition layer of the chain is flexible enough that any sub-protocol can be plugged in without hustling. As of now, the following five sub-protocols have been "
                  ),
                  o(
                    "a",
                    {
                      attrs: {
                        href:
                          "https://godoc.org/github.com/iotexproject/iotex-core/action",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [e._v("implemented"), o("OutboundLink")],
                    1
                  ),
                  e._v(":")
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    e._v(
                      "Account sub-protocol provides the functionality for bookkeeping balances of accounts living on this blockchain."
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    e._v(
                      "Execution sub-protocol manages the execution of smart contracts and roll forward/back of the states."
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    e._v(
                      "Poll sub-protocol syncs with staking sub-protocol and instructs the delegates promotion/demotion on the chain."
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    e._v(
                      "Rewarding sub-protocol is responsible for distributing block rewards and epoch rewards to eligible delegates and candidates."
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    e._v(
                      "Staking sub-protocol manages voting and candidate registration services using bucket data units."
                    )
                  ])
                ]),
                e._v(" "),
                o("p", [
                  e._v(
                    "In the IoTeX network, transactions (the atomic operation unit to interact with the blockchain data) are referred to as "
                  ),
                  o("strong", [e._v("actions")]),
                  e._v(
                    ", and there are five types of actions corresponding to five sub-protocols as described. More information can be found "
                  ),
                  o(
                    "a",
                    {
                      attrs: {
                        href:
                          "https://github.com/iotexproject/iotex-proto/blob/master/proto/types/action.proto",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [e._v("here"), o("OutboundLink")],
                    1
                  ),
                  e._v(".")
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "private-key-and-address" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#private-key-and-address" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" Private Key and Address")
                ]),
                e._v(" "),
                o("p", [
                  e._v(
                    "IoTeX's Private Key is 64 random hex characters, e.g., "
                  ),
                  o("code", [
                    e._v(
                      "90bf89cd944df5c6d8281b132783277c1760537809c534fc54dda34c4edfb4f4"
                    )
                  ]),
                  e._v(
                    ", and the corresponding Public Key is derived from the private key using ECDSA (secp256k1), which is exactly the same as Ethereum. The public key can be recovered from a signed message using "
                  ),
                  o(
                    "a",
                    {
                      attrs: {
                        href:
                          "https://github.com/ethereum/go-ethereum/blob/master/crypto/signature_cgo.go#L36",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [e._v("this util"), o("OutboundLink")],
                    1
                  ),
                  e._v(".")
                ]),
                e._v(" "),
                o("p", [
                  e._v("IoTeX has a human readable address looks like "),
                  o("code", [
                    e._v("io1nyjs526mnqcsx4twa7nptkg08eclsw5c2dywp4")
                  ]),
                  e._v(", which takes the following steps to be constructed:")
                ]),
                e._v(" "),
                o("ol", [
                  o("li", [
                    e._v(
                      "Generating a random private key and the corresponding public key;"
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    e._v(
                      "Apply keccak256 hash function to the public key, exluding the first byte (hash := keccak256(pk[1:]);"
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    e._v(
                      "Take the late 20 bytes as the payload (payload := hash[12:]), which is the byte representation of the address;"
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    e._v("Apply "),
                    o(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("bech32"), o("OutboundLink")],
                      1
                    ),
                    e._v(" encoding on the payload and adding io prefix.")
                  ])
                ]),
                e._v(" "),
                o("p", [
                  e._v("Please refer to "),
                  o(
                    "a",
                    {
                      attrs: {
                        href: "https://github.com/iotexproject/iotex-address",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [e._v("this repo"), o("OutboundLink")],
                    1
                  ),
                  e._v(" for details.")
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "node-types" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#node-types" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" Node Types")
                ]),
                e._v(" "),
                o("p", [
                  e._v(
                    "TODO - fullnode, fullnode w/ archive-enabled, fullnode w/ API, fullnode w/ full API"
                  )
                ]),
                e._v(" "),
                o("h2", { attrs: { id: "build-and-run" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#build-and-run" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" 🏃 Build and Run")
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "standalone-mode" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#standalone-mode" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" Standalone Mode")
                ]),
                e._v(" "),
                o("p", [
                  e._v(
                    'The simplest way to get started is to run it in stand-alone mode for demonstration and testing purposes. "Stand-alone" indicates a single node comprises the entire blockchain by itself, which generates a new block, validates the block, and adds the block to the blockchain. This simple mode allows user to quickly launch and test a blockchain with a single computer/node, without requiring much hardware resources.'
                  )
                ]),
                e._v(" "),
                o("h4", { attrs: { id: "from-the-source" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#from-the-source" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" From the Source")
                ]),
                e._v(" "),
                o("ol", [
                  o("li", [
                    e._v("setup golang environment, e.g., "),
                    o(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://medium.com/@RidhamTarpara/install-go-1-11-on-ubuntu-18-04-16-04-lts-8c098c503c5f",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("on Linux"), o("OutboundLink")],
                      1
                    ),
                    e._v(", "),
                    o(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://medium.com/golang-learn/quick-go-setup-guide-on-mac-os-x-956b327222b8",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("on MacOS"), o("OutboundLink")],
                      1
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    o("code", [
                      e._v(
                        "git clone git@github.com:iotexproject/iotex-core.git"
                      )
                    ])
                  ]),
                  e._v(" "),
                  o("li", [o("code", [e._v("make run")])])
                ]),
                e._v(" "),
                o("h4", { attrs: { id: "use-docker-image" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#use-docker-image" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" Use Docker Image")
                ]),
                e._v(" "),
                o("ol", [
                  o("li", [
                    o("p", [
                      e._v(
                        "Install docker on your host machine at https://docs.docker.com/install/. Once docker is properly installed and started, download the IoTeX docker image: "
                      ),
                      o("code", [e._v("docker pull iotex/iotex-core:latest")])
                    ])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("p", [
                      e._v(
                        "Download the config file standalone-config.yaml from "
                      ),
                      o(
                        "a",
                        {
                          attrs: {
                            href:
                              "https://github.com/iotexproject/iotex-core/blob/master/config/standalone-config.yaml",
                            target: "_blank",
                            rel: "noopener noreferrer"
                          }
                        },
                        [e._v("iotex-core"), o("OutboundLink")],
                        1
                      ),
                      e._v(
                        ". Open the file and change certain parameters of the stand-alone node as you need."
                      )
                    ])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("p", [
                      o("code", [
                        e._v(
                          "sudo docker run -d -p 30100:14004 --mount type=bind,source=$PWD/standalone-config.yaml,target=/etc/iotex/config_local_delegate.yaml iotex/iotex-core:latest iotex-server -config-path=/etc/iotex/config_local_delegate.yaml"
                        )
                      ])
                    ])
                  ])
                ]),
                e._v(" "),
                o(
                  "h3",
                  { attrs: { id: "run-a-full-node-on-testnet-mainnet" } },
                  [
                    o(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: { href: "#run-a-full-node-on-testnet-mainnet" }
                      },
                      [e._v("#")]
                    ),
                    e._v(" Run A Full Node on Testnet/Mainnet")
                  ]
                ),
                e._v(" "),
                o("p", [
                  e._v("Please follow instructions "),
                  o(
                    "a",
                    {
                      attrs: {
                        href:
                          "https://github.com/iotexproject/iotex-bootstrap/blob/master/README.md",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [e._v("here"), o("OutboundLink")],
                    1
                  ),
                  e._v(" to run a full node on the testnet or mainnet.")
                ]),
                e._v(" "),
                o("h2", { attrs: { id: "contribute" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#contribute" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" 📒 Contribute")
                ]),
                e._v(" "),
                o("p", [
                  e._v(
                    "Anyone can be a contributor to the project, provided they have signed relevant Contributor License Agreements (CLAs) and follow the project’s contribution guidelines. Contributions will be reviewed by a maintainer, and must pass all applicable tests."
                  )
                ]),
                e._v(" "),
                o("p", [
                  e._v(
                    "Reviews check for code quality and style, including documentation, and enforce other policies. Contributions may be rejected for reasons unrelated to the code in question. For example, a change may be too complex to maintain or duplicate existing functionality."
                  )
                ]),
                e._v(" "),
                o("p", [
                  e._v(
                    "Note that contributions are not limited to code alone. Bugs, documentation, experience reports or public advocacy are all valuable ways to contribute to a project and build trust in the community."
                  )
                ]),
                e._v(" "),
                o("h2", { attrs: { id: "iotex-ecosystem" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#iotex-ecosystem" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" 🌐 IoTeX Ecosystem")
                ]),
                e._v(" "),
                o("p", [
                  e._v(
                    "IoTeX Ecosystem consists of an increasing number of services and applications, built around IoTeX blockchain."
                  )
                ]),
                e._v(" "),
                o("img", {
                  attrs: {
                    src:
                      "https://raw.githubusercontent.com/iotexproject/iotex-docs/master/ecosystem.jpeg",
                    height: "600"
                  }
                }),
                e._v(" "),
                o("h3", { attrs: { id: "explorer" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#explorer" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" Explorer")
                ]),
                e._v(" "),
                o("p", [
                  e._v(
                    "IoTeX users can easily track their transactions using the explorer."
                  )
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://github.com/iotexproject/iotex-explorer",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Source Code"), o("OutboundLink")],
                      1
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    o(
                      "a",
                      {
                        attrs: {
                          href: "https://iotexscan.io",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Mainnnet"), o("OutboundLink")],
                      1
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    o(
                      "a",
                      {
                        attrs: {
                          href: "https://testnet.iotexscan.io",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Testnet"), o("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "wallet" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#wallet" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" Wallet")
                ]),
                e._v(" "),
                o("p", [
                  o(
                    "a",
                    {
                      attrs: {
                        href: "https://iopay.iotex.io/",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [e._v("ioPay"), o("OutboundLink")],
                    1
                  ),
                  e._v(
                    " is the wallet built by core-dev for our users to manage their digital assets."
                  )
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "member-portal" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#member-portal" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" Member Portal")
                ]),
                e._v(" "),
                o("p", [
                  o(
                    "a",
                    {
                      attrs: {
                        href: "https://member.iotex.io/",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [e._v("Member portal"), o("OutboundLink")],
                    1
                  ),
                  e._v(
                    " is the portal for staking of IOTX, voting for delegates, and governance of the operation of IoTeX blockchain. You will need to install ioPay to use it."
                  )
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "hermes" } }, [
                  o(
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
                o("p", [
                  o(
                    "a",
                    {
                      attrs: {
                        href: "https://hermes.to/",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [e._v("Hermes"), o("OutboundLink")],
                    1
                  ),
                  e._v(" is an "),
                  o(
                    "a",
                    {
                      attrs: {
                        href: "https://github.com/iotexproject/iotex-hermes",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [e._v("open-source"), o("OutboundLink")],
                    1
                  ),
                  e._v(
                    " staking/voting rewards manager. The IoTeX Network utilizes Roll-DPoS consensus, where community-elected delegates manage consensus on behalf of the network. Delegates receive IOTX rewards for producing blocks, which are usually shared with their voters. With Hermes, delegates can auto-distribute rewards every day, while their voters can easily track their reward payments. Delegates that currently use Hermes have a ‘Hermes’ badge on the member portal."
                  )
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "analytics" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#analytics" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" Analytics")
                ]),
                e._v(" "),
                o("p", [
                  e._v("IoTeX analytics is an "),
                  o(
                    "a",
                    {
                      attrs: {
                        href: "https://github.com/iotexproject/iotex-analytics",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [e._v("open-source"), o("OutboundLink")],
                    1
                  ),
                  e._v(
                    " microservice that analyzes data from IoTeX blockchain to better serve applications. Currently, analytics registers five index protocols: accounts, blocks, actions, rewards, and votings, where each protocol keeps track of its relevant data and writes it into the corresponding database tables."
                  )
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "dapps" } }, [
                  o(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#dapps" } },
                    [e._v("#")]
                  ),
                  e._v(" DApps")
                ]),
                e._v(" "),
                o("p", [
                  e._v("Some of the DApps built on top of IoTeX can be found "),
                  o(
                    "a",
                    {
                      attrs: {
                        href: "https://iotex.io/developers/",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [e._v("here"), o("OutboundLink")],
                    1
                  ),
                  e._v(".")
                ]),
                e._v(" "),
                o("p", [
                  e._v(
                    "If you are interested in developing DApps on top of IoTeX blockchain, "
                  ),
                  o(
                    "a",
                    {
                      attrs: {
                        href: "http://codelabs.iotex.io/",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [e._v("codelab"), o("OutboundLink")],
                    1
                  ),
                  e._v(" is the best starting point for developers!")
                ]),
                e._v(" "),
                o("h2", { attrs: { id: "chat-with-us" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#chat-with-us" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" 👩 Chat With Us")
                ]),
                e._v(" "),
                o("p", [
                  o("strong", [
                    e._v(
                      "We are radically open-minded and value open-mindedness and transparency."
                    )
                  ])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("p", [
                      e._v(
                        "Sensitive security-related questions, comments, and reports should be sent to "
                      ),
                      o("a", { attrs: { href: "mailto:support@iotex.io" } }, [
                        e._v("email")
                      ]),
                      e._v(
                        ". You should receive a prompt response, typically within 48 hours."
                      )
                    ])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("p", [
                      e._v(
                        "For non-urgent bugs or places that need to be improved, please file issues under https://github.com/iotexproject/iotex-core/issues for the open-source community to investigate."
                      )
                    ])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("p", [
                      e._v(
                        "If you have ideas/proposals to make IoTeX better, please do not hesitate to let us know through "
                      ),
                      o(
                        "a",
                        {
                          attrs: {
                            href: "http://iotex.io/halo",
                            target: "_blank",
                            rel: "noopener noreferrer"
                          }
                        },
                        [e._v("Halo Program"), o("OutboundLink")],
                        1
                      )
                    ])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("p", [
                      e._v(
                        "If you have feedback/suggestion, please do not hesitate to contact us via "
                      ),
                      o(
                        "a",
                        {
                          attrs: {
                            href:
                              "https://community.iotex.io/c/research-development/protocol",
                            target: "_blank",
                            rel: "noopener noreferrer"
                          }
                        },
                        [e._v("forum"), o("OutboundLink")],
                        1
                      ),
                      e._v(" or "),
                      o("a", { attrs: { href: "mailto:support@iotex.io" } }, [
                        e._v("email")
                      ]),
                      e._v(".")
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
      t.default = a.exports;
    }
  }
]);
