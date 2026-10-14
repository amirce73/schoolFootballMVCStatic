
/* ===== START: wwwroot/lib/jquery/dist/jquery.min.js ===== */
;/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function (e, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, function (ie, e) { "use strict"; var oe = [], r = Object.getPrototypeOf, ae = oe.slice, g = oe.flat ? function (e) { return oe.flat.call(e) } : function (e) { return oe.concat.apply([], e) }, s = oe.push, se = oe.indexOf, n = {}, i = n.toString, ue = n.hasOwnProperty, o = ue.toString, a = o.call(Object), le = {}, v = function (e) { return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item }, y = function (e) { return null != e && e === e.window }, C = ie.document, u = { type: !0, src: !0, nonce: !0, noModule: !0 }; function m(e, t, n) { var r, i, o = (n = n || C).createElement("script"); if (o.text = e, t) for (r in u) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i); n.head.appendChild(o).parentNode.removeChild(o) } function x(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[i.call(e)] || "object" : typeof e } var t = "3.7.1", l = /HTML$/i, ce = function (e, t) { return new ce.fn.init(e, t) }; function c(e) { var t = !!e && "length" in e && e.length, n = x(e); return !v(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e) } function fe(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() } ce.fn = ce.prototype = { jquery: t, constructor: ce, length: 0, toArray: function () { return ae.call(this) }, get: function (e) { return null == e ? ae.call(this) : e < 0 ? this[e + this.length] : this[e] }, pushStack: function (e) { var t = ce.merge(this.constructor(), e); return t.prevObject = this, t }, each: function (e) { return ce.each(this, e) }, map: function (n) { return this.pushStack(ce.map(this, function (e, t) { return n.call(e, t, e) })) }, slice: function () { return this.pushStack(ae.apply(this, arguments)) }, first: function () { return this.eq(0) }, last: function () { return this.eq(-1) }, even: function () { return this.pushStack(ce.grep(this, function (e, t) { return (t + 1) % 2 })) }, odd: function () { return this.pushStack(ce.grep(this, function (e, t) { return t % 2 })) }, eq: function (e) { var t = this.length, n = +e + (e < 0 ? t : 0); return this.pushStack(0 <= n && n < t ? [this[n]] : []) }, end: function () { return this.prevObject || this.constructor() }, push: s, sort: oe.sort, splice: oe.splice }, ce.extend = ce.fn.extend = function () { var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1; for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || v(a) || (a = {}), s === u && (a = this, s--); s < u; s++)if (null != (e = arguments[s])) for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (ce.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || ce.isPlainObject(n) ? n : {}, i = !1, a[t] = ce.extend(l, o, r)) : void 0 !== r && (a[t] = r)); return a }, ce.extend({ expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) { throw new Error(e) }, noop: function () { }, isPlainObject: function (e) { var t, n; return !(!e || "[object Object]" !== i.call(e)) && (!(t = r(e)) || "function" == typeof (n = ue.call(t, "constructor") && t.constructor) && o.call(n) === a) }, isEmptyObject: function (e) { var t; for (t in e) return !1; return !0 }, globalEval: function (e, t, n) { m(e, { nonce: t && t.nonce }, n) }, each: function (e, t) { var n, r = 0; if (c(e)) { for (n = e.length; r < n; r++)if (!1 === t.call(e[r], r, e[r])) break } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break; return e }, text: function (e) { var t, n = "", r = 0, i = e.nodeType; if (!i) while (t = e[r++]) n += ce.text(t); return 1 === i || 11 === i ? e.textContent : 9 === i ? e.documentElement.textContent : 3 === i || 4 === i ? e.nodeValue : n }, makeArray: function (e, t) { var n = t || []; return null != e && (c(Object(e)) ? ce.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n }, inArray: function (e, t, n) { return null == t ? -1 : se.call(t, e, n) }, isXMLDoc: function (e) { var t = e && e.namespaceURI, n = e && (e.ownerDocument || e).documentElement; return !l.test(t || n && n.nodeName || "HTML") }, merge: function (e, t) { for (var n = +t.length, r = 0, i = e.length; r < n; r++)e[i++] = t[r]; return e.length = i, e }, grep: function (e, t, n) { for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)!t(e[i], i) !== a && r.push(e[i]); return r }, map: function (e, t, n) { var r, i, o = 0, a = []; if (c(e)) for (r = e.length; o < r; o++)null != (i = t(e[o], o, n)) && a.push(i); else for (o in e) null != (i = t(e[o], o, n)) && a.push(i); return g(a) }, guid: 1, support: le }), "function" == typeof Symbol && (ce.fn[Symbol.iterator] = oe[Symbol.iterator]), ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) { n["[object " + t + "]"] = t.toLowerCase() }); var pe = oe.pop, de = oe.sort, he = oe.splice, ge = "[\\x20\\t\\r\\n\\f]", ve = new RegExp("^" + ge + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ge + "+$", "g"); ce.contains = function (e, t) { var n = t && t.parentNode; return e === n || !(!n || 1 !== n.nodeType || !(e.contains ? e.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n))) }; var f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g; function p(e, t) { return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e } ce.escapeSelector = function (e) { return (e + "").replace(f, p) }; var ye = C, me = s; !function () { var e, b, w, o, a, T, r, C, d, i, k = me, S = ce.expando, E = 0, n = 0, s = W(), c = W(), u = W(), h = W(), l = function (e, t) { return e === t && (a = !0), 0 }, f = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", t = "(?:\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", p = "\\[" + ge + "*(" + t + ")(?:" + ge + "*([*^$|!~]?=)" + ge + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + t + "))|)" + ge + "*\\]", g = ":(" + t + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + p + ")*)|.*)\\)|)", v = new RegExp(ge + "+", "g"), y = new RegExp("^" + ge + "*," + ge + "*"), m = new RegExp("^" + ge + "*([>+~]|" + ge + ")" + ge + "*"), x = new RegExp(ge + "|>"), j = new RegExp(g), A = new RegExp("^" + t + "$"), D = { ID: new RegExp("^#(" + t + ")"), CLASS: new RegExp("^\\.(" + t + ")"), TAG: new RegExp("^(" + t + "|[*])"), ATTR: new RegExp("^" + p), PSEUDO: new RegExp("^" + g), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ge + "*(even|odd|(([+-]|)(\\d*)n|)" + ge + "*(?:([+-]|)" + ge + "*(\\d+)|))" + ge + "*\\)|)", "i"), bool: new RegExp("^(?:" + f + ")$", "i"), needsContext: new RegExp("^" + ge + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ge + "*((?:-\\d)?\\d*)" + ge + "*\\)|)(?=[^-]|$)", "i") }, N = /^(?:input|select|textarea|button)$/i, q = /^h\d$/i, L = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, H = /[+~]/, O = new RegExp("\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\([^\\r\\n\\f])", "g"), P = function (e, t) { var n = "0x" + e.slice(1) - 65536; return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)) }, M = function () { V() }, R = J(function (e) { return !0 === e.disabled && fe(e, "fieldset") }, { dir: "parentNode", next: "legend" }); try { k.apply(oe = ae.call(ye.childNodes), ye.childNodes), oe[ye.childNodes.length].nodeType } catch (e) { k = { apply: function (e, t) { me.apply(e, ae.call(t)) }, call: function (e) { me.apply(e, ae.call(arguments, 1)) } } } function I(t, e, n, r) { var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e ? e.nodeType : 9; if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n; if (!r && (V(e), e = e || T, C)) { if (11 !== p && (u = L.exec(t))) if (i = u[1]) { if (9 === p) { if (!(a = e.getElementById(i))) return n; if (a.id === i) return k.call(n, a), n } else if (f && (a = f.getElementById(i)) && I.contains(e, a) && a.id === i) return k.call(n, a), n } else { if (u[2]) return k.apply(n, e.getElementsByTagName(t)), n; if ((i = u[3]) && e.getElementsByClassName) return k.apply(n, e.getElementsByClassName(i)), n } if (!(h[t + " "] || d && d.test(t))) { if (c = t, f = e, 1 === p && (x.test(t) || m.test(t))) { (f = H.test(t) && U(e.parentNode) || e) == e && le.scope || ((s = e.getAttribute("id")) ? s = ce.escapeSelector(s) : e.setAttribute("id", s = S)), o = (l = Y(t)).length; while (o--) l[o] = (s ? "#" + s : ":scope") + " " + Q(l[o]); c = l.join(",") } try { return k.apply(n, f.querySelectorAll(c)), n } catch (e) { h(t, !0) } finally { s === S && e.removeAttribute("id") } } } return re(t.replace(ve, "$1"), e, n, r) } function W() { var r = []; return function e(t, n) { return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n } } function F(e) { return e[S] = !0, e } function $(e) { var t = T.createElement("fieldset"); try { return !!e(t) } catch (e) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } } function B(t) { return function (e) { return fe(e, "input") && e.type === t } } function _(t) { return function (e) { return (fe(e, "input") || fe(e, "button")) && e.type === t } } function z(t) { return function (e) { return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && R(e) === t : e.disabled === t : "label" in e && e.disabled === t } } function X(a) { return F(function (o) { return o = +o, F(function (e, t) { var n, r = a([], e.length, o), i = r.length; while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n])) }) }) } function U(e) { return e && "undefined" != typeof e.getElementsByTagName && e } function V(e) { var t, n = e ? e.ownerDocument || e : ye; return n != T && 9 === n.nodeType && n.documentElement && (r = (T = n).documentElement, C = !ce.isXMLDoc(T), i = r.matches || r.webkitMatchesSelector || r.msMatchesSelector, r.msMatchesSelector && ye != T && (t = T.defaultView) && t.top !== t && t.addEventListener("unload", M), le.getById = $(function (e) { return r.appendChild(e).id = ce.expando, !T.getElementsByName || !T.getElementsByName(ce.expando).length }), le.disconnectedMatch = $(function (e) { return i.call(e, "*") }), le.scope = $(function () { return T.querySelectorAll(":scope") }), le.cssHas = $(function () { try { return T.querySelector(":has(*,:jqfake)"), !1 } catch (e) { return !0 } }), le.getById ? (b.filter.ID = function (e) { var t = e.replace(O, P); return function (e) { return e.getAttribute("id") === t } }, b.find.ID = function (e, t) { if ("undefined" != typeof t.getElementById && C) { var n = t.getElementById(e); return n ? [n] : [] } }) : (b.filter.ID = function (e) { var n = e.replace(O, P); return function (e) { var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id"); return t && t.value === n } }, b.find.ID = function (e, t) { if ("undefined" != typeof t.getElementById && C) { var n, r, i, o = t.getElementById(e); if (o) { if ((n = o.getAttributeNode("id")) && n.value === e) return [o]; i = t.getElementsByName(e), r = 0; while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [o] } return [] } }), b.find.TAG = function (e, t) { return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e) }, b.find.CLASS = function (e, t) { if ("undefined" != typeof t.getElementsByClassName && C) return t.getElementsByClassName(e) }, d = [], $(function (e) { var t; r.appendChild(e).innerHTML = "<a id='" + S + "' href='' disabled='disabled'></a><select id='" + S + "-\r\\' disabled='disabled'><option selected=''></option></select>", e.querySelectorAll("[selected]").length || d.push("\\[" + ge + "*(?:value|" + f + ")"), e.querySelectorAll("[id~=" + S + "-]").length || d.push("~="), e.querySelectorAll("a#" + S + "+*").length || d.push(".#.+[+~]"), e.querySelectorAll(":checked").length || d.push(":checked"), (t = T.createElement("input")).setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), r.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && d.push(":enabled", ":disabled"), (t = T.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || d.push("\\[" + ge + "*name" + ge + "*=" + ge + "*(?:''|\"\")") }), le.cssHas || d.push(":has"), d = d.length && new RegExp(d.join("|")), l = function (e, t) { if (e === t) return a = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !le.sortDetached && t.compareDocumentPosition(e) === n ? e === T || e.ownerDocument == ye && I.contains(ye, e) ? -1 : t === T || t.ownerDocument == ye && I.contains(ye, t) ? 1 : o ? se.call(o, e) - se.call(o, t) : 0 : 4 & n ? -1 : 1) }), T } for (e in I.matches = function (e, t) { return I(e, null, null, t) }, I.matchesSelector = function (e, t) { if (V(e), C && !h[t + " "] && (!d || !d.test(t))) try { var n = i.call(e, t); if (n || le.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n } catch (e) { h(t, !0) } return 0 < I(t, T, null, [e]).length }, I.contains = function (e, t) { return (e.ownerDocument || e) != T && V(e), ce.contains(e, t) }, I.attr = function (e, t) { (e.ownerDocument || e) != T && V(e); var n = b.attrHandle[t.toLowerCase()], r = n && ue.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0; return void 0 !== r ? r : e.getAttribute(t) }, I.error = function (e) { throw new Error("Syntax error, unrecognized expression: " + e) }, ce.uniqueSort = function (e) { var t, n = [], r = 0, i = 0; if (a = !le.sortStable, o = !le.sortStable && ae.call(e, 0), de.call(e, l), a) { while (t = e[i++]) t === e[i] && (r = n.push(i)); while (r--) he.call(e, n[r], 1) } return o = null, e }, ce.fn.uniqueSort = function () { return this.pushStack(ce.uniqueSort(ae.apply(this))) }, (b = ce.expr = { cacheLength: 50, createPseudo: F, match: D, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (e) { return e[1] = e[1].replace(O, P), e[3] = (e[3] || e[4] || e[5] || "").replace(O, P), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function (e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || I.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && I.error(e[0]), e }, PSEUDO: function (e) { var t, n = !e[6] && e[2]; return D.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && j.test(n) && (t = Y(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } }, filter: { TAG: function (e) { var t = e.replace(O, P).toLowerCase(); return "*" === e ? function () { return !0 } : function (e) { return fe(e, t) } }, CLASS: function (e) { var t = s[e + " "]; return t || (t = new RegExp("(^|" + ge + ")" + e + "(" + ge + "|$)")) && s(e, function (e) { return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "") }) }, ATTR: function (n, r, i) { return function (e) { var t = I.attr(e, n); return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(v, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-")) } }, CHILD: function (d, e, t, h, g) { var v = "nth" !== d.slice(0, 3), y = "last" !== d.slice(-4), m = "of-type" === e; return 1 === h && 0 === g ? function (e) { return !!e.parentNode } : function (e, t, n) { var r, i, o, a, s, u = v !== y ? "nextSibling" : "previousSibling", l = e.parentNode, c = m && e.nodeName.toLowerCase(), f = !n && !m, p = !1; if (l) { if (v) { while (u) { o = e; while (o = o[u]) if (m ? fe(o, c) : 1 === o.nodeType) return !1; s = u = "only" === d && !s && "nextSibling" } return !0 } if (s = [y ? l.firstChild : l.lastChild], y && f) { p = (a = (r = (i = l[S] || (l[S] = {}))[d] || [])[0] === E && r[1]) && r[2], o = a && l.childNodes[a]; while (o = ++a && o && o[u] || (p = a = 0) || s.pop()) if (1 === o.nodeType && ++p && o === e) { i[d] = [E, a, p]; break } } else if (f && (p = a = (r = (i = e[S] || (e[S] = {}))[d] || [])[0] === E && r[1]), !1 === p) while (o = ++a && o && o[u] || (p = a = 0) || s.pop()) if ((m ? fe(o, c) : 1 === o.nodeType) && ++p && (f && ((i = o[S] || (o[S] = {}))[d] = [E, p]), o === e)) break; return (p -= g) === h || p % h == 0 && 0 <= p / h } } }, PSEUDO: function (e, o) { var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || I.error("unsupported pseudo: " + e); return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? F(function (e, t) { var n, r = a(e, o), i = r.length; while (i--) e[n = se.call(e, r[i])] = !(t[n] = r[i]) }) : function (e) { return a(e, 0, t) }) : a } }, pseudos: { not: F(function (e) { var r = [], i = [], s = ne(e.replace(ve, "$1")); return s[S] ? F(function (e, t, n, r) { var i, o = s(e, null, r, []), a = e.length; while (a--) (i = o[a]) && (e[a] = !(t[a] = i)) }) : function (e, t, n) { return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop() } }), has: F(function (t) { return function (e) { return 0 < I(t, e).length } }), contains: F(function (t) { return t = t.replace(O, P), function (e) { return -1 < (e.textContent || ce.text(e)).indexOf(t) } }), lang: F(function (n) { return A.test(n || "") || I.error("unsupported lang: " + n), n = n.replace(O, P).toLowerCase(), function (e) { var t; do { if (t = C ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-") } while ((e = e.parentNode) && 1 === e.nodeType); return !1 } }), target: function (e) { var t = ie.location && ie.location.hash; return t && t.slice(1) === e.id }, root: function (e) { return e === r }, focus: function (e) { return e === function () { try { return T.activeElement } catch (e) { } }() && T.hasFocus() && !!(e.type || e.href || ~e.tabIndex) }, enabled: z(!1), disabled: z(!0), checked: function (e) { return fe(e, "input") && !!e.checked || fe(e, "option") && !!e.selected }, selected: function (e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected }, empty: function (e) { for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6) return !1; return !0 }, parent: function (e) { return !b.pseudos.empty(e) }, header: function (e) { return q.test(e.nodeName) }, input: function (e) { return N.test(e.nodeName) }, button: function (e) { return fe(e, "input") && "button" === e.type || fe(e, "button") }, text: function (e) { var t; return fe(e, "input") && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) }, first: X(function () { return [0] }), last: X(function (e, t) { return [t - 1] }), eq: X(function (e, t, n) { return [n < 0 ? n + t : n] }), even: X(function (e, t) { for (var n = 0; n < t; n += 2)e.push(n); return e }), odd: X(function (e, t) { for (var n = 1; n < t; n += 2)e.push(n); return e }), lt: X(function (e, t, n) { var r; for (r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;)e.push(r); return e }), gt: X(function (e, t, n) { for (var r = n < 0 ? n + t : n; ++r < t;)e.push(r); return e }) } }).pseudos.nth = b.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) b.pseudos[e] = B(e); for (e in { submit: !0, reset: !0 }) b.pseudos[e] = _(e); function G() { } function Y(e, t) { var n, r, i, o, a, s, u, l = c[e + " "]; if (l) return t ? 0 : l.slice(0); a = e, s = [], u = b.preFilter; while (a) { for (o in n && !(r = y.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = m.exec(a)) && (n = r.shift(), i.push({ value: n, type: r[0].replace(ve, " ") }), a = a.slice(n.length)), b.filter) !(r = D[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({ value: n, type: o, matches: r }), a = a.slice(n.length)); if (!n) break } return t ? a.length : a ? I.error(e) : c(e, s).slice(0) } function Q(e) { for (var t = 0, n = e.length, r = ""; t < n; t++)r += e[t].value; return r } function J(a, e, t) { var s = e.dir, u = e.next, l = u || s, c = t && "parentNode" === l, f = n++; return e.first ? function (e, t, n) { while (e = e[s]) if (1 === e.nodeType || c) return a(e, t, n); return !1 } : function (e, t, n) { var r, i, o = [E, f]; if (n) { while (e = e[s]) if ((1 === e.nodeType || c) && a(e, t, n)) return !0 } else while (e = e[s]) if (1 === e.nodeType || c) if (i = e[S] || (e[S] = {}), u && fe(e, u)) e = e[s] || e; else { if ((r = i[l]) && r[0] === E && r[1] === f) return o[2] = r[2]; if ((i[l] = o)[2] = a(e, t, n)) return !0 } return !1 } } function K(i) { return 1 < i.length ? function (e, t, n) { var r = i.length; while (r--) if (!i[r](e, t, n)) return !1; return !0 } : i[0] } function Z(e, t, n, r, i) { for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s))); return a } function ee(d, h, g, v, y, e) { return v && !v[S] && (v = ee(v)), y && !y[S] && (y = ee(y, e)), F(function (e, t, n, r) { var i, o, a, s, u = [], l = [], c = t.length, f = e || function (e, t, n) { for (var r = 0, i = t.length; r < i; r++)I(e, t[r], n); return n }(h || "*", n.nodeType ? [n] : n, []), p = !d || !e && h ? f : Z(f, u, d, n, r); if (g ? g(p, s = y || (e ? d : c || v) ? [] : t, n, r) : s = p, v) { i = Z(s, l), v(i, [], n, r), o = i.length; while (o--) (a = i[o]) && (s[l[o]] = !(p[l[o]] = a)) } if (e) { if (y || d) { if (y) { i = [], o = s.length; while (o--) (a = s[o]) && i.push(p[o] = a); y(null, s = [], i, r) } o = s.length; while (o--) (a = s[o]) && -1 < (i = y ? se.call(e, a) : u[o]) && (e[i] = !(t[i] = a)) } } else s = Z(s === t ? s.splice(c, s.length) : s), y ? y(null, t, s, r) : k.apply(t, s) }) } function te(e) { for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = J(function (e) { return e === i }, a, !0), l = J(function (e) { return -1 < se.call(i, e) }, a, !0), c = [function (e, t, n) { var r = !o && (n || t != w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n)); return i = null, r }]; s < r; s++)if (t = b.relative[e[s].type]) c = [J(K(c), t)]; else { if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) { for (n = ++s; n < r; n++)if (b.relative[e[n].type]) break; return ee(1 < s && K(c), 1 < s && Q(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(ve, "$1"), t, s < n && te(e.slice(s, n)), n < r && te(e = e.slice(n)), n < r && Q(e)) } c.push(t) } return K(c) } function ne(e, t) { var n, v, y, m, x, r, i = [], o = [], a = u[e + " "]; if (!a) { t || (t = Y(e)), n = t.length; while (n--) (a = te(t[n]))[S] ? i.push(a) : o.push(a); (a = u(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function (e, t, n, r, i) { var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i), h = E += null == p ? 1 : Math.random() || .1, g = d.length; for (i && (w = t == T || t || i); l !== g && null != (o = d[l]); l++) { if (x && o) { a = 0, t || o.ownerDocument == T || (V(o), n = !C); while (s = v[a++]) if (s(o, t || T, n)) { k.call(r, o); break } i && (E = h) } m && ((o = !s && o) && u--, e && c.push(o)) } if (u += l, m && l !== u) { a = 0; while (s = y[a++]) s(c, f, t, n); if (e) { if (0 < u) while (l--) c[l] || f[l] || (f[l] = pe.call(r)); f = Z(f) } k.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && ce.uniqueSort(r) } return i && (E = h, w = p), c }, m ? F(r) : r))).selector = e } return a } function re(e, t, n, r) { var i, o, a, s, u, l = "function" == typeof e && e, c = !r && Y(e = l.selector || e); if (n = n || [], 1 === c.length) { if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && C && b.relative[o[1].type]) { if (!(t = (b.find.ID(a.matches[0].replace(O, P), t) || [])[0])) return n; l && (t = t.parentNode), e = e.slice(o.shift().value.length) } i = D.needsContext.test(e) ? 0 : o.length; while (i--) { if (a = o[i], b.relative[s = a.type]) break; if ((u = b.find[s]) && (r = u(a.matches[0].replace(O, P), H.test(o[0].type) && U(t.parentNode) || t))) { if (o.splice(i, 1), !(e = r.length && Q(o))) return k.apply(n, r), n; break } } } return (l || ne(e, c))(r, t, !C, n, !t || H.test(e) && U(t.parentNode) || t), n } G.prototype = b.filters = b.pseudos, b.setFilters = new G, le.sortStable = S.split("").sort(l).join("") === S, V(), le.sortDetached = $(function (e) { return 1 & e.compareDocumentPosition(T.createElement("fieldset")) }), ce.find = I, ce.expr[":"] = ce.expr.pseudos, ce.unique = ce.uniqueSort, I.compile = ne, I.select = re, I.setDocument = V, I.tokenize = Y, I.escape = ce.escapeSelector, I.getText = ce.text, I.isXML = ce.isXMLDoc, I.selectors = ce.expr, I.support = ce.support, I.uniqueSort = ce.uniqueSort }(); var d = function (e, t, n) { var r = [], i = void 0 !== n; while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) { if (i && ce(e).is(n)) break; r.push(e) } return r }, h = function (e, t) { for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e); return n }, b = ce.expr.match.needsContext, w = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i; function T(e, n, r) { return v(n) ? ce.grep(e, function (e, t) { return !!n.call(e, t, e) !== r }) : n.nodeType ? ce.grep(e, function (e) { return e === n !== r }) : "string" != typeof n ? ce.grep(e, function (e) { return -1 < se.call(n, e) !== r }) : ce.filter(n, e, r) } ce.filter = function (e, t, n) { var r = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ce.find.matchesSelector(r, e) ? [r] : [] : ce.find.matches(e, ce.grep(t, function (e) { return 1 === e.nodeType })) }, ce.fn.extend({ find: function (e) { var t, n, r = this.length, i = this; if ("string" != typeof e) return this.pushStack(ce(e).filter(function () { for (t = 0; t < r; t++)if (ce.contains(i[t], this)) return !0 })); for (n = this.pushStack([]), t = 0; t < r; t++)ce.find(e, i[t], n); return 1 < r ? ce.uniqueSort(n) : n }, filter: function (e) { return this.pushStack(T(this, e || [], !1)) }, not: function (e) { return this.pushStack(T(this, e || [], !0)) }, is: function (e) { return !!T(this, "string" == typeof e && b.test(e) ? ce(e) : e || [], !1).length } }); var k, S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/; (ce.fn.init = function (e, t, n) { var r, i; if (!e) return this; if (n = n || k, "string" == typeof e) { if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : S.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e); if (r[1]) { if (t = t instanceof ce ? t[0] : t, ce.merge(this, ce.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0)), w.test(r[1]) && ce.isPlainObject(t)) for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]); return this } return (i = C.getElementById(r[2])) && (this[0] = i, this.length = 1), this } return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(ce) : ce.makeArray(e, this) }).prototype = ce.fn, k = ce(C); var E = /^(?:parents|prev(?:Until|All))/, j = { children: !0, contents: !0, next: !0, prev: !0 }; function A(e, t) { while ((e = e[t]) && 1 !== e.nodeType); return e } ce.fn.extend({ has: function (e) { var t = ce(e, this), n = t.length; return this.filter(function () { for (var e = 0; e < n; e++)if (ce.contains(this, t[e])) return !0 }) }, closest: function (e, t) { var n, r = 0, i = this.length, o = [], a = "string" != typeof e && ce(e); if (!b.test(e)) for (; r < i; r++)for (n = this[r]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && ce.find.matchesSelector(n, e))) { o.push(n); break } return this.pushStack(1 < o.length ? ce.uniqueSort(o) : o) }, index: function (e) { return e ? "string" == typeof e ? se.call(ce(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function (e, t) { return this.pushStack(ce.uniqueSort(ce.merge(this.get(), ce(e, t)))) }, addBack: function (e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) } }), ce.each({ parent: function (e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function (e) { return d(e, "parentNode") }, parentsUntil: function (e, t, n) { return d(e, "parentNode", n) }, next: function (e) { return A(e, "nextSibling") }, prev: function (e) { return A(e, "previousSibling") }, nextAll: function (e) { return d(e, "nextSibling") }, prevAll: function (e) { return d(e, "previousSibling") }, nextUntil: function (e, t, n) { return d(e, "nextSibling", n) }, prevUntil: function (e, t, n) { return d(e, "previousSibling", n) }, siblings: function (e) { return h((e.parentNode || {}).firstChild, e) }, children: function (e) { return h(e.firstChild) }, contents: function (e) { return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (fe(e, "template") && (e = e.content || e), ce.merge([], e.childNodes)) } }, function (r, i) { ce.fn[r] = function (e, t) { var n = ce.map(this, i, e); return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = ce.filter(t, n)), 1 < this.length && (j[r] || ce.uniqueSort(n), E.test(r) && n.reverse()), this.pushStack(n) } }); var D = /[^\x20\t\r\n\f]+/g; function N(e) { return e } function q(e) { throw e } function L(e, t, n, r) { var i; try { e && v(i = e.promise) ? i.call(e).done(t).fail(n) : e && v(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r)) } catch (e) { n.apply(void 0, [e]) } } ce.Callbacks = function (r) { var e, n; r = "string" == typeof r ? (e = r, n = {}, ce.each(e.match(D) || [], function (e, t) { n[t] = !0 }), n) : ce.extend({}, r); var i, t, o, a, s = [], u = [], l = -1, c = function () { for (a = a || r.once, o = i = !0; u.length; l = -1) { t = u.shift(); while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1) } r.memory || (t = !1), i = !1, a && (s = t ? [] : "") }, f = { add: function () { return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) { ce.each(e, function (e, t) { v(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== x(t) && n(t) }) }(arguments), t && !i && c()), this }, remove: function () { return ce.each(arguments, function (e, t) { var n; while (-1 < (n = ce.inArray(t, s, n))) s.splice(n, 1), n <= l && l-- }), this }, has: function (e) { return e ? -1 < ce.inArray(e, s) : 0 < s.length }, empty: function () { return s && (s = []), this }, disable: function () { return a = u = [], s = t = "", this }, disabled: function () { return !s }, lock: function () { return a = u = [], t || i || (s = t = ""), this }, locked: function () { return !!a }, fireWith: function (e, t) { return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this }, fire: function () { return f.fireWith(this, arguments), this }, fired: function () { return !!o } }; return f }, ce.extend({ Deferred: function (e) { var o = [["notify", "progress", ce.Callbacks("memory"), ce.Callbacks("memory"), 2], ["resolve", "done", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 1, "rejected"]], i = "pending", a = { state: function () { return i }, always: function () { return s.done(arguments).fail(arguments), this }, "catch": function (e) { return a.then(null, e) }, pipe: function () { var i = arguments; return ce.Deferred(function (r) { ce.each(o, function (e, t) { var n = v(i[t[4]]) && i[t[4]]; s[t[1]](function () { var e = n && n.apply(this, arguments); e && v(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments) }) }), i = null }).promise() }, then: function (t, n, r) { var u = 0; function l(i, o, a, s) { return function () { var n = this, r = arguments, e = function () { var e, t; if (!(i < u)) { if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution"); t = e && ("object" == typeof e || "function" == typeof e) && e.then, v(t) ? s ? t.call(e, l(u, o, N, s), l(u, o, q, s)) : (u++, t.call(e, l(u, o, N, s), l(u, o, q, s), l(u, o, N, o.notifyWith))) : (a !== N && (n = void 0, r = [e]), (s || o.resolveWith)(n, r)) } }, t = s ? e : function () { try { e() } catch (e) { ce.Deferred.exceptionHook && ce.Deferred.exceptionHook(e, t.error), u <= i + 1 && (a !== q && (n = void 0, r = [e]), o.rejectWith(n, r)) } }; i ? t() : (ce.Deferred.getErrorHook ? t.error = ce.Deferred.getErrorHook() : ce.Deferred.getStackHook && (t.error = ce.Deferred.getStackHook()), ie.setTimeout(t)) } } return ce.Deferred(function (e) { o[0][3].add(l(0, e, v(r) ? r : N, e.notifyWith)), o[1][3].add(l(0, e, v(t) ? t : N)), o[2][3].add(l(0, e, v(n) ? n : q)) }).promise() }, promise: function (e) { return null != e ? ce.extend(e, a) : a } }, s = {}; return ce.each(o, function (e, t) { var n = t[2], r = t[5]; a[t[1]] = n.add, r && n.add(function () { i = r }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () { return s[t[0] + "With"](this === s ? void 0 : this, arguments), this }, s[t[0] + "With"] = n.fireWith }), a.promise(s), e && e.call(s, s), s }, when: function (e) { var n = arguments.length, t = n, r = Array(t), i = ae.call(arguments), o = ce.Deferred(), a = function (t) { return function (e) { r[t] = this, i[t] = 1 < arguments.length ? ae.call(arguments) : e, --n || o.resolveWith(r, i) } }; if (n <= 1 && (L(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || v(i[t] && i[t].then))) return o.then(); while (t--) L(i[t], a(t), o.reject); return o.promise() } }); var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/; ce.Deferred.exceptionHook = function (e, t) { ie.console && ie.console.warn && e && H.test(e.name) && ie.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t) }, ce.readyException = function (e) { ie.setTimeout(function () { throw e }) }; var O = ce.Deferred(); function P() { C.removeEventListener("DOMContentLoaded", P), ie.removeEventListener("load", P), ce.ready() } ce.fn.ready = function (e) { return O.then(e)["catch"](function (e) { ce.readyException(e) }), this }, ce.extend({ isReady: !1, readyWait: 1, ready: function (e) { (!0 === e ? --ce.readyWait : ce.isReady) || (ce.isReady = !0) !== e && 0 < --ce.readyWait || O.resolveWith(C, [ce]) } }), ce.ready.then = O.then, "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? ie.setTimeout(ce.ready) : (C.addEventListener("DOMContentLoaded", P), ie.addEventListener("load", P)); var M = function (e, t, n, r, i, o, a) { var s = 0, u = e.length, l = null == n; if ("object" === x(n)) for (s in i = !0, n) M(e, t, s, n[s], !0, o, a); else if (void 0 !== r && (i = !0, v(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) { return l.call(ce(e), n) })), t)) for (; s < u; s++)t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n))); return i ? e : l ? t.call(e) : u ? t(e[0], n) : o }, R = /^-ms-/, I = /-([a-z])/g; function W(e, t) { return t.toUpperCase() } function F(e) { return e.replace(R, "ms-").replace(I, W) } var $ = function (e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType }; function B() { this.expando = ce.expando + B.uid++ } B.uid = 1, B.prototype = { cache: function (e) { var t = e[this.expando]; return t || (t = {}, $(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t }, set: function (e, t, n) { var r, i = this.cache(e); if ("string" == typeof t) i[F(t)] = n; else for (r in t) i[F(r)] = t[r]; return i }, get: function (e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][F(t)] }, access: function (e, t, n) { return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t) }, remove: function (e, t) { var n, r = e[this.expando]; if (void 0 !== r) { if (void 0 !== t) { n = (t = Array.isArray(t) ? t.map(F) : (t = F(t)) in r ? [t] : t.match(D) || []).length; while (n--) delete r[t[n]] } (void 0 === t || ce.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } }, hasData: function (e) { var t = e[this.expando]; return void 0 !== t && !ce.isEmptyObject(t) } }; var _ = new B, z = new B, X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, U = /[A-Z]/g; function V(e, t, n) { var r, i; if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(U, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) { try { n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : X.test(i) ? JSON.parse(i) : i) } catch (e) { } z.set(e, t, n) } else n = void 0; return n } ce.extend({ hasData: function (e) { return z.hasData(e) || _.hasData(e) }, data: function (e, t, n) { return z.access(e, t, n) }, removeData: function (e, t) { z.remove(e, t) }, _data: function (e, t, n) { return _.access(e, t, n) }, _removeData: function (e, t) { _.remove(e, t) } }), ce.fn.extend({ data: function (n, e) { var t, r, i, o = this[0], a = o && o.attributes; if (void 0 === n) { if (this.length && (i = z.get(o), 1 === o.nodeType && !_.get(o, "hasDataAttrs"))) { t = a.length; while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = F(r.slice(5)), V(o, r, i[r])); _.set(o, "hasDataAttrs", !0) } return i } return "object" == typeof n ? this.each(function () { z.set(this, n) }) : M(this, function (e) { var t; if (o && void 0 === e) return void 0 !== (t = z.get(o, n)) ? t : void 0 !== (t = V(o, n)) ? t : void 0; this.each(function () { z.set(this, n, e) }) }, null, e, 1 < arguments.length, null, !0) }, removeData: function (e) { return this.each(function () { z.remove(this, e) }) } }), ce.extend({ queue: function (e, t, n) { var r; if (e) return t = (t || "fx") + "queue", r = _.get(e, t), n && (!r || Array.isArray(n) ? r = _.access(e, t, ce.makeArray(n)) : r.push(n)), r || [] }, dequeue: function (e, t) { t = t || "fx"; var n = ce.queue(e, t), r = n.length, i = n.shift(), o = ce._queueHooks(e, t); "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () { ce.dequeue(e, t) }, o)), !r && o && o.empty.fire() }, _queueHooks: function (e, t) { var n = t + "queueHooks"; return _.get(e, n) || _.access(e, n, { empty: ce.Callbacks("once memory").add(function () { _.remove(e, [t + "queue", n]) }) }) } }), ce.fn.extend({ queue: function (t, n) { var e = 2; return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? ce.queue(this[0], t) : void 0 === n ? this : this.each(function () { var e = ce.queue(this, t, n); ce._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && ce.dequeue(this, t) }) }, dequeue: function (e) { return this.each(function () { ce.dequeue(this, e) }) }, clearQueue: function (e) { return this.queue(e || "fx", []) }, promise: function (e, t) { var n, r = 1, i = ce.Deferred(), o = this, a = this.length, s = function () { --r || i.resolveWith(o, [o]) }; "string" != typeof e && (t = e, e = void 0), e = e || "fx"; while (a--) (n = _.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s)); return s(), i.promise(t) } }); var G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Y = new RegExp("^(?:([+-])=|)(" + G + ")([a-z%]*)$", "i"), Q = ["Top", "Right", "Bottom", "Left"], J = C.documentElement, K = function (e) { return ce.contains(e.ownerDocument, e) }, Z = { composed: !0 }; J.getRootNode && (K = function (e) { return ce.contains(e.ownerDocument, e) || e.getRootNode(Z) === e.ownerDocument }); var ee = function (e, t) { return "none" === (e = t || e).style.display || "" === e.style.display && K(e) && "none" === ce.css(e, "display") }; function te(e, t, n, r) { var i, o, a = 20, s = r ? function () { return r.cur() } : function () { return ce.css(e, t, "") }, u = s(), l = n && n[3] || (ce.cssNumber[t] ? "" : "px"), c = e.nodeType && (ce.cssNumber[t] || "px" !== l && +u) && Y.exec(ce.css(e, t)); if (c && c[3] !== l) { u /= 2, l = l || c[3], c = +u || 1; while (a--) ce.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o; c *= 2, ce.style(e, t, c + l), n = n || [] } return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i } var ne = {}; function re(e, t) { for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = _.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ee(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ne[s]) || (o = a.body.appendChild(a.createElement(s)), u = ce.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ne[s] = u)))) : "none" !== n && (l[c] = "none", _.set(r, "display", n))); for (c = 0; c < f; c++)null != l[c] && (e[c].style.display = l[c]); return e } ce.fn.extend({ show: function () { return re(this, !0) }, hide: function () { return re(this) }, toggle: function (e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () { ee(this) ? ce(this).show() : ce(this).hide() }) } }); var xe, be, we = /^(?:checkbox|radio)$/i, Te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, Ce = /^$|^module$|\/(?:java|ecma)script/i; xe = C.createDocumentFragment().appendChild(C.createElement("div")), (be = C.createElement("input")).setAttribute("type", "radio"), be.setAttribute("checked", "checked"), be.setAttribute("name", "t"), xe.appendChild(be), le.checkClone = xe.cloneNode(!0).cloneNode(!0).lastChild.checked, xe.innerHTML = "<textarea>x</textarea>", le.noCloneChecked = !!xe.cloneNode(!0).lastChild.defaultValue, xe.innerHTML = "<option></option>", le.option = !!xe.lastChild; var ke = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] }; function Se(e, t) { var n; return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && fe(e, t) ? ce.merge([e], n) : n } function Ee(e, t) { for (var n = 0, r = e.length; n < r; n++)_.set(e[n], "globalEval", !t || _.get(t[n], "globalEval")) } ke.tbody = ke.tfoot = ke.colgroup = ke.caption = ke.thead, ke.th = ke.td, le.option || (ke.optgroup = ke.option = [1, "<select multiple='multiple'>", "</select>"]); var je = /<|&#?\w+;/; function Ae(e, t, n, r, i) { for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)if ((o = e[d]) || 0 === o) if ("object" === x(o)) ce.merge(p, o.nodeType ? [o] : o); else if (je.test(o)) { a = a || f.appendChild(t.createElement("div")), s = (Te.exec(o) || ["", ""])[1].toLowerCase(), u = ke[s] || ke._default, a.innerHTML = u[1] + ce.htmlPrefilter(o) + u[2], c = u[0]; while (c--) a = a.lastChild; ce.merge(p, a.childNodes), (a = f.firstChild).textContent = "" } else p.push(t.createTextNode(o)); f.textContent = "", d = 0; while (o = p[d++]) if (r && -1 < ce.inArray(o, r)) i && i.push(o); else if (l = K(o), a = Se(f.appendChild(o), "script"), l && Ee(a), n) { c = 0; while (o = a[c++]) Ce.test(o.type || "") && n.push(o) } return f } var De = /^([^.]*)(?:\.(.+)|)/; function Ne() { return !0 } function qe() { return !1 } function Le(e, t, n, r, i, o) { var a, s; if ("object" == typeof t) { for (s in "string" != typeof n && (r = r || n, n = void 0), t) Le(e, s, n, r, t[s], o); return e } if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = qe; else if (!i) return e; return 1 === o && (a = i, (i = function (e) { return ce().off(e), a.apply(this, arguments) }).guid = a.guid || (a.guid = ce.guid++)), e.each(function () { ce.event.add(this, t, i, r, n) }) } function He(e, r, t) { t ? (_.set(e, r, !1), ce.event.add(e, r, { namespace: !1, handler: function (e) { var t, n = _.get(this, r); if (1 & e.isTrigger && this[r]) { if (n) (ce.event.special[r] || {}).delegateType && e.stopPropagation(); else if (n = ae.call(arguments), _.set(this, r, n), this[r](), t = _.get(this, r), _.set(this, r, !1), n !== t) return e.stopImmediatePropagation(), e.preventDefault(), t } else n && (_.set(this, r, ce.event.trigger(n[0], n.slice(1), this)), e.stopPropagation(), e.isImmediatePropagationStopped = Ne) } })) : void 0 === _.get(e, r) && ce.event.add(e, r, Ne) } ce.event = { global: {}, add: function (t, e, n, r, i) { var o, a, s, u, l, c, f, p, d, h, g, v = _.get(t); if ($(t)) { n.handler && (n = (o = n).handler, i = o.selector), i && ce.find.matchesSelector(J, i), n.guid || (n.guid = ce.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (e) { return "undefined" != typeof ce && ce.event.triggered !== e.type ? ce.event.dispatch.apply(t, arguments) : void 0 }), l = (e = (e || "").match(D) || [""]).length; while (l--) d = g = (s = De.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = ce.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = ce.event.special[d] || {}, c = ce.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && ce.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), ce.event.global[d] = !0) } }, remove: function (e, t, n, r, i) { var o, a, s, u, l, c, f, p, d, h, g, v = _.hasData(e) && _.get(e); if (v && (u = v.events)) { l = (t = (t || "").match(D) || [""]).length; while (l--) if (d = g = (s = De.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) { f = ce.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c)); a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || ce.removeEvent(e, d, v.handle), delete u[d]) } else for (d in u) ce.event.remove(e, d + t[l], n, r, !0); ce.isEmptyObject(u) && _.remove(e, "handle events") } }, dispatch: function (e) { var t, n, r, i, o, a, s = new Array(arguments.length), u = ce.event.fix(e), l = (_.get(this, "events") || Object.create(null))[u.type] || [], c = ce.event.special[u.type] || {}; for (s[0] = u, t = 1; t < arguments.length; t++)s[t] = arguments[t]; if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) { a = ce.event.handlers.call(this, u, l), t = 0; while ((i = a[t++]) && !u.isPropagationStopped()) { u.currentTarget = i.elem, n = 0; while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((ce.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation())) } return c.postDispatch && c.postDispatch.call(this, u), u.result } }, handlers: function (e, t) { var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target; if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this)if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) { for (o = [], a = {}, n = 0; n < u; n++)void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < ce(i, this).index(l) : ce.find(i, this, null, [l]).length), a[i] && o.push(r); o.length && s.push({ elem: l, handlers: o }) } return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s }, addProp: function (t, e) { Object.defineProperty(ce.Event.prototype, t, { enumerable: !0, configurable: !0, get: v(e) ? function () { if (this.originalEvent) return e(this.originalEvent) } : function () { if (this.originalEvent) return this.originalEvent[t] }, set: function (e) { Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) } }) }, fix: function (e) { return e[ce.expando] ? e : new ce.Event(e) }, special: { load: { noBubble: !0 }, click: { setup: function (e) { var t = this || e; return we.test(t.type) && t.click && fe(t, "input") && He(t, "click", !0), !1 }, trigger: function (e) { var t = this || e; return we.test(t.type) && t.click && fe(t, "input") && He(t, "click"), !0 }, _default: function (e) { var t = e.target; return we.test(t.type) && t.click && fe(t, "input") && _.get(t, "click") || fe(t, "a") } }, beforeunload: { postDispatch: function (e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } } }, ce.removeEvent = function (e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, ce.Event = function (e, t) { if (!(this instanceof ce.Event)) return new ce.Event(e, t); e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ne : qe, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && ce.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[ce.expando] = !0 }, ce.Event.prototype = { constructor: ce.Event, isDefaultPrevented: qe, isPropagationStopped: qe, isImmediatePropagationStopped: qe, isSimulated: !1, preventDefault: function () { var e = this.originalEvent; this.isDefaultPrevented = Ne, e && !this.isSimulated && e.preventDefault() }, stopPropagation: function () { var e = this.originalEvent; this.isPropagationStopped = Ne, e && !this.isSimulated && e.stopPropagation() }, stopImmediatePropagation: function () { var e = this.originalEvent; this.isImmediatePropagationStopped = Ne, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation() } }, ce.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: !0 }, ce.event.addProp), ce.each({ focus: "focusin", blur: "focusout" }, function (r, i) { function o(e) { if (C.documentMode) { var t = _.get(this, "handle"), n = ce.event.fix(e); n.type = "focusin" === e.type ? "focus" : "blur", n.isSimulated = !0, t(e), n.target === n.currentTarget && t(n) } else ce.event.simulate(i, e.target, ce.event.fix(e)) } ce.event.special[r] = { setup: function () { var e; if (He(this, r, !0), !C.documentMode) return !1; (e = _.get(this, i)) || this.addEventListener(i, o), _.set(this, i, (e || 0) + 1) }, trigger: function () { return He(this, r), !0 }, teardown: function () { var e; if (!C.documentMode) return !1; (e = _.get(this, i) - 1) ? _.set(this, i, e) : (this.removeEventListener(i, o), _.remove(this, i)) }, _default: function (e) { return _.get(e.target, r) }, delegateType: i }, ce.event.special[i] = { setup: function () { var e = this.ownerDocument || this.document || this, t = C.documentMode ? this : e, n = _.get(t, i); n || (C.documentMode ? this.addEventListener(i, o) : e.addEventListener(r, o, !0)), _.set(t, i, (n || 0) + 1) }, teardown: function () { var e = this.ownerDocument || this.document || this, t = C.documentMode ? this : e, n = _.get(t, i) - 1; n ? _.set(t, i, n) : (C.documentMode ? this.removeEventListener(i, o) : e.removeEventListener(r, o, !0), _.remove(t, i)) } } }), ce.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, i) { ce.event.special[e] = { delegateType: i, bindType: i, handle: function (e) { var t, n = e.relatedTarget, r = e.handleObj; return n && (n === this || ce.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t } } }), ce.fn.extend({ on: function (e, t, n, r) { return Le(this, e, t, n, r) }, one: function (e, t, n, r) { return Le(this, e, t, n, r, 1) }, off: function (e, t, n) { var r, i; if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ce(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this; if ("object" == typeof e) { for (i in e) this.off(i, t, e[i]); return this } return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = qe), this.each(function () { ce.event.remove(this, e, n, t) }) } }); var Oe = /<script|<style|<link/i, Pe = /checked\s*(?:[^=]|=\s*.checked.)/i, Me = /^\s*<!\[CDATA\[|\]\]>\s*$/g; function Re(e, t) { return fe(e, "table") && fe(11 !== t.nodeType ? t : t.firstChild, "tr") && ce(e).children("tbody")[0] || e } function Ie(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e } function We(e) { return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e } function Fe(e, t) { var n, r, i, o, a, s; if (1 === t.nodeType) { if (_.hasData(e) && (s = _.get(e).events)) for (i in _.remove(t, "handle events"), s) for (n = 0, r = s[i].length; n < r; n++)ce.event.add(t, i, s[i][n]); z.hasData(e) && (o = z.access(e), a = ce.extend({}, o), z.set(t, a)) } } function $e(n, r, i, o) { r = g(r); var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = v(d); if (h || 1 < f && "string" == typeof d && !le.checkClone && Pe.test(d)) return n.each(function (e) { var t = n.eq(e); h && (r[0] = d.call(this, e, t.html())), $e(t, r, i, o) }); if (f && (t = (e = Ae(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) { for (s = (a = ce.map(Se(e, "script"), Ie)).length; c < f; c++)u = e, c !== p && (u = ce.clone(u, !0, !0), s && ce.merge(a, Se(u, "script"))), i.call(n[c], u, c); if (s) for (l = a[a.length - 1].ownerDocument, ce.map(a, We), c = 0; c < s; c++)u = a[c], Ce.test(u.type || "") && !_.access(u, "globalEval") && ce.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? ce._evalUrl && !u.noModule && ce._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }, l) : m(u.textContent.replace(Me, ""), u, l)) } return n } function Be(e, t, n) { for (var r, i = t ? ce.filter(t, e) : e, o = 0; null != (r = i[o]); o++)n || 1 !== r.nodeType || ce.cleanData(Se(r)), r.parentNode && (n && K(r) && Ee(Se(r, "script")), r.parentNode.removeChild(r)); return e } ce.extend({ htmlPrefilter: function (e) { return e }, clone: function (e, t, n) { var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = K(e); if (!(le.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ce.isXMLDoc(e))) for (a = Se(c), r = 0, i = (o = Se(e)).length; r < i; r++)s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && we.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue); if (t) if (n) for (o = o || Se(e), a = a || Se(c), r = 0, i = o.length; r < i; r++)Fe(o[r], a[r]); else Fe(e, c); return 0 < (a = Se(c, "script")).length && Ee(a, !f && Se(e, "script")), c }, cleanData: function (e) { for (var t, n, r, i = ce.event.special, o = 0; void 0 !== (n = e[o]); o++)if ($(n)) { if (t = n[_.expando]) { if (t.events) for (r in t.events) i[r] ? ce.event.remove(n, r) : ce.removeEvent(n, r, t.handle); n[_.expando] = void 0 } n[z.expando] && (n[z.expando] = void 0) } } }), ce.fn.extend({ detach: function (e) { return Be(this, e, !0) }, remove: function (e) { return Be(this, e) }, text: function (e) { return M(this, function (e) { return void 0 === e ? ce.text(this) : this.empty().each(function () { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) }) }, null, e, arguments.length) }, append: function () { return $e(this, arguments, function (e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Re(this, e).appendChild(e) }) }, prepend: function () { return $e(this, arguments, function (e) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var t = Re(this, e); t.insertBefore(e, t.firstChild) } }) }, before: function () { return $e(this, arguments, function (e) { this.parentNode && this.parentNode.insertBefore(e, this) }) }, after: function () { return $e(this, arguments, function (e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) }, empty: function () { for (var e, t = 0; null != (e = this[t]); t++)1 === e.nodeType && (ce.cleanData(Se(e, !1)), e.textContent = ""); return this }, clone: function (e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function () { return ce.clone(this, e, t) }) }, html: function (e) { return M(this, function (e) { var t = this[0] || {}, n = 0, r = this.length; if (void 0 === e && 1 === t.nodeType) return t.innerHTML; if ("string" == typeof e && !Oe.test(e) && !ke[(Te.exec(e) || ["", ""])[1].toLowerCase()]) { e = ce.htmlPrefilter(e); try { for (; n < r; n++)1 === (t = this[n] || {}).nodeType && (ce.cleanData(Se(t, !1)), t.innerHTML = e); t = 0 } catch (e) { } } t && this.empty().append(e) }, null, e, arguments.length) }, replaceWith: function () { var n = []; return $e(this, arguments, function (e) { var t = this.parentNode; ce.inArray(this, n) < 0 && (ce.cleanData(Se(this)), t && t.replaceChild(e, this)) }, n) } }), ce.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, a) { ce.fn[e] = function (e) { for (var t, n = [], r = ce(e), i = r.length - 1, o = 0; o <= i; o++)t = o === i ? this : this.clone(!0), ce(r[o])[a](t), s.apply(n, t.get()); return this.pushStack(n) } }); var _e = new RegExp("^(" + G + ")(?!px)[a-z%]+$", "i"), ze = /^--/, Xe = function (e) { var t = e.ownerDocument.defaultView; return t && t.opener || (t = ie), t.getComputedStyle(e) }, Ue = function (e, t, n) { var r, i, o = {}; for (i in t) o[i] = e.style[i], e.style[i] = t[i]; for (i in r = n.call(e), t) e.style[i] = o[i]; return r }, Ve = new RegExp(Q.join("|"), "i"); function Ge(e, t, n) { var r, i, o, a, s = ze.test(t), u = e.style; return (n = n || Xe(e)) && (a = n.getPropertyValue(t) || n[t], s && a && (a = a.replace(ve, "$1") || void 0), "" !== a || K(e) || (a = ce.style(e, t)), !le.pixelBoxStyles() && _e.test(a) && Ve.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = n.width, u.width = r, u.minWidth = i, u.maxWidth = o)), void 0 !== a ? a + "" : a } function Ye(e, t) { return { get: function () { if (!e()) return (this.get = t).apply(this, arguments); delete this.get } } } !function () { function e() { if (l) { u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", J.appendChild(u).appendChild(l); var e = ie.getComputedStyle(l); n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), J.removeChild(u), l = null } } function t(e) { return Math.round(parseFloat(e)) } var n, r, i, o, a, s, u = C.createElement("div"), l = C.createElement("div"); l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", le.clearCloneStyle = "content-box" === l.style.backgroundClip, ce.extend(le, { boxSizingReliable: function () { return e(), r }, pixelBoxStyles: function () { return e(), o }, pixelPosition: function () { return e(), n }, reliableMarginLeft: function () { return e(), s }, scrollboxSize: function () { return e(), i }, reliableTrDimensions: function () { var e, t, n, r; return null == a && (e = C.createElement("table"), t = C.createElement("tr"), n = C.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "box-sizing:content-box;border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", J.appendChild(e).appendChild(t).appendChild(n), r = ie.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, J.removeChild(e)), a } })) }(); var Qe = ["Webkit", "Moz", "ms"], Je = C.createElement("div").style, Ke = {}; function Ze(e) { var t = ce.cssProps[e] || Ke[e]; return t || (e in Je ? e : Ke[e] = function (e) { var t = e[0].toUpperCase() + e.slice(1), n = Qe.length; while (n--) if ((e = Qe[n] + t) in Je) return e }(e) || e) } var et = /^(none|table(?!-c[ea]).+)/, tt = { position: "absolute", visibility: "hidden", display: "block" }, nt = { letterSpacing: "0", fontWeight: "400" }; function rt(e, t, n) { var r = Y.exec(t); return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t } function it(e, t, n, r, i, o) { var a = "width" === t ? 1 : 0, s = 0, u = 0, l = 0; if (n === (r ? "border" : "content")) return 0; for (; a < 4; a += 2)"margin" === n && (l += ce.css(e, n + Q[a], !0, i)), r ? ("content" === n && (u -= ce.css(e, "padding" + Q[a], !0, i)), "margin" !== n && (u -= ce.css(e, "border" + Q[a] + "Width", !0, i))) : (u += ce.css(e, "padding" + Q[a], !0, i), "padding" !== n ? u += ce.css(e, "border" + Q[a] + "Width", !0, i) : s += ce.css(e, "border" + Q[a] + "Width", !0, i)); return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u + l } function ot(e, t, n) { var r = Xe(e), i = (!le.boxSizingReliable() || n) && "border-box" === ce.css(e, "boxSizing", !1, r), o = i, a = Ge(e, t, r), s = "offset" + t[0].toUpperCase() + t.slice(1); if (_e.test(a)) { if (!n) return a; a = "auto" } return (!le.boxSizingReliable() && i || !le.reliableTrDimensions() && fe(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === ce.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === ce.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + it(e, t, n || (i ? "border" : "content"), o, r, a) + "px" } function at(e, t, n, r, i) { return new at.prototype.init(e, t, n, r, i) } ce.extend({ cssHooks: { opacity: { get: function (e, t) { if (t) { var n = Ge(e, "opacity"); return "" === n ? "1" : n } } } }, cssNumber: { animationIterationCount: !0, aspectRatio: !0, borderImageSlice: !0, columnCount: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, scale: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeMiterlimit: !0, strokeOpacity: !0 }, cssProps: {}, style: function (e, t, n, r) { if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) { var i, o, a, s = F(t), u = ze.test(t), l = e.style; if (u || (t = Ze(s)), a = ce.cssHooks[t] || ce.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t]; "string" === (o = typeof n) && (i = Y.exec(n)) && i[1] && (n = te(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (ce.cssNumber[s] ? "" : "px")), le.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n)) } }, css: function (e, t, n, r) { var i, o, a, s = F(t); return ze.test(t) || (t = Ze(s)), (a = ce.cssHooks[t] || ce.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Ge(e, t, r)), "normal" === i && t in nt && (i = nt[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i } }), ce.each(["height", "width"], function (e, u) { ce.cssHooks[u] = { get: function (e, t, n) { if (t) return !et.test(ce.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ot(e, u, n) : Ue(e, tt, function () { return ot(e, u, n) }) }, set: function (e, t, n) { var r, i = Xe(e), o = !le.scrollboxSize() && "absolute" === i.position, a = (o || n) && "border-box" === ce.css(e, "boxSizing", !1, i), s = n ? it(e, u, n, a, i) : 0; return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - it(e, u, "border", !1, i) - .5)), s && (r = Y.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = ce.css(e, u)), rt(0, t, s) } } }), ce.cssHooks.marginLeft = Ye(le.reliableMarginLeft, function (e, t) { if (t) return (parseFloat(Ge(e, "marginLeft")) || e.getBoundingClientRect().left - Ue(e, { marginLeft: 0 }, function () { return e.getBoundingClientRect().left })) + "px" }), ce.each({ margin: "", padding: "", border: "Width" }, function (i, o) { ce.cssHooks[i + o] = { expand: function (e) { for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)n[i + Q[t] + o] = r[t] || r[t - 2] || r[0]; return n } }, "margin" !== i && (ce.cssHooks[i + o].set = rt) }), ce.fn.extend({ css: function (e, t) { return M(this, function (e, t, n) { var r, i, o = {}, a = 0; if (Array.isArray(t)) { for (r = Xe(e), i = t.length; a < i; a++)o[t[a]] = ce.css(e, t[a], !1, r); return o } return void 0 !== n ? ce.style(e, t, n) : ce.css(e, t) }, e, t, 1 < arguments.length) } }), ((ce.Tween = at).prototype = { constructor: at, init: function (e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || ce.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ce.cssNumber[n] ? "" : "px") }, cur: function () { var e = at.propHooks[this.prop]; return e && e.get ? e.get(this) : at.propHooks._default.get(this) }, run: function (e) { var t, n = at.propHooks[this.prop]; return this.options.duration ? this.pos = t = ce.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : at.propHooks._default.set(this), this } }).init.prototype = at.prototype, (at.propHooks = { _default: { get: function (e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ce.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 }, set: function (e) { ce.fx.step[e.prop] ? ce.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !ce.cssHooks[e.prop] && null == e.elem.style[Ze(e.prop)] ? e.elem[e.prop] = e.now : ce.style(e.elem, e.prop, e.now + e.unit) } } }).scrollTop = at.propHooks.scrollLeft = { set: function (e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, ce.easing = { linear: function (e) { return e }, swing: function (e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, ce.fx = at.prototype.init, ce.fx.step = {}; var st, ut, lt, ct, ft = /^(?:toggle|show|hide)$/, pt = /queueHooks$/; function dt() { ut && (!1 === C.hidden && ie.requestAnimationFrame ? ie.requestAnimationFrame(dt) : ie.setTimeout(dt, ce.fx.interval), ce.fx.tick()) } function ht() { return ie.setTimeout(function () { st = void 0 }), st = Date.now() } function gt(e, t) { var n, r = 0, i = { height: e }; for (t = t ? 1 : 0; r < 4; r += 2 - t)i["margin" + (n = Q[r])] = i["padding" + n] = e; return t && (i.opacity = i.width = e), i } function vt(e, t, n) { for (var r, i = (yt.tweeners[t] || []).concat(yt.tweeners["*"]), o = 0, a = i.length; o < a; o++)if (r = i[o].call(n, t, e)) return r } function yt(o, e, t) { var n, a, r = 0, i = yt.prefilters.length, s = ce.Deferred().always(function () { delete u.elem }), u = function () { if (a) return !1; for (var e = st || ht(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++)l.tweens[r].run(n); return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1) }, l = s.promise({ elem: o, props: ce.extend({}, e), opts: ce.extend(!0, { specialEasing: {}, easing: ce.easing._default }, t), originalProperties: e, originalOptions: t, startTime: st || ht(), duration: t.duration, tweens: [], createTween: function (e, t) { var n = ce.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing); return l.tweens.push(n), n }, stop: function (e) { var t = 0, n = e ? l.tweens.length : 0; if (a) return this; for (a = !0; t < n; t++)l.tweens[t].run(1); return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this } }), c = l.props; for (!function (e, t) { var n, r, i, o, a; for (n in e) if (i = t[r = F(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = ce.cssHooks[r]) && "expand" in a) for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i); else t[r] = i }(c, l.opts.specialEasing); r < i; r++)if (n = yt.prefilters[r].call(l, o, c, l.opts)) return v(n.stop) && (ce._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n; return ce.map(c, vt, l), v(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), ce.fx.timer(ce.extend(u, { elem: o, anim: l, queue: l.opts.queue })), l } ce.Animation = ce.extend(yt, { tweeners: { "*": [function (e, t) { var n = this.createTween(e, t); return te(n.elem, e, Y.exec(t), n), n }] }, tweener: function (e, t) { v(e) ? (t = e, e = ["*"]) : e = e.match(D); for (var n, r = 0, i = e.length; r < i; r++)n = e[r], yt.tweeners[n] = yt.tweeners[n] || [], yt.tweeners[n].unshift(t) }, prefilters: [function (e, t, n) { var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t, p = this, d = {}, h = e.style, g = e.nodeType && ee(e), v = _.get(e, "fxshow"); for (r in n.queue || (null == (a = ce._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () { a.unqueued || s() }), a.unqueued++, p.always(function () { p.always(function () { a.unqueued--, ce.queue(e, "fx").length || a.empty.fire() }) })), t) if (i = t[r], ft.test(i)) { if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) { if ("show" !== i || !v || void 0 === v[r]) continue; g = !0 } d[r] = v && v[r] || ce.style(e, r) } if ((u = !ce.isEmptyObject(t)) || !ce.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = _.get(e, "display")), "none" === (c = ce.css(e, "display")) && (l ? c = l : (re([e], !0), l = e.style.display || l, c = ce.css(e, "display"), re([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === ce.css(e, "float") && (u || (p.done(function () { h.display = l }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () { h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2] })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = _.access(e, "fxshow", { display: l }), o && (v.hidden = !g), g && re([e], !0), p.done(function () { for (r in g || re([e]), _.remove(e, "fxshow"), d) ce.style(e, r, d[r]) })), u = vt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0)) }], prefilter: function (e, t) { t ? yt.prefilters.unshift(e) : yt.prefilters.push(e) } }), ce.speed = function (e, t, n) { var r = e && "object" == typeof e ? ce.extend({}, e) : { complete: n || !n && t || v(e) && e, duration: e, easing: n && t || t && !v(t) && t }; return ce.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in ce.fx.speeds ? r.duration = ce.fx.speeds[r.duration] : r.duration = ce.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () { v(r.old) && r.old.call(this), r.queue && ce.dequeue(this, r.queue) }, r }, ce.fn.extend({ fadeTo: function (e, t, n, r) { return this.filter(ee).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) }, animate: function (t, e, n, r) { var i = ce.isEmptyObject(t), o = ce.speed(e, n, r), a = function () { var e = yt(this, ce.extend({}, t), o); (i || _.get(this, "finish")) && e.stop(!0) }; return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a) }, stop: function (i, e, o) { var a = function (e) { var t = e.stop; delete e.stop, t(o) }; return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () { var e = !0, t = null != i && i + "queueHooks", n = ce.timers, r = _.get(this); if (t) r[t] && r[t].stop && a(r[t]); else for (t in r) r[t] && r[t].stop && pt.test(t) && a(r[t]); for (t = n.length; t--;)n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1)); !e && o || ce.dequeue(this, i) }) }, finish: function (a) { return !1 !== a && (a = a || "fx"), this.each(function () { var e, t = _.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = ce.timers, o = n ? n.length : 0; for (t.finish = !0, ce.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;)i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1)); for (e = 0; e < o; e++)n[e] && n[e].finish && n[e].finish.call(this); delete t.finish }) } }), ce.each(["toggle", "show", "hide"], function (e, r) { var i = ce.fn[r]; ce.fn[r] = function (e, t, n) { return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(gt(r, !0), e, t, n) } }), ce.each({ slideDown: gt("show"), slideUp: gt("hide"), slideToggle: gt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, r) { ce.fn[e] = function (e, t, n) { return this.animate(r, e, t, n) } }), ce.timers = [], ce.fx.tick = function () { var e, t = 0, n = ce.timers; for (st = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1); n.length || ce.fx.stop(), st = void 0 }, ce.fx.timer = function (e) { ce.timers.push(e), ce.fx.start() }, ce.fx.interval = 13, ce.fx.start = function () { ut || (ut = !0, dt()) }, ce.fx.stop = function () { ut = null }, ce.fx.speeds = { slow: 600, fast: 200, _default: 400 }, ce.fn.delay = function (r, e) { return r = ce.fx && ce.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) { var n = ie.setTimeout(e, r); t.stop = function () { ie.clearTimeout(n) } }) }, lt = C.createElement("input"), ct = C.createElement("select").appendChild(C.createElement("option")), lt.type = "checkbox", le.checkOn = "" !== lt.value, le.optSelected = ct.selected, (lt = C.createElement("input")).value = "t", lt.type = "radio", le.radioValue = "t" === lt.value; var mt, xt = ce.expr.attrHandle; ce.fn.extend({ attr: function (e, t) { return M(this, ce.attr, e, t, 1 < arguments.length) }, removeAttr: function (e) { return this.each(function () { ce.removeAttr(this, e) }) } }), ce.extend({ attr: function (e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? ce.prop(e, t, n) : (1 === o && ce.isXMLDoc(e) || (i = ce.attrHooks[t.toLowerCase()] || (ce.expr.match.bool.test(t) ? mt : void 0)), void 0 !== n ? null === n ? void ce.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = ce.find.attr(e, t)) ? void 0 : r) }, attrHooks: { type: { set: function (e, t) { if (!le.radioValue && "radio" === t && fe(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } }, removeAttr: function (e, t) { var n, r = 0, i = t && t.match(D); if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n) } }), mt = { set: function (e, t, n) { return !1 === t ? ce.removeAttr(e, n) : e.setAttribute(n, n), n } }, ce.each(ce.expr.match.bool.source.match(/\w+/g), function (e, t) { var a = xt[t] || ce.find.attr; xt[t] = function (e, t, n) { var r, i, o = t.toLowerCase(); return n || (i = xt[o], xt[o] = r, r = null != a(e, t, n) ? o : null, xt[o] = i), r } }); var bt = /^(?:input|select|textarea|button)$/i, wt = /^(?:a|area)$/i; function Tt(e) { return (e.match(D) || []).join(" ") } function Ct(e) { return e.getAttribute && e.getAttribute("class") || "" } function kt(e) { return Array.isArray(e) ? e : "string" == typeof e && e.match(D) || [] } ce.fn.extend({ prop: function (e, t) { return M(this, ce.prop, e, t, 1 < arguments.length) }, removeProp: function (e) { return this.each(function () { delete this[ce.propFix[e] || e] }) } }), ce.extend({ prop: function (e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ce.isXMLDoc(e) || (t = ce.propFix[t] || t, i = ce.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t] }, propHooks: { tabIndex: { get: function (e) { var t = ce.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : bt.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), le.optSelected || (ce.propHooks.selected = { get: function (e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null }, set: function (e) { var t = e.parentNode; t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex) } }), ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () { ce.propFix[this.toLowerCase()] = this }), ce.fn.extend({ addClass: function (t) { var e, n, r, i, o, a; return v(t) ? this.each(function (e) { ce(this).addClass(t.call(this, e, Ct(this))) }) : (e = kt(t)).length ? this.each(function () { if (r = Ct(this), n = 1 === this.nodeType && " " + Tt(r) + " ") { for (o = 0; o < e.length; o++)i = e[o], n.indexOf(" " + i + " ") < 0 && (n += i + " "); a = Tt(n), r !== a && this.setAttribute("class", a) } }) : this }, removeClass: function (t) { var e, n, r, i, o, a; return v(t) ? this.each(function (e) { ce(this).removeClass(t.call(this, e, Ct(this))) }) : arguments.length ? (e = kt(t)).length ? this.each(function () { if (r = Ct(this), n = 1 === this.nodeType && " " + Tt(r) + " ") { for (o = 0; o < e.length; o++) { i = e[o]; while (-1 < n.indexOf(" " + i + " ")) n = n.replace(" " + i + " ", " ") } a = Tt(n), r !== a && this.setAttribute("class", a) } }) : this : this.attr("class", "") }, toggleClass: function (t, n) { var e, r, i, o, a = typeof t, s = "string" === a || Array.isArray(t); return v(t) ? this.each(function (e) { ce(this).toggleClass(t.call(this, e, Ct(this), n), n) }) : "boolean" == typeof n && s ? n ? this.addClass(t) : this.removeClass(t) : (e = kt(t), this.each(function () { if (s) for (o = ce(this), i = 0; i < e.length; i++)r = e[i], o.hasClass(r) ? o.removeClass(r) : o.addClass(r); else void 0 !== t && "boolean" !== a || ((r = Ct(this)) && _.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === t ? "" : _.get(this, "__className__") || "")) })) }, hasClass: function (e) { var t, n, r = 0; t = " " + e + " "; while (n = this[r++]) if (1 === n.nodeType && -1 < (" " + Tt(Ct(n)) + " ").indexOf(t)) return !0; return !1 } }); var St = /\r/g; ce.fn.extend({ val: function (n) { var r, e, i, t = this[0]; return arguments.length ? (i = v(n), this.each(function (e) { var t; 1 === this.nodeType && (null == (t = i ? n.call(this, e, ce(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = ce.map(t, function (e) { return null == e ? "" : e + "" })), (r = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t)) })) : t ? (r = ce.valHooks[t.type] || ce.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(St, "") : null == e ? "" : e : void 0 } }), ce.extend({ valHooks: { option: { get: function (e) { var t = ce.find.attr(e, "value"); return null != t ? t : Tt(ce.text(e)) } }, select: { get: function (e) { var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length; for (r = o < 0 ? u : a ? o : 0; r < u; r++)if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !fe(n.parentNode, "optgroup"))) { if (t = ce(n).val(), a) return t; s.push(t) } return s }, set: function (e, t) { var n, r, i = e.options, o = ce.makeArray(t), a = i.length; while (a--) ((r = i[a]).selected = -1 < ce.inArray(ce.valHooks.option.get(r), o)) && (n = !0); return n || (e.selectedIndex = -1), o } } } }), ce.each(["radio", "checkbox"], function () { ce.valHooks[this] = { set: function (e, t) { if (Array.isArray(t)) return e.checked = -1 < ce.inArray(ce(e).val(), t) } }, le.checkOn || (ce.valHooks[this].get = function (e) { return null === e.getAttribute("value") ? "on" : e.value }) }); var Et = ie.location, jt = { guid: Date.now() }, At = /\?/; ce.parseXML = function (e) { var t, n; if (!e || "string" != typeof e) return null; try { t = (new ie.DOMParser).parseFromString(e, "text/xml") } catch (e) { } return n = t && t.getElementsByTagName("parsererror")[0], t && !n || ce.error("Invalid XML: " + (n ? ce.map(n.childNodes, function (e) { return e.textContent }).join("\n") : e)), t }; var Dt = /^(?:focusinfocus|focusoutblur)$/, Nt = function (e) { e.stopPropagation() }; ce.extend(ce.event, { trigger: function (e, t, n, r) { var i, o, a, s, u, l, c, f, p = [n || C], d = ue.call(e, "type") ? e.type : e, h = ue.call(e, "namespace") ? e.namespace.split(".") : []; if (o = f = a = n = n || C, 3 !== n.nodeType && 8 !== n.nodeType && !Dt.test(d + ce.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[ce.expando] ? e : new ce.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : ce.makeArray(t, [e]), c = ce.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) { if (!r && !c.noBubble && !y(n)) { for (s = c.delegateType || d, Dt.test(s + d) || (o = o.parentNode); o; o = o.parentNode)p.push(o), a = o; a === (n.ownerDocument || C) && p.push(a.defaultView || a.parentWindow || ie) } i = 0; while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (_.get(o, "events") || Object.create(null))[e.type] && _.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && $(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault()); return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !$(n) || u && v(n[d]) && !y(n) && ((a = n[u]) && (n[u] = null), ce.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Nt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Nt), ce.event.triggered = void 0, a && (n[u] = a)), e.result } }, simulate: function (e, t, n) { var r = ce.extend(new ce.Event, n, { type: e, isSimulated: !0 }); ce.event.trigger(r, null, t) } }), ce.fn.extend({ trigger: function (e, t) { return this.each(function () { ce.event.trigger(e, t, this) }) }, triggerHandler: function (e, t) { var n = this[0]; if (n) return ce.event.trigger(e, t, n, !0) } }); var qt = /\[\]$/, Lt = /\r?\n/g, Ht = /^(?:submit|button|image|reset|file)$/i, Ot = /^(?:input|select|textarea|keygen)/i; function Pt(n, e, r, i) { var t; if (Array.isArray(e)) ce.each(e, function (e, t) { r || qt.test(n) ? i(n, t) : Pt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i) }); else if (r || "object" !== x(e)) i(n, e); else for (t in e) Pt(n + "[" + t + "]", e[t], r, i) } ce.param = function (e, t) { var n, r = [], i = function (e, t) { var n = v(t) ? t() : t; r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n) }; if (null == e) return ""; if (Array.isArray(e) || e.jquery && !ce.isPlainObject(e)) ce.each(e, function () { i(this.name, this.value) }); else for (n in e) Pt(n, e[n], t, i); return r.join("&") }, ce.fn.extend({ serialize: function () { return ce.param(this.serializeArray()) }, serializeArray: function () { return this.map(function () { var e = ce.prop(this, "elements"); return e ? ce.makeArray(e) : this }).filter(function () { var e = this.type; return this.name && !ce(this).is(":disabled") && Ot.test(this.nodeName) && !Ht.test(e) && (this.checked || !we.test(e)) }).map(function (e, t) { var n = ce(this).val(); return null == n ? null : Array.isArray(n) ? ce.map(n, function (e) { return { name: t.name, value: e.replace(Lt, "\r\n") } }) : { name: t.name, value: n.replace(Lt, "\r\n") } }).get() } }); var Mt = /%20/g, Rt = /#.*$/, It = /([?&])_=[^&]*/, Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ft = /^(?:GET|HEAD)$/, $t = /^\/\//, Bt = {}, _t = {}, zt = "*/".concat("*"), Xt = C.createElement("a"); function Ut(o) { return function (e, t) { "string" != typeof e && (t = e, e = "*"); var n, r = 0, i = e.toLowerCase().match(D) || []; if (v(t)) while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t) } } function Vt(t, i, o, a) { var s = {}, u = t === _t; function l(e) { var r; return s[e] = !0, ce.each(t[e] || [], function (e, t) { var n = t(i, o, a); return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1) }), r } return l(i.dataTypes[0]) || !s["*"] && l("*") } function Gt(e, t) { var n, r, i = ce.ajaxSettings.flatOptions || {}; for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]); return r && ce.extend(!0, e, r), e } Xt.href = Et.href, ce.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Et.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": zt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": ce.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (e, t) { return t ? Gt(Gt(e, ce.ajaxSettings), t) : Gt(ce.ajaxSettings, e) }, ajaxPrefilter: Ut(Bt), ajaxTransport: Ut(_t), ajax: function (e, t) { "object" == typeof e && (t = e, e = void 0), t = t || {}; var c, f, p, n, d, r, h, g, i, o, v = ce.ajaxSetup({}, t), y = v.context || v, m = v.context && (y.nodeType || y.jquery) ? ce(y) : ce.event, x = ce.Deferred(), b = ce.Callbacks("once memory"), w = v.statusCode || {}, a = {}, s = {}, u = "canceled", T = { readyState: 0, getResponseHeader: function (e) { var t; if (h) { if (!n) { n = {}; while (t = Wt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]) } t = n[e.toLowerCase() + " "] } return null == t ? null : t.join(", ") }, getAllResponseHeaders: function () { return h ? p : null }, setRequestHeader: function (e, t) { return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this }, overrideMimeType: function (e) { return null == h && (v.mimeType = e), this }, statusCode: function (e) { var t; if (e) if (h) T.always(e[T.status]); else for (t in e) w[t] = [w[t], e[t]]; return this }, abort: function (e) { var t = e || u; return c && c.abort(t), l(0, t), this } }; if (x.promise(T), v.url = ((e || v.url || Et.href) + "").replace($t, Et.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(D) || [""], null == v.crossDomain) { r = C.createElement("a"); try { r.href = v.url, r.href = r.href, v.crossDomain = Xt.protocol + "//" + Xt.host != r.protocol + "//" + r.host } catch (e) { v.crossDomain = !0 } } if (v.data && v.processData && "string" != typeof v.data && (v.data = ce.param(v.data, v.traditional)), Vt(Bt, v, t, T), h) return T; for (i in (g = ce.event && v.global) && 0 == ce.active++ && ce.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ft.test(v.type), f = v.url.replace(Rt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Mt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (At.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(It, "$1"), o = (At.test(f) ? "&" : "?") + "_=" + jt.guid++ + o), v.url = f + o), v.ifModified && (ce.lastModified[f] && T.setRequestHeader("If-Modified-Since", ce.lastModified[f]), ce.etag[f] && T.setRequestHeader("If-None-Match", ce.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]); if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort(); if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Vt(_t, v, t, T)) { if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T; v.async && 0 < v.timeout && (d = ie.setTimeout(function () { T.abort("timeout") }, v.timeout)); try { h = !1, c.send(a, l) } catch (e) { if (h) throw e; l(-1, e) } } else l(-1, "No Transport"); function l(e, t, n, r) { var i, o, a, s, u, l = t; h || (h = !0, d && ie.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) { var r, i, o, a, s = e.contents, u = e.dataTypes; while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type")); if (r) for (i in s) if (s[i] && s[i].test(r)) { u.unshift(i); break } if (u[0] in n) o = u[0]; else { for (i in n) { if (!u[0] || e.converters[i + " " + u[0]]) { o = i; break } a || (a = i) } o = o || a } if (o) return o !== u[0] && u.unshift(o), n[o] }(v, T, n)), !i && -1 < ce.inArray("script", v.dataTypes) && ce.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function () { }), s = function (e, t, n, r) { var i, o, a, s, u, l = {}, c = e.dataTypes.slice(); if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a]; o = c.shift(); while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) { if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) { !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1])); break } if (!0 !== a) if (a && e["throws"]) t = a(t); else try { t = a(t) } catch (e) { return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o } } } return { state: "success", data: t } }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (ce.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (ce.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --ce.active || ce.event.trigger("ajaxStop"))) } return T }, getJSON: function (e, t, n) { return ce.get(e, t, n, "json") }, getScript: function (e, t) { return ce.get(e, void 0, t, "script") } }), ce.each(["get", "post"], function (e, i) { ce[i] = function (e, t, n, r) { return v(t) && (r = r || n, n = t, t = void 0), ce.ajax(ce.extend({ url: e, type: i, dataType: r, data: t, success: n }, ce.isPlainObject(e) && e)) } }), ce.ajaxPrefilter(function (e) { var t; for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "") }), ce._evalUrl = function (e, t, n) { return ce.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, converters: { "text script": function () { } }, dataFilter: function (e) { ce.globalEval(e, t, n) } }) }, ce.fn.extend({ wrapAll: function (e) { var t; return this[0] && (v(e) && (e = e.call(this[0])), t = ce(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () { var e = this; while (e.firstElementChild) e = e.firstElementChild; return e }).append(this)), this }, wrapInner: function (n) { return v(n) ? this.each(function (e) { ce(this).wrapInner(n.call(this, e)) }) : this.each(function () { var e = ce(this), t = e.contents(); t.length ? t.wrapAll(n) : e.append(n) }) }, wrap: function (t) { var n = v(t); return this.each(function (e) { ce(this).wrapAll(n ? t.call(this, e) : t) }) }, unwrap: function (e) { return this.parent(e).not("body").each(function () { ce(this).replaceWith(this.childNodes) }), this } }), ce.expr.pseudos.hidden = function (e) { return !ce.expr.pseudos.visible(e) }, ce.expr.pseudos.visible = function (e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, ce.ajaxSettings.xhr = function () { try { return new ie.XMLHttpRequest } catch (e) { } }; var Yt = { 0: 200, 1223: 204 }, Qt = ce.ajaxSettings.xhr(); le.cors = !!Qt && "withCredentials" in Qt, le.ajax = Qt = !!Qt, ce.ajaxTransport(function (i) { var o, a; if (le.cors || Qt && !i.crossDomain) return { send: function (e, t) { var n, r = i.xhr(); if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) r[n] = i.xhrFields[n]; for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]); o = function (e) { return function () { o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Yt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? { binary: r.response } : { text: r.responseText }, r.getAllResponseHeaders())) } }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () { 4 === r.readyState && ie.setTimeout(function () { o && a() }) }, o = o("abort"); try { r.send(i.hasContent && i.data || null) } catch (e) { if (o) throw e } }, abort: function () { o && o() } } }), ce.ajaxPrefilter(function (e) { e.crossDomain && (e.contents.script = !1) }), ce.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function (e) { return ce.globalEval(e), e } } }), ce.ajaxPrefilter("script", function (e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET") }), ce.ajaxTransport("script", function (n) { var r, i; if (n.crossDomain || n.scriptAttrs) return { send: function (e, t) { r = ce("<script>").attr(n.scriptAttrs || {}).prop({ charset: n.scriptCharset, src: n.url }).on("load error", i = function (e) { r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type) }), C.head.appendChild(r[0]) }, abort: function () { i && i() } } }); var Jt, Kt = [], Zt = /(=)\?(?=&|$)|\?\?/; ce.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { var e = Kt.pop() || ce.expando + "_" + jt.guid++; return this[e] = !0, e } }), ce.ajaxPrefilter("json jsonp", function (e, t, n) { var r, i, o, a = !1 !== e.jsonp && (Zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(e.data) && "data"); if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Zt, "$1" + r) : !1 !== e.jsonp && (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () { return o || ce.error(r + " was not called"), o[0] }, e.dataTypes[0] = "json", i = ie[r], ie[r] = function () { o = arguments }, n.always(function () { void 0 === i ? ce(ie).removeProp(r) : ie[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Kt.push(r)), o && v(i) && i(o[0]), o = i = void 0 }), "script" }), le.createHTMLDocument = ((Jt = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Jt.childNodes.length), ce.parseHTML = function (e, t, n) { return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (le.createHTMLDocument ? ((r = (t = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href, t.head.appendChild(r)) : t = C), o = !n && [], (i = w.exec(e)) ? [t.createElement(i[1])] : (i = Ae([e], t, o), o && o.length && ce(o).remove(), ce.merge([], i.childNodes))); var r, i, o }, ce.fn.load = function (e, t, n) { var r, i, o, a = this, s = e.indexOf(" "); return -1 < s && (r = Tt(e.slice(s)), e = e.slice(0, s)), v(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && ce.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function (e) { o = arguments, a.html(r ? ce("<div>").append(ce.parseHTML(e)).find(r) : e) }).always(n && function (e, t) { a.each(function () { n.apply(this, o || [e.responseText, t, e]) }) }), this }, ce.expr.pseudos.animated = function (t) { return ce.grep(ce.timers, function (e) { return t === e.elem }).length }, ce.offset = { setOffset: function (e, t, n) { var r, i, o, a, s, u, l = ce.css(e, "position"), c = ce(e), f = {}; "static" === l && (e.style.position = "relative"), s = c.offset(), o = ce.css(e, "top"), u = ce.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), v(t) && (t = t.call(e, n, ce.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f) } }, ce.fn.extend({ offset: function (t) { if (arguments.length) return void 0 === t ? this : this.each(function (e) { ce.offset.setOffset(this, t, e) }); var e, n, r = this[0]; return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0 }, position: function () { if (this[0]) { var e, t, n, r = this[0], i = { top: 0, left: 0 }; if ("fixed" === ce.css(r, "position")) t = r.getBoundingClientRect(); else { t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; while (e && (e === n.body || e === n.documentElement) && "static" === ce.css(e, "position")) e = e.parentNode; e && e !== r && 1 === e.nodeType && ((i = ce(e).offset()).top += ce.css(e, "borderTopWidth", !0), i.left += ce.css(e, "borderLeftWidth", !0)) } return { top: t.top - i.top - ce.css(r, "marginTop", !0), left: t.left - i.left - ce.css(r, "marginLeft", !0) } } }, offsetParent: function () { return this.map(function () { var e = this.offsetParent; while (e && "static" === ce.css(e, "position")) e = e.offsetParent; return e || J }) } }), ce.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, i) { var o = "pageYOffset" === i; ce.fn[t] = function (e) { return M(this, function (e, t, n) { var r; if (y(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t]; r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n }, t, e, arguments.length) } }), ce.each(["top", "left"], function (e, n) { ce.cssHooks[n] = Ye(le.pixelPosition, function (e, t) { if (t) return t = Ge(e, n), _e.test(t) ? ce(e).position()[n] + "px" : t }) }), ce.each({ Height: "height", Width: "width" }, function (a, s) { ce.each({ padding: "inner" + a, content: s, "": "outer" + a }, function (r, o) { ce.fn[o] = function (e, t) { var n = arguments.length && (r || "boolean" != typeof e), i = r || (!0 === e || !0 === t ? "margin" : "border"); return M(this, function (e, t, n) { var r; return y(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? ce.css(e, t, i) : ce.style(e, t, n, i) }, s, n ? e : void 0, n) } }) }), ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) { ce.fn[t] = function (e) { return this.on(t, e) } }), ce.fn.extend({ bind: function (e, t, n) { return this.on(e, null, t, n) }, unbind: function (e, t) { return this.off(e, null, t) }, delegate: function (e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function (e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) }, hover: function (e, t) { return this.on("mouseenter", e).on("mouseleave", t || e) } }), ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) { ce.fn[n] = function (e, t) { return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n) } }); var en = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g; ce.proxy = function (e, t) { var n, r, i; if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return r = ae.call(arguments, 2), (i = function () { return e.apply(t || this, r.concat(ae.call(arguments))) }).guid = e.guid = e.guid || ce.guid++, i }, ce.holdReady = function (e) { e ? ce.readyWait++ : ce.ready(!0) }, ce.isArray = Array.isArray, ce.parseJSON = JSON.parse, ce.nodeName = fe, ce.isFunction = v, ce.isWindow = y, ce.camelCase = F, ce.type = x, ce.now = Date.now, ce.isNumeric = function (e) { var t = ce.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) }, ce.trim = function (e) { return null == e ? "" : (e + "").replace(en, "$1") }, "function" == typeof define && define.amd && define("jquery", [], function () { return ce }); var tn = ie.jQuery, nn = ie.$; return ce.noConflict = function (e) { return ie.$ === ce && (ie.$ = nn), e && ie.jQuery === ce && (ie.jQuery = tn), ce }, "undefined" == typeof e && (ie.jQuery = ie.$ = ce), ce });

;/* ===== END: wwwroot/lib/jquery/dist/jquery.min.js ===== */


/* ===== START: wwwroot/assets/cropper.min.js ===== */
;/*!
 * Cropper.js v1.5.13
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2022-11-20T05:30:46.114Z
 */
!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).Cropper = e() }(this, function () { "use strict"; function C(e, t) { var i, a = Object.keys(e); return Object.getOwnPropertySymbols && (i = Object.getOwnPropertySymbols(e), t && (i = i.filter(function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable })), a.push.apply(a, i)), a } function S(a) { for (var t = 1; t < arguments.length; t++) { var n = null != arguments[t] ? arguments[t] : {}; t % 2 ? C(Object(n), !0).forEach(function (t) { var e, i; e = a, i = n[t = t], t in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = i }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(n)) : C(Object(n)).forEach(function (t) { Object.defineProperty(a, t, Object.getOwnPropertyDescriptor(n, t)) }) } return a } function D(t) { return (D = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) { return typeof t } : function (t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) } function A(t, e) { for (var i = 0; i < e.length; i++) { var a = e[i]; a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a) } } function j(t) { return function (t) { if (Array.isArray(t)) return a(t) }(t) || function (t) { if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t) }(t) || function (t, e) { var i; if (t) return "string" == typeof t ? a(t, e) : "Map" === (i = "Object" === (i = Object.prototype.toString.call(t).slice(8, -1)) && t.constructor ? t.constructor.name : i) || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? a(t, e) : void 0 }(t) || function () { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() } function a(t, e) { (null == e || e > t.length) && (e = t.length); for (var i = 0, a = new Array(e); i < e; i++)a[i] = t[i]; return a } var t = "undefined" != typeof window && void 0 !== window.document, h = t ? window : {}, e = !(!t || !h.document.documentElement) && "ontouchstart" in h.document.documentElement, i = t && "PointerEvent" in h, c = "cropper", P = "all", I = "crop", U = "move", q = "zoom", B = "e", k = "w", O = "s", T = "n", E = "ne", W = "nw", H = "se", N = "sw", $ = "".concat(c, "-crop"), Q = "".concat(c, "-disabled"), L = "".concat(c, "-hidden"), K = "".concat(c, "-hide"), Z = "".concat(c, "-invisible"), n = "".concat(c, "-modal"), G = "".concat(c, "-move"), d = "".concat(c, "Action"), m = "".concat(c, "Preview"), V = "crop", F = "move", J = "none", _ = "crop", tt = "cropend", et = "cropmove", it = "cropstart", at = "dblclick", nt = i ? "pointerdown" : e ? "touchstart" : "mousedown", ot = i ? "pointermove" : e ? "touchmove" : "mousemove", ht = i ? "pointerup pointercancel" : e ? "touchend touchcancel" : "mouseup", rt = "zoom", st = "image/jpeg", ct = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/, dt = /^data:/, lt = /^data:image\/jpeg;base64,/, pt = /^img|canvas$/i, mt = { viewMode: 0, dragMode: V, initialAspectRatio: NaN, aspectRatio: NaN, data: null, preview: "", responsive: !0, restore: !0, checkCrossOrigin: !0, checkOrientation: !0, modal: !0, guides: !0, center: !0, highlight: !0, background: !0, autoCrop: !0, autoCropArea: .8, movable: !0, rotatable: !0, scalable: !0, zoomable: !0, zoomOnTouch: !0, zoomOnWheel: !0, wheelZoomRatio: .1, cropBoxMovable: !0, cropBoxResizable: !0, toggleDragModeOnDblclick: !0, minCanvasWidth: 0, minCanvasHeight: 0, minCropBoxWidth: 0, minCropBoxHeight: 0, minContainerWidth: 200, minContainerHeight: 100, ready: null, cropstart: null, cropmove: null, cropend: null, crop: null, zoom: null }, ut = Number.isNaN || h.isNaN; function p(t) { return "number" == typeof t && !ut(t) } function gt(t) { return 0 < t && t < 1 / 0 } function ft(t) { return void 0 === t } function o(t) { return "object" === D(t) && null !== t } var vt = Object.prototype.hasOwnProperty; function u(t) { if (!o(t)) return !1; try { var e = t.constructor, i = e.prototype; return e && i && vt.call(i, "isPrototypeOf") } catch (t) { return !1 } } function l(t) { return "function" == typeof t } var wt = Array.prototype.slice; function bt(t) { return Array.from ? Array.from(t) : wt.call(t) } function z(i, a) { return i && l(a) && (Array.isArray(i) || p(i.length) ? bt(i).forEach(function (t, e) { a.call(i, t, e, i) }) : o(i) && Object.keys(i).forEach(function (t) { a.call(i, i[t], t, i) })), i } var g = Object.assign || function (i) { for (var t = arguments.length, e = new Array(1 < t ? t - 1 : 0), a = 1; a < t; a++)e[a - 1] = arguments[a]; return o(i) && 0 < e.length && e.forEach(function (e) { o(e) && Object.keys(e).forEach(function (t) { i[t] = e[t] }) }), i }, yt = /\.\d*(?:0|9){12}\d*$/; function Y(t, e) { e = 1 < arguments.length && void 0 !== e ? e : 1e11; return yt.test(t) ? Math.round(t * e) / e : t } var xt = /^width|height|left|top|marginLeft|marginTop$/; function f(t, e) { var i = t.style; z(e, function (t, e) { xt.test(e) && p(t) && (t = "".concat(t, "px")), i[e] = t }) } function v(t, e) { var i; e && (p(t.length) ? z(t, function (t) { v(t, e) }) : t.classList ? t.classList.add(e) : (i = t.className.trim()) ? i.indexOf(e) < 0 && (t.className = "".concat(i, " ").concat(e)) : t.className = e) } function X(t, e) { e && (p(t.length) ? z(t, function (t) { X(t, e) }) : t.classList ? t.classList.remove(e) : 0 <= t.className.indexOf(e) && (t.className = t.className.replace(e, ""))) } function r(t, e, i) { e && (p(t.length) ? z(t, function (t) { r(t, e, i) }) : (i ? v : X)(t, e)) } var Mt = /([a-z\d])([A-Z])/g; function Ct(t) { return t.replace(Mt, "$1-$2").toLowerCase() } function Dt(t, e) { return o(t[e]) ? t[e] : t.dataset ? t.dataset[e] : t.getAttribute("data-".concat(Ct(e))) } function w(t, e, i) { o(i) ? t[e] = i : t.dataset ? t.dataset[e] = i : t.setAttribute("data-".concat(Ct(e)), i) } var Bt, kt, Ot = /\s\s*/, Tt = (kt = !1, t && (Bt = !1, i = function () { }, e = Object.defineProperty({}, "once", { get: function () { return kt = !0, Bt }, set: function (t) { Bt = t } }), h.addEventListener("test", i, e), h.removeEventListener("test", i, e)), kt); function s(i, t, a, e) { var n = 3 < arguments.length && void 0 !== e ? e : {}, o = a; t.trim().split(Ot).forEach(function (t) { var e; Tt || (e = i.listeners) && e[t] && e[t][a] && (o = e[t][a], delete e[t][a], 0 === Object.keys(e[t]).length && delete e[t], 0 === Object.keys(e).length) && delete i.listeners, i.removeEventListener(t, o, n) }) } function b(o, t, h, e) { var r = 3 < arguments.length && void 0 !== e ? e : {}, s = h; t.trim().split(Ot).forEach(function (a) { var t, n; r.once && !Tt && (t = o.listeners, s = function () { delete n[a][h], o.removeEventListener(a, s, r); for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)e[i] = arguments[i]; h.apply(o, e) }, (n = void 0 === t ? {} : t)[a] || (n[a] = {}), n[a][h] && o.removeEventListener(a, n[a][h], r), n[a][h] = s, o.listeners = n), o.addEventListener(a, s, r) }) } function y(t, e, i) { var a; return l(Event) && l(CustomEvent) ? a = new CustomEvent(e, { detail: i, bubbles: !0, cancelable: !0 }) : (a = document.createEvent("CustomEvent")).initCustomEvent(e, !0, !0, i), t.dispatchEvent(a) } function Et(t) { t = t.getBoundingClientRect(); return { left: t.left + (window.pageXOffset - document.documentElement.clientLeft), top: t.top + (window.pageYOffset - document.documentElement.clientTop) } } var Wt = h.location, Ht = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i; function Nt(t) { t = t.match(Ht); return null !== t && (t[1] !== Wt.protocol || t[2] !== Wt.hostname || t[3] !== Wt.port) } function Lt(t) { var e = "timestamp=".concat((new Date).getTime()); return t + (-1 === t.indexOf("?") ? "?" : "&") + e } function x(t) { var e = t.rotate, i = t.scaleX, a = t.scaleY, n = t.translateX, t = t.translateY, o = [], n = (p(n) && 0 !== n && o.push("translateX(".concat(n, "px)")), p(t) && 0 !== t && o.push("translateY(".concat(t, "px)")), p(e) && 0 !== e && o.push("rotate(".concat(e, "deg)")), p(i) && 1 !== i && o.push("scaleX(".concat(i, ")")), p(a) && 1 !== a && o.push("scaleY(".concat(a, ")")), o.length ? o.join(" ") : "none"); return { WebkitTransform: n, msTransform: n, transform: n } } function M(t, e) { var i = t.pageX, t = t.pageY, a = { endX: i, endY: t }; return e ? a : S({ startX: i, startY: t }, a) } function R(t, e) { var i, a = t.aspectRatio, n = t.height, t = t.width, e = 1 < arguments.length && void 0 !== e ? e : "contain", o = gt(t), h = gt(n); return o && h ? (i = n * a, "contain" === e && t < i || "cover" === e && i < t ? n = t / a : t = n * a) : o ? n = t / a : h && (t = n * a), { width: t, height: n } } var zt = String.fromCharCode; var Yt = /^data:.*,/; function Xt(t) { var e, i, a, n, o, h, r, s = new DataView(t); try { if (255 === s.getUint8(0) && 216 === s.getUint8(1)) for (var c = s.byteLength, d = 2; d + 1 < c;) { if (255 === s.getUint8(d) && 225 === s.getUint8(d + 1)) { i = d; break } d += 1 } if (a = i && (n = i + 10, "Exif" === function (t, e, i) { var a = ""; i += e; for (var n = e; n < i; n += 1)a += zt(t.getUint8(n)); return a }(s, i + 4, 4)) && ((r = 18761 === (o = s.getUint16(n))) || 19789 === o) && 42 === s.getUint16(n + 2, r) && 8 <= (h = s.getUint32(n + 4, r)) ? n + h : a) for (var l, p = s.getUint16(a, r), m = 0; m < p; m += 1)if (l = a + 12 * m + 2, 274 === s.getUint16(l, r)) { l += 8, e = s.getUint16(l, r), s.setUint16(l, 1, r); break } } catch (t) { e = 1 } return e } var t = { render: function () { this.initContainer(), this.initCanvas(), this.initCropBox(), this.renderCanvas(), this.cropped && this.renderCropBox() }, initContainer: function () { var t = this.element, e = this.options, i = this.container, a = this.cropper, n = Number(e.minContainerWidth), e = Number(e.minContainerHeight), n = (v(a, L), X(t, L), { width: Math.max(i.offsetWidth, 0 <= n ? n : 200), height: Math.max(i.offsetHeight, 0 <= e ? e : 100) }); f(a, { width: (this.containerData = n).width, height: n.height }), v(t, L), X(a, L) }, initCanvas: function () { var t = this.containerData, e = this.imageData, i = this.options.viewMode, a = Math.abs(e.rotate) % 180 == 90, n = a ? e.naturalHeight : e.naturalWidth, a = a ? e.naturalWidth : e.naturalHeight, e = n / a, o = t.width, h = t.height, e = (t.height * e > t.width ? 3 === i ? o = t.height * e : h = t.width / e : 3 === i ? h = t.width / e : o = t.height * e, { aspectRatio: e, naturalWidth: n, naturalHeight: a, width: o, height: h }); this.canvasData = e, this.limited = 1 === i || 2 === i, this.limitCanvas(!0, !0), e.width = Math.min(Math.max(e.width, e.minWidth), e.maxWidth), e.height = Math.min(Math.max(e.height, e.minHeight), e.maxHeight), e.left = (t.width - e.width) / 2, e.top = (t.height - e.height) / 2, e.oldLeft = e.left, e.oldTop = e.top, this.initialCanvasData = g({}, e) }, limitCanvas: function (t, e) { var i = this.options, a = this.containerData, n = this.canvasData, o = this.cropBoxData, h = i.viewMode, r = n.aspectRatio, s = this.cropped && o; t && (t = Number(i.minCanvasWidth) || 0, i = Number(i.minCanvasHeight) || 0, 1 < h ? (t = Math.max(t, a.width), i = Math.max(i, a.height), 3 === h && (t < i * r ? t = i * r : i = t / r)) : 0 < h && (t ? t = Math.max(t, s ? o.width : 0) : i ? i = Math.max(i, s ? o.height : 0) : s && ((t = o.width) < (i = o.height) * r ? t = i * r : i = t / r)), t = (r = R({ aspectRatio: r, width: t, height: i })).width, i = r.height, n.minWidth = t, n.minHeight = i, n.maxWidth = 1 / 0, n.maxHeight = 1 / 0), e && ((s ? 0 : 1) < h ? (r = a.width - n.width, t = a.height - n.height, n.minLeft = Math.min(0, r), n.minTop = Math.min(0, t), n.maxLeft = Math.max(0, r), n.maxTop = Math.max(0, t), s && this.limited && (n.minLeft = Math.min(o.left, o.left + (o.width - n.width)), n.minTop = Math.min(o.top, o.top + (o.height - n.height)), n.maxLeft = o.left, n.maxTop = o.top, 2 === h) && (n.width >= a.width && (n.minLeft = Math.min(0, r), n.maxLeft = Math.max(0, r)), n.height >= a.height) && (n.minTop = Math.min(0, t), n.maxTop = Math.max(0, t))) : (n.minLeft = -n.width, n.minTop = -n.height, n.maxLeft = a.width, n.maxTop = a.height)) }, renderCanvas: function (t, e) { var i, a, n, o, h = this.canvasData, r = this.imageData; e && (e = { width: r.naturalWidth * Math.abs(r.scaleX || 1), height: r.naturalHeight * Math.abs(r.scaleY || 1), degree: r.rotate || 0 }, r = e.width, o = e.height, e = e.degree, i = 90 == (e = Math.abs(e) % 180) ? { width: o, height: r } : (a = e % 90 * Math.PI / 180, i = Math.sin(a), n = r * (a = Math.cos(a)) + o * i, r = r * i + o * a, 90 < e ? { width: r, height: n } : { width: n, height: r }), a = h.width * ((o = i.width) / h.naturalWidth), n = h.height * ((e = i.height) / h.naturalHeight), h.left -= (a - h.width) / 2, h.top -= (n - h.height) / 2, h.width = a, h.height = n, h.aspectRatio = o / e, h.naturalWidth = o, h.naturalHeight = e, this.limitCanvas(!0, !1)), (h.width > h.maxWidth || h.width < h.minWidth) && (h.left = h.oldLeft), (h.height > h.maxHeight || h.height < h.minHeight) && (h.top = h.oldTop), h.width = Math.min(Math.max(h.width, h.minWidth), h.maxWidth), h.height = Math.min(Math.max(h.height, h.minHeight), h.maxHeight), this.limitCanvas(!1, !0), h.left = Math.min(Math.max(h.left, h.minLeft), h.maxLeft), h.top = Math.min(Math.max(h.top, h.minTop), h.maxTop), h.oldLeft = h.left, h.oldTop = h.top, f(this.canvas, g({ width: h.width, height: h.height }, x({ translateX: h.left, translateY: h.top }))), this.renderImage(t), this.cropped && this.limited && this.limitCropBox(!0, !0) }, renderImage: function (t) { var e = this.canvasData, i = this.imageData, a = i.naturalWidth * (e.width / e.naturalWidth), n = i.naturalHeight * (e.height / e.naturalHeight); g(i, { width: a, height: n, left: (e.width - a) / 2, top: (e.height - n) / 2 }), f(this.image, g({ width: i.width, height: i.height }, x(g({ translateX: i.left, translateY: i.top }, i)))), t && this.output() }, initCropBox: function () { var t = this.options, e = this.canvasData, i = t.aspectRatio || t.initialAspectRatio, t = Number(t.autoCropArea) || .8, a = { width: e.width, height: e.height }; i && (e.height * i > e.width ? a.height = a.width / i : a.width = a.height * i), this.cropBoxData = a, this.limitCropBox(!0, !0), a.width = Math.min(Math.max(a.width, a.minWidth), a.maxWidth), a.height = Math.min(Math.max(a.height, a.minHeight), a.maxHeight), a.width = Math.max(a.minWidth, a.width * t), a.height = Math.max(a.minHeight, a.height * t), a.left = e.left + (e.width - a.width) / 2, a.top = e.top + (e.height - a.height) / 2, a.oldLeft = a.left, a.oldTop = a.top, this.initialCropBoxData = g({}, a) }, limitCropBox: function (t, e) { var i, a, n = this.options, o = this.containerData, h = this.canvasData, r = this.cropBoxData, s = this.limited, c = n.aspectRatio; t && (t = Number(n.minCropBoxWidth) || 0, n = Number(n.minCropBoxHeight) || 0, i = s ? Math.min(o.width, h.width, h.width + h.left, o.width - h.left) : o.width, a = s ? Math.min(o.height, h.height, h.height + h.top, o.height - h.top) : o.height, t = Math.min(t, o.width), n = Math.min(n, o.height), c && (t && n ? t < n * c ? n = t / c : t = n * c : t ? n = t / c : n && (t = n * c), i < a * c ? a = i / c : i = a * c), r.minWidth = Math.min(t, i), r.minHeight = Math.min(n, a), r.maxWidth = i, r.maxHeight = a), e && (s ? (r.minLeft = Math.max(0, h.left), r.minTop = Math.max(0, h.top), r.maxLeft = Math.min(o.width, h.left + h.width) - r.width, r.maxTop = Math.min(o.height, h.top + h.height) - r.height) : (r.minLeft = 0, r.minTop = 0, r.maxLeft = o.width - r.width, r.maxTop = o.height - r.height)) }, renderCropBox: function () { var t = this.options, e = this.containerData, i = this.cropBoxData; (i.width > i.maxWidth || i.width < i.minWidth) && (i.left = i.oldLeft), (i.height > i.maxHeight || i.height < i.minHeight) && (i.top = i.oldTop), i.width = Math.min(Math.max(i.width, i.minWidth), i.maxWidth), i.height = Math.min(Math.max(i.height, i.minHeight), i.maxHeight), this.limitCropBox(!1, !0), i.left = Math.min(Math.max(i.left, i.minLeft), i.maxLeft), i.top = Math.min(Math.max(i.top, i.minTop), i.maxTop), i.oldLeft = i.left, i.oldTop = i.top, t.movable && t.cropBoxMovable && w(this.face, d, i.width >= e.width && i.height >= e.height ? U : P), f(this.cropBox, g({ width: i.width, height: i.height }, x({ translateX: i.left, translateY: i.top }))), this.cropped && this.limited && this.limitCanvas(!0, !0), this.disabled || this.output() }, output: function () { this.preview(), y(this.element, _, this.getData()) } }, i = { initPreview: function () { var t = this.element, i = this.crossOrigin, e = this.options.preview, a = i ? this.crossOriginUrl : this.url, n = t.alt || "The image to preview", o = document.createElement("img"); i && (o.crossOrigin = i), o.src = a, o.alt = n, this.viewBox.appendChild(o), this.viewBoxImage = o, e && ("string" == typeof (o = e) ? o = t.ownerDocument.querySelectorAll(e) : e.querySelector && (o = [e]), z(this.previews = o, function (t) { var e = document.createElement("img"); w(t, m, { width: t.offsetWidth, height: t.offsetHeight, html: t.innerHTML }), i && (e.crossOrigin = i), e.src = a, e.alt = n, e.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"', t.innerHTML = "", t.appendChild(e) })) }, resetPreview: function () { z(this.previews, function (e) { var i = Dt(e, m), i = (f(e, { width: i.width, height: i.height }), e.innerHTML = i.html, e), e = m; if (o(i[e])) try { delete i[e] } catch (t) { i[e] = void 0 } else if (i.dataset) try { delete i.dataset[e] } catch (t) { i.dataset[e] = void 0 } else i.removeAttribute("data-".concat(Ct(e))) }) }, preview: function () { var h = this.imageData, t = this.canvasData, e = this.cropBoxData, r = e.width, s = e.height, c = h.width, d = h.height, l = e.left - t.left - h.left, p = e.top - t.top - h.top; this.cropped && !this.disabled && (f(this.viewBoxImage, g({ width: c, height: d }, x(g({ translateX: -l, translateY: -p }, h)))), z(this.previews, function (t) { var e = Dt(t, m), i = e.width, e = e.height, a = i, n = e, o = 1; r && (n = s * (o = i / r)), s && e < n && (a = r * (o = e / s), n = e), f(t, { width: a, height: n }), f(t.getElementsByTagName("img")[0], g({ width: c * o, height: d * o }, x(g({ translateX: -l * o, translateY: -p * o }, h)))) })) } }, e = { bind: function () { var t = this.element, e = this.options, i = this.cropper; l(e.cropstart) && b(t, it, e.cropstart), l(e.cropmove) && b(t, et, e.cropmove), l(e.cropend) && b(t, tt, e.cropend), l(e.crop) && b(t, _, e.crop), l(e.zoom) && b(t, rt, e.zoom), b(i, nt, this.onCropStart = this.cropStart.bind(this)), e.zoomable && e.zoomOnWheel && b(i, "wheel", this.onWheel = this.wheel.bind(this), { passive: !1, capture: !0 }), e.toggleDragModeOnDblclick && b(i, at, this.onDblclick = this.dblclick.bind(this)), b(t.ownerDocument, ot, this.onCropMove = this.cropMove.bind(this)), b(t.ownerDocument, ht, this.onCropEnd = this.cropEnd.bind(this)), e.responsive && b(window, "resize", this.onResize = this.resize.bind(this)) }, unbind: function () { var t = this.element, e = this.options, i = this.cropper; l(e.cropstart) && s(t, it, e.cropstart), l(e.cropmove) && s(t, et, e.cropmove), l(e.cropend) && s(t, tt, e.cropend), l(e.crop) && s(t, _, e.crop), l(e.zoom) && s(t, rt, e.zoom), s(i, nt, this.onCropStart), e.zoomable && e.zoomOnWheel && s(i, "wheel", this.onWheel, { passive: !1, capture: !0 }), e.toggleDragModeOnDblclick && s(i, at, this.onDblclick), s(t.ownerDocument, ot, this.onCropMove), s(t.ownerDocument, ht, this.onCropEnd), e.responsive && s(window, "resize", this.onResize) } }, Rt = { resize: function () { var t, e, i, a, n, o, h; this.disabled || (t = this.options, a = this.container, e = this.containerData, i = a.offsetWidth / e.width, a = a.offsetHeight / e.height, 1 != (n = Math.abs(i - 1) > Math.abs(a - 1) ? i : a) && (t.restore && (o = this.getCanvasData(), h = this.getCropBoxData()), this.render(), t.restore) && (this.setCanvasData(z(o, function (t, e) { o[e] = t * n })), this.setCropBoxData(z(h, function (t, e) { h[e] = t * n })))) }, dblclick: function () { var t, e; this.disabled || this.options.dragMode === J || this.setDragMode((t = this.dragBox, e = $, (t.classList ? t.classList.contains(e) : -1 < t.className.indexOf(e)) ? F : V)) }, wheel: function (t) { var e = this, i = Number(this.options.wheelZoomRatio) || .1, a = 1; this.disabled || (t.preventDefault(), this.wheeling) || (this.wheeling = !0, setTimeout(function () { e.wheeling = !1 }, 50), t.deltaY ? a = 0 < t.deltaY ? 1 : -1 : t.wheelDelta ? a = -t.wheelDelta / 120 : t.detail && (a = 0 < t.detail ? 1 : -1), this.zoom(-a * i, t)) }, cropStart: function (t) { var e, i = t.buttons, a = t.button; this.disabled || ("mousedown" === t.type || "pointerdown" === t.type && "mouse" === t.pointerType) && (p(i) && 1 !== i || p(a) && 0 !== a || t.ctrlKey) || (i = this.options, e = this.pointers, t.changedTouches ? z(t.changedTouches, function (t) { e[t.identifier] = M(t) }) : e[t.pointerId || 0] = M(t), a = 1 < Object.keys(e).length && i.zoomable && i.zoomOnTouch ? q : Dt(t.target, d), ct.test(a) && !1 !== y(this.element, it, { originalEvent: t, action: a }) && (t.preventDefault(), this.action = a, this.cropping = !1, a === I) && (this.cropping = !0, v(this.dragBox, n))) }, cropMove: function (t) { var e, i = this.action; !this.disabled && i && (e = this.pointers, t.preventDefault(), !1 !== y(this.element, et, { originalEvent: t, action: i })) && (t.changedTouches ? z(t.changedTouches, function (t) { g(e[t.identifier] || {}, M(t, !0)) }) : g(e[t.pointerId || 0] || {}, M(t, !0)), this.change(t)) }, cropEnd: function (t) { var e, i; this.disabled || (e = this.action, i = this.pointers, t.changedTouches ? z(t.changedTouches, function (t) { delete i[t.identifier] }) : delete i[t.pointerId || 0], e && (t.preventDefault(), Object.keys(i).length || (this.action = ""), this.cropping && (this.cropping = !1, r(this.dragBox, n, this.cropped && this.options.modal)), y(this.element, tt, { originalEvent: t, action: e }))) } }, St = { change: function (t) { function e(t) { switch (t) { case B: f + D.x > y && (D.x = y - f); break; case k: p + D.x < w && (D.x = w - p); break; case T: m + D.y < b && (D.y = b - m); break; case O: v + D.y > x && (D.y = x - v) } } var i, a, o, n = this.options, h = this.canvasData, r = this.containerData, s = this.cropBoxData, c = this.pointers, d = this.action, l = n.aspectRatio, p = s.left, m = s.top, u = s.width, g = s.height, f = p + u, v = m + g, w = 0, b = 0, y = r.width, x = r.height, M = !0, C = (!l && t.shiftKey && (l = u && g ? u / g : 1), this.limited && (w = s.minLeft, b = s.minTop, y = w + Math.min(r.width, h.width, h.left + h.width), x = b + Math.min(r.height, h.height, h.top + h.height)), c[Object.keys(c)[0]]), D = { x: C.endX - C.startX, y: C.endY - C.startY }; switch (d) { case P: p += D.x, m += D.y; break; case B: 0 <= D.x && (y <= f || l && (m <= b || x <= v)) ? M = !1 : (e(B), (u += D.x) < 0 && (d = k, p -= u = -u), l && (m += (s.height - (g = u / l)) / 2)); break; case T: D.y <= 0 && (m <= b || l && (p <= w || y <= f)) ? M = !1 : (e(T), g -= D.y, m += D.y, g < 0 && (d = O, m -= g = -g), l && (p += (s.width - (u = g * l)) / 2)); break; case k: D.x <= 0 && (p <= w || l && (m <= b || x <= v)) ? M = !1 : (e(k), u -= D.x, p += D.x, u < 0 && (d = B, p -= u = -u), l && (m += (s.height - (g = u / l)) / 2)); break; case O: 0 <= D.y && (x <= v || l && (p <= w || y <= f)) ? M = !1 : (e(O), (g += D.y) < 0 && (d = T, m -= g = -g), l && (p += (s.width - (u = g * l)) / 2)); break; case E: if (l) { if (D.y <= 0 && (m <= b || y <= f)) { M = !1; break } e(T), g -= D.y, m += D.y, u = g * l } else e(T), e(B), !(0 <= D.x) || f < y ? u += D.x : D.y <= 0 && m <= b && (M = !1), (!(D.y <= 0) || b < m) && (g -= D.y, m += D.y); u < 0 && g < 0 ? (d = N, m -= g = -g, p -= u = -u) : u < 0 ? (d = W, p -= u = -u) : g < 0 && (d = H, m -= g = -g); break; case W: if (l) { if (D.y <= 0 && (m <= b || p <= w)) { M = !1; break } e(T), g -= D.y, m += D.y, p += s.width - (u = g * l) } else e(T), e(k), !(D.x <= 0) || w < p ? (u -= D.x, p += D.x) : D.y <= 0 && m <= b && (M = !1), (!(D.y <= 0) || b < m) && (g -= D.y, m += D.y); u < 0 && g < 0 ? (d = H, m -= g = -g, p -= u = -u) : u < 0 ? (d = E, p -= u = -u) : g < 0 && (d = N, m -= g = -g); break; case N: if (l) { if (D.x <= 0 && (p <= w || x <= v)) { M = !1; break } e(k), u -= D.x, p += D.x, g = u / l } else e(O), e(k), !(D.x <= 0) || w < p ? (u -= D.x, p += D.x) : 0 <= D.y && x <= v && (M = !1), (!(0 <= D.y) || v < x) && (g += D.y); u < 0 && g < 0 ? (d = E, m -= g = -g, p -= u = -u) : u < 0 ? (d = H, p -= u = -u) : g < 0 && (d = W, m -= g = -g); break; case H: if (l) { if (0 <= D.x && (y <= f || x <= v)) { M = !1; break } e(B), g = (u += D.x) / l } else e(O), e(B), !(0 <= D.x) || f < y ? u += D.x : 0 <= D.y && x <= v && (M = !1), (!(0 <= D.y) || v < x) && (g += D.y); u < 0 && g < 0 ? (d = W, m -= g = -g, p -= u = -u) : u < 0 ? (d = N, p -= u = -u) : g < 0 && (d = E, m -= g = -g); break; case U: this.move(D.x, D.y), M = !1; break; case q: this.zoom((a = S({}, i = c), o = 0, z(i, function (n, t) { delete a[t], z(a, function (t) { var e = Math.abs(n.startX - t.startX), i = Math.abs(n.startY - t.startY), a = Math.abs(n.endX - t.endX), t = Math.abs(n.endY - t.endY), e = Math.sqrt(e * e + i * i), i = (Math.sqrt(a * a + t * t) - e) / e; Math.abs(i) > Math.abs(o) && (o = i) }) }), o), t), M = !1; break; case I: D.x && D.y ? (i = Et(this.cropper), p = C.startX - i.left, m = C.startY - i.top, u = s.minWidth, g = s.minHeight, 0 < D.x ? d = 0 < D.y ? H : E : D.x < 0 && (p -= u, d = 0 < D.y ? N : W), D.y < 0 && (m -= g), this.cropped || (X(this.cropBox, L), this.cropped = !0, this.limited && this.limitCropBox(!0, !0))) : M = !1 }M && (s.width = u, s.height = g, s.left = p, s.top = m, this.action = d, this.renderCropBox()), z(c, function (t) { t.startX = t.endX, t.startY = t.endY }) } }, At = { crop: function () { return !this.ready || this.cropped || this.disabled || (this.cropped = !0, this.limitCropBox(!0, !0), this.options.modal && v(this.dragBox, n), X(this.cropBox, L), this.setCropBoxData(this.initialCropBoxData)), this }, reset: function () { return this.ready && !this.disabled && (this.imageData = g({}, this.initialImageData), this.canvasData = g({}, this.initialCanvasData), this.cropBoxData = g({}, this.initialCropBoxData), this.renderCanvas(), this.cropped) && this.renderCropBox(), this }, clear: function () { return this.cropped && !this.disabled && (g(this.cropBoxData, { left: 0, top: 0, width: 0, height: 0 }), this.cropped = !1, this.renderCropBox(), this.limitCanvas(!0, !0), this.renderCanvas(), X(this.dragBox, n), v(this.cropBox, L)), this }, replace: function (e) { var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]; return !this.disabled && e && (this.isImg && (this.element.src = e), t ? (this.url = e, this.image.src = e, this.ready && (this.viewBoxImage.src = e, z(this.previews, function (t) { t.getElementsByTagName("img")[0].src = e }))) : (this.isImg && (this.replaced = !0), this.options.data = null, this.uncreate(), this.load(e))), this }, enable: function () { return this.ready && this.disabled && (this.disabled = !1, X(this.cropper, Q)), this }, disable: function () { return this.ready && !this.disabled && (this.disabled = !0, v(this.cropper, Q)), this }, destroy: function () { var t = this.element; return t[c] && (t[c] = void 0, this.isImg && this.replaced && (t.src = this.originalUrl), this.uncreate()), this }, move: function (t) { var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : t, i = this.canvasData, a = i.left, i = i.top; return this.moveTo(ft(t) ? t : a + Number(t), ft(e) ? e : i + Number(e)) }, moveTo: function (t) { var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : t, i = this.canvasData, a = !1; return t = Number(t), e = Number(e), this.ready && !this.disabled && this.options.movable && (p(t) && (i.left = t, a = !0), p(e) && (i.top = e, a = !0), a) && this.renderCanvas(!0), this }, zoom: function (t, e) { var i = this.canvasData; return t = Number(t), this.zoomTo(i.width * (t = t < 0 ? 1 / (1 - t) : 1 + t) / i.naturalWidth, null, e) }, zoomTo: function (t, e, i) { var a, n, o, h = this.options, r = this.canvasData, s = r.width, c = r.height, d = r.naturalWidth, l = r.naturalHeight; if (0 <= (t = Number(t)) && this.ready && !this.disabled && h.zoomable) { h = d * t, l = l * t; if (!1 === y(this.element, rt, { ratio: t, oldRatio: s / d, originalEvent: i })) return this; i ? (t = this.pointers, d = Et(this.cropper), t = t && Object.keys(t).length ? (o = n = a = 0, z(t, function (t) { var e = t.startX, t = t.startY; a += e, n += t, o += 1 }), { pageX: a /= o, pageY: n /= o }) : { pageX: i.pageX, pageY: i.pageY }, r.left -= (h - s) * ((t.pageX - d.left - r.left) / s), r.top -= (l - c) * ((t.pageY - d.top - r.top) / c)) : u(e) && p(e.x) && p(e.y) ? (r.left -= (h - s) * ((e.x - r.left) / s), r.top -= (l - c) * ((e.y - r.top) / c)) : (r.left -= (h - s) / 2, r.top -= (l - c) / 2), r.width = h, r.height = l, this.renderCanvas(!0) } return this }, rotate: function (t) { return this.rotateTo((this.imageData.rotate || 0) + Number(t)) }, rotateTo: function (t) { return p(t = Number(t)) && this.ready && !this.disabled && this.options.rotatable && (this.imageData.rotate = t % 360, this.renderCanvas(!0, !0)), this }, scaleX: function (t) { var e = this.imageData.scaleY; return this.scale(t, p(e) ? e : 1) }, scaleY: function (t) { var e = this.imageData.scaleX; return this.scale(p(e) ? e : 1, t) }, scale: function (t) { var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : t, i = this.imageData, a = !1; return t = Number(t), e = Number(e), this.ready && !this.disabled && this.options.scalable && (p(t) && (i.scaleX = t, a = !0), p(e) && (i.scaleY = e, a = !0), a) && this.renderCanvas(!0, !0), this }, getData: function () { var i, a, t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0], e = this.options, n = this.imageData, o = this.canvasData, h = this.cropBoxData; return this.ready && this.cropped ? (i = { x: h.left - o.left, y: h.top - o.top, width: h.width, height: h.height }, a = n.width / n.naturalWidth, z(i, function (t, e) { i[e] = t / a }), t && (o = Math.round(i.y + i.height), h = Math.round(i.x + i.width), i.x = Math.round(i.x), i.y = Math.round(i.y), i.width = h - i.x, i.height = o - i.y)) : i = { x: 0, y: 0, width: 0, height: 0 }, e.rotatable && (i.rotate = n.rotate || 0), e.scalable && (i.scaleX = n.scaleX || 1, i.scaleY = n.scaleY || 1), i }, setData: function (t) { var e, i = this.options, a = this.imageData, n = this.canvasData, o = {}; return this.ready && !this.disabled && u(t) && (e = !1, i.rotatable && p(t.rotate) && t.rotate !== a.rotate && (a.rotate = t.rotate, e = !0), i.scalable && (p(t.scaleX) && t.scaleX !== a.scaleX && (a.scaleX = t.scaleX, e = !0), p(t.scaleY)) && t.scaleY !== a.scaleY && (a.scaleY = t.scaleY, e = !0), e && this.renderCanvas(!0, !0), i = a.width / a.naturalWidth, p(t.x) && (o.left = t.x * i + n.left), p(t.y) && (o.top = t.y * i + n.top), p(t.width) && (o.width = t.width * i), p(t.height) && (o.height = t.height * i), this.setCropBoxData(o)), this }, getContainerData: function () { return this.ready ? g({}, this.containerData) : {} }, getImageData: function () { return this.sized ? g({}, this.imageData) : {} }, getCanvasData: function () { var e = this.canvasData, i = {}; return this.ready && z(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function (t) { i[t] = e[t] }), i }, setCanvasData: function (t) { var e = this.canvasData, i = e.aspectRatio; return this.ready && !this.disabled && u(t) && (p(t.left) && (e.left = t.left), p(t.top) && (e.top = t.top), p(t.width) ? (e.width = t.width, e.height = t.width / i) : p(t.height) && (e.height = t.height, e.width = t.height * i), this.renderCanvas(!0)), this }, getCropBoxData: function () { var t, e = this.cropBoxData; return (t = this.ready && this.cropped ? { left: e.left, top: e.top, width: e.width, height: e.height } : t) || {} }, setCropBoxData: function (t) { var e, i, a = this.cropBoxData, n = this.options.aspectRatio; return this.ready && this.cropped && !this.disabled && u(t) && (p(t.left) && (a.left = t.left), p(t.top) && (a.top = t.top), p(t.width) && t.width !== a.width && (e = !0, a.width = t.width), p(t.height) && t.height !== a.height && (i = !0, a.height = t.height), n && (e ? a.height = a.width / n : i && (a.width = a.height * n)), this.renderCropBox()), this }, getCroppedCanvas: function () { var t, e, i, a, n, o, h, r, s, c, d, l, p, m, u, g, f, v, w, b, y, x, M, C, D, B, k, O = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}; return this.ready && window.HTMLCanvasElement ? (B = this.canvasData, u = this.image, l = this.imageData, a = B, v = O, g = l.aspectRatio, e = l.naturalWidth, n = l.naturalHeight, c = void 0 === (c = l.rotate) ? 0 : c, d = void 0 === (d = l.scaleX) ? 1 : d, l = void 0 === (l = l.scaleY) ? 1 : l, i = a.aspectRatio, r = a.naturalWidth, a = a.naturalHeight, h = void 0 === (h = v.fillColor) ? "transparent" : h, p = void 0 === (p = v.imageSmoothingEnabled) || p, m = void 0 === (m = v.imageSmoothingQuality) ? "low" : m, o = void 0 === (o = v.maxWidth) ? 1 / 0 : o, k = void 0 === (k = v.maxHeight) ? 1 / 0 : k, t = void 0 === (t = v.minWidth) ? 0 : t, v = void 0 === (v = v.minHeight) ? 0 : v, w = document.createElement("canvas"), f = w.getContext("2d"), s = R({ aspectRatio: i, width: o, height: k }), i = R({ aspectRatio: i, width: t, height: v }, "cover"), r = Math.min(s.width, Math.max(i.width, r)), s = Math.min(s.height, Math.max(i.height, a)), i = R({ aspectRatio: g, width: o, height: k }), a = R({ aspectRatio: g, width: t, height: v }, "cover"), o = Math.min(i.width, Math.max(a.width, e)), k = Math.min(i.height, Math.max(a.height, n)), g = [-o / 2, -k / 2, o, k], w.width = Y(r), w.height = Y(s), f.fillStyle = h, f.fillRect(0, 0, r, s), f.save(), f.translate(r / 2, s / 2), f.rotate(c * Math.PI / 180), f.scale(d, l), f.imageSmoothingEnabled = p, f.imageSmoothingQuality = m, f.drawImage.apply(f, [u].concat(j(g.map(function (t) { return Math.floor(Y(t)) })))), f.restore(), t = w, this.cropped ? (e = (v = this.getData()).x, i = v.y, a = v.width, n = v.height, 1 != (o = t.width / Math.floor(B.naturalWidth)) && (e *= o, i *= o, a *= o, n *= o), h = R({ aspectRatio: k = a / n, width: O.maxWidth || 1 / 0, height: O.maxHeight || 1 / 0 }), r = R({ aspectRatio: k, width: O.minWidth || 0, height: O.minHeight || 0 }, "cover"), c = (s = R({ aspectRatio: k, width: O.width || (1 != o ? t.width : a), height: O.height || (1 != o ? t.height : n) })).width, d = s.height, c = Math.min(h.width, Math.max(r.width, c)), d = Math.min(h.height, Math.max(r.height, d)), p = (l = document.createElement("canvas")).getContext("2d"), l.width = Y(c), l.height = Y(d), p.fillStyle = O.fillColor || "transparent", p.fillRect(0, 0, c, d), m = O.imageSmoothingEnabled, u = O.imageSmoothingQuality, p.imageSmoothingEnabled = void 0 === m || m, u && (p.imageSmoothingQuality = u), g = t.width, f = t.height, w = i, (v = e) <= -a || g < v ? C = x = b = v = 0 : v <= 0 ? (x = -v, v = 0, C = b = Math.min(g, a + v)) : v <= g && (x = 0, C = b = Math.min(a, g - v)), b <= 0 || w <= -n || f < w ? D = M = y = w = 0 : w <= 0 ? (M = -w, w = 0, D = y = Math.min(f, n + w)) : w <= f && (M = 0, D = y = Math.min(n, f - w)), B = [v, w, b, y], 0 < C && 0 < D && B.push(x * (k = c / a), M * k, C * k, D * k), p.drawImage.apply(p, [t].concat(j(B.map(function (t) { return Math.floor(Y(t)) })))), l) : t) : null }, setAspectRatio: function (t) { var e = this.options; return this.disabled || ft(t) || (e.aspectRatio = Math.max(0, t) || NaN, this.ready && (this.initCropBox(), this.cropped) && this.renderCropBox()), this }, setDragMode: function (t) { var e, i, a = this.options, n = this.dragBox, o = this.face; return this.ready && !this.disabled && (i = a.movable && t === F, a.dragMode = t = (e = t === V) || i ? t : J, w(n, d, t), r(n, $, e), r(n, G, i), a.cropBoxMovable || (w(o, d, t), r(o, $, e), r(o, G, i))), this } }, jt = h.Cropper, Pt = function () { function n(t) { var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, i = this, a = n; if (!(i instanceof a)) throw new TypeError("Cannot call a class as a function"); if (!t || !pt.test(t.tagName)) throw new Error("The first argument is required and must be an <img> or <canvas> element."); this.element = t, this.options = g({}, mt, u(e) && e), this.cropped = !1, this.disabled = !1, this.pointers = {}, this.ready = !1, this.reloading = !1, this.replaced = !1, this.sized = !1, this.sizing = !1, this.init() } var t, e, i; return t = n, i = [{ key: "noConflict", value: function () { return window.Cropper = jt, n } }, { key: "setDefaults", value: function (t) { g(mt, u(t) && t) } }], (e = [{ key: "init", value: function () { var t, e = this.element, i = e.tagName.toLowerCase(); if (!e[c]) { if (e[c] = this, "img" === i) { if (this.isImg = !0, t = e.getAttribute("src") || "", !(this.originalUrl = t)) return; t = e.src } else "canvas" === i && window.HTMLCanvasElement && (t = e.toDataURL()); this.load(t) } } }, { key: "load", value: function (t) { var e, i, a, n, o, h, r = this; t && (this.url = t, this.imageData = {}, e = this.element, (i = this.options).rotatable || i.scalable || (i.checkOrientation = !1), i.checkOrientation && window.ArrayBuffer ? dt.test(t) ? lt.test(t) ? this.read((h = (h = t).replace(Yt, ""), a = atob(h), h = new ArrayBuffer(a.length), z(n = new Uint8Array(h), function (t, e) { n[e] = a.charCodeAt(e) }), h)) : this.clone() : (o = new XMLHttpRequest, h = this.clone.bind(this), this.reloading = !0, (this.xhr = o).onabort = h, o.onerror = h, o.ontimeout = h, o.onprogress = function () { o.getResponseHeader("content-type") !== st && o.abort() }, o.onload = function () { r.read(o.response) }, o.onloadend = function () { r.reloading = !1, r.xhr = null }, i.checkCrossOrigin && Nt(t) && e.crossOrigin && (t = Lt(t)), o.open("GET", t, !0), o.responseType = "arraybuffer", o.withCredentials = "use-credentials" === e.crossOrigin, o.send()) : this.clone()) } }, { key: "read", value: function (t) { var e = this.options, i = this.imageData, a = Xt(t), n = 0, o = 1, h = 1; 1 < a && (this.url = function (t, e) { for (var i = [], a = new Uint8Array(t); 0 < a.length;)i.push(zt.apply(null, bt(a.subarray(0, 8192)))), a = a.subarray(8192); return "data:".concat(e, ";base64,").concat(btoa(i.join(""))) }(t, st), n = (t = function (t) { var e = 0, i = 1, a = 1; switch (t) { case 2: i = -1; break; case 3: e = -180; break; case 4: a = -1; break; case 5: e = 90, a = -1; break; case 6: e = 90; break; case 7: e = 90, i = -1; break; case 8: e = -90 }return { rotate: e, scaleX: i, scaleY: a } }(a)).rotate, o = t.scaleX, h = t.scaleY), e.rotatable && (i.rotate = n), e.scalable && (i.scaleX = o, i.scaleY = h), this.clone() } }, { key: "clone", value: function () { var t = this.element, e = this.url, i = t.crossOrigin, a = e, n = (this.options.checkCrossOrigin && Nt(e) && (i = i || "anonymous", a = Lt(e)), this.crossOrigin = i, this.crossOriginUrl = a, document.createElement("img")); i && (n.crossOrigin = i), n.src = a || e, n.alt = t.alt || "The image to crop", (this.image = n).onload = this.start.bind(this), n.onerror = this.stop.bind(this), v(n, K), t.parentNode.insertBefore(n, t.nextSibling) } }, { key: "start", value: function () { function t(t, e) { g(a.imageData, { naturalWidth: t, naturalHeight: e, aspectRatio: t / e }), a.initialImageData = g({}, a.imageData), a.sizing = !1, a.sized = !0, a.build() } var e, i, a = this, n = this.image, o = (n.onload = null, n.onerror = null, this.sizing = !0, h.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(h.navigator.userAgent)); n.naturalWidth && !o ? t(n.naturalWidth, n.naturalHeight) : (e = document.createElement("img"), i = document.body || document.documentElement, (this.sizingImage = e).onload = function () { t(e.width, e.height), o || i.removeChild(e) }, e.src = n.src, o || (e.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;", i.appendChild(e))) } }, { key: "stop", value: function () { var t = this.image; t.onload = null, t.onerror = null, t.parentNode.removeChild(t), this.image = null } }, { key: "build", value: function () { var t, e, i, a, n, o, h, r, s; this.sized && !this.ready && (t = this.element, e = this.options, i = this.image, a = t.parentNode, (n = document.createElement("div")).innerHTML = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>', o = (n = n.querySelector(".".concat(c, "-container"))).querySelector(".".concat(c, "-canvas")), h = n.querySelector(".".concat(c, "-drag-box")), s = (r = n.querySelector(".".concat(c, "-crop-box"))).querySelector(".".concat(c, "-face")), this.container = a, this.cropper = n, this.canvas = o, this.dragBox = h, this.cropBox = r, this.viewBox = n.querySelector(".".concat(c, "-view-box")), this.face = s, o.appendChild(i), v(t, L), a.insertBefore(n, t.nextSibling), X(i, K), this.initPreview(), this.bind(), e.initialAspectRatio = Math.max(0, e.initialAspectRatio) || NaN, e.aspectRatio = Math.max(0, e.aspectRatio) || NaN, e.viewMode = Math.max(0, Math.min(3, Math.round(e.viewMode))) || 0, v(r, L), e.guides || v(r.getElementsByClassName("".concat(c, "-dashed")), L), e.center || v(r.getElementsByClassName("".concat(c, "-center")), L), e.background && v(n, "".concat(c, "-bg")), e.highlight || v(s, Z), e.cropBoxMovable && (v(s, G), w(s, d, P)), e.cropBoxResizable || (v(r.getElementsByClassName("".concat(c, "-line")), L), v(r.getElementsByClassName("".concat(c, "-point")), L)), this.render(), this.ready = !0, this.setDragMode(e.dragMode), e.autoCrop && this.crop(), this.setData(e.data), l(e.ready) && b(t, "ready", e.ready, { once: !0 }), y(t, "ready")) } }, { key: "unbuild", value: function () { var t; this.ready && (this.ready = !1, this.unbind(), this.resetPreview(), (t = this.cropper.parentNode) && t.removeChild(this.cropper), X(this.element, L)) } }, { key: "uncreate", value: function () { this.ready ? (this.unbuild(), this.ready = !1, this.cropped = !1) : this.sizing ? (this.sizingImage.onload = null, this.sizing = !1, this.sized = !1) : this.reloading ? (this.xhr.onabort = null, this.xhr.abort()) : this.image && this.stop() } }]) && A(t.prototype, e), i && A(t, i), Object.defineProperty(t, "prototype", { writable: !1 }), n }(); return g(Pt.prototype, t, i, e, Rt, St, At), Pt });

;/* ===== END: wwwroot/assets/cropper.min.js ===== */


/* ===== START: wwwroot/js/footballit_script.js ===== */
;
function enter_to_tab2(object) {
    var obj = document.getElementById(object);
    var key = window.event.keyCode;
    if (key == 13) {
        var form = event.target.form;
        var index = Array.prototype.indexOf.call(form, event.target);
        form.elements[index + 1].focus();
        event.preventDefault();
        obj.focus()
    }
    return false;
}
function ett(object, index) {
    var obj = document.getElementById(object);
    var key = window.event.keyCode;
    if (key == 13) {
        // alert(index);
        var form = event.target.form;
        form.elements[index].focus();
        event.preventDefault();
    }
    return false;
}
function enter_to_tab(object) {
    var obj = document.getElementById(object);
    //alert( document.getElementById(object).tabIndex);
    var key = window.event.keyCode;
    if (key == 13) {
        obj.focus();
    }

    return false;
}
function checktime(obj) {

    var str = document.getElementById(obj).value;

    if (str == '') {
        display_alarm('ساعت وارد نشده است.', '');
        return false;
    }
    if (str.length == 4 && str.indexOf(':') == -1) {
        str = str.substr(0, 2) + ':' + str.substr(2, 2);
        document.getElementById(obj).value = str;
    }

    if (str.length < 5) {
        str = str + ':00';
        document.getElementById(obj).value = str;
    }
    var regex = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    var result = regex.test(str);
    if (result == false) {
        display_alarm('فرمت ساعت وارد شده معتبر نیست. لطفا ساعت را با فرمت صحیح وارد نمائید.', obj);
        return false;
        //document.getElementById(flag).value = "0";
    }
    else {
        return true;
        //document.getElementById(flag).value = "1";
    }

}
function checkdate(obj) {
    var str = document.getElementById(obj).value;
    var mds_str = "";

    if (str == '') {
        display_alarm('تاریخ وارد نشده است.', '');
        return false;
    }
    for (var i = 0; i < str.length; i++) {
        switch (str.charCodeAt(i)) {
            case 1777: mds_str = mds_str + "1"; break;
            case 1778: mds_str = mds_str + "2"; break;
            case 1779: mds_str = mds_str + "3"; break;
            case 1780: mds_str = mds_str + "4"; break;
            case 1781: mds_str = mds_str + "5"; break;
            case 1782: mds_str = mds_str + "6"; break;
            case 1783: mds_str = mds_str + "7"; break;
            case 1784: mds_str = mds_str + "8"; break;
            case 1785: mds_str = mds_str + "9"; break;
            case 1776: mds_str = mds_str + "0"; break;
            case 47: mds_str = mds_str + "/"; break;
            default:
                mds_str = mds_str + str.substr(i, 1);
            //       alert(mds_str + '****' + str.substr(i, 1)+'****'+i); break;
        }
    }

    var patt = /(13|14|19|20)([0-9][0-9])\/(((0?[1-6])\/((0?[1-9])|([12][0-9])|(3[0-1])))|(((0?[7-9])|(1[0-2]))\/((0?[1-9])|([12][0-9])|(30))))/g;
    var result = patt.test(mds_str);
    if (result) {
        var pos = str.indexOf('/');
        var year = str.substring(0, pos);
        var nextPos = str.indexOf('/', pos + 1);
        var month = str.substring(pos + 1, nextPos);
        var day = str.substring(nextPos + 1);
        if (month == 12 && (year + 1) % 4 != 0 && day == 30) { // kabise = 1379, 1383, 1387,... (year +1) divides on 4 remains 0
            result = false;
        }
    }
    if (result == false) {
        display_alarm('فرمت تاریخ شمسی وارد شده معتبر نیست. لطفا تاریخ را با فرمت YYYY/MM/DD وارد نمائید.', obj);
        return false;
        //document.getElementById(flag).value = "0";
    }
    else {
        return true;
        //document.getElementById(flag).value = "1";
    }
}
function checkdate2(obj) {
    var str = document.getElementById(obj).value;
    var mds_str = "";

    for (var i = 0; i < str.length; i++) {
        switch (str.charCodeAt(i)) {
            case 1777: mds_str = mds_str + "1"; break;
            case 1778: mds_str = mds_str + "2"; break;
            case 1779: mds_str = mds_str + "3"; break;
            case 1780: mds_str = mds_str + "4"; break;
            case 1781: mds_str = mds_str + "5"; break;
            case 1782: mds_str = mds_str + "6"; break;
            case 1783: mds_str = mds_str + "7"; break;
            case 1784: mds_str = mds_str + "8"; break;
            case 1785: mds_str = mds_str + "9"; break;
            case 1776: mds_str = mds_str + "0"; break;
            case 47: mds_str = mds_str + "/"; break;
            default:
                mds_str = mds_str + str.substr(i, 1);
            //       alert(mds_str + '****' + str.substr(i, 1)+'****'+i); break;
        }
    }

    var patt = /(13|14|19|20)([0-9][0-9])\/(((0?[1-6])\/((0?[1-9])|([12][0-9])|(3[0-1])))|(((0?[7-9])|(1[0-2]))\/((0?[1-9])|([12][0-9])|(30))))/g;
    var result = patt.test(mds_str);
    if (result) {
        var pos = str.indexOf('/');
        var year = str.substring(0, pos);
        var nextPos = str.indexOf('/', pos + 1);
        var month = str.substring(pos + 1, nextPos);
        var day = str.substring(nextPos + 1);
        if (month == 12 && (year + 1) % 4 != 0 && day == 30) { // kabise = 1379, 1383, 1387,... (year +1) divides on 4 remains 0
            result = false;
        }
    }
    if (result == false) {
        display_alarm('فرمت تاریخ شمسی وارد شده معتبر نیست. لطفا تاریخ را با فرمت YYYY/MM/DD وارد نمائید.', obj);
        return false;
        //document.getElementById(flag).value = "0";
    }
    else {
        return true;
        //document.getElementById(flag).value = "1";
    }
}
function CheckDateNew(obj) {
    var str = document.getElementById(obj).value;
    var mds_str = "";

    if (str == '') {
        DisplayModal('تاریخ وارد نشده است.', 'خطا', 4);
        return false;
    }
    for (var i = 0; i < str.length; i++) {
        switch (str.charCodeAt(i)) {
            case 1777: mds_str = mds_str + "1"; break;
            case 1778: mds_str = mds_str + "2"; break;
            case 1779: mds_str = mds_str + "3"; break;
            case 1780: mds_str = mds_str + "4"; break;
            case 1781: mds_str = mds_str + "5"; break;
            case 1782: mds_str = mds_str + "6"; break;
            case 1783: mds_str = mds_str + "7"; break;
            case 1784: mds_str = mds_str + "8"; break;
            case 1785: mds_str = mds_str + "9"; break;
            case 1776: mds_str = mds_str + "0"; break;
            case 47: mds_str = mds_str + "/"; break;
            default:
                mds_str = mds_str + str.substr(i, 1);
            //       alert(mds_str + '****' + str.substr(i, 1)+'****'+i); break;
        }
    }

    var patt = /(13|14|19|20)([0-9][0-9])\/(((0?[1-6])\/((0?[1-9])|([12][0-9])|(3[0-1])))|(((0?[7-9])|(1[0-2]))\/((0?[1-9])|([12][0-9])|(30))))/g;
    var result = patt.test(mds_str);
    if (result) {
        var pos = mds_str.indexOf('/');
        var year = mds_str.substring(0, pos);
        var nextPos = mds_str.indexOf('/', pos + 1);
        var month = mds_str.substring(pos + 1, nextPos);
        var day = mds_str.substring(nextPos + 1);
        if (month == 12 && (year + 1) % 4 != 0 && day == 30) { // kabise = 1379, 1383, 1387,... (year +1) divides on 4 remains 0
            result = false;
        }
        if ((month > 6 && month < 12) && day >= 31) {
            result = false;
        }
    }
    if (result == false) {
        DisplayModal('فرمت تاریخ شمسی وارد شده معتبر نیست. لطفا تاریخ را با فرمت YYYY/MM/DD وارد نمائید.', 'خطا', 4);
        return false;
        //document.getElementById(flag).value = "0";
    }
    else {
        return true;
        //document.getElementById(flag).value = "1";
    }
}

function close_alarm_box() {
    $('#alaram_box').hide();
    var obj = document.getElementById('hdn_alarm').value;
    if (obj != '') { document.getElementById(obj).focus(); }
    document.getElementById("hdn_alarm").value = "";
}
function checkEmail(obj) {
    var emailAddress = document.getElementById(obj).value;
    if (emailAddress != '') {
        var sQtext = '[^\\x0d\\x22\\x5c\\x80-\\xff]';
        var sDtext = '[^\\x0d\\x5b-\\x5d\\x80-\\xff]';
        var sAtom = '[^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+';
        var sQuotedPair = '\\x5c[\\x00-\\x7f]';
        var sDomainLiteral = '\\x5b(' + sDtext + '|' + sQuotedPair + ')*\\x5d';
        var sQuotedString = '\\x22(' + sQtext + '|' + sQuotedPair + ')*\\x22';
        var sDomain_ref = sAtom;
        var sSubDomain = '(' + sDomain_ref + '|' + sDomainLiteral + ')';
        var sWord = '(' + sAtom + '|' + sQuotedString + ')';
        var sDomain = sSubDomain + '(\\x2e' + sSubDomain + ')*';
        var sLocalPart = sWord + '(\\x2e' + sWord + ')*';
        var sAddrSpec = sLocalPart + '\\x40' + sDomain; // complete RFC822 email address spec
        var sValidEmail = '^' + sAddrSpec + '$'; // as whole string

        var reValidEmail = new RegExp(sValidEmail);
        if (reValidEmail.test(emailAddress) == false && emailAddress != '') {
            display_alarm('ایمیل وارد شده معتبر نیست .  لطفا ایمیل خود را با فرمت xx@xxx.xxx وارد کنید .', 'txt_email');
            return false;
        }
    }
    return true;

}
function Set_value_numeric(obj, max_len) {

    var str = document.getElementById(obj).value;
    var temp = ''; //alert(str);
    var str_checked = '';
    for (i = 0; i < str.length; i++) {
        temp = str.substring(i, i + 1);
        switch (temp.charCodeAt(0)) {
            case 1777: temp = "1"; break;
            case 1778: temp = "2"; break;
            case 1779: temp = "3"; break;
            case 1780: temp = "4"; break;
            case 1781: temp = "5"; break;
            case 1782: temp = "6"; break;
            case 1783: temp = "7"; break;
            case 1784: temp = "8"; break;
            case 1785: temp = "9"; break;
            case 1776: temp = "0"; break;
            default:
                temp = temp;
        }

        if (48 <= temp.charCodeAt(0) && temp.charCodeAt(0) <= 57) {
            str_checked = str_checked + temp
        }
        temp = "";
    }
    if (str.length > max_len) {
        str_checked = str_checked.substring(0, max_len);
    }
    document.getElementById(obj).value = str_checked;
}
function Set_value_numeric2(obj, max_len) {

    var str = document.getElementById(obj).value;
    var temp = '';
    var str_checked = '';
    for (i = 0; i < str.length; i++) {
        temp = str.substring(i, i + 1);

        //alert(temp.charCodeAt(0));


        switch (temp.charCodeAt(0)) {
            case 1777: temp = "1"; break;
            case 1778: temp = "2"; break;
            case 1779: temp = "3"; break;
            case 1780: temp = "4"; break;
            case 1781: temp = "5"; break;
            case 1782: temp = "6"; break;
            case 1783: temp = "7"; break;
            case 1784: temp = "8"; break;
            case 1785: temp = "9"; break;
            case 1776: temp = "0"; break;
            default:
                temp = temp;
        }


        if ((48 <= temp.charCodeAt(0) && temp.charCodeAt(0) <= 57) || temp == '.' || temp == '/') {
            if (temp == '/')
                temp = '.';

            if (temp == '.' && !str_checked.includes(".")) str_checked = str_checked + temp
            if (temp != '.') str_checked = str_checked + temp

        }
        temp = "";
    }
    if (str.length > max_len) {
        str_checked = str_checked.substring(0, max_len);
    }
    if (str_checked == '.') str_checked = "";
    document.getElementById(obj).value = str_checked;
}
function Set_value_numeric3(obj, max_len) {

    var str = document.getElementById(obj).value;
    var temp = '';
    var str_checked = '';
    for (i = 0; i < str.length; i++) {
        temp = str.substring(i, i + 1);

        //alert(temp.charCodeAt(0));


        switch (temp.charCodeAt(0)) {
            case 1777: temp = "1"; break;
            case 1778: temp = "2"; break;
            case 1779: temp = "3"; break;
            case 1780: temp = "4"; break;
            case 1781: temp = "5"; break;
            case 1782: temp = "6"; break;
            case 1783: temp = "7"; break;
            case 1784: temp = "8"; break;
            case 1785: temp = "9"; break;
            case 1776: temp = "0"; break;
            default:
                temp = temp;
        }


        if ((48 <= temp.charCodeAt(0) && temp.charCodeAt(0) <= 57) || temp == '+' || temp == '-') {

            str_checked = str_checked + temp

        }
        temp = "";
    }
    if (str.length > max_len) {
        str_checked = str_checked.substring(0, max_len);
    }
    if (str_checked == '.') str_checked = "";
    document.getElementById(obj).value = str_checked;
}

var msg = "";
function CheckMeliCode(obj) {
    var elem = document.getElementById(obj);
    var meli_code = (elem && elem.value) ? elem.value.trim() : "";
    var flag = "";
    if (meli_code != '') {
        var temp = meli_code.substr(0, 1).toUpperCase();
        if (temp >= 'A' && temp <= 'Z') {

            for (i = 2; i < meli_code.length; i++) {

                switch (meli_code.charCodeAt(i)) {
                    case 1777: temp = "1"; break;
                    case 1778: temp = "2"; break;
                    case 1779: temp = "3"; break;
                    case 1780: temp = "4"; break;
                    case 1781: temp = "5"; break;
                    case 1782: temp = "6"; break;
                    case 1783: temp = "7"; break;
                    case 1784: temp = "8"; break;
                    case 1785: temp = "9"; break;
                    case 1776: temp = "0"; break;
                    default:
                        temp = meli_code.substr(i, 1);
                }
                if (temp != '0' && temp != '9' && temp != '8'
                    && temp != '7' && temp != '6' && temp != '5'
                    && temp != '4' && temp != '3' && temp != '2' && temp != '1') {
                    flag = '***';
                }
            }
            if (flag != '***') {

                return true;
            }
            else {
                msg = 'شماره کد ملی یا پاسپورت صحيح نمي باشد';
                //document.getElementById(flag).value = "0";
                display_alarm(msg, obj);
                return false;
            }
        }
        else {
            temp2 = "";
            for (i = 0; i < meli_code.length; i++) {
                //alert(meli_code.charCodeAt(i));
                switch (meli_code.charCodeAt(i)) {
                    case 1777: temp = "1"; break;
                    case 1778: temp = "2"; break;
                    case 1779: temp = "3"; break;
                    case 1780: temp = "4"; break;
                    case 1781: temp = "5"; break;
                    case 1782: temp = "6"; break;
                    case 1783: temp = "7"; break;
                    case 1784: temp = "8"; break;
                    case 1785: temp = "9"; break;
                    case 1776: temp = "0"; break;
                    default:
                        temp = meli_code.substr(i, 1);
                }
                temp2 += temp;
            }
            meli_code = temp2;
            //alert(meli_code);
            if (meli_code.length == 10) {

                if (/^(\d)\1{9}$/.test(meli_code) ||
                    meli_code == '1111111111' ||
                    meli_code == '0000000000' ||
                    meli_code == '2222222222' ||
                    meli_code == '3333333333' ||
                    meli_code == '4444444444' ||
                    meli_code == '5555555555' ||
                    meli_code == '6666666666' ||
                    meli_code == '7777777777' ||
                    meli_code == '8888888888' ||
                    meli_code == '9999999999' ||
                    meli_code == '0123456789' ||
                    meli_code == '1234567890' ||
                    meli_code == '9876543210' ||
                    meli_code == '0987654321'
                ) {
                    msg = 'كد ملي صحيح نمي باشد';
                    //document.getElementById(flag).value = "0";
                    display_alarm(msg, obj);
                    return false;
                }

                c = parseInt(meli_code.charAt(9));
                n = parseInt(meli_code.charAt(0)) * 10 +
                    parseInt(meli_code.charAt(1)) * 9 +
                    parseInt(meli_code.charAt(2)) * 8 +
                    parseInt(meli_code.charAt(3)) * 7 +
                    parseInt(meli_code.charAt(4)) * 6 +
                    parseInt(meli_code.charAt(5)) * 5 +
                    parseInt(meli_code.charAt(6)) * 4 +
                    parseInt(meli_code.charAt(7)) * 3 +
                    parseInt(meli_code.charAt(8)) * 2;
                r = n - parseInt(n / 11) * 11;
                if ((r == 0 && r == c) || (r == 1 && c == 1) || (r > 1 && c == 11 - r)) {
                    //document.getElementById(flag).value = "1";
                    return true;
                }
                else {

                    msg = 'كد ملي صحيح نمي باشد';
                    //document.getElementById(flag).value = "0";
                    display_alarm(msg, obj);
                    return false;
                }
            }
            else {

                msg = 'طول کد ملی وارد شده باید 10 کاراکتر باشد';
                //document.getElementById(flag).value = "0";
                display_alarm(msg, obj);
                //alert(document.getElementById(flag).value+'****'+flag);

                return false;
            }
        }
    }
    else {
        msg = 'ثبت کد ملی الزامی است';
        //document.getElementById(flag).value = "0";
        display_alarm(msg, obj);
        //alert(document.getElementById(flag).value+'****'+flag);

        return false;
    }

    //document.getElementById(flag).value = "1";
}
function display_alarm(alarm_text, obj) {
    $('#alaram_box').hide().fadeIn(1000);
    $('#alaram_box').className = "alarm_box";
    document.getElementById('td1').style.backgroundColor = '#ff0000';
    document.getElementById('td2').style.backgroundColor = '#ff0000';
    document.getElementById('lbl1').innerHTML = 'خطا در ثبت اطلاعات';
    document.getElementById('lbl2').innerHTML = alarm_text;
    document.getElementById("alarm_pic").src = '/Content/images/Cancel-128.png';
    document.getElementById('hdn_alarm').value = obj;
    document.getElementById('alarm_btn').className = "btn-Pcustome-alarm";
    document.getElementById('alaram_box').className = "alarm_box";
    document.documentElement.scrollTop = 0;
}
function display_alarm2(alarm_text, titel, obj, flag) {
    var isSuccess = (flag === 1 || flag === '1');
    var isWarning = (flag === 2 || flag === '2');
    var defaultTitle = isSuccess ? 'ثبت موفق اطلاعات' : (isWarning ? 'هشدار سیستم' : 'خطا در ثبت اطلاعات');
    var finalTitle = titel || defaultTitle;

    if (typeof Swal !== 'undefined') {
        var iconType = isSuccess ? 'success' : (isWarning ? 'warning' : 'error');
        var confirmColor = isSuccess ? '#10b981' : (isWarning ? '#f59e0b' : '#ef4444');

        Swal.fire({
            title: finalTitle,
            text: alarm_text,
            icon: iconType,
            confirmButtonText: 'متوجه شدم',
            confirmButtonColor: confirmColor,
            buttonsStyling: true,
            allowOutsideClick: true,
            allowEscapeKey: true
        }).then(function () {
            if (obj) {
                var el = document.getElementById(obj);
                if (el) {
                    try { el.focus(); } catch (e) { }
                }
            }
        });
        return;
    }

    var card = document.getElementById('alarm_card');
    var icon = document.getElementById('alarm_icon');
    var titleEl = document.getElementById('lbl1');
    var textEl = document.getElementById('lbl2');
    var hdn = document.getElementById('hdn_alarm');

    if (hdn) hdn.value = obj || '';
    if (titleEl) titleEl.textContent = finalTitle;
    if (textEl) textEl.textContent = alarm_text || '';

    if (card) {
        card.classList.remove('is-success', 'is-error', 'is-warning');
        if (isSuccess) {
            card.classList.add('is-success');
            if (icon) icon.className = 'fa fa-check';
        } else if (isWarning) {
            card.classList.add('is-warning');
            if (icon) icon.className = 'fa fa-exclamation-triangle';
        } else {
            card.classList.add('is-error');
            if (icon) icon.className = 'fa fa-times';
        }
    } else {
        var td1 = document.getElementById('td1');
        var td2 = document.getElementById('td2');
        var td3 = document.getElementById('td3');
        var color = isSuccess ? 'green' : '#ff0000';
        if (td1) td1.style.backgroundColor = color;
        if (td2) td2.style.backgroundColor = color;
        if (td3) td3.style.color = color;
    }

    var box = $('#alaram_box');
    if (box.length) {
        box.css('display', 'flex').hide().fadeIn(250);
    }
}

function close_alarm_box() {
    var box = $('#alaram_box');
    if (box.length) {
        box.fadeOut(200, function () {
            var hdn = document.getElementById('hdn_alarm');
            if (hdn) {
                hdn.value = '';
            }
        });
    }
}

window.close_alarm_box = close_alarm_box;
window.display_alarm2 = display_alarm2;
window.display_alarm = function (alarm_text, obj) {
    display_alarm2(alarm_text, 'خطا در اطلاعات ورودی', obj, 0);
};

function jalali_to_gregorian(obj1, obj2) {
    var date_shamsi = document.getElementById(obj1).value;
    mds_str = "";
    if (date_shamsi != '' && date_shamsi.length == 10) {
        if (date_shamsi.substr(0, 2) == '19' || date_shamsi.substr(0, 2) == '20') {
            document.getElementById(obj2).value = document.getElementById(obj1).value;
        }
        else {
            for (var i = 0; i < date_shamsi.length; i++) {
                //alert(date_shamsi.charCodeAt(i));
                switch (date_shamsi.charCodeAt(i)) {
                    case 1777: mds_str = mds_str + "1"; break;
                    case 1778: mds_str = mds_str + "2"; break;
                    case 1779: mds_str = mds_str + "3"; break;
                    case 1780: mds_str = mds_str + "4"; break;
                    case 1781: mds_str = mds_str + "5"; break;
                    case 1782: mds_str = mds_str + "6"; break;
                    case 1783: mds_str = mds_str + "7"; break;
                    case 1784: mds_str = mds_str + "8"; break;
                    case 1785: mds_str = mds_str + "9"; break;
                    case 1776: mds_str = mds_str + "0"; break;
                    case 47: mds_str = mds_str + "/"; break;
                    default:
                        mds_str = mds_str + date_shamsi.substr(i, 1);
                    //alert(mds_str + '****' + date_shamsi.substr(i, 1) + '****' + i); break;
                }
            }

            jy = parseInt(mds_str.substr(0, 4));
            jm = parseInt(mds_str.substr(5, 2));
            jd = parseInt(mds_str.substr(8, 2));
            if (jy > 979) {
                gy = 1600;
                jy -= 979;
            } else {
                gy = 621;
            }
            days = (365 * jy) + ((parseInt(jy / 33)) * 8) + (parseInt(((jy % 33) + 3) / 4)) + 78 + jd + ((jm < 7) ? (jm - 1) * 31 : ((jm - 7) * 30) + 186);
            gy += 400 * (parseInt(days / 146097));
            days %= 146097;
            if (days > 36524) {
                gy += 100 * (parseInt(--days / 36524));
                days %= 36524;
                if (days >= 365) days++;
            }
            gy += 4 * (parseInt(days / 1461));
            days %= 1461;
            if (days > 365) {
                gy += parseInt((days - 1) / 365);
                days = (days - 1) % 365;
            }
            gd = days + 1;
            sal_a = [0, 31, ((gy % 4 == 0 && gy % 100 != 0) || (gy % 400 == 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            for (gm = 0; gm < 13; gm++) {
                v = sal_a[gm];
                if (gd <= v) break;
                gd -= v;
            }

            var g_month = gm.toString();
            if (gm.toString().length == 1)
                g_month = '0' + g_month

            var g_day = gd.toString();
            if (g_day.length == 1)
                g_day = '0' + g_day

            document.getElementById(obj2).value = gy.toString() + '/' + g_month + '/' + g_day;
        }

    }
}
function ginj(year, month, day, f) {
    year = set_char(year);
    month = set_char(month);
    day = set_char(day);
    var $g_days_in_month = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
    var $j_days_in_month = new Array(31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29);

    $gy = year - 1600;
    $gm = month - 1;
    $gd = day - 1;

    $g_day_no = 365 * $gy + div($gy + 3, 4) - div($gy + 99, 100) + div($gy + 399, 400);

    for ($i = 0; $i < $gm; ++$i)
        $g_day_no += $g_days_in_month[$i];
    if ($gm > 1 && (($gy % 4 == 0 && $gy % 100 != 0) || ($gy % 400 == 0)))
        /* leap and after Feb */
        $g_day_no++;
    $g_day_no += $gd;

    $j_day_no = $g_day_no - 79;

    $j_np = div($j_day_no, 12053); /* 12053 = 365*33 + 32/4 */
    $j_day_no = $j_day_no % 12053;

    $jy = 979 + 33 * $j_np + 4 * div($j_day_no, 1461); /* 1461 = 365*4 + 4/4 */

    $j_day_no %= 1461;

    if ($j_day_no >= 366) {
        $jy += div($j_day_no - 1, 365);
        $j_day_no = ($j_day_no - 1) % 365;
    }

    for ($i = 0; $i < 11 && $j_day_no >= $j_days_in_month[$i]; ++$i)
        $j_day_no -= $j_days_in_month[$i];
    $jm = $i + 1;
    $jd = $j_day_no + 1;

    function div(x, y) {
        return Math.floor(x / y);


    }
    var jy = $jy.toString();
    var jm = $jm.toString();
    var jd = $jd.toString();
    if (jm.length == 1) {
        jm = '0' + jm
    }
    if (jd.length == 1) {
        jd = '0' + jd
    }
    //alert(jy + '/' + jm + '/' + jd);
    //if (!f || f == undefined)
    //    return { y: $jy, m: $jm, d: $jd }
    //else
    return jy + '/' + jm + '/' + jd;





}
function set_age(obj1, obj2) {
    var date_shamsi = document.getElementById(obj1).value;
    mds_str = "";

    if (date_shamsi != '' && date_shamsi.length == 10) {
        if (date_shamsi.substr(0, 2) == '19' || date_shamsi.substr(0, 2) == '20') {
            date_shamsi = ginj(date_shamsi.substr(0, 4), date_shamsi.substr(5, 2), date_shamsi.substr(8, 2));
            //alert(date_shamsi);
        }
        for (var i = 0; i < date_shamsi.length; i++) {
            //alert(date_shamsi.charCodeAt(i));
            switch (date_shamsi.charCodeAt(i)) {
                case 1777: mds_str = mds_str + "1"; break;
                case 1778: mds_str = mds_str + "2"; break;
                case 1779: mds_str = mds_str + "3"; break;
                case 1780: mds_str = mds_str + "4"; break;
                case 1781: mds_str = mds_str + "5"; break;
                case 1782: mds_str = mds_str + "6"; break;
                case 1783: mds_str = mds_str + "7"; break;
                case 1784: mds_str = mds_str + "8"; break;
                case 1785: mds_str = mds_str + "9"; break;
                case 1776: mds_str = mds_str + "0"; break;
                case 47: mds_str = mds_str + "/"; break;
                default:
                    mds_str = mds_str + date_shamsi.substr(i, 1);
                //alert(mds_str + '****' + date_shamsi.substr(i, 1) + '****' + i); break;
            }
        }

        jy = parseInt(mds_str.substr(0, 4));
        jm = parseInt(mds_str.substr(5, 2));
        jd = parseInt(mds_str.substr(8, 2));
        if (jy > 979) {
            gy = 1600;
            jy -= 979;
        } else {
            gy = 621;
        }
        days = (365 * jy) + ((parseInt(jy / 33)) * 8) + (parseInt(((jy % 33) + 3) / 4)) + 78 + jd + ((jm < 7) ? (jm - 1) * 31 : ((jm - 7) * 30) + 186);
        gy += 400 * (parseInt(days / 146097));
        days %= 146097;
        if (days > 36524) {
            gy += 100 * (parseInt(--days / 36524));
            days %= 36524;
            if (days >= 365) days++;
        }
        gy += 4 * (parseInt(days / 1461));
        days %= 1461;
        if (days > 365) {
            gy += parseInt((days - 1) / 365);
            days = (days - 1) % 365;
        }
        gd = days + 1;
        sal_a = [0, 31, ((gy % 4 == 0 && gy % 100 != 0) || (gy % 400 == 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        for (gm = 0; gm < 13; gm++) {
            v = sal_a[gm];
            if (gd <= v) break;
            gd -= v;
        }


        var year = new Date().getFullYear()
        result = year - gy;

        document.getElementById(obj2).innerHTML = result.toString();

    }
}
function monthDiff(d1, d2) {

    var months = 0;
    d1 = set_ascii_date2(d1);
    d2 = set_ascii_date2(d2);
    months = (d2.substr(0, 4) - d1.substr(0, 4)) * 12;
    months -= d1.substr(5, 2);
    months += parseInt(d2.substr(5, 2));
    return months <= 0 ? 0 : months;
}
function checkdate_miladi(obj) {
    var str = document.getElementById(obj).value;
    result = true;
    if (str != '') {
        var regEx = /(19|20)([0-9][0-9])\/(((0?[1-6])\/((0?[1-9])|([12][0-9])|(3[0-1])))|(((0?[7-9])|(1[0-2]))\/((0?[1-9])|([12][0-9])|(30))))/g;

        if (!str.match(regEx))
            result = false;  // Invalid format
        var d;
        if (!((d = new Date(str)) | 0))
            result = false; // Invalid date (or this could be epoch)
        //return d.toISOString().slice(0, 10) == dateString;
    }
    if (result == false) {
        //document.getElementById(flag).value = "0";
        display_alarm('فرمت تاریخ میلادی وارد شده معتبر نیست. لطفا تاریخ را با فرمت YYYY/MM/DD وارد نمائید.', obj);
        return false;
    }
    else {
        return true;
        //document.getElementById(flag).value = "1";
    }
}
function checkdate_sequence(obj1, obj2) {
    var date1 = document.getElementById(obj1).value;
    var date2 = document.getElementById(obj2).value;
    if (date2 != '') {
        if (date1 == '' && date2 != '') {
            display_alarm('تاریخ شروع وارد نشده است.', obj);
            return false;
        }
        var mds_str1 = "";
        var mds_str2 = "";
        if (date1 != '') {
            //
            for (var i = 0; i < date1.length; i++) {
                switch (date1.charCodeAt(i)) {
                    case 1777: mds_str1 = mds_str1 + "1"; break;
                    case 1778: mds_str1 = mds_str1 + "2"; break;
                    case 1779: mds_str1 = mds_str1 + "3"; break;
                    case 1780: mds_str1 = mds_str1 + "4"; break;
                    case 1781: mds_str1 = mds_str1 + "5"; break;
                    case 1782: mds_str1 = mds_str1 + "6"; break;
                    case 1783: mds_str1 = mds_str1 + "7"; break;
                    case 1784: mds_str1 = mds_str1 + "8"; break;
                    case 1785: mds_str1 = mds_str1 + "9"; break;
                    case 1776: mds_str1 = mds_str1 + "0"; break;
                    case 47: mds_str1 = mds_str1; break;
                    default:
                        mds_str1 = mds_str1 + date1.substr(i, 1);
                    //       alert(mds_str + '****' + str.substr(i, 1)+'****'+i); break;
                }
            }

        }


        if (date2 != '') {
            //
            for (var i = 0; i < date2.length; i++) {
                switch (date2.charCodeAt(i)) {
                    case 1777: mds_str2 = mds_str2 + "1"; break;
                    case 1778: mds_str2 = mds_str2 + "2"; break;
                    case 1779: mds_str2 = mds_str2 + "3"; break;
                    case 1780: mds_str2 = mds_str2 + "4"; break;
                    case 1781: mds_str2 = mds_str2 + "5"; break;
                    case 1782: mds_str2 = mds_str2 + "6"; break;
                    case 1783: mds_str2 = mds_str2 + "7"; break;
                    case 1784: mds_str2 = mds_str2 + "8"; break;
                    case 1785: mds_str2 = mds_str2 + "9"; break;
                    case 1776: mds_str2 = mds_str2 + "0"; break;
                    case 47: mds_str2 = mds_str2; break;
                    default:
                        mds_str2 = mds_str2 + date2.substr(i, 1);
                    //       alert(mds_str + '****' + str.substr(i, 1)+'****'+i); break;
                }
            }

        }

        if (mds_str2 <= mds_str1) {
            display_alarm('تاریخ خاتمه باید بعد از تاریخ شروع باشد.', obj2);
            return false;
        }
        else {
            return true;
        }
    }
    else { return true; }
}
function checkages_not_empty(obj) {
    var str = document.getElementById(obj).value;
    if (str == '' || str == '-1' || str == '0') {
        //document.getElementById(flag).value = "0";
        display_alarm('لطفا رده سنی مورد نظر خود را وارد کنید', obj);
        return false;

    }
    return true;
}
function set_weekday(obj1, obj2, obj3, obj4) {
    if (document.getElementById(obj1).value != '') {
        var weekday = '';
        var date = document.getElementById(obj1).value;
        jalali_to_gregorian(obj1, obj2);
        var MyDate = new Date(document.getElementById(obj2).value);
        switch (MyDate.getDay()) {
            case 0: weekday = 'یکشنبه'; break;
            case 1: weekday = 'دوشنبه'; break;
            case 2: weekday = 'سه‌شنبه'; break;
            case 3: weekday = 'چهارشنبه'; break;
            case 4: weekday = 'پنجشنبه'; break;
            case 5: weekday = 'جمعه'; break;
            case 6: weekday = 'شنبه'; break;
        }
        document.getElementById(obj3).innerText = weekday;
        document.getElementById(obj4).value = MyDate.getDay();

    }


}
function set_weekday_full(obj1, obj2, obj3, obj4) {
    if (document.getElementById(obj1).value != '') {
        var weekday = '';
        var date = document.getElementById(obj1).value;
        jalali_to_gregorian(obj1, obj2);
        var MyDate = new Date(document.getElementById(obj2).value);
        switch (MyDate.getDay()) {
            case 0: weekday = 'یکشنبه/Saturday'; break;
            case 1: weekday = 'دوشنبه/Monday'; break;
            case 2: weekday = 'سه‌شنبه/Tuesday'; break;
            case 3: weekday = 'چهارشنبه/Wednesday'; break;
            case 4: weekday = 'پنجشنبه/Thursday'; break;
            case 5: weekday = 'جمعه/Friday'; break;
            case 6: weekday = 'شنبه/Sunday'; break;
        }
        document.getElementById(obj3).innerText = weekday;
        document.getElementById(obj4).value = MyDate.getDay();

    }


}
function set_ascii_date(str) {
    var mds_str1 = "";
    if (str != '') {
        //
        for (var i = 0; i < str.length; i++) {
            switch (str.charCodeAt(i)) {
                case 1777: mds_str1 = mds_str1 + "1"; break;
                case 1778: mds_str1 = mds_str1 + "2"; break;
                case 1779: mds_str1 = mds_str1 + "3"; break;
                case 1780: mds_str1 = mds_str1 + "4"; break;
                case 1781: mds_str1 = mds_str1 + "5"; break;
                case 1782: mds_str1 = mds_str1 + "6"; break;
                case 1783: mds_str1 = mds_str1 + "7"; break;
                case 1784: mds_str1 = mds_str1 + "8"; break;
                case 1785: mds_str1 = mds_str1 + "9"; break;
                case 1776: mds_str1 = mds_str1 + "0"; break;
                case 47: mds_str1 = mds_str1; break;
                default:
                    mds_str1 = mds_str1 + str.substr(i, 1);
                //       alert(mds_str + '****' + str.substr(i, 1)+'****'+i); break;
            }
        }
    }
    return mds_str1;
}
function set_ascii_date2(str) {
    var mds_str1 = "";
    if (str != '') {
        //
        for (var i = 0; i < str.length; i++) {
            switch (str.charCodeAt(i)) {
                case 1777: mds_str1 = mds_str1 + "1"; break;
                case 1778: mds_str1 = mds_str1 + "2"; break;
                case 1779: mds_str1 = mds_str1 + "3"; break;
                case 1780: mds_str1 = mds_str1 + "4"; break;
                case 1781: mds_str1 = mds_str1 + "5"; break;
                case 1782: mds_str1 = mds_str1 + "6"; break;
                case 1783: mds_str1 = mds_str1 + "7"; break;
                case 1784: mds_str1 = mds_str1 + "8"; break;
                case 1785: mds_str1 = mds_str1 + "9"; break;
                case 1776: mds_str1 = mds_str1 + "0"; break;
                case 47: mds_str1 = mds_str1 + "/"; break;
                default:
                    mds_str1 = mds_str1 + str.substr(i, 1);
                //       alert(mds_str + '****' + str.substr(i, 1)+'****'+i); break;
            }
        }
    }
    return mds_str1;
}
function set_curency_format(obj) {


    var str = document.getElementById(obj).value.replace(',', '');
    var temp = '';
    var str_checked = '';
    for (i = 0; i < str.length; i++) {
        temp = str.substring(i, i + 1);

        //alert(temp.charCodeAt(0));


        switch (temp.charCodeAt(0)) {
            case 1777: temp = "1"; break;
            case 1778: temp = "2"; break;
            case 1779: temp = "3"; break;
            case 1780: temp = "4"; break;
            case 1781: temp = "5"; break;
            case 1782: temp = "6"; break;
            case 1783: temp = "7"; break;
            case 1784: temp = "8"; break;
            case 1785: temp = "9"; break;
            case 1776: temp = "0"; break;
            default:
                temp = temp;
        }


        if ((48 <= temp.charCodeAt(0) && temp.charCodeAt(0) <= 57) || temp == '-') {

            str_checked = str_checked + temp

        }
        temp = "";
    }

    var num = str_checked.replace(/,/g, "", -1);
    document.getElementById(obj).value = num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}
function set_curency_format_value(str) {
    var temp = str.replace(/,/g, "", -1);
    return temp.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")

}
function CheckfaragirCode(obj) {
    var faragir_code = document.getElementById(obj).value;
    var flag = "";
    if (faragir_code != '') {
        for (i = 2; i < faragir_code.length; i++) {
            switch (faragir_code.charCodeAt(i)) {
                case 1777: temp = "1"; break;
                case 1778: temp = "2"; break;
                case 1779: temp = "3"; break;
                case 1780: temp = "4"; break;
                case 1781: temp = "5"; break;
                case 1782: temp = "6"; break;
                case 1783: temp = "7"; break;
                case 1784: temp = "8"; break;
                case 1785: temp = "9"; break;
                case 1776: temp = "0"; break;
                default:
                    temp = faragir_code.substr(i, 1);
            }
            if (temp != '0' && temp != '9' && temp != '8'
                && temp != '7' && temp != '6' && temp != '5'
                && temp != '4' && temp != '3' && temp != '2' && temp != '1') {
                flag = '***';
            }
        }
        if (flag != '***') {

            return true;
        }
        else {
            msg = 'شماره کد فراگیر صحيح نمي باشد';
            display_alarm(msg, obj);
            return false;
        }
    }
    else {
        msg = 'ثبت کد فراگیر الزامی است';
        //document.getElementById(flag).value = "0";
        display_alarm(msg, obj);
        //alert(document.getElementById(flag).value+'****'+flag);

        return false;
    }

    //document.getElementById(flag).value = "1";
}
function set_char(str) {
    var temp = "";
    for (var i = 0; i < str.length; i++) {
        switch (str.charCodeAt(i)) {
            case 1777: temp = temp + "1"; break;
            case 1778: temp = temp + "2"; break;
            case 1779: temp = temp + "3"; break;
            case 1780: temp = temp + "4"; break;
            case 1781: temp = temp + "5"; break;
            case 1782: temp = temp + "6"; break;
            case 1783: temp = temp + "7"; break;
            case 1784: temp = temp + "8"; break;
            case 1785: temp = temp + "9"; break;
            case 1776: temp = temp + "0"; break;
            case 47: temp = temp + "/"; break;
            default:
                temp = temp + str.substr(i, 1);
            //       alert(mds_str + '****' + str.substr(i, 1)+'****'+i); break;
        }
    }
    if (temp != '')
        str = temp;
    return str;
}
function jalali_to_gregorian2(date_shamsi) {
    mds_str = "";
    if (date_shamsi != '' && date_shamsi.length == 10) {
        if (date_shamsi.substr(0, 2) == '19' || date_shamsi.substr(0, 2) == '20') {
            document.getElementById(obj2).value = document.getElementById(obj1).value;
        }
        else {
            for (var i = 0; i < date_shamsi.length; i++) {
                //alert(date_shamsi.charCodeAt(i));
                switch (date_shamsi.charCodeAt(i)) {
                    case 1777: mds_str = mds_str + "1"; break;
                    case 1778: mds_str = mds_str + "2"; break;
                    case 1779: mds_str = mds_str + "3"; break;
                    case 1780: mds_str = mds_str + "4"; break;
                    case 1781: mds_str = mds_str + "5"; break;
                    case 1782: mds_str = mds_str + "6"; break;
                    case 1783: mds_str = mds_str + "7"; break;
                    case 1784: mds_str = mds_str + "8"; break;
                    case 1785: mds_str = mds_str + "9"; break;
                    case 1776: mds_str = mds_str + "0"; break;
                    case 47: mds_str = mds_str + "/"; break;
                    default:
                        mds_str = mds_str + date_shamsi.substr(i, 1);
                    //alert(mds_str + '****' + date_shamsi.substr(i, 1) + '****' + i); break;
                }
            }

            jy = parseInt(mds_str.substr(0, 4));
            jm = parseInt(mds_str.substr(5, 2));
            jd = parseInt(mds_str.substr(8, 2));
            if (jy > 979) {
                gy = 1600;
                jy -= 979;
            } else {
                gy = 621;
            }
            days = (365 * jy) + ((parseInt(jy / 33)) * 8) + (parseInt(((jy % 33) + 3) / 4)) + 78 + jd + ((jm < 7) ? (jm - 1) * 31 : ((jm - 7) * 30) + 186);
            gy += 400 * (parseInt(days / 146097));
            days %= 146097;
            if (days > 36524) {
                gy += 100 * (parseInt(--days / 36524));
                days %= 36524;
                if (days >= 365) days++;
            }
            gy += 4 * (parseInt(days / 1461));
            days %= 1461;
            if (days > 365) {
                gy += parseInt((days - 1) / 365);
                days = (days - 1) % 365;
            }
            gd = days + 1;
            sal_a = [0, 31, ((gy % 4 == 0 && gy % 100 != 0) || (gy % 400 == 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            for (gm = 0; gm < 13; gm++) {
                v = sal_a[gm];
                if (gd <= v) break;
                gd -= v;
            }

            var g_month = gm.toString();
            if (gm.toString().length == 1)
                g_month = '0' + g_month

            var g_day = gd.toString();
            if (g_day.length == 1)
                g_day = '0' + g_day
            return (gy.toString() + '/' + g_month + '/' + g_day);
        }

    }
}
function gregorian_to_jalali(date_miladi) {
    year = set_char(date_miladi.substr(0, 4));
    month = set_char(date_miladi.substr(5, 2));
    day = set_char(date_miladi.substr(8, 2));
    var $g_days_in_month = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
    var $j_days_in_month = new Array(31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29);

    $gy = year - 1600;
    $gm = month - 1;
    $gd = day - 1;

    $g_day_no = 365 * $gy + div($gy + 3, 4) - div($gy + 99, 100) + div($gy + 399, 400);

    for ($i = 0; $i < $gm; ++$i)
        $g_day_no += $g_days_in_month[$i];
    if ($gm > 1 && (($gy % 4 == 0 && $gy % 100 != 0) || ($gy % 400 == 0)))
        /* leap and after Feb */
        $g_day_no++;
    $g_day_no += $gd;

    $j_day_no = $g_day_no - 79;

    $j_np = div($j_day_no, 12053); /* 12053 = 365*33 + 32/4 */
    $j_day_no = $j_day_no % 12053;

    $jy = 979 + 33 * $j_np + 4 * div($j_day_no, 1461); /* 1461 = 365*4 + 4/4 */

    $j_day_no %= 1461;

    if ($j_day_no >= 366) {
        $jy += div($j_day_no - 1, 365);
        $j_day_no = ($j_day_no - 1) % 365;
    }

    for ($i = 0; $i < 11 && $j_day_no >= $j_days_in_month[$i]; ++$i)
        $j_day_no -= $j_days_in_month[$i];
    $jm = $i + 1;
    $jd = $j_day_no + 1;

    function div(x, y) {
        return Math.floor(x / y);


    }
    var jy = $jy.toString();
    var jm = $jm.toString();
    var jd = $jd.toString();
    if (jm.length == 1) {
        jm = '0' + jm
    }
    if (jd.length == 1) {
        jd = '0' + jd
    }
    //alert(jy + '/' + jm + '/' + jd);
    //if (!f || f == undefined)
    //    return { y: $jy, m: $jm, d: $jd }
    //else
    return jy + '/' + jm + '/' + jd;





}
function CheckCellPhone(obj) {


    var CellPhone = document.getElementById(obj).value;
    CellPhone = set_char(CellPhone);
    if (CellPhone.length != 11) {
        display_alarm2('لطفا شماره تلفن همراه را صحیح وارد فرمائید', 'اشکال در تلفن همراه وارد شده', "", 0);
        return false;
    }

    if (CellPhone.substr(0, 2) != '09') {
        display_alarm2('لطفا از کیبرد انگلیسی استفاده نمائید', 'اشکال در تلفن همراه وارد شده', "", 0);
        return false;
    }

    if (CellPhone == '09111111111'
        || CellPhone == '09222222222'
        || CellPhone == '09131111111'
        || CellPhone == '09333333333'
        || CellPhone == '09444444444'
        || CellPhone == '09555555555'
        || CellPhone == '09666666666'
        || CellPhone == '09777777777'
        || CellPhone == '09888888888'
        || CellPhone == '09999999999'
        || CellPhone == '09000000000') {
        display_alarm('تلفن همراه وارد شده معتبر نمیباشد', 'اشکال در تلفن همراه وارد شده');
        return false;
    }
    return true;

}
function CheckStrLenght(obj, len) {

    var str = document.getElementById(obj).value;
    if (str.length > len) {
        document.getElementById(obj).value = str.substring(0, len);
    }
}

function CheckPhoneNew(fieldId) {
    var phoneField = document.getElementById(fieldId);
    var phoneValue = phoneField.value;
    var errorMessageId = fieldId + "-error";
    var phonePattern = /^09\d{9}$/; // این الگو برای شماره‌های 10 رقمی است (مثلاً 09123456789)

    if (phonePattern.test(phoneValue)) {
        // اگر شماره تلفن معتبر است
        phoneField.style.borderColor = "green";
        document.getElementById(errorMessageId).innerText = '';
        document.getElementById(errorMessageId).style.visibility = 'hidden';
        return true;
    }
    else if (phoneValue !== '') {
        phoneField.style.borderColor = "red";
        document.getElementById(errorMessageId).innerText = 'شماره تلفن معتبر نیست';
        document.getElementById(errorMessageId).style.visibility = 'visible';
        return false;
    }
    if (phoneValue == '09111111111'
        || phoneValue == '09222222222'
        || phoneValue == '09131111111'
        || phoneValue == '09333333333'
        || phoneValue == '09444444444'
        || phoneValue == '09555555555'
        || phoneValue == '09666666666'
        || phoneValue == '09777777777'
        || phoneValue == '09888888888'
        || phoneValue == '09999999999'
        || phoneValue == '09000000000') {
        phoneField.style.borderColor = "red";
        document.getElementById(errorMessageId).innerText = 'شماره تلفن معتبر نیست';
        document.getElementById(errorMessageId).style.visibility = 'visible';
        return false;
    }
    if (phoneValue == '') {
        phoneField.style.borderColor = "red";
        document.getElementById(errorMessageId).innerText = 'شماره تلفن واردنشده است ';
        document.getElementById(errorMessageId).style.visibility = 'visible';
        return false;
    }

}
function CheckLandingphoneNew(fieldId) {
    var phoneField = document.getElementById(fieldId);
    var phoneValue = phoneField.value;
    var errorMessageId = fieldId + "-error";
    var phonePattern = /^0\d{10}$/; // این الگو برای شماره‌های 10 رقمی است (مثلاً 03138472099)
    if (phonePattern.test(phoneValue)) {
        // اگر شماره تلفن معتبر است
        phoneField.style.borderColor = "green";
        document.getElementById(errorMessageId).innerText = '';
        document.getElementById(errorMessageId).style.visibility = 'hidden';
        return true;
    }
    else if (phoneValue !== '') {
        phoneField.style.borderColor = "red";
        document.getElementById(errorMessageId).innerText = 'شماره تلفن معتبر نیست';
        document.getElementById(errorMessageId).style.visibility = 'visible';
        return false;
    }
    if (phoneValue == '00000000000'
        || phoneValue == '03222222222'
        || phoneValue == '02111111111'
        || phoneValue == '021333333333'
        || phoneValue == '03144444444'
        || phoneValue == '02155555555'
        || phoneValue == '03166666666'
        || phoneValue == '03177777777'
        || phoneValue == '03188888888'
        || phoneValue == '03199999999'
        || phoneValue == '03100000000'
        || phoneValue.substr(0, 2) == '09' && phoneValue !== '') {
        phoneField.style.borderColor = "red";
        document.getElementById(errorMessageId).innerText = 'شماره معتبر نیست';
        document.getElementById(errorMessageId).style.visibility = 'visible';
        return false;
    }
    if (phoneValue == '') {
        phoneField.style.borderColor = "red";
        document.getElementById(errorMessageId).innerText = 'شماره تلفن واردنشده است';
        document.getElementById(errorMessageId).style.visibility = 'visible';
        return false;
    }


}
function CheckPostalcodNew(fieldId) {
    var postalfield = document.getElementById(fieldId);
    var postalvalue = postalfield.value;
    var errorMessageId = fieldId + "-error";
    var postalCodeRegex = /^(\d{10})?$/;
    if (!postalCodeRegex.test(postalvalue)) {
        postalfield.style.borderColor = "red";
        document.getElementById(errorMessageId).innerText = 'کد پستی معتبر نیست. لطفاً ۱۰ رقم وارد کنید.';
        document.getElementById(errorMessageId).style.visibility = 'visible';
        return false;
    }
    else {
        postalfield.style.borderColor = "green";
        document.getElementById(errorMessageId).innerText = '';
        document.getElementById(errorMessageId).style.visibility = 'hidden';
        return true;
    }
    return true;
}
function CheckEmailNew(fieldId) {
    emailfield = document.getElementById(fieldId);
    var emailAddress = emailfield.value;
    var sQtext = '[^\\x0d\\x22\\x5c\\x80-\\xff]';
    var sDtext = '[^\\x0d\\x5b-\\x5d\\x80-\\xff]';
    var sAtom = '[^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+';
    var sQuotedPair = '\\x5c[\\x00-\\x7f]';
    var sDomainLiteral = '\\x5b(' + sDtext + '|' + sQuotedPair + ')*\\x5d';
    var sQuotedString = '\\x22(' + sQtext + '|' + sQuotedPair + ')*\\x22';
    var sDomain_ref = sAtom;
    var sSubDomain = '(' + sDomain_ref + '|' + sDomainLiteral + ')';
    var sWord = '(' + sAtom + '|' + sQuotedString + ')';
    var sDomain = sSubDomain + '(\\x2e' + sSubDomain + ')*';
    var sLocalPart = sWord + '(\\x2e' + sWord + ')*';
    var sAddrSpec = sLocalPart + '\\x40' + sDomain; // complete RFC822 email address spec
    var sValidEmail = '^' + sAddrSpec + '$'; // as whole string
    var reValidEmail = new RegExp(sValidEmail);
    if (reValidEmail.test(emailAddress) == false && emailAddress != '') {
        emailfield.style.borderColor = "red";
        document.getElementById('txt_email_error').innerText = 'ایمیل وارد شده معتبر نیست .  لطفا ایمیل خود را با فرمت xx@xxx.xxx وارد کنید .';
        document.getElementById('txt_email_error').style.visibility = 'visible';
        return false;
    }
    else if (emailAddress == '') {
        emailfield.style.borderColor = "red";
        document.getElementById('txt_email_error').innerText = 'ایمیل واردنشده است';
        document.getElementById('txt_email_error').style.visibility = 'visible';
        return false;
    }
    else {
        emailfield.style.borderColor = "green";
        document.getElementById('txt_email_error').innerText = '';
        document.getElementById('txt_email_error').style.visibility = 'hidden';
        return true;
    }
    return true;
}
function CheckIdInstagramNew(fieldId) {
    var instagramfield = document.getElementById(fieldId);
    var instagramlvalue = instagramfield.value;
    const username = instagramlvalue.trim();
    const instagramRegex = /^[a-zA-Z0-9._]{4,30}$/;
    if (!instagramRegex.test(instagramlvalue) && instagramlvalue !== '') {
        instagramfield.style.borderColor = "red";
        document.getElementById('txt_instagram_error').innerText = 'آیدی اینستاگرام معتبر نیست.';
        document.getElementById('txt_instagram_error').style.visibility = 'visible';
        return false;
    }
    else if (instagramlvalue !== '') {
        instagramfield.style.borderColor = "green";
        document.getElementById('txt_instagram_error').innerText = '';
        document.getElementById('txt_instagram_error').style.visibility = 'hidden';
        return true;
    }
    return true;
}
function CheckWebsiteNew(fieldId) {
    var websitefield = document.getElementById(fieldId);
    var websitevalue = websitefield.value;
    const websiteRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    // بررسی URL با استفاده از الگوی منظم
    if (!websiteRegex.test(websitevalue) && websitevalue !== '') {
        websitefield.style.borderColor = "red";
        document.getElementById('txt_website_error').innerText = 'وب سایت معتبر نیست.';
        document.getElementById('txt_website_error').style.visibility = 'visible';
        return false;
    }
    else {
        websitefield.style.borderColor = "green";
        document.getElementById('txt_website_error').innerText = '';
        document.getElementById('txt_website_error').style.visibility = 'hidden';
        return true;
    }
    return true;
}
function CheckAddressNew(fieldId) {
    var addressfield = document.getElementById(fieldId);
    var addressvalue = addressfield.value;
    if (addressvalue == '') {
        addressfield.style.borderColor = "red";
        document.getElementById('txt_address_error').innerText = 'آدرس واردنشده';
        return false;
    }
    else {
        addressfield.style.borderColor = "green";
        document.getElementById('txt_address_error').innerText = '';
        return true;
    }
    return true;
}
function CheckNotNull(fieldId) {
    var namefield = document.getElementById(fieldId);
    var namevalue = namefield.value;
    var errormessage = fieldId + '_error'
    if (namevalue == '') {
        namefield.style.borderColor = "red";
        namefield.classList.add('shake');
        document.getElementById(errormessage).innerText = 'پرکردن فیلد های ستاره دارالزامی است';
        return false;
    }
    else {
        namefield.style.borderColor = "green";
        document.getElementById(errormessage).innerText = '';
        return true;
    }
    return true;
}
function CheckNameClub(fieldId) {
    var clubnamefield = document.getElementById(fieldId);
    var clubnamevalue = clubnamefield.value;
    if (clubnamevalue == '') {
        clubnamefield.style.borderColor = "red";
        document.getElementById('txt_club_name_error').innerText = 'نام نمایشی باشگاه واردنشده';
        return false;
    }
    else {
        clubnamefield.style.borderColor = "green";
        document.getElementById('txt_club_name_error').innerText = '';
        return true;
    }
    return true;
}
function CheckNameFormalClub(fieldId) {
    var clubnamefield = document.getElementById(fieldId);
    var clubnamevalue = clubnamefield.value;
    if (clubnamevalue == '') {
        clubnamefield.style.borderColor = "red";
        document.getElementById('txt_club_formal_name_error').innerText = 'نام رسمی باشگاه واردنشده';
        return false;
    }
    else {
        clubnamefield.style.borderColor = "green";
        document.getElementById('txt_club_formal_name_error').innerText = '';
        return true;
    }
    return true;
}
function CheckBossName(fieldId) {
    var bossnamefield = document.getElementById(fieldId);
    var bossnamevalue = bossnamefield.value;
    if (bossnamevalue == '') {
        bossnamefield.style.borderColor = "red";
        document.getElementById('txt_boss_name_error').innerText = 'نام مدیرعامل واردنشده';
        return false;
    }
    else {
        bossnamefield.style.borderColor = "green";
        document.getElementById('txt_boss_name_error').innerText = '';
        return true;
    }
    return true;
}
function CheckLogo() {
    var fileInput = document.getElementById('FileUpload');
    if (fileInput.src == '') {
        fileInput.style.borderColor = 'red';
        document.getElementById('txt_image_error').innerText = 'پرکردن فیلد های ستاره دارالزامی است';
        return false;
    }
    else {
        fileInput.style.borderColor = 'green';
        document.getElementById('txt_image_error').innerText = '';
        return true;
    }
    return true;
}
function CheckFootballBoardSelection() {
    var stateSelect = document.getElementById('cmb_football_board2');
    if (!stateSelect.value) {
        stateSelect.style.borderColor = "red";
        document.getElementById('txt_cmb_football_error').innerText = 'هیٔت فوتبال انتخاب نشده است';
        return false;
    }
    else {
        stateSelect.style.borderColor = "green";
        document.getElementById('txt_cmb_football_error').innerText = '';
        return true;
    }
}
function CheckStateSelection() {
    var stateSelect = document.getElementById('cmb_state');
    if (!stateSelect.value) {
        stateSelect.style.borderColor = "red";
        document.getElementById('cmb_state_error').innerText = 'استان انتخاب نشده است';
        return false;
    }
    else {
        stateSelect.style.borderColor = "green";
        document.getElementById('cmb_state_error').innerText = '';
        return true;
    }
    return true;
}


function CloseModal() {
    document.getElementById("ModalPanel").style.display = "none";
}
function DisplayModal(modal_text, title, flag) {
    document.getElementById("ModalPanel").style.display = "flex";
    if (flag == 1) {
        document.getElementById('icon-box-ID').style.backgroundColor = '#82ce34';
        document.getElementById("btn-modal").style.backgroundColor = '#82ce34';
        document.getElementById("modal-text-ID").innerHTML = modal_text;
        document.getElementById("modal-title-ID").innerText = title;
        document.getElementById("img-icon").src = '/Content/assets/img/icons/icons8-trophy-48.png';
    }
    if (flag == 0) {
        document.getElementById('icon-box-ID').style.backgroundColor = '#FF5252';
        document.getElementById("btn-modal").style.backgroundColor = '#FF5252';
        document.getElementById("modal-text-ID").innerHTML = modal_text;
        document.getElementById("modal-title-ID").innerText = title;
        document.getElementById("img-icon").src = '/Content/assets/img/icons/icons8-error-50.png';

    }
    if (flag == 2) {
        document.getElementById("icon-box").style.backgroundColor = "#FF5252";
        document.getElementById("modal-footer button").style.backgroundColor = "#FF5252";
        document.getElementById("modal-text").innerText = modal_text;
        document.getElementById("modal-title").innerText = title;
    }
    document.getElementById("btn-modal").focus();

}
//ShowModal
function fadeInModal(obj) {
    var modal = document.getElementById(obj);
    modal.style.display = "flex";
    modal.style.opacity = 0;
    modal.style.transition = "opacity 0.5s ease";
    setTimeout(function () {
        modal.style.opacity = 1;
    }, 25);
}
function DisplayModal(modal_text, title, flag, redirection) {
    fadeInModal("ModalPanel");
    var timeout;
    switch (flag) {
        case 1:
            document.getElementById('icon-box-ID').style.backgroundColor = '#82ce34';
            document.getElementById("btn-modal").style.backgroundColor = '#82ce34';
            document.getElementById("modal-text-ID").innerHTML = modal_text;
            document.getElementById("modal-title-ID").innerText = title;
            document.getElementById("img-icon").src = '/Content/assets/img/icons/icons8-trophy-48.png';
            document.getElementById("btn_remove_teame").style.display = "none";
            break;
        case 0:
            document.getElementById('icon-box-ID').style.backgroundColor = '#FF5252';
            document.getElementById("btn-modal").style.backgroundColor = '#FF5252';
            document.getElementById("modal-text-ID").innerHTML = modal_text;
            document.getElementById("modal-title-ID").innerText = title;
            document.getElementById("img-icon").src = '/Content/assets/img/icons/icons8-error-50.png';
            document.getElementById("btn_remove_teame").style.display = "none";
            break;
        case 2:
            document.getElementById('icon-box-ID').style.backgroundColor = '#FF5252';
            document.getElementById("btn-modal").style.backgroundColor = '#FAB005';
            document.getElementById("modal-text-ID").innerHTML = modal_text;
            document.getElementById("modal-title-ID").innerText = title;
            document.getElementById("img-icon").src = '/Content/assets/img/icons/icons8-exclamation-mark-64.png';
            document.getElementById("btn_remove_teame").style.display = "flex";
            break;
        case 3:
            document.getElementById('icon-box-ID').style.backgroundColor = 'white';
            document.getElementById("btn-modal").style.backgroundColor = '#FF5252';
            document.getElementById("modal-text-ID").innerHTML = modal_text;
            document.getElementById("modal-title-ID").innerText = title;
            document.getElementById("img-icon").src = '/Content/assets/img/icons/icons8-remove-64.png';
            document.getElementById("btn_remove_teame").style.display = "none";

            break;
        case 4:
            document.getElementById('icon-box-ID').style.backgroundColor = 'white';
            document.getElementById("btn-modal").style.backgroundColor = '#FAB005';
            document.getElementById("modal-text-ID").innerHTML = modal_text;
            document.getElementById("modal-title-ID").innerText = title;
            document.getElementById("img-icon").src = '/Content/assets/img/icons/icons8-exclamation-mark-64.png';
            document.getElementById("btn_remove_teame").style.display = "none";
            break;
        case 5:
            document.getElementById('icon-box-ID').style.backgroundColor = 'white';
            document.getElementById("btn-modal").style.backgroundColor = '#FF5252';
            document.getElementById("modal-text-ID").innerHTML = modal_text;
            document.getElementById("modal-title-ID").innerText = title;
            document.getElementById("img-icon").style.width = '70px';
            document.getElementById("img-icon").style.height = '70px';
            document.getElementById("img-icon").src = '/Content/assets/img/icons/offboarding.png';
            document.getElementById("btn_remove_teame").style.display = "none";
            break;
        default:
            break;
    }
    // تنظیم رفتار دکمه برای ریدایرکت یا بسته شدن مودال
    document.getElementById("btn-modal").onclick = function () {
        document.getElementById("ModalPanel").style.display = "none";
        clearTimeout(timeout);
        if (redirection != null && redirection != '') {

            window.location.href = redirection;
        }

    };

    if (redirection != null && redirection != '') {
        if (flag == 3 || flag == 0 || flag == 1 || flag == 4 || flag == 5) {
            //document.getElementById("btn-modal").style.display = "none";
            timeout = setTimeout(function () {
                window.location.href = redirection;
            }, 4000)
        }
        else {
            document.getElementById("btn-modal").onclick = function () {
                window.location.href = redirection;
            };
        }
    }
    else {

        if (flag == 3 || flag == 0 || flag == 1 || flag == 4 || flag == 5) {
            //document.getElementById("btn-modal").style.display = "none";
            timeout = setTimeout(function () {
                document.getElementById("ModalPanel").style.display = "none";
            }, 4000)
        }
        else {
            document.getElementById("btn-modal").onclick = function () {
                document.getElementById("ModalPanel").style.display = "none";
            };
        }
    }
    document.getElementById("btn-modal").focus();
}

//ConvertToPersianNumber
function toPersianNumber(number) {
    var persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return number.toString().replace(/\d/g, function (digit) {
        return persianDigits[digit];
    });
}

//DisplayModalSending
function ShowModalSendingMessage(status, message) {

    var modal = document.getElementById('ModalWaitForSending');
    var textModal = document.getElementById('TextModalSendMessageID');
    var spinner = document.getElementById('Loading-SpinnerID');
    var successMessage = document.getElementById('ModalMessageSuccessID');


    spinner.style.display = 'none';
    successMessage.style.display = 'none';

    textModal.textContent = message;

    if (status === 'sending') {
        document.getElementById("overlay").style.display = "flex";
        spinner.style.display = 'flex';
        modal.style.display = 'flex';
    }
    else if (status === 'success') {
        spinner.style.display = 'none';
        successMessage.style.display = 'flex';
        modal.style.display = 'flex';
        setTimeout(function () {
            modal.style.display = 'none';
            document.getElementById("overlay").style.display = "none";
        }, 2000);
    }
}
//CheeckMeliCodeNew
function CheckIranianNationalCode(nationalCode) {
    nationalCode = nationalCode.trim();

    // تبدیل ارقام فارسی به انگلیسی
    nationalCode = nationalCode.replace(/[٠-٩]/g, function (match) {
        return String.fromCharCode(match.charCodeAt(0) - 1632 + 48);
    });

    if (!/^\d{10}$/.test(nationalCode)) {
        DisplayModal("کدملی نامعتبر می باشد", "خطا", 4);
        return false;
    }

    const invalidCodes = [
        "0000000000", "1111111111", "2222222222", "3333333333",
        "4444444444", "5555555555", "6666666666", "7777777777",
        "8888888888", "9999999999", "1234567890", "0123456789"
    ];
    if (invalidCodes.includes(nationalCode)) {
        DisplayModal("کدملی نامعتبر می باشد", "خطا", 4);
        return false;
    }

    // محاسبه رقم کنترل
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(nationalCode[i]) * (10 - i);
    }

    let remainder = sum % 11;
    let controlDigit = parseInt(nationalCode[9]);

    if ((remainder < 2 && controlDigit === remainder) || (remainder >= 2 && controlDigit === (11 - remainder))) {
        return true;
    }
    DisplayModal("کدملی نامعتبر می باشد", "خطا", 4);
    return false;
}
function CheckIranianNationalCodePro(nationalCode) {
    nationalCode = nationalCode.trim();
    if (nationalCode == '')
        return false;
    // تبدیل ارقام فارسی به انگلیسی
    nationalCode = nationalCode.replace(/[٠-٩]/g, function (match) {
        return String.fromCharCode(match.charCodeAt(0) - 1632 + 48);
    });

    if (!/^\d{10}$/.test(nationalCode)) {
        return false;
    }

    const invalidCodes = [
        "0000000000", "1111111111", "2222222222", "3333333333",
        "4444444444", "5555555555", "6666666666", "7777777777",
        "8888888888", "9999999999", "1234567890", "0123456789"
    ];
    if (invalidCodes.includes(nationalCode)) {
        return false;
    }

    // محاسبه رقم کنترل
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(nationalCode[i]) * (10 - i);
    }

    let remainder = sum % 11;
    let controlDigit = parseInt(nationalCode[9]);

    if ((remainder < 2 && controlDigit === remainder) || (remainder >= 2 && controlDigit === (11 - remainder))) {
        return true;
    }
    return false;
}

//CheeckMeliCodeNew
//ClearSpans
function ClearAllSpansInputsImg(obj) {
    const Container = document.querySelector(obj);
    if (!Container) return;
    const Spans = Container.querySelectorAll('span');
    Spans.forEach(span => {
        span.innerText = '';
    })

    const Inputs = Container.querySelectorAll('input');
    Inputs.forEach(inputs => {
        inputs.value = '';
    })

    const Images = Container.querySelectorAll('img');
    Images.forEach(img => {
        img.src = '';
    });
}
//ClearSpans
//FindCheckBoxSelectedValue
function FindCheckBoxSelectedValue(CheckBoxId) {
    var CheckBoxList = [];
    $('.row input[type="checkbox"]:checked').each(function () {
        CheckBoxList.push(this.value);
    });
    $('#' + CheckBoxId).val(CheckBoxList.join('|'));
}
//FindCheckBoxSelectedValue
//SetTable
function SetTableView(tableId) {
    $(`#${tableId}`).DataTable({
        paging: true,
        lengthChange: true,
        searching: true,
        ordering: true,
        info: true,
        autoWidth: false,
    });
}
//SetTable
//ShowPicPreview
function previewFile() {
    document.getElementById('lbl_FileUpload').innerHTML = document.getElementById('FileUpload').files[0].name;

    var preview = document.getElementById("doc_pic");
    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
    }
    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }
}
//ShowPicPreview
function DisplayModalTermination() {
    fadeInModal("ModalTermination");
}

function validatePassword(password) {
    if (password.length < 6) {
        DisplayModal("رمز عبور باید حداقل ۶ کاراکتر باشد.", "کلمه عبور قابل قبول نیست", 0);
        return false;
    }
    //if (!/[A-Za-z]/.test(password)) {
    //    DisplayModal("رمز عبور باید حداقل شامل یک حرف باشد.", "کلمه عبور قابل قبول نیست",  0);
    //    return false;
    //}
    if (!/\d/.test(password)) {
        DisplayModal("رمز عبور باید حداقل شامل یک عدد باشد.", "کلمه عبور قابل قبول نیست", 0);
        return false;
    }
    //if (!/[@@!%#$*=+&<>]/.test(password)) {
    //    DisplayModal("رمز عبور باید حداقل شامل یک علامت خاص باشد.", "کلمه عبور قابل قبول نیست",  0);
    //    return false;
    //}
    return true; // Ok
}
//SetTimerCheckNotNullDateField
function CheckNotNullTimer(obj) {
    let lastVal = "";
    setInterval(() => {
        const el = document.getElementById(obj);
        if (el.value !== lastVal) {
            lastVal = el.value;
            CheckNotNull(obj)
        }
    }, 500);
}
//SetTimerCheckNotNullDateField
//validateChequeInput
function validateChequeInput(input) {
    var regex = /^[0-9\/\\]+$/;

    if (regex.test(input)) {
        return true;
    } else {
        return false;
    }
}
//validateChequeInput
function isValidSheba(sheba) {

    //if (!sheba) return false;

    // حذف فاصله و تبدیل به حروف بزرگ
    sheba = sheba.replace(/\s+/g, '').toUpperCase();

    // بررسی فرمت
    if (!/^IR\d{24}$/.test(sheba)) return false;
    // جابجایی 4 کاراکتر اول به انتها
    let rearranged = sheba.slice(4) + sheba.slice(0, 4);

    // تبدیل حروف به عدد (A=10 ... Z=35)
    let numeric = '';
    for (let ch of rearranged) {
        numeric += isNaN(ch) ? (ch.charCodeAt(0) - 55) : ch;
    }

    // محاسبه mod 97
    let remainder = numeric;
    while (remainder.length > 2) {
        remainder = (parseInt(remainder.slice(0, 9), 10) % 97) + remainder.slice(9);
    }

    return parseInt(remainder, 10) % 97 === 1;
}
function isValidCardNumber(cardNumber) {
    //if (!cardNumber) return false;

    // حذف فاصله و خط تیره
    cardNumber = cardNumber.replace(/[\s-]/g, '');

    // باید 16 رقم باشد
    if (!/^\d{16}$/.test(cardNumber)) return false;

    // الگوریتم Luhn
    let sum = 0;
    for (let i = 0; i < 16; i++) {
        let digit = parseInt(cardNumber[i], 10);

        if (i % 2 === 0) {
            digit *= 2;
            if (digit > 9) digit -= 9;
        }

        sum += digit;
    }

    return sum % 10 === 0;
}
function getBankName(cardNumber) {
    let code = cardNumber.substring(0, 6);

    let banks = {
        "603799": "بانک ملی",
        "589210": "بانک سپه",
        "627648": "بانک توسعه صادرات",
        "627961": "بانک صنعت و معدن",
        "603770": "بانک کشاورزی",
        "628023": "بانک مسکن",
        "627760": "پست بانک",
        "502908": "بانک توسعه تعاون",
        "627412": "بانک اقتصاد نوین",
        "622106": "بانک پارسیان",
        "502229": "بانک پاسارگاد",
        "627488": "بانک کارآفرین",
        "621986": "بانک سامان",
        "639346": "بانک سینا",
        "639607": "بانک سرمایه",
        "636214": "بانک تات",
        "502806": "بانک شهر",
        "502938": "بانک دی",
        "603769": "بانک صادرات",
        "610433": "بانک ملت",
        "627353": "بانک تجارت",
        "589463": "بانک رفاه",
        "627381": "بانک انصار"
    };

    return banks[code] || "نامشخص";
}
function generateSheba(accountNumber, bankid) {

    const bankShebaCodes = {
        "1": "017",
        "3": "015",
        "19": "016",
        "25": "014",
        "4": "019",
        "5": "018",
        "11": "054",
        "10": "057",
        "12": "056",
        "1": "062",
        "21": "059",
        "13": "058"
    };

    let bankCode = bankShebaCodes[bankid];
    //0109136740003
    let bban = bankCode + accountNumber.padStart(18 - bankCode.length, '0');
    let iban = "IR00" + bban;

    let rearranged = bban + "182700"; // IR → 18 27
    let mod = mod97(rearranged);
    let checkDigit = (98 - mod).toString().padStart(2, '0');
    return checkDigit + bban;
}

function mod97(str) {
    let checksum = str;
    while (checksum.length > 2) {
        let part = checksum.substring(0, 9);
        checksum = (parseInt(part, 10) % 97) + checksum.substring(part.length);
    }
    return parseInt(checksum, 10) % 97;
}


;/* ===== END: wwwroot/js/footballit_script.js ===== */


/* ===== START: wwwroot/assets/main.js ===== */
;// =====================================================
// FOOTBALL SCHOOL MVC - FRONTEND ROUTING & INTERACTION LAYER
// Matches React Router navigation and UI actions 100%
// =====================================================
(function () {
    'use strict';

    const BACK_MAP = {
        'dashboard': '/dashboard',
        'profile-hub': '/dashboard',
        'financial-hub': '/dashboard',
        'specialized-hub': '/dashboard',
        'registration': '/dashboard',
        'store': '/dashboard',
        'gallery': '/dashboard',
        'training-backpack': '/dashboard',
        'bulletin': '/dashboard',
        'financial-timeline': '/financial-hub',
        'bank-info': '/financial-hub',
        'verification': '/profile-hub',
        'personal-info': '/profile-hub',
        'contact-info': '/profile-hub',
        'passport-info': '/profile-hub',
        'sports-info': '/profile-hub',
        'club-info': '/profile-hub',
        'clothing-info': '/profile-hub',
        'documents': '/profile-hub',
        'password': '/profile-hub',
        'attendance': '/specialized-hub',
        'registration-history': '/specialized-hub',
        'talent': '/specialized-hub',
        'insurance': '/specialized-hub',
        'insurance-status': '/specialized-hub',
        'certificate': '/documents',
        'certificates': '/documents'
    };

    function getCurrentPage() {
        const clean = window.location.pathname.toLowerCase().replace(/^\/+|\/+$/g, '');
        const parts = clean.split('/');
        let page = parts[parts.length - 1] || 'dashboard';
        page = page.replace('.html', '').replace('.cshtml', '');
        return page || 'dashboard';
    }

    function initNavigation() {
        // 1. Back button global delegation
        document.addEventListener('click', function (e) {
            const backBtn = e.target.closest('.btn-back-top, .btn-back');
            if (backBtn) {
                const onclickAttr = backBtn.getAttribute('onclick');
                if (onclickAttr && onclickAttr.includes('window.location.href')) {
                    return;
                }
                e.preventDefault();
                e.stopPropagation();
                const page = getCurrentPage();
                const dest = BACK_MAP[page] || '/dashboard';
                window.location.href = dest;
            }
        });

        // 2. Verification shield & badge
        document.addEventListener('click', function (e) {
            const verifyTrigger = e.target.closest('.badge-verify, .btn-verify-action, a[href="/verification"]');
            if (verifyTrigger) {
                e.preventDefault();
                e.stopPropagation();
                window.location.href = '/verification';
                return;
            }

            // Topbar shield link fallback (in case href is '#')
            const shieldLink = e.target.closest('.profile-menu a');
            if (shieldLink && (shieldLink.querySelector('.fa-shield') || shieldLink.textContent.includes('تایید هویت'))) {
                e.preventDefault();
                e.stopPropagation();
                window.location.href = '/verification';
                return;
            }
        });

        // 3. Notification bell
        document.addEventListener('click', function (e) {
            const bell = e.target.closest('.btn-noti');
            if (bell) {
                e.preventDefault();
                e.stopPropagation();
                window.location.href = '/bulletin';
            }
        });

        // 4. Dashboard interactive cards & buttons
        document.addEventListener('click', function (e) {
            // Complete info btn-mini
            const btnMini = e.target.closest('.btn-mini');
            if (btnMini) {
                e.preventDefault();
                e.stopPropagation();
                window.location.href = '/profile-hub';
                return;
            }

            // Registration card
            const regCard = e.target.closest('.registration-card');
            if (regCard) {
                e.preventDefault();
                e.stopPropagation();
                window.location.href = '/registration';
                return;
            }

            // BMI card (top mobile)
            const bmiCard = e.target.closest('.bmi-card');
            if (bmiCard) {
                e.preventDefault();
                e.stopPropagation();
                window.location.href = '/personal-info';
                return;
            }

            // Stat cards
            const statCard = e.target.closest('.stat-card');
            if (statCard) {
                const text = statCard.textContent || '';
                if (statCard.querySelector('.fa-calendar-check-o') || text.includes('حضور در تمرین') || text.includes('حضور')) {
                    e.preventDefault();
                    e.stopPropagation();
                    window.location.href = '/attendance';
                    return;
                }
                if (statCard.querySelector('.fa-heartbeat') || text.includes('BMI') || statCard.classList.contains('school-kpi-bmi')) {
                    e.preventDefault();
                    e.stopPropagation();
                    window.location.href = '/personal-info';
                    return;
                }
                if (statCard.querySelector('.fa-search') || text.includes('استعدادیابی')) {
                    e.preventDefault();
                    e.stopPropagation();
                    window.location.href = '/talent';
                    return;
                }
                if (statCard.querySelector('.ic-orange') || text.includes('بیمه')) {
                    e.preventDefault();
                    e.stopPropagation();
                    window.location.href = '/insurance-status';
                    return;
                }
            }

            // Dash action cards
            const dashAction = e.target.closest('.dash-action-card');
            if (dashAction) {
                e.preventDefault();
                e.stopPropagation();
                if (dashAction.classList.contains('card-store') || dashAction.querySelector('.fa-shopping-cart')) {
                    window.location.href = '/store';
                } else if (dashAction.classList.contains('card-gallery') || dashAction.querySelector('.fa-picture-o')) {
                    window.location.href = '/gallery';
                } else if (dashAction.classList.contains('card-backpack') || dashAction.querySelector('.fa-briefcase')) {
                    window.location.href = '/training-backpack';
                }
                return;
            }

            // News card
            const newsCard = e.target.closest('.news-card');
            if (newsCard) {
                e.preventDefault();
                e.stopPropagation();
                window.location.href = '/bulletin';
                return;
            }
        });

        // 5. Profile Hub frame items
        document.addEventListener('click', function (e) {
            const frameItem = e.target.closest('.frame-item');
            if (frameItem) {
                const onclickAttr = frameItem.getAttribute('onclick');
                if (onclickAttr && onclickAttr.includes('window.location.href')) {
                    return;
                }
                e.preventDefault();
                e.stopPropagation();
                const text = (frameItem.textContent || '').trim();
                const icon = frameItem.querySelector('i');
                const iconClass = icon ? icon.className : '';

                if (iconClass.includes('fa-id-card-o') || text.includes('اطلاعات شخصی')) {
                    window.location.href = '/personal-info';
                } else if (iconClass.includes('fa-phone') || text.includes('اطلاعات تماس')) {
                    window.location.href = '/contact-info';
                } else if (iconClass.includes('fa-globe') || text.includes('گذرنامه')) {
                    window.location.href = '/passport-info';
                } else if (iconClass.includes('fa-star') || text.includes('مشخصات ورزشی')) {
                    window.location.href = '/sports-info';
                } else if (iconClass.includes('fa-shield') || text.includes('اطلاعات باشگاهی')) {
                    window.location.href = '/club-info';
                } else if (iconClass.includes('fa-file-image-o') || iconClass.includes('fa-file-text-o') ||
                    iconClass.includes('fa-certificate') || iconClass.includes('fa-plus-circle') ||
                    text.includes('کارت ملی') || text.includes('شناسنامه') || text.includes('مجوز ورزشی') || text.includes('مدارک و سایر')) {
                    window.location.href = '/documents';
                } else if (iconClass.includes('fa-lock') || text.includes('تغییر رمز عبور')) {
                    window.location.href = '/password';
                }
                return;
            }
        });

        // 6. Specialized Hub spec items
        document.addEventListener('click', function (e) {
            // Chart "مشاهده" button
            const specChartBtn = e.target.closest('#view-specialized-hub button');
            if (specChartBtn && specChartBtn.textContent.trim() === 'مشاهده') {
                e.preventDefault();
                e.stopPropagation();
                window.location.href = '/attendance';
                return;
            }

            const specItem = e.target.closest('.spec-item');
            if (specItem) {
                const onclickAttr = specItem.getAttribute('onclick');
                if (onclickAttr && (onclickAttr.includes('window.location.href') || onclickAttr.includes('alert'))) {
                    return;
                }
                e.preventDefault();
                e.stopPropagation();
                const text = (specItem.textContent || '').trim();
                const icon = specItem.querySelector('i');
                const iconClass = icon ? icon.className : '';

                if (iconClass.includes('fa-calendar-check-o') || text.includes('گزارش حضور') || text.includes('حضور')) {
                    window.location.href = '/attendance';
                } else if (iconClass.includes('fa-map-marker') || text.includes('GPS')) {
                    alert('باز کردن فرم اطلاعات GPS...');
                } else if (iconClass.includes('fa-history') || text.includes('ثبت‌نام') || text.includes('سوابق ثبت‌نام')) {
                    window.location.href = '/registration-history';
                } else if (iconClass.includes('fa-search') || text.includes('استعداد')) {
                    window.location.href = '/talent';
                } else if (iconClass.includes('fa-trophy') || text.includes('مسابقه')) {
                    alert('گزارش عملکرد مسابقه...');
                } else if (iconClass.includes('fa-line-chart') || text.includes('تمرین')) {
                    alert('گزارش عملکرد تمرین...');
                } else if (iconClass.includes('fa-medkit') || text.includes('بیمه')) {
                    window.location.href = '/insurance-status';
                } else if (iconClass.includes('fa-graduation-cap') || text.includes('گواهی')) {
                    window.location.href = '/certificate';
                } else if (iconClass.includes('fa-user-md') || text.includes('پزشکی')) {
                    alert('باز کردن فرم پزشکی...');
                } else if (iconClass.includes('fa-id-card') || text.includes('کارت عضویت')) {
                    alert('کارت عضویت شما در حال دانلود است...');
                }
                return;
            }
        });

        // 7. Financial Hub items
        document.addEventListener('click', function (e) {
            const hubBtn = e.target.closest('.hub-btn');
            if (hubBtn) {
                const onclickAttr = hubBtn.getAttribute('onclick');
                if (onclickAttr && (onclickAttr.includes('window.location.href') || onclickAttr.includes('alert'))) {
                    return;
                }
                e.preventDefault();
                e.stopPropagation();
                const text = (hubBtn.textContent || '').trim();
                const icon = hubBtn.querySelector('i');
                const iconClass = icon ? icon.className : '';

                if (iconClass.includes('fa-bank') || text.includes('حساب‌های بانکی') || text.includes('حساب بانکی')) {
                    window.location.href = '/bank-info';
                } else if (iconClass.includes('fa-credit-card') || text.includes('پرداخت شهریه')) {
                    alert('انتقال به درگاه پرداخت...');
                } else if (iconClass.includes('fa-bar-chart') || text.includes('تایم‌لاین') || text.includes('گزارشات')) {
                    window.location.href = '/financial-timeline';
                }
                return;
            }
        });

        // 8. Other subpage buttons
        document.addEventListener('click', function (e) {
            // Documents: "ثبت سایر مدارک"
            const docCertBtn = e.target.closest('#view-documents .btn-top-action:not(.btn-back-top)');
            if (docCertBtn && docCertBtn.textContent.includes('ثبت سایر مدارک')) {
                e.preventDefault();
                e.stopPropagation();
                window.location.href = '/certificate';
                return;
            }

            // Registration: "مشاهده تایم‌لاین مالی تراکنش‌ها"
            const regTimelineBtn = e.target.closest('#view-registration button');
            if (regTimelineBtn && regTimelineBtn.textContent.includes('تایم‌لاین مالی')) {
                e.preventDefault();
                e.stopPropagation();
                window.location.href = '/financial-timeline';
                return;
            }

            // Verification: "بازگشت به پروفایل"
            const verifBackProfile = e.target.closest('#view-verification .btn-app-primary');
            if (verifBackProfile && verifBackProfile.textContent.includes('بازگشت به پروفایل')) {
                e.preventDefault();
                e.stopPropagation();
                window.location.href = '/profile-hub';
                return;
            }

            // Store: Add to cart button
            const storeBuyBtn = e.target.closest('.btn-buy');
            if (storeBuyBtn) {
                e.preventDefault();
                e.stopPropagation();
                alert('به سبد خرید اضافه شد.');
                return;
            }

            // Talent: Print button
            const talentPrintBtn = e.target.closest('#view-talent .btn-icon');
            if (talentPrintBtn && talentPrintBtn.querySelector('.fa-print')) {
                e.preventDefault();
                e.stopPropagation();
                alert('در حال آماده سازی فایل برای چاپ...');
                return;
            }

            // Certificate: Add cert button
            const certAddBtn = e.target.closest('#view-certificate .btn-submit-top');
            if (certAddBtn) {
                e.preventDefault();
                e.stopPropagation();
                alert('فرم افزودن مدرک باز می‌شود');
                return;
            }

            // Delete buttons (BankInfo, Certificate)
            const trashBtn = e.target.closest('.btn-icon');
            if (trashBtn && trashBtn.querySelector('.fa-trash')) {
                e.preventDefault();
                e.stopPropagation();
                alert('حذف در این نسخه آزمایشی غیرفعال است');
                return;
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initNavigation);
    } else {
        initNavigation();
    }
})();

document.addEventListener('DOMContentLoaded', () => {
    // Topbar Dropdown Toggle handled in Consolidated Controllers

    // Modal Toggles
    const clubModalBtn = document.querySelector('.beautiful-modal-btn');
    if (clubModalBtn) {
        clubModalBtn.addEventListener('click', () => {
            const modal = document.querySelector('.modal-overlay');
            if (modal) {
                modal.style.display = 'flex';
                // Remove inline onclick just in case
                modal.removeAttribute('onclick');
            }
        });
    }

    // Profile Hub image cropper trigger
    const cameraBtn = document.querySelector('.profile-header-card button');
    if (cameraBtn) {
        cameraBtn.addEventListener('click', () => {
            // just show modal for demo
            const cropperModal = document.querySelector('.modal-overlay');
            if (cropperModal) {
                cropperModal.style.display = 'flex';
            }
        });
    }

    // Close Modals
    document.querySelectorAll('.modal-close-btn, .btn-modal-close-large, .btn-modal-cancel').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal-overlay');
            if (modal) modal.style.display = 'none';
        });
    });

    // Close Modal on clicking outside
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.style.display = 'none';
            }
        });
    });

    // 1. Custom Selects
    document.querySelectorAll('.custom-select-wrapper').forEach(wrapper => {
        const trigger = wrapper.querySelector('.custom-select-trigger');
        const nativeSelect = wrapper.querySelector('select');
        if (!trigger || !nativeSelect) return;
        if (nativeSelect.dataset.value) nativeSelect.value = nativeSelect.dataset.value;

        // Create dropdown
        let dropdown = wrapper.querySelector('.custom-select-dropdown');
        if (!dropdown) {
            dropdown = document.createElement('div');
            dropdown.className = 'custom-select-dropdown';
            dropdown.style.display = 'none';
            wrapper.appendChild(dropdown);
        }

        // Populate options
        Array.from(nativeSelect.options).forEach(opt => {
            if (opt.disabled || opt.hidden) return; // Skip placeholder

            const optionDiv = document.createElement('div');
            optionDiv.className = 'custom-select-option';
            if (nativeSelect.value === opt.value) {
                optionDiv.classList.add('selected');
                trigger.textContent = opt.textContent;
            }
            optionDiv.textContent = opt.textContent;
            optionDiv.dataset.value = opt.value;

            optionDiv.addEventListener('click', (e) => {
                e.stopPropagation();
                // Update native select
                nativeSelect.value = opt.value;
                // Update trigger text
                trigger.textContent = opt.textContent;
                // Trigger change event just in case
                nativeSelect.dispatchEvent(new Event('change'));

                // Update selected classes
                dropdown.querySelectorAll('.custom-select-option').forEach(el => el.classList.remove('selected'));
                optionDiv.classList.add('selected');
                trigger.textContent = opt.textContent;

                // Close wrapper
                wrapper.classList.remove('open');
                const pGroup = wrapper.closest('.input-group');
                if (pGroup) pGroup.classList.remove('has-open-select');
                dropdown.style.display = 'none';
            });

            dropdown.appendChild(optionDiv);
        });

        // Listen for programmatic changes (like from localStorage restoration)
        nativeSelect.addEventListener('change', () => {
            const selectedOpt = Array.from(nativeSelect.options).find(o => o.value === nativeSelect.value);
            if (selectedOpt) {
                trigger.textContent = selectedOpt.textContent;
                dropdown.querySelectorAll('.custom-select-option').forEach(el => {
                    if (el.dataset.value === nativeSelect.value) el.classList.add('selected');
                    else el.classList.remove('selected');
                });
            }
        });

        // Toggle dropdown on trigger click
        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            // Close other open selects
            document.querySelectorAll('.custom-select-wrapper.open').forEach(w => {
                if (w !== wrapper) {
                    w.classList.remove('open');
                    const g = w.closest('.input-group');
                    if (g) g.classList.remove('has-open-select');
                    const d = w.querySelector('.custom-select-dropdown');
                    if (d) d.style.display = 'none';
                }
            });
            const isOpen = wrapper.classList.toggle('open');
            const parentGrp = wrapper.closest('.input-group');
            if (parentGrp) {
                if (isOpen) parentGrp.classList.add('has-open-select');
                else parentGrp.classList.remove('has-open-select');
            }
            dropdown.style.display = isOpen ? 'block' : 'none';
        });
    });

    // Close custom selects when clicking outside
    document.addEventListener('click', () => {
        document.querySelectorAll('.custom-select-wrapper.open').forEach(w => {
            w.classList.remove('open');
            const g = w.closest('.input-group');
            if (g) g.classList.remove('has-open-select');
            const d = w.querySelector('.custom-select-dropdown');
            if (d) d.style.display = 'none';
        });
    });

    // 1.5 Form State Persistence
    const isPersonalInfoPage = window.location.pathname.toLowerCase().includes("personal-info");
    if (!isPersonalInfoPage) {
        const formElements = document.querySelectorAll('input:not([type="password"]):not([type="hidden"]):not([type="file"]), select, textarea');
        formElements.forEach(el => {
            const key = 'form_state_' + (el.name || el.id);
            if (!key || key === 'form_state_') return;

            const savedVal = localStorage.getItem(key);
            if (savedVal !== null) {
                if (el.type === 'checkbox' || el.type === 'radio') {
                    el.checked = savedVal === 'true';
                } else {
                    el.value = savedVal;
                }
                setTimeout(() => {
                    el.dispatchEvent(new Event('change', { bubbles: true }));
                    el.dispatchEvent(new Event('input', { bubbles: true }));
                }, 0);
            }

            el.addEventListener('change', () => {
                localStorage.setItem(key, (el.type === 'checkbox' || el.type === 'radio') ? el.checked : el.value);
            });
            el.addEventListener('input', () => {
                if (el.type !== 'checkbox' && el.type !== 'radio') localStorage.setItem(key, el.value);
            });
        });

        document.querySelectorAll('.date-picker-input').forEach((el, index) => {
            const key = 'form_state_dp_' + index;
            const savedVal = localStorage.getItem(key);
            if (savedVal !== null) {
                const span = el.querySelector('span');
                if (span) {
                    span.textContent = savedVal;
                    span.style.color = 'inherit';
                } else {
                    el.textContent = savedVal;
                }
                setTimeout(() => el.dispatchEvent(new Event('change', { bubbles: true })), 0);
            }

            el.addEventListener('change', () => {
                const span = el.querySelector('span');
                const val = span ? span.textContent : el.textContent;
                localStorage.setItem(key, val);
            });
        });
    }

    // 2. Custom Scroll DatePicker
    const PERSIAN_MONTHS = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
    const pDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    const toPersianDigits = (num) => num.toString().replace(/\d/g, x => pDigits[parseInt(x)]);

    const datePickerInputs = document.querySelectorAll('.date-picker-input');
    if (datePickerInputs.length > 0) {
        let currentActiveInput = null;
        let selectedYear = 1403, selectedMonth = 1, selectedDay = 1;

        const dpOverlay = document.createElement('div');
        dpOverlay.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(15, 23, 42, 0.6); backdrop-filter: blur(4px); z-index: 9999; display: none; flex-direction: column; justify-content: flex-end; align-items: center; opacity: 0; transition: opacity 0.3s ease;';

        const dpModal = document.createElement('div');
        dpModal.style.cssText = 'background: #fff; border-top-left-radius: 28px; border-top-right-radius: 28px; padding: 24px 20px; padding-bottom: max(24px, env(safe-area-inset-bottom)); box-shadow: 0 -10px 40px rgba(0,0,0,0.15); width: 100%; max-width: 400px; transform: translateY(100%); transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);';

        dpModal.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
                <button type="button" id="dp-cancel-btn" style="background: rgba(239, 68, 68, 0.1); border: none; color: var(--danger); font-weight: bold; font-size: 0.95rem; cursor: pointer; padding: 8px 16px; border-radius: 12px;">لغو</button>
                <div style="display: flex; flex-direction: column; align-items: center;">
                    <h4 style="margin: 0; font-size: 1.2rem; font-weight: 800;">انتخاب تاریخ</h4>
                    <button type="button" id="dp-today-btn" style="font-size: 0.8rem; color: var(--primary); background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(0, 0, 0, 0.2); padding: 4px 16px; border-radius: 20px; margin-top: 8px; font-weight: 700; cursor: pointer; outline: none; display: flex; align-items: center; gap: 6px; box-shadow: 0 2px 6px rgba(245, 158, 11, 0.15);">
                        امروز
                    </button>
                </div>
                <button type="button" id="dp-confirm-btn" style="background: var(--primary); border: none; color: #fff; font-weight: bold; font-size: 0.95rem; cursor: pointer; padding: 8px 16px; border-radius: 12px; box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);">تایید</button>
            </div>
            
            <div style="position: relative; display: flex; flex-direction: column; background: #f8fafc; border-radius: 20px; overflow: hidden; border: 1px solid #e2e8f0;">
                <div style="display: flex; direction: rtl; padding: 12px 0; border-bottom: 1px solid #e2e8f0; background: #f1f5f9;">
                    <div style="flex: 1; display: flex; justify-content: center; align-items: center; gap: 12px;">
                        <span style="font-size: 0.85rem; font-weight: 700; color: var(--text-muted);">روز</span>
                    </div>
                    <div style="width: 1px; background: #000; opacity: 0.3;"></div>
                    <div style="flex: 1; display: flex; justify-content: center; align-items: center; gap: 12px;">
                        <span style="font-size: 0.85rem; font-weight: 700; color: var(--text-muted);">ماه</span>
                    </div>
                    <div style="width: 1px; background: #000; opacity: 0.3;"></div>
                    <div style="flex: 1; display: flex; justify-content: center; align-items: center; gap: 12px;">
                        <span style="font-size: 0.85rem; font-weight: 700; color: var(--text-muted);">سال</span>
                    </div>
                </div>

                <div style="position: relative; display: flex; direction: rtl;">
                    <div style="position: absolute; top: 88px; left: 10px; right: 10px; height: 44px; background: #fff; border: 2px solid var(--primary); border-radius: 12px; box-shadow: 0 2px 8px rgba(59, 130, 246, 0.15); pointer-events: none; z-index: 1;"></div>
                    
                    <div id="dp-col-day" class="dp-scroll-container" style="flex: 1; height: 220px; position: relative; z-index: 2; overflow-y: auto; scroll-snap-type: y mandatory; scroll-behavior: smooth; -ms-overflow-style: none; scrollbar-width: none;"></div>
                    <div style="width: 1px; background: #000; opacity: 0.3; z-index: 2; margin: 10px 0;"></div>
                    <div id="dp-col-month" class="dp-scroll-container" style="flex: 1; height: 220px; position: relative; z-index: 2; overflow-y: auto; scroll-snap-type: y mandatory; scroll-behavior: smooth; -ms-overflow-style: none; scrollbar-width: none;"></div>
                    <div style="width: 1px; background: #000; opacity: 0.3; z-index: 2; margin: 10px 0;"></div>
                    <div id="dp-col-year" class="dp-scroll-container" style="flex: 1; height: 220px; position: relative; z-index: 2; overflow-y: auto; scroll-snap-type: y mandatory; scroll-behavior: smooth; -ms-overflow-style: none; scrollbar-width: none;"></div>
                </div>
            </div>
            <style>
                .dp-scroll-container::-webkit-scrollbar { display: none; }
                .dp-item {
                    height: 44px; display: flex; align-items: center; justify-content: center;
                    scroll-snap-align: center; cursor: pointer; user-select: none;
                    transition: all 0.2s ease;
                }
            </style>
        `;

        dpOverlay.appendChild(dpModal);
        document.body.appendChild(dpOverlay);

        const colDay = document.getElementById('dp-col-day');
        const colMonth = document.getElementById('dp-col-month');
        const colYear = document.getElementById('dp-col-year');

        function renderCol(col, items, selected, isMonth = false) {
            let html = '<div style="height: 88px; scroll-snap-align: center;"></div>';
            items.forEach(val => {
                const label = isMonth ? PERSIAN_MONTHS[val - 1] : toPersianDigits(val);
                const isSel = val === selected;
                const fs = isSel ? (isMonth ? '1.1rem' : '1.3rem') : (isMonth ? '0.9rem' : '1.1rem');
                const fw = isSel ? '800' : '500';
                const colr = isSel ? 'var(--primary)' : 'var(--text-muted)';
                html += `<div class="dp-item" data-val="${val}" style="font-size: ${fs}; font-weight: ${fw}; color: ${colr};">${label}</div>`;
            });
            html += '<div style="height: 88px; scroll-snap-align: center;"></div>';
            col.innerHTML = html;
        }

        function updateUI() {
            let maxDays = 31;
            if (selectedMonth > 6) maxDays = 30;
            if (selectedMonth === 12) maxDays = 29;
            if (selectedDay > maxDays) selectedDay = maxDays;

            const days = Array.from({ length: maxDays }, (_, i) => i + 1);
            const months = Array.from({ length: 12 }, (_, i) => i + 1);
            const years = Array.from({ length: 1450 - 1320 + 1 }, (_, i) => 1450 - i);

            renderCol(colDay, days, selectedDay);
            renderCol(colMonth, months, selectedMonth, true);
            renderCol(colYear, years, selectedYear);

            setTimeout(() => {
                colDay.scrollTop = days.indexOf(selectedDay) * 44;
                colMonth.scrollTop = months.indexOf(selectedMonth) * 44;
                colYear.scrollTop = years.indexOf(selectedYear) * 44;
            }, 10);
        }

        function setupScrollListener(col, type) {
            let timeout;
            col.addEventListener('scroll', () => {
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    const idx = Math.round(col.scrollTop / 44);
                    const items = Array.from(col.querySelectorAll('.dp-item'));
                    if (items[idx]) {
                        const val = parseInt(items[idx].dataset.val);
                        if (type === 'day' && selectedDay !== val) { selectedDay = val; updateUI(); }
                        if (type === 'month' && selectedMonth !== val) { selectedMonth = val; updateUI(); }
                        if (type === 'year' && selectedYear !== val) { selectedYear = val; updateUI(); }
                    }
                }, 100);
            });

            col.addEventListener('click', (e) => {
                const item = e.target.closest('.dp-item');
                if (item) {
                    const val = parseInt(item.dataset.val);
                    if (type === 'day') selectedDay = val;
                    if (type === 'month') selectedMonth = val;
                    if (type === 'year') selectedYear = val;
                    updateUI();
                }
            });
        }

        setupScrollListener(colDay, 'day');
        setupScrollListener(colMonth, 'month');
        setupScrollListener(colYear, 'year');

        function openModal(input) {
            currentActiveInput = input;
            dpOverlay.style.display = 'flex';
            setTimeout(() => {
                dpOverlay.style.opacity = '1';
                dpModal.style.transform = 'translateY(0)';
            }, 10);
            updateUI();
        }

        function closeModal() {
            dpOverlay.style.opacity = '0';
            dpModal.style.transform = 'translateY(100%)';
            setTimeout(() => {
                dpOverlay.style.display = 'none';
            }, 300);
        }

        datePickerInputs.forEach(input => {
            input.addEventListener('click', () => {
                const span = input.querySelector('span');
                const hiddenInput = document.querySelector(`input[type="hidden"][name="${input.id}"]`);
                const val = hiddenInput && hiddenInput.value ? hiddenInput.value : (span ? span.textContent.trim() : (input.value || input.textContent).trim());
                const cleanVal = val.replace(/[۰-۹]/g, w => String.fromCharCode(w.charCodeAt(0) - 1728));

                let setDate = false;
                if (cleanVal && cleanVal !== 'انتخاب تاریخ' && cleanVal.includes('/')) {
                    const parts = cleanVal.split('/');
                    if (parts.length === 3) {
                        selectedYear = parseInt(parts[0]);
                        selectedMonth = parseInt(parts[1]);
                        selectedDay = parseInt(parts[2]);
                        setDate = true;
                    }
                }

                if (!setDate) {
                    const faDateParts = new Intl.DateTimeFormat('fa-IR').formatToParts(new Date());
                    selectedYear = parseInt(faDateParts.find(p => p.type === 'year').value.replace(/[۰-۹]/g, w => String.fromCharCode(w.charCodeAt(0) - 1728)));
                    selectedMonth = parseInt(faDateParts.find(p => p.type === 'month').value.replace(/[۰-۹]/g, w => String.fromCharCode(w.charCodeAt(0) - 1728)));
                    selectedDay = parseInt(faDateParts.find(p => p.type === 'day').value.replace(/[۰-۹]/g, w => String.fromCharCode(w.charCodeAt(0) - 1728)));
                }
                openModal(input);
            });
        });

        document.getElementById('dp-cancel-btn').addEventListener('click', closeModal);
        dpOverlay.addEventListener('click', (e) => {
            if (e.target === dpOverlay) closeModal();
        });

        document.getElementById('dp-today-btn').addEventListener('click', () => {
            const faDateParts = new Intl.DateTimeFormat('fa-IR').formatToParts(new Date());
            const pYear = parseInt(faDateParts.find(p => p.type === 'year').value.replace(/[۰-۹]/g, w => String.fromCharCode(w.charCodeAt(0) - 1728)));
            const pMonth = parseInt(faDateParts.find(p => p.type === 'month').value.replace(/[۰-۹]/g, w => String.fromCharCode(w.charCodeAt(0) - 1728)));
            const pDay = parseInt(faDateParts.find(p => p.type === 'day').value.replace(/[۰-۹]/g, w => String.fromCharCode(w.charCodeAt(0) - 1728)));

            selectedYear = pYear; selectedMonth = pMonth; selectedDay = pDay;
            updateUI();
        });

        document.getElementById('dp-confirm-btn').addEventListener('click', () => {
            if (currentActiveInput) {
                const m = selectedMonth.toString().padStart(2, '0');
                const d = selectedDay.toString().padStart(2, '0');
                const pDate = `${selectedYear}/${m}/${d}`.replace(/[0-9]/g, w => pDigits[w]);

                const span = currentActiveInput.querySelector('span');
                if (span) {
                    span.textContent = pDate;
                    span.style.color = "inherit";
                    const hiddenInput = document.querySelector(`input[type="hidden"][name="${currentActiveInput.id}"]`);
                    if (hiddenInput) {
                        hiddenInput.value = `${selectedYear}/${m}/${d}`;
                    }
                } else {
                    currentActiveInput.value = pDate;
                    currentActiveInput.textContent = pDate;
                }
                currentActiveInput.dispatchEvent(new Event('change', { bubbles: true }));
            }
            closeModal();
        });
    }


    // 4. Image Upload / Cropper Mock
    document.querySelectorAll('.upload-area, .profile-header-card button, button i.fa-camera').forEach(el => {
        const trigger = el.tagName === 'BUTTON' ? el : el.closest('button') || el;
        if (!trigger || trigger.classList.contains('cropper-handled')) return;
        trigger.classList.add('cropper-handled');

        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            let fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.accept = 'image/*';
            fileInput.style.display = 'none';

            fileInput.addEventListener('change', () => {
                if (fileInput.files && fileInput.files.length > 0) {
                    alert('عکس انتخاب شد: ' + fileInput.files[0].name);
                    if (trigger.classList.contains('upload-area')) {
                        const icon = trigger.querySelector('i');
                        const p = trigger.querySelector('p');
                        if (icon) { icon.className = 'fa fa-check-circle text-success'; }
                        if (p) { p.textContent = 'آپلود شد'; p.style.color = 'var(--success)'; }
                        trigger.style.borderColor = 'var(--success)';
                        trigger.style.backgroundColor = '#f0fdf4';
                    }
                }
            });

            document.body.appendChild(fileInput);
            fileInput.click();
            setTimeout(() => document.body.removeChild(fileInput), 1000);
        });
    });

    // 5. Financial Hub Blocks & Chart
    const debtCards = document.querySelectorAll('.school-debt-card');
    debtCards.forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('.btn-credit')) return;
            const amountSpan = card.querySelector('.amount');
            const icon = card.querySelector('.debt-icon i');
            if (card.classList.contains('status-clear')) {
                card.classList.remove('status-clear');
                card.classList.add('status-due');
                if (amountSpan) amountSpan.textContent = '۱.۵M بدهی';
                if (icon) {
                    icon.classList.remove('fa-check');
                    icon.classList.add('fa-exclamation-triangle');
                }
            } else {
                card.classList.remove('status-due');
                card.classList.add('status-clear');
                if (amountSpan) amountSpan.textContent = 'بدون بدهی';
                if (icon) {
                    icon.classList.remove('fa-exclamation-triangle');
                    icon.classList.add('fa-check');
                }
            }
        });
    });

    document.querySelectorAll('.hub-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const text = btn.textContent.trim();
            if (text.includes('حساب‌های بانکی') || text.includes('حساب بانکی')) window.location.href = '/bank-info';
            if (text.includes('پرداخت شهریه')) alert('انتقال به درگاه پرداخت (دمو)');
            if (text.includes('گزارشات و تایم‌لاین مالی') || text.includes('تایم‌لاین') || text.includes('تاریخچه مالی')) window.location.href = '/financial-timeline';
        });
    });


    // 5.5 Global Input Validation (Prevent invalid characters in real-time)
    document.addEventListener('input', (e) => {
        const target = e.target;
        if (target.tagName !== 'INPUT' && target.tagName !== 'TEXTAREA') return;
        if (target.closest('#personal-info-form')) return;

        const name = target.name || '';
        const type = target.type || '';
        const inputMode = target.getAttribute('inputmode');
        const isNumericMode = inputMode === 'numeric';

        // Exclude specific fields where letters and numbers can mix
        if (name === 'passportNumber' || type === 'email' || type === 'password' || name.toLowerCase().includes('password')) return;

        // Fields that MUST NOT contain numbers
        const strictStringFields = [
            'firstName', 'lastName', 'fatherName', 'englishName', 'englishSurname',
            'bankName', 'accountName', 'occupation', 'religion', 'sect'
        ];

        // Fields that MUST NOT contain letters (only digits)
        const strictNumericFields = [
            'nationalId', 'birthCertificateNo', 'height', 'weight', 'mobile',
            'guardianMobile', 'tel', 'emergencyPhone', 'postalCode', 'cardNumber', 'sheba'
        ];

        // Ensure real-time character stripping
        if (strictStringFields.includes(name)) {
            // Remove any Persian/English digits
            target.value = target.value.replace(/[0-9۰-۹]/g, '');
        } else if (strictNumericFields.includes(name) || isNumericMode) {
            // Remove any non-digits
            target.value = target.value.replace(/[^0-9۰-۹]/g, '');
        }

        // Real-time custom validations
        if (name === 'nationalId' || name === 'birthCertificateNo') {
            const group = target.closest('.input-group');
            if (!group) return;
            const label = group.querySelector('label');
            target.classList.remove('error', 'success');
            if (label) label.classList.remove('error-label');
            const existingErr = group.querySelector('.error-text');
            if (existingErr) existingErr.remove();

            const cleanVal = target.value.replace(/[۰-۹]/g, w => String.fromCharCode(w.charCodeAt(0) - 1728));
            if (cleanVal.length === 0) return; // Don't show error if empty

            let hasError = false;
            let errorMsg = '';

            const fieldTitle = name === 'nationalId' ? 'کد ملی' : 'شماره شناسنامه';

            if (cleanVal.length < 10) {
                hasError = true;
                errorMsg = `${fieldTitle} باید ۱۰ رقم باشد`;
            } else if (name === 'nationalId' && cleanVal.length === 10) {
                const isValidIranianNationalId = (val) => {
                    if (!/^\d{10}$/.test(val)) return false;
                    if (/^(\d)\1{9}$/.test(val)) return false;
                    const invalidCodes = ["0000000000", "1111111111", "2222222222", "3333333333", "4444444444", "5555555555", "6666666666", "7777777777", "8888888888", "9999999999", "1234567890", "0123456789", "9876543210"];
                    if (invalidCodes.includes(val)) return false;
                    const check = parseInt(val[9]);
                    let sum = 0;
                    for (let i = 0; i < 9; i++) sum += parseInt(val[i]) * (10 - i);
                    const remainder = sum % 11;
                    return (remainder < 2 && check === remainder) || (remainder >= 2 && check === 11 - remainder);
                };
                if (!isValidIranianNationalId(cleanVal)) {
                    hasError = true;
                    errorMsg = 'کد ملی نامعتبر است';
                }
            } else if (name === 'birthCertificateNo' && cleanVal.length === 10) {
                if (parseInt(cleanVal) === 0) {
                    hasError = true;
                    errorMsg = 'شماره شناسنامه نامعتبر است (نمی‌تواند صفر باشد)';
                }
            }

            if (hasError) {
                target.classList.add('error');
                if (label) label.classList.add('error-label');
                const errSpan = document.createElement('span');
                errSpan.className = 'error-text';
                errSpan.style = 'color: var(--danger); font-size: 0.75rem; margin-top: 4px; display: block;';
                errSpan.textContent = errorMsg;
                group.appendChild(errSpan);
            }
        }
    });

    // Global change event for real-time validation of dates
    document.addEventListener('change', (e) => {
        const target = e.target;
        if (target.classList && target.classList.contains('date-picker-input')) {
            const group = target.closest('.input-group');
            if (!group) return;
            const label = group.querySelector('label');
            if (!label) return;

            const labelText = label.textContent.trim();
            if (labelText.includes('تاریخ تولد') || labelText.includes('تاریخ صدور')) {
                target.classList.remove('error', 'success');
                label.classList.remove('error-label');
                const existingErr = group.querySelector('.error-text');
                if (existingErr) existingErr.remove();

                const span = target.querySelector('span');
                const val = span ? span.textContent.trim() : target.textContent.trim();
                const cleanVal = val.replace(/[۰-۹]/g, w => String.fromCharCode(w.charCodeAt(0) - 1728));

                if (cleanVal !== 'انتخاب تاریخ' && cleanVal !== '') {
                    const faDateParts = new Intl.DateTimeFormat('fa-IR').formatToParts(new Date());
                    const pYear = parseInt(faDateParts.find(p => p.type === 'year').value.replace(/[۰-۹]/g, w => String.fromCharCode(w.charCodeAt(0) - 1728)));
                    const pMonth = parseInt(faDateParts.find(p => p.type === 'month').value.replace(/[۰-۹]/g, w => String.fromCharCode(w.charCodeAt(0) - 1728)));
                    const pDay = parseInt(faDateParts.find(p => p.type === 'day').value.replace(/[۰-۹]/g, w => String.fromCharCode(w.charCodeAt(0) - 1728)));

                    const [vy, vm, vd] = cleanVal.split('/').map(n => parseInt(n));
                    let isFuture = false;
                    if (vy > pYear) isFuture = true;
                    if (vy === pYear && vm > pMonth) isFuture = true;
                    if (vy === pYear && vm === pMonth && vd > pDay) isFuture = true;

                    if (isFuture) {
                        target.classList.add('error');
                        label.classList.add('error-label');
                        const errSpan = document.createElement('span');
                        errSpan.className = 'error-text';
                        errSpan.style = 'color: var(--danger); font-size: 0.75rem; margin-top: 4px; display: block;';
                        errSpan.textContent = 'این تاریخ نمی‌تواند در آینده باشد';
                        group.appendChild(errSpan);
                    }
                }
            }
        }
    });

    // 6. Validations
    document.querySelectorAll('form').forEach(form => {
        if (form.id === "personal-info-form") return;
        let submitBtn = form.querySelector('button[type="submit"]');
        if (!submitBtn) {
            const topBtn = document.querySelector('.btn-submit-top');
            if (topBtn && topBtn.getAttribute('form') === form.id) {
                submitBtn = topBtn;
            }
        }
        if (!submitBtn) return;

        // Complex validations
        const isValidIranianNationalId = (val) => {
            if (!/^\d{10}$/.test(val)) return false;
            if (/^(\d)\1{9}$/.test(val)) return false;
            const invalidCodes = ["0000000000", "1111111111", "2222222222", "3333333333", "4444444444", "5555555555", "6666666666", "7777777777", "8888888888", "9999999999", "1234567890", "0123456789", "9876543210"];
            if (invalidCodes.includes(val)) return false;
            const check = parseInt(val[9]);
            let sum = 0;
            for (let i = 0; i < 9; i++) sum += parseInt(val[i]) * (10 - i);
            const remainder = sum % 11;
            return (remainder < 2 && check === remainder) || (remainder >= 2 && check === 11 - remainder);
        };
        const isValidIranianBankCard = (val) => {
            if (!/^\d{16}$/.test(val)) return false;
            let sum = 0;
            for (let i = 0; i < 16; i++) {
                let digit = parseInt(val[i]);
                if (i % 2 === 0) { digit *= 2; if (digit > 9) digit -= 9; }
                sum += digit;
            }
            return sum % 10 === 0;
        };
        const isValidSheba = (val) => {
            if (!/^\d{24}$/.test(val)) return false;
            const rearranged = val + "182700";
            let remainder = 0;
            for (let i = 0; i < rearranged.length; i++) remainder = (remainder * 10 + parseInt(rearranged[i])) % 97;
            return remainder === 1;
        };

        const rules = {
            firstName: { required: 'نام الزامی است', regex: /^[\u0600-\u06FF\s]+$/, msg: 'نام باید حروف فارسی باشد' },
            lastName: { required: 'نام خانوادگی الزامی است', regex: /^[\u0600-\u06FF\s]+$/, msg: 'نام خانوادگی باید حروف فارسی باشد' },
            fatherName: { regex: /^[\u0600-\u06FF\s]*$/, msg: 'نام پدر باید حروف فارسی باشد' },
            englishName: { required: 'نام انگلیسی الزامی است', regex: /^[A-Za-z\s]+$/, msg: 'باید حروف انگلیسی باشد' },
            englishSurname: { required: 'نام خانوادگی انگلیسی الزامی است', regex: /^[A-Za-z\s]+$/, msg: 'باید حروف انگلیسی باشد' },
            nationalId: { required: 'کد ملی الزامی است', customCheck: isValidIranianNationalId, msg: 'کد ملی نامعتبر است' },
            birthCertificateNo: {
                required: 'شماره شناسنامه الزامی است',
                regex: /^[0-9]{10}$/,
                msg: (val) => {
                    if (val.length < 10) return 'شماره شناسنامه باید ۱۰ رقم باشد';
                    return 'شماره شناسنامه نامعتبر است';
                }
            },
            mobile: {
                required: 'شماره موبایل الزامی است',
                regex: /^09[0-9]{9}$/,
                msg: (val) => {
                    if (val.length >= 2 && !val.startsWith('09')) return 'شماره موبایل باید با 09 شروع شود';
                    if (val.length === 1 && val !== '0') return 'شماره موبایل باید با 09 شروع شود';
                    if (val.length < 11) return 'شماره موبایل باید ۱۱ رقم باشد';
                }
            },
            guardianMobile: {
                regex: /^09[0-9]{9}$/,
                msg: (val) => {
                    if (val.length >= 2 && !val.startsWith('09')) return 'شماره ولی باید با 09 شروع شود';
                    if (val.length === 1 && val !== '0') return 'شماره ولی باید با 09 شروع شود';
                    if (val.length < 11) return 'شماره ولی باید ۱۱ رقم باشد';
                }
            },
            tel: {
                regex: /^0[1-9][0-9]{9}$/,
                msg: (val) => {
                    if (val.startsWith('09')) return '09 برای تلفن ثابت مجاز نیست';
                    if (val.length >= 1 && val[0] !== '0') return 'تلفن ثابت باید با 0 شروع شود';
                    if (val.length < 11) return 'تلفن ثابت باید ۱۱ رقم باشد';
                }
            },
            emergencyPhone: {
                required: 'شماره اضطراری الزامی است',
                regex: /^0[0-9]{10}$/,
                msg: (val) => {
                    if (val.length >= 1 && val[0] !== '0') return 'شماره اضطراری باید با 0 شروع شود';
                    if (val.length < 11) return 'شماره اضطراری باید ۱۱ رقم باشد';
                }
            },
            email: { regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, msg: 'ایمیل معتبر نیست' },
            website: { regex: /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/.*)?$/, msg: 'آدرس سایت معتبر نیست' },
            postalCode: {
                regex: /^[0-9]{10}$/,
                msg: (val) => {
                    if (val.length < 10) return 'کد پستی باید ۱۰ رقم باشد';
                }
            },
            address: { required: 'آدرس الزامی است' },
            bankName: { required: 'نام بانک الزامی است', regex: /^[\u0600-\u06FF\s]+$/, msg: 'باید حروف فارسی باشد' },
            accountName: { required: 'نام صاحب حساب الزامی است', regex: /^[\u0600-\u06FF\s]+$/, msg: 'باید حروف فارسی باشد' },
            cardNumber: { required: 'شماره کارت الزامی است', customCheck: isValidIranianBankCard, msg: 'شماره کارت نامعتبر است' },
            sheba: { required: 'شماره شبا الزامی است', customCheck: isValidSheba, msg: 'شماره شبا نامعتبر است' },
            passportNumber: { required: 'شماره پاسپورت الزامی است', regex: /^[A-Za-z0-9]{9}$/, msg: 'شماره پاسپورت نامعتبر است' },
            issueDate: {
                required: 'تاریخ صدور الزامی است',
                customCheck: (val) => {
                    try {
                        const faDateParts = new Intl.DateTimeFormat('fa-IR').formatToParts(new Date());
                        const pYear = parseInt(faDateParts.find(p => p.type === 'year').value.replace(/[۰-۹]/g, w => String.fromCharCode(w.charCodeAt(0) - 1728)));
                        const pMonth = parseInt(faDateParts.find(p => p.type === 'month').value.replace(/[۰-۹]/g, w => String.fromCharCode(w.charCodeAt(0) - 1728)));
                        const pDay = parseInt(faDateParts.find(p => p.type === 'day').value.replace(/[۰-۹]/g, w => String.fromCharCode(w.charCodeAt(0) - 1728)));
                        const [vy, vm, vd] = val.split('/').map(n => parseInt(n));
                        if (vy > pYear) return false;
                        if (vy === pYear && vm > pMonth) return false;
                        if (vy === pYear && vm === pMonth && vd > pDay) return false;
                        return true;
                    } catch (e) { return true; } // Fallback to true if Intl or format is not supported
                },
                msg: 'تاریخ صدور نمی‌تواند بعد از امروز باشد'
            },
            expiryDate: {
                required: 'تاریخ انقضا الزامی است',
                customCheck: (val) => {
                    try {
                        const faDateParts = new Intl.DateTimeFormat('fa-IR').formatToParts(new Date());
                        const pYear = parseInt(faDateParts.find(p => p.type === 'year').value.replace(/[۰-۹]/g, w => String.fromCharCode(w.charCodeAt(0) - 1728)));
                        const pMonth = parseInt(faDateParts.find(p => p.type === 'month').value.replace(/[۰-۹]/g, w => String.fromCharCode(w.charCodeAt(0) - 1728)));
                        const pDay = parseInt(faDateParts.find(p => p.type === 'day').value.replace(/[۰-۹]/g, w => String.fromCharCode(w.charCodeAt(0) - 1728)));
                        const [vy, vm, vd] = val.split('/').map(n => parseInt(n));
                        if (vy > pYear) return false;
                        if (vy === pYear && vm > pMonth) return false;
                        if (vy === pYear && vm === pMonth && vd > pDay) return false;
                        return true;
                    } catch (e) { return true; } // Fallback to true if Intl or format is not supported
                },
                msg: 'تاریخ انقضا نمی‌تواند قبل از امروز باشد'
            },
            birthDate: {
                required: 'تاریخ تولد الزامی است',
                customCheck: (val) => {
                    try {
                        const faDateParts = new Intl.DateTimeFormat('fa-IR').formatToParts(new Date());
                        const pYear = parseInt(faDateParts.find(p => p.type === 'year').value.replace(/[۰-۹]/g, w => String.fromCharCode(w.charCodeAt(0) - 1728)));
                        const pMonth = parseInt(faDateParts.find(p => p.type === 'month').value.replace(/[۰-۹]/g, w => String.fromCharCode(w.charCodeAt(0) - 1728)));
                        const pDay = parseInt(faDateParts.find(p => p.type === 'day').value.replace(/[۰-۹]/g, w => String.fromCharCode(w.charCodeAt(0) - 1728)));
                        const [vy, vm, vd] = val.split('/').map(n => parseInt(n));
                        if (vy > pYear) return false;
                        if (vy === pYear && vm > pMonth) return false;
                        if (vy === pYear && vm === pMonth && vd > pDay) return false;
                        return true;
                    } catch (e) { return true; } // Fallback to true if Intl or format is not supported
                },
                msg: 'تاریخ تولد نمیتواند در آینده باشد'
            },
            gender: { required: 'جنسیت الزامی است' },
            religion: { required: 'دین الزامی است' },
            sportsInsuranceNumber: { required: 'شماره بیمه ورزشی الزامی است', regex: /^[0-9]+$/, msg: 'شماره بیمه باید فقط شامل اعداد باشد' },
            footballShoeSize: {
                regex: /^[0-9]{2}$/,
                msg: (val) => {
                    if (val.length < 2) return 'سایز کفش باید ۲ رقم باشد';
                }
            },
            slipperSize: {
                regex: /^[0-9]{2}$/,
                msg: (val) => {
                    if (val.length < 2) return 'سایز کفش باید ۲ رقم باشد';
                }
            },
            playingAbility: { regex: /^[^0-9۰-۹]*$/, msg: 'توانایی بازی نباید شامل عدد باشد' }
        };

        const validateField = (inp, rule) => {
            let targetInput = inp;
            if (inp.tagName === 'SELECT') {
                targetInput = inp.closest('.custom-select-wrapper')?.querySelector('.custom-select-trigger') || inp;
            }
            targetInput.classList.remove('error', 'success');
            const group = targetInput.closest('.input-group');
            if (group) {
                const label = group.querySelector('label');
                if (label) label.classList.remove('error-label');
                const existingErr = group.querySelector('.error-text');
                if (existingErr) existingErr.remove();
            }

            let val = '';
            if (inp.tagName === 'SELECT') val = inp.value;
            else if (inp.tagName === 'INPUT' || inp.tagName === 'TEXTAREA') val = inp.value.trim();
            else if (inp.classList.contains('date-picker-input')) {
                const span = inp.querySelector('span');
                val = span ? span.textContent.trim() : inp.textContent.trim();
            }

            const cleanVal = val.replace(/[۰-۹]/g, w => String.fromCharCode(w.charCodeAt(0) - 1728));
            const isPlaceholder = val === 'انتخاب تاریخ' || val === '' || val === null || val === 'انتخاب کنید...';

            let hasError = false;
            let errorMsg = '';

            if (rule.required && isPlaceholder) {
                hasError = true;
                errorMsg = rule.required;
            } else if (!isPlaceholder && cleanVal) {
                if (rule.customCheck && !rule.customCheck(cleanVal)) {
                    errorMsg = typeof rule.msg === 'function' ? rule.msg(cleanVal) : rule.msg;
                    if (errorMsg) hasError = true;
                } else if (rule.regex && !rule.regex.test(cleanVal)) {
                    errorMsg = typeof rule.msg === 'function' ? rule.msg(cleanVal) : rule.msg;
                    if (errorMsg) hasError = true;
                } else if (rule.length && cleanVal.length !== rule.length) {
                    errorMsg = rule.msg;
                    if (errorMsg) hasError = true;
                }
            }

            if (hasError) {
                targetInput.classList.add('error');
                if (group) {
                    const label = group.querySelector('label');
                    if (label) label.classList.add('error-label');

                    const errSpan = document.createElement('span');
                    errSpan.className = 'error-text';
                    errSpan.style.color = 'var(--danger)';
                    errSpan.style.fontSize = '0.8rem';
                    errSpan.style.marginTop = '4px';
                    errSpan.innerHTML = `<i class="fa fa-exclamation-triangle"></i> ${errorMsg}`;
                    group.appendChild(errSpan);
                }
                return false;
            } else if (!isPlaceholder && cleanVal) {
                targetInput.classList.add('success');
            }
            return true;
        };

        for (const [name, rule] of Object.entries(rules)) {
            form.querySelectorAll(`[name="${name}"], [id="${name}"]`).forEach(inp => {
                inp.addEventListener('blur', () => validateField(inp, rule));
                inp.addEventListener('change', () => validateField(inp, rule));
                inp.addEventListener('input', () => validateField(inp, rule));
            });
        }

        const enforceNumericLength = (e, len) => {
            const pDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
            let val = e.target.value.replace(/[۰-۹]/g, w => pDigits.indexOf(w).toString());
            val = val.replace(/[^0-9]/g, '');
            if (val.length > len) val = val.slice(0, len);
            e.target.value = val;
        };



        form.querySelectorAll('input[name="nationalId"], input[name="birthCertificateNo"], input[name="postalCode"]').forEach(inp => {
            inp.addEventListener('input', (e) => enforceNumericLength(e, 10));
        });

        form.querySelectorAll('input[name="mobile"], input[name="guardianMobile"], input[name="tel"], input[name="emergencyPhone"]').forEach(inp => {
            inp.addEventListener('input', (e) => enforceNumericLength(e, 11));
        });

        form.querySelectorAll('input[name="sportsInsuranceNumber"]').forEach(inp => {
            inp.addEventListener('input', (e) => enforceNumericLength(e, 20));
        });

        form.querySelectorAll('input[name="footballShoeSize"], input[name="slipperSize"]').forEach(inp => {
            inp.addEventListener('input', (e) => enforceNumericLength(e, 2));
        });

        submitBtn.addEventListener('click', (e) => {
            let isValid = true;

            for (const [name, rule] of Object.entries(rules)) {
                form.querySelectorAll(`[name="${name}"], [id="${name}"]`).forEach(inp => {
                    const fieldValid = validateField(inp, rule);
                    if (!fieldValid) isValid = false;
                });
            }

            if (!isValid) {
                e.preventDefault();
                const firstError = form.querySelector('.error');
                if (firstError) {
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            } else {
                e.preventDefault();
                const originalHtml = submitBtn.innerHTML;
                submitBtn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> در حال ثبت...';
                form.submit();
            }
        });
    });
});

// --- Map Modal Logic (Neshan API) ---
window.mapInstance = null;
window.mapMarker = null;
window.selectedMapAddress = '';
window.mapAddressTarget = null;
const NESHAN_API_KEY = 'service.ec711af1d62c4f72b2d0b33a31a65cc1';

function setMapLoading(isLoading) {
    const addrText = document.getElementById('mapAddressText');
    const confirmBtn = document.querySelector('#mapModal .btn-app-primary');
    if (isLoading) {
        if (addrText) addrText.innerHTML = '<span style="color:var(--text-muted);"><i class="fa fa-spinner fa-spin"></i> در حال دریافت آدرس...</span>';
        if (confirmBtn) {
            confirmBtn.disabled = true;
            confirmBtn.style.opacity = '0.6';
        }
    } else {
        if (addrText) {
            if (window.selectedMapAddress && !window.selectedMapAddress.includes('خطا')) {
                addrText.innerHTML = `<span style="font-weight:bold; color:var(--text-dark);">${window.selectedMapAddress}</span>`;
                if (confirmBtn) {
                    confirmBtn.disabled = false;
                    confirmBtn.style.opacity = '1';
                }
            } else {
                addrText.innerHTML = `<span style="color:var(--danger);">${window.selectedMapAddress || 'آدرس یافت نشد'}</span>`;
                if (confirmBtn) {
                    confirmBtn.disabled = true;
                    confirmBtn.style.opacity = '0.6';
                }
            }
        }
    }
}

window.fetchMapAddress = async (lat, lng) => {
    setMapLoading(true);

    const parseOSMAddress = (osmData) => {
        if (osmData && osmData.address) {
            const ad = osmData.address;
            const parts = [];
            if (ad.city || ad.town || ad.village) parts.push(ad.city || ad.town || ad.village);
            if (ad.suburb || ad.district) parts.push(ad.suburb || ad.district);
            if (ad.road || ad.street || ad.pedestrian) parts.push(ad.road || ad.street || ad.pedestrian);
            if (ad.neighbourhood) parts.push(ad.neighbourhood);
            if (parts.length > 0) return [...new Set(parts)].join('، ');
            return osmData.display_name;
        }
        return null;
    };

    try {
        const response = await fetch(`https://api.neshan.org/v5/reverse?lat=${lat}&lng=${lng}`, {
            headers: { 'Api-Key': NESHAN_API_KEY }
        });
        const data = await response.json();

        if (data && data.status === 'ERROR') {
            console.warn("Neshan API failed, falling back to OSM Nominatim. Error:", data.message);
            const osmResponse = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&accept-language=fa`);
            const osmData = await osmResponse.json();
            window.selectedMapAddress = parseOSMAddress(osmData) || `خطای کلید API نشان: ${data.message}`;
        } else if (data) {
            window.selectedMapAddress = data.formatted_address || data.route_name || data.neighbourhood || data.city || data.state || "آدرس یافت نشد";
        }
    } catch (e) {
        // Network error (CORS block etc). Fallback to OSM
        try {
            const osmResponse = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&accept-language=fa`);
            const osmData = await osmResponse.json();
            window.selectedMapAddress = parseOSMAddress(osmData) || 'آدرس یافت نشد';
        } catch (fallbackError) {
            window.selectedMapAddress = 'خطای ارتباط با سرور نقشه';
        }
    } finally {
        setMapLoading(false);
    }
};

window.searchMap = async () => {
    const input = document.getElementById('mapSearchInput');
    if (!input) return;
    const query = input.value.trim();
    if (!query) {
        alert('نام مکان را وارد کنید');
        return;
    }
    setMapLoading(true);
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&countrycodes=ir&accept-language=fa`);
        const data = await response.json();
        if (data.length === 0) {
            alert('مکان پیدا نشد');
            setMapLoading(false);
            return;
        }
        const lat = parseFloat(data[0].lat);
        const lon = parseFloat(data[0].lon);
        if (window.mapInstance) {
            window.mapInstance.flyTo([lat, lon], 16);
            if (window.mapMarker) window.mapMarker.setLatLng([lat, lon]);
        }
        await window.fetchMapAddress(lat, lon);
    } catch (e) {
        alert('خطا در جستجو');
        setMapLoading(false);
    }
};

window.closeMapModal = () => {
    const modal = document.getElementById('mapModal');
    if (modal) modal.style.display = 'none';
};

window.confirmMapSelection = () => {
    if (window.mapAddressTarget && window.selectedMapAddress && !window.selectedMapAddress.includes('خطا')) {
        window.mapAddressTarget.value = window.selectedMapAddress;
        window.mapAddressTarget.dispatchEvent(new Event('input', { bubbles: true }));
        window.mapAddressTarget.dispatchEvent(new Event('change', { bubbles: true }));
    }
    window.closeMapModal();
};

window.openMapModal = (textareaTarget) => {
    window.mapAddressTarget = textareaTarget;
    const modal = document.getElementById('mapModal');
    if (!modal) {
        alert('ماژول نقشه در این صفحه یافت نشد.');
        return;
    }
    modal.style.display = 'flex';

    if (typeof L === 'undefined') {
        alert('کتابخانه نقشه بارگذاری نشده است.');
        return;
    }

    if (!window.mapInstance) {
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
            iconRetinaUrl: './assets/images/marker-icon-2x.png',
            iconUrl: './assets/images/marker-icon.png',
            shadowUrl: './assets/images/marker-shadow.png',
        });

        const defaultCenter = [32.6546, 51.6680];
        window.mapInstance = L.map('map').setView(defaultCenter, 16);

        L.tileLayer('https://raster.snappmaps.ir/styles/snapp-style/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© <a href="https://snapp.ir">Snapp Maps</a> | Neshan API'
        }).addTo(window.mapInstance);

        window.mapMarker = L.marker(defaultCenter, { draggable: true }).addTo(window.mapInstance);

        window.mapMarker.on('dragend', (e) => {
            const pos = e.target.getLatLng();
            window.fetchMapAddress(pos.lat, pos.lng);
        });

        window.mapInstance.on('click', (e) => {
            window.mapMarker.setLatLng(e.latlng);
            window.fetchMapAddress(e.latlng.lat, e.latlng.lng);
        });

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    const lat = pos.coords.latitude;
                    const lng = pos.coords.longitude;
                    window.mapInstance.setView([lat, lng], 16);
                    window.mapMarker.setLatLng([lat, lng]);
                    window.fetchMapAddress(lat, lng);
                },
                (err) => {
                    console.log('Location access denied.', err);
                    window.fetchMapAddress(defaultCenter[0], defaultCenter[1]);
                }
            );
        } else {
            window.fetchMapAddress(defaultCenter[0], defaultCenter[1]);
        }
    }

    setTimeout(() => {
        if (window.mapInstance) window.mapInstance.invalidateSize();
    }, 300);
};

document.addEventListener('DOMContentLoaded', () => {
    const allButtons = document.querySelectorAll('button');
    allButtons.forEach(btn => {
        if (btn.textContent.includes('انتخاب از روی نقشه') || (btn.querySelector('i') && btn.querySelector('i').classList.contains('fa-map-marker'))) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const group = btn.closest('.input-group');
                let targetTextarea = null;
                if (group) {
                    targetTextarea = group.querySelector('textarea') || group.querySelector('input[type="text"]');
                }
                window.openMapModal(targetTextarea);
            });
        }
    });
});
// Strict Input Filtering
document.addEventListener('input', (e) => {
    const target = e.target;
    if (!target.name) return;

    const digitFields = ['nationalId', 'birthCertificateNo', 'height', 'weight', 'shoeSize', 'clothingSize', 'shirtNumber', 'mobile', 'guardianMobile', 'tel', 'emergencyPhone', 'postalCode', 'cardNumber', 'sheba'];
    if (digitFields.includes(target.name)) {
        target.value = target.value.replace(/[^0-9]/g, '');
    }

    const persianFields = ['firstName', 'lastName', 'fatherName', 'bankName', 'accountName'];
    if (persianFields.includes(target.name)) {
        target.value = target.value.replace(/[^\u0600-\u06FF\s]/g, '');
    }

    const englishFields = ['englishName', 'englishSurname'];
    if (englishFields.includes(target.name)) {
        target.value = target.value.replace(/[^A-Za-z\s]/g, '');
    }
});

// ----------------------------------------------------
// Cropper & Neshan Map Logic
// ----------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    // --- Cropper Logic ---
    let cropperInstance = null;
    let currentAvatarImg = null;

    // Create a hidden file input for profile
    let profileInput = document.getElementById('globalProfileUpload');
    if (!profileInput) {
        profileInput = document.createElement('input');
        profileInput.type = 'file';
        profileInput.id = 'globalProfileUpload';
        profileInput.accept = 'image/*';
        profileInput.style.display = 'none';
        document.body.appendChild(profileInput);
    }

    // Bind camera button
    const cameraBtns = document.querySelectorAll('.camera-btn');
    cameraBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentAvatarImg = btn.previousElementSibling; // Usually the .profile-avatar img
            profileInput.click();
        });
    });

    profileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const img = document.getElementById('cropperImage');
                if (img) {
                    img.src = e.target.result;
                    document.getElementById('imageCropperModal').style.display = 'flex';
                    if (cropperInstance) cropperInstance.destroy();
                    if (typeof Cropper !== 'undefined') {
                        cropperInstance = new Cropper(img, {
                            aspectRatio: 1,
                            viewMode: 1,
                            background: false,
                        });
                    }
                }
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    });

    window.closeCropperModal = () => {
        document.getElementById('imageCropperModal').style.display = 'none';
        if (cropperInstance) {
            cropperInstance.destroy();
            cropperInstance = null;
        }
        profileInput.value = '';
    };

    window.rotateCropper = () => {
        if (cropperInstance) cropperInstance.rotate(90);
    };

    window.applyCrop = () => {
        if (cropperInstance) {
            const canvas = cropperInstance.getCroppedCanvas({ width: 500, height: 500 });
            if (canvas && currentAvatarImg) {
                currentAvatarImg.src = canvas.toDataURL('image/jpeg', 0.8);
            }
        }
        window.closeCropperModal();
    };

    // Passport Upload Fix
    const passportUpload = document.getElementById('passportUpload');
    if (passportUpload) {
        passportUpload.addEventListener('change', (e) => {
            if (e.target.files && e.target.files[0]) {
                const fileLabel = document.querySelector('label:contains("تصویر گذرنامه")');
                if (fileLabel) {
                    fileLabel.innerHTML = '<i class="fa fa-check text-success"></i> فایل انتخاب شد';
                }
            }
        });
    }

    // --- Old Map logic removed because a new dynamic one was added ---

    // Mobile sticky submit button logic
    const btnSubmitTop = document.querySelector('.btn-submit-top');
    if (btnSubmitTop) {
        const createMobileStickyButton = () => {
            if (window.innerWidth <= 768 && !document.querySelector('.sticky-submit-wrapper')) {
                const wrapper = document.createElement('div');
                wrapper.className = 'sticky-submit-wrapper';

                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'sticky-submit-btn btn-app-primary';
                btn.innerHTML = btnSubmitTop.innerHTML;

                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    btnSubmitTop.click();
                });

                wrapper.appendChild(btn);
                document.body.appendChild(wrapper);

                const mainWrapper = document.querySelector('.main-wrapper');
                if (mainWrapper) {
                    mainWrapper.style.paddingBottom = '80px';
                }
            } else if (window.innerWidth > 768) {
                const wrapper = document.querySelector('.sticky-submit-wrapper');
                if (wrapper) wrapper.remove();
                const mainWrapper = document.querySelector('.main-wrapper');
                if (mainWrapper) {
                    mainWrapper.style.paddingBottom = '';
                }
            }
        };

        // Change Mobile Modal Logic
        const mobileInput = document.querySelector('input[name="mobile"]');
        if (mobileInput) {
            mobileInput.style.pointerEvents = 'none';
            const editBtn = mobileInput.closest('.input-group').querySelector('button');
            if (editBtn) {
                const cmOverlay = document.createElement('div');
                cmOverlay.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(15, 23, 42, 0.6); backdrop-filter: blur(4px); z-index: 9999; display: none; justify-content: center; align-items: center; opacity: 0; transition: opacity 0.3s ease; padding: 15px;';

                const cmModal = document.createElement('div');
                cmModal.style.cssText = 'background: #fff; border-radius: 20px; padding: 24px; box-shadow: 0 10px 40px rgba(0,0,0,0.15); width: 100%; max-width: 400px; transform: scale(0.95); transition: transform 0.3s ease; position: relative;';

                cmOverlay.appendChild(cmModal);
                document.body.appendChild(cmOverlay);

                const renderOtpStep = (error = '') => {
                    cmModal.innerHTML = `
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
                            <h3 style="margin: 0; font-size: 1.25rem; font-weight: 800; color: var(--text-dark);">تغییر شماره موبایل</h3>
                            <button type="button" class="cm-close-btn" style="background: none; border: none; font-size: 1.5rem; color: var(--text-muted); cursor: pointer;">&times;</button>
                        </div>
                        <div style="margin-bottom: 24px; text-align: center;">
                            <div style="width: 48px; height: 48px; background: rgba(59, 130, 246, 0.1); color: var(--primary); border-radius: 50%; display: flex; justify-content: center; align-items: center; margin: 0 auto 16px;">
                                <i class="fa fa-lock" style="font-size: 1.5rem;"></i>
                            </div>
                            <h4 style="margin: 0 0 8px 0; font-size: 1.1rem; color: var(--text-dark);">تایید شماره فعلی</h4>
                            <p style="margin: 0; font-size: 0.85rem; color: var(--text-muted);">کد ارسال شده به شماره فعلی (${mobileInput.value || '...'}) را وارد کنید.</p>
                        </div>
                        <div style="margin-bottom: 24px;">
                            <input type="text" id="cm-otp-input" placeholder="کد ۴ رقمی (مثال: ۱۲۳۴)" style="width: 100%; padding: 12px; border: 1px solid ${error ? 'var(--danger)' : '#cbd5e1'}; border-radius: 8px; text-align: center; font-size: 1.2rem; letter-spacing: 4px; direction: ltr;" maxlength="4" inputmode="numeric">
                            ${error ? `<span style="color: var(--danger); font-size: 0.75rem; margin-top: 8px; display: block; text-align: center;"><i class="fa fa-exclamation-triangle"></i> ${error}</span>` : ''}
                        </div>
                        <button type="button" id="cm-verify-btn" style="width: 100%; padding: 14px; background: var(--primary); color: #fff; border: none; border-radius: 12px; font-weight: bold; font-size: 1rem; cursor: pointer; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);">تایید و ادامه</button>
                    `;

                    cmModal.querySelector('.cm-close-btn').addEventListener('click', closeCmModal);
                    const input = cmModal.querySelector('#cm-otp-input');
                    input.addEventListener('input', (e) => {
                        let val = e.target.value.replace(/[۰-۹]/g, w => String.fromCharCode(w.charCodeAt(0) - 1728));
                        val = val.replace(/[^0-9]/g, '');
                        e.target.value = val;
                    });
                    cmModal.querySelector('#cm-verify-btn').addEventListener('click', () => {
                        if (input.value !== '1234') {
                            renderOtpStep('کد وارد شده اشتباه است. (راهنما: ۱۲۳۴)');
                        } else {
                            renderNewNumberStep();
                        }
                    });
                };

                const renderNewNumberStep = (error = '', loading = false) => {
                    cmModal.innerHTML = `
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
                            <h3 style="margin: 0; font-size: 1.25rem; font-weight: 800; color: var(--text-dark);">تغییر شماره موبایل</h3>
                            <button type="button" class="cm-close-btn" style="background: none; border: none; font-size: 1.5rem; color: var(--text-muted); cursor: pointer;" ${loading ? 'disabled' : ''}>&times;</button>
                        </div>
                        <div style="margin-bottom: 24px; text-align: center;">
                            <div style="width: 48px; height: 48px; background: rgba(34, 197, 94, 0.1); color: var(--success); border-radius: 50%; display: flex; justify-content: center; align-items: center; margin: 0 auto 16px;">
                                <i class="fa fa-phone" style="font-size: 1.5rem;"></i>
                            </div>
                            <h4 style="margin: 0 0 8px 0; font-size: 1.1rem; color: var(--text-dark);">شماره جدید</h4>
                            <p style="margin: 0; font-size: 0.85rem; color: var(--text-muted);">شماره موبایل جدید خود را وارد کنید.</p>
                        </div>
                        <div style="margin-bottom: 24px;">
                            <input type="text" id="cm-new-mobile" placeholder="09..." style="width: 100%; padding: 12px; border: 1px solid ${error ? 'var(--danger)' : '#cbd5e1'}; border-radius: 8px; text-align: left; direction: ltr; font-size: 1rem;" maxlength="11" inputmode="numeric" ${loading ? 'disabled' : ''}>
                            <span id="cm-new-mobile-err" style="color: var(--danger); font-size: 0.75rem; margin-top: 8px; display: ${error ? 'block' : 'none'}; text-align: right;"><i class="fa fa-exclamation-triangle"></i> <span class="err-text">${error}</span></span>
                        </div>
                        <button type="button" id="cm-submit-btn" style="width: 100%; padding: 14px; background: var(--success); color: #fff; border: none; border-radius: 12px; font-weight: bold; font-size: 1rem; cursor: pointer; box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);" ${loading ? 'disabled' : ''}>
                            ${loading ? '<i class="fa fa-spinner fa-spin"></i> در حال ثبت...' : 'ثبت شماره جدید'}
                        </button>
                    `;

                    cmModal.querySelector('.cm-close-btn').addEventListener('click', closeCmModal);
                    const input = cmModal.querySelector('#cm-new-mobile');
                    const errSpan = cmModal.querySelector('#cm-new-mobile-err');
                    const errText = cmModal.querySelector('.err-text');

                    input.addEventListener('input', (e) => {
                        let val = e.target.value.replace(/[۰-۹]/g, w => String.fromCharCode(w.charCodeAt(0) - 1728));
                        val = val.replace(/[^0-9]/g, '');
                        e.target.value = val;

                        if (val) {
                            if (val.length >= 2 && !val.startsWith('09')) {
                                input.style.borderColor = 'var(--danger)';
                                errSpan.style.display = 'block';
                                errText.textContent = 'شماره موبایل باید با 09 شروع شود';
                            } else if (val.length === 1 && val !== '0') {
                                input.style.borderColor = 'var(--danger)';
                                errSpan.style.display = 'block';
                                errText.textContent = 'شماره موبایل باید با 09 شروع شود';
                            } else if (val.length !== 11) {
                                input.style.borderColor = 'var(--danger)';
                                errSpan.style.display = 'block';
                                errText.textContent = 'شماره موبایل باید ۱۱ رقم باشد';
                            } else {
                                input.style.borderColor = '#cbd5e1';
                                errSpan.style.display = 'none';
                            }
                        } else {
                            input.style.borderColor = '#cbd5e1';
                            errSpan.style.display = 'none';
                        }
                    });

                    cmModal.querySelector('#cm-submit-btn').addEventListener('click', () => {
                        if (!/^09[0-9]{9}$/.test(input.value)) {
                            input.style.borderColor = 'var(--danger)';
                            errSpan.style.display = 'block';
                            errText.textContent = 'شماره موبایل جدید نامعتبر است';
                            return;
                        }
                        const newMobile = input.value;
                        renderNewNumberStep('', true);
                        setTimeout(() => {
                            mobileInput.value = newMobile;
                            mobileInput.dispatchEvent(new Event('input', { bubbles: true }));
                            mobileInput.dispatchEvent(new Event('change', { bubbles: true }));
                            closeCmModal();
                        }, 1500);
                    });
                };

                const closeCmModal = () => {
                    cmOverlay.style.opacity = '0';
                    cmModal.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        cmOverlay.style.display = 'none';
                    }, 300);
                };

                editBtn.addEventListener('click', () => {
                    renderOtpStep();
                    cmOverlay.style.display = 'flex';
                    setTimeout(() => {
                        cmOverlay.style.opacity = '1';
                        cmModal.style.transform = 'scale(1)';
                    }, 10);
                });
            }
        }

        createMobileStickyButton();
        window.addEventListener('resize', createMobileStickyButton);

        // --- Aggressive Keyboard-aware sticky button ---
        let INITIAL_VH = window.innerHeight;
        window.addEventListener('resize', () => {
            if (window.innerHeight > INITIAL_VH) INITIAL_VH = window.innerHeight;
        });

        let isTracking = false;

        const updateStickyPosition = () => {
            if (window.innerWidth > 768) return;
            const wrapper = document.querySelector('.sticky-submit-wrapper');
            if (!wrapper) return;
            const vv = window.visualViewport;
            if (!vv) return;

            const isKeyboardOpen = (INITIAL_VH - vv.height) > 100;

            if (isKeyboardOpen) {
                const wrapperHeight = wrapper.offsetHeight || 70;
                // vv.offsetTop is the distance from the layout viewport top to the visual viewport top
                // vv.height is the height of the visible area
                // Therefore vv.offsetTop + vv.height is the exact Y coordinate of the keyboard's top edge in the layout viewport
                const topPos = vv.offsetTop + vv.height - wrapperHeight;

                wrapper.style.top = topPos + 'px';
                wrapper.style.bottom = 'auto';
                wrapper.style.transition = 'none';

                const bottomNav = document.querySelector('.bottom-nav');
                if (bottomNav) bottomNav.style.display = 'none';
            } else {
                wrapper.style.top = 'auto';
                wrapper.style.bottom = '65px';
                wrapper.style.transition = 'bottom 0.25s ease';

                const bottomNav = document.querySelector('.bottom-nav');
                if (bottomNav) bottomNav.style.display = '';
            }
        };

        const onViewportChange = () => {
            if (!isTracking) {
                isTracking = true;
                requestAnimationFrame(() => {
                    updateStickyPosition();
                    isTracking = false;
                });
            }
        };

        if (window.visualViewport) {
            window.visualViewport.addEventListener('resize', onViewportChange);
            window.visualViewport.addEventListener('scroll', onViewportChange);
        }
        window.addEventListener('scroll', onViewportChange);
        window.addEventListener('touchmove', onViewportChange); // Aggressive tracking during scroll drag

        // Backup for focus
        document.addEventListener('focusin', (e) => {
            if (window.innerWidth > 768) return;
            const tagName = e.target ? e.target.tagName : '';
            if (tagName === 'INPUT' || tagName === 'TEXTAREA') {
                setTimeout(onViewportChange, 100);
                setTimeout(onViewportChange, 300);
                setTimeout(onViewportChange, 600);
            }
        });

        document.addEventListener('focusout', (e) => {
            if (window.innerWidth > 768) return;
            setTimeout(() => {
                const activeTag = document.activeElement ? document.activeElement.tagName : '';
                if (activeTag !== 'INPUT' && activeTag !== 'TEXTAREA') {
                    setTimeout(onViewportChange, 100);
                    setTimeout(onViewportChange, 300);
                }
            }, 50);
        });
    }
});










;/* ===== END: wwwroot/assets/main.js ===== */


/* ===== START: wwwroot/js/personal-info.js ===== */
;
/**
 * FootballSchool - Personal Info Script
 * Validations using TaskHelpFiles/footballit_script.js
 * Full AJAX Form Submission (No page reload)
 */

// 1. Image Preview
function previewImage(input) {
    if (input.files && input.files[0]) {
        var file = input.files[0];

        // Validate extension
        var ext = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
        var allowed = ['.jpg', '.jpeg', '.png', '.webp', '.tiff'];
        if (!allowed.includes(ext)) {
            if (typeof display_alarm2 === 'function') {
                display_alarm2("فرمت فایل انتخابی مجاز نیست. لطفا فایل با پسوند jpg, jpeg, png, webp یا tiff انتخاب فرمایید.", "خطا در بارگذاری تصویر", "", 0);
            } else {
                alert("فرمت فایل انتخابی مجاز نیست.");
            }
            input.value = '';
            return;
        }

        // Validate max size 5MB
        if (file.size > 5 * 1024 * 1024) {
            if (typeof display_alarm2 === 'function') {
                display_alarm2("حجم تصویر نباید بیشتر از ۵ مگابایت باشد.", "خطا در بارگذاری تصویر", "", 0);
            } else {
                alert("حجم تصویر نباید بیشتر از ۵ مگابایت باشد.");
            }
            input.value = '';
            return;
        }

        var lbl = document.getElementById('lbl_FileUpload');
        if (lbl) lbl.innerText = file.name;

        var reader = new FileReader();
        reader.onload = function (e) {
            var docPic = document.getElementById('doc_pic');
            if (docPic) docPic.src = e.target.result;
            var topbarAvatar = document.getElementById('topbar_user_avatar');
            if (topbarAvatar) topbarAvatar.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

// 2. Jalali to Gregorian conversion calculation
function jalaliToGregorianCalc(jy, jm, jd) {
    var sal_a, gy, gm, gd, days;
    jy += 1595;
    days = -355668 + (365 * jy) + (~~(jy / 33) * 8) + ~~(((jy % 33) + 3) / 4) + jd + ((jm < 7) ? (jm - 1) * 31 : ((jm - 7) * 30) + 186);
    gy = 400 * ~~(days / 146097);
    days %= 146097;
    if (days > 36524) {
        gy += 100 * ~~(--days / 36524);
        days %= 36524;
        if (days >= 365) days++;
    }
    gy += 4 * ~~(days / 1461);
    days %= 1461;
    if (days > 365) {
        gy += ~~((days - 1) / 365);
        days = (days - 1) % 365;
    }
    gd = days + 1;
    sal_a = [0, 31, ((gy % 4 === 0 && gy % 100 !== 0) || (gy % 400 === 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    for (gm = 0; gm < 13 && gd > sal_a[gm]; gm++) gd -= sal_a[gm];
    return { year: gy, month: gm, day: gd };
}

// 3. Synchronize Shamsi Date, Miladi Date, and Age
function syncBirthDetails() {
    var hiddenInput = document.getElementById('hidden_birthDate');
    var val = hiddenInput ? hiddenInput.value : '';
    if (!val) {
        var dpSpan = document.querySelector('#birthDate span');
        if (dpSpan && dpSpan.textContent.includes('/')) val = dpSpan.textContent.trim();
    }
    if (val && val.includes('/')) {
        var clean = val.replace(/[۰-۹]/g, function (w) { return String.fromCharCode(w.charCodeAt(0) - 1728); });
        var parts = clean.split('/');
        if (parts.length === 3) {
            var jy = parseInt(parts[0], 10);
            var jm = parseInt(parts[1], 10);
            var jd = parseInt(parts[2], 10);
            if (jy > 1300 && jm >= 1 && jm <= 12 && jd >= 1 && jd <= 31) {
                // Ensure date format is YYYY/MM/DD
                var formattedShamsi = jy + '/' + String(jm).padStart(2, '0') + '/' + String(jd).padStart(2, '0');
                if (hiddenInput) hiddenInput.value = formattedShamsi;
                var shamsiEl = document.getElementById('birth_date_shamsi');
                if (shamsiEl) shamsiEl.value = formattedShamsi;

                var g = jalaliToGregorianCalc(jy, jm, jd);
                var miladiInput = document.getElementById('txt_birth_date_miladi');
                if (miladiInput) {
                    miladiInput.value = g.year + '/' + String(g.month).padStart(2, '0') + '/' + String(g.day).padStart(2, '0');
                }
                var today = new Date();
                var age = today.getFullYear() - g.year;
                var m = (today.getMonth() + 1) - g.month;
                if (m < 0 || (m === 0 && today.getDate() < g.day)) age--;
                var ageInput = document.getElementById('lbl_age');
                if (ageInput) {
                    ageInput.value = (age >= 0 ? age : 0) + ' سال';
                }
            }
        }
    }
}

// 4. Ultra-Modern Alarm Modal Controller (Vanilla JS - no jQuery needed)
var _alarmTimer = null;

function close_alarm_box() {
    if (_alarmTimer) {
        clearTimeout(_alarmTimer);
        _alarmTimer = null;
    }
    var box = document.getElementById('alaram_box');
    if (!box) return;
    box.style.opacity = '0';
    box.style.transition = 'opacity 0.2s ease';
    document.body.classList.remove('fs-modal-open');
    setTimeout(function () {
        box.style.display = 'none';
        box.style.opacity = '';
        box.style.transition = '';
        var hdn = document.getElementById('hdn_alarm');
        if (hdn) {
            hdn.value = '';
        }
    }, 200);
}

function display_alarm2(alarm_text, titel, obj, flag) {
    var isSuccess = (flag === 1 || flag === '1');
    var isWarning = (flag === 2 || flag === '2');
    var defaultTitle = isSuccess ? 'ثبت موفق اطلاعات' : (isWarning ? 'هشدار سیستم' : 'خطا در ثبت اطلاعات');
    var finalTitle = titel || defaultTitle;

    // Dismiss mobile virtual keyboard if open
    if (document.activeElement && typeof document.activeElement.blur === 'function') {
        document.activeElement.blur();
    }

    var card = document.getElementById('alarm_card');
    var icon = document.getElementById('alarm_icon');
    var titleEl = document.getElementById('lbl1');
    var textEl = document.getElementById('lbl2');
    var hdn = document.getElementById('hdn_alarm');
    var box = document.getElementById('alaram_box');

    if (!box) return;

    // Ensure modal is direct child of body (bypasses any parent transforms/overflows)
    if (box.parentNode !== document.body) {
        document.body.appendChild(box);
    }

    if (hdn) hdn.value = obj || '';
    if (titleEl) titleEl.textContent = finalTitle;
    if (textEl) textEl.textContent = alarm_text || '';

    if (card) {
        card.classList.remove('is-success', 'is-error', 'is-warning');
        if (isSuccess) {
            card.classList.add('is-success');
            if (icon) icon.className = 'fa fa-check';
        } else if (isWarning) {
            card.classList.add('is-warning');
            if (icon) icon.className = 'fa fa-exclamation-triangle';
        } else {
            card.classList.add('is-error');
            if (icon) icon.className = 'fa fa-times';
        }
    }

    // Lock body scroll and show modal centered in current viewport
    document.body.classList.add('fs-modal-open');
    box.style.display = 'flex';
    box.style.opacity = '0';
    box.style.transition = 'opacity 0.25s ease';
    setTimeout(function () { box.style.opacity = '1'; }, 10);

    // Auto-close after 4 seconds
    if (_alarmTimer) clearTimeout(_alarmTimer);
    _alarmTimer = setTimeout(function () { close_alarm_box(); }, 4000);
}

window.close_alarm_box = close_alarm_box;
window.display_alarm2 = display_alarm2;
window.display_alarm = function (alarm_text, obj) {
    display_alarm2(alarm_text, 'خطا در اطلاعات ورودی', obj, 0);
};

// Global keydown listener for Escape key to close modal
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' || e.key === 'Esc') {
        close_alarm_box();
    }
});

// 4.5 Set_value_numeric from TaskHelpFiles/footballit_script.js
function Set_value_numeric(obj, max_len) {
    var elem = document.getElementById(obj);
    if (!elem) return;
    var str = elem.value;
    var temp = '';
    var str_checked = '';
    for (var i = 0; i < str.length; i++) {
        temp = str.substring(i, i + 1);
        switch (temp.charCodeAt(0)) {
            case 1777: temp = "1"; break;
            case 1778: temp = "2"; break;
            case 1779: temp = "3"; break;
            case 1780: temp = "4"; break;
            case 1781: temp = "5"; break;
            case 1782: temp = "6"; break;
            case 1783: temp = "7"; break;
            case 1784: temp = "8"; break;
            case 1785: temp = "9"; break;
            case 1776: temp = "0"; break;
            default:
                temp = temp;
        }

        if (48 <= temp.charCodeAt(0) && temp.charCodeAt(0) <= 57) {
            str_checked = str_checked + temp;
        }
        temp = "";
    }
    if (str_checked.length > max_len) {
        str_checked = str_checked.substring(0, max_len);
    }
    elem.value = str_checked;
}

// 4.6 CheckMeliCode - exact method from TaskHelpFiles/footballit_script.js
var msg = "";
function CheckMeliCode(obj) {
    var elem = document.getElementById(obj);
    var meli_code = (elem && elem.value) ? elem.value.trim() : "";
    var flag = "";
    if (meli_code != '') {
        var temp = meli_code.substr(0, 1).toUpperCase();
        if (temp >= 'A' && temp <= 'Z') {
            for (var i = 2; i < meli_code.length; i++) {
                switch (meli_code.charCodeAt(i)) {
                    case 1777: temp = "1"; break;
                    case 1778: temp = "2"; break;
                    case 1779: temp = "3"; break;
                    case 1780: temp = "4"; break;
                    case 1781: temp = "5"; break;
                    case 1782: temp = "6"; break;
                    case 1783: temp = "7"; break;
                    case 1784: temp = "8"; break;
                    case 1785: temp = "9"; break;
                    case 1776: temp = "0"; break;
                    default:
                        temp = meli_code.substr(i, 1);
                }
                if (temp != '0' && temp != '9' && temp != '8'
                    && temp != '7' && temp != '6' && temp != '5'
                    && temp != '4' && temp != '3' && temp != '2' && temp != '1') {
                    flag = '***';
                }
            }
            if (flag != '***') {
                return true;
            } else {
                msg = 'شماره کد ملی یا پاسپورت صحيح نمي باشد';
                display_alarm(msg, obj);
                return false;
            }
        } else {
            var temp2 = "";
            for (var i = 0; i < meli_code.length; i++) {
                switch (meli_code.charCodeAt(i)) {
                    case 1777: temp = "1"; break;
                    case 1778: temp = "2"; break;
                    case 1779: temp = "3"; break;
                    case 1780: temp = "4"; break;
                    case 1781: temp = "5"; break;
                    case 1782: temp = "6"; break;
                    case 1783: temp = "7"; break;
                    case 1784: temp = "8"; break;
                    case 1785: temp = "9"; break;
                    case 1776: temp = "0"; break;
                    default:
                        temp = meli_code.substr(i, 1);
                }
                temp2 += temp;
            }
            meli_code = temp2;
            if (meli_code.length == 10) {
                if (/^(\d)\1{9}$/.test(meli_code) ||
                    meli_code == '1111111111' ||
                    meli_code == '0000000000' ||
                    meli_code == '2222222222' ||
                    meli_code == '3333333333' ||
                    meli_code == '4444444444' ||
                    meli_code == '5555555555' ||
                    meli_code == '6666666666' ||
                    meli_code == '7777777777' ||
                    meli_code == '8888888888' ||
                    meli_code == '9999999999' ||
                    meli_code == '0123456789' ||
                    meli_code == '1234567890' ||
                    meli_code == '9876543210' ||
                    meli_code == '0987654321'
                ) {
                    msg = 'كد ملي صحيح نمي باشد';
                    display_alarm(msg, obj);
                    return false;
                }

                var c = parseInt(meli_code.charAt(9), 10);
                var n = parseInt(meli_code.charAt(0), 10) * 10 +
                    parseInt(meli_code.charAt(1), 10) * 9 +
                    parseInt(meli_code.charAt(2), 10) * 8 +
                    parseInt(meli_code.charAt(3), 10) * 7 +
                    parseInt(meli_code.charAt(4), 10) * 6 +
                    parseInt(meli_code.charAt(5), 10) * 5 +
                    parseInt(meli_code.charAt(6), 10) * 4 +
                    parseInt(meli_code.charAt(7), 10) * 3 +
                    parseInt(meli_code.charAt(8), 10) * 2;
                var r = n - parseInt(n / 11, 10) * 11;
                if ((r == 0 && r == c) || (r == 1 && c == 1) || (r > 1 && c == (11 - r))) {
                    return true;
                } else {
                    msg = 'كد ملي صحيح نمي باشد';
                    display_alarm(msg, obj);
                    return false;
                }
            } else {
                msg = 'طول کد ملی وارد شده باید 10 کاراکتر باشد';
                display_alarm(msg, obj);
                return false;
            }
        }
    } else {
        msg = 'ثبت کد ملی الزامی است';
        display_alarm(msg, obj);
        return false;
    }
}

window.CheckMeliCode = CheckMeliCode;
window.Set_value_numeric = Set_value_numeric;

// 5. Validation using footballit_script.js rules
function check_data() {
    syncBirthDetails();

    // Check Name
    var nameVal = (document.getElementById("txt_name") ? document.getElementById("txt_name").value : "").trim();
    if (nameVal === '') {
        display_alarm2("نام بازیکن وارد نشده است. ثبت اطلاعات برای فیلدهای ستاره‌دار الزامی است", "لطفا فیلدهای ستاره‌دار را وارد کنید", "txt_name", 0);
        return false;
    }

    // Check Family
    var famVal = (document.getElementById("txt_family") ? document.getElementById("txt_family").value : "").trim();
    if (famVal === '') {
        display_alarm2("نام خانوادگی بازیکن وارد نشده است. ثبت اطلاعات برای فیلدهای ستاره‌دار الزامی است", "لطفا فیلدهای ستاره‌دار را وارد کنید", "txt_family", 0);
        return false;
    }

    // Check National / Foreign ID using CheckMeliCode from TaskHelpFiles/footballit_script.js
    if (!CheckMeliCode('txt_international_id')) {
        return false;
    }

    // Check Gender
    var genderVal = document.getElementById("cmd_gender") ? document.getElementById("cmd_gender").value : '';
    if (!genderVal) {
        display_alarm2("جنسیت بازیکن انتخاب نشده است. ثبت اطلاعات برای فیلدهای ستاره‌دار الزامی است", "لطفا فیلدهای ستاره‌دار را وارد کنید", "cmd_gender", 0);
        return false;
    }

    // Check Shamsi Birth Date
    var shamsiEl = document.getElementById("birth_date_shamsi") || document.getElementById("hidden_birthDate");
    var shamsiVal = (shamsiEl ? shamsiEl.value : "").trim();
    if (shamsiVal === '') {
        display_alarm2("تاریخ تولد شمسی وارد نشده است. ثبت اطلاعات برای فیلدهای ستاره‌دار الزامی است", "لطفا فیلدهای ستاره‌دار را وارد کنید", "birthDate", 0);
        return false;
    }

    if (typeof checkdate === 'function') {
        // Temporary ensure element id is accessible
        if (!shamsiEl.id) shamsiEl.id = "birth_date_shamsi";
        if (!checkdate(shamsiEl.id)
            || shamsiVal.length !== 10
            || shamsiVal.substr(4, 1) !== '/'
            || shamsiVal.substr(7, 1) !== '/') {
            display_alarm2("تاریخ وارد شده صحیح نیست . لطفا تاریخ تولد شمسی را با فرمت YYYY/MM/DD وارد کنید.", "خطا در ثبت تاریخ تولد شمسی", shamsiEl.id, 0);
            return false;
        }
    }

    // Check Gregorian Birth Date if filled
    var miladiEl = document.getElementById("txt_birth_date_miladi");
    var miladiVal = (miladiEl ? miladiEl.value : "").trim();
    if (miladiVal !== '' && typeof checkdate_miladi === 'function') {
        if (!checkdate_miladi('txt_birth_date_miladi')
            || miladiVal.length !== 10
            || miladiVal.substr(4, 1) !== '/'
            || miladiVal.substr(7, 1) !== '/') {
            display_alarm2("تاریخ وارد شده صحیح نیست . لطفا تاریخ تولد میلادی را با فرمت YYYY/MM/DD وارد کنید.", "خطا در ثبت تاریخ تولد میلادی", "txt_birth_date_miladi", 0);
            return false;
        }
    }

    // Check Health Status
    var healthVal = document.getElementById("cmd_health_status") ? document.getElementById("cmd_health_status").value : '';
    if (!healthVal) {
        display_alarm2("وضعیت سلامت بازیکن انتخاب نشده است. لطفا وضعیت سلامت را انتخاب نمایید.", "لطفا فیلدهای ستاره‌دار را وارد کنید", "cmd_health_status", 0);
        return false;
    }

    // Note: Religion field is optional as requested (no validation check)

    return true;
}

// Disallow entering numbers in txt_location_id, txt_father_job, txt_job
function setupNoNumbersValidation() {
    var fieldIds = ['txt_location_id', 'txt_father_job', 'txt_job'];
    var digitRegex = /[0-9۰-۹٠-٩\u0660-\u0669\u06F0-\u06F9]/g;
    var singleDigitRegex = /[0-9۰-۹٠-٩\u0660-\u0669\u06F0-\u06F9]/;

    function sanitizeField(el) {
        if (!el) return;
        var curVal = el.value || '';
        if (digitRegex.test(curVal)) {
            el.value = curVal.replace(digitRegex, '');
        }
    }

    fieldIds.forEach(function (id) {
        var el = document.getElementById(id);
        if (!el) return;

        // Clean initial value
        sanitizeField(el);

        // Block digit keystrokes
        el.addEventListener('keydown', function (e) {
            if (e.key && singleDigitRegex.test(e.key)) {
                e.preventDefault();
                return false;
            }
        });

        el.addEventListener('keypress', function (e) {
            var charCode = (typeof e.which === 'number') ? e.which : e.keyCode;
            var charStr = String.fromCharCode(charCode);
            if (singleDigitRegex.test(charStr) || (e.key && singleDigitRegex.test(e.key))) {
                e.preventDefault();
                return false;
            }
        });

        // Instant cleanup on any input (typing, mobile IME, virtual keyboard, autocomplete, drag-drop)
        el.addEventListener('input', function () {
            sanitizeField(this);
        });

        // Intercept paste
        el.addEventListener('paste', function (e) {
            var pasteData = (e.clipboardData || window.clipboardData) ? (e.clipboardData || window.clipboardData).getData('text') : '';
            if (pasteData && digitRegex.test(pasteData)) {
                e.preventDefault();
                var cleaned = pasteData.replace(digitRegex, '');
                if (document.queryCommandSupported && document.queryCommandSupported('insertText')) {
                    document.execCommand('insertText', false, cleaned);
                } else {
                    var start = this.selectionStart || 0;
                    var end = this.selectionEnd || 0;
                    this.value = this.value.substring(0, start) + cleaned + this.value.substring(end);
                    this.selectionStart = this.selectionEnd = start + cleaned.length;
                }
            }
        });

        el.addEventListener('blur', function () {
            sanitizeField(this);
        });
    });

    // Enforce display-only / readonly on Gregorian birth date
    var miladiInput = document.getElementById('txt_birth_date_miladi');
    if (miladiInput) {
        miladiInput.readOnly = true;
        miladiInput.tabIndex = -1;
        miladiInput.addEventListener('keydown', function (e) {
            e.preventDefault();
            return false;
        });
        miladiInput.addEventListener('focus', function () {
            this.blur();
        });
    }

    var ageInput = document.getElementById('lbl_age');
    if (ageInput) {
        ageInput.readOnly = true;
        ageInput.tabIndex = -1;
        ageInput.addEventListener('keydown', function (e) {
            e.preventDefault();
            return false;
        });
        ageInput.addEventListener('focus', function () {
            this.blur();
        });
    }
}

// 6. Full AJAX Form Submission ("agex")
function save_data() {
    if (!check_data()) {
        return;
    }

    var form = document.getElementById('personal-info-form');
    if (!form) return;

    // Sanitize no-digit fields before submitting
    ['txt_location_id', 'txt_father_job', 'txt_job'].forEach(function (id) {
        var el = document.getElementById(id);
        if (el && el.value) {
            el.value = el.value.replace(/[0-9۰-۹٠-٩\u0660-\u0669\u06F0-\u06F9]/g, '');
        }
    });

    // Show Loader
    var loader = document.getElementById('divLoader');
    if (loader) {
        if (loader.parentNode !== document.body) {
            document.body.appendChild(loader);
        }
        loader.style.display = 'flex';
    }

    // Prepare FormData
    var formData = new FormData(form);

    // Ensure profilePhoto file is included
    var fileInput = document.getElementById('FileUpload');
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
        formData.set("profilePhoto", fileInput.files[0]);
        formData.set("FileUpload", fileInput.files[0]);
    }

    // Ensure Shamsi date is sent
    var shamsiVal = (document.getElementById("birth_date_shamsi") ? document.getElementById("birth_date_shamsi").value : "") ||
        (document.getElementById("hidden_birthDate") ? document.getElementById("hidden_birthDate").value : "");
    if (shamsiVal) {
        formData.set("birthDate", shamsiVal);
    }

    fetch("/personal-info", {
        method: "POST",
        body: formData,
        headers: {
            "X-Requested-With": "XMLHttpRequest"
        }
    })
        .then(function (res) { return res.json(); })
        .then(function (response) {
            if (loader) loader.style.display = 'none';

            if (response && (response.success === true || response.errorcode === "0")) {
                var successMsg = response.message || "اطلاعات با موفقیت ذخیره شد.";
                display_alarm2(successMsg, "ثبت اطلاعات", "", 1);

                // Update Profile Photo if returned
                if (response.file_logo) {
                    var docPic = document.getElementById('doc_pic');
                    if (docPic) docPic.src = response.file_logo;
                    var topAvatar = document.getElementById('topbar_user_avatar');
                    if (topAvatar) topAvatar.src = response.file_logo;
                }
            } else {
                var errorMsg = (response && response.message) ? response.message : "در ثبت اطلاعات با خطائی مواجه شده‌اید. لطفا مجددا سعی نمائید.";
                if (response && response.errorcode) {
                    switch (response.errorcode) {
                        case "1": errorMsg = "شما مدت زیادی است که از سیستم استفاده نکرده‌اید. لطفا مجددا وارد شوید."; break;
                        case "2": errorMsg = "کد ملی وارد شده تکراری است!"; break;
                        case "3": errorMsg = "لازم است شما مجددا در سیستم وارد شوید."; break;
                        case "6": errorMsg = response.message || "خطا در بارگذاری تصویر بازیکن."; break;
                        case "10": errorMsg = response.message || "در ثبت اطلاعات با خطائی مواجه شده‌اید. لطفا مجددا سعی نمائید."; break;
                    }
                }
                display_alarm2(errorMsg, "خطا در ثبت اطلاعات", "", 0);
            }
        })
        .catch(function () {
            if (loader) loader.style.display = 'none';
            display_alarm2("در برقراری ارتباط با سرور خطایی رخ داد. لطفا اتصال اینترنت خود را بررسی نموده و مجددا سعی نمایید.", "خطا در برقراری ارتباط", "", 0);
        });
}

// 7. Page Load Listeners
document.addEventListener('DOMContentLoaded', function () {
    var dpInput = document.getElementById('birthDate');
    if (dpInput) {
        dpInput.addEventListener('change', syncBirthDetails);
        var observer = new MutationObserver(syncBirthDetails);
        observer.observe(dpInput, { childList: true, subtree: true, characterData: true });
    }
    var hiddenBirth = document.getElementById('hidden_birthDate');
    if (hiddenBirth) {
        hiddenBirth.addEventListener('change', syncBirthDetails);
    }
    syncBirthDetails();
    setupNoNumbersValidation();

    // Prevent default form submit on personal-info-form
    var form = document.getElementById('personal-info-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            save_data();
            return false;
        });
    }

    // Bind submit buttons (Top Bar for laptop, Sticky Bottom for mobile)
    var topSubmitBtn = document.querySelector('.btn-submit-top');
    if (topSubmitBtn) {
        topSubmitBtn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            save_data();
            return false;
        });
    }

    var stickySubmitBtn = document.querySelector('.sticky-submit-btn');
    if (stickySubmitBtn) {
        stickySubmitBtn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            save_data();
            return false;
        });
    }

    // Keyboard-aware positioning for sticky submit button on mobile devices
    var updateStickySubmitPosition = function () {
        if (window.innerWidth > 768) return;
        var wrapper = document.querySelector('.sticky-submit-wrapper');
        if (!wrapper) return;
        var vv = window.visualViewport;
        if (!vv) return;
        var isKeyboard = (window.innerHeight - vv.height) > 100;
        var bottomNav = document.querySelector('.bottom-nav');
        if (isKeyboard) {
            var h = wrapper.offsetHeight || 65;
            wrapper.style.top = (vv.offsetTop + vv.height - h) + 'px';
            wrapper.style.bottom = 'auto';
            if (bottomNav) bottomNav.style.display = 'none';
        } else {
            wrapper.style.top = 'auto';
            wrapper.style.bottom = '65px';
            if (bottomNav) bottomNav.style.display = '';
        }
    };

    if (window.visualViewport) {
        window.visualViewport.addEventListener('resize', updateStickySubmitPosition);
        window.visualViewport.addEventListener('scroll', updateStickySubmitPosition);
    }
    window.addEventListener('resize', updateStickySubmitPosition);
    window.addEventListener('scroll', updateStickySubmitPosition);
});

;
// Expose personal-info methods globally
window.previewImage = previewImage;
window.save_data = save_data;

/* ===== START: Consolidated UI and Page Controllers (Dashboard, Profile Hub, Personal Info, Layout) ===== */
(function () {
    // 1. Profile Dropdown Menu in Layout
    function closeProfileMenu() {
        var m = document.getElementById('profileMenu');
        var b = document.getElementById('profileMenuBackdrop');
        if (m) {
            m.classList.remove('show');
            m.style.removeProperty('display');
            m.style.removeProperty('opacity');
            m.style.removeProperty('visibility');
            m.style.removeProperty('pointer-events');
            m.style.removeProperty('transform');
            m.style.removeProperty('z-index');
            m.style.display = 'none';
        }
        if (b) {
            b.style.display = 'none';
        }
    }

    function toggleProfileMenu(e) {
        if (e) {
            if (e.stopPropagation) e.stopPropagation();
            if (e.cancelBubble !== undefined) e.cancelBubble = true;
        }
        var m = document.getElementById('profileMenu');
        var b = document.getElementById('profileMenuBackdrop');
        if (!m) return;
        var isVisible = (m.style.display === 'block') || m.classList.contains('show');
        if (!isVisible) {
            m.classList.add('show');
            m.style.setProperty('display', 'block', 'important');
            m.style.setProperty('opacity', '1', 'important');
            m.style.setProperty('visibility', 'visible', 'important');
            m.style.setProperty('pointer-events', 'auto', 'important');
            m.style.setProperty('transform', 'translateY(0)', 'important');
            m.style.setProperty('z-index', '999999', 'important');
            if (b) b.style.display = 'block';
        } else {
            closeProfileMenu();
        }
    }

    window.closeProfileMenu = closeProfileMenu;
    window.toggleProfileMenu = toggleProfileMenu;

    // Direct click trigger on header profile (only if not handled by inline onclick)
    document.addEventListener('click', function (e) {
        var trigger = e.target.closest('#headerProfileTrigger');
        if (trigger) {
            if (e.target.closest('#profileMenu')) {
                return;
            }
            // If inline onclick exists, let it handle it directly
            if (trigger.getAttribute('onclick')) {
                return;
            }
            toggleProfileMenu(e);
        }
    });

    // Backdrop click
    document.addEventListener('click', function (e) {
        if (e.target && e.target.id === 'profileMenuBackdrop') {
            closeProfileMenu();
        }
    });

    // Outside click & touch to close Profile Menu (capture phase)
    window.addEventListener('click', function (e) {
        var m = document.getElementById('profileMenu');
        if (m && ((m.style.display === 'block') || m.classList.contains('show'))) {
            if (!e.target.closest('#headerProfileTrigger') && !e.target.closest('#profileMenu') && !e.target.closest('#profileMenuBackdrop')) {
                closeProfileMenu();
            }
        }
    }, true);

    window.addEventListener('touchstart', function (e) {
        var m = document.getElementById('profileMenu');
        if (m && ((m.style.display === 'block') || m.classList.contains('show'))) {
            if (!e.target.closest('#headerProfileTrigger') && !e.target.closest('#profileMenu') && !e.target.closest('#profileMenuBackdrop')) {
                closeProfileMenu();
            }
        }
    }, { capture: true, passive: true });

    // Profile menu logout link
    document.addEventListener('click', function (e) {
        if (e.target.closest('.profile-menu-logout-link')) {
            e.preventDefault();
            var f = document.getElementById('logoutForm');
            if (f) f.submit();
        }
    });

    // 2. Global Navigation Handler via data-href
    document.addEventListener('click', function (e) {
        var el = e.target.closest('[data-href]');
        if (el) {
            if (e.target.closest('a[href]:not([href="#"]):not([href="javascript:void(0)"])') && e.target.closest('a') !== el) {
                return;
            }
            if (e.target.closest('.btn-credit')) {
                return;
            }
            var href = el.getAttribute('data-href');
            if (href) {
                e.preventDefault();
                e.stopPropagation();
                window.location.href = href;
            }
        }
    });

    // 3. Global Topbar Back Button handling
    var LAYOUT_BACK_MAP = {
        'attendance': '/specialized-hub',
        'bank-info': '/financial-hub',
        'bulletin': '/dashboard',
        'certificate': '/documents',
        'certificates': '/documents',
        'clothing-info': '/profile-hub',
        'club-info': '/profile-hub',
        'contact-info': '/profile-hub',
        'dashboard': '/login',
        'documents': '/profile-hub',
        'financial-hub': '/dashboard',
        'financial-timeline': '/financial-hub',
        'gallery': '/dashboard',
        'insurance': '/specialized-hub',
        'insurance-status': '/specialized-hub',
        'passport-info': '/profile-hub',
        'password': '/profile-hub',
        'personal-info': '/profile-hub',
        'profile-hub': '/dashboard',
        'registration': '/dashboard',
        'registration-history': '/specialized-hub',
        'specialized-hub': '/dashboard',
        'sports-info': '/profile-hub',
        'store': '/dashboard',
        'talent': '/specialized-hub',
        'training-backpack': '/dashboard',
        'verification': '/profile-hub'
    };

    document.addEventListener('click', function (e) {
        var backBtn = e.target.closest('.btn-back-top');
        if (backBtn) {
            var hrefAttr = backBtn.getAttribute('data-href');
            if (hrefAttr) {
                e.preventDefault();
                e.stopPropagation();
                window.location.href = hrefAttr;
                return;
            }
            var onclickAttr = backBtn.getAttribute('onclick');
            if (onclickAttr && onclickAttr.includes('window.location.href')) {
                return;
            }
            e.preventDefault();
            e.stopPropagation();
            var parts = window.location.pathname.split('/').filter(Boolean);
            var curPage = (parts[parts.length - 1] || 'dashboard').replace('.html', '').toLowerCase();
            var dest = LAYOUT_BACK_MAP[curPage] || '/dashboard';
            window.location.href = dest;
        }
    });

    // 4. Dashboard: Club Info Modal Handlers
    document.addEventListener('click', function (e) {
        // Open modal
        if (e.target.closest('.beautiful-modal-btn')) {
            e.preventDefault();
            var modal = document.querySelector('.modal-overlay');
            if (modal) {
                modal.style.display = 'flex';
            }
            return;
        }

        // Close modal
        if (e.target.closest('.modal-close-btn') || e.target.closest('.btn-modal-close-large') || e.target.closest('.btn-modal-cancel')) {
            e.preventDefault();
            var modal = e.target.closest('.modal-overlay') || document.querySelector('.modal-overlay');
            if (modal) {
                modal.style.display = 'none';
            }
            return;
        }

        // Click outside on modal overlay
        if (e.target.classList && e.target.classList.contains('modal-overlay')) {
            e.target.style.display = 'none';
        }
    });

    // 5. Dashboard: Debt Card Interactive Toggle
    document.addEventListener('click', function (e) {
        var card = e.target.closest('.debt-card');
        if (card) {
            if (e.target.closest('.btn-credit')) return;
            var amountSpan = card.querySelector('.amount');
            var icon = card.querySelector('.debt-icon i');
            if (card.classList.contains('status-clear')) {
                card.classList.remove('status-clear');
                card.classList.add('status-due');
                if (amountSpan) amountSpan.textContent = '۱.۵M بدهی';
                if (icon) {
                    icon.className = 'fa fa-exclamation-triangle';
                }
            } else {
                card.classList.remove('status-due');
                card.classList.add('status-clear');
                if (amountSpan) amountSpan.textContent = 'بدون بدهی';
                if (icon) {
                    icon.className = 'fa fa-check';
                }
            }
        }
    });

    // 6. Personal Info: File Upload Click & File Preview
    document.addEventListener('click', function (e) {
        if (e.target.closest('.photo-avatar-box') || e.target.closest('#btn_FileUpload')) {
            e.preventDefault();
            var fi = document.getElementById('FileUpload');
            if (fi) fi.click();
        }
    });

    document.addEventListener('change', function (e) {
        if (e.target && e.target.id === 'FileUpload') {
            if (typeof previewImage === 'function') {
                previewImage(e.target);
            }
        }
    });

    // 7. Personal Info: Numeric input sanitize (National ID, Birth Cert No, Height, Weight)
    document.addEventListener('input', function (e) {
        if (!e.target || !e.target.id) return;
        if (e.target.id === 'txt_international_id' || e.target.id === 'txt_id_no') {
            if (typeof Set_value_numeric === 'function') {
                Set_value_numeric(e.target.id, 10);
            }
        } else if (e.target.id === 'txt_Height' || e.target.id === 'txt_weight') {
            if (typeof Set_value_numeric === 'function') {
                Set_value_numeric(e.target.id, 3);
            }
        }
    });

    // 8. Custom Select Dropdowns
    document.addEventListener('click', function (e) {
        var trigger = e.target.closest('.custom-select-trigger');
        if (trigger) {
            var wrapper = trigger.closest('.custom-select-wrapper');
            if (wrapper) {
                var isOpen = wrapper.classList.toggle('open');
                var group = wrapper.closest('.input-group');
                if (group) {
                    if (isOpen) group.classList.add('has-open-select');
                    else group.classList.remove('has-open-select');
                }
                var d = wrapper.querySelector('.custom-select-dropdown');
                if (d) d.style.display = isOpen ? 'block' : 'none';
            }
        } else {
            document.querySelectorAll('.custom-select-wrapper.open').forEach(function (w) {
                w.classList.remove('open');
                var g = w.closest('.input-group');
                if (g) g.classList.remove('has-open-select');
                var d = w.querySelector('.custom-select-dropdown');
                if (d) d.style.display = 'none';
            });
        }

        var option = e.target.closest('.custom-select-option');
        if (option) {
            var wrapper = option.closest('.custom-select-wrapper');
            if (wrapper) {
                var val = option.getAttribute('data-value');
                var text = option.textContent.trim();
                var triggerEl = wrapper.querySelector('.custom-select-trigger');
                var selectEl = wrapper.querySelector('select');
                if (triggerEl) triggerEl.textContent = text;
                if (selectEl) {
                    selectEl.value = val;
                    selectEl.dispatchEvent(new Event('change', { bubbles: true }));
                }
                wrapper.classList.remove('open');
                var g = wrapper.closest('.input-group');
                if (g) g.classList.remove('has-open-select');
                var d = wrapper.querySelector('.custom-select-dropdown');
                if (d) d.style.display = 'none';
            }
        }
    });

    // 9. Auto-scroll on input focus (Mobile)
    window.addEventListener('focus', function (e) {
        if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
            setTimeout(function () {
                var rect = e.target.getBoundingClientRect();
                var viewHeight = window.innerHeight;
                if (rect.bottom > viewHeight - 120) {
                    window.scrollBy({ top: rect.bottom - (viewHeight - 120), behavior: 'smooth' });
                }
            }, 300);
        }
    }, true);

    // 10. Alarm Box Modal Close delegation
    document.addEventListener('click', function (e) {
        if (e.target.closest('.fs-modal-close') || e.target.closest('#alarm_btn') || e.target.id === 'alaram_box') {
            if (typeof close_alarm_box === 'function') {
                close_alarm_box();
            }
        }
    });

    // 11. Toast auto-dismiss
    setTimeout(function () {
        var toast = document.getElementById('toast-success');
        if (toast) {
            toast.style.opacity = '0';
            toast.style.transition = 'opacity 0.5s ease';
            setTimeout(function () { toast.remove(); }, 500);
        }
    }, 3000);
})();
/* ===== END: Consolidated UI and Page Controllers ===== */


/* ===== END: wwwroot/js/personal-info.js ===== */


/* ===== START: wwwroot/js/site.js ===== */
;﻿// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

;/* ===== END: wwwroot/js/site.js ===== */
