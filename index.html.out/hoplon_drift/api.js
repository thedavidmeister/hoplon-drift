// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('hoplon_drift.api');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('javelin.core');
goog.require('hoplon.core');
goog.require('oops.core');
hoplon_drift.api.lib_QMARK_ = (function hoplon_drift$api$lib_QMARK_(){
var and__8262__auto__ = (function (){var target_obj_20733 = window;
var next_obj_20734 = (target_obj_20733["drift"]);
if(!((next_obj_20734 == null))){
return next_obj_20734;
} else {
return null;
}
})();
if(cljs.core.truth_(and__8262__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("0.3.1",(function (){var target_obj_20735 = window;
var next_obj_20736 = (target_obj_20735["drift"]);
if(!((next_obj_20736 == null))){
var next_obj_20737 = (next_obj_20736["SNIPPET_VERSION"]);
if(!((next_obj_20737 == null))){
return next_obj_20737;
} else {
return null;
}
} else {
return null;
}
})());
} else {
return and__8262__auto__;
}
});
hoplon_drift.api.ensure_lib_BANG_ = (function hoplon_drift$api$ensure_lib_BANG_(){
if(cljs.core.truth_(hoplon_drift.api.lib_QMARK_())){
} else {

!function() {
  var t;
  if (t = window.driftt = window.drift = window.driftt || [], !t.init) return t.invoked ? void (window.console && console.error && console.error("Drift snippet included twice.")) : (t.invoked = !0,
  t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ],
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
drift.SNIPPET_VERSION = '0.3.1';;
}

return hoplon_drift.api.lib_QMARK_();
});
hoplon_drift.api.lib = (function hoplon_drift$api$lib(){
hoplon_drift.api.ensure_lib_BANG_();

var target_obj_20738 = window;
var next_obj_20739 = (target_obj_20738["drift"]);
return next_obj_20739;
});
