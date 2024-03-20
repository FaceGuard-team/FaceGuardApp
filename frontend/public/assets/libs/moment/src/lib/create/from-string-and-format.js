import{configFromISO,configFromRFC2822}from"./from-string";import{configFromArray}from"./from-array";import{getParseRegexForToken}from"../parse/regex";import{addTimeToArrayFromToken}from"../parse/token";import{expandFormat,formatTokenFunctions,formattingTokens}from"../format/format";import checkOverflow from"./check-overflow";import{HOUR}from"../units/constants";import{hooks}from"../utils/hooks";import getParsingFlags from"./parsing-flags";hooks.ISO_8601=function(){},hooks.RFC_2822=function(){};export function configFromStringAndFormat(r){if(r._f!==hooks.ISO_8601)if(r._f!==hooks.RFC_2822){r._a=[],getParsingFlags(r).empty=!0;var o,e,i,n,a,s=""+r._i,t=s.length,g=0;for(i=expandFormat(r._f,r._locale).match(formattingTokens)||[],o=0;o<i.length;o++)n=i[o],(e=(s.match(getParseRegexForToken(n,r))||[])[0])&&((a=s.substr(0,s.indexOf(e))).length>0&&getParsingFlags(r).unusedInput.push(a),s=s.slice(s.indexOf(e)+e.length),g+=e.length),formatTokenFunctions[n]?(e?getParsingFlags(r).empty=!1:getParsingFlags(r).unusedTokens.push(n),addTimeToArrayFromToken(n,e,r)):r._strict&&!e&&getParsingFlags(r).unusedTokens.push(n);getParsingFlags(r).charsLeftOver=t-g,s.length>0&&getParsingFlags(r).unusedInput.push(s),r._a[HOUR]<=12&&!0===getParsingFlags(r).bigHour&&r._a[HOUR]>0&&(getParsingFlags(r).bigHour=void 0),getParsingFlags(r).parsedDateParts=r._a.slice(0),getParsingFlags(r).meridiem=r._meridiem,r._a[HOUR]=meridiemFixWrap(r._locale,r._a[HOUR],r._meridiem),configFromArray(r),checkOverflow(r)}else configFromRFC2822(r);else configFromISO(r)}function meridiemFixWrap(r,o,e){var i;return null==e?o:null!=r.meridiemHour?r.meridiemHour(o,e):null!=r.isPM?((i=r.isPM(e))&&o<12&&(o+=12),i||12!==o||(o=0),o):o}