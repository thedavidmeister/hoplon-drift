// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__18723){
var vec__18724 = p__18723;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18724,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18724,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__18727 = (clojure.data.diff.cljs$core$IFn$_invoke$arity$2 ? clojure.data.diff.cljs$core$IFn$_invoke$arity$2(va,vb) : clojure.data.diff.call(null,va,vb));
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18727,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18727,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18727,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = (in_a) && (in_b) && ((!((ab == null))) || (((va == null)) && ((vb == null))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((in_a) && ((!((a_STAR_ == null))) || (!(same))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),(((in_b) && ((!((b_STAR_ == null))) || (!(same))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__18731 = arguments.length;
switch (G__18731) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__8626__auto__ = cljs.core.count(a);
var y__8627__auto__ = cljs.core.count(b);
return ((x__8626__auto__ > y__8627__auto__) ? x__8626__auto__ : y__8627__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((!((x == null))) && (!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__9007__auto__ = (((x == null))?null:x);
var m__9008__auto__ = (clojure.data.equality_partition[goog.typeOf(x__9007__auto__)]);
if(!((m__9008__auto__ == null))){
return (m__9008__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9008__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__9008__auto__.call(null,x));
} else {
var m__9008__auto____$1 = (clojure.data.equality_partition["_"]);
if(!((m__9008__auto____$1 == null))){
return (m__9008__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9008__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__9008__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((!((a == null))) && (!((a.clojure$data$Diff$diff_similar$arity$2 == null)))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__9007__auto__ = (((a == null))?null:a);
var m__9008__auto__ = (clojure.data.diff_similar[goog.typeOf(x__9007__auto__)]);
if(!((m__9008__auto__ == null))){
return (m__9008__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9008__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__9008__auto__.call(null,a,b));
} else {
var m__9008__auto____$1 = (clojure.data.diff_similar["_"]);
if(!((m__9008__auto____$1 == null))){
return (m__9008__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9008__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__9008__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__18733_18757 = clojure.data.equality_partition;
var G__18734_18758 = "null";
var G__18735_18759 = ((function (G__18733_18757,G__18734_18758){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__18733_18757,G__18734_18758))
;
goog.object.set(G__18733_18757,G__18734_18758,G__18735_18759);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__18736_18760 = clojure.data.equality_partition;
var G__18737_18761 = "string";
var G__18738_18762 = ((function (G__18736_18760,G__18737_18761){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__18736_18760,G__18737_18761))
;
goog.object.set(G__18736_18760,G__18737_18761,G__18738_18762);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__18739_18763 = clojure.data.equality_partition;
var G__18740_18764 = "number";
var G__18741_18765 = ((function (G__18739_18763,G__18740_18764){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__18739_18763,G__18740_18764))
;
goog.object.set(G__18739_18763,G__18740_18764,G__18741_18765);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__18742_18766 = clojure.data.equality_partition;
var G__18743_18767 = "array";
var G__18744_18768 = ((function (G__18742_18766,G__18743_18767){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__18742_18766,G__18743_18767))
;
goog.object.set(G__18742_18766,G__18743_18767,G__18744_18768);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__18745_18769 = clojure.data.equality_partition;
var G__18746_18770 = "function";
var G__18747_18771 = ((function (G__18745_18769,G__18746_18770){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__18745_18769,G__18746_18770))
;
goog.object.set(G__18745_18769,G__18746_18770,G__18747_18771);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__18748_18772 = clojure.data.equality_partition;
var G__18749_18773 = "boolean";
var G__18750_18774 = ((function (G__18748_18772,G__18749_18773){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__18748_18772,G__18749_18773))
;
goog.object.set(G__18748_18772,G__18749_18773,G__18750_18774);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__18751_18775 = clojure.data.equality_partition;
var G__18752_18776 = "_";
var G__18753_18777 = ((function (G__18751_18775,G__18752_18776){
return (function (x){
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return cljs.core.cst$kw$map;
} else {
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return cljs.core.cst$kw$set;
} else {
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return cljs.core.cst$kw$sequential;
} else {
return cljs.core.cst$kw$atom;

}
}
}
});})(G__18751_18775,G__18752_18776))
;
goog.object.set(G__18751_18775,G__18752_18776,G__18753_18777);
goog.object.set(clojure.data.Diff,"null",true);

var G__18778_18802 = clojure.data.diff_similar;
var G__18779_18803 = "null";
var G__18780_18804 = ((function (G__18778_18802,G__18779_18803){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__18778_18802,G__18779_18803))
;
goog.object.set(G__18778_18802,G__18779_18803,G__18780_18804);

goog.object.set(clojure.data.Diff,"string",true);

var G__18781_18805 = clojure.data.diff_similar;
var G__18782_18806 = "string";
var G__18783_18807 = ((function (G__18781_18805,G__18782_18806){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__18781_18805,G__18782_18806))
;
goog.object.set(G__18781_18805,G__18782_18806,G__18783_18807);

goog.object.set(clojure.data.Diff,"number",true);

var G__18784_18808 = clojure.data.diff_similar;
var G__18785_18809 = "number";
var G__18786_18810 = ((function (G__18784_18808,G__18785_18809){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__18784_18808,G__18785_18809))
;
goog.object.set(G__18784_18808,G__18785_18809,G__18786_18810);

goog.object.set(clojure.data.Diff,"array",true);

var G__18787_18811 = clojure.data.diff_similar;
var G__18788_18812 = "array";
var G__18789_18813 = ((function (G__18787_18811,G__18788_18812){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__18787_18811,G__18788_18812))
;
goog.object.set(G__18787_18811,G__18788_18812,G__18789_18813);

goog.object.set(clojure.data.Diff,"function",true);

var G__18790_18814 = clojure.data.diff_similar;
var G__18791_18815 = "function";
var G__18792_18816 = ((function (G__18790_18814,G__18791_18815){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__18790_18814,G__18791_18815))
;
goog.object.set(G__18790_18814,G__18791_18815,G__18792_18816);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__18793_18817 = clojure.data.diff_similar;
var G__18794_18818 = "boolean";
var G__18795_18819 = ((function (G__18793_18817,G__18794_18818){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__18793_18817,G__18794_18818))
;
goog.object.set(G__18793_18817,G__18794_18818,G__18795_18819);

goog.object.set(clojure.data.Diff,"_",true);

var G__18796_18820 = clojure.data.diff_similar;
var G__18797_18821 = "_";
var G__18798_18822 = ((function (G__18796_18820,G__18797_18821){
return (function (a,b){
var fexpr__18800 = (function (){var G__18801 = clojure.data.equality_partition(a);
var G__18801__$1 = (((G__18801 instanceof cljs.core.Keyword))?G__18801.fqn:null);
switch (G__18801__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18801__$1)].join('')));

}
})();
return (fexpr__18800.cljs$core$IFn$_invoke$arity$2 ? fexpr__18800.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__18800.call(null,a,b));
});})(G__18796_18820,G__18797_18821))
;
goog.object.set(G__18796_18820,G__18797_18821,G__18798_18822);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});
