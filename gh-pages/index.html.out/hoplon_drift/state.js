// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('hoplon_drift.state');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('javelin.core');
goog.require('hoplon.core');
goog.require('hoplon_drift.api');
hoplon_drift.state.ready_QMARK_ = (function (){var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(null);
var f = ((function (c){
return (function hoplon_drift$state$f(){
if(cljs.core.truth_(hoplon_drift.api.lib_QMARK_())){
var target_obj_20742 = hoplon_drift.api.lib();
var call_info_20744 = [target_obj_20742,(function (){var next_obj_20745 = (target_obj_20742["on"]);
return next_obj_20745;
})()];
var fn_20743 = (call_info_20744[(1)]);
if(!((fn_20743 == null))){
return fn_20743.call((call_info_20744[(0)]),"ready",((function (call_info_20744,fn_20743,target_obj_20742,c){
return (function (){
return cljs.core.reset_BANG_(c,true);
});})(call_info_20744,fn_20743,target_obj_20742,c))
);
} else {
return null;
}
} else {
var G__20746 = ((function (c){
return (function (){
return hoplon_drift$state$f();
});})(c))
;
var G__20747 = (100);
return setTimeout(G__20746,G__20747);
}
});})(c))
;
hoplon_drift.api.ensure_lib_BANG_();

f();

var fexpr__20749 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (c,f){
return (function (G__20748){
return G__20748;
});})(c,f))
);
return (fexpr__20749.cljs$core$IFn$_invoke$arity$1 ? fexpr__20749.cljs$core$IFn$_invoke$arity$1(c) : fexpr__20749.call(null,c));
})();
