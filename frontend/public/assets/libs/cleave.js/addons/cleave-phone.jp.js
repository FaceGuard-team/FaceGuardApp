(function(){function n(n,t){var e,l=n.split("."),r=G;l[0]in r||!r.execScript||r.execScript("var "+l[0]);for(;l.length&&(e=l.shift());)l.length||void 0===t?r=r[e]?r[e]:r[e]={}:r[e]=t}function t(n,t){function e(){}e.prototype=t.prototype,n.M=t.prototype,n.prototype=new e,n.prototype.constructor=n,n.N=function(n,e,l){for(var r=Array(arguments.length-2),i=2;i<arguments.length;i++)r[i-2]=arguments[i];return t.prototype[e].apply(n,r)}}function e(n,t){null!=n&&this.a.apply(this,arguments)}function l(n){n.b=""}function r(n,t){return n>t?1:n<t?-1:0}function i(n,t){this.b=n,this.a={};for(var e=0;e<t.length;e++){var l=t[e];this.a[l.b]=l}}function u(n){return n=function(n){var t,e=[],l=0;for(t in n)e[l++]=n[t];return e}(n.a),function(n,t){n.sort(t||r)}(n,(function(n,t){return n.b-t.b})),n}function a(n,t){switch(this.b=n,this.g=!!t.v,this.a=t.c,this.i=t.type,this.h=!1,this.a){case T:case U:case Y:case k:case K:case q:case H:this.h=!0}this.f=t.defaultValue}function o(){this.a={},this.f=this.j().a,this.b=this.g=null}function s(n,t){for(var e=u(n.j()),l=0;l<e.length;l++){var r=(a=e[l]).b;if(null!=t.a[r]){n.b&&delete n.b[a.b];var i=11==a.a||10==a.a;if(a.g)for(var a=f(t,r)||[],o=0;o<a.length;o++){var p=n,c=r,h=i?a[o].clone():a[o];p.a[c]||(p.a[c]=[]),p.a[c].push(h),p.b&&delete p.b[c]}else a=f(t,r),i?(i=f(n,r))?s(i,a):d(n,r,a.clone()):d(n,r,a)}}}function f(n,t){var e=n.a[t];if(null==e)return null;if(n.g){if(!(t in n.b)){var l=n.g,r=n.f[t];if(null!=e)if(r.g){for(var i=[],u=0;u<e.length;u++)i[u]=l.b(r,e[u]);e=i}else e=l.b(r,e);return n.b[t]=e}return n.b[t]}return e}function p(n,t,e){var l=f(n,t);return n.f[t].g?l[e||0]:l}function c(n,t){var e;if(null!=n.a[t])e=p(n,t,void 0);else n:{if(void 0===(e=n.f[t]).f){var l=e.i;if(l===Boolean)e.f=!1;else if(l===Number)e.f=0;else{if(l!==String){e=new l;break n}e.f=e.h?"0":""}}e=e.f}return e}function h(n,t){return n.f[t].g?null!=n.a[t]?n.a[t].length:0:null!=n.a[t]?1:0}function d(n,t,e){n.a[t]=e,n.b&&(n.b[t]=e)}function g(n,t){var e,l=[];for(e in t)0!=e&&l.push(new a(e,t[e]));return new i(n,l)}function m(){o.call(this)}function b(){o.call(this)}function $(){o.call(this)}function y(){}function v(){}function _(){}function S(){this.a={}}function w(n){return 0==n.length||en.test(n)}function x(n,t){if(null==t)return null;t=t.toUpperCase();var e=n.a[t];if(null==e){if(null==(e=W[t]))return null;e=(new _).a($.j(),e),n.a[t]=e}return e}function A(n){return null==(n=Q[n])?"ZZ":n[0]}function N(n){this.H=RegExp(" "),this.C="",this.m=new e,this.w="",this.i=new e,this.u=new e,this.l=!0,this.A=this.o=this.F=!1,this.G=S.b(),this.s=0,this.b=new e,this.B=!1,this.h="",this.a=new e,this.f=[],this.D=n,this.J=this.g=j(this,this.D)}function j(n,t){var e;if(null!=t&&isNaN(t)&&t.toUpperCase()in W){if(null==(e=x(n.G,t)))throw Error("Invalid region code: "+t);e=c(e,10)}else e=0;return null!=(e=x(n.G,A(e)))?e:ln}function E(n){for(var t=n.f.length,e=0;e<t;++e){var r,i=n.f[e],u=c(i,1);if(n.w==u)return!1;r=n;var a=c(s=i,1);if(-1!=a.indexOf("|"))r=!1;else{var o;a=(a=a.replace(rn,"\\d")).replace(un,"\\d"),l(r.m),o=r;var s=c(s,2),f="999999999999999".match(a)[0];f.length<o.a.b.length?o="":o=(o=f.replace(new RegExp(a,"g"),s)).replace(RegExp("9","g")," "),0<o.length?(r.m.a(o),r=!0):r=!1}if(r)return n.w=u,n.B=on.test(p(i,4)),n.s=0,!0}return n.l=!1}function B(n,t){for(var e=[],l=t.length-3,r=n.f.length,i=0;i<r;++i){var u=n.f[i];0==h(u,3)?e.push(n.f[i]):(u=p(u,3,Math.min(l,h(u,3)-1)),0==t.search(u)&&e.push(n.f[i]))}n.f=e}function R(n){return n.l=!0,n.A=!1,n.f=[],n.s=0,l(n.m),n.w="",I(n)}function F(n){for(var t=n.a.toString(),e=n.f.length,l=0;l<e;++l){var r=n.f[l],i=c(r,1);if(new RegExp("^(?:"+i+")$").test(t))return n.B=on.test(p(r,4)),C(n,t=t.replace(new RegExp(i,"g"),p(r,2)))}return""}function C(n,t){var e=n.b.b.length;return n.B&&0<e&&" "!=n.b.toString().charAt(e-1)?n.b+" "+t:n.b+t}function I(n){var t=n.a.toString();if(3<=t.length){for(var e=n.o&&0==n.h.length&&0<h(n.g,20)?f(n.g,20)||[]:f(n.g,19)||[],l=e.length,r=0;r<l;++r){var i=e[r];0<n.h.length&&w(c(i,4))&&!p(i,6)&&null==i.a[5]||(0!=n.h.length||n.o||w(c(i,4))||p(i,6))&&an.test(c(i,2))&&n.f.push(i)}return B(n,t),0<(t=F(n)).length?t:E(n)?D(n):n.i.toString()}return C(n,t)}function D(n){var t=n.a.toString(),e=t.length;if(0<e){for(var l="",r=0;r<e;r++)l=V(n,t.charAt(r));return n.l?C(n,l):n.i.toString()}return n.b.toString()}function P(n){var t,e=n.a.toString(),r=0;return 1!=p(n.g,10)?t=!1:t="1"==(t=n.a.toString()).charAt(0)&&"0"!=t.charAt(1)&&"1"!=t.charAt(1),t?(r=1,n.b.a("1").a(" "),n.o=!0):null!=n.g.a[15]&&(t=new RegExp("^(?:"+p(n.g,15)+")"),null!=(t=e.match(t))&&null!=t[0]&&0<t[0].length&&(n.o=!0,r=t[0].length,n.b.a(e.substring(0,r)))),l(n.a),n.a.a(e.substring(r)),e.substring(0,r)}function J(n){var t=n.u.toString(),e=new RegExp("^(?:\\+|"+p(n.g,11)+")");return null!=(e=t.match(e))&&null!=e[0]&&0<e[0].length&&(n.o=!0,e=e[0].length,l(n.a),n.a.a(t.substring(e)),l(n.b),n.b.a(t.substring(0,e)),"+"!=t.charAt(0)&&n.b.a(" "),!0)}function M(n){if(0==n.a.b.length)return!1;var t,r=new e;n:{if(0!=(t=n.a.toString()).length&&"0"!=t.charAt(0))for(var i,u=t.length,a=1;3>=a&&a<=u;++a)if((i=parseInt(t.substring(0,a),10))in Q){r.a(t.substring(a)),t=i;break n}t=0}return 0!=t&&(l(n.a),n.a.a(r.toString()),"001"==(r=A(t))?n.g=x(n.G,""+t):r!=n.D&&(n.g=j(n,r)),n.b.a(""+t).a(" "),n.h="",!0)}function V(n,t){if(0<=(r=n.m.toString()).substring(n.s).search(n.H)){var e=r.search(n.H),r=r.replace(n.H,t);return l(n.m),n.m.a(r),n.s=e,r.substring(0,n.s+1)}return 1==n.f.length&&(n.l=!1),n.w="",n.i.toString()}var G=this;e.prototype.b="",e.prototype.set=function(n){this.b=""+n},e.prototype.a=function(n,t,e){if(this.b+=String(n),null!=t)for(var l=1;l<arguments.length;l++)this.b+=arguments[l];return this},e.prototype.toString=function(){return this.b};var H=1,q=2,T=3,U=4,Y=6,k=16,K=18;o.prototype.set=function(n,t){d(this,n.b,t)},o.prototype.clone=function(){var n=new this.constructor;return n!=this&&(n.a={},n.b&&(n.b={}),s(n,this)),n},t(m,o);var L=null;t(b,o);var O=null;t($,o);var Z=null;m.prototype.j=function(){var n=L;return n||(L=n=g(m,{0:{name:"NumberFormat",I:"i18n.phonenumbers.NumberFormat"},1:{name:"pattern",required:!0,c:9,type:String},2:{name:"format",required:!0,c:9,type:String},3:{name:"leading_digits_pattern",v:!0,c:9,type:String},4:{name:"national_prefix_formatting_rule",c:9,type:String},6:{name:"national_prefix_optional_when_formatting",c:8,defaultValue:!1,type:Boolean},5:{name:"domestic_carrier_code_formatting_rule",c:9,type:String}})),n},m.j=m.prototype.j,b.prototype.j=function(){var n=O;return n||(O=n=g(b,{0:{name:"PhoneNumberDesc",I:"i18n.phonenumbers.PhoneNumberDesc"},2:{name:"national_number_pattern",c:9,type:String},9:{name:"possible_length",v:!0,c:5,type:Number},10:{name:"possible_length_local_only",v:!0,c:5,type:Number},6:{name:"example_number",c:9,type:String}})),n},b.j=b.prototype.j,$.prototype.j=function(){var n=Z;return n||(Z=n=g($,{0:{name:"PhoneMetadata",I:"i18n.phonenumbers.PhoneMetadata"},1:{name:"general_desc",c:11,type:b},2:{name:"fixed_line",c:11,type:b},3:{name:"mobile",c:11,type:b},4:{name:"toll_free",c:11,type:b},5:{name:"premium_rate",c:11,type:b},6:{name:"shared_cost",c:11,type:b},7:{name:"personal_number",c:11,type:b},8:{name:"voip",c:11,type:b},21:{name:"pager",c:11,type:b},25:{name:"uan",c:11,type:b},27:{name:"emergency",c:11,type:b},28:{name:"voicemail",c:11,type:b},29:{name:"short_code",c:11,type:b},30:{name:"standard_rate",c:11,type:b},31:{name:"carrier_specific",c:11,type:b},33:{name:"sms_services",c:11,type:b},24:{name:"no_international_dialling",c:11,type:b},9:{name:"id",required:!0,c:9,type:String},10:{name:"country_code",c:5,type:Number},11:{name:"international_prefix",c:9,type:String},17:{name:"preferred_international_prefix",c:9,type:String},12:{name:"national_prefix",c:9,type:String},13:{name:"preferred_extn_prefix",c:9,type:String},15:{name:"national_prefix_for_parsing",c:9,type:String},16:{name:"national_prefix_transform_rule",c:9,type:String},18:{name:"same_mobile_and_fixed_line_pattern",c:8,defaultValue:!1,type:Boolean},19:{name:"number_format",v:!0,c:11,type:m},20:{name:"intl_number_format",v:!0,c:11,type:m},22:{name:"main_country_for_code",c:8,defaultValue:!1,type:Boolean},23:{name:"leading_digits",c:9,type:String},26:{name:"leading_zero_possible",c:8,defaultValue:!1,type:Boolean}})),n},$.j=$.prototype.j,y.prototype.a=function(n){throw new n.b,Error("Unimplemented")},y.prototype.b=function(n,t){if(11==n.a||10==n.a)return t instanceof o?t:this.a(n.i.prototype.j(),t);if(14==n.a){if("string"==typeof t&&z.test(t)){var e=Number(t);if(0<e)return e}return t}if(!n.h)return t;if((e=n.i)===String){if("number"==typeof t)return String(t)}else if(e===Number&&"string"==typeof t&&("Infinity"===t||"-Infinity"===t||"NaN"===t||z.test(t)))return Number(t);return t};var z=/^-?[0-9]+$/;t(v,y),v.prototype.a=function(n,t){var e=new n.b;return e.g=this,e.a=t,e.b={},e},t(_,v),_.prototype.b=function(n,t){return 8==n.a?!!t:y.prototype.b.apply(this,arguments)},_.prototype.a=function(n,t){return _.M.a.call(this,n,t)};var Q={81:["JP"]},W={JP:[null,[null,null,"00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}",null,null,null,null,null,null,[8,9,10,11,12,13,14,15,16,17]],[null,null,"(?:1(?:1[235-8]|2[3-6]|3[3-9]|4[2-6]|[58][2-8]|6[2-7]|7[2-9]|9[1-9])|(?:2[2-9]|[36][1-9])\\d|4(?:[2-578]\\d|6[02-8]|9[2-59])|5(?:[2-589]\\d|6[1-9]|7[2-8])|7(?:[25-9]\\d|3[4-9]|4[02-9])|8(?:[2679]\\d|3[2-9]|4[5-9]|5[1-9]|8[03-9])|9(?:[2-58]\\d|[679][1-9]))\\d{6}",null,null,null,"312345678",null,null,[9]],[null,null,"[7-9]0[1-9]\\d{7}",null,null,null,"9012345678",null,null,[10]],[null,null,"(?:00(?:(?:37|66)\\d{4,11}|777(?:[01]|(?:5|8\\d)\\d)|882[1245]\\d\\d)|(?:120|800\\d)\\d{4})\\d\\d",null,null,null,"120123456"],[null,null,"990\\d{6}",null,null,null,"990123456",null,null,[9]],[null,null,null,null,null,null,null,null,null,[-1]],[null,null,"60\\d{7}",null,null,null,"601234567",null,null,[9]],[null,null,"50[1-9]\\d{7}",null,null,null,"5012345678",null,null,[10]],"JP",81,"010","0",null,null,"0",null,null,null,[[null,"(\\d{4})(\\d{4})","$1-$2",["007","0077","00777","00777[01]"]],[null,"(\\d{3})(\\d{3})(\\d{3})","$1-$2-$3",["(?:12|57|99)0"],"0$1"],[null,"(\\d{4})(\\d)(\\d{4})","$1-$2-$3",["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:49|80|9[16])","1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[78]|96)|477|51[24]|636)|9(?:496|802|9(?:1[23]|69))","1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[78]|96[2457-9])|477|51[24]|636[2-57-9])|9(?:496|802|9(?:1[23]|69))"],"0$1"],[null,"(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3",["1(?:[2-46]|5[2-8]|7[2-689]|8[2-7]|9[1-578])|2(?:2[03-689]|3[3-58]|4[0-468]|5[04-8]|6[013-8]|7[06-9]|8[02-57-9]|9[13])|4(?:2[28]|3[689]|6[035-7]|7[05689]|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|[67]|8[14-7]|9[4-9])|7(?:2[15]|3[5-9]|4|6[135-8]|7[0-4689]|9[014-9])|8(?:2[49]|3[3-8]|4[5-8]|5[2-9]|6[35-9]|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9[3-7])","1(?:[2-46]|5(?:[236-8]|[45][2-69])|7[2-689]|8[2-7]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|[67]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9[2-8])|3(?:[3-6][2-9]|7[2-6]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5[4-7]|6[2-9]|8[2-8]|9[236-9])|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3[34]|4[2-69]|[5-7]))","1(?:[2-46]|5(?:[236-8]|[45][2-69])|7[2-689]|8[2-7]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|[67]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:20|[3578]|4[04-9]|6[56]))|3(?:[3-6][2-9]|7(?:[2-5]|6[0-59])|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))","1(?:[2-46]|5(?:[236-8]|[45][2-69])|7[2-689]|8[2-7]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|[67]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:20|[3578]|4[04-9]|6(?:5[25]|60)))|3(?:[3-6][2-9]|7(?:[2-5]|6[0-59])|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))"],"0$1"],[null,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["1|2(?:2[37]|5[5-9]|64|78|8[39]|91)|4(?:2[2689]|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93)","1|2(?:2[37]|5(?:[57]|[68]0|9[19])|64|78|8[39]|917)|4(?:2(?:20|[68]|9[178])|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93[34])","1|2(?:2[37]|5(?:[57]|[68]0|9(?:17|99))|64|78|8[39]|917)|4(?:2(?:20|[68]|9[178])|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93[34])"],"0$1"],[null,"(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3",["2(?:[34]7|[56]9|74|9[14-79])|82|993"],"0$1"],[null,"(\\d)(\\d{4})(\\d{4})","$1-$2-$3",["[36]|4(?:2[09]|7[01])"],"0$1"],[null,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["2[2-9]|4|7[235-9]|9[49]"],"0$1"],[null,"(\\d{4})(\\d{2})(\\d{3,4})","$1-$2-$3",["007"]],[null,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["800"],"0$1"],[null,"(\\d{4})(\\d{2})(\\d{4})","$1-$2-$3",["008"]],[null,"(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[2579]|80"],"0$1"],[null,"(\\d{4})(\\d{3})(\\d{3,4})","$1-$2-$3",["0"]],[null,"(\\d{4})(\\d{4})(\\d{4,5})","$1-$2-$3",["0"]],[null,"(\\d{4})(\\d{5})(\\d{5,6})","$1-$2-$3",["0"]],[null,"(\\d{4})(\\d{6})(\\d{6,7})","$1-$2-$3",["0"]]],[[null,"(\\d{3})(\\d{3})(\\d{3})","$1-$2-$3",["(?:12|57|99)0"],"0$1"],[null,"(\\d{4})(\\d)(\\d{4})","$1-$2-$3",["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:49|80|9[16])","1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[78]|96)|477|51[24]|636)|9(?:496|802|9(?:1[23]|69))","1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[78]|96[2457-9])|477|51[24]|636[2-57-9])|9(?:496|802|9(?:1[23]|69))"],"0$1"],[null,"(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3",["1(?:[2-46]|5[2-8]|7[2-689]|8[2-7]|9[1-578])|2(?:2[03-689]|3[3-58]|4[0-468]|5[04-8]|6[013-8]|7[06-9]|8[02-57-9]|9[13])|4(?:2[28]|3[689]|6[035-7]|7[05689]|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|[67]|8[14-7]|9[4-9])|7(?:2[15]|3[5-9]|4|6[135-8]|7[0-4689]|9[014-9])|8(?:2[49]|3[3-8]|4[5-8]|5[2-9]|6[35-9]|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9[3-7])","1(?:[2-46]|5(?:[236-8]|[45][2-69])|7[2-689]|8[2-7]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|[67]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9[2-8])|3(?:[3-6][2-9]|7[2-6]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5[4-7]|6[2-9]|8[2-8]|9[236-9])|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3[34]|4[2-69]|[5-7]))","1(?:[2-46]|5(?:[236-8]|[45][2-69])|7[2-689]|8[2-7]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|[67]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:20|[3578]|4[04-9]|6[56]))|3(?:[3-6][2-9]|7(?:[2-5]|6[0-59])|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))","1(?:[2-46]|5(?:[236-8]|[45][2-69])|7[2-689]|8[2-7]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|[67]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:20|[3578]|4[04-9]|6(?:5[25]|60)))|3(?:[3-6][2-9]|7(?:[2-5]|6[0-59])|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))"],"0$1"],[null,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["1|2(?:2[37]|5[5-9]|64|78|8[39]|91)|4(?:2[2689]|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93)","1|2(?:2[37]|5(?:[57]|[68]0|9[19])|64|78|8[39]|917)|4(?:2(?:20|[68]|9[178])|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93[34])","1|2(?:2[37]|5(?:[57]|[68]0|9(?:17|99))|64|78|8[39]|917)|4(?:2(?:20|[68]|9[178])|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93[34])"],"0$1"],[null,"(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3",["2(?:[34]7|[56]9|74|9[14-79])|82|993"],"0$1"],[null,"(\\d)(\\d{4})(\\d{4})","$1-$2-$3",["[36]|4(?:2[09]|7[01])"],"0$1"],[null,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["2[2-9]|4|7[235-9]|9[49]"],"0$1"],[null,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["800"],"0$1"],[null,"(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[2579]|80"],"0$1"]],[null,null,"20\\d{8}",null,null,null,"2012345678",null,null,[10]],null,null,[null,null,"00(?:(?:37|66)\\d{4,11}|777(?:[01]|(?:5|8\\d)\\d)|882[1245]\\d\\d)\\d\\d"],[null,null,"570\\d{6}",null,null,null,"570123456",null,null,[9]],null,null,[null,null,null,null,null,null,null,null,null,[-1]]]};S.b=function(){return S.a?S.a:S.a=new S};var X={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9","０":"0","１":"1","２":"2","３":"3","４":"4","５":"5","６":"6","７":"7","８":"8","９":"9","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9"},nn=RegExp("[+＋]+"),tn=RegExp("([0-9０-９٠-٩۰-۹])"),en=/^\(?\$1\)?$/,ln=new $;d(ln,11,"NA");var rn=/\[([^\[\]])*\]/g,un=/\d(?=[^,}][^,}])/g,an=RegExp("^[-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～]*(\\$\\d[-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～]*)+$"),on=/[- ]/;N.prototype.K=function(){this.C="",l(this.i),l(this.u),l(this.m),this.s=0,this.w="",l(this.b),this.h="",l(this.a),this.l=!0,this.A=this.o=this.F=!1,this.f=[],this.B=!1,this.g!=this.J&&(this.g=j(this,this.D))},N.prototype.L=function(n){return this.C=function(n,t){n.i.a(t);var e,r=t;if(tn.test(r)||1==n.i.b.length&&nn.test(r)?("+"==(r=t)?(e=r,n.u.a(r)):(e=X[r],n.u.a(e),n.a.a(e)),t=e):(n.l=!1,n.F=!0),!n.l){if(!n.F)if(J(n)){if(M(n))return R(n)}else if(0<n.h.length&&(r=n.a.toString(),l(n.a),n.a.a(n.h),n.a.a(r),e=(r=n.b.toString()).lastIndexOf(n.h),l(n.b),n.b.a(r.substring(0,e))),n.h!=P(n))return n.b.a(" "),R(n);return n.i.toString()}switch(n.u.b.length){case 0:case 1:case 2:return n.i.toString();case 3:if(!J(n))return n.h=P(n),I(n);n.A=!0;default:return n.A?(M(n)&&(n.A=!1),n.b.toString()+n.a.toString()):0<n.f.length?(r=V(n,t),0<(e=F(n)).length?e:(B(n,n.a.toString()),E(n)?D(n):n.l?C(n,r):n.i.toString())):I(n)}}(this,n)},n("Cleave.AsYouTypeFormatter",N),n("Cleave.AsYouTypeFormatter.prototype.inputDigit",N.prototype.L),n("Cleave.AsYouTypeFormatter.prototype.clear",N.prototype.K)}).call("object"==typeof global&&global?global:window);