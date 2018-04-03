// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('oops.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('goog.object');
goog.require('oops.sdefs');
goog.require('oops.state');
goog.require('oops.config');
goog.require('oops.messages');
goog.require('oops.helpers');
goog.require('oops.schema');
oops.core.report_error_dynamically = (function oops$core$report_error_dynamically(msg,data){
if(oops.state.was_error_reported_QMARK_()){
return null;
} else {
oops.state.mark_error_reported_BANG_();

var G__20604 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__20604)){
throw oops.state.prepare_error_from_call_site(msg,(function (){var data__20351__auto__ = data;
var or__8274__auto__ = ((oops.config.use_envelope_QMARK_())?(function (){var temp__5533__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5533__auto__)){
var devtools__20352__auto__ = temp__5533__auto__;
var temp__5533__auto____$1 = (devtools__20352__auto__["toolbox"]);
if(cljs.core.truth_(temp__5533__auto____$1)){
var toolbox__20353__auto__ = temp__5533__auto____$1;
var temp__5533__auto____$2 = (toolbox__20353__auto__["envelope"]);
if(cljs.core.truth_(temp__5533__auto____$2)){
var envelope__20354__auto__ = temp__5533__auto____$2;
if(cljs.core.fn_QMARK_(envelope__20354__auto__)){
return (envelope__20354__auto__.cljs$core$IFn$_invoke$arity$2 ? envelope__20354__auto__.cljs$core$IFn$_invoke$arity$2(data__20351__auto__,"details") : envelope__20354__auto__.call(null,data__20351__auto__,"details"));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return data__20351__auto__;
}
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__20604)){
var G__20606 = (console["error"]);
var G__20607 = msg;
var G__20608 = (function (){var data__20351__auto__ = data;
var or__8274__auto__ = ((oops.config.use_envelope_QMARK_())?(function (){var temp__5533__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5533__auto__)){
var devtools__20352__auto__ = temp__5533__auto__;
var temp__5533__auto____$1 = (devtools__20352__auto__["toolbox"]);
if(cljs.core.truth_(temp__5533__auto____$1)){
var toolbox__20353__auto__ = temp__5533__auto____$1;
var temp__5533__auto____$2 = (toolbox__20353__auto__["envelope"]);
if(cljs.core.truth_(temp__5533__auto____$2)){
var envelope__20354__auto__ = temp__5533__auto____$2;
if(cljs.core.fn_QMARK_(envelope__20354__auto__)){
return (envelope__20354__auto__.cljs$core$IFn$_invoke$arity$2 ? envelope__20354__auto__.cljs$core$IFn$_invoke$arity$2(data__20351__auto__,"details") : envelope__20354__auto__.call(null,data__20351__auto__,"details"));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return data__20351__auto__;
}
})();
var fexpr__20605 = oops.state.get_console_reporter();
return (fexpr__20605.cljs$core$IFn$_invoke$arity$3 ? fexpr__20605.cljs$core$IFn$_invoke$arity$3(G__20606,G__20607,G__20608) : fexpr__20605.call(null,G__20606,G__20607,G__20608));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__20604)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20604)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__20609 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__20609)){
throw oops.state.prepare_error_from_call_site(msg,(function (){var data__20351__auto__ = data;
var or__8274__auto__ = ((oops.config.use_envelope_QMARK_())?(function (){var temp__5533__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5533__auto__)){
var devtools__20352__auto__ = temp__5533__auto__;
var temp__5533__auto____$1 = (devtools__20352__auto__["toolbox"]);
if(cljs.core.truth_(temp__5533__auto____$1)){
var toolbox__20353__auto__ = temp__5533__auto____$1;
var temp__5533__auto____$2 = (toolbox__20353__auto__["envelope"]);
if(cljs.core.truth_(temp__5533__auto____$2)){
var envelope__20354__auto__ = temp__5533__auto____$2;
if(cljs.core.fn_QMARK_(envelope__20354__auto__)){
return (envelope__20354__auto__.cljs$core$IFn$_invoke$arity$2 ? envelope__20354__auto__.cljs$core$IFn$_invoke$arity$2(data__20351__auto__,"details") : envelope__20354__auto__.call(null,data__20351__auto__,"details"));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return data__20351__auto__;
}
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__20609)){
var G__20611 = (console["warn"]);
var G__20612 = msg;
var G__20613 = (function (){var data__20351__auto__ = data;
var or__8274__auto__ = ((oops.config.use_envelope_QMARK_())?(function (){var temp__5533__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5533__auto__)){
var devtools__20352__auto__ = temp__5533__auto__;
var temp__5533__auto____$1 = (devtools__20352__auto__["toolbox"]);
if(cljs.core.truth_(temp__5533__auto____$1)){
var toolbox__20353__auto__ = temp__5533__auto____$1;
var temp__5533__auto____$2 = (toolbox__20353__auto__["envelope"]);
if(cljs.core.truth_(temp__5533__auto____$2)){
var envelope__20354__auto__ = temp__5533__auto____$2;
if(cljs.core.fn_QMARK_(envelope__20354__auto__)){
return (envelope__20354__auto__.cljs$core$IFn$_invoke$arity$2 ? envelope__20354__auto__.cljs$core$IFn$_invoke$arity$2(data__20351__auto__,"details") : envelope__20354__auto__.call(null,data__20351__auto__,"details"));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return data__20351__auto__;
}
})();
var fexpr__20610 = oops.state.get_console_reporter();
return (fexpr__20610.cljs$core$IFn$_invoke$arity$3 ? fexpr__20610.cljs$core$IFn$_invoke$arity$3(G__20611,G__20612,G__20613) : fexpr__20610.call(null,G__20611,G__20612,G__20613));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__20609)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20609)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__9560__auto__ = [];
var len__9553__auto___20620 = arguments.length;
var i__9554__auto___20621 = (0);
while(true){
if((i__9554__auto___20621 < len__9553__auto___20620)){
args__9560__auto__.push((arguments[i__9554__auto___20621]));

var G__20622 = (i__9554__auto___20621 + (1));
i__9554__auto___20621 = G__20622;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__20616){
var vec__20617 = p__20616;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20617,(0),null);
return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq20614){
var G__20615 = cljs.core.first(seq20614);
var seq20614__$1 = cljs.core.next(seq20614);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(G__20615,seq20614__$1);
});

oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_20624 = oops.config.get_child_factory();
var child_factory_20624__$1 = (function (){var G__20625 = child_factory_20624;
var G__20625__$1 = (((G__20625 instanceof cljs.core.Keyword))?G__20625.fqn:null);
switch (G__20625__$1) {
case "js-obj":
return ((function (G__20625,G__20625__$1,child_factory_20624){
return (function (){
return {};
});
;})(G__20625,G__20625__$1,child_factory_20624))

break;
case "js-array":
return ((function (G__20625,G__20625__$1,child_factory_20624){
return (function (){
return [];
});
;})(G__20625,G__20625__$1,child_factory_20624))

break;
default:
return child_factory_20624;

}
})();

var child_obj_20623 = (child_factory_20624__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_20624__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_20624__$1.call(null,obj,key));
(obj[key] = child_obj_20623);

return child_obj_20623;
});
oops.core.validate_object_access_dynamically = (function oops$core$validate_object_access_dynamically(obj,mode,key,check_key_QMARK_){
if((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && ((void 0 === obj)))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"undefined",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"undefined",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && ((obj == null)))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"nil",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"nil",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):(cljs.core.truth_(goog.isBoolean(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"boolean",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"boolean",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):(cljs.core.truth_(goog.isNumber(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"number",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"number",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):(cljs.core.truth_(goog.isString(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"string",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"string",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):((cljs.core.not(goog.isObject(obj)))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"non-object",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"non-object",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):(cljs.core.truth_(goog.isDateLike(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"date-like",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"date-like",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_type_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"cljs type",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"cljs type",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_instance_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"cljs instance",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"cljs instance",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return true;
})()
):true
)))))))))){
oops.state.add_key_to_current_path_BANG_(key);

oops.state.set_last_access_modifier_BANG_(mode);

if(cljs.core.truth_(check_key_QMARK_)){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && (cljs.core.not(goog.object.containsKey(obj,key)))){
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$missing_DASH_object_DASH_key,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$missing_DASH_object_DASH_key,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));
} else {
return true;
}
} else {
return true;
}
} else {
return null;
}
});
oops.core.validate_fn_call_dynamically = (function oops$core$validate_fn_call_dynamically(fn,mode){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1))) && ((fn == null))){
return true;
} else {
if(cljs.core.truth_(goog.isFunction(fn))){
return true;
} else {
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expected_DASH_function_DASH_value,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$soft_QMARK_,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1)),cljs.core.cst$kw$fn,fn,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$expected_DASH_function_DASH_value,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$soft_QMARK_,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1)),cljs.core.cst$kw$fn,fn,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

}
}
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword))){
var selector_path_20629 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_20629);

return selector_path_20629;
} else {
var selector_path_20630 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_20630);

return selector_path_20630;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5533__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if(cljs.core.truth_(temp__5533__auto__)){
var issue_20631 = temp__5533__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_20631);
} else {
return null;
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
return (obj[key]);
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
return (obj[key] = val);
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
var path_20633 = (function (){var path_20632 = oops.core.build_path_dynamically(selector);

return path_20632;
})();
var len_20634 = path_20633.length;
var i_20635 = (0);
var obj_20636 = obj;
while(true){
if((i_20635 < len_20634)){
var mode_20637 = (path_20633[i_20635]);
var key_20638 = (path_20633[(i_20635 + (1))]);
var next_obj_20639 = oops.core.get_key_dynamically(obj_20636,key_20638,mode_20637);
var G__20640 = mode_20637;
switch (G__20640) {
case (0):
var G__20642 = (i_20635 + (2));
var G__20643 = next_obj_20639;
i_20635 = G__20642;
obj_20636 = G__20643;
continue;

break;
case (1):
if(!((next_obj_20639 == null))){
var G__20644 = (i_20635 + (2));
var G__20645 = next_obj_20639;
i_20635 = G__20644;
obj_20636 = G__20645;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_20639 == null))){
var G__20646 = (i_20635 + (2));
var G__20647 = next_obj_20639;
i_20635 = G__20646;
obj_20636 = G__20647;
continue;
} else {
var G__20648 = (i_20635 + (2));
var G__20649 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_20636,key_20638) : oops.core.punch_key_dynamically_BANG_.call(null,obj_20636,key_20638));
i_20635 = G__20648;
obj_20636 = G__20649;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20640)].join('')));

}
} else {
return obj_20636;
}
break;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
var path_20651 = (function (){var path_20650 = oops.core.build_path_dynamically(selector);

return path_20650;
})();
var len_20652 = path_20651.length;
if((len_20652 < (4))){
return [obj,(function (){var path_20654 = path_20651;
var len_20655 = path_20654.length;
var i_20656 = (0);
var obj_20657 = obj;
while(true){
if((i_20656 < len_20655)){
var mode_20658 = (path_20654[i_20656]);
var key_20659 = (path_20654[(i_20656 + (1))]);
var next_obj_20660 = oops.core.get_key_dynamically(obj_20657,key_20659,mode_20658);
var G__20675 = mode_20658;
switch (G__20675) {
case (0):
var G__20679 = (i_20656 + (2));
var G__20680 = next_obj_20660;
i_20656 = G__20679;
obj_20657 = G__20680;
continue;

break;
case (1):
if(!((next_obj_20660 == null))){
var G__20681 = (i_20656 + (2));
var G__20682 = next_obj_20660;
i_20656 = G__20681;
obj_20657 = G__20682;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_20660 == null))){
var G__20683 = (i_20656 + (2));
var G__20684 = next_obj_20660;
i_20656 = G__20683;
obj_20657 = G__20684;
continue;
} else {
var G__20685 = (i_20656 + (2));
var G__20686 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_20657,key_20659) : oops.core.punch_key_dynamically_BANG_.call(null,obj_20657,key_20659));
i_20656 = G__20685;
obj_20657 = G__20686;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20675)].join('')));

}
} else {
return obj_20657;
}
break;
}
})()];
} else {
var target_obj_20653 = (function (){var path_20661 = path_20651.slice((0),(len_20652 - (2)));
var len_20662 = path_20661.length;
var i_20663 = (0);
var obj_20664 = obj;
while(true){
if((i_20663 < len_20662)){
var mode_20665 = (path_20661[i_20663]);
var key_20666 = (path_20661[(i_20663 + (1))]);
var next_obj_20667 = oops.core.get_key_dynamically(obj_20664,key_20666,mode_20665);
var G__20676 = mode_20665;
switch (G__20676) {
case (0):
var G__20688 = (i_20663 + (2));
var G__20689 = next_obj_20667;
i_20663 = G__20688;
obj_20664 = G__20689;
continue;

break;
case (1):
if(!((next_obj_20667 == null))){
var G__20690 = (i_20663 + (2));
var G__20691 = next_obj_20667;
i_20663 = G__20690;
obj_20664 = G__20691;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_20667 == null))){
var G__20692 = (i_20663 + (2));
var G__20693 = next_obj_20667;
i_20663 = G__20692;
obj_20664 = G__20693;
continue;
} else {
var G__20694 = (i_20663 + (2));
var G__20695 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_20664,key_20666) : oops.core.punch_key_dynamically_BANG_.call(null,obj_20664,key_20666));
i_20663 = G__20694;
obj_20664 = G__20695;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20676)].join('')));

}
} else {
return obj_20664;
}
break;
}
})();
return [target_obj_20653,(function (){var path_20668 = [(path_20651[(len_20652 - (2))]),(path_20651[(len_20652 - (1))])];
var len_20669 = path_20668.length;
var i_20670 = (0);
var obj_20671 = target_obj_20653;
while(true){
if((i_20670 < len_20669)){
var mode_20672 = (path_20668[i_20670]);
var key_20673 = (path_20668[(i_20670 + (1))]);
var next_obj_20674 = oops.core.get_key_dynamically(obj_20671,key_20673,mode_20672);
var G__20677 = mode_20672;
switch (G__20677) {
case (0):
var G__20697 = (i_20670 + (2));
var G__20698 = next_obj_20674;
i_20670 = G__20697;
obj_20671 = G__20698;
continue;

break;
case (1):
if(!((next_obj_20674 == null))){
var G__20699 = (i_20670 + (2));
var G__20700 = next_obj_20674;
i_20670 = G__20699;
obj_20671 = G__20700;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_20674 == null))){
var G__20701 = (i_20670 + (2));
var G__20702 = next_obj_20674;
i_20670 = G__20701;
obj_20671 = G__20702;
continue;
} else {
var G__20703 = (i_20670 + (2));
var G__20704 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_20671,key_20673) : oops.core.punch_key_dynamically_BANG_.call(null,obj_20671,key_20673));
i_20670 = G__20703;
obj_20671 = G__20704;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20677)].join('')));

}
} else {
return obj_20671;
}
break;
}
})()];
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
var path_20706 = (function (){var path_20705 = oops.core.build_path_dynamically(selector);

return path_20705;
})();
var len_20709 = path_20706.length;
var parent_obj_path_20710 = path_20706.slice((0),(len_20709 - (2)));
var key_20707 = (path_20706[(len_20709 - (1))]);
var mode_20708 = (path_20706[(len_20709 - (2))]);
var parent_obj_20711 = (function (){var path_20712 = parent_obj_path_20710;
var len_20713 = path_20712.length;
var i_20714 = (0);
var obj_20715 = obj;
while(true){
if((i_20714 < len_20713)){
var mode_20716 = (path_20712[i_20714]);
var key_20717 = (path_20712[(i_20714 + (1))]);
var next_obj_20718 = oops.core.get_key_dynamically(obj_20715,key_20717,mode_20716);
var G__20719 = mode_20716;
switch (G__20719) {
case (0):
var G__20721 = (i_20714 + (2));
var G__20722 = next_obj_20718;
i_20714 = G__20721;
obj_20715 = G__20722;
continue;

break;
case (1):
if(!((next_obj_20718 == null))){
var G__20723 = (i_20714 + (2));
var G__20724 = next_obj_20718;
i_20714 = G__20723;
obj_20715 = G__20724;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_20718 == null))){
var G__20725 = (i_20714 + (2));
var G__20726 = next_obj_20718;
i_20714 = G__20725;
obj_20715 = G__20726;
continue;
} else {
var G__20727 = (i_20714 + (2));
var G__20728 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_20715,key_20717) : oops.core.punch_key_dynamically_BANG_.call(null,obj_20715,key_20717));
i_20714 = G__20727;
obj_20715 = G__20728;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20719)].join('')));

}
} else {
return obj_20715;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_20711,key_20707,val,mode_20708);
});
