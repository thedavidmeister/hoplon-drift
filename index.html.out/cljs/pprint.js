// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs.pprint');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
cljs.pprint.print = (function cljs$pprint$print(var_args){
var args__9560__auto__ = [];
var len__9553__auto___17022 = arguments.length;
var i__9554__auto___17023 = (0);
while(true){
if((i__9554__auto___17023 < len__9553__auto___17022)){
args__9560__auto__.push((arguments[i__9554__auto___17023]));

var G__17024 = (i__9554__auto___17023 + (1));
i__9554__auto___17023 = G__17024;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((0) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((0)),(0),null)):null);
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(argseq__9561__auto__);
});

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,more));
});

cljs.pprint.print.cljs$lang$maxFixedArity = (0);

cljs.pprint.print.cljs$lang$applyTo = (function (seq17021){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17021));
});

cljs.pprint.println = (function cljs$pprint$println(var_args){
var args__9560__auto__ = [];
var len__9553__auto___17026 = arguments.length;
var i__9554__auto___17027 = (0);
while(true){
if((i__9554__auto___17027 < len__9553__auto___17026)){
args__9560__auto__.push((arguments[i__9554__auto___17027]));

var G__17028 = (i__9554__auto___17027 + (1));
i__9554__auto___17027 = G__17028;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((0) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((0)),(0),null)):null);
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(argseq__9561__auto__);
});

cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.print,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.println.cljs$lang$maxFixedArity = (0);

cljs.pprint.println.cljs$lang$applyTo = (function (seq17025){
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17025));
});

cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write(cljs.core._STAR_out_STAR_,(function (){var pred__17029 = cljs.core._EQ_;
var expr__17030 = c;
if(cljs.core.truth_((function (){var G__17032 = "\b";
var G__17033 = expr__17030;
return (pred__17029.cljs$core$IFn$_invoke$arity$2 ? pred__17029.cljs$core$IFn$_invoke$arity$2(G__17032,G__17033) : pred__17029.call(null,G__17032,G__17033));
})())){
return "\\backspace";
} else {
if(cljs.core.truth_((function (){var G__17034 = "\t";
var G__17035 = expr__17030;
return (pred__17029.cljs$core$IFn$_invoke$arity$2 ? pred__17029.cljs$core$IFn$_invoke$arity$2(G__17034,G__17035) : pred__17029.call(null,G__17034,G__17035));
})())){
return "\\tab";
} else {
if(cljs.core.truth_((function (){var G__17036 = "\n";
var G__17037 = expr__17030;
return (pred__17029.cljs$core$IFn$_invoke$arity$2 ? pred__17029.cljs$core$IFn$_invoke$arity$2(G__17036,G__17037) : pred__17029.call(null,G__17036,G__17037));
})())){
return "\\newline";
} else {
if(cljs.core.truth_((function (){var G__17038 = "\f";
var G__17039 = expr__17030;
return (pred__17029.cljs$core$IFn$_invoke$arity$2 ? pred__17029.cljs$core$IFn$_invoke$arity$2(G__17038,G__17039) : pred__17029.call(null,G__17038,G__17039));
})())){
return "\\formfeed";
} else {
if(cljs.core.truth_((function (){var G__17040 = "\r";
var G__17041 = expr__17030;
return (pred__17029.cljs$core$IFn$_invoke$arity$2 ? pred__17029.cljs$core$IFn$_invoke$arity$2(G__17040,G__17041) : pred__17029.call(null,G__17040,G__17041));
})())){
return "\\return";
} else {
if(cljs.core.truth_((function (){var G__17042 = "\"";
var G__17043 = expr__17030;
return (pred__17029.cljs$core$IFn$_invoke$arity$2 ? pred__17029.cljs$core$IFn$_invoke$arity$2(G__17042,G__17043) : pred__17029.call(null,G__17042,G__17043));
})())){
return "\\\"";
} else {
if(cljs.core.truth_((function (){var G__17044 = "\\";
var G__17045 = expr__17030;
return (pred__17029.cljs$core$IFn$_invoke$arity$2 ? pred__17029.cljs$core$IFn$_invoke$arity$2(G__17044,G__17045) : pred__17029.call(null,G__17044,G__17045));
})())){
return "\\\\";
} else {
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
}
}
}
}
}
}
}
})());
});
cljs.pprint.pr = (function cljs$pprint$pr(var_args){
var args__9560__auto__ = [];
var len__9553__auto___17047 = arguments.length;
var i__9554__auto___17048 = (0);
while(true){
if((i__9554__auto___17048 < len__9553__auto___17047)){
args__9560__auto__.push((arguments[i__9554__auto___17048]));

var G__17049 = (i__9554__auto___17048 + (1));
i__9554__auto___17048 = G__17049;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((0) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((0)),(0),null)):null);
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__9561__auto__);
});

cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,more));
});

cljs.pprint.pr.cljs$lang$maxFixedArity = (0);

cljs.pprint.pr.cljs$lang$applyTo = (function (seq17046){
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17046));
});

cljs.pprint.prn = (function cljs$pprint$prn(var_args){
var args__9560__auto__ = [];
var len__9553__auto___17051 = arguments.length;
var i__9554__auto___17052 = (0);
while(true){
if((i__9554__auto___17052 < len__9553__auto___17051)){
args__9560__auto__.push((arguments[i__9554__auto___17052]));

var G__17053 = (i__9554__auto___17052 + (1));
i__9554__auto___17052 = G__17053;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((0) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((0)),(0),null)):null);
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__9561__auto__);
});

cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.pr,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.prn.cljs$lang$maxFixedArity = (0);

cljs.pprint.prn.cljs$lang$applyTo = (function (seq17050){
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17050));
});

/**
 * Returns true if n is an float.
 */
cljs.pprint.float_QMARK_ = (function cljs$pprint$float_QMARK_(n){
return (typeof n === 'number') && (!(isNaN(n))) && (!((n === Infinity))) && (!((parseFloat(n) === parseInt(n,(10)))));
});
/**
 * Convert char to int
 */
cljs.pprint.char_code = (function cljs$pprint$char_code(c){
if(typeof c === 'number'){
return c;
} else {
if((typeof c === 'string') && ((c.length === (1)))){
return c.charCodeAt((0));
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.pprint.map_passing_context = (function cljs$pprint$map_passing_context(func,initial_context,lis){
var context = initial_context;
var lis__$1 = lis;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(lis__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var this$ = cljs.core.first(lis__$1);
var remainder = cljs.core.next(lis__$1);
var vec__17054 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17054,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17054,(1),null);
var G__17057 = new_context;
var G__17058 = remainder;
var G__17059 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__17057;
lis__$1 = G__17058;
acc = G__17059;
continue;
}
break;
}
});
cljs.pprint.consume = (function cljs$pprint$consume(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__17060 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17060,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17060,(1),null);
if(cljs.core.not(result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__17063 = new_context;
var G__17064 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__17063;
acc = G__17064;
continue;
}
break;
}
});
cljs.pprint.consume_while = (function cljs$pprint$consume_while(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__17065 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17065,(0),null);
var continue$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17065,(1),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17065,(2),null);
if(cljs.core.not(continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__17068 = new_context;
var G__17069 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__17068;
acc = G__17069;
continue;
}
break;
}
});
cljs.pprint.unzip_map = (function cljs$pprint$unzip_map(m){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9156__auto__ = (function cljs$pprint$unzip_map_$_iter__17070(s__17071){
return (new cljs.core.LazySeq(null,(function (){
var s__17071__$1 = s__17071;
while(true){
var temp__5535__auto__ = cljs.core.seq(s__17071__$1);
if(temp__5535__auto__){
var s__17071__$2 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17071__$2)){
var c__9154__auto__ = cljs.core.chunk_first(s__17071__$2);
var size__9155__auto__ = cljs.core.count(c__9154__auto__);
var b__17073 = cljs.core.chunk_buffer(size__9155__auto__);
if((function (){var i__17072 = (0);
while(true){
if((i__17072 < size__9155__auto__)){
var vec__17074 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9154__auto__,i__17072);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17074,(0),null);
var vec__17077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17074,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17077,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17077,(1),null);
cljs.core.chunk_append(b__17073,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__17102 = (i__17072 + (1));
i__17072 = G__17102;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17073),cljs$pprint$unzip_map_$_iter__17070(cljs.core.chunk_rest(s__17071__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17073),null);
}
} else {
var vec__17080 = cljs.core.first(s__17071__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17080,(0),null);
var vec__17083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17080,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17083,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17083,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__17070(cljs.core.rest(s__17071__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9156__auto__(m);
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9156__auto__ = (function cljs$pprint$unzip_map_$_iter__17086(s__17087){
return (new cljs.core.LazySeq(null,(function (){
var s__17087__$1 = s__17087;
while(true){
var temp__5535__auto__ = cljs.core.seq(s__17087__$1);
if(temp__5535__auto__){
var s__17087__$2 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17087__$2)){
var c__9154__auto__ = cljs.core.chunk_first(s__17087__$2);
var size__9155__auto__ = cljs.core.count(c__9154__auto__);
var b__17089 = cljs.core.chunk_buffer(size__9155__auto__);
if((function (){var i__17088 = (0);
while(true){
if((i__17088 < size__9155__auto__)){
var vec__17090 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9154__auto__,i__17088);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17090,(0),null);
var vec__17093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17090,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17093,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17093,(1),null);
cljs.core.chunk_append(b__17089,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__17103 = (i__17088 + (1));
i__17088 = G__17103;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17089),cljs$pprint$unzip_map_$_iter__17086(cljs.core.chunk_rest(s__17087__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17089),null);
}
} else {
var vec__17096 = cljs.core.first(s__17087__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17096,(0),null);
var vec__17099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17096,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17099,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17099,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__17086(cljs.core.rest(s__17087__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9156__auto__(m);
})())], null);
});
cljs.pprint.tuple_map = (function cljs$pprint$tuple_map(m,v1){

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9156__auto__ = (function cljs$pprint$tuple_map_$_iter__17104(s__17105){
return (new cljs.core.LazySeq(null,(function (){
var s__17105__$1 = s__17105;
while(true){
var temp__5535__auto__ = cljs.core.seq(s__17105__$1);
if(temp__5535__auto__){
var s__17105__$2 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17105__$2)){
var c__9154__auto__ = cljs.core.chunk_first(s__17105__$2);
var size__9155__auto__ = cljs.core.count(c__9154__auto__);
var b__17107 = cljs.core.chunk_buffer(size__9155__auto__);
if((function (){var i__17106 = (0);
while(true){
if((i__17106 < size__9155__auto__)){
var vec__17108 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9154__auto__,i__17106);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17108,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17108,(1),null);
cljs.core.chunk_append(b__17107,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__17114 = (i__17106 + (1));
i__17106 = G__17114;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17107),cljs$pprint$tuple_map_$_iter__17104(cljs.core.chunk_rest(s__17105__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17107),null);
}
} else {
var vec__17111 = cljs.core.first(s__17105__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17111,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17111,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__17104(cljs.core.rest(s__17105__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9156__auto__(m);
})());
});
cljs.pprint.rtrim = (function cljs$pprint$rtrim(s,c){

var len = cljs.core.count(s);
if(((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1))),c))){
var n = (len - (1));
while(true){
if((n < (0))){
return "";
} else {
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(n + (1)));
} else {
var G__17115 = (n - (1));
n = G__17115;
continue;

}
}
break;
}
} else {
return s;
}
});
cljs.pprint.ltrim = (function cljs$pprint$ltrim(s,c){

var len = cljs.core.count(s);
if(((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(0)),c))){
var n = (0);
while(true){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,len)) || (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c)))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,n);
} else {
var G__17116 = (n + (1));
n = G__17116;
continue;
}
break;
}
} else {
return s;
}
});
cljs.pprint.prefix_count = (function cljs$pprint$prefix_count(aseq,val){

var test = ((cljs.core.coll_QMARK_(val))?cljs.core.set(val):cljs.core.PersistentHashSet.createAsIfByAssoc([val]));
var pos = (0);
while(true){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,cljs.core.count(aseq))) || (cljs.core.not((function (){var G__17118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(aseq,pos);
return (test.cljs$core$IFn$_invoke$arity$1 ? test.cljs$core$IFn$_invoke$arity$1(G__17118) : test.call(null,G__17118));
})()))){
return pos;
} else {
var G__17119 = (pos + (1));
pos = G__17119;
continue;
}
break;
}
});

/**
 * @interface
 */
cljs.pprint.IPrettyFlush = function(){};

cljs.pprint._ppflush = (function cljs$pprint$_ppflush(pp){
if((!((pp == null))) && (!((pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1 == null)))){
return pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1(pp);
} else {
var x__9007__auto__ = (((pp == null))?null:pp);
var m__9008__auto__ = (cljs.pprint._ppflush[goog.typeOf(x__9007__auto__)]);
if(!((m__9008__auto__ == null))){
return (m__9008__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9008__auto__.cljs$core$IFn$_invoke$arity$1(pp) : m__9008__auto__.call(null,pp));
} else {
var m__9008__auto____$1 = (cljs.pprint._ppflush["_"]);
if(!((m__9008__auto____$1 == null))){
return (m__9008__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9008__auto____$1.cljs$core$IFn$_invoke$arity$1(pp) : m__9008__auto____$1.call(null,pp));
} else {
throw cljs.core.missing_protocol("IPrettyFlush.-ppflush",pp);
}
}
}
});

cljs.pprint._STAR_default_page_width_STAR_ = (72);
cljs.pprint.get_field = (function cljs$pprint$get_field(this$,sym){
var G__17120 = cljs.core.deref(cljs.core.deref(this$));
return (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(G__17120) : sym.call(null,G__17120));
});
cljs.pprint.set_field = (function cljs$pprint$set_field(this$,sym,new_val){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,sym,new_val);
});
cljs.pprint.get_column = (function cljs$pprint$get_column(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$cur);
});
cljs.pprint.get_line = (function cljs$pprint$get_line(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$line);
});
cljs.pprint.get_max_column = (function cljs$pprint$get_max_column(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$max);
});
cljs.pprint.set_max_column = (function cljs$pprint$set_max_column(this$,new_max){
cljs.pprint.set_field(this$,cljs.core.cst$kw$max,new_max);

return null;
});
cljs.pprint.get_writer = (function cljs$pprint$get_writer(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$base);
});
cljs.pprint.c_write_char = (function cljs$pprint$c_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
cljs.pprint.set_field(this$,cljs.core.cst$kw$cur,(0));

cljs.pprint.set_field(this$,cljs.core.cst$kw$line,(cljs.pprint.get_field(this$,cljs.core.cst$kw$line) + (1)));
} else {
cljs.pprint.set_field(this$,cljs.core.cst$kw$cur,(cljs.pprint.get_field(this$,cljs.core.cst$kw$cur) + (1)));
}

return cljs.core._write(cljs.pprint.get_field(this$,cljs.core.cst$kw$base),c);
});
cljs.pprint.column_writer = (function cljs$pprint$column_writer(var_args){
var G__17123 = arguments.length;
switch (G__17123) {
case 1:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,cljs.pprint._STAR_default_page_width_STAR_);
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2 = (function (writer,max_columns){
var fields = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$max,max_columns,cljs.core.cst$kw$cur,(0),cljs.core.cst$kw$line,(0),cljs.core.cst$kw$base,writer], null));
if(typeof cljs.pprint.t_cljs$pprint17124 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint17124 = (function (writer,max_columns,fields,meta17125){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta17125 = meta17125;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint17124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (fields){
return (function (_17126,meta17125__$1){
var self__ = this;
var _17126__$1 = this;
return (new cljs.pprint.t_cljs$pprint17124(self__.writer,self__.max_columns,self__.fields,meta17125__$1));
});})(fields))
;

cljs.pprint.t_cljs$pprint17124.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (fields){
return (function (_17126){
var self__ = this;
var _17126__$1 = this;
return self__.meta17125;
});})(fields))
;

cljs.pprint.t_cljs$pprint17124.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(fields))
;

cljs.pprint.t_cljs$pprint17124.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(fields))
;

cljs.pprint.t_cljs$pprint17124.prototype.cljs$core$IWriter$_write$arity$2 = ((function (fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__17127 = cljs.core._EQ_;
var expr__17128 = cljs.core.type(x);
if(cljs.core.truth_((pred__17127.cljs$core$IFn$_invoke$arity$2 ? pred__17127.cljs$core$IFn$_invoke$arity$2(String,expr__17128) : pred__17127.call(null,String,expr__17128)))){
var s = x;
var nl = s.lastIndexOf("\n");
if((nl < (0))){
cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$cur,(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$cur) + cljs.core.count(s)));
} else {
cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$cur,((cljs.core.count(s) - nl) - (1)));

cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$line,(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$line) + cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (s,nl,pred__17127,expr__17128,this$__$1,fields){
return (function (p1__17121_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__17121_SHARP_,"\n");
});})(s,nl,pred__17127,expr__17128,this$__$1,fields))
,s))));
}

return cljs.core._write(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$base),s);
} else {
if(cljs.core.truth_((pred__17127.cljs$core$IFn$_invoke$arity$2 ? pred__17127.cljs$core$IFn$_invoke$arity$2(Number,expr__17128) : pred__17127.call(null,Number,expr__17128)))){
return cljs.pprint.c_write_char(this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__17128)].join('')));
}
}
});})(fields))
;

cljs.pprint.t_cljs$pprint17124.getBasis = ((function (fields){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$fields,cljs.core.cst$sym$meta17125], null);
});})(fields))
;

cljs.pprint.t_cljs$pprint17124.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint17124.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint17124";

cljs.pprint.t_cljs$pprint17124.cljs$lang$ctorPrWriter = ((function (fields){
return (function (this__8945__auto__,writer__8946__auto__,opt__8947__auto__){
return cljs.core._write(writer__8946__auto__,"cljs.pprint/t_cljs$pprint17124");
});})(fields))
;

cljs.pprint.__GT_t_cljs$pprint17124 = ((function (fields){
return (function cljs$pprint$__GT_t_cljs$pprint17124(writer__$1,max_columns__$1,fields__$1,meta17125){
return (new cljs.pprint.t_cljs$pprint17124(writer__$1,max_columns__$1,fields__$1,meta17125));
});})(fields))
;

}

return (new cljs.pprint.t_cljs$pprint17124(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.pprint.column_writer.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.logical_block = (function (parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,__meta,__extmap,__hash){
this.parent = parent;
this.section = section;
this.start_col = start_col;
this.indent = indent;
this.done_nl = done_nl;
this.intra_block_nl = intra_block_nl;
this.prefix = prefix;
this.per_line_prefix = per_line_prefix;
this.suffix = suffix;
this.logical_block_callback = logical_block_callback;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8962__auto__,k__8963__auto__){
var self__ = this;
var this__8962__auto____$1 = this;
return this__8962__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8963__auto__,null);
});

cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8964__auto__,k17132,else__8965__auto__){
var self__ = this;
var this__8964__auto____$1 = this;
var G__17136 = k17132;
var G__17136__$1 = (((G__17136 instanceof cljs.core.Keyword))?G__17136.fqn:null);
switch (G__17136__$1) {
case "parent":
return self__.parent;

break;
case "section":
return self__.section;

break;
case "start-col":
return self__.start_col;

break;
case "indent":
return self__.indent;

break;
case "done-nl":
return self__.done_nl;

break;
case "intra-block-nl":
return self__.intra_block_nl;

break;
case "prefix":
return self__.prefix;

break;
case "per-line-prefix":
return self__.per_line_prefix;

break;
case "suffix":
return self__.suffix;

break;
case "logical-block-callback":
return self__.logical_block_callback;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17132,else__8965__auto__);

}
});

cljs.pprint.logical_block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8976__auto__,writer__8977__auto__,opts__8978__auto__){
var self__ = this;
var this__8976__auto____$1 = this;
var pr_pair__8979__auto__ = ((function (this__8976__auto____$1){
return (function (keyval__8980__auto__){
return cljs.core.pr_sequential_writer(writer__8977__auto__,cljs.core.pr_writer,""," ","",opts__8978__auto__,keyval__8980__auto__);
});})(this__8976__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8977__auto__,pr_pair__8979__auto__,"#cljs.pprint.logical-block{",", ","}",opts__8978__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent,self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$section,self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_col,self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indent,self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$done_DASH_nl,self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$intra_DASH_block_DASH_nl,self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$prefix,self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$per_DASH_line_DASH_prefix,self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$suffix,self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block_DASH_callback,self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17131){
var self__ = this;
var G__17131__$1 = this;
return (new cljs.core.RecordIter((0),G__17131__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parent,cljs.core.cst$kw$section,cljs.core.cst$kw$start_DASH_col,cljs.core.cst$kw$indent,cljs.core.cst$kw$done_DASH_nl,cljs.core.cst$kw$intra_DASH_block_DASH_nl,cljs.core.cst$kw$prefix,cljs.core.cst$kw$per_DASH_line_DASH_prefix,cljs.core.cst$kw$suffix,cljs.core.cst$kw$logical_DASH_block_DASH_callback], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.logical_block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8960__auto__){
var self__ = this;
var this__8960__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.logical_block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8957__auto__){
var self__ = this;
var this__8957__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8966__auto__){
var self__ = this;
var this__8966__auto____$1 = this;
return (10 + cljs.core.count(self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8958__auto__){
var self__ = this;
var this__8958__auto____$1 = this;
var h__8730__auto__ = self__.__hash;
if(!((h__8730__auto__ == null))){
return h__8730__auto__;
} else {
var h__8730__auto____$1 = (function (){var fexpr__17137 = ((function (h__8730__auto__,this__8958__auto____$1){
return (function (coll__8959__auto__){
return (1977012399 ^ cljs.core.hash_unordered_coll(coll__8959__auto__));
});})(h__8730__auto__,this__8958__auto____$1))
;
return fexpr__17137(this__8958__auto____$1);
})();
self__.__hash = h__8730__auto____$1;

return h__8730__auto____$1;
}
});

cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17133,other17134){
var self__ = this;
var this17133__$1 = this;
return (!((other17134 == null))) && ((this17133__$1.constructor === other17134.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17133__$1.parent,other17134.parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17133__$1.section,other17134.section)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17133__$1.start_col,other17134.start_col)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17133__$1.indent,other17134.indent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17133__$1.done_nl,other17134.done_nl)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17133__$1.intra_block_nl,other17134.intra_block_nl)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17133__$1.prefix,other17134.prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17133__$1.per_line_prefix,other17134.per_line_prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17133__$1.suffix,other17134.suffix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17133__$1.logical_block_callback,other17134.logical_block_callback)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17133__$1.__extmap,other17134.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8971__auto__,k__8972__auto__){
var self__ = this;
var this__8971__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [cljs.core.cst$kw$suffix,null,cljs.core.cst$kw$indent,null,cljs.core.cst$kw$parent,null,cljs.core.cst$kw$section,null,cljs.core.cst$kw$done_DASH_nl,null,cljs.core.cst$kw$start_DASH_col,null,cljs.core.cst$kw$prefix,null,cljs.core.cst$kw$per_DASH_line_DASH_prefix,null,cljs.core.cst$kw$logical_DASH_block_DASH_callback,null,cljs.core.cst$kw$intra_DASH_block_DASH_nl,null], null), null),k__8972__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8971__auto____$1),self__.__meta),k__8972__auto__);
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8972__auto__)),null));
}
});

cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8969__auto__,k__8970__auto__,G__17131){
var self__ = this;
var this__8969__auto____$1 = this;
var pred__17138 = cljs.core.keyword_identical_QMARK_;
var expr__17139 = k__8970__auto__;
if(cljs.core.truth_((function (){var G__17141 = cljs.core.cst$kw$parent;
var G__17142 = expr__17139;
return (pred__17138.cljs$core$IFn$_invoke$arity$2 ? pred__17138.cljs$core$IFn$_invoke$arity$2(G__17141,G__17142) : pred__17138.call(null,G__17141,G__17142));
})())){
return (new cljs.pprint.logical_block(G__17131,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17143 = cljs.core.cst$kw$section;
var G__17144 = expr__17139;
return (pred__17138.cljs$core$IFn$_invoke$arity$2 ? pred__17138.cljs$core$IFn$_invoke$arity$2(G__17143,G__17144) : pred__17138.call(null,G__17143,G__17144));
})())){
return (new cljs.pprint.logical_block(self__.parent,G__17131,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17145 = cljs.core.cst$kw$start_DASH_col;
var G__17146 = expr__17139;
return (pred__17138.cljs$core$IFn$_invoke$arity$2 ? pred__17138.cljs$core$IFn$_invoke$arity$2(G__17145,G__17146) : pred__17138.call(null,G__17145,G__17146));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__17131,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17147 = cljs.core.cst$kw$indent;
var G__17148 = expr__17139;
return (pred__17138.cljs$core$IFn$_invoke$arity$2 ? pred__17138.cljs$core$IFn$_invoke$arity$2(G__17147,G__17148) : pred__17138.call(null,G__17147,G__17148));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__17131,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17149 = cljs.core.cst$kw$done_DASH_nl;
var G__17150 = expr__17139;
return (pred__17138.cljs$core$IFn$_invoke$arity$2 ? pred__17138.cljs$core$IFn$_invoke$arity$2(G__17149,G__17150) : pred__17138.call(null,G__17149,G__17150));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__17131,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17151 = cljs.core.cst$kw$intra_DASH_block_DASH_nl;
var G__17152 = expr__17139;
return (pred__17138.cljs$core$IFn$_invoke$arity$2 ? pred__17138.cljs$core$IFn$_invoke$arity$2(G__17151,G__17152) : pred__17138.call(null,G__17151,G__17152));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__17131,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17153 = cljs.core.cst$kw$prefix;
var G__17154 = expr__17139;
return (pred__17138.cljs$core$IFn$_invoke$arity$2 ? pred__17138.cljs$core$IFn$_invoke$arity$2(G__17153,G__17154) : pred__17138.call(null,G__17153,G__17154));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__17131,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17155 = cljs.core.cst$kw$per_DASH_line_DASH_prefix;
var G__17156 = expr__17139;
return (pred__17138.cljs$core$IFn$_invoke$arity$2 ? pred__17138.cljs$core$IFn$_invoke$arity$2(G__17155,G__17156) : pred__17138.call(null,G__17155,G__17156));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__17131,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17157 = cljs.core.cst$kw$suffix;
var G__17158 = expr__17139;
return (pred__17138.cljs$core$IFn$_invoke$arity$2 ? pred__17138.cljs$core$IFn$_invoke$arity$2(G__17157,G__17158) : pred__17138.call(null,G__17157,G__17158));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__17131,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17159 = cljs.core.cst$kw$logical_DASH_block_DASH_callback;
var G__17160 = expr__17139;
return (pred__17138.cljs$core$IFn$_invoke$arity$2 ? pred__17138.cljs$core$IFn$_invoke$arity$2(G__17159,G__17160) : pred__17138.call(null,G__17159,G__17160));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__17131,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8970__auto__,G__17131),null));
}
}
}
}
}
}
}
}
}
}
});

cljs.pprint.logical_block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8974__auto__){
var self__ = this;
var this__8974__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent,self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$section,self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_col,self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indent,self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$done_DASH_nl,self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$intra_DASH_block_DASH_nl,self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$prefix,self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$per_DASH_line_DASH_prefix,self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$suffix,self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block_DASH_callback,self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8961__auto__,G__17131){
var self__ = this;
var this__8961__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__17131,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8967__auto__,entry__8968__auto__){
var self__ = this;
var this__8967__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8968__auto__)){
return this__8967__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8968__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8968__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8967__auto____$1,entry__8968__auto__);
}
});

cljs.pprint.logical_block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$parent,cljs.core.cst$sym$section,cljs.core.cst$sym$start_DASH_col,cljs.core.cst$sym$indent,cljs.core.cst$sym$done_DASH_nl,cljs.core.cst$sym$intra_DASH_block_DASH_nl,cljs.core.cst$sym$prefix,cljs.core.cst$sym$per_DASH_line_DASH_prefix,cljs.core.cst$sym$suffix,cljs.core.cst$sym$logical_DASH_block_DASH_callback], null);
});

cljs.pprint.logical_block.cljs$lang$type = true;

cljs.pprint.logical_block.cljs$lang$ctorPrSeq = (function (this__9000__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/logical-block");
});

cljs.pprint.logical_block.cljs$lang$ctorPrWriter = (function (this__9000__auto__,writer__9001__auto__){
return cljs.core._write(writer__9001__auto__,"cljs.pprint/logical-block");
});

cljs.pprint.__GT_logical_block = (function cljs$pprint$__GT_logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback){
return (new cljs.pprint.logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,null,null,null));
});

cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__17135){
return (new cljs.pprint.logical_block(cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(G__17135),cljs.core.cst$kw$section.cljs$core$IFn$_invoke$arity$1(G__17135),cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(G__17135),cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(G__17135),cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(G__17135),cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(G__17135),cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(G__17135),cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(G__17135),cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(G__17135),cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(G__17135),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17135,cljs.core.cst$kw$parent,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$section,cljs.core.cst$kw$start_DASH_col,cljs.core.cst$kw$indent,cljs.core.cst$kw$done_DASH_nl,cljs.core.cst$kw$intra_DASH_block_DASH_nl,cljs.core.cst$kw$prefix,cljs.core.cst$kw$per_DASH_line_DASH_prefix,cljs.core.cst$kw$suffix,cljs.core.cst$kw$logical_DASH_block_DASH_callback], 0))),null));
});

cljs.pprint.ancestor_QMARK_ = (function cljs$pprint$ancestor_QMARK_(parent,child){
var child__$1 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(child);
while(true){
if((child__$1 == null)){
return false;
} else {
if((parent === child__$1)){
return true;
} else {
var G__17162 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__17162;
continue;

}
}
break;
}
});
cljs.pprint.buffer_length = (function cljs$pprint$buffer_length(l){
var l__$1 = cljs.core.seq(l);
if(l__$1){
return (cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.last(l__$1)) - cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.first(l__$1)));
} else {
return (0);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.buffer_blob = (function (type_tag,data,trailing_white_space,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.data = data;
this.trailing_white_space = trailing_white_space;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8962__auto__,k__8963__auto__){
var self__ = this;
var this__8962__auto____$1 = this;
return this__8962__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8963__auto__,null);
});

cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8964__auto__,k17164,else__8965__auto__){
var self__ = this;
var this__8964__auto____$1 = this;
var G__17168 = k17164;
var G__17168__$1 = (((G__17168 instanceof cljs.core.Keyword))?G__17168.fqn:null);
switch (G__17168__$1) {
case "type-tag":
return self__.type_tag;

break;
case "data":
return self__.data;

break;
case "trailing-white-space":
return self__.trailing_white_space;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17164,else__8965__auto__);

}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8976__auto__,writer__8977__auto__,opts__8978__auto__){
var self__ = this;
var this__8976__auto____$1 = this;
var pr_pair__8979__auto__ = ((function (this__8976__auto____$1){
return (function (keyval__8980__auto__){
return cljs.core.pr_sequential_writer(writer__8977__auto__,cljs.core.pr_writer,""," ","",opts__8978__auto__,keyval__8980__auto__);
});})(this__8976__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8977__auto__,pr_pair__8979__auto__,"#cljs.pprint.buffer-blob{",", ","}",opts__8978__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$trailing_DASH_white_DASH_space,self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17163){
var self__ = this;
var G__17163__$1 = this;
return (new cljs.core.RecordIter((0),G__17163__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$data,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8960__auto__){
var self__ = this;
var this__8960__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8957__auto__){
var self__ = this;
var this__8957__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8966__auto__){
var self__ = this;
var this__8966__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8958__auto__){
var self__ = this;
var this__8958__auto____$1 = this;
var h__8730__auto__ = self__.__hash;
if(!((h__8730__auto__ == null))){
return h__8730__auto__;
} else {
var h__8730__auto____$1 = (function (){var fexpr__17169 = ((function (h__8730__auto__,this__8958__auto____$1){
return (function (coll__8959__auto__){
return (1809113693 ^ cljs.core.hash_unordered_coll(coll__8959__auto__));
});})(h__8730__auto__,this__8958__auto____$1))
;
return fexpr__17169(this__8958__auto____$1);
})();
self__.__hash = h__8730__auto____$1;

return h__8730__auto____$1;
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17165,other17166){
var self__ = this;
var this17165__$1 = this;
return (!((other17166 == null))) && ((this17165__$1.constructor === other17166.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17165__$1.type_tag,other17166.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17165__$1.data,other17166.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17165__$1.trailing_white_space,other17166.trailing_white_space)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17165__$1.start_pos,other17166.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17165__$1.end_pos,other17166.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17165__$1.__extmap,other17166.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8971__auto__,k__8972__auto__){
var self__ = this;
var this__8971__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null,cljs.core.cst$kw$data,null], null), null),k__8972__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8971__auto____$1),self__.__meta),k__8972__auto__);
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8972__auto__)),null));
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8969__auto__,k__8970__auto__,G__17163){
var self__ = this;
var this__8969__auto____$1 = this;
var pred__17170 = cljs.core.keyword_identical_QMARK_;
var expr__17171 = k__8970__auto__;
if(cljs.core.truth_((function (){var G__17173 = cljs.core.cst$kw$type_DASH_tag;
var G__17174 = expr__17171;
return (pred__17170.cljs$core$IFn$_invoke$arity$2 ? pred__17170.cljs$core$IFn$_invoke$arity$2(G__17173,G__17174) : pred__17170.call(null,G__17173,G__17174));
})())){
return (new cljs.pprint.buffer_blob(G__17163,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17175 = cljs.core.cst$kw$data;
var G__17176 = expr__17171;
return (pred__17170.cljs$core$IFn$_invoke$arity$2 ? pred__17170.cljs$core$IFn$_invoke$arity$2(G__17175,G__17176) : pred__17170.call(null,G__17175,G__17176));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__17163,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17177 = cljs.core.cst$kw$trailing_DASH_white_DASH_space;
var G__17178 = expr__17171;
return (pred__17170.cljs$core$IFn$_invoke$arity$2 ? pred__17170.cljs$core$IFn$_invoke$arity$2(G__17177,G__17178) : pred__17170.call(null,G__17177,G__17178));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__17163,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17179 = cljs.core.cst$kw$start_DASH_pos;
var G__17180 = expr__17171;
return (pred__17170.cljs$core$IFn$_invoke$arity$2 ? pred__17170.cljs$core$IFn$_invoke$arity$2(G__17179,G__17180) : pred__17170.call(null,G__17179,G__17180));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__17163,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17181 = cljs.core.cst$kw$end_DASH_pos;
var G__17182 = expr__17171;
return (pred__17170.cljs$core$IFn$_invoke$arity$2 ? pred__17170.cljs$core$IFn$_invoke$arity$2(G__17181,G__17182) : pred__17170.call(null,G__17181,G__17182));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__17163,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8970__auto__,G__17163),null));
}
}
}
}
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8974__auto__){
var self__ = this;
var this__8974__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$trailing_DASH_white_DASH_space,self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8961__auto__,G__17163){
var self__ = this;
var this__8961__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__17163,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8967__auto__,entry__8968__auto__){
var self__ = this;
var this__8967__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8968__auto__)){
return this__8967__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8968__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8968__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8967__auto____$1,entry__8968__auto__);
}
});

cljs.pprint.buffer_blob.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$data,cljs.core.cst$sym$trailing_DASH_white_DASH_space,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.buffer_blob.cljs$lang$type = true;

cljs.pprint.buffer_blob.cljs$lang$ctorPrSeq = (function (this__9000__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/buffer-blob");
});

cljs.pprint.buffer_blob.cljs$lang$ctorPrWriter = (function (this__9000__auto__,writer__9001__auto__){
return cljs.core._write(writer__9001__auto__,"cljs.pprint/buffer-blob");
});

cljs.pprint.__GT_buffer_blob = (function cljs$pprint$__GT_buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__17167){
return (new cljs.pprint.buffer_blob(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__17167),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(G__17167),cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(G__17167),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__17167),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__17167),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17167,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_buffer_blob = (function cljs$pprint$make_buffer_blob(data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(cljs.core.cst$kw$buffer_DASH_blob,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__16952__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__16952__auto__),cljs.core.cst$kw$buffer_DASH_blob);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.nl_t = (function (type_tag,type,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.type = type;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8962__auto__,k__8963__auto__){
var self__ = this;
var this__8962__auto____$1 = this;
return this__8962__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8963__auto__,null);
});

cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8964__auto__,k17185,else__8965__auto__){
var self__ = this;
var this__8964__auto____$1 = this;
var G__17189 = k17185;
var G__17189__$1 = (((G__17189 instanceof cljs.core.Keyword))?G__17189.fqn:null);
switch (G__17189__$1) {
case "type-tag":
return self__.type_tag;

break;
case "type":
return self__.type;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17185,else__8965__auto__);

}
});

cljs.pprint.nl_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8976__auto__,writer__8977__auto__,opts__8978__auto__){
var self__ = this;
var this__8976__auto____$1 = this;
var pr_pair__8979__auto__ = ((function (this__8976__auto____$1){
return (function (keyval__8980__auto__){
return cljs.core.pr_sequential_writer(writer__8977__auto__,cljs.core.pr_writer,""," ","",opts__8978__auto__,keyval__8980__auto__);
});})(this__8976__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8977__auto__,pr_pair__8979__auto__,"#cljs.pprint.nl-t{",", ","}",opts__8978__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type,self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17184){
var self__ = this;
var G__17184__$1 = this;
return (new cljs.core.RecordIter((0),G__17184__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$type,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.nl_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8960__auto__){
var self__ = this;
var this__8960__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.nl_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8957__auto__){
var self__ = this;
var this__8957__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8966__auto__){
var self__ = this;
var this__8966__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8958__auto__){
var self__ = this;
var this__8958__auto____$1 = this;
var h__8730__auto__ = self__.__hash;
if(!((h__8730__auto__ == null))){
return h__8730__auto__;
} else {
var h__8730__auto____$1 = (function (){var fexpr__17190 = ((function (h__8730__auto__,this__8958__auto____$1){
return (function (coll__8959__auto__){
return (-1640656800 ^ cljs.core.hash_unordered_coll(coll__8959__auto__));
});})(h__8730__auto__,this__8958__auto____$1))
;
return fexpr__17190(this__8958__auto____$1);
})();
self__.__hash = h__8730__auto____$1;

return h__8730__auto____$1;
}
});

cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17186,other17187){
var self__ = this;
var this17186__$1 = this;
return (!((other17187 == null))) && ((this17186__$1.constructor === other17187.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17186__$1.type_tag,other17187.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17186__$1.type,other17187.type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17186__$1.logical_block,other17187.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17186__$1.start_pos,other17187.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17186__$1.end_pos,other17187.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17186__$1.__extmap,other17187.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8971__auto__,k__8972__auto__){
var self__ = this;
var this__8971__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$type,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__8972__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8971__auto____$1),self__.__meta),k__8972__auto__);
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8972__auto__)),null));
}
});

cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8969__auto__,k__8970__auto__,G__17184){
var self__ = this;
var this__8969__auto____$1 = this;
var pred__17191 = cljs.core.keyword_identical_QMARK_;
var expr__17192 = k__8970__auto__;
if(cljs.core.truth_((function (){var G__17194 = cljs.core.cst$kw$type_DASH_tag;
var G__17195 = expr__17192;
return (pred__17191.cljs$core$IFn$_invoke$arity$2 ? pred__17191.cljs$core$IFn$_invoke$arity$2(G__17194,G__17195) : pred__17191.call(null,G__17194,G__17195));
})())){
return (new cljs.pprint.nl_t(G__17184,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17196 = cljs.core.cst$kw$type;
var G__17197 = expr__17192;
return (pred__17191.cljs$core$IFn$_invoke$arity$2 ? pred__17191.cljs$core$IFn$_invoke$arity$2(G__17196,G__17197) : pred__17191.call(null,G__17196,G__17197));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,G__17184,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17198 = cljs.core.cst$kw$logical_DASH_block;
var G__17199 = expr__17192;
return (pred__17191.cljs$core$IFn$_invoke$arity$2 ? pred__17191.cljs$core$IFn$_invoke$arity$2(G__17198,G__17199) : pred__17191.call(null,G__17198,G__17199));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__17184,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17200 = cljs.core.cst$kw$start_DASH_pos;
var G__17201 = expr__17192;
return (pred__17191.cljs$core$IFn$_invoke$arity$2 ? pred__17191.cljs$core$IFn$_invoke$arity$2(G__17200,G__17201) : pred__17191.call(null,G__17200,G__17201));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__17184,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17202 = cljs.core.cst$kw$end_DASH_pos;
var G__17203 = expr__17192;
return (pred__17191.cljs$core$IFn$_invoke$arity$2 ? pred__17191.cljs$core$IFn$_invoke$arity$2(G__17202,G__17203) : pred__17191.call(null,G__17202,G__17203));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__17184,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8970__auto__,G__17184),null));
}
}
}
}
}
});

cljs.pprint.nl_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8974__auto__){
var self__ = this;
var this__8974__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type,self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8961__auto__,G__17184){
var self__ = this;
var this__8961__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__17184,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8967__auto__,entry__8968__auto__){
var self__ = this;
var this__8967__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8968__auto__)){
return this__8967__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8968__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8968__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8967__auto____$1,entry__8968__auto__);
}
});

cljs.pprint.nl_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$type,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.nl_t.cljs$lang$type = true;

cljs.pprint.nl_t.cljs$lang$ctorPrSeq = (function (this__9000__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/nl-t");
});

cljs.pprint.nl_t.cljs$lang$ctorPrWriter = (function (this__9000__auto__,writer__9001__auto__){
return cljs.core._write(writer__9001__auto__,"cljs.pprint/nl-t");
});

cljs.pprint.__GT_nl_t = (function cljs$pprint$__GT_nl_t(type_tag,type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(type_tag,type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__17188){
return (new cljs.pprint.nl_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__17188),cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(G__17188),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__17188),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__17188),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__17188),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17188,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$type,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_nl_t = (function cljs$pprint$make_nl_t(type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(cljs.core.cst$kw$nl_DASH_t,type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__16952__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__16952__auto__),cljs.core.cst$kw$nl_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.start_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8962__auto__,k__8963__auto__){
var self__ = this;
var this__8962__auto____$1 = this;
return this__8962__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8963__auto__,null);
});

cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8964__auto__,k17206,else__8965__auto__){
var self__ = this;
var this__8964__auto____$1 = this;
var G__17210 = k17206;
var G__17210__$1 = (((G__17210 instanceof cljs.core.Keyword))?G__17210.fqn:null);
switch (G__17210__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17206,else__8965__auto__);

}
});

cljs.pprint.start_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8976__auto__,writer__8977__auto__,opts__8978__auto__){
var self__ = this;
var this__8976__auto____$1 = this;
var pr_pair__8979__auto__ = ((function (this__8976__auto____$1){
return (function (keyval__8980__auto__){
return cljs.core.pr_sequential_writer(writer__8977__auto__,cljs.core.pr_writer,""," ","",opts__8978__auto__,keyval__8980__auto__);
});})(this__8976__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8977__auto__,pr_pair__8979__auto__,"#cljs.pprint.start-block-t{",", ","}",opts__8978__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17205){
var self__ = this;
var G__17205__$1 = this;
return (new cljs.core.RecordIter((0),G__17205__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8960__auto__){
var self__ = this;
var this__8960__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.start_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8957__auto__){
var self__ = this;
var this__8957__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8966__auto__){
var self__ = this;
var this__8966__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8958__auto__){
var self__ = this;
var this__8958__auto____$1 = this;
var h__8730__auto__ = self__.__hash;
if(!((h__8730__auto__ == null))){
return h__8730__auto__;
} else {
var h__8730__auto____$1 = (function (){var fexpr__17211 = ((function (h__8730__auto__,this__8958__auto____$1){
return (function (coll__8959__auto__){
return (-414877272 ^ cljs.core.hash_unordered_coll(coll__8959__auto__));
});})(h__8730__auto__,this__8958__auto____$1))
;
return fexpr__17211(this__8958__auto____$1);
})();
self__.__hash = h__8730__auto____$1;

return h__8730__auto____$1;
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17207,other17208){
var self__ = this;
var this17207__$1 = this;
return (!((other17208 == null))) && ((this17207__$1.constructor === other17208.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17207__$1.type_tag,other17208.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17207__$1.logical_block,other17208.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17207__$1.start_pos,other17208.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17207__$1.end_pos,other17208.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17207__$1.__extmap,other17208.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8971__auto__,k__8972__auto__){
var self__ = this;
var this__8971__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__8972__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8971__auto____$1),self__.__meta),k__8972__auto__);
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8972__auto__)),null));
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8969__auto__,k__8970__auto__,G__17205){
var self__ = this;
var this__8969__auto____$1 = this;
var pred__17212 = cljs.core.keyword_identical_QMARK_;
var expr__17213 = k__8970__auto__;
if(cljs.core.truth_((function (){var G__17215 = cljs.core.cst$kw$type_DASH_tag;
var G__17216 = expr__17213;
return (pred__17212.cljs$core$IFn$_invoke$arity$2 ? pred__17212.cljs$core$IFn$_invoke$arity$2(G__17215,G__17216) : pred__17212.call(null,G__17215,G__17216));
})())){
return (new cljs.pprint.start_block_t(G__17205,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17217 = cljs.core.cst$kw$logical_DASH_block;
var G__17218 = expr__17213;
return (pred__17212.cljs$core$IFn$_invoke$arity$2 ? pred__17212.cljs$core$IFn$_invoke$arity$2(G__17217,G__17218) : pred__17212.call(null,G__17217,G__17218));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,G__17205,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17219 = cljs.core.cst$kw$start_DASH_pos;
var G__17220 = expr__17213;
return (pred__17212.cljs$core$IFn$_invoke$arity$2 ? pred__17212.cljs$core$IFn$_invoke$arity$2(G__17219,G__17220) : pred__17212.call(null,G__17219,G__17220));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__17205,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17221 = cljs.core.cst$kw$end_DASH_pos;
var G__17222 = expr__17213;
return (pred__17212.cljs$core$IFn$_invoke$arity$2 ? pred__17212.cljs$core$IFn$_invoke$arity$2(G__17221,G__17222) : pred__17212.call(null,G__17221,G__17222));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__17205,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8970__auto__,G__17205),null));
}
}
}
}
});

cljs.pprint.start_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8974__auto__){
var self__ = this;
var this__8974__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8961__auto__,G__17205){
var self__ = this;
var this__8961__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__17205,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8967__auto__,entry__8968__auto__){
var self__ = this;
var this__8967__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8968__auto__)){
return this__8967__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8968__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8968__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8967__auto____$1,entry__8968__auto__);
}
});

cljs.pprint.start_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.start_block_t.cljs$lang$type = true;

cljs.pprint.start_block_t.cljs$lang$ctorPrSeq = (function (this__9000__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/start-block-t");
});

cljs.pprint.start_block_t.cljs$lang$ctorPrWriter = (function (this__9000__auto__,writer__9001__auto__){
return cljs.core._write(writer__9001__auto__,"cljs.pprint/start-block-t");
});

cljs.pprint.__GT_start_block_t = (function cljs$pprint$__GT_start_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__17209){
return (new cljs.pprint.start_block_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__17209),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__17209),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__17209),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__17209),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17209,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_start_block_t = (function cljs$pprint$make_start_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(cljs.core.cst$kw$start_DASH_block_DASH_t,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__16952__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__16952__auto__),cljs.core.cst$kw$start_DASH_block_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.end_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8962__auto__,k__8963__auto__){
var self__ = this;
var this__8962__auto____$1 = this;
return this__8962__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8963__auto__,null);
});

cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8964__auto__,k17225,else__8965__auto__){
var self__ = this;
var this__8964__auto____$1 = this;
var G__17229 = k17225;
var G__17229__$1 = (((G__17229 instanceof cljs.core.Keyword))?G__17229.fqn:null);
switch (G__17229__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17225,else__8965__auto__);

}
});

cljs.pprint.end_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8976__auto__,writer__8977__auto__,opts__8978__auto__){
var self__ = this;
var this__8976__auto____$1 = this;
var pr_pair__8979__auto__ = ((function (this__8976__auto____$1){
return (function (keyval__8980__auto__){
return cljs.core.pr_sequential_writer(writer__8977__auto__,cljs.core.pr_writer,""," ","",opts__8978__auto__,keyval__8980__auto__);
});})(this__8976__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8977__auto__,pr_pair__8979__auto__,"#cljs.pprint.end-block-t{",", ","}",opts__8978__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17224){
var self__ = this;
var G__17224__$1 = this;
return (new cljs.core.RecordIter((0),G__17224__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8960__auto__){
var self__ = this;
var this__8960__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.end_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8957__auto__){
var self__ = this;
var this__8957__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8966__auto__){
var self__ = this;
var this__8966__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8958__auto__){
var self__ = this;
var this__8958__auto____$1 = this;
var h__8730__auto__ = self__.__hash;
if(!((h__8730__auto__ == null))){
return h__8730__auto__;
} else {
var h__8730__auto____$1 = (function (){var fexpr__17230 = ((function (h__8730__auto__,this__8958__auto____$1){
return (function (coll__8959__auto__){
return (1365867980 ^ cljs.core.hash_unordered_coll(coll__8959__auto__));
});})(h__8730__auto__,this__8958__auto____$1))
;
return fexpr__17230(this__8958__auto____$1);
})();
self__.__hash = h__8730__auto____$1;

return h__8730__auto____$1;
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17226,other17227){
var self__ = this;
var this17226__$1 = this;
return (!((other17227 == null))) && ((this17226__$1.constructor === other17227.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17226__$1.type_tag,other17227.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17226__$1.logical_block,other17227.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17226__$1.start_pos,other17227.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17226__$1.end_pos,other17227.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17226__$1.__extmap,other17227.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8971__auto__,k__8972__auto__){
var self__ = this;
var this__8971__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__8972__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8971__auto____$1),self__.__meta),k__8972__auto__);
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8972__auto__)),null));
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8969__auto__,k__8970__auto__,G__17224){
var self__ = this;
var this__8969__auto____$1 = this;
var pred__17231 = cljs.core.keyword_identical_QMARK_;
var expr__17232 = k__8970__auto__;
if(cljs.core.truth_((function (){var G__17234 = cljs.core.cst$kw$type_DASH_tag;
var G__17235 = expr__17232;
return (pred__17231.cljs$core$IFn$_invoke$arity$2 ? pred__17231.cljs$core$IFn$_invoke$arity$2(G__17234,G__17235) : pred__17231.call(null,G__17234,G__17235));
})())){
return (new cljs.pprint.end_block_t(G__17224,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17236 = cljs.core.cst$kw$logical_DASH_block;
var G__17237 = expr__17232;
return (pred__17231.cljs$core$IFn$_invoke$arity$2 ? pred__17231.cljs$core$IFn$_invoke$arity$2(G__17236,G__17237) : pred__17231.call(null,G__17236,G__17237));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,G__17224,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17238 = cljs.core.cst$kw$start_DASH_pos;
var G__17239 = expr__17232;
return (pred__17231.cljs$core$IFn$_invoke$arity$2 ? pred__17231.cljs$core$IFn$_invoke$arity$2(G__17238,G__17239) : pred__17231.call(null,G__17238,G__17239));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__17224,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17240 = cljs.core.cst$kw$end_DASH_pos;
var G__17241 = expr__17232;
return (pred__17231.cljs$core$IFn$_invoke$arity$2 ? pred__17231.cljs$core$IFn$_invoke$arity$2(G__17240,G__17241) : pred__17231.call(null,G__17240,G__17241));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__17224,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8970__auto__,G__17224),null));
}
}
}
}
});

cljs.pprint.end_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8974__auto__){
var self__ = this;
var this__8974__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8961__auto__,G__17224){
var self__ = this;
var this__8961__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__17224,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8967__auto__,entry__8968__auto__){
var self__ = this;
var this__8967__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8968__auto__)){
return this__8967__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8968__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8968__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8967__auto____$1,entry__8968__auto__);
}
});

cljs.pprint.end_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.end_block_t.cljs$lang$type = true;

cljs.pprint.end_block_t.cljs$lang$ctorPrSeq = (function (this__9000__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/end-block-t");
});

cljs.pprint.end_block_t.cljs$lang$ctorPrWriter = (function (this__9000__auto__,writer__9001__auto__){
return cljs.core._write(writer__9001__auto__,"cljs.pprint/end-block-t");
});

cljs.pprint.__GT_end_block_t = (function cljs$pprint$__GT_end_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__17228){
return (new cljs.pprint.end_block_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__17228),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__17228),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__17228),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__17228),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17228,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_end_block_t = (function cljs$pprint$make_end_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(cljs.core.cst$kw$end_DASH_block_DASH_t,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__16952__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__16952__auto__),cljs.core.cst$kw$end_DASH_block_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.indent_t = (function (type_tag,logical_block,relative_to,offset,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.relative_to = relative_to;
this.offset = offset;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8962__auto__,k__8963__auto__){
var self__ = this;
var this__8962__auto____$1 = this;
return this__8962__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8963__auto__,null);
});

cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8964__auto__,k17244,else__8965__auto__){
var self__ = this;
var this__8964__auto____$1 = this;
var G__17248 = k17244;
var G__17248__$1 = (((G__17248 instanceof cljs.core.Keyword))?G__17248.fqn:null);
switch (G__17248__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "relative-to":
return self__.relative_to;

break;
case "offset":
return self__.offset;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17244,else__8965__auto__);

}
});

cljs.pprint.indent_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8976__auto__,writer__8977__auto__,opts__8978__auto__){
var self__ = this;
var this__8976__auto____$1 = this;
var pr_pair__8979__auto__ = ((function (this__8976__auto____$1){
return (function (keyval__8980__auto__){
return cljs.core.pr_sequential_writer(writer__8977__auto__,cljs.core.pr_writer,""," ","",opts__8978__auto__,keyval__8980__auto__);
});})(this__8976__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8977__auto__,pr_pair__8979__auto__,"#cljs.pprint.indent-t{",", ","}",opts__8978__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$relative_DASH_to,self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17243){
var self__ = this;
var G__17243__$1 = this;
return (new cljs.core.RecordIter((0),G__17243__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$relative_DASH_to,cljs.core.cst$kw$offset,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.indent_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8960__auto__){
var self__ = this;
var this__8960__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.indent_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8957__auto__){
var self__ = this;
var this__8957__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8966__auto__){
var self__ = this;
var this__8966__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8958__auto__){
var self__ = this;
var this__8958__auto____$1 = this;
var h__8730__auto__ = self__.__hash;
if(!((h__8730__auto__ == null))){
return h__8730__auto__;
} else {
var h__8730__auto____$1 = (function (){var fexpr__17249 = ((function (h__8730__auto__,this__8958__auto____$1){
return (function (coll__8959__auto__){
return (-1602780238 ^ cljs.core.hash_unordered_coll(coll__8959__auto__));
});})(h__8730__auto__,this__8958__auto____$1))
;
return fexpr__17249(this__8958__auto____$1);
})();
self__.__hash = h__8730__auto____$1;

return h__8730__auto____$1;
}
});

cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17245,other17246){
var self__ = this;
var this17245__$1 = this;
return (!((other17246 == null))) && ((this17245__$1.constructor === other17246.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17245__$1.type_tag,other17246.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17245__$1.logical_block,other17246.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17245__$1.relative_to,other17246.relative_to)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17245__$1.offset,other17246.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17245__$1.start_pos,other17246.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17245__$1.end_pos,other17246.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17245__$1.__extmap,other17246.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8971__auto__,k__8972__auto__){
var self__ = this;
var this__8971__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$offset,null,cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$relative_DASH_to,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__8972__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8971__auto____$1),self__.__meta),k__8972__auto__);
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8972__auto__)),null));
}
});

cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8969__auto__,k__8970__auto__,G__17243){
var self__ = this;
var this__8969__auto____$1 = this;
var pred__17250 = cljs.core.keyword_identical_QMARK_;
var expr__17251 = k__8970__auto__;
if(cljs.core.truth_((function (){var G__17253 = cljs.core.cst$kw$type_DASH_tag;
var G__17254 = expr__17251;
return (pred__17250.cljs$core$IFn$_invoke$arity$2 ? pred__17250.cljs$core$IFn$_invoke$arity$2(G__17253,G__17254) : pred__17250.call(null,G__17253,G__17254));
})())){
return (new cljs.pprint.indent_t(G__17243,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17255 = cljs.core.cst$kw$logical_DASH_block;
var G__17256 = expr__17251;
return (pred__17250.cljs$core$IFn$_invoke$arity$2 ? pred__17250.cljs$core$IFn$_invoke$arity$2(G__17255,G__17256) : pred__17250.call(null,G__17255,G__17256));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,G__17243,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17257 = cljs.core.cst$kw$relative_DASH_to;
var G__17258 = expr__17251;
return (pred__17250.cljs$core$IFn$_invoke$arity$2 ? pred__17250.cljs$core$IFn$_invoke$arity$2(G__17257,G__17258) : pred__17250.call(null,G__17257,G__17258));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__17243,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17259 = cljs.core.cst$kw$offset;
var G__17260 = expr__17251;
return (pred__17250.cljs$core$IFn$_invoke$arity$2 ? pred__17250.cljs$core$IFn$_invoke$arity$2(G__17259,G__17260) : pred__17250.call(null,G__17259,G__17260));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__17243,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17261 = cljs.core.cst$kw$start_DASH_pos;
var G__17262 = expr__17251;
return (pred__17250.cljs$core$IFn$_invoke$arity$2 ? pred__17250.cljs$core$IFn$_invoke$arity$2(G__17261,G__17262) : pred__17250.call(null,G__17261,G__17262));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__17243,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17263 = cljs.core.cst$kw$end_DASH_pos;
var G__17264 = expr__17251;
return (pred__17250.cljs$core$IFn$_invoke$arity$2 ? pred__17250.cljs$core$IFn$_invoke$arity$2(G__17263,G__17264) : pred__17250.call(null,G__17263,G__17264));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__17243,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8970__auto__,G__17243),null));
}
}
}
}
}
}
});

cljs.pprint.indent_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8974__auto__){
var self__ = this;
var this__8974__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$relative_DASH_to,self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8961__auto__,G__17243){
var self__ = this;
var this__8961__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__17243,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8967__auto__,entry__8968__auto__){
var self__ = this;
var this__8967__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8968__auto__)){
return this__8967__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8968__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8968__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8967__auto____$1,entry__8968__auto__);
}
});

cljs.pprint.indent_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$relative_DASH_to,cljs.core.cst$sym$offset,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.indent_t.cljs$lang$type = true;

cljs.pprint.indent_t.cljs$lang$ctorPrSeq = (function (this__9000__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/indent-t");
});

cljs.pprint.indent_t.cljs$lang$ctorPrWriter = (function (this__9000__auto__,writer__9001__auto__){
return cljs.core._write(writer__9001__auto__,"cljs.pprint/indent-t");
});

cljs.pprint.__GT_indent_t = (function cljs$pprint$__GT_indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__17247){
return (new cljs.pprint.indent_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__17247),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__17247),cljs.core.cst$kw$relative_DASH_to.cljs$core$IFn$_invoke$arity$1(G__17247),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(G__17247),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__17247),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__17247),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17247,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$relative_DASH_to,cljs.core.cst$kw$offset,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_indent_t = (function cljs$pprint$make_indent_t(logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(cljs.core.cst$kw$indent_DASH_t,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__16952__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__16952__auto__),cljs.core.cst$kw$indent_DASH_t);
});
cljs.pprint.pp_newline = (function cljs$pprint$pp_newline(){
return "\n";
});
if(typeof cljs.pprint.write_token !== 'undefined'){
} else {
cljs.pprint.write_token = (function (){var method_table__9329__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9330__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9331__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9332__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9333__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","write-token"),((function (method_table__9329__auto__,prefer_table__9330__auto__,method_cache__9331__auto__,cached_hierarchy__9332__auto__,hierarchy__9333__auto__){
return (function (p1__17267_SHARP_,p2__17266_SHARP_){
return cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(p2__17266_SHARP_);
});})(method_table__9329__auto__,prefer_table__9330__auto__,method_cache__9331__auto__,cached_hierarchy__9332__auto__,hierarchy__9333__auto__))
,cljs.core.cst$kw$default,hierarchy__9333__auto__,method_table__9329__auto__,prefer_table__9330__auto__,method_cache__9331__auto__,cached_hierarchy__9332__auto__));
})();
}
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$start_DASH_block_DASH_t,(function (this$,token){
var temp__5535__auto___17269 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5535__auto___17269)){
var cb_17270 = temp__5535__auto___17269;
var G__17268_17271 = cljs.core.cst$kw$start;
(cb_17270.cljs$core$IFn$_invoke$arity$1 ? cb_17270.cljs$core$IFn$_invoke$arity$1(G__17268_17271) : cb_17270.call(null,G__17268_17271));
} else {
}

var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token);
var temp__5535__auto___17272 = cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__5535__auto___17272)){
var prefix_17273 = temp__5535__auto___17272;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix_17273);
} else {
}

var col = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
cljs.core.reset_BANG_(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),col);
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$end_DASH_block_DASH_t,(function (this$,token){
var temp__5535__auto___17275 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5535__auto___17275)){
var cb_17276 = temp__5535__auto___17275;
var G__17274_17277 = cljs.core.cst$kw$end;
(cb_17276.cljs$core$IFn$_invoke$arity$1 ? cb_17276.cljs$core$IFn$_invoke$arity$1(G__17274_17277) : cb_17276.call(null,G__17274_17277));
} else {
}

var temp__5535__auto__ = cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token));
if(cljs.core.truth_(temp__5535__auto__)){
var suffix = temp__5535__auto__;
return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),suffix);
} else {
return null;
}
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$indent_DASH_t,(function (this$,token){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token);
return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),(cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__17278 = cljs.core._EQ_;
var expr__17279 = cljs.core.cst$kw$relative_DASH_to.cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_((function (){var G__17281 = cljs.core.cst$kw$block;
var G__17282 = expr__17279;
return (pred__17278.cljs$core$IFn$_invoke$arity$2 ? pred__17278.cljs$core$IFn$_invoke$arity$2(G__17281,G__17282) : pred__17278.call(null,G__17281,G__17282));
})())){
return cljs.core.deref(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((function (){var G__17283 = cljs.core.cst$kw$current;
var G__17284 = expr__17279;
return (pred__17278.cljs$core$IFn$_invoke$arity$2 ? pred__17278.cljs$core$IFn$_invoke$arity$2(G__17283,G__17284) : pred__17278.call(null,G__17283,G__17284));
})())){
return cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__17279)].join('')));
}
}
})()));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$buffer_DASH_blob,(function (this$,token){
return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(token));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$nl_DASH_t,(function (this$,token){
if(cljs.core.truth_((function (){var or__8274__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$mandatory);
if(or__8274__auto__){
return or__8274__auto__;
} else {
var and__8262__auto__ = !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$fill));
if(and__8262__auto__){
return cljs.core.deref(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token)));
} else {
return and__8262__auto__;
}
}
})())){
(cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.emit_nl.call(null,this$,token));
} else {
var temp__5533__auto___17285 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5533__auto___17285)){
var tws_17286 = temp__5533__auto___17285;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_17286);
} else {
}
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
}));
cljs.pprint.write_tokens = (function cljs$pprint$write_tokens(this$,tokens,force_trailing_whitespace){
var seq__17287 = cljs.core.seq(tokens);
var chunk__17288 = null;
var count__17289 = (0);
var i__17290 = (0);
while(true){
if((i__17290 < count__17289)){
var token = chunk__17288.cljs$core$IIndexed$_nth$arity$2(null,i__17290);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$nl_DASH_t))){
var temp__5533__auto___17291 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5533__auto___17291)){
var tws_17292 = temp__5533__auto___17291;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_17292);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(token));

var tws_17293 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__8262__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__8262__auto__)){
return tws_17293;
} else {
return and__8262__auto__;
}
})())){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_17293);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
}

var G__17294 = seq__17287;
var G__17295 = chunk__17288;
var G__17296 = count__17289;
var G__17297 = (i__17290 + (1));
seq__17287 = G__17294;
chunk__17288 = G__17295;
count__17289 = G__17296;
i__17290 = G__17297;
continue;
} else {
var temp__5535__auto__ = cljs.core.seq(seq__17287);
if(temp__5535__auto__){
var seq__17287__$1 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17287__$1)){
var c__9205__auto__ = cljs.core.chunk_first(seq__17287__$1);
var G__17298 = cljs.core.chunk_rest(seq__17287__$1);
var G__17299 = c__9205__auto__;
var G__17300 = cljs.core.count(c__9205__auto__);
var G__17301 = (0);
seq__17287 = G__17298;
chunk__17288 = G__17299;
count__17289 = G__17300;
i__17290 = G__17301;
continue;
} else {
var token = cljs.core.first(seq__17287__$1);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$nl_DASH_t))){
var temp__5533__auto___17302 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5533__auto___17302)){
var tws_17303 = temp__5533__auto___17302;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_17303);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(token));

var tws_17304 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__8262__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__8262__auto__)){
return tws_17304;
} else {
return and__8262__auto__;
}
})())){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_17304);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
}

var G__17305 = cljs.core.next(seq__17287__$1);
var G__17306 = null;
var G__17307 = (0);
var G__17308 = (0);
seq__17287 = G__17305;
chunk__17288 = G__17306;
count__17289 = G__17307;
i__17290 = G__17308;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.pprint.tokens_fit_QMARK_ = (function cljs$pprint$tokens_fit_QMARK_(this$,tokens){
var maxcol = cljs.pprint.get_max_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
return ((maxcol == null)) || (((cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))) + cljs.pprint.buffer_length(tokens)) < maxcol));
});
cljs.pprint.linear_nl_QMARK_ = (function cljs$pprint$linear_nl_QMARK_(this$,lb,section){
var or__8274__auto__ = cljs.core.deref(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,section));
}
});
cljs.pprint.miser_nl_QMARK_ = (function cljs$pprint$miser_nl_QMARK_(this$,lb,section){
var miser_width = (cljs.pprint.get_miser_width.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.get_miser_width.cljs$core$IFn$_invoke$arity$1(this$) : cljs.pprint.get_miser_width.call(null,this$));
var maxcol = cljs.pprint.get_max_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
var and__8262__auto__ = miser_width;
if(cljs.core.truth_(and__8262__auto__)){
var and__8262__auto____$1 = maxcol;
if(cljs.core.truth_(and__8262__auto____$1)){
var and__8262__auto____$2 = (cljs.core.deref(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb)) >= (maxcol - miser_width));
if(and__8262__auto____$2){
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
} else {
return and__8262__auto____$2;
}
} else {
return and__8262__auto____$1;
}
} else {
return and__8262__auto__;
}
});
if(typeof cljs.pprint.emit_nl_QMARK_ !== 'undefined'){
} else {
cljs.pprint.emit_nl_QMARK_ = (function (){var method_table__9329__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9330__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9331__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9332__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9333__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","emit-nl?"),((function (method_table__9329__auto__,prefer_table__9330__auto__,method_cache__9331__auto__,cached_hierarchy__9332__auto__,hierarchy__9333__auto__){
return (function (t,_,___$1,___$2){
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(t);
});})(method_table__9329__auto__,prefer_table__9330__auto__,method_cache__9331__auto__,cached_hierarchy__9332__auto__,hierarchy__9333__auto__))
,cljs.core.cst$kw$default,hierarchy__9333__auto__,method_table__9329__auto__,prefer_table__9330__auto__,method_cache__9331__auto__,cached_hierarchy__9332__auto__));
})();
}
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$linear,(function (newl,this$,section,_){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$miser,(function (newl,this$,section,_){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fill,(function (newl,this$,section,subsection){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
var or__8274__auto__ = cljs.core.deref(cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
var or__8274__auto____$1 = cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,subsection));
if(or__8274__auto____$1){
return or__8274__auto____$1;
} else {
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}
}
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$mandatory,(function (_,___$1,___$2,___$3){
return true;
}));
cljs.pprint.get_section = (function cljs$pprint$get_section(buffer){
var nl = cljs.core.first(buffer);
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (nl,lb){
return (function (p1__17309_SHARP_){
return cljs.core.not((function (){var and__8262__auto__ = cljs.pprint.nl_t_QMARK_(p1__17309_SHARP_);
if(cljs.core.truth_(and__8262__auto__)){
return cljs.pprint.ancestor_QMARK_(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(p1__17309_SHARP_),lb);
} else {
return and__8262__auto__;
}
})());
});})(nl,lb))
,cljs.core.next(buffer)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(section) + (1)),buffer))], null);
});
cljs.pprint.get_sub_section = (function cljs$pprint$get_sub_section(buffer){
var nl = cljs.core.first(buffer);
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (nl,lb){
return (function (p1__17310_SHARP_){
var nl_lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(p1__17310_SHARP_);
return cljs.core.not((function (){var and__8262__auto__ = cljs.pprint.nl_t_QMARK_(p1__17310_SHARP_);
if(cljs.core.truth_(and__8262__auto__)){
var or__8274__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nl_lb,lb);
if(or__8274__auto__){
return or__8274__auto__;
} else {
return cljs.pprint.ancestor_QMARK_(nl_lb,lb);
}
} else {
return and__8262__auto__;
}
})());
});})(nl,lb))
,cljs.core.next(buffer)));
return section;
});
cljs.pprint.update_nl_state = (function cljs$pprint$update_nl_state(lb){
cljs.core.reset_BANG_(cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb),true);

cljs.core.reset_BANG_(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb),true);

var lb__$1 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb);
while(true){
if(cljs.core.truth_(lb__$1)){
cljs.core.reset_BANG_(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb__$1),true);

cljs.core.reset_BANG_(cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb__$1),true);

var G__17311 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__17311;
continue;
} else {
return null;
}
break;
}
});
cljs.pprint.emit_nl = (function cljs$pprint$emit_nl(this$,nl){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);

var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var prefix = cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var istr_17312 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.deref(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb)) - cljs.core.count(prefix))," "));
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),istr_17312);

return cljs.pprint.update_nl_state(lb);
});
cljs.pprint.split_at_newline = (function cljs$pprint$split_at_newline(tokens){
var pre = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__17313_SHARP_){
return cljs.core.not(cljs.pprint.nl_t_QMARK_(p1__17313_SHARP_));
}),tokens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pre),tokens))], null);
});
cljs.pprint.write_token_string = (function cljs$pprint$write_token_string(this$,tokens){
var vec__17314 = cljs.pprint.split_at_newline(tokens);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17314,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17314,(1),null);
if(cljs.core.truth_(a)){
cljs.pprint.write_tokens(this$,a,false);
} else {
}

if(cljs.core.truth_(b)){
var vec__17317 = cljs.pprint.get_section(b);
var section = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17317,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17317,(1),null);
var newl = cljs.core.first(b);
var do_nl = (function (){var G__17320 = newl;
var G__17321 = this$;
var G__17322 = section;
var G__17323 = cljs.pprint.get_sub_section(b);
return (cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4 ? cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4(G__17320,G__17321,G__17322,G__17323) : cljs.pprint.emit_nl_QMARK_.call(null,G__17320,G__17321,G__17322,G__17323));
})();
var result = (cljs.core.truth_(do_nl)?(function (){
cljs.pprint.emit_nl(this$,newl);

return cljs.core.next(b);
})()
:b);
var long_section = cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,result));
var result__$1 = ((long_section)?(function (){var rem2 = (cljs.pprint.write_token_string.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token_string.cljs$core$IFn$_invoke$arity$2(this$,section) : cljs.pprint.write_token_string.call(null,this$,section));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rem2,section)){
cljs.pprint.write_tokens(this$,section,false);

return remainder;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rem2,remainder));
}
})():result);
return result__$1;
} else {
return null;
}
});
cljs.pprint.write_line = (function cljs$pprint$write_line(this$){
var buffer = cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
while(true){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,buffer));

if(cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,buffer))){
var new_buffer = cljs.pprint.write_token_string(this$,buffer);
if(!((buffer === new_buffer))){
var G__17324 = new_buffer;
buffer = G__17324;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
});
cljs.pprint.add_to_buffer = (function cljs$pprint$add_to_buffer(this$,token){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),token));

if(cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))))){
return cljs.pprint.write_line(this$);
} else {
return null;
}
});
cljs.pprint.write_buffered_output = (function cljs$pprint$write_buffered_output(this$){
cljs.pprint.write_line(this$);

var temp__5533__auto__ = cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5533__auto__)){
var buf = temp__5533__auto__;
cljs.pprint.write_tokens(this$,buf,true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
cljs.pprint.write_white_space = (function cljs$pprint$write_white_space(this$){
var temp__5535__auto__ = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5535__auto__)){
var tws = temp__5535__auto__;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
return null;
}
});
cljs.pprint.write_initial_lines = (function cljs$pprint$write_initial_lines(this$,s){
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,"\n",(-1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(lines),(1))){
return s;
} else {
var prefix = cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))));
var l = cljs.core.first(lines);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$buffering,cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))))){
var oldpos_17329 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_17330 = (oldpos_17329 + cljs.core.count(l));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos_17330);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(l,null,oldpos_17329,newpos_17330));

cljs.pprint.write_buffered_output(this$);
} else {
cljs.pprint.write_white_space(this$);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l);
}

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),"\n");

var seq__17325_17331 = cljs.core.seq(cljs.core.next(cljs.core.butlast(lines)));
var chunk__17326_17332 = null;
var count__17327_17333 = (0);
var i__17328_17334 = (0);
while(true){
if((i__17328_17334 < count__17327_17333)){
var l_17335__$1 = chunk__17326_17332.cljs$core$IIndexed$_nth$arity$2(null,i__17328_17334);
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_17335__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var G__17336 = seq__17325_17331;
var G__17337 = chunk__17326_17332;
var G__17338 = count__17327_17333;
var G__17339 = (i__17328_17334 + (1));
seq__17325_17331 = G__17336;
chunk__17326_17332 = G__17337;
count__17327_17333 = G__17338;
i__17328_17334 = G__17339;
continue;
} else {
var temp__5535__auto___17340 = cljs.core.seq(seq__17325_17331);
if(temp__5535__auto___17340){
var seq__17325_17341__$1 = temp__5535__auto___17340;
if(cljs.core.chunked_seq_QMARK_(seq__17325_17341__$1)){
var c__9205__auto___17342 = cljs.core.chunk_first(seq__17325_17341__$1);
var G__17343 = cljs.core.chunk_rest(seq__17325_17341__$1);
var G__17344 = c__9205__auto___17342;
var G__17345 = cljs.core.count(c__9205__auto___17342);
var G__17346 = (0);
seq__17325_17331 = G__17343;
chunk__17326_17332 = G__17344;
count__17327_17333 = G__17345;
i__17328_17334 = G__17346;
continue;
} else {
var l_17347__$1 = cljs.core.first(seq__17325_17341__$1);
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_17347__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var G__17348 = cljs.core.next(seq__17325_17341__$1);
var G__17349 = null;
var G__17350 = (0);
var G__17351 = (0);
seq__17325_17331 = G__17348;
chunk__17326_17332 = G__17349;
count__17327_17333 = G__17350;
i__17328_17334 = G__17351;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffering,cljs.core.cst$kw$writing);

return cljs.core.last(lines);
}
});
cljs.pprint.p_write_char = (function cljs$pprint$p_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),c);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
return cljs.pprint.write_initial_lines(this$,"\n");
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos = (oldpos + (1));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(cljs.core.char$(c),null,oldpos,newpos));
}
}
});
cljs.pprint.pretty_writer = (function cljs$pprint$pretty_writer(writer,max_columns,miser_width){
var lb = (new cljs.pprint.logical_block(null,null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),null,null,null,null,null,null,null));
var fields = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$logical_DASH_blocks,cljs.core.cst$kw$miser_DASH_width,cljs.core.cst$kw$buffer_DASH_block,cljs.core.cst$kw$pretty_DASH_writer,cljs.core.cst$kw$sections,cljs.core.cst$kw$mode,cljs.core.cst$kw$pos,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$base,cljs.core.cst$kw$buffer_DASH_level,cljs.core.cst$kw$buffer],[lb,miser_width,lb,true,null,cljs.core.cst$kw$writing,(0),null,cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,max_columns),(1),cljs.core.PersistentVector.EMPTY]));
if(typeof cljs.pprint.t_cljs$pprint17352 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.pprint.IPrettyFlush}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint17352 = (function (writer,max_columns,miser_width,lb,fields,meta17353){
this.writer = writer;
this.max_columns = max_columns;
this.miser_width = miser_width;
this.lb = lb;
this.fields = fields;
this.meta17353 = meta17353;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint17352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (lb,fields){
return (function (_17354,meta17353__$1){
var self__ = this;
var _17354__$1 = this;
return (new cljs.pprint.t_cljs$pprint17352(self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta17353__$1));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint17352.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (lb,fields){
return (function (_17354){
var self__ = this;
var _17354__$1 = this;
return self__.meta17353;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint17352.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (lb,fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint17352.prototype.cljs$core$IWriter$_write$arity$2 = ((function (lb,fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__17355 = cljs.core._EQ_;
var expr__17356 = cljs.core.type(x);
if(cljs.core.truth_((pred__17355.cljs$core$IFn$_invoke$arity$2 ? pred__17355.cljs$core$IFn$_invoke$arity$2(String,expr__17356) : pred__17355.call(null,String,expr__17356)))){
var s0 = cljs.pprint.write_initial_lines(this$__$1,x);
var s = clojure.string.replace_first(s0,/\s+$/,"");
var white_space = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s0,cljs.core.count(s));
var mode = cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),s);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,white_space);
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1)));
var newpos = (oldpos + cljs.core.count(s0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$__$1,cljs.pprint.make_buffer_blob(s,white_space,oldpos,newpos));
}
} else {
if(cljs.core.truth_((pred__17355.cljs$core$IFn$_invoke$arity$2 ? pred__17355.cljs$core$IFn$_invoke$arity$2(Number,expr__17356) : pred__17355.call(null,Number,expr__17356)))){
return cljs.pprint.p_write_char(this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__17356)].join('')));
}
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint17352.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.cljs$pprint$IPrettyFlush$_ppflush$arity$1(null);

return cljs.core._flush(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint17352.prototype.cljs$pprint$IPrettyFlush$ = cljs.core.PROTOCOL_SENTINEL;

cljs.pprint.t_cljs$pprint17352.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),cljs.core.cst$kw$buffering)){
cljs.pprint.write_tokens(this$__$1,cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.pprint.write_white_space(this$__$1);
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint17352.getBasis = ((function (lb,fields){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$miser_DASH_width,cljs.core.cst$sym$lb,cljs.core.cst$sym$fields,cljs.core.cst$sym$meta17353], null);
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint17352.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint17352.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint17352";

cljs.pprint.t_cljs$pprint17352.cljs$lang$ctorPrWriter = ((function (lb,fields){
return (function (this__8945__auto__,writer__8946__auto__,opt__8947__auto__){
return cljs.core._write(writer__8946__auto__,"cljs.pprint/t_cljs$pprint17352");
});})(lb,fields))
;

cljs.pprint.__GT_t_cljs$pprint17352 = ((function (lb,fields){
return (function cljs$pprint$pretty_writer_$___GT_t_cljs$pprint17352(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta17353){
return (new cljs.pprint.t_cljs$pprint17352(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta17353));
});})(lb,fields))
;

}

return (new cljs.pprint.t_cljs$pprint17352(writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.start_block = (function cljs$pprint$start_block(this$,prefix,per_line_prefix,suffix){
var lb = (new cljs.pprint.logical_block(cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),prefix,per_line_prefix,suffix,null,null,null,null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$logical_DASH_blocks,lb);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

var temp__5535__auto___17359 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5535__auto___17359)){
var cb_17360 = temp__5535__auto___17359;
var G__17358_17361 = cljs.core.cst$kw$start;
(cb_17360.cljs$core$IFn$_invoke$arity$1 ? cb_17360.cljs$core$IFn$_invoke$arity$1(G__17358_17361) : cb_17360.call(null,G__17358_17361));
} else {
}

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var col = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
cljs.core.reset_BANG_(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),col);
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos = (oldpos + (cljs.core.truth_(prefix)?cljs.core.count(prefix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_start_block_t(lb,oldpos,newpos));
}
});
cljs.pprint.end_block = (function cljs$pprint$end_block(this$){
var lb = cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var suffix = cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

if(cljs.core.truth_(suffix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),suffix);
} else {
}

var temp__5535__auto___17363 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5535__auto___17363)){
var cb_17364 = temp__5535__auto___17363;
var G__17362_17365 = cljs.core.cst$kw$end;
(cb_17364.cljs$core$IFn$_invoke$arity$1 ? cb_17364.cljs$core$IFn$_invoke$arity$1(G__17362_17365) : cb_17364.call(null,G__17362_17365));
} else {
}
} else {
var oldpos_17366 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_17367 = (oldpos_17366 + (cljs.core.truth_(suffix)?cljs.core.count(suffix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos_17367);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_end_block_t(lb,oldpos_17366,newpos_17367));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$logical_DASH_blocks,cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb));
});
cljs.pprint.nl = (function cljs$pprint$nl(this$,type){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$mode,cljs.core.cst$kw$buffering);

var pos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_nl_t(type,cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),pos,pos));
});
cljs.pprint.indent = (function cljs$pprint$indent(this$,relative_to,offset){
var lb = cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),(offset + (function (){var pred__17368 = cljs.core._EQ_;
var expr__17369 = relative_to;
if(cljs.core.truth_((function (){var G__17371 = cljs.core.cst$kw$block;
var G__17372 = expr__17369;
return (pred__17368.cljs$core$IFn$_invoke$arity$2 ? pred__17368.cljs$core$IFn$_invoke$arity$2(G__17371,G__17372) : pred__17368.call(null,G__17371,G__17372));
})())){
return cljs.core.deref(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((function (){var G__17373 = cljs.core.cst$kw$current;
var G__17374 = expr__17369;
return (pred__17368.cljs$core$IFn$_invoke$arity$2 ? pred__17368.cljs$core$IFn$_invoke$arity$2(G__17373,G__17374) : pred__17368.call(null,G__17373,G__17374));
})())){
return cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__17369)].join('')));
}
}
})()));
} else {
var pos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_indent_t(lb,relative_to,offset,pos,pos));
}
});
cljs.pprint.get_miser_width = (function cljs$pprint$get_miser_width(this$){
return cljs.core.cst$kw$miser_DASH_width.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
});
/**
 * Bind to true if you want write to use pretty printing
 */
cljs.pprint._STAR_print_pretty_STAR_ = true;
if(typeof cljs.pprint._STAR_print_pprint_dispatch_STAR_ !== 'undefined'){
} else {
/**
 * The pretty print dispatch function. Use with-pprint-dispatch or
 * set-pprint-dispatch to modify.
 */
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = null;
}
/**
 * Pretty printing will try to avoid anything going beyond this column.
 * Set it to nil to have pprint let the line be arbitrarily long. This will ignore all
 * non-mandatory newlines.
 */
cljs.pprint._STAR_print_right_margin_STAR_ = (72);
/**
 * The column at which to enter miser style. Depending on the dispatch table,
 * miser style add newlines in more places to try to keep lines short allowing for further
 * levels of nesting.
 */
cljs.pprint._STAR_print_miser_width_STAR_ = (40);
/**
 * Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_lines_STAR_ = null;
/**
 * Mark circular structures (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_circle_STAR_ = null;
/**
 * Mark repeated structures rather than repeat them (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_shared_STAR_ = null;
/**
 * Don't print namespaces with symbols. This is particularly useful when
 * pretty printing the results of macro expansions
 */
cljs.pprint._STAR_print_suppress_namespaces_STAR_ = null;
/**
 * Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,
 * or 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the
 * radix specifier is in the form #XXr where XX is the decimal value of *print-base* 
 */
cljs.pprint._STAR_print_radix_STAR_ = null;
/**
 * The base to use for printing integers and rationals.
 */
cljs.pprint._STAR_print_base_STAR_ = (10);
cljs.pprint._STAR_current_level_STAR_ = (0);
cljs.pprint._STAR_current_length_STAR_ = null;
cljs.pprint.table_ize = (function cljs$pprint$table_ize(t,m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__17375_SHARP_){
var temp__5535__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,cljs.core.key(p1__17375_SHARP_));
if(cljs.core.truth_(temp__5535__auto__)){
var v = temp__5535__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val(p1__17375_SHARP_)], null);
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0)));
});
/**
 * Return true iff x is a PrettyWriter
 */
cljs.pprint.pretty_writer_QMARK_ = (function cljs$pprint$pretty_writer_QMARK_(x){
var and__8262__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x));
if(and__8262__auto__){
return cljs.core.cst$kw$pretty_DASH_writer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(x)));
} else {
return and__8262__auto__;
}
});
/**
 * Wrap base-writer in a PrettyWriter with the specified right-margin and miser-width
 */
cljs.pprint.make_pretty_writer = (function cljs$pprint$make_pretty_writer(base_writer,right_margin,miser_width){
return cljs.pprint.pretty_writer(base_writer,right_margin,miser_width);
});
/**
 * Write an object to *out* subject to the current bindings of the printer control
 * variables. Use the kw-args argument to override individual variables for this call (and
 * any recursive calls).
 * 
 * *out* must be a PrettyWriter if pretty printing is enabled. This is the responsibility
 * of the caller.
 * 
 * This method is primarily intended for use by pretty print dispatch functions that
 * already know that the pretty printer will have set up their environment appropriately.
 * Normal library clients should use the standard "write" interface. 
 */
cljs.pprint.write_out = (function cljs$pprint$write_out(object){
var length_reached = (function (){var and__8262__auto__ = cljs.pprint._STAR_current_length_STAR_;
if(cljs.core.truth_(and__8262__auto__)){
var and__8262__auto____$1 = cljs.core._STAR_print_length_STAR_;
if(cljs.core.truth_(and__8262__auto____$1)){
return (cljs.pprint._STAR_current_length_STAR_ >= cljs.core._STAR_print_length_STAR_);
} else {
return and__8262__auto____$1;
}
} else {
return and__8262__auto__;
}
})();
if(!(cljs.pprint._STAR_print_pretty_STAR_)){
(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr.call(null,object));
} else {
if(cljs.core.truth_(length_reached)){
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
} else {
if(cljs.core.truth_(cljs.pprint._STAR_current_length_STAR_)){
cljs.pprint._STAR_current_length_STAR_ = (cljs.pprint._STAR_current_length_STAR_ + (1));
} else {
}

(cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint._STAR_print_pprint_dispatch_STAR_.call(null,object));
}
}

return length_reached;
});
/**
 * Write an object subject to the current bindings of the printer control variables.
 * Use the kw-args argument to override individual variables for this call (and any
 * recursive calls). Returns the string result if :stream is nil or nil otherwise.
 * 
 * The following keyword arguments can be passed with values:
 *   Keyword              Meaning                              Default value
 *   :stream              Writer for output or nil             true (indicates *out*)
 *   :base                Base to use for writing rationals    Current value of *print-base*
 *   :circle*             If true, mark circular structures    Current value of *print-circle*
 *   :length              Maximum elements to show in sublists Current value of *print-length*
 *   :level               Maximum depth                        Current value of *print-level*
 *   :lines*              Maximum lines of output              Current value of *print-lines*
 *   :miser-width         Width to enter miser mode            Current value of *print-miser-width*
 *   :dispatch            The pretty print dispatch function   Current value of *print-pprint-dispatch*
 *   :pretty              If true, do pretty printing          Current value of *print-pretty*
 *   :radix               If true, prepend a radix specifier   Current value of *print-radix*
 *   :readably*           If true, print readably              Current value of *print-readably*
 *   :right-margin        The column for the right margin      Current value of *print-right-margin*
 *   :suppress-namespaces If true, no namespaces in symbols    Current value of *print-suppress-namespaces*
 * 
 *   * = not yet supported
 */
cljs.pprint.write = (function cljs$pprint$write(var_args){
var args__9560__auto__ = [];
var len__9553__auto___17394 = arguments.length;
var i__9554__auto___17395 = (0);
while(true){
if((i__9554__auto___17395 < len__9553__auto___17394)){
args__9560__auto__.push((arguments[i__9554__auto___17395]));

var G__17396 = (i__9554__auto___17395 + (1));
i__9554__auto___17395 = G__17396;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic = (function (object,kw_args){
var options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stream,true], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,kw_args)], 0));
var _STAR_print_base_STAR_17380 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR_17381 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR_17382 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR_17383 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR_17384 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR_17385 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR_17386 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR_17387 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR_17388 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR_17389 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR_17390 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR_17391 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
cljs.pprint._STAR_print_base_STAR_ = cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_base_STAR_);

cljs.pprint._STAR_print_circle_STAR_ = cljs.core.cst$kw$circle.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_circle_STAR_);

cljs.core._STAR_print_length_STAR_ = cljs.core.cst$kw$length.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_length_STAR_);

cljs.core._STAR_print_level_STAR_ = cljs.core.cst$kw$level.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_level_STAR_);

cljs.pprint._STAR_print_lines_STAR_ = cljs.core.cst$kw$lines.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_lines_STAR_);

cljs.pprint._STAR_print_miser_width_STAR_ = cljs.core.cst$kw$miser_DASH_width.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_miser_width_STAR_);

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.core.cst$kw$dispatch.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pprint_dispatch_STAR_);

cljs.pprint._STAR_print_pretty_STAR_ = cljs.core.cst$kw$pretty.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pretty_STAR_);

cljs.pprint._STAR_print_radix_STAR_ = cljs.core.cst$kw$radix.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_radix_STAR_);

cljs.core._STAR_print_readably_STAR_ = cljs.core.cst$kw$readably.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_readably_STAR_);

cljs.pprint._STAR_print_right_margin_STAR_ = cljs.core.cst$kw$right_DASH_margin.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_right_margin_STAR_);

cljs.pprint._STAR_print_suppress_namespaces_STAR_ = cljs.core.cst$kw$suppress_DASH_namespaces.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_suppress_namespaces_STAR_);

try{try{var sb = (new goog.string.StringBuffer());
var optval = ((cljs.core.contains_QMARK_(options,cljs.core.cst$kw$stream))?cljs.core.cst$kw$stream.cljs$core$IFn$_invoke$arity$1(options):true);
var base_writer = (((optval === true) || ((optval == null)))?(new cljs.core.StringBufferWriter(sb)):optval);
if(cljs.pprint._STAR_print_pretty_STAR_){
var base_writer__16935__auto___17397 = base_writer;
var new_writer__16936__auto___17398 = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__16935__auto___17397));
var _STAR_out_STAR_17392_17399 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__16936__auto___17398)?cljs.pprint.make_pretty_writer(base_writer__16935__auto___17397,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__16935__auto___17397);

try{cljs.pprint.write_out(object);

cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_17392_17399;
}} else {
var _STAR_out_STAR_17393_17400 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = base_writer;

try{(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr.call(null,object));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_17393_17400;
}}

if(optval === true){
cljs.core.string_print([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
} else {
}

if((optval == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
return null;
}
}finally {}}finally {cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR_17391;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR_17390;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR_17389;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR_17388;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_17387;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_17386;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR_17385;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR_17384;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_17383;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_17382;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR_17381;

cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR_17380;
}});

cljs.pprint.write.cljs$lang$maxFixedArity = (1);

cljs.pprint.write.cljs$lang$applyTo = (function (seq17378){
var G__17379 = cljs.core.first(seq17378);
var seq17378__$1 = cljs.core.next(seq17378);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic(G__17379,seq17378__$1);
});

cljs.pprint.pprint = (function cljs$pprint$pprint(var_args){
var G__17402 = arguments.length;
switch (G__17402) {
case 1:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1 = (function (object){
var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_17403 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(object,cljs.core._STAR_out_STAR_);

return cljs.core.string_print([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_17403;
}});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__16935__auto__ = writer;
var new_writer__16936__auto__ = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__16935__auto__));
var _STAR_out_STAR_17404 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__16936__auto__)?cljs.pprint.make_pretty_writer(base_writer__16935__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__16935__auto__);

try{var _STAR_print_pretty_STAR_17405_17407 = cljs.pprint._STAR_print_pretty_STAR_;
cljs.pprint._STAR_print_pretty_STAR_ = true;

try{cljs.pprint.write_out(object);
}finally {cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_17405_17407;
}
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core._STAR_out_STAR_)))){
cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
} else {
}

return cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_17404;
}});

cljs.pprint.pprint.cljs$lang$maxFixedArity = 2;

cljs.pprint.set_pprint_dispatch = (function cljs$pprint$set_pprint_dispatch(function$){
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = function$;

return null;
});
cljs.pprint.check_enumerated_arg = (function cljs$pprint$check_enumerated_arg(arg,choices){
if(cljs.core.not((choices.cljs$core$IFn$_invoke$arity$1 ? choices.cljs$core$IFn$_invoke$arity$1(arg) : choices.call(null,arg)))){
throw (new Error(["Bad argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg),". It must be one of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(choices)].join('')));
} else {
return null;
}
});
cljs.pprint.level_exceeded = (function cljs$pprint$level_exceeded(){
var and__8262__auto__ = cljs.core._STAR_print_level_STAR_;
if(cljs.core.truth_(and__8262__auto__)){
return (cljs.pprint._STAR_current_level_STAR_ >= cljs.core._STAR_print_level_STAR_);
} else {
return and__8262__auto__;
}
});
/**
 * Print a conditional newline to a pretty printing stream. kind specifies if the
 *   newline is :linear, :miser, :fill, or :mandatory.
 * 
 *   This function is intended for use when writing custom dispatch functions.
 * 
 *   Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_newline = (function cljs$pprint$pprint_newline(kind){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mandatory,null,cljs.core.cst$kw$miser,null,cljs.core.cst$kw$fill,null,cljs.core.cst$kw$linear,null], null), null));

return cljs.pprint.nl(cljs.core._STAR_out_STAR_,kind);
});
/**
 * Create an indent at this point in the pretty printing stream. This defines how
 * following lines are indented. relative-to can be either :block or :current depending
 * whether the indent should be computed relative to the start of the logical block or
 * the current column position. n is an offset.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_indent = (function cljs$pprint$pprint_indent(relative_to,n){
cljs.pprint.check_enumerated_arg(relative_to,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$block,null,cljs.core.cst$kw$current,null], null), null));

return cljs.pprint.indent(cljs.core._STAR_out_STAR_,relative_to,n);
});
/**
 * Tab at this point in the pretty printing stream. kind specifies whether the tab
 * is :line, :section, :line-relative, or :section-relative.
 * 
 * Colnum and colinc specify the target column and the increment to move the target
 * forward if the output is already past the original target.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 * 
 * THIS FUNCTION IS NOT YET IMPLEMENTED.
 */
cljs.pprint.pprint_tab = (function cljs$pprint$pprint_tab(kind,colnum,colinc){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$section,null,cljs.core.cst$kw$line,null,cljs.core.cst$kw$line_DASH_relative,null,cljs.core.cst$kw$section_DASH_relative,null], null), null));

throw (new Error("pprint-tab is not yet implemented"));
});
/**
 * An implementation of a Common Lisp compatible format function. cl-format formats its
 * arguments to an output stream or string based on the format control string given. It
 * supports sophisticated formatting of structured data.
 * 
 * Writer satisfies IWriter, true to output via *print-fn* or nil to output
 * to a string, format-in is the format control string and the remaining arguments
 * are the data to be formatted.
 * 
 * The format control string is a string to be output with embedded 'format directives'
 * describing how to format the various arguments passed in.
 * 
 * If writer is nil, cl-format returns the formatted result string. Otherwise, cl-format
 * returns nil.
 * 
 * For example:
 *  (let [results [46 38 22]]
 *      (cl-format true "There ~[are~;is~:;are~]~:* ~d result~:p: ~{~d~^, ~}~%"
 *                 (count results) results))
 * 
 * Prints via *print-fn*:
 *  There are 3 results: 46, 38, 22
 * 
 * Detailed documentation on format control strings is available in the "Common Lisp the
 * Language, 2nd edition", Chapter 22 (available online at:
 * http://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node200.html#SECTION002633000000000000000)
 * and in the Common Lisp HyperSpec at
 * http://www.lispworks.com/documentation/HyperSpec/Body/22_c.htm
 */
cljs.pprint.cl_format = (function cljs$pprint$cl_format(var_args){
var args__9560__auto__ = [];
var len__9553__auto___17411 = arguments.length;
var i__9554__auto___17412 = (0);
while(true){
if((i__9554__auto___17412 < len__9553__auto___17411)){
args__9560__auto__.push((arguments[i__9554__auto___17412]));

var G__17413 = (i__9554__auto___17412 + (1));
i__9554__auto___17412 = G__17413;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((2) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((2)),(0),null)):null);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9561__auto__);
});

cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic = (function (writer,format_in,args){
var compiled_format = ((typeof format_in === 'string')?(cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1(format_in) : cljs.pprint.compile_format.call(null,format_in)):format_in);
var navigator = (cljs.pprint.init_navigator.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.init_navigator.cljs$core$IFn$_invoke$arity$1(args) : cljs.pprint.init_navigator.call(null,args));
return (cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3(writer,compiled_format,navigator) : cljs.pprint.execute_format.call(null,writer,compiled_format,navigator));
});

cljs.pprint.cl_format.cljs$lang$maxFixedArity = (2);

cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq17408){
var G__17409 = cljs.core.first(seq17408);
var seq17408__$1 = cljs.core.next(seq17408);
var G__17410 = cljs.core.first(seq17408__$1);
var seq17408__$2 = cljs.core.next(seq17408__$1);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(G__17409,G__17410,seq17408__$2);
});

cljs.pprint._STAR_format_str_STAR_ = null;
cljs.pprint.format_error = (function cljs$pprint$format_error(message,offset){
var full_message = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_format_str_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(offset," "))),"^",cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join('');
throw Error(full_message);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.arg_navigator = (function (seq,rest,pos,__meta,__extmap,__hash){
this.seq = seq;
this.rest = rest;
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8962__auto__,k__8963__auto__){
var self__ = this;
var this__8962__auto____$1 = this;
return this__8962__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8963__auto__,null);
});

cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8964__auto__,k17415,else__8965__auto__){
var self__ = this;
var this__8964__auto____$1 = this;
var G__17419 = k17415;
var G__17419__$1 = (((G__17419 instanceof cljs.core.Keyword))?G__17419.fqn:null);
switch (G__17419__$1) {
case "seq":
return self__.seq;

break;
case "rest":
return self__.rest;

break;
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17415,else__8965__auto__);

}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8976__auto__,writer__8977__auto__,opts__8978__auto__){
var self__ = this;
var this__8976__auto____$1 = this;
var pr_pair__8979__auto__ = ((function (this__8976__auto____$1){
return (function (keyval__8980__auto__){
return cljs.core.pr_sequential_writer(writer__8977__auto__,cljs.core.pr_writer,""," ","",opts__8978__auto__,keyval__8980__auto__);
});})(this__8976__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8977__auto__,pr_pair__8979__auto__,"#cljs.pprint.arg-navigator{",", ","}",opts__8978__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$seq,self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rest,self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pos,self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17414){
var self__ = this;
var G__17414__$1 = this;
return (new cljs.core.RecordIter((0),G__17414__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$seq,cljs.core.cst$kw$rest,cljs.core.cst$kw$pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8960__auto__){
var self__ = this;
var this__8960__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8957__auto__){
var self__ = this;
var this__8957__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8966__auto__){
var self__ = this;
var this__8966__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8958__auto__){
var self__ = this;
var this__8958__auto____$1 = this;
var h__8730__auto__ = self__.__hash;
if(!((h__8730__auto__ == null))){
return h__8730__auto__;
} else {
var h__8730__auto____$1 = (function (){var fexpr__17420 = ((function (h__8730__auto__,this__8958__auto____$1){
return (function (coll__8959__auto__){
return (-402038447 ^ cljs.core.hash_unordered_coll(coll__8959__auto__));
});})(h__8730__auto__,this__8958__auto____$1))
;
return fexpr__17420(this__8958__auto____$1);
})();
self__.__hash = h__8730__auto____$1;

return h__8730__auto____$1;
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17416,other17417){
var self__ = this;
var this17416__$1 = this;
return (!((other17417 == null))) && ((this17416__$1.constructor === other17417.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17416__$1.seq,other17417.seq)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17416__$1.rest,other17417.rest)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17416__$1.pos,other17417.pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17416__$1.__extmap,other17417.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8971__auto__,k__8972__auto__){
var self__ = this;
var this__8971__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$pos,null,cljs.core.cst$kw$seq,null,cljs.core.cst$kw$rest,null], null), null),k__8972__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8971__auto____$1),self__.__meta),k__8972__auto__);
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8972__auto__)),null));
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8969__auto__,k__8970__auto__,G__17414){
var self__ = this;
var this__8969__auto____$1 = this;
var pred__17421 = cljs.core.keyword_identical_QMARK_;
var expr__17422 = k__8970__auto__;
if(cljs.core.truth_((function (){var G__17424 = cljs.core.cst$kw$seq;
var G__17425 = expr__17422;
return (pred__17421.cljs$core$IFn$_invoke$arity$2 ? pred__17421.cljs$core$IFn$_invoke$arity$2(G__17424,G__17425) : pred__17421.call(null,G__17424,G__17425));
})())){
return (new cljs.pprint.arg_navigator(G__17414,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17426 = cljs.core.cst$kw$rest;
var G__17427 = expr__17422;
return (pred__17421.cljs$core$IFn$_invoke$arity$2 ? pred__17421.cljs$core$IFn$_invoke$arity$2(G__17426,G__17427) : pred__17421.call(null,G__17426,G__17427));
})())){
return (new cljs.pprint.arg_navigator(self__.seq,G__17414,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17428 = cljs.core.cst$kw$pos;
var G__17429 = expr__17422;
return (pred__17421.cljs$core$IFn$_invoke$arity$2 ? pred__17421.cljs$core$IFn$_invoke$arity$2(G__17428,G__17429) : pred__17421.call(null,G__17428,G__17429));
})())){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__17414,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8970__auto__,G__17414),null));
}
}
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8974__auto__){
var self__ = this;
var this__8974__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$seq,self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rest,self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pos,self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8961__auto__,G__17414){
var self__ = this;
var this__8961__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__17414,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8967__auto__,entry__8968__auto__){
var self__ = this;
var this__8967__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8968__auto__)){
return this__8967__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8968__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8968__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8967__auto____$1,entry__8968__auto__);
}
});

cljs.pprint.arg_navigator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$seq,cljs.core.cst$sym$rest,cljs.core.cst$sym$pos], null);
});

cljs.pprint.arg_navigator.cljs$lang$type = true;

cljs.pprint.arg_navigator.cljs$lang$ctorPrSeq = (function (this__9000__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/arg-navigator");
});

cljs.pprint.arg_navigator.cljs$lang$ctorPrWriter = (function (this__9000__auto__,writer__9001__auto__){
return cljs.core._write(writer__9001__auto__,"cljs.pprint/arg-navigator");
});

cljs.pprint.__GT_arg_navigator = (function cljs$pprint$__GT_arg_navigator(seq,rest,pos){
return (new cljs.pprint.arg_navigator(seq,rest,pos,null,null,null));
});

cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__17418){
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(G__17418),cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(G__17418),cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(G__17418),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17418,cljs.core.cst$kw$seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$rest,cljs.core.cst$kw$pos], 0))),null));
});

/**
 * Create a new arg-navigator from the sequence with the position set to 0
 */
cljs.pprint.init_navigator = (function cljs$pprint$init_navigator(s){
var s__$1 = cljs.core.seq(s);
return (new cljs.pprint.arg_navigator(s__$1,s__$1,(0),null,null,null));
});
cljs.pprint.next_arg = (function cljs$pprint$next_arg(navigator){
var rst = cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
throw Error("Not enough arguments for format definition");
}
});
cljs.pprint.next_arg_or_nil = (function cljs$pprint$next_arg_or_nil(navigator){
var rst = cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,navigator], null);
}
});
cljs.pprint.get_format_arg = (function cljs$pprint$get_format_arg(navigator){
var vec__17431 = cljs.pprint.next_arg(navigator);
var raw_format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17431,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17431,(1),null);
var compiled_format = ((typeof raw_format === 'string')?(cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1(raw_format) : cljs.pprint.compile_format.call(null,raw_format)):raw_format);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [compiled_format,navigator__$1], null);
});
cljs.pprint.absolute_reposition = (function cljs$pprint$absolute_reposition(navigator,position){
if((position >= cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator))){
var G__17434 = navigator;
var G__17435 = (cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) - position);
return (cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2(G__17434,G__17435) : cljs.pprint.relative_reposition.call(null,G__17434,G__17435));
} else {
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator)),position,null,null,null));
}
});
cljs.pprint.relative_reposition = (function cljs$pprint$relative_reposition(navigator,position){
var newpos = (cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + position);
if((position < (0))){
return cljs.pprint.absolute_reposition(navigator,newpos);
} else {
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)),newpos,null,null,null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.compiled_directive = (function (func,def,params,offset,__meta,__extmap,__hash){
this.func = func;
this.def = def;
this.params = params;
this.offset = offset;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8962__auto__,k__8963__auto__){
var self__ = this;
var this__8962__auto____$1 = this;
return this__8962__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8963__auto__,null);
});

cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8964__auto__,k17437,else__8965__auto__){
var self__ = this;
var this__8964__auto____$1 = this;
var G__17441 = k17437;
var G__17441__$1 = (((G__17441 instanceof cljs.core.Keyword))?G__17441.fqn:null);
switch (G__17441__$1) {
case "func":
return self__.func;

break;
case "def":
return self__.def;

break;
case "params":
return self__.params;

break;
case "offset":
return self__.offset;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17437,else__8965__auto__);

}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8976__auto__,writer__8977__auto__,opts__8978__auto__){
var self__ = this;
var this__8976__auto____$1 = this;
var pr_pair__8979__auto__ = ((function (this__8976__auto____$1){
return (function (keyval__8980__auto__){
return cljs.core.pr_sequential_writer(writer__8977__auto__,cljs.core.pr_writer,""," ","",opts__8978__auto__,keyval__8980__auto__);
});})(this__8976__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8977__auto__,pr_pair__8979__auto__,"#cljs.pprint.compiled-directive{",", ","}",opts__8978__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$func,self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$def,self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17436){
var self__ = this;
var G__17436__$1 = this;
return (new cljs.core.RecordIter((0),G__17436__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$func,cljs.core.cst$kw$def,cljs.core.cst$kw$params,cljs.core.cst$kw$offset], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8960__auto__){
var self__ = this;
var this__8960__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8957__auto__){
var self__ = this;
var this__8957__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8966__auto__){
var self__ = this;
var this__8966__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8958__auto__){
var self__ = this;
var this__8958__auto____$1 = this;
var h__8730__auto__ = self__.__hash;
if(!((h__8730__auto__ == null))){
return h__8730__auto__;
} else {
var h__8730__auto____$1 = (function (){var fexpr__17442 = ((function (h__8730__auto__,this__8958__auto____$1){
return (function (coll__8959__auto__){
return (-829256337 ^ cljs.core.hash_unordered_coll(coll__8959__auto__));
});})(h__8730__auto__,this__8958__auto____$1))
;
return fexpr__17442(this__8958__auto____$1);
})();
self__.__hash = h__8730__auto____$1;

return h__8730__auto____$1;
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17438,other17439){
var self__ = this;
var this17438__$1 = this;
return (!((other17439 == null))) && ((this17438__$1.constructor === other17439.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17438__$1.func,other17439.func)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17438__$1.def,other17439.def)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17438__$1.params,other17439.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17438__$1.offset,other17439.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17438__$1.__extmap,other17439.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8971__auto__,k__8972__auto__){
var self__ = this;
var this__8971__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$offset,null,cljs.core.cst$kw$func,null,cljs.core.cst$kw$params,null,cljs.core.cst$kw$def,null], null), null),k__8972__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8971__auto____$1),self__.__meta),k__8972__auto__);
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8972__auto__)),null));
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8969__auto__,k__8970__auto__,G__17436){
var self__ = this;
var this__8969__auto____$1 = this;
var pred__17443 = cljs.core.keyword_identical_QMARK_;
var expr__17444 = k__8970__auto__;
if(cljs.core.truth_((function (){var G__17446 = cljs.core.cst$kw$func;
var G__17447 = expr__17444;
return (pred__17443.cljs$core$IFn$_invoke$arity$2 ? pred__17443.cljs$core$IFn$_invoke$arity$2(G__17446,G__17447) : pred__17443.call(null,G__17446,G__17447));
})())){
return (new cljs.pprint.compiled_directive(G__17436,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17448 = cljs.core.cst$kw$def;
var G__17449 = expr__17444;
return (pred__17443.cljs$core$IFn$_invoke$arity$2 ? pred__17443.cljs$core$IFn$_invoke$arity$2(G__17448,G__17449) : pred__17443.call(null,G__17448,G__17449));
})())){
return (new cljs.pprint.compiled_directive(self__.func,G__17436,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17450 = cljs.core.cst$kw$params;
var G__17451 = expr__17444;
return (pred__17443.cljs$core$IFn$_invoke$arity$2 ? pred__17443.cljs$core$IFn$_invoke$arity$2(G__17450,G__17451) : pred__17443.call(null,G__17450,G__17451));
})())){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__17436,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17452 = cljs.core.cst$kw$offset;
var G__17453 = expr__17444;
return (pred__17443.cljs$core$IFn$_invoke$arity$2 ? pred__17443.cljs$core$IFn$_invoke$arity$2(G__17452,G__17453) : pred__17443.call(null,G__17452,G__17453));
})())){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__17436,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8970__auto__,G__17436),null));
}
}
}
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8974__auto__){
var self__ = this;
var this__8974__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$func,self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$def,self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8961__auto__,G__17436){
var self__ = this;
var this__8961__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__17436,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8967__auto__,entry__8968__auto__){
var self__ = this;
var this__8967__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8968__auto__)){
return this__8967__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8968__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8968__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8967__auto____$1,entry__8968__auto__);
}
});

cljs.pprint.compiled_directive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$func,cljs.core.cst$sym$def,cljs.core.cst$sym$params,cljs.core.cst$sym$offset], null);
});

cljs.pprint.compiled_directive.cljs$lang$type = true;

cljs.pprint.compiled_directive.cljs$lang$ctorPrSeq = (function (this__9000__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/compiled-directive");
});

cljs.pprint.compiled_directive.cljs$lang$ctorPrWriter = (function (this__9000__auto__,writer__9001__auto__){
return cljs.core._write(writer__9001__auto__,"cljs.pprint/compiled-directive");
});

cljs.pprint.__GT_compiled_directive = (function cljs$pprint$__GT_compiled_directive(func,def,params,offset){
return (new cljs.pprint.compiled_directive(func,def,params,offset,null,null,null));
});

cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__17440){
return (new cljs.pprint.compiled_directive(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(G__17440),cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(G__17440),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__17440),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(G__17440),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17440,cljs.core.cst$kw$func,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$def,cljs.core.cst$kw$params,cljs.core.cst$kw$offset], 0))),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__17455,navigator){
var vec__17456 = p__17455;
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17456,(0),null);
var vec__17459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17456,(1),null);
var raw_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17459,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17459,(1),null);
var vec__17462 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,cljs.core.cst$kw$parameter_DASH_from_DASH_args))?cljs.pprint.next_arg(navigator):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,cljs.core.cst$kw$remaining_DASH_arg_DASH_count))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17462,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17462,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__17465 = cljs.pprint.map_passing_context(cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17465,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17465,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,pairs),new_navigator], null);
});
cljs.pprint.special_radix_markers = new cljs.core.PersistentArrayMap(null, 3, [(2),"#b",(8),"#o",(16),"#x"], null);
cljs.pprint.format_simple_number = (function cljs$pprint$format_simple_number(n){
if(cljs.core.integer_QMARK_(n)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.pprint._STAR_print_base_STAR_,(10))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?".":null))].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?(function (){var or__8274__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_radix_markers,cljs.pprint._STAR_print_base_STAR_);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_print_base_STAR_),"r"].join('');
}
})():null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.pprint.opt_base_str.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.opt_base_str.cljs$core$IFn$_invoke$arity$2(cljs.pprint._STAR_print_base_STAR_,n) : cljs.pprint.opt_base_str.call(null,cljs.pprint._STAR_print_base_STAR_,n)))].join('');
}
} else {
return null;

}
});
cljs.pprint.format_ascii = (function cljs$pprint$format_ascii(print_func,params,arg_navigator,offsets){
var vec__17468 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17468,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17468,(1),null);
var base_output = (function (){var or__8274__auto__ = cljs.pprint.format_simple_number(arg);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return (print_func.cljs$core$IFn$_invoke$arity$1 ? print_func.cljs$core$IFn$_invoke$arity$1(arg) : print_func.call(null,arg));
}
})();
var base_width = base_output.length;
var min_width = (base_width + cljs.core.cst$kw$minpad.cljs$core$IFn$_invoke$arity$1(params));
var width = (((min_width >= cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params)))?min_width:(min_width + ((cljs.core.quot(((cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params) - min_width) - (1)),cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params)) + (1)) * cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params))));
var chars = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((width - base_width),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output)].join('')], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars)].join('')], 0));
}

return arg_navigator__$1;
});
/**
 * returns true if a number is actually an integer (that is, has no fractional part)
 */
cljs.pprint.integral_QMARK_ = (function cljs$pprint$integral_QMARK_(x){
if(cljs.core.integer_QMARK_(x)){
return true;
} else {
if(cljs.pprint.float_QMARK_(x)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,Math.floor(x));
} else {
return false;

}
}
});
/**
 * Return the list of remainders (essentially the 'digits') of val in the given base
 */
cljs.pprint.remainders = (function cljs$pprint$remainders(base,val){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (p1__17471_SHARP_){
if((p1__17471_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem(p1__17471_SHARP_,base),cljs.core.quot(p1__17471_SHARP_,base)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
}
}),val)));
});
/**
 * Return val as a string in the given base
 */
cljs.pprint.base_str = (function cljs$pprint$base_str(base,val){
if((val === (0))){
return "0";
} else {
var xlated_val = val
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (xlated_val){
return (function (p1__17472_SHARP_){
if((p1__17472_SHARP_ < (10))){
return cljs.core.char$((cljs.pprint.char_code("0") + p1__17472_SHARP_));
} else {
return cljs.core.char$((cljs.pprint.char_code("a") + (p1__17472_SHARP_ - (10))));
}
});})(xlated_val))
,cljs.pprint.remainders(base,val)));
}
});
cljs.pprint.javascript_base_formats = new cljs.core.PersistentArrayMap(null, 3, [(8),"%o",(10),"%d",(16),"%x"], null);
/**
 * Return val as a string in the given base. No cljs format, so no improved performance.
 */
cljs.pprint.opt_base_str = (function cljs$pprint$opt_base_str(base,val){
return cljs.pprint.base_str(base,val);
});
cljs.pprint.group_by_STAR_ = (function cljs$pprint$group_by_STAR_(unit,lis){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2(unit,x))),cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(unit,x))], null);
}),cljs.core.reverse(lis))));
});
cljs.pprint.format_integer = (function cljs$pprint$format_integer(base,params,arg_navigator,offsets){
var vec__17474 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17474,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17474,(1),null);
if(cljs.core.truth_(cljs.pprint.integral_QMARK_(arg))){
var neg_17477 = (arg < (0));
var pos_arg_17478 = ((neg_17477)?(- arg):arg);
var raw_str_17479 = cljs.pprint.opt_base_str(base,pos_arg_17478);
var group_str_17480 = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (neg_17477,pos_arg_17478,raw_str_17479,vec__17474,arg,arg_navigator__$1){
return (function (p1__17473_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__17473_SHARP_);
});})(neg_17477,pos_arg_17478,raw_str_17479,vec__17474,arg,arg_navigator__$1))
,cljs.pprint.group_by_STAR_(cljs.core.cst$kw$commainterval.cljs$core$IFn$_invoke$arity$1(params),raw_str_17479));
var commas = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(groups),cljs.core.cst$kw$commachar.cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.next(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(commas,groups)));
})():raw_str_17479);
var signed_str_17481 = ((neg_17477)?["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_17480)].join(''):(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_17480)].join(''):group_str_17480
));
var padded_str_17482 = (((signed_str_17481.length < cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params) - signed_str_17481.length),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(signed_str_17481)].join(''):signed_str_17481);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([padded_str_17482], 0));
} else {
cljs.pprint.format_ascii(cljs.core.print_str,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$colinc,(1),cljs.core.cst$kw$minpad,(0),cljs.core.cst$kw$padchar,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$at,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),null);
}

return arg_navigator__$1;
});
cljs.pprint.english_cardinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"], null);
cljs.pprint.english_ordinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zeroth","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth"], null);
cljs.pprint.english_cardinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"], null);
cljs.pprint.english_ordinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twentieth","thirtieth","fortieth","fiftieth","sixtieth","seventieth","eightieth","ninetieth"], null);
cljs.pprint.english_scale_numbers = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quattuordecillion","quindecillion","sexdecillion","septendecillion","octodecillion","novemdecillion","vigintillion"], null);
/**
 * Convert a number less than 1000 to a cardinal english string
 */
cljs.pprint.format_simple_cardinal = (function cljs$pprint$format_simple_cardinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((hundreds > (0))) && ((tens > (0))))?" ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((ten_digit > (0))) && ((unit_digit > (0))))?"-":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,unit_digit):null))].join('');
})()):null))].join('');
});
/**
 * Take a sequence of parts, add scale numbers (e.g., million) and combine into a string
 *   offset is a factor of 10^3 to multiply by
 */
cljs.pprint.add_english_scales = (function cljs$pprint$add_english_scales(parts,offset){
var cnt = cljs.core.count(parts);
var acc = cljs.core.PersistentVector.EMPTY;
var pos = (cnt - (1));
var this$ = cljs.core.first(parts);
var remainder = cljs.core.next(parts);
while(true){
if((remainder == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",acc))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(cljs.core.empty_QMARK_(this$))) && (!(cljs.core.empty_QMARK_(acc))))?", ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(cljs.core.empty_QMARK_(this$))) && (((pos + offset) > (0))))?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join(''):null))].join('');
} else {
var G__17483 = ((cljs.core.empty_QMARK_(this$))?acc:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__17484 = (pos - (1));
var G__17485 = cljs.core.first(remainder);
var G__17486 = cljs.core.next(remainder);
acc = G__17483;
pos = G__17484;
this$ = G__17485;
remainder = G__17486;
continue;
}
break;
}
});
cljs.pprint.format_cardinal_english = (function cljs$pprint$format_cardinal_english(params,navigator,offsets){
var vec__17487 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17487,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17487,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zero"], 0));
} else {
var abs_arg_17490 = (((arg < (0)))?(- arg):arg);
var parts_17491 = cljs.pprint.remainders((1000),abs_arg_17490);
if((cljs.core.count(parts_17491) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_17492 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,parts_17491);
var full_str_17493 = cljs.pprint.add_english_scales(parts_strs_17492,(0));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_str_17493)].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));
}
}

return navigator__$1;
});
/**
 * Convert a number less than 1000 to a ordinal english string
 *   Note this should only be used for the last one in the sequence
 */
cljs.pprint.format_simple_ordinal = (function cljs$pprint$format_simple_ordinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((hundreds > (0))) && ((tens > (0))))?" ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
if(((ten_digit > (0))) && (!((unit_digit > (0))))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_tens,ten_digit);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((ten_digit > (0))) && ((unit_digit > (0))))?"-":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,unit_digit):null))].join('');
}
})()):(((hundreds > (0)))?"th":null)))].join('');
});
cljs.pprint.format_ordinal_english = (function cljs$pprint$format_ordinal_english(params,navigator,offsets){
var vec__17494 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17494,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17494,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zeroth"], 0));
} else {
var abs_arg_17497 = (((arg < (0)))?(- arg):arg);
var parts_17498 = cljs.pprint.remainders((1000),abs_arg_17497);
if((cljs.core.count(parts_17498) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_17499 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(parts_17498));
var head_str_17500 = cljs.pprint.add_english_scales(parts_strs_17499,(1));
var tail_str_17501 = cljs.pprint.format_simple_ordinal(cljs.core.last(parts_17498));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(cljs.core.empty_QMARK_(head_str_17500))) && (!(cljs.core.empty_QMARK_(tail_str_17501))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_17500),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail_str_17501)].join(''):((!(cljs.core.empty_QMARK_(head_str_17500)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_17500),"th"].join(''):tail_str_17501
)))].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));

var low_two_digits_17502 = cljs.core.rem(arg,(100));
var not_teens_17503 = (((11) < low_two_digits_17502)) || (((19) > low_two_digits_17502));
var low_digit_17504 = cljs.core.rem(low_two_digits_17502,(10));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((((low_digit_17504 === (1))) && (not_teens_17503))?"st":((((low_digit_17504 === (2))) && (not_teens_17503))?"nd":((((low_digit_17504 === (3))) && (not_teens_17503))?"rd":"th"
)))], 0));
}
}

return navigator__$1;
});
cljs.pprint.old_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IIII","V","VI","VII","VIII","VIIII"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XXXX","L","LX","LXX","LXXX","LXXXX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CCCC","D","DC","DCC","DCCC","DCCCC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
cljs.pprint.new_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IV","V","VI","VII","VIII","IX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
/**
 * Format a roman numeral using the specified look-up table
 */
cljs.pprint.format_roman = (function cljs$pprint$format_roman(table,params,navigator,offsets){
var vec__17505 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17505,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17505,(1),null);
if((typeof arg === 'number') && ((arg > (0))) && ((arg < (4000)))){
var digits_17508 = cljs.pprint.remainders((10),arg);
var acc_17509 = cljs.core.PersistentVector.EMPTY;
var pos_17510 = (cljs.core.count(digits_17508) - (1));
var digits_17511__$1 = digits_17508;
while(true){
if(cljs.core.empty_QMARK_(digits_17511__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,acc_17509)], 0));
} else {
var digit_17512 = cljs.core.first(digits_17511__$1);
var G__17513 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),digit_17512))?acc_17509:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc_17509,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(table,pos_17510),(digit_17512 - (1)))));
var G__17514 = (pos_17510 - (1));
var G__17515 = cljs.core.next(digits_17511__$1);
acc_17509 = G__17513;
pos_17510 = G__17514;
digits_17511__$1 = G__17515;
continue;
}
break;
}
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));
}

return navigator__$1;
});
cljs.pprint.format_old_roman = (function cljs$pprint$format_old_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.old_roman_table,params,navigator,offsets);
});
cljs.pprint.format_new_roman = (function cljs$pprint$format_new_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.new_roman_table,params,navigator,offsets);
});
cljs.pprint.special_chars = new cljs.core.PersistentArrayMap(null, 5, [(8),"Backspace",(9),"Tab",(10),"Newline",(13),"Return",(32),"Space"], null);
cljs.pprint.pretty_character = (function cljs$pprint$pretty_character(params,navigator,offsets){
var vec__17516 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17516,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17516,(1),null);
var as_int = cljs.pprint.char_code(c);
var base_char = (as_int & (127));
var meta = (as_int & (128));
var special = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_chars,base_char);
if((meta > (0))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Meta-"], 0));
} else {
}

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(special)?special:(((base_char < (32)))?["Control-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$((base_char + (64))))].join(''):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(base_char,(127)))?"Control-?":cljs.core.char$(base_char)
)))], 0));

return navigator__$1;
});
cljs.pprint.readable_character = (function cljs$pprint$readable_character(params,navigator,offsets){
var vec__17519 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17519,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17519,(1),null);
var pred__17522_17529 = cljs.core._EQ_;
var expr__17523_17530 = cljs.core.cst$kw$char_DASH_format.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_((function (){var G__17525 = "o";
var G__17526 = expr__17523_17530;
return (pred__17522_17529.cljs$core$IFn$_invoke$arity$2 ? pred__17522_17529.cljs$core$IFn$_invoke$arity$2(G__17525,G__17526) : pred__17522_17529.call(null,G__17525,G__17526));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\o~3, '0o",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((function (){var G__17527 = "u";
var G__17528 = expr__17523_17530;
return (pred__17522_17529.cljs$core$IFn$_invoke$arity$2 ? pred__17522_17529.cljs$core$IFn$_invoke$arity$2(G__17527,G__17528) : pred__17522_17529.call(null,G__17527,G__17528));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\u~4, '0x",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((pred__17522_17529.cljs$core$IFn$_invoke$arity$2 ? pred__17522_17529.cljs$core$IFn$_invoke$arity$2(null,expr__17523_17530) : pred__17522_17529.call(null,null,expr__17523_17530)))){
cljs.pprint.print_char(c);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__17523_17530)].join('')));
}
}
}

return navigator__$1;
});
cljs.pprint.plain_character = (function cljs$pprint$plain_character(params,navigator,offsets){
var vec__17531 = cljs.pprint.next_arg(navigator);
var char$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17531,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17531,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([char$], 0));

return navigator__$1;
});
cljs.pprint.abort_QMARK_ = (function cljs$pprint$abort_QMARK_(context){
var token = cljs.core.first(context);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,token)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,token));
});
cljs.pprint.execute_sub_format = (function cljs$pprint$execute_sub_format(format,args,base_args){
return cljs.core.second(cljs.pprint.map_passing_context((function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_(context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__17534 = cljs.pprint.realize_parameter_list(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17534,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17534,(1),null);
var vec__17537 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17537,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17537,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,cljs.core.cst$kw$base_DASH_args,base_args);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format));
});
/**
 * Produce string parts for the mantissa (normalize 1-9) and exponent
 */
cljs.pprint.float_parts_base = (function cljs$pprint$float_parts_base(f){
var s = clojure.string.lower_case([cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
var exploc = s.indexOf("e");
var dotloc = s.indexOf(".");
if((exploc < (0))){
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.count(s) - (1)))].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),dotloc)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(dotloc + (1))))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((dotloc - (1)))].join('')], null);
}
} else {
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),exploc),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(2),exploc))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
}
}
});
/**
 * Take care of leading and trailing zeros in decomposed floats
 */
cljs.pprint.float_parts = (function cljs$pprint$float_parts(f){
var vec__17540 = cljs.pprint.float_parts_base(f);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17540,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17540,(1),null);
var m1 = cljs.pprint.rtrim(m,"0");
var m2 = cljs.pprint.ltrim(m1,"0");
var delta = (cljs.core.count(m1) - cljs.core.count(m2));
var e__$1 = ((((cljs.core.count(e) > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(e,(0)),"+")))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(e,(1)):e);
if(cljs.core.empty_QMARK_(m2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m2,(parseInt(e__$1,(10)) - delta)], null);
}
});
/**
 * Assumption: The input string consists of one or more decimal digits,
 *   and no other characters. Return a string containing one or more
 *   decimal digits containing a decimal number one larger than the input
 *   string. The output string will always be the same length as the input
 *   string, or one character longer.
 */
cljs.pprint.inc_s = (function cljs$pprint$inc_s(s){
var len_1 = (cljs.core.count(s) - (1));
var i = (len_1 | (0));
while(true){
if((i < (0))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"1",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 + (1)),"0"));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("9",s.charAt(i))){
var G__17543 = (i - (1));
i = G__17543;
continue;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i),cljs.core.char$((cljs.pprint.char_code(s.charAt(i)) + (1))),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 - i),"0"));

}
}
break;
}
});
cljs.pprint.round_str = (function cljs$pprint$round_str(m,e,d,w){
if(cljs.core.truth_((function (){var or__8274__auto__ = d;
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return w;
}
})())){
var len = cljs.core.count(m);
var w__$1 = (cljs.core.truth_(w)?(function (){var x__8626__auto__ = (2);
var y__8627__auto__ = w;
return ((x__8626__auto__ > y__8627__auto__) ? x__8626__auto__ : y__8627__auto__);
})():(0));
var round_pos = (cljs.core.truth_(d)?((e + d) + (1)):(((e >= (0)))?(function (){var x__8626__auto__ = (e + (1));
var y__8627__auto__ = (w__$1 - (1));
return ((x__8626__auto__ > y__8627__auto__) ? x__8626__auto__ : y__8627__auto__);
})():(w__$1 + e)
));
var vec__17544 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17544,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17544,(1),null);
var round_pos__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17544,(2),null);
var len__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17544,(3),null);
if(cljs.core.truth_(round_pos__$1)){
if((round_pos__$1 < (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0),false], null);
} else {
if((len__$1 > round_pos__$1)){
var round_char = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m1,round_pos__$1);
var result = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m1,(0),round_pos__$1);
if((cljs.pprint.char_code(round_char) >= cljs.pprint.char_code("5"))){
var round_up_result = cljs.pprint.inc_s(result);
var expanded = (cljs.core.count(round_up_result) > cljs.core.count(result));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded)?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(round_up_result,(0),(cljs.core.count(round_up_result) - (1))):round_up_result),e1,expanded], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,e1,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
});
cljs.pprint.expand_fixed = (function cljs$pprint$expand_fixed(m,e,d){
var vec__17547 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((- e) - (1)),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17547,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17547,(1),null);
var len = cljs.core.count(m1);
var target_len = (cljs.core.truth_(d)?((e1 + d) + (1)):(e1 + (1)));
if((len < target_len)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(m1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((target_len - len),"0")))].join('');
} else {
return m1;
}
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_decimal = (function cljs$pprint$insert_decimal(m,e){
if((e < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
var loc = (e + (1));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),loc)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,loc))].join('');
}
});
cljs.pprint.get_fixed = (function cljs$pprint$get_fixed(m,e,d){
return cljs.pprint.insert_decimal(cljs.pprint.expand_fixed(m,e,d),e);
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_scaled_decimal = (function cljs$pprint$insert_scaled_decimal(m,k){
if((k < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),k)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,k))].join('');
}
});
cljs.pprint.convert_ratio = (function cljs$pprint$convert_ratio(x){
return x;
});
cljs.pprint.fixed_float = (function cljs$pprint$fixed_float(params,navigator,offsets){
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var vec__17550 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17550,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17550,(1),null);
var vec__17553 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17553,(0),null);
var abs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17553,(1),null);
var abs__$1 = cljs.pprint.convert_ratio(abs);
var vec__17556 = cljs.pprint.float_parts(abs__$1);
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17556,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17556,(1),null);
var scaled_exp = (exp + cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(params));
var add_sign = (function (){var or__8274__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return (arg < (0));
}
})();
var append_zero = (cljs.core.not(d)) && (((cljs.core.count(mantissa) - (1)) <= scaled_exp));
var vec__17559 = cljs.pprint.round_str(mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17559,(0),null);
var scaled_exp__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17559,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17559,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp__$1 + (1)):scaled_exp__$1),d);
var fixed_repr__$1 = (cljs.core.truth_((function (){var and__8262__auto__ = w;
if(cljs.core.truth_(and__8262__auto__)){
var and__8262__auto____$1 = d;
if(cljs.core.truth_(and__8262__auto____$1)){
return ((d >= (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((0)),"0")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((1)),".")) && ((cljs.core.count(fixed_repr) > (w - (cljs.core.truth_(add_sign)?(1):(0)))));
} else {
return and__8262__auto____$1;
}
} else {
return and__8262__auto__;
}
})())?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(fixed_repr,(1)):fixed_repr);
var prepend_zero = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(fixed_repr__$1),".");
if(cljs.core.truth_(w)){
var len_17562 = cljs.core.count(fixed_repr__$1);
var signed_len_17563 = (cljs.core.truth_(add_sign)?(len_17562 + (1)):len_17562);
var prepend_zero_17564__$1 = (prepend_zero) && (!((signed_len_17563 >= w)));
var append_zero_17565__$1 = (append_zero) && (!((signed_len_17563 >= w)));
var full_len_17566 = (((prepend_zero_17564__$1) || (append_zero_17565__$1))?(signed_len_17563 + (1)):signed_len_17563);
if(cljs.core.truth_((function (){var and__8262__auto__ = (full_len_17566 > w);
if(and__8262__auto__){
return cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__8262__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len_17566),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_17564__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_17565__$1)?"0":null))].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero)?"0":null))].join('')], 0));
}

return navigator__$1;
});
cljs.pprint.exponential_float = (function cljs$pprint$exponential_float(params,navigator,offset){
var vec__17567 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17567,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17567,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var G__17573_17583 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__17574_17584 = G__17573_17583;
var mantissa_17585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17574_17584,(0),null);
var exp_17586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17574_17584,(1),null);
var G__17573_17587__$1 = G__17573_17583;
while(true){
var vec__17577_17588 = G__17573_17587__$1;
var mantissa_17589__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17577_17588,(0),null);
var exp_17590__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17577_17588,(1),null);
var w_17591 = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d_17592 = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var e_17593 = cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(params);
var k_17594 = cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(params);
var expchar_17595 = (function (){var or__8274__auto__ = cljs.core.cst$kw$exponentchar.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return "E";
}
})();
var add_sign_17596 = (function (){var or__8274__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return (arg__$1 < (0));
}
})();
var prepend_zero_17597 = (k_17594 <= (0));
var scaled_exp_17598 = (exp_17590__$1 - (k_17594 - (1)));
var scaled_exp_str_17599 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(scaled_exp_17598))].join('');
var scaled_exp_str_17600__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expchar_17595),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((scaled_exp_17598 < (0)))?"-":"+")),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(e_17593)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((e_17593 - cljs.core.count(scaled_exp_str_17599)),"0")):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_17599)].join('');
var exp_width_17601 = cljs.core.count(scaled_exp_str_17600__$1);
var base_mantissa_width_17602 = cljs.core.count(mantissa_17589__$1);
var scaled_mantissa_17603 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((- k_17594),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mantissa_17589__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d_17592)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((d_17592 - (base_mantissa_width_17602 - (1))) - (((k_17594 < (0)))?(- k_17594):(0))),"0")):null))].join('');
var w_mantissa_17604 = (cljs.core.truth_(w_17591)?(w_17591 - exp_width_17601):null);
var vec__17580_17605 = cljs.pprint.round_str(scaled_mantissa_17603,(0),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_17594,(0)))?(d_17592 - (1)):(((k_17594 > (0)))?d_17592:(((k_17594 < (0)))?(d_17592 - (1)):null))),(cljs.core.truth_(w_mantissa_17604)?(w_mantissa_17604 - (cljs.core.truth_(add_sign_17596)?(1):(0))):null));
var rounded_mantissa_17606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17580_17605,(0),null);
var __17607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17580_17605,(1),null);
var incr_exp_17608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17580_17605,(2),null);
var full_mantissa_17609 = cljs.pprint.insert_scaled_decimal(rounded_mantissa_17606,k_17594);
var append_zero_17610 = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_17594,cljs.core.count(rounded_mantissa_17606))) && ((d_17592 == null));
if(cljs.core.not(incr_exp_17608)){
if(cljs.core.truth_(w_17591)){
var len_17611 = (cljs.core.count(full_mantissa_17609) + exp_width_17601);
var signed_len_17612 = (cljs.core.truth_(add_sign_17596)?(len_17611 + (1)):len_17611);
var prepend_zero_17613__$1 = (prepend_zero_17597) && (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(signed_len_17612,w_17591)));
var full_len_17614 = ((prepend_zero_17613__$1)?(signed_len_17612 + (1)):signed_len_17612);
var append_zero_17615__$1 = (append_zero_17610) && ((full_len_17614 < w_17591));
if(cljs.core.truth_((function (){var and__8262__auto__ = (function (){var or__8274__auto__ = (full_len_17614 > w_17591);
if(or__8274__auto__){
return or__8274__auto__;
} else {
var and__8262__auto__ = e_17593;
if(cljs.core.truth_(and__8262__auto__)){
return ((exp_width_17601 - (2)) > e_17593);
} else {
return and__8262__auto__;
}
}
})();
if(cljs.core.truth_(and__8262__auto__)){
return cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__8262__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w_17591,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((w_17591 - full_len_17614) - ((append_zero_17615__$1)?(1):(0))),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_17596)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_17613__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_17609),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_17615__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_17600__$1)].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_17596)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_17597)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_17609),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_17610)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_17600__$1)].join('')], 0));
}
} else {
var G__17616 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_17606,(exp_17590__$1 + (1))], null);
G__17573_17587__$1 = G__17616;
continue;
}
break;
}

return navigator__$1;
});
cljs.pprint.general_float = (function cljs$pprint$general_float(params,navigator,offsets){
var vec__17617 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17617,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17617,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var vec__17620 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17620,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17620,(1),null);
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var e = cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(params);
var n = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg__$1,0.0))?(0):(exp + (1)));
var ee = (cljs.core.truth_(e)?(e + (2)):(4));
var ww = (cljs.core.truth_(w)?(w - ee):null);
var d__$1 = (cljs.core.truth_(d)?d:(function (){var x__8626__auto__ = cljs.core.count(mantissa);
var y__8627__auto__ = (function (){var x__8633__auto__ = n;
var y__8634__auto__ = (7);
return ((x__8633__auto__ < y__8634__auto__) ? x__8633__auto__ : y__8634__auto__);
})();
return ((x__8626__auto__ > y__8627__auto__) ? x__8626__auto__ : y__8627__auto__);
})());
var dd = (d__$1 - n);
if((((0) <= dd)) && ((dd <= d__$1))){
var navigator__$1 = cljs.pprint.fixed_float(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$w,ww,cljs.core.cst$kw$d,dd,cljs.core.cst$kw$k,(0),cljs.core.cst$kw$overflowchar,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$padchar,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$at,cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params)], null),navigator,offsets);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(ee," "))], 0));

return navigator__$1;
} else {
return cljs.pprint.exponential_float(params,navigator,offsets);
}
});
cljs.pprint.dollar_float = (function cljs$pprint$dollar_float(params,navigator,offsets){
var vec__17623 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17623,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17623,(1),null);
var vec__17626 = cljs.pprint.float_parts(Math.abs(arg));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17626,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17626,(1),null);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params);
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var add_sign = (function (){var or__8274__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return (arg < (0));
}
})();
var vec__17629 = cljs.pprint.round_str(mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17629,(0),null);
var scaled_exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17629,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17629,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp + (1)):scaled_exp),d);
var full_repr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - fixed_repr.indexOf(".")),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr)].join('');
var full_len = (cljs.core.count(full_repr) + (cljs.core.truth_(add_sign)?(1):(0)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__8262__auto__ = cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__8262__auto__)){
return add_sign;
} else {
return and__8262__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__8262__auto__ = cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params));
if(and__8262__auto__){
return add_sign;
} else {
return and__8262__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_repr)].join('')], 0));

return navigator__$1;
});
cljs.pprint.choice_conditional = (function cljs$pprint$choice_conditional(params,arg_navigator,offsets){
var arg = cljs.core.cst$kw$selector.cljs$core$IFn$_invoke$arity$1(params);
var vec__17632 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg(arg_navigator));
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17632,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17632,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = ((((arg__$1 < (0))) || ((arg__$1 >= cljs.core.count(clauses))))?cljs.core.first(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(params)):cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,arg__$1));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.boolean_conditional = (function cljs$pprint$boolean_conditional(params,arg_navigator,offsets){
var vec__17635 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17635,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17635,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.second(clauses):cljs.core.first(clauses));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.check_arg_conditional = (function cljs$pprint$check_arg_conditional(params,arg_navigator,offsets){
var vec__17638 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17638,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17638,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.first(clauses):null);
if(cljs.core.truth_(arg)){
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,arg_navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return arg_navigator;
}
} else {
return navigator;
}
});
cljs.pprint.iterate_sublist = (function cljs$pprint$iterate_sublist(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__17641 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17641,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17641,(1),null);
var vec__17644 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17644,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17644,(1),null);
var args = cljs.pprint.init_navigator(arg_list);
var count = (0);
var args__$1 = args;
var last_pos = ((-1) | (0));
while(true){
if((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(args__$1),last_pos)) && ((count > (1)))){
throw Error("%{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__8274__auto__ = (cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(args__$1))) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__8274__auto__){
return or__8274__auto__;
} else {
var and__8262__auto__ = max_count;
if(cljs.core.truth_(and__8262__auto__)){
return (count >= max_count);
} else {
return and__8262__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,args__$1,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__17647 = (count + (1));
var G__17648 = iter_result;
var G__17649 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__17647;
args__$1 = G__17648;
last_pos = G__17649;
continue;
}
}
break;
}
});
cljs.pprint.iterate_list_of_sublists = (function cljs$pprint$iterate_list_of_sublists(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__17650 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17650,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17650,(1),null);
var vec__17653 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17653,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17653,(1),null);
var count = (0);
var arg_list__$1 = arg_list;
while(true){
if(cljs.core.truth_((function (){var or__8274__auto__ = (cljs.core.empty_QMARK_(arg_list__$1)) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__8274__auto__){
return or__8274__auto__;
} else {
var and__8262__auto__ = max_count;
if(cljs.core.truth_(and__8262__auto__)){
return (count >= max_count);
} else {
return and__8262__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(cljs.core.first(arg_list__$1)),cljs.pprint.init_navigator(cljs.core.next(arg_list__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__17656 = (count + (1));
var G__17657 = cljs.core.next(arg_list__$1);
count = G__17656;
arg_list__$1 = G__17657;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_list = (function cljs$pprint$iterate_main_list(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__17658 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17658,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17658,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
var last_pos = ((-1) | (0));
while(true){
if((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator__$2),last_pos)) && ((count > (1)))){
throw Error("%@{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__8274__auto__ = (cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator__$2))) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__8274__auto__){
return or__8274__auto__;
} else {
var and__8262__auto__ = max_count;
if(cljs.core.truth_(and__8262__auto__)){
return (count >= max_count);
} else {
return and__8262__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,navigator__$2,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return cljs.core.second(iter_result);
} else {
var G__17661 = (count + (1));
var G__17662 = iter_result;
var G__17663 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__17661;
navigator__$2 = G__17662;
last_pos = G__17663;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_sublists = (function cljs$pprint$iterate_main_sublists(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__17664 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17664,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17664,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
while(true){
if(cljs.core.truth_((function (){var or__8274__auto__ = (cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator__$2))) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__8274__auto__){
return or__8274__auto__;
} else {
var and__8262__auto__ = max_count;
if(cljs.core.truth_(and__8262__auto__)){
return (count >= max_count);
} else {
return and__8262__auto__;
}
}
})())){
return navigator__$2;
} else {
var vec__17667 = cljs.pprint.next_arg_or_nil(navigator__$2);
var sublist = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17667,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17667,(1),null);
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(sublist),navigator__$3);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$3;
} else {
var G__17670 = (count + (1));
var G__17671 = navigator__$3;
count = G__17670;
navigator__$2 = G__17671;
continue;
}
}
break;
}
});
cljs.pprint.logical_block_or_justify = (function cljs$pprint$logical_block_or_justify(params,navigator,offsets){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))){
return (cljs.pprint.format_logical_block.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.format_logical_block.cljs$core$IFn$_invoke$arity$3(params,navigator,offsets) : cljs.pprint.format_logical_block.call(null,params,navigator,offsets));
} else {
return (cljs.pprint.justify_clauses.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.justify_clauses.cljs$core$IFn$_invoke$arity$3(params,navigator,offsets) : cljs.pprint.justify_clauses.call(null,params,navigator,offsets));
}
});
cljs.pprint.render_clauses = (function cljs$pprint$render_clauses(clauses,navigator,base_navigator){
var clauses__$1 = clauses;
var acc = cljs.core.PersistentVector.EMPTY;
var navigator__$1 = navigator;
while(true){
if(cljs.core.empty_QMARK_(clauses__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,navigator__$1], null);
} else {
var clause = cljs.core.first(clauses__$1);
var vec__17672 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_17675 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format(clause,navigator__$1,base_navigator),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('')], null);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_17675;
}})();
var iter_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17672,(0),null);
var result_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17672,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second(iter_result)], null);
} else {
var G__17676 = cljs.core.next(clauses__$1);
var G__17677 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result_str);
var G__17678 = iter_result;
clauses__$1 = G__17676;
acc = G__17677;
navigator__$1 = G__17678;
continue;
}
}
break;
}
});
cljs.pprint.justify_clauses = (function cljs$pprint$justify_clauses(params,navigator,offsets){
var vec__17679 = (function (){var temp__5535__auto__ = cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5535__auto__)){
var else$ = temp__5535__auto__;
return cljs.pprint.render_clauses(else$,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
})();
var vec__17682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17679,(0),null);
var eol_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17682,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17679,(1),null);
var navigator__$1 = (function (){var or__8274__auto__ = new_navigator;
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return navigator;
}
})();
var vec__17685 = (function (){var temp__5535__auto__ = cljs.core.cst$kw$else_DASH_params.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5535__auto__)){
var p = temp__5535__auto__;
return cljs.pprint.realize_parameter_list(p,navigator__$1);
} else {
return null;
}
})();
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17685,(0),null);
var new_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17685,(1),null);
var navigator__$2 = (function (){var or__8274__auto__ = new_navigator__$1;
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return navigator__$1;
}
})();
var min_remaining = (function (){var or__8274__auto__ = cljs.core.first(cljs.core.cst$kw$min_DASH_remaining.cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return (0);
}
})();
var max_columns = (function (){var or__8274__auto__ = cljs.core.first(cljs.core.cst$kw$max_DASH_columns.cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return cljs.pprint.get_max_column(cljs.core._STAR_out_STAR_);
}
})();
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var vec__17688 = cljs.pprint.render_clauses(clauses,navigator__$2,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17688,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17688,(1),null);
var slots = (function (){var x__8626__auto__ = (1);
var y__8627__auto__ = (((cljs.core.count(strs) - (1)) + (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(1):(0))) + (cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?(1):(0)));
return ((x__8626__auto__ > y__8627__auto__) ? x__8626__auto__ : y__8627__auto__);
})();
var chars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,strs));
var mincol = cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params);
var minpad = cljs.core.cst$kw$minpad.cljs$core$IFn$_invoke$arity$1(params);
var colinc = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var minout = (chars + (slots * minpad));
var result_columns = (((minout <= mincol))?mincol:(mincol + (colinc * ((1) + cljs.core.quot(((minout - mincol) - (1)),colinc)))));
var total_pad = (result_columns - chars);
var pad = (function (){var x__8626__auto__ = minpad;
var y__8627__auto__ = cljs.core.quot(total_pad,slots);
return ((x__8626__auto__ > y__8627__auto__) ? x__8626__auto__ : y__8627__auto__);
})();
var extra_pad = (total_pad - (pad * slots));
var pad_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(pad,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_((function (){var and__8262__auto__ = eol_str;
if(cljs.core.truth_(and__8262__auto__)){
return (((cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))) + min_remaining) + result_columns) > max_columns);
} else {
return and__8262__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([eol_str], 0));
} else {
}

var slots_17691__$1 = slots;
var extra_pad_17692__$1 = extra_pad;
var strs_17693__$1 = strs;
var pad_only_17694 = (function (){var or__8274__auto__ = cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(strs_17693__$1),(1))) && (cljs.core.not(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params)));
}
})();
while(true){
if(cljs.core.seq(strs_17693__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not(pad_only_17694))?cljs.core.first(strs_17693__$1):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__8274__auto__ = pad_only_17694;
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
var or__8274__auto____$1 = cljs.core.next(strs_17693__$1);
if(or__8274__auto____$1){
return or__8274__auto____$1;
} else {
return cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
}
}
})())?pad_str:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((extra_pad_17692__$1 > (0)))?cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params):null))].join('')], 0));

var G__17695 = (slots_17691__$1 - (1));
var G__17696 = (extra_pad_17692__$1 - (1));
var G__17697 = (cljs.core.truth_(pad_only_17694)?strs_17693__$1:cljs.core.next(strs_17693__$1));
var G__17698 = false;
slots_17691__$1 = G__17695;
extra_pad_17692__$1 = G__17696;
strs_17693__$1 = G__17697;
pad_only_17694 = G__17698;
continue;
} else {
}
break;
}

return navigator__$3;
});
/**
 * Returns a proxy that wraps writer, converting all characters to lower case
 */
cljs.pprint.downcase_writer = (function cljs$pprint$downcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint17699 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint17699 = (function (writer,meta17700){
this.writer = writer;
this.meta17700 = meta17700;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint17699.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17701,meta17700__$1){
var self__ = this;
var _17701__$1 = this;
return (new cljs.pprint.t_cljs$pprint17699(self__.writer,meta17700__$1));
});

cljs.pprint.t_cljs$pprint17699.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17701){
var self__ = this;
var _17701__$1 = this;
return self__.meta17700;
});

cljs.pprint.t_cljs$pprint17699.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});

cljs.pprint.t_cljs$pprint17699.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__17702 = cljs.core._EQ_;
var expr__17703 = cljs.core.type(x);
if(cljs.core.truth_((pred__17702.cljs$core$IFn$_invoke$arity$2 ? pred__17702.cljs$core$IFn$_invoke$arity$2(String,expr__17703) : pred__17702.call(null,String,expr__17703)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
} else {
if(cljs.core.truth_((pred__17702.cljs$core$IFn$_invoke$arity$2 ? pred__17702.cljs$core$IFn$_invoke$arity$2(Number,expr__17703) : pred__17702.call(null,Number,expr__17703)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(cljs.core.char$(c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__17703)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint17699.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$meta17700], null);
});

cljs.pprint.t_cljs$pprint17699.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint17699.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint17699";

cljs.pprint.t_cljs$pprint17699.cljs$lang$ctorPrWriter = (function (this__8945__auto__,writer__8946__auto__,opt__8947__auto__){
return cljs.core._write(writer__8946__auto__,"cljs.pprint/t_cljs$pprint17699");
});

cljs.pprint.__GT_t_cljs$pprint17699 = (function cljs$pprint$downcase_writer_$___GT_t_cljs$pprint17699(writer__$1,meta17700){
return (new cljs.pprint.t_cljs$pprint17699(writer__$1,meta17700));
});

}

return (new cljs.pprint.t_cljs$pprint17699(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, converting all characters to upper case
 */
cljs.pprint.upcase_writer = (function cljs$pprint$upcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint17705 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint17705 = (function (writer,meta17706){
this.writer = writer;
this.meta17706 = meta17706;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint17705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17707,meta17706__$1){
var self__ = this;
var _17707__$1 = this;
return (new cljs.pprint.t_cljs$pprint17705(self__.writer,meta17706__$1));
});

cljs.pprint.t_cljs$pprint17705.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17707){
var self__ = this;
var _17707__$1 = this;
return self__.meta17706;
});

cljs.pprint.t_cljs$pprint17705.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});

cljs.pprint.t_cljs$pprint17705.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__17708 = cljs.core._EQ_;
var expr__17709 = cljs.core.type(x);
if(cljs.core.truth_((pred__17708.cljs$core$IFn$_invoke$arity$2 ? pred__17708.cljs$core$IFn$_invoke$arity$2(String,expr__17709) : pred__17708.call(null,String,expr__17709)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(s));
} else {
if(cljs.core.truth_((pred__17708.cljs$core$IFn$_invoke$arity$2 ? pred__17708.cljs$core$IFn$_invoke$arity$2(Number,expr__17709) : pred__17708.call(null,Number,expr__17709)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(cljs.core.char$(c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__17709)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint17705.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$meta17706], null);
});

cljs.pprint.t_cljs$pprint17705.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint17705.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint17705";

cljs.pprint.t_cljs$pprint17705.cljs$lang$ctorPrWriter = (function (this__8945__auto__,writer__8946__auto__,opt__8947__auto__){
return cljs.core._write(writer__8946__auto__,"cljs.pprint/t_cljs$pprint17705");
});

cljs.pprint.__GT_t_cljs$pprint17705 = (function cljs$pprint$upcase_writer_$___GT_t_cljs$pprint17705(writer__$1,meta17706){
return (new cljs.pprint.t_cljs$pprint17705(writer__$1,meta17706));
});

}

return (new cljs.pprint.t_cljs$pprint17705(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Capitalizes the words in a string. If first? is false, don't capitalize the
 *                                    first character of the string even if it's a letter.
 */
cljs.pprint.capitalize_string = (function cljs$pprint$capitalize_string(s,first_QMARK_){
var f = cljs.core.first(s);
var s__$1 = (cljs.core.truth_((function (){var and__8262__auto__ = first_QMARK_;
if(cljs.core.truth_(and__8262__auto__)){
var and__8262__auto____$1 = f;
if(cljs.core.truth_(and__8262__auto____$1)){
return goog.string.isUnicodeChar(f);
} else {
return and__8262__auto____$1;
}
} else {
return and__8262__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)))].join(''):s);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.first(cljs.pprint.consume(((function (f,s__$1){
return (function (s__$2){
if(cljs.core.empty_QMARK_(s__$2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
} else {
var m = RegExp("\\W\\w","g").exec(s__$2);
var offset = (function (){var and__8262__auto__ = m;
if(cljs.core.truth_(and__8262__auto__)){
return (m.index + (1));
} else {
return and__8262__auto__;
}
})();
if(cljs.core.truth_(offset)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s__$2,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s__$2,offset)))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$2,(offset + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$2,null], null);
}
}
});})(f,s__$1))
,s__$1)));
});
/**
 * Returns a proxy that wraps writer, capitalizing all words
 */
cljs.pprint.capitalize_word_writer = (function cljs$pprint$capitalize_word_writer(writer){
var last_was_whitespace_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.pprint.t_cljs$pprint17711 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint17711 = (function (writer,last_was_whitespace_QMARK_,meta17712){
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta17712 = meta17712;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint17711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (_17713,meta17712__$1){
var self__ = this;
var _17713__$1 = this;
return (new cljs.pprint.t_cljs$pprint17711(self__.writer,self__.last_was_whitespace_QMARK_,meta17712__$1));
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint17711.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_17713){
var self__ = this;
var _17713__$1 = this;
return self__.meta17712;
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint17711.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint17711.prototype.cljs$core$IWriter$_write$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__17714 = cljs.core._EQ_;
var expr__17715 = cljs.core.type(x);
if(cljs.core.truth_((pred__17714.cljs$core$IFn$_invoke$arity$2 ? pred__17714.cljs$core$IFn$_invoke$arity$2(String,expr__17715) : pred__17714.call(null,String,expr__17715)))){
var s = x;
cljs.core._write(self__.writer,cljs.pprint.capitalize_string(s.toLowerCase(),cljs.core.deref(self__.last_was_whitespace_QMARK_)));

if((s.length > (0))){
return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,(function (){var G__17717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1)));
return goog.string.isEmptyOrWhitespace(G__17717);
})());
} else {
return null;
}
} else {
if(cljs.core.truth_((pred__17714.cljs$core$IFn$_invoke$arity$2 ? pred__17714.cljs$core$IFn$_invoke$arity$2(Number,expr__17715) : pred__17714.call(null,Number,expr__17715)))){
var c = cljs.core.char$(x);
var mod_c = (cljs.core.truth_(cljs.core.deref(self__.last_was_whitespace_QMARK_))?clojure.string.upper_case(c):c);
cljs.core._write(self__.writer,mod_c);

return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(c));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__17715)].join('')));
}
}
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint17711.getBasis = ((function (last_was_whitespace_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$last_DASH_was_DASH_whitespace_QMARK_,cljs.core.cst$sym$meta17712], null);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint17711.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint17711.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint17711";

cljs.pprint.t_cljs$pprint17711.cljs$lang$ctorPrWriter = ((function (last_was_whitespace_QMARK_){
return (function (this__8945__auto__,writer__8946__auto__,opt__8947__auto__){
return cljs.core._write(writer__8946__auto__,"cljs.pprint/t_cljs$pprint17711");
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.__GT_t_cljs$pprint17711 = ((function (last_was_whitespace_QMARK_){
return (function cljs$pprint$capitalize_word_writer_$___GT_t_cljs$pprint17711(writer__$1,last_was_whitespace_QMARK___$1,meta17712){
return (new cljs.pprint.t_cljs$pprint17711(writer__$1,last_was_whitespace_QMARK___$1,meta17712));
});})(last_was_whitespace_QMARK_))
;

}

return (new cljs.pprint.t_cljs$pprint17711(writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, capitalizing the first word
 */
cljs.pprint.init_cap_writer = (function cljs$pprint$init_cap_writer(writer){
var capped = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
if(typeof cljs.pprint.t_cljs$pprint17718 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint17718 = (function (writer,capped,meta17719){
this.writer = writer;
this.capped = capped;
this.meta17719 = meta17719;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint17718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (capped){
return (function (_17720,meta17719__$1){
var self__ = this;
var _17720__$1 = this;
return (new cljs.pprint.t_cljs$pprint17718(self__.writer,self__.capped,meta17719__$1));
});})(capped))
;

cljs.pprint.t_cljs$pprint17718.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (capped){
return (function (_17720){
var self__ = this;
var _17720__$1 = this;
return self__.meta17719;
});})(capped))
;

cljs.pprint.t_cljs$pprint17718.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (capped){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(capped))
;

cljs.pprint.t_cljs$pprint17718.prototype.cljs$core$IWriter$_write$arity$2 = ((function (capped){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__17721 = cljs.core._EQ_;
var expr__17722 = cljs.core.type(x);
if(cljs.core.truth_((pred__17721.cljs$core$IFn$_invoke$arity$2 ? pred__17721.cljs$core$IFn$_invoke$arity$2(String,expr__17722) : pred__17721.call(null,String,expr__17722)))){
var s = clojure.string.lower_case(x);
if(cljs.core.not(cljs.core.deref(self__.capped))){
var m = RegExp("\\S","g").exec(s);
var offset = (function (){var and__8262__auto__ = m;
if(cljs.core.truth_(and__8262__auto__)){
return m.index;
} else {
return and__8262__auto__;
}
})();
if(cljs.core.truth_(offset)){
cljs.core._write(self__.writer,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,offset))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(offset + (1)))))].join(''));

return cljs.core.reset_BANG_(self__.capped,true);
} else {
return cljs.core._write(self__.writer,s);
}
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
}
} else {
if(cljs.core.truth_((pred__17721.cljs$core$IFn$_invoke$arity$2 ? pred__17721.cljs$core$IFn$_invoke$arity$2(Number,expr__17722) : pred__17721.call(null,Number,expr__17722)))){
var c = cljs.core.char$(x);
if(cljs.core.truth_((function (){var and__8262__auto__ = cljs.core.not(cljs.core.deref(self__.capped));
if(and__8262__auto__){
return goog.string.isUnicodeChar(c);
} else {
return and__8262__auto__;
}
})())){
cljs.core.reset_BANG_(self__.capped,true);

return cljs.core._write(self__.writer,clojure.string.upper_case(c));
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(c));
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__17722)].join('')));
}
}
});})(capped))
;

cljs.pprint.t_cljs$pprint17718.getBasis = ((function (capped){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$capped,cljs.core.cst$sym$meta17719], null);
});})(capped))
;

cljs.pprint.t_cljs$pprint17718.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint17718.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint17718";

cljs.pprint.t_cljs$pprint17718.cljs$lang$ctorPrWriter = ((function (capped){
return (function (this__8945__auto__,writer__8946__auto__,opt__8947__auto__){
return cljs.core._write(writer__8946__auto__,"cljs.pprint/t_cljs$pprint17718");
});})(capped))
;

cljs.pprint.__GT_t_cljs$pprint17718 = ((function (capped){
return (function cljs$pprint$init_cap_writer_$___GT_t_cljs$pprint17718(writer__$1,capped__$1,meta17719){
return (new cljs.pprint.t_cljs$pprint17718(writer__$1,capped__$1,meta17719));
});})(capped))
;

}

return (new cljs.pprint.t_cljs$pprint17718(writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR_17724 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (make_writer.cljs$core$IFn$_invoke$arity$1 ? make_writer.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : make_writer.call(null,cljs.core._STAR_out_STAR_));

try{return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_17724;
}});
/**
 * Returns the IWriter passed in wrapped in a pretty writer proxy, unless it's
 * already a pretty writer. Generally, it is unnecessary to call this function, since pprint,
 * write, and cl-format all call it if they need to. However if you want the state to be
 * preserved across calls, you will want to wrap them with this.
 * 
 * For example, when you want to generate column-aware output with multiple calls to cl-format,
 * do it like in this example:
 * 
 *  (defn print-table [aseq column-width]
 *    (binding [*out* (get-pretty-writer *out*)]
 *      (doseq [row aseq]
 *        (doseq [col row]
 *          (cl-format true "~4D~7,vT" col column-width))
 *        (prn))))
 * 
 * Now when you run:
 * 
 *  user> (print-table (map #(vector % (* % %) (* % % %)) (range 1 11)) 8)
 * 
 * It prints a table of squares and cubes for the numbers from 1 to 10:
 * 
 *     1      1       1
 *     2      4       8
 *     3      9      27
 *     4     16      64
 *     5     25     125
 *     6     36     216
 *     7     49     343
 *     8     64     512
 *     9     81     729
 *    10    100    1000
 */
cljs.pprint.get_pretty_writer = (function cljs$pprint$get_pretty_writer(writer){
if(cljs.core.truth_(cljs.pprint.pretty_writer_QMARK_(writer))){
return writer;
} else {
return cljs.pprint.pretty_writer(writer,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_);
}
});
/**
 * Make a newline if *out* is not already at the beginning of the line. If *out* is
 * not a pretty writer (which keeps track of columns), this function always outputs a newline.
 */
cljs.pprint.fresh_line = (function cljs$pprint$fresh_line(){
if(((!((cljs.core._STAR_out_STAR_ == null)))?((((cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === cljs.core._STAR_out_STAR_.cljs$core$IDeref$)))?true:(((!cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_))){
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_))))))){
return cljs.pprint.prn();
} else {
return null;
}
} else {
return cljs.pprint.prn();
}
});
cljs.pprint.absolute_tabulation = (function cljs$pprint$absolute_tabulation(params,navigator,offsets){
var colnum_17726 = cljs.core.cst$kw$colnum.cljs$core$IFn$_invoke$arity$1(params);
var colinc_17727 = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var current_17728 = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_))));
var space_count_17729 = (((current_17728 < colnum_17726))?(colnum_17726 - current_17728):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(colinc_17727,(0)))?(0):(colinc_17727 - cljs.core.rem((current_17728 - colnum_17726),colinc_17727))
));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_17729," "))], 0));

return navigator;
});
cljs.pprint.relative_tabulation = (function cljs$pprint$relative_tabulation(params,navigator,offsets){
var colrel_17730 = cljs.core.cst$kw$colnum.cljs$core$IFn$_invoke$arity$1(params);
var colinc_17731 = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var start_col_17732 = (colrel_17730 + cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))));
var offset_17733 = (((colinc_17731 > (0)))?cljs.core.rem(start_col_17732,colinc_17731):(0));
var space_count_17734 = (colrel_17730 + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),offset_17733))?(0):(colinc_17731 - offset_17733)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_17734," "))], 0));

return navigator;
});
cljs.pprint.format_logical_block = (function cljs$pprint$format_logical_block(params,navigator,offsets){
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause_count = cljs.core.count(clauses);
var prefix = (((clause_count > (1)))?cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.first(clauses)))):(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?"(":null));
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(((clause_count > (1)))?(1):(0)));
var suffix = (((clause_count > (2)))?cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(2))))):(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?")":null));
var vec__17735 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17735,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17735,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17738_17740 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17739_17741 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,suffix);

cljs.pprint.execute_sub_format(body,cljs.pprint.init_navigator(arg),cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17739_17741;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17738_17740;
}}


return navigator__$1;
});
cljs.pprint.set_indent = (function cljs$pprint$set_indent(params,navigator,offsets){
var relative_to = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$current:cljs.core.cst$kw$block);
cljs.pprint.pprint_indent(relative_to,cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params));

return navigator;
});
cljs.pprint.conditional_newline = (function cljs$pprint$conditional_newline(params,navigator,offsets){
var kind = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$mandatory:cljs.core.cst$kw$fill):(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$miser:cljs.core.cst$kw$linear));
cljs.pprint.pprint_newline(kind);

return navigator;
});
cljs.pprint.directive_table = cljs.core.PersistentHashMap.fromArrays(["A","S","D","B","O","X","R","P","C","F","E","G","$","%","&","|","~","\n","T","*","?","(",")","[",";","]","{","}","<",">","^","W","_","I"],[new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"A",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__17742_SHARP_,p2__17743_SHARP_,p3__17744_SHARP_){
return cljs.pprint.format_ascii(cljs.core.print_str,p1__17742_SHARP_,p2__17743_SHARP_,p3__17744_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"S",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__17745_SHARP_,p2__17746_SHARP_,p3__17747_SHARP_){
return cljs.pprint.format_ascii(cljs.core.pr_str,p1__17745_SHARP_,p2__17746_SHARP_,p3__17747_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"D",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__17748_SHARP_,p2__17749_SHARP_,p3__17750_SHARP_){
return cljs.pprint.format_integer((10),p1__17748_SHARP_,p2__17749_SHARP_,p3__17750_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"B",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__17751_SHARP_,p2__17752_SHARP_,p3__17753_SHARP_){
return cljs.pprint.format_integer((2),p1__17751_SHARP_,p2__17752_SHARP_,p3__17753_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"O",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__17754_SHARP_,p2__17755_SHARP_,p3__17756_SHARP_){
return cljs.pprint.format_integer((8),p1__17754_SHARP_,p2__17755_SHARP_,p3__17756_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"X",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__17757_SHARP_,p2__17758_SHARP_,p3__17759_SHARP_){
return cljs.pprint.format_integer((16),p1__17757_SHARP_,p2__17758_SHARP_,p3__17759_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"R",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(5),[cljs.core.cst$kw$base,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.first(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__17760_SHARP_,p2__17761_SHARP_,p3__17762_SHARP_){
return cljs.pprint.format_integer(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(p1__17760_SHARP_),p1__17760_SHARP_,p2__17761_SHARP_,p3__17762_SHARP_);
});
} else {
if(cljs.core.truth_((function (){var and__8262__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__8262__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__8262__auto__;
}
})())){
return (function (p1__17763_SHARP_,p2__17764_SHARP_,p3__17765_SHARP_){
return cljs.pprint.format_old_roman(p1__17763_SHARP_,p2__17764_SHARP_,p3__17765_SHARP_);
});
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__17766_SHARP_,p2__17767_SHARP_,p3__17768_SHARP_){
return cljs.pprint.format_new_roman(p1__17766_SHARP_,p2__17767_SHARP_,p3__17768_SHARP_);
});
} else {
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__17769_SHARP_,p2__17770_SHARP_,p3__17771_SHARP_){
return cljs.pprint.format_ordinal_english(p1__17769_SHARP_,p2__17770_SHARP_,p3__17771_SHARP_);
});
} else {
return (function (p1__17772_SHARP_,p2__17773_SHARP_,p3__17774_SHARP_){
return cljs.pprint.format_cardinal_english(p1__17772_SHARP_,p2__17773_SHARP_,p3__17774_SHARP_);
});

}
}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"P",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var navigator__$1 = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.pprint.relative_reposition(navigator,(-1)):navigator);
var strs = (cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","ies"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","s"], null));
var vec__17784 = cljs.pprint.next_arg(navigator__$1);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17784,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17784,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg,(1)))?cljs.core.first(strs):cljs.core.second(strs))], 0));

return navigator__$2;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"C",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$char_DASH_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.pretty_character;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.readable_character;
} else {
return cljs.pprint.plain_character;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"F",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(5),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.fixed_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"E",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(7),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$exponentchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.exponential_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"G",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(7),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$exponentchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.general_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"$",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),Number], null),cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.dollar_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"%",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__9319__auto___17802 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
var i_17803 = (0);
while(true){
if((i_17803 < n__9319__auto___17802)){
cljs.pprint.prn();

var G__17804 = (i_17803 + (1));
i_17803 = G__17804;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"&",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var cnt_17805 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_17805 > (0))){
cljs.pprint.fresh_line();
} else {
}

var n__9319__auto___17806 = (cnt_17805 - (1));
var i_17807 = (0);
while(true){
if((i_17807 < n__9319__auto___17806)){
cljs.pprint.prn();

var G__17808 = (i_17807 + (1));
i_17807 = G__17808;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"|",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__9319__auto___17809 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
var i_17810 = (0);
while(true){
if((i_17810 < n__9319__auto___17809)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\f"], 0));

var G__17811 = (i_17810 + (1));
i_17810 = G__17811;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"~",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params__$1);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"~"))], 0));

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"\n",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))){
cljs.pprint.prn();
} else {
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"T",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(2),[cljs.core.cst$kw$colnum,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$at,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__17775_SHARP_,p2__17776_SHARP_,p3__17777_SHARP_){
return cljs.pprint.relative_tabulation(p1__17775_SHARP_,p2__17776_SHARP_,p3__17777_SHARP_);
});
} else {
return (function (p1__17778_SHARP_,p2__17779_SHARP_,p3__17780_SHARP_){
return cljs.pprint.absolute_tabulation(p1__17778_SHARP_,p2__17779_SHARP_,p3__17780_SHARP_);
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"*",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params__$1);
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))){
return cljs.pprint.absolute_reposition(navigator,n);
} else {
return cljs.pprint.relative_reposition(navigator,(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?(- n):n));
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"?",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (params__$1,navigator,offsets){
var vec__17787 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17787,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17787,(1),null);
return cljs.pprint.execute_sub_format(subformat,navigator__$1,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1));
});
} else {
return (function (params__$1,navigator,offsets){
var vec__17790 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17790,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17790,(1),null);
var vec__17793 = cljs.pprint.next_arg(navigator__$1);
var subargs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17793,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17793,(1),null);
var sub_navigator = cljs.pprint.init_navigator(subargs);
cljs.pprint.execute_sub_format(subformat,sub_navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1));

return navigator__$2;
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"(",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,")",cljs.core.cst$kw$allows_DASH_separator,null,cljs.core.cst$kw$else,null], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
var mod_case_writer = (cljs.core.truth_((function (){var and__8262__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__8262__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__8262__auto__;
}
})())?cljs.pprint.upcase_writer:(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.capitalize_word_writer:(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.init_cap_writer:cljs.pprint.downcase_writer
)));
return ((function (mod_case_writer){
return (function (p1__17781_SHARP_,p2__17782_SHARP_,p3__17783_SHARP_){
return cljs.pprint.modify_case(mod_case_writer,p1__17781_SHARP_,p2__17782_SHARP_,p3__17783_SHARP_);
});
;})(mod_case_writer))
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,")",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"[",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$selector,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,"]",cljs.core.cst$kw$allows_DASH_separator,true,cljs.core.cst$kw$else,cljs.core.cst$kw$last], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.boolean_conditional;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.check_arg_conditional;
} else {
return cljs.pprint.choice_conditional;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,";",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(2),[cljs.core.cst$kw$min_DASH_remaining,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$max_DASH_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$separator,true], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"]",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"{",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$max_DASH_iterations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$right,"}",cljs.core.cst$kw$allows_DASH_separator,false], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_((function (){var and__8262__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__8262__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__8262__auto__;
}
})())){
return cljs.pprint.iterate_main_sublists;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_list_of_sublists;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_main_list;
} else {
return cljs.pprint.iterate_sublist;

}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"}",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"<",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,">",cljs.core.cst$kw$allows_DASH_separator,true,cljs.core.cst$kw$else,cljs.core.cst$kw$first], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.logical_block_or_justify;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,">",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"^",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(3),[cljs.core.cst$kw$arg1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$arg2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$arg3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var arg1 = cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(params__$1);
var arg2 = cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(params__$1);
var arg3 = cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(params__$1);
var exit = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.cst$kw$colon_DASH_up_DASH_arrow:cljs.core.cst$kw$up_DASH_arrow);
if(cljs.core.truth_((function (){var and__8262__auto__ = arg1;
if(cljs.core.truth_(and__8262__auto__)){
var and__8262__auto____$1 = arg2;
if(cljs.core.truth_(and__8262__auto____$1)){
return arg3;
} else {
return and__8262__auto____$1;
}
} else {
return and__8262__auto__;
}
})())){
if(((arg1 <= arg2)) && ((arg2 <= arg3))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_((function (){var and__8262__auto__ = arg1;
if(cljs.core.truth_(and__8262__auto__)){
return arg2;
} else {
return and__8262__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,arg2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_(arg1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if((cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1))):cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}

}
}
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"W",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_((function (){var or__8274__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
}
})())){
var bindings = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,null,cljs.core.cst$kw$length,null], null):cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pretty,true], null):cljs.core.PersistentVector.EMPTY));
return ((function (bindings){
return (function (params__$1,navigator,offsets){
var vec__17796 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17796,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17796,(1),null);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.pprint.write,arg,bindings))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$up_DASH_arrow,navigator__$1], null);
} else {
return navigator__$1;
}
});
;})(bindings))
} else {
return (function (params__$1,navigator,offsets){
var vec__17799 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17799,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17799,(1),null);
if(cljs.core.truth_(cljs.pprint.write_out(arg))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$up_DASH_arrow,navigator__$1], null);
} else {
return navigator__$1;
}
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"_",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.conditional_newline;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"I",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.set_indent;
})], null)]);
cljs.pprint.param_pattern = /^([vV]|#|('.)|([+-]?\d+)|(?=,))/;
cljs.pprint.special_params = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$remaining_DASH_arg_DASH_count,null,cljs.core.cst$kw$parameter_DASH_from_DASH_args,null], null), null);
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__17812){
var vec__17813 = p__17812;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17813,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17813,(1),null);
var saw_comma = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17813,(2),null);
var m = (new RegExp(cljs.pprint.param_pattern.source,"g"));
var param = m.exec(s);
if(cljs.core.truth_(param)){
var token_str = cljs.core.first(param);
var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,m.lastIndex);
var new_offset = (offset + m.lastIndex);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(",",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(remainder,(0))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder,new_offset,false], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,(1)),(new_offset + (1)),true], null)], null);
}
} else {
if(cljs.core.truth_(saw_comma)){
return cljs.pprint.format_error("Badly formed parameters in format directive",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset], null)], null);
}
}
});
cljs.pprint.extract_params = (function cljs$pprint$extract_params(s,offset){
return cljs.pprint.consume(cljs.pprint.extract_param,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,false], null));
});
/**
 * Translate the string representation of a param to the internalized
 *                                    representation
 */
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__17816){
var vec__17817 = p__17816;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17817,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17817,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(0)))?null:(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["V",null,"v",null], null), null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?cljs.core.cst$kw$parameter_DASH_from_DASH_args:(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?cljs.core.cst$kw$remaining_DASH_arg_DASH_count:(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(1)):parseInt(p,(10))
)))),offset], null);
});
cljs.pprint.flag_defs = new cljs.core.PersistentArrayMap(null, 2, [":",cljs.core.cst$kw$colon,"@",cljs.core.cst$kw$at], null);
cljs.pprint.extract_flags = (function cljs$pprint$extract_flags(s,offset){
return cljs.pprint.consume((function (p__17820){
var vec__17821 = p__17820;
var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17821,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17821,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17821,(2),null);
if(cljs.core.empty_QMARK_(s__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
} else {
var flag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.flag_defs,cljs.core.first(s__$1));
if(cljs.core.truth_(flag)){
if(cljs.core.contains_QMARK_(flags,flag)){
return cljs.pprint.format_error(["Flag \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(s__$1)),"\" appears more than once in a directive"].join(''),offset__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$1,(1)),(offset__$1 + (1)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(flags,flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,offset__$1], null))], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.pprint.check_flags = (function cljs$pprint$check_flags(def,flags){
var allowed = cljs.core.cst$kw$flags.cljs$core$IFn$_invoke$arity$1(def);
if(cljs.core.truth_((function (){var and__8262__auto__ = cljs.core.not(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__8262__auto__){
return cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__8262__auto__;
}
})())){
cljs.pprint.format_error(["\"@\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__8262__auto__ = cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__8262__auto__){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__8262__auto__;
}
})())){
cljs.pprint.format_error(["\":\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__8262__auto__ = cljs.core.not(cljs.core.cst$kw$both.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__8262__auto__){
var and__8262__auto____$1 = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags);
if(cljs.core.truth_(and__8262__auto____$1)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__8262__auto____$1;
}
} else {
return and__8262__auto__;
}
})())){
return cljs.pprint.format_error(["Cannot combine \"@\" and \":\" flags for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),(function (){var x__8633__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags),(1));
var y__8634__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags),(1));
return ((x__8633__auto__ < y__8634__auto__) ? x__8633__auto__ : y__8634__auto__);
})());
} else {
return null;
}
});
/**
 * Takes a directive definition and the list of actual parameters and
 * a map of flags and returns a map of the parameters and flags with defaults
 * filled in. We check to make sure that there are the right types and number
 * of parameters as well.
 */
cljs.pprint.map_params = (function cljs$pprint$map_params(def,params,flags,offset){
cljs.pprint.check_flags(def,flags);

if((cljs.core.count(params) > cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)))){
cljs.pprint.format_error(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"Too many parameters for directive \"~C\": ~D~:* ~[were~;was~:;were~] specified but only ~D~:* ~[are~;is~:;are~] allowed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def),cljs.core.count(params),cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def))], 0)),cljs.core.second(cljs.core.first(params)));
} else {
}

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__17824_SHARP_,p2__17825_SHARP_){
var val = cljs.core.first(p1__17824_SHARP_);
if(!(((val == null)) || (cljs.core.contains_QMARK_(cljs.pprint.special_params,val)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(cljs.core.second(p2__17825_SHARP_)),cljs.core.type(val))))){
return cljs.pprint.format_error(["Parameter ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(p2__17825_SHARP_)))," has bad type in directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(val))].join(''),cljs.core.second(p1__17824_SHARP_));
} else {
return null;
}
}),params,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)));

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse((function (){var iter__9156__auto__ = (function cljs$pprint$map_params_$_iter__17829(s__17830){
return (new cljs.core.LazySeq(null,(function (){
var s__17830__$1 = s__17830;
while(true){
var temp__5535__auto__ = cljs.core.seq(s__17830__$1);
if(temp__5535__auto__){
var s__17830__$2 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17830__$2)){
var c__9154__auto__ = cljs.core.chunk_first(s__17830__$2);
var size__9155__auto__ = cljs.core.count(c__9154__auto__);
var b__17832 = cljs.core.chunk_buffer(size__9155__auto__);
if((function (){var i__17831 = (0);
while(true){
if((i__17831 < size__9155__auto__)){
var vec__17833 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9154__auto__,i__17831);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17833,(0),null);
var vec__17836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17833,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17836,(0),null);
cljs.core.chunk_append(b__17832,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__17845 = (i__17831 + (1));
i__17831 = G__17845;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17832),cljs$pprint$map_params_$_iter__17829(cljs.core.chunk_rest(s__17830__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17832),null);
}
} else {
var vec__17839 = cljs.core.first(s__17830__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17839,(0),null);
var vec__17842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17839,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17842,(0),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__17829(cljs.core.rest(s__17830__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9156__auto__(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def));
})())),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__17826_SHARP_,p2__17827_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,p1__17826_SHARP_,p2__17827_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__17828_SHARP_){
return cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__17828_SHARP_,(1)));
}),cljs.core.zipmap(cljs.core.keys(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)),params))),flags], 0));
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__17846 = cljs.pprint.extract_params(s,offset);
var raw_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17846,(0),null);
var vec__17849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17846,(1),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17849,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17849,(1),null);
var vec__17852 = cljs.pprint.extract_flags(rest,offset__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17852,(0),null);
var vec__17855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17852,(1),null);
var rest__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17855,(0),null);
var offset__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17855,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17855,(2),null);
var directive = cljs.core.first(rest__$1);
var def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.directive_table,clojure.string.upper_case(directive));
var params = (cljs.core.truth_(def)?cljs.pprint.map_params(def,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.translate_param,raw_params),flags,offset__$2):null);
if(cljs.core.not(directive)){
cljs.pprint.format_error("Format string ended in the middle of a directive",offset__$2);
} else {
}

if(cljs.core.not(def)){
cljs.pprint.format_error(["Directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(directive),"\" is undefined"].join(''),offset__$2);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive((function (){var fexpr__17858 = cljs.core.cst$kw$generator_DASH_fn.cljs$core$IFn$_invoke$arity$1(def);
return (fexpr__17858.cljs$core$IFn$_invoke$arity$2 ? fexpr__17858.cljs$core$IFn$_invoke$arity$2(params,offset__$2) : fexpr__17858.call(null,params,offset__$2));
})(),def,params,offset__$2,null,null,null)),(function (){var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(rest__$1,(1));
var offset__$3 = (offset__$2 + (1));
var trim_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def))) && (cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params)));
var trim_count = ((trim_QMARK_)?cljs.pprint.prefix_count(remainder,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","\t"], null)):(0));
var remainder__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,trim_count);
var offset__$4 = (offset__$3 + trim_count);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder__$1,offset__$4], null);
})()], null);
});
cljs.pprint.compile_raw_string = (function cljs$pprint$compile_raw_string(s,offset){
return (new cljs.pprint.compiled_directive((function (_,a,___$1){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0));

return a;
}),null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$string,s], null),offset,null,null,null));
});
cljs.pprint.right_bracket = (function cljs$pprint$right_bracket(this$){
return cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.separator_QMARK_ = (function cljs$pprint$separator_QMARK_(this$){
return cljs.core.cst$kw$separator.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.else_separator_QMARK_ = (function cljs$pprint$else_separator_QMARK_(this$){
var and__8262__auto__ = cljs.core.cst$kw$separator.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
if(cljs.core.truth_(and__8262__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$));
} else {
return and__8262__auto__;
}
});
cljs.pprint.process_bracket = (function cljs$pprint$process_bracket(this$,remainder){
var vec__17859 = (function (){var G__17862 = cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$));
var G__17863 = cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$);
var G__17864 = remainder;
return (cljs.pprint.collect_clauses.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.collect_clauses.cljs$core$IFn$_invoke$arity$3(G__17862,G__17863,G__17864) : cljs.pprint.collect_clauses.call(null,G__17862,G__17863,G__17864));
})();
var subex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17859,(0),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17859,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),cljs.pprint.tuple_map(subex,cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$))], 0)),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$),null,null,null)),remainder__$1], null);
});
cljs.pprint.process_clause = (function cljs$pprint$process_clause(bracket_info,offset,remainder){
return cljs.pprint.consume((function (remainder__$1){
if(cljs.core.empty_QMARK_(remainder__$1)){
return cljs.pprint.format_error("No closing bracket found.",offset);
} else {
var this$ = cljs.core.first(remainder__$1);
var remainder__$2 = cljs.core.next(remainder__$1);
if(cljs.core.truth_(cljs.pprint.right_bracket(this$))){
return cljs.pprint.process_bracket(this$,remainder__$2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(bracket_info),cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$right_DASH_bracket,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),null,remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.else_separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$else,null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$separator,null,null,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$2], null);

}
}
}
}
}
}),remainder);
});
cljs.pprint.collect_clauses = (function cljs$pprint$collect_clauses(bracket_info,offset,remainder){
return cljs.core.second(cljs.pprint.consume((function (p__17865){
var vec__17866 = p__17865;
var clause_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17866,(0),null);
var saw_else = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17866,(1),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17866,(2),null);
var vec__17869 = cljs.pprint.process_clause(bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17869,(0),null);
var vec__17872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17869,(1),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17872,(0),null);
var right_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17872,(1),null);
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17872,(2),null);
var remainder__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17872,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$right_DASH_bracket)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(saw_else)?cljs.core.cst$kw$else:cljs.core.cst$kw$clauses),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.cst$kw$right_DASH_params,right_params])], 0)),remainder__$2], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$else)){
if(cljs.core.truth_(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(clause_map))){
return cljs.pprint.format_error("Two else clauses (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("An else clause (\"~:;\") is in a bracket type that doesn't support it.",offset);
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$first,cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))) && (cljs.core.seq(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(clause_map)))){
return cljs.pprint.format_error("The else clause (\"~:;\") is only allowed in the first position for this directive.",offset);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$first,cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$else,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.cst$kw$else_DASH_params,else_params], null)], 0)),false,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),true,remainder__$2], null)], null);
}

}
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$separator)){
if(cljs.core.truth_(saw_else)){
return cljs.pprint.format_error("A plain clause (with \"~;\") follows an else clause (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(cljs.core.cst$kw$allows_DASH_separator.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("A separator (\"~;\") is in a bracket type that doesn't support it.",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),false,remainder__$2], null)], null);

}
}
} else {
return null;
}
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,cljs.core.PersistentVector.EMPTY], null),false,remainder], null)));
});
/**
 * Take a linearly compiled format and process the bracket directives to give it
 * the appropriate tree structure
 */
cljs.pprint.process_nesting = (function cljs$pprint$process_nesting(format){
return cljs.core.first(cljs.pprint.consume((function (remainder){
var this$ = cljs.core.first(remainder);
var remainder__$1 = cljs.core.next(remainder);
var bracket = cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(bracket))){
return cljs.pprint.process_bracket(this$,remainder__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$1], null);
}
}),format));
});
/**
 * Compiles format-str into a compiled format which can be used as an argument
 * to cl-format just like a plain format string. Use this function for improved
 * performance when you're using the same format string repeatedly
 */
cljs.pprint.compile_format = (function cljs$pprint$compile_format(format_str){
var _STAR_format_str_STAR_17875 = cljs.pprint._STAR_format_str_STAR_;
cljs.pprint._STAR_format_str_STAR_ = format_str;

try{return cljs.pprint.process_nesting(cljs.core.first(cljs.pprint.consume(((function (_STAR_format_str_STAR_17875){
return (function (p__17876){
var vec__17877 = p__17876;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17877,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17877,(1),null);
if(cljs.core.empty_QMARK_(s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,s], null);
} else {
var tilde = s.indexOf("~");
if((tilde < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(s,offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(offset + s.length)], null)], null);
} else {
if((tilde === (0))){
return cljs.pprint.compile_directive(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)),(offset + (1)));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),tilde),offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,tilde),(tilde + offset)], null)], null);

}
}
}
});})(_STAR_format_str_STAR_17875))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
}finally {cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR_17875;
}});
/**
 * determine whether a given compiled format has any directives that depend on the
 * column number or pretty printing
 */
cljs.pprint.needs_pretty = (function cljs$pprint$needs_pretty(format){
var format__$1 = format;
while(true){
if(cljs.core.empty_QMARK_(format__$1)){
return false;
} else {
if(cljs.core.truth_((function (){var or__8274__auto__ = cljs.core.cst$kw$pretty.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$flags.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1))));
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
var or__8274__auto____$1 = cljs.core.some(cljs.pprint.needs_pretty,cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
if(cljs.core.truth_(or__8274__auto____$1)){
return or__8274__auto____$1;
} else {
return cljs.core.some(cljs.pprint.needs_pretty,cljs.core.first(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
}
}
})())){
return true;
} else {
var G__17880 = cljs.core.next(format__$1);
format__$1 = G__17880;
continue;
}
}
break;
}
});
/**
 * Executes the format with the arguments.
 */
cljs.pprint.execute_format = (function cljs$pprint$execute_format(var_args){
var G__17882 = arguments.length;
switch (G__17882) {
case 3:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 = (function (stream,format,args){
var sb = (new goog.string.StringBuffer());
var real_stream = (((cljs.core.not(stream)) || (stream === true))?(new cljs.core.StringBufferWriter(sb)):stream);
var wrapped_stream = (cljs.core.truth_((function (){var and__8262__auto__ = cljs.pprint.needs_pretty(format);
if(cljs.core.truth_(and__8262__auto__)){
return cljs.core.not(cljs.pprint.pretty_writer_QMARK_(real_stream));
} else {
return and__8262__auto__;
}
})())?cljs.pprint.get_pretty_writer(real_stream):real_stream);
var _STAR_out_STAR_17883 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = wrapped_stream;

try{try{cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(format,args);
}finally {if(!((real_stream === wrapped_stream))){
cljs.core._flush(wrapped_stream);
} else {
}
}
if(cljs.core.not(stream)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
if(stream === true){
return cljs.core.string_print([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
} else {
return null;

}
}
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_17883;
}});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2 = (function (format,args){
cljs.pprint.map_passing_context((function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_(context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__17884 = cljs.pprint.realize_parameter_list(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17884,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17884,(1),null);
var vec__17887 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17887,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17887,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,cljs.core.cst$kw$base_DASH_args,args__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format);

return null;
});

cljs.pprint.execute_format.cljs$lang$maxFixedArity = 3;

cljs.pprint.cached_compile = cljs.core.memoize(cljs.pprint.compile_format);
/**
 * Installs a function as a new method of multimethod associated with dispatch-value. 
 */
cljs.pprint.use_method = (function cljs$pprint$use_method(multifn,dispatch_val,func){
return cljs.core._add_method(multifn,dispatch_val,func);
});
cljs.pprint.reader_macros = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$sym$quote,"'",cljs.core.cst$sym$var,"#'",cljs.core.cst$sym$clojure$core_SLASH_deref,"@",cljs.core.cst$sym$clojure$core_SLASH_unquote,"~",cljs.core.cst$sym$cljs$core_SLASH_deref,"@",cljs.core.cst$sym$cljs$core_SLASH_unquote,"~"], null);
cljs.pprint.pprint_reader_macro = (function cljs$pprint$pprint_reader_macro(alis){
var macro_char = (function (){var G__17891 = cljs.core.first(alis);
return (cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1(G__17891) : cljs.pprint.reader_macros.call(null,G__17891));
})();
if(cljs.core.truth_((function (){var and__8262__auto__ = macro_char;
if(cljs.core.truth_(and__8262__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(alis));
} else {
return and__8262__auto__;
}
})())){
cljs.core._write(cljs.core._STAR_out_STAR_,macro_char);

cljs.pprint.write_out(cljs.core.second(alis));

return true;
} else {
return null;
}
});
cljs.pprint.pprint_simple_list = (function cljs$pprint$pprint_simple_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17892_17895 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17893_17896 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var length_count17894_17897 = (0);
var alis_17898__$1 = cljs.core.seq(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count17894_17897 < cljs.core._STAR_print_length_STAR_))){
if(alis_17898__$1){
cljs.pprint.write_out(cljs.core.first(alis_17898__$1));

if(cljs.core.next(alis_17898__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__17899 = (length_count17894_17897 + (1));
var G__17900 = cljs.core.next(alis_17898__$1);
length_count17894_17897 = G__17899;
alis_17898__$1 = G__17900;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17893_17896;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17892_17895;
}}

return null;
});
cljs.pprint.pprint_list = (function cljs$pprint$pprint_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
return cljs.pprint.pprint_simple_list(alis);
} else {
return null;
}
});
cljs.pprint.pprint_vector = (function cljs$pprint$pprint_vector(avec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17901_17904 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17902_17905 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count17903_17906 = (0);
var aseq_17907 = cljs.core.seq(avec);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count17903_17906 < cljs.core._STAR_print_length_STAR_))){
if(aseq_17907){
cljs.pprint.write_out(cljs.core.first(aseq_17907));

if(cljs.core.next(aseq_17907)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__17908 = (length_count17903_17906 + (1));
var G__17909 = cljs.core.next(aseq_17907);
length_count17903_17906 = G__17908;
aseq_17907 = G__17909;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17902_17905;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17901_17904;
}}

return null;
});
cljs.pprint.pprint_array = (function (){var format_in__17000__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__17001__auto__ = ((typeof format_in__17000__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17000__auto__) : cljs.pprint.cached_compile.call(null,format_in__17000__auto__)):format_in__17000__auto__);
return ((function (format_in__17000__auto__,cf__17001__auto__){
return (function() { 
var G__17910__delegate = function (args__17002__auto__){
var navigator__17003__auto__ = cljs.pprint.init_navigator(args__17002__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17001__auto__,navigator__17003__auto__);
};
var G__17910 = function (var_args){
var args__17002__auto__ = null;
if (arguments.length > 0) {
var G__17911__i = 0, G__17911__a = new Array(arguments.length -  0);
while (G__17911__i < G__17911__a.length) {G__17911__a[G__17911__i] = arguments[G__17911__i + 0]; ++G__17911__i;}
  args__17002__auto__ = new cljs.core.IndexedSeq(G__17911__a,0,null);
} 
return G__17910__delegate.call(this,args__17002__auto__);};
G__17910.cljs$lang$maxFixedArity = 0;
G__17910.cljs$lang$applyTo = (function (arglist__17912){
var args__17002__auto__ = cljs.core.seq(arglist__17912);
return G__17910__delegate(args__17002__auto__);
});
G__17910.cljs$core$IFn$_invoke$arity$variadic = G__17910__delegate;
return G__17910;
})()
;
;})(format_in__17000__auto__,cf__17001__auto__))
})();
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
var vec__17913 = ((!(cljs.core.record_QMARK_(amap)))?(function (){var fexpr__17916 = new cljs.core.Var(function(){return cljs.core.lift_ns;},cljs.core.cst$sym$cljs$core_SLASH_lift_DASH_ns,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$core,cljs.core.cst$sym$lift_DASH_ns,"cljs/core.cljs",15,1,9841,9841,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$m], null)),"Returns [lifted-ns lifted-map] or nil if m can't be lifted.",(cljs.core.truth_(cljs.core.lift_ns)?cljs.core.lift_ns.cljs$lang$test:null)]));
return (fexpr__17916.cljs$core$IFn$_invoke$arity$1 ? fexpr__17916.cljs$core$IFn$_invoke$arity$1(amap) : fexpr__17916.call(null,amap));
})():null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17913,(0),null);
var lift_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17913,(1),null);
var amap__$1 = (function (){var or__8274__auto__ = lift_map;
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return amap;
}
})();
var prefix = (cljs.core.truth_(ns)?["#:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"{"].join(''):"{");
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17917_17922 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17918_17923 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,"}");

var length_count17919_17924 = (0);
var aseq_17925 = cljs.core.seq(amap__$1);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count17919_17924 < cljs.core._STAR_print_length_STAR_))){
if(aseq_17925){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17920_17926 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17921_17927 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out(cljs.core.ffirst(aseq_17925));

cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

cljs.pprint._STAR_current_length_STAR_ = (0);

cljs.pprint.write_out(cljs.core.fnext(cljs.core.first(aseq_17925)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17921_17927;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17920_17926;
}}


if(cljs.core.next(aseq_17925)){
cljs.core._write(cljs.core._STAR_out_STAR_,", ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__17928 = (length_count17919_17924 + (1));
var G__17929 = cljs.core.next(aseq_17925);
length_count17919_17924 = G__17928;
aseq_17925 = G__17929;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17918_17923;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17917_17922;
}}

return null;
});
cljs.pprint.pprint_simple_default = (function cljs$pprint$pprint_simple_default(obj){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0)));
});
cljs.pprint.pprint_set = (function (){var format_in__17000__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__17001__auto__ = ((typeof format_in__17000__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17000__auto__) : cljs.pprint.cached_compile.call(null,format_in__17000__auto__)):format_in__17000__auto__);
return ((function (format_in__17000__auto__,cf__17001__auto__){
return (function() { 
var G__17930__delegate = function (args__17002__auto__){
var navigator__17003__auto__ = cljs.pprint.init_navigator(args__17002__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17001__auto__,navigator__17003__auto__);
};
var G__17930 = function (var_args){
var args__17002__auto__ = null;
if (arguments.length > 0) {
var G__17931__i = 0, G__17931__a = new Array(arguments.length -  0);
while (G__17931__i < G__17931__a.length) {G__17931__a[G__17931__i] = arguments[G__17931__i + 0]; ++G__17931__i;}
  args__17002__auto__ = new cljs.core.IndexedSeq(G__17931__a,0,null);
} 
return G__17930__delegate.call(this,args__17002__auto__);};
G__17930.cljs$lang$maxFixedArity = 0;
G__17930.cljs$lang$applyTo = (function (arglist__17932){
var args__17002__auto__ = cljs.core.seq(arglist__17932);
return G__17930__delegate(args__17002__auto__);
});
G__17930.cljs$core$IFn$_invoke$arity$variadic = G__17930__delegate;
return G__17930;
})()
;
;})(format_in__17000__auto__,cf__17001__auto__))
})();
cljs.pprint.type_map = new cljs.core.PersistentArrayMap(null, 2, ["core$future_call","Future","core$promise","Promise"], null);
/**
 * Map ugly type names to something simpler
 */
cljs.pprint.map_ref_type = (function cljs$pprint$map_ref_type(name){
var or__8274__auto__ = (function (){var temp__5535__auto__ = cljs.core.re_find(/^[^$]+\$[^$]+/,name);
if(cljs.core.truth_(temp__5535__auto__)){
var match = temp__5535__auto__;
return (cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1(match) : cljs.pprint.type_map.call(null,match));
} else {
return null;
}
})();
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return name;
}
});
cljs.pprint.pprint_ideref = (function cljs$pprint$pprint_ideref(o){
var prefix = ["#<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.map_ref_type(cljs.core.type(o).name)),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.getUid(o)),": "].join('');
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17933_17937 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17934_17938 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,">");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(- (cljs.core.count(prefix) - (2))));

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

cljs.pprint.write_out((((function (){var and__8262__auto__ = ((!((o == null)))?((((o.cljs$lang$protocol_mask$partition1$ & (1))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IPending$)))?true:(((!o.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o));
if(and__8262__auto__){
return !(cljs.core._realized_QMARK_(o));
} else {
return and__8262__auto__;
}
})())?cljs.core.cst$kw$not_DASH_delivered:cljs.core.deref(o)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17934_17938;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17933_17937;
}}

return null;
});
cljs.pprint.pprint_pqueue = (function (){var format_in__17000__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__17001__auto__ = ((typeof format_in__17000__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17000__auto__) : cljs.pprint.cached_compile.call(null,format_in__17000__auto__)):format_in__17000__auto__);
return ((function (format_in__17000__auto__,cf__17001__auto__){
return (function() { 
var G__17939__delegate = function (args__17002__auto__){
var navigator__17003__auto__ = cljs.pprint.init_navigator(args__17002__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17001__auto__,navigator__17003__auto__);
};
var G__17939 = function (var_args){
var args__17002__auto__ = null;
if (arguments.length > 0) {
var G__17940__i = 0, G__17940__a = new Array(arguments.length -  0);
while (G__17940__i < G__17940__a.length) {G__17940__a[G__17940__i] = arguments[G__17940__i + 0]; ++G__17940__i;}
  args__17002__auto__ = new cljs.core.IndexedSeq(G__17940__a,0,null);
} 
return G__17939__delegate.call(this,args__17002__auto__);};
G__17939.cljs$lang$maxFixedArity = 0;
G__17939.cljs$lang$applyTo = (function (arglist__17941){
var args__17002__auto__ = cljs.core.seq(arglist__17941);
return G__17939__delegate(args__17002__auto__);
});
G__17939.cljs$core$IFn$_invoke$arity$variadic = G__17939__delegate;
return G__17939;
})()
;
;})(format_in__17000__auto__,cf__17001__auto__))
})();
cljs.pprint.type_dispatcher = (function cljs$pprint$type_dispatcher(obj){
if((obj instanceof cljs.core.PersistentQueue)){
return cljs.core.cst$kw$queue;
} else {
if(((!((obj == null)))?((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$)))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj))){
return cljs.core.cst$kw$deref;
} else {
if((obj instanceof cljs.core.Symbol)){
return cljs.core.cst$kw$symbol;
} else {
if(cljs.core.seq_QMARK_(obj)){
return cljs.core.cst$kw$list;
} else {
if(cljs.core.map_QMARK_(obj)){
return cljs.core.cst$kw$map;
} else {
if(cljs.core.vector_QMARK_(obj)){
return cljs.core.cst$kw$vector;
} else {
if(cljs.core.set_QMARK_(obj)){
return cljs.core.cst$kw$set;
} else {
if((obj == null)){
return null;
} else {
return cljs.core.cst$kw$default;

}
}
}
}
}
}
}
}
});
if(typeof cljs.pprint.simple_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for simple data structure format.
 */
cljs.pprint.simple_dispatch = (function (){var method_table__9329__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9330__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9331__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9332__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9333__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","simple-dispatch"),cljs.pprint.type_dispatcher,cljs.core.cst$kw$default,hierarchy__9333__auto__,method_table__9329__auto__,prefer_table__9330__auto__,method_cache__9331__auto__,cached_hierarchy__9332__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$list,cljs.pprint.pprint_list);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$vector,cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$map,cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$set,cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,null,(function (){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)));
}));
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$default,cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
/**
 * Figure out which kind of brackets to use
 */
cljs.pprint.brackets = (function cljs$pprint$brackets(form){
if(cljs.core.vector_QMARK_(form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);
}
});
/**
 * Pretty print a single reference (import, use, etc.) from a namespace decl
 */
cljs.pprint.pprint_ns_reference = (function cljs$pprint$pprint_ns_reference(reference){
if(cljs.core.sequential_QMARK_(reference)){
var vec__17943 = cljs.pprint.brackets(reference);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17943,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17943,(1),null);
var vec__17946 = reference;
var seq__17947 = cljs.core.seq(vec__17946);
var first__17948 = cljs.core.first(seq__17947);
var seq__17947__$1 = cljs.core.next(seq__17947);
var keyw = first__17948;
var args = seq__17947__$1;
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17949_17965 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17950_17966 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start,null,end);

var fexpr__17951_17967 = (function (){var format_in__17000__auto__ = "~w~:i";
var cf__17001__auto__ = ((typeof format_in__17000__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17000__auto__) : cljs.pprint.cached_compile.call(null,format_in__17000__auto__)):format_in__17000__auto__);
return ((function (format_in__17000__auto__,cf__17001__auto__,_STAR_current_level_STAR_17949_17965,_STAR_current_length_STAR_17950_17966,vec__17943,start,end,vec__17946,seq__17947,first__17948,seq__17947__$1,keyw,args){
return (function() { 
var G__17968__delegate = function (args__17002__auto__){
var navigator__17003__auto__ = cljs.pprint.init_navigator(args__17002__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17001__auto__,navigator__17003__auto__);
};
var G__17968 = function (var_args){
var args__17002__auto__ = null;
if (arguments.length > 0) {
var G__17969__i = 0, G__17969__a = new Array(arguments.length -  0);
while (G__17969__i < G__17969__a.length) {G__17969__a[G__17969__i] = arguments[G__17969__i + 0]; ++G__17969__i;}
  args__17002__auto__ = new cljs.core.IndexedSeq(G__17969__a,0,null);
} 
return G__17968__delegate.call(this,args__17002__auto__);};
G__17968.cljs$lang$maxFixedArity = 0;
G__17968.cljs$lang$applyTo = (function (arglist__17970){
var args__17002__auto__ = cljs.core.seq(arglist__17970);
return G__17968__delegate(args__17002__auto__);
});
G__17968.cljs$core$IFn$_invoke$arity$variadic = G__17968__delegate;
return G__17968;
})()
;
;})(format_in__17000__auto__,cf__17001__auto__,_STAR_current_level_STAR_17949_17965,_STAR_current_length_STAR_17950_17966,vec__17943,start,end,vec__17946,seq__17947,first__17948,seq__17947__$1,keyw,args))
})();
(fexpr__17951_17967.cljs$core$IFn$_invoke$arity$1 ? fexpr__17951_17967.cljs$core$IFn$_invoke$arity$1(keyw) : fexpr__17951_17967.call(null,keyw));

var args_17971__$1 = args;
while(true){
if(cljs.core.seq(args_17971__$1)){
var fexpr__17952_17972 = (function (){var format_in__17000__auto__ = " ";
var cf__17001__auto__ = ((typeof format_in__17000__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17000__auto__) : cljs.pprint.cached_compile.call(null,format_in__17000__auto__)):format_in__17000__auto__);
return ((function (args_17971__$1,format_in__17000__auto__,cf__17001__auto__,_STAR_current_level_STAR_17949_17965,_STAR_current_length_STAR_17950_17966,vec__17943,start,end,vec__17946,seq__17947,first__17948,seq__17947__$1,keyw,args){
return (function() { 
var G__17973__delegate = function (args__17002__auto__){
var navigator__17003__auto__ = cljs.pprint.init_navigator(args__17002__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17001__auto__,navigator__17003__auto__);
};
var G__17973 = function (var_args){
var args__17002__auto__ = null;
if (arguments.length > 0) {
var G__17974__i = 0, G__17974__a = new Array(arguments.length -  0);
while (G__17974__i < G__17974__a.length) {G__17974__a[G__17974__i] = arguments[G__17974__i + 0]; ++G__17974__i;}
  args__17002__auto__ = new cljs.core.IndexedSeq(G__17974__a,0,null);
} 
return G__17973__delegate.call(this,args__17002__auto__);};
G__17973.cljs$lang$maxFixedArity = 0;
G__17973.cljs$lang$applyTo = (function (arglist__17975){
var args__17002__auto__ = cljs.core.seq(arglist__17975);
return G__17973__delegate(args__17002__auto__);
});
G__17973.cljs$core$IFn$_invoke$arity$variadic = G__17973__delegate;
return G__17973;
})()
;
;})(args_17971__$1,format_in__17000__auto__,cf__17001__auto__,_STAR_current_level_STAR_17949_17965,_STAR_current_length_STAR_17950_17966,vec__17943,start,end,vec__17946,seq__17947,first__17948,seq__17947__$1,keyw,args))
})();
(fexpr__17952_17972.cljs$core$IFn$_invoke$arity$0 ? fexpr__17952_17972.cljs$core$IFn$_invoke$arity$0() : fexpr__17952_17972.call(null));

var arg_17976 = cljs.core.first(args_17971__$1);
if(cljs.core.sequential_QMARK_(arg_17976)){
var vec__17953_17977 = cljs.pprint.brackets(arg_17976);
var start_17978__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17953_17977,(0),null);
var end_17979__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17953_17977,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17956_17980 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17957_17981 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start_17978__$1,null,end_17979__$1);

if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_17976),(3))) && ((cljs.core.second(arg_17976) instanceof cljs.core.Keyword))){
var vec__17958_17982 = arg_17976;
var ns_17983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17958_17982,(0),null);
var kw_17984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17958_17982,(1),null);
var lis_17985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17958_17982,(2),null);
var fexpr__17961_17986 = (function (){var format_in__17000__auto__ = "~w ~w ";
var cf__17001__auto__ = ((typeof format_in__17000__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17000__auto__) : cljs.pprint.cached_compile.call(null,format_in__17000__auto__)):format_in__17000__auto__);
return ((function (args_17971__$1,format_in__17000__auto__,cf__17001__auto__,vec__17958_17982,ns_17983,kw_17984,lis_17985,_STAR_current_level_STAR_17956_17980,_STAR_current_length_STAR_17957_17981,vec__17953_17977,start_17978__$1,end_17979__$1,arg_17976,_STAR_current_level_STAR_17949_17965,_STAR_current_length_STAR_17950_17966,vec__17943,start,end,vec__17946,seq__17947,first__17948,seq__17947__$1,keyw,args){
return (function() { 
var G__17987__delegate = function (args__17002__auto__){
var navigator__17003__auto__ = cljs.pprint.init_navigator(args__17002__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17001__auto__,navigator__17003__auto__);
};
var G__17987 = function (var_args){
var args__17002__auto__ = null;
if (arguments.length > 0) {
var G__17988__i = 0, G__17988__a = new Array(arguments.length -  0);
while (G__17988__i < G__17988__a.length) {G__17988__a[G__17988__i] = arguments[G__17988__i + 0]; ++G__17988__i;}
  args__17002__auto__ = new cljs.core.IndexedSeq(G__17988__a,0,null);
} 
return G__17987__delegate.call(this,args__17002__auto__);};
G__17987.cljs$lang$maxFixedArity = 0;
G__17987.cljs$lang$applyTo = (function (arglist__17989){
var args__17002__auto__ = cljs.core.seq(arglist__17989);
return G__17987__delegate(args__17002__auto__);
});
G__17987.cljs$core$IFn$_invoke$arity$variadic = G__17987__delegate;
return G__17987;
})()
;
;})(args_17971__$1,format_in__17000__auto__,cf__17001__auto__,vec__17958_17982,ns_17983,kw_17984,lis_17985,_STAR_current_level_STAR_17956_17980,_STAR_current_length_STAR_17957_17981,vec__17953_17977,start_17978__$1,end_17979__$1,arg_17976,_STAR_current_level_STAR_17949_17965,_STAR_current_length_STAR_17950_17966,vec__17943,start,end,vec__17946,seq__17947,first__17948,seq__17947__$1,keyw,args))
})();
(fexpr__17961_17986.cljs$core$IFn$_invoke$arity$2 ? fexpr__17961_17986.cljs$core$IFn$_invoke$arity$2(ns_17983,kw_17984) : fexpr__17961_17986.call(null,ns_17983,kw_17984));

if(cljs.core.sequential_QMARK_(lis_17985)){
var fexpr__17962_17990 = (function (){var format_in__17000__auto__ = ((cljs.core.vector_QMARK_(lis_17985))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__17001__auto__ = ((typeof format_in__17000__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17000__auto__) : cljs.pprint.cached_compile.call(null,format_in__17000__auto__)):format_in__17000__auto__);
return ((function (args_17971__$1,format_in__17000__auto__,cf__17001__auto__,vec__17958_17982,ns_17983,kw_17984,lis_17985,_STAR_current_level_STAR_17956_17980,_STAR_current_length_STAR_17957_17981,vec__17953_17977,start_17978__$1,end_17979__$1,arg_17976,_STAR_current_level_STAR_17949_17965,_STAR_current_length_STAR_17950_17966,vec__17943,start,end,vec__17946,seq__17947,first__17948,seq__17947__$1,keyw,args){
return (function() { 
var G__17991__delegate = function (args__17002__auto__){
var navigator__17003__auto__ = cljs.pprint.init_navigator(args__17002__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17001__auto__,navigator__17003__auto__);
};
var G__17991 = function (var_args){
var args__17002__auto__ = null;
if (arguments.length > 0) {
var G__17992__i = 0, G__17992__a = new Array(arguments.length -  0);
while (G__17992__i < G__17992__a.length) {G__17992__a[G__17992__i] = arguments[G__17992__i + 0]; ++G__17992__i;}
  args__17002__auto__ = new cljs.core.IndexedSeq(G__17992__a,0,null);
} 
return G__17991__delegate.call(this,args__17002__auto__);};
G__17991.cljs$lang$maxFixedArity = 0;
G__17991.cljs$lang$applyTo = (function (arglist__17993){
var args__17002__auto__ = cljs.core.seq(arglist__17993);
return G__17991__delegate(args__17002__auto__);
});
G__17991.cljs$core$IFn$_invoke$arity$variadic = G__17991__delegate;
return G__17991;
})()
;
;})(args_17971__$1,format_in__17000__auto__,cf__17001__auto__,vec__17958_17982,ns_17983,kw_17984,lis_17985,_STAR_current_level_STAR_17956_17980,_STAR_current_length_STAR_17957_17981,vec__17953_17977,start_17978__$1,end_17979__$1,arg_17976,_STAR_current_level_STAR_17949_17965,_STAR_current_length_STAR_17950_17966,vec__17943,start,end,vec__17946,seq__17947,first__17948,seq__17947__$1,keyw,args))
})();
(fexpr__17962_17990.cljs$core$IFn$_invoke$arity$1 ? fexpr__17962_17990.cljs$core$IFn$_invoke$arity$1(lis_17985) : fexpr__17962_17990.call(null,lis_17985));
} else {
cljs.pprint.write_out(lis_17985);
}
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__17000__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__17001__auto__ = ((typeof format_in__17000__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17000__auto__) : cljs.pprint.cached_compile.call(null,format_in__17000__auto__)):format_in__17000__auto__);
return ((function (args_17971__$1,format_in__17000__auto__,cf__17001__auto__,_STAR_current_level_STAR_17956_17980,_STAR_current_length_STAR_17957_17981,vec__17953_17977,start_17978__$1,end_17979__$1,arg_17976,_STAR_current_level_STAR_17949_17965,_STAR_current_length_STAR_17950_17966,vec__17943,start,end,vec__17946,seq__17947,first__17948,seq__17947__$1,keyw,args){
return (function() { 
var G__17994__delegate = function (args__17002__auto__){
var navigator__17003__auto__ = cljs.pprint.init_navigator(args__17002__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17001__auto__,navigator__17003__auto__);
};
var G__17994 = function (var_args){
var args__17002__auto__ = null;
if (arguments.length > 0) {
var G__17995__i = 0, G__17995__a = new Array(arguments.length -  0);
while (G__17995__i < G__17995__a.length) {G__17995__a[G__17995__i] = arguments[G__17995__i + 0]; ++G__17995__i;}
  args__17002__auto__ = new cljs.core.IndexedSeq(G__17995__a,0,null);
} 
return G__17994__delegate.call(this,args__17002__auto__);};
G__17994.cljs$lang$maxFixedArity = 0;
G__17994.cljs$lang$applyTo = (function (arglist__17996){
var args__17002__auto__ = cljs.core.seq(arglist__17996);
return G__17994__delegate(args__17002__auto__);
});
G__17994.cljs$core$IFn$_invoke$arity$variadic = G__17994__delegate;
return G__17994;
})()
;
;})(args_17971__$1,format_in__17000__auto__,cf__17001__auto__,_STAR_current_level_STAR_17956_17980,_STAR_current_length_STAR_17957_17981,vec__17953_17977,start_17978__$1,end_17979__$1,arg_17976,_STAR_current_level_STAR_17949_17965,_STAR_current_length_STAR_17950_17966,vec__17943,start,end,vec__17946,seq__17947,first__17948,seq__17947__$1,keyw,args))
})(),arg_17976);
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17957_17981;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17956_17980;
}}


if(cljs.core.next(args_17971__$1)){
var fexpr__17963_17997 = (function (){var format_in__17000__auto__ = "~_";
var cf__17001__auto__ = ((typeof format_in__17000__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17000__auto__) : cljs.pprint.cached_compile.call(null,format_in__17000__auto__)):format_in__17000__auto__);
return ((function (args_17971__$1,format_in__17000__auto__,cf__17001__auto__,vec__17953_17977,start_17978__$1,end_17979__$1,arg_17976,_STAR_current_level_STAR_17949_17965,_STAR_current_length_STAR_17950_17966,vec__17943,start,end,vec__17946,seq__17947,first__17948,seq__17947__$1,keyw,args){
return (function() { 
var G__17998__delegate = function (args__17002__auto__){
var navigator__17003__auto__ = cljs.pprint.init_navigator(args__17002__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17001__auto__,navigator__17003__auto__);
};
var G__17998 = function (var_args){
var args__17002__auto__ = null;
if (arguments.length > 0) {
var G__17999__i = 0, G__17999__a = new Array(arguments.length -  0);
while (G__17999__i < G__17999__a.length) {G__17999__a[G__17999__i] = arguments[G__17999__i + 0]; ++G__17999__i;}
  args__17002__auto__ = new cljs.core.IndexedSeq(G__17999__a,0,null);
} 
return G__17998__delegate.call(this,args__17002__auto__);};
G__17998.cljs$lang$maxFixedArity = 0;
G__17998.cljs$lang$applyTo = (function (arglist__18000){
var args__17002__auto__ = cljs.core.seq(arglist__18000);
return G__17998__delegate(args__17002__auto__);
});
G__17998.cljs$core$IFn$_invoke$arity$variadic = G__17998__delegate;
return G__17998;
})()
;
;})(args_17971__$1,format_in__17000__auto__,cf__17001__auto__,vec__17953_17977,start_17978__$1,end_17979__$1,arg_17976,_STAR_current_level_STAR_17949_17965,_STAR_current_length_STAR_17950_17966,vec__17943,start,end,vec__17946,seq__17947,first__17948,seq__17947__$1,keyw,args))
})();
(fexpr__17963_17997.cljs$core$IFn$_invoke$arity$0 ? fexpr__17963_17997.cljs$core$IFn$_invoke$arity$0() : fexpr__17963_17997.call(null));
} else {
}
} else {
cljs.pprint.write_out(arg_17976);

if(cljs.core.next(args_17971__$1)){
var fexpr__17964_18001 = (function (){var format_in__17000__auto__ = "~:_";
var cf__17001__auto__ = ((typeof format_in__17000__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17000__auto__) : cljs.pprint.cached_compile.call(null,format_in__17000__auto__)):format_in__17000__auto__);
return ((function (args_17971__$1,format_in__17000__auto__,cf__17001__auto__,arg_17976,_STAR_current_level_STAR_17949_17965,_STAR_current_length_STAR_17950_17966,vec__17943,start,end,vec__17946,seq__17947,first__17948,seq__17947__$1,keyw,args){
return (function() { 
var G__18002__delegate = function (args__17002__auto__){
var navigator__17003__auto__ = cljs.pprint.init_navigator(args__17002__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17001__auto__,navigator__17003__auto__);
};
var G__18002 = function (var_args){
var args__17002__auto__ = null;
if (arguments.length > 0) {
var G__18003__i = 0, G__18003__a = new Array(arguments.length -  0);
while (G__18003__i < G__18003__a.length) {G__18003__a[G__18003__i] = arguments[G__18003__i + 0]; ++G__18003__i;}
  args__17002__auto__ = new cljs.core.IndexedSeq(G__18003__a,0,null);
} 
return G__18002__delegate.call(this,args__17002__auto__);};
G__18002.cljs$lang$maxFixedArity = 0;
G__18002.cljs$lang$applyTo = (function (arglist__18004){
var args__17002__auto__ = cljs.core.seq(arglist__18004);
return G__18002__delegate(args__17002__auto__);
});
G__18002.cljs$core$IFn$_invoke$arity$variadic = G__18002__delegate;
return G__18002;
})()
;
;})(args_17971__$1,format_in__17000__auto__,cf__17001__auto__,arg_17976,_STAR_current_level_STAR_17949_17965,_STAR_current_length_STAR_17950_17966,vec__17943,start,end,vec__17946,seq__17947,first__17948,seq__17947__$1,keyw,args))
})();
(fexpr__17964_18001.cljs$core$IFn$_invoke$arity$0 ? fexpr__17964_18001.cljs$core$IFn$_invoke$arity$0() : fexpr__17964_18001.call(null));
} else {
}
}

var G__18005 = cljs.core.next(args_17971__$1);
args_17971__$1 = G__18005;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17950_17966;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17949_17965;
}}

return null;
} else {
return cljs.pprint.write_out(reference);
}
});
/**
 * The pretty print dispatch chunk for the ns macro
 */
cljs.pprint.pprint_ns = (function cljs$pprint$pprint_ns(alis){
if(cljs.core.next(alis)){
var vec__18006 = alis;
var seq__18007 = cljs.core.seq(vec__18006);
var first__18008 = cljs.core.first(seq__18007);
var seq__18007__$1 = cljs.core.next(seq__18007);
var ns_sym = first__18008;
var first__18008__$1 = cljs.core.first(seq__18007__$1);
var seq__18007__$2 = cljs.core.next(seq__18007__$1);
var ns_name = first__18008__$1;
var stuff = seq__18007__$2;
var vec__18009 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18009,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18009,(1),null);
var vec__18012 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18012,(0),null);
var references = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18012,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18015_18022 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18016_18023 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var fexpr__18017_18024 = (function (){var format_in__17000__auto__ = "~w ~1I~@_~w";
var cf__17001__auto__ = ((typeof format_in__17000__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17000__auto__) : cljs.pprint.cached_compile.call(null,format_in__17000__auto__)):format_in__17000__auto__);
return ((function (format_in__17000__auto__,cf__17001__auto__,_STAR_current_level_STAR_18015_18022,_STAR_current_length_STAR_18016_18023,vec__18006,seq__18007,first__18008,seq__18007__$1,ns_sym,first__18008__$1,seq__18007__$2,ns_name,stuff,vec__18009,doc_str,stuff__$1,vec__18012,attr_map,references){
return (function() { 
var G__18025__delegate = function (args__17002__auto__){
var navigator__17003__auto__ = cljs.pprint.init_navigator(args__17002__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17001__auto__,navigator__17003__auto__);
};
var G__18025 = function (var_args){
var args__17002__auto__ = null;
if (arguments.length > 0) {
var G__18026__i = 0, G__18026__a = new Array(arguments.length -  0);
while (G__18026__i < G__18026__a.length) {G__18026__a[G__18026__i] = arguments[G__18026__i + 0]; ++G__18026__i;}
  args__17002__auto__ = new cljs.core.IndexedSeq(G__18026__a,0,null);
} 
return G__18025__delegate.call(this,args__17002__auto__);};
G__18025.cljs$lang$maxFixedArity = 0;
G__18025.cljs$lang$applyTo = (function (arglist__18027){
var args__17002__auto__ = cljs.core.seq(arglist__18027);
return G__18025__delegate(args__17002__auto__);
});
G__18025.cljs$core$IFn$_invoke$arity$variadic = G__18025__delegate;
return G__18025;
})()
;
;})(format_in__17000__auto__,cf__17001__auto__,_STAR_current_level_STAR_18015_18022,_STAR_current_length_STAR_18016_18023,vec__18006,seq__18007,first__18008,seq__18007__$1,ns_sym,first__18008__$1,seq__18007__$2,ns_name,stuff,vec__18009,doc_str,stuff__$1,vec__18012,attr_map,references))
})();
(fexpr__18017_18024.cljs$core$IFn$_invoke$arity$2 ? fexpr__18017_18024.cljs$core$IFn$_invoke$arity$2(ns_sym,ns_name) : fexpr__18017_18024.call(null,ns_sym,ns_name));

if(cljs.core.truth_((function (){var or__8274__auto__ = doc_str;
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
var or__8274__auto____$1 = attr_map;
if(cljs.core.truth_(or__8274__auto____$1)){
return or__8274__auto____$1;
} else {
return cljs.core.seq(references);
}
}
})())){
var fexpr__18018_18028 = (function (){var format_in__17000__auto__ = "~@:_";
var cf__17001__auto__ = ((typeof format_in__17000__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17000__auto__) : cljs.pprint.cached_compile.call(null,format_in__17000__auto__)):format_in__17000__auto__);
return ((function (format_in__17000__auto__,cf__17001__auto__,_STAR_current_level_STAR_18015_18022,_STAR_current_length_STAR_18016_18023,vec__18006,seq__18007,first__18008,seq__18007__$1,ns_sym,first__18008__$1,seq__18007__$2,ns_name,stuff,vec__18009,doc_str,stuff__$1,vec__18012,attr_map,references){
return (function() { 
var G__18029__delegate = function (args__17002__auto__){
var navigator__17003__auto__ = cljs.pprint.init_navigator(args__17002__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17001__auto__,navigator__17003__auto__);
};
var G__18029 = function (var_args){
var args__17002__auto__ = null;
if (arguments.length > 0) {
var G__18030__i = 0, G__18030__a = new Array(arguments.length -  0);
while (G__18030__i < G__18030__a.length) {G__18030__a[G__18030__i] = arguments[G__18030__i + 0]; ++G__18030__i;}
  args__17002__auto__ = new cljs.core.IndexedSeq(G__18030__a,0,null);
} 
return G__18029__delegate.call(this,args__17002__auto__);};
G__18029.cljs$lang$maxFixedArity = 0;
G__18029.cljs$lang$applyTo = (function (arglist__18031){
var args__17002__auto__ = cljs.core.seq(arglist__18031);
return G__18029__delegate(args__17002__auto__);
});
G__18029.cljs$core$IFn$_invoke$arity$variadic = G__18029__delegate;
return G__18029;
})()
;
;})(format_in__17000__auto__,cf__17001__auto__,_STAR_current_level_STAR_18015_18022,_STAR_current_length_STAR_18016_18023,vec__18006,seq__18007,first__18008,seq__18007__$1,ns_sym,first__18008__$1,seq__18007__$2,ns_name,stuff,vec__18009,doc_str,stuff__$1,vec__18012,attr_map,references))
})();
(fexpr__18018_18028.cljs$core$IFn$_invoke$arity$0 ? fexpr__18018_18028.cljs$core$IFn$_invoke$arity$0() : fexpr__18018_18028.call(null));
} else {
}

if(cljs.core.truth_(doc_str)){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\"~a\"~:[~;~:@_~]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([doc_str,(function (){var or__8274__auto__ = attr_map;
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return cljs.core.seq(references);
}
})()], 0));
} else {
}

if(cljs.core.truth_(attr_map)){
var G__18020_18032 = attr_map;
var G__18021_18033 = cljs.core.seq(references);
var fexpr__18019_18034 = (function (){var format_in__17000__auto__ = "~w~:[~;~:@_~]";
var cf__17001__auto__ = ((typeof format_in__17000__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17000__auto__) : cljs.pprint.cached_compile.call(null,format_in__17000__auto__)):format_in__17000__auto__);
return ((function (format_in__17000__auto__,cf__17001__auto__,G__18020_18032,G__18021_18033,_STAR_current_level_STAR_18015_18022,_STAR_current_length_STAR_18016_18023,vec__18006,seq__18007,first__18008,seq__18007__$1,ns_sym,first__18008__$1,seq__18007__$2,ns_name,stuff,vec__18009,doc_str,stuff__$1,vec__18012,attr_map,references){
return (function() { 
var G__18035__delegate = function (args__17002__auto__){
var navigator__17003__auto__ = cljs.pprint.init_navigator(args__17002__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17001__auto__,navigator__17003__auto__);
};
var G__18035 = function (var_args){
var args__17002__auto__ = null;
if (arguments.length > 0) {
var G__18036__i = 0, G__18036__a = new Array(arguments.length -  0);
while (G__18036__i < G__18036__a.length) {G__18036__a[G__18036__i] = arguments[G__18036__i + 0]; ++G__18036__i;}
  args__17002__auto__ = new cljs.core.IndexedSeq(G__18036__a,0,null);
} 
return G__18035__delegate.call(this,args__17002__auto__);};
G__18035.cljs$lang$maxFixedArity = 0;
G__18035.cljs$lang$applyTo = (function (arglist__18037){
var args__17002__auto__ = cljs.core.seq(arglist__18037);
return G__18035__delegate(args__17002__auto__);
});
G__18035.cljs$core$IFn$_invoke$arity$variadic = G__18035__delegate;
return G__18035;
})()
;
;})(format_in__17000__auto__,cf__17001__auto__,G__18020_18032,G__18021_18033,_STAR_current_level_STAR_18015_18022,_STAR_current_length_STAR_18016_18023,vec__18006,seq__18007,first__18008,seq__18007__$1,ns_sym,first__18008__$1,seq__18007__$2,ns_name,stuff,vec__18009,doc_str,stuff__$1,vec__18012,attr_map,references))
})();
(fexpr__18019_18034.cljs$core$IFn$_invoke$arity$2 ? fexpr__18019_18034.cljs$core$IFn$_invoke$arity$2(G__18020_18032,G__18021_18033) : fexpr__18019_18034.call(null,G__18020_18032,G__18021_18033));
} else {
}

var references_18038__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference(cljs.core.first(references_18038__$1));

var temp__5535__auto___18039 = cljs.core.next(references_18038__$1);
if(temp__5535__auto___18039){
var references_18040__$2 = temp__5535__auto___18039;
cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__18041 = references_18040__$2;
references_18038__$1 = G__18041;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18016_18023;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18015_18022;
}}

return null;
} else {
return cljs.pprint.write_out(alis);
}
});
cljs.pprint.pprint_hold_first = (function (){var format_in__17000__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__17001__auto__ = ((typeof format_in__17000__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17000__auto__) : cljs.pprint.cached_compile.call(null,format_in__17000__auto__)):format_in__17000__auto__);
return ((function (format_in__17000__auto__,cf__17001__auto__){
return (function() { 
var G__18042__delegate = function (args__17002__auto__){
var navigator__17003__auto__ = cljs.pprint.init_navigator(args__17002__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17001__auto__,navigator__17003__auto__);
};
var G__18042 = function (var_args){
var args__17002__auto__ = null;
if (arguments.length > 0) {
var G__18043__i = 0, G__18043__a = new Array(arguments.length -  0);
while (G__18043__i < G__18043__a.length) {G__18043__a[G__18043__i] = arguments[G__18043__i + 0]; ++G__18043__i;}
  args__17002__auto__ = new cljs.core.IndexedSeq(G__18043__a,0,null);
} 
return G__18042__delegate.call(this,args__17002__auto__);};
G__18042.cljs$lang$maxFixedArity = 0;
G__18042.cljs$lang$applyTo = (function (arglist__18044){
var args__17002__auto__ = cljs.core.seq(arglist__18044);
return G__18042__delegate(args__17002__auto__);
});
G__18042.cljs$core$IFn$_invoke$arity$variadic = G__18042__delegate;
return G__18042;
})()
;
;})(format_in__17000__auto__,cf__17001__auto__))
})();
cljs.pprint.single_defn = (function cljs$pprint$single_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
if(cljs.core.truth_(has_doc_str_QMARK_)){
var fexpr__18045_18048 = (function (){var format_in__17000__auto__ = " ~_";
var cf__17001__auto__ = ((typeof format_in__17000__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17000__auto__) : cljs.pprint.cached_compile.call(null,format_in__17000__auto__)):format_in__17000__auto__);
return ((function (format_in__17000__auto__,cf__17001__auto__){
return (function() { 
var G__18049__delegate = function (args__17002__auto__){
var navigator__17003__auto__ = cljs.pprint.init_navigator(args__17002__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17001__auto__,navigator__17003__auto__);
};
var G__18049 = function (var_args){
var args__17002__auto__ = null;
if (arguments.length > 0) {
var G__18050__i = 0, G__18050__a = new Array(arguments.length -  0);
while (G__18050__i < G__18050__a.length) {G__18050__a[G__18050__i] = arguments[G__18050__i + 0]; ++G__18050__i;}
  args__17002__auto__ = new cljs.core.IndexedSeq(G__18050__a,0,null);
} 
return G__18049__delegate.call(this,args__17002__auto__);};
G__18049.cljs$lang$maxFixedArity = 0;
G__18049.cljs$lang$applyTo = (function (arglist__18051){
var args__17002__auto__ = cljs.core.seq(arglist__18051);
return G__18049__delegate(args__17002__auto__);
});
G__18049.cljs$core$IFn$_invoke$arity$variadic = G__18049__delegate;
return G__18049;
})()
;
;})(format_in__17000__auto__,cf__17001__auto__))
})();
(fexpr__18045_18048.cljs$core$IFn$_invoke$arity$0 ? fexpr__18045_18048.cljs$core$IFn$_invoke$arity$0() : fexpr__18045_18048.call(null));
} else {
var fexpr__18046_18052 = (function (){var format_in__17000__auto__ = " ~@_";
var cf__17001__auto__ = ((typeof format_in__17000__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17000__auto__) : cljs.pprint.cached_compile.call(null,format_in__17000__auto__)):format_in__17000__auto__);
return ((function (format_in__17000__auto__,cf__17001__auto__){
return (function() { 
var G__18053__delegate = function (args__17002__auto__){
var navigator__17003__auto__ = cljs.pprint.init_navigator(args__17002__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17001__auto__,navigator__17003__auto__);
};
var G__18053 = function (var_args){
var args__17002__auto__ = null;
if (arguments.length > 0) {
var G__18054__i = 0, G__18054__a = new Array(arguments.length -  0);
while (G__18054__i < G__18054__a.length) {G__18054__a[G__18054__i] = arguments[G__18054__i + 0]; ++G__18054__i;}
  args__17002__auto__ = new cljs.core.IndexedSeq(G__18054__a,0,null);
} 
return G__18053__delegate.call(this,args__17002__auto__);};
G__18053.cljs$lang$maxFixedArity = 0;
G__18053.cljs$lang$applyTo = (function (arglist__18055){
var args__17002__auto__ = cljs.core.seq(arglist__18055);
return G__18053__delegate(args__17002__auto__);
});
G__18053.cljs$core$IFn$_invoke$arity$variadic = G__18053__delegate;
return G__18053;
})()
;
;})(format_in__17000__auto__,cf__17001__auto__))
})();
(fexpr__18046_18052.cljs$core$IFn$_invoke$arity$0 ? fexpr__18046_18052.cljs$core$IFn$_invoke$arity$0() : fexpr__18046_18052.call(null));
}

var fexpr__18047 = (function (){var format_in__17000__auto__ = "~{~w~^ ~_~}";
var cf__17001__auto__ = ((typeof format_in__17000__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17000__auto__) : cljs.pprint.cached_compile.call(null,format_in__17000__auto__)):format_in__17000__auto__);
return ((function (format_in__17000__auto__,cf__17001__auto__){
return (function() { 
var G__18056__delegate = function (args__17002__auto__){
var navigator__17003__auto__ = cljs.pprint.init_navigator(args__17002__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17001__auto__,navigator__17003__auto__);
};
var G__18056 = function (var_args){
var args__17002__auto__ = null;
if (arguments.length > 0) {
var G__18057__i = 0, G__18057__a = new Array(arguments.length -  0);
while (G__18057__i < G__18057__a.length) {G__18057__a[G__18057__i] = arguments[G__18057__i + 0]; ++G__18057__i;}
  args__17002__auto__ = new cljs.core.IndexedSeq(G__18057__a,0,null);
} 
return G__18056__delegate.call(this,args__17002__auto__);};
G__18056.cljs$lang$maxFixedArity = 0;
G__18056.cljs$lang$applyTo = (function (arglist__18058){
var args__17002__auto__ = cljs.core.seq(arglist__18058);
return G__18056__delegate(args__17002__auto__);
});
G__18056.cljs$core$IFn$_invoke$arity$variadic = G__18056__delegate;
return G__18056;
})()
;
;})(format_in__17000__auto__,cf__17001__auto__))
})();
return (fexpr__18047.cljs$core$IFn$_invoke$arity$1 ? fexpr__18047.cljs$core$IFn$_invoke$arity$1(alis) : fexpr__18047.call(null,alis));
} else {
return null;
}
});
cljs.pprint.multi_defn = (function cljs$pprint$multi_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
var fexpr__18059 = (function (){var format_in__17000__auto__ = " ~_~{~w~^ ~_~}";
var cf__17001__auto__ = ((typeof format_in__17000__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17000__auto__) : cljs.pprint.cached_compile.call(null,format_in__17000__auto__)):format_in__17000__auto__);
return ((function (format_in__17000__auto__,cf__17001__auto__){
return (function() { 
var G__18060__delegate = function (args__17002__auto__){
var navigator__17003__auto__ = cljs.pprint.init_navigator(args__17002__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17001__auto__,navigator__17003__auto__);
};
var G__18060 = function (var_args){
var args__17002__auto__ = null;
if (arguments.length > 0) {
var G__18061__i = 0, G__18061__a = new Array(arguments.length -  0);
while (G__18061__i < G__18061__a.length) {G__18061__a[G__18061__i] = arguments[G__18061__i + 0]; ++G__18061__i;}
  args__17002__auto__ = new cljs.core.IndexedSeq(G__18061__a,0,null);
} 
return G__18060__delegate.call(this,args__17002__auto__);};
G__18060.cljs$lang$maxFixedArity = 0;
G__18060.cljs$lang$applyTo = (function (arglist__18062){
var args__17002__auto__ = cljs.core.seq(arglist__18062);
return G__18060__delegate(args__17002__auto__);
});
G__18060.cljs$core$IFn$_invoke$arity$variadic = G__18060__delegate;
return G__18060;
})()
;
;})(format_in__17000__auto__,cf__17001__auto__))
})();
return (fexpr__18059.cljs$core$IFn$_invoke$arity$1 ? fexpr__18059.cljs$core$IFn$_invoke$arity$1(alis) : fexpr__18059.call(null,alis));
} else {
return null;
}
});
cljs.pprint.pprint_defn = (function cljs$pprint$pprint_defn(alis){
if(cljs.core.next(alis)){
var vec__18063 = alis;
var seq__18064 = cljs.core.seq(vec__18063);
var first__18065 = cljs.core.first(seq__18064);
var seq__18064__$1 = cljs.core.next(seq__18064);
var defn_sym = first__18065;
var first__18065__$1 = cljs.core.first(seq__18064__$1);
var seq__18064__$2 = cljs.core.next(seq__18064__$1);
var defn_name = first__18065__$1;
var stuff = seq__18064__$2;
var vec__18066 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18066,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18066,(1),null);
var vec__18069 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18069,(0),null);
var stuff__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18069,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18072_18077 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18073_18078 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var fexpr__18074_18079 = (function (){var format_in__17000__auto__ = "~w ~1I~@_~w";
var cf__17001__auto__ = ((typeof format_in__17000__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17000__auto__) : cljs.pprint.cached_compile.call(null,format_in__17000__auto__)):format_in__17000__auto__);
return ((function (format_in__17000__auto__,cf__17001__auto__,_STAR_current_level_STAR_18072_18077,_STAR_current_length_STAR_18073_18078,vec__18063,seq__18064,first__18065,seq__18064__$1,defn_sym,first__18065__$1,seq__18064__$2,defn_name,stuff,vec__18066,doc_str,stuff__$1,vec__18069,attr_map,stuff__$2){
return (function() { 
var G__18080__delegate = function (args__17002__auto__){
var navigator__17003__auto__ = cljs.pprint.init_navigator(args__17002__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17001__auto__,navigator__17003__auto__);
};
var G__18080 = function (var_args){
var args__17002__auto__ = null;
if (arguments.length > 0) {
var G__18081__i = 0, G__18081__a = new Array(arguments.length -  0);
while (G__18081__i < G__18081__a.length) {G__18081__a[G__18081__i] = arguments[G__18081__i + 0]; ++G__18081__i;}
  args__17002__auto__ = new cljs.core.IndexedSeq(G__18081__a,0,null);
} 
return G__18080__delegate.call(this,args__17002__auto__);};
G__18080.cljs$lang$maxFixedArity = 0;
G__18080.cljs$lang$applyTo = (function (arglist__18082){
var args__17002__auto__ = cljs.core.seq(arglist__18082);
return G__18080__delegate(args__17002__auto__);
});
G__18080.cljs$core$IFn$_invoke$arity$variadic = G__18080__delegate;
return G__18080;
})()
;
;})(format_in__17000__auto__,cf__17001__auto__,_STAR_current_level_STAR_18072_18077,_STAR_current_length_STAR_18073_18078,vec__18063,seq__18064,first__18065,seq__18064__$1,defn_sym,first__18065__$1,seq__18064__$2,defn_name,stuff,vec__18066,doc_str,stuff__$1,vec__18069,attr_map,stuff__$2))
})();
(fexpr__18074_18079.cljs$core$IFn$_invoke$arity$2 ? fexpr__18074_18079.cljs$core$IFn$_invoke$arity$2(defn_sym,defn_name) : fexpr__18074_18079.call(null,defn_sym,defn_name));

if(cljs.core.truth_(doc_str)){
var fexpr__18075_18083 = (function (){var format_in__17000__auto__ = " ~_~w";
var cf__17001__auto__ = ((typeof format_in__17000__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17000__auto__) : cljs.pprint.cached_compile.call(null,format_in__17000__auto__)):format_in__17000__auto__);
return ((function (format_in__17000__auto__,cf__17001__auto__,_STAR_current_level_STAR_18072_18077,_STAR_current_length_STAR_18073_18078,vec__18063,seq__18064,first__18065,seq__18064__$1,defn_sym,first__18065__$1,seq__18064__$2,defn_name,stuff,vec__18066,doc_str,stuff__$1,vec__18069,attr_map,stuff__$2){
return (function() { 
var G__18084__delegate = function (args__17002__auto__){
var navigator__17003__auto__ = cljs.pprint.init_navigator(args__17002__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17001__auto__,navigator__17003__auto__);
};
var G__18084 = function (var_args){
var args__17002__auto__ = null;
if (arguments.length > 0) {
var G__18085__i = 0, G__18085__a = new Array(arguments.length -  0);
while (G__18085__i < G__18085__a.length) {G__18085__a[G__18085__i] = arguments[G__18085__i + 0]; ++G__18085__i;}
  args__17002__auto__ = new cljs.core.IndexedSeq(G__18085__a,0,null);
} 
return G__18084__delegate.call(this,args__17002__auto__);};
G__18084.cljs$lang$maxFixedArity = 0;
G__18084.cljs$lang$applyTo = (function (arglist__18086){
var args__17002__auto__ = cljs.core.seq(arglist__18086);
return G__18084__delegate(args__17002__auto__);
});
G__18084.cljs$core$IFn$_invoke$arity$variadic = G__18084__delegate;
return G__18084;
})()
;
;})(format_in__17000__auto__,cf__17001__auto__,_STAR_current_level_STAR_18072_18077,_STAR_current_length_STAR_18073_18078,vec__18063,seq__18064,first__18065,seq__18064__$1,defn_sym,first__18065__$1,seq__18064__$2,defn_name,stuff,vec__18066,doc_str,stuff__$1,vec__18069,attr_map,stuff__$2))
})();
(fexpr__18075_18083.cljs$core$IFn$_invoke$arity$1 ? fexpr__18075_18083.cljs$core$IFn$_invoke$arity$1(doc_str) : fexpr__18075_18083.call(null,doc_str));
} else {
}

if(cljs.core.truth_(attr_map)){
var fexpr__18076_18087 = (function (){var format_in__17000__auto__ = " ~_~w";
var cf__17001__auto__ = ((typeof format_in__17000__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17000__auto__) : cljs.pprint.cached_compile.call(null,format_in__17000__auto__)):format_in__17000__auto__);
return ((function (format_in__17000__auto__,cf__17001__auto__,_STAR_current_level_STAR_18072_18077,_STAR_current_length_STAR_18073_18078,vec__18063,seq__18064,first__18065,seq__18064__$1,defn_sym,first__18065__$1,seq__18064__$2,defn_name,stuff,vec__18066,doc_str,stuff__$1,vec__18069,attr_map,stuff__$2){
return (function() { 
var G__18088__delegate = function (args__17002__auto__){
var navigator__17003__auto__ = cljs.pprint.init_navigator(args__17002__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17001__auto__,navigator__17003__auto__);
};
var G__18088 = function (var_args){
var args__17002__auto__ = null;
if (arguments.length > 0) {
var G__18089__i = 0, G__18089__a = new Array(arguments.length -  0);
while (G__18089__i < G__18089__a.length) {G__18089__a[G__18089__i] = arguments[G__18089__i + 0]; ++G__18089__i;}
  args__17002__auto__ = new cljs.core.IndexedSeq(G__18089__a,0,null);
} 
return G__18088__delegate.call(this,args__17002__auto__);};
G__18088.cljs$lang$maxFixedArity = 0;
G__18088.cljs$lang$applyTo = (function (arglist__18090){
var args__17002__auto__ = cljs.core.seq(arglist__18090);
return G__18088__delegate(args__17002__auto__);
});
G__18088.cljs$core$IFn$_invoke$arity$variadic = G__18088__delegate;
return G__18088;
})()
;
;})(format_in__17000__auto__,cf__17001__auto__,_STAR_current_level_STAR_18072_18077,_STAR_current_length_STAR_18073_18078,vec__18063,seq__18064,first__18065,seq__18064__$1,defn_sym,first__18065__$1,seq__18064__$2,defn_name,stuff,vec__18066,doc_str,stuff__$1,vec__18069,attr_map,stuff__$2))
})();
(fexpr__18076_18087.cljs$core$IFn$_invoke$arity$1 ? fexpr__18076_18087.cljs$core$IFn$_invoke$arity$1(attr_map) : fexpr__18076_18087.call(null,attr_map));
} else {
}

if(cljs.core.vector_QMARK_(cljs.core.first(stuff__$2))){
cljs.pprint.single_defn(stuff__$2,(function (){var or__8274__auto__ = doc_str;
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return attr_map;
}
})());
} else {
cljs.pprint.multi_defn(stuff__$2,(function (){var or__8274__auto__ = doc_str;
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return attr_map;
}
})());

}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18073_18078;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18072_18077;
}}

return null;
} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint.pprint_binding_form = (function cljs$pprint$pprint_binding_form(binding_vec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18091_18096 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18092_18097 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count18093_18098 = (0);
var binding_18099 = binding_vec;
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count18093_18098 < cljs.core._STAR_print_length_STAR_))){
if(cljs.core.seq(binding_18099)){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18094_18100 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18095_18101 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(binding_18099));

if(cljs.core.next(binding_18099)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(binding_18099));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18095_18101;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18094_18100;
}}


if(cljs.core.next(cljs.core.rest(binding_18099))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__18102 = (length_count18093_18098 + (1));
var G__18103 = cljs.core.next(cljs.core.rest(binding_18099));
length_count18093_18098 = G__18102;
binding_18099 = G__18103;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18092_18097;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18091_18096;
}}

return null;
});
cljs.pprint.pprint_let = (function cljs$pprint$pprint_let(alis){
var base_sym = cljs.core.first(alis);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18104_18109 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18105_18110 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

if((cljs.core.next(alis)) && (cljs.core.vector_QMARK_(cljs.core.second(alis)))){
var fexpr__18106_18111 = (function (){var format_in__17000__auto__ = "~w ~1I~@_";
var cf__17001__auto__ = ((typeof format_in__17000__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17000__auto__) : cljs.pprint.cached_compile.call(null,format_in__17000__auto__)):format_in__17000__auto__);
return ((function (format_in__17000__auto__,cf__17001__auto__,_STAR_current_level_STAR_18104_18109,_STAR_current_length_STAR_18105_18110,base_sym){
return (function() { 
var G__18112__delegate = function (args__17002__auto__){
var navigator__17003__auto__ = cljs.pprint.init_navigator(args__17002__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17001__auto__,navigator__17003__auto__);
};
var G__18112 = function (var_args){
var args__17002__auto__ = null;
if (arguments.length > 0) {
var G__18113__i = 0, G__18113__a = new Array(arguments.length -  0);
while (G__18113__i < G__18113__a.length) {G__18113__a[G__18113__i] = arguments[G__18113__i + 0]; ++G__18113__i;}
  args__17002__auto__ = new cljs.core.IndexedSeq(G__18113__a,0,null);
} 
return G__18112__delegate.call(this,args__17002__auto__);};
G__18112.cljs$lang$maxFixedArity = 0;
G__18112.cljs$lang$applyTo = (function (arglist__18114){
var args__17002__auto__ = cljs.core.seq(arglist__18114);
return G__18112__delegate(args__17002__auto__);
});
G__18112.cljs$core$IFn$_invoke$arity$variadic = G__18112__delegate;
return G__18112;
})()
;
;})(format_in__17000__auto__,cf__17001__auto__,_STAR_current_level_STAR_18104_18109,_STAR_current_length_STAR_18105_18110,base_sym))
})();
(fexpr__18106_18111.cljs$core$IFn$_invoke$arity$1 ? fexpr__18106_18111.cljs$core$IFn$_invoke$arity$1(base_sym) : fexpr__18106_18111.call(null,base_sym));

cljs.pprint.pprint_binding_form(cljs.core.second(alis));

var G__18108_18115 = cljs.core.next(cljs.core.rest(alis));
var fexpr__18107_18116 = (function (){var format_in__17000__auto__ = " ~_~{~w~^ ~_~}";
var cf__17001__auto__ = ((typeof format_in__17000__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17000__auto__) : cljs.pprint.cached_compile.call(null,format_in__17000__auto__)):format_in__17000__auto__);
return ((function (format_in__17000__auto__,cf__17001__auto__,G__18108_18115,_STAR_current_level_STAR_18104_18109,_STAR_current_length_STAR_18105_18110,base_sym){
return (function() { 
var G__18117__delegate = function (args__17002__auto__){
var navigator__17003__auto__ = cljs.pprint.init_navigator(args__17002__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17001__auto__,navigator__17003__auto__);
};
var G__18117 = function (var_args){
var args__17002__auto__ = null;
if (arguments.length > 0) {
var G__18118__i = 0, G__18118__a = new Array(arguments.length -  0);
while (G__18118__i < G__18118__a.length) {G__18118__a[G__18118__i] = arguments[G__18118__i + 0]; ++G__18118__i;}
  args__17002__auto__ = new cljs.core.IndexedSeq(G__18118__a,0,null);
} 
return G__18117__delegate.call(this,args__17002__auto__);};
G__18117.cljs$lang$maxFixedArity = 0;
G__18117.cljs$lang$applyTo = (function (arglist__18119){
var args__17002__auto__ = cljs.core.seq(arglist__18119);
return G__18117__delegate(args__17002__auto__);
});
G__18117.cljs$core$IFn$_invoke$arity$variadic = G__18117__delegate;
return G__18117;
})()
;
;})(format_in__17000__auto__,cf__17001__auto__,G__18108_18115,_STAR_current_level_STAR_18104_18109,_STAR_current_length_STAR_18105_18110,base_sym))
})();
(fexpr__18107_18116.cljs$core$IFn$_invoke$arity$1 ? fexpr__18107_18116.cljs$core$IFn$_invoke$arity$1(G__18108_18115) : fexpr__18107_18116.call(null,G__18108_18115));
} else {
(cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18105_18110;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18104_18109;
}}

return null;
});
cljs.pprint.pprint_if = (function (){var format_in__17000__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__17001__auto__ = ((typeof format_in__17000__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17000__auto__) : cljs.pprint.cached_compile.call(null,format_in__17000__auto__)):format_in__17000__auto__);
return ((function (format_in__17000__auto__,cf__17001__auto__){
return (function() { 
var G__18120__delegate = function (args__17002__auto__){
var navigator__17003__auto__ = cljs.pprint.init_navigator(args__17002__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17001__auto__,navigator__17003__auto__);
};
var G__18120 = function (var_args){
var args__17002__auto__ = null;
if (arguments.length > 0) {
var G__18121__i = 0, G__18121__a = new Array(arguments.length -  0);
while (G__18121__i < G__18121__a.length) {G__18121__a[G__18121__i] = arguments[G__18121__i + 0]; ++G__18121__i;}
  args__17002__auto__ = new cljs.core.IndexedSeq(G__18121__a,0,null);
} 
return G__18120__delegate.call(this,args__17002__auto__);};
G__18120.cljs$lang$maxFixedArity = 0;
G__18120.cljs$lang$applyTo = (function (arglist__18122){
var args__17002__auto__ = cljs.core.seq(arglist__18122);
return G__18120__delegate(args__17002__auto__);
});
G__18120.cljs$core$IFn$_invoke$arity$variadic = G__18120__delegate;
return G__18120;
})()
;
;})(format_in__17000__auto__,cf__17001__auto__))
})();
cljs.pprint.pprint_cond = (function cljs$pprint$pprint_cond(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18123_18128 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18124_18129 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

cljs.pprint.write_out(cljs.core.first(alis));

if(cljs.core.next(alis)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var length_count18125_18130 = (0);
var alis_18131__$1 = cljs.core.next(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count18125_18130 < cljs.core._STAR_print_length_STAR_))){
if(alis_18131__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18126_18132 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18127_18133 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_18131__$1));

if(cljs.core.next(alis_18131__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(alis_18131__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18127_18133;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18126_18132;
}}


if(cljs.core.next(cljs.core.rest(alis_18131__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__18134 = (length_count18125_18130 + (1));
var G__18135 = cljs.core.next(cljs.core.rest(alis_18131__$1));
length_count18125_18130 = G__18134;
alis_18131__$1 = G__18135;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18124_18129;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18123_18128;
}}

return null;
});
cljs.pprint.pprint_condp = (function cljs$pprint$pprint_condp(alis){
if((cljs.core.count(alis) > (3))){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18136_18141 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18137_18142 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__17000__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__17001__auto__ = ((typeof format_in__17000__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17000__auto__) : cljs.pprint.cached_compile.call(null,format_in__17000__auto__)):format_in__17000__auto__);
return ((function (format_in__17000__auto__,cf__17001__auto__,_STAR_current_level_STAR_18136_18141,_STAR_current_length_STAR_18137_18142){
return (function() { 
var G__18143__delegate = function (args__17002__auto__){
var navigator__17003__auto__ = cljs.pprint.init_navigator(args__17002__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17001__auto__,navigator__17003__auto__);
};
var G__18143 = function (var_args){
var args__17002__auto__ = null;
if (arguments.length > 0) {
var G__18144__i = 0, G__18144__a = new Array(arguments.length -  0);
while (G__18144__i < G__18144__a.length) {G__18144__a[G__18144__i] = arguments[G__18144__i + 0]; ++G__18144__i;}
  args__17002__auto__ = new cljs.core.IndexedSeq(G__18144__a,0,null);
} 
return G__18143__delegate.call(this,args__17002__auto__);};
G__18143.cljs$lang$maxFixedArity = 0;
G__18143.cljs$lang$applyTo = (function (arglist__18145){
var args__17002__auto__ = cljs.core.seq(arglist__18145);
return G__18143__delegate(args__17002__auto__);
});
G__18143.cljs$core$IFn$_invoke$arity$variadic = G__18143__delegate;
return G__18143;
})()
;
;})(format_in__17000__auto__,cf__17001__auto__,_STAR_current_level_STAR_18136_18141,_STAR_current_length_STAR_18137_18142))
})(),alis);

var length_count18138_18146 = (0);
var alis_18147__$1 = cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),alis));
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count18138_18146 < cljs.core._STAR_print_length_STAR_))){
if(alis_18147__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18139_18148 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18140_18149 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_18147__$1));

if(cljs.core.next(alis_18147__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(alis_18147__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18140_18149;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18139_18148;
}}


if(cljs.core.next(cljs.core.rest(alis_18147__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__18150 = (length_count18138_18146 + (1));
var G__18151 = cljs.core.next(cljs.core.rest(alis_18147__$1));
length_count18138_18146 = G__18150;
alis_18147__$1 = G__18151;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18137_18142;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18136_18141;
}}

return null;
} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint._STAR_symbol_map_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.pprint.pprint_anon_func = (function cljs$pprint$pprint_anon_func(alis){
var args = cljs.core.second(alis);
var nlis = cljs.core.first(cljs.core.rest(cljs.core.rest(alis)));
if(cljs.core.vector_QMARK_(args)){
var _STAR_symbol_map_STAR_18154 = cljs.pprint._STAR_symbol_map_STAR_;
cljs.pprint._STAR_symbol_map_STAR_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(args)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(args),"%"]):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (_STAR_symbol_map_STAR_18154,args,nlis){
return (function (p1__18152_SHARP_,p2__18153_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__18152_SHARP_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("%"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__18153_SHARP_)].join('')],null));
});})(_STAR_symbol_map_STAR_18154,args,nlis))
,args,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.count(args) + (1))))));

try{var fexpr__18155 = (function (){var format_in__17000__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__17001__auto__ = ((typeof format_in__17000__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17000__auto__) : cljs.pprint.cached_compile.call(null,format_in__17000__auto__)):format_in__17000__auto__);
return ((function (format_in__17000__auto__,cf__17001__auto__,_STAR_symbol_map_STAR_18154,args,nlis){
return (function() { 
var G__18156__delegate = function (args__17002__auto__){
var navigator__17003__auto__ = cljs.pprint.init_navigator(args__17002__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17001__auto__,navigator__17003__auto__);
};
var G__18156 = function (var_args){
var args__17002__auto__ = null;
if (arguments.length > 0) {
var G__18157__i = 0, G__18157__a = new Array(arguments.length -  0);
while (G__18157__i < G__18157__a.length) {G__18157__a[G__18157__i] = arguments[G__18157__i + 0]; ++G__18157__i;}
  args__17002__auto__ = new cljs.core.IndexedSeq(G__18157__a,0,null);
} 
return G__18156__delegate.call(this,args__17002__auto__);};
G__18156.cljs$lang$maxFixedArity = 0;
G__18156.cljs$lang$applyTo = (function (arglist__18158){
var args__17002__auto__ = cljs.core.seq(arglist__18158);
return G__18156__delegate(args__17002__auto__);
});
G__18156.cljs$core$IFn$_invoke$arity$variadic = G__18156__delegate;
return G__18156;
})()
;
;})(format_in__17000__auto__,cf__17001__auto__,_STAR_symbol_map_STAR_18154,args,nlis))
})();
return (fexpr__18155.cljs$core$IFn$_invoke$arity$1 ? fexpr__18155.cljs$core$IFn$_invoke$arity$1(nlis) : fexpr__18155.call(null,nlis));
}finally {cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR_18154;
}} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint.pprint_simple_code_list = (function cljs$pprint$pprint_simple_code_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18159_18162 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18160_18163 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

var length_count18161_18164 = (0);
var alis_18165__$1 = cljs.core.seq(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count18161_18164 < cljs.core._STAR_print_length_STAR_))){
if(alis_18165__$1){
cljs.pprint.write_out(cljs.core.first(alis_18165__$1));

if(cljs.core.next(alis_18165__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__18166 = (length_count18161_18164 + (1));
var G__18167 = cljs.core.next(alis_18165__$1);
length_count18161_18164 = G__18166;
alis_18165__$1 = G__18167;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18160_18163;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18159_18162;
}}

return null;
});
cljs.pprint.two_forms = (function cljs$pprint$two_forms(amap){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__9156__auto__ = (function cljs$pprint$two_forms_$_iter__18168(s__18169){
return (new cljs.core.LazySeq(null,(function (){
var s__18169__$1 = s__18169;
while(true){
var temp__5535__auto__ = cljs.core.seq(s__18169__$1);
if(temp__5535__auto__){
var s__18169__$2 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18169__$2)){
var c__9154__auto__ = cljs.core.chunk_first(s__18169__$2);
var size__9155__auto__ = cljs.core.count(c__9154__auto__);
var b__18171 = cljs.core.chunk_buffer(size__9155__auto__);
if((function (){var i__18170 = (0);
while(true){
if((i__18170 < size__9155__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9154__auto__,i__18170);
cljs.core.chunk_append(b__18171,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null));

var G__18172 = (i__18170 + (1));
i__18170 = G__18172;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18171),cljs$pprint$two_forms_$_iter__18168(cljs.core.chunk_rest(s__18169__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18171),null);
}
} else {
var x = cljs.core.first(s__18169__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null),cljs$pprint$two_forms_$_iter__18168(cljs.core.rest(s__18169__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9156__auto__(amap);
})()], 0)));
});
cljs.pprint.add_core_ns = (function cljs$pprint$add_core_ns(amap){
var core = "clojure.core";
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (core){
return (function (p1__18173_SHARP_){
var vec__18174 = p1__18173_SHARP_;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18174,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18174,(1),null);
if(cljs.core.not((function (){var or__8274__auto__ = cljs.core.namespace(s);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return cljs.core.special_symbol_QMARK_(s);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(core,cljs.core.name(s)),f], null);
} else {
return p1__18173_SHARP_;
}
});})(core))
,amap));
});
cljs.pprint._STAR_code_table_STAR_ = cljs.pprint.two_forms(cljs.pprint.add_core_ns(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$_DOT_,cljs.core.cst$sym$fn_STAR_,cljs.core.cst$sym$when_DASH_first,cljs.core.cst$sym$if,cljs.core.cst$sym$condp,cljs.core.cst$sym$$$,cljs.core.cst$sym$defmacro,cljs.core.cst$sym$defn,cljs.core.cst$sym$loop,cljs.core.cst$sym$struct,cljs.core.cst$sym$doseq,cljs.core.cst$sym$if_DASH_not,cljs.core.cst$sym$when_DASH_not,cljs.core.cst$sym$def,cljs.core.cst$sym$when,cljs.core.cst$sym$with_DASH_open,cljs.core.cst$sym$with_DASH_local_DASH_vars,cljs.core.cst$sym$defonce,cljs.core.cst$sym$when_DASH_let,cljs.core.cst$sym$ns,cljs.core.cst$sym$dotimes,cljs.core.cst$sym$cond,cljs.core.cst$sym$let,cljs.core.cst$sym$fn,cljs.core.cst$sym$defn_DASH_,cljs.core.cst$sym$locking,cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$if_DASH_let,cljs.core.cst$sym$binding,cljs.core.cst$sym$struct_DASH_map],[cljs.pprint.pprint_hold_first,cljs.pprint.pprint_anon_func,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_condp,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_if,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_if,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_ns,cljs.pprint.pprint_let,cljs.pprint.pprint_cond,cljs.pprint.pprint_let,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first])));
cljs.pprint.pprint_code_list = (function cljs$pprint$pprint_code_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
var temp__5533__auto__ = (function (){var G__18177 = cljs.core.first(alis);
return (cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1(G__18177) : cljs.pprint._STAR_code_table_STAR_.call(null,G__18177));
})();
if(cljs.core.truth_(temp__5533__auto__)){
var special_form = temp__5533__auto__;
return (special_form.cljs$core$IFn$_invoke$arity$1 ? special_form.cljs$core$IFn$_invoke$arity$1(alis) : special_form.call(null,alis));
} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
} else {
return null;
}
});
cljs.pprint.pprint_code_symbol = (function cljs$pprint$pprint_code_symbol(sym){
var temp__5533__auto__ = (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_symbol_map_STAR_) : sym.call(null,cljs.pprint._STAR_symbol_map_STAR_));
if(cljs.core.truth_(temp__5533__auto__)){
var arg_num = temp__5533__auto__;
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg_num], 0));
} else {
if(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(sym)], 0));
} else {
return (cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(sym) : cljs.pprint.pr.call(null,sym));
}
}
});
if(typeof cljs.pprint.code_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for pretty printing Clojure code.
 */
cljs.pprint.code_dispatch = (function (){var method_table__9329__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9330__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9331__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9332__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9333__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","code-dispatch"),cljs.pprint.type_dispatcher,cljs.core.cst$kw$default,hierarchy__9333__auto__,method_table__9329__auto__,prefer_table__9330__auto__,method_cache__9331__auto__,cached_hierarchy__9332__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$list,cljs.pprint.pprint_code_list);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$symbol,cljs.pprint.pprint_code_symbol);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$vector,cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$map,cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$set,cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$queue,cljs.pprint.pprint_pqueue);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$deref,cljs.pprint.pprint_ideref);
cljs.pprint.use_method(cljs.pprint.code_dispatch,null,cljs.pprint.pr);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$default,cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
cljs.pprint.add_padding = (function cljs$pprint$add_padding(width,s){
var padding = (function (){var x__8626__auto__ = (0);
var y__8627__auto__ = (width - cljs.core.count(s));
return ((x__8626__auto__ > y__8627__auto__) ? x__8626__auto__ : y__8627__auto__);
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(padding," ")),s);
});
/**
 * Prints a collection of maps in a textual table. Prints table headings
 * ks, and then a line of output for each row, corresponding to the keys
 * in ks. If ks are not specified, use the keys of the first item in rows.
 */
cljs.pprint.print_table = (function cljs$pprint$print_table(var_args){
var G__18182 = arguments.length;
switch (G__18182) {
case 2:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2 = (function (ks,rows){
var _STAR_print_newline_STAR_18183 = cljs.core._STAR_print_newline_STAR_;
try{if(cljs.core.seq(rows)){
var widths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR_18183){
return (function (k){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,cljs.core.count([cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR_18183){
return (function (p1__18178_SHARP_){
return cljs.core.count([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__18178_SHARP_,k))].join(''));
});})(_STAR_print_newline_STAR_18183))
,rows));
});})(_STAR_print_newline_STAR_18183))
,ks);
var spacers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (widths,_STAR_print_newline_STAR_18183){
return (function (p1__18179_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(p1__18179_SHARP_,"-"));
});})(widths,_STAR_print_newline_STAR_18183))
,widths);
var fmt_row = ((function (widths,spacers,_STAR_print_newline_STAR_18183){
return (function (leader,divider,trailer,row){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(leader),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(divider,(function (){var iter__9156__auto__ = ((function (widths,spacers,_STAR_print_newline_STAR_18183){
return (function cljs$pprint$iter__18184(s__18185){
return (new cljs.core.LazySeq(null,((function (widths,spacers,_STAR_print_newline_STAR_18183){
return (function (){
var s__18185__$1 = s__18185;
while(true){
var temp__5535__auto__ = cljs.core.seq(s__18185__$1);
if(temp__5535__auto__){
var s__18185__$2 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18185__$2)){
var c__9154__auto__ = cljs.core.chunk_first(s__18185__$2);
var size__9155__auto__ = cljs.core.count(c__9154__auto__);
var b__18187 = cljs.core.chunk_buffer(size__9155__auto__);
if((function (){var i__18186 = (0);
while(true){
if((i__18186 < size__9155__auto__)){
var vec__18188 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9154__auto__,i__18186);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18188,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18188,(1),null);
cljs.core.chunk_append(b__18187,cljs.pprint.add_padding(width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')));

var G__18199 = (i__18186 + (1));
i__18186 = G__18199;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18187),cljs$pprint$iter__18184(cljs.core.chunk_rest(s__18185__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18187),null);
}
} else {
var vec__18191 = cljs.core.first(s__18185__$2);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18191,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18191,(1),null);
return cljs.core.cons(cljs.pprint.add_padding(width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')),cljs$pprint$iter__18184(cljs.core.rest(s__18185__$2)));
}
} else {
return null;
}
break;
}
});})(widths,spacers,_STAR_print_newline_STAR_18183))
,null,null));
});})(widths,spacers,_STAR_print_newline_STAR_18183))
;
return iter__9156__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (iter__9156__auto__,widths,spacers,_STAR_print_newline_STAR_18183){
return (function (p1__18180_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__18180_SHARP_);
});})(iter__9156__auto__,widths,spacers,_STAR_print_newline_STAR_18183))
,ks),widths));
})()))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(trailer)].join('');
});})(widths,spacers,_STAR_print_newline_STAR_18183))
;
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",cljs.core.zipmap(ks,ks))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("|-","-+-","-|",cljs.core.zipmap(ks,spacers))], 0));

var seq__18194 = cljs.core.seq(rows);
var chunk__18195 = null;
var count__18196 = (0);
var i__18197 = (0);
while(true){
if((i__18197 < count__18196)){
var row = chunk__18195.cljs$core$IIndexed$_nth$arity$2(null,i__18197);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));

var G__18200 = seq__18194;
var G__18201 = chunk__18195;
var G__18202 = count__18196;
var G__18203 = (i__18197 + (1));
seq__18194 = G__18200;
chunk__18195 = G__18201;
count__18196 = G__18202;
i__18197 = G__18203;
continue;
} else {
var temp__5535__auto__ = cljs.core.seq(seq__18194);
if(temp__5535__auto__){
var seq__18194__$1 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18194__$1)){
var c__9205__auto__ = cljs.core.chunk_first(seq__18194__$1);
var G__18204 = cljs.core.chunk_rest(seq__18194__$1);
var G__18205 = c__9205__auto__;
var G__18206 = cljs.core.count(c__9205__auto__);
var G__18207 = (0);
seq__18194 = G__18204;
chunk__18195 = G__18205;
count__18196 = G__18206;
i__18197 = G__18207;
continue;
} else {
var row = cljs.core.first(seq__18194__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));

var G__18208 = cljs.core.next(seq__18194__$1);
var G__18209 = null;
var G__18210 = (0);
var G__18211 = (0);
seq__18194 = G__18208;
chunk__18195 = G__18209;
count__18196 = G__18210;
i__18197 = G__18211;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_18183;
}});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(cljs.core.first(rows)),rows);
});

cljs.pprint.print_table.cljs$lang$maxFixedArity = 2;

