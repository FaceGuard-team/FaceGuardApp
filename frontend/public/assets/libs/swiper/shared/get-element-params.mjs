import{e,i as a,c as n,p as r}from"./update-swiper.mjs";import{d as t}from"./swiper-core.mjs";const i=e=>{if(parseFloat(e)===Number(e))return Number(e);if("true"===e)return!0;if(""===e)return!0;if("false"===e)return!1;if("null"===e)return null;if("undefined"!==e){if("string"==typeof e&&e.includes("{")&&e.includes("}")&&e.includes('"')){let a;try{a=JSON.parse(e)}catch(n){a=e}return a}return e}},o=["a11y","autoplay","controller","cards-effect","coverflow-effect","creative-effect","cube-effect","fade-effect","flip-effect","free-mode","grid","hash-navigation","history","keyboard","mousewheel","navigation","pagination","parallax","scrollbar","thumbs","virtual","zoom"];function l(l,s,c){const f={},p={};e(f,t);const u=[...r,"on"],d=u.map((e=>e.replace(/_/,"")));u.forEach((e=>{e=e.replace("_",""),void 0!==l[e]&&(p[e]=l[e])}));const g=[...l.attributes];return"string"==typeof s&&void 0!==c&&g.push({name:s,value:a(c)?{...c}:c}),g.forEach((e=>{const r=o.filter((a=>0===e.name.indexOf(`${a}-`)))[0];if(r){const a=n(r),t=n(e.name.split(`${r}-`)[1]);void 0===p[a]&&(p[a]={}),!0===p[a]&&(p[a]={enabled:!0}),p[a][t]=i(e.value)}else{const r=n(e.name);if(!d.includes(r))return;const t=i(e.value);p[r]&&o.includes(e.name)&&!a(t)?(p[r].constructor!==Object&&(p[r]={}),p[r].enabled=!!t):p[r]=t}})),e(f,p),f.navigation?f.navigation={prevEl:".swiper-button-prev",nextEl:".swiper-button-next",...!0!==f.navigation?f.navigation:{}}:!1===f.navigation&&delete f.navigation,f.scrollbar?f.scrollbar={el:".swiper-scrollbar",...!0!==f.scrollbar?f.scrollbar:{}}:!1===f.scrollbar&&delete f.scrollbar,f.pagination?f.pagination={el:".swiper-pagination",...!0!==f.pagination?f.pagination:{}}:!1===f.pagination&&delete f.pagination,{params:f,passedParams:p}}export{l as g};