const t={btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]"),bodyColor:document.querySelector("body")};let o;function e(){const o=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;t.bodyColor.style.backgroundColor=o}t.btnStart.addEventListener("click",(function(){t.btnStart.disabled=!0,o=setInterval((()=>{e()}),1e3)})),t.btnStop.addEventListener("click",(function(e){t.btnStart.disabled=!1,clearInterval(o)})),e();
//# sourceMappingURL=01-color-switcher.d2e7515c.js.map