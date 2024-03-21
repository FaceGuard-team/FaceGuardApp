import{a as e}from"../shared/ssr-window.esm.mjs";import{e as t,a as i,b as a,i as r}from"../shared/utils.mjs";function s(s){let{swiper:o,extendParams:n,on:l,emit:m}=s;const c=e();n({zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}}),o.zoom={enabled:!1};let d,u,p=1,g=!1;const h=[],E={originX:0,originY:0,slideEl:void 0,slideWidth:void 0,slideHeight:void 0,imageEl:void 0,imageWrapEl:void 0,maxRatio:3},v={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},f={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0};let x=1;function X(){if(h.length<2)return 1;const e=h[0].pageX,t=h[0].pageY,i=h[1].pageX,a=h[1].pageY;return Math.sqrt((i-e)**2+(a-t)**2)}function Y(e){const t=o.isElement?"swiper-slide":`.${o.params.slideClass}`;return!!e.target.matches(t)||o.slides.filter((t=>t.contains(e.target))).length>0}function y(e){if("mouse"===e.pointerType&&h.splice(0,h.length),!Y(e))return;const t=o.params.zoom;if(d=!1,u=!1,h.push(e),!(h.length<2)){if(d=!0,E.scaleStart=X(),!E.slideEl){E.slideEl=e.target.closest(`.${o.params.slideClass}, swiper-slide`),E.slideEl||(E.slideEl=o.slides[o.activeIndex]);let a=E.slideEl.querySelector(`.${t.containerClass}`);if(a&&(a=a.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),E.imageEl=a,E.imageWrapEl=a?i(E.imageEl,`.${t.containerClass}`)[0]:void 0,!E.imageWrapEl)return void(E.imageEl=void 0);E.maxRatio=E.imageWrapEl.getAttribute("data-swiper-zoom")||t.maxRatio}if(E.imageEl){const[e,t]=function(){if(h.length<2)return{x:null,y:null};const e=E.imageEl.getBoundingClientRect();return[(h[0].pageX+(h[1].pageX-h[0].pageX)/2-e.x-c.scrollX)/p,(h[0].pageY+(h[1].pageY-h[0].pageY)/2-e.y-c.scrollY)/p]}();E.originX=e,E.originY=t,E.imageEl.style.transitionDuration="0ms"}g=!0}}function z(e){if(!Y(e))return;const t=o.params.zoom,i=o.zoom,a=h.findIndex((t=>t.pointerId===e.pointerId));a>=0&&(h[a]=e),h.length<2||(u=!0,E.scaleMove=X(),E.imageEl&&(i.scale=E.scaleMove/E.scaleStart*p,i.scale>E.maxRatio&&(i.scale=E.maxRatio-1+(i.scale-E.maxRatio+1)**.5),i.scale<t.minRatio&&(i.scale=t.minRatio+1-(t.minRatio-i.scale+1)**.5),E.imageEl.style.transform=`translate3d(0,0,0) scale(${i.scale})`))}function C(e){if(!Y(e))return;if("mouse"===e.pointerType&&"pointerout"===e.type)return;const t=o.params.zoom,i=o.zoom,a=h.findIndex((t=>t.pointerId===e.pointerId));a>=0&&h.splice(a,1),d&&u&&(d=!1,u=!1,E.imageEl&&(i.scale=Math.max(Math.min(i.scale,E.maxRatio),t.minRatio),E.imageEl.style.transitionDuration=`${o.params.speed}ms`,E.imageEl.style.transform=`translate3d(0,0,0) scale(${i.scale})`,p=i.scale,g=!1,i.scale>1&&E.slideEl?E.slideEl.classList.add(`${t.zoomedSlideClass}`):i.scale<=1&&E.slideEl&&E.slideEl.classList.remove(`${t.zoomedSlideClass}`),1===i.scale&&(E.originX=0,E.originY=0,E.slideEl=void 0)))}function M(e){if(!Y(e)||!function(e){const t=`.${o.params.zoom.containerClass}`;return!!e.target.matches(t)||[...o.hostEl.querySelectorAll(t)].filter((t=>t.contains(e.target))).length>0}(e))return;const t=o.zoom;if(!E.imageEl)return;if(!v.isTouched||!E.slideEl)return;v.isMoved||(v.width=E.imageEl.offsetWidth,v.height=E.imageEl.offsetHeight,v.startX=r(E.imageWrapEl,"x")||0,v.startY=r(E.imageWrapEl,"y")||0,E.slideWidth=E.slideEl.offsetWidth,E.slideHeight=E.slideEl.offsetHeight,E.imageWrapEl.style.transitionDuration="0ms");const i=v.width*t.scale,a=v.height*t.scale;if(i<E.slideWidth&&a<E.slideHeight)return;v.minX=Math.min(E.slideWidth/2-i/2,0),v.maxX=-v.minX,v.minY=Math.min(E.slideHeight/2-a/2,0),v.maxY=-v.minY,v.touchesCurrent.x=h.length>0?h[0].pageX:e.pageX,v.touchesCurrent.y=h.length>0?h[0].pageY:e.pageY;if(Math.max(Math.abs(v.touchesCurrent.x-v.touchesStart.x),Math.abs(v.touchesCurrent.y-v.touchesStart.y))>5&&(o.allowClick=!1),!v.isMoved&&!g){if(o.isHorizontal()&&(Math.floor(v.minX)===Math.floor(v.startX)&&v.touchesCurrent.x<v.touchesStart.x||Math.floor(v.maxX)===Math.floor(v.startX)&&v.touchesCurrent.x>v.touchesStart.x))return void(v.isTouched=!1);if(!o.isHorizontal()&&(Math.floor(v.minY)===Math.floor(v.startY)&&v.touchesCurrent.y<v.touchesStart.y||Math.floor(v.maxY)===Math.floor(v.startY)&&v.touchesCurrent.y>v.touchesStart.y))return void(v.isTouched=!1)}e.cancelable&&e.preventDefault(),e.stopPropagation(),v.isMoved=!0;const s=(t.scale-p)/(E.maxRatio-o.params.zoom.minRatio),{originX:n,originY:l}=E;v.currentX=v.touchesCurrent.x-v.touchesStart.x+v.startX+s*(v.width-2*n),v.currentY=v.touchesCurrent.y-v.touchesStart.y+v.startY+s*(v.height-2*l),v.currentX<v.minX&&(v.currentX=v.minX+1-(v.minX-v.currentX+1)**.8),v.currentX>v.maxX&&(v.currentX=v.maxX-1+(v.currentX-v.maxX+1)**.8),v.currentY<v.minY&&(v.currentY=v.minY+1-(v.minY-v.currentY+1)**.8),v.currentY>v.maxY&&(v.currentY=v.maxY-1+(v.currentY-v.maxY+1)**.8),f.prevPositionX||(f.prevPositionX=v.touchesCurrent.x),f.prevPositionY||(f.prevPositionY=v.touchesCurrent.y),f.prevTime||(f.prevTime=Date.now()),f.x=(v.touchesCurrent.x-f.prevPositionX)/(Date.now()-f.prevTime)/2,f.y=(v.touchesCurrent.y-f.prevPositionY)/(Date.now()-f.prevTime)/2,Math.abs(v.touchesCurrent.x-f.prevPositionX)<2&&(f.x=0),Math.abs(v.touchesCurrent.y-f.prevPositionY)<2&&(f.y=0),f.prevPositionX=v.touchesCurrent.x,f.prevPositionY=v.touchesCurrent.y,f.prevTime=Date.now(),E.imageWrapEl.style.transform=`translate3d(${v.currentX}px, ${v.currentY}px,0)`}function w(){const e=o.zoom;E.slideEl&&o.activeIndex!==o.slides.indexOf(E.slideEl)&&(E.imageEl&&(E.imageEl.style.transform="translate3d(0,0,0) scale(1)"),E.imageWrapEl&&(E.imageWrapEl.style.transform="translate3d(0,0,0)"),E.slideEl.classList.remove(`${o.params.zoom.zoomedSlideClass}`),e.scale=1,p=1,E.slideEl=void 0,E.imageEl=void 0,E.imageWrapEl=void 0,E.originX=0,E.originY=0)}function b(e){const r=o.zoom,s=o.params.zoom;if(!E.slideEl){e&&e.target&&(E.slideEl=e.target.closest(`.${o.params.slideClass}, swiper-slide`)),E.slideEl||(o.params.virtual&&o.params.virtual.enabled&&o.virtual?E.slideEl=t(o.slidesEl,`.${o.params.slideActiveClass}`)[0]:E.slideEl=o.slides[o.activeIndex]);let a=E.slideEl.querySelector(`.${s.containerClass}`);a&&(a=a.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),E.imageEl=a,E.imageWrapEl=a?i(E.imageEl,`.${s.containerClass}`)[0]:void 0}if(!E.imageEl||!E.imageWrapEl)return;let n,l,m,d,u,g,h,f,x,X,Y,y,z,C,M,w,b,W;o.params.cssMode&&(o.wrapperEl.style.overflow="hidden",o.wrapperEl.style.touchAction="none"),E.slideEl.classList.add(`${s.zoomedSlideClass}`),void 0===v.touchesStart.x&&e?(n=e.pageX,l=e.pageY):(n=v.touchesStart.x,l=v.touchesStart.y);const S="number"==typeof e?e:null;1===p&&S&&(n=void 0,l=void 0),r.scale=S||E.imageWrapEl.getAttribute("data-swiper-zoom")||s.maxRatio,p=S||E.imageWrapEl.getAttribute("data-swiper-zoom")||s.maxRatio,!e||1===p&&S?(h=0,f=0):(b=E.slideEl.offsetWidth,W=E.slideEl.offsetHeight,m=a(E.slideEl).left+c.scrollX,d=a(E.slideEl).top+c.scrollY,u=m+b/2-n,g=d+W/2-l,x=E.imageEl.offsetWidth,X=E.imageEl.offsetHeight,Y=x*r.scale,y=X*r.scale,z=Math.min(b/2-Y/2,0),C=Math.min(W/2-y/2,0),M=-z,w=-C,h=u*r.scale,f=g*r.scale,h<z&&(h=z),h>M&&(h=M),f<C&&(f=C),f>w&&(f=w)),S&&1===r.scale&&(E.originX=0,E.originY=0),E.imageWrapEl.style.transitionDuration="300ms",E.imageWrapEl.style.transform=`translate3d(${h}px, ${f}px,0)`,E.imageEl.style.transitionDuration="300ms",E.imageEl.style.transform=`translate3d(0,0,0) scale(${r.scale})`}function W(){const e=o.zoom,a=o.params.zoom;if(!E.slideEl){o.params.virtual&&o.params.virtual.enabled&&o.virtual?E.slideEl=t(o.slidesEl,`.${o.params.slideActiveClass}`)[0]:E.slideEl=o.slides[o.activeIndex];let e=E.slideEl.querySelector(`.${a.containerClass}`);e&&(e=e.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),E.imageEl=e,E.imageWrapEl=e?i(E.imageEl,`.${a.containerClass}`)[0]:void 0}E.imageEl&&E.imageWrapEl&&(o.params.cssMode&&(o.wrapperEl.style.overflow="",o.wrapperEl.style.touchAction=""),e.scale=1,p=1,E.imageWrapEl.style.transitionDuration="300ms",E.imageWrapEl.style.transform="translate3d(0,0,0)",E.imageEl.style.transitionDuration="300ms",E.imageEl.style.transform="translate3d(0,0,0) scale(1)",E.slideEl.classList.remove(`${a.zoomedSlideClass}`),E.slideEl=void 0,E.originX=0,E.originY=0)}function S(e){const t=o.zoom;t.scale&&1!==t.scale?W():b(e)}function $(){return{passiveListener:!!o.params.passiveListeners&&{passive:!0,capture:!1},activeListenerWithCapture:!o.params.passiveListeners||{passive:!1,capture:!0}}}function L(){const e=o.zoom;if(e.enabled)return;e.enabled=!0;const{passiveListener:t,activeListenerWithCapture:i}=$();o.wrapperEl.addEventListener("pointerdown",y,t),o.wrapperEl.addEventListener("pointermove",z,i),["pointerup","pointercancel","pointerout"].forEach((e=>{o.wrapperEl.addEventListener(e,C,t)})),o.wrapperEl.addEventListener("pointermove",M,i)}function R(){const e=o.zoom;if(!e.enabled)return;e.enabled=!1;const{passiveListener:t,activeListenerWithCapture:i}=$();o.wrapperEl.removeEventListener("pointerdown",y,t),o.wrapperEl.removeEventListener("pointermove",z,i),["pointerup","pointercancel","pointerout"].forEach((e=>{o.wrapperEl.removeEventListener(e,C,t)})),o.wrapperEl.removeEventListener("pointermove",M,i)}Object.defineProperty(o.zoom,"scale",{get:()=>x,set(e){if(x!==e){const t=E.imageEl,i=E.slideEl;m("zoomChange",e,t,i)}x=e}}),l("init",(()=>{o.params.zoom.enabled&&L()})),l("destroy",(()=>{R()})),l("touchStart",((e,t)=>{o.zoom.enabled&&function(e){const t=o.device;if(!E.imageEl)return;if(v.isTouched)return;t.android&&e.cancelable&&e.preventDefault(),v.isTouched=!0;const i=h.length>0?h[0]:e;v.touchesStart.x=i.pageX,v.touchesStart.y=i.pageY}(t)})),l("touchEnd",((e,t)=>{o.zoom.enabled&&function(){const e=o.zoom;if(!E.imageEl)return;if(!v.isTouched||!v.isMoved)return v.isTouched=!1,void(v.isMoved=!1);v.isTouched=!1,v.isMoved=!1;let t=300,i=300;const a=f.x*t,r=v.currentX+a,s=f.y*i,n=v.currentY+s;0!==f.x&&(t=Math.abs((r-v.currentX)/f.x)),0!==f.y&&(i=Math.abs((n-v.currentY)/f.y));const l=Math.max(t,i);v.currentX=r,v.currentY=n;const m=v.width*e.scale,c=v.height*e.scale;v.minX=Math.min(E.slideWidth/2-m/2,0),v.maxX=-v.minX,v.minY=Math.min(E.slideHeight/2-c/2,0),v.maxY=-v.minY,v.currentX=Math.max(Math.min(v.currentX,v.maxX),v.minX),v.currentY=Math.max(Math.min(v.currentY,v.maxY),v.minY),E.imageWrapEl.style.transitionDuration=`${l}ms`,E.imageWrapEl.style.transform=`translate3d(${v.currentX}px, ${v.currentY}px,0)`}()})),l("doubleTap",((e,t)=>{!o.animating&&o.params.zoom.enabled&&o.zoom.enabled&&o.params.zoom.toggle&&S(t)})),l("transitionEnd",(()=>{o.zoom.enabled&&o.params.zoom.enabled&&w()})),l("slideChange",(()=>{o.zoom.enabled&&o.params.zoom.enabled&&o.params.cssMode&&w()})),Object.assign(o.zoom,{enable:L,disable:R,in:b,out:W,toggle:S})}export{s as default};