(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{201:function(e,n,o){var t=o(207);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);(0,o(13).default)("1d1ca5c6",t,!0,{})},202:function(e,n,o){var t=o(209);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);(0,o(13).default)("81bb6994",t,!0,{})},203:function(e,n,o){var t=o(211);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);(0,o(13).default)("77ec0b88",t,!0,{})},204:function(e,n,o){"use strict";o(215),o(85),o(84);var t=o(216),a=o.n(t),i=o(217),s=o.n(i),l={props:{lang:{type:String,default:"javascript"},bg:{type:Boolean,default:!1}},data(){return{openScale:!1,code:"",copied:!1,docLang:this.$lang,title:"Code"}},computed:{language(){return"auto"==this.lang?"":this.lang}},mounted(){this.code=this.$refs.code.innerHTML.replace(/\n/,""),this.$refs.code.innerHTML=this.code,a.a.highlightBlock(this.$refs.code),this.$refs.code2.innerHTML=this.code,a.a.highlightBlock(this.$refs.code2);var e=this.$parent.$parent.$parent;"Demo"===e.$options.name&&(this.title=e.title)},methods:{clip(){var e=this.code.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),n=new s.a(".copy",{text:()=>e});n.on("success",e=>{e.clearSelection(),n.destroy(),this.copied=!0,"zh-CN"===this.docLang?this.$Message.success("代码已复制到剪贴板"):this.$Message.success("Code copied"),setTimeout(()=>{this.copied=!1},2e3)})},scale(){this.openScale=!0},getSource(e,n){var o=new RegExp("<"+n+"[^>]*>"),t=e.match(o);return t?(t=t[0],e.slice(e.indexOf(t)+t.length,e.lastIndexOf("</"+n+">"))):""},openFiddle(){}}},d=(o(206),o(208),o(0)),c=Object(d.a)(l,(function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{staticClass:"doc-code"},[o("pre",{class:{bg:e.bg}},[o("code",{ref:"code",class:e.language},[e._t("default")],2)]),e._v(" "),o("span",{staticClass:"scale",on:{click:e.scale}},[o("Tooltip",{attrs:{content:e.$t("index.code_fullscreen"),placement:"top",transfer:""}},[o("Icon",{attrs:{type:"md-qr-scanner",size:"18"}})],1)],1),e._v(" "),o("span",{staticClass:"copy",on:{click:e.clip}},[o("Tooltip",{attrs:{content:e.$t("index.code_copy"),placement:"top",transfer:""}},[o("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.copied,expression:"!copied"}],attrs:{type:"md-copy",size:"18"}}),e._v(" "),o("Icon",{directives:[{name:"show",rawName:"v-show",value:e.copied,expression:"copied"}],staticStyle:{color:"#5cb85c"},attrs:{type:"md-checkmark",size:"18"}})],1)],1),e._v(" "),o("Modal",{attrs:{"class-name":"code-scale-modal",title:e.title,width:"65"},model:{value:e.openScale,callback:function(n){e.openScale=n},expression:"openScale"}},[o("div",{staticClass:"doc-code"},[o("pre",{class:{bg:e.bg}},[e._v("                "),o("code",{ref:"code2",class:e.language}),e._v("\n            ")])])])],1)}),[],!1,null,null,null);n.a=c.exports},205:function(e,n,o){"use strict";o(84);var t=o(214),a={name:"Demo",props:{title:{type:String,default:""},vertical:{type:Boolean,default:!1},hideCode:{type:Boolean,default:!1}},data(){return{showCode:!1,showMore:!0,demo_height:0,code_height:0,ready:!1,lang:this.$lang}},computed:{isCodeHide(){return this.hideCode},isVertical(){return this.vertical},codeHeight(){var e={};return this.ready&&(this.showCode?e.height=this.code_height+"px":e.height=this.demo_height+"px"),e},style(){var e={opacity:1};return this.isCodeHide&&!this.showCode&&(e.opacity=0),e},title_link(){return t.a.getFirstLetter(this.title).replace(/\s/g,"_")}},watch:{settingCode(){this.showCode=!1,this.showMore=!0,this.ready=!1,this.init()}},mounted(){this.init()},methods:{init(){this.$nextTick(()=>{var e=this.$children[0].$children[0].$el.clientHeight,n=this.$children[0].$children[1].$el.clientHeight+20;this.code_height=n,n<=e&&!this.isCodeHide&&(this.showMore=!1),this.demo_height=this.isCodeHide?30:e,this.ready=!0})}}},i=(o(210),o(0)),s=Object(i.a)(a,(function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("Row",{staticClass:"example",class:{"example-vertical":e.isVertical},attrs:{id:e.title_link}},[o("i-col",{staticClass:"example-demo",attrs:{span:e.isVertical?24:10}},[o("div",{staticClass:"example-case"},[e._t("demo")],2),e._v(" "),o("header",{staticClass:"example-header"},[o("span",[e._v("\n                "+e._s(e.title)+"\n                "),o("a",{attrs:{href:"#"+e.title_link,"data-title":e.title}},[e._v("#")])])]),e._v(" "),o("div",{staticClass:"example-desc"},[e._t("desc")],2)]),e._v(" "),o("div",{staticClass:"example-split"}),e._v(" "),o("i-col",{staticClass:"example-code",style:e.codeHeight,attrs:{span:e.isVertical?24:14}},[o("div",{style:e.style},[e._t("code")],2),e._v(" "),e.showMore?o("div",{staticClass:"example-code-more",on:{click:function(n){e.showCode=!e.showCode}}},[o("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.showCode,expression:"!showCode"}],attrs:{type:"ios-arrow-down"}}),e._v(" "),o("Icon",{directives:[{name:"show",rawName:"v-show",value:e.showCode,expression:"showCode"}],attrs:{type:"ios-arrow-up"}}),e._v(" "),o("i-button",{directives:[{name:"show",rawName:"v-show",value:e.isCodeHide&&!e.showCode,expression:"isCodeHide && !showCode"}],attrs:{type:"text"}},["zh-CN"===e.lang?[e._v("显示代码")]:[e._v("Show Code")]],2)],1):e._e()])],1)}),[],!1,null,null,null);n.a=s.exports},206:function(e,n,o){"use strict";var t=o(201);o.n(t).a},207:function(e,n,o){(e.exports=o(12)(!1)).push([e.i,".doc-code .hljs {\n  display: block;\n  overflow-x: auto;\n  color: #525252;\n  padding: 15px;\n  -webkit-text-size-adjust: none;\n}\n.doc-code .hljs-doctype {\n  color: #999;\n}\n.doc-code .hljs-tag {\n  color: #3e76f6;\n}\n.doc-code .hljs-attribute {\n  color: #e96900;\n}\n.doc-code .hljs-value {\n  color: #42b983;\n}\n.doc-code .hljs-name {\n  color: #63a35c;\n  font-weight: bold;\n}\n.doc-code .hljs-keyword {\n  color: #e96900;\n}\n.doc-code .hljs-string {\n  color: #42b983;\n}\n.doc-code .hljs-comment {\n  color: #b3b3b3;\n}\n.doc-code .hljs-operator .hljs-comment {\n  color: #525252;\n}\n.doc-code .hljs-regexp {\n  color: #af7dff;\n}\n.doc-code .hljs-built_in {\n  color: #2db7f5;\n}\n.doc-code div {\n  position: relative;\n  font-size: 14px;\n}\n.doc-code span.copy,\n.doc-code span.scale,\n.doc-code span.open-fiddle {\n  border-radius: 0 0 3px 3px;\n  padding: 2px 5px;\n  position: absolute;\n  top: 5px;\n  right: 0;\n  color: #b2b2b2;\n  cursor: pointer;\n}\n.doc-code span.scale {\n  right: 25px;\n}\n.doc-code span.open-fiddle {\n  right: 50px;\n}\n.doc-code .bg {\n  margin: 20px auto;\n}\n.doc-code .bg + span.copy {\n  right: 5px;\n}\n.doc-code span.copy:hover,\n.doc-code span.scale:hover,\n.doc-code span.open-fiddle:hover {\n  color: #5c6b77;\n}\n",""])},208:function(e,n,o){"use strict";var t=o(202);o.n(t).a},209:function(e,n,o){(e.exports=o(12)(!1)).push([e.i,"\n.code-scale-modal .ivu-modal-body{\n    background-color: #f7f7f7;\n}\n.code-scale-modal pre{\n    font-size: 14px;\n}\n",""])},210:function(e,n,o){"use strict";var t=o(203);o.n(t).a},211:function(e,n,o){(e.exports=o(12)(!1)).push([e.i,".example {\n  border: 1px solid #eee;\n  border-radius: 6px;\n  margin-bottom: 20px;\n  position: relative;\n  transition: all 0.2s ease-in-out;\n}\n.example:hover {\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.15);\n  border-color: transparent;\n  position: relative;\n}\n.example-split {\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 42%;\n  border: 1px dashed #eee;\n}\n.example-vertical .example-split {\n  width: 100%;\n  float: left;\n  position: relative;\n  left: 0;\n}\n.example-demo {\n  padding: 20px 0;\n  position: relative;\n}\n.example-case {\n  padding: 0 20px;\n}\n.example-header {\n  font-weight: 500;\n  margin: 30px 0 10px;\n  position: relative;\n}\n.example-header span {\n  display: inline-block;\n  background: #fff;\n  padding: 0 5px 0 18px;\n  position: relative;\n  margin-left: 30px;\n  font-size: 14px;\n}\n.example-header span a {\n  opacity: 0;\n  transition: opacity 0.2s ease-in-out;\n}\n.example-header:hover span a {\n  opacity: 1;\n}\n.example-header:before {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 1px;\n  background: #eee;\n  position: absolute;\n  top: 10px;\n  left: 0;\n}\n.example-desc {\n  font-size: 12px;\n  padding: 0 20px;\n}\n.example-desc p {\n  font-size: 12px !important;\n  text-align: justify;\n}\n.example-desc ul li {\n  font-size: 12px !important;\n}\n.example-desc blockquote {\n  font-size: 12px !important;\n}\n.example-code {\n  padding: 0 10px;\n  position: relative;\n  overflow: hidden;\n  transition: height 0.2s ease-in-out;\n}\n.example-code-more {\n  position: absolute;\n  bottom: 0;\n  left: 4px;\n  right: 4px;\n  text-align: center;\n  cursor: pointer;\n  padding: 5px 0;\n  /*transition: background .1s ease-in-out;*/\n}\n.example-code-more:after {\n  content: '';\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  box-shadow: 0 -15px 30px #fff inset;\n}\n.example-code-more i {\n  position: relative;\n  top: 5px;\n  z-index: 2;\n}\n.example-code-more .ivu-btn {\n  padding: 0 0 4px;\n  position: relative;\n  top: 4px;\n  z-index: 2;\n}\n.example-code-more:hover {\n  /*background: #fff;*/\n}\n.example-code-more:hover i {\n  color: #5cb85c;\n}\n",""])},233:function(e,n,o){"use strict";var t={},a={os:"",brand:""};t.data={field:[{type:"Radio",model:"os",label:"系统",options:[{label:"IOS",value:"IOS"},{label:"Android",value:"Android"}]},function(e){var{os:n}=e;return{model:"brand",type:"Radio",label:(n||"IOS")+"-品牌",options:{IOS:[{label:"苹果",value:"apple"}],Android:[{label:"三星",value:"samsung"},{label:"华为",value:"huawei"}]}[n||"IOS"]}}],model:a},t.code="\n<script>\nconst fields = [\n    {\n        type: 'Radio',\n        model: 'os',\n        label: '系统',\n        options:[\n            {label: 'IOS', 'value': 'IOS'},\n            {label: 'Android', 'value': 'Android'},\n        ]\n    },\n    function field(paramsContainer) {\n        const {os} = paramsContainer;\n        const map = {\n            'IOS': [\n                {label: '苹果', 'value': 'apple'},\n            ],\n            'Android': [\n                {label: '三星', 'value': 'samsung'},\n                {label: '华为', 'value': 'huawei'},\n            ]\n        };\n        return {\n            model: 'brand',\n            type: 'Radio',\n            label: (os || 'IOS') + '-品牌',\n            options: map[os || 'IOS']\n        };\n    }\n];\nexport default {\n    data() {\n        return {\n            field,\n            model: "+JSON.stringify(a)+'\n        };\n    },\n};\n<\/script>\n<template>\n    <FormGenerator\n        :fields="fields"\n        :dynamic-config-data="requestInterceptor"\n    />\n</template>\n',n.a={simple:t}},359:function(e,n,o){"use strict";o.r(n);var t=o(212),a=o(213),i=o(204),s=o(205),l=o(233),d={components:{iArticle:t.a,inAnchor:a.a,iCode:i.a,Demo:s.a},data:()=>({code:l.a})},c=o(0),r=Object(c.a)(d,(function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("i-article",[o("article",[o("h1",[e._v("函数类型的配置项")]),e._v(" "),o("p",[e._v("在实际项目中，可能需要动态的更新某些控件的状态，比如动态禁用某个控件，变更Radio的选择项。")]),e._v(" "),o("div",{staticClass:"api"},[o("inAnchor",{attrs:{title:"代码示例",h2:""}}),e._v(" "),o("Demo",{attrs:{title:"控件的field为函数"}},[o("div",{attrs:{slot:"demo"},slot:"demo"},[o("FormGenerator",{attrs:{fields:e.code.simple.data.field,model:e.code.simple.data.model}})],1),e._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("\n                    支持配置项设置为函数，paramsContainer中包含当前表单的model的值和外部传入的参数的集合。\n                ")]),e._v(" "),o("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.simple.code))])],1)],1)])])}),[],!1,null,null,null).exports;n.default=r}}]);