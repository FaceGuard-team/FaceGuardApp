(function(){function n(n,t){var e,r=n.split("."),l=H;r[0]in l||!l.execScript||l.execScript("var "+r[0]);for(;r.length&&(e=r.shift());)r.length||void 0===t?l=l[e]?l[e]:l[e]={}:l[e]=t}function t(n,t){function e(){}e.prototype=t.prototype,n.M=t.prototype,n.prototype=new e,n.prototype.constructor=n,n.N=function(n,e,r){for(var l=Array(arguments.length-2),i=2;i<arguments.length;i++)l[i-2]=arguments[i];return t.prototype[e].apply(n,l)}}function e(n,t){null!=n&&this.a.apply(this,arguments)}function r(n){n.b=""}function l(n,t){return n>t?1:n<t?-1:0}function i(n,t){this.b=n,this.a={};for(var e=0;e<t.length;e++){var r=t[e];this.a[r.b]=r}}function a(n){return n=function(n){var t,e=[],r=0;for(t in n)e[r++]=n[t];return e}(n.a),function(n,t){n.sort(t||l)}(n,(function(n,t){return n.b-t.b})),n}function u(n,t){switch(this.b=n,this.g=!!t.v,this.a=t.c,this.i=t.type,this.h=!1,this.a){case T:case U:case Y:case k:case J:case q:case P:this.h=!0}this.f=t.defaultValue}function o(){this.a={},this.f=this.j().a,this.b=this.g=null}function s(n,t){for(var e=a(n.j()),r=0;r<e.length;r++){var l=(u=e[r]).b;if(null!=t.a[l]){n.b&&delete n.b[u.b];var i=11==u.a||10==u.a;if(u.g)for(var u=f(t,l)||[],o=0;o<u.length;o++){var p=n,c=l,h=i?u[o].clone():u[o];p.a[c]||(p.a[c]=[]),p.a[c].push(h),p.b&&delete p.b[c]}else u=f(t,l),i?(i=f(n,l))?s(i,u):g(n,l,u.clone()):g(n,l,u)}}}function f(n,t){var e=n.a[t];if(null==e)return null;if(n.g){if(!(t in n.b)){var r=n.g,l=n.f[t];if(null!=e)if(l.g){for(var i=[],a=0;a<e.length;a++)i[a]=r.b(l,e[a]);e=i}else e=r.b(l,e);return n.b[t]=e}return n.b[t]}return e}function p(n,t,e){var r=f(n,t);return n.f[t].g?r[e||0]:r}function c(n,t){var e;if(null!=n.a[t])e=p(n,t,void 0);else n:{if(void 0===(e=n.f[t]).f){var r=e.i;if(r===Boolean)e.f=!1;else if(r===Number)e.f=0;else{if(r!==String){e=new r;break n}e.f=e.h?"0":""}}e=e.f}return e}function h(n,t){return n.f[t].g?null!=n.a[t]?n.a[t].length:0:null!=n.a[t]?1:0}function g(n,t,e){n.a[t]=e,n.b&&(n.b[t]=e)}function m(n,t){var e,r=[];for(e in t)0!=e&&r.push(new u(e,t[e]));return new i(n,r)}function b(){o.call(this)}function y(){o.call(this)}function v(){o.call(this)}function _(){}function d(){}function S(){}function w(){this.a={}}function x(n){return 0==n.length||en.test(n)}function A(n,t){if(null==t)return null;t=t.toUpperCase();var e=n.a[t];if(null==e){if(null==(e=W[t]))return null;e=(new S).a(v.j(),e),n.a[t]=e}return e}function N(n){return null==(n=Q[n])?"ZZ":n[0]}function j(n){this.H=RegExp(" "),this.C="",this.m=new e,this.w="",this.i=new e,this.u=new e,this.l=!0,this.A=this.o=this.F=!1,this.G=w.b(),this.s=0,this.b=new e,this.B=!1,this.h="",this.a=new e,this.f=[],this.D=n,this.J=this.g=E(this,this.D)}function E(n,t){var e;if(null!=t&&isNaN(t)&&t.toUpperCase()in W){if(null==(e=A(n.G,t)))throw Error("Invalid region code: "+t);e=c(e,10)}else e=0;return null!=(e=A(n.G,N(e)))?e:rn}function B(n){for(var t=n.f.length,e=0;e<t;++e){var l,i=n.f[e],a=c(i,1);if(n.w==a)return!1;l=n;var u=c(s=i,1);if(-1!=u.indexOf("|"))l=!1;else{var o;u=(u=u.replace(ln,"\\d")).replace(an,"\\d"),r(l.m),o=l;var s=c(s,2),f="999999999999999".match(u)[0];f.length<o.a.b.length?o="":o=(o=f.replace(new RegExp(u,"g"),s)).replace(RegExp("9","g")," "),0<o.length?(l.m.a(o),l=!0):l=!1}if(l)return n.w=a,n.B=on.test(p(i,4)),n.s=0,!0}return n.l=!1}function R(n,t){for(var e=[],r=t.length-3,l=n.f.length,i=0;i<l;++i){var a=n.f[i];0==h(a,3)?e.push(n.f[i]):(a=p(a,3,Math.min(r,h(a,3)-1)),0==t.search(a)&&e.push(n.f[i]))}n.f=e}function F(n){return n.l=!0,n.A=!1,n.f=[],n.s=0,r(n.m),n.w="",I(n)}function $(n){for(var t=n.a.toString(),e=n.f.length,r=0;r<e;++r){var l=n.f[r],i=c(l,1);if(new RegExp("^(?:"+i+")$").test(t))return n.B=on.test(p(l,4)),C(n,t=t.replace(new RegExp(i,"g"),p(l,2)))}return""}function C(n,t){var e=n.b.b.length;return n.B&&0<e&&" "!=n.b.toString().charAt(e-1)?n.b+" "+t:n.b+t}function I(n){var t=n.a.toString();if(3<=t.length){for(var e=n.o&&0==n.h.length&&0<h(n.g,20)?f(n.g,20)||[]:f(n.g,19)||[],r=e.length,l=0;l<r;++l){var i=e[l];0<n.h.length&&x(c(i,4))&&!p(i,6)&&null==i.a[5]||(0!=n.h.length||n.o||x(c(i,4))||p(i,6))&&un.test(c(i,2))&&n.f.push(i)}return R(n,t),0<(t=$(n)).length?t:B(n)?V(n):n.i.toString()}return C(n,t)}function V(n){var t=n.a.toString(),e=t.length;if(0<e){for(var r="",l=0;l<e;l++)r=G(n,t.charAt(l));return n.l?C(n,r):n.i.toString()}return n.b.toString()}function D(n){var t,e=n.a.toString(),l=0;return 1!=p(n.g,10)?t=!1:t="1"==(t=n.a.toString()).charAt(0)&&"0"!=t.charAt(1)&&"1"!=t.charAt(1),t?(l=1,n.b.a("1").a(" "),n.o=!0):null!=n.g.a[15]&&(t=new RegExp("^(?:"+p(n.g,15)+")"),null!=(t=e.match(t))&&null!=t[0]&&0<t[0].length&&(n.o=!0,l=t[0].length,n.b.a(e.substring(0,l)))),r(n.a),n.a.a(e.substring(l)),e.substring(0,l)}function L(n){var t=n.u.toString(),e=new RegExp("^(?:\\+|"+p(n.g,11)+")");return null!=(e=t.match(e))&&null!=e[0]&&0<e[0].length&&(n.o=!0,e=e[0].length,r(n.a),n.a.a(t.substring(e)),r(n.b),n.b.a(t.substring(0,e)),"+"!=t.charAt(0)&&n.b.a(" "),!0)}function M(n){if(0==n.a.b.length)return!1;var t,l=new e;n:{if(0!=(t=n.a.toString()).length&&"0"!=t.charAt(0))for(var i,a=t.length,u=1;3>=u&&u<=a;++u)if((i=parseInt(t.substring(0,u),10))in Q){l.a(t.substring(u)),t=i;break n}t=0}return 0!=t&&(r(n.a),n.a.a(l.toString()),"001"==(l=N(t))?n.g=A(n.G,""+t):l!=n.D&&(n.g=E(n,l)),n.b.a(""+t).a(" "),n.h="",!0)}function G(n,t){if(0<=(l=n.m.toString()).substring(n.s).search(n.H)){var e=l.search(n.H),l=l.replace(n.H,t);return r(n.m),n.m.a(l),n.s=e,l.substring(0,n.s+1)}return 1==n.f.length&&(n.l=!1),n.w="",n.i.toString()}var H=this;e.prototype.b="",e.prototype.set=function(n){this.b=""+n},e.prototype.a=function(n,t,e){if(this.b+=String(n),null!=t)for(var r=1;r<arguments.length;r++)this.b+=arguments[r];return this},e.prototype.toString=function(){return this.b};var P=1,q=2,T=3,U=4,Y=6,k=16,J=18;o.prototype.set=function(n,t){g(this,n.b,t)},o.prototype.clone=function(){var n=new this.constructor;return n!=this&&(n.a={},n.b&&(n.b={}),s(n,this)),n},t(b,o);var K=null;t(y,o);var O=null;t(v,o);var Z=null;b.prototype.j=function(){var n=K;return n||(K=n=m(b,{0:{name:"NumberFormat",I:"i18n.phonenumbers.NumberFormat"},1:{name:"pattern",required:!0,c:9,type:String},2:{name:"format",required:!0,c:9,type:String},3:{name:"leading_digits_pattern",v:!0,c:9,type:String},4:{name:"national_prefix_formatting_rule",c:9,type:String},6:{name:"national_prefix_optional_when_formatting",c:8,defaultValue:!1,type:Boolean},5:{name:"domestic_carrier_code_formatting_rule",c:9,type:String}})),n},b.j=b.prototype.j,y.prototype.j=function(){var n=O;return n||(O=n=m(y,{0:{name:"PhoneNumberDesc",I:"i18n.phonenumbers.PhoneNumberDesc"},2:{name:"national_number_pattern",c:9,type:String},9:{name:"possible_length",v:!0,c:5,type:Number},10:{name:"possible_length_local_only",v:!0,c:5,type:Number},6:{name:"example_number",c:9,type:String}})),n},y.j=y.prototype.j,v.prototype.j=function(){var n=Z;return n||(Z=n=m(v,{0:{name:"PhoneMetadata",I:"i18n.phonenumbers.PhoneMetadata"},1:{name:"general_desc",c:11,type:y},2:{name:"fixed_line",c:11,type:y},3:{name:"mobile",c:11,type:y},4:{name:"toll_free",c:11,type:y},5:{name:"premium_rate",c:11,type:y},6:{name:"shared_cost",c:11,type:y},7:{name:"personal_number",c:11,type:y},8:{name:"voip",c:11,type:y},21:{name:"pager",c:11,type:y},25:{name:"uan",c:11,type:y},27:{name:"emergency",c:11,type:y},28:{name:"voicemail",c:11,type:y},29:{name:"short_code",c:11,type:y},30:{name:"standard_rate",c:11,type:y},31:{name:"carrier_specific",c:11,type:y},33:{name:"sms_services",c:11,type:y},24:{name:"no_international_dialling",c:11,type:y},9:{name:"id",required:!0,c:9,type:String},10:{name:"country_code",c:5,type:Number},11:{name:"international_prefix",c:9,type:String},17:{name:"preferred_international_prefix",c:9,type:String},12:{name:"national_prefix",c:9,type:String},13:{name:"preferred_extn_prefix",c:9,type:String},15:{name:"national_prefix_for_parsing",c:9,type:String},16:{name:"national_prefix_transform_rule",c:9,type:String},18:{name:"same_mobile_and_fixed_line_pattern",c:8,defaultValue:!1,type:Boolean},19:{name:"number_format",v:!0,c:11,type:b},20:{name:"intl_number_format",v:!0,c:11,type:b},22:{name:"main_country_for_code",c:8,defaultValue:!1,type:Boolean},23:{name:"leading_digits",c:9,type:String},26:{name:"leading_zero_possible",c:8,defaultValue:!1,type:Boolean}})),n},v.j=v.prototype.j,_.prototype.a=function(n){throw new n.b,Error("Unimplemented")},_.prototype.b=function(n,t){if(11==n.a||10==n.a)return t instanceof o?t:this.a(n.i.prototype.j(),t);if(14==n.a){if("string"==typeof t&&z.test(t)){var e=Number(t);if(0<e)return e}return t}if(!n.h)return t;if((e=n.i)===String){if("number"==typeof t)return String(t)}else if(e===Number&&"string"==typeof t&&("Infinity"===t||"-Infinity"===t||"NaN"===t||z.test(t)))return Number(t);return t};var z=/^-?[0-9]+$/;t(d,_),d.prototype.a=function(n,t){var e=new n.b;return e.g=this,e.a=t,e.b={},e},t(S,d),S.prototype.b=function(n,t){return 8==n.a?!!t:_.prototype.b.apply(this,arguments)},S.prototype.a=function(n,t){return S.M.a.call(this,n,t)};var Q={371:["LV"]},W={LV:[null,[null,null,"(?:[268]\\d|90)\\d{6}",null,null,null,null,null,null,[8]],[null,null,"6\\d{7}",null,null,null,"63123456"],[null,null,"2\\d{7}",null,null,null,"21234567"],[null,null,"80\\d{6}",null,null,null,"80123456"],[null,null,"90\\d{6}",null,null,null,"90123456"],[null,null,"81\\d{6}",null,null,null,"81123456"],[null,null,null,null,null,null,null,null,null,[-1]],[null,null,null,null,null,null,null,null,null,[-1]],"LV",371,"00",null,null,null,null,null,null,null,[[null,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[269]|8[01]"]]],null,[null,null,null,null,null,null,null,null,null,[-1]],null,null,[null,null,null,null,null,null,null,null,null,[-1]],[null,null,null,null,null,null,null,null,null,[-1]],null,null,[null,null,null,null,null,null,null,null,null,[-1]]]};w.b=function(){return w.a?w.a:w.a=new w};var X={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9","０":"0","１":"1","２":"2","３":"3","４":"4","５":"5","６":"6","７":"7","８":"8","９":"9","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9"},nn=RegExp("[+＋]+"),tn=RegExp("([0-9０-９٠-٩۰-۹])"),en=/^\(?\$1\)?$/,rn=new v;g(rn,11,"NA");var ln=/\[([^\[\]])*\]/g,an=/\d(?=[^,}][^,}])/g,un=RegExp("^[-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～]*(\\$\\d[-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～]*)+$"),on=/[- ]/;j.prototype.K=function(){this.C="",r(this.i),r(this.u),r(this.m),this.s=0,this.w="",r(this.b),this.h="",r(this.a),this.l=!0,this.A=this.o=this.F=!1,this.f=[],this.B=!1,this.g!=this.J&&(this.g=E(this,this.D))},j.prototype.L=function(n){return this.C=function(n,t){n.i.a(t);var e,l=t;if(tn.test(l)||1==n.i.b.length&&nn.test(l)?("+"==(l=t)?(e=l,n.u.a(l)):(e=X[l],n.u.a(e),n.a.a(e)),t=e):(n.l=!1,n.F=!0),!n.l){if(!n.F)if(L(n)){if(M(n))return F(n)}else if(0<n.h.length&&(l=n.a.toString(),r(n.a),n.a.a(n.h),n.a.a(l),e=(l=n.b.toString()).lastIndexOf(n.h),r(n.b),n.b.a(l.substring(0,e))),n.h!=D(n))return n.b.a(" "),F(n);return n.i.toString()}switch(n.u.b.length){case 0:case 1:case 2:return n.i.toString();case 3:if(!L(n))return n.h=D(n),I(n);n.A=!0;default:return n.A?(M(n)&&(n.A=!1),n.b.toString()+n.a.toString()):0<n.f.length?(l=G(n,t),0<(e=$(n)).length?e:(R(n,n.a.toString()),B(n)?V(n):n.l?C(n,l):n.i.toString())):I(n)}}(this,n)},n("Cleave.AsYouTypeFormatter",j),n("Cleave.AsYouTypeFormatter.prototype.inputDigit",j.prototype.L),n("Cleave.AsYouTypeFormatter.prototype.clear",j.prototype.K)}).call("object"==typeof global&&global?global:window);