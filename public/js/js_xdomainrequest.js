(function (n) {
    typeof define == "function" && define.amd ? define(["jquery"], n) : typeof exports == "object" ? module.exports = n(require("jquery")) : n(jQuery)
})(function (n) {
    if (!n.support.cors && n.ajaxTransport && window.XDomainRequest) {
        var t = /^https?:\/\//i, i = /^get|post$/i, r = new RegExp("^" + location.protocol, "i");
        n.ajaxTransport("* text html xml json", function (u, f) {
            if (u.crossDomain && u.async && i.test(u.type) && t.test(u.url) && r.test(u.url)) {
                var e = null;
                return {
                    send: function (t, i) {
                        var o = "", r = (f.dataType || "").toLowerCase();
                        e = new XDomainRequest;
                        /^\d+$/.test(f.timeout) && (e.timeout = f.timeout);
                        e.ontimeout = function () {
                            i(500, "timeout")
                        };
                        e.onload = function () {
                            var o = "Content-Length: " + e.responseText.length + "\r\nContent-Type: " + e.contentType, u = {
                                code: 200,
                                message: "success"
                            }, f = {text: e.responseText}, t;
                            try {
                                if (r === "html" || /text\/html/i.test(e.contentType)) f.html = e.responseText; else if (r === "json" || r !== "text" && /\/json/i.test(e.contentType))try {
                                    f.json = n.parseJSON(e.responseText)
                                } catch (h) {
                                    u.code = 500;
                                    u.message = "parseerror"
                                } else if (r === "xml" || r !== "text" && /\/xml/i.test(e.contentType)) {
                                    t = new ActiveXObject("Microsoft.XMLDOM");
                                    t.async = !1;
                                    try {
                                        t.loadXML(e.responseText)
                                    } catch (h) {
                                        t = undefined
                                    }
                                    if (!t || !t.documentElement || t.getElementsByTagName("parsererror").length) {
                                        u.code = 500;
                                        u.message = "parseerror";
                                        throw"Invalid XML: " + e.responseText;
                                    }
                                    f.xml = t
                                }
                            } catch (s) {
                                throw s;
                            } finally {
                                i(u.code, u.message, f, o)
                            }
                        };
                        e.onprogress = function () {
                        };
                        e.onerror = function () {
                            i(500, "error", {text: e.responseText})
                        };
                        f.data && (o = n.type(f.data) === "string" ? f.data : n.param(f.data));
                        e.open(u.type, u.url);
                        e.send(o)
                    }, abort: function () {
                        e && e.abort()
                    }
                }
            }
        })
    }
})