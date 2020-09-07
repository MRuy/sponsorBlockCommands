var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function o(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e,...n){if(null==e)return t;const s=e.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}function l(t){let e;return i(t,t=>e=t)(),e}function a(t,e,n){t.$$.on_destroy.push(i(e,n))}function c(t,e,n=e){return t.set(n),e}function u(t,e){t.appendChild(e)}function d(t,e,n){t.insertBefore(e,n||null)}function p(t){t.parentNode.removeChild(t)}function f(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function m(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function h(){return v(" ")}function I(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function U(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function S(t,e){t.value=null==e?"":e}function $(t,e,n){t.classList[n?"add":"remove"](e)}let b;function R(t){b=t}function D(t){(function(){if(!b)throw new Error("Function called outside component initialization");return b})().$$.on_mount.push(t)}const y=[],w=[],O=[],N=[],C=Promise.resolve();let x=!1;function E(t){O.push(t)}let _=!1;const k=new Set;function A(){if(!_){_=!0;do{for(let t=0;t<y.length;t+=1){const e=y[t];R(e),L(e.$$)}for(y.length=0;w.length;)w.pop()();for(let t=0;t<O.length;t+=1){const e=O[t];k.has(e)||(k.add(e),e())}O.length=0}while(y.length);for(;N.length;)N.pop()();x=!1,_=!1,k.clear()}}function L(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const G=new Set;let T;function K(t,e){t&&t.i&&(G.delete(t),t.i(e))}function W(t,e,n,s){if(t&&t.o){if(G.has(t))return;G.add(t),T.c.push(()=>{G.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}function P(t){t&&t.c()}function q(t,n,r){const{fragment:i,on_mount:l,on_destroy:a,after_update:c}=t.$$;i&&i.m(n,r),E(()=>{const n=l.map(e).filter(o);a?a.push(...n):s(n),t.$$.on_mount=[]}),c.forEach(E)}function V(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function B(t,e){-1===t.$$.dirty[0]&&(y.push(t),x||(x=!0,C.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function H(e,o,r,i,l,a,c=[-1]){const u=b;R(e);const d=o.props||{},f=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:n(),dirty:c,skip_bound:!1};let m=!1;if(f.ctx=r?r(e,d,(t,n,...s)=>{const o=s.length?s[0]:n;return f.ctx&&l(f.ctx[t],f.ctx[t]=o)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](o),m&&B(e,t)),n}):[],f.update(),m=!0,s(f.before_update),f.fragment=!!i&&i(f.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);f.fragment&&f.fragment.l(t),t.forEach(p)}else f.fragment&&f.fragment.c();o.intro&&K(e.$$.fragment),q(e,o.target,o.anchor),A()}R(u)}class M{$destroy(){V(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const j=[];function z(e,n){const s=function(e,n=t){let s;const o=[];function i(t){if(r(e,t)&&(e=t,s)){const t=!j.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),j.push(n,e)}if(t){for(let t=0;t<j.length;t+=2)j[t][0](j[t+1]);j.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(r,l=t){const a=[r,l];return o.push(a),1===o.length&&(s=n(i)||t),r(e),()=>{const t=o.indexOf(a);-1!==t&&o.splice(t,1),0===o.length&&(s(),s=null)}}}}(n),{subscribe:o,set:i}=s,a="undefined"!=typeof localStorage?localStorage.getItem(e):null;return a&&i(JSON.parse(a)),{set(t){"undefined"!=typeof localStorage&&localStorage.setItem(e,JSON.stringify(t)),i(t)},update(t){const e=t(l(s));this.set(e)},subscribe:o}}const Z=z("config",{privateUUID:"",sponsorBlockApi:"https://sponsor.ajay.app",showPrivateUUID:!1}),F=z("cache",{});function Y(e){let n;return{c(){n=m("header"),n.innerHTML='<img src="favicon.png" width="64" height="64" alt="Logo" class="svelte-qh2uac"> SponsorBlockControl\n  <sup class="svelte-qh2uac"><a href="https://github.com/MRuy/sponsorBlockControl#readme" class="svelte-qh2uac">(v1.0.1)</a></sup>',U(n,"class","svelte-qh2uac")},m(t,e){d(t,n,e)},p:t,i:t,o:t,d(t){t&&p(n)}}}class J extends M{constructor(t){super(),H(this,t,null,Y,r,{})}}function Q(t,e,n){const s=t.slice();return s[5]=e[n],s[7]=n,s}function X(t){let e,n,s,o,r,i,l=t[5].name+"";function a(...e){return t[4](t[5],...e)}return{c(){e=m("button"),n=v(l),s=h(),U(e,"type","button"),e.disabled=o=!0===t[5].uuidRequired&&""===t[3].privateUUID,U(e,"class","svelte-mrs8b4"),$(e,"active",t[2]===t[5].component)},m(t,o){d(t,e,o),u(e,n),u(e,s),r||(i=I(e,"click",a),r=!0)},p(s,r){t=s,1&r&&l!==(l=t[5].name+"")&&g(n,l),9&r&&o!==(o=!0===t[5].uuidRequired&&""===t[3].privateUUID)&&(e.disabled=o),5&r&&$(e,"active",t[2]===t[5].component)},d(t){t&&p(e),r=!1,i()}}}function tt(e){let n,s=e[0],o=[];for(let t=0;t<s.length;t+=1)o[t]=X(Q(e,s,t));return{c(){n=m("nav");for(let t=0;t<o.length;t+=1)o[t].c();U(n,"class","svelte-mrs8b4")},m(t,e){d(t,n,e);for(let t=0;t<o.length;t+=1)o[t].m(n,null)},p(t,[e]){if(15&e){let r;for(s=t[0],r=0;r<s.length;r+=1){const i=Q(t,s,r);o[r]?o[r].p(i,e):(o[r]=X(i),o[r].c(),o[r].m(n,null))}for(;r<o.length;r+=1)o[r].d(1);o.length=s.length}},i:t,o:t,d(t){t&&p(n),f(o,t)}}}function et(t,e,n){let s;a(t,Z,t=>n(3,s=t));let{items:o=[]}=e,{clickHandler:r}=e,{selected:i}=e;return t.$$set=t=>{"items"in t&&n(0,o=t.items),"clickHandler"in t&&n(1,r=t.clickHandler),"selected"in t&&n(2,i=t.selected)},[o,r,i,s,(t,e)=>{r(t.name)}]}class nt extends M{constructor(t){super(),H(this,t,et,tt,r,{items:0,clickHandler:1,selected:2})}}function st(t){let e;return{c(){e=v("Ready!")},m(t,n){d(t,e,n)},d(t){t&&p(e)}}}function ot(t){let e,n;return{c(){e=m("div"),n=v("\n    Sending request..."),U(e,"class","lds-dual-ring svelte-kuvmdh")},m(t,s){d(t,e,s),d(t,n,s)},d(t){t&&p(e),t&&p(n)}}}function rt(t){let e;return{c(){e=v("Done. Success!")},m(t,n){d(t,e,n)},d(t){t&&p(e)}}}function it(t){let e;return{c(){e=m("span"),e.textContent="Bad Request (Your inputs are wrong/impossible)",U(e,"class","error svelte-kuvmdh")},m(t,n){d(t,e,n)},d(t){t&&p(e)}}}function lt(t){let e;return{c(){e=m("span"),e.textContent="Error. You are not allowed to do that!",U(e,"class","error svelte-kuvmdh")},m(t,n){d(t,e,n)},d(t){t&&p(e)}}}function at(t){let e;return{c(){e=m("span"),e.textContent="Error: Duplicate",U(e,"class","error svelte-kuvmdh")},m(t,n){d(t,e,n)},d(t){t&&p(e)}}}function ct(t){let e;return{c(){e=m("span"),e.textContent="Error: Not found!",U(e,"class","error svelte-kuvmdh")},m(t,n){d(t,e,n)},d(t){t&&p(e)}}}function ut(t){let e;return{c(){e=v("(Private UUID required)")},m(t,n){d(t,e,n)},d(t){t&&p(e)}}}function dt(e){let n,s,o,r,i,l,a,c,f,I=e[0]==pt.IDLE&&st(),g=e[0]==pt.WORKING&&ot(),S=e[0]==pt.SUCCESS&&rt(),$=e[0]==pt.ERROR_INVALID&&it(),b=e[0]==pt.ERROR_UNAUTHORIZED&&lt(),R=e[0]==pt.DUPLICATE&&at(),D=e[0]==pt.NOT_FOUND&&ct(),y=e[0]==pt.PRIVATEUUID_MISSING&&ut();return{c(){n=m("div"),s=v("Status: "),I&&I.c(),o=h(),g&&g.c(),r=h(),S&&S.c(),i=h(),$&&$.c(),l=h(),b&&b.c(),a=h(),R&&R.c(),c=h(),D&&D.c(),f=h(),y&&y.c(),U(n,"class","status")},m(t,e){d(t,n,e),u(n,s),I&&I.m(n,null),u(n,o),g&&g.m(n,null),u(n,r),S&&S.m(n,null),u(n,i),$&&$.m(n,null),u(n,l),b&&b.m(n,null),u(n,a),R&&R.m(n,null),u(n,c),D&&D.m(n,null),u(n,f),y&&y.m(n,null)},p(t,[e]){t[0]==pt.IDLE?I||(I=st(),I.c(),I.m(n,o)):I&&(I.d(1),I=null),t[0]==pt.WORKING?g||(g=ot(),g.c(),g.m(n,r)):g&&(g.d(1),g=null),t[0]==pt.SUCCESS?S||(S=rt(),S.c(),S.m(n,i)):S&&(S.d(1),S=null),t[0]==pt.ERROR_INVALID?$||($=it(),$.c(),$.m(n,l)):$&&($.d(1),$=null),t[0]==pt.ERROR_UNAUTHORIZED?b||(b=lt(),b.c(),b.m(n,a)):b&&(b.d(1),b=null),t[0]==pt.DUPLICATE?R||(R=at(),R.c(),R.m(n,c)):R&&(R.d(1),R=null),t[0]==pt.NOT_FOUND?D||(D=ct(),D.c(),D.m(n,f)):D&&(D.d(1),D=null),t[0]==pt.PRIVATEUUID_MISSING?y||(y=ut(),y.c(),y.m(n,null)):y&&(y.d(1),y=null)},i:t,o:t,d(t){t&&p(n),I&&I.d(),g&&g.d(),S&&S.d(),$&&$.d(),b&&b.d(),R&&R.d(),D&&D.d(),y&&y.d()}}}const pt={IDLE:Symbol("idle"),WORKING:Symbol("working"),SUCCESS:Symbol("success"),NOT_FOUND:Symbol("error-404"),ERROR_INVALID:Symbol("error-invalid"),ERROR_UNAUTHORIZED:Symbol("error-unauthorized"),STATUS_DUPLICATE:Symbol("duplicate"),PRIVATEUUID_MISSING:Symbol("private-uuid-missing")};function ft(t,e,n){let{status:s}=e;return t.$$set=t=>{"status"in t&&n(0,s=t.status)},[s]}class mt extends M{constructor(t){super(),H(this,t,ft,dt,r,{status:0})}}const vt=(t,e=!1)=>{const n=Math.floor(t/60/24/365),s=Math.floor(t/60/24)%365,o=Math.floor(t/60)%24;let r="";return r+=""+(n>0?n+(e?" years ":"y "):""),r+=""+(s>0?s+(e?" days ":"d "):""),r+=""+(o>0?o+(e?" hours ":"h "):""),0==n&&(r+=`${(t%60).toFixed(1)}${e?" minutes ":"m "}`),r.trim()},ht=t=>/^[a-f0-9]{64}/.test(t);function It(t){let e,n,s,o=vt(t[1],!0)+"";return{c(){e=v("You have saved people "),n=v(o),s=v(" of their lives.")},m(t,o){d(t,e,o),d(t,n,o),d(t,s,o)},p(t,e){2&e&&o!==(o=vt(t[1],!0)+"")&&g(n,o)},d(t){t&&p(e),t&&p(n),t&&p(s)}}}function Ut(t){let e;return{c(){e=v("Loading...")},m(t,n){d(t,e,n)},d(t){t&&p(e)}}}function gt(t){let e;return{c(){e=v("(Private UUID required)")},m(t,n){d(t,e,n)},d(t){t&&p(e)}}}function St(e){let n,s,o,r=e[0]==pt.SUCCESS&&It(e),i=e[0]==pt.WORKING&&Ut(),l=e[0]==pt.PRIVATEUUID_MISSING&&gt();return{c(){n=m("span"),r&&r.c(),s=h(),i&&i.c(),o=h(),l&&l.c()},m(t,e){d(t,n,e),r&&r.m(n,null),u(n,s),i&&i.m(n,null),u(n,o),l&&l.m(n,null)},p(t,[e]){t[0]==pt.SUCCESS?r?r.p(t,e):(r=It(t),r.c(),r.m(n,s)):r&&(r.d(1),r=null),t[0]==pt.WORKING?i||(i=Ut(),i.c(),i.m(n,o)):i&&(i.d(1),i=null),t[0]==pt.PRIVATEUUID_MISSING?l||(l=gt(),l.c(),l.m(n,null)):l&&(l.d(1),l=null)},i:t,o:t,d(t){t&&p(n),r&&r.d(),i&&i.d(),l&&l.d()}}}function $t(t,e,n){let s,o;a(t,F,t=>n(3,s=t)),a(t,Z,t=>n(4,o=t));let r,{privateUUID:i=""}=e,l=pt.IDLE;return D((async function(){if(""===i)return void n(0,l=pt.PRIVATEUUID_MISSING);if(n(0,l=pt.WORKING),"savedtimeforuser"in s&&s.savedtimeforuser_time+6e5>Date.now())n(1,r=s.savedtimeforuser);else{const t=await fetch(`${o.sponsorBlockApi}/api/getSavedTimeForUser?userID=${i}`).then(t=>t.json());c(F,s.savedtimeforuser_time=Date.now(),s),c(F,s.savedtimeforuser=t.timeSaved,s),n(1,r=t.timeSaved)}n(0,l=pt.SUCCESS)})),t.$$set=t=>{"privateUUID"in t&&n(2,i=t.privateUUID)},[l,r,i]}class bt extends M{constructor(t){super(),H(this,t,$t,St,r,{privateUUID:2})}}function Rt(t){let e,n,s,o=t[1].toLocaleString()+"";return{c(){e=v("You have saved people from "),n=v(o),s=v(" segments.")},m(t,o){d(t,e,o),d(t,n,o),d(t,s,o)},p(t,e){2&e&&o!==(o=t[1].toLocaleString()+"")&&g(n,o)},d(t){t&&p(e),t&&p(n),t&&p(s)}}}function Dt(t){let e;return{c(){e=v("Loading...")},m(t,n){d(t,e,n)},d(t){t&&p(e)}}}function yt(t){let e;return{c(){e=v("(Private UUID required)")},m(t,n){d(t,e,n)},d(t){t&&p(e)}}}function wt(e){let n,s,o,r=e[0]==pt.SUCCESS&&Rt(e),i=e[0]==pt.WORKING&&Dt(),l=e[0]==pt.PRIVATEUUID_MISSING&&yt();return{c(){n=m("span"),r&&r.c(),s=h(),i&&i.c(),o=h(),l&&l.c()},m(t,e){d(t,n,e),r&&r.m(n,null),u(n,s),i&&i.m(n,null),u(n,o),l&&l.m(n,null)},p(t,[e]){t[0]==pt.SUCCESS?r?r.p(t,e):(r=Rt(t),r.c(),r.m(n,s)):r&&(r.d(1),r=null),t[0]==pt.WORKING?i||(i=Dt(),i.c(),i.m(n,o)):i&&(i.d(1),i=null),t[0]==pt.PRIVATEUUID_MISSING?l||(l=yt(),l.c(),l.m(n,null)):l&&(l.d(1),l=null)},i:t,o:t,d(t){t&&p(n),r&&r.d(),i&&i.d(),l&&l.d()}}}function Ot(t,e,n){let s,o;a(t,F,t=>n(3,s=t)),a(t,Z,t=>n(4,o=t));let{privateUUID:r=""}=e,i=pt.IDLE,l=0;return D((async function(){if(""===r)return void n(0,i=pt.PRIVATEUUID_MISSING);if(n(0,i=pt.WORKING),"viewsforuser"in s&&s.viewsforuser_time+6e5>Date.now())n(1,l=s.viewsforuser);else{const t=await fetch(`${o.sponsorBlockApi}/api/getViewsForUser?userID=${r}`).then(t=>t.json());c(F,s.viewsforuser_time=Date.now(),s),c(F,s.viewsforuser=t.viewCount,s),n(1,l=t.viewCount)}n(0,i=pt.SUCCESS)})),t.$$set=t=>{"privateUUID"in t&&n(2,r=t.privateUUID)},[i,l,r]}class Nt extends M{constructor(t){super(),H(this,t,Ot,wt,r,{privateUUID:2})}}function Ct(t){let e;return{c(){e=v("(Set your private UUID!)")},m(t,n){d(t,e,n)},d(t){t&&p(e)}}}function xt(t){let e,n,o,r,i,l,a,c,f,$,b,R,D,y,w,O,N,C,x,E,_,k,A,L,G,T,B,H,M,j,z,Z,F,Y,J,Q,X,tt,et,nt,st,ot,rt,it=t[1]?"Saved!":"Save",lt=t[3]?"Saved!":"Save",at=""===t[4].privateUUID&&Ct();return X=new Nt({props:{privateUUID:t[4].privateUUID}}),nt=new bt({props:{privateUUID:t[4].privateUUID}}),{c(){var t,s,u;e=m("main"),n=m("div"),o=m("details"),r=m("summary"),i=v("Settings "),at&&at.c(),l=h(),a=m("fieldset"),c=m("legend"),c.textContent="Private userID:",f=h(),$=m("div"),$.innerHTML="<p>Your private userID will only be stored in your Browser and only\n            send to the SponsorBlock API.</p>",b=h(),R=m("div"),D=m("label"),D.textContent="Your private userID:",y=m("br"),w=h(),O=m("input"),C=h(),x=m("div"),E=m("button"),_=v(it),k=h(),A=m("fieldset"),L=m("legend"),L.textContent="API Server:",G=h(),T=m("div"),B=m("label"),B.textContent="SponsorBlock Server:",H=m("br"),M=h(),j=m("input"),z=h(),Z=m("div"),F=m("button"),Y=v(lt),J=h(),Q=m("p"),P(X.$$.fragment),tt=m("br"),et=h(),P(nt.$$.fragment),U(r,"class","svelte-12iolxf"),U($,"class","info"),U(D,"for","privateUUID"),U(O,"id","privateUUID"),U(O,"type","text"),U(O,"size","36"),U(O,"pattern",N="^[A-Za-z0-9]36$"),U(O,"spellcheck","false"),U(O,"placeholder","Private UUID"),U(O,"class","svelte-12iolxf"),U(x,"class","actions"),U(a,"class","svelte-12iolxf"),U(B,"for","serveraddr"),U(j,"type","url"),U(j,"id","serveraddr"),U(j,"class","serveraddr svelte-12iolxf"),U(j,"placeholder","https://..."),U(Z,"class","actions"),U(A,"class","svelte-12iolxf"),U(o,"class","svelte-12iolxf"),t="width",s="100%",Q.style.setProperty(t,s,u?"important":""),U(n,"class","container")},m(s,p){d(s,e,p),u(e,n),u(n,o),u(o,r),u(r,i),at&&at.m(r,null),u(o,l),u(o,a),u(a,c),u(a,f),u(a,$),u(a,b),u(a,R),u(R,D),u(R,y),u(R,w),u(R,O),S(O,t[0]),u(R,C),u(R,x),u(x,E),u(E,_),u(o,k),u(o,A),u(A,L),u(A,G),u(A,T),u(T,B),u(T,H),u(T,M),u(T,j),S(j,t[2]),u(T,z),u(T,Z),u(Z,F),u(F,Y),u(n,J),u(n,Q),q(X,Q,null),u(Q,tt),u(Q,et),q(nt,Q,null),st=!0,ot||(rt=[I(O,"input",t[7]),I(E,"click",t[5]),I(j,"input",t[8]),I(F,"click",t[6])],ot=!0)},p(t,[e]){""===t[4].privateUUID?at||(at=Ct(),at.c(),at.m(r,null)):at&&(at.d(1),at=null),1&e&&O.value!==t[0]&&S(O,t[0]),(!st||2&e)&&it!==(it=t[1]?"Saved!":"Save")&&g(_,it),4&e&&S(j,t[2]),(!st||8&e)&&lt!==(lt=t[3]?"Saved!":"Save")&&g(Y,lt);const n={};16&e&&(n.privateUUID=t[4].privateUUID),X.$set(n);const s={};16&e&&(s.privateUUID=t[4].privateUUID),nt.$set(s)},i(t){st||(K(X.$$.fragment,t),K(nt.$$.fragment,t),st=!0)},o(t){W(X.$$.fragment,t),W(nt.$$.fragment,t),st=!1},d(t){t&&p(e),at&&at.d(),V(X),V(nt),ot=!1,s(rt)}}}function Et(t,e,n){let s,o;a(t,Z,t=>n(4,s=t)),a(t,F,t=>n(9,o=t));let r=s.privateUUID,i=!1;let l=s.sponsorBlockApi,u=!1;return[r,i,l,u,s,function(t){s.privateUUID!=r&&c(F,o={}),c(Z,s.privateUUID=r,s),n(1,i=!0),setTimeout(t=>{n(1,i=!1)},3e3)},function(t){c(Z,s.sponsorBlockApi=l,s),n(3,u=!0),setTimeout(t=>{n(3,u=!1)},3e3)},function(){r=this.value,n(0,r)},function(){l=this.value,n(2,l)}]}class _t extends M{constructor(t){super(),H(this,t,Et,xt,r,{})}}function kt(t){let e,n,o,r,i,l,a,c,f,g,b,R,D,y,w,O,N,C,x,E,_,k,A,L,G,T,B,H,M,j,z,Z;return M=new mt({props:{status:t[3]}}),{c(){e=m("main"),n=m("div"),o=m("p"),o.textContent="Only users with VIP status can do this!",r=h(),i=m("fieldset"),l=m("legend"),l.textContent="Shadow ban user:",a=h(),c=m("div"),f=m("div"),g=m("label"),g.textContent="User UUID:",b=m("br"),R=h(),D=m("input"),y=h(),w=m("div"),O=m("input"),N=h(),C=m("label"),C.textContent="Hide/Restore old submissions",x=h(),E=m("div"),_=m("button"),k=v("Unban"),L=h(),G=m("button"),T=v("Ban"),H=h(),P(M.$$.fragment),U(o,"class","viprequired"),U(g,"for","uuid"),U(D,"id","uuid"),U(D,"type","text"),U(D,"size","64"),U(D,"placeholder","Users UUID..."),U(O,"id","hideoldsubmissions"),U(O,"type","checkbox"),U(C,"for","hideoldsubmissions"),U(_,"type","button"),_.disabled=A=!t[2],U(G,"type","button"),G.disabled=B=!t[2],U(E,"class","actions"),U(c,"class","form svelte-1izyxq"),$(c,"working",t[3]===pt.WORKING),U(n,"class","container")},m(s,p){d(s,e,p),u(e,n),u(n,o),u(n,r),u(n,i),u(i,l),u(i,a),u(i,c),u(c,f),u(f,g),u(f,b),u(f,R),u(f,D),S(D,t[0]),u(c,y),u(c,w),u(w,O),O.checked=t[1],u(w,N),u(w,C),u(c,x),u(c,E),u(E,_),u(_,k),u(E,L),u(E,G),u(G,T),u(n,H),q(M,n,null),j=!0,z||(Z=[I(D,"input",t[5]),I(D,"input",t[6]),I(O,"change",t[7]),I(_,"click",t[8]),I(G,"click",t[9])],z=!0)},p(t,[e]){1&e&&D.value!==t[0]&&S(D,t[0]),2&e&&(O.checked=t[1]),(!j||4&e&&A!==(A=!t[2]))&&(_.disabled=A),(!j||4&e&&B!==(B=!t[2]))&&(G.disabled=B),8&e&&$(c,"working",t[3]===pt.WORKING);const n={};8&e&&(n.status=t[3]),M.$set(n)},i(t){j||(K(M.$$.fragment,t),j=!0)},o(t){W(M.$$.fragment,t),j=!1},d(t){t&&p(e),V(M),z=!1,s(Z)}}}function At(t,e,n){let s;a(t,Z,t=>n(10,s=t));let o="",r=!0,i=!1,l=pt.IDLE;async function c(t="ban"){n(3,l=pt.WORKING);const e=new URLSearchParams;e.set("adminUserID",s.privateUUID),e.set("userID",o),e.set("enabled",("ban"===t).toString()),e.set("unHideOldSubmissions",r.toString());const i=await fetch(`${s.sponsorBlockApi}/api/shadowBanUser?${e}`,{method:"post"}).then((function(t){return t.status}));200===i&&n(3,l=pt.SUCCESS),400===i&&n(3,l=pt.ERROR_INVALID),403===i&&n(3,l=pt.ERROR_UNAUTHORIZED)}return[o,r,i,l,c,function(){o=this.value,n(0,o)},t=>{n(2,i=ht(o))},function(){r=this.checked,n(1,r)},t=>{c("unban")},t=>{c("ban")}]}class Lt extends M{constructor(t){super(),H(this,t,At,kt,r,{})}}function Gt(t){let e,n,s,o,r,i,l,a,c,f,S,$,b,R,D,y,w,O,N,C,x,E,_,k,A,L,G,T,K,W,P,q,V,B=t[1].userCount.toLocaleString()+"",H=t[1].viewCount.toLocaleString()+"",M=t[1].totalSubmissions.toLocaleString()+"",j=vt(t[1].minutesSaved,!0)+"";return{c(){e=m("table"),n=m("tbody"),s=m("tr"),o=m("th"),o.textContent="Contributing Users:",r=h(),i=m("td"),l=v(B),a=h(),c=m("tr"),f=m("th"),f.textContent="Skip Count:",S=h(),$=m("td"),b=v(H),R=v(" skips"),D=h(),y=m("tr"),w=m("th"),w.textContent="Submissions:",O=h(),N=m("td"),C=v(M),x=h(),E=m("tr"),_=m("th"),_.textContent="Time Saved:",k=h(),A=m("td"),L=v(j),G=h(),T=m("div"),K=m("button"),W=v("Refresh"),U(o,"class","svelte-aon4oy"),U(i,"class","svelte-aon4oy"),U(f,"class","svelte-aon4oy"),U($,"class","svelte-aon4oy"),U(w,"class","svelte-aon4oy"),U(N,"class","svelte-aon4oy"),U(_,"class","svelte-aon4oy"),U(A,"class","svelte-aon4oy"),U(e,"class","stats-table svelte-aon4oy"),K.disabled=P=t[0]===pt.WORKING},m(p,m){d(p,e,m),u(e,n),u(n,s),u(s,o),u(s,r),u(s,i),u(i,l),u(n,a),u(n,c),u(c,f),u(c,S),u(c,$),u($,b),u($,R),u(n,D),u(n,y),u(y,w),u(y,O),u(y,N),u(N,C),u(n,x),u(n,E),u(E,_),u(E,k),u(E,A),u(A,L),d(p,G,m),d(p,T,m),u(T,K),u(K,W),q||(V=I(K,"click",t[3]),q=!0)},p(t,e){2&e&&B!==(B=t[1].userCount.toLocaleString()+"")&&g(l,B),2&e&&H!==(H=t[1].viewCount.toLocaleString()+"")&&g(b,H),2&e&&M!==(M=t[1].totalSubmissions.toLocaleString()+"")&&g(C,M),2&e&&j!==(j=vt(t[1].minutesSaved,!0)+"")&&g(L,j),1&e&&P!==(P=t[0]===pt.WORKING)&&(K.disabled=P)},d(t){t&&p(e),t&&p(G),t&&p(T),q=!1,V()}}}function Tt(t){let e,n,s,o,r,i=t[1]&&Gt(t);return o=new mt({props:{status:t[0]}}),{c(){e=m("main"),n=m("div"),i&&i.c(),s=h(),P(o.$$.fragment),U(n,"class","container")},m(t,l){d(t,e,l),u(e,n),i&&i.m(n,null),u(n,s),q(o,n,null),r=!0},p(t,[e]){t[1]?i?i.p(t,e):(i=Gt(t),i.c(),i.m(n,s)):i&&(i.d(1),i=null);const r={};1&e&&(r.status=t[0]),o.$set(r)},i(t){r||(K(o.$$.fragment,t),r=!0)},o(t){W(o.$$.fragment,t),r=!1},d(t){t&&p(e),i&&i.d(),V(o)}}}function Kt(t,e,n){let s,o;a(t,Z,t=>n(4,s=t)),a(t,F,t=>n(5,o=t));let r=pt.IDLE,i={userCount:0,viewCount:0,totalSubmissions:0,minutesSaved:0};async function l(){n(1,i=await async function(){n(0,r=pt.WORKING);const t=await fetch(s.sponsorBlockApi+"/api/getTotalStats").then(t=>t.json());return n(0,r=pt.SUCCESS),t}()),c(F,o.totalstats=i,o),c(F,o.totalstats_time=Date.now(),o)}D(async t=>{"totalstats"in o&&o.totalstats_time+6e5>Date.now()?n(1,i=o.totalstats):await l()});return[r,i,l,async t=>{await l()}]}class Wt extends M{constructor(t){super(),H(this,t,Kt,Tt,r,{})}}function Pt(t,e,n){const s=t.slice();return s[7]=e[n],s[9]=n,s}function qt(t){let e,n,s,o,r,i,l,a,c,g,S,$=t[1],b=[];for(let e=0;e<$.length;e+=1)b[e]=Vt(Pt(t,$,e));return{c(){e=m("table"),n=m("thead"),n.innerHTML='<tr><th class="celltype-number svelte-1e4p7ss">Rank</th> \n            <th class="celltype-text svelte-1e4p7ss">User Name</th> \n            <th class="celltype-number svelte-1e4p7ss">Submissions</th> \n            <th class="celltype-number svelte-1e4p7ss">Time Saved</th> \n            <th class="celltype-number svelte-1e4p7ss">Total Skips</th></tr>',s=h(),o=m("tbody");for(let t=0;t<b.length;t+=1)b[t].c();r=h(),i=m("div"),l=m("button"),a=v("Refresh"),U(n,"class","svelte-1e4p7ss"),U(e,"class","svelte-1e4p7ss"),l.disabled=c=t[0]===pt.WORKING},m(c,p){d(c,e,p),u(e,n),u(e,s),u(e,o);for(let t=0;t<b.length;t+=1)b[t].m(o,null);d(c,r,p),d(c,i,p),u(i,l),u(l,a),g||(S=I(l,"click",t[3]),g=!0)},p(t,e){if(2&e){let n;for($=t[1],n=0;n<$.length;n+=1){const s=Pt(t,$,n);b[n]?b[n].p(s,e):(b[n]=Vt(s),b[n].c(),b[n].m(o,null))}for(;n<b.length;n+=1)b[n].d(1);b.length=$.length}1&e&&c!==(c=t[0]===pt.WORKING)&&(l.disabled=c)},d(t){t&&p(e),f(b,t),t&&p(r),t&&p(i),g=!1,S()}}}function Vt(t){let e,n,s,o,r,i,l,a,c,f,I,S,b,R,D,y,w=t[9]+1+"",O=t[7].username+"",N=t[7].totalSubmissions.toLocaleString()+"",C=vt(t[7].minutesSaved)+"",x=t[7].viewCount.toLocaleString()+"";return{c(){e=m("tr"),n=m("td"),s=v(w),o=h(),r=m("td"),i=v(O),l=h(),a=m("td"),c=v(N),f=h(),I=m("td"),S=v(C),b=h(),R=m("td"),D=v(x),y=h(),U(n,"class","celltype-number svelte-1e4p7ss"),U(r,"class","celltype-text svelte-1e4p7ss"),U(a,"class","celltype-number svelte-1e4p7ss"),U(I,"class","celltype-number svelte-1e4p7ss"),U(R,"class","celltype-number svelte-1e4p7ss"),U(e,"class","svelte-1e4p7ss"),$(e,"row--even",t[9]%2==0)},m(t,p){d(t,e,p),u(e,n),u(n,s),u(e,o),u(e,r),u(r,i),u(e,l),u(e,a),u(a,c),u(e,f),u(e,I),u(I,S),u(e,b),u(e,R),u(R,D),u(e,y)},p(t,e){2&e&&O!==(O=t[7].username+"")&&g(i,O),2&e&&N!==(N=t[7].totalSubmissions.toLocaleString()+"")&&g(c,N),2&e&&C!==(C=vt(t[7].minutesSaved)+"")&&g(S,C),2&e&&x!==(x=t[7].viewCount.toLocaleString()+"")&&g(D,x)},d(t){t&&p(e)}}}function Bt(t){let e,n,s,o,r,i=t[1]&&qt(t);return o=new mt({props:{status:t[0]}}),{c(){e=m("main"),n=m("div"),i&&i.c(),s=h(),P(o.$$.fragment),U(n,"class","container")},m(t,l){d(t,e,l),u(e,n),i&&i.m(n,null),u(n,s),q(o,n,null),r=!0},p(t,[e]){t[1]?i?i.p(t,e):(i=qt(t),i.c(),i.m(n,s)):i&&(i.d(1),i=null);const r={};1&e&&(r.status=t[0]),o.$set(r)},i(t){r||(K(o.$$.fragment,t),r=!0)},o(t){W(o.$$.fragment,t),r=!1},d(t){t&&p(e),i&&i.d(),V(o)}}}function Ht(t,e,n){let s,o;a(t,Z,t=>n(4,s=t)),a(t,F,t=>n(5,o=t));let r,i=pt.IDLE;async function l(){n(1,r=await async function(){n(0,i=pt.WORKING);const t=await fetch(s.sponsorBlockApi+"/api/getTopUsers?sortType=0").then(t=>t.json());return n(0,i=pt.SUCCESS),t.userNames.map((e,n)=>({username:e,viewCount:t.viewCounts[n],totalSubmissions:t.totalSubmissions[n],minutesSaved:t.minutesSaved[n]}))}()),c(F,o.topusers=r,o),c(F,o.topusers_time=Date.now(),o)}D(async t=>{"topusers"in o&&o.topusers_time+6e5>Date.now()?n(1,r=o.topusers):await l()});return[i,r,l,t=>{l()}]}class Mt extends M{constructor(t){super(),H(this,t,Ht,Bt,r,{})}}function jt(t){let e,n,o,r,i,l,a,c,f,g,$,b,R,D,y,w,O,N,C,x,E,_,k,A,L,G;return k=new mt({props:{status:t[0]}}),{c(){e=m("main"),n=m("div"),o=m("fieldset"),r=m("legend"),r.textContent="Vote on segment",i=h(),l=m("div"),a=m("label"),a.textContent="Segment UUID:",c=m("br"),f=h(),g=m("input"),R=h(),D=m("div"),y=m("button"),w=v("Downvote"),N=h(),C=m("button"),x=v("Upvote"),_=h(),P(k.$$.fragment),U(a,"for","uuid"),U(g,"id","uuid"),U(g,"type","text"),U(g,"size","64"),U(g,"pattern",$="[a-f0-9]{64}"),U(g,"placeholder","Segment UUID ..."),g.disabled=b=t[0]===pt.WORKING,y.disabled=O=t[0]===pt.WORKING||!t[2]||t[0]===pt.WORKING,C.disabled=E=t[0]===pt.WORKING||!t[2]||t[0]===pt.WORKING,U(D,"class","actions"),U(n,"class","container")},m(s,p){d(s,e,p),u(e,n),u(n,o),u(o,r),u(o,i),u(o,l),u(l,a),u(l,c),u(l,f),u(l,g),S(g,t[1]),u(o,R),u(o,D),u(D,y),u(y,w),u(D,N),u(D,C),u(C,x),u(n,_),q(k,n,null),A=!0,L||(G=[I(g,"input",t[4]),I(g,"input",t[5]),I(y,"click",t[6]),I(C,"click",t[7])],L=!0)},p(t,[e]){(!A||1&e&&b!==(b=t[0]===pt.WORKING))&&(g.disabled=b),2&e&&g.value!==t[1]&&S(g,t[1]),(!A||5&e&&O!==(O=t[0]===pt.WORKING||!t[2]||t[0]===pt.WORKING))&&(y.disabled=O),(!A||5&e&&E!==(E=t[0]===pt.WORKING||!t[2]||t[0]===pt.WORKING))&&(C.disabled=E);const n={};1&e&&(n.status=t[0]),k.$set(n)},i(t){A||(K(k.$$.fragment,t),A=!0)},o(t){W(k.$$.fragment,t),A=!1},d(t){t&&p(e),V(k),L=!1,s(G)}}}function zt(t,e,n){let s;a(t,Z,t=>n(8,s=t));let o=pt.IDLE,r="",i=!1;async function l(t,e=0){n(0,o=pt.WORKING);const r=new URLSearchParams;r.set("UUID",t),r.set("userID",s.privateUUID),r.set("type",e);const i=await fetch(`${s.sponsorBlockApi}/api/voteOnSponsorTime?${r}`,{method:"POST"}).then(t=>t.status);200===i&&(n(0,o=pt.SUCCESS),t=""),400===i&&n(0,o=pt.INVALID),405===i&&n(0,o=pt.DUPLICATE)}return[o,r,i,l,function(){r=this.value,n(1,r)},t=>{n(2,i=/^([a-f0-9]{64}|[a-f0-9]{8}\-[a-f0-9]{4}\-[a-f0-9]{4}\-[a-f0-9]{4}\-[a-f0-9]{12})/.test(r))},t=>{l(r,0)},t=>{l(r,1)}]}class Zt extends M{constructor(t){super(),H(this,t,zt,jt,r,{})}}function Ft(t){let e,n,o,r,i,l,a,c,f,g,b,R,D,y,w,O,N,C,x,E,_,k,A,L,G,T,B;return L=new mt({props:{status:t[4]}}),{c(){e=m("main"),n=m("div"),o=m("div"),r=m("fieldset"),i=m("legend"),i.textContent="Your Username:",l=h(),a=m("input"),c=h(),f=m("button"),g=v("Save"),R=h(),D=m("fieldset"),y=m("legend"),y.innerHTML='Change Username: <span class="viprequired">(Admin Only)</span>',w=h(),O=m("input"),N=h(),C=m("input"),x=h(),E=m("button"),_=v("Update"),A=h(),P(L.$$.fragment),U(a,"type","text"),U(a,"placeholder","Username..."),f.disabled=b=0==t[0].length,U(r,"class","svelte-1j3zcny"),U(O,"type","text"),U(O,"placeholder","Target UUID..."),U(C,"type","text"),U(C,"placeholder","Username..."),E.disabled=k=!t[3]||0===t[1].length,U(D,"class","svelte-1j3zcny"),U(o,"class","form svelte-1j3zcny"),$(o,"working",t[4]===pt.WORKING),U(n,"class","container")},m(s,p){d(s,e,p),u(e,n),u(n,o),u(o,r),u(r,i),u(r,l),u(r,a),S(a,t[0]),u(r,c),u(r,f),u(f,g),u(o,R),u(o,D),u(D,y),u(D,w),u(D,O),S(O,t[2]),u(D,N),u(D,C),S(C,t[1]),u(D,x),u(D,E),u(E,_),u(n,A),q(L,n,null),G=!0,T||(B=[I(a,"input",t[8]),I(f,"click",t[9]),I(O,"input",t[10]),I(O,"input",t[11]),I(C,"input",t[12]),I(E,"click",t[13])],T=!0)},p(t,[e]){1&e&&a.value!==t[0]&&S(a,t[0]),(!G||1&e&&b!==(b=0==t[0].length))&&(f.disabled=b),4&e&&O.value!==t[2]&&S(O,t[2]),2&e&&C.value!==t[1]&&S(C,t[1]),(!G||10&e&&k!==(k=!t[3]||0===t[1].length))&&(E.disabled=k),16&e&&$(o,"working",t[4]===pt.WORKING);const n={};16&e&&(n.status=t[4]),L.$set(n)},i(t){G||(K(L.$$.fragment,t),G=!0)},o(t){W(L.$$.fragment,t),G=!1},d(t){t&&p(e),V(L),T=!1,s(B)}}}function Yt(t,e,n){let s,o;a(t,Z,t=>n(5,s=t)),a(t,F,t=>n(14,o=t));let r="",i="",l="",u=!1,d=pt.IDLE;async function p(t,e,o){n(4,d=pt.WORKING);const r=new URLSearchParams;r.set("userID",t),r.set("username",e),o&&r.set("adminUserID",o);const i=await fetch(`${s.sponsorBlockApi}/api/setUsername?${r}`,{method:"POST"});200===i.status&&n(4,d=pt.SUCCESS),400===i.status&&n(4,d=pt.ERROR_INVALID),403===i.status&&n(4,d=pt.ERROR_UNAUTHORIZED)}async function f(){n(0,r=await async function(){n(4,d=pt.WORKING);const t=await fetch(`${s.sponsorBlockApi}/api/getUsername?userID=${s.privateUUID}`);if(200===t.status){const e=await t.json();return n(4,d=pt.SUCCESS),e.userName}return 400===t&&n(4,d=pt.ERROR_INVALID),403===t&&n(4,d=pt.ERROR_UNAUTHORIZED),""}()),c(F,o.username=r,o),c(F,o.username_time=Date.now(),o)}D(async t=>{"username"in o&&o.username_time+6e5>Date.now()?n(0,r=o.username):await f()});return[r,i,l,u,d,s,p,f,function(){r=this.value,n(0,r)},async t=>{await p(s.privateUUID,r),await f()},function(){l=this.value,n(2,l)},t=>{n(3,u=ht(l))},function(){i=this.value,n(1,i)},t=>{p(l,i,s.privateUUID)}]}class Jt extends M{constructor(t){super(),H(this,t,Yt,Ft,r,{})}}function Qt(t){let e,n,o,r,i,l,a,c,f,g,b,R,D,y,w,O,N,C,x,E,_,k,A,L,G,T,B;return L=new mt({props:{status:t[2]}}),{c(){e=m("main"),n=m("div"),o=m("p"),o.textContent="Only admins can do this!",r=h(),i=m("fieldset"),l=m("legend"),l.textContent="Add/Remove VIP",a=h(),c=m("div"),f=m("div"),g=m("label"),g.textContent="User UUID:",b=m("br"),R=h(),D=m("input"),y=h(),w=m("div"),O=m("button"),N=v("Remove"),x=h(),E=m("button"),_=v("Add"),A=h(),P(L.$$.fragment),U(o,"class","viprequired"),U(g,"for","uuid"),U(D,"id","uuid"),U(D,"type","text"),U(D,"size","64"),U(D,"placeholder","Users UUID..."),O.disabled=C=!t[1],E.disabled=k=!t[1],U(w,"class","actions"),U(c,"class","form svelte-1izyxq"),$(c,"working",t[2]===pt.WORKING),U(n,"class","container")},m(s,p){d(s,e,p),u(e,n),u(n,o),u(n,r),u(n,i),u(i,l),u(i,a),u(i,c),u(c,f),u(f,g),u(f,b),u(f,R),u(f,D),S(D,t[0]),u(c,y),u(c,w),u(w,O),u(O,N),u(w,x),u(w,E),u(E,_),u(n,A),q(L,n,null),G=!0,T||(B=[I(D,"input",t[5]),I(D,"input",t[6]),I(O,"click",t[4]),I(E,"click",t[3])],T=!0)},p(t,[e]){1&e&&D.value!==t[0]&&S(D,t[0]),(!G||2&e&&C!==(C=!t[1]))&&(O.disabled=C),(!G||2&e&&k!==(k=!t[1]))&&(E.disabled=k),4&e&&$(c,"working",t[2]===pt.WORKING);const n={};4&e&&(n.status=t[2]),L.$set(n)},i(t){G||(K(L.$$.fragment,t),G=!0)},o(t){W(L.$$.fragment,t),G=!1},d(t){t&&p(e),V(L),T=!1,s(B)}}}function Xt(t,e,n){let s;a(t,Z,t=>n(7,s=t));let o="",r=!1,i=pt.IDLE;async function l(t="add"){n(2,i=pt.WORKING);const e=new URLSearchParams;e.set("adminUserID",s.privateUUID),e.set("userID",o),e.set("enabled",("add"===t).toString());const r=await fetch(`${s.sponsorBlockApi}/api/addUserAsVIP?${e}`,{method:"post"}).then((function(t){return t.status}));200===r&&n(2,i=pt.SUCCESS),400===r&&n(2,i=pt.ERROR_INVALID),403===r&&n(2,i=pt.ERROR_UNAUTHORIZED)}return[o,r,i,function(){l("add")},function(){l("remove")},function(){o=this.value,n(0,o)},t=>{n(1,r=ht(o))}]}class te extends M{constructor(t){super(),H(this,t,Xt,Qt,r,{})}}const ee=["sponsor","intro","outro","interaction","selfpromo","music_offtopic"];function ne(t,e,n){const s=t.slice();return s[11]=e[n],s[13]=n,s}function se(t){let e,n,s,o,r,i,l,a,c,f,g,S=t[11]+"";return{c(){e=m("div"),n=m("input"),r=h(),i=m("label"),l=v(S),c=h(),U(n,"id",s="category_"+t[11]),U(n,"type","checkbox"),n.__value=o=t[11],n.value=n.__value,t[8][0].push(n),U(i,"for",a="category_"+t[11]),U(e,"class","category-option svelte-189x8jq")},m(s,o){d(s,e,o),u(e,n),n.checked=~t[0].indexOf(n.__value),u(e,r),u(e,i),u(i,l),u(e,c),f||(g=I(n,"change",t[7]),f=!0)},p(t,e){1&e&&(n.checked=~t[0].indexOf(n.__value))},d(s){s&&p(e),t[8][0].splice(t[8][0].indexOf(n),1),f=!1,g()}}}function oe(t){let e,n,o,r,i,l,a,c,g,b,R,D,y,w,O,N,C,x,E,_,k,A,L,G,T,B,H,M=ee,j=[];for(let e=0;e<M.length;e+=1)j[e]=se(ne(t,M,e));return G=new mt({props:{status:t[3]}}),{c(){e=m("main"),n=m("div"),o=m("p"),o.textContent="Only users with VIP status can do this!",r=h(),i=m("fieldset"),l=m("legend"),l.textContent="No segments",a=h(),c=m("div"),g=m("div"),b=m("label"),b.textContent="VideoID:",R=m("br"),D=h(),y=m("input"),w=h(),O=m("div"),N=m("div"),N.textContent="Categories:",C=h();for(let t=0;t<j.length;t+=1)j[t].c();x=h(),E=m("div"),_=m("button"),k=v("Submit"),L=h(),P(G.$$.fragment),U(o,"class","viprequired"),U(b,"for","videoid"),U(y,"id","videoid"),U(y,"type","text"),U(y,"placeholder","VideoID or URL..."),_.disabled=A=!t[2]||0===t[0].length||t[3]===pt.WORKING,U(E,"class","actions"),U(c,"class","form svelte-189x8jq"),$(c,"working",t[3]===pt.WORKING),U(n,"class","container")},m(s,p){d(s,e,p),u(e,n),u(n,o),u(n,r),u(n,i),u(i,l),u(i,a),u(i,c),u(c,g),u(g,b),u(g,R),u(g,D),u(g,y),S(y,t[1]),u(c,w),u(c,O),u(O,N),u(O,C);for(let t=0;t<j.length;t+=1)j[t].m(O,null);u(c,x),u(c,E),u(E,_),u(_,k),u(n,L),q(G,n,null),T=!0,B||(H=[I(y,"input",t[6]),I(y,"input",t[4]),I(_,"click",t[5])],B=!0)},p(t,[e]){if(2&e&&y.value!==t[1]&&S(y,t[1]),1&e){let n;for(M=ee,n=0;n<M.length;n+=1){const s=ne(t,M,n);j[n]?j[n].p(s,e):(j[n]=se(s),j[n].c(),j[n].m(O,null))}for(;n<j.length;n+=1)j[n].d(1);j.length=M.length}(!T||13&e&&A!==(A=!t[2]||0===t[0].length||t[3]===pt.WORKING))&&(_.disabled=A),8&e&&$(c,"working",t[3]===pt.WORKING);const n={};8&e&&(n.status=t[3]),G.$set(n)},i(t){T||(K(G.$$.fragment,t),T=!0)},o(t){W(G.$$.fragment,t),T=!1},d(t){t&&p(e),f(j,t),V(G),B=!1,s(H)}}}function re(t,e,n){let s;a(t,Z,t=>n(9,s=t));const o=new RegExp("^[0-9A-Za-z_-]{10}[048AEIMQUYcgkosw]$");let r=[],i="",l=!1,c=pt.IDLE;const u=[[]];return[r,i,l,c,function(){let t=!1,e=i;if(e.includes("http")){const t=new URL(e);t.searchParams.has("v")&&(e=t.searchParams.get("v")),"youtu.be"===t.host&&(e=t.pathname.substring(1))}o.test(e)&&(t=!0,n(1,i=e)),n(2,l=t)},async function(){n(3,c=pt.WORKING);const t=new FormData;t.set("videoID",i),t.set("userID",s.privateUUID),t.set("categories",JSON.stringify(r));const e=await fetch(s.sponsorBlockApi+"/api/noSegments",{method:"post",body:t}).then((function(t){return t.status}));200===e&&(n(3,c=pt.SUCCESS),n(1,i=""),n(0,r=[])),400===e&&n(3,c=pt.ERROR_INVALID),403===e&&n(3,c=pt.ERROR_UNAUTHORIZED)},function(){i=this.value,n(1,i)},function(){r=function(t,e,n){const s=new Set;for(let e=0;e<t.length;e+=1)t[e].checked&&s.add(t[e].__value);return n||s.delete(e),Array.from(s)}(u[0],this.__value,this.checked),n(0,r)},u]}class ie extends M{constructor(t){super(),H(this,t,re,oe,r,{})}}function le(t){let e,n,o,r,i,l,a;e=new J({}),o=new nt({props:{items:t[1],clickHandler:t[2],selected:t[0]}});var c=t[0];return c&&(i=new c({})),{c(){P(e.$$.fragment),n=h(),P(o.$$.fragment),r=h(),i&&P(i.$$.fragment),l=v("")},m(t,s){q(e,t,s),d(t,n,s),q(o,t,s),d(t,r,s),i&&q(i,t,s),d(t,l,s),a=!0},p(t,[e]){const n={};if(1&e&&(n.selected=t[0]),o.$set(n),c!==(c=t[0])){if(i){T={r:0,c:[],p:T};const t=i;W(t.$$.fragment,1,0,()=>{V(t,1)}),T.r||s(T.c),T=T.p}c?(i=new c({}),P(i.$$.fragment),K(i.$$.fragment,1),q(i,l.parentNode,l)):i=null}},i(t){a||(K(e.$$.fragment,t),K(o.$$.fragment,t),i&&K(i.$$.fragment,t),a=!0)},o(t){W(e.$$.fragment,t),W(o.$$.fragment,t),i&&W(i.$$.fragment,t),a=!1},d(t){V(e,t),t&&p(n),V(o,t),t&&p(r),t&&p(l),i&&V(i,t)}}}function ae(t,e,n){const s=[{name:"Home",component:_t,uuidRequired:!1},{name:"Username",component:Jt,uuidRequired:!0},{name:"Stats",component:Wt,uuidRequired:!1},{name:"Leaderboard",component:Mt,uuidRequired:!1},{name:"Vote on segment",component:Zt,uuidRequired:!0},{name:"No segments",component:ie,uuidRequired:!0},{name:"Add/Remove Shadow ban",component:Lt,uuidRequired:!0},{name:"Add/Remove VIP",component:te,uuidRequired:!0}];let o=s[0].component;return[o,s,function(t){const e=s.find(e=>e.name===t);e&&n(0,o=e.component)}]}return new class extends M{constructor(t){super(),H(this,t,ae,le,r,{})}}({target:document.body})}();
