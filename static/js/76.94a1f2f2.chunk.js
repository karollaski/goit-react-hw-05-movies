"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{76:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r=n(861),a=n(439),s=n(757),c=n.n(s),o=n(689),u=n(791),i=n(364),p="Cast_wrapper__XmIBi",f="Cast_actorsList__iEq99",l="Cast_actorsListItem__VPpyk",d=n(184),h=function(){var t=(0,o.UO)().movieId,e=(0,u.useState)([]),n=(0,a.Z)(e,2),s=n[0],h=n[1],w=(0,u.useState)(!1),v=(0,a.Z)(w,2),g=v[0],m=v[1];return(0,u.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m(!0),(0,i.wL)(t).then((function(t){h(t)})).catch((function(t){console.log(t)})).finally((function(){m(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t]),(0,d.jsxs)("div",{className:p,children:[g?(0,d.jsx)("div",{children:"Loading..."}):null,(0,d.jsx)("ul",{className:f,children:s.map((function(t){var e=t.id,n=t.profile_path,r=t.original_name,a=t.name,s=t.character;return(0,d.jsxs)("li",{className:l,children:[(0,d.jsx)("img",{width:"200px",src:n?"https://image.tmdb.org/t/p/w500".concat(n):"https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png",alt:r}),(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{children:a}),(0,d.jsxs)("p",{children:["Character: ",s]})]})]},e)}))})]})}},364:function(t,e,n){n.d(e,{Bt:function(){return l},Tg:function(){return u},Xd:function(){return i},l2:function(){return p},wL:function(){return f}});var r=n(861),a=n(757),s=n.n(a),c=n(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="32a23429c25892a6d3283f9f7a38d6eb",u=function(){var t=(0,r.Z)(s().mark((function t(){var e,n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("trending/movie/day?api_key=".concat(o));case 2:if(200===(e=t.sent).status){t.next=6;break}throw console.log("Ooopsss! Not work!"),new Error(e.status);case 6:return t.next=8,e.data.results;case 8:return n=t.sent,t.abrupt("return",n);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,r.Z)(s().mark((function t(e){var n,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("search/movie?api_key=".concat(o,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:if(200===(n=t.sent).status){t.next=6;break}throw console.log("Ooopsss! Not work!"),new Error(n.status);case 6:return t.next=8,n.data.results;case 8:return r=t.sent,t.abrupt("return",r);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(s().mark((function t(e){var n,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"?api_key=").concat(o,"&language=en-US"));case 2:if(200===(n=t.sent).status){t.next=6;break}throw console.log("Ooopsss! Not work!"),new Error(n.status);case 6:return t.next=8,n.data;case 8:return r=t.sent,t.abrupt("return",r);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(s().mark((function t(e){var n,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 2:if(200===(n=t.sent).status){t.next=6;break}throw console.log("Ooopsss! Not work!"),new Error(n.status);case 6:return t.next=8,n.data.cast;case 8:return r=t.sent,t.abrupt("return",r);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(s().mark((function t(e){var n,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:if(200===(n=t.sent).status){t.next=6;break}throw console.log("Ooopsss! Not work!"),new Error(n.status);case 6:return t.next=8,n.data.results;case 8:return r=t.sent,t.abrupt("return",r);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=76.94a1f2f2.chunk.js.map