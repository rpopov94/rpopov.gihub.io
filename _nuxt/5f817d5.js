(window.webpackJsonp=window.webpackJsonp||[]).push([[15,3,5],{952:function(t,e,n){"use strict";n.r(e);n(306);var r={props:{item:Object}},o=n(69),component=Object(o.a)(r,(function(){var t,e,n=this,r=n._self._c;return r("div",{staticClass:"mb-2"},[r("b-card",{staticClass:"h-100",staticStyle:{"min-height":"200px","max-width":"400px"},attrs:{"img-src":"/images/"+n.item.image,"img-alt":"Image","img-top":"",tag:"article"}},[n.item&&null!==(t=n.item)&&void 0!==t&&t.link?r("b-card-text",[r("b-link",{staticClass:"title",attrs:{href:null===(e=n.item)||void 0===e?void 0:e.link}},[n._v("\n        "+n._s(n.item.layout)+"\n      ")])],1):r("b-card-text",[r("b-link",{staticClass:"title",attrs:{to:n.item.path}},[n._v("\n        "+n._s(n.item.layout)+"\n      ")])],1),n._v(" "),r("b-card-text",[n._v("\n      "+n._s(n.item.abstract)+"\n    ")])],1)],1)}),[],!1,null,"8510eff6",null);e.default=component.exports},953:function(t,e,n){var content=n(959);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(93).default)("c22eea20",content,!0,{sourceMap:!1})},958:function(t,e,n){"use strict";n(953)},959:function(t,e,n){var r=n(92)((function(i){return i[1]}));r.push([t.i,".not-found{align-items:center;display:flex;flex-direction:column;height:100%;justify-content:center}.not-found__title{font-size:4rem;margin-bottom:2rem}.not-found__description{font-size:2rem;margin-bottom:2rem}.not-found__link{font-size:1.5rem}",""]),r.locals={},t.exports=r},967:function(t,e,n){var content=n(976);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(93).default)("2cc710cc",content,!0,{sourceMap:!1})},973:function(t,e,n){"use strict";n.r(e);n(958);var r=n(69),component=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-4 not-found"},[e("h1",{staticClass:"not-found__title"},[t._v("404 - Страница не найдена")]),t._v(" "),e("p",{staticClass:"not-found__description"},[t._v("К сожалению, запрашиваемая вами страница не найдена.")]),t._v(" "),e("p",{staticClass:"not-found__link"},[e("nuxt-link",{attrs:{to:"/"}},[t._v("Вернуться на главную страницу")])],1)])}),[],!1,null,null,null);e.default=component.exports},975:function(t,e,n){"use strict";n(967)},976:function(t,e,n){var r=n(92)((function(i){return i[1]}));r.push([t.i,".tag[data-v-7795ac5c]{background-color:#41b38a;transition:transform .2s}",""]),r.locals={},t.exports=r},990:function(t,e,n){"use strict";n.r(e);var r=n(24),o=(n(82),n(2),n(1),n(165),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n({deep:!0}).only(["layout","image","slug","tags","abstract"]).where({draft:{$ne:!0}}).where({tags:{$containsAny:[r.tag]}}).sortBy("date","desc").fetch();case 3:return o=(o=e.sent).filter((function(t){return!t.path.startsWith("/projects/")})),e.abrupt("return",{tags:o,title:r.tag});case 6:case"end":return e.stop()}}),e)})))()}}),c=(n(975),n(69)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-4"},[e("main",{staticClass:"pb-5"},[0===t.tags.length?e("div",[e("error")],1):e("div",[e("h1",{staticClass:"mb-5 text-center"},[t._v("\n        Список статей по тегу #"+t._s(t.title)+"\n      ")]),t._v(" "),e("hr"),t._v(" "),e("b-row",t._l(t.tags,(function(t,n){return e("b-col",{key:n,attrs:{md:"4"}},[e("item",{staticClass:"theme",attrs:{item:t}})],1)})),1)],1)])])}),[],!1,null,"7795ac5c",null);e.default=component.exports;installComponents(component,{Error:n(973).default,Item:n(952).default})}}]);