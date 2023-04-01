(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1034:function(t,n){function e(t){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}e.keys=function(){return[]},e.resolve=e,t.exports=e,e.id=1034},1035:function(t,n,e){"use strict";e.r(n),e.d(n,"state",(function(){return c})),e.d(n,"mutations",(function(){return l})),e.d(n,"actions",(function(){return j}));var r=e(25),o=(e(81),e(126)),c=function(){return{project:null,projects:[]}},l={SET_PROJECT:function(t,n){t.project=n},SET_PROJECTS:function(t,n){t.projects=n}},j={fetchProject:function(t,n){return Object(r.a)(regeneratorRuntime.mark((function e(){var r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,Object(o.$content)("projects").where({slug:n}).only(["layout","image","abstract","tags","body","createdAt","updatedAt"]).fetch();case 3:c=e.sent,r("SET_PROJECT",c||null);case 5:case"end":return e.stop()}}),e)})))()},fetchProjects:function(t){return Object(r.a)(regeneratorRuntime.mark((function n(){var e,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.commit,n.next=3,Object(o.$content)("projects").only(["layout","title","comments","permalink","github","image","path","date","slug","content","abstract"]).sortBy("date","desc").fetch();case 3:r=n.sent,e("SET_PROJECTS",r);case 5:case"end":return n.stop()}}),n)})))()}}},1036:function(t,n){},1080:function(t,n,e){var map={"./af":478,"./af.js":478,"./ar":479,"./ar-dz":480,"./ar-dz.js":480,"./ar-kw":481,"./ar-kw.js":481,"./ar-ly":482,"./ar-ly.js":482,"./ar-ma":483,"./ar-ma.js":483,"./ar-sa":484,"./ar-sa.js":484,"./ar-tn":485,"./ar-tn.js":485,"./ar.js":479,"./az":486,"./az.js":486,"./be":487,"./be.js":487,"./bg":488,"./bg.js":488,"./bm":489,"./bm.js":489,"./bn":490,"./bn-bd":491,"./bn-bd.js":491,"./bn.js":490,"./bo":492,"./bo.js":492,"./br":493,"./br.js":493,"./bs":494,"./bs.js":494,"./ca":495,"./ca.js":495,"./cs":496,"./cs.js":496,"./cv":497,"./cv.js":497,"./cy":498,"./cy.js":498,"./da":499,"./da.js":499,"./de":500,"./de-at":501,"./de-at.js":501,"./de-ch":502,"./de-ch.js":502,"./de.js":500,"./dv":503,"./dv.js":503,"./el":504,"./el.js":504,"./en-au":505,"./en-au.js":505,"./en-ca":506,"./en-ca.js":506,"./en-gb":507,"./en-gb.js":507,"./en-ie":508,"./en-ie.js":508,"./en-il":509,"./en-il.js":509,"./en-in":510,"./en-in.js":510,"./en-nz":511,"./en-nz.js":511,"./en-sg":512,"./en-sg.js":512,"./eo":513,"./eo.js":513,"./es":514,"./es-do":515,"./es-do.js":515,"./es-mx":516,"./es-mx.js":516,"./es-us":517,"./es-us.js":517,"./es.js":514,"./et":518,"./et.js":518,"./eu":519,"./eu.js":519,"./fa":520,"./fa.js":520,"./fi":521,"./fi.js":521,"./fil":522,"./fil.js":522,"./fo":523,"./fo.js":523,"./fr":524,"./fr-ca":525,"./fr-ca.js":525,"./fr-ch":526,"./fr-ch.js":526,"./fr.js":524,"./fy":527,"./fy.js":527,"./ga":528,"./ga.js":528,"./gd":529,"./gd.js":529,"./gl":530,"./gl.js":530,"./gom-deva":531,"./gom-deva.js":531,"./gom-latn":532,"./gom-latn.js":532,"./gu":533,"./gu.js":533,"./he":534,"./he.js":534,"./hi":535,"./hi.js":535,"./hr":536,"./hr.js":536,"./hu":537,"./hu.js":537,"./hy-am":538,"./hy-am.js":538,"./id":539,"./id.js":539,"./is":540,"./is.js":540,"./it":541,"./it-ch":542,"./it-ch.js":542,"./it.js":541,"./ja":543,"./ja.js":543,"./jv":544,"./jv.js":544,"./ka":545,"./ka.js":545,"./kk":546,"./kk.js":546,"./km":547,"./km.js":547,"./kn":548,"./kn.js":548,"./ko":549,"./ko.js":549,"./ku":550,"./ku.js":550,"./ky":551,"./ky.js":551,"./lb":552,"./lb.js":552,"./lo":553,"./lo.js":553,"./lt":554,"./lt.js":554,"./lv":555,"./lv.js":555,"./me":556,"./me.js":556,"./mi":557,"./mi.js":557,"./mk":558,"./mk.js":558,"./ml":559,"./ml.js":559,"./mn":560,"./mn.js":560,"./mr":561,"./mr.js":561,"./ms":562,"./ms-my":563,"./ms-my.js":563,"./ms.js":562,"./mt":564,"./mt.js":564,"./my":565,"./my.js":565,"./nb":566,"./nb.js":566,"./ne":567,"./ne.js":567,"./nl":568,"./nl-be":569,"./nl-be.js":569,"./nl.js":568,"./nn":570,"./nn.js":570,"./oc-lnc":571,"./oc-lnc.js":571,"./pa-in":572,"./pa-in.js":572,"./pl":573,"./pl.js":573,"./pt":574,"./pt-br":575,"./pt-br.js":575,"./pt.js":574,"./ro":576,"./ro.js":576,"./ru":577,"./ru.js":577,"./sd":578,"./sd.js":578,"./se":579,"./se.js":579,"./si":580,"./si.js":580,"./sk":581,"./sk.js":581,"./sl":582,"./sl.js":582,"./sq":583,"./sq.js":583,"./sr":584,"./sr-cyrl":585,"./sr-cyrl.js":585,"./sr.js":584,"./ss":586,"./ss.js":586,"./sv":587,"./sv.js":587,"./sw":588,"./sw.js":588,"./ta":589,"./ta.js":589,"./te":590,"./te.js":590,"./tet":591,"./tet.js":591,"./tg":592,"./tg.js":592,"./th":593,"./th.js":593,"./tk":594,"./tk.js":594,"./tl-ph":595,"./tl-ph.js":595,"./tlh":596,"./tlh.js":596,"./tr":597,"./tr.js":597,"./tzl":598,"./tzl.js":598,"./tzm":599,"./tzm-latn":600,"./tzm-latn.js":600,"./tzm.js":599,"./ug-cn":601,"./ug-cn.js":601,"./uk":602,"./uk.js":602,"./ur":603,"./ur.js":603,"./uz":604,"./uz-latn":605,"./uz-latn.js":605,"./uz.js":604,"./vi":606,"./vi.js":606,"./x-pseudo":607,"./x-pseudo.js":607,"./yo":608,"./yo.js":608,"./zh-cn":609,"./zh-cn.js":609,"./zh-hk":610,"./zh-hk.js":610,"./zh-mo":611,"./zh-mo.js":611,"./zh-tw":612,"./zh-tw.js":612};function r(t){var n=o(t);return e(n)}function o(t){if(!e.o(map,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=1080},295:function(t,n,e){"use strict";e.r(n);var r={name:"Navbar"},o=e(60),component=Object(o.a)(r,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"text-center"},[n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[n("b-navbar-brand",{attrs:{href:"/portfolio"}},[t._v("\n      Popov Roman\n    ")]),t._v(" "),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item",{attrs:{href:"/portfolio/articles"}},[t._v("\n          Blog\n        ")]),t._v(" "),n("b-nav-item",{attrs:{href:"/portfolio/projects"}},[t._v("\n          Projects\n        ")]),t._v(" "),n("b-nav-item",{attrs:{href:"/portfolio/contacts"}},[t._v("\n          Contacts\n        ")])],1)],1)],1)],1)}),[],!1,null,"5d9c2247",null);n.default=component.exports},296:function(t,n,e){"use strict";e.r(n);var r={components:{},data:function(){return{year:(new Date).getFullYear()}}},o=(e(683),e(60)),component=Object(o.a)(r,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"mx-auto max-w-6xl p-4 lg:px-16 text-center"},[n("hr"),t._v(" "),t._m(0),t._v("\n  © "+t._s(t.year)+" Popov Roman\n")])}),[function(){var t=this,n=t._self._c;return n("div",{staticClass:"grid grid-cols-5 items-center gap-4 px-4"},[n("a",{attrs:{href:"https://github.com/rpopov94"}},[n("img",{attrs:{src:"icons/git.svg"}})]),t._v(" "),n("a",{attrs:{href:"https://t.me/rpopov94"}},[n("img",{attrs:{src:"icons/tg.svg"}})]),t._v(" "),n("a",{attrs:{href:"https://hh.ru/resume/dcc8fc29ff07df16670039ed1f534d6e576d6b"}},[n("img",{attrs:{src:"icons/hh.svg"}})])])}],!1,null,"cf279964",null);n.default=component.exports},302:function(t,n,e){"use strict";var r=e(2),o=e.n(r);n.a=function(t,n){n("moment",o.a)}},357:function(t,n,e){var content=e(684);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(92).default)("76e1ed7a",content,!0,{sourceMap:!1})},358:function(t,n,e){var content=e(686);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(92).default)("6ad46769",content,!0,{sourceMap:!1})},448:function(t,n){function e(t){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}e.keys=function(){return[]},e.resolve=e,t.exports=e,e.id=448},620:function(t,n,e){"use strict";var r={layout:function(t){var n=t.redirect;return"/abc"===t.route.path&&n(301,"/contact"),"default"}},o=e(60),component=Object(o.a)(r,(function(){return(0,this._self._c)("div",{staticClass:"py-8 px-4 text-center text-red-400"},[this._v("\n  This page does not exist.\n")])}),[],!1,null,"5b22ecef",null);n.a=component.exports},621:function(t,n,e){"use strict";var r=e(295),o={components:{Footer:e(296).default,Navbar:r.default}},c=(e(685),e(60)),component=Object(c.a)(o,(function(){var t=this,n=t._self._c;return n("div",[n("Navbar"),t._v(" "),n("b-container",[n("nuxt")],1),t._v(" "),n("Footer")],1)}),[],!1,null,null,null);n.a=component.exports;installComponents(component,{Navbar:e(295).default,Footer:e(296).default})},626:function(t,n,e){e(627),t.exports=e(628)},683:function(t,n,e){"use strict";e(357)},684:function(t,n,e){var r=e(91)((function(i){return i[1]}));r.push([t.i,"input[data-v-cf279964]{border-color:#17a2b8;border-radius:5px}",""]),r.locals={},t.exports=r},685:function(t,n,e){"use strict";e(358)},686:function(t,n,e){var r=e(91)((function(i){return i[1]}));r.push([t.i,".p-4{padding:.5rem!important}",""]),r.locals={},t.exports=r},687:function(t,n,e){"use strict";e.r(n),e.d(n,"state",(function(){return c})),e.d(n,"mutations",(function(){return l})),e.d(n,"actions",(function(){return j}));var r=e(25),o=(e(81),e(126)),c=function(){return{article:null,articles:[]}},l={setArticle:function(t,article){t.article=article},SET_ARTICLES:function(t,n){t.articles=n}},j={fetchArticle:function(t,n){return Object(r.a)(regeneratorRuntime.mark((function e(){var r,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,Object(o.$content)("articles").where({slug:n}).only(["layout","image","abstract","tags","body","createdAt","updatedAt"]).fetch();case 3:article=e.sent,r("setArticle",article||null);case 5:case"end":return e.stop()}}),e)})))()},fetchArticles:function(t){return Object(r.a)(regeneratorRuntime.mark((function n(){var e,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.commit,n.next=3,Object(o.$content)("articles").only(["layout","title","comments","permalink","github","image","path","date","slug","content","abstract"]).sortBy("date","desc").fetch();case 3:r=n.sent,e("SET_ARTICLES",r);case 5:case"end":return n.stop()}}),n)})))()}}},693:function(t,n){},695:function(t,n){},708:function(t,n){},710:function(t,n){},738:function(t,n){},739:function(t,n){},744:function(t,n){},746:function(t,n){},753:function(t,n){},772:function(t,n){},808:function(t,n){},880:function(t,n){}},[[626,16,1,17]]]);