!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).momentPlugin=e()}(this,(function(){"use strict";return function(t){var e=t.moment;return function(t){function n(n){var o=n;o.stopPropagation();var r=e(t.selectedDates[0]),i=function(t){try{return"function"==typeof t.composedPath?t.composedPath()[0]:t.target}catch(e){return t.target}}(o),a=Array.from(i.classList).filter((function(t){return t.startsWith("flatpickr-")})).map((function(t){return t.substring(10)}))[0],u=parseFloat(i.getAttribute("step"));r.add(u*o.delta,a),t.setDate(r.toDate())}return{parseDate:function(t,n){return e(t,n,!0).toDate()},formatDate:function(n,o){var r=e(n);return"string"==typeof t.config.locale&&r.locale(t.config.locale),r.format(o)},onReady:function(){[t.hourElement,t.minuteElement,t.secondElement].forEach((function(t){return t&&t.addEventListener("increment",n,{capture:!0})}))},onDestroy:function(){[t.hourElement,t.minuteElement,t.secondElement].forEach((function(t){return t&&t.removeEventListener("increment",n,{capture:!0})}))}}}}}));