webpackJsonp([35],{"F+7e":function(e,t){},W7JX:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i("mvHQ"),s=i.n(o),n=i("o6Vb"),a=i("FT4G"),r={name:"ChangePhone",data:function(){return{phone_number:"",isCodeCheckSended:!1,timer:59,verfiy_code:"",makeshow:!1,imgCode:"",imgKey:"",sms_id:"",codeImageSrc:""}},mounted:function(){this.phone_number=this.$localStorage.getItem("phoneNumber")||"",this.get_Graphic_Code()},methods:{permitSub:function(){return!this.phone_number},back:function(){this.$router.push({path:"/setting"})},clear:function(){this.phone_number=""},close:function(){this.makeshow=!1,this.$router.push({path:"/setting"})},get_code_check:function(){var e=this,t=this;Object(n.v)({mobile:t.phone_number,imgCode:t.imgCode,imgKey:t.imgKey}).then(function(i){if(200===i.data.code){e.sms_id=String(i.data.data.sms_id),e.isCodeCheckSended=!0;var o=setInterval(function(){t.timer--,0===t.timer&&(clearInterval(o),t.isCodeCheckSended=!1,t.timer=59)},1e3)}e.$message({message:i.data.msg,center:!0,type:"success",showClose:!0,duration:1e3})})},get_Graphic_Code:function(){var e=this;Object(n.j)().then(function(t){e.codeImageSrc="data:image/png;base64,"+t.data.data.baseImg,e.imgKey=t.data.data.imgKey})},submit:function(){var e=this,t=this.phone_number;s()({mobile:t,sms_id:this.sms_id,verfiy_code:this.verfiy_code});if(!Object(a.d)(t))return this.$message({message:"请输入正确的手机号",center:!0,type:"error",showClose:!0,duration:1e3}),this.phone_number="",void(this.makeshow=!1);Object(n.q)({sms_id:this.sms_id,verfiy_code:this.verfiy_code,mobile:this.phone_number}).then(function(t){200===t.data.code&&(e.$localStorage.setItem("phoneNumber",e.phone_number),e.makeshow=!0)})}}},c={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"changephone"}},[o("header",[o("Backfront",{staticStyle:{color:"#fff"},attrs:{maintitle:"修改手机号",isNormal:!0},on:{back:e.back}})],1),e._v(" "),o("div",{staticClass:"passcon"},[o("div",{staticClass:"item"},[o("span",[e._v("+86")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.phone_number,expression:"phone_number",modifiers:{trim:!0}}],attrs:{type:"number"},domProps:{value:e.phone_number},on:{input:function(t){t.target.composing||(e.phone_number=t.target.value.trim())},blur:function(t){e.$forceUpdate()}}}),e._v(" "),o("img",{attrs:{src:i("XXoX")},on:{click:e.clear}})]),e._v(" "),o("div",{staticClass:"item"},[o("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.imgCode,expression:"imgCode",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"请输入图形验证码"},domProps:{value:e.imgCode},on:{input:function(t){t.target.composing||(e.imgCode=t.target.value.trim())},blur:function(t){e.$forceUpdate()}}}),e._v(" "),o("img",{staticClass:"Graphic",attrs:{src:e.codeImageSrc},on:{click:e.get_Graphic_Code}})]),e._v(" "),o("div",{staticClass:"item"},[o("span",[e._v("请输入验证码:")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.verfiy_code,expression:"verfiy_code"}],attrs:{type:"number"},domProps:{value:e.verfiy_code},on:{input:function(t){t.target.composing||(e.verfiy_code=t.target.value)}}}),e._v(" "),o("button",{staticClass:"code_check_area",class:{isDisabled:e.isCodeCheckSended},attrs:{disabled:e.isCodeCheckSended},on:{click:e.get_code_check}},[e._v(e._s(e.isCodeCheckSended?e.timer+" 秒之后重试":"发送验证码"))])])]),e._v(" "),o("footer",[o("button",{attrs:{disabled:e.permitSub()},on:{click:e.submit}},[e._v("确认修改")])]),e._v(" "),o("Succalert",{directives:[{name:"show",rawName:"v-show",value:e.makeshow,expression:"makeshow"}],attrs:{maintitle:"您已修改成功！"},on:{close:e.close}})],1)},staticRenderFns:[]};var m=i("VU/8")(r,c,!1,function(e){i("F+7e")},"data-v-fc0bbb50",null);t.default=m.exports}});