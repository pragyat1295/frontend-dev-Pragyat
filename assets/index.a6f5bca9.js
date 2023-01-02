(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function a(e,o){const t=Date.now();let l=[];const i=window.performance.now();(!e||e.length==0||!o||o.length==0)&&console.error("No data provided"),l=e.concat(o);const s=Date.now()-t;return console.log("Merge duration: ",s),console.log("Merge duration in microSec: ",window.performance.now()-i),l}function v(e){return e.replace(" ","<br>")}function u(e){const[o,t]=e.split("T"),[l,i]=t.split(".");return o+"<br>"+l}function n(e,o,t){typeof e!="number"&&typeof o!="number"?console.error("the variable should always be a number"):console.log("Test case passed... the variables are the numbers"),t.length===0||!t?console.error("No data provided"):console.log("Test case passed... getting data in loadData function");for(let l=e;l<o;l++)document.querySelector("#t_body").innerHTML+=`
        <div class="table-row" id = ${"row"+l}>
             <div class = "table-col">${l+1}</div>
             <div class = "table-col"><img class="img" src="/img.webp" width="64" height="40" /></div>
             <div class = "table-col" id = "filterName"> ${v(t[l].name)} </div> 
            <div class = "table-col"> ${t[l].theme}</div>
            <div class = "table-col"> ${t[l].type} </div>
            <div class = "table-col"> ${t[l].cost}</div>
            <div class = "table-col">${t[l].est_cust}</div>
            <div class = "table-col">${t[l].maintenance_time}</div>
            
            <div class = "table-col">${t[l].eworkers}</div>
            <div class = "table-col">${u(t[l].updated_at)}</div>
        </div>
            
        `}function f(e){e.length===0||!e?console.error("No data provided"):console.log("Test case passed... getting data in fetcher");let o=0,t=10;n(0,10,e),window.addEventListener("scroll",()=>{window.scrollY+window.innerHeight>=document.documentElement.scrollHeight&&(o+=10,t+=10,n(o,t,e))})}document.querySelector("#app").innerHTML=`
  <div id="app">
  
    <div class = "table-row">
      <div class = "table-col head" >S.No.</div>
      <div class = "table-col head" >Image</div>
      <div class = "table-col head" >Name</div>
      <div class = "table-col head" >Theme</div>
      <div class = "table-col head" >Type</div>
      <div class = "table-col head" >Cost</div>
      <div class = "table-col head" >Estimated<br>Customers</div>
      <div class = "table-col head" >Maintenance<br>Time</div>
      <div class = "table-col head" >Workers<br>Required</div>
      <div class = "table-col head" >Updated</div>
    </div>  
  
  
    <div  id = t_body>
    </div>


  </div>
`;let d=[],c=[];d3.tsv("./data1.tsv",function(e){for(let o=0;o<e.length;o++)d.push(e[o]);h()});function h(){fetch("./data2.json").then(e=>e.json()).then(e=>{for(let t=0;t<e.length;t++)c.push(e[t]);let o=a(d,c);f(o)}).catch(e=>console.log(e))}
