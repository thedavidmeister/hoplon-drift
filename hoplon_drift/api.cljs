(ns hoplon-drift.api
 (:require
  [javelin.core :as j]
  [hoplon.core :as h]
  oops.core))

(defn lib?
 []
 (and
  (oops.core/oget js/window "?drift")
  (= "0.3.1" (oops.core/oget js/window "?drift.?SNIPPET_VERSION"))))

(defn ensure-lib!
 []
 (when-not (lib?)
  (js* "
!function() {
  var t;
  if (t = window.driftt = window.drift = window.driftt || [], !t.init) return t.invoked ? void (window.console && console.error && console.error(\"Drift snippet included twice.\")) : (t.invoked = !0,
  t.methods = [ \"identify\", \"config\", \"track\", \"reset\", \"debug\", \"show\", \"ping\", \"page\", \"hide\", \"off\", \"on\" ],
  t.factory = function(e) {
   return function() {
    var n;
    return n = Array.prototype.slice.call(arguments), n.unshift(e), t.push(n), t;
   };
  }, t.methods.forEach(function(e) {
   t[e] = t.factory(e);
  })
 );
}();
drift.SNIPPET_VERSION = '0.3.1';"))
 (lib?))

(defn lib
 []
 (ensure-lib!)
 (oops.core/oget
  js/window
  "drift"))
