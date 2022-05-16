function Dg(e, t) {
    return t.forEach(function(r) {
        r && typeof r != "string" && !Array.isArray(r) && Object.keys(r).forEach(function(n) {
            if (n !== "default" && !(n in e)) {
                var i = Object.getOwnPropertyDescriptor(r, n);
                Object.defineProperty(e, n, i.get ? i : { enumerable: !0, get: function() { return r[n] } })
            }
        })
    }), Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }))
}
const jg = function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
    new MutationObserver(i => {
        for (const a of i)
            if (a.type === "childList")
                for (const o of a.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && n(o)
    }).observe(document, { childList: !0, subtree: !0 });

    function r(i) { const a = {}; return i.integrity && (a.integrity = i.integrity), i.referrerpolicy && (a.referrerPolicy = i.referrerpolicy), i.crossorigin === "use-credentials" ? a.credentials = "include" : i.crossorigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a }

    function n(i) {
        if (i.ep) return;
        i.ep = !0;
        const a = r(i);
        fetch(i.href, a)
    }
};
jg();
var ka = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
    w = { exports: {} },
    j = {}; /** * @license React * react.production.min.js * * Copyright (c) Facebook, Inc. and its affiliates. * * This source code is licensed under the MIT license found in the * LICENSE file in the root directory of this source tree. */
var ra = Symbol.for("react.element"),
    Wg = Symbol.for("react.portal"),
    Hg = Symbol.for("react.fragment"),
    Ug = Symbol.for("react.strict_mode"),
    Qg = Symbol.for("react.profiler"),
    Vg = Symbol.for("react.provider"),
    qg = Symbol.for("react.context"),
    Kg = Symbol.for("react.forward_ref"),
    Gg = Symbol.for("react.suspense"),
    Yg = Symbol.for("react.memo"),
    Xg = Symbol.for("react.lazy"),
    Vd = Symbol.iterator;

function Zg(e) { return e === null || typeof e != "object" ? null : (e = Vd && e[Vd] || e["@@iterator"], typeof e == "function" ? e : null) }
var ep = { isMounted: function() { return !1 }, enqueueForceUpdate: function() {}, enqueueReplaceState: function() {}, enqueueSetState: function() {} },
    tp = Object.assign,
    rp = {};

function Kn(e, t, r) { this.props = e, this.context = t, this.refs = rp, this.updater = r || ep }
Kn.prototype.isReactComponent = {};
Kn.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
Kn.prototype.forceUpdate = function(e) { this.updater.enqueueForceUpdate(this, e, "forceUpdate") };

function np() {}
np.prototype = Kn.prototype;

function ic(e, t, r) { this.props = e, this.context = t, this.refs = rp, this.updater = r || ep }
var ac = ic.prototype = new np;
ac.constructor = ic;
tp(ac, Kn.prototype);
ac.isPureReactComponent = !0;
var qd = Array.isArray,
    ip = Object.prototype.hasOwnProperty,
    oc = { current: null },
    ap = { key: !0, ref: !0, __self: !0, __source: !0 };

function op(e, t, r) {
    var n, i = {},
        a = null,
        o = null;
    if (t != null)
        for (n in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (a = "" + t.key), t) ip.call(t, n) && !ap.hasOwnProperty(n) && (i[n] = t[n]);
    var l = arguments.length - 2;
    if (l === 1) i.children = r;
    else if (1 < l) {
        for (var s = Array(l), u = 0; u < l; u++) s[u] = arguments[u + 2];
        i.children = s
    }
    if (e && e.defaultProps)
        for (n in l = e.defaultProps, l) i[n] === void 0 && (i[n] = l[n]);
    return { $$typeof: ra, type: e, key: a, ref: o, props: i, _owner: oc.current }
}

function Jg(e, t) { return { $$typeof: ra, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner } }

function lc(e) { return typeof e == "object" && e !== null && e.$$typeof === ra }

function ey(e) { var t = { "=": "=0", ":": "=2" }; return "$" + e.replace(/[=:]/g, function(r) { return t[r] }) }
var Kd = /\/+/g;

function es(e, t) { return typeof e == "object" && e !== null && e.key != null ? ey("" + e.key) : t.toString(36) }

function ro(e, t, r, n, i) {
    var a = typeof e;
    (a === "undefined" || a === "boolean") && (e = null);
    var o = !1;
    if (e === null) o = !0;
    else switch (a) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case ra:
                case Wg:
                    o = !0
            }
    }
    if (o) return o = e, i = i(o), e = n === "" ? "." + es(o, 0) : n, qd(i) ? (r = "", e != null && (r = e.replace(Kd, "$&/") + "/"), ro(i, t, r, "", function(u) { return u })) : i != null && (lc(i) && (i = Jg(i, r + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(Kd, "$&/") + "/") + e)), t.push(i)), 1;
    if (o = 0, n = n === "" ? "." : n + ":", qd(e))
        for (var l = 0; l < e.length; l++) {
            a = e[l];
            var s = n + es(a, l);
            o += ro(a, t, r, s, i)
        } else if (s = Zg(e), typeof s == "function")
            for (e = s.call(e), l = 0; !(a = e.next()).done;) a = a.value, s = n + es(a, l++), o += ro(a, t, r, s, i);
        else if (a === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return o
}

function Ca(e, t, r) {
    if (e == null) return e;
    var n = [],
        i = 0;
    return ro(e, n, "", "", function(a) { return t.call(r, a, i++) }), n
}

function ty(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(r) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = r)
        }, function(r) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = r)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var Xe = { current: null },
    no = { transition: null },
    ry = { ReactCurrentDispatcher: Xe, ReactCurrentBatchConfig: no, ReactCurrentOwner: oc };
j.Children = { map: Ca, forEach: function(e, t, r) { Ca(e, function() { t.apply(this, arguments) }, r) }, count: function(e) { var t = 0; return Ca(e, function() { t++ }), t }, toArray: function(e) { return Ca(e, function(t) { return t }) || [] }, only: function(e) { if (!lc(e)) throw Error("React.Children.only expected to receive a single React element child."); return e } };
j.Component = Kn;
j.Fragment = Hg;
j.Profiler = Qg;
j.PureComponent = ic;
j.StrictMode = Ug;
j.Suspense = Gg;
j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ry;
j.cloneElement = function(e, t, r) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var n = tp({}, e.props),
        i = e.key,
        a = e.ref,
        o = e._owner;
    if (t != null) { if (t.ref !== void 0 && (a = t.ref, o = oc.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps; for (s in t) ip.call(t, s) && !ap.hasOwnProperty(s) && (n[s] = t[s] === void 0 && l !== void 0 ? l[s] : t[s]) }
    var s = arguments.length - 2;
    if (s === 1) n.children = r;
    else if (1 < s) {
        l = Array(s);
        for (var u = 0; u < s; u++) l[u] = arguments[u + 2];
        n.children = l
    }
    return { $$typeof: ra, type: e.type, key: i, ref: a, props: n, _owner: o }
};
j.createContext = function(e) { return e = { $$typeof: qg, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Vg, _context: e }, e.Consumer = e };
j.createElement = op;
j.createFactory = function(e) { var t = op.bind(null, e); return t.type = e, t };
j.createRef = function() { return { current: null } };
j.forwardRef = function(e) { return { $$typeof: Kg, render: e } };
j.isValidElement = lc;
j.lazy = function(e) { return { $$typeof: Xg, _payload: { _status: -1, _result: e }, _init: ty } };
j.memo = function(e, t) { return { $$typeof: Yg, type: e, compare: t === void 0 ? null : t } };
j.startTransition = function(e) {
    var t = no.transition;
    no.transition = {};
    try { e() } finally { no.transition = t }
};
j.unstable_act = function() { throw Error("act(...) is not supported in production builds of React.") };
j.useCallback = function(e, t) { return Xe.current.useCallback(e, t) };
j.useContext = function(e) { return Xe.current.useContext(e) };
j.useDebugValue = function() {};
j.useDeferredValue = function(e) { return Xe.current.useDeferredValue(e) };
j.useEffect = function(e, t) { return Xe.current.useEffect(e, t) };
j.useId = function() { return Xe.current.useId() };
j.useImperativeHandle = function(e, t, r) { return Xe.current.useImperativeHandle(e, t, r) };
j.useInsertionEffect = function(e, t) { return Xe.current.useInsertionEffect(e, t) };
j.useLayoutEffect = function(e, t) { return Xe.current.useLayoutEffect(e, t) };
j.useMemo = function(e, t) { return Xe.current.useMemo(e, t) };
j.useReducer = function(e, t, r) { return Xe.current.useReducer(e, t, r) };
j.useRef = function(e) { return Xe.current.useRef(e) };
j.useState = function(e) { return Xe.current.useState(e) };
j.useSyncExternalStore = function(e, t, r) { return Xe.current.useSyncExternalStore(e, t, r) };
j.useTransition = function() { return Xe.current.useTransition() };
j.version = "18.1.0";
w.exports = j;
var he = w.exports,
    Bn = Dg({ __proto__: null, default: he }, [w.exports]);

function ny(e) {
    if (e.sheet) return e.sheet;
    for (var t = 0; t < document.styleSheets.length; t++)
        if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
}

function iy(e) { var t = document.createElement("style"); return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t }
var ay = function() {
        function e(r) {
            var n = this;
            this._insertTag = function(i) {
                var a;
                n.tags.length === 0 ? n.insertionPoint ? a = n.insertionPoint.nextSibling : n.prepend ? a = n.container.firstChild : a = n.before : a = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(i, a), n.tags.push(i)
            }, this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null
        }
        var t = e.prototype;
        return t.hydrate = function(n) { n.forEach(this._insertTag) }, t.insert = function(n) {
            this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(iy(this));
            var i = this.tags[this.tags.length - 1];
            if (this.isSpeedy) { var a = ny(i); try { a.insertRule(n, a.cssRules.length) } catch {} } else i.appendChild(document.createTextNode(n));
            this.ctr++
        }, t.flush = function() { this.tags.forEach(function(n) { return n.parentNode && n.parentNode.removeChild(n) }), this.tags = [], this.ctr = 0 }, e
    }(),
    He = "-ms-",
    ko = "-moz-",
    Y = "-webkit-",
    lp = "comm",
    sc = "rule",
    uc = "decl",
    oy = "@import",
    sp = "@keyframes",
    ly = Math.abs,
    ul = String.fromCharCode,
    sy = Object.assign;

function uy(e, t) { return (((t << 2 ^ Je(e, 0)) << 2 ^ Je(e, 1)) << 2 ^ Je(e, 2)) << 2 ^ Je(e, 3) }

function up(e) { return e.trim() }

function cy(e, t) { return (e = t.exec(e)) ? e[0] : e }

function J(e, t, r) { return e.replace(t, r) }

function js(e, t) { return e.indexOf(t) }

function Je(e, t) { return e.charCodeAt(t) | 0 }

function $i(e, t, r) { return e.slice(t, r) }

function Vt(e) { return e.length }

function cc(e) { return e.length }

function _a(e, t) { return t.push(e), e }

function dy(e, t) { return e.map(t).join("") }
var cl = 1,
    Ln = 1,
    cp = 0,
    ot = 0,
    _e = 0,
    Gn = "";

function dl(e, t, r, n, i, a, o) { return { value: e, root: t, parent: r, type: n, props: i, children: a, line: cl, column: Ln, length: o, return: "" } }

function ni(e, t) { return sy(dl("", null, null, "", null, null, 0), e, { length: -e.length }, t) }

function fy() { return _e }

function hy() { return _e = ot > 0 ? Je(Gn, --ot) : 0, Ln--, _e === 10 && (Ln = 1, cl--), _e }

function dt() { return _e = ot < cp ? Je(Gn, ot++) : 0, Ln++, _e === 10 && (Ln = 1, cl++), _e }

function Xt() { return Je(Gn, ot) }

function io() { return ot }

function na(e, t) { return $i(Gn, e, t) }

function zi(e) {
    switch (e) {
        case 0:
        case 9:
        case 10:
        case 13:
        case 32:
            return 5;
        case 33:
        case 43:
        case 44:
        case 47:
        case 62:
        case 64:
        case 126:
        case 59:
        case 123:
        case 125:
            return 4;
        case 58:
            return 3;
        case 34:
        case 39:
        case 40:
        case 91:
            return 2;
        case 41:
        case 93:
            return 1
    }
    return 0
}

function dp(e) { return cl = Ln = 1, cp = Vt(Gn = e), ot = 0, [] }

function fp(e) { return Gn = "", e }

function ao(e) { return up(na(ot - 1, Ws(e === 91 ? e + 2 : e === 40 ? e + 1 : e))) }

function py(e) {
    for (;
        (_e = Xt()) && _e < 33;) dt();
    return zi(e) > 2 || zi(_e) > 3 ? "" : " "
}

function vy(e, t) { for (; --t && dt() && !(_e < 48 || _e > 102 || _e > 57 && _e < 65 || _e > 70 && _e < 97);); return na(e, io() + (t < 6 && Xt() == 32 && dt() == 32)) }

function Ws(e) {
    for (; dt();) switch (_e) {
        case e:
            return ot;
        case 34:
        case 39:
            e !== 34 && e !== 39 && Ws(_e);
            break;
        case 40:
            e === 41 && Ws(e);
            break;
        case 92:
            dt();
            break
    }
    return ot
}

function my(e, t) {
    for (; dt() && e + _e !== 47 + 10;)
        if (e + _e === 42 + 42 && Xt() === 47) break;
    return "/*" + na(t, ot - 1) + "*" + ul(e === 47 ? e : dt())
}

function gy(e) { for (; !zi(Xt());) dt(); return na(e, ot) }

function yy(e) { return fp(oo("", null, null, null, [""], e = dp(e), 0, [0], e)) }

function oo(e, t, r, n, i, a, o, l, s) {
    for (var u = 0, c = 0, p = o, h = 0, g = 0, y = 0, x = 1, R = 1, v = 1, d = 0, m = "", C = i, E = a, P = n, _ = m; R;) switch (y = d, d = dt()) {
        case 40:
            if (y != 108 && _.charCodeAt(p - 1) == 58) { js(_ += J(ao(d), "&", "&\f"), "&\f") != -1 && (v = -1); break }
        case 34:
        case 39:
        case 91:
            _ += ao(d);
            break;
        case 9:
        case 10:
        case 13:
        case 32:
            _ += py(y);
            break;
        case 92:
            _ += vy(io() - 1, 7);
            continue;
        case 47:
            switch (Xt()) {
                case 42:
                case 47:
                    _a(by(my(dt(), io()), t, r), s);
                    break;
                default:
                    _ += "/"
            }
            break;
        case 123 * x:
            l[u++] = Vt(_) * v;
        case 125 * x:
        case 59:
        case 0:
            switch (d) {
                case 0:
                case 125:
                    R = 0;
                case 59 + c:
                    g > 0 && Vt(_) - p && _a(g > 32 ? Yd(_ + ";", n, r, p - 1) : Yd(J(_, " ", "") + ";", n, r, p - 2), s);
                    break;
                case 59:
                    _ += ";";
                default:
                    if (_a(P = Gd(_, t, r, u, c, i, l, m, C = [], E = [], p), a), d === 123)
                        if (c === 0) oo(_, t, P, P, C, a, p, l, E);
                        else switch (h) {
                            case 100:
                            case 109:
                            case 115:
                                oo(e, P, P, n && _a(Gd(e, P, P, 0, 0, i, l, m, i, C = [], p), E), i, E, p, l, n ? C : E);
                                break;
                            default:
                                oo(_, P, P, P, [""], E, 0, l, E)
                        }
            }
            u = c = g = 0, x = v = 1, m = _ = "", p = o;
            break;
        case 58:
            p = 1 + Vt(_), g = y;
        default:
            if (x < 1) {
                if (d == 123) --x;
                else if (d == 125 && x++ == 0 && hy() == 125) continue
            }
            switch (_ += ul(d), d * x) {
                case 38:
                    v = c > 0 ? 1 : (_ += "\f", -1);
                    break;
                case 44:
                    l[u++] = (Vt(_) - 1) * v, v = 1;
                    break;
                case 64:
                    Xt() === 45 && (_ += ao(dt())), h = Xt(), c = p = Vt(m = _ += gy(io())), d++;
                    break;
                case 45:
                    y === 45 && Vt(_) == 2 && (x = 0)
            }
    }
    return a
}

function Gd(e, t, r, n, i, a, o, l, s, u, c) {
    for (var p = i - 1, h = i === 0 ? a : [""], g = cc(h), y = 0, x = 0, R = 0; y < n; ++y)
        for (var v = 0, d = $i(e, p + 1, p = ly(x = o[y])), m = e; v < g; ++v)(m = up(x > 0 ? h[v] + " " + d : J(d, /&\f/g, h[v]))) && (s[R++] = m);
    return dl(e, t, r, i === 0 ? sc : l, s, u, c)
}

function by(e, t, r) { return dl(e, t, r, lp, ul(fy()), $i(e, 2, -2), 0) }

function Yd(e, t, r, n) { return dl(e, t, r, uc, $i(e, 0, n), $i(e, n + 1, -1), n) }

function hp(e, t) {
    switch (uy(e, t)) {
        case 5103:
            return Y + "print-" + e + e;
        case 5737:
        case 4201:
        case 3177:
        case 3433:
        case 1641:
        case 4457:
        case 2921:
        case 5572:
        case 6356:
        case 5844:
        case 3191:
        case 6645:
        case 3005:
        case 6391:
        case 5879:
        case 5623:
        case 6135:
        case 4599:
        case 4855:
        case 4215:
        case 6389:
        case 5109:
        case 5365:
        case 5621:
        case 3829:
            return Y + e + e;
        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
            return Y + e + ko + e + He + e + e;
        case 6828:
        case 4268:
            return Y + e + He + e + e;
        case 6165:
            return Y + e + He + "flex-" + e + e;
        case 5187:
            return Y + e + J(e, /(\w+).+(:[^]+)/, Y + "box-$1$2" + He + "flex-$1$2") + e;
        case 5443:
            return Y + e + He + "flex-item-" + J(e, /flex-|-self/, "") + e;
        case 4675:
            return Y + e + He + "flex-line-pack" + J(e, /align-content|flex-|-self/, "") + e;
        case 5548:
            return Y + e + He + J(e, "shrink", "negative") + e;
        case 5292:
            return Y + e + He + J(e, "basis", "preferred-size") + e;
        case 6060:
            return Y + "box-" + J(e, "-grow", "") + Y + e + He + J(e, "grow", "positive") + e;
        case 4554:
            return Y + J(e, /([^-])(transform)/g, "$1" + Y + "$2") + e;
        case 6187:
            return J(J(J(e, /(zoom-|grab)/, Y + "$1"), /(image-set)/, Y + "$1"), e, "") + e;
        case 5495:
        case 3959:
            return J(e, /(image-set\([^]*)/, Y + "$1$`$1");
        case 4968:
            return J(J(e, /(.+:)(flex-)?(.*)/, Y + "box-pack:$3" + He + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Y + e + e;
        case 4095:
        case 3583:
        case 4068:
        case 2532:
            return J(e, /(.+)-inline(.+)/, Y + "$1$2") + e;
        case 8116:
        case 7059:
        case 5753:
        case 5535:
        case 5445:
        case 5701:
        case 4933:
        case 4677:
        case 5533:
        case 5789:
        case 5021:
        case 4765:
            if (Vt(e) - 1 - t > 6) switch (Je(e, t + 1)) {
                case 109:
                    if (Je(e, t + 4) !== 45) break;
                case 102:
                    return J(e, /(.+:)(.+)-([^]+)/, "$1" + Y + "$2-$3$1" + ko + (Je(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
                case 115:
                    return ~js(e, "stretch") ? hp(J(e, "stretch", "fill-available"), t) + e : e
            }
            break;
        case 4949:
            if (Je(e, t + 1) !== 115) break;
        case 6444:
            switch (Je(e, Vt(e) - 3 - (~js(e, "!important") && 10))) {
                case 107:
                    return J(e, ":", ":" + Y) + e;
                case 101:
                    return J(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Y + (Je(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Y + "$2$3$1" + He + "$2box$3") + e
            }
            break;
        case 5936:
            switch (Je(e, t + 11)) {
                case 114:
                    return Y + e + He + J(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
                case 108:
                    return Y + e + He + J(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
                case 45:
                    return Y + e + He + J(e, /[svh]\w+-[tblr]{2}/, "lr") + e
            }
            return Y + e + He + e + e
    }
    return e
}

function Rn(e, t) { for (var r = "", n = cc(e), i = 0; i < n; i++) r += t(e[i], i, e, t) || ""; return r }

function Sy(e, t, r, n) {
    switch (e.type) {
        case oy:
        case uc:
            return e.return = e.return || e.value;
        case lp:
            return "";
        case sp:
            return e.return = e.value + "{" + Rn(e.children, n) + "}";
        case sc:
            e.value = e.props.join(",")
    }
    return Vt(r = Rn(e.children, n)) ? e.return = e.value + "{" + r + "}" : ""
}

function xy(e) { var t = cc(e); return function(r, n, i, a) { for (var o = "", l = 0; l < t; l++) o += e[l](r, n, i, a) || ""; return o } }

function wy(e) { return function(t) { t.root || (t = t.return) && e(t) } }

function ky(e, t, r, n) {
    if (e.length > -1 && !e.return) switch (e.type) {
        case uc:
            e.return = hp(e.value, e.length);
            break;
        case sp:
            return Rn([ni(e, { value: J(e.value, "@", "@" + Y) })], n);
        case sc:
            if (e.length) return dy(e.props, function(i) {
                switch (cy(i, /(::plac\w+|:read-\w+)/)) {
                    case ":read-only":
                    case ":read-write":
                        return Rn([ni(e, { props: [J(i, /:(read-\w+)/, ":" + ko + "$1")] })], n);
                    case "::placeholder":
                        return Rn([ni(e, { props: [J(i, /:(plac\w+)/, ":" + Y + "input-$1")] }), ni(e, { props: [J(i, /:(plac\w+)/, ":" + ko + "$1")] }), ni(e, { props: [J(i, /:(plac\w+)/, He + "input-$1")] })], n)
                }
                return ""
            })
    }
}
var Xd = function(t) { var r = new WeakMap; return function(n) { if (r.has(n)) return r.get(n); var i = t(n); return r.set(n, i), i } };

function pp(e) { var t = Object.create(null); return function(r) { return t[r] === void 0 && (t[r] = e(r)), t[r] } }
var Cy = function(t, r, n) { for (var i = 0, a = 0; i = a, a = Xt(), i === 38 && a === 12 && (r[n] = 1), !zi(a);) dt(); return na(t, ot) },
    _y = function(t, r) {
        var n = -1,
            i = 44;
        do switch (zi(i)) {
            case 0:
                i === 38 && Xt() === 12 && (r[n] = 1), t[n] += Cy(ot - 1, r, n);
                break;
            case 2:
                t[n] += ao(i);
                break;
            case 4:
                if (i === 44) { t[++n] = Xt() === 58 ? "&\f" : "", r[n] = t[n].length; break }
            default:
                t[n] += ul(i)
        }
        while (i = dt());
        return t
    },
    Ey = function(t, r) { return fp(_y(dp(t), r)) },
    Zd = new WeakMap,
    Py = function(t) {
        if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
            for (var r = t.value, n = t.parent, i = t.column === n.column && t.line === n.line; n.type !== "rule";)
                if (n = n.parent, !n) return;
            if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Zd.get(n)) && !i) {
                Zd.set(t, !0);
                for (var a = [], o = Ey(r, a), l = n.props, s = 0, u = 0; s < o.length; s++)
                    for (var c = 0; c < l.length; c++, u++) t.props[u] = a[s] ? o[s].replace(/&\f/g, l[c]) : l[c] + " " + o[s]
            }
        }
    },
    Ty = function(t) {
        if (t.type === "decl") {
            var r = t.value;
            r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && (t.return = "", t.value = "")
        }
    },
    Ry = [ky],
    Oy = function(t) {
        var r = t.key;
        if (r === "css") {
            var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
            Array.prototype.forEach.call(n, function(x) {
                var R = x.getAttribute("data-emotion");
                R.indexOf(" ") !== -1 && (document.head.appendChild(x), x.setAttribute("data-s", ""))
            })
        }
        var i = t.stylisPlugins || Ry,
            a = {},
            o, l = [];
        o = t.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + r + ' "]'), function(x) {
            for (var R = x.getAttribute("data-emotion").split(" "), v = 1; v < R.length; v++) a[R[v]] = !0;
            l.push(x)
        });
        var s, u = [Py, Ty]; {
            var c, p = [Sy, wy(function(x) { c.insert(x) })],
                h = xy(u.concat(i, p)),
                g = function(R) { return Rn(yy(R), h) };
            s = function(R, v, d, m) { c = d, g(R ? R + "{" + v.styles + "}" : v.styles), m && (y.inserted[v.name] = !0) }
        }
        var y = { key: r, sheet: new ay({ key: r, container: o, nonce: t.nonce, speedy: t.speedy, prepend: t.prepend, insertionPoint: t.insertionPoint }), nonce: t.nonce, inserted: a, registered: {}, insert: s };
        return y.sheet.hydrate(l), y
    };

function Q() { return Q = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e }, Q.apply(this, arguments) }
var vp = { exports: {} },
    re = {}; /** @license React v16.13.1 * react-is.production.min.js * * Copyright (c) Facebook, Inc. and its affiliates. * * This source code is licensed under the MIT license found in the * LICENSE file in the root directory of this source tree. */
var Ie = typeof Symbol == "function" && Symbol.for,
    dc = Ie ? Symbol.for("react.element") : 60103,
    fc = Ie ? Symbol.for("react.portal") : 60106,
    fl = Ie ? Symbol.for("react.fragment") : 60107,
    hl = Ie ? Symbol.for("react.strict_mode") : 60108,
    pl = Ie ? Symbol.for("react.profiler") : 60114,
    vl = Ie ? Symbol.for("react.provider") : 60109,
    ml = Ie ? Symbol.for("react.context") : 60110,
    hc = Ie ? Symbol.for("react.async_mode") : 60111,
    gl = Ie ? Symbol.for("react.concurrent_mode") : 60111,
    yl = Ie ? Symbol.for("react.forward_ref") : 60112,
    bl = Ie ? Symbol.for("react.suspense") : 60113,
    $y = Ie ? Symbol.for("react.suspense_list") : 60120,
    Sl = Ie ? Symbol.for("react.memo") : 60115,
    xl = Ie ? Symbol.for("react.lazy") : 60116,
    zy = Ie ? Symbol.for("react.block") : 60121,
    Ay = Ie ? Symbol.for("react.fundamental") : 60117,
    Fy = Ie ? Symbol.for("react.responder") : 60118,
    Iy = Ie ? Symbol.for("react.scope") : 60119;

function vt(e) {
    if (typeof e == "object" && e !== null) {
        var t = e.$$typeof;
        switch (t) {
            case dc:
                switch (e = e.type, e) {
                    case hc:
                    case gl:
                    case fl:
                    case pl:
                    case hl:
                    case bl:
                        return e;
                    default:
                        switch (e = e && e.$$typeof, e) {
                            case ml:
                            case yl:
                            case xl:
                            case Sl:
                            case vl:
                                return e;
                            default:
                                return t
                        }
                }
            case fc:
                return t
        }
    }
}

function mp(e) { return vt(e) === gl }
re.AsyncMode = hc;
re.ConcurrentMode = gl;
re.ContextConsumer = ml;
re.ContextProvider = vl;
re.Element = dc;
re.ForwardRef = yl;
re.Fragment = fl;
re.Lazy = xl;
re.Memo = Sl;
re.Portal = fc;
re.Profiler = pl;
re.StrictMode = hl;
re.Suspense = bl;
re.isAsyncMode = function(e) { return mp(e) || vt(e) === hc };
re.isConcurrentMode = mp;
re.isContextConsumer = function(e) { return vt(e) === ml };
re.isContextProvider = function(e) { return vt(e) === vl };
re.isElement = function(e) { return typeof e == "object" && e !== null && e.$$typeof === dc };
re.isForwardRef = function(e) { return vt(e) === yl };
re.isFragment = function(e) { return vt(e) === fl };
re.isLazy = function(e) { return vt(e) === xl };
re.isMemo = function(e) { return vt(e) === Sl };
re.isPortal = function(e) { return vt(e) === fc };
re.isProfiler = function(e) { return vt(e) === pl };
re.isStrictMode = function(e) { return vt(e) === hl };
re.isSuspense = function(e) { return vt(e) === bl };
re.isValidElementType = function(e) { return typeof e == "string" || typeof e == "function" || e === fl || e === gl || e === pl || e === hl || e === bl || e === $y || typeof e == "object" && e !== null && (e.$$typeof === xl || e.$$typeof === Sl || e.$$typeof === vl || e.$$typeof === ml || e.$$typeof === yl || e.$$typeof === Ay || e.$$typeof === Fy || e.$$typeof === Iy || e.$$typeof === zy) };
re.typeOf = vt;
vp.exports = re;
var gp = vp.exports,
    My = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
    Ny = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
    yp = {};
yp[gp.ForwardRef] = My;
yp[gp.Memo] = Ny;
var By = !0;

function Ly(e, t, r) { var n = ""; return r.split(" ").forEach(function(i) { e[i] !== void 0 ? t.push(e[i] + ";") : n += i + " " }), n }
var bp = function(t, r, n) {
        var i = t.key + "-" + r.name;
        (n === !1 || By === !1) && t.registered[i] === void 0 && (t.registered[i] = r.styles)
    },
    Sp = function(t, r, n) {
        bp(t, r, n);
        var i = t.key + "-" + r.name;
        if (t.inserted[r.name] === void 0) {
            var a = r;
            do t.insert(r === a ? "." + i : "", a, t.sheet, !0), a = a.next; while (a !== void 0)
        }
    };

function Dy(e) {
    for (var t = 0, r, n = 0, i = e.length; i >= 4; ++n, i -= 4) r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= r >>> 24, t = (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
    switch (i) {
        case 3:
            t ^= (e.charCodeAt(n + 2) & 255) << 16;
        case 2:
            t ^= (e.charCodeAt(n + 1) & 255) << 8;
        case 1:
            t ^= e.charCodeAt(n) & 255, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16)
    }
    return t ^= t >>> 13, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36)
}
var jy = { animationIterationCount: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 },
    Wy = /[A-Z]|^ms/g,
    Hy = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
    xp = function(t) { return t.charCodeAt(1) === 45 },
    Jd = function(t) { return t != null && typeof t != "boolean" },
    ts = pp(function(e) { return xp(e) ? e : e.replace(Wy, "-$&").toLowerCase() }),
    ef = function(t, r) {
        switch (t) {
            case "animation":
            case "animationName":
                if (typeof r == "string") return r.replace(Hy, function(n, i, a) { return qt = { name: i, styles: a, next: qt }, i })
        }
        return jy[t] !== 1 && !xp(t) && typeof r == "number" && r !== 0 ? r + "px" : r
    };

function Ai(e, t, r) {
    if (r == null) return "";
    if (r.__emotion_styles !== void 0) return r;
    switch (typeof r) {
        case "boolean":
            return "";
        case "object":
            {
                if (r.anim === 1) return qt = { name: r.name, styles: r.styles, next: qt }, r.name;
                if (r.styles !== void 0) {
                    var n = r.next;
                    if (n !== void 0)
                        for (; n !== void 0;) qt = { name: n.name, styles: n.styles, next: qt }, n = n.next;
                    var i = r.styles + ";";
                    return i
                }
                return Uy(e, t, r)
            }
        case "function":
            {
                if (e !== void 0) {
                    var a = qt,
                        o = r(e);
                    return qt = a, Ai(e, t, o)
                }
                break
            }
    }
    if (t == null) return r;
    var l = t[r];
    return l !== void 0 ? l : r
}

function Uy(e, t, r) {
    var n = "";
    if (Array.isArray(r))
        for (var i = 0; i < r.length; i++) n += Ai(e, t, r[i]) + ";";
    else
        for (var a in r) {
            var o = r[a];
            if (typeof o != "object") t != null && t[o] !== void 0 ? n += a + "{" + t[o] + "}" : Jd(o) && (n += ts(a) + ":" + ef(a, o) + ";");
            else if (Array.isArray(o) && typeof o[0] == "string" && (t == null || t[o[0]] === void 0))
                for (var l = 0; l < o.length; l++) Jd(o[l]) && (n += ts(a) + ":" + ef(a, o[l]) + ";");
            else {
                var s = Ai(e, t, o);
                switch (a) {
                    case "animation":
                    case "animationName":
                        { n += ts(a) + ":" + s + ";"; break }
                    default:
                        n += a + "{" + s + "}"
                }
            }
        }
    return n
}
var tf = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
    qt, pc = function(t, r, n) {
        if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0) return t[0];
        var i = !0,
            a = "";
        qt = void 0;
        var o = t[0];
        o == null || o.raw === void 0 ? (i = !1, a += Ai(n, r, o)) : a += o[0];
        for (var l = 1; l < t.length; l++) a += Ai(n, r, t[l]), i && (a += o[l]);
        tf.lastIndex = 0;
        for (var s = "", u;
            (u = tf.exec(a)) !== null;) s += "-" + u[1];
        var c = Dy(a) + s;
        return { name: c, styles: a, next: qt }
    },
    wp = w.exports.createContext(typeof HTMLElement != "undefined" ? Oy({ key: "css" }) : null);
wp.Provider;
var kp = function(t) { return w.exports.forwardRef(function(r, n) { var i = w.exports.useContext(wp); return t(r, i, n) }) },
    Fi = w.exports.createContext({}),
    Qy = function(t, r) { if (typeof r == "function") { var n = r(t); return n } return Q({}, t, r) },
    Vy = Xd(function(e) { return Xd(function(t) { return Qy(e, t) }) }),
    qy = function(t) { var r = w.exports.useContext(Fi); return t.theme !== r && (r = Vy(r)(t.theme)), w.exports.createElement(Fi.Provider, { value: r }, t.children) };
Bn["useInsertionEffect"] && Bn["useInsertionEffect"];
var rf = Bn["useInsertionEffect"] ? Bn["useInsertionEffect"] : w.exports.useLayoutEffect,
    vc = kp(function(e, t) {
        var r = e.styles,
            n = pc([r], void 0, w.exports.useContext(Fi)),
            i = w.exports.useRef();
        return rf(function() {
            var a = t.key + "-global",
                o = new t.sheet.constructor({ key: a, nonce: t.sheet.nonce, container: t.sheet.container, speedy: t.sheet.isSpeedy }),
                l = !1,
                s = document.querySelector('style[data-emotion="' + a + " " + n.name + '"]');
            return t.sheet.tags.length && (o.before = t.sheet.tags[0]), s !== null && (l = !0, s.setAttribute("data-emotion", a), o.hydrate([s])), i.current = [o, l],
                function() { o.flush() }
        }, [t]), rf(function() {
            var a = i.current,
                o = a[0],
                l = a[1];
            if (l) { a[1] = !1; return }
            if (n.next !== void 0 && Sp(t, n.next, !0), o.tags.length) {
                var s = o.tags[o.tags.length - 1].nextElementSibling;
                o.before = s, o.flush()
            }
            t.insert("", n, o, !1)
        }, [t, n.name]), null
    });

function Ky() { for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r]; return pc(t) }
var un = function() {
        var t = Ky.apply(void 0, arguments),
            r = "animation-" + t.name;
        return { name: r, styles: "@keyframes " + r + "{" + t.styles + "}", anim: 1, toString: function() { return "_EMO_" + this.name + "_" + this.styles + "_EMO_" } }
    },
    Gy = function() { return w.exports.createElement(vc, { styles: ` html { line-height: 1.5; -webkit-text-size-adjust: 100%; font-family: system-ui, sans-serif; -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility; -moz-osx-font-smoothing: grayscale; touch-action: manipulation; } body { position: relative; min-height: 100%; font-feature-settings: 'kern'; } *, *::before, *::after { border-width: 0; border-style: solid; box-sizing: border-box; } main { display: block; } hr { border-top-width: 1px; box-sizing: content-box; height: 0; overflow: visible; } pre, code, kbd, samp { font-family: SFMono-Regular,  Menlo, Monaco, Consolas, monospace; font-size: 1em; } a { background-color: transparent; color: inherit; text-decoration: inherit; } abbr[title] { border-bottom: none; text-decoration: underline; -webkit-text-decoration: underline dotted; text-decoration: underline dotted; } b, strong { font-weight: bold; } small { font-size: 80%; } sub, sup { font-size: 75%; line-height: 0; position: relative; vertical-align: baseline; } sub { bottom: -0.25em; } sup { top: -0.5em; } img { border-style: none; } button, input, optgroup, select, textarea { font-family: inherit; font-size: 100%; line-height: 1.15; margin: 0; } button, input { overflow: visible; } button, select { text-transform: none; } button::-moz-focus-inner, [type="button"]::-moz-focus-inner, [type="reset"]::-moz-focus-inner, [type="submit"]::-moz-focus-inner { border-style: none; padding: 0; } fieldset { padding: 0.35em 0.75em 0.625em; } legend { box-sizing: border-box; color: inherit; display: table; max-width: 100%; padding: 0; white-space: normal; } progress { vertical-align: baseline; } textarea { overflow: auto; } [type="checkbox"], [type="radio"] { box-sizing: border-box; padding: 0; } [type="number"]::-webkit-inner-spin-button, [type="number"]::-webkit-outer-spin-button { -webkit-appearance: none !important; } input[type="number"] { -moz-appearance: textfield; } [type="search"] { -webkit-appearance: textfield; outline-offset: -2px; } [type="search"]::-webkit-search-decoration { -webkit-appearance: none !important; } ::-webkit-file-upload-button { -webkit-appearance: button; font: inherit; } details { display: block; } summary { display: list-item; } template { display: none; } [hidden] { display: none !important; } body, blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre { margin: 0; } button { background: transparent; padding: 0; } fieldset { margin: 0; padding: 0; } ol, ul { margin: 0; padding: 0; } textarea { resize: vertical; } button, [role="button"] { cursor: pointer; } button::-moz-focus-inner { border: 0 !important; } table { border-collapse: collapse; } h1, h2, h3, h4, h5, h6 { font-size: inherit; font-weight: inherit; } button, input, optgroup, select, textarea { padding: 0; line-height: inherit; color: inherit; } img, svg, video, canvas, audio, iframe, embed, object { display: block; } img, video { max-width: 100%; height: auto; } [data-js-focus-visible] :focus:not([data-focus-visible-added]) { outline: none; box-shadow: none; } select::-ms-expand { display: none; } ` }) },
    Yy = Gy,
    Hs = { exports: {} };
(function(e, t) {
    var r = 200,
        n = "__lodash_hash_undefined__",
        i = 800,
        a = 16,
        o = 9007199254740991,
        l = "[object Arguments]",
        s = "[object Array]",
        u = "[object AsyncFunction]",
        c = "[object Boolean]",
        p = "[object Date]",
        h = "[object Error]",
        g = "[object Function]",
        y = "[object GeneratorFunction]",
        x = "[object Map]",
        R = "[object Number]",
        v = "[object Null]",
        d = "[object Object]",
        m = "[object Proxy]",
        C = "[object RegExp]",
        E = "[object Set]",
        P = "[object String]",
        _ = "[object Undefined]",
        $ = "[object WeakMap]",
        M = "[object ArrayBuffer]",
        A = "[object DataView]",
        K = "[object Float32Array]",
        X = "[object Float64Array]",
        le = "[object Int8Array]",
        Pe = "[object Int16Array]",
        qe = "[object Int32Array]",
        Ae = "[object Uint8Array]",
        $t = "[object Uint8ClampedArray]",
        z = "[object Uint16Array]",
        N = "[object Uint32Array]",
        B = /[\\^$.*+?()[\]{}|]/g,
        ne = /^\[object .+?Constructor\]$/,
        be = /^(?:0|[1-9]\d*)$/,
        Z = {};
    Z[K] = Z[X] = Z[le] = Z[Pe] = Z[qe] = Z[Ae] = Z[$t] = Z[z] = Z[N] = !0, Z[l] = Z[s] = Z[M] = Z[c] = Z[A] = Z[p] = Z[h] = Z[g] = Z[x] = Z[R] = Z[d] = Z[C] = Z[E] = Z[P] = Z[$] = !1;
    var Wt = typeof ka == "object" && ka && ka.Object === Object && ka,
        Zn = typeof self == "object" && self && self.Object === Object && self,
        lt = Wt || Zn || Function("return this")(),
        jr = t && !t.nodeType && t,
        Jn = jr && !0 && e && !e.nodeType && e,
        Cd = Jn && Jn.exports === jr,
        Wl = Cd && Wt.process,
        _d = function() { try { var f = Jn && Jn.require && Jn.require("util").types; return f || Wl && Wl.binding && Wl.binding("util") } catch {} }(),
        Ed = _d && _d.isTypedArray;

    function P0(f, b, k) {
        switch (k.length) {
            case 0:
                return f.call(b);
            case 1:
                return f.call(b, k[0]);
            case 2:
                return f.call(b, k[0], k[1]);
            case 3:
                return f.call(b, k[0], k[1], k[2])
        }
        return f.apply(b, k)
    }

    function T0(f, b) { for (var k = -1, F = Array(f); ++k < f;) F[k] = b(k); return F }

    function R0(f) { return function(b) { return f(b) } }

    function O0(f, b) { return f == null ? void 0 : f[b] }

    function $0(f, b) { return function(k) { return f(b(k)) } }
    var z0 = Array.prototype,
        A0 = Function.prototype,
        va = Object.prototype,
        Hl = lt["__core-js_shared__"],
        ma = A0.toString,
        er = va.hasOwnProperty,
        Pd = function() { var f = /[^.]+$/.exec(Hl && Hl.keys && Hl.keys.IE_PROTO || ""); return f ? "Symbol(src)_1." + f : "" }(),
        Td = va.toString,
        F0 = ma.call(Object),
        I0 = RegExp("^" + ma.call(er).replace(B, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        ga = Cd ? lt.Buffer : void 0,
        Rd = lt.Symbol,
        Od = lt.Uint8Array,
        $d = ga ? ga.allocUnsafe : void 0,
        zd = $0(Object.getPrototypeOf, Object),
        Ad = Object.create,
        M0 = va.propertyIsEnumerable,
        N0 = z0.splice,
        Wr = Rd ? Rd.toStringTag : void 0,
        ya = function() { try { var f = Vl(Object, "defineProperty"); return f({}, "", {}), f } catch {} }(),
        B0 = ga ? ga.isBuffer : void 0,
        Fd = Math.max,
        L0 = Date.now,
        Id = Vl(lt, "Map"),
        ei = Vl(Object, "create"),
        D0 = function() {
            function f() {}
            return function(b) {
                if (!Ur(b)) return {};
                if (Ad) return Ad(b);
                f.prototype = b;
                var k = new f;
                return f.prototype = void 0, k
            }
        }();

    function Hr(f) {
        var b = -1,
            k = f == null ? 0 : f.length;
        for (this.clear(); ++b < k;) {
            var F = f[b];
            this.set(F[0], F[1])
        }
    }

    function j0() { this.__data__ = ei ? ei(null) : {}, this.size = 0 }

    function W0(f) { var b = this.has(f) && delete this.__data__[f]; return this.size -= b ? 1 : 0, b }

    function H0(f) { var b = this.__data__; if (ei) { var k = b[f]; return k === n ? void 0 : k } return er.call(b, f) ? b[f] : void 0 }

    function U0(f) { var b = this.__data__; return ei ? b[f] !== void 0 : er.call(b, f) }

    function Q0(f, b) { var k = this.__data__; return this.size += this.has(f) ? 0 : 1, k[f] = ei && b === void 0 ? n : b, this }
    Hr.prototype.clear = j0, Hr.prototype.delete = W0, Hr.prototype.get = H0, Hr.prototype.has = U0, Hr.prototype.set = Q0;

    function tr(f) {
        var b = -1,
            k = f == null ? 0 : f.length;
        for (this.clear(); ++b < k;) {
            var F = f[b];
            this.set(F[0], F[1])
        }
    }

    function V0() { this.__data__ = [], this.size = 0 }

    function q0(f) {
        var b = this.__data__,
            k = ba(b, f);
        if (k < 0) return !1;
        var F = b.length - 1;
        return k == F ? b.pop() : N0.call(b, k, 1), --this.size, !0
    }

    function K0(f) {
        var b = this.__data__,
            k = ba(b, f);
        return k < 0 ? void 0 : b[k][1]
    }

    function G0(f) { return ba(this.__data__, f) > -1 }

    function Y0(f, b) {
        var k = this.__data__,
            F = ba(k, f);
        return F < 0 ? (++this.size, k.push([f, b])) : k[F][1] = b, this
    }
    tr.prototype.clear = V0, tr.prototype.delete = q0, tr.prototype.get = K0, tr.prototype.has = G0, tr.prototype.set = Y0;

    function fn(f) {
        var b = -1,
            k = f == null ? 0 : f.length;
        for (this.clear(); ++b < k;) {
            var F = f[b];
            this.set(F[0], F[1])
        }
    }

    function X0() { this.size = 0, this.__data__ = { hash: new Hr, map: new(Id || tr), string: new Hr } }

    function Z0(f) { var b = xa(this, f).delete(f); return this.size -= b ? 1 : 0, b }

    function J0(f) { return xa(this, f).get(f) }

    function eg(f) { return xa(this, f).has(f) }

    function tg(f, b) {
        var k = xa(this, f),
            F = k.size;
        return k.set(f, b), this.size += k.size == F ? 0 : 1, this
    }
    fn.prototype.clear = X0, fn.prototype.delete = Z0, fn.prototype.get = J0, fn.prototype.has = eg, fn.prototype.set = tg;

    function hn(f) {
        var b = this.__data__ = new tr(f);
        this.size = b.size
    }

    function rg() { this.__data__ = new tr, this.size = 0 }

    function ng(f) {
        var b = this.__data__,
            k = b.delete(f);
        return this.size = b.size, k
    }

    function ig(f) { return this.__data__.get(f) }

    function ag(f) { return this.__data__.has(f) }

    function og(f, b) {
        var k = this.__data__;
        if (k instanceof tr) {
            var F = k.__data__;
            if (!Id || F.length < r - 1) return F.push([f, b]), this.size = ++k.size, this;
            k = this.__data__ = new fn(F)
        }
        return k.set(f, b), this.size = k.size, this
    }
    hn.prototype.clear = rg, hn.prototype.delete = ng, hn.prototype.get = ig, hn.prototype.has = ag, hn.prototype.set = og;

    function lg(f, b) {
        var k = Gl(f),
            F = !k && Kl(f),
            U = !k && !F && Dd(f),
            ie = !k && !F && !U && Wd(f),
            de = k || F || U || ie,
            W = de ? T0(f.length, String) : [],
            fe = W.length;
        for (var bt in f)(b || er.call(f, bt)) && !(de && (bt == "length" || U && (bt == "offset" || bt == "parent") || ie && (bt == "buffer" || bt == "byteLength" || bt == "byteOffset") || Bd(bt, fe))) && W.push(bt);
        return W
    }

    function Ul(f, b, k) {
        (k !== void 0 && !wa(f[b], k) || k === void 0 && !(b in f)) && Ql(f, b, k)
    }

    function sg(f, b, k) {
        var F = f[b];
        (!(er.call(f, b) && wa(F, k)) || k === void 0 && !(b in f)) && Ql(f, b, k)
    }

    function ba(f, b) {
        for (var k = f.length; k--;)
            if (wa(f[k][0], b)) return k;
        return -1
    }

    function Ql(f, b, k) { b == "__proto__" && ya ? ya(f, b, { configurable: !0, enumerable: !0, value: k, writable: !0 }) : f[b] = k }
    var ug = wg();

    function Sa(f) { return f == null ? f === void 0 ? _ : v : Wr && Wr in Object(f) ? kg(f) : Rg(f) }

    function Md(f) { return ti(f) && Sa(f) == l }

    function cg(f) { if (!Ur(f) || Pg(f)) return !1; var b = Xl(f) ? I0 : ne; return b.test(Ag(f)) }

    function dg(f) { return ti(f) && jd(f.length) && !!Z[Sa(f)] }

    function fg(f) {
        if (!Ur(f)) return Tg(f);
        var b = Ld(f),
            k = [];
        for (var F in f) F == "constructor" && (b || !er.call(f, F)) || k.push(F);
        return k
    }

    function Nd(f, b, k, F, U) {
        f !== b && ug(b, function(ie, de) {
            if (U || (U = new hn), Ur(ie)) hg(f, b, de, k, Nd, F, U);
            else {
                var W = F ? F(ql(f, de), ie, de + "", f, b, U) : void 0;
                W === void 0 && (W = ie), Ul(f, de, W)
            }
        }, Hd)
    }

    function hg(f, b, k, F, U, ie, de) {
        var W = ql(f, k),
            fe = ql(b, k),
            bt = de.get(fe);
        if (bt) { Ul(f, k, bt); return }
        var st = ie ? ie(W, fe, k + "", f, b, de) : void 0,
            ri = st === void 0;
        if (ri) {
            var Zl = Gl(fe),
                Jl = !Zl && Dd(fe),
                Qd = !Zl && !Jl && Wd(fe);
            st = fe, Zl || Jl || Qd ? Gl(W) ? st = W : Fg(W) ? st = bg(W) : Jl ? (ri = !1, st = mg(fe, !0)) : Qd ? (ri = !1, st = yg(fe, !0)) : st = [] : Ig(fe) || Kl(fe) ? (st = W, Kl(W) ? st = Mg(W) : (!Ur(W) || Xl(W)) && (st = Cg(fe))) : ri = !1
        }
        ri && (de.set(fe, st), U(st, fe, F, ie, de), de.delete(fe)), Ul(f, k, st)
    }

    function pg(f, b) { return $g(Og(f, b, Ud), f + "") }
    var vg = ya ? function(f, b) { return ya(f, "toString", { configurable: !0, enumerable: !1, value: Bg(b), writable: !0 }) } : Ud;

    function mg(f, b) {
        if (b) return f.slice();
        var k = f.length,
            F = $d ? $d(k) : new f.constructor(k);
        return f.copy(F), F
    }

    function gg(f) { var b = new f.constructor(f.byteLength); return new Od(b).set(new Od(f)), b }

    function yg(f, b) { var k = b ? gg(f.buffer) : f.buffer; return new f.constructor(k, f.byteOffset, f.length) }

    function bg(f, b) {
        var k = -1,
            F = f.length;
        for (b || (b = Array(F)); ++k < F;) b[k] = f[k];
        return b
    }

    function Sg(f, b, k, F) {
        var U = !k;
        k || (k = {});
        for (var ie = -1, de = b.length; ++ie < de;) {
            var W = b[ie],
                fe = F ? F(k[W], f[W], W, k, f) : void 0;
            fe === void 0 && (fe = f[W]), U ? Ql(k, W, fe) : sg(k, W, fe)
        }
        return k
    }

    function xg(f) {
        return pg(function(b, k) {
            var F = -1,
                U = k.length,
                ie = U > 1 ? k[U - 1] : void 0,
                de = U > 2 ? k[2] : void 0;
            for (ie = f.length > 3 && typeof ie == "function" ? (U--, ie) : void 0, de && _g(k[0], k[1], de) && (ie = U < 3 ? void 0 : ie, U = 1), b = Object(b); ++F < U;) {
                var W = k[F];
                W && f(b, W, F, ie)
            }
            return b
        })
    }

    function wg(f) { return function(b, k, F) { for (var U = -1, ie = Object(b), de = F(b), W = de.length; W--;) { var fe = de[f ? W : ++U]; if (k(ie[fe], fe, ie) === !1) break } return b } }

    function xa(f, b) { var k = f.__data__; return Eg(b) ? k[typeof b == "string" ? "string" : "hash"] : k.map }

    function Vl(f, b) { var k = O0(f, b); return cg(k) ? k : void 0 }

    function kg(f) {
        var b = er.call(f, Wr),
            k = f[Wr];
        try { f[Wr] = void 0; var F = !0 } catch {}
        var U = Td.call(f);
        return F && (b ? f[Wr] = k : delete f[Wr]), U
    }

    function Cg(f) { return typeof f.constructor == "function" && !Ld(f) ? D0(zd(f)) : {} }

    function Bd(f, b) { var k = typeof f; return b = b == null ? o : b, !!b && (k == "number" || k != "symbol" && be.test(f)) && f > -1 && f % 1 == 0 && f < b }

    function _g(f, b, k) { if (!Ur(k)) return !1; var F = typeof b; return (F == "number" ? Yl(k) && Bd(b, k.length) : F == "string" && b in k) ? wa(k[b], f) : !1 }

    function Eg(f) { var b = typeof f; return b == "string" || b == "number" || b == "symbol" || b == "boolean" ? f !== "__proto__" : f === null }

    function Pg(f) { return !!Pd && Pd in f }

    function Ld(f) {
        var b = f && f.constructor,
            k = typeof b == "function" && b.prototype || va;
        return f === k
    }

    function Tg(f) {
        var b = [];
        if (f != null)
            for (var k in Object(f)) b.push(k);
        return b
    }

    function Rg(f) { return Td.call(f) }

    function Og(f, b, k) {
        return b = Fd(b === void 0 ? f.length - 1 : b, 0),
            function() {
                for (var F = arguments, U = -1, ie = Fd(F.length - b, 0), de = Array(ie); ++U < ie;) de[U] = F[b + U];
                U = -1;
                for (var W = Array(b + 1); ++U < b;) W[U] = F[U];
                return W[b] = k(de), P0(f, this, W)
            }
    }

    function ql(f, b) { if (!(b === "constructor" && typeof f[b] == "function") && b != "__proto__") return f[b] }
    var $g = zg(vg);

    function zg(f) {
        var b = 0,
            k = 0;
        return function() {
            var F = L0(),
                U = a - (F - k);
            if (k = F, U > 0) { if (++b >= i) return arguments[0] } else b = 0;
            return f.apply(void 0, arguments)
        }
    }

    function Ag(f) { if (f != null) { try { return ma.call(f) } catch {} try { return f + "" } catch {} } return "" }

    function wa(f, b) { return f === b || f !== f && b !== b }
    var Kl = Md(function() { return arguments }()) ? Md : function(f) { return ti(f) && er.call(f, "callee") && !M0.call(f, "callee") },
        Gl = Array.isArray;

    function Yl(f) { return f != null && jd(f.length) && !Xl(f) }

    function Fg(f) { return ti(f) && Yl(f) }
    var Dd = B0 || Lg;

    function Xl(f) { if (!Ur(f)) return !1; var b = Sa(f); return b == g || b == y || b == u || b == m }

    function jd(f) { return typeof f == "number" && f > -1 && f % 1 == 0 && f <= o }

    function Ur(f) { var b = typeof f; return f != null && (b == "object" || b == "function") }

    function ti(f) { return f != null && typeof f == "object" }

    function Ig(f) { if (!ti(f) || Sa(f) != d) return !1; var b = zd(f); if (b === null) return !0; var k = er.call(b, "constructor") && b.constructor; return typeof k == "function" && k instanceof k && ma.call(k) == F0 }
    var Wd = Ed ? R0(Ed) : dg;

    function Mg(f) { return Sg(f, Hd(f)) }

    function Hd(f) { return Yl(f) ? lg(f, !0) : fg(f) }
    var Ng = xg(function(f, b, k, F) { Nd(f, b, k, F) });

    function Bg(f) { return function() { return f } }

    function Ud(f) { return f }

    function Lg() { return !1 }
    e.exports = Ng
})(Hs, Hs.exports);
var Gt = Hs.exports;

function Xy(e) { var t = e == null ? 0 : e.length; return t ? e[t - 1] : void 0 }

function On(e) { return typeof e == "number" }

function mc(e) { return Array.isArray(e) }

function Cp(e) { return typeof e == "function" }

function Zy(e) { return typeof e == "undefined" || e === void 0 }

function ft(e) { var t = typeof e; return e != null && (t === "object" || t === "function") && !mc(e) }

function Jy(e) { return ft(e) && Object.keys(e).length === 0 }

function _p(e) { return e == null }

function gc(e) { return Object.prototype.toString.call(e) === "[object String]" }

function Ep(e) { return /^var\(--.+\)$/.test(e) }
var D = !1;

function yc(e, t) { var r = {}; return Object.keys(e).forEach(function(n) { t.includes(n) || (r[n] = e[n]) }), r }

function e1(e, t) { var r = {}; return t.forEach(function(n) { n in e && (r[n] = e[n]) }), r }

function t1(e, t, r, n) { var i = typeof t == "string" ? t.split(".") : [t]; for (n = 0; n < i.length && e; n += 1) e = e[i[n]]; return e === void 0 ? r : e }
var r1 = function(t) {
        var r = new WeakMap,
            n = function(a, o, l, s) {
                if (typeof a == "undefined") return t(a, o, l);
                r.has(a) || r.set(a, new Map);
                var u = r.get(a);
                if (u.has(o)) return u.get(o);
                var c = t(a, o, l, s);
                return u.set(o, c), c
            };
        return n
    },
    wl = r1(t1);

function Pp(e, t) {
    var r = {};
    return Object.keys(e).forEach(function(n) {
        var i = e[n],
            a = t(i, n, e);
        a && (r[n] = i)
    }), r
}
var bc = function(t) { return Pp(t, function(r) { return r != null }) },
    Sc = function(t) { return Object.keys(t) },
    Co = function(t) {
        return t.reduce(function(r, n) {
            var i = n[0],
                a = n[1];
            return r[i] = a, r
        }, {})
    };

function n1(e) {
    var t = parseFloat(e.toString()),
        r = e.toString().replace(String(t), "");
    return { unitless: !r, value: t, unit: r }
}

function Us(e) {
    if (e == null) return e;
    var t = n1(e),
        r = t.unitless;
    return r || On(e) ? e + "px" : e
}
var Tp = function(t, r) { return parseInt(t[1], 10) > parseInt(r[1], 10) ? 1 : -1 },
    xc = function(t) { return Co(Object.entries(t).sort(Tp)) };

function nf(e) { var t = xc(e); return Object.assign(Object.values(t), t) }

function i1(e) { var t = Object.keys(xc(e)); return new Set(t) }

function a1(e) {
    var t;
    if (!e) return e;
    e = (t = Us(e)) != null ? t : e;
    var r = e.endsWith("px") ? -1 : -.0635;
    return On(e) ? "" + (e + r) : e.replace(/([0-9]+\.?[0-9]*)/, function(n) { return "" + (parseFloat(n) + r) })
}

function Ea(e, t) { var r = ["@media screen"]; return e && r.push("and", "(min-width: " + Us(e) + ")"), t && r.push("and", "(max-width: " + Us(t) + ")"), r.join(" ") }

function o1(e) {
    var t;
    if (!e) return null;
    e.base = (t = e.base) != null ? t : "0px";
    var r = nf(e),
        n = Object.entries(e).sort(Tp).map(function(o, l, s) {
            var u, c = o[0],
                p = o[1],
                h = (u = s[l + 1]) != null ? u : [],
                g = h[1];
            return g = parseFloat(g) > 0 ? a1(g) : void 0, { breakpoint: c, minW: p, maxW: g, maxWQuery: Ea(null, g), minWQuery: Ea(p), minMaxQuery: Ea(p, g) }
        }),
        i = i1(e),
        a = Array.from(i.values());
    return { keys: i, normalized: r, isResponsive: function(l) { var s = Object.keys(l); return s.length > 0 && s.every(function(u) { return i.has(u) }) }, asObject: xc(e), asArray: nf(e), details: n, media: [null].concat(r.map(function(o) { return Ea(o) }).slice(1)), toArrayValue: function(l) { if (!ft(l)) throw new Error("toArrayValue: value must be an object"); for (var s = a.map(function(u) { var c; return (c = l[u]) != null ? c : null }); Xy(s) === null;) s.pop(); return s }, toObjectValue: function(l) { if (!Array.isArray(l)) throw new Error("toObjectValue: value must be an array"); return l.reduce(function(s, u, c) { var p = a[c]; return p != null && u != null && (s[p] = u), s }, {}) } }
}

function l1() { return !!(typeof window != "undefined" && window.document && window.document.createElement) }
var ia = l1(),
    af = function(t) { return t ? "" : void 0 },
    ze = function() { for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n]; return r.filter(Boolean).join(" ") };

function Yt(e) { for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n]; return Cp(e) ? e.apply(void 0, r) : e }

function s1(e) {
    var t;
    return function() {
        if (e) {
            for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
            t = e.apply(this, i), e = null
        }
        return t
    }
}
var Ii = function() {},
    u1 = s1(function(e) {
        return function() {
            var t = e.condition,
                r = e.message;
            t && D && console.warn(r)
        }
    });

function Qs(e, t) {
    return t === void 0 && (t = 1 / 0), !ft(e) && !Array.isArray(e) || !t ? e : Object.entries(e).reduce(function(r, n) {
        var i = n[0],
            a = n[1];
        return ft(a) || mc(a) ? Object.entries(Qs(a, t - 1)).forEach(function(o) {
            var l = o[0],
                s = o[1];
            r[i + "." + l] = s
        }) : r[i] = a, r
    }, {})
}

function c1(e, t, r) { return (e - t) * 100 / (r - t) }
Object.freeze(["base", "sm", "md", "lg", "xl", "2xl"]);

function rn(e, t) { return mc(e) ? e.map(function(r) { return r === null ? null : t(r) }) : ft(e) ? Sc(e).reduce(function(r, n) { return r[n] = t(e[n]), r }, {}) : e != null ? t(e) : null }

function aa(e) {
    e === void 0 && (e = {});
    var t = e,
        r = t.strict,
        n = r === void 0 ? !0 : r,
        i = t.errorMessage,
        a = i === void 0 ? "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider" : i,
        o = t.name,
        l = w.exports.createContext(void 0);
    l.displayName = o;

    function s() { var u = w.exports.useContext(l); if (!u && n) { var c = new Error(a); throw c.name = "ContextError", Error.captureStackTrace == null || Error.captureStackTrace(c, s), c } return u }
    return [l.Provider, s, l]
}

function Rp(e) { return w.exports.Children.toArray(e).filter(function(t) { return w.exports.isValidElement(t) }) }
var d1 = ia ? w.exports.useLayoutEffect : w.exports.useEffect,
    f1 = { current: 1 },
    h1 = w.exports.createContext(f1),
    p1 = w.exports.memo(function(e) { var t = e.children; return w.exports.createElement(h1.Provider, { value: { current: 1 } }, t) });

function v1(e, t) { if (e != null) { if (typeof e == "function") { e(t); return } try { e.current = t } catch { throw new Error("Cannot assign value '" + t + "' to ref '" + e + "'") } } }

function m1() { for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r]; return w.exports.useMemo(function() { return t.every(function(n) { return n == null }) ? null : function(n) { t.forEach(function(i) { i && v1(i, n) }) } }, t) }

function g1(e) { var t = w.exports.useRef(); return w.exports.useEffect(function() { t.current = e }, [e]), t.current }
var wc = { exports: {} },
    mt = {},
    Op = { exports: {} },
    $p = {}; /** * @license React * scheduler.production.min.js * * Copyright (c) Facebook, Inc. and its affiliates. * * This source code is licensed under the MIT license found in the * LICENSE file in the root directory of this source tree. */
(function(e) {
    function t(z, N) {
        var B = z.length;
        z.push(N);
        e: for (; 0 < B;) {
            var ne = B - 1 >>> 1,
                be = z[ne];
            if (0 < i(be, N)) z[ne] = N, z[B] = be, B = ne;
            else break e
        }
    }

    function r(z) { return z.length === 0 ? null : z[0] }

    function n(z) {
        if (z.length === 0) return null;
        var N = z[0],
            B = z.pop();
        if (B !== N) {
            z[0] = B;
            e: for (var ne = 0, be = z.length, Z = be >>> 1; ne < Z;) {
                var Wt = 2 * (ne + 1) - 1,
                    Zn = z[Wt],
                    lt = Wt + 1,
                    jr = z[lt];
                if (0 > i(Zn, B)) lt < be && 0 > i(jr, Zn) ? (z[ne] = jr, z[lt] = B, ne = lt) : (z[ne] = Zn, z[Wt] = B, ne = Wt);
                else if (lt < be && 0 > i(jr, B)) z[ne] = jr, z[lt] = B, ne = lt;
                else break e
            }
        }
        return N
    }

    function i(z, N) { var B = z.sortIndex - N.sortIndex; return B !== 0 ? B : z.id - N.id }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var a = performance;
        e.unstable_now = function() { return a.now() }
    } else {
        var o = Date,
            l = o.now();
        e.unstable_now = function() { return o.now() - l }
    }
    var s = [],
        u = [],
        c = 1,
        p = null,
        h = 3,
        g = !1,
        y = !1,
        x = !1,
        R = typeof setTimeout == "function" ? setTimeout : null,
        v = typeof clearTimeout == "function" ? clearTimeout : null,
        d = typeof setImmediate != "undefined" ? setImmediate : null;
    typeof navigator != "undefined" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function m(z) {
        for (var N = r(u); N !== null;) {
            if (N.callback === null) n(u);
            else if (N.startTime <= z) n(u), N.sortIndex = N.expirationTime, t(s, N);
            else break;
            N = r(u)
        }
    }

    function C(z) {
        if (x = !1, m(z), !y)
            if (r(s) !== null) y = !0, Ae(E);
            else {
                var N = r(u);
                N !== null && $t(C, N.startTime - z)
            }
    }

    function E(z, N) {
        y = !1, x && (x = !1, v($), $ = -1), g = !0;
        var B = h;
        try {
            for (m(N), p = r(s); p !== null && (!(p.expirationTime > N) || z && !K());) {
                var ne = p.callback;
                if (typeof ne == "function") {
                    p.callback = null, h = p.priorityLevel;
                    var be = ne(p.expirationTime <= N);
                    N = e.unstable_now(), typeof be == "function" ? p.callback = be : p === r(s) && n(s), m(N)
                } else n(s);
                p = r(s)
            }
            if (p !== null) var Z = !0;
            else {
                var Wt = r(u);
                Wt !== null && $t(C, Wt.startTime - N), Z = !1
            }
            return Z
        } finally { p = null, h = B, g = !1 }
    }
    var P = !1,
        _ = null,
        $ = -1,
        M = 5,
        A = -1;

    function K() { return !(e.unstable_now() - A < M) }

    function X() {
        if (_ !== null) {
            var z = e.unstable_now();
            A = z;
            var N = !0;
            try { N = _(!0, z) } finally { N ? le() : (P = !1, _ = null) }
        } else P = !1
    }
    var le;
    if (typeof d == "function") le = function() { d(X) };
    else if (typeof MessageChannel != "undefined") {
        var Pe = new MessageChannel,
            qe = Pe.port2;
        Pe.port1.onmessage = X, le = function() { qe.postMessage(null) }
    } else le = function() { R(X, 0) };

    function Ae(z) { _ = z, P || (P = !0, le()) }

    function $t(z, N) { $ = R(function() { z(e.unstable_now()) }, N) }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(z) { z.callback = null }, e.unstable_continueExecution = function() { y || g || (y = !0, Ae(E)) }, e.unstable_forceFrameRate = function(z) { 0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M = 0 < z ? Math.floor(1e3 / z) : 5 }, e.unstable_getCurrentPriorityLevel = function() { return h }, e.unstable_getFirstCallbackNode = function() { return r(s) }, e.unstable_next = function(z) {
        switch (h) {
            case 1:
            case 2:
            case 3:
                var N = 3;
                break;
            default:
                N = h
        }
        var B = h;
        h = N;
        try { return z() } finally { h = B }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(z, N) {
        switch (z) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                z = 3
        }
        var B = h;
        h = z;
        try { return N() } finally { h = B }
    }, e.unstable_scheduleCallback = function(z, N, B) {
        var ne = e.unstable_now();
        switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? ne + B : ne) : B = ne, z) {
            case 1:
                var be = -1;
                break;
            case 2:
                be = 250;
                break;
            case 5:
                be = 1073741823;
                break;
            case 4:
                be = 1e4;
                break;
            default:
                be = 5e3
        }
        return be = B + be, z = { id: c++, callback: N, priorityLevel: z, startTime: B, expirationTime: be, sortIndex: -1 }, B > ne ? (z.sortIndex = B, t(u, z), r(s) === null && z === r(u) && (x ? (v($), $ = -1) : x = !0, $t(C, B - ne))) : (z.sortIndex = be, t(s, z), y || g || (y = !0, Ae(E))), z
    }, e.unstable_shouldYield = K, e.unstable_wrapCallback = function(z) {
        var N = h;
        return function() {
            var B = h;
            h = N;
            try { return z.apply(this, arguments) } finally { h = B }
        }
    }
})($p);
Op.exports = $p; /** * @license React * react-dom.production.min.js * * Copyright (c) Facebook, Inc. and its affiliates. * * This source code is licensed under the MIT license found in the * LICENSE file in the root directory of this source tree. */
var zp = w.exports,
    pt = Op.exports;

function O(e) { for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]); return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings." }
var Ap = new Set,
    Mi = {};

function cn(e, t) { Dn(e, t), Dn(e + "Capture", t) }

function Dn(e, t) { for (Mi[e] = t, e = 0; e < t.length; e++) Ap.add(t[e]) }
var fr = !(typeof window == "undefined" || typeof window.document == "undefined" || typeof window.document.createElement == "undefined"),
    Vs = Object.prototype.hasOwnProperty,
    y1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    of = {},
    lf = {};

function b1(e) { return Vs.call(lf, e) ? !0 : Vs.call(of, e) ? !1 : y1.test(e) ? lf[e] = !0 : (of[e] = !0, !1) }

function S1(e, t, r, n) {
    if (r !== null && r.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return n ? !1 : r !== null ? !r.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function x1(e, t, r, n) {
    if (t === null || typeof t == "undefined" || S1(e, t, r, n)) return !0;
    if (n) return !1;
    if (r !== null) switch (r.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function Ze(e, t, r, n, i, a, o) { this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = n, this.attributeNamespace = i, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = o }
var De = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) { De[e] = new Ze(e, 0, !1, e, null, !1, !1) });
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    De[t] = new Ze(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) { De[e] = new Ze(e, 2, !1, e.toLowerCase(), null, !1, !1) });
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) { De[e] = new Ze(e, 2, !1, e, null, !1, !1) });
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) { De[e] = new Ze(e, 3, !1, e.toLowerCase(), null, !1, !1) });
["checked", "multiple", "muted", "selected"].forEach(function(e) { De[e] = new Ze(e, 3, !0, e, null, !1, !1) });
["capture", "download"].forEach(function(e) { De[e] = new Ze(e, 4, !1, e, null, !1, !1) });
["cols", "rows", "size", "span"].forEach(function(e) { De[e] = new Ze(e, 6, !1, e, null, !1, !1) });
["rowSpan", "start"].forEach(function(e) { De[e] = new Ze(e, 5, !1, e.toLowerCase(), null, !1, !1) });
var kc = /[\-:]([a-z])/g;

function Cc(e) { return e[1].toUpperCase() }
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(kc, Cc);
    De[t] = new Ze(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(kc, Cc);
    De[t] = new Ze(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(kc, Cc);
    De[t] = new Ze(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) { De[e] = new Ze(e, 1, !1, e.toLowerCase(), null, !1, !1) });
De.xlinkHref = new Ze("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) { De[e] = new Ze(e, 1, !1, e.toLowerCase(), null, !0, !0) });

function _c(e, t, r, n) {
    var i = De.hasOwnProperty(t) ? De[t] : null;
    (i !== null ? i.type !== 0 : n || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (x1(t, r, i, n) && (r = null), n || i === null ? b1(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : i.mustUseProperty ? e[i.propertyName] = r === null ? i.type === 3 ? !1 : "" : r : (t = i.attributeName, n = i.attributeNamespace, r === null ? e.removeAttribute(t) : (i = i.type, r = i === 3 || i === 4 && r === !0 ? "" : "" + r, n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))))
}
var vr = zp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Pa = Symbol.for("react.element"),
    gn = Symbol.for("react.portal"),
    yn = Symbol.for("react.fragment"),
    Ec = Symbol.for("react.strict_mode"),
    qs = Symbol.for("react.profiler"),
    Fp = Symbol.for("react.provider"),
    Ip = Symbol.for("react.context"),
    Pc = Symbol.for("react.forward_ref"),
    Ks = Symbol.for("react.suspense"),
    Gs = Symbol.for("react.suspense_list"),
    Tc = Symbol.for("react.memo"),
    Sr = Symbol.for("react.lazy"),
    Mp = Symbol.for("react.offscreen"),
    sf = Symbol.iterator;

function ii(e) { return e === null || typeof e != "object" ? null : (e = sf && e[sf] || e["@@iterator"], typeof e == "function" ? e : null) }
var ye = Object.assign,
    rs;

function hi(e) {
    if (rs === void 0) try { throw Error() } catch (r) {
        var t = r.stack.trim().match(/\n( *(at )?)/);
        rs = t && t[1] || ""
    }
    return ` ` + rs + e
}
var ns = !1;

function is(e, t) {
    if (!e || ns) return "";
    ns = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() { throw Error() }, Object.defineProperty(t.prototype, "props", { set: function() { throw Error() } }), typeof Reflect == "object" && Reflect.construct) {
                try { Reflect.construct(t, []) } catch (u) { var n = u }
                Reflect.construct(e, [], t)
            } else {
                try { t.call() } catch (u) { n = u }
                e.call(t.prototype)
            }
        else {
            try { throw Error() } catch (u) { n = u }
            e()
        }
    } catch (u) {
        if (u && n && typeof u.stack == "string") {
            for (var i = u.stack.split(` `), a = n.stack.split(` `), o = i.length - 1, l = a.length - 1; 1 <= o && 0 <= l && i[o] !== a[l];) l--;
            for (; 1 <= o && 0 <= l; o--, l--)
                if (i[o] !== a[l]) {
                    if (o !== 1 || l !== 1)
                        do
                            if (o--, l--, 0 > l || i[o] !== a[l]) { var s = ` ` + i[o].replace(" at new ", " at "); return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s }
                    while (1 <= o && 0 <= l);
                    break
                }
        }
    } finally { ns = !1, Error.prepareStackTrace = r }
    return (e = e ? e.displayName || e.name : "") ? hi(e) : ""
}

function w1(e) {
    switch (e.tag) {
        case 5:
            return hi(e.type);
        case 16:
            return hi("Lazy");
        case 13:
            return hi("Suspense");
        case 19:
            return hi("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = is(e.type, !1), e;
        case 11:
            return e = is(e.type.render, !1), e;
        case 1:
            return e = is(e.type, !0), e;
        default:
            return ""
    }
}

function Ys(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case yn:
            return "Fragment";
        case gn:
            return "Portal";
        case qs:
            return "Profiler";
        case Ec:
            return "StrictMode";
        case Ks:
            return "Suspense";
        case Gs:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case Ip:
            return (e.displayName || "Context") + ".Consumer";
        case Fp:
            return (e._context.displayName || "Context") + ".Provider";
        case Pc:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Tc:
            return t = e.displayName || null, t !== null ? t : Ys(e.type) || "Memo";
        case Sr:
            t = e._payload, e = e._init;
            try { return Ys(e(t)) } catch {}
    }
    return null
}

function k1(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Ys(t);
        case 8:
            return t === Ec ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function Ir(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function Np(e) { var t = e.type; return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio") }

function C1(e) {
    var t = Np(e) ? "checked" : "value",
        r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        n = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof r != "undefined" && typeof r.get == "function" && typeof r.set == "function") {
        var i = r.get,
            a = r.set;
        return Object.defineProperty(e, t, { configurable: !0, get: function() { return i.call(this) }, set: function(o) { n = "" + o, a.call(this, o) } }), Object.defineProperty(e, t, { enumerable: r.enumerable }), { getValue: function() { return n }, setValue: function(o) { n = "" + o }, stopTracking: function() { e._valueTracker = null, delete e[t] } }
    }
}

function Ta(e) { e._valueTracker || (e._valueTracker = C1(e)) }

function Bp(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(),
        n = "";
    return e && (n = Np(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== r ? (t.setValue(e), !0) : !1
}

function _o(e) { if (e = e || (typeof document != "undefined" ? document : void 0), typeof e == "undefined") return null; try { return e.activeElement || e.body } catch { return e.body } }

function Xs(e, t) { var r = t.checked; return ye({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: r != null ? r : e._wrapperState.initialChecked }) }

function uf(e, t) {
    var r = t.defaultValue == null ? "" : t.defaultValue,
        n = t.checked != null ? t.checked : t.defaultChecked;
    r = Ir(t.value != null ? t.value : r), e._wrapperState = { initialChecked: n, initialValue: r, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null }
}

function Lp(e, t) { t = t.checked, t != null && _c(e, "checked", t, !1) }

function Zs(e, t) {
    Lp(e, t);
    var r = Ir(t.value),
        n = t.type;
    if (r != null) n === "number" ? (r === 0 && e.value === "" || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
    else if (n === "submit" || n === "reset") { e.removeAttribute("value"); return }
    t.hasOwnProperty("value") ? Js(e, t.type, r) : t.hasOwnProperty("defaultValue") && Js(e, t.type, Ir(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function cf(e, t, r) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var n = t.type;
        if (!(n !== "submit" && n !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, r || t === e.value || (e.value = t), e.defaultValue = t
    }
    r = e.name, r !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, r !== "" && (e.name = r)
}

function Js(e, t, r) {
    (t !== "number" || _o(e.ownerDocument) !== e) && (r == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r))
}
var pi = Array.isArray;

function $n(e, t, r, n) {
    if (e = e.options, t) { t = {}; for (var i = 0; i < r.length; i++) t["$" + r[i]] = !0; for (r = 0; r < e.length; r++) i = t.hasOwnProperty("$" + e[r].value), e[r].selected !== i && (e[r].selected = i), i && n && (e[r].defaultSelected = !0) } else {
        for (r = "" + Ir(r), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === r) { e[i].selected = !0, n && (e[i].defaultSelected = !0); return }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}

function eu(e, t) { if (t.dangerouslySetInnerHTML != null) throw Error(O(91)); return ye({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue }) }

function df(e, t) {
    var r = t.value;
    if (r == null) {
        if (r = t.children, t = t.defaultValue, r != null) {
            if (t != null) throw Error(O(92));
            if (pi(r)) {
                if (1 < r.length) throw Error(O(93));
                r = r[0]
            }
            t = r
        }
        t == null && (t = ""), r = t
    }
    e._wrapperState = { initialValue: Ir(r) }
}

function Dp(e, t) {
    var r = Ir(t.value),
        n = Ir(t.defaultValue);
    r != null && (r = "" + r, r !== e.value && (e.value = r), t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)), n != null && (e.defaultValue = "" + n)
}

function ff(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function jp(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function tu(e, t) { return e == null || e === "http://www.w3.org/1999/xhtml" ? jp(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e }
var Ra, Wp = function(e) { return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction ? function(t, r, n, i) { MSApp.execUnsafeLocalFunction(function() { return e(t, r, n, i) }) } : e }(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else { for (Ra = Ra || document.createElement("div"), Ra.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ra.firstChild; e.firstChild;) e.removeChild(e.firstChild); for (; t.firstChild;) e.appendChild(t.firstChild) }
});

function Ni(e, t) {
    if (t) { var r = e.firstChild; if (r && r === e.lastChild && r.nodeType === 3) { r.nodeValue = t; return } }
    e.textContent = t
}
var gi = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 },
    _1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(gi).forEach(function(e) { _1.forEach(function(t) { t = t + e.charAt(0).toUpperCase() + e.substring(1), gi[t] = gi[e] }) });

function Hp(e, t, r) { return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || gi.hasOwnProperty(e) && gi[e] ? ("" + t).trim() : t + "px" }

function Up(e, t) {
    e = e.style;
    for (var r in t)
        if (t.hasOwnProperty(r)) {
            var n = r.indexOf("--") === 0,
                i = Hp(r, t[r], n);
            r === "float" && (r = "cssFloat"), n ? e.setProperty(r, i) : e[r] = i
        }
}
var E1 = ye({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });

function ru(e, t) { if (t) { if (E1[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(O(137, e)); if (t.dangerouslySetInnerHTML != null) { if (t.children != null) throw Error(O(60)); if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(O(61)) } if (t.style != null && typeof t.style != "object") throw Error(O(62)) } }

function nu(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var iu = null;

function Rc(e) { return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e }
var au = null,
    zn = null,
    An = null;

function hf(e) {
    if (e = sa(e)) {
        if (typeof au != "function") throw Error(O(280));
        var t = e.stateNode;
        t && (t = Pl(t), au(e.stateNode, e.type, t))
    }
}

function Qp(e) { zn ? An ? An.push(e) : An = [e] : zn = e }

function Vp() {
    if (zn) {
        var e = zn,
            t = An;
        if (An = zn = null, hf(e), t)
            for (e = 0; e < t.length; e++) hf(t[e])
    }
}

function qp(e, t) { return e(t) }

function Kp() {}
var as = !1;

function Gp(e, t, r) {
    if (as) return e(t, r);
    as = !0;
    try { return qp(e, t, r) } finally { as = !1, (zn !== null || An !== null) && (Kp(), Vp()) }
}

function Bi(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var n = Pl(r);
    if (n === null) return null;
    r = n[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (n = !n.disabled) || (e = e.type, n = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !n;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (r && typeof r != "function") throw Error(O(231, t, typeof r));
    return r
}
var ou = !1;
if (fr) try {
    var ai = {};
    Object.defineProperty(ai, "passive", { get: function() { ou = !0 } }), window.addEventListener("test", ai, ai), window.removeEventListener("test", ai, ai)
} catch { ou = !1 }

function P1(e, t, r, n, i, a, o, l, s) { var u = Array.prototype.slice.call(arguments, 3); try { t.apply(r, u) } catch (c) { this.onError(c) } }
var yi = !1,
    Eo = null,
    Po = !1,
    lu = null,
    T1 = { onError: function(e) { yi = !0, Eo = e } };

function R1(e, t, r, n, i, a, o, l, s) { yi = !1, Eo = null, P1.apply(T1, arguments) }

function O1(e, t, r, n, i, a, o, l, s) {
    if (R1.apply(this, arguments), yi) {
        if (yi) {
            var u = Eo;
            yi = !1, Eo = null
        } else throw Error(O(198));
        Po || (Po = !0, lu = u)
    }
}

function dn(e) {
    var t = e,
        r = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, (t.flags & 4098) !== 0 && (r = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? r : null
}

function Yp(e) { if (e.tag === 13) { var t = e.memoizedState; if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated } return null }

function pf(e) { if (dn(e) !== e) throw Error(O(188)) }

function $1(e) {
    var t = e.alternate;
    if (!t) { if (t = dn(e), t === null) throw Error(O(188)); return t !== e ? null : e }
    for (var r = e, n = t;;) {
        var i = r.return;
        if (i === null) break;
        var a = i.alternate;
        if (a === null) { if (n = i.return, n !== null) { r = n; continue } break }
        if (i.child === a.child) {
            for (a = i.child; a;) {
                if (a === r) return pf(i), e;
                if (a === n) return pf(i), t;
                a = a.sibling
            }
            throw Error(O(188))
        }
        if (r.return !== n.return) r = i, n = a;
        else {
            for (var o = !1, l = i.child; l;) {
                if (l === r) { o = !0, r = i, n = a; break }
                if (l === n) { o = !0, n = i, r = a; break }
                l = l.sibling
            }
            if (!o) {
                for (l = a.child; l;) {
                    if (l === r) { o = !0, r = a, n = i; break }
                    if (l === n) { o = !0, n = a, r = i; break }
                    l = l.sibling
                }
                if (!o) throw Error(O(189))
            }
        }
        if (r.alternate !== n) throw Error(O(190))
    }
    if (r.tag !== 3) throw Error(O(188));
    return r.stateNode.current === r ? e : t
}

function Xp(e) { return e = $1(e), e !== null ? Zp(e) : null }

function Zp(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = Zp(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var Jp = pt.unstable_scheduleCallback,
    vf = pt.unstable_cancelCallback,
    z1 = pt.unstable_shouldYield,
    A1 = pt.unstable_requestPaint,
    we = pt.unstable_now,
    F1 = pt.unstable_getCurrentPriorityLevel,
    Oc = pt.unstable_ImmediatePriority,
    ev = pt.unstable_UserBlockingPriority,
    To = pt.unstable_NormalPriority,
    I1 = pt.unstable_LowPriority,
    tv = pt.unstable_IdlePriority,
    kl = null,
    Zt = null;

function M1(e) { if (Zt && typeof Zt.onCommitFiberRoot == "function") try { Zt.onCommitFiberRoot(kl, e, void 0, (e.current.flags & 128) === 128) } catch {} }
var Dt = Math.clz32 ? Math.clz32 : L1,
    N1 = Math.log,
    B1 = Math.LN2;

function L1(e) { return e >>>= 0, e === 0 ? 32 : 31 - (N1(e) / B1 | 0) | 0 }
var Oa = 64,
    $a = 4194304;

function vi(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function Ro(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var n = 0,
        i = e.suspendedLanes,
        a = e.pingedLanes,
        o = r & 268435455;
    if (o !== 0) {
        var l = o & ~i;
        l !== 0 ? n = vi(l) : (a &= o, a !== 0 && (n = vi(a)))
    } else o = r & ~i, o !== 0 ? n = vi(o) : a !== 0 && (n = vi(a));
    if (n === 0) return 0;
    if (t !== 0 && t !== n && (t & i) === 0 && (i = n & -n, a = t & -t, i >= a || i === 16 && (a & 4194240) !== 0)) return t;
    if ((n & 4) !== 0 && (n |= r & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= n; 0 < t;) r = 31 - Dt(t), i = 1 << r, n |= e[r], t &= ~i;
    return n
}

function D1(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function j1(e, t) {
    for (var r = e.suspendedLanes, n = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes; 0 < a;) {
        var o = 31 - Dt(a),
            l = 1 << o,
            s = i[o];
        s === -1 ? ((l & r) === 0 || (l & n) !== 0) && (i[o] = D1(l, t)) : s <= t && (e.expiredLanes |= l), a &= ~l
    }
}

function su(e) { return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0 }

function rv() { var e = Oa; return Oa <<= 1, (Oa & 4194240) === 0 && (Oa = 64), e }

function os(e) { for (var t = [], r = 0; 31 > r; r++) t.push(e); return t }

function oa(e, t, r) { e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Dt(t), e[t] = r }

function W1(e, t) {
    var r = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var n = e.eventTimes;
    for (e = e.expirationTimes; 0 < r;) {
        var i = 31 - Dt(r),
            a = 1 << i;
        t[i] = 0, n[i] = -1, e[i] = -1, r &= ~a
    }
}

function $c(e, t) {
    var r = e.entangledLanes |= t;
    for (e = e.entanglements; r;) {
        var n = 31 - Dt(r),
            i = 1 << n;
        i & t | e[n] & t && (e[n] |= t), r &= ~i
    }
}
var te = 0;

function nv(e) { return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1 }
var iv, zc, av, ov, lv, uu = !1,
    za = [],
    Rr = null,
    Or = null,
    $r = null,
    Li = new Map,
    Di = new Map,
    kr = [],
    H1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function mf(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Rr = null;
            break;
        case "dragenter":
        case "dragleave":
            Or = null;
            break;
        case "mouseover":
        case "mouseout":
            $r = null;
            break;
        case "pointerover":
        case "pointerout":
            Li.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Di.delete(t.pointerId)
    }
}

function oi(e, t, r, n, i, a) { return e === null || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: r, eventSystemFlags: n, nativeEvent: a, targetContainers: [i] }, t !== null && (t = sa(t), t !== null && zc(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e) }

function U1(e, t, r, n, i) {
    switch (t) {
        case "focusin":
            return Rr = oi(Rr, e, t, r, n, i), !0;
        case "dragenter":
            return Or = oi(Or, e, t, r, n, i), !0;
        case "mouseover":
            return $r = oi($r, e, t, r, n, i), !0;
        case "pointerover":
            var a = i.pointerId;
            return Li.set(a, oi(Li.get(a) || null, e, t, r, n, i)), !0;
        case "gotpointercapture":
            return a = i.pointerId, Di.set(a, oi(Di.get(a) || null, e, t, r, n, i)), !0
    }
    return !1
}

function sv(e) {
    var t = Gr(e.target);
    if (t !== null) { var r = dn(t); if (r !== null) { if (t = r.tag, t === 13) { if (t = Yp(r), t !== null) { e.blockedOn = t, lv(e.priority, function() { av(r) }); return } } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) { e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null; return } } }
    e.blockedOn = null
}

function lo(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var r = cu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (r === null) {
            r = e.nativeEvent;
            var n = new r.constructor(r.type, r);
            iu = n, r.target.dispatchEvent(n), iu = null
        } else return t = sa(r), t !== null && zc(t), e.blockedOn = r, !1;
        t.shift()
    }
    return !0
}

function gf(e, t, r) { lo(e) && r.delete(t) }

function Q1() { uu = !1, Rr !== null && lo(Rr) && (Rr = null), Or !== null && lo(Or) && (Or = null), $r !== null && lo($r) && ($r = null), Li.forEach(gf), Di.forEach(gf) }

function li(e, t) { e.blockedOn === t && (e.blockedOn = null, uu || (uu = !0, pt.unstable_scheduleCallback(pt.unstable_NormalPriority, Q1))) }

function ji(e) {
    function t(i) { return li(i, e) }
    if (0 < za.length) {
        li(za[0], e);
        for (var r = 1; r < za.length; r++) {
            var n = za[r];
            n.blockedOn === e && (n.blockedOn = null)
        }
    }
    for (Rr !== null && li(Rr, e), Or !== null && li(Or, e), $r !== null && li($r, e), Li.forEach(t), Di.forEach(t), r = 0; r < kr.length; r++) n = kr[r], n.blockedOn === e && (n.blockedOn = null);
    for (; 0 < kr.length && (r = kr[0], r.blockedOn === null);) sv(r), r.blockedOn === null && kr.shift()
}
var Fn = vr.ReactCurrentBatchConfig,
    Oo = !0;

function V1(e, t, r, n) {
    var i = te,
        a = Fn.transition;
    Fn.transition = null;
    try { te = 1, Ac(e, t, r, n) } finally { te = i, Fn.transition = a }
}

function q1(e, t, r, n) {
    var i = te,
        a = Fn.transition;
    Fn.transition = null;
    try { te = 4, Ac(e, t, r, n) } finally { te = i, Fn.transition = a }
}

function Ac(e, t, r, n) {
    if (Oo) {
        var i = cu(e, t, r, n);
        if (i === null) ms(e, t, n, $o, r), mf(e, n);
        else if (U1(i, e, t, r, n)) n.stopPropagation();
        else if (mf(e, n), t & 4 && -1 < H1.indexOf(e)) {
            for (; i !== null;) {
                var a = sa(i);
                if (a !== null && iv(a), a = cu(e, t, r, n), a === null && ms(e, t, n, $o, r), a === i) break;
                i = a
            }
            i !== null && n.stopPropagation()
        } else ms(e, t, n, null, r)
    }
}
var $o = null;

function cu(e, t, r, n) {
    if ($o = null, e = Rc(n), e = Gr(e), e !== null)
        if (t = dn(e), t === null) e = null;
        else if (r = t.tag, r === 13) {
        if (e = Yp(t), e !== null) return e;
        e = null
    } else if (r === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return $o = e, null
}

function uv(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (F1()) {
                case Oc:
                    return 1;
                case ev:
                    return 4;
                case To:
                case I1:
                    return 16;
                case tv:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var _r = null,
    Fc = null,
    so = null;

function cv() {
    if (so) return so;
    var e, t = Fc,
        r = t.length,
        n, i = "value" in _r ? _r.value : _r.textContent,
        a = i.length;
    for (e = 0; e < r && t[e] === i[e]; e++);
    var o = r - e;
    for (n = 1; n <= o && t[r - n] === i[a - n]; n++);
    return so = i.slice(e, 1 < n ? 1 - n : void 0)
}

function uo(e) { var t = e.keyCode; return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0 }

function Aa() { return !0 }

function yf() { return !1 }

function gt(e) {
    function t(r, n, i, a, o) { this._reactName = r, this._targetInst = i, this.type = n, this.nativeEvent = a, this.target = o, this.currentTarget = null; for (var l in e) e.hasOwnProperty(l) && (r = e[l], this[l] = r ? r(a) : a[l]); return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? Aa : yf, this.isPropagationStopped = yf, this }
    return ye(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var r = this.nativeEvent;
            r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = Aa)
        },
        stopPropagation: function() {
            var r = this.nativeEvent;
            r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = Aa)
        },
        persist: function() {},
        isPersistent: Aa
    }), t
}
var Yn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) { return e.timeStamp || Date.now() }, defaultPrevented: 0, isTrusted: 0 },
    Ic = gt(Yn),
    la = ye({}, Yn, { view: 0, detail: 0 }),
    K1 = gt(la),
    ls, ss, si, Cl = ye({}, la, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Mc, button: 0, buttons: 0, relatedTarget: function(e) { return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget }, movementX: function(e) { return "movementX" in e ? e.movementX : (e !== si && (si && e.type === "mousemove" ? (ls = e.screenX - si.screenX, ss = e.screenY - si.screenY) : ss = ls = 0, si = e), ls) }, movementY: function(e) { return "movementY" in e ? e.movementY : ss } }),
    bf = gt(Cl),
    G1 = ye({}, Cl, { dataTransfer: 0 }),
    Y1 = gt(G1),
    X1 = ye({}, la, { relatedTarget: 0 }),
    us = gt(X1),
    Z1 = ye({}, Yn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    J1 = gt(Z1),
    eb = ye({}, Yn, { clipboardData: function(e) { return "clipboardData" in e ? e.clipboardData : window.clipboardData } }),
    tb = gt(eb),
    rb = ye({}, Yn, { data: 0 }),
    Sf = gt(rb),
    nb = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" },
    ib = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" },
    ab = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };

function ob(e) { var t = this.nativeEvent; return t.getModifierState ? t.getModifierState(e) : (e = ab[e]) ? !!t[e] : !1 }

function Mc() { return ob }
var lb = ye({}, la, { key: function(e) { if (e.key) { var t = nb[e.key] || e.key; if (t !== "Unidentified") return t } return e.type === "keypress" ? (e = uo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ib[e.keyCode] || "Unidentified" : "" }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Mc, charCode: function(e) { return e.type === "keypress" ? uo(e) : 0 }, keyCode: function(e) { return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0 }, which: function(e) { return e.type === "keypress" ? uo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0 } }),
    sb = gt(lb),
    ub = ye({}, Cl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }),
    xf = gt(ub),
    cb = ye({}, la, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Mc }),
    db = gt(cb),
    fb = ye({}, Yn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    hb = gt(fb),
    pb = ye({}, Cl, { deltaX: function(e) { return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0 }, deltaY: function(e) { return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0 }, deltaZ: 0, deltaMode: 0 }),
    vb = gt(pb),
    mb = [9, 13, 27, 32],
    Nc = fr && "CompositionEvent" in window,
    bi = null;
fr && "documentMode" in document && (bi = document.documentMode);
var gb = fr && "TextEvent" in window && !bi,
    dv = fr && (!Nc || bi && 8 < bi && 11 >= bi),
    wf = String.fromCharCode(32),
    kf = !1;

function fv(e, t) {
    switch (e) {
        case "keyup":
            return mb.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function hv(e) { return e = e.detail, typeof e == "object" && "data" in e ? e.data : null }
var bn = !1;

function yb(e, t) {
    switch (e) {
        case "compositionend":
            return hv(t);
        case "keypress":
            return t.which !== 32 ? null : (kf = !0, wf);
        case "textInput":
            return e = t.data, e === wf && kf ? null : e;
        default:
            return null
    }
}

function bb(e, t) {
    if (bn) return e === "compositionend" || !Nc && fv(e, t) ? (e = cv(), so = Fc = _r = null, bn = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) { if (t.char && 1 < t.char.length) return t.char; if (t.which) return String.fromCharCode(t.which) }
            return null;
        case "compositionend":
            return dv && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var Sb = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };

function Cf(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t === "input" ? !!Sb[e.type] : t === "textarea" }

function pv(e, t, r, n) { Qp(n), t = zo(t, "onChange"), 0 < t.length && (r = new Ic("onChange", "change", null, r, n), e.push({ event: r, listeners: t })) }
var Si = null,
    Wi = null;

function xb(e) { _v(e, 0) }

function _l(e) { var t = wn(e); if (Bp(t)) return e }

function wb(e, t) { if (e === "change") return t }
var vv = !1;
if (fr) {
    var cs;
    if (fr) {
        var ds = "oninput" in document;
        if (!ds) {
            var _f = document.createElement("div");
            _f.setAttribute("oninput", "return;"), ds = typeof _f.oninput == "function"
        }
        cs = ds
    } else cs = !1;
    vv = cs && (!document.documentMode || 9 < document.documentMode)
}

function Ef() { Si && (Si.detachEvent("onpropertychange", mv), Wi = Si = null) }

function mv(e) {
    if (e.propertyName === "value" && _l(Wi)) {
        var t = [];
        pv(t, Wi, e, Rc(e)), Gp(xb, t)
    }
}

function kb(e, t, r) { e === "focusin" ? (Ef(), Si = t, Wi = r, Si.attachEvent("onpropertychange", mv)) : e === "focusout" && Ef() }

function Cb(e) { if (e === "selectionchange" || e === "keyup" || e === "keydown") return _l(Wi) }

function _b(e, t) { if (e === "click") return _l(t) }

function Eb(e, t) { if (e === "input" || e === "change") return _l(t) }

function Pb(e, t) { return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t }
var jt = typeof Object.is == "function" ? Object.is : Pb;

function Hi(e, t) {
    if (jt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var r = Object.keys(e),
        n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (n = 0; n < r.length; n++) { var i = r[n]; if (!Vs.call(t, i) || !jt(e[i], t[i])) return !1 }
    return !0
}

function Pf(e) { for (; e && e.firstChild;) e = e.firstChild; return e }

function Tf(e, t) {
    var r = Pf(e);
    e = 0;
    for (var n; r;) {
        if (r.nodeType === 3) {
            if (n = e + r.textContent.length, e <= t && n >= t) return { node: r, offset: t - e };
            e = n
        }
        e: {
            for (; r;) {
                if (r.nextSibling) { r = r.nextSibling; break e }
                r = r.parentNode
            }
            r = void 0
        }
        r = Pf(r)
    }
}

function gv(e, t) { return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? gv(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1 }

function yv() {
    for (var e = window, t = _o(); t instanceof e.HTMLIFrameElement;) {
        try { var r = typeof t.contentWindow.location.href == "string" } catch { r = !1 }
        if (r) e = t.contentWindow;
        else break;
        t = _o(e.document)
    }
    return t
}

function Bc(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true") }

function Tb(e) {
    var t = yv(),
        r = e.focusedElem,
        n = e.selectionRange;
    if (t !== r && r && r.ownerDocument && gv(r.ownerDocument.documentElement, r)) {
        if (n !== null && Bc(r)) {
            if (t = n.start, e = n.end, e === void 0 && (e = t), "selectionStart" in r) r.selectionStart = t, r.selectionEnd = Math.min(e, r.value.length);
            else if (e = (t = r.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var i = r.textContent.length,
                    a = Math.min(n.start, i);
                n = n.end === void 0 ? a : Math.min(n.end, i), !e.extend && a > n && (i = n, n = a, a = i), i = Tf(r, a);
                var o = Tf(r, n);
                i && o && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), a > n ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)))
            }
        }
        for (t = [], e = r; e = e.parentNode;) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++) e = t[r], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var Rb = fr && "documentMode" in document && 11 >= document.documentMode,
    Sn = null,
    du = null,
    xi = null,
    fu = !1;

function Rf(e, t, r) {
    var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    fu || Sn == null || Sn !== _o(n) || (n = Sn, "selectionStart" in n && Bc(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = { anchorNode: n.anchorNode, anchorOffset: n.anchorOffset, focusNode: n.focusNode, focusOffset: n.focusOffset }), xi && Hi(xi, n) || (xi = n, n = zo(du, "onSelect"), 0 < n.length && (t = new Ic("onSelect", "select", null, t, r), e.push({ event: t, listeners: n }), t.target = Sn)))
}

function Fa(e, t) { var r = {}; return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r }
var xn = { animationend: Fa("Animation", "AnimationEnd"), animationiteration: Fa("Animation", "AnimationIteration"), animationstart: Fa("Animation", "AnimationStart"), transitionend: Fa("Transition", "TransitionEnd") },
    fs = {},
    bv = {};
fr && (bv = document.createElement("div").style, "AnimationEvent" in window || (delete xn.animationend.animation, delete xn.animationiteration.animation, delete xn.animationstart.animation), "TransitionEvent" in window || delete xn.transitionend.transition);

function El(e) {
    if (fs[e]) return fs[e];
    if (!xn[e]) return e;
    var t = xn[e],
        r;
    for (r in t)
        if (t.hasOwnProperty(r) && r in bv) return fs[e] = t[r];
    return e
}
var Sv = El("animationend"),
    xv = El("animationiteration"),
    wv = El("animationstart"),
    kv = El("transitionend"),
    Cv = new Map,
    Of = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function Br(e, t) { Cv.set(e, t), cn(t, [e]) }
for (var hs = 0; hs < Of.length; hs++) {
    var ps = Of[hs],
        Ob = ps.toLowerCase(),
        $b = ps[0].toUpperCase() + ps.slice(1);
    Br(Ob, "on" + $b)
}
Br(Sv, "onAnimationEnd");
Br(xv, "onAnimationIteration");
Br(wv, "onAnimationStart");
Br("dblclick", "onDoubleClick");
Br("focusin", "onFocus");
Br("focusout", "onBlur");
Br(kv, "onTransitionEnd");
Dn("onMouseEnter", ["mouseout", "mouseover"]);
Dn("onMouseLeave", ["mouseout", "mouseover"]);
Dn("onPointerEnter", ["pointerout", "pointerover"]);
Dn("onPointerLeave", ["pointerout", "pointerover"]);
cn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
cn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
cn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
cn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
cn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
cn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var mi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    zb = new Set("cancel close invalid load scroll toggle".split(" ").concat(mi));

function $f(e, t, r) {
    var n = e.type || "unknown-event";
    e.currentTarget = r, O1(n, t, void 0, e), e.currentTarget = null
}

function _v(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
        var n = e[r],
            i = n.event;
        n = n.listeners;
        e: {
            var a = void 0;
            if (t)
                for (var o = n.length - 1; 0 <= o; o--) {
                    var l = n[o],
                        s = l.instance,
                        u = l.currentTarget;
                    if (l = l.listener, s !== a && i.isPropagationStopped()) break e;
                    $f(i, l, u), a = s
                } else
                    for (o = 0; o < n.length; o++) {
                        if (l = n[o], s = l.instance, u = l.currentTarget, l = l.listener, s !== a && i.isPropagationStopped()) break e;
                        $f(i, l, u), a = s
                    }
        }
    }
    if (Po) throw e = lu, Po = !1, lu = null, e
}

function se(e, t) {
    var r = t[gu];
    r === void 0 && (r = t[gu] = new Set);
    var n = e + "__bubble";
    r.has(n) || (Ev(t, e, 2, !1), r.add(n))
}

function vs(e, t, r) {
    var n = 0;
    t && (n |= 4), Ev(r, e, n, t)
}
var Ia = "_reactListening" + Math.random().toString(36).slice(2);

function Ui(e) {
    if (!e[Ia]) {
        e[Ia] = !0, Ap.forEach(function(r) { r !== "selectionchange" && (zb.has(r) || vs(r, !1, e), vs(r, !0, e)) });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Ia] || (t[Ia] = !0, vs("selectionchange", !1, t))
    }
}

function Ev(e, t, r, n) {
    switch (uv(t)) {
        case 1:
            var i = V1;
            break;
        case 4:
            i = q1;
            break;
        default:
            i = Ac
    }
    r = i.bind(null, t, r, e), i = void 0, !ou || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), n ? i !== void 0 ? e.addEventListener(t, r, { capture: !0, passive: i }) : e.addEventListener(t, r, !0) : i !== void 0 ? e.addEventListener(t, r, { passive: i }) : e.addEventListener(t, r, !1)
}

function ms(e, t, r, n, i) {
    var a = n;
    if ((t & 1) === 0 && (t & 2) === 0 && n !== null) e: for (;;) {
        if (n === null) return;
        var o = n.tag;
        if (o === 3 || o === 4) {
            var l = n.stateNode.containerInfo;
            if (l === i || l.nodeType === 8 && l.parentNode === i) break;
            if (o === 4)
                for (o = n.return; o !== null;) {
                    var s = o.tag;
                    if ((s === 3 || s === 4) && (s = o.stateNode.containerInfo, s === i || s.nodeType === 8 && s.parentNode === i)) return;
                    o = o.return
                }
            for (; l !== null;) {
                if (o = Gr(l), o === null) return;
                if (s = o.tag, s === 5 || s === 6) { n = a = o; continue e }
                l = l.parentNode
            }
        }
        n = n.return
    }
    Gp(function() {
        var u = a,
            c = Rc(r),
            p = [];
        e: {
            var h = Cv.get(e);
            if (h !== void 0) {
                var g = Ic,
                    y = e;
                switch (e) {
                    case "keypress":
                        if (uo(r) === 0) break e;
                    case "keydown":
                    case "keyup":
                        g = sb;
                        break;
                    case "focusin":
                        y = "focus", g = us;
                        break;
                    case "focusout":
                        y = "blur", g = us;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        g = us;
                        break;
                    case "click":
                        if (r.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        g = bf;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        g = Y1;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        g = db;
                        break;
                    case Sv:
                    case xv:
                    case wv:
                        g = J1;
                        break;
                    case kv:
                        g = hb;
                        break;
                    case "scroll":
                        g = K1;
                        break;
                    case "wheel":
                        g = vb;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        g = tb;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        g = xf
                }
                var x = (t & 4) !== 0,
                    R = !x && e === "scroll",
                    v = x ? h !== null ? h + "Capture" : null : h;
                x = [];
                for (var d = u, m; d !== null;) {
                    m = d;
                    var C = m.stateNode;
                    if (m.tag === 5 && C !== null && (m = C, v !== null && (C = Bi(d, v), C != null && x.push(Qi(d, C, m)))), R) break;
                    d = d.return
                }
                0 < x.length && (h = new g(h, y, null, r, c), p.push({ event: h, listeners: x }))
            }
        }
        if ((t & 7) === 0) {
            e: {
                if (h = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", h && r !== iu && (y = r.relatedTarget || r.fromElement) && (Gr(y) || y[hr])) break e;
                if ((g || h) && (h = c.window === c ? c : (h = c.ownerDocument) ? h.defaultView || h.parentWindow : window, g ? (y = r.relatedTarget || r.toElement, g = u, y = y ? Gr(y) : null, y !== null && (R = dn(y), y !== R || y.tag !== 5 && y.tag !== 6) && (y = null)) : (g = null, y = u), g !== y)) {
                    if (x = bf, C = "onMouseLeave", v = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (x = xf, C = "onPointerLeave", v = "onPointerEnter", d = "pointer"), R = g == null ? h : wn(g), m = y == null ? h : wn(y), h = new x(C, d + "leave", g, r, c), h.target = R, h.relatedTarget = m, C = null, Gr(c) === u && (x = new x(v, d + "enter", y, r, c), x.target = m, x.relatedTarget = R, C = x), R = C, g && y) t: {
                        for (x = g, v = y, d = 0, m = x; m; m = pn(m)) d++;
                        for (m = 0, C = v; C; C = pn(C)) m++;
                        for (; 0 < d - m;) x = pn(x),
                        d--;
                        for (; 0 < m - d;) v = pn(v),
                        m--;
                        for (; d--;) {
                            if (x === v || v !== null && x === v.alternate) break t;
                            x = pn(x), v = pn(v)
                        }
                        x = null
                    }
                    else x = null;
                    g !== null && zf(p, h, g, x, !1), y !== null && R !== null && zf(p, R, y, x, !0)
                }
            }
            e: {
                if (h = u ? wn(u) : window, g = h.nodeName && h.nodeName.toLowerCase(), g === "select" || g === "input" && h.type === "file") var E = wb;
                else if (Cf(h))
                    if (vv) E = Eb;
                    else { E = Cb; var P = kb }
                else(g = h.nodeName) && g.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (E = _b);
                if (E && (E = E(e, u))) { pv(p, E, r, c); break e }
                P && P(e, h, u),
                e === "focusout" && (P = h._wrapperState) && P.controlled && h.type === "number" && Js(h, "number", h.value)
            }
            switch (P = u ? wn(u) : window, e) {
                case "focusin":
                    (Cf(P) || P.contentEditable === "true") && (Sn = P, du = u, xi = null);
                    break;
                case "focusout":
                    xi = du = Sn = null;
                    break;
                case "mousedown":
                    fu = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    fu = !1, Rf(p, r, c);
                    break;
                case "selectionchange":
                    if (Rb) break;
                case "keydown":
                case "keyup":
                    Rf(p, r, c)
            }
            var _;
            if (Nc) e: {
                switch (e) {
                    case "compositionstart":
                        var $ = "onCompositionStart";
                        break e;
                    case "compositionend":
                        $ = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        $ = "onCompositionUpdate";
                        break e
                }
                $ = void 0
            }
            else bn ? fv(e, r) && ($ = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && ($ = "onCompositionStart");$ && (dv && r.locale !== "ko" && (bn || $ !== "onCompositionStart" ? $ === "onCompositionEnd" && bn && (_ = cv()) : (_r = c, Fc = "value" in _r ? _r.value : _r.textContent, bn = !0)), P = zo(u, $), 0 < P.length && ($ = new Sf($, e, null, r, c), p.push({ event: $, listeners: P }), _ ? $.data = _ : (_ = hv(r), _ !== null && ($.data = _)))),
            (_ = gb ? yb(e, r) : bb(e, r)) && (u = zo(u, "onBeforeInput"), 0 < u.length && (c = new Sf("onBeforeInput", "beforeinput", null, r, c), p.push({ event: c, listeners: u }), c.data = _))
        }
        _v(p, t)
    })
}

function Qi(e, t, r) { return { instance: e, listener: t, currentTarget: r } }

function zo(e, t) {
    for (var r = t + "Capture", n = []; e !== null;) {
        var i = e,
            a = i.stateNode;
        i.tag === 5 && a !== null && (i = a, a = Bi(e, r), a != null && n.unshift(Qi(e, a, i)), a = Bi(e, t), a != null && n.push(Qi(e, a, i))), e = e.return
    }
    return n
}

function pn(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function zf(e, t, r, n, i) {
    for (var a = t._reactName, o = []; r !== null && r !== n;) {
        var l = r,
            s = l.alternate,
            u = l.stateNode;
        if (s !== null && s === n) break;
        l.tag === 5 && u !== null && (l = u, i ? (s = Bi(r, a), s != null && o.unshift(Qi(r, s, l))) : i || (s = Bi(r, a), s != null && o.push(Qi(r, s, l)))), r = r.return
    }
    o.length !== 0 && e.push({ event: t, listeners: o })
}
var Ab = /\r\n?/g,
    Fb = /\u0000|\uFFFD/g;

function Af(e) { return (typeof e == "string" ? e : "" + e).replace(Ab, ` `).replace(Fb, "") }

function Ma(e, t, r) { if (t = Af(t), Af(e) !== t && r) throw Error(O(425)) }

function Ao() {}
var hu = null,
    pu = null;

function vu(e, t) { return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null }
var mu = typeof setTimeout == "function" ? setTimeout : void 0,
    Ib = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ff = typeof Promise == "function" ? Promise : void 0,
    Mb = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ff != "undefined" ? function(e) { return Ff.resolve(null).then(e).catch(Nb) } : mu;

function Nb(e) { setTimeout(function() { throw e }) }

function gs(e, t) {
    var r = t,
        n = 0;
    do {
        var i = r.nextSibling;
        if (e.removeChild(r), i && i.nodeType === 8)
            if (r = i.data, r === "/$") {
                if (n === 0) { e.removeChild(i), ji(t); return }
                n--
            } else r !== "$" && r !== "$?" && r !== "$!" || n++;
        r = i
    } while (r);
    ji(t)
}

function sr(e) { for (; e != null; e = e.nextSibling) { var t = e.nodeType; if (t === 1 || t === 3) break; if (t === 8) { if (t = e.data, t === "$" || t === "$!" || t === "$?") break; if (t === "/$") return null } } return e }

function If(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var r = e.data;
            if (r === "$" || r === "$!" || r === "$?") {
                if (t === 0) return e;
                t--
            } else r === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Xn = Math.random().toString(36).slice(2),
    Kt = "__reactFiber$" + Xn,
    Vi = "__reactProps$" + Xn,
    hr = "__reactContainer$" + Xn,
    gu = "__reactEvents$" + Xn,
    Bb = "__reactListeners$" + Xn,
    Lb = "__reactHandles$" + Xn;

function Gr(e) {
    var t = e[Kt];
    if (t) return t;
    for (var r = e.parentNode; r;) {
        if (t = r[hr] || r[Kt]) {
            if (r = t.alternate, t.child !== null || r !== null && r.child !== null)
                for (e = If(e); e !== null;) {
                    if (r = e[Kt]) return r;
                    e = If(e)
                }
            return t
        }
        e = r, r = e.parentNode
    }
    return null
}

function sa(e) { return e = e[Kt] || e[hr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e }

function wn(e) { if (e.tag === 5 || e.tag === 6) return e.stateNode; throw Error(O(33)) }

function Pl(e) { return e[Vi] || null }
var yu = [],
    kn = -1;

function Lr(e) { return { current: e } }

function ce(e) { 0 > kn || (e.current = yu[kn], yu[kn] = null, kn--) }

function oe(e, t) { kn++, yu[kn] = e.current, e.current = t }
var Mr = {},
    Ve = Lr(Mr),
    nt = Lr(!1),
    nn = Mr;

function jn(e, t) {
    var r = e.type.contextTypes;
    if (!r) return Mr;
    var n = e.stateNode;
    if (n && n.__reactInternalMemoizedUnmaskedChildContext === t) return n.__reactInternalMemoizedMaskedChildContext;
    var i = {},
        a;
    for (a in r) i[a] = t[a];
    return n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
}

function it(e) { return e = e.childContextTypes, e != null }

function Fo() { ce(nt), ce(Ve) }

function Mf(e, t, r) {
    if (Ve.current !== Mr) throw Error(O(168));
    oe(Ve, t), oe(nt, r)
}

function Pv(e, t, r) {
    var n = e.stateNode;
    if (t = t.childContextTypes, typeof n.getChildContext != "function") return r;
    n = n.getChildContext();
    for (var i in n)
        if (!(i in t)) throw Error(O(108, k1(e) || "Unknown", i));
    return ye({}, r, n)
}

function Io(e) { return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Mr, nn = Ve.current, oe(Ve, e), oe(nt, nt.current), !0 }

function Nf(e, t, r) {
    var n = e.stateNode;
    if (!n) throw Error(O(169));
    r ? (e = Pv(e, t, nn), n.__reactInternalMemoizedMergedChildContext = e, ce(nt), ce(Ve), oe(Ve, e)) : ce(nt), oe(nt, r)
}
var or = null,
    Tl = !1,
    ys = !1;

function Tv(e) { or === null ? or = [e] : or.push(e) }

function Db(e) { Tl = !0, Tv(e) }

function Dr() {
    if (!ys && or !== null) {
        ys = !0;
        var e = 0,
            t = te;
        try {
            var r = or;
            for (te = 1; e < r.length; e++) {
                var n = r[e];
                do n = n(!0); while (n !== null)
            }
            or = null, Tl = !1
        } catch (i) { throw or !== null && (or = or.slice(e + 1)), Jp(Oc, Dr), i } finally { te = t, ys = !1 }
    }
    return null
}
var jb = vr.ReactCurrentBatchConfig;

function Mt(e, t) { if (e && e.defaultProps) { t = ye({}, t), e = e.defaultProps; for (var r in e) t[r] === void 0 && (t[r] = e[r]); return t } return t }
var Mo = Lr(null),
    No = null,
    Cn = null,
    Lc = null;

function Dc() { Lc = Cn = No = null }

function jc(e) {
    var t = Mo.current;
    ce(Mo), e._currentValue = t
}

function bu(e, t, r) {
    for (; e !== null;) {
        var n = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === r) break;
        e = e.return
    }
}

function In(e, t) { No = e, Lc = Cn = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (rt = !0), e.firstContext = null) }

function Pt(e) {
    var t = e._currentValue;
    if (Lc !== e)
        if (e = { context: e, memoizedValue: t, next: null }, Cn === null) {
            if (No === null) throw Error(O(308));
            Cn = e, No.dependencies = { lanes: 0, firstContext: e }
        } else Cn = Cn.next = e;
    return t
}
var Lt = null,
    xr = !1;

function Wc(e) { e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null } }

function Rv(e, t) { e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects }) }

function dr(e, t) { return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null } }

function zr(e, t) {
    var r = e.updateQueue;
    r !== null && (r = r.shared, ym(e) ? (e = r.interleaved, e === null ? (t.next = t, Lt === null ? Lt = [r] : Lt.push(r)) : (t.next = e.next, e.next = t), r.interleaved = t) : (e = r.pending, e === null ? t.next = t : (t.next = e.next, e.next = t), r.pending = t))
}

function co(e, t, r) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (r & 4194240) !== 0)) {
        var n = t.lanes;
        n &= e.pendingLanes, r |= n, t.lanes = r, $c(e, r)
    }
}

function Bf(e, t) {
    var r = e.updateQueue,
        n = e.alternate;
    if (n !== null && (n = n.updateQueue, r === n)) {
        var i = null,
            a = null;
        if (r = r.firstBaseUpdate, r !== null) {
            do {
                var o = { eventTime: r.eventTime, lane: r.lane, tag: r.tag, payload: r.payload, callback: r.callback, next: null };
                a === null ? i = a = o : a = a.next = o, r = r.next
            } while (r !== null);
            a === null ? i = a = t : a = a.next = t
        } else i = a = t;
        r = { baseState: n.baseState, firstBaseUpdate: i, lastBaseUpdate: a, shared: n.shared, effects: n.effects }, e.updateQueue = r;
        return
    }
    e = r.lastBaseUpdate, e === null ? r.firstBaseUpdate = t : e.next = t, r.lastBaseUpdate = t
}

function Bo(e, t, r, n) {
    var i = e.updateQueue;
    xr = !1;
    var a = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        l = i.shared.pending;
    if (l !== null) {
        i.shared.pending = null;
        var s = l,
            u = s.next;
        s.next = null, o === null ? a = u : o.next = u, o = s;
        var c = e.alternate;
        c !== null && (c = c.updateQueue, l = c.lastBaseUpdate, l !== o && (l === null ? c.firstBaseUpdate = u : l.next = u, c.lastBaseUpdate = s))
    }
    if (a !== null) {
        var p = i.baseState;
        o = 0, c = u = s = null, l = a;
        do {
            var h = l.lane,
                g = l.eventTime;
            if ((n & h) === h) {
                c !== null && (c = c.next = { eventTime: g, lane: 0, tag: l.tag, payload: l.payload, callback: l.callback, next: null });
                e: {
                    var y = e,
                        x = l;
                    switch (h = t, g = r, x.tag) {
                        case 1:
                            if (y = x.payload, typeof y == "function") { p = y.call(g, p, h); break e }
                            p = y;
                            break e;
                        case 3:
                            y.flags = y.flags & -65537 | 128;
                        case 0:
                            if (y = x.payload, h = typeof y == "function" ? y.call(g, p, h) : y, h == null) break e;
                            p = ye({}, p, h);
                            break e;
                        case 2:
                            xr = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64, h = i.effects, h === null ? i.effects = [l] : h.push(l))
            } else g = { eventTime: g, lane: h, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, c === null ? (u = c = g, s = p) : c = c.next = g, o |= h;
            if (l = l.next, l === null) {
                if (l = i.shared.pending, l === null) break;
                h = l, l = h.next, h.next = null, i.lastBaseUpdate = h, i.shared.pending = null
            }
        } while (1);
        if (c === null && (s = p), i.baseState = s, i.firstBaseUpdate = u, i.lastBaseUpdate = c, t = i.shared.interleaved, t !== null) {
            i = t;
            do o |= i.lane, i = i.next; while (i !== t)
        } else a === null && (i.shared.lanes = 0);
        ln |= o, e.lanes = o, e.memoizedState = p
    }
}

function Lf(e, t, r) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var n = e[t],
                i = n.callback;
            if (i !== null) {
                if (n.callback = null, n = r, typeof i != "function") throw Error(O(191, i));
                i.call(n)
            }
        }
}
var Ov = new zp.Component().refs;

function Su(e, t, r, n) { t = e.memoizedState, r = r(n, t), r = r == null ? t : ye({}, t, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r) }
var Rl = {
    isMounted: function(e) { return (e = e._reactInternals) ? dn(e) === e : !1 },
    enqueueSetState: function(e, t, r) {
        e = e._reactInternals;
        var n = Ye(),
            i = Fr(e),
            a = dr(n, i);
        a.payload = t, r != null && (a.callback = r), zr(e, a), t = _t(e, i, n), t !== null && co(t, e, i)
    },
    enqueueReplaceState: function(e, t, r) {
        e = e._reactInternals;
        var n = Ye(),
            i = Fr(e),
            a = dr(n, i);
        a.tag = 1, a.payload = t, r != null && (a.callback = r), zr(e, a), t = _t(e, i, n), t !== null && co(t, e, i)
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var r = Ye(),
            n = Fr(e),
            i = dr(r, n);
        i.tag = 2, t != null && (i.callback = t), zr(e, i), t = _t(e, n, r), t !== null && co(t, e, n)
    }
};

function Df(e, t, r, n, i, a, o) { return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Hi(r, n) || !Hi(i, a) : !0 }

function $v(e, t, r) {
    var n = !1,
        i = Mr,
        a = t.contextType;
    return typeof a == "object" && a !== null ? a = Pt(a) : (i = it(t) ? nn : Ve.current, n = t.contextTypes, a = (n = n != null) ? jn(e, i) : Mr), t = new t(r, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Rl, e.stateNode = t, t._reactInternals = e, n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = a), t
}

function jf(e, t, r, n) { e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, n), t.state !== e && Rl.enqueueReplaceState(t, t.state, null) }

function xu(e, t, r, n) {
    var i = e.stateNode;
    i.props = r, i.state = e.memoizedState, i.refs = Ov, Wc(e);
    var a = t.contextType;
    typeof a == "object" && a !== null ? i.context = Pt(a) : (a = it(t) ? nn : Ve.current, i.context = jn(e, a)), i.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (Su(e, t, a, r), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Rl.enqueueReplaceState(i, i.state, null), Bo(e, r, i, n), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}
var _n = [],
    En = 0,
    Lo = null,
    Do = 0,
    xt = [],
    wt = 0,
    an = null,
    ur = 1,
    cr = "";

function Qr(e, t) { _n[En++] = Do, _n[En++] = Lo, Lo = e, Do = t }

function zv(e, t, r) {
    xt[wt++] = ur, xt[wt++] = cr, xt[wt++] = an, an = e;
    var n = ur;
    e = cr;
    var i = 32 - Dt(n) - 1;
    n &= ~(1 << i), r += 1;
    var a = 32 - Dt(t) + i;
    if (30 < a) {
        var o = i - i % 5;
        a = (n & (1 << o) - 1).toString(32), n >>= o, i -= o, ur = 1 << 32 - Dt(t) + i | r << i | n, cr = a + e
    } else ur = 1 << a | r << i | n, cr = e
}

function Hc(e) { e.return !== null && (Qr(e, 1), zv(e, 1, 0)) }

function Uc(e) { for (; e === Lo;) Lo = _n[--En], _n[En] = null, Do = _n[--En], _n[En] = null; for (; e === an;) an = xt[--wt], xt[wt] = null, cr = xt[--wt], xt[wt] = null, ur = xt[--wt], xt[wt] = null }
var ht = null,
    tt = null,
    pe = !1,
    Bt = null;

function Av(e, t) {
    var r = kt(5, null, null, 0);
    r.elementType = "DELETED", r.stateNode = t, r.return = e, t = e.deletions, t === null ? (e.deletions = [r], e.flags |= 16) : t.push(r)
}

function Wf(e, t) {
    switch (e.tag) {
        case 5:
            var r = e.type;
            return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ht = e, tt = sr(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ht = e, tt = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (r = an !== null ? { id: ur, overflow: cr } : null, e.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }, r = kt(18, null, null, 0), r.stateNode = t, r.return = e, e.child = r, ht = e, tt = null, !0) : !1;
        default:
            return !1
    }
}

function wu(e) { return (e.mode & 1) !== 0 && (e.flags & 128) === 0 }

function ku(e) {
    if (pe) {
        var t = tt;
        if (t) {
            var r = t;
            if (!Wf(e, t)) {
                if (wu(e)) throw Error(O(418));
                t = sr(r.nextSibling);
                var n = ht;
                t && Wf(e, t) ? Av(n, r) : (e.flags = e.flags & -4097 | 2, pe = !1, ht = e)
            }
        } else {
            if (wu(e)) throw Error(O(418));
            e.flags = e.flags & -4097 | 2, pe = !1, ht = e
        }
    }
}

function Hf(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    ht = e
}

function ui(e) {
    if (e !== ht) return !1;
    if (!pe) return Hf(e), pe = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !vu(e.type, e.memoizedProps)), t && (t = tt)) { if (wu(e)) { for (e = tt; e;) e = sr(e.nextSibling); throw Error(O(418)) } for (; t;) Av(e, t), t = sr(t.nextSibling) }
    if (Hf(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(O(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var r = e.data;
                    if (r === "/$") {
                        if (t === 0) { tt = sr(e.nextSibling); break e }
                        t--
                    } else r !== "$" && r !== "$!" && r !== "$?" || t++
                }
                e = e.nextSibling
            }
            tt = null
        }
    } else tt = ht ? sr(e.stateNode.nextSibling) : null;
    return !0
}

function Wn() { tt = ht = null, pe = !1 }

function Qc(e) { Bt === null ? Bt = [e] : Bt.push(e) }

function ci(e, t, r) {
    if (e = r.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (r._owner) {
            if (r = r._owner, r) { if (r.tag !== 1) throw Error(O(309)); var n = r.stateNode }
            if (!n) throw Error(O(147, e));
            var i = n,
                a = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(o) {
                var l = i.refs;
                l === Ov && (l = i.refs = {}), o === null ? delete l[a] : l[a] = o
            }, t._stringRef = a, t)
        }
        if (typeof e != "string") throw Error(O(284));
        if (!r._owner) throw Error(O(290, e))
    }
    return e
}

function Na(e, t) { throw e = Object.prototype.toString.call(t), Error(O(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)) }

function Uf(e) { var t = e._init; return t(e._payload) }

function Fv(e) {
    function t(v, d) {
        if (e) {
            var m = v.deletions;
            m === null ? (v.deletions = [d], v.flags |= 16) : m.push(d)
        }
    }

    function r(v, d) { if (!e) return null; for (; d !== null;) t(v, d), d = d.sibling; return null }

    function n(v, d) { for (v = new Map; d !== null;) d.key !== null ? v.set(d.key, d) : v.set(d.index, d), d = d.sibling; return v }

    function i(v, d) { return v = Nr(v, d), v.index = 0, v.sibling = null, v }

    function a(v, d, m) { return v.index = m, e ? (m = v.alternate, m !== null ? (m = m.index, m < d ? (v.flags |= 2, d) : m) : (v.flags |= 2, d)) : (v.flags |= 1048576, d) }

    function o(v) { return e && v.alternate === null && (v.flags |= 2), v }

    function l(v, d, m, C) { return d === null || d.tag !== 6 ? (d = Cs(m, v.mode, C), d.return = v, d) : (d = i(d, m), d.return = v, d) }

    function s(v, d, m, C) { var E = m.type; return E === yn ? c(v, d, m.props.children, C, m.key) : d !== null && (d.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Sr && Uf(E) === d.type) ? (C = i(d, m.props), C.ref = ci(v, d, m), C.return = v, C) : (C = mo(m.type, m.key, m.props, null, v.mode, C), C.ref = ci(v, d, m), C.return = v, C) }

    function u(v, d, m, C) { return d === null || d.tag !== 4 || d.stateNode.containerInfo !== m.containerInfo || d.stateNode.implementation !== m.implementation ? (d = _s(m, v.mode, C), d.return = v, d) : (d = i(d, m.children || []), d.return = v, d) }

    function c(v, d, m, C, E) { return d === null || d.tag !== 7 ? (d = en(m, v.mode, C, E), d.return = v, d) : (d = i(d, m), d.return = v, d) }

    function p(v, d, m) {
        if (typeof d == "string" && d !== "" || typeof d == "number") return d = Cs("" + d, v.mode, m), d.return = v, d;
        if (typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
                case Pa:
                    return m = mo(d.type, d.key, d.props, null, v.mode, m), m.ref = ci(v, null, d), m.return = v, m;
                case gn:
                    return d = _s(d, v.mode, m), d.return = v, d;
                case Sr:
                    var C = d._init;
                    return p(v, C(d._payload), m)
            }
            if (pi(d) || ii(d)) return d = en(d, v.mode, m, null), d.return = v, d;
            Na(v, d)
        }
        return null
    }

    function h(v, d, m, C) {
        var E = d !== null ? d.key : null;
        if (typeof m == "string" && m !== "" || typeof m == "number") return E !== null ? null : l(v, d, "" + m, C);
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case Pa:
                    return m.key === E ? s(v, d, m, C) : null;
                case gn:
                    return m.key === E ? u(v, d, m, C) : null;
                case Sr:
                    return E = m._init, h(v, d, E(m._payload), C)
            }
            if (pi(m) || ii(m)) return E !== null ? null : c(v, d, m, C, null);
            Na(v, m)
        }
        return null
    }

    function g(v, d, m, C, E) {
        if (typeof C == "string" && C !== "" || typeof C == "number") return v = v.get(m) || null, l(d, v, "" + C, E);
        if (typeof C == "object" && C !== null) {
            switch (C.$$typeof) {
                case Pa:
                    return v = v.get(C.key === null ? m : C.key) || null, s(d, v, C, E);
                case gn:
                    return v = v.get(C.key === null ? m : C.key) || null, u(d, v, C, E);
                case Sr:
                    var P = C._init;
                    return g(v, d, m, P(C._payload), E)
            }
            if (pi(C) || ii(C)) return v = v.get(m) || null, c(d, v, C, E, null);
            Na(d, C)
        }
        return null
    }

    function y(v, d, m, C) {
        for (var E = null, P = null, _ = d, $ = d = 0, M = null; _ !== null && $ < m.length; $++) {
            _.index > $ ? (M = _, _ = null) : M = _.sibling;
            var A = h(v, _, m[$], C);
            if (A === null) { _ === null && (_ = M); break }
            e && _ && A.alternate === null && t(v, _), d = a(A, d, $), P === null ? E = A : P.sibling = A, P = A, _ = M
        }
        if ($ === m.length) return r(v, _), pe && Qr(v, $), E;
        if (_ === null) { for (; $ < m.length; $++) _ = p(v, m[$], C), _ !== null && (d = a(_, d, $), P === null ? E = _ : P.sibling = _, P = _); return pe && Qr(v, $), E }
        for (_ = n(v, _); $ < m.length; $++) M = g(_, v, $, m[$], C), M !== null && (e && M.alternate !== null && _.delete(M.key === null ? $ : M.key), d = a(M, d, $), P === null ? E = M : P.sibling = M, P = M);
        return e && _.forEach(function(K) { return t(v, K) }), pe && Qr(v, $), E
    }

    function x(v, d, m, C) {
        var E = ii(m);
        if (typeof E != "function") throw Error(O(150));
        if (m = E.call(m), m == null) throw Error(O(151));
        for (var P = E = null, _ = d, $ = d = 0, M = null, A = m.next(); _ !== null && !A.done; $++, A = m.next()) {
            _.index > $ ? (M = _, _ = null) : M = _.sibling;
            var K = h(v, _, A.value, C);
            if (K === null) { _ === null && (_ = M); break }
            e && _ && K.alternate === null && t(v, _), d = a(K, d, $), P === null ? E = K : P.sibling = K, P = K, _ = M
        }
        if (A.done) return r(v, _), pe && Qr(v, $), E;
        if (_ === null) { for (; !A.done; $++, A = m.next()) A = p(v, A.value, C), A !== null && (d = a(A, d, $), P === null ? E = A : P.sibling = A, P = A); return pe && Qr(v, $), E }
        for (_ = n(v, _); !A.done; $++, A = m.next()) A = g(_, v, $, A.value, C), A !== null && (e && A.alternate !== null && _.delete(A.key === null ? $ : A.key), d = a(A, d, $), P === null ? E = A : P.sibling = A, P = A);
        return e && _.forEach(function(X) { return t(v, X) }), pe && Qr(v, $), E
    }

    function R(v, d, m, C) {
        if (typeof m == "object" && m !== null && m.type === yn && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case Pa:
                    e: {
                        for (var E = m.key, P = d; P !== null;) {
                            if (P.key === E) {
                                if (E = m.type, E === yn) { if (P.tag === 7) { r(v, P.sibling), d = i(P, m.props.children), d.return = v, v = d; break e } } else if (P.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Sr && Uf(E) === P.type) { r(v, P.sibling), d = i(P, m.props), d.ref = ci(v, P, m), d.return = v, v = d; break e }
                                r(v, P);
                                break
                            } else t(v, P);
                            P = P.sibling
                        }
                        m.type === yn ? (d = en(m.props.children, v.mode, C, m.key), d.return = v, v = d) : (C = mo(m.type, m.key, m.props, null, v.mode, C), C.ref = ci(v, d, m), C.return = v, v = C)
                    }
                    return o(v);
                case gn:
                    e: {
                        for (P = m.key; d !== null;) {
                            if (d.key === P)
                                if (d.tag === 4 && d.stateNode.containerInfo === m.containerInfo && d.stateNode.implementation === m.implementation) { r(v, d.sibling), d = i(d, m.children || []), d.return = v, v = d; break e } else { r(v, d); break }
                            else t(v, d);
                            d = d.sibling
                        }
                        d = _s(m, v.mode, C),
                        d.return = v,
                        v = d
                    }
                    return o(v);
                case Sr:
                    return P = m._init, R(v, d, P(m._payload), C)
            }
            if (pi(m)) return y(v, d, m, C);
            if (ii(m)) return x(v, d, m, C);
            Na(v, m)
        }
        return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, d !== null && d.tag === 6 ? (r(v, d.sibling), d = i(d, m), d.return = v, v = d) : (r(v, d), d = Cs(m, v.mode, C), d.return = v, v = d), o(v)) : r(v, d)
    }
    return R
}
var Hn = Fv(!0),
    Iv = Fv(!1),
    ua = {},
    Jt = Lr(ua),
    qi = Lr(ua),
    Ki = Lr(ua);

function Yr(e) { if (e === ua) throw Error(O(174)); return e }

function Vc(e, t) {
    switch (oe(Ki, t), oe(qi, e), oe(Jt, ua), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : tu(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = tu(t, e)
    }
    ce(Jt), oe(Jt, t)
}

function Un() { ce(Jt), ce(qi), ce(Ki) }

function Mv(e) {
    Yr(Ki.current);
    var t = Yr(Jt.current),
        r = tu(t, e.type);
    t !== r && (oe(qi, e), oe(Jt, r))
}

function qc(e) { qi.current === e && (ce(Jt), ce(qi)) }
var me = Lr(0);

function jo(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) { var r = t.memoizedState; if (r !== null && (r = r.dehydrated, r === null || r.data === "$?" || r.data === "$!")) return t } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) { if ((t.flags & 128) !== 0) return t } else if (t.child !== null) { t.child.return = t, t = t.child; continue }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var bs = [];

function Kc() {
    for (var e = 0; e < bs.length; e++) bs[e]._workInProgressVersionPrimary = null;
    bs.length = 0
}
var fo = vr.ReactCurrentDispatcher,
    Ss = vr.ReactCurrentBatchConfig,
    on = 0,
    ge = null,
    Te = null,
    Fe = null,
    Wo = !1,
    wi = !1,
    Gi = 0,
    Wb = 0;

function je() { throw Error(O(321)) }

function Gc(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++)
        if (!jt(e[r], t[r])) return !1;
    return !0
}

function Yc(e, t, r, n, i, a) {
    if (on = a, ge = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, fo.current = e === null || e.memoizedState === null ? Vb : qb, e = r(n, i), wi) {
        a = 0;
        do {
            if (wi = !1, Gi = 0, 25 <= a) throw Error(O(301));
            a += 1, Fe = Te = null, t.updateQueue = null, fo.current = Kb, e = r(n, i)
        } while (wi)
    }
    if (fo.current = Ho, t = Te !== null && Te.next !== null, on = 0, Fe = Te = ge = null, Wo = !1, t) throw Error(O(300));
    return e
}

function Xc() { var e = Gi !== 0; return Gi = 0, e }

function Qt() { var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return Fe === null ? ge.memoizedState = Fe = e : Fe = Fe.next = e, Fe }

function Tt() {
    if (Te === null) {
        var e = ge.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = Te.next;
    var t = Fe === null ? ge.memoizedState : Fe.next;
    if (t !== null) Fe = t, Te = e;
    else {
        if (e === null) throw Error(O(310));
        Te = e, e = { memoizedState: Te.memoizedState, baseState: Te.baseState, baseQueue: Te.baseQueue, queue: Te.queue, next: null }, Fe === null ? ge.memoizedState = Fe = e : Fe = Fe.next = e
    }
    return Fe
}

function Yi(e, t) { return typeof t == "function" ? t(e) : t }

function xs(e) {
    var t = Tt(),
        r = t.queue;
    if (r === null) throw Error(O(311));
    r.lastRenderedReducer = e;
    var n = Te,
        i = n.baseQueue,
        a = r.pending;
    if (a !== null) {
        if (i !== null) {
            var o = i.next;
            i.next = a.next, a.next = o
        }
        n.baseQueue = i = a, r.pending = null
    }
    if (i !== null) {
        a = i.next, n = n.baseState;
        var l = o = null,
            s = null,
            u = a;
        do {
            var c = u.lane;
            if ((on & c) === c) s !== null && (s = s.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), n = u.hasEagerState ? u.eagerState : e(n, u.action);
            else {
                var p = { lane: c, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
                s === null ? (l = s = p, o = n) : s = s.next = p, ge.lanes |= c, ln |= c
            }
            u = u.next
        } while (u !== null && u !== a);
        s === null ? o = n : s.next = l, jt(n, t.memoizedState) || (rt = !0), t.memoizedState = n, t.baseState = o, t.baseQueue = s, r.lastRenderedState = n
    }
    if (e = r.interleaved, e !== null) {
        i = e;
        do a = i.lane, ge.lanes |= a, ln |= a, i = i.next; while (i !== e)
    } else i === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch]
}

function ws(e) {
    var t = Tt(),
        r = t.queue;
    if (r === null) throw Error(O(311));
    r.lastRenderedReducer = e;
    var n = r.dispatch,
        i = r.pending,
        a = t.memoizedState;
    if (i !== null) {
        r.pending = null;
        var o = i = i.next;
        do a = e(a, o.action), o = o.next; while (o !== i);
        jt(a, t.memoizedState) || (rt = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), r.lastRenderedState = a
    }
    return [a, n]
}

function Nv() {}

function Bv(e, t) {
    var r = ge,
        n = Tt(),
        i = t(),
        a = !jt(n.memoizedState, i);
    if (a && (n.memoizedState = i, rt = !0), n = n.queue, Zc(jv.bind(null, r, n, e), [e]), n.getSnapshot !== t || a || Fe !== null && Fe.memoizedState.tag & 1) {
        if (r.flags |= 2048, Xi(9, Dv.bind(null, r, n, i, t), void 0, null), $e === null) throw Error(O(349));
        (on & 30) !== 0 || Lv(r, t, i)
    }
    return i
}

function Lv(e, t, r) { e.flags |= 16384, e = { getSnapshot: t, value: r }, t = ge.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ge.updateQueue = t, t.stores = [e]) : (r = t.stores, r === null ? t.stores = [e] : r.push(e)) }

function Dv(e, t, r, n) { t.value = r, t.getSnapshot = n, Wv(t) && _t(e, 1, -1) }

function jv(e, t, r) { return r(function() { Wv(t) && _t(e, 1, -1) }) }

function Wv(e) {
    var t = e.getSnapshot;
    e = e.value;
    try { var r = t(); return !jt(e, r) } catch { return !0 }
}

function Qf(e) { var t = Qt(); return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Yi, lastRenderedState: e }, t.queue = e, e = e.dispatch = Qb.bind(null, ge, e), [t.memoizedState, e] }

function Xi(e, t, r, n) { return e = { tag: e, create: t, destroy: r, deps: n, next: null }, t = ge.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ge.updateQueue = t, t.lastEffect = e.next = e) : (r = t.lastEffect, r === null ? t.lastEffect = e.next = e : (n = r.next, r.next = e, e.next = n, t.lastEffect = e)), e }

function Hv() { return Tt().memoizedState }

function ho(e, t, r, n) {
    var i = Qt();
    ge.flags |= e, i.memoizedState = Xi(1 | t, r, void 0, n === void 0 ? null : n)
}

function Ol(e, t, r, n) {
    var i = Tt();
    n = n === void 0 ? null : n;
    var a = void 0;
    if (Te !== null) { var o = Te.memoizedState; if (a = o.destroy, n !== null && Gc(n, o.deps)) { i.memoizedState = Xi(t, r, a, n); return } }
    ge.flags |= e, i.memoizedState = Xi(1 | t, r, a, n)
}

function Vf(e, t) { return ho(8390656, 8, e, t) }

function Zc(e, t) { return Ol(2048, 8, e, t) }

function Uv(e, t) { return Ol(4, 2, e, t) }

function Qv(e, t) { return Ol(4, 4, e, t) }

function Vv(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() { t(null) };
    if (t != null) return e = e(), t.current = e,
        function() { t.current = null }
}

function qv(e, t, r) { return r = r != null ? r.concat([e]) : null, Ol(4, 4, Vv.bind(null, t, e), r) }

function Jc() {}

function Kv(e, t) {
    var r = Tt();
    t = t === void 0 ? null : t;
    var n = r.memoizedState;
    return n !== null && t !== null && Gc(t, n[1]) ? n[0] : (r.memoizedState = [e, t], e)
}

function Gv(e, t) {
    var r = Tt();
    t = t === void 0 ? null : t;
    var n = r.memoizedState;
    return n !== null && t !== null && Gc(t, n[1]) ? n[0] : (e = e(), r.memoizedState = [e, t], e)
}

function Yv(e, t, r) { return (on & 21) === 0 ? (e.baseState && (e.baseState = !1, rt = !0), e.memoizedState = r) : (jt(r, t) || (r = rv(), ge.lanes |= r, ln |= r, e.baseState = !0), t) }

function Hb(e, t) {
    var r = te;
    te = r !== 0 && 4 > r ? r : 4, e(!0);
    var n = Ss.transition;
    Ss.transition = {};
    try { e(!1), t() } finally { te = r, Ss.transition = n }
}

function Xv() { return Tt().memoizedState }

function Ub(e, t, r) {
    var n = Fr(e);
    r = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null }, Zv(e) ? Jv(t, r) : (em(e, t, r), r = Ye(), e = _t(e, n, r), e !== null && tm(e, t, n))
}

function Qb(e, t, r) {
    var n = Fr(e),
        i = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
    if (Zv(e)) Jv(t, i);
    else {
        em(e, t, i);
        var a = e.alternate;
        if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
            var o = t.lastRenderedState,
                l = a(o, r);
            if (i.hasEagerState = !0, i.eagerState = l, jt(l, o)) return
        } catch {} finally {}
        r = Ye(), e = _t(e, n, r), e !== null && tm(e, t, n)
    }
}

function Zv(e) { var t = e.alternate; return e === ge || t !== null && t === ge }

function Jv(e, t) {
    wi = Wo = !0;
    var r = e.pending;
    r === null ? t.next = t : (t.next = r.next, r.next = t), e.pending = t
}

function em(e, t, r) { ym(e) ? (e = t.interleaved, e === null ? (r.next = r, Lt === null ? Lt = [t] : Lt.push(t)) : (r.next = e.next, e.next = r), t.interleaved = r) : (e = t.pending, e === null ? r.next = r : (r.next = e.next, e.next = r), t.pending = r) }

function tm(e, t, r) {
    if ((r & 4194240) !== 0) {
        var n = t.lanes;
        n &= e.pendingLanes, r |= n, t.lanes = r, $c(e, r)
    }
}
var Ho = { readContext: Pt, useCallback: je, useContext: je, useEffect: je, useImperativeHandle: je, useInsertionEffect: je, useLayoutEffect: je, useMemo: je, useReducer: je, useRef: je, useState: je, useDebugValue: je, useDeferredValue: je, useTransition: je, useMutableSource: je, useSyncExternalStore: je, useId: je, unstable_isNewReconciler: !1 },
    Vb = {
        readContext: Pt,
        useCallback: function(e, t) { return Qt().memoizedState = [e, t === void 0 ? null : t], e },
        useContext: Pt,
        useEffect: Vf,
        useImperativeHandle: function(e, t, r) { return r = r != null ? r.concat([e]) : null, ho(4194308, 4, Vv.bind(null, t, e), r) },
        useLayoutEffect: function(e, t) { return ho(4194308, 4, e, t) },
        useInsertionEffect: function(e, t) { return ho(4, 2, e, t) },
        useMemo: function(e, t) { var r = Qt(); return t = t === void 0 ? null : t, e = e(), r.memoizedState = [e, t], e },
        useReducer: function(e, t, r) { var n = Qt(); return t = r !== void 0 ? r(t) : t, n.memoizedState = n.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, n.queue = e, e = e.dispatch = Ub.bind(null, ge, e), [n.memoizedState, e] },
        useRef: function(e) { var t = Qt(); return e = { current: e }, t.memoizedState = e },
        useState: Qf,
        useDebugValue: Jc,
        useDeferredValue: function(e) { return Qt().memoizedState = e },
        useTransition: function() {
            var e = Qf(!1),
                t = e[0];
            return e = Hb.bind(null, e[1]), Qt().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, r) {
            var n = ge,
                i = Qt();
            if (pe) {
                if (r === void 0) throw Error(O(407));
                r = r()
            } else {
                if (r = t(), $e === null) throw Error(O(349));
                (on & 30) !== 0 || Lv(n, t, r)
            }
            i.memoizedState = r;
            var a = { value: r, getSnapshot: t };
            return i.queue = a, Vf(jv.bind(null, n, a, e), [e]), n.flags |= 2048, Xi(9, Dv.bind(null, n, a, r, t), void 0, null), r
        },
        useId: function() {
            var e = Qt(),
                t = $e.identifierPrefix;
            if (pe) {
                var r = cr,
                    n = ur;
                r = (n & ~(1 << 32 - Dt(n) - 1)).toString(32) + r, t = ":" + t + "R" + r, r = Gi++, 0 < r && (t += "H" + r.toString(32)), t += ":"
            } else r = Wb++, t = ":" + t + "r" + r.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    qb = {
        readContext: Pt,
        useCallback: Kv,
        useContext: Pt,
        useEffect: Zc,
        useImperativeHandle: qv,
        useInsertionEffect: Uv,
        useLayoutEffect: Qv,
        useMemo: Gv,
        useReducer: xs,
        useRef: Hv,
        useState: function() { return xs(Yi) },
        useDebugValue: Jc,
        useDeferredValue: function(e) { var t = Tt(); return Yv(t, Te.memoizedState, e) },
        useTransition: function() {
            var e = xs(Yi)[0],
                t = Tt().memoizedState;
            return [e, t]
        },
        useMutableSource: Nv,
        useSyncExternalStore: Bv,
        useId: Xv,
        unstable_isNewReconciler: !1
    },
    Kb = {
        readContext: Pt,
        useCallback: Kv,
        useContext: Pt,
        useEffect: Zc,
        useImperativeHandle: qv,
        useInsertionEffect: Uv,
        useLayoutEffect: Qv,
        useMemo: Gv,
        useReducer: ws,
        useRef: Hv,
        useState: function() { return ws(Yi) },
        useDebugValue: Jc,
        useDeferredValue: function(e) { var t = Tt(); return Te === null ? t.memoizedState = e : Yv(t, Te.memoizedState, e) },
        useTransition: function() {
            var e = ws(Yi)[0],
                t = Tt().memoizedState;
            return [e, t]
        },
        useMutableSource: Nv,
        useSyncExternalStore: Bv,
        useId: Xv,
        unstable_isNewReconciler: !1
    };

function ed(e, t) {
    try {
        var r = "",
            n = t;
        do r += w1(n), n = n.return; while (n);
        var i = r
    } catch (a) { i = ` Error generating stack: ` + a.message + ` ` + a.stack }
    return { value: e, source: t, stack: i }
}

function Cu(e, t) { try { console.error(t.value) } catch (r) { setTimeout(function() { throw r }) } }
var Gb = typeof WeakMap == "function" ? WeakMap : Map;

function rm(e, t, r) { r = dr(-1, r), r.tag = 3, r.payload = { element: null }; var n = t.value; return r.callback = function() { Qo || (Qo = !0, Au = n), Cu(e, t) }, r }

function nm(e, t, r) {
    r = dr(-1, r), r.tag = 3;
    var n = e.type.getDerivedStateFromError;
    if (typeof n == "function") {
        var i = t.value;
        r.payload = function() { return n(i) }, r.callback = function() { Cu(e, t) }
    }
    var a = e.stateNode;
    return a !== null && typeof a.componentDidCatch == "function" && (r.callback = function() {
        Cu(e, t), typeof n != "function" && (Ar === null ? Ar = new Set([this]) : Ar.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" })
    }), r
}

function qf(e, t, r) {
    var n = e.pingCache;
    if (n === null) {
        n = e.pingCache = new Gb;
        var i = new Set;
        n.set(t, i)
    } else i = n.get(t), i === void 0 && (i = new Set, n.set(t, i));
    i.has(r) || (i.add(r), e = sS.bind(null, e, t, r), t.then(e, e))
}

function Kf(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function Gf(e, t, r, n, i) { return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, r.flags |= 131072, r.flags &= -52805, r.tag === 1 && (r.alternate === null ? r.tag = 17 : (t = dr(-1, 1), t.tag = 2, zr(r, t))), r.lanes |= 1), e) : (e.flags |= 65536, e.lanes = i, e) }
var im, _u, am, om;
im = function(e, t) {
    for (var r = t.child; r !== null;) {
        if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
        else if (r.tag !== 4 && r.child !== null) { r.child.return = r, r = r.child; continue }
        if (r === t) break;
        for (; r.sibling === null;) {
            if (r.return === null || r.return === t) return;
            r = r.return
        }
        r.sibling.return = r.return, r = r.sibling
    }
};
_u = function() {};
am = function(e, t, r, n) {
    var i = e.memoizedProps;
    if (i !== n) {
        e = t.stateNode, Yr(Jt.current);
        var a = null;
        switch (r) {
            case "input":
                i = Xs(e, i), n = Xs(e, n), a = [];
                break;
            case "select":
                i = ye({}, i, { value: void 0 }), n = ye({}, n, { value: void 0 }), a = [];
                break;
            case "textarea":
                i = eu(e, i), n = eu(e, n), a = [];
                break;
            default:
                typeof i.onClick != "function" && typeof n.onClick == "function" && (e.onclick = Ao)
        }
        ru(r, n);
        var o;
        r = null;
        for (u in i)
            if (!n.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") { var l = i[u]; for (o in l) l.hasOwnProperty(o) && (r || (r = {}), r[o] = "") } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Mi.hasOwnProperty(u) ? a || (a = []) : (a = a || []).push(u, null));
        for (u in n) {
            var s = n[u];
            if (l = i != null ? i[u] : void 0, n.hasOwnProperty(u) && s !== l && (s != null || l != null))
                if (u === "style")
                    if (l) { for (o in l) !l.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (r || (r = {}), r[o] = ""); for (o in s) s.hasOwnProperty(o) && l[o] !== s[o] && (r || (r = {}), r[o] = s[o]) } else r || (a || (a = []), a.push(u, r)), r = s;
            else u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, l = l ? l.__html : void 0, s != null && l !== s && (a = a || []).push(u, s)) : u === "children" ? typeof s != "string" && typeof s != "number" || (a = a || []).push(u, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Mi.hasOwnProperty(u) ? (s != null && u === "onScroll" && se("scroll", e), a || l === s || (a = [])) : (a = a || []).push(u, s))
        }
        r && (a = a || []).push("style", r);
        var u = a;
        (t.updateQueue = u) && (t.flags |= 4)
    }
};
om = function(e, t, r, n) { r !== n && (t.flags |= 4) };

function di(e, t) {
    if (!pe) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var r = null; t !== null;) t.alternate !== null && (r = t), t = t.sibling;
            r === null ? e.tail = null : r.sibling = null;
            break;
        case "collapsed":
            r = e.tail;
            for (var n = null; r !== null;) r.alternate !== null && (n = r), r = r.sibling;
            n === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : n.sibling = null
    }
}

function We(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        r = 0,
        n = 0;
    if (t)
        for (var i = e.child; i !== null;) r |= i.lanes | i.childLanes, n |= i.subtreeFlags & 14680064, n |= i.flags & 14680064, i.return = e, i = i.sibling;
    else
        for (i = e.child; i !== null;) r |= i.lanes | i.childLanes, n |= i.subtreeFlags, n |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= n, e.childLanes = r, t
}

function Yb(e, t, r) {
    var n = t.pendingProps;
    switch (Uc(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return We(t), null;
        case 1:
            return it(t.type) && Fo(), We(t), null;
        case 3:
            return n = t.stateNode, Un(), ce(nt), ce(Ve), Kc(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (ui(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Bt !== null && (Mu(Bt), Bt = null))), _u(e, t), We(t), null;
        case 5:
            qc(t);
            var i = Yr(Ki.current);
            if (r = t.type, e !== null && t.stateNode != null) am(e, t, r, n, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!n) { if (t.stateNode === null) throw Error(O(166)); return We(t), null }
                if (e = Yr(Jt.current), ui(t)) {
                    n = t.stateNode, r = t.type;
                    var a = t.memoizedProps;
                    switch (n[Kt] = t, n[Vi] = a, e = (t.mode & 1) !== 0, r) {
                        case "dialog":
                            se("cancel", n), se("close", n);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            se("load", n);
                            break;
                        case "video":
                        case "audio":
                            for (i = 0; i < mi.length; i++) se(mi[i], n);
                            break;
                        case "source":
                            se("error", n);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            se("error", n), se("load", n);
                            break;
                        case "details":
                            se("toggle", n);
                            break;
                        case "input":
                            uf(n, a), se("invalid", n);
                            break;
                        case "select":
                            n._wrapperState = { wasMultiple: !!a.multiple }, se("invalid", n);
                            break;
                        case "textarea":
                            df(n, a), se("invalid", n)
                    }
                    ru(r, a), i = null;
                    for (var o in a)
                        if (a.hasOwnProperty(o)) {
                            var l = a[o];
                            o === "children" ? typeof l == "string" ? n.textContent !== l && (a.suppressHydrationWarning !== !0 && Ma(n.textContent, l, e), i = ["children", l]) : typeof l == "number" && n.textContent !== "" + l && (a.suppressHydrationWarning !== !0 && Ma(n.textContent, l, e), i = ["children", "" + l]) : Mi.hasOwnProperty(o) && l != null && o === "onScroll" && se("scroll", n)
                        }
                    switch (r) {
                        case "input":
                            Ta(n), cf(n, a, !0);
                            break;
                        case "textarea":
                            Ta(n), ff(n);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof a.onClick == "function" && (n.onclick = Ao)
                    }
                    n = i, t.updateQueue = n, n !== null && (t.flags |= 4)
                } else {
                    o = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = jp(r)), e === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof n.is == "string" ? e = o.createElement(r, { is: n.is }) : (e = o.createElement(r), r === "select" && (o = e, n.multiple ? o.multiple = !0 : n.size && (o.size = n.size))) : e = o.createElementNS(e, r), e[Kt] = t, e[Vi] = n, im(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (o = nu(r, n), r) {
                            case "dialog":
                                se("cancel", e), se("close", e), i = n;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                se("load", e), i = n;
                                break;
                            case "video":
                            case "audio":
                                for (i = 0; i < mi.length; i++) se(mi[i], e);
                                i = n;
                                break;
                            case "source":
                                se("error", e), i = n;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                se("error", e), se("load", e), i = n;
                                break;
                            case "details":
                                se("toggle", e), i = n;
                                break;
                            case "input":
                                uf(e, n), i = Xs(e, n), se("invalid", e);
                                break;
                            case "option":
                                i = n;
                                break;
                            case "select":
                                e._wrapperState = { wasMultiple: !!n.multiple }, i = ye({}, n, { value: void 0 }), se("invalid", e);
                                break;
                            case "textarea":
                                df(e, n), i = eu(e, n), se("invalid", e);
                                break;
                            default:
                                i = n
                        }
                        ru(r, i),
                        l = i;
                        for (a in l)
                            if (l.hasOwnProperty(a)) {
                                var s = l[a];
                                a === "style" ? Up(e, s) : a === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Wp(e, s)) : a === "children" ? typeof s == "string" ? (r !== "textarea" || s !== "") && Ni(e, s) : typeof s == "number" && Ni(e, "" + s) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Mi.hasOwnProperty(a) ? s != null && a === "onScroll" && se("scroll", e) : s != null && _c(e, a, s, o))
                            }
                        switch (r) {
                            case "input":
                                Ta(e), cf(e, n, !1);
                                break;
                            case "textarea":
                                Ta(e), ff(e);
                                break;
                            case "option":
                                n.value != null && e.setAttribute("value", "" + Ir(n.value));
                                break;
                            case "select":
                                e.multiple = !!n.multiple, a = n.value, a != null ? $n(e, !!n.multiple, a, !1) : n.defaultValue != null && $n(e, !!n.multiple, n.defaultValue, !0);
                                break;
                            default:
                                typeof i.onClick == "function" && (e.onclick = Ao)
                        }
                        switch (r) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                n = !!n.autoFocus;
                                break e;
                            case "img":
                                n = !0;
                                break e;
                            default:
                                n = !1
                        }
                    }
                    n && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return We(t), null;
        case 6:
            if (e && t.stateNode != null) om(e, t, e.memoizedProps, n);
            else {
                if (typeof n != "string" && t.stateNode === null) throw Error(O(166));
                if (r = Yr(Ki.current), Yr(Jt.current), ui(t)) {
                    if (n = t.stateNode, r = t.memoizedProps, n[Kt] = t, (a = n.nodeValue !== r) && (e = ht, e !== null)) switch (e.tag) {
                        case 3:
                            Ma(n.nodeValue, r, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && Ma(n.nodeValue, r, (e.mode & 1) !== 0)
                    }
                    a && (t.flags |= 4)
                } else n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n), n[Kt] = t, t.stateNode = n
            }
            return We(t), null;
        case 13:
            if (ce(me), n = t.memoizedState, pe && tt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) { for (n = tt; n;) n = sr(n.nextSibling); return Wn(), t.flags |= 98560, t }
            if (n !== null && n.dehydrated !== null) {
                if (n = ui(t), e === null) {
                    if (!n) throw Error(O(318));
                    if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(O(317));
                    n[Kt] = t
                } else Wn(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                return We(t), null
            }
            return Bt !== null && (Mu(Bt), Bt = null), (t.flags & 128) !== 0 ? (t.lanes = r, t) : (n = n !== null, r = !1, e === null ? ui(t) : r = e.memoizedState !== null, n !== r && n && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (me.current & 1) !== 0 ? Re === 0 && (Re = 3) : od())), t.updateQueue !== null && (t.flags |= 4), We(t), null);
        case 4:
            return Un(), _u(e, t), e === null && Ui(t.stateNode.containerInfo), We(t), null;
        case 10:
            return jc(t.type._context), We(t), null;
        case 17:
            return it(t.type) && Fo(), We(t), null;
        case 19:
            if (ce(me), a = t.memoizedState, a === null) return We(t), null;
            if (n = (t.flags & 128) !== 0, o = a.rendering, o === null)
                if (n) di(a, !1);
                else {
                    if (Re !== 0 || e !== null && (e.flags & 128) !== 0)
                        for (e = t.child; e !== null;) {
                            if (o = jo(e), o !== null) { for (t.flags |= 128, di(a, !1), n = o.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), t.subtreeFlags = 0, n = r, r = t.child; r !== null;) a = r, e = n, a.flags &= 14680066, o = a.alternate, o === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = o.childLanes, a.lanes = o.lanes, a.child = o.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = o.memoizedProps, a.memoizedState = o.memoizedState, a.updateQueue = o.updateQueue, a.type = o.type, e = o.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), r = r.sibling; return oe(me, me.current & 1 | 2), t.child }
                            e = e.sibling
                        }
                    a.tail !== null && we() > Qn && (t.flags |= 128, n = !0, di(a, !1), t.lanes = 4194304)
                }
            else {
                if (!n)
                    if (e = jo(o), e !== null) { if (t.flags |= 128, n = !0, r = e.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), di(a, !0), a.tail === null && a.tailMode === "hidden" && !o.alternate && !pe) return We(t), null } else 2 * we() - a.renderingStartTime > Qn && r !== 1073741824 && (t.flags |= 128, n = !0, di(a, !1), t.lanes = 4194304);
                a.isBackwards ? (o.sibling = t.child, t.child = o) : (r = a.last, r !== null ? r.sibling = o : t.child = o, a.last = o)
            }
            return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = we(), t.sibling = null, r = me.current, oe(me, n ? r & 1 | 2 : r & 1), t) : (We(t), null);
        case 22:
        case 23:
            return ad(), n = t.memoizedState !== null, e !== null && e.memoizedState !== null !== n && (t.flags |= 8192), n && (t.mode & 1) !== 0 ? (ct & 1073741824) !== 0 && (We(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : We(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(O(156, t.tag))
}
var Xb = vr.ReactCurrentOwner,
    rt = !1;

function Ge(e, t, r, n) { t.child = e === null ? Iv(t, null, r, n) : Hn(t, e.child, r, n) }

function Yf(e, t, r, n, i) { r = r.render; var a = t.ref; return In(t, i), n = Yc(e, t, r, n, a, i), r = Xc(), e !== null && !rt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, pr(e, t, i)) : (pe && r && Hc(t), t.flags |= 1, Ge(e, t, n, i), t.child) }

function Xf(e, t, r, n, i) { if (e === null) { var a = r.type; return typeof a == "function" && !ld(a) && a.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15, t.type = a, lm(e, t, a, n, i)) : (e = mo(r.type, null, n, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e) } if (a = e.child, (e.lanes & i) === 0) { var o = a.memoizedProps; if (r = r.compare, r = r !== null ? r : Hi, r(o, n) && e.ref === t.ref) return pr(e, t, i) } return t.flags |= 1, e = Nr(a, n), e.ref = t.ref, e.return = t, t.child = e }

function lm(e, t, r, n, i) {
    if (e !== null) {
        var a = e.memoizedProps;
        if (Hi(a, n) && e.ref === t.ref)
            if (rt = !1, t.pendingProps = n = a, (e.lanes & i) !== 0)(e.flags & 131072) !== 0 && (rt = !0);
            else return t.lanes = e.lanes, pr(e, t, i)
    }
    return Eu(e, t, r, n, i)
}

function sm(e, t, r) {
    var n = t.pendingProps,
        i = n.children,
        a = e !== null ? e.memoizedState : null;
    if (n.mode === "hidden")
        if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, oe(Tn, ct), ct |= r;
        else if ((r & 1073741824) !== 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, n = a !== null ? a.baseLanes : r, oe(Tn, ct), ct |= n;
    else return e = a !== null ? a.baseLanes | r : r, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, oe(Tn, ct), ct |= e, null;
    else a !== null ? (n = a.baseLanes | r, t.memoizedState = null) : n = r, oe(Tn, ct), ct |= n;
    return Ge(e, t, i, r), t.child
}

function um(e, t) {
    var r = t.ref;
    (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= 512, t.flags |= 2097152)
}

function Eu(e, t, r, n, i) { var a = it(r) ? nn : Ve.current; return a = jn(t, a), In(t, i), r = Yc(e, t, r, n, a, i), n = Xc(), e !== null && !rt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, pr(e, t, i)) : (pe && n && Hc(t), t.flags |= 1, Ge(e, t, r, i), t.child) }

function Zf(e, t, r, n, i) {
    if (it(r)) {
        var a = !0;
        Io(t)
    } else a = !1;
    if (In(t, i), t.stateNode === null) e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), $v(t, r, n), xu(t, r, n, i), n = !0;
    else if (e === null) {
        var o = t.stateNode,
            l = t.memoizedProps;
        o.props = l;
        var s = o.context,
            u = r.contextType;
        typeof u == "object" && u !== null ? u = Pt(u) : (u = it(r) ? nn : Ve.current, u = jn(t, u));
        var c = r.getDerivedStateFromProps,
            p = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        p || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== n || s !== u) && jf(t, o, n, u), xr = !1;
        var h = t.memoizedState;
        o.state = h, Bo(t, n, o, i), s = t.memoizedState, l !== n || h !== s || nt.current || xr ? (typeof c == "function" && (Su(t, r, c, n), s = t.memoizedState), (l = xr || Df(t, r, l, n, h, s, u)) ? (p || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = s), o.props = n, o.state = s, o.context = u, n = l) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), n = !1)
    } else {
        o = t.stateNode, Rv(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : Mt(t.type, l), o.props = u, p = t.pendingProps, h = o.context, s = r.contextType, typeof s == "object" && s !== null ? s = Pt(s) : (s = it(r) ? nn : Ve.current, s = jn(t, s));
        var g = r.getDerivedStateFromProps;
        (c = typeof g == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== p || h !== s) && jf(t, o, n, s), xr = !1, h = t.memoizedState, o.state = h, Bo(t, n, o, i);
        var y = t.memoizedState;
        l !== p || h !== y || nt.current || xr ? (typeof g == "function" && (Su(t, r, g, n), y = t.memoizedState), (u = xr || Df(t, r, u, n, h, y, s) || !1) ? (c || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(n, y, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(n, y, s)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = y), o.props = n, o.state = y, o.context = s, n = u) : (typeof o.componentDidUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), n = !1)
    }
    return Pu(e, t, r, n, a, i)
}

function Pu(e, t, r, n, i, a) {
    um(e, t);
    var o = (t.flags & 128) !== 0;
    if (!n && !o) return i && Nf(t, r, !1), pr(e, t, a);
    n = t.stateNode, Xb.current = t;
    var l = o && typeof r.getDerivedStateFromError != "function" ? null : n.render();
    return t.flags |= 1, e !== null && o ? (t.child = Hn(t, e.child, null, a), t.child = Hn(t, null, l, a)) : Ge(e, t, l, a), t.memoizedState = n.state, i && Nf(t, r, !0), t.child
}

function cm(e) {
    var t = e.stateNode;
    t.pendingContext ? Mf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Mf(e, t.context, !1), Vc(e, t.containerInfo)
}

function Jf(e, t, r, n, i) { return Wn(), Qc(i), t.flags |= 256, Ge(e, t, r, n), t.child }
var Ba = { dehydrated: null, treeContext: null, retryLane: 0 };

function La(e) { return { baseLanes: e, cachePool: null, transitions: null } }

function eh(e, t) { return { baseLanes: e.baseLanes | t, cachePool: null, transitions: e.transitions } }

function dm(e, t, r) {
    var n = t.pendingProps,
        i = me.current,
        a = !1,
        o = (t.flags & 128) !== 0,
        l;
    if ((l = o) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), l ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), oe(me, i & 1), e === null) return ku(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (i = n.children, e = n.fallback, a ? (n = t.mode, a = t.child, i = { mode: "hidden", children: i }, (n & 1) === 0 && a !== null ? (a.childLanes = 0, a.pendingProps = i) : a = Ko(i, n, 0, null), e = en(e, n, r, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = La(r), t.memoizedState = Ba, e) : Tu(t, i));
    if (i = e.memoizedState, i !== null) {
        if (l = i.dehydrated, l !== null) {
            if (o) return t.flags & 256 ? (t.flags &= -257, Da(e, t, r, Error(O(422)))) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = n.fallback, i = t.mode, n = Ko({ mode: "visible", children: n.children }, i, 0, null), a = en(a, i, r, null), a.flags |= 2, n.return = t, a.return = t, n.sibling = a, t.child = n, (t.mode & 1) !== 0 && Hn(t, e.child, null, r), t.child.memoizedState = La(r), t.memoizedState = Ba, a);
            if ((t.mode & 1) === 0) t = Da(e, t, r, null);
            else if (l.data === "$!") t = Da(e, t, r, Error(O(419)));
            else if (n = (r & e.childLanes) !== 0, rt || n) {
                if (n = $e, n !== null) {
                    switch (r & -r) {
                        case 4:
                            a = 2;
                            break;
                        case 16:
                            a = 8;
                            break;
                        case 64:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                        case 4194304:
                        case 8388608:
                        case 16777216:
                        case 33554432:
                        case 67108864:
                            a = 32;
                            break;
                        case 536870912:
                            a = 268435456;
                            break;
                        default:
                            a = 0
                    }
                    n = (a & (n.suspendedLanes | r)) !== 0 ? 0 : a, n !== 0 && n !== i.retryLane && (i.retryLane = n, _t(e, n, -1))
                }
                od(), t = Da(e, t, r, Error(O(421)))
            } else l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = uS.bind(null, e), l._reactRetry = t, t = null) : (r = i.treeContext, tt = sr(l.nextSibling), ht = t, pe = !0, Bt = null, r !== null && (xt[wt++] = ur, xt[wt++] = cr, xt[wt++] = an, ur = r.id, cr = r.overflow, an = t), t = Tu(t, t.pendingProps.children), t.flags |= 4096);
            return t
        }
        return a ? (n = rh(e, t, n.children, n.fallback, r), a = t.child, i = e.child.memoizedState, a.memoizedState = i === null ? La(r) : eh(i, r), a.childLanes = e.childLanes & ~r, t.memoizedState = Ba, n) : (r = th(e, t, n.children, r), t.memoizedState = null, r)
    }
    return a ? (n = rh(e, t, n.children, n.fallback, r), a = t.child, i = e.child.memoizedState, a.memoizedState = i === null ? La(r) : eh(i, r), a.childLanes = e.childLanes & ~r, t.memoizedState = Ba, n) : (r = th(e, t, n.children, r), t.memoizedState = null, r)
}

function Tu(e, t) { return t = Ko({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t }

function th(e, t, r, n) { var i = e.child; return e = i.sibling, r = Nr(i, { mode: "visible", children: r }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r }

function rh(e, t, r, n, i) {
    var a = t.mode;
    e = e.child;
    var o = e.sibling,
        l = { mode: "hidden", children: r };
    return (a & 1) === 0 && t.child !== e ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = Nr(e, l), r.subtreeFlags = e.subtreeFlags & 14680064), o !== null ? n = Nr(o, n) : (n = en(n, a, i, null), n.flags |= 2), n.return = t, r.return = t, r.sibling = n, t.child = r, n
}

function Da(e, t, r, n) { return n !== null && Qc(n), Hn(t, e.child, null, r), e = Tu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e }

function nh(e, t, r) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t), bu(e.return, t, r)
}

function ks(e, t, r, n, i) {
    var a = e.memoizedState;
    a === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: n, tail: r, tailMode: i } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = n, a.tail = r, a.tailMode = i)
}

function fm(e, t, r) {
    var n = t.pendingProps,
        i = n.revealOrder,
        a = n.tail;
    if (Ge(e, t, n.children, r), n = me.current, (n & 2) !== 0) n = n & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && nh(e, r, t);
            else if (e.tag === 19) nh(e, r, t);
            else if (e.child !== null) { e.child.return = e, e = e.child; continue }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        n &= 1
    }
    if (oe(me, n), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (i) {
        case "forwards":
            for (r = t.child, i = null; r !== null;) e = r.alternate, e !== null && jo(e) === null && (i = r), r = r.sibling;
            r = i, r === null ? (i = t.child, t.child = null) : (i = r.sibling, r.sibling = null), ks(t, !1, i, r, a);
            break;
        case "backwards":
            for (r = null, i = t.child, t.child = null; i !== null;) {
                if (e = i.alternate, e !== null && jo(e) === null) { t.child = i; break }
                e = i.sibling, i.sibling = r, r = i, i = e
            }
            ks(t, !0, r, null, a);
            break;
        case "together":
            ks(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function pr(e, t, r) {
    if (e !== null && (t.dependencies = e.dependencies), ln |= t.lanes, (r & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(O(153));
    if (t.child !== null) {
        for (e = t.child, r = Nr(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null;) e = e.sibling, r = r.sibling = Nr(e, e.pendingProps), r.return = t;
        r.sibling = null
    }
    return t.child
}

function Zb(e, t, r) {
    switch (t.tag) {
        case 3:
            cm(t), Wn();
            break;
        case 5:
            Mv(t);
            break;
        case 1:
            it(t.type) && Io(t);
            break;
        case 4:
            Vc(t, t.stateNode.containerInfo);
            break;
        case 10:
            var n = t.type._context,
                i = t.memoizedProps.value;
            oe(Mo, n._currentValue), n._currentValue = i;
            break;
        case 13:
            if (n = t.memoizedState, n !== null) return n.dehydrated !== null ? (oe(me, me.current & 1), t.flags |= 128, null) : (r & t.child.childLanes) !== 0 ? dm(e, t, r) : (oe(me, me.current & 1), e = pr(e, t, r), e !== null ? e.sibling : null);
            oe(me, me.current & 1);
            break;
        case 19:
            if (n = (r & t.childLanes) !== 0, (e.flags & 128) !== 0) {
                if (n) return fm(e, t, r);
                t.flags |= 128
            }
            if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), oe(me, me.current), n) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, sm(e, t, r)
    }
    return pr(e, t, r)
}

function Jb(e, t) {
    switch (Uc(t), t.tag) {
        case 1:
            return it(t.type) && Fo(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return Un(), ce(nt), ce(Ve), Kc(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return qc(t), null;
        case 13:
            if (ce(me), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(O(340));
                Wn()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return ce(me), null;
        case 4:
            return Un(), null;
        case 10:
            return jc(t.type._context), null;
        case 22:
        case 23:
            return ad(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var ja = !1,
    Qe = !1,
    eS = typeof WeakSet == "function" ? WeakSet : Set,
    I = null;

function Pn(e, t) {
    var r = e.ref;
    if (r !== null)
        if (typeof r == "function") try { r(null) } catch (n) { Se(e, t, n) } else r.current = null
}

function Ru(e, t, r) { try { r() } catch (n) { Se(e, t, n) } }
var ih = !1;

function tS(e, t) {
    if (hu = Oo, e = yv(), Bc(e)) {
        if ("selectionStart" in e) var r = { start: e.selectionStart, end: e.selectionEnd };
        else e: {
            r = (r = e.ownerDocument) && r.defaultView || window;
            var n = r.getSelection && r.getSelection();
            if (n && n.rangeCount !== 0) {
                r = n.anchorNode;
                var i = n.anchorOffset,
                    a = n.focusNode;
                n = n.focusOffset;
                try { r.nodeType, a.nodeType } catch { r = null; break e }
                var o = 0,
                    l = -1,
                    s = -1,
                    u = 0,
                    c = 0,
                    p = e,
                    h = null;
                t: for (;;) {
                    for (var g; p !== r || i !== 0 && p.nodeType !== 3 || (l = o + i), p !== a || n !== 0 && p.nodeType !== 3 || (s = o + n), p.nodeType === 3 && (o += p.nodeValue.length), (g = p.firstChild) !== null;) h = p, p = g;
                    for (;;) {
                        if (p === e) break t;
                        if (h === r && ++u === i && (l = o), h === a && ++c === n && (s = o), (g = p.nextSibling) !== null) break;
                        p = h, h = p.parentNode
                    }
                    p = g
                }
                r = l === -1 || s === -1 ? null : { start: l, end: s }
            } else r = null
        }
        r = r || { start: 0, end: 0 }
    } else r = null;
    for (pu = { focusedElem: e, selectionRange: r }, Oo = !1, I = t; I !== null;)
        if (t = I, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, I = e;
        else
            for (; I !== null;) {
                t = I;
                try {
                    var y = t.alternate;
                    if ((t.flags & 1024) !== 0) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (y !== null) {
                                var x = y.memoizedProps,
                                    R = y.memoizedState,
                                    v = t.stateNode,
                                    d = v.getSnapshotBeforeUpdate(t.elementType === t.type ? x : Mt(t.type, x), R);
                                v.__reactInternalSnapshotBeforeUpdate = d
                            }
                            break;
                        case 3:
                            var m = t.stateNode.containerInfo;
                            if (m.nodeType === 1) m.textContent = "";
                            else if (m.nodeType === 9) {
                                var C = m.body;
                                C != null && (C.textContent = "")
                            }
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(O(163))
                    }
                } catch (E) { Se(t, t.return, E) }
                if (e = t.sibling, e !== null) { e.return = t.return, I = e; break }
                I = t.return
            }
    return y = ih, ih = !1, y
}

function ki(e, t, r) {
    var n = t.updateQueue;
    if (n = n !== null ? n.lastEffect : null, n !== null) {
        var i = n = n.next;
        do {
            if ((i.tag & e) === e) {
                var a = i.destroy;
                i.destroy = void 0, a !== void 0 && Ru(t, r, a)
            }
            i = i.next
        } while (i !== n)
    }
}

function $l(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var r = t = t.next;
        do {
            if ((r.tag & e) === e) {
                var n = r.create;
                r.destroy = n()
            }
            r = r.next
        } while (r !== t)
    }
}

function Ou(e) {
    var t = e.ref;
    if (t !== null) {
        var r = e.stateNode;
        switch (e.tag) {
            case 5:
                e = r;
                break;
            default:
                e = r
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function hm(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, hm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Kt], delete t[Vi], delete t[gu], delete t[Bb], delete t[Lb])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function pm(e) { return e.tag === 5 || e.tag === 3 || e.tag === 4 }

function ah(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || pm(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function $u(e, t, r) {
    var n = e.tag;
    if (n === 5 || n === 6) e = e.stateNode, t ? r.nodeType === 8 ? r.parentNode.insertBefore(e, t) : r.insertBefore(e, t) : (r.nodeType === 8 ? (t = r.parentNode, t.insertBefore(e, r)) : (t = r, t.appendChild(e)), r = r._reactRootContainer, r != null || t.onclick !== null || (t.onclick = Ao));
    else if (n !== 4 && (e = e.child, e !== null))
        for ($u(e, t, r), e = e.sibling; e !== null;) $u(e, t, r), e = e.sibling
}

function zu(e, t, r) {
    var n = e.tag;
    if (n === 5 || n === 6) e = e.stateNode, t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (n !== 4 && (e = e.child, e !== null))
        for (zu(e, t, r), e = e.sibling; e !== null;) zu(e, t, r), e = e.sibling
}
var Ne = null,
    Nt = !1;

function mr(e, t, r) { for (r = r.child; r !== null;) vm(e, t, r), r = r.sibling }

function vm(e, t, r) {
    if (Zt && typeof Zt.onCommitFiberUnmount == "function") try { Zt.onCommitFiberUnmount(kl, r) } catch {}
    switch (r.tag) {
        case 5:
            Qe || Pn(r, t);
        case 6:
            var n = Ne,
                i = Nt;
            Ne = null, mr(e, t, r), Ne = n, Nt = i, Ne !== null && (Nt ? (e = Ne, r = r.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)) : Ne.removeChild(r.stateNode));
            break;
        case 18:
            Ne !== null && (Nt ? (e = Ne, r = r.stateNode, e.nodeType === 8 ? gs(e.parentNode, r) : e.nodeType === 1 && gs(e, r), ji(e)) : gs(Ne, r.stateNode));
            break;
        case 4:
            n = Ne, i = Nt, Ne = r.stateNode.containerInfo, Nt = !0, mr(e, t, r), Ne = n, Nt = i;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Qe && (n = r.updateQueue, n !== null && (n = n.lastEffect, n !== null))) {
                i = n = n.next;
                do {
                    var a = i,
                        o = a.destroy;
                    a = a.tag, o !== void 0 && ((a & 2) !== 0 || (a & 4) !== 0) && Ru(r, t, o), i = i.next
                } while (i !== n)
            }
            mr(e, t, r);
            break;
        case 1:
            if (!Qe && (Pn(r, t), n = r.stateNode, typeof n.componentWillUnmount == "function")) try { n.props = r.memoizedProps, n.state = r.memoizedState, n.componentWillUnmount() } catch (l) { Se(r, t, l) }
            mr(e, t, r);
            break;
        case 21:
            mr(e, t, r);
            break;
        case 22:
            r.mode & 1 ? (Qe = (n = Qe) || r.memoizedState !== null, mr(e, t, r), Qe = n) : mr(e, t, r);
            break;
        default:
            mr(e, t, r)
    }
}

function oh(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var r = e.stateNode;
        r === null && (r = e.stateNode = new eS), t.forEach(function(n) {
            var i = cS.bind(null, e, n);
            r.has(n) || (r.add(n), n.then(i, i))
        })
    }
}

function zt(e, t) {
    var r = t.deletions;
    if (r !== null)
        for (var n = 0; n < r.length; n++) {
            var i = r[n];
            try {
                var a = e,
                    o = t,
                    l = o;
                e: for (; l !== null;) {
                    switch (l.tag) {
                        case 5:
                            Ne = l.stateNode, Nt = !1;
                            break e;
                        case 3:
                            Ne = l.stateNode.containerInfo, Nt = !0;
                            break e;
                        case 4:
                            Ne = l.stateNode.containerInfo, Nt = !0;
                            break e
                    }
                    l = l.return
                }
                if (Ne === null) throw Error(O(160));
                vm(a, o, i), Ne = null, Nt = !1;
                var s = i.alternate;
                s !== null && (s.return = null), i.return = null
            } catch (u) { Se(i, t, u) }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) mm(t, e), t = t.sibling
}

function mm(e, t) {
    var r = e.alternate,
        n = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (zt(t, e), Ht(e), n & 4) { try { ki(3, e, e.return), $l(3, e) } catch (y) { Se(e, e.return, y) } try { ki(5, e, e.return) } catch (y) { Se(e, e.return, y) } }
            break;
        case 1:
            zt(t, e), Ht(e), n & 512 && r !== null && Pn(r, r.return);
            break;
        case 5:
            if (zt(t, e), Ht(e), n & 512 && r !== null && Pn(r, r.return), e.flags & 32) { var i = e.stateNode; try { Ni(i, "") } catch (y) { Se(e, e.return, y) } }
            if (n & 4 && (i = e.stateNode, i != null)) {
                var a = e.memoizedProps,
                    o = r !== null ? r.memoizedProps : a,
                    l = e.type,
                    s = e.updateQueue;
                if (e.updateQueue = null, s !== null) try {
                    l === "input" && a.type === "radio" && a.name != null && Lp(i, a), nu(l, o);
                    var u = nu(l, a);
                    for (o = 0; o < s.length; o += 2) {
                        var c = s[o],
                            p = s[o + 1];
                        c === "style" ? Up(i, p) : c === "dangerouslySetInnerHTML" ? Wp(i, p) : c === "children" ? Ni(i, p) : _c(i, c, p, u)
                    }
                    switch (l) {
                        case "input":
                            Zs(i, a);
                            break;
                        case "textarea":
                            Dp(i, a);
                            break;
                        case "select":
                            var h = i._wrapperState.wasMultiple;
                            i._wrapperState.wasMultiple = !!a.multiple;
                            var g = a.value;
                            g != null ? $n(i, !!a.multiple, g, !1) : h !== !!a.multiple && (a.defaultValue != null ? $n(i, !!a.multiple, a.defaultValue, !0) : $n(i, !!a.multiple, a.multiple ? [] : "", !1))
                    }
                    i[Vi] = a
                } catch (y) { Se(e, e.return, y) }
            }
            break;
        case 6:
            if (zt(t, e), Ht(e), n & 4) {
                if (e.stateNode === null) throw Error(O(162));
                u = e.stateNode, c = e.memoizedProps;
                try { u.nodeValue = c } catch (y) { Se(e, e.return, y) }
            }
            break;
        case 3:
            if (zt(t, e), Ht(e), n & 4 && r !== null && r.memoizedState.isDehydrated) try { ji(t.containerInfo) } catch (y) { Se(e, e.return, y) }
            break;
        case 4:
            zt(t, e), Ht(e);
            break;
        case 13:
            zt(t, e), Ht(e), u = e.child, u.flags & 8192 && u.memoizedState !== null && (u.alternate === null || u.alternate.memoizedState === null) && (nd = we()), n & 4 && oh(e);
            break;
        case 22:
            if (u = r !== null && r.memoizedState !== null, e.mode & 1 ? (Qe = (c = Qe) || u, zt(t, e), Qe = c) : zt(t, e), Ht(e), n & 8192) {
                c = e.memoizedState !== null;
                e: for (p = null, h = e;;) {
                    if (h.tag === 5) { if (p === null) { p = h; try { i = h.stateNode, c ? (a = i.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (l = h.stateNode, s = h.memoizedProps.style, o = s != null && s.hasOwnProperty("display") ? s.display : null, l.style.display = Hp("display", o)) } catch (y) { Se(e, e.return, y) } } } else if (h.tag === 6) { if (p === null) try { h.stateNode.nodeValue = c ? "" : h.memoizedProps } catch (y) { Se(e, e.return, y) } } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) { h.child.return = h, h = h.child; continue }
                    if (h === e) break e;
                    for (; h.sibling === null;) {
                        if (h.return === null || h.return === e) break e;
                        p === h && (p = null), h = h.return
                    }
                    p === h && (p = null), h.sibling.return = h.return, h = h.sibling
                }
                if (c && !u && (e.mode & 1) !== 0)
                    for (I = e, e = e.child; e !== null;) {
                        for (u = I = e; I !== null;) {
                            switch (c = I, p = c.child, c.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    ki(4, c, c.return);
                                    break;
                                case 1:
                                    if (Pn(c, c.return), a = c.stateNode, typeof a.componentWillUnmount == "function") { h = c, g = c.return; try { i = h, a.props = i.memoizedProps, a.state = i.memoizedState, a.componentWillUnmount() } catch (y) { Se(h, g, y) } }
                                    break;
                                case 5:
                                    Pn(c, c.return);
                                    break;
                                case 22:
                                    if (c.memoizedState !== null) { sh(u); continue }
                            }
                            p !== null ? (p.return = c, I = p) : sh(u)
                        }
                        e = e.sibling
                    }
            }
            break;
        case 19:
            zt(t, e), Ht(e), n & 4 && oh(e);
            break;
        case 21:
            break;
        default:
            zt(t, e), Ht(e)
    }
}

function Ht(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var r = e.return; r !== null;) {
                    if (pm(r)) { var n = r; break e }
                    r = r.return
                }
                throw Error(O(160))
            }
            switch (n.tag) {
                case 5:
                    var i = n.stateNode;
                    n.flags & 32 && (Ni(i, ""), n.flags &= -33);
                    var a = ah(e);
                    zu(e, a, i);
                    break;
                case 3:
                case 4:
                    var o = n.stateNode.containerInfo,
                        l = ah(e);
                    $u(e, l, o);
                    break;
                default:
                    throw Error(O(161))
            }
        }
        catch (s) { Se(e, e.return, s) }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function rS(e, t, r) { I = e, gm(e) }

function gm(e, t, r) {
    for (var n = (e.mode & 1) !== 0; I !== null;) {
        var i = I,
            a = i.child;
        if (i.tag === 22 && n) {
            var o = i.memoizedState !== null || ja;
            if (!o) {
                var l = i.alternate,
                    s = l !== null && l.memoizedState !== null || Qe;
                l = ja;
                var u = Qe;
                if (ja = o, (Qe = s) && !u)
                    for (I = i; I !== null;) o = I, s = o.child, o.tag === 22 && o.memoizedState !== null ? uh(i) : s !== null ? (s.return = o, I = s) : uh(i);
                for (; a !== null;) I = a, gm(a), a = a.sibling;
                I = i, ja = l, Qe = u
            }
            lh(e)
        } else(i.subtreeFlags & 8772) !== 0 && a !== null ? (a.return = i, I = a) : lh(e)
    }
}

function lh(e) {
    for (; I !== null;) {
        var t = I;
        if ((t.flags & 8772) !== 0) {
            var r = t.alternate;
            try {
                if ((t.flags & 8772) !== 0) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Qe || $l(5, t);
                        break;
                    case 1:
                        var n = t.stateNode;
                        if (t.flags & 4 && !Qe)
                            if (r === null) n.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? r.memoizedProps : Mt(t.type, r.memoizedProps);
                                n.componentDidUpdate(i, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate)
                            }
                        var a = t.updateQueue;
                        a !== null && Lf(t, a, n);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (r = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    r = t.child.stateNode;
                                    break;
                                case 1:
                                    r = t.child.stateNode
                            }
                            Lf(t, o, r)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (r === null && t.flags & 4) {
                            r = l;
                            var s = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    s.autoFocus && r.focus();
                                    break;
                                case "img":
                                    s.src && (r.src = s.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var p = c.dehydrated;
                                    p !== null && ji(p)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                        break;
                    default:
                        throw Error(O(163))
                }
                Qe || t.flags & 512 && Ou(t)
            } catch (h) { Se(t, t.return, h) }
        }
        if (t === e) { I = null; break }
        if (r = t.sibling, r !== null) { r.return = t.return, I = r; break }
        I = t.return
    }
}

function sh(e) {
    for (; I !== null;) {
        var t = I;
        if (t === e) { I = null; break }
        var r = t.sibling;
        if (r !== null) { r.return = t.return, I = r; break }
        I = t.return
    }
}

function uh(e) {
    for (; I !== null;) {
        var t = I;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var r = t.return;
                    try { $l(4, t) } catch (s) { Se(t, r, s) }
                    break;
                case 1:
                    var n = t.stateNode;
                    if (typeof n.componentDidMount == "function") { var i = t.return; try { n.componentDidMount() } catch (s) { Se(t, i, s) } }
                    var a = t.return;
                    try { Ou(t) } catch (s) { Se(t, a, s) }
                    break;
                case 5:
                    var o = t.return;
                    try { Ou(t) } catch (s) { Se(t, o, s) }
            }
        } catch (s) { Se(t, t.return, s) }
        if (t === e) { I = null; break }
        var l = t.sibling;
        if (l !== null) { l.return = t.return, I = l; break }
        I = t.return
    }
}
var nS = Math.ceil,
    Uo = vr.ReactCurrentDispatcher,
    td = vr.ReactCurrentOwner,
    Ct = vr.ReactCurrentBatchConfig,
    V = 0,
    $e = null,
    Ee = null,
    Be = 0,
    ct = 0,
    Tn = Lr(0),
    Re = 0,
    Zi = null,
    ln = 0,
    zl = 0,
    rd = 0,
    Ci = null,
    et = null,
    nd = 0,
    Qn = 1 / 0,
    ir = null,
    Qo = !1,
    Au = null,
    Ar = null,
    Wa = !1,
    Er = null,
    Vo = 0,
    _i = 0,
    Fu = null,
    po = -1,
    vo = 0;

function Ye() { return (V & 6) !== 0 ? we() : po !== -1 ? po : po = we() }

function Fr(e) { return (e.mode & 1) === 0 ? 1 : (V & 2) !== 0 && Be !== 0 ? Be & -Be : jb.transition !== null ? (vo === 0 && (vo = rv()), vo) : (e = te, e !== 0 || (e = window.event, e = e === void 0 ? 16 : uv(e.type)), e) }

function _t(e, t, r) { if (50 < _i) throw _i = 0, Fu = null, Error(O(185)); var n = Al(e, t); return n === null ? null : (oa(n, t, r), ((V & 2) === 0 || n !== $e) && (n === $e && ((V & 2) === 0 && (zl |= t), Re === 4 && Cr(n, Be)), at(n, r), t === 1 && V === 0 && (e.mode & 1) === 0 && (Qn = we() + 500, Tl && Dr())), n) }

function Al(e, t) { e.lanes |= t; var r = e.alternate; for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null;) e.childLanes |= t, r = e.alternate, r !== null && (r.childLanes |= t), r = e, e = e.return; return r.tag === 3 ? r.stateNode : null }

function ym(e) { return ($e !== null || Lt !== null) && (e.mode & 1) !== 0 && (V & 2) === 0 }

function at(e, t) {
    var r = e.callbackNode;
    j1(e, t);
    var n = Ro(e, e === $e ? Be : 0);
    if (n === 0) r !== null && vf(r), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = n & -n, e.callbackPriority !== t) {
        if (r != null && vf(r), t === 1) e.tag === 0 ? Db(ch.bind(null, e)) : Tv(ch.bind(null, e)), Mb(function() { V === 0 && Dr() }), r = null;
        else {
            switch (nv(n)) {
                case 1:
                    r = Oc;
                    break;
                case 4:
                    r = ev;
                    break;
                case 16:
                    r = To;
                    break;
                case 536870912:
                    r = tv;
                    break;
                default:
                    r = To
            }
            r = Em(r, bm.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = r
    }
}

function bm(e, t) {
    if (po = -1, vo = 0, (V & 6) !== 0) throw Error(O(327));
    var r = e.callbackNode;
    if (Mn() && e.callbackNode !== r) return null;
    var n = Ro(e, e === $e ? Be : 0);
    if (n === 0) return null;
    if ((n & 30) !== 0 || (n & e.expiredLanes) !== 0 || t) t = qo(e, n);
    else {
        t = n;
        var i = V;
        V |= 2;
        var a = xm();
        ($e !== e || Be !== t) && (ir = null, Qn = we() + 500, Jr(e, t));
        do try { oS(); break } catch (l) { Sm(e, l) }
        while (1);
        Dc(), Uo.current = a, V = i, Ee !== null ? t = 0 : ($e = null, Be = 0, t = Re)
    }
    if (t !== 0) {
        if (t === 2 && (i = su(e), i !== 0 && (n = i, t = Iu(e, i))), t === 1) throw r = Zi, Jr(e, 0), Cr(e, n), at(e, we()), r;
        if (t === 6) Cr(e, n);
        else {
            if (i = e.current.alternate, (n & 30) === 0 && !iS(i) && (t = qo(e, n), t === 2 && (a = su(e), a !== 0 && (n = a, t = Iu(e, a))), t === 1)) throw r = Zi, Jr(e, 0), Cr(e, n), at(e, we()), r;
            switch (e.finishedWork = i, e.finishedLanes = n, t) {
                case 0:
                case 1:
                    throw Error(O(345));
                case 2:
                    Vr(e, et, ir);
                    break;
                case 3:
                    if (Cr(e, n), (n & 130023424) === n && (t = nd + 500 - we(), 10 < t)) {
                        if (Ro(e, 0) !== 0) break;
                        if (i = e.suspendedLanes, (i & n) !== n) { Ye(), e.pingedLanes |= e.suspendedLanes & i; break }
                        e.timeoutHandle = mu(Vr.bind(null, e, et, ir), t);
                        break
                    }
                    Vr(e, et, ir);
                    break;
                case 4:
                    if (Cr(e, n), (n & 4194240) === n) break;
                    for (t = e.eventTimes, i = -1; 0 < n;) {
                        var o = 31 - Dt(n);
                        a = 1 << o, o = t[o], o > i && (i = o), n &= ~a
                    }
                    if (n = i, n = we() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * nS(n / 1960)) - n, 10 < n) { e.timeoutHandle = mu(Vr.bind(null, e, et, ir), n); break }
                    Vr(e, et, ir);
                    break;
                case 5:
                    Vr(e, et, ir);
                    break;
                default:
                    throw Error(O(329))
            }
        }
    }
    return at(e, we()), e.callbackNode === r ? bm.bind(null, e) : null
}

function Iu(e, t) { var r = Ci; return e.current.memoizedState.isDehydrated && (Jr(e, t).flags |= 256), e = qo(e, t), e !== 2 && (t = et, et = r, t !== null && Mu(t)), e }

function Mu(e) { et === null ? et = e : et.push.apply(et, e) }

function iS(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var r = t.updateQueue;
            if (r !== null && (r = r.stores, r !== null))
                for (var n = 0; n < r.length; n++) {
                    var i = r[n],
                        a = i.getSnapshot;
                    i = i.value;
                    try { if (!jt(a(), i)) return !1 } catch { return !1 }
                }
        }
        if (r = t.child, t.subtreeFlags & 16384 && r !== null) r.return = t, t = r;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function Cr(e, t) {
    for (t &= ~rd, t &= ~zl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var r = 31 - Dt(t),
            n = 1 << r;
        e[r] = -1, t &= ~n
    }
}

function ch(e) {
    if ((V & 6) !== 0) throw Error(O(327));
    Mn();
    var t = Ro(e, 0);
    if ((t & 1) === 0) return at(e, we()), null;
    var r = qo(e, t);
    if (e.tag !== 0 && r === 2) {
        var n = su(e);
        n !== 0 && (t = n, r = Iu(e, n))
    }
    if (r === 1) throw r = Zi, Jr(e, 0), Cr(e, t), at(e, we()), r;
    if (r === 6) throw Error(O(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Vr(e, et, ir), at(e, we()), null
}

function id(e, t) {
    var r = V;
    V |= 1;
    try { return e(t) } finally { V = r, V === 0 && (Qn = we() + 500, Tl && Dr()) }
}

function sn(e) {
    Er !== null && Er.tag === 0 && (V & 6) === 0 && Mn();
    var t = V;
    V |= 1;
    var r = Ct.transition,
        n = te;
    try { if (Ct.transition = null, te = 1, e) return e() } finally { te = n, Ct.transition = r, V = t, (V & 6) === 0 && Dr() }
}

function ad() { ct = Tn.current, ce(Tn) }

function Jr(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var r = e.timeoutHandle;
    if (r !== -1 && (e.timeoutHandle = -1, Ib(r)), Ee !== null)
        for (r = Ee.return; r !== null;) {
            var n = r;
            switch (Uc(n), n.tag) {
                case 1:
                    n = n.type.childContextTypes, n != null && Fo();
                    break;
                case 3:
                    Un(), ce(nt), ce(Ve), Kc();
                    break;
                case 5:
                    qc(n);
                    break;
                case 4:
                    Un();
                    break;
                case 13:
                    ce(me);
                    break;
                case 19:
                    ce(me);
                    break;
                case 10:
                    jc(n.type._context);
                    break;
                case 22:
                case 23:
                    ad()
            }
            r = r.return
        }
    if ($e = e, Ee = e = Nr(e.current, null), Be = ct = t, Re = 0, Zi = null, rd = zl = ln = 0, et = Ci = null, Lt !== null) {
        for (t = 0; t < Lt.length; t++)
            if (r = Lt[t], n = r.interleaved, n !== null) {
                r.interleaved = null;
                var i = n.next,
                    a = r.pending;
                if (a !== null) {
                    var o = a.next;
                    a.next = i, n.next = o
                }
                r.pending = n
            }
        Lt = null
    }
    return e
}

function Sm(e, t) {
    do {
        var r = Ee;
        try {
            if (Dc(), fo.current = Ho, Wo) {
                for (var n = ge.memoizedState; n !== null;) {
                    var i = n.queue;
                    i !== null && (i.pending = null), n = n.next
                }
                Wo = !1
            }
            if (on = 0, Fe = Te = ge = null, wi = !1, Gi = 0, td.current = null, r === null || r.return === null) { Re = 1, Zi = t, Ee = null; break }
            e: {
                var a = e,
                    o = r.return,
                    l = r,
                    s = t;
                if (t = Be, l.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
                    var u = s,
                        c = l,
                        p = c.tag;
                    if ((c.mode & 1) === 0 && (p === 0 || p === 11 || p === 15)) {
                        var h = c.alternate;
                        h ? (c.updateQueue = h.updateQueue, c.memoizedState = h.memoizedState, c.lanes = h.lanes) : (c.updateQueue = null, c.memoizedState = null)
                    }
                    var g = Kf(o);
                    if (g !== null) {
                        g.flags &= -257, Gf(g, o, l, a, t), g.mode & 1 && qf(a, u, t), t = g, s = u;
                        var y = t.updateQueue;
                        if (y === null) {
                            var x = new Set;
                            x.add(s), t.updateQueue = x
                        } else y.add(s);
                        break e
                    } else {
                        if ((t & 1) === 0) { qf(a, u, t), od(); break e }
                        s = Error(O(426))
                    }
                } else if (pe && l.mode & 1) {
                    var R = Kf(o);
                    if (R !== null) {
                        (R.flags & 65536) === 0 && (R.flags |= 256), Gf(R, o, l, a, t), Qc(s);
                        break e
                    }
                }
                a = s,
                Re !== 4 && (Re = 2),
                Ci === null ? Ci = [a] : Ci.push(a),
                s = ed(s, l),
                l = o;do {
                    switch (l.tag) {
                        case 3:
                            l.flags |= 65536, t &= -t, l.lanes |= t;
                            var v = rm(l, s, t);
                            Bf(l, v);
                            break e;
                        case 1:
                            a = s;
                            var d = l.type,
                                m = l.stateNode;
                            if ((l.flags & 128) === 0 && (typeof d.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Ar === null || !Ar.has(m)))) {
                                l.flags |= 65536, t &= -t, l.lanes |= t;
                                var C = nm(l, a, t);
                                Bf(l, C);
                                break e
                            }
                    }
                    l = l.return
                } while (l !== null)
            }
            km(r)
        } catch (E) { t = E, Ee === r && r !== null && (Ee = r = r.return); continue }
        break
    } while (1)
}

function xm() { var e = Uo.current; return Uo.current = Ho, e === null ? Ho : e }

function od() {
    (Re === 0 || Re === 3 || Re === 2) && (Re = 4), $e === null || (ln & 268435455) === 0 && (zl & 268435455) === 0 || Cr($e, Be)
}

function qo(e, t) {
    var r = V;
    V |= 2;
    var n = xm();
    ($e !== e || Be !== t) && (ir = null, Jr(e, t));
    do try { aS(); break } catch (i) { Sm(e, i) }
    while (1);
    if (Dc(), V = r, Uo.current = n, Ee !== null) throw Error(O(261));
    return $e = null, Be = 0, Re
}

function aS() { for (; Ee !== null;) wm(Ee) }

function oS() { for (; Ee !== null && !z1();) wm(Ee) }

function wm(e) {
    var t = _m(e.alternate, e, ct);
    e.memoizedProps = e.pendingProps, t === null ? km(e) : Ee = t, td.current = null
}

function km(e) {
    var t = e;
    do {
        var r = t.alternate;
        if (e = t.return, (t.flags & 32768) === 0) { if (r = Yb(r, t, ct), r !== null) { Ee = r; return } } else {
            if (r = Jb(r, t), r !== null) { r.flags &= 32767, Ee = r; return }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else { Re = 6, Ee = null; return }
        }
        if (t = t.sibling, t !== null) { Ee = t; return }
        Ee = t = e
    } while (t !== null);
    Re === 0 && (Re = 5)
}

function Vr(e, t, r) {
    var n = te,
        i = Ct.transition;
    try { Ct.transition = null, te = 1, lS(e, t, r, n) } finally { Ct.transition = i, te = n }
    return null
}

function lS(e, t, r, n) {
    do Mn(); while (Er !== null);
    if ((V & 6) !== 0) throw Error(O(327));
    r = e.finishedWork;
    var i = e.finishedLanes;
    if (r === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, r === e.current) throw Error(O(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var a = r.lanes | r.childLanes;
    if (W1(e, a), e === $e && (Ee = $e = null, Be = 0), (r.subtreeFlags & 2064) === 0 && (r.flags & 2064) === 0 || Wa || (Wa = !0, Em(To, function() { return Mn(), null })), a = (r.flags & 15990) !== 0, (r.subtreeFlags & 15990) !== 0 || a) {
        a = Ct.transition, Ct.transition = null;
        var o = te;
        te = 1;
        var l = V;
        V |= 4, td.current = null, tS(e, r), mm(r, e), Tb(pu), Oo = !!hu, pu = hu = null, e.current = r, rS(r), A1(), V = l, te = o, Ct.transition = a
    } else e.current = r;
    if (Wa && (Wa = !1, Er = e, Vo = i), a = e.pendingLanes, a === 0 && (Ar = null), M1(r.stateNode), at(e, we()), t !== null)
        for (n = e.onRecoverableError, r = 0; r < t.length; r++) n(t[r]);
    if (Qo) throw Qo = !1, e = Au, Au = null, e;
    return (Vo & 1) !== 0 && e.tag !== 0 && Mn(), a = e.pendingLanes, (a & 1) !== 0 ? e === Fu ? _i++ : (_i = 0, Fu = e) : _i = 0, Dr(), null
}

function Mn() {
    if (Er !== null) {
        var e = nv(Vo),
            t = Ct.transition,
            r = te;
        try {
            if (Ct.transition = null, te = 16 > e ? 16 : e, Er === null) var n = !1;
            else {
                if (e = Er, Er = null, Vo = 0, (V & 6) !== 0) throw Error(O(331));
                var i = V;
                for (V |= 4, I = e.current; I !== null;) {
                    var a = I,
                        o = a.child;
                    if ((I.flags & 16) !== 0) {
                        var l = a.deletions;
                        if (l !== null) {
                            for (var s = 0; s < l.length; s++) {
                                var u = l[s];
                                for (I = u; I !== null;) {
                                    var c = I;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            ki(8, c, a)
                                    }
                                    var p = c.child;
                                    if (p !== null) p.return = c, I = p;
                                    else
                                        for (; I !== null;) {
                                            c = I;
                                            var h = c.sibling,
                                                g = c.return;
                                            if (hm(c), c === u) { I = null; break }
                                            if (h !== null) { h.return = g, I = h; break }
                                            I = g
                                        }
                                }
                            }
                            var y = a.alternate;
                            if (y !== null) {
                                var x = y.child;
                                if (x !== null) {
                                    y.child = null;
                                    do {
                                        var R = x.sibling;
                                        x.sibling = null, x = R
                                    } while (x !== null)
                                }
                            }
                            I = a
                        }
                    }
                    if ((a.subtreeFlags & 2064) !== 0 && o !== null) o.return = a, I = o;
                    else e: for (; I !== null;) {
                        if (a = I, (a.flags & 2048) !== 0) switch (a.tag) {
                            case 0:
                            case 11:
                            case 15:
                                ki(9, a, a.return)
                        }
                        var v = a.sibling;
                        if (v !== null) { v.return = a.return, I = v; break e }
                        I = a.return
                    }
                }
                var d = e.current;
                for (I = d; I !== null;) {
                    o = I;
                    var m = o.child;
                    if ((o.subtreeFlags & 2064) !== 0 && m !== null) m.return = o, I = m;
                    else e: for (o = d; I !== null;) {
                        if (l = I, (l.flags & 2048) !== 0) try {
                            switch (l.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    $l(9, l)
                            }
                        } catch (E) { Se(l, l.return, E) }
                        if (l === o) { I = null; break e }
                        var C = l.sibling;
                        if (C !== null) { C.return = l.return, I = C; break e }
                        I = l.return
                    }
                }
                if (V = i, Dr(), Zt && typeof Zt.onPostCommitFiberRoot == "function") try { Zt.onPostCommitFiberRoot(kl, e) } catch {}
                n = !0
            }
            return n
        } finally { te = r, Ct.transition = t }
    }
    return !1
}

function dh(e, t, r) { t = ed(r, t), t = rm(e, t, 1), zr(e, t), t = Ye(), e = Al(e, 1), e !== null && (oa(e, 1, t), at(e, t)) }

function Se(e, t, r) {
    if (e.tag === 3) dh(e, e, r);
    else
        for (; t !== null;) {
            if (t.tag === 3) { dh(t, e, r); break } else if (t.tag === 1) { var n = t.stateNode; if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Ar === null || !Ar.has(n))) { e = ed(r, e), e = nm(t, e, 1), zr(t, e), e = Ye(), t = Al(t, 1), t !== null && (oa(t, 1, e), at(t, e)); break } }
            t = t.return
        }
}

function sS(e, t, r) {
    var n = e.pingCache;
    n !== null && n.delete(t), t = Ye(), e.pingedLanes |= e.suspendedLanes & r, $e === e && (Be & r) === r && (Re === 4 || Re === 3 && (Be & 130023424) === Be && 500 > we() - nd ? Jr(e, 0) : rd |= r), at(e, t)
}

function Cm(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = $a, $a <<= 1, ($a & 130023424) === 0 && ($a = 4194304)));
    var r = Ye();
    e = Al(e, t), e !== null && (oa(e, t, r), at(e, r))
}

function uS(e) {
    var t = e.memoizedState,
        r = 0;
    t !== null && (r = t.retryLane), Cm(e, r)
}

function cS(e, t) {
    var r = 0;
    switch (e.tag) {
        case 13:
            var n = e.stateNode,
                i = e.memoizedState;
            i !== null && (r = i.retryLane);
            break;
        case 19:
            n = e.stateNode;
            break;
        default:
            throw Error(O(314))
    }
    n !== null && n.delete(t), Cm(e, r)
}
var _m;
_m = function(e, t, r) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || nt.current) rt = !0;
        else {
            if ((e.lanes & r) === 0 && (t.flags & 128) === 0) return rt = !1, Zb(e, t, r);
            rt = (e.flags & 131072) !== 0
        }
    else rt = !1, pe && (t.flags & 1048576) !== 0 && zv(t, Do, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var n = t.type;
            e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps;
            var i = jn(t, Ve.current);
            In(t, r), i = Yc(null, t, n, e, i, r);
            var a = Xc();
            return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, it(n) ? (a = !0, Io(t)) : a = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Wc(t), i.updater = Rl, t.stateNode = i, i._reactInternals = t, xu(t, n, e, r), t = Pu(null, t, n, !0, a, r)) : (t.tag = 0, pe && a && Hc(t), Ge(null, t, i, r), t = t.child), t;
        case 16:
            n = t.elementType;
            e: {
                switch (e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, i = n._init, n = i(n._payload), t.type = n, i = t.tag = fS(n), e = Mt(n, e), i) {
                    case 0:
                        t = Eu(null, t, n, e, r);
                        break e;
                    case 1:
                        t = Zf(null, t, n, e, r);
                        break e;
                    case 11:
                        t = Yf(null, t, n, e, r);
                        break e;
                    case 14:
                        t = Xf(null, t, n, Mt(n.type, e), r);
                        break e
                }
                throw Error(O(306, n, ""))
            }
            return t;
        case 0:
            return n = t.type, i = t.pendingProps, i = t.elementType === n ? i : Mt(n, i), Eu(e, t, n, i, r);
        case 1:
            return n = t.type, i = t.pendingProps, i = t.elementType === n ? i : Mt(n, i), Zf(e, t, n, i, r);
        case 3:
            e: {
                if (cm(t), e === null) throw Error(O(387));n = t.pendingProps,
                a = t.memoizedState,
                i = a.element,
                Rv(e, t),
                Bo(t, n, null, r);
                var o = t.memoizedState;
                if (n = o.element, a.isDehydrated)
                    if (a = { element: n, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) { i = Error(O(423)), t = Jf(e, t, n, r, i); break e } else if (n !== i) { i = Error(O(424)), t = Jf(e, t, n, r, i); break e } else
                    for (tt = sr(t.stateNode.containerInfo.firstChild), ht = t, pe = !0, Bt = null, r = Iv(t, null, n, r), t.child = r; r;) r.flags = r.flags & -3 | 4096, r = r.sibling;
                else {
                    if (Wn(), n === i) { t = pr(e, t, r); break e }
                    Ge(e, t, n, r)
                }
                t = t.child
            }
            return t;
        case 5:
            return Mv(t), e === null && ku(t), n = t.type, i = t.pendingProps, a = e !== null ? e.memoizedProps : null, o = i.children, vu(n, i) ? o = null : a !== null && vu(n, a) && (t.flags |= 32), um(e, t), Ge(e, t, o, r), t.child;
        case 6:
            return e === null && ku(t), null;
        case 13:
            return dm(e, t, r);
        case 4:
            return Vc(t, t.stateNode.containerInfo), n = t.pendingProps, e === null ? t.child = Hn(t, null, n, r) : Ge(e, t, n, r), t.child;
        case 11:
            return n = t.type, i = t.pendingProps, i = t.elementType === n ? i : Mt(n, i), Yf(e, t, n, i, r);
        case 7:
            return Ge(e, t, t.pendingProps, r), t.child;
        case 8:
            return Ge(e, t, t.pendingProps.children, r), t.child;
        case 12:
            return Ge(e, t, t.pendingProps.children, r), t.child;
        case 10:
            e: {
                if (n = t.type._context, i = t.pendingProps, a = t.memoizedProps, o = i.value, oe(Mo, n._currentValue), n._currentValue = o, a !== null)
                    if (jt(a.value, o)) { if (a.children === i.children && !nt.current) { t = pr(e, t, r); break e } } else
                        for (a = t.child, a !== null && (a.return = t); a !== null;) {
                            var l = a.dependencies;
                            if (l !== null) {
                                o = a.child;
                                for (var s = l.firstContext; s !== null;) {
                                    if (s.context === n) {
                                        if (a.tag === 1) {
                                            s = dr(-1, r & -r), s.tag = 2;
                                            var u = a.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var c = u.pending;
                                                c === null ? s.next = s : (s.next = c.next, c.next = s), u.pending = s
                                            }
                                        }
                                        a.lanes |= r, s = a.alternate, s !== null && (s.lanes |= r), bu(a.return, r, t), l.lanes |= r;
                                        break
                                    }
                                    s = s.next
                                }
                            } else if (a.tag === 10) o = a.type === t.type ? null : a.child;
                            else if (a.tag === 18) {
                                if (o = a.return, o === null) throw Error(O(341));
                                o.lanes |= r, l = o.alternate, l !== null && (l.lanes |= r), bu(o, r, t), o = a.sibling
                            } else o = a.child;
                            if (o !== null) o.return = a;
                            else
                                for (o = a; o !== null;) {
                                    if (o === t) { o = null; break }
                                    if (a = o.sibling, a !== null) { a.return = o.return, o = a; break }
                                    o = o.return
                                }
                            a = o
                        }
                Ge(e, t, i.children, r),
                t = t.child
            }
            return t;
        case 9:
            return i = t.type, n = t.pendingProps.children, In(t, r), i = Pt(i), n = n(i), t.flags |= 1, Ge(e, t, n, r), t.child;
        case 14:
            return n = t.type, i = Mt(n, t.pendingProps), i = Mt(n.type, i), Xf(e, t, n, i, r);
        case 15:
            return lm(e, t, t.type, t.pendingProps, r);
        case 17:
            return n = t.type, i = t.pendingProps, i = t.elementType === n ? i : Mt(n, i), e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), t.tag = 1, it(n) ? (e = !0, Io(t)) : e = !1, In(t, r), $v(t, n, i), xu(t, n, i, r), Pu(null, t, n, !0, e, r);
        case 19:
            return fm(e, t, r);
        case 22:
            return sm(e, t, r)
    }
    throw Error(O(156, t.tag))
};

function Em(e, t) { return Jp(e, t) }

function dS(e, t, r, n) { this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null }

function kt(e, t, r, n) { return new dS(e, t, r, n) }

function ld(e) { return e = e.prototype, !(!e || !e.isReactComponent) }

function fS(e) { if (typeof e == "function") return ld(e) ? 1 : 0; if (e != null) { if (e = e.$$typeof, e === Pc) return 11; if (e === Tc) return 14 } return 2 }

function Nr(e, t) { var r = e.alternate; return r === null ? (r = kt(e.tag, t, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 14680064, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, t = e.dependencies, r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r }

function mo(e, t, r, n, i, a) {
    var o = 2;
    if (n = e, typeof e == "function") ld(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else e: switch (e) {
        case yn:
            return en(r.children, i, a, t);
        case Ec:
            o = 8, i |= 8;
            break;
        case qs:
            return e = kt(12, r, t, i | 2), e.elementType = qs, e.lanes = a, e;
        case Ks:
            return e = kt(13, r, t, i), e.elementType = Ks, e.lanes = a, e;
        case Gs:
            return e = kt(19, r, t, i), e.elementType = Gs, e.lanes = a, e;
        case Mp:
            return Ko(r, i, a, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case Fp:
                    o = 10;
                    break e;
                case Ip:
                    o = 9;
                    break e;
                case Pc:
                    o = 11;
                    break e;
                case Tc:
                    o = 14;
                    break e;
                case Sr:
                    o = 16, n = null;
                    break e
            }
            throw Error(O(130, e == null ? e : typeof e, ""))
    }
    return t = kt(o, r, t, i), t.elementType = e, t.type = n, t.lanes = a, t
}

function en(e, t, r, n) { return e = kt(7, e, n, t), e.lanes = r, e }

function Ko(e, t, r, n) { return e = kt(22, e, n, t), e.elementType = Mp, e.lanes = r, e.stateNode = {}, e }

function Cs(e, t, r) { return e = kt(6, e, null, t), e.lanes = r, e }

function _s(e, t, r) { return t = kt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = r, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t }

function hS(e, t, r, n, i) { this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = os(0), this.expirationTimes = os(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = os(0), this.identifierPrefix = n, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null }

function sd(e, t, r, n, i, a, o, l, s) { return e = new hS(e, t, r, l, s), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = kt(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: n, isDehydrated: r, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Wc(a), e }

function pS(e, t, r) { var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null; return { $$typeof: gn, key: n == null ? null : "" + n, children: e, containerInfo: t, implementation: r } }

function Pm(e) {
    if (!e) return Mr;
    e = e._reactInternals;
    e: {
        if (dn(e) !== e || e.tag !== 1) throw Error(O(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (it(t.type)) { t = t.stateNode.__reactInternalMemoizedMergedChildContext; break e }
            }
            t = t.return
        } while (t !== null);
        throw Error(O(171))
    }
    if (e.tag === 1) { var r = e.type; if (it(r)) return Pv(e, r, t) }
    return t
}

function Tm(e, t, r, n, i, a, o, l, s) { return e = sd(r, n, !0, e, i, a, o, l, s), e.context = Pm(null), r = e.current, n = Ye(), i = Fr(r), a = dr(n, i), a.callback = t != null ? t : null, zr(r, a), e.current.lanes = i, oa(e, i, n), at(e, n), e }

function Fl(e, t, r, n) {
    var i = t.current,
        a = Ye(),
        o = Fr(i);
    return r = Pm(r), t.context === null ? t.context = r : t.pendingContext = r, t = dr(a, o), t.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (t.callback = n), zr(i, t), e = _t(i, o, a), e !== null && co(e, i, o), o
}

function Go(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function fh(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var r = e.retryLane;
        e.retryLane = r !== 0 && r < t ? r : t
    }
}

function ud(e, t) { fh(e, t), (e = e.alternate) && fh(e, t) }

function vS() { return null }
var Rm = typeof reportError == "function" ? reportError : function(e) { console.error(e) };

function cd(e) { this._internalRoot = e }
Il.prototype.render = cd.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(O(409));
    Fl(e, t, null, null)
};
Il.prototype.unmount = cd.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        sn(function() { Fl(null, e, null, null) }), t[hr] = null
    }
};

function Il(e) { this._internalRoot = e }
Il.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = ov();
        e = { blockedOn: null, target: e, priority: t };
        for (var r = 0; r < kr.length && t !== 0 && t < kr[r].priority; r++);
        kr.splice(r, 0, e), r === 0 && sv(e)
    }
};

function dd(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11) }

function Ml(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable ")) }

function hh() {}

function mS(e, t, r, n, i) {
    if (i) {
        if (typeof n == "function") {
            var a = n;
            n = function() {
                var u = Go(o);
                a.call(u)
            }
        }
        var o = Tm(t, n, e, 0, null, !1, !1, "", hh);
        return e._reactRootContainer = o, e[hr] = o.current, Ui(e.nodeType === 8 ? e.parentNode : e), sn(), o
    }
    for (; i = e.lastChild;) e.removeChild(i);
    if (typeof n == "function") {
        var l = n;
        n = function() {
            var u = Go(s);
            l.call(u)
        }
    }
    var s = sd(e, 0, !1, null, null, !1, !1, "", hh);
    return e._reactRootContainer = s, e[hr] = s.current, Ui(e.nodeType === 8 ? e.parentNode : e), sn(function() { Fl(t, s, r, n) }), s
}

function Nl(e, t, r, n, i) {
    var a = r._reactRootContainer;
    if (a) {
        var o = a;
        if (typeof i == "function") {
            var l = i;
            i = function() {
                var s = Go(o);
                l.call(s)
            }
        }
        Fl(t, o, e, i)
    } else o = mS(r, t, e, i, n);
    return Go(o)
}
iv = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var r = vi(t.pendingLanes);
                r !== 0 && ($c(t, r | 1), at(t, we()), (V & 6) === 0 && (Qn = we() + 500, Dr()))
            }
            break;
        case 13:
            var n = Ye();
            sn(function() { return _t(e, 1, n) }), ud(e, 1)
    }
};
zc = function(e) {
    if (e.tag === 13) {
        var t = Ye();
        _t(e, 134217728, t), ud(e, 134217728)
    }
};
av = function(e) {
    if (e.tag === 13) {
        var t = Ye(),
            r = Fr(e);
        _t(e, r, t), ud(e, r)
    }
};
ov = function() { return te };
lv = function(e, t) { var r = te; try { return te = e, t() } finally { te = r } };
au = function(e, t, r) {
    switch (t) {
        case "input":
            if (Zs(e, r), t = r.name, r.type === "radio" && t != null) {
                for (r = e; r.parentNode;) r = r.parentNode;
                for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < r.length; t++) {
                    var n = r[t];
                    if (n !== e && n.form === e.form) {
                        var i = Pl(n);
                        if (!i) throw Error(O(90));
                        Bp(n), Zs(n, i)
                    }
                }
            }
            break;
        case "textarea":
            Dp(e, r);
            break;
        case "select":
            t = r.value, t != null && $n(e, !!r.multiple, t, !1)
    }
};
qp = id;
Kp = sn;
var gS = { usingClientEntryPoint: !1, Events: [sa, wn, Pl, Qp, Vp, id] },
    fi = { findFiberByHostInstance: Gr, bundleType: 0, version: "18.1.0", rendererPackageName: "react-dom" },
    yS = { bundleType: fi.bundleType, version: fi.version, rendererPackageName: fi.rendererPackageName, rendererConfig: fi.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: vr.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) { return e = Xp(e), e === null ? null : e.stateNode }, findFiberByHostInstance: fi.findFiberByHostInstance || vS, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.1.0-next-22edb9f77-20220426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") { var Ha = __REACT_DEVTOOLS_GLOBAL_HOOK__; if (!Ha.isDisabled && Ha.supportsFiber) try { kl = Ha.inject(yS), Zt = Ha } catch {} }
mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gS;
mt.createPortal = function(e, t) { var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null; if (!dd(t)) throw Error(O(200)); return pS(e, t, null, r) };
mt.createRoot = function(e, t) {
    if (!dd(e)) throw Error(O(299));
    var r = !1,
        n = "",
        i = Rm;
    return t != null && (t.unstable_strictMode === !0 && (r = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = sd(e, 1, !1, null, null, r, !1, n, i), e[hr] = t.current, Ui(e.nodeType === 8 ? e.parentNode : e), new cd(t)
};
mt.findDOMNode = function(e) { if (e == null) return null; if (e.nodeType === 1) return e; var t = e._reactInternals; if (t === void 0) throw typeof e.render == "function" ? Error(O(188)) : (e = Object.keys(e).join(","), Error(O(268, e))); return e = Xp(t), e = e === null ? null : e.stateNode, e };
mt.flushSync = function(e) { return sn(e) };
mt.hydrate = function(e, t, r) { if (!Ml(t)) throw Error(O(200)); return Nl(null, e, t, !0, r) };
mt.hydrateRoot = function(e, t, r) {
    if (!dd(e)) throw Error(O(405));
    var n = r != null && r.hydratedSources || null,
        i = !1,
        a = "",
        o = Rm;
    if (r != null && (r.unstable_strictMode === !0 && (i = !0), r.identifierPrefix !== void 0 && (a = r.identifierPrefix), r.onRecoverableError !== void 0 && (o = r.onRecoverableError)), t = Tm(t, null, e, 1, r != null ? r : null, i, !1, a, o), e[hr] = t.current, Ui(e), n)
        for (e = 0; e < n.length; e++) r = n[e], i = r._getVersion, i = i(r._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [r, i] : t.mutableSourceEagerHydrationData.push(r, i);
    return new Il(t)
};
mt.render = function(e, t, r) { if (!Ml(t)) throw Error(O(200)); return Nl(null, e, t, !1, r) };
mt.unmountComponentAtNode = function(e) { if (!Ml(e)) throw Error(O(40)); return e._reactRootContainer ? (sn(function() { Nl(null, null, e, !1, function() { e._reactRootContainer = null, e[hr] = null }) }), !0) : !1 };
mt.unstable_batchedUpdates = id;
mt.unstable_renderSubtreeIntoContainer = function(e, t, r, n) { if (!Ml(r)) throw Error(O(200)); if (e == null || e._reactInternals === void 0) throw Error(O(38)); return Nl(e, t, r, !1, n) };
mt.version = "18.1.0-next-22edb9f77-20220426";

function Om() { if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try { __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Om) } catch (e) { console.error(e) } }
Om(), wc.exports = mt;
var bS = wc.exports,
    SS = aa({ strict: !1, name: "PortalManagerContext" }),
    xS = SS[0];

function wS(e) {
    var t = e.children,
        r = e.zIndex;
    return w.exports.createElement(xS, { value: { zIndex: r } }, t)
}
aa({ strict: !1, name: "PortalContext" });
var fd = { exports: {} },
    Bl = {}; /** * @license React * react-jsx-runtime.production.min.js * * Copyright (c) Facebook, Inc. and its affiliates. * * This source code is licensed under the MIT license found in the * LICENSE file in the root directory of this source tree. */
var kS = w.exports,
    CS = Symbol.for("react.element"),
    _S = Symbol.for("react.fragment"),
    ES = Object.prototype.hasOwnProperty,
    PS = kS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    TS = { key: !0, ref: !0, __self: !0, __source: !0 };

function $m(e, t, r) {
    var n, i = {},
        a = null,
        o = null;
    r !== void 0 && (a = "" + r), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (o = t.ref);
    for (n in t) ES.call(t, n) && !TS.hasOwnProperty(n) && (i[n] = t[n]);
    if (e && e.defaultProps)
        for (n in t = e.defaultProps, t) i[n] === void 0 && (i[n] = t[n]);
    return { $$typeof: CS, type: e, key: a, ref: o, props: i, _owner: PS.current }
}
Bl.Fragment = _S;
Bl.jsx = $m;
Bl.jsxs = $m;
fd.exports = Bl;
const Ke = fd.exports.jsx,
    go = fd.exports.jsxs;
var RS = { body: { classList: { add: function() {}, remove: function() {} } }, addEventListener: function() {}, removeEventListener: function() {}, activeElement: { blur: function() {}, nodeName: "" }, querySelector: function() { return null }, querySelectorAll: function() { return [] }, getElementById: function() { return null }, createEvent: function() { return { initEvent: function() {} } }, createElement: function() { return { children: [], childNodes: [], style: {}, setAttribute: function() {}, getElementsByTagName: function() { return [] } } } },
    zm = RS,
    vn = function() {},
    OS = { document: zm, navigator: { userAgent: "" }, CustomEvent: function() { return this }, addEventListener: vn, removeEventListener: vn, getComputedStyle: function() { return { getPropertyValue: function() { return "" } } }, matchMedia: function() { return { matches: !1, addListener: vn, removeListener: vn } }, requestAnimationFrame: function(t) { return typeof setTimeout == "undefined" ? (t(), null) : setTimeout(t, 0) }, cancelAnimationFrame: function(t) { typeof setTimeout != "undefined" && clearTimeout(t) }, setTimeout: function() { return 0 }, clearTimeout: vn, setInterval: function() { return 0 }, clearInterval: vn },
    $S = OS,
    zS = { window: $S, document: zm },
    Am = ia ? { window, document } : zS,
    Fm = w.exports.createContext(Am);

function AS() { return w.exports.useContext(Fm) }

function FS(e) {
    var t = e.children,
        r = e.environment,
        n = w.exports.useState(null),
        i = n[0],
        a = n[1],
        o = w.exports.useMemo(function() {
            var s, u = i == null ? void 0 : i.ownerDocument,
                c = i == null ? void 0 : i.ownerDocument.defaultView,
                p = u ? { document: u, window: c } : void 0,
                h = (s = r != null ? r : p) != null ? s : Am;
            return h
        }, [i, r]),
        l = !i && !r;
    return go(Fm.Provider, { value: o, children: [t, l && Ke("span", { ref: function(u) { u && a(u) } })] })
}
var Ua = { light: "chakra-ui-light", dark: "chakra-ui-dark" },
    IS = { classList: { add: Ii, remove: Ii } },
    MS = function(t) { return ia ? t.body : IS };

function NS(e, t) {
    var r = MS(t);
    r.classList.add(e ? Ua.dark : Ua.light), r.classList.remove(e ? Ua.light : Ua.dark)
}

function BS(e) { var t = window.matchMedia == null ? void 0 : window.matchMedia(e); if (!!t) return !!t.media === t.matches }
var Im = { light: "(prefers-color-scheme: light)", dark: "(prefers-color-scheme: dark)" };

function LS(e) { var t, r = (t = BS(Im.dark)) != null ? t : e === "dark"; return r ? "dark" : "light" }

function DS(e) {
    if (!("matchMedia" in window)) return Ii;
    var t = window.matchMedia(Im.dark),
        r = function() { e(t.matches ? "dark" : "light", !0) };
    return t.addEventListener("change", r),
        function() { t.removeEventListener("change", r) }
}
var ph = { get: function() { return document.documentElement.style.getPropertyValue("--chakra-ui-color-mode") || document.documentElement.dataset.theme }, set: function(t) { ia && (document.documentElement.style.setProperty("--chakra-ui-color-mode", t), document.documentElement.setAttribute("data-theme", t)) } },
    vh = function() { return typeof Storage != "undefined" },
    mh = "chakra-ui-color-mode",
    jS = { get: function(t) { if (!vh()) return t; try { var r = localStorage.getItem(mh); return r != null ? r : t } catch { return t } }, set: function(t) { if (!!vh()) try { localStorage.setItem(mh, t) } catch {} }, type: "localStorage" },
    Mm = w.exports.createContext({}),
    Nm = function() { var t = w.exports.useContext(Mm); if (t === void 0) throw new Error("useColorMode must be used within a ColorModeProvider"); return t };

function WS(e) {
    var t = e.value,
        r = e.children,
        n = e.options,
        i = n.useSystemColorMode,
        a = n.initialColorMode,
        o = e.colorModeManager,
        l = o === void 0 ? jS : o,
        s = a === "dark" ? "dark" : "light",
        u = w.exports.useState(l.type === "cookie" ? l.get(s) : s),
        c = u[0],
        p = u[1],
        h = AS(),
        g = h.document;
    w.exports.useEffect(function() {
        if (ia && l.type === "localStorage") {
            var v = LS(s);
            if (i) return p(v);
            var d = ph.get(),
                m = l.get();
            return p(d || m || (a === "system" ? v : s))
        }
    }, [l, i, s, a]), w.exports.useEffect(function() {
        var v = c === "dark";
        NS(v, g), ph.set(v ? "dark" : "light")
    }, [c, g]);
    var y = w.exports.useCallback(function(v, d) {
            if (d === void 0 && (d = !1), !d) l.set(v);
            else if (l.get() && !i) return;
            p(v)
        }, [l, i]),
        x = w.exports.useCallback(function() { y(c === "light" ? "dark" : "light") }, [c, y]);
    w.exports.useEffect(function() {
        var v = i || a === "system",
            d;
        return v && (d = DS(y)),
            function() { d && v && d() }
    }, [y, i, a]);
    var R = w.exports.useMemo(function() { return { colorMode: t != null ? t : c, toggleColorMode: t ? Ii : x, setColorMode: t ? Ii : y } }, [c, y, x, t]);
    return w.exports.createElement(Mm.Provider, { value: R }, r)
}

function Ji() { return Ji = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e }, Ji.apply(this, arguments) }
var Nu = function(t, r) {
    return function(n) {
        var i = String(r),
            a = t ? t + "." + i : i;
        return ft(n.__cssMap) && a in n.__cssMap ? n.__cssMap[a].varRef : r
    }
};

function ea(e) {
    var t = e.scale,
        r = e.transform,
        n = e.compose,
        i = function(o, l) {
            var s, u = Nu(t, o)(l),
                c = (s = r == null ? void 0 : r(u, l)) != null ? s : u;
            return n && (c = n(c, l)), c
        };
    return i
}

function At(e, t) { return function(r) { var n = { property: r, scale: e }; return n.transform = ea({ scale: e, transform: t }), n } }
var HS = function(t) {
    var r = t.rtl,
        n = t.ltr;
    return function(i) { return i.direction === "rtl" ? r : n }
};

function US(e) {
    var t = e.property,
        r = e.scale,
        n = e.transform;
    return { scale: r, property: HS(t), transform: r ? ea({ scale: r, compose: n }) : n }
}
var Es, Ps, Bm = ["rotate(var(--chakra-rotate, 0))", "scaleX(var(--chakra-scale-x, 1))", "scaleY(var(--chakra-scale-y, 1))", "skewX(var(--chakra-skew-x, 0))", "skewY(var(--chakra-skew-y, 0))"];

function QS() { return ["translateX(var(--chakra-translate-x, 0))", "translateY(var(--chakra-translate-y, 0))"].concat(Bm).join(" ") }

function VS() { return ["translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)"].concat(Bm).join(" ") }
var qS = { "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)", "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)", "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)", "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)", "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)", "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)", "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)", "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)", "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)", filter: ["var(--chakra-blur)", "var(--chakra-brightness)", "var(--chakra-contrast)", "var(--chakra-grayscale)", "var(--chakra-hue-rotate)", "var(--chakra-invert)", "var(--chakra-saturate)", "var(--chakra-sepia)", "var(--chakra-drop-shadow)"].join(" ") },
    KS = { backdropFilter: ["var(--chakra-backdrop-blur)", "var(--chakra-backdrop-brightness)", "var(--chakra-backdrop-contrast)", "var(--chakra-backdrop-grayscale)", "var(--chakra-backdrop-hue-rotate)", "var(--chakra-backdrop-invert)", "var(--chakra-backdrop-opacity)", "var(--chakra-backdrop-saturate)", "var(--chakra-backdrop-sepia)"].join(" "), "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)", "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)", "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)", "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)", "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)", "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)", "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)", "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)", "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)" };

function GS(e) { return { "--chakra-ring-offset-shadow": "var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)", "--chakra-ring-shadow": "var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)", "--chakra-ring-width": e, boxShadow: ["var(--chakra-ring-offset-shadow)", "var(--chakra-ring-shadow)", "var(--chakra-shadow, 0 0 #0000)"].join(", ") } }
var YS = { "row-reverse": { space: "--chakra-space-x-reverse", divide: "--chakra-divide-x-reverse" }, "column-reverse": { space: "--chakra-space-y-reverse", divide: "--chakra-divide-y-reverse" } },
    Lm = "& > :not(style) ~ :not(style)",
    XS = (Es = {}, Es[Lm] = { marginInlineStart: "calc(var(--chakra-space-x) * calc(1 - var(--chakra-space-x-reverse)))", marginInlineEnd: "calc(var(--chakra-space-x) * var(--chakra-space-x-reverse))" }, Es),
    ZS = (Ps = {}, Ps[Lm] = { marginTop: "calc(var(--chakra-space-y) * calc(1 - var(--chakra-space-y-reverse)))", marginBottom: "calc(var(--chakra-space-y) * var(--chakra-space-y-reverse))" }, Ps);

function Yo(e, t) { return Yo = Object.setPrototypeOf || function(n, i) { return n.__proto__ = i, n }, Yo(e, t) }

function JS(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Yo(e, t)
}

function Bu() {
    Bu = function(i, a) { return new r(i, void 0, a) };
    var e = RegExp.prototype,
        t = new WeakMap;

    function r(i, a, o) { var l = new RegExp(i, a); return t.set(l, o || t.get(i)), Yo(l, r.prototype) }
    JS(r, RegExp), r.prototype.exec = function(i) { var a = e.exec.call(this, i); return a && (a.groups = n(a, this)), a }, r.prototype[Symbol.replace] = function(i, a) { if (typeof a == "string") { var o = t.get(this); return e[Symbol.replace].call(this, i, a.replace(/\$<([^>]+)>/g, function(s, u) { return "$" + o[u] })) } else if (typeof a == "function") { var l = this; return e[Symbol.replace].call(this, i, function() { var s = arguments; return typeof s[s.length - 1] != "object" && (s = [].slice.call(s), s.push(n(s, l))), a.apply(this, s) }) } else return e[Symbol.replace].call(this, i, a) };

    function n(i, a) { var o = t.get(a); return Object.keys(o).reduce(function(l, s) { return l[s] = i[o[s]], l }, Object.create(null)) }
    return Bu.apply(this, arguments)
}
var Lu = { "to-t": "to top", "to-tr": "to top right", "to-r": "to right", "to-br": "to bottom right", "to-b": "to bottom", "to-bl": "to bottom left", "to-l": "to left", "to-tl": "to top left" },
    ex = new Set(Object.values(Lu)),
    Dm = new Set(["none", "-moz-initial", "inherit", "initial", "revert", "unset"]),
    tx = function(t) { return t.trim() };

function rx(e, t) {
    var r, n;
    if (e == null || Dm.has(e)) return e;
    var i = Bu(/(^[\x2DA-Za-z]+)\(((.*))\)/g, { type: 1, values: 2 }),
        a = (r = (n = i.exec(e)) == null ? void 0 : n.groups) != null ? r : {},
        o = a.type,
        l = a.values;
    if (!o || !l) return e;
    var s = o.includes("-gradient") ? o : o + "-gradient",
        u = l.split(",").map(tx).filter(Boolean),
        c = u[0],
        p = u.slice(1);
    if ((p == null ? void 0 : p.length) === 0) return e;
    var h = c in Lu ? Lu[c] : c;
    p.unshift(h);
    var g = p.map(function(y) {
        if (ex.has(y)) return y;
        var x = y.indexOf(" "),
            R = x !== -1 ? [y.substr(0, x), y.substr(x + 1)] : [y],
            v = R[0],
            d = R[1],
            m = jm(d) ? d : d && d.split(" "),
            C = "colors." + v,
            E = C in t.__cssMap ? t.__cssMap[C].varRef : v;
        return m ? [E].concat(Array.isArray(m) ? m : [m]).join(" ") : E
    });
    return s + "(" + g.join(", ") + ")"
}
var jm = function(t) { return gc(t) && t.includes("(") && t.includes(")") },
    nx = function(t, r) { return rx(t, r != null ? r : {}) },
    ix = function(t) {
        var r = parseFloat(t.toString()),
            n = t.toString().replace(String(r), "");
        return { unitless: !n, value: r, unit: n }
    },
    Ut = function(t) { return function(r) { return t + "(" + r + ")" } },
    ee = {
        filter: function(t) { return t !== "auto" ? t : qS },
        backdropFilter: function(t) { return t !== "auto" ? t : KS },
        ring: function(t) { return GS(ee.px(t)) },
        bgClip: function(t) { return t === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: t } },
        transform: function(t) { return t === "auto" ? QS() : t === "auto-gpu" ? VS() : t },
        px: function(t) {
            if (t == null) return t;
            var r = ix(t),
                n = r.unitless;
            return n || On(t) ? t + "px" : t
        },
        fraction: function(t) { return !On(t) || t > 1 ? t : t * 100 + "%" },
        float: function(t, r) { var n = { left: "right", right: "left" }; return r.direction === "rtl" ? n[t] : t },
        degree: function(t) { if (Ep(t) || t == null) return t; var r = gc(t) && !t.endsWith("deg"); return On(t) || r ? t + "deg" : t },
        gradient: nx,
        blur: Ut("blur"),
        opacity: Ut("opacity"),
        brightness: Ut("brightness"),
        contrast: Ut("contrast"),
        dropShadow: Ut("drop-shadow"),
        grayscale: Ut("grayscale"),
        hueRotate: Ut("hue-rotate"),
        invert: Ut("invert"),
        saturate: Ut("saturate"),
        sepia: Ut("sepia"),
        bgImage: function(t) { if (t == null) return t; var r = jm(t) || Dm.has(t); return r ? t : "url(" + t + ")" },
        outline: function(t) { var r = String(t) === "0" || String(t) === "none"; return t !== null && r ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: t } },
        flexDirection: function(t) {
            var r, n = (r = YS[t]) != null ? r : {},
                i = n.space,
                a = n.divide,
                o = { flexDirection: t };
            return i && (o[i] = 1), a && (o[a] = 1), o
        }
    },
    S = { borderWidths: At("borderWidths"), borderStyles: At("borderStyles"), colors: At("colors"), borders: At("borders"), radii: At("radii", ee.px), space: At("space", ee.px), spaceT: At("space", ee.px), degreeT: function(t) { return { property: t, transform: ee.degree } }, prop: function(t, r, n) { return Ji({ property: t, scale: r }, r && { transform: ea({ scale: r, transform: n }) }) }, propT: function(t, r) { return { property: t, transform: r } }, sizes: At("sizes", ee.px), sizesT: At("sizes", ee.fraction), shadows: At("shadows"), logical: US, blur: At("blur", ee.blur) },
    yo = { background: S.colors("background"), backgroundColor: S.colors("backgroundColor"), backgroundImage: S.propT("backgroundImage", ee.bgImage), backgroundSize: !0, backgroundPosition: !0, backgroundRepeat: !0, backgroundAttachment: !0, backgroundClip: { transform: ee.bgClip }, bgSize: S.prop("backgroundSize"), bgPosition: S.prop("backgroundPosition"), bg: S.colors("background"), bgColor: S.colors("backgroundColor"), bgPos: S.prop("backgroundPosition"), bgRepeat: S.prop("backgroundRepeat"), bgAttachment: S.prop("backgroundAttachment"), bgGradient: S.propT("backgroundImage", ee.gradient), bgClip: { transform: ee.bgClip } };
Object.assign(yo, { bgImage: yo.backgroundImage, bgImg: yo.backgroundImage });
var G = { border: S.borders("border"), borderWidth: S.borderWidths("borderWidth"), borderStyle: S.borderStyles("borderStyle"), borderColor: S.colors("borderColor"), borderRadius: S.radii("borderRadius"), borderTop: S.borders("borderTop"), borderBlockStart: S.borders("borderBlockStart"), borderTopLeftRadius: S.radii("borderTopLeftRadius"), borderStartStartRadius: S.logical({ scale: "radii", property: { ltr: "borderTopLeftRadius", rtl: "borderTopRightRadius" } }), borderEndStartRadius: S.logical({ scale: "radii", property: { ltr: "borderBottomLeftRadius", rtl: "borderBottomRightRadius" } }), borderTopRightRadius: S.radii("borderTopRightRadius"), borderStartEndRadius: S.logical({ scale: "radii", property: { ltr: "borderTopRightRadius", rtl: "borderTopLeftRadius" } }), borderEndEndRadius: S.logical({ scale: "radii", property: { ltr: "borderBottomRightRadius", rtl: "borderBottomLeftRadius" } }), borderRight: S.borders("borderRight"), borderInlineEnd: S.borders("borderInlineEnd"), borderBottom: S.borders("borderBottom"), borderBlockEnd: S.borders("borderBlockEnd"), borderBottomLeftRadius: S.radii("borderBottomLeftRadius"), borderBottomRightRadius: S.radii("borderBottomRightRadius"), borderLeft: S.borders("borderLeft"), borderInlineStart: { property: "borderInlineStart", scale: "borders" }, borderInlineStartRadius: S.logical({ scale: "radii", property: { ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"], rtl: ["borderTopRightRadius", "borderBottomRightRadius"] } }), borderInlineEndRadius: S.logical({ scale: "radii", property: { ltr: ["borderTopRightRadius", "borderBottomRightRadius"], rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"] } }), borderX: S.borders(["borderLeft", "borderRight"]), borderInline: S.borders("borderInline"), borderY: S.borders(["borderTop", "borderBottom"]), borderBlock: S.borders("borderBlock"), borderTopWidth: S.borderWidths("borderTopWidth"), borderBlockStartWidth: S.borderWidths("borderBlockStartWidth"), borderTopColor: S.colors("borderTopColor"), borderBlockStartColor: S.colors("borderBlockStartColor"), borderTopStyle: S.borderStyles("borderTopStyle"), borderBlockStartStyle: S.borderStyles("borderBlockStartStyle"), borderBottomWidth: S.borderWidths("borderBottomWidth"), borderBlockEndWidth: S.borderWidths("borderBlockEndWidth"), borderBottomColor: S.colors("borderBottomColor"), borderBlockEndColor: S.colors("borderBlockEndColor"), borderBottomStyle: S.borderStyles("borderBottomStyle"), borderBlockEndStyle: S.borderStyles("borderBlockEndStyle"), borderLeftWidth: S.borderWidths("borderLeftWidth"), borderInlineStartWidth: S.borderWidths("borderInlineStartWidth"), borderLeftColor: S.colors("borderLeftColor"), borderInlineStartColor: S.colors("borderInlineStartColor"), borderLeftStyle: S.borderStyles("borderLeftStyle"), borderInlineStartStyle: S.borderStyles("borderInlineStartStyle"), borderRightWidth: S.borderWidths("borderRightWidth"), borderInlineEndWidth: S.borderWidths("borderInlineEndWidth"), borderRightColor: S.colors("borderRightColor"), borderInlineEndColor: S.colors("borderInlineEndColor"), borderRightStyle: S.borderStyles("borderRightStyle"), borderInlineEndStyle: S.borderStyles("borderInlineEndStyle"), borderTopRadius: S.radii(["borderTopLeftRadius", "borderTopRightRadius"]), borderBottomRadius: S.radii(["borderBottomLeftRadius", "borderBottomRightRadius"]), borderLeftRadius: S.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]), borderRightRadius: S.radii(["borderTopRightRadius", "borderBottomRightRadius"]) };
Object.assign(G, { rounded: G.borderRadius, roundedTop: G.borderTopRadius, roundedTopLeft: G.borderTopLeftRadius, roundedTopRight: G.borderTopRightRadius, roundedTopStart: G.borderStartStartRadius, roundedTopEnd: G.borderStartEndRadius, roundedBottom: G.borderBottomRadius, roundedBottomLeft: G.borderBottomLeftRadius, roundedBottomRight: G.borderBottomRightRadius, roundedBottomStart: G.borderEndStartRadius, roundedBottomEnd: G.borderEndEndRadius, roundedLeft: G.borderLeftRadius, roundedRight: G.borderRightRadius, roundedStart: G.borderInlineStartRadius, roundedEnd: G.borderInlineEndRadius, borderStart: G.borderInlineStart, borderEnd: G.borderInlineEnd, borderTopStartRadius: G.borderStartStartRadius, borderTopEndRadius: G.borderStartEndRadius, borderBottomStartRadius: G.borderEndStartRadius, borderBottomEndRadius: G.borderEndEndRadius, borderStartRadius: G.borderInlineStartRadius, borderEndRadius: G.borderInlineEndRadius, borderStartWidth: G.borderInlineStartWidth, borderEndWidth: G.borderInlineEndWidth, borderStartColor: G.borderInlineStartColor, borderEndColor: G.borderInlineEndColor, borderStartStyle: G.borderInlineStartStyle, borderEndStyle: G.borderInlineEndStyle });
var ax = { color: S.colors("color"), textColor: S.colors("color"), fill: S.colors("fill"), stroke: S.colors("stroke") },
    Du = { boxShadow: S.shadows("boxShadow"), mixBlendMode: !0, blendMode: S.prop("mixBlendMode"), backgroundBlendMode: !0, bgBlendMode: S.prop("backgroundBlendMode"), opacity: !0 };
Object.assign(Du, { shadow: Du.boxShadow });
var ox = { filter: { transform: ee.filter }, blur: S.blur("--chakra-blur"), brightness: S.propT("--chakra-brightness", ee.brightness), contrast: S.propT("--chakra-contrast", ee.contrast), hueRotate: S.degreeT("--chakra-hue-rotate"), invert: S.propT("--chakra-invert", ee.invert), saturate: S.propT("--chakra-saturate", ee.saturate), dropShadow: S.propT("--chakra-drop-shadow", ee.dropShadow), backdropFilter: { transform: ee.backdropFilter }, backdropBlur: S.blur("--chakra-backdrop-blur"), backdropBrightness: S.propT("--chakra-backdrop-brightness", ee.brightness), backdropContrast: S.propT("--chakra-backdrop-contrast", ee.contrast), backdropHueRotate: S.degreeT("--chakra-backdrop-hue-rotate"), backdropInvert: S.propT("--chakra-backdrop-invert", ee.invert), backdropSaturate: S.propT("--chakra-backdrop-saturate", ee.saturate) },
    Xo = { alignItems: !0, alignContent: !0, justifyItems: !0, justifyContent: !0, flexWrap: !0, flexDirection: { transform: ee.flexDirection }, experimental_spaceX: { static: XS, transform: ea({ scale: "space", transform: function(t) { return t !== null ? { "--chakra-space-x": t } : null } }) }, experimental_spaceY: { static: ZS, transform: ea({ scale: "space", transform: function(t) { return t != null ? { "--chakra-space-y": t } : null } }) }, flex: !0, flexFlow: !0, flexGrow: !0, flexShrink: !0, flexBasis: S.sizes("flexBasis"), justifySelf: !0, alignSelf: !0, order: !0, placeItems: !0, placeContent: !0, placeSelf: !0, gap: S.space("gap"), rowGap: S.space("rowGap"), columnGap: S.space("columnGap") };
Object.assign(Xo, { flexDir: Xo.flexDirection });
var Wm = { gridGap: S.space("gridGap"), gridColumnGap: S.space("gridColumnGap"), gridRowGap: S.space("gridRowGap"), gridColumn: !0, gridRow: !0, gridAutoFlow: !0, gridAutoColumns: !0, gridColumnStart: !0, gridColumnEnd: !0, gridRowStart: !0, gridRowEnd: !0, gridAutoRows: !0, gridTemplate: !0, gridTemplateColumns: !0, gridTemplateRows: !0, gridTemplateAreas: !0, gridArea: !0 },
    lx = { appearance: !0, cursor: !0, resize: !0, userSelect: !0, pointerEvents: !0, outline: { transform: ee.outline }, outlineOffset: !0, outlineColor: S.colors("outlineColor") },
    St = { width: S.sizesT("width"), inlineSize: S.sizesT("inlineSize"), height: S.sizes("height"), blockSize: S.sizes("blockSize"), boxSize: S.sizes(["width", "height"]), minWidth: S.sizes("minWidth"), minInlineSize: S.sizes("minInlineSize"), minHeight: S.sizes("minHeight"), minBlockSize: S.sizes("minBlockSize"), maxWidth: S.sizes("maxWidth"), maxInlineSize: S.sizes("maxInlineSize"), maxHeight: S.sizes("maxHeight"), maxBlockSize: S.sizes("maxBlockSize"), d: S.prop("display"), overflow: !0, overflowX: !0, overflowY: !0, overscrollBehavior: !0, overscrollBehaviorX: !0, overscrollBehaviorY: !0, display: !0, verticalAlign: !0, boxSizing: !0, boxDecorationBreak: !0, float: S.propT("float", ee.float), objectFit: !0, objectPosition: !0, visibility: !0, isolation: !0 };
Object.assign(St, { w: St.width, h: St.height, minW: St.minWidth, maxW: St.maxWidth, minH: St.minHeight, maxH: St.maxHeight, overscroll: St.overscrollBehavior, overscrollX: St.overscrollBehaviorX, overscrollY: St.overscrollBehaviorY });
var sx = { listStyleType: !0, listStylePosition: !0, listStylePos: S.prop("listStylePosition"), listStyleImage: !0, listStyleImg: S.prop("listStyleImage") },
    ux = { border: "0px", clip: "rect(0, 0, 0, 0)", width: "1px", height: "1px", margin: "-1px", padding: "0px", overflow: "hidden", whiteSpace: "nowrap", position: "absolute" },
    cx = { position: "static", width: "auto", height: "auto", clip: "auto", padding: "0", margin: "0", overflow: "visible", whiteSpace: "normal" },
    Ts = function(t, r, n) {
        var i = {},
            a = wl(t, r, {});
        for (var o in a) {
            var l = o in n && n[o] != null;
            l || (i[o] = a[o])
        }
        return i
    },
    dx = { srOnly: { transform: function(t) { return t === !0 ? ux : t === "focusable" ? cx : {} } }, layerStyle: { processResult: !0, transform: function(t, r, n) { return Ts(r, "layerStyles." + t, n) } }, textStyle: { processResult: !0, transform: function(t, r, n) { return Ts(r, "textStyles." + t, n) } }, apply: { processResult: !0, transform: function(t, r, n) { return Ts(r, t, n) } } },
    Ei = { position: !0, pos: S.prop("position"), zIndex: S.prop("zIndex", "zIndices"), inset: S.spaceT("inset"), insetX: S.spaceT(["left", "right"]), insetInline: S.spaceT("insetInline"), insetY: S.spaceT(["top", "bottom"]), insetBlock: S.spaceT("insetBlock"), top: S.spaceT("top"), insetBlockStart: S.spaceT("insetBlockStart"), bottom: S.spaceT("bottom"), insetBlockEnd: S.spaceT("insetBlockEnd"), left: S.spaceT("left"), insetInlineStart: S.logical({ scale: "space", property: { ltr: "left", rtl: "right" } }), right: S.spaceT("right"), insetInlineEnd: S.logical({ scale: "space", property: { ltr: "right", rtl: "left" } }) };
Object.assign(Ei, { insetStart: Ei.insetInlineStart, insetEnd: Ei.insetInlineEnd });
var fx = { ring: { transform: ee.ring }, ringColor: S.colors("--chakra-ring-color"), ringOffset: S.prop("--chakra-ring-offset-width"), ringOffsetColor: S.colors("--chakra-ring-offset-color"), ringInset: S.prop("--chakra-ring-inset") },
    ue = { margin: S.spaceT("margin"), marginTop: S.spaceT("marginTop"), marginBlockStart: S.spaceT("marginBlockStart"), marginRight: S.spaceT("marginRight"), marginInlineEnd: S.spaceT("marginInlineEnd"), marginBottom: S.spaceT("marginBottom"), marginBlockEnd: S.spaceT("marginBlockEnd"), marginLeft: S.spaceT("marginLeft"), marginInlineStart: S.spaceT("marginInlineStart"), marginX: S.spaceT(["marginInlineStart", "marginInlineEnd"]), marginInline: S.spaceT("marginInline"), marginY: S.spaceT(["marginTop", "marginBottom"]), marginBlock: S.spaceT("marginBlock"), padding: S.space("padding"), paddingTop: S.space("paddingTop"), paddingBlockStart: S.space("paddingBlockStart"), paddingRight: S.space("paddingRight"), paddingBottom: S.space("paddingBottom"), paddingBlockEnd: S.space("paddingBlockEnd"), paddingLeft: S.space("paddingLeft"), paddingInlineStart: S.space("paddingInlineStart"), paddingInlineEnd: S.space("paddingInlineEnd"), paddingX: S.space(["paddingInlineStart", "paddingInlineEnd"]), paddingInline: S.space("paddingInline"), paddingY: S.space(["paddingTop", "paddingBottom"]), paddingBlock: S.space("paddingBlock") };
Object.assign(ue, { m: ue.margin, mt: ue.marginTop, mr: ue.marginRight, me: ue.marginInlineEnd, marginEnd: ue.marginInlineEnd, mb: ue.marginBottom, ml: ue.marginLeft, ms: ue.marginInlineStart, marginStart: ue.marginInlineStart, mx: ue.marginX, my: ue.marginY, p: ue.padding, pt: ue.paddingTop, py: ue.paddingY, px: ue.paddingX, pb: ue.paddingBottom, pl: ue.paddingLeft, ps: ue.paddingInlineStart, paddingStart: ue.paddingInlineStart, pr: ue.paddingRight, pe: ue.paddingInlineEnd, paddingEnd: ue.paddingInlineEnd });
var hx = { textDecorationColor: S.colors("textDecorationColor"), textDecoration: !0, textDecor: { property: "textDecoration" }, textDecorationLine: !0, textDecorationStyle: !0, textDecorationThickness: !0, textUnderlineOffset: !0, textShadow: S.shadows("textShadow") },
    px = { clipPath: !0, transform: S.propT("transform", ee.transform), transformOrigin: !0, translateX: S.spaceT("--chakra-translate-x"), translateY: S.spaceT("--chakra-translate-y"), skewX: S.degreeT("--chakra-skew-x"), skewY: S.degreeT("--chakra-skew-y"), scaleX: S.prop("--chakra-scale-x"), scaleY: S.prop("--chakra-scale-y"), scale: S.prop(["--chakra-scale-x", "--chakra-scale-y"]), rotate: S.degreeT("--chakra-rotate") },
    vx = { transition: !0, transitionDelay: !0, animation: !0, willChange: !0, transitionDuration: S.prop("transitionDuration", "transition.duration"), transitionProperty: S.prop("transitionProperty", "transition.property"), transitionTimingFunction: S.prop("transitionTimingFunction", "transition.easing") },
    mx = { fontFamily: S.prop("fontFamily", "fonts"), fontSize: S.prop("fontSize", "fontSizes", ee.px), fontWeight: S.prop("fontWeight", "fontWeights"), lineHeight: S.prop("lineHeight", "lineHeights"), letterSpacing: S.prop("letterSpacing", "letterSpacings"), textAlign: !0, fontStyle: !0, wordBreak: !0, overflowWrap: !0, textOverflow: !0, textTransform: !0, whiteSpace: !0, noOfLines: { static: { overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: "var(--chakra-line-clamp)" }, property: "--chakra-line-clamp" }, isTruncated: { transform: function(t) { if (t === !0) return { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } } } },
    gx = { scrollBehavior: !0, scrollSnapAlign: !0, scrollSnapStop: !0, scrollSnapType: !0, scrollMargin: S.spaceT("scrollMargin"), scrollMarginTop: S.spaceT("scrollMarginTop"), scrollMarginBottom: S.spaceT("scrollMarginBottom"), scrollMarginLeft: S.spaceT("scrollMarginLeft"), scrollMarginRight: S.spaceT("scrollMarginRight"), scrollMarginX: S.spaceT(["scrollMarginLeft", "scrollMarginRight"]), scrollMarginY: S.spaceT(["scrollMarginTop", "scrollMarginBottom"]), scrollPadding: S.spaceT("scrollPadding"), scrollPaddingTop: S.spaceT("scrollPaddingTop"), scrollPaddingBottom: S.spaceT("scrollPaddingBottom"), scrollPaddingLeft: S.spaceT("scrollPaddingLeft"), scrollPaddingRight: S.spaceT("scrollPaddingRight"), scrollPaddingX: S.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]), scrollPaddingY: S.spaceT(["scrollPaddingTop", "scrollPaddingBottom"]) };

function gh(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function yx(e, t) { if (!!e) { if (typeof e == "string") return gh(e, t); var r = Object.prototype.toString.call(e).slice(8, -1); if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e); if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return gh(e, t) } }

function bx(e, t) { var r = typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"]; if (r) return (r = r.call(e)).next.bind(r); if (Array.isArray(e) || (r = yx(e)) || t && e && typeof e.length == "number") { r && (e = r); var n = 0; return function() { return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] } } } throw new TypeError(`Invalid attempt to iterate non-iterable instance. In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`) }
var Me = { hover: function(t, r) { return t + ":hover " + r + ", " + t + "[data-hover] " + r }, focus: function(t, r) { return t + ":focus " + r + ", " + t + "[data-focus] " + r }, focusVisible: function(t, r) { return t + ":focus-visible " + r }, focusWithin: function(t, r) { return t + ":focus-within " + r }, active: function(t, r) { return t + ":active " + r + ", " + t + "[data-active] " + r }, disabled: function(t, r) { return t + ":disabled " + r + ", " + t + "[data-disabled] " + r }, invalid: function(t, r) { return t + ":invalid " + r + ", " + t + "[data-invalid] " + r }, checked: function(t, r) { return t + ":checked " + r + ", " + t + "[data-checked] " + r }, indeterminate: function(t, r) { return t + ":indeterminate " + r + ", " + t + "[aria-checked=mixed] " + r + ", " + t + "[data-indeterminate] " + r }, readOnly: function(t, r) { return t + ":read-only " + r + ", " + t + "[readonly] " + r + ", " + t + "[data-read-only] " + r }, expanded: function(t, r) { return t + ":read-only " + r + ", " + t + "[aria-expanded=true] " + r + ", " + t + "[data-expanded] " + r }, placeholderShown: function(t, r) { return t + ":placeholder-shown " + r } },
    gr = function(t) { return Hm(function(r) { return t(r, "&") }, "[role=group]", "[data-group]", ".group") },
    rr = function(t) { return Hm(function(r) { return t(r, "~ &") }, "[data-peer]", ".peer") },
    Hm = function(t) { for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i]; return n.map(t).join(", ") },
    ta = { _hover: "&:hover, &[data-hover]", _active: "&:active, &[data-active]", _focus: "&:focus, &[data-focus]", _highlighted: "&[data-highlighted]", _focusWithin: "&:focus-within", _focusVisible: "&:focus-visible", _disabled: "&[disabled], &[aria-disabled=true], &[data-disabled]", _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]", _before: "&::before", _after: "&::after", _empty: "&:empty", _expanded: "&[aria-expanded=true], &[data-expanded]", _checked: "&[aria-checked=true], &[data-checked]", _grabbed: "&[aria-grabbed=true], &[data-grabbed]", _pressed: "&[aria-pressed=true], &[data-pressed]", _invalid: "&[aria-invalid=true], &[data-invalid]", _valid: "&[data-valid], &[data-state=valid]", _loading: "&[data-loading], &[aria-busy=true]", _selected: "&[aria-selected=true], &[data-selected]", _hidden: "&[hidden], &[data-hidden]", _autofill: "&:-webkit-autofill", _even: "&:nth-of-type(even)", _odd: "&:nth-of-type(odd)", _first: "&:first-of-type", _last: "&:last-of-type", _notFirst: "&:not(:first-of-type)", _notLast: "&:not(:last-of-type)", _visited: "&:visited", _activeLink: "&[aria-current=page]", _activeStep: "&[aria-current=step]", _indeterminate: "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]", _groupHover: gr(Me.hover), _peerHover: rr(Me.hover), _groupFocus: gr(Me.focus), _peerFocus: rr(Me.focus), _groupFocusVisible: gr(Me.focusVisible), _peerFocusVisible: rr(Me.focusVisible), _groupActive: gr(Me.active), _peerActive: rr(Me.active), _groupDisabled: gr(Me.disabled), _peerDisabled: rr(Me.disabled), _groupInvalid: gr(Me.invalid), _peerInvalid: rr(Me.invalid), _groupChecked: gr(Me.checked), _peerChecked: rr(Me.checked), _groupFocusWithin: gr(Me.focusWithin), _peerFocusWithin: rr(Me.focusWithin), _peerPlaceholderShown: rr(Me.placeholderShown), _placeholder: "&::placeholder", _placeholderShown: "&:placeholder-shown", _fullScreen: "&:fullscreen", _selection: "&::selection", _rtl: "[dir=rtl] &, &[dir=rtl]", _ltr: "[dir=ltr] &, &[dir=ltr]", _mediaDark: "@media (prefers-color-scheme: dark)", _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)", _dark: ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]", _light: ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]" },
    Sx = Sc(ta),
    hd = Gt({}, yo, G, ax, Xo, St, ox, fx, lx, Wm, dx, Ei, Du, ue, gx, mx, hx, px, sx, vx);
Object.assign({}, ue, St, Xo, Wm, Ei);
var xx = [].concat(Sc(hd), Sx),
    wx = Ji({}, hd, ta),
    kx = function(t) { return t in wx },
    Cx = function(t) {
        return function(r) {
            if (!r.__breakpoints) return t;
            var n = r.__breakpoints,
                i = n.isResponsive,
                a = n.toArrayValue,
                o = n.media,
                l = {};
            for (var s in t) {
                var u = Yt(t[s], r);
                if (u != null) {
                    if (u = ft(u) && i(u) ? a(u) : u, !Array.isArray(u)) { l[s] = u; continue }
                    for (var c = u.slice(0, o.length).length, p = 0; p < c; p += 1) {
                        var h = o == null ? void 0 : o[p];
                        if (!h) { l[s] = u[p]; continue }
                        l[h] = l[h] || {}, u[p] != null && (l[h][s] = u[p])
                    }
                }
            }
            return l
        }
    },
    _x = function(t, r) { return t.startsWith("--") && gc(r) && !Ep(r) },
    Ex = function(t, r) {
        var n, i;
        if (r == null) return r;
        var a = function(p) { var h, g; return (h = t.__cssMap) == null || (g = h[p]) == null ? void 0 : g.varRef },
            o = function(p) { var h; return (h = a(p)) != null ? h : p },
            l = r.split(",").map(function(c) { return c.trim() }),
            s = l[0],
            u = l[1];
        return r = (n = (i = a(s)) != null ? i : o(u)) != null ? n : o(r), r
    };

function Px(e) {
    var t = e.configs,
        r = t === void 0 ? {} : t,
        n = e.pseudos,
        i = n === void 0 ? {} : n,
        a = e.theme,
        o = function l(s, u) {
            u === void 0 && (u = !1);
            var c = Yt(s, a),
                p = Cx(c)(a),
                h = {};
            for (var g in p) {
                var y, x, R, v, d, m = p[g],
                    C = Yt(m, a);
                g in i && (g = i[g]), _x(g, C) && (C = Ex(a, C));
                var E = r[g];
                if (E === !0 && (E = { property: g }), ft(C)) {
                    var P;
                    h[g] = (P = h[g]) != null ? P : {}, h[g] = Gt({}, h[g], l(C, !0));
                    continue
                }
                var _ = (y = (x = E) == null || x.transform == null ? void 0 : x.transform(C, a, c)) != null ? y : C;
                _ = (R = E) != null && R.processResult ? l(_, !0) : _;
                var $ = Yt((v = E) == null ? void 0 : v.property, a);
                if (!u && (d = E) != null && d.static) {
                    var M = Yt(E.static, a);
                    h = Gt({}, h, M)
                }
                if ($ && Array.isArray($)) {
                    for (var A = bx($), K; !(K = A()).done;) {
                        var X = K.value;
                        h[X] = _
                    }
                    continue
                }
                if ($) { $ === "&" && ft(_) ? h = Gt({}, h, _) : h[$] = _; continue }
                if (ft(_)) { h = Gt({}, h, _); continue }
                h[g] = _
            }
            return h
        };
    return o
}
var Um = function(t) { return function(r) { var n = Px({ theme: r, pseudos: ta, configs: hd }); return n(t) } };

function Qm(e) { return ft(e) && e.reference ? e.reference : String(e) }
var Ll = function(t) { for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i]; return n.map(Qm).join(" " + t + " ").replace(/calc/g, "") },
    yh = function() { for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n]; return "calc(" + Ll.apply(void 0, ["+"].concat(r)) + ")" },
    bh = function() { for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n]; return "calc(" + Ll.apply(void 0, ["-"].concat(r)) + ")" },
    ju = function() { for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n]; return "calc(" + Ll.apply(void 0, ["*"].concat(r)) + ")" },
    Sh = function() { for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n]; return "calc(" + Ll.apply(void 0, ["/"].concat(r)) + ")" },
    xh = function(t) { var r = Qm(t); return r != null && !Number.isNaN(parseFloat(r)) ? String(r).startsWith("-") ? String(r).slice(1) : "-" + r : ju(r, -1) },
    qr = Object.assign(function(e) { return { add: function() { for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i]; return qr(yh.apply(void 0, [e].concat(n))) }, subtract: function() { for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i]; return qr(bh.apply(void 0, [e].concat(n))) }, multiply: function() { for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i]; return qr(ju.apply(void 0, [e].concat(n))) }, divide: function() { for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i]; return qr(Sh.apply(void 0, [e].concat(n))) }, negate: function() { return qr(xh(e)) }, toString: function() { return e.toString() } } }, { add: yh, subtract: bh, multiply: ju, divide: Sh, negate: xh });

function Tx(e, t) { return t === void 0 && (t = "-"), e.replace(/\s+/g, t) }

function Vm(e) { var t = Tx(e.toString()); if (t.includes("\\.")) return e; var r = !Number.isInteger(parseFloat(e.toString())); return r ? t.replace(".", "\\.") : e }

function Rx(e, t) { return t === void 0 && (t = ""), [t, Vm(e)].filter(Boolean).join("-") }

function Ox(e, t) { return "var(" + Vm(e) + (t ? ", " + t : "") + ")" }

function $x(e, t) { return t === void 0 && (t = ""), "--" + Rx(e, t) }

function zx(e, t, r) { var n = $x(e, r); return { variable: n, reference: Ox(n, t) } }

function wh(e, t) { return zx(String(e).replace(/\./g, "-"), void 0, t) }

function Ax(e, t) {
    for (var r = {}, n = {}, i = function() {
            var u = o[a],
                c = u[0],
                p = u[1],
                h = p.isSemantic,
                g = p.value,
                y = wh(c, t == null ? void 0 : t.cssVarPrefix),
                x = y.variable,
                R = y.reference;
            if (!h) {
                if (c.startsWith("space")) {
                    var v = c.split("."),
                        d = v[0],
                        m = v.slice(1),
                        C = d + ".-" + m.join("."),
                        E = qr.negate(g),
                        P = qr.negate(R);
                    n[C] = { value: E, var: x, varRef: P }
                }
                return r[x] = g, n[c] = { value: g, var: x, varRef: R }, "continue"
            }
            var _ = function(A) {
                    var K = String(c).split(".")[0],
                        X = [K, A].join("."),
                        le = e[X];
                    if (!le) return A;
                    var Pe = wh(X, t == null ? void 0 : t.cssVarPrefix),
                        qe = Pe.reference;
                    return qe
                },
                $ = ft(g) ? g : { default: g };
            r = Gt(r, Object.entries($).reduce(function(M, A) {
                var K, X, le = A[0],
                    Pe = A[1],
                    qe = _(Pe);
                if (le === "default") return M[x] = qe, M;
                var Ae = (K = ta == null ? void 0 : ta[le]) != null ? K : le;
                return M[Ae] = (X = {}, X[x] = qe, X), M
            }, {})), n[c] = { value: R, var: x, varRef: R }
        }, a = 0, o = Object.entries(e); a < o.length; a++) var l = i();
    return { cssVars: r, cssMap: n }
}

function Fx(e, t) {
    if (e == null) return {};
    var r = {},
        n = Object.keys(e),
        i, a;
    for (a = 0; a < n.length; a++) i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
    return r
}
var Ix = ["__cssMap", "__cssVars", "__breakpoints"],
    Mx = ["colors", "borders", "borderWidths", "borderStyles", "fonts", "fontSizes", "fontWeights", "letterSpacings", "lineHeights", "radii", "space", "shadows", "sizes", "zIndices", "transition", "blur"];

function Nx(e) { var t = Mx; return e1(e, t) }

function Bx(e) { return e.semanticTokens }

function Lx(e) { e.__cssMap, e.__cssVars, e.__breakpoints; var t = Fx(e, Ix); return t }

function Dx(e) {
    var t, r, n = e.tokens,
        i = e.semanticTokens,
        a = Object.entries((t = Qs(n)) != null ? t : {}).map(function(l) {
            var s = l[0],
                u = l[1],
                c = { isSemantic: !1, value: u };
            return [s, c]
        }),
        o = Object.entries((r = Qs(i, 1)) != null ? r : {}).map(function(l) {
            var s = l[0],
                u = l[1],
                c = { isSemantic: !0, value: u };
            return [s, c]
        });
    return Co([].concat(a, o))
}

function jx(e) {
    var t, r = Lx(e),
        n = Nx(r),
        i = Bx(r),
        a = Dx({ tokens: n, semanticTokens: i }),
        o = (t = r.config) == null ? void 0 : t.cssVarPrefix,
        l = Ax(a, { cssVarPrefix: o }),
        s = l.cssMap,
        u = l.cssVars,
        c = { "--chakra-ring-inset": "var(--chakra-empty,/*!*/ /*!*/)", "--chakra-ring-offset-width": "0px", "--chakra-ring-offset-color": "#fff", "--chakra-ring-color": "rgba(66, 153, 225, 0.6)", "--chakra-ring-offset-shadow": "0 0 #0000", "--chakra-ring-shadow": "0 0 #0000", "--chakra-space-x-reverse": "0", "--chakra-space-y-reverse": "0" };
    return Object.assign(r, { __cssVars: Ji({}, c, u), __cssMap: s, __breakpoints: o1(r.breakpoints) }), r
}
var Wx = typeof Element != "undefined",
    Hx = typeof Map == "function",
    Ux = typeof Set == "function",
    Qx = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;

function bo(e, t) {
    if (e === t) return !0;
    if (e && t && typeof e == "object" && typeof t == "object") {
        if (e.constructor !== t.constructor) return !1;
        var r, n, i;
        if (Array.isArray(e)) {
            if (r = e.length, r != t.length) return !1;
            for (n = r; n-- !== 0;)
                if (!bo(e[n], t[n])) return !1;
            return !0
        }
        var a;
        if (Hx && e instanceof Map && t instanceof Map) {
            if (e.size !== t.size) return !1;
            for (a = e.entries(); !(n = a.next()).done;)
                if (!t.has(n.value[0])) return !1;
            for (a = e.entries(); !(n = a.next()).done;)
                if (!bo(n.value[1], t.get(n.value[0]))) return !1;
            return !0
        }
        if (Ux && e instanceof Set && t instanceof Set) {
            if (e.size !== t.size) return !1;
            for (a = e.entries(); !(n = a.next()).done;)
                if (!t.has(n.value[0])) return !1;
            return !0
        }
        if (Qx && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
            if (r = e.length, r != t.length) return !1;
            for (n = r; n-- !== 0;)
                if (e[n] !== t[n]) return !1;
            return !0
        }
        if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
        if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === t.valueOf();
        if (e.toString !== Object.prototype.toString) return e.toString() === t.toString();
        if (i = Object.keys(e), r = i.length, r !== Object.keys(t).length) return !1;
        for (n = r; n-- !== 0;)
            if (!Object.prototype.hasOwnProperty.call(t, i[n])) return !1;
        if (Wx && e instanceof Element) return !1;
        for (n = r; n-- !== 0;)
            if (!((i[n] === "_owner" || i[n] === "__v" || i[n] === "__o") && e.$$typeof) && !bo(e[i[n]], t[i[n]])) return !1;
        return !0
    }
    return e !== e && t !== t
}
var Vx = function(t, r) { try { return bo(t, r) } catch (n) { if ((n.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1; throw n } },
    qx = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
    Kx = pp(function(e) { return qx.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91 }),
    Gx = Kx,
    Yx = function(t) { return t !== "theme" },
    kh = function(t) { return typeof t == "string" && t.charCodeAt(0) > 96 ? Gx : Yx },
    Ch = function(t, r, n) {
        var i;
        if (r) {
            var a = r.shouldForwardProp;
            i = t.__emotion_forwardProp && a ? function(o) { return t.__emotion_forwardProp(o) && a(o) } : a
        }
        return typeof i != "function" && n && (i = t.__emotion_forwardProp), i
    },
    Xx = Bn["useInsertionEffect"] ? Bn["useInsertionEffect"] : function(t) { t() };

function Zx(e) { Xx(e) }
var Jx = function(t) {
        var r = t.cache,
            n = t.serialized,
            i = t.isStringTag;
        return bp(r, n, i), Zx(function() { return Sp(r, n, i) }), null
    },
    ew = function e(t, r) {
        var n = t.__emotion_real === t,
            i = n && t.__emotion_base || t,
            a, o;
        r !== void 0 && (a = r.label, o = r.target);
        var l = Ch(t, r, n),
            s = l || kh(i),
            u = !s("as");
        return function() {
            var c = arguments,
                p = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
            if (a !== void 0 && p.push("label:" + a + ";"), c[0] == null || c[0].raw === void 0) p.push.apply(p, c);
            else { p.push(c[0][0]); for (var h = c.length, g = 1; g < h; g++) p.push(c[g], c[0][g]) }
            var y = kp(function(x, R, v) {
                var d = u && x.as || i,
                    m = "",
                    C = [],
                    E = x;
                if (x.theme == null) {
                    E = {};
                    for (var P in x) E[P] = x[P];
                    E.theme = w.exports.useContext(Fi)
                }
                typeof x.className == "string" ? m = Ly(R.registered, C, x.className) : x.className != null && (m = x.className + " ");
                var _ = pc(p.concat(C), R.registered, E);
                m += R.key + "-" + _.name, o !== void 0 && (m += " " + o);
                var $ = u && l === void 0 ? kh(d) : s,
                    M = {};
                for (var A in x) u && A === "as" || $(A) && (M[A] = x[A]);
                return M.className = m, M.ref = v, w.exports.createElement(w.exports.Fragment, null, w.exports.createElement(Jx, { cache: R, serialized: _, isStringTag: typeof d == "string" }), w.exports.createElement(d, M))
            });
            return y.displayName = a !== void 0 ? a : "Styled(" + (typeof i == "string" ? i : i.displayName || i.name || "Component") + ")", y.defaultProps = t.defaultProps, y.__emotion_real = y, y.__emotion_base = i, y.__emotion_styles = p, y.__emotion_forwardProp = l, Object.defineProperty(y, "toString", { value: function() { return "." + o } }), y.withComponent = function(x, R) { return e(x, Q({}, r, R, { shouldForwardProp: Ch(y, R, !0) })).apply(void 0, p) }, y
        }
    },
    tw = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"],
    Wu = ew.bind();
tw.forEach(function(e) { Wu[e] = Wu(e) });

function Hu() { return Hu = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e }, Hu.apply(this, arguments) }
var rw = function(t) {
        var r = t.cssVarsRoot,
            n = t.theme,
            i = t.children,
            a = w.exports.useMemo(function() { return jx(n) }, [n]);
        return w.exports.createElement(qy, { theme: a }, w.exports.createElement(nw, { root: r }), i)
    },
    nw = function(t) {
        var r = t.root,
            n = r === void 0 ? ":host, :root" : r,
            i = [n, "[data-theme]"].join(",");
        return w.exports.createElement(vc, { styles: function(o) { var l; return l = {}, l[i] = o.__cssVars, l } })
    };

function iw() { var e = w.exports.useContext(Fi); if (!e) throw Error("useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"); return e }
aa({ name: "StylesContext", errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` " });
var aw = function() {
    var t = Nm(),
        r = t.colorMode;
    return w.exports.createElement(vc, {
        styles: function(i) {
            var a = wl(i, "styles.global"),
                o = Yt(a, { theme: i, colorMode: r });
            if (!!o) { var l = Um(o)(i); return l }
        }
    })
};

function Rt(e) { return yc(e, ["styleConfig", "size", "variant", "colorScheme"]) }

function ow() {
    var e = Nm(),
        t = iw();
    return Hu({}, e, { theme: t })
}

function pd(e, t) {
    if (e == null) return {};
    var r = {},
        n = Object.keys(e),
        i, a;
    for (a = 0; a < n.length; a++) i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
    return r
}
var lw = new Set([].concat(xx, ["textStyle", "layerStyle", "apply", "isTruncated", "noOfLines", "focusBorderColor", "errorBorderColor", "as", "__css", "css", "sx"])),
    sw = new Set(["htmlWidth", "htmlHeight", "htmlSize"]),
    uw = function(t) { return sw.has(t) || !lw.has(t) },
    cw = ["theme", "css", "__css", "sx"],
    dw = ["baseStyle"],
    fw = function(t) {
        var r = t.baseStyle;
        return function(n) {
            n.theme;
            var i = n.css,
                a = n.__css,
                o = n.sx,
                l = pd(n, cw),
                s = Pp(l, function(h, g) { return kx(g) }),
                u = Yt(r, n),
                c = Object.assign({}, a, u, bc(s), o),
                p = Um(c)(n.theme);
            return i ? [p, i] : p
        }
    };

function Rs(e, t) {
    var r = t != null ? t : {},
        n = r.baseStyle,
        i = pd(r, dw);
    i.shouldForwardProp || (i.shouldForwardProp = uw);
    var a = fw({ baseStyle: n });
    return Wu(e, i)(a)
}

function q(e) { return w.exports.forwardRef(e) }
var hw = ["styleConfig"];

function Ot(e, t, r) {
    var n;
    t === void 0 && (t = {}), r === void 0 && (r = {});
    var i = t,
        a = i.styleConfig,
        o = pd(i, hw),
        l = ow(),
        s = l.theme,
        u = l.colorMode,
        c = wl(s, "components." + e),
        p = a || c,
        h = Gt({ theme: s, colorMode: u }, (n = p == null ? void 0 : p.defaultProps) != null ? n : {}, bc(yc(o, ["children"]))),
        g = w.exports.useRef({});
    if (p) {
        var y, x, R, v, d, m, C = Yt((y = p.baseStyle) != null ? y : {}, h),
            E = Yt((x = (R = p.variants) == null ? void 0 : R[h.variant]) != null ? x : {}, h),
            P = Yt((v = (d = p.sizes) == null ? void 0 : d[h.size]) != null ? v : {}, h),
            _ = Gt({}, C, P, E);
        (m = r) != null && m.isMultiPart && p.parts && p.parts.forEach(function(M) {
            var A;
            _[M] = (A = _[M]) != null ? A : {}
        });
        var $ = Vx(g.current, _);
        $ || (g.current = _)
    }
    return g.current
}

function pw(e, t) { return Ot(e, t, { isMultiPart: !0 }) }

function vw() { var e = new Map; return new Proxy(Rs, { apply: function(r, n, i) { return Rs.apply(void 0, i) }, get: function(r, n) { return e.has(n) || e.set(n, Rs(n)), e.get(n) } }) }
var L = vw(),
    mw = function(t) {
        var r = t.children,
            n = t.colorModeManager,
            i = t.portalZIndex,
            a = t.resetCSS,
            o = a === void 0 ? !0 : a,
            l = t.theme,
            s = l === void 0 ? {} : l,
            u = t.environment,
            c = t.cssVarsRoot,
            p = w.exports.createElement(FS, { environment: u }, r);
        return w.exports.createElement(p1, null, w.exports.createElement(rw, { theme: s, cssVarsRoot: c }, w.exports.createElement(WS, { colorModeManager: n, options: s.config }, o && w.exports.createElement(Yy, null), w.exports.createElement(aw, null), i ? w.exports.createElement(wS, { zIndex: i }, p) : p)))
    },
    qm = { px: "1px", .5: "0.125rem", 1: "0.25rem", 1.5: "0.375rem", 2: "0.5rem", 2.5: "0.625rem", 3: "0.75rem", 3.5: "0.875rem", 4: "1rem", 5: "1.25rem", 6: "1.5rem", 7: "1.75rem", 8: "2rem", 9: "2.25rem", 10: "2.5rem", 12: "3rem", 14: "3.5rem", 16: "4rem", 20: "5rem", 24: "6rem", 28: "7rem", 32: "8rem", 36: "9rem", 40: "10rem", 44: "11rem", 48: "12rem", 52: "13rem", 56: "14rem", 60: "15rem", 64: "16rem", 72: "18rem", 80: "20rem", 96: "24rem" };

function ke() { return ke = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e }, ke.apply(this, arguments) }
var gw = { max: "max-content", min: "min-content", full: "100%", "3xs": "14rem", "2xs": "16rem", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem", "8xl": "90rem" },
    yw = { sm: "640px", md: "768px", lg: "1024px", xl: "1280px" },
    Km = ke({}, qm, gw, { container: yw });

function Le(e, t) { bw(e) && (e = "100%"); var r = Sw(e); return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), r && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e) }

function Qa(e) { return Math.min(1, Math.max(0, e)) }

function bw(e) { return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1 }

function Sw(e) { return typeof e == "string" && e.indexOf("%") !== -1 }

function Gm(e) { return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e }

function Va(e) { return e <= 1 ? "".concat(Number(e) * 100, "%") : e }

function Xr(e) { return e.length === 1 ? "0" + e : String(e) }

function xw(e, t, r) { return { r: Le(e, 255) * 255, g: Le(t, 255) * 255, b: Le(r, 255) * 255 } }

function _h(e, t, r) {
    e = Le(e, 255), t = Le(t, 255), r = Le(r, 255);
    var n = Math.max(e, t, r),
        i = Math.min(e, t, r),
        a = 0,
        o = 0,
        l = (n + i) / 2;
    if (n === i) o = 0, a = 0;
    else {
        var s = n - i;
        switch (o = l > .5 ? s / (2 - n - i) : s / (n + i), n) {
            case e:
                a = (t - r) / s + (t < r ? 6 : 0);
                break;
            case t:
                a = (r - e) / s + 2;
                break;
            case r:
                a = (e - t) / s + 4;
                break
        }
        a /= 6
    }
    return { h: a, s: o, l }
}

function Os(e, t, r) { return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * (6 * r) : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e }

function ww(e, t, r) {
    var n, i, a;
    if (e = Le(e, 360), t = Le(t, 100), r = Le(r, 100), t === 0) i = r, a = r, n = r;
    else {
        var o = r < .5 ? r * (1 + t) : r + t - r * t,
            l = 2 * r - o;
        n = Os(l, o, e + 1 / 3), i = Os(l, o, e), a = Os(l, o, e - 1 / 3)
    }
    return { r: n * 255, g: i * 255, b: a * 255 }
}

function Eh(e, t, r) {
    e = Le(e, 255), t = Le(t, 255), r = Le(r, 255);
    var n = Math.max(e, t, r),
        i = Math.min(e, t, r),
        a = 0,
        o = n,
        l = n - i,
        s = n === 0 ? 0 : l / n;
    if (n === i) a = 0;
    else {
        switch (n) {
            case e:
                a = (t - r) / l + (t < r ? 6 : 0);
                break;
            case t:
                a = (r - e) / l + 2;
                break;
            case r:
                a = (e - t) / l + 4;
                break
        }
        a /= 6
    }
    return { h: a, s, v: o }
}

function kw(e, t, r) {
    e = Le(e, 360) * 6, t = Le(t, 100), r = Le(r, 100);
    var n = Math.floor(e),
        i = e - n,
        a = r * (1 - t),
        o = r * (1 - i * t),
        l = r * (1 - (1 - i) * t),
        s = n % 6,
        u = [r, o, a, a, l, r][s],
        c = [l, r, r, o, a, a][s],
        p = [a, a, l, r, r, o][s];
    return { r: u * 255, g: c * 255, b: p * 255 }
}

function Ph(e, t, r, n) { var i = [Xr(Math.round(e).toString(16)), Xr(Math.round(t).toString(16)), Xr(Math.round(r).toString(16))]; return n && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("") }

function Cw(e, t, r, n, i) { var a = [Xr(Math.round(e).toString(16)), Xr(Math.round(t).toString(16)), Xr(Math.round(r).toString(16)), Xr(_w(n))]; return i && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) && a[3].startsWith(a[3].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("") }

function _w(e) { return Math.round(parseFloat(e) * 255).toString(16) }

function Th(e) { return ut(e) / 255 }

function ut(e) { return parseInt(e, 16) }

function Ew(e) { return { r: e >> 16, g: (e & 65280) >> 8, b: e & 255 } }
var Uu = { aliceblue: "#f0f8ff", antiquewhite: "#faebd7", aqua: "#00ffff", aquamarine: "#7fffd4", azure: "#f0ffff", beige: "#f5f5dc", bisque: "#ffe4c4", black: "#000000", blanchedalmond: "#ffebcd", blue: "#0000ff", blueviolet: "#8a2be2", brown: "#a52a2a", burlywood: "#deb887", cadetblue: "#5f9ea0", chartreuse: "#7fff00", chocolate: "#d2691e", coral: "#ff7f50", cornflowerblue: "#6495ed", cornsilk: "#fff8dc", crimson: "#dc143c", cyan: "#00ffff", darkblue: "#00008b", darkcyan: "#008b8b", darkgoldenrod: "#b8860b", darkgray: "#a9a9a9", darkgreen: "#006400", darkgrey: "#a9a9a9", darkkhaki: "#bdb76b", darkmagenta: "#8b008b", darkolivegreen: "#556b2f", darkorange: "#ff8c00", darkorchid: "#9932cc", darkred: "#8b0000", darksalmon: "#e9967a", darkseagreen: "#8fbc8f", darkslateblue: "#483d8b", darkslategray: "#2f4f4f", darkslategrey: "#2f4f4f", darkturquoise: "#00ced1", darkviolet: "#9400d3", deeppink: "#ff1493", deepskyblue: "#00bfff", dimgray: "#696969", dimgrey: "#696969", dodgerblue: "#1e90ff", firebrick: "#b22222", floralwhite: "#fffaf0", forestgreen: "#228b22", fuchsia: "#ff00ff", gainsboro: "#dcdcdc", ghostwhite: "#f8f8ff", goldenrod: "#daa520", gold: "#ffd700", gray: "#808080", green: "#008000", greenyellow: "#adff2f", grey: "#808080", honeydew: "#f0fff0", hotpink: "#ff69b4", indianred: "#cd5c5c", indigo: "#4b0082", ivory: "#fffff0", khaki: "#f0e68c", lavenderblush: "#fff0f5", lavender: "#e6e6fa", lawngreen: "#7cfc00", lemonchiffon: "#fffacd", lightblue: "#add8e6", lightcoral: "#f08080", lightcyan: "#e0ffff", lightgoldenrodyellow: "#fafad2", lightgray: "#d3d3d3", lightgreen: "#90ee90", lightgrey: "#d3d3d3", lightpink: "#ffb6c1", lightsalmon: "#ffa07a", lightseagreen: "#20b2aa", lightskyblue: "#87cefa", lightslategray: "#778899", lightslategrey: "#778899", lightsteelblue: "#b0c4de", lightyellow: "#ffffe0", lime: "#00ff00", limegreen: "#32cd32", linen: "#faf0e6", magenta: "#ff00ff", maroon: "#800000", mediumaquamarine: "#66cdaa", mediumblue: "#0000cd", mediumorchid: "#ba55d3", mediumpurple: "#9370db", mediumseagreen: "#3cb371", mediumslateblue: "#7b68ee", mediumspringgreen: "#00fa9a", mediumturquoise: "#48d1cc", mediumvioletred: "#c71585", midnightblue: "#191970", mintcream: "#f5fffa", mistyrose: "#ffe4e1", moccasin: "#ffe4b5", navajowhite: "#ffdead", navy: "#000080", oldlace: "#fdf5e6", olive: "#808000", olivedrab: "#6b8e23", orange: "#ffa500", orangered: "#ff4500", orchid: "#da70d6", palegoldenrod: "#eee8aa", palegreen: "#98fb98", paleturquoise: "#afeeee", palevioletred: "#db7093", papayawhip: "#ffefd5", peachpuff: "#ffdab9", peru: "#cd853f", pink: "#ffc0cb", plum: "#dda0dd", powderblue: "#b0e0e6", purple: "#800080", rebeccapurple: "#663399", red: "#ff0000", rosybrown: "#bc8f8f", royalblue: "#4169e1", saddlebrown: "#8b4513", salmon: "#fa8072", sandybrown: "#f4a460", seagreen: "#2e8b57", seashell: "#fff5ee", sienna: "#a0522d", silver: "#c0c0c0", skyblue: "#87ceeb", slateblue: "#6a5acd", slategray: "#708090", slategrey: "#708090", snow: "#fffafa", springgreen: "#00ff7f", steelblue: "#4682b4", tan: "#d2b48c", teal: "#008080", thistle: "#d8bfd8", tomato: "#ff6347", turquoise: "#40e0d0", violet: "#ee82ee", wheat: "#f5deb3", white: "#ffffff", whitesmoke: "#f5f5f5", yellow: "#ffff00", yellowgreen: "#9acd32" };

function Pw(e) {
    var t = { r: 0, g: 0, b: 0 },
        r = 1,
        n = null,
        i = null,
        a = null,
        o = !1,
        l = !1;
    return typeof e == "string" && (e = Ow(e)), typeof e == "object" && (nr(e.r) && nr(e.g) && nr(e.b) ? (t = xw(e.r, e.g, e.b), o = !0, l = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : nr(e.h) && nr(e.s) && nr(e.v) ? (n = Va(e.s), i = Va(e.v), t = kw(e.h, n, i), o = !0, l = "hsv") : nr(e.h) && nr(e.s) && nr(e.l) && (n = Va(e.s), a = Va(e.l), t = ww(e.h, n, a), o = !0, l = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (r = e.a)), r = Gm(r), { ok: o, format: e.format || l, r: Math.min(255, Math.max(t.r, 0)), g: Math.min(255, Math.max(t.g, 0)), b: Math.min(255, Math.max(t.b, 0)), a: r }
}
var Tw = "[-\\+]?\\d+%?",
    Rw = "[-\\+]?\\d*\\.\\d+%?",
    Pr = "(?:".concat(Rw, ")|(?:").concat(Tw, ")"),
    $s = "[\\s|\\(]+(".concat(Pr, ")[,|\\s]+(").concat(Pr, ")[,|\\s]+(").concat(Pr, ")\\s*\\)?"),
    zs = "[\\s|\\(]+(".concat(Pr, ")[,|\\s]+(").concat(Pr, ")[,|\\s]+(").concat(Pr, ")[,|\\s]+(").concat(Pr, ")\\s*\\)?"),
    It = { CSS_UNIT: new RegExp(Pr), rgb: new RegExp("rgb" + $s), rgba: new RegExp("rgba" + zs), hsl: new RegExp("hsl" + $s), hsla: new RegExp("hsla" + zs), hsv: new RegExp("hsv" + $s), hsva: new RegExp("hsva" + zs), hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/, hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/ };

function Ow(e) {
    if (e = e.trim().toLowerCase(), e.length === 0) return !1;
    var t = !1;
    if (Uu[e]) e = Uu[e], t = !0;
    else if (e === "transparent") return { r: 0, g: 0, b: 0, a: 0, format: "name" };
    var r = It.rgb.exec(e);
    return r ? { r: r[1], g: r[2], b: r[3] } : (r = It.rgba.exec(e), r ? { r: r[1], g: r[2], b: r[3], a: r[4] } : (r = It.hsl.exec(e), r ? { h: r[1], s: r[2], l: r[3] } : (r = It.hsla.exec(e), r ? { h: r[1], s: r[2], l: r[3], a: r[4] } : (r = It.hsv.exec(e), r ? { h: r[1], s: r[2], v: r[3] } : (r = It.hsva.exec(e), r ? { h: r[1], s: r[2], v: r[3], a: r[4] } : (r = It.hex8.exec(e), r ? { r: ut(r[1]), g: ut(r[2]), b: ut(r[3]), a: Th(r[4]), format: t ? "name" : "hex8" } : (r = It.hex6.exec(e), r ? { r: ut(r[1]), g: ut(r[2]), b: ut(r[3]), format: t ? "name" : "hex" } : (r = It.hex4.exec(e), r ? { r: ut(r[1] + r[1]), g: ut(r[2] + r[2]), b: ut(r[3] + r[3]), a: Th(r[4] + r[4]), format: t ? "name" : "hex8" } : (r = It.hex3.exec(e), r ? { r: ut(r[1] + r[1]), g: ut(r[2] + r[2]), b: ut(r[3] + r[3]), format: t ? "name" : "hex" } : !1)))))))))
}

function nr(e) { return Boolean(It.CSS_UNIT.exec(String(e))) }
var ca = function() {
    function e(t, r) {
        t === void 0 && (t = ""), r === void 0 && (r = {});
        var n;
        if (t instanceof e) return t;
        typeof t == "number" && (t = Ew(t)), this.originalInput = t;
        var i = Pw(t);
        this.originalInput = t, this.r = i.r, this.g = i.g, this.b = i.b, this.a = i.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (n = r.format) !== null && n !== void 0 ? n : i.format, this.gradientType = r.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = i.ok
    }
    return e.prototype.isDark = function() { return this.getBrightness() < 128 }, e.prototype.isLight = function() { return !this.isDark() }, e.prototype.getBrightness = function() { var t = this.toRgb(); return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3 }, e.prototype.getLuminance = function() {
        var t = this.toRgb(),
            r, n, i, a = t.r / 255,
            o = t.g / 255,
            l = t.b / 255;
        return a <= .03928 ? r = a / 12.92 : r = Math.pow((a + .055) / 1.055, 2.4), o <= .03928 ? n = o / 12.92 : n = Math.pow((o + .055) / 1.055, 2.4), l <= .03928 ? i = l / 12.92 : i = Math.pow((l + .055) / 1.055, 2.4), .2126 * r + .7152 * n + .0722 * i
    }, e.prototype.getAlpha = function() { return this.a }, e.prototype.setAlpha = function(t) { return this.a = Gm(t), this.roundA = Math.round(100 * this.a) / 100, this }, e.prototype.toHsv = function() { var t = Eh(this.r, this.g, this.b); return { h: t.h * 360, s: t.s, v: t.v, a: this.a } }, e.prototype.toHsvString = function() {
        var t = Eh(this.r, this.g, this.b),
            r = Math.round(t.h * 360),
            n = Math.round(t.s * 100),
            i = Math.round(t.v * 100);
        return this.a === 1 ? "hsv(".concat(r, ", ").concat(n, "%, ").concat(i, "%)") : "hsva(".concat(r, ", ").concat(n, "%, ").concat(i, "%, ").concat(this.roundA, ")")
    }, e.prototype.toHsl = function() { var t = _h(this.r, this.g, this.b); return { h: t.h * 360, s: t.s, l: t.l, a: this.a } }, e.prototype.toHslString = function() {
        var t = _h(this.r, this.g, this.b),
            r = Math.round(t.h * 360),
            n = Math.round(t.s * 100),
            i = Math.round(t.l * 100);
        return this.a === 1 ? "hsl(".concat(r, ", ").concat(n, "%, ").concat(i, "%)") : "hsla(".concat(r, ", ").concat(n, "%, ").concat(i, "%, ").concat(this.roundA, ")")
    }, e.prototype.toHex = function(t) { return t === void 0 && (t = !1), Ph(this.r, this.g, this.b, t) }, e.prototype.toHexString = function(t) { return t === void 0 && (t = !1), "#" + this.toHex(t) }, e.prototype.toHex8 = function(t) { return t === void 0 && (t = !1), Cw(this.r, this.g, this.b, this.a, t) }, e.prototype.toHex8String = function(t) { return t === void 0 && (t = !1), "#" + this.toHex8(t) }, e.prototype.toRgb = function() { return { r: Math.round(this.r), g: Math.round(this.g), b: Math.round(this.b), a: this.a } }, e.prototype.toRgbString = function() {
        var t = Math.round(this.r),
            r = Math.round(this.g),
            n = Math.round(this.b);
        return this.a === 1 ? "rgb(".concat(t, ", ").concat(r, ", ").concat(n, ")") : "rgba(".concat(t, ", ").concat(r, ", ").concat(n, ", ").concat(this.roundA, ")")
    }, e.prototype.toPercentageRgb = function() { var t = function(r) { return "".concat(Math.round(Le(r, 255) * 100), "%") }; return { r: t(this.r), g: t(this.g), b: t(this.b), a: this.a } }, e.prototype.toPercentageRgbString = function() { var t = function(r) { return Math.round(Le(r, 255) * 100) }; return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")") }, e.prototype.toName = function() {
        if (this.a === 0) return "transparent";
        if (this.a < 1) return !1;
        for (var t = "#" + Ph(this.r, this.g, this.b, !1), r = 0, n = Object.entries(Uu); r < n.length; r++) {
            var i = n[r],
                a = i[0],
                o = i[1];
            if (t === o) return a
        }
        return !1
    }, e.prototype.toString = function(t) {
        var r = Boolean(t);
        t = t != null ? t : this.format;
        var n = !1,
            i = this.a < 1 && this.a >= 0,
            a = !r && i && (t.startsWith("hex") || t === "name");
        return a ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (n = this.toRgbString()), t === "prgb" && (n = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (n = this.toHexString()), t === "hex3" && (n = this.toHexString(!0)), t === "hex4" && (n = this.toHex8String(!0)), t === "hex8" && (n = this.toHex8String()), t === "name" && (n = this.toName()), t === "hsl" && (n = this.toHslString()), t === "hsv" && (n = this.toHsvString()), n || this.toHexString())
    }, e.prototype.toNumber = function() { return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b) }, e.prototype.clone = function() { return new e(this.toString()) }, e.prototype.lighten = function(t) { t === void 0 && (t = 10); var r = this.toHsl(); return r.l += t / 100, r.l = Qa(r.l), new e(r) }, e.prototype.brighten = function(t) { t === void 0 && (t = 10); var r = this.toRgb(); return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(t / 100)))), r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(t / 100)))), r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(t / 100)))), new e(r) }, e.prototype.darken = function(t) { t === void 0 && (t = 10); var r = this.toHsl(); return r.l -= t / 100, r.l = Qa(r.l), new e(r) }, e.prototype.tint = function(t) { return t === void 0 && (t = 10), this.mix("white", t) }, e.prototype.shade = function(t) { return t === void 0 && (t = 10), this.mix("black", t) }, e.prototype.desaturate = function(t) { t === void 0 && (t = 10); var r = this.toHsl(); return r.s -= t / 100, r.s = Qa(r.s), new e(r) }, e.prototype.saturate = function(t) { t === void 0 && (t = 10); var r = this.toHsl(); return r.s += t / 100, r.s = Qa(r.s), new e(r) }, e.prototype.greyscale = function() { return this.desaturate(100) }, e.prototype.spin = function(t) {
        var r = this.toHsl(),
            n = (r.h + t) % 360;
        return r.h = n < 0 ? 360 + n : n, new e(r)
    }, e.prototype.mix = function(t, r) {
        r === void 0 && (r = 50);
        var n = this.toRgb(),
            i = new e(t).toRgb(),
            a = r / 100,
            o = { r: (i.r - n.r) * a + n.r, g: (i.g - n.g) * a + n.g, b: (i.b - n.b) * a + n.b, a: (i.a - n.a) * a + n.a };
        return new e(o)
    }, e.prototype.analogous = function(t, r) {
        t === void 0 && (t = 6), r === void 0 && (r = 30);
        var n = this.toHsl(),
            i = 360 / r,
            a = [this];
        for (n.h = (n.h - (i * t >> 1) + 720) % 360; --t;) n.h = (n.h + i) % 360, a.push(new e(n));
        return a
    }, e.prototype.complement = function() { var t = this.toHsl(); return t.h = (t.h + 180) % 360, new e(t) }, e.prototype.monochromatic = function(t) { t === void 0 && (t = 6); for (var r = this.toHsv(), n = r.h, i = r.s, a = r.v, o = [], l = 1 / t; t--;) o.push(new e({ h: n, s: i, v: a })), a = (a + l) % 1; return o }, e.prototype.splitcomplement = function() {
        var t = this.toHsl(),
            r = t.h;
        return [this, new e({ h: (r + 72) % 360, s: t.s, l: t.l }), new e({ h: (r + 216) % 360, s: t.s, l: t.l })]
    }, e.prototype.onBackground = function(t) {
        var r = this.toRgb(),
            n = new e(t).toRgb();
        return new e({ r: n.r + (r.r - n.r) * r.a, g: n.g + (r.g - n.g) * r.a, b: n.b + (r.b - n.b) * r.a })
    }, e.prototype.triad = function() { return this.polyad(3) }, e.prototype.tetrad = function() { return this.polyad(4) }, e.prototype.polyad = function(t) { for (var r = this.toHsl(), n = r.h, i = [this], a = 360 / t, o = 1; o < t; o++) i.push(new e({ h: (n + o * a) % 360, s: r.s, l: r.l })); return i }, e.prototype.equals = function(t) { return this.toRgbString() === new e(t).toRgbString() }, e
}();

function Ym(e) {
    if (e === void 0 && (e = {}), e.count !== void 0 && e.count !== null) {
        var t = e.count,
            r = [];
        for (e.count = void 0; t > r.length;) e.count = null, e.seed && (e.seed += 1), r.push(Ym(e));
        return e.count = t, r
    }
    var n = $w(e.hue, e.seed),
        i = zw(n, e),
        a = Aw(n, i, e),
        o = { h: n, s: i, v: a };
    return e.alpha !== void 0 && (o.a = e.alpha), new ca(o)
}

function $w(e, t) {
    var r = Iw(e),
        n = Zo(r, t);
    return n < 0 && (n = 360 + n), n
}

function zw(e, t) {
    if (t.hue === "monochrome") return 0;
    if (t.luminosity === "random") return Zo([0, 100], t.seed);
    var r = Xm(e).saturationRange,
        n = r[0],
        i = r[1];
    switch (t.luminosity) {
        case "bright":
            n = 55;
            break;
        case "dark":
            n = i - 10;
            break;
        case "light":
            i = 55;
            break
    }
    return Zo([n, i], t.seed)
}

function Aw(e, t, r) {
    var n = Fw(e, t),
        i = 100;
    switch (r.luminosity) {
        case "dark":
            i = n + 20;
            break;
        case "light":
            n = (i + n) / 2;
            break;
        case "random":
            n = 0, i = 100;
            break
    }
    return Zo([n, i], r.seed)
}

function Fw(e, t) {
    for (var r = Xm(e).lowerBounds, n = 0; n < r.length - 1; n++) {
        var i = r[n][0],
            a = r[n][1],
            o = r[n + 1][0],
            l = r[n + 1][1];
        if (t >= i && t <= o) {
            var s = (l - a) / (o - i),
                u = a - s * i;
            return s * t + u
        }
    }
    return 0
}

function Iw(e) { var t = parseInt(e, 10); if (!Number.isNaN(t) && t < 360 && t > 0) return [t, t]; if (typeof e == "string") { var r = Jm.find(function(o) { return o.name === e }); if (r) { var n = Zm(r); if (n.hueRange) return n.hueRange } var i = new ca(e); if (i.isValid) { var a = i.toHsv().h; return [a, a] } } return [0, 360] }

function Xm(e) {
    e >= 334 && e <= 360 && (e -= 360);
    for (var t = 0, r = Jm; t < r.length; t++) {
        var n = r[t],
            i = Zm(n);
        if (i.hueRange && e >= i.hueRange[0] && e <= i.hueRange[1]) return i
    }
    throw Error("Color not found")
}

function Zo(e, t) {
    if (t === void 0) return Math.floor(e[0] + Math.random() * (e[1] + 1 - e[0]));
    var r = e[1] || 1,
        n = e[0] || 0;
    t = (t * 9301 + 49297) % 233280;
    var i = t / 233280;
    return Math.floor(n + i * (r - n))
}

function Zm(e) {
    var t = e.lowerBounds[0][0],
        r = e.lowerBounds[e.lowerBounds.length - 1][0],
        n = e.lowerBounds[e.lowerBounds.length - 1][1],
        i = e.lowerBounds[0][1];
    return { name: e.name, hueRange: e.hueRange, lowerBounds: e.lowerBounds, saturationRange: [t, r], brightnessRange: [n, i] }
}
var Jm = [{
        name: "monochrome",
        hueRange: null,
        lowerBounds: [
            [0, 0],
            [100, 0]
        ]
    }, {
        name: "red",
        hueRange: [-26, 18],
        lowerBounds: [
            [20, 100],
            [30, 92],
            [40, 89],
            [50, 85],
            [60, 78],
            [70, 70],
            [80, 60],
            [90, 55],
            [100, 50]
        ]
    }, {
        name: "orange",
        hueRange: [19, 46],
        lowerBounds: [
            [20, 100],
            [30, 93],
            [40, 88],
            [50, 86],
            [60, 85],
            [70, 70],
            [100, 70]
        ]
    }, {
        name: "yellow",
        hueRange: [47, 62],
        lowerBounds: [
            [25, 100],
            [40, 94],
            [50, 89],
            [60, 86],
            [70, 84],
            [80, 82],
            [90, 80],
            [100, 75]
        ]
    }, {
        name: "green",
        hueRange: [63, 178],
        lowerBounds: [
            [30, 100],
            [40, 90],
            [50, 85],
            [60, 81],
            [70, 74],
            [80, 64],
            [90, 50],
            [100, 40]
        ]
    }, {
        name: "blue",
        hueRange: [179, 257],
        lowerBounds: [
            [20, 100],
            [30, 86],
            [40, 80],
            [50, 74],
            [60, 60],
            [70, 52],
            [80, 44],
            [90, 39],
            [100, 35]
        ]
    }, {
        name: "purple",
        hueRange: [258, 282],
        lowerBounds: [
            [20, 100],
            [30, 87],
            [40, 79],
            [50, 70],
            [60, 65],
            [70, 59],
            [80, 52],
            [90, 45],
            [100, 42]
        ]
    }, {
        name: "pink",
        hueRange: [283, 334],
        lowerBounds: [
            [20, 100],
            [30, 90],
            [40, 86],
            [60, 84],
            [80, 80],
            [90, 75],
            [100, 73]
        ]
    }],
    Oe = function(t, r, n) {
        var i = wl(t, "colors." + r, r),
            a = new ca(i),
            o = a.isValid;
        return o ? i : n
    },
    Mw = function(t) {
        return function(r) {
            var n = Oe(r, t),
                i = new ca(n).isDark();
            return i ? "dark" : "light"
        }
    },
    Nw = function(t) { return function(r) { return Mw(t)(r) === "dark" } },
    Vn = function(t, r) { return function(n) { var i = Oe(n, t); return new ca(i).setAlpha(r).toRgbString() } };

function Rh(e, t) { return e === void 0 && (e = "1rem"), t === void 0 && (t = "rgba(255, 255, 255, 0.15)"), { backgroundImage: `linear-gradient( 45deg, ` + t + ` 25%, transparent 25%, transparent 50%, ` + t + ` 50%, ` + t + ` 75%, transparent 75%, transparent )`, backgroundSize: e + " " + e } }

function Bw(e) { var t = Ym().toHexString(); return !e || Jy(e) ? t : e.string && e.colors ? Dw(e.string, e.colors) : e.string && !e.colors ? Lw(e.string) : e.colors && !e.string ? jw(e.colors) : t }

function Lw(e) {
    var t = 0;
    if (e.length === 0) return t.toString();
    for (var r = 0; r < e.length; r += 1) t = e.charCodeAt(r) + ((t << 5) - t), t = t & t;
    for (var n = "#", i = 0; i < 3; i += 1) {
        var a = t >> i * 8 & 255;
        n += ("00" + a.toString(16)).substr(-2)
    }
    return n
}

function Dw(e, t) { var r = 0; if (e.length === 0) return t[0]; for (var n = 0; n < e.length; n += 1) r = e.charCodeAt(n) + ((r << 5) - r), r = r & r; return r = (r % t.length + t.length) % t.length, t[r] }

function jw(e) { return e[Math.floor(Math.random() * e.length)] }

function T(e, t) { return function(r) { return r.colorMode === "dark" ? t : e } }

function da(e) {
    var t = e.orientation,
        r = e.vertical,
        n = e.horizontal;
    return t ? t === "vertical" ? r : n : {}
}

function Qu() { return Qu = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e }, Qu.apply(this, arguments) }
var Ww = function(t) { return u1({ condition: !0, message: ["[chakra-ui]: createBreakpoints(...) will be deprecated pretty soon", "simply pass the breakpoints as an object. Remove the createBreakpoint(..) call"].join("") }), Qu({ base: "0em" }, t) };

function Oh(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
    }
}

function Hw(e, t, r) { return t && Oh(e.prototype, t), r && Oh(e, r), e }
var Uw = function() {
    function e(t) {
        var r = this;
        this.map = {}, this.called = !1, this.assert = function() { if (!r.called) { r.called = !0; return } throw new Error("[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?") }, this.parts = function() {
            r.assert();
            for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
            for (var o = 0, l = i; o < l.length; o++) {
                var s = l[o];
                r.map[s] = r.toPart(s)
            }
            return r
        }, this.extend = function() {
            for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
            for (var o = 0, l = i; o < l.length; o++) {
                var s = l[o];
                s in r.map || (r.map[s] = r.toPart(s))
            }
            return r
        }, this.toPart = function(n) {
            var i = ["container", "root"].includes(n != null ? n : "") ? [r.name] : [r.name, n],
                a = i.filter(Boolean).join("__"),
                o = "chakra-" + a,
                l = { className: o, selector: "." + o, toString: function() { return n } };
            return l
        }, this.__type = {}
    }
    return Hw(e, [{
        key: "selectors",
        get: function() {
            var r = Co(Object.entries(this.map).map(function(n) {
                var i = n[0],
                    a = n[1];
                return [i, a.selector]
            }));
            return r
        }
    }, {
        key: "classNames",
        get: function() {
            var r = Co(Object.entries(this.map).map(function(n) {
                var i = n[0],
                    a = n[1];
                return [i, a.className]
            }));
            return r
        }
    }, { key: "keys", get: function() { return Object.keys(this.map) } }]), e
}();

function ae(e) { return new Uw(e) }

function e0(e) { return ft(e) && e.reference ? e.reference : String(e) }
var Dl = function(t) { for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i]; return n.map(e0).join(" " + t + " ").replace(/calc/g, "") },
    $h = function() { for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n]; return "calc(" + Dl.apply(void 0, ["+"].concat(r)) + ")" },
    zh = function() { for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n]; return "calc(" + Dl.apply(void 0, ["-"].concat(r)) + ")" },
    Vu = function() { for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n]; return "calc(" + Dl.apply(void 0, ["*"].concat(r)) + ")" },
    Ah = function() { for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n]; return "calc(" + Dl.apply(void 0, ["/"].concat(r)) + ")" },
    Fh = function(t) { var r = e0(t); return r != null && !Number.isNaN(parseFloat(r)) ? String(r).startsWith("-") ? String(r).slice(1) : "-" + r : Vu(r, -1) },
    lr = Object.assign(function(e) { return { add: function() { for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i]; return lr($h.apply(void 0, [e].concat(n))) }, subtract: function() { for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i]; return lr(zh.apply(void 0, [e].concat(n))) }, multiply: function() { for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i]; return lr(Vu.apply(void 0, [e].concat(n))) }, divide: function() { for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i]; return lr(Ah.apply(void 0, [e].concat(n))) }, negate: function() { return lr(Fh(e)) }, toString: function() { return e.toString() } } }, { add: $h, subtract: zh, multiply: Vu, divide: Ah, negate: Fh });

function Qw(e) { return !Number.isInteger(parseFloat(e.toString())) }

function Vw(e, t) { return t === void 0 && (t = "-"), e.replace(/\s+/g, t) }

function t0(e) { var t = Vw(e.toString()); return t.includes("\\.") ? e : Qw(e) ? t.replace(".", "\\.") : e }

function qw(e, t) { return t === void 0 && (t = ""), [t, t0(e)].filter(Boolean).join("-") }

function Kw(e, t) { return "var(" + t0(e) + (t ? ", " + t : "") + ")" }

function Gw(e, t) { return t === void 0 && (t = ""), "--" + qw(e, t) }

function yt(e, t) { var r = Gw(e, t == null ? void 0 : t.prefix); return { variable: r, reference: Kw(r, Yw(t == null ? void 0 : t.fallback)) } }

function Yw(e) { return typeof e == "string" ? e : e == null ? void 0 : e.reference }
var Xw = ae("accordion").parts("root", "container", "button", "panel").extend("icon"),
    Zw = ae("alert").parts("title", "description", "container").extend("icon"),
    Jw = ae("avatar").parts("label", "badge", "container").extend("excessLabel", "group"),
    ek = ae("breadcrumb").parts("link", "item", "container").extend("separator");
ae("button").parts();
var tk = ae("checkbox").parts("control", "icon", "container").extend("label");
ae("progress").parts("track", "filledTrack").extend("label");
var rk = ae("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"),
    nk = ae("editable").parts("preview", "input", "textarea"),
    ik = ae("form").parts("container", "requiredIndicator", "helperText"),
    ak = ae("formError").parts("text", "icon"),
    ok = ae("input").parts("addon", "field", "element"),
    lk = ae("list").parts("container", "item", "icon"),
    sk = ae("menu").parts("button", "list", "item").extend("groupTitle", "command", "divider"),
    uk = ae("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"),
    ck = ae("numberinput").parts("root", "field", "stepperGroup", "stepper");
ae("pininput").parts("field");
var dk = ae("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton"),
    fk = ae("progress").parts("label", "filledTrack", "track"),
    hk = ae("radio").parts("container", "control", "label"),
    pk = ae("select").parts("field", "icon"),
    vk = ae("slider").parts("container", "track", "thumb", "filledTrack"),
    mk = ae("stat").parts("container", "label", "helpText", "number", "icon"),
    gk = ae("switch").parts("container", "track", "thumb"),
    yk = ae("table").parts("table", "thead", "tbody", "tr", "th", "td", "tfoot", "caption"),
    bk = ae("tabs").parts("root", "tab", "tablist", "tabpanel", "tabpanels", "indicator"),
    Sk = ae("tag").parts("container", "label", "closeButton"),
    r0 = { letterSpacings: { tighter: "-0.05em", tight: "-0.025em", normal: "0", wide: "0.025em", wider: "0.05em", widest: "0.1em" }, lineHeights: { normal: "normal", none: 1, shorter: 1.25, short: 1.375, base: 1.5, tall: 1.625, taller: "2", "3": ".75rem", "4": "1rem", "5": "1.25rem", "6": "1.5rem", "7": "1.75rem", "8": "2rem", "9": "2.25rem", "10": "2.5rem" }, fontWeights: { hairline: 100, thin: 200, light: 300, normal: 400, medium: 500, semibold: 600, bold: 700, extrabold: 800, black: 900 }, fonts: { heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"', body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"', mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace' }, fontSizes: { xs: "0.75rem", sm: "0.875rem", md: "1rem", lg: "1.125rem", xl: "1.25rem", "2xl": "1.5rem", "3xl": "1.875rem", "4xl": "2.25rem", "5xl": "3rem", "6xl": "3.75rem", "7xl": "4.5rem", "8xl": "6rem", "9xl": "8rem" } },
    xk = { borderTopWidth: "1px", borderColor: "inherit", _last: { borderBottomWidth: "1px" } },
    wk = { transitionProperty: "common", transitionDuration: "normal", fontSize: "1rem", _focus: { boxShadow: "outline" }, _hover: { bg: "blackAlpha.50" }, _disabled: { opacity: .4, cursor: "not-allowed" }, px: 4, py: 2 },
    kk = { pt: 2, px: 4, pb: 5 },
    Ck = { fontSize: "1.25em" },
    _k = { root: {}, container: xk, button: wk, panel: kk, icon: Ck },
    Ek = { parts: Xw.keys, baseStyle: _k },
    Pk = { container: { px: 4, py: 3 }, title: { fontWeight: "bold", lineHeight: 6, marginEnd: 2 }, description: { lineHeight: 6 }, icon: { flexShrink: 0, marginEnd: 3, w: 5, h: 6 } };

function vd(e) {
    var t = e.theme,
        r = e.colorScheme,
        n = Oe(t, r + ".100", r),
        i = Vn(r + ".200", .16)(t);
    return T(n, i)(e)
}
var Tk = function(t) { var r = t.colorScheme; return { container: { bg: vd(t) }, icon: { color: T(r + ".500", r + ".200")(t) } } },
    Rk = function(t) { var r = t.colorScheme; return { container: { paddingStart: 3, borderStartWidth: "4px", borderStartColor: T(r + ".500", r + ".200")(t), bg: vd(t) }, icon: { color: T(r + ".500", r + ".200")(t) } } },
    Ok = function(t) { var r = t.colorScheme; return { container: { pt: 2, borderTopWidth: "4px", borderTopColor: T(r + ".500", r + ".200")(t), bg: vd(t) }, icon: { color: T(r + ".500", r + ".200")(t) } } },
    $k = function(t) { var r = t.colorScheme; return { container: { bg: T(r + ".500", r + ".200")(t), color: T("white", "gray.900")(t) } } },
    zk = { subtle: Tk, "left-accent": Rk, "top-accent": Ok, solid: $k },
    Ak = { variant: "subtle", colorScheme: "blue" },
    Fk = { parts: Zw.keys, baseStyle: Pk, variants: zk, defaultProps: Ak },
    Ik = function(t) { return { transform: "translate(25%, 25%)", borderRadius: "full", border: "0.2em solid", borderColor: T("white", "gray.800")(t) } },
    Mk = function(t) { return { bg: T("gray.200", "whiteAlpha.400")(t) } },
    Nk = function(t) {
        var r = t.name,
            n = t.theme,
            i = r ? Bw({ string: r }) : "gray.400",
            a = Nw(i)(n),
            o = "white";
        a || (o = "gray.800");
        var l = T("white", "gray.800")(t);
        return { bg: i, color: o, borderColor: l, verticalAlign: "top" }
    },
    Bk = function(t) { return { badge: Ik(t), excessLabel: Mk(t), container: Nk(t) } };

function yr(e) { var t = Km[e]; return { container: { width: e, height: e, fontSize: "calc(" + (t != null ? t : e) + " / 2.5)" }, excessLabel: { width: e, height: e }, label: { fontSize: "calc(" + (t != null ? t : e) + " / 2.5)", lineHeight: e !== "100%" ? t != null ? t : e : void 0 } } }
var Lk = { "2xs": yr("4"), xs: yr("6"), sm: yr("8"), md: yr("12"), lg: yr("16"), xl: yr("24"), "2xl": yr("32"), full: yr("100%") },
    Dk = { size: "md" },
    jk = { parts: Jw.keys, baseStyle: Bk, sizes: Lk, defaultProps: Dk },
    Wk = { px: 1, textTransform: "uppercase", fontSize: "xs", borderRadius: "sm", fontWeight: "bold" },
    Hk = function(t) {
        var r = t.colorScheme,
            n = t.theme,
            i = Vn(r + ".500", .6)(n);
        return { bg: T(r + ".500", i)(t), color: T("white", "whiteAlpha.800")(t) }
    },
    Uk = function(t) {
        var r = t.colorScheme,
            n = t.theme,
            i = Vn(r + ".200", .16)(n);
        return { bg: T(r + ".100", i)(t), color: T(r + ".800", r + ".200")(t) }
    },
    Qk = function(t) {
        var r = t.colorScheme,
            n = t.theme,
            i = Vn(r + ".200", .8)(n),
            a = Oe(n, r + ".500"),
            o = T(a, i)(t);
        return { color: o, boxShadow: "inset 0 0 0px 1px " + o }
    },
    Vk = { solid: Hk, subtle: Uk, outline: Qk },
    qk = { variant: "subtle", colorScheme: "gray" },
    Nn = { baseStyle: Wk, variants: Vk, defaultProps: qk },
    Kk = { transitionProperty: "common", transitionDuration: "fast", transitionTimingFunction: "ease-out", cursor: "pointer", textDecoration: "none", outline: "none", color: "inherit", _hover: { textDecoration: "underline" }, _focus: { boxShadow: "outline" } },
    Gk = { link: Kk },
    Yk = { parts: ek.keys, baseStyle: Gk },
    Xk = { lineHeight: "1.2", borderRadius: "md", fontWeight: "semibold", transitionProperty: "common", transitionDuration: "normal", _focus: { boxShadow: "outline" }, _disabled: { opacity: .4, cursor: "not-allowed", boxShadow: "none" }, _hover: { _disabled: { bg: "initial" } } },
    n0 = function(t) {
        var r = t.colorScheme,
            n = t.theme;
        if (r === "gray") return { color: T("inherit", "whiteAlpha.900")(t), _hover: { bg: T("gray.100", "whiteAlpha.200")(t) }, _active: { bg: T("gray.200", "whiteAlpha.300")(t) } };
        var i = Vn(r + ".200", .12)(n),
            a = Vn(r + ".200", .24)(n);
        return { color: T(r + ".600", r + ".200")(t), bg: "transparent", _hover: { bg: T(r + ".50", i)(t) }, _active: { bg: T(r + ".100", a)(t) } }
    },
    Zk = function(t) {
        var r = t.colorScheme,
            n = T("gray.200", "whiteAlpha.300")(t);
        return ke({ border: "1px solid", borderColor: r === "gray" ? n : "currentColor" }, n0(t))
    },
    Jk = { yellow: { bg: "yellow.400", color: "black", hoverBg: "yellow.500", activeBg: "yellow.600" }, cyan: { bg: "cyan.400", color: "black", hoverBg: "cyan.500", activeBg: "cyan.600" } },
    e2 = function(t) {
        var r, n = t.colorScheme;
        if (n === "gray") { var i = T("gray.100", "whiteAlpha.200")(t); return { bg: i, _hover: { bg: T("gray.200", "whiteAlpha.300")(t), _disabled: { bg: i } }, _active: { bg: T("gray.300", "whiteAlpha.400")(t) } } }
        var a = (r = Jk[n]) != null ? r : {},
            o = a.bg,
            l = o === void 0 ? n + ".500" : o,
            s = a.color,
            u = s === void 0 ? "white" : s,
            c = a.hoverBg,
            p = c === void 0 ? n + ".600" : c,
            h = a.activeBg,
            g = h === void 0 ? n + ".700" : h,
            y = T(l, n + ".200")(t);
        return { bg: y, color: T(u, "gray.800")(t), _hover: { bg: T(p, n + ".300")(t), _disabled: { bg: y } }, _active: { bg: T(g, n + ".400")(t) } }
    },
    t2 = function(t) { var r = t.colorScheme; return { padding: 0, height: "auto", lineHeight: "normal", verticalAlign: "baseline", color: T(r + ".500", r + ".200")(t), _hover: { textDecoration: "underline", _disabled: { textDecoration: "none" } }, _active: { color: T(r + ".700", r + ".500")(t) } } },
    r2 = { bg: "none", color: "inherit", display: "inline", lineHeight: "inherit", m: 0, p: 0 },
    n2 = { ghost: n0, outline: Zk, solid: e2, link: t2, unstyled: r2 },
    i2 = { lg: { h: 12, minW: 12, fontSize: "lg", px: 6 }, md: { h: 10, minW: 10, fontSize: "md", px: 4 }, sm: { h: 8, minW: 8, fontSize: "sm", px: 3 }, xs: { h: 6, minW: 6, fontSize: "xs", px: 2 } },
    a2 = { variant: "solid", size: "md", colorScheme: "gray" },
    o2 = { baseStyle: Xk, variants: n2, sizes: i2, defaultProps: a2 },
    l2 = function(t) { var r = t.colorScheme; return { w: "100%", transitionProperty: "box-shadow", transitionDuration: "normal", border: "2px solid", borderRadius: "sm", borderColor: "inherit", color: "white", _checked: { bg: T(r + ".500", r + ".200")(t), borderColor: T(r + ".500", r + ".200")(t), color: T("white", "gray.900")(t), _hover: { bg: T(r + ".600", r + ".300")(t), borderColor: T(r + ".600", r + ".300")(t) }, _disabled: { borderColor: T("gray.200", "transparent")(t), bg: T("gray.200", "whiteAlpha.300")(t), color: T("gray.500", "whiteAlpha.500")(t) } }, _indeterminate: { bg: T(r + ".500", r + ".200")(t), borderColor: T(r + ".500", r + ".200")(t), color: T("white", "gray.900")(t) }, _disabled: { bg: T("gray.100", "whiteAlpha.100")(t), borderColor: T("gray.100", "transparent")(t) }, _focus: { boxShadow: "outline" }, _invalid: { borderColor: T("red.500", "red.300")(t) } } },
    s2 = { _disabled: { cursor: "not-allowed" } },
    u2 = { userSelect: "none", _disabled: { opacity: .4 } },
    c2 = { transitionProperty: "transform", transitionDuration: "normal" },
    d2 = function(t) { return { icon: c2, container: s2, control: l2(t), label: u2 } },
    f2 = { sm: { control: { h: 3, w: 3 }, label: { fontSize: "sm" }, icon: { fontSize: "0.45rem" } }, md: { control: { w: 4, h: 4 }, label: { fontSize: "md" }, icon: { fontSize: "0.625rem" } }, lg: { control: { w: 5, h: 5 }, label: { fontSize: "lg" }, icon: { fontSize: "0.625rem" } } },
    h2 = { size: "md", colorScheme: "blue" },
    Jo = { parts: tk.keys, baseStyle: d2, sizes: f2, defaultProps: h2 },
    qa, Ka, Ga, Pi = yt("close-button-size"),
    p2 = function(t) {
        var r = T("blackAlpha.100", "whiteAlpha.100")(t),
            n = T("blackAlpha.200", "whiteAlpha.200")(t);
        return { w: [Pi.reference], h: [Pi.reference], borderRadius: "md", transitionProperty: "common", transitionDuration: "normal", _disabled: { opacity: .4, cursor: "not-allowed", boxShadow: "none" }, _hover: { bg: r }, _active: { bg: n }, _focus: { boxShadow: "outline" } }
    },
    v2 = { lg: (qa = {}, qa[Pi.variable] = "40px", qa.fontSize = "16px", qa), md: (Ka = {}, Ka[Pi.variable] = "32px", Ka.fontSize = "12px", Ka), sm: (Ga = {}, Ga[Pi.variable] = "24px", Ga.fontSize = "10px", Ga) },
    m2 = { size: "md" },
    g2 = { baseStyle: p2, sizes: v2, defaultProps: m2 },
    y2 = Nn.variants,
    b2 = Nn.defaultProps,
    S2 = { fontFamily: "mono", fontSize: "sm", px: "0.2em", borderRadius: "sm" },
    x2 = { baseStyle: S2, variants: y2, defaultProps: b2 },
    w2 = { w: "100%", mx: "auto", maxW: "60ch", px: "1rem" },
    k2 = { baseStyle: w2 },
    C2 = { opacity: .6, borderColor: "inherit" },
    _2 = { borderStyle: "solid" },
    E2 = { borderStyle: "dashed" },
    P2 = { solid: _2, dashed: E2 },
    T2 = { variant: "solid" },
    R2 = { baseStyle: C2, variants: P2, defaultProps: T2 };

function mn(e) { return e === "full" ? { dialog: { maxW: "100vw", h: "100vh" } } : { dialog: { maxW: e } } }
var O2 = { bg: "blackAlpha.600", zIndex: "overlay" },
    $2 = { display: "flex", zIndex: "modal", justifyContent: "center" },
    z2 = function(t) { var r = t.isFullHeight; return ke({}, r && { height: "100vh" }, { zIndex: "modal", maxH: "100vh", bg: T("white", "gray.700")(t), color: "inherit", boxShadow: T("lg", "dark-lg")(t) }) },
    A2 = { px: 6, py: 4, fontSize: "xl", fontWeight: "semibold" },
    F2 = { position: "absolute", top: 2, insetEnd: 3 },
    I2 = { px: 6, py: 2, flex: 1, overflow: "auto" },
    M2 = { px: 6, py: 4 },
    N2 = function(t) { return { overlay: O2, dialogContainer: $2, dialog: z2(t), header: A2, closeButton: F2, body: I2, footer: M2 } },
    B2 = { xs: mn("xs"), sm: mn("md"), md: mn("lg"), lg: mn("2xl"), xl: mn("4xl"), full: mn("full") },
    L2 = { size: "xs" },
    D2 = { parts: rk.keys, baseStyle: N2, sizes: B2, defaultProps: L2 },
    j2 = { borderRadius: "md", py: "3px", transitionProperty: "common", transitionDuration: "normal" },
    W2 = { borderRadius: "md", py: "3px", transitionProperty: "common", transitionDuration: "normal", width: "full", _focus: { boxShadow: "outline" }, _placeholder: { opacity: .6 } },
    H2 = { borderRadius: "md", py: "3px", transitionProperty: "common", transitionDuration: "normal", width: "full", _focus: { boxShadow: "outline" }, _placeholder: { opacity: .6 } },
    U2 = { preview: j2, input: W2, textarea: H2 },
    Q2 = { parts: nk.keys, baseStyle: U2 },
    V2 = function(t) { return { marginStart: 1, color: T("red.500", "red.300")(t) } },
    q2 = function(t) { return { mt: 2, color: T("gray.500", "whiteAlpha.600")(t), lineHeight: "normal", fontSize: "sm" } },
    K2 = function(t) { return { container: { width: "100%", position: "relative" }, requiredIndicator: V2(t), helperText: q2(t) } },
    G2 = { parts: ik.keys, baseStyle: K2 },
    Y2 = function(t) { return { color: T("red.500", "red.300")(t), mt: 2, fontSize: "sm", lineHeight: "normal" } },
    X2 = function(t) { return { marginEnd: "0.5em", color: T("red.500", "red.300")(t) } },
    Z2 = function(t) { return { text: Y2(t), icon: X2(t) } },
    J2 = { parts: ak.keys, baseStyle: Z2 },
    eC = { fontSize: "md", marginEnd: 3, mb: 2, fontWeight: "medium", transitionProperty: "common", transitionDuration: "normal", opacity: 1, _disabled: { opacity: .4 } },
    tC = { baseStyle: eC },
    rC = { fontFamily: "heading", fontWeight: "bold" },
    nC = { "4xl": { fontSize: ["6xl", null, "7xl"], lineHeight: 1 }, "3xl": { fontSize: ["5xl", null, "6xl"], lineHeight: 1 }, "2xl": { fontSize: ["4xl", null, "5xl"], lineHeight: [1.2, null, 1] }, xl: { fontSize: ["3xl", null, "4xl"], lineHeight: [1.33, null, 1.2] }, lg: { fontSize: ["2xl", null, "3xl"], lineHeight: [1.33, null, 1.2] }, md: { fontSize: "xl", lineHeight: 1.2 }, sm: { fontSize: "md", lineHeight: 1.2 }, xs: { fontSize: "sm", lineHeight: 1.2 } },
    iC = { size: "xl" },
    aC = { baseStyle: rC, sizes: nC, defaultProps: iC },
    oC = { field: { width: "100%", minWidth: 0, outline: 0, position: "relative", appearance: "none", transitionProperty: "common", transitionDuration: "normal" } },
    br = { lg: { fontSize: "lg", px: 4, h: 12, borderRadius: "md" }, md: { fontSize: "md", px: 4, h: 10, borderRadius: "md" }, sm: { fontSize: "sm", px: 3, h: 8, borderRadius: "sm" }, xs: { fontSize: "xs", px: 2, h: 6, borderRadius: "sm" } },
    lC = { lg: { field: br.lg, addon: br.lg }, md: { field: br.md, addon: br.md }, sm: { field: br.sm, addon: br.sm }, xs: { field: br.xs, addon: br.xs } };

function md(e) {
    var t = e.focusBorderColor,
        r = e.errorBorderColor;
    return { focusBorderColor: t || T("blue.500", "blue.300")(e), errorBorderColor: r || T("red.500", "red.300")(e) }
}
var sC = function(t) {
        var r = t.theme,
            n = md(t),
            i = n.focusBorderColor,
            a = n.errorBorderColor;
        return { field: { border: "1px solid", borderColor: "inherit", bg: "inherit", _hover: { borderColor: T("gray.300", "whiteAlpha.400")(t) }, _readOnly: { boxShadow: "none !important", userSelect: "all" }, _disabled: { opacity: .4, cursor: "not-allowed" }, _invalid: { borderColor: Oe(r, a), boxShadow: "0 0 0 1px " + Oe(r, a) }, _focus: { zIndex: 1, borderColor: Oe(r, i), boxShadow: "0 0 0 1px " + Oe(r, i) } }, addon: { border: "1px solid", borderColor: T("inherit", "whiteAlpha.50")(t), bg: T("gray.100", "whiteAlpha.300")(t) } }
    },
    uC = function(t) {
        var r = t.theme,
            n = md(t),
            i = n.focusBorderColor,
            a = n.errorBorderColor;
        return { field: { border: "2px solid", borderColor: "transparent", bg: T("gray.100", "whiteAlpha.50")(t), _hover: { bg: T("gray.200", "whiteAlpha.100")(t) }, _readOnly: { boxShadow: "none !important", userSelect: "all" }, _disabled: { opacity: .4, cursor: "not-allowed" }, _invalid: { borderColor: Oe(r, a) }, _focus: { bg: "transparent", borderColor: Oe(r, i) } }, addon: { border: "2px solid", borderColor: "transparent", bg: T("gray.100", "whiteAlpha.50")(t) } }
    },
    cC = function(t) {
        var r = t.theme,
            n = md(t),
            i = n.focusBorderColor,
            a = n.errorBorderColor;
        return { field: { borderBottom: "1px solid", borderColor: "inherit", borderRadius: 0, px: 0, bg: "transparent", _readOnly: { boxShadow: "none !important", userSelect: "all" }, _invalid: { borderColor: Oe(r, a), boxShadow: "0px 1px 0px 0px " + Oe(r, a) }, _focus: { borderColor: Oe(r, i), boxShadow: "0px 1px 0px 0px " + Oe(r, i) } }, addon: { borderBottom: "2px solid", borderColor: "inherit", borderRadius: 0, px: 0, bg: "transparent" } }
    },
    dC = { field: { bg: "transparent", px: 0, height: "auto" }, addon: { bg: "transparent", px: 0, height: "auto" } },
    fC = { outline: sC, filled: uC, flushed: cC, unstyled: dC },
    hC = { size: "md", variant: "outline" },
    ve = { parts: ok.keys, baseStyle: oC, sizes: lC, variants: fC, defaultProps: hC },
    pC = function(t) { return { bg: T("gray.100", "whiteAlpha")(t), borderRadius: "md", borderWidth: "1px", borderBottomWidth: "3px", fontSize: "0.8em", fontWeight: "bold", lineHeight: "normal", px: "0.4em", whiteSpace: "nowrap" } },
    vC = { baseStyle: pC },
    mC = { transitionProperty: "common", transitionDuration: "fast", transitionTimingFunction: "ease-out", cursor: "pointer", textDecoration: "none", outline: "none", color: "inherit", _hover: { textDecoration: "underline" }, _focus: { boxShadow: "outline" } },
    gC = { baseStyle: mC },
    yC = { marginEnd: "0.5rem", display: "inline", verticalAlign: "text-bottom" },
    bC = { container: {}, item: {}, icon: yC },
    SC = { parts: lk.keys, baseStyle: bC },
    xC = function(t) { return { bg: T("#fff", "gray.700")(t), boxShadow: T("sm", "dark-lg")(t), color: "inherit", minW: "3xs", py: "2", zIndex: 1, borderRadius: "md", borderWidth: "1px" } },
    wC = function(t) { return { py: "0.4rem", px: "0.8rem", transitionProperty: "background", transitionDuration: "ultra-fast", transitionTimingFunction: "ease-in", _focus: { bg: T("gray.100", "whiteAlpha.100")(t) }, _active: { bg: T("gray.200", "whiteAlpha.200")(t) }, _expanded: { bg: T("gray.100", "whiteAlpha.100")(t) }, _disabled: { opacity: .4, cursor: "not-allowed" } } },
    kC = { mx: 4, my: 2, fontWeight: "semibold", fontSize: "sm" },
    CC = { opacity: .6 },
    _C = { border: 0, borderBottom: "1px solid", borderColor: "inherit", my: "0.5rem", opacity: .6 },
    EC = { transitionProperty: "common", transitionDuration: "normal" },
    PC = function(t) { return { button: EC, list: xC(t), item: wC(t), groupTitle: kC, command: CC, divider: _C } },
    TC = { parts: sk.keys, baseStyle: PC },
    RC = { bg: "blackAlpha.600", zIndex: "modal" },
    OC = function(t) {
        var r = t.isCentered,
            n = t.scrollBehavior;
        return { display: "flex", zIndex: "modal", justifyContent: "center", alignItems: r ? "center" : "flex-start", overflow: n === "inside" ? "hidden" : "auto" }
    },
    $C = function(t) { var r = t.scrollBehavior; return { borderRadius: "md", bg: T("white", "gray.700")(t), color: "inherit", my: "3.75rem", zIndex: "modal", maxH: r === "inside" ? "calc(100% - 7.5rem)" : void 0, boxShadow: T("lg", "dark-lg")(t) } },
    zC = { px: 6, py: 4, fontSize: "xl", fontWeight: "semibold" },
    AC = { position: "absolute", top: 2, insetEnd: 3 },
    FC = function(t) { var r = t.scrollBehavior; return { px: 6, py: 2, flex: 1, overflow: r === "inside" ? "auto" : void 0 } },
    IC = { px: 6, py: 4 },
    MC = function(t) { return { overlay: RC, dialogContainer: OC(t), dialog: $C(t), header: zC, closeButton: AC, body: FC(t), footer: IC } };

function Ft(e) { return e === "full" ? { dialog: { maxW: "100vw", minH: "100vh", "@supports(min-height: -webkit-fill-available)": { minH: "-webkit-fill-available" }, my: 0 } } : { dialog: { maxW: e } } }
var NC = { xs: Ft("xs"), sm: Ft("sm"), md: Ft("md"), lg: Ft("lg"), xl: Ft("xl"), "2xl": Ft("2xl"), "3xl": Ft("3xl"), "4xl": Ft("4xl"), "5xl": Ft("5xl"), "6xl": Ft("6xl"), full: Ft("full") },
    BC = { size: "md" },
    LC = { parts: uk.keys, baseStyle: MC, sizes: NC, defaultProps: BC },
    Ya, Ih, Mh, DC = ve.variants,
    jC = ve.defaultProps,
    gd = yt("number-input-stepper-width"),
    i0 = yt("number-input-input-padding"),
    WC = lr(gd).add("0.5rem").toString(),
    HC = (Ya = {}, Ya[gd.variable] = "24px", Ya[i0.variable] = WC, Ya),
    UC = (Ih = (Mh = ve.baseStyle) == null ? void 0 : Mh.field) != null ? Ih : {},
    QC = { width: [gd.reference] },
    VC = function(t) { return { borderStart: "1px solid", borderStartColor: T("inherit", "whiteAlpha.300")(t), color: T("inherit", "whiteAlpha.800")(t), _active: { bg: T("gray.200", "whiteAlpha.300")(t) }, _disabled: { opacity: .4, cursor: "not-allowed" } } },
    qC = function(t) { return { root: HC, field: UC, stepperGroup: QC, stepper: VC(t) } };

function Xa(e) {
    var t, r, n = ve.sizes[e],
        i = { lg: "md", md: "md", sm: "sm", xs: "sm" },
        a = (t = (r = n.field) == null ? void 0 : r.fontSize) != null ? t : "md",
        o = r0.fontSizes[a.toString()];
    return { field: ke({}, n.field, { paddingInlineEnd: i0.reference, verticalAlign: "top" }), stepper: { fontSize: lr(o).multiply(.75).toString(), _first: { borderTopEndRadius: i[e] }, _last: { borderBottomEndRadius: i[e], mt: "-1px", borderTopWidth: 1 } } }
}
var KC = { xs: Xa("xs"), sm: Xa("sm"), md: Xa("md"), lg: Xa("lg") },
    GC = { parts: ck.keys, baseStyle: qC, sizes: KC, variants: DC, defaultProps: jC },
    Nh, YC = ke({}, ve.baseStyle.field, { textAlign: "center" }),
    XC = { lg: { fontSize: "lg", w: 12, h: 12, borderRadius: "md" }, md: { fontSize: "md", w: 10, h: 10, borderRadius: "md" }, sm: { fontSize: "sm", w: 8, h: 8, borderRadius: "sm" }, xs: { fontSize: "xs", w: 6, h: 6, borderRadius: "sm" } },
    ZC = { outline: function(t) { var r; return (r = ve.variants.outline(t).field) != null ? r : {} }, flushed: function(t) { var r; return (r = ve.variants.flushed(t).field) != null ? r : {} }, filled: function(t) { var r; return (r = ve.variants.filled(t).field) != null ? r : {} }, unstyled: (Nh = ve.variants.unstyled.field) != null ? Nh : {} },
    JC = ve.defaultProps,
    e_ = { baseStyle: YC, sizes: XC, variants: ZC, defaultProps: JC },
    As = yt("popper-bg"),
    t_ = yt("popper-arrow-bg"),
    r_ = yt("popper-arrow-shadow-color"),
    n_ = { zIndex: 10 },
    i_ = function(t) {
        var r, n = T("white", "gray.700")(t),
            i = T("gray.200", "whiteAlpha.300")(t);
        return r = {}, r[As.variable] = "colors." + n, r.bg = As.reference, r[t_.variable] = As.reference, r[r_.variable] = "colors." + i, r.width = "xs", r.border = "1px solid", r.borderColor = "inherit", r.borderRadius = "md", r.boxShadow = "sm", r.zIndex = "inherit", r._focus = { outline: 0, boxShadow: "outline" }, r
    },
    a_ = { px: 3, py: 2, borderBottomWidth: "1px" },
    o_ = { px: 3, py: 2 },
    l_ = { px: 3, py: 2, borderTopWidth: "1px" },
    s_ = { position: "absolute", borderRadius: "md", top: 1, insetEnd: 2, padding: 2 },
    u_ = function(t) { return { popper: n_, content: i_(t), header: a_, body: o_, footer: l_, arrow: {}, closeButton: s_ } },
    c_ = { parts: dk.keys, baseStyle: u_ };

function d_(e) {
    var t = e.colorScheme,
        r = e.theme,
        n = e.isIndeterminate,
        i = e.hasStripe,
        a = T(Rh(), Rh("1rem", "rgba(0,0,0,0.1)"))(e),
        o = T(t + ".500", t + ".200")(e),
        l = `linear-gradient( to right, transparent 0%, ` + Oe(r, o) + ` 50%, transparent 100% )`,
        s = !n && i;
    return ke({}, s && a, n ? { bgImage: l } : { bgColor: o })
}
var f_ = { lineHeight: "1", fontSize: "0.25em", fontWeight: "bold", color: "white" },
    h_ = function(t) { return { bg: T("gray.100", "whiteAlpha.300")(t) } },
    p_ = function(t) { return ke({ transitionProperty: "common", transitionDuration: "slow" }, d_(t)) },
    v_ = function(t) { return { label: f_, filledTrack: p_(t), track: h_(t) } },
    m_ = { xs: { track: { h: "0.25rem" } }, sm: { track: { h: "0.5rem" } }, md: { track: { h: "0.75rem" } }, lg: { track: { h: "1rem" } } },
    g_ = { size: "md", colorScheme: "blue" },
    y_ = { parts: fk.keys, sizes: m_, baseStyle: v_, defaultProps: g_ },
    b_ = function(t) {
        var r = Jo.baseStyle(t),
            n = r.control,
            i = n === void 0 ? {} : n;
        return ke({}, i, { borderRadius: "full", _checked: ke({}, i._checked, { _before: { content: '""', display: "inline-block", pos: "relative", w: "50%", h: "50%", borderRadius: "50%", bg: "currentColor" } }) })
    },
    S_ = function(t) { return { label: Jo.baseStyle(t).label, container: Jo.baseStyle(t).container, control: b_(t) } },
    x_ = { md: { control: { w: 4, h: 4 }, label: { fontSize: "md" } }, lg: { control: { w: 5, h: 5 }, label: { fontSize: "lg" } }, sm: { control: { width: 3, height: 3 }, label: { fontSize: "sm" } } },
    w_ = { size: "md", colorScheme: "blue" },
    k_ = { parts: hk.keys, baseStyle: S_, sizes: x_, defaultProps: w_ },
    C_ = function(t) { return ke({}, ve.baseStyle.field, { bg: T("white", "gray.700")(t), appearance: "none", paddingBottom: "1px", lineHeight: "normal", "> option, > optgroup": { bg: T("white", "gray.700")(t) } }) },
    __ = { width: "1.5rem", height: "100%", insetEnd: "0.5rem", position: "relative", color: "currentColor", fontSize: "1.25rem", _disabled: { opacity: .5 } },
    E_ = function(t) { return { field: C_(t), icon: __ } },
    Za = { paddingInlineEnd: "2rem" },
    P_ = Gt({}, ve.sizes, { lg: { field: Za }, md: { field: Za }, sm: { field: Za }, xs: { field: Za, icon: { insetEnd: "0.25rem" } } }),
    T_ = { parts: pk.keys, baseStyle: E_, sizes: P_, variants: ve.variants, defaultProps: ve.defaultProps },
    R_ = function(t, r) { return un({ from: { borderColor: t, background: t }, to: { borderColor: r, background: r } }) },
    O_ = function(t) {
        var r = T("gray.100", "gray.800")(t),
            n = T("gray.400", "gray.600")(t),
            i = t.startColor,
            a = i === void 0 ? r : i,
            o = t.endColor,
            l = o === void 0 ? n : o,
            s = t.speed,
            u = t.theme,
            c = Oe(u, a),
            p = Oe(u, l);
        return { opacity: .7, borderRadius: "2px", borderColor: c, background: p, animation: s + "s linear infinite alternate " + R_(c, p) }
    },
    $_ = { baseStyle: O_ },
    z_ = function(t) { return { borderRadius: "md", fontWeight: "semibold", _focus: { boxShadow: "outline", padding: "1rem", position: "fixed", top: "1.5rem", insetStart: "1.5rem", bg: T("white", "gray.700")(t) } } },
    A_ = { baseStyle: z_ };

function F_(e) { return da({ orientation: e.orientation, vertical: { left: "50%", transform: "translateX(-50%)", _active: { transform: "translateX(-50%) scale(1.15)" } }, horizontal: { top: "50%", transform: "translateY(-50%)", _active: { transform: "translateY(-50%) scale(1.15)" } } }) }
var I_ = function(t) { var r = t.orientation; return ke({ display: "inline-block", position: "relative", cursor: "pointer", _disabled: { opacity: .6, cursor: "default", pointerEvents: "none" } }, da({ orientation: r, vertical: { h: "100%" }, horizontal: { w: "100%" } })) },
    M_ = function(t) { return { overflow: "hidden", borderRadius: "sm", bg: T("gray.200", "whiteAlpha.200")(t), _disabled: { bg: T("gray.300", "whiteAlpha.300")(t) } } },
    N_ = function(t) { return ke({ display: "flex", alignItems: "center", justifyContent: "center", position: "absolute", outline: 0, zIndex: 1, borderRadius: "full", bg: "white", boxShadow: "base", border: "1px solid", borderColor: "transparent", transitionProperty: "transform", transitionDuration: "normal", _focus: { boxShadow: "outline" }, _disabled: { bg: "gray.300" } }, F_(t)) },
    B_ = function(t) { var r = t.colorScheme; return { width: "inherit", height: "inherit", bg: T(r + ".500", r + ".200")(t) } },
    L_ = function(t) { return { container: I_(t), track: M_(t), thumb: N_(t), filledTrack: B_(t) } },
    D_ = function(t) { return { thumb: { w: "16px", h: "16px" }, track: da({ orientation: t.orientation, horizontal: { h: "4px" }, vertical: { w: "4px" } }) } },
    j_ = function(t) { return { thumb: { w: "14px", h: "14px" }, track: da({ orientation: t.orientation, horizontal: { h: "4px" }, vertical: { w: "4px" } }) } },
    W_ = function(t) { return { thumb: { w: "10px", h: "10px" }, track: da({ orientation: t.orientation, horizontal: { h: "2px" }, vertical: { w: "2px" } }) } },
    H_ = { lg: D_, md: j_, sm: W_ },
    U_ = { size: "md", colorScheme: "blue" },
    Q_ = { parts: vk.keys, sizes: H_, baseStyle: L_, defaultProps: U_ },
    Fs, Is, Ms, Ns, Bs, Kr = yt("spinner-size"),
    V_ = { width: [Kr.reference], height: [Kr.reference] },
    q_ = { xs: (Fs = {}, Fs[Kr.variable] = "0.75rem", Fs), sm: (Is = {}, Is[Kr.variable] = "1rem", Is), md: (Ms = {}, Ms[Kr.variable] = "1.5rem", Ms), lg: (Ns = {}, Ns[Kr.variable] = "2rem", Ns), xl: (Bs = {}, Bs[Kr.variable] = "3rem", Bs) },
    K_ = { size: "md" },
    G_ = { baseStyle: V_, sizes: q_, defaultProps: K_ },
    Y_ = { fontWeight: "medium" },
    X_ = { opacity: .8, marginBottom: 2 },
    Z_ = { verticalAlign: "baseline", fontWeight: "semibold" },
    J_ = { marginEnd: 1, w: "14px", h: "14px", verticalAlign: "middle" },
    eE = { container: {}, label: Y_, helpText: X_, number: Z_, icon: J_ },
    tE = { md: { label: { fontSize: "sm" }, helpText: { fontSize: "sm" }, number: { fontSize: "2xl" } } },
    rE = { size: "md" },
    nE = { parts: mk.keys, baseStyle: eE, sizes: tE, defaultProps: rE },
    Ja, eo, to, Ti = yt("switch-track-width"),
    tn = yt("switch-track-height"),
    Ls = yt("switch-track-diff"),
    iE = lr.subtract(Ti, tn),
    qu = yt("switch-thumb-x"),
    aE = function(t) { var r = t.colorScheme; return { borderRadius: "full", p: "2px", width: [Ti.reference], height: [tn.reference], transitionProperty: "common", transitionDuration: "fast", bg: T("gray.300", "whiteAlpha.400")(t), _focus: { boxShadow: "outline" }, _disabled: { opacity: .4, cursor: "not-allowed" }, _checked: { bg: T(r + ".500", r + ".200")(t) } } },
    oE = { bg: "white", transitionProperty: "transform", transitionDuration: "normal", borderRadius: "inherit", width: [tn.reference], height: [tn.reference], _checked: { transform: "translateX(" + qu.reference + ")" } },
    lE = function(t) { var r, n; return { container: (n = {}, n[Ls.variable] = iE, n[qu.variable] = Ls.reference, n._rtl = (r = {}, r[qu.variable] = lr(Ls).negate().toString(), r), n), track: aE(t), thumb: oE } },
    sE = { sm: { container: (Ja = {}, Ja[Ti.variable] = "1.375rem", Ja[tn.variable] = "0.75rem", Ja) }, md: { container: (eo = {}, eo[Ti.variable] = "1.875rem", eo[tn.variable] = "1rem", eo) }, lg: { container: (to = {}, to[Ti.variable] = "2.875rem", to[tn.variable] = "1.5rem", to) } },
    uE = { size: "md", colorScheme: "blue" },
    cE = { parts: gk.keys, baseStyle: lE, sizes: sE, defaultProps: uE },
    dE = { table: { fontVariantNumeric: "lining-nums tabular-nums", borderCollapse: "collapse", width: "full" }, th: { fontFamily: "heading", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "wider", textAlign: "start" }, td: { textAlign: "start" }, caption: { mt: 4, fontFamily: "heading", textAlign: "center", fontWeight: "medium" } },
    el = { "&[data-is-numeric=true]": { textAlign: "end" } },
    fE = function(t) { var r = t.colorScheme; return { th: ke({ color: T("gray.600", "gray.400")(t), borderBottom: "1px", borderColor: T(r + ".100", r + ".700")(t) }, el), td: ke({ borderBottom: "1px", borderColor: T(r + ".100", r + ".700")(t) }, el), caption: { color: T("gray.600", "gray.100")(t) }, tfoot: { tr: { "&:last-of-type": { th: { borderBottomWidth: 0 } } } } } },
    hE = function(t) { var r = t.colorScheme; return { th: ke({ color: T("gray.600", "gray.400")(t), borderBottom: "1px", borderColor: T(r + ".100", r + ".700")(t) }, el), td: ke({ borderBottom: "1px", borderColor: T(r + ".100", r + ".700")(t) }, el), caption: { color: T("gray.600", "gray.100")(t) }, tbody: { tr: { "&:nth-of-type(odd)": { "th, td": { borderBottomWidth: "1px", borderColor: T(r + ".100", r + ".700")(t) }, td: { background: T(r + ".100", r + ".700")(t) } } } }, tfoot: { tr: { "&:last-of-type": { th: { borderBottomWidth: 0 } } } } } },
    pE = { simple: fE, striped: hE, unstyled: {} },
    vE = { sm: { th: { px: "4", py: "1", lineHeight: "4", fontSize: "xs" }, td: { px: "4", py: "2", fontSize: "sm", lineHeight: "4" }, caption: { px: "4", py: "2", fontSize: "xs" } }, md: { th: { px: "6", py: "3", lineHeight: "4", fontSize: "xs" }, td: { px: "6", py: "4", lineHeight: "5" }, caption: { px: "6", py: "2", fontSize: "sm" } }, lg: { th: { px: "8", py: "4", lineHeight: "5", fontSize: "sm" }, td: { px: "8", py: "5", lineHeight: "6" }, caption: { px: "6", py: "2", fontSize: "md" } } },
    mE = { variant: "simple", size: "md", colorScheme: "gray" },
    gE = { parts: yk.keys, baseStyle: dE, variants: pE, sizes: vE, defaultProps: mE },
    yE = function(t) { var r = t.orientation; return { display: r === "vertical" ? "flex" : "block" } },
    bE = function(t) { var r = t.isFitted; return { flex: r ? 1 : void 0, transitionProperty: "common", transitionDuration: "normal", _focus: { zIndex: 1, boxShadow: "outline" } } },
    SE = function(t) {
        var r = t.align,
            n = r === void 0 ? "start" : r,
            i = t.orientation,
            a = { end: "flex-end", center: "center", start: "flex-start" };
        return { justifyContent: a[n], flexDirection: i === "vertical" ? "column" : "row" }
    },
    xE = { p: 4 },
    wE = function(t) { return { root: yE(t), tab: bE(t), tablist: SE(t), tabpanel: xE } },
    kE = { sm: { tab: { py: 1, px: 4, fontSize: "sm" } }, md: { tab: { fontSize: "md", py: 2, px: 4 } }, lg: { tab: { fontSize: "lg", py: 3, px: 4 } } },
    CE = function(t) {
        var r, n, i = t.colorScheme,
            a = t.orientation,
            o = a === "vertical",
            l = a === "vertical" ? "borderStart" : "borderBottom",
            s = o ? "marginStart" : "marginBottom";
        return { tablist: (r = {}, r[l] = "2px solid", r.borderColor = "inherit", r), tab: (n = {}, n[l] = "2px solid", n.borderColor = "transparent", n[s] = "-2px", n._selected = { color: T(i + ".600", i + ".300")(t), borderColor: "currentColor" }, n._active = { bg: T("gray.200", "whiteAlpha.300")(t) }, n._disabled = { opacity: .4, cursor: "not-allowed" }, n) }
    },
    _E = function(t) { var r = t.colorScheme; return { tab: { borderTopRadius: "md", border: "1px solid", borderColor: "transparent", mb: "-1px", _selected: { color: T(r + ".600", r + ".300")(t), borderColor: "inherit", borderBottomColor: T("white", "gray.800")(t) } }, tablist: { mb: "-1px", borderBottom: "1px solid", borderColor: "inherit" } } },
    EE = function(t) { var r = t.colorScheme; return { tab: { border: "1px solid", borderColor: "inherit", bg: T("gray.50", "whiteAlpha.50")(t), mb: "-1px", _notLast: { marginEnd: "-1px" }, _selected: { bg: T("#fff", "gray.800")(t), color: T(r + ".600", r + ".300")(t), borderColor: "inherit", borderTopColor: "currentColor", borderBottomColor: "transparent" } }, tablist: { mb: "-1px", borderBottom: "1px solid", borderColor: "inherit" } } },
    PE = function(t) {
        var r = t.colorScheme,
            n = t.theme;
        return { tab: { borderRadius: "full", fontWeight: "semibold", color: "gray.600", _selected: { color: Oe(n, r + ".700"), bg: Oe(n, r + ".100") } } }
    },
    TE = function(t) { var r = t.colorScheme; return { tab: { borderRadius: "full", fontWeight: "semibold", color: T("gray.600", "inherit")(t), _selected: { color: T("#fff", "gray.800")(t), bg: T(r + ".600", r + ".300")(t) } } } },
    RE = {},
    OE = { line: CE, enclosed: _E, "enclosed-colored": EE, "soft-rounded": PE, "solid-rounded": TE, unstyled: RE },
    $E = { size: "md", variant: "line", colorScheme: "blue" },
    zE = { parts: bk.keys, baseStyle: wE, sizes: kE, variants: OE, defaultProps: $E },
    AE = { fontWeight: "medium", lineHeight: 1.2, outline: 0, _focus: { boxShadow: "outline" } },
    FE = { lineHeight: 1.2, overflow: "visible" },
    IE = { fontSize: "18px", w: "1.25rem", h: "1.25rem", transitionProperty: "common", transitionDuration: "normal", borderRadius: "full", marginStart: "0.375rem", marginEnd: "-1", opacity: .5, _disabled: { opacity: .4 }, _focus: { boxShadow: "outline", bg: "rgba(0, 0, 0, 0.14)" }, _hover: { opacity: .8 }, _active: { opacity: 1 } },
    ME = { container: AE, label: FE, closeButton: IE },
    NE = { sm: { container: { minH: "1.25rem", minW: "1.25rem", fontSize: "xs", px: 2, borderRadius: "md" }, closeButton: { marginEnd: "-2px", marginStart: "0.35rem" } }, md: { container: { minH: "1.5rem", minW: "1.5rem", fontSize: "sm", borderRadius: "md", px: 2 } }, lg: { container: { minH: 8, minW: 8, fontSize: "md", borderRadius: "md", px: 3 } } },
    BE = { subtle: function(t) { return { container: Nn.variants.subtle(t) } }, solid: function(t) { return { container: Nn.variants.solid(t) } }, outline: function(t) { return { container: Nn.variants.outline(t) } } },
    LE = { size: "md", variant: "subtle", colorScheme: "gray" },
    DE = { parts: Sk.keys, variants: BE, baseStyle: ME, sizes: NE, defaultProps: LE },
    Bh, Lh, Dh, jh, Wh, jE = ke({}, ve.baseStyle.field, { paddingY: "8px", minHeight: "80px", lineHeight: "short", verticalAlign: "top" }),
    WE = { outline: function(t) { var r; return (r = ve.variants.outline(t).field) != null ? r : {} }, flushed: function(t) { var r; return (r = ve.variants.flushed(t).field) != null ? r : {} }, filled: function(t) { var r; return (r = ve.variants.filled(t).field) != null ? r : {} }, unstyled: (Bh = ve.variants.unstyled.field) != null ? Bh : {} },
    HE = { xs: (Lh = ve.sizes.xs.field) != null ? Lh : {}, sm: (Dh = ve.sizes.sm.field) != null ? Dh : {}, md: (jh = ve.sizes.md.field) != null ? jh : {}, lg: (Wh = ve.sizes.lg.field) != null ? Wh : {} },
    UE = { size: "md", variant: "outline" },
    QE = { baseStyle: jE, sizes: HE, variants: WE, defaultProps: UE },
    Ds = yt("tooltip-bg"),
    VE = yt("popper-arrow-bg"),
    qE = function(t) { var r, n = T("gray.700", "gray.300")(t); return r = {}, r[Ds.variable] = "colors." + n, r.px = "8px", r.py = "2px", r.bg = [Ds.reference], r[VE.variable] = [Ds.reference], r.color = T("whiteAlpha.900", "gray.900")(t), r.borderRadius = "sm", r.fontWeight = "medium", r.fontSize = "sm", r.boxShadow = "md", r.maxW = "320px", r.zIndex = "tooltip", r },
    KE = { baseStyle: qE },
    GE = Object.freeze({ __proto__: null, Accordion: Ek, Alert: Fk, Avatar: jk, Badge: Nn, Breadcrumb: Yk, Button: o2, Checkbox: Jo, CloseButton: g2, Code: x2, Container: k2, Divider: R2, Drawer: D2, Editable: Q2, Form: G2, FormError: J2, FormLabel: tC, Heading: aC, Input: ve, Kbd: vC, Link: gC, List: SC, Menu: TC, Modal: LC, NumberInput: GC, PinInput: e_, Popover: c_, Progress: y_, Radio: k_, Select: T_, Skeleton: $_, SkipLink: A_, Slider: Q_, Spinner: G_, Stat: nE, Switch: cE, Table: gE, Tabs: zE, Tag: DE, Textarea: QE, Tooltip: KE }),
    YE = { none: 0, "1px": "1px solid", "2px": "2px solid", "4px": "4px solid", "8px": "8px solid" },
    XE = Ww({ sm: "30em", md: "48em", lg: "62em", xl: "80em", "2xl": "96em" }),
    ZE = { transparent: "transparent", current: "currentColor", black: "#000000", white: "#FFFFFF", whiteAlpha: { 50: "rgba(255, 255, 255, 0.04)", 100: "rgba(255, 255, 255, 0.06)", 200: "rgba(255, 255, 255, 0.08)", 300: "rgba(255, 255, 255, 0.16)", 400: "rgba(255, 255, 255, 0.24)", 500: "rgba(255, 255, 255, 0.36)", 600: "rgba(255, 255, 255, 0.48)", 700: "rgba(255, 255, 255, 0.64)", 800: "rgba(255, 255, 255, 0.80)", 900: "rgba(255, 255, 255, 0.92)" }, blackAlpha: { 50: "rgba(0, 0, 0, 0.04)", 100: "rgba(0, 0, 0, 0.06)", 200: "rgba(0, 0, 0, 0.08)", 300: "rgba(0, 0, 0, 0.16)", 400: "rgba(0, 0, 0, 0.24)", 500: "rgba(0, 0, 0, 0.36)", 600: "rgba(0, 0, 0, 0.48)", 700: "rgba(0, 0, 0, 0.64)", 800: "rgba(0, 0, 0, 0.80)", 900: "rgba(0, 0, 0, 0.92)" }, gray: { 50: "#F7FAFC", 100: "#EDF2F7", 200: "#E2E8F0", 300: "#CBD5E0", 400: "#A0AEC0", 500: "#718096", 600: "#4A5568", 700: "#2D3748", 800: "#1A202C", 900: "#171923" }, red: { 50: "#FFF5F5", 100: "#FED7D7", 200: "#FEB2B2", 300: "#FC8181", 400: "#F56565", 500: "#E53E3E", 600: "#C53030", 700: "#9B2C2C", 800: "#822727", 900: "#63171B" }, orange: { 50: "#FFFAF0", 100: "#FEEBC8", 200: "#FBD38D", 300: "#F6AD55", 400: "#ED8936", 500: "#DD6B20", 600: "#C05621", 700: "#9C4221", 800: "#7B341E", 900: "#652B19" }, yellow: { 50: "#FFFFF0", 100: "#FEFCBF", 200: "#FAF089", 300: "#F6E05E", 400: "#ECC94B", 500: "#D69E2E", 600: "#B7791F", 700: "#975A16", 800: "#744210", 900: "#5F370E" }, green: { 50: "#F0FFF4", 100: "#C6F6D5", 200: "#9AE6B4", 300: "#68D391", 400: "#48BB78", 500: "#38A169", 600: "#2F855A", 700: "#276749", 800: "#22543D", 900: "#1C4532" }, teal: { 50: "#E6FFFA", 100: "#B2F5EA", 200: "#81E6D9", 300: "#4FD1C5", 400: "#38B2AC", 500: "#319795", 600: "#2C7A7B", 700: "#285E61", 800: "#234E52", 900: "#1D4044" }, blue: { 50: "#ebf8ff", 100: "#bee3f8", 200: "#90cdf4", 300: "#63b3ed", 400: "#4299e1", 500: "#3182ce", 600: "#2b6cb0", 700: "#2c5282", 800: "#2a4365", 900: "#1A365D" }, cyan: { 50: "#EDFDFD", 100: "#C4F1F9", 200: "#9DECF9", 300: "#76E4F7", 400: "#0BC5EA", 500: "#00B5D8", 600: "#00A3C4", 700: "#0987A0", 800: "#086F83", 900: "#065666" }, purple: { 50: "#FAF5FF", 100: "#E9D8FD", 200: "#D6BCFA", 300: "#B794F4", 400: "#9F7AEA", 500: "#805AD5", 600: "#6B46C1", 700: "#553C9A", 800: "#44337A", 900: "#322659" }, pink: { 50: "#FFF5F7", 100: "#FED7E2", 200: "#FBB6CE", 300: "#F687B3", 400: "#ED64A6", 500: "#D53F8C", 600: "#B83280", 700: "#97266D", 800: "#702459", 900: "#521B41" }, linkedin: { 50: "#E8F4F9", 100: "#CFEDFB", 200: "#9BDAF3", 300: "#68C7EC", 400: "#34B3E4", 500: "#00A0DC", 600: "#008CC9", 700: "#0077B5", 800: "#005E93", 900: "#004471" }, facebook: { 50: "#E8F4F9", 100: "#D9DEE9", 200: "#B7C2DA", 300: "#6482C0", 400: "#4267B2", 500: "#385898", 600: "#314E89", 700: "#29487D", 800: "#223B67", 900: "#1E355B" }, messenger: { 50: "#D0E6FF", 100: "#B9DAFF", 200: "#A2CDFF", 300: "#7AB8FF", 400: "#2E90FF", 500: "#0078FF", 600: "#0063D1", 700: "#0052AC", 800: "#003C7E", 900: "#002C5C" }, whatsapp: { 50: "#dffeec", 100: "#b9f5d0", 200: "#90edb3", 300: "#65e495", 400: "#3cdd78", 500: "#22c35e", 600: "#179848", 700: "#0c6c33", 800: "#01421c", 900: "#001803" }, twitter: { 50: "#E5F4FD", 100: "#C8E9FB", 200: "#A8DCFA", 300: "#83CDF7", 400: "#57BBF5", 500: "#1DA1F2", 600: "#1A94DA", 700: "#1681BF", 800: "#136B9E", 900: "#0D4D71" }, telegram: { 50: "#E3F2F9", 100: "#C5E4F3", 200: "#A2D4EC", 300: "#7AC1E4", 400: "#47A9DA", 500: "#0088CC", 600: "#007AB8", 700: "#006BA1", 800: "#005885", 900: "#003F5E" } },
    JE = { none: "0", sm: "0.125rem", base: "0.25rem", md: "0.375rem", lg: "0.5rem", xl: "0.75rem", "2xl": "1rem", "3xl": "1.5rem", full: "9999px" },
    e5 = { xs: "0 0 0 1px rgba(0, 0, 0, 0.05)", sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)", base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)", md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)", xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)", "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)", outline: "0 0 0 3px rgba(66, 153, 225, 0.6)", inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)", none: "none", "dark-lg": "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px" },
    t5 = { common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform", colors: "background-color, border-color, color, fill, stroke", dimensions: "width, height", position: "left, right, top, bottom", background: "background-color, background-image, background-position" },
    r5 = { "ease-in": "cubic-bezier(0.4, 0, 1, 1)", "ease-out": "cubic-bezier(0, 0, 0.2, 1)", "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)" },
    n5 = { "ultra-fast": "50ms", faster: "100ms", fast: "150ms", normal: "200ms", slow: "300ms", slower: "400ms", "ultra-slow": "500ms" },
    i5 = { property: t5, easing: r5, duration: n5 },
    a5 = { hide: -1, auto: "auto", base: 0, docked: 10, dropdown: 1e3, sticky: 1100, banner: 1200, overlay: 1300, modal: 1400, popover: 1500, skipLink: 1600, toast: 1700, tooltip: 1800 },
    o5 = { none: 0, sm: "4px", base: "8px", md: "12px", lg: "16px", xl: "24px", "2xl": "40px", "3xl": "64px" },
    l5 = ke({ breakpoints: XE, zIndices: a5, radii: JE, blur: o5, colors: ZE }, r0, { sizes: Km, shadows: e5, space: qm, borders: YE, transition: i5 }),
    s5 = { global: function(t) { return { body: { fontFamily: "body", color: T("gray.800", "whiteAlpha.900")(t), bg: T("white", "gray.800")(t), transitionProperty: "background-color", transitionDuration: "normal", lineHeight: "base" }, "*::placeholder": { color: T("gray.400", "whiteAlpha.400")(t) }, "*, *::before, &::after": { borderColor: T("gray.200", "whiteAlpha.300")(t), wordWrap: "break-word" } } } },
    u5 = s5,
    c5 = "ltr",
    d5 = { useSystemColorMode: !1, initialColorMode: "light", cssVarPrefix: "chakra" },
    f5 = ke({ direction: c5 }, l5, { components: GE, styles: u5, config: d5 });

function Ri() { return Ri = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e }, Ri.apply(this, arguments) }

function h5(e, t) {
    if (e == null) return {};
    var r = {},
        n = Object.keys(e),
        i, a;
    for (a = 0; a < n.length; a++) i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
    return r
}
var p5 = ["as", "viewBox", "color", "focusable", "children", "className", "__css"],
    Hh = { path: w.exports.createElement("g", { stroke: "currentColor", strokeWidth: "1.5" }, w.exports.createElement("path", { strokeLinecap: "round", fill: "none", d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25" }), w.exports.createElement("path", { fill: "currentColor", strokeLinecap: "round", d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0" }), w.exports.createElement("circle", { fill: "none", strokeMiterlimit: "10", cx: "12", cy: "12", r: "11.25" })), viewBox: "0 0 24 24" },
    v5 = q(function(e, t) {
        var r = e.as,
            n = e.viewBox,
            i = e.color,
            a = i === void 0 ? "currentColor" : i,
            o = e.focusable,
            l = o === void 0 ? !1 : o,
            s = e.children,
            u = e.className,
            c = e.__css,
            p = h5(e, p5),
            h = ze("chakra-icon", u),
            g = Ri({ w: "1em", h: "1em", display: "inline-block", lineHeight: "1em", flexShrink: 0, color: a }, c),
            y = { ref: t, focusable: l, className: h, __css: g },
            x = n != null ? n : Hh.viewBox;
        if (r && typeof r != "string") return w.exports.createElement(L.svg, Ri({ as: r }, y, p));
        var R = s != null ? s : Hh.path;
        return w.exports.createElement(L.svg, Ri({ verticalAlign: "middle", viewBox: x }, y, p), R)
    });

function Tr() { return Tr = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e }, Tr.apply(this, arguments) }

function a0(e, t) {
    if (e == null) return {};
    var r = {},
        n = Object.keys(e),
        i, a;
    for (a = 0; a < n.length; a++) i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
    return r
}

function m5(e) {
    var t = e.loading,
        r = e.src,
        n = e.srcSet,
        i = e.onLoad,
        a = e.onError,
        o = e.crossOrigin,
        l = e.sizes,
        s = e.ignoreFallback,
        u = w.exports.useState("pending"),
        c = u[0],
        p = u[1];
    w.exports.useEffect(function() { p(r ? "loading" : "pending") }, [r]);
    var h = w.exports.useRef(),
        g = w.exports.useCallback(function() {
            if (!!r) {
                y();
                var x = new Image;
                x.src = r, o && (x.crossOrigin = o), n && (x.srcset = n), l && (x.sizes = l), t && (x.loading = t), x.onload = function(R) { y(), p("loaded"), i == null || i(R) }, x.onerror = function(R) { y(), p("failed"), a == null || a(R) }, h.current = x
            }
        }, [r, o, n, l, i, a, t]),
        y = function() { h.current && (h.current.onload = null, h.current.onerror = null, h.current = null) };
    return d1(function() {
        if (!s) return c === "loading" && g(),
            function() { y() }
    }, [c, g, s]), s ? "loaded" : c
}
var g5 = ["htmlWidth", "htmlHeight", "alt"],
    y5 = ["fallbackSrc", "fallback", "src", "srcSet", "align", "fit", "loading", "ignoreFallback", "crossOrigin"],
    Ku = w.exports.forwardRef(function(e, t) {
        var r = e.htmlWidth,
            n = e.htmlHeight,
            i = e.alt,
            a = a0(e, g5);
        return w.exports.createElement("img", Tr({ width: r, height: n, ref: t, alt: i }, a))
    }),
    b5 = q(function(e, t) {
        var r = e.fallbackSrc,
            n = e.fallback,
            i = e.src,
            a = e.srcSet,
            o = e.align,
            l = e.fit,
            s = e.loading,
            u = e.ignoreFallback,
            c = e.crossOrigin,
            p = a0(e, y5),
            h = s != null || u || r === void 0 && n === void 0,
            g = m5(Tr({}, e, { ignoreFallback: h })),
            y = Tr({ ref: t, objectFit: l, objectPosition: o }, h ? p : yc(p, ["onError", "onLoad"]));
        return g !== "loaded" ? n || w.exports.createElement(L.img, Tr({ as: Ku, className: "chakra-image__placeholder", src: r }, y)) : w.exports.createElement(L.img, Tr({ as: Ku, src: i, srcSet: a, crossOrigin: c, loading: s, className: "chakra-image" }, y))
    }),
    S5 = q(function(e, t) { return w.exports.createElement(L.img, Tr({ ref: t, as: Ku, className: "chakra-image" }, e)) });
D && (b5.displayName = "Image");
var o0 = { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", height: "1px", width: "1px", margin: "-1px", padding: "0px", overflow: "hidden", whiteSpace: "nowrap", position: "absolute" },
    x5 = L("span", { baseStyle: o0 });
L("input", { baseStyle: o0 });

function tl() { return tl = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e }, tl.apply(this, arguments) }

function w5(e, t) {
    if (e == null) return {};
    var r = {},
        n = Object.keys(e),
        i, a;
    for (a = 0; a < n.length; a++) i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
    return r
}
var k5 = ["label", "thickness", "speed", "emptyColor", "className"],
    C5 = un({ "0%": { transform: "rotate(0deg)" }, "100%": { transform: "rotate(360deg)" } }),
    _5 = q(function(e, t) {
        var r = Ot("Spinner", e),
            n = Rt(e),
            i = n.label,
            a = i === void 0 ? "Loading..." : i,
            o = n.thickness,
            l = o === void 0 ? "2px" : o,
            s = n.speed,
            u = s === void 0 ? "0.45s" : s,
            c = n.emptyColor,
            p = c === void 0 ? "transparent" : c,
            h = n.className,
            g = w5(n, k5),
            y = ze("chakra-spinner", h),
            x = tl({ display: "inline-block", borderColor: "currentColor", borderStyle: "solid", borderRadius: "99999px", borderWidth: l, borderBottomColor: p, borderLeftColor: p, animation: C5 + " " + u + " linear infinite" }, r);
        return w.exports.createElement(L.div, tl({ ref: t, __css: x, className: y }, g), a && w.exports.createElement(x5, null, a))
    });

function fa(e, t) {
    if (e == null) return {};
    var r = {},
        n = Object.keys(e),
        i, a;
    for (a = 0; a < n.length; a++) i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
    return r
}

function Et() { return Et = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e }, Et.apply(this, arguments) }
var E5 = ["size", "colorScheme", "variant", "className", "spacing", "isAttached", "isDisabled"],
    l0 = aa({ strict: !1, name: "ButtonGroupContext" }),
    P5 = l0[0],
    T5 = l0[1],
    R5 = q(function(e, t) {
        var r = e.size,
            n = e.colorScheme,
            i = e.variant,
            a = e.className,
            o = e.spacing,
            l = o === void 0 ? "0.5rem" : o,
            s = e.isAttached,
            u = e.isDisabled,
            c = fa(e, E5),
            p = ze("chakra-button__group", a),
            h = w.exports.useMemo(function() { return { size: r, colorScheme: n, variant: i, isDisabled: u } }, [r, n, i, u]),
            g = { display: "inline-flex" };
        return s ? g = Et({}, g, { "> *:first-of-type:not(:last-of-type)": { borderEndRadius: 0 }, "> *:not(:first-of-type):not(:last-of-type)": { borderRadius: 0 }, "> *:not(:first-of-type):last-of-type": { borderStartRadius: 0 } }) : g = Et({}, g, { "& > *:not(style) ~ *:not(style)": { marginStart: l } }), w.exports.createElement(P5, { value: h }, w.exports.createElement(L.div, Et({ ref: t, role: "group", __css: g, className: p }, c)))
    });
D && (R5.displayName = "ButtonGroup");
var O5 = ["label", "placement", "spacing", "children", "className", "__css"],
    Gu = function(t) {
        var r = t.label,
            n = t.placement,
            i = t.spacing,
            a = i === void 0 ? "0.5rem" : i,
            o = t.children,
            l = o === void 0 ? w.exports.createElement(_5, { color: "currentColor", width: "1em", height: "1em" }) : o,
            s = t.className,
            u = t.__css,
            c = fa(t, O5),
            p = ze("chakra-button__spinner", s),
            h = n === "start" ? "marginEnd" : "marginStart",
            g = w.exports.useMemo(function() { var y; return Et((y = { display: "flex", alignItems: "center", position: r ? "relative" : "absolute" }, y[h] = r ? a : 0, y.fontSize = "1em", y.lineHeight = "normal", y), u) }, [u, r, h, a]);
        return w.exports.createElement(L.div, Et({ className: p }, c, { __css: g }), l)
    };
D && (Gu.displayName = "ButtonSpinner");
var $5 = ["children", "className"],
    Yu = function(t) {
        var r = t.children,
            n = t.className,
            i = fa(t, $5),
            a = w.exports.isValidElement(r) ? w.exports.cloneElement(r, { "aria-hidden": !0, focusable: !1 }) : r,
            o = ze("chakra-button__icon", n);
        return w.exports.createElement(L.span, Et({ display: "inline-flex", alignSelf: "center", flexShrink: 0 }, i, { className: o }), a)
    };
D && (Yu.displayName = "ButtonIcon");

function z5(e) {
    var t = w.exports.useState(!e),
        r = t[0],
        n = t[1],
        i = w.exports.useCallback(function(o) {!o || n(o.tagName === "BUTTON") }, []),
        a = r ? "button" : void 0;
    return { ref: i, type: a }
}
var A5 = ["isDisabled", "isLoading", "isActive", "isFullWidth", "children", "leftIcon", "rightIcon", "loadingText", "iconSpacing", "type", "spinner", "spinnerPlacement", "className", "as"],
    yd = q(function(e, t) {
        var r = T5(),
            n = Ot("Button", Et({}, r, e)),
            i = Rt(e),
            a = i.isDisabled,
            o = a === void 0 ? r == null ? void 0 : r.isDisabled : a,
            l = i.isLoading,
            s = i.isActive,
            u = i.isFullWidth,
            c = i.children,
            p = i.leftIcon,
            h = i.rightIcon,
            g = i.loadingText,
            y = i.iconSpacing,
            x = y === void 0 ? "0.5rem" : y,
            R = i.type,
            v = i.spinner,
            d = i.spinnerPlacement,
            m = d === void 0 ? "start" : d,
            C = i.className,
            E = i.as,
            P = fa(i, A5),
            _ = w.exports.useMemo(function() { var X, le = Gt({}, (X = n == null ? void 0 : n._focus) != null ? X : {}, { zIndex: 1 }); return Et({ display: "inline-flex", appearance: "none", alignItems: "center", justifyContent: "center", userSelect: "none", position: "relative", whiteSpace: "nowrap", verticalAlign: "middle", outline: "none", width: u ? "100%" : "auto" }, n, !!r && { _focus: le }) }, [n, r, u]),
            $ = z5(E),
            M = $.ref,
            A = $.type,
            K = { rightIcon: h, leftIcon: p, iconSpacing: x, children: c };
        return w.exports.createElement(L.button, Et({ disabled: o || l, ref: m1(t, M), as: E, type: R != null ? R : A, "data-active": af(s), "data-loading": af(l), __css: _, className: ze("chakra-button", C) }, P), l && m === "start" && w.exports.createElement(Gu, { className: "chakra-button__spinner--start", label: g, placement: "start", spacing: x }, v), l ? g || w.exports.createElement(L.span, { opacity: 0 }, w.exports.createElement(Uh, K)) : w.exports.createElement(Uh, K), l && m === "end" && w.exports.createElement(Gu, { className: "chakra-button__spinner--end", label: g, placement: "end", spacing: x }, v))
    });
D && (yd.displayName = "Button");

function Uh(e) {
    var t = e.leftIcon,
        r = e.rightIcon,
        n = e.children,
        i = e.iconSpacing;
    return w.exports.createElement(w.exports.Fragment, null, t && w.exports.createElement(Yu, { marginEnd: i }, t), n, r && w.exports.createElement(Yu, { marginStart: i }, r))
}
var F5 = ["icon", "children", "isRound", "aria-label"],
    I5 = q(function(e, t) {
        var r = e.icon,
            n = e.children,
            i = e.isRound,
            a = e["aria-label"],
            o = fa(e, F5),
            l = r || n,
            s = w.exports.isValidElement(l) ? w.exports.cloneElement(l, { "aria-hidden": !0, focusable: !1 }) : null;
        return w.exports.createElement(yd, Et({ padding: "0", borderRadius: i ? "full" : void 0, ref: t, "aria-label": a }, o), s)
    });
D && (I5.displayName = "IconButton");

function H() { return H = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e }, H.apply(this, arguments) }

function Ce(e, t) {
    if (e == null) return {};
    var r = {},
        n = Object.keys(e),
        i, a;
    for (a = 0; a < n.length; a++) i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
    return r
}
var M5 = ["ratio", "children", "className"],
    N5 = q(function(e, t) {
        var r = e.ratio,
            n = r === void 0 ? 4 / 3 : r,
            i = e.children,
            a = e.className,
            o = Ce(e, M5),
            l = w.exports.Children.only(i),
            s = ze("chakra-aspect-ratio", a);
        return w.exports.createElement(L.div, H({ ref: t, position: "relative", className: s, _before: { height: 0, content: '""', display: "block", paddingBottom: rn(n, function(u) { return 1 / u * 100 + "%" }) }, __css: { "& > *:not(style)": { overflow: "hidden", position: "absolute", top: "0", right: "0", bottom: "0", left: "0", display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }, "& > img, & > video": { objectFit: "cover" } } }, o), l)
    });
D && (N5.displayName = "AspectRatio");
var B5 = ["className"],
    L5 = q(function(e, t) {
        var r = Ot("Badge", e),
            n = Rt(e);
        n.className;
        var i = Ce(n, B5);
        return w.exports.createElement(L.span, H({ ref: t, className: ze("chakra-badge", e.className) }, i, { __css: H({ display: "inline-block", whiteSpace: "nowrap", verticalAlign: "middle" }, r) }))
    });
D && (L5.displayName = "Badge");
var D5 = ["size", "centerContent"],
    j5 = ["size"],
    ar = L("div");
D && (ar.displayName = "Box");
var s0 = q(function(e, t) {
    var r = e.size,
        n = e.centerContent,
        i = n === void 0 ? !0 : n,
        a = Ce(e, D5),
        o = i ? { display: "flex", alignItems: "center", justifyContent: "center" } : {};
    return w.exports.createElement(ar, H({ ref: t, boxSize: r, __css: H({}, o, { flexShrink: 0, flexGrow: 0 }) }, a))
});
D && (s0.displayName = "Square");
var W5 = q(function(e, t) {
    var r = e.size,
        n = Ce(e, j5);
    return w.exports.createElement(s0, H({ size: r, ref: t, borderRadius: "9999px" }, n))
});
D && (W5.displayName = "Circle");
var H5 = L("div", { baseStyle: { display: "flex", alignItems: "center", justifyContent: "center" } });
D && (H5.displayName = "Center");
var U5 = ["className"],
    Q5 = q(function(e, t) {
        var r = Ot("Code", e),
            n = Rt(e);
        n.className;
        var i = Ce(n, U5);
        return w.exports.createElement(L.code, H({ ref: t, className: ze("chakra-code", e.className) }, i, { __css: H({ display: "inline-block" }, r) }))
    });
D && (Q5.displayName = "Code");
var V5 = ["className", "centerContent"],
    q5 = q(function(e, t) {
        var r = Rt(e),
            n = r.className,
            i = r.centerContent,
            a = Ce(r, V5),
            o = Ot("Container", e);
        return w.exports.createElement(L.div, H({ ref: t, className: ze("chakra-container", n) }, a, { __css: H({}, o, i && { display: "flex", flexDirection: "column", alignItems: "center" }) }))
    });
D && (q5.displayName = "Container");
var K5 = ["borderLeftWidth", "borderBottomWidth", "borderTopWidth", "borderRightWidth", "borderWidth", "borderStyle", "borderColor"],
    G5 = ["className", "orientation", "__css"],
    Y5 = q(function(e, t) {
        var r = Ot("Divider", e),
            n = r.borderLeftWidth,
            i = r.borderBottomWidth,
            a = r.borderTopWidth,
            o = r.borderRightWidth,
            l = r.borderWidth,
            s = r.borderStyle,
            u = r.borderColor,
            c = Ce(r, K5),
            p = Rt(e),
            h = p.className,
            g = p.orientation,
            y = g === void 0 ? "horizontal" : g,
            x = p.__css,
            R = Ce(p, G5),
            v = { vertical: { borderLeftWidth: n || o || l || "1px", height: "100%" }, horizontal: { borderBottomWidth: i || a || l || "1px", width: "100%" } };
        return w.exports.createElement(L.hr, H({ ref: t, "aria-orientation": y }, R, { __css: H({}, c, { border: "0", borderColor: u, borderStyle: s }, v[y], x), className: ze("chakra-divider", h) }))
    });
D && (Y5.displayName = "Divider");
var X5 = ["direction", "align", "justify", "wrap", "basis", "grow", "shrink"],
    Z5 = q(function(e, t) {
        var r = e.direction,
            n = e.align,
            i = e.justify,
            a = e.wrap,
            o = e.basis,
            l = e.grow,
            s = e.shrink,
            u = Ce(e, X5),
            c = { display: "flex", flexDirection: r, alignItems: n, justifyContent: i, flexWrap: a, flexBasis: o, flexGrow: l, flexShrink: s };
        return w.exports.createElement(L.div, H({ ref: t, __css: c }, u))
    });
D && (Z5.displayName = "Flex");
var J5 = ["area", "templateAreas", "gap", "rowGap", "columnGap", "column", "row", "autoFlow", "autoRows", "templateRows", "autoColumns", "templateColumns"],
    u0 = q(function(e, t) {
        var r = e.area,
            n = e.templateAreas,
            i = e.gap,
            a = e.rowGap,
            o = e.columnGap,
            l = e.column,
            s = e.row,
            u = e.autoFlow,
            c = e.autoRows,
            p = e.templateRows,
            h = e.autoColumns,
            g = e.templateColumns,
            y = Ce(e, J5),
            x = { display: "grid", gridArea: r, gridTemplateAreas: n, gridGap: i, gridRowGap: a, gridColumnGap: o, gridAutoColumns: h, gridColumn: l, gridRow: s, gridAutoFlow: u, gridAutoRows: c, gridTemplateRows: p, gridTemplateColumns: g };
        return w.exports.createElement(L.div, H({ ref: t, __css: x }, y))
    });
D && (u0.displayName = "Grid");
var e3 = ["className"],
    t3 = q(function(e, t) {
        var r = Ot("Heading", e),
            n = Rt(e);
        n.className;
        var i = Ce(n, e3);
        return w.exports.createElement(L.h2, H({ ref: t, className: ze("chakra-heading", e.className) }, i, { __css: r }))
    });
D && (t3.displayName = "Heading");
var r3 = ["className"],
    n3 = q(function(e, t) {
        var r = Ot("Kbd", e),
            n = Rt(e),
            i = n.className,
            a = Ce(n, r3);
        return w.exports.createElement(L.kbd, H({ ref: t, className: ze("chakra-kbd", i) }, a, { __css: H({ fontFamily: "mono" }, r) }))
    });
D && (n3.displayName = "Kbd");
var i3 = ["className", "isExternal"],
    a3 = q(function(e, t) {
        var r = Ot("Link", e),
            n = Rt(e),
            i = n.className,
            a = n.isExternal,
            o = Ce(n, i3);
        return w.exports.createElement(L.a, H({ target: a ? "_blank" : void 0, rel: a ? "noopener" : void 0, ref: t, className: ze("chakra-link", i) }, o, { __css: r }))
    });
D && (a3.displayName = "Link");
var o3 = ["children", "styleType", "stylePosition", "spacing"],
    l3 = ["as"],
    s3 = ["as"],
    c0 = aa({ name: "StylesContext", errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in a `<*List />` " }),
    u3 = c0[0],
    d0 = c0[1],
    bd = q(function(e, t) {
        var r, n = pw("List", e),
            i = Rt(e),
            a = i.children,
            o = i.styleType,
            l = o === void 0 ? "none" : o,
            s = i.stylePosition,
            u = i.spacing,
            c = Ce(i, o3),
            p = Rp(a),
            h = "& > *:not(style) ~ *:not(style)",
            g = u ? (r = {}, r[h] = { mt: u }, r) : {};
        return w.exports.createElement(u3, { value: n }, w.exports.createElement(L.ul, H({ ref: t, listStyleType: l, listStylePosition: s, role: "list", __css: H({}, n.container, g) }, c), p))
    });
D && (bd.displayName = "List");
var c3 = q(function(e, t) { e.as; var r = Ce(e, l3); return w.exports.createElement(bd, H({ ref: t, as: "ol", styleType: "decimal", marginStart: "1em" }, r)) });
D && (c3.displayName = "OrderedList");
var d3 = q(function(e, t) { e.as; var r = Ce(e, s3); return w.exports.createElement(bd, H({ ref: t, as: "ul", styleType: "initial", marginStart: "1em" }, r)) });
D && (d3.displayName = "UnorderedList");
var f3 = q(function(e, t) { var r = d0(); return w.exports.createElement(L.li, H({ ref: t }, e, { __css: r.item })) });
D && (f3.displayName = "ListItem");
var h3 = q(function(e, t) { var r = d0(); return w.exports.createElement(v5, H({ ref: t, role: "presentation" }, e, { __css: r.icon })) });
D && (h3.displayName = "ListIcon");
var p3 = ["columns", "spacingX", "spacingY", "spacing", "minChildWidth"],
    v3 = q(function(e, t) {
        var r = e.columns,
            n = e.spacingX,
            i = e.spacingY,
            a = e.spacing,
            o = e.minChildWidth,
            l = Ce(e, p3),
            s = o ? g3(o) : y3(r);
        return w.exports.createElement(u0, H({ ref: t, gap: a, columnGap: n, rowGap: i, templateColumns: s }, l))
    });
D && (v3.displayName = "SimpleGrid");

function m3(e) { return On(e) ? e + "px" : e }

function g3(e) { return rn(e, function(t) { return _p(t) ? null : "repeat(auto-fit, minmax(" + m3(t) + ", 1fr))" }) }

function y3(e) { return rn(e, function(t) { return _p(t) ? null : "repeat(" + t + ", minmax(0, 1fr))" }) }
var b3 = L("div", { baseStyle: { flex: 1, justifySelf: "stretch", alignSelf: "stretch" } });
D && (b3.displayName = "Spacer");
var Xu = "& > *:not(style) ~ *:not(style)";

function S3(e) {
    var t, r = e.spacing,
        n = e.direction,
        i = { column: { marginTop: r, marginEnd: 0, marginBottom: 0, marginStart: 0 }, row: { marginTop: 0, marginEnd: 0, marginBottom: 0, marginStart: r }, "column-reverse": { marginTop: 0, marginEnd: 0, marginBottom: r, marginStart: 0 }, "row-reverse": { marginTop: 0, marginEnd: r, marginBottom: 0, marginStart: 0 } };
    return t = { flexDirection: n }, t[Xu] = rn(n, function(a) { return i[a] }), t
}

function x3(e) {
    var t = e.spacing,
        r = e.direction,
        n = { column: { my: t, mx: 0, borderLeftWidth: 0, borderBottomWidth: "1px" }, "column-reverse": { my: t, mx: 0, borderLeftWidth: 0, borderBottomWidth: "1px" }, row: { mx: t, my: 0, borderLeftWidth: "1px", borderBottomWidth: 0 }, "row-reverse": { mx: t, my: 0, borderLeftWidth: "1px", borderBottomWidth: 0 } };
    return { "&": rn(r, function(i) { return n[i] }) }
}
var w3 = ["isInline", "direction", "align", "justify", "spacing", "wrap", "children", "divider", "className", "shouldWrapChildren"],
    k3 = function(t) { return w.exports.createElement(L.div, H({ className: "chakra-stack__item" }, t, { __css: H({ display: "inline-block", flex: "0 0 auto", minWidth: 0 }, t.__css) })) },
    Sd = q(function(e, t) {
        var r, n = e.isInline,
            i = e.direction,
            a = e.align,
            o = e.justify,
            l = e.spacing,
            s = l === void 0 ? "0.5rem" : l,
            u = e.wrap,
            c = e.children,
            p = e.divider,
            h = e.className,
            g = e.shouldWrapChildren,
            y = Ce(e, w3),
            x = n ? "row" : i != null ? i : "column",
            R = w.exports.useMemo(function() { return S3({ direction: x, spacing: s }) }, [x, s]),
            v = w.exports.useMemo(function() { return x3({ spacing: s, direction: x }) }, [s, x]),
            d = !!p,
            m = !g && !d,
            C = Rp(c),
            E = m ? C : C.map(function(_, $) {
                var M = typeof _.key != "undefined" ? _.key : $,
                    A = $ + 1 === C.length,
                    K = w.exports.createElement(k3, { key: M }, _),
                    X = g ? K : _;
                if (!d) return X;
                var le = w.exports.cloneElement(p, { __css: v }),
                    Pe = A ? null : le;
                return w.exports.createElement(w.exports.Fragment, { key: M }, X, Pe)
            }),
            P = ze("chakra-stack", h);
        return w.exports.createElement(L.div, H({ ref: t, display: "flex", alignItems: a, justifyContent: o, flexDirection: R.flexDirection, flexWrap: u, className: P, __css: d ? {} : (r = {}, r[Xu] = R[Xu], r) }, y), E)
    });
D && (Sd.displayName = "Stack");
var C3 = q(function(e, t) { return w.exports.createElement(Sd, H({ align: "center" }, e, { direction: "row", ref: t })) });
D && (C3.displayName = "HStack");
var _3 = q(function(e, t) { return w.exports.createElement(Sd, H({ align: "center" }, e, { direction: "column", ref: t })) });
D && (_3.displayName = "VStack");
var E3 = ["className", "align", "decoration", "casing"],
    f0 = q(function(e, t) {
        var r = Ot("Text", e),
            n = Rt(e);
        n.className, n.align, n.decoration, n.casing;
        var i = Ce(n, E3),
            a = bc({ textAlign: e.align, textDecoration: e.decoration, textTransform: e.casing });
        return w.exports.createElement(L.p, H({ ref: t, className: ze("chakra-text", e.className) }, a, i, { __css: r }))
    });
D && (f0.displayName = "Text");
var P3 = ["spacing", "spacingX", "spacingY", "children", "justify", "direction", "align", "className", "shouldWrapChildren"],
    T3 = ["className"],
    R3 = q(function(e, t) {
        var r = e.spacing,
            n = r === void 0 ? "0.5rem" : r,
            i = e.spacingX,
            a = e.spacingY,
            o = e.children,
            l = e.justify,
            s = e.direction,
            u = e.align,
            c = e.className,
            p = e.shouldWrapChildren,
            h = Ce(e, P3),
            g = w.exports.useMemo(function() {
                var x = { spacingX: i, spacingY: a },
                    R = x.spacingX,
                    v = R === void 0 ? n : R,
                    d = x.spacingY,
                    m = d === void 0 ? n : d;
                return { "--chakra-wrap-x-spacing": function(E) { return rn(v, function(P) { return Nu("space", P)(E) }) }, "--chakra-wrap-y-spacing": function(E) { return rn(m, function(P) { return Nu("space", P)(E) }) }, "--wrap-x-spacing": "calc(var(--chakra-wrap-x-spacing) / 2)", "--wrap-y-spacing": "calc(var(--chakra-wrap-y-spacing) / 2)", display: "flex", flexWrap: "wrap", justifyContent: l, alignItems: u, flexDirection: s, listStyleType: "none", padding: "0", margin: "calc(var(--wrap-y-spacing) * -1) calc(var(--wrap-x-spacing) * -1)", "& > *:not(style)": { margin: "var(--wrap-y-spacing) var(--wrap-x-spacing)" } }
            }, [n, i, a, l, u, s]),
            y = p ? w.exports.Children.map(o, function(x, R) { return w.exports.createElement(h0, { key: R }, x) }) : o;
        return w.exports.createElement(L.div, H({ ref: t, className: ze("chakra-wrap", c) }, h), w.exports.createElement(L.ul, { className: "chakra-wrap__list", __css: g }, y))
    });
D && (R3.displayName = "Wrap");
var h0 = q(function(e, t) {
    var r = e.className,
        n = Ce(e, T3);
    return w.exports.createElement(L.li, H({ ref: t, __css: { display: "flex", alignItems: "flex-start" }, className: ze("chakra-wrap__listitem", r) }, n))
});
D && (h0.displayName = "WrapItem");

function Zu(e, t) { return Zu = Object.setPrototypeOf || function(n, i) { return n.__proto__ = i, n }, Zu(e, t) }

function ha(e, t) { e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Zu(e, t) }

function p0(e, t) {
    if (e == null) return {};
    var r = {},
        n = Object.keys(e),
        i, a;
    for (a = 0; a < n.length; a++) i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
    return r
}

function qn() { return qn = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e }, qn.apply(this, arguments) }
var O3 = un({ "0%": { strokeDasharray: "1, 400", strokeDashoffset: "0" }, "50%": { strokeDasharray: "400, 400", strokeDashoffset: "-100" }, "100%": { strokeDasharray: "400, 400", strokeDashoffset: "-260" } }),
    $3 = un({ "0%": { transform: "rotate(0deg)" }, "100%": { transform: "rotate(360deg)" } });
un({ "0%": { left: "-40%" }, "100%": { left: "100%" } });
un({ from: { backgroundPosition: "1rem 0" }, to: { backgroundPosition: "0 0" } });

function z3(e) {
    var t = e.value,
        r = t === void 0 ? 0 : t,
        n = e.min,
        i = e.max,
        a = e.valueText,
        o = e.getValueText,
        l = e.isIndeterminate,
        s = c1(r, n, i),
        u = function() { if (r != null) return Cp(o) ? o(r, s) : a };
    return { bind: { "data-indeterminate": l ? "" : void 0, "aria-valuemax": i, "aria-valuemin": n, "aria-valuenow": l ? void 0 : r, "aria-valuetext": u(), role: "progressbar" }, percent: s, value: r }
}
var A3 = ["size", "isIndeterminate"],
    F3 = ["size", "max", "min", "valueText", "getValueText", "value", "capIsRound", "children", "thickness", "color", "trackColor", "isIndeterminate"],
    Ju = function(t) { return w.exports.createElement(L.circle, qn({ cx: 50, cy: 50, r: 42, fill: "transparent" }, t)) };
D && (Ju.displayName = "Circle");
var v0 = function(t) {
    var r = t.size,
        n = t.isIndeterminate,
        i = p0(t, A3);
    return w.exports.createElement(L.svg, qn({ viewBox: "0 0 100 100", __css: { width: r, height: r, animation: n ? $3 + " 2s linear infinite" : void 0 } }, i))
};
D && (v0.displayName = "Shape");
var m0 = function(t) {
    var r, n = t.size,
        i = n === void 0 ? "48px" : n,
        a = t.max,
        o = a === void 0 ? 100 : a,
        l = t.min,
        s = l === void 0 ? 0 : l,
        u = t.valueText,
        c = t.getValueText,
        p = t.value,
        h = t.capIsRound,
        g = t.children,
        y = t.thickness,
        x = y === void 0 ? "10px" : y,
        R = t.color,
        v = R === void 0 ? "#0078d4" : R,
        d = t.trackColor,
        m = d === void 0 ? "#edebe9" : d,
        C = t.isIndeterminate,
        E = p0(t, F3),
        P = z3({ min: s, max: o, value: p, valueText: u, getValueText: c, isIndeterminate: C }),
        _ = C ? void 0 : ((r = P.percent) != null ? r : 0) * 2.64,
        $ = Zy(_) ? void 0 : _ + " " + (264 - _),
        M = C ? { css: { animation: O3 + " 1.5s linear infinite" } } : { strokeDashoffset: 66, strokeDasharray: $, transitionProperty: "stroke-dasharray, stroke", transitionDuration: "0.6s", transitionTimingFunction: "ease" },
        A = { display: "inline-block", position: "relative", verticalAlign: "middle", fontSize: i };
    return w.exports.createElement(L.div, qn({ className: "chakra-progress" }, P.bind, E, { __css: A }), w.exports.createElement(v0, { size: i, isIndeterminate: C }, w.exports.createElement(Ju, { stroke: m, strokeWidth: x, className: "chakra-progress__track" }), w.exports.createElement(Ju, qn({ stroke: v, strokeWidth: x, className: "chakra-progress__indicator", strokeLinecap: h ? "round" : void 0, opacity: P.value === 0 && !C ? 0 : void 0 }, M))), g)
};
D && (m0.displayName = "CircularProgress");
var g0 = L("div", { baseStyle: { fontSize: "0.24em", top: "50%", left: "50%", width: "100%", textAlign: "center", position: "absolute", transform: "translate(-50%, -50%)" } });
D && (g0.displayName = "CircularProgressLabel");

function rl() { return rl = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e }, rl.apply(this, arguments) }

function I3(e, t) {
    if (e == null) return {};
    var r = {},
        n = Object.keys(e),
        i, a;
    for (a = 0; a < n.length; a++) i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
    return r
}
var M3 = ["startColor", "endColor", "isLoaded", "fadeDuration", "speed", "className"],
    N3 = L("div", { baseStyle: { boxShadow: "none", backgroundClip: "padding-box", cursor: "default", color: "transparent", pointerEvents: "none", userSelect: "none", "&::before, &::after, *": { visibility: "hidden" } } }),
    B3 = un({ from: { opacity: 0 }, to: { opacity: 1 } }),
    L3 = function() { var t = w.exports.useRef(!0); return w.exports.useEffect(function() { t.current = !1 }, []), t.current },
    xd = q(function(e, t) {
        var r = Ot("Skeleton", e),
            n = L3(),
            i = Rt(e);
        i.startColor, i.endColor;
        var a = i.isLoaded,
            o = i.fadeDuration;
        i.speed;
        var l = i.className,
            s = I3(i, M3),
            u = g1(a),
            c = ze("chakra-skeleton", l);
        if (a) { var p = n || u ? "none" : B3 + " " + o + "s"; return w.exports.createElement(L.div, rl({ ref: t, className: c, __css: { animation: p } }, s)) }
        return w.exports.createElement(N3, rl({ ref: t, className: c }, s, { __css: r }))
    });
xd.defaultProps = { fadeDuration: .4, speed: .8 };
D && (xd.displayName = "Skeleton");
var y0 = mw;
y0.defaultProps = { theme: f5 };
var ec = {},
    Qh = wc.exports;
ec.createRoot = Qh.createRoot, ec.hydrateRoot = Qh.hydrateRoot;
var D3 = "/assets/frame_0_delay-0.1s.c8733322.jpg",
    j3 = "/assets/pngegg-modified.7439409a.png",
    W3 = "/assets/X2Download.com - HEHEHEHA clash royal (320 kbps).3e49fed6.mp3",
    pa = function() {
        function e() { this.listeners = [] }
        var t = e.prototype;
        return t.subscribe = function(n) {
            var i = this,
                a = n || function() {};
            return this.listeners.push(a), this.onSubscribe(),
                function() { i.listeners = i.listeners.filter(function(o) { return o !== a }), i.onUnsubscribe() }
        }, t.hasListeners = function() { return this.listeners.length > 0 }, t.onSubscribe = function() {}, t.onUnsubscribe = function() {}, e
    }(),
    nl = typeof window == "undefined";

function Ue() {}

function H3(e, t) { return typeof e == "function" ? e(t) : e }

function tc(e) { return typeof e == "number" && e >= 0 && e !== 1 / 0 }

function il(e) { return Array.isArray(e) ? e : [e] }

function b0(e, t) { return Math.max(e + (t || 0) - Date.now(), 0) }

function So(e, t, r) { return jl(e) ? typeof t == "function" ? Q({}, r, { queryKey: e, queryFn: t }) : Q({}, t, { queryKey: e }) : e }

function wr(e, t, r) { return jl(e) ? [Q({}, t, { queryKey: e }), r] : [e || {}, t] }

function U3(e, t) { if (e === !0 && t === !0 || e == null && t == null) return "all"; if (e === !1 && t === !1) return "none"; var r = e != null ? e : !t; return r ? "active" : "inactive" }

function Vh(e, t) {
    var r = e.active,
        n = e.exact,
        i = e.fetching,
        a = e.inactive,
        o = e.predicate,
        l = e.queryKey,
        s = e.stale;
    if (jl(l)) { if (n) { if (t.queryHash !== wd(l, t.options)) return !1 } else if (!al(t.queryKey, l)) return !1 }
    var u = U3(r, a);
    if (u === "none") return !1;
    if (u !== "all") { var c = t.isActive(); if (u === "active" && !c || u === "inactive" && c) return !1 }
    return !(typeof s == "boolean" && t.isStale() !== s || typeof i == "boolean" && t.isFetching() !== i || o && !o(t))
}

function qh(e, t) {
    var r = e.exact,
        n = e.fetching,
        i = e.predicate,
        a = e.mutationKey;
    if (jl(a)) { if (!t.options.mutationKey) return !1; if (r) { if (Zr(t.options.mutationKey) !== Zr(a)) return !1 } else if (!al(t.options.mutationKey, a)) return !1 }
    return !(typeof n == "boolean" && t.state.status === "loading" !== n || i && !i(t))
}

function wd(e, t) { var r = (t == null ? void 0 : t.queryKeyHashFn) || Zr; return r(e) }

function Zr(e) { var t = il(e); return Q3(t) }

function Q3(e) { return JSON.stringify(e, function(t, r) { return rc(r) ? Object.keys(r).sort().reduce(function(n, i) { return n[i] = r[i], n }, {}) : r }) }

function al(e, t) { return S0(il(e), il(t)) }

function S0(e, t) { return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some(function(r) { return !S0(e[r], t[r]) }) : !1 }

function ol(e, t) {
    if (e === t) return e;
    var r = Array.isArray(e) && Array.isArray(t);
    if (r || rc(e) && rc(t)) {
        for (var n = r ? e.length : Object.keys(e).length, i = r ? t : Object.keys(t), a = i.length, o = r ? [] : {}, l = 0, s = 0; s < a; s++) {
            var u = r ? s : i[s];
            o[u] = ol(e[u], t[u]), o[u] === e[u] && l++
        }
        return n === a && l === n ? e : o
    }
    return t
}

function V3(e, t) {
    if (e && !t || t && !e) return !1;
    for (var r in e)
        if (e[r] !== t[r]) return !1;
    return !0
}

function rc(e) { if (!Kh(e)) return !1; var t = e.constructor; if (typeof t == "undefined") return !0; var r = t.prototype; return !(!Kh(r) || !r.hasOwnProperty("isPrototypeOf")) }

function Kh(e) { return Object.prototype.toString.call(e) === "[object Object]" }

function jl(e) { return typeof e == "string" || Array.isArray(e) }

function q3(e) { return new Promise(function(t) { setTimeout(t, e) }) }

function Gh(e) { Promise.resolve().then(e).catch(function(t) { return setTimeout(function() { throw t }) }) }

function x0() { if (typeof AbortController == "function") return new AbortController }
var K3 = function(e) {
        ha(t, e);

        function t() {
            var n;
            return n = e.call(this) || this, n.setup = function(i) {
                var a;
                if (!nl && ((a = window) == null ? void 0 : a.addEventListener)) {
                    var o = function() { return i() };
                    return window.addEventListener("visibilitychange", o, !1), window.addEventListener("focus", o, !1),
                        function() { window.removeEventListener("visibilitychange", o), window.removeEventListener("focus", o) }
                }
            }, n
        }
        var r = t.prototype;
        return r.onSubscribe = function() { this.cleanup || this.setEventListener(this.setup) }, r.onUnsubscribe = function() {
            if (!this.hasListeners()) {
                var i;
                (i = this.cleanup) == null || i.call(this), this.cleanup = void 0
            }
        }, r.setEventListener = function(i) {
            var a, o = this;
            this.setup = i, (a = this.cleanup) == null || a.call(this), this.cleanup = i(function(l) { typeof l == "boolean" ? o.setFocused(l) : o.onFocus() })
        }, r.setFocused = function(i) { this.focused = i, i && this.onFocus() }, r.onFocus = function() { this.listeners.forEach(function(i) { i() }) }, r.isFocused = function() { return typeof this.focused == "boolean" ? this.focused : typeof document == "undefined" ? !0 : [void 0, "visible", "prerender"].includes(document.visibilityState) }, t
    }(pa),
    Oi = new K3,
    G3 = function(e) {
        ha(t, e);

        function t() {
            var n;
            return n = e.call(this) || this, n.setup = function(i) {
                var a;
                if (!nl && ((a = window) == null ? void 0 : a.addEventListener)) {
                    var o = function() { return i() };
                    return window.addEventListener("online", o, !1), window.addEventListener("offline", o, !1),
                        function() { window.removeEventListener("online", o), window.removeEventListener("offline", o) }
                }
            }, n
        }
        var r = t.prototype;
        return r.onSubscribe = function() { this.cleanup || this.setEventListener(this.setup) }, r.onUnsubscribe = function() {
            if (!this.hasListeners()) {
                var i;
                (i = this.cleanup) == null || i.call(this), this.cleanup = void 0
            }
        }, r.setEventListener = function(i) {
            var a, o = this;
            this.setup = i, (a = this.cleanup) == null || a.call(this), this.cleanup = i(function(l) { typeof l == "boolean" ? o.setOnline(l) : o.onOnline() })
        }, r.setOnline = function(i) { this.online = i, i && this.onOnline() }, r.onOnline = function() { this.listeners.forEach(function(i) { i() }) }, r.isOnline = function() { return typeof this.online == "boolean" ? this.online : typeof navigator == "undefined" || typeof navigator.onLine == "undefined" ? !0 : navigator.onLine }, t
    }(pa),
    xo = new G3;

function Y3(e) { return Math.min(1e3 * Math.pow(2, e), 3e4) }

function ll(e) { return typeof(e == null ? void 0 : e.cancel) == "function" }
var w0 = function(t) { this.revert = t == null ? void 0 : t.revert, this.silent = t == null ? void 0 : t.silent };

function wo(e) { return e instanceof w0 }
var k0 = function(t) {
        var r = this,
            n = !1,
            i, a, o, l;
        this.abort = t.abort, this.cancel = function(h) { return i == null ? void 0 : i(h) }, this.cancelRetry = function() { n = !0 }, this.continueRetry = function() { n = !1 }, this.continue = function() { return a == null ? void 0 : a() }, this.failureCount = 0, this.isPaused = !1, this.isResolved = !1, this.isTransportCancelable = !1, this.promise = new Promise(function(h, g) { o = h, l = g });
        var s = function(g) { r.isResolved || (r.isResolved = !0, t.onSuccess == null || t.onSuccess(g), a == null || a(), o(g)) },
            u = function(g) { r.isResolved || (r.isResolved = !0, t.onError == null || t.onError(g), a == null || a(), l(g)) },
            c = function() { return new Promise(function(g) { a = g, r.isPaused = !0, t.onPause == null || t.onPause() }).then(function() { a = void 0, r.isPaused = !1, t.onContinue == null || t.onContinue() }) },
            p = function h() {
                if (!r.isResolved) {
                    var g;
                    try { g = t.fn() } catch (y) { g = Promise.reject(y) }
                    i = function(x) { if (!r.isResolved && (u(new w0(x)), r.abort == null || r.abort(), ll(g))) try { g.cancel() } catch {} }, r.isTransportCancelable = ll(g), Promise.resolve(g).then(s).catch(function(y) {
                        var x, R;
                        if (!r.isResolved) {
                            var v = (x = t.retry) != null ? x : 3,
                                d = (R = t.retryDelay) != null ? R : Y3,
                                m = typeof d == "function" ? d(r.failureCount, y) : d,
                                C = v === !0 || typeof v == "number" && r.failureCount < v || typeof v == "function" && v(r.failureCount, y);
                            if (n || !C) { u(y); return }
                            r.failureCount++, t.onFail == null || t.onFail(r.failureCount, y), q3(m).then(function() { if (!Oi.isFocused() || !xo.isOnline()) return c() }).then(function() { n ? u(y) : h() })
                        }
                    })
                }
            };
        p()
    },
    X3 = function() {
        function e() { this.queue = [], this.transactions = 0, this.notifyFn = function(r) { r() }, this.batchNotifyFn = function(r) { r() } }
        var t = e.prototype;
        return t.batch = function(n) {
            var i;
            this.transactions++;
            try { i = n() } finally { this.transactions--, this.transactions || this.flush() }
            return i
        }, t.schedule = function(n) {
            var i = this;
            this.transactions ? this.queue.push(n) : Gh(function() { i.notifyFn(n) })
        }, t.batchCalls = function(n) {
            var i = this;
            return function() {
                for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++) o[l] = arguments[l];
                i.schedule(function() { n.apply(void 0, o) })
            }
        }, t.flush = function() {
            var n = this,
                i = this.queue;
            this.queue = [], i.length && Gh(function() { n.batchNotifyFn(function() { i.forEach(function(a) { n.notifyFn(a) }) }) })
        }, t.setNotifyFunction = function(n) { this.notifyFn = n }, t.setBatchNotifyFunction = function(n) { this.batchNotifyFn = n }, e
    }(),
    xe = new X3,
    C0 = console;

function sl() { return C0 }

function Z3(e) { C0 = e }
var J3 = function() {
        function e(r) { this.abortSignalConsumed = !1, this.hadObservers = !1, this.defaultOptions = r.defaultOptions, this.setOptions(r.options), this.observers = [], this.cache = r.cache, this.queryKey = r.queryKey, this.queryHash = r.queryHash, this.initialState = r.state || this.getDefaultState(this.options), this.state = this.initialState, this.meta = r.meta, this.scheduleGc() }
        var t = e.prototype;
        return t.setOptions = function(n) {
            var i;
            this.options = Q({}, this.defaultOptions, n), this.meta = n == null ? void 0 : n.meta, this.cacheTime = Math.max(this.cacheTime || 0, (i = this.options.cacheTime) != null ? i : 5 * 60 * 1e3)
        }, t.setDefaultOptions = function(n) { this.defaultOptions = n }, t.scheduleGc = function() {
            var n = this;
            this.clearGcTimeout(), tc(this.cacheTime) && (this.gcTimeout = setTimeout(function() { n.optionalRemove() }, this.cacheTime))
        }, t.clearGcTimeout = function() { clearTimeout(this.gcTimeout), this.gcTimeout = void 0 }, t.optionalRemove = function() { this.observers.length || (this.state.isFetching ? this.hadObservers && this.scheduleGc() : this.cache.remove(this)) }, t.setData = function(n, i) {
            var a, o, l = this.state.data,
                s = H3(n, l);
            return (a = (o = this.options).isDataEqual) != null && a.call(o, l, s) ? s = l : this.options.structuralSharing !== !1 && (s = ol(l, s)), this.dispatch({ data: s, type: "success", dataUpdatedAt: i == null ? void 0 : i.updatedAt }), s
        }, t.setState = function(n, i) { this.dispatch({ type: "setState", state: n, setStateOptions: i }) }, t.cancel = function(n) { var i, a = this.promise; return (i = this.retryer) == null || i.cancel(n), a ? a.then(Ue).catch(Ue) : Promise.resolve() }, t.destroy = function() { this.clearGcTimeout(), this.cancel({ silent: !0 }) }, t.reset = function() { this.destroy(), this.setState(this.initialState) }, t.isActive = function() { return this.observers.some(function(n) { return n.options.enabled !== !1 }) }, t.isFetching = function() { return this.state.isFetching }, t.isStale = function() { return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some(function(n) { return n.getCurrentResult().isStale }) }, t.isStaleByTime = function(n) { return n === void 0 && (n = 0), this.state.isInvalidated || !this.state.dataUpdatedAt || !b0(this.state.dataUpdatedAt, n) }, t.onFocus = function() {
            var n, i = this.observers.find(function(a) { return a.shouldFetchOnWindowFocus() });
            i && i.refetch(), (n = this.retryer) == null || n.continue()
        }, t.onOnline = function() {
            var n, i = this.observers.find(function(a) { return a.shouldFetchOnReconnect() });
            i && i.refetch(), (n = this.retryer) == null || n.continue()
        }, t.addObserver = function(n) { this.observers.indexOf(n) === -1 && (this.observers.push(n), this.hadObservers = !0, this.clearGcTimeout(), this.cache.notify({ type: "observerAdded", query: this, observer: n })) }, t.removeObserver = function(n) { this.observers.indexOf(n) !== -1 && (this.observers = this.observers.filter(function(i) { return i !== n }), this.observers.length || (this.retryer && (this.retryer.isTransportCancelable || this.abortSignalConsumed ? this.retryer.cancel({ revert: !0 }) : this.retryer.cancelRetry()), this.cacheTime ? this.scheduleGc() : this.cache.remove(this)), this.cache.notify({ type: "observerRemoved", query: this, observer: n })) }, t.getObserversCount = function() { return this.observers.length }, t.invalidate = function() { this.state.isInvalidated || this.dispatch({ type: "invalidate" }) }, t.fetch = function(n, i) {
            var a = this,
                o, l, s;
            if (this.state.isFetching) {
                if (this.state.dataUpdatedAt && (i == null ? void 0 : i.cancelRefetch)) this.cancel({ silent: !0 });
                else if (this.promise) { var u; return (u = this.retryer) == null || u.continueRetry(), this.promise }
            }
            if (n && this.setOptions(n), !this.options.queryFn) {
                var c = this.observers.find(function(d) { return d.options.queryFn });
                c && this.setOptions(c.options)
            }
            var p = il(this.queryKey),
                h = x0(),
                g = { queryKey: p, pageParam: void 0, meta: this.meta };
            Object.defineProperty(g, "signal", { enumerable: !0, get: function() { if (h) return a.abortSignalConsumed = !0, h.signal } });
            var y = function() { return a.options.queryFn ? (a.abortSignalConsumed = !1, a.options.queryFn(g)) : Promise.reject("Missing queryFn") },
                x = { fetchOptions: i, options: this.options, queryKey: p, state: this.state, fetchFn: y, meta: this.meta };
            if ((o = this.options.behavior) != null && o.onFetch) {
                var R;
                (R = this.options.behavior) == null || R.onFetch(x)
            }
            if (this.revertState = this.state, !this.state.isFetching || this.state.fetchMeta !== ((l = x.fetchOptions) == null ? void 0 : l.meta)) {
                var v;
                this.dispatch({ type: "fetch", meta: (v = x.fetchOptions) == null ? void 0 : v.meta })
            }
            return this.retryer = new k0({ fn: x.fetchFn, abort: h == null || (s = h.abort) == null ? void 0 : s.bind(h), onSuccess: function(m) { a.setData(m), a.cache.config.onSuccess == null || a.cache.config.onSuccess(m, a), a.cacheTime === 0 && a.optionalRemove() }, onError: function(m) { wo(m) && m.silent || a.dispatch({ type: "error", error: m }), wo(m) || (a.cache.config.onError == null || a.cache.config.onError(m, a), sl().error(m)), a.cacheTime === 0 && a.optionalRemove() }, onFail: function() { a.dispatch({ type: "failed" }) }, onPause: function() { a.dispatch({ type: "pause" }) }, onContinue: function() { a.dispatch({ type: "continue" }) }, retry: x.options.retry, retryDelay: x.options.retryDelay }), this.promise = this.retryer.promise, this.promise
        }, t.dispatch = function(n) {
            var i = this;
            this.state = this.reducer(this.state, n), xe.batch(function() { i.observers.forEach(function(a) { a.onQueryUpdate(n) }), i.cache.notify({ query: i, type: "queryUpdated", action: n }) })
        }, t.getDefaultState = function(n) {
            var i = typeof n.initialData == "function" ? n.initialData() : n.initialData,
                a = typeof n.initialData != "undefined",
                o = a ? typeof n.initialDataUpdatedAt == "function" ? n.initialDataUpdatedAt() : n.initialDataUpdatedAt : 0,
                l = typeof i != "undefined";
            return { data: i, dataUpdateCount: 0, dataUpdatedAt: l ? o != null ? o : Date.now() : 0, error: null, errorUpdateCount: 0, errorUpdatedAt: 0, fetchFailureCount: 0, fetchMeta: null, isFetching: !1, isInvalidated: !1, isPaused: !1, status: l ? "success" : "idle" }
        }, t.reducer = function(n, i) {
            var a, o;
            switch (i.type) {
                case "failed":
                    return Q({}, n, { fetchFailureCount: n.fetchFailureCount + 1 });
                case "pause":
                    return Q({}, n, { isPaused: !0 });
                case "continue":
                    return Q({}, n, { isPaused: !1 });
                case "fetch":
                    return Q({}, n, { fetchFailureCount: 0, fetchMeta: (a = i.meta) != null ? a : null, isFetching: !0, isPaused: !1 }, !n.dataUpdatedAt && { error: null, status: "loading" });
                case "success":
                    return Q({}, n, { data: i.data, dataUpdateCount: n.dataUpdateCount + 1, dataUpdatedAt: (o = i.dataUpdatedAt) != null ? o : Date.now(), error: null, fetchFailureCount: 0, isFetching: !1, isInvalidated: !1, isPaused: !1, status: "success" });
                case "error":
                    var l = i.error;
                    return wo(l) && l.revert && this.revertState ? Q({}, this.revertState) : Q({}, n, { error: l, errorUpdateCount: n.errorUpdateCount + 1, errorUpdatedAt: Date.now(), fetchFailureCount: n.fetchFailureCount + 1, isFetching: !1, isPaused: !1, status: "error" });
                case "invalidate":
                    return Q({}, n, { isInvalidated: !0 });
                case "setState":
                    return Q({}, n, i.state);
                default:
                    return n
            }
        }, e
    }(),
    eP = function(e) {
        ha(t, e);

        function t(n) { var i; return i = e.call(this) || this, i.config = n || {}, i.queries = [], i.queriesMap = {}, i }
        var r = t.prototype;
        return r.build = function(i, a, o) {
            var l, s = a.queryKey,
                u = (l = a.queryHash) != null ? l : wd(s, a),
                c = this.get(u);
            return c || (c = new J3({ cache: this, queryKey: s, queryHash: u, options: i.defaultQueryOptions(a), state: o, defaultOptions: i.getQueryDefaults(s), meta: a.meta }), this.add(c)), c
        }, r.add = function(i) { this.queriesMap[i.queryHash] || (this.queriesMap[i.queryHash] = i, this.queries.push(i), this.notify({ type: "queryAdded", query: i })) }, r.remove = function(i) {
            var a = this.queriesMap[i.queryHash];
            a && (i.destroy(), this.queries = this.queries.filter(function(o) { return o !== i }), a === i && delete this.queriesMap[i.queryHash], this.notify({ type: "queryRemoved", query: i }))
        }, r.clear = function() {
            var i = this;
            xe.batch(function() { i.queries.forEach(function(a) { i.remove(a) }) })
        }, r.get = function(i) { return this.queriesMap[i] }, r.getAll = function() { return this.queries }, r.find = function(i, a) {
            var o = wr(i, a),
                l = o[0];
            return typeof l.exact == "undefined" && (l.exact = !0), this.queries.find(function(s) { return Vh(l, s) })
        }, r.findAll = function(i, a) {
            var o = wr(i, a),
                l = o[0];
            return Object.keys(l).length > 0 ? this.queries.filter(function(s) { return Vh(l, s) }) : this.queries
        }, r.notify = function(i) {
            var a = this;
            xe.batch(function() { a.listeners.forEach(function(o) { o(i) }) })
        }, r.onFocus = function() {
            var i = this;
            xe.batch(function() { i.queries.forEach(function(a) { a.onFocus() }) })
        }, r.onOnline = function() {
            var i = this;
            xe.batch(function() { i.queries.forEach(function(a) { a.onOnline() }) })
        }, t
    }(pa),
    tP = function() {
        function e(r) { this.options = Q({}, r.defaultOptions, r.options), this.mutationId = r.mutationId, this.mutationCache = r.mutationCache, this.observers = [], this.state = r.state || rP(), this.meta = r.meta }
        var t = e.prototype;
        return t.setState = function(n) { this.dispatch({ type: "setState", state: n }) }, t.addObserver = function(n) { this.observers.indexOf(n) === -1 && this.observers.push(n) }, t.removeObserver = function(n) { this.observers = this.observers.filter(function(i) { return i !== n }) }, t.cancel = function() { return this.retryer ? (this.retryer.cancel(), this.retryer.promise.then(Ue).catch(Ue)) : Promise.resolve() }, t.continue = function() { return this.retryer ? (this.retryer.continue(), this.retryer.promise) : this.execute() }, t.execute = function() {
            var n = this,
                i, a = this.state.status === "loading",
                o = Promise.resolve();
            return a || (this.dispatch({ type: "loading", variables: this.options.variables }), o = o.then(function() { n.mutationCache.config.onMutate == null || n.mutationCache.config.onMutate(n.state.variables, n) }).then(function() { return n.options.onMutate == null ? void 0 : n.options.onMutate(n.state.variables) }).then(function(l) { l !== n.state.context && n.dispatch({ type: "loading", context: l, variables: n.state.variables }) })), o.then(function() { return n.executeMutation() }).then(function(l) { i = l, n.mutationCache.config.onSuccess == null || n.mutationCache.config.onSuccess(i, n.state.variables, n.state.context, n) }).then(function() { return n.options.onSuccess == null ? void 0 : n.options.onSuccess(i, n.state.variables, n.state.context) }).then(function() { return n.options.onSettled == null ? void 0 : n.options.onSettled(i, null, n.state.variables, n.state.context) }).then(function() { return n.dispatch({ type: "success", data: i }), i }).catch(function(l) { return n.mutationCache.config.onError == null || n.mutationCache.config.onError(l, n.state.variables, n.state.context, n), sl().error(l), Promise.resolve().then(function() { return n.options.onError == null ? void 0 : n.options.onError(l, n.state.variables, n.state.context) }).then(function() { return n.options.onSettled == null ? void 0 : n.options.onSettled(void 0, l, n.state.variables, n.state.context) }).then(function() { throw n.dispatch({ type: "error", error: l }), l }) })
        }, t.executeMutation = function() {
            var n = this,
                i;
            return this.retryer = new k0({ fn: function() { return n.options.mutationFn ? n.options.mutationFn(n.state.variables) : Promise.reject("No mutationFn found") }, onFail: function() { n.dispatch({ type: "failed" }) }, onPause: function() { n.dispatch({ type: "pause" }) }, onContinue: function() { n.dispatch({ type: "continue" }) }, retry: (i = this.options.retry) != null ? i : 0, retryDelay: this.options.retryDelay }), this.retryer.promise
        }, t.dispatch = function(n) {
            var i = this;
            this.state = nP(this.state, n), xe.batch(function() { i.observers.forEach(function(a) { a.onMutationUpdate(n) }), i.mutationCache.notify(i) })
        }, e
    }();

function rP() { return { context: void 0, data: void 0, error: null, failureCount: 0, isPaused: !1, status: "idle", variables: void 0 } }

function nP(e, t) {
    switch (t.type) {
        case "failed":
            return Q({}, e, { failureCount: e.failureCount + 1 });
        case "pause":
            return Q({}, e, { isPaused: !0 });
        case "continue":
            return Q({}, e, { isPaused: !1 });
        case "loading":
            return Q({}, e, { context: t.context, data: void 0, error: null, isPaused: !1, status: "loading", variables: t.variables });
        case "success":
            return Q({}, e, { data: t.data, error: null, status: "success", isPaused: !1 });
        case "error":
            return Q({}, e, { data: void 0, error: t.error, failureCount: e.failureCount + 1, isPaused: !1, status: "error" });
        case "setState":
            return Q({}, e, t.state);
        default:
            return e
    }
}
var iP = function(e) {
    ha(t, e);

    function t(n) { var i; return i = e.call(this) || this, i.config = n || {}, i.mutations = [], i.mutationId = 0, i }
    var r = t.prototype;
    return r.build = function(i, a, o) { var l = new tP({ mutationCache: this, mutationId: ++this.mutationId, options: i.defaultMutationOptions(a), state: o, defaultOptions: a.mutationKey ? i.getMutationDefaults(a.mutationKey) : void 0, meta: a.meta }); return this.add(l), l }, r.add = function(i) { this.mutations.push(i), this.notify(i) }, r.remove = function(i) { this.mutations = this.mutations.filter(function(a) { return a !== i }), i.cancel(), this.notify(i) }, r.clear = function() {
        var i = this;
        xe.batch(function() { i.mutations.forEach(function(a) { i.remove(a) }) })
    }, r.getAll = function() { return this.mutations }, r.find = function(i) { return typeof i.exact == "undefined" && (i.exact = !0), this.mutations.find(function(a) { return qh(i, a) }) }, r.findAll = function(i) { return this.mutations.filter(function(a) { return qh(i, a) }) }, r.notify = function(i) {
        var a = this;
        xe.batch(function() { a.listeners.forEach(function(o) { o(i) }) })
    }, r.onFocus = function() { this.resumePausedMutations() }, r.onOnline = function() { this.resumePausedMutations() }, r.resumePausedMutations = function() { var i = this.mutations.filter(function(a) { return a.state.isPaused }); return xe.batch(function() { return i.reduce(function(a, o) { return a.then(function() { return o.continue().catch(Ue) }) }, Promise.resolve()) }) }, t
}(pa);

function aP() {
    return {
        onFetch: function(t) {
            t.fetchFn = function() {
                var r, n, i, a, o, l, s = (r = t.fetchOptions) == null || (n = r.meta) == null ? void 0 : n.refetchPage,
                    u = (i = t.fetchOptions) == null || (a = i.meta) == null ? void 0 : a.fetchMore,
                    c = u == null ? void 0 : u.pageParam,
                    p = (u == null ? void 0 : u.direction) === "forward",
                    h = (u == null ? void 0 : u.direction) === "backward",
                    g = ((o = t.state.data) == null ? void 0 : o.pages) || [],
                    y = ((l = t.state.data) == null ? void 0 : l.pageParams) || [],
                    x = x0(),
                    R = x == null ? void 0 : x.signal,
                    v = y,
                    d = !1,
                    m = t.options.queryFn || function() { return Promise.reject("Missing queryFn") },
                    C = function(Pe, qe, Ae, $t) { return v = $t ? [qe].concat(v) : [].concat(v, [qe]), $t ? [Ae].concat(Pe) : [].concat(Pe, [Ae]) },
                    E = function(Pe, qe, Ae, $t) {
                        if (d) return Promise.reject("Cancelled");
                        if (typeof Ae == "undefined" && !qe && Pe.length) return Promise.resolve(Pe);
                        var z = { queryKey: t.queryKey, signal: R, pageParam: Ae, meta: t.meta },
                            N = m(z),
                            B = Promise.resolve(N).then(function(be) { return C(Pe, Ae, be, $t) });
                        if (ll(N)) {
                            var ne = B;
                            ne.cancel = N.cancel
                        }
                        return B
                    },
                    P;
                if (!g.length) P = E([]);
                else if (p) {
                    var _ = typeof c != "undefined",
                        $ = _ ? c : Yh(t.options, g);
                    P = E(g, _, $)
                } else if (h) {
                    var M = typeof c != "undefined",
                        A = M ? c : oP(t.options, g);
                    P = E(g, M, A, !0)
                } else(function() {
                    v = [];
                    var le = typeof t.options.getNextPageParam == "undefined",
                        Pe = s && g[0] ? s(g[0], 0, g) : !0;
                    P = Pe ? E([], le, y[0]) : Promise.resolve(C([], y[0], g[0]));
                    for (var qe = function(z) { P = P.then(function(N) { var B = s && g[z] ? s(g[z], z, g) : !0; if (B) { var ne = le ? y[z] : Yh(t.options, N); return E(N, le, ne) } return Promise.resolve(C(N, y[z], g[z])) }) }, Ae = 1; Ae < g.length; Ae++) qe(Ae)
                })();
                var K = P.then(function(le) { return { pages: le, pageParams: v } }),
                    X = K;
                return X.cancel = function() { d = !0, x == null || x.abort(), ll(P) && P.cancel() }, K
            }
        }
    }
}

function Yh(e, t) { return e.getNextPageParam == null ? void 0 : e.getNextPageParam(t[t.length - 1], t) }

function oP(e, t) { return e.getPreviousPageParam == null ? void 0 : e.getPreviousPageParam(t[0], t) }
var lP = function() {
        function e(r) { r === void 0 && (r = {}), this.queryCache = r.queryCache || new eP, this.mutationCache = r.mutationCache || new iP, this.defaultOptions = r.defaultOptions || {}, this.queryDefaults = [], this.mutationDefaults = [] }
        var t = e.prototype;
        return t.mount = function() {
            var n = this;
            this.unsubscribeFocus = Oi.subscribe(function() { Oi.isFocused() && xo.isOnline() && (n.mutationCache.onFocus(), n.queryCache.onFocus()) }), this.unsubscribeOnline = xo.subscribe(function() { Oi.isFocused() && xo.isOnline() && (n.mutationCache.onOnline(), n.queryCache.onOnline()) })
        }, t.unmount = function() {
            var n, i;
            (n = this.unsubscribeFocus) == null || n.call(this), (i = this.unsubscribeOnline) == null || i.call(this)
        }, t.isFetching = function(n, i) {
            var a = wr(n, i),
                o = a[0];
            return o.fetching = !0, this.queryCache.findAll(o).length
        }, t.isMutating = function(n) { return this.mutationCache.findAll(Q({}, n, { fetching: !0 })).length }, t.getQueryData = function(n, i) { var a; return (a = this.queryCache.find(n, i)) == null ? void 0 : a.state.data }, t.getQueriesData = function(n) {
            return this.getQueryCache().findAll(n).map(function(i) {
                var a = i.queryKey,
                    o = i.state,
                    l = o.data;
                return [a, l]
            })
        }, t.setQueryData = function(n, i, a) {
            var o = So(n),
                l = this.defaultQueryOptions(o);
            return this.queryCache.build(this, l).setData(i, a)
        }, t.setQueriesData = function(n, i, a) { var o = this; return xe.batch(function() { return o.getQueryCache().findAll(n).map(function(l) { var s = l.queryKey; return [s, o.setQueryData(s, i, a)] }) }) }, t.getQueryState = function(n, i) { var a; return (a = this.queryCache.find(n, i)) == null ? void 0 : a.state }, t.removeQueries = function(n, i) {
            var a = wr(n, i),
                o = a[0],
                l = this.queryCache;
            xe.batch(function() { l.findAll(o).forEach(function(s) { l.remove(s) }) })
        }, t.resetQueries = function(n, i, a) {
            var o = this,
                l = wr(n, i, a),
                s = l[0],
                u = l[1],
                c = this.queryCache,
                p = Q({}, s, { active: !0 });
            return xe.batch(function() { return c.findAll(s).forEach(function(h) { h.reset() }), o.refetchQueries(p, u) })
        }, t.cancelQueries = function(n, i, a) {
            var o = this,
                l = wr(n, i, a),
                s = l[0],
                u = l[1],
                c = u === void 0 ? {} : u;
            typeof c.revert == "undefined" && (c.revert = !0);
            var p = xe.batch(function() { return o.queryCache.findAll(s).map(function(h) { return h.cancel(c) }) });
            return Promise.all(p).then(Ue).catch(Ue)
        }, t.invalidateQueries = function(n, i, a) {
            var o, l, s, u = this,
                c = wr(n, i, a),
                p = c[0],
                h = c[1],
                g = Q({}, p, { active: (o = (l = p.refetchActive) != null ? l : p.active) != null ? o : !0, inactive: (s = p.refetchInactive) != null ? s : !1 });
            return xe.batch(function() { return u.queryCache.findAll(p).forEach(function(y) { y.invalidate() }), u.refetchQueries(g, h) })
        }, t.refetchQueries = function(n, i, a) {
            var o = this,
                l = wr(n, i, a),
                s = l[0],
                u = l[1],
                c = xe.batch(function() { return o.queryCache.findAll(s).map(function(h) { return h.fetch(void 0, Q({}, u, { meta: { refetchPage: s == null ? void 0 : s.refetchPage } })) }) }),
                p = Promise.all(c).then(Ue);
            return u != null && u.throwOnError || (p = p.catch(Ue)), p
        }, t.fetchQuery = function(n, i, a) {
            var o = So(n, i, a),
                l = this.defaultQueryOptions(o);
            typeof l.retry == "undefined" && (l.retry = !1);
            var s = this.queryCache.build(this, l);
            return s.isStaleByTime(l.staleTime) ? s.fetch(l) : Promise.resolve(s.state.data)
        }, t.prefetchQuery = function(n, i, a) { return this.fetchQuery(n, i, a).then(Ue).catch(Ue) }, t.fetchInfiniteQuery = function(n, i, a) { var o = So(n, i, a); return o.behavior = aP(), this.fetchQuery(o) }, t.prefetchInfiniteQuery = function(n, i, a) { return this.fetchInfiniteQuery(n, i, a).then(Ue).catch(Ue) }, t.cancelMutations = function() {
            var n = this,
                i = xe.batch(function() { return n.mutationCache.getAll().map(function(a) { return a.cancel() }) });
            return Promise.all(i).then(Ue).catch(Ue)
        }, t.resumePausedMutations = function() { return this.getMutationCache().resumePausedMutations() }, t.executeMutation = function(n) { return this.mutationCache.build(this, n).execute() }, t.getQueryCache = function() { return this.queryCache }, t.getMutationCache = function() { return this.mutationCache }, t.getDefaultOptions = function() { return this.defaultOptions }, t.setDefaultOptions = function(n) { this.defaultOptions = n }, t.setQueryDefaults = function(n, i) {
            var a = this.queryDefaults.find(function(o) { return Zr(n) === Zr(o.queryKey) });
            a ? a.defaultOptions = i : this.queryDefaults.push({ queryKey: n, defaultOptions: i })
        }, t.getQueryDefaults = function(n) { var i; return n ? (i = this.queryDefaults.find(function(a) { return al(n, a.queryKey) })) == null ? void 0 : i.defaultOptions : void 0 }, t.setMutationDefaults = function(n, i) {
            var a = this.mutationDefaults.find(function(o) { return Zr(n) === Zr(o.mutationKey) });
            a ? a.defaultOptions = i : this.mutationDefaults.push({ mutationKey: n, defaultOptions: i })
        }, t.getMutationDefaults = function(n) { var i; return n ? (i = this.mutationDefaults.find(function(a) { return al(n, a.mutationKey) })) == null ? void 0 : i.defaultOptions : void 0 }, t.defaultQueryOptions = function(n) { if (n != null && n._defaulted) return n; var i = Q({}, this.defaultOptions.queries, this.getQueryDefaults(n == null ? void 0 : n.queryKey), n, { _defaulted: !0 }); return !i.queryHash && i.queryKey && (i.queryHash = wd(i.queryKey, i)), i }, t.defaultQueryObserverOptions = function(n) { return this.defaultQueryOptions(n) }, t.defaultMutationOptions = function(n) { return n != null && n._defaulted ? n : Q({}, this.defaultOptions.mutations, this.getMutationDefaults(n == null ? void 0 : n.mutationKey), n, { _defaulted: !0 }) }, t.clear = function() { this.queryCache.clear(), this.mutationCache.clear() }, e
    }(),
    sP = function(e) {
        ha(t, e);

        function t(n, i) { var a; return a = e.call(this) || this, a.client = n, a.options = i, a.trackedProps = [], a.selectError = null, a.bindMethods(), a.setOptions(i), a }
        var r = t.prototype;
        return r.bindMethods = function() { this.remove = this.remove.bind(this), this.refetch = this.refetch.bind(this) }, r.onSubscribe = function() { this.listeners.length === 1 && (this.currentQuery.addObserver(this), Xh(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers()) }, r.onUnsubscribe = function() { this.listeners.length || this.destroy() }, r.shouldFetchOnReconnect = function() { return nc(this.currentQuery, this.options, this.options.refetchOnReconnect) }, r.shouldFetchOnWindowFocus = function() { return nc(this.currentQuery, this.options, this.options.refetchOnWindowFocus) }, r.destroy = function() { this.listeners = [], this.clearTimers(), this.currentQuery.removeObserver(this) }, r.setOptions = function(i, a) {
            var o = this.options,
                l = this.currentQuery;
            if (this.options = this.client.defaultQueryObserverOptions(i), typeof this.options.enabled != "undefined" && typeof this.options.enabled != "boolean") throw new Error("Expected enabled to be a boolean");
            this.options.queryKey || (this.options.queryKey = o.queryKey), this.updateQuery();
            var s = this.hasListeners();
            s && Zh(this.currentQuery, l, this.options, o) && this.executeFetch(), this.updateResult(a), s && (this.currentQuery !== l || this.options.enabled !== o.enabled || this.options.staleTime !== o.staleTime) && this.updateStaleTimeout();
            var u = this.computeRefetchInterval();
            s && (this.currentQuery !== l || this.options.enabled !== o.enabled || u !== this.currentRefetchInterval) && this.updateRefetchInterval(u)
        }, r.getOptimisticResult = function(i) {
            var a = this.client.defaultQueryObserverOptions(i),
                o = this.client.getQueryCache().build(this.client, a);
            return this.createResult(o, a)
        }, r.getCurrentResult = function() { return this.currentResult }, r.trackResult = function(i, a) {
            var o = this,
                l = {},
                s = function(c) { o.trackedProps.includes(c) || o.trackedProps.push(c) };
            return Object.keys(i).forEach(function(u) { Object.defineProperty(l, u, { configurable: !1, enumerable: !0, get: function() { return s(u), i[u] } }) }), (a.useErrorBoundary || a.suspense) && s("error"), l
        }, r.getNextResult = function(i) { var a = this; return new Promise(function(o, l) { var s = a.subscribe(function(u) { u.isFetching || (s(), u.isError && (i == null ? void 0 : i.throwOnError) ? l(u.error) : o(u)) }) }) }, r.getCurrentQuery = function() { return this.currentQuery }, r.remove = function() { this.client.getQueryCache().remove(this.currentQuery) }, r.refetch = function(i) { return this.fetch(Q({}, i, { meta: { refetchPage: i == null ? void 0 : i.refetchPage } })) }, r.fetchOptimistic = function(i) {
            var a = this,
                o = this.client.defaultQueryObserverOptions(i),
                l = this.client.getQueryCache().build(this.client, o);
            return l.fetch().then(function() { return a.createResult(l, o) })
        }, r.fetch = function(i) { var a = this; return this.executeFetch(i).then(function() { return a.updateResult(), a.currentResult }) }, r.executeFetch = function(i) { this.updateQuery(); var a = this.currentQuery.fetch(this.options, i); return i != null && i.throwOnError || (a = a.catch(Ue)), a }, r.updateStaleTimeout = function() {
            var i = this;
            if (this.clearStaleTimeout(), !(nl || this.currentResult.isStale || !tc(this.options.staleTime))) {
                var a = b0(this.currentResult.dataUpdatedAt, this.options.staleTime),
                    o = a + 1;
                this.staleTimeoutId = setTimeout(function() { i.currentResult.isStale || i.updateResult() }, o)
            }
        }, r.computeRefetchInterval = function() { var i; return typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : (i = this.options.refetchInterval) != null ? i : !1 }, r.updateRefetchInterval = function(i) {
            var a = this;
            this.clearRefetchInterval(), this.currentRefetchInterval = i, !(nl || this.options.enabled === !1 || !tc(this.currentRefetchInterval) || this.currentRefetchInterval === 0) && (this.refetchIntervalId = setInterval(function() {
                (a.options.refetchIntervalInBackground || Oi.isFocused()) && a.executeFetch()
            }, this.currentRefetchInterval))
        }, r.updateTimers = function() { this.updateStaleTimeout(), this.updateRefetchInterval(this.computeRefetchInterval()) }, r.clearTimers = function() { this.clearStaleTimeout(), this.clearRefetchInterval() }, r.clearStaleTimeout = function() { clearTimeout(this.staleTimeoutId), this.staleTimeoutId = void 0 }, r.clearRefetchInterval = function() { clearInterval(this.refetchIntervalId), this.refetchIntervalId = void 0 }, r.createResult = function(i, a) {
            var o = this.currentQuery,
                l = this.options,
                s = this.currentResult,
                u = this.currentResultState,
                c = this.currentResultOptions,
                p = i !== o,
                h = p ? i.state : this.currentQueryInitialState,
                g = p ? this.currentResult : this.previousQueryResult,
                y = i.state,
                x = y.dataUpdatedAt,
                R = y.error,
                v = y.errorUpdatedAt,
                d = y.isFetching,
                m = y.status,
                C = !1,
                E = !1,
                P;
            if (a.optimisticResults) {
                var _ = this.hasListeners(),
                    $ = !_ && Xh(i, a),
                    M = _ && Zh(i, o, a, l);
                ($ || M) && (d = !0, x || (m = "loading"))
            }
            if (a.keepPreviousData && !y.dataUpdateCount && (g == null ? void 0 : g.isSuccess) && m !== "error") P = g.data, x = g.dataUpdatedAt, m = g.status, C = !0;
            else if (a.select && typeof y.data != "undefined")
                if (s && y.data === (u == null ? void 0 : u.data) && a.select === this.selectFn) P = this.selectResult;
                else try { this.selectFn = a.select, P = a.select(y.data), a.structuralSharing !== !1 && (P = ol(s == null ? void 0 : s.data, P)), this.selectResult = P, this.selectError = null } catch (X) { sl().error(X), this.selectError = X } else P = y.data;
            if (typeof a.placeholderData != "undefined" && typeof P == "undefined" && (m === "loading" || m === "idle")) {
                var A;
                if ((s == null ? void 0 : s.isPlaceholderData) && a.placeholderData === (c == null ? void 0 : c.placeholderData)) A = s.data;
                else if (A = typeof a.placeholderData == "function" ? a.placeholderData() : a.placeholderData, a.select && typeof A != "undefined") try { A = a.select(A), a.structuralSharing !== !1 && (A = ol(s == null ? void 0 : s.data, A)), this.selectError = null } catch (X) { sl().error(X), this.selectError = X }
                typeof A != "undefined" && (m = "success", P = A, E = !0)
            }
            this.selectError && (R = this.selectError, P = this.selectResult, v = Date.now(), m = "error");
            var K = { status: m, isLoading: m === "loading", isSuccess: m === "success", isError: m === "error", isIdle: m === "idle", data: P, dataUpdatedAt: x, error: R, errorUpdatedAt: v, failureCount: y.fetchFailureCount, errorUpdateCount: y.errorUpdateCount, isFetched: y.dataUpdateCount > 0 || y.errorUpdateCount > 0, isFetchedAfterMount: y.dataUpdateCount > h.dataUpdateCount || y.errorUpdateCount > h.errorUpdateCount, isFetching: d, isRefetching: d && m !== "loading", isLoadingError: m === "error" && y.dataUpdatedAt === 0, isPlaceholderData: E, isPreviousData: C, isRefetchError: m === "error" && y.dataUpdatedAt !== 0, isStale: kd(i, a), refetch: this.refetch, remove: this.remove };
            return K
        }, r.shouldNotifyListeners = function(i, a) {
            if (!a) return !0;
            var o = this.options,
                l = o.notifyOnChangeProps,
                s = o.notifyOnChangePropsExclusions;
            if (!l && !s || l === "tracked" && !this.trackedProps.length) return !0;
            var u = l === "tracked" ? this.trackedProps : l;
            return Object.keys(i).some(function(c) {
                var p = c,
                    h = i[p] !== a[p],
                    g = u == null ? void 0 : u.some(function(x) { return x === c }),
                    y = s == null ? void 0 : s.some(function(x) { return x === c });
                return h && !y && (!u || g)
            })
        }, r.updateResult = function(i) {
            var a = this.currentResult;
            if (this.currentResult = this.createResult(this.currentQuery, this.options), this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, !V3(this.currentResult, a)) {
                var o = { cache: !0 };
                (i == null ? void 0 : i.listeners) !== !1 && this.shouldNotifyListeners(this.currentResult, a) && (o.listeners = !0), this.notify(Q({}, o, i))
            }
        }, r.updateQuery = function() {
            var i = this.client.getQueryCache().build(this.client, this.options);
            if (i !== this.currentQuery) {
                var a = this.currentQuery;
                this.currentQuery = i, this.currentQueryInitialState = i.state, this.previousQueryResult = this.currentResult, this.hasListeners() && (a == null || a.removeObserver(this), i.addObserver(this))
            }
        }, r.onQueryUpdate = function(i) {
            var a = {};
            i.type === "success" ? a.onSuccess = !0 : i.type === "error" && !wo(i.error) && (a.onError = !0), this.updateResult(a), this.hasListeners() && this.updateTimers()
        }, r.notify = function(i) {
            var a = this;
            xe.batch(function() { i.onSuccess ? (a.options.onSuccess == null || a.options.onSuccess(a.currentResult.data), a.options.onSettled == null || a.options.onSettled(a.currentResult.data, null)) : i.onError && (a.options.onError == null || a.options.onError(a.currentResult.error), a.options.onSettled == null || a.options.onSettled(void 0, a.currentResult.error)), i.listeners && a.listeners.forEach(function(o) { o(a.currentResult) }), i.cache && a.client.getQueryCache().notify({ query: a.currentQuery, type: "observerResultsUpdated" }) })
        }, t
    }(pa);

function uP(e, t) { return t.enabled !== !1 && !e.state.dataUpdatedAt && !(e.state.status === "error" && t.retryOnMount === !1) }

function Xh(e, t) { return uP(e, t) || e.state.dataUpdatedAt > 0 && nc(e, t, t.refetchOnMount) }

function nc(e, t, r) { if (t.enabled !== !1) { var n = typeof r == "function" ? r(e) : r; return n === "always" || n !== !1 && kd(e, t) } return !1 }

function Zh(e, t, r, n) { return r.enabled !== !1 && (e !== t || n.enabled === !1) && (!r.suspense || e.state.status !== "error") && kd(e, r) }

function kd(e, t) { return e.isStaleByTime(t.staleTime) }
var cP = bS.unstable_batchedUpdates;
xe.setBatchNotifyFunction(cP);
var dP = console;
Z3(dP);
var Jh = he.createContext(void 0),
    _0 = he.createContext(!1);

function E0(e) { return e && typeof window != "undefined" ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = Jh), window.ReactQueryClientContext) : Jh }
var fP = function() { var t = he.useContext(E0(he.useContext(_0))); if (!t) throw new Error("No QueryClient set, use QueryClientProvider to set one"); return t },
    hP = function(t) {
        var r = t.client,
            n = t.contextSharing,
            i = n === void 0 ? !1 : n,
            a = t.children;
        he.useEffect(function() {
            return r.mount(),
                function() { r.unmount() }
        }, [r]);
        var o = E0(i);
        return he.createElement(_0.Provider, { value: i }, he.createElement(o.Provider, { value: r }, a))
    };

function pP() { var e = !1; return { clearReset: function() { e = !1 }, reset: function() { e = !0 }, isReset: function() { return e } } }
var vP = he.createContext(pP()),
    mP = function() { return he.useContext(vP) };

function gP(e, t, r) { return typeof t == "function" ? t.apply(void 0, r) : typeof t == "boolean" ? t : !!e }

function yP(e, t) {
    var r = he.useRef(!1),
        n = he.useState(0),
        i = n[1],
        a = fP(),
        o = mP(),
        l = a.defaultQueryObserverOptions(e);
    l.optimisticResults = !0, l.onError && (l.onError = xe.batchCalls(l.onError)), l.onSuccess && (l.onSuccess = xe.batchCalls(l.onSuccess)), l.onSettled && (l.onSettled = xe.batchCalls(l.onSettled)), l.suspense && (typeof l.staleTime != "number" && (l.staleTime = 1e3), l.cacheTime === 0 && (l.cacheTime = 1)), (l.suspense || l.useErrorBoundary) && (o.isReset() || (l.retryOnMount = !1));
    var s = he.useState(function() { return new t(a, l) }),
        u = s[0],
        c = u.getOptimisticResult(l);
    if (he.useEffect(function() {
            r.current = !0, o.clearReset();
            var p = u.subscribe(xe.batchCalls(function() { r.current && i(function(h) { return h + 1 }) }));
            return u.updateResult(),
                function() { r.current = !1, p() }
        }, [o, u]), he.useEffect(function() { u.setOptions(l, { listeners: !1 }) }, [l, u]), l.suspense && c.isLoading) throw u.fetchOptimistic(l).then(function(p) {
        var h = p.data;
        l.onSuccess == null || l.onSuccess(h), l.onSettled == null || l.onSettled(h, null)
    }).catch(function(p) { o.clearReset(), l.onError == null || l.onError(p), l.onSettled == null || l.onSettled(void 0, p) });
    if (c.isError && !o.isReset() && !c.isFetching && gP(l.suspense, l.useErrorBoundary, [c.error, u.getCurrentQuery()])) throw c.error;
    return l.notifyOnChangeProps === "tracked" && (c = u.trackResult(c, l)), c
}

function bP(e, t, r) { var n = So(e, t, r); return yP(n, sP) }

function SP(e, t) {
    e === void 0 && (e = 6e4), t === void 0 && (t = 1e3);
    var r = he.useState(0),
        n = r[0],
        i = r[1],
        a = he.useRef({}),
        o = function h(g) {
            a.current.started || (a.current.started = g, a.current.lastInterval = g);
            var y = Math.min(t, a.current.timeLeft || 1 / 0);
            g - a.current.lastInterval >= y && (a.current.lastInterval += y, i(function(x) { return a.current.timeLeft = x - y, a.current.timeLeft })), g - a.current.started < a.current.timeToCount ? a.current.requestId = window.requestAnimationFrame(h) : (a.current = {}, i(0))
        },
        l = he.useCallback(function(h) {
            window.cancelAnimationFrame(a.current.requestId);
            var g = h !== void 0 ? h : e;
            a.current.started = null, a.current.lastInterval = null, a.current.timeToCount = g, a.current.requestId = window.requestAnimationFrame(o), i(g)
        }, []),
        s = he.useCallback(function() { window.cancelAnimationFrame(a.current.requestId), a.current.started = null, a.current.lastInterval = null, a.current.timeToCount = a.current.timeLeft }, []),
        u = he.useCallback(function() {!a.current.started && a.current.timeLeft > 0 && (window.cancelAnimationFrame(a.current.requestId), a.current.requestId = window.requestAnimationFrame(o)) }, []),
        c = he.useCallback(function() { a.current.timeLeft && (window.cancelAnimationFrame(a.current.requestId), a.current = {}, i(0)) }, []),
        p = he.useMemo(function() { return { start: l, pause: s, resume: u, reset: c } }, []);
    return he.useEffect(function() { return function() { return window.cancelAnimationFrame(a.current.requestId) } }, []), [n, p]
}
const xP = () => {
        const e = w.exports.useMemo(() => new Audio(W3), []),
            t = bP("todos", async({ signal: l }) => fetch("https://api.chucknorris.io/jokes/random", { signal: l }).then(s => s.json()).then(s => s.value)),
            r = 30 * 1e3,
            n = 1e3,
            [i, { start: a, reset: o }] = SP(r, n);
        return w.exports.useEffect(() => { a() }, []), w.exports.useEffect(() => { i / 1e3 == 0 && (t.refetch(), a()) }, [i]), Ke(ar, { position: "relative", w: "100vw", h: "100vh", bgColor: "black", py: "10vh", children: go(ar, { pos: "relative", w: "100%", h: "100%", children: [Ke(ar, { bgImage: D3, w: "100%", h: "100%", bgRepeat: "no-repeat", bgPosition: "center", bgSize: "cover", opacity: "0.5", position: "absolute" }), go(ar, { w: "100%", h: "100%", display: "flex", alignItems: "end", position: "relative", children: [Ke(S5, { src: j3, position: "relative", h: ["1%", "20%", "30%", "40%", "50%", "70%"], w: "auto" }), go(ar, { display: "flex", alignItems: "center", flexDirection: "column", h: "full", justifyContent: "center", position: "relative", children: [Ke(ar, { display: "flex", alignItems: "end", w: "full", children: Ke(m0, { value: i / 1e3, max: 30, isIndeterminate: !t.isFetched, color: "orange.500", size: "100px", trackColor: "whiteAlpha.300", mb: "20px", children: Ke(g0, { color: "white", children: i / 1e3 }) }) }), Ke(xd, { isLoaded: t.isFetched, children: Ke(f0, { color: "white", fontSize: ["30px", "35px", "40px", "32px", "35px", "48px"], fontWeight: 300, mb: "30px", position: "relative", _before: { content: '"\\FF02"', color: "orange.500", fontSize: ["50px", "70px", "80px", "100px", "128px"], position: "absolute", top: "-80px", left: "-89px" }, children: t.data }) }), Ke(ar, { display: "flex", alignItems: "end", w: "full", h: "40px", textAlign: "center", children: Ke(yd, { colorScheme: "orange", w: ["100%", "auto"], onClick: () => { e.play(), t.refetch(), o(), a() }, fontWeight: 300, children: "New Fact" }) })] })] })] }) })
    },
    wP = new lP;
ec.createRoot(document.getElementById("root")).render(Ke(he.StrictMode, { children: Ke(hP, { client: wP, children: Ke(y0, { children: Ke(xP, {}) }) }) }));