import{e}from"../shared/effect-init.mjs";import{e as s}from"../shared/effect-target.mjs";import{e as a}from"../shared/effect-virtual-transition-end.mjs";import{l as t}from"../shared/utils.mjs";function r(r){let{swiper:i,extendParams:o,on:l}=r;o({fadeEffect:{crossFade:!1}});e({effect:"fade",swiper:i,on:l,setTranslate:()=>{const{slides:e}=i,a=i.params.fadeEffect;for(let t=0;t<e.length;t+=1){const e=i.slides[t];let r=-e.swiperSlideOffset;i.params.virtualTranslate||(r-=i.translate);let o=0;i.isHorizontal()||(o=r,r=0);const l=i.params.fadeEffect.crossFade?Math.max(1-Math.abs(e.progress),0):1+Math.min(Math.max(e.progress,-1),0),n=s(a,e);n.style.opacity=l,n.style.transform=`translate3d(${r}px, ${o}px, 0px)`}},setTransition:e=>{const s=i.slides.map((e=>t(e)));s.forEach((s=>{s.style.transitionDuration=`${e}ms`})),a({swiper:i,duration:e,transformElements:s,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!i.params.cssMode})})}export{r as default};