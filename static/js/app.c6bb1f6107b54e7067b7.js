webpackJsonp([14,12],{0:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}var a=n(6),i=s(a),r=n(29),o=(s(r),n(396)),u=s(o),l=n(260),c=s(l),d=n(257),f=s(d),m=n(215),j=s(m);n(352),n(351),n(256),n(350),n(353);var p=n(1),v=s(p),h=n(318),_=s(h);n(332);var g=n(362),b=s(g);i.default.use(b.default,{error:"./static/imgerror.jpg",loading:"./static/imgloading.gif",preLoad:1,attempt:1}),i.default.use(_.default),i.default.use(v.default),i.default.use(u.default);new i.default({el:"#app",router:f.default,store:c.default,render:function(t){return t(j.default)}})},30:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e._SHOPPING="_SHOPPING",e._ShopRes="_ShopRes",e.DETAILS_INFO="DETAILS_INFO",e.CARTLIST="CARTLIST",e.SHOPLIST="SHOPLIST",e.AddCart="AddCart",e.ReduceCart="ReduceCart",e.DeleteGoods="DeleteGoods",e.CHANCENUM="CHANCENUM"},215:function(t,e,n){n(337);var s=n(2)(n(239),n(383),null,null);t.exports=s.exports},239:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(367),i=s(a);e.default={data:function(){return{transitionName:"",is_Adclass:!0,Isshow:!0}},components:{Foot_Nav:i.default},mounted:function(){"details"==this.$route.name&&(this.Isshow=!1)},watch:{$route:function(t,e){"details"==t.name||"login"==t.name||"reg"==t.name?this.Isshow=!1:this.Isshow=!0,t.meta.title&&(document.title=t.meta.title)}}}},244:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"name",data:function(){return{}},methods:{cs:function(){console.log("zff")}}}},256:function(t,e){"use strict";!function(t,e){function n(){var e=i.getBoundingClientRect().width;e/u>540&&(e=540*u);var n=e/10;i.style.fontSize=n+"px",c.rem=t.rem=n}var s,a=t.document,i=a.documentElement,r=a.querySelector('meta[name="viewport"]'),o=a.querySelector('meta[name="flexible"]'),u=0,l=0,c=e.flexible||(e.flexible={});if(r){console.warn("将根据已有的meta标签来设置缩放比例");var d=r.getAttribute("content").match(/initial\-scale=([\d\.]+)/);d&&(l=parseFloat(d[1]),u=parseInt(1/l))}else if(o){var f=o.getAttribute("content");if(f){var m=f.match(/initial\-dpr=([\d\.]+)/),j=f.match(/maximum\-dpr=([\d\.]+)/);m&&(u=parseFloat(m[1]),l=parseFloat((1/u).toFixed(2))),j&&(u=parseFloat(j[1]),l=parseFloat((1/u).toFixed(2)))}}if(!u&&!l){var p=(t.navigator.appVersion.match(/android/gi),t.navigator.appVersion.match(/iphone/gi)),v=t.devicePixelRatio;u=p?v>=3&&(!u||u>=3)?3:v>=2&&(!u||u>=2)?2:1:1,l=1/u}if(i.setAttribute("data-dpr",u),!r)if(r=a.createElement("meta"),r.setAttribute("name","viewport"),r.setAttribute("content","initial-scale="+l+", maximum-scale="+l+", minimum-scale="+l+", user-scalable=no"),i.firstElementChild)i.firstElementChild.appendChild(r);else{var h=a.createElement("div");h.appendChild(r),a.write(h.innerHTML)}t.addEventListener("resize",function(){clearTimeout(s),s=setTimeout(n,300)},!1),t.addEventListener("pageshow",function(t){t.persisted&&(clearTimeout(s),s=setTimeout(n,300))},!1),"complete"===a.readyState?a.body.style.fontSize=12*u+"px":a.addEventListener("DOMContentLoaded",function(t){a.body.style.fontSize=12*u+"px"},!1),n(),c.dpr=t.dpr=u,c.refreshRem=n,c.rem2px=function(t){var e=parseFloat(t)*this.rem;return"string"==typeof t&&t.match(/rem$/)&&(e+="px"),e},c.px2rem=function(t){var e=parseFloat(t)/this.rem;return"string"==typeof t&&t.match(/px$/)&&(e+="rem"),e}}(window,window.lib||(window.lib={}))},257:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(6),i=s(a),r=n(397),o=s(r),u=n(215),l=(s(u),function(t){return n.e(1,function(){return t(n(375))})}),c=function(t){return n.e(3,function(){return t(n(371))})},d=function(t){return n.e(2,function(){return t(n(377))})},f=function(t){return n.e(5,function(){return t(n(373))})},m=function(t){return n.e(4,function(){return t(n(374))})},j=function(t){return n.e(0,function(){return t(n(372))})},p=function(t){return n.e(6,function(){return t(n(376))})},v=function(t){return n.e(7,function(){return t(n(378))})},h=function(t){return n.e(10,function(){return t(n(370))})},_=function(t){return n.e(9,function(){return t(n(369))})},g=function(t){return n.e(8,function(){return t(n(368))})},b=function(t){return n.e(11,function(){return t(n(364))})};i.default.use(o.default);var y=function(t,e,n){return n?n:{x:0,y:0}};e.default=new o.default({linkActiveClass:"active",mode:"history",base:"/vue/",scrollBehavior:y,routes:[{path:"/",name:"App",redirect:"/index",component:l,meta:{keepAlive:!0,title:"首页"}},{path:"/index",name:"index",component:l,meta:{keepAlive:!0,title:"首页"}},{path:"/classify",name:"classify",component:c,meta:{title:"分类"}},{path:"/subject_List",name:"subject_List",component:d,meta:{title:"人气品牌"}},{path:"/classify_goods_list",name:"goods_list",component:f,meta:{title:"品牌分类"}},{path:"/classify_goods_type_list",name:"goods_type_list",component:m,meta:{title:"产品分类列表"}},{path:"/details_GetGood_Desc",name:"details",component:j,meta:{title:"产品详情"}},{path:"/shopcart",name:"shopcart",component:p,meta:{title:"购物车"}},{path:"/user",name:"user",component:v,meta:{title:"用户中心"}},{path:"/register",name:"reg",component:h,meta:{title:"注册中心"}},{path:"/login",name:"login",component:_,meta:{title:"登陆中心"}},{path:"/search",name:"search",component:g,meta:{title:"搜索中心"}},{path:"*",name:"error",component:b}]})},258:function(t,e,n){"use strict";function s(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(32),r=a(i),o=n(6),u=(a(o),n(29)),l=(a(u),n(30)),c=s(l);e.default={Get_shopping:function(t,e){var n=t.commit,s=t.state,a=s.cartList;a[e.id]?a[e.id].num++:a[e.id]={num:e.data.count,id:e.data.id,name:e.data.title,price:e.data.ourprice,picture:e.data.goodspics},n(c.CARTLIST,a)},set_user:function(t,e){var n=t.commit;t.state;sessionStorage.setItem("userName",(0,r.default)(e)),sessionStorage.setItem("login",!0),n(c.LOGING,!0),n(c.GET_USER,e)},user_move:function(t){var e=t.commit;t.state;e(c.LOGING,!1),sessionStorage.removeItem("userName"),sessionStorage.removeItem("login")}}},259:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={cartList:function(t){return t.cartList},details_info:function(t){return t.details_info}}},260:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(6),i=s(a),r=n(29),o=s(r),u=n(259),l=s(u),c=n(258),d=s(c),f=n(261),m=s(f);i.default.use(o.default);var j={details_info:{},cartList:JSON.parse(localStorage.getItem("cartList"))||{}};e.default=new o.default.Store({state:j,mutations:m.default,actions:d.default,getters:l.default})},261:function(t,e,n){"use strict";function s(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i,r=n(265),o=a(r),u=n(32),l=a(u),c=n(21),d=a(c),f=n(30),m=s(f);e.default=(i={},(0,o.default)(i,m._ShopRes,function(t,e){localStorage.removeItem("cartList"),t.cartList={}}),(0,o.default)(i,m.DETAILS_INFO,function(t,e){t.details_info=e}),(0,o.default)(i,m.CARTLIST,function(t,e){t.cartList=(0,d.default)({},e),localStorage.setItem("cartList",(0,l.default)(t.cartList))}),(0,o.default)(i,m.AddCart,function(t,e){var n=e.cart;n[e.id].num>0&&n[e.id].num++,t.cartList=(0,d.default)({},n),localStorage.setItem("cartList",(0,l.default)(t.cartList)),console.log(n)}),(0,o.default)(i,m.ReduceCart,function(t,e){var n=e.cart;if(n[e.id].num--,n[e.id].num<=0){var s=confirm("确定删除该商品吗？");if(1!=s)return n[e.id].num=1;n[e.id]=null}t.cartList=(0,d.default)({},n),localStorage.setItem("cartList",(0,l.default)(t.cartList)),console.log(t.cartList[e.id])}),(0,o.default)(i,m.DeleteGoods,function(t,e){var n=e.cart;n[e.id]=null,t.cartList=(0,d.default)({},n),localStorage.setItem("cartList",(0,l.default)(t.cartList)),console.log(t.cartList[e.id])}),(0,o.default)(i,m.CHANCENUM,function(t,e){var n=e.cart,s=e.num,a=/^[0-9]*[1-9][0-9]*$/;isNaN(s)||s<=0||!a.test(s)?(n[e.id].num=1,alert("只允许输入至少为1的整数!")):n[e.id].num=e.num,t.cartList=(0,d.default)({},n),localStorage.setItem("cartList",(0,l.default)(t.cartList)),console.log(t.cartList[e.id])}),i)},332:function(t,e){},337:function(t,e){},349:function(t,e){},350:function(t,e){},351:function(t,e){},352:function(t,e){},353:function(t,e){},355:function(t,e,n){function s(t){return n(a(t))}function a(t){return i[t]||function(){throw new Error("Cannot find module '"+t+"'.")}()}var i={"./af":91,"./af.js":91,"./ar":98,"./ar-dz":92,"./ar-dz.js":92,"./ar-kw":93,"./ar-kw.js":93,"./ar-ly":94,"./ar-ly.js":94,"./ar-ma":95,"./ar-ma.js":95,"./ar-sa":96,"./ar-sa.js":96,"./ar-tn":97,"./ar-tn.js":97,"./ar.js":98,"./az":99,"./az.js":99,"./be":100,"./be.js":100,"./bg":101,"./bg.js":101,"./bm":102,"./bm.js":102,"./bn":103,"./bn.js":103,"./bo":104,"./bo.js":104,"./br":105,"./br.js":105,"./bs":106,"./bs.js":106,"./ca":107,"./ca.js":107,"./cs":108,"./cs.js":108,"./cv":109,"./cv.js":109,"./cy":110,"./cy.js":110,"./da":111,"./da.js":111,"./de":114,"./de-at":112,"./de-at.js":112,"./de-ch":113,"./de-ch.js":113,"./de.js":114,"./dv":115,"./dv.js":115,"./el":116,"./el.js":116,"./en-au":117,"./en-au.js":117,"./en-ca":118,"./en-ca.js":118,"./en-gb":119,"./en-gb.js":119,"./en-ie":120,"./en-ie.js":120,"./en-il":121,"./en-il.js":121,"./en-nz":122,"./en-nz.js":122,"./eo":123,"./eo.js":123,"./es":126,"./es-do":124,"./es-do.js":124,"./es-us":125,"./es-us.js":125,"./es.js":126,"./et":127,"./et.js":127,"./eu":128,"./eu.js":128,"./fa":129,"./fa.js":129,"./fi":130,"./fi.js":130,"./fo":131,"./fo.js":131,"./fr":134,"./fr-ca":132,"./fr-ca.js":132,"./fr-ch":133,"./fr-ch.js":133,"./fr.js":134,"./fy":135,"./fy.js":135,"./gd":136,"./gd.js":136,"./gl":137,"./gl.js":137,"./gom-latn":138,"./gom-latn.js":138,"./gu":139,"./gu.js":139,"./he":140,"./he.js":140,"./hi":141,"./hi.js":141,"./hr":142,"./hr.js":142,"./hu":143,"./hu.js":143,"./hy-am":144,"./hy-am.js":144,"./id":145,"./id.js":145,"./is":146,"./is.js":146,"./it":147,"./it.js":147,"./ja":148,"./ja.js":148,"./jv":149,"./jv.js":149,"./ka":150,"./ka.js":150,"./kk":151,"./kk.js":151,"./km":152,"./km.js":152,"./kn":153,"./kn.js":153,"./ko":154,"./ko.js":154,"./ky":155,"./ky.js":155,"./lb":156,"./lb.js":156,"./lo":157,"./lo.js":157,"./lt":158,"./lt.js":158,"./lv":159,"./lv.js":159,"./me":160,"./me.js":160,"./mi":161,"./mi.js":161,"./mk":162,"./mk.js":162,"./ml":163,"./ml.js":163,"./mn":164,"./mn.js":164,"./mr":165,"./mr.js":165,"./ms":167,"./ms-my":166,"./ms-my.js":166,"./ms.js":167,"./mt":168,"./mt.js":168,"./my":169,"./my.js":169,"./nb":170,"./nb.js":170,"./ne":171,"./ne.js":171,"./nl":173,"./nl-be":172,"./nl-be.js":172,"./nl.js":173,"./nn":174,"./nn.js":174,"./pa-in":175,"./pa-in.js":175,"./pl":176,"./pl.js":176,"./pt":178,"./pt-br":177,"./pt-br.js":177,"./pt.js":178,"./ro":179,"./ro.js":179,"./ru":180,"./ru.js":180,"./sd":181,"./sd.js":181,"./se":182,"./se.js":182,"./si":183,"./si.js":183,"./sk":184,"./sk.js":184,"./sl":185,"./sl.js":185,"./sq":186,"./sq.js":186,"./sr":188,"./sr-cyrl":187,"./sr-cyrl.js":187,"./sr.js":188,"./ss":189,"./ss.js":189,"./sv":190,"./sv.js":190,"./sw":191,"./sw.js":191,"./ta":192,"./ta.js":192,"./te":193,"./te.js":193,"./tet":194,"./tet.js":194,"./tg":195,"./tg.js":195,"./th":196,"./th.js":196,"./tl-ph":197,"./tl-ph.js":197,"./tlh":198,"./tlh.js":198,"./tr":199,"./tr.js":199,"./tzl":200,"./tzl.js":200,"./tzm":202,"./tzm-latn":201,"./tzm-latn.js":201,"./tzm.js":202,"./ug-cn":203,"./ug-cn.js":203,"./uk":204,"./uk.js":204,"./ur":205,"./ur.js":205,"./uz":207,"./uz-latn":206,"./uz-latn.js":206,"./uz.js":207,"./vi":208,"./vi.js":208,"./x-pseudo":209,"./x-pseudo.js":209,"./yo":210,"./yo.js":210,"./zh-cn":211,"./zh-cn.js":211,"./zh-hk":212,"./zh-hk.js":212,"./zh-tw":213,"./zh-tw.js":213};s.keys=function(){return Object.keys(i)},s.resolve=a,t.exports=s,s.id=355},367:function(t,e,n){n(349);var s=n(2)(n(244),n(395),null,null);t.exports=s.exports},383:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{attrs:{"enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut",mode:"out-in"}},[n("keep-alive",[t.$route.meta.keepAlive?n("router-view",{staticClass:"active_view"}):t._e()],1)],1),t._v(" "),n("transition",{attrs:{"enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut",mode:"out-in"}},[t.$route.meta.keepAlive?t._e():n("router-view",{staticClass:"active_view"})],1),t._v(" "),t.Isshow?n("Foot_Nav"):t._e()],1)},staticRenderFns:[]}},395:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[t._t("",[n("div",{staticClass:"foot-nav"},[n("ul",{staticClass:"Nav-list"},[n("router-link",{staticClass:"Nav-item-li",attrs:{to:"/index",tag:"li"}},[n("i",{staticClass:"iconfont icon-shouye"}),t._v(" "),n("p",[t._v("首页")])]),t._v(" "),n("router-link",{staticClass:"Nav-item-li",attrs:{to:"/classify",tag:"li"}},[n("i",{staticClass:"iconfont icon-tubiao3"}),t._v(" "),n("p",[t._v("分类")])]),t._v(" "),n("router-link",{staticClass:"Nav-item-li",attrs:{to:"/shopcart",tag:"li"}},[n("i",{staticClass:"iconfont icon-gouwuche"}),t._v(" "),n("p",[t._v("购物车")])]),t._v(" "),n("router-link",{staticClass:"Nav-item-li",attrs:{to:"/user",tag:"li"}},[n("i",{staticClass:"iconfont icon-yonghu"}),t._v(" "),n("p",[t._v("我的")])])],1)])])],2)},staticRenderFns:[]}},400:function(t,e){}});
//# sourceMappingURL=app.c6bb1f6107b54e7067b7.js.map