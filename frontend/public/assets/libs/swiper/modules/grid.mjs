function e(e){let i,r,a,t,{swiper:s,extendParams:l,on:o}=e;l({grid:{rows:1,fill:"column"}});const n=()=>{let e=s.params.spaceBetween;return"string"==typeof e&&e.indexOf("%")>=0?e=parseFloat(e.replace("%",""))/100*s.size:"string"==typeof e&&(e=parseFloat(e)),e};o("init",(()=>{t=s.params.grid&&s.params.grid.rows>1})),o("update",(()=>{const{params:e,el:i}=s,r=e.grid&&e.grid.rows>1;t&&!r?(i.classList.remove(`${e.containerModifierClass}grid`,`${e.containerModifierClass}grid-column`),a=1,s.emitContainerClasses()):!t&&r&&(i.classList.add(`${e.containerModifierClass}grid`),"column"===e.grid.fill&&i.classList.add(`${e.containerModifierClass}grid-column`),s.emitContainerClasses()),t=r})),s.grid={initSlides:e=>{const{slidesPerView:t}=s.params,{rows:l,fill:o}=s.params.grid,n=s.virtual&&s.params.virtual.enabled?s.virtual.slides.length:e.length;a=Math.floor(n/l),i=Math.floor(n/l)===n/l?n:Math.ceil(n/l)*l,"auto"!==t&&"row"===o&&(i=Math.max(i,t*l)),r=i/l},unsetSlides:()=>{s.slides&&s.slides.forEach((e=>{e.swiperSlideGridSet&&(e.style.height="",e.style[s.getDirectionLabel("margin-top")]="")}))},updateSlide:(e,t,l)=>{const{slidesPerGroup:o}=s.params,d=n(),{rows:p,fill:c}=s.params.grid,g=s.virtual&&s.params.virtual.enabled?s.virtual.slides.length:l.length;let u,h,m;if("row"===c&&o>1){const r=Math.floor(e/(o*p)),a=e-p*o*r,s=0===r?o:Math.min(Math.ceil((g-r*p*o)/p),o);m=Math.floor(a/s),h=a-m*s+r*o,u=h+m*i/p,t.style.order=u}else"column"===c?(h=Math.floor(e/p),m=e-h*p,(h>a||h===a&&m===p-1)&&(m+=1,m>=p&&(m=0,h+=1))):(m=Math.floor(e/r),h=e-m*r);t.row=m,t.column=h,t.style.height=`calc((100% - ${(p-1)*d}px) / ${p})`,t.style[s.getDirectionLabel("margin-top")]=0!==m?d&&`${d}px`:"",t.swiperSlideGridSet=!0},updateWrapperSize:(e,r)=>{const{centeredSlides:a,roundLengths:t}=s.params,l=n(),{rows:o}=s.params.grid;if(s.virtualSize=(e+l)*i,s.virtualSize=Math.ceil(s.virtualSize/o)-l,s.params.cssMode||(s.wrapperEl.style[s.getDirectionLabel("width")]=`${s.virtualSize+l}px`),a){const e=[];for(let i=0;i<r.length;i+=1){let a=r[i];t&&(a=Math.floor(a)),r[i]<s.virtualSize+r[0]&&e.push(a)}r.splice(0,r.length),r.push(...e)}}}}export{e as default};