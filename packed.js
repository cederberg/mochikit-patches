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
MochiKit.Base.VERSION="1.4";
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
},bindMethods:function(_be){
var _bf=MochiKit.Base.bind;
for(var k in _be){
var _c1=_be[k];
if(typeof (_c1)=="function"){
_be[k]=_bf(_c1,_be);
}
}
},registerComparator:function(_c2,_c3,_c4,_c5){
MochiKit.Base.comparatorRegistry.register(_c2,_c3,_c4,_c5);
},_primitives:{"boolean":true,"string":true,"number":true},compare:function(a,b){
if(a==b){
return 0;
}
var _c8=(typeof (a)=="undefined"||a===null);
var _c9=(typeof (b)=="undefined"||b===null);
if(_c8&&_c9){
return 0;
}else{
if(_c8){
return -1;
}else{
if(_c9){
return 1;
}
}
}
var m=MochiKit.Base;
var _cb=m._primitives;
if(!(typeof (a) in _cb&&typeof (b) in _cb)){
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
var _cc=m.repr;
throw new TypeError(_cc(a)+" and "+_cc(b)+" can not be compared");
},compareDateLike:function(a,b){
return MochiKit.Base.compare(a.getTime(),b.getTime());
},compareArrayLike:function(a,b){
var _d1=MochiKit.Base.compare;
var _d2=a.length;
var _d3=0;
if(_d2>b.length){
_d3=1;
_d2=b.length;
}else{
if(_d2<b.length){
_d3=-1;
}
}
for(var i=0;i<_d2;i++){
var cmp=_d1(a[i],b[i]);
if(cmp){
return cmp;
}
}
return _d3;
},registerRepr:function(_d6,_d7,_d8,_d9){
MochiKit.Base.reprRegistry.register(_d6,_d7,_d8,_d9);
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
var _db=(o+"");
}
catch(e){
return "["+typeof (o)+"]";
}
if(typeof (o)=="function"){
_db=_db.replace(/^\s+/,"").replace(/\s+/g," ");
_db=_db.replace(/,(\S)/,", $1");
var idx=_db.indexOf("{");
if(idx!=-1){
_db=_db.substr(0,idx)+"{...}";
}
}
return _db;
},reprArrayLike:function(o){
var m=MochiKit.Base;
return "["+m.map(m.repr,o).join(", ")+"]";
},reprString:function(o){
return ("\""+o.replace(/(["\\])/g,"\\$1")+"\"").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\v]/g,"\\v").replace(/[\r]/g,"\\r");
},reprNumber:function(o){
return o+"";
},registerJSON:function(_e1,_e2,_e3,_e4){
MochiKit.Base.jsonRegistry.register(_e1,_e2,_e3,_e4);
},evalJSON:function(){
return eval("("+MochiKit.Base._filterJSON(arguments[0])+")");
},_filterJSON:function(s){
var m=s.match(/^\s*\/\*(.*)\*\/\s*$/);
if(m){
return m[1];
}
return s;
},serializeJSON:function(o){
var _e8=typeof (o);
if(_e8=="number"||_e8=="boolean"){
return o+"";
}else{
if(o===null){
return "null";
}else{
if(_e8=="string"){
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
var _ee;
if(typeof (o.__json__)=="function"){
_ee=o.__json__();
if(o!==_ee){
return me(_ee);
}
}
if(typeof (o.json)=="function"){
_ee=o.json();
if(o!==_ee){
return me(_ee);
}
}
if(_e8!="function"&&typeof (o.length)=="number"){
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
_ee=m.jsonRegistry.match(o);
if(o!==_ee){
return me(_ee);
}
}
catch(e){
if(e!=m.NotFound){
throw e;
}
}
if(_e8=="undefined"){
throw new TypeError("undefined can not be serialized as JSON");
}
if(_e8=="function"){
return null;
}
res=[];
for(var k in o){
var _f2;
if(typeof (k)=="number"){
_f2="\""+k+"\"";
}else{
if(typeof (k)=="string"){
_f2=me(k);
}else{
continue;
}
}
val=me(o[k]);
if(typeof (val)!="string"){
continue;
}
res.push(_f2+":"+val);
}
return "{"+res.join(", ")+"}";
},objEqual:function(a,b){
return (MochiKit.Base.compare(a,b)===0);
},arrayEqual:function(_f5,arr){
if(_f5.length!=arr.length){
return false;
}
return (MochiKit.Base.compare(_f5,arr)===0);
},concat:function(){
var _f7=[];
var _f8=MochiKit.Base.extend;
for(var i=0;i<arguments.length;i++){
_f8(_f7,arguments[i]);
}
return _f7;
},keyComparator:function(key){
var m=MochiKit.Base;
var _fc=m.compare;
if(arguments.length==1){
return function(a,b){
return _fc(a[key],b[key]);
};
}
var _ff=m.extend(null,arguments);
return function(a,b){
var rval=0;
for(var i=0;(rval===0)&&(i<_ff.length);i++){
var key=_ff[i];
rval=_fc(a[key],b[key]);
}
return rval;
};
},reverseKeyComparator:function(key){
var _106=MochiKit.Base.keyComparator.apply(this,arguments);
return function(a,b){
return _106(b,a);
};
},partial:function(func){
var m=MochiKit.Base;
return m.bind.apply(this,m.extend([func,undefined],arguments,1));
},listMinMax:function(_10b,lst){
if(lst.length===0){
return null;
}
var cur=lst[0];
var _10e=MochiKit.Base.compare;
for(var i=1;i<lst.length;i++){
var o=lst[i];
if(_10e(o,cur)==_10b){
cur=o;
}
}
return cur;
},objMax:function(){
return MochiKit.Base.listMinMax(1,arguments);
},objMin:function(){
return MochiKit.Base.listMinMax(-1,arguments);
},findIdentical:function(lst,_112,_113,end){
if(typeof (end)=="undefined"||end===null){
end=lst.length;
}
if(typeof (_113)=="undefined"||_113===null){
_113=0;
}
for(var i=_113;i<end;i++){
if(lst[i]===_112){
return i;
}
}
return -1;
},mean:function(){
var sum=0;
var m=MochiKit.Base;
var args=m.extend(null,arguments);
var _119=args.length;
while(args.length){
var o=args.shift();
if(o&&typeof (o)=="object"&&typeof (o.length)=="number"){
_119+=o.length-1;
for(var i=o.length-1;i>=0;i--){
sum+=o[i];
}
}else{
sum+=o;
}
}
if(_119<=0){
throw new TypeError("mean() requires at least one argument");
}
return sum/_119;
},median:function(){
var data=MochiKit.Base.flattenArguments(arguments);
if(data.length===0){
throw new TypeError("median() requires at least one argument");
}
data.sort(compare);
if(data.length%2==0){
var _11d=data.length/2;
return (data[_11d]+data[_11d-1])/2;
}else{
return data[(data.length-1)/2];
}
},findValue:function(lst,_11f,_120,end){
if(typeof (end)=="undefined"||end===null){
end=lst.length;
}
if(typeof (_120)=="undefined"||_120===null){
_120=0;
}
var cmp=MochiKit.Base.compare;
for(var i=_120;i<end;i++){
if(cmp(lst[i],_11f)===0){
return i;
}
}
return -1;
},nodeWalk:function(node,_125){
var _126=[node];
var _127=MochiKit.Base.extend;
while(_126.length){
var res=_125(_126.shift());
if(res){
_127(_126,res);
}
}
},nameFunctions:function(_129){
var base=_129.NAME;
if(typeof (base)=="undefined"){
base="";
}else{
base=base+".";
}
for(var name in _129){
var o=_129[name];
if(typeof (o)=="function"&&typeof (o.NAME)=="undefined"){
try{
o.NAME=base+name;
}
catch(e){
}
}
}
},queryString:function(_12d,_12e){
if(typeof (MochiKit.DOM)!="undefined"&&arguments.length==1&&(typeof (_12d)=="string"||(typeof (_12d.nodeType)!="undefined"&&_12d.nodeType>0))){
var kv=MochiKit.DOM.formContents(_12d);
_12d=kv[0];
_12e=kv[1];
}else{
if(arguments.length==1){
if(typeof (_12d.length)=="number"&&_12d.length==2){
return arguments.callee(_12d[0],_12d[1]);
}
var o=_12d;
_12d=[];
_12e=[];
for(var k in o){
var v=o[k];
if(typeof (v)=="function"){
continue;
}else{
if(MochiKit.Base.isArrayLike(v)){
for(var i=0;i<v.length;i++){
_12d.push(k);
_12e.push(v[i]);
}
}else{
_12d.push(k);
_12e.push(v);
}
}
}
}
}
var rval=[];
var len=Math.min(_12d.length,_12e.length);
var _136=MochiKit.Base.urlEncode;
for(var i=0;i<len;i++){
v=_12e[i];
if(typeof (v)!="undefined"&&v!==null){
rval.push(_136(_12d[i])+"="+_136(v));
}
}
return rval.join("&");
},parseQueryString:function(_137,_138){
var qstr=(_137.charAt(0)=="?")?_137.substring(1):_137;
var _13a=qstr.replace(/\+/g,"%20").split(/\&amp\;|\&\#38\;|\&#x26;|\&/);
var o={};
var _13c;
if(typeof (decodeURIComponent)!="undefined"){
_13c=decodeURIComponent;
}else{
_13c=unescape;
}
if(_138){
for(var i=0;i<_13a.length;i++){
var pair=_13a[i].split("=");
var name=_13c(pair.shift());
if(!name){
continue;
}
var arr=o[name];
if(!(arr instanceof Array)){
arr=[];
o[name]=arr;
}
arr.push(_13c(pair.join("=")));
}
}else{
for(i=0;i<_13a.length;i++){
pair=_13a[i].split("=");
var name=pair.shift();
if(!name){
continue;
}
o[_13c(name)]=_13c(pair.join("="));
}
}
return o;
}});
MochiKit.Base.AdapterRegistry=function(){
this.pairs=[];
};
MochiKit.Base.AdapterRegistry.prototype={register:function(name,_142,wrap,_144){
if(_144){
this.pairs.unshift([name,_142,wrap]);
}else{
this.pairs.push([name,_142,wrap]);
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
MochiKit.Base.EXPORT=["flattenArray","noop","camelize","counter","clone","extend","update","updatetree","setdefault","keys","values","items","NamedError","operator","forwardCall","itemgetter","typeMatcher","isCallable","isUndefined","isUndefinedOrNull","isNull","isEmpty","isNotEmpty","isArrayLike","isDateLike","xmap","map","xfilter","filter","methodcaller","compose","bind","bindMethods","NotFound","AdapterRegistry","registerComparator","compare","registerRepr","repr","objEqual","arrayEqual","concat","keyComparator","reverseKeyComparator","partial","merge","listMinMax","listMax","listMin","objMax","objMin","nodeWalk","zip","urlEncode","queryString","serializeJSON","registerJSON","evalJSON","parseQueryString","findValue","findIdentical","flattenArguments","method","average","mean","median"];
MochiKit.Base.EXPORT_OK=["nameFunctions","comparatorRegistry","reprRegistry","jsonRegistry","compareDateLike","compareArrayLike","reprArrayLike","reprString","reprNumber"];
MochiKit.Base._exportSymbols=function(_14a,_14b){
if(!MochiKit.__export__){
return;
}
var all=_14b.EXPORT_TAGS[":all"];
for(var i=0;i<all.length;i++){
_14a[all[i]]=_14b[all[i]];
}
};
MochiKit.Base.__new__=function(){
var m=this;
m.noop=m.operator.identity;
m.forward=m.forwardCall;
m.find=m.findValue;
if(typeof (encodeURIComponent)!="undefined"){
m.urlEncode=function(_14f){
return encodeURIComponent(_14f).replace(/\'/g,"%27");
};
}else{
m.urlEncode=function(_150){
return escape(_150).replace(/\+/g,"%2B").replace(/\"/g,"%22").rval.replace(/\'/g,"%27");
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
MochiKit.Iter.VERSION="1.4";
MochiKit.Base.update(MochiKit.Iter,{__repr__:function(){
return "["+this.NAME+" "+this.VERSION+"]";
},toString:function(){
return this.__repr__();
},registerIteratorFactory:function(name,_154,_155,_156){
MochiKit.Iter.iteratorRegistry.register(name,_154,_155,_156);
},iter:function(_157,_158){
var self=MochiKit.Iter;
if(arguments.length==2){
return self.takewhile(function(a){
return a!=_158;
},_157);
}
if(typeof (_157.next)=="function"){
return _157;
}else{
if(typeof (_157.iter)=="function"){
return _157.iter();
}
}
try{
return self.iteratorRegistry.match(_157);
}
catch(e){
var m=MochiKit.Base;
if(e==m.NotFound){
e=new TypeError(typeof (_157)+": "+m.repr(_157)+" is not iterable");
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
var _162=self.iter(p);
return {repr:function(){
return "cycle(...)";
},toString:m.forwardCall("repr"),next:function(){
try{
var rval=_162.next();
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
},next:function(_168){
return _168.next();
},izip:function(p,q){
var m=MochiKit.Base;
var self=MochiKit.Iter;
var next=self.next;
var _16e=m.map(self.iter,arguments);
return {repr:function(){
return "izip(...)";
},toString:m.forwardCall("repr"),next:function(){
return m.map(next,_16e);
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
var _17a=0;
var stop=0;
var step=1;
var i=-1;
if(arguments.length==2){
stop=arguments[1];
}else{
if(arguments.length==3){
_17a=arguments[1];
stop=arguments[2];
}else{
_17a=arguments[1];
stop=arguments[2];
step=arguments[3];
}
}
return {repr:function(){
return "islice("+["...",_17a,stop,step].join(", ")+")";
},toString:m.forwardCall("repr"),next:function(){
var rval;
while(i<_17a){
rval=seq.next();
i++;
}
if(_17a>=stop){
throw self.StopIteration;
}
_17a+=step;
return rval;
}};
},imap:function(fun,p,q){
var m=MochiKit.Base;
var self=MochiKit.Iter;
var _184=m.map(self.iter,m.extend(null,arguments,1));
var map=m.map;
var next=self.next;
return {repr:function(){
return "imap(...)";
},toString:m.forwardCall("repr"),next:function(){
return fun.apply(this,map(next,_184));
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
var _18f=m.map(self.iter,arguments);
return {repr:function(){
return "chain(...)";
},toString:m.forwardCall("repr"),next:function(){
while(_18f.length>1){
try{
var _190=_18f[0].next();
return _190;
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
_18f.shift();
var _190=_18f[0].next();
return _190;
}
}
if(_18f.length==1){
var arg=_18f.shift();
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
},_tee:function(_19b,sync,_19d){
sync.pos[_19b]=-1;
var m=MochiKit.Base;
var _19f=m.listMin;
return {repr:function(){
return "tee("+_19b+", ...)";
},toString:m.forwardCall("repr"),next:function(){
var rval;
var i=sync.pos[_19b];
if(i==sync.max){
rval=_19d.next();
sync.deque.push(rval);
sync.max+=1;
sync.pos[_19b]+=1;
}else{
rval=sync.deque[i-sync.min];
sync.pos[_19b]+=1;
if(i==sync.min&&_19f(sync.pos)!=sync.min){
sync.min+=1;
sync.deque.shift();
}
}
return rval;
}};
},tee:function(_1a2,n){
var rval=[];
var sync={"pos":[],"deque":[],"max":-1,"min":-1};
if(arguments.length==1||typeof (n)=="undefined"||n===null){
n=2;
}
var self=MochiKit.Iter;
_1a2=self.iter(_1a2);
var _tee=self._tee;
for(var i=0;i<n;i++){
rval.push(_tee(i,sync,_1a2));
}
return rval;
},list:function(_1a9){
var rval;
if(_1a9 instanceof Array){
return _1a9.slice();
}
if(typeof (_1a9)=="function"&&!(_1a9 instanceof Function)&&typeof (_1a9.length)=="number"){
rval=[];
for(var i=0;i<_1a9.length;i++){
rval.push(_1a9[i]);
}
return rval;
}
var self=MochiKit.Iter;
_1a9=self.iter(_1a9);
var rval=[];
var _1ad;
try{
while(true){
_1ad=_1a9.next();
rval.push(_1ad);
}
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
return rval;
}
return undefined;
},reduce:function(fn,_1af,_1b0){
var i=0;
var x=_1b0;
var self=MochiKit.Iter;
_1af=self.iter(_1af);
if(arguments.length<3){
try{
x=_1af.next();
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
x=fn(x,_1af.next());
}
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
}
return x;
},range:function(){
var _1b4=0;
var stop=0;
var step=1;
if(arguments.length==1){
stop=arguments[0];
}else{
if(arguments.length==2){
_1b4=arguments[0];
stop=arguments[1];
}else{
if(arguments.length==3){
_1b4=arguments[0];
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
if((step>0&&_1b4>=stop)||(step<0&&_1b4<=stop)){
throw MochiKit.Iter.StopIteration;
}
var rval=_1b4;
_1b4+=step;
return rval;
},repr:function(){
return "range("+[_1b4,stop,step].join(", ")+")";
},toString:MochiKit.Base.forwardCall("repr")};
},sum:function(_1b8,_1b9){
if(typeof (_1b9)=="undefined"||_1b9===null){
_1b9=0;
}
var x=_1b9;
var self=MochiKit.Iter;
_1b8=self.iter(_1b8);
try{
while(true){
x+=_1b8.next();
}
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
}
return x;
},exhaust:function(_1bc){
var self=MochiKit.Iter;
_1bc=self.iter(_1bc);
try{
while(true){
_1bc.next();
}
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
}
},forEach:function(_1be,func,self){
var m=MochiKit.Base;
if(arguments.length>2){
func=m.bind(func,self);
}
if(m.isArrayLike(_1be)){
try{
for(var i=0;i<_1be.length;i++){
func(_1be[i]);
}
}
catch(e){
if(e!=MochiKit.Iter.StopIteration){
throw e;
}
}
}else{
self=MochiKit.Iter;
self.exhaust(self.imap(func,_1be));
}
},every:function(_1c3,func){
var self=MochiKit.Iter;
try{
self.ifilterfalse(func,_1c3).next();
return false;
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
return true;
}
},sorted:function(_1c6,cmp){
var rval=MochiKit.Iter.list(_1c6);
if(arguments.length==1){
cmp=MochiKit.Base.compare;
}
rval.sort(cmp);
return rval;
},reversed:function(_1c9){
var rval=MochiKit.Iter.list(_1c9);
rval.reverse();
return rval;
},some:function(_1cb,func){
var self=MochiKit.Iter;
try{
self.ifilter(func,_1cb).next();
return true;
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
return false;
}
},iextend:function(lst,_1cf){
if(MochiKit.Base.isArrayLike(_1cf)){
for(var i=0;i<_1cf.length;i++){
lst.push(_1cf[i]);
}
}else{
var self=MochiKit.Iter;
_1cf=self.iter(_1cf);
try{
while(true){
lst.push(_1cf.next());
}
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
}
}
return lst;
},groupby:function(_1d2,_1d3){
var m=MochiKit.Base;
var self=MochiKit.Iter;
if(arguments.length<2){
_1d3=m.operator.identity;
}
_1d2=self.iter(_1d2);
var pk=undefined;
var k=undefined;
var v;
function fetch(){
v=_1d2.next();
k=_1d3(v);
}
function eat(){
var ret=v;
v=undefined;
return ret;
}
var _1da=true;
var _1db=m.compare;
return {repr:function(){
return "groupby(...)";
},next:function(){
while(_1db(k,pk)===0){
fetch();
if(_1da){
_1da=false;
break;
}
}
pk=k;
return [k,{next:function(){
if(v==undefined){
fetch();
}
if(_1db(k,pk)!==0){
throw self.StopIteration;
}
return eat();
}}];
}};
},groupby_as_array:function(_1dc,_1dd){
var m=MochiKit.Base;
var self=MochiKit.Iter;
if(arguments.length<2){
_1dd=m.operator.identity;
}
_1dc=self.iter(_1dc);
var _1e0=[];
var _1e1=true;
var _1e2;
var _1e3=m.compare;
while(true){
try{
var _1e4=_1dc.next();
var key=_1dd(_1e4);
}
catch(e){
if(e==self.StopIteration){
break;
}
throw e;
}
if(_1e1||_1e3(key,_1e2)!==0){
var _1e6=[];
_1e0.push([key,_1e6]);
}
_1e6.push(_1e4);
_1e1=false;
_1e2=key;
}
return _1e0;
},arrayLikeIter:function(_1e7){
var i=0;
return {repr:function(){
return "arrayLikeIter(...)";
},toString:MochiKit.Base.forwardCall("repr"),next:function(){
if(i>=_1e7.length){
throw MochiKit.Iter.StopIteration;
}
return _1e7[i++];
}};
},hasIterateNext:function(_1e9){
return (_1e9&&typeof (_1e9.iterateNext)=="function");
},iterateNextIter:function(_1ea){
return {repr:function(){
return "iterateNextIter(...)";
},toString:MochiKit.Base.forwardCall("repr"),next:function(){
var rval=_1ea.iterateNext();
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
MochiKit.Logging.VERSION="1.4";
MochiKit.Logging.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.Logging.toString=function(){
return this.__repr__();
};
MochiKit.Logging.EXPORT=["LogLevel","LogMessage","Logger","alertListener","logger","log","logError","logDebug","logFatal","logWarning"];
MochiKit.Logging.EXPORT_OK=["logLevelAtLeast","isLogMessage","compareLogMessage"];
MochiKit.Logging.LogMessage=function(num,_1ee,info){
this.num=num;
this.level=_1ee;
this.info=info;
this.timestamp=new Date();
};
MochiKit.Logging.LogMessage.prototype={repr:function(){
var m=MochiKit.Base;
return "LogMessage("+m.map(m.repr,[this.num,this.level,this.info]).join(", ")+")";
},toString:MochiKit.Base.forwardCall("repr")};
MochiKit.Base.update(MochiKit.Logging,{logLevelAtLeast:function(_1f1){
var self=MochiKit.Logging;
if(typeof (_1f1)=="string"){
_1f1=self.LogLevel[_1f1];
}
return function(msg){
var _1f4=msg.level;
if(typeof (_1f4)=="string"){
_1f4=self.LogLevel[_1f4];
}
return _1f4>=_1f1;
};
},isLogMessage:function(){
var _1f5=MochiKit.Logging.LogMessage;
for(var i=0;i<arguments.length;i++){
if(!(arguments[i] instanceof _1f5)){
return false;
}
}
return true;
},compareLogMessage:function(a,b){
return MochiKit.Base.compare([a.level,a.info],[b.level,b.info]);
},alertListener:function(msg){
alert("num: "+msg.num+"\nlevel: "+msg.level+"\ninfo: "+msg.info.join(" "));
}});
MochiKit.Logging.Logger=function(_1fa){
this.counter=0;
if(typeof (_1fa)=="undefined"||_1fa===null){
_1fa=-1;
}
this.maxSize=_1fa;
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
},addListener:function(_1ff,_200,_201){
if(typeof (_200)=="string"){
_200=MochiKit.Logging.logLevelAtLeast(_200);
}
var _202=[_200,_201];
_202.ident=_1ff;
this.listeners[_1ff]=_202;
},removeListener:function(_203){
delete this.listeners[_203];
},baseLog:function(_204,_205){
var msg=new MochiKit.Logging.LogMessage(this.counter,_204,MochiKit.Base.extend(null,arguments,1));
this._messages.push(msg);
this.dispatchListeners(msg);
if(this.useNativeConsole){
this.logToConsole(msg.level+": "+msg.info.join(" "));
}
this.counter+=1;
while(this.maxSize>=0&&this._messages.length>this.maxSize){
this._messages.shift();
}
},getMessages:function(_207){
var _208=0;
if(!(typeof (_207)=="undefined"||_207===null)){
_208=Math.max(0,this._messages.length-_207);
}
return this._messages.slice(_208);
},getMessageText:function(_209){
if(typeof (_209)=="undefined"||_209===null){
_209=30;
}
var _20a=this.getMessages(_209);
if(_20a.length){
var lst=map(function(m){
return "\n  ["+m.num+"] "+m.level+": "+m.info.join(" ");
},_20a);
lst.unshift("LAST "+_20a.length+" MESSAGES:");
return lst.join("");
}
return "";
},debuggingBookmarklet:function(_20d){
if(typeof (MochiKit.LoggingPane)=="undefined"){
alert(this.getMessageText());
}else{
MochiKit.LoggingPane.createLoggingPane(_20d||false);
}
}};
MochiKit.Logging.__new__=function(){
this.LogLevel={ERROR:40,FATAL:50,WARNING:30,INFO:20,DEBUG:10};
var m=MochiKit.Base;
m.registerComparator("LogMessage",this.isLogMessage,this.compareLogMessage);
var _20f=m.partial;
var _210=this.Logger;
var _211=_210.prototype.baseLog;
m.update(this.Logger.prototype,{debug:_20f(_211,"DEBUG"),log:_20f(_211,"INFO"),error:_20f(_211,"ERROR"),fatal:_20f(_211,"FATAL"),warning:_20f(_211,"WARNING")});
var self=this;
var _213=function(name){
return function(){
self.logger[name].apply(self.logger,arguments);
};
};
this.log=_213("log");
this.logError=_213("error");
this.logDebug=_213("debug");
this.logFatal=_213("fatal");
this.logWarning=_213("warning");
this.logger=new _210();
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
MochiKit.DateTime.VERSION="1.4";
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
var year,_21c,day,hour,min,sec,msec;
year=parseInt(res[1],10);
if(typeof (res[2])=="undefined"||res[2]===""){
return new Date(year);
}
_21c=parseInt(res[2],10)-1;
day=parseInt(res[3],10);
if(typeof (res[4])=="undefined"||res[4]===""){
return new Date(year,_21c,day);
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
return new Date(year,_21c,day,hour,min,sec,msec);
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
return new Date(Date.UTC(year,_21c,day,hour,min,sec,msec)-ofs);
};
MochiKit.DateTime.toISOTime=function(date,_224){
if(typeof (date)=="undefined"||date===null){
return null;
}
var hh=date.getHours();
var mm=date.getMinutes();
var ss=date.getSeconds();
var lst=[((_224&&(hh<10))?"0"+hh:hh),((mm<10)?"0"+mm:mm),((ss<10)?"0"+ss:ss)];
return lst.join(":");
};
MochiKit.DateTime.toISOTimestamp=function(date,_22a){
if(typeof (date)=="undefined"||date===null){
return null;
}
var sep=_22a?"T":" ";
var foot=_22a?"Z":"";
if(_22a){
date=new Date(date.getTime()+(date.getTimezoneOffset()*60000));
}
return MochiKit.DateTime.toISODate(date)+sep+MochiKit.DateTime.toISOTime(date,_22a)+foot;
};
MochiKit.DateTime.toISODate=function(date){
if(typeof (date)=="undefined"||date===null){
return null;
}
var _22e=MochiKit.DateTime._padTwo;
var _22f=MochiKit.DateTime._padFour;
return [_22f(date.getFullYear()),_22e(date.getMonth()+1),_22e(date.getDate())].join("-");
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
var _235=MochiKit.DateTime._padTwo;
return [_235(d.getMonth()+1),_235(d.getDate()),d.getFullYear()].join("/");
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
(function(_23a,_23b){
if((typeof (JSAN)=="undefined"&&typeof (dojo)=="undefined")||(MochiKit.__export__===false)){
var all=_23b.EXPORT_TAGS[":all"];
for(var i=0;i<all.length;i++){
_23a[all[i]]=_23b[all[i]];
}
}
})(this,MochiKit.DateTime);
}
MochiKit.Base._deps("Format",["Base"]);
MochiKit.Format.NAME="MochiKit.Format";
MochiKit.Format.VERSION="1.4";
MochiKit.Format.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.Format.toString=function(){
return this.__repr__();
};
MochiKit.Format._numberFormatter=function(_23e,_23f,_240,_241,_242,_243,_244,_245,_246){
return function(num){
num=parseFloat(num);
if(typeof (num)=="undefined"||num===null||isNaN(num)){
return _23e;
}
var _248=_23f;
var _249=_240;
if(num<0){
num=-num;
}else{
_248=_248.replace(/-/,"");
}
var me=arguments.callee;
var fmt=MochiKit.Format.formatLocale(_241);
if(_242){
num=num*100;
_249=fmt.percent+_249;
}
num=MochiKit.Format.roundToFixed(num,_243);
var _24c=num.split(/\./);
var _24d=_24c[0];
var frac=(_24c.length==1)?"":_24c[1];
var res="";
while(_24d.length<_244){
_24d="0"+_24d;
}
if(_245){
while(_24d.length>_245){
var i=_24d.length-_245;
res=fmt.separator+_24d.substring(i,_24d.length)+res;
_24d=_24d.substring(0,i);
}
}
res=_24d+res;
if(_243>0){
while(frac.length<_246){
frac=frac+"0";
}
res=res+fmt.decimal+frac;
}
return _248+res+_249;
};
};
MochiKit.Format.numberFormatter=function(_251,_252,_253){
if(typeof (_252)=="undefined"){
_252="";
}
var _254=_251.match(/((?:[0#]+,)?[0#]+)(?:\.([0#]+))?(%)?/);
if(!_254){
throw TypeError("Invalid pattern");
}
var _255=_251.substr(0,_254.index);
var _256=_251.substr(_254.index+_254[0].length);
if(_255.search(/-/)==-1){
_255=_255+"-";
}
var _257=_254[1];
var frac=(typeof (_254[2])=="string"&&_254[2]!="")?_254[2]:"";
var _259=(typeof (_254[3])=="string"&&_254[3]!="");
var tmp=_257.split(/,/);
var _25b;
if(typeof (_253)=="undefined"){
_253="default";
}
if(tmp.length==1){
_25b=null;
}else{
_25b=tmp[1].length;
}
var _25c=_257.length-_257.replace(/0/g,"").length;
var _25d=frac.length-frac.replace(/0/g,"").length;
var _25e=frac.length;
var rval=MochiKit.Format._numberFormatter(_252,_255,_256,_253,_259,_25e,_25c,_25b,_25d);
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
MochiKit.Format.formatLocale=function(_263){
if(typeof (_263)=="undefined"||_263===null){
_263="default";
}
if(typeof (_263)=="string"){
var rval=MochiKit.Format.LOCALE[_263];
if(typeof (rval)=="string"){
rval=arguments.callee(rval);
MochiKit.Format.LOCALE[_263]=rval;
}
return rval;
}else{
return _263;
}
};
MochiKit.Format.twoDigitAverage=function(_265,_266){
if(_266){
var res=_265/_266;
if(!isNaN(res)){
return MochiKit.Format.twoDigitFloat(res);
}
}
return "0";
};
MochiKit.Format.twoDigitFloat=function(_268){
var res=roundToFixed(_268,2);
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
MochiKit.Format.lstrip=function(str,_26b){
str=str+"";
if(typeof (str)!="string"){
return null;
}
if(!_26b){
return str.replace(/^\s+/,"");
}else{
return str.replace(new RegExp("^["+_26b+"]+"),"");
}
};
MochiKit.Format.rstrip=function(str,_26d){
str=str+"";
if(typeof (str)!="string"){
return null;
}
if(!_26d){
return str.replace(/\s+$/,"");
}else{
return str.replace(new RegExp("["+_26d+"]+$"),"");
}
};
MochiKit.Format.strip=function(str,_26f){
var self=MochiKit.Format;
return self.rstrip(self.lstrip(str,_26f),_26f);
};
MochiKit.Format.truncToFixed=function(_271,_272){
var res=Math.floor(_271).toFixed(0);
if(_271<0){
res=Math.ceil(_271).toFixed(0);
if(res.charAt(0)!="-"&&_272>0){
res="-"+res;
}
}
if(res.indexOf("e")<0&&_272>0){
var tail=_271.toString();
if(tail.indexOf("e")>0){
tail=".";
}else{
if(tail.indexOf(".")<0){
tail=".";
}else{
tail=tail.substring(tail.indexOf("."));
}
}
if(tail.length-1>_272){
tail=tail.substring(0,_272+1);
}
while(tail.length-1<_272){
tail+="0";
}
res+=tail;
}
return res;
};
MochiKit.Format.roundToFixed=function(_275,_276){
var _277=Math.abs(_275)+0.5*Math.pow(10,-_276);
var res=MochiKit.Format.truncToFixed(_277,_276);
if(_275<0){
res="-"+res;
}
return res;
};
MochiKit.Format.percentFormat=function(_279){
return MochiKit.Format.twoDigitFloat(100*_279)+"%";
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
(function(_27e,_27f){
if((typeof (JSAN)=="undefined"&&typeof (dojo)=="undefined")||(MochiKit.__export__===false)){
var all=_27f.EXPORT_TAGS[":all"];
for(var i=0;i<all.length;i++){
_27e[all[i]]=_27f[all[i]];
}
}
})(this,MochiKit.Format);
}
MochiKit.Base._deps("Async",["Base"]);
MochiKit.Async.NAME="MochiKit.Async";
MochiKit.Async.VERSION="1.4";
MochiKit.Async.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.Async.toString=function(){
return this.__repr__();
};
MochiKit.Async.Deferred=function(_282){
this.chain=[];
this.id=this._nextId();
this.fired=-1;
this.paused=0;
this.results=[null,null];
this.canceller=_282;
this.silentlyCancelled=false;
this.chained=false;
};
MochiKit.Async.Deferred.prototype={repr:function(){
var _283;
if(this.fired==-1){
_283="unfired";
}else{
if(this.fired===0){
_283="success";
}else{
_283="error";
}
}
return "Deferred("+this.id+", "+_283+")";
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
var _28e=this.chain;
var _28f=this.fired;
var res=this.results[_28f];
var self=this;
var cb=null;
while(_28e.length>0&&this.paused===0){
var pair=_28e.shift();
var f=pair[_28f];
if(f===null){
continue;
}
try{
res=f(res);
_28f=((res instanceof Error)?1:0);
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
_28f=1;
if(!(err instanceof Error)){
err=new MochiKit.Async.GenericError(err);
}
res=err;
}
}
this.fired=_28f;
this.results[_28f]=res;
if(cb&&this.paused){
res.addBoth(cb);
res.chained=true;
}
}};
MochiKit.Base.update(MochiKit.Async,{evalJSONRequest:function(req){
return MochiKit.Base.evalJSON(req.responseText);
},succeed:function(_297){
var d=new MochiKit.Async.Deferred();
d.callback.apply(d,arguments);
return d;
},fail:function(_299){
var d=new MochiKit.Async.Deferred();
d.errback.apply(d,arguments);
return d;
},getXMLHttpRequest:function(){
var self=arguments.callee;
if(!self.XMLHttpRequest){
var _29c=[function(){
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
for(var i=0;i<_29c.length;i++){
var func=_29c[i];
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
var _2a1=null;
try{
_2a1=this.status;
if(!_2a1&&m.isNotEmpty(this.responseText)){
_2a1=304;
}
}
catch(e){
}
if(_2a1==200||_2a1==201||_2a1==204||_2a1==304||_2a1==1223){
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
},sendXMLHttpRequest:function(req,_2a5){
if(typeof (_2a5)=="undefined"||_2a5===null){
_2a5="";
}
var m=MochiKit.Base;
var self=MochiKit.Async;
var d=new self.Deferred(m.partial(self._xhr_canceller,req));
try{
req.onreadystatechange=m.bind(self._xhr_onreadystatechange,req,d);
req.send(_2a5);
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
var _2b2=opts.headers;
if(!m.isArrayLike(_2b2)){
_2b2=m.items(_2b2);
}
for(var i=0;i<_2b2.length;i++){
var _2b4=_2b2[i];
var name=_2b4[0];
var _2b6=_2b4[1];
req.setRequestHeader(name,_2b6);
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
},wait:function(_2bf,_2c0){
var d=new MochiKit.Async.Deferred();
var m=MochiKit.Base;
if(typeof (_2c0)!="undefined"){
d.addCallback(function(){
return _2c0;
});
}
var _2c3=setTimeout(m.bind("callback",d),Math.floor(_2bf*1000));
d.canceller=function(){
try{
clearTimeout(_2c3);
}
catch(e){
}
};
return d;
},callLater:function(_2c4,func){
var m=MochiKit.Base;
var _2c7=m.partial.apply(m,m.extend(null,arguments,1));
return MochiKit.Async.wait(_2c4).addCallback(function(res){
return _2c7();
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
var _2ca;
if(this.locked){
_2ca="locked, "+this.waiting.length+" waiting";
}else{
_2ca="unlocked";
}
return "DeferredLock("+this.id+", "+_2ca+")";
},toString:MochiKit.Base.forwardCall("repr")};
MochiKit.Async.DeferredList=function(list,_2cc,_2cd,_2ce,_2cf){
MochiKit.Async.Deferred.apply(this,[_2cf]);
this.list=list;
var _2d0=[];
this.resultList=_2d0;
this.finishedCount=0;
this.fireOnOneCallback=_2cc;
this.fireOnOneErrback=_2cd;
this.consumeErrors=_2ce;
var cb=MochiKit.Base.bind(this._cbDeferred,this);
for(var i=0;i<list.length;i++){
var d=list[i];
_2d0.push(undefined);
d.addCallback(cb,i,true);
d.addErrback(cb,i,false);
}
if(list.length===0&&!_2cc){
this.callback(this.resultList);
}
};
MochiKit.Async.DeferredList.prototype=new MochiKit.Async.Deferred();
MochiKit.Async.DeferredList.prototype._cbDeferred=function(_2d4,_2d5,_2d6){
this.resultList[_2d4]=[_2d5,_2d6];
this.finishedCount+=1;
if(this.fired==-1){
if(_2d5&&this.fireOnOneCallback){
this.callback([_2d4,_2d6]);
}else{
if(!_2d5&&this.fireOnOneErrback){
this.errback(_2d6);
}else{
if(this.finishedCount==this.list.length){
this.callback(this.resultList);
}
}
}
}
if(!_2d5&&this.consumeErrors){
_2d6=null;
}
return _2d6;
};
MochiKit.Async.gatherResults=function(_2d7){
var d=new MochiKit.Async.DeferredList(_2d7,false,true,false);
d.addCallback(function(_2d9){
var ret=[];
for(var i=0;i<_2d9.length;i++){
ret.push(_2d9[i][1]);
}
return ret;
});
return d;
};
MochiKit.Async.maybeDeferred=function(func){
var self=MochiKit.Async;
var _2de;
try{
var r=func.apply(null,MochiKit.Base.extend([],arguments,1));
if(r instanceof self.Deferred){
_2de=r;
}else{
if(r instanceof Error){
_2de=self.fail(r);
}else{
_2de=self.succeed(r);
}
}
}
catch(e){
_2de=self.fail(e);
}
return _2de;
};
MochiKit.Async.EXPORT=["AlreadyCalledError","CancelledError","BrowserComplianceError","GenericError","XMLHttpRequestError","Deferred","succeed","fail","getXMLHttpRequest","doSimpleXMLHttpRequest","loadJSONDoc","wait","callLater","sendXMLHttpRequest","DeferredLock","DeferredList","gatherResults","maybeDeferred","doXHR"];
MochiKit.Async.EXPORT_OK=["evalJSONRequest"];
MochiKit.Async.__new__=function(){
var m=MochiKit.Base;
var ne=m.partial(m._newNamedError,this);
ne("AlreadyCalledError",function(_2e2){
this.deferred=_2e2;
});
ne("CancelledError",function(_2e3){
this.deferred=_2e3;
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
MochiKit.DOM.VERSION="1.4";
MochiKit.DOM.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.DOM.toString=function(){
return this.__repr__();
};
MochiKit.DOM.EXPORT=["removeEmptyTextNodes","formContents","currentWindow","currentDocument","withWindow","withDocument","registerDOMConverter","coerceToDOM","createDOM","createDOMFunc","isChildNode","getNodeAttribute","removeNodeAttribute","setNodeAttribute","updateNodeAttributes","appendChildNodes","insertSiblingNodesAfter","insertSiblingNodesBefore","replaceChildNodes","removeElement","swapDOM","BUTTON","TT","PRE","H1","H2","H3","H4","H5","H6","BR","CANVAS","HR","LABEL","TEXTAREA","FORM","STRONG","SELECT","OPTION","OPTGROUP","LEGEND","FIELDSET","P","UL","OL","LI","DL","DT","DD","TD","TR","THEAD","TBODY","TFOOT","TABLE","TH","INPUT","SPAN","A","DIV","IMG","getElement","$","getElementsByTagAndClassName","addToCallStack","addLoadEvent","focusOnLoad","setElementClass","toggleElementClass","addElementClass","removeElementClass","swapElementClass","hasElementClass","escapeHTML","toHTML","emitHTML","scrapeText","isParent","getFirstParentByTagAndClassName","makeClipping","undoClipping","makePositioned","undoPositioned","getFirstElementByTagAndClassName"];
MochiKit.DOM.EXPORT_OK=["domConverters"];
MochiKit.DOM.DEPRECATED=[["computedStyle","MochiKit.Style.getStyle","1.4"],["elementDimensions","MochiKit.Style.getElementDimensions","1.4"],["elementPosition","MochiKit.Style.getElementPosition","1.4"],["hideElement","MochiKit.Style.hideElement","1.4"],["setElementDimensions","MochiKit.Style.setElementDimensions","1.4"],["setElementPosition","MochiKit.Style.setElementPosition","1.4"],["setDisplayForElement","MochiKit.Style.setDisplayForElement","1.4"],["setOpacity","MochiKit.Style.setOpacity","1.4"],["showElement","MochiKit.Style.showElement","1.4"],["Coordinates","MochiKit.Style.Coordinates","1.4"],["Dimensions","MochiKit.Style.Dimensions","1.4"]];
MochiKit.DOM.getViewportDimensions=new Function(""+"if (!MochiKit[\"Style\"]) {"+"    throw new Error(\"This function has been deprecated and depends on MochiKit.Style.\");"+"}"+"return MochiKit.Style.getViewportDimensions.apply(this, arguments);");
MochiKit.Base.update(MochiKit.DOM,{currentWindow:function(){
return MochiKit.DOM._window;
},currentDocument:function(){
return MochiKit.DOM._document;
},withWindow:function(win,func){
var self=MochiKit.DOM;
var _2eb=self._document;
var _2ec=self._window;
var rval;
try{
self._window=win;
self._document=win.document;
rval=func();
}
catch(e){
self._window=_2ec;
self._document=_2eb;
throw e;
}
self._window=_2ec;
self._document=_2eb;
return rval;
},formContents:function(elem){
var _2ef=[];
var _2f0=[];
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
var _2f5=elem.tagName.toUpperCase();
if(_2f5==="INPUT"&&(elem.type=="radio"||elem.type=="checkbox")&&!elem.checked){
return null;
}
if(_2f5==="SELECT"){
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
_2ef.push(name);
_2f0.push(v);
return null;
}
_2ef.push(name);
_2f0.push("");
return null;
}else{
var opts=elem.options;
if(!opts.length){
_2ef.push(name);
_2f0.push("");
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
_2ef.push(name);
_2f0.push(v);
}
return null;
}
}
if(_2f5==="FORM"||_2f5==="P"||_2f5==="SPAN"||_2f5==="DIV"){
return elem.childNodes;
}
_2ef.push(name);
_2f0.push(elem.value||"");
return null;
}
return elem.childNodes;
});
return [_2ef,_2f0];
},withDocument:function(doc,func){
var self=MochiKit.DOM;
var _2fe=self._document;
var rval;
try{
self._document=doc;
rval=func();
}
catch(e){
self._document=_2fe;
throw e;
}
self._document=_2fe;
return rval;
},registerDOMConverter:function(name,_301,wrap,_303){
MochiKit.DOM.domConverters.register(name,_301,wrap,_303);
},coerceToDOM:function(node,ctx){
var m=MochiKit.Base;
var im=MochiKit.Iter;
var self=MochiKit.DOM;
if(im){
var iter=im.iter;
var _30a=im.repeat;
var map=m.map;
}
var _30c=self.domConverters;
var _30d=arguments.callee;
var _30e=m.NotFound;
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
var _30f=null;
try{
_30f=iter(node);
}
catch(e){
}
if(_30f){
return map(_30d,_30f,_30a(ctx));
}
}
try{
node=_30c.match(node,ctx);
continue;
}
catch(e){
if(e!=_30e){
throw e;
}
}
return self._document.createTextNode(node.toString());
}
return undefined;
},isChildNode:function(node,_311){
var self=MochiKit.DOM;
if(typeof (node)=="string"){
node=self.getElement(node);
}
if(typeof (_311)=="string"){
_311=self.getElement(_311);
}
if(typeof (node)=="undefined"||node===null){
return false;
}
while(node!=null&&node!==self._document){
if(node===_311){
return true;
}
node=node.parentNode;
}
return false;
},setNodeAttribute:function(node,attr,_315){
var o={};
o[attr]=_315;
try{
return MochiKit.DOM.updateNodeAttributes(node,o);
}
catch(e){
}
return null;
},getNodeAttribute:function(node,attr){
var self=MochiKit.DOM;
var _31a=self.attributeArray.renames[attr];
node=self.getElement(node);
try{
if(_31a){
return node[_31a];
}
return node.getAttribute(attr);
}
catch(e){
}
return null;
},removeNodeAttribute:function(node,attr){
var self=MochiKit.DOM;
var _31e=self.attributeArray.renames[attr];
node=self.getElement(node);
try{
if(_31e){
return node[_31e];
}
return node.removeAttribute(attr);
}
catch(e){
}
return null;
},updateNodeAttributes:function(node,_320){
var elem=node;
var self=MochiKit.DOM;
if(typeof (node)=="string"){
elem=self.getElement(node);
}
if(_320){
var _323=MochiKit.Base.updatetree;
if(self.attributeArray.compliant){
for(var k in _320){
var v=_320[k];
if(typeof (v)=="object"&&typeof (elem[k])=="object"){
if(k=="style"&&MochiKit.Style){
MochiKit.Style.setStyle(elem,v);
}else{
_323(elem[k],v);
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
}else{
var _326=self.attributeArray.renames;
for(var k in _320){
v=_320[k];
var _327=_326[k];
if(k=="style"&&typeof (v)=="string"){
elem.style.cssText=v;
}else{
if(typeof (_327)=="string"){
elem[_327]=v;
}else{
if(typeof (elem[k])=="object"&&typeof (v)=="object"){
if(k=="style"&&MochiKit.Style){
MochiKit.Style.setStyle(elem,v);
}else{
_323(elem[k],v);
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
var _32b=[self.coerceToDOM(MochiKit.Base.extend(null,arguments,1),elem)];
var _32c=MochiKit.Base.concat;
while(_32b.length){
var n=_32b.shift();
if(typeof (n)=="undefined"||n===null){
}else{
if(typeof (n.nodeType)=="number"){
elem.appendChild(n);
}else{
_32b=_32c(n,_32b);
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
var _331=[self.coerceToDOM(MochiKit.Base.extend(null,arguments,1),elem)];
var _332=elem.parentNode;
var _333=MochiKit.Base.concat;
while(_331.length){
var n=_331.shift();
if(typeof (n)=="undefined"||n===null){
}else{
if(typeof (n.nodeType)=="number"){
_332.insertBefore(n,elem);
}else{
_331=_333(n,_331);
}
}
}
return _332;
},insertSiblingNodesAfter:function(node){
var elem=node;
var self=MochiKit.DOM;
if(typeof (node)=="string"){
elem=self.getElement(node);
}
var _338=[self.coerceToDOM(MochiKit.Base.extend(null,arguments,1),elem)];
if(elem.nextSibling){
return self.insertSiblingNodesBefore(elem.nextSibling,_338);
}else{
return self.appendChildNodes(elem.parentNode,_338);
}
},replaceChildNodes:function(node){
var elem=node;
var self=MochiKit.DOM;
if(typeof (node)=="string"){
elem=self.getElement(node);
arguments[0]=elem;
}
var _33c;
while((_33c=elem.firstChild)){
elem.removeChild(_33c);
}
if(arguments.length<2){
return elem;
}else{
return self.appendChildNodes.apply(this,arguments);
}
},createDOM:function(name,_33e){
var elem;
var self=MochiKit.DOM;
var m=MochiKit.Base;
if(typeof (_33e)=="string"||typeof (_33e)=="number"){
var args=m.extend([name,null],arguments,1);
return arguments.callee.apply(this,args);
}
if(typeof (name)=="string"){
var _343=self._xhtml;
if(_33e&&!self.attributeArray.compliant){
var _344="";
if("name" in _33e){
_344+=" name=\""+self.escapeHTML(_33e.name)+"\"";
}
if(name=="input"&&"type" in _33e){
_344+=" type=\""+self.escapeHTML(_33e.type)+"\"";
}
if(_344){
name="<"+name+_344+">";
_343=false;
}
}
var d=self._document;
if(_343&&d===document){
elem=d.createElementNS("http://www.w3.org/1999/xhtml",name);
}else{
elem=d.createElement(name);
}
}else{
elem=name;
}
if(_33e){
self.updateNodeAttributes(elem,_33e);
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
var e=MochiKit.DOM.getElement(elem);
e.parentNode.removeChild(e);
return e;
},swapDOM:function(dest,src){
var self=MochiKit.DOM;
dest=self.getElement(dest);
var _34c=dest.parentNode;
if(src){
src=self.getElement(src);
_34c.replaceChild(src,dest);
}else{
_34c.removeChild(dest);
}
return src;
},getElement:function(id){
var self=MochiKit.DOM;
if(arguments.length==1){
return ((typeof (id)=="string")?self._document.getElementById(id):id);
}else{
return MochiKit.Base.map(self.getElement,arguments);
}
},getElementsByTagAndClassName:function(_34f,_350,_351){
var self=MochiKit.DOM;
if(typeof (_34f)=="undefined"||_34f===null){
_34f="*";
}
if(typeof (_351)=="undefined"||_351===null){
_351=self._document;
}
_351=self.getElement(_351);
var _353=(_351.getElementsByTagName(_34f)||self._document.all);
if(typeof (_350)=="undefined"||_350===null){
return MochiKit.Base.extend(null,_353);
}
var _354=[];
for(var i=0;i<_353.length;i++){
var _356=_353[i];
var cls=_356.className;
if(typeof (cls)!="string"){
cls=_356.getAttribute("class");
}
if(typeof (cls)=="string"){
var _358=cls.split(" ");
for(var j=0;j<_358.length;j++){
if(_358[j]==_350){
_354.push(_356);
break;
}
}
}
}
return _354;
},_newCallStack:function(path,once){
var rval=function(){
var _35d=arguments.callee.callStack;
for(var i=0;i<_35d.length;i++){
if(_35d[i].apply(this,arguments)===false){
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
},addToCallStack:function(_35f,path,func,once){
var self=MochiKit.DOM;
var _364=_35f[path];
var _365=_364;
if(!(typeof (_364)=="function"&&typeof (_364.callStack)=="object"&&_364.callStack!==null)){
_365=self._newCallStack(path,once);
if(typeof (_364)=="function"){
_365.callStack.push(_364);
}
_35f[path]=_365;
}
_365.callStack.push(func);
},addLoadEvent:function(func){
var self=MochiKit.DOM;
self.addToCallStack(self._window,"onload",func,true);
},focusOnLoad:function(_368){
var self=MochiKit.DOM;
self.addLoadEvent(function(){
_368=self.getElement(_368);
if(_368){
_368.focus();
}
});
},setElementClass:function(_36a,_36b){
var self=MochiKit.DOM;
var obj=self.getElement(_36a);
if(self.attributeArray.compliant){
obj.setAttribute("class",_36b);
}else{
obj.setAttribute("className",_36b);
}
},toggleElementClass:function(_36e){
var self=MochiKit.DOM;
for(var i=1;i<arguments.length;i++){
var obj=self.getElement(arguments[i]);
if(!self.addElementClass(obj,_36e)){
self.removeElementClass(obj,_36e);
}
}
},addElementClass:function(_372,_373){
var self=MochiKit.DOM;
var obj=self.getElement(_372);
var cls=obj.className;
if(typeof (cls)!="string"){
cls=obj.getAttribute("class");
}
if(typeof (cls)!="string"||cls.length===0){
self.setElementClass(obj,_373);
return true;
}
if(cls==_373){
return false;
}
var _377=cls.split(" ");
for(var i=0;i<_377.length;i++){
if(_377[i]==_373){
return false;
}
}
self.setElementClass(obj,cls+" "+_373);
return true;
},removeElementClass:function(_379,_37a){
var self=MochiKit.DOM;
var obj=self.getElement(_379);
var cls=obj.className;
if(typeof (cls)!="string"){
cls=obj.getAttribute("class");
}
if(typeof (cls)!="string"||cls.length===0){
return false;
}
if(cls==_37a){
self.setElementClass(obj,"");
return true;
}
var _37e=cls.split(" ");
for(var i=0;i<_37e.length;i++){
if(_37e[i]==_37a){
_37e.splice(i,1);
self.setElementClass(obj,_37e.join(" "));
return true;
}
}
return false;
},swapElementClass:function(_380,_381,_382){
var obj=MochiKit.DOM.getElement(_380);
var res=MochiKit.DOM.removeElementClass(obj,_381);
if(res){
MochiKit.DOM.addElementClass(obj,_382);
}
return res;
},hasElementClass:function(_385,_386){
var obj=MochiKit.DOM.getElement(_385);
var cls=obj.className;
if(typeof (cls)!="string"){
cls=obj.getAttribute("class");
}
if(typeof (cls)!="string"){
return false;
}
var _389=cls.split(" ");
for(var i=1;i<arguments.length;i++){
var good=false;
for(var j=0;j<_389.length;j++){
if(_389[j]==arguments[i]){
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
var _391=[dom];
var self=MochiKit.DOM;
var _393=self.escapeHTML;
var _394=self.attributeArray;
while(_391.length){
dom=_391.pop();
if(typeof (dom)=="string"){
lst.push(dom);
}else{
if(dom.nodeType==1){
lst.push("<"+dom.tagName.toLowerCase());
var _395=[];
var _396=_394(dom);
for(var i=0;i<_396.length;i++){
var a=_396[i];
_395.push([" ",a.name,"=\"",_393(a.value),"\""]);
}
_395.sort();
for(i=0;i<_395.length;i++){
var _399=_395[i];
for(var j=0;j<_399.length;j++){
lst.push(_399[j]);
}
}
if(dom.hasChildNodes()){
lst.push(">");
_391.push("</"+dom.tagName.toLowerCase()+">");
var _39b=dom.childNodes;
for(i=_39b.length-1;i>=0;i--){
_391.push(_39b[i]);
}
}else{
lst.push("/>");
}
}else{
if(dom.nodeType==3){
lst.push(_393(dom.nodeValue));
}
}
}
}
return lst;
},scrapeText:function(node,_39d){
var rval=[];
(function(node){
var cn=node.childNodes;
if(cn){
for(var i=0;i<cn.length;i++){
arguments.callee.call(this,cn[i]);
}
}
var _3a2=node.nodeValue;
if(typeof (_3a2)=="string"){
rval.push(_3a2);
}
})(MochiKit.DOM.getElement(node));
if(_39d){
return rval;
}else{
return rval.join("");
}
},removeEmptyTextNodes:function(_3a3){
_3a3=MochiKit.DOM.getElement(_3a3);
for(var i=0;i<_3a3.childNodes.length;i++){
var node=_3a3.childNodes[i];
if(node.nodeType==3&&!/\S/.test(node.nodeValue)){
node.parentNode.removeChild(node);
}
}
},makeClipping:function(_3a6){
_3a6=MochiKit.DOM.getElement(_3a6);
var _3a7=_3a6.style.overflow;
if((MochiKit.Style.getStyle(_3a6,"overflow")||"visible")!="hidden"){
_3a6.style.overflow="hidden";
}
return _3a7;
},undoClipping:function(_3a8,_3a9){
_3a8=MochiKit.DOM.getElement(_3a8);
if(!_3a9){
return;
}
_3a8.style.overflow=_3a9;
},makePositioned:function(_3aa){
_3aa=MochiKit.DOM.getElement(_3aa);
var pos=MochiKit.Style.getStyle(_3aa,"position");
if(pos=="static"||!pos){
_3aa.style.position="relative";
if(/Opera/.test(navigator.userAgent)){
_3aa.style.top=0;
_3aa.style.left=0;
}
}
},undoPositioned:function(_3ac){
_3ac=MochiKit.DOM.getElement(_3ac);
if(_3ac.style.position=="relative"){
_3ac.style.position=_3ac.style.top=_3ac.style.left=_3ac.style.bottom=_3ac.style.right="";
}
},getFirstElementByTagAndClassName:function(_3ad,_3ae,_3af){
var self=MochiKit.DOM;
if(typeof (_3ad)=="undefined"||_3ad===null){
_3ad="*";
}
if(typeof (_3af)=="undefined"||_3af===null){
_3af=self._document;
}
_3af=self.getElement(_3af);
var _3b1=(_3af.getElementsByTagName(_3ad)||self._document.all);
if(typeof (_3ae)=="undefined"||_3ae===null){
return _3b1[0];
}
for(var i=0;i<_3b1.length;i++){
var _3b3=_3b1[i];
var cls=_3b3.className;
if(typeof (cls)!="string"){
cls=_3b3.getAttribute("class");
}
if(typeof (cls)=="string"){
var _3b5=cls.split(" ");
for(var j=0;j<_3b5.length;j++){
if(_3b5[j]==_3ae){
return _3b3;
}
}
}
}
},getFirstParentByTagAndClassName:function(elem,_3b8,_3b9){
var self=MochiKit.DOM;
elem=self.getElement(elem);
if(typeof (_3b8)=="undefined"||_3b8===null){
_3b8="*";
}else{
_3b8=_3b8.toUpperCase();
}
if(typeof (_3b9)=="undefined"||_3b9===null){
_3b9=null;
}
if(elem){
elem=elem.parentNode;
}
while(elem&&elem.tagName){
var _3bb=elem.tagName.toUpperCase();
if((_3b8==="*"||_3b8==_3bb)&&(_3b9===null||self.hasElementClass(elem,_3b9))){
return elem;
}
elem=elem.parentNode;
}
return null;
},isParent:function(_3bc,_3bd){
if(!_3bc.parentNode||_3bc==_3bd){
return false;
}
if(_3bc.parentNode==_3bd){
return true;
}
return MochiKit.DOM.isParent(_3bc.parentNode,_3bd);
},__new__:function(win){
var m=MochiKit.Base;
if(typeof (document)!="undefined"){
this._document=document;
var _3c0="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
this._xhtml=(document.documentElement&&document.createElementNS&&document.documentElement.namespaceURI===_3c0);
}else{
if(MochiKit.MockDOM){
this._document=MochiKit.MockDOM.document;
}
}
this._window=win;
this.domConverters=new m.AdapterRegistry();
var _3c1=this._document.createElement("span");
var _3c2;
if(_3c1&&_3c1.attributes&&_3c1.attributes.length>0){
var _3c3=m.filter;
_3c2=function(node){
return _3c3(_3c2.ignoreAttrFilter,node.attributes);
};
_3c2.ignoreAttr={};
var _3c5=_3c1.attributes;
var _3c6=_3c2.ignoreAttr;
for(var i=0;i<_3c5.length;i++){
var a=_3c5[i];
_3c6[a.name]=a.value;
}
_3c2.ignoreAttrFilter=function(a){
return (_3c2.ignoreAttr[a.name]!=a.value);
};
_3c2.compliant=false;
_3c2.renames={"class":"className","checked":"defaultChecked","usemap":"useMap","for":"htmlFor","readonly":"readOnly","colspan":"colSpan","bgcolor":"bgColor","cellspacing":"cellSpacing","cellpadding":"cellPadding"};
}else{
_3c2=function(node){
return node.attributes;
};
_3c2.compliant=true;
_3c2.renames={};
}
this.attributeArray=_3c2;
var _3cb=function(_3cc,arr){
var _3ce=arr[0];
var _3cf=arr[1];
var _3d0=_3cf.split(".")[1];
var str="";
str+="if (!MochiKit."+_3d0+") { throw new Error(\"";
str+="This function has been deprecated and depends on MochiKit.";
str+=_3d0+".\");}";
str+="return "+_3cf+".apply(this, arguments);";
MochiKit[_3cc][_3ce]=new Function(str);
};
for(var i=0;i<MochiKit.DOM.DEPRECATED.length;i++){
_3cb("DOM",MochiKit.DOM.DEPRECATED[i]);
}
var _3d2=this.createDOMFunc;
this.UL=_3d2("ul");
this.OL=_3d2("ol");
this.LI=_3d2("li");
this.DL=_3d2("dl");
this.DT=_3d2("dt");
this.DD=_3d2("dd");
this.TD=_3d2("td");
this.TR=_3d2("tr");
this.TBODY=_3d2("tbody");
this.THEAD=_3d2("thead");
this.TFOOT=_3d2("tfoot");
this.TABLE=_3d2("table");
this.TH=_3d2("th");
this.INPUT=_3d2("input");
this.SPAN=_3d2("span");
this.A=_3d2("a");
this.DIV=_3d2("div");
this.IMG=_3d2("img");
this.BUTTON=_3d2("button");
this.TT=_3d2("tt");
this.PRE=_3d2("pre");
this.H1=_3d2("h1");
this.H2=_3d2("h2");
this.H3=_3d2("h3");
this.H4=_3d2("h4");
this.H5=_3d2("h5");
this.H6=_3d2("h6");
this.BR=_3d2("br");
this.HR=_3d2("hr");
this.LABEL=_3d2("label");
this.TEXTAREA=_3d2("textarea");
this.FORM=_3d2("form");
this.P=_3d2("p");
this.SELECT=_3d2("select");
this.OPTION=_3d2("option");
this.OPTGROUP=_3d2("optgroup");
this.LEGEND=_3d2("legend");
this.FIELDSET=_3d2("fieldset");
this.STRONG=_3d2("strong");
this.CANVAS=_3d2("canvas");
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
MochiKit.Selector.VERSION="1.4";
MochiKit.Selector.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.Selector.toString=function(){
return this.__repr__();
};
MochiKit.Selector.EXPORT=["Selector","findChildElements","findDocElements","$$"];
MochiKit.Selector.EXPORT_OK=[];
MochiKit.Selector.Selector=function(_3d3){
this.params={classNames:[],pseudoClassNames:[]};
this.expression=_3d3.toString().replace(/(^\s+|\s+$)/g,"");
this.parseExpression();
this.compileMatcher();
};
MochiKit.Selector.Selector.prototype={__class__:MochiKit.Selector.Selector,parseExpression:function(){
function abort(_3d4){
throw "Parse error in selector: "+_3d4;
}
if(this.expression==""){
abort("empty expression");
}
var repr=MochiKit.Base.repr;
var _3d6=this.params;
var expr=this.expression;
var _3d8,_3d9,_3da,rest;
while(_3d8=expr.match(/^(.*)\[([a-z0-9_:-]+?)(?:([~\|!^$*]?=)(?:"([^"]*)"|([^\]\s]*)))?\]$/i)){
_3d6.attributes=_3d6.attributes||[];
_3d6.attributes.push({name:_3d8[2],operator:_3d8[3],value:_3d8[4]||_3d8[5]||""});
expr=_3d8[1];
}
if(expr=="*"){
return this.params.wildcard=true;
}
while(_3d8=expr.match(/^([^a-z0-9_-])?([a-z0-9_-]+(?:\([^)]*\))?)(.*)/i)){
_3d9=_3d8[1];
_3da=_3d8[2];
rest=_3d8[3];
switch(_3d9){
case "#":
_3d6.id=_3da;
break;
case ".":
_3d6.classNames.push(_3da);
break;
case ":":
_3d6.pseudoClassNames.push(_3da);
break;
case "":
case undefined:
_3d6.tagName=_3da.toUpperCase();
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
var _3dd=this.params;
var _3de=[];
var _3df,i;
function childElements(_3e1){
return "MochiKit.Base.filter(function (node) { return node.nodeType == 1; }, "+_3e1+".childNodes)";
}
if(_3dd.wildcard){
_3de.push("true");
}
if(_3df=_3dd.id){
_3de.push("element.id == "+repr(_3df));
}
if(_3df=_3dd.tagName){
_3de.push("element.tagName.toUpperCase() == "+repr(_3df));
}
if((_3df=_3dd.classNames).length>0){
for(i=0;i<_3df.length;i++){
_3de.push("MochiKit.DOM.hasElementClass(element, "+repr(_3df[i])+")");
}
}
if((_3df=_3dd.pseudoClassNames).length>0){
for(i=0;i<_3df.length;i++){
var _3e2=_3df[i].match(/^([^(]+)(?:\((.*)\))?$/);
var _3e3=_3e2[1];
var _3e4=_3e2[2];
switch(_3e3){
case "root":
_3de.push("element.nodeType == 9 || element === element.ownerDocument.documentElement");
break;
case "nth-child":
case "nth-last-child":
case "nth-of-type":
case "nth-last-of-type":
_3e2=_3e4.match(/^((?:(\d+)n\+)?(\d+)|odd|even)$/);
if(!_3e2){
throw "Invalid argument to pseudo element nth-child: "+_3e4;
}
var a,b;
if(_3e2[0]=="odd"){
a=2;
b=1;
}else{
if(_3e2[0]=="even"){
a=2;
b=0;
}else{
a=_3e2[2]&&parseInt(_3e2)||null;
b=parseInt(_3e2[3]);
}
}
_3de.push("this.nthChild(element,"+a+","+b+","+!!_3e3.match("^nth-last")+","+!!_3e3.match("of-type$")+")");
break;
case "first-child":
_3de.push("this.nthChild(element, null, 1)");
break;
case "last-child":
_3de.push("this.nthChild(element, null, 1, true)");
break;
case "first-of-type":
_3de.push("this.nthChild(element, null, 1, false, true)");
break;
case "last-of-type":
_3de.push("this.nthChild(element, null, 1, true, true)");
break;
case "only-child":
_3de.push(childElements("element.parentNode")+".length == 1");
break;
case "only-of-type":
_3de.push("MochiKit.Base.filter(function (node) { return node.tagName == element.tagName; }, "+childElements("element.parentNode")+").length == 1");
break;
case "empty":
_3de.push("element.childNodes.length == 0");
break;
case "enabled":
_3de.push("(this.isUIElement(element) && element.disabled === false)");
break;
case "disabled":
_3de.push("(this.isUIElement(element) && element.disabled === true)");
break;
case "checked":
_3de.push("(this.isUIElement(element) && element.checked === true)");
break;
case "not":
var _3e7=new MochiKit.Selector.Selector(_3e4);
_3de.push("!( "+_3e7.buildMatchExpression()+")");
break;
}
}
}
if(_3df=_3dd.attributes){
MochiKit.Base.map(function(_3e8){
var _3e9="MochiKit.DOM.getNodeAttribute(element, "+repr(_3e8.name)+")";
var _3ea=function(_3eb){
return _3e9+".split("+repr(_3eb)+")";
};
switch(_3e8.operator){
case "=":
_3de.push(_3e9+" == "+repr(_3e8.value));
break;
case "~=":
_3de.push(_3e9+" && MochiKit.Base.findValue("+_3ea(" ")+", "+repr(_3e8.value)+") > -1");
break;
case "^=":
_3de.push(_3e9+".substring(0, "+_3e8.value.length+") == "+repr(_3e8.value));
break;
case "$=":
_3de.push(_3e9+".substring("+_3e9+".length - "+_3e8.value.length+") == "+repr(_3e8.value));
break;
case "*=":
_3de.push(_3e9+".match("+repr(_3e8.value)+")");
break;
case "|=":
_3de.push(_3e9+" && "+_3ea("-")+"[0].toUpperCase() == "+repr(_3e8.value.toUpperCase()));
break;
case "!=":
_3de.push(_3e9+" != "+repr(_3e8.value));
break;
case "":
case undefined:
_3de.push(_3e9+" != null");
break;
default:
throw "Unknown operator "+_3e8.operator+" in selector";
}
},_3df);
}
return _3de.join(" && ");
},compileMatcher:function(){
this.match=new Function("element","if (!element.tagName) return false;                 return "+this.buildMatchExpression());
},nthChild:function(_3ec,a,b,_3ef,_3f0){
var _3f1=MochiKit.Base.filter(function(node){
return node.nodeType==1;
},_3ec.parentNode.childNodes);
if(_3f0){
_3f1=MochiKit.Base.filter(function(node){
return node.tagName==_3ec.tagName;
},_3f1);
}
if(_3ef){
_3f1=MochiKit.Iter.reversed(_3f1);
}
if(a){
var _3f4=MochiKit.Base.findIdentical(_3f1,_3ec);
return ((_3f4+1-b)/a)%1==0;
}else{
return b==MochiKit.Base.findIdentical(_3f1,_3ec)+1;
}
},isUIElement:function(_3f5){
return MochiKit.Base.findValue(["input","button","select","option","textarea","object"],_3f5.tagName.toLowerCase())>-1;
},findElements:function(_3f6,axis){
var _3f8;
if(axis==undefined){
axis="";
}
function inScope(_3f9,_3fa){
if(axis==""){
return MochiKit.DOM.isChildNode(_3f9,_3fa);
}else{
if(axis==">"){
return _3f9.parentNode==_3fa;
}else{
if(axis=="+"){
return _3f9==nextSiblingElement(_3fa);
}else{
if(axis=="~"){
var _3fb=_3fa;
while(_3fb=nextSiblingElement(_3fb)){
if(_3f9==_3fb){
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
if(_3f8=MochiKit.DOM.getElement(this.params.id)){
if(this.match(_3f8)){
if(!_3f6||inScope(_3f8,_3f6)){
return [_3f8];
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
_3f6=(_3f6||MochiKit.DOM.currentDocument()).getElementsByTagName(this.params.tagName||"*");
}else{
if(axis==">"){
if(!_3f6){
throw "> combinator not allowed without preceeding expression";
}
_3f6=MochiKit.Base.filter(function(node){
return node.nodeType==1;
},_3f6.childNodes);
}else{
if(axis=="+"){
if(!_3f6){
throw "+ combinator not allowed without preceeding expression";
}
_3f6=nextSiblingElement(_3f6)&&[nextSiblingElement(_3f6)];
}else{
if(axis=="~"){
if(!_3f6){
throw "~ combinator not allowed without preceeding expression";
}
var _3fe=[];
while(nextSiblingElement(_3f6)){
_3f6=nextSiblingElement(_3f6);
_3fe.push(_3f6);
}
_3f6=_3fe;
}
}
}
}
if(!_3f6){
return [];
}
var _3ff=MochiKit.Base.filter(MochiKit.Base.bind(function(_400){
return this.match(_400);
},this),_3f6);
return _3ff;
},repr:function(){
return "Selector("+this.expression+")";
},toString:MochiKit.Base.forwardCall("repr")};
MochiKit.Base.update(MochiKit.Selector,{findChildElements:function(_401,_402){
return MochiKit.Base.flattenArray(MochiKit.Base.map(function(_403){
var _404="";
return MochiKit.Iter.reduce(function(_405,expr){
if(match=expr.match(/^[>+~]$/)){
_404=match[0];
return _405;
}else{
var _407=new MochiKit.Selector.Selector(expr);
var _408=MochiKit.Iter.reduce(function(_409,_40a){
return MochiKit.Base.extend(_409,_407.findElements(_40a||_401,_404));
},_405,[]);
_404="";
return _408;
}
},_403.replace(/(^\s+|\s+$)/g,"").split(/\s+/),[null]);
},_402));
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
MochiKit.Style.VERSION="1.4";
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
MochiKit.Base.update(MochiKit.Style,{getStyle:function(elem,_413){
var dom=MochiKit.DOM;
var d=dom._document;
elem=dom.getElement(elem);
_413=MochiKit.Base.camelize(_413);
if(!elem||elem==d){
return undefined;
}
if(_413=="opacity"&&typeof (elem.filters)!="undefined"){
var _416=(MochiKit.Style.getStyle(elem,"filter")||"").match(/alpha\(opacity=(.*)\)/);
if(_416&&_416[1]){
return parseFloat(_416[1])/100;
}
return 1;
}
if(_413=="float"||_413=="cssFloat"||_413=="styleFloat"){
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
var _417=elem.style?elem.style[_413]:null;
if(!_417){
if(d.defaultView&&d.defaultView.getComputedStyle){
var css=d.defaultView.getComputedStyle(elem,null);
_413=_413.replace(/([A-Z])/g,"-$1").toLowerCase();
_417=css?css.getPropertyValue(_413):null;
}else{
if(elem.currentStyle){
_417=elem.currentStyle[_413];
if(/^\d/.test(_417)&&!/px$/.test(_417)){
var left=elem.style.left;
var _41a=elem.runtimeStyle.left;
elem.runtimeStyle.left=elem.currentStyle.left;
elem.style.left=_417||0;
_417=elem.style.pixelLeft+"px";
elem.style.left=left;
elem.runtimeStyle.left=_41a;
}
}
}
}
if(_413=="opacity"){
_417=parseFloat(_417);
}
if(/Opera/.test(navigator.userAgent)&&(MochiKit.Base.findValue(["left","top","right","bottom"],_413)!=-1)){
if(MochiKit.Style.getStyle(elem,"position")=="static"){
_417="auto";
}
}
return _417=="auto"?null:_417;
},setStyle:function(elem,_41c){
elem=MochiKit.DOM.getElement(elem);
for(var name in _41c){
switch(name){
case "opacity":
MochiKit.Style.setOpacity(elem,_41c[name]);
break;
case "float":
case "cssFloat":
case "styleFloat":
if(typeof (elem.style["float"])!="undefined"){
elem.style["float"]=_41c[name];
}else{
if(typeof (elem.style.cssFloat)!="undefined"){
elem.style.cssFloat=_41c[name];
}else{
elem.style.styleFloat=_41c[name];
}
}
break;
default:
elem.style[MochiKit.Base.camelize(name)]=_41c[name];
}
}
},setOpacity:function(elem,o){
elem=MochiKit.DOM.getElement(elem);
var self=MochiKit.Style;
if(o==1){
var _421=/Gecko/.test(navigator.userAgent)&&!(/Konqueror|AppleWebKit|KHTML/.test(navigator.userAgent));
elem.style["opacity"]=_421?0.999999:1;
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
},getElementPosition:function(elem,_423){
var self=MochiKit.Style;
var dom=MochiKit.DOM;
elem=dom.getElement(elem);
if(!elem||(!(elem.x&&elem.y)&&(!elem.parentNode===null||self.getStyle(elem,"display")=="none"))){
return undefined;
}
var c=new self.Coordinates(0,0);
var box=null;
var _428=null;
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
_428=elem.offsetParent;
if(_428!=elem){
while(_428){
c.x+=_428.offsetLeft;
c.y+=_428.offsetTop;
_428=_428.offsetParent;
}
}
var ua=navigator.userAgent.toLowerCase();
if((typeof (opera)!="undefined"&&parseFloat(opera.version())<9)||(ua.indexOf("AppleWebKit")!=-1&&self.getStyle(elem,"position")=="absolute")){
c.x-=b.offsetLeft;
c.y-=b.offsetTop;
}
if(elem.parentNode){
_428=elem.parentNode;
}else{
_428=null;
}
while(_428){
var _42d=_428.tagName.toUpperCase();
if(_42d==="BODY"||_42d==="HTML"){
break;
}
var disp=self.getStyle(_428,"display");
if(disp.search(/^inline|table-row.*$/i)){
c.x-=_428.scrollLeft;
c.y-=_428.scrollTop;
}
if(_428.parentNode){
_428=_428.parentNode;
}else{
_428=null;
}
}
}
}
}
if(typeof (_423)!="undefined"){
_423=arguments.callee(_423);
if(_423){
c.x-=(_423.x||0);
c.y-=(_423.y||0);
}
}
return c;
},setElementPosition:function(elem,_430,_431){
elem=MochiKit.DOM.getElement(elem);
if(typeof (_431)=="undefined"){
_431="px";
}
var _432={};
var _433=MochiKit.Base.isUndefinedOrNull;
if(!_433(_430.x)){
_432["left"]=_430.x+_431;
}
if(!_433(_430.y)){
_432["top"]=_430.y+_431;
}
MochiKit.DOM.updateNodeAttributes(elem,{"style":_432});
},getElementDimensions:function(elem,_435){
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
var _43a=s.visibility;
var _43b=s.position;
var _43c=s.display;
s.visibility="hidden";
s.position="absolute";
s.display="";
var _43d=elem.offsetWidth;
var _43e=elem.offsetHeight;
s.display=_43c;
s.position=_43b;
s.visibility=_43a;
}else{
_43d=elem.offsetWidth||0;
_43e=elem.offsetHeight||0;
}
if(_435){
var _43f="colSpan" in elem&&"rowSpan" in elem;
var _440=(_43f&&elem.parentNode&&self.getStyle(elem.parentNode,"borderCollapse")=="collapse");
if(_440){
if(/MSIE/.test(navigator.userAgent)){
var _441=elem.previousSibling?0.5:1;
var _442=elem.nextSibling?0.5:1;
}else{
var _441=0.5;
var _442=0.5;
}
}else{
var _441=1;
var _442=1;
}
_43d-=Math.round((parseFloat(self.getStyle(elem,"paddingLeft"))||0)+(parseFloat(self.getStyle(elem,"paddingRight"))||0)+_441*(parseFloat(self.getStyle(elem,"borderLeftWidth"))||0)+_442*(parseFloat(self.getStyle(elem,"borderRightWidth"))||0));
if(_43f){
if(/Gecko|Opera/.test(navigator.userAgent)&&!/Konqueror|AppleWebKit|KHTML/.test(navigator.userAgent)){
var _443=0;
}else{
if(/MSIE/.test(navigator.userAgent)){
var _443=1;
}else{
var _443=_440?0.5:1;
}
}
}else{
var _443=1;
}
_43e-=Math.round((parseFloat(self.getStyle(elem,"paddingTop"))||0)+(parseFloat(self.getStyle(elem,"paddingBottom"))||0)+_443*((parseFloat(self.getStyle(elem,"borderTopWidth"))||0)+(parseFloat(self.getStyle(elem,"borderBottomWidth"))||0)));
}
return new self.Dimensions(_43d,_43e);
},setElementDimensions:function(elem,_445,_446){
elem=MochiKit.DOM.getElement(elem);
if(typeof (_446)=="undefined"){
_446="px";
}
var _447={};
var _448=MochiKit.Base.isUndefinedOrNull;
if(!_448(_445.w)){
_447["width"]=_445.w+_446;
}
if(!_448(_445.h)){
_447["height"]=_445.h+_446;
}
MochiKit.DOM.updateNodeAttributes(elem,{"style":_447});
},setDisplayForElement:function(_449,_44a){
var _44b=MochiKit.Base.extend(null,arguments,1);
var _44c=MochiKit.DOM.getElement;
for(var i=0;i<_44b.length;i++){
_44a=_44c(_44b[i]);
if(_44a){
_44a.style.display=_449;
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
MochiKit.LoggingPane.VERSION="1.4";
MochiKit.LoggingPane.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.LoggingPane.toString=function(){
return this.__repr__();
};
MochiKit.LoggingPane.createLoggingPane=function(_456){
var m=MochiKit.LoggingPane;
_456=!(!_456);
if(m._loggingPane&&m._loggingPane.inline!=_456){
m._loggingPane.closePane();
m._loggingPane=null;
}
if(!m._loggingPane||m._loggingPane.closed){
m._loggingPane=new m.LoggingPane(_456,MochiKit.Logging.logger);
}
return m._loggingPane;
};
MochiKit.LoggingPane.LoggingPane=function(_458,_459){
if(typeof (_459)=="undefined"||_459===null){
_459=MochiKit.Logging.logger;
}
this.logger=_459;
var _45a=MochiKit.Base.update;
var _45b=MochiKit.Base.updatetree;
var bind=MochiKit.Base.bind;
var _45d=MochiKit.Base.clone;
var win=window;
var uid="_MochiKit_LoggingPane";
if(typeof (MochiKit.DOM)!="undefined"){
win=MochiKit.DOM.currentWindow();
}
if(!_458){
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
var _464=doc.getElementById(uid);
var _465=!!_464;
if(_464&&typeof (_464.loggingPane)!="undefined"){
_464.loggingPane.logger=this.logger;
_464.loggingPane.buildAndApplyFilter();
return _464.loggingPane;
}
if(_465){
var _466;
while((_466=_464.firstChild)){
_464.removeChild(_466);
}
}else{
_464=doc.createElement("div");
_464.id=uid;
}
_464.loggingPane=this;
var _467=doc.createElement("input");
var _468=doc.createElement("input");
var _469=doc.createElement("button");
var _46a=doc.createElement("button");
var _46b=doc.createElement("button");
var _46c=doc.createElement("button");
var _46d=doc.createElement("div");
var _46e=doc.createElement("div");
var _46f=uid+"_Listener";
this.colorTable=_45d(this.colorTable);
var _470=[];
var _471=null;
var _472=function(msg){
var _474=msg.level;
if(typeof (_474)=="number"){
_474=MochiKit.Logging.LogLevel[_474];
}
return _474;
};
var _475=function(msg){
return msg.info.join(" ");
};
var _477=bind(function(msg){
var _479=_472(msg);
var text=_475(msg);
var c=this.colorTable[_479];
var p=doc.createElement("span");
p.className="MochiKit-LogMessage MochiKit-LogLevel-"+_479;
p.style.cssText="margin: 0px; white-space: -moz-pre-wrap; white-space: -o-pre-wrap; white-space: pre-wrap; white-space: pre-line; word-wrap: break-word; wrap-option: emergency; color: "+c;
p.appendChild(doc.createTextNode(_479+": "+text));
_46e.appendChild(p);
_46e.appendChild(doc.createElement("br"));
if(_46d.offsetHeight>_46d.scrollHeight){
_46d.scrollTop=0;
}else{
_46d.scrollTop=_46d.scrollHeight;
}
},this);
var _47d=function(msg){
_470[_470.length]=msg;
_477(msg);
};
var _47f=function(){
var _480,_481;
try{
_480=new RegExp(_467.value);
_481=new RegExp(_468.value);
}
catch(e){
logDebug("Error in filter regex: "+e.message);
return null;
}
return function(msg){
return (_480.test(_472(msg))&&_481.test(_475(msg)));
};
};
var _483=function(){
while(_46e.firstChild){
_46e.removeChild(_46e.firstChild);
}
};
var _484=function(){
_470=[];
_483();
};
var _485=bind(function(){
if(this.closed){
return;
}
this.closed=true;
if(MochiKit.LoggingPane._loggingPane==this){
MochiKit.LoggingPane._loggingPane=null;
}
this.logger.removeListener(_46f);
try{
try{
_464.loggingPane=null;
}
catch(e){
logFatal("Bookmarklet was closed incorrectly.");
}
if(_458){
_464.parentNode.removeChild(_464);
}else{
this.win.close();
}
}
catch(e){
}
},this);
var _486=function(){
_483();
for(var i=0;i<_470.length;i++){
var msg=_470[i];
if(_471===null||_471(msg)){
_477(msg);
}
}
};
this.buildAndApplyFilter=function(){
_471=_47f();
_486();
this.logger.removeListener(_46f);
this.logger.addListener(_46f,_471,_47d);
};
var _489=bind(function(){
_470=this.logger.getMessages();
_486();
},this);
var _48a=bind(function(_48b){
_48b=_48b||window.event;
key=_48b.which||_48b.keyCode;
if(key==13){
this.buildAndApplyFilter();
}
},this);
var _48c="display: block; z-index: 1000; left: 0px; bottom: 0px; position: fixed; width: 100%; background-color: white; font: "+this.logFont;
if(_458){
_48c+="; height: 10em; border-top: 2px solid black";
}else{
_48c+="; height: 100%;";
}
_464.style.cssText=_48c;
if(!_465){
doc.body.appendChild(_464);
}
_48c={"cssText":"width: 33%; display: inline; font: "+this.logFont};
_45b(_467,{"value":"FATAL|ERROR|WARNING|INFO|DEBUG","onkeypress":_48a,"style":_48c});
_464.appendChild(_467);
_45b(_468,{"value":".*","onkeypress":_48a,"style":_48c});
_464.appendChild(_468);
_48c="width: 8%; display:inline; font: "+this.logFont;
_469.appendChild(doc.createTextNode("Filter"));
_469.onclick=bind("buildAndApplyFilter",this);
_469.style.cssText=_48c;
_464.appendChild(_469);
_46a.appendChild(doc.createTextNode("Load"));
_46a.onclick=_489;
_46a.style.cssText=_48c;
_464.appendChild(_46a);
_46b.appendChild(doc.createTextNode("Clear"));
_46b.onclick=_484;
_46b.style.cssText=_48c;
_464.appendChild(_46b);
_46c.appendChild(doc.createTextNode("Close"));
_46c.onclick=_485;
_46c.style.cssText=_48c;
_464.appendChild(_46c);
_46d.style.cssText="overflow: auto; width: 100%";
_46e.style.cssText="width: 100%; height: "+(_458?"8em":"100%");
_46d.appendChild(_46e);
_464.appendChild(_46d);
this.buildAndApplyFilter();
_489();
if(_458){
this.win=undefined;
}else{
this.win=win;
}
this.inline=_458;
this.closePane=_485;
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
MochiKit.Color.VERSION="1.4";
MochiKit.Color.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.Color.toString=function(){
return this.__repr__();
};
MochiKit.Color.Color=function(red,_48e,blue,_490){
if(typeof (_490)=="undefined"||_490===null){
_490=1;
}
this.rgb={r:red,g:_48e,b:blue,a:_490};
};
MochiKit.Color.Color.prototype={__class__:MochiKit.Color.Color,colorWithAlpha:function(_491){
var rgb=this.rgb;
var m=MochiKit.Color;
return m.Color.fromRGB(rgb.r,rgb.g,rgb.b,_491);
},colorWithHue:function(hue){
var hsl=this.asHSL();
hsl.h=hue;
var m=MochiKit.Color;
return m.Color.fromHSL(hsl);
},colorWithSaturation:function(_497){
var hsl=this.asHSL();
hsl.s=_497;
var m=MochiKit.Color;
return m.Color.fromHSL(hsl);
},colorWithLightness:function(_49a){
var hsl=this.asHSL();
hsl.l=_49a;
var m=MochiKit.Color;
return m.Color.fromHSL(hsl);
},darkerColorWithLevel:function(_49d){
var hsl=this.asHSL();
hsl.l=Math.max(hsl.l-_49d,0);
var m=MochiKit.Color;
return m.Color.fromHSL(hsl);
},lighterColorWithLevel:function(_4a0){
var hsl=this.asHSL();
hsl.l=Math.min(hsl.l+_4a0,1);
var m=MochiKit.Color;
return m.Color.fromHSL(hsl);
},blendedColor:function(_4a3,_4a4){
if(typeof (_4a4)=="undefined"||_4a4===null){
_4a4=0.5;
}
var sf=1-_4a4;
var s=this.rgb;
var d=_4a3.rgb;
var df=_4a4;
return MochiKit.Color.Color.fromRGB((s.r*sf)+(d.r*df),(s.g*sf)+(d.g*df),(s.b*sf)+(d.b*df),(s.a*sf)+(d.a*df));
},compareRGB:function(_4a9){
var a=this.asRGB();
var b=_4a9.asRGB();
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
MochiKit.Base.update(MochiKit.Color.Color,{fromRGB:function(red,_4c0,blue,_4c2){
var _4c3=MochiKit.Color.Color;
if(arguments.length==1){
var rgb=red;
red=rgb.r;
_4c0=rgb.g;
blue=rgb.b;
if(typeof (rgb.a)=="undefined"){
_4c2=undefined;
}else{
_4c2=rgb.a;
}
}
return new _4c3(red,_4c0,blue,_4c2);
},fromHSL:function(hue,_4c6,_4c7,_4c8){
var m=MochiKit.Color;
return m.Color.fromRGB(m.hslToRGB.apply(m,arguments));
},fromHSV:function(hue,_4cb,_4cc,_4cd){
var m=MochiKit.Color;
return m.Color.fromRGB(m.hsvToRGB.apply(m,arguments));
},fromName:function(name){
var _4d0=MochiKit.Color.Color;
if(name.charAt(0)=="\""){
name=name.substr(1,name.length-2);
}
var _4d1=_4d0._namedColors[name.toLowerCase()];
if(typeof (_4d1)=="string"){
return _4d0.fromHexString(_4d1);
}else{
if(name=="transparent"){
return _4d0.transparentColor();
}
}
return null;
},fromString:function(_4d2){
var self=MochiKit.Color.Color;
var _4d4=_4d2.substr(0,3);
if(_4d4=="rgb"){
return self.fromRGBString(_4d2);
}else{
if(_4d4=="hsl"){
return self.fromHSLString(_4d2);
}else{
if(_4d2.charAt(0)=="#"){
return self.fromHexString(_4d2);
}
}
}
return self.fromName(_4d2);
},fromHexString:function(_4d5){
if(_4d5.charAt(0)=="#"){
_4d5=_4d5.substring(1);
}
var _4d6=[];
var i,hex;
if(_4d5.length==3){
for(i=0;i<3;i++){
hex=_4d5.substr(i,1);
_4d6.push(parseInt(hex+hex,16)/255);
}
}else{
for(i=0;i<6;i+=2){
hex=_4d5.substr(i,2);
_4d6.push(parseInt(hex,16)/255);
}
}
var _4d9=MochiKit.Color.Color;
return _4d9.fromRGB.apply(_4d9,_4d6);
},_fromColorString:function(pre,_4db,_4dc,_4dd){
if(_4dd.indexOf(pre)===0){
_4dd=_4dd.substring(_4dd.indexOf("(",3)+1,_4dd.length-1);
}
var _4de=_4dd.split(/\s*,\s*/);
var _4df=[];
for(var i=0;i<_4de.length;i++){
var c=_4de[i];
var val;
var _4e3=c.substring(c.length-3);
if(c.charAt(c.length-1)=="%"){
val=0.01*parseFloat(c.substring(0,c.length-1));
}else{
if(_4e3=="deg"){
val=parseFloat(c)/360;
}else{
if(_4e3=="rad"){
val=parseFloat(c)/(Math.PI*2);
}else{
val=_4dc[i]*parseFloat(c);
}
}
}
_4df.push(val);
}
return this[_4db].apply(this,_4df);
},fromComputedStyle:function(elem,_4e5){
var d=MochiKit.DOM;
var cls=MochiKit.Color.Color;
for(elem=d.getElement(elem);elem;elem=elem.parentNode){
var _4e8=MochiKit.Style.getStyle.apply(d,arguments);
if(!_4e8){
continue;
}
var _4e9=cls.fromString(_4e8);
if(!_4e9){
break;
}
if(_4e9.asRGB().a>0){
return _4e9;
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
MochiKit.Base.update(MochiKit.Color,{clampColorComponent:function(v,_4ef){
v*=_4ef;
if(v<0){
return 0;
}else{
if(v>_4ef){
return _4ef;
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
},hsvToRGB:function(hue,_4f5,_4f6,_4f7){
if(arguments.length==1){
var hsv=hue;
hue=hsv.h;
_4f5=hsv.s;
_4f6=hsv.v;
_4f7=hsv.a;
}
var red;
var _4fa;
var blue;
if(_4f5===0){
red=_4f6;
_4fa=_4f6;
blue=_4f6;
}else{
var i=Math.floor(hue*6);
var f=(hue*6)-i;
var p=_4f6*(1-_4f5);
var q=_4f6*(1-(_4f5*f));
var t=_4f6*(1-(_4f5*(1-f)));
switch(i){
case 1:
red=q;
_4fa=_4f6;
blue=p;
break;
case 2:
red=p;
_4fa=_4f6;
blue=t;
break;
case 3:
red=p;
_4fa=q;
blue=_4f6;
break;
case 4:
red=t;
_4fa=p;
blue=_4f6;
break;
case 5:
red=_4f6;
_4fa=p;
blue=q;
break;
case 6:
case 0:
red=_4f6;
_4fa=t;
blue=p;
break;
}
}
return {r:red,g:_4fa,b:blue,a:_4f7};
},hslToRGB:function(hue,_502,_503,_504){
if(arguments.length==1){
var hsl=hue;
hue=hsl.h;
_502=hsl.s;
_503=hsl.l;
_504=hsl.a;
}
var red;
var _507;
var blue;
if(_502===0){
red=_503;
_507=_503;
blue=_503;
}else{
var m2;
if(_503<=0.5){
m2=_503*(1+_502);
}else{
m2=_503+_502-(_503*_502);
}
var m1=(2*_503)-m2;
var f=MochiKit.Color._hslValue;
var h6=hue*6;
red=f(m1,m2,h6+2);
_507=f(m1,m2,h6);
blue=f(m1,m2,h6-2);
}
return {r:red,g:_507,b:blue,a:_504};
},rgbToHSV:function(red,_50e,blue,_510){
if(arguments.length==1){
var rgb=red;
red=rgb.r;
_50e=rgb.g;
blue=rgb.b;
_510=rgb.a;
}
var max=Math.max(Math.max(red,_50e),blue);
var min=Math.min(Math.min(red,_50e),blue);
var hue;
var _515;
var _516=max;
if(min==max){
hue=0;
_515=0;
}else{
var _517=(max-min);
_515=_517/max;
if(red==max){
hue=(_50e-blue)/_517;
}else{
if(_50e==max){
hue=2+((blue-red)/_517);
}else{
hue=4+((red-_50e)/_517);
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
return {h:hue,s:_515,v:_516,a:_510};
},rgbToHSL:function(red,_519,blue,_51b){
if(arguments.length==1){
var rgb=red;
red=rgb.r;
_519=rgb.g;
blue=rgb.b;
_51b=rgb.a;
}
var max=Math.max(red,Math.max(_519,blue));
var min=Math.min(red,Math.min(_519,blue));
var hue;
var _520;
var _521=(max+min)/2;
var _522=max-min;
if(_522===0){
hue=0;
_520=0;
}else{
if(_521<=0.5){
_520=_522/(max+min);
}else{
_520=_522/(2-max-min);
}
if(red==max){
hue=(_519-blue)/_522;
}else{
if(_519==max){
hue=2+((blue-red)/_522);
}else{
hue=4+((red-_519)/_522);
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
return {h:hue,s:_520,l:_521,a:_51b};
},toColorPart:function(num){
num=Math.round(num);
var _524=num.toString(16);
if(num<16){
return "0"+_524;
}
return _524;
},__new__:function(){
var m=MochiKit.Base;
this.Color.fromRGBString=m.bind(this.Color._fromColorString,this.Color,"rgb","fromRGB",[1/255,1/255,1/255,1]);
this.Color.fromHSLString=m.bind(this.Color._fromColorString,this.Color,"hsl","fromHSL",[1/360,0.01,0.01,1]);
var _526=1/3;
var _527={black:[0,0,0],blue:[0,0,1],brown:[0.6,0.4,0.2],cyan:[0,1,1],darkGray:[_526,_526,_526],gray:[0.5,0.5,0.5],green:[0,1,0],lightGray:[2*_526,2*_526,2*_526],magenta:[1,0,1],orange:[1,0.5,0],purple:[0.5,0,0.5],red:[1,0,0],transparent:[0,0,0,0],white:[1,1,1],yellow:[1,1,0]};
var _528=function(name,r,g,b,a){
var rval=this.fromRGB(r,g,b,a);
this[name]=function(){
return rval;
};
return rval;
};
for(var k in _527){
var name=k+"Color";
var _531=m.concat([_528,this.Color,name],_527[k]);
this.Color[name]=m.bind.apply(null,_531);
}
var _532=function(){
for(var i=0;i<arguments.length;i++){
if(!(arguments[i] instanceof MochiKit.Color.Color)){
return false;
}
}
return true;
};
var _534=function(a,b){
return a.compareRGB(b);
};
m.nameFunctions(this);
m.registerComparator(this.Color.NAME,_532,_534);
this.EXPORT_TAGS={":common":this.EXPORT,":all":m.concat(this.EXPORT,this.EXPORT_OK)};
}});
MochiKit.Color.EXPORT=["Color"];
MochiKit.Color.EXPORT_OK=["clampColorComponent","rgbToHSL","hslToRGB","rgbToHSV","hsvToRGB","toColorPart"];
MochiKit.Color.__new__();
MochiKit.Base._exportSymbols(this,MochiKit.Color);
MochiKit.Color.Color._namedColors={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};
MochiKit.Base._deps("Signal",["Base","DOM","Style"]);
MochiKit.Signal.NAME="MochiKit.Signal";
MochiKit.Signal.VERSION="1.4";
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
var _543=MochiKit.Signal._specialMacKeys;
for(i=63236;i<=63242;i++){
_543[i]="KEY_F"+(i-63236+1);
}
})();
MochiKit.Signal._specialKeys={8:"KEY_BACKSPACE",9:"KEY_TAB",12:"KEY_NUM_PAD_CLEAR",13:"KEY_ENTER",16:"KEY_SHIFT",17:"KEY_CTRL",18:"KEY_ALT",19:"KEY_PAUSE",20:"KEY_CAPS_LOCK",27:"KEY_ESCAPE",32:"KEY_SPACEBAR",33:"KEY_PAGE_UP",34:"KEY_PAGE_DOWN",35:"KEY_END",36:"KEY_HOME",37:"KEY_ARROW_LEFT",38:"KEY_ARROW_UP",39:"KEY_ARROW_RIGHT",40:"KEY_ARROW_DOWN",44:"KEY_PRINT_SCREEN",45:"KEY_INSERT",46:"KEY_DELETE",59:"KEY_SEMICOLON",91:"KEY_WINDOWS_LEFT",92:"KEY_WINDOWS_RIGHT",93:"KEY_SELECT",106:"KEY_NUM_PAD_ASTERISK",107:"KEY_NUM_PAD_PLUS_SIGN",109:"KEY_NUM_PAD_HYPHEN-MINUS",110:"KEY_NUM_PAD_FULL_STOP",111:"KEY_NUM_PAD_SOLIDUS",144:"KEY_NUM_LOCK",145:"KEY_SCROLL_LOCK",186:"KEY_SEMICOLON",187:"KEY_EQUALS_SIGN",188:"KEY_COMMA",189:"KEY_HYPHEN-MINUS",190:"KEY_FULL_STOP",191:"KEY_SOLIDUS",192:"KEY_GRAVE_ACCENT",219:"KEY_LEFT_SQUARE_BRACKET",220:"KEY_REVERSE_SOLIDUS",221:"KEY_RIGHT_SQUARE_BRACKET",222:"KEY_APOSTROPHE"};
(function(){
var _544=MochiKit.Signal._specialKeys;
for(var i=48;i<=57;i++){
_544[i]="KEY_"+(i-48);
}
for(i=65;i<=90;i++){
_544[i]="KEY_"+String.fromCharCode(i);
}
for(i=96;i<=105;i++){
_544[i]="KEY_NUM_PAD_"+(i-96);
}
for(i=112;i<=123;i++){
_544[i]="KEY_F"+(i-112+1);
}
})();
MochiKit.Signal.Ident=function(_546){
this.source=_546.source;
this.signal=_546.signal;
this.listener=_546.listener;
this.isDOM=_546.isDOM;
this.objOrFunc=_546.objOrFunc;
this.funcOrStr=_546.funcOrStr;
this.connected=_546.connected;
};
MochiKit.Signal.Ident.prototype={};
MochiKit.Base.update(MochiKit.Signal,{__repr__:function(){
return "["+this.NAME+" "+this.VERSION+"]";
},toString:function(){
return this.__repr__();
},_unloadCache:function(){
var self=MochiKit.Signal;
var _548=self._observers;
for(var i=0;i<_548.length;i++){
if(_548[i].signal!=="onload"&&_548[i].signal!=="onunload"){
self._disconnect(_548[i]);
}
}
},_listener:function(src,sig,func,obj,_54e){
var self=MochiKit.Signal;
var E=self.Event;
if(!_54e){
if(typeof (func.im_self)=="undefined"){
return MochiKit.Base.bind(func,obj);
}else{
return func;
}
}
obj=obj||src;
if(typeof (func)=="string"){
if(sig==="onload"||sig==="onunload"){
return function(_551){
obj[func].apply(obj,[new E(src,_551)]);
var _552=new MochiKit.Signal.Ident({source:src,signal:sig,objOrFunc:obj,funcOrStr:func});
MochiKit.Signal._disconnect(_552);
};
}else{
return function(_553){
obj[func].apply(obj,[new E(src,_553)]);
};
}
}else{
if(sig==="onload"||sig==="onunload"){
return function(_554){
func.apply(obj,[new E(src,_554)]);
var _555=new MochiKit.Signal.Ident({source:src,signal:sig,objOrFunc:func});
MochiKit.Signal._disconnect(_555);
};
}else{
return function(_556){
func.apply(obj,[new E(src,_556)]);
};
}
}
},_browserAlreadyHasMouseEnterAndLeave:function(){
return /MSIE/.test(navigator.userAgent);
},_browserLacksMouseWheelEvent:function(){
return /Gecko\//.test(navigator.userAgent);
},_mouseEnterListener:function(src,sig,func,obj){
var E=MochiKit.Signal.Event;
return function(_55c){
var e=new E(src,_55c);
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
},_getDestPair:function(_55e,_55f){
var obj=null;
var func=null;
if(typeof (_55f)!="undefined"){
obj=_55e;
func=_55f;
if(typeof (_55f)=="string"){
if(typeof (_55e[_55f])!="function"){
throw new Error("'funcOrStr' must be a function on 'objOrFunc'");
}
}else{
if(typeof (_55f)!="function"){
throw new Error("'funcOrStr' must be a function or string");
}
}
}else{
if(typeof (_55e)!="function"){
throw new Error("'objOrFunc' must be a function if 'funcOrStr' is not given");
}else{
func=_55e;
}
}
return [obj,func];
},connect:function(src,sig,_564,_565){
src=MochiKit.DOM.getElement(src);
var self=MochiKit.Signal;
if(typeof (sig)!="string"){
throw new Error("'sig' must be a string");
}
var _567=self._getDestPair(_564,_565);
var obj=_567[0];
var func=_567[1];
if(typeof (obj)=="undefined"||obj===null){
obj=src;
}
var _56a=!!(src.addEventListener||src.attachEvent);
if(_56a&&(sig==="onmouseenter"||sig==="onmouseleave")&&!self._browserAlreadyHasMouseEnterAndLeave()){
var _56b=self._mouseEnterListener(src,sig.substr(2),func,obj);
if(sig==="onmouseenter"){
sig="onmouseover";
}else{
sig="onmouseout";
}
}else{
if(_56a&&sig=="onmousewheel"&&self._browserLacksMouseWheelEvent()){
var _56b=self._listener(src,sig,func,obj,_56a);
sig="onDOMMouseScroll";
}else{
var _56b=self._listener(src,sig,func,obj,_56a);
}
}
if(src.addEventListener){
src.addEventListener(sig.substr(2),_56b,false);
}else{
if(src.attachEvent){
src.attachEvent(sig,_56b);
}
}
var _56c=new MochiKit.Signal.Ident({source:src,signal:sig,listener:_56b,isDOM:_56a,objOrFunc:_564,funcOrStr:_565,connected:true});
self._observers.push(_56c);
if(!_56a&&typeof (src.__connect__)=="function"){
var args=MochiKit.Base.extend([_56c],arguments,1);
src.__connect__.apply(src,args);
}
return _56c;
},_disconnect:function(_56e){
if(!_56e.connected){
return;
}
_56e.connected=false;
var src=_56e.source;
var sig=_56e.signal;
var _571=_56e.listener;
if(!_56e.isDOM){
if(typeof (src.__disconnect__)=="function"){
src.__disconnect__(_56e,sig,_56e.objOrFunc,_56e.funcOrStr);
}
return;
}
if(src.removeEventListener){
src.removeEventListener(sig.substr(2),_571,false);
}else{
if(src.detachEvent){
src.detachEvent(sig,_571);
}else{
throw new Error("'src' must be a DOM element");
}
}
},disconnect:function(_572){
var self=MochiKit.Signal;
var _574=self._observers;
var m=MochiKit.Base;
if(arguments.length>1){
var src=MochiKit.DOM.getElement(arguments[0]);
var sig=arguments[1];
var obj=arguments[2];
var func=arguments[3];
for(var i=_574.length-1;i>=0;i--){
var o=_574[i];
if(o.source===src&&o.signal===sig&&o.objOrFunc===obj&&o.funcOrStr===func){
self._disconnect(o);
if(!self._lock){
_574.splice(i,1);
}else{
self._dirty=true;
}
return true;
}
}
}else{
var idx=m.findIdentical(_574,_572);
if(idx>=0){
self._disconnect(_572);
if(!self._lock){
_574.splice(idx,1);
}else{
self._dirty=true;
}
return true;
}
}
return false;
},disconnectAllTo:function(_57d,_57e){
var self=MochiKit.Signal;
var _580=self._observers;
var _581=self._disconnect;
var _582=self._lock;
var _583=self._dirty;
if(typeof (_57e)==="undefined"){
_57e=null;
}
for(var i=_580.length-1;i>=0;i--){
var _585=_580[i];
if(_585.objOrFunc===_57d&&(_57e===null||_585.funcOrStr===_57e)){
_581(_585);
if(_582){
_583=true;
}else{
_580.splice(i,1);
}
}
}
self._dirty=_583;
},disconnectAll:function(src,sig){
src=MochiKit.DOM.getElement(src);
var m=MochiKit.Base;
var _589=m.flattenArguments(m.extend(null,arguments,1));
var self=MochiKit.Signal;
var _58b=self._disconnect;
var _58c=self._observers;
var i,_58e;
var _58f=self._lock;
var _590=self._dirty;
if(_589.length===0){
for(i=_58c.length-1;i>=0;i--){
_58e=_58c[i];
if(_58e.source===src){
_58b(_58e);
if(!_58f){
_58c.splice(i,1);
}else{
_590=true;
}
}
}
}else{
var sigs={};
for(i=0;i<_589.length;i++){
sigs[_589[i]]=true;
}
for(i=_58c.length-1;i>=0;i--){
_58e=_58c[i];
if(_58e.source===src&&_58e.signal in sigs){
_58b(_58e);
if(!_58f){
_58c.splice(i,1);
}else{
_590=true;
}
}
}
}
self._dirty=_590;
},signal:function(src,sig){
var self=MochiKit.Signal;
var _595=self._observers;
src=MochiKit.DOM.getElement(src);
var args=MochiKit.Base.extend(null,arguments,2);
var _597=[];
self._lock=true;
for(var i=0;i<_595.length;i++){
var _599=_595[i];
if(_599.source===src&&_599.signal===sig&&_599.connected){
try{
_599.listener.apply(src,args);
}
catch(e){
_597.push(e);
}
}
}
self._lock=false;
if(self._dirty){
self._dirty=false;
for(var i=_595.length-1;i>=0;i--){
if(!_595[i].connected){
_595.splice(i,1);
}
}
}
if(_597.length==1){
throw _597[0];
}else{
if(_597.length>1){
var e=new Error("Multiple errors thrown in handling 'sig', see errors property");
e.errors=_597;
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
MochiKit.Position.VERSION="1.4";
MochiKit.Position.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.Position.toString=function(){
return this.__repr__();
};
MochiKit.Position.EXPORT_OK=[];
MochiKit.Position.EXPORT=[];
MochiKit.Base.update(MochiKit.Position,{includeScrollOffsets:false,prepare:function(){
var _59d=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;
var _59e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;
this.windowOffset=new MochiKit.Style.Coordinates(_59d,_59e);
},cumulativeOffset:function(_59f){
var _5a0=0;
var _5a1=0;
do{
_5a0+=_59f.offsetTop||0;
_5a1+=_59f.offsetLeft||0;
_59f=_59f.offsetParent;
}while(_59f);
return new MochiKit.Style.Coordinates(_5a1,_5a0);
},realOffset:function(_5a2){
var _5a3=0;
var _5a4=0;
do{
_5a3+=_5a2.scrollTop||0;
_5a4+=_5a2.scrollLeft||0;
_5a2=_5a2.parentNode;
}while(_5a2);
return new MochiKit.Style.Coordinates(_5a4,_5a3);
},within:function(_5a5,x,y){
if(this.includeScrollOffsets){
return this.withinIncludingScrolloffsets(_5a5,x,y);
}
this.xcomp=x;
this.ycomp=y;
this.offset=this.cumulativeOffset(_5a5);
if(_5a5.style.position=="fixed"){
this.offset.x+=this.windowOffset.x;
this.offset.y+=this.windowOffset.y;
}
return (y>=this.offset.y&&y<this.offset.y+_5a5.offsetHeight&&x>=this.offset.x&&x<this.offset.x+_5a5.offsetWidth);
},withinIncludingScrolloffsets:function(_5a8,x,y){
var _5ab=this.realOffset(_5a8);
this.xcomp=x+_5ab.x-this.windowOffset.x;
this.ycomp=y+_5ab.y-this.windowOffset.y;
this.offset=this.cumulativeOffset(_5a8);
return (this.ycomp>=this.offset.y&&this.ycomp<this.offset.y+_5a8.offsetHeight&&this.xcomp>=this.offset.x&&this.xcomp<this.offset.x+_5a8.offsetWidth);
},overlap:function(mode,_5ad){
if(!mode){
return 0;
}
if(mode=="vertical"){
return ((this.offset.y+_5ad.offsetHeight)-this.ycomp)/_5ad.offsetHeight;
}
if(mode=="horizontal"){
return ((this.offset.x+_5ad.offsetWidth)-this.xcomp)/_5ad.offsetWidth;
}
},absolutize:function(_5ae){
_5ae=MochiKit.DOM.getElement(_5ae);
if(_5ae.style.position=="absolute"){
return;
}
MochiKit.Position.prepare();
var _5af=MochiKit.Position.positionedOffset(_5ae);
var _5b0=_5ae.clientWidth;
var _5b1=_5ae.clientHeight;
var _5b2={"position":_5ae.style.position,"left":_5af.x-parseFloat(_5ae.style.left||0),"top":_5af.y-parseFloat(_5ae.style.top||0),"width":_5ae.style.width,"height":_5ae.style.height};
_5ae.style.position="absolute";
_5ae.style.top=_5af.y+"px";
_5ae.style.left=_5af.x+"px";
_5ae.style.width=_5b0+"px";
_5ae.style.height=_5b1+"px";
return _5b2;
},positionedOffset:function(_5b3){
var _5b4=0,_5b5=0;
do{
_5b4+=_5b3.offsetTop||0;
_5b5+=_5b3.offsetLeft||0;
_5b3=_5b3.offsetParent;
if(_5b3){
p=MochiKit.Style.getStyle(_5b3,"position");
if(p=="relative"||p=="absolute"){
break;
}
}
}while(_5b3);
return new MochiKit.Style.Coordinates(_5b5,_5b4);
},relativize:function(_5b6,_5b7){
_5b6=MochiKit.DOM.getElement(_5b6);
if(_5b6.style.position=="relative"){
return;
}
MochiKit.Position.prepare();
var top=parseFloat(_5b6.style.top||0)-(_5b7["top"]||0);
var left=parseFloat(_5b6.style.left||0)-(_5b7["left"]||0);
_5b6.style.position=_5b7["position"];
_5b6.style.top=top+"px";
_5b6.style.left=left+"px";
_5b6.style.width=_5b7["width"];
_5b6.style.height=_5b7["height"];
},clone:function(_5ba,_5bb){
_5ba=MochiKit.DOM.getElement(_5ba);
_5bb=MochiKit.DOM.getElement(_5bb);
_5bb.style.position="absolute";
var _5bc=this.cumulativeOffset(_5ba);
_5bb.style.top=_5bc.y+"px";
_5bb.style.left=_5bc.x+"px";
_5bb.style.width=_5ba.offsetWidth+"px";
_5bb.style.height=_5ba.offsetHeight+"px";
},page:function(_5bd){
var _5be=0;
var _5bf=0;
var _5c0=_5bd;
do{
_5be+=_5c0.offsetTop||0;
_5bf+=_5c0.offsetLeft||0;
if(_5c0.offsetParent==document.body&&MochiKit.Style.getStyle(_5c0,"position")=="absolute"){
break;
}
}while(_5c0=_5c0.offsetParent);
_5c0=_5bd;
do{
_5be-=_5c0.scrollTop||0;
_5bf-=_5c0.scrollLeft||0;
}while(_5c0=_5c0.parentNode);
return new MochiKit.Style.Coordinates(_5bf,_5be);
}});
MochiKit.Position.__new__=function(win){
var m=MochiKit.Base;
this.EXPORT_TAGS={":common":this.EXPORT,":all":m.concat(this.EXPORT,this.EXPORT_OK)};
m.nameFunctions(this);
};
MochiKit.Position.__new__(this);
MochiKit.Base._deps("Visual",["Base","DOM","Style","Color","Position"]);
MochiKit.Visual.NAME="MochiKit.Visual";
MochiKit.Visual.VERSION="1.4";
MochiKit.Visual.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.Visual.toString=function(){
return this.__repr__();
};
MochiKit.Visual._RoundCorners=function(e,_5c4){
e=MochiKit.DOM.getElement(e);
this._setOptions(_5c4);
if(this.options.__unstable__wrapElement){
e=this._doWrap(e);
}
var _5c5=this.options.color;
var C=MochiKit.Color.Color;
if(this.options.color==="fromElement"){
_5c5=C.fromBackground(e);
}else{
if(!(_5c5 instanceof C)){
_5c5=C.fromString(_5c5);
}
}
this.isTransparent=(_5c5.asRGB().a<=0);
var _5c7=this.options.bgColor;
if(this.options.bgColor==="fromParent"){
_5c7=C.fromBackground(e.offsetParent);
}else{
if(!(_5c7 instanceof C)){
_5c7=C.fromString(_5c7);
}
}
this._roundCornersImpl(e,_5c5,_5c7);
};
MochiKit.Visual._RoundCorners.prototype={_doWrap:function(e){
var _5c9=e.parentNode;
var doc=MochiKit.DOM.currentDocument();
if(typeof (doc.defaultView)==="undefined"||doc.defaultView===null){
return e;
}
var _5cb=doc.defaultView.getComputedStyle(e,null);
if(typeof (_5cb)==="undefined"||_5cb===null){
return e;
}
var _5cc=MochiKit.DOM.DIV({"style":{display:"block",marginTop:_5cb.getPropertyValue("padding-top"),marginRight:_5cb.getPropertyValue("padding-right"),marginBottom:_5cb.getPropertyValue("padding-bottom"),marginLeft:_5cb.getPropertyValue("padding-left"),padding:"0px"}});
_5cc.innerHTML=e.innerHTML;
e.innerHTML="";
e.appendChild(_5cc);
return e;
},_roundCornersImpl:function(e,_5ce,_5cf){
if(this.options.border){
this._renderBorder(e,_5cf);
}
if(this._isTopRounded()){
this._roundTopCorners(e,_5ce,_5cf);
}
if(this._isBottomRounded()){
this._roundBottomCorners(e,_5ce,_5cf);
}
},_renderBorder:function(el,_5d1){
var _5d2="1px solid "+this._borderColor(_5d1);
var _5d3="border-left: "+_5d2;
var _5d4="border-right: "+_5d2;
var _5d5="style='"+_5d3+";"+_5d4+"'";
el.innerHTML="<div "+_5d5+">"+el.innerHTML+"</div>";
},_roundTopCorners:function(el,_5d7,_5d8){
var _5d9=this._createCorner(_5d8);
for(var i=0;i<this.options.numSlices;i++){
_5d9.appendChild(this._createCornerSlice(_5d7,_5d8,i,"top"));
}
el.style.paddingTop=0;
el.insertBefore(_5d9,el.firstChild);
},_roundBottomCorners:function(el,_5dc,_5dd){
var _5de=this._createCorner(_5dd);
for(var i=(this.options.numSlices-1);i>=0;i--){
_5de.appendChild(this._createCornerSlice(_5dc,_5dd,i,"bottom"));
}
el.style.paddingBottom=0;
el.appendChild(_5de);
},_createCorner:function(_5e0){
var dom=MochiKit.DOM;
return dom.DIV({style:{backgroundColor:_5e0.toString()}});
},_createCornerSlice:function(_5e2,_5e3,n,_5e5){
var _5e6=MochiKit.DOM.SPAN();
var _5e7=_5e6.style;
_5e7.backgroundColor=_5e2.toString();
_5e7.display="block";
_5e7.height="1px";
_5e7.overflow="hidden";
_5e7.fontSize="1px";
var _5e8=this._borderColor(_5e2,_5e3);
if(this.options.border&&n===0){
_5e7.borderTopStyle="solid";
_5e7.borderTopWidth="1px";
_5e7.borderLeftWidth="0px";
_5e7.borderRightWidth="0px";
_5e7.borderBottomWidth="0px";
_5e7.height="0px";
_5e7.borderColor=_5e8.toString();
}else{
if(_5e8){
_5e7.borderColor=_5e8.toString();
_5e7.borderStyle="solid";
_5e7.borderWidth="0px 1px";
}
}
if(!this.options.compact&&(n==(this.options.numSlices-1))){
_5e7.height="2px";
}
this._setMargin(_5e6,n,_5e5);
this._setBorder(_5e6,n,_5e5);
return _5e6;
},_setOptions:function(_5e9){
this.options={corners:"all",color:"fromElement",bgColor:"fromParent",blend:true,border:false,compact:false,__unstable__wrapElement:false};
MochiKit.Base.update(this.options,_5e9);
this.options.numSlices=(this.options.compact?2:4);
},_whichSideTop:function(){
var _5ea=this.options.corners;
if(this._hasString(_5ea,"all","top")){
return "";
}
var _5eb=(_5ea.indexOf("tl")!=-1);
var _5ec=(_5ea.indexOf("tr")!=-1);
if(_5eb&&_5ec){
return "";
}
if(_5eb){
return "left";
}
if(_5ec){
return "right";
}
return "";
},_whichSideBottom:function(){
var _5ed=this.options.corners;
if(this._hasString(_5ed,"all","bottom")){
return "";
}
var _5ee=(_5ed.indexOf("bl")!=-1);
var _5ef=(_5ed.indexOf("br")!=-1);
if(_5ee&&_5ef){
return "";
}
if(_5ee){
return "left";
}
if(_5ef){
return "right";
}
return "";
},_borderColor:function(_5f0,_5f1){
if(_5f0=="transparent"){
return _5f1;
}else{
if(this.options.border){
return this.options.border;
}else{
if(this.options.blend){
return _5f1.blendedColor(_5f0);
}
}
}
return "";
},_setMargin:function(el,n,_5f4){
var _5f5=this._marginSize(n)+"px";
var _5f6=(_5f4=="top"?this._whichSideTop():this._whichSideBottom());
var _5f7=el.style;
if(_5f6=="left"){
_5f7.marginLeft=_5f5;
_5f7.marginRight="0px";
}else{
if(_5f6=="right"){
_5f7.marginRight=_5f5;
_5f7.marginLeft="0px";
}else{
_5f7.marginLeft=_5f5;
_5f7.marginRight=_5f5;
}
}
},_setBorder:function(el,n,_5fa){
var _5fb=this._borderSize(n)+"px";
var _5fc=(_5fa=="top"?this._whichSideTop():this._whichSideBottom());
var _5fd=el.style;
if(_5fc=="left"){
_5fd.borderLeftWidth=_5fb;
_5fd.borderRightWidth="0px";
}else{
if(_5fc=="right"){
_5fd.borderRightWidth=_5fb;
_5fd.borderLeftWidth="0px";
}else{
_5fd.borderLeftWidth=_5fb;
_5fd.borderRightWidth=_5fb;
}
}
},_marginSize:function(n){
if(this.isTransparent){
return 0;
}
var o=this.options;
if(o.compact&&o.blend){
var _600=[1,0];
return _600[n];
}else{
if(o.compact){
var _601=[2,1];
return _601[n];
}else{
if(o.blend){
var _602=[3,2,1,0];
return _602[n];
}else{
var _603=[5,3,2,1];
return _603[n];
}
}
}
},_borderSize:function(n){
var o=this.options;
var _606;
if(o.compact&&(o.blend||this.isTransparent)){
return 1;
}else{
if(o.compact){
_606=[1,0];
}else{
if(o.blend){
_606=[2,1,1,1];
}else{
if(o.border){
_606=[0,2,0,0];
}else{
if(this.isTransparent){
_606=[5,3,2,1];
}else{
return 0;
}
}
}
}
}
return _606[n];
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
MochiKit.Visual.roundElement=function(e,_60b){
new MochiKit.Visual._RoundCorners(e,_60b);
};
MochiKit.Visual.roundClass=function(_60c,_60d,_60e){
var _60f=MochiKit.DOM.getElementsByTagAndClassName(_60c,_60d);
for(var i=0;i<_60f.length;i++){
MochiKit.Visual.roundElement(_60f[i],_60e);
}
};
MochiKit.Visual.tagifyText=function(_611,_612){
_612=_612||"position:relative";
if(/MSIE/.test(navigator.userAgent)){
_612+=";zoom:1";
}
_611=MochiKit.DOM.getElement(_611);
var ma=MochiKit.Base.map;
ma(function(_614){
if(_614.nodeType==3){
ma(function(_615){
_611.insertBefore(MochiKit.DOM.SPAN({style:_612},_615==" "?String.fromCharCode(160):_615),_614);
},_614.nodeValue.split(""));
MochiKit.DOM.removeElement(_614);
}
},_611.childNodes);
};
MochiKit.Visual.forceRerendering=function(_616){
try{
_616=MochiKit.DOM.getElement(_616);
var n=document.createTextNode(" ");
_616.appendChild(n);
_616.removeChild(n);
}
catch(e){
}
};
MochiKit.Visual.multiple=function(_618,_619,_61a){
_61a=MochiKit.Base.update({speed:0.1,delay:0},_61a);
var _61b=_61a.delay;
var _61c=0;
MochiKit.Base.map(function(_61d){
_61a.delay=_61c*_61a.speed+_61b;
new _619(_61d,_61a);
_61c+=1;
},_618);
};
MochiKit.Visual.PAIRS={"slide":["slideDown","slideUp"],"blind":["blindDown","blindUp"],"appear":["appear","fade"],"size":["grow","shrink"]};
MochiKit.Visual.toggle=function(_61e,_61f,_620){
_61e=MochiKit.DOM.getElement(_61e);
_61f=(_61f||"appear").toLowerCase();
_620=MochiKit.Base.update({queue:{position:"end",scope:(_61e.id||"global"),limit:1}},_620);
var v=MochiKit.Visual;
v[MochiKit.Style.getStyle(_61e,"display")!="none"?v.PAIRS[_61f][1]:v.PAIRS[_61f][0]](_61e,_620);
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
MochiKit.Visual.Transitions.pulse=function(pos,_628){
if(_628){
pos*=2*_628;
}else{
pos*=10;
}
var _629=pos-Math.floor(pos);
return (Math.floor(pos)%2==0)?_629:1-_629;
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
},add:function(_62e){
var _62f=new Date().getTime();
var _630=(typeof (_62e.options.queue)=="string")?_62e.options.queue:_62e.options.queue.position;
var ma=MochiKit.Base.map;
switch(_630){
case "front":
ma(function(e){
if(e.state=="idle"){
e.startOn+=_62e.finishOn;
e.finishOn+=_62e.finishOn;
}
},this.effects);
break;
case "end":
var _633;
ma(function(e){
var i=e.finishOn;
if(i>=(_633||i)){
_633=i;
}
},this.effects);
_62f=_633||_62f;
break;
case "break":
ma(function(e){
e.finalize();
},this.effects);
break;
}
_62e.startOn+=_62f;
_62e.finishOn+=_62f;
if(!_62e.options.queue.limit||this.effects.length<_62e.options.queue.limit){
this.effects.push(_62e);
}
if(!this.interval){
this.interval=this.startLoop(MochiKit.Base.bind(this.loop,this),40);
}
},startLoop:function(func,_638){
return setInterval(func,_638);
},remove:function(_639){
this.effects=MochiKit.Base.filter(function(e){
return e!=_639;
},this.effects);
if(!this.effects.length){
this.stopLoop(this.interval);
this.interval=null;
}
},stopLoop:function(_63b){
clearInterval(_63b);
},loop:function(){
var _63c=new Date().getTime();
MochiKit.Base.map(function(_63d){
_63d.loop(_63c);
},this.effects);
}});
MochiKit.Visual.Queues={instances:{},get:function(_63e){
if(typeof (_63e)!="string"){
return _63e;
}
if(!this.instances[_63e]){
this.instances[_63e]=new MochiKit.Visual.ScopedQueue();
}
return this.instances[_63e];
}};
MochiKit.Visual.Queue=MochiKit.Visual.Queues.get("global");
MochiKit.Visual.DefaultOptions={transition:MochiKit.Visual.Transitions.sinoidal,duration:1,fps:25,sync:false,from:0,to:1,delay:0,queue:"parallel"};
MochiKit.Visual.Base=function(){
};
MochiKit.Visual.Base.prototype={__class__:MochiKit.Visual.Base,start:function(_63f){
var v=MochiKit.Visual;
this.options=MochiKit.Base.setdefault(_63f,v.DefaultOptions);
this.currentFrame=0;
this.state="idle";
this.startOn=this.options.delay*1000;
this.finishOn=this.startOn+(this.options.duration*1000);
this.event("beforeStart");
if(!this.options.sync){
v.Queues.get(typeof (this.options.queue)=="string"?"global":this.options.queue.scope).add(this);
}
},loop:function(_641){
if(_641>=this.startOn){
if(_641>=this.finishOn){
return this.finalize();
}
var pos=(_641-this.startOn)/(this.finishOn-this.startOn);
var _643=Math.round(pos*this.options.fps*this.options.duration);
if(_643>this.currentFrame){
this.render(pos);
this.currentFrame=_643;
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
},update:function(_645){
},event:function(_646){
if(this.options[_646+"Internal"]){
this.options[_646+"Internal"](this);
}
if(this.options[_646]){
this.options[_646](this);
}
},repr:function(){
return "["+this.__class__.NAME+", options:"+MochiKit.Base.repr(this.options)+"]";
}};
MochiKit.Visual.Parallel=function(_647,_648){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_647,_648);
}
this.__init__(_647,_648);
};
MochiKit.Visual.Parallel.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Parallel.prototype,{__class__:MochiKit.Visual.Parallel,__init__:function(_64a,_64b){
this.effects=_64a||[];
this.start(_64b);
},update:function(_64c){
MochiKit.Base.map(function(_64d){
_64d.render(_64c);
},this.effects);
},finish:function(){
MochiKit.Base.map(function(_64e){
_64e.finalize();
},this.effects);
}});
MochiKit.Visual.Sequence=function(_64f,_650){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_64f,_650);
}
this.__init__(_64f,_650);
};
MochiKit.Visual.Sequence.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Sequence.prototype,{__class__:MochiKit.Visual.Sequence,__init__:function(_652,_653){
var defs={transition:MochiKit.Visual.Transitions.linear,duration:0};
this.effects=_652||[];
MochiKit.Base.map(function(_655){
defs.duration+=_655.options.duration;
},this.effects);
MochiKit.Base.setdefault(_653,defs);
this.start(_653);
},update:function(_656){
var time=_656*this.options.duration;
for(var i=0;i<this.effects.length;i++){
var _659=this.effects[i];
if(time<=_659.options.duration){
_659.render(time/_659.options.duration);
break;
}else{
time-=_659.options.duration;
}
}
},finish:function(){
MochiKit.Base.map(function(_65a){
_65a.finalize();
},this.effects);
}});
MochiKit.Visual.Opacity=function(_65b,_65c){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_65b,_65c);
}
this.__init__(_65b,_65c);
};
MochiKit.Visual.Opacity.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Opacity.prototype,{__class__:MochiKit.Visual.Opacity,__init__:function(_65e,_65f){
var b=MochiKit.Base;
var s=MochiKit.Style;
this.element=MochiKit.DOM.getElement(_65e);
if(this.element.currentStyle&&(!this.element.currentStyle.hasLayout)){
s.setStyle(this.element,{zoom:1});
}
_65f=b.update({from:s.getStyle(this.element,"opacity")||0,to:1},_65f);
this.start(_65f);
},update:function(_662){
MochiKit.Style.setStyle(this.element,{"opacity":_662});
}});
MochiKit.Visual.Move=function(_663,_664){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_663,_664);
}
this.__init__(_663,_664);
};
MochiKit.Visual.Move.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Move.prototype,{__class__:MochiKit.Visual.Move,__init__:function(_666,_667){
this.element=MochiKit.DOM.getElement(_666);
_667=MochiKit.Base.update({x:0,y:0,mode:"relative"},_667);
this.start(_667);
},setup:function(){
MochiKit.DOM.makePositioned(this.element);
var s=this.element.style;
var _669=s.visibility;
var _66a=s.display;
if(_66a=="none"){
s.visibility="hidden";
s.display="";
}
this.originalLeft=parseFloat(MochiKit.Style.getStyle(this.element,"left")||"0");
this.originalTop=parseFloat(MochiKit.Style.getStyle(this.element,"top")||"0");
if(this.options.mode=="absolute"){
this.options.x-=this.originalLeft;
this.options.y-=this.originalTop;
}
if(_66a=="none"){
s.visibility=_669;
s.display=_66a;
}
},update:function(_66b){
MochiKit.Style.setStyle(this.element,{left:Math.round(this.options.x*_66b+this.originalLeft)+"px",top:Math.round(this.options.y*_66b+this.originalTop)+"px"});
}});
MochiKit.Visual.Scale=function(_66c,_66d,_66e){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_66c,_66d,_66e);
}
this.__init__(_66c,_66d,_66e);
};
MochiKit.Visual.Scale.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Scale.prototype,{__class__:MochiKit.Visual.Scale,__init__:function(_670,_671,_672){
this.element=MochiKit.DOM.getElement(_670);
_672=MochiKit.Base.update({scaleX:true,scaleY:true,scaleContent:true,scaleFromCenter:false,scaleMode:"box",scaleFrom:100,scaleTo:_671},_672);
this.start(_672);
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
var _676=MochiKit.Style.getStyle(this.element,"font-size")||"100%";
ma(b(function(_677){
if(_676.indexOf(_677)>0){
this.fontSize=parseFloat(_676);
this.fontSizeType=_677;
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
},update:function(_678){
var _679=(this.options.scaleFrom/100)+(this.factor*_678);
if(this.options.scaleContent&&this.fontSize){
MochiKit.Style.setStyle(this.element,{fontSize:this.fontSize*_679+this.fontSizeType});
}
this.setDimensions(this.dims[0]*_679,this.dims[1]*_679);
},finish:function(){
if(this.restoreAfterFinish){
MochiKit.Style.setStyle(this.element,this.originalStyle);
}
},setDimensions:function(_67a,_67b){
var d={};
var r=Math.round;
if(/MSIE/.test(navigator.userAgent)){
r=Math.ceil;
}
if(this.options.scaleX){
d.width=r(_67b)+"px";
}
if(this.options.scaleY){
d.height=r(_67a)+"px";
}
if(this.options.scaleFromCenter){
var topd=(_67a-this.dims[0])/2;
var _67f=(_67b-this.dims[1])/2;
if(this.elementPositioning=="absolute"){
if(this.options.scaleY){
d.top=this.originalTop-topd+"px";
}
if(this.options.scaleX){
d.left=this.originalLeft-_67f+"px";
}
}else{
if(this.options.scaleY){
d.top=-topd+"px";
}
if(this.options.scaleX){
d.left=-_67f+"px";
}
}
}
MochiKit.Style.setStyle(this.element,d);
}});
MochiKit.Visual.Highlight=function(_680,_681){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_680,_681);
}
this.__init__(_680,_681);
};
MochiKit.Visual.Highlight.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Highlight.prototype,{__class__:MochiKit.Visual.Highlight,__init__:function(_683,_684){
this.element=MochiKit.DOM.getElement(_683);
_684=MochiKit.Base.update({startcolor:"#ffff99"},_684);
this.start(_684);
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
},update:function(_689){
var m="#";
MochiKit.Base.map(MochiKit.Base.bind(function(i){
m+=MochiKit.Color.toColorPart(Math.round(this._base[i]+this._delta[i]*_689));
},this),[0,1,2]);
MochiKit.Style.setStyle(this.element,{backgroundColor:m});
},finish:function(){
MochiKit.Style.setStyle(this.element,MochiKit.Base.update(this.oldStyle,{backgroundColor:this.options.restorecolor}));
}});
MochiKit.Visual.ScrollTo=function(_68c,_68d){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_68c,_68d);
}
this.__init__(_68c,_68d);
};
MochiKit.Visual.ScrollTo.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.ScrollTo.prototype,{__class__:MochiKit.Visual.ScrollTo,__init__:function(_68f,_690){
this.element=MochiKit.DOM.getElement(_68f);
this.start(_690);
},setup:function(){
var p=MochiKit.Position;
p.prepare();
var _692=p.cumulativeOffset(this.element);
if(this.options.offset){
_692.y+=this.options.offset;
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
this.delta=(_692.y>max?max:_692.y)-this.scrollStart;
},update:function(_694){
var p=MochiKit.Position;
p.prepare();
window.scrollTo(p.windowOffset.x,this.scrollStart+(_694*this.delta));
}});
MochiKit.Visual.CSS_LENGTH=/^(([\+\-]?[0-9\.]+)(em|ex|px|in|cm|mm|pt|pc|\%))|0$/;
MochiKit.Visual.Morph=function(_696,_697){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_696,_697);
}
this.__init__(_696,_697);
};
MochiKit.Visual.Morph.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Morph.prototype,{__class__:MochiKit.Visual.Morph,__init__:function(_699,_69a){
this.element=MochiKit.DOM.getElement(_699);
this.start(_69a);
},setup:function(){
var b=MochiKit.Base;
var _69c=this.options.style;
this.styleStart={};
this.styleEnd={};
this.units={};
var _69d,unit;
for(var s in _69c){
_69d=_69c[s];
s=b.camelize(s);
if(MochiKit.Visual.CSS_LENGTH.test(_69d)){
var _6a0=_69d.match(/^([\+\-]?[0-9\.]+)(.*)$/);
_69d=parseFloat(_6a0[1]);
unit=(_6a0.length==3)?_6a0[2]:null;
this.styleEnd[s]=_69d;
this.units[s]=unit;
_69d=MochiKit.Style.getStyle(this.element,s);
_6a0=_69d.match(/^([\+\-]?[0-9\.]+)(.*)$/);
_69d=parseFloat(_6a0[1]);
this.styleStart[s]=_69d;
}else{
var c=MochiKit.Color.Color;
_69d=c.fromString(_69d);
if(_69d){
this.units[s]="color";
this.styleEnd[s]=_69d.toHexString();
_69d=MochiKit.Style.getStyle(this.element,s);
this.styleStart[s]=c.fromString(_69d).toHexString();
this.styleStart[s]=b.map(b.bind(function(i){
return parseInt(this.styleStart[s].slice(i*2+1,i*2+3),16);
},this),[0,1,2]);
this.styleEnd[s]=b.map(b.bind(function(i){
return parseInt(this.styleEnd[s].slice(i*2+1,i*2+3),16);
},this),[0,1,2]);
}
}
}
},update:function(_6a4){
var _6a5;
for(var s in this.styleStart){
if(this.units[s]=="color"){
var m="#";
var _6a8=this.styleStart[s];
var end=this.styleEnd[s];
MochiKit.Base.map(MochiKit.Base.bind(function(i){
m+=MochiKit.Color.toColorPart(Math.round(_6a8[i]+(end[i]-_6a8[i])*_6a4));
},this),[0,1,2]);
this.element.style[s]=m;
}else{
_6a5=this.styleStart[s]+Math.round((this.styleEnd[s]-this.styleStart[s])*_6a4*1000)/1000+this.units[s];
this.element.style[s]=_6a5;
}
}
}});
MochiKit.Visual.fade=function(_6ab,_6ac){
var s=MochiKit.Style;
var _6ae=s.getStyle(_6ab,"opacity");
_6ac=MochiKit.Base.update({from:s.getStyle(_6ab,"opacity")||1,to:0,afterFinishInternal:function(_6af){
if(_6af.options.to!==0){
return;
}
s.hideElement(_6af.element);
s.setStyle(_6af.element,{"opacity":_6ae});
}},_6ac);
return new MochiKit.Visual.Opacity(_6ab,_6ac);
};
MochiKit.Visual.appear=function(_6b0,_6b1){
var s=MochiKit.Style;
var v=MochiKit.Visual;
_6b1=MochiKit.Base.update({from:(s.getStyle(_6b0,"display")=="none"?0:s.getStyle(_6b0,"opacity")||0),to:1,afterFinishInternal:function(_6b4){
v.forceRerendering(_6b4.element);
},beforeSetupInternal:function(_6b5){
s.setStyle(_6b5.element,{"opacity":_6b5.options.from});
s.showElement(_6b5.element);
}},_6b1);
return new v.Opacity(_6b0,_6b1);
};
MochiKit.Visual.puff=function(_6b6,_6b7){
var s=MochiKit.Style;
var v=MochiKit.Visual;
_6b6=MochiKit.DOM.getElement(_6b6);
var _6ba=MochiKit.Style.getElementDimensions(_6b6,true);
var _6bb={position:s.getStyle(_6b6,"position"),top:_6b6.style.top,left:_6b6.style.left,width:_6b6.style.width,height:_6b6.style.height,opacity:s.getStyle(_6b6,"opacity")};
_6b7=MochiKit.Base.update({beforeSetupInternal:function(_6bc){
MochiKit.Position.absolutize(_6bc.effects[0].element);
},afterFinishInternal:function(_6bd){
s.hideElement(_6bd.effects[0].element);
s.setStyle(_6bd.effects[0].element,_6bb);
},scaleContent:true,scaleFromCenter:true},_6b7);
return new v.Parallel([new v.Scale(_6b6,200,{sync:true,scaleFromCenter:_6b7.scaleFromCenter,scaleMode:{originalHeight:_6ba.h,originalWidth:_6ba.w},scaleContent:_6b7.scaleContent,restoreAfterFinish:true}),new v.Opacity(_6b6,{sync:true,to:0})],_6b7);
};
MochiKit.Visual.blindUp=function(_6be,_6bf){
var d=MochiKit.DOM;
_6be=d.getElement(_6be);
var _6c1=MochiKit.Style.getElementDimensions(_6be,true);
var _6c2=d.makeClipping(_6be);
_6bf=MochiKit.Base.update({scaleContent:false,scaleX:false,scaleMode:{originalHeight:_6c1.h,originalWidth:_6c1.w},restoreAfterFinish:true,afterFinishInternal:function(_6c3){
MochiKit.Style.hideElement(_6c3.element);
d.undoClipping(_6c3.element,_6c2);
}},_6bf);
return new MochiKit.Visual.Scale(_6be,0,_6bf);
};
MochiKit.Visual.blindDown=function(_6c4,_6c5){
var d=MochiKit.DOM;
var s=MochiKit.Style;
_6c4=d.getElement(_6c4);
var _6c8=s.getElementDimensions(_6c4,true);
var _6c9;
_6c5=MochiKit.Base.update({scaleContent:false,scaleX:false,scaleFrom:0,scaleMode:{originalHeight:_6c8.h,originalWidth:_6c8.w},restoreAfterFinish:true,afterSetupInternal:function(_6ca){
_6c9=d.makeClipping(_6ca.element);
s.setStyle(_6ca.element,{height:"0px"});
s.showElement(_6ca.element);
},afterFinishInternal:function(_6cb){
d.undoClipping(_6cb.element,_6c9);
}},_6c5);
return new MochiKit.Visual.Scale(_6c4,100,_6c5);
};
MochiKit.Visual.switchOff=function(_6cc,_6cd){
var d=MochiKit.DOM;
var s=MochiKit.Style;
_6cc=d.getElement(_6cc);
var _6d0=s.getElementDimensions(_6cc,true);
var _6d1=s.getStyle(_6cc,"opacity");
var _6d2;
_6cd=MochiKit.Base.update({duration:0.7,restoreAfterFinish:true,beforeSetupInternal:function(_6d3){
d.makePositioned(_6cc);
_6d2=d.makeClipping(_6cc);
},afterFinishInternal:function(_6d4){
s.hideElement(_6cc);
d.undoClipping(_6cc,_6d2);
d.undoPositioned(_6cc);
s.setStyle(_6cc,{"opacity":_6d1});
}},_6cd);
var v=MochiKit.Visual;
return new v.Sequence([new v.appear(_6cc,{sync:true,duration:0.57*_6cd.duration,from:0,transition:v.Transitions.flicker}),new v.Scale(_6cc,1,{sync:true,duration:0.43*_6cd.duration,scaleFromCenter:true,scaleX:false,scaleMode:{originalHeight:_6d0.h,originalWidth:_6d0.w},scaleContent:false,restoreAfterFinish:true})],_6cd);
};
MochiKit.Visual.dropOut=function(_6d6,_6d7){
var d=MochiKit.DOM;
var s=MochiKit.Style;
_6d6=d.getElement(_6d6);
var _6da={top:s.getStyle(_6d6,"top"),left:s.getStyle(_6d6,"left"),opacity:s.getStyle(_6d6,"opacity")};
_6d7=MochiKit.Base.update({duration:0.5,distance:100,beforeSetupInternal:function(_6db){
d.makePositioned(_6db.effects[0].element);
},afterFinishInternal:function(_6dc){
s.hideElement(_6dc.effects[0].element);
d.undoPositioned(_6dc.effects[0].element);
s.setStyle(_6dc.effects[0].element,_6da);
}},_6d7);
var v=MochiKit.Visual;
return new v.Parallel([new v.Move(_6d6,{x:0,y:_6d7.distance,sync:true}),new v.Opacity(_6d6,{sync:true,to:0})],_6d7);
};
MochiKit.Visual.shake=function(_6de,_6df){
var d=MochiKit.DOM;
var v=MochiKit.Visual;
var s=MochiKit.Style;
_6de=d.getElement(_6de);
var _6e3={top:s.getStyle(_6de,"top"),left:s.getStyle(_6de,"left")};
_6df=MochiKit.Base.update({duration:0.5,afterFinishInternal:function(_6e4){
d.undoPositioned(_6de);
s.setStyle(_6de,_6e3);
}},_6df);
return new v.Sequence([new v.Move(_6de,{sync:true,duration:0.1*_6df.duration,x:20,y:0}),new v.Move(_6de,{sync:true,duration:0.2*_6df.duration,x:-40,y:0}),new v.Move(_6de,{sync:true,duration:0.2*_6df.duration,x:40,y:0}),new v.Move(_6de,{sync:true,duration:0.2*_6df.duration,x:-40,y:0}),new v.Move(_6de,{sync:true,duration:0.2*_6df.duration,x:40,y:0}),new v.Move(_6de,{sync:true,duration:0.1*_6df.duration,x:-20,y:0})],_6df);
};
MochiKit.Visual.slideDown=function(_6e5,_6e6){
var d=MochiKit.DOM;
var b=MochiKit.Base;
var s=MochiKit.Style;
_6e5=d.getElement(_6e5);
if(!_6e5.firstChild){
throw new Error("MochiKit.Visual.slideDown must be used on a element with a child");
}
d.removeEmptyTextNodes(_6e5);
var _6ea=s.getStyle(_6e5.firstChild,"bottom")||0;
var _6eb=s.getElementDimensions(_6e5,true);
var _6ec;
_6e6=b.update({scaleContent:false,scaleX:false,scaleFrom:0,scaleMode:{originalHeight:_6eb.h,originalWidth:_6eb.w},restoreAfterFinish:true,afterSetupInternal:function(_6ed){
d.makePositioned(_6ed.element);
d.makePositioned(_6ed.element.firstChild);
if(/Opera/.test(navigator.userAgent)){
s.setStyle(_6ed.element,{top:""});
}
_6ec=d.makeClipping(_6ed.element);
s.setStyle(_6ed.element,{height:"0px"});
s.showElement(_6ed.element);
},afterUpdateInternal:function(_6ee){
var _6ef=s.getElementDimensions(_6ee.element,true);
s.setStyle(_6ee.element.firstChild,{bottom:(_6ee.dims[0]-_6ef.h)+"px"});
},afterFinishInternal:function(_6f0){
d.undoClipping(_6f0.element,_6ec);
if(/MSIE/.test(navigator.userAgent)){
d.undoPositioned(_6f0.element);
d.undoPositioned(_6f0.element.firstChild);
}else{
d.undoPositioned(_6f0.element.firstChild);
d.undoPositioned(_6f0.element);
}
s.setStyle(_6f0.element.firstChild,{bottom:_6ea});
}},_6e6);
return new MochiKit.Visual.Scale(_6e5,100,_6e6);
};
MochiKit.Visual.slideUp=function(_6f1,_6f2){
var d=MochiKit.DOM;
var b=MochiKit.Base;
var s=MochiKit.Style;
_6f1=d.getElement(_6f1);
if(!_6f1.firstChild){
throw new Error("MochiKit.Visual.slideUp must be used on a element with a child");
}
d.removeEmptyTextNodes(_6f1);
var _6f6=s.getStyle(_6f1.firstChild,"bottom");
var _6f7=s.getElementDimensions(_6f1,true);
var _6f8;
_6f2=b.update({scaleContent:false,scaleX:false,scaleMode:{originalHeight:_6f7.h,originalWidth:_6f7.w},scaleFrom:100,restoreAfterFinish:true,beforeStartInternal:function(_6f9){
d.makePositioned(_6f9.element);
d.makePositioned(_6f9.element.firstChild);
if(/Opera/.test(navigator.userAgent)){
s.setStyle(_6f9.element,{top:""});
}
_6f8=d.makeClipping(_6f9.element);
s.showElement(_6f9.element);
},afterUpdateInternal:function(_6fa){
var _6fb=s.getElementDimensions(_6fa.element,true);
s.setStyle(_6fa.element.firstChild,{bottom:(_6fa.dims[0]-_6fb.h)+"px"});
},afterFinishInternal:function(_6fc){
s.hideElement(_6fc.element);
d.undoClipping(_6fc.element,_6f8);
d.undoPositioned(_6fc.element.firstChild);
d.undoPositioned(_6fc.element);
s.setStyle(_6fc.element.firstChild,{bottom:_6f6});
}},_6f2);
return new MochiKit.Visual.Scale(_6f1,0,_6f2);
};
MochiKit.Visual.squish=function(_6fd,_6fe){
var d=MochiKit.DOM;
var b=MochiKit.Base;
var _701=MochiKit.Style.getElementDimensions(_6fd,true);
var _702;
_6fe=b.update({restoreAfterFinish:true,scaleMode:{originalHeight:_701.w,originalWidth:_701.h},beforeSetupInternal:function(_703){
_702=d.makeClipping(_703.element);
},afterFinishInternal:function(_704){
MochiKit.Style.hideElement(_704.element);
d.undoClipping(_704.element,_702);
}},_6fe);
return new MochiKit.Visual.Scale(_6fd,/Opera/.test(navigator.userAgent)?1:0,_6fe);
};
MochiKit.Visual.grow=function(_705,_706){
var d=MochiKit.DOM;
var v=MochiKit.Visual;
var s=MochiKit.Style;
_705=d.getElement(_705);
_706=MochiKit.Base.update({direction:"center",moveTransition:v.Transitions.sinoidal,scaleTransition:v.Transitions.sinoidal,opacityTransition:v.Transitions.full,scaleContent:true,scaleFromCenter:false},_706);
var _70a={top:_705.style.top,left:_705.style.left,height:_705.style.height,width:_705.style.width,opacity:s.getStyle(_705,"opacity")};
var dims=s.getElementDimensions(_705,true);
var _70c,_70d;
var _70e,_70f;
switch(_706.direction){
case "top-left":
_70c=_70d=_70e=_70f=0;
break;
case "top-right":
_70c=dims.w;
_70d=_70f=0;
_70e=-dims.w;
break;
case "bottom-left":
_70c=_70e=0;
_70d=dims.h;
_70f=-dims.h;
break;
case "bottom-right":
_70c=dims.w;
_70d=dims.h;
_70e=-dims.w;
_70f=-dims.h;
break;
case "center":
_70c=dims.w/2;
_70d=dims.h/2;
_70e=-dims.w/2;
_70f=-dims.h/2;
break;
}
var _710=MochiKit.Base.update({beforeSetupInternal:function(_711){
s.setStyle(_711.effects[0].element,{height:"0px"});
s.showElement(_711.effects[0].element);
},afterFinishInternal:function(_712){
d.undoClipping(_712.effects[0].element);
d.undoPositioned(_712.effects[0].element);
s.setStyle(_712.effects[0].element,_70a);
}},_706);
return new v.Move(_705,{x:_70c,y:_70d,duration:0.01,beforeSetupInternal:function(_713){
s.hideElement(_713.element);
d.makeClipping(_713.element);
d.makePositioned(_713.element);
},afterFinishInternal:function(_714){
new v.Parallel([new v.Opacity(_714.element,{sync:true,to:1,from:0,transition:_706.opacityTransition}),new v.Move(_714.element,{x:_70e,y:_70f,sync:true,transition:_706.moveTransition}),new v.Scale(_714.element,100,{scaleMode:{originalHeight:dims.h,originalWidth:dims.w},sync:true,scaleFrom:/Opera/.test(navigator.userAgent)?1:0,transition:_706.scaleTransition,scaleContent:_706.scaleContent,scaleFromCenter:_706.scaleFromCenter,restoreAfterFinish:true})],_710);
}});
};
MochiKit.Visual.shrink=function(_715,_716){
var d=MochiKit.DOM;
var v=MochiKit.Visual;
var s=MochiKit.Style;
_715=d.getElement(_715);
_716=MochiKit.Base.update({direction:"center",moveTransition:v.Transitions.sinoidal,scaleTransition:v.Transitions.sinoidal,opacityTransition:v.Transitions.none,scaleContent:true,scaleFromCenter:false},_716);
var _71a={top:_715.style.top,left:_715.style.left,height:_715.style.height,width:_715.style.width,opacity:s.getStyle(_715,"opacity")};
var dims=s.getElementDimensions(_715,true);
var _71c,_71d;
switch(_716.direction){
case "top-left":
_71c=_71d=0;
break;
case "top-right":
_71c=dims.w;
_71d=0;
break;
case "bottom-left":
_71c=0;
_71d=dims.h;
break;
case "bottom-right":
_71c=dims.w;
_71d=dims.h;
break;
case "center":
_71c=dims.w/2;
_71d=dims.h/2;
break;
}
var _71e;
var _71f=MochiKit.Base.update({beforeStartInternal:function(_720){
_71e=d.makePositioned(_720.effects[0].element);
d.makeClipping(_720.effects[0].element);
},afterFinishInternal:function(_721){
s.hideElement(_721.effects[0].element);
d.undoClipping(_721.effects[0].element,_71e);
d.undoPositioned(_721.effects[0].element);
s.setStyle(_721.effects[0].element,_71a);
}},_716);
return new v.Parallel([new v.Opacity(_715,{sync:true,to:0,from:1,transition:_716.opacityTransition}),new v.Scale(_715,/Opera/.test(navigator.userAgent)?1:0,{scaleMode:{originalHeight:dims.h,originalWidth:dims.w},sync:true,transition:_716.scaleTransition,scaleContent:_716.scaleContent,scaleFromCenter:_716.scaleFromCenter,restoreAfterFinish:true}),new v.Move(_715,{x:_71c,y:_71d,sync:true,transition:_716.moveTransition})],_71f);
};
MochiKit.Visual.pulsate=function(_722,_723){
var d=MochiKit.DOM;
var v=MochiKit.Visual;
var b=MochiKit.Base;
var _727=MochiKit.Style.getStyle(_722,"opacity");
_723=b.update({duration:3,from:0,afterFinishInternal:function(_728){
MochiKit.Style.setStyle(_728.element,{"opacity":_727});
}},_723);
var _729=_723.transition||v.Transitions.sinoidal;
_723.transition=function(pos){
return _729(1-v.Transitions.pulse(pos,_723.pulses));
};
return new v.Opacity(_722,_723);
};
MochiKit.Visual.fold=function(_72b,_72c){
var d=MochiKit.DOM;
var v=MochiKit.Visual;
var s=MochiKit.Style;
_72b=d.getElement(_72b);
var _730=s.getElementDimensions(_72b,true);
var _731={top:_72b.style.top,left:_72b.style.left,width:_72b.style.width,height:_72b.style.height};
var _732=d.makeClipping(_72b);
_72c=MochiKit.Base.update({scaleContent:false,scaleX:false,scaleMode:{originalHeight:_730.h,originalWidth:_730.w},afterFinishInternal:function(_733){
new v.Scale(_72b,1,{scaleContent:false,scaleY:false,scaleMode:{originalHeight:_730.h,originalWidth:_730.w},afterFinishInternal:function(_734){
s.hideElement(_734.element);
d.undoClipping(_734.element,_732);
s.setStyle(_734.element,_731);
}});
}},_72c);
return new v.Scale(_72b,5,_72c);
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
MochiKit.MochiKit.VERSION="1.4";
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
var _73a=MochiKit.Base.extend;
var self=MochiKit.MochiKit;
var _73c=self.SUBMODULES;
var _73d=[];
var _73e=[];
var _73f={};
var i,k,m,all;
for(i=0;i<_73c.length;i++){
m=MochiKit[_73c[i]];
_73a(_73d,m.EXPORT);
_73a(_73e,m.EXPORT_OK);
for(k in m.EXPORT_TAGS){
_73f[k]=_73a(_73f[k],m.EXPORT_TAGS[k]);
}
all=m.EXPORT_TAGS[":all"];
if(!all){
all=_73a(null,m.EXPORT,m.EXPORT_OK);
}
var j;
for(j=0;j<all.length;j++){
k=all[j];
self[k]=m[k];
}
}
self.EXPORT=_73d;
self.EXPORT_OK=_73e;
self.EXPORT_TAGS=_73f;
}());
}else{
if(typeof (MochiKit.__compat__)=="undefined"){
MochiKit.__compat__=true;
}
(function(){
if(typeof (document)=="undefined"){
return;
}
var _745=document.getElementsByTagName("script");
var _746="http://www.w3.org/1999/xhtml";
var _747="http://www.w3.org/2000/svg";
var _748="http://www.w3.org/1999/xlink";
var _749="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
var base=null;
var _74b=null;
var _74c={};
var i;
var src;
for(i=0;i<_745.length;i++){
src=null;
switch(_745[i].namespaceURI){
case _747:
src=_745[i].getAttributeNS(_748,"href");
break;
default:
src=_745[i].getAttribute("src");
break;
}
if(!src){
continue;
}
_74c[src]=true;
if(src.match(/MochiKit.js(\?.*)?$/)){
base=src.substring(0,src.lastIndexOf("MochiKit.js"));
_74b=_745[i];
}
}
if(base===null){
return;
}
var _74f=MochiKit.MochiKit.SUBMODULES;
for(var i=0;i<_74f.length;i++){
if(MochiKit[_74f[i]]){
continue;
}
var uri=base+_74f[i]+".js";
if(uri in _74c){
continue;
}
if(_74b.namespaceURI==_747||_74b.namespaceURI==_749){
var s=document.createElementNS(_74b.namespaceURI,"script");
s.setAttribute("id","MochiKit_"+base+_74f[i]);
if(_74b.namespaceURI==_747){
s.setAttributeNS(_748,"href",uri);
}else{
s.setAttribute("src",uri);
}
s.setAttribute("type","application/x-javascript");
_74b.parentNode.appendChild(s);
}else{
document.write("<"+_74b.nodeName+" src=\""+uri+"\" type=\"text/javascript\"></script>");
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
MochiKit.Base.isFalse=function(_752){
return _752==false||_752==null||_752==0||_752.length===0||_752=="false"||_752=="null";
};
MochiKit.Base.defaultValue=function(){
for(var i=0;i<arguments.length;i++){
if(typeof (arguments[i])!="undefined"){
return arguments[i];
}
}
return undefined;
};
MochiKit.Base.dict=function(_754,_755){
var o={};
if(!MochiKit.Base.isArrayLike(_754)){
throw new TypeError("First argument must be array-like");
}
if(MochiKit.Base.isArrayLike(_755)&&_754.length!==_755.length){
throw new TypeError("Both arrays must be of same length");
}
for(var i=0;i<_754.length;i++){
var k=_754[i];
if(k===null||k===undefined){
throw new TypeError("Key at index "+i+" is null or undefined");
}else{
if(MochiKit.Base.isArrayLike(k)){
o[k[0]]=k[1];
}else{
if(MochiKit.Base.isArrayLike(_755)){
o[k]=_755[i];
}else{
o[k]=_755;
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
MochiKit.Base.registerFunctionNames=function(obj,name,_766){
if(typeof (obj)==="function"&&(obj.name==null||obj.name=="")&&typeof (obj.NAME)==="undefined"){
obj.NAME=name;
}
_766=_766||[];
if(obj!=null&&name!=null&&(typeof (obj)==="object"||typeof (obj)==="function")&&obj!==Object.prototype&&obj!==Function.prototype&&typeof (obj.nodeType)!=="number"&&MochiKit.Base.findIdentical(_766,obj)<0){
_766.push(obj);
for(var prop in obj){
var str=name+"."+prop;
MochiKit.Base.registerFunctionNames(obj[prop],str,_766);
}
var str=name+".prototype";
MochiKit.Base.registerFunctionNames(obj.prototype,str,_766);
_766.pop();
}
};
MochiKit.Base.stackTrace=function(_769){
var func=arguments.callee.caller;
var _76b=[];
var res=[];
_769=_769||20;
while(func!=null){
if(MochiKit.Base.findIdentical(_76b,func)>=0){
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
_76b.push(func);
if(_76b.length>=_769){
res.push("...");
break;
}
func=func.caller;
}
return res;
};
MochiKit.Base.injectStackTrace=function(_76e,func){
func=func||arguments.callee.caller;
if(func!=null){
if(_76e){
func.$stackTrace=_76e;
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
var _775=MochiKit.Base.map(MochiKit.DOM.reprDOM,node.attributes);
res+=_775.join("");
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
MochiKit.DOM.childNode=function(_77a,_77b){
_77a=MochiKit.DOM.getElement(_77a);
if(typeof (_77b)=="number"){
if(_77b<0||_77b>=_77a.childNodes.length){
return null;
}else{
return _77a.childNodes[_77b];
}
}else{
var node=MochiKit.DOM.getElement(_77b);
while(node!=null&&node!==_77a&&node.parentNode!==_77a){
node=node.parentNode;
}
return (node==null||node===_77a)?null:node;
}
};
MochiKit.DOM.createDOMExt=function(ns,tag,_77f){
var doc=MochiKit.DOM.currentDocument();
var node=(ns)?doc.createElementNS(ns,tag):doc.createElement(tag);
MochiKit.DOM.updateNodeAttributes(node,_77f);
var _782=MochiKit.Base.extend([],arguments,3);
MochiKit.DOM.appendChildNodes(node,_782);
return node;
};
MochiKit.DOM.createTextNode=function(text){
return MochiKit.DOM.currentDocument().createTextNode(text);
};
MochiKit.DOM.createDOMFuncExt=function(ns,tag,args,_787){
args=args||[];
_787=_787||{};
var _788=MochiKit.Base.extend([],arguments,4);
return function(){
var _789=MochiKit.Base.update({},_787);
for(var pos=0;pos<args.length;pos++){
if(arguments[pos]==null){
throw new Error("Argument '"+args[pos]+"' cannot be null");
}
_789[args[pos]]=arguments[pos];
}
MochiKit.Base.update(_789,arguments[args.length]);
var _78b=MochiKit.Base.extend([],_788);
MochiKit.Base.extend(_78b,arguments,args.length+1);
return MochiKit.DOM.createDOMExt(ns,tag,_789,_78b);
};
};
MochiKit.DOM.blurAll=function(node){
if(arguments.length<=1){
MochiKit.DOM.blurAll(node,"A","BUTTON","INPUT","TEXTAREA","SELECT");
}else{
node.blur();
for(var i=1;i<arguments.length;i++){
var _78e=node.getElementsByTagName(arguments[i]);
for(var j=0;j<_78e.length;j++){
_78e[j].blur();
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
MochiKit.DateTime.TimePeriod=function(_790){
return {days:Math.floor(_790/MochiKit.DateTime.MILLIS_PER_DAY),hours:Math.floor(_790/MochiKit.DateTime.MILLIS_PER_HOUR)%24,minutes:Math.floor(_790/MochiKit.DateTime.MILLIS_PER_MINUTE)%60,seconds:Math.floor(_790/MochiKit.DateTime.MILLIS_PER_SECOND)%60,millis:_790%1000};
};
MochiKit.DateTime.toApproxPeriod=function(_791){
var p=MochiKit.DateTime.TimePeriod(_791);
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
MochiKit.Format.truncate=function(obj,_794,tail){
var base=MochiKit.Base;
if(obj!=null&&typeof (obj)!="string"&&!base.isArrayLike(obj)){
obj=obj.toString();
}
if(obj==null||obj.length<=_794||_794<0){
return obj;
}
if(typeof (tail)=="string"||base.isArrayLike(tail)){
obj=obj.slice(0,_794-tail.length);
if(typeof (obj)=="string"){
return obj+tail;
}else{
return base.extend(obj,tail);
}
}else{
return obj.slice(0,_794);
}
};
MochiKit.Format.formatter=function(_797,_798){
if(typeof (_798)=="undefined"){
_798=MochiKit.Format.formatLocale();
}else{
if(typeof (_798)=="string"){
_798=MochiKit.Format.formatLocale(_798);
}
}
var _799=MochiKit.Format._parsePattern(_797);
return function(){
var _79a=MochiKit.Base.extend([],arguments);
return MochiKit.Format._formatParts(_799,_79a,_798);
};
};
MochiKit.Format.format=function(_79b){
var _79c=MochiKit.Format._parsePattern(_79b);
var _79d=MochiKit.Base.extend([],arguments,1);
var _79e=MochiKit.Format.formatLocale();
return MochiKit.Format._formatParts(_79c,_79d,_79e);
};
MochiKit.Format._parsePattern=function(_79f){
var self=MochiKit.Format;
var _7a1=[];
var _7a2=0;
var pos=0;
for(pos=0;pos<_79f.length;pos++){
if(_79f[pos]=="{"){
if(pos+1>=_79f.length){
var msg="unescaped { char, should be escaped as {{";
throw new self.FormatPatternError(_79f,pos,msg);
}else{
if(_79f[pos+1]=="{"){
_7a1.push(_79f.substring(_7a2,pos+1));
_7a2=pos+2;
pos++;
}else{
if(_7a2<pos){
_7a1.push(_79f.substring(_7a2,pos));
}
_7a2=_79f.indexOf("}",pos)+1;
if(_7a2<=0){
var msg="unmatched { char, not followed by a } char";
throw new self.FormatPatternError(_79f,pos,msg);
}
_7a1.push(self._parseFormat(_79f,pos+1,_7a2-1));
pos=_7a2-1;
}
}
}else{
if(_79f[pos]=="}"){
if(pos+1>=_79f.length||_79f[pos+1]!="}"){
var msg="unescaped } char, should be escaped as }}";
throw new self.FormatPatternError(_79f,pos,msg);
}
_7a1.push(_79f.substring(_7a2,pos+1));
_7a2=pos+2;
pos++;
}
}
}
if(_7a2<pos){
_7a1.push(_79f.substring(_7a2,pos));
}
return _7a1;
};
MochiKit.Format._parseFormat=function(_7a5,_7a6,_7a7){
var self=MochiKit.Format;
var text=_7a5.substring(_7a6,_7a7);
var info;
var pos=text.indexOf(":");
if(pos==0){
info=self._parseFormatFlags(_7a5,_7a6+1,_7a7);
info.path=[0];
}else{
if(pos>0){
info=self._parseFormatFlags(_7a5,_7a6+pos+1,_7a7);
info.path=text.substring(0,pos).split(".");
}else{
info=self._parseFormatFlags(_7a5,_7a7,_7a7);
info.path=text.split(".");
}
}
var _7ac=/^\d+$/;
for(var i=0;i<info.path.length;i++){
var e=info.path[i];
if(typeof (e)=="string"){
e=self.strip(e);
if(e==""&&info.path.length==1){
e=0;
}else{
if(e==""){
var msg="format value path contains blanks";
throw new self.FormatPatternError(_7a5,_7a6,msg);
}else{
if(_7ac.test(e)){
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
MochiKit.Format._parseFormatFlags=function(_7b0,_7b1,_7b2){
var self=MochiKit.Format;
var info={format:"s",width:0,precision:-1,align:">",sign:"-",padding:" ",grouping:false};
var _7b5=self.rstrip(_7b0.substring(_7b1,_7b2));
while(_7b5.length>0){
switch(_7b5[0]){
case ">":
case "<":
info.align=_7b5[0];
_7b5=_7b5.substring(1);
break;
case "+":
case "-":
case " ":
info.sign=_7b5[0];
_7b5=_7b5.substring(1);
break;
case ",":
info.grouping=true;
_7b5=_7b5.substring(1);
break;
case ".":
var _7b6="0123456789";
var pos=1;
while(pos<_7b5.length&&_7b6.indexOf(_7b5[pos])>=0){
pos++;
}
info.precision=parseInt(_7b5.substring(1,pos));
_7b5=_7b5.substring(pos);
break;
case "0":
info.padding=_7b5[0];
_7b5=_7b5.substring(1);
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
var _7b6="0123456789";
var pos=1;
while(pos<_7b5.length&&_7b6.indexOf(_7b5[pos])>=0){
pos++;
}
info.width=parseInt(_7b5.substring(0,pos));
_7b5=_7b5.substring(pos);
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
info.format=_7b5[0];
_7b5=_7b5.substring(1);
break;
default:
var msg="unsupported format flag: "+_7b5[0];
throw new self.FormatPatternError(_7b0,_7b1,msg);
}
}
return info;
};
MochiKit.Format._formatParts=function(_7b9,_7ba,_7bb){
var self=MochiKit.Format;
var _7bd="";
for(var i=0;i<_7b9.length;i++){
if(typeof (_7b9[i])=="string"){
_7bd+=_7b9[i];
}else{
var info=_7b9[i];
var v=_7ba;
for(var j=0;j<info.path.length;j++){
if(v!=null){
v=v[info.path[j]];
}
}
var str="";
switch(info.format){
case "d":
case "f":
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
str=self._addNumberGrouping(str,_7bb);
}
str=sign+str;
break;
case "%":
var sign=(info.sign=="-")?"":info.sign;
sign=(v<0)?"-":sign;
v=Math.abs(v);
if(info.precision>=0){
str=self.truncToFixed(v,info.precision+2);
}else{
str=(v==null)?"0":v.toString();
}
var _7c4=str.indexOf(".");
if(_7c4<0){
str=str+"00";
}else{
if(_7c4+3>=str.length){
var _7c5=str.substring(_7c4+1);
while(_7c5.length<2){
_7c5=_7c5+"0";
}
str=str.substring(0,_7c4)+_7c5;
}else{
var _7c5=str.substring(_7c4+1);
str=str.substring(0,_7c4)+_7c5.substring(0,2)+"."+_7c5.substring(2);
}
}
while(str.length>1&&str[0]=="0"&&str[1]!="."){
str=str.substring(1);
}
if(info.padding=="0"){
str=self._addZeroPadding(str,info.width-sign.length-1);
}
if(info.grouping){
str=self._addNumberGrouping(str,_7bb);
}
str=sign+str+_7bb.percent;
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
str+=info.padding;
}else{
str=info.padding+str;
}
}
_7bd+=str;
}
}
return _7bd;
};
MochiKit.Format._addZeroPadding=function(str,_7c7){
while(str.length<_7c7){
str="0"+str;
}
return str;
};
MochiKit.Format._addNumberGrouping=function(str,_7c9){
var _7ca=str.indexOf(".");
var _7cb=(_7ca<0)?str:str.substring(0,_7ca);
var _7cc=(_7ca<0)?"":str.substring(_7ca+1);
str=(_7cc.length>0)?_7c9.decimal:"";
while(_7cc.length>3){
str=str+_7cc.substring(0,3)+_7c9.separator;
_7cc=_7cc.substring(3);
if(_7cb.length>1&&_7cb[0]=="0"){
_7cb=_7cb.substring(1);
}
}
if(_7cc.length>0){
str+=_7cc;
}
while(_7cb.length>3){
var pos=_7cb.length-3;
str=_7c9.separator+_7cb.substring(pos)+str;
if(_7cb[0]=="0"){
_7cb=_7cb.substring(1,pos);
}else{
_7cb=_7cb.substring(0,pos);
}
}
return _7cb+str;
};
MochiKit.Format.FormatPatternError=function(_7ce,pos,_7d0){
this.pattern=_7ce;
this.pos=pos;
this.message=_7d0;
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
var _7d2=node.parentNode;
if(_7d2&&_7d2.lastChild!==node){
_7d2.appendChild(node);
}
}
};
MochiKit.SVG.moveToBottom=function(node){
node=MochiKit.DOM.getElement(node);
if(node!=null){
var _7d4=node.parentNode;
if(_7d4&&_7d4.firstChild!==node){
_7d4.insertBefore(node,_7d4.firstChild);
}
}
};
MochiKit.SVG.rotate=function(node,_7d6,x,y){
var str=MochiKit.DOM.getNodeAttribute(node,"transform");
x=x||0;
y=y||0;
if(str==null||str==""){
str="";
}else{
str+=" ";
}
str+="rotate("+_7d6+","+x+","+y+")";
MochiKit.DOM.setNodeAttribute(node,"transform",str);
};
if(typeof (MochiKit)=="undefined"){
throw new ReferenceError("MochiKit must be loaded before loading this script");
}
if(typeof (MochiKit.Style)=="undefined"){
throw new ReferenceError("MochiKit.Style must be loaded before loading this script");
}
MochiKit.Style.getBorderBox=function(node){
var _7db=MochiKit.Style.getStyle;
var px=MochiKit.Style._toPixels;
return {t:px(_7db(node,"border-width-top")),b:px(_7db(node,"border-width-bottom")),l:px(_7db(node,"border-width-left")),r:px(_7db(node,"border-width-right"))};
};
MochiKit.Style.getPaddingBox=function(node){
var _7de=MochiKit.Style.getStyle;
var px=MochiKit.Style._toPixels;
return {t:px(_7de(node,"padding-top")),b:px(_7de(node,"padding-bottom")),l:px(_7de(node,"padding-left")),r:px(_7de(node,"padding-right"))};
};
MochiKit.Style._toPixels=function(_7e0){
if(_7e0!=null){
try{
_7e0=MochiKit.Format.rstrip(_7e0,"px");
_7e0=Math.round(parseFloat(_7e0));
}
catch(ignore){
_7e0=null;
}
}
return (_7e0==null||isNaN(_7e0))?null:_7e0;
};
MochiKit.Style.getScrollOffset=function(node){
node=MochiKit.DOM.getElement(node);
var x=node.scrollLeft||0;
var y=node.scrollTop||0;
return new MochiKit.Style.Coordinates(x,y);
};
MochiKit.Style.setScrollOffset=function(node,_7e5){
node=MochiKit.DOM.getElement(node);
node.scrollLeft=_7e5.x;
node.scrollTop=_7e5.y;
};
MochiKit.Style.resetScrollOffset=function(node,_7e7){
node=MochiKit.DOM.getElement(node);
node.scrollLeft=0;
node.scrollTop=0;
if(_7e7){
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
MochiKit.Style.registerSizeConstraints=function(node,_7f0,_7f1,_7f2){
node=MochiKit.DOM.getElement(node);
var sc=node.sizeConstraints={w:null,h:null,a:null};
if(typeof (_7f0)=="number"){
sc.w=function(w,h){
return _7f0;
};
}else{
if(typeof (_7f0)=="function"){
sc.w=_7f0;
}else{
if(typeof (_7f0)=="string"){
var code="return "+_7f0.replace(/%/g,"*0.01*w")+";";
sc.w=new Function("w","h",code);
}
}
}
if(typeof (_7f1)=="number"){
sc.h=function(w,h){
return _7f1;
};
}else{
if(typeof (_7f1)=="function"){
sc.h=_7f1;
}else{
if(typeof (_7f1)=="string"){
var code="return "+_7f1.replace(/%/g,"*0.01*h")+";";
sc.h=new Function("w","h",code);
}
}
}
if(typeof (_7f2)=="number"){
sc.a=function(w,h){
return _7f2;
};
}else{
if(typeof (_7f2)=="function"){
sc.a=_7f2;
}else{
if(typeof (_7f2)=="string"){
var code="return "+_7f2.replace(/%/g,"*0.01*w/h")+";";
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
MochiKit.Widget.isWidget=function(obj,_807){
if(_807!=null){
return MochiKit.DOM.isHTML(obj)&&MochiKit.DOM.hasElementClass(obj,"widget")&&MochiKit.DOM.hasElementClass(obj,"widget"+_807);
}else{
return MochiKit.DOM.isHTML(obj)&&MochiKit.DOM.hasElementClass(obj,"widget");
}
};
MochiKit.Widget.isFormField=function(obj){
if(!MochiKit.DOM.isHTML(obj)||typeof (obj.tagName)!=="string"){
return false;
}
var _809=obj.tagName.toUpperCase();
return _809=="INPUT"||_809=="TEXTAREA"||_809=="SELECT"||typeof (obj.value)!=="undefined";
};
MochiKit.Widget.createWidget=function(name,_80b){
var cls=MochiKit.Widget.Classes[name];
if(cls==null){
throw new ReferenceError("failed to find widget '"+name+"' in MochiKit.Widget.Classes");
}
var w=new cls(_80b);
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
var _818=MochiKit.Base.dict(MochiKit.DOM.attributeArrayNewImpl(node));
var _819=MochiKit.Base.mask(_818,["id","w","h","a","class","style"]);
var _81a=MochiKit.Widget.createWidgetTree(node.childNodes,ids);
if(MochiKit.Widget.Classes[name]){
var _81b=MochiKit.Widget.createWidget(name,_818,_81a);
}else{
var _81b=MochiKit.DOM.createDOM(name,_818,_81a);
if(_818.value){
_81b.value=_818.value;
}
}
if(_819.id){
if(ids){
ids[_819.id]=_81b;
}else{
_81b.id=_819.id;
}
}
if(_819.w||_819.h||_819.a){
MochiKit.Style.registerSizeConstraints(_81b,_819.w,_819.h,_819.a);
}
if(_819["class"]){
var _81c=_819["class"].split(" ");
if(typeof (_81b.addClass)=="function"){
_81b.addClass.apply(_81b,_81c);
}else{
for(var i=0;i<arguments.length;i++){
MochiKit.DOM.addElementClass(_81b,_81c[i]);
}
}
}
if(_819.style){
var _81e={};
var _81f=_819.style.split(";");
for(var i=0;i<_81f.length;i++){
var a=_81f[i].split(":");
_81e[MochiKit.Format.strip(a[0])]=MochiKit.Format.strip(a[1]);
}
MochiKit.Style.setStyle(_81b,_81e);
}
return _81b;
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
MochiKit.Widget.prototype.setAttrs=function(_825){
MochiKit.DOM.updateNodeAttributes(this,_825);
};
MochiKit.Widget.prototype.setStyle=function(_826){
MochiKit.Style.setStyle(this,_826);
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
MochiKit.Widget.prototype.addChildNode=function(_82c){
this.appendChild(_82c);
};
MochiKit.Widget.prototype.removeChildNode=function(_82d){
this.removeChild(_82d);
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
var _830=this.getChildNodes();
for(var i=_830.length-1;i>=0;i--){
this.removeChildNode(_830[i]);
MochiKit.Widget.destroyWidget(_830[i]);
}
};
MochiKit.Widget.Button=function(_832){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_832,MochiKit.Base.extend(null,arguments,1));
}
var o=MochiKit.DOM.BUTTON();
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetButton");
o.setAttrs(_832);
o.addAll(MochiKit.Base.extend(null,arguments,1));
return o;
};
MochiKit.Widget.Button.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Button.prototype.setAttrs=function(_835){
_835=MochiKit.Base.update({},_835);
var _836=MochiKit.Base.mask(_835,["highlight"]);
if(typeof (_836.highlight)!="undefined"){
if(MochiKit.Base.isFalse(_836.highlight)){
this.removeClass("widgetButtonHighlight");
}else{
this.addClass("widgetButtonHighlight");
}
}
MochiKit.DOM.updateNodeAttributes(this,_835);
};
MochiKit.Widget.Dialog=function(_837){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_837,MochiKit.Base.extend(null,arguments,1));
}
var _839=MochiKit.DOM.DIV({"class":"widgetDialogTitle"},"Dialog");
var _83a=new MochiKit.Widget.Icon({ref:"CLOSE","class":"widgetDialogClose"});
var _83b=new MochiKit.Widget.Icon({ref:"RESIZE","class":"widgetDialogResize"});
var _83c=MochiKit.DOM.DIV({"class":"widgetDialogContent"});
MochiKit.Style.registerSizeConstraints(_83c,"100% - 22","100% - 44");
var o=MochiKit.DOM.DIV({},_839,_83a,_83b,_83c);
MochiKit.Base.updatetree(o,this);
o.setAttrs(MochiKit.Base.update({modal:false,center:true},_837));
o.addClass("widget","widgetDialog","widgetHidden");
o.addAll(MochiKit.Base.extend(null,arguments,1));
MochiKit.Signal.connect(_839,"onmousedown",o,"_handleMoveStart");
MochiKit.Signal.connect(_83a,"onclick",o,"hide");
MochiKit.Signal.connect(_83b,"onmousedown",o,"_handleResizeStart");
return o;
};
MochiKit.Widget.Dialog.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Dialog.prototype.setAttrs=function(_83e){
_83e=MochiKit.Base.update({},_83e);
var _83f=MochiKit.Base.mask(_83e,["title","modal","center"]);
if(typeof (_83f.title)!="undefined"){
MochiKit.DOM.replaceChildNodes(this.firstChild,_83f.title);
}
if(typeof (_83f.modal)!="undefined"){
this.modal=!MochiKit.Base.isFalse(_83f.modal);
}
if(typeof (_83f.center)!="undefined"){
this.center=!MochiKit.Base.isFalse(_83f.center);
}
MochiKit.DOM.updateNodeAttributes(this,_83e);
};
MochiKit.Widget.Dialog.prototype.show=function(){
if(this.parentNode==null){
throw new Error("Cannot show Dialog widget without setting a parent DOM node");
}
if(this.modal){
var _840={loading:false,message:"",style:{"z-index":"99"}};
this._modalNode=new MochiKit.Widget.Overlay(_840);
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
MochiKit.Widget.Dialog.prototype.addChildNode=function(_842){
this.lastChild.appendChild(_842);
};
MochiKit.Widget.Dialog.prototype.removeChildNode=function(_843){
this.lastChild.removeChild(_843);
};
MochiKit.Widget.Dialog.prototype.moveTo=function(x,y){
var _846=MochiKit.Style.getElementDimensions(this.parentNode);
var dim=MochiKit.Style.getElementDimensions(this);
var pos={x:Math.max(0,Math.min(x,_846.w-dim.w-2)),y:Math.max(0,Math.min(y,_846.h-dim.h-2))};
MochiKit.Style.setElementPosition(this,pos);
MochiKit.Widget.emitSignal(this,"onmove",pos);
};
MochiKit.Widget.Dialog.prototype.moveToCenter=function(){
var _849=MochiKit.Style.getElementDimensions(this.parentNode);
var dim=MochiKit.Style.getElementDimensions(this);
var pos={x:Math.round(Math.max(0,(_849.w-dim.w)/2)),y:Math.round(Math.max(0,(_849.h-dim.h)/2))};
MochiKit.Style.setElementPosition(this,pos);
MochiKit.Widget.emitSignal(this,"onmove",pos);
};
MochiKit.Widget.Dialog.prototype.resizeTo=function(_84c,_84d){
var _84e=MochiKit.Style.getElementDimensions(this.parentNode);
var pos=MochiKit.Style.getElementPosition(this.parentNode);
pos=MochiKit.Style.getElementPosition(this,pos);
var dim={w:Math.max(150,Math.min(_84c,_84e.w-pos.x-2)),h:Math.max(100,Math.min(_84d,_84e.h-pos.y-2))};
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
MochiKit.Widget.Field=function(_85a){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_85a);
}
var o=MochiKit.DOM.SPAN();
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetField");
o.setAttrs(MochiKit.Base.update({name:"",value:"",maxLength:-1},_85a));
o.defaultValue=o.value;
return o;
};
MochiKit.Widget.Field.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Field.prototype.setAttrs=function(_85d){
_85d=MochiKit.Base.update({},_85d);
var _85e=MochiKit.Base.mask(_85d,["name","value","maxLength"]);
if(typeof (_85e.name)!="undefined"){
this.name=_85e.name;
}
if(typeof (_85e.maxLength)!="undefined"){
this.maxLength=parseInt(_85e.maxLength);
}
if(typeof (_85e.value)!="undefined"){
this.value=_85e.value;
if(this.maxLength>0){
_85e.value=MochiKit.Format.truncate(_85e.value,this.maxLength,"...");
}
MochiKit.DOM.replaceChildNodes(this,_85e.value);
this.title=(this.value==_85e.value)?null:this.value;
}
MochiKit.DOM.updateNodeAttributes(this,_85d);
};
MochiKit.Widget.Form=function(_85f){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_85f);
}
var o=MochiKit.DOM.FORM(_85f);
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetForm");
MochiKit.Signal.connect(o,"onsubmit",o,"_handleSubmit");
o.addAll(MochiKit.Base.extend(null,arguments,1));
return o;
};
MochiKit.Widget.Form.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Form.prototype.fields=function(){
var _862=[];
MochiKit.Base.nodeWalk(this,function(elem){
if(elem.nodeType!==1){
return null;
}
if(MochiKit.Widget.isFormField(elem)){
_862.push(elem);
return null;
}else{
return elem.childNodes;
}
});
return _862;
};
MochiKit.Widget.Form.prototype.fieldMap=function(){
var _864=this.fields();
var map={};
for(var i=0;i<_864.length;i++){
var name=_864[i].name;
if(typeof (name)=="string"){
if(map[name] instanceof Array){
map[name].push(_864[i]);
}else{
if(map[name]!=null){
map[name]=[map[name],_864[i]];
}else{
map[name]=_864[i];
}
}
}
}
return map;
};
MochiKit.Widget.Form.prototype.reset=function(){
this.validateReset();
var _868=this.fields();
for(var i=0;i<_868.length;i++){
var elem=_868[i];
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
var _86d=this.fields();
var map={};
for(var i=0;i<_86d.length;i++){
var name=_86d[i].name;
var _871="";
if(typeof (_86d[i].getValue)=="function"){
_871=_86d[i].getValue();
}else{
_871=_86d[i].value;
}
if(_86d[i].type==="radio"||_86d[i].type==="checkbox"){
if(_86d[i].checked){
_871=_871||true;
}else{
_871=null;
}
}
if(typeof (name)=="string"&&_871!=null){
if(map[name] instanceof Array){
map[name].push(_871);
}else{
if(map[name]!=null){
map[name]=[map[name],_871];
}else{
map[name]=_871;
}
}
}
}
return map;
};
MochiKit.Widget.Form.prototype.update=function(_872){
var _873=this.fields();
for(var i=0;i<_873.length;i++){
var elem=_873[i];
if(elem.name in _872){
var _876=_872[elem.name];
if(elem.type==="radio"||elem.type==="checkbox"){
if(_876==null){
elem.checked=false;
}else{
if(MochiKit.Base.isArrayLike(_876)){
elem.checked=(MochiKit.Base.findValue(_876,elem.value)>=0);
}else{
elem.checked=(elem.value===_876||_876===true);
}
}
}else{
if(MochiKit.Base.isArrayLike(_876)){
_876=_876.join(", ");
}
if(typeof (elem.setAttrs)=="function"){
elem.setAttrs({value:_876});
}else{
elem.value=_876;
}
}
}
}
};
MochiKit.Widget.Form.prototype.validators=function(){
var res=[];
var _878=this.getElementsByTagName("SPAN");
for(var i=0;i<_878.length;i++){
if(MochiKit.Widget.isWidget(_878[i],"FormValidator")){
res.push(_878[i]);
}
}
return res;
};
MochiKit.Widget.Form.prototype.validate=function(){
var _87a=this.validators();
var _87b=this.fields();
var _87c=true;
var _87d=[];
for(var i=0;i<_87a.length;i++){
_87a[i].reset();
}
for(var i=0;i<_87a.length;i++){
for(var j=0;j<_87b.length;j++){
if(_87a[i].name==_87b[j].name){
var res=_87a[i].verify(_87b[j]);
if(res instanceof MochiKit.Async.Deferred){
_87d.push(res);
}else{
if(res===false){
_87c=false;
}
}
}
}
}
if(!_87c){
return false;
}else{
if(_87d.length>0){
return MochiKit.Async.gatherResults(_87d);
}else{
return true;
}
}
};
MochiKit.Widget.Form.prototype.validateReset=function(){
var _881=this.validators();
for(var i=0;i<_881.length;i++){
_881[i].reset();
}
};
MochiKit.Widget.Form.prototype._handleSubmit=function(evt){
evt.stop();
};
MochiKit.Widget.FormValidator=function(_884){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_884);
}
var o=MochiKit.DOM.SPAN();
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetFormValidator");
o.setAttrs(MochiKit.Base.update({name:"",mandatory:true,display:"error",message:null,validator:null},_884));
o.fields=[];
o.hide();
return o;
};
MochiKit.Widget.FormValidator.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.FormValidator.prototype.setAttrs=function(_887){
_887=MochiKit.Base.update({},_887);
var _888=MochiKit.Base.mask(_887,["name","mandatory","regex","display","message","validator"]);
if(typeof (_888.name)!="undefined"){
this.name=_888.name;
}
if(typeof (_888.mandatory)!="undefined"){
this.mandatory=!MochiKit.Base.isFalse(_888.mandatory);
}
if(typeof (_888.regex)!="undefined"){
if(_888.regex instanceof RegExp){
this.regex=_888.regex;
}else{
if(_888.regex.indexOf("^")!=0){
_888.regex="^"+_888.regex;
}
if(_888.regex.indexOf("$")!=_888.regex.length-1){
_888.regex+="$";
}
this.regex=new RegExp(_888.regex);
}
}
if(typeof (_888.display)!="undefined"){
this.display=_888.display;
}
if(typeof (_888.message)!="undefined"){
this.message=_888.message;
}
if(typeof (_888.validator)!="undefined"){
this.validator=_888.validator;
}
MochiKit.DOM.updateNodeAttributes(this,_887);
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
MochiKit.Widget.FormValidator.prototype.verify=function(_88a){
if(!_88a.disabled){
var _88b="";
if(typeof (_88a.getValue)=="function"){
_88b=_88a.getValue();
}else{
_88b=_88a.value;
}
var _88c=MochiKit.Format.strip(_88b);
if(MochiKit.Format.strip(_88b)==""){
if(this.mandatory){
var msg="This field is mandatory and cannot be left blank";
this.addError(_88a,msg);
return false;
}
}else{
if(this.regex!=null&&!this.regex.test(_88c)){
var msg="The field format is incorrect";
this.addError(_88a,msg);
return false;
}else{
if(typeof (this.validator)=="function"){
var res=this.validator(_88b);
if(res instanceof MochiKit.Async.Deferred){
var self=this;
res.addErrback(function(e){
self.addError(_88a,e.message);
return e;
});
return res;
}else{
if(typeof (res)=="string"){
this.addError(_88a,res);
return false;
}else{
if(res===false){
this.addError(_88a,"Field validation failed");
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
MochiKit.Widget.FormValidator.prototype.addError=function(_891,_892){
if(!MochiKit.DOM.hasElementClass(_891,"widgetInvalid")){
this.fields.push(_891);
MochiKit.DOM.addElementClass(_891,"widgetInvalid");
if(this.display==="error"){
var _893={ref:"ERROR",tooltip:this.message||_892};
this.addAll(new MochiKit.Widget.Icon(_893));
this.show();
}
}
};
MochiKit.Widget.Icon=function(_894){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_894);
}
var o=MochiKit.DOM.IMG();
MochiKit.Base.updatetree(o,this);
o.setAttrs(_894);
o.addClass("widget","widgetIcon");
return o;
};
MochiKit.Widget.Icon.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Icon.prototype.setAttrs=function(_897){
_897=MochiKit.Base.update({},_897);
if(_897.ref){
MochiKit.Base.setdefault(_897,MochiKit.Widget.Icon[_897.ref],MochiKit.Widget.Icon.DEFAULT);
}
var _898=MochiKit.Base.mask(_897,["ref","url","baseUrl","tooltip","width","height"]);
if(typeof (_898.url)!="undefined"){
MochiKit.Base.setdefault(_898,MochiKit.Widget.Icon.DEFAULT);
_897.src=_898.baseUrl+_898.url;
}
if(typeof (_898.tooltip)!="undefined"){
_897.alt=_898.tooltip;
_897.title=_898.tooltip;
}
if(typeof (_898.width)!="undefined"){
this.width=_898.width;
this.setStyle({width:_898.width});
}
if(typeof (_898.height)!="undefined"){
this.height=_898.height;
this.setStyle({height:_898.height});
}
MochiKit.DOM.updateNodeAttributes(this,_897);
};
MochiKit.Base.update(MochiKit.Widget.Icon,{DEFAULT:{baseUrl:"images/icons/",width:"16",height:"16"},BLANK:{url:"blank.gif",style:{cursor:"default"}},CLOSE:{url:"close.gif"},RESIZE:{url:"resize-handle.gif"},OK:{url:"ok.gif",tooltip:"OK"},CANCEL:{url:"cancel.gif",tooltip:"Cancel"},HELP:{url:"help.gif",tooltip:"Help"},ERROR:{url:"error.gif",tooltip:"Error"},PLUS:{url:"plus.gif",tooltip:"Show"},MINUS:{url:"minus.gif",tooltip:"Hide"},NEXT:{url:"next.gif",tooltip:"Next"},PREVIOUS:{url:"previous.gif",tooltip:"Previous"},CONFIG:{url:"config.gif",tooltip:"Configure"},DELAY:{url:"delay.gif",tooltip:"Configure Delay"},RELOAD:{url:"reload.gif",tooltip:"Reload"},LOADING:{url:"loading.gif",tooltip:"Loading..."},LOADING_LARGE:{url:"loading-large.gif",tooltip:"Loading...",width:"32",height:"32"},SEARCH:{url:"magnifier.gif",tooltip:"Search"},ADD:{url:"add.gif",tooltip:"Add"},REMOVE:{url:"remove.gif",tooltip:"Remove"},EDIT:{url:"edit.gif",tooltip:"Edit"},DELETE:{url:"trash.gif",tooltip:"Clear / Delete"},SELECT:{url:"select.gif",tooltip:"Select / Unselect"},CUT:{url:"cut.gif",tooltip:"Cut"},EXPORT:{url:"export.gif",tooltip:"Export"},EXPAND:{url:"expand.gif",tooltip:"Expand"},UP:{url:"up.gif",tooltip:"Move Up"},DOWN:{url:"down.gif",tooltip:"Move Down"},LEFT:{url:"left.gif",tooltip:"Move Left"},RIGHT:{url:"right.gif",tooltip:"Move Right"},COMMENT:{url:"comment.gif",tooltip:"Comment"},CALENDAR:{url:"calendar.gif",tooltip:"Calendar"},AUTOMATIC:{url:"automatic.gif",tooltip:"Automatic Processing"},PLUGIN:{url:"plugin.gif",tooltip:"Plug-in"},FOLDER:{url:"folder.gif"},DOCUMENT:{url:"document.gif"}});
MochiKit.Widget.Overlay=function(_899){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_899,MochiKit.Base.extend(null,arguments,1));
}
var msg=MochiKit.DOM.DIV({"class":"widgetOverlayMessage"});
var o=MochiKit.DOM.DIV({},msg);
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetOverlay");
_899=MochiKit.Base.update({loading:true,message:"Working..."},_899);
o.setAttrs(_899);
o.addAll(MochiKit.Base.extend(null,arguments,1));
return o;
};
MochiKit.Widget.Overlay.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Overlay.prototype.setAttrs=function(_89d){
_89d=MochiKit.Base.update({},_89d);
var _89e=MochiKit.Base.mask(_89d,["loading","message"]);
if(typeof (_89e.loading)!="undefined"){
this.showLoading=!MochiKit.Base.isFalse(_89e.loading);
}
if(typeof (_89e.message)!="undefined"){
this.message=_89e.message;
}
if(typeof (this.showLoading)!="undefined"){
var icon=new MochiKit.Widget.Icon({ref:"LOADING_LARGE"});
icon.setStyle({"padding-right":"20px"});
}
MochiKit.DOM.replaceChildNodes(this.firstChild,icon,this.message);
MochiKit.DOM.updateNodeAttributes(this,_89d);
};
MochiKit.Widget.Pane=function(_8a0){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_8a0,MochiKit.Base.extend(null,arguments,1));
}
var o=MochiKit.DOM.DIV();
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetPane");
o.setAttrs(MochiKit.Base.update({pageTitle:"Page",pageStatus:"ANY",pageCloseable:false},_8a0));
o.addAll(MochiKit.Base.extend(null,arguments,1));
return o;
};
MochiKit.Widget.Pane.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Pane.ANY={previous:true,next:true};
MochiKit.Widget.Pane.FORWARD={previous:false,next:true};
MochiKit.Widget.Pane.BACKWARD={previous:true,next:false};
MochiKit.Widget.Pane.WORKING={previous:false,next:false};
MochiKit.Widget.Pane.prototype.setAttrs=function(_8a3){
_8a3=MochiKit.Base.update({},_8a3);
var _8a4=MochiKit.Base.mask(_8a3,["pageTitle","pageStatus","pageCloseable"]);
var _8a5=false;
if(typeof (_8a4.pageTitle)!="undefined"){
this.pageTitle=_8a4.pageTitle;
_8a5=true;
}
if(typeof (_8a4.pageStatus)!="undefined"){
if(typeof (_8a4.pageStatus)=="string"){
_8a4.pageStatus=MochiKit.Widget.Pane[_8a4.pageStatus];
}
this.pageStatus=_8a4.pageStatus;
_8a5=true;
}
if(typeof (_8a4.pageCloseable)!="undefined"){
this.pageCloseable=!MochiKit.Base.isFalse(_8a4.pageCloseable);
_8a5=true;
}
if(_8a5&&this.parentNode&&typeof (this.parentNode._updateStatus)=="function"){
this.parentNode._updateStatus();
}
MochiKit.DOM.updateNodeAttributes(this,_8a3);
};
MochiKit.Widget.Pane.prototype._handleEnter=function(opts){
opts=opts||{};
if(opts.validateReset){
var _8a7=this.getElementsByTagName("FORM");
for(var i=0;i<_8a7.length;i++){
if(typeof (_8a7[i].validateReset)=="function"){
_8a7[i].validateReset();
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
var _8aa=this.getElementsByTagName("FORM");
for(var i=0;i<_8aa.length;i++){
if(typeof (_8aa[i].validate)=="function"){
var res=_8aa[i].validate();
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
MochiKit.Widget.Popup=function(_8ad){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_8ad,MochiKit.Base.extend(null,arguments,1));
}
var o=MochiKit.DOM.DIV();
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetPopup","widgetHidden");
o.selectedIndex=-1;
o._delayTimer=null;
o.setAttrs(MochiKit.Base.update({delay:5000},_8ad));
o.addAll(MochiKit.Base.extend(null,arguments,1));
MochiKit.Signal.connect(o,"onmousemove",o,"_handleMouseMove");
MochiKit.Signal.connect(o,"onclick",o,"_handleMouseClick");
return o;
};
MochiKit.Widget.Popup.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Popup.prototype.setAttrs=function(_8b0){
_8b0=MochiKit.Base.update({},_8b0);
var _8b1=MochiKit.Base.mask(_8b0,["delay","showAnim","hideAnim"]);
if(typeof (_8b1.delay)!="undefined"){
this.delay=parseInt(_8b1.delay);
this.resetDelay();
}
if(typeof (_8b1.showAnim)!="undefined"){
this.showAnim=_8b1.showAnim;
}
if(typeof (_8b1.hideAnim)!="undefined"){
this.hideAnim=_8b1.hideAnim;
}
MochiKit.DOM.updateNodeAttributes(this,_8b0);
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
MochiKit.Widget.Popup.prototype.selectChild=function(_8b2){
var node=this.selectedChild();
if(node!=null){
MochiKit.DOM.removeElementClass(node,"selected");
}
var node=MochiKit.DOM.childNode(this,_8b2);
if(typeof (_8b2)=="number"){
var _8b4=_8b2;
}else{
var _8b4=MochiKit.Base.findIdentical(this.childNodes,node);
}
if(_8b4>=0&&node!=null){
this.selectedIndex=_8b4;
MochiKit.DOM.addElementClass(node,"selected");
var box={y:node.offsetTop,h:node.offsetHeight+5};
MochiKit.Style.adjustScrollOffset(this,box);
}else{
this.selectedIndex=-1;
}
return this.selectedIndex;
};
MochiKit.Widget.Popup.prototype.selectMove=function(_8b6){
var _8b7=this.selectedIndex+_8b6;
if(_8b7>=this.childNodes.length){
_8b7=0;
}
if(_8b7<0){
_8b7=this.childNodes.length-1;
}
return this.selectChild(_8b7);
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
MochiKit.Widget.ProgressBar=function(_8bc){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_8bc,MochiKit.Base.extend(null,arguments,1));
}
var _8be=MochiKit.DOM.DIV({"class":"widgetProgressBarMeter"});
var text=MochiKit.DOM.DIV({"class":"widgetProgressBarText"});
var o=MochiKit.DOM.DIV({},_8be,text);
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetProgressBar");
o.setAttrs(MochiKit.Base.update({min:0,max:100},_8bc));
o.setValue(0);
return o;
};
MochiKit.Widget.ProgressBar.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.ProgressBar.prototype.setAttrs=function(_8c1){
_8c1=MochiKit.Base.update({},_8c1);
var _8c2=MochiKit.Base.mask(_8c1,["min","max"]);
if(typeof (_8c2.min)!="undefined"||typeof (_8c2.max)!="undefined"){
this.minValue=parseInt(_8c2.min)||0;
this.maxValue=parseInt(_8c2.max)||100;
this.startTime=new Date().getTime();
this.lastTime=this.startTime;
this.timeLeft=null;
}
MochiKit.DOM.updateNodeAttributes(this,_8c1);
};
MochiKit.Widget.ProgressBar.prototype.setValue=function(_8c3,text){
_8c3=Math.min(Math.max(_8c3,this.minValue),this.maxValue);
var pos=_8c3-this.minValue;
var _8c6=this.maxValue-this.minValue;
var str=pos+" of "+_8c6;
if(typeof (text)=="string"&&text!=""){
str+=" \u2014 "+text;
}
this.setRatio(pos/_8c6,str);
};
MochiKit.Widget.ProgressBar.prototype.setRatio=function(_8c8,text){
var _8ca=Math.round(_8c8*1000)/10;
MochiKit.Style.setElementDimensions(this.firstChild,{w:_8ca},"%");
if(_8ca<66){
this.lastChild.className="widgetProgressBarText";
}else{
this.lastChild.className="widgetProgressBarTextInverse";
}
if(typeof (text)=="string"&&text!=""){
text=Math.round(_8ca)+"% \u2014 "+text;
}else{
text=Math.round(_8ca)+"%";
}
var _8cb=new Date().getTime();
if(_8cb-this.lastTime>1000){
this.lastTime=_8cb;
var _8cc=_8cb-this.startTime;
_8cc=Math.max(Math.round(_8cc/_8c8-_8cc),0);
this.timeLeft=MochiKit.DateTime.toApproxPeriod(_8cc);
}
if(this.timeLeft!=null&&_8ca>0&&_8ca<100){
text+=" \u2014 "+this.timeLeft+" left";
}
this.setText(text);
};
MochiKit.Widget.ProgressBar.prototype.setText=function(text){
MochiKit.DOM.replaceChildNodes(this.lastChild,text);
};
MochiKit.Widget.TabContainer=function(_8ce){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_8ce,MochiKit.Base.extend(null,arguments,1));
}
var _8d0=MochiKit.DOM.DIV({"class":"widgetTabContainerLabels"});
var _8d1=MochiKit.DOM.DIV({"class":"widgetTabContainerContent"});
var o=MochiKit.DOM.DIV(_8ce,_8d0,_8d1);
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetTabContainer");
MochiKit.Style.registerSizeConstraints(_8d1,"100% - 22","100% - 47");
_8d1.resizeContent=MochiKit.Base.noop;
o._selectedIndex=-1;
o.addAll(MochiKit.Base.extend(null,arguments,1));
return o;
};
MochiKit.Widget.TabContainer.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.TabContainer.prototype.getChildNodes=function(){
return MochiKit.Base.extend([],this.lastChild.childNodes);
};
MochiKit.Widget.TabContainer.prototype.addChildNode=function(_8d3){
if(!MochiKit.Widget.isWidget(_8d3,"Pane")){
_8d3=new MochiKit.Widget.Pane(null,_8d3);
}
MochiKit.Style.registerSizeConstraints(_8d3,"100%","100%");
_8d3.hide();
var text=MochiKit.DOM.SPAN(null,_8d3.pageTitle);
if(_8d3.pageCloseable){
var icon=new MochiKit.Widget.Icon({ref:"CLOSE"});
MochiKit.Signal.connect(icon,"onclick",MochiKit.Base.bind("_handleClose",this,_8d3));
}
var _8d6=MochiKit.DOM.DIV({"class":"widgetTabContainerLabel"},MochiKit.DOM.DIV({},text,icon));
MochiKit.Signal.connect(_8d6,"onclick",MochiKit.Base.bind("selectChild",this,_8d3));
this.firstChild.appendChild(_8d6);
this.lastChild.appendChild(_8d3);
if(this._selectedIndex<0){
this.selectChild(0);
}
};
MochiKit.Widget.TabContainer.prototype.removeChildNode=function(_8d7){
var _8d8=this.getChildNodes();
var _8d9=MochiKit.Base.findIdentical(_8d8,_8d7);
if(_8d9<0){
throw new Error("Cannot remove DOM node that is not a TabContainer child");
}
if(this._selectedIndex==_8d9){
_8d7._handleExit();
this._selectedIndex=-1;
}
MochiKit.Widget.destroyWidget(this.firstChild.childNodes[_8d9]);
MochiKit.DOM.removeElement(_8d7);
MochiKit.Widget.emitSignal(_8d7,"onclose");
if(this._selectedIndex<0&&this.getChildNodes().length>0){
this.selectChild((_8d9==0)?0:_8d9-1);
}
};
MochiKit.Widget.TabContainer.prototype.selectedIndex=function(){
return this._selectedIndex;
};
MochiKit.Widget.TabContainer.prototype.selectedChild=function(){
var _8da=this.getChildNodes();
return (this._selectedIndex<0)?null:_8da[this._selectedIndex];
};
MochiKit.Widget.TabContainer.prototype.selectChild=function(_8db){
var _8dc=this.getChildNodes();
if(this._selectedIndex>=0){
var _8dd=this.firstChild.childNodes[this._selectedIndex];
MochiKit.DOM.removeElementClass(_8dd,"selected");
_8dc[this._selectedIndex]._handleExit();
}
var _8de=-1;
if(_8db==null){
_8de=this._selectedIndex;
}else{
if(typeof (_8db)=="number"){
_8de=_8db;
}else{
_8de=MochiKit.Base.findIdentical(_8dc,_8db);
}
}
this._selectedIndex=(_8de<0||_8de>=_8dc.length)?-1:_8de;
if(this._selectedIndex>=0){
var _8dd=this.firstChild.childNodes[this._selectedIndex];
MochiKit.DOM.addElementClass(_8dd,"selected");
_8dc[this._selectedIndex]._handleEnter();
}
};
MochiKit.Widget.TabContainer.prototype.resizeContent=function(){
MochiKit.Style.resizeElements(this.lastChild);
var _8df=this.selectedChild();
if(_8df!=null){
MochiKit.Style.resizeElements(_8df);
}
};
MochiKit.Widget.TabContainer.prototype._handleClose=function(_8e0,evt){
evt.stop();
this.removeChildNode(_8e0);
};
MochiKit.Widget.Table=function(_8e2){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_8e2,MochiKit.Base.extend(null,arguments,1));
}
var _8e4=MochiKit.DOM.THEAD({},MochiKit.DOM.TR());
var _8e5=MochiKit.DOM.TBODY();
_8e5.resizeContent=MochiKit.Base.noop;
var _8e6=MochiKit.DOM.TABLE({"class":"widgetTable"},_8e4,_8e5);
var o=MochiKit.DOM.DIV({},_8e6);
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetTable");
o.setAttrs(MochiKit.Base.update({multiple:false},_8e2));
o._rows=[];
o._data=null;
o._keyField=null;
o._selected=[];
o.addAll(MochiKit.Base.extend(null,arguments,1));
MochiKit.Signal.connect(_8e5,"onmousedown",o,"_handleSelect");
return o;
};
MochiKit.Widget.Table.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Table.prototype.setAttrs=function(_8e8){
_8e8=MochiKit.Base.update({},_8e8);
var _8e9=MochiKit.Base.mask(_8e8,["multiple"]);
if(typeof (_8e9.multiple)!="undefined"){
this.multiple=!MochiKit.Base.isFalse(_8e9.multiple);
}
MochiKit.DOM.updateNodeAttributes(this,_8e8);
};
MochiKit.Widget.Table.prototype.getChildNodes=function(){
var _8ea=this.firstChild;
var _8eb=_8ea.firstChild;
var tr=_8eb.firstChild;
return MochiKit.Base.extend([],tr.childNodes);
};
MochiKit.Widget.Table.prototype.addChildNode=function(_8ed){
if(!MochiKit.Widget.isWidget(_8ed,"TableColumn")){
throw new Error("Table widget can only have TableColumn children");
}
this.clear();
var _8ee=this.firstChild;
var _8ef=_8ee.firstChild;
var tr=_8ef.firstChild;
tr.appendChild(_8ed);
};
MochiKit.Widget.Table.prototype.removeChildNode=function(_8f1){
this.clear();
var _8f2=this.firstChild;
var _8f3=_8f2.firstChild;
var tr=_8f3.firstChild;
tr.removeChild(_8f1);
};
MochiKit.Widget.Table.prototype.getColumnIndex=function(_8f5){
var cols=this.getChildNodes();
for(var i=0;i<cols.length;i++){
if(cols[i].field===_8f5){
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
var _901=this.firstChild;
var _902=_901.lastChild;
return _902.childNodes[row].childNodes[col];
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
var _905=this.getSelectedIds();
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
this._addSelectedIds(_905);
}
};
MochiKit.Widget.Table.prototype.sortData=function(_90a,_90b){
var cols=this.getChildNodes();
var _90d=this.getSelectedIds();
this._selected=[];
for(var i=0;i<cols.length;i++){
if(cols[i].field===_90a){
if(cols[i].sort=="none"){
return;
}else{
if(_90b==null){
_90b=cols[i].sort||"asc";
}
}
cols[i].setAttrs({sort:_90b});
}else{
if(cols[i].sort!="none"){
cols[i].setAttrs({sort:null});
}
}
}
this._rows.sort(MochiKit.Base.keyComparator(_90a));
if(_90b=="desc"){
this._rows.reverse();
}
this._renderRows();
this._addSelectedIds(_90d);
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
var _914=this.firstChild.lastChild;
MochiKit.DOM.replaceChildNodes(_914);
for(var i=0;i<this._rows.length;i++){
var tr=MochiKit.DOM.TR();
if(i%2==1){
MochiKit.DOM.addElementClass(tr,"widgetTableAlt");
}
for(var j=0;j<cols.length;j++){
tr.appendChild(cols[j]._render(this._rows[i]));
}
tr.rowNo=i;
_914.appendChild(tr);
}
if(this._rows.length==0){
_914.appendChild(MochiKit.DOM.TR());
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
var _929=row;
if(this._selected.length>0){
_929=this._selected[0];
}
this._unmarkSelection();
this._selected=[];
if(row>=_929){
for(var i=_929;i<=row;i++){
this._selected.push(i);
}
}else{
for(var i=_929;i>=row;i--){
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
MochiKit.Widget.Table.prototype._markSelection=function(_92b){
if(_92b==null){
for(var i=0;i<this._selected.length;i++){
this._markSelection(this._selected[i]);
}
}else{
var _92d=this.firstChild.lastChild;
var tr=_92d.childNodes[_92b];
MochiKit.DOM.addElementClass(tr,"selected");
}
};
MochiKit.Widget.Table.prototype._unmarkSelection=function(_92f){
if(_92f==null){
for(var i=0;i<this._selected.length;i++){
this._unmarkSelection(this._selected[i]);
}
}else{
var _931=this.firstChild.lastChild;
var tr=_931.childNodes[_92f];
MochiKit.DOM.removeElementClass(tr,"selected");
}
};
MochiKit.Widget.TableColumn=function(_933){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_933,MochiKit.Base.extend(null,arguments,1));
}
if(_933.field==null){
throw new Error("The 'field' attribute cannot be null for a TableColumn");
}
var o=MochiKit.DOM.TH();
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetTableColumn");
o.setAttrs(MochiKit.Base.update({title:_933.field,type:"string",key:false},_933));
MochiKit.Signal.connect(o,"onclick",o,"_handleClick");
return o;
};
MochiKit.Widget.TableColumn.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.TableColumn.prototype.setAttrs=function(_936){
_936=MochiKit.Base.update({},_936);
var _937=MochiKit.Base.mask(_936,["title","field","type","sort","maxLength","key","tooltip"]);
if(typeof (_937.title)!="undefined"){
MochiKit.DOM.replaceChildNodes(this,_937.title);
}
if(typeof (_937.field)!="undefined"){
this.field=_937.field;
}
if(typeof (_937.type)!="undefined"){
this.type=_937.type;
}
if(typeof (_937.sort)!="undefined"){
this.sort=_937.sort;
if(_937.sort==null||_937.sort=="none"){
MochiKit.DOM.removeElementClass(this,"sortAsc");
MochiKit.DOM.removeElementClass(this,"sortDesc");
}else{
if(_937.sort=="desc"){
MochiKit.DOM.removeElementClass(this,"sortAsc");
MochiKit.DOM.addElementClass(this,"sortDesc");
}else{
MochiKit.DOM.removeElementClass(this,"sortDesc");
MochiKit.DOM.addElementClass(this,"sortAsc");
}
}
}
if(typeof (_937.maxLength)!="undefined"){
this.maxLength=parseInt(_937.maxLength);
}
if(typeof (_937.key)!="undefined"){
this.key=!MochiKit.Base.isFalse(_937.key);
}
if(typeof (_937.tooltip)!="undefined"){
this.title=_937.tooltip;
}
MochiKit.DOM.updateNodeAttributes(this,_936);
};
MochiKit.Widget.TableColumn.prototype._map=function(src,dst){
var _93a=src[this.field];
if(_93a!=null){
if(this._key){
dst.$id=_93a;
}
switch(this.type){
case "number":
if(_93a instanceof Number){
_93a=_93a.valueOf();
}else{
if(typeof (_93a)!="number"){
_93a=parseFloat(_93a);
}
}
break;
case "date":
if(_93a instanceof Date){
_93a=MochiKit.DateTime.toISODate(_93a);
}else{
_93a=MochiKit.Format.truncate(_93a,10);
}
break;
case "datetime":
if(_93a instanceof Date){
_93a=MochiKit.DateTime.toISOTimestamp(_93a);
}else{
_93a=MochiKit.Format.truncate(_93a,19);
}
break;
case "time":
if(_93a instanceof Date){
_93a=MochiKit.DateTime.toISOTime(_93a);
}else{
if(typeof (_93a)!="string"){
_93a=_93a.toString();
}
if(_93a.length>8){
_93a=_93a.substring(_93a.length-8);
}
}
break;
default:
if(typeof (_93a)!="string"){
_93a=_93a.toString();
}
}
}
dst[this.field]=_93a;
};
MochiKit.Widget.TableColumn.prototype._render=function(obj){
var td=MochiKit.DOM.TD();
var _93d=obj[this.field];
if(_93d==null){
_93d="";
}else{
if(typeof (_93d)!="string"){
_93d=_93d.toString();
}
}
if(this.maxLength&&this.maxLength<_93d.length){
td.title=_93d;
_93d=MochiKit.Format.truncate(_93d,this.maxLength,"...");
}
if(this.type=="html"){
td.innerHTML=_93d;
}else{
td.appendChild(MochiKit.DOM.createTextNode(_93d));
}
return td;
};
MochiKit.Widget.TableColumn.prototype._handleClick=function(){
if(this.parentNode!=null){
var dir=(this.sort=="asc")?"desc":"asc";
var tr=this.parentNode;
var _940=tr.parentNode;
var _941=_940.parentNode;
_941.parentNode.sortData(this.field,dir);
}
};
MochiKit.Widget.TextArea=function(_942){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_942,MochiKit.Base.extend(null,arguments,1));
}
var o=MochiKit.DOM.TEXTAREA();
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetTextArea");
o.focused=false;
o.setAttrs(MochiKit.Base.update({helpText:""},_942));
o.addAll(MochiKit.Base.extend(null,arguments,1));
MochiKit.Signal.connect(o,"onfocus",o,"_handleFocus");
MochiKit.Signal.connect(o,"onblur",o,"_handleFocus");
return o;
};
MochiKit.Widget.TextArea.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.TextArea.prototype.setAttrs=function(_945){
_945=MochiKit.Base.update({},_945);
var _946=MochiKit.Base.mask(_945,["helpText","value"]);
if(typeof (_946.helpText)!="undefined"){
this.helpText=_946.helpText;
}
if(typeof (_946.value)!="undefined"){
this.value=this.storedValue=_946.value;
}
if(!this.focused&&MochiKit.Format.strip(this.value)==""){
this.value=this.helpText;
this.addClass("widgetTextAreaHelp");
}
MochiKit.DOM.updateNodeAttributes(this,_945);
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
MochiKit.Widget.TextField=function(_948){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_948,MochiKit.Base.extend(null,arguments,1));
}
var text="";
if(_948!=null&&_948.value!=null){
text=_948.value;
}
for(var i=1;i<arguments.length;i++){
text+=arguments[i].toString();
}
var o=MochiKit.DOM.INPUT({value:text});
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetTextField");
o.focused=false;
o._popupCreated=false;
o.setAttrs(MochiKit.Base.update({helpText:"",value:text},_948));
MochiKit.Signal.connect(o,"onfocus",o,"_handleFocus");
MochiKit.Signal.connect(o,"onblur",o,"_handleFocus");
return o;
};
MochiKit.Widget.TextField.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.TextField.prototype.setAttrs=function(_94d){
_94d=MochiKit.Base.update({},_94d);
var _94e=MochiKit.Base.mask(_94d,["helpText","value"]);
if(typeof (_94e.helpText)!="undefined"){
this.helpText=_94e.helpText;
}
if(typeof (_94e.value)!="undefined"){
this.value=this.storedValue=_94e.value;
}
if(!this.focused&&MochiKit.Format.strip(this.value)==""){
this.value=this.helpText;
this.addClass("widgetTextFieldHelp");
}
MochiKit.DOM.updateNodeAttributes(this,_94d);
};
MochiKit.Widget.TextField.prototype.reset=function(){
this.setAttrs({value:this.defaultValue});
};
MochiKit.Widget.TextField.prototype.getValue=function(){
return (this.focused)?this.value:this.storedValue;
};
MochiKit.Widget.TextField.prototype.popup=function(_94f){
if(!this._popupCreated&&_94f){
this.autocomplete="off";
this._popupCreated=true;
var _950={"max-height":"300px","width":"300px"};
var _951=new MochiKit.Widget.Popup({style:_950});
MochiKit.DOM.insertSiblingNodesAfter(this,_951);
MochiKit.DOM.makePositioned(this.parentNode);
var pos={x:this.offsetLeft+1,y:this.offsetTop+this.offsetHeight+1};
MochiKit.Style.setElementPosition(_951,pos);
MochiKit.Signal.connect(this,"onkeydown",this,"_handleKeyDown");
MochiKit.Signal.connect(_951,"onclick",this,"_handleClick");
}
return (this._popupCreated)?this.nextSibling:null;
};
MochiKit.Widget.TextField.prototype.showPopup=function(_953,_954){
var _955=this.popup(true);
if(_954){
_955.hide();
MochiKit.DOM.replaceChildNodes(_955);
for(var i=0;i<_954.length;i++){
if(typeof (_954[i])=="string"){
var node=MochiKit.DOM.DIV({"class":"widgetPopupItem"},"\xbb "+_954[i]);
_955.appendChild(node);
}else{
MochiKit.DOM.appendChildNodes(_955,_954[i]);
}
}
}
if(_955.childNodes.length>0){
_955.setAttrs(MochiKit.Base.update({delay:30000},_953));
_955.show();
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
var _959=this.popup();
if(_959!=null&&!_959.isHidden()){
_959.setAttrs({delay:250});
}
}
}
};
MochiKit.Widget.TextField.prototype._handleKeyDown=function(evt){
var _95b=this.popup(false);
if(_95b!=null){
_95b.resetDelay();
if(_95b.isHidden()){
switch(evt.key().string){
case "KEY_ESCAPE":
evt.stop();
break;
case "KEY_ARROW_UP":
case "KEY_ARROW_DOWN":
this.showPopup();
_95b.selectChild(0);
evt.stop();
break;
}
}else{
switch(evt.key().string){
case "KEY_TAB":
case "KEY_ENTER":
_95b.hide();
evt.stop();
if(_95b.selectedChild()!=null){
MochiKit.Widget.emitSignal(this,"onpopupselect");
}
break;
case "KEY_ESCAPE":
_95b.hide();
evt.stop();
break;
case "KEY_ARROW_UP":
case "KEY_ARROW_DOWN":
_95b.selectMove(evt.key().string=="KEY_ARROW_UP"?-1:1);
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
MochiKit.Widget.Tree=function(_95d){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_95d,MochiKit.Base.extend(null,arguments,1));
}
var o=MochiKit.DOM.DIV(_95d);
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetTree");
o.resizeContent=MochiKit.Base.noop;
o.selectedPath=null;
o.addAll(MochiKit.Base.extend(null,arguments,1));
return o;
};
MochiKit.Widget.Tree.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Tree.prototype.addChildNode=function(_960){
if(!MochiKit.Widget.isWidget(_960,"TreeNode")){
throw new Error("Tree widget can only have TreeNode children");
}
this.appendChild(_960);
};
MochiKit.Widget.Tree.prototype.findRoot=function(name){
var _962=this.getChildNodes();
for(var i=0;i<_962.length;i++){
if(_962[i].name==name){
return _962[i];
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
MochiKit.Widget.Tree.prototype.expandAll=function(_969){
if(typeof (_969)!=="number"){
_969=10;
}
var _96a=this.getChildNodes();
for(var i=0;_969>0&&i<_96a.length;i++){
_96a[i].expandAll(_969-1);
}
};
MochiKit.Widget.Tree.prototype.collapseAll=function(_96c){
if(typeof (_96c)!=="number"){
_96c=0;
}
var _96d=this.getChildNodes();
for(var i=0;i<_96d.length;i++){
_96d[i].collapseAll(_96c-1);
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
var _972=node.findChild(path[i]);
if(_972==null){
_972=new MochiKit.Widget.TreeNode({name:path[i]});
node.addChildNode(_972);
}
node=_972;
}
return node;
};
MochiKit.Widget.TreeNode=function(_973){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_973,MochiKit.Base.extend(null,arguments,1));
}
var icon=MochiKit.Widget.Icon({ref:"BLANK"});
var _976=MochiKit.DOM.SPAN({"class":"widgetTreeNodeText"});
var div=MochiKit.DOM.DIV({"class":"widgetTreeNodeLabel"},icon,_976);
var o=MochiKit.DOM.DIV({},div);
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetTreeNode");
_973=MochiKit.Base.update({name:"Tree Node",folder:false},_973);
if(typeof (_973.icon)=="undefined"){
_973.icon=_973.folder?"FOLDER":"DOCUMENT";
}
o.setAttrs(_973);
o.addAll(MochiKit.Base.extend(null,arguments,1));
MochiKit.Signal.connect(icon,"onclick",o,"toggle");
MochiKit.Signal.connect(div,"onclick",o,"select");
return o;
};
MochiKit.Widget.TreeNode.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.TreeNode.prototype._container=function(_979){
var _97a=this.lastChild;
if(MochiKit.DOM.hasElementClass(_97a,"widgetTreeNodeContainer")){
return _97a;
}else{
if(_979){
_97a=MochiKit.DOM.DIV({"class":"widgetTreeNodeContainer widgetHidden"});
this.appendChild(_97a);
var _97b=this.firstChild.firstChild;
_97b.setAttrs({ref:"PLUS"});
this.setAttrs({icon:"FOLDER"});
return _97a;
}else{
return null;
}
}
};
MochiKit.Widget.TreeNode.prototype.setAttrs=function(_97c){
_97c=MochiKit.Base.update({},_97c);
var _97d=MochiKit.Base.mask(_97c,["name","folder","icon"]);
if(typeof (_97d.name)!="undefined"){
this.name=_97d.name;
var node=this.firstChild.firstChild;
while(!MochiKit.DOM.hasElementClass(node,"widgetTreeNodeText")){
node=node.nextSibling;
}
MochiKit.DOM.replaceChildNodes(node,_97d.name);
}
if(!MochiKit.Base.isFalse(_97d.folder)){
this._container(true);
}
if(typeof (_97d.icon)!="undefined"){
var _97f=this.firstChild.firstChild;
var _980=_97f.nextSibling;
if(!MochiKit.Widget.isWidget(_980,"Icon")){
_980=null;
}
if(_980==null&&_97d.icon!=null){
if(typeof (_97d.icon)==="string"){
_97d.icon=new MochiKit.Widget.Icon({ref:_97d.icon});
}else{
if(!MochiKit.Widget.isWidget(_97d.icon,"Icon")){
_97d.icon=new MochiKit.Widget.Icon(_97d.icon);
}
}
MochiKit.DOM.insertSiblingNodesAfter(_97f,_97d.icon);
}else{
if(_980!=null&&_97d.icon!=null){
if(MochiKit.Widget.isWidget(_97d.icon,"Icon")){
MochiKit.DOM.swapDOM(_980,_97d.icon);
}else{
if(typeof (_97d.icon)==="string"){
_980.setAttrs({ref:_97d.icon});
}else{
_980.setAttrs(_97d.icon);
}
}
}else{
if(_980!=null&&_97d.icon==null){
MochiKit.Widget.destroyWidget(_980);
}
}
}
}
MochiKit.DOM.updateNodeAttributes(this,_97c);
};
MochiKit.Widget.TreeNode.prototype.getChildNodes=function(){
var _981=this._container();
if(_981==null){
return [];
}else{
return MochiKit.Base.extend([],_981.childNodes);
}
};
MochiKit.Widget.TreeNode.prototype.addChildNode=function(_982){
if(!MochiKit.Widget.isWidget(_982,"TreeNode")){
throw new Error("TreeNode widget can only have TreeNode children");
}
this._container(true).appendChild(_982);
};
MochiKit.Widget.TreeNode.prototype.removeChildNode=function(_983){
var _984=this._container();
if(_984!=null){
_984.removeChild(_983);
}
};
MochiKit.Widget.TreeNode.prototype.isFolder=function(){
return this._container()!=null;
};
MochiKit.Widget.TreeNode.prototype.isExpanded=function(){
var _985=this._container();
return _985!=null&&!MochiKit.DOM.hasElementClass(_985,"widgetHidden");
};
MochiKit.Widget.TreeNode.prototype.isSelected=function(){
return MochiKit.DOM.hasElementClass(this.firstChild,"selected");
};
MochiKit.Widget.TreeNode.prototype.tree=function(){
var _986=this.parent();
if(_986!=null){
return _986.tree();
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
var _988=this.parent();
if(_988==null){
return [this.name];
}else{
var path=_988.path();
path.push(this.name);
return path;
}
};
MochiKit.Widget.TreeNode.prototype.findChild=function(name){
var _98b=this.getChildNodes();
for(var i=0;i<_98b.length;i++){
if(_98b[i].name==name){
return _98b[i];
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
var _992=this.parent();
if(_992!=null&&!_992.isExpanded()){
_992.expand();
}
var _993=this._container();
if(_993!=null&&!this.isExpanded()){
var _994=this.firstChild.firstChild;
_994.setAttrs({ref:"MINUS"});
MochiKit.DOM.removeElementClass(_993,"widgetHidden");
var tree=this.tree();
if(tree!=null){
tree._emitExpand(this);
}
}
};
MochiKit.Widget.TreeNode.prototype.expandAll=function(_996){
if(typeof (_996)!=="number"){
_996=10;
}
this.expand();
var _997=this.getChildNodes();
for(var i=0;_996>0&&i<_997.length;i++){
_997[i].expandAll(_996-1);
}
};
MochiKit.Widget.TreeNode.prototype.collapse=function(){
var _999=this._container();
if(_999!=null&&this.isExpanded()){
var _99a=this.firstChild.firstChild;
_99a.setAttrs({ref:"PLUS"});
MochiKit.DOM.addElementClass(_999,"widgetHidden");
var tree=this.tree();
if(tree!=null){
tree._emitExpand(this);
}
}
};
MochiKit.Widget.TreeNode.prototype.collapseAll=function(_99c){
if(typeof (_99c)!=="number"){
_99c=0;
}
if(_99c<=0){
this.collapse();
}
var _99d=this.getChildNodes();
for(var i=0;i<_99d.length;i++){
_99d[i].collapseAll(_99c-1);
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
MochiKit.Widget.Wizard=function(_9a0){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_9a0,MochiKit.Base.extend(null,arguments,1));
}
var o=MochiKit.DOM.DIV(_9a0);
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetWizard");
o._selectedIndex=-1;
o.appendChild(MochiKit.DOM.H3({"class":"widgetWizardTitle"}));
var _9a3=MochiKit.Widget.Button({style:{"margin-right":"10px"}},MochiKit.Widget.Icon({ref:"CANCEL"})," Cancel");
var _9a4=MochiKit.Widget.Button({style:{"margin-right":"10px"}},MochiKit.Widget.Icon({ref:"PREVIOUS"})," Previous");
var _9a5=MochiKit.Widget.Button({},"Next ",MochiKit.Widget.Icon({ref:"NEXT"}));
var _9a6=MochiKit.Widget.Button({highlight:true},MochiKit.Widget.Icon({ref:"OK"})," Finish");
_9a3.hide();
o.appendChild(MochiKit.DOM.DIV({"class":"widgetWizardButtons"},_9a3,_9a4,_9a5,_9a6));
MochiKit.Signal.connect(_9a3,"onclick",o,"cancel");
MochiKit.Signal.connect(_9a4,"onclick",o,"previous");
MochiKit.Signal.connect(_9a5,"onclick",o,"next");
MochiKit.Signal.connect(_9a6,"onclick",o,"done");
o._updateStatus();
o.addAll(MochiKit.Base.extend(null,arguments,1));
return o;
};
MochiKit.Widget.Wizard.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Wizard.prototype.getChildNodes=function(){
return MochiKit.Base.extend([],this.childNodes,2);
};
MochiKit.Widget.Wizard.prototype.addChildNode=function(_9a7){
if(!MochiKit.Widget.isWidget(_9a7,"Pane")){
_9a7=new MochiKit.Widget.Pane(null,_9a7);
}
MochiKit.Style.registerSizeConstraints(_9a7,"100%","100%-65");
_9a7.hide();
this.appendChild(_9a7);
if(this.getChildNodes().length==1){
this.activatePage(0);
}else{
this._updateStatus();
}
};
MochiKit.Widget.Wizard.prototype._updateStatus=function(){
var h3=this.childNodes[0];
var _9a9=this.childNodes[1].childNodes[0];
var _9aa=this.childNodes[1].childNodes[1];
var _9ab=this.childNodes[1].childNodes[2];
var _9ac=this.childNodes[1].childNodes[3];
var page=this.activePage();
var _9ae=MochiKit.Widget.Pane.FORWARD;
var _9af=null;
var info="(No pages available)";
var icon=null;
if(page!=null){
_9ae=page.pageStatus||MochiKit.Widget.Pane.ANY;
_9af=page.pageTitle;
info=" (Step "+(this._selectedIndex+1)+" of "+this.getChildNodes().length+")";
}
if(_9ae===MochiKit.Widget.Pane.WORKING){
_9a9.show();
_9aa.hide();
icon={ref:"LOADING","class":"widgetWizardWait"};
icon=MochiKit.Widget.Icon(icon);
}else{
_9a9.hide();
_9aa.show();
}
if(this._selectedIndex>=this.getChildNodes().length-1){
_9ab.hide();
_9ac.show();
}else{
_9ab.show();
_9ac.hide();
}
_9aa.disabled=(this._selectedIndex<=0)||!_9ae.previous;
_9ab.disabled=!_9ae.next;
_9ac.disabled=!_9ae.next;
info=MochiKit.DOM.SPAN({"class":"widgetWizardInfo"},info);
MochiKit.DOM.replaceChildNodes(h3,icon,_9af,info);
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
MochiKit.Widget.Wizard.prototype.activatePage=function(_9b2){
if(typeof (_9b2)=="number"){
var _9b3=_9b2;
var page=this.childNodes[_9b3+2];
}else{
var page=_9b2;
var _9b3=MochiKit.Base.findIdentical(this.childNodes,page,2)-2;
}
if(_9b3<0||_9b3>=this.getChildNodes().length){
throw new RangeError("Page index out of bounds: "+_9b3);
}
var _9b5=this.activePage();
if(_9b5!=null){
if(!_9b5._handleExit({validateForm:this._selectedIndex<_9b3})){
return;
}
}
this._selectedIndex=_9b3;
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

