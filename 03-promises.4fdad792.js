var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var r=n[e];delete n[e];var t={id:e,exports:{}};return o[e]=t,r.call(t.exports,t,t.exports),t.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},e.parcelRequired7c6=r);var t=r("iQIUW");function i(e,o){const n=Math.random()>.3;return new Promise(((r,t)=>{setTimeout((()=>{n?r({position:e,delay:o}):t({position:e,delay:o})}),o)}))}({formEl:document.querySelector(".form")}).formEl.addEventListener("submit",(function(e){e.preventDefault();let o=0,n=Number(document.querySelector('[name="delay"]').value);const r=Number(document.querySelector('[name="step"]').value),l=document.querySelector('[name="amount"]').value;if(n<0||r<0||l<=0)return void t.Notify.failure("❌ Choose proper values");for(let e=0;e<l;e+=1)o+=1,i(o,n).then((({position:e,delay:o})=>{t.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`),console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{t.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`),console.log(`❌ Rejected promise ${e} in ${o}ms`)})),n+=r}));
//# sourceMappingURL=03-promises.4fdad792.js.map