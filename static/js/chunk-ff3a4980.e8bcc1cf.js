(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-ff3a4980"],{"04f8":function(e,t,n){"use strict";n("942b")},"49f3":function(e,t,n){"use strict";n("d8e0")},"51d2":function(e){e.exports=JSON.parse('{"contractName":"ERC20","abi":[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]}')},7052:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return d})),n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return f}));var a=n("1da1"),s=(n("96cf"),n("51d2")),r=n("4360"),i=n("ed08"),o=n("cf29"),c=n("901e"),u=n.n(c),l=function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t,n,a,c){var l,d,p,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l="getTokenBalance",e.next=3,new c.eth.Contract(s.abi,t);case 3:return d=e.sent,p={name:"balanceOf",erc20:!0,data:[a]},e.next=7,Object(o.b)(d,p,r.a.state.dapp.web3.account,l);case 7:return f=e.sent,e.abrupt("return",new u.a(Object(i.d)(f,n)));case 9:case"end":return e.stop()}}),e)})));return function(t,n,a,s){return e.apply(this,arguments)}}(),d=function(e,t,n){return n.eth.getBalance(e).then((function(e){return new u.a(Object(i.d)(e,t))}))},p=function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t,n){var a,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new n.eth.Contract(s.abi,t);case 2:return a=e.sent,i={name:"symbol",erc20:!0,data:[]},e.next=6,Object(o.b)(a,i,r.a.state.dapp.web3.account);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t,n){var a,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new n.eth.Contract(s.abi,t);case 2:return a=e.sent,i={name:"decimals",erc20:!0,data:[]},e.next=6,Object(o.b)(a,i,r.a.state.dapp.web3.account);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},"828d":function(e,t,n){"use strict";n.d(t,"g",(function(){return s})),n.d(t,"d",(function(){return r})),n.d(t,"e",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"f",(function(){return c})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return l})),n("99af");var a=n("b775"),s=function(e,t){return Object(a.a)({method:"GET",url:"/api/proxy?url="+encodeURIComponent("https://vaulted-immense-chartreuse.glitch.me/?chainId=".concat(e,"&address=").concat(t))})},r=function(e,t,n,s){return Object(a.a)({method:"GET",url:"/api/proxy?url="+encodeURIComponent("https://api.yshyqxx.com/api/v1/klines?symbol=".concat(e,"&interval=").concat(t,"&startTime=").concat(n,"&endTime=").concat(s))})},i=function(e){return Object(a.a)({method:"GET",url:"/api/proxy?url="+encodeURIComponent(e)})},o=function(e){return Object(a.a)({method:"GET",url:"/api/v1/price",params:{chain:e}})},c=function(e,t,n,s){return Object(a.a)({method:"GET",url:"https://api.covalenthq.com/v1/1/tokens/".concat(t,"/token_holders/?block-height=").concat(s,"&page-number=0&page-size=").concat(n,"&key=ckey_fdf13a80f62d428cbe85ae4bb16")})},u=function(e){return Object(a.a)({method:"GET",url:"/api/v1/gas_price",params:{chain:e}})},l=function(){return Object(a.a)({method:"GET",url:"/api/v1/get_VipUser"})}},"942b":function(e,t,n){},"977b":function(e,t,n){"use strict";n.r(t);var a=n("b85c"),s=n("1da1"),r=n("5530"),i=(n("96cf"),n("b0c0"),n("d3b7"),n("3ca3"),n("ddb0"),n("b64b"),n("d81d"),n("a15b"),n("c740"),n("fa7e")),o=n("05b3"),c=n("828d"),u=n("61f7"),l=n("7052"),d=n("2f62"),p=n("b893"),f=n("ed08"),m=n("99e5"),b=n.n(m),y={name:"tokenHoldScan",components:{JsonEditor:i.a},computed:Object(r.a)({},Object(d.d)({chainNetwork:function(e){return e.dapp.chainNetwork},networkId:function(e){return e.dapp.web3.networkId},myAddress:function(e){return e.dapp.web3.account},initial:function(e){return e.dapp.web3.initial},web3Instance:function(e){return e.dapp.web3.web3Instance}})),data:function(){return{web3:null,num:100,blackHeight:"",global:{},value:"",progress:0,show:{progress:!1,editor:!1},tokenHoldScan:null,tokenHoldScanList:o.h,selectToken:null,userTokenAddress:[],loading:{scan:!1,exp:!1},dataList:[]}},methods:{selectChange:function(e){if(this.$route.path){var t=this.$route.path.lastIndexOf("/"),n=this.$route.path.substring(0,t)+"/"+Object(p.k)(e.name);this.$router.push(n)}},exportExcel:function(){var e=this;this.loading.exp=!0,Promise.all([n.e("chunk-aa6495fe"),n.e("chunk-71e3923d"),n.e("chunk-60f6f3de")]).then(n.bind(null,"4bf8")).then((function(t){var n=Object.keys(e.dataList[0]),a=e.dataList,s=e.formatJson(n,a),r=Object(f.g)(new Date,"{y}-{m}-{d}")+"_tokentool_"+e.tokenHoldScan.name+"_"+e.selectToken.name;t.export_json_to_excel({header:n,filename:r,data:s}),e.loading.exp=!1}))},formatJson:function(e,t){return t.map((function(t){return e.map((function(e){return"timestamp"===e?Object(f.g)(t[e]):t[e]}))}))},scanToken:function(){var e=this;return Object(s.a)(regeneratorRuntime.mark((function t(){var n,s,r,i,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.selectToken&&e.selectToken.address){t.next=3;break}return e.$message.error(e.$t("tokenHoldScan.scanAddressError")),t.abrupt("return");case 3:if(e.num&&!(e.num<1)){t.next=6;break}return e.$message.error(e.$t("tokenHoldScan.scanNumError")),t.abrupt("return");case 6:for(e.loading.scan=!0,e.progress=0,e.show.progress=!0,e.dataList=[],n=0;n<20;n++)setTimeout((function(){e.progress>=100||(e.progress=e.progress+5)}),1e3*n);return t.next=13,Object(c.f)(e.tokenHoldScan.chainId,e.selectToken.address,e.num,e.blackHeight);case 13:if(200===(s=t.sent).status&&s.data&&s.data.data&&s.data.data.items){r=Object(a.a)(s.data.data.items);try{for(r.s();!(i=r.n()).done;)o=i.value,e.dataList.push({Address:o.address,Balance:Object(f.d)(o.balance,o.contract_decimals)})}catch(e){r.e(e)}finally{r.f()}e.value=e.dataList.map((function(e){return e.Address+","+e.Balance})).join("\n"),e.progress=100,e.show.editor=!0}e.loading.scan=!1,e.$message.success(e.$t("success"));case 17:case"end":return t.stop()}}),t)})))()},remoteSelect:function(e){var t=this;return Object(s.a)(regeneratorRuntime.mark((function n(){var a,s,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a=t.userTokenAddress.findIndex((function(t){return t.address===e})),!Object(u.d)(e)||-1!==a){n.next=11;break}return t.loading.select=!0,n.next=5,Object(l.b)(e,t.web3);case 5:return s=n.sent,n.next=8,Object(l.a)(e,t.web3);case 8:r=n.sent,t.loading.select=!1,s&&r?t.userTokenAddress.push({name:s,address:e,decimals:parseInt(r)}):t.$message.error(t.$t("tokenHoldScan.invalidContractAddress"));case 11:case"end":return n.stop()}}),n)})))()},getTokenInfo:function(e,t){var n=this;return Object(s.a)(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!e||!t){a.next=7;break}return n.loading.select=!0,a.next=4,Object(c.g)(e,t);case 4:(s=a.sent).data&&(n.userTokenAddress=s.data),n.loading.select=!1;case 7:case"end":return a.stop()}}),a)})))()},initConfig:function(){var e=this;this.global.symbol=this.$route.meta.symbol;var t=o.h.findIndex((function(t){return t.symbol===e.global.symbol}));t>-1&&(this.tokenHoldScan=o.h[t]);var n=Object(p.h)(this.$route.meta.symbol);this.web3=new b.a(new b.a.providers.HttpProvider(n.rpcUrls[0]))}},created:function(){this.initConfig()}},h=y,v=(n("04f8"),n("2877")),k=Object(v.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"content"},[n("div",{staticClass:"inputBox"},[n("div",{staticClass:"inputContext inputContextLeft"},[n("div",{staticClass:"label"},[n("div",{staticClass:"textBox"},[n("span",[e._v(e._s(e.$t("tokenHoldScan.chain"))+" "),n("el-tooltip",{attrs:{content:e.$t("tokenHoldScan.selectChain"),effect:"dark",placement:"top-start"}},[n("i",{staticClass:"el-icon-question"})])],1),n("svg-icon",{style:"color: "+e.tokenHoldScan.color,attrs:{"icon-class":e.tokenHoldScan.icon}})],1)]),n("div",{staticClass:"switchBox"},[n("el-select",{staticStyle:{width:"100%"},attrs:{"value-key":"id",placeholder:e.$t("pleaseChoose")},on:{change:e.selectChange},model:{value:e.tokenHoldScan,callback:function(t){e.tokenHoldScan=t},expression:"tokenHoldScan"}},e._l(e.tokenHoldScanList,(function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t}},[n("span",{staticStyle:{float:"left"}},[e._v(e._s(t.name))]),n("span",{staticStyle:{float:"right","font-size":"13px"}},[n("svg-icon",{style:"color:"+t.color,attrs:{"icon-class":t.icon}})],1)])})),1)],1)]),n("div",{staticClass:"inputContext inputContextRight"},[n("div",{staticClass:"label"},[n("div",{staticClass:"textBox"},[n("span",[e._v(e._s(e.$t("tokenHoldScan.tokenAddress"))+" "),n("el-tooltip",{attrs:{content:e.$t("tokenHoldScan.tokenTips"),effect:"dark",placement:"top-start"}},[n("i",{staticClass:"el-icon-question"})])],1)])]),n("div",{staticClass:"switchBox"},[n("el-select",{directives:[{name:"loading",rawName:"v-loading",value:e.loading.select,expression:"loading.select"}],staticStyle:{width:"100%"},attrs:{"value-key":"address",filterable:"",remote:"","remote-method":e.remoteSelect,placeholder:e.$t("tokenHoldScan.tokenTips")},model:{value:e.selectToken,callback:function(t){e.selectToken=t},expression:"selectToken"}},e._l(e.userTokenAddress,(function(t){return n("el-option",{key:t.address,attrs:{label:t.name,value:t}},[n("span",{staticStyle:{float:"left"}},[e._v(e._s(t.name))]),n("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.address))])])})),1)],1)])]),n("div",{staticClass:"inputBox"},[n("div",{staticClass:"inputContext inputContextLeft"},[n("div",{staticClass:"label"},[n("div",{staticClass:"textBox"},[n("span",[e._v(e._s(e.$t("tokenHoldScan.scanNum")))])])]),n("div",{staticClass:"switchBox"},[n("el-input",{attrs:{oninput:"value=value.replace(/[^\\d]/g,'').substr(0, 6)",placeholder:e.$t("tokenHoldScan.scanNum")},model:{value:e.num,callback:function(t){e.num=t},expression:"num"}})],1)]),n("div",{staticClass:"inputContext inputContextRight"},[n("div",{staticClass:"label"},[n("div",{staticClass:"textBox"},[n("span",[e._v(e._s(e.$t("tokenHoldScan.blackHeight"))+" "),n("el-tooltip",{attrs:{content:e.$t("tokenHoldScan.blackHeightTips"),effect:"dark",placement:"top-start"}},[n("i",{staticClass:"el-icon-question"})])],1)])]),n("div",{staticClass:"switchBox"},[n("el-input",{attrs:{oninput:"value=value.replace(/[^\\d]/g,'')",placeholder:e.$t("tokenHoldScan.blackHeightTips")},model:{value:e.blackHeight,callback:function(t){e.blackHeight=t},expression:"blackHeight"}})],1)])]),n("div",{staticClass:"search"},[n("el-button",{attrs:{icon:"el-icon-search",size:"success",loading:e.loading.scan},on:{click:function(t){return e.scanToken()}}},[e._v(e._s(e.$t("tokenHoldScan.scan")))])],1),e.show.progress?n("div",{staticClass:"progress"},[n("el-progress",{attrs:{"text-inside":!0,"stroke-width":24,percentage:e.progress,status:"success"}})],1):e._e(),e.show.editor?n("div",{staticClass:"editor"},[n("div",{staticClass:"label"},[n("span",[e._v(e._s(e.$t("result")))]),n("span",[e._v("Address,Balance")])]),n("json-editor",{ref:"jsonEditor",staticClass:"editor",model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),e._m(0)],1):e._e(),e.show.editor?n("div",{staticClass:"searchBox"},[n("el-button",{attrs:{type:"success",loading:e.loading.exp},on:{click:function(t){return e.exportExcel()}}},[e._v(e._s(e.$t("export"))+" Execl")])],1):e._e()])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"label label-remark",staticStyle:{"justify-content":"center"}},[n("span",[e._v("Done by TokenTool.App")])])}],!1,null,"03693f81",null);t.default=k.exports},d8e0:function(e,t,n){},fa7e:function(e,t,n){"use strict";var a=n("56b3"),s=n.n(a);n("0dd0"),n("a7be"),n("acdf"),n("f9d4"),n("8822"),n("d2de"),n("ae67");var r={name:"JsonEditor",props:["value"],data:function(){return{jsonEditor:!1}},watch:{value:function(e){e!==this.jsonEditor.getValue()&&this.jsonEditor.setValue(this.value)}},mounted:function(){var e=this;this.jsonEditor=s.a.fromTextArea(this.$refs.textarea,{lineNumbers:!0,theme:"idea",screenReaderLabel:"text/javascript",lint:!0}),this.jsonEditor.setValue(this.value),this.jsonEditor.on("change",(function(t){e.$emit("changed",t.getValue())})),this.jsonEditor.on("inputRead",(function(t){e.$emit("input",t.getValue())}))},methods:{getValue:function(){return this.jsonEditor.getValue()}}},i=r,o=(n("49f3"),n("2877")),c=Object(o.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"json-editor"},[t("textarea",{ref:"textarea",attrs:{placeholder:"请输入地址和数量，以逗号分隔"}})])}),[],!1,null,"358ecc3c",null);t.a=c.exports}}]);