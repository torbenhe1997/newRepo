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

    let template = document.createElement("template");
    template.innerHTML = `
			<style>
				:host {
					display: block;
                    overflow-x: scroll;
				} 
			</style> 
			<div id="chart_div">
            </div>
            <a id="exportCSV" href="">Excel</a>
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
                  ['Mike',  {v: 10000, f: '$10,000'}, true],
                  ['Jim',   {v:8000,   f: '$8,000'},  false],
                  ['Alice', {v: 12500, f: '$12,500'}, true],
                  ['Bob',   {v: 7000,  f: '$7,000'},  true],
                  ['Mike',  {v: 10000, f: '$10,000'}, true],
                  ['Jim',   {v:8000,   f: '$8,000'},  false],
                  ['Alice', {v: 12500, f: '$12,500'}, true],
                  ['Bob',   {v: 7000,  f: '$7,000'},  true], ['Mike',  {v: 10000, f: '$10,000'}, true],
                  ['Jim',   {v:8000,   f: '$8,000'},  false],
                  ['Alice', {v: 12500, f: '$12,500'}, true],
                  ['Bob',   {v: 7000,  f: '$7,000'},  true],
                  ['Mike',  {v: 10000, f: '$10,000'}, true],
                  ['Jim',   {v:8000,   f: '$8,000'},  false],
                  ['Alice', {v: 12500, f: '$12,500'}, true],
                  ['Bob',   {v: 7000,  f: '$7,000'},  true],
                  ['Mike',  {v: 10000, f: '$10,000'}, true],
                  ['Jim',   {v:8000,   f: '$8,000'},  false],
                  ['Alice', {v: 12500, f: '$12,500'}, true],
                  ['Bob',   {v: 7000,  f: '$7,000'},  true],
                  ['Mike',  {v: 10000, f: '$10,000'}, true],
                  ['Jim',   {v:8000,   f: '$8,000'},  false],
                  ['Alice', {v: 12500, f: '$12,500'}, true],
                  ['Bob',   {v: 7000,  f: '$7,000'},  true],
                  ['Mike',  {v: 10000, f: '$10,000'}, true],
                  ['Jim',   {v:8000,   f: '$8,000'},  false],
                  ['Alice', {v: 12500, f: '$12,500'}, true],
                  ['Bob',   {v: 7000,  f: '$7,000'},  true],
                  ['Mike',  {v: 10000, f: '$10,000'}, true],
                  ['Jim',   {v:8000,   f: '$8,000'},  false],
                  ['Alice', {v: 12500, f: '$12,500'}, true],
                  ['Bob',   {v: 7000,  f: '$7,000'},  true],
                  ['Mike',  {v: 10000, f: '$10,000'}, true],
                  ['Jim',   {v:8000,   f: '$8,000'},  false],
                  ['Alice', {v: 12500, f: '$12,500'}, true],
                  ['Bob',   {v: 7000,  f: '$7,000'},  true], ['Mike',  {v: 10000, f: '$10,000'}, true],
                  ['Jim',   {v:8000,   f: '$8,000'},  false],
                  ['Alice', {v: 12500, f: '$12,500'}, true],
                  ['Bob',   {v: 7000,  f: '$7,000'},  true],
                  ['Mike',  {v: 10000, f: '$10,000'}, true],
                  ['Jim',   {v:8000,   f: '$8,000'},  false],
                  ['Alice', {v: 12500, f: '$12,500'}, true],
                  ['Bob',   {v: 7000,  f: '$7,000'},  true],
                  ['Mike',  {v: 10000, f: '$10,000'}, true],
                  ['Jim',   {v:8000,   f: '$8,000'},  false],
                  ['Alice', {v: 12500, f: '$12,500'}, true],
                  ['Bob',   {v: 7000,  f: '$7,000'},  true],
                  ['Mike',  {v: 10000, f: '$10,000'}, true],
                  ['Jim',   {v:8000,   f: '$8,000'},  false],
                  ['Alice', {v: 12500, f: '$12,500'}, true],
                  ['Bob',   {v: 7000,  f: '$7,000'},  true],
                  ['Mike',  {v: 10000, f: '$10,000'}, true],
                  ['Jim',   {v:8000,   f: '$8,000'},  false],
                  ['Alice', {v: 12500, f: '$12,500'}, true],
                  ['Bob',   {v: 7000,  f: '$7,000'},  true],
                  ['Mike',  {v: 10000, f: '$10,000'}, true],
                  ['Jim',   {v:8000,   f: '$8,000'},  false],
                  ['Alice', {v: 12500, f: '$12,500'}, true],
                  ['Bob',   {v: 7000,  f: '$7,000'},  true],
                  ['Mike',  {v: 10000, f: '$10,000'}, true],
                  ['Jim',   {v:8000,   f: '$8,000'},  false],
                  ['Alice', {v: 12500, f: '$12,500'}, true],
                  ['Bob',   {v: 7000,  f: '$7,000'},  true], ['Mike',  {v: 10000, f: '$10,000'}, true],
                  ['Jim',   {v:8000,   f: '$8,000'},  false],
                  ['Alice', {v: 12500, f: '$12,500'}, true],
                  ['Bob',   {v: 7000,  f: '$7,000'},  true],
                  ['Mike',  {v: 10000, f: '$10,000'}, true],
                  ['Jim',   {v:8000,   f: '$8,000'},  false],
                  ['Alice', {v: 12500, f: '$12,500'}, true],
                  ['Bob',   {v: 7000,  f: '$7,000'},  true],
                  ['Mike',  {v: 10000, f: '$10,000'}, true],
                  ['Jim',   {v:8000,   f: '$8,000'},  false],
                  ['Alice', {v: 12500, f: '$12,500'}, true],
                  ['Bob',   {v: 7000,  f: '$7,000'},  true],
                  ['Mike',  {v: 10000, f: '$10,000'}, true],
                  ['Jim',   {v:8000,   f: '$8,000'},  false],
                  ['Alice', {v: 12500, f: '$12,500'}, true],
                  ['Bob',   {v: 7000,  f: '$7,000'},  true],
                  ['Mike',  {v: 10000, f: '$10,000'}, true],
                  ['Jim',   {v:8000,   f: '$8,000'},  false],
                  ['Alice', {v: 12500, f: '$12,500'}, true],
                  ['Bob',   {v: 7000,  f: '$7,000'},  true]
                                  ]);
        
                var table = new google.visualization.Table(ctx);
        
                table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});


               var table2 = new google.visualization.ChartWrapper({
                    chartType: 'Table',
                    containerId: 'div_table',
                    options: {allowHtml: true}
                });


  
                document.getElementById("exportCSV").setOnLoadCallback(function() {
                    var csvData = table2.getDataTable(); //google visualization DataTable to download
                    export_CSV("exportCSV", csvData);
                });


                    function export_CSV(elementID, data2) {

                        var csvColumns;
                        var csvContent;
                        var downloadLink;
                    
                        // build column headings
                        csvColumns = '';
                        for (var i = 0; i < data2.getNumberOfColumns(); i++) {
                            csvColumns += data2.getColumnLabel(i);
                            if (i < data2.getNumberOfColumns() - 1) {
                                csvColumns += ',';
                            }
                        }
                        csvColumns += '\n';
                    
                        // get data rows
                        csvContent = csvColumns + google.visualization.dataTableToCsv(data2);
                    
                        //New Download Link - works in chrome and mozilla
                        downloadLink = this.shadowRoot.getElementById(elementID);
                        downloadLink.href = 'data:text/csv;charset=utf-8,' + encodeURI(csvContent);
                        downloadLink.download = 'data.csv';
                        downloadLink.target = '_blank';

                        console.log("downloadLink");

                        console.log(downloadLink);
                    }
            
    
   

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
    customElements.define('com-sap-sample-helloworld1',HelloWorld1);
})();