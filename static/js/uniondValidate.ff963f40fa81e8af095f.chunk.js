(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{201:function(e,n,t){var o=t(207);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,t(13).default)("1d1ca5c6",o,!0,{})},202:function(e,n,t){var o=t(209);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,t(13).default)("81bb6994",o,!0,{})},203:function(e,n,t){var o=t(211);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,t(13).default)("77ec0b88",o,!0,{})},204:function(e,n,t){"use strict";t(215),t(85),t(84);var o=t(216),i=t.n(o),a=t(217),s=t.n(a),l={props:{lang:{type:String,default:"javascript"},bg:{type:Boolean,default:!1}},data(){return{openScale:!1,code:"",copied:!1,docLang:this.$lang,title:"Code"}},computed:{language(){return"auto"==this.lang?"":this.lang}},mounted(){this.code=this.$refs.code.innerHTML.replace(/\n/,""),this.$refs.code.innerHTML=this.code,i.a.highlightBlock(this.$refs.code),this.$refs.code2.innerHTML=this.code,i.a.highlightBlock(this.$refs.code2);var e=this.$parent.$parent.$parent;"Demo"===e.$options.name&&(this.title=e.title)},methods:{clip(){var e=this.code.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),n=new s.a(".copy",{text:()=>e});n.on("success",e=>{e.clearSelection(),n.destroy(),this.copied=!0,"zh-CN"===this.docLang?this.$Message.success("代码已复制到剪贴板"):this.$Message.success("Code copied"),setTimeout(()=>{this.copied=!1},2e3)})},scale(){this.openScale=!0},getSource(e,n){var t=new RegExp("<"+n+"[^>]*>"),o=e.match(t);return o?(o=o[0],e.slice(e.indexOf(o)+o.length,e.lastIndexOf("</"+n+">"))):""},openFiddle(){}}},c=(t(206),t(208),t(0)),r=Object(c.a)(l,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"doc-code"},[t("pre",{class:{bg:e.bg}},[t("code",{ref:"code",class:e.language},[e._t("default")],2)]),e._v(" "),t("span",{staticClass:"scale",on:{click:e.scale}},[t("Tooltip",{attrs:{content:e.$t("index.code_fullscreen"),placement:"top",transfer:""}},[t("Icon",{attrs:{type:"md-qr-scanner",size:"18"}})],1)],1),e._v(" "),t("span",{staticClass:"copy",on:{click:e.clip}},[t("Tooltip",{attrs:{content:e.$t("index.code_copy"),placement:"top",transfer:""}},[t("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.copied,expression:"!copied"}],attrs:{type:"md-copy",size:"18"}}),e._v(" "),t("Icon",{directives:[{name:"show",rawName:"v-show",value:e.copied,expression:"copied"}],staticStyle:{color:"#5cb85c"},attrs:{type:"md-checkmark",size:"18"}})],1)],1),e._v(" "),t("Modal",{attrs:{"class-name":"code-scale-modal",title:e.title,width:"65"},model:{value:e.openScale,callback:function(n){e.openScale=n},expression:"openScale"}},[t("div",{staticClass:"doc-code"},[t("pre",{class:{bg:e.bg}},[e._v("                "),t("code",{ref:"code2",class:e.language}),e._v("\n            ")])])])],1)}),[],!1,null,null,null);n.a=r.exports},205:function(e,n,t){"use strict";t(84);var o=t(214),i={name:"Demo",props:{title:{type:String,default:""},vertical:{type:Boolean,default:!1},hideCode:{type:Boolean,default:!1}},data(){return{showCode:!1,showMore:!0,demo_height:0,code_height:0,ready:!1,lang:this.$lang}},computed:{isCodeHide(){return this.hideCode},isVertical(){return this.vertical},codeHeight(){var e={};return this.ready&&(this.showCode?e.height=this.code_height+"px":e.height=this.demo_height+"px"),e},style(){var e={opacity:1};return this.isCodeHide&&!this.showCode&&(e.opacity=0),e},title_link(){return o.a.getFirstLetter(this.title).replace(/\s/g,"_")}},watch:{settingCode(){this.showCode=!1,this.showMore=!0,this.ready=!1,this.init()}},mounted(){this.init()},methods:{init(){this.$nextTick(()=>{var e=this.$children[0].$children[0].$el.clientHeight,n=this.$children[0].$children[1].$el.clientHeight+20;this.code_height=n,n<=e&&!this.isCodeHide&&(this.showMore=!1),this.demo_height=this.isCodeHide?30:e,this.ready=!0})}}},a=(t(210),t(0)),s=Object(a.a)(i,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("Row",{staticClass:"example",class:{"example-vertical":e.isVertical},attrs:{id:e.title_link}},[t("i-col",{staticClass:"example-demo",attrs:{span:e.isVertical?24:10}},[t("div",{staticClass:"example-case"},[e._t("demo")],2),e._v(" "),t("header",{staticClass:"example-header"},[t("span",[e._v("\n                "+e._s(e.title)+"\n                "),t("a",{attrs:{href:"#"+e.title_link,"data-title":e.title}},[e._v("#")])])]),e._v(" "),t("div",{staticClass:"example-desc"},[e._t("desc")],2)]),e._v(" "),t("div",{staticClass:"example-split"}),e._v(" "),t("i-col",{staticClass:"example-code",style:e.codeHeight,attrs:{span:e.isVertical?24:14}},[t("div",{style:e.style},[e._t("code")],2),e._v(" "),e.showMore?t("div",{staticClass:"example-code-more",on:{click:function(n){e.showCode=!e.showCode}}},[t("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.showCode,expression:"!showCode"}],attrs:{type:"ios-arrow-down"}}),e._v(" "),t("Icon",{directives:[{name:"show",rawName:"v-show",value:e.showCode,expression:"showCode"}],attrs:{type:"ios-arrow-up"}}),e._v(" "),t("i-button",{directives:[{name:"show",rawName:"v-show",value:e.isCodeHide&&!e.showCode,expression:"isCodeHide && !showCode"}],attrs:{type:"text"}},["zh-CN"===e.lang?[e._v("显示代码")]:[e._v("Show Code")]],2)],1):e._e()])],1)}),[],!1,null,null,null);n.a=s.exports},206:function(e,n,t){"use strict";var o=t(201);t.n(o).a},207:function(e,n,t){(e.exports=t(12)(!1)).push([e.i,".doc-code .hljs {\n  display: block;\n  overflow-x: auto;\n  color: #525252;\n  padding: 15px;\n  -webkit-text-size-adjust: none;\n}\n.doc-code .hljs-doctype {\n  color: #999;\n}\n.doc-code .hljs-tag {\n  color: #3e76f6;\n}\n.doc-code .hljs-attribute {\n  color: #e96900;\n}\n.doc-code .hljs-value {\n  color: #42b983;\n}\n.doc-code .hljs-name {\n  color: #63a35c;\n  font-weight: bold;\n}\n.doc-code .hljs-keyword {\n  color: #e96900;\n}\n.doc-code .hljs-string {\n  color: #42b983;\n}\n.doc-code .hljs-comment {\n  color: #b3b3b3;\n}\n.doc-code .hljs-operator .hljs-comment {\n  color: #525252;\n}\n.doc-code .hljs-regexp {\n  color: #af7dff;\n}\n.doc-code .hljs-built_in {\n  color: #2db7f5;\n}\n.doc-code div {\n  position: relative;\n  font-size: 14px;\n}\n.doc-code span.copy,\n.doc-code span.scale,\n.doc-code span.open-fiddle {\n  border-radius: 0 0 3px 3px;\n  padding: 2px 5px;\n  position: absolute;\n  top: 5px;\n  right: 0;\n  color: #b2b2b2;\n  cursor: pointer;\n}\n.doc-code span.scale {\n  right: 25px;\n}\n.doc-code span.open-fiddle {\n  right: 50px;\n}\n.doc-code .bg {\n  margin: 20px auto;\n}\n.doc-code .bg + span.copy {\n  right: 5px;\n}\n.doc-code span.copy:hover,\n.doc-code span.scale:hover,\n.doc-code span.open-fiddle:hover {\n  color: #5c6b77;\n}\n",""])},208:function(e,n,t){"use strict";var o=t(202);t.n(o).a},209:function(e,n,t){(e.exports=t(12)(!1)).push([e.i,"\n.code-scale-modal .ivu-modal-body{\n    background-color: #f7f7f7;\n}\n.code-scale-modal pre{\n    font-size: 14px;\n}\n",""])},210:function(e,n,t){"use strict";var o=t(203);t.n(o).a},211:function(e,n,t){(e.exports=t(12)(!1)).push([e.i,".example {\n  border: 1px solid #eee;\n  border-radius: 6px;\n  margin-bottom: 20px;\n  position: relative;\n  transition: all 0.2s ease-in-out;\n}\n.example:hover {\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.15);\n  border-color: transparent;\n  position: relative;\n}\n.example-split {\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 42%;\n  border: 1px dashed #eee;\n}\n.example-vertical .example-split {\n  width: 100%;\n  float: left;\n  position: relative;\n  left: 0;\n}\n.example-demo {\n  padding: 20px 0;\n  position: relative;\n}\n.example-case {\n  padding: 0 20px;\n}\n.example-header {\n  font-weight: 500;\n  margin: 30px 0 10px;\n  position: relative;\n}\n.example-header span {\n  display: inline-block;\n  background: #fff;\n  padding: 0 5px 0 18px;\n  position: relative;\n  margin-left: 30px;\n  font-size: 14px;\n}\n.example-header span a {\n  opacity: 0;\n  transition: opacity 0.2s ease-in-out;\n}\n.example-header:hover span a {\n  opacity: 1;\n}\n.example-header:before {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 1px;\n  background: #eee;\n  position: absolute;\n  top: 10px;\n  left: 0;\n}\n.example-desc {\n  font-size: 12px;\n  padding: 0 20px;\n}\n.example-desc p {\n  font-size: 12px !important;\n  text-align: justify;\n}\n.example-desc ul li {\n  font-size: 12px !important;\n}\n.example-desc blockquote {\n  font-size: 12px !important;\n}\n.example-code {\n  padding: 0 10px;\n  position: relative;\n  overflow: hidden;\n  transition: height 0.2s ease-in-out;\n}\n.example-code-more {\n  position: absolute;\n  bottom: 0;\n  left: 4px;\n  right: 4px;\n  text-align: center;\n  cursor: pointer;\n  padding: 5px 0;\n  /*transition: background .1s ease-in-out;*/\n}\n.example-code-more:after {\n  content: '';\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  box-shadow: 0 -15px 30px #fff inset;\n}\n.example-code-more i {\n  position: relative;\n  top: 5px;\n  z-index: 2;\n}\n.example-code-more .ivu-btn {\n  padding: 0 0 4px;\n  position: relative;\n  top: 4px;\n  z-index: 2;\n}\n.example-code-more:hover {\n  /*background: #fff;*/\n}\n.example-code-more:hover i {\n  color: #5cb85c;\n}\n",""])},346:function(e,n,t){"use strict";t.r(n);var o=t(212),i=t(213),a=t(204),s=t(205),l={},c={searchType:"async",limit:2e3};l.data={fields:[{label:"查询方式",type:"Radio",model:"searchType",options:[{label:"立即",value:"sync"},{label:"异步",value:"async"}],required:!0},function(e){var n={label:"条数上限",type:"InputNumber",model:"limit",required:!0};return"sync"===e.searchType&&(n.rules=[{type:"number",max:1e3,message:"立即查询时，条数不可大于1千"}]),n},{type:"Submit",subtype:"primary",text:"提交",inline:!0},{type:"Reset",text:"重置",labelWidth:0,inline:!0}],model:c},l.code="\n<script>\nconst fields = [\n    {\n        label: '查询方式',\n        type: 'Radio',\n        model: 'searchType',\n        options: [\n            {label: '立即', 'value': 'sync'},\n            {label: '异步', 'value': 'async'}\n        ],\n        required: true\n    },\n    function field(paramsContainer) {\n        const config = {\n            label: '条数上限',\n            type: 'InputNumber',\n            model: 'limit',\n            required: true\n        };\n        if (paramsContainer.searchType === 'sync') {\n            config.rules = [\n                {\n                    type: 'number',\n                    max: 1000,\n                    message: '立即查询时，条数不可大于1千'\n                }\n            ];\n        }\n        return config;\n    },\n    {\n        type: 'Submit',\n        subtype: 'primary',\n        text: '提交',\n        inline: true\n    },\n    {\n        type: 'Reset',\n        text: '重置',\n        labelWidth: 0,\n        inline: true\n    }\n];\nconst model = "+JSON.stringify(c,null,4)+';\nexport default {\n    data() {\n        return {\n            fields,\n            model\n        };\n    }\n};\n<\/script>\n<template>\n    <FormGenerator\n        :fields="fields"\n        :model="model"\n    />\n</template>\n';var r={validateForm:l},d={components:{iArticle:o.a,inAnchor:i.a,iCode:a.a,Demo:s.a},data:()=>({code:r}),methods:{handleFieldChange(){}}},p=t(0),h=Object(p.a)(d,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("i-article",[t("article",[t("h1",[e._v("联动校验")]),e._v(" "),t("inAnchor",{attrs:{title:"概述",h2:""}}),e._v(" "),t("p",[e._v("联动校验，是指控件的校验规则受到其它值的影响。")]),e._v(" "),t("div",{staticClass:"api"},[t("inAnchor",{attrs:{title:"配置快速查询",h2:""}}),e._v(" "),t("p"),e._v(" "),t("inAnchor",{attrs:{title:"代码示例",h2:""}}),e._v(" "),t("Demo",{attrs:{title:"验证规则依赖值"}},[t("div",{attrs:{slot:"demo"},slot:"demo"},[t("FormGenerator",{attrs:{fields:e.code.validateForm.data.fields,model:e.code.validateForm.data.model,options:e.code.validateForm.data.options}})],1),e._v(" "),t("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("\n                    当查询条件选择立即时，条数上线必须小于1千。\n                ")]),e._v(" "),t("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.validateForm.code))])],1)],1)],1)])}),[],!1,null,null,null).exports;n.default=h}}]);