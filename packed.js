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
},isIterable:function(o){
return o!=null&&(typeof (o.next)=="function"||typeof (o.iter)=="function");
},iter:function(_158,_159){
var self=MochiKit.Iter;
if(arguments.length==2){
return self.takewhile(function(a){
return a!=_159;
},_158);
}
if(typeof (_158.next)=="function"){
return _158;
}else{
if(typeof (_158.iter)=="function"){
return _158.iter();
}
}
try{
return self.iteratorRegistry.match(_158);
}
catch(e){
var m=MochiKit.Base;
if(e==m.NotFound){
e=new TypeError(typeof (_158)+": "+m.repr(_158)+" is not iterable");
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
var _163=self.iter(p);
return {repr:function(){
return "cycle(...)";
},toString:m.forwardCall("repr"),next:function(){
try{
var rval=_163.next();
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
},next:function(_169){
return _169.next();
},izip:function(p,q){
var m=MochiKit.Base;
var self=MochiKit.Iter;
var next=self.next;
var _16f=m.map(self.iter,arguments);
return {repr:function(){
return "izip(...)";
},toString:m.forwardCall("repr"),next:function(){
return m.map(next,_16f);
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
var _17b=0;
var stop=0;
var step=1;
var i=-1;
if(arguments.length==2){
stop=arguments[1];
}else{
if(arguments.length==3){
_17b=arguments[1];
stop=arguments[2];
}else{
_17b=arguments[1];
stop=arguments[2];
step=arguments[3];
}
}
return {repr:function(){
return "islice("+["...",_17b,stop,step].join(", ")+")";
},toString:m.forwardCall("repr"),next:function(){
var rval;
while(i<_17b){
rval=seq.next();
i++;
}
if(_17b>=stop){
throw self.StopIteration;
}
_17b+=step;
return rval;
}};
},imap:function(fun,p,q){
var m=MochiKit.Base;
var self=MochiKit.Iter;
var _185=m.map(self.iter,m.extend(null,arguments,1));
var map=m.map;
var next=self.next;
return {repr:function(){
return "imap(...)";
},toString:m.forwardCall("repr"),next:function(){
return fun.apply(this,map(next,_185));
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
var _190=m.map(self.iter,arguments);
return {repr:function(){
return "chain(...)";
},toString:m.forwardCall("repr"),next:function(){
while(_190.length>1){
try{
var _191=_190[0].next();
return _191;
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
_190.shift();
var _191=_190[0].next();
return _191;
}
}
if(_190.length==1){
var arg=_190.shift();
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
},_tee:function(_19c,sync,_19e){
sync.pos[_19c]=-1;
var m=MochiKit.Base;
var _1a0=m.listMin;
return {repr:function(){
return "tee("+_19c+", ...)";
},toString:m.forwardCall("repr"),next:function(){
var rval;
var i=sync.pos[_19c];
if(i==sync.max){
rval=_19e.next();
sync.deque.push(rval);
sync.max+=1;
sync.pos[_19c]+=1;
}else{
rval=sync.deque[i-sync.min];
sync.pos[_19c]+=1;
if(i==sync.min&&_1a0(sync.pos)!=sync.min){
sync.min+=1;
sync.deque.shift();
}
}
return rval;
}};
},tee:function(_1a3,n){
var rval=[];
var sync={"pos":[],"deque":[],"max":-1,"min":-1};
if(arguments.length==1||typeof (n)=="undefined"||n===null){
n=2;
}
var self=MochiKit.Iter;
_1a3=self.iter(_1a3);
var _tee=self._tee;
for(var i=0;i<n;i++){
rval.push(_tee(i,sync,_1a3));
}
return rval;
},list:function(_1aa){
var rval;
if(_1aa instanceof Array){
return _1aa.slice();
}
if(typeof (_1aa)=="function"&&!(_1aa instanceof Function)&&typeof (_1aa.length)=="number"){
rval=[];
for(var i=0;i<_1aa.length;i++){
rval.push(_1aa[i]);
}
return rval;
}
var self=MochiKit.Iter;
_1aa=self.iter(_1aa);
var rval=[];
var _1ae;
try{
while(true){
_1ae=_1aa.next();
rval.push(_1ae);
}
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
return rval;
}
return undefined;
},reduce:function(fn,_1b0,_1b1){
var i=0;
var x=_1b1;
var self=MochiKit.Iter;
_1b0=self.iter(_1b0);
if(arguments.length<3){
try{
x=_1b0.next();
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
x=fn(x,_1b0.next());
}
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
}
return x;
},range:function(){
var _1b5=0;
var stop=0;
var step=1;
if(arguments.length==1){
stop=arguments[0];
}else{
if(arguments.length==2){
_1b5=arguments[0];
stop=arguments[1];
}else{
if(arguments.length==3){
_1b5=arguments[0];
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
if((step>0&&_1b5>=stop)||(step<0&&_1b5<=stop)){
throw MochiKit.Iter.StopIteration;
}
var rval=_1b5;
_1b5+=step;
return rval;
},repr:function(){
return "range("+[_1b5,stop,step].join(", ")+")";
},toString:MochiKit.Base.forwardCall("repr")};
},sum:function(_1b9,_1ba){
if(typeof (_1ba)=="undefined"||_1ba===null){
_1ba=0;
}
var x=_1ba;
var self=MochiKit.Iter;
_1b9=self.iter(_1b9);
try{
while(true){
x+=_1b9.next();
}
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
}
return x;
},exhaust:function(_1bd){
var self=MochiKit.Iter;
_1bd=self.iter(_1bd);
try{
while(true){
_1bd.next();
}
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
}
},forEach:function(_1bf,func,obj){
var m=MochiKit.Base;
var self=MochiKit.Iter;
if(arguments.length>2){
func=m.bind(func,obj);
}
if(m.isArrayLike(_1bf)&&!self.isIterable(_1bf)){
try{
for(var i=0;i<_1bf.length;i++){
func(_1bf[i]);
}
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
}
}else{
self.exhaust(self.imap(func,_1bf));
}
},every:function(_1c5,func){
var self=MochiKit.Iter;
try{
self.ifilterfalse(func,_1c5).next();
return false;
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
return true;
}
},sorted:function(_1c8,cmp){
var rval=MochiKit.Iter.list(_1c8);
if(arguments.length==1){
cmp=MochiKit.Base.compare;
}
rval.sort(cmp);
return rval;
},reversed:function(_1cb){
var rval=MochiKit.Iter.list(_1cb);
rval.reverse();
return rval;
},some:function(_1cd,func){
var self=MochiKit.Iter;
try{
self.ifilter(func,_1cd).next();
return true;
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
return false;
}
},iextend:function(lst,_1d1){
var m=MochiKit.Base;
var self=MochiKit.Iter;
if(m.isArrayLike(_1d1)&&!self.isIterable(_1d1)){
for(var i=0;i<_1d1.length;i++){
lst.push(_1d1[i]);
}
}else{
_1d1=self.iter(_1d1);
try{
while(true){
lst.push(_1d1.next());
}
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
}
}
return lst;
},groupby:function(_1d5,_1d6){
var m=MochiKit.Base;
var self=MochiKit.Iter;
if(arguments.length<2){
_1d6=m.operator.identity;
}
_1d5=self.iter(_1d5);
var pk=undefined;
var k=undefined;
var v;
function fetch(){
v=_1d5.next();
k=_1d6(v);
}
function eat(){
var ret=v;
v=undefined;
return ret;
}
var _1dd=true;
var _1de=m.compare;
return {repr:function(){
return "groupby(...)";
},next:function(){
while(_1de(k,pk)===0){
fetch();
if(_1dd){
_1dd=false;
break;
}
}
pk=k;
return [k,{next:function(){
if(v==undefined){
fetch();
}
if(_1de(k,pk)!==0){
throw self.StopIteration;
}
return eat();
}}];
}};
},groupby_as_array:function(_1df,_1e0){
var m=MochiKit.Base;
var self=MochiKit.Iter;
if(arguments.length<2){
_1e0=m.operator.identity;
}
_1df=self.iter(_1df);
var _1e3=[];
var _1e4=true;
var _1e5;
var _1e6=m.compare;
while(true){
try{
var _1e7=_1df.next();
var key=_1e0(_1e7);
}
catch(e){
if(e==self.StopIteration){
break;
}
throw e;
}
if(_1e4||_1e6(key,_1e5)!==0){
var _1e9=[];
_1e3.push([key,_1e9]);
}
_1e9.push(_1e7);
_1e4=false;
_1e5=key;
}
return _1e3;
},arrayLikeIter:function(_1ea){
var i=0;
return {repr:function(){
return "arrayLikeIter(...)";
},toString:MochiKit.Base.forwardCall("repr"),next:function(){
if(i>=_1ea.length){
throw MochiKit.Iter.StopIteration;
}
return _1ea[i++];
}};
},hasIterateNext:function(_1ec){
return (_1ec&&typeof (_1ec.iterateNext)=="function");
},iterateNextIter:function(_1ed){
return {repr:function(){
return "iterateNextIter(...)";
},toString:MochiKit.Base.forwardCall("repr"),next:function(){
var rval=_1ed.iterateNext();
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
MochiKit.Logging.LogMessage=function(num,_1f1,info){
this.num=num;
this.level=_1f1;
this.info=info;
this.timestamp=new Date();
};
MochiKit.Logging.LogMessage.prototype={repr:function(){
var m=MochiKit.Base;
return "LogMessage("+m.map(m.repr,[this.num,this.level,this.info]).join(", ")+")";
},toString:MochiKit.Base.forwardCall("repr")};
MochiKit.Base.update(MochiKit.Logging,{logLevelAtLeast:function(_1f4){
var self=MochiKit.Logging;
if(typeof (_1f4)=="string"){
_1f4=self.LogLevel[_1f4];
}
return function(msg){
var _1f7=msg.level;
if(typeof (_1f7)=="string"){
_1f7=self.LogLevel[_1f7];
}
return _1f7>=_1f4;
};
},isLogMessage:function(){
var _1f8=MochiKit.Logging.LogMessage;
for(var i=0;i<arguments.length;i++){
if(!(arguments[i] instanceof _1f8)){
return false;
}
}
return true;
},compareLogMessage:function(a,b){
return MochiKit.Base.compare([a.level,a.info],[b.level,b.info]);
},alertListener:function(msg){
alert("num: "+msg.num+"\nlevel: "+msg.level+"\ninfo: "+msg.info.join(" "));
}});
MochiKit.Logging.Logger=function(_1fd){
this.counter=0;
if(typeof (_1fd)=="undefined"||_1fd===null){
_1fd=-1;
}
this.maxSize=_1fd;
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
},addListener:function(_202,_203,_204){
if(typeof (_203)=="string"){
_203=MochiKit.Logging.logLevelAtLeast(_203);
}
var _205=[_203,_204];
_205.ident=_202;
this.listeners[_202]=_205;
},removeListener:function(_206){
delete this.listeners[_206];
},baseLog:function(_207,_208){
if(typeof (_207)=="number"){
if(_207>=MochiKit.Logging.LogLevel.FATAL){
_207="FATAL";
}else{
if(_207>=MochiKit.Logging.LogLevel.ERROR){
_207="ERROR";
}else{
if(_207>=MochiKit.Logging.LogLevel.WARNING){
_207="WARNING";
}else{
if(_207>=MochiKit.Logging.LogLevel.INFO){
_207="INFO";
}else{
_207="DEBUG";
}
}
}
}
}
var msg=new MochiKit.Logging.LogMessage(this.counter,_207,MochiKit.Base.extend(null,arguments,1));
this._messages.push(msg);
this.dispatchListeners(msg);
if(this.useNativeConsole){
this.logToConsole(msg.level+": "+msg.info.join(" "));
}
this.counter+=1;
while(this.maxSize>=0&&this._messages.length>this.maxSize){
this._messages.shift();
}
},getMessages:function(_20a){
var _20b=0;
if(!(typeof (_20a)=="undefined"||_20a===null)){
_20b=Math.max(0,this._messages.length-_20a);
}
return this._messages.slice(_20b);
},getMessageText:function(_20c){
if(typeof (_20c)=="undefined"||_20c===null){
_20c=30;
}
var _20d=this.getMessages(_20c);
if(_20d.length){
var lst=map(function(m){
return "\n  ["+m.num+"] "+m.level+": "+m.info.join(" ");
},_20d);
lst.unshift("LAST "+_20d.length+" MESSAGES:");
return lst.join("");
}
return "";
},debuggingBookmarklet:function(_210){
if(typeof (MochiKit.LoggingPane)=="undefined"){
alert(this.getMessageText());
}else{
MochiKit.LoggingPane.createLoggingPane(_210||false);
}
}};
MochiKit.Logging.__new__=function(){
this.LogLevel={ERROR:40,FATAL:50,WARNING:30,INFO:20,DEBUG:10};
var m=MochiKit.Base;
m.registerComparator("LogMessage",this.isLogMessage,this.compareLogMessage);
var _212=m.partial;
var _213=this.Logger;
var _214=_213.prototype.baseLog;
m.update(this.Logger.prototype,{debug:_212(_214,"DEBUG"),log:_212(_214,"INFO"),error:_212(_214,"ERROR"),fatal:_212(_214,"FATAL"),warning:_212(_214,"WARNING")});
var self=this;
var _216=function(name){
return function(){
self.logger[name].apply(self.logger,arguments);
};
};
this.log=_216("log");
this.logError=_216("error");
this.logDebug=_216("debug");
this.logFatal=_216("fatal");
this.logWarning=_216("warning");
this.logger=new _213();
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
var year,_21f,day,hour,min,sec,msec;
year=parseInt(res[1],10);
if(typeof (res[2])=="undefined"||res[2]===""){
return new Date(year);
}
_21f=parseInt(res[2],10)-1;
day=parseInt(res[3],10);
if(typeof (res[4])=="undefined"||res[4]===""){
return new Date(year,_21f,day);
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
return new Date(year,_21f,day,hour,min,sec,msec);
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
return new Date(Date.UTC(year,_21f,day,hour,min,sec,msec)-ofs);
};
MochiKit.DateTime.toISOTime=function(date,_227){
if(typeof (date)=="undefined"||date===null){
return null;
}
var hh=date.getHours();
var mm=date.getMinutes();
var ss=date.getSeconds();
var lst=[((_227&&(hh<10))?"0"+hh:hh),((mm<10)?"0"+mm:mm),((ss<10)?"0"+ss:ss)];
return lst.join(":");
};
MochiKit.DateTime.toISOTimestamp=function(date,_22d){
if(typeof (date)=="undefined"||date===null){
return null;
}
var sep=_22d?"T":" ";
var foot=_22d?"Z":"";
if(_22d){
date=new Date(date.getTime()+(date.getTimezoneOffset()*60000));
}
return MochiKit.DateTime.toISODate(date)+sep+MochiKit.DateTime.toISOTime(date,_22d)+foot;
};
MochiKit.DateTime.toISODate=function(date){
if(typeof (date)=="undefined"||date===null){
return null;
}
var _231=MochiKit.DateTime._padTwo;
var _232=MochiKit.DateTime._padFour;
return [_232(date.getFullYear()),_231(date.getMonth()+1),_231(date.getDate())].join("-");
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
var _238=MochiKit.DateTime._padTwo;
return [_238(d.getMonth()+1),_238(d.getDate()),d.getFullYear()].join("/");
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
(function(_23d,_23e){
if((typeof (JSAN)=="undefined"&&typeof (dojo)=="undefined")||(MochiKit.__export__===false)){
var all=_23e.EXPORT_TAGS[":all"];
for(var i=0;i<all.length;i++){
_23d[all[i]]=_23e[all[i]];
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
MochiKit.Format._numberFormatter=function(_241,_242,_243,_244,_245,_246,_247,_248,_249){
return function(num){
num=parseFloat(num);
if(typeof (num)=="undefined"||num===null||isNaN(num)){
return _241;
}
var _24b=_242;
var _24c=_243;
if(num<0){
num=-num;
}else{
_24b=_24b.replace(/-/,"");
}
var me=arguments.callee;
var fmt=MochiKit.Format.formatLocale(_244);
if(_245){
num=num*100;
_24c=fmt.percent+_24c;
}
num=MochiKit.Format.roundToFixed(num,_246);
var _24f=num.split(/\./);
var _250=_24f[0];
var frac=(_24f.length==1)?"":_24f[1];
var res="";
while(_250.length<_247){
_250="0"+_250;
}
if(_248){
while(_250.length>_248){
var i=_250.length-_248;
res=fmt.separator+_250.substring(i,_250.length)+res;
_250=_250.substring(0,i);
}
}
res=_250+res;
if(_246>0){
while(frac.length<_249){
frac=frac+"0";
}
res=res+fmt.decimal+frac;
}
return _24b+res+_24c;
};
};
MochiKit.Format.numberFormatter=function(_254,_255,_256){
if(typeof (_255)=="undefined"){
_255="";
}
var _257=_254.match(/((?:[0#]+,)?[0#]+)(?:\.([0#]+))?(%)?/);
if(!_257){
throw TypeError("Invalid pattern");
}
var _258=_254.substr(0,_257.index);
var _259=_254.substr(_257.index+_257[0].length);
if(_258.search(/-/)==-1){
_258=_258+"-";
}
var _25a=_257[1];
var frac=(typeof (_257[2])=="string"&&_257[2]!="")?_257[2]:"";
var _25c=(typeof (_257[3])=="string"&&_257[3]!="");
var tmp=_25a.split(/,/);
var _25e;
if(typeof (_256)=="undefined"){
_256="default";
}
if(tmp.length==1){
_25e=null;
}else{
_25e=tmp[1].length;
}
var _25f=_25a.length-_25a.replace(/0/g,"").length;
var _260=frac.length-frac.replace(/0/g,"").length;
var _261=frac.length;
var rval=MochiKit.Format._numberFormatter(_255,_258,_259,_256,_25c,_261,_25f,_25e,_260);
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
MochiKit.Format.formatLocale=function(_266){
if(typeof (_266)=="undefined"||_266===null){
_266="default";
}
if(typeof (_266)=="string"){
var rval=MochiKit.Format.LOCALE[_266];
if(typeof (rval)=="string"){
rval=arguments.callee(rval);
MochiKit.Format.LOCALE[_266]=rval;
}
return rval;
}else{
return _266;
}
};
MochiKit.Format.twoDigitAverage=function(_268,_269){
if(_269){
var res=_268/_269;
if(!isNaN(res)){
return MochiKit.Format.twoDigitFloat(res);
}
}
return "0";
};
MochiKit.Format.twoDigitFloat=function(_26b){
var res=roundToFixed(_26b,2);
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
MochiKit.Format.lstrip=function(str,_26e){
str=str+"";
if(typeof (str)!="string"){
return null;
}
if(!_26e){
return str.replace(/^\s+/,"");
}else{
return str.replace(new RegExp("^["+_26e+"]+"),"");
}
};
MochiKit.Format.rstrip=function(str,_270){
str=str+"";
if(typeof (str)!="string"){
return null;
}
if(!_270){
return str.replace(/\s+$/,"");
}else{
return str.replace(new RegExp("["+_270+"]+$"),"");
}
};
MochiKit.Format.strip=function(str,_272){
var self=MochiKit.Format;
return self.rstrip(self.lstrip(str,_272),_272);
};
MochiKit.Format.truncToFixed=function(_274,_275){
var res=Math.floor(_274).toFixed(0);
if(_274<0){
res=Math.ceil(_274).toFixed(0);
if(res.charAt(0)!="-"&&_275>0){
res="-"+res;
}
}
if(res.indexOf("e")<0&&_275>0){
var tail=_274.toString();
if(tail.indexOf("e")>0){
tail=".";
}else{
if(tail.indexOf(".")<0){
tail=".";
}else{
tail=tail.substring(tail.indexOf("."));
}
}
if(tail.length-1>_275){
tail=tail.substring(0,_275+1);
}
while(tail.length-1<_275){
tail+="0";
}
res+=tail;
}
return res;
};
MochiKit.Format.roundToFixed=function(_278,_279){
var _27a=Math.abs(_278)+0.5*Math.pow(10,-_279);
var res=MochiKit.Format.truncToFixed(_27a,_279);
if(_278<0){
res="-"+res;
}
return res;
};
MochiKit.Format.percentFormat=function(_27c){
return MochiKit.Format.twoDigitFloat(100*_27c)+"%";
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
(function(_281,_282){
if((typeof (JSAN)=="undefined"&&typeof (dojo)=="undefined")||(MochiKit.__export__===false)){
var all=_282.EXPORT_TAGS[":all"];
for(var i=0;i<all.length;i++){
_281[all[i]]=_282[all[i]];
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
MochiKit.Async.Deferred=function(_285){
this.chain=[];
this.id=this._nextId();
this.fired=-1;
this.paused=0;
this.results=[null,null];
this.canceller=_285;
this.silentlyCancelled=false;
this.chained=false;
};
MochiKit.Async.Deferred.prototype={repr:function(){
var _286;
if(this.fired==-1){
_286="unfired";
}else{
if(this.fired===0){
_286="success";
}else{
_286="error";
}
}
return "Deferred("+this.id+", "+_286+")";
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
var _291=this.chain;
var _292=this.fired;
var res=this.results[_292];
var self=this;
var cb=null;
while(_291.length>0&&this.paused===0){
var pair=_291.shift();
var f=pair[_292];
if(f===null){
continue;
}
try{
res=f(res);
_292=((res instanceof Error)?1:0);
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
_292=1;
if(!(err instanceof Error)){
err=new MochiKit.Async.GenericError(err);
}
res=err;
}
}
this.fired=_292;
this.results[_292]=res;
if(cb&&this.paused){
res.addBoth(cb);
res.chained=true;
}
}};
MochiKit.Base.update(MochiKit.Async,{evalJSONRequest:function(req){
return MochiKit.Base.evalJSON(req.responseText);
},succeed:function(_29a){
var d=new MochiKit.Async.Deferred();
d.callback.apply(d,arguments);
return d;
},fail:function(_29c){
var d=new MochiKit.Async.Deferred();
d.errback.apply(d,arguments);
return d;
},getXMLHttpRequest:function(){
var self=arguments.callee;
if(!self.XMLHttpRequest){
var _29f=[function(){
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
for(var i=0;i<_29f.length;i++){
var func=_29f[i];
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
var _2a4=null;
try{
_2a4=this.status;
if(!_2a4&&m.isNotEmpty(this.responseText)){
_2a4=304;
}
}
catch(e){
}
if(_2a4==200||_2a4==201||_2a4==204||_2a4==304||_2a4==1223){
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
},sendXMLHttpRequest:function(req,_2a8){
if(typeof (_2a8)=="undefined"||_2a8===null){
_2a8="";
}
var m=MochiKit.Base;
var self=MochiKit.Async;
var d=new self.Deferred(m.partial(self._xhr_canceller,req));
try{
req.onreadystatechange=m.bind(self._xhr_onreadystatechange,req,d);
req.send(_2a8);
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
var _2b5=opts.headers;
if(!m.isArrayLike(_2b5)){
_2b5=m.items(_2b5);
}
for(var i=0;i<_2b5.length;i++){
var _2b7=_2b5[i];
var name=_2b7[0];
var _2b9=_2b7[1];
req.setRequestHeader(name,_2b9);
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
},wait:function(_2c2,_2c3){
var d=new MochiKit.Async.Deferred();
var m=MochiKit.Base;
if(typeof (_2c3)!="undefined"){
d.addCallback(function(){
return _2c3;
});
}
var _2c6=setTimeout(m.bind("callback",d),Math.floor(_2c2*1000));
d.canceller=function(){
try{
clearTimeout(_2c6);
}
catch(e){
}
};
return d;
},callLater:function(_2c7,func){
var m=MochiKit.Base;
var _2ca=m.partial.apply(m,m.extend(null,arguments,1));
return MochiKit.Async.wait(_2c7).addCallback(function(res){
return _2ca();
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
var _2cd;
if(this.locked){
_2cd="locked, "+this.waiting.length+" waiting";
}else{
_2cd="unlocked";
}
return "DeferredLock("+this.id+", "+_2cd+")";
},toString:MochiKit.Base.forwardCall("repr")};
MochiKit.Async.DeferredList=function(list,_2cf,_2d0,_2d1,_2d2){
MochiKit.Async.Deferred.apply(this,[_2d2]);
this.list=list;
var _2d3=[];
this.resultList=_2d3;
this.finishedCount=0;
this.fireOnOneCallback=_2cf;
this.fireOnOneErrback=_2d0;
this.consumeErrors=_2d1;
var cb=MochiKit.Base.bind(this._cbDeferred,this);
for(var i=0;i<list.length;i++){
var d=list[i];
_2d3.push(undefined);
d.addCallback(cb,i,true);
d.addErrback(cb,i,false);
}
if(list.length===0&&!_2cf){
this.callback(this.resultList);
}
};
MochiKit.Async.DeferredList.prototype=new MochiKit.Async.Deferred();
MochiKit.Async.DeferredList.prototype._cbDeferred=function(_2d7,_2d8,_2d9){
this.resultList[_2d7]=[_2d8,_2d9];
this.finishedCount+=1;
if(this.fired==-1){
if(_2d8&&this.fireOnOneCallback){
this.callback([_2d7,_2d9]);
}else{
if(!_2d8&&this.fireOnOneErrback){
this.errback(_2d9);
}else{
if(this.finishedCount==this.list.length){
this.callback(this.resultList);
}
}
}
}
if(!_2d8&&this.consumeErrors){
_2d9=null;
}
return _2d9;
};
MochiKit.Async.gatherResults=function(_2da){
var d=new MochiKit.Async.DeferredList(_2da,false,true,false);
d.addCallback(function(_2dc){
var ret=[];
for(var i=0;i<_2dc.length;i++){
ret.push(_2dc[i][1]);
}
return ret;
});
return d;
};
MochiKit.Async.maybeDeferred=function(func){
var self=MochiKit.Async;
var _2e1;
try{
var r=func.apply(null,MochiKit.Base.extend([],arguments,1));
if(r instanceof self.Deferred){
_2e1=r;
}else{
if(r instanceof Error){
_2e1=self.fail(r);
}else{
_2e1=self.succeed(r);
}
}
}
catch(e){
_2e1=self.fail(e);
}
return _2e1;
};
MochiKit.Async.EXPORT=["AlreadyCalledError","CancelledError","BrowserComplianceError","GenericError","XMLHttpRequestError","Deferred","succeed","fail","getXMLHttpRequest","doSimpleXMLHttpRequest","loadJSONDoc","wait","callLater","sendXMLHttpRequest","DeferredLock","DeferredList","gatherResults","maybeDeferred","doXHR"];
MochiKit.Async.EXPORT_OK=["evalJSONRequest"];
MochiKit.Async.__new__=function(){
var m=MochiKit.Base;
var ne=m.partial(m._newNamedError,this);
ne("AlreadyCalledError",function(_2e5){
this.deferred=_2e5;
});
ne("CancelledError",function(_2e6){
this.deferred=_2e6;
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
var _2ee=self._document;
var _2ef=self._window;
var rval;
try{
self._window=win;
self._document=win.document;
rval=func();
}
catch(e){
self._window=_2ef;
self._document=_2ee;
throw e;
}
self._window=_2ef;
self._document=_2ee;
return rval;
},formContents:function(elem){
var _2f2=[];
var _2f3=[];
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
var _2f8=elem.tagName.toUpperCase();
if(_2f8==="INPUT"&&(elem.type=="radio"||elem.type=="checkbox")&&!elem.checked){
return null;
}
if(_2f8==="SELECT"){
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
_2f2.push(name);
_2f3.push(v);
return null;
}
_2f2.push(name);
_2f3.push("");
return null;
}else{
var opts=elem.options;
if(!opts.length){
_2f2.push(name);
_2f3.push("");
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
_2f2.push(name);
_2f3.push(v);
}
return null;
}
}
if(_2f8==="FORM"||_2f8==="P"||_2f8==="SPAN"||_2f8==="DIV"){
return elem.childNodes;
}
_2f2.push(name);
_2f3.push(elem.value||"");
return null;
}
return elem.childNodes;
});
return [_2f2,_2f3];
},withDocument:function(doc,func){
var self=MochiKit.DOM;
var _301=self._document;
var rval;
try{
self._document=doc;
rval=func();
}
catch(e){
self._document=_301;
throw e;
}
self._document=_301;
return rval;
},registerDOMConverter:function(name,_304,wrap,_306){
MochiKit.DOM.domConverters.register(name,_304,wrap,_306);
},coerceToDOM:function(node,ctx){
var m=MochiKit.Base;
var im=MochiKit.Iter;
var self=MochiKit.DOM;
if(im){
var iter=im.iter;
var _30d=im.repeat;
var map=m.map;
}
var _30f=self.domConverters;
var _310=arguments.callee;
var _311=m.NotFound;
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
var _312=null;
try{
_312=iter(node);
}
catch(e){
}
if(_312){
return map(_310,_312,_30d(ctx));
}
}
try{
node=_30f.match(node,ctx);
continue;
}
catch(e){
if(e!=_311){
throw e;
}
}
return self._document.createTextNode(node.toString());
}
return undefined;
},isChildNode:function(node,_314){
var self=MochiKit.DOM;
if(typeof (node)=="string"){
node=self.getElement(node);
}
if(typeof (_314)=="string"){
_314=self.getElement(_314);
}
if(typeof (node)=="undefined"||node===null){
return false;
}
while(node!=null&&node!==self._document){
if(node===_314){
return true;
}
node=node.parentNode;
}
return false;
},setNodeAttribute:function(node,attr,_318){
var o={};
o[attr]=_318;
try{
return MochiKit.DOM.updateNodeAttributes(node,o);
}
catch(e){
}
return null;
},getNodeAttribute:function(node,attr){
var self=MochiKit.DOM;
var _31d=self.attributeArray.renames[attr];
var _31e=self.attributeArray.ignoreAttr[attr];
node=self.getElement(node);
try{
if(_31d){
return node[_31d];
}
var _31f=node.getAttribute(attr);
if(_31f!=_31e){
return _31f;
}
}
catch(e){
}
return null;
},removeNodeAttribute:function(node,attr){
var self=MochiKit.DOM;
var _323=self.attributeArray.renames[attr];
node=self.getElement(node);
try{
if(_323){
return node[_323];
}
return node.removeAttribute(attr);
}
catch(e){
}
return null;
},updateNodeAttributes:function(node,_325){
var elem=node;
var self=MochiKit.DOM;
if(typeof (node)=="string"){
elem=self.getElement(node);
}
if(_325){
var _328=MochiKit.Base.updatetree;
if(self.attributeArray.compliant){
for(var k in _325){
var v=_325[k];
if(typeof (v)=="object"&&typeof (elem[k])=="object"){
if(k=="style"&&MochiKit.Style){
MochiKit.Style.setStyle(elem,v);
}else{
_328(elem[k],v);
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
var _32b=self.attributeArray.renames;
for(var k in _325){
v=_325[k];
var _32c=_32b[k];
if(k=="style"&&typeof (v)=="string"){
elem.style.cssText=v;
}else{
if(typeof (_32c)=="string"){
elem[_32c]=v;
}else{
if(typeof (elem[k])=="object"&&typeof (v)=="object"){
if(k=="style"&&MochiKit.Style){
MochiKit.Style.setStyle(elem,v);
}else{
_328(elem[k],v);
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
var _330=[self.coerceToDOM(MochiKit.Base.extend(null,arguments,1),elem)];
var _331=MochiKit.Base.concat;
while(_330.length){
var n=_330.shift();
if(typeof (n)=="undefined"||n===null){
}else{
if(typeof (n.nodeType)=="number"){
elem.appendChild(n);
}else{
_330=_331(n,_330);
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
var _336=[self.coerceToDOM(MochiKit.Base.extend(null,arguments,1),elem)];
var _337=elem.parentNode;
var _338=MochiKit.Base.concat;
while(_336.length){
var n=_336.shift();
if(typeof (n)=="undefined"||n===null){
}else{
if(typeof (n.nodeType)=="number"){
_337.insertBefore(n,elem);
}else{
_336=_338(n,_336);
}
}
}
return _337;
},insertSiblingNodesAfter:function(node){
var elem=node;
var self=MochiKit.DOM;
if(typeof (node)=="string"){
elem=self.getElement(node);
}
var _33d=[self.coerceToDOM(MochiKit.Base.extend(null,arguments,1),elem)];
if(elem.nextSibling){
return self.insertSiblingNodesBefore(elem.nextSibling,_33d);
}else{
return self.appendChildNodes(elem.parentNode,_33d);
}
},replaceChildNodes:function(node){
var elem=node;
var self=MochiKit.DOM;
if(typeof (node)=="string"){
elem=self.getElement(node);
arguments[0]=elem;
}
var _341;
while((_341=elem.firstChild)){
elem.removeChild(_341);
}
if(arguments.length<2){
return elem;
}else{
return self.appendChildNodes.apply(this,arguments);
}
},createDOM:function(name,_343){
var elem;
var self=MochiKit.DOM;
var m=MochiKit.Base;
if(typeof (_343)=="string"||typeof (_343)=="number"){
var args=m.extend([name,null],arguments,1);
return arguments.callee.apply(this,args);
}
if(typeof (name)=="string"){
var _348=self._xhtml;
if(_343&&!self.attributeArray.compliant){
var _349="";
if("name" in _343){
_349+=" name=\""+self.escapeHTML(_343.name)+"\"";
}
if(name=="input"&&"type" in _343){
_349+=" type=\""+self.escapeHTML(_343.type)+"\"";
}
if(_349){
name="<"+name+_349+">";
_348=false;
}
}
var d=self._document;
if(_348&&d===document){
elem=d.createElementNS("http://www.w3.org/1999/xhtml",name);
}else{
elem=d.createElement(name);
}
}else{
elem=name;
}
if(_343){
self.updateNodeAttributes(elem,_343);
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
var _351=dest.parentNode;
if(src){
src=self.getElement(src);
_351.replaceChild(src,dest);
}else{
_351.removeChild(dest);
}
return src;
},getElement:function(id){
var self=MochiKit.DOM;
if(arguments.length==1){
return ((typeof (id)=="string")?self._document.getElementById(id):id);
}else{
return MochiKit.Base.map(self.getElement,arguments);
}
},getElementsByTagAndClassName:function(_354,_355,_356){
var self=MochiKit.DOM;
if(typeof (_354)=="undefined"||_354===null){
_354="*";
}
if(typeof (_356)=="undefined"||_356===null){
_356=self._document;
}
_356=self.getElement(_356);
if(_356==null){
return [];
}
var _358=(_356.getElementsByTagName(_354)||self._document.all);
if(typeof (_355)=="undefined"||_355===null){
return MochiKit.Base.extend(null,_358);
}
var _359=[];
for(var i=0;i<_358.length;i++){
var _35b=_358[i];
var cls=_35b.className;
if(typeof (cls)!="string"){
cls=_35b.getAttribute("class");
}
if(typeof (cls)=="string"){
var _35d=cls.split(" ");
for(var j=0;j<_35d.length;j++){
if(_35d[j]==_355){
_359.push(_35b);
break;
}
}
}
}
return _359;
},_newCallStack:function(path,once){
var rval=function(){
var _362=arguments.callee.callStack;
for(var i=0;i<_362.length;i++){
if(_362[i].apply(this,arguments)===false){
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
},addToCallStack:function(_364,path,func,once){
var self=MochiKit.DOM;
var _369=_364[path];
var _36a=_369;
if(!(typeof (_369)=="function"&&typeof (_369.callStack)=="object"&&_369.callStack!==null)){
_36a=self._newCallStack(path,once);
if(typeof (_369)=="function"){
_36a.callStack.push(_369);
}
_364[path]=_36a;
}
_36a.callStack.push(func);
},addLoadEvent:function(func){
var self=MochiKit.DOM;
self.addToCallStack(self._window,"onload",func,true);
},focusOnLoad:function(_36d){
var self=MochiKit.DOM;
self.addLoadEvent(function(){
_36d=self.getElement(_36d);
if(_36d){
_36d.focus();
}
});
},setElementClass:function(_36f,_370){
var self=MochiKit.DOM;
var obj=self.getElement(_36f);
if(self.attributeArray.compliant){
obj.setAttribute("class",_370);
}else{
obj.setAttribute("className",_370);
}
},toggleElementClass:function(_373){
var self=MochiKit.DOM;
for(var i=1;i<arguments.length;i++){
var obj=self.getElement(arguments[i]);
if(!self.addElementClass(obj,_373)){
self.removeElementClass(obj,_373);
}
}
},addElementClass:function(_377,_378){
var self=MochiKit.DOM;
var obj=self.getElement(_377);
var cls=obj.className;
if(typeof (cls)!="string"){
cls=obj.getAttribute("class");
}
if(typeof (cls)!="string"||cls.length===0){
self.setElementClass(obj,_378);
return true;
}
if(cls==_378){
return false;
}
var _37c=cls.split(" ");
for(var i=0;i<_37c.length;i++){
if(_37c[i]==_378){
return false;
}
}
self.setElementClass(obj,cls+" "+_378);
return true;
},removeElementClass:function(_37e,_37f){
var self=MochiKit.DOM;
var obj=self.getElement(_37e);
var cls=obj.className;
if(typeof (cls)!="string"){
cls=obj.getAttribute("class");
}
if(typeof (cls)!="string"||cls.length===0){
return false;
}
if(cls==_37f){
self.setElementClass(obj,"");
return true;
}
var _383=cls.split(" ");
for(var i=0;i<_383.length;i++){
if(_383[i]==_37f){
_383.splice(i,1);
self.setElementClass(obj,_383.join(" "));
return true;
}
}
return false;
},swapElementClass:function(_385,_386,_387){
var obj=MochiKit.DOM.getElement(_385);
var res=MochiKit.DOM.removeElementClass(obj,_386);
if(res){
MochiKit.DOM.addElementClass(obj,_387);
}
return res;
},hasElementClass:function(_38a,_38b){
var obj=MochiKit.DOM.getElement(_38a);
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
var _38e=cls.split(" ");
for(var i=1;i<arguments.length;i++){
var good=false;
for(var j=0;j<_38e.length;j++){
if(_38e[j]==arguments[i]){
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
var _396=[dom];
var self=MochiKit.DOM;
var _398=self.escapeHTML;
var _399=self.attributeArray;
while(_396.length){
dom=_396.pop();
if(typeof (dom)=="string"){
lst.push(dom);
}else{
if(dom.nodeType==1){
lst.push("<"+dom.tagName.toLowerCase());
var _39a=[];
var _39b=_399(dom);
for(var i=0;i<_39b.length;i++){
var a=_39b[i];
_39a.push([" ",a.name,"=\"",_398(a.value),"\""]);
}
_39a.sort();
for(i=0;i<_39a.length;i++){
var _39e=_39a[i];
for(var j=0;j<_39e.length;j++){
lst.push(_39e[j]);
}
}
if(dom.hasChildNodes()){
lst.push(">");
_396.push("</"+dom.tagName.toLowerCase()+">");
var _3a0=dom.childNodes;
for(i=_3a0.length-1;i>=0;i--){
_396.push(_3a0[i]);
}
}else{
lst.push("/>");
}
}else{
if(dom.nodeType==3){
lst.push(_398(dom.nodeValue));
}
}
}
}
return lst;
},scrapeText:function(node,_3a2){
var rval=[];
(function(node){
var cn=node.childNodes;
if(cn){
for(var i=0;i<cn.length;i++){
arguments.callee.call(this,cn[i]);
}
}
var _3a7=node.nodeValue;
if(typeof (_3a7)=="string"){
rval.push(_3a7);
}
})(MochiKit.DOM.getElement(node));
if(_3a2){
return rval;
}else{
return rval.join("");
}
},removeEmptyTextNodes:function(_3a8){
_3a8=MochiKit.DOM.getElement(_3a8);
for(var i=0;i<_3a8.childNodes.length;i++){
var node=_3a8.childNodes[i];
if(node.nodeType==3&&!/\S/.test(node.nodeValue)){
node.parentNode.removeChild(node);
}
}
},makeClipping:function(_3ab){
_3ab=MochiKit.DOM.getElement(_3ab);
var _3ac=_3ab.style.overflow;
if((MochiKit.Style.getStyle(_3ab,"overflow")||"visible")!="hidden"){
_3ab.style.overflow="hidden";
}
return _3ac;
},undoClipping:function(_3ad,_3ae){
_3ad=MochiKit.DOM.getElement(_3ad);
if(!_3ae){
return;
}
_3ad.style.overflow=_3ae;
},makePositioned:function(_3af){
_3af=MochiKit.DOM.getElement(_3af);
var pos=MochiKit.Style.getStyle(_3af,"position");
if(pos=="static"||!pos){
_3af.style.position="relative";
if(/Opera/.test(navigator.userAgent)){
_3af.style.top=0;
_3af.style.left=0;
}
}
},undoPositioned:function(_3b1){
_3b1=MochiKit.DOM.getElement(_3b1);
if(_3b1.style.position=="relative"){
_3b1.style.position=_3b1.style.top=_3b1.style.left=_3b1.style.bottom=_3b1.style.right="";
}
},getFirstElementByTagAndClassName:function(_3b2,_3b3,_3b4){
var self=MochiKit.DOM;
if(typeof (_3b2)=="undefined"||_3b2===null){
_3b2="*";
}
if(typeof (_3b4)=="undefined"||_3b4===null){
_3b4=self._document;
}
_3b4=self.getElement(_3b4);
if(_3b4==null){
return null;
}
var _3b6=(_3b4.getElementsByTagName(_3b2)||self._document.all);
if(_3b6.length<=0){
return null;
}else{
if(typeof (_3b3)=="undefined"||_3b3===null){
return _3b6[0];
}
}
for(var i=0;i<_3b6.length;i++){
var _3b8=_3b6[i];
var cls=_3b8.className;
if(typeof (cls)!="string"){
cls=_3b8.getAttribute("class");
}
if(typeof (cls)=="string"){
var _3ba=cls.split(" ");
for(var j=0;j<_3ba.length;j++){
if(_3ba[j]==_3b3){
return _3b8;
}
}
}
}
return null;
},getFirstParentByTagAndClassName:function(elem,_3bd,_3be){
var self=MochiKit.DOM;
elem=self.getElement(elem);
if(typeof (_3bd)=="undefined"||_3bd===null){
_3bd="*";
}else{
_3bd=_3bd.toUpperCase();
}
if(typeof (_3be)=="undefined"||_3be===null){
_3be=null;
}
if(elem){
elem=elem.parentNode;
}
while(elem&&elem.tagName){
var _3c0=elem.tagName.toUpperCase();
if((_3bd==="*"||_3bd==_3c0)&&(_3be===null||self.hasElementClass(elem,_3be))){
return elem;
}
elem=elem.parentNode;
}
return null;
},isParent:function(_3c1,_3c2){
var self=MochiKit.DOM;
if(typeof (_3c1)=="string"){
_3c1=self.getElement(_3c1);
}
if(typeof (_3c2)=="string"){
_3c2=self.getElement(_3c2);
}
if(_3c1==null||_3c2==null){
return false;
}else{
if(!_3c1.parentNode||_3c1==_3c2){
return false;
}else{
if(_3c1.parentNode==_3c2){
return true;
}else{
return self.isParent(_3c1.parentNode,_3c2);
}
}
}
},__new__:function(win){
var m=MochiKit.Base;
if(typeof (document)!="undefined"){
this._document=document;
var _3c6="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
this._xhtml=(document.documentElement&&document.createElementNS&&document.documentElement.namespaceURI===_3c6);
}else{
if(MochiKit.MockDOM){
this._document=MochiKit.MockDOM.document;
}
}
this._window=win;
this.domConverters=new m.AdapterRegistry();
var _3c7=this._document.createElement("span");
var _3c8;
if(_3c7&&_3c7.attributes&&_3c7.attributes.length>0){
var _3c9=m.filter;
_3c8=function(node){
return _3c9(_3c8.ignoreAttrFilter,node.attributes);
};
_3c8.ignoreAttr={};
var _3cb=_3c7.attributes;
var _3cc=_3c8.ignoreAttr;
for(var i=0;i<_3cb.length;i++){
var a=_3cb[i];
_3cc[a.name]=a.value;
}
_3c8.ignoreAttrFilter=function(a){
return (_3c8.ignoreAttr[a.name]!=a.value);
};
_3c8.compliant=false;
_3c8.renames={"class":"className","checked":"defaultChecked","usemap":"useMap","for":"htmlFor","readonly":"readOnly","colspan":"colSpan","bgcolor":"bgColor","cellspacing":"cellSpacing","cellpadding":"cellPadding"};
}else{
_3c8=function(node){
return node.attributes;
};
_3c8.compliant=true;
_3c8.ignoreAttr={};
_3c8.renames={};
}
this.attributeArray=_3c8;
var _3d1=function(_3d2,arr){
var _3d4=arr[0];
var _3d5=arr[1];
var _3d6=_3d5.split(".")[1];
var str="";
str+="if (!MochiKit."+_3d6+") { throw new Error(\"";
str+="This function has been deprecated and depends on MochiKit.";
str+=_3d6+".\");}";
str+="return "+_3d5+".apply(this, arguments);";
MochiKit[_3d2][_3d4]=new Function(str);
};
for(var i=0;i<MochiKit.DOM.DEPRECATED.length;i++){
_3d1("DOM",MochiKit.DOM.DEPRECATED[i]);
}
var _3d8=this.createDOMFunc;
this.UL=_3d8("ul");
this.OL=_3d8("ol");
this.LI=_3d8("li");
this.DL=_3d8("dl");
this.DT=_3d8("dt");
this.DD=_3d8("dd");
this.TD=_3d8("td");
this.TR=_3d8("tr");
this.TBODY=_3d8("tbody");
this.THEAD=_3d8("thead");
this.TFOOT=_3d8("tfoot");
this.TABLE=_3d8("table");
this.TH=_3d8("th");
this.INPUT=_3d8("input");
this.SPAN=_3d8("span");
this.A=_3d8("a");
this.DIV=_3d8("div");
this.IMG=_3d8("img");
this.BUTTON=_3d8("button");
this.TT=_3d8("tt");
this.PRE=_3d8("pre");
this.H1=_3d8("h1");
this.H2=_3d8("h2");
this.H3=_3d8("h3");
this.H4=_3d8("h4");
this.H5=_3d8("h5");
this.H6=_3d8("h6");
this.BR=_3d8("br");
this.HR=_3d8("hr");
this.LABEL=_3d8("label");
this.TEXTAREA=_3d8("textarea");
this.FORM=_3d8("form");
this.P=_3d8("p");
this.SELECT=_3d8("select");
this.OPTION=_3d8("option");
this.OPTGROUP=_3d8("optgroup");
this.LEGEND=_3d8("legend");
this.FIELDSET=_3d8("fieldset");
this.STRONG=_3d8("strong");
this.CANVAS=_3d8("canvas");
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
MochiKit.Selector.Selector=function(_3d9){
this.params={classNames:[],pseudoClassNames:[]};
this.expression=_3d9.toString().replace(/(^\s+|\s+$)/g,"");
this.parseExpression();
this.compileMatcher();
};
MochiKit.Selector.Selector.prototype={__class__:MochiKit.Selector.Selector,parseExpression:function(){
function abort(_3da){
throw "Parse error in selector: "+_3da;
}
if(this.expression==""){
abort("empty expression");
}
var repr=MochiKit.Base.repr;
var _3dc=this.params;
var expr=this.expression;
var _3de,_3df,_3e0,rest;
while(_3de=expr.match(/^(.*)\[([a-z0-9_:-]+?)(?:([~\|!^$*]?=)(?:"([^"]*)"|([^\]\s]*)))?\]$/i)){
_3dc.attributes=_3dc.attributes||[];
_3dc.attributes.push({name:_3de[2],operator:_3de[3],value:_3de[4]||_3de[5]||""});
expr=_3de[1];
}
if(expr=="*"){
return this.params.wildcard=true;
}
while(_3de=expr.match(/^([^a-z0-9_-])?([a-z0-9_-]+(?:\([^)]*\))?)(.*)/i)){
_3df=_3de[1];
_3e0=_3de[2];
rest=_3de[3];
switch(_3df){
case "#":
_3dc.id=_3e0;
break;
case ".":
_3dc.classNames.push(_3e0);
break;
case ":":
_3dc.pseudoClassNames.push(_3e0);
break;
case "":
case undefined:
_3dc.tagName=_3e0.toUpperCase();
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
var _3e3=this.params;
var _3e4=[];
var _3e5,i;
function childElements(_3e7){
return "MochiKit.Base.filter(function (node) { return node.nodeType == 1; }, "+_3e7+".childNodes)";
}
if(_3e3.wildcard){
_3e4.push("true");
}
if(_3e5=_3e3.id){
_3e4.push("element.id == "+repr(_3e5));
}
if(_3e5=_3e3.tagName){
_3e4.push("element.tagName.toUpperCase() == "+repr(_3e5));
}
if((_3e5=_3e3.classNames).length>0){
for(i=0;i<_3e5.length;i++){
_3e4.push("MochiKit.DOM.hasElementClass(element, "+repr(_3e5[i])+")");
}
}
if((_3e5=_3e3.pseudoClassNames).length>0){
for(i=0;i<_3e5.length;i++){
var _3e8=_3e5[i].match(/^([^(]+)(?:\((.*)\))?$/);
var _3e9=_3e8[1];
var _3ea=_3e8[2];
switch(_3e9){
case "root":
_3e4.push("element.nodeType == 9 || element === element.ownerDocument.documentElement");
break;
case "nth-child":
case "nth-last-child":
case "nth-of-type":
case "nth-last-of-type":
_3e8=_3ea.match(/^((?:(\d+)n\+)?(\d+)|odd|even)$/);
if(!_3e8){
throw "Invalid argument to pseudo element nth-child: "+_3ea;
}
var a,b;
if(_3e8[0]=="odd"){
a=2;
b=1;
}else{
if(_3e8[0]=="even"){
a=2;
b=0;
}else{
a=_3e8[2]&&parseInt(_3e8)||null;
b=parseInt(_3e8[3]);
}
}
_3e4.push("this.nthChild(element,"+a+","+b+","+!!_3e9.match("^nth-last")+","+!!_3e9.match("of-type$")+")");
break;
case "first-child":
_3e4.push("this.nthChild(element, null, 1)");
break;
case "last-child":
_3e4.push("this.nthChild(element, null, 1, true)");
break;
case "first-of-type":
_3e4.push("this.nthChild(element, null, 1, false, true)");
break;
case "last-of-type":
_3e4.push("this.nthChild(element, null, 1, true, true)");
break;
case "only-child":
_3e4.push(childElements("element.parentNode")+".length == 1");
break;
case "only-of-type":
_3e4.push("MochiKit.Base.filter(function (node) { return node.tagName == element.tagName; }, "+childElements("element.parentNode")+").length == 1");
break;
case "empty":
_3e4.push("element.childNodes.length == 0");
break;
case "enabled":
_3e4.push("(this.isUIElement(element) && element.disabled === false)");
break;
case "disabled":
_3e4.push("(this.isUIElement(element) && element.disabled === true)");
break;
case "checked":
_3e4.push("(this.isUIElement(element) && element.checked === true)");
break;
case "not":
var _3ed=new MochiKit.Selector.Selector(_3ea);
_3e4.push("!( "+_3ed.buildMatchExpression()+")");
break;
}
}
}
if(_3e5=_3e3.attributes){
MochiKit.Base.map(function(_3ee){
var _3ef="MochiKit.DOM.getNodeAttribute(element, "+repr(_3ee.name)+")";
var _3f0=function(_3f1){
return _3ef+".split("+repr(_3f1)+")";
};
_3e4.push(_3ef+" != null");
switch(_3ee.operator){
case "=":
_3e4.push(_3ef+" == "+repr(_3ee.value));
break;
case "~=":
_3e4.push("MochiKit.Base.findValue("+_3f0(" ")+", "+repr(_3ee.value)+") > -1");
break;
case "^=":
_3e4.push(_3ef+".substring(0, "+_3ee.value.length+") == "+repr(_3ee.value));
break;
case "$=":
_3e4.push(_3ef+".substring("+_3ef+".length - "+_3ee.value.length+") == "+repr(_3ee.value));
break;
case "*=":
_3e4.push(_3ef+".match("+repr(_3ee.value)+")");
break;
case "|=":
_3e4.push(_3f0("-")+"[0].toUpperCase() == "+repr(_3ee.value.toUpperCase()));
break;
case "!=":
_3e4.push(_3ef+" != "+repr(_3ee.value));
break;
case "":
case undefined:
break;
default:
throw "Unknown operator "+_3ee.operator+" in selector";
}
},_3e5);
}
return _3e4.join(" && ");
},compileMatcher:function(){
var code="return (!element.tagName) ? false : "+this.buildMatchExpression()+";";
this.match=new Function("element",code);
},nthChild:function(_3f3,a,b,_3f6,_3f7){
var _3f8=MochiKit.Base.filter(function(node){
return node.nodeType==1;
},_3f3.parentNode.childNodes);
if(_3f7){
_3f8=MochiKit.Base.filter(function(node){
return node.tagName==_3f3.tagName;
},_3f8);
}
if(_3f6){
_3f8=MochiKit.Iter.reversed(_3f8);
}
if(a){
var _3fb=MochiKit.Base.findIdentical(_3f8,_3f3);
return ((_3fb+1-b)/a)%1==0;
}else{
return b==MochiKit.Base.findIdentical(_3f8,_3f3)+1;
}
},isUIElement:function(_3fc){
return MochiKit.Base.findValue(["input","button","select","option","textarea","object"],_3fc.tagName.toLowerCase())>-1;
},findElements:function(_3fd,axis){
var _3ff;
if(axis==undefined){
axis="";
}
function inScope(_400,_401){
if(axis==""){
return MochiKit.DOM.isChildNode(_400,_401);
}else{
if(axis==">"){
return _400.parentNode==_401;
}else{
if(axis=="+"){
return _400==nextSiblingElement(_401);
}else{
if(axis=="~"){
var _402=_401;
while(_402=nextSiblingElement(_402)){
if(_400==_402){
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
if(_3ff=MochiKit.DOM.getElement(this.params.id)){
if(this.match(_3ff)){
if(!_3fd||inScope(_3ff,_3fd)){
return [_3ff];
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
_3fd=(_3fd||MochiKit.DOM.currentDocument()).getElementsByTagName(this.params.tagName||"*");
}else{
if(axis==">"){
if(!_3fd){
throw "> combinator not allowed without preceeding expression";
}
_3fd=MochiKit.Base.filter(function(node){
return node.nodeType==1;
},_3fd.childNodes);
}else{
if(axis=="+"){
if(!_3fd){
throw "+ combinator not allowed without preceeding expression";
}
_3fd=nextSiblingElement(_3fd)&&[nextSiblingElement(_3fd)];
}else{
if(axis=="~"){
if(!_3fd){
throw "~ combinator not allowed without preceeding expression";
}
var _405=[];
while(nextSiblingElement(_3fd)){
_3fd=nextSiblingElement(_3fd);
_405.push(_3fd);
}
_3fd=_405;
}
}
}
}
if(!_3fd){
return [];
}
var _406=MochiKit.Base.filter(MochiKit.Base.bind(function(_407){
return this.match(_407);
},this),_3fd);
return _406;
},repr:function(){
return "Selector("+this.expression+")";
},toString:MochiKit.Base.forwardCall("repr")};
MochiKit.Base.update(MochiKit.Selector,{findChildElements:function(_408,_409){
return MochiKit.Base.flattenArray(MochiKit.Base.map(function(_40a){
var _40b="";
return MochiKit.Iter.reduce(function(_40c,expr){
if(match=expr.match(/^[>+~]$/)){
_40b=match[0];
return _40c;
}else{
var _40e=new MochiKit.Selector.Selector(expr);
var _40f=MochiKit.Iter.reduce(function(_410,_411){
return MochiKit.Base.extend(_410,_40e.findElements(_411||_408,_40b));
},_40c,[]);
_40b="";
return _40f;
}
},_40a.replace(/(^\s+|\s+$)/g,"").split(/\s+/),[null]);
},_409));
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
MochiKit.Base.update(MochiKit.Style,{getStyle:function(elem,_41a){
var dom=MochiKit.DOM;
var d=dom._document;
elem=dom.getElement(elem);
_41a=MochiKit.Base.camelize(_41a);
if(!elem||elem==d){
return undefined;
}
if(_41a=="opacity"&&typeof (elem.filters)!="undefined"){
var _41d=(MochiKit.Style.getStyle(elem,"filter")||"").match(/alpha\(opacity=(.*)\)/);
if(_41d&&_41d[1]){
return parseFloat(_41d[1])/100;
}
return 1;
}
if(_41a=="float"||_41a=="cssFloat"||_41a=="styleFloat"){
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
var _41e=elem.style?elem.style[_41a]:null;
if(!_41e){
if(d.defaultView&&d.defaultView.getComputedStyle){
var css=d.defaultView.getComputedStyle(elem,null);
_41a=_41a.replace(/([A-Z])/g,"-$1").toLowerCase();
_41e=css?css.getPropertyValue(_41a):null;
}else{
if(elem.currentStyle){
_41e=elem.currentStyle[_41a];
if(/^\d/.test(_41e)&&!/px$/.test(_41e)&&_41a!="fontWeight"){
var left=elem.style.left;
var _421=elem.runtimeStyle.left;
elem.runtimeStyle.left=elem.currentStyle.left;
elem.style.left=_41e||0;
_41e=elem.style.pixelLeft+"px";
elem.style.left=left;
elem.runtimeStyle.left=_421;
}
}
}
}
if(_41a=="opacity"){
_41e=parseFloat(_41e);
}
if(/Opera/.test(navigator.userAgent)&&(MochiKit.Base.findValue(["left","top","right","bottom"],_41a)!=-1)){
if(MochiKit.Style.getStyle(elem,"position")=="static"){
_41e="auto";
}
}
return _41e=="auto"?null:_41e;
},setStyle:function(elem,_423){
elem=MochiKit.DOM.getElement(elem);
for(var name in _423){
switch(name){
case "opacity":
MochiKit.Style.setOpacity(elem,_423[name]);
break;
case "float":
case "cssFloat":
case "styleFloat":
if(typeof (elem.style["float"])!="undefined"){
elem.style["float"]=_423[name];
}else{
if(typeof (elem.style.cssFloat)!="undefined"){
elem.style.cssFloat=_423[name];
}else{
elem.style.styleFloat=_423[name];
}
}
break;
default:
elem.style[MochiKit.Base.camelize(name)]=_423[name];
}
}
},setOpacity:function(elem,o){
elem=MochiKit.DOM.getElement(elem);
var self=MochiKit.Style;
if(o==1){
var _428=/Gecko/.test(navigator.userAgent)&&!(/Konqueror|AppleWebKit|KHTML/.test(navigator.userAgent));
elem.style["opacity"]=_428?0.999999:1;
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
},getElementPosition:function(elem,_42a){
var self=MochiKit.Style;
var dom=MochiKit.DOM;
elem=dom.getElement(elem);
if(!elem||(!(elem.x&&elem.y)&&(!elem.parentNode===null||self.getStyle(elem,"display")=="none"))){
return undefined;
}
var c=new self.Coordinates(0,0);
var box=null;
var _42f=null;
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
_42f=elem.offsetParent;
if(_42f!=elem){
while(_42f){
c.x+=_42f.offsetLeft;
c.y+=_42f.offsetTop;
_42f=_42f.offsetParent;
}
}
var ua=navigator.userAgent.toLowerCase();
if((typeof (opera)!="undefined"&&parseFloat(opera.version())<9)||(ua.indexOf("AppleWebKit")!=-1&&self.getStyle(elem,"position")=="absolute")){
c.x-=b.offsetLeft;
c.y-=b.offsetTop;
}
if(elem.parentNode){
_42f=elem.parentNode;
}else{
_42f=null;
}
while(_42f){
var _434=_42f.tagName.toUpperCase();
if(_434==="BODY"||_434==="HTML"){
break;
}
var disp=self.getStyle(_42f,"display");
if(disp.search(/^inline|table-row.*$/i)){
c.x-=_42f.scrollLeft;
c.y-=_42f.scrollTop;
}
if(_42f.parentNode){
_42f=_42f.parentNode;
}else{
_42f=null;
}
}
}
}
}
if(typeof (_42a)!="undefined"){
_42a=arguments.callee(_42a);
if(_42a){
c.x-=(_42a.x||0);
c.y-=(_42a.y||0);
}
}
return c;
},setElementPosition:function(elem,_437,_438){
elem=MochiKit.DOM.getElement(elem);
if(typeof (_438)=="undefined"){
_438="px";
}
var _439={};
var _43a=MochiKit.Base.isUndefinedOrNull;
if(!_43a(_437.x)){
_439["left"]=_437.x+_438;
}
if(!_43a(_437.y)){
_439["top"]=_437.y+_438;
}
MochiKit.DOM.updateNodeAttributes(elem,{"style":_439});
},getElementDimensions:function(elem,_43c){
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
var _441=s.visibility;
var _442=s.position;
var _443=s.display;
s.visibility="hidden";
s.position="absolute";
s.display="";
var _444=elem.offsetWidth;
var _445=elem.offsetHeight;
s.display=_443;
s.position=_442;
s.visibility=_441;
}else{
_444=elem.offsetWidth||0;
_445=elem.offsetHeight||0;
}
if(_43c){
var _446="colSpan" in elem&&"rowSpan" in elem;
var _447=(_446&&elem.parentNode&&self.getStyle(elem.parentNode,"borderCollapse")=="collapse");
if(_447){
if(/MSIE/.test(navigator.userAgent)){
var _448=elem.previousSibling?0.5:1;
var _449=elem.nextSibling?0.5:1;
}else{
var _448=0.5;
var _449=0.5;
}
}else{
var _448=1;
var _449=1;
}
_444-=Math.round((parseFloat(self.getStyle(elem,"paddingLeft"))||0)+(parseFloat(self.getStyle(elem,"paddingRight"))||0)+_448*(parseFloat(self.getStyle(elem,"borderLeftWidth"))||0)+_449*(parseFloat(self.getStyle(elem,"borderRightWidth"))||0));
if(_446){
if(/Gecko|Opera/.test(navigator.userAgent)&&!/Konqueror|AppleWebKit|KHTML/.test(navigator.userAgent)){
var _44a=0;
}else{
if(/MSIE/.test(navigator.userAgent)){
var _44a=1;
}else{
var _44a=_447?0.5:1;
}
}
}else{
var _44a=1;
}
_445-=Math.round((parseFloat(self.getStyle(elem,"paddingTop"))||0)+(parseFloat(self.getStyle(elem,"paddingBottom"))||0)+_44a*((parseFloat(self.getStyle(elem,"borderTopWidth"))||0)+(parseFloat(self.getStyle(elem,"borderBottomWidth"))||0)));
}
return new self.Dimensions(_444,_445);
},setElementDimensions:function(elem,_44c,_44d){
elem=MochiKit.DOM.getElement(elem);
if(typeof (_44d)=="undefined"){
_44d="px";
}
var _44e={};
var _44f=MochiKit.Base.isUndefinedOrNull;
if(!_44f(_44c.w)){
_44e["width"]=_44c.w+_44d;
}
if(!_44f(_44c.h)){
_44e["height"]=_44c.h+_44d;
}
MochiKit.DOM.updateNodeAttributes(elem,{"style":_44e});
},setDisplayForElement:function(_450,_451){
var _452=MochiKit.Base.extend(null,arguments,1);
var _453=MochiKit.DOM.getElement;
for(var i=0;i<_452.length;i++){
_451=_453(_452[i]);
if(_451){
_451.style.display=_450;
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
MochiKit.LoggingPane.createLoggingPane=function(_45d){
var m=MochiKit.LoggingPane;
_45d=!(!_45d);
if(m._loggingPane&&m._loggingPane.inline!=_45d){
m._loggingPane.closePane();
m._loggingPane=null;
}
if(!m._loggingPane||m._loggingPane.closed){
m._loggingPane=new m.LoggingPane(_45d,MochiKit.Logging.logger);
}
return m._loggingPane;
};
MochiKit.LoggingPane.LoggingPane=function(_45f,_460){
if(typeof (_460)=="undefined"||_460===null){
_460=MochiKit.Logging.logger;
}
this.logger=_460;
var _461=MochiKit.Base.update;
var _462=MochiKit.Base.updatetree;
var bind=MochiKit.Base.bind;
var _464=MochiKit.Base.clone;
var win=window;
var uid="_MochiKit_LoggingPane";
if(typeof (MochiKit.DOM)!="undefined"){
win=MochiKit.DOM.currentWindow();
}
if(!_45f){
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
var _46b=doc.getElementById(uid);
var _46c=!!_46b;
if(_46b&&typeof (_46b.loggingPane)!="undefined"){
_46b.loggingPane.logger=this.logger;
_46b.loggingPane.buildAndApplyFilter();
return _46b.loggingPane;
}
if(_46c){
var _46d;
while((_46d=_46b.firstChild)){
_46b.removeChild(_46d);
}
}else{
_46b=doc.createElement("div");
_46b.id=uid;
}
_46b.loggingPane=this;
var _46e=doc.createElement("input");
var _46f=doc.createElement("input");
var _470=doc.createElement("button");
var _471=doc.createElement("button");
var _472=doc.createElement("button");
var _473=doc.createElement("button");
var _474=doc.createElement("div");
var _475=doc.createElement("div");
var _476=uid+"_Listener";
this.colorTable=_464(this.colorTable);
var _477=[];
var _478=null;
var _479=function(msg){
var _47b=msg.level;
if(typeof (_47b)=="number"){
_47b=MochiKit.Logging.LogLevel[_47b];
}
return _47b;
};
var _47c=function(msg){
return msg.info.join(" ");
};
var _47e=bind(function(msg){
var _480=_479(msg);
var text=_47c(msg);
var c=this.colorTable[_480];
var p=doc.createElement("span");
p.className="MochiKit-LogMessage MochiKit-LogLevel-"+_480;
p.style.cssText="margin: 0px; white-space: -moz-pre-wrap; white-space: -o-pre-wrap; white-space: pre-wrap; white-space: pre-line; word-wrap: break-word; wrap-option: emergency; color: "+c;
p.appendChild(doc.createTextNode(_480+": "+text));
_475.appendChild(p);
_475.appendChild(doc.createElement("br"));
if(_474.offsetHeight>_474.scrollHeight){
_474.scrollTop=0;
}else{
_474.scrollTop=_474.scrollHeight;
}
},this);
var _484=function(msg){
_477[_477.length]=msg;
_47e(msg);
};
var _486=function(){
var _487,_488;
try{
_487=new RegExp(_46e.value);
_488=new RegExp(_46f.value);
}
catch(e){
logDebug("Error in filter regex: "+e.message);
return null;
}
return function(msg){
return (_487.test(_479(msg))&&_488.test(_47c(msg)));
};
};
var _48a=function(){
while(_475.firstChild){
_475.removeChild(_475.firstChild);
}
};
var _48b=function(){
_477=[];
_48a();
};
var _48c=bind(function(){
if(this.closed){
return;
}
this.closed=true;
if(MochiKit.LoggingPane._loggingPane==this){
MochiKit.LoggingPane._loggingPane=null;
}
this.logger.removeListener(_476);
try{
try{
_46b.loggingPane=null;
}
catch(e){
logFatal("Bookmarklet was closed incorrectly.");
}
if(_45f){
_46b.parentNode.removeChild(_46b);
}else{
this.win.close();
}
}
catch(e){
}
},this);
var _48d=function(){
_48a();
for(var i=0;i<_477.length;i++){
var msg=_477[i];
if(_478===null||_478(msg)){
_47e(msg);
}
}
};
this.buildAndApplyFilter=function(){
_478=_486();
_48d();
this.logger.removeListener(_476);
this.logger.addListener(_476,_478,_484);
};
var _490=bind(function(){
_477=this.logger.getMessages();
_48d();
},this);
var _491=bind(function(_492){
_492=_492||window.event;
key=_492.which||_492.keyCode;
if(key==13){
this.buildAndApplyFilter();
}
},this);
var _493="display: block; z-index: 1000; left: 0px; bottom: 0px; position: fixed; width: 100%; background-color: white; font: "+this.logFont;
if(_45f){
_493+="; height: 10em; border-top: 2px solid black";
}else{
_493+="; height: 100%;";
}
_46b.style.cssText=_493;
if(!_46c){
doc.body.appendChild(_46b);
}
_493={"cssText":"width: 33%; display: inline; font: "+this.logFont};
_462(_46e,{"value":"FATAL|ERROR|WARNING|INFO|DEBUG","onkeypress":_491,"style":_493});
_46b.appendChild(_46e);
_462(_46f,{"value":".*","onkeypress":_491,"style":_493});
_46b.appendChild(_46f);
_493="width: 8%; display:inline; font: "+this.logFont;
_470.appendChild(doc.createTextNode("Filter"));
_470.onclick=bind("buildAndApplyFilter",this);
_470.style.cssText=_493;
_46b.appendChild(_470);
_471.appendChild(doc.createTextNode("Load"));
_471.onclick=_490;
_471.style.cssText=_493;
_46b.appendChild(_471);
_472.appendChild(doc.createTextNode("Clear"));
_472.onclick=_48b;
_472.style.cssText=_493;
_46b.appendChild(_472);
_473.appendChild(doc.createTextNode("Close"));
_473.onclick=_48c;
_473.style.cssText=_493;
_46b.appendChild(_473);
_474.style.cssText="overflow: auto; width: 100%";
_475.style.cssText="width: 100%; height: "+(_45f?"8em":"100%");
_474.appendChild(_475);
_46b.appendChild(_474);
this.buildAndApplyFilter();
_490();
if(_45f){
this.win=undefined;
}else{
this.win=win;
}
this.inline=_45f;
this.closePane=_48c;
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
MochiKit.Color.Color=function(red,_495,blue,_497){
if(typeof (_497)=="undefined"||_497===null){
_497=1;
}
this.rgb={r:red,g:_495,b:blue,a:_497};
};
MochiKit.Color.Color.prototype={__class__:MochiKit.Color.Color,colorWithAlpha:function(_498){
var rgb=this.rgb;
var m=MochiKit.Color;
return m.Color.fromRGB(rgb.r,rgb.g,rgb.b,_498);
},colorWithHue:function(hue){
var hsl=this.asHSL();
hsl.h=hue;
var m=MochiKit.Color;
return m.Color.fromHSL(hsl);
},colorWithSaturation:function(_49e){
var hsl=this.asHSL();
hsl.s=_49e;
var m=MochiKit.Color;
return m.Color.fromHSL(hsl);
},colorWithLightness:function(_4a1){
var hsl=this.asHSL();
hsl.l=_4a1;
var m=MochiKit.Color;
return m.Color.fromHSL(hsl);
},darkerColorWithLevel:function(_4a4){
var hsl=this.asHSL();
hsl.l=Math.max(hsl.l-_4a4,0);
var m=MochiKit.Color;
return m.Color.fromHSL(hsl);
},lighterColorWithLevel:function(_4a7){
var hsl=this.asHSL();
hsl.l=Math.min(hsl.l+_4a7,1);
var m=MochiKit.Color;
return m.Color.fromHSL(hsl);
},blendedColor:function(_4aa,_4ab){
if(typeof (_4ab)=="undefined"||_4ab===null){
_4ab=0.5;
}
var sf=1-_4ab;
var s=this.rgb;
var d=_4aa.rgb;
var df=_4ab;
return MochiKit.Color.Color.fromRGB((s.r*sf)+(d.r*df),(s.g*sf)+(d.g*df),(s.b*sf)+(d.b*df),(s.a*sf)+(d.a*df));
},compareRGB:function(_4b0){
var a=this.asRGB();
var b=_4b0.asRGB();
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
MochiKit.Base.update(MochiKit.Color.Color,{fromRGB:function(red,_4c7,blue,_4c9){
var _4ca=MochiKit.Color.Color;
if(arguments.length==1){
var rgb=red;
red=rgb.r;
_4c7=rgb.g;
blue=rgb.b;
if(typeof (rgb.a)=="undefined"){
_4c9=undefined;
}else{
_4c9=rgb.a;
}
}
return new _4ca(red,_4c7,blue,_4c9);
},fromHSL:function(hue,_4cd,_4ce,_4cf){
var m=MochiKit.Color;
return m.Color.fromRGB(m.hslToRGB.apply(m,arguments));
},fromHSV:function(hue,_4d2,_4d3,_4d4){
var m=MochiKit.Color;
return m.Color.fromRGB(m.hsvToRGB.apply(m,arguments));
},fromName:function(name){
var _4d7=MochiKit.Color.Color;
if(name.charAt(0)=="\""){
name=name.substr(1,name.length-2);
}
var _4d8=_4d7._namedColors[name.toLowerCase()];
if(typeof (_4d8)=="string"){
return _4d7.fromHexString(_4d8);
}else{
if(name=="transparent"){
return _4d7.transparentColor();
}
}
return null;
},fromString:function(_4d9){
var self=MochiKit.Color.Color;
var _4db=_4d9.substr(0,3);
if(_4db=="rgb"){
return self.fromRGBString(_4d9);
}else{
if(_4db=="hsl"){
return self.fromHSLString(_4d9);
}else{
if(_4d9.charAt(0)=="#"){
return self.fromHexString(_4d9);
}
}
}
return self.fromName(_4d9);
},fromHexString:function(_4dc){
if(_4dc.charAt(0)=="#"){
_4dc=_4dc.substring(1);
}
var _4dd=[];
var i,hex;
if(_4dc.length==3){
for(i=0;i<3;i++){
hex=_4dc.substr(i,1);
_4dd.push(parseInt(hex+hex,16)/255);
}
}else{
for(i=0;i<6;i+=2){
hex=_4dc.substr(i,2);
_4dd.push(parseInt(hex,16)/255);
}
}
var _4e0=MochiKit.Color.Color;
return _4e0.fromRGB.apply(_4e0,_4dd);
},_fromColorString:function(pre,_4e2,_4e3,_4e4){
if(_4e4.indexOf(pre)===0){
_4e4=_4e4.substring(_4e4.indexOf("(",3)+1,_4e4.length-1);
}
var _4e5=_4e4.split(/\s*,\s*/);
var _4e6=[];
for(var i=0;i<_4e5.length;i++){
var c=_4e5[i];
var val;
var _4ea=c.substring(c.length-3);
if(c.charAt(c.length-1)=="%"){
val=0.01*parseFloat(c.substring(0,c.length-1));
}else{
if(_4ea=="deg"){
val=parseFloat(c)/360;
}else{
if(_4ea=="rad"){
val=parseFloat(c)/(Math.PI*2);
}else{
val=_4e3[i]*parseFloat(c);
}
}
}
_4e6.push(val);
}
return this[_4e2].apply(this,_4e6);
},fromComputedStyle:function(elem,_4ec){
var d=MochiKit.DOM;
var cls=MochiKit.Color.Color;
for(elem=d.getElement(elem);elem;elem=elem.parentNode){
var _4ef=MochiKit.Style.getStyle.apply(d,arguments);
if(!_4ef){
continue;
}
var _4f0=cls.fromString(_4ef);
if(!_4f0){
break;
}
if(_4f0.asRGB().a>0){
return _4f0;
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
MochiKit.Base.update(MochiKit.Color,{clampColorComponent:function(v,_4f6){
v*=_4f6;
if(v<0){
return 0;
}else{
if(v>_4f6){
return _4f6;
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
},hsvToRGB:function(hue,_4fc,_4fd,_4fe){
if(arguments.length==1){
var hsv=hue;
hue=hsv.h;
_4fc=hsv.s;
_4fd=hsv.v;
_4fe=hsv.a;
}
var red;
var _501;
var blue;
if(_4fc===0){
red=_4fd;
_501=_4fd;
blue=_4fd;
}else{
var i=Math.floor(hue*6);
var f=(hue*6)-i;
var p=_4fd*(1-_4fc);
var q=_4fd*(1-(_4fc*f));
var t=_4fd*(1-(_4fc*(1-f)));
switch(i){
case 1:
red=q;
_501=_4fd;
blue=p;
break;
case 2:
red=p;
_501=_4fd;
blue=t;
break;
case 3:
red=p;
_501=q;
blue=_4fd;
break;
case 4:
red=t;
_501=p;
blue=_4fd;
break;
case 5:
red=_4fd;
_501=p;
blue=q;
break;
case 6:
case 0:
red=_4fd;
_501=t;
blue=p;
break;
}
}
return {r:red,g:_501,b:blue,a:_4fe};
},hslToRGB:function(hue,_509,_50a,_50b){
if(arguments.length==1){
var hsl=hue;
hue=hsl.h;
_509=hsl.s;
_50a=hsl.l;
_50b=hsl.a;
}
var red;
var _50e;
var blue;
if(_509===0){
red=_50a;
_50e=_50a;
blue=_50a;
}else{
var m2;
if(_50a<=0.5){
m2=_50a*(1+_509);
}else{
m2=_50a+_509-(_50a*_509);
}
var m1=(2*_50a)-m2;
var f=MochiKit.Color._hslValue;
var h6=hue*6;
red=f(m1,m2,h6+2);
_50e=f(m1,m2,h6);
blue=f(m1,m2,h6-2);
}
return {r:red,g:_50e,b:blue,a:_50b};
},rgbToHSV:function(red,_515,blue,_517){
if(arguments.length==1){
var rgb=red;
red=rgb.r;
_515=rgb.g;
blue=rgb.b;
_517=rgb.a;
}
var max=Math.max(Math.max(red,_515),blue);
var min=Math.min(Math.min(red,_515),blue);
var hue;
var _51c;
var _51d=max;
if(min==max){
hue=0;
_51c=0;
}else{
var _51e=(max-min);
_51c=_51e/max;
if(red==max){
hue=(_515-blue)/_51e;
}else{
if(_515==max){
hue=2+((blue-red)/_51e);
}else{
hue=4+((red-_515)/_51e);
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
return {h:hue,s:_51c,v:_51d,a:_517};
},rgbToHSL:function(red,_520,blue,_522){
if(arguments.length==1){
var rgb=red;
red=rgb.r;
_520=rgb.g;
blue=rgb.b;
_522=rgb.a;
}
var max=Math.max(red,Math.max(_520,blue));
var min=Math.min(red,Math.min(_520,blue));
var hue;
var _527;
var _528=(max+min)/2;
var _529=max-min;
if(_529===0){
hue=0;
_527=0;
}else{
if(_528<=0.5){
_527=_529/(max+min);
}else{
_527=_529/(2-max-min);
}
if(red==max){
hue=(_520-blue)/_529;
}else{
if(_520==max){
hue=2+((blue-red)/_529);
}else{
hue=4+((red-_520)/_529);
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
return {h:hue,s:_527,l:_528,a:_522};
},toColorPart:function(num){
num=Math.round(num);
var _52b=num.toString(16);
if(num<16){
return "0"+_52b;
}
return _52b;
},__new__:function(){
var m=MochiKit.Base;
this.Color.fromRGBString=m.bind(this.Color._fromColorString,this.Color,"rgb","fromRGB",[1/255,1/255,1/255,1]);
this.Color.fromHSLString=m.bind(this.Color._fromColorString,this.Color,"hsl","fromHSL",[1/360,0.01,0.01,1]);
var _52d=1/3;
var _52e={black:[0,0,0],blue:[0,0,1],brown:[0.6,0.4,0.2],cyan:[0,1,1],darkGray:[_52d,_52d,_52d],gray:[0.5,0.5,0.5],green:[0,1,0],lightGray:[2*_52d,2*_52d,2*_52d],magenta:[1,0,1],orange:[1,0.5,0],purple:[0.5,0,0.5],red:[1,0,0],transparent:[0,0,0,0],white:[1,1,1],yellow:[1,1,0]};
var _52f=function(name,r,g,b,a){
var rval=this.fromRGB(r,g,b,a);
this[name]=function(){
return rval;
};
return rval;
};
for(var k in _52e){
var name=k+"Color";
var _538=m.concat([_52f,this.Color,name],_52e[k]);
this.Color[name]=m.bind.apply(null,_538);
}
var _539=function(){
for(var i=0;i<arguments.length;i++){
if(!(arguments[i] instanceof MochiKit.Color.Color)){
return false;
}
}
return true;
};
var _53b=function(a,b){
return a.compareRGB(b);
};
m.nameFunctions(this);
m.registerComparator(this.Color.NAME,_539,_53b);
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
var _54a=MochiKit.Signal._specialMacKeys;
for(i=63236;i<=63242;i++){
_54a[i]="KEY_F"+(i-63236+1);
}
})();
MochiKit.Signal._specialKeys={8:"KEY_BACKSPACE",9:"KEY_TAB",12:"KEY_NUM_PAD_CLEAR",13:"KEY_ENTER",16:"KEY_SHIFT",17:"KEY_CTRL",18:"KEY_ALT",19:"KEY_PAUSE",20:"KEY_CAPS_LOCK",27:"KEY_ESCAPE",32:"KEY_SPACEBAR",33:"KEY_PAGE_UP",34:"KEY_PAGE_DOWN",35:"KEY_END",36:"KEY_HOME",37:"KEY_ARROW_LEFT",38:"KEY_ARROW_UP",39:"KEY_ARROW_RIGHT",40:"KEY_ARROW_DOWN",44:"KEY_PRINT_SCREEN",45:"KEY_INSERT",46:"KEY_DELETE",59:"KEY_SEMICOLON",91:"KEY_WINDOWS_LEFT",92:"KEY_WINDOWS_RIGHT",93:"KEY_SELECT",106:"KEY_NUM_PAD_ASTERISK",107:"KEY_NUM_PAD_PLUS_SIGN",109:"KEY_NUM_PAD_HYPHEN-MINUS",110:"KEY_NUM_PAD_FULL_STOP",111:"KEY_NUM_PAD_SOLIDUS",144:"KEY_NUM_LOCK",145:"KEY_SCROLL_LOCK",186:"KEY_SEMICOLON",187:"KEY_EQUALS_SIGN",188:"KEY_COMMA",189:"KEY_HYPHEN-MINUS",190:"KEY_FULL_STOP",191:"KEY_SOLIDUS",192:"KEY_GRAVE_ACCENT",219:"KEY_LEFT_SQUARE_BRACKET",220:"KEY_REVERSE_SOLIDUS",221:"KEY_RIGHT_SQUARE_BRACKET",222:"KEY_APOSTROPHE"};
(function(){
var _54b=MochiKit.Signal._specialKeys;
for(var i=48;i<=57;i++){
_54b[i]="KEY_"+(i-48);
}
for(i=65;i<=90;i++){
_54b[i]="KEY_"+String.fromCharCode(i);
}
for(i=96;i<=105;i++){
_54b[i]="KEY_NUM_PAD_"+(i-96);
}
for(i=112;i<=123;i++){
_54b[i]="KEY_F"+(i-112+1);
}
})();
MochiKit.Signal.Ident=function(_54d){
this.source=_54d.source;
this.signal=_54d.signal;
this.listener=_54d.listener;
this.isDOM=_54d.isDOM;
this.objOrFunc=_54d.objOrFunc;
this.funcOrStr=_54d.funcOrStr;
this.connected=_54d.connected;
};
MochiKit.Signal.Ident.prototype={};
MochiKit.Base.update(MochiKit.Signal,{__repr__:function(){
return "["+this.NAME+" "+this.VERSION+"]";
},toString:function(){
return this.__repr__();
},_unloadCache:function(){
var self=MochiKit.Signal;
var _54f=self._observers;
for(var i=0;i<_54f.length;i++){
if(_54f[i].signal!=="onload"&&_54f[i].signal!=="onunload"){
self._disconnect(_54f[i]);
}
}
},_listener:function(src,sig,func,obj,_555){
var self=MochiKit.Signal;
var E=self.Event;
if(!_555){
if(typeof (func.im_self)=="undefined"){
return MochiKit.Base.bind(func,obj);
}else{
return func;
}
}
obj=obj||src;
if(typeof (func)=="string"){
if(sig==="onload"||sig==="onunload"){
return function(_558){
obj[func].apply(obj,[new E(src,_558)]);
var _559=new MochiKit.Signal.Ident({source:src,signal:sig,objOrFunc:obj,funcOrStr:func});
MochiKit.Signal._disconnect(_559);
};
}else{
return function(_55a){
obj[func].apply(obj,[new E(src,_55a)]);
};
}
}else{
if(sig==="onload"||sig==="onunload"){
return function(_55b){
func.apply(obj,[new E(src,_55b)]);
var _55c=new MochiKit.Signal.Ident({source:src,signal:sig,objOrFunc:func});
MochiKit.Signal._disconnect(_55c);
};
}else{
return function(_55d){
func.apply(obj,[new E(src,_55d)]);
};
}
}
},_browserAlreadyHasMouseEnterAndLeave:function(){
return /MSIE/.test(navigator.userAgent);
},_browserLacksMouseWheelEvent:function(){
return /Gecko\//.test(navigator.userAgent);
},_mouseEnterListener:function(src,sig,func,obj){
var E=MochiKit.Signal.Event;
return function(_563){
var e=new E(src,_563);
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
},_getDestPair:function(_565,_566){
var obj=null;
var func=null;
if(typeof (_566)!="undefined"){
obj=_565;
func=_566;
if(typeof (_566)=="string"){
if(typeof (_565[_566])!="function"){
throw new Error("'funcOrStr' must be a function on 'objOrFunc'");
}
}else{
if(typeof (_566)!="function"){
throw new Error("'funcOrStr' must be a function or string");
}
}
}else{
if(typeof (_565)!="function"){
throw new Error("'objOrFunc' must be a function if 'funcOrStr' is not given");
}else{
func=_565;
}
}
return [obj,func];
},connect:function(src,sig,_56b,_56c){
src=MochiKit.DOM.getElement(src);
var self=MochiKit.Signal;
if(typeof (sig)!="string"){
throw new Error("'sig' must be a string");
}
var _56e=self._getDestPair(_56b,_56c);
var obj=_56e[0];
var func=_56e[1];
if(typeof (obj)=="undefined"||obj===null){
obj=src;
}
var _571=!!(src.addEventListener||src.attachEvent);
if(_571&&(sig==="onmouseenter"||sig==="onmouseleave")&&!self._browserAlreadyHasMouseEnterAndLeave()){
var _572=self._mouseEnterListener(src,sig.substr(2),func,obj);
if(sig==="onmouseenter"){
sig="onmouseover";
}else{
sig="onmouseout";
}
}else{
if(_571&&sig=="onmousewheel"&&self._browserLacksMouseWheelEvent()){
var _572=self._listener(src,sig,func,obj,_571);
sig="onDOMMouseScroll";
}else{
var _572=self._listener(src,sig,func,obj,_571);
}
}
if(src.addEventListener){
src.addEventListener(sig.substr(2),_572,false);
}else{
if(src.attachEvent){
src.attachEvent(sig,_572);
}
}
var _573=new MochiKit.Signal.Ident({source:src,signal:sig,listener:_572,isDOM:_571,objOrFunc:_56b,funcOrStr:_56c,connected:true});
self._observers.push(_573);
if(!_571&&typeof (src.__connect__)=="function"){
var args=MochiKit.Base.extend([_573],arguments,1);
src.__connect__.apply(src,args);
}
return _573;
},_disconnect:function(_575){
if(!_575.connected){
return;
}
_575.connected=false;
var src=_575.source;
var sig=_575.signal;
var _578=_575.listener;
if(!_575.isDOM){
if(typeof (src.__disconnect__)=="function"){
src.__disconnect__(_575,sig,_575.objOrFunc,_575.funcOrStr);
}
return;
}
if(src.removeEventListener){
src.removeEventListener(sig.substr(2),_578,false);
}else{
if(src.detachEvent){
src.detachEvent(sig,_578);
}else{
throw new Error("'src' must be a DOM element");
}
}
},disconnect:function(_579){
var self=MochiKit.Signal;
var _57b=self._observers;
var m=MochiKit.Base;
if(arguments.length>1){
var src=MochiKit.DOM.getElement(arguments[0]);
var sig=arguments[1];
var obj=arguments[2];
var func=arguments[3];
for(var i=_57b.length-1;i>=0;i--){
var o=_57b[i];
if(o.source===src&&o.signal===sig&&o.objOrFunc===obj&&o.funcOrStr===func){
self._disconnect(o);
if(!self._lock){
_57b.splice(i,1);
}else{
self._dirty=true;
}
return true;
}
}
}else{
var idx=m.findIdentical(_57b,_579);
if(idx>=0){
self._disconnect(_579);
if(!self._lock){
_57b.splice(idx,1);
}else{
self._dirty=true;
}
return true;
}
}
return false;
},disconnectAllTo:function(_584,_585){
var self=MochiKit.Signal;
var _587=self._observers;
var _588=self._disconnect;
var _589=self._lock;
var _58a=self._dirty;
if(typeof (_585)==="undefined"){
_585=null;
}
for(var i=_587.length-1;i>=0;i--){
var _58c=_587[i];
if(_58c.objOrFunc===_584&&(_585===null||_58c.funcOrStr===_585)){
_588(_58c);
if(_589){
_58a=true;
}else{
_587.splice(i,1);
}
}
}
self._dirty=_58a;
},disconnectAll:function(src,sig){
src=MochiKit.DOM.getElement(src);
var m=MochiKit.Base;
var _590=m.flattenArguments(m.extend(null,arguments,1));
var self=MochiKit.Signal;
var _592=self._disconnect;
var _593=self._observers;
var i,_595;
var _596=self._lock;
var _597=self._dirty;
if(_590.length===0){
for(i=_593.length-1;i>=0;i--){
_595=_593[i];
if(_595.source===src){
_592(_595);
if(!_596){
_593.splice(i,1);
}else{
_597=true;
}
}
}
}else{
var sigs={};
for(i=0;i<_590.length;i++){
sigs[_590[i]]=true;
}
for(i=_593.length-1;i>=0;i--){
_595=_593[i];
if(_595.source===src&&_595.signal in sigs){
_592(_595);
if(!_596){
_593.splice(i,1);
}else{
_597=true;
}
}
}
}
self._dirty=_597;
},signal:function(src,sig){
var self=MochiKit.Signal;
var _59c=self._observers;
src=MochiKit.DOM.getElement(src);
var args=MochiKit.Base.extend(null,arguments,2);
var _59e=[];
self._lock=true;
for(var i=0;i<_59c.length;i++){
var _5a0=_59c[i];
if(_5a0.source===src&&_5a0.signal===sig&&_5a0.connected){
try{
_5a0.listener.apply(src,args);
}
catch(e){
_59e.push(e);
}
}
}
self._lock=false;
if(self._dirty){
self._dirty=false;
for(var i=_59c.length-1;i>=0;i--){
if(!_59c[i].connected){
_59c.splice(i,1);
}
}
}
if(_59e.length==1){
throw _59e[0];
}else{
if(_59e.length>1){
var e=new Error("Multiple errors thrown in handling 'sig', see errors property");
e.errors=_59e;
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
var _5a4=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;
var _5a5=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;
this.windowOffset=new MochiKit.Style.Coordinates(_5a4,_5a5);
},cumulativeOffset:function(_5a6){
var _5a7=0;
var _5a8=0;
do{
_5a7+=_5a6.offsetTop||0;
_5a8+=_5a6.offsetLeft||0;
_5a6=_5a6.offsetParent;
}while(_5a6);
return new MochiKit.Style.Coordinates(_5a8,_5a7);
},realOffset:function(_5a9){
var _5aa=0;
var _5ab=0;
do{
_5aa+=_5a9.scrollTop||0;
_5ab+=_5a9.scrollLeft||0;
_5a9=_5a9.parentNode;
}while(_5a9);
return new MochiKit.Style.Coordinates(_5ab,_5aa);
},within:function(_5ac,x,y){
if(this.includeScrollOffsets){
return this.withinIncludingScrolloffsets(_5ac,x,y);
}
this.xcomp=x;
this.ycomp=y;
this.offset=this.cumulativeOffset(_5ac);
if(_5ac.style.position=="fixed"){
this.offset.x+=this.windowOffset.x;
this.offset.y+=this.windowOffset.y;
}
return (y>=this.offset.y&&y<this.offset.y+_5ac.offsetHeight&&x>=this.offset.x&&x<this.offset.x+_5ac.offsetWidth);
},withinIncludingScrolloffsets:function(_5af,x,y){
var _5b2=this.realOffset(_5af);
this.xcomp=x+_5b2.x-this.windowOffset.x;
this.ycomp=y+_5b2.y-this.windowOffset.y;
this.offset=this.cumulativeOffset(_5af);
return (this.ycomp>=this.offset.y&&this.ycomp<this.offset.y+_5af.offsetHeight&&this.xcomp>=this.offset.x&&this.xcomp<this.offset.x+_5af.offsetWidth);
},overlap:function(mode,_5b4){
if(!mode){
return 0;
}
if(mode=="vertical"){
return ((this.offset.y+_5b4.offsetHeight)-this.ycomp)/_5b4.offsetHeight;
}
if(mode=="horizontal"){
return ((this.offset.x+_5b4.offsetWidth)-this.xcomp)/_5b4.offsetWidth;
}
},absolutize:function(_5b5){
_5b5=MochiKit.DOM.getElement(_5b5);
if(_5b5.style.position=="absolute"){
return;
}
MochiKit.Position.prepare();
var _5b6=MochiKit.Position.positionedOffset(_5b5);
var _5b7=_5b5.clientWidth;
var _5b8=_5b5.clientHeight;
var _5b9={"position":_5b5.style.position,"left":_5b6.x-parseFloat(_5b5.style.left||0),"top":_5b6.y-parseFloat(_5b5.style.top||0),"width":_5b5.style.width,"height":_5b5.style.height};
_5b5.style.position="absolute";
_5b5.style.top=_5b6.y+"px";
_5b5.style.left=_5b6.x+"px";
_5b5.style.width=_5b7+"px";
_5b5.style.height=_5b8+"px";
return _5b9;
},positionedOffset:function(_5ba){
var _5bb=0,_5bc=0;
do{
_5bb+=_5ba.offsetTop||0;
_5bc+=_5ba.offsetLeft||0;
_5ba=_5ba.offsetParent;
if(_5ba){
p=MochiKit.Style.getStyle(_5ba,"position");
if(p=="relative"||p=="absolute"){
break;
}
}
}while(_5ba);
return new MochiKit.Style.Coordinates(_5bc,_5bb);
},relativize:function(_5bd,_5be){
_5bd=MochiKit.DOM.getElement(_5bd);
if(_5bd.style.position=="relative"){
return;
}
MochiKit.Position.prepare();
var top=parseFloat(_5bd.style.top||0)-(_5be["top"]||0);
var left=parseFloat(_5bd.style.left||0)-(_5be["left"]||0);
_5bd.style.position=_5be["position"];
_5bd.style.top=top+"px";
_5bd.style.left=left+"px";
_5bd.style.width=_5be["width"];
_5bd.style.height=_5be["height"];
},clone:function(_5c1,_5c2){
_5c1=MochiKit.DOM.getElement(_5c1);
_5c2=MochiKit.DOM.getElement(_5c2);
_5c2.style.position="absolute";
var _5c3=this.cumulativeOffset(_5c1);
_5c2.style.top=_5c3.y+"px";
_5c2.style.left=_5c3.x+"px";
_5c2.style.width=_5c1.offsetWidth+"px";
_5c2.style.height=_5c1.offsetHeight+"px";
},page:function(_5c4){
var _5c5=0;
var _5c6=0;
var _5c7=_5c4;
do{
_5c5+=_5c7.offsetTop||0;
_5c6+=_5c7.offsetLeft||0;
if(_5c7.offsetParent==document.body&&MochiKit.Style.getStyle(_5c7,"position")=="absolute"){
break;
}
}while(_5c7=_5c7.offsetParent);
_5c7=_5c4;
do{
_5c5-=_5c7.scrollTop||0;
_5c6-=_5c7.scrollLeft||0;
}while(_5c7=_5c7.parentNode);
return new MochiKit.Style.Coordinates(_5c6,_5c5);
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
MochiKit.Visual._RoundCorners=function(e,_5cb){
e=MochiKit.DOM.getElement(e);
this._setOptions(_5cb);
if(this.options.__unstable__wrapElement){
e=this._doWrap(e);
}
var _5cc=this.options.color;
var C=MochiKit.Color.Color;
if(this.options.color==="fromElement"){
_5cc=C.fromBackground(e);
}else{
if(!(_5cc instanceof C)){
_5cc=C.fromString(_5cc);
}
}
this.isTransparent=(_5cc.asRGB().a<=0);
var _5ce=this.options.bgColor;
if(this.options.bgColor==="fromParent"){
_5ce=C.fromBackground(e.offsetParent);
}else{
if(!(_5ce instanceof C)){
_5ce=C.fromString(_5ce);
}
}
this._roundCornersImpl(e,_5cc,_5ce);
};
MochiKit.Visual._RoundCorners.prototype={_doWrap:function(e){
var _5d0=e.parentNode;
var doc=MochiKit.DOM.currentDocument();
if(typeof (doc.defaultView)==="undefined"||doc.defaultView===null){
return e;
}
var _5d2=doc.defaultView.getComputedStyle(e,null);
if(typeof (_5d2)==="undefined"||_5d2===null){
return e;
}
var _5d3=MochiKit.DOM.DIV({"style":{display:"block",marginTop:_5d2.getPropertyValue("padding-top"),marginRight:_5d2.getPropertyValue("padding-right"),marginBottom:_5d2.getPropertyValue("padding-bottom"),marginLeft:_5d2.getPropertyValue("padding-left"),padding:"0px"}});
_5d3.innerHTML=e.innerHTML;
e.innerHTML="";
e.appendChild(_5d3);
return e;
},_roundCornersImpl:function(e,_5d5,_5d6){
if(this.options.border){
this._renderBorder(e,_5d6);
}
if(this._isTopRounded()){
this._roundTopCorners(e,_5d5,_5d6);
}
if(this._isBottomRounded()){
this._roundBottomCorners(e,_5d5,_5d6);
}
},_renderBorder:function(el,_5d8){
var _5d9="1px solid "+this._borderColor(_5d8);
var _5da="border-left: "+_5d9;
var _5db="border-right: "+_5d9;
var _5dc="style='"+_5da+";"+_5db+"'";
el.innerHTML="<div "+_5dc+">"+el.innerHTML+"</div>";
},_roundTopCorners:function(el,_5de,_5df){
var _5e0=this._createCorner(_5df);
for(var i=0;i<this.options.numSlices;i++){
_5e0.appendChild(this._createCornerSlice(_5de,_5df,i,"top"));
}
el.style.paddingTop=0;
el.insertBefore(_5e0,el.firstChild);
},_roundBottomCorners:function(el,_5e3,_5e4){
var _5e5=this._createCorner(_5e4);
for(var i=(this.options.numSlices-1);i>=0;i--){
_5e5.appendChild(this._createCornerSlice(_5e3,_5e4,i,"bottom"));
}
el.style.paddingBottom=0;
el.appendChild(_5e5);
},_createCorner:function(_5e7){
var dom=MochiKit.DOM;
return dom.DIV({style:{backgroundColor:_5e7.toString()}});
},_createCornerSlice:function(_5e9,_5ea,n,_5ec){
var _5ed=MochiKit.DOM.SPAN();
var _5ee=_5ed.style;
_5ee.backgroundColor=_5e9.toString();
_5ee.display="block";
_5ee.height="1px";
_5ee.overflow="hidden";
_5ee.fontSize="1px";
var _5ef=this._borderColor(_5e9,_5ea);
if(this.options.border&&n===0){
_5ee.borderTopStyle="solid";
_5ee.borderTopWidth="1px";
_5ee.borderLeftWidth="0px";
_5ee.borderRightWidth="0px";
_5ee.borderBottomWidth="0px";
_5ee.height="0px";
_5ee.borderColor=_5ef.toString();
}else{
if(_5ef){
_5ee.borderColor=_5ef.toString();
_5ee.borderStyle="solid";
_5ee.borderWidth="0px 1px";
}
}
if(!this.options.compact&&(n==(this.options.numSlices-1))){
_5ee.height="2px";
}
this._setMargin(_5ed,n,_5ec);
this._setBorder(_5ed,n,_5ec);
return _5ed;
},_setOptions:function(_5f0){
this.options={corners:"all",color:"fromElement",bgColor:"fromParent",blend:true,border:false,compact:false,__unstable__wrapElement:false};
MochiKit.Base.update(this.options,_5f0);
this.options.numSlices=(this.options.compact?2:4);
},_whichSideTop:function(){
var _5f1=this.options.corners;
if(this._hasString(_5f1,"all","top")){
return "";
}
var _5f2=(_5f1.indexOf("tl")!=-1);
var _5f3=(_5f1.indexOf("tr")!=-1);
if(_5f2&&_5f3){
return "";
}
if(_5f2){
return "left";
}
if(_5f3){
return "right";
}
return "";
},_whichSideBottom:function(){
var _5f4=this.options.corners;
if(this._hasString(_5f4,"all","bottom")){
return "";
}
var _5f5=(_5f4.indexOf("bl")!=-1);
var _5f6=(_5f4.indexOf("br")!=-1);
if(_5f5&&_5f6){
return "";
}
if(_5f5){
return "left";
}
if(_5f6){
return "right";
}
return "";
},_borderColor:function(_5f7,_5f8){
if(_5f7=="transparent"){
return _5f8;
}else{
if(this.options.border){
return this.options.border;
}else{
if(this.options.blend){
return _5f8.blendedColor(_5f7);
}
}
}
return "";
},_setMargin:function(el,n,_5fb){
var _5fc=this._marginSize(n)+"px";
var _5fd=(_5fb=="top"?this._whichSideTop():this._whichSideBottom());
var _5fe=el.style;
if(_5fd=="left"){
_5fe.marginLeft=_5fc;
_5fe.marginRight="0px";
}else{
if(_5fd=="right"){
_5fe.marginRight=_5fc;
_5fe.marginLeft="0px";
}else{
_5fe.marginLeft=_5fc;
_5fe.marginRight=_5fc;
}
}
},_setBorder:function(el,n,_601){
var _602=this._borderSize(n)+"px";
var _603=(_601=="top"?this._whichSideTop():this._whichSideBottom());
var _604=el.style;
if(_603=="left"){
_604.borderLeftWidth=_602;
_604.borderRightWidth="0px";
}else{
if(_603=="right"){
_604.borderRightWidth=_602;
_604.borderLeftWidth="0px";
}else{
_604.borderLeftWidth=_602;
_604.borderRightWidth=_602;
}
}
},_marginSize:function(n){
if(this.isTransparent){
return 0;
}
var o=this.options;
if(o.compact&&o.blend){
var _607=[1,0];
return _607[n];
}else{
if(o.compact){
var _608=[2,1];
return _608[n];
}else{
if(o.blend){
var _609=[3,2,1,0];
return _609[n];
}else{
var _60a=[5,3,2,1];
return _60a[n];
}
}
}
},_borderSize:function(n){
var o=this.options;
var _60d;
if(o.compact&&(o.blend||this.isTransparent)){
return 1;
}else{
if(o.compact){
_60d=[1,0];
}else{
if(o.blend){
_60d=[2,1,1,1];
}else{
if(o.border){
_60d=[0,2,0,0];
}else{
if(this.isTransparent){
_60d=[5,3,2,1];
}else{
return 0;
}
}
}
}
}
return _60d[n];
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
MochiKit.Visual.roundElement=function(e,_612){
new MochiKit.Visual._RoundCorners(e,_612);
};
MochiKit.Visual.roundClass=function(_613,_614,_615){
var _616=MochiKit.DOM.getElementsByTagAndClassName(_613,_614);
for(var i=0;i<_616.length;i++){
MochiKit.Visual.roundElement(_616[i],_615);
}
};
MochiKit.Visual.tagifyText=function(_618,_619){
_619=_619||"position:relative";
if(/MSIE/.test(navigator.userAgent)){
_619+=";zoom:1";
}
_618=MochiKit.DOM.getElement(_618);
var ma=MochiKit.Base.map;
ma(function(_61b){
if(_61b.nodeType==3){
ma(function(_61c){
_618.insertBefore(MochiKit.DOM.SPAN({style:_619},_61c==" "?String.fromCharCode(160):_61c),_61b);
},_61b.nodeValue.split(""));
MochiKit.DOM.removeElement(_61b);
}
},_618.childNodes);
};
MochiKit.Visual.forceRerendering=function(_61d){
try{
_61d=MochiKit.DOM.getElement(_61d);
var n=document.createTextNode(" ");
_61d.appendChild(n);
_61d.removeChild(n);
}
catch(e){
}
};
MochiKit.Visual.multiple=function(_61f,_620,_621){
_621=MochiKit.Base.update({speed:0.1,delay:0},_621);
var _622=_621.delay;
var _623=0;
MochiKit.Base.map(function(_624){
_621.delay=_623*_621.speed+_622;
new _620(_624,_621);
_623+=1;
},_61f);
};
MochiKit.Visual.PAIRS={"slide":["slideDown","slideUp"],"blind":["blindDown","blindUp"],"appear":["appear","fade"],"size":["grow","shrink"]};
MochiKit.Visual.toggle=function(_625,_626,_627){
_625=MochiKit.DOM.getElement(_625);
_626=(_626||"appear").toLowerCase();
_627=MochiKit.Base.update({queue:{position:"end",scope:(_625.id||"global"),limit:1}},_627);
var v=MochiKit.Visual;
v[MochiKit.Style.getStyle(_625,"display")!="none"?v.PAIRS[_626][1]:v.PAIRS[_626][0]](_625,_627);
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
MochiKit.Visual.Transitions.pulse=function(pos,_62f){
if(_62f){
pos*=2*_62f;
}else{
pos*=10;
}
var _630=pos-Math.floor(pos);
return (Math.floor(pos)%2==0)?_630:1-_630;
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
},add:function(_635){
var _636=new Date().getTime();
var _637=(typeof (_635.options.queue)=="string")?_635.options.queue:_635.options.queue.position;
var ma=MochiKit.Base.map;
switch(_637){
case "front":
ma(function(e){
if(e.state=="idle"){
e.startOn+=_635.finishOn;
e.finishOn+=_635.finishOn;
}
},this.effects);
break;
case "end":
var _63a;
ma(function(e){
var i=e.finishOn;
if(i>=(_63a||i)){
_63a=i;
}
},this.effects);
_636=_63a||_636;
break;
case "break":
ma(function(e){
e.finalize();
},this.effects);
break;
}
_635.startOn+=_636;
_635.finishOn+=_636;
if(!_635.options.queue.limit||this.effects.length<_635.options.queue.limit){
this.effects.push(_635);
}
if(!this.interval){
this.interval=this.startLoop(MochiKit.Base.bind(this.loop,this),40);
}
},startLoop:function(func,_63f){
return setInterval(func,_63f);
},remove:function(_640){
this.effects=MochiKit.Base.filter(function(e){
return e!=_640;
},this.effects);
if(!this.effects.length){
this.stopLoop(this.interval);
this.interval=null;
}
},stopLoop:function(_642){
clearInterval(_642);
},loop:function(){
var _643=new Date().getTime();
MochiKit.Base.map(function(_644){
_644.loop(_643);
},this.effects);
}});
MochiKit.Visual.Queues={instances:{},get:function(_645){
if(typeof (_645)!="string"){
return _645;
}
if(!this.instances[_645]){
this.instances[_645]=new MochiKit.Visual.ScopedQueue();
}
return this.instances[_645];
}};
MochiKit.Visual.Queue=MochiKit.Visual.Queues.get("global");
MochiKit.Visual.DefaultOptions={transition:MochiKit.Visual.Transitions.sinoidal,duration:1,fps:25,sync:false,from:0,to:1,delay:0,queue:"parallel"};
MochiKit.Visual.Base=function(){
};
MochiKit.Visual.Base.prototype={__class__:MochiKit.Visual.Base,start:function(_646){
var v=MochiKit.Visual;
this.options=MochiKit.Base.setdefault(_646,v.DefaultOptions);
this.currentFrame=0;
this.state="idle";
this.startOn=this.options.delay*1000;
this.finishOn=this.startOn+(this.options.duration*1000);
this.event("beforeStart");
if(!this.options.sync){
v.Queues.get(typeof (this.options.queue)=="string"?"global":this.options.queue.scope).add(this);
}
},loop:function(_648){
if(_648>=this.startOn){
if(_648>=this.finishOn){
return this.finalize();
}
var pos=(_648-this.startOn)/(this.finishOn-this.startOn);
var _64a=Math.round(pos*this.options.fps*this.options.duration);
if(_64a>this.currentFrame){
this.render(pos);
this.currentFrame=_64a;
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
},update:function(_64c){
},event:function(_64d){
if(this.options[_64d+"Internal"]){
this.options[_64d+"Internal"](this);
}
if(this.options[_64d]){
this.options[_64d](this);
}
},repr:function(){
return "["+this.__class__.NAME+", options:"+MochiKit.Base.repr(this.options)+"]";
}};
MochiKit.Visual.Parallel=function(_64e,_64f){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_64e,_64f);
}
this.__init__(_64e,_64f);
};
MochiKit.Visual.Parallel.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Parallel.prototype,{__class__:MochiKit.Visual.Parallel,__init__:function(_651,_652){
this.effects=_651||[];
this.start(_652);
},update:function(_653){
MochiKit.Base.map(function(_654){
_654.render(_653);
},this.effects);
},finish:function(){
MochiKit.Base.map(function(_655){
_655.finalize();
},this.effects);
}});
MochiKit.Visual.Sequence=function(_656,_657){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_656,_657);
}
this.__init__(_656,_657);
};
MochiKit.Visual.Sequence.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Sequence.prototype,{__class__:MochiKit.Visual.Sequence,__init__:function(_659,_65a){
var defs={transition:MochiKit.Visual.Transitions.linear,duration:0};
this.effects=_659||[];
MochiKit.Base.map(function(_65c){
defs.duration+=_65c.options.duration;
},this.effects);
MochiKit.Base.setdefault(_65a,defs);
this.start(_65a);
},update:function(_65d){
var time=_65d*this.options.duration;
for(var i=0;i<this.effects.length;i++){
var _660=this.effects[i];
if(time<=_660.options.duration){
_660.render(time/_660.options.duration);
break;
}else{
time-=_660.options.duration;
}
}
},finish:function(){
MochiKit.Base.map(function(_661){
_661.finalize();
},this.effects);
}});
MochiKit.Visual.Opacity=function(_662,_663){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_662,_663);
}
this.__init__(_662,_663);
};
MochiKit.Visual.Opacity.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Opacity.prototype,{__class__:MochiKit.Visual.Opacity,__init__:function(_665,_666){
var b=MochiKit.Base;
var s=MochiKit.Style;
this.element=MochiKit.DOM.getElement(_665);
if(this.element.currentStyle&&(!this.element.currentStyle.hasLayout)){
s.setStyle(this.element,{zoom:1});
}
_666=b.update({from:s.getStyle(this.element,"opacity")||0,to:1},_666);
this.start(_666);
},update:function(_669){
MochiKit.Style.setStyle(this.element,{"opacity":_669});
}});
MochiKit.Visual.Move=function(_66a,_66b){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_66a,_66b);
}
this.__init__(_66a,_66b);
};
MochiKit.Visual.Move.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Move.prototype,{__class__:MochiKit.Visual.Move,__init__:function(_66d,_66e){
this.element=MochiKit.DOM.getElement(_66d);
_66e=MochiKit.Base.update({x:0,y:0,mode:"relative"},_66e);
this.start(_66e);
},setup:function(){
MochiKit.DOM.makePositioned(this.element);
var s=this.element.style;
var _670=s.visibility;
var _671=s.display;
if(_671=="none"){
s.visibility="hidden";
s.display="";
}
this.originalLeft=parseFloat(MochiKit.Style.getStyle(this.element,"left")||"0");
this.originalTop=parseFloat(MochiKit.Style.getStyle(this.element,"top")||"0");
if(this.options.mode=="absolute"){
this.options.x-=this.originalLeft;
this.options.y-=this.originalTop;
}
if(_671=="none"){
s.visibility=_670;
s.display=_671;
}
},update:function(_672){
MochiKit.Style.setStyle(this.element,{left:Math.round(this.options.x*_672+this.originalLeft)+"px",top:Math.round(this.options.y*_672+this.originalTop)+"px"});
}});
MochiKit.Visual.Scale=function(_673,_674,_675){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_673,_674,_675);
}
this.__init__(_673,_674,_675);
};
MochiKit.Visual.Scale.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Scale.prototype,{__class__:MochiKit.Visual.Scale,__init__:function(_677,_678,_679){
this.element=MochiKit.DOM.getElement(_677);
_679=MochiKit.Base.update({scaleX:true,scaleY:true,scaleContent:true,scaleFromCenter:false,scaleMode:"box",scaleFrom:100,scaleTo:_678},_679);
this.start(_679);
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
var _67d=MochiKit.Style.getStyle(this.element,"font-size")||"100%";
ma(b(function(_67e){
if(_67d.indexOf(_67e)>0){
this.fontSize=parseFloat(_67d);
this.fontSizeType=_67e;
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
},update:function(_67f){
var _680=(this.options.scaleFrom/100)+(this.factor*_67f);
if(this.options.scaleContent&&this.fontSize){
MochiKit.Style.setStyle(this.element,{fontSize:this.fontSize*_680+this.fontSizeType});
}
this.setDimensions(this.dims[0]*_680,this.dims[1]*_680);
},finish:function(){
if(this.restoreAfterFinish){
MochiKit.Style.setStyle(this.element,this.originalStyle);
}
},setDimensions:function(_681,_682){
var d={};
var r=Math.round;
if(/MSIE/.test(navigator.userAgent)){
r=Math.ceil;
}
if(this.options.scaleX){
d.width=r(_682)+"px";
}
if(this.options.scaleY){
d.height=r(_681)+"px";
}
if(this.options.scaleFromCenter){
var topd=(_681-this.dims[0])/2;
var _686=(_682-this.dims[1])/2;
if(this.elementPositioning=="absolute"){
if(this.options.scaleY){
d.top=this.originalTop-topd+"px";
}
if(this.options.scaleX){
d.left=this.originalLeft-_686+"px";
}
}else{
if(this.options.scaleY){
d.top=-topd+"px";
}
if(this.options.scaleX){
d.left=-_686+"px";
}
}
}
MochiKit.Style.setStyle(this.element,d);
}});
MochiKit.Visual.Highlight=function(_687,_688){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_687,_688);
}
this.__init__(_687,_688);
};
MochiKit.Visual.Highlight.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Highlight.prototype,{__class__:MochiKit.Visual.Highlight,__init__:function(_68a,_68b){
this.element=MochiKit.DOM.getElement(_68a);
_68b=MochiKit.Base.update({startcolor:"#ffff99"},_68b);
this.start(_68b);
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
},update:function(_690){
var m="#";
MochiKit.Base.map(MochiKit.Base.bind(function(i){
m+=MochiKit.Color.toColorPart(Math.round(this._base[i]+this._delta[i]*_690));
},this),[0,1,2]);
MochiKit.Style.setStyle(this.element,{backgroundColor:m});
},finish:function(){
MochiKit.Style.setStyle(this.element,MochiKit.Base.update(this.oldStyle,{backgroundColor:this.options.restorecolor}));
}});
MochiKit.Visual.ScrollTo=function(_693,_694){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_693,_694);
}
this.__init__(_693,_694);
};
MochiKit.Visual.ScrollTo.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.ScrollTo.prototype,{__class__:MochiKit.Visual.ScrollTo,__init__:function(_696,_697){
this.element=MochiKit.DOM.getElement(_696);
this.start(_697);
},setup:function(){
var p=MochiKit.Position;
p.prepare();
var _699=p.cumulativeOffset(this.element);
if(this.options.offset){
_699.y+=this.options.offset;
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
this.delta=(_699.y>max?max:_699.y)-this.scrollStart;
},update:function(_69b){
var p=MochiKit.Position;
p.prepare();
window.scrollTo(p.windowOffset.x,this.scrollStart+(_69b*this.delta));
}});
MochiKit.Visual.CSS_LENGTH=/^(([\+\-]?[0-9\.]+)(em|ex|px|in|cm|mm|pt|pc|\%))|0$/;
MochiKit.Visual.Morph=function(_69d,_69e){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_69d,_69e);
}
this.__init__(_69d,_69e);
};
MochiKit.Visual.Morph.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Morph.prototype,{__class__:MochiKit.Visual.Morph,__init__:function(_6a0,_6a1){
this.element=MochiKit.DOM.getElement(_6a0);
this.start(_6a1);
},setup:function(){
var b=MochiKit.Base;
var _6a3=this.options.style;
this.styleStart={};
this.styleEnd={};
this.units={};
var _6a4,unit;
for(var s in _6a3){
_6a4=_6a3[s];
s=b.camelize(s);
if(MochiKit.Visual.CSS_LENGTH.test(_6a4)){
var _6a7=_6a4.match(/^([\+\-]?[0-9\.]+)(.*)$/);
_6a4=parseFloat(_6a7[1]);
unit=(_6a7.length==3)?_6a7[2]:null;
this.styleEnd[s]=_6a4;
this.units[s]=unit;
_6a4=MochiKit.Style.getStyle(this.element,s);
_6a7=_6a4.match(/^([\+\-]?[0-9\.]+)(.*)$/);
_6a4=parseFloat(_6a7[1]);
this.styleStart[s]=_6a4;
}else{
if(/[Cc]olor$/.test(s)){
var c=MochiKit.Color.Color;
_6a4=c.fromString(_6a4);
if(_6a4){
this.units[s]="color";
this.styleEnd[s]=_6a4.toHexString();
_6a4=MochiKit.Style.getStyle(this.element,s);
this.styleStart[s]=c.fromString(_6a4).toHexString();
this.styleStart[s]=b.map(b.bind(function(i){
return parseInt(this.styleStart[s].slice(i*2+1,i*2+3),16);
},this),[0,1,2]);
this.styleEnd[s]=b.map(b.bind(function(i){
return parseInt(this.styleEnd[s].slice(i*2+1,i*2+3),16);
},this),[0,1,2]);
}
}else{
this.element.style[s]=_6a4;
}
}
}
},update:function(_6ab){
var _6ac;
for(var s in this.styleStart){
if(this.units[s]=="color"){
var m="#";
var _6af=this.styleStart[s];
var end=this.styleEnd[s];
MochiKit.Base.map(MochiKit.Base.bind(function(i){
m+=MochiKit.Color.toColorPart(Math.round(_6af[i]+(end[i]-_6af[i])*_6ab));
},this),[0,1,2]);
this.element.style[s]=m;
}else{
_6ac=this.styleStart[s]+Math.round((this.styleEnd[s]-this.styleStart[s])*_6ab*1000)/1000+this.units[s];
this.element.style[s]=_6ac;
}
}
}});
MochiKit.Visual.fade=function(_6b2,_6b3){
var s=MochiKit.Style;
var _6b5=s.getStyle(_6b2,"opacity");
_6b3=MochiKit.Base.update({from:s.getStyle(_6b2,"opacity")||1,to:0,afterFinishInternal:function(_6b6){
if(_6b6.options.to!==0){
return;
}
s.hideElement(_6b6.element);
s.setStyle(_6b6.element,{"opacity":_6b5});
}},_6b3);
return new MochiKit.Visual.Opacity(_6b2,_6b3);
};
MochiKit.Visual.appear=function(_6b7,_6b8){
var s=MochiKit.Style;
var v=MochiKit.Visual;
_6b8=MochiKit.Base.update({from:(s.getStyle(_6b7,"display")=="none"?0:s.getStyle(_6b7,"opacity")||0),to:1,afterFinishInternal:function(_6bb){
v.forceRerendering(_6bb.element);
},beforeSetupInternal:function(_6bc){
s.setStyle(_6bc.element,{"opacity":_6bc.options.from});
s.showElement(_6bc.element);
}},_6b8);
return new v.Opacity(_6b7,_6b8);
};
MochiKit.Visual.puff=function(_6bd,_6be){
var s=MochiKit.Style;
var v=MochiKit.Visual;
_6bd=MochiKit.DOM.getElement(_6bd);
var _6c1=MochiKit.Style.getElementDimensions(_6bd,true);
var _6c2={position:s.getStyle(_6bd,"position"),top:_6bd.style.top,left:_6bd.style.left,width:_6bd.style.width,height:_6bd.style.height,opacity:s.getStyle(_6bd,"opacity")};
_6be=MochiKit.Base.update({beforeSetupInternal:function(_6c3){
MochiKit.Position.absolutize(_6c3.effects[0].element);
},afterFinishInternal:function(_6c4){
s.hideElement(_6c4.effects[0].element);
s.setStyle(_6c4.effects[0].element,_6c2);
},scaleContent:true,scaleFromCenter:true},_6be);
return new v.Parallel([new v.Scale(_6bd,200,{sync:true,scaleFromCenter:_6be.scaleFromCenter,scaleMode:{originalHeight:_6c1.h,originalWidth:_6c1.w},scaleContent:_6be.scaleContent,restoreAfterFinish:true}),new v.Opacity(_6bd,{sync:true,to:0})],_6be);
};
MochiKit.Visual.blindUp=function(_6c5,_6c6){
var d=MochiKit.DOM;
_6c5=d.getElement(_6c5);
var _6c8=MochiKit.Style.getElementDimensions(_6c5,true);
var _6c9=d.makeClipping(_6c5);
_6c6=MochiKit.Base.update({scaleContent:false,scaleX:false,scaleMode:{originalHeight:_6c8.h,originalWidth:_6c8.w},restoreAfterFinish:true,afterFinishInternal:function(_6ca){
MochiKit.Style.hideElement(_6ca.element);
d.undoClipping(_6ca.element,_6c9);
}},_6c6);
return new MochiKit.Visual.Scale(_6c5,0,_6c6);
};
MochiKit.Visual.blindDown=function(_6cb,_6cc){
var d=MochiKit.DOM;
var s=MochiKit.Style;
_6cb=d.getElement(_6cb);
var _6cf=s.getElementDimensions(_6cb,true);
var _6d0;
_6cc=MochiKit.Base.update({scaleContent:false,scaleX:false,scaleFrom:0,scaleMode:{originalHeight:_6cf.h,originalWidth:_6cf.w},restoreAfterFinish:true,afterSetupInternal:function(_6d1){
_6d0=d.makeClipping(_6d1.element);
s.setStyle(_6d1.element,{height:"0px"});
s.showElement(_6d1.element);
},afterFinishInternal:function(_6d2){
d.undoClipping(_6d2.element,_6d0);
}},_6cc);
return new MochiKit.Visual.Scale(_6cb,100,_6cc);
};
MochiKit.Visual.switchOff=function(_6d3,_6d4){
var d=MochiKit.DOM;
var s=MochiKit.Style;
_6d3=d.getElement(_6d3);
var _6d7=s.getElementDimensions(_6d3,true);
var _6d8=s.getStyle(_6d3,"opacity");
var _6d9;
_6d4=MochiKit.Base.update({duration:0.7,restoreAfterFinish:true,beforeSetupInternal:function(_6da){
d.makePositioned(_6d3);
_6d9=d.makeClipping(_6d3);
},afterFinishInternal:function(_6db){
s.hideElement(_6d3);
d.undoClipping(_6d3,_6d9);
d.undoPositioned(_6d3);
s.setStyle(_6d3,{"opacity":_6d8});
}},_6d4);
var v=MochiKit.Visual;
return new v.Sequence([new v.appear(_6d3,{sync:true,duration:0.57*_6d4.duration,from:0,transition:v.Transitions.flicker}),new v.Scale(_6d3,1,{sync:true,duration:0.43*_6d4.duration,scaleFromCenter:true,scaleX:false,scaleMode:{originalHeight:_6d7.h,originalWidth:_6d7.w},scaleContent:false,restoreAfterFinish:true})],_6d4);
};
MochiKit.Visual.dropOut=function(_6dd,_6de){
var d=MochiKit.DOM;
var s=MochiKit.Style;
_6dd=d.getElement(_6dd);
var _6e1={top:s.getStyle(_6dd,"top"),left:s.getStyle(_6dd,"left"),opacity:s.getStyle(_6dd,"opacity")};
_6de=MochiKit.Base.update({duration:0.5,distance:100,beforeSetupInternal:function(_6e2){
d.makePositioned(_6e2.effects[0].element);
},afterFinishInternal:function(_6e3){
s.hideElement(_6e3.effects[0].element);
d.undoPositioned(_6e3.effects[0].element);
s.setStyle(_6e3.effects[0].element,_6e1);
}},_6de);
var v=MochiKit.Visual;
return new v.Parallel([new v.Move(_6dd,{x:0,y:_6de.distance,sync:true}),new v.Opacity(_6dd,{sync:true,to:0})],_6de);
};
MochiKit.Visual.shake=function(_6e5,_6e6){
var d=MochiKit.DOM;
var v=MochiKit.Visual;
var s=MochiKit.Style;
_6e5=d.getElement(_6e5);
var _6ea={top:s.getStyle(_6e5,"top"),left:s.getStyle(_6e5,"left")};
_6e6=MochiKit.Base.update({duration:0.5,afterFinishInternal:function(_6eb){
d.undoPositioned(_6e5);
s.setStyle(_6e5,_6ea);
}},_6e6);
return new v.Sequence([new v.Move(_6e5,{sync:true,duration:0.1*_6e6.duration,x:20,y:0}),new v.Move(_6e5,{sync:true,duration:0.2*_6e6.duration,x:-40,y:0}),new v.Move(_6e5,{sync:true,duration:0.2*_6e6.duration,x:40,y:0}),new v.Move(_6e5,{sync:true,duration:0.2*_6e6.duration,x:-40,y:0}),new v.Move(_6e5,{sync:true,duration:0.2*_6e6.duration,x:40,y:0}),new v.Move(_6e5,{sync:true,duration:0.1*_6e6.duration,x:-20,y:0})],_6e6);
};
MochiKit.Visual.slideDown=function(_6ec,_6ed){
var d=MochiKit.DOM;
var b=MochiKit.Base;
var s=MochiKit.Style;
_6ec=d.getElement(_6ec);
if(!_6ec.firstChild){
throw new Error("MochiKit.Visual.slideDown must be used on a element with a child");
}
d.removeEmptyTextNodes(_6ec);
var _6f1=s.getStyle(_6ec.firstChild,"bottom")||0;
var _6f2=s.getElementDimensions(_6ec,true);
var _6f3;
_6ed=b.update({scaleContent:false,scaleX:false,scaleFrom:0,scaleMode:{originalHeight:_6f2.h,originalWidth:_6f2.w},restoreAfterFinish:true,afterSetupInternal:function(_6f4){
d.makePositioned(_6f4.element);
d.makePositioned(_6f4.element.firstChild);
if(/Opera/.test(navigator.userAgent)){
s.setStyle(_6f4.element,{top:""});
}
_6f3=d.makeClipping(_6f4.element);
s.setStyle(_6f4.element,{height:"0px"});
s.showElement(_6f4.element);
},afterUpdateInternal:function(_6f5){
var _6f6=s.getElementDimensions(_6f5.element,true);
s.setStyle(_6f5.element.firstChild,{bottom:(_6f5.dims[0]-_6f6.h)+"px"});
},afterFinishInternal:function(_6f7){
d.undoClipping(_6f7.element,_6f3);
if(/MSIE/.test(navigator.userAgent)){
d.undoPositioned(_6f7.element);
d.undoPositioned(_6f7.element.firstChild);
}else{
d.undoPositioned(_6f7.element.firstChild);
d.undoPositioned(_6f7.element);
}
s.setStyle(_6f7.element.firstChild,{bottom:_6f1});
}},_6ed);
return new MochiKit.Visual.Scale(_6ec,100,_6ed);
};
MochiKit.Visual.slideUp=function(_6f8,_6f9){
var d=MochiKit.DOM;
var b=MochiKit.Base;
var s=MochiKit.Style;
_6f8=d.getElement(_6f8);
if(!_6f8.firstChild){
throw new Error("MochiKit.Visual.slideUp must be used on a element with a child");
}
d.removeEmptyTextNodes(_6f8);
var _6fd=s.getStyle(_6f8.firstChild,"bottom");
var _6fe=s.getElementDimensions(_6f8,true);
var _6ff;
_6f9=b.update({scaleContent:false,scaleX:false,scaleMode:{originalHeight:_6fe.h,originalWidth:_6fe.w},scaleFrom:100,restoreAfterFinish:true,beforeStartInternal:function(_700){
d.makePositioned(_700.element);
d.makePositioned(_700.element.firstChild);
if(/Opera/.test(navigator.userAgent)){
s.setStyle(_700.element,{top:""});
}
_6ff=d.makeClipping(_700.element);
s.showElement(_700.element);
},afterUpdateInternal:function(_701){
var _702=s.getElementDimensions(_701.element,true);
s.setStyle(_701.element.firstChild,{bottom:(_701.dims[0]-_702.h)+"px"});
},afterFinishInternal:function(_703){
s.hideElement(_703.element);
d.undoClipping(_703.element,_6ff);
d.undoPositioned(_703.element.firstChild);
d.undoPositioned(_703.element);
s.setStyle(_703.element.firstChild,{bottom:_6fd});
}},_6f9);
return new MochiKit.Visual.Scale(_6f8,0,_6f9);
};
MochiKit.Visual.squish=function(_704,_705){
var d=MochiKit.DOM;
var b=MochiKit.Base;
var _708=MochiKit.Style.getElementDimensions(_704,true);
var _709;
_705=b.update({restoreAfterFinish:true,scaleMode:{originalHeight:_708.w,originalWidth:_708.h},beforeSetupInternal:function(_70a){
_709=d.makeClipping(_70a.element);
},afterFinishInternal:function(_70b){
MochiKit.Style.hideElement(_70b.element);
d.undoClipping(_70b.element,_709);
}},_705);
return new MochiKit.Visual.Scale(_704,/Opera/.test(navigator.userAgent)?1:0,_705);
};
MochiKit.Visual.grow=function(_70c,_70d){
var d=MochiKit.DOM;
var v=MochiKit.Visual;
var s=MochiKit.Style;
_70c=d.getElement(_70c);
_70d=MochiKit.Base.update({direction:"center",moveTransition:v.Transitions.sinoidal,scaleTransition:v.Transitions.sinoidal,opacityTransition:v.Transitions.full,scaleContent:true,scaleFromCenter:false},_70d);
var _711={top:_70c.style.top,left:_70c.style.left,height:_70c.style.height,width:_70c.style.width,opacity:s.getStyle(_70c,"opacity")};
var dims=s.getElementDimensions(_70c,true);
var _713,_714;
var _715,_716;
switch(_70d.direction){
case "top-left":
_713=_714=_715=_716=0;
break;
case "top-right":
_713=dims.w;
_714=_716=0;
_715=-dims.w;
break;
case "bottom-left":
_713=_715=0;
_714=dims.h;
_716=-dims.h;
break;
case "bottom-right":
_713=dims.w;
_714=dims.h;
_715=-dims.w;
_716=-dims.h;
break;
case "center":
_713=dims.w/2;
_714=dims.h/2;
_715=-dims.w/2;
_716=-dims.h/2;
break;
}
var _717=MochiKit.Base.update({beforeSetupInternal:function(_718){
s.setStyle(_718.effects[0].element,{height:"0px"});
s.showElement(_718.effects[0].element);
},afterFinishInternal:function(_719){
d.undoClipping(_719.effects[0].element);
d.undoPositioned(_719.effects[0].element);
s.setStyle(_719.effects[0].element,_711);
}},_70d);
return new v.Move(_70c,{x:_713,y:_714,duration:0.01,beforeSetupInternal:function(_71a){
s.hideElement(_71a.element);
d.makeClipping(_71a.element);
d.makePositioned(_71a.element);
},afterFinishInternal:function(_71b){
new v.Parallel([new v.Opacity(_71b.element,{sync:true,to:1,from:0,transition:_70d.opacityTransition}),new v.Move(_71b.element,{x:_715,y:_716,sync:true,transition:_70d.moveTransition}),new v.Scale(_71b.element,100,{scaleMode:{originalHeight:dims.h,originalWidth:dims.w},sync:true,scaleFrom:/Opera/.test(navigator.userAgent)?1:0,transition:_70d.scaleTransition,scaleContent:_70d.scaleContent,scaleFromCenter:_70d.scaleFromCenter,restoreAfterFinish:true})],_717);
}});
};
MochiKit.Visual.shrink=function(_71c,_71d){
var d=MochiKit.DOM;
var v=MochiKit.Visual;
var s=MochiKit.Style;
_71c=d.getElement(_71c);
_71d=MochiKit.Base.update({direction:"center",moveTransition:v.Transitions.sinoidal,scaleTransition:v.Transitions.sinoidal,opacityTransition:v.Transitions.none,scaleContent:true,scaleFromCenter:false},_71d);
var _721={top:_71c.style.top,left:_71c.style.left,height:_71c.style.height,width:_71c.style.width,opacity:s.getStyle(_71c,"opacity")};
var dims=s.getElementDimensions(_71c,true);
var _723,_724;
switch(_71d.direction){
case "top-left":
_723=_724=0;
break;
case "top-right":
_723=dims.w;
_724=0;
break;
case "bottom-left":
_723=0;
_724=dims.h;
break;
case "bottom-right":
_723=dims.w;
_724=dims.h;
break;
case "center":
_723=dims.w/2;
_724=dims.h/2;
break;
}
var _725;
var _726=MochiKit.Base.update({beforeStartInternal:function(_727){
_725=d.makePositioned(_727.effects[0].element);
d.makeClipping(_727.effects[0].element);
},afterFinishInternal:function(_728){
s.hideElement(_728.effects[0].element);
d.undoClipping(_728.effects[0].element,_725);
d.undoPositioned(_728.effects[0].element);
s.setStyle(_728.effects[0].element,_721);
}},_71d);
return new v.Parallel([new v.Opacity(_71c,{sync:true,to:0,from:1,transition:_71d.opacityTransition}),new v.Scale(_71c,/Opera/.test(navigator.userAgent)?1:0,{scaleMode:{originalHeight:dims.h,originalWidth:dims.w},sync:true,transition:_71d.scaleTransition,scaleContent:_71d.scaleContent,scaleFromCenter:_71d.scaleFromCenter,restoreAfterFinish:true}),new v.Move(_71c,{x:_723,y:_724,sync:true,transition:_71d.moveTransition})],_726);
};
MochiKit.Visual.pulsate=function(_729,_72a){
var d=MochiKit.DOM;
var v=MochiKit.Visual;
var b=MochiKit.Base;
var _72e=MochiKit.Style.getStyle(_729,"opacity");
_72a=b.update({duration:3,from:0,afterFinishInternal:function(_72f){
MochiKit.Style.setStyle(_72f.element,{"opacity":_72e});
}},_72a);
var _730=_72a.transition||v.Transitions.sinoidal;
_72a.transition=function(pos){
return _730(1-v.Transitions.pulse(pos,_72a.pulses));
};
return new v.Opacity(_729,_72a);
};
MochiKit.Visual.fold=function(_732,_733){
var d=MochiKit.DOM;
var v=MochiKit.Visual;
var s=MochiKit.Style;
_732=d.getElement(_732);
var _737=s.getElementDimensions(_732,true);
var _738={top:_732.style.top,left:_732.style.left,width:_732.style.width,height:_732.style.height};
var _739=d.makeClipping(_732);
_733=MochiKit.Base.update({scaleContent:false,scaleX:false,scaleMode:{originalHeight:_737.h,originalWidth:_737.w},afterFinishInternal:function(_73a){
new v.Scale(_732,1,{scaleContent:false,scaleY:false,scaleMode:{originalHeight:_737.h,originalWidth:_737.w},afterFinishInternal:function(_73b){
s.hideElement(_73b.element);
d.undoClipping(_73b.element,_739);
s.setStyle(_73b.element,_738);
}});
}},_733);
return new v.Scale(_732,5,_733);
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
var _741=MochiKit.Base.extend;
var self=MochiKit.MochiKit;
var _743=self.SUBMODULES;
var _744=[];
var _745=[];
var _746={};
var i,k,m,all;
for(i=0;i<_743.length;i++){
m=MochiKit[_743[i]];
_741(_744,m.EXPORT);
_741(_745,m.EXPORT_OK);
for(k in m.EXPORT_TAGS){
_746[k]=_741(_746[k],m.EXPORT_TAGS[k]);
}
all=m.EXPORT_TAGS[":all"];
if(!all){
all=_741(null,m.EXPORT,m.EXPORT_OK);
}
var j;
for(j=0;j<all.length;j++){
k=all[j];
self[k]=m[k];
}
}
self.EXPORT=_744;
self.EXPORT_OK=_745;
self.EXPORT_TAGS=_746;
}());
}else{
if(typeof (MochiKit.__compat__)=="undefined"){
MochiKit.__compat__=true;
}
(function(){
if(typeof (document)=="undefined"){
return;
}
var _74c=document.getElementsByTagName("script");
var _74d="http://www.w3.org/1999/xhtml";
var _74e="http://www.w3.org/2000/svg";
var _74f="http://www.w3.org/1999/xlink";
var _750="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
var base=null;
var _752=null;
var _753={};
var i;
var src;
for(i=0;i<_74c.length;i++){
src=null;
switch(_74c[i].namespaceURI){
case _74e:
src=_74c[i].getAttributeNS(_74f,"href");
break;
default:
src=_74c[i].getAttribute("src");
break;
}
if(!src){
continue;
}
_753[src]=true;
if(src.match(/MochiKit.js(\?.*)?$/)){
base=src.substring(0,src.lastIndexOf("MochiKit.js"));
_752=_74c[i];
}
}
if(base===null){
return;
}
var _756=MochiKit.MochiKit.SUBMODULES;
for(var i=0;i<_756.length;i++){
if(MochiKit[_756[i]]){
continue;
}
var uri=base+_756[i]+".js";
if(uri in _753){
continue;
}
if(_752.namespaceURI==_74e||_752.namespaceURI==_750){
var s=document.createElementNS(_752.namespaceURI,"script");
s.setAttribute("id","MochiKit_"+base+_756[i]);
if(_752.namespaceURI==_74e){
s.setAttributeNS(_74f,"href",uri);
}else{
s.setAttribute("src",uri);
}
s.setAttribute("type","application/x-javascript");
_752.parentNode.appendChild(s);
}else{
document.write("<"+_752.nodeName+" src=\""+uri+"\" type=\"text/javascript\"></script>");
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
MochiKit.Base.isFalse=function(_759){
return _759==false||_759==null||_759==0||_759.length===0||_759=="false"||_759=="null";
};
MochiKit.Base.defaultValue=function(){
for(var i=0;i<arguments.length;i++){
if(typeof (arguments[i])!="undefined"){
return arguments[i];
}
}
return undefined;
};
MochiKit.Base.dict=function(_75b,_75c){
var o={};
if(!MochiKit.Base.isArrayLike(_75b)){
throw new TypeError("First argument must be array-like");
}
if(MochiKit.Base.isArrayLike(_75c)&&_75b.length!==_75c.length){
throw new TypeError("Both arrays must be of same length");
}
for(var i=0;i<_75b.length;i++){
var k=_75b[i];
if(k===null||k===undefined){
throw new TypeError("Key at index "+i+" is null or undefined");
}else{
if(MochiKit.Base.isArrayLike(k)){
o[k[0]]=k[1];
}else{
if(MochiKit.Base.isArrayLike(_75c)){
o[k]=_75c[i];
}else{
o[k]=_75c;
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
MochiKit.Base.registerFunctionNames=function(obj,name,_76d){
if(typeof (obj)==="function"&&(obj.name==null||obj.name=="")&&typeof (obj.NAME)==="undefined"){
obj.NAME=name;
}
_76d=_76d||[];
if(obj!=null&&name!=null&&(typeof (obj)==="object"||typeof (obj)==="function")&&obj!==Object.prototype&&obj!==Function.prototype&&typeof (obj.nodeType)!=="number"&&MochiKit.Base.findIdentical(_76d,obj)<0){
_76d.push(obj);
for(var prop in obj){
var str=name+"."+prop;
MochiKit.Base.registerFunctionNames(obj[prop],str,_76d);
}
var str=name+".prototype";
MochiKit.Base.registerFunctionNames(obj.prototype,str,_76d);
_76d.pop();
}
};
MochiKit.Base.stackTrace=function(_770){
var func=arguments.callee.caller;
var _772=[];
var res=[];
_770=_770||20;
while(func!=null){
if(MochiKit.Base.findIdentical(_772,func)>=0){
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
_772.push(func);
if(_772.length>=_770){
res.push("...");
break;
}
func=func.caller;
}
return res;
};
MochiKit.Base.injectStackTrace=function(_775,func){
func=func||arguments.callee.caller;
if(func!=null){
if(_775){
func.$stackTrace=_775;
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
var _77c=MochiKit.Base.map(MochiKit.DOM.reprDOM,node.attributes);
res+=_77c.join("");
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
MochiKit.DOM.childNode=function(_781,_782){
_781=MochiKit.DOM.getElement(_781);
if(typeof (_782)=="number"){
if(_782<0||_782>=_781.childNodes.length){
return null;
}else{
return _781.childNodes[_782];
}
}else{
var node=MochiKit.DOM.getElement(_782);
while(node!=null&&node!==_781&&node.parentNode!==_781){
node=node.parentNode;
}
return (node==null||node===_781)?null:node;
}
};
MochiKit.DOM.createDOMExt=function(ns,tag,_786){
var doc=MochiKit.DOM.currentDocument();
var node=(ns)?doc.createElementNS(ns,tag):doc.createElement(tag);
MochiKit.DOM.updateNodeAttributes(node,_786);
var _789=MochiKit.Base.extend([],arguments,3);
MochiKit.DOM.appendChildNodes(node,_789);
return node;
};
MochiKit.DOM.createTextNode=function(text){
return MochiKit.DOM.currentDocument().createTextNode(text);
};
MochiKit.DOM.createDOMFuncExt=function(ns,tag,args,_78e){
args=args||[];
_78e=_78e||{};
var _78f=MochiKit.Base.extend([],arguments,4);
return function(){
var _790=MochiKit.Base.update({},_78e);
for(var pos=0;pos<args.length;pos++){
if(arguments[pos]==null){
throw new Error("Argument '"+args[pos]+"' cannot be null");
}
_790[args[pos]]=arguments[pos];
}
MochiKit.Base.update(_790,arguments[args.length]);
var _792=MochiKit.Base.extend([],_78f);
MochiKit.Base.extend(_792,arguments,args.length+1);
return MochiKit.DOM.createDOMExt(ns,tag,_790,_792);
};
};
MochiKit.DOM.blurAll=function(node){
if(arguments.length<=1){
MochiKit.DOM.blurAll(node,"A","BUTTON","INPUT","TEXTAREA","SELECT");
}else{
node.blur();
for(var i=1;i<arguments.length;i++){
var _795=node.getElementsByTagName(arguments[i]);
for(var j=0;j<_795.length;j++){
_795[j].blur();
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
MochiKit.DateTime.TimePeriod=function(_797){
return {days:Math.floor(_797/MochiKit.DateTime.MILLIS_PER_DAY),hours:Math.floor(_797/MochiKit.DateTime.MILLIS_PER_HOUR)%24,minutes:Math.floor(_797/MochiKit.DateTime.MILLIS_PER_MINUTE)%60,seconds:Math.floor(_797/MochiKit.DateTime.MILLIS_PER_SECOND)%60,millis:_797%1000};
};
MochiKit.DateTime.toApproxPeriod=function(_798){
var p=MochiKit.DateTime.TimePeriod(_798);
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
MochiKit.Format.truncate=function(obj,_79b,tail){
var base=MochiKit.Base;
if(obj!=null&&typeof (obj)!="string"&&!base.isArrayLike(obj)){
obj=obj.toString();
}
if(obj==null||obj.length<=_79b||_79b<0){
return obj;
}
if(typeof (tail)=="string"||base.isArrayLike(tail)){
obj=obj.slice(0,_79b-tail.length);
if(typeof (obj)=="string"){
return obj+tail;
}else{
return base.extend(obj,tail);
}
}else{
return obj.slice(0,_79b);
}
};
MochiKit.Format.formatter=function(_79e,_79f){
if(typeof (_79f)=="undefined"){
_79f=MochiKit.Format.formatLocale();
}else{
if(typeof (_79f)=="string"){
_79f=MochiKit.Format.formatLocale(_79f);
}
}
var _7a0=MochiKit.Format._parsePattern(_79e);
return function(){
var _7a1=MochiKit.Base.extend([],arguments);
return MochiKit.Format._formatParts(_7a0,_7a1,_79f);
};
};
MochiKit.Format.format=function(_7a2){
var _7a3=MochiKit.Format._parsePattern(_7a2);
var _7a4=MochiKit.Base.extend([],arguments,1);
var _7a5=MochiKit.Format.formatLocale();
return MochiKit.Format._formatParts(_7a3,_7a4,_7a5);
};
MochiKit.Format._parsePattern=function(_7a6){
var self=MochiKit.Format;
var _7a8=[];
var _7a9=0;
var pos=0;
for(pos=0;pos<_7a6.length;pos++){
if(_7a6[pos]=="{"){
if(pos+1>=_7a6.length){
var msg="unescaped { char, should be escaped as {{";
throw new self.FormatPatternError(_7a6,pos,msg);
}else{
if(_7a6[pos+1]=="{"){
_7a8.push(_7a6.substring(_7a9,pos+1));
_7a9=pos+2;
pos++;
}else{
if(_7a9<pos){
_7a8.push(_7a6.substring(_7a9,pos));
}
_7a9=_7a6.indexOf("}",pos)+1;
if(_7a9<=0){
var msg="unmatched { char, not followed by a } char";
throw new self.FormatPatternError(_7a6,pos,msg);
}
_7a8.push(self._parseFormat(_7a6,pos+1,_7a9-1));
pos=_7a9-1;
}
}
}else{
if(_7a6[pos]=="}"){
if(pos+1>=_7a6.length||_7a6[pos+1]!="}"){
var msg="unescaped } char, should be escaped as }}";
throw new self.FormatPatternError(_7a6,pos,msg);
}
_7a8.push(_7a6.substring(_7a9,pos+1));
_7a9=pos+2;
pos++;
}
}
}
if(_7a9<pos){
_7a8.push(_7a6.substring(_7a9,pos));
}
return _7a8;
};
MochiKit.Format._parseFormat=function(_7ac,_7ad,_7ae){
var self=MochiKit.Format;
var text=_7ac.substring(_7ad,_7ae);
var info;
var pos=text.indexOf(":");
if(pos==0){
info=self._parseFormatFlags(_7ac,_7ad+1,_7ae);
info.path=[0];
}else{
if(pos>0){
info=self._parseFormatFlags(_7ac,_7ad+pos+1,_7ae);
info.path=text.substring(0,pos).split(".");
}else{
info=self._parseFormatFlags(_7ac,_7ae,_7ae);
info.path=text.split(".");
}
}
var _7b3=/^\d+$/;
for(var i=0;i<info.path.length;i++){
var e=info.path[i];
if(typeof (e)=="string"){
e=self.strip(e);
if(e==""&&info.path.length==1){
e=0;
}else{
if(e==""){
var msg="format value path contains blanks";
throw new self.FormatPatternError(_7ac,_7ad,msg);
}else{
if(_7b3.test(e)){
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
MochiKit.Format._parseFormatFlags=function(_7b7,_7b8,_7b9){
var self=MochiKit.Format;
var info={format:"s",width:0,precision:-1,align:">",sign:"-",padding:" ",grouping:false};
var _7bc=self.rstrip(_7b7.substring(_7b8,_7b9));
while(_7bc.length>0){
switch(_7bc[0]){
case ">":
case "<":
info.align=_7bc[0];
_7bc=_7bc.substring(1);
break;
case "+":
case "-":
case " ":
info.sign=_7bc[0];
_7bc=_7bc.substring(1);
break;
case ",":
info.grouping=true;
_7bc=_7bc.substring(1);
break;
case ".":
var _7bd="0123456789";
var pos=1;
while(pos<_7bc.length&&_7bd.indexOf(_7bc[pos])>=0){
pos++;
}
info.precision=parseInt(_7bc.substring(1,pos));
_7bc=_7bc.substring(pos);
break;
case "0":
info.padding=_7bc[0];
_7bc=_7bc.substring(1);
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
var _7bd="0123456789";
var pos=1;
while(pos<_7bc.length&&_7bd.indexOf(_7bc[pos])>=0){
pos++;
}
info.width=parseInt(_7bc.substring(0,pos));
_7bc=_7bc.substring(pos);
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
info.format=_7bc[0];
_7bc=_7bc.substring(1);
break;
default:
var msg="unsupported format flag: "+_7bc[0];
throw new self.FormatPatternError(_7b7,_7b8,msg);
}
}
return info;
};
MochiKit.Format._formatParts=function(_7c0,_7c1,_7c2){
var self=MochiKit.Format;
var _7c4="";
for(var i=0;i<_7c0.length;i++){
if(typeof (_7c0[i])=="string"){
_7c4+=_7c0[i];
}else{
var info=_7c0[i];
var v=_7c1;
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
str=self._addNumberGrouping(str,_7c2);
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
var _7cb=str.indexOf(".");
if(_7cb<0){
str=str+"00";
}else{
if(_7cb+3>=str.length){
var _7cc=str.substring(_7cb+1);
while(_7cc.length<2){
_7cc=_7cc+"0";
}
str=str.substring(0,_7cb)+_7cc;
}else{
var _7cc=str.substring(_7cb+1);
str=str.substring(0,_7cb)+_7cc.substring(0,2)+"."+_7cc.substring(2);
}
}
while(str.length>1&&str[0]=="0"&&str[1]!="."){
str=str.substring(1);
}
if(info.padding=="0"){
str=self._addZeroPadding(str,info.width-sign.length-1);
}
if(info.grouping){
str=self._addNumberGrouping(str,_7c2);
}
str=sign+str+_7c2.percent;
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
_7c4+=str;
}
}
return _7c4;
};
MochiKit.Format._addZeroPadding=function(str,_7ce){
while(str.length<_7ce){
str="0"+str;
}
return str;
};
MochiKit.Format._addNumberGrouping=function(str,_7d0){
var _7d1=str.indexOf(".");
var _7d2=(_7d1<0)?str:str.substring(0,_7d1);
var _7d3=(_7d1<0)?"":str.substring(_7d1+1);
str=(_7d3.length>0)?_7d0.decimal:"";
while(_7d3.length>3){
str=str+_7d3.substring(0,3)+_7d0.separator;
_7d3=_7d3.substring(3);
if(_7d2.length>1&&_7d2[0]=="0"){
_7d2=_7d2.substring(1);
}
}
if(_7d3.length>0){
str+=_7d3;
}
while(_7d2.length>3){
var pos=_7d2.length-3;
str=_7d0.separator+_7d2.substring(pos)+str;
if(_7d2[0]=="0"){
_7d2=_7d2.substring(1,pos);
}else{
_7d2=_7d2.substring(0,pos);
}
}
return _7d2+str;
};
MochiKit.Format.FormatPatternError=function(_7d5,pos,_7d7){
this.pattern=_7d5;
this.pos=pos;
this.message=_7d7;
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
var _7d9=node.parentNode;
if(_7d9&&_7d9.lastChild!==node){
_7d9.appendChild(node);
}
}
};
MochiKit.SVG.moveToBottom=function(node){
node=MochiKit.DOM.getElement(node);
if(node!=null){
var _7db=node.parentNode;
if(_7db&&_7db.firstChild!==node){
_7db.insertBefore(node,_7db.firstChild);
}
}
};
MochiKit.SVG.rotate=function(node,_7dd,x,y){
var str=MochiKit.DOM.getNodeAttribute(node,"transform");
x=x||0;
y=y||0;
if(str==null||str==""){
str="";
}else{
str+=" ";
}
str+="rotate("+_7dd+","+x+","+y+")";
MochiKit.DOM.setNodeAttribute(node,"transform",str);
};
if(typeof (MochiKit)=="undefined"){
throw new ReferenceError("MochiKit must be loaded before loading this script");
}
if(typeof (MochiKit.Style)=="undefined"){
throw new ReferenceError("MochiKit.Style must be loaded before loading this script");
}
MochiKit.Style.getBorderBox=function(node){
var _7e2=MochiKit.Style.getStyle;
var px=MochiKit.Style._toPixels;
return {t:px(_7e2(node,"border-width-top")),b:px(_7e2(node,"border-width-bottom")),l:px(_7e2(node,"border-width-left")),r:px(_7e2(node,"border-width-right"))};
};
MochiKit.Style.getPaddingBox=function(node){
var _7e5=MochiKit.Style.getStyle;
var px=MochiKit.Style._toPixels;
return {t:px(_7e5(node,"padding-top")),b:px(_7e5(node,"padding-bottom")),l:px(_7e5(node,"padding-left")),r:px(_7e5(node,"padding-right"))};
};
MochiKit.Style._toPixels=function(_7e7){
if(_7e7!=null){
try{
_7e7=MochiKit.Format.rstrip(_7e7,"px");
_7e7=Math.round(parseFloat(_7e7));
}
catch(ignore){
_7e7=null;
}
}
return (_7e7==null||isNaN(_7e7))?null:_7e7;
};
MochiKit.Style.getScrollOffset=function(node){
node=MochiKit.DOM.getElement(node);
var x=node.scrollLeft||0;
var y=node.scrollTop||0;
return new MochiKit.Style.Coordinates(x,y);
};
MochiKit.Style.setScrollOffset=function(node,_7ec){
node=MochiKit.DOM.getElement(node);
node.scrollLeft=_7ec.x;
node.scrollTop=_7ec.y;
};
MochiKit.Style.resetScrollOffset=function(node,_7ee){
node=MochiKit.DOM.getElement(node);
node.scrollLeft=0;
node.scrollTop=0;
if(_7ee){
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
MochiKit.Style.registerSizeConstraints=function(node,_7f7,_7f8,_7f9){
node=MochiKit.DOM.getElement(node);
var sc=node.sizeConstraints={w:null,h:null,a:null};
if(typeof (_7f7)=="number"){
sc.w=function(w,h){
return _7f7;
};
}else{
if(typeof (_7f7)=="function"){
sc.w=_7f7;
}else{
if(typeof (_7f7)=="string"){
var code="return "+_7f7.replace(/%/g,"*0.01*w")+";";
sc.w=new Function("w","h",code);
}
}
}
if(typeof (_7f8)=="number"){
sc.h=function(w,h){
return _7f8;
};
}else{
if(typeof (_7f8)=="function"){
sc.h=_7f8;
}else{
if(typeof (_7f8)=="string"){
var code="return "+_7f8.replace(/%/g,"*0.01*h")+";";
sc.h=new Function("w","h",code);
}
}
}
if(typeof (_7f9)=="number"){
sc.a=function(w,h){
return _7f9;
};
}else{
if(typeof (_7f9)=="function"){
sc.a=_7f9;
}else{
if(typeof (_7f9)=="string"){
var code="return "+_7f9.replace(/%/g,"*0.01*w/h")+";";
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
MochiKit.Widget.isWidget=function(obj,_80e){
if(_80e!=null){
return MochiKit.DOM.isHTML(obj)&&MochiKit.DOM.hasElementClass(obj,"widget")&&MochiKit.DOM.hasElementClass(obj,"widget"+_80e);
}else{
return MochiKit.DOM.isHTML(obj)&&MochiKit.DOM.hasElementClass(obj,"widget");
}
};
MochiKit.Widget.isFormField=function(obj){
if(!MochiKit.DOM.isHTML(obj)||typeof (obj.tagName)!=="string"){
return false;
}
var _810=obj.tagName.toUpperCase();
return _810=="INPUT"||_810=="TEXTAREA"||_810=="SELECT"||typeof (obj.value)!=="undefined";
};
MochiKit.Widget.createWidget=function(name,_812){
var cls=MochiKit.Widget.Classes[name];
if(cls==null){
throw new ReferenceError("failed to find widget '"+name+"' in MochiKit.Widget.Classes");
}
var w=new cls(_812);
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
var _81f=MochiKit.Base.dict(MochiKit.DOM.attributeArrayNewImpl(node));
var _820=MochiKit.Base.mask(_81f,["id","w","h","a","class","style"]);
var _821=MochiKit.Widget.createWidgetTree(node.childNodes,ids);
if(MochiKit.Widget.Classes[name]){
var _822=MochiKit.Widget.createWidget(name,_81f,_821);
}else{
var _822=MochiKit.DOM.createDOM(name,_81f,_821);
}
if(_820.id){
if(ids){
ids[_820.id]=_822;
}else{
_822.id=_820.id;
}
}
if(_820.w||_820.h||_820.a){
MochiKit.Style.registerSizeConstraints(_822,_820.w,_820.h,_820.a);
}
if(_820["class"]){
var _823=_820["class"].split(" ");
if(typeof (_822.addClass)=="function"){
_822.addClass.apply(_822,_823);
}else{
for(var i=0;i<arguments.length;i++){
MochiKit.DOM.addElementClass(_822,_823[i]);
}
}
}
if(_820.style){
var _825={};
var _826=_820.style.split(";");
for(var i=0;i<_826.length;i++){
var a=_826[i].split(":");
_825[MochiKit.Format.strip(a[0])]=MochiKit.Format.strip(a[1]);
}
MochiKit.Style.setStyle(_822,_825);
}
return _822;
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
MochiKit.Widget.prototype.setAttrs=function(_82c){
MochiKit.DOM.updateNodeAttributes(this,_82c);
};
MochiKit.Widget.prototype.setStyle=function(_82d){
MochiKit.Style.setStyle(this,_82d);
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
MochiKit.Widget.prototype.addChildNode=function(_833){
this.appendChild(_833);
};
MochiKit.Widget.prototype.removeChildNode=function(_834){
this.removeChild(_834);
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
var _837=this.getChildNodes();
for(var i=_837.length-1;i>=0;i--){
this.removeChildNode(_837[i]);
MochiKit.Widget.destroyWidget(_837[i]);
}
};
MochiKit.Widget.Button=function(_839){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_839,MochiKit.Base.extend(null,arguments,1));
}
var o=MochiKit.DOM.BUTTON();
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetButton");
o.setAttrs(_839);
o.addAll(MochiKit.Base.extend(null,arguments,1));
return o;
};
MochiKit.Widget.Button.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Button.prototype.setAttrs=function(_83c){
_83c=MochiKit.Base.update({},_83c);
var _83d=MochiKit.Base.mask(_83c,["highlight"]);
if(typeof (_83d.highlight)!="undefined"){
if(MochiKit.Base.isFalse(_83d.highlight)){
this.removeClass("widgetButtonHighlight");
}else{
this.addClass("widgetButtonHighlight");
}
}
MochiKit.DOM.updateNodeAttributes(this,_83c);
};
MochiKit.Widget.Dialog=function(_83e){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_83e,MochiKit.Base.extend(null,arguments,1));
}
var _840=MochiKit.DOM.DIV({"class":"widgetDialogTitle"},"Dialog");
var _841=new MochiKit.Widget.Icon({ref:"CLOSE","class":"widgetDialogClose"});
var _842=new MochiKit.Widget.Icon({ref:"RESIZE","class":"widgetDialogResize"});
var _843=MochiKit.DOM.DIV({"class":"widgetDialogContent"});
MochiKit.Style.registerSizeConstraints(_843,"100% - 22","100% - 44");
var o=MochiKit.DOM.DIV({},_840,_841,_842,_843);
MochiKit.Base.updatetree(o,this);
o.setAttrs(MochiKit.Base.update({modal:false,center:true},_83e));
o.addClass("widget","widgetDialog","widgetHidden");
o.addAll(MochiKit.Base.extend(null,arguments,1));
MochiKit.Signal.connect(_840,"onmousedown",o,"_handleMoveStart");
MochiKit.Signal.connect(_841,"onclick",o,"hide");
MochiKit.Signal.connect(_842,"onmousedown",o,"_handleResizeStart");
return o;
};
MochiKit.Widget.Dialog.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Dialog.prototype.setAttrs=function(_845){
_845=MochiKit.Base.update({},_845);
var _846=MochiKit.Base.mask(_845,["title","modal","center"]);
if(typeof (_846.title)!="undefined"){
MochiKit.DOM.replaceChildNodes(this.firstChild,_846.title);
}
if(typeof (_846.modal)!="undefined"){
this.modal=!MochiKit.Base.isFalse(_846.modal);
}
if(typeof (_846.center)!="undefined"){
this.center=!MochiKit.Base.isFalse(_846.center);
}
MochiKit.DOM.updateNodeAttributes(this,_845);
};
MochiKit.Widget.Dialog.prototype.show=function(){
if(this.parentNode==null){
throw new Error("Cannot show Dialog widget without setting a parent DOM node");
}
if(this.modal){
var _847={loading:false,message:"",style:{"z-index":"99"}};
this._modalNode=new MochiKit.Widget.Overlay(_847);
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
MochiKit.Widget.Dialog.prototype.addChildNode=function(_849){
this.lastChild.appendChild(_849);
};
MochiKit.Widget.Dialog.prototype.removeChildNode=function(_84a){
this.lastChild.removeChild(_84a);
};
MochiKit.Widget.Dialog.prototype.moveTo=function(x,y){
var _84d=MochiKit.Style.getElementDimensions(this.parentNode);
var dim=MochiKit.Style.getElementDimensions(this);
var pos={x:Math.max(0,Math.min(x,_84d.w-dim.w-2)),y:Math.max(0,Math.min(y,_84d.h-dim.h-2))};
MochiKit.Style.setElementPosition(this,pos);
MochiKit.Widget.emitSignal(this,"onmove",pos);
};
MochiKit.Widget.Dialog.prototype.moveToCenter=function(){
var _850=MochiKit.Style.getElementDimensions(this.parentNode);
var dim=MochiKit.Style.getElementDimensions(this);
var pos={x:Math.round(Math.max(0,(_850.w-dim.w)/2)),y:Math.round(Math.max(0,(_850.h-dim.h)/2))};
MochiKit.Style.setElementPosition(this,pos);
MochiKit.Widget.emitSignal(this,"onmove",pos);
};
MochiKit.Widget.Dialog.prototype.resizeTo=function(_853,_854){
var _855=MochiKit.Style.getElementDimensions(this.parentNode);
var pos=MochiKit.Style.getElementPosition(this.parentNode);
pos=MochiKit.Style.getElementPosition(this,pos);
var dim={w:Math.max(150,Math.min(_853,_855.w-pos.x-2)),h:Math.max(100,Math.min(_854,_855.h-pos.y-2))};
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
MochiKit.Widget.Field=function(_861){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_861);
}
var o=MochiKit.DOM.SPAN();
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetField");
o.setAttrs(MochiKit.Base.update({name:"",value:"",maxLength:-1},_861));
o.defaultValue=o.value;
return o;
};
MochiKit.Widget.Field.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Field.prototype.setAttrs=function(_864){
_864=MochiKit.Base.update({},_864);
var _865=MochiKit.Base.mask(_864,["name","value","maxLength"]);
if(typeof (_865.name)!="undefined"){
this.name=_865.name;
}
if(typeof (_865.format)!="undefined"){
this.format=_865.format;
}
if(typeof (_865.maxLength)!="undefined"){
this.maxLength=parseInt(_865.maxLength);
}
if(typeof (_865.value)!="undefined"){
var str=this.value=_865.value;
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
var _867=str;
if(this.maxLength>0){
str=MochiKit.Format.truncate(str,this.maxLength,"...");
}
MochiKit.DOM.replaceChildNodes(this,str);
this.title=(str==_867)?null:_867;
}
MochiKit.DOM.updateNodeAttributes(this,_864);
};
MochiKit.Widget.Form=function(_868){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_868);
}
var o=MochiKit.DOM.FORM(_868);
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetForm");
MochiKit.Signal.connect(o,"onsubmit",o,"_handleSubmit");
o.addAll(MochiKit.Base.extend(null,arguments,1));
return o;
};
MochiKit.Widget.Form.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Form.prototype.fields=function(){
var _86b=[];
MochiKit.Base.nodeWalk(this,function(elem){
if(elem.nodeType!==1){
return null;
}
if(MochiKit.Widget.isFormField(elem)){
_86b.push(elem);
return null;
}else{
return elem.childNodes;
}
});
return _86b;
};
MochiKit.Widget.Form.prototype.fieldMap=function(){
var _86d=this.fields();
var map={};
for(var i=0;i<_86d.length;i++){
var name=_86d[i].name;
if(typeof (name)=="string"){
if(map[name] instanceof Array){
map[name].push(_86d[i]);
}else{
if(map[name]!=null){
map[name]=[map[name],_86d[i]];
}else{
map[name]=_86d[i];
}
}
}
}
return map;
};
MochiKit.Widget.Form.prototype.reset=function(){
this.validateReset();
var _871=this.fields();
for(var i=0;i<_871.length;i++){
var elem=_871[i];
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
var _876=this.fields();
var map={};
for(var i=0;i<_876.length;i++){
var name=_876[i].name;
var _87a="";
if(typeof (_876[i].getValue)=="function"){
_87a=_876[i].getValue();
}else{
_87a=_876[i].value;
}
if(_876[i].type==="radio"||_876[i].type==="checkbox"){
if(_876[i].checked){
_87a=_87a||true;
}else{
_87a=null;
}
}
if(typeof (name)=="string"&&_87a!=null){
if(map[name] instanceof Array){
map[name].push(_87a);
}else{
if(map[name]!=null){
map[name]=[map[name],_87a];
}else{
map[name]=_87a;
}
}
}
}
return map;
};
MochiKit.Widget.Form.prototype.update=function(_87b){
var _87c=this.fields();
for(var i=0;i<_87c.length;i++){
var elem=_87c[i];
if(elem.name in _87b){
var _87f=_87b[elem.name];
if(elem.type==="radio"||elem.type==="checkbox"){
if(_87f==null){
elem.checked=false;
}else{
if(MochiKit.Base.isArrayLike(_87f)){
elem.checked=(MochiKit.Base.findValue(_87f,elem.value)>=0);
}else{
elem.checked=(elem.value===_87f||_87f===true);
}
}
}else{
if(MochiKit.Base.isArrayLike(_87f)){
_87f=_87f.join(", ");
}
if(typeof (elem.setAttrs)=="function"){
elem.setAttrs({value:_87f});
}else{
elem.value=_87f;
}
}
}
}
};
MochiKit.Widget.Form.prototype.validators=function(){
var res=[];
var _881=this.getElementsByTagName("SPAN");
for(var i=0;i<_881.length;i++){
if(MochiKit.Widget.isWidget(_881[i],"FormValidator")){
res.push(_881[i]);
}
}
return res;
};
MochiKit.Widget.Form.prototype.validate=function(){
var _883=this.validators();
var _884=this.fields();
var _885=true;
var _886=[];
for(var i=0;i<_883.length;i++){
_883[i].reset();
}
for(var i=0;i<_883.length;i++){
for(var j=0;j<_884.length;j++){
if(_883[i].name==_884[j].name){
var res=_883[i].verify(_884[j]);
if(res instanceof MochiKit.Async.Deferred){
_886.push(res);
}else{
if(res===false){
_885=false;
}
}
}
}
}
if(!_885){
return false;
}else{
if(_886.length>0){
return MochiKit.Async.gatherResults(_886);
}else{
return true;
}
}
};
MochiKit.Widget.Form.prototype.validateReset=function(){
var _88a=this.validators();
for(var i=0;i<_88a.length;i++){
_88a[i].reset();
}
};
MochiKit.Widget.Form.prototype._handleSubmit=function(evt){
evt.stop();
};
MochiKit.Widget.FormValidator=function(_88d){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_88d);
}
var o=MochiKit.DOM.SPAN();
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetFormValidator");
o.setAttrs(MochiKit.Base.update({name:"",mandatory:true,display:"error",message:null,validator:null},_88d));
o.fields=[];
o.hide();
return o;
};
MochiKit.Widget.FormValidator.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.FormValidator.prototype.setAttrs=function(_890){
_890=MochiKit.Base.update({},_890);
var _891=MochiKit.Base.mask(_890,["name","mandatory","regex","display","message","validator"]);
if(typeof (_891.name)!="undefined"){
this.name=_891.name;
}
if(typeof (_891.mandatory)!="undefined"){
this.mandatory=!MochiKit.Base.isFalse(_891.mandatory);
}
if(typeof (_891.regex)!="undefined"){
if(_891.regex instanceof RegExp){
this.regex=_891.regex;
}else{
if(_891.regex.indexOf("^")!=0){
_891.regex="^"+_891.regex;
}
if(_891.regex.indexOf("$")!=_891.regex.length-1){
_891.regex+="$";
}
this.regex=new RegExp(_891.regex);
}
}
if(typeof (_891.display)!="undefined"){
this.display=_891.display;
}
if(typeof (_891.message)!="undefined"){
this.message=_891.message;
}
if(typeof (_891.validator)!="undefined"){
this.validator=_891.validator;
}
MochiKit.DOM.updateNodeAttributes(this,_890);
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
MochiKit.Widget.FormValidator.prototype.verify=function(_893){
if(!_893.disabled){
var _894="";
if(typeof (_893.getValue)=="function"){
_894=_893.getValue();
}else{
_894=_893.value;
}
var _895=MochiKit.Format.strip(_894);
if(MochiKit.Format.strip(_894)==""){
if(this.mandatory){
var msg="This field is mandatory and cannot be left blank";
this.addError(_893,msg);
return false;
}
}else{
if(this.regex!=null&&!this.regex.test(_895)){
var msg="The field format is incorrect";
this.addError(_893,msg);
return false;
}else{
if(typeof (this.validator)=="function"){
var res=this.validator(_894);
if(res instanceof MochiKit.Async.Deferred){
var self=this;
res.addErrback(function(e){
self.addError(_893,e.message);
return e;
});
return res;
}else{
if(typeof (res)=="string"){
this.addError(_893,res);
return false;
}else{
if(res===false){
this.addError(_893,"Field validation failed");
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
MochiKit.Widget.FormValidator.prototype.addError=function(_89a,_89b){
if(!MochiKit.DOM.hasElementClass(_89a,"widgetInvalid")){
this.fields.push(_89a);
MochiKit.DOM.addElementClass(_89a,"widgetInvalid");
if(this.display==="error"){
var _89c={ref:"ERROR",tooltip:this.message||_89b};
this.addAll(new MochiKit.Widget.Icon(_89c));
this.show();
}
}
};
MochiKit.Widget.Icon=function(_89d){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_89d);
}
var o=MochiKit.DOM.IMG();
MochiKit.Base.updatetree(o,this);
o.setAttrs(_89d);
o.addClass("widget","widgetIcon");
return o;
};
MochiKit.Widget.Icon.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Icon.prototype.setAttrs=function(_8a0){
_8a0=MochiKit.Base.update({},_8a0);
if(_8a0.ref){
MochiKit.Base.setdefault(_8a0,MochiKit.Widget.Icon[_8a0.ref],MochiKit.Widget.Icon.DEFAULT);
}
var _8a1=MochiKit.Base.mask(_8a0,["ref","url","baseUrl","tooltip","width","height"]);
if(typeof (_8a1.url)!="undefined"){
MochiKit.Base.setdefault(_8a1,MochiKit.Widget.Icon.DEFAULT);
_8a0.src=_8a1.baseUrl+_8a1.url;
}
if(typeof (_8a1.tooltip)!="undefined"){
_8a0.alt=_8a1.tooltip;
_8a0.title=_8a1.tooltip;
}
if(typeof (_8a1.width)!="undefined"){
this.width=_8a1.width;
this.setStyle({width:_8a1.width});
}
if(typeof (_8a1.height)!="undefined"){
this.height=_8a1.height;
this.setStyle({height:_8a1.height});
}
MochiKit.DOM.updateNodeAttributes(this,_8a0);
};
MochiKit.Base.update(MochiKit.Widget.Icon,{DEFAULT:{baseUrl:"images/icons/",width:"16",height:"16"},BLANK:{url:"blank.gif",style:{cursor:"default"}},CLOSE:{url:"close.gif"},RESIZE:{url:"resize-handle.gif"},OK:{url:"ok.gif",tooltip:"OK"},CANCEL:{url:"cancel.gif",tooltip:"Cancel"},HELP:{url:"help.gif",tooltip:"Help"},ERROR:{url:"error.gif",tooltip:"Error"},PLUS:{url:"plus.gif",tooltip:"Show"},MINUS:{url:"minus.gif",tooltip:"Hide"},NEXT:{url:"next.gif",tooltip:"Next"},PREVIOUS:{url:"previous.gif",tooltip:"Previous"},CONFIG:{url:"config.gif",tooltip:"Configure"},DELAY:{url:"delay.gif",tooltip:"Configure Delay"},RELOAD:{url:"reload.gif",tooltip:"Reload"},LOADING:{url:"loading.gif",tooltip:"Loading..."},LOADING_LARGE:{url:"loading-large.gif",tooltip:"Loading...",width:"32",height:"32"},SEARCH:{url:"magnifier.gif",tooltip:"Search"},ADD:{url:"add.gif",tooltip:"Add"},REMOVE:{url:"remove.gif",tooltip:"Remove"},EDIT:{url:"edit.gif",tooltip:"Edit"},DELETE:{url:"trash.gif",tooltip:"Clear / Delete"},SELECT:{url:"select.gif",tooltip:"Select / Unselect"},CUT:{url:"cut.gif",tooltip:"Cut"},EXPORT:{url:"export.gif",tooltip:"Export"},EXPAND:{url:"expand.gif",tooltip:"Expand"},UP:{url:"up.gif",tooltip:"Move Up"},DOWN:{url:"down.gif",tooltip:"Move Down"},LEFT:{url:"left.gif",tooltip:"Move Left"},RIGHT:{url:"right.gif",tooltip:"Move Right"},COMMENT:{url:"comment.gif",tooltip:"Comment"},CALENDAR:{url:"calendar.gif",tooltip:"Calendar"},AUTOMATIC:{url:"automatic.gif",tooltip:"Automatic Processing"},PLUGIN:{url:"plugin.gif",tooltip:"Plug-in"},FOLDER:{url:"folder.gif"},DOCUMENT:{url:"document.gif"}});
MochiKit.Widget.Overlay=function(_8a2){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_8a2,MochiKit.Base.extend(null,arguments,1));
}
var msg=MochiKit.DOM.DIV({"class":"widgetOverlayMessage"});
var o=MochiKit.DOM.DIV({},msg);
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetOverlay");
_8a2=MochiKit.Base.update({loading:true,message:"Working..."},_8a2);
o.setAttrs(_8a2);
o.addAll(MochiKit.Base.extend(null,arguments,1));
return o;
};
MochiKit.Widget.Overlay.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Overlay.prototype.setAttrs=function(_8a6){
_8a6=MochiKit.Base.update({},_8a6);
var _8a7=MochiKit.Base.mask(_8a6,["loading","message"]);
if(typeof (_8a7.loading)!="undefined"){
this.showLoading=!MochiKit.Base.isFalse(_8a7.loading);
}
if(typeof (_8a7.message)!="undefined"){
this.message=_8a7.message;
}
if(typeof (this.showLoading)!="undefined"){
var icon=new MochiKit.Widget.Icon({ref:"LOADING_LARGE"});
icon.setStyle({"padding-right":"20px"});
}
MochiKit.DOM.replaceChildNodes(this.firstChild,icon,this.message);
MochiKit.DOM.updateNodeAttributes(this,_8a6);
};
MochiKit.Widget.Pane=function(_8a9){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_8a9,MochiKit.Base.extend(null,arguments,1));
}
var o=MochiKit.DOM.DIV();
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetPane");
o.setAttrs(MochiKit.Base.update({pageTitle:"Page",pageStatus:"ANY",pageCloseable:false},_8a9));
o.addAll(MochiKit.Base.extend(null,arguments,1));
return o;
};
MochiKit.Widget.Pane.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Pane.ANY={previous:true,next:true};
MochiKit.Widget.Pane.FORWARD={previous:false,next:true};
MochiKit.Widget.Pane.BACKWARD={previous:true,next:false};
MochiKit.Widget.Pane.WORKING={previous:false,next:false};
MochiKit.Widget.Pane.prototype.setAttrs=function(_8ac){
_8ac=MochiKit.Base.update({},_8ac);
var _8ad=MochiKit.Base.mask(_8ac,["pageTitle","pageStatus","pageCloseable"]);
var _8ae=false;
if(typeof (_8ad.pageTitle)!="undefined"){
this.pageTitle=_8ad.pageTitle;
_8ae=true;
}
if(typeof (_8ad.pageStatus)!="undefined"){
if(typeof (_8ad.pageStatus)=="string"){
_8ad.pageStatus=MochiKit.Widget.Pane[_8ad.pageStatus];
}
this.pageStatus=_8ad.pageStatus;
_8ae=true;
}
if(typeof (_8ad.pageCloseable)!="undefined"){
this.pageCloseable=!MochiKit.Base.isFalse(_8ad.pageCloseable);
_8ae=true;
}
if(_8ae&&this.parentNode&&typeof (this.parentNode._updateStatus)=="function"){
this.parentNode._updateStatus();
}
MochiKit.DOM.updateNodeAttributes(this,_8ac);
};
MochiKit.Widget.Pane.prototype._handleEnter=function(opts){
opts=opts||{};
if(opts.validateReset){
var _8b0=this.getElementsByTagName("FORM");
for(var i=0;i<_8b0.length;i++){
if(typeof (_8b0[i].validateReset)=="function"){
_8b0[i].validateReset();
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
var _8b3=this.getElementsByTagName("FORM");
for(var i=0;i<_8b3.length;i++){
if(typeof (_8b3[i].validate)=="function"){
var res=_8b3[i].validate();
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
MochiKit.Widget.Popup=function(_8b6){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_8b6,MochiKit.Base.extend(null,arguments,1));
}
var o=MochiKit.DOM.DIV();
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetPopup","widgetHidden");
o.selectedIndex=-1;
o._delayTimer=null;
o.setAttrs(MochiKit.Base.update({delay:5000},_8b6));
o.addAll(MochiKit.Base.extend(null,arguments,1));
MochiKit.Signal.connect(o,"onmousemove",o,"_handleMouseMove");
MochiKit.Signal.connect(o,"onclick",o,"_handleMouseClick");
return o;
};
MochiKit.Widget.Popup.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Popup.prototype.setAttrs=function(_8b9){
_8b9=MochiKit.Base.update({},_8b9);
var _8ba=MochiKit.Base.mask(_8b9,["delay","showAnim","hideAnim"]);
if(typeof (_8ba.delay)!="undefined"){
this.delay=parseInt(_8ba.delay);
this.resetDelay();
}
if(typeof (_8ba.showAnim)!="undefined"){
this.showAnim=_8ba.showAnim;
}
if(typeof (_8ba.hideAnim)!="undefined"){
this.hideAnim=_8ba.hideAnim;
}
MochiKit.DOM.updateNodeAttributes(this,_8b9);
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
MochiKit.Widget.Popup.prototype.selectChild=function(_8bb){
var node=this.selectedChild();
if(node!=null){
MochiKit.DOM.removeElementClass(node,"selected");
}
var node=MochiKit.DOM.childNode(this,_8bb);
if(typeof (_8bb)=="number"){
var _8bd=_8bb;
}else{
var _8bd=MochiKit.Base.findIdentical(this.childNodes,node);
}
if(_8bd>=0&&node!=null){
this.selectedIndex=_8bd;
MochiKit.DOM.addElementClass(node,"selected");
var box={y:node.offsetTop,h:node.offsetHeight+5};
MochiKit.Style.adjustScrollOffset(this,box);
}else{
this.selectedIndex=-1;
}
return this.selectedIndex;
};
MochiKit.Widget.Popup.prototype.selectMove=function(_8bf){
var _8c0=this.selectedIndex+_8bf;
if(_8c0>=this.childNodes.length){
_8c0=0;
}
if(_8c0<0){
_8c0=this.childNodes.length-1;
}
return this.selectChild(_8c0);
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
MochiKit.Widget.ProgressBar=function(_8c5){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_8c5,MochiKit.Base.extend(null,arguments,1));
}
var _8c7=MochiKit.DOM.DIV({"class":"widgetProgressBarMeter"});
var text=MochiKit.DOM.DIV({"class":"widgetProgressBarText"});
var o=MochiKit.DOM.DIV({},_8c7,text);
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetProgressBar");
o.setAttrs(MochiKit.Base.update({min:0,max:100},_8c5));
o.setValue(0);
return o;
};
MochiKit.Widget.ProgressBar.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.ProgressBar.prototype.setAttrs=function(_8ca){
_8ca=MochiKit.Base.update({},_8ca);
var _8cb=MochiKit.Base.mask(_8ca,["min","max"]);
if(typeof (_8cb.min)!="undefined"||typeof (_8cb.max)!="undefined"){
this.minValue=parseInt(_8cb.min)||0;
this.maxValue=parseInt(_8cb.max)||100;
this.startTime=new Date().getTime();
this.lastTime=this.startTime;
this.timeLeft=null;
}
MochiKit.DOM.updateNodeAttributes(this,_8ca);
};
MochiKit.Widget.ProgressBar.prototype.setValue=function(_8cc,text){
_8cc=Math.min(Math.max(_8cc,this.minValue),this.maxValue);
var pos=_8cc-this.minValue;
var _8cf=this.maxValue-this.minValue;
var str=pos+" of "+_8cf;
if(typeof (text)=="string"&&text!=""){
str+=" \u2014 "+text;
}
this.setRatio(pos/_8cf,str);
};
MochiKit.Widget.ProgressBar.prototype.setRatio=function(_8d1,text){
var _8d3=Math.round(_8d1*1000)/10;
MochiKit.Style.setElementDimensions(this.firstChild,{w:_8d3},"%");
if(_8d3<66){
this.lastChild.className="widgetProgressBarText";
}else{
this.lastChild.className="widgetProgressBarTextInverse";
}
if(typeof (text)=="string"&&text!=""){
text=Math.round(_8d3)+"% \u2014 "+text;
}else{
text=Math.round(_8d3)+"%";
}
var _8d4=new Date().getTime();
if(_8d4-this.lastTime>1000){
this.lastTime=_8d4;
var _8d5=_8d4-this.startTime;
_8d5=Math.max(Math.round(_8d5/_8d1-_8d5),0);
this.timeLeft=MochiKit.DateTime.toApproxPeriod(_8d5);
}
if(this.timeLeft!=null&&_8d3>0&&_8d3<100){
text+=" \u2014 "+this.timeLeft+" left";
}
this.setText(text);
};
MochiKit.Widget.ProgressBar.prototype.setText=function(text){
MochiKit.DOM.replaceChildNodes(this.lastChild,text);
};
MochiKit.Widget.TabContainer=function(_8d7){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_8d7,MochiKit.Base.extend(null,arguments,1));
}
var _8d9=MochiKit.DOM.DIV({"class":"widgetTabContainerLabels"});
var _8da=MochiKit.DOM.DIV({"class":"widgetTabContainerContent"});
var o=MochiKit.DOM.DIV(_8d7,_8d9,_8da);
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetTabContainer");
MochiKit.Style.registerSizeConstraints(_8da,"100% - 22","100% - 47");
_8da.resizeContent=MochiKit.Base.noop;
o._selectedIndex=-1;
o.addAll(MochiKit.Base.extend(null,arguments,1));
return o;
};
MochiKit.Widget.TabContainer.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.TabContainer.prototype.getChildNodes=function(){
return MochiKit.Base.extend([],this.lastChild.childNodes);
};
MochiKit.Widget.TabContainer.prototype.addChildNode=function(_8dc){
if(!MochiKit.Widget.isWidget(_8dc,"Pane")){
_8dc=new MochiKit.Widget.Pane(null,_8dc);
}
MochiKit.Style.registerSizeConstraints(_8dc,"100%","100%");
_8dc.hide();
var text=MochiKit.DOM.SPAN(null,_8dc.pageTitle);
if(_8dc.pageCloseable){
var icon=new MochiKit.Widget.Icon({ref:"CLOSE"});
MochiKit.Signal.connect(icon,"onclick",MochiKit.Base.bind("_handleClose",this,_8dc));
}
var _8df=MochiKit.DOM.DIV({"class":"widgetTabContainerLabel"},MochiKit.DOM.DIV({},text,icon));
MochiKit.Signal.connect(_8df,"onclick",MochiKit.Base.bind("selectChild",this,_8dc));
this.firstChild.appendChild(_8df);
this.lastChild.appendChild(_8dc);
if(this._selectedIndex<0){
this.selectChild(0);
}
};
MochiKit.Widget.TabContainer.prototype.removeChildNode=function(_8e0){
var _8e1=this.getChildNodes();
var _8e2=MochiKit.Base.findIdentical(_8e1,_8e0);
if(_8e2<0){
throw new Error("Cannot remove DOM node that is not a TabContainer child");
}
if(this._selectedIndex==_8e2){
_8e0._handleExit();
this._selectedIndex=-1;
}
MochiKit.Widget.destroyWidget(this.firstChild.childNodes[_8e2]);
MochiKit.DOM.removeElement(_8e0);
MochiKit.Widget.emitSignal(_8e0,"onclose");
if(this._selectedIndex<0&&this.getChildNodes().length>0){
this.selectChild((_8e2==0)?0:_8e2-1);
}
};
MochiKit.Widget.TabContainer.prototype.selectedIndex=function(){
return this._selectedIndex;
};
MochiKit.Widget.TabContainer.prototype.selectedChild=function(){
var _8e3=this.getChildNodes();
return (this._selectedIndex<0)?null:_8e3[this._selectedIndex];
};
MochiKit.Widget.TabContainer.prototype.selectChild=function(_8e4){
var _8e5=this.getChildNodes();
if(this._selectedIndex>=0){
var _8e6=this.firstChild.childNodes[this._selectedIndex];
MochiKit.DOM.removeElementClass(_8e6,"selected");
_8e5[this._selectedIndex]._handleExit();
}
var _8e7=-1;
if(_8e4==null){
_8e7=this._selectedIndex;
}else{
if(typeof (_8e4)=="number"){
_8e7=_8e4;
}else{
_8e7=MochiKit.Base.findIdentical(_8e5,_8e4);
}
}
this._selectedIndex=(_8e7<0||_8e7>=_8e5.length)?-1:_8e7;
if(this._selectedIndex>=0){
var _8e6=this.firstChild.childNodes[this._selectedIndex];
MochiKit.DOM.addElementClass(_8e6,"selected");
_8e5[this._selectedIndex]._handleEnter();
}
};
MochiKit.Widget.TabContainer.prototype.resizeContent=function(){
MochiKit.Style.resizeElements(this.lastChild);
var _8e8=this.selectedChild();
if(_8e8!=null){
MochiKit.Style.resizeElements(_8e8);
}
};
MochiKit.Widget.TabContainer.prototype._handleClose=function(_8e9,evt){
evt.stop();
this.removeChildNode(_8e9);
};
MochiKit.Widget.Table=function(_8eb){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_8eb,MochiKit.Base.extend(null,arguments,1));
}
var _8ed=MochiKit.DOM.THEAD({},MochiKit.DOM.TR());
var _8ee=MochiKit.DOM.TBODY();
_8ee.resizeContent=MochiKit.Base.noop;
var _8ef=MochiKit.DOM.TABLE({"class":"widgetTable"},_8ed,_8ee);
var o=MochiKit.DOM.DIV({},_8ef);
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetTable");
o.setAttrs(MochiKit.Base.update({multiple:false},_8eb));
o._rows=[];
o._data=null;
o._keyField=null;
o._selected=[];
o.addAll(MochiKit.Base.extend(null,arguments,1));
MochiKit.Signal.connect(_8ee,"onmousedown",o,"_handleSelect");
return o;
};
MochiKit.Widget.Table.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Table.prototype.setAttrs=function(_8f1){
_8f1=MochiKit.Base.update({},_8f1);
var _8f2=MochiKit.Base.mask(_8f1,["multiple"]);
if(typeof (_8f2.multiple)!="undefined"){
this.multiple=!MochiKit.Base.isFalse(_8f2.multiple);
}
MochiKit.DOM.updateNodeAttributes(this,_8f1);
};
MochiKit.Widget.Table.prototype.getChildNodes=function(){
var _8f3=this.firstChild;
var _8f4=_8f3.firstChild;
var tr=_8f4.firstChild;
return MochiKit.Base.extend([],tr.childNodes);
};
MochiKit.Widget.Table.prototype.addChildNode=function(_8f6){
if(!MochiKit.Widget.isWidget(_8f6,"TableColumn")){
throw new Error("Table widget can only have TableColumn children");
}
this.clear();
var _8f7=this.firstChild;
var _8f8=_8f7.firstChild;
var tr=_8f8.firstChild;
tr.appendChild(_8f6);
};
MochiKit.Widget.Table.prototype.removeChildNode=function(_8fa){
this.clear();
var _8fb=this.firstChild;
var _8fc=_8fb.firstChild;
var tr=_8fc.firstChild;
tr.removeChild(_8fa);
};
MochiKit.Widget.Table.prototype.getColumnIndex=function(_8fe){
var cols=this.getChildNodes();
for(var i=0;i<cols.length;i++){
if(cols[i].field===_8fe){
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
var _90a=this.firstChild;
var _90b=_90a.lastChild;
return _90b.childNodes[row].childNodes[col];
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
var _90e=this.getSelectedIds();
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
this._addSelectedIds(_90e);
}
};
MochiKit.Widget.Table.prototype.sortData=function(_913,_914){
var cols=this.getChildNodes();
var _916=this.getSelectedIds();
this._selected=[];
for(var i=0;i<cols.length;i++){
if(cols[i].field===_913){
if(cols[i].sort=="none"){
return;
}else{
if(_914==null){
_914=cols[i].sort||"asc";
}
}
cols[i].setAttrs({sort:_914});
}else{
if(cols[i].sort!="none"){
cols[i].setAttrs({sort:null});
}
}
}
this._rows.sort(MochiKit.Base.keyComparator(_913));
if(_914=="desc"){
this._rows.reverse();
}
this._renderRows();
this._addSelectedIds(_916);
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
var _91d=this.firstChild.lastChild;
MochiKit.DOM.replaceChildNodes(_91d);
for(var i=0;i<this._rows.length;i++){
var tr=MochiKit.DOM.TR();
if(i%2==1){
MochiKit.DOM.addElementClass(tr,"widgetTableAlt");
}
for(var j=0;j<cols.length;j++){
tr.appendChild(cols[j]._render(this._rows[i]));
}
tr.rowNo=i;
_91d.appendChild(tr);
}
if(this._rows.length==0){
_91d.appendChild(MochiKit.DOM.TR());
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
var _932=row;
if(this._selected.length>0){
_932=this._selected[0];
}
this._unmarkSelection();
this._selected=[];
if(row>=_932){
for(var i=_932;i<=row;i++){
this._selected.push(i);
}
}else{
for(var i=_932;i>=row;i--){
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
MochiKit.Widget.Table.prototype._markSelection=function(_934){
if(_934==null){
for(var i=0;i<this._selected.length;i++){
this._markSelection(this._selected[i]);
}
}else{
var _936=this.firstChild.lastChild;
var tr=_936.childNodes[_934];
MochiKit.DOM.addElementClass(tr,"selected");
}
};
MochiKit.Widget.Table.prototype._unmarkSelection=function(_938){
if(_938==null){
for(var i=0;i<this._selected.length;i++){
this._unmarkSelection(this._selected[i]);
}
}else{
var _93a=this.firstChild.lastChild;
var tr=_93a.childNodes[_938];
MochiKit.DOM.removeElementClass(tr,"selected");
}
};
MochiKit.Widget.TableColumn=function(_93c){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_93c,MochiKit.Base.extend(null,arguments,1));
}
if(_93c.field==null){
throw new Error("The 'field' attribute cannot be null for a TableColumn");
}
var o=MochiKit.DOM.TH();
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetTableColumn");
o.setAttrs(MochiKit.Base.update({title:_93c.field,type:"string",key:false},_93c));
MochiKit.Signal.connect(o,"onclick",o,"_handleClick");
return o;
};
MochiKit.Widget.TableColumn.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.TableColumn.prototype.setAttrs=function(_93f){
_93f=MochiKit.Base.update({},_93f);
var _940=MochiKit.Base.mask(_93f,["title","field","type","sort","maxLength","key","tooltip"]);
if(typeof (_940.title)!="undefined"){
MochiKit.DOM.replaceChildNodes(this,_940.title);
}
if(typeof (_940.field)!="undefined"){
this.field=_940.field;
}
if(typeof (_940.type)!="undefined"){
this.type=_940.type;
}
if(typeof (_940.sort)!="undefined"){
this.sort=_940.sort;
if(_940.sort==null||_940.sort=="none"){
MochiKit.DOM.removeElementClass(this,"sortAsc");
MochiKit.DOM.removeElementClass(this,"sortDesc");
}else{
if(_940.sort=="desc"){
MochiKit.DOM.removeElementClass(this,"sortAsc");
MochiKit.DOM.addElementClass(this,"sortDesc");
}else{
MochiKit.DOM.removeElementClass(this,"sortDesc");
MochiKit.DOM.addElementClass(this,"sortAsc");
}
}
}
if(typeof (_940.maxLength)!="undefined"){
this.maxLength=parseInt(_940.maxLength);
}
if(typeof (_940.key)!="undefined"){
this.key=!MochiKit.Base.isFalse(_940.key);
}
if(typeof (_940.tooltip)!="undefined"){
this.title=_940.tooltip;
}
MochiKit.DOM.updateNodeAttributes(this,_93f);
};
MochiKit.Widget.TableColumn.prototype._map=function(src,dst){
var _943=src[this.field];
if(_943!=null){
if(this._key){
dst.$id=_943;
}
switch(this.type){
case "number":
if(_943 instanceof Number){
_943=_943.valueOf();
}else{
if(typeof (_943)!="number"){
_943=parseFloat(_943);
}
}
break;
case "date":
if(_943 instanceof Date){
_943=MochiKit.DateTime.toISODate(_943);
}else{
_943=MochiKit.Format.truncate(_943,10);
}
break;
case "datetime":
if(_943 instanceof Date){
_943=MochiKit.DateTime.toISOTimestamp(_943);
}else{
_943=MochiKit.Format.truncate(_943,19);
}
break;
case "time":
if(_943 instanceof Date){
_943=MochiKit.DateTime.toISOTime(_943);
}else{
if(typeof (_943)!="string"){
_943=_943.toString();
}
if(_943.length>8){
_943=_943.substring(_943.length-8);
}
}
break;
default:
if(typeof (_943)!="string"){
_943=_943.toString();
}
}
}
dst[this.field]=_943;
};
MochiKit.Widget.TableColumn.prototype._render=function(obj){
var td=MochiKit.DOM.TD();
var _946=obj[this.field];
if(_946==null){
_946="";
}else{
if(typeof (_946)!="string"){
_946=_946.toString();
}
}
if(this.maxLength&&this.maxLength<_946.length){
td.title=_946;
_946=MochiKit.Format.truncate(_946,this.maxLength,"...");
}
if(this.type=="html"){
td.innerHTML=_946;
}else{
td.appendChild(MochiKit.DOM.createTextNode(_946));
}
return td;
};
MochiKit.Widget.TableColumn.prototype._handleClick=function(){
if(this.parentNode!=null){
var dir=(this.sort=="asc")?"desc":"asc";
var tr=this.parentNode;
var _949=tr.parentNode;
var _94a=_949.parentNode;
_94a.parentNode.sortData(this.field,dir);
}
};
MochiKit.Widget.TextArea=function(_94b){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_94b,MochiKit.Base.extend(null,arguments,1));
}
var o=MochiKit.DOM.TEXTAREA();
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetTextArea");
o.focused=false;
o.setAttrs(MochiKit.Base.update({helpText:""},_94b));
o.addAll(MochiKit.Base.extend(null,arguments,1));
MochiKit.Signal.connect(o,"onfocus",o,"_handleFocus");
MochiKit.Signal.connect(o,"onblur",o,"_handleFocus");
return o;
};
MochiKit.Widget.TextArea.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.TextArea.prototype.setAttrs=function(_94e){
_94e=MochiKit.Base.update({},_94e);
var _94f=MochiKit.Base.mask(_94e,["helpText","value"]);
if(typeof (_94f.helpText)!="undefined"){
this.helpText=_94f.helpText;
}
if(typeof (_94f.value)!="undefined"){
this.value=this.storedValue=_94f.value;
}
if(!this.focused&&MochiKit.Format.strip(this.value)==""){
this.value=this.helpText;
this.addClass("widgetTextAreaHelp");
}
MochiKit.DOM.updateNodeAttributes(this,_94e);
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
MochiKit.Widget.TextField=function(_951){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_951,MochiKit.Base.extend(null,arguments,1));
}
var text="";
if(_951!=null&&_951.value!=null){
text=_951.value;
}
for(var i=1;i<arguments.length;i++){
text+=arguments[i].toString();
}
var o=MochiKit.DOM.INPUT({value:text});
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetTextField");
o.focused=false;
o._popupCreated=false;
o.setAttrs(MochiKit.Base.update({helpText:"",value:text},_951));
MochiKit.Signal.connect(o,"onfocus",o,"_handleFocus");
MochiKit.Signal.connect(o,"onblur",o,"_handleFocus");
return o;
};
MochiKit.Widget.TextField.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.TextField.prototype.setAttrs=function(_956){
_956=MochiKit.Base.update({},_956);
var _957=MochiKit.Base.mask(_956,["helpText","value"]);
if(typeof (_957.helpText)!="undefined"){
this.helpText=_957.helpText;
}
if(typeof (_957.value)!="undefined"){
this.value=this.storedValue=_957.value;
}
if(!this.focused&&MochiKit.Format.strip(this.value)==""){
this.value=this.helpText;
this.addClass("widgetTextFieldHelp");
}
MochiKit.DOM.updateNodeAttributes(this,_956);
};
MochiKit.Widget.TextField.prototype.reset=function(){
this.setAttrs({value:this.defaultValue});
};
MochiKit.Widget.TextField.prototype.getValue=function(){
return (this.focused)?this.value:this.storedValue;
};
MochiKit.Widget.TextField.prototype.popup=function(_958){
if(!this._popupCreated&&_958){
this.autocomplete="off";
this._popupCreated=true;
var _959={"max-height":"300px","width":"300px"};
var _95a=new MochiKit.Widget.Popup({style:_959});
MochiKit.DOM.insertSiblingNodesAfter(this,_95a);
MochiKit.DOM.makePositioned(this.parentNode);
var pos={x:this.offsetLeft+1,y:this.offsetTop+this.offsetHeight+1};
MochiKit.Style.setElementPosition(_95a,pos);
MochiKit.Signal.connect(this,"onkeydown",this,"_handleKeyDown");
MochiKit.Signal.connect(_95a,"onclick",this,"_handleClick");
}
return (this._popupCreated)?this.nextSibling:null;
};
MochiKit.Widget.TextField.prototype.showPopup=function(_95c,_95d){
var _95e=this.popup(true);
if(_95d){
_95e.hide();
MochiKit.DOM.replaceChildNodes(_95e);
for(var i=0;i<_95d.length;i++){
if(typeof (_95d[i])=="string"){
var node=MochiKit.DOM.DIV({"class":"widgetPopupItem"},"\xbb "+_95d[i]);
_95e.appendChild(node);
}else{
MochiKit.DOM.appendChildNodes(_95e,_95d[i]);
}
}
}
if(_95e.childNodes.length>0){
_95e.setAttrs(MochiKit.Base.update({delay:30000},_95c));
_95e.show();
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
var _962=this.popup();
if(_962!=null&&!_962.isHidden()){
_962.setAttrs({delay:250});
}
}
}
};
MochiKit.Widget.TextField.prototype._handleKeyDown=function(evt){
var _964=this.popup(false);
if(_964!=null){
_964.resetDelay();
if(_964.isHidden()){
switch(evt.key().string){
case "KEY_ESCAPE":
evt.stop();
break;
case "KEY_ARROW_UP":
case "KEY_ARROW_DOWN":
this.showPopup();
_964.selectChild(0);
evt.stop();
break;
}
}else{
switch(evt.key().string){
case "KEY_TAB":
case "KEY_ENTER":
_964.hide();
evt.stop();
if(_964.selectedChild()!=null){
MochiKit.Widget.emitSignal(this,"onpopupselect");
}
break;
case "KEY_ESCAPE":
_964.hide();
evt.stop();
break;
case "KEY_ARROW_UP":
case "KEY_ARROW_DOWN":
_964.selectMove(evt.key().string=="KEY_ARROW_UP"?-1:1);
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
MochiKit.Widget.Tree=function(_966){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_966,MochiKit.Base.extend(null,arguments,1));
}
var o=MochiKit.DOM.DIV(_966);
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetTree");
o.resizeContent=MochiKit.Base.noop;
o.selectedPath=null;
o.addAll(MochiKit.Base.extend(null,arguments,1));
return o;
};
MochiKit.Widget.Tree.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Tree.prototype.addChildNode=function(_969){
if(!MochiKit.Widget.isWidget(_969,"TreeNode")){
throw new Error("Tree widget can only have TreeNode children");
}
this.appendChild(_969);
};
MochiKit.Widget.Tree.prototype.findRoot=function(name){
var _96b=this.getChildNodes();
for(var i=0;i<_96b.length;i++){
if(_96b[i].name==name){
return _96b[i];
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
MochiKit.Widget.Tree.prototype.expandAll=function(_972){
if(typeof (_972)!=="number"){
_972=10;
}
var _973=this.getChildNodes();
for(var i=0;_972>0&&i<_973.length;i++){
_973[i].expandAll(_972-1);
}
};
MochiKit.Widget.Tree.prototype.collapseAll=function(_975){
if(typeof (_975)!=="number"){
_975=0;
}
var _976=this.getChildNodes();
for(var i=0;i<_976.length;i++){
_976[i].collapseAll(_975-1);
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
var _97b=node.findChild(path[i]);
if(_97b==null){
_97b=new MochiKit.Widget.TreeNode({name:path[i]});
node.addChildNode(_97b);
}
node=_97b;
}
return node;
};
MochiKit.Widget.TreeNode=function(_97c){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_97c,MochiKit.Base.extend(null,arguments,1));
}
var icon=MochiKit.Widget.Icon({ref:"BLANK"});
var _97f=MochiKit.DOM.SPAN({"class":"widgetTreeNodeText"});
var div=MochiKit.DOM.DIV({"class":"widgetTreeNodeLabel"},icon,_97f);
var o=MochiKit.DOM.DIV({},div);
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetTreeNode");
_97c=MochiKit.Base.update({name:"Tree Node",folder:false},_97c);
if(typeof (_97c.icon)=="undefined"){
_97c.icon=_97c.folder?"FOLDER":"DOCUMENT";
}
o.setAttrs(_97c);
o.addAll(MochiKit.Base.extend(null,arguments,1));
MochiKit.Signal.connect(icon,"onclick",o,"toggle");
MochiKit.Signal.connect(div,"onclick",o,"select");
return o;
};
MochiKit.Widget.TreeNode.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.TreeNode.prototype._container=function(_982){
var _983=this.lastChild;
if(MochiKit.DOM.hasElementClass(_983,"widgetTreeNodeContainer")){
return _983;
}else{
if(_982){
_983=MochiKit.DOM.DIV({"class":"widgetTreeNodeContainer widgetHidden"});
this.appendChild(_983);
var _984=this.firstChild.firstChild;
_984.setAttrs({ref:"PLUS"});
this.setAttrs({icon:"FOLDER"});
return _983;
}else{
return null;
}
}
};
MochiKit.Widget.TreeNode.prototype.setAttrs=function(_985){
_985=MochiKit.Base.update({},_985);
var _986=MochiKit.Base.mask(_985,["name","folder","icon"]);
if(typeof (_986.name)!="undefined"){
this.name=_986.name;
var node=this.firstChild.firstChild;
while(!MochiKit.DOM.hasElementClass(node,"widgetTreeNodeText")){
node=node.nextSibling;
}
MochiKit.DOM.replaceChildNodes(node,_986.name);
}
if(!MochiKit.Base.isFalse(_986.folder)){
this._container(true);
}
if(typeof (_986.icon)!="undefined"){
var _988=this.firstChild.firstChild;
var _989=_988.nextSibling;
if(!MochiKit.Widget.isWidget(_989,"Icon")){
_989=null;
}
if(_989==null&&_986.icon!=null){
if(typeof (_986.icon)==="string"){
_986.icon=new MochiKit.Widget.Icon({ref:_986.icon});
}else{
if(!MochiKit.Widget.isWidget(_986.icon,"Icon")){
_986.icon=new MochiKit.Widget.Icon(_986.icon);
}
}
MochiKit.DOM.insertSiblingNodesAfter(_988,_986.icon);
}else{
if(_989!=null&&_986.icon!=null){
if(MochiKit.Widget.isWidget(_986.icon,"Icon")){
MochiKit.DOM.swapDOM(_989,_986.icon);
}else{
if(typeof (_986.icon)==="string"){
_989.setAttrs({ref:_986.icon});
}else{
_989.setAttrs(_986.icon);
}
}
}else{
if(_989!=null&&_986.icon==null){
MochiKit.Widget.destroyWidget(_989);
}
}
}
}
MochiKit.DOM.updateNodeAttributes(this,_985);
};
MochiKit.Widget.TreeNode.prototype.getChildNodes=function(){
var _98a=this._container();
if(_98a==null){
return [];
}else{
return MochiKit.Base.extend([],_98a.childNodes);
}
};
MochiKit.Widget.TreeNode.prototype.addChildNode=function(_98b){
if(!MochiKit.Widget.isWidget(_98b,"TreeNode")){
throw new Error("TreeNode widget can only have TreeNode children");
}
this._container(true).appendChild(_98b);
};
MochiKit.Widget.TreeNode.prototype.removeChildNode=function(_98c){
var _98d=this._container();
if(_98d!=null){
_98d.removeChild(_98c);
}
};
MochiKit.Widget.TreeNode.prototype.isFolder=function(){
return this._container()!=null;
};
MochiKit.Widget.TreeNode.prototype.isExpanded=function(){
var _98e=this._container();
return _98e!=null&&!MochiKit.DOM.hasElementClass(_98e,"widgetHidden");
};
MochiKit.Widget.TreeNode.prototype.isSelected=function(){
return MochiKit.DOM.hasElementClass(this.firstChild,"selected");
};
MochiKit.Widget.TreeNode.prototype.tree=function(){
var _98f=this.parent();
if(_98f!=null){
return _98f.tree();
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
var _991=this.parent();
if(_991==null){
return [this.name];
}else{
var path=_991.path();
path.push(this.name);
return path;
}
};
MochiKit.Widget.TreeNode.prototype.findChild=function(name){
var _994=this.getChildNodes();
for(var i=0;i<_994.length;i++){
if(_994[i].name==name){
return _994[i];
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
var _99b=this.parent();
if(_99b!=null&&!_99b.isExpanded()){
_99b.expand();
}
var _99c=this._container();
if(_99c!=null&&!this.isExpanded()){
var _99d=this.firstChild.firstChild;
_99d.setAttrs({ref:"MINUS"});
MochiKit.DOM.removeElementClass(_99c,"widgetHidden");
var tree=this.tree();
if(tree!=null){
tree._emitExpand(this);
}
}
};
MochiKit.Widget.TreeNode.prototype.expandAll=function(_99f){
if(typeof (_99f)!=="number"){
_99f=10;
}
this.expand();
var _9a0=this.getChildNodes();
for(var i=0;_99f>0&&i<_9a0.length;i++){
_9a0[i].expandAll(_99f-1);
}
};
MochiKit.Widget.TreeNode.prototype.collapse=function(){
var _9a2=this._container();
if(_9a2!=null&&this.isExpanded()){
var _9a3=this.firstChild.firstChild;
_9a3.setAttrs({ref:"PLUS"});
MochiKit.DOM.addElementClass(_9a2,"widgetHidden");
var tree=this.tree();
if(tree!=null){
tree._emitExpand(this);
}
}
};
MochiKit.Widget.TreeNode.prototype.collapseAll=function(_9a5){
if(typeof (_9a5)!=="number"){
_9a5=0;
}
if(_9a5<=0){
this.collapse();
}
var _9a6=this.getChildNodes();
for(var i=0;i<_9a6.length;i++){
_9a6[i].collapseAll(_9a5-1);
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
MochiKit.Widget.Wizard=function(_9a9){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_9a9,MochiKit.Base.extend(null,arguments,1));
}
var o=MochiKit.DOM.DIV(_9a9);
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetWizard");
o._selectedIndex=-1;
o.appendChild(MochiKit.DOM.H3({"class":"widgetWizardTitle"}));
var _9ac=MochiKit.Widget.Button({style:{"margin-right":"10px"}},MochiKit.Widget.Icon({ref:"CANCEL"})," Cancel");
var _9ad=MochiKit.Widget.Button({style:{"margin-right":"10px"}},MochiKit.Widget.Icon({ref:"PREVIOUS"})," Previous");
var _9ae=MochiKit.Widget.Button({},"Next ",MochiKit.Widget.Icon({ref:"NEXT"}));
var _9af=MochiKit.Widget.Button({highlight:true},MochiKit.Widget.Icon({ref:"OK"})," Finish");
_9ac.hide();
o.appendChild(MochiKit.DOM.DIV({"class":"widgetWizardButtons"},_9ac,_9ad,_9ae,_9af));
MochiKit.Signal.connect(_9ac,"onclick",o,"cancel");
MochiKit.Signal.connect(_9ad,"onclick",o,"previous");
MochiKit.Signal.connect(_9ae,"onclick",o,"next");
MochiKit.Signal.connect(_9af,"onclick",o,"done");
o._updateStatus();
o.addAll(MochiKit.Base.extend(null,arguments,1));
return o;
};
MochiKit.Widget.Wizard.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Wizard.prototype.getChildNodes=function(){
return MochiKit.Base.extend([],this.childNodes,2);
};
MochiKit.Widget.Wizard.prototype.addChildNode=function(_9b0){
if(!MochiKit.Widget.isWidget(_9b0,"Pane")){
_9b0=new MochiKit.Widget.Pane(null,_9b0);
}
MochiKit.Style.registerSizeConstraints(_9b0,"100%","100%-65");
_9b0.hide();
this.appendChild(_9b0);
if(this.getChildNodes().length==1){
this.activatePage(0);
}else{
this._updateStatus();
}
};
MochiKit.Widget.Wizard.prototype._updateStatus=function(){
var h3=this.childNodes[0];
var _9b2=this.childNodes[1].childNodes[0];
var _9b3=this.childNodes[1].childNodes[1];
var _9b4=this.childNodes[1].childNodes[2];
var _9b5=this.childNodes[1].childNodes[3];
var page=this.activePage();
var _9b7=MochiKit.Widget.Pane.FORWARD;
var _9b8=null;
var info="(No pages available)";
var icon=null;
if(page!=null){
_9b7=page.pageStatus||MochiKit.Widget.Pane.ANY;
_9b8=page.pageTitle;
info=" (Step "+(this._selectedIndex+1)+" of "+this.getChildNodes().length+")";
}
if(_9b7===MochiKit.Widget.Pane.WORKING){
_9b2.show();
_9b3.hide();
icon={ref:"LOADING","class":"widgetWizardWait"};
icon=MochiKit.Widget.Icon(icon);
}else{
_9b2.hide();
_9b3.show();
}
if(this._selectedIndex>=this.getChildNodes().length-1){
_9b4.hide();
_9b5.show();
}else{
_9b4.show();
_9b5.hide();
}
_9b3.disabled=(this._selectedIndex<=0)||!_9b7.previous;
_9b4.disabled=!_9b7.next;
_9b5.disabled=!_9b7.next;
info=MochiKit.DOM.SPAN({"class":"widgetWizardInfo"},info);
MochiKit.DOM.replaceChildNodes(h3,icon,_9b8,info);
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
MochiKit.Widget.Wizard.prototype.activatePage=function(_9bb){
if(typeof (_9bb)=="number"){
var _9bc=_9bb;
var page=this.childNodes[_9bc+2];
}else{
var page=_9bb;
var _9bc=MochiKit.Base.findIdentical(this.childNodes,page,2)-2;
}
if(_9bc<0||_9bc>=this.getChildNodes().length){
throw new RangeError("Page index out of bounds: "+_9bc);
}
var _9be=this.activePage();
if(_9be!=null){
if(!_9be._handleExit({validateForm:this._selectedIndex<_9bc})){
return;
}
}
this._selectedIndex=_9bc;
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

