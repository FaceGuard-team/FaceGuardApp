import{a as e}from"../shared/ssr-window.esm.mjs";function t(t){let{swiper:a,extendParams:s,on:r}=t;s({history:{enabled:!1,root:"",replaceState:!1,key:"slides",keepQuery:!1}});let l=!1,o={};const i=e=>e.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,""),n=t=>{const a=e();let s;s=t?new URL(t):a.location;const r=s.pathname.slice(1).split("/").filter((e=>""!==e)),l=r.length;return{key:r[l-2],value:r[l-1]}},p=(t,s)=>{const r=e();if(!l||!a.params.history.enabled)return;let o;o=a.params.url?new URL(a.params.url):r.location;const n=a.slides[s];let p=i(n.getAttribute("data-history"));if(a.params.history.root.length>0){let e=a.params.history.root;"/"===e[e.length-1]&&(e=e.slice(0,e.length-1)),p=`${e}/${t?`${t}/`:""}${p}`}else o.pathname.includes(t)||(p=`${t?`${t}/`:""}${p}`);a.params.history.keepQuery&&(p+=o.search);const h=r.history.state;h&&h.value===p||(a.params.history.replaceState?r.history.replaceState({value:p},null,p):r.history.pushState({value:p},null,p))},h=(e,t,s)=>{if(t)for(let r=0,l=a.slides.length;r<l;r+=1){const l=a.slides[r];if(i(l.getAttribute("data-history"))===t){const t=a.getSlideIndex(l);a.slideTo(t,e,s)}}else a.slideTo(0,e,s)},d=()=>{o=n(a.params.url),h(a.params.speed,o.value,!1)};r("init",(()=>{a.params.history.enabled&&(()=>{const t=e();if(a.params.history){if(!t.history||!t.history.pushState)return a.params.history.enabled=!1,void(a.params.hashNavigation.enabled=!0);l=!0,o=n(a.params.url),o.key||o.value?(h(0,o.value,a.params.runCallbacksOnInit),a.params.history.replaceState||t.addEventListener("popstate",d)):a.params.history.replaceState||t.addEventListener("popstate",d)}})()})),r("destroy",(()=>{a.params.history.enabled&&(()=>{const t=e();a.params.history.replaceState||t.removeEventListener("popstate",d)})()})),r("transitionEnd _freeModeNoMomentumRelease",(()=>{l&&p(a.params.history.key,a.activeIndex)})),r("slideChange",(()=>{l&&a.params.cssMode&&p(a.params.history.key,a.activeIndex)}))}export{t as default};