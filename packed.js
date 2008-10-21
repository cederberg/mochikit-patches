if(typeof (dojo)!="undefined"){
dojo.provide("MochiKit.Base");
}
if(typeof (MochiKit)=="undefined"){
MochiKit={};
}
if(typeof (MochiKit.Base)=="undefined"){
MochiKit.Base={};
}
if(typeof (MochiKit.__export__)=="undefined"){
MochiKit.__export__=(MochiKit.__compat__||(typeof (JSAN)=="undefined"&&typeof (dojo)=="undefined"));
}
MochiKit.Base.VERSION="1.5";
MochiKit.Base.NAME="MochiKit.Base";
MochiKit.Base.update=function(_1,_2){
if(_1===null||_1===undefined){
_1={};
}
for(var i=1;i<arguments.length;i++){
var o=arguments[i];
if(typeof (o)!="undefined"&&o!==null){
for(var k in o){
_1[k]=o[k];
}
}
}
return _1;
};
MochiKit.Base.update(MochiKit.Base,{__repr__:function(){
return "["+this.NAME+" "+this.VERSION+"]";
},toString:function(){
return this.__repr__();
},camelize:function(_6){
var _7=_6.split("-");
var cc=_7[0];
for(var i=1;i<_7.length;i++){
cc+=_7[i].charAt(0).toUpperCase()+_7[i].substring(1);
}
return cc;
},counter:function(n){
if(arguments.length===0){
n=1;
}
return function(){
return n++;
};
},clone:function(_b){
var me=arguments.callee;
if(arguments.length==1){
me.prototype=_b;
return new me();
}
},_deps:function(_d,_e){
if(!(_d in MochiKit)){
MochiKit[_d]={};
}
if(typeof (dojo)!="undefined"){
dojo.provide("MochiKit."+_d);
}
for(var i=0;i<_e.length;i++){
if(typeof (dojo)!="undefined"){
dojo.require("MochiKit."+_e[i]);
}
if(typeof (JSAN)!="undefined"){
JSAN.use("MochiKit."+_e[i],[]);
}
if(!(_e[i] in MochiKit)){
throw "MochiKit."+_d+" depends on MochiKit."+_e[i]+"!";
}
}
},_flattenArray:function(res,lst){
for(var i=0;i<lst.length;i++){
var o=lst[i];
if(o instanceof Array){
arguments.callee(res,o);
}else{
res.push(o);
}
}
return res;
},flattenArray:function(lst){
return MochiKit.Base._flattenArray([],lst);
},flattenArguments:function(lst){
var res=[];
var m=MochiKit.Base;
var _18=m.extend(null,arguments);
while(_18.length){
var o=_18.shift();
if(o&&typeof (o)=="object"&&typeof (o.length)=="number"){
for(var i=o.length-1;i>=0;i--){
_18.unshift(o[i]);
}
}else{
res.push(o);
}
}
return res;
},extend:function(_1b,obj,_1d){
if(!_1d){
_1d=0;
}
if(obj){
var l=obj.length;
if(typeof (l)!="number"){
if(typeof (MochiKit.Iter)!="undefined"){
obj=MochiKit.Iter.list(obj);
l=obj.length;
}else{
throw new TypeError("Argument not an array-like and MochiKit.Iter not present");
}
}
if(!_1b){
_1b=[];
}
for(var i=_1d;i<l;i++){
_1b.push(obj[i]);
}
}
return _1b;
},updatetree:function(_20,obj){
if(_20===null||_20===undefined){
_20={};
}
for(var i=1;i<arguments.length;i++){
var o=arguments[i];
if(typeof (o)!="undefined"&&o!==null){
for(var k in o){
var v=o[k];
if(typeof (_20[k])=="object"&&typeof (v)=="object"){
arguments.callee(_20[k],v);
}else{
_20[k]=v;
}
}
}
}
return _20;
},setdefault:function(_26,obj){
if(_26===null||_26===undefined){
_26={};
}
for(var i=1;i<arguments.length;i++){
var o=arguments[i];
for(var k in o){
if(!(k in _26)){
_26[k]=o[k];
}
}
}
return _26;
},keys:function(obj){
var _2c=[];
for(var _2d in obj){
_2c.push(_2d);
}
return _2c;
},values:function(obj){
var _2f=[];
for(var _30 in obj){
_2f.push(obj[_30]);
}
return _2f;
},items:function(obj){
var _32=[];
var e;
for(var _34 in obj){
var v;
try{
v=obj[_34];
}
catch(e){
continue;
}
_32.push([_34,v]);
}
return _32;
},_newNamedError:function(_36,_37,_38){
_38.prototype=new MochiKit.Base.NamedError(_36.NAME+"."+_37);
_36[_37]=_38;
},operator:{truth:function(a){
return !!a;
},lognot:function(a){
return !a;
},identity:function(a){
return a;
},not:function(a){
return ~a;
},neg:function(a){
return -a;
},add:function(a,b){
return a+b;
},sub:function(a,b){
return a-b;
},div:function(a,b){
return a/b;
},mod:function(a,b){
return a%b;
},mul:function(a,b){
return a*b;
},and:function(a,b){
return a&b;
},or:function(a,b){
return a|b;
},xor:function(a,b){
return a^b;
},lshift:function(a,b){
return a<<b;
},rshift:function(a,b){
return a>>b;
},zrshift:function(a,b){
return a>>>b;
},eq:function(a,b){
return a==b;
},ne:function(a,b){
return a!=b;
},gt:function(a,b){
return a>b;
},ge:function(a,b){
return a>=b;
},lt:function(a,b){
return a<b;
},le:function(a,b){
return a<=b;
},seq:function(a,b){
return a===b;
},sne:function(a,b){
return a!==b;
},ceq:function(a,b){
return MochiKit.Base.compare(a,b)===0;
},cne:function(a,b){
return MochiKit.Base.compare(a,b)!==0;
},cgt:function(a,b){
return MochiKit.Base.compare(a,b)==1;
},cge:function(a,b){
return MochiKit.Base.compare(a,b)!=-1;
},clt:function(a,b){
return MochiKit.Base.compare(a,b)==-1;
},cle:function(a,b){
return MochiKit.Base.compare(a,b)!=1;
},logand:function(a,b){
return a&&b;
},logor:function(a,b){
return a||b;
},contains:function(a,b){
return b in a;
}},forwardCall:function(_76){
return function(){
return this[_76].apply(this,arguments);
};
},itemgetter:function(_77){
return function(arg){
return arg[_77];
};
},typeMatcher:function(){
var _79={};
for(var i=0;i<arguments.length;i++){
var typ=arguments[i];
_79[typ]=typ;
}
return function(){
for(var i=0;i<arguments.length;i++){
if(!(typeof (arguments[i]) in _79)){
return false;
}
}
return true;
};
},isNull:function(){
for(var i=0;i<arguments.length;i++){
if(arguments[i]!==null){
return false;
}
}
return true;
},isUndefinedOrNull:function(){
for(var i=0;i<arguments.length;i++){
var o=arguments[i];
if(!(typeof (o)=="undefined"||o===null)){
return false;
}
}
return true;
},isEmpty:function(obj){
return !MochiKit.Base.isNotEmpty.apply(this,arguments);
},isNotEmpty:function(obj){
for(var i=0;i<arguments.length;i++){
var o=arguments[i];
if(!(o&&o.length)){
return false;
}
}
return true;
},isArrayLike:function(){
for(var i=0;i<arguments.length;i++){
var o=arguments[i];
var typ=typeof (o);
if((typ!="object"&&!(typ=="function"&&typeof (o.item)=="function"))||o===null||typeof (o.length)!="number"||o.nodeType===3||o.nodeType===4){
return false;
}
}
return true;
},isDateLike:function(){
for(var i=0;i<arguments.length;i++){
var o=arguments[i];
if(typeof (o)!="object"||o===null||typeof (o.getTime)!="function"){
return false;
}
}
return true;
},xmap:function(fn){
if(fn===null){
return MochiKit.Base.extend(null,arguments,1);
}
var _8a=[];
for(var i=1;i<arguments.length;i++){
_8a.push(fn(arguments[i]));
}
return _8a;
},map:function(fn,lst){
var m=MochiKit.Base;
var itr=MochiKit.Iter;
var _90=m.isArrayLike;
if(arguments.length<=2){
if(!_90(lst)){
if(itr){
lst=itr.list(lst);
if(fn===null){
return lst;
}
}else{
throw new TypeError("Argument not an array-like and MochiKit.Iter not present");
}
}
if(fn===null){
return m.extend(null,lst);
}
var _91=[];
for(var i=0;i<lst.length;i++){
_91.push(fn(lst[i]));
}
return _91;
}else{
if(fn===null){
fn=Array;
}
var _93=null;
for(i=1;i<arguments.length;i++){
if(!_90(arguments[i])){
if(itr){
return itr.list(itr.imap.apply(null,arguments));
}else{
throw new TypeError("Argument not an array-like and MochiKit.Iter not present");
}
}
var l=arguments[i].length;
if(_93===null||_93>l){
_93=l;
}
}
_91=[];
for(i=0;i<_93;i++){
var _95=[];
for(var j=1;j<arguments.length;j++){
_95.push(arguments[j][i]);
}
_91.push(fn.apply(this,_95));
}
return _91;
}
},xfilter:function(fn){
var _98=[];
if(fn===null){
fn=MochiKit.Base.operator.truth;
}
for(var i=1;i<arguments.length;i++){
var o=arguments[i];
if(fn(o)){
_98.push(o);
}
}
return _98;
},filter:function(fn,lst,_9d){
var _9e=[];
var m=MochiKit.Base;
if(!m.isArrayLike(lst)){
if(MochiKit.Iter){
lst=MochiKit.Iter.list(lst);
}else{
throw new TypeError("Argument not an array-like and MochiKit.Iter not present");
}
}
if(fn===null){
fn=m.operator.truth;
}
if(typeof (Array.prototype.filter)=="function"){
return Array.prototype.filter.call(lst,fn,_9d);
}else{
if(typeof (_9d)=="undefined"||_9d===null){
for(var i=0;i<lst.length;i++){
var o=lst[i];
if(fn(o)){
_9e.push(o);
}
}
}else{
for(i=0;i<lst.length;i++){
o=lst[i];
if(fn.call(_9d,o)){
_9e.push(o);
}
}
}
}
return _9e;
},_wrapDumbFunction:function(_a2){
return function(){
switch(arguments.length){
case 0:
return _a2();
case 1:
return _a2(arguments[0]);
case 2:
return _a2(arguments[0],arguments[1]);
case 3:
return _a2(arguments[0],arguments[1],arguments[2]);
}
var _a3=[];
for(var i=0;i<arguments.length;i++){
_a3.push("arguments["+i+"]");
}
return eval("(func("+_a3.join(",")+"))");
};
},methodcaller:function(_a5){
var _a6=MochiKit.Base.extend(null,arguments,1);
if(typeof (_a5)=="function"){
return function(obj){
return _a5.apply(obj,_a6);
};
}else{
return function(obj){
return obj[_a5].apply(obj,_a6);
};
}
},method:function(_a9,_aa){
var m=MochiKit.Base;
return m.bind.apply(this,m.extend([_aa,_a9],arguments,2));
},compose:function(f1,f2){
var _ae=[];
var m=MochiKit.Base;
if(arguments.length===0){
throw new TypeError("compose() requires at least one argument");
}
for(var i=0;i<arguments.length;i++){
var fn=arguments[i];
if(typeof (fn)!="function"){
throw new TypeError(m.repr(fn)+" is not a function");
}
_ae.push(fn);
}
return function(){
var _b2=arguments;
for(var i=_ae.length-1;i>=0;i--){
_b2=[_ae[i].apply(this,_b2)];
}
return _b2[0];
};
},bind:function(_b4,_b5){
if(typeof (_b4)=="string"){
_b4=_b5[_b4];
}
var _b6=_b4.im_func;
var _b7=_b4.im_preargs;
var _b8=_b4.im_self;
var m=MochiKit.Base;
if(typeof (_b4)=="function"&&typeof (_b4.apply)=="undefined"){
_b4=m._wrapDumbFunction(_b4);
}
if(typeof (_b6)!="function"){
_b6=_b4;
}
if(typeof (_b5)!="undefined"){
_b8=_b5;
}
if(typeof (_b7)=="undefined"){
_b7=[];
}else{
_b7=_b7.slice();
}
m.extend(_b7,arguments,2);
var _ba=function(){
var _bb=arguments;
var me=arguments.callee;
if(me.im_preargs.length>0){
_bb=m.concat(me.im_preargs,_bb);
}
var _bd=me.im_self;
if(!_bd){
_bd=this;
}
return me.im_func.apply(_bd,_bb);
};
_ba.im_self=_b8;
_ba.im_func=_b6;
_ba.im_preargs=_b7;
return _ba;
},bindLate:function(_be,_bf){
var m=MochiKit.Base;
if(typeof (_be)!="string"){
return m.bind.apply(this,arguments);
}
var _c1=m.extend([],arguments,2);
var _c2=function(){
var _c3=arguments;
var me=arguments.callee;
if(me.im_preargs.length>0){
_c3=m.concat(me.im_preargs,_c3);
}
var _c5=me.im_self;
if(!_c5){
_c5=this;
}
return _c5[me.im_func].apply(_c5,_c3);
};
_c2.im_self=_bf;
_c2.im_func=_be;
_c2.im_preargs=_c1;
return _c2;
},bindMethods:function(_c6){
var _c7=MochiKit.Base.bind;
for(var k in _c6){
var _c9=_c6[k];
if(typeof (_c9)=="function"){
_c6[k]=_c7(_c9,_c6);
}
}
},registerComparator:function(_ca,_cb,_cc,_cd){
MochiKit.Base.comparatorRegistry.register(_ca,_cb,_cc,_cd);
},_primitives:{"boolean":true,"string":true,"number":true},compare:function(a,b){
if(a==b){
return 0;
}
var _d0=(typeof (a)=="undefined"||a===null);
var _d1=(typeof (b)=="undefined"||b===null);
if(_d0&&_d1){
return 0;
}else{
if(_d0){
return -1;
}else{
if(_d1){
return 1;
}
}
}
var m=MochiKit.Base;
var _d3=m._primitives;
if(!(typeof (a) in _d3&&typeof (b) in _d3)){
try{
return m.comparatorRegistry.match(a,b);
}
catch(e){
if(e!=m.NotFound){
throw e;
}
}
}
if(a<b){
return -1;
}else{
if(a>b){
return 1;
}
}
var _d4=m.repr;
throw new TypeError(_d4(a)+" and "+_d4(b)+" can not be compared");
},compareDateLike:function(a,b){
return MochiKit.Base.compare(a.getTime(),b.getTime());
},compareArrayLike:function(a,b){
var _d9=MochiKit.Base.compare;
var _da=a.length;
var _db=0;
if(_da>b.length){
_db=1;
_da=b.length;
}else{
if(_da<b.length){
_db=-1;
}
}
for(var i=0;i<_da;i++){
var cmp=_d9(a[i],b[i]);
if(cmp){
return cmp;
}
}
return _db;
},registerRepr:function(_de,_df,_e0,_e1){
MochiKit.Base.reprRegistry.register(_de,_df,_e0,_e1);
},repr:function(o){
if(typeof (o)=="undefined"){
return "undefined";
}else{
if(o===null){
return "null";
}
}
try{
if(typeof (o.__repr__)=="function"){
return o.__repr__();
}else{
if(typeof (o.repr)=="function"&&o.repr!=arguments.callee){
return o.repr();
}
}
return MochiKit.Base.reprRegistry.match(o);
}
catch(e){
if(typeof (o.NAME)=="string"&&(o.toString==Function.prototype.toString||o.toString==Object.prototype.toString)){
return o.NAME;
}
}
try{
var _e3=(o+"");
}
catch(e){
return "["+typeof (o)+"]";
}
if(typeof (o)=="function"){
_e3=_e3.replace(/^\s+/,"").replace(/\s+/g," ");
_e3=_e3.replace(/,(\S)/,", $1");
var idx=_e3.indexOf("{");
if(idx!=-1){
_e3=_e3.substr(0,idx)+"{...}";
}
}
return _e3;
},reprArrayLike:function(o){
var m=MochiKit.Base;
return "["+m.map(m.repr,o).join(", ")+"]";
},reprString:function(o){
return ("\""+o.replace(/(["\\])/g,"\\$1")+"\"").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\v]/g,"\\v").replace(/[\r]/g,"\\r");
},reprNumber:function(o){
return o+"";
},registerJSON:function(_e9,_ea,_eb,_ec){
MochiKit.Base.jsonRegistry.register(_e9,_ea,_eb,_ec);
},evalJSON:function(){
return eval("("+MochiKit.Base._filterJSON(arguments[0])+")");
},_filterJSON:function(s){
var m=s.match(/^\s*\/\*(.*)\*\/\s*$/);
if(m){
return m[1];
}
return s;
},serializeJSON:function(o){
var _f0=typeof (o);
if(_f0=="number"||_f0=="boolean"){
return o+"";
}else{
if(o===null){
return "null";
}else{
if(_f0=="string"){
var res="";
for(var i=0;i<o.length;i++){
var c=o.charAt(i);
if(c=="\""){
res+="\\\"";
}else{
if(c=="\\"){
res+="\\\\";
}else{
if(c=="\b"){
res+="\\b";
}else{
if(c=="\f"){
res+="\\f";
}else{
if(c=="\n"){
res+="\\n";
}else{
if(c=="\r"){
res+="\\r";
}else{
if(c=="\t"){
res+="\\t";
}else{
if(o.charCodeAt(i)<=31){
var hex=o.charCodeAt(i).toString(16);
if(hex.length<2){
hex="0"+hex;
}
res+="\\u00"+hex.toUpperCase();
}else{
res+=c;
}
}
}
}
}
}
}
}
}
return "\""+res+"\"";
}
}
}
var me=arguments.callee;
var _f6;
if(typeof (o.__json__)=="function"){
_f6=o.__json__();
if(o!==_f6){
return me(_f6);
}
}
if(typeof (o.json)=="function"){
_f6=o.json();
if(o!==_f6){
return me(_f6);
}
}
if(_f0!="function"&&typeof (o.length)=="number"){
var res=[];
for(var i=0;i<o.length;i++){
var val=me(o[i]);
if(typeof (val)!="string"){
continue;
}
res.push(val);
}
return "["+res.join(", ")+"]";
}
var m=MochiKit.Base;
try{
_f6=m.jsonRegistry.match(o);
if(o!==_f6){
return me(_f6);
}
}
catch(e){
if(e!=m.NotFound){
throw e;
}
}
if(_f0=="undefined"){
throw new TypeError("undefined can not be serialized as JSON");
}
if(_f0=="function"){
return null;
}
res=[];
for(var k in o){
var _fa;
if(typeof (k)=="number"){
_fa="\""+k+"\"";
}else{
if(typeof (k)=="string"){
_fa=me(k);
}else{
continue;
}
}
val=me(o[k]);
if(typeof (val)!="string"){
continue;
}
res.push(_fa+":"+val);
}
return "{"+res.join(", ")+"}";
},objEqual:function(a,b){
return (MochiKit.Base.compare(a,b)===0);
},arrayEqual:function(_fd,arr){
if(_fd.length!=arr.length){
return false;
}
return (MochiKit.Base.compare(_fd,arr)===0);
},concat:function(){
var _ff=[];
var _100=MochiKit.Base.extend;
for(var i=0;i<arguments.length;i++){
_100(_ff,arguments[i]);
}
return _ff;
},keyComparator:function(key){
var m=MochiKit.Base;
var _104=m.compare;
if(arguments.length==1){
return function(a,b){
return _104(a[key],b[key]);
};
}
var _107=m.extend(null,arguments);
return function(a,b){
var rval=0;
for(var i=0;(rval===0)&&(i<_107.length);i++){
var key=_107[i];
rval=_104(a[key],b[key]);
}
return rval;
};
},reverseKeyComparator:function(key){
var _10e=MochiKit.Base.keyComparator.apply(this,arguments);
return function(a,b){
return _10e(b,a);
};
},partial:function(func){
var m=MochiKit.Base;
return m.bind.apply(this,m.extend([func,undefined],arguments,1));
},listMinMax:function(_113,lst){
if(lst.length===0){
return null;
}
var cur=lst[0];
var _116=MochiKit.Base.compare;
for(var i=1;i<lst.length;i++){
var o=lst[i];
if(_116(o,cur)==_113){
cur=o;
}
}
return cur;
},objMax:function(){
return MochiKit.Base.listMinMax(1,arguments);
},objMin:function(){
return MochiKit.Base.listMinMax(-1,arguments);
},findIdentical:function(lst,_11a,_11b,end){
if(typeof (end)=="undefined"||end===null){
end=lst.length;
}
if(typeof (_11b)=="undefined"||_11b===null){
_11b=0;
}
for(var i=_11b;i<end;i++){
if(lst[i]===_11a){
return i;
}
}
return -1;
},mean:function(){
var sum=0;
var m=MochiKit.Base;
var args=m.extend(null,arguments);
var _121=args.length;
while(args.length){
var o=args.shift();
if(o&&typeof (o)=="object"&&typeof (o.length)=="number"){
_121+=o.length-1;
for(var i=o.length-1;i>=0;i--){
sum+=o[i];
}
}else{
sum+=o;
}
}
if(_121<=0){
throw new TypeError("mean() requires at least one argument");
}
return sum/_121;
},median:function(){
var data=MochiKit.Base.flattenArguments(arguments);
if(data.length===0){
throw new TypeError("median() requires at least one argument");
}
data.sort(compare);
if(data.length%2==0){
var _125=data.length/2;
return (data[_125]+data[_125-1])/2;
}else{
return data[(data.length-1)/2];
}
},findValue:function(lst,_127,_128,end){
if(typeof (end)=="undefined"||end===null){
end=lst.length;
}
if(typeof (_128)=="undefined"||_128===null){
_128=0;
}
var cmp=MochiKit.Base.compare;
for(var i=_128;i<end;i++){
if(cmp(lst[i],_127)===0){
return i;
}
}
return -1;
},nodeWalk:function(node,_12d){
var _12e=[node];
var _12f=MochiKit.Base.extend;
while(_12e.length){
var res=_12d(_12e.shift());
if(res){
_12f(_12e,res);
}
}
},nameFunctions:function(_131){
var base=_131.NAME;
if(typeof (base)=="undefined"){
base="";
}else{
base=base+".";
}
for(var name in _131){
var o=_131[name];
if(typeof (o)=="function"&&typeof (o.NAME)=="undefined"){
try{
o.NAME=base+name;
}
catch(e){
}
}
}
},queryString:function(_135,_136){
if(typeof (MochiKit.DOM)!="undefined"&&arguments.length==1&&(typeof (_135)=="string"||(typeof (_135.nodeType)!="undefined"&&_135.nodeType>0))){
var kv=MochiKit.DOM.formContents(_135);
_135=kv[0];
_136=kv[1];
}else{
if(arguments.length==1){
if(typeof (_135.length)=="number"&&_135.length==2){
return arguments.callee(_135[0],_135[1]);
}
var o=_135;
_135=[];
_136=[];
for(var k in o){
var v=o[k];
if(typeof (v)=="function"){
continue;
}else{
if(MochiKit.Base.isArrayLike(v)){
for(var i=0;i<v.length;i++){
_135.push(k);
_136.push(v[i]);
}
}else{
_135.push(k);
_136.push(v);
}
}
}
}
}
var rval=[];
var len=Math.min(_135.length,_136.length);
var _13e=MochiKit.Base.urlEncode;
for(var i=0;i<len;i++){
v=_136[i];
if(typeof (v)!="undefined"&&v!==null){
rval.push(_13e(_135[i])+"="+_13e(v));
}
}
return rval.join("&");
},parseQueryString:function(_13f,_140){
var qstr=(_13f.charAt(0)=="?")?_13f.substring(1):_13f;
var _142=qstr.replace(/\+/g,"%20").split(/\&amp\;|\&\#38\;|\&#x26;|\&/);
var o={};
var _144;
if(typeof (decodeURIComponent)!="undefined"){
_144=decodeURIComponent;
}else{
_144=unescape;
}
if(_140){
for(var i=0;i<_142.length;i++){
var pair=_142[i].split("=");
var name=_144(pair.shift());
if(!name){
continue;
}
var arr=o[name];
if(!(arr instanceof Array)){
arr=[];
o[name]=arr;
}
arr.push(_144(pair.join("=")));
}
}else{
for(i=0;i<_142.length;i++){
pair=_142[i].split("=");
var name=pair.shift();
if(!name){
continue;
}
o[_144(name)]=_144(pair.join("="));
}
}
return o;
}});
MochiKit.Base.AdapterRegistry=function(){
this.pairs=[];
};
MochiKit.Base.AdapterRegistry.prototype={register:function(name,_14a,wrap,_14c){
if(_14c){
this.pairs.unshift([name,_14a,wrap]);
}else{
this.pairs.push([name,_14a,wrap]);
}
},match:function(){
for(var i=0;i<this.pairs.length;i++){
var pair=this.pairs[i];
if(pair[1].apply(this,arguments)){
return pair[2].apply(this,arguments);
}
}
throw MochiKit.Base.NotFound;
},unregister:function(name){
for(var i=0;i<this.pairs.length;i++){
var pair=this.pairs[i];
if(pair[0]==name){
this.pairs.splice(i,1);
return true;
}
}
return false;
}};
MochiKit.Base.EXPORT=["flattenArray","noop","camelize","counter","clone","extend","update","updatetree","setdefault","keys","values","items","NamedError","operator","forwardCall","itemgetter","typeMatcher","isCallable","isUndefined","isUndefinedOrNull","isNull","isEmpty","isNotEmpty","isArrayLike","isDateLike","xmap","map","xfilter","filter","methodcaller","compose","bind","bindLate","bindMethods","NotFound","AdapterRegistry","registerComparator","compare","registerRepr","repr","objEqual","arrayEqual","concat","keyComparator","reverseKeyComparator","partial","merge","listMinMax","listMax","listMin","objMax","objMin","nodeWalk","zip","urlEncode","queryString","serializeJSON","registerJSON","evalJSON","parseQueryString","findValue","findIdentical","flattenArguments","method","average","mean","median"];
MochiKit.Base.EXPORT_OK=["nameFunctions","comparatorRegistry","reprRegistry","jsonRegistry","compareDateLike","compareArrayLike","reprArrayLike","reprString","reprNumber"];
MochiKit.Base._exportSymbols=function(_152,_153){
if(!MochiKit.__export__){
return;
}
var all=_153.EXPORT_TAGS[":all"];
for(var i=0;i<all.length;i++){
_152[all[i]]=_153[all[i]];
}
};
MochiKit.Base.__new__=function(){
var m=this;
m.noop=m.operator.identity;
m.forward=m.forwardCall;
m.find=m.findValue;
if(typeof (encodeURIComponent)!="undefined"){
m.urlEncode=function(_157){
return encodeURIComponent(_157).replace(/\'/g,"%27");
};
}else{
m.urlEncode=function(_158){
return escape(_158).replace(/\+/g,"%2B").replace(/\"/g,"%22").rval.replace(/\'/g,"%27");
};
}
m.NamedError=function(name){
this.message=name;
this.name=name;
};
m.NamedError.prototype=new Error();
m.update(m.NamedError.prototype,{repr:function(){
if(this.message&&this.message!=this.name){
return this.name+"("+m.repr(this.message)+")";
}else{
return this.name+"()";
}
},toString:m.forwardCall("repr")});
m.NotFound=new m.NamedError("MochiKit.Base.NotFound");
m.listMax=m.partial(m.listMinMax,1);
m.listMin=m.partial(m.listMinMax,-1);
m.isCallable=m.typeMatcher("function");
m.isUndefined=m.typeMatcher("undefined");
m.merge=m.partial(m.update,null);
m.zip=m.partial(m.map,null);
m.average=m.mean;
m.comparatorRegistry=new m.AdapterRegistry();
m.registerComparator("dateLike",m.isDateLike,m.compareDateLike);
m.registerComparator("arrayLike",m.isArrayLike,m.compareArrayLike);
m.reprRegistry=new m.AdapterRegistry();
m.registerRepr("arrayLike",m.isArrayLike,m.reprArrayLike);
m.registerRepr("string",m.typeMatcher("string"),m.reprString);
m.registerRepr("numbers",m.typeMatcher("number","boolean"),m.reprNumber);
m.jsonRegistry=new m.AdapterRegistry();
var all=m.concat(m.EXPORT,m.EXPORT_OK);
m.EXPORT_TAGS={":common":m.concat(m.EXPORT_OK),":all":all};
m.nameFunctions(this);
};
MochiKit.Base.__new__();
if(MochiKit.__export__){
compare=MochiKit.Base.compare;
compose=MochiKit.Base.compose;
serializeJSON=MochiKit.Base.serializeJSON;
mean=MochiKit.Base.mean;
median=MochiKit.Base.median;
}
MochiKit.Base._exportSymbols(this,MochiKit.Base);
MochiKit.Base._deps("Iter",["Base"]);
MochiKit.Iter.NAME="MochiKit.Iter";
MochiKit.Iter.VERSION="1.5";
MochiKit.Base.update(MochiKit.Iter,{__repr__:function(){
return "["+this.NAME+" "+this.VERSION+"]";
},toString:function(){
return this.__repr__();
},registerIteratorFactory:function(name,_15c,_15d,_15e){
MochiKit.Iter.iteratorRegistry.register(name,_15c,_15d,_15e);
},isIterable:function(o){
return o!=null&&(typeof (o.next)=="function"||typeof (o.iter)=="function");
},iter:function(_160,_161){
var self=MochiKit.Iter;
if(arguments.length==2){
return self.takewhile(function(a){
return a!=_161;
},_160);
}
if(typeof (_160.next)=="function"){
return _160;
}else{
if(typeof (_160.iter)=="function"){
return _160.iter();
}
}
try{
return self.iteratorRegistry.match(_160);
}
catch(e){
var m=MochiKit.Base;
if(e==m.NotFound){
e=new TypeError(typeof (_160)+": "+m.repr(_160)+" is not iterable");
}
throw e;
}
},count:function(n){
if(!n){
n=0;
}
var m=MochiKit.Base;
return {repr:function(){
return "count("+n+")";
},toString:m.forwardCall("repr"),next:m.counter(n)};
},cycle:function(p){
var self=MochiKit.Iter;
var m=MochiKit.Base;
var lst=[];
var _16b=self.iter(p);
return {repr:function(){
return "cycle(...)";
},toString:m.forwardCall("repr"),next:function(){
try{
var rval=_16b.next();
lst.push(rval);
return rval;
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
if(lst.length===0){
this.next=function(){
throw self.StopIteration;
};
}else{
var i=-1;
this.next=function(){
i=(i+1)%lst.length;
return lst[i];
};
}
return this.next();
}
}};
},repeat:function(elem,n){
var m=MochiKit.Base;
if(typeof (n)=="undefined"){
return {repr:function(){
return "repeat("+m.repr(elem)+")";
},toString:m.forwardCall("repr"),next:function(){
return elem;
}};
}
return {repr:function(){
return "repeat("+m.repr(elem)+", "+n+")";
},toString:m.forwardCall("repr"),next:function(){
if(n<=0){
throw MochiKit.Iter.StopIteration;
}
n-=1;
return elem;
}};
},next:function(_171){
return _171.next();
},izip:function(p,q){
var m=MochiKit.Base;
var self=MochiKit.Iter;
var next=self.next;
var _177=m.map(self.iter,arguments);
return {repr:function(){
return "izip(...)";
},toString:m.forwardCall("repr"),next:function(){
return m.map(next,_177);
}};
},ifilter:function(pred,seq){
var m=MochiKit.Base;
seq=MochiKit.Iter.iter(seq);
if(pred===null){
pred=m.operator.truth;
}
return {repr:function(){
return "ifilter(...)";
},toString:m.forwardCall("repr"),next:function(){
while(true){
var rval=seq.next();
if(pred(rval)){
return rval;
}
}
return undefined;
}};
},ifilterfalse:function(pred,seq){
var m=MochiKit.Base;
seq=MochiKit.Iter.iter(seq);
if(pred===null){
pred=m.operator.truth;
}
return {repr:function(){
return "ifilterfalse(...)";
},toString:m.forwardCall("repr"),next:function(){
while(true){
var rval=seq.next();
if(!pred(rval)){
return rval;
}
}
return undefined;
}};
},islice:function(seq){
var self=MochiKit.Iter;
var m=MochiKit.Base;
seq=self.iter(seq);
var _183=0;
var stop=0;
var step=1;
var i=-1;
if(arguments.length==2){
stop=arguments[1];
}else{
if(arguments.length==3){
_183=arguments[1];
stop=arguments[2];
}else{
_183=arguments[1];
stop=arguments[2];
step=arguments[3];
}
}
return {repr:function(){
return "islice("+["...",_183,stop,step].join(", ")+")";
},toString:m.forwardCall("repr"),next:function(){
var rval;
while(i<_183){
rval=seq.next();
i++;
}
if(_183>=stop){
throw self.StopIteration;
}
_183+=step;
return rval;
}};
},imap:function(fun,p,q){
var m=MochiKit.Base;
var self=MochiKit.Iter;
var _18d=m.map(self.iter,m.extend(null,arguments,1));
var map=m.map;
var next=self.next;
return {repr:function(){
return "imap(...)";
},toString:m.forwardCall("repr"),next:function(){
return fun.apply(this,map(next,_18d));
}};
},applymap:function(fun,seq,self){
seq=MochiKit.Iter.iter(seq);
var m=MochiKit.Base;
return {repr:function(){
return "applymap(...)";
},toString:m.forwardCall("repr"),next:function(){
return fun.apply(self,seq.next());
}};
},chain:function(p,q){
var self=MochiKit.Iter;
var m=MochiKit.Base;
if(arguments.length==1){
return self.iter(arguments[0]);
}
var _198=m.map(self.iter,arguments);
return {repr:function(){
return "chain(...)";
},toString:m.forwardCall("repr"),next:function(){
while(_198.length>1){
try{
var _199=_198[0].next();
return _199;
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
_198.shift();
var _199=_198[0].next();
return _199;
}
}
if(_198.length==1){
var arg=_198.shift();
this.next=m.bind("next",arg);
return this.next();
}
throw self.StopIteration;
}};
},takewhile:function(pred,seq){
var self=MochiKit.Iter;
seq=self.iter(seq);
return {repr:function(){
return "takewhile(...)";
},toString:MochiKit.Base.forwardCall("repr"),next:function(){
var rval=seq.next();
if(!pred(rval)){
this.next=function(){
throw self.StopIteration;
};
this.next();
}
return rval;
}};
},dropwhile:function(pred,seq){
seq=MochiKit.Iter.iter(seq);
var m=MochiKit.Base;
var bind=m.bind;
return {"repr":function(){
return "dropwhile(...)";
},"toString":m.forwardCall("repr"),"next":function(){
while(true){
var rval=seq.next();
if(!pred(rval)){
break;
}
}
this.next=bind("next",seq);
return rval;
}};
},_tee:function(_1a4,sync,_1a6){
sync.pos[_1a4]=-1;
var m=MochiKit.Base;
var _1a8=m.listMin;
return {repr:function(){
return "tee("+_1a4+", ...)";
},toString:m.forwardCall("repr"),next:function(){
var rval;
var i=sync.pos[_1a4];
if(i==sync.max){
rval=_1a6.next();
sync.deque.push(rval);
sync.max+=1;
sync.pos[_1a4]+=1;
}else{
rval=sync.deque[i-sync.min];
sync.pos[_1a4]+=1;
if(i==sync.min&&_1a8(sync.pos)!=sync.min){
sync.min+=1;
sync.deque.shift();
}
}
return rval;
}};
},tee:function(_1ab,n){
var rval=[];
var sync={"pos":[],"deque":[],"max":-1,"min":-1};
if(arguments.length==1||typeof (n)=="undefined"||n===null){
n=2;
}
var self=MochiKit.Iter;
_1ab=self.iter(_1ab);
var _tee=self._tee;
for(var i=0;i<n;i++){
rval.push(_tee(i,sync,_1ab));
}
return rval;
},list:function(_1b2){
var rval;
if(_1b2 instanceof Array){
return _1b2.slice();
}
if(typeof (_1b2)=="function"&&!(_1b2 instanceof Function)&&typeof (_1b2.length)=="number"){
rval=[];
for(var i=0;i<_1b2.length;i++){
rval.push(_1b2[i]);
}
return rval;
}
var self=MochiKit.Iter;
_1b2=self.iter(_1b2);
var rval=[];
var _1b6;
try{
while(true){
_1b6=_1b2.next();
rval.push(_1b6);
}
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
return rval;
}
return undefined;
},reduce:function(fn,_1b8,_1b9){
var i=0;
var x=_1b9;
var self=MochiKit.Iter;
_1b8=self.iter(_1b8);
if(arguments.length<3){
try{
x=_1b8.next();
}
catch(e){
if(e==self.StopIteration){
e=new TypeError("reduce() of empty sequence with no initial value");
}
throw e;
}
i++;
}
try{
while(true){
x=fn(x,_1b8.next());
}
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
}
return x;
},range:function(){
var _1bd=0;
var stop=0;
var step=1;
if(arguments.length==1){
stop=arguments[0];
}else{
if(arguments.length==2){
_1bd=arguments[0];
stop=arguments[1];
}else{
if(arguments.length==3){
_1bd=arguments[0];
stop=arguments[1];
step=arguments[2];
}else{
throw new TypeError("range() takes 1, 2, or 3 arguments!");
}
}
}
if(step===0){
throw new TypeError("range() step must not be 0");
}
return {next:function(){
if((step>0&&_1bd>=stop)||(step<0&&_1bd<=stop)){
throw MochiKit.Iter.StopIteration;
}
var rval=_1bd;
_1bd+=step;
return rval;
},repr:function(){
return "range("+[_1bd,stop,step].join(", ")+")";
},toString:MochiKit.Base.forwardCall("repr")};
},sum:function(_1c1,_1c2){
if(typeof (_1c2)=="undefined"||_1c2===null){
_1c2=0;
}
var x=_1c2;
var self=MochiKit.Iter;
_1c1=self.iter(_1c1);
try{
while(true){
x+=_1c1.next();
}
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
}
return x;
},exhaust:function(_1c5){
var self=MochiKit.Iter;
_1c5=self.iter(_1c5);
try{
while(true){
_1c5.next();
}
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
}
},forEach:function(_1c7,func,obj){
var m=MochiKit.Base;
var self=MochiKit.Iter;
if(arguments.length>2){
func=m.bind(func,obj);
}
if(m.isArrayLike(_1c7)&&!self.isIterable(_1c7)){
try{
for(var i=0;i<_1c7.length;i++){
func(_1c7[i]);
}
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
}
}else{
self.exhaust(self.imap(func,_1c7));
}
},every:function(_1cd,func){
var self=MochiKit.Iter;
try{
self.ifilterfalse(func,_1cd).next();
return false;
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
return true;
}
},sorted:function(_1d0,cmp){
var rval=MochiKit.Iter.list(_1d0);
if(arguments.length==1){
cmp=MochiKit.Base.compare;
}
rval.sort(cmp);
return rval;
},reversed:function(_1d3){
var rval=MochiKit.Iter.list(_1d3);
rval.reverse();
return rval;
},some:function(_1d5,func){
var self=MochiKit.Iter;
try{
self.ifilter(func,_1d5).next();
return true;
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
return false;
}
},iextend:function(lst,_1d9){
var m=MochiKit.Base;
var self=MochiKit.Iter;
if(m.isArrayLike(_1d9)&&!self.isIterable(_1d9)){
for(var i=0;i<_1d9.length;i++){
lst.push(_1d9[i]);
}
}else{
_1d9=self.iter(_1d9);
try{
while(true){
lst.push(_1d9.next());
}
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
}
}
return lst;
},groupby:function(_1dd,_1de){
var m=MochiKit.Base;
var self=MochiKit.Iter;
if(arguments.length<2){
_1de=m.operator.identity;
}
_1dd=self.iter(_1dd);
var pk=undefined;
var k=undefined;
var v;
function fetch(){
v=_1dd.next();
k=_1de(v);
}
function eat(){
var ret=v;
v=undefined;
return ret;
}
var _1e5=true;
var _1e6=m.compare;
return {repr:function(){
return "groupby(...)";
},next:function(){
while(_1e6(k,pk)===0){
fetch();
if(_1e5){
_1e5=false;
break;
}
}
pk=k;
return [k,{next:function(){
if(v==undefined){
fetch();
}
if(_1e6(k,pk)!==0){
throw self.StopIteration;
}
return eat();
}}];
}};
},groupby_as_array:function(_1e7,_1e8){
var m=MochiKit.Base;
var self=MochiKit.Iter;
if(arguments.length<2){
_1e8=m.operator.identity;
}
_1e7=self.iter(_1e7);
var _1eb=[];
var _1ec=true;
var _1ed;
var _1ee=m.compare;
while(true){
try{
var _1ef=_1e7.next();
var key=_1e8(_1ef);
}
catch(e){
if(e==self.StopIteration){
break;
}
throw e;
}
if(_1ec||_1ee(key,_1ed)!==0){
var _1f1=[];
_1eb.push([key,_1f1]);
}
_1f1.push(_1ef);
_1ec=false;
_1ed=key;
}
return _1eb;
},arrayLikeIter:function(_1f2){
var i=0;
return {repr:function(){
return "arrayLikeIter(...)";
},toString:MochiKit.Base.forwardCall("repr"),next:function(){
if(i>=_1f2.length){
throw MochiKit.Iter.StopIteration;
}
return _1f2[i++];
}};
},hasIterateNext:function(_1f4){
return (_1f4&&typeof (_1f4.iterateNext)=="function");
},iterateNextIter:function(_1f5){
return {repr:function(){
return "iterateNextIter(...)";
},toString:MochiKit.Base.forwardCall("repr"),next:function(){
var rval=_1f5.iterateNext();
if(rval===null||rval===undefined){
throw MochiKit.Iter.StopIteration;
}
return rval;
}};
}});
MochiKit.Iter.EXPORT_OK=["iteratorRegistry","arrayLikeIter","hasIterateNext","iterateNextIter"];
MochiKit.Iter.EXPORT=["StopIteration","registerIteratorFactory","iter","count","cycle","repeat","next","izip","ifilter","ifilterfalse","islice","imap","applymap","chain","takewhile","dropwhile","tee","list","reduce","range","sum","exhaust","forEach","every","sorted","reversed","some","iextend","groupby","groupby_as_array"];
MochiKit.Iter.__new__=function(){
var m=MochiKit.Base;
if(typeof (StopIteration)!="undefined"){
this.StopIteration=StopIteration;
}else{
this.StopIteration=new m.NamedError("StopIteration");
}
this.iteratorRegistry=new m.AdapterRegistry();
this.registerIteratorFactory("arrayLike",m.isArrayLike,this.arrayLikeIter);
this.registerIteratorFactory("iterateNext",this.hasIterateNext,this.iterateNextIter);
this.EXPORT_TAGS={":common":this.EXPORT,":all":m.concat(this.EXPORT,this.EXPORT_OK)};
m.nameFunctions(this);
};
MochiKit.Iter.__new__();
if(MochiKit.__export__){
reduce=MochiKit.Iter.reduce;
}
MochiKit.Base._exportSymbols(this,MochiKit.Iter);
MochiKit.Base._deps("Logging",["Base"]);
MochiKit.Logging.NAME="MochiKit.Logging";
MochiKit.Logging.VERSION="1.5";
MochiKit.Logging.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.Logging.toString=function(){
return this.__repr__();
};
MochiKit.Logging.EXPORT=["LogLevel","LogMessage","Logger","alertListener","logger","log","logError","logDebug","logFatal","logWarning"];
MochiKit.Logging.EXPORT_OK=["logLevelAtLeast","isLogMessage","compareLogMessage"];
MochiKit.Logging.LogMessage=function(num,_1f9,info){
this.num=num;
this.level=_1f9;
this.info=info;
this.timestamp=new Date();
};
MochiKit.Logging.LogMessage.prototype={repr:function(){
var m=MochiKit.Base;
return "LogMessage("+m.map(m.repr,[this.num,this.level,this.info]).join(", ")+")";
},toString:MochiKit.Base.forwardCall("repr")};
MochiKit.Base.update(MochiKit.Logging,{logLevelAtLeast:function(_1fc){
var self=MochiKit.Logging;
if(typeof (_1fc)=="string"){
_1fc=self.LogLevel[_1fc];
}
return function(msg){
var _1ff=msg.level;
if(typeof (_1ff)=="string"){
_1ff=self.LogLevel[_1ff];
}
return _1ff>=_1fc;
};
},isLogMessage:function(){
var _200=MochiKit.Logging.LogMessage;
for(var i=0;i<arguments.length;i++){
if(!(arguments[i] instanceof _200)){
return false;
}
}
return true;
},compareLogMessage:function(a,b){
return MochiKit.Base.compare([a.level,a.info],[b.level,b.info]);
},alertListener:function(msg){
alert("num: "+msg.num+"\nlevel: "+msg.level+"\ninfo: "+msg.info.join(" "));
}});
MochiKit.Logging.Logger=function(_205){
this.counter=0;
if(typeof (_205)=="undefined"||_205===null){
_205=-1;
}
this.maxSize=_205;
this._messages=[];
this.listeners={};
this.useNativeConsole=false;
};
MochiKit.Logging.Logger.prototype={clear:function(){
this._messages.splice(0,this._messages.length);
},logToConsole:function(msg){
if(typeof (window)!="undefined"&&window.console&&window.console.log){
window.console.log(msg.replace(/%/g,"\uff05"));
}else{
if(typeof (opera)!="undefined"&&opera.postError){
opera.postError(msg);
}else{
if(typeof (printfire)=="function"){
printfire(msg);
}else{
if(typeof (Debug)!="undefined"&&Debug.writeln){
Debug.writeln(msg);
}else{
if(typeof (debug)!="undefined"&&debug.trace){
debug.trace(msg);
}
}
}
}
}
},dispatchListeners:function(msg){
for(var k in this.listeners){
var pair=this.listeners[k];
if(pair.ident!=k||(pair[0]&&!pair[0](msg))){
continue;
}
pair[1](msg);
}
},addListener:function(_20a,_20b,_20c){
if(typeof (_20b)=="string"){
_20b=MochiKit.Logging.logLevelAtLeast(_20b);
}
var _20d=[_20b,_20c];
_20d.ident=_20a;
this.listeners[_20a]=_20d;
},removeListener:function(_20e){
delete this.listeners[_20e];
},baseLog:function(_20f,_210){
if(typeof (_20f)=="number"){
if(_20f>=MochiKit.Logging.LogLevel.FATAL){
_20f="FATAL";
}else{
if(_20f>=MochiKit.Logging.LogLevel.ERROR){
_20f="ERROR";
}else{
if(_20f>=MochiKit.Logging.LogLevel.WARNING){
_20f="WARNING";
}else{
if(_20f>=MochiKit.Logging.LogLevel.INFO){
_20f="INFO";
}else{
_20f="DEBUG";
}
}
}
}
}
var msg=new MochiKit.Logging.LogMessage(this.counter,_20f,MochiKit.Base.extend(null,arguments,1));
this._messages.push(msg);
this.dispatchListeners(msg);
if(this.useNativeConsole){
this.logToConsole(msg.level+": "+msg.info.join(" "));
}
this.counter+=1;
while(this.maxSize>=0&&this._messages.length>this.maxSize){
this._messages.shift();
}
},getMessages:function(_212){
var _213=0;
if(!(typeof (_212)=="undefined"||_212===null)){
_213=Math.max(0,this._messages.length-_212);
}
return this._messages.slice(_213);
},getMessageText:function(_214){
if(typeof (_214)=="undefined"||_214===null){
_214=30;
}
var _215=this.getMessages(_214);
if(_215.length){
var lst=map(function(m){
return "\n  ["+m.num+"] "+m.level+": "+m.info.join(" ");
},_215);
lst.unshift("LAST "+_215.length+" MESSAGES:");
return lst.join("");
}
return "";
},debuggingBookmarklet:function(_218){
if(typeof (MochiKit.LoggingPane)=="undefined"){
alert(this.getMessageText());
}else{
MochiKit.LoggingPane.createLoggingPane(_218||false);
}
}};
MochiKit.Logging.__new__=function(){
this.LogLevel={ERROR:40,FATAL:50,WARNING:30,INFO:20,DEBUG:10};
var m=MochiKit.Base;
m.registerComparator("LogMessage",this.isLogMessage,this.compareLogMessage);
var _21a=m.partial;
var _21b=this.Logger;
var _21c=_21b.prototype.baseLog;
m.update(this.Logger.prototype,{debug:_21a(_21c,"DEBUG"),log:_21a(_21c,"INFO"),error:_21a(_21c,"ERROR"),fatal:_21a(_21c,"FATAL"),warning:_21a(_21c,"WARNING")});
var self=this;
var _21e=function(name){
return function(){
self.logger[name].apply(self.logger,arguments);
};
};
this.log=_21e("log");
this.logError=_21e("error");
this.logDebug=_21e("debug");
this.logFatal=_21e("fatal");
this.logWarning=_21e("warning");
this.logger=new _21b();
this.logger.useNativeConsole=true;
this.EXPORT_TAGS={":common":this.EXPORT,":all":m.concat(this.EXPORT,this.EXPORT_OK)};
m.nameFunctions(this);
};
if(typeof (printfire)=="undefined"&&typeof (document)!="undefined"&&document.createEvent&&typeof (dispatchEvent)!="undefined"){
printfire=function(){
printfire.args=arguments;
var ev=document.createEvent("Events");
ev.initEvent("printfire",false,true);
dispatchEvent(ev);
};
}
MochiKit.Logging.__new__();
MochiKit.Base._exportSymbols(this,MochiKit.Logging);
MochiKit.Base._deps("DateTime",["Base"]);
MochiKit.DateTime.NAME="MochiKit.DateTime";
MochiKit.DateTime.VERSION="1.5";
MochiKit.DateTime.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.DateTime.toString=function(){
return this.__repr__();
};
MochiKit.DateTime.isoDate=function(str){
str=str+"";
if(typeof (str)!="string"||str.length===0){
return null;
}
var iso=str.split("-");
if(iso.length===0){
return null;
}
var date=new Date(iso[0],iso[1]-1,iso[2]);
date.setFullYear(iso[0]);
date.setMonth(iso[1]-1);
date.setDate(iso[2]);
return date;
};
MochiKit.DateTime._isoRegexp=/(\d{4,})(?:-(\d{1,2})(?:-(\d{1,2})(?:[T ](\d{1,2}):(\d{1,2})(?::(\d{1,2})(?:\.(\d+))?)?(?:(Z)|([+-])(\d{1,2})(?::(\d{1,2}))?)?)?)?)?/;
MochiKit.DateTime.isoTimestamp=function(str){
str=str+"";
if(typeof (str)!="string"||str.length===0){
return null;
}
var res=str.match(MochiKit.DateTime._isoRegexp);
if(typeof (res)=="undefined"||res===null){
return null;
}
var year,_227,day,hour,min,sec,msec;
year=parseInt(res[1],10);
if(typeof (res[2])=="undefined"||res[2]===""){
return new Date(year);
}
_227=parseInt(res[2],10)-1;
day=parseInt(res[3],10);
if(typeof (res[4])=="undefined"||res[4]===""){
return new Date(year,_227,day);
}
hour=parseInt(res[4],10);
min=parseInt(res[5],10);
sec=(typeof (res[6])!="undefined"&&res[6]!=="")?parseInt(res[6],10):0;
if(typeof (res[7])!="undefined"&&res[7]!==""){
msec=Math.round(1000*parseFloat("0."+res[7]));
}else{
msec=0;
}
if((typeof (res[8])=="undefined"||res[8]==="")&&(typeof (res[9])=="undefined"||res[9]==="")){
return new Date(year,_227,day,hour,min,sec,msec);
}
var ofs;
if(typeof (res[9])!="undefined"&&res[9]!==""){
ofs=parseInt(res[10],10)*3600000;
if(typeof (res[11])!="undefined"&&res[11]!==""){
ofs+=parseInt(res[11],10)*60000;
}
if(res[9]=="-"){
ofs=-ofs;
}
}else{
ofs=0;
}
return new Date(Date.UTC(year,_227,day,hour,min,sec,msec)-ofs);
};
MochiKit.DateTime.toISOTime=function(date,_22f){
if(typeof (date)=="undefined"||date===null){
return null;
}
var hh=date.getHours();
var mm=date.getMinutes();
var ss=date.getSeconds();
var lst=[((_22f&&(hh<10))?"0"+hh:hh),((mm<10)?"0"+mm:mm),((ss<10)?"0"+ss:ss)];
return lst.join(":");
};
MochiKit.DateTime.toISOTimestamp=function(date,_235){
if(typeof (date)=="undefined"||date===null){
return null;
}
var sep=_235?"T":" ";
var foot=_235?"Z":"";
if(_235){
date=new Date(date.getTime()+(date.getTimezoneOffset()*60000));
}
return MochiKit.DateTime.toISODate(date)+sep+MochiKit.DateTime.toISOTime(date,_235)+foot;
};
MochiKit.DateTime.toISODate=function(date){
if(typeof (date)=="undefined"||date===null){
return null;
}
var _239=MochiKit.DateTime._padTwo;
var _23a=MochiKit.DateTime._padFour;
return [_23a(date.getFullYear()),_239(date.getMonth()+1),_239(date.getDate())].join("-");
};
MochiKit.DateTime.americanDate=function(d){
d=d+"";
if(typeof (d)!="string"||d.length===0){
return null;
}
var a=d.split("/");
return new Date(a[2],a[0]-1,a[1]);
};
MochiKit.DateTime._padTwo=function(n){
return (n>9)?n:"0"+n;
};
MochiKit.DateTime._padFour=function(n){
switch(n.toString().length){
case 1:
return "000"+n;
break;
case 2:
return "00"+n;
break;
case 3:
return "0"+n;
break;
case 4:
default:
return n;
}
};
MochiKit.DateTime.toPaddedAmericanDate=function(d){
if(typeof (d)=="undefined"||d===null){
return null;
}
var _240=MochiKit.DateTime._padTwo;
return [_240(d.getMonth()+1),_240(d.getDate()),d.getFullYear()].join("/");
};
MochiKit.DateTime.toAmericanDate=function(d){
if(typeof (d)=="undefined"||d===null){
return null;
}
return [d.getMonth()+1,d.getDate(),d.getFullYear()].join("/");
};
MochiKit.DateTime.EXPORT=["isoDate","isoTimestamp","toISOTime","toISOTimestamp","toISODate","americanDate","toPaddedAmericanDate","toAmericanDate"];
MochiKit.DateTime.EXPORT_OK=[];
MochiKit.DateTime.EXPORT_TAGS={":common":MochiKit.DateTime.EXPORT,":all":MochiKit.DateTime.EXPORT};
MochiKit.DateTime.__new__=function(){
var base=this.NAME+".";
for(var k in this){
var o=this[k];
if(typeof (o)=="function"&&typeof (o.NAME)=="undefined"){
try{
o.NAME=base+k;
}
catch(e){
}
}
}
};
MochiKit.DateTime.__new__();
if(typeof (MochiKit.Base)!="undefined"){
MochiKit.Base._exportSymbols(this,MochiKit.DateTime);
}else{
(function(_245,_246){
if((typeof (JSAN)=="undefined"&&typeof (dojo)=="undefined")||(MochiKit.__export__===false)){
var all=_246.EXPORT_TAGS[":all"];
for(var i=0;i<all.length;i++){
_245[all[i]]=_246[all[i]];
}
}
})(this,MochiKit.DateTime);
}
MochiKit.Base._deps("Format",["Base"]);
MochiKit.Format.NAME="MochiKit.Format";
MochiKit.Format.VERSION="1.5";
MochiKit.Format.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.Format.toString=function(){
return this.__repr__();
};
MochiKit.Format._numberFormatter=function(_249,_24a,_24b,_24c,_24d,_24e,_24f,_250,_251){
return function(num){
num=parseFloat(num);
if(typeof (num)=="undefined"||num===null||isNaN(num)){
return _249;
}
var _253=_24a;
var _254=_24b;
if(num<0){
num=-num;
}else{
_253=_253.replace(/-/,"");
}
var me=arguments.callee;
var fmt=MochiKit.Format.formatLocale(_24c);
if(_24d){
num=num*100;
_254=fmt.percent+_254;
}
num=MochiKit.Format.roundToFixed(num,_24e);
var _257=num.split(/\./);
var _258=_257[0];
var frac=(_257.length==1)?"":_257[1];
var res="";
while(_258.length<_24f){
_258="0"+_258;
}
if(_250){
while(_258.length>_250){
var i=_258.length-_250;
res=fmt.separator+_258.substring(i,_258.length)+res;
_258=_258.substring(0,i);
}
}
res=_258+res;
if(_24e>0){
while(frac.length<_251){
frac=frac+"0";
}
res=res+fmt.decimal+frac;
}
return _253+res+_254;
};
};
MochiKit.Format.numberFormatter=function(_25c,_25d,_25e){
if(typeof (_25d)=="undefined"){
_25d="";
}
var _25f=_25c.match(/((?:[0#]+,)?[0#]+)(?:\.([0#]+))?(%)?/);
if(!_25f){
throw TypeError("Invalid pattern");
}
var _260=_25c.substr(0,_25f.index);
var _261=_25c.substr(_25f.index+_25f[0].length);
if(_260.search(/-/)==-1){
_260=_260+"-";
}
var _262=_25f[1];
var frac=(typeof (_25f[2])=="string"&&_25f[2]!="")?_25f[2]:"";
var _264=(typeof (_25f[3])=="string"&&_25f[3]!="");
var tmp=_262.split(/,/);
var _266;
if(typeof (_25e)=="undefined"){
_25e="default";
}
if(tmp.length==1){
_266=null;
}else{
_266=tmp[1].length;
}
var _267=_262.length-_262.replace(/0/g,"").length;
var _268=frac.length-frac.replace(/0/g,"").length;
var _269=frac.length;
var rval=MochiKit.Format._numberFormatter(_25d,_260,_261,_25e,_264,_269,_267,_266,_268);
var m=MochiKit.Base;
if(m){
var fn=arguments.callee;
var args=m.concat(arguments);
rval.repr=function(){
return [self.NAME,"(",map(m.repr,args).join(", "),")"].join("");
};
}
return rval;
};
MochiKit.Format.formatLocale=function(_26e){
if(typeof (_26e)=="undefined"||_26e===null){
_26e="default";
}
if(typeof (_26e)=="string"){
var rval=MochiKit.Format.LOCALE[_26e];
if(typeof (rval)=="string"){
rval=arguments.callee(rval);
MochiKit.Format.LOCALE[_26e]=rval;
}
return rval;
}else{
return _26e;
}
};
MochiKit.Format.twoDigitAverage=function(_270,_271){
if(_271){
var res=_270/_271;
if(!isNaN(res)){
return MochiKit.Format.twoDigitFloat(res);
}
}
return "0";
};
MochiKit.Format.twoDigitFloat=function(_273){
var res=roundToFixed(_273,2);
if(res.indexOf(".00")>0){
return res.substring(0,res.length-3);
}else{
if(res.charAt(res.length-1)=="0"){
return res.substring(0,res.length-1);
}else{
return res;
}
}
};
MochiKit.Format.lstrip=function(str,_276){
str=str+"";
if(typeof (str)!="string"){
return null;
}
if(!_276){
return str.replace(/^\s+/,"");
}else{
return str.replace(new RegExp("^["+_276+"]+"),"");
}
};
MochiKit.Format.rstrip=function(str,_278){
str=str+"";
if(typeof (str)!="string"){
return null;
}
if(!_278){
return str.replace(/\s+$/,"");
}else{
return str.replace(new RegExp("["+_278+"]+$"),"");
}
};
MochiKit.Format.strip=function(str,_27a){
var self=MochiKit.Format;
return self.rstrip(self.lstrip(str,_27a),_27a);
};
MochiKit.Format.truncToFixed=function(_27c,_27d){
var res=Math.floor(_27c).toFixed(0);
if(_27c<0){
res=Math.ceil(_27c).toFixed(0);
if(res.charAt(0)!="-"&&_27d>0){
res="-"+res;
}
}
if(res.indexOf("e")<0&&_27d>0){
var tail=_27c.toString();
if(tail.indexOf("e")>0){
tail=".";
}else{
if(tail.indexOf(".")<0){
tail=".";
}else{
tail=tail.substring(tail.indexOf("."));
}
}
if(tail.length-1>_27d){
tail=tail.substring(0,_27d+1);
}
while(tail.length-1<_27d){
tail+="0";
}
res+=tail;
}
return res;
};
MochiKit.Format.roundToFixed=function(_280,_281){
var _282=Math.abs(_280)+0.5*Math.pow(10,-_281);
var res=MochiKit.Format.truncToFixed(_282,_281);
if(_280<0){
res="-"+res;
}
return res;
};
MochiKit.Format.percentFormat=function(_284){
return MochiKit.Format.twoDigitFloat(100*_284)+"%";
};
MochiKit.Format.EXPORT=["truncToFixed","roundToFixed","numberFormatter","formatLocale","twoDigitAverage","twoDigitFloat","percentFormat","lstrip","rstrip","strip"];
MochiKit.Format.LOCALE={en_US:{separator:",",decimal:".",percent:"%"},de_DE:{separator:".",decimal:",",percent:"%"},pt_BR:{separator:".",decimal:",",percent:"%"},fr_FR:{separator:" ",decimal:",",percent:"%"},"default":"en_US"};
MochiKit.Format.EXPORT_OK=[];
MochiKit.Format.EXPORT_TAGS={":all":MochiKit.Format.EXPORT,":common":MochiKit.Format.EXPORT};
MochiKit.Format.__new__=function(){
var base=this.NAME+".";
var k,v,o;
for(k in this.LOCALE){
o=this.LOCALE[k];
if(typeof (o)=="object"){
o.repr=function(){
return this.NAME;
};
o.NAME=base+"LOCALE."+k;
}
}
for(k in this){
o=this[k];
if(typeof (o)=="function"&&typeof (o.NAME)=="undefined"){
try{
o.NAME=base+k;
}
catch(e){
}
}
}
};
MochiKit.Format.__new__();
if(typeof (MochiKit.Base)!="undefined"){
MochiKit.Base._exportSymbols(this,MochiKit.Format);
}else{
(function(_289,_28a){
if((typeof (JSAN)=="undefined"&&typeof (dojo)=="undefined")||(MochiKit.__export__===false)){
var all=_28a.EXPORT_TAGS[":all"];
for(var i=0;i<all.length;i++){
_289[all[i]]=_28a[all[i]];
}
}
})(this,MochiKit.Format);
}
MochiKit.Base._deps("Async",["Base"]);
MochiKit.Async.NAME="MochiKit.Async";
MochiKit.Async.VERSION="1.5";
MochiKit.Async.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.Async.toString=function(){
return this.__repr__();
};
MochiKit.Async.Deferred=function(_28d){
this.chain=[];
this.id=this._nextId();
this.fired=-1;
this.paused=0;
this.results=[null,null];
this.canceller=_28d;
this.silentlyCancelled=false;
this.chained=false;
};
MochiKit.Async.Deferred.prototype={repr:function(){
var _28e;
if(this.fired==-1){
_28e="unfired";
}else{
if(this.fired===0){
_28e="success";
}else{
_28e="error";
}
}
return "Deferred("+this.id+", "+_28e+")";
},toString:MochiKit.Base.forwardCall("repr"),_nextId:MochiKit.Base.counter(),cancel:function(){
var self=MochiKit.Async;
if(this.fired==-1){
if(this.canceller){
this.canceller(this);
}else{
this.silentlyCancelled=true;
}
if(this.fired==-1){
this.errback(new self.CancelledError(this));
}
}else{
if((this.fired===0)&&(this.results[0] instanceof self.Deferred)){
this.results[0].cancel();
}
}
},_resback:function(res){
this.fired=((res instanceof Error)?1:0);
this.results[this.fired]=res;
this._fire();
},_check:function(){
if(this.fired!=-1){
if(!this.silentlyCancelled){
throw new MochiKit.Async.AlreadyCalledError(this);
}
this.silentlyCancelled=false;
return;
}
},callback:function(res){
this._check();
if(res instanceof MochiKit.Async.Deferred){
throw new Error("Deferred instances can only be chained if they are the result of a callback");
}
this._resback(res);
},errback:function(res){
this._check();
var self=MochiKit.Async;
if(res instanceof self.Deferred){
throw new Error("Deferred instances can only be chained if they are the result of a callback");
}
if(!(res instanceof Error)){
res=new self.GenericError(res);
}
this._resback(res);
},addBoth:function(fn){
if(arguments.length>1){
fn=MochiKit.Base.partial.apply(null,arguments);
}
return this.addCallbacks(fn,fn);
},addCallback:function(fn){
if(arguments.length>1){
fn=MochiKit.Base.partial.apply(null,arguments);
}
return this.addCallbacks(fn,null);
},addErrback:function(fn){
if(arguments.length>1){
fn=MochiKit.Base.partial.apply(null,arguments);
}
return this.addCallbacks(null,fn);
},addCallbacks:function(cb,eb){
if(this.chained){
throw new Error("Chained Deferreds can not be re-used");
}
this.chain.push([cb,eb]);
if(this.fired>=0){
this._fire();
}
return this;
},_fire:function(){
var _299=this.chain;
var _29a=this.fired;
var res=this.results[_29a];
var self=this;
var cb=null;
while(_299.length>0&&this.paused===0){
var pair=_299.shift();
var f=pair[_29a];
if(f===null){
continue;
}
try{
res=f(res);
_29a=((res instanceof Error)?1:0);
if(res instanceof MochiKit.Async.Deferred){
cb=function(res){
self._resback(res);
self.paused--;
if((self.paused===0)&&(self.fired>=0)){
self._fire();
}
};
this.paused++;
}
}
catch(err){
_29a=1;
if(!(err instanceof Error)){
err=new MochiKit.Async.GenericError(err);
}
res=err;
}
}
this.fired=_29a;
this.results[_29a]=res;
if(cb&&this.paused){
res.addBoth(cb);
res.chained=true;
}
}};
MochiKit.Base.update(MochiKit.Async,{evalJSONRequest:function(req){
return MochiKit.Base.evalJSON(req.responseText);
},succeed:function(_2a2){
var d=new MochiKit.Async.Deferred();
d.callback.apply(d,arguments);
return d;
},fail:function(_2a4){
var d=new MochiKit.Async.Deferred();
d.errback.apply(d,arguments);
return d;
},getXMLHttpRequest:function(){
var self=arguments.callee;
if(!self.XMLHttpRequest){
var _2a7=[function(){
return new XMLHttpRequest();
},function(){
return new ActiveXObject("Msxml2.XMLHTTP");
},function(){
return new ActiveXObject("Microsoft.XMLHTTP");
},function(){
return new ActiveXObject("Msxml2.XMLHTTP.4.0");
},function(){
throw new MochiKit.Async.BrowserComplianceError("Browser does not support XMLHttpRequest");
}];
for(var i=0;i<_2a7.length;i++){
var func=_2a7[i];
try{
self.XMLHttpRequest=func;
return func();
}
catch(e){
}
}
}
return self.XMLHttpRequest();
},_xhr_onreadystatechange:function(d){
var m=MochiKit.Base;
if(this.readyState==4){
try{
this.onreadystatechange=null;
}
catch(e){
try{
this.onreadystatechange=m.noop;
}
catch(e){
}
}
var _2ac=null;
try{
_2ac=this.status;
if(!_2ac&&m.isNotEmpty(this.responseText)){
_2ac=304;
}
}
catch(e){
}
if(_2ac==200||_2ac==201||_2ac==204||_2ac==304||_2ac==1223){
d.callback(this);
}else{
var err=new MochiKit.Async.XMLHttpRequestError(this,"Request failed");
if(err.number){
d.errback(err);
}else{
d.errback(err);
}
}
}
},_xhr_canceller:function(req){
try{
req.onreadystatechange=null;
}
catch(e){
try{
req.onreadystatechange=MochiKit.Base.noop;
}
catch(e){
}
}
req.abort();
},sendXMLHttpRequest:function(req,_2b0){
if(typeof (_2b0)=="undefined"||_2b0===null){
_2b0="";
}
var m=MochiKit.Base;
var self=MochiKit.Async;
var d=new self.Deferred(m.partial(self._xhr_canceller,req));
try{
req.onreadystatechange=m.bind(self._xhr_onreadystatechange,req,d);
req.send(_2b0);
}
catch(e){
try{
req.onreadystatechange=null;
}
catch(ignore){
}
d.errback(e);
}
return d;
},doXHR:function(url,opts){
var self=MochiKit.Async;
return self.callLater(0,self._doXHR,url,opts);
},_doXHR:function(url,opts){
var m=MochiKit.Base;
opts=m.update({method:"GET",sendContent:""},opts);
var self=MochiKit.Async;
var req=self.getXMLHttpRequest();
if(opts.queryString){
var qs=m.queryString(opts.queryString);
if(qs){
url+="?"+qs;
}
}
if("username" in opts){
req.open(opts.method,url,true,opts.username,opts.password);
}else{
req.open(opts.method,url,true);
}
if(req.overrideMimeType&&opts.mimeType){
req.overrideMimeType(opts.mimeType);
}
req.setRequestHeader("X-Requested-With","XMLHttpRequest");
if(opts.headers){
var _2bd=opts.headers;
if(!m.isArrayLike(_2bd)){
_2bd=m.items(_2bd);
}
for(var i=0;i<_2bd.length;i++){
var _2bf=_2bd[i];
var name=_2bf[0];
var _2c1=_2bf[1];
req.setRequestHeader(name,_2c1);
}
}
return self.sendXMLHttpRequest(req,opts.sendContent);
},_buildURL:function(url){
if(arguments.length>1){
var m=MochiKit.Base;
var qs=m.queryString.apply(null,m.extend(null,arguments,1));
if(qs){
return url+"?"+qs;
}
}
return url;
},doSimpleXMLHttpRequest:function(url){
var self=MochiKit.Async;
url=self._buildURL.apply(self,arguments);
return self.doXHR(url);
},loadJSONDoc:function(url){
var self=MochiKit.Async;
url=self._buildURL.apply(self,arguments);
var d=self.doXHR(url,{"mimeType":"text/plain","headers":[["Accept","application/json"]]});
d=d.addCallback(self.evalJSONRequest);
return d;
},wait:function(_2ca,_2cb){
var d=new MochiKit.Async.Deferred();
var m=MochiKit.Base;
if(typeof (_2cb)!="undefined"){
d.addCallback(function(){
return _2cb;
});
}
var _2ce=setTimeout(m.bind("callback",d),Math.floor(_2ca*1000));
d.canceller=function(){
try{
clearTimeout(_2ce);
}
catch(e){
}
};
return d;
},callLater:function(_2cf,func){
var m=MochiKit.Base;
var _2d2=m.partial.apply(m,m.extend(null,arguments,1));
return MochiKit.Async.wait(_2cf).addCallback(function(res){
return _2d2();
});
}});
MochiKit.Async.DeferredLock=function(){
this.waiting=[];
this.locked=false;
this.id=this._nextId();
};
MochiKit.Async.DeferredLock.prototype={__class__:MochiKit.Async.DeferredLock,acquire:function(){
var d=new MochiKit.Async.Deferred();
if(this.locked){
this.waiting.push(d);
}else{
this.locked=true;
d.callback(this);
}
return d;
},release:function(){
if(!this.locked){
throw TypeError("Tried to release an unlocked DeferredLock");
}
this.locked=false;
if(this.waiting.length>0){
this.locked=true;
this.waiting.shift().callback(this);
}
},_nextId:MochiKit.Base.counter(),repr:function(){
var _2d5;
if(this.locked){
_2d5="locked, "+this.waiting.length+" waiting";
}else{
_2d5="unlocked";
}
return "DeferredLock("+this.id+", "+_2d5+")";
},toString:MochiKit.Base.forwardCall("repr")};
MochiKit.Async.DeferredList=function(list,_2d7,_2d8,_2d9,_2da){
MochiKit.Async.Deferred.apply(this,[_2da]);
this.list=list;
var _2db=[];
this.resultList=_2db;
this.finishedCount=0;
this.fireOnOneCallback=_2d7;
this.fireOnOneErrback=_2d8;
this.consumeErrors=_2d9;
var cb=MochiKit.Base.bind(this._cbDeferred,this);
for(var i=0;i<list.length;i++){
var d=list[i];
_2db.push(undefined);
d.addCallback(cb,i,true);
d.addErrback(cb,i,false);
}
if(list.length===0&&!_2d7){
this.callback(this.resultList);
}
};
MochiKit.Async.DeferredList.prototype=new MochiKit.Async.Deferred();
MochiKit.Async.DeferredList.prototype._cbDeferred=function(_2df,_2e0,_2e1){
this.resultList[_2df]=[_2e0,_2e1];
this.finishedCount+=1;
if(this.fired==-1){
if(_2e0&&this.fireOnOneCallback){
this.callback([_2df,_2e1]);
}else{
if(!_2e0&&this.fireOnOneErrback){
this.errback(_2e1);
}else{
if(this.finishedCount==this.list.length){
this.callback(this.resultList);
}
}
}
}
if(!_2e0&&this.consumeErrors){
_2e1=null;
}
return _2e1;
};
MochiKit.Async.gatherResults=function(_2e2){
var d=new MochiKit.Async.DeferredList(_2e2,false,true,false);
d.addCallback(function(_2e4){
var ret=[];
for(var i=0;i<_2e4.length;i++){
ret.push(_2e4[i][1]);
}
return ret;
});
return d;
};
MochiKit.Async.maybeDeferred=function(func){
var self=MochiKit.Async;
var _2e9;
try{
var r=func.apply(null,MochiKit.Base.extend([],arguments,1));
if(r instanceof self.Deferred){
_2e9=r;
}else{
if(r instanceof Error){
_2e9=self.fail(r);
}else{
_2e9=self.succeed(r);
}
}
}
catch(e){
_2e9=self.fail(e);
}
return _2e9;
};
MochiKit.Async.EXPORT=["AlreadyCalledError","CancelledError","BrowserComplianceError","GenericError","XMLHttpRequestError","Deferred","succeed","fail","getXMLHttpRequest","doSimpleXMLHttpRequest","loadJSONDoc","wait","callLater","sendXMLHttpRequest","DeferredLock","DeferredList","gatherResults","maybeDeferred","doXHR"];
MochiKit.Async.EXPORT_OK=["evalJSONRequest"];
MochiKit.Async.__new__=function(){
var m=MochiKit.Base;
var ne=m.partial(m._newNamedError,this);
ne("AlreadyCalledError",function(_2ed){
this.deferred=_2ed;
});
ne("CancelledError",function(_2ee){
this.deferred=_2ee;
});
ne("BrowserComplianceError",function(msg){
this.message=msg;
});
ne("GenericError",function(msg){
this.message=msg;
});
ne("XMLHttpRequestError",function(req,msg){
this.req=req;
this.message=msg;
try{
this.number=req.status;
}
catch(e){
}
});
this.EXPORT_TAGS={":common":this.EXPORT,":all":m.concat(this.EXPORT,this.EXPORT_OK)};
m.nameFunctions(this);
};
MochiKit.Async.__new__();
MochiKit.Base._exportSymbols(this,MochiKit.Async);
MochiKit.Base._deps("DOM",["Base"]);
MochiKit.DOM.NAME="MochiKit.DOM";
MochiKit.DOM.VERSION="1.5";
MochiKit.DOM.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.DOM.toString=function(){
return this.__repr__();
};
MochiKit.DOM.EXPORT=["removeEmptyTextNodes","formContents","currentWindow","currentDocument","withWindow","withDocument","registerDOMConverter","coerceToDOM","createDOM","createDOMFunc","isChildNode","getNodeAttribute","removeNodeAttribute","setNodeAttribute","updateNodeAttributes","appendChildNodes","insertSiblingNodesAfter","insertSiblingNodesBefore","replaceChildNodes","removeElement","swapDOM","BUTTON","TT","PRE","H1","H2","H3","H4","H5","H6","BR","CANVAS","HR","LABEL","TEXTAREA","FORM","STRONG","SELECT","OPTION","OPTGROUP","LEGEND","FIELDSET","P","UL","OL","LI","DL","DT","DD","TD","TR","THEAD","TBODY","TFOOT","TABLE","TH","INPUT","SPAN","A","DIV","IMG","getElement","$","getElementsByTagAndClassName","addToCallStack","addLoadEvent","focusOnLoad","setElementClass","toggleElementClass","addElementClass","removeElementClass","swapElementClass","hasElementClass","escapeHTML","toHTML","emitHTML","scrapeText","getFirstParentByTagAndClassName","makeClipping","undoClipping","makePositioned","undoPositioned","getFirstElementByTagAndClassName"];
MochiKit.DOM.EXPORT_OK=["domConverters"];
MochiKit.DOM.DEPRECATED=[["computedStyle","MochiKit.Style.getStyle","1.4"],["elementDimensions","MochiKit.Style.getElementDimensions","1.4"],["elementPosition","MochiKit.Style.getElementPosition","1.4"],["hideElement","MochiKit.Style.hideElement","1.4"],["setElementDimensions","MochiKit.Style.setElementDimensions","1.4"],["setElementPosition","MochiKit.Style.setElementPosition","1.4"],["setDisplayForElement","MochiKit.Style.setDisplayForElement","1.4"],["setOpacity","MochiKit.Style.setOpacity","1.4"],["showElement","MochiKit.Style.showElement","1.4"],["Coordinates","MochiKit.Style.Coordinates","1.4"],["Dimensions","MochiKit.Style.Dimensions","1.4"]];
MochiKit.DOM.getViewportDimensions=new Function(""+"if (!MochiKit[\"Style\"]) {"+"    throw new Error(\"This function has been deprecated and depends on MochiKit.Style.\");"+"}"+"return MochiKit.Style.getViewportDimensions.apply(this, arguments);");
MochiKit.Base.update(MochiKit.DOM,{currentWindow:function(){
return MochiKit.DOM._window;
},currentDocument:function(){
return MochiKit.DOM._document;
},withWindow:function(win,func){
var self=MochiKit.DOM;
var _2f6=self._document;
var _2f7=self._window;
var rval;
try{
self._window=win;
self._document=win.document;
rval=func();
}
catch(e){
self._window=_2f7;
self._document=_2f6;
throw e;
}
self._window=_2f7;
self._document=_2f6;
return rval;
},formContents:function(elem){
var _2fa=[];
var _2fb=[];
var m=MochiKit.Base;
var self=MochiKit.DOM;
if(typeof (elem)=="undefined"||elem===null){
elem=self._document.body;
}else{
elem=self.getElement(elem);
}
m.nodeWalk(elem,function(elem){
var name=elem.name;
if(m.isNotEmpty(name)){
var _300=elem.tagName.toUpperCase();
if(_300==="INPUT"&&(elem.type=="radio"||elem.type=="checkbox")&&!elem.checked){
return null;
}
if(_300==="SELECT"){
if(elem.type=="select-one"){
if(elem.selectedIndex>=0){
var opt=elem.options[elem.selectedIndex];
var v=opt.value;
if(!v){
var h=opt.outerHTML;
if(h&&!h.match(/^[^>]+\svalue\s*=/i)){
v=opt.text;
}
}
_2fa.push(name);
_2fb.push(v);
return null;
}
_2fa.push(name);
_2fb.push("");
return null;
}else{
var opts=elem.options;
if(!opts.length){
_2fa.push(name);
_2fb.push("");
return null;
}
for(var i=0;i<opts.length;i++){
var opt=opts[i];
if(!opt.selected){
continue;
}
var v=opt.value;
if(!v){
var h=opt.outerHTML;
if(h&&!h.match(/^[^>]+\svalue\s*=/i)){
v=opt.text;
}
}
_2fa.push(name);
_2fb.push(v);
}
return null;
}
}
if(_300==="FORM"||_300==="P"||_300==="SPAN"||_300==="DIV"){
return elem.childNodes;
}
_2fa.push(name);
_2fb.push(elem.value||"");
return null;
}
return elem.childNodes;
});
return [_2fa,_2fb];
},withDocument:function(doc,func){
var self=MochiKit.DOM;
var _309=self._document;
var rval;
try{
self._document=doc;
rval=func();
}
catch(e){
self._document=_309;
throw e;
}
self._document=_309;
return rval;
},registerDOMConverter:function(name,_30c,wrap,_30e){
MochiKit.DOM.domConverters.register(name,_30c,wrap,_30e);
},coerceToDOM:function(node,ctx){
var m=MochiKit.Base;
var im=MochiKit.Iter;
var self=MochiKit.DOM;
if(im){
var iter=im.iter;
var _315=im.repeat;
var map=m.map;
}
var _317=self.domConverters;
var _318=arguments.callee;
var _319=m.NotFound;
while(true){
if(typeof (node)=="undefined"||node===null){
return null;
}
if(typeof (node)=="function"&&typeof (node.length)=="number"&&!(node instanceof Function)){
node=im.list(node);
}
if(typeof (node.nodeType)!="undefined"&&node.nodeType>0){
return node;
}
if(typeof (node)=="number"||typeof (node)=="boolean"){
node=node.toString();
}
if(typeof (node)=="string"){
return self._document.createTextNode(node);
}
if(typeof (node.__dom__)=="function"){
node=node.__dom__(ctx);
continue;
}
if(typeof (node.dom)=="function"){
node=node.dom(ctx);
continue;
}
if(typeof (node)=="function"){
node=node.apply(ctx,[ctx]);
continue;
}
if(im){
var _31a=null;
try{
_31a=iter(node);
}
catch(e){
}
if(_31a){
return map(_318,_31a,_315(ctx));
}
}
try{
node=_317.match(node,ctx);
continue;
}
catch(e){
if(e!=_319){
throw e;
}
}
return self._document.createTextNode(node.toString());
}
return undefined;
},isChildNode:function(node,_31c){
var self=MochiKit.DOM;
if(typeof (node)=="string"){
node=self.getElement(node);
}
if(typeof (_31c)=="string"){
_31c=self.getElement(_31c);
}
if(typeof (node)=="undefined"||node===null){
return false;
}
while(node!=null&&node!==self._document){
if(node===_31c){
return true;
}
node=node.parentNode;
}
return false;
},setNodeAttribute:function(node,attr,_320){
var o={};
o[attr]=_320;
try{
return MochiKit.DOM.updateNodeAttributes(node,o);
}
catch(e){
}
return null;
},getNodeAttribute:function(node,attr){
var self=MochiKit.DOM;
var _325=self.attributeArray.renames[attr];
var _326=self.attributeArray.ignoreAttr[attr];
node=self.getElement(node);
try{
if(_325){
return node[_325];
}
var _327=node.getAttribute(attr);
if(_327!=_326){
return _327;
}
}
catch(e){
}
return null;
},removeNodeAttribute:function(node,attr){
var self=MochiKit.DOM;
var _32b=self.attributeArray.renames[attr];
node=self.getElement(node);
try{
if(_32b){
return node[_32b];
}
return node.removeAttribute(attr);
}
catch(e){
}
return null;
},updateNodeAttributes:function(node,_32d){
var elem=node;
var self=MochiKit.DOM;
if(typeof (node)=="string"){
elem=self.getElement(node);
}
if(_32d){
var _330=MochiKit.Base.updatetree;
if(self.attributeArray.compliant){
for(var k in _32d){
var v=_32d[k];
if(typeof (v)=="object"&&typeof (elem[k])=="object"){
if(k=="style"&&MochiKit.Style){
MochiKit.Style.setStyle(elem,v);
}else{
_330(elem[k],v);
}
}else{
if(k.substring(0,2)=="on"){
if(typeof (v)=="string"){
v=new Function(v);
}
elem[k]=v;
}else{
elem.setAttribute(k,v);
}
}
if(typeof (elem[k])=="string"&&elem[k]!=v){
elem[k]=v;
}
}
}else{
var _333=self.attributeArray.renames;
for(var k in _32d){
v=_32d[k];
var _334=_333[k];
if(k=="style"&&typeof (v)=="string"){
elem.style.cssText=v;
}else{
if(typeof (_334)=="string"){
elem[_334]=v;
}else{
if(typeof (elem[k])=="object"&&typeof (v)=="object"){
if(k=="style"&&MochiKit.Style){
MochiKit.Style.setStyle(elem,v);
}else{
_330(elem[k],v);
}
}else{
if(k.substring(0,2)=="on"){
if(typeof (v)=="string"){
v=new Function(v);
}
elem[k]=v;
}else{
elem.setAttribute(k,v);
}
}
}
}
if(typeof (elem[k])=="string"&&elem[k]!=v){
elem[k]=v;
}
}
}
}
return elem;
},appendChildNodes:function(node){
var elem=node;
var self=MochiKit.DOM;
if(typeof (node)=="string"){
elem=self.getElement(node);
}
var _338=[self.coerceToDOM(MochiKit.Base.extend(null,arguments,1),elem)];
var _339=MochiKit.Base.concat;
while(_338.length){
var n=_338.shift();
if(typeof (n)=="undefined"||n===null){
}else{
if(typeof (n.nodeType)=="number"){
elem.appendChild(n);
}else{
_338=_339(n,_338);
}
}
}
return elem;
},insertSiblingNodesBefore:function(node){
var elem=node;
var self=MochiKit.DOM;
if(typeof (node)=="string"){
elem=self.getElement(node);
}
var _33e=[self.coerceToDOM(MochiKit.Base.extend(null,arguments,1),elem)];
var _33f=elem.parentNode;
var _340=MochiKit.Base.concat;
while(_33e.length){
var n=_33e.shift();
if(typeof (n)=="undefined"||n===null){
}else{
if(typeof (n.nodeType)=="number"){
_33f.insertBefore(n,elem);
}else{
_33e=_340(n,_33e);
}
}
}
return _33f;
},insertSiblingNodesAfter:function(node){
var elem=node;
var self=MochiKit.DOM;
if(typeof (node)=="string"){
elem=self.getElement(node);
}
var _345=[self.coerceToDOM(MochiKit.Base.extend(null,arguments,1),elem)];
if(elem.nextSibling){
return self.insertSiblingNodesBefore(elem.nextSibling,_345);
}else{
return self.appendChildNodes(elem.parentNode,_345);
}
},replaceChildNodes:function(node){
var elem=node;
var self=MochiKit.DOM;
if(typeof (node)=="string"){
elem=self.getElement(node);
arguments[0]=elem;
}
var _349;
while((_349=elem.firstChild)){
elem.removeChild(_349);
}
if(arguments.length<2){
return elem;
}else{
return self.appendChildNodes.apply(this,arguments);
}
},createDOM:function(name,_34b){
var elem;
var self=MochiKit.DOM;
var m=MochiKit.Base;
if(typeof (_34b)=="string"||typeof (_34b)=="number"){
var args=m.extend([name,null],arguments,1);
return arguments.callee.apply(this,args);
}
if(typeof (name)=="string"){
var _350=self._xhtml;
if(_34b&&!self.attributeArray.compliant){
var _351="";
if("name" in _34b){
_351+=" name=\""+self.escapeHTML(_34b.name)+"\"";
}
if(name=="input"&&"type" in _34b){
_351+=" type=\""+self.escapeHTML(_34b.type)+"\"";
}
if(_351){
name="<"+name+_351+">";
_350=false;
}
}
var d=self._document;
if(_350&&d===document){
elem=d.createElementNS("http://www.w3.org/1999/xhtml",name);
}else{
elem=d.createElement(name);
}
}else{
elem=name;
}
if(_34b){
self.updateNodeAttributes(elem,_34b);
}
if(arguments.length<=2){
return elem;
}else{
var args=m.extend([elem],arguments,2);
return self.appendChildNodes.apply(this,args);
}
},createDOMFunc:function(){
var m=MochiKit.Base;
return m.partial.apply(this,m.extend([MochiKit.DOM.createDOM],arguments));
},removeElement:function(elem){
var self=MochiKit.DOM;
var e=self.coerceToDOM(self.getElement(elem));
e.parentNode.removeChild(e);
return e;
},swapDOM:function(dest,src){
var self=MochiKit.DOM;
dest=self.getElement(dest);
var _35a=dest.parentNode;
if(src){
src=self.coerceToDOM(self.getElement(src),_35a);
_35a.replaceChild(src,dest);
}else{
_35a.removeChild(dest);
}
return src;
},getElement:function(id){
var self=MochiKit.DOM;
if(arguments.length==1){
return ((typeof (id)=="string")?self._document.getElementById(id):id);
}else{
return MochiKit.Base.map(self.getElement,arguments);
}
},getElementsByTagAndClassName:function(_35d,_35e,_35f){
var self=MochiKit.DOM;
if(typeof (_35d)=="undefined"||_35d===null){
_35d="*";
}
if(typeof (_35f)=="undefined"||_35f===null){
_35f=self._document;
}
_35f=self.getElement(_35f);
if(_35f==null){
return [];
}
var _361=(_35f.getElementsByTagName(_35d)||self._document.all);
if(typeof (_35e)=="undefined"||_35e===null){
return MochiKit.Base.extend(null,_361);
}
var _362=[];
for(var i=0;i<_361.length;i++){
var _364=_361[i];
var cls=_364.className;
if(typeof (cls)!="string"){
cls=_364.getAttribute("class");
}
if(typeof (cls)=="string"){
var _366=cls.split(" ");
for(var j=0;j<_366.length;j++){
if(_366[j]==_35e){
_362.push(_364);
break;
}
}
}
}
return _362;
},_newCallStack:function(path,once){
var rval=function(){
var _36b=arguments.callee.callStack;
for(var i=0;i<_36b.length;i++){
if(_36b[i].apply(this,arguments)===false){
break;
}
}
if(once){
try{
this[path]=null;
}
catch(e){
}
}
};
rval.callStack=[];
return rval;
},addToCallStack:function(_36d,path,func,once){
var self=MochiKit.DOM;
var _372=_36d[path];
var _373=_372;
if(!(typeof (_372)=="function"&&typeof (_372.callStack)=="object"&&_372.callStack!==null)){
_373=self._newCallStack(path,once);
if(typeof (_372)=="function"){
_373.callStack.push(_372);
}
_36d[path]=_373;
}
_373.callStack.push(func);
},addLoadEvent:function(func){
var self=MochiKit.DOM;
self.addToCallStack(self._window,"onload",func,true);
},focusOnLoad:function(_376){
var self=MochiKit.DOM;
self.addLoadEvent(function(){
_376=self.getElement(_376);
if(_376){
_376.focus();
}
});
},setElementClass:function(_378,_379){
var self=MochiKit.DOM;
var obj=self.getElement(_378);
if(self.attributeArray.compliant){
obj.setAttribute("class",_379);
}else{
obj.setAttribute("className",_379);
}
},toggleElementClass:function(_37c){
var self=MochiKit.DOM;
for(var i=1;i<arguments.length;i++){
var obj=self.getElement(arguments[i]);
if(!self.addElementClass(obj,_37c)){
self.removeElementClass(obj,_37c);
}
}
},addElementClass:function(_380,_381){
var self=MochiKit.DOM;
var obj=self.getElement(_380);
var cls=obj.className;
if(typeof (cls)!="string"){
cls=obj.getAttribute("class");
}
if(typeof (cls)!="string"||cls.length===0){
self.setElementClass(obj,_381);
return true;
}
if(cls==_381){
return false;
}
var _385=cls.split(" ");
for(var i=0;i<_385.length;i++){
if(_385[i]==_381){
return false;
}
}
self.setElementClass(obj,cls+" "+_381);
return true;
},removeElementClass:function(_387,_388){
var self=MochiKit.DOM;
var obj=self.getElement(_387);
var cls=obj.className;
if(typeof (cls)!="string"){
cls=obj.getAttribute("class");
}
if(typeof (cls)!="string"||cls.length===0){
return false;
}
if(cls==_388){
self.setElementClass(obj,"");
return true;
}
var _38c=cls.split(" ");
for(var i=0;i<_38c.length;i++){
if(_38c[i]==_388){
_38c.splice(i,1);
self.setElementClass(obj,_38c.join(" "));
return true;
}
}
return false;
},swapElementClass:function(_38e,_38f,_390){
var obj=MochiKit.DOM.getElement(_38e);
var res=MochiKit.DOM.removeElementClass(obj,_38f);
if(res){
MochiKit.DOM.addElementClass(obj,_390);
}
return res;
},hasElementClass:function(_393,_394){
var obj=MochiKit.DOM.getElement(_393);
if(obj==null){
return false;
}
var cls=obj.className;
if(typeof (cls)!="string"){
cls=obj.getAttribute("class");
}
if(typeof (cls)!="string"){
return false;
}
var _397=cls.split(" ");
for(var i=1;i<arguments.length;i++){
var good=false;
for(var j=0;j<_397.length;j++){
if(_397[j]==arguments[i]){
good=true;
break;
}
}
if(!good){
return false;
}
}
return true;
},escapeHTML:function(s){
return s.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
},toHTML:function(dom){
return MochiKit.DOM.emitHTML(dom).join("");
},emitHTML:function(dom,lst){
if(typeof (lst)=="undefined"||lst===null){
lst=[];
}
var _39f=[dom];
var self=MochiKit.DOM;
var _3a1=self.escapeHTML;
var _3a2=self.attributeArray;
while(_39f.length){
dom=_39f.pop();
if(typeof (dom)=="string"){
lst.push(dom);
}else{
if(dom.nodeType==1){
lst.push("<"+dom.tagName.toLowerCase());
var _3a3=[];
var _3a4=_3a2(dom);
for(var i=0;i<_3a4.length;i++){
var a=_3a4[i];
_3a3.push([" ",a.name,"=\"",_3a1(a.value),"\""]);
}
_3a3.sort();
for(i=0;i<_3a3.length;i++){
var _3a7=_3a3[i];
for(var j=0;j<_3a7.length;j++){
lst.push(_3a7[j]);
}
}
if(dom.hasChildNodes()){
lst.push(">");
_39f.push("</"+dom.tagName.toLowerCase()+">");
var _3a9=dom.childNodes;
for(i=_3a9.length-1;i>=0;i--){
_39f.push(_3a9[i]);
}
}else{
lst.push("/>");
}
}else{
if(dom.nodeType==3){
lst.push(_3a1(dom.nodeValue));
}
}
}
}
return lst;
},scrapeText:function(node,_3ab){
var rval=[];
(function(node){
var cn=node.childNodes;
if(cn){
for(var i=0;i<cn.length;i++){
arguments.callee.call(this,cn[i]);
}
}
var _3b0=node.nodeValue;
if(typeof (_3b0)=="string"){
rval.push(_3b0);
}
})(MochiKit.DOM.getElement(node));
if(_3ab){
return rval;
}else{
return rval.join("");
}
},removeEmptyTextNodes:function(_3b1){
_3b1=MochiKit.DOM.getElement(_3b1);
for(var i=0;i<_3b1.childNodes.length;i++){
var node=_3b1.childNodes[i];
if(node.nodeType==3&&!/\S/.test(node.nodeValue)){
node.parentNode.removeChild(node);
}
}
},makeClipping:function(_3b4){
_3b4=MochiKit.DOM.getElement(_3b4);
var _3b5=_3b4.style.overflow;
if((MochiKit.Style.getStyle(_3b4,"overflow")||"visible")!="hidden"){
_3b4.style.overflow="hidden";
}
return _3b5;
},undoClipping:function(_3b6,_3b7){
_3b6=MochiKit.DOM.getElement(_3b6);
if(!_3b7){
return;
}
_3b6.style.overflow=_3b7;
},makePositioned:function(_3b8){
_3b8=MochiKit.DOM.getElement(_3b8);
var pos=MochiKit.Style.getStyle(_3b8,"position");
if(pos=="static"||!pos){
_3b8.style.position="relative";
if(/Opera/.test(navigator.userAgent)){
_3b8.style.top=0;
_3b8.style.left=0;
}
}
},undoPositioned:function(_3ba){
_3ba=MochiKit.DOM.getElement(_3ba);
if(_3ba.style.position=="relative"){
_3ba.style.position=_3ba.style.top=_3ba.style.left=_3ba.style.bottom=_3ba.style.right="";
}
},getFirstElementByTagAndClassName:function(_3bb,_3bc,_3bd){
var self=MochiKit.DOM;
if(typeof (_3bb)=="undefined"||_3bb===null){
_3bb="*";
}
if(typeof (_3bd)=="undefined"||_3bd===null){
_3bd=self._document;
}
_3bd=self.getElement(_3bd);
if(_3bd==null){
return null;
}
var _3bf=(_3bd.getElementsByTagName(_3bb)||self._document.all);
if(_3bf.length<=0){
return null;
}else{
if(typeof (_3bc)=="undefined"||_3bc===null){
return _3bf[0];
}
}
for(var i=0;i<_3bf.length;i++){
var _3c1=_3bf[i];
var cls=_3c1.className;
if(typeof (cls)!="string"){
cls=_3c1.getAttribute("class");
}
if(typeof (cls)=="string"){
var _3c3=cls.split(" ");
for(var j=0;j<_3c3.length;j++){
if(_3c3[j]==_3bc){
return _3c1;
}
}
}
}
return null;
},getFirstParentByTagAndClassName:function(elem,_3c6,_3c7){
var self=MochiKit.DOM;
elem=self.getElement(elem);
if(typeof (_3c6)=="undefined"||_3c6===null){
_3c6="*";
}else{
_3c6=_3c6.toUpperCase();
}
if(typeof (_3c7)=="undefined"||_3c7===null){
_3c7=null;
}
if(elem){
elem=elem.parentNode;
}
while(elem&&elem.tagName){
var _3c9=elem.tagName.toUpperCase();
if((_3c6==="*"||_3c6==_3c9)&&(_3c7===null||self.hasElementClass(elem,_3c7))){
return elem;
}
elem=elem.parentNode;
}
return null;
},__new__:function(win){
var m=MochiKit.Base;
if(typeof (document)!="undefined"){
this._document=document;
var _3cc="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
this._xhtml=(document.documentElement&&document.createElementNS&&document.documentElement.namespaceURI===_3cc);
}else{
if(MochiKit.MockDOM){
this._document=MochiKit.MockDOM.document;
}
}
this._window=win;
this.domConverters=new m.AdapterRegistry();
var _3cd=this._document.createElement("span");
var _3ce;
if(_3cd&&_3cd.attributes&&_3cd.attributes.length>0){
var _3cf=m.filter;
_3ce=function(node){
return _3cf(_3ce.ignoreAttrFilter,node.attributes);
};
_3ce.ignoreAttr={};
var _3d1=_3cd.attributes;
var _3d2=_3ce.ignoreAttr;
for(var i=0;i<_3d1.length;i++){
var a=_3d1[i];
_3d2[a.name]=a.value;
}
_3ce.ignoreAttrFilter=function(a){
return (_3ce.ignoreAttr[a.name]!=a.value);
};
_3ce.compliant=false;
_3ce.renames={"class":"className","checked":"defaultChecked","usemap":"useMap","for":"htmlFor","readonly":"readOnly","colspan":"colSpan","bgcolor":"bgColor","cellspacing":"cellSpacing","cellpadding":"cellPadding"};
}else{
_3ce=function(node){
return node.attributes;
};
_3ce.compliant=true;
_3ce.ignoreAttr={};
_3ce.renames={};
}
this.attributeArray=_3ce;
var _3d7=function(_3d8,arr){
var _3da=arr[0];
var _3db=arr[1];
var _3dc=_3db.split(".")[1];
var str="";
str+="if (!MochiKit."+_3dc+") { throw new Error(\"";
str+="This function has been deprecated and depends on MochiKit.";
str+=_3dc+".\");}";
str+="return "+_3db+".apply(this, arguments);";
MochiKit[_3d8][_3da]=new Function(str);
};
for(var i=0;i<MochiKit.DOM.DEPRECATED.length;i++){
_3d7("DOM",MochiKit.DOM.DEPRECATED[i]);
}
var _3de=this.createDOMFunc;
this.UL=_3de("ul");
this.OL=_3de("ol");
this.LI=_3de("li");
this.DL=_3de("dl");
this.DT=_3de("dt");
this.DD=_3de("dd");
this.TD=_3de("td");
this.TR=_3de("tr");
this.TBODY=_3de("tbody");
this.THEAD=_3de("thead");
this.TFOOT=_3de("tfoot");
this.TABLE=_3de("table");
this.TH=_3de("th");
this.INPUT=_3de("input");
this.SPAN=_3de("span");
this.A=_3de("a");
this.DIV=_3de("div");
this.IMG=_3de("img");
this.BUTTON=_3de("button");
this.TT=_3de("tt");
this.PRE=_3de("pre");
this.H1=_3de("h1");
this.H2=_3de("h2");
this.H3=_3de("h3");
this.H4=_3de("h4");
this.H5=_3de("h5");
this.H6=_3de("h6");
this.BR=_3de("br");
this.HR=_3de("hr");
this.LABEL=_3de("label");
this.TEXTAREA=_3de("textarea");
this.FORM=_3de("form");
this.P=_3de("p");
this.SELECT=_3de("select");
this.OPTION=_3de("option");
this.OPTGROUP=_3de("optgroup");
this.LEGEND=_3de("legend");
this.FIELDSET=_3de("fieldset");
this.STRONG=_3de("strong");
this.CANVAS=_3de("canvas");
this.$=this.getElement;
this.EXPORT_TAGS={":common":this.EXPORT,":all":m.concat(this.EXPORT,this.EXPORT_OK)};
m.nameFunctions(this);
}});
MochiKit.DOM.__new__(((typeof (window)=="undefined")?this:window));
if(MochiKit.__export__){
withWindow=MochiKit.DOM.withWindow;
withDocument=MochiKit.DOM.withDocument;
}
MochiKit.Base._exportSymbols(this,MochiKit.DOM);
MochiKit.Base._deps("Selector",["Base","DOM","Iter"]);
MochiKit.Selector.NAME="MochiKit.Selector";
MochiKit.Selector.VERSION="1.5";
MochiKit.Selector.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.Selector.toString=function(){
return this.__repr__();
};
MochiKit.Selector.EXPORT=["Selector","findChildElements","findDocElements","$$"];
MochiKit.Selector.EXPORT_OK=[];
MochiKit.Selector.Selector=function(_3df){
this.params={classNames:[],pseudoClassNames:[]};
this.expression=_3df.toString().replace(/(^\s+|\s+$)/g,"");
this.parseExpression();
this.compileMatcher();
};
MochiKit.Selector.Selector.prototype={__class__:MochiKit.Selector.Selector,parseExpression:function(){
function abort(_3e0){
throw "Parse error in selector: "+_3e0;
}
if(this.expression==""){
abort("empty expression");
}
var repr=MochiKit.Base.repr;
var _3e2=this.params;
var expr=this.expression;
var _3e4,_3e5,_3e6,rest;
while(_3e4=expr.match(/^(.*)\[([a-z0-9_:-]+?)(?:([~\|!^$*]?=)(?:"([^"]*)"|([^\]\s]*)))?\]$/i)){
_3e2.attributes=_3e2.attributes||[];
_3e2.attributes.push({name:_3e4[2],operator:_3e4[3],value:_3e4[4]||_3e4[5]||""});
expr=_3e4[1];
}
if(expr=="*"){
return this.params.wildcard=true;
}
while(_3e4=expr.match(/^([^a-z0-9_-])?([a-z0-9_-]+(?:\([^)]*\))?)(.*)/i)){
_3e5=_3e4[1];
_3e6=_3e4[2];
rest=_3e4[3];
switch(_3e5){
case "#":
_3e2.id=_3e6;
break;
case ".":
_3e2.classNames.push(_3e6);
break;
case ":":
_3e2.pseudoClassNames.push(_3e6);
break;
case "":
case undefined:
_3e2.tagName=_3e6.toUpperCase();
break;
default:
abort(repr(expr));
}
expr=rest;
}
if(expr.length>0){
abort(repr(expr));
}
},buildMatchExpression:function(){
var repr=MochiKit.Base.repr;
var _3e9=this.params;
var _3ea=[];
var _3eb,i;
function childElements(_3ed){
return "MochiKit.Base.filter(function (node) { return node.nodeType == 1; }, "+_3ed+".childNodes)";
}
if(_3e9.wildcard){
_3ea.push("true");
}
if(_3eb=_3e9.id){
_3ea.push("element.id == "+repr(_3eb));
}
if(_3eb=_3e9.tagName){
_3ea.push("element.tagName.toUpperCase() == "+repr(_3eb));
}
if((_3eb=_3e9.classNames).length>0){
for(i=0;i<_3eb.length;i++){
_3ea.push("MochiKit.DOM.hasElementClass(element, "+repr(_3eb[i])+")");
}
}
if((_3eb=_3e9.pseudoClassNames).length>0){
for(i=0;i<_3eb.length;i++){
var _3ee=_3eb[i].match(/^([^(]+)(?:\((.*)\))?$/);
var _3ef=_3ee[1];
var _3f0=_3ee[2];
switch(_3ef){
case "root":
_3ea.push("element.nodeType == 9 || element === element.ownerDocument.documentElement");
break;
case "nth-child":
case "nth-last-child":
case "nth-of-type":
case "nth-last-of-type":
_3ee=_3f0.match(/^((?:(\d+)n\+)?(\d+)|odd|even)$/);
if(!_3ee){
throw "Invalid argument to pseudo element nth-child: "+_3f0;
}
var a,b;
if(_3ee[0]=="odd"){
a=2;
b=1;
}else{
if(_3ee[0]=="even"){
a=2;
b=0;
}else{
a=_3ee[2]&&parseInt(_3ee)||null;
b=parseInt(_3ee[3]);
}
}
_3ea.push("this.nthChild(element,"+a+","+b+","+!!_3ef.match("^nth-last")+","+!!_3ef.match("of-type$")+")");
break;
case "first-child":
_3ea.push("this.nthChild(element, null, 1)");
break;
case "last-child":
_3ea.push("this.nthChild(element, null, 1, true)");
break;
case "first-of-type":
_3ea.push("this.nthChild(element, null, 1, false, true)");
break;
case "last-of-type":
_3ea.push("this.nthChild(element, null, 1, true, true)");
break;
case "only-child":
_3ea.push(childElements("element.parentNode")+".length == 1");
break;
case "only-of-type":
_3ea.push("MochiKit.Base.filter(function (node) { return node.tagName == element.tagName; }, "+childElements("element.parentNode")+").length == 1");
break;
case "empty":
_3ea.push("element.childNodes.length == 0");
break;
case "enabled":
_3ea.push("(this.isUIElement(element) && element.disabled === false)");
break;
case "disabled":
_3ea.push("(this.isUIElement(element) && element.disabled === true)");
break;
case "checked":
_3ea.push("(this.isUIElement(element) && element.checked === true)");
break;
case "not":
var _3f3=new MochiKit.Selector.Selector(_3f0);
_3ea.push("!( "+_3f3.buildMatchExpression()+")");
break;
}
}
}
if(_3eb=_3e9.attributes){
MochiKit.Base.map(function(_3f4){
var _3f5="MochiKit.DOM.getNodeAttribute(element, "+repr(_3f4.name)+")";
var _3f6=function(_3f7){
return _3f5+".split("+repr(_3f7)+")";
};
_3ea.push(_3f5+" != null");
switch(_3f4.operator){
case "=":
_3ea.push(_3f5+" == "+repr(_3f4.value));
break;
case "~=":
_3ea.push("MochiKit.Base.findValue("+_3f6(" ")+", "+repr(_3f4.value)+") > -1");
break;
case "^=":
_3ea.push(_3f5+".substring(0, "+_3f4.value.length+") == "+repr(_3f4.value));
break;
case "$=":
_3ea.push(_3f5+".substring("+_3f5+".length - "+_3f4.value.length+") == "+repr(_3f4.value));
break;
case "*=":
_3ea.push(_3f5+".match("+repr(_3f4.value)+")");
break;
case "|=":
_3ea.push(_3f6("-")+"[0].toUpperCase() == "+repr(_3f4.value.toUpperCase()));
break;
case "!=":
_3ea.push(_3f5+" != "+repr(_3f4.value));
break;
case "":
case undefined:
break;
default:
throw "Unknown operator "+_3f4.operator+" in selector";
}
},_3eb);
}
return _3ea.join(" && ");
},compileMatcher:function(){
var code="return (!element.tagName) ? false : "+this.buildMatchExpression()+";";
this.match=new Function("element",code);
},nthChild:function(_3f9,a,b,_3fc,_3fd){
var _3fe=MochiKit.Base.filter(function(node){
return node.nodeType==1;
},_3f9.parentNode.childNodes);
if(_3fd){
_3fe=MochiKit.Base.filter(function(node){
return node.tagName==_3f9.tagName;
},_3fe);
}
if(_3fc){
_3fe=MochiKit.Iter.reversed(_3fe);
}
if(a){
var _401=MochiKit.Base.findIdentical(_3fe,_3f9);
return ((_401+1-b)/a)%1==0;
}else{
return b==MochiKit.Base.findIdentical(_3fe,_3f9)+1;
}
},isUIElement:function(_402){
return MochiKit.Base.findValue(["input","button","select","option","textarea","object"],_402.tagName.toLowerCase())>-1;
},findElements:function(_403,axis){
var _405;
if(axis==undefined){
axis="";
}
function inScope(_406,_407){
if(axis==""){
return MochiKit.DOM.isChildNode(_406,_407);
}else{
if(axis==">"){
return _406.parentNode===_407;
}else{
if(axis=="+"){
return _406===nextSiblingElement(_407);
}else{
if(axis=="~"){
var _408=_407;
while(_408=nextSiblingElement(_408)){
if(_406===_408){
return true;
}
}
return false;
}else{
throw "Invalid axis: "+axis;
}
}
}
}
}
if(_405=MochiKit.DOM.getElement(this.params.id)){
if(this.match(_405)){
if(!_403||inScope(_405,_403)){
return [_405];
}
}
}
function nextSiblingElement(node){
node=node.nextSibling;
while(node&&node.nodeType!=1){
node=node.nextSibling;
}
return node;
}
if(axis==""){
_403=(_403||MochiKit.DOM.currentDocument()).getElementsByTagName(this.params.tagName||"*");
}else{
if(axis==">"){
if(!_403){
throw "> combinator not allowed without preceeding expression";
}
_403=MochiKit.Base.filter(function(node){
return node.nodeType==1;
},_403.childNodes);
}else{
if(axis=="+"){
if(!_403){
throw "+ combinator not allowed without preceeding expression";
}
_403=nextSiblingElement(_403)&&[nextSiblingElement(_403)];
}else{
if(axis=="~"){
if(!_403){
throw "~ combinator not allowed without preceeding expression";
}
var _40b=[];
while(nextSiblingElement(_403)){
_403=nextSiblingElement(_403);
_40b.push(_403);
}
_403=_40b;
}
}
}
}
if(!_403){
return [];
}
var _40c=MochiKit.Base.filter(MochiKit.Base.bind(function(_40d){
return this.match(_40d);
},this),_403);
return _40c;
},repr:function(){
return "Selector("+this.expression+")";
},toString:MochiKit.Base.forwardCall("repr")};
MochiKit.Base.update(MochiKit.Selector,{findChildElements:function(_40e,_40f){
var uniq=function(arr){
var res=[];
for(var i=0;i<arr.length;i++){
if(MochiKit.Base.findIdentical(res,arr[i])<0){
res.push(arr[i]);
}
}
return res;
};
return MochiKit.Base.flattenArray(MochiKit.Base.map(function(_414){
var _415="";
var _416=function(_417,expr){
if(match=expr.match(/^[>+~]$/)){
_415=match[0];
return _417;
}else{
var _419=new MochiKit.Selector.Selector(expr);
var _41a=MochiKit.Iter.reduce(function(_41b,_41c){
return MochiKit.Base.extend(_41b,_419.findElements(_41c||_40e,_415));
},_417,[]);
_415="";
return _41a;
}
};
var _41d=_414.replace(/(^\s+|\s+$)/g,"").split(/\s+/);
return uniq(MochiKit.Iter.reduce(_416,_41d,[null]));
},_40f));
},findDocElements:function(){
return MochiKit.Selector.findChildElements(MochiKit.DOM.currentDocument(),arguments);
},__new__:function(){
var m=MochiKit.Base;
this.$$=this.findDocElements;
this.EXPORT_TAGS={":common":this.EXPORT,":all":m.concat(this.EXPORT,this.EXPORT_OK)};
m.nameFunctions(this);
}});
MochiKit.Selector.__new__();
MochiKit.Base._exportSymbols(this,MochiKit.Selector);
MochiKit.Base._deps("Style",["Base","DOM"]);
MochiKit.Style.NAME="MochiKit.Style";
MochiKit.Style.VERSION="1.5";
MochiKit.Style.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.Style.toString=function(){
return this.__repr__();
};
MochiKit.Style.EXPORT_OK=[];
MochiKit.Style.EXPORT=["setStyle","setOpacity","getStyle","getElementDimensions","elementDimensions","setElementDimensions","getElementPosition","elementPosition","setElementPosition","setDisplayForElement","hideElement","showElement","getViewportDimensions","getViewportPosition","Dimensions","Coordinates"];
MochiKit.Style.Dimensions=function(w,h){
this.w=w;
this.h=h;
};
MochiKit.Style.Dimensions.prototype.__repr__=function(){
var repr=MochiKit.Base.repr;
return "{w: "+repr(this.w)+", h: "+repr(this.h)+"}";
};
MochiKit.Style.Dimensions.prototype.toString=function(){
return this.__repr__();
};
MochiKit.Style.Coordinates=function(x,y){
this.x=x;
this.y=y;
};
MochiKit.Style.Coordinates.prototype.__repr__=function(){
var repr=MochiKit.Base.repr;
return "{x: "+repr(this.x)+", y: "+repr(this.y)+"}";
};
MochiKit.Style.Coordinates.prototype.toString=function(){
return this.__repr__();
};
MochiKit.Base.update(MochiKit.Style,{getStyle:function(elem,_426){
var dom=MochiKit.DOM;
var d=dom._document;
elem=dom.getElement(elem);
_426=MochiKit.Base.camelize(_426);
if(!elem||elem==d){
return undefined;
}
if(_426=="opacity"&&typeof (elem.filters)!="undefined"){
var _429=(MochiKit.Style.getStyle(elem,"filter")||"").match(/alpha\(opacity=(.*)\)/);
if(_429&&_429[1]){
return parseFloat(_429[1])/100;
}
return 1;
}
if(_426=="float"||_426=="cssFloat"||_426=="styleFloat"){
if(elem.style["float"]){
return elem.style["float"];
}else{
if(elem.style.cssFloat){
return elem.style.cssFloat;
}else{
if(elem.style.styleFloat){
return elem.style.styleFloat;
}else{
return "none";
}
}
}
}
var _42a=elem.style?elem.style[_426]:null;
if(!_42a){
if(d.defaultView&&d.defaultView.getComputedStyle){
var css=d.defaultView.getComputedStyle(elem,null);
_426=_426.replace(/([A-Z])/g,"-$1").toLowerCase();
_42a=css?css.getPropertyValue(_426):null;
}else{
if(elem.currentStyle){
_42a=elem.currentStyle[_426];
if(/^\d/.test(_42a)&&!/px$/.test(_42a)&&_426!="fontWeight"){
var left=elem.style.left;
var _42d=elem.runtimeStyle.left;
elem.runtimeStyle.left=elem.currentStyle.left;
elem.style.left=_42a||0;
_42a=elem.style.pixelLeft+"px";
elem.style.left=left;
elem.runtimeStyle.left=_42d;
}
}
}
}
if(_426=="opacity"){
_42a=parseFloat(_42a);
}
if(/Opera/.test(navigator.userAgent)&&(MochiKit.Base.findValue(["left","top","right","bottom"],_426)!=-1)){
if(MochiKit.Style.getStyle(elem,"position")=="static"){
_42a="auto";
}
}
return _42a=="auto"?null:_42a;
},setStyle:function(elem,_42f){
elem=MochiKit.DOM.getElement(elem);
for(var name in _42f){
switch(name){
case "opacity":
MochiKit.Style.setOpacity(elem,_42f[name]);
break;
case "float":
case "cssFloat":
case "styleFloat":
if(typeof (elem.style["float"])!="undefined"){
elem.style["float"]=_42f[name];
}else{
if(typeof (elem.style.cssFloat)!="undefined"){
elem.style.cssFloat=_42f[name];
}else{
elem.style.styleFloat=_42f[name];
}
}
break;
default:
elem.style[MochiKit.Base.camelize(name)]=_42f[name];
}
}
},setOpacity:function(elem,o){
elem=MochiKit.DOM.getElement(elem);
var self=MochiKit.Style;
if(o==1){
var _434=/Gecko/.test(navigator.userAgent)&&!(/Konqueror|AppleWebKit|KHTML/.test(navigator.userAgent));
elem.style["opacity"]=_434?0.999999:1;
if(/MSIE/.test(navigator.userAgent)){
elem.style["filter"]=self.getStyle(elem,"filter").replace(/alpha\([^\)]*\)/gi,"");
}
}else{
if(o<0.00001){
o=0;
}
elem.style["opacity"]=o;
if(/MSIE/.test(navigator.userAgent)){
elem.style["filter"]=self.getStyle(elem,"filter").replace(/alpha\([^\)]*\)/gi,"")+"alpha(opacity="+o*100+")";
}
}
},getElementPosition:function(elem,_436){
var self=MochiKit.Style;
var dom=MochiKit.DOM;
elem=dom.getElement(elem);
if(!elem||(!(elem.x&&elem.y)&&(!elem.parentNode===null||self.getStyle(elem,"display")=="none"))){
return undefined;
}
var c=new self.Coordinates(0,0);
var box=null;
var _43b=null;
var d=MochiKit.DOM._document;
var de=d.documentElement;
var b=d.body;
if(!elem.parentNode&&elem.x&&elem.y){
c.x+=elem.x||0;
c.y+=elem.y||0;
}else{
if(elem.getBoundingClientRect){
box=elem.getBoundingClientRect();
c.x+=box.left+(de.scrollLeft||b.scrollLeft)-(de.clientLeft||0);
c.y+=box.top+(de.scrollTop||b.scrollTop)-(de.clientTop||0);
}else{
if(elem.offsetParent){
c.x+=elem.offsetLeft;
c.y+=elem.offsetTop;
_43b=elem.offsetParent;
if(_43b!=elem){
while(_43b){
c.x+=parseInt(_43b.style.borderLeftWidth)||0;
c.y+=parseInt(_43b.style.borderTopWidth)||0;
c.x+=_43b.offsetLeft;
c.y+=_43b.offsetTop;
_43b=_43b.offsetParent;
}
}
var ua=navigator.userAgent.toLowerCase();
if((typeof (opera)!="undefined"&&parseFloat(opera.version())<9)||(ua.indexOf("AppleWebKit")!=-1&&self.getStyle(elem,"position")=="absolute")){
c.x-=b.offsetLeft;
c.y-=b.offsetTop;
}
if(elem.parentNode){
_43b=elem.parentNode;
}else{
_43b=null;
}
while(_43b){
var _440=_43b.tagName.toUpperCase();
if(_440==="BODY"||_440==="HTML"){
break;
}
var disp=self.getStyle(_43b,"display");
if(disp.search(/^inline|table-row.*$/i)){
c.x-=_43b.scrollLeft;
c.y-=_43b.scrollTop;
}
if(_43b.parentNode){
_43b=_43b.parentNode;
}else{
_43b=null;
}
}
}
}
}
if(typeof (_436)!="undefined"){
_436=arguments.callee(_436);
if(_436){
c.x-=(_436.x||0);
c.y-=(_436.y||0);
}
}
return c;
},setElementPosition:function(elem,_443,_444){
elem=MochiKit.DOM.getElement(elem);
if(typeof (_444)=="undefined"){
_444="px";
}
var _445={};
var _446=MochiKit.Base.isUndefinedOrNull;
if(!_446(_443.x)){
_445["left"]=_443.x+_444;
}
if(!_446(_443.y)){
_445["top"]=_443.y+_444;
}
MochiKit.DOM.updateNodeAttributes(elem,{"style":_445});
},getElementDimensions:function(elem,_448){
var self=MochiKit.Style;
var dom=MochiKit.DOM;
if(typeof (elem.w)=="number"||typeof (elem.h)=="number"){
return new self.Dimensions(elem.w||0,elem.h||0);
}
elem=dom.getElement(elem);
if(!elem){
return undefined;
}
var disp=self.getStyle(elem,"display");
if(disp=="none"||disp==""||typeof (disp)=="undefined"){
var s=elem.style;
var _44d=s.visibility;
var _44e=s.position;
var _44f=s.display;
s.visibility="hidden";
s.position="absolute";
s.display="";
var _450=elem.offsetWidth;
var _451=elem.offsetHeight;
s.display=_44f;
s.position=_44e;
s.visibility=_44d;
}else{
_450=elem.offsetWidth||0;
_451=elem.offsetHeight||0;
}
if(_448){
var _452="colSpan" in elem&&"rowSpan" in elem;
var _453=(_452&&elem.parentNode&&self.getStyle(elem.parentNode,"borderCollapse")=="collapse");
if(_453){
if(/MSIE/.test(navigator.userAgent)){
var _454=elem.previousSibling?0.5:1;
var _455=elem.nextSibling?0.5:1;
}else{
var _454=0.5;
var _455=0.5;
}
}else{
var _454=1;
var _455=1;
}
_450-=Math.round((parseFloat(self.getStyle(elem,"paddingLeft"))||0)+(parseFloat(self.getStyle(elem,"paddingRight"))||0)+_454*(parseFloat(self.getStyle(elem,"borderLeftWidth"))||0)+_455*(parseFloat(self.getStyle(elem,"borderRightWidth"))||0));
if(_452){
if(/Gecko|Opera/.test(navigator.userAgent)&&!/Konqueror|AppleWebKit|KHTML/.test(navigator.userAgent)){
var _456=0;
}else{
if(/MSIE/.test(navigator.userAgent)){
var _456=1;
}else{
var _456=_453?0.5:1;
}
}
}else{
var _456=1;
}
_451-=Math.round((parseFloat(self.getStyle(elem,"paddingTop"))||0)+(parseFloat(self.getStyle(elem,"paddingBottom"))||0)+_456*((parseFloat(self.getStyle(elem,"borderTopWidth"))||0)+(parseFloat(self.getStyle(elem,"borderBottomWidth"))||0)));
}
return new self.Dimensions(_450,_451);
},setElementDimensions:function(elem,_458,_459){
elem=MochiKit.DOM.getElement(elem);
if(typeof (_459)=="undefined"){
_459="px";
}
var _45a={};
var _45b=MochiKit.Base.isUndefinedOrNull;
if(!_45b(_458.w)){
_45a["width"]=_458.w+_459;
}
if(!_45b(_458.h)){
_45a["height"]=_458.h+_459;
}
MochiKit.DOM.updateNodeAttributes(elem,{"style":_45a});
},setDisplayForElement:function(_45c,_45d){
var _45e=MochiKit.Base.extend(null,arguments,1);
var _45f=MochiKit.DOM.getElement;
for(var i=0;i<_45e.length;i++){
_45d=_45f(_45e[i]);
if(_45d){
_45d.style.display=_45c;
}
}
},getViewportDimensions:function(){
var d=new MochiKit.Style.Dimensions();
var w=MochiKit.DOM._window;
var b=MochiKit.DOM._document.body;
if(w.innerWidth){
d.w=w.innerWidth;
d.h=w.innerHeight;
}else{
if(b.parentElement.clientWidth){
d.w=b.parentElement.clientWidth;
d.h=b.parentElement.clientHeight;
}else{
if(b&&b.clientWidth){
d.w=b.clientWidth;
d.h=b.clientHeight;
}
}
}
return d;
},getViewportPosition:function(){
var c=new MochiKit.Style.Coordinates(0,0);
var d=MochiKit.DOM._document;
var de=d.documentElement;
var db=d.body;
if(de&&(de.scrollTop||de.scrollLeft)){
c.x=de.scrollLeft;
c.y=de.scrollTop;
}else{
if(db){
c.x=db.scrollLeft;
c.y=db.scrollTop;
}
}
return c;
},__new__:function(){
var m=MochiKit.Base;
this.elementPosition=this.getElementPosition;
this.elementDimensions=this.getElementDimensions;
this.hideElement=m.partial(this.setDisplayForElement,"none");
this.showElement=m.partial(this.setDisplayForElement,"block");
this.EXPORT_TAGS={":common":this.EXPORT,":all":m.concat(this.EXPORT,this.EXPORT_OK)};
m.nameFunctions(this);
}});
MochiKit.Style.__new__();
MochiKit.Base._exportSymbols(this,MochiKit.Style);
MochiKit.Base._deps("LoggingPane",["Base","Logging"]);
MochiKit.LoggingPane.NAME="MochiKit.LoggingPane";
MochiKit.LoggingPane.VERSION="1.5";
MochiKit.LoggingPane.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.LoggingPane.toString=function(){
return this.__repr__();
};
MochiKit.LoggingPane.createLoggingPane=function(_469){
var m=MochiKit.LoggingPane;
_469=!(!_469);
if(m._loggingPane&&m._loggingPane.inline!=_469){
m._loggingPane.closePane();
m._loggingPane=null;
}
if(!m._loggingPane||m._loggingPane.closed){
m._loggingPane=new m.LoggingPane(_469,MochiKit.Logging.logger);
}
return m._loggingPane;
};
MochiKit.LoggingPane.LoggingPane=function(_46b,_46c){
if(typeof (_46c)=="undefined"||_46c===null){
_46c=MochiKit.Logging.logger;
}
this.logger=_46c;
var _46d=MochiKit.Base.update;
var _46e=MochiKit.Base.updatetree;
var bind=MochiKit.Base.bind;
var _470=MochiKit.Base.clone;
var win=window;
var uid="_MochiKit_LoggingPane";
if(typeof (MochiKit.DOM)!="undefined"){
win=MochiKit.DOM.currentWindow();
}
if(!_46b){
var url=win.location.href.split("?")[0].replace(/[#:\/.><&%-]/g,"_");
var name=uid+"_"+url;
var nwin=win.open("",name,"dependent,resizable,height=200");
if(!nwin){
alert("Not able to open debugging window due to pop-up blocking.");
return undefined;
}
nwin.document.write("<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\" "+"\"http://www.w3.org/TR/html4/loose.dtd\">"+"<html><head><title>[MochiKit.LoggingPane]</title></head>"+"<body></body></html>");
nwin.document.close();
nwin.document.title+=" "+win.document.title;
win=nwin;
}
var doc=win.document;
this.doc=doc;
var _477=doc.getElementById(uid);
var _478=!!_477;
if(_477&&typeof (_477.loggingPane)!="undefined"){
_477.loggingPane.logger=this.logger;
_477.loggingPane.buildAndApplyFilter();
return _477.loggingPane;
}
if(_478){
var _479;
while((_479=_477.firstChild)){
_477.removeChild(_479);
}
}else{
_477=doc.createElement("div");
_477.id=uid;
}
_477.loggingPane=this;
var _47a=doc.createElement("input");
var _47b=doc.createElement("input");
var _47c=doc.createElement("button");
var _47d=doc.createElement("button");
var _47e=doc.createElement("button");
var _47f=doc.createElement("button");
var _480=doc.createElement("div");
var _481=doc.createElement("div");
var _482=uid+"_Listener";
this.colorTable=_470(this.colorTable);
var _483=[];
var _484=null;
var _485=function(msg){
var _487=msg.level;
if(typeof (_487)=="number"){
_487=MochiKit.Logging.LogLevel[_487];
}
return _487;
};
var _488=function(msg){
return msg.info.join(" ");
};
var _48a=bind(function(msg){
var _48c=_485(msg);
var text=_488(msg);
var c=this.colorTable[_48c];
var p=doc.createElement("span");
p.className="MochiKit-LogMessage MochiKit-LogLevel-"+_48c;
p.style.cssText="margin: 0px; white-space: -moz-pre-wrap; white-space: -o-pre-wrap; white-space: pre-wrap; white-space: pre-line; word-wrap: break-word; wrap-option: emergency; color: "+c;
p.appendChild(doc.createTextNode(_48c+": "+text));
_481.appendChild(p);
_481.appendChild(doc.createElement("br"));
if(_480.offsetHeight>_480.scrollHeight){
_480.scrollTop=0;
}else{
_480.scrollTop=_480.scrollHeight;
}
},this);
var _490=function(msg){
_483[_483.length]=msg;
_48a(msg);
};
var _492=function(){
var _493,_494;
try{
_493=new RegExp(_47a.value);
_494=new RegExp(_47b.value);
}
catch(e){
logDebug("Error in filter regex: "+e.message);
return null;
}
return function(msg){
return (_493.test(_485(msg))&&_494.test(_488(msg)));
};
};
var _496=function(){
while(_481.firstChild){
_481.removeChild(_481.firstChild);
}
};
var _497=function(){
_483=[];
_496();
};
var _498=bind(function(){
if(this.closed){
return;
}
this.closed=true;
if(MochiKit.LoggingPane._loggingPane==this){
MochiKit.LoggingPane._loggingPane=null;
}
this.logger.removeListener(_482);
try{
try{
_477.loggingPane=null;
}
catch(e){
logFatal("Bookmarklet was closed incorrectly.");
}
if(_46b){
_477.parentNode.removeChild(_477);
}else{
this.win.close();
}
}
catch(e){
}
},this);
var _499=function(){
_496();
for(var i=0;i<_483.length;i++){
var msg=_483[i];
if(_484===null||_484(msg)){
_48a(msg);
}
}
};
this.buildAndApplyFilter=function(){
_484=_492();
_499();
this.logger.removeListener(_482);
this.logger.addListener(_482,_484,_490);
};
var _49c=bind(function(){
_483=this.logger.getMessages();
_499();
},this);
var _49d=bind(function(_49e){
_49e=_49e||window.event;
key=_49e.which||_49e.keyCode;
if(key==13){
this.buildAndApplyFilter();
}
},this);
var _49f="display: block; z-index: 1000; left: 0px; bottom: 0px; position: fixed; width: 100%; background-color: white; font: "+this.logFont;
if(_46b){
_49f+="; height: 10em; border-top: 2px solid black";
}else{
_49f+="; height: 100%;";
}
_477.style.cssText=_49f;
if(!_478){
doc.body.appendChild(_477);
}
_49f={"cssText":"width: 33%; display: inline; font: "+this.logFont};
_46e(_47a,{"value":"FATAL|ERROR|WARNING|INFO|DEBUG","onkeypress":_49d,"style":_49f});
_477.appendChild(_47a);
_46e(_47b,{"value":".*","onkeypress":_49d,"style":_49f});
_477.appendChild(_47b);
_49f="width: 8%; display:inline; font: "+this.logFont;
_47c.appendChild(doc.createTextNode("Filter"));
_47c.onclick=bind("buildAndApplyFilter",this);
_47c.style.cssText=_49f;
_477.appendChild(_47c);
_47d.appendChild(doc.createTextNode("Load"));
_47d.onclick=_49c;
_47d.style.cssText=_49f;
_477.appendChild(_47d);
_47e.appendChild(doc.createTextNode("Clear"));
_47e.onclick=_497;
_47e.style.cssText=_49f;
_477.appendChild(_47e);
_47f.appendChild(doc.createTextNode("Close"));
_47f.onclick=_498;
_47f.style.cssText=_49f;
_477.appendChild(_47f);
_480.style.cssText="overflow: auto; width: 100%";
_481.style.cssText="width: 100%; height: "+(_46b?"8em":"100%");
_480.appendChild(_481);
_477.appendChild(_480);
this.buildAndApplyFilter();
_49c();
if(_46b){
this.win=undefined;
}else{
this.win=win;
}
this.inline=_46b;
this.closePane=_498;
this.closed=false;
return this;
};
MochiKit.LoggingPane.LoggingPane.prototype={"logFont":"8pt Verdana,sans-serif","colorTable":{"ERROR":"red","FATAL":"darkred","WARNING":"blue","INFO":"black","DEBUG":"green"}};
MochiKit.LoggingPane.EXPORT_OK=["LoggingPane"];
MochiKit.LoggingPane.EXPORT=["createLoggingPane"];
MochiKit.LoggingPane.__new__=function(){
this.EXPORT_TAGS={":common":this.EXPORT,":all":MochiKit.Base.concat(this.EXPORT,this.EXPORT_OK)};
MochiKit.Base.nameFunctions(this);
MochiKit.LoggingPane._loggingPane=null;
};
MochiKit.LoggingPane.__new__();
MochiKit.Base._exportSymbols(this,MochiKit.LoggingPane);
MochiKit.Base._deps("Color",["Base","DOM","Style"]);
MochiKit.Color.NAME="MochiKit.Color";
MochiKit.Color.VERSION="1.5";
MochiKit.Color.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.Color.toString=function(){
return this.__repr__();
};
MochiKit.Color.Color=function(red,_4a1,blue,_4a3){
if(typeof (_4a3)=="undefined"||_4a3===null){
_4a3=1;
}
this.rgb={r:red,g:_4a1,b:blue,a:_4a3};
};
MochiKit.Color.Color.prototype={__class__:MochiKit.Color.Color,colorWithAlpha:function(_4a4){
var rgb=this.rgb;
var m=MochiKit.Color;
return m.Color.fromRGB(rgb.r,rgb.g,rgb.b,_4a4);
},colorWithHue:function(hue){
var hsl=this.asHSL();
hsl.h=hue;
var m=MochiKit.Color;
return m.Color.fromHSL(hsl);
},colorWithSaturation:function(_4aa){
var hsl=this.asHSL();
hsl.s=_4aa;
var m=MochiKit.Color;
return m.Color.fromHSL(hsl);
},colorWithLightness:function(_4ad){
var hsl=this.asHSL();
hsl.l=_4ad;
var m=MochiKit.Color;
return m.Color.fromHSL(hsl);
},darkerColorWithLevel:function(_4b0){
var hsl=this.asHSL();
hsl.l=Math.max(hsl.l-_4b0,0);
var m=MochiKit.Color;
return m.Color.fromHSL(hsl);
},lighterColorWithLevel:function(_4b3){
var hsl=this.asHSL();
hsl.l=Math.min(hsl.l+_4b3,1);
var m=MochiKit.Color;
return m.Color.fromHSL(hsl);
},blendedColor:function(_4b6,_4b7){
if(typeof (_4b7)=="undefined"||_4b7===null){
_4b7=0.5;
}
var sf=1-_4b7;
var s=this.rgb;
var d=_4b6.rgb;
var df=_4b7;
return MochiKit.Color.Color.fromRGB((s.r*sf)+(d.r*df),(s.g*sf)+(d.g*df),(s.b*sf)+(d.b*df),(s.a*sf)+(d.a*df));
},compareRGB:function(_4bc){
var a=this.asRGB();
var b=_4bc.asRGB();
return MochiKit.Base.compare([a.r,a.g,a.b,a.a],[b.r,b.g,b.b,b.a]);
},isLight:function(){
return this.asHSL().b>0.5;
},isDark:function(){
return (!this.isLight());
},toHSLString:function(){
var c=this.asHSL();
var ccc=MochiKit.Color.clampColorComponent;
var rval=this._hslString;
if(!rval){
var mid=(ccc(c.h,360).toFixed(0)+","+ccc(c.s,100).toPrecision(4)+"%"+","+ccc(c.l,100).toPrecision(4)+"%");
var a=c.a;
if(a>=1){
a=1;
rval="hsl("+mid+")";
}else{
if(a<=0){
a=0;
}
rval="hsla("+mid+","+a+")";
}
this._hslString=rval;
}
return rval;
},toRGBString:function(){
var c=this.rgb;
var ccc=MochiKit.Color.clampColorComponent;
var rval=this._rgbString;
if(!rval){
var mid=(ccc(c.r,255).toFixed(0)+","+ccc(c.g,255).toFixed(0)+","+ccc(c.b,255).toFixed(0));
if(c.a!=1){
rval="rgba("+mid+","+c.a+")";
}else{
rval="rgb("+mid+")";
}
this._rgbString=rval;
}
return rval;
},asRGB:function(){
return MochiKit.Base.clone(this.rgb);
},toHexString:function(){
var m=MochiKit.Color;
var c=this.rgb;
var ccc=MochiKit.Color.clampColorComponent;
var rval=this._hexString;
if(!rval){
rval=("#"+m.toColorPart(ccc(c.r,255))+m.toColorPart(ccc(c.g,255))+m.toColorPart(ccc(c.b,255)));
this._hexString=rval;
}
return rval;
},asHSV:function(){
var hsv=this.hsv;
var c=this.rgb;
if(typeof (hsv)=="undefined"||hsv===null){
hsv=MochiKit.Color.rgbToHSV(this.rgb);
this.hsv=hsv;
}
return MochiKit.Base.clone(hsv);
},asHSL:function(){
var hsl=this.hsl;
var c=this.rgb;
if(typeof (hsl)=="undefined"||hsl===null){
hsl=MochiKit.Color.rgbToHSL(this.rgb);
this.hsl=hsl;
}
return MochiKit.Base.clone(hsl);
},toString:function(){
return this.toRGBString();
},repr:function(){
var c=this.rgb;
var col=[c.r,c.g,c.b,c.a];
return this.__class__.NAME+"("+col.join(", ")+")";
}};
MochiKit.Base.update(MochiKit.Color.Color,{fromRGB:function(red,_4d3,blue,_4d5){
var _4d6=MochiKit.Color.Color;
if(arguments.length==1){
var rgb=red;
red=rgb.r;
_4d3=rgb.g;
blue=rgb.b;
if(typeof (rgb.a)=="undefined"){
_4d5=undefined;
}else{
_4d5=rgb.a;
}
}
return new _4d6(red,_4d3,blue,_4d5);
},fromHSL:function(hue,_4d9,_4da,_4db){
var m=MochiKit.Color;
return m.Color.fromRGB(m.hslToRGB.apply(m,arguments));
},fromHSV:function(hue,_4de,_4df,_4e0){
var m=MochiKit.Color;
return m.Color.fromRGB(m.hsvToRGB.apply(m,arguments));
},fromName:function(name){
var _4e3=MochiKit.Color.Color;
if(name.charAt(0)=="\""){
name=name.substr(1,name.length-2);
}
var _4e4=_4e3._namedColors[name.toLowerCase()];
if(typeof (_4e4)=="string"){
return _4e3.fromHexString(_4e4);
}else{
if(name=="transparent"){
return _4e3.transparentColor();
}
}
return null;
},fromString:function(_4e5){
var self=MochiKit.Color.Color;
var _4e7=_4e5.substr(0,3);
if(_4e7=="rgb"){
return self.fromRGBString(_4e5);
}else{
if(_4e7=="hsl"){
return self.fromHSLString(_4e5);
}else{
if(_4e5.charAt(0)=="#"){
return self.fromHexString(_4e5);
}
}
}
return self.fromName(_4e5);
},fromHexString:function(_4e8){
if(_4e8.charAt(0)=="#"){
_4e8=_4e8.substring(1);
}
var _4e9=[];
var i,hex;
if(_4e8.length==3){
for(i=0;i<3;i++){
hex=_4e8.substr(i,1);
_4e9.push(parseInt(hex+hex,16)/255);
}
}else{
for(i=0;i<6;i+=2){
hex=_4e8.substr(i,2);
_4e9.push(parseInt(hex,16)/255);
}
}
var _4ec=MochiKit.Color.Color;
return _4ec.fromRGB.apply(_4ec,_4e9);
},_fromColorString:function(pre,_4ee,_4ef,_4f0){
if(_4f0.indexOf(pre)===0){
_4f0=_4f0.substring(_4f0.indexOf("(",3)+1,_4f0.length-1);
}
var _4f1=_4f0.split(/\s*,\s*/);
var _4f2=[];
for(var i=0;i<_4f1.length;i++){
var c=_4f1[i];
var val;
var _4f6=c.substring(c.length-3);
if(c.charAt(c.length-1)=="%"){
val=0.01*parseFloat(c.substring(0,c.length-1));
}else{
if(_4f6=="deg"){
val=parseFloat(c)/360;
}else{
if(_4f6=="rad"){
val=parseFloat(c)/(Math.PI*2);
}else{
val=_4ef[i]*parseFloat(c);
}
}
}
_4f2.push(val);
}
return this[_4ee].apply(this,_4f2);
},fromComputedStyle:function(elem,_4f8){
var d=MochiKit.DOM;
var cls=MochiKit.Color.Color;
for(elem=d.getElement(elem);elem;elem=elem.parentNode){
var _4fb=MochiKit.Style.getStyle.apply(d,arguments);
if(!_4fb){
continue;
}
var _4fc=cls.fromString(_4fb);
if(!_4fc){
break;
}
if(_4fc.asRGB().a>0){
return _4fc;
}
}
return null;
},fromBackground:function(elem){
var cls=MochiKit.Color.Color;
return cls.fromComputedStyle(elem,"backgroundColor","background-color")||cls.whiteColor();
},fromText:function(elem){
var cls=MochiKit.Color.Color;
return cls.fromComputedStyle(elem,"color","color")||cls.blackColor();
},namedColors:function(){
return MochiKit.Base.clone(MochiKit.Color.Color._namedColors);
}});
MochiKit.Base.update(MochiKit.Color,{clampColorComponent:function(v,_502){
v*=_502;
if(v<0){
return 0;
}else{
if(v>_502){
return _502;
}else{
return v;
}
}
},_hslValue:function(n1,n2,hue){
if(hue>6){
hue-=6;
}else{
if(hue<0){
hue+=6;
}
}
var val;
if(hue<1){
val=n1+(n2-n1)*hue;
}else{
if(hue<3){
val=n2;
}else{
if(hue<4){
val=n1+(n2-n1)*(4-hue);
}else{
val=n1;
}
}
}
return val;
},hsvToRGB:function(hue,_508,_509,_50a){
if(arguments.length==1){
var hsv=hue;
hue=hsv.h;
_508=hsv.s;
_509=hsv.v;
_50a=hsv.a;
}
var red;
var _50d;
var blue;
if(_508===0){
red=_509;
_50d=_509;
blue=_509;
}else{
var i=Math.floor(hue*6);
var f=(hue*6)-i;
var p=_509*(1-_508);
var q=_509*(1-(_508*f));
var t=_509*(1-(_508*(1-f)));
switch(i){
case 1:
red=q;
_50d=_509;
blue=p;
break;
case 2:
red=p;
_50d=_509;
blue=t;
break;
case 3:
red=p;
_50d=q;
blue=_509;
break;
case 4:
red=t;
_50d=p;
blue=_509;
break;
case 5:
red=_509;
_50d=p;
blue=q;
break;
case 6:
case 0:
red=_509;
_50d=t;
blue=p;
break;
}
}
return {r:red,g:_50d,b:blue,a:_50a};
},hslToRGB:function(hue,_515,_516,_517){
if(arguments.length==1){
var hsl=hue;
hue=hsl.h;
_515=hsl.s;
_516=hsl.l;
_517=hsl.a;
}
var red;
var _51a;
var blue;
if(_515===0){
red=_516;
_51a=_516;
blue=_516;
}else{
var m2;
if(_516<=0.5){
m2=_516*(1+_515);
}else{
m2=_516+_515-(_516*_515);
}
var m1=(2*_516)-m2;
var f=MochiKit.Color._hslValue;
var h6=hue*6;
red=f(m1,m2,h6+2);
_51a=f(m1,m2,h6);
blue=f(m1,m2,h6-2);
}
return {r:red,g:_51a,b:blue,a:_517};
},rgbToHSV:function(red,_521,blue,_523){
if(arguments.length==1){
var rgb=red;
red=rgb.r;
_521=rgb.g;
blue=rgb.b;
_523=rgb.a;
}
var max=Math.max(Math.max(red,_521),blue);
var min=Math.min(Math.min(red,_521),blue);
var hue;
var _528;
var _529=max;
if(min==max){
hue=0;
_528=0;
}else{
var _52a=(max-min);
_528=_52a/max;
if(red==max){
hue=(_521-blue)/_52a;
}else{
if(_521==max){
hue=2+((blue-red)/_52a);
}else{
hue=4+((red-_521)/_52a);
}
}
hue/=6;
if(hue<0){
hue+=1;
}
if(hue>1){
hue-=1;
}
}
return {h:hue,s:_528,v:_529,a:_523};
},rgbToHSL:function(red,_52c,blue,_52e){
if(arguments.length==1){
var rgb=red;
red=rgb.r;
_52c=rgb.g;
blue=rgb.b;
_52e=rgb.a;
}
var max=Math.max(red,Math.max(_52c,blue));
var min=Math.min(red,Math.min(_52c,blue));
var hue;
var _533;
var _534=(max+min)/2;
var _535=max-min;
if(_535===0){
hue=0;
_533=0;
}else{
if(_534<=0.5){
_533=_535/(max+min);
}else{
_533=_535/(2-max-min);
}
if(red==max){
hue=(_52c-blue)/_535;
}else{
if(_52c==max){
hue=2+((blue-red)/_535);
}else{
hue=4+((red-_52c)/_535);
}
}
hue/=6;
if(hue<0){
hue+=1;
}
if(hue>1){
hue-=1;
}
}
return {h:hue,s:_533,l:_534,a:_52e};
},toColorPart:function(num){
num=Math.round(num);
var _537=num.toString(16);
if(num<16){
return "0"+_537;
}
return _537;
},__new__:function(){
var m=MochiKit.Base;
this.Color.fromRGBString=m.bind(this.Color._fromColorString,this.Color,"rgb","fromRGB",[1/255,1/255,1/255,1]);
this.Color.fromHSLString=m.bind(this.Color._fromColorString,this.Color,"hsl","fromHSL",[1/360,0.01,0.01,1]);
var _539=1/3;
var _53a={black:[0,0,0],blue:[0,0,1],brown:[0.6,0.4,0.2],cyan:[0,1,1],darkGray:[_539,_539,_539],gray:[0.5,0.5,0.5],green:[0,1,0],lightGray:[2*_539,2*_539,2*_539],magenta:[1,0,1],orange:[1,0.5,0],purple:[0.5,0,0.5],red:[1,0,0],transparent:[0,0,0,0],white:[1,1,1],yellow:[1,1,0]};
var _53b=function(name,r,g,b,a){
var rval=this.fromRGB(r,g,b,a);
this[name]=function(){
return rval;
};
return rval;
};
for(var k in _53a){
var name=k+"Color";
var _544=m.concat([_53b,this.Color,name],_53a[k]);
this.Color[name]=m.bind.apply(null,_544);
}
var _545=function(){
for(var i=0;i<arguments.length;i++){
if(!(arguments[i] instanceof MochiKit.Color.Color)){
return false;
}
}
return true;
};
var _547=function(a,b){
return a.compareRGB(b);
};
m.nameFunctions(this);
m.registerComparator(this.Color.NAME,_545,_547);
this.EXPORT_TAGS={":common":this.EXPORT,":all":m.concat(this.EXPORT,this.EXPORT_OK)};
}});
MochiKit.Color.EXPORT=["Color"];
MochiKit.Color.EXPORT_OK=["clampColorComponent","rgbToHSL","hslToRGB","rgbToHSV","hsvToRGB","toColorPart"];
MochiKit.Color.__new__();
MochiKit.Base._exportSymbols(this,MochiKit.Color);
MochiKit.Color.Color._namedColors={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};
MochiKit.Base._deps("Signal",["Base","DOM","Style"]);
MochiKit.Signal.NAME="MochiKit.Signal";
MochiKit.Signal.VERSION="1.5";
MochiKit.Signal._observers=[];
MochiKit.Signal.Event=function(src,e){
this._event=e||window.event;
this._src=src;
};
MochiKit.Base.update(MochiKit.Signal.Event.prototype,{__repr__:function(){
var repr=MochiKit.Base.repr;
var str="{event(): "+repr(this.event())+", src(): "+repr(this.src())+", type(): "+repr(this.type())+", target(): "+repr(this.target());
if(this.type()&&this.type().indexOf("key")===0||this.type().indexOf("mouse")===0||this.type().indexOf("click")!=-1||this.type()=="contextmenu"){
str+=", modifier(): "+"{alt: "+repr(this.modifier().alt)+", ctrl: "+repr(this.modifier().ctrl)+", meta: "+repr(this.modifier().meta)+", shift: "+repr(this.modifier().shift)+", any: "+repr(this.modifier().any)+"}";
}
if(this.type()&&this.type().indexOf("key")===0){
str+=", key(): {code: "+repr(this.key().code)+", string: "+repr(this.key().string)+"}";
}
if(this.type()&&(this.type().indexOf("mouse")===0||this.type().indexOf("click")!=-1||this.type()=="contextmenu")){
str+=", mouse(): {page: "+repr(this.mouse().page)+", client: "+repr(this.mouse().client);
if(this.type()!="mousemove"&&this.type()!="mousewheel"){
str+=", button: {left: "+repr(this.mouse().button.left)+", middle: "+repr(this.mouse().button.middle)+", right: "+repr(this.mouse().button.right)+"}";
}
if(this.type()=="mousewheel"){
str+=", wheel: "+repr(this.mouse().wheel);
}
str+="}";
}
if(this.type()=="mouseover"||this.type()=="mouseout"||this.type()=="mouseenter"||this.type()=="mouseleave"){
str+=", relatedTarget(): "+repr(this.relatedTarget());
}
str+="}";
return str;
},toString:function(){
return this.__repr__();
},src:function(){
return this._src;
},event:function(){
return this._event;
},type:function(){
if(this._event.type==="DOMMouseScroll"){
return "mousewheel";
}else{
return this._event.type||undefined;
}
},target:function(){
return this._event.target||this._event.srcElement;
},_relatedTarget:null,relatedTarget:function(){
if(this._relatedTarget!==null){
return this._relatedTarget;
}
var elem=null;
if(this.type()=="mouseover"||this.type()=="mouseenter"){
elem=(this._event.relatedTarget||this._event.fromElement);
}else{
if(this.type()=="mouseout"||this.type()=="mouseleave"){
elem=(this._event.relatedTarget||this._event.toElement);
}
}
if(elem!==null){
this._relatedTarget=elem;
return elem;
}
return undefined;
},_modifier:null,modifier:function(){
if(this._modifier!==null){
return this._modifier;
}
var m={};
m.alt=this._event.altKey;
m.ctrl=this._event.ctrlKey;
m.meta=this._event.metaKey||false;
m.shift=this._event.shiftKey;
m.any=m.alt||m.ctrl||m.shift||m.meta;
this._modifier=m;
return m;
},_key:null,key:function(){
if(this._key!==null){
return this._key;
}
var k={};
if(this.type()&&this.type().indexOf("key")===0){
if(this.type()=="keydown"||this.type()=="keyup"){
k.code=this._event.keyCode;
k.string=(MochiKit.Signal._specialKeys[k.code]||"KEY_UNKNOWN");
this._key=k;
return k;
}else{
if(this.type()=="keypress"){
k.code=0;
k.string="";
if(typeof (this._event.charCode)!="undefined"&&this._event.charCode!==0&&!MochiKit.Signal._specialMacKeys[this._event.charCode]){
k.code=this._event.charCode;
k.string=String.fromCharCode(k.code);
}else{
if(this._event.keyCode&&typeof (this._event.charCode)=="undefined"){
k.code=this._event.keyCode;
k.string=String.fromCharCode(k.code);
}
}
this._key=k;
return k;
}
}
}
return undefined;
},_mouse:null,mouse:function(){
if(this._mouse!==null){
return this._mouse;
}
var m={};
var e=this._event;
if(this.type()&&(this.type().indexOf("mouse")===0||this.type().indexOf("click")!=-1||this.type()=="contextmenu")){
m.client=new MochiKit.Style.Coordinates(0,0);
if(e.clientX||e.clientY){
m.client.x=(!e.clientX||e.clientX<0)?0:e.clientX;
m.client.y=(!e.clientY||e.clientY<0)?0:e.clientY;
}
m.page=new MochiKit.Style.Coordinates(0,0);
if(e.pageX||e.pageY){
m.page.x=(!e.pageX||e.pageX<0)?0:e.pageX;
m.page.y=(!e.pageY||e.pageY<0)?0:e.pageY;
}else{
var de=MochiKit.DOM._document.documentElement;
var b=MochiKit.DOM._document.body;
m.page.x=e.clientX+(de.scrollLeft||b.scrollLeft)-(de.clientLeft||0);
m.page.y=e.clientY+(de.scrollTop||b.scrollTop)-(de.clientTop||0);
}
if(this.type()!="mousemove"&&this.type()!="mousewheel"){
m.button={};
m.button.left=false;
m.button.right=false;
m.button.middle=false;
if(e.which){
m.button.left=(e.which==1);
m.button.middle=(e.which==2);
m.button.right=(e.which==3);
}else{
m.button.left=!!(e.button&1);
m.button.right=!!(e.button&2);
m.button.middle=!!(e.button&4);
}
}
if(this.type()=="mousewheel"){
m.wheel=new MochiKit.Style.Coordinates(0,0);
if(e.wheelDeltaX||e.wheelDeltaY){
m.wheel.x=e.wheelDeltaX/-40||0;
m.wheel.y=e.wheelDeltaY/-40||0;
}else{
if(e.wheelDelta){
m.wheel.y=e.wheelDelta/-40;
}else{
m.wheel.y=e.detail||0;
}
}
}
this._mouse=m;
return m;
}
return undefined;
},stop:function(){
this.stopPropagation();
this.preventDefault();
},stopPropagation:function(){
if(this._event.stopPropagation){
this._event.stopPropagation();
}else{
this._event.cancelBubble=true;
}
},preventDefault:function(){
if(this._event.preventDefault){
this._event.preventDefault();
}else{
if(this._confirmUnload===null){
this._event.returnValue=false;
}
}
},_confirmUnload:null,confirmUnload:function(msg){
if(this.type()=="beforeunload"){
this._confirmUnload=msg;
this._event.returnValue=msg;
}
}});
MochiKit.Signal._specialMacKeys={3:"KEY_ENTER",63289:"KEY_NUM_PAD_CLEAR",63276:"KEY_PAGE_UP",63277:"KEY_PAGE_DOWN",63275:"KEY_END",63273:"KEY_HOME",63234:"KEY_ARROW_LEFT",63232:"KEY_ARROW_UP",63235:"KEY_ARROW_RIGHT",63233:"KEY_ARROW_DOWN",63302:"KEY_INSERT",63272:"KEY_DELETE"};
(function(){
var _556=MochiKit.Signal._specialMacKeys;
for(i=63236;i<=63242;i++){
_556[i]="KEY_F"+(i-63236+1);
}
})();
MochiKit.Signal._specialKeys={8:"KEY_BACKSPACE",9:"KEY_TAB",12:"KEY_NUM_PAD_CLEAR",13:"KEY_ENTER",16:"KEY_SHIFT",17:"KEY_CTRL",18:"KEY_ALT",19:"KEY_PAUSE",20:"KEY_CAPS_LOCK",27:"KEY_ESCAPE",32:"KEY_SPACEBAR",33:"KEY_PAGE_UP",34:"KEY_PAGE_DOWN",35:"KEY_END",36:"KEY_HOME",37:"KEY_ARROW_LEFT",38:"KEY_ARROW_UP",39:"KEY_ARROW_RIGHT",40:"KEY_ARROW_DOWN",44:"KEY_PRINT_SCREEN",45:"KEY_INSERT",46:"KEY_DELETE",59:"KEY_SEMICOLON",91:"KEY_WINDOWS_LEFT",92:"KEY_WINDOWS_RIGHT",93:"KEY_SELECT",106:"KEY_NUM_PAD_ASTERISK",107:"KEY_NUM_PAD_PLUS_SIGN",109:"KEY_NUM_PAD_HYPHEN-MINUS",110:"KEY_NUM_PAD_FULL_STOP",111:"KEY_NUM_PAD_SOLIDUS",144:"KEY_NUM_LOCK",145:"KEY_SCROLL_LOCK",186:"KEY_SEMICOLON",187:"KEY_EQUALS_SIGN",188:"KEY_COMMA",189:"KEY_HYPHEN-MINUS",190:"KEY_FULL_STOP",191:"KEY_SOLIDUS",192:"KEY_GRAVE_ACCENT",219:"KEY_LEFT_SQUARE_BRACKET",220:"KEY_REVERSE_SOLIDUS",221:"KEY_RIGHT_SQUARE_BRACKET",222:"KEY_APOSTROPHE"};
(function(){
var _557=MochiKit.Signal._specialKeys;
for(var i=48;i<=57;i++){
_557[i]="KEY_"+(i-48);
}
for(i=65;i<=90;i++){
_557[i]="KEY_"+String.fromCharCode(i);
}
for(i=96;i<=105;i++){
_557[i]="KEY_NUM_PAD_"+(i-96);
}
for(i=112;i<=123;i++){
_557[i]="KEY_F"+(i-112+1);
}
})();
MochiKit.Signal.Ident=function(_559){
this.source=_559.source;
this.signal=_559.signal;
this.listener=_559.listener;
this.isDOM=_559.isDOM;
this.objOrFunc=_559.objOrFunc;
this.funcOrStr=_559.funcOrStr;
this.connected=_559.connected;
};
MochiKit.Signal.Ident.prototype={};
MochiKit.Base.update(MochiKit.Signal,{__repr__:function(){
return "["+this.NAME+" "+this.VERSION+"]";
},toString:function(){
return this.__repr__();
},_unloadCache:function(){
var self=MochiKit.Signal;
var _55b=self._observers;
for(var i=0;i<_55b.length;i++){
if(_55b[i].signal!=="onload"&&_55b[i].signal!=="onunload"){
self._disconnect(_55b[i]);
}
}
},_listener:function(src,sig,func,obj,_561){
var self=MochiKit.Signal;
var E=self.Event;
if(!_561){
if(typeof (func.im_self)=="undefined"){
return MochiKit.Base.bindLate(func,obj);
}else{
return func;
}
}
obj=obj||src;
if(typeof (func)=="string"){
if(sig==="onload"||sig==="onunload"){
return function(_564){
obj[func].apply(obj,[new E(src,_564)]);
var _565=new MochiKit.Signal.Ident({source:src,signal:sig,objOrFunc:obj,funcOrStr:func});
MochiKit.Signal._disconnect(_565);
};
}else{
return function(_566){
obj[func].apply(obj,[new E(src,_566)]);
};
}
}else{
if(sig==="onload"||sig==="onunload"){
return function(_567){
func.apply(obj,[new E(src,_567)]);
var _568=new MochiKit.Signal.Ident({source:src,signal:sig,objOrFunc:func});
MochiKit.Signal._disconnect(_568);
};
}else{
return function(_569){
func.apply(obj,[new E(src,_569)]);
};
}
}
},_browserAlreadyHasMouseEnterAndLeave:function(){
return /MSIE/.test(navigator.userAgent);
},_browserLacksMouseWheelEvent:function(){
return /Gecko\//.test(navigator.userAgent);
},_mouseEnterListener:function(src,sig,func,obj){
var E=MochiKit.Signal.Event;
return function(_56f){
var e=new E(src,_56f);
try{
e.relatedTarget().nodeName;
}
catch(err){
return;
}
e.stop();
if(MochiKit.DOM.isChildNode(e.relatedTarget(),src)){
return;
}
e.type=function(){
return sig;
};
if(typeof (func)=="string"){
return obj[func].apply(obj,[e]);
}else{
return func.apply(obj,[e]);
}
};
},_getDestPair:function(_571,_572){
var obj=null;
var func=null;
if(typeof (_572)!="undefined"){
obj=_571;
func=_572;
if(typeof (_572)=="string"){
if(typeof (_571[_572])!="function"){
throw new Error("'funcOrStr' must be a function on 'objOrFunc'");
}
}else{
if(typeof (_572)!="function"){
throw new Error("'funcOrStr' must be a function or string");
}
}
}else{
if(typeof (_571)!="function"){
throw new Error("'objOrFunc' must be a function if 'funcOrStr' is not given");
}else{
func=_571;
}
}
return [obj,func];
},connect:function(src,sig,_577,_578){
src=MochiKit.DOM.getElement(src);
var self=MochiKit.Signal;
if(typeof (sig)!="string"){
throw new Error("'sig' must be a string");
}
var _57a=self._getDestPair(_577,_578);
var obj=_57a[0];
var func=_57a[1];
if(typeof (obj)=="undefined"||obj===null){
obj=src;
}
var _57d=!!(src.addEventListener||src.attachEvent);
if(_57d&&(sig==="onmouseenter"||sig==="onmouseleave")&&!self._browserAlreadyHasMouseEnterAndLeave()){
var _57e=self._mouseEnterListener(src,sig.substr(2),func,obj);
if(sig==="onmouseenter"){
sig="onmouseover";
}else{
sig="onmouseout";
}
}else{
if(_57d&&sig=="onmousewheel"&&self._browserLacksMouseWheelEvent()){
var _57e=self._listener(src,sig,func,obj,_57d);
sig="onDOMMouseScroll";
}else{
var _57e=self._listener(src,sig,func,obj,_57d);
}
}
if(src.addEventListener){
src.addEventListener(sig.substr(2),_57e,false);
}else{
if(src.attachEvent){
src.attachEvent(sig,_57e);
}
}
var _57f=new MochiKit.Signal.Ident({source:src,signal:sig,listener:_57e,isDOM:_57d,objOrFunc:_577,funcOrStr:_578,connected:true});
self._observers.push(_57f);
if(!_57d&&typeof (src.__connect__)=="function"){
var args=MochiKit.Base.extend([_57f],arguments,1);
src.__connect__.apply(src,args);
}
return _57f;
},_disconnect:function(_581){
if(!_581.connected){
return;
}
_581.connected=false;
var src=_581.source;
var sig=_581.signal;
var _584=_581.listener;
if(!_581.isDOM){
if(typeof (src.__disconnect__)=="function"){
src.__disconnect__(_581,sig,_581.objOrFunc,_581.funcOrStr);
}
return;
}
if(src.removeEventListener){
src.removeEventListener(sig.substr(2),_584,false);
}else{
if(src.detachEvent){
src.detachEvent(sig,_584);
}else{
throw new Error("'src' must be a DOM element");
}
}
},disconnect:function(_585){
var self=MochiKit.Signal;
var _587=self._observers;
var m=MochiKit.Base;
if(arguments.length>1){
var src=MochiKit.DOM.getElement(arguments[0]);
var sig=arguments[1];
var obj=arguments[2];
var func=arguments[3];
for(var i=_587.length-1;i>=0;i--){
var o=_587[i];
if(o.source===src&&o.signal===sig&&o.objOrFunc===obj&&o.funcOrStr===func){
self._disconnect(o);
if(!self._lock){
_587.splice(i,1);
}else{
self._dirty=true;
}
return true;
}
}
}else{
var idx=m.findIdentical(_587,_585);
if(idx>=0){
self._disconnect(_585);
if(!self._lock){
_587.splice(idx,1);
}else{
self._dirty=true;
}
return true;
}
}
return false;
},disconnectAllTo:function(_590,_591){
var self=MochiKit.Signal;
var _593=self._observers;
var _594=self._disconnect;
var _595=self._lock;
var _596=self._dirty;
if(typeof (_591)==="undefined"){
_591=null;
}
for(var i=_593.length-1;i>=0;i--){
var _598=_593[i];
if(_598.objOrFunc===_590&&(_591===null||_598.funcOrStr===_591)){
_594(_598);
if(_595){
_596=true;
}else{
_593.splice(i,1);
}
}
}
self._dirty=_596;
},disconnectAll:function(src,sig){
src=MochiKit.DOM.getElement(src);
var m=MochiKit.Base;
var _59c=m.flattenArguments(m.extend(null,arguments,1));
var self=MochiKit.Signal;
var _59e=self._disconnect;
var _59f=self._observers;
var i,_5a1;
var _5a2=self._lock;
var _5a3=self._dirty;
if(_59c.length===0){
for(i=_59f.length-1;i>=0;i--){
_5a1=_59f[i];
if(_5a1.source===src){
_59e(_5a1);
if(!_5a2){
_59f.splice(i,1);
}else{
_5a3=true;
}
}
}
}else{
var sigs={};
for(i=0;i<_59c.length;i++){
sigs[_59c[i]]=true;
}
for(i=_59f.length-1;i>=0;i--){
_5a1=_59f[i];
if(_5a1.source===src&&_5a1.signal in sigs){
_59e(_5a1);
if(!_5a2){
_59f.splice(i,1);
}else{
_5a3=true;
}
}
}
}
self._dirty=_5a3;
},signal:function(src,sig){
var self=MochiKit.Signal;
var _5a8=self._observers;
src=MochiKit.DOM.getElement(src);
var args=MochiKit.Base.extend(null,arguments,2);
var _5aa=[];
self._lock=true;
for(var i=0;i<_5a8.length;i++){
var _5ac=_5a8[i];
if(_5ac.source===src&&_5ac.signal===sig&&_5ac.connected){
try{
_5ac.listener.apply(src,args);
}
catch(e){
_5aa.push(e);
}
}
}
self._lock=false;
if(self._dirty){
self._dirty=false;
for(var i=_5a8.length-1;i>=0;i--){
if(!_5a8[i].connected){
_5a8.splice(i,1);
}
}
}
if(_5aa.length==1){
throw _5aa[0];
}else{
if(_5aa.length>1){
var e=new Error("Multiple errors thrown in handling 'sig', see errors property");
e.errors=_5aa;
throw e;
}
}
}});
MochiKit.Signal.EXPORT_OK=[];
MochiKit.Signal.EXPORT=["connect","disconnect","signal","disconnectAll","disconnectAllTo"];
MochiKit.Signal.__new__=function(win){
var m=MochiKit.Base;
this._document=document;
this._window=win;
this._lock=false;
this._dirty=false;
try{
this.connect(window,"onunload",this._unloadCache);
}
catch(e){
}
this.EXPORT_TAGS={":common":this.EXPORT,":all":m.concat(this.EXPORT,this.EXPORT_OK)};
m.nameFunctions(this);
};
MochiKit.Signal.__new__(this);
if(MochiKit.__export__){
connect=MochiKit.Signal.connect;
disconnect=MochiKit.Signal.disconnect;
disconnectAll=MochiKit.Signal.disconnectAll;
signal=MochiKit.Signal.signal;
}
MochiKit.Base._exportSymbols(this,MochiKit.Signal);
MochiKit.Base._deps("Position",["Base","DOM","Style"]);
MochiKit.Position.NAME="MochiKit.Position";
MochiKit.Position.VERSION="1.5";
MochiKit.Position.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.Position.toString=function(){
return this.__repr__();
};
MochiKit.Position.EXPORT_OK=[];
MochiKit.Position.EXPORT=[];
MochiKit.Base.update(MochiKit.Position,{includeScrollOffsets:false,prepare:function(){
var _5b0=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;
var _5b1=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;
this.windowOffset=new MochiKit.Style.Coordinates(_5b0,_5b1);
},cumulativeOffset:function(_5b2){
var _5b3=0;
var _5b4=0;
do{
_5b3+=_5b2.offsetTop||0;
_5b4+=_5b2.offsetLeft||0;
_5b2=_5b2.offsetParent;
}while(_5b2);
return new MochiKit.Style.Coordinates(_5b4,_5b3);
},realOffset:function(_5b5){
var _5b6=0;
var _5b7=0;
do{
_5b6+=_5b5.scrollTop||0;
_5b7+=_5b5.scrollLeft||0;
_5b5=_5b5.parentNode;
}while(_5b5);
return new MochiKit.Style.Coordinates(_5b7,_5b6);
},within:function(_5b8,x,y){
if(this.includeScrollOffsets){
return this.withinIncludingScrolloffsets(_5b8,x,y);
}
this.xcomp=x;
this.ycomp=y;
this.offset=this.cumulativeOffset(_5b8);
if(_5b8.style.position=="fixed"){
this.offset.x+=this.windowOffset.x;
this.offset.y+=this.windowOffset.y;
}
return (y>=this.offset.y&&y<this.offset.y+_5b8.offsetHeight&&x>=this.offset.x&&x<this.offset.x+_5b8.offsetWidth);
},withinIncludingScrolloffsets:function(_5bb,x,y){
var _5be=this.realOffset(_5bb);
this.xcomp=x+_5be.x-this.windowOffset.x;
this.ycomp=y+_5be.y-this.windowOffset.y;
this.offset=this.cumulativeOffset(_5bb);
return (this.ycomp>=this.offset.y&&this.ycomp<this.offset.y+_5bb.offsetHeight&&this.xcomp>=this.offset.x&&this.xcomp<this.offset.x+_5bb.offsetWidth);
},overlap:function(mode,_5c0){
if(!mode){
return 0;
}
if(mode=="vertical"){
return ((this.offset.y+_5c0.offsetHeight)-this.ycomp)/_5c0.offsetHeight;
}
if(mode=="horizontal"){
return ((this.offset.x+_5c0.offsetWidth)-this.xcomp)/_5c0.offsetWidth;
}
},absolutize:function(_5c1){
_5c1=MochiKit.DOM.getElement(_5c1);
if(_5c1.style.position=="absolute"){
return;
}
MochiKit.Position.prepare();
var _5c2=MochiKit.Position.positionedOffset(_5c1);
var _5c3=_5c1.clientWidth;
var _5c4=_5c1.clientHeight;
var _5c5={"position":_5c1.style.position,"left":_5c2.x-parseFloat(_5c1.style.left||0),"top":_5c2.y-parseFloat(_5c1.style.top||0),"width":_5c1.style.width,"height":_5c1.style.height};
_5c1.style.position="absolute";
_5c1.style.top=_5c2.y+"px";
_5c1.style.left=_5c2.x+"px";
_5c1.style.width=_5c3+"px";
_5c1.style.height=_5c4+"px";
return _5c5;
},positionedOffset:function(_5c6){
var _5c7=0,_5c8=0;
do{
_5c7+=_5c6.offsetTop||0;
_5c8+=_5c6.offsetLeft||0;
_5c6=_5c6.offsetParent;
if(_5c6){
p=MochiKit.Style.getStyle(_5c6,"position");
if(p=="relative"||p=="absolute"){
break;
}
}
}while(_5c6);
return new MochiKit.Style.Coordinates(_5c8,_5c7);
},relativize:function(_5c9,_5ca){
_5c9=MochiKit.DOM.getElement(_5c9);
if(_5c9.style.position=="relative"){
return;
}
MochiKit.Position.prepare();
var top=parseFloat(_5c9.style.top||0)-(_5ca["top"]||0);
var left=parseFloat(_5c9.style.left||0)-(_5ca["left"]||0);
_5c9.style.position=_5ca["position"];
_5c9.style.top=top+"px";
_5c9.style.left=left+"px";
_5c9.style.width=_5ca["width"];
_5c9.style.height=_5ca["height"];
},clone:function(_5cd,_5ce){
_5cd=MochiKit.DOM.getElement(_5cd);
_5ce=MochiKit.DOM.getElement(_5ce);
_5ce.style.position="absolute";
var _5cf=this.cumulativeOffset(_5cd);
_5ce.style.top=_5cf.y+"px";
_5ce.style.left=_5cf.x+"px";
_5ce.style.width=_5cd.offsetWidth+"px";
_5ce.style.height=_5cd.offsetHeight+"px";
},page:function(_5d0){
var _5d1=0;
var _5d2=0;
var _5d3=_5d0;
do{
_5d1+=_5d3.offsetTop||0;
_5d2+=_5d3.offsetLeft||0;
if(_5d3.offsetParent==document.body&&MochiKit.Style.getStyle(_5d3,"position")=="absolute"){
break;
}
}while(_5d3=_5d3.offsetParent);
_5d3=_5d0;
do{
_5d1-=_5d3.scrollTop||0;
_5d2-=_5d3.scrollLeft||0;
}while(_5d3=_5d3.parentNode);
return new MochiKit.Style.Coordinates(_5d2,_5d1);
}});
MochiKit.Position.__new__=function(win){
var m=MochiKit.Base;
this.EXPORT_TAGS={":common":this.EXPORT,":all":m.concat(this.EXPORT,this.EXPORT_OK)};
m.nameFunctions(this);
};
MochiKit.Position.__new__(this);
MochiKit.Base._deps("Visual",["Base","DOM","Style","Color","Position"]);
MochiKit.Visual.NAME="MochiKit.Visual";
MochiKit.Visual.VERSION="1.5";
MochiKit.Visual.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.Visual.toString=function(){
return this.__repr__();
};
MochiKit.Visual._RoundCorners=function(e,_5d7){
e=MochiKit.DOM.getElement(e);
this._setOptions(_5d7);
if(this.options.__unstable__wrapElement){
e=this._doWrap(e);
}
var _5d8=this.options.color;
var C=MochiKit.Color.Color;
if(this.options.color==="fromElement"){
_5d8=C.fromBackground(e);
}else{
if(!(_5d8 instanceof C)){
_5d8=C.fromString(_5d8);
}
}
this.isTransparent=(_5d8.asRGB().a<=0);
var _5da=this.options.bgColor;
if(this.options.bgColor==="fromParent"){
_5da=C.fromBackground(e.offsetParent);
}else{
if(!(_5da instanceof C)){
_5da=C.fromString(_5da);
}
}
this._roundCornersImpl(e,_5d8,_5da);
};
MochiKit.Visual._RoundCorners.prototype={_doWrap:function(e){
var _5dc=e.parentNode;
var doc=MochiKit.DOM.currentDocument();
if(typeof (doc.defaultView)==="undefined"||doc.defaultView===null){
return e;
}
var _5de=doc.defaultView.getComputedStyle(e,null);
if(typeof (_5de)==="undefined"||_5de===null){
return e;
}
var _5df=MochiKit.DOM.DIV({"style":{display:"block",marginTop:_5de.getPropertyValue("padding-top"),marginRight:_5de.getPropertyValue("padding-right"),marginBottom:_5de.getPropertyValue("padding-bottom"),marginLeft:_5de.getPropertyValue("padding-left"),padding:"0px"}});
_5df.innerHTML=e.innerHTML;
e.innerHTML="";
e.appendChild(_5df);
return e;
},_roundCornersImpl:function(e,_5e1,_5e2){
if(this.options.border){
this._renderBorder(e,_5e2);
}
if(this._isTopRounded()){
this._roundTopCorners(e,_5e1,_5e2);
}
if(this._isBottomRounded()){
this._roundBottomCorners(e,_5e1,_5e2);
}
},_renderBorder:function(el,_5e4){
var _5e5="1px solid "+this._borderColor(_5e4);
var _5e6="border-left: "+_5e5;
var _5e7="border-right: "+_5e5;
var _5e8="style='"+_5e6+";"+_5e7+"'";
el.innerHTML="<div "+_5e8+">"+el.innerHTML+"</div>";
},_roundTopCorners:function(el,_5ea,_5eb){
var _5ec=this._createCorner(_5eb);
for(var i=0;i<this.options.numSlices;i++){
_5ec.appendChild(this._createCornerSlice(_5ea,_5eb,i,"top"));
}
el.style.paddingTop=0;
el.insertBefore(_5ec,el.firstChild);
},_roundBottomCorners:function(el,_5ef,_5f0){
var _5f1=this._createCorner(_5f0);
for(var i=(this.options.numSlices-1);i>=0;i--){
_5f1.appendChild(this._createCornerSlice(_5ef,_5f0,i,"bottom"));
}
el.style.paddingBottom=0;
el.appendChild(_5f1);
},_createCorner:function(_5f3){
var dom=MochiKit.DOM;
return dom.DIV({style:{backgroundColor:_5f3.toString()}});
},_createCornerSlice:function(_5f5,_5f6,n,_5f8){
var _5f9=MochiKit.DOM.SPAN();
var _5fa=_5f9.style;
_5fa.backgroundColor=_5f5.toString();
_5fa.display="block";
_5fa.height="1px";
_5fa.overflow="hidden";
_5fa.fontSize="1px";
var _5fb=this._borderColor(_5f5,_5f6);
if(this.options.border&&n===0){
_5fa.borderTopStyle="solid";
_5fa.borderTopWidth="1px";
_5fa.borderLeftWidth="0px";
_5fa.borderRightWidth="0px";
_5fa.borderBottomWidth="0px";
_5fa.height="0px";
_5fa.borderColor=_5fb.toString();
}else{
if(_5fb){
_5fa.borderColor=_5fb.toString();
_5fa.borderStyle="solid";
_5fa.borderWidth="0px 1px";
}
}
if(!this.options.compact&&(n==(this.options.numSlices-1))){
_5fa.height="2px";
}
this._setMargin(_5f9,n,_5f8);
this._setBorder(_5f9,n,_5f8);
return _5f9;
},_setOptions:function(_5fc){
this.options={corners:"all",color:"fromElement",bgColor:"fromParent",blend:true,border:false,compact:false,__unstable__wrapElement:false};
MochiKit.Base.update(this.options,_5fc);
this.options.numSlices=(this.options.compact?2:4);
},_whichSideTop:function(){
var _5fd=this.options.corners;
if(this._hasString(_5fd,"all","top")){
return "";
}
var _5fe=(_5fd.indexOf("tl")!=-1);
var _5ff=(_5fd.indexOf("tr")!=-1);
if(_5fe&&_5ff){
return "";
}
if(_5fe){
return "left";
}
if(_5ff){
return "right";
}
return "";
},_whichSideBottom:function(){
var _600=this.options.corners;
if(this._hasString(_600,"all","bottom")){
return "";
}
var _601=(_600.indexOf("bl")!=-1);
var _602=(_600.indexOf("br")!=-1);
if(_601&&_602){
return "";
}
if(_601){
return "left";
}
if(_602){
return "right";
}
return "";
},_borderColor:function(_603,_604){
if(_603=="transparent"){
return _604;
}else{
if(this.options.border){
return this.options.border;
}else{
if(this.options.blend){
return _604.blendedColor(_603);
}
}
}
return "";
},_setMargin:function(el,n,_607){
var _608=this._marginSize(n)+"px";
var _609=(_607=="top"?this._whichSideTop():this._whichSideBottom());
var _60a=el.style;
if(_609=="left"){
_60a.marginLeft=_608;
_60a.marginRight="0px";
}else{
if(_609=="right"){
_60a.marginRight=_608;
_60a.marginLeft="0px";
}else{
_60a.marginLeft=_608;
_60a.marginRight=_608;
}
}
},_setBorder:function(el,n,_60d){
var _60e=this._borderSize(n)+"px";
var _60f=(_60d=="top"?this._whichSideTop():this._whichSideBottom());
var _610=el.style;
if(_60f=="left"){
_610.borderLeftWidth=_60e;
_610.borderRightWidth="0px";
}else{
if(_60f=="right"){
_610.borderRightWidth=_60e;
_610.borderLeftWidth="0px";
}else{
_610.borderLeftWidth=_60e;
_610.borderRightWidth=_60e;
}
}
},_marginSize:function(n){
if(this.isTransparent){
return 0;
}
var o=this.options;
if(o.compact&&o.blend){
var _613=[1,0];
return _613[n];
}else{
if(o.compact){
var _614=[2,1];
return _614[n];
}else{
if(o.blend){
var _615=[3,2,1,0];
return _615[n];
}else{
var _616=[5,3,2,1];
return _616[n];
}
}
}
},_borderSize:function(n){
var o=this.options;
var _619;
if(o.compact&&(o.blend||this.isTransparent)){
return 1;
}else{
if(o.compact){
_619=[1,0];
}else{
if(o.blend){
_619=[2,1,1,1];
}else{
if(o.border){
_619=[0,2,0,0];
}else{
if(this.isTransparent){
_619=[5,3,2,1];
}else{
return 0;
}
}
}
}
}
return _619[n];
},_hasString:function(str){
for(var i=1;i<arguments.length;i++){
if(str.indexOf(arguments[i])!=-1){
return true;
}
}
return false;
},_isTopRounded:function(){
return this._hasString(this.options.corners,"all","top","tl","tr");
},_isBottomRounded:function(){
return this._hasString(this.options.corners,"all","bottom","bl","br");
},_hasSingleTextChild:function(el){
return (el.childNodes.length==1&&el.childNodes[0].nodeType==3);
}};
MochiKit.Visual.roundElement=function(e,_61e){
new MochiKit.Visual._RoundCorners(e,_61e);
};
MochiKit.Visual.roundClass=function(_61f,_620,_621){
var _622=MochiKit.DOM.getElementsByTagAndClassName(_61f,_620);
for(var i=0;i<_622.length;i++){
MochiKit.Visual.roundElement(_622[i],_621);
}
};
MochiKit.Visual.tagifyText=function(_624,_625){
_625=_625||"position:relative";
if(/MSIE/.test(navigator.userAgent)){
_625+=";zoom:1";
}
_624=MochiKit.DOM.getElement(_624);
var ma=MochiKit.Base.map;
ma(function(_627){
if(_627.nodeType==3){
ma(function(_628){
_624.insertBefore(MochiKit.DOM.SPAN({style:_625},_628==" "?String.fromCharCode(160):_628),_627);
},_627.nodeValue.split(""));
MochiKit.DOM.removeElement(_627);
}
},_624.childNodes);
};
MochiKit.Visual.forceRerendering=function(_629){
try{
_629=MochiKit.DOM.getElement(_629);
var n=document.createTextNode(" ");
_629.appendChild(n);
_629.removeChild(n);
}
catch(e){
}
};
MochiKit.Visual.multiple=function(_62b,_62c,_62d){
_62d=MochiKit.Base.update({speed:0.1,delay:0},_62d);
var _62e=_62d.delay;
var _62f=0;
MochiKit.Base.map(function(_630){
_62d.delay=_62f*_62d.speed+_62e;
new _62c(_630,_62d);
_62f+=1;
},_62b);
};
MochiKit.Visual.PAIRS={"slide":["slideDown","slideUp"],"blind":["blindDown","blindUp"],"appear":["appear","fade"],"size":["grow","shrink"]};
MochiKit.Visual.toggle=function(_631,_632,_633){
_631=MochiKit.DOM.getElement(_631);
_632=(_632||"appear").toLowerCase();
_633=MochiKit.Base.update({queue:{position:"end",scope:(_631.id||"global"),limit:1}},_633);
var v=MochiKit.Visual;
v[MochiKit.Style.getStyle(_631,"display")!="none"?v.PAIRS[_632][1]:v.PAIRS[_632][0]](_631,_633);
};
MochiKit.Visual.Transitions={};
MochiKit.Visual.Transitions.linear=function(pos){
return pos;
};
MochiKit.Visual.Transitions.sinoidal=function(pos){
return 0.5-Math.cos(pos*Math.PI)/2;
};
MochiKit.Visual.Transitions.reverse=function(pos){
return 1-pos;
};
MochiKit.Visual.Transitions.flicker=function(pos){
return 0.25-Math.cos(pos*Math.PI)/4+Math.random()/2;
};
MochiKit.Visual.Transitions.wobble=function(pos){
return 0.5-Math.cos(9*pos*Math.PI)/2;
};
MochiKit.Visual.Transitions.pulse=function(pos,_63b){
if(_63b){
pos*=2*_63b;
}else{
pos*=10;
}
var _63c=pos-Math.floor(pos);
return (Math.floor(pos)%2==0)?_63c:1-_63c;
};
MochiKit.Visual.Transitions.parabolic=function(pos){
return pos*pos;
};
MochiKit.Visual.Transitions.none=function(pos){
return 0;
};
MochiKit.Visual.Transitions.full=function(pos){
return 1;
};
MochiKit.Visual.ScopedQueue=function(){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls();
}
this.__init__();
};
MochiKit.Base.update(MochiKit.Visual.ScopedQueue.prototype,{__init__:function(){
this.effects=[];
this.interval=null;
},add:function(_641){
var _642=new Date().getTime();
var _643=(typeof (_641.options.queue)=="string")?_641.options.queue:_641.options.queue.position;
var ma=MochiKit.Base.map;
switch(_643){
case "front":
ma(function(e){
if(e.state=="idle"){
e.startOn+=_641.finishOn;
e.finishOn+=_641.finishOn;
}
},this.effects);
break;
case "end":
var _646;
ma(function(e){
var i=e.finishOn;
if(i>=(_646||i)){
_646=i;
}
},this.effects);
_642=_646||_642;
break;
case "break":
ma(function(e){
e.finalize();
},this.effects);
break;
}
_641.startOn+=_642;
_641.finishOn+=_642;
if(!_641.options.queue.limit||this.effects.length<_641.options.queue.limit){
this.effects.push(_641);
}
if(!this.interval){
this.interval=this.startLoop(MochiKit.Base.bind(this.loop,this),40);
}
},startLoop:function(func,_64b){
return setInterval(func,_64b);
},remove:function(_64c){
this.effects=MochiKit.Base.filter(function(e){
return e!=_64c;
},this.effects);
if(!this.effects.length){
this.stopLoop(this.interval);
this.interval=null;
}
},stopLoop:function(_64e){
clearInterval(_64e);
},loop:function(){
var _64f=new Date().getTime();
MochiKit.Base.map(function(_650){
_650.loop(_64f);
},this.effects);
}});
MochiKit.Visual.Queues={instances:{},get:function(_651){
if(typeof (_651)!="string"){
return _651;
}
if(!this.instances[_651]){
this.instances[_651]=new MochiKit.Visual.ScopedQueue();
}
return this.instances[_651];
}};
MochiKit.Visual.Queue=MochiKit.Visual.Queues.get("global");
MochiKit.Visual.DefaultOptions={transition:MochiKit.Visual.Transitions.sinoidal,duration:1,fps:25,sync:false,from:0,to:1,delay:0,queue:"parallel"};
MochiKit.Visual.Base=function(){
};
MochiKit.Visual.Base.prototype={__class__:MochiKit.Visual.Base,start:function(_652){
var v=MochiKit.Visual;
this.options=MochiKit.Base.setdefault(_652,v.DefaultOptions);
this.currentFrame=0;
this.state="idle";
this.startOn=this.options.delay*1000;
this.finishOn=this.startOn+(this.options.duration*1000);
this.event("beforeStart");
if(!this.options.sync){
v.Queues.get(typeof (this.options.queue)=="string"?"global":this.options.queue.scope).add(this);
}
},loop:function(_654){
if(_654>=this.startOn){
if(_654>=this.finishOn){
return this.finalize();
}
var pos=(_654-this.startOn)/(this.finishOn-this.startOn);
var _656=Math.round(pos*this.options.fps*this.options.duration);
if(_656>this.currentFrame){
this.render(pos);
this.currentFrame=_656;
}
}
},render:function(pos){
if(this.state=="idle"){
this.state="running";
this.event("beforeSetup");
this.setup();
this.event("afterSetup");
}
if(this.state=="running"){
if(this.options.transition){
pos=this.options.transition(pos);
}
pos*=(this.options.to-this.options.from);
pos+=this.options.from;
this.event("beforeUpdate");
this.update(pos);
this.event("afterUpdate");
}
},cancel:function(){
if(!this.options.sync){
MochiKit.Visual.Queues.get(typeof (this.options.queue)=="string"?"global":this.options.queue.scope).remove(this);
}
this.state="finished";
},finalize:function(){
this.render(1);
this.cancel();
this.event("beforeFinish");
this.finish();
this.event("afterFinish");
},setup:function(){
},finish:function(){
},update:function(_658){
},event:function(_659){
if(this.options[_659+"Internal"]){
this.options[_659+"Internal"](this);
}
if(this.options[_659]){
this.options[_659](this);
}
},repr:function(){
return "["+this.__class__.NAME+", options:"+MochiKit.Base.repr(this.options)+"]";
}};
MochiKit.Visual.Parallel=function(_65a,_65b){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_65a,_65b);
}
this.__init__(_65a,_65b);
};
MochiKit.Visual.Parallel.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Parallel.prototype,{__class__:MochiKit.Visual.Parallel,__init__:function(_65d,_65e){
this.effects=_65d||[];
this.start(_65e);
},update:function(_65f){
MochiKit.Base.map(function(_660){
_660.render(_65f);
},this.effects);
},finish:function(){
MochiKit.Base.map(function(_661){
_661.finalize();
},this.effects);
}});
MochiKit.Visual.Sequence=function(_662,_663){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_662,_663);
}
this.__init__(_662,_663);
};
MochiKit.Visual.Sequence.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Sequence.prototype,{__class__:MochiKit.Visual.Sequence,__init__:function(_665,_666){
var defs={transition:MochiKit.Visual.Transitions.linear,duration:0};
this.effects=_665||[];
MochiKit.Base.map(function(_668){
defs.duration+=_668.options.duration;
},this.effects);
MochiKit.Base.setdefault(_666,defs);
this.start(_666);
},update:function(_669){
var time=_669*this.options.duration;
for(var i=0;i<this.effects.length;i++){
var _66c=this.effects[i];
if(time<=_66c.options.duration){
_66c.render(time/_66c.options.duration);
break;
}else{
time-=_66c.options.duration;
}
}
},finish:function(){
MochiKit.Base.map(function(_66d){
_66d.finalize();
},this.effects);
}});
MochiKit.Visual.Opacity=function(_66e,_66f){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_66e,_66f);
}
this.__init__(_66e,_66f);
};
MochiKit.Visual.Opacity.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Opacity.prototype,{__class__:MochiKit.Visual.Opacity,__init__:function(_671,_672){
var b=MochiKit.Base;
var s=MochiKit.Style;
this.element=MochiKit.DOM.getElement(_671);
if(this.element.currentStyle&&(!this.element.currentStyle.hasLayout)){
s.setStyle(this.element,{zoom:1});
}
_672=b.update({from:s.getStyle(this.element,"opacity")||0,to:1},_672);
this.start(_672);
},update:function(_675){
MochiKit.Style.setStyle(this.element,{"opacity":_675});
}});
MochiKit.Visual.Move=function(_676,_677){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_676,_677);
}
this.__init__(_676,_677);
};
MochiKit.Visual.Move.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Move.prototype,{__class__:MochiKit.Visual.Move,__init__:function(_679,_67a){
this.element=MochiKit.DOM.getElement(_679);
_67a=MochiKit.Base.update({x:0,y:0,mode:"relative"},_67a);
this.start(_67a);
},setup:function(){
MochiKit.DOM.makePositioned(this.element);
var s=this.element.style;
var _67c=s.visibility;
var _67d=s.display;
if(_67d=="none"){
s.visibility="hidden";
s.display="";
}
this.originalLeft=parseFloat(MochiKit.Style.getStyle(this.element,"left")||"0");
this.originalTop=parseFloat(MochiKit.Style.getStyle(this.element,"top")||"0");
if(this.options.mode=="absolute"){
this.options.x-=this.originalLeft;
this.options.y-=this.originalTop;
}
if(_67d=="none"){
s.visibility=_67c;
s.display=_67d;
}
},update:function(_67e){
MochiKit.Style.setStyle(this.element,{left:Math.round(this.options.x*_67e+this.originalLeft)+"px",top:Math.round(this.options.y*_67e+this.originalTop)+"px"});
}});
MochiKit.Visual.Scale=function(_67f,_680,_681){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_67f,_680,_681);
}
this.__init__(_67f,_680,_681);
};
MochiKit.Visual.Scale.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Scale.prototype,{__class__:MochiKit.Visual.Scale,__init__:function(_683,_684,_685){
this.element=MochiKit.DOM.getElement(_683);
_685=MochiKit.Base.update({scaleX:true,scaleY:true,scaleContent:true,scaleFromCenter:false,scaleMode:"box",scaleFrom:100,scaleTo:_684},_685);
this.start(_685);
},setup:function(){
this.restoreAfterFinish=this.options.restoreAfterFinish||false;
this.elementPositioning=MochiKit.Style.getStyle(this.element,"position");
var ma=MochiKit.Base.map;
var b=MochiKit.Base.bind;
this.originalStyle={};
ma(b(function(k){
this.originalStyle[k]=this.element.style[k];
},this),["top","left","width","height","fontSize"]);
this.originalTop=this.element.offsetTop;
this.originalLeft=this.element.offsetLeft;
var _689=MochiKit.Style.getStyle(this.element,"font-size")||"100%";
ma(b(function(_68a){
if(_689.indexOf(_68a)>0){
this.fontSize=parseFloat(_689);
this.fontSizeType=_68a;
}
},this),["em","px","%"]);
this.factor=(this.options.scaleTo-this.options.scaleFrom)/100;
if(/^content/.test(this.options.scaleMode)){
this.dims=[this.element.scrollHeight,this.element.scrollWidth];
}else{
if(this.options.scaleMode=="box"){
this.dims=[this.element.offsetHeight,this.element.offsetWidth];
}else{
this.dims=[this.options.scaleMode.originalHeight,this.options.scaleMode.originalWidth];
}
}
},update:function(_68b){
var _68c=(this.options.scaleFrom/100)+(this.factor*_68b);
if(this.options.scaleContent&&this.fontSize){
MochiKit.Style.setStyle(this.element,{fontSize:this.fontSize*_68c+this.fontSizeType});
}
this.setDimensions(this.dims[0]*_68c,this.dims[1]*_68c);
},finish:function(){
if(this.restoreAfterFinish){
MochiKit.Style.setStyle(this.element,this.originalStyle);
}
},setDimensions:function(_68d,_68e){
var d={};
var r=Math.round;
if(/MSIE/.test(navigator.userAgent)){
r=Math.ceil;
}
if(this.options.scaleX){
d.width=r(_68e)+"px";
}
if(this.options.scaleY){
d.height=r(_68d)+"px";
}
if(this.options.scaleFromCenter){
var topd=(_68d-this.dims[0])/2;
var _692=(_68e-this.dims[1])/2;
if(this.elementPositioning=="absolute"){
if(this.options.scaleY){
d.top=this.originalTop-topd+"px";
}
if(this.options.scaleX){
d.left=this.originalLeft-_692+"px";
}
}else{
if(this.options.scaleY){
d.top=-topd+"px";
}
if(this.options.scaleX){
d.left=-_692+"px";
}
}
}
MochiKit.Style.setStyle(this.element,d);
}});
MochiKit.Visual.Highlight=function(_693,_694){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_693,_694);
}
this.__init__(_693,_694);
};
MochiKit.Visual.Highlight.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Highlight.prototype,{__class__:MochiKit.Visual.Highlight,__init__:function(_696,_697){
this.element=MochiKit.DOM.getElement(_696);
_697=MochiKit.Base.update({startcolor:"#ffff99"},_697);
this.start(_697);
},setup:function(){
var b=MochiKit.Base;
var s=MochiKit.Style;
if(s.getStyle(this.element,"display")=="none"){
this.cancel();
return;
}
this.oldStyle={backgroundImage:s.getStyle(this.element,"background-image")};
s.setStyle(this.element,{backgroundImage:"none"});
if(!this.options.endcolor){
this.options.endcolor=MochiKit.Color.Color.fromBackground(this.element).toHexString();
}
if(b.isUndefinedOrNull(this.options.restorecolor)){
this.options.restorecolor=s.getStyle(this.element,"background-color");
}
this._base=b.map(b.bind(function(i){
return parseInt(this.options.startcolor.slice(i*2+1,i*2+3),16);
},this),[0,1,2]);
this._delta=b.map(b.bind(function(i){
return parseInt(this.options.endcolor.slice(i*2+1,i*2+3),16)-this._base[i];
},this),[0,1,2]);
},update:function(_69c){
var m="#";
MochiKit.Base.map(MochiKit.Base.bind(function(i){
m+=MochiKit.Color.toColorPart(Math.round(this._base[i]+this._delta[i]*_69c));
},this),[0,1,2]);
MochiKit.Style.setStyle(this.element,{backgroundColor:m});
},finish:function(){
MochiKit.Style.setStyle(this.element,MochiKit.Base.update(this.oldStyle,{backgroundColor:this.options.restorecolor}));
}});
MochiKit.Visual.ScrollTo=function(_69f,_6a0){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_69f,_6a0);
}
this.__init__(_69f,_6a0);
};
MochiKit.Visual.ScrollTo.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.ScrollTo.prototype,{__class__:MochiKit.Visual.ScrollTo,__init__:function(_6a2,_6a3){
this.element=MochiKit.DOM.getElement(_6a2);
this.start(_6a3);
},setup:function(){
var p=MochiKit.Position;
p.prepare();
var _6a5=p.cumulativeOffset(this.element);
if(this.options.offset){
_6a5.y+=this.options.offset;
}
var max;
if(window.innerHeight){
max=window.innerHeight-window.height;
}else{
if(document.documentElement&&document.documentElement.clientHeight){
max=document.documentElement.clientHeight-document.body.scrollHeight;
}else{
if(document.body){
max=document.body.clientHeight-document.body.scrollHeight;
}
}
}
this.scrollStart=p.windowOffset.y;
this.delta=(_6a5.y>max?max:_6a5.y)-this.scrollStart;
},update:function(_6a7){
var p=MochiKit.Position;
p.prepare();
window.scrollTo(p.windowOffset.x,this.scrollStart+(_6a7*this.delta));
}});
MochiKit.Visual.CSS_LENGTH=/^(([\+\-]?[0-9\.]+)(em|ex|px|in|cm|mm|pt|pc|\%))|0$/;
MochiKit.Visual.Morph=function(_6a9,_6aa){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_6a9,_6aa);
}
this.__init__(_6a9,_6aa);
};
MochiKit.Visual.Morph.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Morph.prototype,{__class__:MochiKit.Visual.Morph,__init__:function(_6ac,_6ad){
this.element=MochiKit.DOM.getElement(_6ac);
this.start(_6ad);
},setup:function(){
var b=MochiKit.Base;
var _6af=this.options.style;
this.styleStart={};
this.styleEnd={};
this.units={};
var _6b0,unit;
for(var s in _6af){
_6b0=_6af[s];
s=b.camelize(s);
if(MochiKit.Visual.CSS_LENGTH.test(_6b0)){
var _6b3=_6b0.match(/^([\+\-]?[0-9\.]+)(.*)$/);
_6b0=parseFloat(_6b3[1]);
unit=(_6b3.length==3)?_6b3[2]:null;
this.styleEnd[s]=_6b0;
this.units[s]=unit;
_6b0=MochiKit.Style.getStyle(this.element,s);
_6b3=_6b0.match(/^([\+\-]?[0-9\.]+)(.*)$/);
_6b0=parseFloat(_6b3[1]);
this.styleStart[s]=_6b0;
}else{
if(/[Cc]olor$/.test(s)){
var c=MochiKit.Color.Color;
_6b0=c.fromString(_6b0);
if(_6b0){
this.units[s]="color";
this.styleEnd[s]=_6b0.toHexString();
_6b0=MochiKit.Style.getStyle(this.element,s);
this.styleStart[s]=c.fromString(_6b0).toHexString();
this.styleStart[s]=b.map(b.bind(function(i){
return parseInt(this.styleStart[s].slice(i*2+1,i*2+3),16);
},this),[0,1,2]);
this.styleEnd[s]=b.map(b.bind(function(i){
return parseInt(this.styleEnd[s].slice(i*2+1,i*2+3),16);
},this),[0,1,2]);
}
}else{
this.element.style[s]=_6b0;
}
}
}
},update:function(_6b7){
var _6b8;
for(var s in this.styleStart){
if(this.units[s]=="color"){
var m="#";
var _6bb=this.styleStart[s];
var end=this.styleEnd[s];
MochiKit.Base.map(MochiKit.Base.bind(function(i){
m+=MochiKit.Color.toColorPart(Math.round(_6bb[i]+(end[i]-_6bb[i])*_6b7));
},this),[0,1,2]);
this.element.style[s]=m;
}else{
_6b8=this.styleStart[s]+Math.round((this.styleEnd[s]-this.styleStart[s])*_6b7*1000)/1000+this.units[s];
this.element.style[s]=_6b8;
}
}
}});
MochiKit.Visual.fade=function(_6be,_6bf){
var s=MochiKit.Style;
var _6c1=s.getStyle(_6be,"opacity");
_6bf=MochiKit.Base.update({from:s.getStyle(_6be,"opacity")||1,to:0,afterFinishInternal:function(_6c2){
if(_6c2.options.to!==0){
return;
}
s.hideElement(_6c2.element);
s.setStyle(_6c2.element,{"opacity":_6c1});
}},_6bf);
return new MochiKit.Visual.Opacity(_6be,_6bf);
};
MochiKit.Visual.appear=function(_6c3,_6c4){
var s=MochiKit.Style;
var v=MochiKit.Visual;
_6c4=MochiKit.Base.update({from:(s.getStyle(_6c3,"display")=="none"?0:s.getStyle(_6c3,"opacity")||0),to:1,afterFinishInternal:function(_6c7){
v.forceRerendering(_6c7.element);
},beforeSetupInternal:function(_6c8){
s.setStyle(_6c8.element,{"opacity":_6c8.options.from});
s.showElement(_6c8.element);
}},_6c4);
return new v.Opacity(_6c3,_6c4);
};
MochiKit.Visual.puff=function(_6c9,_6ca){
var s=MochiKit.Style;
var v=MochiKit.Visual;
_6c9=MochiKit.DOM.getElement(_6c9);
var _6cd=MochiKit.Style.getElementDimensions(_6c9,true);
var _6ce={position:s.getStyle(_6c9,"position"),top:_6c9.style.top,left:_6c9.style.left,width:_6c9.style.width,height:_6c9.style.height,opacity:s.getStyle(_6c9,"opacity")};
_6ca=MochiKit.Base.update({beforeSetupInternal:function(_6cf){
MochiKit.Position.absolutize(_6cf.effects[0].element);
},afterFinishInternal:function(_6d0){
s.hideElement(_6d0.effects[0].element);
s.setStyle(_6d0.effects[0].element,_6ce);
},scaleContent:true,scaleFromCenter:true},_6ca);
return new v.Parallel([new v.Scale(_6c9,200,{sync:true,scaleFromCenter:_6ca.scaleFromCenter,scaleMode:{originalHeight:_6cd.h,originalWidth:_6cd.w},scaleContent:_6ca.scaleContent,restoreAfterFinish:true}),new v.Opacity(_6c9,{sync:true,to:0})],_6ca);
};
MochiKit.Visual.blindUp=function(_6d1,_6d2){
var d=MochiKit.DOM;
_6d1=d.getElement(_6d1);
var _6d4=MochiKit.Style.getElementDimensions(_6d1,true);
var _6d5=d.makeClipping(_6d1);
_6d2=MochiKit.Base.update({scaleContent:false,scaleX:false,scaleMode:{originalHeight:_6d4.h,originalWidth:_6d4.w},restoreAfterFinish:true,afterFinishInternal:function(_6d6){
MochiKit.Style.hideElement(_6d6.element);
d.undoClipping(_6d6.element,_6d5);
}},_6d2);
return new MochiKit.Visual.Scale(_6d1,0,_6d2);
};
MochiKit.Visual.blindDown=function(_6d7,_6d8){
var d=MochiKit.DOM;
var s=MochiKit.Style;
_6d7=d.getElement(_6d7);
var _6db=s.getElementDimensions(_6d7,true);
var _6dc;
_6d8=MochiKit.Base.update({scaleContent:false,scaleX:false,scaleFrom:0,scaleMode:{originalHeight:_6db.h,originalWidth:_6db.w},restoreAfterFinish:true,afterSetupInternal:function(_6dd){
_6dc=d.makeClipping(_6dd.element);
s.setStyle(_6dd.element,{height:"0px"});
s.showElement(_6dd.element);
},afterFinishInternal:function(_6de){
d.undoClipping(_6de.element,_6dc);
}},_6d8);
return new MochiKit.Visual.Scale(_6d7,100,_6d8);
};
MochiKit.Visual.switchOff=function(_6df,_6e0){
var d=MochiKit.DOM;
var s=MochiKit.Style;
_6df=d.getElement(_6df);
var _6e3=s.getElementDimensions(_6df,true);
var _6e4=s.getStyle(_6df,"opacity");
var _6e5;
_6e0=MochiKit.Base.update({duration:0.7,restoreAfterFinish:true,beforeSetupInternal:function(_6e6){
d.makePositioned(_6df);
_6e5=d.makeClipping(_6df);
},afterFinishInternal:function(_6e7){
s.hideElement(_6df);
d.undoClipping(_6df,_6e5);
d.undoPositioned(_6df);
s.setStyle(_6df,{"opacity":_6e4});
}},_6e0);
var v=MochiKit.Visual;
return new v.Sequence([new v.appear(_6df,{sync:true,duration:0.57*_6e0.duration,from:0,transition:v.Transitions.flicker}),new v.Scale(_6df,1,{sync:true,duration:0.43*_6e0.duration,scaleFromCenter:true,scaleX:false,scaleMode:{originalHeight:_6e3.h,originalWidth:_6e3.w},scaleContent:false,restoreAfterFinish:true})],_6e0);
};
MochiKit.Visual.dropOut=function(_6e9,_6ea){
var d=MochiKit.DOM;
var s=MochiKit.Style;
_6e9=d.getElement(_6e9);
var _6ed={top:s.getStyle(_6e9,"top"),left:s.getStyle(_6e9,"left"),opacity:s.getStyle(_6e9,"opacity")};
_6ea=MochiKit.Base.update({duration:0.5,distance:100,beforeSetupInternal:function(_6ee){
d.makePositioned(_6ee.effects[0].element);
},afterFinishInternal:function(_6ef){
s.hideElement(_6ef.effects[0].element);
d.undoPositioned(_6ef.effects[0].element);
s.setStyle(_6ef.effects[0].element,_6ed);
}},_6ea);
var v=MochiKit.Visual;
return new v.Parallel([new v.Move(_6e9,{x:0,y:_6ea.distance,sync:true}),new v.Opacity(_6e9,{sync:true,to:0})],_6ea);
};
MochiKit.Visual.shake=function(_6f1,_6f2){
var d=MochiKit.DOM;
var v=MochiKit.Visual;
var s=MochiKit.Style;
_6f1=d.getElement(_6f1);
var _6f6={top:s.getStyle(_6f1,"top"),left:s.getStyle(_6f1,"left")};
_6f2=MochiKit.Base.update({duration:0.5,afterFinishInternal:function(_6f7){
d.undoPositioned(_6f1);
s.setStyle(_6f1,_6f6);
}},_6f2);
return new v.Sequence([new v.Move(_6f1,{sync:true,duration:0.1*_6f2.duration,x:20,y:0}),new v.Move(_6f1,{sync:true,duration:0.2*_6f2.duration,x:-40,y:0}),new v.Move(_6f1,{sync:true,duration:0.2*_6f2.duration,x:40,y:0}),new v.Move(_6f1,{sync:true,duration:0.2*_6f2.duration,x:-40,y:0}),new v.Move(_6f1,{sync:true,duration:0.2*_6f2.duration,x:40,y:0}),new v.Move(_6f1,{sync:true,duration:0.1*_6f2.duration,x:-20,y:0})],_6f2);
};
MochiKit.Visual.slideDown=function(_6f8,_6f9){
var d=MochiKit.DOM;
var b=MochiKit.Base;
var s=MochiKit.Style;
_6f8=d.getElement(_6f8);
if(!_6f8.firstChild){
throw new Error("MochiKit.Visual.slideDown must be used on a element with a child");
}
d.removeEmptyTextNodes(_6f8);
var _6fd=s.getStyle(_6f8.firstChild,"bottom")||0;
var _6fe=s.getElementDimensions(_6f8,true);
var _6ff;
_6f9=b.update({scaleContent:false,scaleX:false,scaleFrom:0,scaleMode:{originalHeight:_6fe.h,originalWidth:_6fe.w},restoreAfterFinish:true,afterSetupInternal:function(_700){
d.makePositioned(_700.element);
d.makePositioned(_700.element.firstChild);
if(/Opera/.test(navigator.userAgent)){
s.setStyle(_700.element,{top:""});
}
_6ff=d.makeClipping(_700.element);
s.setStyle(_700.element,{height:"0px"});
s.showElement(_700.element);
},afterUpdateInternal:function(_701){
var _702=s.getElementDimensions(_701.element,true);
s.setStyle(_701.element.firstChild,{bottom:(_701.dims[0]-_702.h)+"px"});
},afterFinishInternal:function(_703){
d.undoClipping(_703.element,_6ff);
if(/MSIE/.test(navigator.userAgent)){
d.undoPositioned(_703.element);
d.undoPositioned(_703.element.firstChild);
}else{
d.undoPositioned(_703.element.firstChild);
d.undoPositioned(_703.element);
}
s.setStyle(_703.element.firstChild,{bottom:_6fd});
}},_6f9);
return new MochiKit.Visual.Scale(_6f8,100,_6f9);
};
MochiKit.Visual.slideUp=function(_704,_705){
var d=MochiKit.DOM;
var b=MochiKit.Base;
var s=MochiKit.Style;
_704=d.getElement(_704);
if(!_704.firstChild){
throw new Error("MochiKit.Visual.slideUp must be used on a element with a child");
}
d.removeEmptyTextNodes(_704);
var _709=s.getStyle(_704.firstChild,"bottom");
var _70a=s.getElementDimensions(_704,true);
var _70b;
_705=b.update({scaleContent:false,scaleX:false,scaleMode:{originalHeight:_70a.h,originalWidth:_70a.w},scaleFrom:100,restoreAfterFinish:true,beforeStartInternal:function(_70c){
d.makePositioned(_70c.element);
d.makePositioned(_70c.element.firstChild);
if(/Opera/.test(navigator.userAgent)){
s.setStyle(_70c.element,{top:""});
}
_70b=d.makeClipping(_70c.element);
s.showElement(_70c.element);
},afterUpdateInternal:function(_70d){
var _70e=s.getElementDimensions(_70d.element,true);
s.setStyle(_70d.element.firstChild,{bottom:(_70d.dims[0]-_70e.h)+"px"});
},afterFinishInternal:function(_70f){
s.hideElement(_70f.element);
d.undoClipping(_70f.element,_70b);
d.undoPositioned(_70f.element.firstChild);
d.undoPositioned(_70f.element);
s.setStyle(_70f.element.firstChild,{bottom:_709});
}},_705);
return new MochiKit.Visual.Scale(_704,0,_705);
};
MochiKit.Visual.squish=function(_710,_711){
var d=MochiKit.DOM;
var b=MochiKit.Base;
var _714=MochiKit.Style.getElementDimensions(_710,true);
var _715;
_711=b.update({restoreAfterFinish:true,scaleMode:{originalHeight:_714.w,originalWidth:_714.h},beforeSetupInternal:function(_716){
_715=d.makeClipping(_716.element);
},afterFinishInternal:function(_717){
MochiKit.Style.hideElement(_717.element);
d.undoClipping(_717.element,_715);
}},_711);
return new MochiKit.Visual.Scale(_710,/Opera/.test(navigator.userAgent)?1:0,_711);
};
MochiKit.Visual.grow=function(_718,_719){
var d=MochiKit.DOM;
var v=MochiKit.Visual;
var s=MochiKit.Style;
_718=d.getElement(_718);
_719=MochiKit.Base.update({direction:"center",moveTransition:v.Transitions.sinoidal,scaleTransition:v.Transitions.sinoidal,opacityTransition:v.Transitions.full,scaleContent:true,scaleFromCenter:false},_719);
var _71d={top:_718.style.top,left:_718.style.left,height:_718.style.height,width:_718.style.width,opacity:s.getStyle(_718,"opacity")};
var dims=s.getElementDimensions(_718,true);
var _71f,_720;
var _721,_722;
switch(_719.direction){
case "top-left":
_71f=_720=_721=_722=0;
break;
case "top-right":
_71f=dims.w;
_720=_722=0;
_721=-dims.w;
break;
case "bottom-left":
_71f=_721=0;
_720=dims.h;
_722=-dims.h;
break;
case "bottom-right":
_71f=dims.w;
_720=dims.h;
_721=-dims.w;
_722=-dims.h;
break;
case "center":
_71f=dims.w/2;
_720=dims.h/2;
_721=-dims.w/2;
_722=-dims.h/2;
break;
}
var _723=MochiKit.Base.update({beforeSetupInternal:function(_724){
s.setStyle(_724.effects[0].element,{height:"0px"});
s.showElement(_724.effects[0].element);
},afterFinishInternal:function(_725){
d.undoClipping(_725.effects[0].element);
d.undoPositioned(_725.effects[0].element);
s.setStyle(_725.effects[0].element,_71d);
}},_719);
return new v.Move(_718,{x:_71f,y:_720,duration:0.01,beforeSetupInternal:function(_726){
s.hideElement(_726.element);
d.makeClipping(_726.element);
d.makePositioned(_726.element);
},afterFinishInternal:function(_727){
new v.Parallel([new v.Opacity(_727.element,{sync:true,to:1,from:0,transition:_719.opacityTransition}),new v.Move(_727.element,{x:_721,y:_722,sync:true,transition:_719.moveTransition}),new v.Scale(_727.element,100,{scaleMode:{originalHeight:dims.h,originalWidth:dims.w},sync:true,scaleFrom:/Opera/.test(navigator.userAgent)?1:0,transition:_719.scaleTransition,scaleContent:_719.scaleContent,scaleFromCenter:_719.scaleFromCenter,restoreAfterFinish:true})],_723);
}});
};
MochiKit.Visual.shrink=function(_728,_729){
var d=MochiKit.DOM;
var v=MochiKit.Visual;
var s=MochiKit.Style;
_728=d.getElement(_728);
_729=MochiKit.Base.update({direction:"center",moveTransition:v.Transitions.sinoidal,scaleTransition:v.Transitions.sinoidal,opacityTransition:v.Transitions.none,scaleContent:true,scaleFromCenter:false},_729);
var _72d={top:_728.style.top,left:_728.style.left,height:_728.style.height,width:_728.style.width,opacity:s.getStyle(_728,"opacity")};
var dims=s.getElementDimensions(_728,true);
var _72f,_730;
switch(_729.direction){
case "top-left":
_72f=_730=0;
break;
case "top-right":
_72f=dims.w;
_730=0;
break;
case "bottom-left":
_72f=0;
_730=dims.h;
break;
case "bottom-right":
_72f=dims.w;
_730=dims.h;
break;
case "center":
_72f=dims.w/2;
_730=dims.h/2;
break;
}
var _731;
var _732=MochiKit.Base.update({beforeStartInternal:function(_733){
_731=d.makePositioned(_733.effects[0].element);
d.makeClipping(_733.effects[0].element);
},afterFinishInternal:function(_734){
s.hideElement(_734.effects[0].element);
d.undoClipping(_734.effects[0].element,_731);
d.undoPositioned(_734.effects[0].element);
s.setStyle(_734.effects[0].element,_72d);
}},_729);
return new v.Parallel([new v.Opacity(_728,{sync:true,to:0,from:1,transition:_729.opacityTransition}),new v.Scale(_728,/Opera/.test(navigator.userAgent)?1:0,{scaleMode:{originalHeight:dims.h,originalWidth:dims.w},sync:true,transition:_729.scaleTransition,scaleContent:_729.scaleContent,scaleFromCenter:_729.scaleFromCenter,restoreAfterFinish:true}),new v.Move(_728,{x:_72f,y:_730,sync:true,transition:_729.moveTransition})],_732);
};
MochiKit.Visual.pulsate=function(_735,_736){
var d=MochiKit.DOM;
var v=MochiKit.Visual;
var b=MochiKit.Base;
var _73a=MochiKit.Style.getStyle(_735,"opacity");
_736=b.update({duration:3,from:0,afterFinishInternal:function(_73b){
MochiKit.Style.setStyle(_73b.element,{"opacity":_73a});
}},_736);
var _73c=_736.transition||v.Transitions.sinoidal;
_736.transition=function(pos){
return _73c(1-v.Transitions.pulse(pos,_736.pulses));
};
return new v.Opacity(_735,_736);
};
MochiKit.Visual.fold=function(_73e,_73f){
var d=MochiKit.DOM;
var v=MochiKit.Visual;
var s=MochiKit.Style;
_73e=d.getElement(_73e);
var _743=s.getElementDimensions(_73e,true);
var _744={top:_73e.style.top,left:_73e.style.left,width:_73e.style.width,height:_73e.style.height};
var _745=d.makeClipping(_73e);
_73f=MochiKit.Base.update({scaleContent:false,scaleX:false,scaleMode:{originalHeight:_743.h,originalWidth:_743.w},afterFinishInternal:function(_746){
new v.Scale(_73e,1,{scaleContent:false,scaleY:false,scaleMode:{originalHeight:_743.h,originalWidth:_743.w},afterFinishInternal:function(_747){
s.hideElement(_747.element);
d.undoClipping(_747.element,_745);
s.setStyle(_747.element,_744);
}});
}},_73f);
return new v.Scale(_73e,5,_73f);
};
MochiKit.Visual.Color=MochiKit.Color.Color;
MochiKit.Visual.getElementsComputedStyle=MochiKit.DOM.computedStyle;
MochiKit.Visual.__new__=function(){
var m=MochiKit.Base;
m.nameFunctions(this);
this.EXPORT_TAGS={":common":this.EXPORT,":all":m.concat(this.EXPORT,this.EXPORT_OK)};
};
MochiKit.Visual.EXPORT=["roundElement","roundClass","tagifyText","multiple","toggle","Parallel","Sequence","Opacity","Move","Scale","Highlight","ScrollTo","Morph","fade","appear","puff","blindUp","blindDown","switchOff","dropOut","shake","slideDown","slideUp","squish","grow","shrink","pulsate","fold"];
MochiKit.Visual.EXPORT_OK=["Base","PAIRS"];
MochiKit.Visual.__new__();
MochiKit.Base._exportSymbols(this,MochiKit.Visual);
if(typeof (MochiKit)=="undefined"){
MochiKit={};
}
if(typeof (MochiKit.MochiKit)=="undefined"){
MochiKit.MochiKit={};
}
MochiKit.MochiKit.NAME="MochiKit.MochiKit";
MochiKit.MochiKit.VERSION="1.5";
MochiKit.MochiKit.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.MochiKit.toString=function(){
return this.__repr__();
};
MochiKit.MochiKit.SUBMODULES=["Base","Iter","Logging","DateTime","Format","Async","DOM","Selector","Style","LoggingPane","Color","Signal","Position","Visual"];
if(typeof (JSAN)!="undefined"||typeof (dojo)!="undefined"){
if(typeof (dojo)!="undefined"){
dojo.provide("MochiKit.MochiKit");
(function(lst){
for(var i=0;i<lst.length;i++){
dojo.require("MochiKit."+lst[i]);
}
})(MochiKit.MochiKit.SUBMODULES);
}
if(typeof (JSAN)!="undefined"){
(function(lst){
for(var i=0;i<lst.length;i++){
JSAN.use("MochiKit."+lst[i],[]);
}
})(MochiKit.MochiKit.SUBMODULES);
}
(function(){
var _74d=MochiKit.Base.extend;
var self=MochiKit.MochiKit;
var _74f=self.SUBMODULES;
var _750=[];
var _751=[];
var _752={};
var i,k,m,all;
for(i=0;i<_74f.length;i++){
m=MochiKit[_74f[i]];
_74d(_750,m.EXPORT);
_74d(_751,m.EXPORT_OK);
for(k in m.EXPORT_TAGS){
_752[k]=_74d(_752[k],m.EXPORT_TAGS[k]);
}
all=m.EXPORT_TAGS[":all"];
if(!all){
all=_74d(null,m.EXPORT,m.EXPORT_OK);
}
var j;
for(j=0;j<all.length;j++){
k=all[j];
self[k]=m[k];
}
}
self.EXPORT=_750;
self.EXPORT_OK=_751;
self.EXPORT_TAGS=_752;
}());
}else{
if(typeof (MochiKit.__compat__)=="undefined"){
MochiKit.__compat__=true;
}
(function(){
if(typeof (document)=="undefined"){
return;
}
var _758=document.getElementsByTagName("script");
var _759="http://www.w3.org/1999/xhtml";
var _75a="http://www.w3.org/2000/svg";
var _75b="http://www.w3.org/1999/xlink";
var _75c="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
var base=null;
var _75e=null;
var _75f={};
var i;
var src;
for(i=0;i<_758.length;i++){
src=null;
switch(_758[i].namespaceURI){
case _75a:
src=_758[i].getAttributeNS(_75b,"href");
break;
default:
src=_758[i].getAttribute("src");
break;
}
if(!src){
continue;
}
_75f[src]=true;
if(src.match(/MochiKit.js(\?.*)?$/)){
base=src.substring(0,src.lastIndexOf("MochiKit.js"));
_75e=_758[i];
}
}
if(base===null){
return;
}
var _762=MochiKit.MochiKit.SUBMODULES;
for(var i=0;i<_762.length;i++){
if(MochiKit[_762[i]]){
continue;
}
var uri=base+_762[i]+".js";
if(uri in _75f){
continue;
}
if(_75e.namespaceURI==_75a||_75e.namespaceURI==_75c){
var s=document.createElementNS(_75e.namespaceURI,"script");
s.setAttribute("id","MochiKit_"+base+_762[i]);
if(_75e.namespaceURI==_75a){
s.setAttributeNS(_75b,"href",uri);
}else{
s.setAttribute("src",uri);
}
s.setAttribute("type","application/x-javascript");
_75e.parentNode.appendChild(s);
}else{
document.write("<"+_75e.nodeName+" src=\""+uri+"\" type=\"text/javascript\"></script>");
}
}
})();
}
if(typeof (MochiKit)=="undefined"){
throw new ReferenceError("MochiKit must be loaded before loading this script");
}
if(typeof (MochiKit.Base)=="undefined"){
throw new ReferenceError("MochiKit.Base must be loaded before loading this script");
}
MochiKit.Base.isFalse=function(_765){
return _765==false||_765==null||_765==0||_765.length===0||_765=="false"||_765=="null";
};
MochiKit.Base.defaultValue=function(){
for(var i=0;i<arguments.length;i++){
if(typeof (arguments[i])!="undefined"){
return arguments[i];
}
}
return undefined;
};
MochiKit.Base.dict=function(_767,_768){
var o={};
if(!MochiKit.Base.isArrayLike(_767)){
throw new TypeError("First argument must be array-like");
}
if(MochiKit.Base.isArrayLike(_768)&&_767.length!==_768.length){
throw new TypeError("Both arrays must be of same length");
}
for(var i=0;i<_767.length;i++){
var k=_767[i];
if(k===null||k===undefined){
throw new TypeError("Key at index "+i+" is null or undefined");
}else{
if(MochiKit.Base.isArrayLike(k)){
o[k[0]]=k[1];
}else{
if(MochiKit.Base.isArrayLike(_768)){
o[k]=_768[i];
}else{
o[k]=_768;
}
}
}
}
return o;
};
MochiKit.Base.select=function(src,keys){
var res={};
if(!MochiKit.Base.isArrayLike(keys)){
keys=MochiKit.Base.keys(keys);
}
for(var i=0;i<keys.length;i++){
var k=keys[i];
if(k in src){
res[k]=src[k];
}
}
return res;
};
MochiKit.Base.mask=function(src,keys){
var res={};
if(!MochiKit.Base.isArrayLike(keys)){
keys=MochiKit.Base.keys(keys);
}
for(var i=0;i<keys.length;i++){
var k=keys[i];
if(k in src){
res[k]=src[k];
delete src[k];
}
}
return res;
};
MochiKit.Base.functionName=function(func){
if(func==null){
return null;
}else{
if(func.name!=null&&func.name!=""){
return func.name;
}else{
return func.NAME;
}
}
};
MochiKit.Base.registerFunctionNames=function(obj,name,_779){
if(typeof (obj)==="function"&&(obj.name==null||obj.name=="")&&typeof (obj.NAME)==="undefined"){
obj.NAME=name;
}
_779=_779||[];
if(obj!=null&&name!=null&&(typeof (obj)==="object"||typeof (obj)==="function")&&obj!==Object.prototype&&obj!==Function.prototype&&typeof (obj.nodeType)!=="number"&&MochiKit.Base.findIdentical(_779,obj)<0){
_779.push(obj);
for(var prop in obj){
var str=name+"."+prop;
MochiKit.Base.registerFunctionNames(obj[prop],str,_779);
}
var str=name+".prototype";
MochiKit.Base.registerFunctionNames(obj.prototype,str,_779);
_779.pop();
}
};
MochiKit.Base.stackTrace=function(_77c){
var func=arguments.callee.caller;
var _77e=[];
var res=[];
_77c=_77c||20;
while(func!=null){
if(MochiKit.Base.findIdentical(_77e,func)>=0){
res.push("...recursion...");
break;
}
if(func.$stackTrace!=null){
res=res.concat(func.$stackTrace);
break;
}
var name=MochiKit.Base.functionName(func);
if(name===null){
}else{
res.push(name||"<anonymous>");
}
_77e.push(func);
if(_77e.length>=_77c){
res.push("...");
break;
}
func=func.caller;
}
return res;
};
MochiKit.Base.injectStackTrace=function(_781,func){
func=func||arguments.callee.caller;
if(func!=null){
if(_781){
func.$stackTrace=_781;
}else{
delete func.$stackTrace;
}
}
};
if(typeof (MochiKit)=="undefined"){
throw new ReferenceError("MochiKit must be loaded before loading this script");
}
if(typeof (MochiKit.DOM)=="undefined"){
throw new ReferenceError("MochiKit.DOM must be loaded before loading this script");
}
MochiKit.DOM.NS={XHTML:"http://www.w3.org/1999/xhtml",XLINK:"http://www.w3.org/1999/xlink",SVG:"http://www.w3.org/2000/svg",XUL:"http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul"};
MochiKit.DOM.NS.HTML=[undefined,null,"",MochiKit.DOM.NS.XHTML];
MochiKit.DOM.isDOM=function(obj){
return typeof (obj)!=="undefined"&&typeof (obj.nodeType)==="number"&&obj.nodeType>0;
};
MochiKit.DOM.isHTML=function(obj){
var ns=MochiKit.DOM.NS.HTML;
return MochiKit.DOM.isDOM(obj)&&MochiKit.Base.findIdentical(ns,obj.namespaceURI)>=0;
};
MochiKit.DOM.reprDOM=function(node){
if(node==null){
return "null";
}else{
if(typeof (node)==="string"){
return node;
}else{
if(node.nodeType===1){
var res="<"+node.tagName.toLowerCase();
var _788=MochiKit.Base.map(MochiKit.DOM.reprDOM,node.attributes);
res+=_788.join("");
if(node.hasChildNodes()){
res+=" ["+node.childNodes.length+" child nodes]";
}
res+="/>";
return res;
}else{
if(node.nodeType===2){
if(node.specified){
return " "+node.name+"=\""+MochiKit.DOM.escapeHTML(node.value)+"\"";
}else{
return "";
}
}else{
if(node.nodeType===3){
return MochiKit.DOM.escapeHTML(node.nodeValue);
}else{
return node.toString();
}
}
}
}
}
};
MochiKit.DOM.attributeArrayNewImpl=function(node){
var res=[];
node=MochiKit.DOM.getElement(node);
for(var i=0;node!=null&&i<node.attributes.length;i++){
var a=node.attributes[i];
if(a.specified){
res.push([a.name,a.value]);
}
}
return res;
};
MochiKit.DOM.childNode=function(_78d,_78e){
_78d=MochiKit.DOM.getElement(_78d);
if(typeof (_78e)=="number"){
if(_78e<0||_78e>=_78d.childNodes.length){
return null;
}else{
return _78d.childNodes[_78e];
}
}else{
var node=MochiKit.DOM.getElement(_78e);
while(node!=null&&node!==_78d&&node.parentNode!==_78d){
node=node.parentNode;
}
return (node==null||node===_78d)?null:node;
}
};
MochiKit.DOM.createDOMExt=function(ns,tag,_792){
var doc=MochiKit.DOM.currentDocument();
var node=(ns)?doc.createElementNS(ns,tag):doc.createElement(tag);
MochiKit.DOM.updateNodeAttributes(node,_792);
var _795=MochiKit.Base.extend([],arguments,3);
MochiKit.DOM.appendChildNodes(node,_795);
return node;
};
MochiKit.DOM.createTextNode=function(text){
return MochiKit.DOM.currentDocument().createTextNode(text);
};
MochiKit.DOM.createDOMFuncExt=function(ns,tag,args,_79a){
args=args||[];
_79a=_79a||{};
var _79b=MochiKit.Base.extend([],arguments,4);
return function(){
var _79c=MochiKit.Base.update({},_79a);
for(var pos=0;pos<args.length;pos++){
if(arguments[pos]==null){
throw new Error("Argument '"+args[pos]+"' cannot be null");
}
_79c[args[pos]]=arguments[pos];
}
MochiKit.Base.update(_79c,arguments[args.length]);
var _79e=MochiKit.Base.extend([],_79b);
MochiKit.Base.extend(_79e,arguments,args.length+1);
return MochiKit.DOM.createDOMExt(ns,tag,_79c,_79e);
};
};
MochiKit.DOM.blurAll=function(node){
if(arguments.length<=1){
MochiKit.DOM.blurAll(node,"A","BUTTON","INPUT","TEXTAREA","SELECT");
}else{
node.blur();
for(var i=1;i<arguments.length;i++){
var _7a1=node.getElementsByTagName(arguments[i]);
for(var j=0;j<_7a1.length;j++){
_7a1[j].blur();
}
}
}
};
if(typeof (MochiKit)=="undefined"){
throw new ReferenceError("MochiKit must be loaded before loading this script");
}
if(typeof (MochiKit.DateTime)=="undefined"){
throw new ReferenceError("MochiKit.DateTime must be loaded before loading this script");
}
MochiKit.DateTime.MILLIS_PER_SECOND=1000;
MochiKit.DateTime.MILLIS_PER_MINUTE=60*1000;
MochiKit.DateTime.MILLIS_PER_HOUR=60*60*1000;
MochiKit.DateTime.MILLIS_PER_DAY=24*60*60*1000;
MochiKit.DateTime.MILLIS_PER_WEEK=7*24*60*60*1000;
MochiKit.DateTime._twoDigitNumber=MochiKit.Format.numberFormatter("00");
MochiKit.DateTime.TimePeriod=function(_7a3){
return {days:Math.floor(_7a3/MochiKit.DateTime.MILLIS_PER_DAY),hours:Math.floor(_7a3/MochiKit.DateTime.MILLIS_PER_HOUR)%24,minutes:Math.floor(_7a3/MochiKit.DateTime.MILLIS_PER_MINUTE)%60,seconds:Math.floor(_7a3/MochiKit.DateTime.MILLIS_PER_SECOND)%60,millis:_7a3%1000};
};
MochiKit.DateTime.toApproxPeriod=function(_7a4){
var p=MochiKit.DateTime.TimePeriod(_7a4);
if(p.days>=10){
return p.days+" days";
}else{
if(p.days>=1){
return p.days+" days "+MochiKit.DateTime._twoDigitNumber(p.hours)+" hours";
}else{
if(p.hours>=1){
return p.hours+":"+MochiKit.DateTime._twoDigitNumber(p.minutes)+" hours";
}else{
if(p.minutes>=1){
return p.minutes+":"+MochiKit.DateTime._twoDigitNumber(p.seconds)+" minutes";
}else{
if(p.seconds>=1){
return p.seconds+" seconds";
}else{
return p.millis+" milliseconds";
}
}
}
}
}
};
if(typeof (MochiKit)=="undefined"){
throw new ReferenceError("MochiKit must be loaded before loading this script");
}
if(typeof (MochiKit.Format)=="undefined"){
throw new ReferenceError("MochiKit.Format must be loaded before loading this script");
}
MochiKit.Format.truncate=function(obj,_7a7,tail){
var base=MochiKit.Base;
if(obj!=null&&typeof (obj)!="string"&&!base.isArrayLike(obj)){
obj=obj.toString();
}
if(obj==null||obj.length<=_7a7||_7a7<0){
return obj;
}
if(typeof (tail)=="string"||base.isArrayLike(tail)){
obj=obj.slice(0,_7a7-tail.length);
if(typeof (obj)=="string"){
return obj+tail;
}else{
return base.extend(obj,tail);
}
}else{
return obj.slice(0,_7a7);
}
};
MochiKit.Format.formatter=function(_7aa,_7ab){
if(typeof (_7ab)=="undefined"){
_7ab=MochiKit.Format.formatLocale();
}else{
if(typeof (_7ab)=="string"){
_7ab=MochiKit.Format.formatLocale(_7ab);
}
}
var _7ac=MochiKit.Format._parsePattern(_7aa);
return function(){
var _7ad=MochiKit.Base.extend([],arguments);
return MochiKit.Format._formatParts(_7ac,_7ad,_7ab);
};
};
MochiKit.Format.format=function(_7ae){
var _7af=MochiKit.Format._parsePattern(_7ae);
var _7b0=MochiKit.Base.extend([],arguments,1);
var _7b1=MochiKit.Format.formatLocale();
return MochiKit.Format._formatParts(_7af,_7b0,_7b1);
};
MochiKit.Format._parsePattern=function(_7b2){
var self=MochiKit.Format;
var _7b4=[];
var _7b5=0;
var pos=0;
for(pos=0;pos<_7b2.length;pos++){
if(_7b2[pos]=="{"){
if(pos+1>=_7b2.length){
var msg="unescaped { char, should be escaped as {{";
throw new self.FormatPatternError(_7b2,pos,msg);
}else{
if(_7b2[pos+1]=="{"){
_7b4.push(_7b2.substring(_7b5,pos+1));
_7b5=pos+2;
pos++;
}else{
if(_7b5<pos){
_7b4.push(_7b2.substring(_7b5,pos));
}
_7b5=_7b2.indexOf("}",pos)+1;
if(_7b5<=0){
var msg="unmatched { char, not followed by a } char";
throw new self.FormatPatternError(_7b2,pos,msg);
}
_7b4.push(self._parseFormat(_7b2,pos+1,_7b5-1));
pos=_7b5-1;
}
}
}else{
if(_7b2[pos]=="}"){
if(pos+1>=_7b2.length||_7b2[pos+1]!="}"){
var msg="unescaped } char, should be escaped as }}";
throw new self.FormatPatternError(_7b2,pos,msg);
}
_7b4.push(_7b2.substring(_7b5,pos+1));
_7b5=pos+2;
pos++;
}
}
}
if(_7b5<pos){
_7b4.push(_7b2.substring(_7b5,pos));
}
return _7b4;
};
MochiKit.Format._parseFormat=function(_7b8,_7b9,_7ba){
var self=MochiKit.Format;
var text=_7b8.substring(_7b9,_7ba);
var info;
var pos=text.indexOf(":");
if(pos==0){
info=self._parseFormatFlags(_7b8,_7b9+1,_7ba);
info.path=[0];
}else{
if(pos>0){
info=self._parseFormatFlags(_7b8,_7b9+pos+1,_7ba);
info.path=text.substring(0,pos).split(".");
}else{
info=self._parseFormatFlags(_7b8,_7ba,_7ba);
info.path=text.split(".");
}
}
var _7bf=/^\d+$/;
for(var i=0;i<info.path.length;i++){
var e=info.path[i];
if(typeof (e)=="string"){
e=self.strip(e);
if(e==""&&info.path.length==1){
e=0;
}else{
if(e==""){
var msg="format value path contains blanks";
throw new self.FormatPatternError(_7b8,_7b9,msg);
}else{
if(_7bf.test(e)){
e=parseInt(e);
}
}
}
}
info.path[i]=e;
}
if(info.path.length<0||typeof (info.path[0])!="number"){
info.path.unshift(0);
}
return info;
};
MochiKit.Format._parseFormatFlags=function(_7c3,_7c4,_7c5){
var self=MochiKit.Format;
var info={format:"s",width:0,precision:-1,align:">",sign:"-",padding:" ",grouping:false};
var _7c8=self.rstrip(_7c3.substring(_7c4,_7c5));
while(_7c8.length>0){
switch(_7c8[0]){
case ">":
case "<":
info.align=_7c8[0];
_7c8=_7c8.substring(1);
break;
case "+":
case "-":
case " ":
info.sign=_7c8[0];
_7c8=_7c8.substring(1);
break;
case ",":
info.grouping=true;
_7c8=_7c8.substring(1);
break;
case ".":
var _7c9="0123456789";
var pos=1;
while(pos<_7c8.length&&_7c9.indexOf(_7c8[pos])>=0){
pos++;
}
info.precision=parseInt(_7c8.substring(1,pos));
_7c8=_7c8.substring(pos);
break;
case "0":
info.padding=_7c8[0];
_7c8=_7c8.substring(1);
break;
case "1":
case "2":
case "3":
case "4":
case "5":
case "6":
case "7":
case "8":
case "9":
var _7c9="0123456789";
var pos=1;
while(pos<_7c8.length&&_7c9.indexOf(_7c8[pos])>=0){
pos++;
}
info.width=parseInt(_7c8.substring(0,pos));
_7c8=_7c8.substring(pos);
break;
case "s":
case "r":
case "b":
case "c":
case "d":
case "o":
case "x":
case "X":
case "f":
case "%":
info.format=_7c8[0];
_7c8=_7c8.substring(1);
break;
default:
var msg="unsupported format flag: "+_7c8[0];
throw new self.FormatPatternError(_7c3,_7c4,msg);
}
}
return info;
};
MochiKit.Format._formatParts=function(_7cc,_7cd,_7ce){
var self=MochiKit.Format;
var _7d0="";
for(var i=0;i<_7cc.length;i++){
if(typeof (_7cc[i])=="string"){
_7d0+=_7cc[i];
}else{
var info=_7cc[i];
var v=_7cd;
for(var j=0;j<info.path.length;j++){
if(v!=null){
v=v[info.path[j]];
}
}
var str="";
switch(info.format){
case "d":
case "f":
if(typeof (v)!="number"||isNaN(v)){
str="";
}else{
if(v==Number.POSITIVE_INFINITY){
str="\u221e";
}else{
if(v==Number.NEGATIVE_INFINITY){
str="-\u221e";
}else{
var sign=(info.sign=="-")?"":info.sign;
sign=(v<0)?"-":sign;
v=Math.abs(v);
if(info.format=="d"){
str=self.truncToFixed(v,0);
}else{
if(info.precision>=0){
str=self.truncToFixed(v,info.precision);
}else{
str=(v==null)?"0":v.toString();
}
}
if(info.padding=="0"){
str=self._addZeroPadding(str,info.width-sign.length);
}
if(info.grouping){
str=self._addNumberGrouping(str,_7ce);
}
str=sign+str;
}
}
}
break;
case "%":
if(typeof (v)!="number"||isNaN(v)){
str="";
}else{
if(v==Number.POSITIVE_INFINITY){
str="\u221e%";
}else{
if(v==Number.NEGATIVE_INFINITY){
str="-\u221e%";
}else{
var sign=(info.sign=="-")?"":info.sign;
sign=(v<0)?"-":sign;
v=(v==null||!isFinite(v))?0:Math.abs(v);
if(info.precision>=0){
str=self.truncToFixed(v,info.precision+2);
}else{
str=(v==null)?"0":v.toString();
}
var _7d7=str.indexOf(".");
if(_7d7<0){
str=str+"00";
}else{
if(_7d7+3>=str.length){
var _7d8=str.substring(_7d7+1);
while(_7d8.length<2){
_7d8=_7d8+"0";
}
str=str.substring(0,_7d7)+_7d8;
}else{
var _7d8=str.substring(_7d7+1);
str=str.substring(0,_7d7)+_7d8.substring(0,2)+"."+_7d8.substring(2);
}
}
while(str.length>1&&str[0]=="0"&&str[1]!="."){
str=str.substring(1);
}
if(info.padding=="0"){
str=self._addZeroPadding(str,info.width-sign.length-1);
}
if(info.grouping){
str=self._addNumberGrouping(str,_7ce);
}
str=sign+str+_7ce.percent;
}
}
}
break;
case "r":
case "s":
default:
if(info.format=="r"){
str=MochiKit.Base.repr(v);
}else{
str=(v==null)?"null":v.toString();
}
str=self.truncate(str,info.precision);
break;
}
while(info.width>str.length){
if(info.align=="<"){
str+=" ";
}else{
str=" "+str;
}
}
_7d0+=str;
}
}
return _7d0;
};
MochiKit.Format._addZeroPadding=function(str,_7da){
while(str.length<_7da){
str="0"+str;
}
return str;
};
MochiKit.Format._addNumberGrouping=function(str,_7dc){
var _7dd=str.indexOf(".");
var _7de=(_7dd<0)?str:str.substring(0,_7dd);
var _7df=(_7dd<0)?"":str.substring(_7dd+1);
str=(_7df.length>0)?_7dc.decimal:"";
while(_7df.length>3){
str=str+_7df.substring(0,3)+_7dc.separator;
_7df=_7df.substring(3);
if(_7de.length>1&&_7de[0]=="0"){
_7de=_7de.substring(1);
}
}
if(_7df.length>0){
str+=_7df;
}
while(_7de.length>3){
var pos=_7de.length-3;
str=_7dc.separator+_7de.substring(pos)+str;
if(_7de[0]=="0"){
_7de=_7de.substring(1,pos);
}else{
_7de=_7de.substring(0,pos);
}
}
return _7de+str;
};
MochiKit.Format.FormatPatternError=function(_7e1,pos,_7e3){
this.pattern=_7e1;
this.pos=pos;
this.message=_7e3;
};
MochiKit.Format.FormatPatternError.prototype=new MochiKit.Base.NamedError("MochiKit.Format.FormatPatternError");
MochiKit.Format.EXPORT.push("format");
MochiKit.Format.EXPORT.push("formatter");
MochiKit.Format.EXPORT.push("FormatPatternError");
MochiKit.Base._exportSymbols(this,MochiKit.Format);
if(typeof (MochiKit)=="undefined"){
throw new ReferenceError("MochiKit must be loaded before loading this script");
}
if(typeof (MochiKit.SVG)=="undefined"){
MochiKit.SVG={};
}
MochiKit.SVG.SVG=MochiKit.DOM.createDOMFuncExt(MochiKit.DOM.NS.SVG,"svg",[],{version:"1.1",baseProfile:"full"});
MochiKit.SVG.DEFS=MochiKit.DOM.createDOMFuncExt(MochiKit.DOM.NS.SVG,"defs");
MochiKit.SVG.G=MochiKit.DOM.createDOMFuncExt(MochiKit.DOM.NS.SVG,"g");
MochiKit.SVG.LINE=MochiKit.DOM.createDOMFuncExt(MochiKit.DOM.NS.SVG,"line",["x1","y1","x2","y2"]);
MochiKit.SVG.RECT=MochiKit.DOM.createDOMFuncExt(MochiKit.DOM.NS.SVG,"rect",["x","y","width","height"]);
MochiKit.SVG.CIRCLE=MochiKit.DOM.createDOMFuncExt(MochiKit.DOM.NS.SVG,"circle",["cx","cy","r"]);
MochiKit.SVG.PATH=MochiKit.DOM.createDOMFuncExt(MochiKit.DOM.NS.SVG,"path",["d"]);
MochiKit.SVG.TEXT=MochiKit.DOM.createDOMFuncExt(MochiKit.DOM.NS.SVG,"text",["x","y"]);
MochiKit.SVG.RADIALGRADIENT=MochiKit.DOM.createDOMFuncExt(MochiKit.DOM.NS.SVG,"radialGradient",["id"],{gradientUnits:"objectBoundingBox",cx:"0.5",cy:"0.5",r:"0.5"});
MochiKit.SVG.STOP=MochiKit.DOM.createDOMFuncExt(MochiKit.DOM.NS.SVG,"stop",["offset","stop-color"]);
MochiKit.SVG.moveToTop=function(node){
node=MochiKit.DOM.getElement(node);
if(node!=null){
var _7e5=node.parentNode;
if(_7e5&&_7e5.lastChild!==node){
_7e5.appendChild(node);
}
}
};
MochiKit.SVG.moveToBottom=function(node){
node=MochiKit.DOM.getElement(node);
if(node!=null){
var _7e7=node.parentNode;
if(_7e7&&_7e7.firstChild!==node){
_7e7.insertBefore(node,_7e7.firstChild);
}
}
};
MochiKit.SVG.rotate=function(node,_7e9,x,y){
var str=MochiKit.DOM.getNodeAttribute(node,"transform");
x=x||0;
y=y||0;
if(str==null||str==""){
str="";
}else{
str+=" ";
}
str+="rotate("+_7e9+","+x+","+y+")";
MochiKit.DOM.setNodeAttribute(node,"transform",str);
};
if(typeof (MochiKit)=="undefined"){
throw new ReferenceError("MochiKit must be loaded before loading this script");
}
if(typeof (MochiKit.Style)=="undefined"){
throw new ReferenceError("MochiKit.Style must be loaded before loading this script");
}
MochiKit.Style.getBorderBox=function(node){
var _7ee=MochiKit.Style.getStyle;
var px=MochiKit.Style._toPixels;
return {t:px(_7ee(node,"border-width-top")),b:px(_7ee(node,"border-width-bottom")),l:px(_7ee(node,"border-width-left")),r:px(_7ee(node,"border-width-right"))};
};
MochiKit.Style.getPaddingBox=function(node){
var _7f1=MochiKit.Style.getStyle;
var px=MochiKit.Style._toPixels;
return {t:px(_7f1(node,"padding-top")),b:px(_7f1(node,"padding-bottom")),l:px(_7f1(node,"padding-left")),r:px(_7f1(node,"padding-right"))};
};
MochiKit.Style._toPixels=function(_7f3){
if(_7f3!=null){
try{
_7f3=MochiKit.Format.rstrip(_7f3,"px");
_7f3=Math.round(parseFloat(_7f3));
}
catch(ignore){
_7f3=null;
}
}
return (_7f3==null||isNaN(_7f3))?null:_7f3;
};
MochiKit.Style.getScrollOffset=function(node){
node=MochiKit.DOM.getElement(node);
var x=node.scrollLeft||0;
var y=node.scrollTop||0;
return new MochiKit.Style.Coordinates(x,y);
};
MochiKit.Style.setScrollOffset=function(node,_7f8){
node=MochiKit.DOM.getElement(node);
node.scrollLeft=_7f8.x;
node.scrollTop=_7f8.y;
};
MochiKit.Style.resetScrollOffset=function(node,_7fa){
node=MochiKit.DOM.getElement(node);
node.scrollLeft=0;
node.scrollTop=0;
if(_7fa){
node=node.firstChild;
while(node!=null){
if(node.nodeType===1){
MochiKit.Style.resetScrollOffset(node,true);
}
node=node.nextSibling;
}
}
};
MochiKit.Style.adjustScrollOffset=function(node,box){
node=MochiKit.DOM.getElement(node);
var dim=MochiKit.Style.getElementDimensions(node);
var xMin=MochiKit.Base.defaultValue(box.l,box.x,NaN);
var xMax=MochiKit.Base.defaultValue(box.r,xMin+box.w,NaN);
var yMin=MochiKit.Base.defaultValue(box.t,box.y,NaN);
var yMax=MochiKit.Base.defaultValue(box.b,yMin+box.h,NaN);
if(!isNaN(xMax)&&node.scrollLeft+dim.w<xMax){
node.scrollLeft=xMax-dim.h;
}
if(!isNaN(xMin)&&node.scrollLeft>xMin){
node.scrollLeft=xMin;
}
if(!isNaN(yMax)&&node.scrollTop+dim.h<yMax){
node.scrollTop=yMax-dim.h;
}
if(!isNaN(yMin)&&node.scrollTop>yMin){
node.scrollTop=yMin;
}
};
MochiKit.Style.registerSizeConstraints=function(node,_803,_804,_805){
node=MochiKit.DOM.getElement(node);
var sc=node.sizeConstraints={w:null,h:null,a:null};
if(typeof (_803)=="number"){
sc.w=function(w,h){
return _803;
};
}else{
if(typeof (_803)=="function"){
sc.w=_803;
}else{
if(typeof (_803)=="string"){
var code="return "+_803.replace(/%/g,"*0.01*w")+";";
sc.w=new Function("w","h",code);
}
}
}
if(typeof (_804)=="number"){
sc.h=function(w,h){
return _804;
};
}else{
if(typeof (_804)=="function"){
sc.h=_804;
}else{
if(typeof (_804)=="string"){
var code="return "+_804.replace(/%/g,"*0.01*h")+";";
sc.h=new Function("w","h",code);
}
}
}
if(typeof (_805)=="number"){
sc.a=function(w,h){
return _805;
};
}else{
if(typeof (_805)=="function"){
sc.a=_805;
}else{
if(typeof (_805)=="string"){
var code="return "+_805.replace(/%/g,"*0.01*w/h")+";";
sc.a=new Function("w","h",code);
}
}
}
};
MochiKit.Style.resizeElements=function(){
var args=MochiKit.Base.flattenArray(arguments);
for(var i=0;i<args.length;i++){
var node=MochiKit.DOM.getElement(args[i]);
if(node!=null&&node.nodeType===1&&node.parentNode!=null&&node.sizeConstraints!=null){
var ref={w:node.parentNode.w,h:node.parentNode.h};
if(ref.w==null&&ref.h==null){
ref=MochiKit.Style.getElementDimensions(node.parentNode,true);
}
var dim=MochiKit.Style._evalConstraints(node.sizeConstraints,ref);
MochiKit.Style.setElementDimensions(node,dim);
node.w=dim.w;
node.h=dim.h;
}
if(node!=null&&typeof (node.resizeContent)=="function"){
node.resizeContent();
}else{
node=node.firstChild;
while(node!=null){
if(node.nodeType===1){
MochiKit.Style.resizeElements(node);
}
node=node.nextSibling;
}
}
}
};
MochiKit.Style._evalConstraints=function(sc,ref){
var log=MochiKit.Logging.logError;
if(typeof (sc.w)=="function"){
try{
var w=Math.max(0,Math.min(ref.w,sc.w(ref.w,ref.h)));
}
catch(e){
log("Error evaluating width size constraint; "+"w: "+ref.w+", h: "+ref.h,e);
}
}
if(typeof (sc.h)=="function"){
try{
var h=Math.max(0,Math.min(ref.h,sc.h(ref.w,ref.h)));
}
catch(e){
log("Error evaluating height size constraint; "+"w: "+ref.w+", h: "+ref.h,e);
}
}
if(typeof (sc.a)=="function"){
try{
var a=sc.a(ref.w,ref.h);
w=w||ref.w;
h=h||ref.h;
if(h*a>ref.w){
h=ref.w/a;
}
if(w/a>ref.h){
w=ref.h*a;
}
if(w>h*a){
w=h*a;
}else{
h=w/a;
}
}
catch(e){
log("Error evaluating aspect size constraint; "+"w: "+ref.w+", h: "+ref.h,e);
}
}
if(w!=null){
w=Math.floor(w);
}
if(h!=null){
h=Math.floor(h);
}
return new MochiKit.Style.Dimensions(w,h);
};
if(typeof (MochiKit)=="undefined"){
throw new ReferenceError("MochiKit must be loaded before loading this script");
}
MochiKit.Widget=function(){
throw new ReferenceError("cannot call Widget constructor");
};
MochiKit.Widget.isWidget=function(obj,_81a){
if(_81a!=null){
return MochiKit.DOM.isHTML(obj)&&MochiKit.DOM.hasElementClass(obj,"widget")&&MochiKit.DOM.hasElementClass(obj,"widget"+_81a);
}else{
return MochiKit.DOM.isHTML(obj)&&MochiKit.DOM.hasElementClass(obj,"widget");
}
};
MochiKit.Widget.isFormField=function(obj){
if(!MochiKit.DOM.isHTML(obj)||typeof (obj.tagName)!=="string"){
return false;
}
var _81c=obj.tagName.toUpperCase();
return _81c=="INPUT"||_81c=="TEXTAREA"||_81c=="SELECT"||typeof (obj.value)!=="undefined";
};
MochiKit.Widget.createWidget=function(name,_81e){
var cls=MochiKit.Widget.Classes[name];
if(cls==null){
throw new ReferenceError("failed to find widget '"+name+"' in MochiKit.Widget.Classes");
}
var w=new cls(_81e);
for(var i=2;i<arguments.length;i++){
w.addAll(arguments[i]);
}
return w;
};
MochiKit.Widget.createWidgetTree=function(node,ids){
if(node.documentElement){
return MochiKit.Widget.createWidgetTree(node.documentElement.childNodes,ids);
}else{
if(typeof (node.item)!="undefined"&&typeof (node.length)=="number"){
var res=[];
for(var i=0;i<node.length;i++){
var list=MochiKit.Widget.createWidgetTree(node[i],ids);
if(!MochiKit.Base.isUndefinedOrNull(list)){
res=res.concat(list);
}
}
return res;
}else{
if(node.nodeType===1){
try{
return [MochiKit.Widget._createWidgetTreeElem(node,ids)];
}
catch(e){
MochiKit.Logging.logError("Failed to create DOM node or widget",e);
}
}else{
if(node.nodeType===3){
var str=node.nodeValue;
if(str!=null&&MochiKit.Format.strip(str)!=""){
return MochiKit.DOM.createTextNode(str.replace(/\s+/g," "));
}
}
}
}
}
return null;
};
MochiKit.Widget._createWidgetTreeElem=function(node,ids){
var name=node.nodeName;
var _82b=MochiKit.Base.dict(MochiKit.DOM.attributeArrayNewImpl(node));
var _82c=MochiKit.Base.mask(_82b,["id","w","h","a","class","style"]);
var _82d=MochiKit.Widget.createWidgetTree(node.childNodes,ids);
if(MochiKit.Widget.Classes[name]){
var _82e=MochiKit.Widget.createWidget(name,_82b,_82d);
}else{
var _82e=MochiKit.DOM.createDOM(name,_82b,_82d);
}
if(_82c.id){
if(ids){
ids[_82c.id]=_82e;
}else{
_82e.id=_82c.id;
}
}
if(_82c.w||_82c.h||_82c.a){
MochiKit.Style.registerSizeConstraints(_82e,_82c.w,_82c.h,_82c.a);
}
if(_82c["class"]){
var _82f=_82c["class"].split(" ");
if(typeof (_82e.addClass)=="function"){
_82e.addClass.apply(_82e,_82f);
}else{
for(var i=0;i<arguments.length;i++){
MochiKit.DOM.addElementClass(_82e,_82f[i]);
}
}
}
if(_82c.style){
var _831={};
var _832=_82c.style.split(";");
for(var i=0;i<_832.length;i++){
var a=_832[i].split(":");
_831[MochiKit.Format.strip(a[0])]=MochiKit.Format.strip(a[1]);
}
MochiKit.Style.setStyle(_82e,_831);
}
return _82e;
};
MochiKit.Widget.destroyWidget=function(node){
if(typeof (node.destroy)=="function"){
node.destroy();
}
if(node.parentNode!=null){
MochiKit.DOM.removeElement(node);
}
MochiKit.Signal.disconnectAll(node);
while(node.firstChild!=null){
MochiKit.Widget.destroyWidget(node.firstChild);
}
};
MochiKit.Widget.emitSignal=function(node,sig){
try{
MochiKit.Signal.signal.apply(MochiKit.Signal,arguments);
return true;
}
catch(e){
var msg="Exception in signal '"+sig+"' handler";
MochiKit.Logging.logError(msg,e);
return false;
}
};
MochiKit.Widget.prototype.destroy=function(){
};
MochiKit.Widget.prototype.setAttrs=function(_838){
MochiKit.DOM.updateNodeAttributes(this,_838);
};
MochiKit.Widget.prototype.setStyle=function(_839){
MochiKit.Style.setStyle(this,_839);
};
MochiKit.Widget.prototype.hasClass=function(){
for(var i=0;i<arguments.length;i++){
if(!MochiKit.DOM.hasElementClass(this,arguments[i])){
return false;
}
}
return true;
};
MochiKit.Widget.prototype.addClass=function(){
for(var i=0;i<arguments.length;i++){
MochiKit.DOM.addElementClass(this,arguments[i]);
}
};
MochiKit.Widget.prototype.removeClass=function(){
for(var i=0;i<arguments.length;i++){
MochiKit.DOM.removeElementClass(this,arguments[i]);
}
};
MochiKit.Widget.prototype.toggleClass=function(){
if(this.hasClass.apply(this,arguments)){
this.removeClass.apply(this,arguments);
return false;
}else{
this.addClass.apply(this,arguments);
return true;
}
};
MochiKit.Widget.prototype.isHidden=function(){
return this.hasClass("widgetHidden");
};
MochiKit.Widget.prototype.show=function(){
this.removeClass("widgetHidden");
};
MochiKit.Widget.prototype.hide=function(){
this.addClass("widgetHidden");
};
MochiKit.Widget.prototype.animate=function(opts){
if(this._anim!=null){
this._anim.cancel();
}
var func=MochiKit.Visual[opts.effect];
if(typeof (func)=="function"){
this._anim=func.call(null,this,opts);
}
};
MochiKit.Widget.prototype.blurAll=function(){
MochiKit.DOM.blurAll(this);
};
MochiKit.Widget.prototype.getChildNodes=function(){
return MochiKit.Base.extend([],this.childNodes);
};
MochiKit.Widget.prototype.addChildNode=function(_83f){
this.appendChild(_83f);
};
MochiKit.Widget.prototype.removeChildNode=function(_840){
this.removeChild(_840);
};
MochiKit.Widget.prototype.addAll=function(){
var args=MochiKit.Base.flattenArray(arguments);
for(var i=0;i<args.length;i++){
if(args[i]==null){
}else{
if(MochiKit.DOM.isDOM(args[i])){
this.addChildNode(args[i]);
MochiKit.Style.resizeElements(args[i]);
}else{
this.addChildNode(MochiKit.DOM.createTextNode(args[i]));
}
}
}
};
MochiKit.Widget.prototype.removeAll=function(){
var _843=this.getChildNodes();
for(var i=_843.length-1;i>=0;i--){
this.removeChildNode(_843[i]);
MochiKit.Widget.destroyWidget(_843[i]);
}
};
MochiKit.Widget.Button=function(_845){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_845,MochiKit.Base.extend(null,arguments,1));
}
var o=MochiKit.DOM.BUTTON();
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetButton");
o.setAttrs(_845);
o.addAll(MochiKit.Base.extend(null,arguments,1));
return o;
};
MochiKit.Widget.Button.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Button.prototype.setAttrs=function(_848){
_848=MochiKit.Base.update({},_848);
var _849=MochiKit.Base.mask(_848,["highlight"]);
if(typeof (_849.highlight)!="undefined"){
if(MochiKit.Base.isFalse(_849.highlight)){
this.removeClass("widgetButtonHighlight");
}else{
this.addClass("widgetButtonHighlight");
}
}
MochiKit.DOM.updateNodeAttributes(this,_848);
};
MochiKit.Widget.Dialog=function(_84a){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_84a,MochiKit.Base.extend(null,arguments,1));
}
var _84c=MochiKit.DOM.DIV({"class":"widgetDialogTitle"},"Dialog");
var _84d=new MochiKit.Widget.Icon({ref:"CLOSE","class":"widgetDialogClose"});
var _84e=new MochiKit.Widget.Icon({ref:"RESIZE","class":"widgetDialogResize"});
var _84f=MochiKit.DOM.DIV({"class":"widgetDialogContent"});
MochiKit.Style.registerSizeConstraints(_84f,"100% - 22","100% - 44");
var o=MochiKit.DOM.DIV({},_84c,_84d,_84e,_84f);
MochiKit.Base.updatetree(o,this);
o.setAttrs(MochiKit.Base.update({modal:false,center:true},_84a));
o.addClass("widget","widgetDialog","widgetHidden");
o.addAll(MochiKit.Base.extend(null,arguments,1));
MochiKit.Signal.connect(_84c,"onmousedown",o,"_handleMoveStart");
MochiKit.Signal.connect(_84d,"onclick",o,"hide");
MochiKit.Signal.connect(_84e,"onmousedown",o,"_handleResizeStart");
return o;
};
MochiKit.Widget.Dialog.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Dialog.prototype.setAttrs=function(_851){
_851=MochiKit.Base.update({},_851);
var _852=MochiKit.Base.mask(_851,["title","modal","center"]);
if(typeof (_852.title)!="undefined"){
MochiKit.DOM.replaceChildNodes(this.firstChild,_852.title);
}
if(typeof (_852.modal)!="undefined"){
this.modal=!MochiKit.Base.isFalse(_852.modal);
}
if(typeof (_852.center)!="undefined"){
this.center=!MochiKit.Base.isFalse(_852.center);
}
MochiKit.DOM.updateNodeAttributes(this,_851);
};
MochiKit.Widget.Dialog.prototype.show=function(){
if(this.parentNode==null){
throw new Error("Cannot show Dialog widget without setting a parent DOM node");
}
if(this.modal){
var _853={loading:false,message:"",style:{"z-index":"99"}};
this._modalNode=new MochiKit.Widget.Overlay(_853);
this.parentNode.appendChild(this._modalNode);
}
this.removeClass("widgetHidden");
var dim=MochiKit.Style.getElementDimensions(this);
this.resizeTo(dim.w,dim.h);
if(this.center){
this.moveToCenter();
}
MochiKit.Style.resetScrollOffset(this,true);
MochiKit.Widget.emitSignal(this,"onshow");
};
MochiKit.Widget.Dialog.prototype.hide=function(){
if(this._modalNode!=null){
MochiKit.Widget.destroyWidget(this._modalNode);
this._modalNode=null;
}
this.blurAll();
this.addClass("widgetHidden");
MochiKit.Widget.emitSignal(this,"onhide");
};
MochiKit.Widget.Dialog.prototype.getChildNodes=function(){
return MochiKit.Base.extend([],this.lastChild.childNodes);
};
MochiKit.Widget.Dialog.prototype.addChildNode=function(_855){
this.lastChild.appendChild(_855);
};
MochiKit.Widget.Dialog.prototype.removeChildNode=function(_856){
this.lastChild.removeChild(_856);
};
MochiKit.Widget.Dialog.prototype.moveTo=function(x,y){
var _859=MochiKit.Style.getElementDimensions(this.parentNode);
var dim=MochiKit.Style.getElementDimensions(this);
var pos={x:Math.max(0,Math.min(x,_859.w-dim.w-2)),y:Math.max(0,Math.min(y,_859.h-dim.h-2))};
MochiKit.Style.setElementPosition(this,pos);
MochiKit.Widget.emitSignal(this,"onmove",pos);
};
MochiKit.Widget.Dialog.prototype.moveToCenter=function(){
var _85c=MochiKit.Style.getElementDimensions(this.parentNode);
var dim=MochiKit.Style.getElementDimensions(this);
var pos={x:Math.round(Math.max(0,(_85c.w-dim.w)/2)),y:Math.round(Math.max(0,(_85c.h-dim.h)/2))};
MochiKit.Style.setElementPosition(this,pos);
MochiKit.Widget.emitSignal(this,"onmove",pos);
};
MochiKit.Widget.Dialog.prototype.resizeTo=function(_85f,_860){
var _861=MochiKit.Style.getElementDimensions(this.parentNode);
var pos=MochiKit.Style.getElementPosition(this.parentNode);
pos=MochiKit.Style.getElementPosition(this,pos);
var dim={w:Math.max(150,Math.min(_85f,_861.w-pos.x-2)),h:Math.max(100,Math.min(_860,_861.h-pos.y-2))};
MochiKit.Style.setElementDimensions(this,dim);
MochiKit.Style.registerSizeConstraints(this,null,null);
MochiKit.Base.update(this,dim);
MochiKit.Style.resizeElements(this.lastChild);
MochiKit.Widget.emitSignal(this,"onresize",dim);
};
MochiKit.Widget.Dialog.prototype._handleMoveStart=function(evt){
var pos=MochiKit.Style.getElementPosition(this.parentNode);
this._offsetPos=MochiKit.Style.getElementPosition(this,pos);
this._startPos=evt.mouse().page;
evt.stop();
MochiKit.Signal.connect(document,"onmousemove",this,"_handleMove");
MochiKit.Signal.connect(document,"onmouseup",this,"_stopDrag");
};
MochiKit.Widget.Dialog.prototype._handleMove=function(evt){
var pos=evt.mouse().page;
this.moveTo(this._offsetPos.x+pos.x-this._startPos.x,this._offsetPos.y+pos.y-this._startPos.y);
};
MochiKit.Widget.Dialog.prototype._handleResizeStart=function(evt){
this._offsetDim=MochiKit.Style.getElementDimensions(this);
this._startPos=evt.mouse().page;
evt.stop();
MochiKit.Signal.connect(document,"onmousemove",this,"_handleResize");
MochiKit.Signal.connect(document,"onmousedown",function(evt){
evt.stop();
});
MochiKit.Signal.connect(document,"onmouseup",this,"_stopDrag");
};
MochiKit.Widget.Dialog.prototype._handleResize=function(evt){
var pos=evt.mouse().page;
this.resizeTo(this._offsetDim.w+pos.x-this._startPos.x,this._offsetDim.h+pos.y-this._startPos.y);
};
MochiKit.Widget.Dialog.prototype._stopDrag=function(evt){
MochiKit.Signal.disconnectAll(document,"onmousemove");
MochiKit.Signal.disconnectAll(document,"onmousedown");
MochiKit.Signal.disconnectAll(document,"onmouseup");
};
MochiKit.Widget.Field=function(_86d){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_86d);
}
var o=MochiKit.DOM.SPAN();
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetField");
o.setAttrs(MochiKit.Base.update({name:"",value:"",maxLength:-1},_86d));
o.defaultValue=o.value;
return o;
};
MochiKit.Widget.Field.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Field.prototype.setAttrs=function(_870){
_870=MochiKit.Base.update({},_870);
var _871=MochiKit.Base.mask(_870,["name","value","maxLength"]);
if(typeof (_871.name)!="undefined"){
this.name=_871.name;
}
if(typeof (_871.format)!="undefined"){
this.format=_871.format;
}
if(typeof (_871.maxLength)!="undefined"){
this.maxLength=parseInt(_871.maxLength);
}
if(typeof (_871.value)!="undefined"){
var str=this.value=_871.value;
if(this.format){
str=MochiKit.Format.format(this.format,str);
}else{
if(str==null){
str="null";
}else{
if(typeof (str)!="string"){
str=str.toString();
}
}
}
var _873=str;
if(this.maxLength>0){
str=MochiKit.Format.truncate(str,this.maxLength,"...");
}
MochiKit.DOM.replaceChildNodes(this,str);
this.title=(str==_873)?null:_873;
}
MochiKit.DOM.updateNodeAttributes(this,_870);
};
MochiKit.Widget.Form=function(_874){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_874);
}
var o=MochiKit.DOM.FORM(_874);
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetForm");
MochiKit.Signal.connect(o,"onsubmit",o,"_handleSubmit");
o.addAll(MochiKit.Base.extend(null,arguments,1));
return o;
};
MochiKit.Widget.Form.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Form.prototype.fields=function(){
var _877=[];
MochiKit.Base.nodeWalk(this,function(elem){
if(elem.nodeType!==1){
return null;
}
if(MochiKit.Widget.isFormField(elem)){
_877.push(elem);
return null;
}else{
return elem.childNodes;
}
});
return _877;
};
MochiKit.Widget.Form.prototype.fieldMap=function(){
var _879=this.fields();
var map={};
for(var i=0;i<_879.length;i++){
var name=_879[i].name;
if(typeof (name)=="string"){
if(map[name] instanceof Array){
map[name].push(_879[i]);
}else{
if(map[name]!=null){
map[name]=[map[name],_879[i]];
}else{
map[name]=_879[i];
}
}
}
}
return map;
};
MochiKit.Widget.Form.prototype.reset=function(){
this.validateReset();
var _87d=this.fields();
for(var i=0;i<_87d.length;i++){
var elem=_87d[i];
if(typeof (elem.reset)=="function"){
elem.reset();
}else{
if(elem.type=="radio"&&typeof (elem.defaultChecked)=="boolean"){
elem.checked=elem.defaultChecked;
}else{
if(elem.type=="checkbox"&&typeof (elem.defaultChecked)=="boolean"){
elem.checked=elem.defaultChecked;
}else{
if(typeof (elem.defaultValue)=="string"){
if(typeof (elem.setAttrs)=="function"){
elem.setAttrs({value:elem.defaultValue});
}else{
elem.value=elem.defaultValue;
}
}else{
if(elem.options!=null){
for(var j=0;j<elem.options.length;j++){
var opt=elem.options[j];
opt.selected=opt.defaultSelected;
}
}
}
}
}
}
}
};
MochiKit.Widget.Form.prototype.valueMap=function(){
var _882=this.fields();
var map={};
for(var i=0;i<_882.length;i++){
var name=_882[i].name;
var _886="";
if(typeof (_882[i].getValue)=="function"){
_886=_882[i].getValue();
}else{
_886=_882[i].value;
}
if(_882[i].type==="radio"||_882[i].type==="checkbox"){
if(_882[i].checked){
_886=_886||true;
}else{
_886=null;
}
}
if(typeof (name)=="string"&&_886!=null){
if(map[name] instanceof Array){
map[name].push(_886);
}else{
if(map[name]!=null){
map[name]=[map[name],_886];
}else{
map[name]=_886;
}
}
}
}
return map;
};
MochiKit.Widget.Form.prototype.update=function(_887){
var _888=this.fields();
for(var i=0;i<_888.length;i++){
var elem=_888[i];
if(elem.name in _887){
var _88b=_887[elem.name];
if(elem.type==="radio"||elem.type==="checkbox"){
if(_88b==null){
elem.checked=false;
}else{
if(MochiKit.Base.isArrayLike(_88b)){
elem.checked=(MochiKit.Base.findValue(_88b,elem.value)>=0);
}else{
elem.checked=(elem.value===_88b||_88b===true);
}
}
}else{
if(MochiKit.Base.isArrayLike(_88b)){
_88b=_88b.join(", ");
}
if(typeof (elem.setAttrs)=="function"){
elem.setAttrs({value:_88b});
}else{
elem.value=_88b;
}
}
}
}
};
MochiKit.Widget.Form.prototype.validators=function(){
var res=[];
var _88d=this.getElementsByTagName("SPAN");
for(var i=0;i<_88d.length;i++){
if(MochiKit.Widget.isWidget(_88d[i],"FormValidator")){
res.push(_88d[i]);
}
}
return res;
};
MochiKit.Widget.Form.prototype.validate=function(){
var _88f=this.validators();
var _890=this.fields();
var _891=true;
var _892=[];
for(var i=0;i<_88f.length;i++){
_88f[i].reset();
}
for(var i=0;i<_88f.length;i++){
for(var j=0;j<_890.length;j++){
if(_88f[i].name==_890[j].name){
var res=_88f[i].verify(_890[j]);
if(res instanceof MochiKit.Async.Deferred){
_892.push(res);
}else{
if(res===false){
_891=false;
}
}
}
}
}
if(!_891){
return false;
}else{
if(_892.length>0){
return MochiKit.Async.gatherResults(_892);
}else{
return true;
}
}
};
MochiKit.Widget.Form.prototype.validateReset=function(){
var _896=this.validators();
for(var i=0;i<_896.length;i++){
_896[i].reset();
}
};
MochiKit.Widget.Form.prototype._handleSubmit=function(evt){
evt.stop();
};
MochiKit.Widget.FormValidator=function(_899){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_899);
}
var o=MochiKit.DOM.SPAN();
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetFormValidator");
o.setAttrs(MochiKit.Base.update({name:"",mandatory:true,display:"error",message:null,validator:null},_899));
o.fields=[];
o.hide();
return o;
};
MochiKit.Widget.FormValidator.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.FormValidator.prototype.setAttrs=function(_89c){
_89c=MochiKit.Base.update({},_89c);
var _89d=MochiKit.Base.mask(_89c,["name","mandatory","regex","display","message","validator"]);
if(typeof (_89d.name)!="undefined"){
this.name=_89d.name;
}
if(typeof (_89d.mandatory)!="undefined"){
this.mandatory=!MochiKit.Base.isFalse(_89d.mandatory);
}
if(typeof (_89d.regex)!="undefined"){
if(_89d.regex instanceof RegExp){
this.regex=_89d.regex;
}else{
if(_89d.regex.indexOf("^")!=0){
_89d.regex="^"+_89d.regex;
}
if(_89d.regex.indexOf("$")!=_89d.regex.length-1){
_89d.regex+="$";
}
this.regex=new RegExp(_89d.regex);
}
}
if(typeof (_89d.display)!="undefined"){
this.display=_89d.display;
}
if(typeof (_89d.message)!="undefined"){
this.message=_89d.message;
}
if(typeof (_89d.validator)!="undefined"){
this.validator=_89d.validator;
}
MochiKit.DOM.updateNodeAttributes(this,_89c);
};
MochiKit.Widget.FormValidator.prototype.reset=function(){
for(var i=0;i<this.fields.length;i++){
MochiKit.DOM.removeElementClass(this.fields[i],"widgetInvalid");
}
this.fields=[];
if(this.display==="error"){
this.hide();
this.removeAll();
}
};
MochiKit.Widget.FormValidator.prototype.verify=function(_89f){
if(!_89f.disabled){
var _8a0="";
if(typeof (_89f.getValue)=="function"){
_8a0=_89f.getValue();
}else{
_8a0=_89f.value;
}
var _8a1=MochiKit.Format.strip(_8a0);
if(MochiKit.Format.strip(_8a0)==""){
if(this.mandatory){
var msg="This field is mandatory and cannot be left blank";
this.addError(_89f,msg);
return false;
}
}else{
if(this.regex!=null&&!this.regex.test(_8a1)){
var msg="The field format is incorrect";
this.addError(_89f,msg);
return false;
}else{
if(typeof (this.validator)=="function"){
var res=this.validator(_8a0);
if(res instanceof MochiKit.Async.Deferred){
var self=this;
res.addErrback(function(e){
self.addError(_89f,e.message);
return e;
});
return res;
}else{
if(typeof (res)=="string"){
this.addError(_89f,res);
return false;
}else{
if(res===false){
this.addError(_89f,"Field validation failed");
return false;
}
}
}
}
}
}
}
return true;
};
MochiKit.Widget.FormValidator.prototype.addError=function(_8a6,_8a7){
if(!MochiKit.DOM.hasElementClass(_8a6,"widgetInvalid")){
this.fields.push(_8a6);
MochiKit.DOM.addElementClass(_8a6,"widgetInvalid");
if(this.display==="error"){
var _8a8={ref:"ERROR",tooltip:this.message||_8a7};
this.addAll(new MochiKit.Widget.Icon(_8a8));
this.show();
}
}
};
MochiKit.Widget.Icon=function(_8a9){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_8a9);
}
var o=MochiKit.DOM.IMG();
MochiKit.Base.updatetree(o,this);
o.setAttrs(_8a9);
o.addClass("widget","widgetIcon");
return o;
};
MochiKit.Widget.Icon.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Icon.prototype.setAttrs=function(_8ac){
_8ac=MochiKit.Base.update({},_8ac);
if(_8ac.ref){
MochiKit.Base.setdefault(_8ac,MochiKit.Widget.Icon[_8ac.ref],MochiKit.Widget.Icon.DEFAULT);
}
var _8ad=MochiKit.Base.mask(_8ac,["ref","url","baseUrl","tooltip","width","height"]);
if(typeof (_8ad.url)!="undefined"){
MochiKit.Base.setdefault(_8ad,MochiKit.Widget.Icon.DEFAULT);
_8ac.src=_8ad.baseUrl+_8ad.url;
}
if(typeof (_8ad.tooltip)!="undefined"){
_8ac.alt=_8ad.tooltip;
_8ac.title=_8ad.tooltip;
}
if(typeof (_8ad.width)!="undefined"){
this.width=_8ad.width;
this.setStyle({width:_8ad.width});
}
if(typeof (_8ad.height)!="undefined"){
this.height=_8ad.height;
this.setStyle({height:_8ad.height});
}
MochiKit.DOM.updateNodeAttributes(this,_8ac);
};
MochiKit.Base.update(MochiKit.Widget.Icon,{DEFAULT:{baseUrl:"images/icons/",width:"16",height:"16"},BLANK:{url:"blank.gif",style:{cursor:"default"}},CLOSE:{url:"close.gif"},RESIZE:{url:"resize-handle.gif"},OK:{url:"ok.gif",tooltip:"OK"},CANCEL:{url:"cancel.gif",tooltip:"Cancel"},HELP:{url:"help.gif",tooltip:"Help"},ERROR:{url:"error.gif",tooltip:"Error"},PLUS:{url:"plus.gif",tooltip:"Show"},MINUS:{url:"minus.gif",tooltip:"Hide"},NEXT:{url:"next.gif",tooltip:"Next"},PREVIOUS:{url:"previous.gif",tooltip:"Previous"},CONFIG:{url:"config.gif",tooltip:"Configure"},DELAY:{url:"delay.gif",tooltip:"Configure Delay"},RELOAD:{url:"reload.gif",tooltip:"Reload"},LOADING:{url:"loading.gif",tooltip:"Loading..."},LOADING_LARGE:{url:"loading-large.gif",tooltip:"Loading...",width:"32",height:"32"},SEARCH:{url:"magnifier.gif",tooltip:"Search"},ADD:{url:"add.gif",tooltip:"Add"},REMOVE:{url:"remove.gif",tooltip:"Remove"},EDIT:{url:"edit.gif",tooltip:"Edit"},DELETE:{url:"trash.gif",tooltip:"Clear / Delete"},SELECT:{url:"select.gif",tooltip:"Select / Unselect"},CUT:{url:"cut.gif",tooltip:"Cut"},EXPORT:{url:"export.gif",tooltip:"Export"},EXPAND:{url:"expand.gif",tooltip:"Expand"},UP:{url:"up.gif",tooltip:"Move Up"},DOWN:{url:"down.gif",tooltip:"Move Down"},LEFT:{url:"left.gif",tooltip:"Move Left"},RIGHT:{url:"right.gif",tooltip:"Move Right"},COMMENT:{url:"comment.gif",tooltip:"Comment"},CALENDAR:{url:"calendar.gif",tooltip:"Calendar"},AUTOMATIC:{url:"automatic.gif",tooltip:"Automatic Processing"},PLUGIN:{url:"plugin.gif",tooltip:"Plug-in"},FOLDER:{url:"folder.gif"},DOCUMENT:{url:"document.gif"}});
MochiKit.Widget.Overlay=function(_8ae){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_8ae,MochiKit.Base.extend(null,arguments,1));
}
var msg=MochiKit.DOM.DIV({"class":"widgetOverlayMessage"});
var o=MochiKit.DOM.DIV({},msg);
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetOverlay");
_8ae=MochiKit.Base.update({loading:true,message:"Working..."},_8ae);
o.setAttrs(_8ae);
o.addAll(MochiKit.Base.extend(null,arguments,1));
return o;
};
MochiKit.Widget.Overlay.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Overlay.prototype.setAttrs=function(_8b2){
_8b2=MochiKit.Base.update({},_8b2);
var _8b3=MochiKit.Base.mask(_8b2,["loading","message"]);
if(typeof (_8b3.loading)!="undefined"){
this.showLoading=!MochiKit.Base.isFalse(_8b3.loading);
}
if(typeof (_8b3.message)!="undefined"){
this.message=_8b3.message;
}
if(typeof (this.showLoading)!="undefined"){
var icon=new MochiKit.Widget.Icon({ref:"LOADING_LARGE"});
icon.setStyle({"padding-right":"20px"});
}
MochiKit.DOM.replaceChildNodes(this.firstChild,icon,this.message);
MochiKit.DOM.updateNodeAttributes(this,_8b2);
};
MochiKit.Widget.Pane=function(_8b5){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_8b5,MochiKit.Base.extend(null,arguments,1));
}
var o=MochiKit.DOM.DIV();
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetPane");
o.setAttrs(MochiKit.Base.update({pageTitle:"Page",pageStatus:"ANY",pageCloseable:false},_8b5));
o.addAll(MochiKit.Base.extend(null,arguments,1));
return o;
};
MochiKit.Widget.Pane.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Pane.ANY={previous:true,next:true};
MochiKit.Widget.Pane.FORWARD={previous:false,next:true};
MochiKit.Widget.Pane.BACKWARD={previous:true,next:false};
MochiKit.Widget.Pane.WORKING={previous:false,next:false};
MochiKit.Widget.Pane.prototype.setAttrs=function(_8b8){
_8b8=MochiKit.Base.update({},_8b8);
var _8b9=MochiKit.Base.mask(_8b8,["pageTitle","pageStatus","pageCloseable"]);
var _8ba=false;
if(typeof (_8b9.pageTitle)!="undefined"){
this.pageTitle=_8b9.pageTitle;
_8ba=true;
}
if(typeof (_8b9.pageStatus)!="undefined"){
if(typeof (_8b9.pageStatus)=="string"){
_8b9.pageStatus=MochiKit.Widget.Pane[_8b9.pageStatus];
}
this.pageStatus=_8b9.pageStatus;
_8ba=true;
}
if(typeof (_8b9.pageCloseable)!="undefined"){
this.pageCloseable=!MochiKit.Base.isFalse(_8b9.pageCloseable);
_8ba=true;
}
if(_8ba&&this.parentNode&&typeof (this.parentNode._updateStatus)=="function"){
this.parentNode._updateStatus();
}
MochiKit.DOM.updateNodeAttributes(this,_8b8);
};
MochiKit.Widget.Pane.prototype._handleEnter=function(opts){
opts=opts||{};
if(opts.validateReset){
var _8bc=this.getElementsByTagName("FORM");
for(var i=0;i<_8bc.length;i++){
if(typeof (_8bc[i].validateReset)=="function"){
_8bc[i].validateReset();
}
}
}
this.show();
MochiKit.Style.resizeElements(this);
MochiKit.Widget.emitSignal(this,"onenter");
};
MochiKit.Widget.Pane.prototype._handleExit=function(opts){
opts=opts||{};
if(opts.validateForm){
var _8bf=this.getElementsByTagName("FORM");
for(var i=0;i<_8bf.length;i++){
if(typeof (_8bf[i].validate)=="function"){
var res=_8bf[i].validate();
if(!res){
return false;
}
}
}
}
this.blurAll();
this.hide();
MochiKit.Widget.emitSignal(this,"onexit");
return true;
};
MochiKit.Widget.Popup=function(_8c2){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_8c2,MochiKit.Base.extend(null,arguments,1));
}
var o=MochiKit.DOM.DIV();
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetPopup","widgetHidden");
o.selectedIndex=-1;
o._delayTimer=null;
o.setAttrs(MochiKit.Base.update({delay:5000},_8c2));
o.addAll(MochiKit.Base.extend(null,arguments,1));
MochiKit.Signal.connect(o,"onmousemove",o,"_handleMouseMove");
MochiKit.Signal.connect(o,"onclick",o,"_handleMouseClick");
return o;
};
MochiKit.Widget.Popup.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Popup.prototype.setAttrs=function(_8c5){
_8c5=MochiKit.Base.update({},_8c5);
var _8c6=MochiKit.Base.mask(_8c5,["delay","showAnim","hideAnim"]);
if(typeof (_8c6.delay)!="undefined"){
this.delay=parseInt(_8c6.delay);
this.resetDelay();
}
if(typeof (_8c6.showAnim)!="undefined"){
this.showAnim=_8c6.showAnim;
}
if(typeof (_8c6.hideAnim)!="undefined"){
this.hideAnim=_8c6.hideAnim;
}
MochiKit.DOM.updateNodeAttributes(this,_8c5);
};
MochiKit.Widget.Popup.prototype.show=function(){
if(this.isHidden()){
this.resetDelay();
this.selectChild(-1);
this.removeClass("widgetHidden");
if(this.showAnim){
this.animate(this.showAnim);
}
MochiKit.Style.resetScrollOffset(this,true);
MochiKit.Widget.emitSignal(this,"onshow");
}else{
this.resetDelay();
}
};
MochiKit.Widget.Popup.prototype.hide=function(){
if(this.isHidden()){
this.resetDelay();
}else{
this.addClass("widgetHidden");
this.resetDelay();
if(this.hideAnim){
this.animate(this.hideAnim);
}
MochiKit.Widget.emitSignal(this,"onhide");
}
};
MochiKit.Widget.Popup.prototype.resetDelay=function(){
if(this._delayTimer){
clearTimeout(this._delayTimer);
this._delayTimer=null;
}
if(!this.isHidden()&&this.delay>0){
this._delayTimer=setTimeout(MochiKit.Base.bind("hide",this),this.delay);
}
};
MochiKit.Widget.Popup.prototype.selectedChild=function(){
return MochiKit.DOM.childNode(this,this.selectedIndex);
};
MochiKit.Widget.Popup.prototype.selectChild=function(_8c7){
var node=this.selectedChild();
if(node!=null){
MochiKit.DOM.removeElementClass(node,"selected");
}
var node=MochiKit.DOM.childNode(this,_8c7);
if(typeof (_8c7)=="number"){
var _8c9=_8c7;
}else{
var _8c9=MochiKit.Base.findIdentical(this.childNodes,node);
}
if(_8c9>=0&&node!=null){
this.selectedIndex=_8c9;
MochiKit.DOM.addElementClass(node,"selected");
var box={y:node.offsetTop,h:node.offsetHeight+5};
MochiKit.Style.adjustScrollOffset(this,box);
}else{
this.selectedIndex=-1;
}
return this.selectedIndex;
};
MochiKit.Widget.Popup.prototype.selectMove=function(_8cb){
var _8cc=this.selectedIndex+_8cb;
if(_8cc>=this.childNodes.length){
_8cc=0;
}
if(_8cc<0){
_8cc=this.childNodes.length-1;
}
return this.selectChild(_8cc);
};
MochiKit.Widget.Popup.prototype._handleMouseMove=function(evt){
this.show();
var node=MochiKit.DOM.childNode(this,evt.target());
if(node!=null&&MochiKit.DOM.hasElementClass(node,"widgetPopupItem")){
this.selectChild(node);
}else{
this.selectChild(-1);
}
};
MochiKit.Widget.Popup.prototype._handleMouseClick=function(evt){
var node=MochiKit.DOM.childNode(this,evt.target());
if(node!=null&&MochiKit.DOM.hasElementClass(node,"widgetPopupItem")){
this.selectChild(node);
}else{
this.selectChild(-1);
}
};
MochiKit.Widget.ProgressBar=function(_8d1){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_8d1,MochiKit.Base.extend(null,arguments,1));
}
var _8d3=MochiKit.DOM.DIV({"class":"widgetProgressBarMeter"});
var text=MochiKit.DOM.DIV({"class":"widgetProgressBarText"});
var o=MochiKit.DOM.DIV({},_8d3,text);
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetProgressBar");
o.setAttrs(MochiKit.Base.update({min:0,max:100},_8d1));
o.setValue(0);
return o;
};
MochiKit.Widget.ProgressBar.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.ProgressBar.prototype.setAttrs=function(_8d6){
_8d6=MochiKit.Base.update({},_8d6);
var _8d7=MochiKit.Base.mask(_8d6,["min","max"]);
if(typeof (_8d7.min)!="undefined"||typeof (_8d7.max)!="undefined"){
this.minValue=parseInt(_8d7.min)||0;
this.maxValue=parseInt(_8d7.max)||100;
this.startTime=new Date().getTime();
this.lastTime=this.startTime;
this.timeLeft=null;
}
MochiKit.DOM.updateNodeAttributes(this,_8d6);
};
MochiKit.Widget.ProgressBar.prototype.setValue=function(_8d8,text){
_8d8=Math.min(Math.max(_8d8,this.minValue),this.maxValue);
var pos=_8d8-this.minValue;
var _8db=this.maxValue-this.minValue;
var str=pos+" of "+_8db;
if(typeof (text)=="string"&&text!=""){
str+=" \u2014 "+text;
}
this.setRatio(pos/_8db,str);
};
MochiKit.Widget.ProgressBar.prototype.setRatio=function(_8dd,text){
var _8df=Math.round(_8dd*1000)/10;
MochiKit.Style.setElementDimensions(this.firstChild,{w:_8df},"%");
if(_8df<66){
this.lastChild.className="widgetProgressBarText";
}else{
this.lastChild.className="widgetProgressBarTextInverse";
}
if(typeof (text)=="string"&&text!=""){
text=Math.round(_8df)+"% \u2014 "+text;
}else{
text=Math.round(_8df)+"%";
}
var _8e0=new Date().getTime();
if(_8e0-this.lastTime>1000){
this.lastTime=_8e0;
var _8e1=_8e0-this.startTime;
_8e1=Math.max(Math.round(_8e1/_8dd-_8e1),0);
this.timeLeft=MochiKit.DateTime.toApproxPeriod(_8e1);
}
if(this.timeLeft!=null&&_8df>0&&_8df<100){
text+=" \u2014 "+this.timeLeft+" left";
}
this.setText(text);
};
MochiKit.Widget.ProgressBar.prototype.setText=function(text){
MochiKit.DOM.replaceChildNodes(this.lastChild,text);
};
MochiKit.Widget.TabContainer=function(_8e3){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_8e3,MochiKit.Base.extend(null,arguments,1));
}
var _8e5=MochiKit.DOM.DIV({"class":"widgetTabContainerLabels"});
var _8e6=MochiKit.DOM.DIV({"class":"widgetTabContainerContent"});
var o=MochiKit.DOM.DIV(_8e3,_8e5,_8e6);
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetTabContainer");
MochiKit.Style.registerSizeConstraints(_8e6,"100% - 22","100% - 47");
_8e6.resizeContent=MochiKit.Base.noop;
o._selectedIndex=-1;
o.addAll(MochiKit.Base.extend(null,arguments,1));
return o;
};
MochiKit.Widget.TabContainer.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.TabContainer.prototype.getChildNodes=function(){
return MochiKit.Base.extend([],this.lastChild.childNodes);
};
MochiKit.Widget.TabContainer.prototype.addChildNode=function(_8e8){
if(!MochiKit.Widget.isWidget(_8e8,"Pane")){
_8e8=new MochiKit.Widget.Pane(null,_8e8);
}
MochiKit.Style.registerSizeConstraints(_8e8,"100%","100%");
_8e8.hide();
var text=MochiKit.DOM.SPAN(null,_8e8.pageTitle);
if(_8e8.pageCloseable){
var icon=new MochiKit.Widget.Icon({ref:"CLOSE"});
MochiKit.Signal.connect(icon,"onclick",MochiKit.Base.bind("_handleClose",this,_8e8));
}
var _8eb=MochiKit.DOM.DIV({"class":"widgetTabContainerLabel"},MochiKit.DOM.DIV({},text,icon));
MochiKit.Signal.connect(_8eb,"onclick",MochiKit.Base.bind("selectChild",this,_8e8));
this.firstChild.appendChild(_8eb);
this.lastChild.appendChild(_8e8);
if(this._selectedIndex<0){
this.selectChild(0);
}
};
MochiKit.Widget.TabContainer.prototype.removeChildNode=function(_8ec){
var _8ed=this.getChildNodes();
var _8ee=MochiKit.Base.findIdentical(_8ed,_8ec);
if(_8ee<0){
throw new Error("Cannot remove DOM node that is not a TabContainer child");
}
if(this._selectedIndex==_8ee){
_8ec._handleExit();
this._selectedIndex=-1;
}
MochiKit.Widget.destroyWidget(this.firstChild.childNodes[_8ee]);
MochiKit.DOM.removeElement(_8ec);
MochiKit.Widget.emitSignal(_8ec,"onclose");
if(this._selectedIndex<0&&this.getChildNodes().length>0){
this.selectChild((_8ee==0)?0:_8ee-1);
}
};
MochiKit.Widget.TabContainer.prototype.selectedIndex=function(){
return this._selectedIndex;
};
MochiKit.Widget.TabContainer.prototype.selectedChild=function(){
var _8ef=this.getChildNodes();
return (this._selectedIndex<0)?null:_8ef[this._selectedIndex];
};
MochiKit.Widget.TabContainer.prototype.selectChild=function(_8f0){
var _8f1=this.getChildNodes();
if(this._selectedIndex>=0){
var _8f2=this.firstChild.childNodes[this._selectedIndex];
MochiKit.DOM.removeElementClass(_8f2,"selected");
_8f1[this._selectedIndex]._handleExit();
}
var _8f3=-1;
if(_8f0==null){
_8f3=this._selectedIndex;
}else{
if(typeof (_8f0)=="number"){
_8f3=_8f0;
}else{
_8f3=MochiKit.Base.findIdentical(_8f1,_8f0);
}
}
this._selectedIndex=(_8f3<0||_8f3>=_8f1.length)?-1:_8f3;
if(this._selectedIndex>=0){
var _8f2=this.firstChild.childNodes[this._selectedIndex];
MochiKit.DOM.addElementClass(_8f2,"selected");
_8f1[this._selectedIndex]._handleEnter();
}
};
MochiKit.Widget.TabContainer.prototype.resizeContent=function(){
MochiKit.Style.resizeElements(this.lastChild);
var _8f4=this.selectedChild();
if(_8f4!=null){
MochiKit.Style.resizeElements(_8f4);
}
};
MochiKit.Widget.TabContainer.prototype._handleClose=function(_8f5,evt){
evt.stop();
this.removeChildNode(_8f5);
};
MochiKit.Widget.Table=function(_8f7){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_8f7,MochiKit.Base.extend(null,arguments,1));
}
var _8f9=MochiKit.DOM.THEAD({},MochiKit.DOM.TR());
var _8fa=MochiKit.DOM.TBODY();
_8fa.resizeContent=MochiKit.Base.noop;
var _8fb=MochiKit.DOM.TABLE({"class":"widgetTable"},_8f9,_8fa);
var o=MochiKit.DOM.DIV({},_8fb);
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetTable");
o.setAttrs(MochiKit.Base.update({multiple:false},_8f7));
o._rows=[];
o._data=null;
o._keyField=null;
o._selected=[];
o.addAll(MochiKit.Base.extend(null,arguments,1));
MochiKit.Signal.connect(_8fa,"onmousedown",o,"_handleSelect");
return o;
};
MochiKit.Widget.Table.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Table.prototype.setAttrs=function(_8fd){
_8fd=MochiKit.Base.update({},_8fd);
var _8fe=MochiKit.Base.mask(_8fd,["multiple"]);
if(typeof (_8fe.multiple)!="undefined"){
this.multiple=!MochiKit.Base.isFalse(_8fe.multiple);
}
MochiKit.DOM.updateNodeAttributes(this,_8fd);
};
MochiKit.Widget.Table.prototype.getChildNodes=function(){
var _8ff=this.firstChild;
var _900=_8ff.firstChild;
var tr=_900.firstChild;
return MochiKit.Base.extend([],tr.childNodes);
};
MochiKit.Widget.Table.prototype.addChildNode=function(_902){
if(!MochiKit.Widget.isWidget(_902,"TableColumn")){
throw new Error("Table widget can only have TableColumn children");
}
this.clear();
var _903=this.firstChild;
var _904=_903.firstChild;
var tr=_904.firstChild;
tr.appendChild(_902);
};
MochiKit.Widget.Table.prototype.removeChildNode=function(_906){
this.clear();
var _907=this.firstChild;
var _908=_907.firstChild;
var tr=_908.firstChild;
tr.removeChild(_906);
};
MochiKit.Widget.Table.prototype.getColumnIndex=function(_90a){
var cols=this.getChildNodes();
for(var i=0;i<cols.length;i++){
if(cols[i].field===_90a){
return i;
}
}
return -1;
};
MochiKit.Widget.Table.prototype.getIdKey=function(){
if(this._keyField){
return this._keyField;
}
var cols=this.getChildNodes();
for(var i=0;i<cols.length;i++){
if(cols[i].key){
return cols[i].field;
}
}
return null;
};
MochiKit.Widget.Table.prototype.setIdKey=function(key){
this._keyField=key;
for(var i=0;i<this._rows.length;i++){
var row=this._rows[i];
if(this._keyField!=null&&row.$data[this._keyField]!=null){
row.$id=row.$data[this._keyField];
}
}
};
MochiKit.Widget.Table.prototype.getSortKey=function(){
var cols=this.getChildNodes();
for(var i=0;i<cols.length;i++){
if(cols[i].sort!=null&&cols[i].sort!="none"){
return cols[i].field;
}
}
return null;
};
MochiKit.Widget.Table.prototype.getCellElem=function(row,col){
try{
var _916=this.firstChild;
var _917=_916.lastChild;
return _917.childNodes[row].childNodes[col];
}
catch(e){
return null;
}
};
MochiKit.Widget.Table.prototype.clear=function(){
this.setData([]);
};
MochiKit.Widget.Table.prototype.getData=function(){
return this._data;
};
MochiKit.Widget.Table.prototype.setData=function(data){
var cols=this.getChildNodes();
var _91a=this.getSelectedIds();
MochiKit.Widget.emitSignal(this,"onclear");
this._data=data;
this._rows=[];
this._selected=[];
for(var i=0;data!=null&&i<data.length;i++){
var row={$id:"id"+i,$data:data[i]};
for(var j=0;j<cols.length;j++){
cols[j]._map(data[i],row);
}
if(this._keyField!=null&&data[i][this._keyField]!=null){
row.$id=data[i][this._keyField];
}
this._rows.push(row);
}
var key=this.getSortKey();
if(key){
this.sortData(key);
}else{
this._renderRows();
}
if(this.getIdKey()!=null){
this._addSelectedIds(_91a);
}
};
MochiKit.Widget.Table.prototype.sortData=function(_91f,_920){
var cols=this.getChildNodes();
var _922=this.getSelectedIds();
this._selected=[];
for(var i=0;i<cols.length;i++){
if(cols[i].field===_91f){
if(cols[i].sort=="none"){
return;
}else{
if(_920==null){
_920=cols[i].sort||"asc";
}
}
cols[i].setAttrs({sort:_920});
}else{
if(cols[i].sort!="none"){
cols[i].setAttrs({sort:null});
}
}
}
this._rows.sort(MochiKit.Base.keyComparator(_91f));
if(_920=="desc"){
this._rows.reverse();
}
this._renderRows();
this._addSelectedIds(_922);
};
MochiKit.Widget.Table.prototype.redraw=function(){
var cols=this.getChildNodes();
for(var i=0;i<this._rows.length;i++){
var row=this._rows[i];
for(var j=0;j<cols.length;j++){
cols[j]._map(row.$data,row);
}
}
this._renderRows();
for(var i=0;i<this._selected.length;i++){
this._markSelection(this._selected[i]);
}
};
MochiKit.Widget.Table.prototype._renderRows=function(){
var cols=this.getChildNodes();
var _929=this.firstChild.lastChild;
MochiKit.DOM.replaceChildNodes(_929);
for(var i=0;i<this._rows.length;i++){
var tr=MochiKit.DOM.TR();
if(i%2==1){
MochiKit.DOM.addElementClass(tr,"widgetTableAlt");
}
for(var j=0;j<cols.length;j++){
tr.appendChild(cols[j]._render(this._rows[i]));
}
tr.rowNo=i;
_929.appendChild(tr);
}
if(this._rows.length==0){
_929.appendChild(MochiKit.DOM.TR());
}
};
MochiKit.Widget.Table.prototype.getSelectedIds=function(){
var res=[];
for(var i=0;i<this._selected.length;i++){
res.push(this._rows[this._selected[i]].$id);
}
return res;
};
MochiKit.Widget.Table.prototype.getSelectedData=function(){
if(this.multiple){
var res=[];
for(var i=0;i<this._selected.length;i++){
res.push(this._rows[this._selected[i]].$data);
}
return res;
}else{
if(this._selected.length>0){
return this._rows[this._selected[0]].$data;
}else{
return null;
}
}
};
MochiKit.Widget.Table.prototype.addSelectedIds=function(){
var res=this._addSelectedIds(arguments);
if(res.length>0){
MochiKit.Widget.emitSignal(this,"onselect");
}
return res;
};
MochiKit.Widget.Table.prototype._addSelectedIds=function(){
var args=MochiKit.Base.flattenArguments(arguments);
var ids=MochiKit.Base.dict(args,true);
var res=[];
MochiKit.Base.update(ids,MochiKit.Base.dict(this.getSelectedIds(),false));
for(var i=0;i<this._rows.length;i++){
if(ids[this._rows[i].$id]){
this._selected.push(i);
this._markSelection(i);
res.push(this._rows[i].$id);
}
}
return res;
};
MochiKit.Widget.Table.prototype.removeSelectedIds=function(){
var args=MochiKit.Base.flattenArguments(arguments);
var ids=MochiKit.Base.dict(args,true);
var res=[];
for(var i=0;i<this._rows.length;i++){
if(ids[this._rows[i].$id]){
var pos=MochiKit.Base.findIdentical(this._selected,i);
if(pos>=0){
this._selected.splice(i,1);
this._unmarkSelection(i);
res.push(this._rows[i].$id);
}
}
}
if(res.length>0){
MochiKit.Widget.emitSignal(this,"onselect");
}
return res;
};
MochiKit.Widget.Table.prototype._handleSelect=function(evt){
var tr=MochiKit.DOM.getFirstParentByTagAndClassName(evt.target(),"TR");
if(tr==null||tr.rowNo==null||!MochiKit.DOM.isChildNode(tr,this)){
evt.stop();
return false;
}
var row=tr.rowNo;
if(this.multiple){
if(evt.modifier().ctrl||evt.modifier().meta){
if(MochiKit.Base.findIdentical(this._selected,row)>=0){
this._unmarkSelection(row);
ArrayUtil.removeElem(this._selected,row);
}else{
this._selected.push(row);
this._markSelection(row);
}
}else{
if(evt.modifier().shift){
var _93e=row;
if(this._selected.length>0){
_93e=this._selected[0];
}
this._unmarkSelection();
this._selected=[];
if(row>=_93e){
for(var i=_93e;i<=row;i++){
this._selected.push(i);
}
}else{
for(var i=_93e;i>=row;i--){
this._selected.push(i);
}
}
this._markSelection();
}else{
this._unmarkSelection();
this._selected=[row];
this._markSelection(row);
}
}
}else{
this._unmarkSelection();
this._selected=[row];
this._markSelection(row);
}
evt.stop();
MochiKit.Widget.emitSignal(this,"onselect");
return false;
};
MochiKit.Widget.Table.prototype._markSelection=function(_940){
if(_940==null){
for(var i=0;i<this._selected.length;i++){
this._markSelection(this._selected[i]);
}
}else{
var _942=this.firstChild.lastChild;
var tr=_942.childNodes[_940];
MochiKit.DOM.addElementClass(tr,"selected");
}
};
MochiKit.Widget.Table.prototype._unmarkSelection=function(_944){
if(_944==null){
for(var i=0;i<this._selected.length;i++){
this._unmarkSelection(this._selected[i]);
}
}else{
var _946=this.firstChild.lastChild;
var tr=_946.childNodes[_944];
MochiKit.DOM.removeElementClass(tr,"selected");
}
};
MochiKit.Widget.TableColumn=function(_948){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_948,MochiKit.Base.extend(null,arguments,1));
}
if(_948.field==null){
throw new Error("The 'field' attribute cannot be null for a TableColumn");
}
var o=MochiKit.DOM.TH();
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetTableColumn");
o.setAttrs(MochiKit.Base.update({title:_948.field,type:"string",key:false},_948));
MochiKit.Signal.connect(o,"onclick",o,"_handleClick");
return o;
};
MochiKit.Widget.TableColumn.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.TableColumn.prototype.setAttrs=function(_94b){
_94b=MochiKit.Base.update({},_94b);
var _94c=MochiKit.Base.mask(_94b,["title","field","type","sort","maxLength","key","tooltip"]);
if(typeof (_94c.title)!="undefined"){
MochiKit.DOM.replaceChildNodes(this,_94c.title);
}
if(typeof (_94c.field)!="undefined"){
this.field=_94c.field;
}
if(typeof (_94c.type)!="undefined"){
this.type=_94c.type;
}
if(typeof (_94c.sort)!="undefined"){
this.sort=_94c.sort;
if(_94c.sort==null||_94c.sort=="none"){
MochiKit.DOM.removeElementClass(this,"sortAsc");
MochiKit.DOM.removeElementClass(this,"sortDesc");
}else{
if(_94c.sort=="desc"){
MochiKit.DOM.removeElementClass(this,"sortAsc");
MochiKit.DOM.addElementClass(this,"sortDesc");
}else{
MochiKit.DOM.removeElementClass(this,"sortDesc");
MochiKit.DOM.addElementClass(this,"sortAsc");
}
}
}
if(typeof (_94c.maxLength)!="undefined"){
this.maxLength=parseInt(_94c.maxLength);
}
if(typeof (_94c.key)!="undefined"){
this.key=!MochiKit.Base.isFalse(_94c.key);
}
if(typeof (_94c.tooltip)!="undefined"){
this.title=_94c.tooltip;
}
MochiKit.DOM.updateNodeAttributes(this,_94b);
};
MochiKit.Widget.TableColumn.prototype._map=function(src,dst){
var _94f=src[this.field];
if(_94f!=null){
if(this._key){
dst.$id=_94f;
}
switch(this.type){
case "number":
if(_94f instanceof Number){
_94f=_94f.valueOf();
}else{
if(typeof (_94f)!="number"){
_94f=parseFloat(_94f);
}
}
break;
case "date":
if(_94f instanceof Date){
_94f=MochiKit.DateTime.toISODate(_94f);
}else{
_94f=MochiKit.Format.truncate(_94f,10);
}
break;
case "datetime":
if(_94f instanceof Date){
_94f=MochiKit.DateTime.toISOTimestamp(_94f);
}else{
_94f=MochiKit.Format.truncate(_94f,19);
}
break;
case "time":
if(_94f instanceof Date){
_94f=MochiKit.DateTime.toISOTime(_94f);
}else{
if(typeof (_94f)!="string"){
_94f=_94f.toString();
}
if(_94f.length>8){
_94f=_94f.substring(_94f.length-8);
}
}
break;
default:
if(typeof (_94f)!="string"){
_94f=_94f.toString();
}
}
}
dst[this.field]=_94f;
};
MochiKit.Widget.TableColumn.prototype._render=function(obj){
var td=MochiKit.DOM.TD();
var _952=obj[this.field];
if(_952==null){
_952="";
}else{
if(typeof (_952)!="string"){
_952=_952.toString();
}
}
if(this.maxLength&&this.maxLength<_952.length){
td.title=_952;
_952=MochiKit.Format.truncate(_952,this.maxLength,"...");
}
if(this.type=="html"){
td.innerHTML=_952;
}else{
td.appendChild(MochiKit.DOM.createTextNode(_952));
}
return td;
};
MochiKit.Widget.TableColumn.prototype._handleClick=function(){
if(this.parentNode!=null){
var dir=(this.sort=="asc")?"desc":"asc";
var tr=this.parentNode;
var _955=tr.parentNode;
var _956=_955.parentNode;
_956.parentNode.sortData(this.field,dir);
}
};
MochiKit.Widget.TextArea=function(_957){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_957,MochiKit.Base.extend(null,arguments,1));
}
var o=MochiKit.DOM.TEXTAREA();
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetTextArea");
o.focused=false;
o.setAttrs(MochiKit.Base.update({helpText:""},_957));
o.addAll(MochiKit.Base.extend(null,arguments,1));
MochiKit.Signal.connect(o,"onfocus",o,"_handleFocus");
MochiKit.Signal.connect(o,"onblur",o,"_handleFocus");
return o;
};
MochiKit.Widget.TextArea.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.TextArea.prototype.setAttrs=function(_95a){
_95a=MochiKit.Base.update({},_95a);
var _95b=MochiKit.Base.mask(_95a,["helpText","value"]);
if(typeof (_95b.helpText)!="undefined"){
this.helpText=_95b.helpText;
}
if(typeof (_95b.value)!="undefined"){
this.value=this.storedValue=_95b.value;
}
if(!this.focused&&MochiKit.Format.strip(this.value)==""){
this.value=this.helpText;
this.addClass("widgetTextAreaHelp");
}
MochiKit.DOM.updateNodeAttributes(this,_95a);
};
MochiKit.Widget.TextArea.prototype.reset=function(){
this.setAttrs({value:this.defaultValue});
};
MochiKit.Widget.TextArea.prototype.getValue=function(){
return (this.focused)?this.value:this.storedValue;
};
MochiKit.Widget.TextArea.prototype._handleFocus=function(evt){
if(evt.type()=="focus"){
this.focused=true;
this.value=this.storedValue;
this.removeClass("widgetTextAreaHelp");
}else{
if(evt.type()=="blur"){
this.focused=false;
this.storedValue=this.value;
if(MochiKit.Format.strip(this.value)==""){
this.value=this.helpText;
this.addClass("widgetTextAreaHelp");
}
}
}
};
MochiKit.Widget.TextField=function(_95d){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_95d,MochiKit.Base.extend(null,arguments,1));
}
var text="";
if(_95d!=null&&_95d.value!=null){
text=_95d.value;
}
for(var i=1;i<arguments.length;i++){
text+=arguments[i].toString();
}
var o=MochiKit.DOM.INPUT({value:text});
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetTextField");
o.focused=false;
o._popupCreated=false;
o.setAttrs(MochiKit.Base.update({helpText:"",value:text},_95d));
MochiKit.Signal.connect(o,"onfocus",o,"_handleFocus");
MochiKit.Signal.connect(o,"onblur",o,"_handleFocus");
return o;
};
MochiKit.Widget.TextField.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.TextField.prototype.setAttrs=function(_962){
_962=MochiKit.Base.update({},_962);
var _963=MochiKit.Base.mask(_962,["helpText","value"]);
if(typeof (_963.helpText)!="undefined"){
this.helpText=_963.helpText;
}
if(typeof (_963.value)!="undefined"){
this.value=this.storedValue=_963.value;
}
if(!this.focused&&MochiKit.Format.strip(this.value)==""){
this.value=this.helpText;
this.addClass("widgetTextFieldHelp");
}
MochiKit.DOM.updateNodeAttributes(this,_962);
};
MochiKit.Widget.TextField.prototype.reset=function(){
this.setAttrs({value:this.defaultValue});
};
MochiKit.Widget.TextField.prototype.getValue=function(){
return (this.focused)?this.value:this.storedValue;
};
MochiKit.Widget.TextField.prototype.popup=function(_964){
if(!this._popupCreated&&_964){
this.autocomplete="off";
this._popupCreated=true;
var _965={"max-height":"300px","width":"300px"};
var _966=new MochiKit.Widget.Popup({style:_965});
MochiKit.DOM.insertSiblingNodesAfter(this,_966);
MochiKit.DOM.makePositioned(this.parentNode);
var pos={x:this.offsetLeft+1,y:this.offsetTop+this.offsetHeight+1};
MochiKit.Style.setElementPosition(_966,pos);
MochiKit.Signal.connect(this,"onkeydown",this,"_handleKeyDown");
MochiKit.Signal.connect(_966,"onclick",this,"_handleClick");
}
return (this._popupCreated)?this.nextSibling:null;
};
MochiKit.Widget.TextField.prototype.showPopup=function(_968,_969){
var _96a=this.popup(true);
if(_969){
_96a.hide();
MochiKit.DOM.replaceChildNodes(_96a);
for(var i=0;i<_969.length;i++){
if(typeof (_969[i])=="string"){
var node=MochiKit.DOM.DIV({"class":"widgetPopupItem"},"\xbb "+_969[i]);
_96a.appendChild(node);
}else{
MochiKit.DOM.appendChildNodes(_96a,_969[i]);
}
}
}
if(_96a.childNodes.length>0){
_96a.setAttrs(MochiKit.Base.update({delay:30000},_968));
_96a.show();
}
};
MochiKit.Widget.TextField.prototype._handleFocus=function(evt){
if(evt.type()=="focus"){
this.focused=true;
this.value=this.storedValue;
this.removeClass("widgetTextFieldHelp");
}else{
if(evt.type()=="blur"){
this.focused=false;
this.storedValue=this.value;
if(MochiKit.Format.strip(this.value)==""){
this.value=this.helpText;
this.addClass("widgetTextFieldHelp");
}
var _96e=this.popup();
if(_96e!=null&&!_96e.isHidden()){
_96e.setAttrs({delay:250});
}
}
}
};
MochiKit.Widget.TextField.prototype._handleKeyDown=function(evt){
var _970=this.popup(false);
if(_970!=null){
_970.resetDelay();
if(_970.isHidden()){
switch(evt.key().string){
case "KEY_ESCAPE":
evt.stop();
break;
case "KEY_ARROW_UP":
case "KEY_ARROW_DOWN":
this.showPopup();
_970.selectChild(0);
evt.stop();
break;
}
}else{
switch(evt.key().string){
case "KEY_TAB":
case "KEY_ENTER":
_970.hide();
evt.stop();
if(_970.selectedChild()!=null){
MochiKit.Widget.emitSignal(this,"onpopupselect");
}
break;
case "KEY_ESCAPE":
_970.hide();
evt.stop();
break;
case "KEY_ARROW_UP":
case "KEY_ARROW_DOWN":
_970.selectMove(evt.key().string=="KEY_ARROW_UP"?-1:1);
evt.stop();
break;
}
}
}
};
MochiKit.Widget.TextField.prototype._handleClick=function(evt){
this.blur();
this.focus();
MochiKit.Widget.emitSignal(this,"onpopupselect");
};
MochiKit.Widget.Tree=function(_972){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_972,MochiKit.Base.extend(null,arguments,1));
}
var o=MochiKit.DOM.DIV(_972);
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetTree");
o.resizeContent=MochiKit.Base.noop;
o.selectedPath=null;
o.addAll(MochiKit.Base.extend(null,arguments,1));
return o;
};
MochiKit.Widget.Tree.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Tree.prototype.addChildNode=function(_975){
if(!MochiKit.Widget.isWidget(_975,"TreeNode")){
throw new Error("Tree widget can only have TreeNode children");
}
this.appendChild(_975);
};
MochiKit.Widget.Tree.prototype.findRoot=function(name){
var _977=this.getChildNodes();
for(var i=0;i<_977.length;i++){
if(_977[i].name==name){
return _977[i];
}
}
return null;
};
MochiKit.Widget.Tree.prototype.findByPath=function(path){
if(path==null||path.length<1){
return null;
}
var root=this.findRoot(path[0]);
if(root!=null){
return root.findByPath(path.slice(1));
}else{
return null;
}
};
MochiKit.Widget.Tree.prototype.selectedChild=function(){
if(this.selectedPath==null){
return null;
}else{
return this.findByPath(this.selectedPath);
}
};
MochiKit.Widget.Tree.prototype._handleSelect=function(node){
var prev=this.selectedChild();
if(node==null){
this.selectedPath=null;
MochiKit.Widget.emitSignal(this,"onselect",null);
}else{
if(prev!=null&&prev!==node){
prev.unselect();
}
this.selectedPath=node.path();
MochiKit.Widget.emitSignal(this,"onselect",node);
}
};
MochiKit.Widget.Tree.prototype._emitExpand=function(node){
MochiKit.Widget.emitSignal(this,"onexpand",node);
};
MochiKit.Widget.Tree.prototype.expandAll=function(_97e){
if(typeof (_97e)!=="number"){
_97e=10;
}
var _97f=this.getChildNodes();
for(var i=0;_97e>0&&i<_97f.length;i++){
_97f[i].expandAll(_97e-1);
}
};
MochiKit.Widget.Tree.prototype.collapseAll=function(_981){
if(typeof (_981)!=="number"){
_981=0;
}
var _982=this.getChildNodes();
for(var i=0;i<_982.length;i++){
_982[i].collapseAll(_981-1);
}
};
MochiKit.Widget.Tree.prototype.addPath=function(path){
if(path==null||path.length<1){
return null;
}
var node=this.findRoot(path[0]);
if(node==null){
node=new MochiKit.Widget.TreeNode({name:path[0]});
this.addChildNode(node);
}
for(var i=1;i<path.length;i++){
var _987=node.findChild(path[i]);
if(_987==null){
_987=new MochiKit.Widget.TreeNode({name:path[i]});
node.addChildNode(_987);
}
node=_987;
}
return node;
};
MochiKit.Widget.TreeNode=function(_988){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_988,MochiKit.Base.extend(null,arguments,1));
}
var icon=MochiKit.Widget.Icon({ref:"BLANK"});
var _98b=MochiKit.DOM.SPAN({"class":"widgetTreeNodeText"});
var div=MochiKit.DOM.DIV({"class":"widgetTreeNodeLabel"},icon,_98b);
var o=MochiKit.DOM.DIV({},div);
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetTreeNode");
_988=MochiKit.Base.update({name:"Tree Node",folder:false},_988);
if(typeof (_988.icon)=="undefined"){
_988.icon=_988.folder?"FOLDER":"DOCUMENT";
}
o.setAttrs(_988);
o.addAll(MochiKit.Base.extend(null,arguments,1));
MochiKit.Signal.connect(icon,"onclick",o,"toggle");
MochiKit.Signal.connect(div,"onclick",o,"select");
return o;
};
MochiKit.Widget.TreeNode.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.TreeNode.prototype._container=function(_98e){
var _98f=this.lastChild;
if(MochiKit.DOM.hasElementClass(_98f,"widgetTreeNodeContainer")){
return _98f;
}else{
if(_98e){
_98f=MochiKit.DOM.DIV({"class":"widgetTreeNodeContainer widgetHidden"});
this.appendChild(_98f);
var _990=this.firstChild.firstChild;
_990.setAttrs({ref:"PLUS"});
this.setAttrs({icon:"FOLDER"});
return _98f;
}else{
return null;
}
}
};
MochiKit.Widget.TreeNode.prototype.setAttrs=function(_991){
_991=MochiKit.Base.update({},_991);
var _992=MochiKit.Base.mask(_991,["name","folder","icon"]);
if(typeof (_992.name)!="undefined"){
this.name=_992.name;
var node=this.firstChild.firstChild;
while(!MochiKit.DOM.hasElementClass(node,"widgetTreeNodeText")){
node=node.nextSibling;
}
MochiKit.DOM.replaceChildNodes(node,_992.name);
}
if(!MochiKit.Base.isFalse(_992.folder)){
this._container(true);
}
if(typeof (_992.icon)!="undefined"){
var _994=this.firstChild.firstChild;
var _995=_994.nextSibling;
if(!MochiKit.Widget.isWidget(_995,"Icon")){
_995=null;
}
if(_995==null&&_992.icon!=null){
if(typeof (_992.icon)==="string"){
_992.icon=new MochiKit.Widget.Icon({ref:_992.icon});
}else{
if(!MochiKit.Widget.isWidget(_992.icon,"Icon")){
_992.icon=new MochiKit.Widget.Icon(_992.icon);
}
}
MochiKit.DOM.insertSiblingNodesAfter(_994,_992.icon);
}else{
if(_995!=null&&_992.icon!=null){
if(MochiKit.Widget.isWidget(_992.icon,"Icon")){
MochiKit.DOM.swapDOM(_995,_992.icon);
}else{
if(typeof (_992.icon)==="string"){
_995.setAttrs({ref:_992.icon});
}else{
_995.setAttrs(_992.icon);
}
}
}else{
if(_995!=null&&_992.icon==null){
MochiKit.Widget.destroyWidget(_995);
}
}
}
}
MochiKit.DOM.updateNodeAttributes(this,_991);
};
MochiKit.Widget.TreeNode.prototype.getChildNodes=function(){
var _996=this._container();
if(_996==null){
return [];
}else{
return MochiKit.Base.extend([],_996.childNodes);
}
};
MochiKit.Widget.TreeNode.prototype.addChildNode=function(_997){
if(!MochiKit.Widget.isWidget(_997,"TreeNode")){
throw new Error("TreeNode widget can only have TreeNode children");
}
this._container(true).appendChild(_997);
};
MochiKit.Widget.TreeNode.prototype.removeChildNode=function(_998){
var _999=this._container();
if(_999!=null){
_999.removeChild(_998);
}
};
MochiKit.Widget.TreeNode.prototype.isFolder=function(){
return this._container()!=null;
};
MochiKit.Widget.TreeNode.prototype.isExpanded=function(){
var _99a=this._container();
return _99a!=null&&!MochiKit.DOM.hasElementClass(_99a,"widgetHidden");
};
MochiKit.Widget.TreeNode.prototype.isSelected=function(){
return MochiKit.DOM.hasElementClass(this.firstChild,"selected");
};
MochiKit.Widget.TreeNode.prototype.tree=function(){
var _99b=this.parent();
if(_99b!=null){
return _99b.tree();
}
if(MochiKit.Widget.isWidget(this.parentNode,"Tree")){
return this.parentNode;
}else{
return null;
}
};
MochiKit.Widget.TreeNode.prototype.parent=function(){
var node=this.parentNode;
if(MochiKit.DOM.hasElementClass(node,"widgetTreeNodeContainer")){
return node.parentNode;
}else{
return null;
}
};
MochiKit.Widget.TreeNode.prototype.path=function(){
var _99d=this.parent();
if(_99d==null){
return [this.name];
}else{
var path=_99d.path();
path.push(this.name);
return path;
}
};
MochiKit.Widget.TreeNode.prototype.findChild=function(name){
var _9a0=this.getChildNodes();
for(var i=0;i<_9a0.length;i++){
if(_9a0[i].name==name){
return _9a0[i];
}
}
return null;
};
MochiKit.Widget.TreeNode.prototype.findByPath=function(path){
var node=this;
for(var i=0;node!=null&&path!=null&&i<path.length;i++){
node=node.findChild(path[i]);
}
return node;
};
MochiKit.Widget.TreeNode.prototype.select=function(){
MochiKit.DOM.addElementClass(this.firstChild,"selected");
var tree=this.tree();
if(tree!=null){
tree._handleSelect(this);
}
this.expand();
};
MochiKit.Widget.TreeNode.prototype.unselect=function(){
if(this.isSelected()){
MochiKit.DOM.removeElementClass(this.firstChild,"selected");
var tree=this.tree();
if(tree!=null){
tree._handleSelect(null);
}
}
};
MochiKit.Widget.TreeNode.prototype.expand=function(){
var _9a7=this.parent();
if(_9a7!=null&&!_9a7.isExpanded()){
_9a7.expand();
}
var _9a8=this._container();
if(_9a8!=null&&!this.isExpanded()){
var _9a9=this.firstChild.firstChild;
_9a9.setAttrs({ref:"MINUS"});
MochiKit.DOM.removeElementClass(_9a8,"widgetHidden");
var tree=this.tree();
if(tree!=null){
tree._emitExpand(this);
}
}
};
MochiKit.Widget.TreeNode.prototype.expandAll=function(_9ab){
if(typeof (_9ab)!=="number"){
_9ab=10;
}
this.expand();
var _9ac=this.getChildNodes();
for(var i=0;_9ab>0&&i<_9ac.length;i++){
_9ac[i].expandAll(_9ab-1);
}
};
MochiKit.Widget.TreeNode.prototype.collapse=function(){
var _9ae=this._container();
if(_9ae!=null&&this.isExpanded()){
var _9af=this.firstChild.firstChild;
_9af.setAttrs({ref:"PLUS"});
MochiKit.DOM.addElementClass(_9ae,"widgetHidden");
var tree=this.tree();
if(tree!=null){
tree._emitExpand(this);
}
}
};
MochiKit.Widget.TreeNode.prototype.collapseAll=function(_9b1){
if(typeof (_9b1)!=="number"){
_9b1=0;
}
if(_9b1<=0){
this.collapse();
}
var _9b2=this.getChildNodes();
for(var i=0;i<_9b2.length;i++){
_9b2[i].collapseAll(_9b1-1);
}
};
MochiKit.Widget.TreeNode.prototype.toggle=function(evt){
if(evt){
evt.stop();
}
if(this.isExpanded()){
this.collapse();
}else{
this.expand();
}
};
MochiKit.Widget.Wizard=function(_9b5){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_9b5,MochiKit.Base.extend(null,arguments,1));
}
var o=MochiKit.DOM.DIV(_9b5);
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetWizard");
o._selectedIndex=-1;
o.appendChild(MochiKit.DOM.H3({"class":"widgetWizardTitle"}));
var _9b8=MochiKit.Widget.Button({style:{"margin-right":"10px"}},MochiKit.Widget.Icon({ref:"CANCEL"})," Cancel");
var _9b9=MochiKit.Widget.Button({style:{"margin-right":"10px"}},MochiKit.Widget.Icon({ref:"PREVIOUS"})," Previous");
var _9ba=MochiKit.Widget.Button({},"Next ",MochiKit.Widget.Icon({ref:"NEXT"}));
var _9bb=MochiKit.Widget.Button({highlight:true},MochiKit.Widget.Icon({ref:"OK"})," Finish");
_9b8.hide();
o.appendChild(MochiKit.DOM.DIV({"class":"widgetWizardButtons"},_9b8,_9b9,_9ba,_9bb));
MochiKit.Signal.connect(_9b8,"onclick",o,"cancel");
MochiKit.Signal.connect(_9b9,"onclick",o,"previous");
MochiKit.Signal.connect(_9ba,"onclick",o,"next");
MochiKit.Signal.connect(_9bb,"onclick",o,"done");
o._updateStatus();
o.addAll(MochiKit.Base.extend(null,arguments,1));
return o;
};
MochiKit.Widget.Wizard.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Wizard.prototype.getChildNodes=function(){
return MochiKit.Base.extend([],this.childNodes,2);
};
MochiKit.Widget.Wizard.prototype.addChildNode=function(_9bc){
if(!MochiKit.Widget.isWidget(_9bc,"Pane")){
_9bc=new MochiKit.Widget.Pane(null,_9bc);
}
MochiKit.Style.registerSizeConstraints(_9bc,"100%","100%-65");
_9bc.hide();
this.appendChild(_9bc);
if(this.getChildNodes().length==1){
this.activatePage(0);
}else{
this._updateStatus();
}
};
MochiKit.Widget.Wizard.prototype._updateStatus=function(){
var h3=this.childNodes[0];
var _9be=this.childNodes[1].childNodes[0];
var _9bf=this.childNodes[1].childNodes[1];
var _9c0=this.childNodes[1].childNodes[2];
var _9c1=this.childNodes[1].childNodes[3];
var page=this.activePage();
var _9c3=MochiKit.Widget.Pane.FORWARD;
var _9c4=null;
var info="(No pages available)";
var icon=null;
if(page!=null){
_9c3=page.pageStatus||MochiKit.Widget.Pane.ANY;
_9c4=page.pageTitle;
info=" (Step "+(this._selectedIndex+1)+" of "+this.getChildNodes().length+")";
}
if(_9c3===MochiKit.Widget.Pane.WORKING){
_9be.show();
_9bf.hide();
icon={ref:"LOADING","class":"widgetWizardWait"};
icon=MochiKit.Widget.Icon(icon);
}else{
_9be.hide();
_9bf.show();
}
if(this._selectedIndex>=this.getChildNodes().length-1){
_9c0.hide();
_9c1.show();
}else{
_9c0.show();
_9c1.hide();
}
_9bf.disabled=(this._selectedIndex<=0)||!_9c3.previous;
_9c0.disabled=!_9c3.next;
_9c1.disabled=!_9c3.next;
info=MochiKit.DOM.SPAN({"class":"widgetWizardInfo"},info);
MochiKit.DOM.replaceChildNodes(h3,icon,_9c4,info);
};
MochiKit.Widget.Wizard.prototype.activePage=function(){
if(this._selectedIndex>=0){
return this.childNodes[this._selectedIndex+2];
}else{
return null;
}
};
MochiKit.Widget.Wizard.prototype.activePageIndex=function(){
return this._selectedIndex;
};
MochiKit.Widget.Wizard.prototype.activatePage=function(_9c7){
if(typeof (_9c7)=="number"){
var _9c8=_9c7;
var page=this.childNodes[_9c8+2];
}else{
var page=_9c7;
var _9c8=MochiKit.Base.findIdentical(this.childNodes,page,2)-2;
}
if(_9c8<0||_9c8>=this.getChildNodes().length){
throw new RangeError("Page index out of bounds: "+_9c8);
}
var _9ca=this.activePage();
if(_9ca!=null){
if(!_9ca._handleExit({validateForm:this._selectedIndex<_9c8})){
return;
}
}
this._selectedIndex=_9c8;
this._updateStatus();
page._handleEnter({validateReset:true});
MochiKit.Widget.emitSignal(this,"onchange");
};
MochiKit.Widget.Wizard.prototype.cancel=function(){
var page=this.activePage();
page.setAttrs({pageStatus:MochiKit.Widget.Pane.ANY});
MochiKit.Widget.emitSignal(this,"oncancel");
};
MochiKit.Widget.Wizard.prototype.previous=function(){
if(this._selectedIndex>0){
this.activatePage(this._selectedIndex-1);
}
};
MochiKit.Widget.Wizard.prototype.next=function(){
if(this._selectedIndex<this.getChildNodes().length-1){
this.activatePage(this._selectedIndex+1);
}
};
MochiKit.Widget.Wizard.prototype.done=function(){
var page=this.activePage();
if(page!=null){
if(!page._handleExit({validateForm:true})){
return;
}
}
MochiKit.Widget.emitSignal(this,"onclose");
};
MochiKit.Widget.Wizard.prototype.resizeContent=function(){
var page=this.activePage();
if(page!=null){
MochiKit.Style.resizeElements(page);
}
};
MochiKit.Widget.Classes={Button:MochiKit.Widget.Button,Dialog:MochiKit.Widget.Dialog,Field:MochiKit.Widget.Field,Form:MochiKit.Widget.Form,FormValidator:MochiKit.Widget.FormValidator,Icon:MochiKit.Widget.Icon,Overlay:MochiKit.Widget.Overlay,Popup:MochiKit.Widget.Popup,Pane:MochiKit.Widget.Pane,ProgressBar:MochiKit.Widget.ProgressBar,TabContainer:MochiKit.Widget.TabContainer,Table:MochiKit.Widget.Table,TableColumn:MochiKit.Widget.TableColumn,TextArea:MochiKit.Widget.TextArea,TextField:MochiKit.Widget.TextField,Tree:MochiKit.Widget.Tree,TreeNode:MochiKit.Widget.TreeNode,Wizard:MochiKit.Widget.Wizard};

