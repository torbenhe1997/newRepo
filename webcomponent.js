(function () {

    (function () {
        /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
        'use strict';
        var l;

        function aa(a) {
            var b = 0;
            return function () {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        }
        var ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        };

        function ca(a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math) return c
            }
            throw Error("Cannot find global object");
        }
        var p = ca(this);

        function q(a, b) {
            if (b) a: {
                var c = p;a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    if (!(e in c)) break a;
                    c = c[e]
                }
                a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && ba(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
        }
        q("Symbol", function (a) {
            function b(g) {
                if (this instanceof b) throw new TypeError("Symbol is not a constructor");
                return new c(d + (g || "") + "_" + e++, g)
            }

            function c(g, f) {
                this.g = g;
                ba(this, "description", {
                    configurable: !0,
                    writable: !0,
                    value: f
                })
            }
            if (a) return a;
            c.prototype.toString = function () {
                return this.g
            };
            var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
                e = 0;
            return b
        });
        q("Symbol.iterator", function (a) {
            if (a) return a;
            a = Symbol("Symbol.iterator");
            for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
                var d = p[b[c]];
                "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
                    configurable: !0,
                    writable: !0,
                    value: function () {
                        return da(aa(this))
                    }
                })
            }
            return a
        });
        q("Symbol.asyncIterator", function (a) {
            return a ? a : Symbol("Symbol.asyncIterator")
        });

        function da(a) {
            a = {
                next: a
            };
            a[Symbol.iterator] = function () {
                return this
            };
            return a
        }

        function r(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            return b ? b.call(a) : {
                next: aa(a)
            }
        }

        function ea(a) {
            if (!(a instanceof Array)) {
                a = r(a);
                for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
                a = c
            }
            return a
        }
        var fa = "function" == typeof Object.create ? Object.create : function (a) {
                function b() {}
                b.prototype = a;
                return new b
            },
            ha = function () {
                function a() {
                    function c() {}
                    new c;
                    Reflect.construct(c, [], function () {});
                    return new c instanceof c
                }
                if ("undefined" != typeof Reflect && Reflect.construct) {
                    if (a()) return Reflect.construct;
                    var b = Reflect.construct;
                    return function (c, d, e) {
                        c = b(c, d);
                        e && Reflect.setPrototypeOf(c, e.prototype);
                        return c
                    }
                }
                return function (c, d, e) {
                    void 0 === e && (e = c);
                    e = fa(e.prototype || Object.prototype);
                    return Function.prototype.apply.call(c,
                        e, d) || e
                }
            }(),
            ia;
        if ("function" == typeof Object.setPrototypeOf) ia = Object.setPrototypeOf;
        else {
            var ja;
            a: {
                var ka = {
                        a: !0
                    },
                    la = {};
                try {
                    la.__proto__ = ka;
                    ja = la.a;
                    break a
                } catch (a) {}
                ja = !1
            }
            ia = ja ? function (a, b) {
                a.__proto__ = b;
                if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
                return a
            } : null
        }
        var t = ia;

        function ma(a, b) {
            a.prototype = fa(b.prototype);
            a.prototype.constructor = a;
            if (t) t(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.ma = b.prototype
        }
        q("Reflect", function (a) {
            return a ? a : {}
        });
        q("Reflect.construct", function () {
            return ha
        });
        q("Reflect.setPrototypeOf", function (a) {
            return a ? a : t ? function (b, c) {
                try {
                    return t(b, c), !0
                } catch (d) {
                    return !1
                }
            } : null
        });

        function u(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        }
        q("WeakMap", function (a) {
            function b(k) {
                this.g = (h += Math.random() + 1).toString();
                if (k) {
                    k = r(k);
                    for (var m; !(m = k.next()).done;) m = m.value, this.set(m[0], m[1])
                }
            }

            function c() {}

            function d(k) {
                var m = typeof k;
                return "object" === m && null !== k || "function" === m
            }

            function e(k) {
                if (!u(k, f)) {
                    var m = new c;
                    ba(k, f, {
                        value: m
                    })
                }
            }

            function g(k) {
                var m = Object[k];
                m && (Object[k] = function (n) {
                    if (n instanceof c) return n;
                    Object.isExtensible(n) && e(n);
                    return m(n)
                })
            }
            if (function () {
                    if (!a || !Object.seal) return !1;
                    try {
                        var k = Object.seal({}),
                            m = Object.seal({}),
                            n = new a([
                                [k, 2],
                                [m, 3]
                            ]);
                        if (2 != n.get(k) || 3 != n.get(m)) return !1;
                        n.delete(k);
                        n.set(m, 4);
                        return !n.has(k) && 4 == n.get(m)
                    } catch (w) {
                        return !1
                    }
                }()) return a;
            var f = "$jscomp_hidden_" + Math.random();
            g("freeze");
            g("preventExtensions");
            g("seal");
            var h = 0;
            b.prototype.set = function (k, m) {
                if (!d(k)) throw Error("Invalid WeakMap key");
                e(k);
                if (!u(k, f)) throw Error("WeakMap key fail: " + k);
                k[f][this.g] = m;
                return this
            };
            b.prototype.get = function (k) {
                return d(k) && u(k, f) ? k[f][this.g] : void 0
            };
            b.prototype.has = function (k) {
                return d(k) && u(k,
                    f) && u(k[f], this.g)
            };
            b.prototype.delete = function (k) {
                return d(k) && u(k, f) && u(k[f], this.g) ? delete k[f][this.g] : !1
            };
            return b
        });
        q("Map", function (a) {
            function b() {
                var h = {};
                return h.A = h.next = h.head = h
            }

            function c(h, k) {
                var m = h.g;
                return da(function () {
                    if (m) {
                        for (; m.head != h.g;) m = m.A;
                        for (; m.next != m.head;) return m = m.next, {
                            done: !1,
                            value: k(m)
                        };
                        m = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            }

            function d(h, k) {
                var m = k && typeof k;
                "object" == m || "function" == m ? g.has(k) ? m = g.get(k) : (m = "" + ++f, g.set(k, m)) : m = "p_" + k;
                var n = h.h[m];
                if (n && u(h.h, m))
                    for (h = 0; h < n.length; h++) {
                        var w = n[h];
                        if (k !== k && w.key !== w.key || k === w.key) return {
                            id: m,
                            list: n,
                            index: h,
                            u: w
                        }
                    }
                return {
                    id: m,
                    list: n,
                    index: -1,
                    u: void 0
                }
            }

            function e(h) {
                this.h = {};
                this.g = b();
                this.size = 0;
                if (h) {
                    h = r(h);
                    for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
                }
            }
            if (function () {
                    if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                    try {
                        var h = Object.seal({
                                x: 4
                            }),
                            k = new a(r([
                                [h, "s"]
                            ]));
                        if ("s" != k.get(h) || 1 != k.size || k.get({
                                x: 4
                            }) || k.set({
                                x: 4
                            }, "t") != k || 2 != k.size) return !1;
                        var m = k.entries(),
                            n = m.next();
                        if (n.done || n.value[0] != h || "s" != n.value[1]) return !1;
                        n = m.next();
                        return n.done || 4 != n.value[0].x ||
                            "t" != n.value[1] || !m.next().done ? !1 : !0
                    } catch (w) {
                        return !1
                    }
                }()) return a;
            var g = new WeakMap;
            e.prototype.set = function (h, k) {
                h = 0 === h ? 0 : h;
                var m = d(this, h);
                m.list || (m.list = this.h[m.id] = []);
                m.u ? m.u.value = k : (m.u = {
                    next: this.g,
                    A: this.g.A,
                    head: this.g,
                    key: h,
                    value: k
                }, m.list.push(m.u), this.g.A.next = m.u, this.g.A = m.u, this.size++);
                return this
            };
            e.prototype.delete = function (h) {
                h = d(this, h);
                return h.u && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.h[h.id], h.u.A.next = h.u.next, h.u.next.A = h.u.A, h.u.head = null, this.size--,
                    !0) : !1
            };
            e.prototype.clear = function () {
                this.h = {};
                this.g = this.g.A = b();
                this.size = 0
            };
            e.prototype.has = function (h) {
                return !!d(this, h).u
            };
            e.prototype.get = function (h) {
                return (h = d(this, h).u) && h.value
            };
            e.prototype.entries = function () {
                return c(this, function (h) {
                    return [h.key, h.value]
                })
            };
            e.prototype.keys = function () {
                return c(this, function (h) {
                    return h.key
                })
            };
            e.prototype.values = function () {
                return c(this, function (h) {
                    return h.value
                })
            };
            e.prototype.forEach = function (h, k) {
                for (var m = this.entries(), n; !(n = m.next()).done;) n = n.value,
                    h.call(k, n[1], n[0], this)
            };
            e.prototype[Symbol.iterator] = e.prototype.entries;
            var f = 0;
            return e
        });

        function v(a, b, c) {
            if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
            if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
            return a + ""
        }
        q("String.prototype.endsWith", function (a) {
            return a ? a : function (b, c) {
                var d = v(this, b, "endsWith");
                void 0 === c && (c = d.length);
                c = Math.max(0, Math.min(c | 0, d.length));
                for (var e = b.length; 0 < e && 0 < c;)
                    if (d[--c] != b[--e]) return !1;
                return 0 >= e
            }
        });

        function na(a, b, c) {
            a instanceof String && (a = String(a));
            for (var d = a.length, e = 0; e < d; e++) {
                var g = a[e];
                if (b.call(c, g, e, a)) return {
                    S: e,
                    X: g
                }
            }
            return {
                S: -1,
                X: void 0
            }
        }
        q("Array.prototype.find", function (a) {
            return a ? a : function (b, c) {
                return na(this, b, c).X
            }
        });
        q("String.prototype.startsWith", function (a) {
            return a ? a : function (b, c) {
                var d = v(this, b, "startsWith"),
                    e = d.length,
                    g = b.length;
                c = Math.max(0, Math.min(c | 0, d.length));
                for (var f = 0; f < g && c < e;)
                    if (d[c++] != b[f++]) return !1;
                return f >= g
            }
        });
        q("String.prototype.repeat", function (a) {
            return a ? a : function (b) {
                var c = v(this, null, "repeat");
                if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
                b |= 0;
                for (var d = ""; b;)
                    if (b & 1 && (d += c), b >>>= 1) c += c;
                return d
            }
        });

        function oa(a, b) {
            a instanceof String && (a += "");
            var c = 0,
                d = !1,
                e = {
                    next: function () {
                        if (!d && c < a.length) {
                            var g = c++;
                            return {
                                value: b(g, a[g]),
                                done: !1
                            }
                        }
                        d = !0;
                        return {
                            done: !0,
                            value: void 0
                        }
                    }
                };
            e[Symbol.iterator] = function () {
                return e
            };
            return e
        }
        q("Array.prototype.keys", function (a) {
            return a ? a : function () {
                return oa(this, function (b) {
                    return b
                })
            }
        });
        q("Array.from", function (a) {
            return a ? a : function (b, c, d) {
                c = null != c ? c : function (h) {
                    return h
                };
                var e = [],
                    g = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
                if ("function" == typeof g) {
                    b = g.call(b);
                    for (var f = 0; !(g = b.next()).done;) e.push(c.call(d, g.value, f++))
                } else
                    for (g = b.length, f = 0; f < g; f++) e.push(c.call(d, b[f], f));
                return e
            }
        });
        q("Array.prototype.values", function (a) {
            return a ? a : function () {
                return oa(this, function (b, c) {
                    return c
                })
            }
        });
        q("String.prototype.trimLeft", function (a) {
            function b() {
                return this.replace(/^[\s\xa0]+/, "")
            }
            return a || b
        });
        q("String.prototype.trimStart", function (a) {
            return a || String.prototype.trimLeft
        });
        q("Object.setPrototypeOf", function (a) {
            return a || t
        });
        var pa = "function" == typeof Object.assign ? Object.assign : function (a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d)
                    for (var e in d) u(d, e) && (a[e] = d[e])
            }
            return a
        };
        q("Object.assign", function (a) {
            return a || pa
        });
        q("Promise", function (a) {
            function b(f) {
                this.g = 0;
                this.i = void 0;
                this.h = [];
                this.s = !1;
                var h = this.j();
                try {
                    f(h.resolve, h.reject)
                } catch (k) {
                    h.reject(k)
                }
            }

            function c() {
                this.g = null
            }

            function d(f) {
                return f instanceof b ? f : new b(function (h) {
                    h(f)
                })
            }
            if (a) return a;
            c.prototype.h = function (f) {
                if (null == this.g) {
                    this.g = [];
                    var h = this;
                    this.i(function () {
                        h.l()
                    })
                }
                this.g.push(f)
            };
            var e = p.setTimeout;
            c.prototype.i = function (f) {
                e(f, 0)
            };
            c.prototype.l = function () {
                for (; this.g && this.g.length;) {
                    var f = this.g;
                    this.g = [];
                    for (var h = 0; h < f.length; ++h) {
                        var k =
                            f[h];
                        f[h] = null;
                        try {
                            k()
                        } catch (m) {
                            this.j(m)
                        }
                    }
                }
                this.g = null
            };
            c.prototype.j = function (f) {
                this.i(function () {
                    throw f;
                })
            };
            b.prototype.j = function () {
                function f(m) {
                    return function (n) {
                        k || (k = !0, m.call(h, n))
                    }
                }
                var h = this,
                    k = !1;
                return {
                    resolve: f(this.J),
                    reject: f(this.l)
                }
            };
            b.prototype.J = function (f) {
                if (f === this) this.l(new TypeError("A Promise cannot resolve to itself"));
                else if (f instanceof b) this.Y(f);
                else {
                    a: switch (typeof f) {
                        case "object":
                            var h = null != f;
                            break a;
                        case "function":
                            h = !0;
                            break a;
                        default:
                            h = !1
                    }
                    h ? this.I(f) : this.o(f)
                }
            };
            b.prototype.I = function (f) {
                var h = void 0;
                try {
                    h = f.then
                } catch (k) {
                    this.l(k);
                    return
                }
                "function" == typeof h ? this.Z(h, f) : this.o(f)
            };
            b.prototype.l = function (f) {
                this.v(2, f)
            };
            b.prototype.o = function (f) {
                this.v(1, f)
            };
            b.prototype.v = function (f, h) {
                if (0 != this.g) throw Error("Cannot settle(" + f + ", " + h + "): Promise already settled in state" + this.g);
                this.g = f;
                this.i = h;
                2 === this.g && this.L();
                this.C()
            };
            b.prototype.L = function () {
                var f = this;
                e(function () {
                    if (f.D()) {
                        var h = p.console;
                        "undefined" !== typeof h && h.error(f.i)
                    }
                }, 1)
            };
            b.prototype.D =
                function () {
                    if (this.s) return !1;
                    var f = p.CustomEvent,
                        h = p.Event,
                        k = p.dispatchEvent;
                    if ("undefined" === typeof k) return !0;
                    "function" === typeof f ? f = new f("unhandledrejection", {
                        cancelable: !0
                    }) : "function" === typeof h ? f = new h("unhandledrejection", {
                        cancelable: !0
                    }) : (f = p.document.createEvent("CustomEvent"), f.initCustomEvent("unhandledrejection", !1, !0, f));
                    f.promise = this;
                    f.reason = this.i;
                    return k(f)
                };
            b.prototype.C = function () {
                if (null != this.h) {
                    for (var f = 0; f < this.h.length; ++f) g.h(this.h[f]);
                    this.h = null
                }
            };
            var g = new c;
            b.prototype.Y =
                function (f) {
                    var h = this.j();
                    f.K(h.resolve, h.reject)
                };
            b.prototype.Z = function (f, h) {
                var k = this.j();
                try {
                    f.call(h, k.resolve, k.reject)
                } catch (m) {
                    k.reject(m)
                }
            };
            b.prototype.then = function (f, h) {
                function k(z, I) {
                    return "function" == typeof z ? function (Da) {
                        try {
                            m(z(Da))
                        } catch (Ea) {
                            n(Ea)
                        }
                    } : I
                }
                var m, n, w = new b(function (z, I) {
                    m = z;
                    n = I
                });
                this.K(k(f, m), k(h, n));
                return w
            };
            b.prototype.catch = function (f) {
                return this.then(void 0, f)
            };
            b.prototype.K = function (f, h) {
                function k() {
                    switch (m.g) {
                        case 1:
                            f(m.i);
                            break;
                        case 2:
                            h(m.i);
                            break;
                        default:
                            throw Error("Unexpected state: " +
                                m.g);
                    }
                }
                var m = this;
                null == this.h ? g.h(k) : this.h.push(k);
                this.s = !0
            };
            b.resolve = d;
            b.reject = function (f) {
                return new b(function (h, k) {
                    k(f)
                })
            };
            b.race = function (f) {
                return new b(function (h, k) {
                    for (var m = r(f), n = m.next(); !n.done; n = m.next()) d(n.value).K(h, k)
                })
            };
            b.all = function (f) {
                var h = r(f),
                    k = h.next();
                return k.done ? d([]) : new b(function (m, n) {
                    function w(Da) {
                        return function (Ea) {
                            z[Da] = Ea;
                            I--;
                            0 == I && m(z)
                        }
                    }
                    var z = [],
                        I = 0;
                    do z.push(void 0), I++, d(k.value).K(w(z.length - 1), n), k = h.next(); while (!k.done)
                })
            };
            return b
        });
        q("Object.is", function (a) {
            return a ? a : function (b, c) {
                return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
            }
        });
        q("Array.prototype.includes", function (a) {
            return a ? a : function (b, c) {
                var d = this;
                d instanceof String && (d = String(d));
                var e = d.length;
                c = c || 0;
                for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                    var g = d[c];
                    if (g === b || Object.is(g, b)) return !0
                }
                return !1
            }
        });
        q("String.prototype.includes", function (a) {
            return a ? a : function (b, c) {
                return -1 !== v(this, b, "includes").indexOf(b, c || 0)
            }
        });
        q("Array.prototype.copyWithin", function (a) {
            function b(c) {
                c = Number(c);
                return Infinity === c || -Infinity === c ? c : c | 0
            }
            return a ? a : function (c, d, e) {
                var g = this.length;
                c = b(c);
                d = b(d);
                e = void 0 === e ? g : b(e);
                c = 0 > c ? Math.max(g + c, 0) : Math.min(c, g);
                d = 0 > d ? Math.max(g + d, 0) : Math.min(d, g);
                e = 0 > e ? Math.max(g + e, 0) : Math.min(e, g);
                if (c < d)
                    for (; d < e;) d in this ? this[c++] = this[d++] : (delete this[c++], d++);
                else
                    for (e = Math.min(e, g + d - c), c += e - d; e > d;) --e in this ? this[--c] = this[e] : delete this[--c];
                return this
            }
        });
        q("Array.prototype.entries", function (a) {
            return a ? a : function () {
                return oa(this, function (b, c) {
                    return [b, c]
                })
            }
        });
        q("Array.prototype.fill", function (a) {
            return a ? a : function (b, c, d) {
                var e = this.length || 0;
                0 > c && (c = Math.max(0, e + c));
                if (null == d || d > e) d = e;
                d = Number(d);
                0 > d && (d = Math.max(0, e + d));
                for (c = Number(c || 0); c < d; c++) this[c] = b;
                return this
            }
        });
        q("Array.prototype.findIndex", function (a) {
            return a ? a : function (b, c) {
                return na(this, b, c).S
            }
        });
        q("Array.prototype.flat", function (a) {
            return a ? a : function (b) {
                b = void 0 === b ? 1 : b;
                for (var c = [], d = 0; d < this.length; d++) {
                    var e = this[d];
                    Array.isArray(e) && 0 < b ? (e = Array.prototype.flat.call(e, b - 1), c.push.apply(c, e)) : c.push(e)
                }
                return c
            }
        });
        q("Array.prototype.flatMap", function (a) {
            return a ? a : function (b, c) {
                for (var d = [], e = 0; e < this.length; e++) {
                    var g = b.call(c, this[e], e, this);
                    Array.isArray(g) ? d.push.apply(d, g) : d.push(g)
                }
                return d
            }
        });
        q("Array.of", function (a) {
            return a ? a : function (b) {
                return Array.from(arguments)
            }
        });
        q("globalThis", function (a) {
            return a || p
        });
        q("Math.acosh", function (a) {
            return a ? a : function (b) {
                b = Number(b);
                return Math.log(b + Math.sqrt(b * b - 1))
            }
        });
        q("Math.asinh", function (a) {
            return a ? a : function (b) {
                b = Number(b);
                if (0 === b) return b;
                var c = Math.log(Math.abs(b) + Math.sqrt(b * b + 1));
                return 0 > b ? -c : c
            }
        });
        q("Math.log1p", function (a) {
            return a ? a : function (b) {
                b = Number(b);
                if (.25 > b && -.25 < b) {
                    for (var c = b, d = 1, e = b, g = 0, f = 1; g != e;) c *= b, f *= -1, e = (g = e) + f * c / ++d;
                    return e
                }
                return Math.log(1 + b)
            }
        });
        q("Math.atanh", function (a) {
            if (a) return a;
            var b = Math.log1p;
            return function (c) {
                c = Number(c);
                return (b(c) - b(-c)) / 2
            }
        });
        q("Math.cbrt", function (a) {
            return a ? a : function (b) {
                if (0 === b) return b;
                b = Number(b);
                var c = Math.pow(Math.abs(b), 1 / 3);
                return 0 > b ? -c : c
            }
        });
        q("Math.clz32", function (a) {
            return a ? a : function (b) {
                b = Number(b) >>> 0;
                if (0 === b) return 32;
                var c = 0;
                0 === (b & 4294901760) && (b <<= 16, c += 16);
                0 === (b & 4278190080) && (b <<= 8, c += 8);
                0 === (b & 4026531840) && (b <<= 4, c += 4);
                0 === (b & 3221225472) && (b <<= 2, c += 2);
                0 === (b & 2147483648) && c++;
                return c
            }
        });
        q("Math.cosh", function (a) {
            if (a) return a;
            var b = Math.exp;
            return function (c) {
                c = Number(c);
                return (b(c) + b(-c)) / 2
            }
        });
        q("Math.expm1", function (a) {
            return a ? a : function (b) {
                b = Number(b);
                if (.25 > b && -.25 < b) {
                    for (var c = b, d = 1, e = b, g = 0; g != e;) c *= b / ++d, e = (g = e) + c;
                    return e
                }
                return Math.exp(b) - 1
            }
        });
        q("Math.fround", function (a) {
            if (a) return a;
            if ("function" !== typeof Float32Array) return function (c) {
                return c
            };
            var b = new Float32Array(1);
            return function (c) {
                b[0] = c;
                return b[0]
            }
        });
        q("Math.hypot", function (a) {
            return a ? a : function (b) {
                if (2 > arguments.length) return arguments.length ? Math.abs(arguments[0]) : 0;
                var c, d, e;
                for (c = e = 0; c < arguments.length; c++) e = Math.max(e, Math.abs(arguments[c]));
                if (1E100 < e || 1E-100 > e) {
                    if (!e) return e;
                    for (c = d = 0; c < arguments.length; c++) {
                        var g = Number(arguments[c]) / e;
                        d += g * g
                    }
                    return Math.sqrt(d) * e
                }
                for (c = d = 0; c < arguments.length; c++) g = Number(arguments[c]), d += g * g;
                return Math.sqrt(d)
            }
        });
        q("Math.imul", function (a) {
            return a ? a : function (b, c) {
                b = Number(b);
                c = Number(c);
                var d = b & 65535,
                    e = c & 65535;
                return d * e + ((b >>> 16 & 65535) * e + d * (c >>> 16 & 65535) << 16 >>> 0) | 0
            }
        });
        q("Math.log10", function (a) {
            return a ? a : function (b) {
                return Math.log(b) / Math.LN10
            }
        });
        q("Math.log2", function (a) {
            return a ? a : function (b) {
                return Math.log(b) / Math.LN2
            }
        });
        q("Math.sign", function (a) {
            return a ? a : function (b) {
                b = Number(b);
                return 0 === b || isNaN(b) ? b : 0 < b ? 1 : -1
            }
        });
        q("Math.sinh", function (a) {
            if (a) return a;
            var b = Math.exp;
            return function (c) {
                c = Number(c);
                return 0 === c ? c : (b(c) - b(-c)) / 2
            }
        });
        q("Math.tanh", function (a) {
            return a ? a : function (b) {
                b = Number(b);
                if (0 === b) return b;
                var c = Math.exp(-2 * Math.abs(b));
                c = (1 - c) / (1 + c);
                return 0 > b ? -c : c
            }
        });
        q("Math.trunc", function (a) {
            return a ? a : function (b) {
                b = Number(b);
                if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b) return b;
                var c = Math.floor(Math.abs(b));
                return 0 > b ? -c : c
            }
        });
        q("Number.EPSILON", function () {
            return Math.pow(2, -52)
        });
        q("Number.MAX_SAFE_INTEGER", function () {
            return 9007199254740991
        });
        q("Number.MIN_SAFE_INTEGER", function () {
            return -9007199254740991
        });
        q("Number.isFinite", function (a) {
            return a ? a : function (b) {
                return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
            }
        });
        q("Number.isInteger", function (a) {
            return a ? a : function (b) {
                return Number.isFinite(b) ? b === Math.floor(b) : !1
            }
        });
        q("Number.isNaN", function (a) {
            return a ? a : function (b) {
                return "number" === typeof b && isNaN(b)
            }
        });
        q("Number.isSafeInteger", function (a) {
            return a ? a : function (b) {
                return Number.isInteger(b) && Math.abs(b) <= Number.MAX_SAFE_INTEGER
            }
        });
        q("Number.parseFloat", function (a) {
            return a || parseFloat
        });
        q("Number.parseInt", function (a) {
            return a || parseInt
        });
        q("Object.entries", function (a) {
            return a ? a : function (b) {
                var c = [],
                    d;
                for (d in b) u(b, d) && c.push([d, b[d]]);
                return c
            }
        });
        q("Object.fromEntries", function (a) {
            return a ? a : function (b) {
                var c = {};
                if (!(Symbol.iterator in b)) throw new TypeError("" + b + " is not iterable");
                b = b[Symbol.iterator].call(b);
                for (var d = b.next(); !d.done; d = b.next()) {
                    d = d.value;
                    if (Object(d) !== d) throw new TypeError("iterable for fromEntries should yield objects");
                    c[d[0]] = d[1]
                }
                return c
            }
        });
        q("Object.getOwnPropertySymbols", function (a) {
            return a ? a : function () {
                return []
            }
        });
        q("Reflect.ownKeys", function (a) {
            return a ? a : function (b) {
                var c = [],
                    d = Object.getOwnPropertyNames(b);
                b = Object.getOwnPropertySymbols(b);
                for (var e = 0; e < d.length; e++)("jscomp_symbol_" == d[e].substring(0, 14) ? b : c).push(d[e]);
                return c.concat(b)
            }
        });
        q("Object.getOwnPropertyDescriptors", function (a) {
            return a ? a : function (b) {
                for (var c = {}, d = Reflect.ownKeys(b), e = 0; e < d.length; e++) c[d[e]] = Object.getOwnPropertyDescriptor(b, d[e]);
                return c
            }
        });
        q("Object.values", function (a) {
            return a ? a : function (b) {
                var c = [],
                    d;
                for (d in b) u(b, d) && c.push(b[d]);
                return c
            }
        });
        q("Promise.allSettled", function (a) {
            function b(d) {
                return {
                    status: "fulfilled",
                    value: d
                }
            }

            function c(d) {
                return {
                    status: "rejected",
                    reason: d
                }
            }
            return a ? a : function (d) {
                var e = this;
                d = Array.from(d, function (g) {
                    return e.resolve(g).then(b, c)
                });
                return e.all(d)
            }
        });
        q("Promise.prototype.finally", function (a) {
            return a ? a : function (b) {
                return this.then(function (c) {
                    return Promise.resolve(b()).then(function () {
                        return c
                    })
                }, function (c) {
                    return Promise.resolve(b()).then(function () {
                        throw c;
                    })
                })
            }
        });
        q("AggregateError", function (a) {
            function b(c, d) {
                d = Error(d);
                "stack" in d && (this.stack = d.stack);
                this.errors = c;
                this.message = d.message
            }
            if (a) return a;
            ma(b, Error);
            b.prototype.name = "AggregateError";
            return b
        });
        q("Promise.any", function (a) {
            return a ? a : function (b) {
                b = b instanceof Array ? b : Array.from(b);
                return Promise.all(b.map(function (c) {
                    return Promise.resolve(c).then(function (d) {
                        throw d;
                    }, function (d) {
                        return d
                    })
                })).then(function (c) {
                    throw new AggregateError(c, "All promises were rejected");
                }, function (c) {
                    return c
                })
            }
        });
        q("Reflect.apply", function (a) {
            if (a) return a;
            var b = Function.prototype.apply;
            return function (c, d, e) {
                return b.call(c, d, e)
            }
        });
        q("Reflect.defineProperty", function (a) {
            return a ? a : function (b, c, d) {
                try {
                    Object.defineProperty(b, c, d);
                    var e = Object.getOwnPropertyDescriptor(b, c);
                    return e ? e.configurable === (d.configurable || !1) && e.enumerable === (d.enumerable || !1) && ("value" in e ? e.value === d.value && e.writable === (d.writable || !1) : e.get === d.get && e.set === d.set) : !1
                } catch (g) {
                    return !1
                }
            }
        });
        q("Reflect.deleteProperty", function (a) {
            return a ? a : function (b, c) {
                if (!u(b, c)) return !0;
                try {
                    return delete b[c]
                } catch (d) {
                    return !1
                }
            }
        });
        q("Reflect.getOwnPropertyDescriptor", function (a) {
            return a || Object.getOwnPropertyDescriptor
        });
        q("Reflect.getPrototypeOf", function (a) {
            return a || Object.getPrototypeOf
        });

        function qa(a, b) {
            for (; a;) {
                var c = Reflect.getOwnPropertyDescriptor(a, b);
                if (c) return c;
                a = Reflect.getPrototypeOf(a)
            }
        }
        q("Reflect.get", function (a) {
            return a ? a : function (b, c, d) {
                if (2 >= arguments.length) return b[c];
                var e = qa(b, c);
                if (e) return e.get ? e.get.call(d) : e.value
            }
        });
        q("Reflect.has", function (a) {
            return a ? a : function (b, c) {
                return c in b
            }
        });
        q("Reflect.isExtensible", function (a) {
            return a ? a : "function" == typeof Object.isExtensible ? Object.isExtensible : function () {
                return !0
            }
        });
        q("Reflect.preventExtensions", function (a) {
            return a ? a : "function" != typeof Object.preventExtensions ? function () {
                return !1
            } : function (b) {
                Object.preventExtensions(b);
                return !Object.isExtensible(b)
            }
        });
        q("Reflect.set", function (a) {
            return a ? a : function (b, c, d, e) {
                var g = qa(b, c);
                return g ? g.set ? (g.set.call(3 < arguments.length ? e : b, d), !0) : g.writable && !Object.isFrozen(b) ? (b[c] = d, !0) : !1 : Reflect.isExtensible(b) ? (b[c] = d, !0) : !1
            }
        });
        q("Set", function (a) {
            function b(c) {
                this.g = new Map;
                if (c) {
                    c = r(c);
                    for (var d; !(d = c.next()).done;) this.add(d.value)
                }
                this.size = this.g.size
            }
            if (function () {
                    if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                    try {
                        var c = Object.seal({
                                x: 4
                            }),
                            d = new a(r([c]));
                        if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                                x: 4
                            }) != d || 2 != d.size) return !1;
                        var e = d.entries(),
                            g = e.next();
                        if (g.done || g.value[0] != c || g.value[1] != c) return !1;
                        g = e.next();
                        return g.done || g.value[0] == c || 4 != g.value[0].x ||
                            g.value[1] != g.value[0] ? !1 : e.next().done
                    } catch (f) {
                        return !1
                    }
                }()) return a;
            b.prototype.add = function (c) {
                c = 0 === c ? 0 : c;
                this.g.set(c, c);
                this.size = this.g.size;
                return this
            };
            b.prototype.delete = function (c) {
                c = this.g.delete(c);
                this.size = this.g.size;
                return c
            };
            b.prototype.clear = function () {
                this.g.clear();
                this.size = 0
            };
            b.prototype.has = function (c) {
                return this.g.has(c)
            };
            b.prototype.entries = function () {
                return this.g.entries()
            };
            b.prototype.values = function () {
                return this.g.values()
            };
            b.prototype.keys = b.prototype.values;
            b.prototype[Symbol.iterator] =
                b.prototype.values;
            b.prototype.forEach = function (c, d) {
                var e = this;
                this.g.forEach(function (g) {
                    return c.call(d, g, g, e)
                })
            };
            return b
        });
        q("String.prototype.codePointAt", function (a) {
            return a ? a : function (b) {
                var c = v(this, null, "codePointAt"),
                    d = c.length;
                b = Number(b) || 0;
                if (0 <= b && b < d) {
                    b |= 0;
                    var e = c.charCodeAt(b);
                    if (55296 > e || 56319 < e || b + 1 === d) return e;
                    b = c.charCodeAt(b + 1);
                    return 56320 > b || 57343 < b ? e : 1024 * (e - 55296) + b + 9216
                }
            }
        });
        q("String.fromCodePoint", function (a) {
            return a ? a : function (b) {
                for (var c = "", d = 0; d < arguments.length; d++) {
                    var e = Number(arguments[d]);
                    if (0 > e || 1114111 < e || e !== Math.floor(e)) throw new RangeError("invalid_code_point " + e);
                    65535 >= e ? c += String.fromCharCode(e) : (e -= 65536, c += String.fromCharCode(e >>> 10 & 1023 | 55296), c += String.fromCharCode(e & 1023 | 56320))
                }
                return c
            }
        });
        q("String.prototype.matchAll", function (a) {
            return a ? a : function (b) {
                if (b instanceof RegExp && !b.global) throw new TypeError("RegExp passed into String.prototype.matchAll() must have global tag.");
                var c = new RegExp(b, b instanceof RegExp ? void 0 : "g"),
                    d = this,
                    e = !1,
                    g = {
                        next: function () {
                            if (e) return {
                                value: void 0,
                                done: !0
                            };
                            var f = c.exec(d);
                            if (!f) return e = !0, {
                                value: void 0,
                                done: !0
                            };
                            "" === f[0] && (c.lastIndex += 1);
                            return {
                                value: f,
                                done: !1
                            }
                        }
                    };
                g[Symbol.iterator] = function () {
                    return g
                };
                return g
            }
        });

        function ra(a, b) {
            a = void 0 !== a ? String(a) : " ";
            return 0 < b && a ? a.repeat(Math.ceil(b / a.length)).substring(0, b) : ""
        }
        q("String.prototype.padEnd", function (a) {
            return a ? a : function (b, c) {
                var d = v(this, null, "padStart");
                return d + ra(c, b - d.length)
            }
        });
        q("String.prototype.padStart", function (a) {
            return a ? a : function (b, c) {
                var d = v(this, null, "padStart");
                return ra(c, b - d.length) + d
            }
        });
        q("String.prototype.replaceAll", function (a) {
            return a ? a : function (b, c) {
                if (b instanceof RegExp && !b.global) throw new TypeError("String.prototype.replaceAll called with a non-global RegExp argument.");
                return b instanceof RegExp ? this.replace(b, c) : this.replace(new RegExp(String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), c)
            }
        });
        q("String.prototype.trimRight", function (a) {
            function b() {
                return this.replace(/[\s\xa0]+$/, "")
            }
            return a || b
        });
        q("String.prototype.trimEnd", function (a) {
            return a || String.prototype.trimRight
        });

        function x(a) {
            return a ? a : Array.prototype.copyWithin
        }
        q("Int8Array.prototype.copyWithin", x);
        q("Uint8Array.prototype.copyWithin", x);
        q("Uint8ClampedArray.prototype.copyWithin", x);
        q("Int16Array.prototype.copyWithin", x);
        q("Uint16Array.prototype.copyWithin", x);
        q("Int32Array.prototype.copyWithin", x);
        q("Uint32Array.prototype.copyWithin", x);
        q("Float32Array.prototype.copyWithin", x);
        q("Float64Array.prototype.copyWithin", x);

        function y(a) {
            return a ? a : Array.prototype.fill
        }
        q("Int8Array.prototype.fill", y);
        q("Uint8Array.prototype.fill", y);
        q("Uint8ClampedArray.prototype.fill", y);
        q("Int16Array.prototype.fill", y);
        q("Uint16Array.prototype.fill", y);
        q("Int32Array.prototype.fill", y);
        q("Uint32Array.prototype.fill", y);
        q("Float32Array.prototype.fill", y);
        q("Float64Array.prototype.fill", y);
        q("WeakSet", function (a) {
            function b(c) {
                this.g = new WeakMap;
                if (c) {
                    c = r(c);
                    for (var d; !(d = c.next()).done;) this.add(d.value)
                }
            }
            if (function () {
                    if (!a || !Object.seal) return !1;
                    try {
                        var c = Object.seal({}),
                            d = Object.seal({}),
                            e = new a([c]);
                        if (!e.has(c) || e.has(d)) return !1;
                        e.delete(c);
                        e.add(d);
                        return !e.has(c) && e.has(d)
                    } catch (g) {
                        return !1
                    }
                }()) return a;
            b.prototype.add = function (c) {
                this.g.set(c, !0);
                return this
            };
            b.prototype.has = function (c) {
                return this.g.has(c)
            };
            b.prototype.delete = function (c) {
                return this.g.delete(c)
            };
            return b
        });
        var A = this || self;

        function B(a) {
            a = a.split(".");
            for (var b = A, c = 0; c < a.length; c++)
                if (b = b[a[c]], null == b) return null;
            return b
        }

        function C() {}

        function sa(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        }

        function ta(a, b, c) {
            return a.call.apply(a.bind, arguments)
        }

        function ua(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function () {
                    var e = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(e, d);
                    return a.apply(b, e)
                }
            }
            return function () {
                return a.apply(b, arguments)
            }
        }

        function D(a, b, c) {
            Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? D = ta : D = ua;
            return D.apply(null, arguments)
        }

        function E(a, b) {
            a = a.split(".");
            var c = A;
            a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
        }

        function va(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.ma = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.na = function (d, e, g) {
                for (var f = Array(arguments.length - 2), h = 2; h < arguments.length; h++) f[h - 2] = arguments[h];
                return b.prototype[e].apply(d, f)
            }
        }

        function wa(a) {
            return a
        };

        function F(a) {
            if (Error.captureStackTrace) Error.captureStackTrace(this, F);
            else {
                var b = Error().stack;
                b && (this.stack = b)
            }
            a && (this.message = String(a))
        }
        va(F, Error);
        F.prototype.name = "CustomError";

        function G(a, b) {
            this.g = a === xa && b || "";
            this.h = ya
        }
        G.prototype.T = !0;
        G.prototype.R = function () {
            return this.g
        };

        function za(a) {
            return a instanceof G && a.constructor === G && a.h === ya ? a.g : "type_error:Const"
        }

        function H(a) {
            return new G(xa, a)
        }
        var ya = {},
            xa = {};
        var J = {
            m: {}
        };
        J.m.N = {
            ia: {
                "gstatic.com": {
                    loader: H("https://www.gstatic.com/charts/%{version}/loader.js"),
                    debug: H("https://www.gstatic.com/charts/debug/%{version}/js/jsapi_debug_%{package}_module.js"),
                    debug_i18n: H("https://www.gstatic.com/charts/debug/%{version}/i18n/jsapi_debug_i18n_%{package}_module__%{language}.js"),
                    compiled: H("https://www.gstatic.com/charts/%{version}/js/jsapi_compiled_%{package}_module.js"),
                    compiled_i18n: H("https://www.gstatic.com/charts/%{version}/i18n/jsapi_compiled_i18n_%{package}_module__%{language}.js"),
                    css: H("https://www.gstatic.com/charts/%{version}/css/%{subdir}/%{filename}"),
                    css2: H("https://www.gstatic.com/charts/%{version}/css/%{subdir1}/%{subdir2}/%{filename}"),
                    third_party: H("https://www.gstatic.com/charts/%{version}/third_party/%{subdir}/%{filename}"),
                    third_party2: H("https://www.gstatic.com/charts/%{version}/third_party/%{subdir1}/%{subdir2}/%{filename}"),
                    third_party_gen: H("https://www.gstatic.com/charts/%{version}/third_party/%{subdir}/%{filename}")
                },
                "gstatic.cn": {
                    loader: H("https://www.gstatic.cn/charts/%{version}/loader.js"),
                    debug: H("https://www.gstatic.cn/charts/debug/%{version}/js/jsapi_debug_%{package}_module.js"),
                    debug_i18n: H("https://www.gstatic.cn/charts/debug/%{version}/i18n/jsapi_debug_i18n_%{package}_module__%{language}.js"),
                    compiled: H("https://www.gstatic.cn/charts/%{version}/js/jsapi_compiled_%{package}_module.js"),
                    compiled_i18n: H("https://www.gstatic.cn/charts/%{version}/i18n/jsapi_compiled_i18n_%{package}_module__%{language}.js"),
                    css: H("https://www.gstatic.cn/charts/%{version}/css/%{subdir}/%{filename}"),
                    css2: H("https://www.gstatic.cn/charts/%{version}/css/%{subdir1}/%{subdir2}/%{filename}"),
                    third_party: H("https://www.gstatic.cn/charts/%{version}/third_party/%{subdir}/%{filename}"),
                    third_party2: H("https://www.gstatic.cn/charts/%{version}/third_party/%{subdir1}/%{subdir2}/%{filename}"),
                    third_party_gen: H("https://www.gstatic.cn/charts/%{version}/third_party/%{subdir}/%{filename}")
                }
            },
            ea: ["default"],
            qa: {
                "default": [],
                graphics: ["default"],
                ui: ["graphics"],
                ui_base: ["graphics"],
                flashui: ["ui"],
                fw: ["ui"],
                geo: ["ui"],
                annotatedtimeline: ["annotationchart"],
                annotationchart: ["ui", "controls", "corechart", "table"],
                areachart: "browserchart",
                bar: ["fw", "dygraph", "webfontloader"],
                barchart: "browserchart",
                browserchart: ["ui"],
                bubbles: ["fw", "d3"],
                calendar: ["fw"],
                charteditor: "ui corechart imagechart annotatedtimeline gauge geochart motionchart orgchart table".split(" "),
                charteditor_base: "ui_base corechart imagechart annotatedtimeline gauge geochart motionchart orgchart table_base".split(" "),
                circles: ["fw", "d3"],
                clusterchart: ["corechart", "d3"],
                columnchart: "browserchart",
                controls: ["ui"],
                controls_base: ["ui_base"],
                corechart: ["ui"],
                gantt: ["fw", "dygraph"],
                gauge: ["ui"],
                geochart: ["geo"],
                geomap: ["flashui", "geo"],
                geomap_base: ["ui_base"],
                helloworld: ["fw"],
                imagechart: ["ui"],
                imageareachart: "imagechart",
                imagebarchart: "imagechart",
                imagelinechart: "imagechart",
                imagepiechart: "imagechart",
                imagesparkline: "imagechart",
                line: ["fw", "dygraph", "webfontloader"],
                linechart: "browserchart",
                map: ["geo"],
                matrix: ["vegachart"],
                motionchart: ["flashui"],
                orgchart: ["ui"],
                overtimecharts: ["ui", "corechart"],
                piechart: "browserchart",
                sankey: ["fw", "d3", "d3.sankey"],
                scatter: ["fw", "dygraph", "webfontloader"],
                scatterchart: "browserchart",
                sunburst: ["fw",
                    "d3"
                ],
                streamgraph: ["fw", "d3"],
                table: ["ui"],
                table_base: ["ui_base"],
                timeline: ["fw", "ui", "dygraph"],
                treemap: ["ui"],
                vegachart: ["graphics"],
                wordtree: ["ui"]
            },
            Ba: {
                d3: {
                    subdir1: "d3",
                    subdir2: "v5",
                    filename: "d3.js"
                },
                "d3.sankey": {
                    subdir1: "d3_sankey",
                    subdir2: "v4",
                    filename: "d3.sankey.js"
                },
                webfontloader: {
                    subdir: "webfontloader",
                    filename: "webfont.js"
                }
            },
            Aa: {
                dygraph: {
                    subdir: "dygraphs",
                    filename: "dygraph-tickers-combined.js"
                }
            },
            pa: {
                "default": [{
                    subdir: "core",
                    filename: "tooltip.css"
                }],
                annotationchart: [{
                    subdir: "annotationchart",
                    filename: "annotationchart.css"
                }],
                charteditor: [{
                    subdir: "charteditor",
                    filename: "charteditor.css"
                }],
                charteditor_base: [{
                    subdir: "charteditor_base",
                    filename: "charteditor_base.css"
                }],
                controls: [{
                    subdir: "controls",
                    filename: "controls.css"
                }],
                imagesparkline: [{
                    subdir: "imagechart",
                    filename: "imagesparkline.css"
                }],
                orgchart: [{
                    subdir: "orgchart",
                    filename: "orgchart.css"
                }],
                table: [{
                    subdir: "table",
                    filename: "table.css"
                }, {
                    subdir: "util",
                    filename: "format.css"
                }],
                table_base: [{
                    subdir: "util",
                    filename: "format.css"
                }, {
                    subdir: "table",
                    filename: "table_base.css"
                }],
                ui: [{
                    subdir: "util",
                    filename: "util.css"
                }],
                ui_base: [{
                    subdir: "util",
                    filename: "util_base.css"
                }]
            }
        };
        J.m.$ = {
            ga: {
                "chrome-frame": {
                    versions: {
                        "1.0.0": {
                            uncompressed: "CFInstall.js",
                            compressed: "CFInstall.min.js"
                        },
                        "1.0.1": {
                            uncompressed: "CFInstall.js",
                            compressed: "CFInstall.min.js"
                        },
                        "1.0.2": {
                            uncompressed: "CFInstall.js",
                            compressed: "CFInstall.min.js"
                        }
                    },
                    aliases: {
                        1: "1.0.2",
                        "1.0": "1.0.2"
                    }
                },
                swfobject: {
                    versions: {
                        "2.1": {
                            uncompressed: "swfobject_src.js",
                            compressed: "swfobject.js"
                        },
                        "2.2": {
                            uncompressed: "swfobject_src.js",
                            compressed: "swfobject.js"
                        }
                    },
                    aliases: {
                        2: "2.2"
                    }
                },
                "ext-core": {
                    versions: {
                        "3.1.0": {
                            uncompressed: "ext-core-debug.js",
                            compressed: "ext-core.js"
                        },
                        "3.0.0": {
                            uncompressed: "ext-core-debug.js",
                            compressed: "ext-core.js"
                        }
                    },
                    aliases: {
                        3: "3.1.0",
                        "3.0": "3.0.0",
                        "3.1": "3.1.0"
                    }
                },
                scriptaculous: {
                    versions: {
                        "1.8.3": {
                            uncompressed: "scriptaculous.js",
                            compressed: "scriptaculous.js"
                        },
                        "1.9.0": {
                            uncompressed: "scriptaculous.js",
                            compressed: "scriptaculous.js"
                        },
                        "1.8.1": {
                            uncompressed: "scriptaculous.js",
                            compressed: "scriptaculous.js"
                        },
                        "1.8.2": {
                            uncompressed: "scriptaculous.js",
                            compressed: "scriptaculous.js"
                        }
                    },
                    aliases: {
                        1: "1.9.0",
                        "1.8": "1.8.3",
                        "1.9": "1.9.0"
                    }
                },
                webfont: {
                    versions: {
                        "1.0.12": {
                            uncompressed: "webfont_debug.js",
                            compressed: "webfont.js"
                        },
                        "1.0.13": {
                            uncompressed: "webfont_debug.js",
                            compressed: "webfont.js"
                        },
                        "1.0.14": {
                            uncompressed: "webfont_debug.js",
                            compressed: "webfont.js"
                        },
                        "1.0.15": {
                            uncompressed: "webfont_debug.js",
                            compressed: "webfont.js"
                        },
                        "1.0.10": {
                            uncompressed: "webfont_debug.js",
                            compressed: "webfont.js"
                        },
                        "1.0.11": {
                            uncompressed: "webfont_debug.js",
                            compressed: "webfont.js"
                        },
                        "1.0.27": {
                            uncompressed: "webfont_debug.js",
                            compressed: "webfont.js"
                        },
                        "1.0.28": {
                            uncompressed: "webfont_debug.js",
                            compressed: "webfont.js"
                        },
                        "1.0.29": {
                            uncompressed: "webfont_debug.js",
                            compressed: "webfont.js"
                        },
                        "1.0.23": {
                            uncompressed: "webfont_debug.js",
                            compressed: "webfont.js"
                        },
                        "1.0.24": {
                            uncompressed: "webfont_debug.js",
                            compressed: "webfont.js"
                        },
                        "1.0.25": {
                            uncompressed: "webfont_debug.js",
                            compressed: "webfont.js"
                        },
                        "1.0.26": {
                            uncompressed: "webfont_debug.js",
                            compressed: "webfont.js"
                        },
                        "1.0.21": {
                            uncompressed: "webfont_debug.js",
                            compressed: "webfont.js"
                        },
                        "1.0.22": {
                            uncompressed: "webfont_debug.js",
                            compressed: "webfont.js"
                        },
                        "1.0.3": {
                            uncompressed: "webfont_debug.js",
                            compressed: "webfont.js"
                        },
                        "1.0.4": {
                            uncompressed: "webfont_debug.js",
                            compressed: "webfont.js"
                        },
                        "1.0.5": {
                            uncompressed: "webfont_debug.js",
                            compressed: "webfont.js"
                        },
                        "1.0.6": {
                            uncompressed: "webfont_debug.js",
                            compressed: "webfont.js"
                        },
                        "1.0.9": {
                            uncompressed: "webfont_debug.js",
                            compressed: "webfont.js"
                        },
                        "1.0.16": {
                            uncompressed: "webfont_debug.js",
                            compressed: "webfont.js"
                        },
                        "1.0.17": {
                            uncompressed: "webfont_debug.js",
                            compressed: "webfont.js"
                        },
                        "1.0.0": {
                            uncompressed: "webfont_debug.js",
                            compressed: "webfont.js"
                        },
                        "1.0.18": {
                            uncompressed: "webfont_debug.js",
                            compressed: "webfont.js"
                        },
                        "1.0.1": {
                            uncompressed: "webfont_debug.js",
                            compressed: "webfont.js"
                        },
                        "1.0.19": {
                            uncompressed: "webfont_debug.js",
                            compressed: "webfont.js"
                        },
                        "1.0.2": {
                            uncompressed: "webfont_debug.js",
                            compressed: "webfont.js"
                        }
                    },
                    aliases: {
                        1: "1.0.29",
                        "1.0": "1.0.29"
                    }
                },
                jqueryui: {
                    versions: {
                        "1.8.17": {
                            uncompressed: "jquery-ui.js",
                            compressed: "jquery-ui.min.js"
                        },
                        "1.8.16": {
                            uncompressed: "jquery-ui.js",
                            compressed: "jquery-ui.min.js"
                        },
                        "1.8.15": {
                            uncompressed: "jquery-ui.js",
                            compressed: "jquery-ui.min.js"
                        },
                        "1.8.14": {
                            uncompressed: "jquery-ui.js",
                            compressed: "jquery-ui.min.js"
                        },
                        "1.8.4": {
                            uncompressed: "jquery-ui.js",
                            compressed: "jquery-ui.min.js"
                        },
                        "1.8.13": {
                            uncompressed: "jquery-ui.js",
                            compressed: "jquery-ui.min.js"
                        },
                        "1.8.5": {
                            uncompressed: "jquery-ui.js",
                            compressed: "jquery-ui.min.js"
                        },
                        "1.8.12": {
                            uncompressed: "jquery-ui.js",
                            compressed: "jquery-ui.min.js"
                        },
                        "1.8.6": {
                            uncompressed: "jquery-ui.js",
                            compressed: "jquery-ui.min.js"
                        },
                        "1.8.11": {
                            uncompressed: "jquery-ui.js",
                            compressed: "jquery-ui.min.js"
                        },
                        "1.8.7": {
                            uncompressed: "jquery-ui.js",
                            compressed: "jquery-ui.min.js"
                        },
                        "1.8.10": {
                            uncompressed: "jquery-ui.js",
                            compressed: "jquery-ui.min.js"
                        },
                        "1.8.8": {
                            uncompressed: "jquery-ui.js",
                            compressed: "jquery-ui.min.js"
                        },
                        "1.8.9": {
                            uncompressed: "jquery-ui.js",
                            compressed: "jquery-ui.min.js"
                        },
                        "1.6.0": {
                            uncompressed: "jquery-ui.js",
                            compressed: "jquery-ui.min.js"
                        },
                        "1.7.0": {
                            uncompressed: "jquery-ui.js",
                            compressed: "jquery-ui.min.js"
                        },
                        "1.5.2": {
                            uncompressed: "jquery-ui.js",
                            compressed: "jquery-ui.min.js"
                        },
                        "1.8.0": {
                            uncompressed: "jquery-ui.js",
                            compressed: "jquery-ui.min.js"
                        },
                        "1.7.1": {
                            uncompressed: "jquery-ui.js",
                            compressed: "jquery-ui.min.js"
                        },
                        "1.5.3": {
                            uncompressed: "jquery-ui.js",
                            compressed: "jquery-ui.min.js"
                        },
                        "1.8.1": {
                            uncompressed: "jquery-ui.js",
                            compressed: "jquery-ui.min.js"
                        },
                        "1.7.2": {
                            uncompressed: "jquery-ui.js",
                            compressed: "jquery-ui.min.js"
                        },
                        "1.8.2": {
                            uncompressed: "jquery-ui.js",
                            compressed: "jquery-ui.min.js"
                        },
                        "1.7.3": {
                            uncompressed: "jquery-ui.js",
                            compressed: "jquery-ui.min.js"
                        }
                    },
                    aliases: {
                        1: "1.8.17",
                        "1.5": "1.5.3",
                        "1.6": "1.6.0",
                        "1.7": "1.7.3",
                        "1.8": "1.8.17",
                        "1.8.3": "1.8.4"
                    }
                },
                mootools: {
                    versions: {
                        "1.3.0": {
                            uncompressed: "mootools.js",
                            compressed: "mootools-yui-compressed.js"
                        },
                        "1.2.1": {
                            uncompressed: "mootools.js",
                            compressed: "mootools-yui-compressed.js"
                        },
                        "1.1.2": {
                            uncompressed: "mootools.js",
                            compressed: "mootools-yui-compressed.js"
                        },
                        "1.4.0": {
                            uncompressed: "mootools.js",
                            compressed: "mootools-yui-compressed.js"
                        },
                        "1.3.1": {
                            uncompressed: "mootools.js",
                            compressed: "mootools-yui-compressed.js"
                        },
                        "1.2.2": {
                            uncompressed: "mootools.js",
                            compressed: "mootools-yui-compressed.js"
                        },
                        "1.4.1": {
                            uncompressed: "mootools.js",
                            compressed: "mootools-yui-compressed.js"
                        },
                        "1.3.2": {
                            uncompressed: "mootools.js",
                            compressed: "mootools-yui-compressed.js"
                        },
                        "1.2.3": {
                            uncompressed: "mootools.js",
                            compressed: "mootools-yui-compressed.js"
                        },
                        "1.4.2": {
                            uncompressed: "mootools.js",
                            compressed: "mootools-yui-compressed.js"
                        },
                        "1.2.4": {
                            uncompressed: "mootools.js",
                            compressed: "mootools-yui-compressed.js"
                        },
                        "1.2.5": {
                            uncompressed: "mootools.js",
                            compressed: "mootools-yui-compressed.js"
                        },
                        "1.1.1": {
                            uncompressed: "mootools.js",
                            compressed: "mootools-yui-compressed.js"
                        }
                    },
                    aliases: {
                        1: "1.1.2",
                        "1.1": "1.1.2",
                        "1.2": "1.2.5",
                        "1.3": "1.3.2",
                        "1.4": "1.4.2",
                        "1.11": "1.1.1"
                    }
                },
                yui: {
                    versions: {
                        "2.8.0r4": {
                            uncompressed: "build/yuiloader/yuiloader.js",
                            compressed: "build/yuiloader/yuiloader-min.js"
                        },
                        "2.9.0": {
                            uncompressed: "build/yuiloader/yuiloader.js",
                            compressed: "build/yuiloader/yuiloader-min.js"
                        },
                        "2.8.1": {
                            uncompressed: "build/yuiloader/yuiloader.js",
                            compressed: "build/yuiloader/yuiloader-min.js"
                        },
                        "2.6.0": {
                            uncompressed: "build/yuiloader/yuiloader.js",
                            compressed: "build/yuiloader/yuiloader-min.js"
                        },
                        "2.7.0": {
                            uncompressed: "build/yuiloader/yuiloader.js",
                            compressed: "build/yuiloader/yuiloader-min.js"
                        },
                        "3.3.0": {
                            uncompressed: "build/yui/yui.js",
                            compressed: "build/yui/yui-min.js"
                        },
                        "2.8.2r1": {
                            uncompressed: "build/yuiloader/yuiloader.js",
                            compressed: "build/yuiloader/yuiloader-min.js"
                        }
                    },
                    aliases: {
                        2: "2.9.0",
                        "2.6": "2.6.0",
                        "2.7": "2.7.0",
                        "2.8": "2.8.2r1",
                        "2.8.0": "2.8.0r4",
                        "2.8.2": "2.8.2r1",
                        "2.9": "2.9.0",
                        3: "3.3.0",
                        "3.3": "3.3.0"
                    }
                },
                prototype: {
                    versions: {
                        "1.6.1.0": {
                            uncompressed: "prototype.js",
                            compressed: "prototype.js"
                        },
                        "1.6.0.2": {
                            uncompressed: "prototype.js",
                            compressed: "prototype.js"
                        },
                        "1.7.0.0": {
                            uncompressed: "prototype.js",
                            compressed: "prototype.js"
                        },
                        "1.6.0.3": {
                            uncompressed: "prototype.js",
                            compressed: "prototype.js"
                        }
                    },
                    aliases: {
                        1: "1.7.0.0",
                        "1.6": "1.6.1.0",
                        "1.6.0": "1.6.0.3",
                        "1.6.1": "1.6.1.0",
                        "1.7": "1.7.0.0",
                        "1.7.0": "1.7.0.0"
                    }
                },
                jquery: {
                    versions: {
                        "1.2.3": {
                            uncompressed: "jquery.js",
                            compressed: "jquery.min.js"
                        },
                        "1.2.6": {
                            uncompressed: "jquery.js",
                            compressed: "jquery.min.js"
                        },
                        "1.3.0": {
                            uncompressed: "jquery.js",
                            compressed: "jquery.min.js"
                        },
                        "1.3.1": {
                            uncompressed: "jquery.js",
                            compressed: "jquery.min.js"
                        },
                        "1.3.2": {
                            uncompressed: "jquery.js",
                            compressed: "jquery.min.js"
                        },
                        "1.4.0": {
                            uncompressed: "jquery.js",
                            compressed: "jquery.min.js"
                        },
                        "1.4.1": {
                            uncompressed: "jquery.js",
                            compressed: "jquery.min.js"
                        },
                        "1.4.2": {
                            uncompressed: "jquery.js",
                            compressed: "jquery.min.js"
                        },
                        "1.4.3": {
                            uncompressed: "jquery.js",
                            compressed: "jquery.min.js"
                        },
                        "1.4.4": {
                            uncompressed: "jquery.js",
                            compressed: "jquery.min.js"
                        },
                        "1.5.0": {
                            uncompressed: "jquery.js",
                            compressed: "jquery.min.js"
                        },
                        "1.5.1": {
                            uncompressed: "jquery.js",
                            compressed: "jquery.min.js"
                        },
                        "1.5.2": {
                            uncompressed: "jquery.js",
                            compressed: "jquery.min.js"
                        },
                        "1.6.0": {
                            uncompressed: "jquery.js",
                            compressed: "jquery.min.js"
                        },
                        "1.6.1": {
                            uncompressed: "jquery.js",
                            compressed: "jquery.min.js"
                        },
                        "1.6.2": {
                            uncompressed: "jquery.js",
                            compressed: "jquery.min.js"
                        },
                        "1.6.3": {
                            uncompressed: "jquery.js",
                            compressed: "jquery.min.js"
                        },
                        "1.6.4": {
                            uncompressed: "jquery.js",
                            compressed: "jquery.min.js"
                        },
                        "1.7.0": {
                            uncompressed: "jquery.js",
                            compressed: "jquery.min.js"
                        },
                        "1.7.1": {
                            uncompressed: "jquery.js",
                            compressed: "jquery.min.js"
                        }
                    },
                    aliases: {
                        1: "1.7.1",
                        "1.2": "1.2.6",
                        "1.3": "1.3.2",
                        "1.4": "1.4.4",
                        "1.5": "1.5.2",
                        "1.6": "1.6.4",
                        "1.7": "1.7.1"
                    }
                },
                dojo: {
                    versions: {
                        "1.3.0": {
                            uncompressed: "dojo/dojo.xd.js.uncompressed.js",
                            compressed: "dojo/dojo.xd.js"
                        },
                        "1.4.0": {
                            uncompressed: "dojo/dojo.xd.js.uncompressed.js",
                            compressed: "dojo/dojo.xd.js"
                        },
                        "1.3.1": {
                            uncompressed: "dojo/dojo.xd.js.uncompressed.js",
                            compressed: "dojo/dojo.xd.js"
                        },
                        "1.5.0": {
                            uncompressed: "dojo/dojo.xd.js.uncompressed.js",
                            compressed: "dojo/dojo.xd.js"
                        },
                        "1.4.1": {
                            uncompressed: "dojo/dojo.xd.js.uncompressed.js",
                            compressed: "dojo/dojo.xd.js"
                        },
                        "1.3.2": {
                            uncompressed: "dojo/dojo.xd.js.uncompressed.js",
                            compressed: "dojo/dojo.xd.js"
                        },
                        "1.2.3": {
                            uncompressed: "dojo/dojo.xd.js.uncompressed.js",
                            compressed: "dojo/dojo.xd.js"
                        },
                        "1.6.0": {
                            uncompressed: "dojo/dojo.xd.js.uncompressed.js",
                            compressed: "dojo/dojo.xd.js"
                        },
                        "1.5.1": {
                            uncompressed: "dojo/dojo.xd.js.uncompressed.js",
                            compressed: "dojo/dojo.xd.js"
                        },
                        "1.7.0": {
                            uncompressed: "dojo/dojo.js.uncompressed.js",
                            compressed: "dojo/dojo.js"
                        },
                        "1.6.1": {
                            uncompressed: "dojo/dojo.xd.js.uncompressed.js",
                            compressed: "dojo/dojo.xd.js"
                        },
                        "1.4.3": {
                            uncompressed: "dojo/dojo.xd.js.uncompressed.js",
                            compressed: "dojo/dojo.xd.js"
                        },
                        "1.7.1": {
                            uncompressed: "dojo/dojo.js.uncompressed.js",
                            compressed: "dojo/dojo.js"
                        },
                        "1.7.2": {
                            uncompressed: "dojo/dojo.js.uncompressed.js",
                            compressed: "dojo/dojo.js"
                        },
                        "1.2.0": {
                            uncompressed: "dojo/dojo.xd.js.uncompressed.js",
                            compressed: "dojo/dojo.xd.js"
                        },
                        "1.1.1": {
                            uncompressed: "dojo/dojo.xd.js.uncompressed.js",
                            compressed: "dojo/dojo.xd.js"
                        }
                    },
                    aliases: {
                        1: "1.6.1",
                        "1.1": "1.1.1",
                        "1.2": "1.2.3",
                        "1.3": "1.3.2",
                        "1.4": "1.4.3",
                        "1.5": "1.5.1",
                        "1.6": "1.6.1",
                        "1.7": "1.7.2"
                    }
                }
            }
        };
        J.m.aa = {
            af: !0,
            am: !0,
            az: !0,
            ar: !0,
            arb: "ar",
            bg: !0,
            bn: !0,
            ca: !0,
            cs: !0,
            cmn: "zh",
            da: !0,
            de: !0,
            el: !0,
            en: !0,
            en_gb: !0,
            es: !0,
            es_419: !0,
            et: !0,
            eu: !0,
            fa: !0,
            fi: !0,
            fil: !0,
            fr: !0,
            fr_ca: !0,
            gl: !0,
            ka: !0,
            gu: !0,
            he: "iw",
            hi: !0,
            hr: !0,
            hu: !0,
            hy: !0,
            id: !0,
            "in": "id",
            is: !0,
            it: !0,
            iw: !0,
            ja: !0,
            ji: "yi",
            jv: !1,
            jw: "jv",
            km: !0,
            kn: !0,
            ko: !0,
            lo: !0,
            lt: !0,
            lv: !0,
            ml: !0,
            mn: !0,
            mo: "ro",
            mr: !0,
            ms: !0,
            nb: "no",
            ne: !0,
            nl: !0,
            no: !0,
            pl: !0,
            pt: "pt_br",
            pt_br: !0,
            pt_pt: !0,
            ro: !0,
            ru: !0,
            si: !0,
            sk: !0,
            sl: !0,
            sr: !0,
            sv: !0,
            sw: !0,
            swh: "sw",
            ta: !0,
            te: !0,
            th: !0,
            tl: "fil",
            tr: !0,
            uk: !0,
            ur: !0,
            vi: !0,
            yi: !1,
            zh: "zh_cn",
            zh_cn: !0,
            zh_hk: !0,
            zh_tw: !0,
            zsm: "ms",
            zu: !0
        };
        J.m.M = {};
        J.m.M.O = {
            1: "1.0",
            "1.0": "current",
            "1.1": "upcoming",
            "1.2": "testing",
            41: "pre-45",
            42: "pre-45",
            43: "pre-45",
            44: "pre-45",
            46: "46.1",
            "46.1": "46.2",
            48: "48.1",
            current: "51",
            upcoming: "51"
        };
        var Aa;

        function K(a, b) {
            this.g = b === Ba ? a : ""
        }
        K.prototype.T = !0;
        K.prototype.R = function () {
            return this.g.toString()
        };
        K.prototype.toString = function () {
            return this.g + ""
        };

        function Ca(a) {
            return a instanceof K && a.constructor === K ? a.g : "type_error:TrustedResourceUrl"
        }

        function Fa(a, b) {
            var c = za(a);
            if (!Ga.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
            a = c.replace(Ha, function (d, e) {
                if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
                d = b[e];
                return d instanceof G ? za(d) : encodeURIComponent(String(d))
            });
            return Ia(a)
        }
        var Ha = /%{(\w+)}/g,
            Ga = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
            Ja = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;

        function Ka(a, b, c) {
            a = Fa(a, b);
            a = Ja.exec(Ca(a).toString());
            b = a[3] || "";
            return Ia(a[1] + La("?", a[2] || "", c) + La("#", b, void 0))
        }
        var Ba = {};

        function Ia(a) {
            if (void 0 === Aa) {
                var b = null;
                var c = A.trustedTypes;
                if (c && c.createPolicy) {
                    try {
                        b = c.createPolicy("goog#html", {
                            createHTML: wa,
                            createScript: wa,
                            createScriptURL: wa
                        })
                    } catch (d) {
                        A.console && A.console.error(d.message)
                    }
                    Aa = b
                } else Aa = b
            }
            a = (b = Aa) ? b.createScriptURL(a) : a;
            return new K(a, Ba)
        }

        function La(a, b, c) {
            if (null == c) return b;
            if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
            for (var d in c)
                if (Object.prototype.hasOwnProperty.call(c, d)) {
                    var e = c[d];
                    e = Array.isArray(e) ? e : [e];
                    for (var g = 0; g < e.length; g++) {
                        var f = e[g];
                        null != f && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(f)))
                    }
                } return b
        };
        var Ma = Array.prototype.some ? function (a, b) {
            return Array.prototype.some.call(a, b, void 0)
        } : function (a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) return !0;
            return !1
        };

        function Na(a, b) {
            for (var c in a) b.call(void 0, a[c], c, a)
        }
        var Oa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

        function Pa(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var g = 0; g < Oa.length; g++) c = Oa[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        };
        var L;
        a: {
            var Qa = A.navigator;
            if (Qa) {
                var Ra = Qa.userAgent;
                if (Ra) {
                    L = Ra;
                    break a
                }
            }
            L = ""
        };

        function Sa(a) {
            a: {
                var b = (a.ownerDocument && a.ownerDocument.defaultView || A).document;
                if (b.querySelector && (b = b.querySelector("script[nonce]")) && (b = b.nonce || b.getAttribute("nonce")) && Ta.test(b)) break a;b = ""
            }
            b && a.setAttribute("nonce", b)
        }
        var Ta = /^[\w+/_-]+[=]{0,2}$/;

        function Ua(a, b) {
            this.g = a[A.Symbol.iterator]();
            this.h = b;
            this.i = 0
        }
        Ua.prototype[Symbol.iterator] = function () {
            return this
        };
        Ua.prototype.next = function () {
            var a = this.g.next();
            return {
                value: a.done ? void 0 : this.h.call(void 0, a.value, this.i++),
                done: a.done
            }
        };

        function Va(a, b) {
            return new Ua(a, b)
        };
        var Wa = "StopIteration" in A ? A.StopIteration : {
            message: "StopIteration",
            stack: ""
        };

        function M() {}
        M.prototype.next = function () {
            return M.prototype.g.call(this)
        };
        M.prototype.g = function () {
            throw Wa;
        };
        M.prototype.F = function () {
            return this
        };

        function Xa(a) {
            if (a instanceof N || a instanceof O || a instanceof P) return a;
            if ("function" == typeof a.next) return new N(function () {
                return Ya(a)
            });
            if ("function" == typeof a[Symbol.iterator]) return new N(function () {
                return a[Symbol.iterator]()
            });
            if ("function" == typeof a.F) return new N(function () {
                return Ya(a.F())
            });
            throw Error("Not an iterator or iterable.");
        }

        function Ya(a) {
            if (!(a instanceof M)) return a;
            var b = !1;
            return {
                next: function () {
                    for (var c; !b;) try {
                        c = a.next();
                        break
                    } catch (d) {
                        if (d !== Wa) throw d;
                        b = !0
                    }
                    return {
                        value: c,
                        done: b
                    }
                }
            }
        }

        function N(a) {
            this.g = a
        }
        N.prototype.F = function () {
            return new O(this.g())
        };
        N.prototype[Symbol.iterator] = function () {
            return new P(this.g())
        };
        N.prototype.i = function () {
            return new P(this.g())
        };

        function O(a) {
            this.h = a
        }
        ma(O, M);
        O.prototype.g = function () {
            var a = this.h.next();
            if (a.done) throw Wa;
            return a.value
        };
        O.prototype.next = function () {
            return O.prototype.g.call(this)
        };
        O.prototype[Symbol.iterator] = function () {
            return new P(this.h)
        };
        O.prototype.i = function () {
            return new P(this.h)
        };

        function P(a) {
            N.call(this, function () {
                return a
            });
            this.h = a
        }
        ma(P, N);
        P.prototype.next = function () {
            return this.h.next()
        };

        function Za(a, b) {
            this.h = {};
            this.g = [];
            this.i = this.size = 0;
            var c = arguments.length;
            if (1 < c) {
                if (c % 2) throw Error("Uneven number of arguments");
                for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
            } else if (a)
                if (a instanceof Za)
                    for (c = a.G(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
                else
                    for (d in a) this.set(d, a[d])
        }
        l = Za.prototype;
        l.H = function () {
            $a(this);
            for (var a = [], b = 0; b < this.g.length; b++) a.push(this.h[this.g[b]]);
            return a
        };
        l.G = function () {
            $a(this);
            return this.g.concat()
        };
        l.has = function (a) {
            return Q(this.h, a)
        };

        function $a(a) {
            if (a.size != a.g.length) {
                for (var b = 0, c = 0; b < a.g.length;) {
                    var d = a.g[b];
                    Q(a.h, d) && (a.g[c++] = d);
                    b++
                }
                a.g.length = c
            }
            if (a.size != a.g.length) {
                var e = {};
                for (c = b = 0; b < a.g.length;) d = a.g[b], Q(e, d) || (a.g[c++] = d, e[d] = 1), b++;
                a.g.length = c
            }
        }
        l.get = function (a, b) {
            return Q(this.h, a) ? this.h[a] : b
        };
        l.set = function (a, b) {
            Q(this.h, a) || (this.size += 1, this.g.push(a), this.i++);
            this.h[a] = b
        };
        l.forEach = function (a, b) {
            for (var c = this.G(), d = 0; d < c.length; d++) {
                var e = c[d],
                    g = this.get(e);
                a.call(b, g, e, this)
            }
        };
        l.keys = function () {
            return Xa(this.F(!0)).i()
        };
        l.values = function () {
            return Xa(this.F(!1)).i()
        };
        l.entries = function () {
            var a = this;
            return Va(this.keys(), function (b) {
                return [b, a.get(b)]
            })
        };
        l.F = function (a) {
            $a(this);
            var b = 0,
                c = this.i,
                d = this,
                e = new M;
            e.g = function () {
                if (c != d.i) throw Error("The map has changed since the iterator was created");
                if (b >= d.g.length) throw Wa;
                var g = d.g[b++];
                return a ? g : d.h[g]
            };
            e.next = e.g.bind(e);
            return e
        };

        function Q(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        };
        var ab = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

        function bb(a, b) {
            if (a) {
                a = a.split("&");
                for (var c = 0; c < a.length; c++) {
                    var d = a[c].indexOf("="),
                        e = null;
                    if (0 <= d) {
                        var g = a[c].substring(0, d);
                        e = a[c].substring(d + 1)
                    } else g = a[c];
                    b(g, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "")
                }
            }
        };

        function cb(a) {
            this.g = this.s = this.j = "";
            this.v = null;
            this.o = this.h = "";
            this.l = !1;
            var b;
            a instanceof cb ? (this.l = a.l, db(this, a.j), this.s = a.s, this.g = a.g, eb(this, a.v), this.h = a.h, fb(this, gb(a.i)), this.o = a.o) : a && (b = String(a).match(ab)) ? (this.l = !1, db(this, b[1] || "", !0), this.s = hb(b[2] || ""), this.g = hb(b[3] || "", !0), eb(this, b[4]), this.h = hb(b[5] || "", !0), fb(this, b[6] || "", !0), this.o = hb(b[7] || "")) : (this.l = !1, this.i = new R(null, this.l))
        }
        cb.prototype.toString = function () {
            var a = [],
                b = this.j;
            b && a.push(ib(b, jb, !0), ":");
            var c = this.g;
            if (c || "file" == b) a.push("//"), (b = this.s) && a.push(ib(b, jb, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.v, null != c && a.push(":", String(c));
            if (c = this.h) this.g && "/" != c.charAt(0) && a.push("/"), a.push(ib(c, "/" == c.charAt(0) ? kb : lb, !0));
            (c = this.i.toString()) && a.push("?", c);
            (c = this.o) && a.push("#", ib(c, mb));
            return a.join("")
        };
        cb.prototype.resolve = function (a) {
            var b = new cb(this),
                c = !!a.j;
            c ? db(b, a.j) : c = !!a.s;
            c ? b.s = a.s : c = !!a.g;
            c ? b.g = a.g : c = null != a.v;
            var d = a.h;
            if (c) eb(b, a.v);
            else if (c = !!a.h) {
                if ("/" != d.charAt(0))
                    if (this.g && !this.h) d = "/" + d;
                    else {
                        var e = b.h.lastIndexOf("/"); - 1 != e && (d = b.h.substr(0, e + 1) + d)
                    } e = d;
                if (".." == e || "." == e) d = "";
                else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
                    d = 0 == e.lastIndexOf("/", 0);
                    e = e.split("/");
                    for (var g = [], f = 0; f < e.length;) {
                        var h = e[f++];
                        "." == h ? d && f == e.length && g.push("") : ".." == h ? ((1 < g.length || 1 == g.length &&
                            "" != g[0]) && g.pop(), d && f == e.length && g.push("")) : (g.push(h), d = !0)
                    }
                    d = g.join("/")
                } else d = e
            }
            c ? b.h = d : c = "" !== a.i.toString();
            c ? fb(b, gb(a.i)) : c = !!a.o;
            c && (b.o = a.o);
            return b
        };

        function db(a, b, c) {
            a.j = c ? hb(b, !0) : b;
            a.j && (a.j = a.j.replace(/:$/, ""))
        }

        function eb(a, b) {
            if (b) {
                b = Number(b);
                if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
                a.v = b
            } else a.v = null
        }

        function fb(a, b, c) {
            b instanceof R ? (a.i = b, nb(a.i, a.l)) : (c || (b = ib(b, ob)), a.i = new R(b, a.l))
        }

        function hb(a, b) {
            return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
        }

        function ib(a, b, c) {
            return "string" === typeof a ? (a = encodeURI(a).replace(b, pb), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
        }

        function pb(a) {
            a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
        }
        var jb = /[#\/\?@]/g,
            lb = /[#\?:]/g,
            kb = /[#\?]/g,
            ob = /[#\?@]/g,
            mb = /#/g;

        function R(a, b) {
            this.h = this.g = null;
            this.i = a || null;
            this.j = !!b
        }

        function S(a) {
            a.g || (a.g = new Za, a.h = 0, a.i && bb(a.i, function (b, c) {
                a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
            }))
        }
        l = R.prototype;
        l.add = function (a, b) {
            S(this);
            this.i = null;
            a = T(this, a);
            var c = this.g.get(a);
            c || this.g.set(a, c = []);
            c.push(b);
            this.h += 1;
            return this
        };

        function qb(a, b) {
            S(a);
            b = T(a, b);
            a.g.has(b) && (a.i = null, a.h -= a.g.get(b).length, a = a.g, Q(a.h, b) && (delete a.h[b], --a.size, a.i++, a.g.length > 2 * a.size && $a(a)))
        }

        function rb(a, b) {
            S(a);
            b = T(a, b);
            return a.g.has(b)
        }
        l.forEach = function (a, b) {
            S(this);
            this.g.forEach(function (c, d) {
                c.forEach(function (e) {
                    a.call(b, e, d, this)
                }, this)
            }, this)
        };
        l.G = function () {
            S(this);
            for (var a = this.g.H(), b = this.g.G(), c = [], d = 0; d < b.length; d++)
                for (var e = a[d], g = 0; g < e.length; g++) c.push(b[d]);
            return c
        };
        l.H = function (a) {
            S(this);
            var b = [];
            if ("string" === typeof a) rb(this, a) && (b = b.concat(this.g.get(T(this, a))));
            else {
                a = this.g.H();
                for (var c = 0; c < a.length; c++) b = b.concat(a[c])
            }
            return b
        };
        l.set = function (a, b) {
            S(this);
            this.i = null;
            a = T(this, a);
            rb(this, a) && (this.h -= this.g.get(a).length);
            this.g.set(a, [b]);
            this.h += 1;
            return this
        };
        l.get = function (a, b) {
            if (!a) return b;
            a = this.H(a);
            return 0 < a.length ? String(a[0]) : b
        };
        l.toString = function () {
            if (this.i) return this.i;
            if (!this.g) return "";
            for (var a = [], b = this.g.G(), c = 0; c < b.length; c++) {
                var d = b[c],
                    e = encodeURIComponent(String(d));
                d = this.H(d);
                for (var g = 0; g < d.length; g++) {
                    var f = e;
                    "" !== d[g] && (f += "=" + encodeURIComponent(String(d[g])));
                    a.push(f)
                }
            }
            return this.i = a.join("&")
        };

        function gb(a) {
            var b = new R;
            b.i = a.i;
            a.g && (b.g = new Za(a.g), b.h = a.h);
            return b
        }

        function T(a, b) {
            b = String(b);
            a.j && (b = b.toLowerCase());
            return b
        }

        function nb(a, b) {
            b && !a.j && (S(a), a.i = null, a.g.forEach(function (c, d) {
                var e = d.toLowerCase();
                if (d != e && (qb(this, d), qb(this, e), 0 < c.length)) {
                    this.i = null;
                    d = this.g;
                    var g = d.set;
                    e = T(this, e);
                    var f = c.length;
                    if (0 < f) {
                        for (var h = Array(f), k = 0; k < f; k++) h[k] = c[k];
                        f = h
                    } else f = [];
                    g.call(d, e, f);
                    this.h += c.length
                }
            }, a));
            a.j = b
        };

        function sb(a, b) {
            Na(b, function (c, d) {
                c && "object" == typeof c && c.T && (c = c.R());
                "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : tb.hasOwnProperty(d) ? a.setAttribute(tb[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
            })
        }
        var tb = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            frameborder: "frameBorder",
            height: "height",
            maxlength: "maxLength",
            nonce: "nonce",
            role: "role",
            rowspan: "rowSpan",
            type: "type",
            usemap: "useMap",
            valign: "vAlign",
            width: "width"
        };

        function ub(a, b) {
            b = String(b);
            "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
            return a.createElement(b)
        }

        function vb(a) {
            this.g = a || A.document || document
        };

        function wb(a, b) {
            this.i = a;
            this.j = b;
            this.h = 0;
            this.g = null
        }
        wb.prototype.get = function () {
            if (0 < this.h) {
                this.h--;
                var a = this.g;
                this.g = a.next;
                a.next = null
            } else a = this.i();
            return a
        };

        function xb(a, b) {
            a.j(b);
            100 > a.h && (a.h++, b.next = a.g, a.g = b)
        };
        var yb;

        function zb() {
            var a = A.MessageChannel;
            "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && -1 == L.indexOf("Presto") && (a = function () {
                var e = ub(document, "IFRAME");
                e.style.display = "none";
                document.documentElement.appendChild(e);
                var g = e.contentWindow;
                e = g.document;
                e.open();
                e.close();
                var f = "callImmediate" + Math.random(),
                    h = "file:" == g.location.protocol ? "*" : g.location.protocol + "//" + g.location.host;
                e = D(function (k) {
                    if (("*" == h || k.origin == h) && k.data == f) this.port1.onmessage()
                }, this);
                g.addEventListener("message", e, !1);
                this.port1 = {};
                this.port2 = {
                    postMessage: function () {
                        g.postMessage(f, h)
                    }
                }
            });
            if ("undefined" !== typeof a && -1 == L.indexOf("Trident") && -1 == L.indexOf("MSIE")) {
                var b = new a,
                    c = {},
                    d = c;
                b.port1.onmessage = function () {
                    if (void 0 !== c.next) {
                        c = c.next;
                        var e = c.P;
                        c.P = null;
                        e()
                    }
                };
                return function (e) {
                    d.next = {
                        P: e
                    };
                    d = d.next;
                    b.port2.postMessage(0)
                }
            }
            return function (e) {
                A.setTimeout(e, 0)
            }
        };

        function Ab(a) {
            A.setTimeout(function () {
                throw a;
            }, 0)
        };

        function Bb() {
            this.h = this.g = null
        }
        Bb.prototype.add = function (a, b) {
            var c = Cb.get();
            c.set(a, b);
            this.h ? this.h.next = c : this.g = c;
            this.h = c
        };

        function Db() {
            var a = Eb,
                b = null;
            a.g && (b = a.g, a.g = a.g.next, a.g || (a.h = null), b.next = null);
            return b
        }
        var Cb = new wb(function () {
            return new Fb
        }, function (a) {
            return a.reset()
        });

        function Fb() {
            this.next = this.g = this.h = null
        }
        Fb.prototype.set = function (a, b) {
            this.h = a;
            this.g = b;
            this.next = null
        };
        Fb.prototype.reset = function () {
            this.next = this.g = this.h = null
        };

        function Gb(a, b) {
            Hb || Ib();
            Jb || (Hb(), Jb = !0);
            Eb.add(a, b)
        }
        var Hb;

        function Ib() {
            if (A.Promise && A.Promise.resolve) {
                var a = A.Promise.resolve(void 0);
                Hb = function () {
                    a.then(Kb)
                }
            } else Hb = function () {
                var b = Kb;
                "function" !== typeof A.setImmediate || A.Window && A.Window.prototype && -1 == L.indexOf("Edge") && A.Window.prototype.setImmediate == A.setImmediate ? (yb || (yb = zb()), yb(b)) : A.setImmediate(b)
            }
        }
        var Jb = !1,
            Eb = new Bb;

        function Kb() {
            for (var a; a = Db();) {
                try {
                    a.h.call(a.g)
                } catch (b) {
                    Ab(b)
                }
                xb(Cb, a)
            }
            Jb = !1
        };

        function Lb(a) {
            if (!a) return !1;
            try {
                return !!a.$goog_Thenable
            } catch (b) {
                return !1
            }
        };

        function U(a) {
            this.g = 0;
            this.s = void 0;
            this.j = this.h = this.i = null;
            this.l = this.o = !1;
            if (a != C) try {
                var b = this;
                a.call(void 0, function (c) {
                    V(b, 2, c)
                }, function (c) {
                    V(b, 3, c)
                })
            } catch (c) {
                V(this, 3, c)
            }
        }

        function Mb() {
            this.next = this.i = this.h = this.j = this.g = null;
            this.l = !1
        }
        Mb.prototype.reset = function () {
            this.i = this.h = this.j = this.g = null;
            this.l = !1
        };
        var Nb = new wb(function () {
            return new Mb
        }, function (a) {
            a.reset()
        });

        function Ob(a, b, c) {
            var d = Nb.get();
            d.j = a;
            d.h = b;
            d.i = c;
            return d
        }
        U.prototype.then = function (a, b, c) {
            return Pb(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c)
        };
        U.prototype.$goog_Thenable = !0;
        U.prototype.cancel = function (a) {
            if (0 == this.g) {
                var b = new Qb(a);
                Gb(function () {
                    Rb(this, b)
                }, this)
            }
        };

        function Rb(a, b) {
            if (0 == a.g)
                if (a.i) {
                    var c = a.i;
                    if (c.h) {
                        for (var d = 0, e = null, g = null, f = c.h; f && (f.l || (d++, f.g == a && (e = f), !(e && 1 < d))); f = f.next) e || (g = f);
                        e && (0 == c.g && 1 == d ? Rb(c, b) : (g ? (d = g, d.next == c.j && (c.j = d), d.next = d.next.next) : Sb(c), Tb(c, e, 3, b)))
                    }
                    a.i = null
                } else V(a, 3, b)
        }

        function Ub(a, b) {
            a.h || 2 != a.g && 3 != a.g || Vb(a);
            a.j ? a.j.next = b : a.h = b;
            a.j = b
        }

        function Pb(a, b, c, d) {
            var e = Ob(null, null, null);
            e.g = new U(function (g, f) {
                e.j = b ? function (h) {
                    try {
                        var k = b.call(d, h);
                        g(k)
                    } catch (m) {
                        f(m)
                    }
                } : g;
                e.h = c ? function (h) {
                    try {
                        var k = c.call(d, h);
                        void 0 === k && h instanceof Qb ? f(h) : g(k)
                    } catch (m) {
                        f(m)
                    }
                } : f
            });
            e.g.i = a;
            Ub(a, e);
            return e.g
        }
        U.prototype.C = function (a) {
            this.g = 0;
            V(this, 2, a)
        };
        U.prototype.D = function (a) {
            this.g = 0;
            V(this, 3, a)
        };

        function V(a, b, c) {
            if (0 == a.g) {
                a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
                a.g = 1;
                a: {
                    var d = c,
                        e = a.C,
                        g = a.D;
                    if (d instanceof U) {
                        Ub(d, Ob(e || C, g || null, a));
                        var f = !0
                    } else if (Lb(d)) d.then(e, g, a),
                    f = !0;
                    else {
                        if (sa(d)) try {
                            var h = d.then;
                            if ("function" === typeof h) {
                                Wb(d, h, e, g, a);
                                f = !0;
                                break a
                            }
                        } catch (k) {
                            g.call(a, k);
                            f = !0;
                            break a
                        }
                        f = !1
                    }
                }
                f || (a.s = c, a.g = b, a.i = null, Vb(a), 3 != b || c instanceof Qb || Xb(a, c))
            }
        }

        function Wb(a, b, c, d, e) {
            function g(k) {
                h || (h = !0, d.call(e, k))
            }

            function f(k) {
                h || (h = !0, c.call(e, k))
            }
            var h = !1;
            try {
                b.call(a, f, g)
            } catch (k) {
                g(k)
            }
        }

        function Vb(a) {
            a.o || (a.o = !0, Gb(a.v, a))
        }

        function Sb(a) {
            var b = null;
            a.h && (b = a.h, a.h = b.next, b.next = null);
            a.h || (a.j = null);
            return b
        }
        U.prototype.v = function () {
            for (var a; a = Sb(this);) Tb(this, a, this.g, this.s);
            this.o = !1
        };

        function Tb(a, b, c, d) {
            if (3 == c && b.h && !b.l)
                for (; a && a.l; a = a.i) a.l = !1;
            if (b.g) b.g.i = null, Yb(b, c, d);
            else try {
                b.l ? b.j.call(b.i) : Yb(b, c, d)
            } catch (e) {
                Zb.call(null, e)
            }
            xb(Nb, b)
        }

        function Yb(a, b, c) {
            2 == b ? a.j.call(a.i, c) : a.h && a.h.call(a.i, c)
        }

        function Xb(a, b) {
            a.l = !0;
            Gb(function () {
                a.l && Zb.call(null, b)
            })
        }
        var Zb = Ab;

        function Qb(a) {
            F.call(this, a)
        }
        va(Qb, F);
        Qb.prototype.name = "cancel";
        /*
         Portions of this code are from MochiKit, received by
         The Closure Authors under the MIT license. All other code is Copyright
         2005-2009 The Closure Authors. All Rights Reserved.
        */
        function W(a) {
            var b = $b;
            this.l = [];
            this.J = b;
            this.I = a || null;
            this.j = this.i = !1;
            this.h = void 0;
            this.C = this.L = this.s = !1;
            this.o = 0;
            this.g = null;
            this.v = 0
        }
        W.prototype.cancel = function (a) {
            if (this.i) this.h instanceof W && this.h.cancel();
            else {
                if (this.g) {
                    var b = this.g;
                    delete this.g;
                    a ? b.cancel(a) : (b.v--, 0 >= b.v && b.cancel())
                }
                this.J ? this.J.call(this.I, this) : this.C = !0;
                this.i || (a = new ac(this), bc(this), cc(this, !1, a))
            }
        };
        W.prototype.D = function (a, b) {
            this.s = !1;
            cc(this, a, b)
        };

        function cc(a, b, c) {
            a.i = !0;
            a.h = c;
            a.j = !b;
            dc(a)
        }

        function bc(a) {
            if (a.i) {
                if (!a.C) throw new ec(a);
                a.C = !1
            }
        }

        function fc(a, b, c, d) {
            a.l.push([b, c, d]);
            a.i && dc(a)
        }
        W.prototype.then = function (a, b, c) {
            var d, e, g = new U(function (f, h) {
                e = f;
                d = h
            });
            fc(this, e, function (f) {
                f instanceof ac ? g.cancel() : d(f)
            });
            return g.then(a, b, c)
        };
        W.prototype.$goog_Thenable = !0;

        function gc(a) {
            return Ma(a.l, function (b) {
                return "function" === typeof b[1]
            })
        }

        function dc(a) {
            if (a.o && a.i && gc(a)) {
                var b = a.o,
                    c = hc[b];
                c && (A.clearTimeout(c.g), delete hc[b]);
                a.o = 0
            }
            a.g && (a.g.v--, delete a.g);
            b = a.h;
            for (var d = c = !1; a.l.length && !a.s;) {
                var e = a.l.shift(),
                    g = e[0],
                    f = e[1];
                e = e[2];
                if (g = a.j ? f : g) try {
                    var h = g.call(e || a.I, b);
                    void 0 !== h && (a.j = a.j && (h == b || h instanceof Error), a.h = b = h);
                    if (Lb(b) || "function" === typeof A.Promise && b instanceof A.Promise) d = !0, a.s = !0
                } catch (k) {
                    b = k, a.j = !0, gc(a) || (c = !0)
                }
            }
            a.h = b;
            d && (h = D(a.D, a, !0), d = D(a.D, a, !1), b instanceof W ? (fc(b, h, d), b.L = !0) : b.then(h, d));
            c && (b =
                new ic(b), hc[b.g] = b, a.o = b.g)
        }

        function ec() {
            F.call(this)
        }
        va(ec, F);
        ec.prototype.message = "Deferred has already fired";
        ec.prototype.name = "AlreadyCalledError";

        function ac() {
            F.call(this)
        }
        va(ac, F);
        ac.prototype.message = "Deferred was canceled";
        ac.prototype.name = "CanceledError";

        function ic(a) {
            this.g = A.setTimeout(D(this.i, this), 0);
            this.h = a
        }
        ic.prototype.i = function () {
            delete hc[this.g];
            throw this.h;
        };
        var hc = {};

        function jc(a) {
            var b;
            return (b = (a || document).getElementsByTagName("HEAD")) && 0 !== b.length ? b[0] : a.documentElement
        }

        function $b() {
            if (this && this.U) {
                var a = this.U;
                a && "SCRIPT" == a.tagName && kc(a, !0, this.W)
            }
        }

        function kc(a, b, c) {
            null != c && A.clearTimeout(c);
            a.onload = C;
            a.onerror = C;
            a.onreadystatechange = C;
            b && window.setTimeout(function () {
                a && a.parentNode && a.parentNode.removeChild(a)
            }, 0)
        }

        function lc(a, b) {
            var c = "Jsloader error (code #" + a + ")";
            b && (c += ": " + b);
            F.call(this, c);
            this.code = a
        }
        va(lc, F);
        /*

         Copyright 2021 Google LLC
         This code is released under the MIT license.
         SPDX-License-Identifier: MIT
        */
        function mc(a) {
            return Ka(a.format, a.ba, a.ya || {})
        }

        function nc(a) {
            var b = {
                    timeout: 3E4,
                    attributes: {
                        async: !1,
                        defer: !1
                    }
                },
                c = b.document || document,
                d = Ca(a).toString(),
                e = ub((new vb(c)).g, "SCRIPT"),
                g = {
                    U: e,
                    W: void 0
                },
                f = new W(g),
                h = null,
                k = null != b.timeout ? b.timeout : 5E3;
            0 < k && (h = window.setTimeout(function () {
                kc(e, !0);
                var m = new lc(1, "Timeout reached for loading script " + d);
                bc(f);
                cc(f, !1, m)
            }, k), g.W = h);
            e.onload = e.onreadystatechange = function () {
                e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (kc(e, b.oa || !1, h), bc(f), cc(f, !0, null))
            };
            e.onerror = function () {
                kc(e,
                    !0, h);
                var m = new lc(0, "Error while loading script " + d);
                bc(f);
                cc(f, !1, m)
            };
            g = b.attributes || {};
            Pa(g, {
                type: "text/javascript",
                charset: "UTF-8"
            });
            sb(e, g);
            e.src = Ca(a);
            Sa(e);
            jc(c).appendChild(e);
            return f
        }

        function oc(a, b, c) {
            c = c || {};
            a = Ka(a, b, c);
            var d = nc(a);
            return new Promise(function (e) {
                fc(d, e, null, void 0)
            })
        };
        /*

         Copyright 2021 Google LLC
         This code is released under the MIT license.
         SPDX-License-Identifier: MIT

        */
        function pc() {
            return new Promise(function (a) {
                "undefined" === typeof window || "complete" === document.readyState ? a() : window.addEventListener ? (document.addEventListener("DOMContentLoaded", a, !0), window.addEventListener("load", a, !0)) : window.attachEvent ? window.attachEvent("onload", a) : "function" !== typeof window.onload ? window.onload = a : window.onload = function (b) {
                    if (window.onload) window.onload(b);
                    a()
                }
            })
        };
        J.m.B = {};
        var X = "",
            Y = "",
            qc, Z, rc = null,
            sc;

        function tc() {
            Y = X = "";
            rc = Z = qc = null;
            B("google.load") || (E("google.load", uc), E("google.setOnLoadCallback", J.V));
            var a = document.getElementsByTagName("script");
            a = (document.currentScript || a[a.length - 1]).getAttribute("src");
            a = new cb(a);
            var b = a.g;
            sc = b = b.match(/^www\.gstatic\.cn/) ? "gstatic.cn" : "gstatic.com";
            vc(a)
        }

        function vc(a) {
            a = new R(a.i.toString());
            var b = a.get("callback");
            "string" === typeof b && (b = wc(b), pc().then(b));
            a = a.get("autoload");
            if ("string" === typeof a) try {
                if ("" !== a) {
                    var c = JSON.parse(a).modules;
                    for (a = 0; a < c.length; a++) {
                        var d = c[a];
                        uc(d.name, d.version, d)
                    }
                }
            } catch (e) {
                throw Error("Autoload failed with: " + e);
            }
        }

        function xc(a) {
            var b = a,
                c, d = a.match(/^testing-/);
            d && (b = b.replace(/^testing-/, ""));
            a = b;
            do {
                if (b === J.m.M.O[b]) throw Error("Infinite loop in version mapping: " + b);
                (c = J.m.M.O[b]) && (b = c)
            } while (c);
            c = (d ? "testing-" : "") + b;
            return {
                version: "pre-45" == b ? a : c,
                ha: c
            }
        }

        function yc(a) {
            var b = J.m.N.ia[sc].loader,
                c = xc(a);
            return oc(b, {
                version: c.ha
            }).then(function () {
                var d = B("google.charts.loader.VersionSpecific.load") || B("google.charts.loader.publicLoad") || B("google.charts.versionSpecific.load");
                if (!d) throw Error("Bad version: " + a);
                rc = function (e) {
                    e = d(c.version, e);
                    if (null == e || null == e.then) {
                        var g = B("google.charts.loader.publicSetOnLoadCallback") || B("google.charts.versionSpecific.setOnLoadCallback");
                        e = new Promise(function (f) {
                            g(f)
                        });
                        e.then = g
                    }
                    return e
                }
            })
        }

        function zc(a) {
            "string" === typeof a && (a = [a]);
            Array.isArray(a) && 0 !== a.length || (a = J.m.N.ea);
            var b = [];
            a.forEach(function (c) {
                c = c.toLowerCase();
                b = b.concat(c.split(/[\s,]+\s*/))
            });
            return b
        }

        function Ac(a) {
            a = a || "";
            for (var b = a.replace(/-/g, "_").toLowerCase();
                "string" === typeof b;) a = b, b = J.m.aa[b], b === a && (b = !1);
            b || (a.match(/_[^_]+$/) ? (a = a.replace(/_[^_]+$/, ""), a = Ac(a)) : a = "en");
            return a
        }

        function Bc(a) {
            a = a || "";
            "" !== X && X !== a && (console.warn(" Attempting to load version '" + a + "' of Google Charts, but the previously loaded '" + (X + "' will be used instead.")), a = X);
            return X = a || ""
        }

        function Cc(a) {
            a = a || "";
            "" !== Y && Y !== a && (console.warn(" Attempting to load Google Charts for language '" + a + "', but the previously loaded '" + (Y + "' will be used instead.")), a = Y);
            "en" === a && (a = "");
            return Y = a || ""
        }

        function Dc(a) {
            var b = {},
                c;
            for (c in a) b[c] = a[c];
            return b
        }

        function Ec(a, b) {
            b = Dc(b);
            b.domain = sc;
            b.callback = wc(b.callback);
            a = Bc(a);
            var c = b.language;
            c = Cc(Ac(c));
            b.language = c;
            if (!qc) {
                if (b.enableUrlSettings && window.URLSearchParams) try {
                    a = (new URLSearchParams(top.location.search)).get("charts-version") || a
                } catch (d) {
                    console.info("Failed to get charts-version from top URL", d)
                }
                qc = yc(a)
            }
            b.packages = zc(b.packages);
            return Z = qc.then(function () {
                return rc(b)
            })
        }
        J.la = function (a) {
            return J.load(Object.assign({}, a, {
                safeMode: !0
            }))
        };
        E("google.charts.safeLoad", J.la);
        J.load = function (a) {
            for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
            c = 0;
            "visualization" === b[c] && c++;
            var d = "current";
            if ("string" === typeof b[c] || "number" === typeof b[c]) d = String(b[c]), c++;
            var e = {};
            sa(b[c]) && (e = b[c]);
            return Ec(d, e)
        };
        E("google.charts.load", J.load);
        J.V = function (a) {
            if (!Z) throw Error("Must call google.charts.load before google.charts.setOnLoadCallback");
            return a ? Z.then(a) : Z
        };
        E("google.charts.setOnLoadCallback", J.V);
        var Fc = H("https://maps.googleapis.com/maps/api/js?jsapiRedirect=true"),
            Gc = H("https://maps-api-ssl.google.com/maps?jsapiRedirect=true&file=googleapi");

        function Hc(a, b, c) {
            console.warn("Loading Maps API with the jsapi loader is deprecated.");
            c = c || {};
            a = c.key || c.client;
            var d = c.libraries,
                e = function (h) {
                    for (var k = {}, m = 0; m < h.length; m++) {
                        var n = h[m];
                        k[n[0]] = n[1]
                    }
                    return k
                }(c.other_params ? c.other_params.split("&").map(function (h) {
                    return h.split("=")
                }) : []),
                g = Object.assign({}, {
                    key: a,
                    ua: d
                }, e),
                f = "2" === b ? Gc : Fc;
            Z = new Promise(function (h) {
                var k = wc(c && c.callback);
                oc(f, {}, g).then(k).then(h)
            })
        }
        var Ic = H("https://www.gstatic.com/inputtools/js/ita/inputtools_3.js");

        function Jc(a, b, c) {
            sa(c) && c.packages ? (Array.isArray(c.packages) ? c.packages : [c.packages]).includes("inputtools") ? (console.warn('Loading "elements" with the jsapi loader is deprecated.\nPlease load ' + (Ic + " directly.")), Z = new Promise(function (d) {
                var e = wc(c && c.callback);
                oc(Ic, {}, {}).then(e).then(d)
            })) : console.error('Loading "elements" other than "inputtools" is unsupported.') : console.error("google.load of elements was invoked without specifying packages")
        }
        var Kc = H("https://ajax.googleapis.com/ajax/libs/%{module}/%{version}/%{file}");

        function Lc(a, b) {
            var c;
            do {
                if (a === b[a]) throw Error("Infinite loop in version mapping for version " + a);
                (c = b[a]) && (a = c)
            } while (c);
            return a
        }

        function Mc(a, b, c) {
            var d = J.m.$.ga[a];
            if (d) {
                b = Lc(b, d.aliases);
                d = d.versions[b];
                if (!d) throw Error("Unknown version, " + b + ", of " + a + ".");
                var e = {
                    module: a,
                    version: b || "",
                    file: d.compressed
                };
                b = Ca(mc({
                    format: Kc,
                    ba: e
                })).toString();
                console.warn("Loading modules with the jsapi loader is deprecated.\nPlease load " + (a + " directly from " + b + "."));
                Z = new Promise(function (g) {
                    var f = wc(c && c.callback);
                    oc(Kc, e).then(f).then(g)
                })
            } else setTimeout(function () {
                throw Error('Module "' + a + '" is not supported.');
            }, 0)
        }

        function wc(a) {
            return function () {
                if ("function" === typeof a) a();
                else if ("string" === typeof a && "" !== a) try {
                    var b = B(a);
                    if ("function" !== typeof b) throw Error("Type of '" + a + "' is " + typeof b + ".");
                    b()
                } catch (c) {
                    throw Error("Callback of " + a + " failed with: " + c);
                }
            }
        }

        function uc(a) {
            for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
            switch (b[0]) {
                case "maps":
                    Hc.apply(null, ea(b));
                    break;
                case "elements":
                    Jc.apply(null, ea(b));
                    break;
                case "visualization":
                    J.load.apply(J, ea(b));
                    break;
                default:
                    Mc.apply(null, ea(b))
            }
        }
        E("google.loader.LoadFailure", !1);
        sc ? console.warn("Google Charts loader.js should only be loaded once.") : tc();
        J.m.B.sa = tc;
        J.m.B.va = xc;
        J.m.B.wa = Ac;
        J.m.B.xa = zc;
        J.m.B.Da = Bc;
        J.m.B.Ca = Cc;
        J.m.B.za = vc;
        J.m.B.ra = function () {
            return rc
        };
    }).call(this);

    /*!
     * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
     * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
     * Released under MIT License
     */
    (function (global, factory) {
        typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
            typeof define === 'function' && define.amd ? define(factory) :
            (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.html2canvas = factory());
    }(this, (function () {
        'use strict';

        /*! *****************************************************************************
        Copyright (c) Microsoft Corporation.

        Permission to use, copy, modify, and/or distribute this software for any
        purpose with or without fee is hereby granted.

        THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
        REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
        AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
        INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
        LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
        OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
        PERFORMANCE OF THIS SOFTWARE.
        ***************************************************************************** */
        /* global Reflect, Promise */

        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({
                        __proto__: []
                    }
                    instanceof Array && function (d, b) {
                        d.__proto__ = b;
                    }) ||
                function (d, b) {
                    for (var p in b)
                        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                };
            return extendStatics(d, b);
        };

        function __extends(d, b) {
            if (typeof b !== "function" && b !== null)
                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
            extendStatics(d, b);

            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        }

        var __assign = function () {
            __assign = Object.assign || function __assign(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (var p in s)
                        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
            };
            return __assign.apply(this, arguments);
        };

        function __awaiter(thisArg, _arguments, P, generator) {
            function adopt(value) {
                return value instanceof P ? value : new P(function (resolve) {
                    resolve(value);
                });
            }
            return new(P || (P = Promise))(function (resolve, reject) {
                function fulfilled(value) {
                    try {
                        step(generator.next(value));
                    } catch (e) {
                        reject(e);
                    }
                }

                function rejected(value) {
                    try {
                        step(generator["throw"](value));
                    } catch (e) {
                        reject(e);
                    }
                }

                function step(result) {
                    result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                }
                step((generator = generator.apply(thisArg, _arguments || [])).next());
            });
        }

        function __generator(thisArg, body) {
            var _ = {
                    label: 0,
                    sent: function () {
                        if (t[0] & 1) throw t[1];
                        return t[1];
                    },
                    trys: [],
                    ops: []
                },
                f, y, t, g;
            return g = {
                next: verb(0),
                "throw": verb(1),
                "return": verb(2)
            }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
                return this;
            }), g;

            function verb(n) {
                return function (v) {
                    return step([n, v]);
                };
            }

            function step(op) {
                if (f) throw new TypeError("Generator is already executing.");
                while (_) try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                    if (y = 0, t) op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return {
                                value: op[1], done: false
                            };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2]) _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                } catch (e) {
                    op = [6, e];
                    y = 0;
                } finally {
                    f = t = 0;
                }
                if (op[0] & 5) throw op[1];
                return {
                    value: op[0] ? op[1] : void 0,
                    done: true
                };
            }
        }

        function __spreadArray(to, from, pack) {
            if (pack || arguments.length === 2)
                for (var i = 0, l = from.length, ar; i < l; i++) {
                    if (ar || !(i in from)) {
                        if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                        ar[i] = from[i];
                    }
                }
            return to.concat(ar || from);
        }

        var Bounds = /** @class */ (function () {
            function Bounds(left, top, width, height) {
                this.left = left;
                this.top = top;
                this.width = width;
                this.height = height;
            }
            Bounds.prototype.add = function (x, y, w, h) {
                return new Bounds(this.left + x, this.top + y, this.width + w, this.height + h);
            };
            Bounds.fromClientRect = function (context, clientRect) {
                return new Bounds(clientRect.left + context.windowBounds.left, clientRect.top + context.windowBounds.top, clientRect.width, clientRect.height);
            };
            Bounds.fromDOMRectList = function (context, domRectList) {
                var domRect = Array.from(domRectList).find(function (rect) {
                    return rect.width !== 0;
                });
                return domRect ?
                    new Bounds(domRect.left + context.windowBounds.left, domRect.top + context.windowBounds.top, domRect.width, domRect.height) :
                    Bounds.EMPTY;
            };
            Bounds.EMPTY = new Bounds(0, 0, 0, 0);
            return Bounds;
        }());
        var parseBounds = function (context, node) {
            return Bounds.fromClientRect(context, node.getBoundingClientRect());
        };
        var parseDocumentSize = function (document) {
            var body = document.body;
            var documentElement = document.documentElement;
            if (!body || !documentElement) {
                throw new Error("Unable to get document size");
            }
            var width = Math.max(Math.max(body.scrollWidth, documentElement.scrollWidth), Math.max(body.offsetWidth, documentElement.offsetWidth), Math.max(body.clientWidth, documentElement.clientWidth));
            var height = Math.max(Math.max(body.scrollHeight, documentElement.scrollHeight), Math.max(body.offsetHeight, documentElement.offsetHeight), Math.max(body.clientHeight, documentElement.clientHeight));
            return new Bounds(0, 0, width, height);
        };

        /*
         * css-line-break 2.1.0 <https://github.com/niklasvh/css-line-break#readme>
         * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
         * Released under MIT License
         */
        var toCodePoints$1 = function (str) {
            var codePoints = [];
            var i = 0;
            var length = str.length;
            while (i < length) {
                var value = str.charCodeAt(i++);
                if (value >= 0xd800 && value <= 0xdbff && i < length) {
                    var extra = str.charCodeAt(i++);
                    if ((extra & 0xfc00) === 0xdc00) {
                        codePoints.push(((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000);
                    } else {
                        codePoints.push(value);
                        i--;
                    }
                } else {
                    codePoints.push(value);
                }
            }
            return codePoints;
        };
        var fromCodePoint$1 = function () {
            var codePoints = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                codePoints[_i] = arguments[_i];
            }
            if (String.fromCodePoint) {
                return String.fromCodePoint.apply(String, codePoints);
            }
            var length = codePoints.length;
            if (!length) {
                return '';
            }
            var codeUnits = [];
            var index = -1;
            var result = '';
            while (++index < length) {
                var codePoint = codePoints[index];
                if (codePoint <= 0xffff) {
                    codeUnits.push(codePoint);
                } else {
                    codePoint -= 0x10000;
                    codeUnits.push((codePoint >> 10) + 0xd800, (codePoint % 0x400) + 0xdc00);
                }
                if (index + 1 === length || codeUnits.length > 0x4000) {
                    result += String.fromCharCode.apply(String, codeUnits);
                    codeUnits.length = 0;
                }
            }
            return result;
        };
        var chars$2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
        // Use a lookup table to find the index.
        var lookup$2 = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
        for (var i$2 = 0; i$2 < chars$2.length; i$2++) {
            lookup$2[chars$2.charCodeAt(i$2)] = i$2;
        }

        /*
         * utrie 1.0.2 <https://github.com/niklasvh/utrie>
         * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
         * Released under MIT License
         */
        var chars$1$1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
        // Use a lookup table to find the index.
        var lookup$1$1 = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
        for (var i$1$1 = 0; i$1$1 < chars$1$1.length; i$1$1++) {
            lookup$1$1[chars$1$1.charCodeAt(i$1$1)] = i$1$1;
        }
        var decode$1 = function (base64) {
            var bufferLength = base64.length * 0.75,
                len = base64.length,
                i, p = 0,
                encoded1, encoded2, encoded3, encoded4;
            if (base64[base64.length - 1] === '=') {
                bufferLength--;
                if (base64[base64.length - 2] === '=') {
                    bufferLength--;
                }
            }
            var buffer = typeof ArrayBuffer !== 'undefined' &&
                typeof Uint8Array !== 'undefined' &&
                typeof Uint8Array.prototype.slice !== 'undefined' ?
                new ArrayBuffer(bufferLength) :
                new Array(bufferLength);
            var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);
            for (i = 0; i < len; i += 4) {
                encoded1 = lookup$1$1[base64.charCodeAt(i)];
                encoded2 = lookup$1$1[base64.charCodeAt(i + 1)];
                encoded3 = lookup$1$1[base64.charCodeAt(i + 2)];
                encoded4 = lookup$1$1[base64.charCodeAt(i + 3)];
                bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
                bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
                bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
            }
            return buffer;
        };
        var polyUint16Array$1 = function (buffer) {
            var length = buffer.length;
            var bytes = [];
            for (var i = 0; i < length; i += 2) {
                bytes.push((buffer[i + 1] << 8) | buffer[i]);
            }
            return bytes;
        };
        var polyUint32Array$1 = function (buffer) {
            var length = buffer.length;
            var bytes = [];
            for (var i = 0; i < length; i += 4) {
                bytes.push((buffer[i + 3] << 24) | (buffer[i + 2] << 16) | (buffer[i + 1] << 8) | buffer[i]);
            }
            return bytes;
        };

        /** Shift size for getting the index-2 table offset. */
        var UTRIE2_SHIFT_2$1 = 5;
        /** Shift size for getting the index-1 table offset. */
        var UTRIE2_SHIFT_1$1 = 6 + 5;
        /**
         * Shift size for shifting left the index array values.
         * Increases possible data size with 16-bit index values at the cost
         * of compactability.
         * This requires data blocks to be aligned by UTRIE2_DATA_GRANULARITY.
         */
        var UTRIE2_INDEX_SHIFT$1 = 2;
        /**
         * Difference between the two shift sizes,
         * for getting an index-1 offset from an index-2 offset. 6=11-5
         */
        var UTRIE2_SHIFT_1_2$1 = UTRIE2_SHIFT_1$1 - UTRIE2_SHIFT_2$1;
        /**
         * The part of the index-2 table for U+D800..U+DBFF stores values for
         * lead surrogate code _units_ not code _points_.
         * Values for lead surrogate code _points_ are indexed with this portion of the table.
         * Length=32=0x20=0x400>>UTRIE2_SHIFT_2. (There are 1024=0x400 lead surrogates.)
         */
        var UTRIE2_LSCP_INDEX_2_OFFSET$1 = 0x10000 >> UTRIE2_SHIFT_2$1;
        /** Number of entries in a data block. 32=0x20 */
        var UTRIE2_DATA_BLOCK_LENGTH$1 = 1 << UTRIE2_SHIFT_2$1;
        /** Mask for getting the lower bits for the in-data-block offset. */
        var UTRIE2_DATA_MASK$1 = UTRIE2_DATA_BLOCK_LENGTH$1 - 1;
        var UTRIE2_LSCP_INDEX_2_LENGTH$1 = 0x400 >> UTRIE2_SHIFT_2$1;
        /** Count the lengths of both BMP pieces. 2080=0x820 */
        var UTRIE2_INDEX_2_BMP_LENGTH$1 = UTRIE2_LSCP_INDEX_2_OFFSET$1 + UTRIE2_LSCP_INDEX_2_LENGTH$1;
        /**
         * The 2-byte UTF-8 version of the index-2 table follows at offset 2080=0x820.
         * Length 32=0x20 for lead bytes C0..DF, regardless of UTRIE2_SHIFT_2.
         */
        var UTRIE2_UTF8_2B_INDEX_2_OFFSET$1 = UTRIE2_INDEX_2_BMP_LENGTH$1;
        var UTRIE2_UTF8_2B_INDEX_2_LENGTH$1 = 0x800 >> 6; /* U+0800 is the first code point after 2-byte UTF-8 */
        /**
         * The index-1 table, only used for supplementary code points, at offset 2112=0x840.
         * Variable length, for code points up to highStart, where the last single-value range starts.
         * Maximum length 512=0x200=0x100000>>UTRIE2_SHIFT_1.
         * (For 0x100000 supplementary code points U+10000..U+10ffff.)
         *
         * The part of the index-2 table for supplementary code points starts
         * after this index-1 table.
         *
         * Both the index-1 table and the following part of the index-2 table
         * are omitted completely if there is only BMP data.
         */
        var UTRIE2_INDEX_1_OFFSET$1 = UTRIE2_UTF8_2B_INDEX_2_OFFSET$1 + UTRIE2_UTF8_2B_INDEX_2_LENGTH$1;
        /**
         * Number of index-1 entries for the BMP. 32=0x20
         * This part of the index-1 table is omitted from the serialized form.
         */
        var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH$1 = 0x10000 >> UTRIE2_SHIFT_1$1;
        /** Number of entries in an index-2 block. 64=0x40 */
        var UTRIE2_INDEX_2_BLOCK_LENGTH$1 = 1 << UTRIE2_SHIFT_1_2$1;
        /** Mask for getting the lower bits for the in-index-2-block offset. */
        var UTRIE2_INDEX_2_MASK$1 = UTRIE2_INDEX_2_BLOCK_LENGTH$1 - 1;
        var slice16$1 = function (view, start, end) {
            if (view.slice) {
                return view.slice(start, end);
            }
            return new Uint16Array(Array.prototype.slice.call(view, start, end));
        };
        var slice32$1 = function (view, start, end) {
            if (view.slice) {
                return view.slice(start, end);
            }
            return new Uint32Array(Array.prototype.slice.call(view, start, end));
        };
        var createTrieFromBase64$1 = function (base64, _byteLength) {
            var buffer = decode$1(base64);
            var view32 = Array.isArray(buffer) ? polyUint32Array$1(buffer) : new Uint32Array(buffer);
            var view16 = Array.isArray(buffer) ? polyUint16Array$1(buffer) : new Uint16Array(buffer);
            var headerLength = 24;
            var index = slice16$1(view16, headerLength / 2, view32[4] / 2);
            var data = view32[5] === 2 ?
                slice16$1(view16, (headerLength + view32[4]) / 2) :
                slice32$1(view32, Math.ceil((headerLength + view32[4]) / 4));
            return new Trie$1(view32[0], view32[1], view32[2], view32[3], index, data);
        };
        var Trie$1 = /** @class */ (function () {
            function Trie(initialValue, errorValue, highStart, highValueIndex, index, data) {
                this.initialValue = initialValue;
                this.errorValue = errorValue;
                this.highStart = highStart;
                this.highValueIndex = highValueIndex;
                this.index = index;
                this.data = data;
            }
            /**
             * Get the value for a code point as stored in the Trie.
             *
             * @param codePoint the code point
             * @return the value
             */
            Trie.prototype.get = function (codePoint) {
                var ix;
                if (codePoint >= 0) {
                    if (codePoint < 0x0d800 || (codePoint > 0x0dbff && codePoint <= 0x0ffff)) {
                        // Ordinary BMP code point, excluding leading surrogates.
                        // BMP uses a single level lookup.  BMP index starts at offset 0 in the Trie2 index.
                        // 16 bit data is stored in the index array itself.
                        ix = this.index[codePoint >> UTRIE2_SHIFT_2$1];
                        ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
                        return this.data[ix];
                    }
                    if (codePoint <= 0xffff) {
                        // Lead Surrogate Code Point.  A Separate index section is stored for
                        // lead surrogate code units and code points.
                        //   The main index has the code unit data.
                        //   For this function, we need the code point data.
                        // Note: this expression could be refactored for slightly improved efficiency, but
                        //       surrogate code points will be so rare in practice that it's not worth it.
                        ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET$1 + ((codePoint - 0xd800) >> UTRIE2_SHIFT_2$1)];
                        ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
                        return this.data[ix];
                    }
                    if (codePoint < this.highStart) {
                        // Supplemental code point, use two-level lookup.
                        ix = UTRIE2_INDEX_1_OFFSET$1 - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH$1 + (codePoint >> UTRIE2_SHIFT_1$1);
                        ix = this.index[ix];
                        ix += (codePoint >> UTRIE2_SHIFT_2$1) & UTRIE2_INDEX_2_MASK$1;
                        ix = this.index[ix];
                        ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
                        return this.data[ix];
                    }
                    if (codePoint <= 0x10ffff) {
                        return this.data[this.highValueIndex];
                    }
                }
                // Fall through.  The code point is outside of the legal range of 0..0x10ffff.
                return this.errorValue;
            };
            return Trie;
        }());

        /*
         * base64-arraybuffer 1.0.2 <https://github.com/niklasvh/base64-arraybuffer>
         * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
         * Released under MIT License
         */
        var chars$3 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
        // Use a lookup table to find the index.
        var lookup$3 = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
        for (var i$3 = 0; i$3 < chars$3.length; i$3++) {
            lookup$3[chars$3.charCodeAt(i$3)] = i$3;
        }

        var base64$1 = 'KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==';

        var LETTER_NUMBER_MODIFIER = 50;
        // Non-tailorable Line Breaking Classes
        var BK = 1; //  Cause a line break (after)
        var CR$1 = 2; //  Cause a line break (after), except between CR and LF
        var LF$1 = 3; //  Cause a line break (after)
        var CM = 4; //  Prohibit a line break between the character and the preceding character
        var NL = 5; //  Cause a line break (after)
        var WJ = 7; //  Prohibit line breaks before and after
        var ZW = 8; //  Provide a break opportunity
        var GL = 9; //  Prohibit line breaks before and after
        var SP = 10; // Enable indirect line breaks
        var ZWJ$1 = 11; // Prohibit line breaks within joiner sequences
        // Break Opportunities
        var B2 = 12; //  Provide a line break opportunity before and after the character
        var BA = 13; //  Generally provide a line break opportunity after the character
        var BB = 14; //  Generally provide a line break opportunity before the character
        var HY = 15; //  Provide a line break opportunity after the character, except in numeric context
        var CB = 16; //   Provide a line break opportunity contingent on additional information
        // Characters Prohibiting Certain Breaks
        var CL = 17; //  Prohibit line breaks before
        var CP = 18; //  Prohibit line breaks before
        var EX = 19; //  Prohibit line breaks before
        var IN = 20; //  Allow only indirect line breaks between pairs
        var NS = 21; //  Allow only indirect line breaks before
        var OP = 22; //  Prohibit line breaks after
        var QU = 23; //  Act like they are both opening and closing
        // Numeric Context
        var IS = 24; //  Prevent breaks after any and before numeric
        var NU = 25; //  Form numeric expressions for line breaking purposes
        var PO = 26; //  Do not break following a numeric expression
        var PR = 27; //  Do not break in front of a numeric expression
        var SY = 28; //  Prevent a break before; and allow a break after
        // Other Characters
        var AI = 29; //  Act like AL when the resolvedEAW is N; otherwise; act as ID
        var AL = 30; //  Are alphabetic characters or symbols that are used with alphabetic characters
        var CJ = 31; //  Treat as NS or ID for strict or normal breaking.
        var EB = 32; //  Do not break from following Emoji Modifier
        var EM = 33; //  Do not break from preceding Emoji Base
        var H2 = 34; //  Form Korean syllable blocks
        var H3 = 35; //  Form Korean syllable blocks
        var HL = 36; //  Do not break around a following hyphen; otherwise act as Alphabetic
        var ID = 37; //  Break before or after; except in some numeric context
        var JL = 38; //  Form Korean syllable blocks
        var JV = 39; //  Form Korean syllable blocks
        var JT = 40; //  Form Korean syllable blocks
        var RI$1 = 41; //  Keep pairs together. For pairs; break before and after other classes
        var SA = 42; //  Provide a line break opportunity contingent on additional, language-specific context analysis
        var XX = 43; //  Have as yet unknown line breaking behavior or unassigned code positions
        var ea_OP = [0x2329, 0xff08];
        var BREAK_MANDATORY = '!';
        var BREAK_NOT_ALLOWED$1 = '×';
        var BREAK_ALLOWED$1 = '÷';
        var UnicodeTrie$1 = createTrieFromBase64$1(base64$1);
        var ALPHABETICS = [AL, HL];
        var HARD_LINE_BREAKS = [BK, CR$1, LF$1, NL];
        var SPACE$1 = [SP, ZW];
        var PREFIX_POSTFIX = [PR, PO];
        var LINE_BREAKS = HARD_LINE_BREAKS.concat(SPACE$1);
        var KOREAN_SYLLABLE_BLOCK = [JL, JV, JT, H2, H3];
        var HYPHEN = [HY, BA];
        var codePointsToCharacterClasses = function (codePoints, lineBreak) {
            if (lineBreak === void 0) {
                lineBreak = 'strict';
            }
            var types = [];
            var indices = [];
            var categories = [];
            codePoints.forEach(function (codePoint, index) {
                var classType = UnicodeTrie$1.get(codePoint);
                if (classType > LETTER_NUMBER_MODIFIER) {
                    categories.push(true);
                    classType -= LETTER_NUMBER_MODIFIER;
                } else {
                    categories.push(false);
                }
                if (['normal', 'auto', 'loose'].indexOf(lineBreak) !== -1) {
                    // U+2010, – U+2013, 〜 U+301C, ゠ U+30A0
                    if ([0x2010, 0x2013, 0x301c, 0x30a0].indexOf(codePoint) !== -1) {
                        indices.push(index);
                        return types.push(CB);
                    }
                }
                if (classType === CM || classType === ZWJ$1) {
                    // LB10 Treat any remaining combining mark or ZWJ as AL.
                    if (index === 0) {
                        indices.push(index);
                        return types.push(AL);
                    }
                    // LB9 Do not break a combining character sequence; treat it as if it has the line breaking class of
                    // the base character in all of the following rules. Treat ZWJ as if it were CM.
                    var prev = types[index - 1];
                    if (LINE_BREAKS.indexOf(prev) === -1) {
                        indices.push(indices[index - 1]);
                        return types.push(prev);
                    }
                    indices.push(index);
                    return types.push(AL);
                }
                indices.push(index);
                if (classType === CJ) {
                    return types.push(lineBreak === 'strict' ? NS : ID);
                }
                if (classType === SA) {
                    return types.push(AL);
                }
                if (classType === AI) {
                    return types.push(AL);
                }
                // For supplementary characters, a useful default is to treat characters in the range 10000..1FFFD as AL
                // and characters in the ranges 20000..2FFFD and 30000..3FFFD as ID, until the implementation can be revised
                // to take into account the actual line breaking properties for these characters.
                if (classType === XX) {
                    if ((codePoint >= 0x20000 && codePoint <= 0x2fffd) || (codePoint >= 0x30000 && codePoint <= 0x3fffd)) {
                        return types.push(ID);
                    } else {
                        return types.push(AL);
                    }
                }
                types.push(classType);
            });
            return [indices, types, categories];
        };
        var isAdjacentWithSpaceIgnored = function (a, b, currentIndex, classTypes) {
            var current = classTypes[currentIndex];
            if (Array.isArray(a) ? a.indexOf(current) !== -1 : a === current) {
                var i = currentIndex;
                while (i <= classTypes.length) {
                    i++;
                    var next = classTypes[i];
                    if (next === b) {
                        return true;
                    }
                    if (next !== SP) {
                        break;
                    }
                }
            }
            if (current === SP) {
                var i = currentIndex;
                while (i > 0) {
                    i--;
                    var prev = classTypes[i];
                    if (Array.isArray(a) ? a.indexOf(prev) !== -1 : a === prev) {
                        var n = currentIndex;
                        while (n <= classTypes.length) {
                            n++;
                            var next = classTypes[n];
                            if (next === b) {
                                return true;
                            }
                            if (next !== SP) {
                                break;
                            }
                        }
                    }
                    if (prev !== SP) {
                        break;
                    }
                }
            }
            return false;
        };
        var previousNonSpaceClassType = function (currentIndex, classTypes) {
            var i = currentIndex;
            while (i >= 0) {
                var type = classTypes[i];
                if (type === SP) {
                    i--;
                } else {
                    return type;
                }
            }
            return 0;
        };
        var _lineBreakAtIndex = function (codePoints, classTypes, indicies, index, forbiddenBreaks) {
            if (indicies[index] === 0) {
                return BREAK_NOT_ALLOWED$1;
            }
            var currentIndex = index - 1;
            if (Array.isArray(forbiddenBreaks) && forbiddenBreaks[currentIndex] === true) {
                return BREAK_NOT_ALLOWED$1;
            }
            var beforeIndex = currentIndex - 1;
            var afterIndex = currentIndex + 1;
            var current = classTypes[currentIndex];
            // LB4 Always break after hard line breaks.
            // LB5 Treat CR followed by LF, as well as CR, LF, and NL as hard line breaks.
            var before = beforeIndex >= 0 ? classTypes[beforeIndex] : 0;
            var next = classTypes[afterIndex];
            if (current === CR$1 && next === LF$1) {
                return BREAK_NOT_ALLOWED$1;
            }
            if (HARD_LINE_BREAKS.indexOf(current) !== -1) {
                return BREAK_MANDATORY;
            }
            // LB6 Do not break before hard line breaks.
            if (HARD_LINE_BREAKS.indexOf(next) !== -1) {
                return BREAK_NOT_ALLOWED$1;
            }
            // LB7 Do not break before spaces or zero width space.
            if (SPACE$1.indexOf(next) !== -1) {
                return BREAK_NOT_ALLOWED$1;
            }
            // LB8 Break before any character following a zero-width space, even if one or more spaces intervene.
            if (previousNonSpaceClassType(currentIndex, classTypes) === ZW) {
                return BREAK_ALLOWED$1;
            }
            // LB8a Do not break after a zero width joiner.
            if (UnicodeTrie$1.get(codePoints[currentIndex]) === ZWJ$1) {
                return BREAK_NOT_ALLOWED$1;
            }
            // zwj emojis
            if ((current === EB || current === EM) && UnicodeTrie$1.get(codePoints[afterIndex]) === ZWJ$1) {
                return BREAK_NOT_ALLOWED$1;
            }
            // LB11 Do not break before or after Word joiner and related characters.
            if (current === WJ || next === WJ) {
                return BREAK_NOT_ALLOWED$1;
            }
            // LB12 Do not break after NBSP and related characters.
            if (current === GL) {
                return BREAK_NOT_ALLOWED$1;
            }
            // LB12a Do not break before NBSP and related characters, except after spaces and hyphens.
            if ([SP, BA, HY].indexOf(current) === -1 && next === GL) {
                return BREAK_NOT_ALLOWED$1;
            }
            // LB13 Do not break before ‘]’ or ‘!’ or ‘;’ or ‘/’, even after spaces.
            if ([CL, CP, EX, IS, SY].indexOf(next) !== -1) {
                return BREAK_NOT_ALLOWED$1;
            }
            // LB14 Do not break after ‘[’, even after spaces.
            if (previousNonSpaceClassType(currentIndex, classTypes) === OP) {
                return BREAK_NOT_ALLOWED$1;
            }
            // LB15 Do not break within ‘”[’, even with intervening spaces.
            if (isAdjacentWithSpaceIgnored(QU, OP, currentIndex, classTypes)) {
                return BREAK_NOT_ALLOWED$1;
            }
            // LB16 Do not break between closing punctuation and a nonstarter (lb=NS), even with intervening spaces.
            if (isAdjacentWithSpaceIgnored([CL, CP], NS, currentIndex, classTypes)) {
                return BREAK_NOT_ALLOWED$1;
            }
            // LB17 Do not break within ‘——’, even with intervening spaces.
            if (isAdjacentWithSpaceIgnored(B2, B2, currentIndex, classTypes)) {
                return BREAK_NOT_ALLOWED$1;
            }
            // LB18 Break after spaces.
            if (current === SP) {
                return BREAK_ALLOWED$1;
            }
            // LB19 Do not break before or after quotation marks, such as ‘ ” ’.
            if (current === QU || next === QU) {
                return BREAK_NOT_ALLOWED$1;
            }
            // LB20 Break before and after unresolved CB.
            if (next === CB || current === CB) {
                return BREAK_ALLOWED$1;
            }
            // LB21 Do not break before hyphen-minus, other hyphens, fixed-width spaces, small kana, and other non-starters, or after acute accents.
            if ([BA, HY, NS].indexOf(next) !== -1 || current === BB) {
                return BREAK_NOT_ALLOWED$1;
            }
            // LB21a Don't break after Hebrew + Hyphen.
            if (before === HL && HYPHEN.indexOf(current) !== -1) {
                return BREAK_NOT_ALLOWED$1;
            }
            // LB21b Don’t break between Solidus and Hebrew letters.
            if (current === SY && next === HL) {
                return BREAK_NOT_ALLOWED$1;
            }
            // LB22 Do not break before ellipsis.
            if (next === IN) {
                return BREAK_NOT_ALLOWED$1;
            }
            // LB23 Do not break between digits and letters.
            if ((ALPHABETICS.indexOf(next) !== -1 && current === NU) || (ALPHABETICS.indexOf(current) !== -1 && next === NU)) {
                return BREAK_NOT_ALLOWED$1;
            }
            // LB23a Do not break between numeric prefixes and ideographs, or between ideographs and numeric postfixes.
            if ((current === PR && [ID, EB, EM].indexOf(next) !== -1) ||
                ([ID, EB, EM].indexOf(current) !== -1 && next === PO)) {
                return BREAK_NOT_ALLOWED$1;
            }
            // LB24 Do not break between numeric prefix/postfix and letters, or between letters and prefix/postfix.
            if ((ALPHABETICS.indexOf(current) !== -1 && PREFIX_POSTFIX.indexOf(next) !== -1) ||
                (PREFIX_POSTFIX.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1)) {
                return BREAK_NOT_ALLOWED$1;
            }
            // LB25 Do not break between the following pairs of classes relevant to numbers:
            if (
                // (PR | PO) × ( OP | HY )? NU
                ([PR, PO].indexOf(current) !== -1 &&
                    (next === NU || ([OP, HY].indexOf(next) !== -1 && classTypes[afterIndex + 1] === NU))) ||
                // ( OP | HY ) × NU
                ([OP, HY].indexOf(current) !== -1 && next === NU) ||
                // NU ×	(NU | SY | IS)
                (current === NU && [NU, SY, IS].indexOf(next) !== -1)) {
                return BREAK_NOT_ALLOWED$1;
            }
            // NU (NU | SY | IS)* × (NU | SY | IS | CL | CP)
            if ([NU, SY, IS, CL, CP].indexOf(next) !== -1) {
                var prevIndex = currentIndex;
                while (prevIndex >= 0) {
                    var type = classTypes[prevIndex];
                    if (type === NU) {
                        return BREAK_NOT_ALLOWED$1;
                    } else if ([SY, IS].indexOf(type) !== -1) {
                        prevIndex--;
                    } else {
                        break;
                    }
                }
            }
            // NU (NU | SY | IS)* (CL | CP)? × (PO | PR))
            if ([PR, PO].indexOf(next) !== -1) {
                var prevIndex = [CL, CP].indexOf(current) !== -1 ? beforeIndex : currentIndex;
                while (prevIndex >= 0) {
                    var type = classTypes[prevIndex];
                    if (type === NU) {
                        return BREAK_NOT_ALLOWED$1;
                    } else if ([SY, IS].indexOf(type) !== -1) {
                        prevIndex--;
                    } else {
                        break;
                    }
                }
            }
            // LB26 Do not break a Korean syllable.
            if ((JL === current && [JL, JV, H2, H3].indexOf(next) !== -1) ||
                ([JV, H2].indexOf(current) !== -1 && [JV, JT].indexOf(next) !== -1) ||
                ([JT, H3].indexOf(current) !== -1 && next === JT)) {
                return BREAK_NOT_ALLOWED$1;
            }
            // LB27 Treat a Korean Syllable Block the same as ID.
            if ((KOREAN_SYLLABLE_BLOCK.indexOf(current) !== -1 && [IN, PO].indexOf(next) !== -1) ||
                (KOREAN_SYLLABLE_BLOCK.indexOf(next) !== -1 && current === PR)) {
                return BREAK_NOT_ALLOWED$1;
            }
            // LB28 Do not break between alphabetics (“at”).
            if (ALPHABETICS.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {
                return BREAK_NOT_ALLOWED$1;
            }
            // LB29 Do not break between numeric punctuation and alphabetics (“e.g.”).
            if (current === IS && ALPHABETICS.indexOf(next) !== -1) {
                return BREAK_NOT_ALLOWED$1;
            }
            // LB30 Do not break between letters, numbers, or ordinary symbols and opening or closing parentheses.
            if ((ALPHABETICS.concat(NU).indexOf(current) !== -1 &&
                    next === OP &&
                    ea_OP.indexOf(codePoints[afterIndex]) === -1) ||
                (ALPHABETICS.concat(NU).indexOf(next) !== -1 && current === CP)) {
                return BREAK_NOT_ALLOWED$1;
            }
            // LB30a Break between two regional indicator symbols if and only if there are an even number of regional
            // indicators preceding the position of the break.
            if (current === RI$1 && next === RI$1) {
                var i = indicies[currentIndex];
                var count = 1;
                while (i > 0) {
                    i--;
                    if (classTypes[i] === RI$1) {
                        count++;
                    } else {
                        break;
                    }
                }
                if (count % 2 !== 0) {
                    return BREAK_NOT_ALLOWED$1;
                }
            }
            // LB30b Do not break between an emoji base and an emoji modifier.
            if (current === EB && next === EM) {
                return BREAK_NOT_ALLOWED$1;
            }
            return BREAK_ALLOWED$1;
        };
        var cssFormattedClasses = function (codePoints, options) {
            if (!options) {
                options = {
                    lineBreak: 'normal',
                    wordBreak: 'normal'
                };
            }
            var _a = codePointsToCharacterClasses(codePoints, options.lineBreak),
                indicies = _a[0],
                classTypes = _a[1],
                isLetterNumber = _a[2];
            if (options.wordBreak === 'break-all' || options.wordBreak === 'break-word') {
                classTypes = classTypes.map(function (type) {
                    return ([NU, AL, SA].indexOf(type) !== -1 ? ID : type);
                });
            }
            var forbiddenBreakpoints = options.wordBreak === 'keep-all' ?
                isLetterNumber.map(function (letterNumber, i) {
                    return letterNumber && codePoints[i] >= 0x4e00 && codePoints[i] <= 0x9fff;
                }) :
                undefined;
            return [indicies, classTypes, forbiddenBreakpoints];
        };
        var Break = /** @class */ (function () {
            function Break(codePoints, lineBreak, start, end) {
                this.codePoints = codePoints;
                this.required = lineBreak === BREAK_MANDATORY;
                this.start = start;
                this.end = end;
            }
            Break.prototype.slice = function () {
                return fromCodePoint$1.apply(void 0, this.codePoints.slice(this.start, this.end));
            };
            return Break;
        }());
        var LineBreaker = function (str, options) {
            var codePoints = toCodePoints$1(str);
            var _a = cssFormattedClasses(codePoints, options),
                indicies = _a[0],
                classTypes = _a[1],
                forbiddenBreakpoints = _a[2];
            var length = codePoints.length;
            var lastEnd = 0;
            var nextIndex = 0;
            return {
                next: function () {
                    if (nextIndex >= length) {
                        return {
                            done: true,
                            value: null
                        };
                    }
                    var lineBreak = BREAK_NOT_ALLOWED$1;
                    while (nextIndex < length &&
                        (lineBreak = _lineBreakAtIndex(codePoints, classTypes, indicies, ++nextIndex, forbiddenBreakpoints)) ===
                        BREAK_NOT_ALLOWED$1) {}
                    if (lineBreak !== BREAK_NOT_ALLOWED$1 || nextIndex === length) {
                        var value = new Break(codePoints, lineBreak, lastEnd, nextIndex);
                        lastEnd = nextIndex;
                        return {
                            value: value,
                            done: false
                        };
                    }
                    return {
                        done: true,
                        value: null
                    };
                },
            };
        };

        // https://www.w3.org/TR/css-syntax-3
        var FLAG_UNRESTRICTED = 1 << 0;
        var FLAG_ID = 1 << 1;
        var FLAG_INTEGER = 1 << 2;
        var FLAG_NUMBER = 1 << 3;
        var LINE_FEED = 0x000a;
        var SOLIDUS = 0x002f;
        var REVERSE_SOLIDUS = 0x005c;
        var CHARACTER_TABULATION = 0x0009;
        var SPACE = 0x0020;
        var QUOTATION_MARK = 0x0022;
        var EQUALS_SIGN = 0x003d;
        var NUMBER_SIGN = 0x0023;
        var DOLLAR_SIGN = 0x0024;
        var PERCENTAGE_SIGN = 0x0025;
        var APOSTROPHE = 0x0027;
        var LEFT_PARENTHESIS = 0x0028;
        var RIGHT_PARENTHESIS = 0x0029;
        var LOW_LINE = 0x005f;
        var HYPHEN_MINUS = 0x002d;
        var EXCLAMATION_MARK = 0x0021;
        var LESS_THAN_SIGN = 0x003c;
        var GREATER_THAN_SIGN = 0x003e;
        var COMMERCIAL_AT = 0x0040;
        var LEFT_SQUARE_BRACKET = 0x005b;
        var RIGHT_SQUARE_BRACKET = 0x005d;
        var CIRCUMFLEX_ACCENT = 0x003d;
        var LEFT_CURLY_BRACKET = 0x007b;
        var QUESTION_MARK = 0x003f;
        var RIGHT_CURLY_BRACKET = 0x007d;
        var VERTICAL_LINE = 0x007c;
        var TILDE = 0x007e;
        var CONTROL = 0x0080;
        var REPLACEMENT_CHARACTER = 0xfffd;
        var ASTERISK = 0x002a;
        var PLUS_SIGN = 0x002b;
        var COMMA = 0x002c;
        var COLON = 0x003a;
        var SEMICOLON = 0x003b;
        var FULL_STOP = 0x002e;
        var NULL = 0x0000;
        var BACKSPACE = 0x0008;
        var LINE_TABULATION = 0x000b;
        var SHIFT_OUT = 0x000e;
        var INFORMATION_SEPARATOR_ONE = 0x001f;
        var DELETE = 0x007f;
        var EOF = -1;
        var ZERO = 0x0030;
        var a = 0x0061;
        var e = 0x0065;
        var f = 0x0066;
        var u = 0x0075;
        var z = 0x007a;
        var A = 0x0041;
        var E = 0x0045;
        var F = 0x0046;
        var U = 0x0055;
        var Z = 0x005a;
        var isDigit = function (codePoint) {
            return codePoint >= ZERO && codePoint <= 0x0039;
        };
        var isSurrogateCodePoint = function (codePoint) {
            return codePoint >= 0xd800 && codePoint <= 0xdfff;
        };
        var isHex = function (codePoint) {
            return isDigit(codePoint) || (codePoint >= A && codePoint <= F) || (codePoint >= a && codePoint <= f);
        };
        var isLowerCaseLetter = function (codePoint) {
            return codePoint >= a && codePoint <= z;
        };
        var isUpperCaseLetter = function (codePoint) {
            return codePoint >= A && codePoint <= Z;
        };
        var isLetter = function (codePoint) {
            return isLowerCaseLetter(codePoint) || isUpperCaseLetter(codePoint);
        };
        var isNonASCIICodePoint = function (codePoint) {
            return codePoint >= CONTROL;
        };
        var isWhiteSpace = function (codePoint) {
            return codePoint === LINE_FEED || codePoint === CHARACTER_TABULATION || codePoint === SPACE;
        };
        var isNameStartCodePoint = function (codePoint) {
            return isLetter(codePoint) || isNonASCIICodePoint(codePoint) || codePoint === LOW_LINE;
        };
        var isNameCodePoint = function (codePoint) {
            return isNameStartCodePoint(codePoint) || isDigit(codePoint) || codePoint === HYPHEN_MINUS;
        };
        var isNonPrintableCodePoint = function (codePoint) {
            return ((codePoint >= NULL && codePoint <= BACKSPACE) ||
                codePoint === LINE_TABULATION ||
                (codePoint >= SHIFT_OUT && codePoint <= INFORMATION_SEPARATOR_ONE) ||
                codePoint === DELETE);
        };
        var isValidEscape = function (c1, c2) {
            if (c1 !== REVERSE_SOLIDUS) {
                return false;
            }
            return c2 !== LINE_FEED;
        };
        var isIdentifierStart = function (c1, c2, c3) {
            if (c1 === HYPHEN_MINUS) {
                return isNameStartCodePoint(c2) || isValidEscape(c2, c3);
            } else if (isNameStartCodePoint(c1)) {
                return true;
            } else if (c1 === REVERSE_SOLIDUS && isValidEscape(c1, c2)) {
                return true;
            }
            return false;
        };
        var isNumberStart = function (c1, c2, c3) {
            if (c1 === PLUS_SIGN || c1 === HYPHEN_MINUS) {
                if (isDigit(c2)) {
                    return true;
                }
                return c2 === FULL_STOP && isDigit(c3);
            }
            if (c1 === FULL_STOP) {
                return isDigit(c2);
            }
            return isDigit(c1);
        };
        var stringToNumber = function (codePoints) {
            var c = 0;
            var sign = 1;
            if (codePoints[c] === PLUS_SIGN || codePoints[c] === HYPHEN_MINUS) {
                if (codePoints[c] === HYPHEN_MINUS) {
                    sign = -1;
                }
                c++;
            }
            var integers = [];
            while (isDigit(codePoints[c])) {
                integers.push(codePoints[c++]);
            }
            var int = integers.length ? parseInt(fromCodePoint$1.apply(void 0, integers), 10) : 0;
            if (codePoints[c] === FULL_STOP) {
                c++;
            }
            var fraction = [];
            while (isDigit(codePoints[c])) {
                fraction.push(codePoints[c++]);
            }
            var fracd = fraction.length;
            var frac = fracd ? parseInt(fromCodePoint$1.apply(void 0, fraction), 10) : 0;
            if (codePoints[c] === E || codePoints[c] === e) {
                c++;
            }
            var expsign = 1;
            if (codePoints[c] === PLUS_SIGN || codePoints[c] === HYPHEN_MINUS) {
                if (codePoints[c] === HYPHEN_MINUS) {
                    expsign = -1;
                }
                c++;
            }
            var exponent = [];
            while (isDigit(codePoints[c])) {
                exponent.push(codePoints[c++]);
            }
            var exp = exponent.length ? parseInt(fromCodePoint$1.apply(void 0, exponent), 10) : 0;
            return sign * (int + frac * Math.pow(10, -fracd)) * Math.pow(10, expsign * exp);
        };
        var LEFT_PARENTHESIS_TOKEN = {
            type: 2 /* LEFT_PARENTHESIS_TOKEN */
        };
        var RIGHT_PARENTHESIS_TOKEN = {
            type: 3 /* RIGHT_PARENTHESIS_TOKEN */
        };
        var COMMA_TOKEN = {
            type: 4 /* COMMA_TOKEN */
        };
        var SUFFIX_MATCH_TOKEN = {
            type: 13 /* SUFFIX_MATCH_TOKEN */
        };
        var PREFIX_MATCH_TOKEN = {
            type: 8 /* PREFIX_MATCH_TOKEN */
        };
        var COLUMN_TOKEN = {
            type: 21 /* COLUMN_TOKEN */
        };
        var DASH_MATCH_TOKEN = {
            type: 9 /* DASH_MATCH_TOKEN */
        };
        var INCLUDE_MATCH_TOKEN = {
            type: 10 /* INCLUDE_MATCH_TOKEN */
        };
        var LEFT_CURLY_BRACKET_TOKEN = {
            type: 11 /* LEFT_CURLY_BRACKET_TOKEN */
        };
        var RIGHT_CURLY_BRACKET_TOKEN = {
            type: 12 /* RIGHT_CURLY_BRACKET_TOKEN */
        };
        var SUBSTRING_MATCH_TOKEN = {
            type: 14 /* SUBSTRING_MATCH_TOKEN */
        };
        var BAD_URL_TOKEN = {
            type: 23 /* BAD_URL_TOKEN */
        };
        var BAD_STRING_TOKEN = {
            type: 1 /* BAD_STRING_TOKEN */
        };
        var CDO_TOKEN = {
            type: 25 /* CDO_TOKEN */
        };
        var CDC_TOKEN = {
            type: 24 /* CDC_TOKEN */
        };
        var COLON_TOKEN = {
            type: 26 /* COLON_TOKEN */
        };
        var SEMICOLON_TOKEN = {
            type: 27 /* SEMICOLON_TOKEN */
        };
        var LEFT_SQUARE_BRACKET_TOKEN = {
            type: 28 /* LEFT_SQUARE_BRACKET_TOKEN */
        };
        var RIGHT_SQUARE_BRACKET_TOKEN = {
            type: 29 /* RIGHT_SQUARE_BRACKET_TOKEN */
        };
        var WHITESPACE_TOKEN = {
            type: 31 /* WHITESPACE_TOKEN */
        };
        var EOF_TOKEN = {
            type: 32 /* EOF_TOKEN */
        };
        var Tokenizer = /** @class */ (function () {
            function Tokenizer() {
                this._value = [];
            }
            Tokenizer.prototype.write = function (chunk) {
                this._value = this._value.concat(toCodePoints$1(chunk));
            };
            Tokenizer.prototype.read = function () {
                var tokens = [];
                var token = this.consumeToken();
                while (token !== EOF_TOKEN) {
                    tokens.push(token);
                    token = this.consumeToken();
                }
                return tokens;
            };
            Tokenizer.prototype.consumeToken = function () {
                var codePoint = this.consumeCodePoint();
                switch (codePoint) {
                    case QUOTATION_MARK:
                        return this.consumeStringToken(QUOTATION_MARK);
                    case NUMBER_SIGN:
                        var c1 = this.peekCodePoint(0);
                        var c2 = this.peekCodePoint(1);
                        var c3 = this.peekCodePoint(2);
                        if (isNameCodePoint(c1) || isValidEscape(c2, c3)) {
                            var flags = isIdentifierStart(c1, c2, c3) ? FLAG_ID : FLAG_UNRESTRICTED;
                            var value = this.consumeName();
                            return {
                                type: 5 /* HASH_TOKEN */ ,
                                value: value,
                                flags: flags
                            };
                        }
                        break;
                    case DOLLAR_SIGN:
                        if (this.peekCodePoint(0) === EQUALS_SIGN) {
                            this.consumeCodePoint();
                            return SUFFIX_MATCH_TOKEN;
                        }
                        break;
                    case APOSTROPHE:
                        return this.consumeStringToken(APOSTROPHE);
                    case LEFT_PARENTHESIS:
                        return LEFT_PARENTHESIS_TOKEN;
                    case RIGHT_PARENTHESIS:
                        return RIGHT_PARENTHESIS_TOKEN;
                    case ASTERISK:
                        if (this.peekCodePoint(0) === EQUALS_SIGN) {
                            this.consumeCodePoint();
                            return SUBSTRING_MATCH_TOKEN;
                        }
                        break;
                    case PLUS_SIGN:
                        if (isNumberStart(codePoint, this.peekCodePoint(0), this.peekCodePoint(1))) {
                            this.reconsumeCodePoint(codePoint);
                            return this.consumeNumericToken();
                        }
                        break;
                    case COMMA:
                        return COMMA_TOKEN;
                    case HYPHEN_MINUS:
                        var e1 = codePoint;
                        var e2 = this.peekCodePoint(0);
                        var e3 = this.peekCodePoint(1);
                        if (isNumberStart(e1, e2, e3)) {
                            this.reconsumeCodePoint(codePoint);
                            return this.consumeNumericToken();
                        }
                        if (isIdentifierStart(e1, e2, e3)) {
                            this.reconsumeCodePoint(codePoint);
                            return this.consumeIdentLikeToken();
                        }
                        if (e2 === HYPHEN_MINUS && e3 === GREATER_THAN_SIGN) {
                            this.consumeCodePoint();
                            this.consumeCodePoint();
                            return CDC_TOKEN;
                        }
                        break;
                    case FULL_STOP:
                        if (isNumberStart(codePoint, this.peekCodePoint(0), this.peekCodePoint(1))) {
                            this.reconsumeCodePoint(codePoint);
                            return this.consumeNumericToken();
                        }
                        break;
                    case SOLIDUS:
                        if (this.peekCodePoint(0) === ASTERISK) {
                            this.consumeCodePoint();
                            while (true) {
                                var c = this.consumeCodePoint();
                                if (c === ASTERISK) {
                                    c = this.consumeCodePoint();
                                    if (c === SOLIDUS) {
                                        return this.consumeToken();
                                    }
                                }
                                if (c === EOF) {
                                    return this.consumeToken();
                                }
                            }
                        }
                        break;
                    case COLON:
                        return COLON_TOKEN;
                    case SEMICOLON:
                        return SEMICOLON_TOKEN;
                    case LESS_THAN_SIGN:
                        if (this.peekCodePoint(0) === EXCLAMATION_MARK &&
                            this.peekCodePoint(1) === HYPHEN_MINUS &&
                            this.peekCodePoint(2) === HYPHEN_MINUS) {
                            this.consumeCodePoint();
                            this.consumeCodePoint();
                            return CDO_TOKEN;
                        }
                        break;
                    case COMMERCIAL_AT:
                        var a1 = this.peekCodePoint(0);
                        var a2 = this.peekCodePoint(1);
                        var a3 = this.peekCodePoint(2);
                        if (isIdentifierStart(a1, a2, a3)) {
                            var value = this.consumeName();
                            return {
                                type: 7 /* AT_KEYWORD_TOKEN */ ,
                                value: value
                            };
                        }
                        break;
                    case LEFT_SQUARE_BRACKET:
                        return LEFT_SQUARE_BRACKET_TOKEN;
                    case REVERSE_SOLIDUS:
                        if (isValidEscape(codePoint, this.peekCodePoint(0))) {
                            this.reconsumeCodePoint(codePoint);
                            return this.consumeIdentLikeToken();
                        }
                        break;
                    case RIGHT_SQUARE_BRACKET:
                        return RIGHT_SQUARE_BRACKET_TOKEN;
                    case CIRCUMFLEX_ACCENT:
                        if (this.peekCodePoint(0) === EQUALS_SIGN) {
                            this.consumeCodePoint();
                            return PREFIX_MATCH_TOKEN;
                        }
                        break;
                    case LEFT_CURLY_BRACKET:
                        return LEFT_CURLY_BRACKET_TOKEN;
                    case RIGHT_CURLY_BRACKET:
                        return RIGHT_CURLY_BRACKET_TOKEN;
                    case u:
                    case U:
                        var u1 = this.peekCodePoint(0);
                        var u2 = this.peekCodePoint(1);
                        if (u1 === PLUS_SIGN && (isHex(u2) || u2 === QUESTION_MARK)) {
                            this.consumeCodePoint();
                            this.consumeUnicodeRangeToken();
                        }
                        this.reconsumeCodePoint(codePoint);
                        return this.consumeIdentLikeToken();
                    case VERTICAL_LINE:
                        if (this.peekCodePoint(0) === EQUALS_SIGN) {
                            this.consumeCodePoint();
                            return DASH_MATCH_TOKEN;
                        }
                        if (this.peekCodePoint(0) === VERTICAL_LINE) {
                            this.consumeCodePoint();
                            return COLUMN_TOKEN;
                        }
                        break;
                    case TILDE:
                        if (this.peekCodePoint(0) === EQUALS_SIGN) {
                            this.consumeCodePoint();
                            return INCLUDE_MATCH_TOKEN;
                        }
                        break;
                    case EOF:
                        return EOF_TOKEN;
                }
                if (isWhiteSpace(codePoint)) {
                    this.consumeWhiteSpace();
                    return WHITESPACE_TOKEN;
                }
                if (isDigit(codePoint)) {
                    this.reconsumeCodePoint(codePoint);
                    return this.consumeNumericToken();
                }
                if (isNameStartCodePoint(codePoint)) {
                    this.reconsumeCodePoint(codePoint);
                    return this.consumeIdentLikeToken();
                }
                return {
                    type: 6 /* DELIM_TOKEN */ ,
                    value: fromCodePoint$1(codePoint)
                };
            };
            Tokenizer.prototype.consumeCodePoint = function () {
                var value = this._value.shift();
                return typeof value === 'undefined' ? -1 : value;
            };
            Tokenizer.prototype.reconsumeCodePoint = function (codePoint) {
                this._value.unshift(codePoint);
            };
            Tokenizer.prototype.peekCodePoint = function (delta) {
                if (delta >= this._value.length) {
                    return -1;
                }
                return this._value[delta];
            };
            Tokenizer.prototype.consumeUnicodeRangeToken = function () {
                var digits = [];
                var codePoint = this.consumeCodePoint();
                while (isHex(codePoint) && digits.length < 6) {
                    digits.push(codePoint);
                    codePoint = this.consumeCodePoint();
                }
                var questionMarks = false;
                while (codePoint === QUESTION_MARK && digits.length < 6) {
                    digits.push(codePoint);
                    codePoint = this.consumeCodePoint();
                    questionMarks = true;
                }
                if (questionMarks) {
                    var start_1 = parseInt(fromCodePoint$1.apply(void 0, digits.map(function (digit) {
                        return (digit === QUESTION_MARK ? ZERO : digit);
                    })), 16);
                    var end = parseInt(fromCodePoint$1.apply(void 0, digits.map(function (digit) {
                        return (digit === QUESTION_MARK ? F : digit);
                    })), 16);
                    return {
                        type: 30 /* UNICODE_RANGE_TOKEN */ ,
                        start: start_1,
                        end: end
                    };
                }
                var start = parseInt(fromCodePoint$1.apply(void 0, digits), 16);
                if (this.peekCodePoint(0) === HYPHEN_MINUS && isHex(this.peekCodePoint(1))) {
                    this.consumeCodePoint();
                    codePoint = this.consumeCodePoint();
                    var endDigits = [];
                    while (isHex(codePoint) && endDigits.length < 6) {
                        endDigits.push(codePoint);
                        codePoint = this.consumeCodePoint();
                    }
                    var end = parseInt(fromCodePoint$1.apply(void 0, endDigits), 16);
                    return {
                        type: 30 /* UNICODE_RANGE_TOKEN */ ,
                        start: start,
                        end: end
                    };
                } else {
                    return {
                        type: 30 /* UNICODE_RANGE_TOKEN */ ,
                        start: start,
                        end: start
                    };
                }
            };
            Tokenizer.prototype.consumeIdentLikeToken = function () {
                var value = this.consumeName();
                if (value.toLowerCase() === 'url' && this.peekCodePoint(0) === LEFT_PARENTHESIS) {
                    this.consumeCodePoint();
                    return this.consumeUrlToken();
                } else if (this.peekCodePoint(0) === LEFT_PARENTHESIS) {
                    this.consumeCodePoint();
                    return {
                        type: 19 /* FUNCTION_TOKEN */ ,
                        value: value
                    };
                }
                return {
                    type: 20 /* IDENT_TOKEN */ ,
                    value: value
                };
            };
            Tokenizer.prototype.consumeUrlToken = function () {
                var value = [];
                this.consumeWhiteSpace();
                if (this.peekCodePoint(0) === EOF) {
                    return {
                        type: 22 /* URL_TOKEN */ ,
                        value: ''
                    };
                }
                var next = this.peekCodePoint(0);
                if (next === APOSTROPHE || next === QUOTATION_MARK) {
                    var stringToken = this.consumeStringToken(this.consumeCodePoint());
                    if (stringToken.type === 0 /* STRING_TOKEN */ ) {
                        this.consumeWhiteSpace();
                        if (this.peekCodePoint(0) === EOF || this.peekCodePoint(0) === RIGHT_PARENTHESIS) {
                            this.consumeCodePoint();
                            return {
                                type: 22 /* URL_TOKEN */ ,
                                value: stringToken.value
                            };
                        }
                    }
                    this.consumeBadUrlRemnants();
                    return BAD_URL_TOKEN;
                }
                while (true) {
                    var codePoint = this.consumeCodePoint();
                    if (codePoint === EOF || codePoint === RIGHT_PARENTHESIS) {
                        return {
                            type: 22 /* URL_TOKEN */ ,
                            value: fromCodePoint$1.apply(void 0, value)
                        };
                    } else if (isWhiteSpace(codePoint)) {
                        this.consumeWhiteSpace();
                        if (this.peekCodePoint(0) === EOF || this.peekCodePoint(0) === RIGHT_PARENTHESIS) {
                            this.consumeCodePoint();
                            return {
                                type: 22 /* URL_TOKEN */ ,
                                value: fromCodePoint$1.apply(void 0, value)
                            };
                        }
                        this.consumeBadUrlRemnants();
                        return BAD_URL_TOKEN;
                    } else if (codePoint === QUOTATION_MARK ||
                        codePoint === APOSTROPHE ||
                        codePoint === LEFT_PARENTHESIS ||
                        isNonPrintableCodePoint(codePoint)) {
                        this.consumeBadUrlRemnants();
                        return BAD_URL_TOKEN;
                    } else if (codePoint === REVERSE_SOLIDUS) {
                        if (isValidEscape(codePoint, this.peekCodePoint(0))) {
                            value.push(this.consumeEscapedCodePoint());
                        } else {
                            this.consumeBadUrlRemnants();
                            return BAD_URL_TOKEN;
                        }
                    } else {
                        value.push(codePoint);
                    }
                }
            };
            Tokenizer.prototype.consumeWhiteSpace = function () {
                while (isWhiteSpace(this.peekCodePoint(0))) {
                    this.consumeCodePoint();
                }
            };
            Tokenizer.prototype.consumeBadUrlRemnants = function () {
                while (true) {
                    var codePoint = this.consumeCodePoint();
                    if (codePoint === RIGHT_PARENTHESIS || codePoint === EOF) {
                        return;
                    }
                    if (isValidEscape(codePoint, this.peekCodePoint(0))) {
                        this.consumeEscapedCodePoint();
                    }
                }
            };
            Tokenizer.prototype.consumeStringSlice = function (count) {
                var SLICE_STACK_SIZE = 50000;
                var value = '';
                while (count > 0) {
                    var amount = Math.min(SLICE_STACK_SIZE, count);
                    value += fromCodePoint$1.apply(void 0, this._value.splice(0, amount));
                    count -= amount;
                }
                this._value.shift();
                return value;
            };
            Tokenizer.prototype.consumeStringToken = function (endingCodePoint) {
                var value = '';
                var i = 0;
                do {
                    var codePoint = this._value[i];
                    if (codePoint === EOF || codePoint === undefined || codePoint === endingCodePoint) {
                        value += this.consumeStringSlice(i);
                        return {
                            type: 0 /* STRING_TOKEN */ ,
                            value: value
                        };
                    }
                    if (codePoint === LINE_FEED) {
                        this._value.splice(0, i);
                        return BAD_STRING_TOKEN;
                    }
                    if (codePoint === REVERSE_SOLIDUS) {
                        var next = this._value[i + 1];
                        if (next !== EOF && next !== undefined) {
                            if (next === LINE_FEED) {
                                value += this.consumeStringSlice(i);
                                i = -1;
                                this._value.shift();
                            } else if (isValidEscape(codePoint, next)) {
                                value += this.consumeStringSlice(i);
                                value += fromCodePoint$1(this.consumeEscapedCodePoint());
                                i = -1;
                            }
                        }
                    }
                    i++;
                } while (true);
            };
            Tokenizer.prototype.consumeNumber = function () {
                var repr = [];
                var type = FLAG_INTEGER;
                var c1 = this.peekCodePoint(0);
                if (c1 === PLUS_SIGN || c1 === HYPHEN_MINUS) {
                    repr.push(this.consumeCodePoint());
                }
                while (isDigit(this.peekCodePoint(0))) {
                    repr.push(this.consumeCodePoint());
                }
                c1 = this.peekCodePoint(0);
                var c2 = this.peekCodePoint(1);
                if (c1 === FULL_STOP && isDigit(c2)) {
                    repr.push(this.consumeCodePoint(), this.consumeCodePoint());
                    type = FLAG_NUMBER;
                    while (isDigit(this.peekCodePoint(0))) {
                        repr.push(this.consumeCodePoint());
                    }
                }
                c1 = this.peekCodePoint(0);
                c2 = this.peekCodePoint(1);
                var c3 = this.peekCodePoint(2);
                if ((c1 === E || c1 === e) && (((c2 === PLUS_SIGN || c2 === HYPHEN_MINUS) && isDigit(c3)) || isDigit(c2))) {
                    repr.push(this.consumeCodePoint(), this.consumeCodePoint());
                    type = FLAG_NUMBER;
                    while (isDigit(this.peekCodePoint(0))) {
                        repr.push(this.consumeCodePoint());
                    }
                }
                return [stringToNumber(repr), type];
            };
            Tokenizer.prototype.consumeNumericToken = function () {
                var _a = this.consumeNumber(),
                    number = _a[0],
                    flags = _a[1];
                var c1 = this.peekCodePoint(0);
                var c2 = this.peekCodePoint(1);
                var c3 = this.peekCodePoint(2);
                if (isIdentifierStart(c1, c2, c3)) {
                    var unit = this.consumeName();
                    return {
                        type: 15 /* DIMENSION_TOKEN */ ,
                        number: number,
                        flags: flags,
                        unit: unit
                    };
                }
                if (c1 === PERCENTAGE_SIGN) {
                    this.consumeCodePoint();
                    return {
                        type: 16 /* PERCENTAGE_TOKEN */ ,
                        number: number,
                        flags: flags
                    };
                }
                return {
                    type: 17 /* NUMBER_TOKEN */ ,
                    number: number,
                    flags: flags
                };
            };
            Tokenizer.prototype.consumeEscapedCodePoint = function () {
                var codePoint = this.consumeCodePoint();
                if (isHex(codePoint)) {
                    var hex = fromCodePoint$1(codePoint);
                    while (isHex(this.peekCodePoint(0)) && hex.length < 6) {
                        hex += fromCodePoint$1(this.consumeCodePoint());
                    }
                    if (isWhiteSpace(this.peekCodePoint(0))) {
                        this.consumeCodePoint();
                    }
                    var hexCodePoint = parseInt(hex, 16);
                    if (hexCodePoint === 0 || isSurrogateCodePoint(hexCodePoint) || hexCodePoint > 0x10ffff) {
                        return REPLACEMENT_CHARACTER;
                    }
                    return hexCodePoint;
                }
                if (codePoint === EOF) {
                    return REPLACEMENT_CHARACTER;
                }
                return codePoint;
            };
            Tokenizer.prototype.consumeName = function () {
                var result = '';
                while (true) {
                    var codePoint = this.consumeCodePoint();
                    if (isNameCodePoint(codePoint)) {
                        result += fromCodePoint$1(codePoint);
                    } else if (isValidEscape(codePoint, this.peekCodePoint(0))) {
                        result += fromCodePoint$1(this.consumeEscapedCodePoint());
                    } else {
                        this.reconsumeCodePoint(codePoint);
                        return result;
                    }
                }
            };
            return Tokenizer;
        }());

        var Parser = /** @class */ (function () {
            function Parser(tokens) {
                this._tokens = tokens;
            }
            Parser.create = function (value) {
                var tokenizer = new Tokenizer();
                tokenizer.write(value);
                return new Parser(tokenizer.read());
            };
            Parser.parseValue = function (value) {
                return Parser.create(value).parseComponentValue();
            };
            Parser.parseValues = function (value) {
                return Parser.create(value).parseComponentValues();
            };
            Parser.prototype.parseComponentValue = function () {
                var token = this.consumeToken();
                while (token.type === 31 /* WHITESPACE_TOKEN */ ) {
                    token = this.consumeToken();
                }
                if (token.type === 32 /* EOF_TOKEN */ ) {
                    throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
                }
                this.reconsumeToken(token);
                var value = this.consumeComponentValue();
                do {
                    token = this.consumeToken();
                } while (token.type === 31 /* WHITESPACE_TOKEN */ );
                if (token.type === 32 /* EOF_TOKEN */ ) {
                    return value;
                }
                throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
            };
            Parser.prototype.parseComponentValues = function () {
                var values = [];
                while (true) {
                    var value = this.consumeComponentValue();
                    if (value.type === 32 /* EOF_TOKEN */ ) {
                        return values;
                    }
                    values.push(value);
                    values.push();
                }
            };
            Parser.prototype.consumeComponentValue = function () {
                var token = this.consumeToken();
                switch (token.type) {
                    case 11 /* LEFT_CURLY_BRACKET_TOKEN */ :
                    case 28 /* LEFT_SQUARE_BRACKET_TOKEN */ :
                    case 2 /* LEFT_PARENTHESIS_TOKEN */ :
                        return this.consumeSimpleBlock(token.type);
                    case 19 /* FUNCTION_TOKEN */ :
                        return this.consumeFunction(token);
                }
                return token;
            };
            Parser.prototype.consumeSimpleBlock = function (type) {
                var block = {
                    type: type,
                    values: []
                };
                var token = this.consumeToken();
                while (true) {
                    if (token.type === 32 /* EOF_TOKEN */ || isEndingTokenFor(token, type)) {
                        return block;
                    }
                    this.reconsumeToken(token);
                    block.values.push(this.consumeComponentValue());
                    token = this.consumeToken();
                }
            };
            Parser.prototype.consumeFunction = function (functionToken) {
                var cssFunction = {
                    name: functionToken.value,
                    values: [],
                    type: 18 /* FUNCTION */
                };
                while (true) {
                    var token = this.consumeToken();
                    if (token.type === 32 /* EOF_TOKEN */ || token.type === 3 /* RIGHT_PARENTHESIS_TOKEN */ ) {
                        return cssFunction;
                    }
                    this.reconsumeToken(token);
                    cssFunction.values.push(this.consumeComponentValue());
                }
            };
            Parser.prototype.consumeToken = function () {
                var token = this._tokens.shift();
                return typeof token === 'undefined' ? EOF_TOKEN : token;
            };
            Parser.prototype.reconsumeToken = function (token) {
                this._tokens.unshift(token);
            };
            return Parser;
        }());
        var isDimensionToken = function (token) {
            return token.type === 15 /* DIMENSION_TOKEN */ ;
        };
        var isNumberToken = function (token) {
            return token.type === 17 /* NUMBER_TOKEN */ ;
        };
        var isIdentToken = function (token) {
            return token.type === 20 /* IDENT_TOKEN */ ;
        };
        var isStringToken = function (token) {
            return token.type === 0 /* STRING_TOKEN */ ;
        };
        var isIdentWithValue = function (token, value) {
            return isIdentToken(token) && token.value === value;
        };
        var nonWhiteSpace = function (token) {
            return token.type !== 31 /* WHITESPACE_TOKEN */ ;
        };
        var nonFunctionArgSeparator = function (token) {
            return token.type !== 31 /* WHITESPACE_TOKEN */ && token.type !== 4 /* COMMA_TOKEN */ ;
        };
        var parseFunctionArgs = function (tokens) {
            var args = [];
            var arg = [];
            tokens.forEach(function (token) {
                if (token.type === 4 /* COMMA_TOKEN */ ) {
                    if (arg.length === 0) {
                        throw new Error("Error parsing function args, zero tokens for arg");
                    }
                    args.push(arg);
                    arg = [];
                    return;
                }
                if (token.type !== 31 /* WHITESPACE_TOKEN */ ) {
                    arg.push(token);
                }
            });
            if (arg.length) {
                args.push(arg);
            }
            return args;
        };
        var isEndingTokenFor = function (token, type) {
            if (type === 11 /* LEFT_CURLY_BRACKET_TOKEN */ && token.type === 12 /* RIGHT_CURLY_BRACKET_TOKEN */ ) {
                return true;
            }
            if (type === 28 /* LEFT_SQUARE_BRACKET_TOKEN */ && token.type === 29 /* RIGHT_SQUARE_BRACKET_TOKEN */ ) {
                return true;
            }
            return type === 2 /* LEFT_PARENTHESIS_TOKEN */ && token.type === 3 /* RIGHT_PARENTHESIS_TOKEN */ ;
        };

        var isLength = function (token) {
            return token.type === 17 /* NUMBER_TOKEN */ || token.type === 15 /* DIMENSION_TOKEN */ ;
        };

        var isLengthPercentage = function (token) {
            return token.type === 16 /* PERCENTAGE_TOKEN */ || isLength(token);
        };
        var parseLengthPercentageTuple = function (tokens) {
            return tokens.length > 1 ? [tokens[0], tokens[1]] : [tokens[0]];
        };
        var ZERO_LENGTH = {
            type: 17 /* NUMBER_TOKEN */ ,
            number: 0,
            flags: FLAG_INTEGER
        };
        var FIFTY_PERCENT = {
            type: 16 /* PERCENTAGE_TOKEN */ ,
            number: 50,
            flags: FLAG_INTEGER
        };
        var HUNDRED_PERCENT = {
            type: 16 /* PERCENTAGE_TOKEN */ ,
            number: 100,
            flags: FLAG_INTEGER
        };
        var getAbsoluteValueForTuple = function (tuple, width, height) {
            var x = tuple[0],
                y = tuple[1];
            return [getAbsoluteValue(x, width), getAbsoluteValue(typeof y !== 'undefined' ? y : x, height)];
        };
        var getAbsoluteValue = function (token, parent) {
            if (token.type === 16 /* PERCENTAGE_TOKEN */ ) {
                return (token.number / 100) * parent;
            }
            if (isDimensionToken(token)) {
                switch (token.unit) {
                    case 'rem':
                    case 'em':
                        return 16 * token.number; // TODO use correct font-size
                    case 'px':
                    default:
                        return token.number;
                }
            }
            return token.number;
        };

        var DEG = 'deg';
        var GRAD = 'grad';
        var RAD = 'rad';
        var TURN = 'turn';
        var angle = {
            name: 'angle',
            parse: function (_context, value) {
                if (value.type === 15 /* DIMENSION_TOKEN */ ) {
                    switch (value.unit) {
                        case DEG:
                            return (Math.PI * value.number) / 180;
                        case GRAD:
                            return (Math.PI / 200) * value.number;
                        case RAD:
                            return value.number;
                        case TURN:
                            return Math.PI * 2 * value.number;
                    }
                }
                throw new Error("Unsupported angle type");
            }
        };
        var isAngle = function (value) {
            if (value.type === 15 /* DIMENSION_TOKEN */ ) {
                if (value.unit === DEG || value.unit === GRAD || value.unit === RAD || value.unit === TURN) {
                    return true;
                }
            }
            return false;
        };
        var parseNamedSide = function (tokens) {
            var sideOrCorner = tokens
                .filter(isIdentToken)
                .map(function (ident) {
                    return ident.value;
                })
                .join(' ');
            switch (sideOrCorner) {
                case 'to bottom right':
                case 'to right bottom':
                case 'left top':
                case 'top left':
                    return [ZERO_LENGTH, ZERO_LENGTH];
                case 'to top':
                case 'bottom':
                    return deg(0);
                case 'to bottom left':
                case 'to left bottom':
                case 'right top':
                case 'top right':
                    return [ZERO_LENGTH, HUNDRED_PERCENT];
                case 'to right':
                case 'left':
                    return deg(90);
                case 'to top left':
                case 'to left top':
                case 'right bottom':
                case 'bottom right':
                    return [HUNDRED_PERCENT, HUNDRED_PERCENT];
                case 'to bottom':
                case 'top':
                    return deg(180);
                case 'to top right':
                case 'to right top':
                case 'left bottom':
                case 'bottom left':
                    return [HUNDRED_PERCENT, ZERO_LENGTH];
                case 'to left':
                case 'right':
                    return deg(270);
            }
            return 0;
        };
        var deg = function (deg) {
            return (Math.PI * deg) / 180;
        };

        var color$1 = {
            name: 'color',
            parse: function (context, value) {
                if (value.type === 18 /* FUNCTION */ ) {
                    var colorFunction = SUPPORTED_COLOR_FUNCTIONS[value.name];
                    if (typeof colorFunction === 'undefined') {
                        throw new Error("Attempting to parse an unsupported color function \"" + value.name + "\"");
                    }
                    return colorFunction(context, value.values);
                }
                if (value.type === 5 /* HASH_TOKEN */ ) {
                    if (value.value.length === 3) {
                        var r = value.value.substring(0, 1);
                        var g = value.value.substring(1, 2);
                        var b = value.value.substring(2, 3);
                        return pack(parseInt(r + r, 16), parseInt(g + g, 16), parseInt(b + b, 16), 1);
                    }
                    if (value.value.length === 4) {
                        var r = value.value.substring(0, 1);
                        var g = value.value.substring(1, 2);
                        var b = value.value.substring(2, 3);
                        var a = value.value.substring(3, 4);
                        return pack(parseInt(r + r, 16), parseInt(g + g, 16), parseInt(b + b, 16), parseInt(a + a, 16) / 255);
                    }
                    if (value.value.length === 6) {
                        var r = value.value.substring(0, 2);
                        var g = value.value.substring(2, 4);
                        var b = value.value.substring(4, 6);
                        return pack(parseInt(r, 16), parseInt(g, 16), parseInt(b, 16), 1);
                    }
                    if (value.value.length === 8) {
                        var r = value.value.substring(0, 2);
                        var g = value.value.substring(2, 4);
                        var b = value.value.substring(4, 6);
                        var a = value.value.substring(6, 8);
                        return pack(parseInt(r, 16), parseInt(g, 16), parseInt(b, 16), parseInt(a, 16) / 255);
                    }
                }
                if (value.type === 20 /* IDENT_TOKEN */ ) {
                    var namedColor = COLORS[value.value.toUpperCase()];
                    if (typeof namedColor !== 'undefined') {
                        return namedColor;
                    }
                }
                return COLORS.TRANSPARENT;
            }
        };
        var isTransparent = function (color) {
            return (0xff & color) === 0;
        };
        var asString = function (color) {
            var alpha = 0xff & color;
            var blue = 0xff & (color >> 8);
            var green = 0xff & (color >> 16);
            var red = 0xff & (color >> 24);
            return alpha < 255 ? "rgba(" + red + "," + green + "," + blue + "," + alpha / 255 + ")" : "rgb(" + red + "," + green + "," + blue + ")";
        };
        var pack = function (r, g, b, a) {
            return ((r << 24) | (g << 16) | (b << 8) | (Math.round(a * 255) << 0)) >>> 0;
        };
        var getTokenColorValue = function (token, i) {
            if (token.type === 17 /* NUMBER_TOKEN */ ) {
                return token.number;
            }
            if (token.type === 16 /* PERCENTAGE_TOKEN */ ) {
                var max = i === 3 ? 1 : 255;
                return i === 3 ? (token.number / 100) * max : Math.round((token.number / 100) * max);
            }
            return 0;
        };
        var rgb = function (_context, args) {
            var tokens = args.filter(nonFunctionArgSeparator);
            if (tokens.length === 3) {
                var _a = tokens.map(getTokenColorValue),
                    r = _a[0],
                    g = _a[1],
                    b = _a[2];
                return pack(r, g, b, 1);
            }
            if (tokens.length === 4) {
                var _b = tokens.map(getTokenColorValue),
                    r = _b[0],
                    g = _b[1],
                    b = _b[2],
                    a = _b[3];
                return pack(r, g, b, a);
            }
            return 0;
        };

        function hue2rgb(t1, t2, hue) {
            if (hue < 0) {
                hue += 1;
            }
            if (hue >= 1) {
                hue -= 1;
            }
            if (hue < 1 / 6) {
                return (t2 - t1) * hue * 6 + t1;
            } else if (hue < 1 / 2) {
                return t2;
            } else if (hue < 2 / 3) {
                return (t2 - t1) * 6 * (2 / 3 - hue) + t1;
            } else {
                return t1;
            }
        }
        var hsl = function (context, args) {
            var tokens = args.filter(nonFunctionArgSeparator);
            var hue = tokens[0],
                saturation = tokens[1],
                lightness = tokens[2],
                alpha = tokens[3];
            var h = (hue.type === 17 /* NUMBER_TOKEN */ ? deg(hue.number) : angle.parse(context, hue)) / (Math.PI * 2);
            var s = isLengthPercentage(saturation) ? saturation.number / 100 : 0;
            var l = isLengthPercentage(lightness) ? lightness.number / 100 : 0;
            var a = typeof alpha !== 'undefined' && isLengthPercentage(alpha) ? getAbsoluteValue(alpha, 1) : 1;
            if (s === 0) {
                return pack(l * 255, l * 255, l * 255, 1);
            }
            var t2 = l <= 0.5 ? l * (s + 1) : l + s - l * s;
            var t1 = l * 2 - t2;
            var r = hue2rgb(t1, t2, h + 1 / 3);
            var g = hue2rgb(t1, t2, h);
            var b = hue2rgb(t1, t2, h - 1 / 3);
            return pack(r * 255, g * 255, b * 255, a);
        };
        var SUPPORTED_COLOR_FUNCTIONS = {
            hsl: hsl,
            hsla: hsl,
            rgb: rgb,
            rgba: rgb
        };
        var parseColor = function (context, value) {
            return color$1.parse(context, Parser.create(value).parseComponentValue());
        };
        var COLORS = {
            ALICEBLUE: 0xf0f8ffff,
            ANTIQUEWHITE: 0xfaebd7ff,
            AQUA: 0x00ffffff,
            AQUAMARINE: 0x7fffd4ff,
            AZURE: 0xf0ffffff,
            BEIGE: 0xf5f5dcff,
            BISQUE: 0xffe4c4ff,
            BLACK: 0x000000ff,
            BLANCHEDALMOND: 0xffebcdff,
            BLUE: 0x0000ffff,
            BLUEVIOLET: 0x8a2be2ff,
            BROWN: 0xa52a2aff,
            BURLYWOOD: 0xdeb887ff,
            CADETBLUE: 0x5f9ea0ff,
            CHARTREUSE: 0x7fff00ff,
            CHOCOLATE: 0xd2691eff,
            CORAL: 0xff7f50ff,
            CORNFLOWERBLUE: 0x6495edff,
            CORNSILK: 0xfff8dcff,
            CRIMSON: 0xdc143cff,
            CYAN: 0x00ffffff,
            DARKBLUE: 0x00008bff,
            DARKCYAN: 0x008b8bff,
            DARKGOLDENROD: 0xb886bbff,
            DARKGRAY: 0xa9a9a9ff,
            DARKGREEN: 0x006400ff,
            DARKGREY: 0xa9a9a9ff,
            DARKKHAKI: 0xbdb76bff,
            DARKMAGENTA: 0x8b008bff,
            DARKOLIVEGREEN: 0x556b2fff,
            DARKORANGE: 0xff8c00ff,
            DARKORCHID: 0x9932ccff,
            DARKRED: 0x8b0000ff,
            DARKSALMON: 0xe9967aff,
            DARKSEAGREEN: 0x8fbc8fff,
            DARKSLATEBLUE: 0x483d8bff,
            DARKSLATEGRAY: 0x2f4f4fff,
            DARKSLATEGREY: 0x2f4f4fff,
            DARKTURQUOISE: 0x00ced1ff,
            DARKVIOLET: 0x9400d3ff,
            DEEPPINK: 0xff1493ff,
            DEEPSKYBLUE: 0x00bfffff,
            DIMGRAY: 0x696969ff,
            DIMGREY: 0x696969ff,
            DODGERBLUE: 0x1e90ffff,
            FIREBRICK: 0xb22222ff,
            FLORALWHITE: 0xfffaf0ff,
            FORESTGREEN: 0x228b22ff,
            FUCHSIA: 0xff00ffff,
            GAINSBORO: 0xdcdcdcff,
            GHOSTWHITE: 0xf8f8ffff,
            GOLD: 0xffd700ff,
            GOLDENROD: 0xdaa520ff,
            GRAY: 0x808080ff,
            GREEN: 0x008000ff,
            GREENYELLOW: 0xadff2fff,
            GREY: 0x808080ff,
            HONEYDEW: 0xf0fff0ff,
            HOTPINK: 0xff69b4ff,
            INDIANRED: 0xcd5c5cff,
            INDIGO: 0x4b0082ff,
            IVORY: 0xfffff0ff,
            KHAKI: 0xf0e68cff,
            LAVENDER: 0xe6e6faff,
            LAVENDERBLUSH: 0xfff0f5ff,
            LAWNGREEN: 0x7cfc00ff,
            LEMONCHIFFON: 0xfffacdff,
            LIGHTBLUE: 0xadd8e6ff,
            LIGHTCORAL: 0xf08080ff,
            LIGHTCYAN: 0xe0ffffff,
            LIGHTGOLDENRODYELLOW: 0xfafad2ff,
            LIGHTGRAY: 0xd3d3d3ff,
            LIGHTGREEN: 0x90ee90ff,
            LIGHTGREY: 0xd3d3d3ff,
            LIGHTPINK: 0xffb6c1ff,
            LIGHTSALMON: 0xffa07aff,
            LIGHTSEAGREEN: 0x20b2aaff,
            LIGHTSKYBLUE: 0x87cefaff,
            LIGHTSLATEGRAY: 0x778899ff,
            LIGHTSLATEGREY: 0x778899ff,
            LIGHTSTEELBLUE: 0xb0c4deff,
            LIGHTYELLOW: 0xffffe0ff,
            LIME: 0x00ff00ff,
            LIMEGREEN: 0x32cd32ff,
            LINEN: 0xfaf0e6ff,
            MAGENTA: 0xff00ffff,
            MAROON: 0x800000ff,
            MEDIUMAQUAMARINE: 0x66cdaaff,
            MEDIUMBLUE: 0x0000cdff,
            MEDIUMORCHID: 0xba55d3ff,
            MEDIUMPURPLE: 0x9370dbff,
            MEDIUMSEAGREEN: 0x3cb371ff,
            MEDIUMSLATEBLUE: 0x7b68eeff,
            MEDIUMSPRINGGREEN: 0x00fa9aff,
            MEDIUMTURQUOISE: 0x48d1ccff,
            MEDIUMVIOLETRED: 0xc71585ff,
            MIDNIGHTBLUE: 0x191970ff,
            MINTCREAM: 0xf5fffaff,
            MISTYROSE: 0xffe4e1ff,
            MOCCASIN: 0xffe4b5ff,
            NAVAJOWHITE: 0xffdeadff,
            NAVY: 0x000080ff,
            OLDLACE: 0xfdf5e6ff,
            OLIVE: 0x808000ff,
            OLIVEDRAB: 0x6b8e23ff,
            ORANGE: 0xffa500ff,
            ORANGERED: 0xff4500ff,
            ORCHID: 0xda70d6ff,
            PALEGOLDENROD: 0xeee8aaff,
            PALEGREEN: 0x98fb98ff,
            PALETURQUOISE: 0xafeeeeff,
            PALEVIOLETRED: 0xdb7093ff,
            PAPAYAWHIP: 0xffefd5ff,
            PEACHPUFF: 0xffdab9ff,
            PERU: 0xcd853fff,
            PINK: 0xffc0cbff,
            PLUM: 0xdda0ddff,
            POWDERBLUE: 0xb0e0e6ff,
            PURPLE: 0x800080ff,
            REBECCAPURPLE: 0x663399ff,
            RED: 0xff0000ff,
            ROSYBROWN: 0xbc8f8fff,
            ROYALBLUE: 0x4169e1ff,
            SADDLEBROWN: 0x8b4513ff,
            SALMON: 0xfa8072ff,
            SANDYBROWN: 0xf4a460ff,
            SEAGREEN: 0x2e8b57ff,
            SEASHELL: 0xfff5eeff,
            SIENNA: 0xa0522dff,
            SILVER: 0xc0c0c0ff,
            SKYBLUE: 0x87ceebff,
            SLATEBLUE: 0x6a5acdff,
            SLATEGRAY: 0x708090ff,
            SLATEGREY: 0x708090ff,
            SNOW: 0xfffafaff,
            SPRINGGREEN: 0x00ff7fff,
            STEELBLUE: 0x4682b4ff,
            TAN: 0xd2b48cff,
            TEAL: 0x008080ff,
            THISTLE: 0xd8bfd8ff,
            TOMATO: 0xff6347ff,
            TRANSPARENT: 0x00000000,
            TURQUOISE: 0x40e0d0ff,
            VIOLET: 0xee82eeff,
            WHEAT: 0xf5deb3ff,
            WHITE: 0xffffffff,
            WHITESMOKE: 0xf5f5f5ff,
            YELLOW: 0xffff00ff,
            YELLOWGREEN: 0x9acd32ff
        };

        var backgroundClip = {
            name: 'background-clip',
            initialValue: 'border-box',
            prefix: false,
            type: 1 /* LIST */ ,
            parse: function (_context, tokens) {
                return tokens.map(function (token) {
                    if (isIdentToken(token)) {
                        switch (token.value) {
                            case 'padding-box':
                                return 1 /* PADDING_BOX */ ;
                            case 'content-box':
                                return 2 /* CONTENT_BOX */ ;
                        }
                    }
                    return 0 /* BORDER_BOX */ ;
                });
            }
        };

        var backgroundColor = {
            name: "background-color",
            initialValue: 'transparent',
            prefix: false,
            type: 3 /* TYPE_VALUE */ ,
            format: 'color'
        };

        var parseColorStop = function (context, args) {
            var color = color$1.parse(context, args[0]);
            var stop = args[1];
            return stop && isLengthPercentage(stop) ? {
                color: color,
                stop: stop
            } : {
                color: color,
                stop: null
            };
        };
        var processColorStops = function (stops, lineLength) {
            var first = stops[0];
            var last = stops[stops.length - 1];
            if (first.stop === null) {
                first.stop = ZERO_LENGTH;
            }
            if (last.stop === null) {
                last.stop = HUNDRED_PERCENT;
            }
            var processStops = [];
            var previous = 0;
            for (var i = 0; i < stops.length; i++) {
                var stop_1 = stops[i].stop;
                if (stop_1 !== null) {
                    var absoluteValue = getAbsoluteValue(stop_1, lineLength);
                    if (absoluteValue > previous) {
                        processStops.push(absoluteValue);
                    } else {
                        processStops.push(previous);
                    }
                    previous = absoluteValue;
                } else {
                    processStops.push(null);
                }
            }
            var gapBegin = null;
            for (var i = 0; i < processStops.length; i++) {
                var stop_2 = processStops[i];
                if (stop_2 === null) {
                    if (gapBegin === null) {
                        gapBegin = i;
                    }
                } else if (gapBegin !== null) {
                    var gapLength = i - gapBegin;
                    var beforeGap = processStops[gapBegin - 1];
                    var gapValue = (stop_2 - beforeGap) / (gapLength + 1);
                    for (var g = 1; g <= gapLength; g++) {
                        processStops[gapBegin + g - 1] = gapValue * g;
                    }
                    gapBegin = null;
                }
            }
            return stops.map(function (_a, i) {
                var color = _a.color;
                return {
                    color: color,
                    stop: Math.max(Math.min(1, processStops[i] / lineLength), 0)
                };
            });
        };
        var getAngleFromCorner = function (corner, width, height) {
            var centerX = width / 2;
            var centerY = height / 2;
            var x = getAbsoluteValue(corner[0], width) - centerX;
            var y = centerY - getAbsoluteValue(corner[1], height);
            return (Math.atan2(y, x) + Math.PI * 2) % (Math.PI * 2);
        };
        var calculateGradientDirection = function (angle, width, height) {
            var radian = typeof angle === 'number' ? angle : getAngleFromCorner(angle, width, height);
            var lineLength = Math.abs(width * Math.sin(radian)) + Math.abs(height * Math.cos(radian));
            var halfWidth = width / 2;
            var halfHeight = height / 2;
            var halfLineLength = lineLength / 2;
            var yDiff = Math.sin(radian - Math.PI / 2) * halfLineLength;
            var xDiff = Math.cos(radian - Math.PI / 2) * halfLineLength;
            return [lineLength, halfWidth - xDiff, halfWidth + xDiff, halfHeight - yDiff, halfHeight + yDiff];
        };
        var distance = function (a, b) {
            return Math.sqrt(a * a + b * b);
        };
        var findCorner = function (width, height, x, y, closest) {
            var corners = [
                [0, 0],
                [0, height],
                [width, 0],
                [width, height]
            ];
            return corners.reduce(function (stat, corner) {
                var cx = corner[0],
                    cy = corner[1];
                var d = distance(x - cx, y - cy);
                if (closest ? d < stat.optimumDistance : d > stat.optimumDistance) {
                    return {
                        optimumCorner: corner,
                        optimumDistance: d
                    };
                }
                return stat;
            }, {
                optimumDistance: closest ? Infinity : -Infinity,
                optimumCorner: null
            }).optimumCorner;
        };
        var calculateRadius = function (gradient, x, y, width, height) {
            var rx = 0;
            var ry = 0;
            switch (gradient.size) {
                case 0 /* CLOSEST_SIDE */ :
                    // The ending shape is sized so that that it exactly meets the side of the gradient box closest to the gradient’s center.
                    // If the shape is an ellipse, it exactly meets the closest side in each dimension.
                    if (gradient.shape === 0 /* CIRCLE */ ) {
                        rx = ry = Math.min(Math.abs(x), Math.abs(x - width), Math.abs(y), Math.abs(y - height));
                    } else if (gradient.shape === 1 /* ELLIPSE */ ) {
                        rx = Math.min(Math.abs(x), Math.abs(x - width));
                        ry = Math.min(Math.abs(y), Math.abs(y - height));
                    }
                    break;
                case 2 /* CLOSEST_CORNER */ :
                    // The ending shape is sized so that that it passes through the corner of the gradient box closest to the gradient’s center.
                    // If the shape is an ellipse, the ending shape is given the same aspect-ratio it would have if closest-side were specified.
                    if (gradient.shape === 0 /* CIRCLE */ ) {
                        rx = ry = Math.min(distance(x, y), distance(x, y - height), distance(x - width, y), distance(x - width, y - height));
                    } else if (gradient.shape === 1 /* ELLIPSE */ ) {
                        // Compute the ratio ry/rx (which is to be the same as for "closest-side")
                        var c = Math.min(Math.abs(y), Math.abs(y - height)) / Math.min(Math.abs(x), Math.abs(x - width));
                        var _a = findCorner(width, height, x, y, true),
                            cx = _a[0],
                            cy = _a[1];
                        rx = distance(cx - x, (cy - y) / c);
                        ry = c * rx;
                    }
                    break;
                case 1 /* FARTHEST_SIDE */ :
                    // Same as closest-side, except the ending shape is sized based on the farthest side(s)
                    if (gradient.shape === 0 /* CIRCLE */ ) {
                        rx = ry = Math.max(Math.abs(x), Math.abs(x - width), Math.abs(y), Math.abs(y - height));
                    } else if (gradient.shape === 1 /* ELLIPSE */ ) {
                        rx = Math.max(Math.abs(x), Math.abs(x - width));
                        ry = Math.max(Math.abs(y), Math.abs(y - height));
                    }
                    break;
                case 3 /* FARTHEST_CORNER */ :
                    // Same as closest-corner, except the ending shape is sized based on the farthest corner.
                    // If the shape is an ellipse, the ending shape is given the same aspect ratio it would have if farthest-side were specified.
                    if (gradient.shape === 0 /* CIRCLE */ ) {
                        rx = ry = Math.max(distance(x, y), distance(x, y - height), distance(x - width, y), distance(x - width, y - height));
                    } else if (gradient.shape === 1 /* ELLIPSE */ ) {
                        // Compute the ratio ry/rx (which is to be the same as for "farthest-side")
                        var c = Math.max(Math.abs(y), Math.abs(y - height)) / Math.max(Math.abs(x), Math.abs(x - width));
                        var _b = findCorner(width, height, x, y, false),
                            cx = _b[0],
                            cy = _b[1];
                        rx = distance(cx - x, (cy - y) / c);
                        ry = c * rx;
                    }
                    break;
            }
            if (Array.isArray(gradient.size)) {
                rx = getAbsoluteValue(gradient.size[0], width);
                ry = gradient.size.length === 2 ? getAbsoluteValue(gradient.size[1], height) : rx;
            }
            return [rx, ry];
        };

        var linearGradient = function (context, tokens) {
            var angle$1 = deg(180);
            var stops = [];
            parseFunctionArgs(tokens).forEach(function (arg, i) {
                if (i === 0) {
                    var firstToken = arg[0];
                    if (firstToken.type === 20 /* IDENT_TOKEN */ && firstToken.value === 'to') {
                        angle$1 = parseNamedSide(arg);
                        return;
                    } else if (isAngle(firstToken)) {
                        angle$1 = angle.parse(context, firstToken);
                        return;
                    }
                }
                var colorStop = parseColorStop(context, arg);
                stops.push(colorStop);
            });
            return {
                angle: angle$1,
                stops: stops,
                type: 1 /* LINEAR_GRADIENT */
            };
        };

        var prefixLinearGradient = function (context, tokens) {
            var angle$1 = deg(180);
            var stops = [];
            parseFunctionArgs(tokens).forEach(function (arg, i) {
                if (i === 0) {
                    var firstToken = arg[0];
                    if (firstToken.type === 20 /* IDENT_TOKEN */ && ['top', 'left', 'right', 'bottom'].indexOf(firstToken.value) !== -1) {
                        angle$1 = parseNamedSide(arg);
                        return;
                    } else if (isAngle(firstToken)) {
                        angle$1 = (angle.parse(context, firstToken) + deg(270)) % deg(360);
                        return;
                    }
                }
                var colorStop = parseColorStop(context, arg);
                stops.push(colorStop);
            });
            return {
                angle: angle$1,
                stops: stops,
                type: 1 /* LINEAR_GRADIENT */
            };
        };

        var webkitGradient = function (context, tokens) {
            var angle = deg(180);
            var stops = [];
            var type = 1 /* LINEAR_GRADIENT */ ;
            var shape = 0 /* CIRCLE */ ;
            var size = 3 /* FARTHEST_CORNER */ ;
            var position = [];
            parseFunctionArgs(tokens).forEach(function (arg, i) {
                var firstToken = arg[0];
                if (i === 0) {
                    if (isIdentToken(firstToken) && firstToken.value === 'linear') {
                        type = 1 /* LINEAR_GRADIENT */ ;
                        return;
                    } else if (isIdentToken(firstToken) && firstToken.value === 'radial') {
                        type = 2 /* RADIAL_GRADIENT */ ;
                        return;
                    }
                }
                if (firstToken.type === 18 /* FUNCTION */ ) {
                    if (firstToken.name === 'from') {
                        var color = color$1.parse(context, firstToken.values[0]);
                        stops.push({
                            stop: ZERO_LENGTH,
                            color: color
                        });
                    } else if (firstToken.name === 'to') {
                        var color = color$1.parse(context, firstToken.values[0]);
                        stops.push({
                            stop: HUNDRED_PERCENT,
                            color: color
                        });
                    } else if (firstToken.name === 'color-stop') {
                        var values = firstToken.values.filter(nonFunctionArgSeparator);
                        if (values.length === 2) {
                            var color = color$1.parse(context, values[1]);
                            var stop_1 = values[0];
                            if (isNumberToken(stop_1)) {
                                stops.push({
                                    stop: {
                                        type: 16 /* PERCENTAGE_TOKEN */ ,
                                        number: stop_1.number * 100,
                                        flags: stop_1.flags
                                    },
                                    color: color
                                });
                            }
                        }
                    }
                }
            });
            return type === 1 /* LINEAR_GRADIENT */ ? {
                angle: (angle + deg(180)) % deg(360),
                stops: stops,
                type: type
            } : {
                size: size,
                shape: shape,
                stops: stops,
                position: position,
                type: type
            };
        };

        var CLOSEST_SIDE = 'closest-side';
        var FARTHEST_SIDE = 'farthest-side';
        var CLOSEST_CORNER = 'closest-corner';
        var FARTHEST_CORNER = 'farthest-corner';
        var CIRCLE = 'circle';
        var ELLIPSE = 'ellipse';
        var COVER = 'cover';
        var CONTAIN = 'contain';
        var radialGradient = function (context, tokens) {
            var shape = 0 /* CIRCLE */ ;
            var size = 3 /* FARTHEST_CORNER */ ;
            var stops = [];
            var position = [];
            parseFunctionArgs(tokens).forEach(function (arg, i) {
                var isColorStop = true;
                if (i === 0) {
                    var isAtPosition_1 = false;
                    isColorStop = arg.reduce(function (acc, token) {
                        if (isAtPosition_1) {
                            if (isIdentToken(token)) {
                                switch (token.value) {
                                    case 'center':
                                        position.push(FIFTY_PERCENT);
                                        return acc;
                                    case 'top':
                                    case 'left':
                                        position.push(ZERO_LENGTH);
                                        return acc;
                                    case 'right':
                                    case 'bottom':
                                        position.push(HUNDRED_PERCENT);
                                        return acc;
                                }
                            } else if (isLengthPercentage(token) || isLength(token)) {
                                position.push(token);
                            }
                        } else if (isIdentToken(token)) {
                            switch (token.value) {
                                case CIRCLE:
                                    shape = 0 /* CIRCLE */ ;
                                    return false;
                                case ELLIPSE:
                                    shape = 1 /* ELLIPSE */ ;
                                    return false;
                                case 'at':
                                    isAtPosition_1 = true;
                                    return false;
                                case CLOSEST_SIDE:
                                    size = 0 /* CLOSEST_SIDE */ ;
                                    return false;
                                case COVER:
                                case FARTHEST_SIDE:
                                    size = 1 /* FARTHEST_SIDE */ ;
                                    return false;
                                case CONTAIN:
                                case CLOSEST_CORNER:
                                    size = 2 /* CLOSEST_CORNER */ ;
                                    return false;
                                case FARTHEST_CORNER:
                                    size = 3 /* FARTHEST_CORNER */ ;
                                    return false;
                            }
                        } else if (isLength(token) || isLengthPercentage(token)) {
                            if (!Array.isArray(size)) {
                                size = [];
                            }
                            size.push(token);
                            return false;
                        }
                        return acc;
                    }, isColorStop);
                }
                if (isColorStop) {
                    var colorStop = parseColorStop(context, arg);
                    stops.push(colorStop);
                }
            });
            return {
                size: size,
                shape: shape,
                stops: stops,
                position: position,
                type: 2 /* RADIAL_GRADIENT */
            };
        };

        var prefixRadialGradient = function (context, tokens) {
            var shape = 0 /* CIRCLE */ ;
            var size = 3 /* FARTHEST_CORNER */ ;
            var stops = [];
            var position = [];
            parseFunctionArgs(tokens).forEach(function (arg, i) {
                var isColorStop = true;
                if (i === 0) {
                    isColorStop = arg.reduce(function (acc, token) {
                        if (isIdentToken(token)) {
                            switch (token.value) {
                                case 'center':
                                    position.push(FIFTY_PERCENT);
                                    return false;
                                case 'top':
                                case 'left':
                                    position.push(ZERO_LENGTH);
                                    return false;
                                case 'right':
                                case 'bottom':
                                    position.push(HUNDRED_PERCENT);
                                    return false;
                            }
                        } else if (isLengthPercentage(token) || isLength(token)) {
                            position.push(token);
                            return false;
                        }
                        return acc;
                    }, isColorStop);
                } else if (i === 1) {
                    isColorStop = arg.reduce(function (acc, token) {
                        if (isIdentToken(token)) {
                            switch (token.value) {
                                case CIRCLE:
                                    shape = 0 /* CIRCLE */ ;
                                    return false;
                                case ELLIPSE:
                                    shape = 1 /* ELLIPSE */ ;
                                    return false;
                                case CONTAIN:
                                case CLOSEST_SIDE:
                                    size = 0 /* CLOSEST_SIDE */ ;
                                    return false;
                                case FARTHEST_SIDE:
                                    size = 1 /* FARTHEST_SIDE */ ;
                                    return false;
                                case CLOSEST_CORNER:
                                    size = 2 /* CLOSEST_CORNER */ ;
                                    return false;
                                case COVER:
                                case FARTHEST_CORNER:
                                    size = 3 /* FARTHEST_CORNER */ ;
                                    return false;
                            }
                        } else if (isLength(token) || isLengthPercentage(token)) {
                            if (!Array.isArray(size)) {
                                size = [];
                            }
                            size.push(token);
                            return false;
                        }
                        return acc;
                    }, isColorStop);
                }
                if (isColorStop) {
                    var colorStop = parseColorStop(context, arg);
                    stops.push(colorStop);
                }
            });
            return {
                size: size,
                shape: shape,
                stops: stops,
                position: position,
                type: 2 /* RADIAL_GRADIENT */
            };
        };

        var isLinearGradient = function (background) {
            return background.type === 1 /* LINEAR_GRADIENT */ ;
        };
        var isRadialGradient = function (background) {
            return background.type === 2 /* RADIAL_GRADIENT */ ;
        };
        var image = {
            name: 'image',
            parse: function (context, value) {
                if (value.type === 22 /* URL_TOKEN */ ) {
                    var image_1 = {
                        url: value.value,
                        type: 0 /* URL */
                    };
                    context.cache.addImage(value.value);
                    return image_1;
                }
                if (value.type === 18 /* FUNCTION */ ) {
                    var imageFunction = SUPPORTED_IMAGE_FUNCTIONS[value.name];
                    if (typeof imageFunction === 'undefined') {
                        throw new Error("Attempting to parse an unsupported image function \"" + value.name + "\"");
                    }
                    return imageFunction(context, value.values);
                }
                throw new Error("Unsupported image type " + value.type);
            }
        };

        function isSupportedImage(value) {
            return (!(value.type === 20 /* IDENT_TOKEN */ && value.value === 'none') &&
                (value.type !== 18 /* FUNCTION */ || !!SUPPORTED_IMAGE_FUNCTIONS[value.name]));
        }
        var SUPPORTED_IMAGE_FUNCTIONS = {
            'linear-gradient': linearGradient,
            '-moz-linear-gradient': prefixLinearGradient,
            '-ms-linear-gradient': prefixLinearGradient,
            '-o-linear-gradient': prefixLinearGradient,
            '-webkit-linear-gradient': prefixLinearGradient,
            'radial-gradient': radialGradient,
            '-moz-radial-gradient': prefixRadialGradient,
            '-ms-radial-gradient': prefixRadialGradient,
            '-o-radial-gradient': prefixRadialGradient,
            '-webkit-radial-gradient': prefixRadialGradient,
            '-webkit-gradient': webkitGradient
        };

        var backgroundImage = {
            name: 'background-image',
            initialValue: 'none',
            type: 1 /* LIST */ ,
            prefix: false,
            parse: function (context, tokens) {
                if (tokens.length === 0) {
                    return [];
                }
                var first = tokens[0];
                if (first.type === 20 /* IDENT_TOKEN */ && first.value === 'none') {
                    return [];
                }
                return tokens
                    .filter(function (value) {
                        return nonFunctionArgSeparator(value) && isSupportedImage(value);
                    })
                    .map(function (value) {
                        return image.parse(context, value);
                    });
            }
        };

        var backgroundOrigin = {
            name: 'background-origin',
            initialValue: 'border-box',
            prefix: false,
            type: 1 /* LIST */ ,
            parse: function (_context, tokens) {
                return tokens.map(function (token) {
                    if (isIdentToken(token)) {
                        switch (token.value) {
                            case 'padding-box':
                                return 1 /* PADDING_BOX */ ;
                            case 'content-box':
                                return 2 /* CONTENT_BOX */ ;
                        }
                    }
                    return 0 /* BORDER_BOX */ ;
                });
            }
        };

        var backgroundPosition = {
            name: 'background-position',
            initialValue: '0% 0%',
            type: 1 /* LIST */ ,
            prefix: false,
            parse: function (_context, tokens) {
                return parseFunctionArgs(tokens)
                    .map(function (values) {
                        return values.filter(isLengthPercentage);
                    })
                    .map(parseLengthPercentageTuple);
            }
        };

        var backgroundRepeat = {
            name: 'background-repeat',
            initialValue: 'repeat',
            prefix: false,
            type: 1 /* LIST */ ,
            parse: function (_context, tokens) {
                return parseFunctionArgs(tokens)
                    .map(function (values) {
                        return values
                            .filter(isIdentToken)
                            .map(function (token) {
                                return token.value;
                            })
                            .join(' ');
                    })
                    .map(parseBackgroundRepeat);
            }
        };
        var parseBackgroundRepeat = function (value) {
            switch (value) {
                case 'no-repeat':
                    return 1 /* NO_REPEAT */ ;
                case 'repeat-x':
                case 'repeat no-repeat':
                    return 2 /* REPEAT_X */ ;
                case 'repeat-y':
                case 'no-repeat repeat':
                    return 3 /* REPEAT_Y */ ;
                case 'repeat':
                default:
                    return 0 /* REPEAT */ ;
            }
        };

        var BACKGROUND_SIZE;
        (function (BACKGROUND_SIZE) {
            BACKGROUND_SIZE["AUTO"] = "auto";
            BACKGROUND_SIZE["CONTAIN"] = "contain";
            BACKGROUND_SIZE["COVER"] = "cover";
        })(BACKGROUND_SIZE || (BACKGROUND_SIZE = {}));
        var backgroundSize = {
            name: 'background-size',
            initialValue: '0',
            prefix: false,
            type: 1 /* LIST */ ,
            parse: function (_context, tokens) {
                return parseFunctionArgs(tokens).map(function (values) {
                    return values.filter(isBackgroundSizeInfoToken);
                });
            }
        };
        var isBackgroundSizeInfoToken = function (value) {
            return isIdentToken(value) || isLengthPercentage(value);
        };

        var borderColorForSide = function (side) {
            return ({
                name: "border-" + side + "-color",
                initialValue: 'transparent',
                prefix: false,
                type: 3 /* TYPE_VALUE */ ,
                format: 'color'
            });
        };
        var borderTopColor = borderColorForSide('top');
        var borderRightColor = borderColorForSide('right');
        var borderBottomColor = borderColorForSide('bottom');
        var borderLeftColor = borderColorForSide('left');

        var borderRadiusForSide = function (side) {
            return ({
                name: "border-radius-" + side,
                initialValue: '0 0',
                prefix: false,
                type: 1 /* LIST */ ,
                parse: function (_context, tokens) {
                    return parseLengthPercentageTuple(tokens.filter(isLengthPercentage));
                }
            });
        };
        var borderTopLeftRadius = borderRadiusForSide('top-left');
        var borderTopRightRadius = borderRadiusForSide('top-right');
        var borderBottomRightRadius = borderRadiusForSide('bottom-right');
        var borderBottomLeftRadius = borderRadiusForSide('bottom-left');

        var borderStyleForSide = function (side) {
            return ({
                name: "border-" + side + "-style",
                initialValue: 'solid',
                prefix: false,
                type: 2 /* IDENT_VALUE */ ,
                parse: function (_context, style) {
                    switch (style) {
                        case 'none':
                            return 0 /* NONE */ ;
                        case 'dashed':
                            return 2 /* DASHED */ ;
                        case 'dotted':
                            return 3 /* DOTTED */ ;
                        case 'double':
                            return 4 /* DOUBLE */ ;
                    }
                    return 1 /* SOLID */ ;
                }
            });
        };
        var borderTopStyle = borderStyleForSide('top');
        var borderRightStyle = borderStyleForSide('right');
        var borderBottomStyle = borderStyleForSide('bottom');
        var borderLeftStyle = borderStyleForSide('left');

        var borderWidthForSide = function (side) {
            return ({
                name: "border-" + side + "-width",
                initialValue: '0',
                type: 0 /* VALUE */ ,
                prefix: false,
                parse: function (_context, token) {
                    if (isDimensionToken(token)) {
                        return token.number;
                    }
                    return 0;
                }
            });
        };
        var borderTopWidth = borderWidthForSide('top');
        var borderRightWidth = borderWidthForSide('right');
        var borderBottomWidth = borderWidthForSide('bottom');
        var borderLeftWidth = borderWidthForSide('left');

        var color = {
            name: "color",
            initialValue: 'transparent',
            prefix: false,
            type: 3 /* TYPE_VALUE */ ,
            format: 'color'
        };

        var direction = {
            name: 'direction',
            initialValue: 'ltr',
            prefix: false,
            type: 2 /* IDENT_VALUE */ ,
            parse: function (_context, direction) {
                switch (direction) {
                    case 'rtl':
                        return 1 /* RTL */ ;
                    case 'ltr':
                    default:
                        return 0 /* LTR */ ;
                }
            }
        };

        var display = {
            name: 'display',
            initialValue: 'inline-block',
            prefix: false,
            type: 1 /* LIST */ ,
            parse: function (_context, tokens) {
                return tokens.filter(isIdentToken).reduce(function (bit, token) {
                    return bit | parseDisplayValue(token.value);
                }, 0 /* NONE */ );
            }
        };
        var parseDisplayValue = function (display) {
            switch (display) {
                case 'block':
                case '-webkit-box':
                    return 2 /* BLOCK */ ;
                case 'inline':
                    return 4 /* INLINE */ ;
                case 'run-in':
                    return 8 /* RUN_IN */ ;
                case 'flow':
                    return 16 /* FLOW */ ;
                case 'flow-root':
                    return 32 /* FLOW_ROOT */ ;
                case 'table':
                    return 64 /* TABLE */ ;
                case 'flex':
                case '-webkit-flex':
                    return 128 /* FLEX */ ;
                case 'grid':
                case '-ms-grid':
                    return 256 /* GRID */ ;
                case 'ruby':
                    return 512 /* RUBY */ ;
                case 'subgrid':
                    return 1024 /* SUBGRID */ ;
                case 'list-item':
                    return 2048 /* LIST_ITEM */ ;
                case 'table-row-group':
                    return 4096 /* TABLE_ROW_GROUP */ ;
                case 'table-header-group':
                    return 8192 /* TABLE_HEADER_GROUP */ ;
                case 'table-footer-group':
                    return 16384 /* TABLE_FOOTER_GROUP */ ;
                case 'table-row':
                    return 32768 /* TABLE_ROW */ ;
                case 'table-cell':
                    return 65536 /* TABLE_CELL */ ;
                case 'table-column-group':
                    return 131072 /* TABLE_COLUMN_GROUP */ ;
                case 'table-column':
                    return 262144 /* TABLE_COLUMN */ ;
                case 'table-caption':
                    return 524288 /* TABLE_CAPTION */ ;
                case 'ruby-base':
                    return 1048576 /* RUBY_BASE */ ;
                case 'ruby-text':
                    return 2097152 /* RUBY_TEXT */ ;
                case 'ruby-base-container':
                    return 4194304 /* RUBY_BASE_CONTAINER */ ;
                case 'ruby-text-container':
                    return 8388608 /* RUBY_TEXT_CONTAINER */ ;
                case 'contents':
                    return 16777216 /* CONTENTS */ ;
                case 'inline-block':
                    return 33554432 /* INLINE_BLOCK */ ;
                case 'inline-list-item':
                    return 67108864 /* INLINE_LIST_ITEM */ ;
                case 'inline-table':
                    return 134217728 /* INLINE_TABLE */ ;
                case 'inline-flex':
                    return 268435456 /* INLINE_FLEX */ ;
                case 'inline-grid':
                    return 536870912 /* INLINE_GRID */ ;
            }
            return 0 /* NONE */ ;
        };

        var float = {
            name: 'float',
            initialValue: 'none',
            prefix: false,
            type: 2 /* IDENT_VALUE */ ,
            parse: function (_context, float) {
                switch (float) {
                    case 'left':
                        return 1 /* LEFT */ ;
                    case 'right':
                        return 2 /* RIGHT */ ;
                    case 'inline-start':
                        return 3 /* INLINE_START */ ;
                    case 'inline-end':
                        return 4 /* INLINE_END */ ;
                }
                return 0 /* NONE */ ;
            }
        };

        var letterSpacing = {
            name: 'letter-spacing',
            initialValue: '0',
            prefix: false,
            type: 0 /* VALUE */ ,
            parse: function (_context, token) {
                if (token.type === 20 /* IDENT_TOKEN */ && token.value === 'normal') {
                    return 0;
                }
                if (token.type === 17 /* NUMBER_TOKEN */ ) {
                    return token.number;
                }
                if (token.type === 15 /* DIMENSION_TOKEN */ ) {
                    return token.number;
                }
                return 0;
            }
        };

        var LINE_BREAK;
        (function (LINE_BREAK) {
            LINE_BREAK["NORMAL"] = "normal";
            LINE_BREAK["STRICT"] = "strict";
        })(LINE_BREAK || (LINE_BREAK = {}));
        var lineBreak = {
            name: 'line-break',
            initialValue: 'normal',
            prefix: false,
            type: 2 /* IDENT_VALUE */ ,
            parse: function (_context, lineBreak) {
                switch (lineBreak) {
                    case 'strict':
                        return LINE_BREAK.STRICT;
                    case 'normal':
                    default:
                        return LINE_BREAK.NORMAL;
                }
            }
        };

        var lineHeight = {
            name: 'line-height',
            initialValue: 'normal',
            prefix: false,
            type: 4 /* TOKEN_VALUE */
        };
        var computeLineHeight = function (token, fontSize) {
            if (isIdentToken(token) && token.value === 'normal') {
                return 1.2 * fontSize;
            } else if (token.type === 17 /* NUMBER_TOKEN */ ) {
                return fontSize * token.number;
            } else if (isLengthPercentage(token)) {
                return getAbsoluteValue(token, fontSize);
            }
            return fontSize;
        };

        var listStyleImage = {
            name: 'list-style-image',
            initialValue: 'none',
            type: 0 /* VALUE */ ,
            prefix: false,
            parse: function (context, token) {
                if (token.type === 20 /* IDENT_TOKEN */ && token.value === 'none') {
                    return null;
                }
                return image.parse(context, token);
            }
        };

        var listStylePosition = {
            name: 'list-style-position',
            initialValue: 'outside',
            prefix: false,
            type: 2 /* IDENT_VALUE */ ,
            parse: function (_context, position) {
                switch (position) {
                    case 'inside':
                        return 0 /* INSIDE */ ;
                    case 'outside':
                    default:
                        return 1 /* OUTSIDE */ ;
                }
            }
        };

        var listStyleType = {
            name: 'list-style-type',
            initialValue: 'none',
            prefix: false,
            type: 2 /* IDENT_VALUE */ ,
            parse: function (_context, type) {
                switch (type) {
                    case 'disc':
                        return 0 /* DISC */ ;
                    case 'circle':
                        return 1 /* CIRCLE */ ;
                    case 'square':
                        return 2 /* SQUARE */ ;
                    case 'decimal':
                        return 3 /* DECIMAL */ ;
                    case 'cjk-decimal':
                        return 4 /* CJK_DECIMAL */ ;
                    case 'decimal-leading-zero':
                        return 5 /* DECIMAL_LEADING_ZERO */ ;
                    case 'lower-roman':
                        return 6 /* LOWER_ROMAN */ ;
                    case 'upper-roman':
                        return 7 /* UPPER_ROMAN */ ;
                    case 'lower-greek':
                        return 8 /* LOWER_GREEK */ ;
                    case 'lower-alpha':
                        return 9 /* LOWER_ALPHA */ ;
                    case 'upper-alpha':
                        return 10 /* UPPER_ALPHA */ ;
                    case 'arabic-indic':
                        return 11 /* ARABIC_INDIC */ ;
                    case 'armenian':
                        return 12 /* ARMENIAN */ ;
                    case 'bengali':
                        return 13 /* BENGALI */ ;
                    case 'cambodian':
                        return 14 /* CAMBODIAN */ ;
                    case 'cjk-earthly-branch':
                        return 15 /* CJK_EARTHLY_BRANCH */ ;
                    case 'cjk-heavenly-stem':
                        return 16 /* CJK_HEAVENLY_STEM */ ;
                    case 'cjk-ideographic':
                        return 17 /* CJK_IDEOGRAPHIC */ ;
                    case 'devanagari':
                        return 18 /* DEVANAGARI */ ;
                    case 'ethiopic-numeric':
                        return 19 /* ETHIOPIC_NUMERIC */ ;
                    case 'georgian':
                        return 20 /* GEORGIAN */ ;
                    case 'gujarati':
                        return 21 /* GUJARATI */ ;
                    case 'gurmukhi':
                        return 22 /* GURMUKHI */ ;
                    case 'hebrew':
                        return 22 /* HEBREW */ ;
                    case 'hiragana':
                        return 23 /* HIRAGANA */ ;
                    case 'hiragana-iroha':
                        return 24 /* HIRAGANA_IROHA */ ;
                    case 'japanese-formal':
                        return 25 /* JAPANESE_FORMAL */ ;
                    case 'japanese-informal':
                        return 26 /* JAPANESE_INFORMAL */ ;
                    case 'kannada':
                        return 27 /* KANNADA */ ;
                    case 'katakana':
                        return 28 /* KATAKANA */ ;
                    case 'katakana-iroha':
                        return 29 /* KATAKANA_IROHA */ ;
                    case 'khmer':
                        return 30 /* KHMER */ ;
                    case 'korean-hangul-formal':
                        return 31 /* KOREAN_HANGUL_FORMAL */ ;
                    case 'korean-hanja-formal':
                        return 32 /* KOREAN_HANJA_FORMAL */ ;
                    case 'korean-hanja-informal':
                        return 33 /* KOREAN_HANJA_INFORMAL */ ;
                    case 'lao':
                        return 34 /* LAO */ ;
                    case 'lower-armenian':
                        return 35 /* LOWER_ARMENIAN */ ;
                    case 'malayalam':
                        return 36 /* MALAYALAM */ ;
                    case 'mongolian':
                        return 37 /* MONGOLIAN */ ;
                    case 'myanmar':
                        return 38 /* MYANMAR */ ;
                    case 'oriya':
                        return 39 /* ORIYA */ ;
                    case 'persian':
                        return 40 /* PERSIAN */ ;
                    case 'simp-chinese-formal':
                        return 41 /* SIMP_CHINESE_FORMAL */ ;
                    case 'simp-chinese-informal':
                        return 42 /* SIMP_CHINESE_INFORMAL */ ;
                    case 'tamil':
                        return 43 /* TAMIL */ ;
                    case 'telugu':
                        return 44 /* TELUGU */ ;
                    case 'thai':
                        return 45 /* THAI */ ;
                    case 'tibetan':
                        return 46 /* TIBETAN */ ;
                    case 'trad-chinese-formal':
                        return 47 /* TRAD_CHINESE_FORMAL */ ;
                    case 'trad-chinese-informal':
                        return 48 /* TRAD_CHINESE_INFORMAL */ ;
                    case 'upper-armenian':
                        return 49 /* UPPER_ARMENIAN */ ;
                    case 'disclosure-open':
                        return 50 /* DISCLOSURE_OPEN */ ;
                    case 'disclosure-closed':
                        return 51 /* DISCLOSURE_CLOSED */ ;
                    case 'none':
                    default:
                        return -1 /* NONE */ ;
                }
            }
        };

        var marginForSide = function (side) {
            return ({
                name: "margin-" + side,
                initialValue: '0',
                prefix: false,
                type: 4 /* TOKEN_VALUE */
            });
        };
        var marginTop = marginForSide('top');
        var marginRight = marginForSide('right');
        var marginBottom = marginForSide('bottom');
        var marginLeft = marginForSide('left');

        var overflow = {
            name: 'overflow',
            initialValue: 'visible',
            prefix: false,
            type: 1 /* LIST */ ,
            parse: function (_context, tokens) {
                return tokens.filter(isIdentToken).map(function (overflow) {
                    switch (overflow.value) {
                        case 'hidden':
                            return 1 /* HIDDEN */ ;
                        case 'scroll':
                            return 2 /* SCROLL */ ;
                        case 'clip':
                            return 3 /* CLIP */ ;
                        case 'auto':
                            return 4 /* AUTO */ ;
                        case 'visible':
                        default:
                            return 0 /* VISIBLE */ ;
                    }
                });
            }
        };

        var overflowWrap = {
            name: 'overflow-wrap',
            initialValue: 'normal',
            prefix: false,
            type: 2 /* IDENT_VALUE */ ,
            parse: function (_context, overflow) {
                switch (overflow) {
                    case 'break-word':
                        return "break-word" /* BREAK_WORD */ ;
                    case 'normal':
                    default:
                        return "normal" /* NORMAL */ ;
                }
            }
        };

        var paddingForSide = function (side) {
            return ({
                name: "padding-" + side,
                initialValue: '0',
                prefix: false,
                type: 3 /* TYPE_VALUE */ ,
                format: 'length-percentage'
            });
        };
        var paddingTop = paddingForSide('top');
        var paddingRight = paddingForSide('right');
        var paddingBottom = paddingForSide('bottom');
        var paddingLeft = paddingForSide('left');

        var textAlign = {
            name: 'text-align',
            initialValue: 'left',
            prefix: false,
            type: 2 /* IDENT_VALUE */ ,
            parse: function (_context, textAlign) {
                switch (textAlign) {
                    case 'right':
                        return 2 /* RIGHT */ ;
                    case 'center':
                    case 'justify':
                        return 1 /* CENTER */ ;
                    case 'left':
                    default:
                        return 0 /* LEFT */ ;
                }
            }
        };

        var position = {
            name: 'position',
            initialValue: 'static',
            prefix: false,
            type: 2 /* IDENT_VALUE */ ,
            parse: function (_context, position) {
                switch (position) {
                    case 'relative':
                        return 1 /* RELATIVE */ ;
                    case 'absolute':
                        return 2 /* ABSOLUTE */ ;
                    case 'fixed':
                        return 3 /* FIXED */ ;
                    case 'sticky':
                        return 4 /* STICKY */ ;
                }
                return 0 /* STATIC */ ;
            }
        };

        var textShadow = {
            name: 'text-shadow',
            initialValue: 'none',
            type: 1 /* LIST */ ,
            prefix: false,
            parse: function (context, tokens) {
                if (tokens.length === 1 && isIdentWithValue(tokens[0], 'none')) {
                    return [];
                }
                return parseFunctionArgs(tokens).map(function (values) {
                    var shadow = {
                        color: COLORS.TRANSPARENT,
                        offsetX: ZERO_LENGTH,
                        offsetY: ZERO_LENGTH,
                        blur: ZERO_LENGTH
                    };
                    var c = 0;
                    for (var i = 0; i < values.length; i++) {
                        var token = values[i];
                        if (isLength(token)) {
                            if (c === 0) {
                                shadow.offsetX = token;
                            } else if (c === 1) {
                                shadow.offsetY = token;
                            } else {
                                shadow.blur = token;
                            }
                            c++;
                        } else {
                            shadow.color = color$1.parse(context, token);
                        }
                    }
                    return shadow;
                });
            }
        };

        var textTransform = {
            name: 'text-transform',
            initialValue: 'none',
            prefix: false,
            type: 2 /* IDENT_VALUE */ ,
            parse: function (_context, textTransform) {
                switch (textTransform) {
                    case 'uppercase':
                        return 2 /* UPPERCASE */ ;
                    case 'lowercase':
                        return 1 /* LOWERCASE */ ;
                    case 'capitalize':
                        return 3 /* CAPITALIZE */ ;
                }
                return 0 /* NONE */ ;
            }
        };

        var transform$1 = {
            name: 'transform',
            initialValue: 'none',
            prefix: true,
            type: 0 /* VALUE */ ,
            parse: function (_context, token) {
                if (token.type === 20 /* IDENT_TOKEN */ && token.value === 'none') {
                    return null;
                }
                if (token.type === 18 /* FUNCTION */ ) {
                    var transformFunction = SUPPORTED_TRANSFORM_FUNCTIONS[token.name];
                    if (typeof transformFunction === 'undefined') {
                        throw new Error("Attempting to parse an unsupported transform function \"" + token.name + "\"");
                    }
                    return transformFunction(token.values);
                }
                return null;
            }
        };
        var matrix = function (args) {
            var values = args.filter(function (arg) {
                return arg.type === 17 /* NUMBER_TOKEN */ ;
            }).map(function (arg) {
                return arg.number;
            });
            return values.length === 6 ? values : null;
        };
        // doesn't support 3D transforms at the moment
        var matrix3d = function (args) {
            var values = args.filter(function (arg) {
                return arg.type === 17 /* NUMBER_TOKEN */ ;
            }).map(function (arg) {
                return arg.number;
            });
            var a1 = values[0],
                b1 = values[1];
            values[2];
            values[3];
            var a2 = values[4],
                b2 = values[5];
            values[6];
            values[7];
            values[8];
            values[9];
            values[10];
            values[11];
            var a4 = values[12],
                b4 = values[13];
            values[14];
            values[15];
            return values.length === 16 ? [a1, b1, a2, b2, a4, b4] : null;
        };
        var SUPPORTED_TRANSFORM_FUNCTIONS = {
            matrix: matrix,
            matrix3d: matrix3d
        };

        var DEFAULT_VALUE = {
            type: 16 /* PERCENTAGE_TOKEN */ ,
            number: 50,
            flags: FLAG_INTEGER
        };
        var DEFAULT = [DEFAULT_VALUE, DEFAULT_VALUE];
        var transformOrigin = {
            name: 'transform-origin',
            initialValue: '50% 50%',
            prefix: true,
            type: 1 /* LIST */ ,
            parse: function (_context, tokens) {
                var origins = tokens.filter(isLengthPercentage);
                if (origins.length !== 2) {
                    return DEFAULT;
                }
                return [origins[0], origins[1]];
            }
        };

        var visibility = {
            name: 'visible',
            initialValue: 'none',
            prefix: false,
            type: 2 /* IDENT_VALUE */ ,
            parse: function (_context, visibility) {
                switch (visibility) {
                    case 'hidden':
                        return 1 /* HIDDEN */ ;
                    case 'collapse':
                        return 2 /* COLLAPSE */ ;
                    case 'visible':
                    default:
                        return 0 /* VISIBLE */ ;
                }
            }
        };

        var WORD_BREAK;
        (function (WORD_BREAK) {
            WORD_BREAK["NORMAL"] = "normal";
            WORD_BREAK["BREAK_ALL"] = "break-all";
            WORD_BREAK["KEEP_ALL"] = "keep-all";
        })(WORD_BREAK || (WORD_BREAK = {}));
        var wordBreak = {
            name: 'word-break',
            initialValue: 'normal',
            prefix: false,
            type: 2 /* IDENT_VALUE */ ,
            parse: function (_context, wordBreak) {
                switch (wordBreak) {
                    case 'break-all':
                        return WORD_BREAK.BREAK_ALL;
                    case 'keep-all':
                        return WORD_BREAK.KEEP_ALL;
                    case 'normal':
                    default:
                        return WORD_BREAK.NORMAL;
                }
            }
        };

        var zIndex = {
            name: 'z-index',
            initialValue: 'auto',
            prefix: false,
            type: 0 /* VALUE */ ,
            parse: function (_context, token) {
                if (token.type === 20 /* IDENT_TOKEN */ ) {
                    return {
                        auto: true,
                        order: 0
                    };
                }
                if (isNumberToken(token)) {
                    return {
                        auto: false,
                        order: token.number
                    };
                }
                throw new Error("Invalid z-index number parsed");
            }
        };

        var time = {
            name: 'time',
            parse: function (_context, value) {
                if (value.type === 15 /* DIMENSION_TOKEN */ ) {
                    switch (value.unit.toLowerCase()) {
                        case 's':
                            return 1000 * value.number;
                        case 'ms':
                            return value.number;
                    }
                }
                throw new Error("Unsupported time type");
            }
        };

        var opacity = {
            name: 'opacity',
            initialValue: '1',
            type: 0 /* VALUE */ ,
            prefix: false,
            parse: function (_context, token) {
                if (isNumberToken(token)) {
                    return token.number;
                }
                return 1;
            }
        };

        var textDecorationColor = {
            name: "text-decoration-color",
            initialValue: 'transparent',
            prefix: false,
            type: 3 /* TYPE_VALUE */ ,
            format: 'color'
        };

        var textDecorationLine = {
            name: 'text-decoration-line',
            initialValue: 'none',
            prefix: false,
            type: 1 /* LIST */ ,
            parse: function (_context, tokens) {
                return tokens
                    .filter(isIdentToken)
                    .map(function (token) {
                        switch (token.value) {
                            case 'underline':
                                return 1 /* UNDERLINE */ ;
                            case 'overline':
                                return 2 /* OVERLINE */ ;
                            case 'line-through':
                                return 3 /* LINE_THROUGH */ ;
                            case 'none':
                                return 4 /* BLINK */ ;
                        }
                        return 0 /* NONE */ ;
                    })
                    .filter(function (line) {
                        return line !== 0 /* NONE */ ;
                    });
            }
        };

        var fontFamily = {
            name: "font-family",
            initialValue: '',
            prefix: false,
            type: 1 /* LIST */ ,
            parse: function (_context, tokens) {
                var accumulator = [];
                var results = [];
                tokens.forEach(function (token) {
                    switch (token.type) {
                        case 20 /* IDENT_TOKEN */ :
                        case 0 /* STRING_TOKEN */ :
                            accumulator.push(token.value);
                            break;
                        case 17 /* NUMBER_TOKEN */ :
                            accumulator.push(token.number.toString());
                            break;
                        case 4 /* COMMA_TOKEN */ :
                            results.push(accumulator.join(' '));
                            accumulator.length = 0;
                            break;
                    }
                });
                if (accumulator.length) {
                    results.push(accumulator.join(' '));
                }
                return results.map(function (result) {
                    return (result.indexOf(' ') === -1 ? result : "'" + result + "'");
                });
            }
        };

        var fontSize = {
            name: "font-size",
            initialValue: '0',
            prefix: false,
            type: 3 /* TYPE_VALUE */ ,
            format: 'length'
        };

        var fontWeight = {
            name: 'font-weight',
            initialValue: 'normal',
            type: 0 /* VALUE */ ,
            prefix: false,
            parse: function (_context, token) {
                if (isNumberToken(token)) {
                    return token.number;
                }
                if (isIdentToken(token)) {
                    switch (token.value) {
                        case 'bold':
                            return 700;
                        case 'normal':
                        default:
                            return 400;
                    }
                }
                return 400;
            }
        };

        var fontVariant = {
            name: 'font-variant',
            initialValue: 'none',
            type: 1 /* LIST */ ,
            prefix: false,
            parse: function (_context, tokens) {
                return tokens.filter(isIdentToken).map(function (token) {
                    return token.value;
                });
            }
        };

        var fontStyle = {
            name: 'font-style',
            initialValue: 'normal',
            prefix: false,
            type: 2 /* IDENT_VALUE */ ,
            parse: function (_context, overflow) {
                switch (overflow) {
                    case 'oblique':
                        return "oblique" /* OBLIQUE */ ;
                    case 'italic':
                        return "italic" /* ITALIC */ ;
                    case 'normal':
                    default:
                        return "normal" /* NORMAL */ ;
                }
            }
        };

        var contains = function (bit, value) {
            return (bit & value) !== 0;
        };

        var content = {
            name: 'content',
            initialValue: 'none',
            type: 1 /* LIST */ ,
            prefix: false,
            parse: function (_context, tokens) {
                if (tokens.length === 0) {
                    return [];
                }
                var first = tokens[0];
                if (first.type === 20 /* IDENT_TOKEN */ && first.value === 'none') {
                    return [];
                }
                return tokens;
            }
        };

        var counterIncrement = {
            name: 'counter-increment',
            initialValue: 'none',
            prefix: true,
            type: 1 /* LIST */ ,
            parse: function (_context, tokens) {
                if (tokens.length === 0) {
                    return null;
                }
                var first = tokens[0];
                if (first.type === 20 /* IDENT_TOKEN */ && first.value === 'none') {
                    return null;
                }
                var increments = [];
                var filtered = tokens.filter(nonWhiteSpace);
                for (var i = 0; i < filtered.length; i++) {
                    var counter = filtered[i];
                    var next = filtered[i + 1];
                    if (counter.type === 20 /* IDENT_TOKEN */ ) {
                        var increment = next && isNumberToken(next) ? next.number : 1;
                        increments.push({
                            counter: counter.value,
                            increment: increment
                        });
                    }
                }
                return increments;
            }
        };

        var counterReset = {
            name: 'counter-reset',
            initialValue: 'none',
            prefix: true,
            type: 1 /* LIST */ ,
            parse: function (_context, tokens) {
                if (tokens.length === 0) {
                    return [];
                }
                var resets = [];
                var filtered = tokens.filter(nonWhiteSpace);
                for (var i = 0; i < filtered.length; i++) {
                    var counter = filtered[i];
                    var next = filtered[i + 1];
                    if (isIdentToken(counter) && counter.value !== 'none') {
                        var reset = next && isNumberToken(next) ? next.number : 0;
                        resets.push({
                            counter: counter.value,
                            reset: reset
                        });
                    }
                }
                return resets;
            }
        };

        var duration = {
            name: 'duration',
            initialValue: '0s',
            prefix: false,
            type: 1 /* LIST */ ,
            parse: function (context, tokens) {
                return tokens.filter(isDimensionToken).map(function (token) {
                    return time.parse(context, token);
                });
            }
        };

        var quotes = {
            name: 'quotes',
            initialValue: 'none',
            prefix: true,
            type: 1 /* LIST */ ,
            parse: function (_context, tokens) {
                if (tokens.length === 0) {
                    return null;
                }
                var first = tokens[0];
                if (first.type === 20 /* IDENT_TOKEN */ && first.value === 'none') {
                    return null;
                }
                var quotes = [];
                var filtered = tokens.filter(isStringToken);
                if (filtered.length % 2 !== 0) {
                    return null;
                }
                for (var i = 0; i < filtered.length; i += 2) {
                    var open_1 = filtered[i].value;
                    var close_1 = filtered[i + 1].value;
                    quotes.push({
                        open: open_1,
                        close: close_1
                    });
                }
                return quotes;
            }
        };
        var getQuote = function (quotes, depth, open) {
            if (!quotes) {
                return '';
            }
            var quote = quotes[Math.min(depth, quotes.length - 1)];
            if (!quote) {
                return '';
            }
            return open ? quote.open : quote.close;
        };

        var boxShadow = {
            name: 'box-shadow',
            initialValue: 'none',
            type: 1 /* LIST */ ,
            prefix: false,
            parse: function (context, tokens) {
                if (tokens.length === 1 && isIdentWithValue(tokens[0], 'none')) {
                    return [];
                }
                return parseFunctionArgs(tokens).map(function (values) {
                    var shadow = {
                        color: 0x000000ff,
                        offsetX: ZERO_LENGTH,
                        offsetY: ZERO_LENGTH,
                        blur: ZERO_LENGTH,
                        spread: ZERO_LENGTH,
                        inset: false
                    };
                    var c = 0;
                    for (var i = 0; i < values.length; i++) {
                        var token = values[i];
                        if (isIdentWithValue(token, 'inset')) {
                            shadow.inset = true;
                        } else if (isLength(token)) {
                            if (c === 0) {
                                shadow.offsetX = token;
                            } else if (c === 1) {
                                shadow.offsetY = token;
                            } else if (c === 2) {
                                shadow.blur = token;
                            } else {
                                shadow.spread = token;
                            }
                            c++;
                        } else {
                            shadow.color = color$1.parse(context, token);
                        }
                    }
                    return shadow;
                });
            }
        };

        var paintOrder = {
            name: 'paint-order',
            initialValue: 'normal',
            prefix: false,
            type: 1 /* LIST */ ,
            parse: function (_context, tokens) {
                var DEFAULT_VALUE = [0 /* FILL */ , 1 /* STROKE */ , 2 /* MARKERS */ ];
                var layers = [];
                tokens.filter(isIdentToken).forEach(function (token) {
                    switch (token.value) {
                        case 'stroke':
                            layers.push(1 /* STROKE */ );
                            break;
                        case 'fill':
                            layers.push(0 /* FILL */ );
                            break;
                        case 'markers':
                            layers.push(2 /* MARKERS */ );
                            break;
                    }
                });
                DEFAULT_VALUE.forEach(function (value) {
                    if (layers.indexOf(value) === -1) {
                        layers.push(value);
                    }
                });
                return layers;
            }
        };

        var webkitTextStrokeColor = {
            name: "-webkit-text-stroke-color",
            initialValue: 'currentcolor',
            prefix: false,
            type: 3 /* TYPE_VALUE */ ,
            format: 'color'
        };

        var webkitTextStrokeWidth = {
            name: "-webkit-text-stroke-width",
            initialValue: '0',
            type: 0 /* VALUE */ ,
            prefix: false,
            parse: function (_context, token) {
                if (isDimensionToken(token)) {
                    return token.number;
                }
                return 0;
            }
        };

        var CSSParsedDeclaration = /** @class */ (function () {
            function CSSParsedDeclaration(context, declaration) {
                var _a, _b;
                this.animationDuration = parse(context, duration, declaration.animationDuration);
                this.backgroundClip = parse(context, backgroundClip, declaration.backgroundClip);
                this.backgroundColor = parse(context, backgroundColor, declaration.backgroundColor);
                this.backgroundImage = parse(context, backgroundImage, declaration.backgroundImage);
                this.backgroundOrigin = parse(context, backgroundOrigin, declaration.backgroundOrigin);
                this.backgroundPosition = parse(context, backgroundPosition, declaration.backgroundPosition);
                this.backgroundRepeat = parse(context, backgroundRepeat, declaration.backgroundRepeat);
                this.backgroundSize = parse(context, backgroundSize, declaration.backgroundSize);
                this.borderTopColor = parse(context, borderTopColor, declaration.borderTopColor);
                this.borderRightColor = parse(context, borderRightColor, declaration.borderRightColor);
                this.borderBottomColor = parse(context, borderBottomColor, declaration.borderBottomColor);
                this.borderLeftColor = parse(context, borderLeftColor, declaration.borderLeftColor);
                this.borderTopLeftRadius = parse(context, borderTopLeftRadius, declaration.borderTopLeftRadius);
                this.borderTopRightRadius = parse(context, borderTopRightRadius, declaration.borderTopRightRadius);
                this.borderBottomRightRadius = parse(context, borderBottomRightRadius, declaration.borderBottomRightRadius);
                this.borderBottomLeftRadius = parse(context, borderBottomLeftRadius, declaration.borderBottomLeftRadius);
                this.borderTopStyle = parse(context, borderTopStyle, declaration.borderTopStyle);
                this.borderRightStyle = parse(context, borderRightStyle, declaration.borderRightStyle);
                this.borderBottomStyle = parse(context, borderBottomStyle, declaration.borderBottomStyle);
                this.borderLeftStyle = parse(context, borderLeftStyle, declaration.borderLeftStyle);
                this.borderTopWidth = parse(context, borderTopWidth, declaration.borderTopWidth);
                this.borderRightWidth = parse(context, borderRightWidth, declaration.borderRightWidth);
                this.borderBottomWidth = parse(context, borderBottomWidth, declaration.borderBottomWidth);
                this.borderLeftWidth = parse(context, borderLeftWidth, declaration.borderLeftWidth);
                this.boxShadow = parse(context, boxShadow, declaration.boxShadow);
                this.color = parse(context, color, declaration.color);
                this.direction = parse(context, direction, declaration.direction);
                this.display = parse(context, display, declaration.display);
                this.float = parse(context, float, declaration.cssFloat);
                this.fontFamily = parse(context, fontFamily, declaration.fontFamily);
                this.fontSize = parse(context, fontSize, declaration.fontSize);
                this.fontStyle = parse(context, fontStyle, declaration.fontStyle);
                this.fontVariant = parse(context, fontVariant, declaration.fontVariant);
                this.fontWeight = parse(context, fontWeight, declaration.fontWeight);
                this.letterSpacing = parse(context, letterSpacing, declaration.letterSpacing);
                this.lineBreak = parse(context, lineBreak, declaration.lineBreak);
                this.lineHeight = parse(context, lineHeight, declaration.lineHeight);
                this.listStyleImage = parse(context, listStyleImage, declaration.listStyleImage);
                this.listStylePosition = parse(context, listStylePosition, declaration.listStylePosition);
                this.listStyleType = parse(context, listStyleType, declaration.listStyleType);
                this.marginTop = parse(context, marginTop, declaration.marginTop);
                this.marginRight = parse(context, marginRight, declaration.marginRight);
                this.marginBottom = parse(context, marginBottom, declaration.marginBottom);
                this.marginLeft = parse(context, marginLeft, declaration.marginLeft);
                this.opacity = parse(context, opacity, declaration.opacity);
                var overflowTuple = parse(context, overflow, declaration.overflow);
                this.overflowX = overflowTuple[0];
                this.overflowY = overflowTuple[overflowTuple.length > 1 ? 1 : 0];
                this.overflowWrap = parse(context, overflowWrap, declaration.overflowWrap);
                this.paddingTop = parse(context, paddingTop, declaration.paddingTop);
                this.paddingRight = parse(context, paddingRight, declaration.paddingRight);
                this.paddingBottom = parse(context, paddingBottom, declaration.paddingBottom);
                this.paddingLeft = parse(context, paddingLeft, declaration.paddingLeft);
                this.paintOrder = parse(context, paintOrder, declaration.paintOrder);
                this.position = parse(context, position, declaration.position);
                this.textAlign = parse(context, textAlign, declaration.textAlign);
                this.textDecorationColor = parse(context, textDecorationColor, (_a = declaration.textDecorationColor) !== null && _a !== void 0 ? _a : declaration.color);
                this.textDecorationLine = parse(context, textDecorationLine, (_b = declaration.textDecorationLine) !== null && _b !== void 0 ? _b : declaration.textDecoration);
                this.textShadow = parse(context, textShadow, declaration.textShadow);
                this.textTransform = parse(context, textTransform, declaration.textTransform);
                this.transform = parse(context, transform$1, declaration.transform);
                this.transformOrigin = parse(context, transformOrigin, declaration.transformOrigin);
                this.visibility = parse(context, visibility, declaration.visibility);
                this.webkitTextStrokeColor = parse(context, webkitTextStrokeColor, declaration.webkitTextStrokeColor);
                this.webkitTextStrokeWidth = parse(context, webkitTextStrokeWidth, declaration.webkitTextStrokeWidth);
                this.wordBreak = parse(context, wordBreak, declaration.wordBreak);
                this.zIndex = parse(context, zIndex, declaration.zIndex);
            }
            CSSParsedDeclaration.prototype.isVisible = function () {
                return this.display > 0 && this.opacity > 0 && this.visibility === 0 /* VISIBLE */ ;
            };
            CSSParsedDeclaration.prototype.isTransparent = function () {
                return isTransparent(this.backgroundColor);
            };
            CSSParsedDeclaration.prototype.isTransformed = function () {
                return this.transform !== null;
            };
            CSSParsedDeclaration.prototype.isPositioned = function () {
                return this.position !== 0 /* STATIC */ ;
            };
            CSSParsedDeclaration.prototype.isPositionedWithZIndex = function () {
                return this.isPositioned() && !this.zIndex.auto;
            };
            CSSParsedDeclaration.prototype.isFloating = function () {
                return this.float !== 0 /* NONE */ ;
            };
            CSSParsedDeclaration.prototype.isInlineLevel = function () {
                return (contains(this.display, 4 /* INLINE */ ) ||
                    contains(this.display, 33554432 /* INLINE_BLOCK */ ) ||
                    contains(this.display, 268435456 /* INLINE_FLEX */ ) ||
                    contains(this.display, 536870912 /* INLINE_GRID */ ) ||
                    contains(this.display, 67108864 /* INLINE_LIST_ITEM */ ) ||
                    contains(this.display, 134217728 /* INLINE_TABLE */ ));
            };
            return CSSParsedDeclaration;
        }());
        var CSSParsedPseudoDeclaration = /** @class */ (function () {
            function CSSParsedPseudoDeclaration(context, declaration) {
                this.content = parse(context, content, declaration.content);
                this.quotes = parse(context, quotes, declaration.quotes);
            }
            return CSSParsedPseudoDeclaration;
        }());
        var CSSParsedCounterDeclaration = /** @class */ (function () {
            function CSSParsedCounterDeclaration(context, declaration) {
                this.counterIncrement = parse(context, counterIncrement, declaration.counterIncrement);
                this.counterReset = parse(context, counterReset, declaration.counterReset);
            }
            return CSSParsedCounterDeclaration;
        }());
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var parse = function (context, descriptor, style) {
            var tokenizer = new Tokenizer();
            var value = style !== null && typeof style !== 'undefined' ? style.toString() : descriptor.initialValue;
            tokenizer.write(value);
            var parser = new Parser(tokenizer.read());
            switch (descriptor.type) {
                case 2 /* IDENT_VALUE */ :
                    var token = parser.parseComponentValue();
                    return descriptor.parse(context, isIdentToken(token) ? token.value : descriptor.initialValue);
                case 0 /* VALUE */ :
                    return descriptor.parse(context, parser.parseComponentValue());
                case 1 /* LIST */ :
                    return descriptor.parse(context, parser.parseComponentValues());
                case 4 /* TOKEN_VALUE */ :
                    return parser.parseComponentValue();
                case 3 /* TYPE_VALUE */ :
                    switch (descriptor.format) {
                        case 'angle':
                            return angle.parse(context, parser.parseComponentValue());
                        case 'color':
                            return color$1.parse(context, parser.parseComponentValue());
                        case 'image':
                            return image.parse(context, parser.parseComponentValue());
                        case 'length':
                            var length_1 = parser.parseComponentValue();
                            return isLength(length_1) ? length_1 : ZERO_LENGTH;
                        case 'length-percentage':
                            var value_1 = parser.parseComponentValue();
                            return isLengthPercentage(value_1) ? value_1 : ZERO_LENGTH;
                        case 'time':
                            return time.parse(context, parser.parseComponentValue());
                    }
                    break;
            }
        };

        var elementDebuggerAttribute = 'data-html2canvas-debug';
        var getElementDebugType = function (element) {
            var attribute = element.getAttribute(elementDebuggerAttribute);
            switch (attribute) {
                case 'all':
                    return 1 /* ALL */ ;
                case 'clone':
                    return 2 /* CLONE */ ;
                case 'parse':
                    return 3 /* PARSE */ ;
                case 'render':
                    return 4 /* RENDER */ ;
                default:
                    return 0 /* NONE */ ;
            }
        };
        var isDebugging = function (element, type) {
            var elementType = getElementDebugType(element);
            return elementType === 1 /* ALL */ || type === elementType;
        };

        var ElementContainer = /** @class */ (function () {
            function ElementContainer(context, element) {
                this.context = context;
                this.textNodes = [];
                this.elements = [];
                this.flags = 0;
                if (isDebugging(element, 3 /* PARSE */ )) {
                    debugger;
                }
                this.styles = new CSSParsedDeclaration(context, window.getComputedStyle(element, null));
                if (isHTMLElementNode(element)) {
                    if (this.styles.animationDuration.some(function (duration) {
                            return duration > 0;
                        })) {
                        element.style.animationDuration = '0s';
                    }
                    if (this.styles.transform !== null) {
                        // getBoundingClientRect takes transforms into account
                        element.style.transform = 'none';
                    }
                }
                this.bounds = parseBounds(this.context, element);
                if (isDebugging(element, 4 /* RENDER */ )) {
                    this.flags |= 16 /* DEBUG_RENDER */ ;
                }
            }
            return ElementContainer;
        }());

        /*
         * text-segmentation 1.0.3 <https://github.com/niklasvh/text-segmentation>
         * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
         * Released under MIT License
         */
        var base64 = 'AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=';

        /*
         * utrie 1.0.2 <https://github.com/niklasvh/utrie>
         * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
         * Released under MIT License
         */
        var chars$1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
        // Use a lookup table to find the index.
        var lookup$1 = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
        for (var i$1 = 0; i$1 < chars$1.length; i$1++) {
            lookup$1[chars$1.charCodeAt(i$1)] = i$1;
        }
        var decode = function (base64) {
            var bufferLength = base64.length * 0.75,
                len = base64.length,
                i, p = 0,
                encoded1, encoded2, encoded3, encoded4;
            if (base64[base64.length - 1] === '=') {
                bufferLength--;
                if (base64[base64.length - 2] === '=') {
                    bufferLength--;
                }
            }
            var buffer = typeof ArrayBuffer !== 'undefined' &&
                typeof Uint8Array !== 'undefined' &&
                typeof Uint8Array.prototype.slice !== 'undefined' ?
                new ArrayBuffer(bufferLength) :
                new Array(bufferLength);
            var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);
            for (i = 0; i < len; i += 4) {
                encoded1 = lookup$1[base64.charCodeAt(i)];
                encoded2 = lookup$1[base64.charCodeAt(i + 1)];
                encoded3 = lookup$1[base64.charCodeAt(i + 2)];
                encoded4 = lookup$1[base64.charCodeAt(i + 3)];
                bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
                bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
                bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
            }
            return buffer;
        };
        var polyUint16Array = function (buffer) {
            var length = buffer.length;
            var bytes = [];
            for (var i = 0; i < length; i += 2) {
                bytes.push((buffer[i + 1] << 8) | buffer[i]);
            }
            return bytes;
        };
        var polyUint32Array = function (buffer) {
            var length = buffer.length;
            var bytes = [];
            for (var i = 0; i < length; i += 4) {
                bytes.push((buffer[i + 3] << 24) | (buffer[i + 2] << 16) | (buffer[i + 1] << 8) | buffer[i]);
            }
            return bytes;
        };

        /** Shift size for getting the index-2 table offset. */
        var UTRIE2_SHIFT_2 = 5;
        /** Shift size for getting the index-1 table offset. */
        var UTRIE2_SHIFT_1 = 6 + 5;
        /**
         * Shift size for shifting left the index array values.
         * Increases possible data size with 16-bit index values at the cost
         * of compactability.
         * This requires data blocks to be aligned by UTRIE2_DATA_GRANULARITY.
         */
        var UTRIE2_INDEX_SHIFT = 2;
        /**
         * Difference between the two shift sizes,
         * for getting an index-1 offset from an index-2 offset. 6=11-5
         */
        var UTRIE2_SHIFT_1_2 = UTRIE2_SHIFT_1 - UTRIE2_SHIFT_2;
        /**
         * The part of the index-2 table for U+D800..U+DBFF stores values for
         * lead surrogate code _units_ not code _points_.
         * Values for lead surrogate code _points_ are indexed with this portion of the table.
         * Length=32=0x20=0x400>>UTRIE2_SHIFT_2. (There are 1024=0x400 lead surrogates.)
         */
        var UTRIE2_LSCP_INDEX_2_OFFSET = 0x10000 >> UTRIE2_SHIFT_2;
        /** Number of entries in a data block. 32=0x20 */
        var UTRIE2_DATA_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_2;
        /** Mask for getting the lower bits for the in-data-block offset. */
        var UTRIE2_DATA_MASK = UTRIE2_DATA_BLOCK_LENGTH - 1;
        var UTRIE2_LSCP_INDEX_2_LENGTH = 0x400 >> UTRIE2_SHIFT_2;
        /** Count the lengths of both BMP pieces. 2080=0x820 */
        var UTRIE2_INDEX_2_BMP_LENGTH = UTRIE2_LSCP_INDEX_2_OFFSET + UTRIE2_LSCP_INDEX_2_LENGTH;
        /**
         * The 2-byte UTF-8 version of the index-2 table follows at offset 2080=0x820.
         * Length 32=0x20 for lead bytes C0..DF, regardless of UTRIE2_SHIFT_2.
         */
        var UTRIE2_UTF8_2B_INDEX_2_OFFSET = UTRIE2_INDEX_2_BMP_LENGTH;
        var UTRIE2_UTF8_2B_INDEX_2_LENGTH = 0x800 >> 6; /* U+0800 is the first code point after 2-byte UTF-8 */
        /**
         * The index-1 table, only used for supplementary code points, at offset 2112=0x840.
         * Variable length, for code points up to highStart, where the last single-value range starts.
         * Maximum length 512=0x200=0x100000>>UTRIE2_SHIFT_1.
         * (For 0x100000 supplementary code points U+10000..U+10ffff.)
         *
         * The part of the index-2 table for supplementary code points starts
         * after this index-1 table.
         *
         * Both the index-1 table and the following part of the index-2 table
         * are omitted completely if there is only BMP data.
         */
        var UTRIE2_INDEX_1_OFFSET = UTRIE2_UTF8_2B_INDEX_2_OFFSET + UTRIE2_UTF8_2B_INDEX_2_LENGTH;
        /**
         * Number of index-1 entries for the BMP. 32=0x20
         * This part of the index-1 table is omitted from the serialized form.
         */
        var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = 0x10000 >> UTRIE2_SHIFT_1;
        /** Number of entries in an index-2 block. 64=0x40 */
        var UTRIE2_INDEX_2_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_1_2;
        /** Mask for getting the lower bits for the in-index-2-block offset. */
        var UTRIE2_INDEX_2_MASK = UTRIE2_INDEX_2_BLOCK_LENGTH - 1;
        var slice16 = function (view, start, end) {
            if (view.slice) {
                return view.slice(start, end);
            }
            return new Uint16Array(Array.prototype.slice.call(view, start, end));
        };
        var slice32 = function (view, start, end) {
            if (view.slice) {
                return view.slice(start, end);
            }
            return new Uint32Array(Array.prototype.slice.call(view, start, end));
        };
        var createTrieFromBase64 = function (base64, _byteLength) {
            var buffer = decode(base64);
            var view32 = Array.isArray(buffer) ? polyUint32Array(buffer) : new Uint32Array(buffer);
            var view16 = Array.isArray(buffer) ? polyUint16Array(buffer) : new Uint16Array(buffer);
            var headerLength = 24;
            var index = slice16(view16, headerLength / 2, view32[4] / 2);
            var data = view32[5] === 2 ?
                slice16(view16, (headerLength + view32[4]) / 2) :
                slice32(view32, Math.ceil((headerLength + view32[4]) / 4));
            return new Trie(view32[0], view32[1], view32[2], view32[3], index, data);
        };
        var Trie = /** @class */ (function () {
            function Trie(initialValue, errorValue, highStart, highValueIndex, index, data) {
                this.initialValue = initialValue;
                this.errorValue = errorValue;
                this.highStart = highStart;
                this.highValueIndex = highValueIndex;
                this.index = index;
                this.data = data;
            }
            /**
             * Get the value for a code point as stored in the Trie.
             *
             * @param codePoint the code point
             * @return the value
             */
            Trie.prototype.get = function (codePoint) {
                var ix;
                if (codePoint >= 0) {
                    if (codePoint < 0x0d800 || (codePoint > 0x0dbff && codePoint <= 0x0ffff)) {
                        // Ordinary BMP code point, excluding leading surrogates.
                        // BMP uses a single level lookup.  BMP index starts at offset 0 in the Trie2 index.
                        // 16 bit data is stored in the index array itself.
                        ix = this.index[codePoint >> UTRIE2_SHIFT_2];
                        ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                        return this.data[ix];
                    }
                    if (codePoint <= 0xffff) {
                        // Lead Surrogate Code Point.  A Separate index section is stored for
                        // lead surrogate code units and code points.
                        //   The main index has the code unit data.
                        //   For this function, we need the code point data.
                        // Note: this expression could be refactored for slightly improved efficiency, but
                        //       surrogate code points will be so rare in practice that it's not worth it.
                        ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET + ((codePoint - 0xd800) >> UTRIE2_SHIFT_2)];
                        ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                        return this.data[ix];
                    }
                    if (codePoint < this.highStart) {
                        // Supplemental code point, use two-level lookup.
                        ix = UTRIE2_INDEX_1_OFFSET - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH + (codePoint >> UTRIE2_SHIFT_1);
                        ix = this.index[ix];
                        ix += (codePoint >> UTRIE2_SHIFT_2) & UTRIE2_INDEX_2_MASK;
                        ix = this.index[ix];
                        ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                        return this.data[ix];
                    }
                    if (codePoint <= 0x10ffff) {
                        return this.data[this.highValueIndex];
                    }
                }
                // Fall through.  The code point is outside of the legal range of 0..0x10ffff.
                return this.errorValue;
            };
            return Trie;
        }());

        /*
         * base64-arraybuffer 1.0.2 <https://github.com/niklasvh/base64-arraybuffer>
         * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
         * Released under MIT License
         */
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
        // Use a lookup table to find the index.
        var lookup = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
        for (var i = 0; i < chars.length; i++) {
            lookup[chars.charCodeAt(i)] = i;
        }

        var Prepend = 1;
        var CR = 2;
        var LF = 3;
        var Control = 4;
        var Extend = 5;
        var SpacingMark = 7;
        var L = 8;
        var V = 9;
        var T = 10;
        var LV = 11;
        var LVT = 12;
        var ZWJ = 13;
        var Extended_Pictographic = 14;
        var RI = 15;
        var toCodePoints = function (str) {
            var codePoints = [];
            var i = 0;
            var length = str.length;
            while (i < length) {
                var value = str.charCodeAt(i++);
                if (value >= 0xd800 && value <= 0xdbff && i < length) {
                    var extra = str.charCodeAt(i++);
                    if ((extra & 0xfc00) === 0xdc00) {
                        codePoints.push(((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000);
                    } else {
                        codePoints.push(value);
                        i--;
                    }
                } else {
                    codePoints.push(value);
                }
            }
            return codePoints;
        };
        var fromCodePoint = function () {
            var codePoints = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                codePoints[_i] = arguments[_i];
            }
            if (String.fromCodePoint) {
                return String.fromCodePoint.apply(String, codePoints);
            }
            var length = codePoints.length;
            if (!length) {
                return '';
            }
            var codeUnits = [];
            var index = -1;
            var result = '';
            while (++index < length) {
                var codePoint = codePoints[index];
                if (codePoint <= 0xffff) {
                    codeUnits.push(codePoint);
                } else {
                    codePoint -= 0x10000;
                    codeUnits.push((codePoint >> 10) + 0xd800, (codePoint % 0x400) + 0xdc00);
                }
                if (index + 1 === length || codeUnits.length > 0x4000) {
                    result += String.fromCharCode.apply(String, codeUnits);
                    codeUnits.length = 0;
                }
            }
            return result;
        };
        var UnicodeTrie = createTrieFromBase64(base64);
        var BREAK_NOT_ALLOWED = '×';
        var BREAK_ALLOWED = '÷';
        var codePointToClass = function (codePoint) {
            return UnicodeTrie.get(codePoint);
        };
        var _graphemeBreakAtIndex = function (_codePoints, classTypes, index) {
            var prevIndex = index - 2;
            var prev = classTypes[prevIndex];
            var current = classTypes[index - 1];
            var next = classTypes[index];
            // GB3 Do not break between a CR and LF
            if (current === CR && next === LF) {
                return BREAK_NOT_ALLOWED;
            }
            // GB4 Otherwise, break before and after controls.
            if (current === CR || current === LF || current === Control) {
                return BREAK_ALLOWED;
            }
            // GB5
            if (next === CR || next === LF || next === Control) {
                return BREAK_ALLOWED;
            }
            // Do not break Hangul syllable sequences.
            // GB6
            if (current === L && [L, V, LV, LVT].indexOf(next) !== -1) {
                return BREAK_NOT_ALLOWED;
            }
            // GB7
            if ((current === LV || current === V) && (next === V || next === T)) {
                return BREAK_NOT_ALLOWED;
            }
            // GB8
            if ((current === LVT || current === T) && next === T) {
                return BREAK_NOT_ALLOWED;
            }
            // GB9 Do not break before extending characters or ZWJ.
            if (next === ZWJ || next === Extend) {
                return BREAK_NOT_ALLOWED;
            }
            // Do not break before SpacingMarks, or after Prepend characters.
            // GB9a
            if (next === SpacingMark) {
                return BREAK_NOT_ALLOWED;
            }
            // GB9a
            if (current === Prepend) {
                return BREAK_NOT_ALLOWED;
            }
            // GB11 Do not break within emoji modifier sequences or emoji zwj sequences.
            if (current === ZWJ && next === Extended_Pictographic) {
                while (prev === Extend) {
                    prev = classTypes[--prevIndex];
                }
                if (prev === Extended_Pictographic) {
                    return BREAK_NOT_ALLOWED;
                }
            }
            // GB12 Do not break within emoji flag sequences.
            // That is, do not break between regional indicator (RI) symbols
            // if there is an odd number of RI characters before the break point.
            if (current === RI && next === RI) {
                var countRI = 0;
                while (prev === RI) {
                    countRI++;
                    prev = classTypes[--prevIndex];
                }
                if (countRI % 2 === 0) {
                    return BREAK_NOT_ALLOWED;
                }
            }
            return BREAK_ALLOWED;
        };
        var GraphemeBreaker = function (str) {
            var codePoints = toCodePoints(str);
            var length = codePoints.length;
            var index = 0;
            var lastEnd = 0;
            var classTypes = codePoints.map(codePointToClass);
            return {
                next: function () {
                    if (index >= length) {
                        return {
                            done: true,
                            value: null
                        };
                    }
                    var graphemeBreak = BREAK_NOT_ALLOWED;
                    while (index < length &&
                        (graphemeBreak = _graphemeBreakAtIndex(codePoints, classTypes, ++index)) === BREAK_NOT_ALLOWED) {}
                    if (graphemeBreak !== BREAK_NOT_ALLOWED || index === length) {
                        var value = fromCodePoint.apply(null, codePoints.slice(lastEnd, index));
                        lastEnd = index;
                        return {
                            value: value,
                            done: false
                        };
                    }
                    return {
                        done: true,
                        value: null
                    };
                },
            };
        };
        var splitGraphemes = function (str) {
            var breaker = GraphemeBreaker(str);
            var graphemes = [];
            var bk;
            while (!(bk = breaker.next()).done) {
                if (bk.value) {
                    graphemes.push(bk.value.slice());
                }
            }
            return graphemes;
        };

        var testRangeBounds = function (document) {
            var TEST_HEIGHT = 123;
            if (document.createRange) {
                var range = document.createRange();
                if (range.getBoundingClientRect) {
                    var testElement = document.createElement('boundtest');
                    testElement.style.height = TEST_HEIGHT + "px";
                    testElement.style.display = 'block';
                    document.body.appendChild(testElement);
                    range.selectNode(testElement);
                    var rangeBounds = range.getBoundingClientRect();
                    var rangeHeight = Math.round(rangeBounds.height);
                    document.body.removeChild(testElement);
                    if (rangeHeight === TEST_HEIGHT) {
                        return true;
                    }
                }
            }
            return false;
        };
        var testIOSLineBreak = function (document) {
            var testElement = document.createElement('boundtest');
            testElement.style.width = '50px';
            testElement.style.display = 'block';
            testElement.style.fontSize = '12px';
            testElement.style.letterSpacing = '0px';
            testElement.style.wordSpacing = '0px';
            document.body.appendChild(testElement);
            var range = document.createRange();
            testElement.innerHTML = typeof ''.repeat === 'function' ? '&#128104;'.repeat(10) : '';
            var node = testElement.firstChild;
            var textList = toCodePoints$1(node.data).map(function (i) {
                return fromCodePoint$1(i);
            });
            var offset = 0;
            var prev = {};
            // ios 13 does not handle range getBoundingClientRect line changes correctly #2177
            var supports = textList.every(function (text, i) {
                range.setStart(node, offset);
                range.setEnd(node, offset + text.length);
                var rect = range.getBoundingClientRect();
                offset += text.length;
                var boundAhead = rect.x > prev.x || rect.y > prev.y;
                prev = rect;
                if (i === 0) {
                    return true;
                }
                return boundAhead;
            });
            document.body.removeChild(testElement);
            return supports;
        };
        var testCORS = function () {
            return typeof new Image().crossOrigin !== 'undefined';
        };
        var testResponseType = function () {
            return typeof new XMLHttpRequest().responseType === 'string';
        };
        var testSVG = function (document) {
            var img = new Image();
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            if (!ctx) {
                return false;
            }
            img.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
            try {
                ctx.drawImage(img, 0, 0);
                canvas.toDataURL();
            } catch (e) {
                return false;
            }
            return true;
        };
        var isGreenPixel = function (data) {
            return data[0] === 0 && data[1] === 255 && data[2] === 0 && data[3] === 255;
        };
        var testForeignObject = function (document) {
            var canvas = document.createElement('canvas');
            var size = 100;
            canvas.width = size;
            canvas.height = size;
            var ctx = canvas.getContext('2d');
            if (!ctx) {
                return Promise.reject(false);
            }
            ctx.fillStyle = 'rgb(0, 255, 0)';
            ctx.fillRect(0, 0, size, size);
            var img = new Image();
            var greenImageSrc = canvas.toDataURL();
            img.src = greenImageSrc;
            var svg = createForeignObjectSVG(size, size, 0, 0, img);
            ctx.fillStyle = 'red';
            ctx.fillRect(0, 0, size, size);
            return loadSerializedSVG$1(svg)
                .then(function (img) {
                    ctx.drawImage(img, 0, 0);
                    var data = ctx.getImageData(0, 0, size, size).data;
                    ctx.fillStyle = 'red';
                    ctx.fillRect(0, 0, size, size);
                    var node = document.createElement('div');
                    node.style.backgroundImage = "url(" + greenImageSrc + ")";
                    node.style.height = size + "px";
                    // Firefox 55 does not render inline <img /> tags
                    return isGreenPixel(data) ?
                        loadSerializedSVG$1(createForeignObjectSVG(size, size, 0, 0, node)) :
                        Promise.reject(false);
                })
                .then(function (img) {
                    ctx.drawImage(img, 0, 0);
                    // Edge does not render background-images
                    return isGreenPixel(ctx.getImageData(0, 0, size, size).data);
                })
                .catch(function () {
                    return false;
                });
        };
        var createForeignObjectSVG = function (width, height, x, y, node) {
            var xmlns = 'http://www.w3.org/2000/svg';
            var svg = document.createElementNS(xmlns, 'svg');
            var foreignObject = document.createElementNS(xmlns, 'foreignObject');
            svg.setAttributeNS(null, 'width', width.toString());
            svg.setAttributeNS(null, 'height', height.toString());
            foreignObject.setAttributeNS(null, 'width', '100%');
            foreignObject.setAttributeNS(null, 'height', '100%');
            foreignObject.setAttributeNS(null, 'x', x.toString());
            foreignObject.setAttributeNS(null, 'y', y.toString());
            foreignObject.setAttributeNS(null, 'externalResourcesRequired', 'true');
            svg.appendChild(foreignObject);
            foreignObject.appendChild(node);
            return svg;
        };
        var loadSerializedSVG$1 = function (svg) {
            return new Promise(function (resolve, reject) {
                var img = new Image();
                img.onload = function () {
                    return resolve(img);
                };
                img.onerror = reject;
                img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(svg));
            });
        };
        var FEATURES = {
            get SUPPORT_RANGE_BOUNDS() {
                var value = testRangeBounds(document);
                Object.defineProperty(FEATURES, 'SUPPORT_RANGE_BOUNDS', {
                    value: value
                });
                return value;
            },
            get SUPPORT_WORD_BREAKING() {
                var value = FEATURES.SUPPORT_RANGE_BOUNDS && testIOSLineBreak(document);
                Object.defineProperty(FEATURES, 'SUPPORT_WORD_BREAKING', {
                    value: value
                });
                return value;
            },
            get SUPPORT_SVG_DRAWING() {
                var value = testSVG(document);
                Object.defineProperty(FEATURES, 'SUPPORT_SVG_DRAWING', {
                    value: value
                });
                return value;
            },
            get SUPPORT_FOREIGNOBJECT_DRAWING() {
                var value = typeof Array.from === 'function' && typeof window.fetch === 'function' ?
                    testForeignObject(document) :
                    Promise.resolve(false);
                Object.defineProperty(FEATURES, 'SUPPORT_FOREIGNOBJECT_DRAWING', {
                    value: value
                });
                return value;
            },
            get SUPPORT_CORS_IMAGES() {
                var value = testCORS();
                Object.defineProperty(FEATURES, 'SUPPORT_CORS_IMAGES', {
                    value: value
                });
                return value;
            },
            get SUPPORT_RESPONSE_TYPE() {
                var value = testResponseType();
                Object.defineProperty(FEATURES, 'SUPPORT_RESPONSE_TYPE', {
                    value: value
                });
                return value;
            },
            get SUPPORT_CORS_XHR() {
                var value = 'withCredentials' in new XMLHttpRequest();
                Object.defineProperty(FEATURES, 'SUPPORT_CORS_XHR', {
                    value: value
                });
                return value;
            },
            get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                var value = !!(typeof Intl !== 'undefined' && Intl.Segmenter);
                Object.defineProperty(FEATURES, 'SUPPORT_NATIVE_TEXT_SEGMENTATION', {
                    value: value
                });
                return value;
            }
        };

        var TextBounds = /** @class */ (function () {
            function TextBounds(text, bounds) {
                this.text = text;
                this.bounds = bounds;
            }
            return TextBounds;
        }());
        var parseTextBounds = function (context, value, styles, node) {
            var textList = breakText(value, styles);
            var textBounds = [];
            var offset = 0;
            textList.forEach(function (text) {
                if (styles.textDecorationLine.length || text.trim().length > 0) {
                    if (FEATURES.SUPPORT_RANGE_BOUNDS) {
                        var clientRects = createRange(node, offset, text.length).getClientRects();
                        if (clientRects.length > 1) {
                            var subSegments = segmentGraphemes(text);
                            var subOffset_1 = 0;
                            subSegments.forEach(function (subSegment) {
                                textBounds.push(new TextBounds(subSegment, Bounds.fromDOMRectList(context, createRange(node, subOffset_1 + offset, subSegment.length).getClientRects())));
                                subOffset_1 += subSegment.length;
                            });
                        } else {
                            textBounds.push(new TextBounds(text, Bounds.fromDOMRectList(context, clientRects)));
                        }
                    } else {
                        var replacementNode = node.splitText(text.length);
                        textBounds.push(new TextBounds(text, getWrapperBounds(context, node)));
                        node = replacementNode;
                    }
                } else if (!FEATURES.SUPPORT_RANGE_BOUNDS) {
                    node = node.splitText(text.length);
                }
                offset += text.length;
            });
            return textBounds;
        };
        var getWrapperBounds = function (context, node) {
            var ownerDocument = node.ownerDocument;
            if (ownerDocument) {
                var wrapper = ownerDocument.createElement('html2canvaswrapper');
                wrapper.appendChild(node.cloneNode(true));
                var parentNode = node.parentNode;
                if (parentNode) {
                    parentNode.replaceChild(wrapper, node);
                    var bounds = parseBounds(context, wrapper);
                    if (wrapper.firstChild) {
                        parentNode.replaceChild(wrapper.firstChild, wrapper);
                    }
                    return bounds;
                }
            }
            return Bounds.EMPTY;
        };
        var createRange = function (node, offset, length) {
            var ownerDocument = node.ownerDocument;
            if (!ownerDocument) {
                throw new Error('Node has no owner document');
            }
            var range = ownerDocument.createRange();
            range.setStart(node, offset);
            range.setEnd(node, offset + length);
            return range;
        };
        var segmentGraphemes = function (value) {
            if (FEATURES.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                var segmenter = new Intl.Segmenter(void 0, {
                    granularity: 'grapheme'
                });
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                return Array.from(segmenter.segment(value)).map(function (segment) {
                    return segment.segment;
                });
            }
            return splitGraphemes(value);
        };
        var segmentWords = function (value, styles) {
            if (FEATURES.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                var segmenter = new Intl.Segmenter(void 0, {
                    granularity: 'word'
                });
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                return Array.from(segmenter.segment(value)).map(function (segment) {
                    return segment.segment;
                });
            }
            return breakWords(value, styles);
        };
        var breakText = function (value, styles) {
            return styles.letterSpacing !== 0 ? segmentGraphemes(value) : segmentWords(value, styles);
        };
        // https://drafts.csswg.org/css-text/#word-separator
        var wordSeparators = [0x0020, 0x00a0, 0x1361, 0x10100, 0x10101, 0x1039, 0x1091];
        var breakWords = function (str, styles) {
            var breaker = LineBreaker(str, {
                lineBreak: styles.lineBreak,
                wordBreak: styles.overflowWrap === "break-word" /* BREAK_WORD */ ? 'break-word' : styles.wordBreak
            });
            var words = [];
            var bk;
            var _loop_1 = function () {
                if (bk.value) {
                    var value = bk.value.slice();
                    var codePoints = toCodePoints$1(value);
                    var word_1 = '';
                    codePoints.forEach(function (codePoint) {
                        if (wordSeparators.indexOf(codePoint) === -1) {
                            word_1 += fromCodePoint$1(codePoint);
                        } else {
                            if (word_1.length) {
                                words.push(word_1);
                            }
                            words.push(fromCodePoint$1(codePoint));
                            word_1 = '';
                        }
                    });
                    if (word_1.length) {
                        words.push(word_1);
                    }
                }
            };
            while (!(bk = breaker.next()).done) {
                _loop_1();
            }
            return words;
        };

        var TextContainer = /** @class */ (function () {
            function TextContainer(context, node, styles) {
                this.text = transform(node.data, styles.textTransform);
                this.textBounds = parseTextBounds(context, this.text, styles, node);
            }
            return TextContainer;
        }());
        var transform = function (text, transform) {
            switch (transform) {
                case 1 /* LOWERCASE */ :
                    return text.toLowerCase();
                case 3 /* CAPITALIZE */ :
                    return text.replace(CAPITALIZE, capitalize);
                case 2 /* UPPERCASE */ :
                    return text.toUpperCase();
                default:
                    return text;
            }
        };
        var CAPITALIZE = /(^|\s|:|-|\(|\))([a-z])/g;
        var capitalize = function (m, p1, p2) {
            if (m.length > 0) {
                return p1 + p2.toUpperCase();
            }
            return m;
        };

        var ImageElementContainer = /** @class */ (function (_super) {
            __extends(ImageElementContainer, _super);

            function ImageElementContainer(context, img) {
                var _this = _super.call(this, context, img) || this;
                _this.src = img.currentSrc || img.src;
                _this.intrinsicWidth = img.naturalWidth;
                _this.intrinsicHeight = img.naturalHeight;
                _this.context.cache.addImage(_this.src);
                return _this;
            }
            return ImageElementContainer;
        }(ElementContainer));

        var CanvasElementContainer = /** @class */ (function (_super) {
            __extends(CanvasElementContainer, _super);

            function CanvasElementContainer(context, canvas) {
                var _this = _super.call(this, context, canvas) || this;
                _this.canvas = canvas;
                _this.intrinsicWidth = canvas.width;
                _this.intrinsicHeight = canvas.height;
                return _this;
            }
            return CanvasElementContainer;
        }(ElementContainer));

        var SVGElementContainer = /** @class */ (function (_super) {
            __extends(SVGElementContainer, _super);

            function SVGElementContainer(context, img) {
                var _this = _super.call(this, context, img) || this;
                var s = new XMLSerializer();
                var bounds = parseBounds(context, img);
                img.setAttribute('width', bounds.width + "px");
                img.setAttribute('height', bounds.height + "px");
                _this.svg = "data:image/svg+xml," + encodeURIComponent(s.serializeToString(img));
                _this.intrinsicWidth = img.width.baseVal.value;
                _this.intrinsicHeight = img.height.baseVal.value;
                _this.context.cache.addImage(_this.svg);
                return _this;
            }
            return SVGElementContainer;
        }(ElementContainer));

        var LIElementContainer = /** @class */ (function (_super) {
            __extends(LIElementContainer, _super);

            function LIElementContainer(context, element) {
                var _this = _super.call(this, context, element) || this;
                _this.value = element.value;
                return _this;
            }
            return LIElementContainer;
        }(ElementContainer));

        var OLElementContainer = /** @class */ (function (_super) {
            __extends(OLElementContainer, _super);

            function OLElementContainer(context, element) {
                var _this = _super.call(this, context, element) || this;
                _this.start = element.start;
                _this.reversed = typeof element.reversed === 'boolean' && element.reversed === true;
                return _this;
            }
            return OLElementContainer;
        }(ElementContainer));

        var CHECKBOX_BORDER_RADIUS = [{
            type: 15 /* DIMENSION_TOKEN */ ,
            flags: 0,
            unit: 'px',
            number: 3
        }];
        var RADIO_BORDER_RADIUS = [{
            type: 16 /* PERCENTAGE_TOKEN */ ,
            flags: 0,
            number: 50
        }];
        var reformatInputBounds = function (bounds) {
            if (bounds.width > bounds.height) {
                return new Bounds(bounds.left + (bounds.width - bounds.height) / 2, bounds.top, bounds.height, bounds.height);
            } else if (bounds.width < bounds.height) {
                return new Bounds(bounds.left, bounds.top + (bounds.height - bounds.width) / 2, bounds.width, bounds.width);
            }
            return bounds;
        };
        var getInputValue = function (node) {
            var value = node.type === PASSWORD ? new Array(node.value.length + 1).join('\u2022') : node.value;
            return value.length === 0 ? node.placeholder || '' : value;
        };
        var CHECKBOX = 'checkbox';
        var RADIO = 'radio';
        var PASSWORD = 'password';
        var INPUT_COLOR = 0x2a2a2aff;
        var InputElementContainer = /** @class */ (function (_super) {
            __extends(InputElementContainer, _super);

            function InputElementContainer(context, input) {
                var _this = _super.call(this, context, input) || this;
                _this.type = input.type.toLowerCase();
                _this.checked = input.checked;
                _this.value = getInputValue(input);
                if (_this.type === CHECKBOX || _this.type === RADIO) {
                    _this.styles.backgroundColor = 0xdededeff;
                    _this.styles.borderTopColor =
                        _this.styles.borderRightColor =
                        _this.styles.borderBottomColor =
                        _this.styles.borderLeftColor =
                        0xa5a5a5ff;
                    _this.styles.borderTopWidth =
                        _this.styles.borderRightWidth =
                        _this.styles.borderBottomWidth =
                        _this.styles.borderLeftWidth =
                        1;
                    _this.styles.borderTopStyle =
                        _this.styles.borderRightStyle =
                        _this.styles.borderBottomStyle =
                        _this.styles.borderLeftStyle =
                        1 /* SOLID */ ;
                    _this.styles.backgroundClip = [0 /* BORDER_BOX */ ];
                    _this.styles.backgroundOrigin = [0 /* BORDER_BOX */ ];
                    _this.bounds = reformatInputBounds(_this.bounds);
                }
                switch (_this.type) {
                    case CHECKBOX:
                        _this.styles.borderTopRightRadius =
                            _this.styles.borderTopLeftRadius =
                            _this.styles.borderBottomRightRadius =
                            _this.styles.borderBottomLeftRadius =
                            CHECKBOX_BORDER_RADIUS;
                        break;
                    case RADIO:
                        _this.styles.borderTopRightRadius =
                            _this.styles.borderTopLeftRadius =
                            _this.styles.borderBottomRightRadius =
                            _this.styles.borderBottomLeftRadius =
                            RADIO_BORDER_RADIUS;
                        break;
                }
                return _this;
            }
            return InputElementContainer;
        }(ElementContainer));

        var SelectElementContainer = /** @class */ (function (_super) {
            __extends(SelectElementContainer, _super);

            function SelectElementContainer(context, element) {
                var _this = _super.call(this, context, element) || this;
                var option = element.options[element.selectedIndex || 0];
                _this.value = option ? option.text || '' : '';
                return _this;
            }
            return SelectElementContainer;
        }(ElementContainer));

        var TextareaElementContainer = /** @class */ (function (_super) {
            __extends(TextareaElementContainer, _super);

            function TextareaElementContainer(context, element) {
                var _this = _super.call(this, context, element) || this;
                _this.value = element.value;
                return _this;
            }
            return TextareaElementContainer;
        }(ElementContainer));

        var IFrameElementContainer = /** @class */ (function (_super) {
            __extends(IFrameElementContainer, _super);

            function IFrameElementContainer(context, iframe) {
                var _this = _super.call(this, context, iframe) || this;
                _this.src = iframe.src;
                _this.width = parseInt(iframe.width, 10) || 0;
                _this.height = parseInt(iframe.height, 10) || 0;
                _this.backgroundColor = _this.styles.backgroundColor;
                try {
                    if (iframe.contentWindow &&
                        iframe.contentWindow.document &&
                        iframe.contentWindow.document.documentElement) {
                        _this.tree = parseTree(context, iframe.contentWindow.document.documentElement);
                        // http://www.w3.org/TR/css3-background/#special-backgrounds
                        var documentBackgroundColor = iframe.contentWindow.document.documentElement ?
                            parseColor(context, getComputedStyle(iframe.contentWindow.document.documentElement).backgroundColor) :
                            COLORS.TRANSPARENT;
                        var bodyBackgroundColor = iframe.contentWindow.document.body ?
                            parseColor(context, getComputedStyle(iframe.contentWindow.document.body).backgroundColor) :
                            COLORS.TRANSPARENT;
                        _this.backgroundColor = isTransparent(documentBackgroundColor) ?
                            isTransparent(bodyBackgroundColor) ?
                            _this.styles.backgroundColor :
                            bodyBackgroundColor :
                            documentBackgroundColor;
                    }
                } catch (e) {}
                return _this;
            }
            return IFrameElementContainer;
        }(ElementContainer));

        var LIST_OWNERS = ['OL', 'UL', 'MENU'];
        var parseNodeTree = function (context, node, parent, root) {
            for (var childNode = node.firstChild, nextNode = void 0; childNode; childNode = nextNode) {
                nextNode = childNode.nextSibling;
                if (isTextNode(childNode) && childNode.data.trim().length > 0) {
                    parent.textNodes.push(new TextContainer(context, childNode, parent.styles));
                } else if (isElementNode(childNode)) {
                    if (isSlotElement(childNode) && childNode.assignedNodes) {
                        childNode.assignedNodes().forEach(function (childNode) {
                            return parseNodeTree(context, childNode, parent, root);
                        });
                    } else {
                        var container = createContainer(context, childNode);
                        if (container.styles.isVisible()) {
                            if (createsRealStackingContext(childNode, container, root)) {
                                container.flags |= 4 /* CREATES_REAL_STACKING_CONTEXT */ ;
                            } else if (createsStackingContext(container.styles)) {
                                container.flags |= 2 /* CREATES_STACKING_CONTEXT */ ;
                            }
                            if (LIST_OWNERS.indexOf(childNode.tagName) !== -1) {
                                container.flags |= 8 /* IS_LIST_OWNER */ ;
                            }
                            parent.elements.push(container);
                            childNode.slot;
                            if (childNode.shadowRoot) {
                                parseNodeTree(context, childNode.shadowRoot, container, root);
                            } else if (!isTextareaElement(childNode) &&
                                !isSVGElement(childNode) &&
                                !isSelectElement(childNode)) {
                                parseNodeTree(context, childNode, container, root);
                            }
                        }
                    }
                }
            }
        };
        var createContainer = function (context, element) {
            if (isImageElement(element)) {
                return new ImageElementContainer(context, element);
            }
            if (isCanvasElement(element)) {
                return new CanvasElementContainer(context, element);
            }
            if (isSVGElement(element)) {
                return new SVGElementContainer(context, element);
            }
            if (isLIElement(element)) {
                return new LIElementContainer(context, element);
            }
            if (isOLElement(element)) {
                return new OLElementContainer(context, element);
            }
            if (isInputElement(element)) {
                return new InputElementContainer(context, element);
            }
            if (isSelectElement(element)) {
                return new SelectElementContainer(context, element);
            }
            if (isTextareaElement(element)) {
                return new TextareaElementContainer(context, element);
            }
            if (isIFrameElement(element)) {
                return new IFrameElementContainer(context, element);
            }
            return new ElementContainer(context, element);
        };
        var parseTree = function (context, element) {
            var container = createContainer(context, element);
            container.flags |= 4 /* CREATES_REAL_STACKING_CONTEXT */ ;
            parseNodeTree(context, element, container, container);
            return container;
        };
        var createsRealStackingContext = function (node, container, root) {
            return (container.styles.isPositionedWithZIndex() ||
                container.styles.opacity < 1 ||
                container.styles.isTransformed() ||
                (isBodyElement(node) && root.styles.isTransparent()));
        };
        var createsStackingContext = function (styles) {
            return styles.isPositioned() || styles.isFloating();
        };
        var isTextNode = function (node) {
            return node.nodeType === Node.TEXT_NODE;
        };
        var isElementNode = function (node) {
            return node.nodeType === Node.ELEMENT_NODE;
        };
        var isHTMLElementNode = function (node) {
            return isElementNode(node) && typeof node.style !== 'undefined' && !isSVGElementNode(node);
        };
        var isSVGElementNode = function (element) {
            return typeof element.className === 'object';
        };
        var isLIElement = function (node) {
            return node.tagName === 'LI';
        };
        var isOLElement = function (node) {
            return node.tagName === 'OL';
        };
        var isInputElement = function (node) {
            return node.tagName === 'INPUT';
        };
        var isHTMLElement = function (node) {
            return node.tagName === 'HTML';
        };
        var isSVGElement = function (node) {
            return node.tagName === 'svg';
        };
        var isBodyElement = function (node) {
            return node.tagName === 'BODY';
        };
        var isCanvasElement = function (node) {
            return node.tagName === 'CANVAS';
        };
        var isVideoElement = function (node) {
            return node.tagName === 'VIDEO';
        };
        var isImageElement = function (node) {
            return node.tagName === 'IMG';
        };
        var isIFrameElement = function (node) {
            return node.tagName === 'IFRAME';
        };
        var isStyleElement = function (node) {
            return node.tagName === 'STYLE';
        };
        var isScriptElement = function (node) {
            return node.tagName === 'SCRIPT';
        };
        var isTextareaElement = function (node) {
            return node.tagName === 'TEXTAREA';
        };
        var isSelectElement = function (node) {
            return node.tagName === 'SELECT';
        };
        var isSlotElement = function (node) {
            return node.tagName === 'SLOT';
        };
        // https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name
        var isCustomElement = function (node) {
            return node.tagName.indexOf('-') > 0;
        };

        var CounterState = /** @class */ (function () {
            function CounterState() {
                this.counters = {};
            }
            CounterState.prototype.getCounterValue = function (name) {
                var counter = this.counters[name];
                if (counter && counter.length) {
                    return counter[counter.length - 1];
                }
                return 1;
            };
            CounterState.prototype.getCounterValues = function (name) {
                var counter = this.counters[name];
                return counter ? counter : [];
            };
            CounterState.prototype.pop = function (counters) {
                var _this = this;
                counters.forEach(function (counter) {
                    return _this.counters[counter].pop();
                });
            };
            CounterState.prototype.parse = function (style) {
                var _this = this;
                var counterIncrement = style.counterIncrement;
                var counterReset = style.counterReset;
                var canReset = true;
                if (counterIncrement !== null) {
                    counterIncrement.forEach(function (entry) {
                        var counter = _this.counters[entry.counter];
                        if (counter && entry.increment !== 0) {
                            canReset = false;
                            if (!counter.length) {
                                counter.push(1);
                            }
                            counter[Math.max(0, counter.length - 1)] += entry.increment;
                        }
                    });
                }
                var counterNames = [];
                if (canReset) {
                    counterReset.forEach(function (entry) {
                        var counter = _this.counters[entry.counter];
                        counterNames.push(entry.counter);
                        if (!counter) {
                            counter = _this.counters[entry.counter] = [];
                        }
                        counter.push(entry.reset);
                    });
                }
                return counterNames;
            };
            return CounterState;
        }());
        var ROMAN_UPPER = {
            integers: [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
            values: ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
        };
        var ARMENIAN = {
            integers: [
                9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70,
                60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
            ],
            values: [
                'Ք',
                'Փ',
                'Ւ',
                'Ց',
                'Ր',
                'Տ',
                'Վ',
                'Ս',
                'Ռ',
                'Ջ',
                'Պ',
                'Չ',
                'Ո',
                'Շ',
                'Ն',
                'Յ',
                'Մ',
                'Ճ',
                'Ղ',
                'Ձ',
                'Հ',
                'Կ',
                'Ծ',
                'Խ',
                'Լ',
                'Ի',
                'Ժ',
                'Թ',
                'Ը',
                'Է',
                'Զ',
                'Ե',
                'Դ',
                'Գ',
                'Բ',
                'Ա'
            ]
        };
        var HEBREW = {
            integers: [
                10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20,
                19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
            ],
            values: [
                'י׳',
                'ט׳',
                'ח׳',
                'ז׳',
                'ו׳',
                'ה׳',
                'ד׳',
                'ג׳',
                'ב׳',
                'א׳',
                'ת',
                'ש',
                'ר',
                'ק',
                'צ',
                'פ',
                'ע',
                'ס',
                'נ',
                'מ',
                'ל',
                'כ',
                'יט',
                'יח',
                'יז',
                'טז',
                'טו',
                'י',
                'ט',
                'ח',
                'ז',
                'ו',
                'ה',
                'ד',
                'ג',
                'ב',
                'א'
            ]
        };
        var GEORGIAN = {
            integers: [
                10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90,
                80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
            ],
            values: [
                'ჵ',
                'ჰ',
                'ჯ',
                'ჴ',
                'ხ',
                'ჭ',
                'წ',
                'ძ',
                'ც',
                'ჩ',
                'შ',
                'ყ',
                'ღ',
                'ქ',
                'ფ',
                'ჳ',
                'ტ',
                'ს',
                'რ',
                'ჟ',
                'პ',
                'ო',
                'ჲ',
                'ნ',
                'მ',
                'ლ',
                'კ',
                'ი',
                'თ',
                'ჱ',
                'ზ',
                'ვ',
                'ე',
                'დ',
                'გ',
                'ბ',
                'ა'
            ]
        };
        var createAdditiveCounter = function (value, min, max, symbols, fallback, suffix) {
            if (value < min || value > max) {
                return createCounterText(value, fallback, suffix.length > 0);
            }
            return (symbols.integers.reduce(function (string, integer, index) {
                while (value >= integer) {
                    value -= integer;
                    string += symbols.values[index];
                }
                return string;
            }, '') + suffix);
        };
        var createCounterStyleWithSymbolResolver = function (value, codePointRangeLength, isNumeric, resolver) {
            var string = '';
            do {
                if (!isNumeric) {
                    value--;
                }
                string = resolver(value) + string;
                value /= codePointRangeLength;
            } while (value * codePointRangeLength >= codePointRangeLength);
            return string;
        };
        var createCounterStyleFromRange = function (value, codePointRangeStart, codePointRangeEnd, isNumeric, suffix) {
            var codePointRangeLength = codePointRangeEnd - codePointRangeStart + 1;
            return ((value < 0 ? '-' : '') +
                (createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, isNumeric, function (codePoint) {
                        return fromCodePoint$1(Math.floor(codePoint % codePointRangeLength) + codePointRangeStart);
                    }) +
                    suffix));
        };
        var createCounterStyleFromSymbols = function (value, symbols, suffix) {
            if (suffix === void 0) {
                suffix = '. ';
            }
            var codePointRangeLength = symbols.length;
            return (createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, false, function (codePoint) {
                return symbols[Math.floor(codePoint % codePointRangeLength)];
            }) + suffix);
        };
        var CJK_ZEROS = 1 << 0;
        var CJK_TEN_COEFFICIENTS = 1 << 1;
        var CJK_TEN_HIGH_COEFFICIENTS = 1 << 2;
        var CJK_HUNDRED_COEFFICIENTS = 1 << 3;
        var createCJKCounter = function (value, numbers, multipliers, negativeSign, suffix, flags) {
            if (value < -9999 || value > 9999) {
                return createCounterText(value, 4 /* CJK_DECIMAL */ , suffix.length > 0);
            }
            var tmp = Math.abs(value);
            var string = suffix;
            if (tmp === 0) {
                return numbers[0] + string;
            }
            for (var digit = 0; tmp > 0 && digit <= 4; digit++) {
                var coefficient = tmp % 10;
                if (coefficient === 0 && contains(flags, CJK_ZEROS) && string !== '') {
                    string = numbers[coefficient] + string;
                } else if (coefficient > 1 ||
                    (coefficient === 1 && digit === 0) ||
                    (coefficient === 1 && digit === 1 && contains(flags, CJK_TEN_COEFFICIENTS)) ||
                    (coefficient === 1 && digit === 1 && contains(flags, CJK_TEN_HIGH_COEFFICIENTS) && value > 100) ||
                    (coefficient === 1 && digit > 1 && contains(flags, CJK_HUNDRED_COEFFICIENTS))) {
                    string = numbers[coefficient] + (digit > 0 ? multipliers[digit - 1] : '') + string;
                } else if (coefficient === 1 && digit > 0) {
                    string = multipliers[digit - 1] + string;
                }
                tmp = Math.floor(tmp / 10);
            }
            return (value < 0 ? negativeSign : '') + string;
        };
        var CHINESE_INFORMAL_MULTIPLIERS = '十百千萬';
        var CHINESE_FORMAL_MULTIPLIERS = '拾佰仟萬';
        var JAPANESE_NEGATIVE = 'マイナス';
        var KOREAN_NEGATIVE = '마이너스';
        var createCounterText = function (value, type, appendSuffix) {
            var defaultSuffix = appendSuffix ? '. ' : '';
            var cjkSuffix = appendSuffix ? '、' : '';
            var koreanSuffix = appendSuffix ? ', ' : '';
            var spaceSuffix = appendSuffix ? ' ' : '';
            switch (type) {
                case 0 /* DISC */ :
                    return '•' + spaceSuffix;
                case 1 /* CIRCLE */ :
                    return '◦' + spaceSuffix;
                case 2 /* SQUARE */ :
                    return '◾' + spaceSuffix;
                case 5 /* DECIMAL_LEADING_ZERO */ :
                    var string = createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
                    return string.length < 4 ? "0" + string : string;
                case 4 /* CJK_DECIMAL */ :
                    return createCounterStyleFromSymbols(value, '〇一二三四五六七八九', cjkSuffix);
                case 6 /* LOWER_ROMAN */ :
                    return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, 3 /* DECIMAL */ , defaultSuffix).toLowerCase();
                case 7 /* UPPER_ROMAN */ :
                    return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, 3 /* DECIMAL */ , defaultSuffix);
                case 8 /* LOWER_GREEK */ :
                    return createCounterStyleFromRange(value, 945, 969, false, defaultSuffix);
                case 9 /* LOWER_ALPHA */ :
                    return createCounterStyleFromRange(value, 97, 122, false, defaultSuffix);
                case 10 /* UPPER_ALPHA */ :
                    return createCounterStyleFromRange(value, 65, 90, false, defaultSuffix);
                case 11 /* ARABIC_INDIC */ :
                    return createCounterStyleFromRange(value, 1632, 1641, true, defaultSuffix);
                case 12 /* ARMENIAN */ :
                case 49 /* UPPER_ARMENIAN */ :
                    return createAdditiveCounter(value, 1, 9999, ARMENIAN, 3 /* DECIMAL */ , defaultSuffix);
                case 35 /* LOWER_ARMENIAN */ :
                    return createAdditiveCounter(value, 1, 9999, ARMENIAN, 3 /* DECIMAL */ , defaultSuffix).toLowerCase();
                case 13 /* BENGALI */ :
                    return createCounterStyleFromRange(value, 2534, 2543, true, defaultSuffix);
                case 14 /* CAMBODIAN */ :
                case 30 /* KHMER */ :
                    return createCounterStyleFromRange(value, 6112, 6121, true, defaultSuffix);
                case 15 /* CJK_EARTHLY_BRANCH */ :
                    return createCounterStyleFromSymbols(value, '子丑寅卯辰巳午未申酉戌亥', cjkSuffix);
                case 16 /* CJK_HEAVENLY_STEM */ :
                    return createCounterStyleFromSymbols(value, '甲乙丙丁戊己庚辛壬癸', cjkSuffix);
                case 17 /* CJK_IDEOGRAPHIC */ :
                case 48 /* TRAD_CHINESE_INFORMAL */ :
                    return createCJKCounter(value, '零一二三四五六七八九', CHINESE_INFORMAL_MULTIPLIERS, '負', cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
                case 47 /* TRAD_CHINESE_FORMAL */ :
                    return createCJKCounter(value, '零壹貳參肆伍陸柒捌玖', CHINESE_FORMAL_MULTIPLIERS, '負', cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
                case 42 /* SIMP_CHINESE_INFORMAL */ :
                    return createCJKCounter(value, '零一二三四五六七八九', CHINESE_INFORMAL_MULTIPLIERS, '负', cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
                case 41 /* SIMP_CHINESE_FORMAL */ :
                    return createCJKCounter(value, '零壹贰叁肆伍陆柒捌玖', CHINESE_FORMAL_MULTIPLIERS, '负', cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
                case 26 /* JAPANESE_INFORMAL */ :
                    return createCJKCounter(value, '〇一二三四五六七八九', '十百千万', JAPANESE_NEGATIVE, cjkSuffix, 0);
                case 25 /* JAPANESE_FORMAL */ :
                    return createCJKCounter(value, '零壱弐参四伍六七八九', '拾百千万', JAPANESE_NEGATIVE, cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
                case 31 /* KOREAN_HANGUL_FORMAL */ :
                    return createCJKCounter(value, '영일이삼사오육칠팔구', '십백천만', KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
                case 33 /* KOREAN_HANJA_INFORMAL */ :
                    return createCJKCounter(value, '零一二三四五六七八九', '十百千萬', KOREAN_NEGATIVE, koreanSuffix, 0);
                case 32 /* KOREAN_HANJA_FORMAL */ :
                    return createCJKCounter(value, '零壹貳參四五六七八九', '拾百千', KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
                case 18 /* DEVANAGARI */ :
                    return createCounterStyleFromRange(value, 0x966, 0x96f, true, defaultSuffix);
                case 20 /* GEORGIAN */ :
                    return createAdditiveCounter(value, 1, 19999, GEORGIAN, 3 /* DECIMAL */ , defaultSuffix);
                case 21 /* GUJARATI */ :
                    return createCounterStyleFromRange(value, 0xae6, 0xaef, true, defaultSuffix);
                case 22 /* GURMUKHI */ :
                    return createCounterStyleFromRange(value, 0xa66, 0xa6f, true, defaultSuffix);
                case 22 /* HEBREW */ :
                    return createAdditiveCounter(value, 1, 10999, HEBREW, 3 /* DECIMAL */ , defaultSuffix);
                case 23 /* HIRAGANA */ :
                    return createCounterStyleFromSymbols(value, 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん');
                case 24 /* HIRAGANA_IROHA */ :
                    return createCounterStyleFromSymbols(value, 'いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす');
                case 27 /* KANNADA */ :
                    return createCounterStyleFromRange(value, 0xce6, 0xcef, true, defaultSuffix);
                case 28 /* KATAKANA */ :
                    return createCounterStyleFromSymbols(value, 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン', cjkSuffix);
                case 29 /* KATAKANA_IROHA */ :
                    return createCounterStyleFromSymbols(value, 'イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス', cjkSuffix);
                case 34 /* LAO */ :
                    return createCounterStyleFromRange(value, 0xed0, 0xed9, true, defaultSuffix);
                case 37 /* MONGOLIAN */ :
                    return createCounterStyleFromRange(value, 0x1810, 0x1819, true, defaultSuffix);
                case 38 /* MYANMAR */ :
                    return createCounterStyleFromRange(value, 0x1040, 0x1049, true, defaultSuffix);
                case 39 /* ORIYA */ :
                    return createCounterStyleFromRange(value, 0xb66, 0xb6f, true, defaultSuffix);
                case 40 /* PERSIAN */ :
                    return createCounterStyleFromRange(value, 0x6f0, 0x6f9, true, defaultSuffix);
                case 43 /* TAMIL */ :
                    return createCounterStyleFromRange(value, 0xbe6, 0xbef, true, defaultSuffix);
                case 44 /* TELUGU */ :
                    return createCounterStyleFromRange(value, 0xc66, 0xc6f, true, defaultSuffix);
                case 45 /* THAI */ :
                    return createCounterStyleFromRange(value, 0xe50, 0xe59, true, defaultSuffix);
                case 46 /* TIBETAN */ :
                    return createCounterStyleFromRange(value, 0xf20, 0xf29, true, defaultSuffix);
                case 3 /* DECIMAL */ :
                default:
                    return createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
            }
        };

        var IGNORE_ATTRIBUTE = 'data-html2canvas-ignore';
        var DocumentCloner = /** @class */ (function () {
            function DocumentCloner(context, element, options) {
                this.context = context;
                this.options = options;
                this.scrolledElements = [];
                this.referenceElement = element;
                this.counters = new CounterState();
                this.quoteDepth = 0;
                if (!element.ownerDocument) {
                    throw new Error('Cloned element does not have an owner document');
                }
                this.documentElement = this.cloneNode(element.ownerDocument.documentElement, false);
            }
            DocumentCloner.prototype.toIFrame = function (ownerDocument, windowSize) {
                var _this = this;
                var iframe = createIFrameContainer(ownerDocument, windowSize);
                if (!iframe.contentWindow) {
                    return Promise.reject("Unable to find iframe window");
                }
                var scrollX = ownerDocument.defaultView.pageXOffset;
                var scrollY = ownerDocument.defaultView.pageYOffset;
                var cloneWindow = iframe.contentWindow;
                var documentClone = cloneWindow.document;
                /* Chrome doesn't detect relative background-images assigned in inline <style> sheets when fetched through getComputedStyle
                 if window url is about:blank, we can assign the url to current by writing onto the document
                 */
                var iframeLoad = iframeLoader(iframe).then(function () {
                    return __awaiter(_this, void 0, void 0, function () {
                        var onclone, referenceElement;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.scrolledElements.forEach(restoreNodeScroll);
                                    if (cloneWindow) {
                                        cloneWindow.scrollTo(windowSize.left, windowSize.top);
                                        if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent) &&
                                            (cloneWindow.scrollY !== windowSize.top || cloneWindow.scrollX !== windowSize.left)) {
                                            this.context.logger.warn('Unable to restore scroll position for cloned document');
                                            this.context.windowBounds = this.context.windowBounds.add(cloneWindow.scrollX - windowSize.left, cloneWindow.scrollY - windowSize.top, 0, 0);
                                        }
                                    }
                                    onclone = this.options.onclone;
                                    referenceElement = this.clonedReferenceElement;
                                    if (typeof referenceElement === 'undefined') {
                                        return [2 /*return*/ , Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")];
                                    }
                                    if (!(documentClone.fonts && documentClone.fonts.ready)) return [3 /*break*/ , 2];
                                    return [4 /*yield*/ , documentClone.fonts.ready];
                                case 1:
                                    _a.sent();
                                    _a.label = 2;
                                case 2:
                                    if (!/(AppleWebKit)/g.test(navigator.userAgent)) return [3 /*break*/ , 4];
                                    return [4 /*yield*/ , imagesReady(documentClone)];
                                case 3:
                                    _a.sent();
                                    _a.label = 4;
                                case 4:
                                    if (typeof onclone === 'function') {
                                        return [2 /*return*/ , Promise.resolve()
                                            .then(function () {
                                                return onclone(documentClone, referenceElement);
                                            })
                                            .then(function () {
                                                return iframe;
                                            })
                                        ];
                                    }
                                    return [2 /*return*/ , iframe];
                            }
                        });
                    });
                });
                documentClone.open();
                documentClone.write(serializeDoctype(document.doctype) + "<html></html>");
                // Chrome scrolls the parent document for some reason after the write to the cloned window???
                restoreOwnerScroll(this.referenceElement.ownerDocument, scrollX, scrollY);
                documentClone.replaceChild(documentClone.adoptNode(this.documentElement), documentClone.documentElement);
                documentClone.close();
                return iframeLoad;
            };
            DocumentCloner.prototype.createElementClone = function (node) {
                if (isDebugging(node, 2 /* CLONE */ )) {
                    debugger;
                }
                if (isCanvasElement(node)) {
                    return this.createCanvasClone(node);
                }
                if (isVideoElement(node)) {
                    return this.createVideoClone(node);
                }
                if (isStyleElement(node)) {
                    return this.createStyleClone(node);
                }
                var clone = node.cloneNode(false);
                if (isImageElement(clone)) {
                    if (isImageElement(node) && node.currentSrc && node.currentSrc !== node.src) {
                        clone.src = node.currentSrc;
                        clone.srcset = '';
                    }
                    if (clone.loading === 'lazy') {
                        clone.loading = 'eager';
                    }
                }
                if (isCustomElement(clone)) {
                    return this.createCustomElementClone(clone);
                }
                return clone;
            };
            DocumentCloner.prototype.createCustomElementClone = function (node) {
                var clone = document.createElement('html2canvascustomelement');
                copyCSSStyles(node.style, clone);
                return clone;
            };
            DocumentCloner.prototype.createStyleClone = function (node) {
                try {
                    var sheet = node.sheet;
                    if (sheet && sheet.cssRules) {
                        var css = [].slice.call(sheet.cssRules, 0).reduce(function (css, rule) {
                            if (rule && typeof rule.cssText === 'string') {
                                return css + rule.cssText;
                            }
                            return css;
                        }, '');
                        var style = node.cloneNode(false);
                        style.textContent = css;
                        return style;
                    }
                } catch (e) {
                    // accessing node.sheet.cssRules throws a DOMException
                    this.context.logger.error('Unable to access cssRules property', e);
                    if (e.name !== 'SecurityError') {
                        throw e;
                    }
                }
                return node.cloneNode(false);
            };
            DocumentCloner.prototype.createCanvasClone = function (canvas) {
                var _a;
                if (this.options.inlineImages && canvas.ownerDocument) {
                    var img = canvas.ownerDocument.createElement('img');
                    try {
                        img.src = canvas.toDataURL();
                        return img;
                    } catch (e) {
                        this.context.logger.info("Unable to inline canvas contents, canvas is tainted", canvas);
                    }
                }
                var clonedCanvas = canvas.cloneNode(false);
                try {
                    clonedCanvas.width = canvas.width;
                    clonedCanvas.height = canvas.height;
                    var ctx = canvas.getContext('2d');
                    var clonedCtx = clonedCanvas.getContext('2d');
                    if (clonedCtx) {
                        if (!this.options.allowTaint && ctx) {
                            clonedCtx.putImageData(ctx.getImageData(0, 0, canvas.width, canvas.height), 0, 0);
                        } else {
                            var gl = (_a = canvas.getContext('webgl2')) !== null && _a !== void 0 ? _a : canvas.getContext('webgl');
                            if (gl) {
                                var attribs = gl.getContextAttributes();
                                if ((attribs === null || attribs === void 0 ? void 0 : attribs.preserveDrawingBuffer) === false) {
                                    this.context.logger.warn('Unable to clone WebGL context as it has preserveDrawingBuffer=false', canvas);
                                }
                            }
                            clonedCtx.drawImage(canvas, 0, 0);
                        }
                    }
                    return clonedCanvas;
                } catch (e) {
                    this.context.logger.info("Unable to clone canvas as it is tainted", canvas);
                }
                return clonedCanvas;
            };
            DocumentCloner.prototype.createVideoClone = function (video) {
                var canvas = video.ownerDocument.createElement('canvas');
                canvas.width = video.offsetWidth;
                canvas.height = video.offsetHeight;
                var ctx = canvas.getContext('2d');
                try {
                    if (ctx) {
                        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                        if (!this.options.allowTaint) {
                            ctx.getImageData(0, 0, canvas.width, canvas.height);
                        }
                    }
                    return canvas;
                } catch (e) {
                    this.context.logger.info("Unable to clone video as it is tainted", video);
                }
                var blankCanvas = video.ownerDocument.createElement('canvas');
                blankCanvas.width = video.offsetWidth;
                blankCanvas.height = video.offsetHeight;
                return blankCanvas;
            };
            DocumentCloner.prototype.appendChildNode = function (clone, child, copyStyles) {
                if (!isElementNode(child) ||
                    (!isScriptElement(child) &&
                        !child.hasAttribute(IGNORE_ATTRIBUTE) &&
                        (typeof this.options.ignoreElements !== 'function' || !this.options.ignoreElements(child)))) {
                    if (!this.options.copyStyles || !isElementNode(child) || !isStyleElement(child)) {
                        clone.appendChild(this.cloneNode(child, copyStyles));
                    }
                }
            };
            DocumentCloner.prototype.cloneChildNodes = function (node, clone, copyStyles) {
                var _this = this;
                for (var child = node.shadowRoot ? node.shadowRoot.firstChild : node.firstChild; child; child = child.nextSibling) {
                    if (isElementNode(child) && isSlotElement(child) && typeof child.assignedNodes === 'function') {
                        var assignedNodes = child.assignedNodes();
                        if (assignedNodes.length) {
                            assignedNodes.forEach(function (assignedNode) {
                                return _this.appendChildNode(clone, assignedNode, copyStyles);
                            });
                        }
                    } else {
                        this.appendChildNode(clone, child, copyStyles);
                    }
                }
            };
            DocumentCloner.prototype.cloneNode = function (node, copyStyles) {
                if (isTextNode(node)) {
                    return document.createTextNode(node.data);
                }
                if (!node.ownerDocument) {
                    return node.cloneNode(false);
                }
                var window = node.ownerDocument.defaultView;
                if (window && isElementNode(node) && (isHTMLElementNode(node) || isSVGElementNode(node))) {
                    var clone = this.createElementClone(node);
                    clone.style.transitionProperty = 'none';
                    var style = window.getComputedStyle(node);
                    var styleBefore = window.getComputedStyle(node, ':before');
                    var styleAfter = window.getComputedStyle(node, ':after');
                    if (this.referenceElement === node && isHTMLElementNode(clone)) {
                        this.clonedReferenceElement = clone;
                    }
                    if (isBodyElement(clone)) {
                        createPseudoHideStyles(clone);
                    }
                    var counters = this.counters.parse(new CSSParsedCounterDeclaration(this.context, style));
                    var before = this.resolvePseudoContent(node, clone, styleBefore, PseudoElementType.BEFORE);
                    if (isCustomElement(node)) {
                        copyStyles = true;
                    }
                    if (!isVideoElement(node)) {
                        this.cloneChildNodes(node, clone, copyStyles);
                    }
                    if (before) {
                        clone.insertBefore(before, clone.firstChild);
                    }
                    var after = this.resolvePseudoContent(node, clone, styleAfter, PseudoElementType.AFTER);
                    if (after) {
                        clone.appendChild(after);
                    }
                    this.counters.pop(counters);
                    if ((style && (this.options.copyStyles || isSVGElementNode(node)) && !isIFrameElement(node)) ||
                        copyStyles) {
                        copyCSSStyles(style, clone);
                    }
                    if (node.scrollTop !== 0 || node.scrollLeft !== 0) {
                        this.scrolledElements.push([clone, node.scrollLeft, node.scrollTop]);
                    }
                    if ((isTextareaElement(node) || isSelectElement(node)) &&
                        (isTextareaElement(clone) || isSelectElement(clone))) {
                        clone.value = node.value;
                    }
                    return clone;
                }
                return node.cloneNode(false);
            };
            DocumentCloner.prototype.resolvePseudoContent = function (node, clone, style, pseudoElt) {
                var _this = this;
                if (!style) {
                    return;
                }
                var value = style.content;
                var document = clone.ownerDocument;
                if (!document || !value || value === 'none' || value === '-moz-alt-content' || style.display === 'none') {
                    return;
                }
                this.counters.parse(new CSSParsedCounterDeclaration(this.context, style));
                var declaration = new CSSParsedPseudoDeclaration(this.context, style);
                var anonymousReplacedElement = document.createElement('html2canvaspseudoelement');
                copyCSSStyles(style, anonymousReplacedElement);
                declaration.content.forEach(function (token) {
                    if (token.type === 0 /* STRING_TOKEN */ ) {
                        anonymousReplacedElement.appendChild(document.createTextNode(token.value));
                    } else if (token.type === 22 /* URL_TOKEN */ ) {
                        var img = document.createElement('img');
                        img.src = token.value;
                        img.style.opacity = '1';
                        anonymousReplacedElement.appendChild(img);
                    } else if (token.type === 18 /* FUNCTION */ ) {
                        if (token.name === 'attr') {
                            var attr = token.values.filter(isIdentToken);
                            if (attr.length) {
                                anonymousReplacedElement.appendChild(document.createTextNode(node.getAttribute(attr[0].value) || ''));
                            }
                        } else if (token.name === 'counter') {
                            var _a = token.values.filter(nonFunctionArgSeparator),
                                counter = _a[0],
                                counterStyle = _a[1];
                            if (counter && isIdentToken(counter)) {
                                var counterState = _this.counters.getCounterValue(counter.value);
                                var counterType = counterStyle && isIdentToken(counterStyle) ?
                                    listStyleType.parse(_this.context, counterStyle.value) :
                                    3 /* DECIMAL */ ;
                                anonymousReplacedElement.appendChild(document.createTextNode(createCounterText(counterState, counterType, false)));
                            }
                        } else if (token.name === 'counters') {
                            var _b = token.values.filter(nonFunctionArgSeparator),
                                counter = _b[0],
                                delim = _b[1],
                                counterStyle = _b[2];
                            if (counter && isIdentToken(counter)) {
                                var counterStates = _this.counters.getCounterValues(counter.value);
                                var counterType_1 = counterStyle && isIdentToken(counterStyle) ?
                                    listStyleType.parse(_this.context, counterStyle.value) :
                                    3 /* DECIMAL */ ;
                                var separator = delim && delim.type === 0 /* STRING_TOKEN */ ? delim.value : '';
                                var text = counterStates
                                    .map(function (value) {
                                        return createCounterText(value, counterType_1, false);
                                    })
                                    .join(separator);
                                anonymousReplacedElement.appendChild(document.createTextNode(text));
                            }
                        } else;
                    } else if (token.type === 20 /* IDENT_TOKEN */ ) {
                        switch (token.value) {
                            case 'open-quote':
                                anonymousReplacedElement.appendChild(document.createTextNode(getQuote(declaration.quotes, _this.quoteDepth++, true)));
                                break;
                            case 'close-quote':
                                anonymousReplacedElement.appendChild(document.createTextNode(getQuote(declaration.quotes, --_this.quoteDepth, false)));
                                break;
                            default:
                                // safari doesn't parse string tokens correctly because of lack of quotes
                                anonymousReplacedElement.appendChild(document.createTextNode(token.value));
                        }
                    }
                });
                anonymousReplacedElement.className = PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + " " + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
                var newClassName = pseudoElt === PseudoElementType.BEFORE ?
                    " " + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE :
                    " " + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
                if (isSVGElementNode(clone)) {
                    clone.className.baseValue += newClassName;
                } else {
                    clone.className += newClassName;
                }
                return anonymousReplacedElement;
            };
            DocumentCloner.destroy = function (container) {
                if (container.parentNode) {
                    container.parentNode.removeChild(container);
                    return true;
                }
                return false;
            };
            return DocumentCloner;
        }());
        var PseudoElementType;
        (function (PseudoElementType) {
            PseudoElementType[PseudoElementType["BEFORE"] = 0] = "BEFORE";
            PseudoElementType[PseudoElementType["AFTER"] = 1] = "AFTER";
        })(PseudoElementType || (PseudoElementType = {}));
        var createIFrameContainer = function (ownerDocument, bounds) {
            var cloneIframeContainer = ownerDocument.createElement('iframe');
            cloneIframeContainer.className = 'html2canvas-container';
            cloneIframeContainer.style.visibility = 'hidden';
            cloneIframeContainer.style.position = 'fixed';
            cloneIframeContainer.style.left = '-10000px';
            cloneIframeContainer.style.top = '0px';
            cloneIframeContainer.style.border = '0';
            cloneIframeContainer.width = bounds.width.toString();
            cloneIframeContainer.height = bounds.height.toString();
            cloneIframeContainer.scrolling = 'no'; // ios won't scroll without it
            cloneIframeContainer.setAttribute(IGNORE_ATTRIBUTE, 'true');
            ownerDocument.body.appendChild(cloneIframeContainer);
            return cloneIframeContainer;
        };
        var imageReady = function (img) {
            return new Promise(function (resolve) {
                if (img.complete) {
                    resolve();
                    return;
                }
                if (!img.src) {
                    resolve();
                    return;
                }
                img.onload = resolve;
                img.onerror = resolve;
            });
        };
        var imagesReady = function (document) {
            return Promise.all([].slice.call(document.images, 0).map(imageReady));
        };
        var iframeLoader = function (iframe) {
            return new Promise(function (resolve, reject) {
                var cloneWindow = iframe.contentWindow;
                if (!cloneWindow) {
                    return reject("No window assigned for iframe");
                }
                var documentClone = cloneWindow.document;
                cloneWindow.onload = iframe.onload = function () {
                    cloneWindow.onload = iframe.onload = null;
                    var interval = setInterval(function () {
                        if (documentClone.body.childNodes.length > 0 && documentClone.readyState === 'complete') {
                            clearInterval(interval);
                            resolve(iframe);
                        }
                    }, 50);
                };
            });
        };
        var ignoredStyleProperties = [
            'all',
            'd',
            'content' // Safari shows pseudoelements if content is set
        ];
        var copyCSSStyles = function (style, target) {
            // Edge does not provide value for cssText
            for (var i = style.length - 1; i >= 0; i--) {
                var property = style.item(i);
                if (ignoredStyleProperties.indexOf(property) === -1) {
                    target.style.setProperty(property, style.getPropertyValue(property));
                }
            }
            return target;
        };
        var serializeDoctype = function (doctype) {
            var str = '';
            if (doctype) {
                str += '<!DOCTYPE ';
                if (doctype.name) {
                    str += doctype.name;
                }
                if (doctype.internalSubset) {
                    str += doctype.internalSubset;
                }
                if (doctype.publicId) {
                    str += "\"" + doctype.publicId + "\"";
                }
                if (doctype.systemId) {
                    str += "\"" + doctype.systemId + "\"";
                }
                str += '>';
            }
            return str;
        };
        var restoreOwnerScroll = function (ownerDocument, x, y) {
            if (ownerDocument &&
                ownerDocument.defaultView &&
                (x !== ownerDocument.defaultView.pageXOffset || y !== ownerDocument.defaultView.pageYOffset)) {
                ownerDocument.defaultView.scrollTo(x, y);
            }
        };
        var restoreNodeScroll = function (_a) {
            var element = _a[0],
                x = _a[1],
                y = _a[2];
            element.scrollLeft = x;
            element.scrollTop = y;
        };
        var PSEUDO_BEFORE = ':before';
        var PSEUDO_AFTER = ':after';
        var PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = '___html2canvas___pseudoelement_before';
        var PSEUDO_HIDE_ELEMENT_CLASS_AFTER = '___html2canvas___pseudoelement_after';
        var PSEUDO_HIDE_ELEMENT_STYLE = "{\n    content: \"\" !important;\n    display: none !important;\n}";
        var createPseudoHideStyles = function (body) {
            createStyles(body, "." + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + PSEUDO_BEFORE + PSEUDO_HIDE_ELEMENT_STYLE + "\n         ." + PSEUDO_HIDE_ELEMENT_CLASS_AFTER + PSEUDO_AFTER + PSEUDO_HIDE_ELEMENT_STYLE);
        };
        var createStyles = function (body, styles) {
            var document = body.ownerDocument;
            if (document) {
                var style = document.createElement('style');
                style.textContent = styles;
                body.appendChild(style);
            }
        };

        var CacheStorage = /** @class */ (function () {
            function CacheStorage() {}
            CacheStorage.getOrigin = function (url) {
                var link = CacheStorage._link;
                if (!link) {
                    return 'about:blank';
                }
                link.href = url;
                link.href = link.href; // IE9, LOL! - http://jsfiddle.net/niklasvh/2e48b/
                return link.protocol + link.hostname + link.port;
            };
            CacheStorage.isSameOrigin = function (src) {
                return CacheStorage.getOrigin(src) === CacheStorage._origin;
            };
            CacheStorage.setContext = function (window) {
                CacheStorage._link = window.document.createElement('a');
                CacheStorage._origin = CacheStorage.getOrigin(window.location.href);
            };
            CacheStorage._origin = 'about:blank';
            return CacheStorage;
        }());
        var Cache = /** @class */ (function () {
            function Cache(context, _options) {
                this.context = context;
                this._options = _options;
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                this._cache = {};
            }
            Cache.prototype.addImage = function (src) {
                var result = Promise.resolve();
                if (this.has(src)) {
                    return result;
                }
                if (isBlobImage(src) || isRenderable(src)) {
                    (this._cache[src] = this.loadImage(src)).catch(function () {
                        // prevent unhandled rejection
                    });
                    return result;
                }
                return result;
            };
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            Cache.prototype.match = function (src) {
                return this._cache[src];
            };
            Cache.prototype.loadImage = function (key) {
                return __awaiter(this, void 0, void 0, function () {
                    var isSameOrigin, useCORS, useProxy, src;
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                isSameOrigin = CacheStorage.isSameOrigin(key);
                                useCORS = !isInlineImage(key) && this._options.useCORS === true && FEATURES.SUPPORT_CORS_IMAGES && !isSameOrigin;
                                useProxy = !isInlineImage(key) &&
                                    !isSameOrigin &&
                                    !isBlobImage(key) &&
                                    typeof this._options.proxy === 'string' &&
                                    FEATURES.SUPPORT_CORS_XHR &&
                                    !useCORS;
                                if (!isSameOrigin &&
                                    this._options.allowTaint === false &&
                                    !isInlineImage(key) &&
                                    !isBlobImage(key) &&
                                    !useProxy &&
                                    !useCORS) {
                                    return [2 /*return*/ ];
                                }
                                src = key;
                                if (!useProxy) return [3 /*break*/ , 2];
                                return [4 /*yield*/ , this.proxy(src)];
                            case 1:
                                src = _a.sent();
                                _a.label = 2;
                            case 2:
                                this.context.logger.debug("Added image " + key.substring(0, 256));
                                return [4 /*yield*/ , new Promise(function (resolve, reject) {
                                    var img = new Image();
                                    img.onload = function () {
                                        return resolve(img);
                                    };
                                    img.onerror = reject;
                                    //ios safari 10.3 taints canvas with data urls unless crossOrigin is set to anonymous
                                    if (isInlineBase64Image(src) || useCORS) {
                                        img.crossOrigin = 'anonymous';
                                    }
                                    img.src = src;
                                    if (img.complete === true) {
                                        // Inline XML images may fail to parse, throwing an Error later on
                                        setTimeout(function () {
                                            return resolve(img);
                                        }, 500);
                                    }
                                    if (_this._options.imageTimeout > 0) {
                                        setTimeout(function () {
                                            return reject("Timed out (" + _this._options.imageTimeout + "ms) loading image");
                                        }, _this._options.imageTimeout);
                                    }
                                })];
                            case 3:
                                return [2 /*return*/ , _a.sent()];
                        }
                    });
                });
            };
            Cache.prototype.has = function (key) {
                return typeof this._cache[key] !== 'undefined';
            };
            Cache.prototype.keys = function () {
                return Promise.resolve(Object.keys(this._cache));
            };
            Cache.prototype.proxy = function (src) {
                var _this = this;
                var proxy = this._options.proxy;
                if (!proxy) {
                    throw new Error('No proxy defined');
                }
                var key = src.substring(0, 256);
                return new Promise(function (resolve, reject) {
                    var responseType = FEATURES.SUPPORT_RESPONSE_TYPE ? 'blob' : 'text';
                    var xhr = new XMLHttpRequest();
                    xhr.onload = function () {
                        if (xhr.status === 200) {
                            if (responseType === 'text') {
                                resolve(xhr.response);
                            } else {
                                var reader_1 = new FileReader();
                                reader_1.addEventListener('load', function () {
                                    return resolve(reader_1.result);
                                }, false);
                                reader_1.addEventListener('error', function (e) {
                                    return reject(e);
                                }, false);
                                reader_1.readAsDataURL(xhr.response);
                            }
                        } else {
                            reject("Failed to proxy resource " + key + " with status code " + xhr.status);
                        }
                    };
                    xhr.onerror = reject;
                    var queryString = proxy.indexOf('?') > -1 ? '&' : '?';
                    xhr.open('GET', "" + proxy + queryString + "url=" + encodeURIComponent(src) + "&responseType=" + responseType);
                    if (responseType !== 'text' && xhr instanceof XMLHttpRequest) {
                        xhr.responseType = responseType;
                    }
                    if (_this._options.imageTimeout) {
                        var timeout_1 = _this._options.imageTimeout;
                        xhr.timeout = timeout_1;
                        xhr.ontimeout = function () {
                            return reject("Timed out (" + timeout_1 + "ms) proxying " + key);
                        };
                    }
                    xhr.send();
                });
            };
            return Cache;
        }());
        var INLINE_SVG = /^data:image\/svg\+xml/i;
        var INLINE_BASE64 = /^data:image\/.*;base64,/i;
        var INLINE_IMG = /^data:image\/.*/i;
        var isRenderable = function (src) {
            return FEATURES.SUPPORT_SVG_DRAWING || !isSVG(src);
        };
        var isInlineImage = function (src) {
            return INLINE_IMG.test(src);
        };
        var isInlineBase64Image = function (src) {
            return INLINE_BASE64.test(src);
        };
        var isBlobImage = function (src) {
            return src.substr(0, 4) === 'blob';
        };
        var isSVG = function (src) {
            return src.substr(-3).toLowerCase() === 'svg' || INLINE_SVG.test(src);
        };

        var Vector = /** @class */ (function () {
            function Vector(x, y) {
                this.type = 0 /* VECTOR */ ;
                this.x = x;
                this.y = y;
            }
            Vector.prototype.add = function (deltaX, deltaY) {
                return new Vector(this.x + deltaX, this.y + deltaY);
            };
            return Vector;
        }());

        var lerp = function (a, b, t) {
            return new Vector(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t);
        };
        var BezierCurve = /** @class */ (function () {
            function BezierCurve(start, startControl, endControl, end) {
                this.type = 1 /* BEZIER_CURVE */ ;
                this.start = start;
                this.startControl = startControl;
                this.endControl = endControl;
                this.end = end;
            }
            BezierCurve.prototype.subdivide = function (t, firstHalf) {
                var ab = lerp(this.start, this.startControl, t);
                var bc = lerp(this.startControl, this.endControl, t);
                var cd = lerp(this.endControl, this.end, t);
                var abbc = lerp(ab, bc, t);
                var bccd = lerp(bc, cd, t);
                var dest = lerp(abbc, bccd, t);
                return firstHalf ? new BezierCurve(this.start, ab, abbc, dest) : new BezierCurve(dest, bccd, cd, this.end);
            };
            BezierCurve.prototype.add = function (deltaX, deltaY) {
                return new BezierCurve(this.start.add(deltaX, deltaY), this.startControl.add(deltaX, deltaY), this.endControl.add(deltaX, deltaY), this.end.add(deltaX, deltaY));
            };
            BezierCurve.prototype.reverse = function () {
                return new BezierCurve(this.end, this.endControl, this.startControl, this.start);
            };
            return BezierCurve;
        }());
        var isBezierCurve = function (path) {
            return path.type === 1 /* BEZIER_CURVE */ ;
        };

        var BoundCurves = /** @class */ (function () {
            function BoundCurves(element) {
                var styles = element.styles;
                var bounds = element.bounds;
                var _a = getAbsoluteValueForTuple(styles.borderTopLeftRadius, bounds.width, bounds.height),
                    tlh = _a[0],
                    tlv = _a[1];
                var _b = getAbsoluteValueForTuple(styles.borderTopRightRadius, bounds.width, bounds.height),
                    trh = _b[0],
                    trv = _b[1];
                var _c = getAbsoluteValueForTuple(styles.borderBottomRightRadius, bounds.width, bounds.height),
                    brh = _c[0],
                    brv = _c[1];
                var _d = getAbsoluteValueForTuple(styles.borderBottomLeftRadius, bounds.width, bounds.height),
                    blh = _d[0],
                    blv = _d[1];
                var factors = [];
                factors.push((tlh + trh) / bounds.width);
                factors.push((blh + brh) / bounds.width);
                factors.push((tlv + blv) / bounds.height);
                factors.push((trv + brv) / bounds.height);
                var maxFactor = Math.max.apply(Math, factors);
                if (maxFactor > 1) {
                    tlh /= maxFactor;
                    tlv /= maxFactor;
                    trh /= maxFactor;
                    trv /= maxFactor;
                    brh /= maxFactor;
                    brv /= maxFactor;
                    blh /= maxFactor;
                    blv /= maxFactor;
                }
                var topWidth = bounds.width - trh;
                var rightHeight = bounds.height - brv;
                var bottomWidth = bounds.width - brh;
                var leftHeight = bounds.height - blv;
                var borderTopWidth = styles.borderTopWidth;
                var borderRightWidth = styles.borderRightWidth;
                var borderBottomWidth = styles.borderBottomWidth;
                var borderLeftWidth = styles.borderLeftWidth;
                var paddingTop = getAbsoluteValue(styles.paddingTop, element.bounds.width);
                var paddingRight = getAbsoluteValue(styles.paddingRight, element.bounds.width);
                var paddingBottom = getAbsoluteValue(styles.paddingBottom, element.bounds.width);
                var paddingLeft = getAbsoluteValue(styles.paddingLeft, element.bounds.width);
                this.topLeftBorderDoubleOuterBox =
                    tlh > 0 || tlv > 0 ?
                    getCurvePoints(bounds.left + borderLeftWidth / 3, bounds.top + borderTopWidth / 3, tlh - borderLeftWidth / 3, tlv - borderTopWidth / 3, CORNER.TOP_LEFT) :
                    new Vector(bounds.left + borderLeftWidth / 3, bounds.top + borderTopWidth / 3);
                this.topRightBorderDoubleOuterBox =
                    tlh > 0 || tlv > 0 ?
                    getCurvePoints(bounds.left + topWidth, bounds.top + borderTopWidth / 3, trh - borderRightWidth / 3, trv - borderTopWidth / 3, CORNER.TOP_RIGHT) :
                    new Vector(bounds.left + bounds.width - borderRightWidth / 3, bounds.top + borderTopWidth / 3);
                this.bottomRightBorderDoubleOuterBox =
                    brh > 0 || brv > 0 ?
                    getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - borderRightWidth / 3, brv - borderBottomWidth / 3, CORNER.BOTTOM_RIGHT) :
                    new Vector(bounds.left + bounds.width - borderRightWidth / 3, bounds.top + bounds.height - borderBottomWidth / 3);
                this.bottomLeftBorderDoubleOuterBox =
                    blh > 0 || blv > 0 ?
                    getCurvePoints(bounds.left + borderLeftWidth / 3, bounds.top + leftHeight, blh - borderLeftWidth / 3, blv - borderBottomWidth / 3, CORNER.BOTTOM_LEFT) :
                    new Vector(bounds.left + borderLeftWidth / 3, bounds.top + bounds.height - borderBottomWidth / 3);
                this.topLeftBorderDoubleInnerBox =
                    tlh > 0 || tlv > 0 ?
                    getCurvePoints(bounds.left + (borderLeftWidth * 2) / 3, bounds.top + (borderTopWidth * 2) / 3, tlh - (borderLeftWidth * 2) / 3, tlv - (borderTopWidth * 2) / 3, CORNER.TOP_LEFT) :
                    new Vector(bounds.left + (borderLeftWidth * 2) / 3, bounds.top + (borderTopWidth * 2) / 3);
                this.topRightBorderDoubleInnerBox =
                    tlh > 0 || tlv > 0 ?
                    getCurvePoints(bounds.left + topWidth, bounds.top + (borderTopWidth * 2) / 3, trh - (borderRightWidth * 2) / 3, trv - (borderTopWidth * 2) / 3, CORNER.TOP_RIGHT) :
                    new Vector(bounds.left + bounds.width - (borderRightWidth * 2) / 3, bounds.top + (borderTopWidth * 2) / 3);
                this.bottomRightBorderDoubleInnerBox =
                    brh > 0 || brv > 0 ?
                    getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - (borderRightWidth * 2) / 3, brv - (borderBottomWidth * 2) / 3, CORNER.BOTTOM_RIGHT) :
                    new Vector(bounds.left + bounds.width - (borderRightWidth * 2) / 3, bounds.top + bounds.height - (borderBottomWidth * 2) / 3);
                this.bottomLeftBorderDoubleInnerBox =
                    blh > 0 || blv > 0 ?
                    getCurvePoints(bounds.left + (borderLeftWidth * 2) / 3, bounds.top + leftHeight, blh - (borderLeftWidth * 2) / 3, blv - (borderBottomWidth * 2) / 3, CORNER.BOTTOM_LEFT) :
                    new Vector(bounds.left + (borderLeftWidth * 2) / 3, bounds.top + bounds.height - (borderBottomWidth * 2) / 3);
                this.topLeftBorderStroke =
                    tlh > 0 || tlv > 0 ?
                    getCurvePoints(bounds.left + borderLeftWidth / 2, bounds.top + borderTopWidth / 2, tlh - borderLeftWidth / 2, tlv - borderTopWidth / 2, CORNER.TOP_LEFT) :
                    new Vector(bounds.left + borderLeftWidth / 2, bounds.top + borderTopWidth / 2);
                this.topRightBorderStroke =
                    tlh > 0 || tlv > 0 ?
                    getCurvePoints(bounds.left + topWidth, bounds.top + borderTopWidth / 2, trh - borderRightWidth / 2, trv - borderTopWidth / 2, CORNER.TOP_RIGHT) :
                    new Vector(bounds.left + bounds.width - borderRightWidth / 2, bounds.top + borderTopWidth / 2);
                this.bottomRightBorderStroke =
                    brh > 0 || brv > 0 ?
                    getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - borderRightWidth / 2, brv - borderBottomWidth / 2, CORNER.BOTTOM_RIGHT) :
                    new Vector(bounds.left + bounds.width - borderRightWidth / 2, bounds.top + bounds.height - borderBottomWidth / 2);
                this.bottomLeftBorderStroke =
                    blh > 0 || blv > 0 ?
                    getCurvePoints(bounds.left + borderLeftWidth / 2, bounds.top + leftHeight, blh - borderLeftWidth / 2, blv - borderBottomWidth / 2, CORNER.BOTTOM_LEFT) :
                    new Vector(bounds.left + borderLeftWidth / 2, bounds.top + bounds.height - borderBottomWidth / 2);
                this.topLeftBorderBox =
                    tlh > 0 || tlv > 0 ?
                    getCurvePoints(bounds.left, bounds.top, tlh, tlv, CORNER.TOP_LEFT) :
                    new Vector(bounds.left, bounds.top);
                this.topRightBorderBox =
                    trh > 0 || trv > 0 ?
                    getCurvePoints(bounds.left + topWidth, bounds.top, trh, trv, CORNER.TOP_RIGHT) :
                    new Vector(bounds.left + bounds.width, bounds.top);
                this.bottomRightBorderBox =
                    brh > 0 || brv > 0 ?
                    getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh, brv, CORNER.BOTTOM_RIGHT) :
                    new Vector(bounds.left + bounds.width, bounds.top + bounds.height);
                this.bottomLeftBorderBox =
                    blh > 0 || blv > 0 ?
                    getCurvePoints(bounds.left, bounds.top + leftHeight, blh, blv, CORNER.BOTTOM_LEFT) :
                    new Vector(bounds.left, bounds.top + bounds.height);
                this.topLeftPaddingBox =
                    tlh > 0 || tlv > 0 ?
                    getCurvePoints(bounds.left + borderLeftWidth, bounds.top + borderTopWidth, Math.max(0, tlh - borderLeftWidth), Math.max(0, tlv - borderTopWidth), CORNER.TOP_LEFT) :
                    new Vector(bounds.left + borderLeftWidth, bounds.top + borderTopWidth);
                this.topRightPaddingBox =
                    trh > 0 || trv > 0 ?
                    getCurvePoints(bounds.left + Math.min(topWidth, bounds.width - borderRightWidth), bounds.top + borderTopWidth, topWidth > bounds.width + borderRightWidth ? 0 : Math.max(0, trh - borderRightWidth), Math.max(0, trv - borderTopWidth), CORNER.TOP_RIGHT) :
                    new Vector(bounds.left + bounds.width - borderRightWidth, bounds.top + borderTopWidth);
                this.bottomRightPaddingBox =
                    brh > 0 || brv > 0 ?
                    getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - borderLeftWidth), bounds.top + Math.min(rightHeight, bounds.height - borderBottomWidth), Math.max(0, brh - borderRightWidth), Math.max(0, brv - borderBottomWidth), CORNER.BOTTOM_RIGHT) :
                    new Vector(bounds.left + bounds.width - borderRightWidth, bounds.top + bounds.height - borderBottomWidth);
                this.bottomLeftPaddingBox =
                    blh > 0 || blv > 0 ?
                    getCurvePoints(bounds.left + borderLeftWidth, bounds.top + Math.min(leftHeight, bounds.height - borderBottomWidth), Math.max(0, blh - borderLeftWidth), Math.max(0, blv - borderBottomWidth), CORNER.BOTTOM_LEFT) :
                    new Vector(bounds.left + borderLeftWidth, bounds.top + bounds.height - borderBottomWidth);
                this.topLeftContentBox =
                    tlh > 0 || tlv > 0 ?
                    getCurvePoints(bounds.left + borderLeftWidth + paddingLeft, bounds.top + borderTopWidth + paddingTop, Math.max(0, tlh - (borderLeftWidth + paddingLeft)), Math.max(0, tlv - (borderTopWidth + paddingTop)), CORNER.TOP_LEFT) :
                    new Vector(bounds.left + borderLeftWidth + paddingLeft, bounds.top + borderTopWidth + paddingTop);
                this.topRightContentBox =
                    trh > 0 || trv > 0 ?
                    getCurvePoints(bounds.left + Math.min(topWidth, bounds.width + borderLeftWidth + paddingLeft), bounds.top + borderTopWidth + paddingTop, topWidth > bounds.width + borderLeftWidth + paddingLeft ? 0 : trh - borderLeftWidth + paddingLeft, trv - (borderTopWidth + paddingTop), CORNER.TOP_RIGHT) :
                    new Vector(bounds.left + bounds.width - (borderRightWidth + paddingRight), bounds.top + borderTopWidth + paddingTop);
                this.bottomRightContentBox =
                    brh > 0 || brv > 0 ?
                    getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - (borderLeftWidth + paddingLeft)), bounds.top + Math.min(rightHeight, bounds.height + borderTopWidth + paddingTop), Math.max(0, brh - (borderRightWidth + paddingRight)), brv - (borderBottomWidth + paddingBottom), CORNER.BOTTOM_RIGHT) :
                    new Vector(bounds.left + bounds.width - (borderRightWidth + paddingRight), bounds.top + bounds.height - (borderBottomWidth + paddingBottom));
                this.bottomLeftContentBox =
                    blh > 0 || blv > 0 ?
                    getCurvePoints(bounds.left + borderLeftWidth + paddingLeft, bounds.top + leftHeight, Math.max(0, blh - (borderLeftWidth + paddingLeft)), blv - (borderBottomWidth + paddingBottom), CORNER.BOTTOM_LEFT) :
                    new Vector(bounds.left + borderLeftWidth + paddingLeft, bounds.top + bounds.height - (borderBottomWidth + paddingBottom));
            }
            return BoundCurves;
        }());
        var CORNER;
        (function (CORNER) {
            CORNER[CORNER["TOP_LEFT"] = 0] = "TOP_LEFT";
            CORNER[CORNER["TOP_RIGHT"] = 1] = "TOP_RIGHT";
            CORNER[CORNER["BOTTOM_RIGHT"] = 2] = "BOTTOM_RIGHT";
            CORNER[CORNER["BOTTOM_LEFT"] = 3] = "BOTTOM_LEFT";
        })(CORNER || (CORNER = {}));
        var getCurvePoints = function (x, y, r1, r2, position) {
            var kappa = 4 * ((Math.sqrt(2) - 1) / 3);
            var ox = r1 * kappa; // control point offset horizontal
            var oy = r2 * kappa; // control point offset vertical
            var xm = x + r1; // x-middle
            var ym = y + r2; // y-middle
            switch (position) {
                case CORNER.TOP_LEFT:
                    return new BezierCurve(new Vector(x, ym), new Vector(x, ym - oy), new Vector(xm - ox, y), new Vector(xm, y));
                case CORNER.TOP_RIGHT:
                    return new BezierCurve(new Vector(x, y), new Vector(x + ox, y), new Vector(xm, ym - oy), new Vector(xm, ym));
                case CORNER.BOTTOM_RIGHT:
                    return new BezierCurve(new Vector(xm, y), new Vector(xm, y + oy), new Vector(x + ox, ym), new Vector(x, ym));
                case CORNER.BOTTOM_LEFT:
                default:
                    return new BezierCurve(new Vector(xm, ym), new Vector(xm - ox, ym), new Vector(x, y + oy), new Vector(x, y));
            }
        };
        var calculateBorderBoxPath = function (curves) {
            return [curves.topLeftBorderBox, curves.topRightBorderBox, curves.bottomRightBorderBox, curves.bottomLeftBorderBox];
        };
        var calculateContentBoxPath = function (curves) {
            return [
                curves.topLeftContentBox,
                curves.topRightContentBox,
                curves.bottomRightContentBox,
                curves.bottomLeftContentBox
            ];
        };
        var calculatePaddingBoxPath = function (curves) {
            return [
                curves.topLeftPaddingBox,
                curves.topRightPaddingBox,
                curves.bottomRightPaddingBox,
                curves.bottomLeftPaddingBox
            ];
        };

        var TransformEffect = /** @class */ (function () {
            function TransformEffect(offsetX, offsetY, matrix) {
                this.offsetX = offsetX;
                this.offsetY = offsetY;
                this.matrix = matrix;
                this.type = 0 /* TRANSFORM */ ;
                this.target = 2 /* BACKGROUND_BORDERS */ | 4 /* CONTENT */ ;
            }
            return TransformEffect;
        }());
        var ClipEffect = /** @class */ (function () {
            function ClipEffect(path, target) {
                this.path = path;
                this.target = target;
                this.type = 1 /* CLIP */ ;
            }
            return ClipEffect;
        }());
        var OpacityEffect = /** @class */ (function () {
            function OpacityEffect(opacity) {
                this.opacity = opacity;
                this.type = 2 /* OPACITY */ ;
                this.target = 2 /* BACKGROUND_BORDERS */ | 4 /* CONTENT */ ;
            }
            return OpacityEffect;
        }());
        var isTransformEffect = function (effect) {
            return effect.type === 0 /* TRANSFORM */ ;
        };
        var isClipEffect = function (effect) {
            return effect.type === 1 /* CLIP */ ;
        };
        var isOpacityEffect = function (effect) {
            return effect.type === 2 /* OPACITY */ ;
        };

        var equalPath = function (a, b) {
            if (a.length === b.length) {
                return a.some(function (v, i) {
                    return v === b[i];
                });
            }
            return false;
        };
        var transformPath = function (path, deltaX, deltaY, deltaW, deltaH) {
            return path.map(function (point, index) {
                switch (index) {
                    case 0:
                        return point.add(deltaX, deltaY);
                    case 1:
                        return point.add(deltaX + deltaW, deltaY);
                    case 2:
                        return point.add(deltaX + deltaW, deltaY + deltaH);
                    case 3:
                        return point.add(deltaX, deltaY + deltaH);
                }
                return point;
            });
        };

        var StackingContext = /** @class */ (function () {
            function StackingContext(container) {
                this.element = container;
                this.inlineLevel = [];
                this.nonInlineLevel = [];
                this.negativeZIndex = [];
                this.zeroOrAutoZIndexOrTransformedOrOpacity = [];
                this.positiveZIndex = [];
                this.nonPositionedFloats = [];
                this.nonPositionedInlineLevel = [];
            }
            return StackingContext;
        }());
        var ElementPaint = /** @class */ (function () {
            function ElementPaint(container, parent) {
                this.container = container;
                this.parent = parent;
                this.effects = [];
                this.curves = new BoundCurves(this.container);
                if (this.container.styles.opacity < 1) {
                    this.effects.push(new OpacityEffect(this.container.styles.opacity));
                }
                if (this.container.styles.transform !== null) {
                    var offsetX = this.container.bounds.left + this.container.styles.transformOrigin[0].number;
                    var offsetY = this.container.bounds.top + this.container.styles.transformOrigin[1].number;
                    var matrix = this.container.styles.transform;
                    this.effects.push(new TransformEffect(offsetX, offsetY, matrix));
                }
                if (this.container.styles.overflowX !== 0 /* VISIBLE */ ) {
                    var borderBox = calculateBorderBoxPath(this.curves);
                    var paddingBox = calculatePaddingBoxPath(this.curves);
                    if (equalPath(borderBox, paddingBox)) {
                        this.effects.push(new ClipEffect(borderBox, 2 /* BACKGROUND_BORDERS */ | 4 /* CONTENT */ ));
                    } else {
                        this.effects.push(new ClipEffect(borderBox, 2 /* BACKGROUND_BORDERS */ ));
                        this.effects.push(new ClipEffect(paddingBox, 4 /* CONTENT */ ));
                    }
                }
            }
            ElementPaint.prototype.getEffects = function (target) {
                var inFlow = [2 /* ABSOLUTE */ , 3 /* FIXED */ ].indexOf(this.container.styles.position) === -1;
                var parent = this.parent;
                var effects = this.effects.slice(0);
                while (parent) {
                    var croplessEffects = parent.effects.filter(function (effect) {
                        return !isClipEffect(effect);
                    });
                    if (inFlow || parent.container.styles.position !== 0 /* STATIC */ || !parent.parent) {
                        effects.unshift.apply(effects, croplessEffects);
                        inFlow = [2 /* ABSOLUTE */ , 3 /* FIXED */ ].indexOf(parent.container.styles.position) === -1;
                        if (parent.container.styles.overflowX !== 0 /* VISIBLE */ ) {
                            var borderBox = calculateBorderBoxPath(parent.curves);
                            var paddingBox = calculatePaddingBoxPath(parent.curves);
                            if (!equalPath(borderBox, paddingBox)) {
                                effects.unshift(new ClipEffect(paddingBox, 2 /* BACKGROUND_BORDERS */ | 4 /* CONTENT */ ));
                            }
                        }
                    } else {
                        effects.unshift.apply(effects, croplessEffects);
                    }
                    parent = parent.parent;
                }
                return effects.filter(function (effect) {
                    return contains(effect.target, target);
                });
            };
            return ElementPaint;
        }());
        var parseStackTree = function (parent, stackingContext, realStackingContext, listItems) {
            parent.container.elements.forEach(function (child) {
                var treatAsRealStackingContext = contains(child.flags, 4 /* CREATES_REAL_STACKING_CONTEXT */ );
                var createsStackingContext = contains(child.flags, 2 /* CREATES_STACKING_CONTEXT */ );
                var paintContainer = new ElementPaint(child, parent);
                if (contains(child.styles.display, 2048 /* LIST_ITEM */ )) {
                    listItems.push(paintContainer);
                }
                var listOwnerItems = contains(child.flags, 8 /* IS_LIST_OWNER */ ) ? [] : listItems;
                if (treatAsRealStackingContext || createsStackingContext) {
                    var parentStack = treatAsRealStackingContext || child.styles.isPositioned() ? realStackingContext : stackingContext;
                    var stack = new StackingContext(paintContainer);
                    if (child.styles.isPositioned() || child.styles.opacity < 1 || child.styles.isTransformed()) {
                        var order_1 = child.styles.zIndex.order;
                        if (order_1 < 0) {
                            var index_1 = 0;
                            parentStack.negativeZIndex.some(function (current, i) {
                                if (order_1 > current.element.container.styles.zIndex.order) {
                                    index_1 = i;
                                    return false;
                                } else if (index_1 > 0) {
                                    return true;
                                }
                                return false;
                            });
                            parentStack.negativeZIndex.splice(index_1, 0, stack);
                        } else if (order_1 > 0) {
                            var index_2 = 0;
                            parentStack.positiveZIndex.some(function (current, i) {
                                if (order_1 >= current.element.container.styles.zIndex.order) {
                                    index_2 = i + 1;
                                    return false;
                                } else if (index_2 > 0) {
                                    return true;
                                }
                                return false;
                            });
                            parentStack.positiveZIndex.splice(index_2, 0, stack);
                        } else {
                            parentStack.zeroOrAutoZIndexOrTransformedOrOpacity.push(stack);
                        }
                    } else {
                        if (child.styles.isFloating()) {
                            parentStack.nonPositionedFloats.push(stack);
                        } else {
                            parentStack.nonPositionedInlineLevel.push(stack);
                        }
                    }
                    parseStackTree(paintContainer, stack, treatAsRealStackingContext ? stack : realStackingContext, listOwnerItems);
                } else {
                    if (child.styles.isInlineLevel()) {
                        stackingContext.inlineLevel.push(paintContainer);
                    } else {
                        stackingContext.nonInlineLevel.push(paintContainer);
                    }
                    parseStackTree(paintContainer, stackingContext, realStackingContext, listOwnerItems);
                }
                if (contains(child.flags, 8 /* IS_LIST_OWNER */ )) {
                    processListItems(child, listOwnerItems);
                }
            });
        };
        var processListItems = function (owner, elements) {
            var numbering = owner instanceof OLElementContainer ? owner.start : 1;
            var reversed = owner instanceof OLElementContainer ? owner.reversed : false;
            for (var i = 0; i < elements.length; i++) {
                var item = elements[i];
                if (item.container instanceof LIElementContainer &&
                    typeof item.container.value === 'number' &&
                    item.container.value !== 0) {
                    numbering = item.container.value;
                }
                item.listValue = createCounterText(numbering, item.container.styles.listStyleType, true);
                numbering += reversed ? -1 : 1;
            }
        };
        var parseStackingContexts = function (container) {
            var paintContainer = new ElementPaint(container, null);
            var root = new StackingContext(paintContainer);
            var listItems = [];
            parseStackTree(paintContainer, root, root, listItems);
            processListItems(paintContainer.container, listItems);
            return root;
        };

        var parsePathForBorder = function (curves, borderSide) {
            switch (borderSide) {
                case 0:
                    return createPathFromCurves(curves.topLeftBorderBox, curves.topLeftPaddingBox, curves.topRightBorderBox, curves.topRightPaddingBox);
                case 1:
                    return createPathFromCurves(curves.topRightBorderBox, curves.topRightPaddingBox, curves.bottomRightBorderBox, curves.bottomRightPaddingBox);
                case 2:
                    return createPathFromCurves(curves.bottomRightBorderBox, curves.bottomRightPaddingBox, curves.bottomLeftBorderBox, curves.bottomLeftPaddingBox);
                case 3:
                default:
                    return createPathFromCurves(curves.bottomLeftBorderBox, curves.bottomLeftPaddingBox, curves.topLeftBorderBox, curves.topLeftPaddingBox);
            }
        };
        var parsePathForBorderDoubleOuter = function (curves, borderSide) {
            switch (borderSide) {
                case 0:
                    return createPathFromCurves(curves.topLeftBorderBox, curves.topLeftBorderDoubleOuterBox, curves.topRightBorderBox, curves.topRightBorderDoubleOuterBox);
                case 1:
                    return createPathFromCurves(curves.topRightBorderBox, curves.topRightBorderDoubleOuterBox, curves.bottomRightBorderBox, curves.bottomRightBorderDoubleOuterBox);
                case 2:
                    return createPathFromCurves(curves.bottomRightBorderBox, curves.bottomRightBorderDoubleOuterBox, curves.bottomLeftBorderBox, curves.bottomLeftBorderDoubleOuterBox);
                case 3:
                default:
                    return createPathFromCurves(curves.bottomLeftBorderBox, curves.bottomLeftBorderDoubleOuterBox, curves.topLeftBorderBox, curves.topLeftBorderDoubleOuterBox);
            }
        };
        var parsePathForBorderDoubleInner = function (curves, borderSide) {
            switch (borderSide) {
                case 0:
                    return createPathFromCurves(curves.topLeftBorderDoubleInnerBox, curves.topLeftPaddingBox, curves.topRightBorderDoubleInnerBox, curves.topRightPaddingBox);
                case 1:
                    return createPathFromCurves(curves.topRightBorderDoubleInnerBox, curves.topRightPaddingBox, curves.bottomRightBorderDoubleInnerBox, curves.bottomRightPaddingBox);
                case 2:
                    return createPathFromCurves(curves.bottomRightBorderDoubleInnerBox, curves.bottomRightPaddingBox, curves.bottomLeftBorderDoubleInnerBox, curves.bottomLeftPaddingBox);
                case 3:
                default:
                    return createPathFromCurves(curves.bottomLeftBorderDoubleInnerBox, curves.bottomLeftPaddingBox, curves.topLeftBorderDoubleInnerBox, curves.topLeftPaddingBox);
            }
        };
        var parsePathForBorderStroke = function (curves, borderSide) {
            switch (borderSide) {
                case 0:
                    return createStrokePathFromCurves(curves.topLeftBorderStroke, curves.topRightBorderStroke);
                case 1:
                    return createStrokePathFromCurves(curves.topRightBorderStroke, curves.bottomRightBorderStroke);
                case 2:
                    return createStrokePathFromCurves(curves.bottomRightBorderStroke, curves.bottomLeftBorderStroke);
                case 3:
                default:
                    return createStrokePathFromCurves(curves.bottomLeftBorderStroke, curves.topLeftBorderStroke);
            }
        };
        var createStrokePathFromCurves = function (outer1, outer2) {
            var path = [];
            if (isBezierCurve(outer1)) {
                path.push(outer1.subdivide(0.5, false));
            } else {
                path.push(outer1);
            }
            if (isBezierCurve(outer2)) {
                path.push(outer2.subdivide(0.5, true));
            } else {
                path.push(outer2);
            }
            return path;
        };
        var createPathFromCurves = function (outer1, inner1, outer2, inner2) {
            var path = [];
            if (isBezierCurve(outer1)) {
                path.push(outer1.subdivide(0.5, false));
            } else {
                path.push(outer1);
            }
            if (isBezierCurve(outer2)) {
                path.push(outer2.subdivide(0.5, true));
            } else {
                path.push(outer2);
            }
            if (isBezierCurve(inner2)) {
                path.push(inner2.subdivide(0.5, true).reverse());
            } else {
                path.push(inner2);
            }
            if (isBezierCurve(inner1)) {
                path.push(inner1.subdivide(0.5, false).reverse());
            } else {
                path.push(inner1);
            }
            return path;
        };

        var paddingBox = function (element) {
            var bounds = element.bounds;
            var styles = element.styles;
            return bounds.add(styles.borderLeftWidth, styles.borderTopWidth, -(styles.borderRightWidth + styles.borderLeftWidth), -(styles.borderTopWidth + styles.borderBottomWidth));
        };
        var contentBox = function (element) {
            var styles = element.styles;
            var bounds = element.bounds;
            var paddingLeft = getAbsoluteValue(styles.paddingLeft, bounds.width);
            var paddingRight = getAbsoluteValue(styles.paddingRight, bounds.width);
            var paddingTop = getAbsoluteValue(styles.paddingTop, bounds.width);
            var paddingBottom = getAbsoluteValue(styles.paddingBottom, bounds.width);
            return bounds.add(paddingLeft + styles.borderLeftWidth, paddingTop + styles.borderTopWidth, -(styles.borderRightWidth + styles.borderLeftWidth + paddingLeft + paddingRight), -(styles.borderTopWidth + styles.borderBottomWidth + paddingTop + paddingBottom));
        };

        var calculateBackgroundPositioningArea = function (backgroundOrigin, element) {
            if (backgroundOrigin === 0 /* BORDER_BOX */ ) {
                return element.bounds;
            }
            if (backgroundOrigin === 2 /* CONTENT_BOX */ ) {
                return contentBox(element);
            }
            return paddingBox(element);
        };
        var calculateBackgroundPaintingArea = function (backgroundClip, element) {
            if (backgroundClip === 0 /* BORDER_BOX */ ) {
                return element.bounds;
            }
            if (backgroundClip === 2 /* CONTENT_BOX */ ) {
                return contentBox(element);
            }
            return paddingBox(element);
        };
        var calculateBackgroundRendering = function (container, index, intrinsicSize) {
            var backgroundPositioningArea = calculateBackgroundPositioningArea(getBackgroundValueForIndex(container.styles.backgroundOrigin, index), container);
            var backgroundPaintingArea = calculateBackgroundPaintingArea(getBackgroundValueForIndex(container.styles.backgroundClip, index), container);
            var backgroundImageSize = calculateBackgroundSize(getBackgroundValueForIndex(container.styles.backgroundSize, index), intrinsicSize, backgroundPositioningArea);
            var sizeWidth = backgroundImageSize[0],
                sizeHeight = backgroundImageSize[1];
            var position = getAbsoluteValueForTuple(getBackgroundValueForIndex(container.styles.backgroundPosition, index), backgroundPositioningArea.width - sizeWidth, backgroundPositioningArea.height - sizeHeight);
            var path = calculateBackgroundRepeatPath(getBackgroundValueForIndex(container.styles.backgroundRepeat, index), position, backgroundImageSize, backgroundPositioningArea, backgroundPaintingArea);
            var offsetX = Math.round(backgroundPositioningArea.left + position[0]);
            var offsetY = Math.round(backgroundPositioningArea.top + position[1]);
            return [path, offsetX, offsetY, sizeWidth, sizeHeight];
        };
        var isAuto = function (token) {
            return isIdentToken(token) && token.value === BACKGROUND_SIZE.AUTO;
        };
        var hasIntrinsicValue = function (value) {
            return typeof value === 'number';
        };
        var calculateBackgroundSize = function (size, _a, bounds) {
            var intrinsicWidth = _a[0],
                intrinsicHeight = _a[1],
                intrinsicProportion = _a[2];
            var first = size[0],
                second = size[1];
            if (!first) {
                return [0, 0];
            }
            if (isLengthPercentage(first) && second && isLengthPercentage(second)) {
                return [getAbsoluteValue(first, bounds.width), getAbsoluteValue(second, bounds.height)];
            }
            var hasIntrinsicProportion = hasIntrinsicValue(intrinsicProportion);
            if (isIdentToken(first) && (first.value === BACKGROUND_SIZE.CONTAIN || first.value === BACKGROUND_SIZE.COVER)) {
                if (hasIntrinsicValue(intrinsicProportion)) {
                    var targetRatio = bounds.width / bounds.height;
                    return targetRatio < intrinsicProportion !== (first.value === BACKGROUND_SIZE.COVER) ? [bounds.width, bounds.width / intrinsicProportion] : [bounds.height * intrinsicProportion, bounds.height];
                }
                return [bounds.width, bounds.height];
            }
            var hasIntrinsicWidth = hasIntrinsicValue(intrinsicWidth);
            var hasIntrinsicHeight = hasIntrinsicValue(intrinsicHeight);
            var hasIntrinsicDimensions = hasIntrinsicWidth || hasIntrinsicHeight;
            // If the background-size is auto or auto auto:
            if (isAuto(first) && (!second || isAuto(second))) {
                // If the image has both horizontal and vertical intrinsic dimensions, it's rendered at that size.
                if (hasIntrinsicWidth && hasIntrinsicHeight) {
                    return [intrinsicWidth, intrinsicHeight];
                }
                // If the image has no intrinsic dimensions and has no intrinsic proportions,
                // it's rendered at the size of the background positioning area.
                if (!hasIntrinsicProportion && !hasIntrinsicDimensions) {
                    return [bounds.width, bounds.height];
                }
                // TODO If the image has no intrinsic dimensions but has intrinsic proportions, it's rendered as if contain had been specified instead.
                // If the image has only one intrinsic dimension and has intrinsic proportions, it's rendered at the size corresponding to that one dimension.
                // The other dimension is computed using the specified dimension and the intrinsic proportions.
                if (hasIntrinsicDimensions && hasIntrinsicProportion) {
                    var width_1 = hasIntrinsicWidth ?
                        intrinsicWidth :
                        intrinsicHeight * intrinsicProportion;
                    var height_1 = hasIntrinsicHeight ?
                        intrinsicHeight :
                        intrinsicWidth / intrinsicProportion;
                    return [width_1, height_1];
                }
                // If the image has only one intrinsic dimension but has no intrinsic proportions,
                // it's rendered using the specified dimension and the other dimension of the background positioning area.
                var width_2 = hasIntrinsicWidth ? intrinsicWidth : bounds.width;
                var height_2 = hasIntrinsicHeight ? intrinsicHeight : bounds.height;
                return [width_2, height_2];
            }
            // If the image has intrinsic proportions, it's stretched to the specified dimension.
            // The unspecified dimension is computed using the specified dimension and the intrinsic proportions.
            if (hasIntrinsicProportion) {
                var width_3 = 0;
                var height_3 = 0;
                if (isLengthPercentage(first)) {
                    width_3 = getAbsoluteValue(first, bounds.width);
                } else if (isLengthPercentage(second)) {
                    height_3 = getAbsoluteValue(second, bounds.height);
                }
                if (isAuto(first)) {
                    width_3 = height_3 * intrinsicProportion;
                } else if (!second || isAuto(second)) {
                    height_3 = width_3 / intrinsicProportion;
                }
                return [width_3, height_3];
            }
            // If the image has no intrinsic proportions, it's stretched to the specified dimension.
            // The unspecified dimension is computed using the image's corresponding intrinsic dimension,
            // if there is one. If there is no such intrinsic dimension,
            // it becomes the corresponding dimension of the background positioning area.
            var width = null;
            var height = null;
            if (isLengthPercentage(first)) {
                width = getAbsoluteValue(first, bounds.width);
            } else if (second && isLengthPercentage(second)) {
                height = getAbsoluteValue(second, bounds.height);
            }
            if (width !== null && (!second || isAuto(second))) {
                height =
                    hasIntrinsicWidth && hasIntrinsicHeight ?
                    (width / intrinsicWidth) * intrinsicHeight :
                    bounds.height;
            }
            if (height !== null && isAuto(first)) {
                width =
                    hasIntrinsicWidth && hasIntrinsicHeight ?
                    (height / intrinsicHeight) * intrinsicWidth :
                    bounds.width;
            }
            if (width !== null && height !== null) {
                return [width, height];
            }
            throw new Error("Unable to calculate background-size for element");
        };
        var getBackgroundValueForIndex = function (values, index) {
            var value = values[index];
            if (typeof value === 'undefined') {
                return values[0];
            }
            return value;
        };
        var calculateBackgroundRepeatPath = function (repeat, _a, _b, backgroundPositioningArea, backgroundPaintingArea) {
            var x = _a[0],
                y = _a[1];
            var width = _b[0],
                height = _b[1];
            switch (repeat) {
                case 2 /* REPEAT_X */ :
                    return [
                        new Vector(Math.round(backgroundPositioningArea.left), Math.round(backgroundPositioningArea.top + y)),
                        new Vector(Math.round(backgroundPositioningArea.left + backgroundPositioningArea.width), Math.round(backgroundPositioningArea.top + y)),
                        new Vector(Math.round(backgroundPositioningArea.left + backgroundPositioningArea.width), Math.round(height + backgroundPositioningArea.top + y)),
                        new Vector(Math.round(backgroundPositioningArea.left), Math.round(height + backgroundPositioningArea.top + y))
                    ];
                case 3 /* REPEAT_Y */ :
                    return [
                        new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top)),
                        new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top)),
                        new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.height + backgroundPositioningArea.top)),
                        new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.height + backgroundPositioningArea.top))
                    ];
                case 1 /* NO_REPEAT */ :
                    return [
                        new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top + y)),
                        new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top + y)),
                        new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top + y + height)),
                        new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top + y + height))
                    ];
                default:
                    return [
                        new Vector(Math.round(backgroundPaintingArea.left), Math.round(backgroundPaintingArea.top)),
                        new Vector(Math.round(backgroundPaintingArea.left + backgroundPaintingArea.width), Math.round(backgroundPaintingArea.top)),
                        new Vector(Math.round(backgroundPaintingArea.left + backgroundPaintingArea.width), Math.round(backgroundPaintingArea.height + backgroundPaintingArea.top)),
                        new Vector(Math.round(backgroundPaintingArea.left), Math.round(backgroundPaintingArea.height + backgroundPaintingArea.top))
                    ];
            }
        };

        var SMALL_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

        var SAMPLE_TEXT = 'Hidden Text';
        var FontMetrics = /** @class */ (function () {
            function FontMetrics(document) {
                this._data = {};
                this._document = document;
            }
            FontMetrics.prototype.parseMetrics = function (fontFamily, fontSize) {
                var container = this._document.createElement('div');
                var img = this._document.createElement('img');
                var span = this._document.createElement('span');
                var body = this._document.body;
                container.style.visibility = 'hidden';
                container.style.fontFamily = fontFamily;
                container.style.fontSize = fontSize;
                container.style.margin = '0';
                container.style.padding = '0';
                container.style.whiteSpace = 'nowrap';
                body.appendChild(container);
                img.src = SMALL_IMAGE;
                img.width = 1;
                img.height = 1;
                img.style.margin = '0';
                img.style.padding = '0';
                img.style.verticalAlign = 'baseline';
                span.style.fontFamily = fontFamily;
                span.style.fontSize = fontSize;
                span.style.margin = '0';
                span.style.padding = '0';
                span.appendChild(this._document.createTextNode(SAMPLE_TEXT));
                container.appendChild(span);
                container.appendChild(img);
                var baseline = img.offsetTop - span.offsetTop + 2;
                container.removeChild(span);
                container.appendChild(this._document.createTextNode(SAMPLE_TEXT));
                container.style.lineHeight = 'normal';
                img.style.verticalAlign = 'super';
                var middle = img.offsetTop - container.offsetTop + 2;
                body.removeChild(container);
                return {
                    baseline: baseline,
                    middle: middle
                };
            };
            FontMetrics.prototype.getMetrics = function (fontFamily, fontSize) {
                var key = fontFamily + " " + fontSize;
                if (typeof this._data[key] === 'undefined') {
                    this._data[key] = this.parseMetrics(fontFamily, fontSize);
                }
                return this._data[key];
            };
            return FontMetrics;
        }());

        var Renderer = /** @class */ (function () {
            function Renderer(context, options) {
                this.context = context;
                this.options = options;
            }
            return Renderer;
        }());

        var MASK_OFFSET = 10000;
        var CanvasRenderer = /** @class */ (function (_super) {
            __extends(CanvasRenderer, _super);

            function CanvasRenderer(context, options) {
                var _this = _super.call(this, context, options) || this;
                _this._activeEffects = [];
                _this.canvas = options.canvas ? options.canvas : document.createElement('canvas');
                _this.ctx = _this.canvas.getContext('2d');
                if (!options.canvas) {
                    _this.canvas.width = Math.floor(options.width * options.scale);
                    _this.canvas.height = Math.floor(options.height * options.scale);
                    _this.canvas.style.width = options.width + "px";
                    _this.canvas.style.height = options.height + "px";
                }
                _this.fontMetrics = new FontMetrics(document);
                _this.ctx.scale(_this.options.scale, _this.options.scale);
                _this.ctx.translate(-options.x, -options.y);
                _this.ctx.textBaseline = 'bottom';
                _this._activeEffects = [];
                _this.context.logger.debug("Canvas renderer initialized (" + options.width + "x" + options.height + ") with scale " + options.scale);
                return _this;
            }
            CanvasRenderer.prototype.applyEffects = function (effects) {
                var _this = this;
                while (this._activeEffects.length) {
                    this.popEffect();
                }
                effects.forEach(function (effect) {
                    return _this.applyEffect(effect);
                });
            };
            CanvasRenderer.prototype.applyEffect = function (effect) {
                this.ctx.save();
                if (isOpacityEffect(effect)) {
                    this.ctx.globalAlpha = effect.opacity;
                }
                if (isTransformEffect(effect)) {
                    this.ctx.translate(effect.offsetX, effect.offsetY);
                    this.ctx.transform(effect.matrix[0], effect.matrix[1], effect.matrix[2], effect.matrix[3], effect.matrix[4], effect.matrix[5]);
                    this.ctx.translate(-effect.offsetX, -effect.offsetY);
                }
                if (isClipEffect(effect)) {
                    this.path(effect.path);
                    this.ctx.clip();
                }
                this._activeEffects.push(effect);
            };
            CanvasRenderer.prototype.popEffect = function () {
                this._activeEffects.pop();
                this.ctx.restore();
            };
            CanvasRenderer.prototype.renderStack = function (stack) {
                return __awaiter(this, void 0, void 0, function () {
                    var styles;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                styles = stack.element.container.styles;
                                if (!styles.isVisible()) return [3 /*break*/ , 2];
                                return [4 /*yield*/ , this.renderStackContent(stack)];
                            case 1:
                                _a.sent();
                                _a.label = 2;
                            case 2:
                                return [2 /*return*/ ];
                        }
                    });
                });
            };
            CanvasRenderer.prototype.renderNode = function (paint) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (contains(paint.container.flags, 16 /* DEBUG_RENDER */ )) {
                                    debugger;
                                }
                                if (!paint.container.styles.isVisible()) return [3 /*break*/ , 3];
                                return [4 /*yield*/ , this.renderNodeBackgroundAndBorders(paint)];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/ , this.renderNodeContent(paint)];
                            case 2:
                                _a.sent();
                                _a.label = 3;
                            case 3:
                                return [2 /*return*/ ];
                        }
                    });
                });
            };
            CanvasRenderer.prototype.renderTextWithLetterSpacing = function (text, letterSpacing, baseline) {
                var _this = this;
                if (letterSpacing === 0) {
                    this.ctx.fillText(text.text, text.bounds.left, text.bounds.top + baseline);
                } else {
                    var letters = segmentGraphemes(text.text);
                    letters.reduce(function (left, letter) {
                        _this.ctx.fillText(letter, left, text.bounds.top + baseline);
                        return left + _this.ctx.measureText(letter).width;
                    }, text.bounds.left);
                }
            };
            CanvasRenderer.prototype.createFontStyle = function (styles) {
                var fontVariant = styles.fontVariant
                    .filter(function (variant) {
                        return variant === 'normal' || variant === 'small-caps';
                    })
                    .join('');
                var fontFamily = fixIOSSystemFonts(styles.fontFamily).join(', ');
                var fontSize = isDimensionToken(styles.fontSize) ?
                    "" + styles.fontSize.number + styles.fontSize.unit :
                    styles.fontSize.number + "px";
                return [
                    [styles.fontStyle, fontVariant, styles.fontWeight, fontSize, fontFamily].join(' '),
                    fontFamily,
                    fontSize
                ];
            };
            CanvasRenderer.prototype.renderTextNode = function (text, styles) {
                return __awaiter(this, void 0, void 0, function () {
                    var _a, font, fontFamily, fontSize, _b, baseline, middle, paintOrder;
                    var _this = this;
                    return __generator(this, function (_c) {
                        _a = this.createFontStyle(styles), font = _a[0], fontFamily = _a[1], fontSize = _a[2];
                        this.ctx.font = font;
                        this.ctx.direction = styles.direction === 1 /* RTL */ ? 'rtl' : 'ltr';
                        this.ctx.textAlign = 'left';
                        this.ctx.textBaseline = 'alphabetic';
                        _b = this.fontMetrics.getMetrics(fontFamily, fontSize), baseline = _b.baseline, middle = _b.middle;
                        paintOrder = styles.paintOrder;
                        text.textBounds.forEach(function (text) {
                            paintOrder.forEach(function (paintOrderLayer) {
                                switch (paintOrderLayer) {
                                    case 0 /* FILL */ :
                                        _this.ctx.fillStyle = asString(styles.color);
                                        _this.renderTextWithLetterSpacing(text, styles.letterSpacing, baseline);
                                        var textShadows = styles.textShadow;
                                        if (textShadows.length && text.text.trim().length) {
                                            textShadows
                                                .slice(0)
                                                .reverse()
                                                .forEach(function (textShadow) {
                                                    _this.ctx.shadowColor = asString(textShadow.color);
                                                    _this.ctx.shadowOffsetX = textShadow.offsetX.number * _this.options.scale;
                                                    _this.ctx.shadowOffsetY = textShadow.offsetY.number * _this.options.scale;
                                                    _this.ctx.shadowBlur = textShadow.blur.number;
                                                    _this.renderTextWithLetterSpacing(text, styles.letterSpacing, baseline);
                                                });
                                            _this.ctx.shadowColor = '';
                                            _this.ctx.shadowOffsetX = 0;
                                            _this.ctx.shadowOffsetY = 0;
                                            _this.ctx.shadowBlur = 0;
                                        }
                                        if (styles.textDecorationLine.length) {
                                            _this.ctx.fillStyle = asString(styles.textDecorationColor || styles.color);
                                            styles.textDecorationLine.forEach(function (textDecorationLine) {
                                                switch (textDecorationLine) {
                                                    case 1 /* UNDERLINE */ :
                                                        // Draws a line at the baseline of the font
                                                        // TODO As some browsers display the line as more than 1px if the font-size is big,
                                                        // need to take that into account both in position and size
                                                        _this.ctx.fillRect(text.bounds.left, Math.round(text.bounds.top + baseline), text.bounds.width, 1);
                                                        break;
                                                    case 2 /* OVERLINE */ :
                                                        _this.ctx.fillRect(text.bounds.left, Math.round(text.bounds.top), text.bounds.width, 1);
                                                        break;
                                                    case 3 /* LINE_THROUGH */ :
                                                        // TODO try and find exact position for line-through
                                                        _this.ctx.fillRect(text.bounds.left, Math.ceil(text.bounds.top + middle), text.bounds.width, 1);
                                                        break;
                                                }
                                            });
                                        }
                                        break;
                                    case 1 /* STROKE */ :
                                        if (styles.webkitTextStrokeWidth && text.text.trim().length) {
                                            _this.ctx.strokeStyle = asString(styles.webkitTextStrokeColor);
                                            _this.ctx.lineWidth = styles.webkitTextStrokeWidth;
                                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                            _this.ctx.lineJoin = !!window.chrome ? 'miter' : 'round';
                                            _this.ctx.strokeText(text.text, text.bounds.left, text.bounds.top + baseline);
                                        }
                                        _this.ctx.strokeStyle = '';
                                        _this.ctx.lineWidth = 0;
                                        _this.ctx.lineJoin = 'miter';
                                        break;
                                }
                            });
                        });
                        return [2 /*return*/ ];
                    });
                });
            };
            CanvasRenderer.prototype.renderReplacedElement = function (container, curves, image) {
                if (image && container.intrinsicWidth > 0 && container.intrinsicHeight > 0) {
                    var box = contentBox(container);
                    var path = calculatePaddingBoxPath(curves);
                    this.path(path);
                    this.ctx.save();
                    this.ctx.clip();
                    this.ctx.drawImage(image, 0, 0, container.intrinsicWidth, container.intrinsicHeight, box.left, box.top, box.width, box.height);
                    this.ctx.restore();
                }
            };
            CanvasRenderer.prototype.renderNodeContent = function (paint) {
                return __awaiter(this, void 0, void 0, function () {
                    var container, curves, styles, _i, _a, child, image, image, iframeRenderer, canvas, size, _b, fontFamily, fontSize, baseline, bounds, x, textBounds, img, image, url, fontFamily, bounds;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                this.applyEffects(paint.getEffects(4 /* CONTENT */ ));
                                container = paint.container;
                                curves = paint.curves;
                                styles = container.styles;
                                _i = 0, _a = container.textNodes;
                                _c.label = 1;
                            case 1:
                                if (!(_i < _a.length)) return [3 /*break*/ , 4];
                                child = _a[_i];
                                return [4 /*yield*/ , this.renderTextNode(child, styles)];
                            case 2:
                                _c.sent();
                                _c.label = 3;
                            case 3:
                                _i++;
                                return [3 /*break*/ , 1];
                            case 4:
                                if (!(container instanceof ImageElementContainer)) return [3 /*break*/ , 8];
                                _c.label = 5;
                            case 5:
                                _c.trys.push([5, 7, , 8]);
                                return [4 /*yield*/ , this.context.cache.match(container.src)];
                            case 6:
                                image = _c.sent();
                                this.renderReplacedElement(container, curves, image);
                                return [3 /*break*/ , 8];
                            case 7:
                                _c.sent();
                                this.context.logger.error("Error loading image " + container.src);
                                return [3 /*break*/ , 8];
                            case 8:
                                if (container instanceof CanvasElementContainer) {
                                    this.renderReplacedElement(container, curves, container.canvas);
                                }
                                if (!(container instanceof SVGElementContainer)) return [3 /*break*/ , 12];
                                _c.label = 9;
                            case 9:
                                _c.trys.push([9, 11, , 12]);
                                return [4 /*yield*/ , this.context.cache.match(container.svg)];
                            case 10:
                                image = _c.sent();
                                this.renderReplacedElement(container, curves, image);
                                return [3 /*break*/ , 12];
                            case 11:
                                _c.sent();
                                this.context.logger.error("Error loading svg " + container.svg.substring(0, 255));
                                return [3 /*break*/ , 12];
                            case 12:
                                if (!(container instanceof IFrameElementContainer && container.tree)) return [3 /*break*/ , 14];
                                iframeRenderer = new CanvasRenderer(this.context, {
                                    scale: this.options.scale,
                                    backgroundColor: container.backgroundColor,
                                    x: 0,
                                    y: 0,
                                    width: container.width,
                                    height: container.height
                                });
                                return [4 /*yield*/ , iframeRenderer.render(container.tree)];
                            case 13:
                                canvas = _c.sent();
                                if (container.width && container.height) {
                                    this.ctx.drawImage(canvas, 0, 0, container.width, container.height, container.bounds.left, container.bounds.top, container.bounds.width, container.bounds.height);
                                }
                                _c.label = 14;
                            case 14:
                                if (container instanceof InputElementContainer) {
                                    size = Math.min(container.bounds.width, container.bounds.height);
                                    if (container.type === CHECKBOX) {
                                        if (container.checked) {
                                            this.ctx.save();
                                            this.path([
                                                new Vector(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79),
                                                new Vector(container.bounds.left + size * 0.16, container.bounds.top + size * 0.5549),
                                                new Vector(container.bounds.left + size * 0.27347, container.bounds.top + size * 0.44071),
                                                new Vector(container.bounds.left + size * 0.39694, container.bounds.top + size * 0.5649),
                                                new Vector(container.bounds.left + size * 0.72983, container.bounds.top + size * 0.23),
                                                new Vector(container.bounds.left + size * 0.84, container.bounds.top + size * 0.34085),
                                                new Vector(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79)
                                            ]);
                                            this.ctx.fillStyle = asString(INPUT_COLOR);
                                            this.ctx.fill();
                                            this.ctx.restore();
                                        }
                                    } else if (container.type === RADIO) {
                                        if (container.checked) {
                                            this.ctx.save();
                                            this.ctx.beginPath();
                                            this.ctx.arc(container.bounds.left + size / 2, container.bounds.top + size / 2, size / 4, 0, Math.PI * 2, true);
                                            this.ctx.fillStyle = asString(INPUT_COLOR);
                                            this.ctx.fill();
                                            this.ctx.restore();
                                        }
                                    }
                                }
                                if (isTextInputElement(container) && container.value.length) {
                                    _b = this.createFontStyle(styles), fontFamily = _b[0], fontSize = _b[1];
                                    baseline = this.fontMetrics.getMetrics(fontFamily, fontSize).baseline;
                                    this.ctx.font = fontFamily;
                                    this.ctx.fillStyle = asString(styles.color);
                                    this.ctx.textBaseline = 'alphabetic';
                                    this.ctx.textAlign = canvasTextAlign(container.styles.textAlign);
                                    bounds = contentBox(container);
                                    x = 0;
                                    switch (container.styles.textAlign) {
                                        case 1 /* CENTER */ :
                                            x += bounds.width / 2;
                                            break;
                                        case 2 /* RIGHT */ :
                                            x += bounds.width;
                                            break;
                                    }
                                    textBounds = bounds.add(x, 0, 0, -bounds.height / 2 + 1);
                                    this.ctx.save();
                                    this.path([
                                        new Vector(bounds.left, bounds.top),
                                        new Vector(bounds.left + bounds.width, bounds.top),
                                        new Vector(bounds.left + bounds.width, bounds.top + bounds.height),
                                        new Vector(bounds.left, bounds.top + bounds.height)
                                    ]);
                                    this.ctx.clip();
                                    this.renderTextWithLetterSpacing(new TextBounds(container.value, textBounds), styles.letterSpacing, baseline);
                                    this.ctx.restore();
                                    this.ctx.textBaseline = 'alphabetic';
                                    this.ctx.textAlign = 'left';
                                }
                                if (!contains(container.styles.display, 2048 /* LIST_ITEM */ )) return [3 /*break*/ , 20];
                                if (!(container.styles.listStyleImage !== null)) return [3 /*break*/ , 19];
                                img = container.styles.listStyleImage;
                                if (!(img.type === 0 /* URL */ )) return [3 /*break*/ , 18];
                                image = void 0;
                                url = img.url;
                                _c.label = 15;
                            case 15:
                                _c.trys.push([15, 17, , 18]);
                                return [4 /*yield*/ , this.context.cache.match(url)];
                            case 16:
                                image = _c.sent();
                                this.ctx.drawImage(image, container.bounds.left - (image.width + 10), container.bounds.top);
                                return [3 /*break*/ , 18];
                            case 17:
                                _c.sent();
                                this.context.logger.error("Error loading list-style-image " + url);
                                return [3 /*break*/ , 18];
                            case 18:
                                return [3 /*break*/ , 20];
                            case 19:
                                if (paint.listValue && container.styles.listStyleType !== -1 /* NONE */ ) {
                                    fontFamily = this.createFontStyle(styles)[0];
                                    this.ctx.font = fontFamily;
                                    this.ctx.fillStyle = asString(styles.color);
                                    this.ctx.textBaseline = 'middle';
                                    this.ctx.textAlign = 'right';
                                    bounds = new Bounds(container.bounds.left, container.bounds.top + getAbsoluteValue(container.styles.paddingTop, container.bounds.width), container.bounds.width, computeLineHeight(styles.lineHeight, styles.fontSize.number) / 2 + 1);
                                    this.renderTextWithLetterSpacing(new TextBounds(paint.listValue, bounds), styles.letterSpacing, computeLineHeight(styles.lineHeight, styles.fontSize.number) / 2 + 2);
                                    this.ctx.textBaseline = 'bottom';
                                    this.ctx.textAlign = 'left';
                                }
                                _c.label = 20;
                            case 20:
                                return [2 /*return*/ ];
                        }
                    });
                });
            };
            CanvasRenderer.prototype.renderStackContent = function (stack) {
                return __awaiter(this, void 0, void 0, function () {
                    var _i, _a, child, _b, _c, child, _d, _e, child, _f, _g, child, _h, _j, child, _k, _l, child, _m, _o, child;
                    return __generator(this, function (_p) {
                        switch (_p.label) {
                            case 0:
                                if (contains(stack.element.container.flags, 16 /* DEBUG_RENDER */ )) {
                                    debugger;
                                }
                                // https://www.w3.org/TR/css-position-3/#painting-order
                                // 1. the background and borders of the element forming the stacking context.
                                return [4 /*yield*/ , this.renderNodeBackgroundAndBorders(stack.element)];
                            case 1:
                                // https://www.w3.org/TR/css-position-3/#painting-order
                                // 1. the background and borders of the element forming the stacking context.
                                _p.sent();
                                _i = 0, _a = stack.negativeZIndex;
                                _p.label = 2;
                            case 2:
                                if (!(_i < _a.length)) return [3 /*break*/ , 5];
                                child = _a[_i];
                                return [4 /*yield*/ , this.renderStack(child)];
                            case 3:
                                _p.sent();
                                _p.label = 4;
                            case 4:
                                _i++;
                                return [3 /*break*/ , 2];
                            case 5:
                                // 3. For all its in-flow, non-positioned, block-level descendants in tree order:
                                return [4 /*yield*/ , this.renderNodeContent(stack.element)];
                            case 6:
                                // 3. For all its in-flow, non-positioned, block-level descendants in tree order:
                                _p.sent();
                                _b = 0, _c = stack.nonInlineLevel;
                                _p.label = 7;
                            case 7:
                                if (!(_b < _c.length)) return [3 /*break*/ , 10];
                                child = _c[_b];
                                return [4 /*yield*/ , this.renderNode(child)];
                            case 8:
                                _p.sent();
                                _p.label = 9;
                            case 9:
                                _b++;
                                return [3 /*break*/ , 7];
                            case 10:
                                _d = 0, _e = stack.nonPositionedFloats;
                                _p.label = 11;
                            case 11:
                                if (!(_d < _e.length)) return [3 /*break*/ , 14];
                                child = _e[_d];
                                return [4 /*yield*/ , this.renderStack(child)];
                            case 12:
                                _p.sent();
                                _p.label = 13;
                            case 13:
                                _d++;
                                return [3 /*break*/ , 11];
                            case 14:
                                _f = 0, _g = stack.nonPositionedInlineLevel;
                                _p.label = 15;
                            case 15:
                                if (!(_f < _g.length)) return [3 /*break*/ , 18];
                                child = _g[_f];
                                return [4 /*yield*/ , this.renderStack(child)];
                            case 16:
                                _p.sent();
                                _p.label = 17;
                            case 17:
                                _f++;
                                return [3 /*break*/ , 15];
                            case 18:
                                _h = 0, _j = stack.inlineLevel;
                                _p.label = 19;
                            case 19:
                                if (!(_h < _j.length)) return [3 /*break*/ , 22];
                                child = _j[_h];
                                return [4 /*yield*/ , this.renderNode(child)];
                            case 20:
                                _p.sent();
                                _p.label = 21;
                            case 21:
                                _h++;
                                return [3 /*break*/ , 19];
                            case 22:
                                _k = 0, _l = stack.zeroOrAutoZIndexOrTransformedOrOpacity;
                                _p.label = 23;
                            case 23:
                                if (!(_k < _l.length)) return [3 /*break*/ , 26];
                                child = _l[_k];
                                return [4 /*yield*/ , this.renderStack(child)];
                            case 24:
                                _p.sent();
                                _p.label = 25;
                            case 25:
                                _k++;
                                return [3 /*break*/ , 23];
                            case 26:
                                _m = 0, _o = stack.positiveZIndex;
                                _p.label = 27;
                            case 27:
                                if (!(_m < _o.length)) return [3 /*break*/ , 30];
                                child = _o[_m];
                                return [4 /*yield*/ , this.renderStack(child)];
                            case 28:
                                _p.sent();
                                _p.label = 29;
                            case 29:
                                _m++;
                                return [3 /*break*/ , 27];
                            case 30:
                                return [2 /*return*/ ];
                        }
                    });
                });
            };
            CanvasRenderer.prototype.mask = function (paths) {
                this.ctx.beginPath();
                this.ctx.moveTo(0, 0);
                this.ctx.lineTo(this.canvas.width, 0);
                this.ctx.lineTo(this.canvas.width, this.canvas.height);
                this.ctx.lineTo(0, this.canvas.height);
                this.ctx.lineTo(0, 0);
                this.formatPath(paths.slice(0).reverse());
                this.ctx.closePath();
            };
            CanvasRenderer.prototype.path = function (paths) {
                this.ctx.beginPath();
                this.formatPath(paths);
                this.ctx.closePath();
            };
            CanvasRenderer.prototype.formatPath = function (paths) {
                var _this = this;
                paths.forEach(function (point, index) {
                    var start = isBezierCurve(point) ? point.start : point;
                    if (index === 0) {
                        _this.ctx.moveTo(start.x, start.y);
                    } else {
                        _this.ctx.lineTo(start.x, start.y);
                    }
                    if (isBezierCurve(point)) {
                        _this.ctx.bezierCurveTo(point.startControl.x, point.startControl.y, point.endControl.x, point.endControl.y, point.end.x, point.end.y);
                    }
                });
            };
            CanvasRenderer.prototype.renderRepeat = function (path, pattern, offsetX, offsetY) {
                this.path(path);
                this.ctx.fillStyle = pattern;
                this.ctx.translate(offsetX, offsetY);
                this.ctx.fill();
                this.ctx.translate(-offsetX, -offsetY);
            };
            CanvasRenderer.prototype.resizeImage = function (image, width, height) {
                var _a;
                if (image.width === width && image.height === height) {
                    return image;
                }
                var ownerDocument = (_a = this.canvas.ownerDocument) !== null && _a !== void 0 ? _a : document;
                var canvas = ownerDocument.createElement('canvas');
                canvas.width = Math.max(1, width);
                canvas.height = Math.max(1, height);
                var ctx = canvas.getContext('2d');
                ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, width, height);
                return canvas;
            };
            CanvasRenderer.prototype.renderBackgroundImage = function (container) {
                return __awaiter(this, void 0, void 0, function () {
                    var index, _loop_1, this_1, _i, _a, backgroundImage;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                index = container.styles.backgroundImage.length - 1;
                                _loop_1 = function (backgroundImage) {
                                    var image, url, _c, path, x, y, width, height, pattern, _d, path, x, y, width, height, _e, lineLength, x0, x1, y0, y1, canvas, ctx, gradient_1, pattern, _f, path, left, top_1, width, height, position, x, y, _g, rx, ry, radialGradient_1, midX, midY, f, invF;
                                    return __generator(this, function (_h) {
                                        switch (_h.label) {
                                            case 0:
                                                if (!(backgroundImage.type === 0 /* URL */ )) return [3 /*break*/ , 5];
                                                image = void 0;
                                                url = backgroundImage.url;
                                                _h.label = 1;
                                            case 1:
                                                _h.trys.push([1, 3, , 4]);
                                                return [4 /*yield*/ , this_1.context.cache.match(url)];
                                            case 2:
                                                image = _h.sent();
                                                return [3 /*break*/ , 4];
                                            case 3:
                                                _h.sent();
                                                this_1.context.logger.error("Error loading background-image " + url);
                                                return [3 /*break*/ , 4];
                                            case 4:
                                                if (image) {
                                                    _c = calculateBackgroundRendering(container, index, [
                                                        image.width,
                                                        image.height,
                                                        image.width / image.height
                                                    ]), path = _c[0], x = _c[1], y = _c[2], width = _c[3], height = _c[4];
                                                    pattern = this_1.ctx.createPattern(this_1.resizeImage(image, width, height), 'repeat');
                                                    this_1.renderRepeat(path, pattern, x, y);
                                                }
                                                return [3 /*break*/ , 6];
                                            case 5:
                                                if (isLinearGradient(backgroundImage)) {
                                                    _d = calculateBackgroundRendering(container, index, [null, null, null]), path = _d[0], x = _d[1], y = _d[2], width = _d[3], height = _d[4];
                                                    _e = calculateGradientDirection(backgroundImage.angle, width, height), lineLength = _e[0], x0 = _e[1], x1 = _e[2], y0 = _e[3], y1 = _e[4];
                                                    canvas = document.createElement('canvas');
                                                    canvas.width = width;
                                                    canvas.height = height;
                                                    ctx = canvas.getContext('2d');
                                                    gradient_1 = ctx.createLinearGradient(x0, y0, x1, y1);
                                                    processColorStops(backgroundImage.stops, lineLength).forEach(function (colorStop) {
                                                        return gradient_1.addColorStop(colorStop.stop, asString(colorStop.color));
                                                    });
                                                    ctx.fillStyle = gradient_1;
                                                    ctx.fillRect(0, 0, width, height);
                                                    if (width > 0 && height > 0) {
                                                        pattern = this_1.ctx.createPattern(canvas, 'repeat');
                                                        this_1.renderRepeat(path, pattern, x, y);
                                                    }
                                                } else if (isRadialGradient(backgroundImage)) {
                                                    _f = calculateBackgroundRendering(container, index, [
                                                        null,
                                                        null,
                                                        null
                                                    ]), path = _f[0], left = _f[1], top_1 = _f[2], width = _f[3], height = _f[4];
                                                    position = backgroundImage.position.length === 0 ? [FIFTY_PERCENT] : backgroundImage.position;
                                                    x = getAbsoluteValue(position[0], width);
                                                    y = getAbsoluteValue(position[position.length - 1], height);
                                                    _g = calculateRadius(backgroundImage, x, y, width, height), rx = _g[0], ry = _g[1];
                                                    if (rx > 0 && ry > 0) {
                                                        radialGradient_1 = this_1.ctx.createRadialGradient(left + x, top_1 + y, 0, left + x, top_1 + y, rx);
                                                        processColorStops(backgroundImage.stops, rx * 2).forEach(function (colorStop) {
                                                            return radialGradient_1.addColorStop(colorStop.stop, asString(colorStop.color));
                                                        });
                                                        this_1.path(path);
                                                        this_1.ctx.fillStyle = radialGradient_1;
                                                        if (rx !== ry) {
                                                            midX = container.bounds.left + 0.5 * container.bounds.width;
                                                            midY = container.bounds.top + 0.5 * container.bounds.height;
                                                            f = ry / rx;
                                                            invF = 1 / f;
                                                            this_1.ctx.save();
                                                            this_1.ctx.translate(midX, midY);
                                                            this_1.ctx.transform(1, 0, 0, f, 0, 0);
                                                            this_1.ctx.translate(-midX, -midY);
                                                            this_1.ctx.fillRect(left, invF * (top_1 - midY) + midY, width, height * invF);
                                                            this_1.ctx.restore();
                                                        } else {
                                                            this_1.ctx.fill();
                                                        }
                                                    }
                                                }
                                                _h.label = 6;
                                            case 6:
                                                index--;
                                                return [2 /*return*/ ];
                                        }
                                    });
                                };
                                this_1 = this;
                                _i = 0, _a = container.styles.backgroundImage.slice(0).reverse();
                                _b.label = 1;
                            case 1:
                                if (!(_i < _a.length)) return [3 /*break*/ , 4];
                                backgroundImage = _a[_i];
                                return [5 /*yield**/ , _loop_1(backgroundImage)];
                            case 2:
                                _b.sent();
                                _b.label = 3;
                            case 3:
                                _i++;
                                return [3 /*break*/ , 1];
                            case 4:
                                return [2 /*return*/ ];
                        }
                    });
                });
            };
            CanvasRenderer.prototype.renderSolidBorder = function (color, side, curvePoints) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        this.path(parsePathForBorder(curvePoints, side));
                        this.ctx.fillStyle = asString(color);
                        this.ctx.fill();
                        return [2 /*return*/ ];
                    });
                });
            };
            CanvasRenderer.prototype.renderDoubleBorder = function (color, width, side, curvePoints) {
                return __awaiter(this, void 0, void 0, function () {
                    var outerPaths, innerPaths;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!(width < 3)) return [3 /*break*/ , 2];
                                return [4 /*yield*/ , this.renderSolidBorder(color, side, curvePoints)];
                            case 1:
                                _a.sent();
                                return [2 /*return*/ ];
                            case 2:
                                outerPaths = parsePathForBorderDoubleOuter(curvePoints, side);
                                this.path(outerPaths);
                                this.ctx.fillStyle = asString(color);
                                this.ctx.fill();
                                innerPaths = parsePathForBorderDoubleInner(curvePoints, side);
                                this.path(innerPaths);
                                this.ctx.fill();
                                return [2 /*return*/ ];
                        }
                    });
                });
            };
            CanvasRenderer.prototype.renderNodeBackgroundAndBorders = function (paint) {
                return __awaiter(this, void 0, void 0, function () {
                    var styles, hasBackground, borders, backgroundPaintingArea, side, _i, borders_1, border;
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                this.applyEffects(paint.getEffects(2 /* BACKGROUND_BORDERS */ ));
                                styles = paint.container.styles;
                                hasBackground = !isTransparent(styles.backgroundColor) || styles.backgroundImage.length;
                                borders = [{
                                        style: styles.borderTopStyle,
                                        color: styles.borderTopColor,
                                        width: styles.borderTopWidth
                                    },
                                    {
                                        style: styles.borderRightStyle,
                                        color: styles.borderRightColor,
                                        width: styles.borderRightWidth
                                    },
                                    {
                                        style: styles.borderBottomStyle,
                                        color: styles.borderBottomColor,
                                        width: styles.borderBottomWidth
                                    },
                                    {
                                        style: styles.borderLeftStyle,
                                        color: styles.borderLeftColor,
                                        width: styles.borderLeftWidth
                                    }
                                ];
                                backgroundPaintingArea = calculateBackgroundCurvedPaintingArea(getBackgroundValueForIndex(styles.backgroundClip, 0), paint.curves);
                                if (!(hasBackground || styles.boxShadow.length)) return [3 /*break*/ , 2];
                                this.ctx.save();
                                this.path(backgroundPaintingArea);
                                this.ctx.clip();
                                if (!isTransparent(styles.backgroundColor)) {
                                    this.ctx.fillStyle = asString(styles.backgroundColor);
                                    this.ctx.fill();
                                }
                                return [4 /*yield*/ , this.renderBackgroundImage(paint.container)];
                            case 1:
                                _a.sent();
                                this.ctx.restore();
                                styles.boxShadow
                                    .slice(0)
                                    .reverse()
                                    .forEach(function (shadow) {
                                        _this.ctx.save();
                                        var borderBoxArea = calculateBorderBoxPath(paint.curves);
                                        var maskOffset = shadow.inset ? 0 : MASK_OFFSET;
                                        var shadowPaintingArea = transformPath(borderBoxArea, -maskOffset + (shadow.inset ? 1 : -1) * shadow.spread.number, (shadow.inset ? 1 : -1) * shadow.spread.number, shadow.spread.number * (shadow.inset ? -2 : 2), shadow.spread.number * (shadow.inset ? -2 : 2));
                                        if (shadow.inset) {
                                            _this.path(borderBoxArea);
                                            _this.ctx.clip();
                                            _this.mask(shadowPaintingArea);
                                        } else {
                                            _this.mask(borderBoxArea);
                                            _this.ctx.clip();
                                            _this.path(shadowPaintingArea);
                                        }
                                        _this.ctx.shadowOffsetX = shadow.offsetX.number + maskOffset;
                                        _this.ctx.shadowOffsetY = shadow.offsetY.number;
                                        _this.ctx.shadowColor = asString(shadow.color);
                                        _this.ctx.shadowBlur = shadow.blur.number;
                                        _this.ctx.fillStyle = shadow.inset ? asString(shadow.color) : 'rgba(0,0,0,1)';
                                        _this.ctx.fill();
                                        _this.ctx.restore();
                                    });
                                _a.label = 2;
                            case 2:
                                side = 0;
                                _i = 0, borders_1 = borders;
                                _a.label = 3;
                            case 3:
                                if (!(_i < borders_1.length)) return [3 /*break*/ , 13];
                                border = borders_1[_i];
                                if (!(border.style !== 0 /* NONE */ && !isTransparent(border.color) && border.width > 0)) return [3 /*break*/ , 11];
                                if (!(border.style === 2 /* DASHED */ )) return [3 /*break*/ , 5];
                                return [4 /*yield*/ , this.renderDashedDottedBorder(border.color, border.width, side, paint.curves, 2 /* DASHED */ )];
                            case 4:
                                _a.sent();
                                return [3 /*break*/ , 11];
                            case 5:
                                if (!(border.style === 3 /* DOTTED */ )) return [3 /*break*/ , 7];
                                return [4 /*yield*/ , this.renderDashedDottedBorder(border.color, border.width, side, paint.curves, 3 /* DOTTED */ )];
                            case 6:
                                _a.sent();
                                return [3 /*break*/ , 11];
                            case 7:
                                if (!(border.style === 4 /* DOUBLE */ )) return [3 /*break*/ , 9];
                                return [4 /*yield*/ , this.renderDoubleBorder(border.color, border.width, side, paint.curves)];
                            case 8:
                                _a.sent();
                                return [3 /*break*/ , 11];
                            case 9:
                                return [4 /*yield*/ , this.renderSolidBorder(border.color, side, paint.curves)];
                            case 10:
                                _a.sent();
                                _a.label = 11;
                            case 11:
                                side++;
                                _a.label = 12;
                            case 12:
                                _i++;
                                return [3 /*break*/ , 3];
                            case 13:
                                return [2 /*return*/ ];
                        }
                    });
                });
            };
            CanvasRenderer.prototype.renderDashedDottedBorder = function (color, width, side, curvePoints, style) {
                return __awaiter(this, void 0, void 0, function () {
                    var strokePaths, boxPaths, startX, startY, endX, endY, length, dashLength, spaceLength, useLineDash, multiplier, numberOfDashes, minSpace, maxSpace, path1, path2, path1, path2;
                    return __generator(this, function (_a) {
                        this.ctx.save();
                        strokePaths = parsePathForBorderStroke(curvePoints, side);
                        boxPaths = parsePathForBorder(curvePoints, side);
                        if (style === 2 /* DASHED */ ) {
                            this.path(boxPaths);
                            this.ctx.clip();
                        }
                        if (isBezierCurve(boxPaths[0])) {
                            startX = boxPaths[0].start.x;
                            startY = boxPaths[0].start.y;
                        } else {
                            startX = boxPaths[0].x;
                            startY = boxPaths[0].y;
                        }
                        if (isBezierCurve(boxPaths[1])) {
                            endX = boxPaths[1].end.x;
                            endY = boxPaths[1].end.y;
                        } else {
                            endX = boxPaths[1].x;
                            endY = boxPaths[1].y;
                        }
                        if (side === 0 || side === 2) {
                            length = Math.abs(startX - endX);
                        } else {
                            length = Math.abs(startY - endY);
                        }
                        this.ctx.beginPath();
                        if (style === 3 /* DOTTED */ ) {
                            this.formatPath(strokePaths);
                        } else {
                            this.formatPath(boxPaths.slice(0, 2));
                        }
                        dashLength = width < 3 ? width * 3 : width * 2;
                        spaceLength = width < 3 ? width * 2 : width;
                        if (style === 3 /* DOTTED */ ) {
                            dashLength = width;
                            spaceLength = width;
                        }
                        useLineDash = true;
                        if (length <= dashLength * 2) {
                            useLineDash = false;
                        } else if (length <= dashLength * 2 + spaceLength) {
                            multiplier = length / (2 * dashLength + spaceLength);
                            dashLength *= multiplier;
                            spaceLength *= multiplier;
                        } else {
                            numberOfDashes = Math.floor((length + spaceLength) / (dashLength + spaceLength));
                            minSpace = (length - numberOfDashes * dashLength) / (numberOfDashes - 1);
                            maxSpace = (length - (numberOfDashes + 1) * dashLength) / numberOfDashes;
                            spaceLength =
                                maxSpace <= 0 || Math.abs(spaceLength - minSpace) < Math.abs(spaceLength - maxSpace) ?
                                minSpace :
                                maxSpace;
                        }
                        if (useLineDash) {
                            if (style === 3 /* DOTTED */ ) {
                                this.ctx.setLineDash([0, dashLength + spaceLength]);
                            } else {
                                this.ctx.setLineDash([dashLength, spaceLength]);
                            }
                        }
                        if (style === 3 /* DOTTED */ ) {
                            this.ctx.lineCap = 'round';
                            this.ctx.lineWidth = width;
                        } else {
                            this.ctx.lineWidth = width * 2 + 1.1;
                        }
                        this.ctx.strokeStyle = asString(color);
                        this.ctx.stroke();
                        this.ctx.setLineDash([]);
                        // dashed round edge gap
                        if (style === 2 /* DASHED */ ) {
                            if (isBezierCurve(boxPaths[0])) {
                                path1 = boxPaths[3];
                                path2 = boxPaths[0];
                                this.ctx.beginPath();
                                this.formatPath([new Vector(path1.end.x, path1.end.y), new Vector(path2.start.x, path2.start.y)]);
                                this.ctx.stroke();
                            }
                            if (isBezierCurve(boxPaths[1])) {
                                path1 = boxPaths[1];
                                path2 = boxPaths[2];
                                this.ctx.beginPath();
                                this.formatPath([new Vector(path1.end.x, path1.end.y), new Vector(path2.start.x, path2.start.y)]);
                                this.ctx.stroke();
                            }
                        }
                        this.ctx.restore();
                        return [2 /*return*/ ];
                    });
                });
            };
            CanvasRenderer.prototype.render = function (element) {
                return __awaiter(this, void 0, void 0, function () {
                    var stack;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (this.options.backgroundColor) {
                                    this.ctx.fillStyle = asString(this.options.backgroundColor);
                                    this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height);
                                }
                                stack = parseStackingContexts(element);
                                return [4 /*yield*/ , this.renderStack(stack)];
                            case 1:
                                _a.sent();
                                this.applyEffects([]);
                                return [2 /*return*/ , this.canvas];
                        }
                    });
                });
            };
            return CanvasRenderer;
        }(Renderer));
        var isTextInputElement = function (container) {
            if (container instanceof TextareaElementContainer) {
                return true;
            } else if (container instanceof SelectElementContainer) {
                return true;
            } else if (container instanceof InputElementContainer && container.type !== RADIO && container.type !== CHECKBOX) {
                return true;
            }
            return false;
        };
        var calculateBackgroundCurvedPaintingArea = function (clip, curves) {
            switch (clip) {
                case 0 /* BORDER_BOX */ :
                    return calculateBorderBoxPath(curves);
                case 2 /* CONTENT_BOX */ :
                    return calculateContentBoxPath(curves);
                case 1 /* PADDING_BOX */ :
                default:
                    return calculatePaddingBoxPath(curves);
            }
        };
        var canvasTextAlign = function (textAlign) {
            switch (textAlign) {
                case 1 /* CENTER */ :
                    return 'center';
                case 2 /* RIGHT */ :
                    return 'right';
                case 0 /* LEFT */ :
                default:
                    return 'left';
            }
        };
        // see https://github.com/niklasvh/html2canvas/pull/2645
        var iOSBrokenFonts = ['-apple-system', 'system-ui'];
        var fixIOSSystemFonts = function (fontFamilies) {
            return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ?
                fontFamilies.filter(function (fontFamily) {
                    return iOSBrokenFonts.indexOf(fontFamily) === -1;
                }) :
                fontFamilies;
        };

        var ForeignObjectRenderer = /** @class */ (function (_super) {
            __extends(ForeignObjectRenderer, _super);

            function ForeignObjectRenderer(context, options) {
                var _this = _super.call(this, context, options) || this;
                _this.canvas = options.canvas ? options.canvas : document.createElement('canvas');
                _this.ctx = _this.canvas.getContext('2d');
                _this.options = options;
                _this.canvas.width = Math.floor(options.width * options.scale);
                _this.canvas.height = Math.floor(options.height * options.scale);
                _this.canvas.style.width = options.width + "px";
                _this.canvas.style.height = options.height + "px";
                _this.ctx.scale(_this.options.scale, _this.options.scale);
                _this.ctx.translate(-options.x, -options.y);
                _this.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + options.width + "x" + options.height + " at " + options.x + "," + options.y + ") with scale " + options.scale);
                return _this;
            }
            ForeignObjectRenderer.prototype.render = function (element) {
                return __awaiter(this, void 0, void 0, function () {
                    var svg, img;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                svg = createForeignObjectSVG(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, element);
                                return [4 /*yield*/ , loadSerializedSVG(svg)];
                            case 1:
                                img = _a.sent();
                                if (this.options.backgroundColor) {
                                    this.ctx.fillStyle = asString(this.options.backgroundColor);
                                    this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale);
                                }
                                this.ctx.drawImage(img, -this.options.x * this.options.scale, -this.options.y * this.options.scale);
                                return [2 /*return*/ , this.canvas];
                        }
                    });
                });
            };
            return ForeignObjectRenderer;
        }(Renderer));
        var loadSerializedSVG = function (svg) {
            return new Promise(function (resolve, reject) {
                var img = new Image();
                img.onload = function () {
                    resolve(img);
                };
                img.onerror = reject;
                img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(svg));
            });
        };

        var Logger = /** @class */ (function () {
            function Logger(_a) {
                var id = _a.id,
                    enabled = _a.enabled;
                this.id = id;
                this.enabled = enabled;
                this.start = Date.now();
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            Logger.prototype.debug = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (this.enabled) {
                    // eslint-disable-next-line no-console
                    if (typeof window !== 'undefined' && window.console && typeof console.debug === 'function') {
                        // eslint-disable-next-line no-console
                        console.debug.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
                    } else {
                        this.info.apply(this, args);
                    }
                }
            };
            Logger.prototype.getTime = function () {
                return Date.now() - this.start;
            };
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            Logger.prototype.info = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (this.enabled) {
                    // eslint-disable-next-line no-console
                    if (typeof window !== 'undefined' && window.console && typeof console.info === 'function') {
                        // eslint-disable-next-line no-console
                        console.info.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
                    }
                }
            };
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            Logger.prototype.warn = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (this.enabled) {
                    // eslint-disable-next-line no-console
                    if (typeof window !== 'undefined' && window.console && typeof console.warn === 'function') {
                        // eslint-disable-next-line no-console
                        console.warn.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
                    } else {
                        this.info.apply(this, args);
                    }
                }
            };
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            Logger.prototype.error = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (this.enabled) {
                    // eslint-disable-next-line no-console
                    if (typeof window !== 'undefined' && window.console && typeof console.error === 'function') {
                        // eslint-disable-next-line no-console
                        console.error.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
                    } else {
                        this.info.apply(this, args);
                    }
                }
            };
            Logger.instances = {};
            return Logger;
        }());

        var Context = /** @class */ (function () {
            function Context(options, windowBounds) {
                var _a;
                this.windowBounds = windowBounds;
                this.instanceName = "#" + Context.instanceCount++;
                this.logger = new Logger({
                    id: this.instanceName,
                    enabled: options.logging
                });
                this.cache = (_a = options.cache) !== null && _a !== void 0 ? _a : new Cache(this, options);
            }
            Context.instanceCount = 1;
            return Context;
        }());

        var html2canvas = function (element, options) {
            if (options === void 0) {
                options = {};
            }
            return renderElement(element, options);
        };
        if (typeof window !== 'undefined') {
            CacheStorage.setContext(window);
        }
        var renderElement = function (element, opts) {
            return __awaiter(void 0, void 0, void 0, function () {
                var ownerDocument, defaultView, resourceOptions, contextOptions, windowOptions, windowBounds, context, foreignObjectRendering, cloneOptions, documentCloner, clonedElement, container, _a, width, height, left, top, backgroundColor, renderOptions, canvas, renderer, root, renderer;
                var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
                return __generator(this, function (_u) {
                    switch (_u.label) {
                        case 0:
                            if (!element || typeof element !== 'object') {
                                return [2 /*return*/ , Promise.reject('Invalid element provided as first argument')];
                            }
                            ownerDocument = element.ownerDocument;
                            if (!ownerDocument) {
                                throw new Error("Element is not attached to a Document");
                            }
                            defaultView = ownerDocument.defaultView;
                            if (!defaultView) {
                                throw new Error("Document is not attached to a Window");
                            }
                            resourceOptions = {
                                allowTaint: (_b = opts.allowTaint) !== null && _b !== void 0 ? _b : false,
                                imageTimeout: (_c = opts.imageTimeout) !== null && _c !== void 0 ? _c : 15000,
                                proxy: opts.proxy,
                                useCORS: (_d = opts.useCORS) !== null && _d !== void 0 ? _d : false
                            };
                            contextOptions = __assign({
                                logging: (_e = opts.logging) !== null && _e !== void 0 ? _e : true,
                                cache: opts.cache
                            }, resourceOptions);
                            windowOptions = {
                                windowWidth: (_f = opts.windowWidth) !== null && _f !== void 0 ? _f : defaultView.innerWidth,
                                windowHeight: (_g = opts.windowHeight) !== null && _g !== void 0 ? _g : defaultView.innerHeight,
                                scrollX: (_h = opts.scrollX) !== null && _h !== void 0 ? _h : defaultView.pageXOffset,
                                scrollY: (_j = opts.scrollY) !== null && _j !== void 0 ? _j : defaultView.pageYOffset
                            };
                            windowBounds = new Bounds(windowOptions.scrollX, windowOptions.scrollY, windowOptions.windowWidth, windowOptions.windowHeight);
                            context = new Context(contextOptions, windowBounds);
                            foreignObjectRendering = (_k = opts.foreignObjectRendering) !== null && _k !== void 0 ? _k : false;
                            cloneOptions = {
                                allowTaint: (_l = opts.allowTaint) !== null && _l !== void 0 ? _l : false,
                                onclone: opts.onclone,
                                ignoreElements: opts.ignoreElements,
                                inlineImages: foreignObjectRendering,
                                copyStyles: foreignObjectRendering
                            };
                            context.logger.debug("Starting document clone with size " + windowBounds.width + "x" + windowBounds.height + " scrolled to " + -windowBounds.left + "," + -windowBounds.top);
                            documentCloner = new DocumentCloner(context, element, cloneOptions);
                            clonedElement = documentCloner.clonedReferenceElement;
                            if (!clonedElement) {
                                return [2 /*return*/ , Promise.reject("Unable to find element in cloned iframe")];
                            }
                            return [4 /*yield*/ , documentCloner.toIFrame(ownerDocument, windowBounds)];
                        case 1:
                            container = _u.sent();
                            _a = isBodyElement(clonedElement) || isHTMLElement(clonedElement) ?
                                parseDocumentSize(clonedElement.ownerDocument) :
                                parseBounds(context, clonedElement), width = _a.width, height = _a.height, left = _a.left, top = _a.top;
                            backgroundColor = parseBackgroundColor(context, clonedElement, opts.backgroundColor);
                            renderOptions = {
                                canvas: opts.canvas,
                                backgroundColor: backgroundColor,
                                scale: (_o = (_m = opts.scale) !== null && _m !== void 0 ? _m : defaultView.devicePixelRatio) !== null && _o !== void 0 ? _o : 1,
                                x: ((_p = opts.x) !== null && _p !== void 0 ? _p : 0) + left,
                                y: ((_q = opts.y) !== null && _q !== void 0 ? _q : 0) + top,
                                width: (_r = opts.width) !== null && _r !== void 0 ? _r : Math.ceil(width),
                                height: (_s = opts.height) !== null && _s !== void 0 ? _s : Math.ceil(height)
                            };
                            if (!foreignObjectRendering) return [3 /*break*/ , 3];
                            context.logger.debug("Document cloned, using foreign object rendering");
                            renderer = new ForeignObjectRenderer(context, renderOptions);
                            return [4 /*yield*/ , renderer.render(clonedElement)];
                        case 2:
                            canvas = _u.sent();
                            return [3 /*break*/ , 5];
                        case 3:
                            context.logger.debug("Document cloned, element located at " + left + "," + top + " with size " + width + "x" + height + " using computed rendering");
                            context.logger.debug("Starting DOM parsing");
                            root = parseTree(context, clonedElement);
                            if (backgroundColor === root.styles.backgroundColor) {
                                root.styles.backgroundColor = COLORS.TRANSPARENT;
                            }
                            context.logger.debug("Starting renderer for element at " + renderOptions.x + "," + renderOptions.y + " with size " + renderOptions.width + "x" + renderOptions.height);
                            renderer = new CanvasRenderer(context, renderOptions);
                            return [4 /*yield*/ , renderer.render(root)];
                        case 4:
                            canvas = _u.sent();
                            _u.label = 5;
                        case 5:
                            if ((_t = opts.removeContainer) !== null && _t !== void 0 ? _t : true) {
                                if (!DocumentCloner.destroy(container)) {
                                    context.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore");
                                }
                            }
                            context.logger.debug("Finished rendering");
                            return [2 /*return*/ , canvas];
                    }
                });
            });
        };
        var parseBackgroundColor = function (context, element, backgroundColorOverride) {
            var ownerDocument = element.ownerDocument;
            // http://www.w3.org/TR/css3-background/#special-backgrounds
            var documentBackgroundColor = ownerDocument.documentElement ?
                parseColor(context, getComputedStyle(ownerDocument.documentElement).backgroundColor) :
                COLORS.TRANSPARENT;
            var bodyBackgroundColor = ownerDocument.body ?
                parseColor(context, getComputedStyle(ownerDocument.body).backgroundColor) :
                COLORS.TRANSPARENT;
            var defaultBackgroundColor = typeof backgroundColorOverride === 'string' ?
                parseColor(context, backgroundColorOverride) :
                backgroundColorOverride === null ?
                COLORS.TRANSPARENT :
                0xffffffff;
            return element === ownerDocument.documentElement ?
                isTransparent(documentBackgroundColor) ?
                isTransparent(bodyBackgroundColor) ?
                defaultBackgroundColor :
                bodyBackgroundColor :
                documentBackgroundColor :
                defaultBackgroundColor;
        };

        return html2canvas;

    })));


    ! function (A, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (A = "undefined" != typeof globalThis ? globalThis : A || self).html2canvas = e()
    }(this, function () {
        "use strict";
        var r = function (A, e) {
            return (r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (A, e) {
                    A.__proto__ = e
                } || function (A, e) {
                    for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (A[t] = e[t])
                })(A, e)
        };

        function A(A, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function t() {
                this.constructor = A
            }
            r(A, e), A.prototype = null === e ? Object.create(e) : (t.prototype = e.prototype, new t)
        }
        var h = function () {
            return (h = Object.assign || function (A) {
                for (var e, t = 1, r = arguments.length; t < r; t++)
                    for (var B in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, B) && (A[B] = e[B]);
                return A
            }).apply(this, arguments)
        };

        function a(A, s, o, i) {
            return new(o = o || Promise)(function (t, e) {
                function r(A) {
                    try {
                        n(i.next(A))
                    } catch (A) {
                        e(A)
                    }
                }

                function B(A) {
                    try {
                        n(i.throw(A))
                    } catch (A) {
                        e(A)
                    }
                }

                function n(A) {
                    var e;
                    A.done ? t(A.value) : ((e = A.value) instanceof o ? e : new o(function (A) {
                        A(e)
                    })).then(r, B)
                }
                n((i = i.apply(A, s || [])).next())
            })
        }

        function H(t, r) {
            var B, n, s, o = {
                    label: 0,
                    sent: function () {
                        if (1 & s[0]) throw s[1];
                        return s[1]
                    },
                    trys: [],
                    ops: []
                },
                A = {
                    next: e(0),
                    throw: e(1),
                    return: e(2)
                };
            return "function" == typeof Symbol && (A[Symbol.iterator] = function () {
                return this
            }), A;

            function e(e) {
                return function (A) {
                    return function (e) {
                        if (B) throw new TypeError("Generator is already executing.");
                        for (; o;) try {
                            if (B = 1, n && (s = 2 & e[0] ? n.return : e[0] ? n.throw || ((s = n.return) && s.call(n), 0) : n.next) && !(s = s.call(n, e[1])).done) return s;
                            switch (n = 0, (e = s ? [2 & e[0], s.value] : e)[0]) {
                                case 0:
                                case 1:
                                    s = e;
                                    break;
                                case 4:
                                    return o.label++, {
                                        value: e[1],
                                        done: !1
                                    };
                                case 5:
                                    o.label++, n = e[1], e = [0];
                                    continue;
                                case 7:
                                    e = o.ops.pop(), o.trys.pop();
                                    continue;
                                default:
                                    if (!(s = 0 < (s = o.trys).length && s[s.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                        o = 0;
                                        continue
                                    }
                                    if (3 === e[0] && (!s || e[1] > s[0] && e[1] < s[3])) {
                                        o.label = e[1];
                                        break
                                    }
                                    if (6 === e[0] && o.label < s[1]) {
                                        o.label = s[1], s = e;
                                        break
                                    }
                                    if (s && o.label < s[2]) {
                                        o.label = s[2], o.ops.push(e);
                                        break
                                    }
                                    s[2] && o.ops.pop(), o.trys.pop();
                                    continue
                            }
                            e = r.call(t, o)
                        } catch (A) {
                            e = [6, A], n = 0
                        } finally {
                            B = s = 0
                        }
                        if (5 & e[0]) throw e[1];
                        return {
                            value: e[0] ? e[1] : void 0,
                            done: !0
                        }
                    }([e, A])
                }
            }
        }

        function t(A, e, t) {
            if (t || 2 === arguments.length)
                for (var r, B = 0, n = e.length; B < n; B++) !r && B in e || ((r = r || Array.prototype.slice.call(e, 0, B))[B] = e[B]);
            return A.concat(r || e)
        }
        var d = (B.prototype.add = function (A, e, t, r) {
            return new B(this.left + A, this.top + e, this.width + t, this.height + r)
        }, B.fromClientRect = function (A, e) {
            return new B(e.left + A.windowBounds.left, e.top + A.windowBounds.top, e.width, e.height)
        }, B.fromDOMRectList = function (A, e) {
            e = Array.from(e).find(function (A) {
                return 0 !== A.width
            });
            return e ? new B(e.left + A.windowBounds.left, e.top + A.windowBounds.top, e.width, e.height) : B.EMPTY
        }, B.EMPTY = new B(0, 0, 0, 0), B);

        function B(A, e, t, r) {
            this.left = A, this.top = e, this.width = t, this.height = r
        }
        for (var f = function (A, e) {
                return d.fromClientRect(A, e.getBoundingClientRect())
            }, Q = function (A) {
                for (var e = [], t = 0, r = A.length; t < r;) {
                    var B, n = A.charCodeAt(t++);
                    55296 <= n && n <= 56319 && t < r ? 56320 == (64512 & (B = A.charCodeAt(t++))) ? e.push(((1023 & n) << 10) + (1023 & B) + 65536) : (e.push(n), t--) : e.push(n)
                }
                return e
            }, g = function () {
                for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
                if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
                var t = A.length;
                if (!t) return "";
                for (var r = [], B = -1, n = ""; ++B < t;) {
                    var s = A[B];
                    s <= 65535 ? r.push(s) : (s -= 65536, r.push(55296 + (s >> 10), s % 1024 + 56320)), (B + 1 === t || 16384 < r.length) && (n += String.fromCharCode.apply(String, r), r.length = 0)
                }
                return n
            }, e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), s = 0; s < e.length; s++) n[e.charCodeAt(s)] = s;
        for (var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", c = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), i = 0; i < o.length; i++) c[o.charCodeAt(i)] = i;

        function w(A, e, t) {
            return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t))
        }
        var U = (l.prototype.get = function (A) {
            var e;
            if (0 <= A) {
                if (A < 55296 || 56319 < A && A <= 65535) return e = this.index[A >> 5], this.data[e = (e << 2) + (31 & A)];
                if (A <= 65535) return e = this.index[2048 + (A - 55296 >> 5)], this.data[e = (e << 2) + (31 & A)];
                if (A < this.highStart) return e = this.index[e = 2080 + (A >> 11)], e = this.index[e += A >> 5 & 63], this.data[e = (e << 2) + (31 & A)];
                if (A <= 1114111) return this.data[this.highValueIndex]
            }
            return this.errorValue
        }, l);

        function l(A, e, t, r, B, n) {
            this.initialValue = A, this.errorValue = e, this.highStart = t, this.highValueIndex = r, this.index = B, this.data = n
        }
        for (var C = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", u = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), F = 0; F < C.length; F++) u[C.charCodeAt(F)] = F;

        function p(A, e, t, r) {
            var B = r[t];
            if (Array.isArray(A) ? -1 !== A.indexOf(B) : A === B)
                for (var n = t; n <= r.length;) {
                    if ((o = r[++n]) === e) return 1;
                    if (o !== D) break
                }
            if (B === D)
                for (n = t; 0 < n;) {
                    var s = r[--n];
                    if (Array.isArray(A) ? -1 !== A.indexOf(s) : A === s)
                        for (var o, i = t; i <= r.length;) {
                            if ((o = r[++i]) === e) return 1;
                            if (o !== D) break
                        }
                    if (s !== D) break
                }
        }

        function E(A, e) {
            for (var t = A; 0 <= t;) {
                var r = e[t];
                if (r !== D) return r;
                t--
            }
            return 0
        }

        function I(t, A) {
            var e = (B = function (A, r) {
                    void 0 === r && (r = "strict");
                    var B = [],
                        n = [],
                        s = [];
                    return A.forEach(function (A, e) {
                        var t = rA.get(A);
                        if (50 < t ? (s.push(!0), t -= 50) : s.push(!1), -1 !== ["normal", "auto", "loose"].indexOf(r) && -1 !== [8208, 8211, 12316, 12448].indexOf(A)) return n.push(e), B.push(16);
                        if (4 !== t && 11 !== t) return n.push(e), 31 === t ? B.push("strict" === r ? O : q) : t === AA || 29 === t ? B.push(J) : 43 === t ? 131072 <= A && A <= 196605 || 196608 <= A && A <= 262141 ? B.push(q) : B.push(J) : void B.push(t);
                        if (0 === e) return n.push(e), B.push(J);
                        t = B[e - 1];
                        return -1 === iA.indexOf(t) ? (n.push(n[e - 1]), B.push(t)) : (n.push(e), B.push(J))
                    }), [n, B, s]
                }(t, (A = A || {
                    lineBreak: "normal",
                    wordBreak: "normal"
                }).lineBreak))[0],
                r = B[1],
                B = B[2];
            return [e, r = "break-all" === A.wordBreak || "break-word" === A.wordBreak ? r.map(function (A) {
                return -1 !== [R, J, AA].indexOf(A) ? q : A
            }) : r, "keep-all" === A.wordBreak ? B.map(function (A, e) {
                return A && 19968 <= t[e] && t[e] <= 40959
            }) : void 0]
        }
        var y, K, m, L, b, D = 10,
            v = 13,
            x = 15,
            M = 17,
            S = 18,
            T = 19,
            G = 20,
            O = 21,
            V = 22,
            k = 24,
            R = 25,
            N = 26,
            P = 27,
            X = 28,
            J = 30,
            Y = 32,
            W = 33,
            Z = 34,
            _ = 35,
            q = 37,
            j = 38,
            z = 39,
            $ = 40,
            AA = 42,
            eA = [9001, 65288],
            tA = "×",
            rA = (m = function (A) {
                var e, t, r, B, n = .75 * A.length,
                    s = A.length,
                    o = 0;
                "=" === A[A.length - 1] && (n--, "=" === A[A.length - 2] && n--);
                for (var n = new("undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array && void 0 !== Uint8Array.prototype.slice ? ArrayBuffer : Array)(n), i = Array.isArray(n) ? n : new Uint8Array(n), Q = 0; Q < s; Q += 4) e = c[A.charCodeAt(Q)], t = c[A.charCodeAt(Q + 1)], r = c[A.charCodeAt(Q + 2)], B = c[A.charCodeAt(Q + 3)], i[o++] = e << 2 | t >> 4, i[o++] = (15 & t) << 4 | r >> 2, i[o++] = (3 & r) << 6 | 63 & B;
                return n
            }(y = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA=="), L = Array.isArray(m) ? function (A) {
                for (var e = A.length, t = [], r = 0; r < e; r += 4) t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
                return t
            }(m) : new Uint32Array(m), b = Array.isArray(m) ? function (A) {
                for (var e = A.length, t = [], r = 0; r < e; r += 2) t.push(A[r + 1] << 8 | A[r]);
                return t
            }(m) : new Uint16Array(m), y = w(b, 12, L[4] / 2), K = 2 === L[5] ? w(b, (24 + L[4]) / 2) : (m = L, b = Math.ceil((24 + L[4]) / 4), m.slice ? m.slice(b, K) : new Uint32Array(Array.prototype.slice.call(m, b, K))), new U(L[0], L[1], L[2], L[3], y, K)),
            BA = [J, 36],
            nA = [1, 2, 3, 5],
            sA = [D, 8],
            oA = [P, N],
            iA = nA.concat(sA),
            QA = [j, z, $, Z, _],
            cA = [x, v],
            aA = (gA.prototype.slice = function () {
                return g.apply(void 0, this.codePoints.slice(this.start, this.end))
            }, gA);

        function gA(A, e, t, r) {
            this.codePoints = A, this.required = "!" === e, this.start = t, this.end = r
        }

        function wA(A, e) {
            var t = Q(A),
                r = (e = I(t, e))[0],
                B = e[1],
                n = e[2],
                s = t.length,
                o = 0,
                i = 0;
            return {
                next: function () {
                    if (s <= i) return {
                        done: !0,
                        value: null
                    };
                    for (var A = tA; i < s && (A = function (A, e, t, r, B) {
                            if (0 === t[r]) return tA;
                            var n = r - 1;
                            if (Array.isArray(B) && !0 === B[n]) return tA;
                            var s = n - 1,
                                o = 1 + n,
                                i = e[n],
                                r = 0 <= s ? e[s] : 0,
                                B = e[o];
                            if (2 === i && 3 === B) return tA;
                            if (-1 !== nA.indexOf(i)) return "!";
                            if (-1 !== nA.indexOf(B)) return tA;
                            if (-1 !== sA.indexOf(B)) return tA;
                            if (8 === E(n, e)) return "÷";
                            if (11 === rA.get(A[n])) return tA;
                            if ((i === Y || i === W) && 11 === rA.get(A[o])) return tA;
                            if (7 === i || 7 === B) return tA;
                            if (9 === i) return tA;
                            if (-1 === [D, v, x].indexOf(i) && 9 === B) return tA;
                            if (-1 !== [M, S, T, k, X].indexOf(B)) return tA;
                            if (E(n, e) === V) return tA;
                            if (p(23, V, n, e)) return tA;
                            if (p([M, S], O, n, e)) return tA;
                            if (p(12, 12, n, e)) return tA;
                            if (i === D) return "÷";
                            if (23 === i || 23 === B) return tA;
                            if (16 === B || 16 === i) return "÷";
                            if (-1 !== [v, x, O].indexOf(B) || 14 === i) return tA;
                            if (36 === r && -1 !== cA.indexOf(i)) return tA;
                            if (i === X && 36 === B) return tA;
                            if (B === G) return tA;
                            if (-1 !== BA.indexOf(B) && i === R || -1 !== BA.indexOf(i) && B === R) return tA;
                            if (i === P && -1 !== [q, Y, W].indexOf(B) || -1 !== [q, Y, W].indexOf(i) && B === N) return tA;
                            if (-1 !== BA.indexOf(i) && -1 !== oA.indexOf(B) || -1 !== oA.indexOf(i) && -1 !== BA.indexOf(B)) return tA;
                            if (-1 !== [P, N].indexOf(i) && (B === R || -1 !== [V, x].indexOf(B) && e[1 + o] === R) || -1 !== [V, x].indexOf(i) && B === R || i === R && -1 !== [R, X, k].indexOf(B)) return tA;
                            if (-1 !== [R, X, k, M, S].indexOf(B))
                                for (var Q = n; 0 <= Q;) {
                                    if ((c = e[Q]) === R) return tA;
                                    if (-1 === [X, k].indexOf(c)) break;
                                    Q--
                                }
                            if (-1 !== [P, N].indexOf(B))
                                for (var c, Q = -1 !== [M, S].indexOf(i) ? s : n; 0 <= Q;) {
                                    if ((c = e[Q]) === R) return tA;
                                    if (-1 === [X, k].indexOf(c)) break;
                                    Q--
                                }
                            if (j === i && -1 !== [j, z, Z, _].indexOf(B) || -1 !== [z, Z].indexOf(i) && -1 !== [z, $].indexOf(B) || -1 !== [$, _].indexOf(i) && B === $) return tA;
                            if (-1 !== QA.indexOf(i) && -1 !== [G, N].indexOf(B) || -1 !== QA.indexOf(B) && i === P) return tA;
                            if (-1 !== BA.indexOf(i) && -1 !== BA.indexOf(B)) return tA;
                            if (i === k && -1 !== BA.indexOf(B)) return tA;
                            if (-1 !== BA.concat(R).indexOf(i) && B === V && -1 === eA.indexOf(A[o]) || -1 !== BA.concat(R).indexOf(B) && i === S) return tA;
                            if (41 === i && 41 === B) {
                                for (var a = t[n], g = 1; 0 < a && 41 === e[--a];) g++;
                                if (g % 2 != 0) return tA
                            }
                            return i === Y && B === W ? tA : "÷"
                        }(t, B, r, ++i, n)) === tA;);
                    if (A === tA && i !== s) return {
                        done: !0,
                        value: null
                    };
                    var e = new aA(t, A, o, i);
                    return o = i, {
                        value: e,
                        done: !1
                    }
                }
            }
        }

        function UA(A) {
            return 48 <= A && A <= 57
        }

        function lA(A) {
            return UA(A) || 65 <= A && A <= 70 || 97 <= A && A <= 102
        }

        function CA(A) {
            return 10 === A || 9 === A || 32 === A
        }

        function uA(A) {
            return 97 <= (t = e = A) && t <= 122 || 65 <= (e = e) && e <= 90 || 128 <= A || 95 === A;
            var e, t
        }

        function FA(A) {
            return uA(A) || UA(A) || 45 === A
        }

        function hA(A, e) {
            return 92 === A && 10 !== e
        }

        function dA(A, e, t) {
            return 45 === A ? uA(e) || hA(e, t) : !!uA(A) || 92 === A && 10 !== e
        }

        function fA(A, e, t) {
            return 43 === A || 45 === A ? !!UA(e) || 46 === e && UA(t) : UA(46 === A ? e : A)
        }
        var HA = {
                type: 2
            },
            pA = {
                type: 3
            },
            EA = {
                type: 4
            },
            IA = {
                type: 13
            },
            yA = {
                type: 8
            },
            KA = {
                type: 21
            },
            mA = {
                type: 9
            },
            LA = {
                type: 10
            },
            bA = {
                type: 11
            },
            DA = {
                type: 12
            },
            vA = {
                type: 14
            },
            xA = {
                type: 23
            },
            MA = {
                type: 1
            },
            SA = {
                type: 25
            },
            TA = {
                type: 24
            },
            GA = {
                type: 26
            },
            OA = {
                type: 27
            },
            VA = {
                type: 28
            },
            kA = {
                type: 29
            },
            RA = {
                type: 31
            },
            NA = {
                type: 32
            },
            PA = (XA.prototype.write = function (A) {
                this._value = this._value.concat(Q(A))
            }, XA.prototype.read = function () {
                for (var A = [], e = this.consumeToken(); e !== NA;) A.push(e), e = this.consumeToken();
                return A
            }, XA.prototype.consumeToken = function () {
                var A = this.consumeCodePoint();
                switch (A) {
                    case 34:
                        return this.consumeStringToken(34);
                    case 35:
                        var e = this.peekCodePoint(0),
                            t = this.peekCodePoint(1),
                            r = this.peekCodePoint(2);
                        if (FA(e) || hA(t, r)) {
                            var B = dA(e, t, r) ? 2 : 1;
                            return {
                                type: 5,
                                value: this.consumeName(),
                                flags: B
                            }
                        }
                        break;
                    case 36:
                        if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), IA;
                        break;
                    case 39:
                        return this.consumeStringToken(39);
                    case 40:
                        return HA;
                    case 41:
                        return pA;
                    case 42:
                        if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), vA;
                        break;
                    case 43:
                        if (fA(A, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(A), this.consumeNumericToken();
                        break;
                    case 44:
                        return EA;
                    case 45:
                        var r = A,
                            B = this.peekCodePoint(0),
                            n = this.peekCodePoint(1);
                        if (fA(r, B, n)) return this.reconsumeCodePoint(A), this.consumeNumericToken();
                        if (dA(r, B, n)) return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
                        if (45 === B && 62 === n) return this.consumeCodePoint(), this.consumeCodePoint(), TA;
                        break;
                    case 46:
                        if (fA(A, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(A), this.consumeNumericToken();
                        break;
                    case 47:
                        if (42 === this.peekCodePoint(0))
                            for (this.consumeCodePoint();;) {
                                var s = this.consumeCodePoint();
                                if (42 === s && 47 === (s = this.consumeCodePoint())) return this.consumeToken();
                                if (-1 === s) return this.consumeToken()
                            }
                        break;
                    case 58:
                        return GA;
                    case 59:
                        return OA;
                    case 60:
                        if (33 === this.peekCodePoint(0) && 45 === this.peekCodePoint(1) && 45 === this.peekCodePoint(2)) return this.consumeCodePoint(), this.consumeCodePoint(), SA;
                        break;
                    case 64:
                        var n = this.peekCodePoint(0),
                            o = this.peekCodePoint(1),
                            i = this.peekCodePoint(2);
                        if (dA(n, o, i)) return {
                            type: 7,
                            value: this.consumeName()
                        };
                        break;
                    case 91:
                        return VA;
                    case 92:
                        if (hA(A, this.peekCodePoint(0))) return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
                        break;
                    case 93:
                        return kA;
                    case 61:
                        if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), yA;
                        break;
                    case 123:
                        return bA;
                    case 125:
                        return DA;
                    case 117:
                    case 85:
                        o = this.peekCodePoint(0), i = this.peekCodePoint(1);
                        return 43 !== o || !lA(i) && 63 !== i || (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
                    case 124:
                        if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), mA;
                        if (124 === this.peekCodePoint(0)) return this.consumeCodePoint(), KA;
                        break;
                    case 126:
                        if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), LA;
                        break;
                    case -1:
                        return NA
                }
                return CA(A) ? (this.consumeWhiteSpace(), RA) : UA(A) ? (this.reconsumeCodePoint(A), this.consumeNumericToken()) : uA(A) ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken()) : {
                    type: 6,
                    value: g(A)
                }
            }, XA.prototype.consumeCodePoint = function () {
                var A = this._value.shift();
                return void 0 === A ? -1 : A
            }, XA.prototype.reconsumeCodePoint = function (A) {
                this._value.unshift(A)
            }, XA.prototype.peekCodePoint = function (A) {
                return A >= this._value.length ? -1 : this._value[A]
            }, XA.prototype.consumeUnicodeRangeToken = function () {
                for (var A = [], e = this.consumeCodePoint(); lA(e) && A.length < 6;) A.push(e), e = this.consumeCodePoint();
                for (var t = !1; 63 === e && A.length < 6;) A.push(e), e = this.consumeCodePoint(), t = !0;
                if (t) return {
                    type: 30,
                    start: parseInt(g.apply(void 0, A.map(function (A) {
                        return 63 === A ? 48 : A
                    })), 16),
                    end: parseInt(g.apply(void 0, A.map(function (A) {
                        return 63 === A ? 70 : A
                    })), 16)
                };
                var r = parseInt(g.apply(void 0, A), 16);
                if (45 === this.peekCodePoint(0) && lA(this.peekCodePoint(1))) {
                    this.consumeCodePoint();
                    for (var e = this.consumeCodePoint(), B = []; lA(e) && B.length < 6;) B.push(e), e = this.consumeCodePoint();
                    return {
                        type: 30,
                        start: r,
                        end: parseInt(g.apply(void 0, B), 16)
                    }
                }
                return {
                    type: 30,
                    start: r,
                    end: r
                }
            }, XA.prototype.consumeIdentLikeToken = function () {
                var A = this.consumeName();
                return "url" === A.toLowerCase() && 40 === this.peekCodePoint(0) ? (this.consumeCodePoint(), this.consumeUrlToken()) : 40 === this.peekCodePoint(0) ? (this.consumeCodePoint(), {
                    type: 19,
                    value: A
                }) : {
                    type: 20,
                    value: A
                }
            }, XA.prototype.consumeUrlToken = function () {
                var A = [];
                if (this.consumeWhiteSpace(), -1 === this.peekCodePoint(0)) return {
                    type: 22,
                    value: ""
                };
                var e, t = this.peekCodePoint(0);
                if (39 === t || 34 === t) {
                    t = this.consumeStringToken(this.consumeCodePoint());
                    return 0 === t.type && (this.consumeWhiteSpace(), -1 === this.peekCodePoint(0) || 41 === this.peekCodePoint(0)) ? (this.consumeCodePoint(), {
                        type: 22,
                        value: t.value
                    }) : (this.consumeBadUrlRemnants(), xA)
                }
                for (;;) {
                    var r = this.consumeCodePoint();
                    if (-1 === r || 41 === r) return {
                        type: 22,
                        value: g.apply(void 0, A)
                    };
                    if (CA(r)) return this.consumeWhiteSpace(), -1 === this.peekCodePoint(0) || 41 === this.peekCodePoint(0) ? (this.consumeCodePoint(), {
                        type: 22,
                        value: g.apply(void 0, A)
                    }) : (this.consumeBadUrlRemnants(), xA);
                    if (34 === r || 39 === r || 40 === r || (0 <= (e = r) && e <= 8 || 11 === e || 14 <= e && e <= 31 || 127 === e)) return this.consumeBadUrlRemnants(), xA;
                    if (92 === r) {
                        if (!hA(r, this.peekCodePoint(0))) return this.consumeBadUrlRemnants(), xA;
                        A.push(this.consumeEscapedCodePoint())
                    } else A.push(r)
                }
            }, XA.prototype.consumeWhiteSpace = function () {
                for (; CA(this.peekCodePoint(0));) this.consumeCodePoint()
            }, XA.prototype.consumeBadUrlRemnants = function () {
                for (;;) {
                    var A = this.consumeCodePoint();
                    if (41 === A || -1 === A) return;
                    hA(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint()
                }
            }, XA.prototype.consumeStringSlice = function (A) {
                for (var e = ""; 0 < A;) {
                    var t = Math.min(5e4, A);
                    e += g.apply(void 0, this._value.splice(0, t)), A -= t
                }
                return this._value.shift(), e
            }, XA.prototype.consumeStringToken = function (A) {
                for (var e = "", t = 0;;) {
                    var r, B = this._value[t];
                    if (-1 === B || void 0 === B || B === A) return {
                        type: 0,
                        value: e += this.consumeStringSlice(t)
                    };
                    if (10 === B) return this._value.splice(0, t), MA;
                    92 !== B || -1 !== (r = this._value[t + 1]) && void 0 !== r && (10 === r ? (e += this.consumeStringSlice(t), t = -1, this._value.shift()) : hA(B, r) && (e += this.consumeStringSlice(t), e += g(this.consumeEscapedCodePoint()), t = -1)), t++
                }
            }, XA.prototype.consumeNumber = function () {
                var A = [],
                    e = 4;
                for (43 !== (t = this.peekCodePoint(0)) && 45 !== t || A.push(this.consumeCodePoint()); UA(this.peekCodePoint(0));) A.push(this.consumeCodePoint());
                var t = this.peekCodePoint(0),
                    r = this.peekCodePoint(1);
                if (46 === t && UA(r))
                    for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), e = 8; UA(this.peekCodePoint(0));) A.push(this.consumeCodePoint());
                t = this.peekCodePoint(0);
                var r = this.peekCodePoint(1),
                    B = this.peekCodePoint(2);
                if ((69 === t || 101 === t) && ((43 === r || 45 === r) && UA(B) || UA(r)))
                    for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), e = 8; UA(this.peekCodePoint(0));) A.push(this.consumeCodePoint());
                return [function (A) {
                    var e = 0,
                        t = 1;
                    43 !== A[e] && 45 !== A[e] || (45 === A[e] && (t = -1), e++);
                    for (var r = []; UA(A[e]);) r.push(A[e++]);
                    var B = r.length ? parseInt(g.apply(void 0, r), 10) : 0;
                    46 === A[e] && e++;
                    for (var n = []; UA(A[e]);) n.push(A[e++]);
                    var s = n.length,
                        o = s ? parseInt(g.apply(void 0, n), 10) : 0;
                    69 !== A[e] && 101 !== A[e] || e++;
                    var i = 1;
                    43 !== A[e] && 45 !== A[e] || (45 === A[e] && (i = -1), e++);
                    for (var Q = []; UA(A[e]);) Q.push(A[e++]);
                    var c = Q.length ? parseInt(g.apply(void 0, Q), 10) : 0;
                    return t * (B + o * Math.pow(10, -s)) * Math.pow(10, i * c)
                }(A), e]
            }, XA.prototype.consumeNumericToken = function () {
                var A = this.consumeNumber(),
                    e = A[0],
                    t = A[1],
                    r = this.peekCodePoint(0),
                    B = this.peekCodePoint(1),
                    A = this.peekCodePoint(2);
                return dA(r, B, A) ? {
                    type: 15,
                    number: e,
                    flags: t,
                    unit: this.consumeName()
                } : 37 === r ? (this.consumeCodePoint(), {
                    type: 16,
                    number: e,
                    flags: t
                }) : {
                    type: 17,
                    number: e,
                    flags: t
                }
            }, XA.prototype.consumeEscapedCodePoint = function () {
                var A, e = this.consumeCodePoint();
                if (lA(e)) {
                    for (var t = g(e); lA(this.peekCodePoint(0)) && t.length < 6;) t += g(this.consumeCodePoint());
                    CA(this.peekCodePoint(0)) && this.consumeCodePoint();
                    var r = parseInt(t, 16);
                    return 0 === r || 55296 <= (A = r) && A <= 57343 || 1114111 < r ? 65533 : r
                }
                return -1 === e ? 65533 : e
            }, XA.prototype.consumeName = function () {
                for (var A = "";;) {
                    var e = this.consumeCodePoint();
                    if (FA(e)) A += g(e);
                    else {
                        if (!hA(e, this.peekCodePoint(0))) return this.reconsumeCodePoint(e), A;
                        A += g(this.consumeEscapedCodePoint())
                    }
                }
            }, XA);

        function XA() {
            this._value = []
        }
        var JA = (YA.create = function (A) {
            var e = new PA;
            return e.write(A), new YA(e.read())
        }, YA.parseValue = function (A) {
            return YA.create(A).parseComponentValue()
        }, YA.parseValues = function (A) {
            return YA.create(A).parseComponentValues()
        }, YA.prototype.parseComponentValue = function () {
            for (var A = this.consumeToken(); 31 === A.type;) A = this.consumeToken();
            if (32 === A.type) throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
            this.reconsumeToken(A);
            for (var e = this.consumeComponentValue(); 31 === (A = this.consumeToken()).type;);
            if (32 === A.type) return e;
            throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")
        }, YA.prototype.parseComponentValues = function () {
            for (var A = [];;) {
                var e = this.consumeComponentValue();
                if (32 === e.type) return A;
                A.push(e), A.push()
            }
        }, YA.prototype.consumeComponentValue = function () {
            var A = this.consumeToken();
            switch (A.type) {
                case 11:
                case 28:
                case 2:
                    return this.consumeSimpleBlock(A.type);
                case 19:
                    return this.consumeFunction(A)
            }
            return A
        }, YA.prototype.consumeSimpleBlock = function (A) {
            for (var e = {
                    type: A,
                    values: []
                }, t = this.consumeToken();;) {
                if (32 === t.type || ce(t, A)) return e;
                this.reconsumeToken(t), e.values.push(this.consumeComponentValue()), t = this.consumeToken()
            }
        }, YA.prototype.consumeFunction = function (A) {
            for (var e = {
                    name: A.value,
                    values: [],
                    type: 18
                };;) {
                var t = this.consumeToken();
                if (32 === t.type || 3 === t.type) return e;
                this.reconsumeToken(t), e.values.push(this.consumeComponentValue())
            }
        }, YA.prototype.consumeToken = function () {
            var A = this._tokens.shift();
            return void 0 === A ? NA : A
        }, YA.prototype.reconsumeToken = function (A) {
            this._tokens.unshift(A)
        }, YA);

        function YA(A) {
            this._tokens = A
        }

        function WA(A) {
            return 15 === A.type
        }

        function ZA(A) {
            return 17 === A.type
        }

        function _A(A) {
            return 20 === A.type
        }

        function qA(A) {
            return 0 === A.type
        }

        function jA(A, e) {
            return _A(A) && A.value === e
        }

        function zA(A) {
            return 31 !== A.type
        }

        function $A(A) {
            return 31 !== A.type && 4 !== A.type
        }

        function Ae(A) {
            var e = [],
                t = [];
            return A.forEach(function (A) {
                if (4 === A.type) {
                    if (0 === t.length) throw new Error("Error parsing function args, zero tokens for arg");
                    return e.push(t), void(t = [])
                }
                31 !== A.type && t.push(A)
            }), t.length && e.push(t), e
        }

        function ee(A) {
            return 17 === A.type || 15 === A.type
        }

        function te(A) {
            return 16 === A.type || ee(A)
        }

        function re(A) {
            return 1 < A.length ? [A[0], A[1]] : [A[0]]
        }

        function Be(A, e, t) {
            var r = A[0],
                A = A[1];
            return [Ue(r, e), Ue(void 0 !== A ? A : r, t)]
        }

        function ne(A) {
            return 15 === A.type && ("deg" === A.unit || "grad" === A.unit || "rad" === A.unit || "turn" === A.unit)
        }

        function se(A) {
            switch (A.filter(_A).map(function (A) {
                return A.value
            }).join(" ")) {
                case "to bottom right":
                case "to right bottom":
                case "left top":
                case "top left":
                    return [ae, ae];
                case "to top":
                case "bottom":
                    return Ce(0);
                case "to bottom left":
                case "to left bottom":
                case "right top":
                case "top right":
                    return [ae, we];
                case "to right":
                case "left":
                    return Ce(90);
                case "to top left":
                case "to left top":
                case "right bottom":
                case "bottom right":
                    return [we, we];
                case "to bottom":
                case "top":
                    return Ce(180);
                case "to top right":
                case "to right top":
                case "left bottom":
                case "bottom left":
                    return [we, ae];
                case "to left":
                case "right":
                    return Ce(270)
            }
            return 0
        }

        function oe(A) {
            return 0 == (255 & A)
        }

        function ie(A) {
            var e = 255 & A,
                t = 255 & A >> 8,
                r = 255 & A >> 16,
                A = 255 & A >> 24;
            return e < 255 ? "rgba(" + A + "," + r + "," + t + "," + e / 255 + ")" : "rgb(" + A + "," + r + "," + t + ")"
        }

        function Qe(A, e) {
            if (17 === A.type) return A.number;
            if (16 !== A.type) return 0;
            var t = 3 === e ? 1 : 255;
            return 3 === e ? A.number / 100 * t : Math.round(A.number / 100 * t)
        }
        var ce = function (A, e) {
                return 11 === e && 12 === A.type || (28 === e && 29 === A.type || 2 === e && 3 === A.type)
            },
            ae = {
                type: 17,
                number: 0,
                flags: 4
            },
            ge = {
                type: 16,
                number: 50,
                flags: 4
            },
            we = {
                type: 16,
                number: 100,
                flags: 4
            },
            Ue = function (A, e) {
                if (16 === A.type) return A.number / 100 * e;
                if (WA(A)) switch (A.unit) {
                    case "rem":
                    case "em":
                        return 16 * A.number;
                    default:
                        return A.number
                }
                return A.number
            },
            le = function (A, e) {
                if (15 === e.type) switch (e.unit) {
                    case "deg":
                        return Math.PI * e.number / 180;
                    case "grad":
                        return Math.PI / 200 * e.number;
                    case "rad":
                        return e.number;
                    case "turn":
                        return 2 * Math.PI * e.number
                }
                throw new Error("Unsupported angle type")
            },
            Ce = function (A) {
                return Math.PI * A / 180
            },
            ue = function (A, e) {
                if (18 === e.type) {
                    var t = me[e.name];
                    if (void 0 === t) throw new Error('Attempting to parse an unsupported color function "' + e.name + '"');
                    return t(A, e.values)
                }
                if (5 === e.type) {
                    if (3 === e.value.length) {
                        var r = e.value.substring(0, 1),
                            B = e.value.substring(1, 2),
                            n = e.value.substring(2, 3);
                        return Fe(parseInt(r + r, 16), parseInt(B + B, 16), parseInt(n + n, 16), 1)
                    }
                    if (4 === e.value.length) {
                        var r = e.value.substring(0, 1),
                            B = e.value.substring(1, 2),
                            n = e.value.substring(2, 3),
                            s = e.value.substring(3, 4);
                        return Fe(parseInt(r + r, 16), parseInt(B + B, 16), parseInt(n + n, 16), parseInt(s + s, 16) / 255)
                    }
                    if (6 === e.value.length) {
                        r = e.value.substring(0, 2), B = e.value.substring(2, 4), n = e.value.substring(4, 6);
                        return Fe(parseInt(r, 16), parseInt(B, 16), parseInt(n, 16), 1)
                    }
                    if (8 === e.value.length) {
                        r = e.value.substring(0, 2), B = e.value.substring(2, 4), n = e.value.substring(4, 6), s = e.value.substring(6, 8);
                        return Fe(parseInt(r, 16), parseInt(B, 16), parseInt(n, 16), parseInt(s, 16) / 255)
                    }
                }
                if (20 === e.type) {
                    e = Le[e.value.toUpperCase()];
                    if (void 0 !== e) return e
                }
                return Le.TRANSPARENT
            },
            Fe = function (A, e, t, r) {
                return (A << 24 | e << 16 | t << 8 | Math.round(255 * r) << 0) >>> 0
            },
            he = function (A, e) {
                e = e.filter($A);
                if (3 === e.length) {
                    var t = e.map(Qe),
                        r = t[0],
                        B = t[1],
                        t = t[2];
                    return Fe(r, B, t, 1)
                }
                if (4 !== e.length) return 0;
                e = e.map(Qe), r = e[0], B = e[1], t = e[2], e = e[3];
                return Fe(r, B, t, e)
            };

        function de(A, e, t) {
            return t < 0 && (t += 1), 1 <= t && --t, t < 1 / 6 ? (e - A) * t * 6 + A : t < .5 ? e : t < 2 / 3 ? 6 * (e - A) * (2 / 3 - t) + A : A
        }

        function fe(A, e) {
            return ue(A, JA.create(e).parseComponentValue())
        }

        function He(A, e) {
            return A = ue(A, e[0]), (e = e[1]) && te(e) ? {
                color: A,
                stop: e
            } : {
                color: A,
                stop: null
            }
        }

        function pe(A, t) {
            var e = A[0],
                r = A[A.length - 1];
            null === e.stop && (e.stop = ae), null === r.stop && (r.stop = we);
            for (var B = [], n = 0, s = 0; s < A.length; s++) {
                var o = A[s].stop;
                null !== o ? (n < (o = Ue(o, t)) ? B.push(o) : B.push(n), n = o) : B.push(null)
            }
            for (var i = null, s = 0; s < B.length; s++) {
                var Q = B[s];
                if (null === Q) null === i && (i = s);
                else if (null !== i) {
                    for (var c = s - i, a = (Q - B[i - 1]) / (1 + c), g = 1; g <= c; g++) B[i + g - 1] = a * g;
                    i = null
                }
            }
            return A.map(function (A, e) {
                return {
                    color: A.color,
                    stop: Math.max(Math.min(1, B[e] / t), 0)
                }
            })
        }

        function Ee(A, e, t) {
            var r = "number" == typeof A ? A : (s = e / 2, r = (n = t) / 2, s = Ue((B = A)[0], e) - s, n = r - Ue(B[1], n), (Math.atan2(n, s) + 2 * Math.PI) % (2 * Math.PI)),
                B = Math.abs(e * Math.sin(r)) + Math.abs(t * Math.cos(r)),
                n = e / 2,
                s = t / 2,
                e = B / 2,
                t = Math.sin(r - Math.PI / 2) * e,
                e = Math.cos(r - Math.PI / 2) * e;
            return [B, n - e, n + e, s - t, s + t]
        }

        function Ie(A, e) {
            return Math.sqrt(A * A + e * e)
        }

        function ye(A, e, B, n, s) {
            return [
                [0, 0],
                [0, e],
                [A, 0],
                [A, e]
            ].reduce(function (A, e) {
                var t = e[0],
                    r = e[1],
                    r = Ie(B - t, n - r);
                return (s ? r < A.optimumDistance : r > A.optimumDistance) ? {
                    optimumCorner: e,
                    optimumDistance: r
                } : A
            }, {
                optimumDistance: s ? 1 / 0 : -1 / 0,
                optimumCorner: null
            }).optimumCorner
        }
        var Ke = function (A, e) {
                var t = e.filter($A),
                    r = t[0],
                    B = t[1],
                    n = t[2],
                    e = t[3],
                    t = (17 === r.type ? Ce(r.number) : le(A, r)) / (2 * Math.PI),
                    A = te(B) ? B.number / 100 : 0,
                    r = te(n) ? n.number / 100 : 0,
                    B = void 0 !== e && te(e) ? Ue(e, 1) : 1;
                if (0 == A) return Fe(255 * r, 255 * r, 255 * r, 1);
                n = r <= .5 ? r * (1 + A) : r + A - r * A, e = 2 * r - n, A = de(e, n, t + 1 / 3), r = de(e, n, t), t = de(e, n, t - 1 / 3);
                return Fe(255 * A, 255 * r, 255 * t, B)
            },
            me = {
                hsl: Ke,
                hsla: Ke,
                rgb: he,
                rgba: he
            },
            Le = {
                ALICEBLUE: 4042850303,
                ANTIQUEWHITE: 4209760255,
                AQUA: 16777215,
                AQUAMARINE: 2147472639,
                AZURE: 4043309055,
                BEIGE: 4126530815,
                BISQUE: 4293182719,
                BLACK: 255,
                BLANCHEDALMOND: 4293643775,
                BLUE: 65535,
                BLUEVIOLET: 2318131967,
                BROWN: 2771004159,
                BURLYWOOD: 3736635391,
                CADETBLUE: 1604231423,
                CHARTREUSE: 2147418367,
                CHOCOLATE: 3530104575,
                CORAL: 4286533887,
                CORNFLOWERBLUE: 1687547391,
                CORNSILK: 4294499583,
                CRIMSON: 3692313855,
                CYAN: 16777215,
                DARKBLUE: 35839,
                DARKCYAN: 9145343,
                DARKGOLDENROD: 3095837695,
                DARKGRAY: 2846468607,
                DARKGREEN: 6553855,
                DARKGREY: 2846468607,
                DARKKHAKI: 3182914559,
                DARKMAGENTA: 2332068863,
                DARKOLIVEGREEN: 1433087999,
                DARKORANGE: 4287365375,
                DARKORCHID: 2570243327,
                DARKRED: 2332033279,
                DARKSALMON: 3918953215,
                DARKSEAGREEN: 2411499519,
                DARKSLATEBLUE: 1211993087,
                DARKSLATEGRAY: 793726975,
                DARKSLATEGREY: 793726975,
                DARKTURQUOISE: 13554175,
                DARKVIOLET: 2483082239,
                DEEPPINK: 4279538687,
                DEEPSKYBLUE: 12582911,
                DIMGRAY: 1768516095,
                DIMGREY: 1768516095,
                DODGERBLUE: 512819199,
                FIREBRICK: 2988581631,
                FLORALWHITE: 4294635775,
                FORESTGREEN: 579543807,
                FUCHSIA: 4278255615,
                GAINSBORO: 3705462015,
                GHOSTWHITE: 4177068031,
                GOLD: 4292280575,
                GOLDENROD: 3668254975,
                GRAY: 2155905279,
                GREEN: 8388863,
                GREENYELLOW: 2919182335,
                GREY: 2155905279,
                HONEYDEW: 4043305215,
                HOTPINK: 4285117695,
                INDIANRED: 3445382399,
                INDIGO: 1258324735,
                IVORY: 4294963455,
                KHAKI: 4041641215,
                LAVENDER: 3873897215,
                LAVENDERBLUSH: 4293981695,
                LAWNGREEN: 2096890111,
                LEMONCHIFFON: 4294626815,
                LIGHTBLUE: 2916673279,
                LIGHTCORAL: 4034953471,
                LIGHTCYAN: 3774873599,
                LIGHTGOLDENRODYELLOW: 4210742015,
                LIGHTGRAY: 3553874943,
                LIGHTGREEN: 2431553791,
                LIGHTGREY: 3553874943,
                LIGHTPINK: 4290167295,
                LIGHTSALMON: 4288707327,
                LIGHTSEAGREEN: 548580095,
                LIGHTSKYBLUE: 2278488831,
                LIGHTSLATEGRAY: 2005441023,
                LIGHTSLATEGREY: 2005441023,
                LIGHTSTEELBLUE: 2965692159,
                LIGHTYELLOW: 4294959359,
                LIME: 16711935,
                LIMEGREEN: 852308735,
                LINEN: 4210091775,
                MAGENTA: 4278255615,
                MAROON: 2147483903,
                MEDIUMAQUAMARINE: 1724754687,
                MEDIUMBLUE: 52735,
                MEDIUMORCHID: 3126187007,
                MEDIUMPURPLE: 2473647103,
                MEDIUMSEAGREEN: 1018393087,
                MEDIUMSLATEBLUE: 2070474495,
                MEDIUMSPRINGGREEN: 16423679,
                MEDIUMTURQUOISE: 1221709055,
                MEDIUMVIOLETRED: 3340076543,
                MIDNIGHTBLUE: 421097727,
                MINTCREAM: 4127193855,
                MISTYROSE: 4293190143,
                MOCCASIN: 4293178879,
                NAVAJOWHITE: 4292783615,
                NAVY: 33023,
                OLDLACE: 4260751103,
                OLIVE: 2155872511,
                OLIVEDRAB: 1804477439,
                ORANGE: 4289003775,
                ORANGERED: 4282712319,
                ORCHID: 3664828159,
                PALEGOLDENROD: 4008225535,
                PALEGREEN: 2566625535,
                PALETURQUOISE: 2951671551,
                PALEVIOLETRED: 3681588223,
                PAPAYAWHIP: 4293907967,
                PEACHPUFF: 4292524543,
                PERU: 3448061951,
                PINK: 4290825215,
                PLUM: 3718307327,
                POWDERBLUE: 2967529215,
                PURPLE: 2147516671,
                REBECCAPURPLE: 1714657791,
                RED: 4278190335,
                ROSYBROWN: 3163525119,
                ROYALBLUE: 1097458175,
                SADDLEBROWN: 2336560127,
                SALMON: 4202722047,
                SANDYBROWN: 4104413439,
                SEAGREEN: 780883967,
                SEASHELL: 4294307583,
                SIENNA: 2689740287,
                SILVER: 3233857791,
                SKYBLUE: 2278484991,
                SLATEBLUE: 1784335871,
                SLATEGRAY: 1887473919,
                SLATEGREY: 1887473919,
                SNOW: 4294638335,
                SPRINGGREEN: 16744447,
                STEELBLUE: 1182971135,
                TAN: 3535047935,
                TEAL: 8421631,
                THISTLE: 3636451583,
                TOMATO: 4284696575,
                TRANSPARENT: 0,
                TURQUOISE: 1088475391,
                VIOLET: 4001558271,
                WHEAT: 4125012991,
                WHITE: 4294967295,
                WHITESMOKE: 4126537215,
                YELLOW: 4294902015,
                YELLOWGREEN: 2597139199
            },
            be = {
                name: "background-clip",
                initialValue: "border-box",
                prefix: !1,
                type: 1,
                parse: function (A, e) {
                    return e.map(function (A) {
                        if (_A(A)) switch (A.value) {
                            case "padding-box":
                                return 1;
                            case "content-box":
                                return 2
                        }
                        return 0
                    })
                }
            },
            De = {
                name: "background-color",
                initialValue: "transparent",
                prefix: !1,
                type: 3,
                format: "color"
            },
            Ke = function (t, A) {
                var r = Ce(180),
                    B = [];
                return Ae(A).forEach(function (A, e) {
                    if (0 === e) {
                        e = A[0];
                        if (20 === e.type && -1 !== ["top", "left", "right", "bottom"].indexOf(e.value)) return void(r = se(A));
                        if (ne(e)) return void(r = (le(t, e) + Ce(270)) % Ce(360))
                    }
                    A = He(t, A);
                    B.push(A)
                }), {
                    angle: r,
                    stops: B,
                    type: 1
                }
            },
            ve = "closest-side",
            xe = "farthest-side",
            Me = "closest-corner",
            Se = "farthest-corner",
            Te = "ellipse",
            Ge = "contain",
            he = function (r, A) {
                var B = 0,
                    n = 3,
                    s = [],
                    o = [];
                return Ae(A).forEach(function (A, e) {
                    var t = !0;
                    0 === e ? t = A.reduce(function (A, e) {
                        if (_A(e)) switch (e.value) {
                            case "center":
                                return o.push(ge), !1;
                            case "top":
                            case "left":
                                return o.push(ae), !1;
                            case "right":
                            case "bottom":
                                return o.push(we), !1
                        } else if (te(e) || ee(e)) return o.push(e), !1;
                        return A
                    }, t) : 1 === e && (t = A.reduce(function (A, e) {
                        if (_A(e)) switch (e.value) {
                            case "circle":
                                return B = 0, !1;
                            case Te:
                                return !(B = 1);
                            case Ge:
                            case ve:
                                return n = 0, !1;
                            case xe:
                                return !(n = 1);
                            case Me:
                                return !(n = 2);
                            case "cover":
                            case Se:
                                return !(n = 3)
                        } else if (ee(e) || te(e)) return (n = !Array.isArray(n) ? [] : n).push(e), !1;
                        return A
                    }, t)), t && (A = He(r, A), s.push(A))
                }), {
                    size: n,
                    shape: B,
                    stops: s,
                    position: o,
                    type: 2
                }
            },
            Oe = function (A, e) {
                if (22 === e.type) {
                    var t = {
                        url: e.value,
                        type: 0
                    };
                    return A.cache.addImage(e.value), t
                }
                if (18 !== e.type) throw new Error("Unsupported image type " + e.type);
                t = ke[e.name];
                if (void 0 === t) throw new Error('Attempting to parse an unsupported image function "' + e.name + '"');
                return t(A, e.values)
            };
        var Ve, ke = {
                "linear-gradient": function (t, A) {
                    var r = Ce(180),
                        B = [];
                    return Ae(A).forEach(function (A, e) {
                        if (0 === e) {
                            e = A[0];
                            if (20 === e.type && "to" === e.value) return void(r = se(A));
                            if (ne(e)) return void(r = le(t, e))
                        }
                        A = He(t, A);
                        B.push(A)
                    }), {
                        angle: r,
                        stops: B,
                        type: 1
                    }
                },
                "-moz-linear-gradient": Ke,
                "-ms-linear-gradient": Ke,
                "-o-linear-gradient": Ke,
                "-webkit-linear-gradient": Ke,
                "radial-gradient": function (B, A) {
                    var n = 0,
                        s = 3,
                        o = [],
                        i = [];
                    return Ae(A).forEach(function (A, e) {
                        var t, r = !0;
                        0 === e && (t = !1, r = A.reduce(function (A, e) {
                            if (t)
                                if (_A(e)) switch (e.value) {
                                    case "center":
                                        return i.push(ge), A;
                                    case "top":
                                    case "left":
                                        return i.push(ae), A;
                                    case "right":
                                    case "bottom":
                                        return i.push(we), A
                                } else(te(e) || ee(e)) && i.push(e);
                                else if (_A(e)) switch (e.value) {
                                case "circle":
                                    return n = 0, !1;
                                case Te:
                                    return !(n = 1);
                                case "at":
                                    return !(t = !0);
                                case ve:
                                    return s = 0, !1;
                                case "cover":
                                case xe:
                                    return !(s = 1);
                                case Ge:
                                case Me:
                                    return !(s = 2);
                                case Se:
                                    return !(s = 3)
                            } else if (ee(e) || te(e)) return (s = !Array.isArray(s) ? [] : s).push(e), !1;
                            return A
                        }, r)), r && (A = He(B, A), o.push(A))
                    }), {
                        size: s,
                        shape: n,
                        stops: o,
                        position: i,
                        type: 2
                    }
                },
                "-moz-radial-gradient": he,
                "-ms-radial-gradient": he,
                "-o-radial-gradient": he,
                "-webkit-radial-gradient": he,
                "-webkit-gradient": function (r, A) {
                    var e = Ce(180),
                        B = [],
                        n = 1;
                    return Ae(A).forEach(function (A, e) {
                        var t, A = A[0];
                        if (0 === e) {
                            if (_A(A) && "linear" === A.value) return void(n = 1);
                            if (_A(A) && "radial" === A.value) return void(n = 2)
                        }
                        18 === A.type && ("from" === A.name ? (t = ue(r, A.values[0]), B.push({
                            stop: ae,
                            color: t
                        })) : "to" === A.name ? (t = ue(r, A.values[0]), B.push({
                            stop: we,
                            color: t
                        })) : "color-stop" !== A.name || 2 === (A = A.values.filter($A)).length && (t = ue(r, A[1]), A = A[0], ZA(A) && B.push({
                            stop: {
                                type: 16,
                                number: 100 * A.number,
                                flags: A.flags
                            },
                            color: t
                        })))
                    }), 1 === n ? {
                        angle: (e + Ce(180)) % Ce(360),
                        stops: B,
                        type: n
                    } : {
                        size: 3,
                        shape: 0,
                        stops: B,
                        position: [],
                        type: n
                    }
                }
            },
            Re = {
                name: "background-image",
                initialValue: "none",
                type: 1,
                prefix: !1,
                parse: function (e, A) {
                    if (0 === A.length) return [];
                    var t = A[0];
                    return 20 === t.type && "none" === t.value ? [] : A.filter(function (A) {
                        return $A(A) && !(20 === (A = A).type && "none" === A.value || 18 === A.type && !ke[A.name])
                    }).map(function (A) {
                        return Oe(e, A)
                    })
                }
            },
            Ne = {
                name: "background-origin",
                initialValue: "border-box",
                prefix: !1,
                type: 1,
                parse: function (A, e) {
                    return e.map(function (A) {
                        if (_A(A)) switch (A.value) {
                            case "padding-box":
                                return 1;
                            case "content-box":
                                return 2
                        }
                        return 0
                    })
                }
            },
            Pe = {
                name: "background-position",
                initialValue: "0% 0%",
                type: 1,
                prefix: !1,
                parse: function (A, e) {
                    return Ae(e).map(function (A) {
                        return A.filter(te)
                    }).map(re)
                }
            },
            Xe = {
                name: "background-repeat",
                initialValue: "repeat",
                prefix: !1,
                type: 1,
                parse: function (A, e) {
                    return Ae(e).map(function (A) {
                        return A.filter(_A).map(function (A) {
                            return A.value
                        }).join(" ")
                    }).map(Je)
                }
            },
            Je = function (A) {
                switch (A) {
                    case "no-repeat":
                        return 1;
                    case "repeat-x":
                    case "repeat no-repeat":
                        return 2;
                    case "repeat-y":
                    case "no-repeat repeat":
                        return 3;
                    default:
                        return 0
                }
            };
        (he = Ve = Ve || {}).AUTO = "auto", he.CONTAIN = "contain";

        function Ye(A, e) {
            return _A(A) && "normal" === A.value ? 1.2 * e : 17 === A.type ? e * A.number : te(A) ? Ue(A, e) : e
        }
        var We, Ze, _e = {
                name: "background-size",
                initialValue: "0",
                prefix: !(he.COVER = "cover"),
                type: 1,
                parse: function (A, e) {
                    return Ae(e).map(function (A) {
                        return A.filter(qe)
                    })
                }
            },
            qe = function (A) {
                return _A(A) || te(A)
            },
            he = function (A) {
                return {
                    name: "border-" + A + "-color",
                    initialValue: "transparent",
                    prefix: !1,
                    type: 3,
                    format: "color"
                }
            },
            je = he("top"),
            ze = he("right"),
            $e = he("bottom"),
            At = he("left"),
            he = function (A) {
                return {
                    name: "border-radius-" + A,
                    initialValue: "0 0",
                    prefix: !1,
                    type: 1,
                    parse: function (A, e) {
                        return re(e.filter(te))
                    }
                }
            },
            et = he("top-left"),
            tt = he("top-right"),
            rt = he("bottom-right"),
            Bt = he("bottom-left"),
            he = function (A) {
                return {
                    name: "border-" + A + "-style",
                    initialValue: "solid",
                    prefix: !1,
                    type: 2,
                    parse: function (A, e) {
                        switch (e) {
                            case "none":
                                return 0;
                            case "dashed":
                                return 2;
                            case "dotted":
                                return 3;
                            case "double":
                                return 4
                        }
                        return 1
                    }
                }
            },
            nt = he("top"),
            st = he("right"),
            ot = he("bottom"),
            it = he("left"),
            he = function (A) {
                return {
                    name: "border-" + A + "-width",
                    initialValue: "0",
                    type: 0,
                    prefix: !1,
                    parse: function (A, e) {
                        return WA(e) ? e.number : 0
                    }
                }
            },
            Qt = he("top"),
            ct = he("right"),
            at = he("bottom"),
            gt = he("left"),
            wt = {
                name: "color",
                initialValue: "transparent",
                prefix: !1,
                type: 3,
                format: "color"
            },
            Ut = {
                name: "direction",
                initialValue: "ltr",
                prefix: !1,
                type: 2,
                parse: function (A, e) {
                    return "rtl" !== e ? 0 : 1
                }
            },
            lt = {
                name: "display",
                initialValue: "inline-block",
                prefix: !1,
                type: 1,
                parse: function (A, e) {
                    return e.filter(_A).reduce(function (A, e) {
                        return A | Ct(e.value)
                    }, 0)
                }
            },
            Ct = function (A) {
                switch (A) {
                    case "block":
                    case "-webkit-box":
                        return 2;
                    case "inline":
                        return 4;
                    case "run-in":
                        return 8;
                    case "flow":
                        return 16;
                    case "flow-root":
                        return 32;
                    case "table":
                        return 64;
                    case "flex":
                    case "-webkit-flex":
                        return 128;
                    case "grid":
                    case "-ms-grid":
                        return 256;
                    case "ruby":
                        return 512;
                    case "subgrid":
                        return 1024;
                    case "list-item":
                        return 2048;
                    case "table-row-group":
                        return 4096;
                    case "table-header-group":
                        return 8192;
                    case "table-footer-group":
                        return 16384;
                    case "table-row":
                        return 32768;
                    case "table-cell":
                        return 65536;
                    case "table-column-group":
                        return 131072;
                    case "table-column":
                        return 262144;
                    case "table-caption":
                        return 524288;
                    case "ruby-base":
                        return 1048576;
                    case "ruby-text":
                        return 2097152;
                    case "ruby-base-container":
                        return 4194304;
                    case "ruby-text-container":
                        return 8388608;
                    case "contents":
                        return 16777216;
                    case "inline-block":
                        return 33554432;
                    case "inline-list-item":
                        return 67108864;
                    case "inline-table":
                        return 134217728;
                    case "inline-flex":
                        return 268435456;
                    case "inline-grid":
                        return 536870912
                }
                return 0
            },
            ut = {
                name: "float",
                initialValue: "none",
                prefix: !1,
                type: 2,
                parse: function (A, e) {
                    switch (e) {
                        case "left":
                            return 1;
                        case "right":
                            return 2;
                        case "inline-start":
                            return 3;
                        case "inline-end":
                            return 4
                    }
                    return 0
                }
            },
            Ft = {
                name: "letter-spacing",
                initialValue: "0",
                prefix: !1,
                type: 0,
                parse: function (A, e) {
                    return !(20 === e.type && "normal" === e.value || 17 !== e.type && 15 !== e.type) ? e.number : 0
                }
            },
            ht = {
                name: "line-break",
                initialValue: (he = We = We || {}).NORMAL = "normal",
                prefix: !(he.STRICT = "strict"),
                type: 2,
                parse: function (A, e) {
                    return "strict" !== e ? We.NORMAL : We.STRICT
                }
            },
            dt = {
                name: "line-height",
                initialValue: "normal",
                prefix: !1,
                type: 4
            },
            ft = {
                name: "list-style-image",
                initialValue: "none",
                type: 0,
                prefix: !1,
                parse: function (A, e) {
                    return 20 === e.type && "none" === e.value ? null : Oe(A, e)
                }
            },
            Ht = {
                name: "list-style-position",
                initialValue: "outside",
                prefix: !1,
                type: 2,
                parse: function (A, e) {
                    return "inside" !== e ? 1 : 0
                }
            },
            pt = {
                name: "list-style-type",
                initialValue: "none",
                prefix: !1,
                type: 2,
                parse: function (A, e) {
                    switch (e) {
                        case "disc":
                            return 0;
                        case "circle":
                            return 1;
                        case "square":
                            return 2;
                        case "decimal":
                            return 3;
                        case "cjk-decimal":
                            return 4;
                        case "decimal-leading-zero":
                            return 5;
                        case "lower-roman":
                            return 6;
                        case "upper-roman":
                            return 7;
                        case "lower-greek":
                            return 8;
                        case "lower-alpha":
                            return 9;
                        case "upper-alpha":
                            return 10;
                        case "arabic-indic":
                            return 11;
                        case "armenian":
                            return 12;
                        case "bengali":
                            return 13;
                        case "cambodian":
                            return 14;
                        case "cjk-earthly-branch":
                            return 15;
                        case "cjk-heavenly-stem":
                            return 16;
                        case "cjk-ideographic":
                            return 17;
                        case "devanagari":
                            return 18;
                        case "ethiopic-numeric":
                            return 19;
                        case "georgian":
                            return 20;
                        case "gujarati":
                            return 21;
                        case "gurmukhi":
                        case "hebrew":
                            return 22;
                        case "hiragana":
                            return 23;
                        case "hiragana-iroha":
                            return 24;
                        case "japanese-formal":
                            return 25;
                        case "japanese-informal":
                            return 26;
                        case "kannada":
                            return 27;
                        case "katakana":
                            return 28;
                        case "katakana-iroha":
                            return 29;
                        case "khmer":
                            return 30;
                        case "korean-hangul-formal":
                            return 31;
                        case "korean-hanja-formal":
                            return 32;
                        case "korean-hanja-informal":
                            return 33;
                        case "lao":
                            return 34;
                        case "lower-armenian":
                            return 35;
                        case "malayalam":
                            return 36;
                        case "mongolian":
                            return 37;
                        case "myanmar":
                            return 38;
                        case "oriya":
                            return 39;
                        case "persian":
                            return 40;
                        case "simp-chinese-formal":
                            return 41;
                        case "simp-chinese-informal":
                            return 42;
                        case "tamil":
                            return 43;
                        case "telugu":
                            return 44;
                        case "thai":
                            return 45;
                        case "tibetan":
                            return 46;
                        case "trad-chinese-formal":
                            return 47;
                        case "trad-chinese-informal":
                            return 48;
                        case "upper-armenian":
                            return 49;
                        case "disclosure-open":
                            return 50;
                        case "disclosure-closed":
                            return 51;
                        default:
                            return -1
                    }
                }
            },
            he = function (A) {
                return {
                    name: "margin-" + A,
                    initialValue: "0",
                    prefix: !1,
                    type: 4
                }
            },
            Et = he("top"),
            It = he("right"),
            yt = he("bottom"),
            Kt = he("left"),
            mt = {
                name: "overflow",
                initialValue: "visible",
                prefix: !1,
                type: 1,
                parse: function (A, e) {
                    return e.filter(_A).map(function (A) {
                        switch (A.value) {
                            case "hidden":
                                return 1;
                            case "scroll":
                                return 2;
                            case "clip":
                                return 3;
                            case "auto":
                                return 4;
                            default:
                                return 0
                        }
                    })
                }
            },
            Lt = {
                name: "overflow-wrap",
                initialValue: "normal",
                prefix: !1,
                type: 2,
                parse: function (A, e) {
                    return "break-word" !== e ? "normal" : "break-word"
                }
            },
            he = function (A) {
                return {
                    name: "padding-" + A,
                    initialValue: "0",
                    prefix: !1,
                    type: 3,
                    format: "length-percentage"
                }
            },
            bt = he("top"),
            Dt = he("right"),
            vt = he("bottom"),
            xt = he("left"),
            Mt = {
                name: "text-align",
                initialValue: "left",
                prefix: !1,
                type: 2,
                parse: function (A, e) {
                    switch (e) {
                        case "right":
                            return 2;
                        case "center":
                        case "justify":
                            return 1;
                        default:
                            return 0
                    }
                }
            },
            St = {
                name: "position",
                initialValue: "static",
                prefix: !1,
                type: 2,
                parse: function (A, e) {
                    switch (e) {
                        case "relative":
                            return 1;
                        case "absolute":
                            return 2;
                        case "fixed":
                            return 3;
                        case "sticky":
                            return 4
                    }
                    return 0
                }
            },
            Tt = {
                name: "text-shadow",
                initialValue: "none",
                type: 1,
                prefix: !1,
                parse: function (n, A) {
                    return 1 === A.length && jA(A[0], "none") ? [] : Ae(A).map(function (A) {
                        for (var e = {
                                color: Le.TRANSPARENT,
                                offsetX: ae,
                                offsetY: ae,
                                blur: ae
                            }, t = 0, r = 0; r < A.length; r++) {
                            var B = A[r];
                            ee(B) ? (0 === t ? e.offsetX = B : 1 === t ? e.offsetY = B : e.blur = B, t++) : e.color = ue(n, B)
                        }
                        return e
                    })
                }
            },
            Gt = {
                name: "text-transform",
                initialValue: "none",
                prefix: !1,
                type: 2,
                parse: function (A, e) {
                    switch (e) {
                        case "uppercase":
                            return 2;
                        case "lowercase":
                            return 1;
                        case "capitalize":
                            return 3
                    }
                    return 0
                }
            },
            Ot = {
                name: "transform",
                initialValue: "none",
                prefix: !0,
                type: 0,
                parse: function (A, e) {
                    if (20 === e.type && "none" === e.value) return null;
                    if (18 !== e.type) return null;
                    var t = Vt[e.name];
                    if (void 0 === t) throw new Error('Attempting to parse an unsupported transform function "' + e.name + '"');
                    return t(e.values)
                }
            },
            Vt = {
                matrix: function (A) {
                    A = A.filter(function (A) {
                        return 17 === A.type
                    }).map(function (A) {
                        return A.number
                    });
                    return 6 === A.length ? A : null
                },
                matrix3d: function (A) {
                    var e = A.filter(function (A) {
                            return 17 === A.type
                        }).map(function (A) {
                            return A.number
                        }),
                        t = e[0],
                        r = e[1];
                    e[2], e[3];
                    var B = e[4],
                        n = e[5];
                    e[6], e[7], e[8], e[9], e[10], e[11];
                    var s = e[12],
                        A = e[13];
                    return e[14], e[15], 16 === e.length ? [t, r, B, n, s, A] : null
                }
            },
            he = {
                type: 16,
                number: 50,
                flags: 4
            },
            kt = [he, he],
            Rt = {
                name: "transform-origin",
                initialValue: "50% 50%",
                prefix: !0,
                type: 1,
                parse: function (A, e) {
                    e = e.filter(te);
                    return 2 !== e.length ? kt : [e[0], e[1]]
                }
            },
            Nt = {
                name: "visible",
                initialValue: "none",
                prefix: !1,
                type: 2,
                parse: function (A, e) {
                    switch (e) {
                        case "hidden":
                            return 1;
                        case "collapse":
                            return 2;
                        default:
                            return 0
                    }
                }
            };
        (he = Ze = Ze || {}).NORMAL = "normal", he.BREAK_ALL = "break-all";

        function Pt(A, e) {
            return 0 != (A & e)
        }

        function Xt(A, e, t) {
            return (A = A && A[Math.min(e, A.length - 1)]) ? t ? A.open : A.close : ""
        }
        var Jt = {
                name: "word-break",
                initialValue: "normal",
                prefix: !(he.KEEP_ALL = "keep-all"),
                type: 2,
                parse: function (A, e) {
                    switch (e) {
                        case "break-all":
                            return Ze.BREAK_ALL;
                        case "keep-all":
                            return Ze.KEEP_ALL;
                        default:
                            return Ze.NORMAL
                    }
                }
            },
            Yt = {
                name: "z-index",
                initialValue: "auto",
                prefix: !1,
                type: 0,
                parse: function (A, e) {
                    if (20 === e.type) return {
                        auto: !0,
                        order: 0
                    };
                    if (ZA(e)) return {
                        auto: !1,
                        order: e.number
                    };
                    throw new Error("Invalid z-index number parsed")
                }
            },
            Wt = function (A, e) {
                if (15 === e.type) switch (e.unit.toLowerCase()) {
                    case "s":
                        return 1e3 * e.number;
                    case "ms":
                        return e.number
                }
                throw new Error("Unsupported time type")
            },
            Zt = {
                name: "opacity",
                initialValue: "1",
                type: 0,
                prefix: !1,
                parse: function (A, e) {
                    return ZA(e) ? e.number : 1
                }
            },
            _t = {
                name: "text-decoration-color",
                initialValue: "transparent",
                prefix: !1,
                type: 3,
                format: "color"
            },
            qt = {
                name: "text-decoration-line",
                initialValue: "none",
                prefix: !1,
                type: 1,
                parse: function (A, e) {
                    return e.filter(_A).map(function (A) {
                        switch (A.value) {
                            case "underline":
                                return 1;
                            case "overline":
                                return 2;
                            case "line-through":
                                return 3;
                            case "none":
                                return 4
                        }
                        return 0
                    }).filter(function (A) {
                        return 0 !== A
                    })
                }
            },
            jt = {
                name: "font-family",
                initialValue: "",
                prefix: !1,
                type: 1,
                parse: function (A, e) {
                    var t = [],
                        r = [];
                    return e.forEach(function (A) {
                        switch (A.type) {
                            case 20:
                            case 0:
                                t.push(A.value);
                                break;
                            case 17:
                                t.push(A.number.toString());
                                break;
                            case 4:
                                r.push(t.join(" ")), t.length = 0
                        }
                    }), t.length && r.push(t.join(" ")), r.map(function (A) {
                        return -1 === A.indexOf(" ") ? A : "'" + A + "'"
                    })
                }
            },
            zt = {
                name: "font-size",
                initialValue: "0",
                prefix: !1,
                type: 3,
                format: "length"
            },
            $t = {
                name: "font-weight",
                initialValue: "normal",
                type: 0,
                prefix: !1,
                parse: function (A, e) {
                    return ZA(e) ? e.number : !_A(e) || "bold" !== e.value ? 400 : 700
                }
            },
            Ar = {
                name: "font-variant",
                initialValue: "none",
                type: 1,
                prefix: !1,
                parse: function (A, e) {
                    return e.filter(_A).map(function (A) {
                        return A.value
                    })
                }
            },
            er = {
                name: "font-style",
                initialValue: "normal",
                prefix: !1,
                type: 2,
                parse: function (A, e) {
                    switch (e) {
                        case "oblique":
                            return "oblique";
                        case "italic":
                            return "italic";
                        default:
                            return "normal"
                    }
                }
            },
            tr = {
                name: "content",
                initialValue: "none",
                type: 1,
                prefix: !1,
                parse: function (A, e) {
                    if (0 === e.length) return [];
                    var t = e[0];
                    return 20 === t.type && "none" === t.value ? [] : e
                }
            },
            rr = {
                name: "counter-increment",
                initialValue: "none",
                prefix: !0,
                type: 1,
                parse: function (A, e) {
                    if (0 === e.length) return null;
                    var t = e[0];
                    if (20 === t.type && "none" === t.value) return null;
                    for (var r = [], B = e.filter(zA), n = 0; n < B.length; n++) {
                        var s = B[n],
                            o = B[n + 1];
                        20 === s.type && (o = o && ZA(o) ? o.number : 1, r.push({
                            counter: s.value,
                            increment: o
                        }))
                    }
                    return r
                }
            },
            Br = {
                name: "counter-reset",
                initialValue: "none",
                prefix: !0,
                type: 1,
                parse: function (A, e) {
                    if (0 === e.length) return [];
                    for (var t = [], r = e.filter(zA), B = 0; B < r.length; B++) {
                        var n = r[B],
                            s = r[B + 1];
                        _A(n) && "none" !== n.value && (s = s && ZA(s) ? s.number : 0, t.push({
                            counter: n.value,
                            reset: s
                        }))
                    }
                    return t
                }
            },
            nr = {
                name: "duration",
                initialValue: "0s",
                prefix: !1,
                type: 1,
                parse: function (e, A) {
                    return A.filter(WA).map(function (A) {
                        return Wt(e, A)
                    })
                }
            },
            sr = {
                name: "quotes",
                initialValue: "none",
                prefix: !0,
                type: 1,
                parse: function (A, e) {
                    if (0 === e.length) return null;
                    var t = e[0];
                    if (20 === t.type && "none" === t.value) return null;
                    var r = [],
                        B = e.filter(qA);
                    if (B.length % 2 != 0) return null;
                    for (var n = 0; n < B.length; n += 2) {
                        var s = B[n].value,
                            o = B[n + 1].value;
                        r.push({
                            open: s,
                            close: o
                        })
                    }
                    return r
                }
            },
            or = {
                name: "box-shadow",
                initialValue: "none",
                type: 1,
                prefix: !1,
                parse: function (n, A) {
                    return 1 === A.length && jA(A[0], "none") ? [] : Ae(A).map(function (A) {
                        for (var e = {
                                color: 255,
                                offsetX: ae,
                                offsetY: ae,
                                blur: ae,
                                spread: ae,
                                inset: !1
                            }, t = 0, r = 0; r < A.length; r++) {
                            var B = A[r];
                            jA(B, "inset") ? e.inset = !0 : ee(B) ? (0 === t ? e.offsetX = B : 1 === t ? e.offsetY = B : 2 === t ? e.blur = B : e.spread = B, t++) : e.color = ue(n, B)
                        }
                        return e
                    })
                }
            },
            ir = {
                name: "paint-order",
                initialValue: "normal",
                prefix: !1,
                type: 1,
                parse: function (A, e) {
                    var t = [];
                    return e.filter(_A).forEach(function (A) {
                        switch (A.value) {
                            case "stroke":
                                t.push(1);
                                break;
                            case "fill":
                                t.push(0);
                                break;
                            case "markers":
                                t.push(2)
                        }
                    }), [0, 1, 2].forEach(function (A) {
                        -1 === t.indexOf(A) && t.push(A)
                    }), t
                }
            },
            Qr = {
                name: "-webkit-text-stroke-color",
                initialValue: "currentcolor",
                prefix: !1,
                type: 3,
                format: "color"
            },
            cr = {
                name: "-webkit-text-stroke-width",
                initialValue: "0",
                type: 0,
                prefix: !1,
                parse: function (A, e) {
                    return WA(e) ? e.number : 0
                }
            },
            ar = (gr.prototype.isVisible = function () {
                return 0 < this.display && 0 < this.opacity && 0 === this.visibility
            }, gr.prototype.isTransparent = function () {
                return oe(this.backgroundColor)
            }, gr.prototype.isTransformed = function () {
                return null !== this.transform
            }, gr.prototype.isPositioned = function () {
                return 0 !== this.position
            }, gr.prototype.isPositionedWithZIndex = function () {
                return this.isPositioned() && !this.zIndex.auto
            }, gr.prototype.isFloating = function () {
                return 0 !== this.float
            }, gr.prototype.isInlineLevel = function () {
                return Pt(this.display, 4) || Pt(this.display, 33554432) || Pt(this.display, 268435456) || Pt(this.display, 536870912) || Pt(this.display, 67108864) || Pt(this.display, 134217728)
            }, gr);

        function gr(A, e) {
            this.animationDuration = lr(A, nr, e.animationDuration), this.backgroundClip = lr(A, be, e.backgroundClip), this.backgroundColor = lr(A, De, e.backgroundColor), this.backgroundImage = lr(A, Re, e.backgroundImage), this.backgroundOrigin = lr(A, Ne, e.backgroundOrigin), this.backgroundPosition = lr(A, Pe, e.backgroundPosition), this.backgroundRepeat = lr(A, Xe, e.backgroundRepeat), this.backgroundSize = lr(A, _e, e.backgroundSize), this.borderTopColor = lr(A, je, e.borderTopColor), this.borderRightColor = lr(A, ze, e.borderRightColor), this.borderBottomColor = lr(A, $e, e.borderBottomColor), this.borderLeftColor = lr(A, At, e.borderLeftColor), this.borderTopLeftRadius = lr(A, et, e.borderTopLeftRadius), this.borderTopRightRadius = lr(A, tt, e.borderTopRightRadius), this.borderBottomRightRadius = lr(A, rt, e.borderBottomRightRadius), this.borderBottomLeftRadius = lr(A, Bt, e.borderBottomLeftRadius), this.borderTopStyle = lr(A, nt, e.borderTopStyle), this.borderRightStyle = lr(A, st, e.borderRightStyle), this.borderBottomStyle = lr(A, ot, e.borderBottomStyle), this.borderLeftStyle = lr(A, it, e.borderLeftStyle), this.borderTopWidth = lr(A, Qt, e.borderTopWidth), this.borderRightWidth = lr(A, ct, e.borderRightWidth), this.borderBottomWidth = lr(A, at, e.borderBottomWidth), this.borderLeftWidth = lr(A, gt, e.borderLeftWidth), this.boxShadow = lr(A, or, e.boxShadow), this.color = lr(A, wt, e.color), this.direction = lr(A, Ut, e.direction), this.display = lr(A, lt, e.display), this.float = lr(A, ut, e.cssFloat), this.fontFamily = lr(A, jt, e.fontFamily), this.fontSize = lr(A, zt, e.fontSize), this.fontStyle = lr(A, er, e.fontStyle), this.fontVariant = lr(A, Ar, e.fontVariant), this.fontWeight = lr(A, $t, e.fontWeight), this.letterSpacing = lr(A, Ft, e.letterSpacing), this.lineBreak = lr(A, ht, e.lineBreak), this.lineHeight = lr(A, dt, e.lineHeight), this.listStyleImage = lr(A, ft, e.listStyleImage), this.listStylePosition = lr(A, Ht, e.listStylePosition), this.listStyleType = lr(A, pt, e.listStyleType), this.marginTop = lr(A, Et, e.marginTop), this.marginRight = lr(A, It, e.marginRight), this.marginBottom = lr(A, yt, e.marginBottom), this.marginLeft = lr(A, Kt, e.marginLeft), this.opacity = lr(A, Zt, e.opacity);
            var t = lr(A, mt, e.overflow);
            this.overflowX = t[0], this.overflowY = t[1 < t.length ? 1 : 0], this.overflowWrap = lr(A, Lt, e.overflowWrap), this.paddingTop = lr(A, bt, e.paddingTop), this.paddingRight = lr(A, Dt, e.paddingRight), this.paddingBottom = lr(A, vt, e.paddingBottom), this.paddingLeft = lr(A, xt, e.paddingLeft), this.paintOrder = lr(A, ir, e.paintOrder), this.position = lr(A, St, e.position), this.textAlign = lr(A, Mt, e.textAlign), this.textDecorationColor = lr(A, _t, null !== (t = e.textDecorationColor) && void 0 !== t ? t : e.color), this.textDecorationLine = lr(A, qt, null !== (t = e.textDecorationLine) && void 0 !== t ? t : e.textDecoration), this.textShadow = lr(A, Tt, e.textShadow), this.textTransform = lr(A, Gt, e.textTransform), this.transform = lr(A, Ot, e.transform), this.transformOrigin = lr(A, Rt, e.transformOrigin), this.visibility = lr(A, Nt, e.visibility), this.webkitTextStrokeColor = lr(A, Qr, e.webkitTextStrokeColor), this.webkitTextStrokeWidth = lr(A, cr, e.webkitTextStrokeWidth), this.wordBreak = lr(A, Jt, e.wordBreak), this.zIndex = lr(A, Yt, e.zIndex)
        }
        for (var wr = function (A, e) {
                this.content = lr(A, tr, e.content), this.quotes = lr(A, sr, e.quotes)
            }, Ur = function (A, e) {
                this.counterIncrement = lr(A, rr, e.counterIncrement), this.counterReset = lr(A, Br, e.counterReset)
            }, lr = function (A, e, t) {
                var r = new PA,
                    t = null != t ? t.toString() : e.initialValue;
                r.write(t);
                var B = new JA(r.read());
                switch (e.type) {
                    case 2:
                        var n = B.parseComponentValue();
                        return e.parse(A, _A(n) ? n.value : e.initialValue);
                    case 0:
                        return e.parse(A, B.parseComponentValue());
                    case 1:
                        return e.parse(A, B.parseComponentValues());
                    case 4:
                        return B.parseComponentValue();
                    case 3:
                        switch (e.format) {
                            case "angle":
                                return le(A, B.parseComponentValue());
                            case "color":
                                return ue(A, B.parseComponentValue());
                            case "image":
                                return Oe(A, B.parseComponentValue());
                            case "length":
                                var s = B.parseComponentValue();
                                return ee(s) ? s : ae;
                            case "length-percentage":
                                s = B.parseComponentValue();
                                return te(s) ? s : ae;
                            case "time":
                                return Wt(A, B.parseComponentValue())
                        }
                }
            }, Cr = function (A, e) {
                A = function (A) {
                    switch (A.getAttribute("data-html2canvas-debug")) {
                        case "all":
                            return 1;
                        case "clone":
                            return 2;
                        case "parse":
                            return 3;
                        case "render":
                            return 4;
                        default:
                            return 0
                    }
                }(A);
                return 1 === A || e === A
            }, ur = function (A, e) {
                this.context = A, this.textNodes = [], this.elements = [], this.flags = 0, Cr(e, 3), this.styles = new ar(A, window.getComputedStyle(e, null)), JB(e) && (this.styles.animationDuration.some(function (A) {
                    return 0 < A
                }) && (e.style.animationDuration = "0s"), null !== this.styles.transform && (e.style.transform = "none")), this.bounds = f(this.context, e), Cr(e, 4) && (this.flags |= 16)
            }, Fr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", hr = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), dr = 0; dr < Fr.length; dr++) hr[Fr.charCodeAt(dr)] = dr;

        function fr(A, e, t) {
            return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t))
        }
        var Hr = (pr.prototype.get = function (A) {
            var e;
            if (0 <= A) {
                if (A < 55296 || 56319 < A && A <= 65535) return e = this.index[A >> 5], this.data[e = (e << 2) + (31 & A)];
                if (A <= 65535) return e = this.index[2048 + (A - 55296 >> 5)], this.data[e = (e << 2) + (31 & A)];
                if (A < this.highStart) return e = this.index[e = 2080 + (A >> 11)], e = this.index[e += A >> 5 & 63], this.data[e = (e << 2) + (31 & A)];
                if (A <= 1114111) return this.data[this.highValueIndex]
            }
            return this.errorValue
        }, pr);

        function pr(A, e, t, r, B, n) {
            this.initialValue = A, this.errorValue = e, this.highStart = t, this.highValueIndex = r, this.index = B, this.data = n
        }
        for (var Er = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ir = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), yr = 0; yr < Er.length; yr++) Ir[Er.charCodeAt(yr)] = yr;

        function Kr(A) {
            return kr.get(A)
        }

        function mr(A) {
            var t = function (A) {
                    for (var e = [], t = 0, r = A.length; t < r;) {
                        var B, n = A.charCodeAt(t++);
                        55296 <= n && n <= 56319 && t < r ? 56320 == (64512 & (B = A.charCodeAt(t++))) ? e.push(((1023 & n) << 10) + (1023 & B) + 65536) : (e.push(n), t--) : e.push(n)
                    }
                    return e
                }(A),
                r = t.length,
                B = 0,
                n = 0,
                s = t.map(Kr);
            return {
                next: function () {
                    if (r <= B) return {
                        done: !0,
                        value: null
                    };
                    for (var A = Rr; B < r && (A = function (A, e) {
                            var t = e - 2,
                                r = A[t],
                                B = A[e - 1],
                                e = A[e];
                            if (2 === B && 3 === e) return Rr;
                            if (2 === B || 3 === B || 4 === B) return "÷";
                            if (2 === e || 3 === e || 4 === e) return "÷";
                            if (B === Tr && -1 !== [Tr, Gr, Or, Vr].indexOf(e)) return Rr;
                            if (!(B !== Or && B !== Gr || e !== Gr && 10 !== e)) return Rr;
                            if ((B === Vr || 10 === B) && 10 === e) return Rr;
                            if (13 === e || 5 === e) return Rr;
                            if (7 === e) return Rr;
                            if (1 === B) return Rr;
                            if (13 === B && 14 === e) {
                                for (; 5 === r;) r = A[--t];
                                if (14 === r) return Rr
                            }
                            if (15 === B && 15 === e) {
                                for (var n = 0; 15 === r;) n++, r = A[--t];
                                if (n % 2 == 0) return Rr
                            }
                            return "÷"
                        }(s, ++B)) === Rr;);
                    if (A === Rr && B !== r) return {
                        done: !0,
                        value: null
                    };
                    var e = function () {
                        for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
                        if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
                        var t = A.length;
                        if (!t) return "";
                        for (var r = [], B = -1, n = ""; ++B < t;) {
                            var s = A[B];
                            s <= 65535 ? r.push(s) : (s -= 65536, r.push(55296 + (s >> 10), s % 1024 + 56320)), (B + 1 === t || 16384 < r.length) && (n += String.fromCharCode.apply(String, r), r.length = 0)
                        }
                        return n
                    }.apply(null, t.slice(n, B));
                    return n = B, {
                        value: e,
                        done: !1
                    }
                }
            }
        }

        function Lr(A) {
            return 0 === A[0] && 255 === A[1] && 0 === A[2] && 255 === A[3]
        }
        var br, Dr, vr, xr, Mr, Sr, Tr = 8,
            Gr = 9,
            Or = 11,
            Vr = 12,
            kr = (vr = function (A) {
                var e, t, r, B, n = .75 * A.length,
                    s = A.length,
                    o = 0;
                "=" === A[A.length - 1] && (n--, "=" === A[A.length - 2] && n--);
                for (var n = new("undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array && void 0 !== Uint8Array.prototype.slice ? ArrayBuffer : Array)(n), i = Array.isArray(n) ? n : new Uint8Array(n), Q = 0; Q < s; Q += 4) e = hr[A.charCodeAt(Q)], t = hr[A.charCodeAt(Q + 1)], r = hr[A.charCodeAt(Q + 2)], B = hr[A.charCodeAt(Q + 3)], i[o++] = e << 2 | t >> 4, i[o++] = (15 & t) << 4 | r >> 2, i[o++] = (3 & r) << 6 | 63 & B;
                return n
            }(br = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA="), xr = Array.isArray(vr) ? function (A) {
                for (var e = A.length, t = [], r = 0; r < e; r += 4) t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
                return t
            }(vr) : new Uint32Array(vr), Mr = Array.isArray(vr) ? function (A) {
                for (var e = A.length, t = [], r = 0; r < e; r += 2) t.push(A[r + 1] << 8 | A[r]);
                return t
            }(vr) : new Uint16Array(vr), br = fr(Mr, 12, xr[4] / 2), Dr = 2 === xr[5] ? fr(Mr, (24 + xr[4]) / 2) : (vr = xr, Mr = Math.ceil((24 + xr[4]) / 4), vr.slice ? vr.slice(Mr, Dr) : new Uint32Array(Array.prototype.slice.call(vr, Mr, Dr))), new Hr(xr[0], xr[1], xr[2], xr[3], br, Dr)),
            Rr = "×",
            Nr = function (A, e, t, r, B) {
                var n = "http://www.w3.org/2000/svg",
                    s = document.createElementNS(n, "svg"),
                    n = document.createElementNS(n, "foreignObject");
                return s.setAttributeNS(null, "width", A.toString()), s.setAttributeNS(null, "height", e.toString()), n.setAttributeNS(null, "width", "100%"), n.setAttributeNS(null, "height", "100%"), n.setAttributeNS(null, "x", t.toString()), n.setAttributeNS(null, "y", r.toString()), n.setAttributeNS(null, "externalResourcesRequired", "true"), s.appendChild(n), n.appendChild(B), s
            },
            Pr = function (r) {
                return new Promise(function (A, e) {
                    var t = new Image;
                    t.onload = function () {
                        return A(t)
                    }, t.onerror = e, t.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent((new XMLSerializer).serializeToString(r))
                })
            },
            Xr = {
                get SUPPORT_RANGE_BOUNDS() {
                    var A = function (A) {
                        if (A.createRange) {
                            var e = A.createRange();
                            if (e.getBoundingClientRect) {
                                var t = A.createElement("boundtest");
                                t.style.height = "123px", t.style.display = "block", A.body.appendChild(t), e.selectNode(t);
                                e = e.getBoundingClientRect(), e = Math.round(e.height);
                                if (A.body.removeChild(t), 123 === e) return !0
                            }
                        }
                        return !1
                    }(document);
                    return Object.defineProperty(Xr, "SUPPORT_RANGE_BOUNDS", {
                        value: A
                    }), A
                },
                get SUPPORT_WORD_BREAKING() {
                    var A = Xr.SUPPORT_RANGE_BOUNDS && function (A) {
                        var e = A.createElement("boundtest");
                        e.style.width = "50px", e.style.display = "block", e.style.fontSize = "12px", e.style.letterSpacing = "0px", e.style.wordSpacing = "0px", A.body.appendChild(e);
                        var r = A.createRange();
                        e.innerHTML = "function" == typeof "".repeat ? "&#128104;".repeat(10) : "";
                        var B = e.firstChild,
                            t = Q(B.data).map(function (A) {
                                return g(A)
                            }),
                            n = 0,
                            s = {},
                            t = t.every(function (A, e) {
                                r.setStart(B, n), r.setEnd(B, n + A.length);
                                var t = r.getBoundingClientRect();
                                n += A.length;
                                A = t.x > s.x || t.y > s.y;
                                return s = t, 0 === e || A
                            });
                        return A.body.removeChild(e), t
                    }(document);
                    return Object.defineProperty(Xr, "SUPPORT_WORD_BREAKING", {
                        value: A
                    }), A
                },
                get SUPPORT_SVG_DRAWING() {
                    var A = function (A) {
                        var e = new Image,
                            t = A.createElement("canvas"),
                            A = t.getContext("2d");
                        if (!A) return !1;
                        e.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
                        try {
                            A.drawImage(e, 0, 0), t.toDataURL()
                        } catch (A) {
                            return !1
                        }
                        return !0
                    }(document);
                    return Object.defineProperty(Xr, "SUPPORT_SVG_DRAWING", {
                        value: A
                    }), A
                },
                get SUPPORT_FOREIGNOBJECT_DRAWING() {
                    var A = "function" == typeof Array.from && "function" == typeof window.fetch ? function (t) {
                        var A = t.createElement("canvas"),
                            r = 100;
                        A.width = r, A.height = r;
                        var B = A.getContext("2d");
                        if (!B) return Promise.reject(!1);
                        B.fillStyle = "rgb(0, 255, 0)", B.fillRect(0, 0, r, r);
                        var e = new Image,
                            n = A.toDataURL();
                        e.src = n;
                        e = Nr(r, r, 0, 0, e);
                        return B.fillStyle = "red", B.fillRect(0, 0, r, r), Pr(e).then(function (A) {
                            B.drawImage(A, 0, 0);
                            var e = B.getImageData(0, 0, r, r).data;
                            B.fillStyle = "red", B.fillRect(0, 0, r, r);
                            A = t.createElement("div");
                            return A.style.backgroundImage = "url(" + n + ")", A.style.height = "100px", Lr(e) ? Pr(Nr(r, r, 0, 0, A)) : Promise.reject(!1)
                        }).then(function (A) {
                            return B.drawImage(A, 0, 0), Lr(B.getImageData(0, 0, r, r).data)
                        }).catch(function () {
                            return !1
                        })
                    }(document) : Promise.resolve(!1);
                    return Object.defineProperty(Xr, "SUPPORT_FOREIGNOBJECT_DRAWING", {
                        value: A
                    }), A
                },
                get SUPPORT_CORS_IMAGES() {
                    var A = void 0 !== (new Image).crossOrigin;
                    return Object.defineProperty(Xr, "SUPPORT_CORS_IMAGES", {
                        value: A
                    }), A
                },
                get SUPPORT_RESPONSE_TYPE() {
                    var A = "string" == typeof (new XMLHttpRequest).responseType;
                    return Object.defineProperty(Xr, "SUPPORT_RESPONSE_TYPE", {
                        value: A
                    }), A
                },
                get SUPPORT_CORS_XHR() {
                    var A = "withCredentials" in new XMLHttpRequest;
                    return Object.defineProperty(Xr, "SUPPORT_CORS_XHR", {
                        value: A
                    }), A
                },
                get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
                    var A = !("undefined" == typeof Intl || !Intl.Segmenter);
                    return Object.defineProperty(Xr, "SUPPORT_NATIVE_TEXT_SEGMENTATION", {
                        value: A
                    }), A
                }
            },
            Jr = function (A, e) {
                this.text = A, this.bounds = e
            },
            Yr = function (A, e) {
                var t = e.ownerDocument;
                if (t) {
                    var r = t.createElement("html2canvaswrapper");
                    r.appendChild(e.cloneNode(!0));
                    t = e.parentNode;
                    if (t) {
                        t.replaceChild(r, e);
                        A = f(A, r);
                        return r.firstChild && t.replaceChild(r.firstChild, r), A
                    }
                }
                return d.EMPTY
            },
            Wr = function (A, e, t) {
                var r = A.ownerDocument;
                if (!r) throw new Error("Node has no owner document");
                r = r.createRange();
                return r.setStart(A, e), r.setEnd(A, e + t), r
            },
            Zr = function (A) {
                if (Xr.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
                    var e = new Intl.Segmenter(void 0, {
                        granularity: "grapheme"
                    });
                    return Array.from(e.segment(A)).map(function (A) {
                        return A.segment
                    })
                }
                return function (A) {
                    for (var e, t = mr(A), r = []; !(e = t.next()).done;) e.value && r.push(e.value.slice());
                    return r
                }(A)
            },
            _r = function (A, e) {
                return 0 !== e.letterSpacing ? Zr(A) : function (A, e) {
                    if (Xr.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
                        var t = new Intl.Segmenter(void 0, {
                            granularity: "word"
                        });
                        return Array.from(t.segment(A)).map(function (A) {
                            return A.segment
                        })
                    }
                    return jr(A, e)
                }(A, e)
            },
            qr = [32, 160, 4961, 65792, 65793, 4153, 4241],
            jr = function (A, e) {
                for (var t, r = wA(A, {
                        lineBreak: e.lineBreak,
                        wordBreak: "break-word" === e.overflowWrap ? "break-word" : e.wordBreak
                    }), B = []; !(t = r.next()).done;) ! function () {
                    var A, e;
                    t.value && (A = t.value.slice(), A = Q(A), e = "", A.forEach(function (A) {
                        -1 === qr.indexOf(A) ? e += g(A) : (e.length && B.push(e), B.push(g(A)), e = "")
                    }), e.length && B.push(e))
                }();
                return B
            },
            zr = function (A, e, t) {
                var B, n, s, o, i;
                this.text = $r(e.data, t.textTransform), this.textBounds = (B = A, A = this.text, s = e, A = _r(A, n = t), o = [], i = 0, A.forEach(function (A) {
                    var e, t, r;
                    n.textDecorationLine.length || 0 < A.trim().length ? Xr.SUPPORT_RANGE_BOUNDS ? 1 < (r = Wr(s, i, A.length).getClientRects()).length ? (e = Zr(A), t = 0, e.forEach(function (A) {
                        o.push(new Jr(A, d.fromDOMRectList(B, Wr(s, t + i, A.length).getClientRects()))), t += A.length
                    })) : o.push(new Jr(A, d.fromDOMRectList(B, r))) : (r = s.splitText(A.length), o.push(new Jr(A, Yr(B, s))), s = r) : Xr.SUPPORT_RANGE_BOUNDS || (s = s.splitText(A.length)), i += A.length
                }), o)
            },
            $r = function (A, e) {
                switch (e) {
                    case 1:
                        return A.toLowerCase();
                    case 3:
                        return A.replace(AB, eB);
                    case 2:
                        return A.toUpperCase();
                    default:
                        return A
                }
            },
            AB = /(^|\s|:|-|\(|\))([a-z])/g,
            eB = function (A, e, t) {
                return 0 < A.length ? e + t.toUpperCase() : A
            },
            tB = (A(rB, Sr = ur), rB);

        function rB(A, e) {
            A = Sr.call(this, A, e) || this;
            return A.src = e.currentSrc || e.src, A.intrinsicWidth = e.naturalWidth, A.intrinsicHeight = e.naturalHeight, A.context.cache.addImage(A.src), A
        }
        var BB, nB = (A(sB, BB = ur), sB);

        function sB(A, e) {
            A = BB.call(this, A, e) || this;
            return A.canvas = e, A.intrinsicWidth = e.width, A.intrinsicHeight = e.height, A
        }
        var oB, iB = (A(QB, oB = ur), QB);

        function QB(A, e) {
            var t = oB.call(this, A, e) || this,
                r = new XMLSerializer,
                A = f(A, e);
            return e.setAttribute("width", A.width + "px"), e.setAttribute("height", A.height + "px"), t.svg = "data:image/svg+xml," + encodeURIComponent(r.serializeToString(e)), t.intrinsicWidth = e.width.baseVal.value, t.intrinsicHeight = e.height.baseVal.value, t.context.cache.addImage(t.svg), t
        }
        var cB, aB = (A(gB, cB = ur), gB);

        function gB(A, e) {
            A = cB.call(this, A, e) || this;
            return A.value = e.value, A
        }
        var wB, UB = (A(lB, wB = ur), lB);

        function lB(A, e) {
            A = wB.call(this, A, e) || this;
            return A.start = e.start, A.reversed = "boolean" == typeof e.reversed && !0 === e.reversed, A
        }
        var CB, uB = [{
                type: 15,
                flags: 0,
                unit: "px",
                number: 3
            }],
            FB = [{
                type: 16,
                flags: 0,
                number: 50
            }],
            hB = "checkbox",
            dB = "radio",
            fB = "password",
            HB = 707406591,
            pB = (A(EB, CB = ur), EB);

        function EB(A, e) {
            var t = CB.call(this, A, e) || this;
            switch (t.type = e.type.toLowerCase(), t.checked = e.checked, t.value = 0 === (e = (A = e).type === fB ? new Array(A.value.length + 1).join("•") : A.value).length ? A.placeholder || "" : e, t.type !== hB && t.type !== dB || (t.styles.backgroundColor = 3739148031, t.styles.borderTopColor = t.styles.borderRightColor = t.styles.borderBottomColor = t.styles.borderLeftColor = 2779096575, t.styles.borderTopWidth = t.styles.borderRightWidth = t.styles.borderBottomWidth = t.styles.borderLeftWidth = 1, t.styles.borderTopStyle = t.styles.borderRightStyle = t.styles.borderBottomStyle = t.styles.borderLeftStyle = 1, t.styles.backgroundClip = [0], t.styles.backgroundOrigin = [0], t.bounds = (e = t.bounds).width > e.height ? new d(e.left + (e.width - e.height) / 2, e.top, e.height, e.height) : e.width < e.height ? new d(e.left, e.top + (e.height - e.width) / 2, e.width, e.width) : e), t.type) {
                case hB:
                    t.styles.borderTopRightRadius = t.styles.borderTopLeftRadius = t.styles.borderBottomRightRadius = t.styles.borderBottomLeftRadius = uB;
                    break;
                case dB:
                    t.styles.borderTopRightRadius = t.styles.borderTopLeftRadius = t.styles.borderBottomRightRadius = t.styles.borderBottomLeftRadius = FB
            }
            return t
        }
        var IB, yB = (A(KB, IB = ur), KB);

        function KB(A, e) {
            A = IB.call(this, A, e) || this, e = e.options[e.selectedIndex || 0];
            return A.value = e && e.text || "", A
        }
        var mB, LB = (A(bB, mB = ur), bB);

        function bB(A, e) {
            A = mB.call(this, A, e) || this;
            return A.value = e.value, A
        }
        var DB, vB = (A(xB, DB = ur), xB);

        function xB(A, e) {
            var t, r, B = DB.call(this, A, e) || this;
            B.src = e.src, B.width = parseInt(e.width, 10) || 0, B.height = parseInt(e.height, 10) || 0, B.backgroundColor = B.styles.backgroundColor;
            try {
                e.contentWindow && e.contentWindow.document && e.contentWindow.document.documentElement && (B.tree = kB(A, e.contentWindow.document.documentElement), t = e.contentWindow.document.documentElement ? fe(A, getComputedStyle(e.contentWindow.document.documentElement).backgroundColor) : Le.TRANSPARENT, r = e.contentWindow.document.body ? fe(A, getComputedStyle(e.contentWindow.document.body).backgroundColor) : Le.TRANSPARENT, B.backgroundColor = oe(t) ? oe(r) ? B.styles.backgroundColor : r : t)
            } catch (A) {}
            return B
        }

        function MB(A) {
            return "VIDEO" === A.tagName
        }

        function SB(A) {
            return "STYLE" === A.tagName
        }

        function TB(A) {
            return 0 < A.tagName.indexOf("-")
        }
        var GB = ["OL", "UL", "MENU"],
            OB = function (e, A, t, r) {
                for (var B = A.firstChild; B; B = s) {
                    var n, s = B.nextSibling;
                    PB(B) && 0 < B.data.trim().length ? t.textNodes.push(new zr(e, B, t.styles)) : XB(B) && (rn(B) && B.assignedNodes ? B.assignedNodes().forEach(function (A) {
                        return OB(e, A, t, r)
                    }) : (n = VB(e, B)).styles.isVisible() && (RB(B, n, r) ? n.flags |= 4 : NB(n.styles) && (n.flags |= 2), -1 !== GB.indexOf(B.tagName) && (n.flags |= 8), t.elements.push(n), B.slot, B.shadowRoot ? OB(e, B.shadowRoot, n, r) : en(B) || qB(B) || tn(B) || OB(e, B, n, r)))
                }
            },
            VB = function (A, e) {
                return new($B(e) ? tB : zB(e) ? nB : qB(e) ? iB : WB(e) ? aB : ZB(e) ? UB : _B(e) ? pB : tn(e) ? yB : en(e) ? LB : An(e) ? vB : ur)(A, e)
            },
            kB = function (A, e) {
                var t = VB(A, e);
                return t.flags |= 4, OB(A, e, t, t), t
            },
            RB = function (A, e, t) {
                return e.styles.isPositionedWithZIndex() || e.styles.opacity < 1 || e.styles.isTransformed() || jB(A) && t.styles.isTransparent()
            },
            NB = function (A) {
                return A.isPositioned() || A.isFloating()
            },
            PB = function (A) {
                return A.nodeType === Node.TEXT_NODE
            },
            XB = function (A) {
                return A.nodeType === Node.ELEMENT_NODE
            },
            JB = function (A) {
                return XB(A) && void 0 !== A.style && !YB(A)
            },
            YB = function (A) {
                return "object" == typeof A.className
            },
            WB = function (A) {
                return "LI" === A.tagName
            },
            ZB = function (A) {
                return "OL" === A.tagName
            },
            _B = function (A) {
                return "INPUT" === A.tagName
            },
            qB = function (A) {
                return "svg" === A.tagName
            },
            jB = function (A) {
                return "BODY" === A.tagName
            },
            zB = function (A) {
                return "CANVAS" === A.tagName
            },
            $B = function (A) {
                return "IMG" === A.tagName
            },
            An = function (A) {
                return "IFRAME" === A.tagName
            },
            en = function (A) {
                return "TEXTAREA" === A.tagName
            },
            tn = function (A) {
                return "SELECT" === A.tagName
            },
            rn = function (A) {
                return "SLOT" === A.tagName
            },
            Bn = (nn.prototype.getCounterValue = function (A) {
                A = this.counters[A];
                return A && A.length ? A[A.length - 1] : 1
            }, nn.prototype.getCounterValues = function (A) {
                A = this.counters[A];
                return A || []
            }, nn.prototype.pop = function (A) {
                var e = this;
                A.forEach(function (A) {
                    return e.counters[A].pop()
                })
            }, nn.prototype.parse = function (A) {
                var t = this,
                    e = A.counterIncrement,
                    A = A.counterReset,
                    r = !0;
                null !== e && e.forEach(function (A) {
                    var e = t.counters[A.counter];
                    e && 0 !== A.increment && (r = !1, e.length || e.push(1), e[Math.max(0, e.length - 1)] += A.increment)
                });
                var B = [];
                return r && A.forEach(function (A) {
                    var e = t.counters[A.counter];
                    B.push(A.counter), (e = e || (t.counters[A.counter] = [])).push(A.reset)
                }), B
            }, nn);

        function nn() {
            this.counters = {}
        }

        function sn(r, A, e, B, t, n) {
            return r < A || e < r ? Fn(r, t, 0 < n.length) : B.integers.reduce(function (A, e, t) {
                for (; e <= r;) r -= e, A += B.values[t];
                return A
            }, "") + n
        }

        function on(A, e, t, r) {
            for (var B = ""; t || A--, B = r(A) + B, e <= (A /= e) * e;);
            return B
        }

        function Qn(A, e, t, r, B) {
            var n = t - e + 1;
            return (A < 0 ? "-" : "") + (on(Math.abs(A), n, r, function (A) {
                return g(Math.floor(A % n) + e)
            }) + B)
        }

        function cn(A, e, t) {
            void 0 === t && (t = ". ");
            var r = e.length;
            return on(Math.abs(A), r, !1, function (A) {
                return e[Math.floor(A % r)]
            }) + t
        }

        function an(A, e, t, r, B, n) {
            if (A < -9999 || 9999 < A) return Fn(A, 4, 0 < B.length);
            var s = Math.abs(A),
                o = B;
            if (0 === s) return e[0] + o;
            for (var i = 0; 0 < s && i <= 4; i++) {
                var Q = s % 10;
                0 == Q && Pt(n, 1) && "" !== o ? o = e[Q] + o : 1 < Q || 1 == Q && 0 === i || 1 == Q && 1 === i && Pt(n, 2) || 1 == Q && 1 === i && Pt(n, 4) && 100 < A || 1 == Q && 1 < i && Pt(n, 8) ? o = e[Q] + (0 < i ? t[i - 1] : "") + o : 1 == Q && 0 < i && (o = t[i - 1] + o), s = Math.floor(s / 10)
            }
            return (A < 0 ? r : "") + o
        }
        var gn, wn = {
                integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
                values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
            },
            Un = {
                integers: [9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                values: ["Ք", "Փ", "Ւ", "Ց", "Ր", "Տ", "Վ", "Ս", "Ռ", "Ջ", "Պ", "Չ", "Ո", "Շ", "Ն", "Յ", "Մ", "Ճ", "Ղ", "Ձ", "Հ", "Կ", "Ծ", "Խ", "Լ", "Ի", "Ժ", "Թ", "Ը", "Է", "Զ", "Ե", "Դ", "Գ", "Բ", "Ա"]
            },
            ln = {
                integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                values: ["י׳", "ט׳", "ח׳", "ז׳", "ו׳", "ה׳", "ד׳", "ג׳", "ב׳", "א׳", "ת", "ש", "ר", "ק", "צ", "פ", "ע", "ס", "נ", "מ", "ל", "כ", "יט", "יח", "יז", "טז", "טו", "י", "ט", "ח", "ז", "ו", "ה", "ד", "ג", "ב", "א"]
            },
            Cn = {
                integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                values: ["ჵ", "ჰ", "ჯ", "ჴ", "ხ", "ჭ", "წ", "ძ", "ც", "ჩ", "შ", "ყ", "ღ", "ქ", "ფ", "ჳ", "ტ", "ს", "რ", "ჟ", "პ", "ო", "ჲ", "ნ", "მ", "ლ", "კ", "ი", "თ", "ჱ", "ზ", "ვ", "ე", "დ", "გ", "ბ", "ა"]
            },
            un = "마이너스",
            Fn = function (A, e, t) {
                var r = t ? ". " : "",
                    B = t ? "、" : "",
                    n = t ? ", " : "",
                    s = t ? " " : "";
                switch (e) {
                    case 0:
                        return "•" + s;
                    case 1:
                        return "◦" + s;
                    case 2:
                        return "◾" + s;
                    case 5:
                        var o = Qn(A, 48, 57, !0, r);
                        return o.length < 4 ? "0" + o : o;
                    case 4:
                        return cn(A, "〇一二三四五六七八九", B);
                    case 6:
                        return sn(A, 1, 3999, wn, 3, r).toLowerCase();
                    case 7:
                        return sn(A, 1, 3999, wn, 3, r);
                    case 8:
                        return Qn(A, 945, 969, !1, r);
                    case 9:
                        return Qn(A, 97, 122, !1, r);
                    case 10:
                        return Qn(A, 65, 90, !1, r);
                    case 11:
                        return Qn(A, 1632, 1641, !0, r);
                    case 12:
                    case 49:
                        return sn(A, 1, 9999, Un, 3, r);
                    case 35:
                        return sn(A, 1, 9999, Un, 3, r).toLowerCase();
                    case 13:
                        return Qn(A, 2534, 2543, !0, r);
                    case 14:
                    case 30:
                        return Qn(A, 6112, 6121, !0, r);
                    case 15:
                        return cn(A, "子丑寅卯辰巳午未申酉戌亥", B);
                    case 16:
                        return cn(A, "甲乙丙丁戊己庚辛壬癸", B);
                    case 17:
                    case 48:
                        return an(A, "零一二三四五六七八九", "十百千萬", "負", B, 14);
                    case 47:
                        return an(A, "零壹貳參肆伍陸柒捌玖", "拾佰仟萬", "負", B, 15);
                    case 42:
                        return an(A, "零一二三四五六七八九", "十百千萬", "负", B, 14);
                    case 41:
                        return an(A, "零壹贰叁肆伍陆柒捌玖", "拾佰仟萬", "负", B, 15);
                    case 26:
                        return an(A, "〇一二三四五六七八九", "十百千万", "マイナス", B, 0);
                    case 25:
                        return an(A, "零壱弐参四伍六七八九", "拾百千万", "マイナス", B, 7);
                    case 31:
                        return an(A, "영일이삼사오육칠팔구", "십백천만", un, n, 7);
                    case 33:
                        return an(A, "零一二三四五六七八九", "十百千萬", un, n, 0);
                    case 32:
                        return an(A, "零壹貳參四五六七八九", "拾百千", un, n, 7);
                    case 18:
                        return Qn(A, 2406, 2415, !0, r);
                    case 20:
                        return sn(A, 1, 19999, Cn, 3, r);
                    case 21:
                        return Qn(A, 2790, 2799, !0, r);
                    case 22:
                        return Qn(A, 2662, 2671, !0, r);
                    case 22:
                        return sn(A, 1, 10999, ln, 3, r);
                    case 23:
                        return cn(A, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
                    case 24:
                        return cn(A, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
                    case 27:
                        return Qn(A, 3302, 3311, !0, r);
                    case 28:
                        return cn(A, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", B);
                    case 29:
                        return cn(A, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", B);
                    case 34:
                        return Qn(A, 3792, 3801, !0, r);
                    case 37:
                        return Qn(A, 6160, 6169, !0, r);
                    case 38:
                        return Qn(A, 4160, 4169, !0, r);
                    case 39:
                        return Qn(A, 2918, 2927, !0, r);
                    case 40:
                        return Qn(A, 1776, 1785, !0, r);
                    case 43:
                        return Qn(A, 3046, 3055, !0, r);
                    case 44:
                        return Qn(A, 3174, 3183, !0, r);
                    case 45:
                        return Qn(A, 3664, 3673, !0, r);
                    case 46:
                        return Qn(A, 3872, 3881, !0, r);
                    default:
                        return Qn(A, 48, 57, !0, r)
                }
            },
            hn = "data-html2canvas-ignore",
            dn = (fn.prototype.toIFrame = function (A, r) {
                var e = this,
                    B = pn(A, r);
                if (!B.contentWindow) return Promise.reject("Unable to find iframe window");
                var t = A.defaultView.pageXOffset,
                    n = A.defaultView.pageYOffset,
                    s = B.contentWindow,
                    o = s.document,
                    A = In(B).then(function () {
                        return a(e, void 0, void 0, function () {
                            var e, t;
                            return H(this, function (A) {
                                switch (A.label) {
                                    case 0:
                                        return this.scrolledElements.forEach(bn), s && (s.scrollTo(r.left, r.top), !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) || s.scrollY === r.top && s.scrollX === r.left || (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(s.scrollX - r.left, s.scrollY - r.top, 0, 0))), e = this.options.onclone, void 0 === (t = this.clonedReferenceElement) ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : o.fonts && o.fonts.ready ? [4, o.fonts.ready] : [3, 2];
                                    case 1:
                                        A.sent(), A.label = 2;
                                    case 2:
                                        return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, En(o)] : [3, 4];
                                    case 3:
                                        A.sent(), A.label = 4;
                                    case 4:
                                        return "function" == typeof e ? [2, Promise.resolve().then(function () {
                                            return e(o, t)
                                        }).then(function () {
                                            return B
                                        })] : [2, B]
                                }
                            })
                        })
                    });
                return o.open(), o.write(mn(document.doctype) + "<html></html>"), Ln(this.referenceElement.ownerDocument, t, n), o.replaceChild(o.adoptNode(this.documentElement), o.documentElement), o.close(), A
            }, fn.prototype.createElementClone = function (A) {
                if (Cr(A, 2), zB(A)) return this.createCanvasClone(A);
                if (MB(A)) return this.createVideoClone(A);
                if (SB(A)) return this.createStyleClone(A);
                var e = A.cloneNode(!1);
                return $B(e) && ($B(A) && A.currentSrc && A.currentSrc !== A.src && (e.src = A.currentSrc, e.srcset = ""), "lazy" === e.loading && (e.loading = "eager")), TB(e) ? this.createCustomElementClone(e) : e
            }, fn.prototype.createCustomElementClone = function (A) {
                var e = document.createElement("html2canvascustomelement");
                return Kn(A.style, e), e
            }, fn.prototype.createStyleClone = function (A) {
                try {
                    var e = A.sheet;
                    if (e && e.cssRules) {
                        var t = [].slice.call(e.cssRules, 0).reduce(function (A, e) {
                                return e && "string" == typeof e.cssText ? A + e.cssText : A
                            }, ""),
                            r = A.cloneNode(!1);
                        return r.textContent = t, r
                    }
                } catch (A) {
                    if (this.context.logger.error("Unable to access cssRules property", A), "SecurityError" !== A.name) throw A
                }
                return A.cloneNode(!1)
            }, fn.prototype.createCanvasClone = function (e) {
                var A;
                if (this.options.inlineImages && e.ownerDocument) {
                    var t = e.ownerDocument.createElement("img");
                    try {
                        return t.src = e.toDataURL(), t
                    } catch (A) {
                        this.context.logger.info("Unable to inline canvas contents, canvas is tainted", e)
                    }
                }
                t = e.cloneNode(!1);
                try {
                    t.width = e.width, t.height = e.height;
                    var r, B, n = e.getContext("2d"),
                        s = t.getContext("2d");
                    return s && (!this.options.allowTaint && n ? s.putImageData(n.getImageData(0, 0, e.width, e.height), 0, 0) : (!(r = null !== (A = e.getContext("webgl2")) && void 0 !== A ? A : e.getContext("webgl")) || !1 === (null == (B = r.getContextAttributes()) ? void 0 : B.preserveDrawingBuffer) && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", e), s.drawImage(e, 0, 0))), t
                } catch (A) {
                    this.context.logger.info("Unable to clone canvas as it is tainted", e)
                }
                return t
            }, fn.prototype.createVideoClone = function (e) {
                var A = e.ownerDocument.createElement("canvas");
                A.width = e.offsetWidth, A.height = e.offsetHeight;
                var t = A.getContext("2d");
                try {
                    return t && (t.drawImage(e, 0, 0, A.width, A.height), this.options.allowTaint || t.getImageData(0, 0, A.width, A.height)), A
                } catch (A) {
                    this.context.logger.info("Unable to clone video as it is tainted", e)
                }
                A = e.ownerDocument.createElement("canvas");
                return A.width = e.offsetWidth, A.height = e.offsetHeight, A
            }, fn.prototype.appendChildNode = function (A, e, t) {
                XB(e) && ("SCRIPT" === e.tagName || e.hasAttribute(hn) || "function" == typeof this.options.ignoreElements && this.options.ignoreElements(e)) || this.options.copyStyles && XB(e) && SB(e) || A.appendChild(this.cloneNode(e, t))
            }, fn.prototype.cloneChildNodes = function (A, e, t) {
                for (var r, B = this, n = (A.shadowRoot || A).firstChild; n; n = n.nextSibling) XB(n) && rn(n) && "function" == typeof n.assignedNodes ? (r = n.assignedNodes()).length && r.forEach(function (A) {
                    return B.appendChildNode(e, A, t)
                }) : this.appendChildNode(e, n, t)
            }, fn.prototype.cloneNode = function (A, e) {
                if (PB(A)) return document.createTextNode(A.data);
                if (!A.ownerDocument) return A.cloneNode(!1);
                var t = A.ownerDocument.defaultView;
                if (t && XB(A) && (JB(A) || YB(A))) {
                    var r = this.createElementClone(A);
                    r.style.transitionProperty = "none";
                    var B = t.getComputedStyle(A),
                        n = t.getComputedStyle(A, ":before"),
                        s = t.getComputedStyle(A, ":after");
                    this.referenceElement === A && JB(r) && (this.clonedReferenceElement = r), jB(r) && Mn(r);
                    t = this.counters.parse(new Ur(this.context, B)), n = this.resolvePseudoContent(A, r, n, gn.BEFORE);
                    TB(A) && (e = !0), MB(A) || this.cloneChildNodes(A, r, e), n && r.insertBefore(n, r.firstChild);
                    s = this.resolvePseudoContent(A, r, s, gn.AFTER);
                    return s && r.appendChild(s), this.counters.pop(t), (B && (this.options.copyStyles || YB(A)) && !An(A) || e) && Kn(B, r), 0 === A.scrollTop && 0 === A.scrollLeft || this.scrolledElements.push([r, A.scrollLeft, A.scrollTop]), (en(A) || tn(A)) && (en(r) || tn(r)) && (r.value = A.value), r
                }
                return A.cloneNode(!1)
            }, fn.prototype.resolvePseudoContent = function (o, A, e, t) {
                var i = this;
                if (e) {
                    var r = e.content,
                        Q = A.ownerDocument;
                    if (Q && r && "none" !== r && "-moz-alt-content" !== r && "none" !== e.display) {
                        this.counters.parse(new Ur(this.context, e));
                        var c = new wr(this.context, e),
                            a = Q.createElement("html2canvaspseudoelement");
                        Kn(e, a), c.content.forEach(function (A) {
                            if (0 === A.type) a.appendChild(Q.createTextNode(A.value));
                            else if (22 === A.type) {
                                var e = Q.createElement("img");
                                e.src = A.value, e.style.opacity = "1", a.appendChild(e)
                            } else if (18 === A.type) {
                                var t, r, B, n, s;
                                "attr" === A.name ? (e = A.values.filter(_A)).length && a.appendChild(Q.createTextNode(o.getAttribute(e[0].value) || "")) : "counter" === A.name ? (B = (r = A.values.filter($A))[0], r = r[1], B && _A(B) && (t = i.counters.getCounterValue(B.value), s = r && _A(r) ? pt.parse(i.context, r.value) : 3, a.appendChild(Q.createTextNode(Fn(t, s, !1))))) : "counters" === A.name && (B = (t = A.values.filter($A))[0], s = t[1], r = t[2], B && _A(B) && (B = i.counters.getCounterValues(B.value), n = r && _A(r) ? pt.parse(i.context, r.value) : 3, s = s && 0 === s.type ? s.value : "", s = B.map(function (A) {
                                    return Fn(A, n, !1)
                                }).join(s), a.appendChild(Q.createTextNode(s))))
                            } else if (20 === A.type) switch (A.value) {
                                case "open-quote":
                                    a.appendChild(Q.createTextNode(Xt(c.quotes, i.quoteDepth++, !0)));
                                    break;
                                case "close-quote":
                                    a.appendChild(Q.createTextNode(Xt(c.quotes, --i.quoteDepth, !1)));
                                    break;
                                default:
                                    a.appendChild(Q.createTextNode(A.value))
                            }
                        }), a.className = Dn + " " + vn;
                        t = t === gn.BEFORE ? " " + Dn : " " + vn;
                        return YB(A) ? A.className.baseValue += t : A.className += t, a
                    }
                }
            }, fn.destroy = function (A) {
                return !!A.parentNode && (A.parentNode.removeChild(A), !0)
            }, fn);

        function fn(A, e, t) {
            if (this.context = A, this.options = t, this.scrolledElements = [], this.referenceElement = e, this.counters = new Bn, this.quoteDepth = 0, !e.ownerDocument) throw new Error("Cloned element does not have an owner document");
            this.documentElement = this.cloneNode(e.ownerDocument.documentElement, !1)
        }(he = gn = gn || {})[he.BEFORE = 0] = "BEFORE", he[he.AFTER = 1] = "AFTER";

        function Hn(e) {
            return new Promise(function (A) {
                !e.complete && e.src ? (e.onload = A, e.onerror = A) : A()
            })
        }
        var pn = function (A, e) {
                var t = A.createElement("iframe");
                return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = e.width.toString(), t.height = e.height.toString(), t.scrolling = "no", t.setAttribute(hn, "true"), A.body.appendChild(t), t
            },
            En = function (A) {
                return Promise.all([].slice.call(A.images, 0).map(Hn))
            },
            In = function (B) {
                return new Promise(function (e, A) {
                    var t = B.contentWindow;
                    if (!t) return A("No window assigned for iframe");
                    var r = t.document;
                    t.onload = B.onload = function () {
                        t.onload = B.onload = null;
                        var A = setInterval(function () {
                            0 < r.body.childNodes.length && "complete" === r.readyState && (clearInterval(A), e(B))
                        }, 50)
                    }
                })
            },
            yn = ["all", "d", "content"],
            Kn = function (A, e) {
                for (var t = A.length - 1; 0 <= t; t--) {
                    var r = A.item(t); - 1 === yn.indexOf(r) && e.style.setProperty(r, A.getPropertyValue(r))
                }
                return e
            },
            mn = function (A) {
                var e = "";
                return A && (e += "<!DOCTYPE ", A.name && (e += A.name), A.internalSubset && (e += A.internalSubset), A.publicId && (e += '"' + A.publicId + '"'), A.systemId && (e += '"' + A.systemId + '"'), e += ">"), e
            },
            Ln = function (A, e, t) {
                A && A.defaultView && (e !== A.defaultView.pageXOffset || t !== A.defaultView.pageYOffset) && A.defaultView.scrollTo(e, t)
            },
            bn = function (A) {
                var e = A[0],
                    t = A[1],
                    A = A[2];
                e.scrollLeft = t, e.scrollTop = A
            },
            Dn = "___html2canvas___pseudoelement_before",
            vn = "___html2canvas___pseudoelement_after",
            xn = '{\n    content: "" !important;\n    display: none !important;\n}',
            Mn = function (A) {
                Sn(A, "." + Dn + ":before" + xn + "\n         ." + vn + ":after" + xn)
            },
            Sn = function (A, e) {
                var t = A.ownerDocument;
                t && ((t = t.createElement("style")).textContent = e, A.appendChild(t))
            },
            Tn = (Gn.getOrigin = function (A) {
                var e = Gn._link;
                return e ? (e.href = A, e.href = e.href, e.protocol + e.hostname + e.port) : "about:blank"
            }, Gn.isSameOrigin = function (A) {
                return Gn.getOrigin(A) === Gn._origin
            }, Gn.setContext = function (A) {
                Gn._link = A.document.createElement("a"), Gn._origin = Gn.getOrigin(A.location.href)
            }, Gn._origin = "about:blank", Gn);

        function Gn() {}
        var On = (Vn.prototype.addImage = function (A) {
            var e = Promise.resolve();
            return this.has(A) || (Yn(A) || Pn(A)) && (this._cache[A] = this.loadImage(A)).catch(function () {}), e
        }, Vn.prototype.match = function (A) {
            return this._cache[A]
        }, Vn.prototype.loadImage = function (s) {
            return a(this, void 0, void 0, function () {
                var e, r, t, B, n = this;
                return H(this, function (A) {
                    switch (A.label) {
                        case 0:
                            return (e = Tn.isSameOrigin(s), r = !Xn(s) && !0 === this._options.useCORS && Xr.SUPPORT_CORS_IMAGES && !e, t = !Xn(s) && !e && !Yn(s) && "string" == typeof this._options.proxy && Xr.SUPPORT_CORS_XHR && !r, e || !1 !== this._options.allowTaint || Xn(s) || Yn(s) || t || r) ? (B = s, t ? [4, this.proxy(B)] : [3, 2]) : [2];
                        case 1:
                            B = A.sent(), A.label = 2;
                        case 2:
                            return this.context.logger.debug("Added image " + s.substring(0, 256)), [4, new Promise(function (A, e) {
                                var t = new Image;
                                t.onload = function () {
                                    return A(t)
                                }, t.onerror = e, (Jn(B) || r) && (t.crossOrigin = "anonymous"), t.src = B, !0 === t.complete && setTimeout(function () {
                                    return A(t)
                                }, 500), 0 < n._options.imageTimeout && setTimeout(function () {
                                    return e("Timed out (" + n._options.imageTimeout + "ms) loading image")
                                }, n._options.imageTimeout)
                            })];
                        case 3:
                            return [2, A.sent()]
                    }
                })
            })
        }, Vn.prototype.has = function (A) {
            return void 0 !== this._cache[A]
        }, Vn.prototype.keys = function () {
            return Promise.resolve(Object.keys(this._cache))
        }, Vn.prototype.proxy = function (s) {
            var o = this,
                i = this._options.proxy;
            if (!i) throw new Error("No proxy defined");
            var Q = s.substring(0, 256);
            return new Promise(function (e, t) {
                var r = Xr.SUPPORT_RESPONSE_TYPE ? "blob" : "text",
                    B = new XMLHttpRequest;
                B.onload = function () {
                    var A;
                    200 === B.status ? "text" == r ? e(B.response) : ((A = new FileReader).addEventListener("load", function () {
                        return e(A.result)
                    }, !1), A.addEventListener("error", function (A) {
                        return t(A)
                    }, !1), A.readAsDataURL(B.response)) : t("Failed to proxy resource " + Q + " with status code " + B.status)
                }, B.onerror = t;
                var A, n = -1 < i.indexOf("?") ? "&" : "?";
                B.open("GET", i + n + "url=" + encodeURIComponent(s) + "&responseType=" + r), "text" != r && B instanceof XMLHttpRequest && (B.responseType = r), o._options.imageTimeout && (A = o._options.imageTimeout, B.timeout = A, B.ontimeout = function () {
                    return t("Timed out (" + A + "ms) proxying " + Q)
                }), B.send()
            })
        }, Vn);

        function Vn(A, e) {
            this.context = A, this._options = e, this._cache = {}
        }
        var kn = /^data:image\/svg\+xml/i,
            Rn = /^data:image\/.*;base64,/i,
            Nn = /^data:image\/.*/i,
            Pn = function (A) {
                return Xr.SUPPORT_SVG_DRAWING || !Wn(A)
            },
            Xn = function (A) {
                return Nn.test(A)
            },
            Jn = function (A) {
                return Rn.test(A)
            },
            Yn = function (A) {
                return "blob" === A.substr(0, 4)
            },
            Wn = function (A) {
                return "svg" === A.substr(-3).toLowerCase() || kn.test(A)
            },
            Zn = (_n.prototype.add = function (A, e) {
                return new _n(this.x + A, this.y + e)
            }, _n);

        function _n(A, e) {
            this.type = 0, this.x = A, this.y = e
        }

        function qn(A, e, t) {
            return new Zn(A.x + (e.x - A.x) * t, A.y + (e.y - A.y) * t)
        }
        var jn = (zn.prototype.subdivide = function (A, e) {
            var t = qn(this.start, this.startControl, A),
                r = qn(this.startControl, this.endControl, A),
                B = qn(this.endControl, this.end, A),
                n = qn(t, r, A),
                r = qn(r, B, A),
                A = qn(n, r, A);
            return e ? new zn(this.start, t, n, A) : new zn(A, r, B, this.end)
        }, zn.prototype.add = function (A, e) {
            return new zn(this.start.add(A, e), this.startControl.add(A, e), this.endControl.add(A, e), this.end.add(A, e))
        }, zn.prototype.reverse = function () {
            return new zn(this.end, this.endControl, this.startControl, this.start)
        }, zn);

        function zn(A, e, t, r) {
            this.type = 1, this.start = A, this.startControl = e, this.endControl = t, this.end = r
        }

        function $n(A) {
            return 1 === A.type
        }
        var As, es = function (A) {
            var e = A.styles,
                t = A.bounds,
                r = (C = Be(e.borderTopLeftRadius, t.width, t.height))[0],
                B = C[1],
                n = (u = Be(e.borderTopRightRadius, t.width, t.height))[0],
                s = u[1],
                o = (F = Be(e.borderBottomRightRadius, t.width, t.height))[0],
                i = F[1],
                Q = (h = Be(e.borderBottomLeftRadius, t.width, t.height))[0],
                c = h[1];
            (d = []).push((r + n) / t.width), d.push((Q + o) / t.width), d.push((B + c) / t.height), d.push((s + i) / t.height), 1 < (f = Math.max.apply(Math, d)) && (r /= f, B /= f, n /= f, s /= f, o /= f, i /= f, Q /= f, c /= f);
            var a = t.width - n,
                g = t.height - i,
                w = t.width - o,
                U = t.height - c,
                l = e.borderTopWidth,
                C = e.borderRightWidth,
                u = e.borderBottomWidth,
                F = e.borderLeftWidth,
                h = Ue(e.paddingTop, A.bounds.width),
                d = Ue(e.paddingRight, A.bounds.width),
                f = Ue(e.paddingBottom, A.bounds.width),
                A = Ue(e.paddingLeft, A.bounds.width);
            this.topLeftBorderDoubleOuterBox = 0 < r || 0 < B ? ss(t.left + F / 3, t.top + l / 3, r - F / 3, B - l / 3, As.TOP_LEFT) : new Zn(t.left + F / 3, t.top + l / 3), this.topRightBorderDoubleOuterBox = 0 < r || 0 < B ? ss(t.left + a, t.top + l / 3, n - C / 3, s - l / 3, As.TOP_RIGHT) : new Zn(t.left + t.width - C / 3, t.top + l / 3), this.bottomRightBorderDoubleOuterBox = 0 < o || 0 < i ? ss(t.left + w, t.top + g, o - C / 3, i - u / 3, As.BOTTOM_RIGHT) : new Zn(t.left + t.width - C / 3, t.top + t.height - u / 3), this.bottomLeftBorderDoubleOuterBox = 0 < Q || 0 < c ? ss(t.left + F / 3, t.top + U, Q - F / 3, c - u / 3, As.BOTTOM_LEFT) : new Zn(t.left + F / 3, t.top + t.height - u / 3), this.topLeftBorderDoubleInnerBox = 0 < r || 0 < B ? ss(t.left + 2 * F / 3, t.top + 2 * l / 3, r - 2 * F / 3, B - 2 * l / 3, As.TOP_LEFT) : new Zn(t.left + 2 * F / 3, t.top + 2 * l / 3), this.topRightBorderDoubleInnerBox = 0 < r || 0 < B ? ss(t.left + a, t.top + 2 * l / 3, n - 2 * C / 3, s - 2 * l / 3, As.TOP_RIGHT) : new Zn(t.left + t.width - 2 * C / 3, t.top + 2 * l / 3), this.bottomRightBorderDoubleInnerBox = 0 < o || 0 < i ? ss(t.left + w, t.top + g, o - 2 * C / 3, i - 2 * u / 3, As.BOTTOM_RIGHT) : new Zn(t.left + t.width - 2 * C / 3, t.top + t.height - 2 * u / 3), this.bottomLeftBorderDoubleInnerBox = 0 < Q || 0 < c ? ss(t.left + 2 * F / 3, t.top + U, Q - 2 * F / 3, c - 2 * u / 3, As.BOTTOM_LEFT) : new Zn(t.left + 2 * F / 3, t.top + t.height - 2 * u / 3), this.topLeftBorderStroke = 0 < r || 0 < B ? ss(t.left + F / 2, t.top + l / 2, r - F / 2, B - l / 2, As.TOP_LEFT) : new Zn(t.left + F / 2, t.top + l / 2), this.topRightBorderStroke = 0 < r || 0 < B ? ss(t.left + a, t.top + l / 2, n - C / 2, s - l / 2, As.TOP_RIGHT) : new Zn(t.left + t.width - C / 2, t.top + l / 2), this.bottomRightBorderStroke = 0 < o || 0 < i ? ss(t.left + w, t.top + g, o - C / 2, i - u / 2, As.BOTTOM_RIGHT) : new Zn(t.left + t.width - C / 2, t.top + t.height - u / 2), this.bottomLeftBorderStroke = 0 < Q || 0 < c ? ss(t.left + F / 2, t.top + U, Q - F / 2, c - u / 2, As.BOTTOM_LEFT) : new Zn(t.left + F / 2, t.top + t.height - u / 2), this.topLeftBorderBox = 0 < r || 0 < B ? ss(t.left, t.top, r, B, As.TOP_LEFT) : new Zn(t.left, t.top), this.topRightBorderBox = 0 < n || 0 < s ? ss(t.left + a, t.top, n, s, As.TOP_RIGHT) : new Zn(t.left + t.width, t.top), this.bottomRightBorderBox = 0 < o || 0 < i ? ss(t.left + w, t.top + g, o, i, As.BOTTOM_RIGHT) : new Zn(t.left + t.width, t.top + t.height), this.bottomLeftBorderBox = 0 < Q || 0 < c ? ss(t.left, t.top + U, Q, c, As.BOTTOM_LEFT) : new Zn(t.left, t.top + t.height), this.topLeftPaddingBox = 0 < r || 0 < B ? ss(t.left + F, t.top + l, Math.max(0, r - F), Math.max(0, B - l), As.TOP_LEFT) : new Zn(t.left + F, t.top + l), this.topRightPaddingBox = 0 < n || 0 < s ? ss(t.left + Math.min(a, t.width - C), t.top + l, a > t.width + C ? 0 : Math.max(0, n - C), Math.max(0, s - l), As.TOP_RIGHT) : new Zn(t.left + t.width - C, t.top + l), this.bottomRightPaddingBox = 0 < o || 0 < i ? ss(t.left + Math.min(w, t.width - F), t.top + Math.min(g, t.height - u), Math.max(0, o - C), Math.max(0, i - u), As.BOTTOM_RIGHT) : new Zn(t.left + t.width - C, t.top + t.height - u), this.bottomLeftPaddingBox = 0 < Q || 0 < c ? ss(t.left + F, t.top + Math.min(U, t.height - u), Math.max(0, Q - F), Math.max(0, c - u), As.BOTTOM_LEFT) : new Zn(t.left + F, t.top + t.height - u), this.topLeftContentBox = 0 < r || 0 < B ? ss(t.left + F + A, t.top + l + h, Math.max(0, r - (F + A)), Math.max(0, B - (l + h)), As.TOP_LEFT) : new Zn(t.left + F + A, t.top + l + h), this.topRightContentBox = 0 < n || 0 < s ? ss(t.left + Math.min(a, t.width + F + A), t.top + l + h, a > t.width + F + A ? 0 : n - F + A, s - (l + h), As.TOP_RIGHT) : new Zn(t.left + t.width - (C + d), t.top + l + h), this.bottomRightContentBox = 0 < o || 0 < i ? ss(t.left + Math.min(w, t.width - (F + A)), t.top + Math.min(g, t.height + l + h), Math.max(0, o - (C + d)), i - (u + f), As.BOTTOM_RIGHT) : new Zn(t.left + t.width - (C + d), t.top + t.height - (u + f)), this.bottomLeftContentBox = 0 < Q || 0 < c ? ss(t.left + F + A, t.top + U, Math.max(0, Q - (F + A)), c - (u + f), As.BOTTOM_LEFT) : new Zn(t.left + F + A, t.top + t.height - (u + f))
        };
        (he = As = As || {})[he.TOP_LEFT = 0] = "TOP_LEFT", he[he.TOP_RIGHT = 1] = "TOP_RIGHT", he[he.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", he[he.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";

        function ts(A) {
            return [A.topLeftBorderBox, A.topRightBorderBox, A.bottomRightBorderBox, A.bottomLeftBorderBox]
        }

        function rs(A) {
            return [A.topLeftPaddingBox, A.topRightPaddingBox, A.bottomRightPaddingBox, A.bottomLeftPaddingBox]
        }

        function Bs(A) {
            return 1 === A.type
        }

        function ns(A, t) {
            return A.length === t.length && A.some(function (A, e) {
                return A === t[e]
            })
        }
        var ss = function (A, e, t, r, B) {
                var n = (Math.sqrt(2) - 1) / 3 * 4,
                    s = t * n,
                    o = r * n,
                    i = A + t,
                    Q = e + r;
                switch (B) {
                    case As.TOP_LEFT:
                        return new jn(new Zn(A, Q), new Zn(A, Q - o), new Zn(i - s, e), new Zn(i, e));
                    case As.TOP_RIGHT:
                        return new jn(new Zn(A, e), new Zn(A + s, e), new Zn(i, Q - o), new Zn(i, Q));
                    case As.BOTTOM_RIGHT:
                        return new jn(new Zn(i, e), new Zn(i, e + o), new Zn(A + s, Q), new Zn(A, Q));
                    default:
                        As.BOTTOM_LEFT;
                        return new jn(new Zn(i, Q), new Zn(i - s, Q), new Zn(A, e + o), new Zn(A, e))
                }
            },
            os = function (A, e, t) {
                this.offsetX = A, this.offsetY = e, this.matrix = t, this.type = 0, this.target = 6
            },
            is = function (A, e) {
                this.path = A, this.target = e, this.type = 1
            },
            Qs = function (A) {
                this.opacity = A, this.type = 2, this.target = 6
            },
            cs = function (A) {
                this.element = A, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = []
            },
            as = (gs.prototype.getEffects = function (e) {
                for (var A = -1 === [2, 3].indexOf(this.container.styles.position), t = this.parent, r = this.effects.slice(0); t;) {
                    var B, n, s = t.effects.filter(function (A) {
                        return !Bs(A)
                    });
                    A || 0 !== t.container.styles.position || !t.parent ? (r.unshift.apply(r, s), A = -1 === [2, 3].indexOf(t.container.styles.position), 0 !== t.container.styles.overflowX && (B = ts(t.curves), n = rs(t.curves), ns(B, n) || r.unshift(new is(n, 6)))) : r.unshift.apply(r, s), t = t.parent
                }
                return r.filter(function (A) {
                    return Pt(A.target, e)
                })
            }, gs);

        function gs(A, e) {
            var t, r;
            this.container = A, this.parent = e, this.effects = [], this.curves = new es(this.container), this.container.styles.opacity < 1 && this.effects.push(new Qs(this.container.styles.opacity)), null !== this.container.styles.transform && (e = this.container.bounds.left + this.container.styles.transformOrigin[0].number, t = this.container.bounds.top + this.container.styles.transformOrigin[1].number, r = this.container.styles.transform, this.effects.push(new os(e, t, r))), 0 !== this.container.styles.overflowX && (t = ts(this.curves), r = rs(this.curves), ns(t, r) ? this.effects.push(new is(t, 6)) : (this.effects.push(new is(t, 2)), this.effects.push(new is(r, 4))))
        }

        function ws(A, e) {
            switch (e) {
                case 0:
                    return Hs(A.topLeftBorderBox, A.topLeftPaddingBox, A.topRightBorderBox, A.topRightPaddingBox);
                case 1:
                    return Hs(A.topRightBorderBox, A.topRightPaddingBox, A.bottomRightBorderBox, A.bottomRightPaddingBox);
                case 2:
                    return Hs(A.bottomRightBorderBox, A.bottomRightPaddingBox, A.bottomLeftBorderBox, A.bottomLeftPaddingBox);
                default:
                    return Hs(A.bottomLeftBorderBox, A.bottomLeftPaddingBox, A.topLeftBorderBox, A.topLeftPaddingBox)
            }
        }

        function Us(A) {
            var e = A.bounds,
                A = A.styles;
            return e.add(A.borderLeftWidth, A.borderTopWidth, -(A.borderRightWidth + A.borderLeftWidth), -(A.borderTopWidth + A.borderBottomWidth))
        }

        function ls(A) {
            var e = A.styles,
                t = A.bounds,
                r = Ue(e.paddingLeft, t.width),
                B = Ue(e.paddingRight, t.width),
                n = Ue(e.paddingTop, t.width),
                A = Ue(e.paddingBottom, t.width);
            return t.add(r + e.borderLeftWidth, n + e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth + r + B), -(e.borderTopWidth + e.borderBottomWidth + n + A))
        }

        function Cs(A, e, t) {
            var r = (B = Es(A.styles.backgroundOrigin, e), n = A, 0 === B ? n.bounds : (2 === B ? ls : Us)(n)),
                B = (s = Es(A.styles.backgroundClip, e), o = A, 0 === s ? o.bounds : (2 === s ? ls : Us)(o)),
                n = ps(Es(A.styles.backgroundSize, e), t, r),
                s = n[0],
                o = n[1],
                t = Be(Es(A.styles.backgroundPosition, e), r.width - s, r.height - o);
            return [Is(Es(A.styles.backgroundRepeat, e), t, n, r, B), Math.round(r.left + t[0]), Math.round(r.top + t[1]), s, o]
        }

        function us(A) {
            return _A(A) && A.value === Ve.AUTO
        }

        function Fs(A) {
            return "number" == typeof A
        }
        var hs = function (Q, c, a, g) {
                Q.container.elements.forEach(function (A) {
                    var e = Pt(A.flags, 4),
                        t = Pt(A.flags, 2),
                        r = new as(A, Q);
                    Pt(A.styles.display, 2048) && g.push(r);
                    var B, n, s, o, i = Pt(A.flags, 8) ? [] : g;
                    e || t ? (B = e || A.styles.isPositioned() ? a : c, t = new cs(r), A.styles.isPositioned() || A.styles.opacity < 1 || A.styles.isTransformed() ? (n = A.styles.zIndex.order) < 0 ? (s = 0, B.negativeZIndex.some(function (A, e) {
                        return n > A.element.container.styles.zIndex.order ? (s = e, !1) : 0 < s
                    }), B.negativeZIndex.splice(s, 0, t)) : 0 < n ? (o = 0, B.positiveZIndex.some(function (A, e) {
                        return n >= A.element.container.styles.zIndex.order ? (o = e + 1, !1) : 0 < o
                    }), B.positiveZIndex.splice(o, 0, t)) : B.zeroOrAutoZIndexOrTransformedOrOpacity.push(t) : (A.styles.isFloating() ? B.nonPositionedFloats : B.nonPositionedInlineLevel).push(t), hs(r, t, e ? t : a, i)) : ((A.styles.isInlineLevel() ? c.inlineLevel : c.nonInlineLevel).push(r), hs(r, c, a, i)), Pt(A.flags, 8) && ds(A, i)
                })
            },
            ds = function (A, e) {
                for (var t = A instanceof UB ? A.start : 1, r = A instanceof UB && A.reversed, B = 0; B < e.length; B++) {
                    var n = e[B];
                    n.container instanceof aB && "number" == typeof n.container.value && 0 !== n.container.value && (t = n.container.value), n.listValue = Fn(t, n.container.styles.listStyleType, !0), t += r ? -1 : 1
                }
            },
            fs = function (A, e) {
                var t = [];
                return $n(A) ? t.push(A.subdivide(.5, !1)) : t.push(A), $n(e) ? t.push(e.subdivide(.5, !0)) : t.push(e), t
            },
            Hs = function (A, e, t, r) {
                var B = [];
                return $n(A) ? B.push(A.subdivide(.5, !1)) : B.push(A), $n(t) ? B.push(t.subdivide(.5, !0)) : B.push(t), $n(r) ? B.push(r.subdivide(.5, !0).reverse()) : B.push(r), $n(e) ? B.push(e.subdivide(.5, !1).reverse()) : B.push(e), B
            },
            ps = function (A, e, t) {
                var r = e[0],
                    B = e[1],
                    n = e[2],
                    s = A[0],
                    o = A[1];
                if (!s) return [0, 0];
                if (te(s) && o && te(o)) return [Ue(s, t.width), Ue(o, t.height)];
                var i = Fs(n);
                if (_A(s) && (s.value === Ve.CONTAIN || s.value === Ve.COVER)) return Fs(n) ? t.width / t.height < n != (s.value === Ve.COVER) ? [t.width, t.width / n] : [t.height * n, t.height] : [t.width, t.height];
                var Q = Fs(r),
                    e = Fs(B),
                    A = Q || e;
                if (us(s) && (!o || us(o))) return Q && e ? [r, B] : i || A ? A && i ? [Q ? r : B * n, e ? B : r / n] : [Q ? r : t.width, e ? B : t.height] : [t.width, t.height];
                if (i) {
                    var c = 0,
                        a = 0;
                    return te(s) ? c = Ue(s, t.width) : te(o) && (a = Ue(o, t.height)), us(s) ? c = a * n : o && !us(o) || (a = c / n), [c, a]
                }
                c = null, a = null;
                if (te(s) ? c = Ue(s, t.width) : o && te(o) && (a = Ue(o, t.height)), null !== (c = null !== (a = null !== c && (!o || us(o)) ? Q && e ? c / r * B : t.height : a) && us(s) ? Q && e ? a / B * r : t.width : c) && null !== a) return [c, a];
                throw new Error("Unable to calculate background-size for element")
            },
            Es = function (A, e) {
                e = A[e];
                return void 0 === e ? A[0] : e
            },
            Is = function (A, e, t, r, B) {
                var n = e[0],
                    s = e[1],
                    o = t[0],
                    i = t[1];
                switch (A) {
                    case 2:
                        return [new Zn(Math.round(r.left), Math.round(r.top + s)), new Zn(Math.round(r.left + r.width), Math.round(r.top + s)), new Zn(Math.round(r.left + r.width), Math.round(i + r.top + s)), new Zn(Math.round(r.left), Math.round(i + r.top + s))];
                    case 3:
                        return [new Zn(Math.round(r.left + n), Math.round(r.top)), new Zn(Math.round(r.left + n + o), Math.round(r.top)), new Zn(Math.round(r.left + n + o), Math.round(r.height + r.top)), new Zn(Math.round(r.left + n), Math.round(r.height + r.top))];
                    case 1:
                        return [new Zn(Math.round(r.left + n), Math.round(r.top + s)), new Zn(Math.round(r.left + n + o), Math.round(r.top + s)), new Zn(Math.round(r.left + n + o), Math.round(r.top + s + i)), new Zn(Math.round(r.left + n), Math.round(r.top + s + i))];
                    default:
                        return [new Zn(Math.round(B.left), Math.round(B.top)), new Zn(Math.round(B.left + B.width), Math.round(B.top)), new Zn(Math.round(B.left + B.width), Math.round(B.height + B.top)), new Zn(Math.round(B.left), Math.round(B.height + B.top))]
                }
            },
            ys = "Hidden Text",
            Ks = (ms.prototype.parseMetrics = function (A, e) {
                var t = this._document.createElement("div"),
                    r = this._document.createElement("img"),
                    B = this._document.createElement("span"),
                    n = this._document.body;
                t.style.visibility = "hidden", t.style.fontFamily = A, t.style.fontSize = e, t.style.margin = "0", t.style.padding = "0", t.style.whiteSpace = "nowrap", n.appendChild(t), r.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", r.width = 1, r.height = 1, r.style.margin = "0", r.style.padding = "0", r.style.verticalAlign = "baseline", B.style.fontFamily = A, B.style.fontSize = e, B.style.margin = "0", B.style.padding = "0", B.appendChild(this._document.createTextNode(ys)), t.appendChild(B), t.appendChild(r);
                e = r.offsetTop - B.offsetTop + 2;
                t.removeChild(B), t.appendChild(this._document.createTextNode(ys)), t.style.lineHeight = "normal", r.style.verticalAlign = "super";
                r = r.offsetTop - t.offsetTop + 2;
                return n.removeChild(t), {
                    baseline: e,
                    middle: r
                }
            }, ms.prototype.getMetrics = function (A, e) {
                var t = A + " " + e;
                return void 0 === this._data[t] && (this._data[t] = this.parseMetrics(A, e)), this._data[t]
            }, ms);

        function ms(A) {
            this._data = {}, this._document = A
        }
        var Ls, he = function (A, e) {
                this.context = A, this.options = e
            },
            bs = (A(Ds, Ls = he), Ds.prototype.applyEffects = function (A) {
                for (var e = this; this._activeEffects.length;) this.popEffect();
                A.forEach(function (A) {
                    return e.applyEffect(A)
                })
            }, Ds.prototype.applyEffect = function (A) {
                this.ctx.save(), 2 === A.type && (this.ctx.globalAlpha = A.opacity), 0 === A.type && (this.ctx.translate(A.offsetX, A.offsetY), this.ctx.transform(A.matrix[0], A.matrix[1], A.matrix[2], A.matrix[3], A.matrix[4], A.matrix[5]), this.ctx.translate(-A.offsetX, -A.offsetY)), Bs(A) && (this.path(A.path), this.ctx.clip()), this._activeEffects.push(A)
            }, Ds.prototype.popEffect = function () {
                this._activeEffects.pop(), this.ctx.restore()
            }, Ds.prototype.renderStack = function (e) {
                return a(this, void 0, void 0, function () {
                    return H(this, function (A) {
                        switch (A.label) {
                            case 0:
                                return e.element.container.styles.isVisible() ? [4, this.renderStackContent(e)] : [3, 2];
                            case 1:
                                A.sent(), A.label = 2;
                            case 2:
                                return [2]
                        }
                    })
                })
            }, Ds.prototype.renderNode = function (e) {
                return a(this, void 0, void 0, function () {
                    return H(this, function (A) {
                        switch (A.label) {
                            case 0:
                                return Pt(e.container.flags, 16), e.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(e)] : [3, 3];
                            case 1:
                                return A.sent(), [4, this.renderNodeContent(e)];
                            case 2:
                                A.sent(), A.label = 3;
                            case 3:
                                return [2]
                        }
                    })
                })
            }, Ds.prototype.renderTextWithLetterSpacing = function (t, A, r) {
                var B = this;
                0 === A ? this.ctx.fillText(t.text, t.bounds.left, t.bounds.top + r) : Zr(t.text).reduce(function (A, e) {
                    return B.ctx.fillText(e, A, t.bounds.top + r), A + B.ctx.measureText(e).width
                }, t.bounds.left)
            }, Ds.prototype.createFontStyle = function (A) {
                var e = A.fontVariant.filter(function (A) {
                        return "normal" === A || "small-caps" === A
                    }).join(""),
                    t = Gs(A.fontFamily).join(", "),
                    r = WA(A.fontSize) ? "" + A.fontSize.number + A.fontSize.unit : A.fontSize.number + "px";
                return [
                    [A.fontStyle, e, A.fontWeight, r, t].join(" "), t, r
                ]
            }, Ds.prototype.renderTextNode = function (i, Q) {
                return a(this, void 0, void 0, function () {
                    var e, t, r, B, n, s, o = this;
                    return H(this, function (A) {
                        return r = this.createFontStyle(Q), e = r[0], t = r[1], r = r[2], this.ctx.font = e, this.ctx.direction = 1 === Q.direction ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", r = this.fontMetrics.getMetrics(t, r), B = r.baseline, n = r.middle, s = Q.paintOrder, i.textBounds.forEach(function (t) {
                            s.forEach(function (A) {
                                switch (A) {
                                    case 0:
                                        o.ctx.fillStyle = ie(Q.color), o.renderTextWithLetterSpacing(t, Q.letterSpacing, B);
                                        var e = Q.textShadow;
                                        e.length && t.text.trim().length && (e.slice(0).reverse().forEach(function (A) {
                                            o.ctx.shadowColor = ie(A.color), o.ctx.shadowOffsetX = A.offsetX.number * o.options.scale, o.ctx.shadowOffsetY = A.offsetY.number * o.options.scale, o.ctx.shadowBlur = A.blur.number, o.renderTextWithLetterSpacing(t, Q.letterSpacing, B)
                                        }), o.ctx.shadowColor = "", o.ctx.shadowOffsetX = 0, o.ctx.shadowOffsetY = 0, o.ctx.shadowBlur = 0), Q.textDecorationLine.length && (o.ctx.fillStyle = ie(Q.textDecorationColor || Q.color), Q.textDecorationLine.forEach(function (A) {
                                            switch (A) {
                                                case 1:
                                                    o.ctx.fillRect(t.bounds.left, Math.round(t.bounds.top + B), t.bounds.width, 1);
                                                    break;
                                                case 2:
                                                    o.ctx.fillRect(t.bounds.left, Math.round(t.bounds.top), t.bounds.width, 1);
                                                    break;
                                                case 3:
                                                    o.ctx.fillRect(t.bounds.left, Math.ceil(t.bounds.top + n), t.bounds.width, 1)
                                            }
                                        }));
                                        break;
                                    case 1:
                                        Q.webkitTextStrokeWidth && t.text.trim().length && (o.ctx.strokeStyle = ie(Q.webkitTextStrokeColor), o.ctx.lineWidth = Q.webkitTextStrokeWidth, o.ctx.lineJoin = window.chrome ? "miter" : "round", o.ctx.strokeText(t.text, t.bounds.left, t.bounds.top + B)), o.ctx.strokeStyle = "", o.ctx.lineWidth = 0, o.ctx.lineJoin = "miter"
                                }
                            })
                        }), [2]
                    })
                })
            }, Ds.prototype.renderReplacedElement = function (A, e, t) {
                var r;
                t && 0 < A.intrinsicWidth && 0 < A.intrinsicHeight && (r = ls(A), e = rs(e), this.path(e), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(t, 0, 0, A.intrinsicWidth, A.intrinsicHeight, r.left, r.top, r.width, r.height), this.ctx.restore())
            }, Ds.prototype.renderNodeContent = function (w) {
                return a(this, void 0, void 0, function () {
                    var e, t, r, B, n, s, o, i, Q, c, a, g;
                    return H(this, function (A) {
                        switch (A.label) {
                            case 0:
                                this.applyEffects(w.getEffects(4)), e = w.container, t = w.curves, r = e.styles, B = 0, n = e.textNodes, A.label = 1;
                            case 1:
                                return B < n.length ? (s = n[B], [4, this.renderTextNode(s, r)]) : [3, 4];
                            case 2:
                                A.sent(), A.label = 3;
                            case 3:
                                return B++, [3, 1];
                            case 4:
                                if (!(e instanceof tB)) return [3, 8];
                                A.label = 5;
                            case 5:
                                return A.trys.push([5, 7, , 8]), [4, this.context.cache.match(e.src)];
                            case 6:
                                return Q = A.sent(), this.renderReplacedElement(e, t, Q), [3, 8];
                            case 7:
                                return A.sent(), this.context.logger.error("Error loading image " + e.src), [3, 8];
                            case 8:
                                if (e instanceof nB && this.renderReplacedElement(e, t, e.canvas), !(e instanceof iB)) return [3, 12];
                                A.label = 9;
                            case 9:
                                return A.trys.push([9, 11, , 12]), [4, this.context.cache.match(e.svg)];
                            case 10:
                                return Q = A.sent(), this.renderReplacedElement(e, t, Q), [3, 12];
                            case 11:
                                return A.sent(), this.context.logger.error("Error loading svg " + e.svg.substring(0, 255)), [3, 12];
                            case 12:
                                return e instanceof vB && e.tree ? [4, new Ds(this.context, {
                                    scale: this.options.scale,
                                    backgroundColor: e.backgroundColor,
                                    x: 0,
                                    y: 0,
                                    width: e.width,
                                    height: e.height
                                }).render(e.tree)] : [3, 14];
                            case 13:
                                s = A.sent(), e.width && e.height && this.ctx.drawImage(s, 0, 0, e.width, e.height, e.bounds.left, e.bounds.top, e.bounds.width, e.bounds.height), A.label = 14;
                            case 14:
                                if (e instanceof pB && (i = Math.min(e.bounds.width, e.bounds.height), e.type === hB ? e.checked && (this.ctx.save(), this.path([new Zn(e.bounds.left + .39363 * i, e.bounds.top + .79 * i), new Zn(e.bounds.left + .16 * i, e.bounds.top + .5549 * i), new Zn(e.bounds.left + .27347 * i, e.bounds.top + .44071 * i), new Zn(e.bounds.left + .39694 * i, e.bounds.top + .5649 * i), new Zn(e.bounds.left + .72983 * i, e.bounds.top + .23 * i), new Zn(e.bounds.left + .84 * i, e.bounds.top + .34085 * i), new Zn(e.bounds.left + .39363 * i, e.bounds.top + .79 * i)]), this.ctx.fillStyle = ie(HB), this.ctx.fill(), this.ctx.restore()) : e.type === dB && e.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(e.bounds.left + i / 2, e.bounds.top + i / 2, i / 4, 0, 2 * Math.PI, !0), this.ctx.fillStyle = ie(HB), this.ctx.fill(), this.ctx.restore())), xs(e) && e.value.length) {
                                    switch (c = this.createFontStyle(r), a = c[0], i = c[1], c = this.fontMetrics.getMetrics(a, i).baseline, this.ctx.font = a, this.ctx.fillStyle = ie(r.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = Ss(e.styles.textAlign), g = ls(e), o = 0, e.styles.textAlign) {
                                        case 1:
                                            o += g.width / 2;
                                            break;
                                        case 2:
                                            o += g.width
                                    }
                                    i = g.add(o, 0, 0, -g.height / 2 + 1), this.ctx.save(), this.path([new Zn(g.left, g.top), new Zn(g.left + g.width, g.top), new Zn(g.left + g.width, g.top + g.height), new Zn(g.left, g.top + g.height)]), this.ctx.clip(), this.renderTextWithLetterSpacing(new Jr(e.value, i), r.letterSpacing, c), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left"
                                }
                                if (!Pt(e.styles.display, 2048)) return [3, 20];
                                if (null === e.styles.listStyleImage) return [3, 19];
                                if (0 !== (c = e.styles.listStyleImage).type) return [3, 18];
                                Q = void 0, c = c.url, A.label = 15;
                            case 15:
                                return A.trys.push([15, 17, , 18]), [4, this.context.cache.match(c)];
                            case 16:
                                return Q = A.sent(), this.ctx.drawImage(Q, e.bounds.left - (Q.width + 10), e.bounds.top), [3, 18];
                            case 17:
                                return A.sent(), this.context.logger.error("Error loading list-style-image " + c), [3, 18];
                            case 18:
                                return [3, 20];
                            case 19:
                                w.listValue && -1 !== e.styles.listStyleType && (a = this.createFontStyle(r)[0], this.ctx.font = a, this.ctx.fillStyle = ie(r.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", g = new d(e.bounds.left, e.bounds.top + Ue(e.styles.paddingTop, e.bounds.width), e.bounds.width, Ye(r.lineHeight, r.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new Jr(w.listValue, g), r.letterSpacing, Ye(r.lineHeight, r.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), A.label = 20;
                            case 20:
                                return [2]
                        }
                    })
                })
            }, Ds.prototype.renderStackContent = function (C) {
                return a(this, void 0, void 0, function () {
                    var e, t, r, B, n, s, o, i, Q, c, a, g, w, U, l;
                    return H(this, function (A) {
                        switch (A.label) {
                            case 0:
                                return Pt(C.element.container.flags, 16), [4, this.renderNodeBackgroundAndBorders(C.element)];
                            case 1:
                                A.sent(), e = 0, t = C.negativeZIndex, A.label = 2;
                            case 2:
                                return e < t.length ? (l = t[e], [4, this.renderStack(l)]) : [3, 5];
                            case 3:
                                A.sent(), A.label = 4;
                            case 4:
                                return e++, [3, 2];
                            case 5:
                                return [4, this.renderNodeContent(C.element)];
                            case 6:
                                A.sent(), r = 0, B = C.nonInlineLevel, A.label = 7;
                            case 7:
                                return r < B.length ? (l = B[r], [4, this.renderNode(l)]) : [3, 10];
                            case 8:
                                A.sent(), A.label = 9;
                            case 9:
                                return r++, [3, 7];
                            case 10:
                                n = 0, s = C.nonPositionedFloats, A.label = 11;
                            case 11:
                                return n < s.length ? (l = s[n], [4, this.renderStack(l)]) : [3, 14];
                            case 12:
                                A.sent(), A.label = 13;
                            case 13:
                                return n++, [3, 11];
                            case 14:
                                o = 0, i = C.nonPositionedInlineLevel, A.label = 15;
                            case 15:
                                return o < i.length ? (l = i[o], [4, this.renderStack(l)]) : [3, 18];
                            case 16:
                                A.sent(), A.label = 17;
                            case 17:
                                return o++, [3, 15];
                            case 18:
                                Q = 0, c = C.inlineLevel, A.label = 19;
                            case 19:
                                return Q < c.length ? (l = c[Q], [4, this.renderNode(l)]) : [3, 22];
                            case 20:
                                A.sent(), A.label = 21;
                            case 21:
                                return Q++, [3, 19];
                            case 22:
                                a = 0, g = C.zeroOrAutoZIndexOrTransformedOrOpacity, A.label = 23;
                            case 23:
                                return a < g.length ? (l = g[a], [4, this.renderStack(l)]) : [3, 26];
                            case 24:
                                A.sent(), A.label = 25;
                            case 25:
                                return a++, [3, 23];
                            case 26:
                                w = 0, U = C.positiveZIndex, A.label = 27;
                            case 27:
                                return w < U.length ? (l = U[w], [4, this.renderStack(l)]) : [3, 30];
                            case 28:
                                A.sent(), A.label = 29;
                            case 29:
                                return w++, [3, 27];
                            case 30:
                                return [2]
                        }
                    })
                })
            }, Ds.prototype.mask = function (A) {
                this.ctx.beginPath(), this.ctx.moveTo(0, 0), this.ctx.lineTo(this.canvas.width, 0), this.ctx.lineTo(this.canvas.width, this.canvas.height), this.ctx.lineTo(0, this.canvas.height), this.ctx.lineTo(0, 0), this.formatPath(A.slice(0).reverse()), this.ctx.closePath()
            }, Ds.prototype.path = function (A) {
                this.ctx.beginPath(), this.formatPath(A), this.ctx.closePath()
            }, Ds.prototype.formatPath = function (A) {
                var r = this;
                A.forEach(function (A, e) {
                    var t = $n(A) ? A.start : A;
                    0 === e ? r.ctx.moveTo(t.x, t.y) : r.ctx.lineTo(t.x, t.y), $n(A) && r.ctx.bezierCurveTo(A.startControl.x, A.startControl.y, A.endControl.x, A.endControl.y, A.end.x, A.end.y)
                })
            }, Ds.prototype.renderRepeat = function (A, e, t, r) {
                this.path(A), this.ctx.fillStyle = e, this.ctx.translate(t, r), this.ctx.fill(), this.ctx.translate(-t, -r)
            }, Ds.prototype.resizeImage = function (A, e, t) {
                if (A.width === e && A.height === t) return A;
                var r = (null !== (r = this.canvas.ownerDocument) && void 0 !== r ? r : document).createElement("canvas");
                return r.width = Math.max(1, e), r.height = Math.max(1, t), r.getContext("2d").drawImage(A, 0, 0, A.width, A.height, 0, 0, e, t), r
            }, Ds.prototype.renderBackgroundImage = function (f) {
                return a(this, void 0, void 0, function () {
                    var h, e, d, t, r, B;
                    return H(this, function (A) {
                        switch (A.label) {
                            case 0:
                                h = f.styles.backgroundImage.length - 1, e = function (e) {
                                    var t, r, B, n, s, o, i, Q, c, a, g, w, U, l, C, u, F;
                                    return H(this, function (A) {
                                        switch (A.label) {
                                            case 0:
                                                if (0 !== e.type) return [3, 5];
                                                t = void 0, r = e.url, A.label = 1;
                                            case 1:
                                                return A.trys.push([1, 3, , 4]), [4, d.context.cache.match(r)];
                                            case 2:
                                                return t = A.sent(), [3, 4];
                                            case 3:
                                                return A.sent(), d.context.logger.error("Error loading background-image " + r), [3, 4];
                                            case 4:
                                                return t && (B = Cs(f, h, [t.width, t.height, t.width / t.height]), o = B[0], g = B[1], w = B[2], c = B[3], a = B[4], s = d.ctx.createPattern(d.resizeImage(t, c, a), "repeat"), d.renderRepeat(o, s, g, w)), [3, 6];
                                            case 5:
                                                1 === e.type ? (F = Cs(f, h, [null, null, null]), o = F[0], g = F[1], w = F[2], c = F[3], a = F[4], C = Ee(e.angle, c, a), l = C[0], B = C[1], i = C[2], u = C[3], Q = C[4], (F = document.createElement("canvas")).width = c, F.height = a, C = F.getContext("2d"), n = C.createLinearGradient(B, u, i, Q), pe(e.stops, l).forEach(function (A) {
                                                    return n.addColorStop(A.stop, ie(A.color))
                                                }), C.fillStyle = n, C.fillRect(0, 0, c, a), 0 < c && 0 < a && (s = d.ctx.createPattern(F, "repeat"), d.renderRepeat(o, s, g, w))) : 2 === e.type && (u = Cs(f, h, [null, null, null]), o = u[0], i = u[1], Q = u[2], c = u[3], a = u[4], l = 0 === e.position.length ? [ge] : e.position, g = Ue(l[0], c), w = Ue(l[l.length - 1], a), C = function (A, e, t, r, B) {
                                                    var n, s, o, i, Q = 0,
                                                        c = 0;
                                                    switch (A.size) {
                                                        case 0:
                                                            0 === A.shape ? Q = c = Math.min(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - B)) : 1 === A.shape && (Q = Math.min(Math.abs(e), Math.abs(e - r)), c = Math.min(Math.abs(t), Math.abs(t - B)));
                                                            break;
                                                        case 2:
                                                            0 === A.shape ? Q = c = Math.min(Ie(e, t), Ie(e, t - B), Ie(e - r, t), Ie(e - r, t - B)) : 1 === A.shape && (n = Math.min(Math.abs(t), Math.abs(t - B)) / Math.min(Math.abs(e), Math.abs(e - r)), o = (s = ye(r, B, e, t, !0))[0], i = s[1], c = n * (Q = Ie(o - e, (i - t) / n)));
                                                            break;
                                                        case 1:
                                                            0 === A.shape ? Q = c = Math.max(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - B)) : 1 === A.shape && (Q = Math.max(Math.abs(e), Math.abs(e - r)), c = Math.max(Math.abs(t), Math.abs(t - B)));
                                                            break;
                                                        case 3:
                                                            0 === A.shape ? Q = c = Math.max(Ie(e, t), Ie(e, t - B), Ie(e - r, t), Ie(e - r, t - B)) : 1 === A.shape && (n = Math.max(Math.abs(t), Math.abs(t - B)) / Math.max(Math.abs(e), Math.abs(e - r)), o = (s = ye(r, B, e, t, !1))[0], i = s[1], c = n * (Q = Ie(o - e, (i - t) / n)))
                                                    }
                                                    return Array.isArray(A.size) && (Q = Ue(A.size[0], r), c = 2 === A.size.length ? Ue(A.size[1], B) : Q), [Q, c]
                                                }(e, g, w, c, a), F = C[0], u = C[1], 0 < F && 0 < u && (U = d.ctx.createRadialGradient(i + g, Q + w, 0, i + g, Q + w, F), pe(e.stops, 2 * F).forEach(function (A) {
                                                    return U.addColorStop(A.stop, ie(A.color))
                                                }), d.path(o), d.ctx.fillStyle = U, F !== u ? (l = f.bounds.left + .5 * f.bounds.width, C = f.bounds.top + .5 * f.bounds.height, F = 1 / (u = u / F), d.ctx.save(), d.ctx.translate(l, C), d.ctx.transform(1, 0, 0, u, 0, 0), d.ctx.translate(-l, -C), d.ctx.fillRect(i, F * (Q - C) + C, c, a * F), d.ctx.restore()) : d.ctx.fill())), A.label = 6;
                                            case 6:
                                                return h--, [2]
                                        }
                                    })
                                }, d = this, t = 0, r = f.styles.backgroundImage.slice(0).reverse(), A.label = 1;
                            case 1:
                                return t < r.length ? (B = r[t], [5, e(B)]) : [3, 4];
                            case 2:
                                A.sent(), A.label = 3;
                            case 3:
                                return t++, [3, 1];
                            case 4:
                                return [2]
                        }
                    })
                })
            }, Ds.prototype.renderSolidBorder = function (e, t, r) {
                return a(this, void 0, void 0, function () {
                    return H(this, function (A) {
                        return this.path(ws(r, t)), this.ctx.fillStyle = ie(e), this.ctx.fill(), [2]
                    })
                })
            }, Ds.prototype.renderDoubleBorder = function (t, r, B, n) {
                return a(this, void 0, void 0, function () {
                    var e;
                    return H(this, function (A) {
                        switch (A.label) {
                            case 0:
                                return r < 3 ? [4, this.renderSolidBorder(t, B, n)] : [3, 2];
                            case 1:
                                return A.sent(), [2];
                            case 2:
                                return e = function (A, e) {
                                    switch (e) {
                                        case 0:
                                            return Hs(A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox, A.topRightBorderBox, A.topRightBorderDoubleOuterBox);
                                        case 1:
                                            return Hs(A.topRightBorderBox, A.topRightBorderDoubleOuterBox, A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox);
                                        case 2:
                                            return Hs(A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox, A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox);
                                        default:
                                            return Hs(A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox, A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox)
                                    }
                                }(n, B), this.path(e), this.ctx.fillStyle = ie(t), this.ctx.fill(), e = function (A, e) {
                                    switch (e) {
                                        case 0:
                                            return Hs(A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox, A.topRightBorderDoubleInnerBox, A.topRightPaddingBox);
                                        case 1:
                                            return Hs(A.topRightBorderDoubleInnerBox, A.topRightPaddingBox, A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox);
                                        case 2:
                                            return Hs(A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox, A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox);
                                        default:
                                            return Hs(A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox, A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox)
                                    }
                                }(n, B), this.path(e), this.ctx.fill(), [2]
                        }
                    })
                })
            }, Ds.prototype.renderNodeBackgroundAndBorders = function (c) {
                return a(this, void 0, void 0, function () {
                    var e, t, r, B, n, s, o, i, Q = this;
                    return H(this, function (A) {
                        switch (A.label) {
                            case 0:
                                return (this.applyEffects(c.getEffects(2)), e = c.container.styles, t = !oe(e.backgroundColor) || e.backgroundImage.length, r = [{
                                    style: e.borderTopStyle,
                                    color: e.borderTopColor,
                                    width: e.borderTopWidth
                                }, {
                                    style: e.borderRightStyle,
                                    color: e.borderRightColor,
                                    width: e.borderRightWidth
                                }, {
                                    style: e.borderBottomStyle,
                                    color: e.borderBottomColor,
                                    width: e.borderBottomWidth
                                }, {
                                    style: e.borderLeftStyle,
                                    color: e.borderLeftColor,
                                    width: e.borderLeftWidth
                                }], B = Ms(Es(e.backgroundClip, 0), c.curves), t || e.boxShadow.length) ? (this.ctx.save(), this.path(B), this.ctx.clip(), oe(e.backgroundColor) || (this.ctx.fillStyle = ie(e.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(c.container)]) : [3, 2];
                            case 1:
                                A.sent(), this.ctx.restore(), e.boxShadow.slice(0).reverse().forEach(function (A) {
                                    Q.ctx.save();
                                    var t, r, B, n, e = ts(c.curves),
                                        s = A.inset ? 0 : 1e4,
                                        o = (t = -s + (A.inset ? 1 : -1) * A.spread.number, r = (A.inset ? 1 : -1) * A.spread.number, B = A.spread.number * (A.inset ? -2 : 2), n = A.spread.number * (A.inset ? -2 : 2), e.map(function (A, e) {
                                            switch (e) {
                                                case 0:
                                                    return A.add(t, r);
                                                case 1:
                                                    return A.add(t + B, r);
                                                case 2:
                                                    return A.add(t + B, r + n);
                                                case 3:
                                                    return A.add(t, r + n)
                                            }
                                            return A
                                        }));
                                    A.inset ? (Q.path(e), Q.ctx.clip(), Q.mask(o)) : (Q.mask(e), Q.ctx.clip(), Q.path(o)), Q.ctx.shadowOffsetX = A.offsetX.number + s, Q.ctx.shadowOffsetY = A.offsetY.number, Q.ctx.shadowColor = ie(A.color), Q.ctx.shadowBlur = A.blur.number, Q.ctx.fillStyle = A.inset ? ie(A.color) : "rgba(0,0,0,1)", Q.ctx.fill(), Q.ctx.restore()
                                }), A.label = 2;
                            case 2:
                                s = n = 0, o = r, A.label = 3;
                            case 3:
                                return s < o.length ? 0 !== (i = o[s]).style && !oe(i.color) && 0 < i.width ? 2 !== i.style ? [3, 5] : [4, this.renderDashedDottedBorder(i.color, i.width, n, c.curves, 2)] : [3, 11] : [3, 13];
                            case 4:
                                return A.sent(), [3, 11];
                            case 5:
                                return 3 !== i.style ? [3, 7] : [4, this.renderDashedDottedBorder(i.color, i.width, n, c.curves, 3)];
                            case 6:
                                return A.sent(), [3, 11];
                            case 7:
                                return 4 !== i.style ? [3, 9] : [4, this.renderDoubleBorder(i.color, i.width, n, c.curves)];
                            case 8:
                                return A.sent(), [3, 11];
                            case 9:
                                return [4, this.renderSolidBorder(i.color, n, c.curves)];
                            case 10:
                                A.sent(), A.label = 11;
                            case 11:
                                n++, A.label = 12;
                            case 12:
                                return s++, [3, 3];
                            case 13:
                                return [2]
                        }
                    })
                })
            }, Ds.prototype.renderDashedDottedBorder = function (g, w, U, l, C) {
                return a(this, void 0, void 0, function () {
                    var e, t, r, B, n, s, o, i, Q, c, a;
                    return H(this, function (A) {
                        return this.ctx.save(), Q = function (A, e) {
                            switch (e) {
                                case 0:
                                    return fs(A.topLeftBorderStroke, A.topRightBorderStroke);
                                case 1:
                                    return fs(A.topRightBorderStroke, A.bottomRightBorderStroke);
                                case 2:
                                    return fs(A.bottomRightBorderStroke, A.bottomLeftBorderStroke);
                                default:
                                    return fs(A.bottomLeftBorderStroke, A.topLeftBorderStroke)
                            }
                        }(l, U), e = ws(l, U), 2 === C && (this.path(e), this.ctx.clip()), s = $n(e[0]) ? (t = e[0].start.x, e[0].start.y) : (t = e[0].x, e[0].y), o = $n(e[1]) ? (r = e[1].end.x, e[1].end.y) : (r = e[1].x, e[1].y), B = 0 === U || 2 === U ? Math.abs(t - r) : Math.abs(s - o), this.ctx.beginPath(), 3 === C ? this.formatPath(Q) : this.formatPath(e.slice(0, 2)), n = w < 3 ? 3 * w : 2 * w, s = w < 3 ? 2 * w : w, 3 === C && (s = n = w), o = !0, B <= 2 * n ? o = !1 : B <= 2 * n + s ? (n *= i = B / (2 * n + s), s *= i) : (Q = Math.floor((B + s) / (n + s)), i = (B - Q * n) / (Q - 1), s = (Q = (B - (Q + 1) * n) / Q) <= 0 || Math.abs(s - i) < Math.abs(s - Q) ? i : Q), o && (3 === C ? this.ctx.setLineDash([0, n + s]) : this.ctx.setLineDash([n, s])), 3 === C ? (this.ctx.lineCap = "round", this.ctx.lineWidth = w) : this.ctx.lineWidth = 2 * w + 1.1, this.ctx.strokeStyle = ie(g), this.ctx.stroke(), this.ctx.setLineDash([]), 2 === C && ($n(e[0]) && (c = e[3], a = e[0], this.ctx.beginPath(), this.formatPath([new Zn(c.end.x, c.end.y), new Zn(a.start.x, a.start.y)]), this.ctx.stroke()), $n(e[1]) && (c = e[1], a = e[2], this.ctx.beginPath(), this.formatPath([new Zn(c.end.x, c.end.y), new Zn(a.start.x, a.start.y)]), this.ctx.stroke())), this.ctx.restore(), [2]
                    })
                })
            }, Ds.prototype.render = function (B) {
                return a(this, void 0, void 0, function () {
                    return H(this, function (A) {
                        switch (A.label) {
                            case 0:
                                return this.options.backgroundColor && (this.ctx.fillStyle = ie(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), t = new as(e = B, null), r = new cs(t), hs(t, r, r, e = []), ds(t.container, e), [4, this.renderStack(r)];
                            case 1:
                                return A.sent(), this.applyEffects([]), [2, this.canvas]
                        }
                        var e, t, r
                    })
                })
            }, Ds);

        function Ds(A, e) {
            A = Ls.call(this, A, e) || this;
            return A._activeEffects = [], A.canvas = e.canvas || document.createElement("canvas"), A.ctx = A.canvas.getContext("2d"), e.canvas || (A.canvas.width = Math.floor(e.width * e.scale), A.canvas.height = Math.floor(e.height * e.scale), A.canvas.style.width = e.width + "px", A.canvas.style.height = e.height + "px"), A.fontMetrics = new Ks(document), A.ctx.scale(A.options.scale, A.options.scale), A.ctx.translate(-e.x, -e.y), A.ctx.textBaseline = "bottom", A._activeEffects = [], A.context.logger.debug("Canvas renderer initialized (" + e.width + "x" + e.height + ") with scale " + e.scale), A
        }
        var vs, xs = function (A) {
                return A instanceof LB || (A instanceof yB || A instanceof pB && A.type !== dB && A.type !== hB)
            },
            Ms = function (A, e) {
                switch (A) {
                    case 0:
                        return ts(e);
                    case 2:
                        return [e.topLeftContentBox, e.topRightContentBox, e.bottomRightContentBox, e.bottomLeftContentBox];
                    default:
                        return rs(e)
                }
            },
            Ss = function (A) {
                switch (A) {
                    case 1:
                        return "center";
                    case 2:
                        return "right";
                    default:
                        return "left"
                }
            },
            Ts = ["-apple-system", "system-ui"],
            Gs = function (A) {
                return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? A.filter(function (A) {
                    return -1 === Ts.indexOf(A)
                }) : A
            },
            Os = (A(Vs, vs = he), Vs.prototype.render = function (t) {
                return a(this, void 0, void 0, function () {
                    var e;
                    return H(this, function (A) {
                        switch (A.label) {
                            case 0:
                                return e = Nr(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t), [4, ks(e)];
                            case 1:
                                return e = A.sent(), this.options.backgroundColor && (this.ctx.fillStyle = ie(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(e, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas]
                        }
                    })
                })
            }, Vs);

        function Vs(A, e) {
            A = vs.call(this, A, e) || this;
            return A.canvas = e.canvas || document.createElement("canvas"), A.ctx = A.canvas.getContext("2d"), A.options = e, A.canvas.width = Math.floor(e.width * e.scale), A.canvas.height = Math.floor(e.height * e.scale), A.canvas.style.width = e.width + "px", A.canvas.style.height = e.height + "px", A.ctx.scale(A.options.scale, A.options.scale), A.ctx.translate(-e.x, -e.y), A.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + e.width + "x" + e.height + " at " + e.x + "," + e.y + ") with scale " + e.scale), A
        }
        var ks = function (r) {
                return new Promise(function (A, e) {
                    var t = new Image;
                    t.onload = function () {
                        A(t)
                    }, t.onerror = e, t.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent((new XMLSerializer).serializeToString(r))
                })
            },
            Rs = (Ns.prototype.debug = function () {
                for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
                this.enabled && ("undefined" != typeof window && window.console && "function" == typeof console.debug ? console.debug.apply(console, t([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A))
            }, Ns.prototype.getTime = function () {
                return Date.now() - this.start
            }, Ns.prototype.info = function () {
                for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
                this.enabled && "undefined" != typeof window && window.console && "function" == typeof console.info && console.info.apply(console, t([this.id, this.getTime() + "ms"], A))
            }, Ns.prototype.warn = function () {
                for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
                this.enabled && ("undefined" != typeof window && window.console && "function" == typeof console.warn ? console.warn.apply(console, t([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A))
            }, Ns.prototype.error = function () {
                for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
                this.enabled && ("undefined" != typeof window && window.console && "function" == typeof console.error ? console.error.apply(console, t([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A))
            }, Ns.instances = {}, Ns);

        function Ns(A) {
            var e = A.id,
                A = A.enabled;
            this.id = e, this.enabled = A, this.start = Date.now()
        }
        var Ps = (Xs.instanceCount = 1, Xs);

        function Xs(A, e) {
            this.windowBounds = e, this.instanceName = "#" + Xs.instanceCount++, this.logger = new Rs({
                id: this.instanceName,
                enabled: A.logging
            }), this.cache = null !== (e = A.cache) && void 0 !== e ? e : new On(this, A)
        }
        "undefined" != typeof window && Tn.setContext(window);
        var Js = function (u, F) {
                return a(void 0, void 0, void 0, function () {
                    var e, t, r, B, n, s, o, i, Q, c, a, g, w, U, l, C;
                    return H(this, function (A) {
                        switch (A.label) {
                            case 0:
                                if (!u || "object" != typeof u) return [2, Promise.reject("Invalid element provided as first argument")];
                                if (!(e = u.ownerDocument)) throw new Error("Element is not attached to a Document");
                                if (!(t = e.defaultView)) throw new Error("Document is not attached to a Window");
                                return w = {
                                    allowTaint: null !== (U = F.allowTaint) && void 0 !== U && U,
                                    imageTimeout: null !== (c = F.imageTimeout) && void 0 !== c ? c : 15e3,
                                    proxy: F.proxy,
                                    useCORS: null !== (a = F.useCORS) && void 0 !== a && a
                                }, U = h({
                                    logging: null === (g = F.logging) || void 0 === g || g,
                                    cache: F.cache
                                }, w), c = {
                                    windowWidth: null !== (c = F.windowWidth) && void 0 !== c ? c : t.innerWidth,
                                    windowHeight: null !== (a = F.windowHeight) && void 0 !== a ? a : t.innerHeight,
                                    scrollX: null !== (g = F.scrollX) && void 0 !== g ? g : t.pageXOffset,
                                    scrollY: null !== (w = F.scrollY) && void 0 !== w ? w : t.pageYOffset
                                }, a = new d(c.scrollX, c.scrollY, c.windowWidth, c.windowHeight), g = new Ps(U, a), c = null !== (w = F.foreignObjectRendering) && void 0 !== w && w, w = {
                                    allowTaint: null !== (U = F.allowTaint) && void 0 !== U && U,
                                    onclone: F.onclone,
                                    ignoreElements: F.ignoreElements,
                                    inlineImages: c,
                                    copyStyles: c
                                }, g.logger.debug("Starting document clone with size " + a.width + "x" + a.height + " scrolled to " + -a.left + "," + -a.top), U = new dn(g, u, w), (w = U.clonedReferenceElement) ? [4, U.toIFrame(e, a)] : [2, Promise.reject("Unable to find element in cloned iframe")];
                            case 1:
                                return (r = A.sent(), l = jB(w) || "HTML" === w.tagName ? function (A) {
                                    var e = A.body,
                                        t = A.documentElement;
                                    if (!e || !t) throw new Error("Unable to get document size");
                                    A = Math.max(Math.max(e.scrollWidth, t.scrollWidth), Math.max(e.offsetWidth, t.offsetWidth), Math.max(e.clientWidth, t.clientWidth)), t = Math.max(Math.max(e.scrollHeight, t.scrollHeight), Math.max(e.offsetHeight, t.offsetHeight), Math.max(e.clientHeight, t.clientHeight));
                                    return new d(0, 0, A, t)
                                }(w.ownerDocument) : f(g, w), B = l.width, n = l.height, s = l.left, o = l.top, i = Ys(g, w, F.backgroundColor), l = {
                                    canvas: F.canvas,
                                    backgroundColor: i,
                                    scale: null !== (l = null !== (l = F.scale) && void 0 !== l ? l : t.devicePixelRatio) && void 0 !== l ? l : 1,
                                    x: (null !== (l = F.x) && void 0 !== l ? l : 0) + s,
                                    y: (null !== (l = F.y) && void 0 !== l ? l : 0) + o,
                                    width: null !== (l = F.width) && void 0 !== l ? l : Math.ceil(B),
                                    height: null !== (l = F.height) && void 0 !== l ? l : Math.ceil(n)
                                }, c) ? (g.logger.debug("Document cloned, using foreign object rendering"), [4, new Os(g, l).render(w)]) : [3, 3];
                            case 2:
                                return Q = A.sent(), [3, 5];
                            case 3:
                                return g.logger.debug("Document cloned, element located at " + s + "," + o + " with size " + B + "x" + n + " using computed rendering"), g.logger.debug("Starting DOM parsing"), C = kB(g, w), i === C.styles.backgroundColor && (C.styles.backgroundColor = Le.TRANSPARENT), g.logger.debug("Starting renderer for element at " + l.x + "," + l.y + " with size " + l.width + "x" + l.height), [4, new bs(g, l).render(C)];
                            case 4:
                                Q = A.sent(), A.label = 5;
                            case 5:
                                return null !== (C = F.removeContainer) && void 0 !== C && !C || dn.destroy(r) || g.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore"), g.logger.debug("Finished rendering"), [2, Q]
                        }
                    })
                })
            },
            Ys = function (A, e, t) {
                var r = e.ownerDocument,
                    B = r.documentElement ? fe(A, getComputedStyle(r.documentElement).backgroundColor) : Le.TRANSPARENT,
                    n = r.body ? fe(A, getComputedStyle(r.body).backgroundColor) : Le.TRANSPARENT,
                    t = "string" == typeof t ? fe(A, t) : null === t ? Le.TRANSPARENT : 4294967295;
                return e === r.documentElement ? oe(B) ? oe(n) ? t : n : B : t
            };
        return function (A, e) {
            return Js(A, e = void 0 === e ? {} : e)
        }
    });


    let template = document.createElement("template");
    template.innerHTML = `
			<style>
				:host {
					display: block;
                    overflow-x:auto;
                
				} 
			</style> 

            <div>
            <a id="exportCSV" href="">Excel</a> 
			<div id="chart_div"></div>
            </div>
           
		`;


    class HelloWorld1 extends HTMLElement {


        constructor() {
            super();
            let shadowRoot = this.attachShadow({
                mode: "open"
            });


            shadowRoot.appendChild(template.content.cloneNode(true));
            this.addEventListener("click", event => {
                var event = new Event("onClick");
                this.dispatchEvent(event);
            });


            this._props = {};


        }


        //Fired when the widget is added to the html DOM of the page
        connectedCallback() {

            var imgData;
            var id = 'chart_div';

            google.charts.load('current', {
                'packages': ['Table']
            });
            google.charts.setOnLoadCallback(function () {
                drawTable();
            });


            var ctx = this.shadowRoot.getElementById('chart_div');

            function drawTable() {


                var data = new google.visualization.DataTable();

                data.addColumn('string', 'Name');
                data.addColumn('number', 'Salary');
                data.addColumn('boolean', 'Full Time Employee');
                data.addRows([
                    ['Mike', {
                        v: 10000,
                        f: '$10,000'
                    }, true],
                    ['Jim', {
                        v: 8000,
                        f: '$8,000'
                    }, false],
                    ['Alice', {
                        v: 12500,
                        f: '$12,500'
                    }, true],
                    ['Bob', {
                        v: 7000,
                        f: '$7,000'
                    }, true],
                    ['Mike', {
                        v: 10000,
                        f: '$10,000'
                    }, true],
                    ['Jim', {
                        v: 8000,
                        f: '$8,000'
                    }, false],
                    ['Alice', {
                        v: 12500,
                        f: '$12,500'
                    }, true],
                    ['Bob', {
                        v: 7000,
                        f: '$7,000'
                    }, true],
                    ['Mike', {
                        v: 10000,
                        f: '$10,000'
                    }, true],
                    ['Jim', {
                        v: 8000,
                        f: '$8,000'
                    }, false],
                    ['Alice', {
                        v: 12500,
                        f: '$12,500'
                    }, true],
                    ['Mike', {
                        v: 10000,
                        f: '$10,000'
                    }, true],
                    ['Jim', {
                        v: 8000,
                        f: '$8,000'
                    }, false],
                    ['Alice', {
                        v: 12500,
                        f: '$12,500'
                    }, true],
                    ['Bob', {
                        v: 7000,
                        f: '$7,000'
                    }, true],
                    ['Mike', {
                        v: 10000,
                        f: '$10,000'
                    }, true],
                    ['Jim', {
                        v: 8000,
                        f: '$8,000'
                    }, false],
                    ['Alice', {
                        v: 12500,
                        f: '$12,500'
                    }, true],
                    ['Bob', {
                        v: 7000,
                        f: '$7,000'
                    }, true],
                    ['Mike', {
                        v: 10000,
                        f: '$10,000'
                    }, true],
                    ['Jim', {
                        v: 8000,
                        f: '$8,000'
                    }, false],
                    ['Alice', {
                        v: 12500,
                        f: '$12,500'
                    }, true],
                    ['Mike', {
                        v: 10000,
                        f: '$10,000'
                    }, true],
                    ['Jim', {
                        v: 8000,
                        f: '$8,000'
                    }, false],
                    ['Alice', {
                        v: 12500,
                        f: '$12,500'
                    }, true],
                    ['Bob', {
                        v: 7000,
                        f: '$7,000'
                    }, true],
                    ['Mike', {
                        v: 10000,
                        f: '$10,000'
                    }, true],
                    ['Jim', {
                        v: 8000,
                        f: '$8,000'
                    }, false],
                    ['Alice', {
                        v: 12500,
                        f: '$12,500'
                    }, true],
                    ['Bob', {
                        v: 7000,
                        f: '$7,000'
                    }, true],
                    ['Mike', {
                        v: 10000,
                        f: '$10,000'
                    }, true],
                    ['Jim', {
                        v: 8000,
                        f: '$8,000'
                    }, false],
                    ['Alice', {
                        v: 12500,
                        f: '$12,500'
                    }, true],
                    ['Mike', {
                        v: 10000,
                        f: '$10,000'
                    }, true],
                    ['Jim', {
                        v: 8000,
                        f: '$8,000'
                    }, false],
                    ['Alice', {
                        v: 12500,
                        f: '$12,500'
                    }, true],
                    ['Bob', {
                        v: 7000,
                        f: '$7,000'
                    }, true],
                    ['Mike', {
                        v: 10000,
                        f: '$10,000'
                    }, true],
                    ['Jim', {
                        v: 8000,
                        f: '$8,000'
                    }, false],
                    ['Alice', {
                        v: 12500,
                        f: '$12,500'
                    }, true],
                    ['Bob', {
                        v: 7000,
                        f: '$7,000'
                    }, true],
                    ['Mike', {
                        v: 10000,
                        f: '$10,000'
                    }, true],
                    ['Jim', {
                        v: 8000,
                        f: '$8,000'
                    }, false],
                    ['Alice', {
                        v: 12500,
                        f: '$12,500'
                    }, true],
                    ['Mike', {
                        v: 10000,
                        f: '$10,000'
                    }, true],
                    ['Jim', {
                        v: 8000,
                        f: '$8,000'
                    }, false],
                    ['Alice', {
                        v: 12500,
                        f: '$12,500'
                    }, true],
                    ['Bob', {
                        v: 7000,
                        f: '$7,000'
                    }, true],
                    ['Mike', {
                        v: 10000,
                        f: '$10,000'
                    }, true],
                    ['Jim', {
                        v: 8000,
                        f: '$8,000'
                    }, false],
                    ['Alice', {
                        v: 12500,
                        f: '$12,500'
                    }, true],
                    ['Bob', {
                        v: 7000,
                        f: '$7,000'
                    }, true],
                    ['Mike', {
                        v: 10000,
                        f: '$10,000'
                    }, true],
                    ['Jim', {
                        v: 8000,
                        f: '$8,000'
                    }, false],
                    ['Alice', {
                        v: 12500,
                        f: '$12,500'
                    }, true],
                    ['Mike', {
                        v: 10000,
                        f: '$10,000'
                    }, true],
                    ['Jim', {
                        v: 8000,
                        f: '$8,000'
                    }, false],
                    ['Alice', {
                        v: 12500,
                        f: '$12,500'
                    }, true],
                    ['Bob', {
                        v: 7000,
                        f: '$7,000'
                    }, true],
                    ['Mike', {
                        v: 10000,
                        f: '$10,000'
                    }, true],
                    ['Jim', {
                        v: 8000,
                        f: '$8,000'
                    }, false],
                    ['Alice', {
                        v: 12500,
                        f: '$12,500'
                    }, true],
                    ['Bob', {
                        v: 7000,
                        f: '$7,000'
                    }, true],
                    ['Mike', {
                        v: 10000,
                        f: '$10,000'
                    }, true],
                    ['Jim', {
                        v: 8000,
                        f: '$8,000'
                    }, false],
                    ['Alice', {
                        v: 12500,
                        f: '$12,500'
                    }, true],
                    ['Mike', {
                        v: 10000,
                        f: '$10,000'
                    }, true],
                    ['Jim', {
                        v: 8000,
                        f: '$8,000'
                    }, false],
                    ['Alice', {
                        v: 12500,
                        f: '$12,500'
                    }, true],
                    ['Bob', {
                        v: 7000,
                        f: '$7,000'
                    }, true],
                    ['Mike', {
                        v: 10000,
                        f: '$10,000'
                    }, true],
                    ['Jim', {
                        v: 8000,
                        f: '$8,000'
                    }, false],
                    ['Alice', {
                        v: 12500,
                        f: '$12,500'
                    }, true],
                    ['Bob', {
                        v: 7000,
                        f: '$7,000'
                    }, true],
                    ['Mike', {
                        v: 10000,
                        f: '$10,000'
                    }, true],
                    ['Jim', {
                        v: 8000,
                        f: '$8,000'
                    }, false],
                    ['Alice', {
                        v: 12500,
                        f: '$12,500'
                    }, true]

                ]);

                var table = new google.visualization.Table(ctx);


                table.draw(data, {
                    showRowNumber: false,
                    width: '100%',
                    height: '100%'
                });

                executer();


                function executer() {
                    console.log("gehst du rein?");
                    var currentPosition = ctx.scrollTop;
                    console.log(currentPosition);
                    var w = ctx.offsetWidth;
                    var h = ctx.offsetHeight;
                    console.log(w);
                    console.log(h);
                    ctx.style.height = "auto";

                    html2canvas(ctx, {

                        

                        dpi: 300, // Set to 300 DPI
                        scale: 3, // Adjusts your resolution
                         function (canvas) {
                            var img = canvas.toDataURL("image/jpeg", 1);
                            var doc = new jsPDF('L', 'px', [w, h]);
                            doc.addImage(img, 'JPEG', 0, 0, w, h);
                            doc.addPage();
                            doc.save('sample-file.pdf');
                            console.log("gehst du rein 2");
                        }
                       
                    }
                    );
                    console.log("currentPosition");
                    console.log(currentPosition);
                    ctx.style.height = "100px";
                    ctx.scrollTop = currentPosition;


                };





            }

        }

        //Fired when the widget is removed from the html DOM of the page (e.g. by hide)
        disconnectedCallback() {



        }

        //When the custom widget is updated, the Custom Widget SDK framework executes this function first
        onCustomWidgetBeforeUpdate(oChangedProperties) {


        }



        //When the custom widget is updated, the Custom Widget SDK framework executes this function after the update
        onCustomWidgetAfterUpdate(oChangedProperties) {




        }

        //When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy() {}


        //When the custom widget is resized on the canvas, the Custom Widget SDK framework executes the following JavaScript function call on the custom widget
        // Commented out by default
        /*
        onCustomWidgetResize(width, height){
        }
        */

        redraw() {


        }
    }
    customElements.define('com-sap-sample-helloworld1', HelloWorld1);
})();