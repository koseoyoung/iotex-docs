(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    558: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = {
          data: function() {
            return { formData: { email: null } };
          },
          computed: {
            data: function() {
              return this.$page.frontmatter;
            }
          },
          mounted: function() {},
          methods: { onSubmit: function() {} },
          filters: {}
        },
        l = a(69),
        o = Object(l.a)(
          n,
          function() {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "el-row",
              [
                a(
                  "el-col",
                  [
                    a(
                      "el-form",
                      {
                        attrs: {
                          inline: !0,
                          model: e.formData,
                          "show-message": !1,
                          size: "small",
                          "inline-message": !0
                        }
                      },
                      [
                        a(
                          "el-form-item",
                          [
                            a("el-input", {
                              attrs: { placeholder: "Email" },
                              model: {
                                value: e.formData.email,
                                callback: function(t) {
                                  e.$set(e.formData, "email", t);
                                },
                                expression: "formData.email"
                              }
                            })
                          ],
                          1
                        ),
                        e._v(" "),
                        a(
                          "el-form-item",
                          [
                            a(
                              "el-button",
                              {
                                attrs: { type: "primary" },
                                on: { click: e.onSubmit }
                              },
                              [e._v("Subscribe")]
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
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
      t.default = o.exports;
    }
  }
]);
