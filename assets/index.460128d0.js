const v=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}};v();document.querySelector("#app").innerHTML=`
  <h1>Coming soon...</h1>
  <canvas id="main-canvas"></canvas>
`;var u=10;let a=0;function f(s){var t=document.getElementById(s),o=t.offsetWidth,i=t.offsetHeight;t.width=o,t.height=i}function c(s){var t=document.getElementById(s),o=t.getContext("2d");o.clearRect(0,0,t.width,t.height),o.beginPath();let i=0;for(var e=30;e<45;e++)for(var n=0;n<Math.PI*2*200;n++){i=n/200;let r=Math.sin(-i)*e/10*(Math.sin(a*1)+20)/20,M=Math.cos(i)*e/10*(Math.sin(a*1)+20)/20,l=Math.sin(i*4+e+Math.sin(a))*10+Math.sin(a/2),h=Math.sin(i*7+e/3+Math.sin(a/2))*10+Math.sin(a/2),d=Math.sin(i*8+e/3+Math.sin(a/2))*1,g=Math.sin((e-30)/50)+0;o.fillStyle=`rgba(255, 255, 255,${g})`,o.fillRect(t.width/2+(r*Math.max(Math.min(t.width/10,t.height/10),50)+l+h+d)/1.5,t.height/2+(M*Math.max(Math.min(t.width/10,t.height/10),50)+l+h+d)/1.5,(2*Math.sin(a/2)+8)/2,Math.sin(a/3)+2)}o.stroke(),a=Date.now()/1e3}function m(){c("main-canvas"),setTimeout(m,u)}function y(){f("main-canvas"),c("main-canvas"),setTimeout(m,u)}function p(){f("main-canvas"),c("main-canvas")}window.onload=y;window.onresize=p;