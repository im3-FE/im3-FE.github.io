(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["best"],{"3f41":function(t,e,s){"use strict";s("4870")},4870:function(t,e,s){},c1e8:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"section_best"},[s("global-header",{attrs:{title:"베스트도전",type:t.headerType}}),s("router-view",{staticClass:"view"})],1)},n=[],a=s("d4ec"),c=s("262e"),r=s("2caf"),l=s("9ab4"),o=s("1b40"),u=s("cd24"),d=function(t){Object(c["a"])(s,t);var e=Object(r["a"])(s);function s(){var t;return Object(a["a"])(this,s),t=e.apply(this,arguments),t.headerType={searchBtn:"Y"},t}return s}(o["d"]);d=Object(l["a"])([Object(o["a"])({components:{GlobalHeader:u["a"]}})],d);var p=d,f=p,b=s("2877"),h=Object(b["a"])(f,i,n,!1,null,"3dff220e",null);e["default"]=h.exports},cd24:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"global-header under-border"},[s("div",{staticClass:"left-btns"},[t.type.prevBtn?s("button",{on:{click:function(e){return t.$emit("prev")}}},[s("span",{staticClass:"hidden"},[t._v("이전 페이지로")]),s("i",{staticClass:"fas fa-chevron-left"})]):t._e(),t.type.cookieBtn?s("button",{on:{click:function(e){return t.$emit("cookie")}}},[s("span",{staticClass:"hidden"},[t._v("쿠키오븐")]),s("i",{staticClass:"fas fa-cookie-bite cookie"})]):t._e(),t.type.textBtn?s("button",{staticClass:"text-btns",class:t.type.textBtn[1],style:{opacity:t.textBtnOpacity},on:{click:function(e){return t.$emit("text")}}},[t._v(" "+t._s(t.type.textBtn[0])+" ")]):t._e()]),t.title?s("h1",{staticClass:"title",class:{hidden:"webtoon"===t.isRoute},style:{opacity:t.titleOpacity}},[t._v(" "+t._s(t.title)+" ")]):t._e(),t.type.extraBtn?s("div",{staticClass:"extras"},[s("button",{class:{deactivate:!t.type.extraBtn[0]},on:{click:function(e){return t.$emit("filter-left")}}},[s("span",{staticClass:"hidden"},[t._v(t._s(t.type.extraBtn[0]?t.type.extraBtn[0]+"으로 정렬":"필터 목록으로"))]),s("i",{staticClass:"fas fa-caret-left"})]),s("button",{staticClass:"filter",on:{click:function(e){return t.$emit("filter")}}},[t._v(" "+t._s(t.type.extraBtn[1])+" "),s("span",{staticClass:"hidden"},[t._v("누르면 필터 목록으로")])]),s("button",{class:{deactivate:!t.type.extraBtn[2]},on:{click:function(e){return t.$emit("filter-right")}}},[s("span",{staticClass:"hidden"},[t._v(t._s(t.type.extraBtn[2]?t.type.extraBtn[2]+"으로 정렬":"필터 목록으로"))]),s("i",{staticClass:"fas fa-caret-right"})])]):t._e(),s("div",{staticClass:"right-btns"},[t.type.zzBtn?s("button",{on:{click:function(e){return t.$emit("zz")}}},[s("span",{staticClass:"hidden"},[t._v("겟짤!")]),s("i",{staticClass:"far fa-comment-dots"})]):t._e(),t.type.searchBtn?s("button",{on:{click:function(e){return t.$emit("search")}}},[s("span",{staticClass:"hidden"},[t._v("검색")]),s("i",{staticClass:"fas fa-search"})]):t._e()])])},n=[],a=s("d4ec"),c=s("bee2"),r=s("262e"),l=s("2caf"),o=(s("ac1f"),s("1276"),s("9ab4")),u=s("1b40"),d=function(t){Object(r["a"])(s,t);var e=Object(l["a"])(s);function s(){var t;return Object(a["a"])(this,s),t=e.apply(this,arguments),t.sc=!0,t.titleOpacity=1,t.textBtnOpacity=1,t.aF=null,t}return Object(c["a"])(s,[{key:"isRoute",get:function(){return this.$route.path.split("/")[1]}},{key:"scrollEvent",value:function(){return 0===document.scrollingElement.scrollTop?(cancelAnimationFrame(this.aF),this.textBtnOpacity=1,this.titleOpacity=0,void this.$el.classList.remove("under-border")):document.scrollingElement.scrollTop>=100?(this.titleOpacity=1,void(this.textBtnOpacity=0)):void(this.sc&&(this.sc=!1,this.aF=requestAnimationFrame(this.titleEvent)))}},{key:"titleEvent",value:function(){this.textBtnOpacity=0,this.$el.classList.remove("under-border"),this.$el.classList.add("under-border"),this.titleOpacity=document.scrollingElement.scrollTop/100,this.sc=!0}},{key:"mounted",value:function(){"recommend"===this.isRoute&&(document.addEventListener("scroll",this.scrollEvent),this.scrollEvent())}},{key:"beforeDestroy",value:function(){document.removeEventListener("scroll",this.scrollEvent)}}]),s}(u["d"]);Object(o["a"])([Object(u["b"])()],d.prototype,"title",void 0),Object(o["a"])([Object(u["b"])()],d.prototype,"type",void 0),d=Object(o["a"])([Object(u["a"])({components:{}})],d);var p=d,f=p,b=(s("3f41"),s("2877")),h=Object(b["a"])(f,i,n,!1,null,"1fced4bc",null);e["a"]=h.exports}}]);
//# sourceMappingURL=best.030360ba.js.map