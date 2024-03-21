import{configFromStringAndFormat}from"./from-string-and-format";import{createUTCDate}from"./date-from-array";import{configFromArray}from"./from-array";import{hooks}from"../utils/hooks";import{deprecate}from"../utils/deprecate";import getParsingFlags from"./parsing-flags";import{defaultLocaleMonthsShort}from"../units/month";import{defaultLocaleWeekdaysShort}from"../units/day-of-week";var extendedIsoRegex=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,basicIsoRegex=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,tzRegex=/Z|[+-]\d\d(?::?\d\d)?/,isoDates=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],isoTimes=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],aspNetJsonRegex=/^\/?Date\((\-?\d+)/i;export function configFromISO(d){var e,r,t,s,a,o,i=d._i,n=extendedIsoRegex.exec(i)||basicIsoRegex.exec(i);if(n){for(getParsingFlags(d).iso=!0,e=0,r=isoDates.length;e<r;e++)if(isoDates[e][1].exec(n[1])){s=isoDates[e][0],t=!1!==isoDates[e][2];break}if(null==s)return void(d._isValid=!1);if(n[3]){for(e=0,r=isoTimes.length;e<r;e++)if(isoTimes[e][1].exec(n[3])){a=(n[2]||" ")+isoTimes[e][0];break}if(null==a)return void(d._isValid=!1)}if(!t&&null!=a)return void(d._isValid=!1);if(n[4]){if(!tzRegex.exec(n[4]))return void(d._isValid=!1);o="Z"}d._f=s+(a||"")+(o||""),configFromStringAndFormat(d)}else d._isValid=!1}var rfc2822=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;function extractFromRFC2822Strings(d,e,r,t,s,a){var o=[untruncateYear(d),defaultLocaleMonthsShort.indexOf(e),parseInt(r,10),parseInt(t,10),parseInt(s,10)];return a&&o.push(parseInt(a,10)),o}function untruncateYear(d){var e=parseInt(d,10);return e<=49?2e3+e:e<=999?1900+e:e}function preprocessRFC2822(d){return d.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function checkWeekday(d,e,r){if(d&&defaultLocaleWeekdaysShort.indexOf(d)!==new Date(e[0],e[1],e[2]).getDay())return getParsingFlags(r).weekdayMismatch=!0,r._isValid=!1,!1;return!0}var obsOffsets={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function calculateOffset(d,e,r){if(d)return obsOffsets[d];if(e)return 0;var t=parseInt(r,10),s=t%100;return 60*((t-s)/100)+s}export function configFromRFC2822(d){var e=rfc2822.exec(preprocessRFC2822(d._i));if(e){var r=extractFromRFC2822Strings(e[4],e[3],e[2],e[5],e[6],e[7]);if(!checkWeekday(e[1],r,d))return;d._a=r,d._tzm=calculateOffset(e[8],e[9],e[10]),d._d=createUTCDate.apply(null,d._a),d._d.setUTCMinutes(d._d.getUTCMinutes()-d._tzm),getParsingFlags(d).rfc2822=!0}else d._isValid=!1}export function configFromString(d){var e=aspNetJsonRegex.exec(d._i);null===e?(configFromISO(d),!1===d._isValid&&(delete d._isValid,configFromRFC2822(d),!1===d._isValid&&(delete d._isValid,hooks.createFromInputFallback(d)))):d._d=new Date(+e[1])}hooks.createFromInputFallback=deprecate("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",(function(d){d._d=new Date(d._i+(d._useUTC?" UTC":""))}));