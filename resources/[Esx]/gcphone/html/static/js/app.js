webpackJsonp([0], [, , , , , , function(t, e, n) {
    function s(t) {
        n(163)
    }
    var o = n(0)(n(100), n(217), s, "data-v-3a8bc553", null);
    t.exports = o.exports
}, function(t, e, n) {
    "use strict";
    var s = n(47),
        o = n.n(s),
        a = n(17),
        i = n(200),
        r = n.n(i);
    e.a = {
        CreateModal: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return new o.a(function(e, n) {
                var s = new(a.a.extend(r.a))({
                    el: document.createElement("div"),
                    propsData: t
                });
                window.DDD = s, document.querySelector("#app").appendChild(s.$el), s.$on("select", function(t) {
                    e(t), s.$el.parentNode.removeChild(s.$el), s.$destroy()
                }), s.$on("cancel", function() {
                    e({
                        title: "cancel"
                    }), s.$el.parentNode.removeChild(s.$el), s.$destroy()
                })
            })
        }
    }
}, , , , , function(t, e, n) {
    "use strict";
    var s = n(2),
        o = n.n(s),
        a = n(9),
        i = n.n(a),
        r = n(24),
        c = n.n(r),
        u = n(8),
        l = n.n(u),
        h = n(48),
        p = n.n(h),
        f = n(49),
        d = n.n(f),
        m = n(30),
        v = n(69),
        g = !1,
        b = function() {
            function t() {
                var e = this;
                p()(this, t), window.addEventListener("message", function(t) {
                    var n = t.data.event;
                    void 0 !== n && "function" == typeof e["on" + n] ? e["on" + n](t.data) : void 0 !== t.data.show && m.a.commit("SET_PHONE_VISIBILITY", t.data.show)
                }), this.config = null, this.voiceRTC = null
            }
            return d()(t, [{
                key: "post",
                value: function() {
                    function t(t, n) {
                        return e.apply(this, arguments)
                    }
                    var e = l()(i.a.mark(function t(e, n) {
                        var s, o;
                        return i.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return s = void 0 === n ? "{}" : c()(n), t.next = 3, window.jQuery.post("http://gcphone/" + e, s);
                                case 3:
                                    return o = t.sent, t.abrupt("return", JSON.parse(o));
                                case 5:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "log",
                value: function() {
                    function t() {
                        return e.apply(this, arguments)
                    }
                    var e = l()(i.a.mark(function t() {
                        for (var e = arguments.length, n = Array(e), s = 0; s < e; s++) n[s] = arguments[s];
                        var o;
                        return i.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", this.post("log", n));
                                case 4:
                                    return t.abrupt("return", (o = console).log.apply(o, n));
                                case 5:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "sendMessage",
                value: function() {
                    function t(t, n) {
                        return e.apply(this, arguments)
                    }
                    var e = l()(i.a.mark(function t(e, n) {
                        return i.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", this.post("sendMessage", {
                                        phoneNumber: e,
                                        message: n
                                    }));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "deleteMessage",
                value: function() {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    var e = l()(i.a.mark(function t(e) {
                        return i.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", this.post("deleteMessage", {
                                        id: e
                                    }));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "deleteMessagesNumber",
                value: function() {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    var e = l()(i.a.mark(function t(e) {
                        return i.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", this.post("deleteMessageNumber", {
                                        number: e
                                    }));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "deleteAllMessages",
                value: function() {
                    function t() {
                        return e.apply(this, arguments)
                    }
                    var e = l()(i.a.mark(function t() {
                        return i.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", this.post("deleteAllMessage"));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "setMessageRead",
                value: function() {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    var e = l()(i.a.mark(function t(e) {
                        return i.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", this.post("setReadMessageNumber", {
                                        number: e
                                    }));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "updateContact",
                value: function() {
                    function t(t, n, s) {
                        return e.apply(this, arguments)
                    }
                    var e = l()(i.a.mark(function t(e, n, s) {
                        return i.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", this.post("updateContact", {
                                        id: e,
                                        display: n,
                                        phoneNumber: s
                                    }));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "addContact",
                value: function() {
                    function t(t, n) {
                        return e.apply(this, arguments)
                    }
                    var e = l()(i.a.mark(function t(e, n) {
                        return i.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", this.post("addContact", {
                                        display: e,
                                        phoneNumber: n
                                    }));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "deleteContact",
                value: function() {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    var e = l()(i.a.mark(function t(e) {
                        return i.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", this.post("deleteContact", {
                                        id: e
                                    }));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "appelsDeleteHistorique",
                value: function() {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    var e = l()(i.a.mark(function t(e) {
                        return i.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", this.post("appelsDeleteHistorique", {
                                        numero: e
                                    }));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "appelsDeleteAllHistorique",
                value: function() {
                    function t() {
                        return e.apply(this, arguments)
                    }
                    var e = l()(i.a.mark(function t() {
                        return i.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", this.post("appelsDeleteAllHistorique"));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "closePhone",
                value: function() {
                    function t() {
                        return e.apply(this, arguments)
                    }
                    var e = l()(i.a.mark(function t() {
                        return i.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", this.post("closePhone"));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "setGPS",
                value: function() {
                    function t(t, n) {
                        return e.apply(this, arguments)
                    }
                    var e = l()(i.a.mark(function t(e, n) {
                        return i.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", this.post("setGPS", {
                                        x: e,
                                        y: n
                                    }));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "takePhoto",
                value: function() {
                    function t() {
                        return e.apply(this, arguments)
                    }
                    var e = l()(i.a.mark(function t() {
                        return i.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", this.post("takePhoto"));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "getReponseText",
                value: function() {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    var e = l()(i.a.mark(function t(e) {
                        return i.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", this.post("reponseText", e || {}));
                                case 4:
                                    return t.abrupt("return", {
                                        text: window.prompt()
                                    });
                                case 5:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "callEvent",
                value: function() {
                    function t(t, n) {
                        return e.apply(this, arguments)
                    }
                    var e = l()(i.a.mark(function t(e, n) {
                        return i.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", this.post("callEvent", {
                                        eventName: e,
                                        data: n
                                    }));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "deleteALL",
                value: function() {
                    function t() {
                        return e.apply(this, arguments)
                    }
                    var e = l()(i.a.mark(function t() {
                        return i.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return localStorage.clear(), console.log("tchatReset"), m.a.dispatch("tchatReset"), console.log("resetPhone"), m.a.dispatch("resetPhone"), console.log("resetMessage"), m.a.dispatch("resetMessage"), console.log("resetContact"), m.a.dispatch("resetContact"), console.log("resetBourse"), m.a.dispatch("resetBourse"), console.log("resetAppels"), m.a.dispatch("resetAppels"), console.log("event: deleteALL"), t.abrupt("return", this.post("deleteALL"));
                                case 15:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "getConfig",
                value: function() {
                    function t() {
                        return e.apply(this, arguments)
                    }
                    var e = l()(i.a.mark(function t() {
                        var e;
                        return i.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (null !== this.config) {
                                        t.next = 8;
                                        break
                                    }
                                    return t.next = 3, window.jQuery.get("/html/static/config/config.json");
                                case 3:
                                    e = t.sent, this.config = JSON.parse(e), !0 === this.config.useWebRTCVocal && (this.voiceRTC = new v.a(this.config.RTCConfig), g = !0), console.log("JS USE RTC", this.config.useWebRTCVocal), this.notififyUseRTC(this.config.useWebRTCVocal);
                                case 8:
                                    return t.abrupt("return", this.config);
                                case 9:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "onsetEnableApp",
                value: function(t) {
                    m.a.dispatch("setEnableApp", t)
                }
            }, {
                key: "tchatGetMessagesChannel",
                value: function() {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    var e = l()(i.a.mark(function t(e) {
                        return i.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    this.post("tchat_getChannel", {
                                        channel: e
                                    });
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "tchatSendMessage",
                value: function() {
                    function t(t, n) {
                        return e.apply(this, arguments)
                    }
                    var e = l()(i.a.mark(function t(e, n) {
                        return i.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    this.post("tchat_addMessage", {
                                        channel: e,
                                        message: n
                                    });
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "onupdateMyPhoneNumber",
                value: function(t) {
                    m.a.commit("SET_MY_PHONE_NUMBER", t.myPhoneNumber)
                }
            }, {
                key: "onupdateMessages",
                value: function(t) {
                    m.a.commit("SET_MESSAGES", t.messages)
                }
            }, {
                key: "onnewMessage",
                value: function(t) {
                    m.a.commit("ADD_MESSAGE", t.message)
                }
            }, {
                key: "onupdateContacts",
                value: function(t) {
                    m.a.commit("SET_CONTACTS", t.contacts)
                }
            }, {
                key: "onhistoriqueCall",
                value: function(t) {
                    m.a.commit("SET_APPELS_HISTORIQUE", t.historique)
                }
            }, {
                key: "onupdateBankbalance",
                value: function(t) {
                    m.a.commit("SET_BANK_AMONT", t.banking)
                }
            }, {
                key: "onupdateBourse",
                value: function(t) {
                    m.a.commit("SET_BOURSE_INFO", t.bourse)
                }
            }, {
                key: "startCall",
                value: function() {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    var e = l()(i.a.mark(function t(e) {
                        var n, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                        return i.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (!0 !== g) {
                                        t.next = 7;
                                        break
                                    }
                                    return t.next = 3, this.voiceRTC.prepareCall();
                                case 3:
                                    return n = t.sent, t.abrupt("return", this.post("startCall", {
                                        numero: e,
                                        rtcOffer: n,
                                        extraData: s
                                    }));
                                case 7:
                                    return t.abrupt("return", this.post("startCall", {
                                        numero: e,
                                        extraData: s
                                    }));
                                case 8:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "acceptCall",
                value: function() {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    var e = l()(i.a.mark(function t(e) {
                        var n;
                        return i.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (!0 !== g) {
                                        t.next = 7;
                                        break
                                    }
                                    return t.next = 3, this.voiceRTC.acceptCall(e);
                                case 3:
                                    return n = t.sent, t.abrupt("return", this.post("acceptCall", {
                                        infoCall: e,
                                        rtcAnswer: n
                                    }));
                                case 7:
                                    return t.abrupt("return", this.post("acceptCall", {
                                        infoCall: e
                                    }));
                                case 8:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "rejectCall",
                value: function() {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    var e = l()(i.a.mark(function t(e) {
                        return i.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", this.post("rejectCall", {
                                        infoCall: e
                                    }));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "notififyUseRTC",
                value: function() {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    var e = l()(i.a.mark(function t(e) {
                        return i.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", this.post("notififyUseRTC", e));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "onwaitingCall",
                value: function(t) {
                    m.a.commit("SET_APPELS_INFO_IF_EMPTY", o()({}, t.infoCall, {
                        initiator: t.initiator
                    }))
                }
            }, {
                key: "onacceptCall",
                value: function(t) {
                    var e = this;
                    !0 === g && (!0 === t.initiator && this.voiceRTC.onReceiveAnswer(t.infoCall.rtcAnswer), this.voiceRTC.addEventListener("onCandidate", function(n) {
                        e.post("onCandidates", {
                            id: t.infoCall.id,
                            candidates: n
                        })
                    })), m.a.commit("SET_APPELS_INFO_IS_ACCEPTS", !0)
                }
            }, {
                key: "oncandidatesAvailable",
                value: function(t) {
                    this.voiceRTC.addIceCandidates(t.candidates)
                }
            }, {
                key: "onrejectCall",
                value: function(t) {
                    null !== this.voiceRTC && this.voiceRTC.close(), m.a.commit("SET_APPELS_INFO", null)
                }
            }, {
                key: "ontchat_receive",
                value: function(t) {
                    m.a.dispatch("tchatAddMessage", t)
                }
            }, {
                key: "ontchat_channel",
                value: function(t) {
                    m.a.commit("TCHAT_SET_MESSAGES", t)
                }
            }, {
                key: "onautoStartCall",
                value: function(t) {
                    this.startCall(t.number, t.extraData)
                }
            }, {
                key: "onautoAcceptCall",
                value: function(t) {
                    m.a.commit("SET_APPELS_INFO", t.infoCall), this.acceptCall(t.infoCall)
                }
            }]), t
        }(),
        y = new b;
    e.a = y
}, , , , , , function(t, e, n) {
    "use strict";

    function s(t) {
        var e = t.match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);
        return null !== e ? {
            red: parseInt(e[1], 10),
            green: parseInt(e[2], 10),
            blue: parseInt(e[3], 10)
        } : (e = t.match(/^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/), null !== e ? {
            red: parseInt(e[1], 16),
            green: parseInt(e[2], 16),
            blue: parseInt(e[3], 16)
        } : void 0)
    }

    function o(t, e) {
        return t.reduce(function(t, n) {
            return (t[n[e]] = t[n[e]] || []).push(n), t
        }, {})
    }

    function a(t) {
        if (0 === t.length || "#" === t[0]) return "#D32F2F";
        var e = t.split("").reduce(function(t, e) {
            return (t << 5) - t + e.charCodeAt(0) | 0
        }, 0);
        return r.a.getters.colors[Math.abs(e) % r.a.getters.colors.length]
    }

    function i(t) {
        var e = s(t);
        return void 0 === e ? "#000000" : (console.log(e), .299 * e.red + .587 * e.green + .114 * e.blue > 186 ? "rgba(0, 0, 0, 0.87)" : "#FFFFFF")
    }
    e.b = o, e.a = a, e.c = i;
    var r = n(30)
}, , , , function(t, e, n) {
    function s(t) {
        n(161)
    }
    var o = n(0)(n(92), n(215), s, "data-v-2804e189", null);
    t.exports = o.exports
}, function(t, e, n) {
    function s(t) {
        n(176)
    }
    var o = n(0)(n(93), n(230), s, "data-v-def349b2", null);
    t.exports = o.exports
}, , , , , , , function(t, e, n) {
    "use strict";
    var s = n(17),
        o = n(1),
        a = n(76),
        i = n(74),
        r = n(75),
        c = n(71),
        u = n(72),
        l = n(73),
        h = n(77);
    s.a.use(o.c), e.a = new o.c.Store({
        modules: {
            phone: a.a,
            contacts: i.a,
            messages: r.a,
            appels: c.a,
            bank: u.a,
            bourse: l.a,
            tchat: h.a
        },
        strict: !0
    })
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
    "use strict";
    var s = n(17),
        o = n(232),
        a = n(195),
        i = n.n(a),
        r = n(196),
        c = n.n(r),
        u = n(193),
        l = n.n(u),
        h = n(192),
        p = n.n(h),
        f = n(199),
        d = n.n(f),
        m = n(198),
        v = n.n(m),
        g = n(197),
        b = n.n(g),
        y = n(184),
        C = n.n(y),
        _ = n(185),
        k = n.n(_),
        $ = n(188),
        w = n.n($),
        S = n(205),
        A = n.n(S),
        E = n(203),
        x = n.n(E),
        U = n(204),
        I = n.n(U),
        M = n(201),
        T = n.n(M),
        P = n(190),
        R = n.n(P),
        D = n(191),
        N = n.n(D),
        L = n(202),
        B = n.n(L),
        F = n(183),
        O = n.n(F);
    s.a.use(o.a), e.a = new o.a({
        routes: [{
            path: "/",
            name: "home",
            component: i.a
        }, {
            path: "/menu",
            name: "menu",
            component: c.a
        }, {
            path: "/contacts",
            name: "contacts",
            component: l.a
        }, {
            path: "/contact/:id",
            name: "contacts.view",
            component: p.a
        }, {
            path: "/messages",
            name: "messages",
            component: d.a
        }, {
            path: "/messages/select",
            name: "messages.selectcontact",
            component: b.a
        }, {
            path: "/messages/:number/:display",
            name: "messages.view",
            component: v.a
        }, {
            path: "/bourse",
            name: "bourse",
            component: N.a
        }, {
            path: "/bank",
            name: "bank",
            component: R.a
        }, {
            path: "/photo",
            name: "photo",
            component: B.a
        }, {
            path: "/paramtre",
            name: "parametre",
            component: T.a
        }, {
            path: "/appels",
            name: "appels",
            component: C.a
        }, {
            path: "/appelsactive",
            name: "appels.active",
            component: k.a
        }, {
            path: "/appelsNumber",
            name: "appels.number",
            component: w.a
        }, {
            path: "/tchatsplash",
            name: "tchat",
            component: A.a
        }, {
            path: "/tchat",
            name: "tchat.channel",
            component: x.a
        }, {
            path: "/tchat/:channel",
            name: "tchat.channel.show",
            component: I.a
        }, {
            path: "/9gag",
            name: "9gag",
            component: O.a
        }, {
            path: "*",
            redirect: "/"
        }]
    })
}, function(t, e, n) {
    function s(t) {
        n(170)
    }
    var o = n(0)(n(78), n(224), s, null, null);
    t.exports = o.exports
}, , function(t, e) {
    t.exports = ["just now", ["%s second ago", "%s seconds ago"],
        ["%s minute ago", "%s minutes ago"],
        ["%s hour ago", "%s hours ago"],
        ["%s day ago", "%s days ago"],
        ["%s week ago", "%s weeks ago"],
        ["%s month ago", "%s months ago"],
        ["%s year ago", "%s years ago"]
    ]
}, function(t, e, n) {
    "use strict";
    var s = n(106),
        o = n.n(s),
        a = n(24),
        i = n.n(a),
        r = n(9),
        c = n.n(r),
        u = n(8),
        l = n.n(u),
        h = n(48),
        p = n.n(h),
        f = n(49),
        d = n.n(f),
        m = {
            video: !1,
            audio: !0
        },
        v = function() {
            function t(e) {
                p()(this, t), this.myPeerConnection = null, this.candidates = [], this.listener = {}, this.myCandidates = [], this.audio = new Audio, this.offer = null, this.answer = null, this.initiator = null, this.RTCConfig = e
            }
            return d()(t, [{
                key: "init",
                value: function() {
                    function t() {
                        return e.apply(this, arguments)
                    }
                    var e = l()(c.a.mark(function t() {
                        return c.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, this.close();
                                case 2:
                                    return this.myPeerConnection = new RTCPeerConnection(this.RTCConfig), t.next = 5, navigator.mediaDevices.getUserMedia(m);
                                case 5:
                                    this.stream = t.sent;
                                case 6:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "newConnection",
                value: function() {
                    this.close(), this.candidates = [], this.myCandidates = [], this.listener = {}, this.offer = null, this.answer = null, this.initiator = null, this.myPeerConnection = new RTCPeerConnection(this.RTCConfig), this.myPeerConnection.onaddstream = this.onaddstream.bind(this)
                }
            }, {
                key: "close",
                value: function() {
                    null !== this.myPeerConnection && this.myPeerConnection.close(), this.myPeerConnection = null
                }
            }, {
                key: "prepareCall",
                value: function() {
                    function t() {
                        return e.apply(this, arguments)
                    }
                    var e = l()(c.a.mark(function t() {
                        return c.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, this.init();
                                case 2:
                                    return this.newConnection(), this.initiator = !0, this.myPeerConnection.addStream(this.stream), this.myPeerConnection.onicecandidate = this.onicecandidate.bind(this), t.next = 8, this.myPeerConnection.createOffer();
                                case 8:
                                    return this.offer = t.sent, this.myPeerConnection.setLocalDescription(this.offer), t.abrupt("return", btoa(i()(this.offer)));
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "acceptCall",
                value: function() {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    var e = l()(c.a.mark(function t(e) {
                        var n;
                        return c.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return console.log("JS acceptCall 1"), console.log(e.rtcOffer), n = JSON.parse(atob(e.rtcOffer)), console.log("JS acceptCall 1"), this.newConnection(), console.log("JS acceptCall 1"), this.initiator = !1, console.log("JS acceptCall 1"), t.next = 10, navigator.mediaDevices.getUserMedia(m);
                                case 10:
                                    return this.stream = t.sent, console.log("JS acceptCall 1"), this.myPeerConnection.onicecandidate = this.onicecandidate.bind(this), console.log("JS acceptCall 1"), this.myPeerConnection.addStream(this.stream), console.log("JS acceptCall 1"), this.offer = new RTCSessionDescription(n), console.log("JS acceptCall 1"), this.myPeerConnection.setRemoteDescription(this.offer), console.log("JS acceptCall 1"), t.next = 22, this.myPeerConnection.createAnswer();
                                case 22:
                                    return this.answer = t.sent, console.log("JS acceptCall 1"), this.myPeerConnection.setLocalDescription(this.answer), console.log("JS acceptCall 1"), t.abrupt("return", btoa(i()(this.answer)));
                                case 27:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "onReceiveAnswer",
                value: function() {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    var e = l()(c.a.mark(function t(e) {
                        var n;
                        return c.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    n = JSON.parse(atob(e)), this.answer = new RTCSessionDescription(n), this.myPeerConnection.setRemoteDescription(this.answer);
                                case 3:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "onicecandidate",
                value: function(t) {
                    if (void 0 !== t.candidate && (this.myCandidates.push(t.candidate), void 0 !== this.listener.onCandidate)) {
                        var e = this.getAvailableCandidates(),
                            n = !0,
                            s = !1,
                            a = void 0;
                        try {
                            for (var i, r = o()(this.listener.onCandidate); !(n = (i = r.next()).done); n = !0) {
                                (0, i.value)(e)
                            }
                        } catch (t) {
                            s = !0, a = t
                        } finally {
                            try {
                                !n && r.return && r.return()
                            } finally {
                                if (s) throw a
                            }
                        }
                    }
                }
            }, {
                key: "getAvailableCandidates",
                value: function() {
                    var t = btoa(i()(this.myCandidates));
                    return this.myCandidates = [], t
                }
            }, {
                key: "addIceCandidates",
                value: function(t) {
                    var e = this;
                    if (console.log(t), null !== this.myPeerConnection) {
                        JSON.parse(atob(t)).forEach(function(t) {
                            null !== t && (console.log("CA " + i()(t)), e.myPeerConnection.addIceCandidate(t))
                        })
                    }
                }
            }, {
                key: "addEventListener",
                value: function(t, e) {
                    "onCandidate" === t && (void 0 === this.listener[t] && (this.listener[t] = []), this.listener[t].push(e), e(this.getAvailableCandidates()))
                }
            }, {
                key: "onaddstream",
                value: function(t) {
                    this.audio.srcObject = t.stream, this.audio.play()
                }
            }]), t
        }();
    l()(c.a.mark(function t() {
        return c.a.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
                case 0:
                case "end":
                    return t.stop()
            }
        }, t, this)
    }))(), e.a = v
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(17),
        o = n(66),
        a = n.n(o),
        i = n(65),
        r = n(30),
        c = n(67),
        u = n.n(c),
        l = n(12);
    s.a.use(u.a, {
        name: "timeago",
        locale: "fr-FR",
        locales: {
            "fr-FR": n(68)
        }
    }), s.a.config.productionTip = !1, s.a.prototype.$bus = new s.a, s.a.prototype.$phoneAPI = l.a, window.DDD = r.a, new s.a({
        el: "#app",
        store: r.a,
        router: i.a,
        render: function(t) {
            return t(a.a)
        }
    })
}, function(t, e, n) {
    "use strict";
    var s = n(31),
        o = n.n(s),
        a = n(12),
        i = {
            appelsHistorique: [],
            appelsInfo: null
        },
        r = {
            appelsHistorique: function(t) {
                return t.appelsHistorique
            },
            appelsInfo: function(t) {
                return t.appelsInfo
            },
            appelsDisplayName: function(t, e) {
                if (!0 === t.appelsInfo.hidden) return "Appels masqué";
                var n = e.appelsDisplayNumber;
                return (e.contacts.find(function(t) {
                    return t.number === n
                }) || {}).display || "Inconnu"
            },
            appelsDisplayNumber: function(t, e) {
                return !0 === e.isInitiatorCall ? t.appelsInfo.receiver_num : !0 === t.appelsInfo.hidden ? "###-####" : t.appelsInfo.transmitter_num
            },
            isInitiatorCall: function(t, e) {
                return null !== t.appelsInfo && !0 === t.appelsInfo.initiator
            }
        },
        c = {
            startCall: function(t, e) {
                var n = (t.commit, e.numero);
                a.a.startCall(n)
            },
            acceptCall: function(t) {
                var e = t.state;
                a.a.acceptCall(e.appelsInfo)
            },
            rejectCall: function(t) {
                var e = t.state;
                a.a.rejectCall(e.appelsInfo)
            },
            ignoreCall: function(t) {
                (0, t.commit)("SET_APPELS_INFO", null)
            },
            appelsDeleteHistorique: function(t, e) {
                var n = t.commit,
                    s = t.state,
                    o = e.numero;
                a.a.appelsDeleteHistorique(o), n("SET_APPELS_HISTORIQUE", s.appelsHistorique.filter(function(t) {
                    return t.num !== o
                }))
            },
            appelsDeleteAllHistorique: function(t) {
                var e = t.commit;
                a.a.appelsDeleteAllHistorique(), e("SET_APPELS_HISTORIQUE", [])
            },
            resetAppels: function(t) {
                var e = t.commit;
                e("SET_APPELS_HISTORIQUE", []), e("SET_APPELS_INFO", null)
            }
        },
        u = {
            SET_APPELS_HISTORIQUE: function(t, e) {
                t.appelsHistorique = e
            },
            SET_APPELS_INFO_IF_EMPTY: function(t, e) {
                null === t.appelsInfo && (t.appelsInfo = e)
            },
            SET_APPELS_INFO: function(t, e) {
                t.appelsInfo = e
            },
            SET_APPELS_INFO_IS_ACCEPTS: function(t, e) {
                null !== t.appelsInfo && (t.appelsInfo = o()({}, t.appelsInfo, {
                    is_accepts: e
                }))
            }
        };
    e.a = {
        state: i,
        getters: r,
        actions: c,
        mutations: u
    }
}, function(t, e, n) {
    "use strict";
    var s = {
            bankAmont: "0"
        },
        o = {
            bankAmont: function(t) {
                return t.bankAmont
            }
        },
        a = {},
        i = {
            SET_BANK_AMONT: function(t, e) {
                t.bankAmont = e
            }
        };
    e.a = {
        state: s,
        getters: o,
        actions: a,
        mutations: i
    }
}, function(t, e, n) {
    "use strict";
    var s = {
            bourseInfo: []
        },
        o = {
            bourseInfo: function(t) {
                return t.bourseInfo
            }
        },
        a = {
            resetBourse: function(t) {
                (0, t.commit)("SET_BOURSE_INFO", [])
            }
        },
        i = {
            SET_BOURSE_INFO: function(t, e) {
                t.bourseInfo = e
            }
        };
    e.a = {
        state: s,
        getters: o,
        actions: a,
        mutations: i
    }
}, function(t, e, n) {
    "use strict";
    var s = n(12),
        o = {
            contacts: []
        },
        a = {
            contacts: function(t) {
                return t.contacts
            }
        },
        i = {
            updateContact: function(t, e) {
                var n = e.id,
                    o = e.display,
                    a = e.number;
                s.a.updateContact(n, o, a)
            },
            addContact: function(t, e) {
                var n = e.display,
                    o = e.number;
                s.a.addContact(n, o)
            },
            deleteContact: function(t, e) {
                var n = e.id;
                s.a.deleteContact(n)
            },
            resetContact: function(t) {
                (0, t.commit)("SET_CONTACTS", [])
            }
        },
        r = {
            SET_CONTACTS: function(t, e) {
                t.contacts = e.sort(function(t, e) {
                    return t.display.localeCompare(e.display)
                })
            }
        };
    e.a = {
        state: o,
        getters: a,
        actions: i,
        mutations: r
    }
}, function(t, e, n) {
    "use strict";
    var s = n(12),
        o = {
            messages: []
        },
        a = {
            messages: function(t) {
                return t.messages
            },
            nbMessagesUnread: function(t) {
                return t.messages.filter(function(t) {
                    return 1 !== t.isRead
                }).length
            }
        },
        i = {
            setMessages: function(t, e) {
                (0, t.commit)("SET_MESSAGES", e)
            },
            sendMessage: function(t, e) {
                var n = (t.commit, e.phoneNumber),
                    o = e.message;
                s.a.sendMessage(n, o)
            },
            deleteMessage: function(t, e) {
                var n = (t.commit, e.id);
                s.a.deleteMessage(n)
            },
            deleteMessagesNumber: function(t, e) {
                var n = t.commit,
                    o = t.state,
                    a = e.num;
                s.a.deleteMessagesNumber(a), n("SET_MESSAGES", o.messages.filter(function(t) {
                    return t.transmitter !== a
                }))
            },
            deleteAllMessages: function(t) {
                var e = t.commit;
                s.a.deleteAllMessages(), e("SET_MESSAGES", [])
            },
            setMessageRead: function(t, e) {
                var n = t.commit;
                s.a.setMessageRead(e), n("SET_MESSAGES_READ", {
                    num: e
                })
            },
            resetMessage: function(t) {
                (0, t.commit)("SET_MESSAGES", [])
            }
        },
        r = {
            SET_MESSAGES: function(t, e) {
                t.messages = e
            },
            ADD_MESSAGE: function(t, e) {
                t.messages.push(e)
            },
            SET_MESSAGES_READ: function(t, e) {
                for (var n = e.num, s = 0; s < t.messages.length; s += 1) t.messages[s].transmitter === n && 1 !== t.messages[s].isRead && (t.messages[s].isRead = 1)
            }
        };
    e.a = {
        state: o,
        getters: a,
        actions: i,
        mutations: r
    }
}, function(t, e, n) {
    "use strict";
    var s = n(24),
        o = n.n(s),
        a = n(9),
        i = n.n(a),
        r = n(8),
        c = n.n(r),
        u = n(17),
        l = n(12),
        h = {
            show: !1,
            myPhoneNumber: "###-####",
            background: JSON.parse(window.localStorage.gc_background || null),
            coque: JSON.parse(window.localStorage.gc_coque || null),
            zoom: window.localStorage.gc_zoom || "100%",
            volume: parseFloat(window.localStorage.gc_volume) || 1,
            config: {
                reseau: "Gannon",
                useFormatNumberFrance: !1,
                apps: [],
                themeColor: "#2A56C6",
                colors: ["#2A56C6"]
            }
        },
        p = {
            show: function(t) {
                return t.show
            },
            myPhoneNumber: function(t) {
                return t.myPhoneNumber
            },
            volume: function(t) {
                return t.volume
            },
            background: function(t) {
                var e = t.background,
                    n = t.config;
                return null === e ? void 0 !== n.background_default ? n.background_default : {
                    label: "Default",
                    value: "default.jpg"
                } : e
            },
            backgroundLabel: function(t, e) {
                return e.background.label
            },
            backgroundURL: function(t, e) {
                return !0 === e.background.value.startsWith("http") ? e.background.value : "/html/static/img/background/" + e.background.value
            },
            coque: function(t) {
                var e = t.coque,
                    n = t.config;
                return null === e ? n && void 0 !== n.coque_default ? n.coque_default : {
                    label: "base",
                    value: "base.jpg"
                } : e
            },
            coqueLabel: function(t, e) {
                return e.coque.label
            },
            zoom: function(t) {
                return t.zoom
            },
            config: function(t) {
                return t.config
            },
            useFormatNumberFrance: function(t) {
                return t.config.useFormatNumberFrance
            },
            themeColor: function(t) {
                return t.config.themeColor
            },
            colors: function(t) {
                return t.config.colors
            },
            Apps: function(t, e) {
                return t.config.apps.filter(function(t) {
                    return !1 !== t.enabled
                }).map(function(t) {
                    return void 0 !== t.puceRef && (t.puce = e[t.puceRef]), t
                })
            },
            AppsHome: function(t, e) {
                return e.Apps.filter(function(t) {
                    return !0 === t.inHomePage
                })
            }
        },
        f = {
            loadConfig: function(t) {
                var e = this,
                    n = t.commit;
                return c()(i.a.mark(function t() {
                    var s;
                    return i.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, l.a.getConfig();
                            case 2:
                                s = t.sent, n("SET_CONFIG", s);
                            case 4:
                            case "end":
                                return t.stop()
                        }
                    }, t, e)
                }))()
            },
            setEnableApp: function(t, e) {
                var n = t.commit,
                    s = (t.state, e.appName),
                    o = e.enable;
                n("SET_APP_ENABLE", {
                    appName: s,
                    enable: void 0 === o || o
                })
            },
            setVisibility: function(t, e) {
                (0, t.commit)("SET_PHONE_VISIBILITY", e)
            },
            setZoon: function(t, e) {
                var n = t.commit;
                window.localStorage.gc_zoom = e, n("SET_ZOOM", e)
            },
            setBackground: function(t, e) {
                var n = t.commit;
                window.localStorage.gc_background = o()(e), n("SET_BACKGROUND", e)
            },
            setCoque: function(t, e) {
                var n = t.commit;
                window.localStorage.gc_coque = o()(e), n("SET_COQUE", e)
            },
            setVolume: function(t, e) {
                var n = t.commit;
                window.localStorage.gc_volume = e, n("SET_VOLUME", e)
            },
            closePhone: function() {
                l.a.closePhone()
            },
            resetPhone: function(t) {
                var e = t.dispatch,
                    n = t.getters;
                e("setZoon", "80%"), e("setVolume", 1), e("setBackground", n.config.background_default), e("setCoque", n.config.coque_default)
            }
        },
        d = {
            SET_CONFIG: function(t, e) {
                t.config = e
            },
            SET_APP_ENABLE: function(t, e) {
                var n = e.appName,
                    s = e.enable,
                    o = t.config.apps.findIndex(function(t) {
                        return t.name === n
                    }); - 1 !== o && u.a.set(t.config.apps[o], "enabled", s)
            },
            SET_PHONE_VISIBILITY: function(t, e) {
                t.show = e
            },
            SET_MY_PHONE_NUMBER: function(t, e) {
                t.myPhoneNumber = e
            },
            SET_BACKGROUND: function(t, e) {
                t.background = e
            },
            SET_COQUE: function(t, e) {
                t.coque = e
            },
            SET_ZOOM: function(t, e) {
                t.zoom = e
            },
            SET_VOLUME: function(t, e) {
                t.volume = e
            }
        };
    e.a = {
        state: h,
        getters: p,
        actions: f,
        mutations: d
    }
}, function(t, e, n) {
    "use strict";
    var s = n(31),
        o = (n.n(s), n(24)),
        a = n.n(o),
        i = n(12),
        r = "gc_tchat_channels",
        c = null,
        u = {
            channels: JSON.parse(localStorage[r] || null) || [],
            currentChannel: null,
            messagesChannel: []
        },
        l = {
            tchatChannels: function(t) {
                return t.channels
            },
            tchatCurrentChannel: function(t) {
                return t.currentChannel
            },
            tchatMessages: function(t) {
                return t.messagesChannel
            }
        },
        h = {
            tchatReset: function(t) {
                var e = t.commit;
                e("TCHAT_SET_MESSAGES", {
                    messages: []
                }), e("TCHAT_SET_CHANNEL", {
                    channel: null
                }), e("TCHAT_REMOVES_ALL_CHANNELS")
            },
            tchatSetChannel: function(t, e) {
                var n = t.state,
                    s = t.commit,
                    o = t.dispatch,
                    a = e.channel;
                n.currentChannel !== a && (s("TCHAT_SET_MESSAGES", {
                    messages: []
                }), s("TCHAT_SET_CHANNEL", {
                    channel: a
                }), o("tchatGetMessagesChannel", {
                    channel: a
                }))
            },
            tchatAddMessage: function(t, e) {
                var n = t.state,
                    s = t.commit,
                    o = t.getters,
                    a = e.message,
                    i = a.channel;
                void 0 !== n.channels.find(function(t) {
                    return t.channel === i
                }) && (null !== c && (c.pause(), c = null), c = new Audio("/html/static/sound/tchatNotification.ogg"), c.volume = o.volume, c.play()), s("TCHAT_ADD_MESSAGES", {
                    message: a
                })
            },
            tchatAddChannel: function(t, e) {
                (0, t.commit)("TCHAT_ADD_CHANNELS", {
                    channel: e.channel
                })
            },
            tchatRemoveChannel: function(t, e) {
                (0, t.commit)("TCHAT_REMOVES_CHANNELS", {
                    channel: e.channel
                })
            },
            tchatGetMessagesChannel: function(t, e) {
                var n = (t.commit, e.channel);
                i.a.tchatGetMessagesChannel(n)
            },
            tchatSendMessage: function(t, e) {
                var n = e.channel,
                    s = e.message;
                i.a.tchatSendMessage(n, s)
            }
        },
        p = {
            TCHAT_SET_CHANNEL: function(t, e) {
                var n = e.channel;
                t.currentChannel = n
            },
            TCHAT_ADD_CHANNELS: function(t, e) {
                var n = e.channel;
                t.channels.push({
                    channel: n
                }), localStorage[r] = a()(t.channels)
            },
            TCHAT_REMOVES_CHANNELS: function(t, e) {
                var n = e.channel;
                t.channels = t.channels.filter(function(t) {
                    return t.channel !== n
                }), localStorage[r] = a()(t.channels)
            },
            TCHAT_REMOVES_ALL_CHANNELS: function(t) {
                t.channels = [], localStorage[r] = a()(t.channels)
            },
            TCHAT_ADD_MESSAGES: function(t, e) {
                var n = e.message;
                n.channel === t.currentChannel && t.messagesChannel.push(n)
            },
            TCHAT_SET_MESSAGES: function(t, e) {
                var n = e.messages;
                t.messagesChannel = n
            }
        };
    e.a = {
        state: u,
        getters: l,
        actions: h,
        mutations: p
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(2),
        o = n.n(s),
        a = n(151),
        i = (n.n(a), n(150)),
        r = (n.n(i), n(1));
    e.default = {
        name: "app",
        components: {},
        data: function() {
            return {
                soundCall: null
            }
        },
        methods: o()({}, n.i(r.a)(["loadConfig", "rejectCall"])),
        computed: o()({}, n.i(r.b)(["show", "zoom", "coque", "appelsInfo", "myPhoneNumber", "volume"])),
        watch: {
            appelsInfo: function(t, e) {
                if (null !== this.appelsInfo && !0 !== this.appelsInfo.is_accepts ? (null !== this.soundCall && this.soundCall.pause(), !0 === this.appelsInfo.initiator ? this.soundCall = new Audio("/html/static/sound/Phone_Call_Sound_Effect.ogg") : this.soundCall = new Audio("/html/static/sound/ring.ogg"), this.soundCall.loop = !0, this.soundCall.volume = this.volume, this.soundCall.play()) : null !== this.soundCall && (this.soundCall.pause(), this.soundCall = null), null === t && null !== e) return void this.$router.push({
                    name: "home"
                });
                null !== t && this.$router.push({
                    name: "appels.active"
                })
            },
            show: function() {
                null !== this.appelsInfo ? this.$router.push({
                    name: "appels.active"
                }) : this.$router.push({
                    name: "home"
                }), !1 === this.show && null !== this.appelsInfo && this.rejectCall()
            }
        },
        mounted: function() {
            var t = this;
            this.loadConfig(), window.addEventListener("message", function(e) {
                void 0 !== e.data.keyUp && t.$bus.$emit("keyUp" + e.data.keyUp)
            }), window.addEventListener("keyup", function(e) {
                -1 !== ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown", "Backspace", "Enter"].indexOf(e.key) && t.$bus.$emit("keyUp" + e.key)
            })
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(9),
        o = n.n(s),
        a = n(13),
        i = n.n(a),
        r = n(8),
        c = n.n(r),
        u = n(6),
        l = n.n(u);
    e.default = {
        components: {
            PhoneTitle: l.a
        },
        data: function() {
            return {
                nextCursor: "c=10",
                currentSelectPost: 0,
                posts: []
            }
        },
        methods: {
            loadItems: function() {
                var t = this;
                return c()(o.a.mark(function e() {
                    var n, s, a, r;
                    return o.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return s = "https://9gag.com/v1/group-posts/group/default/type/hot?" + t.nextCursor, console.log(s), e.next = 4, fetch(s);
                            case 4:
                                return a = e.sent, e.next = 7, a.json();
                            case 7:
                                r = e.sent, console.log(r), (n = t.posts).push.apply(n, i()(r.data.posts)), t.nextCursor = r.data.nextCursor;
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }, e, t)
                }))()
            },
            previewPost: function() {
                var t = this;
                if (0 === this.currentSelectPost) return 0;
                this.currentSelectPost -= 1, setTimeout(function() {
                    void 0 !== t.$refs.video && (t.$refs.video.volume = .15)
                }, 200)
            },
            nextPost: function() {
                var t = this;
                this.currentSelectPost += 1, setTimeout(function() {
                    void 0 !== t.$refs.video && (t.$refs.video.volume = .15)
                }, 200)
            },
            cancel: function() {
                this.$router.push({
                    name: "home"
                })
            }
        },
        computed: {
            currentPost: function() {
                if (this.posts && this.posts.length > this.currentSelectPost) return console.log(this.posts[this.currentSelectPost]), this.posts[this.currentSelectPost];
                this.loadItems()
            }
        },
        created: function() {
            this.$bus.$on("keyUpArrowLeft", this.previewPost), this.$bus.$on("keyUpArrowRight", this.nextPost), this.$bus.$on("keyUpBackspace", this.cancel)
        },
        beforeDestroy: function() {
            this.$bus.$off("keyUpArrowLeft", this.previewPost), this.$bus.$off("keyUpArrowRight", this.nextPost), this.$bus.$off("keyUpBackspace", this.cancel)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(2),
        o = n.n(s),
        a = n(1),
        i = n(6),
        r = n.n(i),
        c = n(187),
        u = n.n(c),
        l = n(186),
        h = n.n(l),
        p = n(189),
        f = n.n(p);
    e.default = {
        components: {
            PhoneTitle: r.a
        },
        data: function() {
            return {
                subMenu: [{
                    Comp: u.a,
                    name: "Favorites",
                    icon: "star"
                }, {
                    Comp: f.a,
                    name: "Recents",
                    icon: "clock-o"
                }, {
                    Comp: h.a,
                    name: "Contacts",
                    icon: "user"
                }],
                currentMenuIndex: 1
            }
        },
        computed: o()({}, n.i(a.b)(["themeColor"])),
        methods: {
            getColorItem: function(t) {
                return this.currentMenuIndex === t ? {
                    color: this.themeColor
                } : {}
            },
            onLeft: function() {
                this.currentMenuIndex = Math.max(this.currentMenuIndex - 1, 0)
            },
            onRight: function() {
                this.currentMenuIndex = Math.min(this.currentMenuIndex + 1, this.subMenu.length - 1)
            },
            onBackspace: function() {
                !0 !== this.ignoreControls && this.$router.push({
                    name: "home"
                })
            }
        },
        created: function() {
            this.$bus.$on("keyUpBackspace", this.onBackspace), this.$bus.$on("keyUpArrowLeft", this.onLeft), this.$bus.$on("keyUpArrowRight", this.onRight)
        },
        beforeDestroy: function() {
            this.$bus.$off("keyUpBackspace", this.onBackspace), this.$bus.$off("keyUpArrowLeft", this.onLeft), this.$bus.$off("keyUpArrowRight", this.onRight)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(2),
        o = n.n(s),
        a = n(1),
        i = n(22),
        r = n.n(i);
    e.default = {
        components: {
            InfoBare: r.a
        },
        data: function() {
            return {
                numero: "###-####",
                contactName: "Unknown",
                time: -1,
                intervalNum: void 0,
                select: -1,
                status: 0
            }
        },
        methods: o()({}, n.i(a.a)(["appelsInfo", "acceptCall", "rejectCall", "ignoreCall"]), {
            onBackspace: function() {
                1 === this.status ? this.onRejectCall() : this.onIgnoreCall()
            },
            onEnter: function() {
                0 === this.status && (0 === this.select ? this.onRejectCall() : this.onAcceptCall())
            },
            onLeft: function() {
                0 === this.status && (this.select = 0)
            },
            onRight: function() {
                0 === this.status && (this.select = 1)
            },
            updateTime: function() {
                this.time += 1
            },
            onRejectCall: function() {
                this.rejectCall()
            },
            onAcceptCall: function() {
                this.acceptCall()
            },
            onIgnoreCall: function() {
                this.ignoreCall(), this.$router.push({
                    name: "home"
                })
            },
            startTimer: function() {
                void 0 === this.intervalNum && (this.time = 0, this.intervalNum = setInterval(this.updateTime, 1e3))
            }
        }),
        watch: {
            appelsInfo: function() {
                null !== this.appelsInfo && !0 === this.appelsInfo.is_accepts && (this.status = 1, this.startTimer())
            }
        },
        computed: o()({}, n.i(a.b)(["backgroundURL", "appelsInfo", "appelsDisplayName", "appelsDisplayNumber", "myPhoneNumber"]), {
            timeDisplay: function() {
                if (this.time < 0) return ". . .";
                var t = Math.floor(this.time / 60),
                    e = this.time % 60;
                return e < 10 && (e = "0" + e), t + ":" + e
            }
        }),
        mounted: function() {
            !0 === this.appelsInfo.initiator && (this.status = 1)
        },
        created: function() {
            this.$bus.$on("keyUpBackspace", this.onBackspace), this.$bus.$on("keyUpEnter", this.onEnter), this.$bus.$on("keyUpArrowLeft", this.onLeft), this.$bus.$on("keyUpArrowRight", this.onRight)
        },
        beforeDestroy: function() {
            this.$bus.$off("keyUpBackspace", this.onBackspace), this.$bus.$off("keyUpEnter", this.onEnter), this.$bus.$off("keyUpArrowLeft", this.onLeft), this.$bus.$off("keyUpArrowRight", this.onRight), void 0 !== this.intervalNum && window.clearInterval(this.intervalNum)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(13),
        o = n.n(s),
        a = n(2),
        i = n.n(a),
        r = n(1),
        c = n(18),
        u = n(23),
        l = n.n(u);
    e.default = {
        name: "Contacts",
        components: {
            List: l.a
        },
        data: function() {
            return {}
        },
        methods: i()({}, n.i(r.a)(["startCall"]), {
            onSelect: function(t) {
                void 0 !== t && (!0 === t.custom ? this.$router.push({
                    name: "appels.number"
                }) : this.startCall({
                    numero: t.number
                }))
            }
        }),
        computed: i()({}, n.i(r.b)(["contacts"]), {
            contactsList: function() {
                return [{
                    display: "Enter a Number",
                    letter: "#",
                    backgroundColor: "#D32F2F",
                    custom: !0
                }].concat(o()(this.contacts.slice(0).map(function(t) {
                    return t.backgroundColor = n.i(c.a)(t.number), t
                })))
            }
        }),
        created: function() {},
        beforeDestroy: function() {}
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(13),
        o = n.n(s),
        a = n(2),
        i = n.n(a),
        r = n(1),
        c = n(23),
        u = n.n(c),
        l = n(7);
    e.default = {
        name: "Favorites",
        components: {
            List: u.a
        },
        data: function() {
            return {
                ignoreControls: !1
            }
        },
        computed: i()({}, n.i(r.b)(["config"]), {
            callList: function() {
                return this.config.serviceCall || []
            }
        }),
        methods: {
            onSelect: function(t) {
                var e = this;
                !0 !== this.ignoreControls && (this.ignoreControls = !0, l.a.CreateModal({
                    choix: [].concat(o()(t.subMenu), [{
                        title: "Return"
                    }])
                }).then(function(t) {
                    e.ignoreControls = !1, "Return" !== t.title && (e.$phoneAPI.callEvent(t.eventName, t.type), e.$router.push({
                        name: "home"
                    }))
                }))
            }
        },
        created: function() {},
        beforeDestroy: function() {}
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(2),
        o = n.n(s),
        a = n(1),
        i = n(6),
        r = n.n(i);
    e.default = {
        components: {
            PhoneTitle: r.a
        },
        data: function() {
            return {
                numero: "",
                keyInfo: [{
                    primary: "1",
                    secondary: ""
                }, {
                    primary: "2",
                    secondary: "abc"
                }, {
                    primary: "3",
                    secondary: "def"
                }, {
                    primary: "4",
                    secondary: "ghi"
                }, {
                    primary: "5",
                    secondary: "jkl"
                }, {
                    primary: "6",
                    secondary: "mmo"
                }, {
                    primary: "7",
                    secondary: "pqrs"
                }, {
                    primary: "8",
                    secondary: "tuv"
                }, {
                    primary: "9",
                    secondary: "wxyz"
                }, {
                    primary: "✲",
                    secondary: "",
                    isNotNumber: !0
                }, {
                    primary: "0",
                    secondary: "+"
                }, {
                    primary: "#",
                    secondary: "",
                    isNotNumber: !0
                }],
                keySelect: 0
            }
        },
        methods: o()({}, n.i(a.a)(["startCall"]), {
            onLeft: function() {
                this.keySelect = Math.max(this.keySelect - 1, 0)
            },
            onRight: function() {
                this.keySelect = Math.min(this.keySelect + 1, 11)
            },
            onDown: function() {
                this.keySelect = Math.min(this.keySelect + 3, 12)
            },
            onUp: function() {
                this.keySelect > 2 && (12 === this.keySelect ? this.keySelect = 10 : this.keySelect = this.keySelect - 3)
            },
            onEnter: function() {
                12 === this.keySelect ? this.numero.length > 0 && this.startCall({
                    numero: this.numeroFormat
                }) : this.numero += this.keyInfo[this.keySelect].primary
            },
            onBackspace: function() {
                !0 !== this.ignoreControls && (0 !== this.numero.length ? this.numero = this.numero.slice(0, -1) : history.back())
            }
        }),
        computed: o()({}, n.i(a.b)(["useFormatNumberFrance"]), {
            numeroFormat: function() {
                if (!0 === this.useFormatNumberFrance) return this.numero;
                var t = this.numero.startsWith("#") ? 4 : 3;
                return this.numero.length > t ? this.numero.slice(0, t) + "-" + this.numero.slice(t) : this.numero
            }
        }),
        created: function() {
            this.$bus.$on("keyUpBackspace", this.onBackspace), this.$bus.$on("keyUpArrowLeft", this.onLeft), this.$bus.$on("keyUpArrowRight", this.onRight), this.$bus.$on("keyUpArrowDown", this.onDown), this.$bus.$on("keyUpArrowUp", this.onUp), this.$bus.$on("keyUpEnter", this.onEnter)
        },
        beforeDestroy: function() {
            this.$bus.$off("keyUpBackspace", this.onBackspace), this.$bus.$off("keyUpArrowLeft", this.onLeft), this.$bus.$off("keyUpArrowRight", this.onRight), this.$bus.$off("keyUpArrowDown", this.onDown), this.$bus.$off("keyUpArrowUp", this.onUp), this.$bus.$off("keyUpEnter", this.onEnter)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(9),
        o = n.n(s),
        a = n(13),
        i = n.n(a),
        r = n(8),
        c = n.n(r),
        u = n(2),
        l = n.n(u),
        h = n(1),
        p = n(18),
        f = n(7);
    e.default = {
        name: "Recents",
        components: {},
        data: function() {
            return {
                ignoreControls: !1,
                selectIndex: 0
            }
        },
        methods: l()({}, n.i(h.a)(["startCall", "appelsDeleteHistorique", "appelsDeleteAllHistorique"]), {
            getUser: function(t) {
                var e = this.contacts.find(function(e) {
                    return e.number === t
                });
                return void 0 === e ? void 0 : e.display
            },
            scrollIntoViewIfNeeded: function() {
                var t = this;
                this.$nextTick(function() {
                    t.$el.querySelector(".active").scrollIntoViewIfNeeded()
                })
            },
            onUp: function() {
                !0 !== this.ignoreControls && (this.selectIndex = Math.max(0, this.selectIndex - 1), this.scrollIntoViewIfNeeded())
            },
            onDown: function() {
                !0 !== this.ignoreControls && (this.selectIndex = Math.min(this.historique.length - 1, this.selectIndex + 1), this.scrollIntoViewIfNeeded())
            },
            onEnter: function() {
                var t = this;
                return c()(o.a.mark(function e() {
                    var n, s, a, r;
                    return o.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!0 !== t.ignoreControls) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return n = t.historique[t.selectIndex].num, s = !1 === n.startsWith("#"), t.ignoreControls = !0, a = [{
                                    id: 1,
                                    title: "ERASE",
                                    icons: "fa-circle-o",
                                    color: "orange"
                                }, {
                                    id: 2,
                                    title: "ERASE ALL.",
                                    icons: "fa-circle-o",
                                    color: "red"
                                }, {
                                    id: 3,
                                    title: "Return",
                                    icons: "fa-undo"
                                }], !0 === s && (a = [{
                                    id: 0,
                                    title: "Call",
                                    icons: "fa-call-o"
                                }].concat(i()(a))), e.next = 9, f.a.CreateModal({
                                    choix: a
                                });
                            case 9:
                                r = e.sent, t.ignoreControls = !0, e.t0 = r.id, e.next = 0 === e.t0 ? 14 : 1 === e.t0 ? 16 : 2 === e.t0 ? 18 : 19;
                                break;
                            case 14:
                                return t.startCall({
                                    numero: n
                                }), e.abrupt("break", 19);
                            case 16:
                                return t.appelsDeleteHistorique({
                                    numero: n
                                }), e.abrupt("break", 19);
                            case 18:
                                t.appelsDeleteAllHistorique();
                            case 19:
                            case "end":
                                return e.stop()
                        }
                    }, e, t)
                }))()
            }
        }),
        computed: l()({}, n.i(h.b)(["appelsHistorique", "contacts"]), {
            historique: function() {
                var t = n.i(p.b)(this.appelsHistorique, "num"),
                    e = [];
                for (var s in t) {
                    var o = t[s],
                        a = o.map(function(t) {
                            return t.date = new Date(t.time), t
                        }).sort(function(t, e) {
                            return e.date - t.date
                        }).slice(0, 6),
                        i = this.getUser(s);
                    e.push({
                        num: s,
                        display: i || s,
                        lastCall: a,
                        letter: void 0 === i ? "#" : i[0],
                        color: n.i(p.a)(s)
                    })
                }
                return e.sort(function(t, e) {
                    return e.lastCall[0].time - t.lastCall[0].time
                }), e
            }
        }),
        created: function() {
            this.$bus.$on("keyUpArrowDown", this.onDown), this.$bus.$on("keyUpArrowUp", this.onUp), this.$bus.$on("keyUpEnter", this.onEnter)
        },
        beforeDestroy: function() {
            this.$bus.$off("keyUpArrowDown", this.onDown), this.$bus.$off("keyUpArrowUp", this.onUp), this.$bus.$off("keyUpEnter", this.onEnter)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(2),
        o = n.n(s),
        a = n(1);
    e.default = {
        data: function() {
            return {}
        },
        computed: o()({}, n.i(a.b)(["bankAmont"]), {
            bankAmontFormat: function() {
                return Intl.NumberFormat().format(this.bankAmont)
            }
        }),
        methods: {
            onBackspace: function() {
                this.$router.push({
                    name: "home"
                })
            }
        },
        created: function() {
            this.$bus.$on("keyUpBackspace", this.onBackspace)
        },
        beforeDestroy: function() {
            this.$bus.$off("keyUpBackspace", this.onBackspace)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(2),
        o = n.n(s),
        a = n(1),
        i = n(6),
        r = n.n(i);
    e.default = {
        components: {
            PhoneTitle: r.a
        },
        data: function() {
            return {
                currentSelect: 0
            }
        },
        computed: o()({}, n.i(a.b)(["bourseInfo"])),
        methods: {
            scrollIntoViewIfNeeded: function() {
                var t = this;
                this.$nextTick(function() {
                    t.$el.querySelector(".select").scrollIntoViewIfNeeded()
                })
            },
            colorBourse: function(t) {
                return 0 === t.difference ? "#1565c0" : t.difference < 0 ? "#c62828" : "#2e7d32"
            },
            classInfo: function(t) {
                return 0 === t.difference ? ["fa-arrow-right", "iblue"] : t.difference < 0 ? ["fa-arrow-up", "ired"] : ["fa-arrow-down", "igreen"]
            },
            onBackspace: function() {
                this.$router.push({
                    name: "home"
                })
            },
            onUp: function() {
                this.currentSelect = 0 === this.currentSelect ? 0 : this.currentSelect - 1, this.scrollIntoViewIfNeeded()
            },
            onDown: function() {
                this.currentSelect = this.currentSelect === this.bourseInfo.length - 1 ? this.currentSelect : this.currentSelect + 1, this.scrollIntoViewIfNeeded()
            }
        },
        created: function() {
            this.$bus.$on("keyUpArrowDown", this.onDown), this.$bus.$on("keyUpArrowUp", this.onUp), this.$bus.$on("keyUpBackspace", this.onBackspace)
        },
        beforeDestroy: function() {
            this.$bus.$off("keyUpArrowDown", this.onDown), this.$bus.$off("keyUpArrowUp", this.onUp), this.$bus.$off("keyUpBackspace", this.onBackspace)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(2),
        o = n.n(s),
        a = n(1),
        i = n(6),
        r = n.n(i),
        c = n(7);
    e.default = {
        components: {
            PhoneTitle: r.a
        },
        data: function() {
            return {
                id: -1,
                currentSelect: 0,
                ignoreControls: !1,
                contact: {
                    display: "New Contact",
                    number: "",
                    id: -1
                }
            }
        },
        methods: o()({}, n.i(a.a)(["updateContact", "addContact"]), {
            onUp: function() {
                if (!0 !== this.ignoreControls) {
                    var t = document.querySelector(".group.select");
                    if (null !== t.previousElementSibling) {
                        document.querySelectorAll(".group").forEach(function(t) {
                            t.classList.remove("select")
                        }), t.previousElementSibling.classList.add("select");
                        var e = t.previousElementSibling.querySelector("input");
                        null !== e && e.focus()
                    }
                }
            },
            onDown: function() {
                if (!0 !== this.ignoreControls) {
                    var t = document.querySelector(".group.select");
                    if (null !== t.nextElementSibling) {
                        document.querySelectorAll(".group").forEach(function(t) {
                            t.classList.remove("select")
                        }), t.nextElementSibling.classList.add("select");
                        var e = t.nextElementSibling.querySelector("input");
                        null !== e && e.focus()
                    }
                }
            },
            onEnter: function() {
                var t = this;
                if (!0 !== this.ignoreControls) {
                    var e = document.querySelector(".group.select");
                    if ("text" === e.dataset.type) {
                        var n = {
                            limit: parseInt(e.dataset.maxlength) || 64,
                            text: this.contact[e.dataset.model] || ""
                        };
                        this.$phoneAPI.getReponseText(n).then(function(n) {
                            t.contact[e.dataset.model] = n.text
                        })
                    }
                    e.dataset.action && this[e.dataset.action] && this[e.dataset.action]()
                }
            },
            save: function() {
                -1 !== this.id ? this.updateContact({
                    id: this.id,
                    display: this.contact.display,
                    number: this.contact.number
                }) : this.addContact({
                    display: this.contact.display,
                    number: this.contact.number
                }), history.back()
            },
            cancel: function() {
                !0 !== this.ignoreControls && history.back()
            },
            delete: function() {
                var t = this;
                if (-1 !== this.id) {
                    this.ignoreControls = !0;
                    var e = [{
                        title: "Cancel"
                    }, {
                        title: "Cancel"
                    }, {
                        title: "Remove",
                        color: "red"
                    }, {
                        title: "Cancel"
                    }, {
                        title: "Cancel"
                    }];
                    c.a.CreateModal({
                        choix: e
                    }).then(function(e) {
                        t.ignoreControls = !1, "Remove" === e.title && (t.$phoneAPI.deleteContact(t.id), history.back())
                    })
                } else history.back()
            }
        }),
        computed: o()({}, n.i(a.b)(["contacts"])),
        created: function() {
            var t = this;
            if (this.$bus.$on("keyUpArrowDown", this.onDown), this.$bus.$on("keyUpArrowUp", this.onUp), this.$bus.$on("keyUpEnter", this.onEnter), this.$bus.$on("keyUpBackspace", this.cancel), this.id = parseInt(this.$route.params.id), -1 !== this.id) {
                var e = this.contacts.find(function(e) {
                    return e.id === t.id
                });
                void 0 !== e && (this.contact = e)
            }
        },
        beforeDestroy: function() {
            this.$bus.$off("keyUpArrowDown", this.onDown), this.$bus.$off("keyUpArrowUp", this.onUp), this.$bus.$off("keyUpEnter", this.onEnter), this.$bus.$off("keyUpBackspace", this.cancel)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(13),
        o = n.n(s),
        a = n(2),
        i = n.n(a),
        r = n(1),
        c = n(18),
        u = n(23),
        l = n.n(u),
        h = n(7);
    e.default = {
        components: {
            List: l.a
        },
        data: function() {
            return {
                disableList: !1
            }
        },
        computed: i()({}, n.i(r.b)(["contacts"]), {
            lcontacts: function() {
                return [{
                    display: "Add Contact",
                    letter: "+",
                    num: "",
                    id: -1
                }].concat(o()(this.contacts.map(function(t) {
                    return t.backgroundColor = n.i(c.a)(t.number), t
                })))
            }
        }),
        methods: {
            onSelect: function(t) {
                -1 === t.id ? this.$router.push({
                    name: "contacts.view",
                    params: {
                        id: t.id
                    }
                }) : this.$router.push({
                    name: "messages.view",
                    params: {
                        number: t.number,
                        display: t.display
                    }
                })
            },
            onOption: function(t) {
                var e = this;
                this.disableList = !0, h.a.CreateModal({
                    choix: [{
                        id: 1,
                        title: "Modify Contact",
                        icons: "fa-circle-o",
                        color: "orange"
                    }, {
                        id: 3,
                        title: "Cancel",
                        icons: "fa-undo"
                    }]
                }).then(function(n) {
                    1 === n.id && e.$router.push({
                        path: "contact/" + t.id
                    }), e.disableList = !1
                })
            },
            back: function() {
                !0 !== this.disableList && this.$router.push({
                    name: "home"
                })
            }
        },
        created: function() {
            this.$bus.$on("keyUpBackspace", this.back)
        },
        beforeDestroy: function() {
            this.$bus.$off("keyUpBackspace", this.back)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = {
        data: function() {
            return {
                time: "",
                myInterval: 0
            }
        },
        methods: {
            updateTime: function() {
                var t = new Date,
                    e = t.getMinutes();
                e = e > 9 ? e : "0" + e;
                var n = t.getHours();
                n = n > 9 ? n : "0" + n;
                var s = n + ":" + e;
                this.time = s
            }
        },
        created: function() {
            this.updateTime(), this.myInterval = setInterval(this.updateTime, 1e3)
        },
        beforeDestroy: function() {
            clearInterval(this.myInterval)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(2),
        o = n.n(s),
        a = n(1),
        i = n(22),
        r = n.n(i);
    e.default = {
        components: {
            InfoBare: r.a
        },
        data: function() {
            return {
                currentSelect: 0
            }
        },
        computed: o()({}, n.i(a.b)(["nbMessagesUnread", "backgroundURL", "messages", "AppsHome"])),
        methods: o()({}, n.i(a.a)(["closePhone", "setMessages"]), {
            onLeft: function() {
                this.currentSelect = (this.currentSelect + this.AppsHome.length) % (this.AppsHome.length + 1)
            },
            onRight: function() {
                this.currentSelect = (this.currentSelect + 1) % (this.AppsHome.length + 1)
            },
            onUp: function() {
                this.currentSelect = Math.max(this.currentSelect - 4, 0)
            },
            onDown: function() {
                this.currentSelect = Math.min(this.currentSelect + 4, this.AppsHome.length)
            },
            onEnter: function() {
                if (this.currentSelect === this.AppsHome.length) this.$router.push({
                    name: "menu"
                });
                else {
                    var t = this.AppsHome[this.currentSelect].routeName;
                    this.$router.push({
                        name: t
                    })
                }
            },
            onBack: function() {
                this.closePhone()
            }
        }),
        created: function() {
            this.$bus.$on("keyUpArrowLeft", this.onLeft), this.$bus.$on("keyUpArrowRight", this.onRight), this.$bus.$on("keyUpArrowDown", this.onDown), this.$bus.$on("keyUpArrowUp", this.onUp), this.$bus.$on("keyUpEnter", this.onEnter), this.$bus.$on("keyUpBackspace", this.onBack)
        },
        beforeDestroy: function() {
            this.$bus.$off("keyUpArrowLeft", this.onLeft), this.$bus.$off("keyUpArrowRight", this.onRight), this.$bus.$off("keyUpArrowDown", this.onDown), this.$bus.$off("keyUpArrowUp", this.onUp), this.$bus.$off("keyUpEnter", this.onEnter), this.$bus.$off("keyUpBackspace", this.onBack)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(1),
        o = n(194),
        a = n.n(o);
    e.default = {
        computed: n.i(s.b)(["config"]),
        components: {
            CurrentTime: a.a
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(6),
        o = n.n(s),
        a = n(22),
        i = n.n(a);
    e.default = {
        name: "hello",
        components: {
            PhoneTitle: o.a,
            InfoBare: i.a
        },
        data: function() {
            return {
                currentSelect: 0
            }
        },
        props: {
            title: {
                type: String,
                default: "Title"
            },
            showHeader: {
                type: Boolean,
                default: !0
            },
            showInfoBare: {
                type: Boolean,
                default: !0
            },
            list: {
                type: Array,
                required: !0
            },
            color: {
                type: String,
                default: "#FFFFFF"
            },
            backgroundColor: {
                type: String,
                default: "#4CAF50"
            },
            keyDispay: {
                type: String,
                default: "display"
            },
            disable: {
                type: Boolean,
                default: !1
            },
            titleBackgroundColor: {
                type: String,
                default: "#FFFFFF"
            }
        },
        watch: {
            list: function() {
                this.currentSelect = 0
            }
        },
        computed: {},
        methods: {
            styleTitle: function() {
                return {
                    color: this.color,
                    backgroundColor: this.backgroundColor
                }
            },
            stylePuce: function(t) {
                return t = t || {}, void 0 !== t.icon ? {
                    backgroundImage: "url(" + t.icon + ")",
                    backgroundSize: "cover",
                    color: "rgba(0,0,0,0)"
                } : {
                    color: t.color || this.color,
                    backgroundColor: t.backgroundColor || this.backgroundColor,
                    borderRadius: "50%"
                }
            },
            scrollIntoViewIfNeeded: function() {
                this.$nextTick(function() {
                    document.querySelector(".select").scrollIntoViewIfNeeded()
                })
            },
            onUp: function() {
                !0 !== this.disable && (this.currentSelect = 0 === this.currentSelect ? this.list.length - 1 : this.currentSelect - 1, this.scrollIntoViewIfNeeded())
            },
            onDown: function() {
                !0 !== this.disable && (this.currentSelect = this.currentSelect === this.list.length - 1 ? 0 : this.currentSelect + 1, this.scrollIntoViewIfNeeded())
            },
            onRight: function() {
                !0 !== this.disable && this.$emit("option", this.list[this.currentSelect])
            },
            onEnter: function() {
                !0 !== this.disable && this.$emit("select", this.list[this.currentSelect])
            }
        },
        created: function() {
            this.$bus.$on("keyUpArrowDown", this.onDown), this.$bus.$on("keyUpArrowUp", this.onUp), this.$bus.$on("keyUpArrowRight", this.onRight), this.$bus.$on("keyUpEnter", this.onEnter)
        },
        beforeDestroy: function() {
            this.$bus.$off("keyUpArrowDown", this.onDown), this.$bus.$off("keyUpArrowUp", this.onUp), this.$bus.$off("keyUpArrowRight", this.onRight), this.$bus.$off("keyUpEnter", this.onEnter)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(2),
        o = n.n(s),
        a = n(1),
        i = n(22),
        r = n.n(i);
    e.default = {
        components: {
            InfoBare: r.a
        },
        data: function() {
            return {
                currentSelect: 0
            }
        },
        computed: o()({}, n.i(a.b)(["nbMessagesUnread", "backgroundURL", "Apps"])),
        methods: o()({}, n.i(a.b)(["closePhone"]), {
            onLeft: function() {
                var t = Math.floor(this.currentSelect / 4),
                    e = (this.currentSelect + 4 - 1) % 4 + 4 * t;
                this.currentSelect = Math.min(e, this.Apps.length - 1)
            },
            onRight: function() {
                var t = Math.floor(this.currentSelect / 4),
                    e = (this.currentSelect + 1) % 4 + 4 * t;
                e >= this.Apps.length && (e = 4 * t), this.currentSelect = e
            },
            onUp: function() {
                var t = this.currentSelect - 4;
                if (t < 0) {
                    var e = this.currentSelect % 4;
                    t = 4 * Math.floor((this.Apps.length - 1) / 4), this.currentSelect = Math.min(t + e, this.Apps.length - 1)
                } else this.currentSelect = t
            },
            onDown: function() {
                var t = this.currentSelect % 4,
                    e = this.currentSelect + 4;
                e >= this.Apps.length && (e = t), this.currentSelect = e
            },
            onEnter: function() {
                var t = this.Apps[this.currentSelect].routeName;
                this.$router.push({
                    name: t
                })
            },
            onBack: function() {
                this.$router.push({
                    name: "home"
                })
            }
        }),
        mounted: function() {},
        created: function() {
            this.$bus.$on("keyUpArrowLeft", this.onLeft), this.$bus.$on("keyUpArrowRight", this.onRight), this.$bus.$on("keyUpArrowDown", this.onDown), this.$bus.$on("keyUpArrowUp", this.onUp), this.$bus.$on("keyUpEnter", this.onEnter), this.$bus.$on("keyUpBackspace", this.onBack)
        },
        beforeDestroy: function() {
            this.$bus.$off("keyUpArrowLeft", this.onLeft), this.$bus.$off("keyUpArrowRight", this.onRight), this.$bus.$off("keyUpArrowDown", this.onDown), this.$bus.$off("keyUpArrowUp", this.onUp), this.$bus.$off("keyUpEnter", this.onEnter), this.$bus.$off("keyUpBackspace", this.onBack)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(13),
        o = n.n(s),
        a = n(2),
        i = n.n(a),
        r = n(23),
        c = n.n(r),
        u = n(1);
    e.default = {
        components: {
            List: c.a
        },
        data: function() {
            return {}
        },
        computed: i()({}, n.i(u.b)(["contacts"]), {
            lcontacts: function() {
                return [{
                    display: "Enter a number",
                    letter: "+",
                    backgroundColor: "orange",
                    num: -1
                }].concat(o()(this.contacts))
            }
        }),
        methods: {
            onSelect: function(t) {
                var e = this; - 1 === t.num ? this.$phoneAPI.getReponseText({
                    limit: 10
                }).then(function(t) {
                    var n = t.text.trim();
                    "" !== n && e.$router.push({
                        name: "messages.view",
                        params: {
                            number: n,
                            display: n
                        }
                    })
                }) : this.$router.push({
                    name: "messages.view",
                    params: t
                })
            },
            back: function() {
                history.back()
            }
        },
        created: function() {
            this.$bus.$on("keyUpBackspace", this.back)
        },
        beforeDestroy: function() {
            this.$bus.$off("keyUpBackspace", this.back)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(13),
        o = n.n(s),
        a = n(2),
        i = n.n(a),
        r = n(1),
        c = n(18),
        u = n(6),
        l = n.n(u),
        h = n(7);
    e.default = {
        data: function() {
            return {
                ignoreControls: !1,
                selectMessage: -1,
                display: "",
                phoneNumber: "",
                imgZoom: void 0
            }
        },
        components: {
            PhoneTitle: l.a
        },
        methods: i()({}, n.i(r.a)(["setMessageRead", "sendMessage", "deleteMessage"]), {
            resetScroll: function() {
                var t = this;
                this.$nextTick(function() {
                    var e = document.querySelector("#sms_list");
                    e.scrollTop = e.scrollHeight, t.selectMessage = -1
                })
            },
            scrollIntoViewIfNeeded: function() {
                var t = this;
                this.$nextTick(function() {
                    var e = t.$el.querySelector(".select");
                    null !== e && e.scrollIntoViewIfNeeded()
                })
            },
            onUp: function() {
                !0 !== this.ignoreControls && (-1 === this.selectMessage ? this.selectMessage = this.messagesList.length - 1 : this.selectMessage = 0 === this.selectMessage ? 0 : this.selectMessage - 1, this.scrollIntoViewIfNeeded())
            },
            onDown: function() {
                !0 !== this.ignoreControls && (-1 === this.selectMessage ? this.selectMessage = this.messagesList.length - 1 : this.selectMessage = this.selectMessage === this.messagesList.length - 1 ? this.selectMessage : this.selectMessage + 1, this.scrollIntoViewIfNeeded())
            },
            onEnter: function() {
                var t = this;
                !0 !== this.ignoreControls && (-1 !== this.selectMessage ? this.onActionMessage() : this.$phoneAPI.getReponseText().then(function(e) {
                    var n = e.text.trim();
                    "" !== n && t.sendMessage({
                        phoneNumber: t.phoneNumber,
                        message: n
                    })
                }))
            },
            isSMSImage: function(t) {
                return /^https?:\/\/.*\.(png|jpg|jpeg|gif)/.test(t.message)
            },
            onActionMessage: function() {
                var t = this,
                    e = this.messagesList[this.selectMessage],
                    n = /^GPS: -?\d*(\.\d+), -?\d*(\.\d+)/.test(e.message),
                    s = /#([0-9]+)/.test(e.message),
                    a = this.isSMSImage(e),
                    i = [{
                        title: "ERASE",
                        icons: "fa-circle-o"
                    }, {
                        title: "Cancel",
                        icons: "fa-undo"
                    }];
                if (!0 === n && (i = [{
                        title: "Position GPS",
                        icons: "fa-location-arrow"
                    }].concat(o()(i))), !0 === s) {
                    var r = e.message.match(/#([0-9-]*)/)[1];
                    i = [{
                        title: "SMS " + r,
                        number: r,
                        icons: "fa-phone"
                    }].concat(o()(i))
                }!0 === a && (i = [{
                    title: "Zoom",
                    icons: "fa-search"
                }].concat(o()(i))), this.ignoreControls = !0, h.a.CreateModal({
                    choix: i
                }).then(function(n) {
                    if ("ERASE" === n.title) t.deleteMessage({
                        id: e.id
                    });
                    else if ("Position GPS" === n.title) {
                        var s = e.message.match(/((-?)\d+(\.\d+))/g);
                        t.$phoneAPI.setGPS(s[0], s[1])
                    } else void 0 !== n.number ? (t.phoneNumber = n.number, t.display = void 0) : "Zoom" === n.title && (t.imgZoom = e.message);
                    t.ignoreControls = !1, t.selectMessage = -1
                })
            },
            onBackspace: function() {
                if (console.log(this, this.messagesList, this.selectMessage, this.messagesList[this.selectMessage]), void 0 !== this.imgZoom) return void(this.imgZoom = void 0);
                !0 !== this.ignoreControls && (-1 !== this.selectMessage ? this.selectMessage = -1 : this.$router.push({
                    path: "/messages"
                }))
            },
            onRight: function() {
                var t = this;
                !0 !== this.ignoreControls && -1 === this.selectMessage && (this.ignoreControls = !0, h.a.CreateModal({
                    choix: [{
                        title: "Send GPS Coordinates",
                        icons: "fa-location-arrow"
                    }, {
                        title: "Cancel",
                        icons: "fa-undo"
                    }]
                }).then(function(e) {
                    "Send GPS Coordinates" === e.title && t.sendMessage({
                        phoneNumber: t.phoneNumber,
                        message: "%pos%"
                    }), t.ignoreControls = !1
                }))
            }
        }),
        computed: i()({}, n.i(r.b)(["messages", "contacts"]), {
            messagesList: function() {
                var t = this;
                return this.messages.filter(function(e) {
                    return e.transmitter === t.phoneNumber
                }).sort(function(t, e) {
                    return t.time - e.time
                })
            },
            displayContact: function() {
                var t = this;
                if (void 0 !== this.display) return this.display;
                var e = this.contacts.find(function(e) {
                    return e.number === t.phoneNumber
                });
                return void 0 !== e ? e.display : this.phoneNumber
            },
            color: function() {
                return n.i(c.a)(this.phoneNumber)
            },
            colorSmsOwner: function() {
                return [{
                    backgroundColor: this.color,
                    color: n.i(c.c)(this.color)
                }, {}]
            }
        }),
        watch: {
            messagesList: function() {
                this.setMessageRead(this.phoneNumber), this.resetScroll()
            }
        },
        created: function() {
            this.display = this.$route.params.display, this.phoneNumber = this.$route.params.number, this.$bus.$on("keyUpArrowDown", this.onDown), this.$bus.$on("keyUpArrowUp", this.onUp), this.$bus.$on("keyUpEnter", this.onEnter), this.$bus.$on("keyUpBackspace", this.onBackspace), this.$bus.$on("keyUpArrowRight", this.onRight)
        },
        beforeDestroy: function() {
            this.$bus.$off("keyUpArrowDown", this.onDown), this.$bus.$off("keyUpArrowUp", this.onUp), this.$bus.$off("keyUpEnter", this.onEnter), this.$bus.$off("keyUpArrowRight", this.onRight), this.$bus.$off("keyUpBackspace", this.onBackspace)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(46),
        o = n.n(s),
        a = n(2),
        i = n.n(a),
        r = n(1),
        c = n(18),
        u = n(7),
        l = n(23),
        h = n.n(l);
    e.default = {
        components: {
            List: h.a
        },
        data: function() {
            return {
                nouveauMessage: {
                    backgroundColor: "#C0C0C0",
                    display: "New Message",
                    letter: "+",
                    id: -1
                },
                disableList: !1
            }
        },
        methods: i()({}, n.i(r.a)(["deleteMessagesNumber", "deleteAllMessages"]), {
            onSelect: function(t) {
                -1 === t.id ? this.$router.push({
                    name: "messages.selectcontact"
                }) : this.$router.push({
                    name: "messages.view",
                    params: t
                })
            },
            onOption: function(t) {
                var e = this;
                void 0 !== t.number && (this.disableList = !0, u.a.CreateModal({
                    choix: [{
                        id: 1,
                        title: "ERASE the conversation",
                        icons: "fa-circle-o",
                        color: "orange"
                    }, {
                        id: 2,
                        title: "ERASE all conversations",
                        icons: "fa-circle-o",
                        color: "red"
                    }, {
                        id: 3,
                        title: "Cancel",
                        icons: "fa-undo"
                    }]
                }).then(function(n) {
                    1 === n.id ? e.deleteMessagesNumber({
                        num: t.number
                    }) : 2 === n.id && e.deleteAllMessages(), e.disableList = !1
                }))
            },
            back: function() {
                !0 !== this.disableList && this.$router.push({
                    name: "home"
                })
            }
        }),
        computed: i()({}, n.i(r.b)(["contacts", "messages"]), {
            messagesData: function() {
                var t = this.messages,
                    e = this.contacts,
                    s = t.reduce(function(t, n) {
                        if (void 0 === t[n.transmitter]) {
                            var s = e.find(function(t) {
                                    return t.number === n.transmitter
                                }),
                                o = void 0 !== s ? s.display : n.transmitter;
                            t[n.transmitter] = {
                                noRead: 0,
                                display: o,
                                lastMessage: 0
                            }
                        }
                        return 0 === n.isRead && (t[n.transmitter].noRead += 1), n.time >= t[n.transmitter].lastMessage && (t[n.transmitter].lastMessage = n.time, t[n.transmitter].keyDesc = n.message), t
                    }, {}),
                    a = [];
                return o()(s).forEach(function(t) {
                    a.push({
                        display: s[t].display,
                        puce: s[t].noRead,
                        number: t,
                        lastMessage: s[t].lastMessage,
                        keyDesc: s[t].keyDesc,
                        backgroundColor: n.i(c.a)(t)
                    })
                }), a.sort(function(t, e) {
                    return e.lastMessage - t.lastMessage
                }), [this.nouveauMessage].concat(a)
            }
        }),
        created: function() {
            this.$bus.$on("keyUpBackspace", this.back)
        },
        beforeDestroy: function() {
            this.$bus.$off("keyUpBackspace", this.back)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = {
        name: "Modal",
        data: function() {
            return {
                currentSelect: 0
            }
        },
        props: {
            choix: {
                type: Array,
                default: function() {
                    return []
                }
            }
        },
        methods: {
            scrollIntoViewIfNeeded: function() {
                this.$nextTick(function() {
                    document.querySelector(".modal-choix.select").scrollIntoViewIfNeeded()
                })
            },
            onUp: function() {
                this.currentSelect = 0 === this.currentSelect ? 0 : this.currentSelect - 1, this.scrollIntoViewIfNeeded()
            },
            onDown: function() {
                this.currentSelect = this.currentSelect === this.choix.length - 1 ? this.currentSelect : this.currentSelect + 1, this.scrollIntoViewIfNeeded()
            },
            onEnter: function() {
                this.$emit("select", this.choix[this.currentSelect])
            },
            cancel: function() {
                this.$emit("cancel")
            }
        },
        created: function() {
            this.$bus.$on("keyUpArrowDown", this.onDown), this.$bus.$on("keyUpArrowUp", this.onUp), this.$bus.$on("keyUpEnter", this.onEnter), this.$bus.$on("keyUpBackspace", this.cancel)
        },
        beforeDestroy: function() {
            this.$bus.$off("keyUpArrowDown", this.onDown), this.$bus.$off("keyUpArrowUp", this.onUp), this.$bus.$off("keyUpEnter", this.onEnter), this.$bus.$off("keyUpBackspace", this.cancel)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(9),
        o = n.n(s),
        a = n(8),
        i = n.n(a),
        r = n(46),
        c = n.n(r),
        u = n(2),
        l = n.n(u),
        h = n(1),
        p = n(6),
        f = n.n(p),
        d = n(7);
    e.default = {
        components: {
            PhoneTitle: f.a
        },
        data: function() {
            return {
                ignoreControls: !1,
                currentSelect: 0
            }
        },
        computed: l()({}, n.i(h.b)(["myPhoneNumber", "backgroundLabel", "coqueLabel", "zoom", "config", "volume"]), {
            paramList: function() {
                return [{
                    icons: "fa-phone",
                    title: "My Number",
                    value: this.myPhoneNumber
                }, {
                    icons: "fa-picture-o",
                    title: "Wallpaper",
                    value: this.backgroundLabel,
                    onValid: "onChangeBackground",
                    values: this.config.background
                }, {
                    icons: "fa-mobile",
                    title: "Phone Type",
                    value: this.coqueLabel,
                    onValid: "onChangeCoque",
                    values: this.config.coque
                }, {
                    icons: "fa-search",
                    title: "Zoom",
                    value: this.zoom,
                    onValid: "setZoom",
                    onLeft: this.ajustZoom(-1),
                    onRight: this.ajustZoom(1),
                    values: {
                        "125 %": "125%",
                        "100 %": "100%",
                        "80 %": "80%",
                        "60 %": "60%",
                        "40 %": "40%",
                        "20 %": "20%"
                    }
                }, {
                    icons: "fa-volume-down",
                    title: "Volume",
                    value: this.valumeDisplay,
                    onValid: "setPhoneVolume",
                    onLeft: this.ajustVolume(-.01),
                    onRight: this.ajustVolume(.01),
                    values: {
                        "100 %": 1,
                        "80 %": .8,
                        "60 %": .6,
                        "40 %": .4,
                        "20 %": .2,
                        "0 %": 0
                    }
                }, {
                    icons: "fa-exclamation-triangle",
                    color: "#c0392b",
                    title: "Fresh Install",
                    onValid: "resetPhone",
                    values: {
                        "TOUT Remove": "accept",
                        Cancel: "cancel"
                    }
                }]
            },
            valumeDisplay: function() {
                return Math.floor(100 * this.volume) + " %"
            }
        }),
        methods: l()({}, n.i(h.a)(["setZoon", "setBackground", "setCoque", "setVolume"]), {
            scrollIntoViewIfNeeded: function() {
                this.$nextTick(function() {
                    document.querySelector(".select").scrollIntoViewIfNeeded()
                })
            },
            onBackspace: function() {
                !0 !== this.ignoreControls && this.$router.push({
                    name: "home"
                })
            },
            onUp: function() {
                !0 !== this.ignoreControls && (this.currentSelect = 0 === this.currentSelect ? 0 : this.currentSelect - 1, this.scrollIntoViewIfNeeded())
            },
            onDown: function() {
                !0 !== this.ignoreControls && (this.currentSelect = this.currentSelect === this.paramList.length - 1 ? this.currentSelect : this.currentSelect + 1, this.scrollIntoViewIfNeeded())
            },
            onRight: function() {
                if (!0 !== this.ignoreControls) {
                    var t = this.paramList[this.currentSelect];
                    void 0 !== t.onRight && t.onRight(t)
                }
            },
            onLeft: function() {
                if (!0 !== this.ignoreControls) {
                    var t = this.paramList[this.currentSelect];
                    void 0 !== t.onLeft && t.onLeft(t)
                }
            },
            onEnter: function() {
                var t = this;
                if (!0 !== this.ignoreControls) {
                    var e = this.paramList[this.currentSelect];
                    if (void 0 !== e.values) {
                        this.ignoreControls = !0;
                        var n = c()(e.values).map(function(t) {
                            return {
                                title: t,
                                value: e.values[t],
                                picto: e.values[t]
                            }
                        });
                        d.a.CreateModal({
                            choix: n
                        }).then(function(n) {
                            t.ignoreControls = !1, "cancel" !== n.title && t[e.onValid](e, n)
                        })
                    }
                }
            },
            onChangeBackground: function(t, e) {
                var n = this;
                return i()(o.a.mark(function t() {
                    var s;
                    return o.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                s = e.value, "URL" === s ? n.$phoneAPI.getReponseText({
                                    text: "https://i.imgur.com/"
                                }).then(function(t) {
                                    "" !== t.text && void 0 !== t.text && null !== t.text && "https://i.imgur.com/" !== t.text && n.setBackground({
                                        label: "Custom",
                                        value: t.text
                                    })
                                }) : n.setBackground({
                                    label: e.title,
                                    value: e.value
                                });
                            case 2:
                            case "end":
                                return t.stop()
                        }
                    }, t, n)
                }))()
            },
            onChangeCoque: function(t, e) {
                this.setCoque({
                    label: e.title,
                    value: e.value
                })
            },
            setZoom: function(t, e) {
                this.setZoon(e.value)
            },
            ajustZoom: function(t) {
                var e = this;
                return function() {
                    var n = Math.max(10, (parseInt(e.zoom) || 100) + t);
                    e.setZoon(n + "%")
                }
            },
            setPhoneVolume: function(t, e) {
                this.setVolume(e.value)
            },
            ajustVolume: function(t) {
                var e = this;
                return function() {
                    var n = Math.max(0, Math.min(1, parseFloat(e.volume) + t));
                    e.setVolume(n)
                }
            },
            resetPhone: function(t, e) {
                var n = this;
                if ("Cancel" !== e.title) {
                    this.ignoreControls = !0;
                    var s = [{
                        title: "Cancel"
                    }, {
                        title: "Cancel"
                    }, {
                        title: "ERASE",
                        color: "red"
                    }, {
                        title: "Cancel"
                    }, {
                        title: "Cancel"
                    }];
                    d.a.CreateModal({
                        choix: s
                    }).then(function(t) {
                        n.ignoreControls = !1, "ERASE" === t.title && n.$phoneAPI.deleteALL()
                    })
                }
            }
        }),
        created: function() {
            this.$bus.$on("keyUpArrowRight", this.onRight), this.$bus.$on("keyUpArrowLeft", this.onLeft), this.$bus.$on("keyUpArrowDown", this.onDown), this.$bus.$on("keyUpArrowUp", this.onUp), this.$bus.$on("keyUpEnter", this.onEnter), this.$bus.$on("keyUpBackspace", this.onBackspace)
        },
        beforeDestroy: function() {
            this.$bus.$off("keyUpArrowRight", this.onRight), this.$bus.$off("keyUpArrowLeft", this.onLeft), this.$bus.$off("keyUpArrowDown", this.onDown), this.$bus.$off("keyUpArrowUp", this.onUp), this.$bus.$off("keyUpEnter", this.onEnter), this.$bus.$off("keyUpBackspace", this.onBackspace)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(2),
        o = n.n(s),
        a = n(1),
        i = n(22),
        r = n.n(i);
    e.default = {
        components: {
            InfoBare: r.a
        },
        computed: o()({}, n.i(a.b)(["themeColor"]), {
            style: function() {
                return {
                    backgroundColor: this.backgroundColor || this.themeColor,
                    color: this.color || "#FFF"
                }
            }
        }),
        props: {
            title: {
                type: String,
                required: !0
            },
            showInfoBare: {
                type: Boolean,
                default: !0
            },
            backgroundColor: {
                type: String
            }
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(12);
    e.default = {
        created: function() {
            s.a.takePhoto()
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(9),
        o = n.n(s),
        a = n(8),
        i = n.n(a),
        r = n(2),
        c = n.n(r),
        u = n(1),
        l = n(7),
        h = n(6),
        p = n.n(h);
    e.default = {
        components: {
            PhoneTitle: p.a
        },
        data: function() {
            return {
                currentSelect: 0,
                ignoreControls: !1
            }
        },
        watch: {
            list: function() {
                this.currentSelect = 0
            }
        },
        computed: c()({}, n.i(u.b)(["tchatChannels", "Apps"]), {
            title: function() {
                var t = this.Apps.find(function(t) {
                    return "tchat" === t.routeName
                });
                return void 0 === t ? "Tor Chat" : t.name
            }
        }),
        methods: c()({}, n.i(u.a)(["tchatAddChannel", "tchatRemoveChannel"]), {
            scrollIntoViewIfNeeded: function() {
                var t = this;
                this.$nextTick(function() {
                    t.$el.querySelector(".select").scrollIntoViewIfNeeded()
                })
            },
            onUp: function() {
                !0 !== this.ignoreControls && (this.currentSelect = 0 === this.currentSelect ? 0 : this.currentSelect - 1, this.scrollIntoViewIfNeeded())
            },
            onDown: function() {
                !0 !== this.ignoreControls && (this.currentSelect = this.currentSelect === this.tchatChannels.length - 1 ? this.currentSelect : this.currentSelect + 1, this.scrollIntoViewIfNeeded())
            },
            onRight: function() {
                var t = this;
                return i()(o.a.mark(function e() {
                    var n, s;
                    return o.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!0 !== t.ignoreControls) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return t.ignoreControls = !0, n = [{
                                    id: 1,
                                    title: "Add a channel",
                                    icons: "fa-plus",
                                    color: "green"
                                }, {
                                    id: 2,
                                    title: "ERASE",
                                    icons: "fa-circle-o",
                                    color: "orange"
                                }, {
                                    id: 3,
                                    title: "Return",
                                    icons: "fa-undo"
                                }], 0 === t.tchatChannels.length && n.splice(1, 1), e.next = 7, l.a.CreateModal({
                                    choix: n
                                });
                            case 7:
                                s = e.sent, t.ignoreControls = !1, e.t0 = s.id, e.next = 1 === e.t0 ? 12 : 2 === e.t0 ? 14 : (e.t0, 16);
                                break;
                            case 12:
                                return t.addChannelOption(), e.abrupt("break", 16);
                            case 14:
                                return t.removeChannelOption(), e.abrupt("break", 16);
                            case 16:
                            case "end":
                                return e.stop()
                        }
                    }, e, t)
                }))()
            },
            onEnter: function() {
                var t = this;
                return i()(o.a.mark(function e() {
                    var n, s, a;
                    return o.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!0 !== t.ignoreControls) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                if (0 !== t.tchatChannels.length) {
                                    e.next = 12;
                                    break
                                }
                                return t.ignoreControls = !0, n = [{
                                    id: 1,
                                    title: "Add a channel.",
                                    icons: "fa-plus",
                                    color: "green"
                                }, {
                                    id: 3,
                                    title: "Return",
                                    icons: "fa-undo"
                                }], e.next = 7, l.a.CreateModal({
                                    choix: n
                                });
                            case 7:
                                s = e.sent, t.ignoreControls = !1, 1 === s.id && t.addChannelOption(), e.next = 14;
                                break;
                            case 12:
                                a = t.tchatChannels[t.currentSelect].channel, t.$router.push({
                                    name: "tchat.channel.show",
                                    params: {
                                        channel: a
                                    }
                                });
                            case 14:
                            case "end":
                                return e.stop()
                        }
                    }, e, t)
                }))()
            },
            onBack: function() {
                !0 !== this.ignoreControls && this.$router.push({
                    name: "home"
                })
            },
            addChannelOption: function() {
                var t = this;
                return i()(o.a.mark(function e() {
                    var n, s;
                    return o.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, t.$phoneAPI.getReponseText({
                                    limit: 20
                                });
                            case 2:
                                n = e.sent, s = (n || {}).text || "", s = s.toLowerCase().replace(/[^a-z]/g, ""), s.length > 0 && t.tchatAddChannel({
                                    channel: s
                                });
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }, e, t)
                }))()
            },
            removeChannelOption: function() {
                var t = this;
                return i()(o.a.mark(function e() {
                    var n;
                    return o.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                n = t.tchatChannels[t.currentSelect].channel, t.tchatRemoveChannel({
                                    channel: n
                                });
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }, e, t)
                }))()
            }
        }),
        created: function() {
            this.$bus.$on("keyUpArrowDown", this.onDown), this.$bus.$on("keyUpArrowUp", this.onUp), this.$bus.$on("keyUpArrowRight", this.onRight), this.$bus.$on("keyUpEnter", this.onEnter), this.$bus.$on("keyUpBackspace", this.onBack)
        },
        beforeDestroy: function() {
            this.$bus.$off("keyUpArrowDown", this.onDown), this.$bus.$off("keyUpArrowUp", this.onUp), this.$bus.$off("keyUpArrowRight", this.onRight), this.$bus.$off("keyUpEnter", this.onEnter), this.$bus.$off("keyUpBackspace", this.onBack)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(9),
        o = n.n(s),
        a = n(8),
        i = n.n(a),
        r = n(2),
        c = n.n(r),
        u = n(1),
        l = n(6),
        h = n.n(l);
    e.default = {
        components: {
            PhoneTitle: h.a
        },
        data: function() {
            return {
                channel: "",
                currentSelect: 0
            }
        },
        computed: c()({}, n.i(u.b)(["tchatMessages", "tchatCurrentChannel"]), {
            channelName: function() {
                return "# " + this.channel
            }
        }),
        watch: {
            tchatMessages: function() {
                var t = this.$refs.elementsDiv;
                t.scrollTop = t.scrollHeight
            }
        },
        methods: c()({
            setChannel: function(t) {
                this.channel = t, this.tchatSetChannel({
                    channel: t
                })
            }
        }, n.i(u.a)(["tchatSetChannel", "tchatSendMessage"]), {
            scrollIntoViewIfNeeded: function() {
                var t = this;
                this.$nextTick(function() {
                    t.$el.querySelector(".select").scrollIntoViewIfNeeded()
                })
            },
            onUp: function() {
                var t = this.$refs.elementsDiv;
                t.scrollTop = t.scrollTop - 120
            },
            onDown: function() {
                var t = this.$refs.elementsDiv;
                t.scrollTop = t.scrollTop + 120
            },
            onEnter: function() {
                var t = this;
                return i()(o.a.mark(function e() {
                    var n, s;
                    return o.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, t.$phoneAPI.getReponseText();
                            case 2:
                                n = e.sent, void 0 !== n && void 0 !== n.text && (s = n.text.trim(), 0 !== s.length && t.tchatSendMessage({
                                    channel: t.channel,
                                    message: s
                                }));
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }, e, t)
                }))()
            },
            onBack: function() {
                this.$router.push({
                    name: "tchat.channel"
                })
            },
            formatTime: function(t) {
                return new Date(t).toLocaleTimeString()
            }
        }),
        created: function() {
            this.$bus.$on("keyUpArrowDown", this.onDown), this.$bus.$on("keyUpArrowUp", this.onUp), this.$bus.$on("keyUpEnter", this.onEnter), this.$bus.$on("keyUpBackspace", this.onBack), this.setChannel(this.$route.params.channel)
        },
        mounted: function() {
            window.c = this.$refs.elementsDiv;
            var t = this.$refs.elementsDiv;
            t.scrollTop = t.scrollHeight
        },
        beforeDestroy: function() {
            this.$bus.$off("keyUpArrowDown", this.onDown), this.$bus.$off("keyUpArrowUp", this.onUp), this.$bus.$off("keyUpEnter", this.onEnter), this.$bus.$off("keyUpBackspace", this.onBack)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = {
        created: function() {
            var t = this;
            setTimeout(function() {
                t.$router.push({
                    name: "tchat.channel"
                })
            }, 700)
        }
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, , , , , , function(t, e, n) {
    function s(t) {
        n(168)
    }
    var o = n(0)(n(79), n(222), s, "data-v-6a46c302", null);
    t.exports = o.exports
}, function(t, e, n) {
    function s(t) {
        n(160)
    }
    var o = n(0)(n(80), n(214), s, "data-v-26ec6c14", null);
    t.exports = o.exports
}, function(t, e, n) {
    function s(t) {
        n(175)
    }
    var o = n(0)(n(81), n(229), s, "data-v-d2b698c8", null);
    t.exports = o.exports
}, function(t, e, n) {
    function s(t) {
        n(172)
    }
    var o = n(0)(n(82), n(226), s, "data-v-9104422e", null);
    t.exports = o.exports
}, function(t, e, n) {
    function s(t) {
        n(155)
    }
    var o = n(0)(n(83), n(209), s, "data-v-0c8c5d42", null);
    t.exports = o.exports
}, function(t, e, n) {
    function s(t) {
        n(153)
    }
    var o = n(0)(n(84), n(207), s, "data-v-0570365f", null);
    t.exports = o.exports
}, function(t, e, n) {
    function s(t) {
        n(154)
    }
    var o = n(0)(n(85), n(208), s, "data-v-07b6e6d2", null);
    t.exports = o.exports
}, function(t, e, n) {
    function s(t) {
        n(171)
    }
    var o = n(0)(n(86), n(225), s, "data-v-821f15d4", null);
    t.exports = o.exports
}, function(t, e, n) {
    function s(t) {
        n(166)
    }
    var o = n(0)(n(87), n(220), s, "data-v-5d567654", null);
    t.exports = o.exports
}, function(t, e, n) {
    function s(t) {
        n(157)
    }
    var o = n(0)(n(88), n(211), s, "data-v-168e4766", null);
    t.exports = o.exports
}, function(t, e, n) {
    function s(t) {
        n(173)
    }
    var o = n(0)(n(89), n(227), s, "data-v-b3e36314", null);
    t.exports = o.exports
}, function(t, e, n) {
    function s(t) {
        n(177)
    }
    var o = n(0)(n(90), n(231), s, "data-v-e5131126", null);
    t.exports = o.exports
}, function(t, e, n) {
    function s(t) {
        n(159)
    }
    var o = n(0)(n(91), n(213), s, "data-v-235696e8", null);
    t.exports = o.exports
}, function(t, e, n) {
    function s(t) {
        n(158)
    }
    var o = n(0)(n(94), n(212), s, null, null);
    t.exports = o.exports
}, function(t, e, n) {
    function s(t) {
        n(174)
    }
    var o = n(0)(n(95), n(228), s, "data-v-d0428988", null);
    t.exports = o.exports
}, function(t, e, n) {
    function s(t) {
        n(152)
    }
    var o = n(0)(n(96), n(206), s, "data-v-01104696", null);
    t.exports = o.exports
}, function(t, e, n) {
    function s(t) {
        n(165)
    }
    var o = n(0)(n(97), n(219), s, "data-v-55f1ad54", null);
    t.exports = o.exports
}, function(t, e, n) {
    function s(t) {
        n(169)
    }
    var o = n(0)(n(98), n(223), s, "data-v-6cc9c1b2", null);
    t.exports = o.exports
}, function(t, e, n) {
    function s(t) {
        n(164)
    }
    var o = n(0)(n(99), n(218), s, "data-v-4d7b8c36", null);
    t.exports = o.exports
}, function(t, e, n) {
    var s = n(0)(n(101), null, null, null, null);
    t.exports = s.exports
}, function(t, e, n) {
    function s(t) {
        n(162)
    }
    var o = n(0)(n(102), n(216), s, "data-v-3967a7e3", null);
    t.exports = o.exports
}, function(t, e, n) {
    function s(t) {
        n(156)
    }
    var o = n(0)(n(103), n(210), s, "data-v-15f3ee32", null);
    t.exports = o.exports
}, function(t, e, n) {
    function s(t) {
        n(167)
    }
    var o = n(0)(n(104), n(221), s, "data-v-5fdffa03", null);
    t.exports = o.exports
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_app messages"
            }, [n("PhoneTitle", {
                attrs: {
                    title: t.displayContact,
                    backgroundColor: t.color
                }
            }), t._v(" "), void 0 !== t.imgZoom ? n("div", {
                staticClass: "img-fullscreen"
            }, [n("img", {
                attrs: {
                    src: t.imgZoom
                }
            })]) : t._e(), t._v(" "), n("div", {
                attrs: {
                    id: "sms_list"
                }
            }, t._l(t.messagesList, function(e, s) {
                return n("div", {
                    key: e.id,
                    staticClass: "sms",
                    class: {
                        select: s === t.selectMessage
                    }
                }, [n("span", {
                    staticClass: "sms_message sms_me",
                    class: {
                        sms_other: 0 === e.owner
                    },
                    style: t.colorSmsOwner[e.owner]
                }, [t.isSMSImage(e) ? n("img", {
                    staticClass: "sms-img",
                    attrs: {
                        src: e.message
                    }
                }) : n("span", [t._v(t._s(e.message))]), t._v(" "), n("span", [n("timeago", {
                    staticClass: "sms_time",
                    style: t.colorSmsOwner[e.owner],
                    attrs: {
                        since: e.time,
                        "auto-update": 20
                    }
                })], 1)])])
            })), t._v(" "), n("div", {
                attrs: {
                    id: "sms_write"
                }
            }, [n("input", {
                attrs: {
                    type: "text",
                    placeholder: "Enter a message"
                }
            }), t._v(" "), n("div", {
                staticClass: "sms_send"
            }, [n("svg", {
                attrs: {
                    height: "24",
                    viewBox: "0 0 24 24",
                    width: "24"
                }
            }, [n("path", {
                attrs: {
                    d: "M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
                }
            }), t._v(" "), n("path", {
                attrs: {
                    d: "M0 0h24v24H0z",
                    fill: "none"
                }
            })])])])], 1)
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_app"
            }, [n("PhoneTitle", {
                attrs: {
                    title: "Telephone"
                }
            }), t._v(" "), n("div", {
                staticClass: "content"
            }, [n("div", {
                staticClass: "number"
            }, [t._v("\n     " + t._s(t.numeroFormat) + "\n   ")]), t._v(" "), n("div", {
                staticClass: "keyboard"
            }, t._l(t.keyInfo, function(e, s) {
                return n("div", {
                    key: e.primary,
                    staticClass: "key",
                    class: {
                        "key-select": s === t.keySelect, keySpe: !0 === e.isNotNumber
                    }
                }, [n("span", {
                    staticClass: "key-primary"
                }, [t._v(t._s(e.primary))]), t._v(" "), n("span", {
                    staticClass: "key-secondary"
                }, [t._v(t._s(e.secondary))])])
            })), t._v(" "), n("div", {
                staticClass: "call"
            }, [n("div", {
                staticClass: "call-btn",
                class: {
                    active: 12 === t.keySelect
                }
            }, [n("svg", {
                attrs: {
                    viewBox: "0 0 24 24"
                }
            }, [n("g", {
                attrs: {
                    transform: "rotate(0, 12, 12)"
                }
            }, [n("path", {
                attrs: {
                    d: "M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"
                }
            })])])])])])], 1)
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_app"
            }, [n("div", {
                staticClass: "elements"
            }, t._l(t.historique, function(e, s) {
                return n("div", {
                    key: s,
                    staticClass: "element",
                    class: {
                        active: t.selectIndex === s
                    }
                }, [n("div", {
                    staticClass: "elem-pic",
                    style: {
                        backgroundColor: e.color
                    }
                }, [t._v(t._s(e.letter))]), t._v(" "), n("div", {
                    staticClass: "elem-content"
                }, [n("div", {
                    staticClass: "elem-content-p"
                }, [t._v(t._s(e.display))]), t._v(" "), n("div", {
                    staticClass: "elem-content-s"
                }, [t._l(e.lastCall, function(e, s) {
                    return n("div", {
                        key: s,
                        staticClass: "elem-histo-pico",
                        class: {
                            reject: !1 === e.accept
                        }
                    }, [1 === e.accepts && 1 === e.incoming ? n("svg", {
                        attrs: {
                            viewBox: "0 0 24 24",
                            fill: "#43a047"
                        }
                    }, [n("path", {
                        attrs: {
                            d: "M9,5v2h6.59L4,18.59L5.41,20L17,8.41V15h2V5H9z"
                        }
                    })]) : 1 === e.accepts && 0 === e.incoming ? n("svg", {
                        attrs: {
                            viewBox: "0 0 24 24",
                            fill: "#43a047"
                        }
                    }, [n("path", {
                        attrs: {
                            d: "M20,5.41L18.59,4L7,15.59V9H5v10h10v-2H8.41L20,5.41z"
                        }
                    })]) : 0 === e.accepts && 1 === e.incoming ? n("svg", {
                        attrs: {
                            viewBox: "0 0 24 24",
                            fill: "#D32F2F"
                        }
                    }, [n("path", {
                        attrs: {
                            d: "M3,8.41l9,9l7-7V15h2V7h-8v2h4.59L12,14.59L4.41,7L3,8.41z"
                        }
                    })]) : 0 === e.accepts && 0 === e.incoming ? n("svg", {
                        attrs: {
                            viewBox: "0 0 24 24",
                            fill: "#D32F2F"
                        }
                    }, [n("path", {
                        attrs: {
                            d: "M19.59,7L12,14.59L6.41,9H11V7H3v8h2v-4.59l7,7l9-9L19.59,7z"
                        }
                    })]) : t._e()])
                }), t._v(" "), 0 !== e.lastCall.length ? n("div", {
                    staticClass: "lastCall"
                }, [n("timeago", {
                    attrs: {
                        since: e.lastCall[0].date,
                        "auto-update": 20
                    }
                })], 1) : t._e()], 2)]), t._v(" "), t._m(0, !0)])
            }))])
        },
        staticRenderFns: [function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "elem-icon"
            }, [n("i", {
                staticClass: "fa fa-phone"
            })])
        }]
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", [n("list", {
                attrs: {
                    list: t.callList,
                    showHeader: !1,
                    disable: t.ignoreControls
                },
                on: {
                    select: t.onSelect
                }
            })], 1)
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_app"
            }, [n("PhoneTitle", {
                attrs: {
                    title: t.channelName,
                    backgroundColor: "#090f20"
                }
            }), t._v(" "), n("div", {
                staticClass: "phone_content"
            }, [n("div", {
                ref: "elementsDiv",
                staticClass: "elements"
            }, t._l(t.tchatMessages, function(e) {
                return n("div", {
                    key: e.id,
                    staticClass: "element"
                }, [n("div", {
                    staticClass: "time"
                }, [t._v(t._s(t.formatTime(e.time)))]), t._v(" "), n("div", {
                    staticClass: "message"
                }, [t._v("\n            " + t._s(e.message) + "\n          ")])])
            })), t._v(" "), t._m(0)])], 1)
        },
        staticRenderFns: [function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "tchat_write"
            }, [n("input", {
                attrs: {
                    type: "text",
                    placeholder: "Enter message"
                }
            }), t._v(" "), n("span", {
                staticClass: "tchat_send"
            }, [t._v(">")])])
        }]
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_app"
            }, [n("PhoneTitle", {
                attrs: {
                    title: t.contact.display
                }
            }), t._v(" "), n("div", {
                staticClass: "phone_content content inputText"
            }, [n("div", {
                staticClass: "group select",
                attrs: {
                    "data-type": "text",
                    "data-model": "display",
                    "data-maxlength": "64"
                }
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.contact.display,
                    expression: "contact.display"
                }],
                attrs: {
                    type: "text"
                },
                domProps: {
                    value: t.contact.display
                },
                on: {
                    input: function(e) {
                        e.target.composing || t.$set(t.contact, "display", e.target.value)
                    }
                }
            }), t._v(" "), n("span", {
                staticClass: "highlight"
            }), t._v(" "), n("span", {
                staticClass: "bar"
            }), t._v(" "), n("label", [t._v("Contact Name")])]), t._v(" "), n("div", {
                staticClass: "group inputText",
                attrs: {
                    "data-type": "text",
                    "data-model": "number",
                    "data-maxlength": "10"
                }
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.contact.number,
                    expression: "contact.number"
                }],
                attrs: {
                    type: "text"
                },
                domProps: {
                    value: t.contact.number
                },
                on: {
                    input: function(e) {
                        e.target.composing || t.$set(t.contact, "number", e.target.value)
                    }
                }
            }), t._v(" "), n("span", {
                staticClass: "highlight"
            }), t._v(" "), n("span", {
                staticClass: "bar"
            }), t._v(" "), n("label", [t._v("Number")])]), t._v(" "), t._m(0), t._v(" "), t._m(1), t._v(" "), t._m(2)])], 1)
        },
        staticRenderFns: [function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "group ",
                staticStyle: {
                    "margin-top": "56px"
                },
                attrs: {
                    "data-type": "button",
                    "data-action": "save"
                }
            }, [n("input", {
                staticClass: "btn btn-green",
                attrs: {
                    type: "button",
                    value: "Accept"
                }
            })])
        }, function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "group",
                attrs: {
                    "data-type": "button",
                    "data-action": "cancel"
                }
            }, [n("input", {
                staticClass: "btn btn-orange",
                attrs: {
                    type: "button",
                    value: "Cancel"
                }
            })])
        }, function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "group",
                attrs: {
                    "data-type": "button",
                    "data-action": "delete"
                }
            }, [n("input", {
                staticClass: "btn btn-red",
                attrs: {
                    type: "button",
                    value: "Remove"
                }
            })])
        }]
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_app"
            }, [n("div", {
                staticClass: "backblur",
                style: {
                    background: "url(" + t.backgroundURL + ")"
                }
            }), t._v(" "), n("InfoBare", {
                staticClass: "infobare"
            }), t._v(" "), n("div", {
                staticClass: "menu"
            }, [n("div", {
                staticClass: "menu_content"
            }, [n("div", {
                staticClass: "menu_buttons"
            }, t._l(t.Apps, function(e, s) {
                return n("button", {
                    key: e.name,
                    class: {
                        select: s === t.currentSelect
                    },
                    style: {
                        backgroundImage: "url(" + e.icons + ")"
                    }
                }, [t._v("\n              " + t._s(e.name) + "\n              "), void 0 !== e.puce && 0 !== e.puce ? n("span", {
                    staticClass: "puce"
                }, [t._v(t._s(e.puce))]) : t._e()])
            }))])])], 1)
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "home",
                style: {
                    background: "url(" + t.backgroundURL + ")"
                }
            }, [n("InfoBare"), t._v(" "), t.messages.length >= 220 ? n("span", {
                staticClass: "warningMess"
            }, [t._v("Saturation mémoires !"), n("br"), t._v(t._s(t.messages.length) + " / 250")]) : t._e(), t._v(" "), n("div", {
                staticClass: "home_buttons"
            }, [t._l(t.AppsHome, function(e, s) {
                return n("button", {
                    key: e.name,
                    class: {
                        select: s === t.currentSelect
                    },
                    style: {
                        backgroundImage: "url(" + e.icons + ")"
                    }
                }, [t._v("\n        " + t._s(e.name) + "\n        "), void 0 !== e.puce && 0 !== e.puce ? n("span", {
                    staticClass: "puce"
                }, [t._v(t._s(e.puce))]) : t._e()])
            }), t._v(" "), n("div", {
                staticClass: "btn_menu_ctn"
            }, [n("button", {
                staticClass: "btn_menu",
                class: {
                    select: t.AppsHome.length === t.currentSelect
                },
                style: {
                    backgroundImage: "url(/html/static/img/icons_app/menu.png)"
                }
            })])], 2)], 1)
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_app"
            }, [n("PhoneTitle", {
                attrs: {
                    title: "Telephone"
                }
            }), t._v(" "), n("div", {
                staticClass: "content"
            }, [n(t.subMenu[t.currentMenuIndex].Comp, {
                tag: "component"
            })], 1), t._v(" "), n("div", {
                staticClass: "subMenu"
            }, t._l(t.subMenu, function(e, s) {
                return n("div", {
                    key: s,
                    staticClass: "subMenu-elem",
                    style: t.getColorItem(s)
                }, [n("i", {
                    staticClass: "subMenu-icon fa",
                    class: ["fa-" + e.icon]
                }), t._v(" "), n("span", {
                    staticClass: "subMenu-name"
                }, [t._v(t._s(e.name))])])
            }))], 1)
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_infoBare barre-header"
            }, [n("span", {
                staticClass: "reseau"
            }, [t._v(t._s(t.config.reseau))]), t._v(" "), n("span", {
                staticClass: "time"
            }, [n("current-time")], 1), t._v(" "), n("hr", {
                staticClass: "batterie1"
            }), t._v(" "), n("hr", {
                staticClass: "batterie2"
            }), t._v(" "), n("hr", {
                staticClass: "barre1"
            }), t._v(" "), n("hr", {
                staticClass: "barre2"
            }), t._v(" "), n("hr", {
                staticClass: "barre3"
            }), t._v(" "), n("hr", {
                staticClass: "barre4"
            })])
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_app"
            }, [n("PhoneTitle", {
                attrs: {
                    title: t.title,
                    backgroundColor: "#090f20"
                }
            }), t._v(" "), n("div", {
                staticClass: "elements"
            }, t._l(t.tchatChannels, function(e, s) {
                return n("div", {
                    key: e.channel,
                    staticClass: "element",
                    class: {
                        select: s === t.currentSelect
                    }
                }, [n("div", {
                    staticClass: "elem-title"
                }, [n("span", {
                    staticClass: "diese"
                }, [t._v("#")]), t._v(" " + t._s(e.channel))])])
            }))], 1)
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_title_content",
                class: {
                    hasInfoBare: t.showInfoBare
                },
                style: t.style
            }, [t.showInfoBare ? n("InfoBare") : t._e(), t._v(" "), n("div", {
                staticClass: "phone_title",
                style: {
                    backgroundColor: t.backgroundColor
                }
            }, [t._v(t._s(t.title))])], 1)
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_app"
            }, [n("PhoneTitle", {
                attrs: {
                    title: "Settings"
                }
            }), t._v(" "), n("div", {
                staticClass: "phone_content elements"
            }, t._l(t.paramList, function(e, s) {
                return n("div", {
                    key: s,
                    staticClass: "element",
                    class: {
                        select: s === t.currentSelect
                    }
                }, [n("i", {
                    staticClass: "fa",
                    class: e.icons,
                    style: {
                        color: e.color
                    }
                }), t._v(" "), n("div", {
                    staticClass: "element-content"
                }, [n("span", {
                    staticClass: "element-title"
                }, [t._v(t._s(e.title))]), t._v(" "), e.value ? n("span", {
                    staticClass: "element-value"
                }, [t._v(t._s(e.value))]) : t._e()])])
            }))], 1)
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "screen"
            }, [n("list", {
                attrs: {
                    list: t.messagesData,
                    disable: t.disableList,
                    title: "Messages"
                },
                on: {
                    select: t.onSelect,
                    option: t.onOption
                }
            })], 1)
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_app"
            }, [n("PhoneTitle", {
                attrs: {
                    title: "Bourse"
                }
            }), t._v(" "), n("div", {
                staticClass: "elements"
            }, t._l(t.bourseInfo, function(e, s) {
                return n("div", {
                    key: s,
                    staticClass: "element",
                    class: {
                        select: s === t.currentSelect
                    }
                }, [n("div", {
                    staticClass: "elem-evo"
                }, [n("i", {
                    staticClass: "fa",
                    class: t.classInfo(e)
                })]), t._v(" "), n("div", {
                    staticClass: "elem-libelle"
                }, [t._v(t._s(e.libelle))]), t._v(" "), n("div", {
                    staticClass: "elem-price",
                    style: {
                        color: t.colorBourse(e)
                    }
                }, [t._v(t._s(e.price) + " $ ")]), t._v(" "), n("div", {
                    staticClass: "elem-difference",
                    style: {
                        color: t.colorBourse(e)
                    }
                }, [e.difference > 0 ? n("span", [t._v("+")]) : t._e(), t._v(t._s(e.difference))])])
            }))], 1)
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement;
            t._self._c;
            return t._m(0)
        },
        staticRenderFns: [function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "splash"
            }, [n("img", {
                attrs: {
                    src: "/html/static/img/app_tchat/splashtchat.png",
                    alt: ""
                }
            })])
        }]
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_app"
            }, [n("PhoneTitle", {
                attrs: {
                    title: "9 GAG (" + t.currentSelectPost + ")",
                    backgroundColor: "#000"
                }
            }), t._v(" "), n("div", {
                staticClass: "phone_content"
            }, [void 0 !== t.currentPost ? n("div", {
                staticClass: "post"
            }, [n("h1", {
                staticClass: "post-title"
            }, [t._v(t._s(t.currentPost.title))]), t._v(" "), n("div", {
                staticClass: "post-content"
            }, [void 0 !== t.currentPost.images.image460svwm ? n("video", {
                ref: "video",
                staticClass: "post-video",
                attrs: {
                    autoplay: "",
                    loop: "",
                    src: t.currentPost.images.image460svwm.url
                }
            }) : n("img", {
                staticClass: "post-image",
                attrs: {
                    src: t.currentPost.images.image460.url,
                    alt: ""
                }
            })])]) : n("div", {
                staticClass: "loading"
            }, [n("div", [t._v("CHARGEMENT")])])])], 1)
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("transition", {
                attrs: {
                    name: "modal"
                }
            }, [n("div", {
                staticClass: "modal-mask"
            }, [n("div", {
                staticClass: "modal-container"
            }, t._l(t.choix, function(e, s) {
                return n("div", {
                    key: s,
                    staticClass: "modal-choix",
                    class: {
                        select: s === t.currentSelect
                    },
                    style: {
                        color: e.color
                    }
                }, [n("i", {
                    staticClass: "fa",
                    class: e.icons
                }), t._v(t._s(e.title) + "\r\n            ")])
            }))])])
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return !0 === t.show ? n("div", {
                style: {
                    zoom: t.zoom
                }
            }, [n("div", {
                staticClass: "phone_wrapper"
            }, [n("div", {
                staticClass: "phone_coque",
                style: {
                    backgroundImage: "url(/html/static/img/coque/" + t.coque.value + ")"
                }
            }), t._v(" "), n("div", {
                staticClass: "phone_screen",
                attrs: {
                    id: "app"
                }
            }, [n("router-view")], 1)])]) : t._e()
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "screen"
            }, [n("div", {
                staticClass: "elements"
            }, [n("img", {
                staticClass: "logo_maze",
                attrs: {
                    src: "/html/static/img/app_bank/logo_mazebank.jpg"
                }
            }), t._v(" "), n("div", {
                staticClass: "hr"
            }), t._v(" "), n("div", {
                staticClass: "element"
            }, [n("div", {
                staticClass: "element-content"
            }, [n("span", [t._v("$ " + t._s(t.bankAmontFormat))])])])])])
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", [n("list", {
                attrs: {
                    list: t.contactsList,
                    showHeader: !1
                },
                on: {
                    select: t.onSelect
                }
            })], 1)
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "contact"
            }, [n("list", {
                attrs: {
                    list: t.lcontacts,
                    disable: t.disableList,
                    title: "Contacts"
                },
                on: {
                    select: t.onSelect,
                    option: t.onOption
                }
            })], 1)
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "contact"
            }, [n("list", {
                attrs: {
                    list: t.lcontacts,
                    title: "Contacts"
                },
                on: {
                    select: t.onSelect
                }
            })], 1)
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_app"
            }, [n("div", {
                staticClass: "backblur",
                style: {
                    background: "url(" + t.backgroundURL + ")"
                }
            }), t._v(" "), n("InfoBare"), t._v(" "), n("div", {
                staticClass: "num"
            }, [t._v(t._s(t.appelsDisplayNumber))]), t._v(" "), n("div", {
                staticClass: "contactName"
            }, [t._v(t._s(t.appelsDisplayName))]), t._v(" "), n("div", {
                staticClass: "time"
            }), t._v(" "), n("div", {
                staticClass: "time-display"
            }, [t._v(t._s(t.timeDisplay))]), t._v(" "), n("div", {
                staticClass: "actionbox"
            }, [n("div", {
                staticClass: "action raccrocher",
                class: {
                    disable: 0 === t.status && 0 !== t.select
                }
            }, [n("svg", {
                attrs: {
                    viewBox: "0 0 24 24"
                }
            }, [n("g", {
                attrs: {
                    transform: "rotate(135, 12, 12)"
                }
            }, [n("path", {
                attrs: {
                    d: "M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"
                }
            })])])]), t._v(" "), 0 === t.status ? n("div", {
                staticClass: "action deccrocher",
                class: {
                    disable: 0 === t.status && 1 !== t.select
                }
            }, [n("svg", {
                attrs: {
                    viewBox: "0 0 24 24"
                }
            }, [n("g", {
                attrs: {
                    transform: "rotate(0, 12, 12)"
                }
            }, [n("path", {
                attrs: {
                    d: "M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"
                }
            })])])]) : t._e()])], 1)
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_app"
            }, [t.showHeader ? n("PhoneTitle", {
                attrs: {
                    title: t.title,
                    showInfoBare: t.showInfoBare
                }
            }) : t._e(), t._v(" "), n("div", {
                staticClass: "phone_content elements"
            }, t._l(t.list, function(e, s) {
                return n("div", {
                    key: e[t.keyDispay],
                    staticClass: "element",
                    class: {
                        select: s === t.currentSelect
                    }
                }, [n("div", {
                    staticClass: "elem-pic",
                    style: t.stylePuce(e)
                }, [t._v("\n            " + t._s(e.letter || e[t.keyDispay][0]) + "\n          ")]), t._v(" "), void 0 !== e.puce && 0 !== e.puce ? n("div", {
                    staticClass: "elem-puce"
                }, [t._v(t._s(e.puce))]) : t._e(), t._v(" "), void 0 === e.keyDesc || "" === e.keyDesc ? n("div", {
                    staticClass: "elem-title"
                }, [t._v(t._s(e[t.keyDispay]))]) : t._e(), t._v(" "), void 0 !== e.keyDesc && "" !== e.keyDesc ? n("div", {
                    staticClass: "elem-title-has-desc"
                }, [t._v(t._s(e[t.keyDispay]))]) : t._e(), t._v(" "), void 0 !== e.keyDesc && "" !== e.keyDesc ? n("div", {
                    staticClass: "elem-description"
                }, [t._v(t._s(e.keyDesc))]) : t._e()])
            }))], 1)
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement;
            return (t._self._c || e)("span", [t._v(t._s(t.time))])
        },
        staticRenderFns: []
    }
}], [70]);
