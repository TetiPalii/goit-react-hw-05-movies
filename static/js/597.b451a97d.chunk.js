"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[597],{597:function(t,e,r){r.r(e);var n=r(439),c=r(361),a=r(791),u=r(689),o=r(184);e.default=function(){var t=(0,a.useState)([]),e=(0,n.Z)(t,2),r=e[0],s=e[1],i=(0,u.UO)().movieId;return(0,a.useEffect)((function(){i&&(0,c.uV)(i).then((function(t){var e=t.data.cast;return s(e)}))}),[i]),(0,o.jsx)("ul",{children:r.map((function(t){var e=t.character,r=t.name,n=t.id,c=t.profile_path;return(0,o.jsxs)("li",{children:[(0,o.jsx)("img",{src:c?"https://image.tmdb.org/t/p/w300/".concat(c):"https://www.weddingsbylomastravel.com/images/paquetes/default.jpg",alt:r,width:"100"}),(0,o.jsx)("h3",{children:r}),(0,o.jsx)("p",{children:e})]},n)}))})}},361:function(t,e,r){r.d(e,{Y5:function(){return p},qF:function(){return m},r7:function(){return v},uV:function(){return l},wr:function(){return s}});var n=r(165),c=r(861),a=r(243),u="7d14207d169f7b0a78fd4813f8c21637",o=a.Z.create({baseURL:"https://api.themoviedb.org/3/",headers:{accept:"application/json",Authorization:u}});function s(){return i.apply(this,arguments)}function i(){return(i=(0,c.Z)((0,n.Z)().mark((function t(){var e;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.get("trending/movie/day?api_key=".concat(u,"\n    "));case 3:return e=t.sent,t.abrupt("return",e);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,c.Z)((0,n.Z)().mark((function t(e){var r;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.get("movie/".concat(e,"?api_key=").concat(u,"\n    "));case 3:return r=t.sent,t.abrupt("return",r);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function l(t){return h.apply(this,arguments)}function h(){return(h=(0,c.Z)((0,n.Z)().mark((function t(e){var r;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.get("movie/".concat(e,"/credits?api_key=").concat(u,"\n    "));case 3:return r=t.sent,t.abrupt("return",r);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function v(t){return d.apply(this,arguments)}function d(){return(d=(0,c.Z)((0,n.Z)().mark((function t(e){var r;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.get("movie/".concat(e,"/reviews?api_key=").concat(u,"\n    "));case 3:return r=t.sent,t.abrupt("return",r);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function m(t){return w.apply(this,arguments)}function w(){return(w=(0,c.Z)((0,n.Z)().mark((function t(e){var r;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.get("search/movie?query=".concat(e,"&api_key=").concat(u,"\n    "));case 3:return r=t.sent,t.abrupt("return",r);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=597.b451a97d.chunk.js.map