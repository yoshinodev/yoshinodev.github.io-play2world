(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [888],
    {
        1780: function (a, b, c) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                "/_app",
                function () {
                    return c(8510);
                },
            ]);
        },
        8510: function (a, b, c) {
            "use strict";
            c.r(b);
            var d = c(5893),
                e = c(9008),
                f = c(1163),
                g = c(4865),
                h = c.n(g),
                i = c(2739);
            c.n(i);
            var j = c(8322);
            c.n(j);
            var k = c(4294);
            c.n(k);
            var l = c(155);
            function m(a, b, c) {
                return b in a ? Object.defineProperty(a, b, { value: c, enumerable: !0, configurable: !0, writable: !0 }) : (a[b] = c), a;
            }
            c.n(l),
                (b.default = function (a) {
                    var b = a.Component,
                        c = a.pageProps;
                    return (
                        h().configure({ showSpinner: !1 }),
                        f.default.events.on("routeChangeStart", function () {
                            h().start();
                        }),
                        f.default.events.on("routeChangeComplete", function () {
                            h().done();
                        }),
                        (0, d.jsxs)(d.Fragment, {
                            children: [
                                (0, d.jsxs)(e.default, { children: [(0, d.jsx)("title", { children: "Samar - React Template" }), (0, d.jsx)("link", { rel: "icon", type: "image/png", sizes: "16x16", href: "images/favicon.png" })] }),
                                (0, d.jsx)(
                                    b,
                                    (function (a) {
                                        for (var b = 1; b < arguments.length; b++) {
                                            var c = null != arguments[b] ? arguments[b] : {},
                                                d = Object.keys(c);
                                            "function" == typeof Object.getOwnPropertySymbols &&
                                                (d = d.concat(
                                                    Object.getOwnPropertySymbols(c).filter(function (a) {
                                                        return Object.getOwnPropertyDescriptor(c, a).enumerable;
                                                    })
                                                )),
                                                d.forEach(function (b) {
                                                    m(a, b, c[b]);
                                                });
                                        }
                                        return a;
                                    })({}, c)
                                ),
                                (0, d.jsx)("a", {
                                    href: "#top",
                                    children: (0, d.jsx)("button", { className: "scroltop icon-up", type: "button", style: { display: "inline-block" }, children: (0, d.jsx)("i", { className: "fa fa-arrow-up" }) }),
                                }),
                            ],
                        })
                    );
                });
        },
        2739: function () {},
        8322: function () {},
        4294: function () {},
        155: function () {},
        9008: function (a, b, c) {
            a.exports = c(5443);
        },
        1163: function (a, b, c) {
            a.exports = c(387);
        },
        4865: function (a, b, c) {
            var d, e;
            !(function (f, g) {
                void 0 !== (e = "function" == typeof (d = g) ? d.call(b, c, b, a) : d) && (a.exports = e);
            })(this, function () {
                var a = {};
                a.version = "0.2.0";
                var b,
                    c,
                    d = (a.settings = {
                        minimum: 0.08,
                        easing: "ease",
                        positionUsing: "",
                        speed: 200,
                        trickle: !0,
                        trickleRate: 0.02,
                        trickleSpeed: 800,
                        showSpinner: !0,
                        barSelector: '[role="bar"]',
                        spinnerSelector: '[role="spinner"]',
                        parent: "body",
                        template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
                    });
                function e(a, b, c) {
                    return a < b ? b : a > c ? c : a;
                }
                function f(a) {
                    return (-1 + a) * 100;
                }
                (a.configure = function (a) {
                    var b, c;
                    for (b in a) void 0 !== (c = a[b]) && a.hasOwnProperty(b) && (d[b] = c);
                    return this;
                }),
                    (a.status = null),
                    (a.set = function (b) {
                        var c = a.isStarted();
                        (b = e(b, d.minimum, 1)), (a.status = 1 === b ? null : b);
                        var i = a.render(!c),
                            j = i.querySelector(d.barSelector),
                            k = d.speed,
                            l = d.easing;
                        return (
                            i.offsetWidth,
                            g(function (c) {
                                var e, g, m, n;
                                "" === d.positionUsing && (d.positionUsing = a.getPositioningCSS()),
                                    h(
                                        j,
                                        ((e = b),
                                        (g = k),
                                        (m = l),
                                        ((n =
                                            "translate3d" === d.positionUsing
                                                ? { transform: "translate3d(" + f(e) + "%,0,0)" }
                                                : "translate" === d.positionUsing
                                                ? { transform: "translate(" + f(e) + "%,0)" }
                                                : { "margin-left": f(e) + "%" }).transition = "all " + g + "ms " + m),
                                        n)
                                    ),
                                    1 === b
                                        ? (h(i, { transition: "none", opacity: 1 }),
                                          i.offsetWidth,
                                          setTimeout(function () {
                                              h(i, { transition: "all " + k + "ms linear", opacity: 0 }),
                                                  setTimeout(function () {
                                                      a.remove(), c();
                                                  }, k);
                                          }, k))
                                        : setTimeout(c, k);
                            }),
                            this
                        );
                    }),
                    (a.isStarted = function () {
                        return "number" == typeof a.status;
                    }),
                    (a.start = function () {
                        a.status || a.set(0);
                        var b = function () {
                            setTimeout(function () {
                                a.status && (a.trickle(), b());
                            }, d.trickleSpeed);
                        };
                        return d.trickle && b(), this;
                    }),
                    (a.done = function (b) {
                        return b || a.status ? a.inc(0.3 + 0.5 * Math.random()).set(1) : this;
                    }),
                    (a.inc = function (b) {
                        var c = a.status;
                        return c ? ("number" != typeof b && (b = (1 - c) * e(Math.random() * c, 0.1, 0.95)), (c = e(c + b, 0, 0.994)), a.set(c)) : a.start();
                    }),
                    (a.trickle = function () {
                        return a.inc(Math.random() * d.trickleRate);
                    }),
                    (b = 0),
                    (c = 0),
                    (a.promise = function (d) {
                        return (
                            d &&
                                "resolved" !== d.state() &&
                                (0 === c && a.start(),
                                b++,
                                c++,
                                d.always(function () {
                                    c--, 0 === c ? ((b = 0), a.done()) : a.set((b - c) / b);
                                })),
                            this
                        );
                    }),
                    (a.render = function (b) {
                        if (a.isRendered()) return document.getElementById("nprogress");
                        j(document.documentElement, "nprogress-busy");
                        var c = document.createElement("div");
                        (c.id = "nprogress"), (c.innerHTML = d.template);
                        var e,
                            g = c.querySelector(d.barSelector),
                            i = b ? "-100" : f(a.status || 0),
                            k = document.querySelector(d.parent);
                        return (
                            h(g, { transition: "all 0 linear", transform: "translate3d(" + i + "%,0,0)" }),
                            !d.showSpinner && (e = c.querySelector(d.spinnerSelector)) && m(e),
                            k != document.body && j(k, "nprogress-custom-parent"),
                            k.appendChild(c),
                            c
                        );
                    }),
                    (a.remove = function () {
                        k(document.documentElement, "nprogress-busy"), k(document.querySelector(d.parent), "nprogress-custom-parent");
                        var a = document.getElementById("nprogress");
                        a && m(a);
                    }),
                    (a.isRendered = function () {
                        return !!document.getElementById("nprogress");
                    }),
                    (a.getPositioningCSS = function () {
                        var a = document.body.style,
                            b = "WebkitTransform" in a ? "Webkit" : "MozTransform" in a ? "Moz" : "msTransform" in a ? "ms" : "OTransform" in a ? "O" : "";
                        return b + "Perspective" in a ? "translate3d" : b + "Transform" in a ? "translate" : "margin";
                    });
                var g = (function () {
                        var a = [];
                        function b() {
                            var c = a.shift();
                            c && c(b);
                        }
                        return function (c) {
                            a.push(c), 1 == a.length && b();
                        };
                    })(),
                    h = (function () {
                        var a = ["Webkit", "O", "Moz", "ms"],
                            b = {};
                        function c(c, d, e) {
                            var f;
                            (d =
                                b[
                                    (f = (f = d).replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function (a, b) {
                                        return b.toUpperCase();
                                    }))
                                ] ||
                                (b[f] = (function (b) {
                                    var c = document.body.style;
                                    if (b in c) return b;
                                    for (var d, e = a.length, f = b.charAt(0).toUpperCase() + b.slice(1); e--; ) if ((d = a[e] + f) in c) return d;
                                    return b;
                                })(f))),
                                (c.style[d] = e);
                        }
                        return function (a, b) {
                            var d,
                                e,
                                f = arguments;
                            if (2 == f.length) for (d in b) void 0 !== (e = b[d]) && b.hasOwnProperty(d) && c(a, d, e);
                            else c(a, f[1], f[2]);
                        };
                    })();
                function i(a, b) {
                    return ("string" == typeof a ? a : l(a)).indexOf(" " + b + " ") >= 0;
                }
                function j(a, b) {
                    var c = l(a);
                    i(c, b) || (a.className = (c + b).substring(1));
                }
                function k(a, b) {
                    var c,
                        d = l(a);
                    i(a, b) && ((c = d.replace(" " + b + " ", " ")), (a.className = c.substring(1, c.length - 1)));
                }
                function l(a) {
                    return (" " + (a.className || "") + " ").replace(/\s+/gi, " ");
                }
                function m(a) {
                    a && a.parentNode && a.parentNode.removeChild(a);
                }
                return a;
            });
        },
    },
    function (a) {
        var b = function (b) {
            return a((a.s = b));
        };
        a.O(0, [774, 179], function () {
            return b(1780), b(387);
        }),
            (_N_E = a.O());
    },
]);
