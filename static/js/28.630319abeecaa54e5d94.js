webpackJsonp([28],{S7x2:function(t,e){},VnQx:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAjCAYAAADxG9hnAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjUzNEEzQ0U3MEUzRTExRTk4REUzQzMyODA4OTk0MTYyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjUzNEEzQ0U4MEUzRTExRTk4REUzQzMyODA4OTk0MTYyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTM0QTNDRTUwRTNFMTFFOThERTNDMzI4MDg5OTQxNjIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTM0QTNDRTYwRTNFMTFFOThERTNDMzI4MDg5OTQxNjIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5jz0pyAAABiUlEQVR42syXMVLDMBBFjYeCjnSUUUVLbhCX3CLcAEo6wg10A5wbmBMQnwCnTEXcUYobsJpZzWhEZMnSSkIz6xlHsvL8d/8qubhpj1XhcQ/RXxYEaCC2EOx7c8tKgDCIFmKN96/yUhcA+NIg5ODykkORBcQTxrUxt4O0iBwgWwuAPl+lBHnAL1lOrOkhTqlAGsz5ncdart9Qgaxw47Xn+hGi0z+oiZzwOQPijxoxiignvAQ8+4Pw0SAuJ7iGhBAxID5OCEqLL0iDb7EkKOp33bK+xSoB9hAfRBBWNWyKMEzBhrjHjPhiTpAFAjwmbPfVFMgVxHOkE3ws200tqBFE2apHCakHP2dZUxFhka3BdK2wbtjM7mn2jsoFYhuqsLozXVXBvXlA7GyWjT1rBEKqVEarQXHo7R3zB481WUC470axIIOjgbW5QATKH1wbVCBT6eG5QQaLZcV/UITP3YQC5GQcC72jiJOBmKrwkA2oQAbb34RSivDQDSgVGef2jhQg6meDCH34V4ABAJiIUgDWr5JUAAAAAElFTkSuQmCC"},kCTu:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("//Fk"),o=n.n(i),a=n("IcnI"),r=(n("2uEE"),n("q4mE")),s=n.n(r),c=a.a.getters.baidumap_ak;function d(t){var e=t.lat,n=t.lng;return new o.a(function(t,i){window.renderReverseBaidu=function(e){0===e.status?t(e):i("error")};var o=document.createElement("script");o.type="text/javascript",o.src="http://api.map.baidu.com/geocoder/v2/?callback=renderReverseBaidu&location="+e+","+n+"&output=json&pois=1&ak="+c,document.getElementsByTagName("head")[0].appendChild(o),setTimeout(function(){document.getElementsByTagName("head")[0].removeChild(o)},100)})}var l={name:"ChooseSelfInfoAddress",data:function(){return{camp:null,currentIndex:null,currentTouchStartEvent:null,negShow:!0,positionNeighbor_:null,searching:"",tempAreaCode:null,tempCityCode:null,lng:"",lat:""}},computed:{baidumap:function(){return this.$store.getters.baidumap},coords:function(){return this.$store.getters.coords},coords_tr:function(){return this.$store.getters.coords_transformed},currentCityName:function(){return this.$store.getters.city},positionNeighbor:function(){return this.positionNeighbor_||this.$store.state.positionModule.position.pois},areaCode:function(){return this.tempAreaCode||this.$store.state.positionModule.position.addressComponent.adcode},cityCode:function(){return(this.tempCityCode||this.$store.state.positionModule.position.cityCode).toString()}},watch:{currentTouchStartEvent:function(){this.currentIndex=null}},mounted:function(){var t=this;this.init();var e=document.getElementById("searching").getElementsByTagName("form")[0],n=e.getElementsByTagName("input")[0];e.addEventListener("submit",function(e){n.blur(),e.preventDefault(),t.searchByWords()},!1)},methods:{init:function(){var t=this;this.lng=this.coords_tr.longitude,this.lat=this.coords_tr.latitude;var e=new window.BMap.Geocoder;if(window.BMap&&this.coords_tr){this.map=new window.BMap.Map("mapcontainer"),this.map.centerAndZoom(new window.BMap.Point(this.coords_tr.longitude,this.coords_tr.latitude),15);var n=new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_RIGHT,type:BMAP_NAVIGATION_CONTROL_SMALL});this.map.addControl(n),i(),this.map.addEventListener("dragstart",function(){t.inputBlur(),t.currentIndex=null}),this.map.addEventListener("touchstart",function(e){t.inputBlur(),t.currentTouchStartEvent=e}),this.map.addEventListener("touchend",function(){var n=t.currentTouchStartEvent.point;t.lng=n.lng,t.lat=n.lat,d(n).then(function(e){t.positionNeighbor_=e.result.pois,t.tempAreaCode=e.result.addressComponent.adcode,t.tempCityCode=e.result.cityCode}).then(function(i){e.getLocation(n,function(e){var n=e.addressComponents;t.camp={countryCode:"0",countryName:"中国",provinceCode:"",provinceName:n.province,cityCode:t.cityCode,cityName:n.city,areaCode:t.areaCode,areaName:n.district,streetCode:n.streetNumber,streetName:n.street,address:""},t.campPlain=e.address,t.searching=n.province+n.city+n.district+n.street+n.streetNumber})}).catch(function(t){});var o=new window.BMap.Icon(s.a,new window.BMap.Size(50,50)),a=new window.BMap.Marker(n,{icon:o}),r=new window.BMap.Circle(n,200,{strokeColor:"transparent",strokeWeight:1,strokeOpacity:0,fillColor:"#15baff",fillOpacity:.25}),c=new window.BMap.Circle(n,800,{strokeColor:"transparent",strokeWeight:1,strokeOpacity:0,fillColor:"#15baff",fillOpacity:.1});t.map.clearOverlays(),i(),t.map.addOverlay(a),t.map.addOverlay(r),t.map.addOverlay(c)})}function i(){var e=new window.BMap.Point(t.coords_tr.longitude,t.coords_tr.latitude),n=new window.BMap.Marker(e);t.map.addOverlay(n)}},inputFocus:function(){this.negShow=!1},inputBlur:function(){this.negShow=!0},routeBack:function(){this.$router.go(-1)},getDis:function(t){return t<1e3?t+"m":Math.ceil((t/1e3).toFixed(2))+"km"},confirm:function(){this.camp&&this.campPlain&&(this.$sessionStorage.setItem("userAddAddress",{main:this.camp,plain:this.campPlain,coords:{lng:this.lng,lat:this.lat}}),this.$router.go(-1))},chooseNeg:function(t,e){this.currentIndex=t,this.searchByCoords(e)},searchByCoords:function(t){var e=this,n=new window.BMap.Geocoder,i=new window.BMap.Point(t.point.x,t.point.y);e.lng=i.lng,e.lat=i.lat,n.getLocation(i,function(t){e.searching=t.address;var n=t.addressComponents;e.camp={countryCode:"0",countryName:"中国",provinceCode:"",provinceName:n.province,cityCode:e.cityCode,cityName:n.city,areaCode:e.areaCode,areaName:n.district,streetCode:n.streetNumber,streetName:n.street,address:""},e.campPlain=t.address})},searchByWords:function(){var t=this;if(this.searching){var e=new window.BMap.Geocoder;e.getPoint(this.searching,function(n){if(n){t.map.clearOverlays(),t.map.centerAndZoom(n,15),t.map.addOverlay(new window.BMap.Marker(n));var i=new window.BMap.Point(n.lng,n.lat);t.lng=i.lng,t.lat=i.lat,d(n).then(function(e){t.positionNeighbor_=e.result.pois,t.tempAreaCode=e.result.addressComponent.adcode,t.tempCityCode=e.result.cityCode}).then(function(n){e.getLocation(i,function(e){t.searching=e.address;var n=e.addressComponents;t.camp={countryCode:"0",countryName:"中国",provinceCode:"",provinceName:n.province,cityCode:t.cityCode,cityName:n.city,areaCode:t.areaCode,areaName:n.district,streetCode:n.streetNumber,streetName:n.street,address:""},t.campPlain=e.address})}).catch(function(t){})}else t.$message({message:"未能检索到所填地址的有关信息",type:"warning"})},t.currentCityName)}}}},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"chooseaddress"}},[i("header",[i("Backfront",{attrs:{maintitle:"选择您的地址",isNormal:!0,nextTitle:"下一步"},on:{back:t.routeBack}})],1),t._v(" "),i("div",{attrs:{id:"searching"}},[i("form",{staticStyle:{overflow:"hidden"},attrs:{action:""}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.searching,expression:"searching"}],ref:"inputing",attrs:{type:"search",placeholder:"请在这里搜索地址..."},domProps:{value:t.searching},on:{focus:t.inputFocus,blur:t.inputBlur,keydown:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.searchByWords(e):null},input:function(e){e.target.composing||(t.searching=e.target.value)}}})])]),t._v(" "),i("main",[i("div",{attrs:{id:"mapcontainer"}}),t._v(" "),t.negShow?i("div",{attrs:{id:"neighbor"}},t._l(t.positionNeighbor,function(e,o){return i("div",{key:o,staticClass:"item",class:{active:t.currentIndex===o},on:{click:function(n){t.chooseNeg(o,e)}}},[t.currentIndex===o?i("img",{attrs:{src:n("VnQx")}}):i("img",{attrs:{src:n("vwrI")}}),t._v(" "),i("div",{staticClass:"addresswrapper"},[i("p",{staticClass:"sup"},[t._v(t._s(e.name))]),t._v(" "),i("p",{staticClass:"sub"},[i("span",{staticClass:"subrel"},[t._v(t._s(e.addr))]),t._v(" "),i("span",{staticClass:"dis"},[t._v("距您: "+t._s(t.getDis(e.distance)))])])])])})):t._e()]),t._v(" "),i("div",{staticClass:"tail"}),t._v(" "),i("footer",[i("div",{staticClass:"confirm",on:{click:t.confirm}},[t._v("确定")])])])},staticRenderFns:[]};var m=n("VU/8")(l,u,!1,function(t){n("S7x2")},"data-v-57b3f2be",null);e.default=m.exports},vwrI:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAjCAYAAADxG9hnAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjcwMkUyOEY3MEUzRTExRTlBRjVEQkRDNUZGMzZCOEM1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjcwMkUyOEY4MEUzRTExRTlBRjVEQkRDNUZGMzZCOEM1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzAyRTI4RjUwRTNFMTFFOUFGNURCREM1RkYzNkI4QzUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzAyRTI4RjYwRTNFMTFFOUFGNURCREM1RkYzNkI4QzUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4lMNCnAAABh0lEQVR42syXwVHDMBBFjYcDN9JB1AHpID7SBTn5CkduhA509YmkA1MBcQWYCog7EB2wmlnNaERkydJKQjPrGUey8vx3/yq5atu2KjzuIYbrggANxB6CdV3HSoAwiAPEFu9f5aUuAPCtQcjB5SWHIiuIJ4xbY+4IaRE5QPYWAH2+Sgmywy9Zz6wZIM6pQBrM+Z3HWq7fUIFscOOt5/oJotc/qImc8LkA4o8aMYooJ7wEPPuD8NEgLie4hoQQMSA+TghKiy9Ig2+xJijqd92yvsUqAU4QH0QQVjVsijBMwQNxj5nwxZwgKwR4TNjuqzmQG4jnSCf4WLafW1AjiLLVgBJSD37JsqYiwiJbg+naYN2whd3T7B2VC8Q2VGH1F7qqgnvzgDjaLBt71giEVKmMVoPi0Ds55r881mQB4b4bxYKMjgZ2yAUiUP7g2qACmUsPzw0yWiwr/oMifOkmFCBn41gYHEWcDMRUhYdsQAUy2v4mlFKEh25Aqci0tHekAFE/G0Tow78CDAAdEFJesAK7YwAAAABJRU5ErkJggg=="}});