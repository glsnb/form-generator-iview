(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{324:function(e,t,n){var o=n(330);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(16).default)("e91641ce",o,!0,{})},325:function(e,t,n){var o=n(332);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(16).default)("81bb6994",o,!0,{})},326:function(e,t,n){var o=n(334);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(16).default)("ef5e7348",o,!0,{})},327:function(e,t,n){"use strict";n(141);var o=n(337),a={name:"Demo",props:{title:{type:String,default:""},vertical:{type:Boolean,default:!1},hideCode:{type:Boolean,default:!1}},data(){return{showCode:!1,showMore:!0,demo_height:0,code_height:0,ready:!1,lang:this.$lang}},computed:{isCodeHide(){return this.hideCode},isVertical(){return this.vertical},codeHeight(){let e={};return this.ready&&(this.showCode?e.height=this.code_height+"px":e.height=this.demo_height+"px"),e},style(){let e={opacity:1};return this.isCodeHide&&!this.showCode&&(e.opacity=0),e},title_link(){return o.a.getFirstLetter(this.title).replace(/\s/g,"_")}},watch:{settingCode(){this.showCode=!1,this.showMore=!0,this.ready=!1,this.init()}},mounted(){this.init()},methods:{init(){this.$nextTick(()=>{const e=this.$children[0].$children[0].$el.clientHeight,t=this.$children[0].$children[1].$el.clientHeight+20;this.code_height=t,t<=e&&!this.isCodeHide&&(this.showMore=!1),this.demo_height=this.isCodeHide?30:e,this.ready=!0})}}},i=(n(333),n(0)),d=Object(i.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Row",{staticClass:"example",class:{"example-vertical":e.isVertical},attrs:{id:e.title_link}},[n("i-col",{staticClass:"example-demo",attrs:{span:e.isVertical?24:10}},[n("div",{staticClass:"example-case"},[e._t("demo")],2),e._v(" "),n("header",{staticClass:"example-header"},[n("span",[e._v("\n                "+e._s(e.title)+"\n                "),n("a",{attrs:{href:"#"+e.title_link,"data-title":e.title}},[e._v("#")])])]),e._v(" "),n("div",{staticClass:"example-desc"},[e._t("desc")],2)]),e._v(" "),n("div",{staticClass:"example-split"}),e._v(" "),n("i-col",{staticClass:"example-code",style:e.codeHeight,attrs:{span:e.isVertical?24:14}},[n("div",{style:e.style},[e._t("code")],2),e._v(" "),e.showMore?n("div",{staticClass:"example-code-more",on:{click:function(t){e.showCode=!e.showCode}}},[n("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.showCode,expression:"!showCode"}],attrs:{type:"ios-arrow-down"}}),e._v(" "),n("Icon",{directives:[{name:"show",rawName:"v-show",value:e.showCode,expression:"showCode"}],attrs:{type:"ios-arrow-up"}}),e._v(" "),n("i-button",{directives:[{name:"show",rawName:"v-show",value:e.isCodeHide&&!e.showCode,expression:"isCodeHide && !showCode"}],attrs:{type:"text"}},["zh-CN"===e.lang?[e._v("显示代码")]:[e._v("Show Code")]],2)],1):e._e()])],1)},[],!1,null,null,null);t.a=d.exports},328:function(e,t,n){"use strict";n(338),n(142),n(141);var o=n(339),a=n.n(o),i=(n(340),n(341)),d=n.n(i),s={props:{lang:{type:String,default:"javascript"},bg:{type:Boolean,default:!1}},data(){return{openScale:!1,code:"",copied:!1,docLang:this.$lang,title:"Code"}},computed:{language(){return"auto"==this.lang?"":this.lang}},mounted(){this.code=this.$refs.code.innerHTML.replace(/\n/,""),this.$refs.code.innerHTML=this.code,a.a.highlightBlock(this.$refs.code),this.$refs.code2.innerHTML=this.code,a.a.highlightBlock(this.$refs.code2);const e=this.$parent.$parent.$parent;"Demo"===e.$options.name&&(this.title=e.title)},methods:{clip(){const e=this.code.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),t=new d.a(".copy",{text:()=>e});t.on("success",e=>{e.clearSelection(),t.destroy(),this.copied=!0,"zh-CN"===this.docLang?this.$Message.success("代码已复制到剪贴板"):this.$Message.success("Code copied"),setTimeout(()=>{this.copied=!1},2e3)})},scale(){this.openScale=!0},getSource(e,t){const n=new RegExp("<"+t+"[^>]*>");let o=e.match(n);return o?(o=o[0],e.slice(e.indexOf(o)+o.length,e.lastIndexOf("</"+t+">"))):""},openFiddle(){}}},l=(n(329),n(331),n(0)),r=Object(l.a)(s,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("pre",{class:{bg:e.bg}},[n("code",{ref:"code",class:e.language},[e._t("default")],2)]),e._v(" "),n("span",{staticClass:"scale",on:{click:e.scale}},[n("Tooltip",{attrs:{content:e.$t("index.code_fullscreen"),placement:"top",transfer:""}},[n("Icon",{attrs:{type:"md-qr-scanner",size:"18"}})],1)],1),e._v(" "),n("span",{staticClass:"copy",on:{click:e.clip}},[n("Tooltip",{attrs:{content:e.$t("index.code_copy"),placement:"top",transfer:""}},[n("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.copied,expression:"!copied"}],attrs:{type:"md-copy",size:"18"}}),e._v(" "),n("Icon",{directives:[{name:"show",rawName:"v-show",value:e.copied,expression:"copied"}],staticStyle:{color:"#5cb85c"},attrs:{type:"md-checkmark",size:"18"}})],1)],1),e._v(" "),n("Modal",{attrs:{"class-name":"code-scale-modal",title:e.title,width:"65"},model:{value:e.openScale,callback:function(t){e.openScale=t},expression:"openScale"}},[n("pre",{class:{bg:e.bg}},[e._v("            "),n("code",{ref:"code2",class:e.language}),e._v("\n        ")])])],1)},[],!1,null,"7df69c7c",null);t.a=r.exports},329:function(e,t,n){"use strict";var o=n(324);n.n(o).a},330:function(e,t,n){(e.exports=n(15)(!1)).push([e.i,"\ndiv[data-v-7df69c7c]{\n    position: relative;\n    font-size: 14px;\n}\nspan.copy[data-v-7df69c7c], span.scale[data-v-7df69c7c], span.open-fiddle[data-v-7df69c7c]{\n    border-radius: 0 0 3px 3px;\n    padding: 2px 5px;\n    position: absolute;\n    top: 5px;\n    right: 0;\n    color: #b2b2b2;\n    cursor: pointer;\n}\nspan.scale[data-v-7df69c7c]{\n    right: 25px;\n}\nspan.open-fiddle[data-v-7df69c7c]{\n    right: 50px;\n}\n.bg[data-v-7df69c7c] {\n    margin: 20px auto;\n}\n.bg + span.copy[data-v-7df69c7c]{\n    right: 5px;\n}\nspan.copy[data-v-7df69c7c]:hover, span.scale[data-v-7df69c7c]:hover, span.open-fiddle[data-v-7df69c7c]:hover{\n    color: #5c6b77;\n}\n\n",""])},331:function(e,t,n){"use strict";var o=n(325);n.n(o).a},332:function(e,t,n){(e.exports=n(15)(!1)).push([e.i,"\n.code-scale-modal .ivu-modal-body{\n    background-color: #f7f7f7;\n}\n.code-scale-modal pre{\n    font-size: 14px;\n}\n",""])},333:function(e,t,n){"use strict";var o=n(326);n.n(o).a},334:function(e,t,n){(e.exports=n(15)(!1)).push([e.i,".example {\n  border: 1px solid #eee;\n  border-radius: 6px;\n  margin-bottom: 20px;\n  position: relative;\n  transition: all 0.2s ease-in-out;\n}\n.example:hover {\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.15);\n  border-color: transparent;\n  position: relative;\n}\n.example-split {\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 42%;\n  border: 1px dashed #eee;\n}\n.example-vertical .example-split {\n  width: 100%;\n  float: left;\n  position: relative;\n  left: 0;\n}\n.example-demo {\n  padding: 20px 0;\n  position: relative;\n}\n.example-case {\n  padding: 0 20px;\n}\n.example-header {\n  font-weight: 500;\n  margin: 30px 0 10px;\n  position: relative;\n}\n.example-header span {\n  display: inline-block;\n  background: #fff;\n  padding: 0 5px 0 18px;\n  position: relative;\n  margin-left: 30px;\n  font-size: 14px;\n}\n.example-header span a {\n  opacity: 0;\n  transition: opacity 0.2s ease-in-out;\n}\n.example-header:hover span a {\n  opacity: 1;\n}\n.example-header:before {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 1px;\n  background: #eee;\n  position: absolute;\n  top: 10px;\n  left: 0;\n}\n.example-desc {\n  font-size: 12px;\n  padding: 0 20px;\n}\n.example-desc p {\n  font-size: 12px !important;\n  text-align: justify;\n}\n.example-desc ul li {\n  font-size: 12px !important;\n}\n.example-desc blockquote {\n  font-size: 12px !important;\n}\n.example-code {\n  padding: 0 10px;\n  position: relative;\n  overflow: hidden;\n  transition: height 0.2s ease-in-out;\n}\n.example-code-more {\n  position: absolute;\n  bottom: 0;\n  left: 4px;\n  right: 4px;\n  text-align: center;\n  cursor: pointer;\n  padding: 5px 0;\n  /*transition: background .1s ease-in-out;*/\n}\n.example-code-more:after {\n  content: '';\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  box-shadow: 0 -15px 30px #fff inset;\n}\n.example-code-more i {\n  position: relative;\n  top: 5px;\n  z-index: 2;\n}\n.example-code-more .ivu-btn {\n  padding: 0 0 4px;\n  position: relative;\n  top: 4px;\n  z-index: 2;\n}\n.example-code-more:hover {\n  /*background: #fff;*/\n}\n.example-code-more:hover i {\n  color: #5cb85c;\n}\n",""])},428:function(e,t,n){"use strict";n.r(t);var o=n(335),a=n(336),i=n(328),d=n(327);let s={};const l={type:"Upload",subtype:"drag",maxSize:2e4,action:"/uploadApi",multiple:!0,paste:!0,disabled:!1,data:{userName:"bingblog"},withCredentials:!0,showUploadList:!0,apiParams:["radio"],model:"fileList",tip:"上传的提示信息或者帮助信息"},r={fileList:[{name:"测试文件1️一",url:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2615193282,909154413&fm=173&app=49&f=JPEG?w=218&h=146&s=A33256841E0D3F5B54284D15030090E0"}]};s.data={field:l,model:r},s.code="\n<script>\nconst field = "+JSON.stringify(l,null,4)+";\nexport default {\n    data() {\n        return {\n            field,\n            model: "+JSON.stringify(r)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n';let c={};const p={type:"ImgUpload",subtype:"drag",maxSize:2e4,action:"https://jsonplaceholder.typicode.com/posts/",multiple:!0,paste:!0,disabled:!1,data:{userName:"bingblog"},withCredentials:!0,showUploadList:!0,apiParams:["radio"],model:"fileList",tip:"上传的提示信息或者帮助信息"},v={fileList:[{id:"13414214123412421341234",name:"img1img1img1img1img1.jpg",url:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3276523708,1156514398&fm=173&app=49&f=JPEG?w=218&h=146&s=DAB210C768C5AA471C5DFBA403007081"}]};c.data={field:p,model:v},c.code="\n<script>\nconst field = "+JSON.stringify(p,null,4)+";\nexport default {\n    data() {\n        return {\n            field,\n            model: "+JSON.stringify(v)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n';let _={};const h={type:"VideoUpload",subtype:"drag",maxSize:2e5,action:"https://jsonplaceholder.typicode.com/posts/",multiple:!0,paste:!0,disabled:!1,data:{userName:"bingblog"},withCredentials:!0,showUploadList:!0,apiParams:["radio"],model:"fileList",tip:"上传的提示信息或者帮助信息"},m={fileList:[{id:"134142141234124213421234",name:"b6aafe3af127fd2ef47a1afb54fcd4bd.mp4",url:"http://sc4.hao123img.com/materials/xz.upload/b6/b6aafe3af127fd2ef47a1afb54fcd4bd.mp4"}]};_.data={field:h,model:m},_.code="\n<script>\nconst field = "+JSON.stringify(h,null,4)+";\nexport default {\n    data() {\n        return {\n            field,\n            model: "+JSON.stringify(m)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n';var f={simple:s,image:c,video:_},g={components:{iArticle:o.a,inAnchor:a.a,iCode:i.a,Demo:d.a},data:()=>({code:f}),methods:{handleFieldChange(e,t){console.log(e,t)}}},u=n(0),x=Object(u.a)(g,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("i-article",[n("article",[n("h1",[e._v("Upload 上传")]),e._v(" "),n("inAnchor",{attrs:{title:"概述",h2:""}}),e._v(" "),n("p",[e._v("文件选择上传和拖拽上传控件")]),e._v(" "),n("div",{staticClass:"api"},[n("inAnchor",{attrs:{title:"配置快速查询",h2:""}}),e._v(" "),n("inAnchor",{attrs:{title:"核心配置",h3:""}}),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("属性")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("默认值")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("type")]),e._v(" "),n("td",[e._v("上传组件的类型")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("Upload/ImgUpload/VideoUpload")])]),e._v(" "),n("tr",[n("td",[e._v("model")]),e._v(" "),n("td",[e._v("索引名称（必填）")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("不为空")])]),e._v(" "),n("tr",[n("td",[e._v("action")]),e._v(" "),n("td",[e._v("上传的地址，必填")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("subtype")]),e._v(" "),n("td",[e._v("上传控件的类型，可选值为 select（点击选择），drag（支持拖拽）")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("select")])]),e._v(" "),n("tr",[n("td",[e._v("maxSize")]),e._v(" "),n("td",[e._v("\n                            文件大小限制，单位 kb\n                        ")]),e._v(" "),n("td",[e._v("Number")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("multiple")]),e._v(" "),n("td",[e._v("默认是否在出现和消失时使用渐变的动画，动画时长可能会引起占位的闪烁")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("true")])]),e._v(" "),n("tr",[n("td",[e._v("headers")]),e._v(" "),n("td",[e._v("设置上传的请求头部")]),e._v(" "),n("td",[e._v("Object")]),e._v(" "),n("td",[e._v("{}")])]),e._v(" "),n("tr",[n("td",[e._v("paste")]),e._v(" "),n("td",[e._v("是否支持粘贴上传文件")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("disabled")]),e._v(" "),n("td",[e._v("是否禁用")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("data")]),e._v(" "),n("td",[e._v("上传时附带的额外参数")]),e._v(" "),n("td",[e._v("Object")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("name")]),e._v(" "),n("td",[e._v("上传的文件字段名")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("file")])]),e._v(" "),n("tr",[n("td",[e._v("withCredentials")]),e._v(" "),n("td",[e._v("支持发送 cookie 凭证信息")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("showUploadList")]),e._v(" "),n("td",[e._v("是否显示已上传文件列表")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("true")])]),e._v(" "),n("tr",[n("td",[e._v("accept")]),e._v(" "),n("td",[e._v("凭证信息接受上传的"),n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept"}},[e._v("文件类型")])]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("format")]),e._v(" "),n("td",[e._v("支持的文件类型，与 accept 不同的是，format 是识别文件的后缀名，accept 为 input 标签原生的 accept 属性，会在选择文件时过滤，可以两者结合使用")]),e._v(" "),n("td",[e._v("Array")]),e._v(" "),n("td",[e._v("[]")])]),e._v(" "),n("tr",[n("td",[e._v("tip")]),e._v(" "),n("td",[e._v("辅助提示内容，动画时长可能会引起占位的闪烁")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("suffix")]),e._v(" "),n("td",[e._v("去掉文件名后缀(上传成功后)")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("needDealUploadData")]),e._v(" "),n("td",[e._v("是否需要处理接口返回的数据")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("accessKey")]),e._v(" "),n("td",[e._v("需要单独获取的接口返回数据的key(需要处理后端数据时，必传)")]),e._v(" "),n("td",[e._v("Array")]),e._v(" "),n("td",[e._v("-")])])])])],1),e._v(" "),n("inAnchor",{attrs:{title:"代码示例",h2:""}}),e._v(" "),n("Demo",{attrs:{title:"基础用法"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.simple.data.model}},[n("FieldGenerator",{attrs:{field:e.code.simple.data.field},on:{"on-field-change":e.handleFieldChange}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("通过设置"),n("code",[e._v("field")]),e._v(", "),n("code",[e._v("model")]),e._v("即可生成一个Upload。")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.simple.code))])],1),e._v(" "),n("Demo",{attrs:{title:"图片上传"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.image.data.model}},[n("FieldGenerator",{attrs:{field:e.code.image.data.field},on:{"on-field-change":e.handleFieldChange}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("通过设置"),n("code",[e._v("field")]),e._v(", "),n("code",[e._v("model")]),e._v("即可生成一个Upload。")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.image.code))])],1),e._v(" "),n("Demo",{attrs:{title:"视频上传"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.video.data.model}},[n("FieldGenerator",{attrs:{field:e.code.video.data.field},on:{"on-field-change":e.handleFieldChange}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("通过设置"),n("code",[e._v("field")]),e._v(", "),n("code",[e._v("model")]),e._v("即可生成一个Upload。")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.video.code))])],1)],1)])},[],!1,null,null,null).exports;t.default=x}}]);