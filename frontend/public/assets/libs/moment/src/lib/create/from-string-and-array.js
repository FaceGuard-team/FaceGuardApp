import{copyConfig}from"../moment/constructor";import{configFromStringAndFormat}from"./from-string-and-format";import getParsingFlags from"./parsing-flags";import{isValid}from"./valid";import extend from"../utils/extend";export function configFromStringAndArray(r){var n,o,t,i,g;if(0===r._f.length)return getParsingFlags(r).invalidFormat=!0,void(r._d=new Date(NaN));for(i=0;i<r._f.length;i++)g=0,n=copyConfig({},r),null!=r._useUTC&&(n._useUTC=r._useUTC),n._f=r._f[i],configFromStringAndFormat(n),isValid(n)&&(g+=getParsingFlags(n).charsLeftOver,g+=10*getParsingFlags(n).unusedTokens.length,getParsingFlags(n).score=g,(null==t||g<t)&&(t=g,o=n));extend(r,o||n)}