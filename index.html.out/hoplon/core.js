// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('javelin.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('cljs.spec.test.alpha');
goog.require('hoplon.spec');
goog.require('clojure.data');
cljs.core.enable_console_print_BANG_();






hoplon.core.child_vec = (function hoplon$core$child_vec(this$){
var x = this$.childNodes;
var l = x.length;
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var or__8274__auto__ = (function (){var and__8262__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,l);
if(and__8262__auto__){
return cljs.core.persistent_BANG_(ret);
} else {
return and__8262__auto__;
}
})();
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
var G__19545 = (i + (1));
var G__19546 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__19545;
ret = G__19546;
continue;
}
break;
}
});
hoplon.core.vflatten = (function hoplon$core$vflatten(var_args){
var G__19548 = arguments.length;
switch (G__19548) {
case 1:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1 = (function (tree){
return cljs.core.persistent_BANG_(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2(tree,cljs.core.transient$(cljs.core.PersistentVector.EMPTY)));
});

hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2 = (function (tree,ret){
var l = cljs.core.count(tree);
var i = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,l)){
return ret;
} else {
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tree,i);
if(!(cljs.core.sequential_QMARK_(x))){
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x);
} else {
hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2(x,ret);
}

var G__19550 = (i + (1));
i = G__19550;
continue;
}
break;
}
});

hoplon.core.vflatten.cljs$lang$maxFixedArity = 2;

hoplon.core.merge_kids = (function hoplon$core$merge_kids(this$,_,new$){
var new$__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(hoplon.core.__GT_node,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__19552_SHARP_,p2__19551_SHARP_){
if((p2__19551_SHARP_ == null)){
return p1__19552_SHARP_;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__19552_SHARP_,p2__19551_SHARP_);
}
}),cljs.core.PersistentVector.EMPTY,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(new$)));
var old = hoplon.core.child_vec(this$);
var G__19559 = old;
var vec__19561 = G__19559;
var seq__19562 = cljs.core.seq(vec__19561);
var first__19563 = cljs.core.first(seq__19562);
var seq__19562__$1 = cljs.core.next(seq__19562);
var o = first__19563;
var os = seq__19562__$1;
var G__19560 = new$__$1;
var vec__19564 = G__19560;
var seq__19565 = cljs.core.seq(vec__19564);
var first__19566 = cljs.core.first(seq__19565);
var seq__19565__$1 = cljs.core.next(seq__19565);
var x = first__19566;
var xs = seq__19565__$1;
var G__19559__$1 = G__19559;
var G__19560__$1 = G__19560;
while(true){
var vec__19567 = G__19559__$1;
var seq__19568 = cljs.core.seq(vec__19567);
var first__19569 = cljs.core.first(seq__19568);
var seq__19568__$1 = cljs.core.next(seq__19568);
var o__$1 = first__19569;
var os__$1 = seq__19568__$1;
var vec__19570 = G__19560__$1;
var seq__19571 = cljs.core.seq(vec__19570);
var first__19572 = cljs.core.first(seq__19571);
var seq__19571__$1 = cljs.core.next(seq__19571);
var x__$1 = first__19572;
var xs__$1 = seq__19571__$1;
if(cljs.core.truth_((function (){var or__8274__auto__ = o__$1;
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return x__$1;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,o__$1)){
} else {
if(cljs.core.truth_((function (){var and__8262__auto__ = x__$1;
if(cljs.core.truth_(and__8262__auto__)){
return o__$1;
} else {
return and__8262__auto__;
}
})())){
this$.replaceChild(x__$1,o__$1);
} else {
if(cljs.core.truth_(x__$1)){
this$.appendChild(x__$1);
} else {
if(cljs.core.truth_(o__$1)){
this$.removeChild(o__$1);
} else {
}
}
}
}

var G__19573 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([x__$1]),os__$1);
var G__19574 = xs__$1;
G__19559__$1 = G__19573;
G__19560__$1 = G__19574;
continue;
} else {
return null;
}
break;
}
});
hoplon.core._do_BANG_ = (function hoplon$core$_do_BANG_(elem,this$,value){
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$,value) : hoplon.core.do_BANG_.call(null,elem,this$,value));
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.cst$kw$hoplon$spec_SLASH_do_BANG_,cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$hoplon$spec_SLASH_do_BANG_,cljs.core.cst$kw$hoplon$spec_SLASH_do_BANG_,null,null),cljs.core.cst$kw$hoplon$spec_SLASH_do_BANG_,cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
hoplon.core._on_BANG_ = (function hoplon$core$_on_BANG_(elem,this$,value){
return (hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$,value) : hoplon.core.on_BANG_.call(null,elem,this$,value));
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.cst$kw$hoplon$spec_SLASH_on_BANG_,cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$hoplon$spec_SLASH_on_BANG_,cljs.core.cst$kw$hoplon$spec_SLASH_on_BANG_,null,null),cljs.core.cst$kw$hoplon$spec_SLASH_on_BANG_,cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
hoplon.core._elem_BANG_ = (function hoplon$core$_elem_BANG_(elem,this$,value){
return (hoplon.core.elem_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.elem_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$,value) : hoplon.core.elem_BANG_.call(null,elem,this$,value));
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$hoplon$core_SLASH__DASH_elem_BANG_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.cst$kw$hoplon$spec_SLASH_elem_BANG_,cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$hoplon$spec_SLASH_elem_BANG_,cljs.core.cst$kw$hoplon$spec_SLASH_elem_BANG_,null,null),cljs.core.cst$kw$hoplon$spec_SLASH_elem_BANG_,cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
/**
 * Is the application running in a prerendering container (eg. PhantomJS via
 *   the prerender task)?
 */
hoplon.core.prerendering_QMARK_ = (new goog.Uri(window.location.href)).getParameterValue("prerendering");
/**
 * Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher
 *   f is a function of two arguments: the previous and next values. If init is
 *   not provided the default (nil) will be used.
 */
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var G__19576 = arguments.length;
switch (G__19576) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (ref,f){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3(ref,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (ref,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__19577_19580 = init;
var G__19578_19581 = cljs.core.deref(ref);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19577_19580,G__19578_19581) : f.call(null,G__19577_19580,G__19578_19581));

cljs.core.add_watch(ref,k,((function (k){
return (function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
});})(k))
);

return k;
});

hoplon.core.do_watch.cljs$lang$maxFixedArity = 3;

/**
 * Class normalization for attribute providers. Converts from strings and
 *   sequences to hashmaps.
 */
hoplon.core.normalize_class = (function hoplon$core$normalize_class(kvs){
var __GT_map = (function (p1__19582_SHARP_){
return cljs.core.zipmap(p1__19582_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});
if(cljs.core.map_QMARK_(kvs)){
return kvs;
} else {
return __GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs)));
}
});
/**
 * Executes a fuction after a delay, if no delay is passed, 0 is used as a default.
 */
hoplon.core.timeout = (function hoplon$core$timeout(var_args){
var G__19584 = arguments.length;
switch (G__19584) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1 = (function (f){
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2(f,(0));
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2 = (function (f,t){
return window.setTimeout(f,t);
});

hoplon.core.timeout.cljs$lang$maxFixedArity = 2;

/**
 * Executes a function once an element has been attached to the DOM.
 */
hoplon.core.when_dom = (function hoplon$core$when_dom(this$,f){
if(!((this$ instanceof Element))){
var G__19586 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__19587 = (0);
return setTimeout(G__19586,G__19587);
} else {
var temp__5533__auto__ = goog.object.get(this$,"_hoplonWhenDom");
if(cljs.core.truth_(temp__5533__auto__)){
var v = temp__5533__auto__;
return v.push(f);
} else {
var G__19588_19606 = this$;
var G__19589_19607 = "_hoplonWhenDom";
var G__19590_19608 = [f];
goog.object.set(G__19588_19606,G__19589_19607,G__19590_19608);

var G__19591 = ((function (temp__5533__auto__){
return (function (){
var fexpr__19599 = ((function (temp__5533__auto__){
return (function hoplon$core$when_dom_$_doit(){
if(cljs.core.not(document.documentElement.contains(this$))){
var G__19600 = ((function (temp__5533__auto__){
return (function (){
return hoplon$core$when_dom_$_doit();
});})(temp__5533__auto__))
;
var G__19601 = (20);
return setTimeout(G__19600,G__19601);
} else {
var seq__19602_19609 = cljs.core.seq(goog.object.get(this$,"_hoplonWhenDom"));
var chunk__19603_19610 = null;
var count__19604_19611 = (0);
var i__19605_19612 = (0);
while(true){
if((i__19605_19612 < count__19604_19611)){
var f_19613__$1 = chunk__19603_19610.cljs$core$IIndexed$_nth$arity$2(null,i__19605_19612);
(f_19613__$1.cljs$core$IFn$_invoke$arity$0 ? f_19613__$1.cljs$core$IFn$_invoke$arity$0() : f_19613__$1.call(null));

var G__19614 = seq__19602_19609;
var G__19615 = chunk__19603_19610;
var G__19616 = count__19604_19611;
var G__19617 = (i__19605_19612 + (1));
seq__19602_19609 = G__19614;
chunk__19603_19610 = G__19615;
count__19604_19611 = G__19616;
i__19605_19612 = G__19617;
continue;
} else {
var temp__5535__auto___19618 = cljs.core.seq(seq__19602_19609);
if(temp__5535__auto___19618){
var seq__19602_19619__$1 = temp__5535__auto___19618;
if(cljs.core.chunked_seq_QMARK_(seq__19602_19619__$1)){
var c__9205__auto___19620 = cljs.core.chunk_first(seq__19602_19619__$1);
var G__19621 = cljs.core.chunk_rest(seq__19602_19619__$1);
var G__19622 = c__9205__auto___19620;
var G__19623 = cljs.core.count(c__9205__auto___19620);
var G__19624 = (0);
seq__19602_19609 = G__19621;
chunk__19603_19610 = G__19622;
count__19604_19611 = G__19623;
i__19605_19612 = G__19624;
continue;
} else {
var f_19625__$1 = cljs.core.first(seq__19602_19619__$1);
(f_19625__$1.cljs$core$IFn$_invoke$arity$0 ? f_19625__$1.cljs$core$IFn$_invoke$arity$0() : f_19625__$1.call(null));

var G__19626 = cljs.core.next(seq__19602_19619__$1);
var G__19627 = null;
var G__19628 = (0);
var G__19629 = (0);
seq__19602_19609 = G__19626;
chunk__19603_19610 = G__19627;
count__19604_19611 = G__19628;
i__19605_19612 = G__19629;
continue;
}
} else {
}
}
break;
}

return goog.object.set(this$,"_hoplonWhenDom",null);
}
});})(temp__5533__auto__))
;
return fexpr__19599();
});})(temp__5533__auto__))
;
var G__19592 = (0);
return setTimeout(G__19591,G__19592);
}
}
});
/**
 * Executes a function once the window load event is fired.
 */
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
return window.addEventListener("load",(function (){
var G__19630 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__19631 = (0);
return setTimeout(G__19630,G__19631);
}));
});
/**
 * Parses a sequence of element arguments into attributes and children.
 */
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var G__19637 = args;
var vec__19638 = G__19637;
var seq__19639 = cljs.core.seq(vec__19638);
var first__19640 = cljs.core.first(seq__19639);
var seq__19639__$1 = cljs.core.next(seq__19639);
var arg = first__19640;
var args__$1 = seq__19639__$1;
var attr__$1 = attr;
var kids__$1 = kids;
var G__19637__$1 = G__19637;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__19641 = G__19637__$1;
var seq__19642 = cljs.core.seq(vec__19641);
var first__19643 = cljs.core.first(seq__19642);
var seq__19642__$1 = cljs.core.next(seq__19642);
var arg__$1 = first__19643;
var args__$2 = seq__19642__$1;
if(cljs.core.not((function (){var or__8274__auto__ = arg__$1;
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return args__$2;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__19644 = cljs.core.reduce_kv(cljs.core.assoc_BANG_,attr__$2,arg__$1);
var G__19645 = kids__$2;
var G__19646 = args__$2;
attr__$1 = G__19644;
kids__$1 = G__19645;
G__19637__$1 = G__19646;
continue;
} else {
if(cljs.core.set_QMARK_(arg__$1)){
var G__19647 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (attr__$1,kids__$1,G__19637__$1,attr__$2,kids__$2,vec__19641,seq__19642,first__19643,seq__19642__$1,arg__$1,args__$2,attr,kids,G__19637,vec__19638,seq__19639,first__19640,seq__19639__$1,arg,args__$1){
return (function (p1__19632_SHARP_,p2__19633_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__19632_SHARP_,p2__19633_SHARP_,true);
});})(attr__$1,kids__$1,G__19637__$1,attr__$2,kids__$2,vec__19641,seq__19642,first__19643,seq__19642__$1,arg__$1,args__$2,attr,kids,G__19637,vec__19638,seq__19639,first__19640,seq__19639__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__19648 = kids__$2;
var G__19649 = args__$2;
attr__$1 = G__19647;
kids__$1 = G__19648;
G__19637__$1 = G__19649;
continue;
} else {
if(cljs.core.truth_((hoplon.core.attribute_QMARK_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.attribute_QMARK_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.attribute_QMARK_.call(null,arg__$1)))){
var G__19650 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__19651 = kids__$2;
var G__19652 = cljs.core.rest(args__$2);
attr__$1 = G__19650;
kids__$1 = G__19651;
G__19637__$1 = G__19652;
continue;
} else {
if(cljs.core.seq_QMARK_(arg__$1)){
var G__19653 = attr__$2;
var G__19654 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__19655 = args__$2;
attr__$1 = G__19653;
kids__$1 = G__19654;
G__19637__$1 = G__19655;
continue;
} else {
if(cljs.core.vector_QMARK_(arg__$1)){
var G__19656 = attr__$2;
var G__19657 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__19658 = args__$2;
attr__$1 = G__19656;
kids__$1 = G__19657;
G__19637__$1 = G__19658;
continue;
} else {
var G__19659 = attr__$2;
var G__19660 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__19661 = args__$2;
attr__$1 = G__19659;
kids__$1 = G__19660;
G__19637__$1 = G__19661;
continue;

}
}
}
}
}
}
break;
}
});
/**
 * A multi-method dispatch function.
 * 
 * Will dispatch against three arguments:
 * 
 *   * `elem` - the target DOM Element containing the attribute
 *   * `key` - the attribute keyword or symbol
 *   * `value` - the attribute value
 * 
 * The dispatcher will attempt to dispatch agains the key namespace or key.
 * 
 * ex. when key is `:namespace/key` will dispatch on `:namespace/*` otherwise `key`
 */
hoplon.core.dispatcher = (function hoplon$core$dispatcher(elem,key,value){
var temp__5533__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__5533__auto__)){
var n = temp__5533__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(n,"*");
} else {
return key;
}
});

/**
 * @interface
 */
hoplon.core.IHoplonNode = function(){};

hoplon.core._node = (function hoplon$core$_node(this$){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonNode$_node$arity$1 == null)))){
return this$.hoplon$core$IHoplonNode$_node$arity$1(this$);
} else {
var x__9007__auto__ = (((this$ == null))?null:this$);
var m__9008__auto__ = (hoplon.core._node[goog.typeOf(x__9007__auto__)]);
if(!((m__9008__auto__ == null))){
return (m__9008__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9008__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__9008__auto__.call(null,this$));
} else {
var m__9008__auto____$1 = (hoplon.core._node["_"]);
if(!((m__9008__auto____$1 == null))){
return (m__9008__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9008__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__9008__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IHoplonNode.-node",this$);
}
}
}
});

hoplon.core.node_QMARK_ = (function hoplon$core$node_QMARK_(this$){
if(!((this$ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === this$.hoplon$core$IHoplonNode$))){
return true;
} else {
if((!this$.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonNode,this$);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonNode,this$);
}
});
goog.object.set(hoplon.core.IHoplonNode,"string",true);

var G__19663_19670 = hoplon.core._node;
var G__19664_19671 = "string";
var G__19665_19672 = ((function (G__19663_19670,G__19664_19671){
return (function (this$){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(this$) : hoplon.core.$text.call(null,this$));
});})(G__19663_19670,G__19664_19671))
;
goog.object.set(G__19663_19670,G__19664_19671,G__19665_19672);

goog.object.set(hoplon.core.IHoplonNode,"number",true);

var G__19666_19673 = hoplon.core._node;
var G__19667_19674 = "number";
var G__19668_19675 = ((function (G__19666_19673,G__19667_19674){
return (function (this$){
var G__19669 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__19669) : hoplon.core.$text.call(null,G__19669));
});})(G__19666_19673,G__19667_19674))
;
goog.object.set(G__19666_19673,G__19667_19674,G__19668_19675);
hoplon.core.__GT_node = (function hoplon$core$__GT_node(x){
if(cljs.core.truth_(hoplon.core.node_QMARK_(x))){
return hoplon.core._node(x);
} else {
return x;
}
});

/**
 * @interface
 */
hoplon.core.IHoplonAttribute = function(){};

hoplon.core._attribute_BANG_ = (function hoplon$core$_attribute_BANG_(this$,elem,value){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonAttribute$_attribute_BANG_$arity$3 == null)))){
return this$.hoplon$core$IHoplonAttribute$_attribute_BANG_$arity$3(this$,elem,value);
} else {
var x__9007__auto__ = (((this$ == null))?null:this$);
var m__9008__auto__ = (hoplon.core._attribute_BANG_[goog.typeOf(x__9007__auto__)]);
if(!((m__9008__auto__ == null))){
return (m__9008__auto__.cljs$core$IFn$_invoke$arity$3 ? m__9008__auto__.cljs$core$IFn$_invoke$arity$3(this$,elem,value) : m__9008__auto__.call(null,this$,elem,value));
} else {
var m__9008__auto____$1 = (hoplon.core._attribute_BANG_["_"]);
if(!((m__9008__auto____$1 == null))){
return (m__9008__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__9008__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,elem,value) : m__9008__auto____$1.call(null,this$,elem,value));
} else {
throw cljs.core.missing_protocol("IHoplonAttribute.-attribute!",this$);
}
}
}
});

hoplon.core.attribute_QMARK_ = (function hoplon$core$attribute_QMARK_(this$){
if(!((this$ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === this$.hoplon$core$IHoplonAttribute$))){
return true;
} else {
if((!this$.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonAttribute,this$);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonAttribute,this$);
}
});
cljs.core.Keyword.prototype.hoplon$core$IHoplonAttribute$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.hoplon$core$IHoplonAttribute$_attribute_BANG_$arity$3 = (function (this$,elem,value){
var this$__$1 = this;
return hoplon.core._elem_BANG_(elem,this$__$1,value);
});
hoplon.core.spec_BANG_ = (function hoplon$core$spec_BANG_(){
var opts19679_19707 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts19679_19707){
return (function (ret__18606__auto__,p__19680){
var vec__19681 = p__19680;
var ___18607__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19681,(0),null);
var f__18608__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19681,(1),null);
var sym__18609__auto__ = (f__18608__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18608__auto__.cljs$core$IFn$_invoke$arity$0() : f__18608__auto__.call(null));
var G__19684 = ret__18606__auto__;
if(cljs.core.truth_(sym__18609__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__19684,sym__18609__auto__);
} else {
return G__19684;
}
});})(opts19679_19707))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts19679_19707){
return (function (p1__18605__18610__auto__){
var G__19686 = cljs.core.first(p1__18605__18610__auto__);
var fexpr__19685 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts19679_19707);
return (fexpr__19685.cljs$core$IFn$_invoke$arity$1 ? fexpr__19685.cljs$core$IFn$_invoke$arity$1(G__19686) : fexpr__19685.call(null,G__19686));
});})(opts19679_19707))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_elem_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts19679_19707){
return (function (){
var checked__18574__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(hoplon.core._elem_BANG_,new cljs.core.Var(function(){return hoplon.core._elem_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_elem_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_elem_BANG_,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/hoplon-drift/9b8/-h7a0px/index.html.out/hoplon/core.cljs",14,1,88,88,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._elem_BANG_)?hoplon.core._elem_BANG_.cljs$lang$test:null)])),opts19679_19707);
if(cljs.core.truth_(checked__18574__auto__)){
hoplon.core._elem_BANG_ = checked__18574__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_elem_BANG_;
});})(opts19679_19707))
], null)))));

var opts19689_19708 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts19689_19708){
return (function (ret__18606__auto__,p__19690){
var vec__19691 = p__19690;
var ___18607__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19691,(0),null);
var f__18608__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19691,(1),null);
var sym__18609__auto__ = (f__18608__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18608__auto__.cljs$core$IFn$_invoke$arity$0() : f__18608__auto__.call(null));
var G__19694 = ret__18606__auto__;
if(cljs.core.truth_(sym__18609__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__19694,sym__18609__auto__);
} else {
return G__19694;
}
});})(opts19689_19708))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts19689_19708){
return (function (p1__18605__18610__auto__){
var G__19696 = cljs.core.first(p1__18605__18610__auto__);
var fexpr__19695 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts19689_19708);
return (fexpr__19695.cljs$core$IFn$_invoke$arity$1 ? fexpr__19695.cljs$core$IFn$_invoke$arity$1(G__19696) : fexpr__19695.call(null,G__19696));
});})(opts19689_19708))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts19689_19708){
return (function (){
var checked__18574__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(hoplon.core._do_BANG_,new cljs.core.Var(function(){return hoplon.core._do_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_do_BANG_,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/hoplon-drift/9b8/-h7a0px/index.html.out/hoplon/core.cljs",12,1,78,78,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._do_BANG_)?hoplon.core._do_BANG_.cljs$lang$test:null)])),opts19689_19708);
if(cljs.core.truth_(checked__18574__auto__)){
hoplon.core._do_BANG_ = checked__18574__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_;
});})(opts19689_19708))
], null)))));

var opts19699 = null;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts19699){
return (function (ret__18606__auto__,p__19700){
var vec__19701 = p__19700;
var ___18607__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19701,(0),null);
var f__18608__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19701,(1),null);
var sym__18609__auto__ = (f__18608__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18608__auto__.cljs$core$IFn$_invoke$arity$0() : f__18608__auto__.call(null));
var G__19704 = ret__18606__auto__;
if(cljs.core.truth_(sym__18609__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__19704,sym__18609__auto__);
} else {
return G__19704;
}
});})(opts19699))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts19699){
return (function (p1__18605__18610__auto__){
var G__19706 = cljs.core.first(p1__18605__18610__auto__);
var fexpr__19705 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts19699);
return (fexpr__19705.cljs$core$IFn$_invoke$arity$1 ? fexpr__19705.cljs$core$IFn$_invoke$arity$1(G__19706) : fexpr__19705.call(null,G__19706));
});})(opts19699))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts19699){
return (function (){
var checked__18574__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(hoplon.core._on_BANG_,new cljs.core.Var(function(){return hoplon.core._on_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_on_BANG_,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/hoplon-drift/9b8/-h7a0px/index.html.out/hoplon/core.cljs",12,1,83,83,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._on_BANG_)?hoplon.core._on_BANG_.cljs$lang$test:null)])),opts19699);
if(cljs.core.truth_(checked__18574__auto__)){
hoplon.core._on_BANG_ = checked__18574__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_;
});})(opts19699))
], null)))));
});

/**
 * @interface
 */
hoplon.core.IHoplonElement = function(){};

/**
 * Sets attributes on a managed element using native functionality.
 */
hoplon.core._set_attributes_BANG_ = (function hoplon$core$_set_attributes_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2 == null)))){
return this$.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2(this$,kvs);
} else {
var x__9007__auto__ = (((this$ == null))?null:this$);
var m__9008__auto__ = (hoplon.core._set_attributes_BANG_[goog.typeOf(x__9007__auto__)]);
if(!((m__9008__auto__ == null))){
return (m__9008__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9008__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__9008__auto__.call(null,this$,kvs));
} else {
var m__9008__auto____$1 = (hoplon.core._set_attributes_BANG_["_"]);
if(!((m__9008__auto____$1 == null))){
return (m__9008__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9008__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__9008__auto____$1.call(null,this$,kvs));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-set-attributes!",this$);
}
}
}
});

/**
 * Sets styles on a managed element using native functionality.
 */
hoplon.core._set_styles_BANG_ = (function hoplon$core$_set_styles_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_set_styles_BANG_$arity$2 == null)))){
return this$.hoplon$core$IHoplonElement$_set_styles_BANG_$arity$2(this$,kvs);
} else {
var x__9007__auto__ = (((this$ == null))?null:this$);
var m__9008__auto__ = (hoplon.core._set_styles_BANG_[goog.typeOf(x__9007__auto__)]);
if(!((m__9008__auto__ == null))){
return (m__9008__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9008__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__9008__auto__.call(null,this$,kvs));
} else {
var m__9008__auto____$1 = (hoplon.core._set_styles_BANG_["_"]);
if(!((m__9008__auto____$1 == null))){
return (m__9008__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9008__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__9008__auto____$1.call(null,this$,kvs));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-set-styles!",this$);
}
}
}
});

/**
 * Returns the hoplon managed kids atom, or creates it if missing exist.
 */
hoplon.core._hoplon_kids = (function hoplon$core$_hoplon_kids(this$){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_hoplon_kids$arity$1 == null)))){
return this$.hoplon$core$IHoplonElement$_hoplon_kids$arity$1(this$);
} else {
var x__9007__auto__ = (((this$ == null))?null:this$);
var m__9008__auto__ = (hoplon.core._hoplon_kids[goog.typeOf(x__9007__auto__)]);
if(!((m__9008__auto__ == null))){
return (m__9008__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9008__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__9008__auto__.call(null,this$));
} else {
var m__9008__auto____$1 = (hoplon.core._hoplon_kids["_"]);
if(!((m__9008__auto____$1 == null))){
return (m__9008__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9008__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__9008__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-hoplon-kids",this$);
}
}
}
});

/**
 * Appends `child` to `this` for the case of `this` being a managed element.
 */
hoplon.core._append_child_BANG_ = (function hoplon$core$_append_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_append_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$IHoplonElement$_append_child_BANG_$arity$2(this$,child);
} else {
var x__9007__auto__ = (((this$ == null))?null:this$);
var m__9008__auto__ = (hoplon.core._append_child_BANG_[goog.typeOf(x__9007__auto__)]);
if(!((m__9008__auto__ == null))){
return (m__9008__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9008__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__9008__auto__.call(null,this$,child));
} else {
var m__9008__auto____$1 = (hoplon.core._append_child_BANG_["_"]);
if(!((m__9008__auto____$1 == null))){
return (m__9008__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9008__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__9008__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-append-child!",this$);
}
}
}
});

/**
 * Removes `child` from `this` for the case of `this` being a managed element.
 */
hoplon.core._remove_child_BANG_ = (function hoplon$core$_remove_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_remove_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$IHoplonElement$_remove_child_BANG_$arity$2(this$,child);
} else {
var x__9007__auto__ = (((this$ == null))?null:this$);
var m__9008__auto__ = (hoplon.core._remove_child_BANG_[goog.typeOf(x__9007__auto__)]);
if(!((m__9008__auto__ == null))){
return (m__9008__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9008__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__9008__auto__.call(null,this$,child));
} else {
var m__9008__auto____$1 = (hoplon.core._remove_child_BANG_["_"]);
if(!((m__9008__auto____$1 == null))){
return (m__9008__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9008__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__9008__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-remove-child!",this$);
}
}
}
});

/**
 * Replaces `existing` with `new` in `this` for the case of `this` being a managed element.
 */
hoplon.core._replace_child_BANG_ = (function hoplon$core$_replace_child_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_replace_child_BANG_$arity$3 == null)))){
return this$.hoplon$core$IHoplonElement$_replace_child_BANG_$arity$3(this$,new$,existing);
} else {
var x__9007__auto__ = (((this$ == null))?null:this$);
var m__9008__auto__ = (hoplon.core._replace_child_BANG_[goog.typeOf(x__9007__auto__)]);
if(!((m__9008__auto__ == null))){
return (m__9008__auto__.cljs$core$IFn$_invoke$arity$3 ? m__9008__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__9008__auto__.call(null,this$,new$,existing));
} else {
var m__9008__auto____$1 = (hoplon.core._replace_child_BANG_["_"]);
if(!((m__9008__auto____$1 == null))){
return (m__9008__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__9008__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__9008__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-replace-child!",this$);
}
}
}
});

/**
 * Inserts `existing` before `new` in `this` for the case of `this` being a managed element.
 */
hoplon.core._insert_before_BANG_ = (function hoplon$core$_insert_before_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_insert_before_BANG_$arity$3 == null)))){
return this$.hoplon$core$IHoplonElement$_insert_before_BANG_$arity$3(this$,new$,existing);
} else {
var x__9007__auto__ = (((this$ == null))?null:this$);
var m__9008__auto__ = (hoplon.core._insert_before_BANG_[goog.typeOf(x__9007__auto__)]);
if(!((m__9008__auto__ == null))){
return (m__9008__auto__.cljs$core$IFn$_invoke$arity$3 ? m__9008__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__9008__auto__.call(null,this$,new$,existing));
} else {
var m__9008__auto____$1 = (hoplon.core._insert_before_BANG_["_"]);
if(!((m__9008__auto____$1 == null))){
return (m__9008__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__9008__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__9008__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-insert-before!",this$);
}
}
}
});

/**
 * Returns true if elem is a managed element. Managed elements have
 *   their children managed by Hoplon and implement the IHoplonElement protocol.
 */
hoplon.core.element_QMARK_ = (function hoplon$core$element_QMARK_(this$){
var and__8262__auto__ = (this$ instanceof Element);
if(and__8262__auto__){
if(!((this$ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === this$.hoplon$core$IHoplonElement$))){
return true;
} else {
if((!this$.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonElement,this$);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonElement,this$);
}
} else {
return and__8262__auto__;
}
});
/**
 * Returns true if elem is a native element. Native elements' children
 *   are not managed by Hoplon, and have not been extended with IHoplonElement.
 */
hoplon.core.native_QMARK_ = (function hoplon$core$native_QMARK_(elem){
return ((elem instanceof Element)) && (cljs.core.not(hoplon.core.element_QMARK_(elem)));
});
hoplon.core.native_node_QMARK_ = (function hoplon$core$native_node_QMARK_(node){

return ((node instanceof Node)) && (cljs.core.not(hoplon.core.element_QMARK_(node)));
});
hoplon.core.hoplonify_BANG_ = (function hoplon$core$hoplonify_BANG_(elem){
var x19717 = elem;
x19717.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

x19717.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = ((function (x19717){
return (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#<HoplonElement: ",this$__$1.tagName,">"], 0));
});})(x19717))
;

x19717.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL;

x19717.cljs$core$ILookup$_lookup$arity$2 = ((function (x19717){
return (function (this$,k){
var this$__$1 = this;
if(cljs.core.truth_(hoplon.core.attribute_QMARK_(k))){
return this$__$1.getAttribute(cljs.core.name(k));
} else {
var G__19718 = this$__$1.children;
var G__19719 = k;
return goog.object.get(G__19718,G__19719);
}
});})(x19717))
;

x19717.cljs$core$ILookup$_lookup$arity$3 = ((function (x19717){
return (function (this$,k,not_found){
var this$__$1 = this;
var or__8274__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(this$__$1,k);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return not_found;
}
});})(x19717))
;

x19717.hoplon$core$IHoplonElement$ = cljs.core.PROTOCOL_SENTINEL;

x19717.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2 = ((function (x19717){
return (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__19720 = cljs.core.seq(kvs);
var chunk__19722 = null;
var count__19723 = (0);
var i__19724 = (0);
while(true){
if((i__19724 < count__19723)){
var vec__19726 = chunk__19722.cljs$core$IIndexed$_nth$arity$2(null,i__19724);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19726,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19726,(1),null);
var k_19748__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_19748__$1);
} else {
e.setAttribute(k_19748__$1,((v === true)?k_19748__$1:v));
}

var G__19749 = seq__19720;
var G__19750 = chunk__19722;
var G__19751 = count__19723;
var G__19752 = (i__19724 + (1));
seq__19720 = G__19749;
chunk__19722 = G__19750;
count__19723 = G__19751;
i__19724 = G__19752;
continue;
} else {
var temp__5535__auto__ = cljs.core.seq(seq__19720);
if(temp__5535__auto__){
var seq__19720__$1 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19720__$1)){
var c__9205__auto__ = cljs.core.chunk_first(seq__19720__$1);
var G__19753 = cljs.core.chunk_rest(seq__19720__$1);
var G__19754 = c__9205__auto__;
var G__19755 = cljs.core.count(c__9205__auto__);
var G__19756 = (0);
seq__19720 = G__19753;
chunk__19722 = G__19754;
count__19723 = G__19755;
i__19724 = G__19756;
continue;
} else {
var vec__19729 = cljs.core.first(seq__19720__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19729,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19729,(1),null);
var k_19757__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_19757__$1);
} else {
e.setAttribute(k_19757__$1,((v === true)?k_19757__$1:v));
}

var G__19758 = cljs.core.next(seq__19720__$1);
var G__19759 = null;
var G__19760 = (0);
var G__19761 = (0);
seq__19720 = G__19758;
chunk__19722 = G__19759;
count__19723 = G__19760;
i__19724 = G__19761;
continue;
}
} else {
return null;
}
}
break;
}
});})(x19717))
;

x19717.hoplon$core$IHoplonElement$_set_styles_BANG_$arity$2 = ((function (x19717){
return (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__19732 = cljs.core.seq(kvs);
var chunk__19733 = null;
var count__19734 = (0);
var i__19735 = (0);
while(true){
if((i__19735 < count__19734)){
var vec__19736 = chunk__19733.cljs$core$IIndexed$_nth$arity$2(null,i__19735);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19736,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19736,(1),null);
var G__19739_19762 = e.style;
var G__19740_19763 = cljs.core.name(k);
var G__19741_19764 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__19739_19762,G__19740_19763,G__19741_19764);

var G__19765 = seq__19732;
var G__19766 = chunk__19733;
var G__19767 = count__19734;
var G__19768 = (i__19735 + (1));
seq__19732 = G__19765;
chunk__19733 = G__19766;
count__19734 = G__19767;
i__19735 = G__19768;
continue;
} else {
var temp__5535__auto__ = cljs.core.seq(seq__19732);
if(temp__5535__auto__){
var seq__19732__$1 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19732__$1)){
var c__9205__auto__ = cljs.core.chunk_first(seq__19732__$1);
var G__19769 = cljs.core.chunk_rest(seq__19732__$1);
var G__19770 = c__9205__auto__;
var G__19771 = cljs.core.count(c__9205__auto__);
var G__19772 = (0);
seq__19732 = G__19769;
chunk__19733 = G__19770;
count__19734 = G__19771;
i__19735 = G__19772;
continue;
} else {
var vec__19742 = cljs.core.first(seq__19732__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19742,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19742,(1),null);
var G__19745_19773 = e.style;
var G__19746_19774 = cljs.core.name(k);
var G__19747_19775 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__19745_19773,G__19746_19774,G__19747_19775);

var G__19776 = cljs.core.next(seq__19732__$1);
var G__19777 = null;
var G__19778 = (0);
var G__19779 = (0);
seq__19732 = G__19776;
chunk__19733 = G__19777;
count__19734 = G__19778;
i__19735 = G__19779;
continue;
}
} else {
return null;
}
}
break;
}
});})(x19717))
;

x19717.hoplon$core$IHoplonElement$_hoplon_kids$arity$1 = ((function (x19717){
return (function (this$){
var this$__$1 = this;
var temp__5533__auto__ = this$__$1.hoplonKids;
if(cljs.core.truth_(temp__5533__auto__)){
var hl_kids = temp__5533__auto__;
return hl_kids;
} else {
var kids = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(hoplon.core.child_vec(this$__$1));
this$__$1.hoplonKids = kids;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.core.merge_kids,this$__$1));

return kids;
}
});})(x19717))
;

x19717.hoplon$core$IHoplonElement$_append_child_BANG_$arity$2 = ((function (x19717){
return (function (this$,child){
var this$__$1 = this;
var child__$1 = child;
var kids_19780 = hoplon.core._hoplon_kids(this$__$1);
var i_19781 = cljs.core.count(cljs.core.deref(kids_19780));
if(cljs.core.truth_(javelin.core.cell_QMARK_(child__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(child__$1,((function (kids_19780,i_19781,child__$1,this$__$1,x19717){
return (function (p1__19712_SHARP_,p2__19711_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_19780,cljs.core.assoc,i_19781,p2__19711_SHARP_);
});})(kids_19780,i_19781,child__$1,this$__$1,x19717))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_19780,cljs.core.assoc,i_19781,child__$1);
}

return child__$1;
});})(x19717))
;

x19717.hoplon$core$IHoplonElement$_remove_child_BANG_$arity$2 = ((function (x19717){
return (function (this$,child){
var this$__$1 = this;
var child__$1 = child;
var kids_19782 = hoplon.core._hoplon_kids(this$__$1);
var before_count_19783 = cljs.core.count(cljs.core.deref(kids_19782));
if(cljs.core.truth_(javelin.core.cell_QMARK_(child__$1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(kids_19782,((function (kids_19782,before_count_19783,child__$1,this$__$1,x19717){
return (function (p1__19713_SHARP_){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.deref(child__$1)),p1__19713_SHARP_));
});})(kids_19782,before_count_19783,child__$1,this$__$1,x19717))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(kids_19782,((function (kids_19782,before_count_19783,child__$1,this$__$1,x19717){
return (function (p1__19714_SHARP_){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,child__$1),p1__19714_SHARP_));
});})(kids_19782,before_count_19783,child__$1,this$__$1,x19717))
);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.deref(kids_19782)),(before_count_19783 - (1)))){
} else {
throw (new Error("Attempted to remove a node that is not a child of parent."));
}

return child__$1;
});})(x19717))
;

x19717.hoplon$core$IHoplonElement$_replace_child_BANG_$arity$3 = ((function (x19717){
return (function (this$,new$,existing){
var this$__$1 = this;
var existing__$1 = existing;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hoplon.core._hoplon_kids(this$__$1),((function (existing__$1,this$__$1,x19717){
return (function (p1__19715_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (existing__$1,this$__$1,x19717){
return (function (el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(el,existing__$1)){
return new$;
} else {
return el;
}
});})(existing__$1,this$__$1,x19717))
,p1__19715_SHARP_);
});})(existing__$1,this$__$1,x19717))
);

return existing__$1;
});})(x19717))
;

x19717.hoplon$core$IHoplonElement$_insert_before_BANG_$arity$3 = ((function (x19717){
return (function (this$,new$,existing){
var this$__$1 = this;
var new$__$1 = new$;
if(cljs.core.not(existing)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(hoplon.core._hoplon_kids(this$__$1),cljs.core.conj,new$__$1);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new$__$1,existing)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hoplon.core._hoplon_kids(this$__$1),((function (new$__$1,this$__$1,x19717){
return (function (p1__19716_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (new$__$1,this$__$1,x19717){
return (function (el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(el,existing)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new$__$1,el], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null);
}
});})(new$__$1,this$__$1,x19717))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__19716_SHARP_], 0)));
});})(new$__$1,this$__$1,x19717))
);
} else {
}
}

return new$__$1;
});})(x19717))
;

return x19717;
});
hoplon.core.__GT_hoplon = (function hoplon$core$__GT_hoplon(elem){
if(cljs.core.truth_(hoplon.core.element_QMARK_(elem))){
return elem;
} else {
var _ = elem;
hoplon.core.hoplonify_BANG_(elem);

return _;
}
});
hoplon.core.set_attributes_BANG_ = (function hoplon$core$set_attributes_BANG_(var_args){
var G__19789 = arguments.length;
switch (G__19789) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9576__auto__ = [];
var len__9553__auto___19791 = arguments.length;
var i__9554__auto___19792 = (0);
while(true){
if((i__9554__auto___19792 < len__9553__auto___19791)){
args_arr__9576__auto__.push((arguments[i__9554__auto___19792]));

var G__19793 = (i__9554__auto___19792 + (1));
i__9554__auto___19792 = G__19793;
continue;
} else {
}
break;
}

var argseq__9577__auto__ = (new cljs.core.IndexedSeq(args_arr__9576__auto__.slice((3)),(0),null));
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9577__auto__);

}
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_attributes_BANG_(hoplon.core.__GT_hoplon(this$),kvs);
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq19785){
var G__19786 = cljs.core.first(seq19785);
var seq19785__$1 = cljs.core.next(seq19785);
var G__19787 = cljs.core.first(seq19785__$1);
var seq19785__$2 = cljs.core.next(seq19785__$1);
var G__19788 = cljs.core.first(seq19785__$2);
var seq19785__$3 = cljs.core.next(seq19785__$2);
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19786,G__19787,G__19788,seq19785__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var G__19799 = arguments.length;
switch (G__19799) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9576__auto__ = [];
var len__9553__auto___19801 = arguments.length;
var i__9554__auto___19802 = (0);
while(true){
if((i__9554__auto___19802 < len__9553__auto___19801)){
args_arr__9576__auto__.push((arguments[i__9554__auto___19802]));

var G__19803 = (i__9554__auto___19802 + (1));
i__9554__auto___19802 = G__19803;
continue;
} else {
}
break;
}

var argseq__9577__auto__ = (new cljs.core.IndexedSeq(args_arr__9576__auto__.slice((3)),(0),null));
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9577__auto__);

}
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_styles_BANG_(hoplon.core.__GT_hoplon(this$),kvs);
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq19795){
var G__19796 = cljs.core.first(seq19795);
var seq19795__$1 = cljs.core.next(seq19795);
var G__19797 = cljs.core.first(seq19795__$1);
var seq19795__$2 = cljs.core.next(seq19795__$1);
var G__19798 = cljs.core.first(seq19795__$2);
var seq19795__$3 = cljs.core.next(seq19795__$2);
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19796,G__19797,G__19798,seq19795__$3);
});

hoplon.core.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.append_child_BANG_ = (function hoplon$core$append_child_BANG_(this$,child){
return hoplon.core._append_child_BANG_(hoplon.core.__GT_hoplon(this$),child);
});
hoplon.core.remove_child_BANG_ = (function hoplon$core$remove_child_BANG_(this$,child){
return hoplon.core._remove_child_BANG_(hoplon.core.__GT_hoplon(this$),child);
});
hoplon.core.replace_child_BANG_ = (function hoplon$core$replace_child_BANG_(this$,new$,existing){
return hoplon.core._replace_child_BANG_(hoplon.core.__GT_hoplon(this$),new$,existing);
});
hoplon.core.insert_before_BANG_ = (function hoplon$core$insert_before_BANG_(this$,new$,existing){
return hoplon.core._insert_before_BANG_(hoplon.core.__GT_hoplon(this$),new$,existing);
});
hoplon.core.add_attributes_BANG_ = (function hoplon$core$add_attributes_BANG_(this$,attr){
return cljs.core.reduce_kv((function (p1__19805_SHARP_,p2__19804_SHARP_,p3__19806_SHARP_){
hoplon.core._attribute_BANG_(p2__19804_SHARP_,p1__19805_SHARP_,p3__19806_SHARP_);

return p1__19805_SHARP_;
}),this$,attr);
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__19807){
var vec__19808 = p__19807;
var seq__19809 = cljs.core.seq(vec__19808);
var first__19810 = cljs.core.first(seq__19809);
var seq__19809__$1 = cljs.core.next(seq__19809);
var child_cell = first__19810;
var _ = seq__19809__$1;
var kids = vec__19808;
var this$__$1 = this$;
var seq__19811_19815 = cljs.core.seq(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(kids));
var chunk__19812_19816 = null;
var count__19813_19817 = (0);
var i__19814_19818 = (0);
while(true){
if((i__19814_19818 < count__19813_19817)){
var x_19819 = chunk__19812_19816.cljs$core$IIndexed$_nth$arity$2(null,i__19814_19818);
var temp__5535__auto___19820 = hoplon.core.__GT_node(x_19819);
if(cljs.core.truth_(temp__5535__auto___19820)){
var x_19821__$1 = temp__5535__auto___19820;
hoplon.core._append_child_BANG_(this$__$1,x_19821__$1);
} else {
}

var G__19822 = seq__19811_19815;
var G__19823 = chunk__19812_19816;
var G__19824 = count__19813_19817;
var G__19825 = (i__19814_19818 + (1));
seq__19811_19815 = G__19822;
chunk__19812_19816 = G__19823;
count__19813_19817 = G__19824;
i__19814_19818 = G__19825;
continue;
} else {
var temp__5535__auto___19826 = cljs.core.seq(seq__19811_19815);
if(temp__5535__auto___19826){
var seq__19811_19827__$1 = temp__5535__auto___19826;
if(cljs.core.chunked_seq_QMARK_(seq__19811_19827__$1)){
var c__9205__auto___19828 = cljs.core.chunk_first(seq__19811_19827__$1);
var G__19829 = cljs.core.chunk_rest(seq__19811_19827__$1);
var G__19830 = c__9205__auto___19828;
var G__19831 = cljs.core.count(c__9205__auto___19828);
var G__19832 = (0);
seq__19811_19815 = G__19829;
chunk__19812_19816 = G__19830;
count__19813_19817 = G__19831;
i__19814_19818 = G__19832;
continue;
} else {
var x_19833 = cljs.core.first(seq__19811_19827__$1);
var temp__5535__auto___19834__$1 = hoplon.core.__GT_node(x_19833);
if(cljs.core.truth_(temp__5535__auto___19834__$1)){
var x_19835__$1 = temp__5535__auto___19834__$1;
hoplon.core._append_child_BANG_(this$__$1,x_19835__$1);
} else {
}

var G__19836 = cljs.core.next(seq__19811_19827__$1);
var G__19837 = null;
var G__19838 = (0);
var G__19839 = (0);
seq__19811_19815 = G__19836;
chunk__19812_19816 = G__19837;
count__19813_19817 = G__19838;
i__19814_19818 = G__19839;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});
hoplon.core.invoke_BANG_ = (function hoplon$core$invoke_BANG_(var_args){
var args__9560__auto__ = [];
var len__9553__auto___19846 = arguments.length;
var i__9554__auto___19847 = (0);
while(true){
if((i__9554__auto___19847 < len__9553__auto___19846)){
args__9560__auto__.push((arguments[i__9554__auto___19847]));

var G__19848 = (i__9554__auto___19847 + (1));
i__9554__auto___19847 = G__19848;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
var vec__19842 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19842,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19842,(1),null);
var G__19845 = hoplon.core.__GT_hoplon(this$);
hoplon.core.add_attributes_BANG_(G__19845,attr);

hoplon.core.add_children_BANG_(G__19845,kids);

return G__19845;
});

hoplon.core.invoke_BANG_.cljs$lang$maxFixedArity = (1);

hoplon.core.invoke_BANG_.cljs$lang$applyTo = (function (seq19840){
var G__19841 = cljs.core.first(seq19840);
var seq19840__$1 = cljs.core.next(seq19840);
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19841,seq19840__$1);
});

Element.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#<Element: ",this$__$1.tagName,">"], 0));
});

Element.prototype.cljs$core$IFn$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.call = (function() {
var G__19850 = null;
var G__19850__1 = (function (self__){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_(this$);
});
var G__19850__2 = (function (self__,a){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
});
var G__19850__3 = (function (self__,a,b){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
});
var G__19850__4 = (function (self__,a,b,c){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c], 0));
});
var G__19850__5 = (function (self__,a,b,c,d){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d], 0));
});
var G__19850__6 = (function (self__,a,b,c,d,e){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e], 0));
});
var G__19850__7 = (function (self__,a,b,c,d,e,f){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f], 0));
});
var G__19850__8 = (function (self__,a,b,c,d,e,f,g){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g], 0));
});
var G__19850__9 = (function (self__,a,b,c,d,e,f,g,h){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h], 0));
});
var G__19850__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i], 0));
});
var G__19850__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j], 0));
});
var G__19850__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k], 0));
});
var G__19850__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l], 0));
});
var G__19850__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m], 0));
});
var G__19850__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n], 0));
});
var G__19850__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o], 0));
});
var G__19850__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
});
var G__19850__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q], 0));
});
var G__19850__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r], 0));
});
var G__19850__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s], 0));
});
var G__19850__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t], 0));
});
var G__19850__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
G__19850 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__19850__1.call(this,self__);
case 2:
return G__19850__2.call(this,self__,a);
case 3:
return G__19850__3.call(this,self__,a,b);
case 4:
return G__19850__4.call(this,self__,a,b,c);
case 5:
return G__19850__5.call(this,self__,a,b,c,d);
case 6:
return G__19850__6.call(this,self__,a,b,c,d,e);
case 7:
return G__19850__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__19850__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__19850__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__19850__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__19850__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__19850__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__19850__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__19850__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__19850__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__19850__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__19850__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__19850__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__19850__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__19850__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__19850__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__19850__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__19850.cljs$core$IFn$_invoke$arity$1 = G__19850__1;
G__19850.cljs$core$IFn$_invoke$arity$2 = G__19850__2;
G__19850.cljs$core$IFn$_invoke$arity$3 = G__19850__3;
G__19850.cljs$core$IFn$_invoke$arity$4 = G__19850__4;
G__19850.cljs$core$IFn$_invoke$arity$5 = G__19850__5;
G__19850.cljs$core$IFn$_invoke$arity$6 = G__19850__6;
G__19850.cljs$core$IFn$_invoke$arity$7 = G__19850__7;
G__19850.cljs$core$IFn$_invoke$arity$8 = G__19850__8;
G__19850.cljs$core$IFn$_invoke$arity$9 = G__19850__9;
G__19850.cljs$core$IFn$_invoke$arity$10 = G__19850__10;
G__19850.cljs$core$IFn$_invoke$arity$11 = G__19850__11;
G__19850.cljs$core$IFn$_invoke$arity$12 = G__19850__12;
G__19850.cljs$core$IFn$_invoke$arity$13 = G__19850__13;
G__19850.cljs$core$IFn$_invoke$arity$14 = G__19850__14;
G__19850.cljs$core$IFn$_invoke$arity$15 = G__19850__15;
G__19850.cljs$core$IFn$_invoke$arity$16 = G__19850__16;
G__19850.cljs$core$IFn$_invoke$arity$17 = G__19850__17;
G__19850.cljs$core$IFn$_invoke$arity$18 = G__19850__18;
G__19850.cljs$core$IFn$_invoke$arity$19 = G__19850__19;
G__19850.cljs$core$IFn$_invoke$arity$20 = G__19850__20;
G__19850.cljs$core$IFn$_invoke$arity$21 = G__19850__21;
G__19850.cljs$core$IFn$_invoke$arity$22 = G__19850__22;
return G__19850;
})()
;

Element.prototype.apply = (function (self__,args19849){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args19849)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var this$ = this;
return hoplon.core.invoke_BANG_(this$);
});

Element.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
DocumentFragment.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#<DocumentFragment>"], 0));
});

DocumentFragment.prototype.cljs$core$IFn$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.call = (function() {
var G__19852 = null;
var G__19852__1 = (function (self__){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_(this$);
});
var G__19852__2 = (function (self__,a){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
});
var G__19852__3 = (function (self__,a,b){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
});
var G__19852__4 = (function (self__,a,b,c){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c], 0));
});
var G__19852__5 = (function (self__,a,b,c,d){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d], 0));
});
var G__19852__6 = (function (self__,a,b,c,d,e){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e], 0));
});
var G__19852__7 = (function (self__,a,b,c,d,e,f){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f], 0));
});
var G__19852__8 = (function (self__,a,b,c,d,e,f,g){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g], 0));
});
var G__19852__9 = (function (self__,a,b,c,d,e,f,g,h){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h], 0));
});
var G__19852__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i], 0));
});
var G__19852__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j], 0));
});
var G__19852__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k], 0));
});
var G__19852__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l], 0));
});
var G__19852__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m], 0));
});
var G__19852__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n], 0));
});
var G__19852__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o], 0));
});
var G__19852__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
});
var G__19852__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q], 0));
});
var G__19852__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r], 0));
});
var G__19852__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s], 0));
});
var G__19852__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t], 0));
});
var G__19852__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
G__19852 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__19852__1.call(this,self__);
case 2:
return G__19852__2.call(this,self__,a);
case 3:
return G__19852__3.call(this,self__,a,b);
case 4:
return G__19852__4.call(this,self__,a,b,c);
case 5:
return G__19852__5.call(this,self__,a,b,c,d);
case 6:
return G__19852__6.call(this,self__,a,b,c,d,e);
case 7:
return G__19852__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__19852__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__19852__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__19852__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__19852__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__19852__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__19852__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__19852__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__19852__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__19852__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__19852__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__19852__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__19852__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__19852__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__19852__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__19852__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__19852.cljs$core$IFn$_invoke$arity$1 = G__19852__1;
G__19852.cljs$core$IFn$_invoke$arity$2 = G__19852__2;
G__19852.cljs$core$IFn$_invoke$arity$3 = G__19852__3;
G__19852.cljs$core$IFn$_invoke$arity$4 = G__19852__4;
G__19852.cljs$core$IFn$_invoke$arity$5 = G__19852__5;
G__19852.cljs$core$IFn$_invoke$arity$6 = G__19852__6;
G__19852.cljs$core$IFn$_invoke$arity$7 = G__19852__7;
G__19852.cljs$core$IFn$_invoke$arity$8 = G__19852__8;
G__19852.cljs$core$IFn$_invoke$arity$9 = G__19852__9;
G__19852.cljs$core$IFn$_invoke$arity$10 = G__19852__10;
G__19852.cljs$core$IFn$_invoke$arity$11 = G__19852__11;
G__19852.cljs$core$IFn$_invoke$arity$12 = G__19852__12;
G__19852.cljs$core$IFn$_invoke$arity$13 = G__19852__13;
G__19852.cljs$core$IFn$_invoke$arity$14 = G__19852__14;
G__19852.cljs$core$IFn$_invoke$arity$15 = G__19852__15;
G__19852.cljs$core$IFn$_invoke$arity$16 = G__19852__16;
G__19852.cljs$core$IFn$_invoke$arity$17 = G__19852__17;
G__19852.cljs$core$IFn$_invoke$arity$18 = G__19852__18;
G__19852.cljs$core$IFn$_invoke$arity$19 = G__19852__19;
G__19852.cljs$core$IFn$_invoke$arity$20 = G__19852__20;
G__19852.cljs$core$IFn$_invoke$arity$21 = G__19852__21;
G__19852.cljs$core$IFn$_invoke$arity$22 = G__19852__22;
return G__19852;
})()
;

DocumentFragment.prototype.apply = (function (self__,args19851){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args19851)));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var this$ = this;
return hoplon.core.invoke_BANG_(this$);
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
hoplon.core.mksingleton = (function hoplon$core$mksingleton(elem){

return (function() { 
var G__19859__delegate = function (args){
var oelem = goog.object.get(document,elem);
if(cljs.core.truth_(oelem)){
} else {
var G__19853_19860 = document;
var G__19854_19861 = elem;
var G__19855_19862 = document.createElement(elem);
goog.object.set(G__19853_19860,G__19854_19861,G__19855_19862);
}

var helem = hoplon.core.__GT_hoplon(oelem);
var vec__19856_19863 = hoplon.core.parse_args(args);
var attrs_19864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19856_19863,(0),null);
var kids_19865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19856_19863,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs_19864))){
} else {
hoplon.core.merge_kids(helem,null,null);

hoplon.core.add_attributes_BANG_(helem,attrs_19864);

hoplon.core.add_children_BANG_(helem,kids_19865);
}

return helem;
};
var G__19859 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19866__i = 0, G__19866__a = new Array(arguments.length -  0);
while (G__19866__i < G__19866__a.length) {G__19866__a[G__19866__i] = arguments[G__19866__i + 0]; ++G__19866__i;}
  args = new cljs.core.IndexedSeq(G__19866__a,0,null);
} 
return G__19859__delegate.call(this,args);};
G__19859.cljs$lang$maxFixedArity = 0;
G__19859.cljs$lang$applyTo = (function (arglist__19867){
var args = cljs.core.seq(arglist__19867);
return G__19859__delegate(args);
});
G__19859.cljs$core$IFn$_invoke$arity$variadic = G__19859__delegate;
return G__19859;
})()
;
});
hoplon.core.mkelem = (function hoplon$core$mkelem(tag){

return (function() { 
var G__19871__delegate = function (args){
var vec__19868 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19868,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19868,(1),null);
var elem = document.createElement(tag);
var hl = hoplon.core.__GT_hoplon(elem);
return (hl.cljs$core$IFn$_invoke$arity$2 ? hl.cljs$core$IFn$_invoke$arity$2(attr,kids) : hl.call(null,attr,kids));
};
var G__19871 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19872__i = 0, G__19872__a = new Array(arguments.length -  0);
while (G__19872__i < G__19872__a.length) {G__19872__a[G__19872__i] = arguments[G__19872__i + 0]; ++G__19872__i;}
  args = new cljs.core.IndexedSeq(G__19872__a,0,null);
} 
return G__19871__delegate.call(this,args);};
G__19871.cljs$lang$maxFixedArity = 0;
G__19871.cljs$lang$applyTo = (function (arglist__19873){
var args = cljs.core.seq(arglist__19873);
return G__19871__delegate(args);
});
G__19871.cljs$core$IFn$_invoke$arity$variadic = G__19871__delegate;
return G__19871;
})()
;
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__9560__auto__ = [];
var len__9553__auto___19875 = arguments.length;
var i__9554__auto___19876 = (0);
while(true){
if((i__9554__auto___19876 < len__9553__auto___19875)){
args__9560__auto__.push((arguments[i__9554__auto___19876]));

var G__19877 = (i__9554__auto___19876 + (1));
i__9554__auto___19876 = G__19877;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((0) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((0)),(0),null)):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__9561__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){

var el = document.documentElement;
hoplon.core.add_attributes_BANG_(hoplon.core.__GT_hoplon(el),cljs.core.first(hoplon.core.parse_args(args)));

return el;
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq19874){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19874));
});

/**
 * Updates and returns the document's `head` element in place.
 */
hoplon.core.head = hoplon.core.mksingleton("head");
/**
 * Updates and returns the document's `body` element in place.
 */
hoplon.core.body = hoplon.core.mksingleton("body");
hoplon.core.a = hoplon.core.mkelem("a");
hoplon.core.abbr = hoplon.core.mkelem("abbr");
hoplon.core.address = hoplon.core.mkelem("address");
hoplon.core.area = hoplon.core.mkelem("area");
hoplon.core.article = hoplon.core.mkelem("article");
hoplon.core.aside = hoplon.core.mkelem("aside");
hoplon.core.audio = hoplon.core.mkelem("audio");
hoplon.core.b = hoplon.core.mkelem("b");
hoplon.core.base = hoplon.core.mkelem("base");
hoplon.core.bdi = hoplon.core.mkelem("bdi");
hoplon.core.bdo = hoplon.core.mkelem("bdo");
hoplon.core.blockquote = hoplon.core.mkelem("blockquote");
hoplon.core.br = hoplon.core.mkelem("br");
hoplon.core.button = hoplon.core.mkelem("button");
hoplon.core.canvas = hoplon.core.mkelem("canvas");
hoplon.core.caption = hoplon.core.mkelem("caption");
hoplon.core.cite = hoplon.core.mkelem("cite");
hoplon.core.code = hoplon.core.mkelem("code");
hoplon.core.col = hoplon.core.mkelem("col");
hoplon.core.colgroup = hoplon.core.mkelem("colgroup");
hoplon.core.data = hoplon.core.mkelem("data");
hoplon.core.datalist = hoplon.core.mkelem("datalist");
hoplon.core.dd = hoplon.core.mkelem("dd");
hoplon.core.del = hoplon.core.mkelem("del");
hoplon.core.details = hoplon.core.mkelem("details");
hoplon.core.dfn = hoplon.core.mkelem("dfn");
hoplon.core.dialog = hoplon.core.mkelem("dialog");
hoplon.core.div = hoplon.core.mkelem("div");
hoplon.core.dl = hoplon.core.mkelem("dl");
hoplon.core.dt = hoplon.core.mkelem("dt");
hoplon.core.em = hoplon.core.mkelem("em");
hoplon.core.embed = hoplon.core.mkelem("embed");
hoplon.core.fieldset = hoplon.core.mkelem("fieldset");
hoplon.core.figcaption = hoplon.core.mkelem("figcaption");
hoplon.core.figure = hoplon.core.mkelem("figure");
hoplon.core.footer = hoplon.core.mkelem("footer");
hoplon.core.form = hoplon.core.mkelem("form");
hoplon.core.h1 = hoplon.core.mkelem("h1");
hoplon.core.h2 = hoplon.core.mkelem("h2");
hoplon.core.h3 = hoplon.core.mkelem("h3");
hoplon.core.h4 = hoplon.core.mkelem("h4");
hoplon.core.h5 = hoplon.core.mkelem("h5");
hoplon.core.h6 = hoplon.core.mkelem("h6");
hoplon.core.header = hoplon.core.mkelem("header");
hoplon.core.hgroup = hoplon.core.mkelem("hgroup");
hoplon.core.hr = hoplon.core.mkelem("hr");
hoplon.core.i = hoplon.core.mkelem("i");
hoplon.core.iframe = hoplon.core.mkelem("iframe");
hoplon.core.img = hoplon.core.mkelem("img");
hoplon.core.input = hoplon.core.mkelem("input");
hoplon.core.ins = hoplon.core.mkelem("ins");
hoplon.core.kbd = hoplon.core.mkelem("kbd");
hoplon.core.keygen = hoplon.core.mkelem("keygen");
hoplon.core.label = hoplon.core.mkelem("label");
hoplon.core.legend = hoplon.core.mkelem("legend");
hoplon.core.li = hoplon.core.mkelem("li");
hoplon.core.link = hoplon.core.mkelem("link");
hoplon.core.main = hoplon.core.mkelem("main");
hoplon.core.html_map = hoplon.core.mkelem("map");
hoplon.core.mark = hoplon.core.mkelem("mark");
hoplon.core.menu = hoplon.core.mkelem("menu");
hoplon.core.menuitem = hoplon.core.mkelem("menuitem");
hoplon.core.html_meta = hoplon.core.mkelem("meta");
hoplon.core.meter = hoplon.core.mkelem("meter");
hoplon.core.multicol = hoplon.core.mkelem("multicol");
hoplon.core.nav = hoplon.core.mkelem("nav");
hoplon.core.noframes = hoplon.core.mkelem("noframes");
hoplon.core.noscript = hoplon.core.mkelem("noscript");
hoplon.core.html_object = hoplon.core.mkelem("object");
hoplon.core.ol = hoplon.core.mkelem("ol");
hoplon.core.optgroup = hoplon.core.mkelem("optgroup");
hoplon.core.option = hoplon.core.mkelem("option");
hoplon.core.output = hoplon.core.mkelem("output");
hoplon.core.p = hoplon.core.mkelem("p");
hoplon.core.param = hoplon.core.mkelem("param");
hoplon.core.picture = hoplon.core.mkelem("picture");
hoplon.core.pre = hoplon.core.mkelem("pre");
hoplon.core.progress = hoplon.core.mkelem("progress");
hoplon.core.q = hoplon.core.mkelem("q");
hoplon.core.rp = hoplon.core.mkelem("rp");
hoplon.core.rt = hoplon.core.mkelem("rt");
hoplon.core.rtc = hoplon.core.mkelem("rtc");
hoplon.core.ruby = hoplon.core.mkelem("ruby");
hoplon.core.s = hoplon.core.mkelem("s");
hoplon.core.samp = hoplon.core.mkelem("samp");
hoplon.core.script = hoplon.core.mkelem("script");
hoplon.core.section = hoplon.core.mkelem("section");
hoplon.core.select = hoplon.core.mkelem("select");
hoplon.core.shadow = hoplon.core.mkelem("shadow");
hoplon.core.small = hoplon.core.mkelem("small");
hoplon.core.source = hoplon.core.mkelem("source");
hoplon.core.span = hoplon.core.mkelem("span");
hoplon.core.strong = hoplon.core.mkelem("strong");
hoplon.core.style = hoplon.core.mkelem("style");
hoplon.core.sub = hoplon.core.mkelem("sub");
hoplon.core.summary = hoplon.core.mkelem("summary");
hoplon.core.sup = hoplon.core.mkelem("sup");
hoplon.core.table = hoplon.core.mkelem("table");
hoplon.core.tbody = hoplon.core.mkelem("tbody");
hoplon.core.td = hoplon.core.mkelem("td");
hoplon.core.template = hoplon.core.mkelem("template");
hoplon.core.textarea = hoplon.core.mkelem("textarea");
hoplon.core.tfoot = hoplon.core.mkelem("tfoot");
hoplon.core.th = hoplon.core.mkelem("th");
hoplon.core.thead = hoplon.core.mkelem("thead");
hoplon.core.html_time = hoplon.core.mkelem("time");
hoplon.core.title = hoplon.core.mkelem("title");
hoplon.core.tr = hoplon.core.mkelem("tr");
hoplon.core.track = hoplon.core.mkelem("track");
hoplon.core.u = hoplon.core.mkelem("u");
hoplon.core.ul = hoplon.core.mkelem("ul");
hoplon.core.html_var = hoplon.core.mkelem("var");
hoplon.core.video = hoplon.core.mkelem("video");
hoplon.core.wbr = hoplon.core.mkelem("wbr");
hoplon.core.spliced = cljs.core.vector;
hoplon.core.$text = (function hoplon$core$$text(p1__19878_SHARP_){
return document.createTextNode(p1__19878_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__19879_SHARP_){
return document.createComment(p1__19879_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = cljs.core.cst$kw$hoplon$core_SLASH__DASH__DASH__GT_;
if(typeof hoplon.core.elem_BANG_ !== 'undefined'){
} else {
hoplon.core.elem_BANG_ = (function (){var method_table__9329__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9330__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9331__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9332__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9333__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","elem!"),hoplon.core.dispatcher,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__9333__auto__,method_table__9329__auto__,prefer_table__9330__auto__,method_cache__9331__auto__,cached_hierarchy__9332__auto__));
})();
}
hoplon.core.elem_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,value){
if(cljs.core.truth_(javelin.core.cell_QMARK_(value))){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(value,(function (p1__19881_SHARP_,p2__19880_SHARP_){
return hoplon.core._do_BANG_(elem,key,p2__19880_SHARP_);
}));
} else {
if(cljs.core.fn_QMARK_(value)){
return hoplon.core._on_BANG_(elem,key,value);
} else {
return hoplon.core._do_BANG_(elem,key,value);

}
}
}));
if(typeof hoplon.core.do_BANG_ !== 'undefined'){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__9329__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9330__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9331__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9332__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9333__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","do!"),hoplon.core.dispatcher,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__9333__auto__,method_table__9329__auto__,prefer_table__9330__auto__,method_cache__9331__auto__,cached_hierarchy__9332__auto__));
})();
}
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,val){
var G__19882 = elem;
var G__19883 = cljs.core.cst$kw$attr;
var G__19884 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__19882,G__19883,G__19884) : hoplon.core.do_BANG_.call(null,G__19882,G__19883,G__19884));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$svg_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css,(function (elem,_,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(elem,val);
}));
if(typeof hoplon.core.on_BANG_ !== 'undefined'){
} else {
hoplon.core.on_BANG_ = (function (){var method_table__9329__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9330__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9331__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9332__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9333__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","on!"),hoplon.core.dispatcher,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__9333__auto__,method_table__9329__auto__,prefer_table__9330__auto__,method_cache__9331__auto__,cached_hierarchy__9332__auto__));
})();
}
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,event,callback){
return elem.addEventListener(cljs.core.name(event),callback);
}));
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,event,callback){
return elem.addEventListener(cljs.core.name(event),callback);
}));
/**
 * Given a cell items containing a seqable collection, constructs a cell that
 *   works like a fill vector. The template `tpl` is a function of one argument: the
 *   formula cell containing the ith item in items. The tpl function is called
 *   once (and only once) for each index in items. When the items collection
 *   shrinks the DOM element created by the template is not destroyed--it is only
 *   removed from the DOM and cached. When the items collection grows again those
 *   cached elements will be reinserted into the DOM at their original index.
 */
hoplon.core.loop_tpl_STAR_ = (function hoplon$core$loop_tpl_STAR_(items,tpl){
var on_deck = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
var items_seq = (function (){var fexpr__19889 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck){
return (function (G__19887,G__19888){
return (G__19887.cljs$core$IFn$_invoke$arity$1 ? G__19887.cljs$core$IFn$_invoke$arity$1(G__19888) : G__19887.call(null,G__19888));
});})(on_deck))
);
return (fexpr__19889.cljs$core$IFn$_invoke$arity$2 ? fexpr__19889.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,items) : fexpr__19889.call(null,cljs.core.seq,items));
})();
var ith_item = ((function (on_deck,items_seq){
return (function (p1__19885_SHARP_){
var fexpr__19893 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck,items_seq){
return (function (G__19892,G__19891,G__19890){
return (G__19890.cljs$core$IFn$_invoke$arity$3 ? G__19890.cljs$core$IFn$_invoke$arity$3(G__19891,G__19892,null) : G__19890.call(null,G__19891,G__19892,null));
});})(on_deck,items_seq))
);
return (fexpr__19893.cljs$core$IFn$_invoke$arity$3 ? fexpr__19893.cljs$core$IFn$_invoke$arity$3(p1__19885_SHARP_,items_seq,cljs.core.nth) : fexpr__19893.call(null,p1__19885_SHARP_,items_seq,cljs.core.nth));
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__19886_SHARP_){
var x = cljs.core.first(cljs.core.deref(p1__19886_SHARP_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__19886_SHARP_,cljs.core.rest);

return x;
});})(on_deck,items_seq,ith_item))
;
var current = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(items_seq,((function (current,on_deck,items_seq,ith_item,shift_BANG_){
return (function (old_items,new_items){
var old = cljs.core.count(old_items);
var new$ = cljs.core.count(new_items);
var diff = (new$ - old);
if((diff > (0))){
var seq__19894 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__19895 = null;
var count__19896 = (0);
var i__19897 = (0);
while(true){
if((i__19897 < count__19896)){
var i = chunk__19895.cljs$core$IIndexed$_nth$arity$2(null,i__19897);
var e_19900 = (function (){var or__8274__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
var G__19898 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__19898) : tpl.call(null,G__19898));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_19900);

var G__19901 = seq__19894;
var G__19902 = chunk__19895;
var G__19903 = count__19896;
var G__19904 = (i__19897 + (1));
seq__19894 = G__19901;
chunk__19895 = G__19902;
count__19896 = G__19903;
i__19897 = G__19904;
continue;
} else {
var temp__5535__auto__ = cljs.core.seq(seq__19894);
if(temp__5535__auto__){
var seq__19894__$1 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19894__$1)){
var c__9205__auto__ = cljs.core.chunk_first(seq__19894__$1);
var G__19905 = cljs.core.chunk_rest(seq__19894__$1);
var G__19906 = c__9205__auto__;
var G__19907 = cljs.core.count(c__9205__auto__);
var G__19908 = (0);
seq__19894 = G__19905;
chunk__19895 = G__19906;
count__19896 = G__19907;
i__19897 = G__19908;
continue;
} else {
var i = cljs.core.first(seq__19894__$1);
var e_19909 = (function (){var or__8274__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
var G__19899 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__19899) : tpl.call(null,G__19899));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_19909);

var G__19910 = cljs.core.next(seq__19894__$1);
var G__19911 = null;
var G__19912 = (0);
var G__19913 = (0);
seq__19894 = G__19910;
chunk__19895 = G__19911;
count__19896 = G__19912;
i__19897 = G__19913;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if((diff < (0))){
var n__9319__auto__ = (- diff);
var _ = (0);
while(true){
if((_ < n__9319__auto__)){
var e_19914 = cljs.core.peek(cljs.core.deref(current));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_19914);

var G__19915 = (_ + (1));
_ = G__19915;
continue;
} else {
return null;
}
break;
}
} else {
return null;
}
}
});})(current,on_deck,items_seq,ith_item,shift_BANG_))
);

return current;
});
var els_state_19953 = cljs.core.memoize((function (scope){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));
var items_state_19954 = cljs.core.memoize(((function (els_state_19953){
return (function (scope){
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});})(els_state_19953))
);
/**
 * Like `loop-tpl*` but accepts a `key-fn` which, given a list item returns an
 *   (immutable) key under which to cache and reuse the rendered DOM element.
 *   Also accepts a `scope` allowing keyed items to be tracked across multiple lists
 *   for use in e.g. drag and drop applications.
 *   Only one item per key is supported per scope, it is the application's
 *   responsibility to ensure that item values are consistent and correct across
 *   multiple lists.
 */
hoplon.core.keyed_loop_tpl_STAR_ = ((function (els_state_19953,items_state_19954){
return (function hoplon$core$keyed_loop_tpl_STAR_(var_args){
var args__9560__auto__ = [];
var len__9553__auto___19955 = arguments.length;
var i__9554__auto___19956 = (0);
while(true){
if((i__9554__auto___19956 < len__9553__auto___19955)){
args__9560__auto__.push((arguments[i__9554__auto___19956]));

var G__19957 = (i__9554__auto___19956 + (1));
i__9554__auto___19956 = G__19957;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((2) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((2)),(0),null)):null);
return hoplon.core.keyed_loop_tpl_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9561__auto__);
});})(els_state_19953,items_state_19954))
;

hoplon.core.keyed_loop_tpl_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (els_state_19953,items_state_19954){
return (function (items,tpl,p__19920){
var map__19921 = p__19920;
var map__19921__$1 = ((((!((map__19921 == null)))?((((map__19921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19921.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19921):map__19921);
var scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19921__$1,cljs.core.cst$kw$scope);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19921__$1,cljs.core.cst$kw$key_DASH_fn);
var key_fn__$1 = (function (){var or__8274__auto__ = key_fn;
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return cljs.core.identity;
}
})();
var ks = (function (){var fexpr__19926 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (key_fn__$1,map__19921,map__19921__$1,scope,key_fn,els_state_19953,items_state_19954){
return (function (G__19925,G__19923,G__19924){
return (G__19923.cljs$core$IFn$_invoke$arity$2 ? G__19923.cljs$core$IFn$_invoke$arity$2(G__19924,G__19925) : G__19923.call(null,G__19924,G__19925));
});})(key_fn__$1,map__19921,map__19921__$1,scope,key_fn,els_state_19953,items_state_19954))
);
return (fexpr__19926.cljs$core$IFn$_invoke$arity$3 ? fexpr__19926.cljs$core$IFn$_invoke$arity$3(items,cljs.core.map,key_fn__$1) : fexpr__19926.call(null,items,cljs.core.map,key_fn__$1));
})();
var els = (cljs.core.truth_(scope)?(els_state_19953.cljs$core$IFn$_invoke$arity$1 ? els_state_19953.cljs$core$IFn$_invoke$arity$1(scope) : els_state_19953.call(null,scope)):cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY));
var scoped_items = (cljs.core.truth_(scope)?(items_state_19954.cljs$core$IFn$_invoke$arity$1 ? items_state_19954.cljs$core$IFn$_invoke$arity$1(scope) : items_state_19954.call(null,scope)):(function (){var fexpr__19930 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (key_fn__$1,ks,els,map__19921,map__19921__$1,scope,key_fn,els_state_19953,items_state_19954){
return (function (G__19929,G__19927,G__19928){
return (G__19927.cljs$core$IFn$_invoke$arity$2 ? G__19927.cljs$core$IFn$_invoke$arity$2(G__19928,G__19929) : G__19927.call(null,G__19928,G__19929));
});})(key_fn__$1,ks,els,map__19921,map__19921__$1,scope,key_fn,els_state_19953,items_state_19954))
);
return (fexpr__19930.cljs$core$IFn$_invoke$arity$3 ? fexpr__19930.cljs$core$IFn$_invoke$arity$3(items,cljs.core.zipmap,ks) : fexpr__19930.call(null,items,cljs.core.zipmap,ks));
})());
var k__GT_el = ((function (key_fn__$1,ks,els,scoped_items,map__19921,map__19921__$1,scope,key_fn,els_state_19953,items_state_19954){
return (function (p1__19916_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(els),p1__19916_SHARP_);
});})(key_fn__$1,ks,els,scoped_items,map__19921,map__19921__$1,scope,key_fn,els_state_19953,items_state_19954))
;
if(cljs.core.truth_(scope)){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(items,((function (key_fn__$1,ks,els,scoped_items,k__GT_el,map__19921,map__19921__$1,scope,key_fn,els_state_19953,items_state_19954){
return (function (_,n){
return javelin.core.dosync_STAR_(((function (key_fn__$1,ks,els,scoped_items,k__GT_el,map__19921,map__19921__$1,scope,key_fn,els_state_19953,items_state_19954){
return (function (){
var seq__19931 = cljs.core.seq(n);
var chunk__19932 = null;
var count__19933 = (0);
var i__19934 = (0);
while(true){
if((i__19934 < count__19933)){
var i = chunk__19932.cljs$core$IIndexed$_nth$arity$2(null,i__19934);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scoped_items,cljs.core.assoc,(key_fn__$1.cljs$core$IFn$_invoke$arity$1 ? key_fn__$1.cljs$core$IFn$_invoke$arity$1(i) : key_fn__$1.call(null,i)),i);

var G__19958 = seq__19931;
var G__19959 = chunk__19932;
var G__19960 = count__19933;
var G__19961 = (i__19934 + (1));
seq__19931 = G__19958;
chunk__19932 = G__19959;
count__19933 = G__19960;
i__19934 = G__19961;
continue;
} else {
var temp__5535__auto__ = cljs.core.seq(seq__19931);
if(temp__5535__auto__){
var seq__19931__$1 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19931__$1)){
var c__9205__auto__ = cljs.core.chunk_first(seq__19931__$1);
var G__19962 = cljs.core.chunk_rest(seq__19931__$1);
var G__19963 = c__9205__auto__;
var G__19964 = cljs.core.count(c__9205__auto__);
var G__19965 = (0);
seq__19931 = G__19962;
chunk__19932 = G__19963;
count__19933 = G__19964;
i__19934 = G__19965;
continue;
} else {
var i = cljs.core.first(seq__19931__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scoped_items,cljs.core.assoc,(key_fn__$1.cljs$core$IFn$_invoke$arity$1 ? key_fn__$1.cljs$core$IFn$_invoke$arity$1(i) : key_fn__$1.call(null,i)),i);

var G__19966 = cljs.core.next(seq__19931__$1);
var G__19967 = null;
var G__19968 = (0);
var G__19969 = (0);
seq__19931 = G__19966;
chunk__19932 = G__19967;
count__19933 = G__19968;
i__19934 = G__19969;
continue;
}
} else {
return null;
}
}
break;
}
});})(key_fn__$1,ks,els,scoped_items,k__GT_el,map__19921,map__19921__$1,scope,key_fn,els_state_19953,items_state_19954))
);
});})(key_fn__$1,ks,els,scoped_items,k__GT_el,map__19921,map__19921__$1,scope,key_fn,els_state_19953,items_state_19954))
);
} else {
}

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(ks,((function (key_fn__$1,ks,els,scoped_items,k__GT_el,map__19921,map__19921__$1,scope,key_fn,els_state_19953,items_state_19954){
return (function (_,n){
var seq__19935 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,cljs.core.deref(els)),n));
var chunk__19936 = null;
var count__19937 = (0);
var i__19938 = (0);
while(true){
if((i__19938 < count__19937)){
var k = chunk__19936.cljs$core$IIndexed$_nth$arity$2(null,i__19938);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(els,cljs.core.assoc,k,(function (){var G__19939 = (function (){var fexpr__19943 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (seq__19935,chunk__19936,count__19937,i__19938,k,key_fn__$1,ks,els,scoped_items,k__GT_el,map__19921,map__19921__$1,scope,key_fn,els_state_19953,items_state_19954){
return (function (G__19941,G__19940,G__19942){
return (G__19940.cljs$core$IFn$_invoke$arity$2 ? G__19940.cljs$core$IFn$_invoke$arity$2(G__19941,G__19942) : G__19940.call(null,G__19941,G__19942));
});})(seq__19935,chunk__19936,count__19937,i__19938,k,key_fn__$1,ks,els,scoped_items,k__GT_el,map__19921,map__19921__$1,scope,key_fn,els_state_19953,items_state_19954))
);
return (fexpr__19943.cljs$core$IFn$_invoke$arity$3 ? fexpr__19943.cljs$core$IFn$_invoke$arity$3(scoped_items,cljs.core.get,k) : fexpr__19943.call(null,scoped_items,cljs.core.get,k));
})();
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__19939) : tpl.call(null,G__19939));
})());

var G__19970 = seq__19935;
var G__19971 = chunk__19936;
var G__19972 = count__19937;
var G__19973 = (i__19938 + (1));
seq__19935 = G__19970;
chunk__19936 = G__19971;
count__19937 = G__19972;
i__19938 = G__19973;
continue;
} else {
var temp__5535__auto__ = cljs.core.seq(seq__19935);
if(temp__5535__auto__){
var seq__19935__$1 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19935__$1)){
var c__9205__auto__ = cljs.core.chunk_first(seq__19935__$1);
var G__19974 = cljs.core.chunk_rest(seq__19935__$1);
var G__19975 = c__9205__auto__;
var G__19976 = cljs.core.count(c__9205__auto__);
var G__19977 = (0);
seq__19935 = G__19974;
chunk__19936 = G__19975;
count__19937 = G__19976;
i__19938 = G__19977;
continue;
} else {
var k = cljs.core.first(seq__19935__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(els,cljs.core.assoc,k,(function (){var G__19944 = (function (){var fexpr__19948 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (seq__19935,chunk__19936,count__19937,i__19938,k,seq__19935__$1,temp__5535__auto__,key_fn__$1,ks,els,scoped_items,k__GT_el,map__19921,map__19921__$1,scope,key_fn,els_state_19953,items_state_19954){
return (function (G__19946,G__19945,G__19947){
return (G__19945.cljs$core$IFn$_invoke$arity$2 ? G__19945.cljs$core$IFn$_invoke$arity$2(G__19946,G__19947) : G__19945.call(null,G__19946,G__19947));
});})(seq__19935,chunk__19936,count__19937,i__19938,k,seq__19935__$1,temp__5535__auto__,key_fn__$1,ks,els,scoped_items,k__GT_el,map__19921,map__19921__$1,scope,key_fn,els_state_19953,items_state_19954))
);
return (fexpr__19948.cljs$core$IFn$_invoke$arity$3 ? fexpr__19948.cljs$core$IFn$_invoke$arity$3(scoped_items,cljs.core.get,k) : fexpr__19948.call(null,scoped_items,cljs.core.get,k));
})();
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__19944) : tpl.call(null,G__19944));
})());

var G__19978 = cljs.core.next(seq__19935__$1);
var G__19979 = null;
var G__19980 = (0);
var G__19981 = (0);
seq__19935 = G__19978;
chunk__19936 = G__19979;
count__19937 = G__19980;
i__19938 = G__19981;
continue;
}
} else {
return null;
}
}
break;
}
});})(key_fn__$1,ks,els,scoped_items,k__GT_el,map__19921,map__19921__$1,scope,key_fn,els_state_19953,items_state_19954))
);

var fexpr__19952 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (key_fn__$1,ks,els,scoped_items,k__GT_el,map__19921,map__19921__$1,scope,key_fn,els_state_19953,items_state_19954){
return (function (G__19949,G__19951,G__19950){
return (G__19949.cljs$core$IFn$_invoke$arity$2 ? G__19949.cljs$core$IFn$_invoke$arity$2(G__19950,G__19951) : G__19949.call(null,G__19950,G__19951));
});})(key_fn__$1,ks,els,scoped_items,k__GT_el,map__19921,map__19921__$1,scope,key_fn,els_state_19953,items_state_19954))
);
return (fexpr__19952.cljs$core$IFn$_invoke$arity$3 ? fexpr__19952.cljs$core$IFn$_invoke$arity$3(cljs.core.map,ks,k__GT_el) : fexpr__19952.call(null,cljs.core.map,ks,k__GT_el));
});})(els_state_19953,items_state_19954))
;

hoplon.core.keyed_loop_tpl_STAR_.cljs$lang$maxFixedArity = (2);

hoplon.core.keyed_loop_tpl_STAR_.cljs$lang$applyTo = ((function (els_state_19953,items_state_19954){
return (function (seq19917){
var G__19918 = cljs.core.first(seq19917);
var seq19917__$1 = cljs.core.next(seq19917);
var G__19919 = cljs.core.first(seq19917__$1);
var seq19917__$2 = cljs.core.next(seq19917__$1);
return hoplon.core.keyed_loop_tpl_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__19918,G__19919,seq19917__$2);
});})(els_state_19953,items_state_19954))
;

