(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-contact-contact"],{"39b1":function(t,n,a){"use strict";a.r(n);var e=a("c469"),i=a("ca1b");for(var c in i)"default"!==c&&function(t){a.d(n,t,function(){return i[t]})}(c);a("ddd9");var o=a("2877"),r=Object(o["a"])(i["default"],e["a"],e["b"],!1,null,"37a0b5fa",null);n["default"]=r.exports},"4d69":function(t,n,a){var e=a("86fc");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=a("4f06").default;i("4fe09fcb",e,!0,{sourceMap:!1,shadowMode:!1})},"86fc":function(t,n,a){n=t.exports=a("2350")(!1),n.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.contact uni-image[data-v-37a0b5fa]{width:100%;height:230px}.contact .phone[data-v-37a0b5fa]{font-size:%?40?%;line-height:%?80?%;border-bottom:1px solid #eee;padding:%?10?% %?15?%}.contact .address[data-v-37a0b5fa]{font-size:%?40?%;line-height:%?80?%;border-bottom:1px solid #eee;padding:%?10?% %?15?%}.contact .map[data-v-37a0b5fa]{margin-top:20px;width:100%;height:350px}',""])},"8fd7":function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{latitude:23.24,longitude:113.29,scale:12,covers:[{latitude:23.24,longitude:113.29,iconPath:"../../static/icon/location.png",width:30,height:30}]}},methods:{callPhone:function(){uni.makePhoneCall({phoneNumber:"12345678"})}}};n.default=e},c469:function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",{staticClass:"contact"},[a("v-uni-image",{attrs:{src:"../../static/contact.jpg"}}),a("v-uni-view",{staticClass:"phone",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.callPhone.apply(void 0,arguments)}}},[t._v("联系电话：1234567（点击拨打）")]),a("v-uni-view",{staticClass:"address"},[t._v("联系地址：广州市白云区")]),a("v-uni-map",{staticClass:"map",attrs:{latitude:t.latitude,longitude:t.longitude,markers:t.covers}})],1)},i=[];a.d(n,"a",function(){return e}),a.d(n,"b",function(){return i})},ca1b:function(t,n,a){"use strict";a.r(n);var e=a("8fd7"),i=a.n(e);for(var c in e)"default"!==c&&function(t){a.d(n,t,function(){return e[t]})}(c);n["default"]=i.a},ddd9:function(t,n,a){"use strict";var e=a("4d69"),i=a.n(e);i.a}}]);