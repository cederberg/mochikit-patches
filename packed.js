if(typeof (MochiKit)=="undefined"){
MochiKit={};
}
if(typeof (MochiKit.__export__)=="undefined"){
MochiKit.__export__=true;
}
if(typeof (MochiKit.Base)=="undefined"){
MochiKit.Base={};
}
MochiKit.Base._module=function(_1,_2,_3){
if(!(_1 in MochiKit)){
MochiKit[_1]={};
}
var _4=MochiKit[_1];
_4.NAME="MochiKit."+_1;
_4.VERSION=_2;
_4.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
_4.toString=function(){
return this.__repr__();
};
for(var i=0;i<_3.length;i++){
if(!(_3[i] in MochiKit)){
throw "MochiKit."+_1+" depends on MochiKit."+_3[i]+"!";
}
}
};
MochiKit.Base._module("Base","1.5",[]);
MochiKit.Base.update=function(_6,_7){
if(_6===null||_6===undefined){
_6={};
}
for(var i=1;i<arguments.length;i++){
var o=arguments[i];
if(typeof (o)!="undefined"&&o!==null){
for(var k in o){
_6[k]=o[k];
}
}
}
return _6;
};
MochiKit.Base.update(MochiKit.Base,{camelize:function(_b){
var _c=_b.split("-");
var cc=_c[0];
for(var i=1;i<_c.length;i++){
cc+=_c[i].charAt(0).toUpperCase()+_c[i].substring(1);
}
return cc;
},counter:function(n){
if(arguments.length===0){
n=1;
}
return function(){
return n++;
};
},clone:function(obj){
var me=arguments.callee;
if(arguments.length==1){
me.prototype=obj;
return new me();
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
var _1a=m.extend(null,arguments);
while(_1a.length){
var o=_1a.shift();
if(o&&typeof (o)=="object"&&typeof (o.length)=="number"){
for(var i=o.length-1;i>=0;i--){
_1a.unshift(o[i]);
}
}else{
res.push(o);
}
}
return res;
},extend:function(_1d,obj,_1f){
if(!_1f){
_1f=0;
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
if(!_1d){
_1d=[];
}
for(var i=_1f;i<l;i++){
_1d.push(obj[i]);
}
}
return _1d;
},updatetree:function(_22,obj){
if(_22===null||_22===undefined){
_22={};
}
for(var i=1;i<arguments.length;i++){
var o=arguments[i];
if(typeof (o)!="undefined"&&o!==null){
for(var k in o){
var v=o[k];
if(typeof (_22[k])=="object"&&typeof (v)=="object"){
arguments.callee(_22[k],v);
}else{
_22[k]=v;
}
}
}
}
return _22;
},setdefault:function(_28,obj){
if(_28===null||_28===undefined){
_28={};
}
for(var i=1;i<arguments.length;i++){
var o=arguments[i];
for(var k in o){
if(!(k in _28)){
_28[k]=o[k];
}
}
}
return _28;
},keys:function(obj){
var _2e=[];
for(var _2f in obj){
_2e.push(_2f);
}
return _2e;
},values:function(obj){
var _31=[];
for(var _32 in obj){
_31.push(obj[_32]);
}
return _31;
},items:function(obj){
var _34=[];
var e;
for(var _36 in obj){
var v;
try{
v=obj[_36];
}
catch(e){
continue;
}
_34.push([_36,v]);
}
return _34;
},_newNamedError:function(_38,_39,_3a){
_3a.prototype=new MochiKit.Base.NamedError(_38.NAME+"."+_39);
_38[_39]=_3a;
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
}},forwardCall:function(_78){
return function(){
return this[_78].apply(this,arguments);
};
},itemgetter:function(_79){
return function(arg){
return arg[_79];
};
},bool:function(_7b){
if(typeof (_7b)==="boolean"||_7b instanceof Boolean){
return _7b.valueOf();
}else{
if(typeof (_7b)==="string"||_7b instanceof String){
return _7b.length>0&&_7b!="false"&&_7b!="null"&&_7b!="undefined"&&_7b!="0";
}else{
if(typeof (_7b)==="number"||_7b instanceof Number){
return !isNaN(_7b)&&_7b!=0;
}else{
if(_7b!=null&&typeof (_7b.length)==="number"){
return _7b.length!==0;
}else{
return _7b!=null;
}
}
}
}
},typeMatcher:function(){
var _7c={};
for(var i=0;i<arguments.length;i++){
var typ=arguments[i];
_7c[typ]=typ;
}
return function(){
for(var i=0;i<arguments.length;i++){
if(!(typeof (arguments[i]) in _7c)){
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
var _8d=[];
for(var i=1;i<arguments.length;i++){
_8d.push(fn(arguments[i]));
}
return _8d;
},map:function(fn,lst){
var m=MochiKit.Base;
var itr=MochiKit.Iter;
var _93=m.isArrayLike;
if(arguments.length<=2){
if(!_93(lst)){
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
var _94=[];
for(var i=0;i<lst.length;i++){
_94.push(fn(lst[i]));
}
return _94;
}else{
if(fn===null){
fn=Array;
}
var _96=null;
for(var i=1;i<arguments.length;i++){
if(!_93(arguments[i])){
if(itr){
return itr.list(itr.imap.apply(null,arguments));
}else{
throw new TypeError("Argument not an array-like and MochiKit.Iter not present");
}
}
var l=arguments[i].length;
if(_96===null||_96>l){
_96=l;
}
}
_94=[];
for(var i=0;i<_96;i++){
var _98=[];
for(var j=1;j<arguments.length;j++){
_98.push(arguments[j][i]);
}
_94.push(fn.apply(this,_98));
}
return _94;
}
},xfilter:function(fn){
var _9b=[];
if(fn===null){
fn=MochiKit.Base.operator.truth;
}
for(var i=1;i<arguments.length;i++){
var o=arguments[i];
if(fn(o)){
_9b.push(o);
}
}
return _9b;
},filter:function(fn,lst,_a0){
var _a1=[];
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
return Array.prototype.filter.call(lst,fn,_a0);
}else{
if(typeof (_a0)=="undefined"||_a0===null){
for(var i=0;i<lst.length;i++){
var o=lst[i];
if(fn(o)){
_a1.push(o);
}
}
}else{
for(var i=0;i<lst.length;i++){
o=lst[i];
if(fn.call(_a0,o)){
_a1.push(o);
}
}
}
}
return _a1;
},_wrapDumbFunction:function(_a5){
return function(){
switch(arguments.length){
case 0:
return _a5();
case 1:
return _a5(arguments[0]);
case 2:
return _a5(arguments[0],arguments[1]);
case 3:
return _a5(arguments[0],arguments[1],arguments[2]);
}
var _a6=[];
for(var i=0;i<arguments.length;i++){
_a6.push("arguments["+i+"]");
}
return eval("(func("+_a6.join(",")+"))");
};
},methodcaller:function(_a8){
var _a9=MochiKit.Base.extend(null,arguments,1);
if(typeof (_a8)=="function"){
return function(obj){
return _a8.apply(obj,_a9);
};
}else{
return function(obj){
return obj[_a8].apply(obj,_a9);
};
}
},method:function(_ac,_ad){
var m=MochiKit.Base;
return m.bind.apply(this,m.extend([_ad,_ac],arguments,2));
},compose:function(f1,f2){
var _b1=[];
var m=MochiKit.Base;
if(arguments.length===0){
throw new TypeError("compose() requires at least one argument");
}
for(var i=0;i<arguments.length;i++){
var fn=arguments[i];
if(typeof (fn)!="function"){
throw new TypeError(m.repr(fn)+" is not a function");
}
_b1.push(fn);
}
return function(){
var _b5=arguments;
for(var i=_b1.length-1;i>=0;i--){
_b5=[_b1[i].apply(this,_b5)];
}
return _b5[0];
};
},bind:function(_b7,_b8){
if(typeof (_b7)=="string"){
_b7=_b8[_b7];
}
var _b9=_b7.im_func;
var _ba=_b7.im_preargs;
var _bb=_b7.im_self;
var m=MochiKit.Base;
if(typeof (_b7)=="function"&&typeof (_b7.apply)=="undefined"){
_b7=m._wrapDumbFunction(_b7);
}
if(typeof (_b9)!="function"){
_b9=_b7;
}
if(typeof (_b8)!="undefined"){
_bb=_b8;
}
if(typeof (_ba)=="undefined"){
_ba=[];
}else{
_ba=_ba.slice();
}
m.extend(_ba,arguments,2);
var _bd=function(){
var _be=arguments;
var me=arguments.callee;
if(me.im_preargs.length>0){
_be=m.concat(me.im_preargs,_be);
}
var _c0=me.im_self;
if(!_c0){
_c0=this;
}
return me.im_func.apply(_c0,_be);
};
_bd.im_self=_bb;
_bd.im_func=_b9;
_bd.im_preargs=_ba;
return _bd;
},bindLate:function(_c1,_c2){
var m=MochiKit.Base;
var _c4=arguments;
if(typeof (_c1)==="string"){
_c4=m.extend([m.forwardCall(_c1)],arguments,1);
return m.bind.apply(this,_c4);
}
return m.bind.apply(this,_c4);
},bindMethods:function(_c5){
var _c6=MochiKit.Base.bind;
for(var k in _c5){
var _c8=_c5[k];
if(typeof (_c8)=="function"){
_c5[k]=_c6(_c8,_c5);
}
}
},registerComparator:function(_c9,_ca,_cb,_cc){
MochiKit.Base.comparatorRegistry.register(_c9,_ca,_cb,_cc);
},_primitives:{"boolean":true,"string":true,"number":true},compare:function(a,b){
if(a==b){
return 0;
}
var _cf=(typeof (a)=="undefined"||a===null);
var _d0=(typeof (b)=="undefined"||b===null);
if(_cf&&_d0){
return 0;
}else{
if(_cf){
return -1;
}else{
if(_d0){
return 1;
}
}
}
var m=MochiKit.Base;
var _d2=m._primitives;
if(!(typeof (a) in _d2&&typeof (b) in _d2)){
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
var _d3=m.repr;
throw new TypeError(_d3(a)+" and "+_d3(b)+" can not be compared");
},compareDateLike:function(a,b){
return MochiKit.Base.compare(a.getTime(),b.getTime());
},compareArrayLike:function(a,b){
var _d8=MochiKit.Base.compare;
var _d9=a.length;
var _da=0;
if(_d9>b.length){
_da=1;
_d9=b.length;
}else{
if(_d9<b.length){
_da=-1;
}
}
for(var i=0;i<_d9;i++){
var cmp=_d8(a[i],b[i]);
if(cmp){
return cmp;
}
}
return _da;
},registerRepr:function(_dd,_de,_df,_e0){
MochiKit.Base.reprRegistry.register(_dd,_de,_df,_e0);
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
var _e2=(o+"");
}
catch(e){
return "["+typeof (o)+"]";
}
if(typeof (o)=="function"){
_e2=_e2.replace(/^\s+/,"").replace(/\s+/g," ");
_e2=_e2.replace(/,(\S)/,", $1");
var idx=_e2.indexOf("{");
if(idx!=-1){
_e2=_e2.substr(0,idx)+"{...}";
}
}
return _e2;
},reprArrayLike:function(o){
var m=MochiKit.Base;
return "["+m.map(m.repr,o).join(", ")+"]";
},reprString:function(o){
return ("\""+o.replace(/(["\\])/g,"\\$1")+"\"").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\v]/g,"\\v").replace(/[\r]/g,"\\r");
},reprNumber:function(o){
return o+"";
},registerJSON:function(_e8,_e9,_ea,_eb){
MochiKit.Base.jsonRegistry.register(_e8,_e9,_ea,_eb);
},evalJSON:function(){
return eval("("+MochiKit.Base._filterJSON(arguments[0])+")");
},_filterJSON:function(s){
var m=s.match(/^\s*\/\*(.*)\*\/\s*$/);
if(m){
return m[1];
}
return s;
},serializeJSON:function(o){
var _ef=typeof (o);
if(_ef=="number"||_ef=="boolean"){
return o+"";
}else{
if(o===null){
return "null";
}else{
if(_ef=="string"){
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
var _f5;
if(typeof (o.__json__)=="function"){
_f5=o.__json__();
if(o!==_f5){
return me(_f5);
}
}
if(typeof (o.json)=="function"){
_f5=o.json();
if(o!==_f5){
return me(_f5);
}
}
if(_ef!="function"&&typeof (o.length)=="number"){
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
_f5=m.jsonRegistry.match(o);
if(o!==_f5){
return me(_f5);
}
}
catch(e){
if(e!=m.NotFound){
throw e;
}
}
if(_ef=="undefined"){
throw new TypeError("undefined can not be serialized as JSON");
}
if(_ef=="function"){
return null;
}
res=[];
for(var k in o){
var _f9;
if(typeof (k)=="number"){
_f9="\""+k+"\"";
}else{
if(typeof (k)=="string"){
_f9=me(k);
}else{
continue;
}
}
val=me(o[k]);
if(typeof (val)!="string"){
continue;
}
res.push(_f9+":"+val);
}
return "{"+res.join(", ")+"}";
},objEqual:function(a,b){
return (MochiKit.Base.compare(a,b)===0);
},arrayEqual:function(_fc,arr){
if(_fc.length!=arr.length){
return false;
}
return (MochiKit.Base.compare(_fc,arr)===0);
},concat:function(){
var _fe=[];
var _ff=MochiKit.Base.extend;
for(var i=0;i<arguments.length;i++){
_ff(_fe,arguments[i]);
}
return _fe;
},keyComparator:function(key){
var m=MochiKit.Base;
var _103=m.compare;
if(arguments.length==1){
return function(a,b){
return _103(a[key],b[key]);
};
}
var _106=m.extend(null,arguments);
return function(a,b){
var rval=0;
for(var i=0;(rval===0)&&(i<_106.length);i++){
var key=_106[i];
rval=_103(a[key],b[key]);
}
return rval;
};
},reverseKeyComparator:function(key){
var _10d=MochiKit.Base.keyComparator.apply(this,arguments);
return function(a,b){
return _10d(b,a);
};
},partial:function(func){
var m=MochiKit.Base;
return m.bind.apply(this,m.extend([func,undefined],arguments,1));
},listMinMax:function(_112,lst){
if(lst.length===0){
return null;
}
var cur=lst[0];
var _115=MochiKit.Base.compare;
for(var i=1;i<lst.length;i++){
var o=lst[i];
if(_115(o,cur)==_112){
cur=o;
}
}
return cur;
},objMax:function(){
return MochiKit.Base.listMinMax(1,arguments);
},objMin:function(){
return MochiKit.Base.listMinMax(-1,arguments);
},findIdentical:function(lst,_119,_11a,end){
if(typeof (end)=="undefined"||end===null){
end=lst.length;
}
if(typeof (_11a)=="undefined"||_11a===null){
_11a=0;
}
for(var i=_11a;i<end;i++){
if(lst[i]===_119){
return i;
}
}
return -1;
},mean:function(){
var sum=0;
var m=MochiKit.Base;
var args=m.extend(null,arguments);
var _120=args.length;
while(args.length){
var o=args.shift();
if(o&&typeof (o)=="object"&&typeof (o.length)=="number"){
_120+=o.length-1;
for(var i=o.length-1;i>=0;i--){
sum+=o[i];
}
}else{
sum+=o;
}
}
if(_120<=0){
throw new TypeError("mean() requires at least one argument");
}
return sum/_120;
},median:function(){
var data=MochiKit.Base.flattenArguments(arguments);
if(data.length===0){
throw new TypeError("median() requires at least one argument");
}
data.sort(compare);
if(data.length%2==0){
var _124=data.length/2;
return (data[_124]+data[_124-1])/2;
}else{
return data[(data.length-1)/2];
}
},findValue:function(lst,_126,_127,end){
if(typeof (end)=="undefined"||end===null){
end=lst.length;
}
if(typeof (_127)=="undefined"||_127===null){
_127=0;
}
var cmp=MochiKit.Base.compare;
for(var i=_127;i<end;i++){
if(cmp(lst[i],_126)===0){
return i;
}
}
return -1;
},nodeWalk:function(node,_12c){
var _12d=[node];
var _12e=MochiKit.Base.extend;
while(_12d.length){
var res=_12c(_12d.shift());
if(res){
_12e(_12d,res);
}
}
},nameFunctions:function(_130){
var base=_130.NAME;
if(typeof (base)=="undefined"){
base="";
}else{
base=base+".";
}
for(var name in _130){
var o=_130[name];
if(typeof (o)=="function"&&typeof (o.NAME)=="undefined"){
try{
o.NAME=base+name;
}
catch(e){
}
}
}
},queryString:function(_134,_135){
if(typeof (MochiKit.DOM)!="undefined"&&arguments.length==1&&(typeof (_134)=="string"||(typeof (_134.nodeType)!="undefined"&&_134.nodeType>0))){
var kv=MochiKit.DOM.formContents(_134);
_134=kv[0];
_135=kv[1];
}else{
if(arguments.length==1){
if(typeof (_134.length)=="number"&&_134.length==2){
return arguments.callee(_134[0],_134[1]);
}
var o=_134;
_134=[];
_135=[];
for(var k in o){
var v=o[k];
if(typeof (v)=="function"){
continue;
}else{
if(MochiKit.Base.isArrayLike(v)){
for(var i=0;i<v.length;i++){
_134.push(k);
_135.push(v[i]);
}
}else{
_134.push(k);
_135.push(v);
}
}
}
}
}
var rval=[];
var len=Math.min(_134.length,_135.length);
var _13d=MochiKit.Base.urlEncode;
for(var i=0;i<len;i++){
v=_135[i];
if(typeof (v)!="undefined"&&v!==null){
rval.push(_13d(_134[i])+"="+_13d(v));
}
}
return rval.join("&");
},parseQueryString:function(_13e,_13f){
var qstr=(_13e.charAt(0)=="?")?_13e.substring(1):_13e;
var _141=qstr.replace(/\+/g,"%20").split(/\&amp\;|\&\#38\;|\&#x26;|\&/);
var o={};
var _143;
if(typeof (decodeURIComponent)!="undefined"){
_143=decodeURIComponent;
}else{
_143=unescape;
}
if(_13f){
for(var i=0;i<_141.length;i++){
var pair=_141[i].split("=");
var name=_143(pair.shift());
if(!name){
continue;
}
var arr=o[name];
if(!(arr instanceof Array)){
arr=[];
o[name]=arr;
}
arr.push(_143(pair.join("=")));
}
}else{
for(var i=0;i<_141.length;i++){
pair=_141[i].split("=");
var name=pair.shift();
if(!name){
continue;
}
o[_143(name)]=_143(pair.join("="));
}
}
return o;
}});
MochiKit.Base.AdapterRegistry=function(){
this.pairs=[];
};
MochiKit.Base.AdapterRegistry.prototype={register:function(name,_149,wrap,_14b){
if(_14b){
this.pairs.unshift([name,_149,wrap]);
}else{
this.pairs.push([name,_149,wrap]);
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
MochiKit.Base._exportSymbols=function(_151,_152){
if(MochiKit.__export__===false||_152.__export__===false){
return;
}
for(var k in _152){
var v=_152[k];
if(v!=null){
var _155=(k[0]!=="_"&&k!=="toString");
if(v.__export__===true||(v.__export__!==false&&_155)){
_151[k]=_152[k];
}
}
}
};
MochiKit.Base._deprecated=function(_156,name,_158,_159,_15a){
if(typeof (_156)==="string"){
if(_156.indexOf("MochiKit.")===0){
_156=_156.substring(9);
}
_156=MochiKit[_156];
}
var _15b=_158.split(".")[1];
var _15c=_158.split(".")[2];
var func=function(){
var self=arguments.callee;
var msg=_156.NAME+"."+name+" is deprecated since version "+_159+". Use "+_158+" instead.";
if(self.logged!==true){
self.logged=true;
if(MochiKit.Logging){
MochiKit.Logging.logDebug(msg);
}else{
if(console&&console.log){
console.log(msg);
}
}
}
if(!MochiKit[_15b]){
throw new Error(msg);
}
return MochiKit[_15b][_15c].apply(this,arguments);
};
func.__export__=(_15a===true);
_156[name]=func;
};
MochiKit.Base.__new__=function(){
var m=this;
m.noop=m.operator.identity;
m._deprecated(m,"forward","MochiKit.Base.forwardCall","1.3");
m._deprecated(m,"find","MochiKit.Base.findValue","1.3");
if(typeof (encodeURIComponent)!="undefined"){
m.urlEncode=function(_161){
return encodeURIComponent(_161).replace(/\'/g,"%27");
};
}else{
m.urlEncode=function(_162){
return escape(_162).replace(/\+/g,"%2B").replace(/\"/g,"%22").rval.replace(/\'/g,"%27");
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
MochiKit.Base._module("Iter","1.5",["Base"]);
MochiKit.Base.update(MochiKit.Iter,{registerIteratorFactory:function(name,_165,_166,_167){
MochiKit.Iter.iteratorRegistry.register(name,_165,_166,_167);
},isIterable:function(o){
return o!=null&&(typeof (o.next)=="function"||typeof (o.iter)=="function");
},iter:function(_169,_16a){
var self=MochiKit.Iter;
if(arguments.length==2){
return self.takewhile(function(a){
return a!=_16a;
},_169);
}
if(typeof (_169.next)=="function"){
return _169;
}else{
if(typeof (_169.iter)=="function"){
return _169.iter();
}
}
try{
return self.iteratorRegistry.match(_169);
}
catch(e){
var m=MochiKit.Base;
if(e==m.NotFound){
e=new TypeError(typeof (_169)+": "+m.repr(_169)+" is not iterable");
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
var _174=self.iter(p);
return {repr:function(){
return "cycle(...)";
},toString:m.forwardCall("repr"),next:function(){
try{
var rval=_174.next();
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
},next:function(_17a){
return _17a.next();
},izip:function(p,q){
var m=MochiKit.Base;
var self=MochiKit.Iter;
var next=self.next;
var _180=m.map(self.iter,arguments);
return {repr:function(){
return "izip(...)";
},toString:m.forwardCall("repr"),next:function(){
return m.map(next,_180);
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
var _18c=0;
var stop=0;
var step=1;
var i=-1;
if(arguments.length==2){
stop=arguments[1];
}else{
if(arguments.length==3){
_18c=arguments[1];
stop=arguments[2];
}else{
_18c=arguments[1];
stop=arguments[2];
step=arguments[3];
}
}
return {repr:function(){
return "islice("+["...",_18c,stop,step].join(", ")+")";
},toString:m.forwardCall("repr"),next:function(){
var rval;
while(i<_18c){
rval=seq.next();
i++;
}
if(_18c>=stop){
throw self.StopIteration;
}
_18c+=step;
return rval;
}};
},imap:function(fun,p,q){
var m=MochiKit.Base;
var self=MochiKit.Iter;
var _196=m.map(self.iter,m.extend(null,arguments,1));
var map=m.map;
var next=self.next;
return {repr:function(){
return "imap(...)";
},toString:m.forwardCall("repr"),next:function(){
return fun.apply(this,map(next,_196));
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
var _1a1=m.map(self.iter,arguments);
return {repr:function(){
return "chain(...)";
},toString:m.forwardCall("repr"),next:function(){
while(_1a1.length>1){
try{
var _1a2=_1a1[0].next();
return _1a2;
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
_1a1.shift();
var _1a2=_1a1[0].next();
return _1a2;
}
}
if(_1a1.length==1){
var arg=_1a1.shift();
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
},_tee:function(_1ad,sync,_1af){
sync.pos[_1ad]=-1;
var m=MochiKit.Base;
var _1b1=m.listMin;
return {repr:function(){
return "tee("+_1ad+", ...)";
},toString:m.forwardCall("repr"),next:function(){
var rval;
var i=sync.pos[_1ad];
if(i==sync.max){
rval=_1af.next();
sync.deque.push(rval);
sync.max+=1;
sync.pos[_1ad]+=1;
}else{
rval=sync.deque[i-sync.min];
sync.pos[_1ad]+=1;
if(i==sync.min&&_1b1(sync.pos)!=sync.min){
sync.min+=1;
sync.deque.shift();
}
}
return rval;
}};
},tee:function(_1b4,n){
var rval=[];
var sync={"pos":[],"deque":[],"max":-1,"min":-1};
if(arguments.length==1||typeof (n)=="undefined"||n===null){
n=2;
}
var self=MochiKit.Iter;
_1b4=self.iter(_1b4);
var _tee=self._tee;
for(var i=0;i<n;i++){
rval.push(_tee(i,sync,_1b4));
}
return rval;
},list:function(_1bb){
var rval;
if(_1bb instanceof Array){
return _1bb.slice();
}
if(typeof (_1bb)=="function"&&!(_1bb instanceof Function)&&typeof (_1bb.length)=="number"){
rval=[];
for(var i=0;i<_1bb.length;i++){
rval.push(_1bb[i]);
}
return rval;
}
var self=MochiKit.Iter;
_1bb=self.iter(_1bb);
var rval=[];
var _1bf;
try{
while(true){
_1bf=_1bb.next();
rval.push(_1bf);
}
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
return rval;
}
return undefined;
},reduce:function(fn,_1c1,_1c2){
var i=0;
var x=_1c2;
var self=MochiKit.Iter;
_1c1=self.iter(_1c1);
if(arguments.length<3){
try{
x=_1c1.next();
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
x=fn(x,_1c1.next());
}
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
}
return x;
},range:function(){
var _1c6=0;
var stop=0;
var step=1;
if(arguments.length==1){
stop=arguments[0];
}else{
if(arguments.length==2){
_1c6=arguments[0];
stop=arguments[1];
}else{
if(arguments.length==3){
_1c6=arguments[0];
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
if((step>0&&_1c6>=stop)||(step<0&&_1c6<=stop)){
throw MochiKit.Iter.StopIteration;
}
var rval=_1c6;
_1c6+=step;
return rval;
},repr:function(){
return "range("+[_1c6,stop,step].join(", ")+")";
},toString:MochiKit.Base.forwardCall("repr")};
},sum:function(_1ca,_1cb){
if(typeof (_1cb)=="undefined"||_1cb===null){
_1cb=0;
}
var x=_1cb;
var self=MochiKit.Iter;
_1ca=self.iter(_1ca);
try{
while(true){
x+=_1ca.next();
}
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
}
return x;
},exhaust:function(_1ce){
var self=MochiKit.Iter;
_1ce=self.iter(_1ce);
try{
while(true){
_1ce.next();
}
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
}
},forEach:function(_1d0,func,obj){
var m=MochiKit.Base;
var self=MochiKit.Iter;
if(arguments.length>2){
func=m.bind(func,obj);
}
if(m.isArrayLike(_1d0)&&!self.isIterable(_1d0)){
try{
for(var i=0;i<_1d0.length;i++){
func(_1d0[i]);
}
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
}
}else{
self.exhaust(self.imap(func,_1d0));
}
},every:function(_1d6,func){
var self=MochiKit.Iter;
try{
self.ifilterfalse(func,_1d6).next();
return false;
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
return true;
}
},sorted:function(_1d9,cmp){
var rval=MochiKit.Iter.list(_1d9);
if(arguments.length==1){
cmp=MochiKit.Base.compare;
}
rval.sort(cmp);
return rval;
},reversed:function(_1dc){
var rval=MochiKit.Iter.list(_1dc);
rval.reverse();
return rval;
},some:function(_1de,func){
var self=MochiKit.Iter;
try{
self.ifilter(func,_1de).next();
return true;
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
return false;
}
},iextend:function(lst,_1e2){
var m=MochiKit.Base;
var self=MochiKit.Iter;
if(m.isArrayLike(_1e2)&&!self.isIterable(_1e2)){
for(var i=0;i<_1e2.length;i++){
lst.push(_1e2[i]);
}
}else{
_1e2=self.iter(_1e2);
try{
while(true){
lst.push(_1e2.next());
}
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
}
}
return lst;
},groupby:function(_1e6,_1e7){
var m=MochiKit.Base;
var self=MochiKit.Iter;
if(arguments.length<2){
_1e7=m.operator.identity;
}
_1e6=self.iter(_1e6);
var pk=undefined;
var k=undefined;
var v;
function fetch(){
v=_1e6.next();
k=_1e7(v);
}
function eat(){
var ret=v;
v=undefined;
return ret;
}
var _1ee=true;
var _1ef=m.compare;
return {repr:function(){
return "groupby(...)";
},next:function(){
while(_1ef(k,pk)===0){
fetch();
if(_1ee){
_1ee=false;
break;
}
}
pk=k;
return [k,{next:function(){
if(v==undefined){
fetch();
}
if(_1ef(k,pk)!==0){
throw self.StopIteration;
}
return eat();
}}];
}};
},groupby_as_array:function(_1f0,_1f1){
var m=MochiKit.Base;
var self=MochiKit.Iter;
if(arguments.length<2){
_1f1=m.operator.identity;
}
_1f0=self.iter(_1f0);
var _1f4=[];
var _1f5=true;
var _1f6;
var _1f7=m.compare;
while(true){
try{
var _1f8=_1f0.next();
var key=_1f1(_1f8);
}
catch(e){
if(e==self.StopIteration){
break;
}
throw e;
}
if(_1f5||_1f7(key,_1f6)!==0){
var _1fa=[];
_1f4.push([key,_1fa]);
}
_1fa.push(_1f8);
_1f5=false;
_1f6=key;
}
return _1f4;
},arrayLikeIter:function(_1fb){
var i=0;
return {repr:function(){
return "arrayLikeIter(...)";
},toString:MochiKit.Base.forwardCall("repr"),next:function(){
if(i>=_1fb.length){
throw MochiKit.Iter.StopIteration;
}
return _1fb[i++];
}};
},hasIterateNext:function(_1fd){
return (_1fd&&typeof (_1fd.iterateNext)=="function");
},iterateNextIter:function(_1fe){
return {repr:function(){
return "iterateNextIter(...)";
},toString:MochiKit.Base.forwardCall("repr"),next:function(){
var rval=_1fe.iterateNext();
if(rval===null||rval===undefined){
throw MochiKit.Iter.StopIteration;
}
return rval;
}};
}});
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
m.nameFunctions(this);
};
MochiKit.Iter.__new__();
if(MochiKit.__export__){
reduce=MochiKit.Iter.reduce;
}
MochiKit.Base._exportSymbols(this,MochiKit.Iter);
MochiKit.Base._module("Logging","1.5",["Base"]);
MochiKit.Logging.LogMessage=function(num,_202,info){
this.num=num;
this.level=_202;
this.info=info;
this.timestamp=new Date();
};
MochiKit.Logging.LogMessage.prototype={repr:function(){
var m=MochiKit.Base;
return "LogMessage("+m.map(m.repr,[this.num,this.level,this.info]).join(", ")+")";
},toString:MochiKit.Base.forwardCall("repr")};
MochiKit.Base.update(MochiKit.Logging,{logLevelAtLeast:function(_205){
var self=MochiKit.Logging;
if(typeof (_205)=="string"){
_205=self.LogLevel[_205];
}
return function(msg){
var _208=msg.level;
if(typeof (_208)=="string"){
_208=self.LogLevel[_208];
}
return _208>=_205;
};
},isLogMessage:function(){
var _209=MochiKit.Logging.LogMessage;
for(var i=0;i<arguments.length;i++){
if(!(arguments[i] instanceof _209)){
return false;
}
}
return true;
},compareLogMessage:function(a,b){
return MochiKit.Base.compare([a.level,a.info],[b.level,b.info]);
},alertListener:function(msg){
alert("num: "+msg.num+"\nlevel: "+msg.level+"\ninfo: "+msg.info.join(" "));
}});
MochiKit.Logging.Logger=function(_20e){
this.counter=0;
if(typeof (_20e)=="undefined"||_20e===null){
_20e=-1;
}
this.maxSize=_20e;
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
if(typeof (Debug)!="undefined"&&Debug.writeln){
Debug.writeln(msg);
}else{
if(typeof (debug)!="undefined"&&debug.trace){
debug.trace(msg);
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
},addListener:function(_213,_214,_215){
if(typeof (_214)=="string"){
_214=MochiKit.Logging.logLevelAtLeast(_214);
}
var _216=[_214,_215];
_216.ident=_213;
this.listeners[_213]=_216;
},removeListener:function(_217){
delete this.listeners[_217];
},baseLog:function(_218,_219){
if(typeof (_218)=="number"){
if(_218>=MochiKit.Logging.LogLevel.FATAL){
_218="FATAL";
}else{
if(_218>=MochiKit.Logging.LogLevel.ERROR){
_218="ERROR";
}else{
if(_218>=MochiKit.Logging.LogLevel.WARNING){
_218="WARNING";
}else{
if(_218>=MochiKit.Logging.LogLevel.INFO){
_218="INFO";
}else{
_218="DEBUG";
}
}
}
}
}
var msg=new MochiKit.Logging.LogMessage(this.counter,_218,MochiKit.Base.extend(null,arguments,1));
this._messages.push(msg);
this.dispatchListeners(msg);
if(this.useNativeConsole){
this.logToConsole(msg.level+": "+msg.info.join(" "));
}
this.counter+=1;
while(this.maxSize>=0&&this._messages.length>this.maxSize){
this._messages.shift();
}
},getMessages:function(_21b){
var _21c=0;
if(!(typeof (_21b)=="undefined"||_21b===null)){
_21c=Math.max(0,this._messages.length-_21b);
}
return this._messages.slice(_21c);
},getMessageText:function(_21d){
if(typeof (_21d)=="undefined"||_21d===null){
_21d=30;
}
var _21e=this.getMessages(_21d);
if(_21e.length){
var lst=map(function(m){
return "\n  ["+m.num+"] "+m.level+": "+m.info.join(" ");
},_21e);
lst.unshift("LAST "+_21e.length+" MESSAGES:");
return lst.join("");
}
return "";
},debuggingBookmarklet:function(_221){
if(typeof (MochiKit.LoggingPane)=="undefined"){
alert(this.getMessageText());
}else{
MochiKit.LoggingPane.createLoggingPane(_221||false);
}
}};
MochiKit.Logging.__new__=function(){
this.LogLevel={ERROR:40,FATAL:50,WARNING:30,INFO:20,DEBUG:10};
var m=MochiKit.Base;
m.registerComparator("LogMessage",this.isLogMessage,this.compareLogMessage);
var _223=m.partial;
var _224=this.Logger;
var _225=_224.prototype.baseLog;
m.update(this.Logger.prototype,{debug:_223(_225,"DEBUG"),log:_223(_225,"INFO"),error:_223(_225,"ERROR"),fatal:_223(_225,"FATAL"),warning:_223(_225,"WARNING")});
var self=this;
var _227=function(name){
return function(){
self.logger[name].apply(self.logger,arguments);
};
};
this.log=_227("log");
this.logError=_227("error");
this.logDebug=_227("debug");
this.logFatal=_227("fatal");
this.logWarning=_227("warning");
this.logger=new _224();
this.logger.useNativeConsole=true;
m.nameFunctions(this);
};
MochiKit.Logging.__new__();
MochiKit.Base._exportSymbols(this,MochiKit.Logging);
MochiKit.Base._module("DateTime","1.5",["Base"]);
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
var year,_22f,day,hour,min,sec,msec;
year=parseInt(res[1],10);
if(typeof (res[2])=="undefined"||res[2]===""){
return new Date(year);
}
_22f=parseInt(res[2],10)-1;
day=parseInt(res[3],10);
if(typeof (res[4])=="undefined"||res[4]===""){
return new Date(year,_22f,day);
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
return new Date(year,_22f,day,hour,min,sec,msec);
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
return new Date(Date.UTC(year,_22f,day,hour,min,sec,msec)-ofs);
};
MochiKit.DateTime.toISOTime=function(date,_237){
if(typeof (date)=="undefined"||date===null){
return null;
}
var hh=date.getHours();
var mm=date.getMinutes();
var ss=date.getSeconds();
var lst=[((_237&&(hh<10))?"0"+hh:hh),((mm<10)?"0"+mm:mm),((ss<10)?"0"+ss:ss)];
return lst.join(":");
};
MochiKit.DateTime.toISOTimestamp=function(date,_23d){
if(typeof (date)=="undefined"||date===null){
return null;
}
var sep=_23d?"T":" ";
var foot=_23d?"Z":"";
if(_23d){
date=new Date(date.getTime()+(date.getTimezoneOffset()*60000));
}
return MochiKit.DateTime.toISODate(date)+sep+MochiKit.DateTime.toISOTime(date,_23d)+foot;
};
MochiKit.DateTime.toISODate=function(date){
if(typeof (date)=="undefined"||date===null){
return null;
}
var _241=MochiKit.DateTime._padTwo;
var _242=MochiKit.DateTime._padFour;
return [_242(date.getFullYear()),_241(date.getMonth()+1),_241(date.getDate())].join("-");
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
var _248=MochiKit.DateTime._padTwo;
return [_248(d.getMonth()+1),_248(d.getDate()),d.getFullYear()].join("/");
};
MochiKit.DateTime.toAmericanDate=function(d){
if(typeof (d)=="undefined"||d===null){
return null;
}
return [d.getMonth()+1,d.getDate(),d.getFullYear()].join("/");
};
MochiKit.DateTime.__new__=function(){
MochiKit.Base.nameFunctions(this);
};
MochiKit.DateTime.__new__();
MochiKit.Base._exportSymbols(this,MochiKit.DateTime);
MochiKit.Base._module("Format","1.5",["Base"]);
MochiKit.Format._numberFormatter=function(_24a,_24b,_24c,_24d,_24e,_24f,_250,_251,_252){
return function(num){
num=parseFloat(num);
if(typeof (num)=="undefined"||num===null||isNaN(num)){
return _24a;
}
var _254=_24b;
var _255=_24c;
if(num<0){
num=-num;
}else{
_254=_254.replace(/-/,"");
}
var me=arguments.callee;
var fmt=MochiKit.Format.formatLocale(_24d);
if(_24e){
num=num*100;
_255=fmt.percent+_255;
}
num=MochiKit.Format.roundToFixed(num,_24f);
var _258=num.split(/\./);
var _259=_258[0];
var frac=(_258.length==1)?"":_258[1];
var res="";
while(_259.length<_250){
_259="0"+_259;
}
if(_251){
while(_259.length>_251){
var i=_259.length-_251;
res=fmt.separator+_259.substring(i,_259.length)+res;
_259=_259.substring(0,i);
}
}
res=_259+res;
if(_24f>0){
while(frac.length<_252){
frac=frac+"0";
}
res=res+fmt.decimal+frac;
}
return _254+res+_255;
};
};
MochiKit.Format.numberFormatter=function(_25d,_25e,_25f){
if(typeof (_25e)=="undefined"){
_25e="";
}
var _260=_25d.match(/((?:[0#]+,)?[0#]+)(?:\.([0#]+))?(%)?/);
if(!_260){
throw TypeError("Invalid pattern");
}
var _261=_25d.substr(0,_260.index);
var _262=_25d.substr(_260.index+_260[0].length);
if(_261.search(/-/)==-1){
_261=_261+"-";
}
var _263=_260[1];
var frac=(typeof (_260[2])=="string"&&_260[2]!="")?_260[2]:"";
var _265=(typeof (_260[3])=="string"&&_260[3]!="");
var tmp=_263.split(/,/);
var _267;
if(typeof (_25f)=="undefined"){
_25f="default";
}
if(tmp.length==1){
_267=null;
}else{
_267=tmp[1].length;
}
var _268=_263.length-_263.replace(/0/g,"").length;
var _269=frac.length-frac.replace(/0/g,"").length;
var _26a=frac.length;
var rval=MochiKit.Format._numberFormatter(_25e,_261,_262,_25f,_265,_26a,_268,_267,_269);
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
MochiKit.Format.formatLocale=function(_26f){
if(typeof (_26f)=="undefined"||_26f===null){
_26f="default";
}
if(typeof (_26f)=="string"){
var rval=MochiKit.Format.LOCALE[_26f];
if(typeof (rval)=="string"){
rval=arguments.callee(rval);
MochiKit.Format.LOCALE[_26f]=rval;
}
return rval;
}else{
return _26f;
}
};
MochiKit.Format.twoDigitAverage=function(_271,_272){
if(_272){
var res=_271/_272;
if(!isNaN(res)){
return MochiKit.Format.twoDigitFloat(res);
}
}
return "0";
};
MochiKit.Format.twoDigitFloat=function(_274){
var res=roundToFixed(_274,2);
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
MochiKit.Format.lstrip=function(str,_277){
str=str+"";
if(typeof (str)!="string"){
return null;
}
if(!_277){
return str.replace(/^\s+/,"");
}else{
return str.replace(new RegExp("^["+_277+"]+"),"");
}
};
MochiKit.Format.rstrip=function(str,_279){
str=str+"";
if(typeof (str)!="string"){
return null;
}
if(!_279){
return str.replace(/\s+$/,"");
}else{
return str.replace(new RegExp("["+_279+"]+$"),"");
}
};
MochiKit.Format.strip=function(str,_27b){
var self=MochiKit.Format;
return self.rstrip(self.lstrip(str,_27b),_27b);
};
MochiKit.Format.truncToFixed=function(_27d,_27e){
var _27f=MochiKit.Format._numberToFixed(_27d,_27e);
var _280=_27f.indexOf(".");
if(_280>0&&_280+_27e+1<_27f.length){
_27f=_27f.substring(0,_280+_27e+1);
_27f=MochiKit.Format._shiftNumber(_27f,0);
}
return _27f;
};
MochiKit.Format.roundToFixed=function(_281,_282){
var _283=MochiKit.Format._numberToFixed(_281,_282);
var _284=_283.indexOf(".");
if(_284>0&&_284+_282+1<_283.length){
var str=MochiKit.Format._shiftNumber(_283,_282);
str=MochiKit.Format._numberToFixed(Math.round(parseFloat(str)),0);
_283=MochiKit.Format._shiftNumber(str,-_282);
}
return _283;
};
MochiKit.Format._numberToFixed=function(_286,_287){
var str=_286.toString();
var _289=str.split(/[eE]/);
var exp=(_289.length===1)?0:parseInt(_289[1])||0;
var _28b=MochiKit.Format._shiftNumber(_289[0],exp);
_289=_28b.split(/\./);
var _28c=_289[0];
var frac=(_289.length===1)?"":_289[1];
while(frac.length<_287){
frac+="0";
}
if(frac.length>0){
return _28c+"."+frac;
}else{
return _28c;
}
};
MochiKit.Format._shiftNumber=function(num,exp){
var pos=num.indexOf(".");
if(pos<0){
pos=num.length;
}else{
num=num.substring(0,pos)+num.substring(pos+1);
}
pos+=exp;
while(pos<=0||(pos<=1&&num.charAt(0)==="-")){
if(num.charAt(0)==="-"){
num="-0"+num.substring(1);
}else{
num="0"+num;
}
pos++;
}
while(pos>num.length){
num+="0";
}
if(pos<num.length){
num=num.substring(0,pos)+"."+num.substring(pos);
}
while(/^0[^.]/.test(num)){
num=num.substring(1);
}
while(/^-0[^.]/.test(num)){
num="-"+num.substring(2);
}
return num;
};
MochiKit.Format.percentFormat=function(_291){
return MochiKit.Format.twoDigitFloat(100*_291)+"%";
};
MochiKit.Format.LOCALE={en_US:{separator:",",decimal:".",percent:"%"},de_DE:{separator:".",decimal:",",percent:"%"},pt_BR:{separator:".",decimal:",",percent:"%"},fr_FR:{separator:" ",decimal:",",percent:"%"},"default":"en_US",__export__:false};
MochiKit.Format.__new__=function(){
MochiKit.Base.nameFunctions(this);
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
};
MochiKit.Format.__new__();
MochiKit.Base._exportSymbols(this,MochiKit.Format);
MochiKit.Base._module("Text","1.5",["Base","Format"]);
MochiKit.Text.startsWith=function(_296,str){
return str!=null&&_296!=null&&str.indexOf(_296)==0;
};
MochiKit.Text.endsWith=function(_298,str){
return str!=null&&_298!=null&&str.lastIndexOf(_298)==Math.max(str.length-_298.length,0);
};
MochiKit.Text.contains=function(_29a,str){
return str!=null&&_29a!=null&&str.indexOf(_29a)>=0;
};
MochiKit.Text.padLeft=function(str,_29d,_29e){
str=str||"";
_29e=_29e||" ";
while(str.length<_29d){
str=_29e+str;
}
return str;
};
MochiKit.Text.padRight=function(str,_2a0,_2a1){
str=str||"";
_2a1=_2a1||" ";
while(str.length<_2a0){
str+=_2a1;
}
return str;
};
MochiKit.Text.truncate=function(str,_2a3,tail){
if(str==null||str.length<=_2a3||_2a3<0){
return str;
}else{
if(tail!=null){
str=str.slice(0,Math.max(0,_2a3-tail.length));
if(typeof (str)=="string"){
return str+tail;
}else{
return MochiKit.Base.extend(str,tail);
}
}else{
return str.slice(0,_2a3);
}
}
};
MochiKit.Text.split=function(str,_2a6,max){
if(str==null||str.length==0){
return str;
}
_2a6=_2a6||"\n";
var bits=str.split(_2a6);
if((typeof (max)=="undefined")||max>=bits.length-1){
return bits;
}
bits.splice(max,bits.length,bits.slice(max,bits.length).join(_2a6));
return bits;
};
MochiKit.Text.rsplit=function(str,_2aa,max){
if(str==null||str.length==0){
return str;
}
_2aa=_2aa||"\n";
var bits=str.split(_2aa);
if((typeof (max)=="undefined")||max>=bits.length-1){
return bits;
}
bits.splice(0,bits.length-max,bits.slice(0,bits.length-max).join(_2aa));
return bits;
};
MochiKit.Text.splitJoin=function(func,str,_2af){
if(str==null||str.length==0){
return str;
}
_2af=_2af||"\n";
return MochiKit.Base.map(func,str.split(_2af)).join(_2af);
};
MochiKit.Text.formatter=function(_2b0,_2b1){
if(typeof (_2b1)=="undefined"){
_2b1=MochiKit.Format.formatLocale();
}else{
if(typeof (_2b1)=="string"){
_2b1=MochiKit.Format.formatLocale(_2b1);
}
}
var _2b2=MochiKit.Text._parsePattern(_2b0);
return function(){
var _2b3=MochiKit.Base.extend([],arguments);
var res=[];
for(var i=0;i<_2b2.length;i++){
if(typeof (_2b2[i])=="string"){
res.push(_2b2[i]);
}else{
res.push(MochiKit.Text.formatValue(_2b2[i],_2b3,_2b1));
}
}
return res.join("");
};
};
MochiKit.Text.format=function(_2b6){
var func=MochiKit.Text.formatter(_2b6);
return func.apply(this,MochiKit.Base.extend([],arguments,1));
};
MochiKit.Text.formatValue=function(spec,_2b9,_2ba){
var self=MochiKit.Text;
if(typeof (spec)==="string"){
spec=self._parseFormatFlags(spec,0,spec.length-1);
}
for(var i=0;spec.path!=null&&i<spec.path.length;i++){
if(_2b9!=null){
_2b9=_2b9[spec.path[i]];
}
}
if(typeof (_2ba)=="undefined"){
_2ba=MochiKit.Format.formatLocale();
}else{
if(typeof (_2ba)=="string"){
_2ba=MochiKit.Format.formatLocale(_2ba);
}
}
var str="";
if(spec.numeric){
if(typeof (_2b9)!="number"||isNaN(_2b9)){
str="";
}else{
if(_2b9===Number.POSITIVE_INFINITY){
str="\u221e";
}else{
if(_2b9===Number.NEGATIVE_INFINITY){
str="-\u221e";
}else{
var sign=(spec.sign==="-")?"":spec.sign;
sign=(_2b9<0)?"-":sign;
_2b9=Math.abs(_2b9);
if(spec.format==="%"){
str=self._truncToPercent(_2b9,spec.precision);
}else{
if(spec.format==="d"){
str=MochiKit.Format.roundToFixed(_2b9,0);
}else{
if(spec.radix!=10){
str=Math.floor(_2b9).toString(spec.radix);
if(spec.format==="x"){
str=str.toLowerCase();
}else{
if(spec.format==="X"){
str=str.toUpperCase();
}
}
}else{
if(spec.precision>=0){
str=MochiKit.Format.roundToFixed(_2b9,spec.precision);
}else{
str=_2b9.toString();
}
}
}
}
if(spec.padding==="0"&&spec.format==="%"){
str=self.padLeft(str,spec.width-sign.length-1,"0");
}else{
if(spec.padding=="0"){
str=self.padLeft(str,spec.width-sign.length,"0");
}
}
str=self._localizeNumber(str,_2ba,spec.grouping);
str=sign+str;
}
}
}
if(str!==""&&spec.format==="%"){
str=str+_2ba.percent;
}
}else{
if(spec.format=="r"){
str=MochiKit.Base.repr(_2b9);
}else{
str=(_2b9==null)?"null":_2b9.toString();
}
str=self.truncate(str,spec.precision);
}
if(spec.align=="<"){
str=self.padRight(str,spec.width);
}else{
str=self.padLeft(str,spec.width);
}
return str;
};
MochiKit.Text._localizeNumber=function(num,_2c0,_2c1){
var _2c2=num.split(/\./);
var _2c3=_2c2[0];
var frac=(_2c2.length==1)?"":_2c2[1];
var res=(frac.length>0)?_2c0.decimal:"";
while(_2c1&&frac.length>3){
res=res+frac.substring(0,3)+_2c0.separator;
frac=frac.substring(3);
if(_2c3.charAt(0)=="0"){
_2c3=_2c3.substring(1);
}
}
if(frac.length>0){
res+=frac;
}
while(_2c1&&_2c3.length>3){
var pos=_2c3.length-3;
res=_2c0.separator+_2c3.substring(pos)+res;
_2c3=_2c3.substring((_2c3.charAt(0)=="0")?1:0,pos);
}
return _2c3+res;
};
MochiKit.Text._parsePattern=function(_2c7){
var self=MochiKit.Text;
var _2c9=[];
var _2ca=0;
var pos=0;
for(pos=0;pos<_2c7.length;pos++){
if(_2c7.charAt(pos)=="{"){
if(pos+1>=_2c7.length){
var msg="unescaped { char, should be escaped as {{";
throw new self.FormatPatternError(_2c7,pos,msg);
}else{
if(_2c7.charAt(pos+1)=="{"){
_2c9.push(_2c7.substring(_2ca,pos+1));
_2ca=pos+2;
pos++;
}else{
if(_2ca<pos){
_2c9.push(_2c7.substring(_2ca,pos));
}
_2ca=_2c7.indexOf("}",pos)+1;
if(_2ca<=0){
var msg="unmatched { char, not followed by a } char";
throw new self.FormatPatternError(_2c7,pos,msg);
}
_2c9.push(self._parseFormat(_2c7,pos+1,_2ca-1));
pos=_2ca-1;
}
}
}else{
if(_2c7.charAt(pos)=="}"){
if(pos+1>=_2c7.length||_2c7.charAt(pos+1)!="}"){
var msg="unescaped } char, should be escaped as }}";
throw new self.FormatPatternError(_2c7,pos,msg);
}
_2c9.push(_2c7.substring(_2ca,pos+1));
_2ca=pos+2;
pos++;
}
}
}
if(_2ca<pos){
_2c9.push(_2c7.substring(_2ca,pos));
}
return _2c9;
};
MochiKit.Text._parseFormat=function(_2cd,_2ce,_2cf){
var self=MochiKit.Text;
var text=_2cd.substring(_2ce,_2cf);
var info;
var pos=text.indexOf(":");
if(pos==0){
info=self._parseFormatFlags(_2cd,_2ce+1,_2cf);
info.path=[0];
}else{
if(pos>0){
info=self._parseFormatFlags(_2cd,_2ce+pos+1,_2cf);
info.path=text.substring(0,pos).split(".");
}else{
info=self._parseFormatFlags(_2cd,_2cf,_2cf);
info.path=text.split(".");
}
}
var _2d4=/^\d+$/;
for(var i=0;i<info.path.length;i++){
var e=info.path[i];
if(typeof (e)=="string"){
e=e.replace(/^\s+/,"").replace(/\s+$/,"");
if(e==""&&info.path.length==1){
e=0;
}else{
if(e==""){
var msg="format value path contains blanks";
throw new self.FormatPatternError(_2cd,_2ce,msg);
}else{
if(_2d4.test(e)){
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
MochiKit.Text._parseFormatFlags=function(_2d8,_2d9,_2da){
var self=MochiKit.Text;
var info={numeric:false,format:"s",width:0,precision:-1,align:">",sign:"-",padding:" ",grouping:false};
var _2dd=_2d8.substring(_2d9,_2da).replace(/\s+$/,"");
while(_2dd.length>0){
switch(_2dd.charAt(0)){
case ">":
case "<":
info.align=_2dd.charAt(0);
_2dd=_2dd.substring(1);
break;
case "+":
case "-":
case " ":
info.sign=_2dd.charAt(0);
_2dd=_2dd.substring(1);
break;
case ",":
info.grouping=true;
_2dd=_2dd.substring(1);
break;
case ".":
var _2de=/^\d*/.exec(_2dd.substring(1))[0];
info.precision=parseInt(_2de);
_2dd=_2dd.substring(1+_2de.length);
break;
case "0":
info.padding=_2dd.charAt(0);
_2dd=_2dd.substring(1);
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
var _2de=/^\d*/.exec(_2dd)[0];
info.width=parseInt(_2de);
_2dd=_2dd.substring(_2de.length);
break;
case "s":
case "r":
info.format=_2dd.charAt(0);
_2dd=_2dd.substring(1);
break;
case "b":
case "d":
case "o":
case "x":
case "X":
case "f":
case "%":
info.numeric=true;
info.format=_2dd.charAt(0);
info.radix=10;
if(info.format==="b"){
info.radix=2;
}else{
if(info.format==="o"){
info.radix=8;
}else{
if(info.format==="x"||info.format==="X"){
info.radix=16;
}
}
}
_2dd=_2dd.substring(1);
break;
default:
var msg="unsupported format flag: "+_2dd.charAt(0);
throw new self.FormatPatternError(_2d8,_2d9,msg);
}
}
return info;
};
MochiKit.Text._truncToPercent=function(_2e0,_2e1){
var str;
if(_2e1>=0){
str=MochiKit.Format.roundToFixed(_2e0,_2e1+2);
}else{
str=(_2e0==null)?"0":_2e0.toString();
}
var _2e3=str.indexOf(".");
if(_2e3<0){
str=str+"00";
}else{
if(_2e3+3>=str.length){
var _2e4=str.substring(_2e3+1);
while(_2e4.length<2){
_2e4=_2e4+"0";
}
str=str.substring(0,_2e3)+_2e4;
}else{
var _2e4=str.substring(_2e3+1);
str=str.substring(0,_2e3)+_2e4.substring(0,2)+"."+_2e4.substring(2);
}
}
while(str.length>1&&str.charAt(0)=="0"&&str.charAt(1)!="."){
str=str.substring(1);
}
return str;
};
MochiKit.Text.FormatPatternError=function(_2e5,pos,_2e7){
this.pattern=_2e5;
this.pos=pos;
this.message=_2e7;
};
MochiKit.Text.FormatPatternError.prototype=new MochiKit.Base.NamedError("MochiKit.Text.FormatPatternError");
if(MochiKit.__export__){
formatter=MochiKit.Text.formatter;
format=MochiKit.Text.format;
formatValue=MochiKit.Text.formatValue;
}
MochiKit.Base.nameFunctions(MochiKit.Text);
MochiKit.Base._exportSymbols(this,MochiKit.Text);
MochiKit.Base._module("Async","1.5",["Base"]);
MochiKit.Async.Deferred=function(_2e8){
this.chain=[];
this.id=this._nextId();
this.fired=-1;
this.paused=0;
this.results=[null,null];
this.canceller=_2e8;
this.silentlyCancelled=false;
this.chained=false;
};
MochiKit.Async.Deferred.prototype={repr:function(){
var _2e9;
if(this.fired==-1){
_2e9="unfired";
}else{
if(this.fired===0){
_2e9="success";
}else{
_2e9="error";
}
}
return "Deferred("+this.id+", "+_2e9+")";
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
var _2f4=this.chain;
var _2f5=this.fired;
var res=this.results[_2f5];
var self=this;
var cb=null;
while(_2f4.length>0&&this.paused===0){
var pair=_2f4.shift();
var f=pair[_2f5];
if(f===null){
continue;
}
try{
res=f(res);
_2f5=((res instanceof Error)?1:0);
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
_2f5=1;
if(!(err instanceof Error)){
err=new MochiKit.Async.GenericError(err);
}
res=err;
}
}
this.fired=_2f5;
this.results[_2f5]=res;
if(cb&&this.paused){
res.addBoth(cb);
res.chained=true;
}
}};
MochiKit.Base.update(MochiKit.Async,{evalJSONRequest:function(req){
return MochiKit.Base.evalJSON(req.responseText);
},succeed:function(_2fd){
var d=new MochiKit.Async.Deferred();
d.callback.apply(d,arguments);
return d;
},fail:function(_2ff){
var d=new MochiKit.Async.Deferred();
d.errback.apply(d,arguments);
return d;
},getXMLHttpRequest:function(){
var self=arguments.callee;
if(!self.XMLHttpRequest){
var _302=[function(){
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
for(var i=0;i<_302.length;i++){
var func=_302[i];
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
var _307=null;
try{
_307=this.status;
if(!_307&&m.isNotEmpty(this.responseText)){
_307=304;
}
}
catch(e){
}
if(_307==200||_307==201||_307==204||_307==304||_307==1223){
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
},sendXMLHttpRequest:function(req,_30b){
if(typeof (_30b)=="undefined"||_30b===null){
_30b="";
}
var m=MochiKit.Base;
var self=MochiKit.Async;
var d=new self.Deferred(m.partial(self._xhr_canceller,req));
try{
req.onreadystatechange=m.bind(self._xhr_onreadystatechange,req,d);
req.send(_30b);
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
var _318=opts.headers;
if(!m.isArrayLike(_318)){
_318=m.items(_318);
}
for(var i=0;i<_318.length;i++){
var _31a=_318[i];
var name=_31a[0];
var _31c=_31a[1];
req.setRequestHeader(name,_31c);
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
},wait:function(_325,_326){
var d=new MochiKit.Async.Deferred();
var m=MochiKit.Base;
if(typeof (_326)!="undefined"){
d.addCallback(function(){
return _326;
});
}
var _329=setTimeout(m.bind("callback",d),Math.floor(_325*1000));
d.canceller=function(){
try{
clearTimeout(_329);
}
catch(e){
}
};
return d;
},callLater:function(_32a,func){
var m=MochiKit.Base;
var _32d=m.partial.apply(m,m.extend(null,arguments,1));
return MochiKit.Async.wait(_32a).addCallback(function(res){
return _32d();
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
var _330;
if(this.locked){
_330="locked, "+this.waiting.length+" waiting";
}else{
_330="unlocked";
}
return "DeferredLock("+this.id+", "+_330+")";
},toString:MochiKit.Base.forwardCall("repr")};
MochiKit.Async.DeferredList=function(list,_332,_333,_334,_335){
MochiKit.Async.Deferred.apply(this,[_335]);
this.list=list;
var _336=[];
this.resultList=_336;
this.finishedCount=0;
this.fireOnOneCallback=_332;
this.fireOnOneErrback=_333;
this.consumeErrors=_334;
var cb=MochiKit.Base.bind(this._cbDeferred,this);
for(var i=0;i<list.length;i++){
var d=list[i];
_336.push(undefined);
d.addCallback(cb,i,true);
d.addErrback(cb,i,false);
}
if(list.length===0&&!_332){
this.callback(this.resultList);
}
};
MochiKit.Async.DeferredList.prototype=new MochiKit.Async.Deferred();
MochiKit.Async.DeferredList.prototype._cbDeferred=function(_33a,_33b,_33c){
this.resultList[_33a]=[_33b,_33c];
this.finishedCount+=1;
if(this.fired==-1){
if(_33b&&this.fireOnOneCallback){
this.callback([_33a,_33c]);
}else{
if(!_33b&&this.fireOnOneErrback){
this.errback(_33c);
}else{
if(this.finishedCount==this.list.length){
this.callback(this.resultList);
}
}
}
}
if(!_33b&&this.consumeErrors){
_33c=null;
}
return _33c;
};
MochiKit.Async.gatherResults=function(_33d){
var d=new MochiKit.Async.DeferredList(_33d,false,true,false);
d.addCallback(function(_33f){
var ret=[];
for(var i=0;i<_33f.length;i++){
ret.push(_33f[i][1]);
}
return ret;
});
return d;
};
MochiKit.Async.maybeDeferred=function(func){
var self=MochiKit.Async;
var _344;
try{
var r=func.apply(null,MochiKit.Base.extend([],arguments,1));
if(r instanceof self.Deferred){
_344=r;
}else{
if(r instanceof Error){
_344=self.fail(r);
}else{
_344=self.succeed(r);
}
}
}
catch(e){
_344=self.fail(e);
}
return _344;
};
MochiKit.Async.__new__=function(){
var m=MochiKit.Base;
var ne=m.partial(m._newNamedError,this);
ne("AlreadyCalledError",function(_348){
this.deferred=_348;
});
ne("CancelledError",function(_349){
this.deferred=_349;
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
m.nameFunctions(this);
};
MochiKit.Async.__new__();
MochiKit.Base._exportSymbols(this,MochiKit.Async);
MochiKit.Base._module("DOM","1.5",["Base"]);
MochiKit.Base.update(MochiKit.DOM,{currentWindow:function(){
return MochiKit.DOM._window;
},currentDocument:function(){
return MochiKit.DOM._document;
},withWindow:function(win,func){
var self=MochiKit.DOM;
var _351=self._document;
var _352=self._window;
var rval;
try{
self._window=win;
self._document=win.document;
rval=func();
}
catch(e){
self._window=_352;
self._document=_351;
throw e;
}
self._window=_352;
self._document=_351;
return rval;
},formContents:function(elem){
var _355=[];
var _356=[];
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
var _35b=elem.tagName.toUpperCase();
if(_35b==="INPUT"&&(elem.type=="radio"||elem.type=="checkbox")&&!elem.checked){
return null;
}
if(_35b==="SELECT"){
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
_355.push(name);
_356.push(v);
return null;
}
_355.push(name);
_356.push("");
return null;
}else{
var opts=elem.options;
if(!opts.length){
_355.push(name);
_356.push("");
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
_355.push(name);
_356.push(v);
}
return null;
}
}
if(_35b==="FORM"||_35b==="P"||_35b==="SPAN"||_35b==="DIV"){
return elem.childNodes;
}
_355.push(name);
_356.push(elem.value||"");
return null;
}
return elem.childNodes;
});
return [_355,_356];
},withDocument:function(doc,func){
var self=MochiKit.DOM;
var _364=self._document;
var rval;
try{
self._document=doc;
rval=func();
}
catch(e){
self._document=_364;
throw e;
}
self._document=_364;
return rval;
},registerDOMConverter:function(name,_367,wrap,_369){
MochiKit.DOM.domConverters.register(name,_367,wrap,_369);
},coerceToDOM:function(node,ctx){
var m=MochiKit.Base;
var im=MochiKit.Iter;
var self=MochiKit.DOM;
if(im){
var iter=im.iter;
var _370=im.repeat;
}
var map=m.map;
var _372=self.domConverters;
var _373=arguments.callee;
var _374=m.NotFound;
while(true){
if(typeof (node)=="undefined"||node===null){
return null;
}
if(typeof (node)=="function"&&typeof (node.length)=="number"&&!(node instanceof Function)){
node=im?im.list(node):m.extend(null,node);
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
var _375=null;
try{
_375=iter(node);
}
catch(e){
}
if(_375){
return map(_373,_375,_370(ctx));
}
}else{
if(m.isArrayLike(node)){
var func=function(n){
return _373(n,ctx);
};
return map(func,node);
}
}
try{
node=_372.match(node,ctx);
continue;
}
catch(e){
if(e!=_374){
throw e;
}
}
return self._document.createTextNode(node.toString());
}
return undefined;
},isChildNode:function(node,_379){
var self=MochiKit.DOM;
if(typeof (node)=="string"){
node=self.getElement(node);
}
if(typeof (_379)=="string"){
_379=self.getElement(_379);
}
if(typeof (node)=="undefined"||node===null){
return false;
}
while(node!=null&&node!==self._document){
if(node===_379){
return true;
}
node=node.parentNode;
}
return false;
},setNodeAttribute:function(node,attr,_37d){
var o={};
o[attr]=_37d;
try{
return MochiKit.DOM.updateNodeAttributes(node,o);
}
catch(e){
}
return null;
},getNodeAttribute:function(node,attr){
var self=MochiKit.DOM;
var _382=self.attributeArray.renames[attr];
var _383=self.attributeArray.ignoreAttr[attr];
node=self.getElement(node);
try{
if(_382){
return node[_382];
}
var _384=node.getAttribute(attr);
if(_384!=_383){
return _384;
}
}
catch(e){
}
return null;
},removeNodeAttribute:function(node,attr){
var self=MochiKit.DOM;
var _388=self.attributeArray.renames[attr];
node=self.getElement(node);
try{
if(_388){
return node[_388];
}
return node.removeAttribute(attr);
}
catch(e){
}
return null;
},updateNodeAttributes:function(node,_38a){
var elem=node;
var self=MochiKit.DOM;
if(typeof (node)=="string"){
elem=self.getElement(node);
}
if(_38a){
var _38d=MochiKit.Base.updatetree;
if(self.attributeArray.compliant){
for(var k in _38a){
var v=_38a[k];
if(typeof (v)=="object"&&typeof (elem[k])=="object"){
if(k=="style"&&MochiKit.Style){
MochiKit.Style.setStyle(elem,v);
}else{
_38d(elem[k],v);
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
var _390=self.attributeArray.renames;
for(var k in _38a){
v=_38a[k];
var _391=_390[k];
if(k=="style"&&typeof (v)=="string"){
elem.style.cssText=v;
}else{
if(typeof (_391)=="string"){
elem[_391]=v;
}else{
if(typeof (elem[k])=="object"&&typeof (v)=="object"){
if(k=="style"&&MochiKit.Style){
MochiKit.Style.setStyle(elem,v);
}else{
_38d(elem[k],v);
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
var _395=[self.coerceToDOM(MochiKit.Base.extend(null,arguments,1),elem)];
var _396=MochiKit.Base.concat;
while(_395.length){
var n=_395.shift();
if(typeof (n)=="undefined"||n===null){
}else{
if(typeof (n.nodeType)=="number"){
elem.appendChild(n);
}else{
_395=_396(n,_395);
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
var _39b=[self.coerceToDOM(MochiKit.Base.extend(null,arguments,1),elem)];
var _39c=elem.parentNode;
var _39d=MochiKit.Base.concat;
while(_39b.length){
var n=_39b.shift();
if(typeof (n)=="undefined"||n===null){
}else{
if(typeof (n.nodeType)=="number"){
_39c.insertBefore(n,elem);
}else{
_39b=_39d(n,_39b);
}
}
}
return _39c;
},insertSiblingNodesAfter:function(node){
var elem=node;
var self=MochiKit.DOM;
if(typeof (node)=="string"){
elem=self.getElement(node);
}
var _3a2=[self.coerceToDOM(MochiKit.Base.extend(null,arguments,1),elem)];
if(elem.nextSibling){
return self.insertSiblingNodesBefore(elem.nextSibling,_3a2);
}else{
return self.appendChildNodes(elem.parentNode,_3a2);
}
},replaceChildNodes:function(node){
var elem=node;
var self=MochiKit.DOM;
if(typeof (node)=="string"){
elem=self.getElement(node);
arguments[0]=elem;
}
var _3a6;
while((_3a6=elem.firstChild)){
elem.removeChild(_3a6);
}
if(arguments.length<2){
return elem;
}else{
return self.appendChildNodes.apply(this,arguments);
}
},createDOM:function(name,_3a8){
var elem;
var self=MochiKit.DOM;
var m=MochiKit.Base;
if(typeof (_3a8)=="string"||typeof (_3a8)=="number"){
var args=m.extend([name,null],arguments,1);
return arguments.callee.apply(this,args);
}
if(typeof (name)=="string"){
var _3ad=self._xhtml;
if(_3a8&&!self.attributeArray.compliant){
var _3ae="";
if("name" in _3a8){
_3ae+=" name=\""+self.escapeHTML(_3a8.name)+"\"";
}
if(name=="input"&&"type" in _3a8){
_3ae+=" type=\""+self.escapeHTML(_3a8.type)+"\"";
}
if(_3ae){
name="<"+name+_3ae+">";
_3ad=false;
}
}
var d=self._document;
if(_3ad&&d===document){
elem=d.createElementNS("http://www.w3.org/1999/xhtml",name);
}else{
elem=d.createElement(name);
}
}else{
elem=name;
}
if(_3a8){
self.updateNodeAttributes(elem,_3a8);
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
if(typeof (elem)=="string"){
elem=self.getElement(elem);
}
var e=self.coerceToDOM(elem);
e.parentNode.removeChild(e);
return e;
},swapDOM:function(dest,src){
var self=MochiKit.DOM;
dest=self.getElement(dest);
var _3b7=dest.parentNode;
if(src){
if(typeof (src)=="string"){
src=self.getElement(src);
}
src=self.coerceToDOM(src,_3b7);
_3b7.replaceChild(src,dest);
}else{
_3b7.removeChild(dest);
}
return src;
},getElement:function(id){
var self=MochiKit.DOM;
if(arguments.length==1){
return ((typeof (id)=="string")?self._document.getElementById(id):id);
}else{
return MochiKit.Base.map(self.getElement,arguments);
}
},getElementsByTagAndClassName:function(_3ba,_3bb,_3bc){
var self=MochiKit.DOM;
if(typeof (_3ba)=="undefined"||_3ba===null){
_3ba="*";
}
if(typeof (_3bc)=="undefined"||_3bc===null){
_3bc=self._document;
}
_3bc=self.getElement(_3bc);
if(_3bc==null){
return [];
}
var _3be=(_3bc.getElementsByTagName(_3ba)||self._document.all);
if(typeof (_3bb)=="undefined"||_3bb===null){
return MochiKit.Base.extend(null,_3be);
}
var _3bf=[];
for(var i=0;i<_3be.length;i++){
var _3c1=_3be[i];
var cls=_3c1.className;
if(typeof (cls)!="string"){
cls=_3c1.getAttribute("class");
}
if(typeof (cls)=="string"){
var _3c3=cls.split(" ");
for(var j=0;j<_3c3.length;j++){
if(_3c3[j]==_3bb){
_3bf.push(_3c1);
break;
}
}
}
}
return _3bf;
},_newCallStack:function(path,once){
var rval=function(){
var _3c8=arguments.callee.callStack;
for(var i=0;i<_3c8.length;i++){
if(_3c8[i].apply(this,arguments)===false){
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
},addToCallStack:function(_3ca,path,func,once){
var self=MochiKit.DOM;
var _3cf=_3ca[path];
var _3d0=_3cf;
if(!(typeof (_3cf)=="function"&&typeof (_3cf.callStack)=="object"&&_3cf.callStack!==null)){
_3d0=self._newCallStack(path,once);
if(typeof (_3cf)=="function"){
_3d0.callStack.push(_3cf);
}
_3ca[path]=_3d0;
}
_3d0.callStack.push(func);
},addLoadEvent:function(func){
var self=MochiKit.DOM;
self.addToCallStack(self._window,"onload",func,true);
},focusOnLoad:function(_3d3){
var self=MochiKit.DOM;
self.addLoadEvent(function(){
_3d3=self.getElement(_3d3);
if(_3d3){
_3d3.focus();
}
});
},setElementClass:function(_3d5,_3d6){
var self=MochiKit.DOM;
var obj=self.getElement(_3d5);
if(self.attributeArray.compliant){
obj.setAttribute("class",_3d6);
}else{
obj.setAttribute("className",_3d6);
}
},toggleElementClass:function(_3d9){
var self=MochiKit.DOM;
for(var i=1;i<arguments.length;i++){
var obj=self.getElement(arguments[i]);
if(!self.addElementClass(obj,_3d9)){
self.removeElementClass(obj,_3d9);
}
}
},addElementClass:function(_3dd,_3de){
var self=MochiKit.DOM;
var obj=self.getElement(_3dd);
var cls=obj.className;
if(typeof (cls)!="string"){
cls=obj.getAttribute("class");
}
if(typeof (cls)!="string"||cls.length===0){
self.setElementClass(obj,_3de);
return true;
}
if(cls==_3de){
return false;
}
var _3e2=cls.split(" ");
for(var i=0;i<_3e2.length;i++){
if(_3e2[i]==_3de){
return false;
}
}
self.setElementClass(obj,cls+" "+_3de);
return true;
},removeElementClass:function(_3e4,_3e5){
var self=MochiKit.DOM;
var obj=self.getElement(_3e4);
var cls=obj.className;
if(typeof (cls)!="string"){
cls=obj.getAttribute("class");
}
if(typeof (cls)!="string"||cls.length===0){
return false;
}
if(cls==_3e5){
self.setElementClass(obj,"");
return true;
}
var _3e9=cls.split(" ");
for(var i=0;i<_3e9.length;i++){
if(_3e9[i]==_3e5){
_3e9.splice(i,1);
self.setElementClass(obj,_3e9.join(" "));
return true;
}
}
return false;
},swapElementClass:function(_3eb,_3ec,_3ed){
var obj=MochiKit.DOM.getElement(_3eb);
var res=MochiKit.DOM.removeElementClass(obj,_3ec);
if(res){
MochiKit.DOM.addElementClass(obj,_3ed);
}
return res;
},hasElementClass:function(_3f0,_3f1){
var obj=MochiKit.DOM.getElement(_3f0);
if(obj==null){
return false;
}
var cls=obj.className;
if(typeof (cls)!="string"&&typeof (obj.getAttribute)=="function"){
cls=obj.getAttribute("class");
}
if(typeof (cls)!="string"){
return false;
}
var _3f4=cls.split(" ");
for(var i=1;i<arguments.length;i++){
var good=false;
for(var j=0;j<_3f4.length;j++){
if(_3f4[j]==arguments[i]){
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
var _3fc=[dom];
var self=MochiKit.DOM;
var _3fe=self.escapeHTML;
var _3ff=self.attributeArray;
while(_3fc.length){
dom=_3fc.pop();
if(typeof (dom)=="string"){
lst.push(dom);
}else{
if(dom.nodeType==1){
lst.push("<"+dom.tagName.toLowerCase());
var _400=[];
var _401=_3ff(dom);
for(var i=0;i<_401.length;i++){
var a=_401[i];
_400.push([" ",a.name,"=\"",_3fe(a.value),"\""]);
}
_400.sort();
for(i=0;i<_400.length;i++){
var _404=_400[i];
for(var j=0;j<_404.length;j++){
lst.push(_404[j]);
}
}
if(dom.hasChildNodes()){
lst.push(">");
_3fc.push("</"+dom.tagName.toLowerCase()+">");
var _406=dom.childNodes;
for(i=_406.length-1;i>=0;i--){
_3fc.push(_406[i]);
}
}else{
lst.push("/>");
}
}else{
if(dom.nodeType==3){
lst.push(_3fe(dom.nodeValue));
}
}
}
}
return lst;
},scrapeText:function(node,_408){
var rval=[];
(function(node){
var cn=node.childNodes;
if(cn){
for(var i=0;i<cn.length;i++){
arguments.callee.call(this,cn[i]);
}
}
var _40d=node.nodeValue;
if(typeof (_40d)=="string"){
rval.push(_40d);
}
})(MochiKit.DOM.getElement(node));
if(_408){
return rval;
}else{
return rval.join("");
}
},removeEmptyTextNodes:function(_40e){
_40e=MochiKit.DOM.getElement(_40e);
for(var i=0;i<_40e.childNodes.length;i++){
var node=_40e.childNodes[i];
if(node.nodeType==3&&!/\S/.test(node.nodeValue)){
node.parentNode.removeChild(node);
}
}
},getFirstElementByTagAndClassName:function(_411,_412,_413){
var self=MochiKit.DOM;
if(typeof (_411)=="undefined"||_411===null){
_411="*";
}
if(typeof (_413)=="undefined"||_413===null){
_413=self._document;
}
_413=self.getElement(_413);
if(_413==null){
return null;
}
var _415=(_413.getElementsByTagName(_411)||self._document.all);
if(_415.length<=0){
return null;
}else{
if(typeof (_412)=="undefined"||_412===null){
return _415[0];
}
}
for(var i=0;i<_415.length;i++){
var _417=_415[i];
var cls=_417.className;
if(typeof (cls)!="string"){
cls=_417.getAttribute("class");
}
if(typeof (cls)=="string"){
var _419=cls.split(" ");
for(var j=0;j<_419.length;j++){
if(_419[j]==_412){
return _417;
}
}
}
}
return null;
},getFirstParentByTagAndClassName:function(elem,_41c,_41d){
var self=MochiKit.DOM;
elem=self.getElement(elem);
if(typeof (_41c)=="undefined"||_41c===null){
_41c="*";
}else{
_41c=_41c.toUpperCase();
}
if(typeof (_41d)=="undefined"||_41d===null){
_41d=null;
}
if(elem){
elem=elem.parentNode;
}
while(elem&&elem.tagName){
var _41f=elem.tagName.toUpperCase();
if((_41c==="*"||_41c==_41f)&&(_41d===null||self.hasElementClass(elem,_41d))){
return elem;
}
elem=elem.parentNode;
}
return null;
},__new__:function(win){
var m=MochiKit.Base;
if(typeof (document)!="undefined"){
this._document=document;
var _422="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
this._xhtml=(document.documentElement&&document.createElementNS&&document.documentElement.namespaceURI===_422);
}else{
if(MochiKit.MockDOM){
this._document=MochiKit.MockDOM.document;
}
}
this._window=win;
this.domConverters=new m.AdapterRegistry();
var _423=this._document.createElement("span");
var _424;
if(_423&&_423.attributes&&_423.attributes.length>0){
var _425=m.filter;
_424=function(node){
return _425(_424.ignoreAttrFilter,node.attributes);
};
_424.ignoreAttr={};
var _427=_423.attributes;
var _428=_424.ignoreAttr;
for(var i=0;i<_427.length;i++){
var a=_427[i];
_428[a.name]=a.value;
}
_424.ignoreAttrFilter=function(a){
return (_424.ignoreAttr[a.name]!=a.value);
};
_424.compliant=false;
_424.renames={"class":"className","checked":"defaultChecked","usemap":"useMap","for":"htmlFor","readonly":"readOnly","colspan":"colSpan","bgcolor":"bgColor","cellspacing":"cellSpacing","cellpadding":"cellPadding"};
}else{
_424=function(node){
return node.attributes;
};
_424.compliant=true;
_424.ignoreAttr={};
_424.renames={};
}
_424.__export__=false;
this.attributeArray=_424;
m._deprecated(this,"computedStyle","MochiKit.Style.getStyle","1.4",true);
m._deprecated(this,"elementDimensions","MochiKit.Style.getElementDimensions","1.4");
m._deprecated(this,"elementPosition","MochiKit.Style.getElementPosition","1.4");
m._deprecated(this,"getViewportDimensions","MochiKit.Style.getViewportDimensions","1.4");
m._deprecated(this,"hideElement","MochiKit.Style.hideElement","1.4");
m._deprecated(this,"makeClipping","MochiKit.Style.makeClipping","1.4.1");
m._deprecated(this,"makePositioned","MochiKit.Style.makePositioned","1.4.1");
m._deprecated(this,"setElementDimensions","MochiKit.Style.setElementDimensions","1.4");
m._deprecated(this,"setElementPosition","MochiKit.Style.setElementPosition","1.4");
m._deprecated(this,"setDisplayForElement","MochiKit.Style.setDisplayForElement","1.4");
m._deprecated(this,"setOpacity","MochiKit.Style.setOpacity","1.4");
m._deprecated(this,"showElement","MochiKit.Style.showElement","1.4");
m._deprecated(this,"undoClipping","MochiKit.Style.undoClipping","1.4.1");
m._deprecated(this,"undoPositioned","MochiKit.Style.undoPositioned","1.4.1");
m._deprecated(this,"Coordinates","MochiKit.Style.Coordinates","1.4");
m._deprecated(this,"Dimensions","MochiKit.Style.Dimensions","1.4");
var _42d=this.createDOMFunc;
this.UL=_42d("ul");
this.OL=_42d("ol");
this.LI=_42d("li");
this.DL=_42d("dl");
this.DT=_42d("dt");
this.DD=_42d("dd");
this.TD=_42d("td");
this.TR=_42d("tr");
this.TBODY=_42d("tbody");
this.THEAD=_42d("thead");
this.TFOOT=_42d("tfoot");
this.TABLE=_42d("table");
this.TH=_42d("th");
this.INPUT=_42d("input");
this.SPAN=_42d("span");
this.A=_42d("a");
this.DIV=_42d("div");
this.IMG=_42d("img");
this.BUTTON=_42d("button");
this.TT=_42d("tt");
this.PRE=_42d("pre");
this.H1=_42d("h1");
this.H2=_42d("h2");
this.H3=_42d("h3");
this.H4=_42d("h4");
this.H5=_42d("h5");
this.H6=_42d("h6");
this.BR=_42d("br");
this.HR=_42d("hr");
this.LABEL=_42d("label");
this.TEXTAREA=_42d("textarea");
this.FORM=_42d("form");
this.P=_42d("p");
this.SELECT=_42d("select");
this.OPTION=_42d("option");
this.OPTGROUP=_42d("optgroup");
this.LEGEND=_42d("legend");
this.FIELDSET=_42d("fieldset");
this.STRONG=_42d("strong");
this.CANVAS=_42d("canvas");
this.$=this.getElement;
m.nameFunctions(this);
}});
MochiKit.DOM.__new__(((typeof (window)=="undefined")?this:window));
if(MochiKit.__export__){
withWindow=MochiKit.DOM.withWindow;
withDocument=MochiKit.DOM.withDocument;
}
MochiKit.Base._exportSymbols(this,MochiKit.DOM);
MochiKit.Base._module("Selector","1.5",["Base","DOM","Iter"]);
MochiKit.Selector.Selector=function(_42e){
this.params={classNames:[],pseudoClassNames:[]};
this.expression=_42e.toString().replace(/(^\s+|\s+$)/g,"");
this.parseExpression();
this.compileMatcher();
};
MochiKit.Selector.Selector.prototype={__class__:MochiKit.Selector.Selector,parseExpression:function(){
function abort(_42f){
throw "Parse error in selector: "+_42f;
}
if(this.expression==""){
abort("empty expression");
}
var repr=MochiKit.Base.repr;
var _431=this.params;
var expr=this.expression;
var _433,_434,_435,rest;
while(_433=expr.match(/^(.*)\[([a-z0-9_:-]+?)(?:([~\|!^$*]?=)(?:"([^"]*)"|([^\]\s]*)))?\]$/i)){
_431.attributes=_431.attributes||[];
_431.attributes.push({name:_433[2],operator:_433[3],value:_433[4]||_433[5]||""});
expr=_433[1];
}
if(expr=="*"){
return this.params.wildcard=true;
}
while(_433=expr.match(/^([^a-z0-9_-])?([a-z0-9_-]+(?:\([^)]*\))?)(.*)/i)){
_434=_433[1];
_435=_433[2];
rest=_433[3];
switch(_434){
case "#":
_431.id=_435;
break;
case ".":
_431.classNames.push(_435);
break;
case ":":
_431.pseudoClassNames.push(_435);
break;
case "":
case undefined:
_431.tagName=_435.toUpperCase();
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
var _438=this.params;
var _439=[];
var _43a,i;
function childElements(_43c){
return "MochiKit.Base.filter(function (node) { return node.nodeType == 1; }, "+_43c+".childNodes)";
}
if(_438.wildcard){
_439.push("true");
}
if(_43a=_438.id){
_439.push("element.id == "+repr(_43a));
}
if(_43a=_438.tagName){
_439.push("element.tagName.toUpperCase() == "+repr(_43a));
}
if((_43a=_438.classNames).length>0){
for(i=0;i<_43a.length;i++){
_439.push("MochiKit.DOM.hasElementClass(element, "+repr(_43a[i])+")");
}
}
if((_43a=_438.pseudoClassNames).length>0){
for(i=0;i<_43a.length;i++){
var _43d=_43a[i].match(/^([^(]+)(?:\((.*)\))?$/);
var _43e=_43d[1];
var _43f=_43d[2];
switch(_43e){
case "root":
_439.push("element.nodeType == 9 || element === element.ownerDocument.documentElement");
break;
case "nth-child":
case "nth-last-child":
case "nth-of-type":
case "nth-last-of-type":
_43d=_43f.match(/^((?:(\d+)n\+)?(\d+)|odd|even)$/);
if(!_43d){
throw "Invalid argument to pseudo element nth-child: "+_43f;
}
var a,b;
if(_43d[0]=="odd"){
a=2;
b=1;
}else{
if(_43d[0]=="even"){
a=2;
b=0;
}else{
a=_43d[2]&&parseInt(_43d)||null;
b=parseInt(_43d[3]);
}
}
_439.push("this.nthChild(element,"+a+","+b+","+!!_43e.match("^nth-last")+","+!!_43e.match("of-type$")+")");
break;
case "first-child":
_439.push("this.nthChild(element, null, 1)");
break;
case "last-child":
_439.push("this.nthChild(element, null, 1, true)");
break;
case "first-of-type":
_439.push("this.nthChild(element, null, 1, false, true)");
break;
case "last-of-type":
_439.push("this.nthChild(element, null, 1, true, true)");
break;
case "only-child":
_439.push(childElements("element.parentNode")+".length == 1");
break;
case "only-of-type":
_439.push("MochiKit.Base.filter(function (node) { return node.tagName == element.tagName; }, "+childElements("element.parentNode")+").length == 1");
break;
case "empty":
_439.push("element.childNodes.length == 0");
break;
case "enabled":
_439.push("(this.isUIElement(element) && element.disabled === false)");
break;
case "disabled":
_439.push("(this.isUIElement(element) && element.disabled === true)");
break;
case "checked":
_439.push("(this.isUIElement(element) && element.checked === true)");
break;
case "not":
var _442=new MochiKit.Selector.Selector(_43f);
_439.push("!( "+_442.buildMatchExpression()+")");
break;
}
}
}
if(_43a=_438.attributes){
MochiKit.Base.map(function(_443){
var _444="MochiKit.DOM.getNodeAttribute(element, "+repr(_443.name)+")";
var _445=function(_446){
return _444+".split("+repr(_446)+")";
};
_439.push(_444+" != null");
switch(_443.operator){
case "=":
_439.push(_444+" == "+repr(_443.value));
break;
case "~=":
_439.push("MochiKit.Base.findValue("+_445(" ")+", "+repr(_443.value)+") > -1");
break;
case "^=":
_439.push(_444+".substring(0, "+_443.value.length+") == "+repr(_443.value));
break;
case "$=":
_439.push(_444+".substring("+_444+".length - "+_443.value.length+") == "+repr(_443.value));
break;
case "*=":
_439.push(_444+".match("+repr(_443.value)+")");
break;
case "|=":
_439.push(_445("-")+"[0].toUpperCase() == "+repr(_443.value.toUpperCase()));
break;
case "!=":
_439.push(_444+" != "+repr(_443.value));
break;
case "":
case undefined:
break;
default:
throw "Unknown operator "+_443.operator+" in selector";
}
},_43a);
}
return _439.join(" && ");
},compileMatcher:function(){
var code="return (!element.tagName) ? false : "+this.buildMatchExpression()+";";
this.match=new Function("element",code);
},nthChild:function(_448,a,b,_44b,_44c){
var _44d=MochiKit.Base.filter(function(node){
return node.nodeType==1;
},_448.parentNode.childNodes);
if(_44c){
_44d=MochiKit.Base.filter(function(node){
return node.tagName==_448.tagName;
},_44d);
}
if(_44b){
_44d=MochiKit.Iter.reversed(_44d);
}
if(a){
var _450=MochiKit.Base.findIdentical(_44d,_448);
return ((_450+1-b)/a)%1==0;
}else{
return b==MochiKit.Base.findIdentical(_44d,_448)+1;
}
},isUIElement:function(_451){
return MochiKit.Base.findValue(["input","button","select","option","textarea","object"],_451.tagName.toLowerCase())>-1;
},findElements:function(_452,axis){
var _454;
if(axis==undefined){
axis="";
}
function inScope(_455,_456){
if(axis==""){
return MochiKit.DOM.isChildNode(_455,_456);
}else{
if(axis==">"){
return _455.parentNode===_456;
}else{
if(axis=="+"){
return _455===nextSiblingElement(_456);
}else{
if(axis=="~"){
var _457=_456;
while(_457=nextSiblingElement(_457)){
if(_455===_457){
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
if(_454=MochiKit.DOM.getElement(this.params.id)){
if(this.match(_454)){
if(!_452||inScope(_454,_452)){
return [_454];
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
_452=(_452||MochiKit.DOM.currentDocument()).getElementsByTagName(this.params.tagName||"*");
}else{
if(axis==">"){
if(!_452){
throw "> combinator not allowed without preceeding expression";
}
_452=MochiKit.Base.filter(function(node){
return node.nodeType==1;
},_452.childNodes);
}else{
if(axis=="+"){
if(!_452){
throw "+ combinator not allowed without preceeding expression";
}
_452=nextSiblingElement(_452)&&[nextSiblingElement(_452)];
}else{
if(axis=="~"){
if(!_452){
throw "~ combinator not allowed without preceeding expression";
}
var _45a=[];
while(nextSiblingElement(_452)){
_452=nextSiblingElement(_452);
_45a.push(_452);
}
_452=_45a;
}
}
}
}
if(!_452){
return [];
}
var _45b=MochiKit.Base.filter(MochiKit.Base.bind(function(_45c){
return this.match(_45c);
},this),_452);
return _45b;
},repr:function(){
return "Selector("+this.expression+")";
},toString:MochiKit.Base.forwardCall("repr")};
MochiKit.Base.update(MochiKit.Selector,{findChildElements:function(_45d,_45e){
_45d=MochiKit.DOM.getElement(_45d);
var uniq=function(arr){
var res=[];
for(var i=0;i<arr.length;i++){
if(MochiKit.Base.findIdentical(res,arr[i])<0){
res.push(arr[i]);
}
}
return res;
};
return MochiKit.Base.flattenArray(MochiKit.Base.map(function(_463){
var _464="";
var _465=function(_466,expr){
var _468=expr.match(/^[>+~]$/);
if(_468){
_464=_468[0];
return _466;
}else{
var _469=new MochiKit.Selector.Selector(expr);
var _46a=MochiKit.Iter.reduce(function(_46b,_46c){
return MochiKit.Base.extend(_46b,_469.findElements(_46c||_45d,_464));
},_466,[]);
_464="";
return _46a;
}
};
var _46d=_463.replace(/(^\s+|\s+$)/g,"").split(/\s+/);
return uniq(MochiKit.Iter.reduce(_465,_46d,[null]));
},_45e));
},findDocElements:function(){
return MochiKit.Selector.findChildElements(MochiKit.DOM.currentDocument(),arguments);
},__new__:function(){
this.$$=this.findDocElements;
MochiKit.Base.nameFunctions(this);
}});
MochiKit.Selector.__new__();
MochiKit.Base._exportSymbols(this,MochiKit.Selector);
MochiKit.Base._module("Style","1.5",["Base","DOM"]);
MochiKit.Style.Dimensions=function(w,h){
if(!(this instanceof MochiKit.Style.Dimensions)){
return new MochiKit.Style.Dimensions(w,h);
}
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
if(!(this instanceof MochiKit.Style.Coordinates)){
return new MochiKit.Style.Coordinates(x,y);
}
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
MochiKit.Base.update(MochiKit.Style,{getStyle:function(elem,_475){
var dom=MochiKit.DOM;
var d=dom._document;
elem=dom.getElement(elem);
_475=MochiKit.Base.camelize(_475);
if(!elem||elem==d){
return undefined;
}
if(_475=="opacity"&&typeof (elem.filters)!="undefined"){
var _478=(MochiKit.Style.getStyle(elem,"filter")||"").match(/alpha\(opacity=(.*)\)/);
if(_478&&_478[1]){
return parseFloat(_478[1])/100;
}
return 1;
}
if(_475=="float"||_475=="cssFloat"||_475=="styleFloat"){
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
var _479=elem.style?elem.style[_475]:null;
if(!_479){
if(d.defaultView&&d.defaultView.getComputedStyle){
var css=d.defaultView.getComputedStyle(elem,null);
_475=_475.replace(/([A-Z])/g,"-$1").toLowerCase();
_479=css?css.getPropertyValue(_475):null;
}else{
if(elem.currentStyle){
_479=elem.currentStyle[_475];
if(/^\d/.test(_479)&&!/px$/.test(_479)&&_475!="fontWeight"){
var left=elem.style.left;
var _47c=elem.runtimeStyle.left;
elem.runtimeStyle.left=elem.currentStyle.left;
elem.style.left=_479||0;
_479=elem.style.pixelLeft+"px";
elem.style.left=left;
elem.runtimeStyle.left=_47c;
}
}
}
}
if(_475=="opacity"){
_479=parseFloat(_479);
}
if(/Opera/.test(navigator.userAgent)&&(MochiKit.Base.findValue(["left","top","right","bottom"],_475)!=-1)){
if(MochiKit.Style.getStyle(elem,"position")=="static"){
_479="auto";
}
}
return _479=="auto"?null:_479;
},setStyle:function(elem,_47e){
elem=MochiKit.DOM.getElement(elem);
for(var name in _47e){
switch(name){
case "opacity":
MochiKit.Style.setOpacity(elem,_47e[name]);
break;
case "float":
case "cssFloat":
case "styleFloat":
if(typeof (elem.style["float"])!="undefined"){
elem.style["float"]=_47e[name];
}else{
if(typeof (elem.style.cssFloat)!="undefined"){
elem.style.cssFloat=_47e[name];
}else{
elem.style.styleFloat=_47e[name];
}
}
break;
default:
elem.style[MochiKit.Base.camelize(name)]=_47e[name];
}
}
},setOpacity:function(elem,o){
elem=MochiKit.DOM.getElement(elem);
var self=MochiKit.Style;
if(o==1){
var _483=/Gecko/.test(navigator.userAgent)&&!(/Konqueror|AppleWebKit|KHTML/.test(navigator.userAgent));
elem.style["opacity"]=_483?0.999999:1;
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
},getElementPosition:function(elem,_485){
var self=MochiKit.Style;
var dom=MochiKit.DOM;
var _488=function(o){
return o!=null&&o.nodeType==null&&typeof (o.x)=="number"&&typeof (o.y)=="number";
};
if(typeof (elem)=="string"){
elem=dom.getElement(elem);
}
if(elem==null||(!_488(elem)&&self.getStyle(elem,"display")=="none")){
return undefined;
}
var c=new self.Coordinates(0,0);
var box=null;
var _48c=null;
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
_48c=elem.offsetParent;
if(_48c!=elem){
while(_48c){
c.x+=parseInt(_48c.style.borderLeftWidth)||0;
c.y+=parseInt(_48c.style.borderTopWidth)||0;
c.x+=_48c.offsetLeft;
c.y+=_48c.offsetTop;
_48c=_48c.offsetParent;
}
}
var ua=navigator.userAgent.toLowerCase();
if((typeof (opera)!="undefined"&&parseFloat(opera.version())<9)||(ua.indexOf("AppleWebKit")!=-1&&self.getStyle(elem,"position")=="absolute")){
c.x-=b.offsetLeft;
c.y-=b.offsetTop;
}
if(elem.parentNode){
_48c=elem.parentNode;
}else{
_48c=null;
}
while(_48c){
var _491=_48c.tagName.toUpperCase();
if(_491==="BODY"||_491==="HTML"){
break;
}
var disp=self.getStyle(_48c,"display");
if(disp.search(/^inline|table-row.*$/i)){
c.x-=_48c.scrollLeft;
c.y-=_48c.scrollTop;
}
if(_48c.parentNode){
_48c=_48c.parentNode;
}else{
_48c=null;
}
}
}
}
}
if(_485){
_485=arguments.callee(_485);
if(_485){
c.x-=(_485.x||0);
c.y-=(_485.y||0);
}
}
return c;
},setElementPosition:function(elem,_494,_495){
elem=MochiKit.DOM.getElement(elem);
if(typeof (_495)=="undefined"){
_495="px";
}
var _496={};
var _497=MochiKit.Base.isUndefinedOrNull;
if(!_497(_494.x)){
_496["left"]=_494.x+_495;
}
if(!_497(_494.y)){
_496["top"]=_494.y+_495;
}
MochiKit.DOM.updateNodeAttributes(elem,{"style":_496});
},makePositioned:function(_498){
_498=MochiKit.DOM.getElement(_498);
var pos=MochiKit.Style.getStyle(_498,"position");
if(pos=="static"||!pos){
_498.style.position="relative";
if(/Opera/.test(navigator.userAgent)){
_498.style.top=0;
_498.style.left=0;
}
}
},undoPositioned:function(_49a){
_49a=MochiKit.DOM.getElement(_49a);
if(_49a.style.position=="relative"){
_49a.style.position=_49a.style.top=_49a.style.left=_49a.style.bottom=_49a.style.right="";
}
},makeClipping:function(_49b){
_49b=MochiKit.DOM.getElement(_49b);
var s=_49b.style;
var _49d={"overflow":s.overflow,"overflow-x":s.overflowX,"overflow-y":s.overflowY};
if((MochiKit.Style.getStyle(_49b,"overflow")||"visible")!="hidden"){
_49b.style.overflow="hidden";
_49b.style.overflowX="hidden";
_49b.style.overflowY="hidden";
}
return _49d;
},undoClipping:function(_49e,_49f){
_49e=MochiKit.DOM.getElement(_49e);
if(typeof (_49f)=="string"){
_49e.style.overflow=_49f;
}else{
if(_49f!=null){
_49e.style.overflow=_49f["overflow"];
_49e.style.overflowX=_49f["overflow-x"];
_49e.style.overflowY=_49f["overflow-y"];
}
}
},getElementDimensions:function(elem,_4a1){
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
var _4a6=s.visibility;
var _4a7=s.position;
var _4a8=s.display;
s.visibility="hidden";
s.position="absolute";
s.display=self._getDefaultDisplay(elem);
var _4a9=elem.offsetWidth;
var _4aa=elem.offsetHeight;
s.display=_4a8;
s.position=_4a7;
s.visibility=_4a6;
}else{
_4a9=elem.offsetWidth||0;
_4aa=elem.offsetHeight||0;
}
if(_4a1){
var _4ab="colSpan" in elem&&"rowSpan" in elem;
var _4ac=(_4ab&&elem.parentNode&&self.getStyle(elem.parentNode,"borderCollapse")=="collapse");
if(_4ac){
if(/MSIE/.test(navigator.userAgent)){
var _4ad=elem.previousSibling?0.5:1;
var _4ae=elem.nextSibling?0.5:1;
}else{
var _4ad=0.5;
var _4ae=0.5;
}
}else{
var _4ad=1;
var _4ae=1;
}
_4a9-=Math.round((parseFloat(self.getStyle(elem,"paddingLeft"))||0)+(parseFloat(self.getStyle(elem,"paddingRight"))||0)+_4ad*(parseFloat(self.getStyle(elem,"borderLeftWidth"))||0)+_4ae*(parseFloat(self.getStyle(elem,"borderRightWidth"))||0));
if(_4ab){
if(/Gecko|Opera/.test(navigator.userAgent)&&!/Konqueror|AppleWebKit|KHTML/.test(navigator.userAgent)){
var _4af=0;
}else{
if(/MSIE/.test(navigator.userAgent)){
var _4af=1;
}else{
var _4af=_4ac?0.5:1;
}
}
}else{
var _4af=1;
}
_4aa-=Math.round((parseFloat(self.getStyle(elem,"paddingTop"))||0)+(parseFloat(self.getStyle(elem,"paddingBottom"))||0)+_4af*((parseFloat(self.getStyle(elem,"borderTopWidth"))||0)+(parseFloat(self.getStyle(elem,"borderBottomWidth"))||0)));
}
return new self.Dimensions(_4a9,_4aa);
},setElementDimensions:function(elem,_4b1,_4b2){
elem=MochiKit.DOM.getElement(elem);
if(typeof (_4b2)=="undefined"){
_4b2="px";
}
var _4b3={};
var _4b4=MochiKit.Base.isUndefinedOrNull;
if(!_4b4(_4b1.w)){
_4b3["width"]=_4b1.w+_4b2;
}
if(!_4b4(_4b1.h)){
_4b3["height"]=_4b1.h+_4b2;
}
MochiKit.DOM.updateNodeAttributes(elem,{"style":_4b3});
},_getDefaultDisplay:function(elem){
var self=MochiKit.Style;
var dom=MochiKit.DOM;
elem=dom.getElement(elem);
if(!elem){
return undefined;
}
var _4b8=elem.tagName.toUpperCase();
return self._defaultDisplay[_4b8]||"block";
},setDisplayForElement:function(_4b9,_4ba){
var _4bb=MochiKit.Base.extend(null,arguments,1);
var _4bc=MochiKit.DOM.getElement;
for(var i=0;i<_4bb.length;i++){
_4ba=_4bc(_4bb[i]);
if(_4ba){
_4ba.style.display=_4b9;
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
if(b&&b.parentElement&&b.parentElement.clientWidth){
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
var _4c6=["A","ABBR","ACRONYM","B","BASEFONT","BDO","BIG","BR","CITE","CODE","DFN","EM","FONT","I","IMG","KBD","LABEL","Q","S","SAMP","SMALL","SPAN","STRIKE","STRONG","SUB","SUP","TEXTAREA","TT","U","VAR"];
this._defaultDisplay={"TABLE":"table","THEAD":"table-header-group","TBODY":"table-row-group","TFOOT":"table-footer-group","COLGROUP":"table-column-group","COL":"table-column","TR":"table-row","TD":"table-cell","TH":"table-cell","CAPTION":"table-caption","LI":"list-item","INPUT":"inline-block","SELECT":"inline-block"};
if(/MSIE/.test(navigator.userAgent)){
for(var k in this._defaultDisplay){
var v=this._defaultDisplay[k];
if(v.indexOf("table")==0){
this._defaultDisplay[k]="block";
}
}
}
for(var i=0;i<_4c6.length;i++){
this._defaultDisplay[_4c6[i]]="inline";
}
m._deprecated(this,"elementPosition","MochiKit.Style.getElementPosition","1.3",true);
m._deprecated(this,"elementDimensions","MochiKit.Style.getElementDimensions","1.3",true);
this.hideElement=m.partial(this.setDisplayForElement,"none");
this.showElement=m.partial(this.setDisplayForElement,"block");
m.nameFunctions(this);
}});
MochiKit.Style.__new__();
MochiKit.Base._exportSymbols(this,MochiKit.Style);
MochiKit.Base._module("LoggingPane","1.5",["Base","Logging"]);
MochiKit.LoggingPane.createLoggingPane=function(_4ca){
var m=MochiKit.LoggingPane;
_4ca=!(!_4ca);
if(m._loggingPane&&m._loggingPane.inline!=_4ca){
m._loggingPane.closePane();
m._loggingPane=null;
}
if(!m._loggingPane||m._loggingPane.closed){
m._loggingPane=new m.LoggingPane(_4ca,MochiKit.Logging.logger);
}
return m._loggingPane;
};
MochiKit.LoggingPane.LoggingPane=function(_4cc,_4cd){
if(typeof (_4cd)=="undefined"||_4cd===null){
_4cd=MochiKit.Logging.logger;
}
this.logger=_4cd;
var _4ce=MochiKit.Base.update;
var _4cf=MochiKit.Base.updatetree;
var bind=MochiKit.Base.bind;
var _4d1=MochiKit.Base.clone;
var win=window;
var uid="_MochiKit_LoggingPane";
if(typeof (MochiKit.DOM)!="undefined"){
win=MochiKit.DOM.currentWindow();
}
if(!_4cc){
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
var _4d8=doc.getElementById(uid);
var _4d9=!!_4d8;
if(_4d8&&typeof (_4d8.loggingPane)!="undefined"){
_4d8.loggingPane.logger=this.logger;
_4d8.loggingPane.buildAndApplyFilter();
return _4d8.loggingPane;
}
if(_4d9){
var _4da;
while((_4da=_4d8.firstChild)){
_4d8.removeChild(_4da);
}
}else{
_4d8=doc.createElement("div");
_4d8.id=uid;
}
_4d8.loggingPane=this;
var _4db=doc.createElement("input");
var _4dc=doc.createElement("input");
var _4dd=doc.createElement("button");
var _4de=doc.createElement("button");
var _4df=doc.createElement("button");
var _4e0=doc.createElement("button");
var _4e1=doc.createElement("div");
var _4e2=doc.createElement("div");
var _4e3=uid+"_Listener";
this.colorTable=_4d1(this.colorTable);
var _4e4=[];
var _4e5=null;
var _4e6=function(msg){
var _4e8=msg.level;
if(typeof (_4e8)=="number"){
_4e8=MochiKit.Logging.LogLevel[_4e8];
}
return _4e8;
};
var _4e9=function(msg){
return msg.info.join(" ");
};
var _4eb=bind(function(msg){
var _4ed=_4e6(msg);
var text=_4e9(msg);
var c=this.colorTable[_4ed];
var p=doc.createElement("span");
p.className="MochiKit-LogMessage MochiKit-LogLevel-"+_4ed;
p.style.cssText="margin: 0px; white-space: -moz-pre-wrap; white-space: -o-pre-wrap; white-space: pre-wrap; white-space: pre-line; word-wrap: break-word; wrap-option: emergency; color: "+c;
p.appendChild(doc.createTextNode(_4ed+": "+text));
_4e2.appendChild(p);
_4e2.appendChild(doc.createElement("br"));
if(_4e1.offsetHeight>_4e1.scrollHeight){
_4e1.scrollTop=0;
}else{
_4e1.scrollTop=_4e1.scrollHeight;
}
},this);
var _4f1=function(msg){
_4e4[_4e4.length]=msg;
_4eb(msg);
};
var _4f3=function(){
var _4f4,_4f5;
try{
_4f4=new RegExp(_4db.value);
_4f5=new RegExp(_4dc.value);
}
catch(e){
logDebug("Error in filter regex: "+e.message);
return null;
}
return function(msg){
return (_4f4.test(_4e6(msg))&&_4f5.test(_4e9(msg)));
};
};
var _4f7=function(){
while(_4e2.firstChild){
_4e2.removeChild(_4e2.firstChild);
}
};
var _4f8=function(){
_4e4=[];
_4f7();
};
var _4f9=bind(function(){
if(this.closed){
return;
}
this.closed=true;
if(MochiKit.LoggingPane._loggingPane==this){
MochiKit.LoggingPane._loggingPane=null;
}
this.logger.removeListener(_4e3);
try{
try{
_4d8.loggingPane=null;
}
catch(e){
logFatal("Bookmarklet was closed incorrectly.");
}
if(_4cc){
_4d8.parentNode.removeChild(_4d8);
}else{
this.win.close();
}
}
catch(e){
}
},this);
var _4fa=function(){
_4f7();
for(var i=0;i<_4e4.length;i++){
var msg=_4e4[i];
if(_4e5===null||_4e5(msg)){
_4eb(msg);
}
}
};
this.buildAndApplyFilter=function(){
_4e5=_4f3();
_4fa();
this.logger.removeListener(_4e3);
this.logger.addListener(_4e3,_4e5,_4f1);
};
var _4fd=bind(function(){
_4e4=this.logger.getMessages();
_4fa();
},this);
var _4fe=bind(function(_4ff){
_4ff=_4ff||window.event;
key=_4ff.which||_4ff.keyCode;
if(key==13){
this.buildAndApplyFilter();
}
},this);
var _500="display: block; z-index: 1000; left: 0px; bottom: 0px; position: fixed; width: 100%; background-color: white; font: "+this.logFont;
if(_4cc){
_500+="; height: 10em; border-top: 2px solid black";
}else{
_500+="; height: 100%;";
}
_4d8.style.cssText=_500;
if(!_4d9){
doc.body.appendChild(_4d8);
}
_500={"cssText":"width: 33%; display: inline; font: "+this.logFont};
_4cf(_4db,{"value":"FATAL|ERROR|WARNING|INFO|DEBUG","onkeypress":_4fe,"style":_500});
_4d8.appendChild(_4db);
_4cf(_4dc,{"value":".*","onkeypress":_4fe,"style":_500});
_4d8.appendChild(_4dc);
_500="width: 8%; display:inline; font: "+this.logFont;
_4dd.appendChild(doc.createTextNode("Filter"));
_4dd.onclick=bind("buildAndApplyFilter",this);
_4dd.style.cssText=_500;
_4d8.appendChild(_4dd);
_4de.appendChild(doc.createTextNode("Load"));
_4de.onclick=_4fd;
_4de.style.cssText=_500;
_4d8.appendChild(_4de);
_4df.appendChild(doc.createTextNode("Clear"));
_4df.onclick=_4f8;
_4df.style.cssText=_500;
_4d8.appendChild(_4df);
_4e0.appendChild(doc.createTextNode("Close"));
_4e0.onclick=_4f9;
_4e0.style.cssText=_500;
_4d8.appendChild(_4e0);
_4e1.style.cssText="overflow: auto; width: 100%";
_4e2.style.cssText="width: 100%; height: "+(_4cc?"8em":"100%");
_4e1.appendChild(_4e2);
_4d8.appendChild(_4e1);
this.buildAndApplyFilter();
_4fd();
if(_4cc){
this.win=undefined;
}else{
this.win=win;
}
this.inline=_4cc;
this.closePane=_4f9;
this.closed=false;
return this;
};
MochiKit.LoggingPane.LoggingPane.prototype={"logFont":"8pt Verdana,sans-serif","colorTable":{"ERROR":"red","FATAL":"darkred","WARNING":"blue","INFO":"black","DEBUG":"green"}};
MochiKit.LoggingPane.__new__=function(){
MochiKit.Base.nameFunctions(this);
MochiKit.LoggingPane._loggingPane=null;
};
MochiKit.LoggingPane.__new__();
MochiKit.Base._exportSymbols(this,MochiKit.LoggingPane);
MochiKit.Base._module("Color","1.5",["Base","DOM","Style"]);
MochiKit.Color.Color=function(red,_502,blue,_504){
if(typeof (_504)=="undefined"||_504===null){
_504=1;
}
this.rgb={r:red,g:_502,b:blue,a:_504};
};
MochiKit.Color.Color.prototype={__class__:MochiKit.Color.Color,colorWithAlpha:function(_505){
var rgb=this.rgb;
var m=MochiKit.Color;
return m.Color.fromRGB(rgb.r,rgb.g,rgb.b,_505);
},colorWithHue:function(hue){
var hsl=this.asHSL();
hsl.h=hue;
var m=MochiKit.Color;
return m.Color.fromHSL(hsl);
},colorWithSaturation:function(_50b){
var hsl=this.asHSL();
hsl.s=_50b;
var m=MochiKit.Color;
return m.Color.fromHSL(hsl);
},colorWithLightness:function(_50e){
var hsl=this.asHSL();
hsl.l=_50e;
var m=MochiKit.Color;
return m.Color.fromHSL(hsl);
},darkerColorWithLevel:function(_511){
var hsl=this.asHSL();
hsl.l=Math.max(hsl.l-_511,0);
var m=MochiKit.Color;
return m.Color.fromHSL(hsl);
},lighterColorWithLevel:function(_514){
var hsl=this.asHSL();
hsl.l=Math.min(hsl.l+_514,1);
var m=MochiKit.Color;
return m.Color.fromHSL(hsl);
},blendedColor:function(_517,_518){
if(typeof (_518)=="undefined"||_518===null){
_518=0.5;
}
var sf=1-_518;
var s=this.rgb;
var d=_517.rgb;
var df=_518;
return MochiKit.Color.Color.fromRGB((s.r*sf)+(d.r*df),(s.g*sf)+(d.g*df),(s.b*sf)+(d.b*df),(s.a*sf)+(d.a*df));
},compareRGB:function(_51d){
var a=this.asRGB();
var b=_51d.asRGB();
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
MochiKit.Base.update(MochiKit.Color.Color,{fromRGB:function(red,_534,blue,_536){
var _537=MochiKit.Color.Color;
if(arguments.length==1){
var rgb=red;
red=rgb.r;
_534=rgb.g;
blue=rgb.b;
if(typeof (rgb.a)=="undefined"){
_536=undefined;
}else{
_536=rgb.a;
}
}
return new _537(red,_534,blue,_536);
},fromHSL:function(hue,_53a,_53b,_53c){
var m=MochiKit.Color;
return m.Color.fromRGB(m.hslToRGB.apply(m,arguments));
},fromHSV:function(hue,_53f,_540,_541){
var m=MochiKit.Color;
return m.Color.fromRGB(m.hsvToRGB.apply(m,arguments));
},fromName:function(name){
var _544=MochiKit.Color.Color;
if(name.charAt(0)=="\""){
name=name.substr(1,name.length-2);
}
var _545=_544._namedColors[name.toLowerCase()];
if(typeof (_545)=="string"){
return _544.fromHexString(_545);
}else{
if(name=="transparent"){
return _544.transparentColor();
}
}
return null;
},fromString:function(_546){
var self=MochiKit.Color.Color;
var _548=_546.substr(0,3);
if(_548=="rgb"){
return self.fromRGBString(_546);
}else{
if(_548=="hsl"){
return self.fromHSLString(_546);
}else{
if(_546.charAt(0)=="#"){
return self.fromHexString(_546);
}
}
}
return self.fromName(_546);
},fromHexString:function(_549){
if(_549.charAt(0)=="#"){
_549=_549.substring(1);
}
var _54a=[];
var i,hex;
if(_549.length==3){
for(i=0;i<3;i++){
hex=_549.substr(i,1);
_54a.push(parseInt(hex+hex,16)/255);
}
}else{
for(i=0;i<6;i+=2){
hex=_549.substr(i,2);
_54a.push(parseInt(hex,16)/255);
}
}
var _54d=MochiKit.Color.Color;
return _54d.fromRGB.apply(_54d,_54a);
},_fromColorString:function(pre,_54f,_550,_551){
if(_551.indexOf(pre)===0){
_551=_551.substring(_551.indexOf("(",3)+1,_551.length-1);
}
var _552=_551.split(/\s*,\s*/);
var _553=[];
for(var i=0;i<_552.length;i++){
var c=_552[i];
var val;
var _557=c.substring(c.length-3);
if(c.charAt(c.length-1)=="%"){
val=0.01*parseFloat(c.substring(0,c.length-1));
}else{
if(_557=="deg"){
val=parseFloat(c)/360;
}else{
if(_557=="rad"){
val=parseFloat(c)/(Math.PI*2);
}else{
val=_550[i]*parseFloat(c);
}
}
}
_553.push(val);
}
return this[_54f].apply(this,_553);
},fromComputedStyle:function(elem,_559){
var d=MochiKit.DOM;
var cls=MochiKit.Color.Color;
for(elem=d.getElement(elem);elem;elem=elem.parentNode){
var _55c=MochiKit.Style.getStyle.apply(d,arguments);
if(!_55c){
continue;
}
var _55d=cls.fromString(_55c);
if(!_55d){
break;
}
if(_55d.asRGB().a>0){
return _55d;
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
MochiKit.Base.update(MochiKit.Color,{clampColorComponent:function(v,_563){
v*=_563;
if(v<0){
return 0;
}else{
if(v>_563){
return _563;
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
},hsvToRGB:function(hue,_569,_56a,_56b){
if(arguments.length==1){
var hsv=hue;
hue=hsv.h;
_569=hsv.s;
_56a=hsv.v;
_56b=hsv.a;
}
var red;
var _56e;
var blue;
if(_569===0){
red=_56a;
_56e=_56a;
blue=_56a;
}else{
var i=Math.floor(hue*6);
var f=(hue*6)-i;
var p=_56a*(1-_569);
var q=_56a*(1-(_569*f));
var t=_56a*(1-(_569*(1-f)));
switch(i){
case 1:
red=q;
_56e=_56a;
blue=p;
break;
case 2:
red=p;
_56e=_56a;
blue=t;
break;
case 3:
red=p;
_56e=q;
blue=_56a;
break;
case 4:
red=t;
_56e=p;
blue=_56a;
break;
case 5:
red=_56a;
_56e=p;
blue=q;
break;
case 6:
case 0:
red=_56a;
_56e=t;
blue=p;
break;
}
}
return {r:red,g:_56e,b:blue,a:_56b};
},hslToRGB:function(hue,_576,_577,_578){
if(arguments.length==1){
var hsl=hue;
hue=hsl.h;
_576=hsl.s;
_577=hsl.l;
_578=hsl.a;
}
var red;
var _57b;
var blue;
if(_576===0){
red=_577;
_57b=_577;
blue=_577;
}else{
var m2;
if(_577<=0.5){
m2=_577*(1+_576);
}else{
m2=_577+_576-(_577*_576);
}
var m1=(2*_577)-m2;
var f=MochiKit.Color._hslValue;
var h6=hue*6;
red=f(m1,m2,h6+2);
_57b=f(m1,m2,h6);
blue=f(m1,m2,h6-2);
}
return {r:red,g:_57b,b:blue,a:_578};
},rgbToHSV:function(red,_582,blue,_584){
if(arguments.length==1){
var rgb=red;
red=rgb.r;
_582=rgb.g;
blue=rgb.b;
_584=rgb.a;
}
var max=Math.max(Math.max(red,_582),blue);
var min=Math.min(Math.min(red,_582),blue);
var hue;
var _589;
var _58a=max;
if(min==max){
hue=0;
_589=0;
}else{
var _58b=(max-min);
_589=_58b/max;
if(red==max){
hue=(_582-blue)/_58b;
}else{
if(_582==max){
hue=2+((blue-red)/_58b);
}else{
hue=4+((red-_582)/_58b);
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
return {h:hue,s:_589,v:_58a,a:_584};
},rgbToHSL:function(red,_58d,blue,_58f){
if(arguments.length==1){
var rgb=red;
red=rgb.r;
_58d=rgb.g;
blue=rgb.b;
_58f=rgb.a;
}
var max=Math.max(red,Math.max(_58d,blue));
var min=Math.min(red,Math.min(_58d,blue));
var hue;
var _594;
var _595=(max+min)/2;
var _596=max-min;
if(_596===0){
hue=0;
_594=0;
}else{
if(_595<=0.5){
_594=_596/(max+min);
}else{
_594=_596/(2-max-min);
}
if(red==max){
hue=(_58d-blue)/_596;
}else{
if(_58d==max){
hue=2+((blue-red)/_596);
}else{
hue=4+((red-_58d)/_596);
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
return {h:hue,s:_594,l:_595,a:_58f};
},toColorPart:function(num){
num=Math.round(num);
var _598=num.toString(16);
if(num<16){
return "0"+_598;
}
return _598;
},__new__:function(){
var m=MochiKit.Base;
this.Color.fromRGBString=m.bind(this.Color._fromColorString,this.Color,"rgb","fromRGB",[1/255,1/255,1/255,1]);
this.Color.fromHSLString=m.bind(this.Color._fromColorString,this.Color,"hsl","fromHSL",[1/360,0.01,0.01,1]);
var _59a=1/3;
var _59b={black:[0,0,0],blue:[0,0,1],brown:[0.6,0.4,0.2],cyan:[0,1,1],darkGray:[_59a,_59a,_59a],gray:[0.5,0.5,0.5],green:[0,1,0],lightGray:[2*_59a,2*_59a,2*_59a],magenta:[1,0,1],orange:[1,0.5,0],purple:[0.5,0,0.5],red:[1,0,0],transparent:[0,0,0,0],white:[1,1,1],yellow:[1,1,0]};
for(var k in _59b){
var name=k+"Color";
var _59e=this.Color.fromRGB.apply(this.Color,_59b[k]);
this.Color[name]=m.partial(m.operator.identity,_59e);
}
var _59f=function(){
for(var i=0;i<arguments.length;i++){
if(!(arguments[i] instanceof MochiKit.Color.Color)){
return false;
}
}
return true;
};
var _5a1=function(a,b){
return a.compareRGB(b);
};
m.nameFunctions(this);
m.registerComparator(this.Color.NAME,_59f,_5a1);
}});
MochiKit.Color.__new__();
MochiKit.Color.Color._namedColors={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};
MochiKit.Base._exportSymbols(this,MochiKit.Color);
MochiKit.Base._module("Signal","1.5",["Base","DOM","Style"]);
MochiKit.Signal._observers=[];
MochiKit.Signal.Event=function(src,e){
this._event=e||window.event;
this._src=src;
};
MochiKit.Signal.Event.__export__=false;
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
try{
if(elem!==null&&elem.nodeType!==null){
this._relatedTarget=elem;
return elem;
}
}
catch(ignore){
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
var _5b0=MochiKit.Signal._specialMacKeys;
for(var i=63236;i<=63242;i++){
_5b0[i]="KEY_F"+(i-63236+1);
}
})();
MochiKit.Signal._specialKeys={8:"KEY_BACKSPACE",9:"KEY_TAB",12:"KEY_NUM_PAD_CLEAR",13:"KEY_ENTER",16:"KEY_SHIFT",17:"KEY_CTRL",18:"KEY_ALT",19:"KEY_PAUSE",20:"KEY_CAPS_LOCK",27:"KEY_ESCAPE",32:"KEY_SPACEBAR",33:"KEY_PAGE_UP",34:"KEY_PAGE_DOWN",35:"KEY_END",36:"KEY_HOME",37:"KEY_ARROW_LEFT",38:"KEY_ARROW_UP",39:"KEY_ARROW_RIGHT",40:"KEY_ARROW_DOWN",44:"KEY_PRINT_SCREEN",45:"KEY_INSERT",46:"KEY_DELETE",59:"KEY_SEMICOLON",91:"KEY_WINDOWS_LEFT",92:"KEY_WINDOWS_RIGHT",93:"KEY_SELECT",106:"KEY_NUM_PAD_ASTERISK",107:"KEY_NUM_PAD_PLUS_SIGN",109:"KEY_NUM_PAD_HYPHEN-MINUS",110:"KEY_NUM_PAD_FULL_STOP",111:"KEY_NUM_PAD_SOLIDUS",144:"KEY_NUM_LOCK",145:"KEY_SCROLL_LOCK",186:"KEY_SEMICOLON",187:"KEY_EQUALS_SIGN",188:"KEY_COMMA",189:"KEY_HYPHEN-MINUS",190:"KEY_FULL_STOP",191:"KEY_SOLIDUS",192:"KEY_GRAVE_ACCENT",219:"KEY_LEFT_SQUARE_BRACKET",220:"KEY_REVERSE_SOLIDUS",221:"KEY_RIGHT_SQUARE_BRACKET",222:"KEY_APOSTROPHE"};
(function(){
var _5b2=MochiKit.Signal._specialKeys;
for(var i=48;i<=57;i++){
_5b2[i]="KEY_"+(i-48);
}
for(i=65;i<=90;i++){
_5b2[i]="KEY_"+String.fromCharCode(i);
}
for(i=96;i<=105;i++){
_5b2[i]="KEY_NUM_PAD_"+(i-96);
}
for(i=112;i<=123;i++){
_5b2[i]="KEY_F"+(i-112+1);
}
})();
MochiKit.Signal.Ident=function(_5b4){
this.source=_5b4.source;
this.signal=_5b4.signal;
this.listener=_5b4.listener;
this.isDOM=_5b4.isDOM;
this.objOrFunc=_5b4.objOrFunc;
this.funcOrStr=_5b4.funcOrStr;
this.connected=_5b4.connected;
};
MochiKit.Signal.Ident.__export__=false;
MochiKit.Signal.Ident.prototype={};
MochiKit.Base.update(MochiKit.Signal,{_unloadCache:function(){
var self=MochiKit.Signal;
var _5b6=self._observers;
for(var i=0;i<_5b6.length;i++){
if(_5b6[i].signal!=="onload"&&_5b6[i].signal!=="onunload"){
self._disconnect(_5b6[i]);
}
}
},_listener:function(src,sig,func,obj,_5bc){
var self=MochiKit.Signal;
var E=self.Event;
if(!_5bc){
if(typeof (func.im_self)=="undefined"){
return MochiKit.Base.bindLate(func,obj);
}else{
return func;
}
}
obj=obj||src;
if(typeof (func)=="string"){
if(sig==="onload"||sig==="onunload"){
return function(_5bf){
obj[func].apply(obj,[new E(src,_5bf)]);
var _5c0=new MochiKit.Signal.Ident({source:src,signal:sig,objOrFunc:obj,funcOrStr:func});
MochiKit.Signal._disconnect(_5c0);
};
}else{
return function(_5c1){
obj[func].apply(obj,[new E(src,_5c1)]);
};
}
}else{
if(sig==="onload"||sig==="onunload"){
return function(_5c2){
func.apply(obj,[new E(src,_5c2)]);
var _5c3=new MochiKit.Signal.Ident({source:src,signal:sig,objOrFunc:func});
MochiKit.Signal._disconnect(_5c3);
};
}else{
return function(_5c4){
func.apply(obj,[new E(src,_5c4)]);
};
}
}
},_browserAlreadyHasMouseEnterAndLeave:function(){
return /MSIE/.test(navigator.userAgent);
},_browserLacksMouseWheelEvent:function(){
return /Gecko\//.test(navigator.userAgent);
},_mouseEnterListener:function(src,sig,func,obj){
var E=MochiKit.Signal.Event;
return function(_5ca){
var e=new E(src,_5ca);
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
},_getDestPair:function(_5cc,_5cd){
var obj=null;
var func=null;
if(typeof (_5cd)!="undefined"){
obj=_5cc;
func=_5cd;
if(typeof (_5cd)=="string"){
if(typeof (_5cc[_5cd])!="function"){
throw new Error("'funcOrStr' must be a function on 'objOrFunc'");
}
}else{
if(typeof (_5cd)!="function"){
throw new Error("'funcOrStr' must be a function or string");
}
}
}else{
if(typeof (_5cc)!="function"){
throw new Error("'objOrFunc' must be a function if 'funcOrStr' is not given");
}else{
func=_5cc;
}
}
return [obj,func];
},connect:function(src,sig,_5d2,_5d3){
if(typeof (src)=="string"){
src=MochiKit.DOM.getElement(src);
}
var self=MochiKit.Signal;
if(typeof (sig)!="string"){
throw new Error("'sig' must be a string");
}
var _5d5=self._getDestPair(_5d2,_5d3);
var obj=_5d5[0];
var func=_5d5[1];
if(typeof (obj)=="undefined"||obj===null){
obj=src;
}
var _5d8=!!(src.addEventListener||src.attachEvent);
if(_5d8&&(sig==="onmouseenter"||sig==="onmouseleave")&&!self._browserAlreadyHasMouseEnterAndLeave()){
var _5d9=self._mouseEnterListener(src,sig.substr(2),func,obj);
if(sig==="onmouseenter"){
sig="onmouseover";
}else{
sig="onmouseout";
}
}else{
if(_5d8&&sig=="onmousewheel"&&self._browserLacksMouseWheelEvent()){
var _5d9=self._listener(src,sig,func,obj,_5d8);
sig="onDOMMouseScroll";
}else{
var _5d9=self._listener(src,sig,func,obj,_5d8);
}
}
if(src.addEventListener){
src.addEventListener(sig.substr(2),_5d9,false);
}else{
if(src.attachEvent){
src.attachEvent(sig,_5d9);
}
}
var _5da=new MochiKit.Signal.Ident({source:src,signal:sig,listener:_5d9,isDOM:_5d8,objOrFunc:_5d2,funcOrStr:_5d3,connected:true});
self._observers.push(_5da);
if(!_5d8&&typeof (src.__connect__)=="function"){
var args=MochiKit.Base.extend([_5da],arguments,1);
src.__connect__.apply(src,args);
}
return _5da;
},_disconnect:function(_5dc){
if(!_5dc.connected){
return;
}
_5dc.connected=false;
var src=_5dc.source;
var sig=_5dc.signal;
var _5df=_5dc.listener;
if(!_5dc.isDOM){
if(typeof (src.__disconnect__)=="function"){
src.__disconnect__(_5dc,sig,_5dc.objOrFunc,_5dc.funcOrStr);
}
return;
}
if(src.removeEventListener){
src.removeEventListener(sig.substr(2),_5df,false);
}else{
if(src.detachEvent){
src.detachEvent(sig,_5df);
}else{
throw new Error("'src' must be a DOM element");
}
}
},disconnect:function(_5e0){
var self=MochiKit.Signal;
var _5e2=self._observers;
var m=MochiKit.Base;
if(arguments.length>1){
var src=arguments[0];
if(typeof (src)=="string"){
src=MochiKit.DOM.getElement(src);
}
var sig=arguments[1];
var obj=arguments[2];
var func=arguments[3];
for(var i=_5e2.length-1;i>=0;i--){
var o=_5e2[i];
if(o.source===src&&o.signal===sig&&o.objOrFunc===obj&&o.funcOrStr===func){
self._disconnect(o);
if(!self._lock){
_5e2.splice(i,1);
}else{
self._dirty=true;
}
return true;
}
}
}else{
var idx=m.findIdentical(_5e2,_5e0);
if(idx>=0){
self._disconnect(_5e0);
if(!self._lock){
_5e2.splice(idx,1);
}else{
self._dirty=true;
}
return true;
}
}
return false;
},disconnectAllTo:function(_5eb,_5ec){
var self=MochiKit.Signal;
var _5ee=self._observers;
var _5ef=self._disconnect;
var _5f0=self._lock;
var _5f1=self._dirty;
if(typeof (_5ec)==="undefined"){
_5ec=null;
}
for(var i=_5ee.length-1;i>=0;i--){
var _5f3=_5ee[i];
if(_5f3.objOrFunc===_5eb&&(_5ec===null||_5f3.funcOrStr===_5ec)){
_5ef(_5f3);
if(_5f0){
_5f1=true;
}else{
_5ee.splice(i,1);
}
}
}
self._dirty=_5f1;
},disconnectAll:function(src,sig){
if(typeof (src)=="string"){
src=MochiKit.DOM.getElement(src);
}
var m=MochiKit.Base;
var _5f7=m.flattenArguments(m.extend(null,arguments,1));
var self=MochiKit.Signal;
var _5f9=self._disconnect;
var _5fa=self._observers;
var i,_5fc;
var _5fd=self._lock;
var _5fe=self._dirty;
if(_5f7.length===0){
for(i=_5fa.length-1;i>=0;i--){
_5fc=_5fa[i];
if(_5fc.source===src){
_5f9(_5fc);
if(!_5fd){
_5fa.splice(i,1);
}else{
_5fe=true;
}
}
}
}else{
var sigs={};
for(i=0;i<_5f7.length;i++){
sigs[_5f7[i]]=true;
}
for(i=_5fa.length-1;i>=0;i--){
_5fc=_5fa[i];
if(_5fc.source===src&&_5fc.signal in sigs){
_5f9(_5fc);
if(!_5fd){
_5fa.splice(i,1);
}else{
_5fe=true;
}
}
}
}
self._dirty=_5fe;
},signal:function(src,sig){
var self=MochiKit.Signal;
var _603=self._observers;
if(typeof (src)=="string"){
src=MochiKit.DOM.getElement(src);
}
var args=MochiKit.Base.extend(null,arguments,2);
var _605=[];
self._lock=true;
for(var i=0;i<_603.length;i++){
var _607=_603[i];
if(_607.source===src&&_607.signal===sig&&_607.connected){
try{
if(_607.isDOM&&_607.funcOrStr!=null){
var obj=_607.objOrFunc;
obj[_607.funcOrStr].apply(obj,args);
}else{
if(_607.isDOM){
_607.objOrFunc.apply(src,args);
}else{
_607.listener.apply(src,args);
}
}
}
catch(e){
_605.push(e);
}
}
}
self._lock=false;
if(self._dirty){
self._dirty=false;
for(var i=_603.length-1;i>=0;i--){
if(!_603[i].connected){
_603.splice(i,1);
}
}
}
if(_605.length==1){
throw _605[0];
}else{
if(_605.length>1){
var e=new Error("Multiple errors thrown in handling 'sig', see errors property");
e.errors=_605;
throw e;
}
}
}});
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
MochiKit.Base._module("Position","1.5",["Base","DOM","Style"]);
MochiKit.Base.update(MochiKit.Position,{__export__:false,includeScrollOffsets:false,prepare:function(){
var _60c=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;
var _60d=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;
this.windowOffset=new MochiKit.Style.Coordinates(_60c,_60d);
},cumulativeOffset:function(_60e){
var _60f=0;
var _610=0;
do{
_60f+=_60e.offsetTop||0;
_610+=_60e.offsetLeft||0;
_60e=_60e.offsetParent;
}while(_60e);
return new MochiKit.Style.Coordinates(_610,_60f);
},realOffset:function(_611){
var _612=0;
var _613=0;
do{
_612+=_611.scrollTop||0;
_613+=_611.scrollLeft||0;
_611=_611.parentNode;
}while(_611);
return new MochiKit.Style.Coordinates(_613,_612);
},within:function(_614,x,y){
if(this.includeScrollOffsets){
return this.withinIncludingScrolloffsets(_614,x,y);
}
this.xcomp=x;
this.ycomp=y;
this.offset=this.cumulativeOffset(_614);
if(_614.style.position=="fixed"){
this.offset.x+=this.windowOffset.x;
this.offset.y+=this.windowOffset.y;
}
return (y>=this.offset.y&&y<this.offset.y+_614.offsetHeight&&x>=this.offset.x&&x<this.offset.x+_614.offsetWidth);
},withinIncludingScrolloffsets:function(_617,x,y){
var _61a=this.realOffset(_617);
this.xcomp=x+_61a.x-this.windowOffset.x;
this.ycomp=y+_61a.y-this.windowOffset.y;
this.offset=this.cumulativeOffset(_617);
return (this.ycomp>=this.offset.y&&this.ycomp<this.offset.y+_617.offsetHeight&&this.xcomp>=this.offset.x&&this.xcomp<this.offset.x+_617.offsetWidth);
},overlap:function(mode,_61c){
if(!mode){
return 0;
}
if(mode=="vertical"){
return ((this.offset.y+_61c.offsetHeight)-this.ycomp)/_61c.offsetHeight;
}
if(mode=="horizontal"){
return ((this.offset.x+_61c.offsetWidth)-this.xcomp)/_61c.offsetWidth;
}
},absolutize:function(_61d){
_61d=MochiKit.DOM.getElement(_61d);
if(_61d.style.position=="absolute"){
return;
}
MochiKit.Position.prepare();
var _61e=MochiKit.Position.positionedOffset(_61d);
var _61f=_61d.clientWidth;
var _620=_61d.clientHeight;
var _621={"position":_61d.style.position,"left":_61e.x-parseFloat(_61d.style.left||0),"top":_61e.y-parseFloat(_61d.style.top||0),"width":_61d.style.width,"height":_61d.style.height};
_61d.style.position="absolute";
_61d.style.top=_61e.y+"px";
_61d.style.left=_61e.x+"px";
_61d.style.width=_61f+"px";
_61d.style.height=_620+"px";
return _621;
},positionedOffset:function(_622){
var _623=0,_624=0;
do{
_623+=_622.offsetTop||0;
_624+=_622.offsetLeft||0;
_622=_622.offsetParent;
if(_622){
var p=MochiKit.Style.getStyle(_622,"position");
if(p=="relative"||p=="absolute"){
break;
}
}
}while(_622);
return new MochiKit.Style.Coordinates(_624,_623);
},relativize:function(_626,_627){
_626=MochiKit.DOM.getElement(_626);
if(_626.style.position=="relative"){
return;
}
MochiKit.Position.prepare();
var top=parseFloat(_626.style.top||0)-(_627["top"]||0);
var left=parseFloat(_626.style.left||0)-(_627["left"]||0);
_626.style.position=_627["position"];
_626.style.top=top+"px";
_626.style.left=left+"px";
_626.style.width=_627["width"];
_626.style.height=_627["height"];
},clone:function(_62a,_62b){
_62a=MochiKit.DOM.getElement(_62a);
_62b=MochiKit.DOM.getElement(_62b);
_62b.style.position="absolute";
var _62c=this.cumulativeOffset(_62a);
_62b.style.top=_62c.y+"px";
_62b.style.left=_62c.x+"px";
_62b.style.width=_62a.offsetWidth+"px";
_62b.style.height=_62a.offsetHeight+"px";
},page:function(_62d){
var _62e=0;
var _62f=0;
var _630=_62d;
do{
_62e+=_630.offsetTop||0;
_62f+=_630.offsetLeft||0;
if(_630.offsetParent==document.body&&MochiKit.Style.getStyle(_630,"position")=="absolute"){
break;
}
}while(_630=_630.offsetParent);
_630=_62d;
do{
_62e-=_630.scrollTop||0;
_62f-=_630.scrollLeft||0;
}while(_630=_630.parentNode);
return new MochiKit.Style.Coordinates(_62f,_62e);
}});
MochiKit.Position.__new__=function(win){
MochiKit.Base.nameFunctions(this);
};
MochiKit.Position.__new__(this);
MochiKit.Base._exportSymbols(this,MochiKit.Position);
MochiKit.Base._module("Visual","1.5",["Base","DOM","Style","Color","Position"]);
MochiKit.Visual._RoundCorners=function(e,_633){
e=MochiKit.DOM.getElement(e);
this._setOptions(_633);
if(this.options.__unstable__wrapElement){
e=this._doWrap(e);
}
var _634=this.options.color;
var C=MochiKit.Color.Color;
if(this.options.color==="fromElement"){
_634=C.fromBackground(e);
}else{
if(!(_634 instanceof C)){
_634=C.fromString(_634);
}
}
this.isTransparent=(_634.asRGB().a<=0);
var _636=this.options.bgColor;
if(this.options.bgColor==="fromParent"){
_636=C.fromBackground(e.offsetParent);
}else{
if(!(_636 instanceof C)){
_636=C.fromString(_636);
}
}
this._roundCornersImpl(e,_634,_636);
};
MochiKit.Visual._RoundCorners.prototype={_doWrap:function(e){
var _638=e.parentNode;
var doc=MochiKit.DOM.currentDocument();
if(typeof (doc.defaultView)==="undefined"||doc.defaultView===null){
return e;
}
var _63a=doc.defaultView.getComputedStyle(e,null);
if(typeof (_63a)==="undefined"||_63a===null){
return e;
}
var _63b=MochiKit.DOM.DIV({"style":{display:"block",marginTop:_63a.getPropertyValue("padding-top"),marginRight:_63a.getPropertyValue("padding-right"),marginBottom:_63a.getPropertyValue("padding-bottom"),marginLeft:_63a.getPropertyValue("padding-left"),padding:"0px"}});
_63b.innerHTML=e.innerHTML;
e.innerHTML="";
e.appendChild(_63b);
return e;
},_roundCornersImpl:function(e,_63d,_63e){
if(this.options.border){
this._renderBorder(e,_63e);
}
if(this._isTopRounded()){
this._roundTopCorners(e,_63d,_63e);
}
if(this._isBottomRounded()){
this._roundBottomCorners(e,_63d,_63e);
}
},_renderBorder:function(el,_640){
var _641="1px solid "+this._borderColor(_640);
var _642="border-left: "+_641;
var _643="border-right: "+_641;
var _644="style='"+_642+";"+_643+"'";
el.innerHTML="<div "+_644+">"+el.innerHTML+"</div>";
},_roundTopCorners:function(el,_646,_647){
var _648=this._createCorner(_647);
for(var i=0;i<this.options.numSlices;i++){
_648.appendChild(this._createCornerSlice(_646,_647,i,"top"));
}
el.style.paddingTop=0;
el.insertBefore(_648,el.firstChild);
},_roundBottomCorners:function(el,_64b,_64c){
var _64d=this._createCorner(_64c);
for(var i=(this.options.numSlices-1);i>=0;i--){
_64d.appendChild(this._createCornerSlice(_64b,_64c,i,"bottom"));
}
el.style.paddingBottom=0;
el.appendChild(_64d);
},_createCorner:function(_64f){
var dom=MochiKit.DOM;
return dom.DIV({style:{backgroundColor:_64f.toString()}});
},_createCornerSlice:function(_651,_652,n,_654){
var _655=MochiKit.DOM.SPAN();
var _656=_655.style;
_656.backgroundColor=_651.toString();
_656.display="block";
_656.height="1px";
_656.overflow="hidden";
_656.fontSize="1px";
var _657=this._borderColor(_651,_652);
if(this.options.border&&n===0){
_656.borderTopStyle="solid";
_656.borderTopWidth="1px";
_656.borderLeftWidth="0px";
_656.borderRightWidth="0px";
_656.borderBottomWidth="0px";
_656.height="0px";
_656.borderColor=_657.toString();
}else{
if(_657){
_656.borderColor=_657.toString();
_656.borderStyle="solid";
_656.borderWidth="0px 1px";
}
}
if(!this.options.compact&&(n==(this.options.numSlices-1))){
_656.height="2px";
}
this._setMargin(_655,n,_654);
this._setBorder(_655,n,_654);
return _655;
},_setOptions:function(_658){
this.options={corners:"all",color:"fromElement",bgColor:"fromParent",blend:true,border:false,compact:false,__unstable__wrapElement:false};
MochiKit.Base.update(this.options,_658);
this.options.numSlices=(this.options.compact?2:4);
},_whichSideTop:function(){
var _659=this.options.corners;
if(this._hasString(_659,"all","top")){
return "";
}
var _65a=(_659.indexOf("tl")!=-1);
var _65b=(_659.indexOf("tr")!=-1);
if(_65a&&_65b){
return "";
}
if(_65a){
return "left";
}
if(_65b){
return "right";
}
return "";
},_whichSideBottom:function(){
var _65c=this.options.corners;
if(this._hasString(_65c,"all","bottom")){
return "";
}
var _65d=(_65c.indexOf("bl")!=-1);
var _65e=(_65c.indexOf("br")!=-1);
if(_65d&&_65e){
return "";
}
if(_65d){
return "left";
}
if(_65e){
return "right";
}
return "";
},_borderColor:function(_65f,_660){
if(_65f=="transparent"){
return _660;
}else{
if(this.options.border){
return this.options.border;
}else{
if(this.options.blend){
return _660.blendedColor(_65f);
}
}
}
return "";
},_setMargin:function(el,n,_663){
var _664=this._marginSize(n)+"px";
var _665=(_663=="top"?this._whichSideTop():this._whichSideBottom());
var _666=el.style;
if(_665=="left"){
_666.marginLeft=_664;
_666.marginRight="0px";
}else{
if(_665=="right"){
_666.marginRight=_664;
_666.marginLeft="0px";
}else{
_666.marginLeft=_664;
_666.marginRight=_664;
}
}
},_setBorder:function(el,n,_669){
var _66a=this._borderSize(n)+"px";
var _66b=(_669=="top"?this._whichSideTop():this._whichSideBottom());
var _66c=el.style;
if(_66b=="left"){
_66c.borderLeftWidth=_66a;
_66c.borderRightWidth="0px";
}else{
if(_66b=="right"){
_66c.borderRightWidth=_66a;
_66c.borderLeftWidth="0px";
}else{
_66c.borderLeftWidth=_66a;
_66c.borderRightWidth=_66a;
}
}
},_marginSize:function(n){
if(this.isTransparent){
return 0;
}
var o=this.options;
if(o.compact&&o.blend){
var _66f=[1,0];
return _66f[n];
}else{
if(o.compact){
var _670=[2,1];
return _670[n];
}else{
if(o.blend){
var _671=[3,2,1,0];
return _671[n];
}else{
var _672=[5,3,2,1];
return _672[n];
}
}
}
},_borderSize:function(n){
var o=this.options;
var _675;
if(o.compact&&(o.blend||this.isTransparent)){
return 1;
}else{
if(o.compact){
_675=[1,0];
}else{
if(o.blend){
_675=[2,1,1,1];
}else{
if(o.border){
_675=[0,2,0,0];
}else{
if(this.isTransparent){
_675=[5,3,2,1];
}else{
return 0;
}
}
}
}
}
return _675[n];
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
MochiKit.Visual.roundElement=function(e,_67a){
new MochiKit.Visual._RoundCorners(e,_67a);
};
MochiKit.Visual.roundClass=function(_67b,_67c,_67d){
var _67e=MochiKit.DOM.getElementsByTagAndClassName(_67b,_67c);
for(var i=0;i<_67e.length;i++){
MochiKit.Visual.roundElement(_67e[i],_67d);
}
};
MochiKit.Visual.tagifyText=function(_680,_681){
_681=_681||"position:relative";
if(/MSIE/.test(navigator.userAgent)){
_681+=";zoom:1";
}
_680=MochiKit.DOM.getElement(_680);
var ma=MochiKit.Base.map;
ma(function(_683){
if(_683.nodeType==3){
ma(function(_684){
_680.insertBefore(MochiKit.DOM.SPAN({style:_681},_684==" "?String.fromCharCode(160):_684),_683);
},_683.nodeValue.split(""));
MochiKit.DOM.removeElement(_683);
}
},_680.childNodes);
};
MochiKit.Visual._forceRerendering=function(_685){
try{
_685=MochiKit.DOM.getElement(_685);
var n=document.createTextNode(" ");
_685.appendChild(n);
_685.removeChild(n);
}
catch(e){
}
};
MochiKit.Visual.multiple=function(_687,_688,_689){
_689=MochiKit.Base.update({speed:0.1,delay:0},_689);
var _68a=_689.delay;
var _68b=0;
MochiKit.Base.map(function(_68c){
_689.delay=_68b*_689.speed+_68a;
new _688(_68c,_689);
_68b+=1;
},_687);
};
MochiKit.Visual.PAIRS={"slide":["slideDown","slideUp"],"blind":["blindDown","blindUp"],"appear":["appear","fade"],"size":["grow","shrink"]};
MochiKit.Visual.toggle=function(_68d,_68e,_68f){
_68d=MochiKit.DOM.getElement(_68d);
_68e=(_68e||"appear").toLowerCase();
_68f=MochiKit.Base.update({queue:{position:"end",scope:(_68d.id||"global"),limit:1}},_68f);
var v=MochiKit.Visual;
v[MochiKit.Style.getStyle(_68d,"display")!="none"?v.PAIRS[_68e][1]:v.PAIRS[_68e][0]](_68d,_68f);
};
MochiKit.Visual.Transitions={__export__:false};
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
MochiKit.Visual.Transitions.pulse=function(pos,_697){
if(_697){
pos*=2*_697;
}else{
pos*=10;
}
var _698=pos-Math.floor(pos);
return (Math.floor(pos)%2==0)?_698:1-_698;
};
MochiKit.Visual.Transitions.parabolic=function(pos){
return pos*pos;
};
MochiKit.Visual.Transitions.spring=function(pos){
return 1-(Math.cos(pos*2.5*Math.PI)*Math.exp(-pos*6));
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
MochiKit.Visual.ScopedQueue.__export__=false;
MochiKit.Base.update(MochiKit.Visual.ScopedQueue.prototype,{__init__:function(){
this.effects=[];
this.interval=null;
},add:function(_69e){
var _69f=new Date().getTime();
var _6a0=(typeof (_69e.options.queue)=="string")?_69e.options.queue:_69e.options.queue.position;
var ma=MochiKit.Base.map;
switch(_6a0){
case "front":
ma(function(e){
if(e.state=="idle"){
e.startOn+=_69e.finishOn;
e.finishOn+=_69e.finishOn;
}
},this.effects);
break;
case "end":
var _6a3;
ma(function(e){
var i=e.finishOn;
if(i>=(_6a3||i)){
_6a3=i;
}
},this.effects);
_69f=_6a3||_69f;
break;
case "break":
ma(function(e){
e.finalize();
},this.effects);
break;
case "replace":
ma(function(e){
e.cancel();
},this.effects);
break;
}
_69e.startOn+=_69f;
_69e.finishOn+=_69f;
if(!_69e.options.queue.limit||this.effects.length<_69e.options.queue.limit){
this.effects.push(_69e);
}
if(!this.interval){
this.interval=this.startLoop(MochiKit.Base.bind(this.loop,this),40);
}
},startLoop:function(func,_6a9){
return setInterval(func,_6a9);
},remove:function(_6aa){
this.effects=MochiKit.Base.filter(function(e){
return e!=_6aa;
},this.effects);
if(!this.effects.length){
this.stopLoop(this.interval);
this.interval=null;
}
},stopLoop:function(_6ac){
clearInterval(_6ac);
},loop:function(){
var _6ad=new Date().getTime();
MochiKit.Base.map(function(_6ae){
_6ae.loop(_6ad);
},this.effects);
}});
MochiKit.Visual.Queues={__export__:false,instances:{},get:function(_6af){
if(typeof (_6af)!="string"){
return _6af;
}
if(!this.instances[_6af]){
this.instances[_6af]=new MochiKit.Visual.ScopedQueue();
}
return this.instances[_6af];
}};
MochiKit.Visual.Queue=MochiKit.Visual.Queues.get("global");
MochiKit.Visual.Queue.__export__=false;
MochiKit.Visual.DefaultOptions={__export__:false,transition:MochiKit.Visual.Transitions.sinoidal,duration:1,fps:25,sync:false,from:0,to:1,delay:0,queue:"parallel"};
MochiKit.Visual.Base=function(){
};
MochiKit.Visual.Base.prototype={__class__:MochiKit.Visual.Base,start:function(_6b0){
var v=MochiKit.Visual;
this.options=MochiKit.Base.setdefault(_6b0,v.DefaultOptions);
this.currentFrame=0;
this.state="idle";
this.startOn=this.options.delay*1000;
this.finishOn=this.startOn+(this.options.duration*1000);
this.event("beforeStart");
if(!this.options.sync){
v.Queues.get(typeof (this.options.queue)=="string"?"global":this.options.queue.scope).add(this);
}
},loop:function(_6b2){
if(_6b2>=this.startOn){
if(_6b2>=this.finishOn){
return this.finalize();
}
var pos=(_6b2-this.startOn)/(this.finishOn-this.startOn);
var _6b4=Math.round(pos*this.options.fps*this.options.duration);
if(_6b4>this.currentFrame){
this.render(pos);
this.currentFrame=_6b4;
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
var _6b6=this.options.transition;
if(typeof (_6b6)=="string"){
_6b6=MochiKit.Visual.Transitions[_6b6];
}
if(typeof (_6b6)=="function"){
pos=_6b6(pos);
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
},update:function(_6b7){
},event:function(_6b8){
if(this.options[_6b8+"Internal"]){
this.options[_6b8+"Internal"](this);
}
if(this.options[_6b8]){
this.options[_6b8](this);
}
},repr:function(){
return "["+this.__class__.NAME+", options:"+MochiKit.Base.repr(this.options)+"]";
}};
MochiKit.Visual.Parallel=function(_6b9,_6ba){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_6b9,_6ba);
}
this.__init__(_6b9,_6ba);
};
MochiKit.Visual.Parallel.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Parallel.prototype,{__class__:MochiKit.Visual.Parallel,__init__:function(_6bc,_6bd){
this.effects=_6bc||[];
this.start(_6bd);
},update:function(_6be){
MochiKit.Base.map(function(_6bf){
_6bf.render(_6be);
},this.effects);
},finish:function(){
MochiKit.Base.map(function(_6c0){
_6c0.finalize();
},this.effects);
}});
MochiKit.Visual.Sequence=function(_6c1,_6c2){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_6c1,_6c2);
}
this.__init__(_6c1,_6c2);
};
MochiKit.Visual.Sequence.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Sequence.prototype,{__class__:MochiKit.Visual.Sequence,__init__:function(_6c4,_6c5){
var defs={transition:MochiKit.Visual.Transitions.linear,duration:0};
this.effects=_6c4||[];
MochiKit.Base.map(function(_6c7){
defs.duration+=_6c7.options.duration;
},this.effects);
MochiKit.Base.setdefault(_6c5,defs);
this.start(_6c5);
},update:function(_6c8){
var time=_6c8*this.options.duration;
for(var i=0;i<this.effects.length;i++){
var _6cb=this.effects[i];
if(time<=_6cb.options.duration){
_6cb.render(time/_6cb.options.duration);
break;
}else{
time-=_6cb.options.duration;
}
}
},finish:function(){
MochiKit.Base.map(function(_6cc){
_6cc.finalize();
},this.effects);
}});
MochiKit.Visual.Opacity=function(_6cd,_6ce){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_6cd,_6ce);
}
this.__init__(_6cd,_6ce);
};
MochiKit.Visual.Opacity.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Opacity.prototype,{__class__:MochiKit.Visual.Opacity,__init__:function(_6d0,_6d1){
var b=MochiKit.Base;
var s=MochiKit.Style;
this.element=MochiKit.DOM.getElement(_6d0);
if(this.element.currentStyle&&(!this.element.currentStyle.hasLayout)){
s.setStyle(this.element,{zoom:1});
}
_6d1=b.update({from:s.getStyle(this.element,"opacity")||0,to:1},_6d1);
this.start(_6d1);
},update:function(_6d4){
MochiKit.Style.setStyle(this.element,{"opacity":_6d4});
}});
MochiKit.Visual.Move=function(_6d5,_6d6){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_6d5,_6d6);
}
this.__init__(_6d5,_6d6);
};
MochiKit.Visual.Move.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Move.prototype,{__class__:MochiKit.Visual.Move,__init__:function(_6d8,_6d9){
this.element=MochiKit.DOM.getElement(_6d8);
_6d9=MochiKit.Base.update({x:0,y:0,mode:"relative"},_6d9);
this.start(_6d9);
},setup:function(){
MochiKit.Style.makePositioned(this.element);
var s=this.element.style;
var _6db=s.visibility;
var _6dc=s.display;
if(_6dc=="none"){
s.visibility="hidden";
s.display="";
}
this.originalLeft=parseFloat(MochiKit.Style.getStyle(this.element,"left")||"0");
this.originalTop=parseFloat(MochiKit.Style.getStyle(this.element,"top")||"0");
if(this.options.mode=="absolute"){
this.options.x-=this.originalLeft;
this.options.y-=this.originalTop;
}
if(_6dc=="none"){
s.visibility=_6db;
s.display=_6dc;
}
},update:function(_6dd){
MochiKit.Style.setStyle(this.element,{left:Math.round(this.options.x*_6dd+this.originalLeft)+"px",top:Math.round(this.options.y*_6dd+this.originalTop)+"px"});
}});
MochiKit.Visual.Scale=function(_6de,_6df,_6e0){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_6de,_6df,_6e0);
}
this.__init__(_6de,_6df,_6e0);
};
MochiKit.Visual.Scale.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Scale.prototype,{__class__:MochiKit.Visual.Scale,__init__:function(_6e2,_6e3,_6e4){
this.element=MochiKit.DOM.getElement(_6e2);
_6e4=MochiKit.Base.update({scaleX:true,scaleY:true,scaleContent:true,scaleFromCenter:false,scaleMode:"box",scaleFrom:100,scaleTo:_6e3},_6e4);
this.start(_6e4);
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
var _6e8=MochiKit.Style.getStyle(this.element,"font-size")||"100%";
ma(b(function(_6e9){
if(_6e8.indexOf(_6e9)>0){
this.fontSize=parseFloat(_6e8);
this.fontSizeType=_6e9;
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
},update:function(_6ea){
var _6eb=(this.options.scaleFrom/100)+(this.factor*_6ea);
if(this.options.scaleContent&&this.fontSize){
MochiKit.Style.setStyle(this.element,{fontSize:this.fontSize*_6eb+this.fontSizeType});
}
this.setDimensions(this.dims[0]*_6eb,this.dims[1]*_6eb);
},finish:function(){
if(this.restoreAfterFinish){
MochiKit.Style.setStyle(this.element,this.originalStyle);
}
},setDimensions:function(_6ec,_6ed){
var d={};
var r=Math.round;
if(/MSIE/.test(navigator.userAgent)){
r=Math.ceil;
}
if(this.options.scaleX){
d.width=r(_6ed)+"px";
}
if(this.options.scaleY){
d.height=r(_6ec)+"px";
}
if(this.options.scaleFromCenter){
var topd=(_6ec-this.dims[0])/2;
var _6f1=(_6ed-this.dims[1])/2;
if(this.elementPositioning=="absolute"){
if(this.options.scaleY){
d.top=this.originalTop-topd+"px";
}
if(this.options.scaleX){
d.left=this.originalLeft-_6f1+"px";
}
}else{
if(this.options.scaleY){
d.top=-topd+"px";
}
if(this.options.scaleX){
d.left=-_6f1+"px";
}
}
}
MochiKit.Style.setStyle(this.element,d);
}});
MochiKit.Visual.Highlight=function(_6f2,_6f3){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_6f2,_6f3);
}
this.__init__(_6f2,_6f3);
};
MochiKit.Visual.Highlight.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Highlight.prototype,{__class__:MochiKit.Visual.Highlight,__init__:function(_6f5,_6f6){
this.element=MochiKit.DOM.getElement(_6f5);
_6f6=MochiKit.Base.update({startcolor:"#ffff99"},_6f6);
this.start(_6f6);
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
},update:function(_6fb){
var m="#";
MochiKit.Base.map(MochiKit.Base.bind(function(i){
m+=MochiKit.Color.toColorPart(Math.round(this._base[i]+this._delta[i]*_6fb));
},this),[0,1,2]);
MochiKit.Style.setStyle(this.element,{backgroundColor:m});
},finish:function(){
MochiKit.Style.setStyle(this.element,MochiKit.Base.update(this.oldStyle,{backgroundColor:this.options.restorecolor}));
}});
MochiKit.Visual.ScrollTo=function(_6fe,_6ff){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_6fe,_6ff);
}
this.__init__(_6fe,_6ff);
};
MochiKit.Visual.ScrollTo.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.ScrollTo.prototype,{__class__:MochiKit.Visual.ScrollTo,__init__:function(_701,_702){
this.element=MochiKit.DOM.getElement(_701);
this.start(_702);
},setup:function(){
var p=MochiKit.Position;
p.prepare();
var _704=p.cumulativeOffset(this.element);
if(this.options.offset){
_704.y+=this.options.offset;
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
this.delta=(_704.y>max?max:_704.y)-this.scrollStart;
},update:function(_706){
var p=MochiKit.Position;
p.prepare();
window.scrollTo(p.windowOffset.x,this.scrollStart+(_706*this.delta));
}});
MochiKit.Visual._CSS_LENGTH=/^(([\+\-]?[0-9\.]+)(em|ex|px|in|cm|mm|pt|pc|\%))|0$/;
MochiKit.Visual.Morph=function(_708,_709){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_708,_709);
}
this.__init__(_708,_709);
};
MochiKit.Visual.Morph.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Morph.prototype,{__class__:MochiKit.Visual.Morph,__init__:function(_70b,_70c){
this.element=MochiKit.DOM.getElement(_70b);
this.start(_70c);
},setup:function(){
var b=MochiKit.Base;
var _70e=this.options.style;
this.styleStart={};
this.styleEnd={};
this.units={};
var _70f,unit;
for(var s in _70e){
_70f=_70e[s];
s=b.camelize(s);
if(MochiKit.Visual._CSS_LENGTH.test(_70f)){
var _712=_70f.match(/^([\+\-]?[0-9\.]+)(.*)$/);
_70f=parseFloat(_712[1]);
unit=(_712.length==3)?_712[2]:null;
this.styleEnd[s]=_70f;
this.units[s]=unit;
_70f=MochiKit.Style.getStyle(this.element,s);
_712=_70f.match(/^([\+\-]?[0-9\.]+)(.*)$/);
_70f=parseFloat(_712[1]);
this.styleStart[s]=_70f;
}else{
if(/[Cc]olor$/.test(s)){
var c=MochiKit.Color.Color;
_70f=c.fromString(_70f);
if(_70f){
this.units[s]="color";
this.styleEnd[s]=_70f.toHexString();
_70f=MochiKit.Style.getStyle(this.element,s);
this.styleStart[s]=c.fromString(_70f).toHexString();
this.styleStart[s]=b.map(b.bind(function(i){
return parseInt(this.styleStart[s].slice(i*2+1,i*2+3),16);
},this),[0,1,2]);
this.styleEnd[s]=b.map(b.bind(function(i){
return parseInt(this.styleEnd[s].slice(i*2+1,i*2+3),16);
},this),[0,1,2]);
}
}else{
this.element.style[s]=_70f;
}
}
}
},update:function(_716){
var _717;
for(var s in this.styleStart){
if(this.units[s]=="color"){
var m="#";
var _71a=this.styleStart[s];
var end=this.styleEnd[s];
MochiKit.Base.map(MochiKit.Base.bind(function(i){
m+=MochiKit.Color.toColorPart(Math.round(_71a[i]+(end[i]-_71a[i])*_716));
},this),[0,1,2]);
this.element.style[s]=m;
}else{
_717=this.styleStart[s]+Math.round((this.styleEnd[s]-this.styleStart[s])*_716*1000)/1000+this.units[s];
this.element.style[s]=_717;
}
}
}});
MochiKit.Visual.fade=function(_71d,_71e){
var s=MochiKit.Style;
var _720=s.getStyle(_71d,"opacity");
_71e=MochiKit.Base.update({from:s.getStyle(_71d,"opacity")||1,to:0,afterFinishInternal:function(_721){
if(_721.options.to!==0){
return;
}
s.hideElement(_721.element);
s.setStyle(_721.element,{"opacity":_720});
}},_71e);
return new MochiKit.Visual.Opacity(_71d,_71e);
};
MochiKit.Visual.appear=function(_722,_723){
var s=MochiKit.Style;
var v=MochiKit.Visual;
_723=MochiKit.Base.update({from:(s.getStyle(_722,"display")=="none"?0:s.getStyle(_722,"opacity")||0),to:1,afterFinishInternal:function(_726){
v._forceRerendering(_726.element);
},beforeSetupInternal:function(_727){
s.setStyle(_727.element,{"opacity":_727.options.from});
s.showElement(_727.element);
}},_723);
return new v.Opacity(_722,_723);
};
MochiKit.Visual.puff=function(_728,_729){
var s=MochiKit.Style;
var v=MochiKit.Visual;
_728=MochiKit.DOM.getElement(_728);
var _72c=MochiKit.Style.getElementDimensions(_728,true);
var _72d={position:s.getStyle(_728,"position"),top:_728.style.top,left:_728.style.left,width:_728.style.width,height:_728.style.height,opacity:s.getStyle(_728,"opacity")};
_729=MochiKit.Base.update({beforeSetupInternal:function(_72e){
MochiKit.Position.absolutize(_72e.effects[0].element);
},afterFinishInternal:function(_72f){
s.hideElement(_72f.effects[0].element);
s.setStyle(_72f.effects[0].element,_72d);
},scaleContent:true,scaleFromCenter:true},_729);
return new v.Parallel([new v.Scale(_728,200,{sync:true,scaleFromCenter:_729.scaleFromCenter,scaleMode:{originalHeight:_72c.h,originalWidth:_72c.w},scaleContent:_729.scaleContent,restoreAfterFinish:true}),new v.Opacity(_728,{sync:true,to:0})],_729);
};
MochiKit.Visual.blindUp=function(_730,_731){
var d=MochiKit.DOM;
var s=MochiKit.Style;
_730=d.getElement(_730);
var _734=s.getElementDimensions(_730,true);
var _735=s.makeClipping(_730);
_731=MochiKit.Base.update({scaleContent:false,scaleX:false,scaleMode:{originalHeight:_734.h,originalWidth:_734.w},restoreAfterFinish:true,afterFinishInternal:function(_736){
s.hideElement(_736.element);
s.undoClipping(_736.element,_735);
}},_731);
return new MochiKit.Visual.Scale(_730,0,_731);
};
MochiKit.Visual.blindDown=function(_737,_738){
var d=MochiKit.DOM;
var s=MochiKit.Style;
_737=d.getElement(_737);
var _73b=s.getElementDimensions(_737,true);
var _73c;
_738=MochiKit.Base.update({scaleContent:false,scaleX:false,scaleFrom:0,scaleMode:{originalHeight:_73b.h,originalWidth:_73b.w},restoreAfterFinish:true,afterSetupInternal:function(_73d){
_73c=s.makeClipping(_73d.element);
s.setStyle(_73d.element,{height:"0px"});
s.showElement(_73d.element);
},afterFinishInternal:function(_73e){
s.undoClipping(_73e.element,_73c);
}},_738);
return new MochiKit.Visual.Scale(_737,100,_738);
};
MochiKit.Visual.switchOff=function(_73f,_740){
var d=MochiKit.DOM;
var s=MochiKit.Style;
_73f=d.getElement(_73f);
var _743=s.getElementDimensions(_73f,true);
var _744=s.getStyle(_73f,"opacity");
var _745;
_740=MochiKit.Base.update({duration:0.7,restoreAfterFinish:true,beforeSetupInternal:function(_746){
s.makePositioned(_73f);
_745=s.makeClipping(_73f);
},afterFinishInternal:function(_747){
s.hideElement(_73f);
s.undoClipping(_73f,_745);
s.undoPositioned(_73f);
s.setStyle(_73f,{"opacity":_744});
}},_740);
var v=MochiKit.Visual;
return new v.Sequence([new v.appear(_73f,{sync:true,duration:0.57*_740.duration,from:0,transition:v.Transitions.flicker}),new v.Scale(_73f,1,{sync:true,duration:0.43*_740.duration,scaleFromCenter:true,scaleX:false,scaleMode:{originalHeight:_743.h,originalWidth:_743.w},scaleContent:false,restoreAfterFinish:true})],_740);
};
MochiKit.Visual.dropOut=function(_749,_74a){
var d=MochiKit.DOM;
var s=MochiKit.Style;
_749=d.getElement(_749);
var _74d={top:s.getStyle(_749,"top"),left:s.getStyle(_749,"left"),opacity:s.getStyle(_749,"opacity")};
_74a=MochiKit.Base.update({duration:0.5,distance:100,beforeSetupInternal:function(_74e){
s.makePositioned(_74e.effects[0].element);
},afterFinishInternal:function(_74f){
s.hideElement(_74f.effects[0].element);
s.undoPositioned(_74f.effects[0].element);
s.setStyle(_74f.effects[0].element,_74d);
}},_74a);
var v=MochiKit.Visual;
return new v.Parallel([new v.Move(_749,{x:0,y:_74a.distance,sync:true}),new v.Opacity(_749,{sync:true,to:0})],_74a);
};
MochiKit.Visual.shake=function(_751,_752){
var d=MochiKit.DOM;
var v=MochiKit.Visual;
var s=MochiKit.Style;
_751=d.getElement(_751);
var _756={top:s.getStyle(_751,"top"),left:s.getStyle(_751,"left")};
_752=MochiKit.Base.update({duration:0.5,afterFinishInternal:function(_757){
s.undoPositioned(_751);
s.setStyle(_751,_756);
}},_752);
return new v.Sequence([new v.Move(_751,{sync:true,duration:0.1*_752.duration,x:20,y:0}),new v.Move(_751,{sync:true,duration:0.2*_752.duration,x:-40,y:0}),new v.Move(_751,{sync:true,duration:0.2*_752.duration,x:40,y:0}),new v.Move(_751,{sync:true,duration:0.2*_752.duration,x:-40,y:0}),new v.Move(_751,{sync:true,duration:0.2*_752.duration,x:40,y:0}),new v.Move(_751,{sync:true,duration:0.1*_752.duration,x:-20,y:0})],_752);
};
MochiKit.Visual.slideDown=function(_758,_759){
var d=MochiKit.DOM;
var b=MochiKit.Base;
var s=MochiKit.Style;
_758=d.getElement(_758);
if(!_758.firstChild){
throw new Error("MochiKit.Visual.slideDown must be used on a element with a child");
}
d.removeEmptyTextNodes(_758);
var _75d=s.getStyle(_758.firstChild,"bottom")||0;
var _75e=s.getElementDimensions(_758,true);
var _75f;
_759=b.update({scaleContent:false,scaleX:false,scaleFrom:0,scaleMode:{originalHeight:_75e.h,originalWidth:_75e.w},restoreAfterFinish:true,afterSetupInternal:function(_760){
s.makePositioned(_760.element);
s.makePositioned(_760.element.firstChild);
if(/Opera/.test(navigator.userAgent)){
s.setStyle(_760.element,{top:""});
}
_75f=s.makeClipping(_760.element);
s.setStyle(_760.element,{height:"0px"});
s.showElement(_760.element);
},afterUpdateInternal:function(_761){
var _762=s.getElementDimensions(_761.element,true);
s.setStyle(_761.element.firstChild,{bottom:(_761.dims[0]-_762.h)+"px"});
},afterFinishInternal:function(_763){
s.undoClipping(_763.element,_75f);
if(/MSIE/.test(navigator.userAgent)){
s.undoPositioned(_763.element);
s.undoPositioned(_763.element.firstChild);
}else{
s.undoPositioned(_763.element.firstChild);
s.undoPositioned(_763.element);
}
s.setStyle(_763.element.firstChild,{bottom:_75d});
}},_759);
return new MochiKit.Visual.Scale(_758,100,_759);
};
MochiKit.Visual.slideUp=function(_764,_765){
var d=MochiKit.DOM;
var b=MochiKit.Base;
var s=MochiKit.Style;
_764=d.getElement(_764);
if(!_764.firstChild){
throw new Error("MochiKit.Visual.slideUp must be used on a element with a child");
}
d.removeEmptyTextNodes(_764);
var _769=s.getStyle(_764.firstChild,"bottom");
var _76a=s.getElementDimensions(_764,true);
var _76b;
_765=b.update({scaleContent:false,scaleX:false,scaleMode:{originalHeight:_76a.h,originalWidth:_76a.w},scaleFrom:100,restoreAfterFinish:true,beforeStartInternal:function(_76c){
s.makePositioned(_76c.element);
s.makePositioned(_76c.element.firstChild);
if(/Opera/.test(navigator.userAgent)){
s.setStyle(_76c.element,{top:""});
}
_76b=s.makeClipping(_76c.element);
s.showElement(_76c.element);
},afterUpdateInternal:function(_76d){
var _76e=s.getElementDimensions(_76d.element,true);
s.setStyle(_76d.element.firstChild,{bottom:(_76d.dims[0]-_76e.h)+"px"});
},afterFinishInternal:function(_76f){
s.hideElement(_76f.element);
s.undoClipping(_76f.element,_76b);
s.undoPositioned(_76f.element.firstChild);
s.undoPositioned(_76f.element);
s.setStyle(_76f.element.firstChild,{bottom:_769});
}},_765);
return new MochiKit.Visual.Scale(_764,0,_765);
};
MochiKit.Visual.squish=function(_770,_771){
var d=MochiKit.DOM;
var b=MochiKit.Base;
var s=MochiKit.Style;
var _775=s.getElementDimensions(_770,true);
var _776;
_771=b.update({restoreAfterFinish:true,scaleMode:{originalHeight:_775.w,originalWidth:_775.h},beforeSetupInternal:function(_777){
_776=s.makeClipping(_777.element);
},afterFinishInternal:function(_778){
s.hideElement(_778.element);
s.undoClipping(_778.element,_776);
}},_771);
return new MochiKit.Visual.Scale(_770,/Opera/.test(navigator.userAgent)?1:0,_771);
};
MochiKit.Visual.grow=function(_779,_77a){
var d=MochiKit.DOM;
var v=MochiKit.Visual;
var s=MochiKit.Style;
_779=d.getElement(_779);
_77a=MochiKit.Base.update({direction:"center",moveTransition:v.Transitions.sinoidal,scaleTransition:v.Transitions.sinoidal,opacityTransition:v.Transitions.full,scaleContent:true,scaleFromCenter:false},_77a);
var _77e={top:_779.style.top,left:_779.style.left,height:_779.style.height,width:_779.style.width,opacity:s.getStyle(_779,"opacity")};
var dims=s.getElementDimensions(_779,true);
var _780,_781;
var _782,_783;
switch(_77a.direction){
case "top-left":
_780=_781=_782=_783=0;
break;
case "top-right":
_780=dims.w;
_781=_783=0;
_782=-dims.w;
break;
case "bottom-left":
_780=_782=0;
_781=dims.h;
_783=-dims.h;
break;
case "bottom-right":
_780=dims.w;
_781=dims.h;
_782=-dims.w;
_783=-dims.h;
break;
case "center":
_780=dims.w/2;
_781=dims.h/2;
_782=-dims.w/2;
_783=-dims.h/2;
break;
}
var _784=MochiKit.Base.update({beforeSetupInternal:function(_785){
s.setStyle(_785.effects[0].element,{height:"0px"});
s.showElement(_785.effects[0].element);
},afterFinishInternal:function(_786){
s.undoClipping(_786.effects[0].element);
s.undoPositioned(_786.effects[0].element);
s.setStyle(_786.effects[0].element,_77e);
}},_77a);
return new v.Move(_779,{x:_780,y:_781,duration:0.01,beforeSetupInternal:function(_787){
s.hideElement(_787.element);
s.makeClipping(_787.element);
s.makePositioned(_787.element);
},afterFinishInternal:function(_788){
new v.Parallel([new v.Opacity(_788.element,{sync:true,to:1,from:0,transition:_77a.opacityTransition}),new v.Move(_788.element,{x:_782,y:_783,sync:true,transition:_77a.moveTransition}),new v.Scale(_788.element,100,{scaleMode:{originalHeight:dims.h,originalWidth:dims.w},sync:true,scaleFrom:/Opera/.test(navigator.userAgent)?1:0,transition:_77a.scaleTransition,scaleContent:_77a.scaleContent,scaleFromCenter:_77a.scaleFromCenter,restoreAfterFinish:true})],_784);
}});
};
MochiKit.Visual.shrink=function(_789,_78a){
var d=MochiKit.DOM;
var v=MochiKit.Visual;
var s=MochiKit.Style;
_789=d.getElement(_789);
_78a=MochiKit.Base.update({direction:"center",moveTransition:v.Transitions.sinoidal,scaleTransition:v.Transitions.sinoidal,opacityTransition:v.Transitions.none,scaleContent:true,scaleFromCenter:false},_78a);
var _78e={top:_789.style.top,left:_789.style.left,height:_789.style.height,width:_789.style.width,opacity:s.getStyle(_789,"opacity")};
var dims=s.getElementDimensions(_789,true);
var _790,_791;
switch(_78a.direction){
case "top-left":
_790=_791=0;
break;
case "top-right":
_790=dims.w;
_791=0;
break;
case "bottom-left":
_790=0;
_791=dims.h;
break;
case "bottom-right":
_790=dims.w;
_791=dims.h;
break;
case "center":
_790=dims.w/2;
_791=dims.h/2;
break;
}
var _792;
var _793=MochiKit.Base.update({beforeStartInternal:function(_794){
s.makePositioned(_794.effects[0].element);
_792=s.makeClipping(_794.effects[0].element);
},afterFinishInternal:function(_795){
s.hideElement(_795.effects[0].element);
s.undoClipping(_795.effects[0].element,_792);
s.undoPositioned(_795.effects[0].element);
s.setStyle(_795.effects[0].element,_78e);
}},_78a);
return new v.Parallel([new v.Opacity(_789,{sync:true,to:0,from:1,transition:_78a.opacityTransition}),new v.Scale(_789,/Opera/.test(navigator.userAgent)?1:0,{scaleMode:{originalHeight:dims.h,originalWidth:dims.w},sync:true,transition:_78a.scaleTransition,scaleContent:_78a.scaleContent,scaleFromCenter:_78a.scaleFromCenter,restoreAfterFinish:true}),new v.Move(_789,{x:_790,y:_791,sync:true,transition:_78a.moveTransition})],_793);
};
MochiKit.Visual.pulsate=function(_796,_797){
var d=MochiKit.DOM;
var v=MochiKit.Visual;
var b=MochiKit.Base;
var _79b=MochiKit.Style.getStyle(_796,"opacity");
_797=b.update({duration:3,from:0,afterFinishInternal:function(_79c){
MochiKit.Style.setStyle(_79c.element,{"opacity":_79b});
}},_797);
var _79d=_797.transition||v.Transitions.sinoidal;
_797.transition=function(pos){
return _79d(1-v.Transitions.pulse(pos,_797.pulses));
};
return new v.Opacity(_796,_797);
};
MochiKit.Visual.fold=function(_79f,_7a0){
var d=MochiKit.DOM;
var v=MochiKit.Visual;
var s=MochiKit.Style;
_79f=d.getElement(_79f);
var _7a4=s.getElementDimensions(_79f,true);
var _7a5={top:_79f.style.top,left:_79f.style.left,width:_79f.style.width,height:_79f.style.height};
var _7a6=s.makeClipping(_79f);
_7a0=MochiKit.Base.update({scaleContent:false,scaleX:false,scaleMode:{originalHeight:_7a4.h,originalWidth:_7a4.w},afterFinishInternal:function(_7a7){
new v.Scale(_79f,1,{scaleContent:false,scaleY:false,scaleMode:{originalHeight:_7a4.h,originalWidth:_7a4.w},afterFinishInternal:function(_7a8){
s.hideElement(_7a8.element);
s.undoClipping(_7a8.element,_7a6);
s.setStyle(_7a8.element,_7a5);
}});
}},_7a0);
return new v.Scale(_79f,5,_7a0);
};
MochiKit.Base.nameFunctions(MochiKit.Visual);
MochiKit.Base._exportSymbols(this,MochiKit.Visual);
MochiKit.Base._module("DragAndDrop","1.5",["Base","Iter","DOM","Signal","Visual","Position"]);
MochiKit.DragAndDrop.Droppables={drops:[],remove:function(_7a9){
this.drops=MochiKit.Base.filter(function(d){
return d.element!=MochiKit.DOM.getElement(_7a9);
},this.drops);
},register:function(drop){
this.drops.push(drop);
},unregister:function(drop){
this.drops=MochiKit.Base.filter(function(d){
return d!=drop;
},this.drops);
},prepare:function(_7ae){
MochiKit.Base.map(function(drop){
if(drop.isAccepted(_7ae)){
if(drop.options.activeclass){
MochiKit.DOM.addElementClass(drop.element,drop.options.activeclass);
}
drop.options.onactive(drop.element,_7ae);
}
},this.drops);
},findDeepestChild:function(_7b0){
var _7b1=_7b0[0];
for(var i=1;i<_7b0.length;++i){
if(MochiKit.DOM.isChildNode(_7b0[i].element,_7b1.element)){
_7b1=_7b0[i];
}
}
return _7b1;
},show:function(_7b3,_7b4){
if(!this.drops.length){
return;
}
var _7b5=[];
if(this.last_active){
this.last_active.deactivate();
}
MochiKit.Iter.forEach(this.drops,function(drop){
if(drop.isAffected(_7b3,_7b4)){
_7b5.push(drop);
}
});
if(_7b5.length>0){
var drop=this.findDeepestChild(_7b5);
MochiKit.Position.within(drop.element,_7b3.page.x,_7b3.page.y);
drop.options.onhover(_7b4,drop.element,MochiKit.Position.overlap(drop.options.overlap,drop.element));
drop.activate();
}
},fire:function(_7b8,_7b9){
if(!this.last_active){
return;
}
MochiKit.Position.prepare();
if(this.last_active.isAffected(_7b8.mouse(),_7b9)){
this.last_active.options.ondrop(_7b9,this.last_active.element,_7b8);
}
},reset:function(_7ba){
MochiKit.Base.map(function(drop){
if(drop.options.activeclass){
MochiKit.DOM.removeElementClass(drop.element,drop.options.activeclass);
}
drop.options.ondesactive(drop.element,_7ba);
},this.drops);
if(this.last_active){
this.last_active.deactivate();
}
}};
MochiKit.DragAndDrop.Droppable=function(_7bc,_7bd){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_7bc,_7bd);
}
this.__init__(_7bc,_7bd);
};
MochiKit.DragAndDrop.Droppable.prototype={__class__:MochiKit.DragAndDrop.Droppable,__init__:function(_7bf,_7c0){
var d=MochiKit.DOM;
var b=MochiKit.Base;
this.element=d.getElement(_7bf);
this.options=b.update({greedy:true,hoverclass:null,activeclass:null,hoverfunc:b.noop,accept:null,onactive:b.noop,ondesactive:b.noop,onhover:b.noop,ondrop:b.noop,containment:[],tree:false},_7c0);
this.options._containers=[];
b.map(MochiKit.Base.bind(function(c){
this.options._containers.push(d.getElement(c));
},this),this.options.containment);
MochiKit.Style.makePositioned(this.element);
MochiKit.DragAndDrop.Droppables.register(this);
},isContained:function(_7c4){
if(this.options._containers.length){
var _7c5;
if(this.options.tree){
_7c5=_7c4.treeNode;
}else{
_7c5=_7c4.parentNode;
}
return MochiKit.Iter.some(this.options._containers,function(c){
return _7c5==c;
});
}else{
return true;
}
},isAccepted:function(_7c7){
return ((!this.options.accept)||MochiKit.Iter.some(this.options.accept,function(c){
return MochiKit.DOM.hasElementClass(_7c7,c);
}));
},isAffected:function(_7c9,_7ca){
return ((this.element!=_7ca)&&this.isContained(_7ca)&&this.isAccepted(_7ca)&&MochiKit.Position.within(this.element,_7c9.page.x,_7c9.page.y));
},deactivate:function(){
if(this.options.hoverclass){
MochiKit.DOM.removeElementClass(this.element,this.options.hoverclass);
}
this.options.hoverfunc(this.element,false);
MochiKit.DragAndDrop.Droppables.last_active=null;
},activate:function(){
if(this.options.hoverclass){
MochiKit.DOM.addElementClass(this.element,this.options.hoverclass);
}
this.options.hoverfunc(this.element,true);
MochiKit.DragAndDrop.Droppables.last_active=this;
},destroy:function(){
MochiKit.DragAndDrop.Droppables.unregister(this);
},repr:function(){
return "["+this.__class__.NAME+", options:"+MochiKit.Base.repr(this.options)+"]";
}};
MochiKit.DragAndDrop.Draggables={drags:[],register:function(_7cb){
if(this.drags.length===0){
var conn=MochiKit.Signal.connect;
this.eventMouseUp=conn(document,"onmouseup",this,this.endDrag);
this.eventMouseMove=conn(document,"onmousemove",this,this.updateDrag);
this.eventKeypress=conn(document,"onkeypress",this,this.keyPress);
}
this.drags.push(_7cb);
},unregister:function(_7cd){
this.drags=MochiKit.Base.filter(function(d){
return d!=_7cd;
},this.drags);
if(this.drags.length===0){
var disc=MochiKit.Signal.disconnect;
disc(this.eventMouseUp);
disc(this.eventMouseMove);
disc(this.eventKeypress);
}
},activate:function(_7d0){
window.focus();
this.activeDraggable=_7d0;
},deactivate:function(){
this.activeDraggable=null;
},updateDrag:function(_7d1){
if(!this.activeDraggable){
return;
}
var _7d2=_7d1.mouse();
if(this._lastPointer&&(MochiKit.Base.repr(this._lastPointer.page)==MochiKit.Base.repr(_7d2.page))){
return;
}
this._lastPointer=_7d2;
this.activeDraggable.updateDrag(_7d1,_7d2);
},endDrag:function(_7d3){
if(!this.activeDraggable){
return;
}
this._lastPointer=null;
this.activeDraggable.endDrag(_7d3);
this.activeDraggable=null;
},keyPress:function(_7d4){
if(this.activeDraggable){
this.activeDraggable.keyPress(_7d4);
}
},notify:function(_7d5,_7d6,_7d7){
MochiKit.Signal.signal(this,_7d5,_7d6,_7d7);
}};
MochiKit.DragAndDrop.Draggable=function(_7d8,_7d9){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_7d8,_7d9);
}
this.__init__(_7d8,_7d9);
};
MochiKit.DragAndDrop.Draggable.prototype={__class__:MochiKit.DragAndDrop.Draggable,__init__:function(_7db,_7dc){
var v=MochiKit.Visual;
var b=MochiKit.Base;
_7dc=b.update({handle:false,starteffect:function(_7df){
this._savedOpacity=MochiKit.Style.getStyle(_7df,"opacity")||1;
new v.Opacity(_7df,{duration:0.2,from:this._savedOpacity,to:0.7});
},reverteffect:function(_7e0,_7e1,_7e2){
var dur=Math.sqrt(Math.abs(_7e1^2)+Math.abs(_7e2^2))*0.02;
return new v.Move(_7e0,{x:-_7e2,y:-_7e1,duration:dur});
},endeffect:function(_7e4){
new v.Opacity(_7e4,{duration:0.2,from:0.7,to:this._savedOpacity});
},onchange:b.noop,zindex:1000,revert:false,scroll:false,scrollSensitivity:20,scrollSpeed:15,snap:false},_7dc);
var d=MochiKit.DOM;
this.element=d.getElement(_7db);
if(_7dc.handle&&(typeof (_7dc.handle)=="string")){
this.handle=d.getFirstElementByTagAndClassName(null,_7dc.handle,this.element);
}
if(!this.handle){
this.handle=d.getElement(_7dc.handle);
}
if(!this.handle){
this.handle=this.element;
}
if(_7dc.scroll&&!_7dc.scroll.scrollTo&&!_7dc.scroll.outerHTML){
_7dc.scroll=d.getElement(_7dc.scroll);
this._isScrollChild=MochiKit.DOM.isChildNode(this.element,_7dc.scroll);
}
MochiKit.Style.makePositioned(this.element);
this.delta=this.currentDelta();
this.options=_7dc;
this.dragging=false;
this.eventMouseDown=MochiKit.Signal.connect(this.handle,"onmousedown",this,this.initDrag);
MochiKit.DragAndDrop.Draggables.register(this);
},destroy:function(){
MochiKit.Signal.disconnect(this.eventMouseDown);
MochiKit.DragAndDrop.Draggables.unregister(this);
},currentDelta:function(){
var s=MochiKit.Style.getStyle;
return [parseInt(s(this.element,"left")||"0"),parseInt(s(this.element,"top")||"0")];
},initDrag:function(_7e7){
if(!_7e7.mouse().button.left){
return;
}
var src=_7e7.target();
var _7e9=(src.tagName||"").toUpperCase();
if(_7e9==="INPUT"||_7e9==="SELECT"||_7e9==="OPTION"||_7e9==="BUTTON"||_7e9==="TEXTAREA"){
return;
}
if(this._revert){
this._revert.cancel();
this._revert=null;
}
var _7ea=_7e7.mouse();
var pos=MochiKit.Position.cumulativeOffset(this.element);
this.offset=[_7ea.page.x-pos.x,_7ea.page.y-pos.y];
MochiKit.DragAndDrop.Draggables.activate(this);
_7e7.stop();
},startDrag:function(_7ec){
this.dragging=true;
if(this.options.selectclass){
MochiKit.DOM.addElementClass(this.element,this.options.selectclass);
}
if(this.options.zindex){
this.originalZ=parseInt(MochiKit.Style.getStyle(this.element,"z-index")||"0");
this.element.style.zIndex=this.options.zindex;
}
if(this.options.ghosting){
this._clone=this.element.cloneNode(true);
this.ghostPosition=MochiKit.Position.absolutize(this.element);
this.element.parentNode.insertBefore(this._clone,this.element);
}
if(this.options.scroll){
if(this.options.scroll==window){
var _7ed=this._getWindowScroll(this.options.scroll);
this.originalScrollLeft=_7ed.left;
this.originalScrollTop=_7ed.top;
}else{
this.originalScrollLeft=this.options.scroll.scrollLeft;
this.originalScrollTop=this.options.scroll.scrollTop;
}
}
MochiKit.DragAndDrop.Droppables.prepare(this.element);
MochiKit.DragAndDrop.Draggables.notify("start",this,_7ec);
if(this.options.starteffect){
this.options.starteffect(this.element);
}
},updateDrag:function(_7ee,_7ef){
if(!this.dragging){
this.startDrag(_7ee);
}
MochiKit.Position.prepare();
MochiKit.DragAndDrop.Droppables.show(_7ef,this.element);
MochiKit.DragAndDrop.Draggables.notify("drag",this,_7ee);
this.draw(_7ef);
this.options.onchange(this);
if(this.options.scroll){
this.stopScrolling();
var p,q;
if(this.options.scroll==window){
var s=this._getWindowScroll(this.options.scroll);
p=new MochiKit.Style.Coordinates(s.left,s.top);
q=new MochiKit.Style.Coordinates(s.left+s.width,s.top+s.height);
}else{
p=MochiKit.Position.page(this.options.scroll);
p.x+=this.options.scroll.scrollLeft;
p.y+=this.options.scroll.scrollTop;
p.x+=(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0);
p.y+=(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0);
q=new MochiKit.Style.Coordinates(p.x+this.options.scroll.offsetWidth,p.y+this.options.scroll.offsetHeight);
}
var _7f3=[0,0];
if(_7ef.page.x>(q.x-this.options.scrollSensitivity)){
_7f3[0]=_7ef.page.x-(q.x-this.options.scrollSensitivity);
}else{
if(_7ef.page.x<(p.x+this.options.scrollSensitivity)){
_7f3[0]=_7ef.page.x-(p.x+this.options.scrollSensitivity);
}
}
if(_7ef.page.y>(q.y-this.options.scrollSensitivity)){
_7f3[1]=_7ef.page.y-(q.y-this.options.scrollSensitivity);
}else{
if(_7ef.page.y<(p.y+this.options.scrollSensitivity)){
_7f3[1]=_7ef.page.y-(p.y+this.options.scrollSensitivity);
}
}
this.startScrolling(_7f3);
}
if(/AppleWebKit/.test(navigator.appVersion)){
window.scrollBy(0,0);
}
_7ee.stop();
},finishDrag:function(_7f4,_7f5){
var dr=MochiKit.DragAndDrop;
this.dragging=false;
if(this.options.selectclass){
MochiKit.DOM.removeElementClass(this.element,this.options.selectclass);
}
if(this.options.ghosting){
MochiKit.Position.relativize(this.element,this.ghostPosition);
MochiKit.DOM.removeElement(this._clone);
this._clone=null;
}
if(_7f5){
dr.Droppables.fire(_7f4,this.element);
}
dr.Draggables.notify("end",this,_7f4);
var _7f7=this.options.revert;
if(_7f7&&typeof (_7f7)=="function"){
_7f7=_7f7(this.element);
}
var d=this.currentDelta();
if(_7f7&&this.options.reverteffect){
this._revert=this.options.reverteffect(this.element,d[1]-this.delta[1],d[0]-this.delta[0]);
}else{
this.delta=d;
}
if(this.options.zindex){
this.element.style.zIndex=this.originalZ;
}
if(this.options.endeffect){
this.options.endeffect(this.element);
}
dr.Draggables.deactivate();
dr.Droppables.reset(this.element);
},keyPress:function(_7f9){
if(_7f9.key().string!="KEY_ESCAPE"){
return;
}
this.finishDrag(_7f9,false);
_7f9.stop();
},endDrag:function(_7fa){
if(!this.dragging){
return;
}
this.stopScrolling();
this.finishDrag(_7fa,true);
_7fa.stop();
},draw:function(_7fb){
var pos=MochiKit.Position.cumulativeOffset(this.element);
var d=this.currentDelta();
pos.x-=d[0];
pos.y-=d[1];
if(this.options.scroll&&(this.options.scroll!=window&&this._isScrollChild)){
pos.x-=this.options.scroll.scrollLeft-this.originalScrollLeft;
pos.y-=this.options.scroll.scrollTop-this.originalScrollTop;
}
var p=[_7fb.page.x-pos.x-this.offset[0],_7fb.page.y-pos.y-this.offset[1]];
if(this.options.snap){
if(typeof (this.options.snap)=="function"){
p=this.options.snap(p[0],p[1]);
}else{
if(this.options.snap instanceof Array){
var i=-1;
p=MochiKit.Base.map(MochiKit.Base.bind(function(v){
i+=1;
return Math.round(v/this.options.snap[i])*this.options.snap[i];
},this),p);
}else{
p=MochiKit.Base.map(MochiKit.Base.bind(function(v){
return Math.round(v/this.options.snap)*this.options.snap;
},this),p);
}
}
}
var _802=this.element.style;
if((!this.options.constraint)||(this.options.constraint=="horizontal")){
_802.left=p[0]+"px";
}
if((!this.options.constraint)||(this.options.constraint=="vertical")){
_802.top=p[1]+"px";
}
if(_802.visibility=="hidden"){
_802.visibility="";
}
},stopScrolling:function(){
if(this.scrollInterval){
clearInterval(this.scrollInterval);
this.scrollInterval=null;
MochiKit.DragAndDrop.Draggables._lastScrollPointer=null;
}
},startScrolling:function(_803){
if(!_803[0]&&!_803[1]){
return;
}
this.scrollSpeed=[_803[0]*this.options.scrollSpeed,_803[1]*this.options.scrollSpeed];
this.lastScrolled=new Date();
this.scrollInterval=setInterval(MochiKit.Base.bind(this.scroll,this),10);
},scroll:function(){
var _804=new Date();
var _805=_804-this.lastScrolled;
this.lastScrolled=_804;
if(this.options.scroll==window){
var s=this._getWindowScroll(this.options.scroll);
if(this.scrollSpeed[0]||this.scrollSpeed[1]){
var dm=_805/1000;
this.options.scroll.scrollTo(s.left+dm*this.scrollSpeed[0],s.top+dm*this.scrollSpeed[1]);
}
}else{
this.options.scroll.scrollLeft+=this.scrollSpeed[0]*_805/1000;
this.options.scroll.scrollTop+=this.scrollSpeed[1]*_805/1000;
}
var d=MochiKit.DragAndDrop;
MochiKit.Position.prepare();
d.Droppables.show(d.Draggables._lastPointer,this.element);
d.Draggables.notify("drag",this);
if(this._isScrollChild){
d.Draggables._lastScrollPointer=d.Draggables._lastScrollPointer||d.Draggables._lastPointer;
d.Draggables._lastScrollPointer.x+=this.scrollSpeed[0]*_805/1000;
d.Draggables._lastScrollPointer.y+=this.scrollSpeed[1]*_805/1000;
if(d.Draggables._lastScrollPointer.x<0){
d.Draggables._lastScrollPointer.x=0;
}
if(d.Draggables._lastScrollPointer.y<0){
d.Draggables._lastScrollPointer.y=0;
}
this.draw(d.Draggables._lastScrollPointer);
}
this.options.onchange(this);
},_getWindowScroll:function(win){
var vp,w,h;
MochiKit.DOM.withWindow(win,function(){
vp=MochiKit.Style.getViewportPosition(win.document);
});
if(win.innerWidth){
w=win.innerWidth;
h=win.innerHeight;
}else{
if(win.document.documentElement&&win.document.documentElement.clientWidth){
w=win.document.documentElement.clientWidth;
h=win.document.documentElement.clientHeight;
}else{
w=win.document.body.offsetWidth;
h=win.document.body.offsetHeight;
}
}
return {top:vp.y,left:vp.x,width:w,height:h};
},repr:function(){
return "["+this.__class__.NAME+", options:"+MochiKit.Base.repr(this.options)+"]";
}};
MochiKit.DragAndDrop.__new__=function(){
MochiKit.Base.nameFunctions(this);
};
MochiKit.DragAndDrop.__new__();
MochiKit.Base._exportSymbols(this,MochiKit.DragAndDrop);
MochiKit.Base._module("Sortable","1.5",["Base","Iter","DOM","Position","DragAndDrop"]);
MochiKit.Base.update(MochiKit.Sortable,{__export__:false,sortables:{},_findRootElement:function(_80d){
while(_80d.tagName.toUpperCase()!="BODY"){
if(_80d.id&&MochiKit.Sortable.sortables[_80d.id]){
return _80d;
}
_80d=_80d.parentNode;
}
},_createElementId:function(_80e){
if(_80e.id==null||_80e.id==""){
var d=MochiKit.DOM;
var id;
var _811=1;
while(d.getElement(id="sortable"+_811)!=null){
_811+=1;
}
d.setNodeAttribute(_80e,"id",id);
}
},options:function(_812){
_812=MochiKit.Sortable._findRootElement(MochiKit.DOM.getElement(_812));
if(!_812){
return;
}
return MochiKit.Sortable.sortables[_812.id];
},destroy:function(_813){
var s=MochiKit.Sortable.options(_813);
var b=MochiKit.Base;
var d=MochiKit.DragAndDrop;
if(s){
MochiKit.Signal.disconnect(s.startHandle);
MochiKit.Signal.disconnect(s.endHandle);
b.map(function(dr){
d.Droppables.remove(dr);
},s.droppables);
b.map(function(dr){
dr.destroy();
},s.draggables);
delete MochiKit.Sortable.sortables[s.element.id];
}
},create:function(_819,_81a){
_819=MochiKit.DOM.getElement(_819);
var self=MochiKit.Sortable;
self._createElementId(_819);
_81a=MochiKit.Base.update({element:_819,tag:"li",dropOnEmpty:false,tree:false,treeTag:"ul",overlap:"vertical",constraint:"vertical",containment:[_819],handle:false,only:false,hoverclass:null,ghosting:false,scroll:false,scrollSensitivity:20,scrollSpeed:15,format:/^[^_]*_(.*)$/,onChange:MochiKit.Base.noop,onUpdate:MochiKit.Base.noop,accept:null},_81a);
self.destroy(_819);
var _81c={revert:true,ghosting:_81a.ghosting,scroll:_81a.scroll,scrollSensitivity:_81a.scrollSensitivity,scrollSpeed:_81a.scrollSpeed,constraint:_81a.constraint,handle:_81a.handle};
if(_81a.starteffect){
_81c.starteffect=_81a.starteffect;
}
if(_81a.reverteffect){
_81c.reverteffect=_81a.reverteffect;
}else{
if(_81a.ghosting){
_81c.reverteffect=function(_81d){
_81d.style.top=0;
_81d.style.left=0;
};
}
}
if(_81a.endeffect){
_81c.endeffect=_81a.endeffect;
}
if(_81a.zindex){
_81c.zindex=_81a.zindex;
}
var _81e={overlap:_81a.overlap,containment:_81a.containment,hoverclass:_81a.hoverclass,onhover:self.onHover,tree:_81a.tree,accept:_81a.accept};
var _81f={onhover:self.onEmptyHover,overlap:_81a.overlap,containment:_81a.containment,hoverclass:_81a.hoverclass,accept:_81a.accept};
MochiKit.DOM.removeEmptyTextNodes(_819);
_81a.draggables=[];
_81a.droppables=[];
if(_81a.dropOnEmpty||_81a.tree){
new MochiKit.DragAndDrop.Droppable(_819,_81f);
_81a.droppables.push(_819);
}
MochiKit.Base.map(function(e){
var _821=_81a.handle?MochiKit.DOM.getFirstElementByTagAndClassName(null,_81a.handle,e):e;
_81a.draggables.push(new MochiKit.DragAndDrop.Draggable(e,MochiKit.Base.update(_81c,{handle:_821})));
new MochiKit.DragAndDrop.Droppable(e,_81e);
if(_81a.tree){
e.treeNode=_819;
}
_81a.droppables.push(e);
},(self.findElements(_819,_81a)||[]));
if(_81a.tree){
MochiKit.Base.map(function(e){
new MochiKit.DragAndDrop.Droppable(e,_81f);
e.treeNode=_819;
_81a.droppables.push(e);
},(self.findTreeElements(_819,_81a)||[]));
}
self.sortables[_819.id]=_81a;
_81a.lastValue=self.serialize(_819);
_81a.startHandle=MochiKit.Signal.connect(MochiKit.DragAndDrop.Draggables,"start",MochiKit.Base.partial(self.onStart,_819));
_81a.endHandle=MochiKit.Signal.connect(MochiKit.DragAndDrop.Draggables,"end",MochiKit.Base.partial(self.onEnd,_819));
},onStart:function(_823,_824){
var self=MochiKit.Sortable;
var _826=self.options(_823);
_826.lastValue=self.serialize(_826.element);
},onEnd:function(_827,_828){
var self=MochiKit.Sortable;
self.unmark();
var _82a=self.options(_827);
if(_82a.lastValue!=self.serialize(_82a.element)){
_82a.onUpdate(_82a.element);
}
},findElements:function(_82b,_82c){
return MochiKit.Sortable.findChildren(_82b,_82c.only,_82c.tree,_82c.tag);
},findTreeElements:function(_82d,_82e){
return MochiKit.Sortable.findChildren(_82d,_82e.only,_82e.tree?true:false,_82e.treeTag);
},findChildren:function(_82f,only,_831,_832){
if(!_82f.hasChildNodes()){
return null;
}
_832=_832.toUpperCase();
if(only){
only=MochiKit.Base.flattenArray([only]);
}
var _833=[];
MochiKit.Base.map(function(e){
if(e.tagName&&e.tagName.toUpperCase()==_832&&(!only||MochiKit.Iter.some(only,function(c){
return MochiKit.DOM.hasElementClass(e,c);
}))){
_833.push(e);
}
if(_831){
var _836=MochiKit.Sortable.findChildren(e,only,_831,_832);
if(_836&&_836.length>0){
_833=_833.concat(_836);
}
}
},_82f.childNodes);
return _833;
},onHover:function(_837,_838,_839){
if(MochiKit.DOM.isChildNode(_838,_837)){
return;
}
var self=MochiKit.Sortable;
if(_839>0.33&&_839<0.66&&self.options(_838).tree){
return;
}else{
if(_839>0.5){
self.mark(_838,"before");
if(_838.previousSibling!=_837){
var _83b=_837.parentNode;
_837.style.visibility="hidden";
_838.parentNode.insertBefore(_837,_838);
if(_838.parentNode!=_83b){
self.options(_83b).onChange(_837);
}
self.options(_838.parentNode).onChange(_837);
}
}else{
self.mark(_838,"after");
var _83c=_838.nextSibling||null;
if(_83c!=_837){
var _83b=_837.parentNode;
_837.style.visibility="hidden";
_838.parentNode.insertBefore(_837,_83c);
if(_838.parentNode!=_83b){
self.options(_83b).onChange(_837);
}
self.options(_838.parentNode).onChange(_837);
}
}
}
},_offsetSize:function(_83d,type){
if(type=="vertical"||type=="height"){
return _83d.offsetHeight;
}else{
return _83d.offsetWidth;
}
},onEmptyHover:function(_83f,_840,_841){
var _842=_83f.parentNode;
var self=MochiKit.Sortable;
var _844=self.options(_840);
if(!MochiKit.DOM.isChildNode(_840,_83f)){
var _845;
var _846=self.findElements(_840,{tag:_844.tag,only:_844.only});
var _847=null;
if(_846){
var _848=self._offsetSize(_840,_844.overlap)*(1-_841);
for(_845=0;_845<_846.length;_845+=1){
if(_848-self._offsetSize(_846[_845],_844.overlap)>=0){
_848-=self._offsetSize(_846[_845],_844.overlap);
}else{
if(_848-(self._offsetSize(_846[_845],_844.overlap)/2)>=0){
_847=_845+1<_846.length?_846[_845+1]:null;
break;
}else{
_847=_846[_845];
break;
}
}
}
}
_840.insertBefore(_83f,_847);
self.options(_842).onChange(_83f);
_844.onChange(_83f);
}
},unmark:function(){
var m=MochiKit.Sortable._marker;
if(m){
MochiKit.Style.hideElement(m);
}
},mark:function(_84a,_84b){
var d=MochiKit.DOM;
var self=MochiKit.Sortable;
var _84e=self.options(_84a.parentNode);
if(_84e&&!_84e.ghosting){
return;
}
if(!self._marker){
self._marker=d.getElement("dropmarker")||document.createElement("DIV");
MochiKit.Style.hideElement(self._marker);
d.addElementClass(self._marker,"dropmarker");
self._marker.style.position="absolute";
document.getElementsByTagName("body").item(0).appendChild(self._marker);
}
var _84f=MochiKit.Position.cumulativeOffset(_84a);
self._marker.style.left=_84f.x+"px";
self._marker.style.top=_84f.y+"px";
if(_84b=="after"){
if(_84e.overlap=="horizontal"){
self._marker.style.left=(_84f.x+_84a.clientWidth)+"px";
}else{
self._marker.style.top=(_84f.y+_84a.clientHeight)+"px";
}
}
MochiKit.Style.showElement(self._marker);
},_tree:function(_850,_851,_852){
var self=MochiKit.Sortable;
var _854=self.findElements(_850,_851)||[];
for(var i=0;i<_854.length;++i){
var _856=_854[i].id.match(_851.format);
if(!_856){
continue;
}
var _857={id:encodeURIComponent(_856?_856[1]:null),element:_850,parent:_852,children:[],position:_852.children.length,container:self._findChildrenElement(_854[i],_851.treeTag.toUpperCase())};
if(_857.container){
self._tree(_857.container,_851,_857);
}
_852.children.push(_857);
}
return _852;
},_findChildrenElement:function(_858,_859){
if(_858&&_858.hasChildNodes){
_859=_859.toUpperCase();
for(var i=0;i<_858.childNodes.length;++i){
if(_858.childNodes[i].tagName.toUpperCase()==_859){
return _858.childNodes[i];
}
}
}
return null;
},tree:function(_85b,_85c){
_85b=MochiKit.DOM.getElement(_85b);
var _85d=MochiKit.Sortable.options(_85b);
_85c=MochiKit.Base.update({tag:_85d.tag,treeTag:_85d.treeTag,only:_85d.only,name:_85b.id,format:_85d.format},_85c||{});
var root={id:null,parent:null,children:new Array,container:_85b,position:0};
return MochiKit.Sortable._tree(_85b,_85c,root);
},setSequence:function(_85f,_860,_861){
var self=MochiKit.Sortable;
var b=MochiKit.Base;
_85f=MochiKit.DOM.getElement(_85f);
_861=b.update(self.options(_85f),_861||{});
var _864={};
b.map(function(n){
var m=n.id.match(_861.format);
if(m){
_864[m[1]]=[n,n.parentNode];
}
n.parentNode.removeChild(n);
},self.findElements(_85f,_861));
b.map(function(_867){
var n=_864[_867];
if(n){
n[1].appendChild(n[0]);
delete _864[_867];
}
},_860);
},_constructIndex:function(node){
var _86a="";
do{
if(node.id){
_86a="["+node.position+"]"+_86a;
}
}while((node=node.parent)!=null);
return _86a;
},sequence:function(_86b,_86c){
_86b=MochiKit.DOM.getElement(_86b);
var self=MochiKit.Sortable;
var _86c=MochiKit.Base.update(self.options(_86b),_86c||{});
return MochiKit.Base.map(function(item){
return item.id.match(_86c.format)?item.id.match(_86c.format)[1]:"";
},MochiKit.DOM.getElement(self.findElements(_86b,_86c)||[]));
},serialize:function(_86f,_870){
_86f=MochiKit.DOM.getElement(_86f);
var self=MochiKit.Sortable;
_870=MochiKit.Base.update(self.options(_86f),_870||{});
var name=encodeURIComponent(_870.name||_86f.id);
if(_870.tree){
return MochiKit.Base.flattenArray(MochiKit.Base.map(function(item){
return [name+self._constructIndex(item)+"[id]="+encodeURIComponent(item.id)].concat(item.children.map(arguments.callee));
},self.tree(_86f,_870).children)).join("&");
}else{
return MochiKit.Base.map(function(item){
return name+"[]="+encodeURIComponent(item);
},self.sequence(_86f,_870)).join("&");
}
}});
MochiKit.Sortable.Sortable=MochiKit.Sortable;
MochiKit.Sortable.__new__=function(){
MochiKit.Base.nameFunctions(this);
};
MochiKit.Sortable.__new__();
MochiKit.Base._exportSymbols(this,MochiKit.Sortable);
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
MochiKit.MochiKit.SUBMODULES=["Base","Iter","Logging","DateTime","Format","Text","Async","DOM","Selector","Style","LoggingPane","Color","Signal","Position","Visual","DragAndDrop","Sortable"];
(function(){
if(typeof (document)=="undefined"){
return;
}
var _875=document.getElementsByTagName("script");
var _876="http://www.w3.org/1999/xhtml";
var _877="http://www.w3.org/2000/svg";
var _878="http://www.w3.org/1999/xlink";
var _879="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
var base=null;
var _87b=null;
var _87c={};
var i;
var src;
for(i=0;i<_875.length;i++){
src=null;
switch(_875[i].namespaceURI){
case _877:
src=_875[i].getAttributeNS(_878,"href");
break;
default:
src=_875[i].getAttribute("src");
break;
}
if(!src){
continue;
}
_87c[src]=true;
if(src.match(/MochiKit.js(\?.*)?$/)){
base=src.substring(0,src.lastIndexOf("MochiKit.js"));
_87b=_875[i];
}
}
if(base===null){
return;
}
var _87f=MochiKit.MochiKit.SUBMODULES;
for(var i=0;i<_87f.length;i++){
if(MochiKit[_87f[i]]){
continue;
}
var uri=base+_87f[i]+".js";
if(uri in _87c){
continue;
}
if(_87b.namespaceURI==_877||_87b.namespaceURI==_879){
var s=document.createElementNS(_87b.namespaceURI,"script");
s.setAttribute("id","MochiKit_"+base+_87f[i]);
if(_87b.namespaceURI==_877){
s.setAttributeNS(_878,"href",uri);
}else{
s.setAttribute("src",uri);
}
s.setAttribute("type","application/x-javascript");
_87b.parentNode.appendChild(s);
}else{
document.write("<"+_87b.nodeName+" src=\""+uri+"\" type=\"text/javascript\"></script>");
}
}
})();
if(typeof (MochiKit)=="undefined"){
throw new ReferenceError("MochiKit must be loaded before loading this script");
}
if(typeof (MochiKit.Base)=="undefined"){
throw new ReferenceError("MochiKit.Base must be loaded before loading this script");
}
MochiKit.Base.defaultValue=function(){
for(var i=0;i<arguments.length;i++){
if(typeof (arguments[i])!="undefined"){
return arguments[i];
}
}
return undefined;
};
MochiKit.Base.dict=function(_883,_884){
var o={};
if(!MochiKit.Base.isArrayLike(_883)){
throw new TypeError("First argument must be array-like");
}
if(MochiKit.Base.isArrayLike(_884)&&_883.length!==_884.length){
throw new TypeError("Both arrays must be of same length");
}
for(var i=0;i<_883.length;i++){
var k=_883[i];
if(k===null||k===undefined){
throw new TypeError("Key at index "+i+" is null or undefined");
}else{
if(MochiKit.Base.isArrayLike(k)){
o[k[0]]=k[1];
}else{
if(MochiKit.Base.isArrayLike(_884)){
o[k]=_884[i];
}else{
o[k]=_884;
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
MochiKit.Base.registerFunctionNames=function(obj,name,_895){
if(typeof (obj)==="function"&&(obj.name==null||obj.name=="")&&typeof (obj.NAME)==="undefined"){
obj.NAME=name;
}
_895=_895||[];
if(obj!=null&&name!=null&&(typeof (obj)==="object"||typeof (obj)==="function")&&obj!==Object.prototype&&obj!==Function.prototype&&typeof (obj.nodeType)!=="number"&&MochiKit.Base.findIdentical(_895,obj)<0){
_895.push(obj);
for(var prop in obj){
var str=name+"."+prop;
MochiKit.Base.registerFunctionNames(obj[prop],str,_895);
}
var str=name+".prototype";
MochiKit.Base.registerFunctionNames(obj.prototype,str,_895);
_895.pop();
}
};
MochiKit.Base.stackTrace=function(_898){
var func=arguments.callee.caller;
var _89a=[];
var res=[];
_898=_898||20;
while(func!=null){
if(MochiKit.Base.findIdentical(_89a,func)>=0){
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
_89a.push(func);
if(_89a.length>=_898){
res.push("...");
break;
}
func=func.caller;
}
return res;
};
MochiKit.Base.injectStackTrace=function(_89d,func){
func=func||arguments.callee.caller;
if(func!=null){
if(_89d){
func.$stackTrace=_89d;
}else{
delete func.$stackTrace;
}
}
};
MochiKit.Base.resolveURI=function(uri,base){
if(uri.indexOf("://")>0){
return uri;
}else{
if(uri.indexOf("#")==0){
var pos=base.lastIndexOf("#");
if(pos>=0){
base=base.substring(0,pos);
}
return base+uri;
}else{
if(uri.indexOf("/")==0){
var pos=base.indexOf("://");
base=base.substring(0,pos+2);
return base+uri;
}else{
if(uri.indexOf("../")==0){
var pos=base.lastIndexOf("/");
base=base.substring(0,pos);
uri=uri.substring(3);
return MochiKit.Base.resolveURI(uri,base);
}else{
var pos=base.lastIndexOf("/");
base=base.substring(0,pos+1);
return base+uri;
}
}
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
var _8a7=MochiKit.Base.map(MochiKit.DOM.reprDOM,node.attributes);
res+=_8a7.join("");
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
MochiKit.DOM.childNode=function(_8ac,_8ad){
_8ac=MochiKit.DOM.getElement(_8ac);
if(typeof (_8ad)=="number"){
if(_8ad<0||_8ad>=_8ac.childNodes.length){
return null;
}else{
return _8ac.childNodes[_8ad];
}
}else{
var node=MochiKit.DOM.getElement(_8ad);
while(node!=null&&node!==_8ac&&node.parentNode!==_8ac){
node=node.parentNode;
}
return (node==null||node===_8ac)?null:node;
}
};
MochiKit.DOM.createDOMExt=function(ns,tag,_8b1){
var doc=MochiKit.DOM.currentDocument();
var node=(ns)?doc.createElementNS(ns,tag):doc.createElement(tag);
MochiKit.DOM.updateNodeAttributes(node,_8b1);
var _8b4=MochiKit.Base.extend([],arguments,3);
MochiKit.DOM.appendChildNodes(node,_8b4);
return node;
};
MochiKit.DOM.createTextNode=function(text){
return MochiKit.DOM.currentDocument().createTextNode(text);
};
MochiKit.DOM.createDOMFuncExt=function(ns,tag,args,_8b9){
args=args||[];
_8b9=_8b9||{};
var _8ba=MochiKit.Base.extend([],arguments,4);
return function(){
var _8bb=MochiKit.Base.update({},_8b9);
for(var pos=0;pos<args.length;pos++){
if(arguments[pos]==null){
throw new Error("Argument '"+args[pos]+"' cannot be null");
}
_8bb[args[pos]]=arguments[pos];
}
MochiKit.Base.update(_8bb,arguments[args.length]);
var _8bd=MochiKit.Base.extend([],_8ba);
MochiKit.Base.extend(_8bd,arguments,args.length+1);
return MochiKit.DOM.createDOMExt(ns,tag,_8bb,_8bd);
};
};
MochiKit.DOM.blurAll=function(node){
if(arguments.length<=1){
MochiKit.DOM.blurAll(node,"A","BUTTON","INPUT","TEXTAREA","SELECT");
}else{
node.blur();
for(var i=1;i<arguments.length;i++){
var _8c0=node.getElementsByTagName(arguments[i]);
for(var j=0;j<_8c0.length;j++){
_8c0[j].blur();
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
MochiKit.DateTime.TimePeriod=function(_8c2){
return {days:Math.floor(_8c2/MochiKit.DateTime.MILLIS_PER_DAY),hours:Math.floor(_8c2/MochiKit.DateTime.MILLIS_PER_HOUR)%24,minutes:Math.floor(_8c2/MochiKit.DateTime.MILLIS_PER_MINUTE)%60,seconds:Math.floor(_8c2/MochiKit.DateTime.MILLIS_PER_SECOND)%60,millis:_8c2%1000};
};
MochiKit.DateTime.toApproxPeriod=function(_8c3){
var p=MochiKit.DateTime.TimePeriod(_8c3);
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
var _8c6=node.parentNode;
if(_8c6&&_8c6.lastChild!==node){
_8c6.appendChild(node);
}
}
};
MochiKit.SVG.moveToBottom=function(node){
node=MochiKit.DOM.getElement(node);
if(node!=null){
var _8c8=node.parentNode;
if(_8c8&&_8c8.firstChild!==node){
_8c8.insertBefore(node,_8c8.firstChild);
}
}
};
MochiKit.SVG.rotate=function(node,_8ca,x,y){
var str=MochiKit.DOM.getNodeAttribute(node,"transform");
x=x||0;
y=y||0;
if(str==null||str==""){
str="";
}else{
str+=" ";
}
str+="rotate("+_8ca+","+x+","+y+")";
MochiKit.DOM.setNodeAttribute(node,"transform",str);
};
if(typeof (MochiKit)=="undefined"){
throw new ReferenceError("MochiKit must be loaded before loading this script");
}
if(typeof (MochiKit.Style)=="undefined"){
throw new ReferenceError("MochiKit.Style must be loaded before loading this script");
}
MochiKit.Style.getBorderBox=function(node){
var _8cf=MochiKit.Style.getStyle;
var px=MochiKit.Style._toPixels;
return {t:px(_8cf(node,"border-width-top")),b:px(_8cf(node,"border-width-bottom")),l:px(_8cf(node,"border-width-left")),r:px(_8cf(node,"border-width-right"))};
};
MochiKit.Style.getPaddingBox=function(node){
var _8d2=MochiKit.Style.getStyle;
var px=MochiKit.Style._toPixels;
return {t:px(_8d2(node,"padding-top")),b:px(_8d2(node,"padding-bottom")),l:px(_8d2(node,"padding-left")),r:px(_8d2(node,"padding-right"))};
};
MochiKit.Style._toPixels=function(_8d4){
if(_8d4!=null){
try{
_8d4=MochiKit.Format.rstrip(_8d4,"px");
_8d4=Math.round(parseFloat(_8d4));
}
catch(ignore){
_8d4=null;
}
}
return (_8d4==null||isNaN(_8d4))?null:_8d4;
};
MochiKit.Style.getScrollOffset=function(node){
node=MochiKit.DOM.getElement(node);
var x=node.scrollLeft||0;
var y=node.scrollTop||0;
return new MochiKit.Style.Coordinates(x,y);
};
MochiKit.Style.setScrollOffset=function(node,_8d9){
node=MochiKit.DOM.getElement(node);
node.scrollLeft=_8d9.x;
node.scrollTop=_8d9.y;
};
MochiKit.Style.resetScrollOffset=function(node,_8db){
node=MochiKit.DOM.getElement(node);
node.scrollLeft=0;
node.scrollTop=0;
if(_8db){
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
MochiKit.Style.registerSizeConstraints=function(node,_8e4,_8e5,_8e6){
node=MochiKit.DOM.getElement(node);
var sc=node.sizeConstraints={w:null,h:null,a:null};
if(typeof (_8e4)=="number"){
sc.w=function(w,h){
return _8e4;
};
}else{
if(typeof (_8e4)=="function"){
sc.w=_8e4;
}else{
if(typeof (_8e4)=="string"){
var code="return "+_8e4.replace(/%/g,"*0.01*w")+";";
sc.w=new Function("w","h",code);
}
}
}
if(typeof (_8e5)=="number"){
sc.h=function(w,h){
return _8e5;
};
}else{
if(typeof (_8e5)=="function"){
sc.h=_8e5;
}else{
if(typeof (_8e5)=="string"){
var code="return "+_8e5.replace(/%/g,"*0.01*h")+";";
sc.h=new Function("w","h",code);
}
}
}
if(typeof (_8e6)=="number"){
sc.a=function(w,h){
return _8e6;
};
}else{
if(typeof (_8e6)=="function"){
sc.a=_8e6;
}else{
if(typeof (_8e6)=="string"){
var code="return "+_8e6.replace(/%/g,"*0.01*w/h")+";";
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
MochiKit.Widget._id=MochiKit.Base.counter();
MochiKit.Widget.isWidget=function(obj,_8fb){
if(_8fb!=null){
return MochiKit.DOM.isHTML(obj)&&MochiKit.DOM.hasElementClass(obj,"widget")&&MochiKit.DOM.hasElementClass(obj,"widget"+_8fb);
}else{
return MochiKit.DOM.isHTML(obj)&&MochiKit.DOM.hasElementClass(obj,"widget");
}
};
MochiKit.Widget.isFormField=function(obj){
if(!MochiKit.DOM.isHTML(obj)||typeof (obj.tagName)!=="string"){
return false;
}
var _8fd=obj.tagName.toUpperCase();
return _8fd=="INPUT"||_8fd=="TEXTAREA"||_8fd=="SELECT"||MochiKit.Widget.isWidget(obj,"Field");
};
MochiKit.Widget._widgetMixin=function(node){
MochiKit.DOM.addElementClass(node,"widget");
for(var i=1;i<arguments.length;i++){
var obj=arguments[i];
if(typeof (obj)==="function"){
obj=obj.prototype;
}
MochiKit.Base.setdefault(node,obj);
}
MochiKit.Base.setdefault(node,MochiKit.Widget.prototype);
return node;
};
MochiKit.Widget.createWidget=function(name,_902){
var cls=MochiKit.Widget.Classes[name];
if(cls==null){
throw new ReferenceError("failed to find widget '"+name+"' in MochiKit.Widget.Classes");
}
return cls.apply(this,MochiKit.Base.extend([],arguments,1));
};
MochiKit.Widget.createWidgetTree=function(node,ids){
if(node.documentElement){
return MochiKit.Widget.createWidgetTree(node.documentElement.childNodes,ids);
}else{
if(typeof (node.item)!="undefined"&&typeof (node.length)=="number"){
var iter=MochiKit.Iter.repeat(ids,node.length);
iter=MochiKit.Iter.imap(MochiKit.Widget.createWidgetTree,node,iter);
iter=MochiKit.Iter.ifilterfalse(MochiKit.Base.isUndefinedOrNull,iter);
return MochiKit.Iter.list(iter);
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
var _90b=MochiKit.Base.dict(MochiKit.DOM.attributeArrayNewImpl(node));
var _90c=MochiKit.Base.mask(_90b,["id","w","h","a","class","style"]);
var _90d=MochiKit.Widget.createWidgetTree(node.childNodes,ids);
if(MochiKit.Widget.Classes[name]){
if(name=="Table"&&_90b.multiple){
MochiKit.Logging.logWarning("Table 'multiple' attribute is deprecated, use 'select'");
_90b.select=MochiKit.Base.bool(_90b.multiple)?"multiple":"one";
delete _90b.multiple;
}
var _90e=MochiKit.Widget.createWidget(name,_90b,_90d);
}else{
var _90e=MochiKit.DOM.createDOM(name,_90b,_90d);
}
if(_90c.id){
if(ids){
ids[_90c.id]=_90e;
}else{
_90e.id=_90c.id;
}
}
if(_90c.w||_90c.h||_90c.a){
MochiKit.Style.registerSizeConstraints(_90e,_90c.w,_90c.h,_90c.a);
}
if(_90c["class"]){
var _90f=MochiKit.Format.strip(_90c["class"]).split(" ");
if(typeof (_90e.addClass)=="function"){
_90e.addClass.apply(_90e,_90f);
}else{
for(var i=0;i<arguments.length;i++){
MochiKit.DOM.addElementClass(_90e,_90f[i]);
}
}
}
if(_90c.style){
var _911={};
var _912=_90c.style.split(";");
for(var i=0;i<_912.length;i++){
var a=_912[i].split(":");
var k=MochiKit.Format.strip(a[0]);
if(k!=""&&a.length>1){
_911[k]=MochiKit.Format.strip(a[1]);
}
}
if(typeof (_90e.setAttrs)=="function"){
_90e.setAttrs({style:_911});
}else{
MochiKit.Style.setStyle(_90e,_911);
}
}
return _90e;
};
MochiKit.Widget.destroyWidget=function(node){
if(node.nodeType!=null){
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
}else{
if(MochiKit.Base.isArrayLike(node)){
for(var i=node.length-1;i>=0;i--){
MochiKit.Widget.destroyWidget(node[i]);
}
}
}
};
MochiKit.Widget._eventHandler=function(_917,_918){
var _919=MochiKit.Base.extend([],arguments,2);
return function(evt){
var node=this;
while(!MochiKit.Widget.isWidget(node,_917)){
node=node.parentNode;
}
var e=new MochiKit.Signal.Event(this,evt);
return node[_918].apply(node,_919.concat([e]));
};
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
MochiKit.Widget.prototype.setAttrs=function(_920){
MochiKit.DOM.updateNodeAttributes(this,_920);
};
MochiKit.Widget.prototype.setStyle=function(_921){
MochiKit.Style.setStyle(this,_921);
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
var _926={scope:this._animQueueId(),position:"replace"};
opts=MochiKit.Base.updatetree({queue:_926},opts);
if(typeof (opts.queue)=="string"){
_926.position=opts.queue;
opts.queue=_926;
}
var func=MochiKit.Visual[opts.effect];
if(typeof (func)=="function"){
func.call(null,this,opts);
}
};
MochiKit.Widget.prototype._animQueueId=function(){
if(this._queueId==null){
this._queueId=this.id||"widget"+MochiKit.Widget._id();
}
return this._queueId;
};
MochiKit.Widget.prototype.blurAll=function(){
MochiKit.DOM.blurAll(this);
};
MochiKit.Widget.prototype.getChildNodes=function(){
return MochiKit.Base.extend([],this.childNodes);
};
MochiKit.Widget.prototype.addChildNode=function(_928){
this.appendChild(_928);
};
MochiKit.Widget.prototype.removeChildNode=function(_929){
this.removeChild(_929);
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
var _92c=this.getChildNodes();
for(var i=_92c.length-1;i>=0;i--){
this.removeChildNode(_92c[i]);
MochiKit.Widget.destroyWidget(_92c[i]);
}
};
MochiKit.Widget.Button=function(_92e){
var o=MochiKit.DOM.BUTTON();
MochiKit.Widget._widgetMixin(o,arguments.callee);
o.addClass("widgetButton");
o.setAttrs(_92e);
o.addAll(MochiKit.Base.extend(null,arguments,1));
return o;
};
MochiKit.Widget.Button.prototype.setAttrs=function(_930){
_930=MochiKit.Base.update({},_930);
var _931=MochiKit.Base.mask(_930,["highlight"]);
if(typeof (_931.highlight)!="undefined"){
if(MochiKit.Base.bool(_931.highlight)){
this.addClass("widgetButtonHighlight");
}else{
this.removeClass("widgetButtonHighlight");
}
}
MochiKit.DOM.updateNodeAttributes(this,_930);
};
MochiKit.Widget.Dialog=function(_932){
var _933=MochiKit.DOM.DIV({"class":"widgetDialogTitle"},"Dialog");
var _934=new MochiKit.Widget.Icon({ref:"CLOSE","class":"widgetDialogClose"});
var _935=new MochiKit.Widget.Icon({ref:"RESIZE","class":"widgetDialogResize"});
var _936=MochiKit.DOM.DIV({"class":"widgetDialogContent"});
MochiKit.Style.registerSizeConstraints(_936,"100% - 22","100% - 44");
var o=MochiKit.DOM.DIV({},_933,_934,_935,_936);
MochiKit.Widget._widgetMixin(o,arguments.callee);
o.addClass("widgetDialog","widgetHidden");
o.setAttrs(MochiKit.Base.update({modal:false,center:true},_932));
o.addAll(MochiKit.Base.extend(null,arguments,1));
_933.onmousedown=MochiKit.Widget._eventHandler("Dialog","_handleMoveStart");
_934.onclick=MochiKit.Widget._eventHandler("Dialog","hide");
_935.onmousedown=MochiKit.Widget._eventHandler("Dialog","_handleResizeStart");
return o;
};
MochiKit.Widget.Dialog.prototype.setAttrs=function(_938){
_938=MochiKit.Base.update({},_938);
var _939=MochiKit.Base.mask(_938,["title","modal","center","resizeable"]);
if(typeof (_939.title)!="undefined"){
MochiKit.DOM.replaceChildNodes(this.firstChild,_939.title);
}
if(typeof (_939.modal)!="undefined"){
this.modal=MochiKit.Base.bool(_939.modal);
}
if(typeof (_939.center)!="undefined"){
this.center=MochiKit.Base.bool(_939.center);
}
if(typeof (_939.resizeable)!="undefined"){
var _93a=this.childNodes[2];
if(MochiKit.Base.bool(_939.resizeable)){
_93a.show();
}else{
_93a.hide();
}
}
MochiKit.DOM.updateNodeAttributes(this,_938);
};
MochiKit.Widget.Dialog.prototype.show=function(){
if(this.parentNode==null){
throw new Error("Cannot show Dialog widget without setting a parent DOM node");
}
if(this.modal){
var _93b={loading:false,message:"",style:{"z-index":"99"}};
this._modalNode=new MochiKit.Widget.Overlay(_93b);
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
MochiKit.Widget.Dialog.prototype.addChildNode=function(_93d){
this.lastChild.appendChild(_93d);
};
MochiKit.Widget.Dialog.prototype.removeChildNode=function(_93e){
this.lastChild.removeChild(_93e);
};
MochiKit.Widget.Dialog.prototype.moveTo=function(x,y){
var _941=MochiKit.Style.getElementDimensions(this.parentNode);
var dim=MochiKit.Style.getElementDimensions(this);
var pos={x:Math.max(0,Math.min(x,_941.w-dim.w-2)),y:Math.max(0,Math.min(y,_941.h-dim.h-2))};
MochiKit.Style.setElementPosition(this,pos);
MochiKit.Widget.emitSignal(this,"onmove",pos);
};
MochiKit.Widget.Dialog.prototype.moveToCenter=function(){
var _944=MochiKit.Style.getElementDimensions(this.parentNode);
var dim=MochiKit.Style.getElementDimensions(this);
var pos={x:Math.round(Math.max(0,(_944.w-dim.w)/2)),y:Math.round(Math.max(0,(_944.h-dim.h)/2))};
MochiKit.Style.setElementPosition(this,pos);
MochiKit.Widget.emitSignal(this,"onmove",pos);
};
MochiKit.Widget.Dialog.prototype.resizeTo=function(_947,_948){
var _949=MochiKit.Style.getElementDimensions(this.parentNode);
var pos=MochiKit.Style.getElementPosition(this,this.parentNode);
var dim={w:Math.max(150,Math.min(_947,_949.w-pos.x-2)),h:Math.max(100,Math.min(_948,_949.h-pos.y-2))};
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
MochiKit.Widget.Field=function(_955){
var o=MochiKit.DOM.SPAN();
MochiKit.Widget._widgetMixin(o,arguments.callee);
o.addClass("widgetField");
o.setAttrs(MochiKit.Base.update({name:"",value:"",maxLength:-1},_955));
o.defaultValue=o.value;
return o;
};
MochiKit.Widget.Field.prototype.setAttrs=function(_957){
_957=MochiKit.Base.update({},_957);
var _958=MochiKit.Base.mask(_957,["name","value","format","maxLength"]);
if(typeof (_958.name)!="undefined"){
this.name=_958.name;
}
if(typeof (_958.format)!="undefined"){
this.format=_958.format;
}
if(typeof (_958.maxLength)!="undefined"){
this.maxLength=parseInt(_958.maxLength);
}
if(typeof (_958.value)!="undefined"){
var str=this.value=_958.value;
if(this.format){
str=MochiKit.Text.format(this.format,str);
}else{
if(str==null){
str="null";
}else{
if(typeof (str)!="string"){
str=str.toString();
}
}
}
var _95a=str;
if(this.maxLength>0){
str=MochiKit.Text.truncate(str,this.maxLength,"...");
}
MochiKit.DOM.replaceChildNodes(this,str);
this.title=(str==_95a)?null:_95a;
}
MochiKit.DOM.updateNodeAttributes(this,_957);
};
MochiKit.Widget.Field.prototype.reset=function(){
this.setAttrs({value:this.defaultValue});
};
MochiKit.Widget.FileStreamer=function(_95b){
var defs={src:"about:blank",scrolling:"no",border:"0",frameborder:"0"};
var o=MochiKit.DOM.createDOM("iframe",defs);
MochiKit.Widget._widgetMixin(o,arguments.callee);
o.addClass("widgetFileStreamer");
o.setAttrs(MochiKit.Base.update({url:"",name:"file",size:"30"},_95b));
var _95e=MochiKit.Selector.findDocElements("link[href*=widget.css]");
if(_95e.length>0){
o.cssUrl=_95e[0].href;
}
o.onload=o._handleLoad;
return o;
};
MochiKit.Widget.FileStreamer.prototype.setAttrs=function(_95f){
_95f=MochiKit.Base.update({},_95f);
var _960=MochiKit.Base.mask(_95f,["url","name","size"]);
if(typeof (_960.url)!="undefined"){
this.formUrl=MochiKit.Base.resolveURI(_960.url,window.location.href);
}
if(typeof (_960.name)!="undefined"){
this.inputName=_960.param;
}
if(typeof (_960.size)!="undefined"){
this.inputSize=_960.size;
}
MochiKit.DOM.updateNodeAttributes(this,_95f);
};
MochiKit.Widget.FileStreamer.prototype._handleLoad=function(){
var doc=this.contentDocument;
if(doc.location.href==this.formUrl){
MochiKit.Widget.emitSignal(this,"onupload");
}
MochiKit.DOM.withDocument(doc,MochiKit.Base.bind("_initDocument",this));
};
MochiKit.Widget.FileStreamer.prototype._handleChange=function(){
MochiKit.Widget.emitSignal(this,"onselect");
var form=this.contentDocument.getElementsByTagName("form")[0];
form.submit();
form.appendChild(MochiKit.Widget.Overlay());
};
MochiKit.Widget.FileStreamer.prototype._initDocument=function(){
var doc=this.contentDocument;
var head=doc.getElementsByTagName("head")[0];
var body=doc.body;
if(head==null){
head=doc.createElement("head");
body.parentElement.insertBefore(head,body);
}
var _966={rel:"stylesheet",href:this.cssUrl,type:"text/css"};
var link=MochiKit.DOM.createDOM("link",_966);
head.appendChild(link);
var _966={type:"file",name:this.inputName,size:this.inputSize};
var _968=MochiKit.DOM.INPUT(_966);
var _966={method:"POST",action:this.formUrl,enctype:"multipart/form-data"};
var form=MochiKit.DOM.FORM(_966,_968);
_968.onchange=MochiKit.Base.bind("_handleChange",this);
body.className="widgetFileStreamer";
MochiKit.DOM.replaceChildNodes(body,form);
};
MochiKit.Widget.FileStreamer.prototype.resizeContent=function(){
var doc=this.contentDocument;
if(doc!=null&&typeof (doc.getElementsByTagName)==="function"){
var form=doc.getElementsByTagName("form")[0];
if(form!=null){
var _96c=form.firstChild;
this.width=_96c.clientWidth+2;
this.height=Math.max(24,_96c.clientHeight);
}
}
};
MochiKit.Widget.Form=function(_96d){
var o=MochiKit.DOM.FORM(_96d);
MochiKit.Widget._widgetMixin(o,arguments.callee);
o.reset=MochiKit.Widget.Form.prototype.reset;
o.addClass("widgetForm");
o.onsubmit=MochiKit.Widget._eventHandler(null,"_handleSubmit");
o.addAll(MochiKit.Base.extend(null,arguments,1));
return o;
};
MochiKit.Widget.Form.prototype.fields=function(){
var _96f=[];
MochiKit.Base.nodeWalk(this,function(elem){
if(elem.nodeType!==1){
return null;
}
if(MochiKit.Widget.isFormField(elem)){
_96f.push(elem);
return null;
}else{
return elem.childNodes;
}
});
return _96f;
};
MochiKit.Widget.Form.prototype.fieldMap=function(){
var _971=this.fields();
var map={};
for(var i=0;i<_971.length;i++){
var name=_971[i].name;
if(typeof (name)=="string"){
if(map[name] instanceof Array){
map[name].push(_971[i]);
}else{
if(map[name]!=null){
map[name]=[map[name],_971[i]];
}else{
map[name]=_971[i];
}
}
}
}
return map;
};
MochiKit.Widget.Form.prototype.reset=function(){
this.validateReset();
var _975=this.fields();
for(var i=0;i<_975.length;i++){
var elem=_975[i];
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
var _97a=this.fields();
var map={};
for(var i=0;i<_97a.length;i++){
var name=_97a[i].name;
var _97e="";
if(typeof (_97a[i].getValue)=="function"){
_97e=_97a[i].getValue();
}else{
_97e=_97a[i].value;
}
if(_97a[i].type==="radio"||_97a[i].type==="checkbox"){
if(_97a[i].checked){
_97e=_97e||true;
}else{
_97e=null;
}
}
if(typeof (name)=="string"&&_97e!=null){
if(map[name] instanceof Array){
map[name].push(_97e);
}else{
if(map[name]!=null){
map[name]=[map[name],_97e];
}else{
map[name]=_97e;
}
}
}
}
return map;
};
MochiKit.Widget.Form.prototype.update=function(_97f){
var _980=this.fields();
for(var i=0;i<_980.length;i++){
var elem=_980[i];
if(elem.name in _97f){
var _983=_97f[elem.name];
if(elem.type==="radio"||elem.type==="checkbox"){
if(_983==null){
elem.checked=false;
}else{
if(MochiKit.Base.isArrayLike(_983)){
elem.checked=(MochiKit.Base.findValue(_983,elem.value)>=0);
}else{
elem.checked=(elem.value===_983||_983===true);
}
}
}else{
if(MochiKit.Base.isArrayLike(_983)){
_983=_983.join(", ");
}
if(typeof (elem.setAttrs)=="function"){
elem.setAttrs({value:_983});
}else{
elem.value=_983;
}
}
}
}
};
MochiKit.Widget.Form.prototype.validators=function(){
var res=[];
var _985=this.getElementsByTagName("SPAN");
for(var i=0;i<_985.length;i++){
if(MochiKit.Widget.isWidget(_985[i],"FormValidator")){
res.push(_985[i]);
}
}
return res;
};
MochiKit.Widget.Form.prototype.validate=function(){
var _987=this.validators();
var _988=this.fields();
var _989=true;
var _98a=[];
for(var i=0;i<_987.length;i++){
_987[i].reset();
}
for(var i=0;i<_987.length;i++){
for(var j=0;j<_988.length;j++){
if(_987[i].name==_988[j].name){
var res=_987[i].verify(_988[j]);
if(res instanceof MochiKit.Async.Deferred){
_98a.push(res);
}else{
if(res===false){
_989=false;
}
}
}
}
}
if(!_989){
return false;
}else{
if(_98a.length>0){
return MochiKit.Async.gatherResults(_98a);
}else{
return true;
}
}
};
MochiKit.Widget.Form.prototype.validateReset=function(){
var _98e=this.validators();
for(var i=0;i<_98e.length;i++){
_98e[i].reset();
}
};
MochiKit.Widget.Form.prototype._handleSubmit=function(evt){
evt.stop();
return false;
};
MochiKit.Widget.FormValidator=function(_991){
var o=MochiKit.DOM.SPAN();
MochiKit.Widget._widgetMixin(o,arguments.callee);
o.addClass("widgetFormValidator");
o.setAttrs(MochiKit.Base.update({name:"",mandatory:true,display:"error",message:null,validator:null},_991));
o.fields=[];
o.hide();
return o;
};
MochiKit.Widget.FormValidator.prototype.setAttrs=function(_993){
_993=MochiKit.Base.update({},_993);
var _994=MochiKit.Base.mask(_993,["name","mandatory","regex","display","message","validator"]);
if(typeof (_994.name)!="undefined"){
this.name=_994.name;
}
if(typeof (_994.mandatory)!="undefined"){
this.mandatory=MochiKit.Base.bool(_994.mandatory);
}
if(typeof (_994.regex)!="undefined"){
if(_994.regex instanceof RegExp){
this.regex=_994.regex;
}else{
if(_994.regex.indexOf("^")!=0){
_994.regex="^"+_994.regex;
}
if(_994.regex.indexOf("$")!=_994.regex.length-1){
_994.regex+="$";
}
this.regex=new RegExp(_994.regex);
}
}
if(typeof (_994.display)!="undefined"){
this.display=_994.display;
}
if(typeof (_994.message)!="undefined"){
this.message=_994.message;
}
if(typeof (_994.validator)!="undefined"){
this.validator=_994.validator;
}
MochiKit.DOM.updateNodeAttributes(this,_993);
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
MochiKit.Widget.FormValidator.prototype.verify=function(_996){
if(!_996.disabled){
var _997="";
if(typeof (_996.getValue)=="function"){
_997=_996.getValue();
}else{
_997=_996.value;
}
var _998=MochiKit.Format.strip(_997);
if(MochiKit.Format.strip(_997)==""){
if(this.mandatory){
var msg="This field is mandatory and cannot be left blank";
this.addError(_996,msg);
return false;
}
}else{
if(this.regex!=null&&!this.regex.test(_998)){
var msg="The field format is incorrect";
this.addError(_996,msg);
return false;
}else{
if(typeof (this.validator)=="function"){
var res=this.validator(_997);
if(res instanceof MochiKit.Async.Deferred){
var self=this;
res.addErrback(function(e){
self.addError(_996,e.message);
return e;
});
return res;
}else{
if(typeof (res)=="string"){
this.addError(_996,res);
return false;
}else{
if(res===false){
this.addError(_996,"Field validation failed");
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
MochiKit.Widget.FormValidator.prototype.addError=function(_99d,_99e){
if(!MochiKit.DOM.hasElementClass(_99d,"widgetInvalid")){
this.fields.push(_99d);
MochiKit.DOM.addElementClass(_99d,"widgetInvalid");
if(this.display==="error"){
var _99f={ref:"ERROR",tooltip:this.message||_99e};
this.addAll(new MochiKit.Widget.Icon(_99f));
this.show();
}
}
};
MochiKit.Widget.Icon=function(_9a0){
var o=MochiKit.DOM.IMG();
MochiKit.Widget._widgetMixin(o,arguments.callee);
o.setAttrs(_9a0);
o.addClass("widgetIcon");
return o;
};
MochiKit.Widget.Icon.prototype.setAttrs=function(_9a2){
_9a2=MochiKit.Base.update({},_9a2);
if(_9a2.ref){
MochiKit.Base.setdefault(_9a2,MochiKit.Widget.Icon[_9a2.ref],MochiKit.Widget.Icon.DEFAULT);
}
var _9a3=MochiKit.Base.mask(_9a2,["ref","url","baseUrl","tooltip","width","height"]);
if(typeof (_9a3.url)!="undefined"){
MochiKit.Base.setdefault(_9a3,MochiKit.Widget.Icon.DEFAULT);
_9a2.src=_9a3.baseUrl+_9a3.url;
}
if(typeof (_9a3.tooltip)!="undefined"){
_9a2.alt=_9a3.tooltip;
_9a2.title=_9a3.tooltip;
}
if(typeof (_9a3.width)!="undefined"){
this.width=_9a3.width;
this.setStyle({width:_9a3.width+"px"});
}
if(typeof (_9a3.height)!="undefined"){
this.height=_9a3.height;
this.setStyle({height:_9a3.height+"px"});
}
MochiKit.DOM.updateNodeAttributes(this,_9a2);
};
MochiKit.Base.update(MochiKit.Widget.Icon,{DEFAULT:{baseUrl:"images/icons/",width:"16",height:"16"},BLANK:{url:"blank.gif",style:{cursor:"default"}},CLOSE:{url:"close.gif"},RESIZE:{url:"resize-handle.gif",style:{cursor:"se-resize"}},OK:{url:"ok.gif",tooltip:"OK"},CANCEL:{url:"cancel.gif",tooltip:"Cancel"},HELP:{url:"help.gif",tooltip:"Help"},ERROR:{url:"error.gif",tooltip:"Error"},PLUS:{url:"plus.gif",tooltip:"Show"},MINUS:{url:"minus.gif",tooltip:"Hide"},NEXT:{url:"next.gif",tooltip:"Next"},PREVIOUS:{url:"previous.gif",tooltip:"Previous"},CONFIG:{url:"config.gif",tooltip:"Configure"},DELAY:{url:"delay.gif",tooltip:"Configure Delay"},RELOAD:{url:"reload.gif",tooltip:"Reload"},LOADING:{url:"loading.gif",tooltip:"Loading..."},LOADING_LARGE:{url:"loading-large.gif",tooltip:"Loading...",width:"32",height:"32"},SEARCH:{url:"magnifier.gif",tooltip:"Search"},ADD:{url:"add.gif",tooltip:"Add"},REMOVE:{url:"remove.gif",tooltip:"Remove"},EDIT:{url:"edit.gif",tooltip:"Edit"},DELETE:{url:"trash.gif",tooltip:"Clear / Delete"},SELECT:{url:"select.gif",tooltip:"Select / Unselect"},CUT:{url:"cut.gif",tooltip:"Cut"},DIALOG:{url:"dialog.gif",tooltip:"Open Dialog"},EXPORT:{url:"export.gif",tooltip:"Export"},EXPAND:{url:"expand.gif",tooltip:"Expand"},UP:{url:"up.gif",tooltip:"Move Up"},DOWN:{url:"down.gif",tooltip:"Move Down"},LEFT:{url:"left.gif",tooltip:"Move Left"},RIGHT:{url:"right.gif",tooltip:"Move Right"},COMMENT:{url:"comment.gif",tooltip:"Comment"},CALENDAR:{url:"calendar.gif",tooltip:"Calendar"},AUTOMATIC:{url:"automatic.gif",tooltip:"Automatic Processing"},PLUGIN:{url:"plugin.gif",tooltip:"Plug-in"},FOLDER:{url:"folder.gif"},DOCUMENT:{url:"document.gif"}});
MochiKit.Widget.Overlay=function(_9a4){
var msg=MochiKit.DOM.DIV({"class":"widgetOverlayMessage"});
var o=MochiKit.DOM.DIV({},msg);
MochiKit.Widget._widgetMixin(o,arguments.callee);
o.addClass("widgetOverlay");
_9a4=MochiKit.Base.update({loading:true,message:"Working..."},_9a4);
o.setAttrs(_9a4);
o.addAll(MochiKit.Base.extend(null,arguments,1));
return o;
};
MochiKit.Widget.Overlay.prototype.setAttrs=function(_9a7){
_9a7=MochiKit.Base.update({},_9a7);
var _9a8=MochiKit.Base.mask(_9a7,["loading","message"]);
if(typeof (_9a8.loading)!="undefined"){
this.showLoading=MochiKit.Base.bool(_9a8.loading);
}
if(typeof (_9a8.message)!="undefined"){
this.message=_9a8.message;
}
if(typeof (this.showLoading)!="undefined"){
var icon=new MochiKit.Widget.Icon({ref:"LOADING_LARGE"});
icon.setStyle({"padding-right":"20px"});
}
MochiKit.DOM.replaceChildNodes(this.firstChild,icon,this.message);
MochiKit.DOM.updateNodeAttributes(this,_9a7);
};
MochiKit.Widget.Pane=function(_9aa){
var o=MochiKit.DOM.DIV();
MochiKit.Widget._widgetMixin(o,arguments.callee);
o.addClass("widgetPane");
o.setAttrs(MochiKit.Base.update({pageTitle:"Page",pageStatus:"ANY",pageCloseable:false},_9aa));
o.addAll(MochiKit.Base.extend(null,arguments,1));
return o;
};
MochiKit.Widget.Pane.ANY={previous:true,next:true};
MochiKit.Widget.Pane.FORWARD={previous:false,next:true};
MochiKit.Widget.Pane.BACKWARD={previous:true,next:false};
MochiKit.Widget.Pane.WORKING={previous:false,next:false};
MochiKit.Widget.Pane.prototype.setAttrs=function(_9ac){
_9ac=MochiKit.Base.update({},_9ac);
var _9ad=MochiKit.Base.mask(_9ac,["pageTitle","pageStatus","pageCloseable"]);
var _9ae=false;
if(typeof (_9ad.pageTitle)!="undefined"){
this.pageTitle=_9ad.pageTitle;
_9ae=true;
}
if(typeof (_9ad.pageStatus)!="undefined"){
if(typeof (_9ad.pageStatus)=="string"){
_9ad.pageStatus=MochiKit.Widget.Pane[_9ad.pageStatus];
}
this.pageStatus=_9ad.pageStatus;
_9ae=true;
}
if(typeof (_9ad.pageCloseable)!="undefined"){
this.pageCloseable=MochiKit.Base.bool(_9ad.pageCloseable);
_9ae=true;
}
if(_9ae&&this.parentNode&&typeof (this.parentNode._updateStatus)=="function"){
this.parentNode._updateStatus();
}
MochiKit.DOM.updateNodeAttributes(this,_9ac);
};
MochiKit.Widget.Pane.prototype._handleEnter=function(opts){
opts=MochiKit.Base.update({show:true,validateReset:false},opts);
if(MochiKit.Base.bool(opts.validateReset)){
var _9b0=this.getElementsByTagName("FORM");
for(var i=0;i<_9b0.length;i++){
if(typeof (_9b0[i].validateReset)=="function"){
_9b0[i].validateReset();
}
}
}
if(MochiKit.Base.bool(opts.show)){
this.show();
MochiKit.Style.resizeElements(this);
}
MochiKit.Widget.emitSignal(this,"onenter");
};
MochiKit.Widget.Pane.prototype._handleExit=function(opts){
opts=MochiKit.Base.update({hide:true,validate:false},opts);
if(MochiKit.Base.bool(opts.validate)){
var _9b3=this.getElementsByTagName("FORM");
for(var i=0;i<_9b3.length;i++){
if(typeof (_9b3[i].validate)=="function"){
var res=_9b3[i].validate();
if(!res){
return false;
}
}
}
}
this.blurAll();
if(MochiKit.Base.bool(opts.hide)){
this.hide();
}
MochiKit.Widget.emitSignal(this,"onexit");
return true;
};
MochiKit.Widget.Popup=function(_9b6){
var o=MochiKit.DOM.DIV();
MochiKit.Widget._widgetMixin(o,arguments.callee);
o.addClass("widgetPopup","widgetHidden");
o.selectedIndex=-1;
o._delayTimer=null;
o.setAttrs(MochiKit.Base.update({delay:5000},_9b6));
o.addAll(MochiKit.Base.extend(null,arguments,1));
MochiKit.Signal.connect(o,"onmousemove",o,"_handleMouseMove");
MochiKit.Signal.connect(o,"onclick",o,"_handleMouseClick");
return o;
};
MochiKit.Widget.Popup.prototype.setAttrs=function(_9b8){
_9b8=MochiKit.Base.update({},_9b8);
var _9b9=MochiKit.Base.mask(_9b8,["delay","showAnim","hideAnim"]);
if(typeof (_9b9.delay)!="undefined"){
this.delay=parseInt(_9b9.delay);
this.resetDelay();
}
if(typeof (_9b9.showAnim)!="undefined"){
this.showAnim=_9b9.showAnim;
}
if(typeof (_9b9.hideAnim)!="undefined"){
this.hideAnim=_9b9.hideAnim;
}
MochiKit.DOM.updateNodeAttributes(this,_9b8);
};
MochiKit.Widget.Popup.prototype.show=function(){
if(this.isHidden()){
this.selectChild(-1);
this.removeClass("widgetHidden");
this.resetDelay();
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
MochiKit.Widget.Popup.prototype.selectChild=function(_9ba){
var node=this.selectedChild();
if(node!=null){
MochiKit.DOM.removeElementClass(node,"widgetPopupSelected");
}
var node=MochiKit.DOM.childNode(this,_9ba);
if(typeof (_9ba)=="number"){
var _9bc=_9ba;
}else{
var _9bc=MochiKit.Base.findIdentical(this.childNodes,node);
}
if(_9bc>=0&&node!=null){
this.selectedIndex=_9bc;
MochiKit.DOM.addElementClass(node,"widgetPopupSelected");
var box={y:node.offsetTop,h:node.offsetHeight+5};
MochiKit.Style.adjustScrollOffset(this,box);
}else{
this.selectedIndex=-1;
}
return this.selectedIndex;
};
MochiKit.Widget.Popup.prototype.selectMove=function(_9be){
var _9bf=this.selectedIndex+_9be;
if(_9bf>=this.childNodes.length){
_9bf=0;
}
if(_9bf<0){
_9bf=this.childNodes.length-1;
}
return this.selectChild(_9bf);
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
MochiKit.Widget.ProgressBar=function(_9c4){
var _9c5=MochiKit.DOM.DIV({"class":"widgetProgressBarMeter"});
var text=MochiKit.DOM.DIV({"class":"widgetProgressBarText"});
var o=MochiKit.DOM.DIV({},_9c5,text);
MochiKit.Widget._widgetMixin(o,arguments.callee);
o.addClass("widgetProgressBar");
o.setAttrs(MochiKit.Base.update({min:0,max:100},_9c4));
o.setValue(0);
return o;
};
MochiKit.Widget.ProgressBar.prototype.setAttrs=function(_9c8){
_9c8=MochiKit.Base.update({},_9c8);
var _9c9=MochiKit.Base.mask(_9c8,["min","max"]);
if(typeof (_9c9.min)!="undefined"||typeof (_9c9.max)!="undefined"){
this.minValue=parseInt(_9c9.min)||0;
this.maxValue=parseInt(_9c9.max)||100;
this.startTime=new Date().getTime();
this.lastTime=this.startTime;
this.timeLeft=null;
}
MochiKit.DOM.updateNodeAttributes(this,_9c8);
};
MochiKit.Widget.ProgressBar.prototype.setValue=function(_9ca,text){
_9ca=Math.min(Math.max(_9ca,this.minValue),this.maxValue);
var pos=_9ca-this.minValue;
var _9cd=this.maxValue-this.minValue;
var str=pos+" of "+_9cd;
if(typeof (text)=="string"&&text!=""){
str+=" \u2014 "+text;
}
this.setRatio(pos/_9cd,str);
};
MochiKit.Widget.ProgressBar.prototype.setRatio=function(_9cf,text){
var _9d1=Math.round(_9cf*1000)/10;
MochiKit.Style.setElementDimensions(this.firstChild,{w:_9d1},"%");
if(_9d1<100){
this.firstChild.className="widgetProgressBarMeter animated";
}else{
this.firstChild.className="widgetProgressBarMeter";
}
if(typeof (text)=="string"&&text!=""){
text=Math.round(_9d1)+"% \u2014 "+text;
}else{
text=Math.round(_9d1)+"%";
}
var _9d2=new Date().getTime();
if(_9d2-this.lastTime>1000){
this.lastTime=_9d2;
var _9d3=_9d2-this.startTime;
_9d3=Math.max(Math.round(_9d3/_9cf-_9d3),0);
this.timeLeft=MochiKit.DateTime.toApproxPeriod(_9d3);
}
if(this.timeLeft!=null&&_9d1>0&&_9d1<100){
text+=" \u2014 "+this.timeLeft+" left";
}
this.setText(text);
};
MochiKit.Widget.ProgressBar.prototype.setText=function(text){
MochiKit.DOM.replaceChildNodes(this.lastChild,text);
};
MochiKit.Widget.TabContainer=function(_9d5){
var _9d6=MochiKit.DOM.DIV({"class":"widgetTabContainerLabels"});
var _9d7=MochiKit.DOM.DIV({"class":"widgetTabContainerContent"});
var o=MochiKit.DOM.DIV(_9d5,_9d6,_9d7);
MochiKit.Widget._widgetMixin(o,arguments.callee);
o.addClass("widgetTabContainer");
MochiKit.Style.registerSizeConstraints(_9d7,"100% - 22","100% - 47");
_9d7.resizeContent=MochiKit.Base.noop;
o._selectedIndex=-1;
o.addAll(MochiKit.Base.extend(null,arguments,1));
return o;
};
MochiKit.Widget.TabContainer.prototype.getChildNodes=function(){
return MochiKit.Base.extend([],this.lastChild.childNodes);
};
MochiKit.Widget.TabContainer.prototype.addChildNode=function(_9d9){
if(!MochiKit.Widget.isWidget(_9d9,"Pane")){
_9d9=new MochiKit.Widget.Pane(null,_9d9);
}
MochiKit.Style.registerSizeConstraints(_9d9,"100%","100%");
_9d9.hide();
var text=MochiKit.DOM.SPAN(null,_9d9.pageTitle);
if(_9d9.pageCloseable){
var icon=new MochiKit.Widget.Icon({ref:"CLOSE"});
icon.onclick=MochiKit.Widget._eventHandler("TabContainer","_handleClose",_9d9);
}
var _9dc=MochiKit.DOM.DIV({"class":"widgetTabContainerLabel"},MochiKit.DOM.DIV({},text,icon));
_9dc.onclick=MochiKit.Widget._eventHandler("TabContainer","selectChild",_9d9);
this.firstChild.appendChild(_9dc);
this.lastChild.appendChild(_9d9);
if(this._selectedIndex<0){
this.selectChild(0);
}
};
MochiKit.Widget.TabContainer.prototype.removeChildNode=function(_9dd){
var _9de=this.getChildNodes();
var _9df=MochiKit.Base.findIdentical(_9de,_9dd);
if(_9df<0){
throw new Error("Cannot remove DOM node that is not a TabContainer child");
}
if(this._selectedIndex==_9df){
_9dd._handleExit();
this._selectedIndex=-1;
}
MochiKit.Widget.destroyWidget(this.firstChild.childNodes[_9df]);
MochiKit.DOM.removeElement(_9dd);
MochiKit.Widget.emitSignal(_9dd,"onclose");
if(this._selectedIndex>_9df){
this._selectedIndex--;
}
if(this._selectedIndex<0&&this.getChildNodes().length>0){
this.selectChild((_9df==0)?0:_9df-1);
}
};
MochiKit.Widget.TabContainer.prototype.selectedIndex=function(){
return this._selectedIndex;
};
MochiKit.Widget.TabContainer.prototype.selectedChild=function(){
var _9e0=this.getChildNodes();
return (this._selectedIndex<0)?null:_9e0[this._selectedIndex];
};
MochiKit.Widget.TabContainer.prototype.selectChild=function(_9e1){
var _9e2=this.getChildNodes();
if(this._selectedIndex>=0){
var _9e3=this.firstChild.childNodes[this._selectedIndex];
MochiKit.DOM.removeElementClass(_9e3,"selected");
_9e2[this._selectedIndex]._handleExit();
}
var _9e4=-1;
if(_9e1==null){
_9e4=this._selectedIndex;
}else{
if(typeof (_9e1)=="number"){
_9e4=_9e1;
}else{
_9e4=MochiKit.Base.findIdentical(_9e2,_9e1);
}
}
this._selectedIndex=(_9e4<0||_9e4>=_9e2.length)?-1:_9e4;
if(this._selectedIndex>=0){
var _9e3=this.firstChild.childNodes[this._selectedIndex];
MochiKit.DOM.addElementClass(_9e3,"selected");
_9e2[this._selectedIndex]._handleEnter();
}
};
MochiKit.Widget.TabContainer.prototype.resizeContent=function(){
MochiKit.Style.resizeElements(this.lastChild);
var _9e5=this.selectedChild();
if(_9e5!=null){
MochiKit.Style.resizeElements(_9e5);
}
};
MochiKit.Widget.TabContainer.prototype._handleClose=function(_9e6,evt){
evt.stop();
this.removeChildNode(_9e6);
};
MochiKit.Widget.Table=function(_9e8){
var _9e9=MochiKit.DOM.THEAD({},MochiKit.DOM.TR());
var _9ea=MochiKit.DOM.TBODY();
_9ea.resizeContent=MochiKit.Base.noop;
var _9eb=MochiKit.DOM.TABLE({"class":"widgetTable"},_9e9,_9ea);
var o=MochiKit.DOM.DIV({},_9eb);
MochiKit.Widget._widgetMixin(o,arguments.callee);
o.addClass("widgetTable");
o._rows=[];
o._data=null;
o._keyField=null;
o._selected=[];
o.setAttrs(MochiKit.Base.update({select:"one"},_9e8));
o.addAll(MochiKit.Base.extend(null,arguments,1));
_9ea.onmousedown=MochiKit.Widget._eventHandler("Table","_handleSelect");
return o;
};
MochiKit.Widget.Table.prototype.setAttrs=function(_9ed){
_9ed=MochiKit.Base.update({},_9ed);
var _9ee=MochiKit.Base.mask(_9ed,["select","key"]);
if(typeof (_9ee.select)!="undefined"){
this.select=_9ee.select;
}
if(typeof (_9ee.key)!="undefined"){
this.setIdKey(_9ee.key);
}
MochiKit.DOM.updateNodeAttributes(this,_9ed);
};
MochiKit.Widget.Table.prototype.getChildNodes=function(){
var _9ef=this.firstChild;
var _9f0=_9ef.firstChild;
var tr=_9f0.firstChild;
return MochiKit.Base.extend([],tr.childNodes);
};
MochiKit.Widget.Table.prototype.addChildNode=function(_9f2){
if(!MochiKit.Widget.isWidget(_9f2,"TableColumn")){
throw new Error("Table widget can only have TableColumn children");
}
this.clear();
var _9f3=this.firstChild;
var _9f4=_9f3.firstChild;
var tr=_9f4.firstChild;
tr.appendChild(_9f2);
};
MochiKit.Widget.Table.prototype.removeChildNode=function(_9f6){
this.clear();
var _9f7=this.firstChild;
var _9f8=_9f7.firstChild;
var tr=_9f8.firstChild;
tr.removeChild(_9f6);
};
MochiKit.Widget.Table.prototype.getColumnIndex=function(_9fa){
var cols=this.getChildNodes();
for(var i=0;i<cols.length;i++){
if(cols[i].field===_9fa){
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
for(var i=0;this._rows!=null&&i<this._rows.length;i++){
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
var _a06=this.firstChild;
var _a07=_a06.lastChild;
return _a07.childNodes[row].childNodes[col];
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
var _a0a=this.getSelectedIds();
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
this._addSelectedIds(_a0a);
}
};
MochiKit.Widget.Table.prototype.sortData=function(_a0f,_a10){
var cols=this.getChildNodes();
var _a12=this.getSelectedIds();
this._selected=[];
for(var i=0;i<cols.length;i++){
if(cols[i].field===_a0f){
if(cols[i].sort=="none"){
return;
}else{
if(_a10==null){
_a10=cols[i].sort||"asc";
}
}
cols[i].setAttrs({sort:_a10});
}else{
if(cols[i].sort!="none"){
cols[i].setAttrs({sort:null});
}
}
}
this._rows.sort(MochiKit.Base.keyComparator(_a0f));
if(_a10=="desc"){
this._rows.reverse();
}
this._renderRows();
this._addSelectedIds(_a12);
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
var _a19=this.firstChild.lastChild;
MochiKit.DOM.replaceChildNodes(_a19);
for(var i=0;i<this._rows.length;i++){
var tr=MochiKit.DOM.TR();
if(i%2==1){
MochiKit.DOM.addElementClass(tr,"widgetTableAlt");
}
for(var j=0;j<cols.length;j++){
tr.appendChild(cols[j]._render(this._rows[i]));
}
tr.rowNo=i;
_a19.appendChild(tr);
}
if(this._rows.length==0){
_a19.appendChild(MochiKit.DOM.TR());
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
if(this.select==="multiple"){
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
MochiKit.Widget.Table.prototype.setSelectedIds=function(){
var args=MochiKit.Base.flattenArguments(arguments);
var ids=MochiKit.Base.dict(args,true);
var _a23=MochiKit.Base.dict(this.getSelectedIds(),true);
var res=[];
for(var i=0;i<this._rows.length;i++){
var _a26=this._rows[i].$id;
if(ids[_a26]&&!_a23[_a26]){
this._selected.push(i);
this._markSelection(i);
res.push(_a26);
}else{
if(!ids[_a26]&&_a23[_a26]){
var pos=MochiKit.Base.findIdentical(this._selected,i);
if(pos>=0){
this._selected.splice(pos,1);
this._unmarkSelection(i);
res.push(_a26);
}
}
}
}
if(res.length>0){
MochiKit.Widget.emitSignal(this,"onselect");
}
return res;
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
this._selected.splice(pos,1);
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
if(this.select==="multiple"){
if(evt.modifier().ctrl||evt.modifier().meta){
var pos=MochiKit.Base.findIdentical(this._selected,row);
if(pos>=0){
this._unmarkSelection(row);
this._selected.splice(pos,1);
}else{
this._selected.push(row);
this._markSelection(row);
}
}else{
if(evt.modifier().shift){
var _a36=row;
if(this._selected.length>0){
_a36=this._selected[0];
}
this._unmarkSelection();
this._selected=[];
if(row>=_a36){
for(var i=_a36;i<=row;i++){
this._selected.push(i);
}
}else{
for(var i=_a36;i>=row;i--){
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
if(this.select!=="none"){
this._unmarkSelection();
this._selected=[row];
this._markSelection(row);
}
}
evt.stop();
MochiKit.Widget.emitSignal(this,"onselect");
return false;
};
MochiKit.Widget.Table.prototype._markSelection=function(_a38){
if(_a38==null){
for(var i=0;i<this._selected.length;i++){
this._markSelection(this._selected[i]);
}
}else{
var _a3a=this.firstChild.lastChild;
var tr=_a3a.childNodes[_a38];
MochiKit.DOM.addElementClass(tr,"selected");
}
};
MochiKit.Widget.Table.prototype._unmarkSelection=function(_a3c){
if(_a3c==null){
for(var i=0;i<this._selected.length;i++){
this._unmarkSelection(this._selected[i]);
}
}else{
var _a3e=this.firstChild.lastChild;
var tr=_a3e.childNodes[_a3c];
MochiKit.DOM.removeElementClass(tr,"selected");
}
};
MochiKit.Widget.TableColumn=function(_a40){
if(_a40.field==null){
throw new Error("The 'field' attribute cannot be null for a TableColumn");
}
var o=MochiKit.DOM.TH();
MochiKit.Widget._widgetMixin(o,arguments.callee);
o.addClass("widgetTableColumn");
o.setAttrs(MochiKit.Base.update({title:_a40.field,type:"string",key:false},_a40));
o.onclick=MochiKit.Widget._eventHandler(null,"_handleClick");
return o;
};
MochiKit.Widget.TableColumn.prototype.setAttrs=function(_a42){
_a42=MochiKit.Base.update({},_a42);
var _a43=MochiKit.Base.mask(_a42,["title","field","type","sort","maxLength","key","tooltip","renderer"]);
if(typeof (_a43.title)!=="undefined"){
MochiKit.DOM.replaceChildNodes(this,_a43.title);
}
if(typeof (_a43.field)!=="undefined"){
this.field=_a43.field;
}
if(typeof (_a43.type)!=="undefined"){
this.type=_a43.type;
}
if(typeof (_a43.sort)!=="undefined"){
this.sort=_a43.sort;
if(_a43.sort==null||_a43.sort=="none"){
MochiKit.DOM.removeElementClass(this,"sortAsc");
MochiKit.DOM.removeElementClass(this,"sortDesc");
}else{
if(_a43.sort=="desc"){
MochiKit.DOM.removeElementClass(this,"sortAsc");
MochiKit.DOM.addElementClass(this,"sortDesc");
}else{
MochiKit.DOM.removeElementClass(this,"sortDesc");
MochiKit.DOM.addElementClass(this,"sortAsc");
}
}
}
if(typeof (_a43.maxLength)!=="undefined"){
this.maxLength=parseInt(_a43.maxLength);
}
if(typeof (_a43.key)!=="undefined"){
this.key=MochiKit.Base.bool(_a43.key);
}
if(typeof (_a43.tooltip)!=="undefined"){
this.title=_a43.tooltip;
}
if(typeof (_a43.renderer)==="function"){
this.renderer=_a43.renderer;
}
MochiKit.DOM.updateNodeAttributes(this,_a42);
};
MochiKit.Widget.TableColumn.prototype._map=function(src,dst){
var _a46=src[this.field];
if(_a46!=null){
if(this.key){
dst.$id=_a46;
}
switch(this.type){
case "number":
if(_a46 instanceof Number){
_a46=_a46.valueOf();
}else{
if(typeof (_a46)!="number"){
_a46=parseFloat(_a46);
}
}
break;
case "date":
if(_a46 instanceof Date){
_a46=MochiKit.DateTime.toISODate(_a46);
}else{
_a46=MochiKit.Text.truncate(_a46,10);
}
break;
case "datetime":
if(_a46 instanceof Date){
_a46=MochiKit.DateTime.toISOTimestamp(_a46);
}else{
_a46=MochiKit.Text.truncate(_a46,19);
}
break;
case "time":
if(_a46 instanceof Date){
_a46=MochiKit.DateTime.toISOTime(_a46);
}else{
if(typeof (_a46)!=="string"){
_a46=_a46.toString();
}
if(_a46.length>8){
_a46=_a46.substring(_a46.length-8);
}
}
break;
case "boolean":
if(typeof (_a46)!=="boolean"){
_a46=MochiKit.Base.bool(_a46);
}
break;
case "string":
if(typeof (_a46)!=="string"){
_a46=_a46.toString();
}
break;
}
}
dst[this.field]=_a46;
};
MochiKit.Widget.TableColumn.prototype._render=function(obj){
var td=MochiKit.DOM.TD();
var _a49=obj[this.field];
if(typeof (this.renderer)==="function"){
this.renderer(td,_a49);
}else{
if(_a49==null||(typeof (_a49)=="number"&&isNaN(_a49))){
_a49="";
}else{
if(typeof (_a49)!="string"){
_a49=_a49.toString();
}
}
if(this.maxLength&&this.maxLength<_a49.length){
td.title=_a49;
_a49=MochiKit.Text.truncate(_a49,this.maxLength,"...");
}
td.appendChild(MochiKit.DOM.createTextNode(_a49));
}
return td;
};
MochiKit.Widget.TableColumn.prototype._handleClick=function(){
if(this.parentNode!=null){
var dir=(this.sort=="asc")?"desc":"asc";
var tr=this.parentNode;
var _a4c=tr.parentNode;
var _a4d=_a4c.parentNode;
_a4d.parentNode.sortData(this.field,dir);
}
};
MochiKit.Widget.TextArea=function(_a4e){
var text="";
if(_a4e!=null&&_a4e.value!=null){
text=_a4e.value;
}
for(var i=1;i<arguments.length;i++){
var o=arguments[i];
if(MochiKit.DOM.isDOM(o)){
text+=MochiKit.DOM.scrapeText(o);
}else{
if(o!=null){
text+=o.toString();
}
}
}
var o=MochiKit.DOM.TEXTAREA({value:text});
MochiKit.Widget._widgetMixin(o,arguments.callee);
o.addClass("widgetTextArea");
o.focused=false;
o.setAttrs(MochiKit.Base.update({helpText:"",value:text},_a4e));
var _a52=MochiKit.Widget._eventHandler(null,"_handleFocus");
o.onfocus=_a52;
o.onblur=_a52;
return o;
};
MochiKit.Widget.TextArea.prototype.setAttrs=function(_a53){
_a53=MochiKit.Base.update({},_a53);
var _a54=MochiKit.Base.mask(_a53,["helpText","value"]);
if(typeof (_a54.helpText)!="undefined"){
this.helpText=_a54.helpText;
}
if(typeof (_a54.value)!="undefined"){
this.value=this.storedValue=_a54.value;
}
MochiKit.DOM.updateNodeAttributes(this,_a53);
this._render();
};
MochiKit.Widget.TextArea.prototype.reset=function(){
this.setAttrs({value:this.defaultValue});
};
MochiKit.Widget.TextArea.prototype.getValue=function(){
var str=(this.focused)?this.value:this.storedValue;
if(/\r\n\n/.test(str)){
str=str.replace(/\r\n\n/g,"\n");
}else{
if(/\n\n/.test(str)&&!/.\n./.test(str)){
str=str.replace(/\n\n/g,"\n");
}
}
if(this.focused&&this.value!=str){
this.value=str;
}
return str;
};
MochiKit.Widget.TextArea.prototype._handleFocus=function(evt){
var str=this.getValue();
if(evt.type()=="focus"){
this.focused=true;
this.value=str;
}else{
if(evt.type()=="blur"){
this.focused=false;
this.storedValue=str;
}
}
this._render();
};
MochiKit.Widget.TextArea.prototype._render=function(){
var _a58=MochiKit.Format.strip;
var str=this.getValue();
if(!this.focused&&_a58(str)==""&&_a58(this.helpText)!=""){
this.value=this.helpText;
this.addClass("widgetTextAreaHelp");
}else{
this.value=str;
this.removeClass("widgetTextAreaHelp");
}
};
MochiKit.Widget.TextField=function(_a5a){
var text="";
if(_a5a!=null&&_a5a.value!=null){
text=_a5a.value;
}
for(var i=1;i<arguments.length;i++){
var o=arguments[i];
if(MochiKit.DOM.isDOM(o)){
text+=MochiKit.DOM.scrapeText(o);
}else{
if(o!=null){
text+=o.toString();
}
}
}
var o=MochiKit.DOM.INPUT({value:text});
MochiKit.Widget._widgetMixin(o,arguments.callee);
o.addClass("widgetTextField");
o.focused=false;
o._popupCreated=false;
o.setAttrs(MochiKit.Base.update({helpText:"",value:text},_a5a));
var _a5e=MochiKit.Widget._eventHandler(null,"_handleFocus");
o.onfocus=_a5e;
o.onblur=_a5e;
return o;
};
MochiKit.Widget.TextField.prototype.setAttrs=function(_a5f){
_a5f=MochiKit.Base.update({},_a5f);
var _a60=MochiKit.Base.mask(_a5f,["helpText","value"]);
if(typeof (_a60.helpText)!="undefined"){
this.helpText=_a60.helpText;
}
if(typeof (_a60.value)!="undefined"){
this.value=this.storedValue=_a60.value;
}
this._render();
MochiKit.DOM.updateNodeAttributes(this,_a5f);
};
MochiKit.Widget.TextField.prototype.reset=function(){
this.setAttrs({value:this.defaultValue});
};
MochiKit.Widget.TextField.prototype.getValue=function(){
return (this.focused)?this.value:this.storedValue;
};
MochiKit.Widget.TextField.prototype.popup=function(_a61){
if(!this._popupCreated&&_a61){
this.autocomplete="off";
this._popupCreated=true;
var _a62={"max-height":"300px","width":"300px"};
var _a63=new MochiKit.Widget.Popup({style:_a62});
MochiKit.DOM.insertSiblingNodesAfter(this,_a63);
MochiKit.Style.makePositioned(this.parentNode);
var pos={x:this.offsetLeft+1,y:this.offsetTop+this.offsetHeight+1};
MochiKit.Style.setElementPosition(_a63,pos);
MochiKit.Signal.connect(this,"onkeydown",this,"_handleKeyDown");
MochiKit.Signal.connect(_a63,"onclick",this,"_handleClick");
}
return (this._popupCreated)?this.nextSibling:null;
};
MochiKit.Widget.TextField.prototype.showPopup=function(_a65,_a66){
var _a67=this.popup(true);
if(_a66){
_a67.hide();
MochiKit.DOM.replaceChildNodes(_a67);
for(var i=0;i<_a66.length;i++){
if(typeof (_a66[i])=="string"){
var node=MochiKit.DOM.DIV({"class":"widgetPopupItem"},"\xbb "+_a66[i]);
_a67.appendChild(node);
}else{
MochiKit.DOM.appendChildNodes(_a67,_a66[i]);
}
}
}
if(_a67.childNodes.length>0){
_a67.setAttrs(MochiKit.Base.update({delay:30000},_a65));
_a67.show();
}
};
MochiKit.Widget.TextField.prototype._handleFocus=function(evt){
if(evt.type()=="focus"){
this.focused=true;
this.value=this.storedValue;
}else{
if(evt.type()=="blur"){
this.focused=false;
this.storedValue=this.value;
var _a6b=this.popup();
if(_a6b!=null&&!_a6b.isHidden()){
_a6b.setAttrs({delay:250});
}
}
}
this._render();
};
MochiKit.Widget.TextField.prototype._handleKeyDown=function(evt){
var _a6d=this.popup(false);
if(_a6d!=null){
_a6d.resetDelay();
if(_a6d.isHidden()){
switch(evt.key().string){
case "KEY_ESCAPE":
evt.stop();
break;
case "KEY_ARROW_UP":
case "KEY_ARROW_DOWN":
this.showPopup();
_a6d.selectChild(0);
evt.stop();
break;
}
}else{
switch(evt.key().string){
case "KEY_TAB":
case "KEY_ENTER":
_a6d.hide();
evt.stop();
if(_a6d.selectedChild()!=null){
MochiKit.Widget.emitSignal(this,"onpopupselect");
}
break;
case "KEY_ESCAPE":
_a6d.hide();
evt.stop();
break;
case "KEY_ARROW_UP":
case "KEY_ARROW_DOWN":
_a6d.selectMove(evt.key().string=="KEY_ARROW_UP"?-1:1);
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
MochiKit.Widget.TextField.prototype._render=function(){
var _a6f=MochiKit.Format.strip;
var str=this.getValue();
if(!this.focused&&_a6f(str)==""&&_a6f(this.helpText)!=""){
this.value=this.helpText;
this.addClass("widgetTextFieldHelp");
}else{
this.value=str;
this.removeClass("widgetTextFieldHelp");
}
};
MochiKit.Widget.Tree=function(_a71){
var o=MochiKit.DOM.DIV(_a71);
MochiKit.Widget._widgetMixin(o,arguments.callee);
o.addClass("widgetTree");
o.resizeContent=MochiKit.Base.noop;
o.selectedPath=null;
o.addAll(MochiKit.Base.extend(null,arguments,1));
return o;
};
MochiKit.Widget.Tree.prototype.addChildNode=function(_a73){
if(!MochiKit.Widget.isWidget(_a73,"TreeNode")){
throw new Error("Tree widget can only have TreeNode children");
}
this.appendChild(_a73);
};
MochiKit.Widget.Tree.prototype.removeAllMarked=function(){
var _a74=this.getChildNodes();
for(var i=0;i<_a74.length;i++){
if(_a74[i].marked===true){
this.removeChildNode(_a74[i]);
}else{
_a74[i].removeAllMarked();
}
}
};
MochiKit.Widget.Tree.prototype.markAll=function(){
var _a76=this.getChildNodes();
for(var i=0;i<_a76.length;i++){
_a76[i].markAll();
}
};
MochiKit.Widget.Tree.prototype.findRoot=function(name){
var _a79=this.getChildNodes();
for(var i=0;i<_a79.length;i++){
if(_a79[i].name==name){
return _a79[i];
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
MochiKit.Widget.Tree.prototype.expandAll=function(_a80){
if(typeof (_a80)!=="number"){
_a80=10;
}
var _a81=this.getChildNodes();
for(var i=0;_a80>0&&i<_a81.length;i++){
_a81[i].expandAll(_a80-1);
}
};
MochiKit.Widget.Tree.prototype.collapseAll=function(_a83){
if(typeof (_a83)!=="number"){
_a83=0;
}
var _a84=this.getChildNodes();
for(var i=0;i<_a84.length;i++){
_a84[i].collapseAll(_a83-1);
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
node.marked=false;
for(var i=1;i<path.length;i++){
var _a89=node.findChild(path[i]);
if(_a89==null){
_a89=new MochiKit.Widget.TreeNode({name:path[i]});
node.addChildNode(_a89);
}
_a89.marked=false;
node=_a89;
}
return node;
};
MochiKit.Widget.TreeNode=function(_a8a){
var icon=MochiKit.Widget.Icon({ref:"BLANK"});
var _a8c=MochiKit.DOM.SPAN({"class":"widgetTreeNodeText"});
var div=MochiKit.DOM.DIV({"class":"widgetTreeNodeLabel"},icon,_a8c);
var o=MochiKit.DOM.DIV({},div);
MochiKit.Widget._widgetMixin(o,arguments.callee);
o.addClass("widgetTreeNode");
_a8a=MochiKit.Base.update({name:"Tree Node",folder:false},_a8a);
if(typeof (_a8a.icon)=="undefined"){
_a8a.icon=_a8a.folder?"FOLDER":"DOCUMENT";
}
o.setAttrs(_a8a);
o.addAll(MochiKit.Base.extend(null,arguments,1));
icon.onclick=MochiKit.Widget._eventHandler("TreeNode","toggle");
div.onclick=MochiKit.Widget._eventHandler("TreeNode","select");
return o;
};
MochiKit.Widget.TreeNode.prototype._container=function(_a8f){
var _a90=this.lastChild;
if(MochiKit.DOM.hasElementClass(_a90,"widgetTreeNodeContainer")){
return _a90;
}else{
if(_a8f){
_a90=MochiKit.DOM.DIV({"class":"widgetTreeNodeContainer widgetHidden"});
this.appendChild(_a90);
var _a91=this.firstChild.firstChild;
_a91.setAttrs({ref:"PLUS"});
this.setAttrs({icon:"FOLDER"});
return _a90;
}else{
return null;
}
}
};
MochiKit.Widget.TreeNode.prototype.setAttrs=function(_a92){
_a92=MochiKit.Base.update({},_a92);
this.marked=false;
var _a93=MochiKit.Base.mask(_a92,["name","folder","icon","tooltip"]);
if(typeof (_a93.name)!="undefined"){
this.name=_a93.name;
var node=this.firstChild.firstChild;
while(!MochiKit.DOM.hasElementClass(node,"widgetTreeNodeText")){
node=node.nextSibling;
}
MochiKit.DOM.replaceChildNodes(node,_a93.name);
}
if(MochiKit.Base.bool(_a93.folder)){
this._container(true);
}
if(typeof (_a93.icon)!="undefined"){
var _a95=this.firstChild.firstChild;
var _a96=_a95.nextSibling;
if(!MochiKit.Widget.isWidget(_a96,"Icon")){
_a96=null;
}
if(_a96==null&&_a93.icon!=null){
if(typeof (_a93.icon)==="string"){
_a93.icon=new MochiKit.Widget.Icon({ref:_a93.icon});
}else{
if(!MochiKit.Widget.isWidget(_a93.icon,"Icon")){
_a93.icon=new MochiKit.Widget.Icon(_a93.icon);
}
}
MochiKit.DOM.insertSiblingNodesAfter(_a95,_a93.icon);
}else{
if(_a96!=null&&_a93.icon!=null){
if(MochiKit.Widget.isWidget(_a93.icon,"Icon")){
MochiKit.DOM.swapDOM(_a96,_a93.icon);
}else{
if(typeof (_a93.icon)==="string"){
_a96.setAttrs({ref:_a93.icon});
}else{
_a96.setAttrs(_a93.icon);
}
}
}else{
if(_a96!=null&&_a93.icon==null){
MochiKit.Widget.destroyWidget(_a96);
}
}
}
}
if(typeof (_a93.tooltip)!="undefined"){
this.firstChild.title=_a93.tooltip;
}
MochiKit.DOM.updateNodeAttributes(this,_a92);
};
MochiKit.Widget.TreeNode.prototype.getChildNodes=function(){
var _a97=this._container();
if(_a97==null){
return [];
}else{
return MochiKit.Base.extend([],_a97.childNodes);
}
};
MochiKit.Widget.TreeNode.prototype.addChildNode=function(_a98){
if(!MochiKit.Widget.isWidget(_a98,"TreeNode")){
throw new Error("TreeNode widget can only have TreeNode children");
}
this._container(true).appendChild(_a98);
};
MochiKit.Widget.TreeNode.prototype.removeChildNode=function(_a99){
var _a9a=this._container();
if(_a9a!=null){
_a9a.removeChild(_a99);
}
};
MochiKit.Widget.TreeNode.prototype.removeAllMarked=function(){
var _a9b=this.getChildNodes();
for(var i=0;i<_a9b.length;i++){
if(_a9b[i].marked===true){
this.removeChildNode(_a9b[i]);
}else{
_a9b[i].removeAllMarked();
}
}
};
MochiKit.Widget.TreeNode.prototype.markAll=function(){
this.marked=true;
var _a9d=this.getChildNodes();
for(var i=0;i<_a9d.length;i++){
_a9d[i].markAll();
}
};
MochiKit.Widget.TreeNode.prototype.isFolder=function(){
return this._container()!=null;
};
MochiKit.Widget.TreeNode.prototype.isExpanded=function(){
var _a9f=this._container();
return _a9f!=null&&!MochiKit.DOM.hasElementClass(_a9f,"widgetHidden");
};
MochiKit.Widget.TreeNode.prototype.isSelected=function(){
return MochiKit.DOM.hasElementClass(this.firstChild,"selected");
};
MochiKit.Widget.TreeNode.prototype.tree=function(){
var _aa0=this.parent();
if(_aa0!=null){
return _aa0.tree();
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
var _aa2=this.parent();
if(_aa2==null){
return [this.name];
}else{
var path=_aa2.path();
path.push(this.name);
return path;
}
};
MochiKit.Widget.TreeNode.prototype.findChild=function(name){
var _aa5=this.getChildNodes();
for(var i=0;i<_aa5.length;i++){
if(_aa5[i].name==name){
return _aa5[i];
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
var _aac=this.parent();
if(_aac!=null&&!_aac.isExpanded()){
_aac.expand();
}
var _aad=this._container();
if(_aad!=null&&!this.isExpanded()){
var _aae=this.firstChild.firstChild;
_aae.setAttrs({ref:"MINUS"});
MochiKit.DOM.removeElementClass(_aad,"widgetHidden");
var tree=this.tree();
if(tree!=null){
tree._emitExpand(this);
}
}
};
MochiKit.Widget.TreeNode.prototype.expandAll=function(_ab0){
if(typeof (_ab0)!=="number"){
_ab0=10;
}
this.expand();
var _ab1=this.getChildNodes();
for(var i=0;_ab0>0&&i<_ab1.length;i++){
_ab1[i].expandAll(_ab0-1);
}
};
MochiKit.Widget.TreeNode.prototype.collapse=function(){
var _ab3=this._container();
if(_ab3!=null&&this.isExpanded()){
var _ab4=this.firstChild.firstChild;
_ab4.setAttrs({ref:"PLUS"});
MochiKit.DOM.addElementClass(_ab3,"widgetHidden");
var tree=this.tree();
if(tree!=null){
tree._emitExpand(this);
}
}
};
MochiKit.Widget.TreeNode.prototype.collapseAll=function(_ab6){
if(typeof (_ab6)!=="number"){
_ab6=0;
}
if(_ab6<=0){
this.collapse();
}
var _ab7=this.getChildNodes();
for(var i=0;i<_ab7.length;i++){
_ab7[i].collapseAll(_ab6-1);
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
MochiKit.Widget.Wizard=function(_aba){
var o=MochiKit.DOM.DIV(_aba);
MochiKit.Widget._widgetMixin(o,arguments.callee);
o.addClass("widgetWizard");
o._selectedIndex=-1;
o.appendChild(MochiKit.DOM.H3({"class":"widgetWizardTitle"}));
var _abc=MochiKit.Widget.Button({style:{"margin-right":"10px"}},MochiKit.Widget.Icon({ref:"CANCEL"})," Cancel");
var _abd=MochiKit.Widget.Button({style:{"margin-right":"10px"}},MochiKit.Widget.Icon({ref:"PREVIOUS"})," Previous");
var _abe=MochiKit.Widget.Button({},"Next ",MochiKit.Widget.Icon({ref:"NEXT"}));
var _abf=MochiKit.Widget.Button({highlight:true},MochiKit.Widget.Icon({ref:"OK"})," Finish");
_abc.hide();
o.appendChild(MochiKit.DOM.DIV({"class":"widgetWizardButtons"},_abc,_abd,_abe,_abf));
MochiKit.Signal.connect(_abc,"onclick",o,"cancel");
MochiKit.Signal.connect(_abd,"onclick",o,"previous");
MochiKit.Signal.connect(_abe,"onclick",o,"next");
MochiKit.Signal.connect(_abf,"onclick",o,"done");
o._updateStatus();
o.addAll(MochiKit.Base.extend(null,arguments,1));
return o;
};
MochiKit.Widget.Wizard.prototype.getChildNodes=function(){
return MochiKit.Base.extend([],this.childNodes,2);
};
MochiKit.Widget.Wizard.prototype.addChildNode=function(_ac0){
if(!MochiKit.Widget.isWidget(_ac0,"Pane")){
_ac0=new MochiKit.Widget.Pane(null,_ac0);
}
MochiKit.Style.registerSizeConstraints(_ac0,"100%","100%-65");
_ac0.hide();
this.appendChild(_ac0);
_ac0.style.position="absolute";
MochiKit.Style.setElementPosition(_ac0,{x:0,y:24});
if(this.getChildNodes().length==1){
this.activatePage(0);
}else{
this._updateStatus();
}
};
MochiKit.Widget.Wizard.prototype._updateStatus=function(){
var h3=this.childNodes[0];
var _ac2=this.childNodes[1].childNodes[0];
var _ac3=this.childNodes[1].childNodes[1];
var _ac4=this.childNodes[1].childNodes[2];
var _ac5=this.childNodes[1].childNodes[3];
var page=this.activePage();
var _ac7=MochiKit.Widget.Pane.FORWARD;
var _ac8=null;
var info="(No pages available)";
var icon=null;
if(page!=null){
_ac7=page.pageStatus||MochiKit.Widget.Pane.ANY;
_ac8=page.pageTitle;
info=" (Step "+(this._selectedIndex+1)+" of "+this.getChildNodes().length+")";
}
if(_ac7===MochiKit.Widget.Pane.WORKING){
_ac2.show();
_ac3.hide();
icon={ref:"LOADING","class":"widgetWizardWait"};
icon=MochiKit.Widget.Icon(icon);
}else{
_ac2.hide();
_ac3.show();
}
if(this._selectedIndex>=this.getChildNodes().length-1){
_ac4.hide();
_ac5.show();
}else{
_ac4.show();
_ac5.hide();
}
_ac3.disabled=(this._selectedIndex<=0)||!_ac7.previous;
_ac4.disabled=!_ac7.next;
_ac5.disabled=!_ac7.next;
info=MochiKit.DOM.SPAN({"class":"widgetWizardInfo"},info);
MochiKit.DOM.replaceChildNodes(h3,icon,_ac8,info);
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
MochiKit.Widget.Wizard.prototype.activatePage=function(_acb){
if(typeof (_acb)=="number"){
var _acc=_acb;
var page=this.childNodes[_acc+2];
}else{
var page=_acb;
var _acc=MochiKit.Base.findIdentical(this.childNodes,page,2)-2;
}
if(_acc<0||_acc>=this.getChildNodes().length){
throw new RangeError("Page index out of bounds: "+_acc);
}
var _ace=this._selectedIndex;
var _acf=this.activePage();
if(_acf!=null&&_acf!==page){
if(!_acf._handleExit({hide:false,validate:this._selectedIndex<_acc})){
return;
}
}
this._selectedIndex=_acc;
this._updateStatus();
if(_acf!=null&&_acf!==page){
var dim=MochiKit.Style.getElementDimensions(this);
var _ad1=(_ace<_acc)?dim.w:-dim.w;
MochiKit.Style.setElementPosition(page,{x:_ad1});
page._handleEnter({validateReset:true});
var _ad2=function(){
_acf.hide();
MochiKit.Style.setElementPosition(_acf,{x:0});
};
var opts={duration:0.5,x:-_ad1,afterFinish:_ad2};
MochiKit.Visual.Move(_acf,opts);
MochiKit.Visual.Move(page,opts);
}else{
page._handleEnter({validateReset:true});
}
MochiKit.Widget.emitSignal(this,"onchange",_acc,page);
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
if(!page._handleExit({validate:true})){
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
MochiKit.Widget.Classes={Button:MochiKit.Widget.Button,Dialog:MochiKit.Widget.Dialog,Field:MochiKit.Widget.Field,FileStreamer:MochiKit.Widget.FileStreamer,Form:MochiKit.Widget.Form,FormValidator:MochiKit.Widget.FormValidator,Icon:MochiKit.Widget.Icon,Overlay:MochiKit.Widget.Overlay,Popup:MochiKit.Widget.Popup,Pane:MochiKit.Widget.Pane,ProgressBar:MochiKit.Widget.ProgressBar,TabContainer:MochiKit.Widget.TabContainer,Table:MochiKit.Widget.Table,TableColumn:MochiKit.Widget.TableColumn,TextArea:MochiKit.Widget.TextArea,TextField:MochiKit.Widget.TextField,Tree:MochiKit.Widget.Tree,TreeNode:MochiKit.Widget.TreeNode,Wizard:MochiKit.Widget.Wizard};

