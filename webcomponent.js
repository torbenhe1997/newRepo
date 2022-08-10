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


  /*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */
  !function (a, b) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
    "use strict";
    var c = [],
        d = a.document,
        e = Object.getPrototypeOf,
        f = c.slice,
        g = c.concat,
        h = c.push,
        i = c.indexOf,
        j = {},
        k = j.toString,
        l = j.hasOwnProperty,
        m = l.toString,
        n = m.call(Object),
        o = {};

    function p(a, b) {
        b = b || d;
        var c = b.createElement("script");
        c.text = a, b.head.appendChild(c).parentNode.removeChild(c)
    }
    var q = "3.1.1",
        r = function (a, b) {
            return new r.fn.init(a, b)
        },
        s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        t = /^-ms-/,
        u = /-([a-z])/g,
        v = function (a, b) {
            return b.toUpperCase()
        };
    r.fn = r.prototype = {
        jquery: q,
        constructor: r,
        length: 0,
        toArray: function () {
            return f.call(this)
        },
        get: function (a) {
            return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a]
        },
        pushStack: function (a) {
            var b = r.merge(this.constructor(), a);
            return b.prevObject = this, b
        },
        each: function (a) {
            return r.each(this, a)
        },
        map: function (a) {
            return this.pushStack(r.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function () {
            return this.pushStack(f.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (a) {
            var b = this.length,
                c = +a + (a < 0 ? b : 0);
            return this.pushStack(c >= 0 && c < b ? [this[c]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: h,
        sort: c.sort,
        splice: c.splice
    }, r.extend = r.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = r.isArray(d))) ? (e ? (e = !1, f = c && r.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, r.extend({
        expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (a) {
            throw new Error(a)
        },
        noop: function () {},
        isFunction: function (a) {
            return "function" === r.type(a)
        },
        isArray: Array.isArray,
        isWindow: function (a) {
            return null != a && a === a.window
        },
        isNumeric: function (a) {
            var b = r.type(a);
            return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a))
        },
        isPlainObject: function (a) {
            var b, c;
            return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n))
        },
        isEmptyObject: function (a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? j[k.call(a)] || "object" : typeof a
        },
        globalEval: function (a) {
            p(a)
        },
        camelCase: function (a) {
            return a.replace(t, "ms-").replace(u, v)
        },
        nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function (a, b) {
            var c, d = 0;
            if (w(a)) {
                for (c = a.length; d < c; d++)
                    if (b.call(a[d], d, a[d]) === !1) break
            } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1) break;
            return a
        },
        trim: function (a) {
            return null == a ? "" : (a + "").replace(s, "")
        },
        makeArray: function (a, b) {
            var c = b || [];
            return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c
        },
        inArray: function (a, b, c) {
            return null == b ? -1 : i.call(b, a, c)
        },
        merge: function (a, b) {
            for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function (a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function (a, b, c) {
            var d, e, f = 0,
                h = [];
            if (w(a))
                for (d = a.length; f < d; f++) e = b(a[f], f, c), null != e && h.push(e);
            else
                for (f in a) e = b(a[f], f, c), null != e && h.push(e);
            return g.apply([], h)
        },
        guid: 1,
        proxy: function (a, b) {
            var c, d, e;
            if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a)) return d = f.call(arguments, 2), e = function () {
                return a.apply(b || this, d.concat(f.call(arguments)))
            }, e.guid = a.guid = a.guid || r.guid++, e
        },
        now: Date.now,
        support: o
    }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
        j["[object " + b + "]"] = b.toLowerCase()
    });

    function w(a) {
        var b = !!a && "length" in a && a.length,
            c = r.type(a);
        return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }
    var x = function (a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ha(),
            z = ha(),
            A = ha(),
            B = function (a, b) {
                return a === b && (l = !0), 0
            },
            C = {}.hasOwnProperty,
            D = [],
            E = D.pop,
            F = D.push,
            G = D.push,
            H = D.slice,
            I = function (a, b) {
                for (var c = 0, d = a.length; c < d; c++)
                    if (a[c] === b) return c;
                return -1
            },
            J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            K = "[\\x20\\t\\r\\n\\f]",
            L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
            N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            O = new RegExp(K + "+", "g"),
            P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
            Q = new RegExp("^" + K + "*," + K + "*"),
            R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
            S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
            T = new RegExp(N),
            U = new RegExp("^" + L + "$"),
            V = {
                ID: new RegExp("^#(" + L + ")"),
                CLASS: new RegExp("^\\.(" + L + ")"),
                TAG: new RegExp("^(" + L + "|[*])"),
                ATTR: new RegExp("^" + M),
                PSEUDO: new RegExp("^" + N),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + J + ")$", "i"),
                needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i")
            },
            W = /^(?:input|select|textarea|button)$/i,
            X = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            $ = /[+~]/,
            _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
            aa = function (a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ca = function (a, b) {
                return b ? "\0" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a
            },
            da = function () {
                m()
            },
            ea = ta(function (a) {
                return a.disabled === !0 && ("form" in a || "label" in a)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType
        } catch (fa) {
            G = {
                apply: D.length ? function (a, b) {
                    F.apply(a, H.call(b))
                } : function (a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s = b && b.ownerDocument,
                w = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== w && (l = Z.exec(a)))
                    if (f = l[1]) {
                        if (9 === w) {
                            if (!(j = b.getElementById(f))) return d;
                            if (j.id === f) return d.push(j), d
                        } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
                    } else {
                        if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;
                        if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d
                    } if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== w) s = b, r = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(ba, ca): b.setAttribute("id", k = u), o = g(a), h = o.length;
                        while (h--) o[h] = "#" + k + " " + sa(o[h]);
                        r = o.join(","), s = $.test(a) && qa(b.parentNode) || b
                    }
                    if (r) try {
                        return G.apply(d, s.querySelectorAll(r)), d
                    } catch (x) {} finally {
                        k === u && b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(P, "$1"), b, d, e)
        }

        function ha() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function ia(a) {
            return a[u] = !0, a
        }

        function ja(a) {
            var b = n.createElement("fieldset");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ka(a, b) {
            var c = a.split("|"),
                e = c.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function la(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function ma(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function na(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function oa(a) {
            return function (b) {
                return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a
            }
        }

        function pa(a) {
            return ia(function (b) {
                return b = +b, ia(function (c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function qa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = ga.support = {}, f = ga.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return !!b && "HTML" !== b.nodeName
        }, m = ga.setDocument = function (a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function (a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ja(function (a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function (a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
            }), c.getById ? (d.filter.ID = function (a) {
                var b = a.replace(_, aa);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }, d.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }) : (d.filter.ID = function (a) {
                var b = a.replace(_, aa);
                return function (a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }, d.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c, d, e, f = b.getElementById(a);
                    if (f) {
                        if (c = f.getAttributeNode("id"), c && c.value === a) return [f];
                        e = b.getElementsByName(a), d = 0;
                        while (f = e[d++])
                            if (c = f.getAttributeNode("id"), c && c.value === a) return [f]
                    }
                    return []
                }
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function (a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a)
            }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function (a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ja(function (a) {
                a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
                c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function (a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1)
            } : function (a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;
                if (e === f) return la(a, b);
                c = a;
                while (c = c.parentNode) g.unshift(c);
                c = b;
                while (c = c.parentNode) h.unshift(c);
                while (g[d] === h[d]) d++;
                return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }, n) : n
        }, ga.matches = function (a, b) {
            return ga(a, null, null, b)
        }, ga.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return ga(b, n, null, [a]).length > 0
        }, ga.contains = function (a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, ga.attr = function (a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, ga.escape = function (a) {
            return (a + "").replace(ba, ca)
        }, ga.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, ga.uniqueSort = function (a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = ga.getText = function (a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
                },
                PSEUDO: function (a) {
                    var b, c = !a[6] && a[2];
                    return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(_, aa).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function (a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function (a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function (a, b, c) {
                    return function (d) {
                        var e = ga.attr(d, a);
                        return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"))
                    }
                },
                CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];
                                        break
                                    }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function (a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = I(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function (a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ia(function (a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(P, "$1"));
                    return d[u] ? ia(function (a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ia(function (a) {
                    return function (b) {
                        return ga(a, b).length > 0
                    }
                }),
                contains: ia(function (a) {
                    return a = a.replace(_, aa),
                        function (b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ia(function (a) {
                    return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(),
                        function (b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function (a) {
                    return a === o
                },
                focus: function (a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: oa(!1),
                disabled: oa(!0),
                checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function (a) {
                    return !d.pseudos.empty(a)
                },
                header: function (a) {
                    return X.test(a.nodeName)
                },
                input: function (a) {
                    return W.test(a.nodeName)
                },
                button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: pa(function () {
                    return [0]
                }),
                last: pa(function (a, b) {
                    return [b - 1]
                }),
                eq: pa(function (a, b, c) {
                    return [c < 0 ? c + b : c]
                }),
                even: pa(function (a, b) {
                    for (var c = 0; c < b; c += 2) a.push(c);
                    return a
                }),
                odd: pa(function (a, b) {
                    for (var c = 1; c < b; c += 2) a.push(c);
                    return a
                }),
                lt: pa(function (a, b, c) {
                    for (var d = c < 0 ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: pa(function (a, b, c) {
                    for (var d = c < 0 ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = ma(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = na(b);

        function ra() {}
        ra.prototype = d.filters = d.pseudos, d.setFilters = new ra, g = ga.tokenize = function (a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(P, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
        };

        function sa(a) {
            for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
            return d
        }

        function ta(a, b, c) {
            var d = b.dir,
                e = b.next,
                f = e || d,
                g = c && "parentNode" === f,
                h = x++;
            return b.first ? function (b, c, e) {
                while (b = b[d])
                    if (1 === b.nodeType || g) return a(b, c, e);
                return !1
            } : function (b, c, i) {
                var j, k, l, m = [w, h];
                if (i) {
                    while (b = b[d])
                        if ((1 === b.nodeType || g) && a(b, c, i)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || g)
                            if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;
                            else {
                                if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];
                                if (k[f] = m, m[2] = a(b, c, i)) return !0
                            } return !1
            }
        }

        function ua(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function va(a, b, c) {
            for (var d = 0, e = b.length; d < e; d++) ga(a, b[d], c);
            return c
        }

        function wa(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }

        function xa(a, b, c, d, e, f) {
            return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function (f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || va(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : wa(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = wa(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r)
            })
        }

        function ya(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function (a) {
                    return a === b
                }, h, !0), l = ta(function (a) {
                    return I(b, a) > -1
                }, h, !0), m = [function (a, c, d) {
                    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null, e
                }]; i < f; i++)
                if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; e < f; e++)
                            if (d.relative[a[e].type]) break;
                        return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a))
                    }
                    m.push(c)
                } return ua(m)
        }

        function za(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function (f, g, h, i, k) {
                    var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || .1,
                        z = x.length;
                    for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                        if (e && l) {
                            o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                            while (q = a[o++])
                                if (q(l, g || n, h)) {
                                    i.push(l);
                                    break
                                } k && (w = y)
                        }
                        c && ((l = !q && l) && r--, f && t.push(l))
                    }
                    if (r += s, c && s !== r) {
                        o = 0;
                        while (q = b[o++]) q(t, u, g, h);
                        if (f) {
                            if (r > 0)
                                while (s--) t[s] || u[s] || (u[s] = E.call(i));
                            u = wa(u)
                        }
                        G.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i)
                    }
                    return k && (w = y, j = v), t
                };
            return c ? ia(f) : f
        }
        return h = ga.compile = function (a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, za(e, d)), f.selector = a
            }
            return f
        }, i = ga.select = function (a, b, c, e) {
            var f, i, j, k, l, m = "function" == typeof a && a,
                n = !e && g(a = m.selector || a);
            if (c = c || [], 1 === n.length) {
                if (i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) {
                    if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b) return c;
                    m && (b = b.parentNode), a = a.slice(i.shift().value.length)
                }
                f = V.needsContext.test(a) ? 0 : i.length;
                while (f--) {
                    if (j = i[f], d.relative[k = j.type]) break;
                    if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) {
                        if (i.splice(f, 1), a = e.length && sa(i), !a) return G.apply(c, e), c;
                        break
                    }
                }
            }
            return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b), c
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement("fieldset"))
        }), ja(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ka("type|href|height|width", function (a, b, c) {
            if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ja(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ka("value", function (a, b, c) {
            if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue
        }), ja(function (a) {
            return null == a.getAttribute("disabled")
        }) || ka(J, function (a, b, c) {
            var d;
            if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), ga
    }(a);
    r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;
    var y = function (a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && r(a).is(c)) break;
                    d.push(a)
                } return d
        },
        z = function (a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        A = r.expr.match.needsContext,
        B = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        C = /^.[^:#\[\.,]*$/;

    function D(a, b, c) {
        return r.isFunction(b) ? r.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c
        }) : b.nodeType ? r.grep(a, function (a) {
            return a === b !== c
        }) : "string" != typeof b ? r.grep(a, function (a) {
            return i.call(b, a) > -1 !== c
        }) : C.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a), r.grep(a, function (a) {
            return i.call(b, a) > -1 !== c && 1 === a.nodeType
        }))
    }
    r.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    }, r.fn.extend({
        find: function (a) {
            var b, c, d = this.length,
                e = this;
            if ("string" != typeof a) return this.pushStack(r(a).filter(function () {
                for (b = 0; b < d; b++)
                    if (r.contains(e[b], this)) return !0
            }));
            for (c = this.pushStack([]), b = 0; b < d; b++) r.find(a, e[b], c);
            return d > 1 ? r.uniqueSort(c) : c
        },
        filter: function (a) {
            return this.pushStack(D(this, a || [], !1))
        },
        not: function (a) {
            return this.pushStack(D(this, a || [], !0))
        },
        is: function (a) {
            return !!D(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length
        }
    });
    var E, F = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        G = r.fn.init = function (a, b, c) {
            var e, f;
            if (!a) return this;
            if (c = c || E, "string" == typeof a) {
                if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : F.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                if (e[1]) {
                    if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), B.test(e[1]) && r.isPlainObject(b))
                        for (e in b) r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                    return this
                }
                return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this
            }
            return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this)
        };
    G.prototype = r.fn, E = r(d);
    var H = /^(?:parents|prev(?:Until|All))/,
        I = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    r.fn.extend({
        has: function (a) {
            var b = r(a, this),
                c = b.length;
            return this.filter(function () {
                for (var a = 0; a < c; a++)
                    if (r.contains(this, b[a])) return !0
            })
        },
        closest: function (a, b) {
            var c, d = 0,
                e = this.length,
                f = [],
                g = "string" != typeof a && r(a);
            if (!A.test(a))
                for (; d < e; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
                            f.push(c);
                            break
                        } return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f)
        },
        index: function (a) {
            return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (a, b) {
            return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))))
        },
        addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function J(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType);
        return a
    }
    r.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function (a) {
            return y(a, "parentNode")
        },
        parentsUntil: function (a, b, c) {
            return y(a, "parentNode", c)
        },
        next: function (a) {
            return J(a, "nextSibling")
        },
        prev: function (a) {
            return J(a, "previousSibling")
        },
        nextAll: function (a) {
            return y(a, "nextSibling")
        },
        prevAll: function (a) {
            return y(a, "previousSibling")
        },
        nextUntil: function (a, b, c) {
            return y(a, "nextSibling", c)
        },
        prevUntil: function (a, b, c) {
            return y(a, "previousSibling", c)
        },
        siblings: function (a) {
            return z((a.parentNode || {}).firstChild, a)
        },
        children: function (a) {
            return z(a.firstChild)
        },
        contents: function (a) {
            return a.contentDocument || r.merge([], a.childNodes)
        }
    }, function (a, b) {
        r.fn[a] = function (c, d) {
            var e = r.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (I[a] || r.uniqueSort(e), H.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var K = /[^\x20\t\r\n\f]+/g;

    function L(a) {
        var b = {};
        return r.each(a.match(K) || [], function (a, c) {
            b[c] = !0
        }), b
    }
    r.Callbacks = function (a) {
        a = "string" == typeof a ? L(a) : r.extend({}, a);
        var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function () {
                for (e = a.once, d = b = !0; g.length; h = -1) {
                    c = g.shift();
                    while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
                }
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
            },
            j = {
                add: function () {
                    return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                        r.each(b, function (b, c) {
                            r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c)
                        })
                    }(arguments), c && !b && i()), this
                },
                remove: function () {
                    return r.each(arguments, function (a, b) {
                        var c;
                        while ((c = r.inArray(b, f, c)) > -1) f.splice(c, 1), c <= h && h--
                    }), this
                },
                has: function (a) {
                    return a ? r.inArray(a, f) > -1 : f.length > 0
                },
                empty: function () {
                    return f && (f = []), this
                },
                disable: function () {
                    return e = g = [], f = c = "", this
                },
                disabled: function () {
                    return !f
                },
                lock: function () {
                    return e = g = [], c || b || (f = c = ""), this
                },
                locked: function () {
                    return !!e
                },
                fireWith: function (a, c) {
                    return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
                },
                fire: function () {
                    return j.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!d
                }
            };
        return j
    };

    function M(a) {
        return a
    }

    function N(a) {
        throw a
    }

    function O(a, b, c) {
        var d;
        try {
            a && r.isFunction(d = a.promise) ? d.call(a).done(b).fail(c) : a && r.isFunction(d = a.then) ? d.call(a, b, c) : b.call(void 0, a)
        } catch (a) {
            c.call(void 0, a)
        }
    }
    r.extend({
        Deferred: function (b) {
            var c = [
                    ["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2],
                    ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]
                ],
                d = "pending",
                e = {
                    state: function () {
                        return d
                    },
                    always: function () {
                        return f.done(arguments).fail(arguments), this
                    },
                    "catch": function (a) {
                        return e.then(null, a)
                    },
                    pipe: function () {
                        var a = arguments;
                        return r.Deferred(function (b) {
                            r.each(c, function (c, d) {
                                var e = r.isFunction(a[d[4]]) && a[d[4]];
                                f[d[1]](function () {
                                    var a = e && e.apply(this, arguments);
                                    a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    then: function (b, d, e) {
                        var f = 0;

                        function g(b, c, d, e) {
                            return function () {
                                var h = this,
                                    i = arguments,
                                    j = function () {
                                        var a, j;
                                        if (!(b < f)) {
                                            if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");
                                            j = a && ("object" == typeof a || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, M, e), g(f, c, N, e)) : (f++, j.call(a, g(f, c, M, e), g(f, c, N, e), g(f, c, M, c.notifyWith))) : (d !== M && (h = void 0, i = [a]), (e || c.resolveWith)(h, i))
                                        }
                                    },
                                    k = e ? j : function () {
                                        try {
                                            j()
                                        } catch (a) {
                                            r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== N && (h = void 0, i = [a]), c.rejectWith(h, i))
                                        }
                                    };
                                b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k))
                            }
                        }
                        return r.Deferred(function (a) {
                            c[0][3].add(g(0, a, r.isFunction(e) ? e : M, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : M)), c[2][3].add(g(0, a, r.isFunction(d) ? d : N))
                        }).promise()
                    },
                    promise: function (a) {
                        return null != a ? r.extend(a, e) : e
                    }
                },
                f = {};
            return r.each(c, function (a, b) {
                var g = b[2],
                    h = b[5];
                e[b[1]] = g.add, h && g.add(function () {
                    d = h
                }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function () {
                    return f[b[0] + "With"](this === f ? void 0 : this, arguments), this
                }, f[b[0] + "With"] = g.fireWith
            }), e.promise(f), b && b.call(f, f), f
        },
        when: function (a) {
            var b = arguments.length,
                c = b,
                d = Array(c),
                e = f.call(arguments),
                g = r.Deferred(),
                h = function (a) {
                    return function (c) {
                        d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e)
                    }
                };
            if (b <= 1 && (O(a, g.done(h(c)).resolve, g.reject), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();
            while (c--) O(e[c], h(c), g.reject);
            return g.promise()
        }
    });
    var P = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    r.Deferred.exceptionHook = function (b, c) {
        a.console && a.console.warn && b && P.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c)
    }, r.readyException = function (b) {
        a.setTimeout(function () {
            throw b
        })
    };
    var Q = r.Deferred();
    r.fn.ready = function (a) {
        return Q.then(a)["catch"](function (a) {
            r.readyException(a)
        }), this
    }, r.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (a) {
            a ? r.readyWait++ : r.ready(!0)
        },
        ready: function (a) {
            (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || Q.resolveWith(d, [r]))
        }
    }), r.ready.then = Q.then;

    function R() {
        d.removeEventListener("DOMContentLoaded", R),
            a.removeEventListener("load", R), r.ready()
    }
    "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", R), a.addEventListener("load", R));
    var S = function (a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === r.type(c)) {
                e = !0;
                for (h in c) S(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
                    return j.call(r(a), c)
                })), b))
                for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        T = function (a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
        };

    function U() {
        this.expando = r.expando + U.uid++
    }
    U.uid = 1, U.prototype = {
        cache: function (a) {
            var b = a[this.expando];
            return b || (b = {}, T(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))), b
        },
        set: function (a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) e[r.camelCase(b)] = c;
            else
                for (d in b) e[r.camelCase(d)] = b[d];
            return e
        },
        get: function (a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)]
        },
        access: function (a, b, c) {
            return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function (a, b) {
            var c, d = a[this.expando];
            if (void 0 !== d) {
                if (void 0 !== b) {
                    r.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(K) || []), c = b.length;
                    while (c--) delete d[b[c]]
                }(void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
            }
        },
        hasData: function (a) {
            var b = a[this.expando];
            return void 0 !== b && !r.isEmptyObject(b)
        }
    };
    var V = new U,
        W = new U,
        X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Y = /[A-Z]/g;

    function Z(a) {
        return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : X.test(a) ? JSON.parse(a) : a)
    }

    function $(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(Y, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = Z(c)
                } catch (e) {}
                W.set(a, b, c)
            } else c = void 0;
        return c
    }
    r.extend({
        hasData: function (a) {
            return W.hasData(a) || V.hasData(a)
        },
        data: function (a, b, c) {
            return W.access(a, b, c)
        },
        removeData: function (a, b) {
            W.remove(a, b)
        },
        _data: function (a, b, c) {
            return V.access(a, b, c)
        },
        _removeData: function (a, b) {
            V.remove(a, b)
        }
    }), r.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = W.get(f), 1 === f.nodeType && !V.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), $(f, d, e[d])));
                    V.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function () {
                W.set(this, a)
            }) : S(this, function (b) {
                var c;
                if (f && void 0 === b) {
                    if (c = W.get(f, a), void 0 !== c) return c;
                    if (c = $(f, a), void 0 !== c) return c
                } else this.each(function () {
                    W.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function (a) {
            return this.each(function () {
                W.remove(this, a)
            })
        }
    }), r.extend({
        queue: function (a, b, c) {
            var d;
            if (a) return b = (b || "fx") + "queue", d = V.get(a, b), c && (!d || r.isArray(c) ? d = V.access(a, b, r.makeArray(c)) : d.push(c)), d || []
        },
        dequeue: function (a, b) {
            b = b || "fx";
            var c = r.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = r._queueHooks(a, b),
                g = function () {
                    r.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return V.get(a, c) || V.access(a, c, {
                empty: r.Callbacks("once memory").add(function () {
                    V.remove(a, [b + "queue", c])
                })
            })
        }
    }), r.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = r.queue(this, a, b);
                r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a)
            })
        },
        dequeue: function (a) {
            return this.each(function () {
                r.dequeue(this, a)
            })
        },
        clearQueue: function (a) {
            return this.queue(a || "fx", [])
        },
        promise: function (a, b) {
            var c, d = 1,
                e = r.Deferred(),
                f = this,
                g = this.length,
                h = function () {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = V.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var _ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        aa = new RegExp("^(?:([+-])=|)(" + _ + ")([a-z%]*)$", "i"),
        ba = ["Top", "Right", "Bottom", "Left"],
        ca = function (a, b) {
            return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display")
        },
        da = function (a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        };

    function ea(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function () {
                return d.cur()
            } : function () {
                return r.css(a, b, "")
            },
            i = h(),
            j = c && c[3] || (r.cssNumber[b] ? "" : "px"),
            k = (r.cssNumber[b] || "px" !== j && +i) && aa.exec(r.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, r.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }
    var fa = {};

    function ga(a) {
        var b, c = a.ownerDocument,
            d = a.nodeName,
            e = fa[d];
        return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), fa[d] = e, e)
    }

    function ha(a, b) {
        for (var c, d, e = [], f = 0, g = a.length; f < g; f++) d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = V.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && ca(d) && (e[f] = ga(d))) : "none" !== c && (e[f] = "none", V.set(d, "display", c)));
        for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f]);
        return a
    }
    r.fn.extend({
        show: function () {
            return ha(this, !0)
        },
        hide: function () {
            return ha(this)
        },
        toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                ca(this) ? r(this).show() : r(this).hide()
            })
        }
    });
    var ia = /^(?:checkbox|radio)$/i,
        ja = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        ka = /^$|\/(?:java|ecma)script/i,
        la = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    la.optgroup = la.option, la.tbody = la.tfoot = la.colgroup = la.caption = la.thead, la.th = la.td;

    function ma(a, b) {
        var c;
        return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && r.nodeName(a, b) ? r.merge([a], c) : c
    }

    function na(a, b) {
        for (var c = 0, d = a.length; c < d; c++) V.set(a[c], "globalEval", !b || V.get(b[c], "globalEval"))
    }
    var oa = /<|&#?\w+;/;

    function pa(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++)
            if (f = a[n], f || 0 === f)
                if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);
                else if (oa.test(f)) {
            g = g || l.appendChild(b.createElement("div")), h = (ja.exec(f) || ["", ""])[1].toLowerCase(), i = la[h] || la._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];
            while (k--) g = g.lastChild;
            r.merge(m, g.childNodes), g = l.firstChild, g.textContent = ""
        } else m.push(b.createTextNode(f));
        l.textContent = "", n = 0;
        while (f = m[n++])
            if (d && r.inArray(f, d) > -1) e && e.push(f);
            else if (j = r.contains(f.ownerDocument, f), g = ma(l.appendChild(f), "script"), j && na(g), c) {
            k = 0;
            while (f = g[k++]) ka.test(f.type || "") && c.push(f)
        }
        return l
    }! function () {
        var a = d.createDocumentFragment(),
            b = a.appendChild(d.createElement("div")),
            c = d.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var qa = d.documentElement,
        ra = /^key/,
        sa = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ta = /^([^.]*)(?:\.(.+)|)/;

    function ua() {
        return !0
    }

    function va() {
        return !1
    }

    function wa() {
        try {
            return d.activeElement
        } catch (a) {}
    }

    function xa(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) xa(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = va;
        else if (!e) return a;
        return 1 === f && (g = e, e = function (a) {
            return r().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function () {
            r.event.add(this, b, e, d, c)
        })
    }
    r.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = V.get(a);
            if (q) {
                c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(qa, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
                    return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(K) || [""], j = b.length;
                while (j--) h = ta.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && r.expr.match.needsContext.test(e),
                    namespace: o.join(".")
                }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0)
            }
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = V.hasData(a) && V.get(a);
            if (q && (i = q.events)) {
                b = (b || "").match(K) || [""], j = b.length;
                while (j--)
                    if (h = ta.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                        while (f--) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n])
                    } else
                        for (n in i) r.event.remove(a, n + b[j], c, d, !0);
                r.isEmptyObject(i) && V.remove(a, "handle events")
            }
        },
        dispatch: function (a) {
            var b = r.event.fix(a),
                c, d, e, f, g, h, i = new Array(arguments.length),
                j = (V.get(this, "events") || {})[b.type] || [],
                k = r.event.special[b.type] || {};
            for (i[0] = b, c = 1; c < arguments.length; c++) i[c] = arguments[c];
            if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
                h = r.event.handlers.call(this, b, j), c = 0;
                while ((f = h[c++]) && !b.isPropagationStopped()) {
                    b.currentTarget = f.elem, d = 0;
                    while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, b), b.result
            }
        },
        handlers: function (a, b) {
            var c, d, e, f, g, h = [],
                i = b.delegateCount,
                j = a.target;
            if (i && j.nodeType && !("click" === a.type && a.button >= 1))
                for (; j !== this; j = j.parentNode || this)
                    if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
                        for (f = [], g = {}, c = 0; c < i; c++) d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length), g[e] && f.push(d);
                        f.length && h.push({
                            elem: j,
                            handlers: f
                        })
                    } return j = this, i < b.length && h.push({
                elem: j,
                handlers: b.slice(i)
            }), h
        },
        addProp: function (a, b) {
            Object.defineProperty(r.Event.prototype, a, {
                enumerable: !0,
                configurable: !0,
                get: r.isFunction(b) ? function () {
                    if (this.originalEvent) return b(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[a]
                },
                set: function (b) {
                    Object.defineProperty(this, a, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: b
                    })
                }
            })
        },
        fix: function (a) {
            return a[r.expando] ? a : new r.Event(a)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== wa() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === wa() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && r.nodeName(this, "input")) return this.click(), !1
                },
                _default: function (a) {
                    return r.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    }, r.removeEvent = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    }, r.Event = function (a, b) {
        return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ua : va, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void(this[r.expando] = !0)) : new r.Event(a, b)
    }, r.Event.prototype = {
        constructor: r.Event,
        isDefaultPrevented: va,
        isPropagationStopped: va,
        isImmediatePropagationStopped: va,
        isSimulated: !1,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = ua, a && !this.isSimulated && a.preventDefault()
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = ua, a && !this.isSimulated && a.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ua, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, r.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (a) {
            var b = a.button;
            return null == a.which && ra.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && sa.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which
        }
    }, r.event.addProp), r.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (a, b) {
        r.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function (a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), r.fn.extend({
        on: function (a, b, c, d) {
            return xa(this, a, b, c, d)
        },
        one: function (a, b, c, d) {
            return xa(this, a, b, c, d, 1)
        },
        off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = va), this.each(function () {
                r.event.remove(this, a, c, b)
            })
        }
    });
    var ya = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        za = /<script|<style|<link/i,
        Aa = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ba = /^true\/(.*)/,
        Ca = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Da(a, b) {
        return r.nodeName(a, "table") && r.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a
    }

    function Ea(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function Fa(a) {
        var b = Ba.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function Ga(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (V.hasData(a) && (f = V.access(a), g = V.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; c < d; c++) r.event.add(b, e, j[e][c])
            }
            W.hasData(a) && (h = W.access(a), i = r.extend({}, h), W.set(b, i))
        }
    }

    function Ha(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && ia.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
    }

    function Ia(a, b, c, d) {
        b = g.apply([], b);
        var e, f, h, i, j, k, l = 0,
            m = a.length,
            n = m - 1,
            q = b[0],
            s = r.isFunction(q);
        if (s || m > 1 && "string" == typeof q && !o.checkClone && Aa.test(q)) return a.each(function (e) {
            var f = a.eq(e);
            s && (b[0] = q.call(this, e, f.html())), Ia(f, b, c, d)
        });
        if (m && (e = pa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
            for (h = r.map(ma(e, "script"), Ea), i = h.length; l < m; l++) j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, ma(j, "script"))), c.call(a[l], j, l);
            if (i)
                for (k = h[h.length - 1].ownerDocument, r.map(h, Fa), l = 0; l < i; l++) j = h[l], ka.test(j.type || "") && !V.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Ca, ""), k))
        }
        return a
    }

    function Ja(a, b, c) {
        for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || r.cleanData(ma(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && na(ma(d, "script")), d.parentNode.removeChild(d));
        return a
    }
    r.extend({
        htmlPrefilter: function (a) {
            return a.replace(ya, "<$1></$2>")
        },
        clone: function (a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = r.contains(a.ownerDocument, a);
            if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a)))
                for (g = ma(h), f = ma(a), d = 0, e = f.length; d < e; d++) Ha(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || ma(a), g = g || ma(h), d = 0, e = f.length; d < e; d++) Ga(f[d], g[d]);
                else Ga(a, h);
            return g = ma(h, "script"), g.length > 0 && na(g, !i && ma(a, "script")), h
        },
        cleanData: function (a) {
            for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++)
                if (T(c)) {
                    if (b = c[V.expando]) {
                        if (b.events)
                            for (d in b.events) e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
                        c[V.expando] = void 0
                    }
                    c[W.expando] && (c[W.expando] = void 0)
                }
        }
    }), r.fn.extend({
        detach: function (a) {
            return Ja(this, a, !0)
        },
        remove: function (a) {
            return Ja(this, a)
        },
        text: function (a) {
            return S(this, function (a) {
                return void 0 === a ? r.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function () {
            return Ia(this, arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Da(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function () {
            return Ia(this, arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Da(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function () {
            return Ia(this, arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function () {
            return Ia(this, arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (r.cleanData(ma(a, !1)), a.textContent = "");
            return this
        },
        clone: function (a, b) {
            return a = null != a && a, b = null == b ? a : b, this.map(function () {
                return r.clone(this, a, b)
            })
        },
        html: function (a) {
            return S(this, function (a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !za.test(a) && !la[(ja.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = r.htmlPrefilter(a);
                    try {
                        for (; c < d; c++) b = this[c] || {}, 1 === b.nodeType && (r.cleanData(ma(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function () {
            var a = [];
            return Ia(this, arguments, function (b) {
                var c = this.parentNode;
                r.inArray(this, a) < 0 && (r.cleanData(ma(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), r.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        r.fn[a] = function (a) {
            for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var Ka = /^margin/,
        La = new RegExp("^(" + _ + ")(?!px)[a-z%]+$", "i"),
        Ma = function (b) {
            var c = b.ownerDocument.defaultView;
            return c && c.opener || (c = a), c.getComputedStyle(b)
        };
    ! function () {
        function b() {
            if (i) {
                i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", qa.appendChild(h);
                var b = a.getComputedStyle(i);
                c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, qa.removeChild(h), i = null
            }
        }
        var c, e, f, g, h = d.createElement("div"),
            i = d.createElement("div");
        i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, {
            pixelPosition: function () {
                return b(), c
            },
            boxSizingReliable: function () {
                return b(), e
            },
            pixelMarginRight: function () {
                return b(), f
            },
            reliableMarginLeft: function () {
                return b(), g
            }
        }))
    }();

    function Na(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ma(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && La.test(g) && Ka.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function Oa(a, b) {
        return {
            get: function () {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    var Pa = /^(none|table(?!-c[ea]).+)/,
        Qa = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ra = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Sa = ["Webkit", "Moz", "ms"],
        Ta = d.createElement("div").style;

    function Ua(a) {
        if (a in Ta) return a;
        var b = a[0].toUpperCase() + a.slice(1),
            c = Sa.length;
        while (c--)
            if (a = Sa[c] + b, a in Ta) return a
    }

    function Va(a, b, c) {
        var d = aa.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
    }

    function Wa(a, b, c, d, e) {
        var f, g = 0;
        for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2) "margin" === c && (g += r.css(a, c + ba[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + ba[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + ba[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ba[f], !0, e), "padding" !== c && (g += r.css(a, "border" + ba[f] + "Width", !0, e)));
        return g
    }

    function Xa(a, b, c) {
        var d, e = !0,
            f = Ma(a),
            g = "border-box" === r.css(a, "boxSizing", !1, f);
        if (a.getClientRects().length && (d = a.getBoundingClientRect()[b]), d <= 0 || null == d) {
            if (d = Na(a, b, f), (d < 0 || null == d) && (d = a.style[b]), La.test(d)) return d;
            e = g && (o.boxSizingReliable() || d === a.style[b]), d = parseFloat(d) || 0
        }
        return d + Wa(a, b, c || (g ? "border" : "content"), e, f) + "px"
    }
    r.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = Na(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = r.camelCase(b),
                    i = a.style;
                return b = r.cssProps[h] || (r.cssProps[h] = Ua(h) || h), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = aa.exec(c)) && e[1] && (c = ea(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = r.camelCase(b);
            return b = r.cssProps[h] || (r.cssProps[h] = Ua(h) || h), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Na(a, b, d)), "normal" === e && b in Ra && (e = Ra[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
        }
    }), r.each(["height", "width"], function (a, b) {
        r.cssHooks[b] = {
            get: function (a, c, d) {
                if (c) return !Pa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? Xa(a, b, d) : da(a, Qa, function () {
                    return Xa(a, b, d)
                })
            },
            set: function (a, c, d) {
                var e, f = d && Ma(a),
                    g = d && Wa(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);
                return g && (e = aa.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Va(a, c, g)
            }
        }
    }), r.cssHooks.marginLeft = Oa(o.reliableMarginLeft, function (a, b) {
        if (b) return (parseFloat(Na(a, "marginLeft")) || a.getBoundingClientRect().left - da(a, {
            marginLeft: 0
        }, function () {
            return a.getBoundingClientRect().left
        })) + "px"
    }), r.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (a, b) {
        r.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) e[a + ba[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Ka.test(a) || (r.cssHooks[a + b].set = Va)
    }), r.fn.extend({
        css: function (a, b) {
            return S(this, function (a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (r.isArray(b)) {
                    for (d = Ma(a), e = b.length; g < e; g++) f[b[g]] = r.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? r.style(a, b, c) : r.css(a, b)
            }, a, b, arguments.length > 1)
        }
    });

    function Ya(a, b, c, d, e) {
        return new Ya.prototype.init(a, b, c, d, e)
    }
    r.Tween = Ya, Ya.prototype = {
        constructor: Ya,
        init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px")
        },
        cur: function () {
            var a = Ya.propHooks[this.prop];
            return a && a.get ? a.get(this) : Ya.propHooks._default.get(this)
        },
        run: function (a) {
            var b, c = Ya.propHooks[this.prop];
            return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ya.propHooks._default.set(this), this
        }
    }, Ya.prototype.init.prototype = Ya.prototype, Ya.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function (a) {
                r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, Ya.propHooks.scrollTop = Ya.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, r.easing = {
        linear: function (a) {
            return a
        },
        swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    }, r.fx = Ya.prototype.init, r.fx.step = {};
    var Za, $a, _a = /^(?:toggle|show|hide)$/,
        ab = /queueHooks$/;

    function bb() {
        $a && (a.requestAnimationFrame(bb), r.fx.tick())
    }

    function cb() {
        return a.setTimeout(function () {
            Za = void 0
        }), Za = r.now()
    }

    function db(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; d < 4; d += 2 - b) c = ba[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function eb(a, b, c) {
        for (var d, e = (hb.tweeners[b] || []).concat(hb.tweeners["*"]), f = 0, g = e.length; f < g; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function fb(a, b, c) {
        var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b,
            m = this,
            n = {},
            o = a.style,
            p = a.nodeType && ca(a),
            q = V.get(a, "fxshow");
        c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function () {
            g.unqueued || h()
        }), g.unqueued++, m.always(function () {
            m.always(function () {
                g.unqueued--, r.queue(a, "fx").length || g.empty.fire()
            })
        }));
        for (d in b)
            if (e = b[d], _a.test(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d]) continue;
                    p = !0
                }
                n[d] = q && q[d] || r.style(a, d)
            } if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) {
            l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = V.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ha([a], !0), j = a.style.display || j, k = r.css(a, "display"), ha([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function () {
                o.display = j
            }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function () {
                o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
            })), i = !1;
            for (d in n) i || (q ? "hidden" in q && (p = q.hidden) : q = V.access(a, "fxshow", {
                display: j
            }), f && (q.hidden = !p), p && ha([a], !0), m.done(function () {
                p || ha([a]), V.remove(a, "fxshow");
                for (d in n) r.style(a, d, n[d])
            })), i = eb(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0))
        }
    }

    function gb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = r.camelCase(c), e = b[d], f = a[c], r.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function hb(a, b, c) {
        var d, e, f = 0,
            g = hb.prefilters.length,
            h = r.Deferred().always(function () {
                delete i.elem
            }),
            i = function () {
                if (e) return !1;
                for (var b = Za || cb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: r.extend({}, b),
                opts: r.extend(!0, {
                    specialEasing: {},
                    easing: r.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Za || cb(),
                duration: c.duration,
                tweens: [],
                createTween: function (b, c) {
                    var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function (b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; c < d; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (gb(k, j.opts.specialEasing); f < g; f++)
            if (d = hb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
        return r.map(k, eb, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), r.fx.timer(r.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    r.Animation = r.extend(hb, {
            tweeners: {
                "*": [function (a, b) {
                    var c = this.createTween(a, b);
                    return ea(c.elem, a, aa.exec(b), c), c
                }]
            },
            tweener: function (a, b) {
                r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(K);
                for (var c, d = 0, e = a.length; d < e; d++) c = a[d], hb.tweeners[c] = hb.tweeners[c] || [], hb.tweeners[c].unshift(b)
            },
            prefilters: [fb],
            prefilter: function (a, b) {
                b ? hb.prefilters.unshift(a) : hb.prefilters.push(a)
            }
        }), r.speed = function (a, b, c) {
            var e = a && "object" == typeof a ? r.extend({}, a) : {
                complete: c || !c && b || r.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !r.isFunction(b) && b
            };
            return r.fx.off || d.hidden ? e.duration = 0 : "number" != typeof e.duration && (e.duration in r.fx.speeds ? e.duration = r.fx.speeds[e.duration] : e.duration = r.fx.speeds._default), null != e.queue && e.queue !== !0 || (e.queue = "fx"), e.old = e.complete, e.complete = function () {
                r.isFunction(e.old) && e.old.call(this), e.queue && r.dequeue(this, e.queue)
            }, e
        }, r.fn.extend({
            fadeTo: function (a, b, c, d) {
                return this.filter(ca).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function (a, b, c, d) {
                var e = r.isEmptyObject(a),
                    f = r.speed(b, c, d),
                    g = function () {
                        var b = hb(this, r.extend({}, a), f);
                        (e || V.get(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function (a, b, c) {
                var d = function (a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = r.timers,
                        g = V.get(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && ab.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    !b && c || r.dequeue(this, a)
                })
            },
            finish: function (a) {
                return a !== !1 && (a = a || "fx"), this.each(function () {
                    var b, c = V.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = r.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), r.each(["toggle", "show", "hide"], function (a, b) {
            var c = r.fn[b];
            r.fn[b] = function (a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(db(b, !0), a, d, e)
            }
        }), r.each({
            slideDown: db("show"),
            slideUp: db("hide"),
            slideToggle: db("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (a, b) {
            r.fn[a] = function (a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), r.timers = [], r.fx.tick = function () {
            var a, b = 0,
                c = r.timers;
            for (Za = r.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
            c.length || r.fx.stop(), Za = void 0
        }, r.fx.timer = function (a) {
            r.timers.push(a), a() ? r.fx.start() : r.timers.pop()
        }, r.fx.interval = 13, r.fx.start = function () {
            $a || ($a = a.requestAnimationFrame ? a.requestAnimationFrame(bb) : a.setInterval(r.fx.tick, r.fx.interval))
        }, r.fx.stop = function () {
            a.cancelAnimationFrame ? a.cancelAnimationFrame($a) : a.clearInterval($a), $a = null
        }, r.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, r.fn.delay = function (b, c) {
            return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function () {
                    a.clearTimeout(e)
                }
            })
        },
        function () {
            var a = d.createElement("input"),
                b = d.createElement("select"),
                c = b.appendChild(d.createElement("option"));
            a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value
        }();
    var ib, jb = r.expr.attrHandle;
    r.fn.extend({
        attr: function (a, b) {
            return S(this, r.attr, a, b, arguments.length > 1)
        },
        removeAttr: function (a) {
            return this.each(function () {
                r.removeAttr(this, a)
            })
        }
    }), r.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? ib : void 0)),
                void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b), null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (!o.radioValue && "radio" === b && r.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function (a, b) {
            var c, d = 0,
                e = b && b.match(K);
            if (e && 1 === a.nodeType)
                while (c = e[d++]) a.removeAttribute(c)
        }
    }), ib = {
        set: function (a, b, c) {
            return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = jb[b] || r.find.attr;
        jb[b] = function (a, b, d) {
            var e, f, g = b.toLowerCase();
            return d || (f = jb[g], jb[g] = e, e = null != c(a, b, d) ? g : null, jb[g] = f), e
        }
    });
    var kb = /^(?:input|select|textarea|button)$/i,
        lb = /^(?:a|area)$/i;
    r.fn.extend({
        prop: function (a, b) {
            return S(this, r.prop, a, b, arguments.length > 1)
        },
        removeProp: function (a) {
            return this.each(function () {
                delete this[r.propFix[a] || a]
            })
        }
    }), r.extend({
        prop: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var b = r.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : kb.test(a.nodeName) || lb.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), o.optSelected || (r.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        },
        set: function (a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        r.propFix[this.toLowerCase()] = this
    });

    function mb(a) {
        var b = a.match(K) || [];
        return b.join(" ")
    }

    function nb(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }
    r.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h, i = 0;
            if (r.isFunction(a)) return this.each(function (b) {
                r(this).addClass(a.call(this, b, nb(this)))
            });
            if ("string" == typeof a && a) {
                b = a.match(K) || [];
                while (c = this[i++])
                    if (e = nb(c), d = 1 === c.nodeType && " " + mb(e) + " ") {
                        g = 0;
                        while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = mb(d), e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        removeClass: function (a) {
            var b, c, d, e, f, g, h, i = 0;
            if (r.isFunction(a)) return this.each(function (b) {
                r(this).removeClass(a.call(this, b, nb(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(K) || [];
                while (c = this[i++])
                    if (e = nb(c), d = 1 === c.nodeType && " " + mb(e) + " ") {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                        h = mb(d), e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function (c) {
                r(this).toggleClass(a.call(this, c, nb(this), b), b)
            }) : this.each(function () {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0, e = r(this), f = a.match(K) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else void 0 !== a && "boolean" !== c || (b = nb(this), b && V.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : V.get(this, "__className__") || ""))
            })
        },
        hasClass: function (a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + mb(nb(c)) + " ").indexOf(b) > -1) return !0;
            return !1
        }
    });
    var ob = /\r/g;
    r.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = r.isFunction(a), this.each(function (c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : r.isArray(e) && (e = r.map(e, function (a) {
                        return null == a ? "" : a + ""
                    })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ob, "") : null == c ? "" : c)
            }
        }
    }), r.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = r.find.attr(a, "value");
                    return null != b ? b : mb(r.text(a))
                }
            },
            select: {
                get: function (a) {
                    var b, c, d, e = a.options,
                        f = a.selectedIndex,
                        g = "select-one" === a.type,
                        h = g ? null : [],
                        i = g ? f + 1 : e.length;
                    for (d = f < 0 ? i : g ? f : 0; d < i; d++)
                        if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !r.nodeName(c.parentNode, "optgroup"))) {
                            if (b = r(c).val(), g) return b;
                            h.push(b)
                        } return h
                },
                set: function (a, b) {
                    var c, d, e = a.options,
                        f = r.makeArray(b),
                        g = e.length;
                    while (g--) d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), r.each(["radio", "checkbox"], function () {
        r.valHooks[this] = {
            set: function (a, b) {
                if (r.isArray(b)) return a.checked = r.inArray(r(a).val(), b) > -1
            }
        }, o.checkOn || (r.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var pb = /^(?:focusinfocus|focusoutblur)$/;
    r.extend(r.event, {
        trigger: function (b, c, e, f) {
            var g, h, i, j, k, m, n, o = [e || d],
                p = l.call(b, "type") ? b.type : b,
                q = l.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !pb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
                if (!f && !n.noBubble && !r.isWindow(e)) {
                    for (j = n.delegateType || p, pb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), i = h;
                    i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a)
                }
                g = 0;
                while ((h = o[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : n.bindType || p, m = (V.get(h, "events") || {})[b.type] && V.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && T(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
                return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !T(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result
            }
        },
        simulate: function (a, b, c) {
            var d = r.extend(new r.Event, c, {
                type: a,
                isSimulated: !0
            });
            r.event.trigger(d, null, b)
        }
    }), r.fn.extend({
        trigger: function (a, b) {
            return this.each(function () {
                r.event.trigger(a, b, this)
            })
        },
        triggerHandler: function (a, b) {
            var c = this[0];
            if (c) return r.event.trigger(a, b, c, !0)
        }
    }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) {
        r.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), r.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), o.focusin = "onfocusin" in a, o.focusin || r.each({
        focus: "focusin",
        blur: "focusout"
    }, function (a, b) {
        var c = function (a) {
            r.event.simulate(b, a.target, r.event.fix(a))
        };
        r.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this,
                    e = V.access(d, b);
                e || d.addEventListener(a, c, !0), V.access(d, b, (e || 0) + 1)
            },
            teardown: function () {
                var d = this.ownerDocument || this,
                    e = V.access(d, b) - 1;
                e ? V.access(d, b, e) : (d.removeEventListener(a, c, !0), V.remove(d, b))
            }
        }
    });
    var qb = a.location,
        rb = r.now(),
        sb = /\?/;
    r.parseXML = function (b) {
        var c;
        if (!b || "string" != typeof b) return null;
        try {
            c = (new a.DOMParser).parseFromString(b, "text/xml")
        } catch (d) {
            c = void 0
        }
        return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c
    };
    var tb = /\[\]$/,
        ub = /\r?\n/g,
        vb = /^(?:submit|button|image|reset|file)$/i,
        wb = /^(?:input|select|textarea|keygen)/i;

    function xb(a, b, c, d) {
        var e;
        if (r.isArray(b)) r.each(b, function (b, e) {
            c || tb.test(a) ? d(a, e) : xb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== r.type(b)) d(a, b);
        else
            for (e in b) xb(a + "[" + e + "]", b[e], c, d)
    }
    r.param = function (a, b) {
        var c, d = [],
            e = function (a, b) {
                var c = r.isFunction(b) ? b() : b;
                d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c)
            };
        if (r.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function () {
            e(this.name, this.value)
        });
        else
            for (c in a) xb(c, a[c], b, e);
        return d.join("&")
    }, r.fn.extend({
        serialize: function () {
            return r.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var a = r.prop(this, "elements");
                return a ? r.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !r(this).is(":disabled") && wb.test(this.nodeName) && !vb.test(a) && (this.checked || !ia.test(a))
            }).map(function (a, b) {
                var c = r(this).val();
                return null == c ? null : r.isArray(c) ? r.map(c, function (a) {
                    return {
                        name: b.name,
                        value: a.replace(ub, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(ub, "\r\n")
                }
            }).get()
        }
    });
    var yb = /%20/g,
        zb = /#.*$/,
        Ab = /([?&])_=[^&]*/,
        Bb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Cb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Db = /^(?:GET|HEAD)$/,
        Eb = /^\/\//,
        Fb = {},
        Gb = {},
        Hb = "*/".concat("*"),
        Ib = d.createElement("a");
    Ib.href = qb.href;

    function Jb(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(K) || [];
            if (r.isFunction(c))
                while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Kb(a, b, c, d) {
        var e = {},
            f = a === Gb;

        function g(h) {
            var i;
            return e[h] = !0, r.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Lb(a, b) {
        var c, d, e = r.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && r.extend(!0, a, d), a
    }

    function Mb(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                } if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        if (f) return f !== i[0] && i.unshift(f), c[f]
    }

    function Nb(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    } if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }
    r.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: qb.href,
            type: "GET",
            isLocal: Cb.test(qb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Hb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": r.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (a, b) {
            return b ? Lb(Lb(a, r.ajaxSettings), b) : Lb(r.ajaxSettings, a)
        },
        ajaxPrefilter: Jb(Fb),
        ajaxTransport: Jb(Gb),
        ajax: function (b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var e, f, g, h, i, j, k, l, m, n, o = r.ajaxSetup({}, c),
                p = o.context || o,
                q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
                s = r.Deferred(),
                t = r.Callbacks("once memory"),
                u = o.statusCode || {},
                v = {},
                w = {},
                x = "canceled",
                y = {
                    readyState: 0,
                    getResponseHeader: function (a) {
                        var b;
                        if (k) {
                            if (!h) {
                                h = {};
                                while (b = Bb.exec(g)) h[b[1].toLowerCase()] = b[2]
                            }
                            b = h[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function () {
                        return k ? g : null
                    },
                    setRequestHeader: function (a, b) {
                        return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this
                    },
                    overrideMimeType: function (a) {
                        return null == k && (o.mimeType = a), this
                    },
                    statusCode: function (a) {
                        var b;
                        if (a)
                            if (k) y.always(a[y.status]);
                            else
                                for (b in a) u[b] = [u[b], a[b]];
                        return this
                    },
                    abort: function (a) {
                        var b = a || x;
                        return e && e.abort(b), A(0, b), this
                    }
                };
            if (s.promise(y), o.url = ((b || o.url || qb.href) + "").replace(Eb, qb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(K) || [""], null == o.crossDomain) {
                j = d.createElement("a");
                try {
                    j.href = o.url, j.href = j.href, o.crossDomain = Ib.protocol + "//" + Ib.host != j.protocol + "//" + j.host
                } catch (z) {
                    o.crossDomain = !0
                }
            }
            if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Kb(Fb, o, c, y), k) return y;
            l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Db.test(o.type), f = o.url.replace(zb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(yb, "+")) : (n = o.url.slice(f.length), o.data && (f += (sb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Ab, "$1"), n = (sb.test(f) ? "&" : "?") + "_=" + rb++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Hb + "; q=0.01" : "") : o.accepts["*"]);
            for (m in o.headers) y.setRequestHeader(m, o.headers[m]);
            if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();
            if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Kb(Gb, o, c, y)) {
                if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;
                o.async && o.timeout > 0 && (i = a.setTimeout(function () {
                    y.abort("timeout")
                }, o.timeout));
                try {
                    k = !1, e.send(v, A)
                } catch (z) {
                    if (k) throw z;
                    A(-1, z)
                }
            } else A(-1, "No Transport");

            function A(b, c, d, h) {
                var j, m, n, v, w, x = c;
                k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Mb(o, y, d)), v = Nb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")))
            }
            return y
        },
        getJSON: function (a, b, c) {
            return r.get(a, b, c, "json")
        },
        getScript: function (a, b) {
            return r.get(a, void 0, b, "script")
        }
    }), r.each(["get", "post"], function (a, b) {
        r[b] = function (a, c, d, e) {
            return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, r.isPlainObject(a) && a))
        }
    }), r._evalUrl = function (a) {
        return r.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, r.fn.extend({
        wrapAll: function (a) {
            var b;
            return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                var a = this;
                while (a.firstElementChild) a = a.firstElementChild;
                return a
            }).append(this)), this
        },
        wrapInner: function (a) {
            return r.isFunction(a) ? this.each(function (b) {
                r(this).wrapInner(a.call(this, b))
            }) : this.each(function () {
                var b = r(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function (a) {
            var b = r.isFunction(a);
            return this.each(function (c) {
                r(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function (a) {
            return this.parent(a).not("body").each(function () {
                r(this).replaceWith(this.childNodes)
            }), this
        }
    }), r.expr.pseudos.hidden = function (a) {
        return !r.expr.pseudos.visible(a)
    }, r.expr.pseudos.visible = function (a) {
        return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
    }, r.ajaxSettings.xhr = function () {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    };
    var Ob = {
            0: 200,
            1223: 204
        },
        Pb = r.ajaxSettings.xhr();
    o.cors = !!Pb && "withCredentials" in Pb, o.ajax = Pb = !!Pb, r.ajaxTransport(function (b) {
        var c, d;
        if (o.cors || Pb && !b.crossDomain) return {
            send: function (e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                    for (g in b.xhrFields) h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e) h.setRequestHeader(g, e[g]);
                c = function (a) {
                    return function () {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Ob[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                            binary: h.response
                        } : {
                            text: h.responseText
                        }, h.getAllResponseHeaders()))
                    }
                }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
                    4 === h.readyState && a.setTimeout(function () {
                        c && d()
                    })
                }, c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null)
                } catch (i) {
                    if (c) throw i
                }
            },
            abort: function () {
                c && c()
            }
        }
    }), r.ajaxPrefilter(function (a) {
        a.crossDomain && (a.contents.script = !1)
    }), r.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (a) {
                return r.globalEval(a), a
            }
        }
    }), r.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), r.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function (e, f) {
                    b = r("<script>").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function (a) {
                        b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type)
                    }), d.head.appendChild(b[0])
                },
                abort: function () {
                    c && c()
                }
            }
        }
    });
    var Qb = [],
        Rb = /(=)\?(?=&|$)|\?\?/;
    r.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var a = Qb.pop() || r.expando + "_" + rb++;
            return this[a] = !0, a
        }
    }), r.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Rb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Rb.test(b.data) && "data");
        if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Rb, "$1" + e) : b.jsonp !== !1 && (b.url += (sb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || r.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments
        }, d.always(function () {
            void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Qb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0
        }), "script"
    }), o.createHTMLDocument = function () {
        var a = d.implementation.createHTMLDocument("").body;
        return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length
    }(), r.parseHTML = function (a, b, c) {
        if ("string" != typeof a) return [];
        "boolean" == typeof b && (c = b, b = !1);
        var e, f, g;
        return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = B.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = pa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes))
    }, r.fn.load = function (a, b, c) {
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = mb(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && r.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function (a) {
            f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a)
        }).always(c && function (a, b) {
            g.each(function () {
                c.apply(this, f || [a.responseText, b, a])
            })
        }), this
    }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        r.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), r.expr.pseudos.animated = function (a) {
        return r.grep(r.timers, function (b) {
            return a === b.elem
        }).length
    };

    function Sb(a) {
        return r.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    r.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = r.css(a, "position"),
                l = r(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, r.fn.extend({
        offset: function (a) {
            if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                r.offset.setOffset(this, a, b)
            });
            var b, c, d, e, f = this[0];
            if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), d.width || d.height ? (e = f.ownerDocument, c = Sb(e), b = e.documentElement, {
                top: d.top + c.pageYOffset - b.clientTop,
                left: d.left + c.pageXOffset - b.clientLeft
            }) : d) : {
                top: 0,
                left: 0
            }
        },
        position: function () {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), r.nodeName(a[0], "html") || (d = a.offset()), d = {
                    top: d.top + r.css(a[0], "borderTopWidth", !0),
                    left: d.left + r.css(a[0], "borderLeftWidth", !0)
                }), {
                    top: b.top - d.top - r.css(c, "marginTop", !0),
                    left: b.left - d.left - r.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent;
                while (a && "static" === r.css(a, "position")) a = a.offsetParent;
                return a || qa
            })
        }
    }), r.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (a, b) {
        var c = "pageYOffset" === b;
        r.fn[a] = function (d) {
            return S(this, function (a, d, e) {
                var f = Sb(a);
                return void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
            }, a, d, arguments.length)
        }
    }), r.each(["top", "left"], function (a, b) {
        r.cssHooks[b] = Oa(o.pixelPosition, function (a, c) {
            if (c) return c = Na(a, b), La.test(c) ? r(a).position()[b] + "px" : c
        })
    }), r.each({
        Height: "height",
        Width: "width"
    }, function (a, b) {
        r.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function (c, d) {
            r.fn[d] = function (e, f) {
                var g = arguments.length && (c || "boolean" != typeof e),
                    h = c || (e === !0 || f === !0 ? "margin" : "border");
                return S(this, function (b, c, e) {
                    var f;
                    return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h)
                }, b, g ? e : void 0, g)
            }
        })
    }), r.fn.extend({
        bind: function (a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function (a, b) {
            return this.off(a, null, b)
        },
        delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    }), r.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function () {
        return r
    });
    var Tb = a.jQuery,
        Ub = a.$;
    return r.noConflict = function (b) {
        return a.$ === r && (a.$ = Ub), b && a.jQuery === r && (a.jQuery = Tb), r
    }, b || (a.jQuery = a.$ = r), r
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