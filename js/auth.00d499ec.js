(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["auth"],{"0fdf":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("user-forgot")},a=[],r=s("d225"),i=s("308d"),o=s("6bb5"),l=s("4e2b"),c=s("9ab4"),u=s("60a3"),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{"grid-list-sm":"","fill-height":""}},[s("v-layout",{directives:[{name:"show",rawName:"v-show",value:!t.sent,expression:"!sent"}],attrs:{"align-center":"",row:"",wrap:""}},[s("v-flex",{attrs:{xs12:"",sm8:"","offset-xs0":"","offset-sm2":""}},[s("p",{staticClass:"text-xs-center headline font-weight-medium"},[s("span",[t._v(t._s(t.$t("ResetLink")))])]),s("v-form",{on:{submit:function(e){return e.preventDefault(),t.forgot()}}},[s("v-text-field",{attrs:{name:"login",type:"text",label:t.$t("Username"),"prepend-inner-icon":"alternate_email",outline:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),s("v-btn",{attrs:{loading:t.isSending,disabled:t.isSending,block:"",color:"primary",type:"submit"}},[t._v("\n          "+t._s(t.$t("Send"))+"\n        ")])],1),s("div",{staticClass:"text-xs-center"},[s("span",{staticClass:"body-2"},[t._v("\n          "+t._s(t.$t("AlreadyHaveAccount"))+"\n        ")]),s("v-btn",{attrs:{flat:"",color:"primary",to:"/login"}},[t._v("\n          "+t._s(t.$t("SignIn"))+"\n        ")])],1)],1),s("v-flex",{attrs:{xs12:"",sm8:"","offset-xs0":"","offset-sm2":""}})],1),s("v-layout",{directives:[{name:"show",rawName:"v-show",value:t.sent,expression:"sent"}],attrs:{"align-center":"",row:"",wrap:""}},[s("v-flex",{attrs:{xs12:"",sm8:"","offset-xs0":"","offset-sm2":""}},[s("p",{staticClass:"text-xs-center headline font-weight-medium"},[s("span",[t._v(t._s(t.$t("CheckEmail")))])]),s("v-form",[s("v-text-field",{attrs:{name:"login",type:"text",label:t.$t("Username"),"prepend-inner-icon":"alternate_email",outline:"",readonly:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),s("v-btn",{attrs:{block:"",color:"primary",to:"/login"}},[t._v("\n          "+t._s(t.$t("ReturnSignIn"))+"\n        ")])],1),s("div",{staticClass:"text-xs-center"},[s("span",{staticClass:"body-2"},[t._v("\n          "+t._s(t.$t("AlreadyHaveAccount"))+"\n        ")]),s("v-btn",{attrs:{flat:"",color:"primary",to:"/login"}},[t._v("\n          "+t._s(t.$t("SignIn"))+"\n        ")])],1)],1),s("v-flex",{attrs:{xs12:"",sm8:"","offset-xs0":"","offset-sm2":""}})],1)],1)},f=[],m={props:[],data:function(){return{email:null,message:null,sent:!1}},computed:{isSending:function(){return this.$store.state.auth.isSending}},methods:{forgot:function(){var t=this;this.$store.dispatch("auth/forgot",this.email).then((function(){t.$store.dispatch("notifications/success",i18n.t("ResetEmailSent"),{root:!0}),t.sent=!0}))}}},p=m,h=s("2877"),v=s("6544"),w=s.n(v),b=s("8336"),g=s("a523"),x=s("0e8f"),_=s("4bd4"),$=s("a722"),y=s("2677"),O=Object(h["a"])(p,d,f,!1,null,null,null),P=O.exports;w()(O,{VBtn:b["a"],VContainer:g["a"],VFlex:x["a"],VForm:_["a"],VLayout:$["a"],VTextField:y["a"]});var j=function(t){function e(){return Object(r["a"])(this,e),Object(i["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(u["c"]);j=Object(c["a"])([Object(u["a"])({components:{UserForgot:P}})],j);var C=j,k=C,V=Object(h["a"])(k,n,a,!1,null,null,null);e["default"]=V.exports},"34c3":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("user-signup")},a=[],r=s("d225"),i=s("308d"),o=s("6bb5"),l=s("4e2b"),c=s("9ab4"),u=s("60a3"),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{"grid-list-sm":"","fill-height":""}},[s("v-layout",{attrs:{"align-center":"",row:"",wrap:""}},[s("v-flex",{attrs:{xs12:"",sm8:"","offset-xs0":"","offset-sm2":""}},[s("p",{staticClass:"text-xs-center headline font-weight-medium"},[s("span",{directives:[{name:"show",rawName:"v-show",value:t.signupEnabled,expression:"signupEnabled"}]},[t._v("\n          "+t._s(t.$t("CreateAlertaAccount"))+"\n        ")]),s("span",{directives:[{name:"show",rawName:"v-show",value:!t.signupEnabled,expression:"!signupEnabled"}]},[t._v("\n          "+t._s(t.$t("SignUpNotAvailable"))+"\n        ")])]),s("v-form",{ref:"form"},[s("v-text-field",{attrs:{name:"name",type:"text",label:t.$t("FullName"),disabled:!t.signupEnabled,outline:"",rules:[t.rules.required],required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),s("v-text-field",{attrs:{name:"login",type:"text",label:t.$t("Username"),"prepend-inner-icon":"alternate_email",disabled:!t.signupEnabled,outline:"",rules:[t.rules.required],required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),s("v-text-field",{attrs:{name:"password",type:t.showPassword?"text":"password",label:t.$t("Password"),"append-icon":t.showPassword?"visibility_off":"visibility",disabled:!t.signupEnabled,outline:"",rules:[t.rules.min],required:""},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),s("v-text-field",{attrs:{name:"confirm-password","append-icon":t.showPassword?"visibility_off":"visibility",type:t.showPassword?"text":"password",label:t.$t("ConfirmPassword"),disabled:!t.signupEnabled,outline:"",rules:[t.rules.passwordMatch],required:""},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}}),s("v-text-field",{attrs:{name:"text",type:"text",label:t.$t("Description"),disabled:!t.signupEnabled,outline:""},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),s("v-btn",{attrs:{loading:t.isSending,disabled:!t.signupEnabled||t.isSending,block:"",color:"primary"},on:{click:t.validate}},[t._v("\n          "+t._s(t.$t("SignUp"))+"\n        ")])],1),s("div",{staticClass:"text-xs-center"},[s("span",{staticClass:"body-2"},[t._v("\n          "+t._s(t.$t("AlreadyHaveAccount"))+"\n        ")]),s("v-btn",{attrs:{flat:"",color:"primary",to:"/login"}},[t._v("\n          "+t._s(t.$t("SignIn"))+"\n        ")])],1)],1),s("v-flex",{attrs:{xs12:"",sm8:"","offset-xs0":"","offset-sm2":""}})],1)],1)},f=[],m=(s("7f7f"),{props:[],data:function(t){return{name:null,email:null,password:"",confirmPassword:"",showPassword:!1,text:null,rules:{required:function(t){return!!t||i18n.t("Required")},min:function(t){return t&&t.length>=6||i18n.t("Min6Char")},passwordMatch:function(e){return e&&e==t.password||i18n.t("PasswordNotMatch")}}}},computed:{isSending:function(){return this.$store.state.auth.isSending},signupEnabled:function(){return this.$store.getters.getConfig("signup_enabled")},emailVerification:function(){return this.$store.getters.getConfig("email_verification")}},methods:{validate:function(){this.$refs.form.validate()&&(this.$refs.form.resetValidation(),this.signup())},signup:function(){var t=this,e={name:this.name,email:this.email,password:this.password,text:this.text};this.$store.dispatch("auth/signup",e).then((function(){return t.$router.push({path:t.$route.query.redirect||"/"})})).catch((function(e){403===e.response.status&&t.emailVerification&&t.$router.push({name:"login"})}))}}}),p=m,h=s("2877"),v=s("6544"),w=s.n(v),b=s("8336"),g=s("a523"),x=s("0e8f"),_=s("4bd4"),$=s("a722"),y=s("2677"),O=Object(h["a"])(p,d,f,!1,null,null,null),P=O.exports;w()(O,{VBtn:b["a"],VContainer:g["a"],VFlex:x["a"],VForm:_["a"],VLayout:$["a"],VTextField:y["a"]});var j=function(t){function e(){return Object(r["a"])(this,e),Object(i["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(u["c"]);j=Object(c["a"])([Object(u["a"])({components:{UserSignup:P}})],j);var C=j,k=C,V=Object(h["a"])(k,n,a,!1,null,null,null);e["default"]=V.exports},"3fef":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("user-reset")},a=[],r=s("d225"),i=s("308d"),o=s("6bb5"),l=s("4e2b"),c=s("9ab4"),u=s("60a3"),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{"grid-list-sm":"","fill-height":""}},[s("v-layout",{attrs:{"align-center":"",row:"",wrap:""}},[s("v-flex",{attrs:{xs12:"",sm8:"","offset-xs0":"","offset-sm2":""}},[s("p",{staticClass:"text-xs-center headline font-weight-medium"},[s("span",[t._v(t._s(t.$t("ChooseNewPassword")))])]),s("v-form",{on:{submit:function(e){return e.preventDefault(),t.reset()}}},[s("v-text-field",{attrs:{name:"password",type:t.showPassword?"text":"password",label:t.$t("Password"),"append-icon":t.showPassword?"visibility_off":"visibility",outline:""},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),s("v-text-field",{attrs:{name:"confirm-password",type:t.showPassword?"text":"password",label:t.$t("ConfirmPassword"),"append-icon":t.showPassword?"visibility_off":"visibility",outline:""},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}}),s("v-btn",{attrs:{block:"",color:"primary",type:"submit"}},[t._v("\n          "+t._s(t.$t("ResetPassword"))+"\n        ")])],1),s("div",{staticClass:"text-xs-center"},[s("span",{staticClass:"body-2"},[t._v("\n          "+t._s(t.$t("AlreadyHaveAccount"))+"\n        ")]),s("v-btn",{attrs:{flat:"",color:"primary",to:"/login"}},[t._v("\n          "+t._s(t.$t("SignIn"))+"\n        ")])],1)],1),s("v-flex",{attrs:{xs12:"",sm8:"","offset-xs0":"","offset-sm2":""}})],1)],1)},f=[],m={props:[],data:function(){return{password:null,confirmPassword:null,showPassword:!1}},methods:{reset:function(){this.$store.dispatch("auth/reset",[this.$route.params.token,this.password]).then((function(){}))}}},p=m,h=s("2877"),v=s("6544"),w=s.n(v),b=s("8336"),g=s("a523"),x=s("0e8f"),_=s("4bd4"),$=s("a722"),y=s("2677"),O=Object(h["a"])(p,d,f,!1,null,null,null),P=O.exports;w()(O,{VBtn:b["a"],VContainer:g["a"],VFlex:x["a"],VForm:_["a"],VLayout:$["a"],VTextField:y["a"]});var j=function(t){function e(){return Object(r["a"])(this,e),Object(i["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(u["c"]);j=Object(c["a"])([Object(u["a"])({components:{UserReset:P}})],j);var C=j,k=C,V=Object(h["a"])(k,n,a,!1,null,null,null);e["default"]=V.exports},a55b:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("user-login")},a=[],r=s("d225"),i=s("308d"),o=s("6bb5"),l=s("4e2b"),c=s("9ab4"),u=s("60a3"),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{"grid-list-sm":"","fill-height":""}},[s("v-layout",{attrs:{"align-center":"",row:"",wrap:""}},[t.isBasicAuth?s("v-flex",{attrs:{xs12:"",sm8:"","offset-xs0":"","offset-sm2":""}},[s("p",{staticClass:"text-xs-center headline font-weight-medium"},[t._v("\n        "+t._s(t.$t("LoginToContinue"))+"\n      ")]),s("v-form",{on:{submit:function(e){return e.preventDefault(),t.login()}}},[s("v-text-field",{attrs:{name:"login",type:"text",label:t.$t("Username"),"prepend-inner-icon":"alternate_email",outline:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),s("v-text-field",{attrs:{name:"password",type:t.showPassword?"text":"password",label:t.$t("Password"),"append-icon":t.showPassword?"visibility_off":"visibility",outline:""},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),s("v-btn",{attrs:{block:"",color:"primary",type:"submit"}},[t._v("\n          "+t._s(t.$t("LogIn"))+"\n        ")])],1),s("div",{staticClass:"text-xs-center"},[s("v-btn",{attrs:{flat:"",color:"primary",to:"/signup",disabled:!t.signupEnabled}},[t._v("\n          "+t._s(t.$t("CreateAccount"))+"\n        ")]),s("v-btn",{attrs:{flat:"",color:"primary",to:"/forgot"}},[t._v("\n          "+t._s(t.$t("ForgotPassword"))+"\n        ")])],1)],1):"saml2"==t.$config.provider?s("v-flex",{attrs:{xs12:"",sm8:"","offset-xs0":"","offset-sm2":""}},[s("div",[s("p",{staticClass:"text-xs-center headline font-weight-medium"},[t._v("\n          SAML2 Authentication uses pop-up windows.\n        ")]),s("p",{staticClass:"text-xs-center subheading font-weight-medium"},[t._v("\n          Please allow pop-ups from "),s("kbd",[t._v(t._s(t.host))])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.message&&!t.error,expression:"message && !error"}]},[s("p",{staticClass:"text-xs-center headline font-weight-medium"},[t._v("\n          "+t._s(t.message)+"\n        ")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.error,expression:"error"}]},[s("p",{staticClass:"text-xs-center headline font-weight-medium"},[t._v("\n          "+t._s(t.$t("UnspecifiedProblem"))+"\n          "),s("a",{attrs:{href:"#"},on:{click:t.authenticateUsingSAML}},[t._v("\n            "+t._s(t.$t("TryAgain"))+"\n          ")])]),s("p",{staticClass:"text-xs-center subheading font-weight-medium"},[t._v("\n          "+t._s(t.$t("Error"))+": "+t._s(t.error)+"\n        ")])])]):s("v-flex",{attrs:{xs12:"",sm8:"","offset-xs0":"","offset-sm2":""}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.message&&!t.error,expression:"message && !error"}]},[s("p",{staticClass:"text-xs-center headline font-weight-medium"},[t._v("\n          "+t._s(t.message)+"\n        ")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.error,expression:"error"}]},[s("p",{staticClass:"text-xs-center headline font-weight-medium"},[t._v("\n          "+t._s(t.$t("UnspecifiedProblem"))+"\n          "),s("a",{attrs:{href:"#"},on:{click:t.authenticate}},[t._v("\n            "+t._s(t.$t("TryAgain"))+"\n          ")])]),s("p",{staticClass:"text-xs-center subheading font-weight-medium"},[t._v("\n          "+t._s(t.$t("Error"))+": "+t._s(t.error)+"\n        ")])])]),s("v-flex",{attrs:{xs12:"",sm8:"","offset-xs0":"","offset-sm2":""}})],1)],1)},f=[],m=(s("7f7f"),s("fe0b")),p={props:[],data:function(){return{host:window.location.origin,username:null,password:null,showPassword:!1,message:null,error:null}},computed:{isBasicAuth:function(){return"basic"==this.$config.provider||"ldap"==this.$config.provider},authProvider:function(){var t=this.$store.getters["auth/getOptions"]["providers"];return t[this.$config.provider]?t[this.$config.provider].name:null},signupEnabled:function(){return this.$store.getters.getConfig("signup_enabled")}},created:function(){"saml2"==this.$config.provider?this.authenticateUsingSAML():this.authProvider&&this.authenticate()},methods:{login:function(){var t=this,e={username:this.username,password:this.password};this.$store.dispatch("auth/login",e).then((function(){return t.$router.push({path:t.$route.query.redirect||"/"})})).catch((function(e){return t.error=e.response.data.message}))},authenticate:function(){var t=this;this.authProvider?(this.message="Authenticating with ".concat(this.authProvider," ..."),this.$store.dispatch("auth/authenticate",this.$config.provider).then((function(){return t.$router.push({path:t.$route.query.redirect||"/"})})).catch((function(e){return t.error=e.response.data.message}))):(this.message=m["a"].t("AuthNotPossible"),this.error="Unknown authentication provider (".concat(this.$config.provider,")"))},authenticateUsingSAML:function(){var t,e=this;window.addEventListener("message",(function(s){s.source===t&&(s.data&&s.data.status&&"ok"===s.data.status&&s.data.token?e.$store.dispatch("auth/setToken",s.data).then((function(){return e.$router.push({path:e.$route.query.redirect||"/"})})).catch((function(t){return e.error=t.response.data.message})):(e.message=m["a"].t("AuthNotPossible"),e.error=s.data.message?s.data.message:JSON.stringify(s)))})),t=window.open(this.$config.endpoint+"/auth/saml",m["a"].t("AuthInProgress"))}}},h=p,v=s("2877"),w=s("6544"),b=s.n(w),g=s("8336"),x=s("a523"),_=s("0e8f"),$=s("4bd4"),y=s("a722"),O=s("2677"),P=Object(v["a"])(h,d,f,!1,null,null,null),j=P.exports;b()(P,{VBtn:g["a"],VContainer:x["a"],VFlex:_["a"],VForm:$["a"],VLayout:y["a"],VTextField:O["a"]});var C=function(t){function e(){return Object(r["a"])(this,e),Object(i["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(u["c"]);C=Object(c["a"])([Object(u["a"])({components:{UserLogin:j}})],C);var k=C,V=k,E=Object(v["a"])(V,n,a,!1,null,null,null);e["default"]=E.exports},c100:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("user-logout")},a=[],r=s("d225"),i=s("308d"),o=s("6bb5"),l=s("4e2b"),c=s("9ab4"),u=s("60a3"),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{"grid-list-sm":"","fill-height":""}},[s("v-layout",{attrs:{"align-center":"",row:"",wrap:""}},[s("v-flex",{attrs:{xs12:"",sm8:"","offset-xs0":"","offset-sm2":""}},[s("p",{staticClass:"text-xs-center headline font-weight-medium"},[t._v("\n        "+t._s(t.$t("LoggedOut"))+"\n      ")])]),s("v-flex",{attrs:{xs12:"",sm8:"","offset-xs0":"","offset-sm2":""}})],1)],1)},f=[],m={},p=m,h=s("2877"),v=s("6544"),w=s.n(v),b=s("a523"),g=s("0e8f"),x=s("a722"),_=Object(h["a"])(p,d,f,!1,null,null,null),$=_.exports;w()(_,{VContainer:b["a"],VFlex:g["a"],VLayout:x["a"]});var y=function(t){function e(){return Object(r["a"])(this,e),Object(i["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(u["c"]);y=Object(c["a"])([Object(u["a"])({components:{UserLogout:$}})],y);var O=y,P=O,j=Object(h["a"])(P,n,a,!1,null,null,null);e["default"]=j.exports},e116:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("user-confirm")},a=[],r=s("d225"),i=s("308d"),o=s("6bb5"),l=s("4e2b"),c=s("9ab4"),u=s("60a3"),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{"grid-list-sm":"","fill-height":""}},[s("v-layout",{attrs:{"align-center":"",row:"",wrap:""}},[s("v-flex",{attrs:{xs12:"",sm8:"","offset-xs0":"","offset-sm2":""}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.message,expression:"message"}]},[s("p",{staticClass:"text-xs-center headline font-weight-medium"},[t._v("\n          "+t._s(t.$t("Thanks"))+" "+t._s(t.message)+t._s(t.$t("YouCanNowLogin1"))+" "),s("a",{attrs:{href:"/login"}},[t._v("\n            "+t._s(t.$t("YouCanNowLogin2"))+"\n          ")])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.error,expression:"error"}]},[s("p",{staticClass:"text-xs-center headline font-weight-medium"},[t._v("\n          "+t._s(t.$t("EmailConfirmFailed"))+"\n          "),s("a",{attrs:{href:"/"}},[t._v("\n            "+t._s(t.$t("TryAgain"))+"\n          ")])]),s("p",{staticClass:"text-xs-center subheading font-weight-medium"},[t._v("\n          "+t._s(t.$t("Error"))+": "+t._s(t.error)+"\n        ")])])]),s("v-flex",{attrs:{xs12:"",sm8:"","offset-xs0":"","offset-sm2":""}})],1)],1)},f=[],m={data:function(){return{message:null,error:null}},mounted:function(){var t=this;this.$store.dispatch("auth/confirm",this.$route.params.token).then((function(e){return t.message=e.message})).catch((function(e){return t.error=e.response.data.message}))}},p=m,h=s("2877"),v=s("6544"),w=s.n(v),b=s("a523"),g=s("0e8f"),x=s("a722"),_=Object(h["a"])(p,d,f,!1,null,null,null),$=_.exports;w()(_,{VContainer:b["a"],VFlex:g["a"],VLayout:x["a"]});var y=function(t){function e(){return Object(r["a"])(this,e),Object(i["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(u["c"]);y=Object(c["a"])([Object(u["a"])({components:{UserConfirm:$}})],y);var O=y,P=O,j=Object(h["a"])(P,n,a,!1,null,null,null);e["default"]=j.exports}}]);
//# sourceMappingURL=auth.00d499ec.js.map