(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7c3a2fe4"],{"2c3d":function(t,e,n){"use strict";n("7e3b")},"49f3":function(t,e,n){"use strict";n("d8e0")},"7e3b":function(t,e,n){},"828d":function(t,e,n){"use strict";n.d(e,"h",(function(){return s})),n.d(e,"e",(function(){return o})),n.d(e,"f",(function(){return c})),n.d(e,"b",(function(){return r})),n.d(e,"g",(function(){return i})),n.d(e,"c",(function(){return l})),n.d(e,"a",(function(){return u})),n.d(e,"i",(function(){return d})),n.d(e,"d",(function(){return p})),n("99af");var a=n("b775"),s=function(t,e){return Object(a.a)({method:"GET",url:"https://api.covalenthq.com/v1/".concat(t,"/address/").concat(e,"/balances_v2/?no-nft-fetch=true&key=ckey_4c2c43910c9c4730830a3551927")})},o=function(t,e,n,s){return Object(a.a)({method:"GET",url:"/api/proxy?url="+encodeURIComponent("https://api.yshyqxx.com/api/v1/klines?symbol=".concat(t,"&interval=").concat(e,"&startTime=").concat(n,"&endTime=").concat(s))})},c=function(t){return Object(a.a)({method:"GET",url:"/api/proxy?url="+encodeURIComponent(t)})},r=function(t){return Object(a.a)({method:"GET",url:"https://api.coingecko.com/api/v3/simple/price?ids=".concat(t,"&vs_currencies=cny,usd")})},i=function(t,e,n,s){return Object(a.a)({method:"GET",url:"https://api.covalenthq.com/v1/".concat(t,"/tokens/").concat(e,"/token_holders/?block-height=").concat(s,"&page-number=0&page-size=").concat(n,"&key=ckey_4c2c43910c9c4730830a3551927")})},l=function(t){return Object(a.a)({method:"GET",url:"/api/v1/gas_price",params:{chain:t}})},u=function(){return Object(a.a)({method:"GET",url:"/api/v1/get_VipUser"})},d=function(t,e,n){return Object(a.a)({method:"GET",url:"/api/v1/contact_scan",params:{mac:t,expiry:e,tokenAddress:n}})},p=function(t){return Object(a.a)({method:"GET",url:"/api/v1/get_launchpad",params:{chainId:t}})}},"977b":function(t,e,n){"use strict";n.r(e);var a=n("b85c"),s=n("1da1"),o=n("5530"),c=(n("96cf"),n("b0c0"),n("d3b7"),n("3ca3"),n("ddb0"),n("b64b"),n("d81d"),n("a15b"),n("c740"),n("fa7e")),r=n("05b3"),i=n("828d"),l=n("61f7"),u=n("7052"),d=n("2f62"),p=n("b893"),f=n("ed08"),h=n("99e5"),b=n.n(h),m={name:"tokenHoldScan",components:{JsonEditor:c.a},computed:Object(o.a)({},Object(d.d)({chainNetwork:function(t){return t.dapp.chainNetwork},networkId:function(t){return t.dapp.web3.networkId},myAddress:function(t){return t.dapp.web3.account},initial:function(t){return t.dapp.web3.initial},web3Instance:function(t){return t.dapp.web3.web3Instance}})),data:function(){return{web3:null,num:100,blackHeight:"",global:{},value:"",progress:0,show:{progress:!1,editor:!1},tokenHoldScan:null,tokenHoldScanList:r.l,selectToken:null,userTokenAddress:[],loading:{scan:!1,exp:!1},dataList:[]}},methods:{selectChange:function(t){if(this.$route.path){var e=this.$route.path.lastIndexOf("/"),n=this.$route.path.substring(0,e)+"/"+Object(p.m)(t.name);this.$router.push(n)}},exportExcel:function(){var t=this;this.loading.exp=!0,Promise.all([n.e("chunk-5164a781"),n.e("chunk-519483dc"),n.e("chunk-fc6d179e")]).then(n.bind(null,"4bf8")).then((function(e){var n=Object.keys(t.dataList[0]),a=t.dataList,s=t.formatJson(n,a),o=Object(f.j)(new Date,"{y}-{m}-{d}")+"_tokentool_"+t.tokenHoldScan.name+"_"+t.selectToken.name;e.export_json_to_excel({header:n,filename:o,data:s}),t.loading.exp=!1}))},formatJson:function(t,e){return e.map((function(e){return t.map((function(t){return"timestamp"===t?Object(f.j)(e[t]):e[t]}))}))},scanToken:function(){var t=this;return Object(s.a)(regeneratorRuntime.mark((function e(){var n,s,o,c,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.selectToken&&t.selectToken.address){e.next=3;break}return t.$message.error(t.$t("tokenHoldScan.scanAddressError")),e.abrupt("return");case 3:if(t.num&&!(t.num<1)){e.next=6;break}return t.$message.error(t.$t("tokenHoldScan.scanNumError")),e.abrupt("return");case 6:for(t.loading.scan=!0,t.progress=0,t.show.progress=!0,t.dataList=[],n=0;n<20;n++)setTimeout((function(){t.progress>=100||(t.progress=t.progress+5)}),1e3*n);return e.next=13,Object(i.g)(t.tokenHoldScan.chainId,t.selectToken.address,t.num,t.blackHeight);case 13:if(200===(s=e.sent).status&&s.data&&s.data.data&&s.data.data.items){o=Object(a.a)(s.data.data.items);try{for(o.s();!(c=o.n()).done;)r=c.value,t.dataList.push({Address:r.address,Balance:Object(f.d)(r.balance,r.contract_decimals)})}catch(t){o.e(t)}finally{o.f()}t.value=t.dataList.map((function(t){return t.Address+","+t.Balance})).join("\n"),t.progress=100,t.show.editor=!0}t.loading.scan=!1,t.$message.success(t.$t("success"));case 17:case"end":return e.stop()}}),e)})))()},remoteSelect:function(t){var e=this;return Object(s.a)(regeneratorRuntime.mark((function n(){var a,s,o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a=e.userTokenAddress.findIndex((function(e){return e.address===t})),!Object(l.h)(t)||-1!==a){n.next=18;break}return e.loading.select=!0,n.next=5,Object(u.f)(t,e.web3);case 5:return o=n.sent,n.next=8,Object(u.c)(t,e.web3);case 8:if(c=n.sent,!o){n.next=13;break}s=1,n.next=16;break;case 13:return n.next=15,Object(u.a)(t,e.web3);case 15:s=n.sent;case 16:e.loading.select=!1,c&&s?e.userTokenAddress.push({name:c,address:t,decimals:parseInt(s)}):e.$message.error(e.$t("tokenHoldScan.invalidContractAddress"));case 18:case"end":return n.stop()}}),n)})))()},getTokenInfo:function(t,e){var n=this;return Object(s.a)(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!t||!e){a.next=7;break}return n.loading.select=!0,a.next=4,Object(i.h)(t,e).catch((function(t){return{data:null}}));case 4:(s=a.sent).data&&(n.userTokenAddress=s.data),n.loading.select=!1;case 7:case"end":return a.stop()}}),a)})))()},initConfig:function(){var t=this;this.global.symbol=this.$route.meta.symbol;var e=r.l.findIndex((function(e){return e.symbol===t.global.symbol}));e>-1&&(this.tokenHoldScan=r.l[e]);var n=Object(p.i)(this.$route.meta.symbol);this.web3=new b.a(new b.a.providers.HttpProvider(n.rpcUrls[0]))}},created:function(){this.initConfig()}},v=m,k=(n("2c3d"),n("2877")),g=Object(k.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"content"},[n("div",{staticClass:"inputBox"},[n("div",{staticClass:"inputContext inputContextLeft"},[n("div",{staticClass:"label"},[n("div",{staticClass:"textBox"},[n("span",[t._v(t._s(t.$t("tokenHoldScan.chain"))+" "),n("el-tooltip",{attrs:{content:t.$t("tokenHoldScan.selectChain"),effect:"dark",placement:"top-start"}},[n("i",{staticClass:"el-icon-question"})])],1),n("svg-icon",{style:"color: "+t.tokenHoldScan.color,attrs:{"icon-class":t.tokenHoldScan.icon}})],1)]),n("div",{staticClass:"switchBox"},[n("el-select",{staticStyle:{width:"100%"},attrs:{"value-key":"id",placeholder:t.$t("pleaseChoose")},on:{change:t.selectChange},model:{value:t.tokenHoldScan,callback:function(e){t.tokenHoldScan=e},expression:"tokenHoldScan"}},t._l(t.tokenHoldScanList,(function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e}},[n("span",{staticStyle:{float:"left"}},[t._v(t._s(e.name))]),n("span",{staticStyle:{float:"right","font-size":"13px"}},[n("svg-icon",{style:"color:"+e.color,attrs:{"icon-class":e.icon}})],1)])})),1)],1)]),n("div",{staticClass:"inputContext inputContextRight"},[n("div",{staticClass:"label"},[n("div",{staticClass:"textBox"},[n("span",[t._v(t._s(t.$t("tokenHoldScan.tokenAddress"))+" "),n("el-tooltip",{attrs:{content:t.$t("tokenHoldScan.tokenTips"),effect:"dark",placement:"top-start"}},[n("i",{staticClass:"el-icon-question"})])],1)])]),n("div",{staticClass:"switchBox"},[n("el-select",{directives:[{name:"loading",rawName:"v-loading",value:t.loading.select,expression:"loading.select"}],staticStyle:{width:"100%"},attrs:{"value-key":"address",filterable:"",remote:"","remote-method":t.remoteSelect,placeholder:t.$t("tokenHoldScan.tokenTips")},model:{value:t.selectToken,callback:function(e){t.selectToken=e},expression:"selectToken"}},t._l(t.userTokenAddress,(function(e){return n("el-option",{key:e.address,attrs:{label:e.name,value:e}},[n("span",{staticStyle:{float:"left"}},[t._v(t._s(e.name))]),n("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[t._v(t._s(e.address))])])})),1)],1)])]),n("div",{staticClass:"inputBox"},[n("div",{staticClass:"inputContext inputContextLeft"},[n("div",{staticClass:"label"},[n("div",{staticClass:"textBox"},[n("span",[t._v(t._s(t.$t("tokenHoldScan.scanNum")))])])]),n("div",{staticClass:"switchBox"},[n("el-input",{attrs:{oninput:"value=value.replace(/[^\\d]/g,'').substr(0, 6)",placeholder:t.$t("tokenHoldScan.scanNum")},model:{value:t.num,callback:function(e){t.num=e},expression:"num"}})],1)]),n("div",{staticClass:"inputContext inputContextRight"},[n("div",{staticClass:"label"},[n("div",{staticClass:"textBox"},[n("span",[t._v(t._s(t.$t("tokenHoldScan.blackHeight"))+" "),n("el-tooltip",{attrs:{content:t.$t("tokenHoldScan.blackHeightTips"),effect:"dark",placement:"top-start"}},[n("i",{staticClass:"el-icon-question"})])],1)])]),n("div",{staticClass:"switchBox"},[n("el-input",{attrs:{oninput:"value=value.replace(/[^\\d]/g,'')",placeholder:t.$t("tokenHoldScan.blackHeightTips")},model:{value:t.blackHeight,callback:function(e){t.blackHeight=e},expression:"blackHeight"}})],1)])]),n("div",{staticClass:"search"},[n("el-button",{attrs:{icon:"el-icon-search",size:"success",loading:t.loading.scan},on:{click:function(e){return t.scanToken()}}},[t._v(t._s(t.$t("tokenHoldScan.scan")))])],1),t.show.progress?n("div",{staticClass:"progress"},[n("el-progress",{attrs:{"text-inside":!0,"stroke-width":24,percentage:t.progress,status:"success"}})],1):t._e(),t.show.editor?n("div",{staticClass:"editor"},[n("div",{staticClass:"label"},[n("span",[t._v(t._s(t.$t("result")))]),n("span",[t._v("Address,Balance")])]),n("json-editor",{ref:"jsonEditor",staticClass:"editor",model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._m(0)],1):t._e(),t.show.editor?n("div",{staticClass:"searchBox"},[n("el-button",{attrs:{type:"success",loading:t.loading.exp},on:{click:function(e){return t.exportExcel()}}},[t._v(t._s(t.$t("export"))+" Execl")])],1):t._e()])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"label label-remark",staticStyle:{"justify-content":"center"}},[n("span",[t._v("Done by TokenTool.App")])])}],!1,null,"e1312782",null);e.default=g.exports},b775:function(t,e,n){"use strict";var a=n("bc3a"),s=n.n(a);s.a.defaults.timeout=3e4,s.a.defaults.baseURL="https://service.cointools.workers.dev/",e.a=s.a},d8e0:function(t,e,n){},fa7e:function(t,e,n){"use strict";var a=n("56b3"),s=n.n(a);n("0dd0"),n("a7be"),n("acdf"),n("f9d4"),n("8822"),n("d2de"),n("ae67");var o={name:"JsonEditor",props:["value"],data:function(){return{jsonEditor:!1}},watch:{value:function(t){t!==this.jsonEditor.getValue()&&this.jsonEditor.setValue(this.value)}},mounted:function(){var t=this;this.jsonEditor=s.a.fromTextArea(this.$refs.textarea,{lineNumbers:!0,theme:"idea",screenReaderLabel:"text/javascript",lint:!0}),this.jsonEditor.setValue(this.value),this.jsonEditor.on("change",(function(e){t.$emit("changed",e.getValue())})),this.jsonEditor.on("inputRead",(function(e){t.$emit("input",e.getValue())}))},methods:{getValue:function(){return this.jsonEditor.getValue()}}},c=o,r=(n("49f3"),n("2877")),i=Object(r.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"json-editor"},[e("textarea",{ref:"textarea",attrs:{placeholder:"请输入地址和数量，以逗号分隔"}})])}),[],!1,null,"358ecc3c",null);e.a=i.exports}}]);