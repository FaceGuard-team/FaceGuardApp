import{makeGetSet}from"../moment/get-set";import{addFormatToken}from"../format/format";import{addUnitAlias}from"./aliases";import{addUnitPriority}from"./priorities";import{addRegexToken,match1,match2,match3,match1to3,matchUnsigned}from"../parse/regex";import{addParseToken}from"../parse/token";import{MILLISECOND}from"./constants";import toInt from"../utils/to-int";var token;for(addFormatToken("S",0,0,(function(){return~~(this.millisecond()/100)})),addFormatToken(0,["SS",2],0,(function(){return~~(this.millisecond()/10)})),addFormatToken(0,["SSS",3],0,"millisecond"),addFormatToken(0,["SSSS",4],0,(function(){return 10*this.millisecond()})),addFormatToken(0,["SSSSS",5],0,(function(){return 100*this.millisecond()})),addFormatToken(0,["SSSSSS",6],0,(function(){return 1e3*this.millisecond()})),addFormatToken(0,["SSSSSSS",7],0,(function(){return 1e4*this.millisecond()})),addFormatToken(0,["SSSSSSSS",8],0,(function(){return 1e5*this.millisecond()})),addFormatToken(0,["SSSSSSSSS",9],0,(function(){return 1e6*this.millisecond()})),addUnitAlias("millisecond","ms"),addUnitPriority("millisecond",16),addRegexToken("S",match1to3,match1),addRegexToken("SS",match1to3,match2),addRegexToken("SSS",match1to3,match3),token="SSSS";token.length<=9;token+="S")addRegexToken(token,matchUnsigned);function parseMs(t,o){o[MILLISECOND]=toInt(1e3*("0."+t))}for(token="S";token.length<=9;token+="S")addParseToken(token,parseMs);export var getSetMillisecond=makeGetSet("Milliseconds",!1);