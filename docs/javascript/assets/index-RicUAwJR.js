import"./header-5XQfsaxG.js";import"./navbar-CTA9t9xq.js";const a={username:"John Doe",time:1727458711867,text:"Welcome! You can reply to the comments. But you can't delete the initial comment.",counter:1,parentCounter:0,comments:{0:{username:"User 1",text:"You can reply nested or delete any comment. You can edit the existing comments.",counter:1,parentCounter:0,comments:{0:{username:"User 2",text:"Refresh & see the changes persist. You can reset the comments to the initial state",counter:0,parentCounter:0,comments:{}}}}}},l=localStorage.getItem("state"),q=JSON.parse(l||JSON.stringify(a)),d=document.querySelector("#comment-template");function p({username:e,text:t}){const o=d.content.cloneNode(!0);return o.querySelector(".username").textContent=e,o.querySelector(".comment-text").innerText=t,o.querySelector(".user-info").classList.remove("hide"),s(o),o}function h(){const e=d.content.cloneNode(!0);return e.querySelector(".username-input").classList.remove("hide"),L(e),e}function s(e){const t=e.querySelector(".comment-text");t.contentEditable=!1,t.classList.remove("editable"),e.querySelector(".reply").classList.remove("hide"),e.querySelector(".delete").classList.remove("hide"),e.querySelector(".edit").classList.remove("hide"),e.querySelector(".submit").classList.add("hide"),e.querySelector(".cancel").classList.add("hide")}function x(e){const t=e.querySelector(".comment-text");t.contentEditable=!0,t.classList.add("editable"),t.focus(),e.querySelector(".reply").classList.add("hide"),e.querySelector(".delete").classList.add("hide"),e.querySelector(".edit").classList.add("hide"),e.querySelector(".submit").classList.remove("hide"),e.querySelector(".cancel").classList.remove("hide")}function L(e){e.querySelector(".comment-text").contentEditable=!0,e.querySelector(".comment-text").classList.add("editable"),e.querySelector(".comment-text").focus(),e.querySelector(".username-input").classList.remove("hide"),e.querySelector(".cancel").classList.remove("hide"),e.querySelector(".submit").classList.remove("hide")}const m=document.querySelector("#commentContainer");document.querySelector("#comment-template");const f=document.querySelector("#reset");let c;function i(e,t,o){e.querySelector(":scope > .sub-comments").appendChild(p({username:t.username,text:t.text}));const r=e.querySelector(":scope > .sub-comments > .comment-wrapper:last-child");return r.querySelector(".profile-pic").src=`https://i.pravatar.cc/32?u=${t.username}`,r.querySelector(".reply").addEventListener("click",()=>{r.querySelector(":scope > .sub-comments > .new-comment")||v(r,t)}),o&&(r.querySelector(".delete").addEventListener("click",()=>{r.remove(),delete o.comments[t.parentCounter]}),r.querySelector(".edit").addEventListener("click",()=>{x(r)}),r.querySelector(".cancel").addEventListener("click",()=>{r.querySelector(".comment-text").innerText=t.text,s(r)}),r.querySelector(".submit").addEventListener("click",()=>{const n=r.querySelector(".comment-text").innerText;n&&(t.text=n,r.querySelector(".comment-text").innerText=n,s(r))})),r}function v(e,t){e.querySelector(":scope > .sub-comments").appendChild(h());const o=e.querySelector(":scope > .sub-comments > .comment-wrapper:last-child");o.classList.add("new-comment"),o.querySelector(".cancel").addEventListener("click",()=>{o.remove()}),o.querySelector(".submit").addEventListener("click",()=>{const r=o.querySelector(".username-input").value,n=o.querySelector(".comment-text").innerText;if(!r||!n)return;const u={username:r,text:n,counter:0,parentCounter:t.counter,comments:{}};i(e,u,t),t.comments[t.counter++]=u,o.remove()})}function y(e,t){for(const o of Object.values(t.comments)){const r=i(e,o,t);o.comments&&y(r,o)}}function S(e=a){m.querySelector(".sub-comments").innerHTML="",c=e;const t=i(m,c);y(t,c)}f.addEventListener("click",()=>S());window.addEventListener("beforeunload",()=>{localStorage.setItem("state",JSON.stringify(c))});S(q);
