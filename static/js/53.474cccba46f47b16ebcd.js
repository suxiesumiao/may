webpackJsonp([53],{nyvi:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("mvHQ"),i=a.n(n),s=a("o6Vb"),o=a("FT4G"),r={name:"ChangeNickname",data:function(){return{userInfoData:{loginName:""},makeshow:!1}},beforeRouteEnter:function(e,t,a){a(function(e){var t=e.$store.getters.user_info.patientInfo;e.userInfoData={loginName:t.loginName}})},mounted:function(){this.loginName=this.$localStorage.getItem("username"),this.init()},methods:{init:function(){},permitSub:function(){return!this.userInfoData.loginName},back:function(){this.$router.push({path:"/setting"})},clear:function(){this.userInfoData.loginName=""},close:function(){this.makeshow=!1,this.$router.push({path:"/setting"})},submit:function(){var e=this,t=this.loginName;i()({loginName:t});Object(o.b)(this.userInfoData.loginName)?Object(s.s)({loginName:this.userInfoData.loginName}).then(function(t){200===t.data.code&&(e.$localStorage.setItem("username",e.userInfoData.loginName),e.makeshow=!0,e.$store.dispatch("SET_USER_INFO"))}):(this.$message({message:"请输入2-16个字符,仅支持中文、英文大小写和数字组合",center:!0,type:"error",showClose:!0,duration:1e3}),this.loginName="",this.makeshow=!1)}}},c={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"changenickname"}},[n("header",[n("Backfront",{staticStyle:{color:"#fff"},attrs:{maintitle:"修改昵称",isNormal:!0},on:{back:e.back}})],1),e._v(" "),n("div",{staticClass:"passcon"},[n("div",{staticClass:"item"},[n("span",[e._v("请输入新昵称:")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.userInfoData.loginName,expression:"userInfoData.loginName",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"起什么名儿"},domProps:{value:e.userInfoData.loginName},on:{input:function(t){t.target.composing||e.$set(e.userInfoData,"loginName",t.target.value.trim())},blur:function(t){e.$forceUpdate()}}}),e._v(" "),n("img",{attrs:{src:a("XXoX")},on:{click:e.clear}})]),e._v(" "),e._m(0)]),e._v(" "),n("footer",[n("button",{attrs:{disabled:e.permitSub()},on:{click:e.submit}},[e._v("确认修改")])]),e._v(" "),n("Succalert",{directives:[{name:"show",rawName:"v-show",value:e.makeshow,expression:"makeshow"}],attrs:{maintitle:"您已修改成功！"},on:{close:e.close}})],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"item"},[t("input",{staticClass:"new",attrs:{disabled:"",type:"text",placeholder:"(2-16个字符,仅支持中文、英文大小写和数字组合)"}})])}]};var u=a("VU/8")(r,c,!1,function(e){a("zUJ4")},"data-v-24ff763f",null);t.default=u.exports},zUJ4:function(e,t){}});