/*!
 * Name    : Just Another Parallax [Jarallax]
 * Version : 1.12.5
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */
! function(n) {
    var o = {};

    function i(e) {
        if (o[e]) return o[e].exports;
        var t = o[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, i), t.l = !0, t.exports
    }
    i.m = n, i.c = o, i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function(t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) i.d(n, o, function(e) {
                return t[e]
            }.bind(null, o));
        return n
    }, i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "", i(i.s = 10)
}([, , function(e, t) {
    e.exports = function(e) {
        "complete" === document.readyState || "interactive" === document.readyState ? e.call() : document.attachEvent ? document.attachEvent("onreadystatechange", function() {
            "interactive" === document.readyState && e.call()
        }) : document.addEventListener && document.addEventListener("DOMContentLoaded", e)
    }
}, function(n, e, t) {
    (function(e) {
        var t = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {};
        n.exports = t
    }).call(this, t(4))
}, function(e, t) {
    function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    var o = function() {
        return this
    }();
    try {
        o = o || new Function("return this")()
    } catch (e) {
        "object" === ("undefined" == typeof window ? "undefined" : n(window)) && (o = window)
    }
    e.exports = o
}, , , , , , function(e, t, n) {
    e.exports = n(11)
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var o = n(2),
        i = n.n(o),
        a = n(3),
        r = n(12);

    function l(e) {
        return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    var s, c, u = a.window.jarallax;
    a.window.jarallax = r.default, a.window.jarallax.noConflict = function() {
        return a.window.jarallax = u, this
    }, void 0 !== a.jQuery && ((s = function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        Array.prototype.unshift.call(t, this);
        var o = r.default.apply(a.window, t);
        return "object" !== l(o) ? o : this
    }).constructor = r.default.constructor, c = a.jQuery.fn.jarallax, a.jQuery.fn.jarallax = s, a.jQuery.fn.jarallax.noConflict = function() {
        return a.jQuery.fn.jarallax = c, this
    }), i()(function() {
        Object(r.default)(document.querySelectorAll("[data-jarallax]"))
    })
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var o = n(2),
        i = n.n(o),
        b = n(3);

    function c(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var n = [],
                o = !0,
                i = !1,
                a = void 0;
            try {
                for (var r, l = e[Symbol.iterator](); !(o = (r = l.next()).done) && (n.push(r.value), !t || n.length !== t); o = !0);
            } catch (e) {
                i = !0, a = e
            } finally {
                try {
                    o || null == l.return || l.return()
                } finally {
                    if (i) throw a
                }
            }
            return n
        }(e, t) || function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return a(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o
    }

    function u(e) {
        return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
    }
    var l, h, p = b.window.navigator,
        d = -1 < p.userAgent.indexOf("MSIE ") || -1 < p.userAgent.indexOf("Trident/") || -1 < p.userAgent.indexOf("Edge/"),
        s = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(p.userAgent),
        m = function() {
            for (var e = "transform WebkitTransform MozTransform".split(" "), t = document.createElement("div"), n = 0; n < e.length; n += 1)
                if (t && void 0 !== t.style[e[n]]) return e[n];
            return !1
        }();

    function f() {
        h = s ? (!l && document.body && ((l = document.createElement("div")).style.cssText = "position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;", document.body.appendChild(l)), (l ? l.clientHeight : 0) || b.window.innerHeight || document.documentElement.clientHeight) : b.window.innerHeight || document.documentElement.clientHeight
    }
    f(), b.window.addEventListener("resize", f), b.window.addEventListener("orientationchange", f), b.window.addEventListener("load", f), i()(function() {
        f()
    });
    var g = [];

    function y() {
        g.length && (g.forEach(function(e, t) {
            var n = e.instance,
                o = e.oldData,
                i = n.$item.getBoundingClientRect(),
                a = {
                    width: i.width,
                    height: i.height,
                    top: i.top,
                    bottom: i.bottom,
                    wndW: b.window.innerWidth,
                    wndH: h
                },
                r = !o || o.wndW !== a.wndW || o.wndH !== a.wndH || o.width !== a.width || o.height !== a.height,
                l = r || !o || o.top !== a.top || o.bottom !== a.bottom;
            g[t].oldData = a, r && n.onResize(), l && n.onScroll()
        }), b.window.requestAnimationFrame(y))
    }

    function v(e, t) {
        ("object" === ("undefined" == typeof HTMLElement ? "undefined" : u(HTMLElement)) ? e instanceof HTMLElement : e && "object" === u(e) && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName) && (e = [e]);
        for (var n, o = e.length, i = 0, a = arguments.length, r = new Array(2 < a ? a - 2 : 0), l = 2; l < a; l++) r[l - 2] = arguments[l];
        for (; i < o; i += 1)
            if ("object" === u(t) || void 0 === t ? e[i].jarallax || (e[i].jarallax = new w(e[i], t)) : e[i].jarallax && (n = e[i].jarallax[t].apply(e[i].jarallax, r)), void 0 !== n) return n;
        return e
    }
    var x = 0,
        w = function() {
            function s(e, t) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, s);
                var n = this;
                n.instanceID = x, x += 1, n.$item = e, n.defaults = {
                    type: "scroll",
                    speed: .5,
                    imgSrc: null,
                    imgElement: ".jarallax-img",
                    imgSize: "cover",
                    imgPosition: "50% 50%",
                    imgRepeat: "no-repeat",
                    keepImg: !1,
                    elementInViewport: null,
                    zIndex: -100,
                    disableParallax: !1,
                    disableVideo: !1,
                    videoSrc: null,
                    videoStartTime: 0,
                    videoEndTime: 0,
                    videoVolume: 0,
                    videoLoop: !0,
                    videoPlayOnlyVisible: !0,
                    videoLazyLoading: !0,
                    onScroll: null,
                    onInit: null,
                    onDestroy: null,
                    onCoverImage: null
                };
                var o, i, a = n.$item.dataset || {},
                    r = {};
                Object.keys(a).forEach(function(e) {
                    var t = e.substr(0, 1).toLowerCase() + e.substr(1);
                    t && void 0 !== n.defaults[t] && (r[t] = a[e])
                }), n.options = n.extend({}, n.defaults, r, t), n.pureOptions = n.extend({}, n.options), Object.keys(n.options).forEach(function(e) {
                    "true" === n.options[e] ? n.options[e] = !0 : "false" === n.options[e] && (n.options[e] = !1)
                }), n.options.speed = Math.min(2, Math.max(-1, parseFloat(n.options.speed))), "string" == typeof n.options.disableParallax && (n.options.disableParallax = new RegExp(n.options.disableParallax)), n.options.disableParallax instanceof RegExp && (o = n.options.disableParallax, n.options.disableParallax = function() {
                    return o.test(p.userAgent)
                }), "function" != typeof n.options.disableParallax && (n.options.disableParallax = function() {
                    return !1
                }), "string" == typeof n.options.disableVideo && (n.options.disableVideo = new RegExp(n.options.disableVideo)), n.options.disableVideo instanceof RegExp && (i = n.options.disableVideo, n.options.disableVideo = function() {
                    return i.test(p.userAgent)
                }), "function" != typeof n.options.disableVideo && (n.options.disableVideo = function() {
                    return !1
                });
                var l = n.options.elementInViewport;
                l && "object" === u(l) && void 0 !== l.length && (l = c(l, 1)[0]), l instanceof Element || (l = null), n.options.elementInViewport = l, n.image = {
                    src: n.options.imgSrc || null,
                    $container: null,
                    useImgTag: !1,
                    position: /iPad|iPhone|iPod|Android/.test(p.userAgent) ? "absolute" : "fixed"
                }, n.initImg() && n.canInitParallax() && n.init()
            }
            var e, t, n;
            return e = s, (t = [{
                key: "css",
                value: function(t, n) {
                    return "string" == typeof n ? b.window.getComputedStyle(t).getPropertyValue(n) : (n.transform && m && (n[m] = n.transform), Object.keys(n).forEach(function(e) {
                        t.style[e] = n[e]
                    }), t)
                }
            }, {
                key: "extend",
                value: function(n) {
                    for (var e = arguments.length, o = new Array(1 < e ? e - 1 : 0), t = 1; t < e; t++) o[t - 1] = arguments[t];
                    return n = n || {}, Object.keys(o).forEach(function(t) {
                        o[t] && Object.keys(o[t]).forEach(function(e) {
                            n[e] = o[t][e]
                        })
                    }), n
                }
            }, {
                key: "getWindowData",
                value: function() {
                    return {
                        width: b.window.innerWidth || document.documentElement.clientWidth,
                        height: h,
                        y: document.documentElement.scrollTop
                    }
                }
            }, {
                key: "initImg",
                value: function() {
                    var e = this,
                        t = e.options.imgElement;
                    return t && "string" == typeof t && (t = e.$item.querySelector(t)), t instanceof Element || (e.options.imgSrc ? (t = new Image).src = e.options.imgSrc : t = null), t && (e.options.keepImg ? e.image.$item = t.cloneNode(!0) : (e.image.$item = t, e.image.$itemParent = t.parentNode), e.image.useImgTag = !0), !!e.image.$item || (null === e.image.src && (e.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", e.image.bgImage = e.css(e.$item, "background-image")), !(!e.image.bgImage || "none" === e.image.bgImage))
                }
            }, {
                key: "canInitParallax",
                value: function() {
                    return m && !this.options.disableParallax()
                }
            }, {
                key: "init",
                value: function() {
                    var e, t, n, o = this,
                        i = {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            overflow: "hidden"
                        },
                        a = {
                            pointerEvents: "none",
                            transformStyle: "preserve-3d",
                            backfaceVisibility: "hidden",
                            willChange: "transform,opacity"
                        };
                    o.options.keepImg || ((e = o.$item.getAttribute("style")) && o.$item.setAttribute("data-jarallax-original-styles", e), !o.image.useImgTag || (t = o.image.$item.getAttribute("style")) && o.image.$item.setAttribute("data-jarallax-original-styles", t)), "static" === o.css(o.$item, "position") && o.css(o.$item, {
                        position: "relative"
                    }), "auto" === o.css(o.$item, "z-index") && o.css(o.$item, {
                        zIndex: 0
                    }), o.image.$container = document.createElement("div"), o.css(o.image.$container, i), o.css(o.image.$container, {
                        "z-index": o.options.zIndex
                    }), d && o.css(o.image.$container, {
                        opacity: .9999
                    }), o.image.$container.setAttribute("id", "jarallax-container-".concat(o.instanceID)), o.$item.appendChild(o.image.$container), o.image.useImgTag ? a = o.extend({
                        "object-fit": o.options.imgSize,
                        "object-position": o.options.imgPosition,
                        "font-family": "object-fit: ".concat(o.options.imgSize, "; object-position: ").concat(o.options.imgPosition, ";"),
                        "max-width": "none"
                    }, i, a) : (o.image.$item = document.createElement("div"), o.image.src && (a = o.extend({
                        "background-position": o.options.imgPosition,
                        "background-size": o.options.imgSize,
                        "background-repeat": o.options.imgRepeat,
                        "background-image": o.image.bgImage || 'url("'.concat(o.image.src, '")')
                    }, i, a))), "opacity" !== o.options.type && "scale" !== o.options.type && "scale-opacity" !== o.options.type && 1 !== o.options.speed || (o.image.position = "absolute"), "fixed" === o.image.position && (n = function(e) {
                        for (var t = []; null !== e.parentElement;) 1 === (e = e.parentElement).nodeType && t.push(e);
                        return t
                    }(o.$item).filter(function(e) {
                        var t = b.window.getComputedStyle(e),
                            n = t["-webkit-transform"] || t["-moz-transform"] || t.transform;
                        return n && "none" !== n || /(auto|scroll)/.test(t.overflow + t["overflow-y"] + t["overflow-x"])
                    }), o.image.position = n.length ? "absolute" : "fixed"), a.position = o.image.position, o.css(o.image.$item, a), o.image.$container.appendChild(o.image.$item), o.onResize(), o.onScroll(!0), o.options.onInit && o.options.onInit.call(o), "none" !== o.css(o.$item, "background-image") && o.css(o.$item, {
                        "background-image": "none"
                    }), o.addToParallaxList()
                }
            }, {
                key: "addToParallaxList",
                value: function() {
                    g.push({
                        instance: this
                    }), 1 === g.length && b.window.requestAnimationFrame(y)
                }
            }, {
                key: "removeFromParallaxList",
                value: function() {
                    var n = this;
                    g.forEach(function(e, t) {
                        e.instance.instanceID === n.instanceID && g.splice(t, 1)
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    var e = this;
                    e.removeFromParallaxList();
                    var t, n = e.$item.getAttribute("data-jarallax-original-styles");
                    e.$item.removeAttribute("data-jarallax-original-styles"), n ? e.$item.setAttribute("style", n) : e.$item.removeAttribute("style"), e.image.useImgTag && (t = e.image.$item.getAttribute("data-jarallax-original-styles"), e.image.$item.removeAttribute("data-jarallax-original-styles"), t ? e.image.$item.setAttribute("style", n) : e.image.$item.removeAttribute("style"), e.image.$itemParent && e.image.$itemParent.appendChild(e.image.$item)), e.$clipStyles && e.$clipStyles.parentNode.removeChild(e.$clipStyles), e.image.$container && e.image.$container.parentNode.removeChild(e.image.$container), e.options.onDestroy && e.options.onDestroy.call(e), delete e.$item.jarallax
                }
            }, {
                key: "clipContainer",
                value: function() {
                    var e, t, n, o, i;
                    "fixed" === this.image.position && (n = (t = (e = this).image.$container.getBoundingClientRect()).width, o = t.height, e.$clipStyles || (e.$clipStyles = document.createElement("style"), e.$clipStyles.setAttribute("type", "text/css"), e.$clipStyles.setAttribute("id", "jarallax-clip-".concat(e.instanceID)), (document.head || document.getElementsByTagName("head")[0]).appendChild(e.$clipStyles)), i = "#jarallax-container-".concat(e.instanceID, " {\n            clip: rect(0 ").concat(n, "px ").concat(o, "px 0);\n            clip: rect(0, ").concat(n, "px, ").concat(o, "px, 0);\n            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n        }"), e.$clipStyles.styleSheet ? e.$clipStyles.styleSheet.cssText = i : e.$clipStyles.innerHTML = i)
                }
            }, {
                key: "coverImage",
                value: function() {
                    var e = this,
                        t = e.image.$container.getBoundingClientRect(),
                        n = t.height,
                        o = e.options.speed,
                        i = "scroll" === e.options.type || "scroll-opacity" === e.options.type,
                        a = 0,
                        r = n,
                        l = 0;
                    return i && (o < 0 ? (a = o * Math.max(n, h), h < n && (a -= o * (n - h))) : a = o * (n + h), 1 < o ? r = Math.abs(a - h) : o < 0 ? r = a / o + Math.abs(a) : r += (h - n) * (1 - o), a /= 2), e.parallaxScrollDistance = a, l = i ? (h - r) / 2 : (n - r) / 2, e.css(e.image.$item, {
                        height: "".concat(r, "px"),
                        marginTop: "".concat(l, "px"),
                        left: "fixed" === e.image.position ? "".concat(t.left, "px") : "0",
                        width: "".concat(t.width, "px")
                    }), e.options.onCoverImage && e.options.onCoverImage.call(e), {
                        image: {
                            height: r,
                            marginTop: l
                        },
                        container: t
                    }
                }
            }, {
                key: "isVisible",
                value: function() {
                    return this.isElementInViewport || !1
                }
            }, {
                key: "onScroll",
                value: function(e) {
                    var t, n, o, i, a, r, l, s, c, u, p = this,
                        d = p.$item.getBoundingClientRect(),
                        m = d.top,
                        f = d.height,
                        g = {},
                        y = d;
                    p.options.elementInViewport && (y = p.options.elementInViewport.getBoundingClientRect()), p.isElementInViewport = 0 <= y.bottom && 0 <= y.right && y.top <= h && y.left <= b.window.innerWidth, (e || p.isElementInViewport) && (t = Math.max(0, m), n = Math.max(0, f + m), o = Math.max(0, -m), i = Math.max(0, m + f - h), a = Math.max(0, f - (m + f - h)), r = Math.max(0, -m + h - f), l = 1 - (h - m) / (h + f) * 2, s = 1, f < h ? s = 1 - (o || i) / f : n <= h ? s = n / h : a <= h && (s = a / h), "opacity" !== p.options.type && "scale-opacity" !== p.options.type && "scroll-opacity" !== p.options.type || (g.transform = "translate3d(0,0,0)", g.opacity = s), "scale" !== p.options.type && "scale-opacity" !== p.options.type || (c = 1, p.options.speed < 0 ? c -= p.options.speed * s : c += p.options.speed * (1 - s), g.transform = "scale(".concat(c, ") translate3d(0,0,0)")), "scroll" !== p.options.type && "scroll-opacity" !== p.options.type || (u = p.parallaxScrollDistance * l, "absolute" === p.image.position && (u -= m), g.transform = "translate3d(0,".concat(u, "px,0)")), p.css(p.image.$item, g), p.options.onScroll && p.options.onScroll.call(p, {
                        section: d,
                        beforeTop: t,
                        beforeTopEnd: n,
                        afterTop: o,
                        beforeBottom: i,
                        beforeBottomEnd: a,
                        afterBottom: r,
                        visiblePercent: s,
                        fromViewportCenter: l
                    }))
                }
            }, {
                key: "onResize",
                value: function() {
                    this.coverImage(), this.clipContainer()
                }
            }]) && r(e.prototype, t), n && r(e, n), s
        }();
    v.constructor = w, t.default = v
}]);
//# sourceMappingURL=jarallax.min.js.map