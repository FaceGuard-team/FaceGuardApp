export var match1=/\d/;export var match2=/\d\d/;export var match3=/\d{3}/;export var match4=/\d{4}/;export var match6=/[+-]?\d{6}/;export var match1to2=/\d\d?/;export var match3to4=/\d\d\d\d?/;export var match5to6=/\d\d\d\d\d\d?/;export var match1to3=/\d{1,3}/;export var match1to4=/\d{1,4}/;export var match1to6=/[+-]?\d{1,6}/;export var matchUnsigned=/\d+/;export var matchSigned=/[+-]?\d+/;export var matchOffset=/Z|[+-]\d\d:?\d\d/gi;export var matchShortOffset=/Z|[+-]\d\d(?::?\d\d)?/gi;export var matchTimestamp=/[+-]?\d+(\.\d{1,3})?/;export var matchWord=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;import hasOwnProp from"../utils/has-own-prop";import isFunction from"../utils/is-function";var regexes={};export function addRegexToken(r,t,e){regexes[r]=isFunction(t)?t:function(r,a){return r&&e?e:t}}export function getParseRegexForToken(r,t){return hasOwnProp(regexes,r)?regexes[r](t._strict,t._locale):new RegExp(unescapeFormat(r))}function unescapeFormat(r){return regexEscape(r.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,(function(r,t,e,a,o){return t||e||a||o})))}export function regexEscape(r){return r.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}