import{makeGetSet}from"../moment/get-set";import{addFormatToken}from"../format/format";import{addUnitAlias}from"./aliases";import{addUnitPriority}from"./priorities";import{addRegexToken,match1to2,match2}from"../parse/regex";import{addParseToken}from"../parse/token";import{DATE}from"./constants";import toInt from"../utils/to-int";addFormatToken("D",["DD",2],"Do","date"),addUnitAlias("date","D"),addUnitPriority("date",9),addRegexToken("D",match1to2),addRegexToken("DD",match1to2,match2),addRegexToken("Do",(function(t,o){return t?o._dayOfMonthOrdinalParse||o._ordinalParse:o._dayOfMonthOrdinalParseLenient})),addParseToken(["D","DD"],DATE),addParseToken("Do",(function(t,o){o[DATE]=toInt(t.match(match1to2)[0])}));export var getSetDayOfMonth=makeGetSet("Date",!0);