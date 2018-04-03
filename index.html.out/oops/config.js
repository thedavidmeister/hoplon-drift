// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('oops.config');
goog.require('cljs.core');
goog.require('cljs.core.constants');
oops.config.get_initial_runtime_config = (function oops$config$get_initial_runtime_config(){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$unexpected_DASH_empty_DASH_selector,cljs.core.cst$kw$warning_DASH_reporting,cljs.core.cst$kw$use_DASH_envelope,cljs.core.cst$kw$error_DASH_reporting,cljs.core.cst$kw$expected_DASH_function_DASH_value,cljs.core.cst$kw$child_DASH_factory,cljs.core.cst$kw$invalid_DASH_selector,cljs.core.cst$kw$unexpected_DASH_punching_DASH_selector,cljs.core.cst$kw$throw_DASH_errors_DASH_from_DASH_macro_DASH_call_DASH_sites,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,cljs.core.cst$kw$unexpected_DASH_soft_DASH_selector,cljs.core.cst$kw$missing_DASH_object_DASH_key],[cljs.core.cst$kw$warn,cljs.core.cst$kw$console,true,cljs.core.cst$kw$throw,cljs.core.cst$kw$error,cljs.core.cst$kw$js_DASH_obj,cljs.core.cst$kw$error,cljs.core.cst$kw$warn,true,cljs.core.cst$kw$error,cljs.core.cst$kw$warn,cljs.core.cst$kw$error]);
});
oops.config._STAR_runtime_config_STAR_ = oops.config.get_initial_runtime_config();
oops.config.set_current_runtime_config_BANG_ = (function oops$config$set_current_runtime_config_BANG_(new_config){
if(cljs.core.map_QMARK_(new_config)){
} else {
throw (new Error("Assert failed: (map? new-config)"));
}

oops.config._STAR_runtime_config_STAR_ = new_config;

return new_config;
});
oops.config.get_current_runtime_config = (function oops$config$get_current_runtime_config(){
return oops.config._STAR_runtime_config_STAR_;
});
oops.config.update_current_runtime_config_BANG_ = (function oops$config$update_current_runtime_config_BANG_(var_args){
var args__9560__auto__ = [];
var len__9553__auto___14592 = arguments.length;
var i__9554__auto___14593 = (0);
while(true){
if((i__9554__auto___14593 < len__9553__auto___14592)){
args__9560__auto__.push((arguments[i__9554__auto___14593]));

var G__14594 = (i__9554__auto___14593 + (1));
i__9554__auto___14593 = G__14594;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f_or_map,args){
if(cljs.core.map_QMARK_(f_or_map)){
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f_or_map], 0));
} else {
return oops.config.set_current_runtime_config_BANG_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_or_map,oops.config.get_current_runtime_config(),args));
}
});

oops.config.update_current_runtime_config_BANG_.cljs$lang$maxFixedArity = (1);

oops.config.update_current_runtime_config_BANG_.cljs$lang$applyTo = (function (seq14590){
var G__14591 = cljs.core.first(seq14590);
var seq14590__$1 = cljs.core.next(seq14590);
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14591,seq14590__$1);
});

oops.config.get_config_key = (function oops$config$get_config_key(var_args){
var args__9560__auto__ = [];
var len__9553__auto___14602 = arguments.length;
var i__9554__auto___14603 = (0);
while(true){
if((i__9554__auto___14603 < len__9553__auto___14602)){
args__9560__auto__.push((arguments[i__9554__auto___14603]));

var G__14604 = (i__9554__auto___14603 + (1));
i__9554__auto___14603 = G__14604;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__14597){
var vec__14598 = p__14597;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14598,(0),null);
var G__14601 = (function (){var or__8274__auto__ = config;
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return oops.config.get_current_runtime_config();
}
})();
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(G__14601) : key.call(null,G__14601));
});

oops.config.get_config_key.cljs$lang$maxFixedArity = (1);

oops.config.get_config_key.cljs$lang$applyTo = (function (seq14595){
var G__14596 = cljs.core.first(seq14595);
var seq14595__$1 = cljs.core.next(seq14595);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(G__14596,seq14595__$1);
});

oops.config.has_config_key_QMARK_ = (function oops$config$has_config_key_QMARK_(var_args){
var args__9560__auto__ = [];
var len__9553__auto___14611 = arguments.length;
var i__9554__auto___14612 = (0);
while(true){
if((i__9554__auto___14612 < len__9553__auto___14611)){
args__9560__auto__.push((arguments[i__9554__auto___14612]));

var G__14613 = (i__9554__auto___14612 + (1));
i__9554__auto___14612 = G__14613;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__14607){
var vec__14608 = p__14607;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14608,(0),null);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$oops$config_SLASH_not_DASH_found,cljs.core.get.cljs$core$IFn$_invoke$arity$3((function (){var or__8274__auto__ = config;
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return oops.config.get_current_runtime_config();
}
})(),key,cljs.core.cst$kw$oops$config_SLASH_not_DASH_found));
});

oops.config.has_config_key_QMARK_.cljs$lang$maxFixedArity = (1);

oops.config.has_config_key_QMARK_.cljs$lang$applyTo = (function (seq14605){
var G__14606 = cljs.core.first(seq14605);
var seq14605__$1 = cljs.core.next(seq14605);
return oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__14606,seq14605__$1);
});

oops.config.get_error_reporting = (function oops$config$get_error_reporting(var_args){
var args__9560__auto__ = [];
var len__9553__auto___14619 = arguments.length;
var i__9554__auto___14620 = (0);
while(true){
if((i__9554__auto___14620 < len__9553__auto___14619)){
args__9560__auto__.push((arguments[i__9554__auto___14620]));

var G__14621 = (i__9554__auto___14620 + (1));
i__9554__auto___14620 = G__14621;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((0) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((0)),(0),null)):null);
return oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__9561__auto__);
});

oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__14615){
var vec__14616 = p__14615;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14616,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error_DASH_reporting,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
});

oops.config.get_error_reporting.cljs$lang$maxFixedArity = (0);

oops.config.get_error_reporting.cljs$lang$applyTo = (function (seq14614){
return oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14614));
});

oops.config.get_warning_reporting = (function oops$config$get_warning_reporting(var_args){
var args__9560__auto__ = [];
var len__9553__auto___14627 = arguments.length;
var i__9554__auto___14628 = (0);
while(true){
if((i__9554__auto___14628 < len__9553__auto___14627)){
args__9560__auto__.push((arguments[i__9554__auto___14628]));

var G__14629 = (i__9554__auto___14628 + (1));
i__9554__auto___14628 = G__14629;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((0) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((0)),(0),null)):null);
return oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__9561__auto__);
});

oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__14623){
var vec__14624 = p__14623;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14624,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warning_DASH_reporting,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
});

oops.config.get_warning_reporting.cljs$lang$maxFixedArity = (0);

oops.config.get_warning_reporting.cljs$lang$applyTo = (function (seq14622){
return oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14622));
});

oops.config.get_suppress_reporting = (function oops$config$get_suppress_reporting(var_args){
var args__9560__auto__ = [];
var len__9553__auto___14635 = arguments.length;
var i__9554__auto___14636 = (0);
while(true){
if((i__9554__auto___14636 < len__9553__auto___14635)){
args__9560__auto__.push((arguments[i__9554__auto___14636]));

var G__14637 = (i__9554__auto___14636 + (1));
i__9554__auto___14636 = G__14637;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((0) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((0)),(0),null)):null);
return oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__9561__auto__);
});

oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__14631){
var vec__14632 = p__14631;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14632,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$suppress_DASH_reporting,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
});

oops.config.get_suppress_reporting.cljs$lang$maxFixedArity = (0);

oops.config.get_suppress_reporting.cljs$lang$applyTo = (function (seq14630){
return oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14630));
});

oops.config.get_child_factory = (function oops$config$get_child_factory(var_args){
var args__9560__auto__ = [];
var len__9553__auto___14643 = arguments.length;
var i__9554__auto___14644 = (0);
while(true){
if((i__9554__auto___14644 < len__9553__auto___14643)){
args__9560__auto__.push((arguments[i__9554__auto___14644]));

var G__14645 = (i__9554__auto___14644 + (1));
i__9554__auto___14644 = G__14645;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((0) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((0)),(0),null)):null);
return oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic(argseq__9561__auto__);
});

oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic = (function (p__14639){
var vec__14640 = p__14639;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14640,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$child_DASH_factory,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
});

oops.config.get_child_factory.cljs$lang$maxFixedArity = (0);

oops.config.get_child_factory.cljs$lang$applyTo = (function (seq14638){
return oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14638));
});

oops.config.set_child_factory_BANG_ = (function oops$config$set_child_factory_BANG_(new_factory_fn){
return oops.config.update_current_runtime_config_BANG_(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$child_DASH_factory,new_factory_fn], null));
});
oops.config.throw_errors_from_macro_call_sites_QMARK_ = (function oops$config$throw_errors_from_macro_call_sites_QMARK_(var_args){
var args__9560__auto__ = [];
var len__9553__auto___14651 = arguments.length;
var i__9554__auto___14652 = (0);
while(true){
if((i__9554__auto___14652 < len__9553__auto___14651)){
args__9560__auto__.push((arguments[i__9554__auto___14652]));

var G__14653 = (i__9554__auto___14652 + (1));
i__9554__auto___14652 = G__14653;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((0) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((0)),(0),null)):null);
return oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__9561__auto__);
});

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__14647){
var vec__14648 = p__14647;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14648,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$throw_DASH_errors_DASH_from_DASH_macro_DASH_call_DASH_sites,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0)) === true;
});

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$maxFixedArity = (0);

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$applyTo = (function (seq14646){
return oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14646));
});

oops.config.use_envelope_QMARK_ = (function oops$config$use_envelope_QMARK_(var_args){
var args__9560__auto__ = [];
var len__9553__auto___14659 = arguments.length;
var i__9554__auto___14660 = (0);
while(true){
if((i__9554__auto___14660 < len__9553__auto___14659)){
args__9560__auto__.push((arguments[i__9554__auto___14660]));

var G__14661 = (i__9554__auto___14660 + (1));
i__9554__auto___14660 = G__14661;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((0) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((0)),(0),null)):null);
return oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__9561__auto__);
});

oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__14655){
var vec__14656 = p__14655;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14656,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$use_DASH_envelope,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0)) === true;
});

oops.config.use_envelope_QMARK_.cljs$lang$maxFixedArity = (0);

oops.config.use_envelope_QMARK_.cljs$lang$applyTo = (function (seq14654){
return oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14654));
});

