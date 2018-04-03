// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('hoplon_drift.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('hoplon_drift.api.widget');
goog.require('hoplon_drift.api');
goog.require('hoplon_drift.state');
goog.require('hoplon_drift.data');
goog.require('cljs.test');
hoplon_drift.hoplon.snippet = (function hoplon_drift$hoplon$snippet(var_args){
var G__20766 = arguments.length;
switch (G__20766) {
case 0:
return hoplon_drift.hoplon.snippet.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return hoplon_drift.hoplon.snippet.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon_drift.hoplon.snippet.cljs$core$IFn$_invoke$arity$0 = (function (){
return hoplon_drift.hoplon.snippet.cljs$core$IFn$_invoke$arity$1(hoplon_drift.data.id);
});

hoplon_drift.hoplon.snippet.cljs$core$IFn$_invoke$arity$1 = (function (id){
hoplon_drift.api.ensure_lib_BANG_();

var e = 300000.0;
var i = ((function (){var G__20767 = (Date.now() / e);
return Math.ceil(G__20767);
})() * e);
var G__20768 = cljs.core.cst$kw$type;
var G__20769 = "text/javascript";
var G__20770 = cljs.core.cst$kw$async;
var G__20771 = true;
var G__20772 = cljs.core.cst$kw$crossorigin;
var G__20773 = "anonymous";
var G__20774 = cljs.core.cst$kw$src;
var G__20775 = ["https://js.driftt.com/include/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),".js"].join('');
return (hoplon.core.script.cljs$core$IFn$_invoke$arity$8 ? hoplon.core.script.cljs$core$IFn$_invoke$arity$8(G__20768,G__20769,G__20770,G__20771,G__20772,G__20773,G__20774,G__20775) : hoplon.core.script.call(null,G__20768,G__20769,G__20770,G__20771,G__20772,G__20773,G__20774,G__20775));
});

hoplon_drift.hoplon.snippet.cljs$lang$maxFixedArity = 1;

hoplon_drift.hoplon._QMARK__QMARK_snippet = (function hoplon_drift$hoplon$_QMARK__QMARK_snippet(){
return cljs.test.test_var(hoplon_drift.hoplon._QMARK__QMARK_snippet.cljs$lang$var);
});
hoplon_drift.hoplon._QMARK__QMARK_snippet.cljs$lang$test = (function (){
hoplon_drift.hoplon.snippet.cljs$core$IFn$_invoke$arity$0();

try{var values__18224__auto__ = cljs.core.List.EMPTY;
var result__18225__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hoplon_drift.api.lib_QMARK_,values__18224__auto__);
if(cljs.core.truth_(result__18225__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$hoplon_DASH_drift$api_SLASH_lib_QMARK_),cljs.core.cst$kw$actual,cljs.core.cons(hoplon_drift.api.lib_QMARK_,values__18224__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$hoplon_DASH_drift$api_SLASH_lib_QMARK_),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9228__auto__ = cljs.core.cons(cljs.core.cst$sym$hoplon_DASH_drift$api_SLASH_lib_QMARK_,values__18224__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__18225__auto__;
}catch (e20777){var t__18269__auto__ = e20777;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$hoplon_DASH_drift$api_SLASH_lib_QMARK_),cljs.core.cst$kw$actual,t__18269__auto__,cljs.core.cst$kw$message,null], null));
}});

hoplon_drift.hoplon._QMARK__QMARK_snippet.cljs$lang$var = new cljs.core.Var(function(){return hoplon_drift.hoplon._QMARK__QMARK_snippet;},cljs.core.cst$sym$hoplon_DASH_drift$hoplon_SLASH__QMARK__QMARK_snippet,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$hoplon_DASH_drift$hoplon,cljs.core.cst$sym$_QMARK__QMARK_snippet,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/hoplon-drift/9ga/uanrg/hoplon_drift/hoplon.cljs",19,1,23,23,cljs.core.List.EMPTY,null,(cljs.core.truth_(hoplon_drift.hoplon._QMARK__QMARK_snippet)?hoplon_drift.hoplon._QMARK__QMARK_snippet.cljs$lang$test:null)]));
