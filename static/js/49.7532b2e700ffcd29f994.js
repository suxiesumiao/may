webpackJsonp([49],{"9+8Z":function(t,n){},D6dV:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("2uEE"),o=e.n(i),a=(e("q4mE"),{name:"HospitalNearby",data:function(){return{}},computed:{baidumap:function(){return this.$store.getters.baidumap},coords:function(){return this.$store.getters.coords},positionNeighbor:function(){return this.$store.state.positionModule.position.pois}},watch:{},mounted:function(){this.init()},methods:{init:function(){var t=this;if(window.BMap&&this.coords){this.map=new window.BMap.Map("mapcontainer"),this.map.centerAndZoom(new window.BMap.Point(this.coords.longitude,this.coords.latitude),14);var n=o.a;this.map.setMapStyle({styleJson:n}),this.map.addEventListener("dragstart",function(){});new window.BMap.Geocoder;this.map.addEventListener("touchstart",function(t){}),this.map.addEventListener("touchend",function(){});var e=new window.BMap.RidingRoute(t.map,{renderOptions:{map:t.map,panel:"r-result",autoViewport:!0}}),i=new BMap.Point(117.041742,36.639813),a=new BMap.Point(117.051842,36.637813);e.search(i,a),e.setPolylinesSetCallback(function(t){console.log(t)})}},routeBack:function(){this.$router.push({path:"/consultconfirm"})},confirm:function(){}}}),s={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"hospitalnearby"}},[n("header",[n("Backfront",{attrs:{maintitle:"山东大学齐鲁医院",isNormal:!0,nextTitle:"下一步"},on:{back:this.routeBack}})],1),this._v(" "),this._m(0),this._v(" "),n("div",{attrs:{id:"r-result"}}),this._v(" "),this._m(1)])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("main",[n("div",{attrs:{id:"mapcontainer"}})])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("footer",[e("div",{staticClass:"container"},[e("h3",[t._v("医院简介")]),t._v(" "),e("p",[t._v("山东大学齐鲁医院位于山东省济南市文化西路107号、山东省济南市高新区天辰路2000号，始建于公元1890年，是一所三级综合医院，是济南市医保定点医院。")]),t._v(" "),e("p",[t._v("山东大学齐鲁医院位于山东省济南市文化西路107号、山东省济南市高新区天辰路2000号，始建于公元1890年，是一所三级综合医院，是济南市医保定点医院。")]),t._v(" "),e("p",[t._v("山东大学齐鲁医院位于山东省济南市文化西路107号、山东省济南市高新区天辰路2000号，始建于公元1890年，是一所三级综合医院，是济南市医保定点医院。")]),t._v(" "),e("p",[t._v("山东大学齐鲁医院位于山东省济南市文化西路107号、山东省济南市高新区天辰路2000号，始建于公元1890年，是一所三级综合医院，是济南市医保定点医院。")])])])}]};var r=e("VU/8")(a,s,!1,function(t){e("9+8Z")},"data-v-3270b172",null);n.default=r.exports}});