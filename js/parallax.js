// please download it here http://codecanyon.net/user/Sandi to see humanfriendly version and unlock parallax
(function(e) {
    function t(t, r) {
        function B(e) {
            var t = document.getElementById("l");
            t.innerHTML = e
        }
        var i = this,
            s = jQuery.extend({}, {
                width: t.width(),
                height: t.height(),
                enableMouse: !0,
                activateOnClick: !1,
                sensitivityX: .5,
                sensitivityY: .4,
                easingCoefficient: 7,
                autoZCoordinate: !0,
                useCustomZ: !0,
                focusZ: 0
            }, r),
            o = 0,
            u = 0,
            a = 0,
            f = 0,
            l, c, h, p = -1,
            d = -1,
            v = new Array,
            m = new Array,
            g = !1,
            y = !1,
            b, w = function() {
                t.width(s.width), t.height(s.height), l = t.children("div"), c = l.length, h = new Array, b = t.css("position"), b == "static" && t.css("position", "relative"), l.css("padding", "0"), l.css("margin", "0"), l.css("position", "absolute"), E(), _(), S(), x(), b == "static" && t.css("position", "static")
            },
            E = function() {
                var n = t.offset();
                for (var r = 0; r < c; r++) {
                    h[r] = {};
                    var i = parseFloat(jQuery(l[r]).data("z"));
                    isNaN(i) || (h[r].z = i);
                    var s = jQuery(l[r]).data("lock");
                    s != undefined ? (typeof s == "string" && (s = s.replace(/^\s+|\s+$/g, "").toLowerCase()), s != "false" && s != 0 && s != "no" && (h[r].locked = !0)) : h[r].locked = !1;
                    var o = jQuery(l[r]).attr("id");
                    o != undefined && (h[r].id = o);
                    var u = e(l[r]).offset();
                    h[r].x = u.left - n.left, h[r].y = u.top - n.top, O(r, h[r].x, h[r].y)
                }
            },
            S = function() {
                var e = 100,
                    t = -2 * e / c;
                for (var n = 0; n < c; n++) s["autoZCoordinate"] == 1 ? s.useCustomZ && h[n]["z"] != undefined ? h[n].z = h[n].z : (h[n].z = e, e += t) : h[n]["z"] == undefined && (h[n].z = s.focusZ)
            },
            x = function() {
                t.unbind("mousemove", C), t.unbind("mousedown", C), s["enableMouse"] == 1 && (s["activateOnClick"] == 1 ? t.bind("mousedown", C) : t.bind("mousemove", C))
            },
            T = function(e) {
                return e == String("false") || e == String("no") ? !1 : e == String("true") || e == String("yes") ? !0 : parseFloat(e)
            },
            N = function(e) {
                return e != "auto" ? parseFloat(e) : 0
            },
            C = function(n) {
                if (s["sensitivityX"] != 0) {
                    var r = e("html").scrollLeft();
                    r || (r = e("body").scrollLeft());
                    var a = n.clientX - t.offset().left + r;
                    a > s.width ? a = s.width : a < 0 && (a = 0), o = a - s.width / 2
                }
                if (s["sensitivityY"] != 0) {
                    var r = e("html").scrollTop();
                    r || (r = e("body").scrollTop());
                    var f = n.clientY - t.offset().top + r;
                    f > s.height ? f = s.height : f < 0 && (f = 0), u = f - s.height / 2
                }
                B(""), g == 1 && i.stopChain(), k(), H("mouseToRatio", {
                    x: a / s.width,
                    y: f / s.height
                })
            },
            k = function() {
                A(), p == -1 && (p = setInterval(M, 20))
            },
            L = function() {
                clearInterval(p), p = -1
            },
            A = function() {
                d != -1 && (clearTimeout(d), d = -1)
            },
            O = function(e, t, n) {
                l[e].style.left = t + "px", l[e].style.top = n + "px"
            },
            M = function() {
                var e = o - a,
                    t = u - f;
                Math.abs(e) < 1 && Math.abs(t) < 1 && (L(), P()), a += e / (1 + s.easingCoefficient), f += t / (1 + s.easingCoefficient);
                for (var n = 0; n < c; n++) {
                    if (h[n]["locked"] == 1) continue;
                    var r = .01 * (h[n].z - s.focusZ);
                    O(n, h[n].x - a * s.sensitivityX * r, h[n].y - f * s.sensitivityY * r)
                }
            },
            _ = function() {
                for (var t = 0; t < c; t++) e(l[t]).find(">img").hide().one("load", function() {
                    e(this).fadeIn(800, function() {
                        this.style.removeAttribute("filter")
                    })
                }).each(function() {
                    this.complete && this.width > 0 && e(this).trigger("load")
                })
            },
            D = function() {
                if (v.length > 0) {
                    var e = v.shift();
                    return y == 1 && v.push(e), e
                }
                return !1
            },
            P = function() {
                g == 1 && i.startChain(y)
            },
            H = function(t, r) {
                if (m.length > 0)
                    for (var i = 0; i < m.length; i++) e("#" + m[i])[n](t, r)
            };
        this.option = function(e, t) {
            if (typeof e != "undefined") {
                e = e.replace(/^\s+|\s+$/g, "");
                if (e == "enableMouse" || e == "activateOnClick") {
                    if (typeof t == "undefined") return s[e];
                    s[e] = Boolean(t), x(), e == "enableMouse" && P()
                } else if (s[e] != undefined) {
                    if (typeof t == "undefined" || !!isNaN(parseFloat(t))) return s[e];
                    s[e] = parseFloat(t)
                }
            }
        }, this.layer = function(e, t) {
            if (typeof e != "undefined") {
                var n = 0,
                    r = c,
                    i = !isNaN(parseInt(e));
                i && (n = Math.min(parseInt(e), c - 1), r = n + 1);
                for (var s = n; s < r; s++)
                    if (i == 1 || h[s]["id"] == e) {
                        if (typeof t == "undefined") return h[s];
                        t.x != undefined && (h[s].x = t.x), t.y != undefined && (h[s].y = t.y), t.z != undefined && (h[s].z = t.z), t.locked != undefined && (h[s].locked = Boolean(t.locked)), M();
                        break
                    }
            }
        }, this.toggleMouse = function() {
            s.enableMouse = !s.enableMouse, x(), P()
        }, this.pause = function(e) {
            p != -1 ? (L(), e > 0 && (A(), d = setTimeout(k, e))) : g == 1 && (A(), d = setTimeout(P, e))
        }, this.update = function() {
            M()
        }, this.unpause = function() {
            k()
        }, this.triggerPause = function() {
            p != -1 ? L() : k()
        }, this.stop = function() {
            o = a, u = f, P()
        }, this.mouseTo = function(e) {
            var t = o,
                n = u;
            typeof e == "object" && (isNaN(parseFloat(e.x)) || (t = e.x - s.width / 2), isNaN(parseFloat(e.y)) || (n = e.y - s.height / 2)), o = t, u = n, k()
        }, this.mouseToRatio = function(e) {
            o = (e.x - .5) * s.width, u = (e.y - .5) * s.height, k()
        }, this.mouseToRandom = function() {
            o = (.5 - Math.random()) * s.width, u = (.5 - Math.random()) * s.height, k()
        }, this.reset = function() {
            o = 0, u = 0, k()
        }, this.centerTo = function(e) {
            var t = o,
                n = u;
            if (typeof e == "object" && typeof e.id != "undefined" && e.id != "")
                for (var r = 0; r < c; r++)
                    if (h[r]["id"] == e.id) {
                        var i = .01 * (h[r].z - s.focusZ);
                        if (i != 0) {
                            var a = 1,
                                f = 1,
                                p = 0,
                                d = 0;
                            typeof e.align != "undefined" && e.align != "" && (e.align = e.align.toLowerCase(), e.align.indexOf("l") != -1 ? a = 0 : e.align.indexOf("r") != -1 && (a = 2), e.align.indexOf("t") != -1 ? f = 0 : e.align.indexOf("b") != -1 && (f = 2)), isNaN(parseFloat(e.offx)) || (p = parseFloat(e.offx)), isNaN(parseFloat(e.offy)) || (d = parseFloat(e.offy)), s["sensitivityX"] != 0 && (t = (h[r].x - p - .5 * (s.width - a * jQuery(l[r]).width())) / (i * s.sensitivityX)), s["sensitivityY"] != 0 && (n = (h[r].y - d - .5 * (s.height - f * jQuery(l[r]).height())) / (i * s.sensitivityY))
                        }
                        break
                    } o = t, u = n, k()
        }, this.addToChain = function() {
            arguments[0] != undefined && (arguments[1] != undefined ? v.push({
                method: arguments[0],
                parameters: arguments[1]
            }) : v.push({
                method: arguments[0]
            }))
        }, this.clearChain = function() {
            v = []
        }, this.startChain = function(e) {
            y = Boolean(e), g = !0, action = D(), action != 0 ? action["parameters"] != undefined ? i[action.method](action.parameters) : i[action.method]() : g = !1
        }, this.stopChain = function() {
            g = !1, A(), p != -1 && L()
        }, this.linkWith = function() {
            var e = Array.prototype.slice.apply(arguments);
            m.push(e)
        }, this.resetLinks = function() {
            m = []
        }, w()
    }
    var n = "parallax";
    e.fn[n] = function(r) {
        var i = arguments,
            s, o;
        if (this.length == 0) return !1;
        s = e(this), o = s.data(n);
        if (!o) {
            if (typeof r == "object" || !r) return s.data(n, new t(s, r))
        } else if (o[r]) return o[r].apply(this, Array.prototype.slice.call(i, 1))
    }
})(jQuery)