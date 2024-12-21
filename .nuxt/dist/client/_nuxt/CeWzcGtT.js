import{Z as w,f as S,ai as b,aj as A,h as x,a3 as C,ak as T,a8 as N,al as j,am as P}from"./CiZ-0I0J.js";const B=Object.freeze({left:0,top:0,width:16,height:16}),R=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),z=Object.freeze({...B,...R});Object.freeze({...z,body:"",hidden:!1});function E(e,s){let n=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const o in s)n+=" "+o+'="'+s[o]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}const L=/(-?[0-9.]*[0-9]+[0-9.]*)/g,M=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function v(e,s,n){if(s===1)return e;if(n=n||100,typeof e=="number")return Math.ceil(e*s*n)/n;if(typeof e!="string")return e;const o=e.split(L);if(o===null||!o.length)return e;const t=[];let r=o.shift(),i=M.test(r);for(;;){if(i){const c=parseFloat(r);isNaN(c)?t.push(r):t.push(Math.ceil(c*s*n)/n)}else t.push(r);if(r=o.shift(),r===void 0)return t.join("");i=!i}}function V(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function W(e){return"data:image/svg+xml,"+V(e)}function _(e){return'url("'+W(e)+'")'}function D(e){const[s,n,o,t]=e;if(o!==t){const r=Math.max(o,t);return[s-(r-o)/2,n-(r-t)/2,r,r]}return e}const G=Object.freeze({width:null,height:null}),H=Object.freeze({...G,...R});function U(e,s="defs"){let n="";const o=e.indexOf("<"+s);for(;o>=0;){const t=e.indexOf(">",o),r=e.indexOf("</"+s);if(t===-1||r===-1)break;const i=e.indexOf(">",r);if(i===-1)break;n+=e.slice(t+1,r).trim(),e=e.slice(0,o).trim()+e.slice(i+1)}return{defs:n,content:e}}function K(e,s){return e?"<defs>"+e+"</defs>"+s:s}function Z(e,s,n){const o=U(e);return K(o.defs,s+o.content+n)}const J=e=>e==="unset"||e==="undefined"||e==="none";function Q(e,s){const n={...z,...e},o={...H,...s},t={left:n.left,top:n.top,width:n.width,height:n.height};let r=n.body;[n,o].forEach(g=>{const f=[],F=g.hFlip,O=g.vFlip;let h=g.rotate;F?O?h+=2:(f.push("translate("+(t.width+t.left).toString()+" "+(0-t.top).toString()+")"),f.push("scale(-1 1)"),t.top=t.left=0):O&&(f.push("translate("+(0-t.left).toString()+" "+(t.height+t.top).toString()+")"),f.push("scale(1 -1)"),t.top=t.left=0);let m;switch(h<0&&(h-=Math.floor(h/4)*4),h=h%4,h){case 1:m=t.height/2+t.top,f.unshift("rotate(90 "+m.toString()+" "+m.toString()+")");break;case 2:f.unshift("rotate(180 "+(t.width/2+t.left).toString()+" "+(t.height/2+t.top).toString()+")");break;case 3:m=t.width/2+t.left,f.unshift("rotate(-90 "+m.toString()+" "+m.toString()+")");break}h%2===1&&(t.left!==t.top&&(m=t.left,t.left=t.top,t.top=m),t.width!==t.height&&(m=t.width,t.width=t.height,t.height=m)),f.length&&(r=Z(r,'<g transform="'+f.join(" ")+'">',"</g>"))});const i=o.width,c=o.height,a=t.width,l=t.height;let u,d;i===null?(d=c===null?"1em":c==="auto"?l:c,u=v(d,a/l)):(u=i==="auto"?a:i,d=c===null?v(u,l/a):c==="auto"?l:c);const y={},I=(g,f)=>{J(f)||(y[g]=f.toString())};I("width",u),I("height",d);const $=[t.left,t.top,a,l];return y.viewBox=$.join(" "),{attributes:y,viewBox:$,body:r}}function X(e){const s={display:"inline-block",width:"1em",height:"1em"},n=e.varName;switch(e.pseudoSelector&&(s.content="''"),e.mode){case"background":n&&(s["background-image"]="var(--"+n+")"),s["background-repeat"]="no-repeat",s["background-size"]="100% 100%";break;case"mask":s["background-color"]="currentColor",n&&(s["mask-image"]=s["-webkit-mask-image"]="var(--"+n+")"),s["mask-repeat"]=s["-webkit-mask-repeat"]="no-repeat",s["mask-size"]=s["-webkit-mask-size"]="100% 100%";break}return s}function Y(e,s){const n={},o=s.varName,t=Q(e);let r=t.viewBox;r[2]!==r[3]&&(s.forceSquare?r=D(r):n.width=v("1em",r[2]/r[3]));const i=E(t.body.replace(/currentColor/g,s.color||"black"),{viewBox:`${r[0]} ${r[1]} ${r[2]} ${r[3]}`,width:`${r[2]}`,height:`${r[3]}`}),c=_(i);if(o)n["--"+o]=c;else switch(s.mode){case"background":n["background-image"]=c;break;case"mask":n["mask-image"]=n["-webkit-mask-image"]=c;break}return n}const k={selectorStart:{compressed:"{",compact:" {",expanded:" {"},selectorEnd:{compressed:"}",compact:`; }
`,expanded:`;
}
`},rule:{compressed:"{key}:",compact:" {key}: ",expanded:`
  {key}: `}};function ee(e,s="expanded"){const n=[];for(let o=0;o<e.length;o++){const{selector:t,rules:r}=e[o];let c=(t instanceof Array?t.join(s==="compressed"?",":", "):t)+k.selectorStart[s],a=!0;for(const l in r)a||(c+=";"),c+=k.rule[s].replace("{key}",l)+r[l],a=!1;c+=k.selectorEnd[s],n.push(c)}return n.join(s==="compressed"?"":`
`)}function te(e,s={}){const n=s.customise?s.customise(e.body):e.body,o=s.mode||(s.color||!n.includes("currentColor")?"background":"mask");let t=s.varName;t===void 0&&o==="mask"&&(t="svg");const r={...s,mode:o,varName:t};o==="background"&&delete r.varName;const i={...s.rules,...X(r),...Y({...z,...e,body:n},r)},c=s.iconSelector||".icon";return ee([{selector:c,rules:i}],r.format)}async function ne(e,s){if(!e)return null;const n=b(e);return n||(await A(e).catch(()=>(console.warn(`[Icon] failed to load icon \`${e}\``),null)),b(e))}function q(e){const s=w().icon,n=(s.collections||[]).sort((o,t)=>t.length-o.length);return S(()=>{var i;const o=e(),t=o.startsWith(s.cssSelectorPrefix)?o.slice(s.cssSelectorPrefix.length):o,r=((i=s.aliases)==null?void 0:i[t])||t;if(!r.includes(":")){const c=n.find(a=>r.startsWith(a+"-"));return c?c+":"+r.slice(c.length+1):r}return r})}let p;function se(e){return e.replace(/([^\w-])/g,"\\$1")}function oe(){if(p)return p;p=new Set;const e=n=>{if(n=n.replace(/^:where\((.*)\)$/,"$1").trim(),n.startsWith("."))return n},s=n=>{if(n!=null&&n.length)for(const o of n){o!=null&&o.cssRules&&s(o.cssRules);const t=o==null?void 0:o.selectorText;if(typeof t=="string"){const r=e(t);r&&p.add(r)}}};if(typeof document<"u")for(const n of document.styleSheets)try{const o=n.cssRules||n.rules;s(o)}catch{}return p}const re=x({name:"NuxtIconCss",props:{name:{type:String,required:!0},customize:{type:Function,required:!1}},setup(e){const s=C(),n=w().icon,o=S(()=>e.name?n.cssSelectorPrefix+e.name:"");function t(c){var u,d;if(!c)return;const a=b(c);if(a)return a;const l=(d=(u=s.payload)==null?void 0:u.data)==null?void 0:d[c];if(l)return j(c,l),l}const r=S(()=>"."+se(o.value));function i(c,a=!0){let l=r.value;n.cssWherePseudo&&(l=`:where(${l})`);const u=te(c,{iconSelector:l,format:"compressed",customise:e.customize??n.customize});return n.cssLayer&&a?`@layer ${n.cssLayer} { ${u} }`:u}{const c=oe();async function a(l){if(c.has(r.value)||typeof document>"u")return;const u=document.createElement("style");u.textContent=i(l);const d=document.head.querySelector('style, link[rel="stylesheet"]');d?document.head.insertBefore(u,d):document.head.appendChild(u),c.add(r.value)}T(()=>e.name,()=>{if(c.has(r.value))return;const l=t(e.name);l?a(l):ne(e.name).then(u=>{u&&a(u)}).catch(()=>null)},{immediate:!0})}return()=>N("span",{class:["iconify",o.value]})}}),ce=x({name:"NuxtIconSvg",props:{name:{type:String,required:!0},customize:{type:Function,required:!1}},setup(e,{slots:s}){const n=C(),o=w().icon,t=q(()=>e.name),r="i-"+t.value;if(t.value){const i=n.payload.data[r];i&&j(t.value,i)}return()=>N(P,{icon:t.value,ssr:!0,customise:e.customize??o.customize},s)}}),ae=x({name:"NuxtIcon",props:{name:{type:String,required:!0},mode:{type:String,required:!1,default:null},size:{type:[Number,String],required:!1,default:null},customize:{type:Function,required:!1}},setup(e,{slots:s}){const n=C(),o=w().icon,t=q(()=>e.name),r=S(()=>{var a;return((a=n.vueApp)==null?void 0:a.component(t.value))||((e.mode||o.mode)==="svg"?ce:re)}),i=S(()=>{const a=e.size||o.size;return a?{fontSize:Number.isNaN(+a)?a:a+"px"}:null}),c=e.customize||o.customize;return()=>N(r.value,{...o.attrs,name:t.value,class:o.class,style:i.value,customize:c},s)}});export{ae as default};
