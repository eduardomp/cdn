(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-92368878"],{"828d":function(t,e,n){"use strict";n.d(e,"g",(function(){return o})),n.d(e,"d",(function(){return r})),n.d(e,"e",(function(){return c})),n.d(e,"b",(function(){return i})),n.d(e,"f",(function(){return s})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return l})),n.d(e,"h",(function(){return d})),n("99af");var a=n("b775"),o=function(t,e){return Object(a.a)({method:"GET",url:"https://api.covalenthq.com/v1/".concat(t,"/address/").concat(e,"/balances_v2/?no-nft-fetch=true&key=ckey_4c2c43910c9c4730830a3551927")})},r=function(t,e,n,o){return Object(a.a)({method:"GET",url:"/api/proxy?url="+encodeURIComponent("https://api.yshyqxx.com/api/v1/klines?symbol=".concat(t,"&interval=").concat(e,"&startTime=").concat(n,"&endTime=").concat(o))})},c=function(t){return Object(a.a)({method:"GET",url:"/api/proxy?url="+encodeURIComponent(t)})},i=function(t){return Object(a.a)({method:"GET",url:"/api/v1/price",params:{chain:t}})},s=function(t,e,n,o){return Object(a.a)({method:"GET",url:"https://api.covalenthq.com/v1/1/tokens/".concat(e,"/token_holders/?block-height=").concat(o,"&page-number=0&page-size=").concat(n,"&key=ckey_4c2c43910c9c4730830a3551927")})},u=function(t){return Object(a.a)({method:"GET",url:"/api/v1/gas_price",params:{chain:t}})},l=function(){return Object(a.a)({method:"GET",url:"/api/v1/get_VipUser"})},d=function(t,e,n){return Object(a.a)({method:"GET",url:"/api/v1/contact_scan",params:{mac:t,expiry:e,tokenAddress:n}})}},c074:function(t,e,n){"use strict";n.r(e);var a=n("b85c"),o=n("1da1"),r=(n("e9c4"),n("c740"),n("96cf"),n("7be8")),c=n.n(r),i=n("828d"),s=n("05b3"),u=n("b893"),l=n("901e"),d=n.n(l),b={name:"Documentation",components:{GridLayout:c.a.GridLayout,GridItem:c.a.GridItem},data:function(){return{loading:{loadMarket:!1},layout:[],websocketObj:null,wsHeartFlag:!1,reconnectTime:0,maxConnect:100,wsUrl:"wss://stream.yshyqxx.com/stream",apiUrl:"https://fxhapi.feixiaohao.cc/public/v1/ticker?limit=300",colNum:12}},methods:{initWebsocket:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r,c,s,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading.loadMarket=!0,e.next=3,Object(i.e)(t.apiUrl);case 3:if(n=e.sent,t.loading.loadMarket=!1,o=2,r=2,n.data){c=Object(a.a)(n.data);try{for(c.s();!(s=c.n()).done;)"BTC"===(l=s.value).symbol?(o=8,r=6):"ETH"===l.symbol?(o=4,r=4):(l.symbol,o=2,r=2),t.layout.push({x:2*t.layout.length%(t.colNum||12),y:t.layout.length+(t.colNum||12),w:o,h:r,i:l.id,symbol:l.symbol,params:Object(u.k)(l.symbol)+"usdt@miniTicker@3000ms",price:l.price_usd,percent:l.percent_change_24h>0?"+"+l.percent_change_24h:l.percent_change_24h})}catch(t){c.e(t)}finally{c.f()}}t.webSocketObj=new WebSocket(t.wsUrl),t.webSocketObj.onmessage=t.onMessage,t.webSocketObj.onopen=t.onOpen,t.webSocketObj.onerror=t.onError,t.webSocketObj.onclose=t.onClose;case 13:case"end":return e.stop()}}),e)})))()},getColor:function(t){return t>=-.1&&t<=.1?"background: rgb(244, 244, 244)":t<-.1&&t>=-5?"background: rgba(243, 57, 57, 0.5)":t<-5&&t>=-10?"background: rgba(243, 57, 57, 0.75)":t<-10&&t>=-20?"background: rgba(243, 57, 57, 0.9)":t<-20?"background: rgba(243, 57, 57, 1)":t>.1&&t<=5?"background: rgba(0, 153, 51, 0.25)":t>5&&t<=10?"background: rgba(0, 153, 51, 0.5)":t>10&&t<=15?"background: rgba(0, 153, 51, 0.75)":t>15?"background: rgba(0, 153, 51, 1)":void 0},onOpen:function(){if(1===this.webSocketObj.readyState){this.wsHeartFlag=!0;var t={id:1,method:"SUBSCRIBE",params:s.l};this.webSocketObj.send(JSON.stringify(t)),this.reconnectTime=0}},timingHeart:function(){var t=this;if(this.wsHeartFlag){var e={id:1,method:"SUBSCRIBE",params:s.l};this.webSocketObj.send(JSON.stringify(e))}this.wsHeart=setTimeout((function(){t.timingHeart()}),1e5)},onMessage:function(t){if(t.data){var e=JSON.parse(t.data);if(e.stream){var n=this.layout.findIndex((function(t){return t.params===e.stream}));n>-1&&(this.layout[n].price=new d.a(e.data.c).toNumber(),this.layout[n].percent=new d.a(e.data.c).minus(e.data.o).dividedBy(e.data.o).multipliedBy(100).decimalPlaces(2).toNumber())}}},onError:function(){var t=this;clearTimeout(this.wsHeart),this.wsHeartFlag=!1,this.reconnectTime<=this.maxConnect?setTimeout((function(){t.onOpen(),t.reconnectTime+=1}),5e3):this.onClose()},onClose:function(){this.wsHeartFlag=!1,this.webSocketObj&&this.webSocketObj.close&&this.webSocketObj.close()},getFont:function(t,e){return 1===t?"BTC"===e?"font-size: 64px;":"ETH"===e?"font-size: 48px;":"font-size: 16px;":2===t?"BTC"===e?"font-size: 36px;":"ETH"===e?"font-size: 28px;":"font-size: 12px;":"BTC"===e?"font-size: 24px;":"ETH"===e?"font-size: 20px;":"font-size: 12px;"}},created:function(){this.initWebsocket()},destroyed:function(){this.onClose()}},m=b,p=(n("d98c"),n("2877")),f=Object(p.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading.loadMarket,expression:"loading.loadMarket"}],staticClass:"container"},[n("el-tag",{staticClass:"info",attrs:{type:"danger",size:"medium",effect:"dark"}},[t._v("TokenTool.App")]),n("grid-layout",{attrs:{layout:t.layout,"col-num":t.colNum,"row-height":30,"is-draggable":!0,"is-resizable":!1,"is-mirrored":!1,"vertical-compact":!0,"use-css-transforms":!0,margin:[2,2]},on:{"update:layout":function(e){t.layout=e}}},t._l(t.layout,(function(e){return n("grid-item",{key:e.i,attrs:{isResizable:!1,x:e.x,y:e.y,w:e.w,h:e.h,i:e.i}},[n("div",{staticClass:"gridItem",style:t.getColor(e.percent)},[n("span",{style:t.getFont(1,e.symbol)},[t._v(t._s(e.symbol))]),n("span",{staticClass:"price",style:t.getFont(2,e.symbol)},[t._v("$"+t._s(e.price))]),n("span",{staticClass:"percent",style:t.getFont(3,e.symbol)},[t._v(t._s(e.percent)+"%")])])])})),1)],1)}),[],!1,null,"6c47f26b",null);e.default=f.exports},d98c:function(t,e,n){"use strict";n("edf1")},edf1:function(t,e,n){}}]);