(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ffbaa54"],{"02de":function(t,e,i){"use strict";function n(t){var e=window.getComputedStyle(t),i="none"===e.display,n=null===t.offsetParent&&"fixed"!==e.position;return i||n}i.d(e,"a",(function(){return n}))},"09fe":function(t,e,i){},"0eb5":function(t,e,i){"use strict";var n=i("32f1"),s=i.n(n);s.a},1146:function(t,e,i){},"1a04":function(t,e,i){},"32f1":function(t,e,i){},"44bf":function(t,e,i){"use strict";var n=i("2638"),s=i.n(n),a=i("d282"),o=i("a142"),r=i("ea8e"),l=i("ad06"),c=Object(a["a"])("image"),h=c[0],u=c[1];e["a"]=h({props:{src:String,fit:String,alt:String,round:Boolean,width:[Number,String],height:[Number,String],radius:[Number,String],lazyLoad:Boolean,showError:{type:Boolean,default:!0},showLoading:{type:Boolean,default:!0},errorIcon:{type:String,default:"warning-o"},loadingIcon:{type:String,default:"photo-o"}},data:function(){return{loading:!0,error:!1}},watch:{src:function(){this.loading=!0,this.error=!1}},computed:{style:function(){var t={};return Object(o["c"])(this.width)&&(t.width=Object(r["a"])(this.width)),Object(o["c"])(this.height)&&(t.height=Object(r["a"])(this.height)),Object(o["c"])(this.radius)&&(t.overflow="hidden",t.borderRadius=Object(r["a"])(this.radius)),t}},created:function(){var t=this.$Lazyload;t&&o["b"]&&(t.$on("loaded",this.onLazyLoaded),t.$on("error",this.onLazyLoadError))},beforeDestroy:function(){var t=this.$Lazyload;t&&(t.$off("loaded",this.onLazyLoaded),t.$off("error",this.onLazyLoadError))},methods:{onLoad:function(t){this.loading=!1,this.$emit("load",t)},onLazyLoaded:function(t){var e=t.el;e===this.$refs.image&&this.loading&&this.onLoad()},onLazyLoadError:function(t){var e=t.el;e!==this.$refs.image||this.error||this.onError()},onError:function(t){this.error=!0,this.loading=!1,this.$emit("error",t)},onClick:function(t){this.$emit("click",t)},genPlaceholder:function(){var t=this.$createElement;return this.loading&&this.showLoading?t("div",{class:u("loading")},[this.slots("loading")||t(l["a"],{attrs:{name:this.loadingIcon},class:u("loading-icon")})]):this.error&&this.showError?t("div",{class:u("error")},[this.slots("error")||t(l["a"],{attrs:{name:this.errorIcon},class:u("error-icon")})]):void 0},genImage:function(){var t=this.$createElement,e={class:u("img"),attrs:{alt:this.alt},style:{objectFit:this.fit}};if(!this.error)return this.lazyLoad?t("img",s()([{ref:"image",directives:[{name:"lazy",value:this.src}]},e])):t("img",s()([{attrs:{src:this.src},on:{load:this.onLoad,error:this.onError}},e]))}},render:function(){var t=arguments[0];return t("div",{class:u({round:this.round}),style:this.style,on:{click:this.onClick}},[this.genImage(),this.genPlaceholder(),this.slots()])}})},4598:function(t,e,i){"use strict";(function(t){i.d(e,"a",(function(){return c}));var n=i("a142"),s=Date.now();function a(t){var e=Date.now(),i=Math.max(0,16-(e-s)),n=setTimeout(t,i);return s=e+i,n}var o=n["g"]?t:window,r=o.requestAnimationFrame||a;o.cancelAnimationFrame||o.clearTimeout;function l(t){return r.call(o,t)}function c(t){l((function(){l(t)}))}}).call(this,i("c8ba"))},"504b":function(t,e,i){},"5c56":function(t,e,i){},7744:function(t,e,i){"use strict";var n=i("c31d"),s=i("2638"),a=i.n(s),o=i("d282"),r=i("a142"),l=i("ba31"),c=i("48f4"),h=i("dfaf"),u=i("ad06"),d=Object(o["a"])("cell"),f=d[0],v=d[1];function g(t,e,i,n){var s=e.icon,o=e.size,h=e.title,d=e.label,f=e.value,g=e.isLink,m=i.title||Object(r["c"])(h);function p(){var n=i.label||Object(r["c"])(d);if(n)return t("div",{class:[v("label"),e.labelClass]},[i.label?i.label():d])}function b(){if(m)return t("div",{class:[v("title"),e.titleClass],style:e.titleStyle},[i.title?i.title():t("span",[h]),p()])}function w(){var n=i.default||Object(r["c"])(f);if(n)return t("div",{class:[v("value",{alone:!m}),e.valueClass]},[i.default?i.default():t("span",[f])])}function y(){return i.icon?i.icon():s?t(u["a"],{class:v("left-icon"),attrs:{name:s,classPrefix:e.iconPrefix}}):void 0}function S(){var n=i["right-icon"];if(n)return n();if(g){var s=e.arrowDirection;return t(u["a"],{class:v("right-icon"),attrs:{name:s?"arrow-"+s:"arrow"}})}}function x(t){Object(l["a"])(n,"click",t),Object(c["a"])(n)}var $=g||e.clickable,O={clickable:$,center:e.center,required:e.required,borderless:!e.border};return o&&(O[o]=o),t("div",a()([{class:v(O),attrs:{role:$?"button":null,tabindex:$?0:null},on:{click:x}},Object(l["b"])(n)]),[y(),b(),w(),S(),null==i.extra?void 0:i.extra()])}g.props=Object(n["a"])({},h["a"],c["c"]),e["a"]=f(g)},"786d":function(t,e,i){},"7e55":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page"},[i("van-uploader",{attrs:{"max-count":1,"after-read":t.afterRead},model:{value:t.fileList,callback:function(e){t.fileList=e},expression:"fileList"}}),i("van-cell-group",[i("van-field",{attrs:{label:"文章标题",placeholder:"请输入文章标题"},model:{value:t.config.title,callback:function(e){t.$set(t.config,"title",e)},expression:"config.title"}}),i("van-field",{attrs:{label:"文章简介",placeholder:"请输入文章简介"},model:{value:t.config.summary,callback:function(e){t.$set(t.config,"summary",e)},expression:"config.summary"}}),i("van-field",{attrs:{label:"文章内容",placeholder:"请输入文章内容",type:"textarea",autosize:""},model:{value:t.config.content,callback:function(e){t.$set(t.config,"content",e)},expression:"config.content"}})],1),i("van-button",{staticClass:"add-button",attrs:{type:"primary"},on:{click:t.submit}},[t._v("提交")])],1)},s=[],a=(i("d3b7"),i("68ef"),i("9d70"),i("3743"),i("e3b3"),i("bc1b"),i("c31d")),o=i("2638"),r=i.n(o),l=i("d282"),c=i("ba31"),h=i("b1d2"),u=i("48f4"),d=i("ad06"),f=i("543e"),v=Object(l["a"])("button"),g=v[0],m=v[1];function p(t,e,i,n){var s,a=e.tag,o=e.icon,l=e.type,v=e.color,g=e.plain,p=e.disabled,b=e.loading,w=e.hairline,y=e.loadingText,S={};function x(t){b||p||(Object(c["a"])(n,"click",t),Object(u["a"])(n))}function $(t){Object(c["a"])(n,"touchstart",t)}v&&(S.color=g?v:h["c"],g||(S.background=v),-1!==v.indexOf("gradient")?S.border=0:S.borderColor=v);var O=[m([l,e.size,{plain:g,loading:b,disabled:p,hairline:w,block:e.block,round:e.round,square:e.square}]),(s={},s[h["a"]]=w,s)];function C(){var n,s=[];return b?s.push(t(f["a"],{class:m("loading"),attrs:{size:e.loadingSize,type:e.loadingType,color:"currentColor"}})):o&&s.push(t(d["a"],{attrs:{name:o,classPrefix:e.iconPrefix},class:m("icon")})),n=b?y:i.default?i.default():e.text,n&&s.push(t("span",{class:m("text")},[n])),s}return t(a,r()([{style:S,class:O,attrs:{type:e.nativeType,disabled:p},on:{click:x,touchstart:$}},Object(c["b"])(n)]),[t("div",{class:m("content")},[C()])])}p.props=Object(a["a"])({},u["c"],{text:String,icon:String,color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:String,loadingText:String,loadingType:String,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"},loadingSize:{type:String,default:"20px"}});var b=g(p),w=(i("1a04"),i("1146"),i("a142"));function y(){return!w["g"]&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())}var S=i("a8c1"),x=y();function $(){x&&Object(S["c"])(Object(S["a"])())}function O(t,e,i){return Math.min(Math.max(t,e),i)}function C(t,e,i){var n=t.indexOf(e);return-1===n?t:"-"===e&&0!==n?t.slice(0,n):t.slice(0,n+1)+t.slice(n).replace(i,"")}function z(t,e){t=e?C(t,".",/\./g):t.split(".")[0],t=C(t,"-",/-/g);var i=e?/[^-0-9.]/g:/[^-0-9]/g;return t.replace(i,"")}var j=i("1325"),k=i("ea8e"),T=i("7744"),I=i("dfaf"),P=Object(l["a"])("field"),M=P[0],L=P[1],B=M({inheritAttrs:!1,provide:function(){return{vanField:this}},inject:{vanForm:{default:null}},props:Object(a["a"])({},I["a"],{name:String,rules:Array,disabled:Boolean,readonly:Boolean,autosize:[Boolean,Object],leftIcon:String,rightIcon:String,clearable:Boolean,formatter:Function,maxlength:[Number,String],labelWidth:[Number,String],labelClass:null,labelAlign:String,inputAlign:String,placeholder:String,errorMessage:String,errorMessageAlign:String,showWordLimit:Boolean,value:{type:[String,Number],default:""},type:{type:String,default:"text"},error:{type:Boolean,default:null},colon:{type:Boolean,default:null},clearTrigger:{type:String,default:"focus"},formatTrigger:{type:String,default:"onChange"}}),data:function(){return{focused:!1,validateFailed:!1,validateMessage:""}},watch:{value:function(){this.updateValue(this.value),this.resetValidation(),this.validateWithTrigger("onChange"),this.$nextTick(this.adjustSize)}},mounted:function(){this.updateValue(this.value,this.formatTrigger),this.$nextTick(this.adjustSize),this.vanForm&&this.vanForm.addField(this)},beforeDestroy:function(){this.vanForm&&this.vanForm.removeField(this)},computed:{showClear:function(){if(this.clearable&&!this.readonly){var t=Object(w["c"])(this.value)&&""!==this.value,e="always"===this.clearTrigger||"focus"===this.clearTrigger&&this.focused;return t&&e}},showError:function(){return null!==this.error?this.error:!!(this.vanForm&&this.vanForm.showError&&this.validateFailed)||void 0},listeners:function(){return Object(a["a"])({},this.$listeners,{blur:this.onBlur,focus:this.onFocus,input:this.onInput,click:this.onClickInput,keypress:this.onKeypress})},labelStyle:function(){var t=this.getProp("labelWidth");if(t)return{width:Object(k["a"])(t)}},formValue:function(){return this.children&&(this.$scopedSlots.input||this.$slots.input)?this.children.value:this.value}},methods:{focus:function(){this.$refs.input&&this.$refs.input.focus()},blur:function(){this.$refs.input&&this.$refs.input.blur()},runValidator:function(t,e){return new Promise((function(i){var n=e.validator(t,e);if(Object(w["f"])(n))return n.then(i);i(n)}))},isEmptyValue:function(t){return Array.isArray(t)?!t.length:!t},runSyncRule:function(t,e){return(!e.required||!this.isEmptyValue(t))&&!(e.pattern&&!e.pattern.test(t))},getRuleMessage:function(t,e){var i=e.message;return Object(w["d"])(i)?i(t,e):i},runRules:function(t){var e=this;return t.reduce((function(t,i){return t.then((function(){if(!e.validateFailed){var t=e.formValue;return i.formatter&&(t=i.formatter(t,i)),e.runSyncRule(t,i)?i.validator?e.runValidator(t,i).then((function(n){!1===n&&(e.validateFailed=!0,e.validateMessage=e.getRuleMessage(t,i))})):void 0:(e.validateFailed=!0,void(e.validateMessage=e.getRuleMessage(t,i)))}}))}),Promise.resolve())},validate:function(t){var e=this;return void 0===t&&(t=this.rules),new Promise((function(i){t||i(),e.runRules(t).then((function(){e.validateFailed?i({name:e.name,message:e.validateMessage}):i()}))}))},validateWithTrigger:function(t){if(this.vanForm&&this.rules){var e=this.vanForm.validateTrigger===t,i=this.rules.filter((function(i){return i.trigger?i.trigger===t:e}));this.validate(i)}},resetValidation:function(){this.validateMessage&&(this.validateFailed=!1,this.validateMessage="")},updateValue:function(t,e){void 0===e&&(e="onChange"),t=Object(w["c"])(t)?String(t):"";var i=this.maxlength;if(Object(w["c"])(i)&&t.length>i&&(t=t.slice(0,i)),"number"===this.type||"digit"===this.type){var n="number"===this.type;t=z(t,n)}this.formatter&&e===this.formatTrigger&&(t=this.formatter(t));var s=this.$refs.input;s&&t!==s.value&&(s.value=t),t!==this.value&&this.$emit("input",t),this.currentValue=t},onInput:function(t){t.target.composing||this.updateValue(t.target.value)},onFocus:function(t){this.focused=!0,this.$emit("focus",t),this.readonly&&this.blur()},onBlur:function(t){this.focused=!1,this.updateValue(this.value,"onBlur"),this.$emit("blur",t),this.validateWithTrigger("onBlur"),$()},onClick:function(t){this.$emit("click",t)},onClickInput:function(t){this.$emit("click-input",t)},onClickLeftIcon:function(t){this.$emit("click-left-icon",t)},onClickRightIcon:function(t){this.$emit("click-right-icon",t)},onClear:function(t){Object(j["c"])(t),this.$emit("input",""),this.$emit("clear",t)},onKeypress:function(t){var e=13;if(t.keyCode===e){var i=this.getProp("submitOnEnter");i||"textarea"===this.type||Object(j["c"])(t),"search"===this.type&&this.blur()}this.$emit("keypress",t)},adjustSize:function(){var t=this.$refs.input;if("textarea"===this.type&&this.autosize&&t){t.style.height="auto";var e=t.scrollHeight;if(Object(w["e"])(this.autosize)){var i=this.autosize,n=i.maxHeight,s=i.minHeight;n&&(e=Math.min(e,n)),s&&(e=Math.max(e,s))}e&&(t.style.height=e+"px")}},genInput:function(){var t=this.$createElement,e=this.type,i=this.slots("input"),n=this.getProp("inputAlign");if(i)return t("div",{class:L("control",[n,"custom"]),on:{click:this.onClickInput}},[i]);var s={ref:"input",class:L("control",n),domProps:{value:this.value},attrs:Object(a["a"])({},this.$attrs,{name:this.name,disabled:this.disabled,readonly:this.readonly,placeholder:this.placeholder}),on:this.listeners,directives:[{name:"model",value:this.value}]};if("textarea"===e)return t("textarea",r()([{},s]));var o,l=e;return"number"===e&&(l="text",o="decimal"),"digit"===e&&(l="tel",o="numeric"),t("input",r()([{attrs:{type:l,inputmode:o}},s]))},genLeftIcon:function(){var t=this.$createElement,e=this.slots("left-icon")||this.leftIcon;if(e)return t("div",{class:L("left-icon"),on:{click:this.onClickLeftIcon}},[this.slots("left-icon")||t(d["a"],{attrs:{name:this.leftIcon,classPrefix:this.iconPrefix}})])},genRightIcon:function(){var t=this.$createElement,e=this.slots,i=e("right-icon")||this.rightIcon;if(i)return t("div",{class:L("right-icon"),on:{click:this.onClickRightIcon}},[e("right-icon")||t(d["a"],{attrs:{name:this.rightIcon,classPrefix:this.iconPrefix}})])},genWordLimit:function(){var t=this.$createElement;if(this.showWordLimit&&this.maxlength){var e=(this.value||"").length;return t("div",{class:L("word-limit")},[t("span",{class:L("word-num")},[e]),"/",this.maxlength])}},genMessage:function(){var t=this.$createElement;if(!this.vanForm||!1!==this.vanForm.showErrorMessage){var e=this.errorMessage||this.validateMessage;if(e){var i=this.getProp("errorMessageAlign");return t("div",{class:L("error-message",i)},[e])}}},getProp:function(t){return Object(w["c"])(this[t])?this[t]:this.vanForm&&Object(w["c"])(this.vanForm[t])?this.vanForm[t]:void 0},genLabel:function(){var t=this.$createElement,e=this.getProp("colon")?":":"";return this.slots("label")?[this.slots("label"),e]:this.label?t("span",[this.label+e]):void 0}},render:function(){var t,e=arguments[0],i=this.slots,n=this.getProp("labelAlign"),s={icon:this.genLeftIcon},a=this.genLabel();a&&(s.title=function(){return a});var o=this.slots("extra");return o&&(s.extra=function(){return o}),e(T["a"],{attrs:{icon:this.leftIcon,size:this.size,center:this.center,border:this.border,isLink:this.isLink,required:this.required,clickable:this.clickable,titleStyle:this.labelStyle,valueClass:L("value"),titleClass:[L("label",n),this.labelClass],arrowDirection:this.arrowDirection},scopedSlots:s,class:L((t={error:this.showError,disabled:this.disabled},t["label-"+n]=n,t["min-height"]="textarea"===this.type&&!this.autosize,t)),on:{click:this.onClick}},[e("div",{class:L("body")},[this.genInput(),this.showClear&&e(d["a"],{attrs:{name:"clear"},class:L("clear"),on:{touchstart:this.onClear}}),this.genRightIcon(),i("button")&&e("div",{class:L("button")},[i("button")])]),this.genWordLimit(),this.genMessage()])}}),F=(i("5c56"),Object(l["a"])("cell-group")),A=F[0],E=F[1];function R(t,e,i,n){var s,a=t("div",r()([{class:[E(),(s={},s[h["b"]]=e.border,s)]},Object(c["b"])(n,!0)]),[null==i.default?void 0:i.default()]);return e.title||i.title?t("div",[t("div",{class:E("title")},[i.title?i.title():e.title]),a]):a}R.props={title:String,border:{type:Boolean,default:!0}};var D=A(R);i("a71a"),i("09fe"),i("4d75"),i("8270"),i("786d"),i("504b"),i("bcd3");function N(t){return Array.isArray(t)?t:[t]}function X(t,e){return new Promise((function(i){if("file"!==e){var n=new FileReader;n.onload=function(t){i(t.target.result)},"dataUrl"===e?n.readAsDataURL(t):"text"===e&&n.readAsText(t)}else i()}))}function W(t,e){return N(t).some((function(t){return t.size>e}))}var Y=/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;function V(t){return Y.test(t)}function H(t){return!!t.isImage||(t.file&&t.file.type?0===t.file.type.indexOf("image"):t.url?V(t.url):!!t.content&&0===t.content.indexOf("data:image"))}var U={inject:{vanField:{default:null}},watch:{value:function(){var t=this.vanField;t&&(t.resetValidation(),t.validateWithTrigger("onChange"))}},created:function(){var t=this.vanField;t&&!t.children&&(t.children=this)}},Z=i("44bf"),q=i("2b0e"),_=Object(l["a"])("image-preview"),J=_[0],K=_[1],G=i("6605"),Q=i("3875"),tt=i("5fbe"),et=i("02de"),it=i("4598"),nt=i("9884"),st=Object(l["a"])("swipe"),at=st[0],ot=st[1],rt=at({mixins:[Q["a"],Object(nt["b"])("vanSwipe"),Object(tt["a"])((function(t,e){t(window,"resize",this.resize,!0),t(window,"visibilitychange",this.onVisibilityChange),e?this.initialize():this.clear()}))],props:{width:[Number,String],height:[Number,String],autoplay:[Number,String],vertical:Boolean,lazyRender:Boolean,indicatorColor:String,loop:{type:Boolean,default:!0},duration:{type:[Number,String],default:500},touchable:{type:Boolean,default:!0},initialSwipe:{type:[Number,String],default:0},showIndicators:{type:Boolean,default:!0},stopPropagation:{type:Boolean,default:!0}},data:function(){return{rect:null,offset:0,active:0,deltaX:0,deltaY:0,swiping:!1,computedWidth:0,computedHeight:0}},watch:{children:function(){this.initialize()},initialSwipe:function(){this.initialize()},autoplay:function(t){t>0?this.autoPlay():this.clear()}},computed:{count:function(){return this.children.length},maxCount:function(){return Math.ceil(Math.abs(this.minOffset)/this.size)},delta:function(){return this.vertical?this.deltaY:this.deltaX},size:function(){return this[this.vertical?"computedHeight":"computedWidth"]},trackSize:function(){return this.count*this.size},activeIndicator:function(){return(this.active+this.count)%this.count},isCorrectDirection:function(){var t=this.vertical?"vertical":"horizontal";return this.direction===t},trackStyle:function(){var t,e=this.vertical?"height":"width",i=this.vertical?"width":"height";return t={},t[e]=this.trackSize+"px",t[i]=this[i]?this[i]+"px":"",t.transitionDuration=(this.swiping?0:this.duration)+"ms",t.transform="translate"+(this.vertical?"Y":"X")+"("+this.offset+"px)",t},indicatorStyle:function(){return{backgroundColor:this.indicatorColor}},minOffset:function(){return(this.vertical?this.rect.height:this.rect.width)-this.size*this.count}},mounted:function(){this.bindTouchEvent(this.$refs.track)},methods:{initialize:function(t){if(void 0===t&&(t=+this.initialSwipe),this.$el&&!Object(et["a"])(this.$el)){clearTimeout(this.timer);var e=this.$el.getBoundingClientRect();this.rect=e,this.swiping=!0,this.active=t,this.computedWidth=Math.round(+this.width||e.width),this.computedHeight=Math.round(+this.height||e.height),this.offset=this.getTargetOffset(t),this.children.forEach((function(t){t.offset=0})),this.autoPlay()}},resize:function(){this.initialize(this.activeIndicator)},onVisibilityChange:function(){document.hidden?this.clear():this.autoPlay()},onTouchStart:function(t){this.touchable&&(this.clear(),this.touchStartTime=Date.now(),this.touchStart(t),this.correctPosition())},onTouchMove:function(t){this.touchable&&this.swiping&&(this.touchMove(t),this.isCorrectDirection&&(Object(j["c"])(t,this.stopPropagation),this.move({offset:this.delta})))},onTouchEnd:function(){if(this.touchable&&this.swiping){var t=this.size,e=this.delta,i=Date.now()-this.touchStartTime,n=e/i,s=Math.abs(n)>.25||Math.abs(e)>t/2;if(s&&this.isCorrectDirection){var a=this.vertical?this.offsetY:this.offsetX,o=0;o=this.loop?a>0?e>0?-1:1:0:-Math[e>0?"ceil":"floor"](e/t),this.move({pace:o,emitChange:!0})}else e&&this.move({pace:0});this.swiping=!1,this.autoPlay()}},getTargetActive:function(t){var e=this.active,i=this.count,n=this.maxCount;return t?this.loop?O(e+t,-1,i):O(e+t,0,n):e},getTargetOffset:function(t,e){void 0===e&&(e=0);var i=t*this.size;this.loop||(i=Math.min(i,-this.minOffset));var n=Math.round(e-i);return this.loop||(n=O(n,this.minOffset,0)),n},move:function(t){var e=t.pace,i=void 0===e?0:e,n=t.offset,s=void 0===n?0:n,a=t.emitChange,o=this.loop,r=this.count,l=this.active,c=this.children,h=this.trackSize,u=this.minOffset;if(!(r<=1)){var d=this.getTargetActive(i),f=this.getTargetOffset(d,s);if(o){if(c[0]&&f!==u){var v=f<u;c[0].offset=v?h:0}if(c[r-1]&&0!==f){var g=f>0;c[r-1].offset=g?-h:0}}this.active=d,this.offset=f,a&&d!==l&&this.$emit("change",this.activeIndicator)}},prev:function(){var t=this;this.correctPosition(),this.resetTouchStatus(),Object(it["a"])((function(){t.swiping=!1,t.move({pace:-1,emitChange:!0})}))},next:function(){var t=this;this.correctPosition(),this.resetTouchStatus(),Object(it["a"])((function(){t.swiping=!1,t.move({pace:1,emitChange:!0})}))},swipeTo:function(t,e){var i=this;void 0===e&&(e={}),this.correctPosition(),this.resetTouchStatus(),Object(it["a"])((function(){var n;n=i.loop&&t===i.count?0===i.active?0:t:t%i.count,e.immediate?Object(it["a"])((function(){i.swiping=!1})):i.swiping=!1,i.move({pace:n-i.active,emitChange:!0})}))},correctPosition:function(){this.swiping=!0,this.active<=-1&&this.move({pace:this.count}),this.active>=this.count&&this.move({pace:-this.count})},clear:function(){clearTimeout(this.timer)},autoPlay:function(){var t=this,e=this.autoplay;e>0&&this.count>1&&(this.clear(),this.timer=setTimeout((function(){t.next(),t.autoPlay()}),e))},genIndicator:function(){var t=this,e=this.$createElement,i=this.count,n=this.activeIndicator,s=this.slots("indicator");return s||(this.showIndicators&&i>1?e("div",{class:ot("indicators",{vertical:this.vertical})},[Array.apply(void 0,Array(i)).map((function(i,s){return e("i",{class:ot("indicator",{active:s===n}),style:s===n?t.indicatorStyle:null})}))]):void 0)}},render:function(){var t=arguments[0];return t("div",{class:ot()},[t("div",{ref:"track",style:this.trackStyle,class:ot("track",{vertical:this.vertical})},[this.slots()]),this.genIndicator()])}}),lt=Object(l["a"])("swipe-item"),ct=lt[0],ht=lt[1],ut=ct({mixins:[Object(nt["a"])("vanSwipe")],data:function(){return{offset:0,mounted:!1}},mounted:function(){var t=this;this.$nextTick((function(){t.mounted=!0}))},computed:{style:function(){var t={},e=this.parent,i=e.size,n=e.vertical;return t[n?"height":"width"]=i+"px",this.offset&&(t.transform="translate"+(n?"Y":"X")+"("+this.offset+"px)"),t},shouldRender:function(){var t=this.index,e=this.parent,i=this.mounted;if(!e.lazyRender)return!0;if(!i)return!1;var n=e.activeIndicator,s=e.count-1,a=0===n?s:n-1,o=n===s?0:n+1;return t===n||t===a||t===o}},render:function(){var t=arguments[0];return t("div",{class:ht(),style:this.style,on:Object(a["a"])({},this.$listeners)},[this.shouldRender&&this.slots()])}});function dt(t){return Math.sqrt(Math.pow(t[0].clientX-t[1].clientX,2)+Math.pow(t[0].clientY-t[1].clientY,2))}var ft,vt={mixins:[Q["a"]],props:{src:String,show:Boolean,active:Number,minZoom:[Number,String],maxZoom:[Number,String],windowWidth:Number,windowHeight:Number},data:function(){return{scale:1,moveX:0,moveY:0,moving:!1,zooming:!1,imageRatio:0,displayWidth:0,displayHeight:0}},computed:{vertical:function(){var t=this.windowWidth,e=this.windowHeight,i=e/t;return this.imageRatio>i},imageStyle:function(){var t=this.scale,e={transitionDuration:this.zooming||this.moving?"0s":".3s"};if(1!==t){var i=this.moveX/t,n=this.moveY/t;e.transform="scale("+t+", "+t+") translate("+i+"px, "+n+"px)"}return e},maxMoveX:function(){if(this.imageRatio){var t=this.vertical?this.windowHeight/this.imageRatio:this.windowWidth;return Math.max(0,(this.scale*t-this.windowWidth)/2)}return 0},maxMoveY:function(){if(this.imageRatio){var t=this.vertical?this.windowHeight:this.windowWidth*this.imageRatio;return Math.max(0,(this.scale*t-this.windowHeight)/2)}return 0}},watch:{show:function(t){t||this.resetScale()}},mounted:function(){this.bindTouchEvent(this.$el)},methods:{resetScale:function(){this.setScale(1),this.moveX=0,this.moveY=0},setScale:function(t){this.scale=O(t,+this.minZoom,+this.maxZoom),this.$emit("scale",{scale:this.scale,index:this.active})},toggleScale:function(){var t=this.scale>1?1:2;this.setScale(t),this.moveX=0,this.moveY=0},onTouchStart:function(t){var e=t.touches,i=this.offsetX,n=void 0===i?0:i;this.touchStart(t),this.touchStartTime=new Date,this.startMoveX=this.moveX,this.startMoveY=this.moveY,this.moving=1===e.length&&1!==this.scale,this.zooming=2===e.length&&!n,this.zooming&&(this.startScale=this.scale,this.startDistance=dt(t.touches))},onTouchMove:function(t){var e=t.touches;if(this.touchMove(t),(this.moving||this.zooming)&&Object(j["c"])(t,!0),this.moving){var i=this.deltaX+this.startMoveX,n=this.deltaY+this.startMoveY;this.moveX=O(i,-this.maxMoveX,this.maxMoveX),this.moveY=O(n,-this.maxMoveY,this.maxMoveY)}if(this.zooming&&2===e.length){var s=dt(e),a=this.startScale*s/this.startDistance;this.setScale(a)}},onTouchEnd:function(t){var e=!1;(this.moving||this.zooming)&&(e=!0,this.moving&&this.startMoveX===this.moveX&&this.startMoveY===this.moveY&&(e=!1),t.touches.length||(this.zooming&&(this.moveX=O(this.moveX,-this.maxMoveX,this.maxMoveX),this.moveY=O(this.moveY,-this.maxMoveY,this.maxMoveY),this.zooming=!1),this.moving=!1,this.startMoveX=0,this.startMoveY=0,this.startScale=1,this.scale<1&&this.resetScale())),Object(j["c"])(t,e),this.checkTap(),this.resetTouchStatus()},checkTap:function(){var t=this,e=this.offsetX,i=void 0===e?0:e,n=this.offsetY,s=void 0===n?0:n,a=new Date-this.touchStartTime,o=250,r=10;i<r&&s<r&&a<o&&(this.doubleTapTimer?(clearTimeout(this.doubleTapTimer),this.doubleTapTimer=null,this.toggleScale()):this.doubleTapTimer=setTimeout((function(){t.$emit("close"),t.doubleTapTimer=null}),o))},onLoad:function(t){var e=t.target,i=e.naturalWidth,n=e.naturalHeight;this.imageRatio=n/i}},render:function(){var t=arguments[0],e={loading:function(){return t(f["a"],{attrs:{type:"spinner"}})}};return t(ut,{class:K("swipe-item")},[t(Z["a"],{attrs:{src:this.src,fit:"contain"},class:K("image",{vertical:this.vertical}),style:this.imageStyle,scopedSlots:e,on:{load:this.onLoad}})])}},gt=J({mixins:[Q["a"],Object(G["a"])({skipToggleEvent:!0}),Object(tt["a"])((function(t){t(window,"resize",this.resize,!0)}))],props:{className:null,closeable:Boolean,asyncClose:Boolean,showIndicators:Boolean,images:{type:Array,default:function(){return[]}},loop:{type:Boolean,default:!0},swipeDuration:{type:[Number,String],default:500},overlay:{type:Boolean,default:!0},showIndex:{type:Boolean,default:!0},startPosition:{type:[Number,String],default:0},minZoom:{type:[Number,String],default:1/3},maxZoom:{type:[Number,String],default:3},overlayClass:{type:String,default:K("overlay")},closeIcon:{type:String,default:"clear"},closeIconPosition:{type:String,default:"top-right"}},data:function(){return{active:0,windowWidth:0,windowHeight:0,doubleClickTimer:null}},created:function(){this.resize()},watch:{startPosition:"setActive",value:function(t){var e=this;t?(this.setActive(+this.startPosition),this.$nextTick((function(){e.$refs.swipe.swipeTo(+e.startPosition,{immediate:!0})}))):this.$emit("close",{index:this.active,url:this.images[this.active]})}},methods:{resize:function(){w["b"]&&(this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight)},emitClose:function(){this.asyncClose||this.$emit("input",!1)},emitScale:function(t){this.$emit("scale",t)},setActive:function(t){t!==this.active&&(this.active=t,this.$emit("change",t))},genIndex:function(){var t=this.$createElement;if(this.showIndex)return t("div",{class:K("index")},[this.slots("index")||this.active+1+" / "+this.images.length])},genCover:function(){var t=this.$createElement,e=this.slots("cover");if(e)return t("div",{class:K("cover")},[e])},genImages:function(){var t=this,e=this.$createElement;return e(rt,{ref:"swipe",attrs:{lazyRender:!0,loop:this.loop,duration:this.swipeDuration,initialSwipe:this.startPosition,showIndicators:this.showIndicators,indicatorColor:"white"},class:K("swipe"),on:{change:this.setActive}},[this.images.map((function(i){return e(vt,{attrs:{src:i,show:t.value,active:t.active,maxZoom:t.maxZoom,minZoom:t.minZoom,windowWidth:t.windowWidth,windowHeight:t.windowHeight},on:{scale:t.emitScale,close:t.emitClose}})}))])},genClose:function(){var t=this.$createElement;if(this.closeable)return t(d["a"],{attrs:{role:"button",name:this.closeIcon},class:K("close-icon",this.closeIconPosition),on:{click:this.emitClose}})},onClosed:function(){this.$emit("closed")},swipeTo:function(t,e){this.$refs.swipe&&this.$refs.swipe.swipeTo(t,e)}},render:function(){var t=arguments[0];if(this.shouldRender)return t("transition",{attrs:{name:"van-fade"},on:{afterLeave:this.onClosed}},[t("div",{directives:[{name:"show",value:this.value}],class:[K(),this.className]},[this.genClose(),this.genImages(),this.genIndex(),this.genCover()])])}}),mt={loop:!0,images:[],value:!0,minZoom:1/3,maxZoom:3,className:"",onClose:null,onChange:null,showIndex:!0,closeable:!1,closeIcon:"clear",asyncClose:!1,startPosition:0,swipeDuration:500,showIndicators:!1,closeOnPopstate:!1,closeIconPosition:"top-right",getContainer:"body"},pt=function(){ft=new(q["a"].extend(gt))({el:document.createElement("div")}),document.body.appendChild(ft.$el),ft.$on("change",(function(t){ft.onChange&&ft.onChange(t)})),ft.$on("scale",(function(t){ft.onScale&&ft.onScale(t)}))},bt=function(t,e){if(void 0===e&&(e=0),!w["g"]){ft||pt();var i=Array.isArray(t)?{images:t,startPosition:e}:t;return Object(a["a"])(ft,mt,i),ft.$once("input",(function(t){ft.value=t})),ft.$once("closed",(function(){ft.images=[]})),i.onClose&&(ft.$off("close"),ft.$once("close",i.onClose)),ft}};bt.Component=gt,bt.install=function(){q["a"].use(gt)};var wt=bt,yt=Object(l["a"])("uploader"),St=yt[0],xt=yt[1],$t=St({inheritAttrs:!1,mixins:[U],model:{prop:"fileList"},props:{disabled:Boolean,lazyLoad:Boolean,uploadText:String,afterRead:Function,beforeRead:Function,beforeDelete:Function,previewSize:[Number,String],previewOptions:Object,name:{type:[Number,String],default:""},accept:{type:String,default:"image/*"},fileList:{type:Array,default:function(){return[]}},maxSize:{type:[Number,String],default:Number.MAX_VALUE},maxCount:{type:[Number,String],default:Number.MAX_VALUE},deletable:{type:Boolean,default:!0},showUpload:{type:Boolean,default:!0},previewImage:{type:Boolean,default:!0},previewFullImage:{type:Boolean,default:!0},imageFit:{type:String,default:"cover"},resultType:{type:String,default:"dataUrl"},uploadIcon:{type:String,default:"photograph"}},computed:{previewSizeWithUnit:function(){return Object(k["a"])(this.previewSize)},value:function(){return this.fileList}},methods:{getDetail:function(t){return void 0===t&&(t=this.fileList.length),{name:this.name,index:t}},onChange:function(t){var e=this,i=t.target.files;if(!this.disabled&&i.length){if(i=1===i.length?i[0]:[].slice.call(i),this.beforeRead){var n=this.beforeRead(i,this.getDetail());if(!n)return void this.resetInput();if(Object(w["f"])(n))return void n.then((function(t){t?e.readFile(t):e.readFile(i)})).catch(this.resetInput)}this.readFile(i)}},readFile:function(t){var e=this,i=W(t,this.maxSize);if(Array.isArray(t)){var n=this.maxCount-this.fileList.length;t.length>n&&(t=t.slice(0,n)),Promise.all(t.map((function(t){return X(t,e.resultType)}))).then((function(n){var s=t.map((function(t,e){var i={file:t,status:"",message:""};return n[e]&&(i.content=n[e]),i}));e.onAfterRead(s,i)}))}else X(t,this.resultType).then((function(n){var s={file:t,status:"",message:""};n&&(s.content=n),e.onAfterRead(s,i)}))},onAfterRead:function(t,e){var i=this;this.resetInput();var n=t;if(e){var s=t;Array.isArray(t)?(s=[],n=[],t.forEach((function(t){t.file&&(t.file.size>i.maxSize?s.push(t):n.push(t))}))):n=null,this.$emit("oversize",s,this.getDetail())}var a=Array.isArray(n)?Boolean(n.length):Boolean(n);a&&(this.$emit("input",[].concat(this.fileList,N(n))),this.afterRead&&this.afterRead(n,this.getDetail()))},onDelete:function(t,e){var i=this;if(this.beforeDelete){var n=this.beforeDelete(t,this.getDetail(e));if(!n)return;if(Object(w["f"])(n))return void n.then((function(){i.deleteFile(t,e)})).catch(w["h"])}this.deleteFile(t,e)},deleteFile:function(t,e){var i=this.fileList.slice(0);i.splice(e,1),this.$emit("input",i),this.$emit("delete",t,this.getDetail(e))},resetInput:function(){this.$refs.input&&(this.$refs.input.value="")},onPreviewImage:function(t){var e=this;if(this.previewFullImage){var i=this.fileList.filter((function(t){return H(t)})),n=i.map((function(t){return t.content||t.url}));this.imagePreview=wt(Object(a["a"])({images:n,startPosition:i.indexOf(t),closeOnPopstate:!0,onClose:function(){e.$emit("close-preview")}},this.previewOptions))}},closeImagePreview:function(){this.imagePreview&&this.imagePreview.close()},chooseFile:function(){this.disabled||this.$refs.input&&this.$refs.input.click()},genPreviewMask:function(t){var e=this.$createElement,i=t.status,n=t.message;if("uploading"===i||"failed"===i){var s="failed"===i?e(d["a"],{attrs:{name:"close"},class:xt("mask-icon")}):e(f["a"],{class:xt("loading")}),a=Object(w["c"])(n)&&""!==n;return e("div",{class:xt("mask")},[s,a&&e("div",{class:xt("mask-message")},[n])])}},genPreviewItem:function(t,e){var i=this,n=this.$createElement,s="uploading"!==t.status&&this.deletable,a=s&&n("div",{class:xt("preview-delete"),on:{click:function(n){n.stopPropagation(),i.onDelete(t,e)}}},[n(d["a"],{attrs:{name:"cross"},class:xt("preview-delete-icon")})]),o=this.slots("preview-cover",t),r=o&&n("div",{class:xt("preview-cover")},[o]),l=H(t)?n(Z["a"],{attrs:{fit:this.imageFit,src:t.content||t.url,width:this.previewSize,height:this.previewSize,lazyLoad:this.lazyLoad},class:xt("preview-image"),on:{click:function(){i.onPreviewImage(t)}}},[r]):n("div",{class:xt("file"),style:{width:this.previewSizeWithUnit,height:this.previewSizeWithUnit}},[n(d["a"],{class:xt("file-icon"),attrs:{name:"description"}}),n("div",{class:[xt("file-name"),"van-ellipsis"]},[t.file?t.file.name:t.url]),r]);return n("div",{class:xt("preview"),on:{click:function(){i.$emit("click-preview",t,i.getDetail(e))}}},[l,this.genPreviewMask(t),a])},genPreviewList:function(){if(this.previewImage)return this.fileList.map(this.genPreviewItem)},genUpload:function(){var t=this.$createElement;if(!(this.fileList.length>=this.maxCount)&&this.showUpload){var e,i=this.slots(),n=t("input",{attrs:Object(a["a"])({},this.$attrs,{type:"file",accept:this.accept,disabled:this.disabled}),ref:"input",class:xt("input"),on:{change:this.onChange}});if(i)return t("div",{class:xt("input-wrapper")},[i,n]);if(this.previewSize){var s=this.previewSizeWithUnit;e={width:s,height:s}}return t("div",{class:xt("upload"),style:e},[t(d["a"],{attrs:{name:this.uploadIcon},class:xt("upload-icon")}),this.uploadText&&t("span",{class:xt("upload-text")},[this.uploadText]),n])}}},render:function(){var t=arguments[0];return t("div",{class:xt()},[t("div",{class:xt("wrapper",{disabled:this.disabled})},[this.genPreviewList(),this.genUpload()])])}}),Ot={data:function(){return{fileList:[],config:{title:"",summary:"",content:"",img:""}}},components:{"van-uploader":$t,"van-cell-group":D,"van-field":B,"van-button":b},methods:{afterRead:function(t){console.log(t),this.config.img=t.content},submit:function(){var t=this;fetch("/article/create",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify(this.config)}).then((function(t){return t.json()})).then((function(e){200==e.status?(console.log("文章发布成功"),t.$router.push("/")):console.log(e.errMsg)}))}}},Ct=Ot,zt=(i("0eb5"),i("2877")),jt=Object(zt["a"])(Ct,n,s,!1,null,"52e181b6",null);e["default"]=jt.exports},8270:function(t,e,i){},bc1b:function(t,e,i){},bcd3:function(t,e,i){},dfaf:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var n={icon:String,size:String,center:Boolean,isLink:Boolean,required:Boolean,clickable:Boolean,iconPrefix:String,titleStyle:null,titleClass:null,valueClass:null,labelClass:null,title:[Number,String],value:[Number,String],label:[Number,String],arrowDirection:String,border:{type:Boolean,default:!0}}}}]);
//# sourceMappingURL=chunk-5ffbaa54.4cc910c5.js.map