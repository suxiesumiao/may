webpackJsonp([46],{"5u1E":function(e,t){},"aM+H":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("2uEE"),o=n.n(i),r=n("q4mE"),a=n.n(r),s=(n("Oe8W"),{name:"ChooseAddress",data:function(){return{currentIndex:null,searching:"",currentTouchStartEvent:null,camp:null,temPath:""}},beforeRouteEnter:function(e,t,n){n(function(e){e.temPath=t.path})},computed:{baidumap:function(){return this.$store.getters.baidumap},coords:function(){return this.$store.getters.coords},positionNeighbor:function(){return this.$store.state.positionModule.position.pois}},watch:{},mounted:function(){this.init()},methods:{init:function(){var e=this;if(window.BMap&&this.coords){this.map=new window.BMap.Map("mapcontainer"),this.map.centerAndZoom(new window.BMap.Point(this.coords.longitude,this.coords.latitude),15);var t=o.a;this.map.setMapStyle({styleJson:t}),this.map.addEventListener("dragstart",function(){e.$refs.inputing.blur()});var n=new window.BMap.Geocoder;this.map.addEventListener("touchstart",function(t){e.currentTouchStartEvent=t}),this.map.addEventListener("touchend",function(){var t=e.currentTouchStartEvent.point;n.getLocation(t,function(t){var n=t.addressComponents;e.camp={countryCode:"0",countryName:"中国",provinceCode:"",provinceName:n.province,cityCode:e.$store.state.positionModule.position.cityCode.toString(),cityName:n.city,areaCode:e.$store.state.positionModule.position.addressComponent.adcode,areaName:n.district,streetCode:"",streetName:n.street,address:n.streetNumber},e.campPlain=t.address,e.searching=n.province+n.city+n.district+n.street+n.streetNumber});var i=new window.BMap.Icon(a.a,new window.BMap.Size(50,50)),o=new window.BMap.Marker(t,{icon:i}),r=new window.BMap.Circle(t,200,{strokeColor:"transparent",strokeWeight:1,strokeOpacity:0,fillColor:"#15baff",fillOpacity:.25}),s=new window.BMap.Circle(t,800,{strokeColor:"transparent",strokeWeight:1,strokeOpacity:0,fillColor:"#15baff",fillOpacity:.1});e.map.clearOverlays(),e.map.addOverlay(o),e.map.addOverlay(r),e.map.addOverlay(s)})}},getDis:function(e){return e<1e3?e+"m":Math.ceil((e/1e3).toFixed(2))+"km"},confirm:function(){this.camp&&this.campPlain?this.$route.query.relid?(this.$sessionStorage.setItem("modifyRelInfoSelected",this.camp),this.$sessionStorage.setItem("modifyRelInfoSelectedPlain",this.campPlain),this.$router.push({path:"/modifyrelinfo",query:{relid:this.$route.query.relid}})):(this.$sessionStorage.setItem("addRelInfoSelected",this.camp),this.$sessionStorage.setItem("addRelInfoSelectedPlain",this.campPlain),this.$router.push({path:"/addrelinfo"})):alert("请选择地址")},chooseNeg:function(e){this.currentIndex=e},search:function(){var e=this;(new window.BMap.Geocoder).getPoint(this.searching,function(t){t&&(e.map.centerAndZoom(t,15),e.map.addOverlay(new window.BMap.Marker(t)))})}}}),c={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"chooseaddress"}},[n("header",[n("Backfront",{attrs:{maintitle:"选择亲属地址",isNormal:!0,nextTitle:"下一步"},on:{back:e.confirm}})],1),e._v(" "),n("div",{attrs:{id:"searching"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searching,expression:"searching"}],ref:"inputing",attrs:{type:"text",placeholder:"请在这里搜索地址..."},domProps:{value:e.searching},on:{keydown:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.search(t):null},input:function(t){t.target.composing||(e.searching=t.target.value)}}})]),e._v(" "),e._m(0),e._v(" "),n("div",{staticClass:"tail"}),e._v(" "),n("footer",[n("div",{staticClass:"confirm",on:{click:e.confirm}},[e._v("确定")])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("main",[t("div",{attrs:{id:"mapcontainer"}})])}]};var d=n("VU/8")(s,c,!1,function(e){n("5u1E")},"data-v-4e940881",null);t.default=d.exports}});